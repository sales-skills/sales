<!-- Source: https://docs.mparticle.com/developers/ (JS-rendered, content assembled from GitHub raw docs at github.com/mparticle/docs and WebSearch results) -->

# mParticle API Reference

## 1. Events API

Server-side event collection for backend systems.

### Regional Endpoints

| Pod | Base URL |
|---|---|
| US1 | `https://s2s.mparticle.com/v2` or `https://s2s.us1.mparticle.com/v2` |
| US2 | `https://s2s.us2.mparticle.com/v2` |
| EU1 | `https://s2s.eu1.mparticle.com/v2` |
| AU1 | `https://s2s.au1.mparticle.com/v2` |

### Authentication

HTTP Basic Authentication:
- Username: API Key
- Password: API Secret
- Or manually: `Authorization: Basic {base64(apiKey:apiSecret)}`

### Endpoints

**`POST /v2/events`** — Submit a single event batch for one user.
- Max batch size: 128KB
- Each batch must contain data for a single user only

**`POST /v2/bulkevents`** — Submit up to 100 event batches for multiple users.
- Returns 202 Accepted even if individual batches fail
- Use for higher throughput

**`POST /v2/bulkevents/historical`** — Submit historical data older than 30 days.
- All events must include `timestamp_unixtime_ms`
- Timestamps must be more than 72 hours old
- Batches must contain at least one event

### Rate Limits

250 events per second. Contact support@mparticle.com for higher limits.

### Response Codes

| Code | Meaning |
|---|---|
| 202 | Accepted |
| 400 | Malformed JSON or missing required fields |
| 401 | Missing Authorization header |
| 403 | Invalid credentials |
| 429 | Rate limit exceeded (check Retry-After header) |
| 503/5xx | Server error — use exponential backoff |

### Best Practices
- Group multiple events per user in a single batch
- Send batches at intervals, not one event at a time
- Use `/bulkevents` for multi-user sends (up to 100 batches)
- Each batch should not exceed 128KB
- One user per batch only

---

## 2. Platform API

REST API for programmatically managing apps, platforms, connections, and services.

### Base URL

`https://api.mparticle.com`

Resources at `/v1/` and `/platform/v2/`.

### Authentication

OAuth 2.0 Client Credentials:

```
POST https://sso.auth.mparticle.com/oauth/token
Content-Type: application/json

{
  "client_id": "<CLIENT_ID>",
  "client_secret": "<CLIENT_SECRET>",
  "audience": "https://api.mparticle.com",
  "grant_type": "client_credentials"
}
```

Response: `{"access_token": "...", "token_type": "Bearer", "expires_in": 28800}`

Token expires in ~8 hours. Cannot be revoked. Cache and refresh proactively. Initial token request takes 1-3 seconds.

Use: `Authorization: Bearer <access_token>`

### Required Parameters

All API calls require `accountId` query parameter.

### Resources

- **Accounts**: CRUD operations on accounts
- **Apps & Platforms**: Manage applications across iOS, Android, tvOS, MobileWeb, Roku, Alexa, SmartTV, FireTV, Xbox
- **Service Configuration**: Configure data forwarding to third-party services
- **Audiences**: Query active audiences (single and multi-workspace)
- **Calculated Attributes**: Define computed user attributes using event-based recipes
- **DataPoints**: Manage events, attributes, screen views; configure filtering
- **Partner Feeds**: Set up inbound partner integrations
- **Workspaces**: Manage workspace-level configurations

### Response Format

```json
{
  "data": { ... },
  "dataType": "string",
  "errors": []
}
```

### Status Codes

200, 201, 202, 204 (success) | 400, 401, 403, 404, 405 (client error) | 422 (validation/business logic) | 500, 504 (server error)

---

## 3. IDSync API (Identity)

Identity management and matching across devices and channels.

### Base URL

`https://identity.mparticle.com/v1` (US1 — other pods use pod-specific URLs)

### Authentication (3 options)

1. **Basic Auth**: API Key (username) + API Secret (password)
2. **HMAC Digest**: `x-mp-key`, `Date`, `x-mp-signature` headers
3. **API Key Only**: `x-mp-key` header (selectively enabled per account)

### Endpoints

**`POST /identify`** — Establish user identity at app initialization. Accepts known identities, returns mParticle ID per Identity Strategy. Creates new profiles if no match.

**`POST /search`** — Check if a user identity exists. Returns "not found" rather than creating new profiles (unlike `/identify`).

**`POST /login`** — Transition user to authenticated state.

**`POST /logout`** — Transition user to unauthenticated state.

**`POST /{mpid}/modify`** — Mutate existing user's identities via `identity_changes` array. Never creates new profiles.

### Requirements
- All requests must include at least one known identity
- Optional: device identifiers, social IDs, customer identifiers

### Response
- mParticle ID (MPID)
- Matched identities
- Context for subsequent requests

### Error Codes
400 (bad request), 401 (unauthorized), 429 (rate limit), 5xx (server error)

---

## 4. Profile API

Query user profiles for personalization — identities, attributes, audience memberships.

### Base URL

`/userprofile/v1/`

### Authentication

OAuth 2.0 (same flow as Platform API). Read-only permissions only.

### Endpoints

**`POST /userprofile/v1/<orgId>/<accountId>/<workspaceId>/<mpid>`** — Get profile by mParticle ID.

**`POST /userprofile/v1/resolve/<orgId>/<accountId>/<workspaceId>`** — Get profile by immutable ID (resolves to MPID internally).

Both require `?fields` query parameter specifying desired data types.

### Rate Limits

15 RPS (requests per second) — testing tier. Not designed for direct frontend access. Implement a backend personalization service as intermediary.

### Response Data
- Timestamps
- Device identities
- User identities
- Custom attributes
- Audience memberships
- Attribution information

### Best Practice
Frontend → Backend personalization service → Profile API → return only needed data to frontend. Never expose Profile API directly to clients.

---

## 5. Data Planning API

Programmatic management of data quality validation.

### Authentication

OAuth 2.0 (same as Platform API). JWT-based tokens.

### Data Model Hierarchy

Workspaces → Data Plans → Data Plan Versions → Data Points (criteria + JSON Schema validator)

### Endpoints

**Data Plans**:
- `GET/POST /workspaces/{id}/plans` — List/create plans
- `GET/PATCH/DELETE /workspaces/{id}/plans/{plan_id}` — Get/update/delete plan

**Data Plan Versions**:
- `GET/POST /workspaces/{id}/plans/{plan_id}/versions` — List/create versions
- `GET/PATCH /workspaces/{id}/plans/{plan_id}/versions/{version}` — Get/update version

**Validation**:
- `POST /workspaces/{id}/plans/validate` — Validate event batch against a plan

### Rate Limits

- Account-level: 3,000 requests/minute
- Organization-level: 6,000 requests/minute

### Tools
- mParticle CLI
- Data Planning Node SDK (`data-planning-node`)
- OpenAPI spec available for custom SDK generation

---

## 6. Data Subject Request (DSR) API

OpenDSR framework for GDPR/CCPA compliance.

### Endpoints

| Version | Framework | Base URL |
|---|---|---|
| 1.0 | OpenGDPR | `https://opengdpr.mparticle.com/v1` |
| 2.0 | OpenDSR | `https://opendsr.mparticle.com/v2` |

### Authentication

HTTP Basic Auth with workspace-level credentials (from Workspace Settings).

### Operations

**`POST /requests/`** — Submit a data subject request (access, erasure, or portability).

**`GET /requests/{RequestID}`** — Check request status (pending, in_progress, completed, cancelled).

**`DELETE /requests/{RequestID}`** — Cancel a pending request.

**`GET /discovery/`** — List supported identity types and request types.

### Supported Identity Types
20+ types including email, advertising IDs (IDFA, GAID), phone numbers, customer IDs, and custom identifiers.

### Features
- Callback notifications via signed HTTPS POST
- Results downloadable for 7 days
- v2 adds required `regulation` field

### Error Codes
401 (invalid credentials), 400 (duplicate request), 429 (rate limit with Retry-After header)

---

## 7. API Credential Management

Central interface for managing credentials across all APIs.

### Access
- Admin or Compliance Admin role required
- Settings > API Credentials

### Supported APIs
Profile API, Platform API, Data Planning API (more to come)

### Creating Credentials
1. Select which APIs to grant access to
2. Assign permissions (Profile API: read-only only)
3. Set scope: Org, Account, or Workspace level
4. **Copy Client Secret immediately** — it's not shown again after closing the modal
5. Keys can be regenerated if lost

### Management
- Activate/deactivate credentials
- Permanent deletion available (irreversible)

---

## SDKs

### Client SDKs
- Web (JavaScript)
- iOS (Swift/Objective-C)
- Android (Kotlin/Java)
- React Native
- Flutter
- Roku (BrightScript)
- Cordova
- .NET MAUI
- UWP

### Server SDKs
- Python (`mparticle-python-sdk`)
- Node.js (`mparticle-node-sdk`)
- Java (`mparticle-java-events-sdk`)
- Ruby (`mparticle-ruby-sdk`)
- Go (`mparticle-go-sdk`)
- .NET (`mparticle-dotnet-sdk`)

### Developer Tools
- **Smartype** — type-safe analytics via Data Plans (41 GitHub stars)
- **mParticle CLI** — command-line interface for Data Planning
- **Data Planning Node SDK** — programmatic Data Plan management
- **OpenAPI specs** — available for Events API and Data Planning API (generate custom SDKs)

All SDKs available at: https://github.com/mParticle
