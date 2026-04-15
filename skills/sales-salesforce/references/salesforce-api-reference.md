<!-- Source: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm -->
<!-- Additional: WebSearch results for rate limits, Bulk API 2.0, error codes -->
<!-- Fetched: 2026-04-15 -->

# Salesforce REST API Reference

## Overview

Salesforce REST API provides programmatic access to Salesforce data using standard HTTP methods and JSON/XML responses. Current version: v66.0 (Spring '26).

- **Base URL**: `https://{instance}.salesforce.com/services/data/v66.0/`
- **Auth**: OAuth 2.0 (via Connected Apps or External Client Apps)
- **Response formats**: JSON (default), XML
- **API docs**: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm

## Authentication

### OAuth 2.0 endpoints

| Endpoint | URL |
|----------|-----|
| Authorization | `https://login.salesforce.com/services/oauth2/authorize` |
| Token | `https://login.salesforce.com/services/oauth2/token` |
| Sandbox Authorization | `https://test.salesforce.com/services/oauth2/authorize` |
| Sandbox Token | `https://test.salesforce.com/services/oauth2/token` |

### Supported OAuth flows

1. **Web Server Flow** (Authorization Code) — most common for web apps. Redirect user to authorize endpoint → get auth code → exchange for access + refresh tokens.
2. **User-Agent Flow** (Implicit) — for client-side/mobile apps. Token returned directly in URL fragment.
3. **JWT Bearer Token Flow** — for server-to-server. Sign JWT with private key, exchange for access token. No user interaction.
4. **Client Credentials Flow** — for integrations that don't act on behalf of a user. Client ID + secret → access token.
5. **Device Flow** — for input-constrained devices. User authorizes on a separate device.
6. **Username-Password Flow** (deprecated for production) — direct username + password + security token. Only for development/testing.

### Token details
- **Access token lifetime**: ~2 hours (configurable via Connected App policies)
- **Refresh token lifetime**: Configurable (default: no expiration, but can be set)
- **Token response includes**: `access_token`, `instance_url`, `id`, `token_type`, `issued_at`, `signature`

### Connected App setup
1. Setup → App Manager → New Connected App
2. Enable OAuth Settings
3. Set callback URL
4. Select OAuth scopes: `api`, `refresh_token`, `full` (most common)
5. Save → note Consumer Key and Consumer Secret

## Key endpoints

### Versions
```
GET /services/data/
```
Returns available API versions.

### sObject CRUD

```
# Describe all objects
GET /services/data/v66.0/sobjects/

# Describe a specific object (metadata + fields)
GET /services/data/v66.0/sobjects/Account/describe

# Create a record
POST /services/data/v66.0/sobjects/Account/
Body: {"Name": "Acme Corp", "Industry": "Technology"}
Returns: {"id": "001...", "success": true, "errors": []}

# Read a record
GET /services/data/v66.0/sobjects/Account/001xxxxxxxxxxxx
# With specific fields:
GET /services/data/v66.0/sobjects/Account/001xxxxxxxxxxxx?fields=Name,Industry,Website

# Update a record
PATCH /services/data/v66.0/sobjects/Account/001xxxxxxxxxxxx
Body: {"Industry": "Finance"}

# Delete a record
DELETE /services/data/v66.0/sobjects/Account/001xxxxxxxxxxxx

# Upsert by external ID
PATCH /services/data/v66.0/sobjects/Account/External_ID__c/EXT-001
Body: {"Name": "Acme Corp", "Industry": "Technology"}
```

### SOQL Query
```
GET /services/data/v66.0/query/?q=SELECT+Id,Name,Industry+FROM+Account+WHERE+Industry='Technology'

# Query more (for large result sets with nextRecordsUrl)
GET /services/data/v66.0/query/01gxx00000xxxxx-2000
```
- Max 2,000 records per response (use `nextRecordsUrl` for pagination)
- Max 50,000 records per query (use LIMIT or filtering)
- 100 SOQL queries per transaction

### SOSL Search
```
GET /services/data/v66.0/search/?q=FIND+{Acme}+IN+ALL+FIELDS+RETURNING+Account(Id,Name),Contact(Id,Name,Email)
```

### Composite API

**Composite** — up to 25 subrequests in a single call. Subrequests can reference results of previous subrequests via `@{referenceId.field}`.

```
POST /services/data/v66.0/composite/
Body: {
  "allOrNone": true,
  "compositeRequest": [
    {
      "method": "POST",
      "url": "/services/data/v66.0/sobjects/Account",
      "referenceId": "newAccount",
      "body": {"Name": "Acme Corp"}
    },
    {
      "method": "POST",
      "url": "/services/data/v66.0/sobjects/Contact",
      "referenceId": "newContact",
      "body": {"LastName": "Smith", "AccountId": "@{newAccount.id}"}
    }
  ]
}
```

**Composite Batch** — up to 25 independent subrequests. No reference IDs.

```
POST /services/data/v66.0/composite/batch/
```

**sObject Collections** — CRUD on up to 200 records of any type in one call.

```
POST /services/data/v66.0/composite/sobjects
Body: {
  "allOrNone": false,
  "records": [
    {"attributes": {"type": "Account"}, "Name": "Acme"},
    {"attributes": {"type": "Account"}, "Name": "Globex"}
  ]
}
```

**Composite Tree** — create parent + children in one call (up to 5 nesting levels, 200 records total).

```
POST /services/data/v66.0/composite/tree/Account
```

**Composite Graph** — complex multi-object operations with dependencies (up to 500 records).

```
POST /services/data/v66.0/composite/graph
```

### Limits
```
GET /services/data/v66.0/limits/
```
Returns current usage vs max for all governor limits (API calls, SOQL, storage, etc.).

## Rate limits

### Daily API call limits by edition

| Edition | Base daily limit | Per-user addition |
|---------|-----------------|-------------------|
| Developer | 15,000 | — |
| Enterprise | 100,000 | +1,000 per user (up to edition max) |
| Unlimited | 100,000 | +5,000 per user (up to edition max) |
| Performance | 100,000 | +5,000 per user |
| Sandbox | 5,000,000 | — |

**Per-license-type allocations**: Salesforce Platform license adds 1,000/user, full CRM license adds 1,000-5,000/user depending on edition.

### Concurrent API limits

| Environment | Concurrent long-running calls |
|-------------|------------------------------|
| Developer/Sandbox | 5 |
| Production | 25 |

A "long-running" call is one that takes >20 seconds.

### Monitoring
- `GET /services/data/v66.0/limits/` — check current usage
- Setup → API Usage Notifications → set threshold alerts (e.g., alert at 80%)
- Event Monitoring (add-on) for detailed API usage analytics

## Bulk API 2.0

For high-volume data operations (millions of records). Uses CSV format.

### Ingest job lifecycle

```
# 1. Create a job
POST /services/data/v66.0/jobs/ingest/
Body: {"object": "Account", "operation": "insert", "contentType": "CSV"}
Returns: {"id": "750xx...", "state": "Open"}

# 2. Upload CSV data
PUT /services/data/v66.0/jobs/ingest/750xx.../batches/
Content-Type: text/csv
Body: Name,Industry\nAcme,Technology\nGlobex,Finance

# 3. Close the job (starts processing)
PATCH /services/data/v66.0/jobs/ingest/750xx.../
Body: {"state": "UploadComplete"}

# 4. Monitor job status
GET /services/data/v66.0/jobs/ingest/750xx.../

# 5. Get results
GET /services/data/v66.0/jobs/ingest/750xx.../successfulResults/
GET /services/data/v66.0/jobs/ingest/750xx.../failedResults/
GET /services/data/v66.0/jobs/ingest/750xx.../unprocessedrecords/
```

### Bulk query

```
# Create query job
POST /services/data/v66.0/jobs/query/
Body: {"operation": "query", "query": "SELECT Id, Name FROM Account WHERE Industry = 'Technology'"}

# Get results
GET /services/data/v66.0/jobs/query/750xx.../results
```

### Bulk API limits

| Limit | Value |
|-------|-------|
| Records per day (ingest) | 100,000,000 |
| Max file size per job | 150 MB |
| Max concurrent jobs | 25 (ingest), 10 (query) |
| Max records per batch | 10,000 |
| Max job processing time | 10 minutes per batch |

### Supported operations
- `insert`, `update`, `upsert`, `delete`, `hardDelete` (ingest)
- `query`, `queryAll` (query — includes deleted/archived records)

## Error codes

### HTTP status codes

| Code | Meaning |
|------|---------|
| 200 | Success (GET, PATCH) |
| 201 | Created (POST) |
| 204 | No Content (DELETE) |
| 400 | Bad Request — malformed query, missing required field |
| 401 | Unauthorized — expired/invalid token |
| 403 | Forbidden — insufficient permissions |
| 404 | Not Found — invalid object/record ID |
| 409 | Conflict — record locked or version conflict |
| 500 | Internal Server Error |

### Common Salesforce error codes

| Error code | Cause | Fix |
|-----------|-------|-----|
| `INVALID_FIELD` | Field name doesn't exist on the object | Check field API names (not labels) |
| `MALFORMED_QUERY` | SOQL syntax error | Validate SOQL syntax, check field accessibility |
| `REQUEST_LIMIT_EXCEEDED` | Daily API limit hit | Check `/limits/`, reduce API calls, use Bulk API |
| `UNABLE_TO_LOCK_ROW` | Record locked by another transaction | Retry with exponential backoff |
| `DUPLICATES_DETECTED` | Duplicate rule match | Handle via `DuplicateRuleHeader` or fix duplicates |
| `INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY` | No access to a related record | Check sharing rules and field-level security |
| `FIELD_CUSTOM_VALIDATION_EXCEPTION` | Custom validation rule failed | Check validation rule criteria |

### Error response format
```json
[{
  "message": "The requested resource does not exist",
  "errorCode": "NOT_FOUND"
}]
```

## SDKs and tools

### Official
- **Salesforce CLI (sf)**: `npm install @salesforce/cli -g` — org management, deployments, Apex execution
- **Postman Collection**: github.com/forcedotcom/postman-salesforce-apis (archived but still useful)

### Community SDKs
- **JSforce** (JavaScript/Node.js): `npm install jsforce` — most popular JS client. Supports CRUD, SOQL, Bulk, Streaming, Metadata.
- **simple-salesforce** (Python): `pip install simple-salesforce` — lightweight Python client. CRUD, SOQL, Bulk, Metadata.
- **Restforce** (Ruby): `gem install restforce` — Ruby client with middleware support.

### VS Code
- **Salesforce Extensions for VS Code**: Official extension pack. IntelliSense for Apex, SOQL, LWC. Org browser, deployment, debug logs.
- Install: `ext install salesforce.salesforcedx-vscode`

## Additional reference

### Streaming API
- **PushTopics**: Subscribe to record changes matching a SOQL query. CometD protocol.
- **Platform Events**: Custom events for event-driven architecture. Publish via API or Apex.
- **Change Data Capture (CDC)**: Get real-time notifications for record changes. No SOQL needed.
- Limits: 20,000 events/24hr (Enterprise), 200,000 (Unlimited)

### Metadata API
- Deploy/retrieve customizations: objects, fields, layouts, Flows, Apex, profiles
- Used by Salesforce CLI and CI/CD tools
- `POST /services/Soap/m/66.0` (SOAP-based) or via Tooling API (REST)

### GraphQL API
- `POST /services/data/v66.0/graphql`
- Flexible querying with nested relationships
- Generally available since Winter '23
- Supports query and mutation operations

### Best practices
- Use Composite API to reduce API call count (25 subrequests = 1 API call)
- Use Bulk API 2.0 for >2,000 records
- Cache `describe` results — object metadata doesn't change often
- Use `If-Modified-Since` header to skip unchanged records
- Monitor limits proactively with `/limits/` endpoint
- Use external IDs for upsert operations to avoid duplicates
