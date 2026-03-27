### Smartlead REST API — Comprehensive Reference

**Base URL**: `https://server.smartlead.ai/api/v1/`
**Docs**: https://api.smartlead.ai/
**API version**: v1

---

## Authentication

API Key authentication via the `api_key` query parameter. Every request must include your API key as a query string parameter.

| Detail | Value |
|---|---|
| Parameter | `api_key` (query string parameter) |
| Where to find | Settings > API Keys in Smartlead app |

**Example**:
```
GET https://server.smartlead.ai/api/v1/campaigns?api_key=YOUR_API_KEY
```

---

## Request & Response Format

### Requests

- **GET** for read operations, **POST** for create/update operations
- **Content-Type**: `application/json` for POST requests
- API key is always passed as a query parameter, even on POST requests

### Response Format

Successful responses return JSON. List endpoints return arrays directly or wrapped in a data object. Single-record endpoints return the object directly.

### Error Responses

Errors return a JSON object with an error message:

```json
{
  "error": "Invalid API key",
  "status": 401
}
```

**Common error codes**:

| HTTP Status | Description |
|---|---|
| `401` | Invalid or missing API key |
| `404` | Resource not found |
| `400` | Invalid request parameters |
| `429` | Rate limit exceeded |
| `500` | Server error — retry with backoff |

---

## Pagination

**Type**: Offset-based

| Parameter | Type | Description |
|---|---|---|
| `offset` | integer | Number of records to skip. Default: 0. |
| `limit` | integer | Number of records to return. Default: 100. Max: 100. |

**How to paginate**:
1. Make the initial request with `offset=0`
2. If the response contains `limit` results, increment `offset` by `limit` and request again
3. Continue until fewer than `limit` results are returned

**Example**:
```
GET /campaigns?api_key=YOUR_API_KEY&offset=0&limit=50
```

---

## Rate Limits

| Detail | Value |
|---|---|
| Model | Per-minute throttle |
| Limit | Varies by plan — Basic: 60 req/min, Pro: 120 req/min, Custom: higher |
| Scope | Per API key |
| When exceeded | HTTP 429 |
| Retry strategy | Wait 60 seconds before retrying |

---

## All API Endpoints

All paths are relative to `https://server.smartlead.ai/api/v1/`.

---

### Campaigns (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns` | List all campaigns. Returns id, name, status, stats. |
| GET | `/campaigns/{id}` | Get a single campaign by ID with full details. |
| POST | `/campaigns` | Create a new campaign. |
| POST | `/campaigns/{id}` | Update an existing campaign. |
| GET | `/campaigns/{id}/statistics` | Get campaign statistics — sent, opens, clicks, replies, bounces. |
| DELETE | `/campaigns/{id}` | Delete a campaign. |

**`GET /campaigns` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `offset` | integer | No | Pagination offset (default 0) |
| `limit` | integer | No | Results per page (default 100, max 100) |

**Response**:
```json
[
  {
    "id": 12345,
    "name": "Q1 Cold Outreach",
    "status": "ACTIVE",
    "created_at": "2024-01-15T10:00:00Z",
    "stats": {
      "total_leads": 500,
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
| `client_id` | integer | No | Client/workspace ID (for agency accounts) |

**Campaign statuses**: `DRAFT`, `ACTIVE`, `PAUSED`, `COMPLETED`

---

### Leads (7 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns/{id}/leads` | Add leads to a campaign. Accepts an array of lead objects. |
| GET | `/campaigns/{id}/leads` | List leads in a campaign with status filters. |
| GET | `/leads/{id}` | Get a single lead by ID with full activity history. |
| POST | `/leads/{id}/status` | Update a lead's status (interested, not interested, etc.). |
| GET | `/campaigns/{id}/leads/export` | Export campaign leads as CSV. |
| DELETE | `/leads/{id}` | Remove a lead from a campaign. |
| POST | `/leads/bulk-status` | Update status for multiple leads at once. |

**`POST /campaigns/{id}/leads` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lead_list` | array | Yes | Array of lead objects (see below) |

**Lead object in `lead_list` array**:

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Lead's email address |
| `first_name` | string | No | Lead's first name |
| `last_name` | string | No | Lead's last name |
| `company` | string | No | Company name |
| `custom_fields` | object | No | Key-value pairs for custom merge fields |

**Example request**:
```json
POST /campaigns/12345/leads?api_key=YOUR_API_KEY

{
  "lead_list": [
    {
      "email": "jane@acme.com",
      "first_name": "Jane",
      "last_name": "Doe",
      "company": "Acme Corp",
      "custom_fields": {
        "title": "VP of Sales",
        "pain_point": "low reply rates"
      }
    },
    {
      "email": "bob@globex.com",
      "first_name": "Bob",
      "last_name": "Johnson",
      "company": "Globex Inc"
    }
  ]
}
```

**`GET /campaigns/{id}/leads` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `status` | string | No | Filter by status: `INTERESTED`, `NOT_INTERESTED`, `NOT_CONTACTED`, `DO_NOT_CONTACT`, `WRONG_PERSON`, `COMPLETED` |
| `offset` | integer | No | Pagination offset |
| `limit` | integer | No | Results per page (max 100) |

**Response**:
```json
[
  {
    "id": 67890,
    "email": "jane@acme.com",
    "first_name": "Jane",
    "last_name": "Doe",
    "company": "Acme Corp",
    "status": "INTERESTED",
    "campaign_id": 12345,
    "custom_fields": {
      "title": "VP of Sales"
    },
    "activity": {
      "sent": 3,
      "opened": 2,
      "clicked": 1,
      "replied": 1
    }
  }
]
```

**Lead statuses**: `INTERESTED`, `NOT_INTERESTED`, `NOT_CONTACTED`, `DO_NOT_CONTACT`, `WRONG_PERSON`, `COMPLETED`

---

### Sender Accounts (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/sender-accounts` | List all connected sender accounts with warmup status and limits. |
| POST | `/sender-accounts` | Connect a new sender account (SMTP, Gmail OAuth, Outlook OAuth). |
| GET | `/sender-accounts/{id}` | Get a single sender account with details. |
| DELETE | `/sender-accounts/{id}` | Remove a sender account. |

**`GET /sender-accounts` — Response**:
```json
[
  {
    "id": 101,
    "email": "jane@outbound.company.com",
    "type": "GMAIL_OAUTH",
    "daily_limit": 50,
    "warmup_enabled": true,
    "warmup_status": "ACTIVE",
    "warmup_reputation": 85,
    "is_active": true
  }
]
```

**`POST /sender-accounts` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | Account type: `SMTP`, `GMAIL_OAUTH`, `OUTLOOK_OAUTH` |
| `email` | string | Yes | Sender email address |
| `smtp_host` | string | Conditional | SMTP host (required for SMTP type) |
| `smtp_port` | integer | Conditional | SMTP port (required for SMTP type) |
| `smtp_username` | string | Conditional | SMTP username (required for SMTP type) |
| `smtp_password` | string | Conditional | SMTP password (required for SMTP type) |
| `daily_limit` | integer | No | Max emails per day (default: 50) |
| `warmup_enabled` | boolean | No | Enable Ultra Premium Warmup (default: true) |

---

### Analytics (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns/{id}/statistics` | Campaign-level stats — sent, opens, clicks, replies, bounces. |
| GET | `/campaigns/{id}/analytics` | Detailed analytics with daily breakdowns. |
| GET | `/sender-accounts/{id}/warmup-stats` | Warmup progress and reputation score for a sender. |

**`GET /campaigns/{id}/statistics` — Response**:
```json
{
  "campaign_id": 12345,
  "total_leads": 500,
  "sent": 450,
  "unique_opened": 225,
  "unique_clicked": 40,
  "replied": 35,
  "bounced": 10,
  "unsubscribed": 5,
  "open_rate": 50.0,
  "click_rate": 8.9,
  "reply_rate": 7.8,
  "bounce_rate": 2.2
}
```

---

### Webhooks (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/webhooks` | Create a webhook subscription. |
| GET | `/webhooks` | List all webhook subscriptions. |
| DELETE | `/webhooks/{id}` | Delete a webhook subscription. |

**`POST /webhooks` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | The URL to receive webhook payloads |
| `event_type` | string | Yes | The event to subscribe to (see below) |

**Supported webhook events**:

| Event | Description |
|---|---|
| `LEAD_REPLIED` | Lead replied to a campaign email |
| `LEAD_INTERESTED` | Lead marked as interested |
| `LEAD_UNSUBSCRIBED` | Lead unsubscribed |
| `EMAIL_SENT` | Campaign email was sent |
| `EMAIL_OPENED` | Lead opened a campaign email |
| `EMAIL_CLICKED` | Lead clicked a link |
| `EMAIL_BOUNCED` | Email bounced |

**Webhook payload format**:
```json
{
  "event_type": "LEAD_REPLIED",
  "timestamp": "2024-01-15T14:00:00Z",
  "data": {
    "lead_id": 67890,
    "campaign_id": 12345,
    "email": "prospect@example.com",
    "first_name": "Jane",
    "last_name": "Doe",
    "reply_text": "Thanks for reaching out, I'd love to learn more..."
  }
}
```

---

### Clients / Workspaces (Agency accounts) (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/clients` | List all client workspaces (agency/white-label accounts only). |
| POST | `/clients` | Create a new client workspace. |
| GET | `/clients/{id}` | Get client workspace details. |
| DELETE | `/clients/{id}` | Remove a client workspace. |

**`POST /clients` — Body**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Client/workspace name |
| `email` | string | No | Client contact email |

---

## Data Models

### Campaign

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique campaign ID |
| `name` | string | Campaign name |
| `status` | string | Current status: `DRAFT`, `ACTIVE`, `PAUSED`, `COMPLETED` |
| `created_at` | datetime | Creation timestamp (ISO 8601) |
| `client_id` | integer | Client/workspace ID (agency accounts) |
| `stats` | object | Aggregate stats — `sent`, `opened`, `clicked`, `replied`, `bounced` |

### Lead

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique lead ID |
| `email` | string | Lead's email address |
| `first_name` | string | Lead's first name |
| `last_name` | string | Lead's last name |
| `company` | string | Company name |
| `status` | string | Lead status: `INTERESTED`, `NOT_INTERESTED`, `NOT_CONTACTED`, `DO_NOT_CONTACT`, `WRONG_PERSON`, `COMPLETED` |
| `campaign_id` | integer | Parent campaign ID |
| `custom_fields` | object | Custom merge field key-value pairs |
| `activity` | object | Activity stats — `sent`, `opened`, `clicked`, `replied` |

### Sender Account

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique sender account ID |
| `email` | string | Sender's email address |
| `type` | string | Account type: `SMTP`, `GMAIL_OAUTH`, `OUTLOOK_OAUTH` |
| `daily_limit` | integer | Maximum emails per day |
| `warmup_enabled` | boolean | Whether Ultra Premium Warmup is active |
| `warmup_status` | string | Warmup status: `ACTIVE`, `PAUSED`, `COMPLETED` |
| `warmup_reputation` | integer | Reputation score (0-100) |
| `is_active` | boolean | Whether the sender is active |

### Client / Workspace

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique client/workspace ID |
| `name` | string | Client name |
| `email` | string | Client contact email |
| `created_at` | datetime | Creation timestamp (ISO 8601) |

---

## Common Automation Patterns

**Campaign lifecycle**: Create a campaign via `POST /campaigns` → add leads via `POST /campaigns/{id}/leads` → connect sender accounts → enable warmup → activate campaign → monitor via `/campaigns/{id}/statistics` → manage leads via `/leads/{id}/status`.

**Lead import from CRM**: Query your CRM for new leads → build `lead_list` array with email, name, company, and custom fields → POST to `/campaigns/{id}/leads` → leads are automatically enrolled in the campaign sequence.

**Lead management**: Poll `/campaigns/{id}/leads` filtered by status → review interested leads → update status via `/leads/{id}/status` → sync interested leads to your CRM for pipeline management.

**Webhook pipeline**: Create webhook subscriptions for `LEAD_REPLIED` and `LEAD_INTERESTED` events → receive payloads at your endpoint → route to CRM, Slack, or other systems in real time.

**Multi-client management (agency)**: Create client workspaces via `POST /clients` → create campaigns scoped to client_id → connect client-specific sender accounts → run campaigns per workspace → aggregate reporting via per-campaign statistics.

**Sender warmup monitoring**: List sender accounts via `GET /sender-accounts` → check `warmup_reputation` scores → pause senders with reputation below 70 → resume campaigns only when warmup is healthy.

---

## Key Differences from Other Sales APIs

| Feature | Smartlead Behavior |
|---|---|
| HTTP methods | Standard REST — **GET** for reads, **POST** for creates/updates |
| Pagination | **Offset-based** (`offset` + `limit`), not cursor-based |
| Authentication | API key as **query parameter** (`api_key=`), not a header |
| Campaigns | "Campaign" includes email steps/sequences — not a separate concept |
| Lead statuses | Interest-based: `INTERESTED`, `NOT_INTERESTED`, etc. (not pipeline stages) |
| Rate limits | **Plan-based** rate tiers (60-120+ req/min) |
| Sender warmup | Built-in Ultra Premium Warmup with reputation scoring — no third-party needed |
| Agency/multi-client | Native client workspaces with `client_id` scoping on campaigns |
| Lead import | Accepts `custom_fields` object for arbitrary merge variables |

---

## Source URLs

- API Documentation: https://api.smartlead.ai/
- Help Center: https://help.smartlead.ai/
- SmartSenders: https://help.smartlead.ai/category/smart-senders
- SmartAgents: https://help.smartlead.ai/category/smart-agents
