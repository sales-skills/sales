<!-- Source: https://help.maestroqa.com/en/collections/3365430-api-documentation -->
<!-- Source: https://help.maestroqa.com/en/articles/3209794-rippit-api -->
<!-- Source: https://help.maestroqa.com/en/articles/6048258-csat-bulk-ingestion-api-documentation -->
<!-- Source: https://help.maestroqa.com/en/articles/5423717-rippit-scim-api -->
<!-- Source: https://help.maestroqa.com/en/articles/6024324-scim-api-users-endpoints -->
<!-- Source: https://help.maestroqa.com/en/articles/6024325-scim-api-groups-endpoints -->
<!-- Source: https://help.maestroqa.com/en/articles/6024386-scim-api-user-groups-endpoints -->
<!-- Source: https://help.maestroqa.com/en/articles/9713291-rippit-data-deletion-api-gdpr -->

# MaestroQA (Rippit) API Reference

## Base URL

`https://app.rippit.com/api/v1`

## Authentication

All requests require an API token passed in headers:

```python
headers = { 'apitoken': 'YOUR_API_TOKEN' }
```

Tokens are generated via account settings: click your name (top right) > Other Settings > API Keys.

By default, API tokens expire every 90 days. This can be disabled for long-lived access.

## Date Format

ISO 8601 UTC: `[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]Z`

## Rate Limits

- **10 requests per second**
- **100 requests per minute**
- GDPR deletion API: 1 req/s, 30 req/min

## Error Responses

| Code | Meaning |
|------|---------|
| 401 Unauthorized | Invalid token |
| 404 Not Found | Non-existent resource |
| 409 Conflict | Duplicate unique values |
| 422 Unprocessable Content | Invalid parameters |
| 429 Too Many Requests | Rate limit exceeded |

---

## Exports

### POST /request-raw-export
Request grading data export (CSV/ZIP format).

### GET /export-data/:id
Retrieve export results and status.

### POST /request-groups-export
Export agent group membership data.

### POST /request-audit-log-export
Export activity/audit logs.

---

## Tickets

### POST /tickets
Create a ticket.

### PATCH /tickets/:ticket_id
Update an existing ticket.

### DELETE /tickets/:ticket_id
Remove a ticket.

### GET /tickets/:ticket_id
Fetch a single ticket.

### GET /tickets
Retrieve multiple tickets. Query parameter: `ticket_ids`.

---

## Comments & Attachments

### POST /comments
Add a comment to a ticket.

### POST /comments-batch
Batch comment creation. **Max 500 items per request.**

### POST /attachments
Attach files to a ticket. Supports presigned URLs or direct URLs.

---

## Agents

### POST /agents
Create an agent.

### POST /agents/add-id-to-agent
Add an agent identifier.

### POST /agents/update-agent-availability
Toggle agent availability status.

---

## Coaching & Development

### GET /coaching-points/:id
Retrieve a single coaching point.

### GET /coaching-points
List coaching points (filterable).

### GET /coaching-sessions/:id
Retrieve a single coaching session.

### GET /coaching-sessions
List coaching sessions.

### GET /todos/:id
Retrieve a single to-do.

### GET /todos
List to-dos.

---

## Metrics

### POST /ticket-metrics-batch
Associate metrics with tickets. **Max 500 items per request.**

### POST /agent-metrics-batch
Associate agent-level metrics. **Max 500 items per request.**

---

## Assignments

### GET /assignments
Retrieve QA assignments.

---

## CSAT Bulk Ingestion

### POST /create-customer-feedback

Import batches of CSAT scores. **Max 100 items per request.**

**Required fields:**
- `submitted_at` (string): ISO 8601 datetime
- `ticket_id` (string): Helpdesk ticket identifier
- `agent_id` OR `agent_email` (string): Either agent identifier required
- `score` (integer): Primary CSAT score

**Optional fields:**
- `comment` (string): Customer feedback text
- `score_label` (string): Text equivalent (e.g., "Perfect")
- `min_score` (integer): Defaults to 1
- `max_score` (integer): Defaults to 5
- `clarifying_answers` (array): Additional survey responses with question, comment, score, score_label, min_score, max_score

**Response:** Status 201 CREATED. Returns `{ status: "completed", total: N, results: [...] }` with per-item status ("Created" or "Failed: [[Error Message]]").

---

## SCIM API (User Provisioning)

### Base URL
`https://app.rippit.com/api/v1/scim/v2`

Implements SCIM 2.0 (RFC 7643 Core Schema, RFC 7644 Protocol).

Authentication: Basic Authentication or apiToken header.

**Endpoint URLs are case-sensitive** (e.g., `/Users` not `/users`).

### Users

#### POST /Users — Create User

Required: `schemas`, `userName`

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "username@example.com",
  "name": { "givenName": "FirstName", "familyName": "LastName" },
  "emails": [{ "value": "username@example.com", "primary": true }],
  "displayName": "FirstName LastName",
  "active": true,
  "roles": ["manager"],
  "profile": { "Title": "Manager", "Location": "Here" }
}
```

Available roles: `admin`, `limitedAdmin`, `manager`, `grader`, `limited_agent`, `agent`

#### GET /Users — List Users

Query parameters:
- `count` — number to return
- `startIndex` — offset from 1
- `filter` — e.g., `userName eq "user@example.com"` or by `userAccessLevel`

Response: `{ totalResults, startIndex, itemsPerPage, Resources: [...] }`

#### GET /Users/:id — Get User by ID

#### PUT /Users/:id — Update User

Send only fields to overwrite. To deactivate: `{ "active": false }`.

### Groups (Agent Groups)

#### POST /Groups — Create Group
#### GET /Groups — List Groups (count, startIndex params)
#### GET /Groups/:id — Get Group
#### PUT /Groups/:id — Replace Group
#### PATCH /Groups/:id — Partial Update (add/remove/replace members/owners)
#### DELETE /Groups/:id — Delete Group (204 No Content)

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "displayName": "Support Team A",
  "members": ["agent1@example.com", "agent2@example.com"],
  "owners": ["manager-user-id"]
}
```

### Usergroups

Same CRUD operations as Groups but at `/Usergroups` path:
- POST /Usergroups
- GET /Usergroups (count, startIndex)
- GET /Usergroups/:id
- PUT /Usergroups/:id
- PATCH /Usergroups/:id (add/remove/replace owners/members)
- DELETE /Usergroups/:id

---

## GDPR Data Deletion

### DELETE /data-deletion-request

Request data deletion for CCPA/GDPR compliance.

**Parameters:**
- `emails` (string array, up to 5): Email addresses to delete
- `auditLabel` (optional string): Reference identifier for audit logging

**Response:** `{ confirmation: true, id: "job-id" }`

Two-stage process: immediate operational DB deletion + async batch purge.

**Rate limit:** 1 req/s, 30 req/min.

### GET /data-deletion-check/:id

Check async deletion status.

**Response:** `{ status: "pending" | "completed" | "not found" | "errored" }`
