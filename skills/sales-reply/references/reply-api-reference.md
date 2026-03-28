### Reply.io REST API — Comprehensive Reference

**Base URLs**:
- V1/V2 (currently active): `https://api.reply.io/v1` and `https://api.reply.io/v2`
- V3 (beta — request access): `https://api.reply.io/v3`

**Docs**: https://apidocs.reply.io/

> **Note**: V3 is in beta. Most production integrations should use V1/V2 endpoints. V3 endpoints may change without notice.

---

## Authentication

Three authentication methods are supported:

| Method | Detail |
|---|---|
| **API Key header** | `X-API-Key: YOUR_API_KEY` — recommended for server-side integrations |
| **Query parameter** | `?api_key=YOUR_API_KEY` — convenient for quick testing |
| **JWT Bearer** | `Authorization: Bearer YOUR_JWT_TOKEN` — for OAuth-based integrations |

**Where to find your API key**: Settings > API Key in the Reply.io app.

**Example (API Key header)**:
```
GET https://api.reply.io/v1/sequences
X-API-Key: YOUR_API_KEY
```

**Example (query parameter)**:
```
GET https://api.reply.io/v1/sequences?api_key=YOUR_API_KEY
```

---

## Request & Response Format

### Requests

- Standard REST methods: GET, POST, PATCH, PUT, DELETE (varies by endpoint)
- **Content-Type**: `application/json` for request bodies
- Parameters are passed as JSON body (POST/PATCH/PUT) or query parameters (GET/DELETE)

### Response Format

Successful responses return the resource or collection directly:
```json
{
  "data": [ ... ],
  "total": 150
}
```

For single-resource endpoints, the response is the object itself or wrapped in a data field.

### Error Responses

Errors follow **RFC 9457 Problem Details** format:

```json
{
  "type": "https://api.reply.io/errors/validation",
  "title": "Validation Error",
  "status": 400,
  "detail": "The 'email' field is required.",
  "instance": "/v1/contacts"
}
```

**Common HTTP status codes**:

| Status | Description |
|---|---|
| `200` | Success |
| `201` | Created |
| `400` | Bad request — invalid parameters |
| `401` | Unauthorized — invalid or missing API key |
| `403` | Forbidden — insufficient permissions |
| `404` | Not found — resource does not exist |
| `429` | Rate limit exceeded — too many requests |
| `500` | Internal server error — retry with backoff |

---

## Pagination

**Type**: Offset-based (`top`/`skip`)

| Parameter | Type | Default | Max | Description |
|---|---|---|---|---|
| `top` | integer | 25 | 1000 | Number of results to return |
| `skip` | integer | 0 | — | Number of results to skip |

**How to paginate**:
1. Make the initial request with `top=100&skip=0`
2. If the response contains `total` greater than `skip + top`, increment `skip` by `top`
3. Continue until `skip >= total`

**Example**:
```
GET /v1/contacts?top=100&skip=0
GET /v1/contacts?top=100&skip=100
GET /v1/contacts?top=100&skip=200
```

---

## Rate Limits

| Detail | Value |
|---|---|
| Model | Per-minute (exact limits undocumented) |
| When exceeded | HTTP 429 response |
| Retry strategy | Exponential backoff recommended |

> **Gap**: Reply.io does not publicly document specific rate limit numbers. If you hit 429 errors, implement exponential backoff starting at 1 second. Batch bulk operations and avoid tight loops.

---

## All API Endpoints

All paths are relative to `https://api.reply.io/v1` (or `/v2`, `/v3` as noted).

---

### Sequences (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/sequences` | List all sequences. Supports pagination (`top`/`skip`). Returns id, name, status, owner, created. |
| POST | `/sequences` | Create a new sequence. Requires name, optional settings. |
| GET | `/sequences/:id` | Get a single sequence by ID with full details including steps and stats. |
| PATCH | `/sequences/:id` | Update sequence settings (name, status, schedule). |
| DELETE | `/sequences/:id` | Delete a sequence. Cannot delete active sequences — pause first. |
| POST | `/sequences/:id/cancel` | Cancel (archive) a sequence. Stops all pending steps. |

**Sequence statuses**: `Active`, `Paused`, `New`, `Archived`

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique sequence ID |
| `teamId` | integer | Team ID |
| `ownerId` | integer | Owner user ID |
| `name` | string | Sequence name |
| `status` | string | Active, Paused, New, Archived |
| `created` | datetime | Creation timestamp (ISO 8601) |
| `isArchived` | boolean | Whether the sequence is archived |

---

### Sequence Steps (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/sequences/:id/steps` | List all steps in a sequence, ordered by position. |
| POST | `/sequences/:id/steps` | Add a new step to a sequence. Specify type, content, delay, and position. |
| GET | `/sequences/:id/steps/:stepId` | Get a single step by ID with full details. |
| PATCH | `/sequences/:id/steps/:stepId` | Update step content, delay, or position. |
| DELETE | `/sequences/:id/steps/:stepId` | Remove a step from a sequence. |
| PATCH | `/sequences/:id/steps/:stepId/variants` | Enable/disable A/B test variants for a step. |

**Step types**: `email`, `LinkedIn` (connection_request, inmail, profile_view), `call`, `SMS`, `WhatsApp`

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique step ID |
| `sequenceId` | integer | Parent sequence ID |
| `type` | string | Channel type (email, LinkedIn, call, SMS, WhatsApp) |
| `variant` | string | A/B test variant identifier |
| `order` | integer | Step position in the sequence |
| `delay` | integer | Days to wait after previous step |
| `content` | object | Message content (subject, body, etc.) |

---

### Sequence Contacts (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/sequences/:id/contacts` | Add contacts to a sequence. Accepts array of contact IDs or email addresses. |
| DELETE | `/sequences/:id/contacts` | Remove contacts from a sequence. |
| GET | `/sequences/:id/contacts` | List contacts enrolled in a sequence with their status. |
| PATCH | `/sequences/:id/contacts/:contactId` | Update a contact's status within a sequence (pause, resume). |

---

### Contacts (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/contacts` | List all contacts. Supports search, filters, and pagination. |
| POST | `/contacts` | Create a new contact. Email is required. |
| GET | `/contacts/:id` | Get a single contact by ID with full details. |
| PATCH | `/contacts/:id` | Update contact fields. |
| DELETE | `/contacts/:id` | Delete a contact. |
| POST | `/contacts/search` | Search contacts by criteria (email, name, company, custom fields). |

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique contact ID |
| `email` | string | Contact email address (required) |
| `firstName` | string | First name |
| `lastName` | string | Last name |
| `company` | string | Company name |
| `title` | string | Job title |
| `phone` | string | Phone number |
| `status` | string | Contact status |
| `customFields` | object | Custom field key-value pairs |

---

### ContactsActions (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/contacts/actions/bulk-delete` | Delete multiple contacts by IDs. |
| POST | `/contacts/actions/bulk-update` | Update fields on multiple contacts at once. |
| POST | `/contacts/actions/import` | Bulk import contacts from CSV or array. |

---

### Email Accounts (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/emailAccounts` | List all connected email accounts with status and settings. |
| POST | `/emailAccounts` | Add a new email account (OAuth for Gmail/Exchange). |
| GET | `/emailAccounts/:id` | Get a single email account by ID. |
| DELETE | `/emailAccounts/:id` | Disconnect an email account. |

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique email account ID |
| `email` | string | Email address |
| `provider` | string | Email provider (Gmail, Exchange, SMTP) |
| `status` | string | Connection status |
| `dailyLimit` | integer | Maximum emails per day |
| `warmupEnabled` | boolean | Whether warmup is active |

---

### Lists (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lists` | List all contact lists. |
| POST | `/lists` | Create a new list. |
| GET | `/lists/:id` | Get a single list with contact count. |
| PATCH | `/lists/:id` | Update list name or settings. |
| DELETE | `/lists/:id` | Delete a list (does not delete contacts). |

---

### Tasks (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | List tasks with filters (type, status, due date). |
| POST | `/tasks` | Create a manual task. |
| GET | `/tasks/:id` | Get a single task by ID. |
| PATCH | `/tasks/:id` | Update task status or details. |
| DELETE | `/tasks/:id` | Delete a task. |
| GET | `/tasks/analytics` | Get task completion analytics. |

**Task types**: `call`, `email`, `LinkedIn`, `custom`

---

### Templates (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/templates` | List all templates. |
| POST | `/templates` | Create a new template. |
| GET | `/templates/:id` | Get a single template by ID. |
| PATCH | `/templates/:id` | Update template content. |
| DELETE | `/templates/:id` | Delete a template. |

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique template ID |
| `name` | string | Template name |
| `subject` | string | Email subject line |
| `body` | string | Template body content (HTML) |
| `isShared` | boolean | Whether the template is shared with team |

---

### BlackList (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/blacklist` | List all blacklisted email addresses and domains. |
| POST | `/blacklist` | Add an email or domain to the blacklist. |
| DELETE | `/blacklist/:id` | Remove an entry from the blacklist. |

---

### BrandedLinks (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/brandedLinks` | List all branded (custom tracking) domains. |
| POST | `/brandedLinks` | Add a new branded link domain. |
| DELETE | `/brandedLinks/:id` | Remove a branded link domain. |

---

### Statistics (4 endpoint groups)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/statistics/emails` | Email statistics — sent, opens, clicks, replies, bounces. Filter by sequence, date range. |
| GET | `/statistics/calls` | Call statistics — total calls, connected, duration. Filter by sequence, date range. |
| GET | `/statistics/linkedin` | LinkedIn statistics — connection requests sent/accepted, InMail sent/replied. |
| GET | `/statistics/clicks` | Click statistics — link click details with URLs and timestamps. |

**Common parameters**:
| Parameter | Type | Description |
|---|---|---|
| `sequenceId` | integer | Filter by sequence |
| `startDate` | date | Start of date range (ISO 8601) |
| `endDate` | date | End of date range (ISO 8601) |
| `top` | integer | Results per page |
| `skip` | integer | Results to skip |

---

### Reports (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/reports/team` | Team performance report — per-user metrics for sends, replies, meetings. |
| GET | `/reports/sequences` | Sequence performance report — per-sequence metrics across all channels. |

---

### Schedules (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/schedules` | List all sending schedules. |
| POST | `/schedules` | Create a new sending schedule. |
| GET | `/schedules/:id` | Get a single schedule by ID. |
| PATCH | `/schedules/:id` | Update schedule settings (timezone, days, hours). |

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique schedule ID |
| `name` | string | Schedule name |
| `timezone` | string | Timezone (e.g., "America/New_York") |
| `days` | array | Active days (e.g., ["Mon", "Tue", "Wed", "Thu", "Fri"]) |
| `hours` | object | Start and end hours (e.g., {"start": "09:00", "end": "17:00"}) |

---

### Webhooks (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/webhooks` | List all webhook subscriptions. |
| POST | `/webhooks` | Create a new webhook subscription. Specify URL and event types. |
| GET | `/webhooks/:id` | Get a single webhook by ID. |
| PATCH | `/webhooks/:id` | Update webhook URL or events. |
| DELETE | `/webhooks/:id` | Delete a webhook subscription. |

**Key fields**:
| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique webhook ID |
| `url` | string | Destination URL for payloads |
| `events` | array | List of subscribed event types |
| `status` | string | Active or disabled |

**Webhook event types**:

> **Gap**: Specific webhook event type names are not fully documented. Common events include email sent, email opened, email replied, email bounced, contact added, contact status changed, and meeting booked. Check Reply.io's webhook configuration UI for the current list of available events.

**Webhook delivery**: Webhooks are delivered via HTTP POST with a JSON payload. Failed deliveries are retried with exponential backoff.

---

### Account (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/account` | Get current user profile and account details. |

---

## Common Automation Patterns

**Sequence lifecycle**: Create a sequence via `POST /sequences` -> add steps via `POST /sequences/:id/steps` -> add contacts via `POST /sequences/:id/contacts` -> activate by updating status via `PATCH /sequences/:id` -> monitor via `/statistics/*` endpoints.

**Contact import and sequence enrollment**: Import contacts via `POST /contacts/actions/import` or create individually via `POST /contacts` -> enroll in a sequence via `POST /sequences/:id/contacts` with contact IDs.

**Programmatic reporting**: Pull email stats from `/statistics/emails`, call stats from `/statistics/calls`, LinkedIn stats from `/statistics/linkedin` -> aggregate by sequence or date range -> push to BI tool or dashboard.

**Webhook pipeline**: Create webhook subscriptions via `POST /webhooks` for reply and bounce events -> receive payloads at your endpoint -> route to CRM, Slack, or other systems in real time.

**Deliverability monitoring**: List email accounts via `GET /emailAccounts` -> check warmup status -> pull email stats to monitor bounce rates and reply rates -> adjust sending volume as needed.

---

## Key Differences from Other Sales APIs

| Feature | Reply.io Behavior |
|---|---|
| HTTP methods | Standard REST (GET, POST, PATCH, DELETE) — not POST-only like Mailshake |
| Pagination | Offset-based (`top`/`skip`), not cursor-based |
| Authentication | Header-based (`X-API-Key`) or query param or JWT — not body parameter |
| Terminology | "Sequence" (same as Salesloft/Apollo, different from Mailshake's "campaign") |
| Multichannel | API supports email, LinkedIn, calls, SMS, WhatsApp steps natively |
| Error format | RFC 9457 Problem Details (structured JSON), not simple error objects |
| API versions | V1/V2 currently active, V3 in beta — check version compatibility |
| Rate limits | Undocumented specific numbers — implement exponential backoff |

---

## Known Gaps

- **Rate limit specifics**: Reply.io does not publicly document exact rate limit numbers. Implement exponential backoff for 429 responses.
- **Webhook event types**: The full list of subscribable webhook event types is not comprehensively documented. Check the Reply.io webhook configuration UI for available events.
- **V3 API completeness**: V3 is in beta and may not cover all V1/V2 endpoints. Some endpoints may only be available in V1/V2.
- **OAuth flow details**: JWT Bearer authentication flow details are not fully documented in public API docs.

---

## Source URLs

- API Documentation: https://apidocs.reply.io/
- Help Center: https://support.reply.io/
- Jason AI: https://reply.io/jason-ai
- Integrations: https://reply.io/integrations
