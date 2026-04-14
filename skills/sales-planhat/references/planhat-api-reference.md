<!-- Source: https://www.planhat.com/developers/api/introduction, https://help.planhat.com/en/collections/9801513-api, https://github.com/robocorp/robocorp-planhat -->
<!-- Fetched: 2026-04-14 -->
<!-- Note: Planhat API docs are JS-rendered and could not be fully fetched. This reference is compiled from search results, help center articles, the Robocorp Python client docs, and third-party sources. -->

# Planhat REST API Reference

## Overview

- **Auth**: Bearer token — `Authorization: Bearer {access_token}`
- **Access token**: Generated via Service Accounts (Private Apps) in Settings → App Center
- **Main API base URL**: `https://api.planhat.com`
- **Analytics base URL**: `https://analytics.planhat.com` (for open endpoints — user activities, metrics, call logs)
- **MCP Server URL**: `https://api.planhat.com/v1/mcp`
- **Rate limit**: 200 API calls/min (soft limit), ~150 req/sec hard limit, up to 50 parallel requests
- **Analytics rate limit**: separate, higher limits (handles high-volume data)
- **Object limit per request**: 2,000 objects (5,000 for Companies)
- **Bulk upsert limit**: 5,000 objects per request
- **Body size limit**: 32MB per POST (analytics endpoint, ~150,000 items)
- **Pagination**: offset-based, use `limit` and `offset` query parameters
- **Error codes**: 400 (bad request), 401 (unauthorized), 403 (forbidden), 404 (not found), 429 (rate limited), 500 (server error)

## Authentication methods

### Service Account (Private App) tokens
1. Settings → App Center → Create Private App
2. Assign model-level permissions (read/write per object type)
3. Generate access token
4. Use in header: `Authorization: Bearer {token}`

### Personal Access Tokens
- Per-user tokens for individual API access
- Generated from user settings

### OAuth Clients
- For third-party app integrations (ChatGPT, Claude Web, etc.)
- Create OAuth app in App Center
- Standard OAuth 2.0 flow

### Tenant Token (open endpoints only)
- Found in Settings
- Used for unauthenticated analytics endpoints (activities, metrics, call logs)
- No bearer auth required — pass as URL parameter or in body

## Data models (24+ resources)

### Company
Core customer account object.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/companies` | List companies (max 5,000 per request) |
| GET | `/companies/:id` | Get by Planhat ID or externalId |
| POST | `/companies` | Create company |
| PUT | `/companies/:id` | Update company |
| DELETE | `/companies/:id` | Delete company |
| POST | `/companies/bulk` | Bulk upsert (up to 5,000) |

Key fields: `_id`, `externalId`, `name`, `phase`, `owner`, `custom` (custom fields), health score fields, revenue fields.

### Enduser
Individual users within a customer company.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/endusers` | List endusers (max 2,000 per request) |
| GET | `/endusers/:id` | Get by ID or externalId |
| POST | `/endusers` | Create enduser |
| PUT | `/endusers/:id` | Update enduser |
| DELETE | `/endusers/:id` | Delete enduser |
| POST | `/endusers/bulk` | Bulk upsert |

Key fields: `_id`, `externalId`, `companyId`, `name`, `email`, `custom`.

**Note**: Not all endusers sent via API get added — Planhat may skip duplicates based on email or externalId matching. Check the help center article on "Not all End Users sent over API get added."

### License
Recurring revenue / subscription records.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/licenses` | List licenses |
| GET | `/licenses/:id` | Get by ID |
| POST | `/licenses` | Create license |
| PUT | `/licenses/:id` | Update license |
| DELETE | `/licenses/:id` | Delete license |
| POST | `/licenses/bulk` | Bulk upsert |

Key fields: `_id`, `externalId`, `companyId`, `product`, `mrr`, `startDate`, `renewalDate`, `custom`.

### Opportunity
Pipeline / deal records.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/opportunities` | List opportunities |
| GET | `/opportunities/:id` | Get by ID |
| POST | `/opportunities` | Create opportunity |
| PUT | `/opportunities/:id` | Update opportunity |
| DELETE | `/opportunities/:id` | Delete opportunity |

### Asset
Products/services the customer uses.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/assets` | List assets |
| POST | `/assets` | Create asset |
| PUT | `/assets/:id` | Update asset |
| DELETE | `/assets/:id` | Delete asset |

### Note
Rich-text notes linked to companies/endusers.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/notes` | List notes |
| POST | `/notes` | Create note |
| PUT | `/notes/:id` | Update note |
| DELETE | `/notes/:id` | Delete note |

### Task
Action items with assignee and due date.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/tasks` | List tasks |
| POST | `/tasks` | Create task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

### Ticket
Support tickets synced from external systems.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/tickets` | List tickets |
| POST | `/tickets` | Create ticket |
| PUT | `/tickets/:id` | Update ticket |
| DELETE | `/tickets/:id` | Delete ticket |

### Conversation
Email/chat thread records.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/conversations` | List conversations |
| POST | `/conversations` | Create conversation |
| PUT | `/conversations/:id` | Update conversation |
| DELETE | `/conversations/:id` | Delete conversation |

### NPS
Net Promoter Score survey responses.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/nps` | List NPS responses |
| POST | `/nps` | Create NPS response |
| PUT | `/nps/:id` | Update NPS response |
| DELETE | `/nps/:id` | Delete NPS response |

### Campaign
Marketing campaign tracking.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/campaigns` | List campaigns |
| POST | `/campaigns` | Create campaign |
| PUT | `/campaigns/:id` | Update campaign |

### Invoice
Billing records.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/invoices` | List invoices |
| POST | `/invoices` | Create invoice |
| PUT | `/invoices/:id` | Update invoice |
| DELETE | `/invoices/:id` | Delete invoice |

### Sale
Closed-won revenue records.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/sales` | List sales |
| POST | `/sales` | Create sale |
| PUT | `/sales/:id` | Update sale |

### Issue
Bug/feature request tracking.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/issues` | List issues |
| POST | `/issues` | Create issue |
| PUT | `/issues/:id` | Update issue |
| DELETE | `/issues/:id` | Delete issue |

### Project
Onboarding/implementation projects.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/projects` | List projects |
| POST | `/projects` | Create project |
| PUT | `/projects/:id` | Update project |
| DELETE | `/projects/:id` | Delete project |

### Objective
Customer success objectives/goals.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/objectives` | List objectives |
| POST | `/objectives` | Create objective |
| PUT | `/objectives/:id` | Update objective |

### Churn
Churn event records.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/churns` | List churn events |
| POST | `/churns` | Create churn event |

### Custom Field
Extend data models with custom fields.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/customfields` | List custom field definitions |
| POST | `/customfields` | Create custom field definition |
| PUT | `/customfields/:id` | Update custom field |
| DELETE | `/customfields/:id` | Delete custom field |

### User (Admin)
Planhat team members / admin users.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/users` | List Planhat users |

### Time Entry / Timesheet
Service time tracking.

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/timeentries` | List time entries |
| POST | `/timeentries` | Create time entry |

### Metrics (Time Series)
Calculated time-series data.

| Method | Endpoint | Notes |
|---|---|---|
| POST (analytics) | `analytics.planhat.com/metrics` | Push metric data (open endpoint, tenant token) |

## Open endpoints (no auth required)

These endpoints use the Tenant Token and are designed for high-volume data ingestion:

| Endpoint | Purpose |
|---|---|
| `POST analytics.planhat.com/activities` | Push user activity events |
| `POST analytics.planhat.com/metrics` | Push time-series metric data |
| `POST analytics.planhat.com/calllogs` | Push telephony call logs |

**Body size limit**: 32MB per POST (~150,000 items).

## Bulk upsert

Available on Company, Enduser, License, and other core models:
- `POST /{model}/bulk` with array body (up to 5,000 objects)
- Uses keyable fields (externalId, email, etc.) to match existing records
- Matched records are updated; unmatched records are created
- **Keyable gotcha**: if the keyable field isn't set on existing records, bulk upsert creates duplicates

## Data uniqueness and keyables

Planhat uses "keyables" to enforce data uniqueness:
- **Company**: `externalId` (typically CRM Account ID)
- **Enduser**: `externalId` or `email`
- **License**: `externalId`
- If a record has no keyable set, API creates a new record even if a logical duplicate exists
- This is the #1 cause of duplicate records from API/CRM sync

## Webhooks

Planhat supports outbound webhooks via the Automations system:
- Configure in Automations → Connections
- Trigger webhooks on model events (create, update, delete)
- POST request to your endpoint with event payload
- Retry on failure (details in automation settings)
