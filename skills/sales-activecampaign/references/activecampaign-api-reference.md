### ActiveCampaign APIs — Comprehensive Reference

ActiveCampaign provides a REST API for managing contacts, lists, tags, deals (CRM), automations, campaigns, custom fields, webhooks, scoring, site tracking, forms, notes, and tasks.

> **Note**: Best-effort from research — ActiveCampaign's base URL is account-specific (`{account}.api-us1.com`). Verify endpoints against https://developers.activecampaign.com

---

## Base URL

```
https://{account}.api-us1.com/api/3/
```

The `{account}` portion is unique per account — find yours in Settings > Developer. All endpoints below are relative to this base URL.

---

### Authentication

**API key** — Pass your API key via the `Api-Token` HTTP header:

```bash
curl --request GET \
  --url "https://youraccountname.api-us1.com/api/3/contacts" \
  --header "Api-Token: YOUR_API_KEY"
```

**OAuth 2.0** — Also supported for integrations that require delegated access. Use standard OAuth 2.0 bearer tokens after completing the authorization flow.

---

### Rate Limits

- **5 requests per second** per account
- Exceeding the limit returns HTTP `429 Too Many Requests` with a `Retry-After` header
- Custom rate limits are available for high-volume accounts
- Implement exponential backoff and honor the `Retry-After` value

---

### Request & Response Format

- **Format**: JSON — all request and response bodies are JSON
- **Content-Type**: `application/json`
- **All timestamps**: ISO 8601 format

### Pagination

Offset-based pagination using query parameters:

```
GET /api/3/contacts?limit=20&offset=0
```

| Parameter | Description |
|---|---|
| `limit` | Number of results to return (default varies by endpoint) |
| `offset` | Number of results to skip |

Increment `offset` by `limit` to retrieve subsequent pages.

### Error Responses

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 204 | No content (successful delete) |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 403 | Forbidden — insufficient permissions |
| 404 | Not found |
| 422 | Unprocessable entity — validation error |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |

---

### Endpoints

---

#### 1. Contacts API — `/api/3/contacts`

Manage contacts (the core identity object in ActiveCampaign).

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/3/contacts` | Create a contact |
| GET | `/api/3/contacts` | List contacts (filterable) |
| GET | `/api/3/contacts/{id}` | Get a single contact |
| PUT | `/api/3/contacts/{id}` | Update a contact |
| DELETE | `/api/3/contacts/{id}` | Delete a contact |
| POST | `/api/3/contact/sync` | Create or update a contact (upsert by email) |
| POST | `/api/3/contactTags` | Add a tag to a contact |
| DELETE | `/api/3/contactTags/{id}` | Remove a tag from a contact |

**Example — Create a contact**:
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/contacts" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contact": {
      "email": "jane.doe@example.com",
      "firstName": "Jane",
      "lastName": "Doe",
      "phone": "+15551234567"
    }
  }'
```

**Response** (201 Created):
```json
{
  "contact": {
    "id": "1",
    "email": "jane.doe@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "phone": "+15551234567",
    "cdate": "2026-03-29T12:00:00-05:00",
    "udate": "2026-03-29T12:00:00-05:00",
    "links": {
      "bounceLogs": "/api/3/contacts/1/bounceLogs",
      "contactAutomations": "/api/3/contacts/1/contactAutomations",
      "contactData": "/api/3/contacts/1/contactData",
      "contactDeals": "/api/3/contacts/1/contactDeals",
      "contactGoals": "/api/3/contacts/1/contactGoals",
      "contactLists": "/api/3/contacts/1/contactLists",
      "contactLogs": "/api/3/contacts/1/contactLogs",
      "contactTags": "/api/3/contacts/1/contactTags"
    }
  }
}
```

**Example — Upsert a contact (create or update by email)**:
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/contact/sync" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contact": {
      "email": "jane.doe@example.com",
      "firstName": "Jane",
      "lastName": "Doe",
      "phone": "+15551234567"
    }
  }'
```

**Example — Add a tag to a contact**:
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/contactTags" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contactTag": {
      "contact": "1",
      "tag": "5"
    }
  }'
```

**Response** (201 Created):
```json
{
  "contactTag": {
    "contact": "1",
    "tag": "5",
    "cdate": "2026-03-29T12:00:00-05:00",
    "id": "12",
    "links": {
      "contact": "/api/3/contacts/1",
      "tag": "/api/3/tags/5"
    }
  }
}
```

---

#### 2. Lists API — `/api/3/lists`

Manage subscription lists and list memberships.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/lists` | List all lists |
| POST | `/api/3/lists` | Create a list |
| GET | `/api/3/lists/{id}` | Get a list |
| POST | `/api/3/contactLists` | Subscribe a contact to a list |

---

#### 3. Tags API — `/api/3/tags`

Manage tags for organizing and segmenting contacts.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/tags` | List all tags |
| POST | `/api/3/tags` | Create a tag |

---

#### 4. Deals (CRM) API — `/api/3/deals`

Manage deals, pipelines, stages, tasks, and notes within ActiveCampaign's built-in CRM.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/3/deals` | Create a deal |
| GET | `/api/3/deals` | List deals |
| GET | `/api/3/deals/{id}` | Get a deal |
| PUT | `/api/3/deals/{id}` | Update a deal |
| DELETE | `/api/3/deals/{id}` | Delete a deal |
| POST | `/api/3/dealStages` | Create a pipeline stage |
| GET | `/api/3/dealStages` | List stages |
| POST | `/api/3/dealPipelines` | Create a pipeline |
| GET | `/api/3/dealPipelines` | List pipelines |
| POST | `/api/3/dealTasks` | Create a deal task |
| POST | `/api/3/dealNotes` | Add a deal note |

**Example — Create a deal**:
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/deals" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "deal": {
      "title": "Enterprise Annual Contract",
      "value": 50000,
      "currency": "usd",
      "contact": "1",
      "group": "1",
      "stage": "1",
      "owner": "1",
      "description": "Annual enterprise license renewal"
    }
  }'
```

**Response** (201 Created):
```json
{
  "deal": {
    "id": "1",
    "title": "Enterprise Annual Contract",
    "value": "5000000",
    "currency": "usd",
    "contact": "1",
    "group": "1",
    "stage": "1",
    "owner": "1",
    "description": "Annual enterprise license renewal",
    "cdate": "2026-03-29T12:00:00-05:00",
    "mdate": "2026-03-29T12:00:00-05:00",
    "status": 0,
    "links": {
      "dealActivities": "/api/3/deals/1/dealActivities",
      "contact": "/api/3/deals/1/contact",
      "contactDeals": "/api/3/deals/1/contactDeals",
      "group": "/api/3/deals/1/group",
      "nextTask": "/api/3/deals/1/nextTask",
      "notes": "/api/3/deals/1/notes",
      "organization": "/api/3/deals/1/organization",
      "owner": "/api/3/deals/1/owner",
      "scoreValues": "/api/3/deals/1/scoreValues",
      "stage": "/api/3/deals/1/stage",
      "tasks": "/api/3/deals/1/tasks"
    }
  }
}
```

---

#### 5. Automations API — `/api/3/automations`

Manage automations and contact-automation enrollments.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/automations` | List automations |
| GET | `/api/3/automations/{id}` | Get an automation |
| POST | `/api/3/contactAutomations` | Add a contact to an automation |
| DELETE | `/api/3/contactAutomations/{id}` | Remove a contact from an automation |

**Example — Add a contact to an automation**:
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/contactAutomations" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contactAutomation": {
      "contact": "1",
      "automation": "3"
    }
  }'
```

**Response** (201 Created):
```json
{
  "contactAutomation": {
    "contact": "1",
    "automation": "3",
    "status": "1",
    "adddate": "2026-03-29T12:00:00-05:00",
    "id": "7",
    "links": {
      "automation": "/api/3/automations/3",
      "contact": "/api/3/contacts/1"
    }
  }
}
```

---

#### 6. Campaigns API — `/api/3/campaigns`

View campaign details and performance data.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/campaigns` | List campaigns |
| GET | `/api/3/campaigns/{id}` | Get campaign details |

---

#### 7. Custom Fields API — `/api/3/fields`

Manage custom fields and field values for contacts.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/fields` | List custom fields |
| POST | `/api/3/fields` | Create a custom field |
| POST | `/api/3/fieldValues` | Set a field value for a contact |

---

#### 8. Webhooks API — `/api/3/webhooks`

Subscribe to real-time event notifications via webhooks.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/webhooks` | List webhooks |
| POST | `/api/3/webhooks` | Create a webhook |
| GET | `/api/3/webhooks/{id}` | Get a webhook |
| PUT | `/api/3/webhooks/{id}` | Update a webhook |
| DELETE | `/api/3/webhooks/{id}` | Delete a webhook |
| GET | `/api/3/webhook/events` | List available webhook events |

**Available webhook events**:
- `subscribe` — contact subscribes to a list
- `unsubscribe` — contact unsubscribes
- `open` — email opened
- `click` — link clicked in email
- `bounce` — email bounced
- `reply` — contact replied to email
- `sent` — email sent
- `forward` — email forwarded
- `share` — email shared
- `deal_add` — deal created
- `deal_update` — deal updated
- `deal_stage_add` — deal moved to new stage
- `deal_pipeline_add` — deal added to pipeline
- `deal_task_add` — task added to deal
- `deal_task_complete` — deal task completed
- `deal_note_add` — note added to deal
- `contact_tag_added` — tag added to contact
- `contact_tag_removed` — tag removed from contact
- `sms_sent` — SMS sent
- `sms_reply` — SMS reply received
- `sms_unsub` — SMS unsubscribe
- `list_add` — contact added to list
- `subscriber_note` — note added to contact
- `update` — contact updated

**Delivery guarantee**: At-least-once delivery — webhooks may fire more than once for the same event. Implement idempotency in your handler.

**Example — Create a webhook**:
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/webhooks" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "webhook": {
      "name": "Deal stage changes",
      "url": "https://example.com/webhooks/activecampaign",
      "events": ["deal_stage_add", "deal_update"],
      "sources": ["api", "system", "admin", "contact"]
    }
  }'
```

**Response** (201 Created):
```json
{
  "webhook": {
    "id": "1",
    "name": "Deal stage changes",
    "url": "https://example.com/webhooks/activecampaign",
    "events": ["deal_stage_add", "deal_update"],
    "sources": ["api", "system", "admin", "contact"],
    "cdate": "2026-03-29T12:00:00-05:00",
    "links": []
  }
}
```

---

#### 9. Scoring API — `/api/3/scores`

Access lead and contact scoring models.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/scores` | List scoring models |
| GET | `/api/3/scores/{id}` | Get a scoring model |

Contact scores are also accessible as part of the contact object when retrieving individual contacts.

---

#### 10. Site Tracking API — `/api/3/siteTrackingDomains`

Manage tracked domains for site-visit tracking on contacts.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/siteTrackingDomains` | List tracked domains |
| POST | `/api/3/siteTrackingDomains` | Add a tracking domain |

Site visit data is available on the contact object.

---

#### 11. Forms API — `/api/3/forms`

Access form definitions.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/3/forms` | List forms |
| GET | `/api/3/forms/{id}` | Get form details |

---

#### 12. Notes API — `/api/3/notes`

Manage notes on contacts.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/3/notes` | Create a note |
| GET | `/api/3/notes` | List notes |

---

#### 13. Tasks API — `/api/3/dealTasks`

Manage tasks associated with deals.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/3/dealTasks` | Create a task |
| GET | `/api/3/dealTasks` | List tasks |

---

## Quick Reference — Common Workflows

### Create a contact and add them to an automation
```bash
# Step 1: Upsert contact by email
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/contact/sync" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contact": {
      "email": "customer@example.com",
      "firstName": "Alex",
      "lastName": "Rivera"
    }
  }'

# Step 2: Add the contact to an automation
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/contactAutomations" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "contactAutomation": {
      "contact": "1",
      "automation": "3"
    }
  }'
```

### Create a deal and add a task
```bash
# Step 1: Create a deal
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/deals" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "deal": {
      "title": "Q2 Expansion",
      "value": 25000,
      "currency": "usd",
      "contact": "1",
      "group": "1",
      "stage": "1",
      "owner": "1"
    }
  }'

# Step 2: Add a task to the deal
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/dealTasks" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "dealTask": {
      "title": "Follow up on proposal",
      "duedate": "2026-04-05T10:00:00-05:00",
      "dealTasktype": "1",
      "deal": "1",
      "assignee": "1",
      "note": "Send revised pricing document"
    }
  }'
```

### Set up a webhook for deal events
```bash
curl --request POST \
  --url "https://youraccountname.api-us1.com/api/3/webhooks" \
  --header "Api-Token: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "webhook": {
      "name": "CRM event notifications",
      "url": "https://example.com/webhooks/activecampaign",
      "events": ["deal_add", "deal_update", "deal_stage_add", "deal_task_complete"],
      "sources": ["api", "system", "admin", "contact"]
    }
  }'
```
