<!-- Source: https://www.rudderstack.com/docs/api/ -->
<!-- Note: API docs are JS-rendered and couldn't be fully fetched. This reference is compiled from search results, Postman collection metadata, and documentation snippets. Verify against live docs. -->

# RudderStack API Reference

## HTTP API (Event Ingestion)

**Base URL**: `https://<data-plane-url>/v1/`

**Authentication**: Basic Auth — use the source write key as the username, leave password empty.

```
Authorization: Basic base64(<write_key>:)
Content-Type: application/json
```

### Endpoints

#### POST /v1/identify
Associate a user with traits.

```json
{
  "userId": "user123",
  "traits": {
    "email": "user@example.com",
    "name": "John Doe",
    "plan": "pro"
  },
  "context": {
    "ip": "1.2.3.4"
  },
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

#### POST /v1/track
Record an action.

```json
{
  "userId": "user123",
  "event": "Order Completed",
  "properties": {
    "revenue": 99.99,
    "currency": "USD",
    "orderId": "order-456"
  },
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

#### POST /v1/page
Record a page view.

```json
{
  "userId": "user123",
  "name": "Home",
  "properties": {
    "url": "https://example.com",
    "referrer": "https://google.com"
  }
}
```

#### POST /v1/screen
Record a screen view (mobile).

```json
{
  "userId": "user123",
  "name": "Dashboard",
  "properties": {
    "feed_type": "recommended"
  }
}
```

#### POST /v1/group
Associate a user with a group/company.

```json
{
  "userId": "user123",
  "groupId": "company-789",
  "traits": {
    "name": "Acme Inc",
    "industry": "SaaS",
    "employees": 50
  }
}
```

#### POST /v1/alias
Merge two user identities.

```json
{
  "userId": "new-user-id",
  "previousId": "old-anonymous-id"
}
```

#### POST /v1/batch
Send multiple events in a single call.

```json
{
  "batch": [
    {
      "type": "identify",
      "userId": "user123",
      "traits": {"email": "user@example.com"}
    },
    {
      "type": "track",
      "userId": "user123",
      "event": "Page Viewed"
    }
  ]
}
```

**Limits**:
- Maximum 32 KB per individual call
- Maximum 4 MB per batch call
- Batch endpoint accepts multiple event types in a single request

### Common response codes

| Code | Meaning |
|---|---|
| 200 | Event accepted |
| 400 | Malformed request (check JSON format) |
| 401 | Invalid write key |
| 429 | Rate limit exceeded |

## Transformations API

**Base URL**: `https://api.rudderstack.com/transformations`

**Authentication**: Bearer token (Personal Access Token from RudderStack dashboard).

```
Authorization: Bearer <personal_access_token>
Content-Type: application/json
```

### Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/transformations` | List all transformations |
| POST | `/transformations` | Create a new transformation |
| GET | `/transformations/{id}` | Get a specific transformation |
| PUT | `/transformations/{id}` | Update a transformation |
| DELETE | `/transformations/{id}` | Delete a transformation |
| GET | `/libraries` | List all shared libraries |
| POST | `/libraries` | Create a shared library |
| GET | `/libraries/{id}` | Get a specific library |
| PUT | `/libraries/{id}` | Update a library |
| DELETE | `/libraries/{id}` | Delete a library |

### Transformation object

```json
{
  "id": "transformation-id",
  "name": "Mask PII",
  "description": "Masks email and phone fields",
  "code": "export function transformEvent(event) { ... }",
  "language": "javascript",
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z"
}
```

## Test API

**Purpose**: Verify the event workflow for configured sources and destinations.

**Base URL**: `https://api.rudderstack.com`

Used to send test events and verify they flow through the pipeline correctly. Useful for validating source/destination connections without sending production traffic.

## SDKs

RudderStack provides official SDKs that wrap the HTTP API:

| Platform | Package | Install |
|---|---|---|
| JavaScript | `@rudderstack/analytics-js` | `npm install @rudderstack/analytics-js` |
| Node.js | `@rudderstack/rudder-sdk-node` | `npm install @rudderstack/rudder-sdk-node` |
| Python | `rudder-sdk-python` | `pip install rudder-sdk-python` |
| Go | `analytics-go` | `go get github.com/rudderlabs/analytics-go` |
| Java | `analytics-java` | Maven/Gradle from `com.rudderstack.sdk.java.analytics` |
| Ruby | `rudder_analytics` | `gem install rudder_analytics` |
| iOS | `Rudder` | Swift Package Manager or CocoaPods |
| Android | `com.rudderstack.android.sdk` | Gradle |
| React Native | `@rudderstack/rudder-sdk-react-native` | `npm install @rudderstack/rudder-sdk-react-native` |
| Flutter | `rudder_sdk_flutter` | `flutter pub add rudder_sdk_flutter` |

All SDKs follow the same API pattern: `identify()`, `track()`, `page()`/`screen()`, `group()`, `alias()`, `reset()`.

## Postman Collection

A Postman collection is available at: https://documenter.getpostman.com/view/16242548/TzeWFT6D

## Further reading

- Full docs: https://www.rudderstack.com/docs/
- HTTP API: https://www.rudderstack.com/docs/api/http-api/
- Transformations API: https://www.rudderstack.com/docs/api/transformation-api/
- Test API: https://www.rudderstack.com/docs/api/test-api/
- JavaScript SDK: https://www.rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/
- GitHub: https://github.com/rudderlabs
