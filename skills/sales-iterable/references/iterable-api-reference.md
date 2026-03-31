# Iterable API Reference

## Overview

- **Base URLs**: `https://api.iterable.com` (US data center), `https://api.eu.iterable.com` (EU data center)
- **API docs**: `https://api.iterable.com/api/docs` (US), `https://api.eu.iterable.com/api/docs` (EU)
- **Auth**: `Api-Key` header with your project API key. Optional JWT authentication for client-side keys (Bearer token in `Authorization` header).
- **Rate limits**: Vary by endpoint. Bulk operations: 10 req/s. Export: 4 req/min. Per-project or per-API-key depending on endpoint. 429 status code when exceeded.
- **Format**: JSON request/response bodies
- **HTTP methods**: GET, POST, PUT, DELETE, PATCH

## API Keys

- Created in Iterable dashboard: Settings > API Keys
- Each key is scoped to one project and one data center
- Key types: Standard (server-side), JWT-enabled (client-side with additional security)
- Permissions: Read-only, Read/Write, or custom scopes
- Best practice: Use limited-scope keys, store securely, rotate regularly

## User Data

### Update user
```
POST /api/users/update
```
Create or update a user profile.
```json
{
  "email": "user@example.com",
  "userId": "user123",
  "dataFields": {
    "firstName": "Jane",
    "lastName": "Doe",
    "plan": "premium",
    "signupDate": "2026-01-15T00:00:00Z"
  },
  "preferUserId": true
}
```
- `email` or `userId` required (at least one)
- `preferUserId`: when true, `userId` is the primary lookup key
- `dataFields`: custom attributes (nested objects supported)

### Bulk update users
```
POST /api/users/bulkUpdate
```
Update multiple users in a single request.
```json
{
  "users": [
    {
      "email": "user1@example.com",
      "dataFields": {"plan": "premium"}
    },
    {
      "email": "user2@example.com",
      "dataFields": {"plan": "free"}
    }
  ]
}
```
- Rate limit: 10 requests/second
- Max users per request: check API docs for current limit

### Get user by email
```
GET /api/users/{email}
```

### Delete user
```
DELETE /api/users/{email}
```

### Get user by userId
```
GET /api/users/byUserId/{userId}
```

## Events

### Track event
```
POST /api/events/track
```
Record a custom event for a user.
```json
{
  "email": "user@example.com",
  "eventName": "purchase",
  "dataFields": {
    "orderId": "ORD-12345",
    "total": 99.99,
    "items": ["SKU-001", "SKU-002"]
  },
  "createdAt": 1711843200
}
```
- `eventName`: custom event name (use consistent naming)
- `dataFields`: event-specific data
- `createdAt`: Unix timestamp (optional — defaults to now)

### Bulk track events
```
POST /api/events/trackBulk
```
- Rate limit: 10 requests/second
- Same structure as `track` but with `events` array

### Track purchase
```
POST /api/commerce/trackPurchase
```
```json
{
  "user": {"email": "user@example.com"},
  "items": [
    {
      "id": "SKU-001",
      "name": "Widget",
      "price": 29.99,
      "quantity": 2
    }
  ],
  "total": 59.98
}
```

### Update cart
```
POST /api/commerce/updateCart
```
Track cart state for abandonment triggers.

## Messaging

### Send email
```
POST /api/email/target
```
Send a triggered email to a specific user.
```json
{
  "recipientEmail": "user@example.com",
  "campaignId": 12345,
  "dataFields": {
    "orderNumber": "ORD-12345",
    "trackingUrl": "https://example.com/track/12345"
  }
}
```
- `campaignId`: ID of a triggered campaign in Iterable
- `dataFields`: merge fields for template personalization

### Send push notification
```
POST /api/push/target
```
```json
{
  "recipientEmail": "user@example.com",
  "campaignId": 67890,
  "dataFields": {
    "message": "Your order has shipped!"
  }
}
```

### Send SMS
```
POST /api/sms/target
```

### Send in-app message
```
POST /api/inApp/target
```

### Send web push
```
POST /api/webPush/target
```

## Lists

### Create list
```
POST /api/lists
```
```json
{
  "name": "VIP Customers"
}
```
Returns: `{"listId": 12345}`

### Get all lists
```
GET /api/lists
```

### Subscribe users to list
```
POST /api/lists/subscribe
```
```json
{
  "listId": 12345,
  "subscribers": [
    {"email": "user1@example.com"},
    {"email": "user2@example.com"}
  ]
}
```

### Unsubscribe users from list
```
POST /api/lists/unsubscribe
```

## Campaigns

### Get campaigns
```
GET /api/campaigns
```
Returns all campaigns with IDs, names, types, and status.

### Get campaign metrics
```
GET /api/campaigns/metrics
```

### Create campaign
```
POST /api/campaigns/create
```

## Catalogs

### Create catalog items
```
POST /api/catalogs/{catalogName}/items
```
```json
{
  "documents": {
    "SKU-001": {
      "name": "Widget Pro",
      "price": 29.99,
      "category": "widgets",
      "imageUrl": "https://example.com/widget.jpg"
    }
  }
}
```

### Get catalog items
```
GET /api/catalogs/{catalogName}/items
```

### Delete catalog items
```
DELETE /api/catalogs/{catalogName}/items
```

## Templates

### Get templates
```
GET /api/templates
```

### Get email template
```
GET /api/templates/email/get?templateId={id}
```

### Update email template
```
POST /api/templates/email/update
```

## Experiments

### Get experiment metrics
```
GET /api/experiments/metrics
```

## Export

### Export user data
```
GET /api/export/data.csv
```
- Rate limit: 4 requests/minute
- Supports filtering by date range, segment, fields

### Export events
```
GET /api/export/userEvents
```

## Webhooks

### System webhooks
Configure at Integrations > System Webhooks in the Iterable dashboard.

**Supported events**:
- Email: send, open, click, bounce, complaint, unsubscribe
- Push: send, open, bounce
- SMS: send, bounce, received (inbound)
- In-app: send, open, click
- Web push: send, open
- List: subscribe, unsubscribe
- User: profile update

**Authentication options**: None, Basic Auth, OAuth 2.0

**Payload format**: JSON POST to your endpoint URL (must be HTTPS).

### Journey webhooks
Webhook tile in Studio — call any external API at any point in a journey. Configure URL, method, headers, and body with Handlebars templating for dynamic data.

## Pagination

- List endpoints support `offset` and `limit` parameters
- Default limit varies by endpoint
- Check response for `totalCount` to determine if more pages exist

## Error Handling

| Status code | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — check request body |
| 401 | Unauthorized — invalid API key |
| 404 | Resource not found |
| 429 | Rate limit exceeded — implement backoff |
| 500 | Server error — retry with backoff |

## SDKs

- **iOS**: `pod 'Iterable-iOS-SDK'` or Swift Package Manager
- **Android**: `implementation 'com.iterable:iterableapi:3.x.x'`
- **React Native**: `@iterable/react-native-sdk`
- **Web**: JavaScript SDK for web push and event tracking

---

*Note: This reference is best-effort based on public documentation and blog posts. The full Swagger/OpenAPI spec is available at `https://api.iterable.com/api/docs`. Some endpoints, parameters, and rate limits may be incomplete — consult Iterable's official API docs for the authoritative reference.*
