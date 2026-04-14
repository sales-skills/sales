<!-- Source: https://docs.tealium.com/api/v3/ -->

# Tealium V3 API Reference

## Authentication

**Endpoint:** `POST https://platform.tealiumapis.com/v3/auth/accounts/{account}/profiles/{profile}`

**Parameters** (URL-encoded form fields):
- `username={email}`
- `key={api_key}`

**Header:** `Content-Type: application/x-www-form-urlencoded`

**Response:**
```json
{
  "token": "eyJ0[...]kqkpj8vE",
  "host": "us-east-1-platform.tealiumapis.com"
}
```

The returned JWT bearer token is valid for **30 minutes**. Reuse until expiry — re-authenticating too frequently triggers throttling.

The `host` value must be used in all subsequent API calls (region-specific routing).

**Permissions required:** Server-side publisher permissions for API access.

## Request Format

**Root URL:** `https://platform.tealiumapis.com/v3`

**Content type:** JSON only — `Content-Type: application/json`

**Rate limits:** Vary by endpoint. Exceeding returns HTTP 429.

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK — successful request |
| 204 | No Content — successful (integration/event endpoint) |
| 400 | Bad Request — malformed or invalid request |
| 401 | Unauthorized — authentication failed or missing |
| 404 | Not Found — resource doesn't exist |
| 429 | Too Many Requests — rate limit exceeded |
| 50X | Internal Server Error |

---

## Collect HTTP API v3

Send events from any application that can make HTTP requests. Rate limit: **100 events/second**.

### Hosts

- **Global:** `collect.tealiumiq.com` (routes to lowest latency server)
- **Regional:** `collect-<region>.tealiumiq.com` (region-specific)

### POST /v3/collect/event

Send a single event.

**Header:** `Content-Type: application/json`

**Required fields:**
- `tealium_account` — account name
- `tealium_profile` — profile name
- `tealium_event` — event type (e.g., `page_view`, `user_login`)

**Optional:**
- `tealium_datasource` — data source key
- `tealium_visitor_id` — anonymous visitor GUID
- Any custom attributes

**Example:**
```json
{
  "tealium_account": "my-account",
  "tealium_datasource": "abc123",
  "tealium_profile": "main",
  "tealium_event": "page_view",
  "page_type": "product",
  "page_name": "Blue Widget"
}
```

### GET /v3/collect/event

Pass data via query string. Returns 1x1 transparent GIF.

```
https://collect.tealiumiq.com/v3/collect/event?tealium_account=my-account&tealium_profile=main&tealium_event=page_view&page_name=test
```

### POST /v3/collect/bulk-event

Send up to **10 events per request**. Shared properties apply to all events.

**Example:**
```json
{
  "shared": {
    "tealium_account": "my-account",
    "tealium_profile": "main",
    "tealium_environment": "prod",
    "tealium_datasource": "abc123",
    "tealium_visitor_id": "visitor_071222_1"
  },
  "events": [
    {"page_name": "Homepage", "tealium_event": "page_view"},
    {"page_name": "Product", "tealium_event": "page_view"}
  ]
}
```

### POST /v3/collect/integration/event/accounts/{account}/profiles/{profile}/datasources/{datasourceId}

Integration-specific endpoint for webhooks. Returns HTTP 204 on success.

### Regional endpoints

- `/v3/collect/regional/event` — region-specific single event
- `/v3/collect/regional/bulk-event` — region-specific bulk event

---

## Visitor Profile API v3

Query visitor profile records from the Customer Data Hub.

### GET /v3/customer/visitor/accounts/{account}/profiles/{profile}

Look up a live visitor profile.

**Query parameters:**
- `attributeId` — numeric ID of a Visitor ID attribute
- `attributeValue` — value to look up (URL-encode special characters)
- `prettyName` — `true` for user-friendly names, `false` for numeric IDs
- `searchPriority` — JSON array: `["live"]`, `["historical"]`, `["live", "historical"]`, or `["historical", "live"]`
- `responseFilters` — JSON array of attribute IDs (max 150 values)

**Example:**
```
GET https://us-east-1-platform.tealiumapis.com/v3/customer/visitor/accounts/my-account/profiles/main?attributeId=5013&attributeValue=user@example.com&searchPriority=["live","historical"]&responseFilters=["5051","5016"]
```

**Auth:** Bearer token required.

**Errors:** 400, 401, 404

### GET /v3/customer/visitor/historical/accounts/{account}/profiles/{profile}

Look up a historical visitor profile.

**Query parameters:** Same as live lookup minus `searchPriority`.

---

## Visitor Privacy API v3

Manage visitor privacy and GDPR compliance.

### GET /v3/privacy/visitor/accounts/{account}/profiles/{profile}

Query a visitor's privacy profile.

**Query parameters:**
- `attributeId` — numeric ID of Visitor ID attribute
- `attributeValue` — value to look up
- `prettyName` — `true`/`false`

**Permissions:** View Visitor Lookup

### DELETE /v3/privacy/visitor/accounts/{account}/profiles/{profile}

Delete a visitor's data (GDPR right-to-deletion).

**Parameters** (URL-encoded form fields):
- `attributeId`
- `attributeValue`

**Response:** `{"transactionId": "{value}"}`

**Permissions:** View, Edit, & Delete Visitor Lookup

### GET /v3/privacy/visitor/accounts/{account}/profiles/{profile}/transactions/{transaction_id}

Check status of a deletion request.

**Response:** `{"{transaction_id}": "PENDING|SUCCESS|FAILED"}`

### GET /v3/privacy/visitor/accounts/{account}/profiles/{profile}/ids

List all Visitor ID attributes available for lookups.

**Response:** Object of key-value pairs (numeric IDs → attribute names).

---

## V2 APIs (Legacy)

V2 APIs cover additional functionality not yet in V3:

- **iQ Revisions** — fetch version and publish history of a client-side account/profile
- **Hosted Data Layer** — upload and access data layer objects or JSON files on Tealium's servers
- **Omnichannel File Status** — detailed status for omnichannel files
- **Visitor Privacy** — legacy privacy endpoints

For authenticated endpoints, use V3. V2 authentication uses a separate mechanism documented at `docs.tealium.com/api/v2/getting-started/`.

---

## SDK Libraries

Available on GitHub at [github.com/tealium](https://github.com/tealium):

- **iOS (Swift)**: `tealium-swift` (44 stars)
- **iOS (Objective-C)**: `tealium-ios` (29 stars)
- **Android**: `tealium-android` (20 stars), `tealium-kotlin` (10 stars)
- **React Native**: `tealium-react-native` (15 stars)
- **Flutter**: `tealium-flutter` (8 stars)
- **Angular**: `integration-angular` (19 stars)

Full documentation: [docs.tealium.com](https://docs.tealium.com/)
