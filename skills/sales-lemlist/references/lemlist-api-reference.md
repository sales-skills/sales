### Lemlist REST API — Comprehensive Reference

**Base URL**: `https://api.lemlist.com/api`
**Docs**: https://developer.lemlist.com/
**LLM-friendly docs index**: https://developer.lemlist.com/llms.txt

---

## Authentication

Two methods supported:

### Basic Auth (recommended)
Encode `:YOUR_API_KEY` (colon + API key) as Base64 and pass in the Authorization header.

| Detail | Value |
|---|---|
| Method | Basic Auth |
| Format | `Authorization: Basic base64(:YOUR_API_KEY)` |
| Where to find | Lemlist app > Settings > Integrations > API |
| Note | API key is shown once — save it. Generate a new one if lost. |

**Example**:
```
Authorization: Basic OllvdXJBcGlLZXk=
```

### Bearer Token
Pass the API key directly as a Bearer token.

| Detail | Value |
|---|---|
| Method | Bearer token |
| Format | `Authorization: Bearer YOUR_API_KEY` |

**Important**: Do not pass the API key in query parameters, JSON body, or custom headers like `Api-Key` or `x-api-key`.

---

## Rate Limits

| Detail | Value |
|---|---|
| Model | Fixed-window |
| Limit | 20 requests per 2 seconds |
| Scope | Per API key |
| When exceeded | HTTP 429 |
| Retry strategy | Wait 2 seconds before retrying |

---

## All API Endpoints

All paths are relative to `https://api.lemlist.com/api`.

---

### Activities (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/activities` | Retrieve campaign activity history, filterable by type and campaign |

---

### Campaigns (16 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns` | Create a new campaign with auto-generated sequence |
| POST | `/campaigns/{id}/duplicate` | Clone campaign with sequences, schedules, templates |
| POST | `/campaigns/{id}/export` | Export campaign leads with filtering/format options |
| GET | `/campaigns/{id}` | Retrieve campaign details by ID |
| GET | `/campaigns/{id}/export/status` | Check async export status |
| GET | `/campaigns/{id}/reports` | Aggregated stats for one or multiple campaigns |
| GET | `/campaigns/{id}/stats` | Performance statistics |
| GET | `/campaigns/{id}/statutes` | Validation errors and warnings |
| GET | `/campaigns` | Paginated campaign list |
| PATCH | `/campaigns/{id}/pause` | Pause campaign without affecting scheduled leads |
| PATCH | `/campaigns/{id}/start` | Start or resume paused campaign |
| POST | `/campaigns/{id}/stats/export` | Initiate CSV stats export |
| POST | `/campaigns/{id}` | Update campaign settings/configuration |
| POST | `/campaigns/{id}/export/email` | Set email for export notification |

---

### Companies (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/companies/{id}/notes` | Create a company note |
| GET | `/companies/{id}/notes` | Get company notes |
| GET | `/companies` | Paginated company list |
| PUT | `/companies` | Add or update company (upsert by domain or LinkedIn URL) |

---

### Contacts (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/contacts/{id}` | Get contact by ID or email |
| GET | `/contacts` | Paginated contact list |
| PUT | `/contacts` | Add or update contact (upsert by email or LinkedIn URL) |

---

### CRM Integration (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/crm/filters` | Get CRM filter configurations |
| GET | `/crm/users` | Get team CRM users |

---

### Email Accounts (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/email-accounts` | Connect email account via SMTP/IMAP |
| DELETE | `/email-accounts/{id}` | Disconnect email account |
| POST | `/email-accounts/{id}/test` | Test email account connection |

---

### Enrichment (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/enrichment/bulk` | Bulk enrich up to 500 entities at once |
| POST | `/enrichment` | Single enrichment request |
| POST | `/enrichment/lead` | Enrich an existing lead in a campaign |
| GET | `/enrichment/{id}` | Retrieve completed enrichment result |

---

### Inbox / Messaging (14 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/inbox/conversations/labels` | Attach labels to conversations |
| POST | `/inbox/drafts` | Create a draft message |
| POST | `/inbox/labels` | Create a label |
| DELETE | `/inbox/drafts/{id}` | Delete a draft |
| GET | `/inbox/contacts/{id}/messages` | Get messages for a contact |
| GET | `/inbox/drafts/{id}` | Get a draft by ID |
| GET | `/inbox/labels/{id}` | Get a label by ID |
| GET | `/inbox` | List all inboxes |
| GET | `/inbox/labels` | List all labels |
| GET | `/inbox/drafts` | List all drafts |
| DELETE | `/inbox/conversations/labels` | Remove labels from conversation |
| POST | `/inbox/send/email` | Send an email |
| POST | `/inbox/send/linkedin` | Send a LinkedIn message |
| POST | `/inbox/send/whatsapp` | Send a WhatsApp message |
| PATCH | `/inbox/drafts/{id}` | Update a draft |

---

### Leads (17 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns/{id}/leads/variables` | Add custom variables on leads |
| POST | `/campaigns/{id}/leads` | Create lead in a campaign |
| DELETE | `/campaigns/{id}/leads/{email}` | Delete or unsubscribe lead |
| DELETE | `/leads/variables` | Erase custom variable values |
| GET | `/campaigns/{id}/leads` | Get campaign leads, filterable by state |
| GET | `/leads/{email}` | Get lead by email |
| GET | `/leads/{emailOrId}` | Get lead by email or ID |
| POST | `/campaigns/{id}/leads/crm` | Import leads from CRM |
| PATCH | `/leads/{email}/interested` | Mark lead as interested (all campaigns) |
| PATCH | `/campaigns/{id}/leads/{email}/interested` | Mark lead as interested in specific campaign |
| PATCH | `/leads/{email}/not-interested` | Mark lead as not interested (all campaigns) |
| PATCH | `/campaigns/{id}/leads/{email}/not-interested` | Mark lead as not interested in campaign |
| PATCH | `/leads/{email}/pause` | Pause lead (all or specific campaign) |
| PATCH | `/leads/{email}/resume` | Resume paused lead |
| PATCH | `/campaigns/{id}/leads/{email}/unsubscribe` | Unsubscribe lead from campaign |
| PATCH | `/campaigns/{id}/leads/{email}` | Update lead in campaign |
| POST | `/campaigns/{id}/leads/audio` | Upload audio for voice message step |

---

### Lemwarm (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lemwarm/{emailId}/settings` | Get Lemwarm settings for an email account |
| PATCH | `/lemwarm/{emailId}/pause` | Pause Lemwarm for an account |
| PATCH | `/lemwarm/{emailId}/start` | Start Lemwarm for an account |
| PATCH | `/lemwarm/{emailId}/settings` | Update Lemwarm settings (emails/day, ramp-up) |

---

### People Database (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/database/companies/schema` | Get companies database schema |
| GET | `/database/filters` | Get available database filters |
| GET | `/database/people/schema` | Get people database schema |
| POST | `/database/companies/search` | Search companies database with filters/keywords |
| POST | `/database/people/search` | Search people database with filters/keywords |

---

### Schedules (7 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns/{id}/schedules` | Associate schedule with campaign |
| POST | `/schedules` | Create schedule with custom timing/timezone |
| DELETE | `/schedules/{id}` | Delete schedule |
| GET | `/campaigns/{id}/schedules` | Get campaign schedules |
| GET | `/schedules` | List all schedules |
| GET | `/schedules/{id}` | Get schedule by ID |
| PATCH | `/schedules/{id}` | Update schedule |

---

### Sequences (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns/{id}/sequences/steps` | Add step to sequence (email, LinkedIn, call, etc.) |
| DELETE | `/campaigns/{id}/sequences/steps/{stepId}` | Delete sequence step |
| GET | `/campaigns/{id}/sequences` | Get all sequences and steps for a campaign |
| PATCH | `/campaigns/{id}/sequences/steps/{stepId}` | Update sequence step |

---

### Tasks (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/tasks` | Create task associated with contact/company/lead |
| GET | `/tasks` | Get pending team tasks |
| PATCH | `/tasks/ignore` | Mark multiple tasks as ignored |
| PATCH | `/tasks/{id}` | Update task assignment/scheduling/status |

---

### Team (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/team` | Get team information |
| GET | `/team/credits` | Get remaining credit balance |
| GET | `/team/senders` | Get team members and their campaigns |

---

### Unsubscribes (15 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/unsubscribes` | Add unsubscribe email or domain |
| POST | `/unsubscribes/bulk` | Bulk unsubscribe up to 10,000 variables |
| DELETE | `/unsubscribes/{email}` | Delete unsubscribe email |
| GET | `/unsubscribes/export/contacts` | Export unsubscribed contacts as CSV |
| GET | `/unsubscribes/export/variables` | Export unsubscribed variables as CSV |
| GET | `/unsubscribes/export` | Export all unsubscribes as CSV |
| GET | `/contacts/{email}/subscription` | Get contact subscription status |
| GET | `/unsubscribes` | Paginated unsubscribe list |
| GET | `/unsubscribes/{email}` | Get unsubscribe by email |
| GET | `/unsubscribes/variables/{variable}` | Get unsubscribed variable |
| GET | `/unsubscribes/variables` | List unsubscribed variables (paginated) |
| PATCH | `/contacts/{email}/resubscribe` | Re-subscribe contact |
| PATCH | `/unsubscribes/variables/{variable}/resubscribe` | Re-subscribe variable |
| PATCH | `/contacts/{email}/unsubscribe` | Unsubscribe contact |
| PATCH | `/unsubscribes/variables/{variable}` | Unsubscribe variable (idempotent) |

---

### Users (2 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users/{id}` | Get user by ID |
| GET | `/users/{id}/channels` | Get user's connected channels availability |

---

### Watchlist / Intent Signals (1 endpoint)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/watchlist/signals` | Get intent signals, paginated with filtering/sorting |

---

### Webhooks (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/webhooks` | Create a webhook subscription — real-time POST callbacks |
| DELETE | `/webhooks/{id}` | Delete webhook subscription |
| GET | `/webhooks` | List all webhook subscriptions |

---

## Data Models (25+ objects)

| Object | Description |
|---|---|
| Activity | Email/LinkedIn/call activity event |
| Campaign | A multichannel outreach sequence |
| Campaign Status | Validation state of a campaign |
| Channel | Connected communication channel |
| Company | Organization record with firmographic data |
| Company Note | Notes attached to a company |
| Contact | Person record in the database |
| Credits | Team credit balance |
| CRM Filter | CRM integration filter config |
| Database | People/Companies database schema |
| Enrichment | Enrichment request and result |
| Inbox Conversation | Unified inbox thread |
| Inbox Message | Individual message in a conversation |
| Label | Conversation label/tag |
| Lead | Contact enrolled in a campaign |
| Lemwarm Settings | Warmup configuration per email account |
| Mailbox | Connected email account |
| People | People database record |
| Report | Campaign performance report |
| Schedule | Sending window configuration |
| Sequence | Ordered steps in a campaign |
| Signal | Intent/watchlist signal |
| Step | Individual touchpoint in a sequence |
| Task | Manual action item |
| Team | Team metadata |
| Unsubscribe | Unsubscribed email/domain/variable |
| User | Team member |
| Webhook | Webhook subscription |

---

## Key Differences from Other Sales APIs

| Feature | Lemlist Behavior |
|---|---|
| Authentication | **Basic Auth** (`:apiKey` base64) or **Bearer token** — not a query param |
| Rate limits | **20 req / 2 seconds** — stricter than Mailshake (100/min) but per-second not per-minute |
| Terminology | "Sequence" in UI, "Campaign" in API — watch for confusion |
| Multichannel | API supports email, LinkedIn, WhatsApp, and call steps natively |
| Enrichment | Built-in waterfall enrichment via API — no external tool needed |
| People Database | Built-in lead database searchable via API (600M+ contacts) |
| Lemwarm | Warmup controllable via API — start/pause/configure per email account |
| Webhooks | Create/delete/list — event types not fully documented in public docs |
| Inbox | Unified inbox API — send emails, LinkedIn messages, WhatsApp from API |

---

## Source URLs

- API Documentation: https://developer.lemlist.com/
- LLM-friendly docs: https://developer.lemlist.com/llms.txt
- Help Center: https://help.lemlist.com/
- Integrations: https://www.lemlist.com/integrations
- Lemwarm: https://www.lemlist.com/lemwarm
