<!-- Source: https://support.totango.com/hc/en-us/sections/360005893212-Totango-API (403 — Zendesk JS-rendered) -->
<!-- Supplemented from: https://www.stitchflow.com/user-management/totango/api, https://tray.ai/documentation/connectors/service/totango/, https://github.com/r0hitacharya/Totango -->
<!-- Note: Official API docs are behind Zendesk (JS-rendered, returns 403). This reference is assembled from third-party sources that document the API. Review against official docs when accessible. -->

# Totango API Reference

## Base URLs

- **US**: `https://api.totango.com`
- **EU**: `https://api-eu1.totango.com`

## Authentication

### App Token (recommended)
Header: `app-token: YOUR-TOKEN-HERE`

Generate in: Settings → Integrations → API Token

**Warning**: Clicking "Generate Token" creates a new token and invalidates the previous one. This breaks other integrations using the old token.

### Session Token (legacy)
Either a v1 token or a session token generated upon login. Used in some older endpoints.

### OAuth 2.0
Create and manage OAuth applications for third-party integrations.
Docs: https://support.totango.com/hc/en-us/articles/14475645271956-Create-and-manage-OAuth-applications

### SCIM 2.0 (Enterprise only)
- **Endpoint**: `https://api.totango.com/scim/v2`
- **Prerequisite**: SSO must be configured and enabled before SCIM provisioning can be activated
- **Operations**: GET/POST/PUT/PATCH/DELETE on `/Users` and `/Users/{id}`

## Rate Limits

- **Global**: 100 calls/minute per token
- **Search**: Max 1,000 results per call (use `offset` for pagination)

## Endpoints

### Search Accounts

```
POST {base_url}/api/v1/search/accounts
Content-Type: application/x-www-form-urlencoded
app-token: YOUR-TOKEN

query={"terms":[],"count":100,"offset":0,"fields":[{"type":"string_attribute","attribute":"Name","field_display_name":"Name"}]}
```

- `terms` array is **mandatory** — omitting returns 401
- `count`: number of results (max 1,000)
- `offset`: pagination offset
- `fields`: array of field definitions to return
- Response data is in `hits` property

### Search Users

```
POST {base_url}/api/v1/search/users
Content-Type: application/x-www-form-urlencoded
app-token: YOUR-TOKEN

query={"terms":[],"count":100,"offset":0}
```

Same structure as account search. Search criteria in `terms` array.

### Search Events (Touchpoints)

```
POST {base_url}/api/v2/events/search
app-token: YOUR-TOKEN
```

### Touchpoints API (v3)

#### Create Touchpoint
```
POST {base_url}/api/v3/touchpoints/
Content-Type: application/json
app-token: YOUR-TOKEN

{
  "account_id": "ACC-123",
  "content": "Quarterly business review completed",
  "touchpoint_type": "general",
  "subject": "QBR Q1 2026"
}
```

#### Read, Update, Delete
- **GET** `{base_url}/api/v3/touchpoints/{touchpoint_id}`
- **PUT** `{base_url}/api/v3/touchpoints/{touchpoint_id}`
- **DELETE** `{base_url}/api/v3/touchpoints/{touchpoint_id}`

### Team Members API (v2)

#### List All
```
GET {base_url}/api/v2/team_members
app-token: YOUR-TOKEN
```
Returns all team members. Pagination via offset for large result sets.

#### Get Single Member
```
GET {base_url}/api/v2/team_members/{user_id}
```
Note: `user_id` must be URL-encoded when it contains `@`.

#### Create/Update (Upsert)
```
POST {base_url}/api/v2/team_members
Content-Type: application/json
app-token: YOUR-TOKEN

{
  "id": "csm@company.com",
  "first_name": "Jane",
  "last_name": "Smith",
  "role": "csm"
}
```
Upsert behavior: if user exists, updates the record.

#### Deactivate
```
DELETE {base_url}/api/v2/team_members/{user_id}
```
Deactivates the user — does **not** permanently remove from Totango.

### Ingest Account/User Data (HTTP API)

```
POST {base_url}/api/v1/accounts
Content-Type: application/x-www-form-urlencoded
app-token: YOUR-TOKEN

data={"service_id":"YOUR-SERVICE-ID","account_id":"ACC-123","account_attributes":{"Name":"Acme Corp"}}
```

Uses form-encoded body with a JSON string in the `data` parameter — **not** a raw JSON body.

### Accounts Plan API

```
{base_url}/api/v3/accounts-plan
```

### Tasks / SuccessPlay Export

```
GET {base_url}/api/v3/tasks/export/csv
app-token: YOUR-TOKEN
```
Exports task/SuccessPlay statistics as CSV.

### Audit Log API

Query user adoption metrics by date range.

### User Management API

Manage Totango system users remotely. Docs: https://support.totango.com/hc/en-us/articles/360031891612

## Data Model

### Team Member fields
| Field | Type | Required |
|---|---|---|
| id | string | Yes |
| email | string | Yes (create) |
| first_name | string | No |
| last_name | string | No |
| role | string | No |
| status | string | No |
| teams | array | No |

### Pagination
- Offset-based: use `offset` parameter in search queries
- Max page size: 1,000

## SDKs and Libraries

- **Node.js**: `totango-tracker` npm package — track activities, modules, attributes
- **iOS**: `totango/totango-ios-api` on GitHub
- **Go**: Third-party library at `github.com/BenjaminRH/totango`
- **Python**: Community scripts at `github.com/r0hitacharya/Totango`

## JavaScript Tracking (Client-Side)

Totango provides a JavaScript collector for tracking user activity in web applications. Configure via the Totango admin panel. Used for product usage data that feeds health scores.

## Integration via Zapier

- **Triggers**: Account attribute changed, new account added, user attribute changed, new user added
- **Actions**: Send Data (HTTP API — account attributes, user attributes, activity tracking)
- **Webhooks**: Use "Webhooks by Zapier" (Pro required) as trigger to leverage other Totango APIs (e.g., Search API)

## Webhook Support

Customer Data Hub supports execution reporting via webhooks. Use this to monitor data import job success/failure. Example: https://support.totango.com/hc/en-us/articles/360029056871
