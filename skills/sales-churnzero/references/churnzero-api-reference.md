<!-- Source: https://app.churnzero.net/developers (REST API v1), https://www.stitchflow.com/user-management/churnzero/api (Push API), https://github.com/customerlobby/churn_zero (Ruby wrapper), https://hightouch.com/docs/destinations/churnzero (Hightouch integration) -->

# ChurnZero API Reference

ChurnZero exposes **two separate APIs**:

1. **Push/Analytics API** — for writing data into ChurnZero (events, attributes, contacts, accounts)
2. **REST API v1** — OData v4 compliant, for reading data out of ChurnZero (Enterprise edition only)

---

## API 1: Push/Analytics API

### Base URL

```
https://analytics.churnzero.net/i
```

When configuring third-party integrations (e.g., Hightouch), use `https://analytics.churnzero.net/` without the `/i` suffix.

### Authentication

API Key passed as query parameter (`appKey`).

**To obtain:** Log into ChurnZero as Admin → Admin > Application Keys > New App Key. Copy the appKey value.

**Security note:** Treat the appKey as a secret — suppress full URL logging in any pipeline.

### HTTP Method

All operations use **GET requests** with query parameters (including creates, updates, and deletes).

### Actions

#### setAttribute (Upsert Contact or Account)

```
GET https://analytics.churnzero.net/i?appKey=YOUR_KEY&action=setAttribute&entity=Contact&accountExternalId=ACC1&contactExternalId=USR1&email=user@example.com&firstName=Jane
```

```
GET https://analytics.churnzero.net/i?appKey=YOUR_KEY&action=setAttribute&entity=Account&accountExternalId=ACC1&name=Acme+Corp&arr=50000
```

#### trackEvent

```
GET https://analytics.churnzero.net/i?appKey=YOUR_KEY&action=trackEvent&accountExternalId=ACC1&contactExternalId=USR1&eventName=Login&eventDate=2024-01-15T10:00:00Z
```

Event dates must be ISO 8601 format. Future dates are rejected.

#### incrementAttribute

```
GET https://analytics.churnzero.net/i?appKey=YOUR_KEY&action=incrementAttribute&entity=Contact&accountExternalId=ACC1&contactExternalId=USR1&attr_LoginCount=1
```

#### deleteContact

```
GET https://analytics.churnzero.net/i?appKey=YOUR_KEY&action=deleteContact&accountExternalId=ACC1&contactExternalId=USR1
```

**Warning:** Deletion is permanent. No soft-delete or recovery endpoint is documented.

#### deleteAccount

```
GET https://analytics.churnzero.net/i?appKey=YOUR_KEY&action=deleteAccount&accountExternalId=ACC1
```

**Warning:** Deletion is permanent and destroys the account plus all data exclusively belonging to it.

### Response Format

Success: `HTTP 200 OK {"status":"success"}`

Error handling is minimal — ChurnZero's Push API doesn't return detailed error messages.

### Data Model (Push API)

| Field | Type | On Create | On Update | Notes |
|---|---|---|---|---|
| accountExternalId | string | required | required | Must match existing Account |
| contactExternalId | string | required | required | Primary key for upsert |
| email | string | recommended | optional | Used for matching |
| firstName | string | optional | optional | |
| lastName | string | optional | optional | |
| phone | string | optional | optional | |
| title | string | optional | optional | |
| isUnsubscribed | boolean | optional | optional | |

**Important:** Entity type strings (e.g., `Contact`, `Account`) are case-sensitive.

### Rate Limits (Push API)

ChurnZero's public documentation does not explicitly publish rate-limit thresholds for the Push API. Monitor for HTTP 429 responses and implement backoff.

### SDKs / Wrappers

**Ruby (community):** `gem 'churn_zero'` — [github.com/customerlobby/churn_zero](https://github.com/customerlobby/churn_zero)

Supports: `trackEvents`, `setAttribute`, `incrementAttribute`

No official SDKs exist — all other integrations are raw HTTP.

---

## API 2: REST API v1 (OData — Enterprise Only)

### Base URL

```
https://{instance}.{region}app.churnzero.net/public/v1/
```

Where:
- `{instance}` = your tenant identifier (e.g., `marketingpony`)
- `{region}` = datacenter region (e.g., `us1`, `eu1`)

Example: `https://marketingpony.us1app.churnzero.net/public/v1/`

### Authentication

HTTP Basic Authentication. Base64 encode `username:apikey` and pass via the `Authorization: Basic <encoded>` header.

API Keys are generated from Admin > API Keys page. Requires `Developer Tools` user permission.

### Required Permissions

- `Developer Tools` user permission
- Entity-specific `Bulk Read` permissions:
  - Accounts, Contacts, Events, Surveys, Tasks, UserAccounts, Churn Scores, Journeys

### Endpoints

| Endpoint | Description |
|---|---|
| `GET /Account` | All accounts |
| `GET /Account({Id})` | Specific account by internal ID |
| `GET /Account(AccountExternalId='{id}')` | Account by external ID |
| `GET /Contact` | All contacts |
| `GET /Contact({Id})` | Specific contact by internal ID |
| `GET /Contact(AccountExternalId='{aid}',ContactExternalId='{cid}')` | Contact by external IDs |
| `GET /Event` | All events |
| `GET /EventType` | Event type definitions |
| `GET /Journey` | Journey definitions |
| `GET /JourneyInstance` | Customer journey progress instances |
| `GET /JourneyProgress` | Milestone completion records |
| `GET /JourneyMilestone` | Journey milestone definitions |
| `GET /ChurnScore` | Health score values |
| `GET /ChurnScoreFactor` | Health score factor configurations |
| `GET /ChurnScoreCalculation` | Score calculation details |
| `GET /Task` | CSM tasks |
| `GET /TaskStatus` | Task status definitions |
| `GET /TaskPriority` | Task priority definitions |
| `GET /Survey` | Survey definitions |
| `GET /SurveyResponse` | Survey response data |
| `GET /Segment` | Segment definitions |
| `GET /CustomField` | Custom field definitions |

**Dynamic endpoints:** The API adjusts as customizations are made. For example, if Zendesk Tickets are synced, a new API endpoint for those tickets is exposed.

### OData v4 Query Parameters

| Parameter | Purpose | Example |
|---|---|---|
| `$filter` | Limit results | `$filter=Name eq 'Acme'` |
| `$select` | Specify fields to return | `$select=Name,NextRenewalDate` |
| `$expand` | Include related resources inline | `$expand=Contacts` |
| `$orderby` | Sort results | `$orderby=Name asc` |
| `$top` | Limit number of results | `$top=50` |
| `$skip` | Skip N results (pagination) | `$skip=100` |
| `$count` | Include total count | `$count=true` |
| `$apply` | Aggregation | `$apply=aggregate(Revenue with sum as TotalRevenue)` |

**Filter operators:** `eq`, `ne`, `gt`, `lt`, `ge`, `le`, `startswith()`, `contains()`

**Segments:** Filter by predefined segments: `Use/SegmentId eq {id}`

**Column Sets:** Apply custom field sets: `Use/SegmentColumnSetId eq {id}`

### Pagination

- Default page size: **100 results**
- Use `@odata.nextLink` URL from response body for server-side paging
- Or manually increment `$skip` by page size

### Rate Limits

| Request volume (per minute) | Behavior |
|---|---|
| 1-100 | Normal response |
| 101-200 | Delayed response |
| >200 | 429 Too Many Requests |

Implement exponential backoff when receiving 429 responses.

### Data Types

- `string` — text values
- `string(date-time)` — ISO 8601 UTC (e.g., `2024-01-15T10:00:00Z`)
- `string(date)` — `yyyy-MM-dd` format
- `number(int32)`, `number(int64)` — integers
- `number` — decimal values
- `boolean` — true/false
- `array[string]` — string arrays

### Error Responses

```json
{
  "error": {
    "code": "403",
    "message": "Forbidden"
  }
}
```

| Code | Status |
|---|---|
| 400 | Bad Request — malformed query or invalid parameters |
| 401 | Unauthorized — missing or invalid credentials |
| 403 | Forbidden — insufficient permissions |
| 404 | Not Found — entity or endpoint doesn't exist |
| 429 | Rate limit exceeded |
| 500 | Internal Server Error |

### BI Tool Integrations

The OData v4 API is compatible with:
- **Microsoft Excel** — direct OData connection
- **Tableau Desktop** — OData connector
- **Microsoft Power BI** — OData feed connector
- **Any OData-compatible tool**

---

## Key Differences Between the Two APIs

| Feature | Push/Analytics API | REST API v1 (OData) |
|---|---|---|
| Direction | Write data INTO ChurnZero | Read data FROM ChurnZero |
| Auth | appKey query parameter | HTTP Basic (base64) |
| HTTP method | GET only | Standard REST |
| OData support | No | Full v4 |
| Edition | All editions | Enterprise only |
| Rate limit | Undocumented | 200 req/min |
| Pagination | None | 100 per page, @odata.nextLink |
| Use case | Event tracking, attribute updates | Reporting, BI, data export |
