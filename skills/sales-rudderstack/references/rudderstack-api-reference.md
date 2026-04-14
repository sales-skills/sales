<!-- Sources: https://raw.githubusercontent.com/rudderlabs/rudderstack-docs/main/docs/api/http-api.mdx, transformation-api.mdx, test-api.mdx, pixel-api-spec.mdx, data-regulation-api.mdx, data-governance-api.mdx; https://raw.githubusercontent.com/rudderlabs/rudder-server/master/gateway/handle_lifecycle.go -->

# RudderStack API Reference

## API Categories Summary

| API | Auth Method | Base URL |
|-----|-------------|----------|
| HTTP Tracking | Basic Auth (writeKey:) | Data Plane URL |
| Pixel | writeKey query param | Data Plane URL |
| Transformations | Basic Auth (email:token) | api.rudderstack.com |
| Test | Basic Auth (email:token) | api.rudderstack.com |
| Data Regulation | Bearer Token | api.rudderstack.com |
| Data Governance | Basic Auth (admin creds) | Data Plane URL |
| Tracking Plan | Basic Auth (email:token) | api.rudderstack.com |

---

## 1. HTTP Tracking API (Event Ingestion)

### Authentication
- **Method**: HTTP Basic Authentication
- **Username**: Source Write Key
- **Password**: Empty string (leave blank)
- **Required Header**: `Content-Type: application/json`
- **Example**: `Authorization: Basic MVhrNURDaGZKQW9sM3h0VzdxTm5LMWFwbzVwOg==`

### Size Limits
- Individual calls: **32 KB** maximum
- Batch endpoint: **4 MB** per batch, **32 KB** per individual call within batch
- Timestamp format: ISO 8601 `yyyy-MM-ddTHH:mm:ss.SSSZ`

### Response Codes
| Code | Meaning |
|---|---|
| 200 | Event accepted |
| 400 | Invalid request (oversized payload, invalid JSON, missing/invalid auth) |
| 429 | Rate limit exceeded |

### POST /v1/identify
Associates users with their actions and records traits.

**Required fields (at least one):** `userId` (string) or `anonymousId` (string)

**Optional fields:** `context` (object), `timestamp` (string), `traits` (object — email, name, plan, etc.), `integrations` (object — selective destination routing)

```bash
curl -u <write_key>: -X POST <DATA_PLANE_URL>/v1/identify \
  -d '{"userId":"user123","traits":{"email":"user@example.com","plan":"premium"}}' \
  --header "Content-Type: application/json"
```

### POST /v1/track
Records user actions/events with associated properties.

**Required fields:** `userId` or `anonymousId` (at least one), `event` (string — name of the action)

**Optional fields:** `properties` (object — revenue, category, etc.), `context`, `timestamp`, `integrations`

```bash
curl -u <write_key>: -X POST <DATA_PLANE_URL>/v1/track \
  -d '{"userId":"user123","event":"Product Purchased","properties":{"revenue":49.99,"product":"T-shirt"}}' \
  --header "Content-Type: application/json"
```

### POST /v1/page
Records website page views.

**Required fields:** `userId` or `anonymousId` (at least one), `name` (string — page name)

**Optional fields:** `properties` (url, referrer, title, path, search), `context`, `timestamp`, `integrations`

### POST /v1/screen
Mobile equivalent of page tracking.

**Required fields:** `userId` or `anonymousId`, `name` (string — screen name)

**Optional fields:** `properties`, `context`, `timestamp`, `integrations`

### POST /v1/group
Links users to groups/organizations.

**Required fields:** `userId` or `anonymousId`, `groupId` (string)

**Optional fields:** `traits` (name, industry, employees, plan), `context`, `timestamp`, `integrations`

### POST /v1/alias
Merges two user identities.

**Required fields:** `userId` or `anonymousId`, `previousId` (string — old user identifier to merge)

### POST /v1/merge
Consolidates user identities for warehouse destinations (BigQuery, Snowflake).

**Required fields:** `userId` or `anonymousId`, `mergeProperties` (array of `{type, value}` pairs)

### POST /v1/batch
Sends multiple events in a single request. Max 4 MB per batch, 32 KB per individual call.

**Required fields:** `batch` (array of event objects, each with a `type` field: identify, track, page, screen, group, alias)

```json
{
  "batch": [
    {"type": "identify", "userId": "user123", "traits": {"email": "user@example.com"}},
    {"type": "track", "userId": "user123", "event": "Page Viewed"}
  ]
}
```

### POST /v1/import
Import endpoint (same auth pattern as other v1 endpoints).

### POST /v1/webhook & GET /v1/webhook
Webhook receiver endpoint, accepts both POST and GET.

---

## 2. Pixel API (GET-based Tracking)

For tracking via GET requests when POST is not feasible (AMP pages, email tracking). Auth is via `writeKey` query parameter instead of Basic Auth.

### GET /pixel/v1/page

**Required parameters:** `writeKey`, `anonymousId`

**Optional parameters:** `userId`, `name`, `context.library.name`, `context.library.version`, `context.platform`, `context.locale`, `context.userAgent`, `context.screen.width`, `context.screen.height`, `context.page.path`, `context.page.url`, `context.page.referrer`, `context.page.title`, `properties.<key>`

```
https://hosted.rudderlabs.com/pixel/v1/page?writeKey=${writeKey}&anonymousId=${anonymousId}&context.page.url=${canonicalUrl}&name=${pageName}
```

### GET /pixel/v1/track

**Required parameters:** `writeKey`, `anonymousId`, `event`

**Optional parameters:** `userId`, `context.*`, `properties.<key>`

**Limitation:** Integration key overrides not supported for selective destination routing.

---

## 3. Beacon API

### POST /beacon/v1/batch
Beacon-based batch endpoint for `navigator.sendBeacon`. Same payload format as `/v1/batch`.

---

## 4. Transformations API

### Authentication
- **Method**: HTTP Basic Authentication
- **Username**: Email address
- **Password**: Personal Access Token
- **Format**: `Authorization: Basic {Base64Encoded(email:accessToken)}`

### Transformations CRUD

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/transformations` | Create (query: `publish=true/false`) |
| GET | `/transformations` | List all published |
| GET | `/transformations/{id}` | Get single |
| POST | `/transformations/{id}` | Update (query: `publish=true/false`) |
| DELETE | `/transformations/{id}` | Delete published (revisions preserved) |
| GET | `/transformations/{id}/versions` | List versions (query: `count`, `orderBy`) |
| GET | `/transformations/{id}/versions/{versionId}` | Get specific version |

**Create/Update body:** `name` (required), `code` (required — JS transformation), `description`, `events` (test events), `destinationIds` (only if publish=true)

### Libraries CRUD

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/libraries` | Create (query: `publish=true/false`) |
| GET | `/libraries` | List all published |
| GET | `/libraries/{id}` | Get single |
| POST | `/libraries/{id}` | Update |
| GET | `/libraries/{id}/versions` | List versions |
| GET | `/libraries/{id}/versions/{versionId}` | Get specific version |

### POST /transformations/libraries/publish
Publish transformations and/or libraries. Body: `transformations` (array with `versionId`, optional `testInput`) and/or `libraries` (array with `versionId`). Server runs tests before publishing.

---

## 5. Test API

**Not supported for open-source RudderStack.**

Auth: Basic Auth (email:Personal Access Token)

### POST /v0/testDestination/{destination_ID}
Verify event transformation and delivery for a destination.

```json
{
  "stage": {
    "user_transform": true,
    "dest_transform": true,
    "send_to_destination": true
  },
  "message": { /* RudderStack event payload */ }
}
```

Pipeline stages: `user_transform` (applies user transformation), `dest_transform` (destination-specific transform), `send_to_destination` (actually sends, returns response).

Query params: `force=true` to override disabled destination.

### POST /v0/testSource/{source_ID}
Verify events for all destinations connected to a source. Same body structure, returns array for all connected destinations.

### Unsupported destinations
Kafka, Kinesis, Azure Event Hubs, Google Pub/Sub, Google Sheets, Redis, BigQuery Stream, S3, Azure Blob Storage, all warehouse destinations.

---

## 6. Data Regulation API

Auth: Bearer Token (`Authorization: Bearer <personal_access_token>`)

### POST /v2/regulations
Add a data regulation.

Body: `regulationType` ("suppress" or "suppress_with_delete"), `sourceIds` or `destinationIds` (not both), `users` (array with `userId` required, `phone`/`email` optional)

| Type | Behavior |
|------|----------|
| suppress | Drops incoming user events at source |
| suppress_with_delete | Suppresses events AND deletes collected data from destinations |

Supported delete destinations: Amplitude, AppsFlyer, Braze, CleverTap, Google Analytics, Intercom, Mixpanel, Redis, S3.

### GET /v2/regulations
List regulations. Query: `after_cursor` for pagination.

### DELETE /v2/regulations/{regulation_id}
Cancel a regulation.

---

## 7. Data Governance API (Enterprise)

Auth: Basic Auth with `RUDDER_ADMIN_USER` / `RUDDER_ADMIN_PASSWORD` environment variables. Base URL: your data plane URL.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/schemas/event-models` | Retrieve event models (optional `WriteKey` filter) |
| GET | `/schemas/event-versions` | Schema versions (required `EventID` param) |
| GET | `/schemas/event-model/{EventID}/metadata` | Sampled events, total count, frequent values |
| GET | `/schemas/event-version/{VersionID}/metadata` | Version-specific metadata |
| GET | `/schemas/event-model/{EventID}/key-counts` | Field-level occurrence counts |
| GET | `/schemas/event-version/{VersionID}/missing-keys` | Fields absent in some events |

---

## 8. Infrastructure Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Liveness check |
| GET | `/version` | Server version |
| GET | `/robots.txt` | Robots exclusion |
| GET | `/docs` | OpenAPI specification |

---

## SDKs

| Platform | Package | Install |
|---|---|---|
| JavaScript | `@rudderstack/analytics-js` | `npm install @rudderstack/analytics-js` |
| Node.js | `@rudderstack/rudder-sdk-node` | `npm install @rudderstack/rudder-sdk-node` |
| Python | `rudder-sdk-python` | `pip install rudder-sdk-python` |
| Go | `analytics-go` | `go get github.com/rudderlabs/analytics-go` |
| Java | `analytics-java` | Maven/Gradle `com.rudderstack.sdk.java.analytics` |
| Ruby | `rudder_analytics` | `gem install rudder_analytics` |
| iOS | `Rudder` | Swift Package Manager or CocoaPods |
| Android | `com.rudderstack.android.sdk` | Gradle |
| React Native | `@rudderstack/rudder-sdk-react-native` | `npm install @rudderstack/rudder-sdk-react-native` |
| Flutter | `rudder_sdk_flutter` | `flutter pub add rudder_sdk_flutter` |
| .NET | - | NuGet |
| Rust | - | Cargo |
| Cordova | - | npm |
| Unity | - | Unity Package |

All SDKs follow the same API pattern: `identify()`, `track()`, `page()`/`screen()`, `group()`, `alias()`, `reset()`.

## Postman Collection

https://documenter.getpostman.com/view/16242548/TzeWFT6D

## Further reading

- Full docs: https://www.rudderstack.com/docs/
- HTTP API: https://www.rudderstack.com/docs/api/http-api/
- Transformations API: https://www.rudderstack.com/docs/api/transformation-api/
- Test API: https://www.rudderstack.com/docs/api/test-api/
- Data Regulation API: https://www.rudderstack.com/docs/api/data-regulation-api/
- Pixel API: https://www.rudderstack.com/docs/api/pixel-api-spec/
- GitHub: https://github.com/rudderlabs
