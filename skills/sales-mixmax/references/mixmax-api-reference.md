### Mixmax REST API — Comprehensive Reference

**Base URL**: `https://api.mixmax.com/v1/`
**Developer contact**: developer@mixmax.com

---

## Authentication

API Key authentication via the `X-API-Token` header.

| Detail | Value |
|---|---|
| Header | `X-API-Token: YOUR_API_KEY` |
| Where to find | Mixmax Settings > Integrations > API |

**Example**:
```
GET https://api.mixmax.com/v1/sequences
X-API-Token: YOUR_API_KEY
```

---

## Rate Limits

**Rate limits are undocumented.** Mixmax does not publish official rate limit numbers. The API is described as "optimized for lightweight, real-time interactions" — it is **NOT** designed for bulk exports or high-volume data sync.

| Detail | Value |
|---|---|
| Model | Undocumented |
| Guidance | Lightweight, real-time interactions only |
| NOT suitable for | Bulk exports, high-volume sync, data warehousing |
| Retry strategy | Implement exponential backoff; start with conservative request rates |

**Recommendation**: Start with no more than 1 request/second and back off on errors. Monitor for HTTP 429 responses.

---

## All API Endpoints

All paths are relative to `https://api.mixmax.com/v1/`.

---

### Sequences (7 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/sequences` | List all sequences. Returns sequence objects with _id, name, stages, folder. |
| GET | `/sequences/search` | Search sequences by name or other criteria. |
| GET | `/sequences/sent` | List sent sequence data. |
| GET | `/sequences/:id/recipients` | List recipients in a specific sequence. |
| POST | `/sequences/:id/recipients` | Add recipients to a sequence. |
| POST | `/sequences/:id/cancel` | Cancel a specific sequence. |
| POST | `/sequences/cancel` | Bulk cancel sequences. |

**Sequence folders** (CRUD):

| Method | Endpoint | Description |
|---|---|---|
| GET | `/sequences/folders` | List sequence folders. |
| POST | `/sequences/folders` | Create a new sequence folder. |
| PATCH | `/sequences/folders/:id` | Update a sequence folder. |
| DELETE | `/sequences/folders/:id` | Delete a sequence folder. |

---

### Messages (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/messages` | List messages (drafts, sent, scheduled). |
| POST | `/messages` | Create a new draft message. |
| GET | `/messages/:id` | Get a specific message by ID. |
| PATCH | `/messages/:id` | Update a draft message. |
| POST | `/messages/:id/send` | Send a draft message. |
| POST | `/messages/test` | Send a test message. |

**Message object fields**:

| Field | Type | Description |
|---|---|---|
| `_id` | string | Unique message ID |
| `userId` | string | ID of the user who created the message |
| `created` | datetime | Creation timestamp |
| `trackingEnabled` | boolean | Whether open tracking is enabled |
| `linkTrackingEnabled` | boolean | Whether link click tracking is enabled |
| `fileTrackingEnabled` | boolean | Whether file download tracking is enabled |
| `notificationsEnabled` | boolean | Whether engagement notifications are enabled |
| `from` | object | Sender — contains `email`, `name`, `isDelegated` |
| `to` | array | Array of recipient objects (email, name) |
| `cc` | array | CC recipients |
| `bcc` | array | BCC recipients |
| `subject` | string | Email subject line |
| `body` | string | Email body (HTML) |
| `attachments` | array | File attachments |
| `sent` | datetime | Timestamp when the message was sent (null if draft) |
| `scheduled` | datetime | Scheduled send time (null if not scheduled) |
| `updatedAt` | datetime | Last update timestamp |

---

### Rules / Webhooks (6 endpoints)

Rules are Mixmax's IF/THEN automation engine. They also serve as the webhook mechanism — rules can trigger webhook actions to external endpoints.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/rules` | List all rules. |
| POST | `/rules` | Create a new rule. |
| PATCH | `/rules/:id` | Update a rule. |
| DELETE | `/rules/:id` | Delete a rule. |
| GET | `/rules/:id/actions` | List actions for a specific rule. |
| POST | `/rules/:id/actions` | Add an action to a rule. |
| PATCH | `/rules/:id/actions/:actionId` | Update a specific action on a rule. |
| DELETE | `/rules/:id/actions/:actionId` | Delete a specific action from a rule. |

**Rule structure**:
- **Triggers**: Email events (open, click, reply, download), Salesforce object changes (opportunity stage, account field, custom object), date-field triggers
- **Actions**: Add to sequence, create Salesforce task, send Slack notification, fire webhook, send email, and more

**Webhook via rules**: To set up a webhook, create a rule with your desired trigger and add a webhook action pointing to your endpoint URL. The payload will contain event data relevant to the trigger.

---

### Appointment Links (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/appointmentlinks` | List all appointment links. |
| GET | `/appointmentlinks/me` | Get the current user's appointment links. |

---

### Snippets (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/snippets` | List all snippets. |
| GET | `/snippets/:id` | Get a specific snippet by ID. |
| PATCH | `/snippets/:id` | Update a snippet. |
| DELETE | `/snippets/:id` | Delete a snippet. |
| GET | `/snippettags` | List all snippet tags. |

---

### Meetings (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/meetingtypes` | List meeting type configurations. |
| GET | `/meetinginvites` | List meeting invites. |
| POST | `/meetings/summaries/search` | Search meeting summaries. |
| GET | `/meetings/transcripts/:id` | Get a meeting transcript by ID. |

---

### Contacts (3 endpoints — DEPRECATED)

> **Warning**: The Contacts API is deprecated. Use Salesforce or HubSpot as your contact source of truth.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/contacts` | List contacts. |
| GET | `/contacts/:id` | Get a specific contact by ID. |
| GET | `/contacts/:id/notes` | Get notes for a specific contact. |

---

### Salesforce (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/salesforce/account` | Get Salesforce account data. |
| GET | `/salesforce/contact` | Get Salesforce contact data. |
| GET | `/salesforce/lead` | Get Salesforce lead data. |
| GET | `/salesforce/opportunity` | Get Salesforce opportunity data. |
| GET | `/salesforce/task` | Get Salesforce task data. |

---

### Insights Reports (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/insightsreports` | Get insights report data. |

---

### Live Feed (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/livefeed` | Get live feed data. |
| GET | `/livefeed/events` | Get live feed events. |
| GET | `/livefeedsearches` | Get saved live feed searches. |

---

### Teams (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/teams` | List all teams. |
| GET | `/teams/:id` | Get a specific team by ID. |
| GET | `/teams/:id/members` | List members of a specific team. |

---

### Unsubscribes (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/unsubscribes` | List unsubscribed email addresses. |

---

### User (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/userpreferences/me` | Get the current user's preferences. |
| GET | `/users/me` | Get the current user's profile. |

---

### Polls & QA (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/polls/:id` | Get poll results by ID. |
| GET | `/qa/:id` | Get Q&A results by ID. |

---

### Reports (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/reports/data/table` | Generate a tabular report with custom parameters. |

---

### Integrations (4 endpoint categories)

| Method | Endpoint | Description |
|---|---|---|
| Various | `/commands` | Integration commands. |
| Various | `/enhancements` | Email enhancement integrations. |
| Various | `/linkresolvers` | Link resolver integrations. |
| Various | `/sidebars` | Sidebar integrations. |

---

### Code Snippets (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/codesnippets` | List code snippets. |
| GET | `/codesnippets/:id` | Get a specific code snippet by ID. |

---

### File Requests (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/filerequests` | List file requests. |
| GET | `/filerequests/:id` | Get a specific file request by ID. |

---

## Common Automation Patterns

**Sequence recipient management**: GET /sequences to find the target sequence → POST /sequences/:id/recipients to add recipients programmatically → monitor engagement via live feed or reports.

**Draft-and-send workflow**: POST /messages to create a draft with tracking flags → review/edit via PATCH /messages/:id → POST /messages/:id/send to deliver. Use POST /messages/test to preview first.

**Webhook integration**: POST /rules to create a rule with your desired trigger (email event or Salesforce change) → POST /rules/:id/actions to add a webhook action pointing to your endpoint → receive event payloads in real time.

**Reporting pipeline**: POST /reports/data/table to pull tabular engagement data → aggregate in your BI tool. Supplement with GET /livefeed/events for real-time activity.

**Team management**: GET /teams to list teams → GET /teams/:id/members to audit team membership → use for routing and assignment logic.

---

## Key Differences from Other Sales APIs

| Feature | Mixmax Behavior |
|---|---|
| Auth | API key via **header** (`X-API-Token`), not query param or body |
| Rate limits | **Undocumented** — build conservatively with backoff |
| IDs | String-based `_id` fields (MongoDB-style), not integer IDs |
| Webhooks | Managed via the **Rules API**, not a dedicated webhook endpoint |
| Sequences | Called "Sequences" (not campaigns or cadences) |
| Contacts | **Deprecated** — use CRM integration instead |
| Message body | **HTML format** — body field contains HTML content |
| Bulk operations | Not designed for bulk — optimize for lightweight, real-time interactions |

---

## Source URLs

- Developer contact: developer@mixmax.com
- Product: https://www.mixmax.com
