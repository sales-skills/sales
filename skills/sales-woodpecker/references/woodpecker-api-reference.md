### Woodpecker.co REST API — Comprehensive Reference

**Base URL**: `https://api.woodpecker.co/rest`
**Docs**: https://developers.woodpecker.co/docs/
**API versions**: v1 (legacy, still active) and v2 (current, under active development). Both can be used simultaneously.
**Developer contact**: developers@woodpecker.co

---

## Authentication

API Key authentication via the `x-api-key` header. Each user generates their own keys.

| Detail | Value |
|---|---|
| Header | `x-api-key: {YOUR_API_KEY}` |
| Where to find | Add-ons (top-right) > API & Integrations > API keys > Create a key |
| Scope | User-specific — each user only sees their own keys |
| Prerequisite | `API keys & integrations` add-on or active trial account |

**Example request**:
```bash
curl --request GET \
  --url "https://api.woodpecker.co/rest/v2/campaigns" \
  --header "x-api-key: {YOUR_API_KEY}"
```

### Agency API Authentication

Agency accounts use a master API key at the HQ level. Agency endpoints are scoped by company ID in the URL path (e.g., `/v2/agency/companies/{company_id}/...`).

---

## Request & Response Format

### Requests

- **v2 endpoints** use standard REST verbs: GET for reads, POST for creates/actions, PATCH for updates, DELETE for removals
- **v1 endpoints** (legacy) also use standard REST verbs but have different error response formats
- **Content-Type**: `application/json` for request bodies

### Response Format (v2)

Successful responses return JSON objects or arrays. Single-resource endpoints return the resource object directly.

### Error Responses (v2)

```json
{
  "title": "Error title",
  "status": 401,
  "detail": "Description of the error",
  "timestamp": "2025-03-20T14:32:34+0100"
}
```

### Error Responses (v1 legacy)

```json
{
  "status": {
    "status": "ERROR",
    "code": "E_SESSION",
    "msg": "Invalid or expired API key"
  }
}
```

**Common v1 error codes**:

| Code | HTTP Status | Description |
|---|---|---|
| `E_SESSION` | 401 | Invalid or expired API key |
| `E_NO_PERMISSION` | 403 | Subscription inactive or lacks API add-on |
| `E_URL_NOT_FOUND` | 404 | Invalid endpoint URL |
| `E_TOO_MANY_REQUESTS` | 409 | Rate limit exceeded |
| `E_UNKNOWN` | 500 | Server error |

---

## Pagination

**v1 endpoints** use page-based pagination:

| Parameter | Type | Description |
|---|---|---|
| `page` | integer | Page number (1-based) |
| `per_page` | integer | Results per page. Default: 100. Max: 1000. |
| `sort` | string | Sort order using `+` (ascending) or `-` (descending) prefix on field names. Multiple fields comma-separated. |

The total count of matching records is returned in the `X-Total-Count` response header.

**v2 endpoints** vary by resource — some return all results in a single response (e.g., campaigns list, webhooks).

---

## Rate Limits

| Detail | Value |
|---|---|
| Monthly calls | Unlimited |
| Concurrency | **1 request** processed at a time per account |
| Queue depth | Up to **6** additional requests queued |
| Queue timeout | **15 seconds** per queued request |
| Overflow behavior | Requests beyond the queue of 6 are **dropped immediately** |
| When exceeded | HTTP **429** `Too Many Requests` |
| Scope | Per account (not per API key) |
| Agency accounts | Separate limits for each client account and the HQ account |

**Important**: This is a strict concurrency limit, not a rate-per-minute limit. Your integration must send requests sequentially. Parallel requests will queue (up to 6) and then fail with 429.

---

## All API Endpoints

All paths are relative to `https://api.woodpecker.co/rest`.

---

### Campaigns — v2 (10 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/campaigns` | List all campaigns. Filter by `status` query parameter. |
| GET | `/v2/campaigns/{campaign_id}` | Get a single campaign with full settings, steps, and content. |
| GET | `/v2/campaigns/{campaign_id}/statistics` | Get campaign statistics (sent, opens, clicks, replies, bounces). |
| POST | `/v2/campaigns` | Create a new campaign with settings, mailboxes, and steps. |
| POST | `/v2/campaigns/{campaign_id}/run` | Start/resume a campaign (set status to RUNNING). |
| POST | `/v2/campaigns/{campaign_id}/pause` | Pause a running campaign. |
| POST | `/v2/campaigns/{campaign_id}/stop` | Stop a campaign permanently. |
| POST | `/v2/campaigns/{campaign_id}/editable` | Make a campaign editable again (return to DRAFT/EDITED). |
| PATCH | `/v2/campaigns/{campaign_id}` | Update campaign settings, mailboxes, or step content. |
| DELETE | `/v2/campaigns/{campaign_id}` | Delete an entire campaign. |

**Campaign statuses**: `DRAFT`, `EDITED`, `RUNNING`, `PAUSED`, `STOPPED`, `COMPLETED`

**`GET /v2/campaigns/{campaign_id}` — Response**:
```json
{
  "id": 12345678,
  "name": "Q1 Outreach",
  "status": "RUNNING",
  "email_account_ids": [112233, 445566],
  "settings": {
    "timezone": "Europe/Warsaw",
    "prospect_timezone": false,
    "daily_enroll": 50,
    "gdpr_unsubscribe": false,
    "list_unsubscribe": false,
    "auto_pause_prospect_from_domain": false,
    "catch_all_verification_mode": "BALANCED"
  },
  "steps": {
    "id": "b90637e7-8ccd-4df1-86a6-d07581abbf3e",
    "type": "START",
    "followup": {
      "id": "169486a5-e375-48cd-81a1-01a7f2a1895f",
      "type": "EMAIL",
      "delivery_time": {
        "MONDAY": [{"from": "08:00", "to": "18:00"}],
        "TUESDAY": [{"from": "08:00", "to": "18:00"}],
        "WEDNESDAY": [{"from": "08:00", "to": "18:00"}],
        "THURSDAY": [{"from": "08:00", "to": "18:00"}],
        "FRIDAY": [{"from": "08:00", "to": "18:00"}]
      },
      "body": {
        "versions": [
          {
            "id": "2af5c091...",
            "version": "A",
            "subject": "Quick question about {{COMPANY}}",
            "message": "<div><p>Hi {{FIRST_NAME | \"there\"}},</p></div>",
            "signature": "SENDER",
            "track_opens": true
          }
        ]
      },
      "followup_after": {"range": "DAY", "value": 1},
      "followup": null
    }
  }
}
```

**Step structure**: Every campaign begins with a `START` step. Subsequent steps (1-16) are nested via the `followup` property, forming a linked chain. Each step can be of type `EMAIL` or `LINKEDIN`.

**Step types**: `START`, `EMAIL`, `LINKEDIN`

**LinkedIn action types**: `VISIT_PROFILE`, `CONNECTION_REQUEST`, `DIRECT_MESSAGE`

**A/B testing**: Each step body supports up to 5 versions (A through E).

**Merge fields**: Use `{{FIELD_NAME}}` syntax in subject and message. Fallback values: `{{FIELD_NAME | "fallback"}}`. Standard fields: `FIRST_NAME`, `LAST_NAME`, `COMPANY`, `TITLE`, `WEBSITE`, `SNIPPET1`-`SNIPPET15`.

#### Campaign Step Management (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v2/campaigns/{campaign_id}/steps` | Add a new step to a campaign. |
| PATCH | `/v2/campaigns/{campaign_id}/steps/{step_id}` | Update step settings (delivery time, delay). |
| PATCH | `/v2/campaigns/{campaign_id}/steps/{step_id}/versions/{version_id}` | Update step version content (subject, message, signature). |
| DELETE | `/v2/campaigns/{campaign_id}/steps/{step_id}` | Delete a step from a campaign. |

---

### Campaigns — v1 Legacy (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/campaign_list` | List campaigns with stats. Filter by `status` and `id` query params. |

**`GET /v1/campaign_list` — Query Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `status` | string | No | Comma-separated statuses: `RUNNING`, `DRAFT`, `EDITED`, `PAUSED`, `STOPPED`, `COMPLETED` |
| `id` | string | No | Comma-separated campaign IDs |

**Response**:
```json
[
  {
    "id": 12345678,
    "name": "Q1 Outreach",
    "status": "RUNNING",
    "created": "2025-01-15T10:00:00Z",
    "from_name": "Jane Doe",
    "from_email": "jane@company.com",
    "from_names": ["Jane Doe"],
    "from_emails": ["jane@company.com"],
    "per_day": 50,
    "folder_name": "Active",
    "folder_id": 1,
    "gdpr_unsubscribe": false
  }
]
```

---

### Prospects — v1 (7 endpoints)

All prospect endpoints are v1 legacy and use `/rest/v1` paths.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/prospects` | List prospects in your database with filtering and sorting. |
| GET | `/v1/prospects` (with `search`) | Search prospects by field values (email, name, company, snippets). |
| GET | `/v1/prospects` (with `campaigns_id`) | Get prospects enrolled in specific campaigns. |
| POST | `/v1/add_prospects_list` | Add or update prospects in your global prospect database. Up to 20,000 per request. |
| POST | `/v1/add_prospects_campaign` | Add prospects to a specific campaign. Up to 20,000 per request. |
| POST | `/v1/update_prospects_campaign` | Update prospect data within a campaign. |
| DELETE | `/v1/prospects` | Delete prospects by ID. Optionally remove from specific campaigns only. |

**`GET /v1/prospects` — Query Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | No | Comma-separated prospect IDs |
| `status` | string | No | Filter: `ACTIVE`, `BOUNCED`, `REPLIED`, `BLACKLIST`, `INVALID` |
| `contacted` | boolean | No | Whether prospect has been contacted |
| `interested` | string | No | Interest level: `INTERESTED`, `MAYBE-LATER`, `NOT-INTERESTED`, `NOT-MARKED` |
| `activity` | string | No | Activity filter: `OPENED`, `NOT-OPENED`, `CLICKED`, `NOT-CLICKED` |
| `diff` | string | No | Return prospects with activity after this ISO 8601 date |
| `campaigns_id` | string | No | Filter by campaign enrollment (comma-separated IDs) |
| `campaigns_details` | boolean | No | Include campaign enrollment info in response |
| `search` | string | No | Comma-separated `field=value` criteria. AND between different fields, OR within same field. |
| `page` | integer | No | Page number (1-based) |
| `per_page` | integer | No | Results per page (default 100, max 1000) |
| `sort` | string | No | Sort fields with `+`/`-` prefix, comma-separated |

**Sortable fields**: `id`, `status`, `updated`, `email`, `last_contacted`, `last_replied`, `first_name`, `last_name`, `company`, `industry`, `website`, `tags`, `title`, `phone`, `address`, `city`, `state`, `country`, snippet fields, and activity-dependent fields.

**Response** (array of prospect objects, total count in `X-Total-Count` header):
```json
[
  {
    "id": 1234567890,
    "email": "erlich@bachmanity.com",
    "first_name": "Erlich",
    "last_name": "Bachman",
    "company": "Bachmanity",
    "industry": "IT",
    "website": "https://bachmanity.com",
    "linkedin_url": "https://linkedin.com/in/erlich-bachman",
    "tags": "#VISIONARY #FOUNDER",
    "title": "CEO",
    "phone": "+1 987-654-321",
    "address": "700 Welch Road",
    "city": "Palo Alto",
    "state": "California",
    "country": "United States",
    "status": "REPLIED",
    "snippet1": "Custom field value",
    "snippet2": "",
    "last_contacted": "2025-03-20T14:32:34+0100",
    "last_replied": "2025-03-21T10:00:00+0100",
    "updated": "2025-03-21T10:00:00+0100"
  }
]
```

**Prospect statuses**: `ACTIVE`, `BOUNCED`, `REPLIED`, `BLACKLIST`, `INVALID`

**`POST /v1/add_prospects_campaign` — Request Body**:
```json
{
  "campaign": {
    "campaign_id": 12345678,
    "send_after": "2025-04-01T08:00:00+0100"
  },
  "force": false,
  "file_name": "q1-import.csv",
  "prospects": [
    {
      "email": "jane@acme.com",
      "first_name": "Jane",
      "last_name": "Doe",
      "company": "Acme Corp",
      "title": "VP of Sales",
      "industry": "SaaS",
      "website": "https://acme.com",
      "linkedin_url": "https://linkedin.com/in/janedoe",
      "tags": "#ICP #ENTERPRISE",
      "snippet1": "Met at SaaStr",
      "snippet2": "Uses Salesforce"
    }
  ]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `campaign.campaign_id` | integer | Yes | Target campaign ID |
| `campaign.send_after` | string | No | Delay sending until this ISO 8601 datetime |
| `force` | boolean | No | If `true`, add prospects even if they have a non-ACTIVE status |
| `file_name` | string | No | Label for the import batch |
| `prospects` | array | Yes | Array of prospect objects (max 20,000). Only `email` is required per prospect. |

**Prospect object fields** (for add/update endpoints):

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Prospect's email address |
| `first_name` | string | No | First name |
| `last_name` | string | No | Last name |
| `company` | string | No | Company name |
| `title` | string | No | Job title |
| `industry` | string | No | Industry |
| `website` | string | No | Website URL |
| `linkedin_url` | string | No | LinkedIn profile URL |
| `phone` | string | No | Phone number |
| `address` | string | No | Street address |
| `city` | string | No | City |
| `state` | string | No | State/province |
| `country` | string | No | Country |
| `tags` | string | No | Hash-prefixed space-separated tags (e.g., `#ICP #ENTERPRISE`) |
| `status` | string | No | Default `ACTIVE`. Alternatives: `BLACKLIST`, `BOUNCED`, `INVALID`, `REPLIED` |
| `snippet1`-`snippet15` | string | No | Custom personalization fields |

**Response**:
```json
{
  "prospects": [
    {
      "email": "jane@acme.com",
      "id": 9876543210,
      "prospect": null,
      "prospect_campaign": null,
      "status": null,
      "code": null,
      "msg": null
    }
  ],
  "status": {
    "status": "OK",
    "code": "OK",
    "msg": "Prospects added successfully"
  }
}
```

When a prospect is a duplicate, `prospect` or `prospect_campaign` will be `"DUPLICATE"`. On error, the `status` field will be `"ERROR"` with a `code` and `msg`.

**`POST /v1/add_prospects_list`** — Same prospect object structure, but wrapped in `{"prospects": [...], "file_name": "..."}`. Adds prospects to the global database without campaign enrollment.

**`DELETE /v1/prospects` — Query Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Comma-separated prospect IDs to delete |
| `campaigns_id` | string | No | If provided, only removes from these campaigns. If omitted, deletes globally. |

Note: Maximum URL length is ~4100 characters (approximately 360 prospect IDs per request).

---

### Prospect Responses — v2 (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/prospects/{prospect_id}/responses` | Get all replies from a prospect, optionally filtered by campaign. |

**Query Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `campaign_id` | string | No | Comma-separated campaign IDs to filter responses |

**Response**:
```json
{
  "prospect_id": 123456789,
  "email": "jared.dunn@piedpiper.com",
  "responses": [
    {
      "response_id": 147258369,
      "campaign_id": 17654321,
      "step": 2,
      "campaign_email_sent": 2,
      "subject": "Re: What about Pied Piper?",
      "message": "<p>Thanks for reaching out, I'd love to learn more...</p>",
      "delivered": "2025-03-21T14:29:06",
      "secondary_prospect_email": null
    }
  ]
}
```

---

### Blacklist — v2 (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v2/blacklist/emails` | Blacklist up to 500 email addresses per request. |
| POST | `/v2/blacklist/domains` | Blacklist up to 500 domains per request. |

**`POST /v2/blacklist/emails` — Request Body**:
```json
{
  "emails": ["spam@example.com", "bounce@invalid.com"]
}
```

**`POST /v2/blacklist/domains` — Request Body**:
```json
{
  "domains": ["competitor.com", "spam-domain.net"]
}
```

Blacklisting does not immediately change existing prospect statuses. Prospects are updated to `BLACKLISTED` during campaign processing.

---

### Mailboxes — v2 (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/mailboxes` | List all connected mailboxes in your account. |
| GET | `/v2/mailboxes/{mailbox_id}` | Get details for a specific mailbox. |
| POST | `/v2/mailboxes` | Add mailboxes in bulk. |
| PATCH | `/v2/mailboxes/{mailbox_id}` | Update a mailbox's footer/signature. |
| GET | `/v2/mailboxes/batch-summary` | Check the status of a bulk mailbox connection request. |

---

### Inbox — v2 (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/inbox/messages` | Retrieve inbox messages (prospect replies). |
| POST | `/v2/inbox/messages/{message_id}/reply` | Reply to a prospect's message from within Woodpecker. |

**`POST /v2/inbox/messages/{message_id}/reply` — Request Body**:
```json
{
  "mailbox_id": 112233,
  "to": "prospect@example.com",
  "cc": "manager@company.com",
  "bcc": "",
  "subject": "Re: Quick question",
  "body": {
    "html": "<p>Thanks for your reply, let's schedule a call.</p>"
  }
}
```

All fields except `body.html` are optional. Defaults: `mailbox_id` uses the original message's mailbox, `to` defaults to the original sender, `subject` defaults to the original with `Re:` prefix.

---

### Manual Tasks — v2 (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/manual_tasks` | List all pending manual tasks (calls, LinkedIn actions, generic tasks). |

**Query Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `limit` | integer | No | Number of results. Default: 500. Max: 500. |

**Response** (array of task objects):
```json
[
  {
    "prospect": {
      "id": 1234567890,
      "email": "prospect@example.com",
      "first_name": "John",
      "last_name": "Smith",
      "company": "Acme Corp"
    },
    "campaign_id": 12345678,
    "campaign_name": "Q1 Outreach",
    "campaign_emails": ["sender@company.com"],
    "type": "CALL",
    "name": "Follow-up call",
    "message": "Call to discuss pricing after email reply",
    "due_date": "2025-03-22T00:00:00+0100"
  }
]
```

**Task types**: `GENERIC`, `CALL`, `SMS`, `LINKEDIN`

---

### Webhooks — v2 (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/webhooks` | List all active webhook subscriptions. |
| POST | `/v2/webhooks/subscribe` | Subscribe to a webhook event. |
| POST | `/v2/webhooks/unsubscribe` | Unsubscribe from a webhook event. |

**`POST /v2/webhooks/subscribe` — Request Body**:
```json
{
  "target_url": "https://yourapp.com/webhooks/woodpecker",
  "event": "prospect_replied"
}
```

**`POST /v2/webhooks/unsubscribe` — Request Body**:
```json
{
  "target_url": "https://yourapp.com/webhooks/woodpecker",
  "event": "prospect_replied"
}
```

**`GET /v2/webhooks` — Response**:
```json
{
  "webhooks": [
    {
      "target_url": "https://yourapp.com/webhooks/woodpecker",
      "event": "prospect_replied"
    }
  ]
}
```

If no subscriptions exist, returns: `{"message": "You haven't subscribed to any webhooks."}`

**Subscription limits**: Up to 5 subscriptions per event per account, each with a unique `target_url`. Duplicate subscriptions return HTTP 409. Multiple events can target the same URL.

**Delivery format**: HTTP POST with a JSON array payload. Events are batched by event type and target URL. Maximum batch size is 100 objects per delivery.

**Retry behavior**: Failed deliveries use exponential backoff. If the receiving server returns HTTP 310 or 410, the subscription is automatically removed. Repeated failures may also trigger automatic unsubscription.

**Scope**: All webhook subscriptions are account-level and capture events across all campaigns.

#### Supported Webhook Events (21 events)

**Prospect Events**:

| Event | Description |
|---|---|
| `prospect_replied` | Prospect's response detected or status manually set to RESPONDED |
| `prospect_interested` | Interest level marked as INTERESTED |
| `prospect_not_interested` | Interest level marked as NOT_INTERESTED |
| `prospect_maybe_later` | Interest level marked as MAYBE_LATER |
| `prospect_autoreplied` | Auto-reply detected or status manually changed |
| `prospect_bounced` | Email bounced or status manually set to BOUNCED |
| `prospect_invalid` | Email marked invalid during validation or manually |
| `prospect_blacklisted` | Status updated to BLACKLISTED |
| `prospect_opt_out` | Prospect unsubscribed or manually set to OPT_OUT |
| `prospect_non_responsive` | Campaign status changed to NON_RESPONSIVE |
| `prospect_saved` | New prospect added or existing prospect updated |

**Campaign & Email Events**:

| Event | Description |
|---|---|
| `campaign_completed` | Campaign status changed to COMPLETED |
| `campaign_sent` | Email sent to a prospect |
| `email_opened` | Prospect opened an email |
| `link_clicked` | Prospect clicked a tracked link |
| `followup_after_autoreply` | Follow-up scheduled after an auto-reply |

**LinkedIn Events**:

| Event | Description |
|---|---|
| `linkedin_automation_connection_request_accepted` | LinkedIn connection request was accepted |

**Secondary Events**:

| Event | Description |
|---|---|
| `secondary_replied` | Secondary (CC/forwarded) response detected |

**Task Events**:

| Event | Description |
|---|---|
| `task_created` | Manual task created for a prospect |
| `task_done` | Manual task marked as complete |
| `task_ignored` | Manual task marked as ignored |

#### Webhook Payload Format

All payloads are JSON arrays. Each element contains `method`, `prospect`, optional `email`, `timestamp`, and `firm_id`.

**`prospect_replied` payload example**:
```json
[
  {
    "method": "prospect_replied",
    "prospect": {
      "id": 1234567890,
      "email": "erlich@bachmanity.com",
      "first_name": "Erlich",
      "last_name": "Bachman",
      "company": "Bachmanity",
      "website": "https://bachmanity.com",
      "linkedin_url": "https://linkedin.com/in/erlich-bachman",
      "tags": "#VISIONARY",
      "title": "CEO",
      "phone": "+1 987-654-321",
      "address": "700 Welch Road",
      "city": "Palo Alto",
      "state": "California",
      "country": "United States",
      "industry": "IT",
      "snippet1": "Custom value",
      "snippet_labels": {"label_name": "value"},
      "last_contacted": "2025-03-20T14:32:34+0100",
      "status": "REPLIED",
      "in_campaign": 2,
      "emails_sent": 3,
      "imported": "filename.csv",
      "interest_level": {"level": "INTERESTED", "ai_detected": true},
      "campaign_id": 123456,
      "campaign_name": "Q1 Outreach",
      "campaign_email": "sender@company.com",
      "campaign_emails": ["sender@company.com"],
      "campaign_email_sent": 2,
      "step": 2,
      "step_type": "EMAIL",
      "followup_after": "2025-03-22T00:00:00+0100"
    },
    "email": {
      "id": 191867492,
      "mail_id": 123321,
      "subject": "Re: Quick question about Bachmanity",
      "sender": "Erlich Bachman",
      "email": "erlich@bachmanity.com",
      "date": "2025-03-21T20:47:40+0100",
      "message": "<p>Thanks for reaching out, I'd love to chat...</p>"
    },
    "timestamp": "2025-03-21T20:47:47+0100",
    "firm_id": 456789
  }
]
```

**Key payload fields**:

| Field | Type | Description |
|---|---|---|
| `method` | string | Event name (e.g., `prospect_replied`) |
| `prospect` | object | Full prospect data including all custom snippet fields |
| `prospect.interest_level` | object/null | Contains `level` (string) and `ai_detected` (boolean) |
| `email` | object | Reply email data (empty object for manual status changes) |
| `timestamp` | string | ISO 8601 event timestamp |
| `firm_id` | integer | Account identifier |

Campaign-context fields (`campaign_id`, `campaign_name`, `campaign_email`, `step`, `step_type`) are only populated when the event originates from a specific campaign. For manual global status changes, these fields are omitted.

---

### Agency API — v2 (requires Agency add-on)

Agency endpoints manage multiple client accounts from a single HQ account. All paths include the company context.

**Authentication**: Uses a master API key generated at the agency (HQ) level.

#### Companies

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/agency/companies/{company_id}/api_keys` | List API keys for a client company. |
| POST | `/v2/agency/companies/{company_id}/api_keys` | Create an API key for a client company. |
| POST | `/v2/agency/companies/{company_id}/prospects/delete` | Delete prospects from a client company. |

#### Agency Blacklisting

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v2/agency/blacklist/emails` | List blacklisted emails across the agency. Supports `email_filter` param. |
| POST | `/v2/agency/blacklist/emails` | Add emails to the agency-wide blacklist. |

#### Additional Agency Endpoints

Additional endpoints exist for connecting LinkedIn accounts and managing deliverability settings at the agency level. See the [Agency API docs](https://developers.woodpecker.co/docs/agency-api/) for full details.

---

## Data Models

### Campaign

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique campaign ID |
| `name` | string | Campaign name |
| `status` | string | `DRAFT`, `EDITED`, `RUNNING`, `PAUSED`, `STOPPED`, `COMPLETED` |
| `email_account_ids` | array | IDs of connected sending mailboxes |
| `settings` | object | Timezone, daily enroll limit, GDPR options, verification mode |
| `steps` | object | Nested step chain starting with a START step |

### Step

| Field | Type | Description |
|---|---|---|
| `id` | string | UUID for the step |
| `type` | string | `START`, `EMAIL`, or `LINKEDIN` |
| `delivery_time` | object | Per-weekday time intervals (e.g., `{"MONDAY": [{"from": "08:00", "to": "18:00"}]}`) |
| `body.versions` | array | A/B test versions (A-E), each with `subject`, `message`, `signature`, `track_opens` |
| `followup_after` | object | Delay before this step: `{"range": "DAY"/"HOUR"/"MINUTE", "value": integer}` |
| `followup` | object/null | Next step in the chain (nested), or `null` if last step |

### Prospect

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique prospect ID |
| `email` | string | Prospect's email address (required field) |
| `first_name` | string | First name |
| `last_name` | string | Last name |
| `company` | string | Company name |
| `title` | string | Job title |
| `industry` | string | Industry |
| `website` | string | Website URL |
| `linkedin_url` | string | LinkedIn profile URL |
| `phone` | string | Phone number |
| `address` | string | Street address |
| `city` | string | City |
| `state` | string | State/province |
| `country` | string | Country |
| `tags` | string | Hash-prefixed space-separated tags (e.g., `#ICP #ENTERPRISE`) |
| `status` | string | `ACTIVE`, `BOUNCED`, `REPLIED`, `BLACKLIST`, `INVALID` |
| `snippet1`-`snippet15` | string | Custom personalization fields |
| `last_contacted` | datetime | Last outreach timestamp (ISO 8601) |
| `last_replied` | datetime | Last reply timestamp (ISO 8601) |
| `interest_level` | object/null | `{"level": "INTERESTED"/"MAYBE-LATER"/"NOT-INTERESTED"/"NOT-MARKED", "ai_detected": boolean}` |

### Manual Task

| Field | Type | Description |
|---|---|---|
| `type` | string | `GENERIC`, `CALL`, `SMS`, or `LINKEDIN` |
| `name` | string | Task name/title |
| `message` | string | Task description or script |
| `due_date` | datetime | When the task is due (ISO 8601) |
| `prospect` | object | Associated prospect data |
| `campaign_id` | integer | Source campaign ID |
| `campaign_name` | string | Source campaign name |

---

## Common Automation Patterns

**Campaign lifecycle**: Create campaign via `POST /v2/campaigns` with steps and settings -> add prospects via `POST /v1/add_prospects_campaign` -> run with `POST /v2/campaigns/{id}/run` -> monitor via webhooks or `GET /v2/campaigns/{id}/statistics` -> pause/stop as needed.

**Prospect import**: Build prospect array with `email` (required) and personalization fields -> POST to `/v1/add_prospects_campaign` (max 20,000 per request) -> check response for duplicates or errors -> use `force: true` to re-enroll prospects with non-ACTIVE statuses.

**Reply monitoring**: Subscribe to `prospect_replied` webhook -> receive batched payloads with full prospect data and reply content -> route to CRM or Slack -> use `interest_level.ai_detected` to auto-triage replies.

**Interest-based routing**: Subscribe to `prospect_interested`, `prospect_not_interested`, and `prospect_maybe_later` webhooks -> route interested prospects to your CRM as hot leads -> schedule follow-ups for maybe-later -> suppress not-interested.

**Webhook pipeline**: Subscribe via `POST /v2/webhooks/subscribe` for key events (`prospect_replied`, `prospect_bounced`, `email_opened`, `link_clicked`) -> process batched payloads at your endpoint -> sync to CRM, Slack, or BI tools in near-real-time.

**Blacklist management**: Monitor bounces via `prospect_bounced` webhook -> blacklist bad domains via `POST /v2/blacklist/domains` -> blacklist individual emails via `POST /v2/blacklist/emails` -> protect sender reputation across all campaigns.

**Multi-campaign coordination**: List all campaigns via `GET /v2/campaigns` -> check statistics via `GET /v2/campaigns/{id}/statistics` -> pause overlapping campaigns -> manage daily send volume via campaign `daily_enroll` setting.

**Manual task workflow**: Poll `GET /v2/manual_tasks` for pending calls, LinkedIn actions, and custom tasks -> display in your task queue -> complete tasks and update prospect status.

**Agency multi-client management**: Use master API key -> create per-company API keys via `POST /v2/agency/companies/{id}/api_keys` -> manage campaigns, prospects, and blacklists per client -> each client account has independent rate limits.

---

## Key Differences from Other Cold Email APIs

| Feature | Woodpecker Behavior |
|---|---|
| API versions | **Two active versions** (v1 and v2) with different endpoints and error formats; both used simultaneously |
| HTTP methods | **Standard REST verbs** — GET, POST, PATCH, DELETE (not all-POST like Mailshake) |
| Authentication | API key via **`x-api-key` header** (not query param or body) |
| Rate limits | **1 concurrent request** with queue of 6 — serialize requests to avoid drops |
| Monthly limits | **Unlimited** API calls — no monthly cap |
| Pagination | **Page-based** (v1) with `page`, `per_page`, and `X-Total-Count` header |
| Campaign structure | Steps are **nested/linked** via `followup` property, not a flat array |
| A/B testing | Built-in: up to **5 versions (A-E)** per step |
| Prospect fields | **snake_case** field names (`first_name`, `last_name`); `email` is the only required field |
| Custom fields | **15 snippet fields** (`snippet1`-`snippet15`) for personalization |
| LinkedIn support | Native **LinkedIn steps** (visit, connect, DM) alongside email steps |
| Webhooks | **21 event types** including AI-detected interest levels; payloads batched up to 100 |
| Bulk operations | Up to **20,000 prospects** per add request; 500 emails per blacklist request |
| Tags | **Hash-prefixed** space-separated strings (e.g., `#ICP #ENTERPRISE`) |
| Interest tracking | AI-powered interest detection with `ai_detected` boolean in webhook payloads |

---

## Source URLs

- Developer Documentation: https://developers.woodpecker.co/docs/
- Authentication: https://developers.woodpecker.co/docs/getting-started/authentication/
- Rate Limiting: https://developers.woodpecker.co/docs/getting-started/rate-limiting/
- Campaigns API: https://developers.woodpecker.co/docs/campaigns/
- Prospects API: https://developers.woodpecker.co/docs/prospects/
- Webhooks: https://developers.woodpecker.co/docs/webhooks/
- Agency API: https://developers.woodpecker.co/docs/agency-api/
- Mailboxes API: https://developers.woodpecker.co/docs/mailboxes/
- Help Center: https://woodpecker.co/help-center/
