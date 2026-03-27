### Mailshake REST API — Comprehensive Reference

**Base URL**: `https://api.mailshake.com/2017-04-01`
**Docs**: https://api.mailshake.com/
**API version**: 2017-04-01

---

## Authentication

API Key authentication via the `apiKey` parameter. The key can be passed as a query string parameter or as a field in the JSON request body.

| Detail | Value |
|---|---|
| Parameter | `apiKey` (query string or JSON body field) |
| Where to find | Extensions > API in Mailshake app |

**Example (JSON body)**:
```json
{
  "apiKey": "YOUR_API_KEY",
  "campaignID": 123
}
```

**Example (query string)**:
```
POST https://api.mailshake.com/2017-04-01/campaigns/list?apiKey=YOUR_API_KEY
```

---

## Request & Response Format

### Requests

- **All requests use POST** — even read operations use POST with a JSON body (not GET with query params)
- **Content-Type**: `application/json`
- Parameters are passed in the JSON body alongside the `apiKey`

### Response Format

All successful responses return:
```json
{
  "results": { ... },
  "nextToken": "opaque_cursor_string"
}
```

For list endpoints, `results` is an array. For single-record endpoints, `results` is an object. When there are no more pages, `nextToken` is `null`.

### Error Responses

Errors return a JSON object with an `error` field:

```json
{
  "error": {
    "code": "invalid_parameter",
    "message": "campaignID is required"
  }
}
```

**Common error codes**:

| Code | Description |
|---|---|
| `invalid_api_key` | API key is missing or invalid |
| `not_found` | The requested resource does not exist |
| `invalid_parameter` | A required parameter is missing or has an invalid value |
| `rate_limit_exceeded` | Too many requests — wait and retry |
| `internal_error` | Server-side error — retry with backoff |

---

## Pagination

**Type**: Cursor-based (`nextToken`)

| Parameter | Type | Description |
|---|---|---|
| `nextToken` | string | Opaque cursor returned from the previous response. Pass this to fetch the next page. |
| `perPage` | integer | Number of results per page. Default: 100. Max: 100. |

**How to paginate**:
1. Make the initial request without `nextToken`
2. If `nextToken` in the response is not `null`, pass it in your next request
3. Continue until `nextToken` is `null`

**Example**:
```json
{
  "apiKey": "YOUR_API_KEY",
  "campaignID": 123,
  "perPage": 50,
  "nextToken": "abc123cursor"
}
```

---

## Rate Limits

| Detail | Value |
|---|---|
| Model | Fixed-window (per minute) |
| Limit | 100 requests/minute per API key |
| Scope | Per API key (not per endpoint) |
| When exceeded | HTTP 429 with `rate_limit_exceeded` error |
| Retry strategy | Wait 60 seconds before retrying |

There are no plan-based rate limit tiers — all API keys share the same 100 req/min limit.

---

## All API Endpoints

All paths are relative to `https://api.mailshake.com/2017-04-01`. **All endpoints use POST.**

---

### Campaigns (6 endpoints)

| Endpoint | Description |
|---|---|
| `/campaigns/list` | List all campaigns with optional filters. Returns id, title, status, created, stats. |
| `/campaigns/get` | Get a single campaign by ID. Returns full campaign details including messages and stats. |
| `/campaigns/create` | Create a new campaign. Returns the new campaign object. |
| `/campaigns/pause` | Pause an active campaign by ID. |
| `/campaigns/unpause` | Resume a paused campaign by ID. |
| `/campaigns/export` | Export campaign data as CSV. |

**`POST /campaigns/list` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `search` | string | No | Search campaigns by title |
| `teamFilter` | string | No | Filter scope: `my`, `team`, `everyone` |
| `nextToken` | string | No | Pagination cursor |
| `perPage` | integer | No | Results per page (default 100, max 100) |

**Response**:
```json
{
  "results": [
    {
      "id": 123,
      "title": "Q1 Outreach",
      "status": "active",
      "created": "2024-01-15T10:00:00Z",
      "sender": {
        "id": 1,
        "emailAddress": "sales@company.com",
        "fromName": "Jane Doe"
      },
      "stats": {
        "sent": 500,
        "opens": 250,
        "clicks": 45,
        "replies": 30,
        "bounces": 12
      }
    }
  ],
  "nextToken": null
}
```

**`POST /campaigns/get` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `campaignID` | integer | Yes | The campaign ID to retrieve |

**`POST /campaigns/create` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `title` | string | Yes | Campaign name |
| `senderID` | integer | No | ID of the sending account (from `/senders/list`). Uses default sender if omitted. |

**Campaign statuses**: `draft`, `active`, `paused`, `ended`

**`POST /campaigns/pause` and `/campaigns/unpause` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `campaignID` | integer | Yes | The campaign ID to pause or unpause |

---

### Recipients (7 endpoints)

| Endpoint | Description |
|---|---|
| `/recipients/list` | List recipients in a campaign. Filter by status and action. |
| `/recipients/get` | Get a single recipient by ID with full activity history. |
| `/recipients/add` | Add recipients to a campaign. Accepts an array of recipient objects. |
| `/recipients/addStatus` | Check the status of a bulk add operation. |
| `/recipients/pause` | Pause a specific recipient in a campaign. |
| `/recipients/unpause` | Resume a paused recipient. |
| `/recipients/unsubscribe` | Unsubscribe a recipient by email address. |

**`POST /recipients/list` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `campaignID` | integer | Yes | Campaign to list recipients from |
| `filter` | string | No | Filter by status: `active`, `paused`, `bounced`, `unsubscribed`, `completed` |
| `action` | string | No | Filter by action taken: `opened`, `clicked`, `replied`, `was-sent` |
| `nextToken` | string | No | Pagination cursor |
| `perPage` | integer | No | Results per page (default 100, max 100) |

**Response**:
```json
{
  "results": [
    {
      "id": 456,
      "emailAddress": "prospect@example.com",
      "fullName": "John Smith",
      "fields": {
        "first": "John",
        "last": "Smith",
        "company": "Acme Corp"
      },
      "status": "active",
      "campaignID": 123
    }
  ],
  "nextToken": "next_page_cursor"
}
```

**`POST /recipients/get` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `recipientID` | integer | Yes | The recipient ID to retrieve |

**`POST /recipients/add` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `campaignID` | integer | Yes | Campaign to add recipients to |
| `addAsNewList` | boolean | No | If `true`, creates a new list for these recipients |
| `addresses` | array | Yes | Array of recipient objects (see below) |

**Recipient object in `addresses` array**:

| Field | Type | Required | Description |
|---|---|---|---|
| `emailAddress` | string | Yes | Recipient's email address |
| `fullName` | string | No | Recipient's full name |
| `fields` | object | No | Merge field key-value pairs |

**Merge fields** map to template variables in your campaign messages. Common fields:

| Field Key | Description |
|---|---|
| `first` | First name |
| `last` | Last name |
| `company` | Company name |
| `title` | Job title |
| `phone` | Phone number |
| `city` | City |

**Example request**:
```json
{
  "apiKey": "YOUR_API_KEY",
  "campaignID": 123,
  "addAsNewList": false,
  "addresses": [
    {
      "emailAddress": "jane@acme.com",
      "fullName": "Jane Doe",
      "fields": {
        "first": "Jane",
        "last": "Doe",
        "company": "Acme Corp",
        "title": "VP of Sales"
      }
    },
    {
      "emailAddress": "bob@globex.com",
      "fullName": "Bob Johnson",
      "fields": {
        "first": "Bob",
        "last": "Johnson",
        "company": "Globex Inc"
      }
    }
  ]
}
```

**`POST /recipients/addStatus` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `statusID` | string | Yes | The status ID returned from a `/recipients/add` call |

**`POST /recipients/pause` and `/recipients/unpause` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `recipientID` | integer | Yes | The recipient ID to pause or unpause |

**`POST /recipients/unsubscribe` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `emailAddress` | string | Yes | Email address to unsubscribe (globally across all campaigns) |

**Recipient statuses**: `active`, `paused`, `bounced`, `unsubscribed`, `completed`

---

### Activity (7 endpoints)

| Endpoint | Description |
|---|---|
| `/activity/sent` | List sent emails with timestamps, subjects, and recipients. |
| `/activity/opens` | List email opens with timestamp, recipient, and device info. |
| `/activity/clicks` | List link clicks with timestamp, recipient, and clicked URL. |
| `/activity/replies` | List replies with timestamp, recipient, body preview, and sentiment. |
| `/activity/bounces` | List bounced emails with timestamp, recipient, and bounce type. |
| `/activity/leadCatcher` | List Lead Catcher events including new leads and status changes. |
| `/activity/created` | List newly created recipients with timestamps. |

**Common parameters for all activity endpoints**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `campaignID` | integer | No | Filter activity to a specific campaign |
| `recipientID` | integer | No | Filter activity to a specific recipient |
| `nextToken` | string | No | Pagination cursor |
| `perPage` | integer | No | Results per page (default 100, max 100) |

**`POST /activity/sent` — Response**:
```json
{
  "results": [
    {
      "id": 789,
      "recipientID": 456,
      "campaignID": 123,
      "emailAddress": "prospect@example.com",
      "subject": "Quick question about Acme's growth plans",
      "sentAt": "2024-01-15T10:30:00Z",
      "messageType": "initial"
    }
  ],
  "nextToken": null
}
```

**`POST /activity/opens` — Response**:
```json
{
  "results": [
    {
      "recipientID": 456,
      "campaignID": 123,
      "emailAddress": "prospect@example.com",
      "openedAt": "2024-01-15T11:05:00Z",
      "device": "desktop"
    }
  ],
  "nextToken": null
}
```

**`POST /activity/clicks` — Response**:
```json
{
  "results": [
    {
      "recipientID": 456,
      "campaignID": 123,
      "emailAddress": "prospect@example.com",
      "clickedAt": "2024-01-15T11:10:00Z",
      "url": "https://company.com/pricing"
    }
  ],
  "nextToken": null
}
```

**`POST /activity/replies` — Response**:
```json
{
  "results": [
    {
      "recipientID": 456,
      "campaignID": 123,
      "emailAddress": "prospect@example.com",
      "repliedAt": "2024-01-15T14:00:00Z",
      "bodyPreview": "Thanks for reaching out, I'd love to learn more...",
      "sentiment": "positive"
    }
  ],
  "nextToken": null
}
```

Reply sentiment values: `positive`, `neutral`, `negative`, `unsubscribe`

**`POST /activity/bounces` — Response**:
```json
{
  "results": [
    {
      "recipientID": 456,
      "campaignID": 123,
      "emailAddress": "prospect@example.com",
      "bouncedAt": "2024-01-15T10:31:00Z",
      "bounceType": "hard"
    }
  ],
  "nextToken": null
}
```

Bounce types: `hard`, `soft`

---

### Leads — Lead Catcher (6 endpoints)

Lead Catcher automatically captures replies and creates leads for follow-up. Leads have their own lifecycle separate from the campaign.

| Endpoint | Description |
|---|---|
| `/leads/list` | List all leads captured by Lead Catcher. Filter by status, assignee, campaign. |
| `/leads/get` | Get a single lead by ID with full conversation thread, status, and assignment. |
| `/leads/close` | Close a lead (mark as won/done). |
| `/leads/ignore` | Ignore a lead (remove from active queue). |
| `/leads/reopen` | Reopen a previously closed or ignored lead. |
| `/leads/markAsLost` | Mark a lead as lost. |

**`POST /leads/list` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `status` | string | No | Filter by lead status: `open`, `won`, `ignored`, `lost` |
| `assignedToEmailAddress` | string | No | Filter by assignee's email address |
| `campaignID` | integer | No | Filter by source campaign |
| `nextToken` | string | No | Pagination cursor |
| `perPage` | integer | No | Results per page (default 100, max 100) |

**Response**:
```json
{
  "results": [
    {
      "id": 321,
      "emailAddress": "prospect@example.com",
      "fullName": "John Smith",
      "status": "open",
      "assignedTo": {
        "emailAddress": "rep@company.com",
        "fullName": "Sales Rep"
      },
      "campaignID": 123,
      "createdAt": "2024-01-15T14:00:00Z",
      "conversation": [
        {
          "from": "sales@company.com",
          "to": "prospect@example.com",
          "subject": "Quick question",
          "body": "Hi John, I noticed...",
          "sentAt": "2024-01-15T10:30:00Z"
        },
        {
          "from": "prospect@example.com",
          "to": "sales@company.com",
          "subject": "Re: Quick question",
          "body": "Thanks for reaching out...",
          "sentAt": "2024-01-15T14:00:00Z"
        }
      ]
    }
  ],
  "nextToken": null
}
```

**`POST /leads/get` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `leadID` | integer | Yes | The lead ID to retrieve |

**`POST /leads/close`, `/leads/ignore`, `/leads/reopen`, `/leads/markAsLost` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `leadID` | integer | Yes | The lead ID to update |

**Lead statuses**: `open`, `won` (closed), `ignored`, `lost`

---

### Team (1 endpoint)

| Endpoint | Description |
|---|---|
| `/team/list-members` | List all team members with roles and permissions. |

**`POST /team/list-members` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |

**Response**:
```json
{
  "results": [
    {
      "id": 1,
      "emailAddress": "admin@company.com",
      "fullName": "Jane Admin",
      "role": "admin",
      "isActive": true
    }
  ]
}
```

---

### Senders (1 endpoint)

| Endpoint | Description |
|---|---|
| `/senders/list` | List all connected sending accounts with daily limits and usage. |

**`POST /senders/list` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |

**Response**:
```json
{
  "results": [
    {
      "id": 1,
      "emailAddress": "sales@company.com",
      "fromName": "Jane Doe",
      "isDefault": true,
      "dailyLimit": 500,
      "isPaused": false
    }
  ]
}
```

---

### Push / Webhooks (2 endpoints)

| Endpoint | Description |
|---|---|
| `/push/create` | Create a webhook subscription for a specific event. |
| `/push/delete` | Delete a webhook subscription by ID. |

**`POST /push/create` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `targetUrl` | string | Yes | The URL to receive webhook payloads |
| `event` | string | Yes | The event to subscribe to (see supported events below) |

**`POST /push/delete` — Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | Your API key |
| `id` | integer | Yes | The webhook subscription ID to delete |

**Supported webhook events**:

| Event | Description |
|---|---|
| `Sent` | Email was sent to a recipient |
| `Open` | Recipient opened an email |
| `Click` | Recipient clicked a link |
| `Reply` | Recipient replied to an email |
| `LeadCatcher` | New lead captured by Lead Catcher |
| `Bounce` | Email bounced |
| `Unsubscribe` | Recipient unsubscribed |

**Webhook payload format**:
```json
{
  "event": "Reply",
  "baseURL": "https://api.mailshake.com/2017-04-01",
  "data": {
    "recipientID": 12345,
    "campaignID": 678,
    "emailAddress": "prospect@example.com",
    "timestamp": "2024-01-15T10:30:00Z",
    "body": "Thanks for reaching out..."
  }
}
```

The `data` object varies by event type. For `Sent`, `Open`, `Click`, and `Bounce` events, the `data` object includes `recipientID`, `campaignID`, `emailAddress`, and `timestamp`. For `Reply`, it additionally includes `body`. For `Click`, it includes `url`. For `LeadCatcher`, it includes `leadID`.

---

### OAuth2 (3 endpoints)

| Endpoint | Description |
|---|---|
| `/oauth2/authorize` | Authorization URL — redirect users here to grant access. |
| `/oauth2/token` | Exchange authorization code for access token. |
| `/oauth2/refresh` | Refresh an expired access token. |

**OAuth2 Authorization Code Flow**:

1. **Redirect** the user to the authorization URL:
```
https://api.mailshake.com/oauth2/authorize?client_id=YOUR_ID&response_type=code&redirect_uri=YOUR_URI
```

2. **User approves** and is redirected back to your `redirect_uri` with a `code` parameter.

3. **Exchange** the code for tokens:
```json
POST /oauth2/token
{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "code": "AUTHORIZATION_CODE",
  "grant_type": "authorization_code"
}
```

4. **Token response**:
```json
{
  "access_token": "...",
  "refresh_token": "...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

5. **Refresh** when the access token expires:
```json
POST /oauth2/refresh
{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "refresh_token": "YOUR_REFRESH_TOKEN",
  "grant_type": "refresh_token"
}
```

---

## Data Models

### Campaign

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique campaign ID |
| `title` | string | Campaign name/title |
| `status` | string | Current status: `draft`, `active`, `paused`, `ended` |
| `created` | datetime | Creation timestamp (ISO 8601) |
| `sender` | object | Sending account — contains `id`, `emailAddress`, `fromName` |
| `messages` | array | Campaign messages (initial email + follow-ups). Each is a Message object. |
| `stats` | object | Aggregate stats — `sent`, `opens`, `clicks`, `replies`, `bounces` |

### Recipient

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique recipient ID |
| `emailAddress` | string | Recipient's email address |
| `fullName` | string | Recipient's full name |
| `fields` | object | Merge field key-value pairs (e.g., `first`, `last`, `company`, `title`) |
| `status` | string | Current status: `active`, `paused`, `bounced`, `unsubscribed`, `completed` |
| `campaignID` | integer | ID of the parent campaign |

### Lead

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique lead ID |
| `emailAddress` | string | Lead's email address |
| `fullName` | string | Lead's full name |
| `status` | string | Current status: `open`, `won`, `ignored`, `lost` |
| `assignedTo` | object | Assigned team member — contains `emailAddress`, `fullName` |
| `campaignID` | integer | ID of the source campaign |
| `conversation` | array | Full email thread (array of message objects with `from`, `to`, `subject`, `body`, `sentAt`) |
| `createdAt` | datetime | When the lead was captured (ISO 8601) |

### Message (campaign step)

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique message ID |
| `type` | string | Message type: `initial`, `follow-up`, `drip`, `on-click` |
| `subject` | string | Email subject line (only on initial; follow-ups use the same thread) |
| `body` | string | Email body content (HTML) |
| `delayDays` | integer | Number of days after the previous message before this one sends |
| `isPaused` | boolean | Whether this message step is currently paused |

### Sender

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique sender ID |
| `emailAddress` | string | Sender's email address |
| `fromName` | string | Display name used in outgoing emails |
| `isDefault` | boolean | Whether this is the default sending account |
| `dailyLimit` | integer | Maximum emails per day for this sender |
| `isPaused` | boolean | Whether sending is paused for this account |

### Team Member

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique team member ID |
| `emailAddress` | string | Team member's email address |
| `fullName` | string | Team member's full name |
| `role` | string | Role in the team (e.g., `admin`, `member`) |
| `isActive` | boolean | Whether the team member account is active |

---

## Common Automation Patterns

**Campaign lifecycle**: Create a campaign via `/campaigns/create` -> add recipients via `/recipients/add` -> check add status via `/recipients/addStatus` -> unpause with `/campaigns/unpause` -> monitor via `/activity/*` endpoints -> manage leads in Lead Catcher via `/leads/*`.

**Recipient import**: Build an array of recipient objects with `emailAddress` (required) and merge fields -> POST to `/recipients/add` with the campaign ID -> poll `/recipients/addStatus` with the returned status ID to confirm completion.

**Lead management**: Poll `/leads/list` filtered by `status=open` -> review each lead -> take action with `/leads/close` (won), `/leads/ignore` (not relevant), or `/leads/markAsLost` (lost deal) -> sync lead data to your CRM.

**Webhook pipeline**: Create push subscriptions for `Reply` and `LeadCatcher` events via `/push/create` -> receive payloads at your endpoint -> process and route to CRM, Slack, or other systems in real time.

**Analytics and reporting**: Poll `/activity/sent`, `/activity/opens`, `/activity/clicks`, and `/activity/replies` on a schedule -> aggregate metrics per campaign -> build dashboards or sync to your BI tool.

**Multi-campaign coordination**: Use `/campaigns/list` with `teamFilter=everyone` to audit all active campaigns -> pause overlapping campaigns with `/campaigns/pause` -> manage send volume across the team.

**Recipient hygiene**: Monitor `/activity/bounces` for hard bounces -> unsubscribe bad addresses via `/recipients/unsubscribe` -> maintain sender reputation.

---

## Key Differences from Other Sales APIs

| Feature | Mailshake Behavior |
|---|---|
| All requests | **POST only** — even reads/lists use POST, not GET |
| Pagination | **Cursor-based** (`nextToken`), not page-number-based |
| Authentication | API key as a **parameter** (query string or JSON body), not a header |
| Campaigns | "Campaign" is what other tools call a "sequence" or "cadence" |
| Lead Catcher | Built-in lead management — replies automatically create leads with status tracking |
| Rate limits | Flat **100 req/min** across all plans (no plan-based tiers) |
| Recipient fields | Only `emailAddress` is required for import; all other fields are optional merge fields |
| Response envelope | Consistent `{ "results": ..., "nextToken": ... }` wrapper on all endpoints |
| Bulk add | Recipients are added asynchronously — use `/recipients/addStatus` to check completion |

---

## Source URLs

- API Documentation: https://api.mailshake.com/
- Lead Catcher: https://help.mailshake.com/hc/en-us/categories/lead-catcher
- Webhook Events: https://api.mailshake.com/#Push
