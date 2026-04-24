<!-- Source: https://session.interprefy.com/ -->

# Interprefy Session Management API Reference

## Base URL

All API calls start with: `{protocol}://{host}/api/v2`

Production: `https://session.interprefy.com/api/v2`

## Request/Response Format

- All requests must be in **JSON**
- All responses are returned in **JSON**
- Required headers: `Accept: application/json` and `Content-Type: application/json`

## Authentication

### Client Authentication (Static API Token)

For client-side operations (RTC sessions, booking emails, network tests).

```bash
curl -X POST "https://session.interprefy.com/api/v2/rtcsessions/" \
  -H "Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"loginToken":"ABC12345"}'
```

Clients cannot modify data.

### Management Interface Authentication (JWT)

For management operations (events, sessions, users, login tokens).

**Obtain token:**

```
POST /token-auth/obtain/
Content-Type: application/json

{"username": "test", "password": "testpass"}

Response: {"token": "eyJ0eXAiOiJK(...)aBqroY"}
```

**Use token:**

```
Authorization: JWT eyJ0eXAiOiJK(...)aBqroY
```

**Token claims:** `username`, `user_id`, `email`, `exp` (expiration timestamp)

**Token expiration:** 7-day validity, 1-hour grace period. Refresh via:

```
POST /token-auth/refresh/
Content-Type: application/json

{"token": "existing_token"}

Response: {"token": "new_token"}
```

Tokens can be refreshed up to 30 days after initial issuance.

## Pagination

Default page size: 100 entries.

Parameters: `limit` (page size) and `offset` (page number).

```
GET /api/v2/events/?limit=50&offset=2
```

## Filtering

Use query parameters:

```
GET /api/v2/sessions/?event=3
```

**Important:** Boolean values must be capitalized (`True`/`False`, not `true`/`false`).

## Error Handling

**General errors:**

```json
{"detail": "Authentication credentials were not provided."}
```

**Field-specific errors:**

```json
{"password": ["This field is required."]}
```

**Non-field errors:**

```json
{"nonFieldErrors": ["Unable to login with provided credentials."]}
```

---

## USERS

**Auth:** JWT required

| Field | Type | Notes |
|---|---|---|
| `id` | Integer | Primary key, read-only |
| `username` | String | Unique |
| `email` | String | |
| `firstName` | String | Nullable |
| `lastName` | String | Nullable |
| `blocked` | Boolean | Read-only |
| `role` | String | `admin`, `partner`, or `manager` |
| `creator` | Integer | User PK who created this user, nullable |

| Method | Path | Purpose |
|---|---|---|
| GET | `/users/` | List all users |
| POST | `/users/` | Create user (requires: `username`, `role`) |
| GET | `/users/:id/` | Retrieve specific user |
| PUT | `/users/:id/` | Full update |
| PATCH | `/users/:id/` | Partial update |
| DELETE | `/users/:id/` | Delete user |
| POST | `/users/:id/password_change/` | Change password (requires: `oldPw`, `newPw`, `newPwRepeat`) |
| POST | `/users/:id/password_set/` | Admin sets password (requires: `newPw`) |
| POST | `/users/:id/block/` | Block user (returns 204) |
| POST | `/users/:id/unblock/` | Unblock user (returns 204) |

---

## EVENTS

**Auth:** JWT required

| Field | Type | Notes |
|---|---|---|
| `id` | Integer | Primary key, read-only |
| `name` | String | Unique, internal name |
| `displayName` | String | User-facing name, nullable |
| `logo` | String | URL, nullable |
| `owner` | Integer | Creator PK |
| `managers` | List[Integer] | Manager user PKs |
| `disabled` | Boolean | Default: false |
| `subscribersSeeFloor` | Boolean | Default: false |
| `locationHint` | String | IP address, nullable |
| `allowSourceVideo` | Boolean | Default: false |
| `quality` | String | Free text |
| `mobileDisallow` | Boolean | Default: false |
| `mobileAudienceDisallow` | Boolean | Default: false |
| `mobileData` | String | Free text |
| `mfa` | String | `phone`, `email`, `both`, or empty |

| Method | Path | Purpose |
|---|---|---|
| GET | `/events/` | List all events |
| POST | `/events/` | Create event (requires: `name`) |
| GET | `/events/:id/` | Retrieve specific event |
| PUT | `/events/:id/` | Full update |
| PATCH | `/events/:id/` | Partial update |
| DELETE | `/events/:id/` | Delete event |
| GET | `/events/:id/archives/` | Get session archives |

---

## SESSIONS

**Auth:** JWT required

| Field | Type | Notes |
|---|---|---|
| `id` | Integer | Primary key, read-only |
| `event` | Integer | Event PK, read-only |
| `language` | String | Language name or `"Floor"` |
| `languageCode` | String | Nullable |
| `isFloor` | Boolean | Default: false, max one per event |
| `sessionId` | String | TokBox session ID, read-only, auto-generated |
| `mode` | String | `relayed` or `routed`, default: `routed` |
| `archive` | Boolean | Default: true, cannot be true if mode is `relayed` |

| Method | Path | Purpose |
|---|---|---|
| GET | `/sessions/` | List all sessions |
| POST | `/sessions/` | Create session (requires: `event`, `language`) |
| GET | `/sessions/:id/` | Retrieve specific session |
| PUT | `/sessions/:id/` | Full update |
| PATCH | `/sessions/:id/` | Partial update |
| DELETE | `/sessions/:id/` | Delete session |

---

## LOGIN TOKENS

**Auth:** JWT required

| Field | Type | Notes |
|---|---|---|
| `id` | Integer | Primary key, read-only |
| `event` | Integer | Event PK, read-only |
| `token` | String | Min 8 characters, unique |
| `tokenType` | String | `participant`, `interpreter`, `floor`, `remote`, or `moderator` |

| Method | Path | Purpose |
|---|---|---|
| GET | `/logintokens/` | List all login tokens |
| POST | `/logintokens/` | Create token (requires: `event`, `token`, `tokenType`) |
| GET | `/logintokens/:id/` | Retrieve specific token |
| PUT | `/logintokens/:id/` | Full update |
| PATCH | `/logintokens/:id/` | Partial update |
| DELETE | `/logintokens/:id/` | Delete token |

---

## RTC SESSIONS

**Auth:** Static API token required

Clients request session information using a login token.

**POST `/rtcsessions/`**

Request:
- Required: `loginToken` (string)
- Optional: `additionalAccess` (list of strings) — `view_floor` forces floor session return

Response codes:
- `201 Created` — login successful, session tokens generated
- `400 Bad Request` — missing login token
- `403 Forbidden` — invalid token or mobile/non-mobile mismatch
- `404 Not Found` — event disabled
- `500 Internal Server Error`

Response body includes: `event` (object), `loginToken` (object with tokenType), `sessions` (array with `sessionId` and `sessionToken`).

---

## BOOKING EMAILS

**Auth:** Static API token required

**POST `/bookingemails/`**

Request body:

```json
{
  "event": {
    "date": "2026-05-15",
    "country": "Switzerland",
    "lengthDays": "3",
    "lengthHoursDay": "8",
    "amountPeople": "500",
    "fromLang": "English",
    "toLang": "Spanish, French"
  },
  "contact": {
    "name": "Jane Doe",
    "position": "Head of Events",
    "company": "Acme Corp",
    "phone": "+41 79 123 4567",
    "email": "events@acme.com"
  }
}
```

Response codes:
- `204 No Content` — email sent successfully
- `400 Bad Request` — missing fields
- `500 Internal Server Error` — email delivery failed

---

## NETWORK TEST SESSIONS

**Auth:** Static API token required

**POST `/networktestsessions/`**

Generates a TokBox session for network quality testing.

Response:

```json
{
  "sessionId": "2_MX40Njk0OTEwNH5-...",
  "sessionToken": "T1==cGFydG5lcl9pZ..."
}
```

Response code: `201 Created`

---

## Gaps

- No webhooks documented
- No rate limit headers or limits documented
- No bulk operation endpoints
- Interpreter booking is UI-only (not API-accessible)
- AI translation toggle is UI-only (not API-accessible)
- No MCP server
- No Zapier/Make connectors
