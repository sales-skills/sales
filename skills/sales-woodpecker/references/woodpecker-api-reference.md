### Woodpecker.co REST API — Comprehensive Reference

**Base URL**: `https://api.woodpecker.co/rest`
**Docs**: https://woodpecker.co/docs/api/
**API versions**: V1 (stable), V2 (under development — endpoints noted where applicable)
**Developer contact**: developers@woodpecker.co

---

## Authentication

API Key authentication via the `x-api-key` header. Every request must include your API key as a header value.

| Detail | Value |
|---|---|
| Header | `x-api-key` |
| Where to find | Settings > API Keys in Woodpecker app |
| Prerequisite | API & integrations add-on (EUR 20/mo) or active trial |

**Example**:
```
GET https://api.woodpecker.co/rest/v1/campaigns
x-api-key: YOUR_API_KEY
```

### Agency API authentication

Agency accounts use a headquarters (HQ) API key combined with an `x-company-id` header to manage requests on behalf of specific clients.

| Detail | Value |
|---|---|
| HQ Key | `x-api-key` header — your agency-level API key |
| Client Scope | `x-company-id` header — the target client's company ID |
| Per-company keys | You can also create API keys scoped to individual client companies |

**Example (agency)**:
```
GET https://api.woodpecker.co/rest/v1/campaigns
x-api-key: HQ_API_KEY
x-company-id: 12345
```

---

## Request & Response Format

### Requests

- **GET** for read operations, **POST** for create/update, **DELETE** for removal
- **Content-Type**: `application/json` for POST/PUT requests
- All authentication via headers (not query parameters)

### Response Format

Successful responses return JSON. List endpoints return arrays or paginated objects. Single-record endpoints return the object directly.

### Error Responses

Errors return a JSON object with an error message:

```json
{
  "error": "Unauthorized",
  "status": 401
}
```

**Common error codes**:

| HTTP Status | Description |
|---|---|
| `401` | Invalid or missing API key, or missing API add-on |
| `403` | Insufficient permissions (e.g., wrong company scope) |
| `404` | Resource not found |
| `400` | Invalid request parameters |
| `429` | Rate limit exceeded — request queue full |
| `500` | Server error — retry with backoff |

---

## Rate Limits

| Detail | Value |
|---|---|
| Concurrent requests | **1** — only one request processed at a time |
| Queue depth | **6** — up to 6 additional requests queued |
| Queue timeout | **15 seconds** per queued request |
| Monthly limit | **Unlimited** — no cap on total monthly API calls |
| When exceeded | HTTP 429 — request rejected immediately if queue is full |
| Retry strategy | Serialize requests, implement exponential backoff starting at 15s |

**Important**: This is a strict concurrency limit, not a rate-per-minute limit. Your integration must send requests sequentially. Parallel requests will queue (up to 6) and then fail with 429.

---

## All API Endpoints

All paths are relative to `https://api.woodpecker.co/rest/v1/` unless noted as V2.

---

### Campaigns (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns` | List all campaigns with status and stats |
| GET | `/campaigns/{id}` | Get a single campaign by ID with full details and steps |
| POST | `/campaigns` | Create a new campaign |
| PUT | `/campaigns/{id}` | Update an existing campaign |
| POST | `/campaigns/{id}/start` | Start/activate a campaign |
| POST | `/campaigns/{id}/stop` | Stop/pause a campaign |

**`GET /campaigns` — Response**:
```json
[
  {
    "id": 12345,
    "name": "Q1 Cold Outreach",
    "status": "active",
    "created_at": "2025-01-15T10:00:00Z",
    "stats": {
      "prospects": 500,
      "sent": 450,
      "opened": 225,
      "clicked": 40,
      "replied": 35,
      "bounced": 10
    }
  }
]
```

**`POST /campaigns` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Campaign name |
| `from_name` | string | No | Sender display name |
| `steps` | array | No | Array of campaign step objects |

**Campaign statuses**: `draft`, `active`, `paused`, `completed`, `editing`

---

### Prospects (7 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns/{id}/prospects` | Add prospects to a campaign |
| GET | `/campaigns/{id}/prospects` | List prospects in a campaign |
| GET | `/prospects/{id}` | Get a single prospect by ID with activity |
| PUT | `/prospects/{id}` | Update a prospect's data |
| DELETE | `/prospects/{id}` | Remove a prospect |
| POST | `/prospects/{id}/blacklist` | Add prospect to blacklist |
| GET | `/prospects/search` | Search prospects across campaigns |

**`POST /campaigns/{id}/prospects` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `prospects` | array | Yes | Array of prospect objects |

**Prospect object**:

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Prospect's email address |
| `firstName` | string | No | Prospect's first name |
| `lastName` | string | No | Prospect's last name |
| `company` | string | No | Company name |
| `tags` | array | No | Array of tag strings |
| `status` | string | No | Prospect status |
| (custom fields) | string | No | Any additional fields become custom fields |

**Example request**:
```json
POST /campaigns/12345/prospects
x-api-key: YOUR_API_KEY

{
  "prospects": [
    {
      "email": "jane@acme.com",
      "firstName": "Jane",
      "lastName": "Doe",
      "company": "Acme Corp",
      "title": "VP of Sales",
      "tags": ["enterprise", "inbound-lead"]
    }
  ]
}
```

**Prospect statuses**: `active`, `replied`, `autoreplied`, `bounced`, `invalid`, `paused`, `blacklisted`

---

### Mailboxes (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/mailboxes` | List all connected mailboxes with warmup status |
| GET | `/mailboxes/{id}` | Get a single mailbox with details |
| PUT | `/mailboxes/{id}` | Update mailbox settings (daily limit, warmup) |
| DELETE | `/mailboxes/{id}` | Disconnect a mailbox |

**`GET /mailboxes` — Response**:
```json
[
  {
    "id": 101,
    "email": "jane@outbound.company.com",
    "provider": "gmail",
    "dailyLimit": 50,
    "warmupEnabled": true,
    "status": "connected"
  }
]
```

---

### LinkedIn Accounts (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/linkedin-accounts` | List connected LinkedIn accounts |
| GET | `/linkedin-accounts/{id}` | Get a single LinkedIn account |
| PUT | `/linkedin-accounts/{id}` | Update LinkedIn account settings |

**Note**: LinkedIn automation is an add-on (EUR 29/account). LinkedIn accounts must be connected through the Woodpecker UI — not via API.

---

### Inbox (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/inbox` | List all replies across campaigns with auto-categorization |
| GET | `/inbox/{id}` | Get a single reply with full thread |
| PUT | `/inbox/{id}` | Update reply status/category |

**Auto-categorization statuses**: `interested`, `auto-reply`, `bounced`, `out-of-office`, `not-interested`, `uncategorized`

---

### Reports (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/reports/campaigns/{id}` | Detailed campaign report — sent, opens, clicks, replies, bounces |
| GET | `/reports/campaigns` | Aggregate report across all campaigns |
| GET | `/reports/team` | Team-level stats — per-user activity and performance |

**`GET /reports/campaigns/{id}` — Response**:
```json
{
  "campaign_id": 12345,
  "sent": 450,
  "opened": 225,
  "open_rate": 50.0,
  "clicked": 40,
  "click_rate": 8.9,
  "replied": 35,
  "reply_rate": 7.8,
  "bounced": 10,
  "bounce_rate": 2.2,
  "interested": 28,
  "interest_rate": 6.2
}
```

---

### Users (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | List all team members |
| GET | `/users/{id}` | Get a single user with details |

---

### Manual Tasks (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | List all pending manual tasks |
| GET | `/tasks/{id}` | Get a single task with details |
| PUT | `/tasks/{id}` | Update task status (complete, skip) |
| GET | `/campaigns/{id}/tasks` | List tasks for a specific campaign |

**Task types**: `call`, `linkedin_visit`, `linkedin_message`, `custom`

---

### Blacklist (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/blacklist` | List all blacklisted domains and emails |
| POST | `/blacklist` | Add domain or email to blacklist |
| DELETE | `/blacklist/{id}` | Remove from blacklist |
| POST | `/blacklist/import` | Bulk import blacklist entries |

**`POST /blacklist` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `domain` or `email` |
| `value` | string | Yes | The domain or email to block |

---

### Webhooks (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/webhooks` | List all webhook subscriptions |
| POST | `/webhooks` | Create a webhook subscription |
| PUT | `/webhooks/{id}` | Update a webhook subscription |
| DELETE | `/webhooks/{id}` | Delete a webhook subscription |

**`POST /webhooks` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | The URL to receive webhook payloads |
| `events` | array | Yes | Array of event types to subscribe to |

**Supported webhook events**:

| Event | Description |
|---|---|
| `prospect_replied` | Prospect replied to a campaign email |
| `prospect_opened` | Prospect opened a campaign email |
| `prospect_clicked` | Prospect clicked a link |
| `prospect_bounced` | Email bounced |
| `prospect_autoreplied` | Auto-reply detected (out-of-office, etc.) |
| `prospect_invalid` | Prospect email found invalid |

> **Note**: The full list of webhook event types may not be completely documented. Check Woodpecker's developer docs or contact developers@woodpecker.co for the latest event catalog.

**Webhook payload format**:
```json
{
  "event": "prospect_replied",
  "timestamp": "2025-01-15T14:00:00Z",
  "data": {
    "prospect_id": 67890,
    "campaign_id": 12345,
    "email": "prospect@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "reply_text": "Thanks for reaching out, I'd love to learn more..."
  }
}
```

---

### Agency API (Company Management)

Agency accounts have additional endpoints for managing client companies.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/companies` | List all client companies |
| POST | `/companies` | Create a new client company |
| GET | `/companies/{id}` | Get a client company by ID |
| PUT | `/companies/{id}` | Update a client company |
| DELETE | `/companies/{id}` | Remove a client company |
| POST | `/companies/{id}/api-keys` | Create an API key for a specific client company |

**Authentication pattern**: Use your HQ API key in `x-api-key` and set the `x-company-id` header to scope requests to a specific client.

**`POST /companies` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Client company name |
| `email` | string | No | Client contact email |

**Example — list campaigns for a specific client**:
```
GET /campaigns
x-api-key: HQ_API_KEY
x-company-id: 12345
```

---

## Data Models

### Campaign

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique campaign ID |
| `name` | string | Campaign name |
| `status` | string | Current status: `draft`, `active`, `paused`, `completed`, `editing` |
| `created_at` | datetime | Creation timestamp (ISO 8601) |
| `steps` | array | Array of campaign step objects |
| `stats` | object | Aggregate stats — `sent`, `opened`, `clicked`, `replied`, `bounced` |

### Prospect

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique prospect ID |
| `email` | string | Prospect's email address |
| `firstName` | string | Prospect's first name |
| `lastName` | string | Prospect's last name |
| `company` | string | Company name |
| `status` | string | Status: `active`, `replied`, `autoreplied`, `bounced`, `invalid`, `paused`, `blacklisted` |
| `tags` | array | Array of tag strings |
| (custom fields) | varies | Any custom fields added to the prospect |

### Mailbox

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique mailbox ID |
| `email` | string | Mailbox email address |
| `provider` | string | Provider: `gmail`, `outlook`, `smtp` |
| `dailyLimit` | integer | Maximum emails per day |
| `warmupEnabled` | boolean | Whether warmup is active |
| `status` | string | Connection status |

### Webhook

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique webhook ID |
| `url` | string | Callback URL |
| `events` | array | Subscribed event types |
| `status` | string | Webhook status |

---

## Common Automation Patterns

**Campaign lifecycle**: Create a campaign via `POST /campaigns` -> add prospects via `POST /campaigns/{id}/prospects` -> configure mailbox rotation -> enable warmup -> start campaign via `POST /campaigns/{id}/start` -> monitor via `/reports/campaigns/{id}` -> manage replies via `/inbox`.

**Prospect import from CRM**: Query your CRM for new leads -> build prospect array with email, firstName, lastName, company, and custom fields -> POST to `/campaigns/{id}/prospects` -> prospects are enrolled in the campaign sequence.

**Reply management**: Poll `/inbox` for new replies -> filter by auto-categorization (interested, bounced, etc.) -> sync interested prospects to your CRM -> update prospect status if needed.

**Webhook pipeline**: Create webhook subscriptions for `prospect_replied` and `prospect_clicked` events -> receive payloads at your endpoint -> route to CRM, Slack, or other systems in real time.

**Multi-client management (agency)**: Create client companies via `POST /companies` -> use `x-company-id` header to scope all API calls to a specific client -> create campaigns, add prospects, and manage mailboxes per client -> aggregate reporting via per-campaign reports.

**Blacklist management**: Import a suppression list via `POST /blacklist/import` -> Woodpecker automatically skips blacklisted prospects in all campaigns -> maintain the list via CRUD endpoints.

---

## Key Differences from Other Cold Email APIs

| Feature | Woodpecker Behavior |
|---|---|
| Authentication | **Header-based** (`x-api-key`), not query parameter |
| Concurrency | **1 concurrent request** with queue of 6 — strict serialization required |
| Monthly limits | **Unlimited** API calls — no monthly cap |
| Campaign model | **Condition-based** with if/then branching, not just linear sequences |
| A/B testing | Up to **5 variants** per step (vs. Smartlead's 26) |
| Steps per campaign | Up to **16 steps** per campaign |
| Prospect fields | **camelCase** field names (firstName, lastName) |
| Agency scoping | **Header-based** (`x-company-id`) — not URL path scoping |
| Pricing model | **Contacted prospects** not seats or mailboxes |
| API access | **Paid add-on** (EUR 20/mo) — not included in base plans |

---

## Known Gaps

- **V2 API endpoints are under development** — some V2 endpoints may be incomplete or subject to change. Prefer V1 for production integrations.
- **Webhook event types may not be fully documented** — the list above covers the most common events. Contact developers@woodpecker.co for the complete catalog.
- **LinkedIn actions cannot be triggered via API** — LinkedIn account connection and automation setup must be done through the Woodpecker UI.
- **Mailbox connection is UI-only** — you can manage mailbox settings via API, but initial OAuth/SMTP connection must be done in the Woodpecker app.

---

## Source URLs

- API Documentation: https://woodpecker.co/docs/api/
- Help Center: https://woodpecker.co/help/
- Developer Contact: developers@woodpecker.co
- Pricing: https://woodpecker.co/pricing/
