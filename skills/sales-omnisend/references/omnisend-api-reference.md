### Omnisend REST API — Comprehensive Reference

**Base URL**: `https://api.omnisend.com/api/`
**Docs**: https://api-docs.omnisend.com/
**Current API version**: 2026-03-15

---

## Authentication

Two authentication methods supported:

| Method | Header | Use case |
|---|---|---|
| API Key | `X-API-KEY: your-api-key` | Direct integrations, server-to-server |
| OAuth 2.0 | `Authorization: Bearer {token}` | Third-party apps, marketplace integrations |

**API Key generation**: Store Settings → API Keys → Create API Key. Select permissions (read/write per resource).

**OAuth 2.0 flow**: Authorization Code Grant. Submit an integration form to Omnisend to receive OAuth credentials (1-3 business days). Redirect users to Omnisend's authorization endpoint, exchange code for token.

---

## Versioning

Omnisend uses **header-based versioning**. Include the version header with every request:

```
Omnisend-Version: 2026-03-15
```

Available versions: v3, v4.0, v5, 2026-03-15 (current stable). If omitted, the API defaults to the latest stable version.

---

## Request & Response Format

### Requests

- **Content-Type**: `application/json`
- **Methods**: Standard REST — GET for reads, POST for creates, PATCH/PUT for updates, DELETE for deletes

### Response Format

List endpoints return:
```json
{
  "data": [...],
  "paging": {
    "cursors": {
      "after": "opaque_cursor_string",
      "before": "opaque_cursor_string"
    }
  }
}
```

Single-record endpoints return:
```json
{
  "data": { ... }
}
```

### Error Responses

Errors follow **RFC 9457 Problem Details**:

```json
{
  "type": "https://api-docs.omnisend.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "Email address is required",
  "errors": [
    {
      "field": "email",
      "message": "Email address is required"
    }
  ]
}
```

---

## Pagination

**Type**: Cursor-based (opaque tokens)

| Parameter | Type | Description |
|---|---|---|
| `after` | string | Cursor from `paging.cursors.after` — fetch next page |
| `before` | string | Cursor from `paging.cursors.before` — fetch previous page |
| `limit` | integer | Results per page (default varies by endpoint) |

**How to paginate**:
1. Make the initial request without cursor params
2. If `paging.cursors.after` exists, pass it as `?after={cursor}` for the next page
3. Continue until no `after` cursor is returned

---

## Rate Limits

Rate limit details are not comprehensively documented. The API returns standard HTTP 429 responses when limits are exceeded. Implement exponential backoff on 429 responses.

*Flag: Rate limit specifics (requests per minute/second) were not found in public documentation — verify with Omnisend support for production integrations.*

---

## All API Endpoints

All paths are relative to `https://api.omnisend.com/api/`.

---

### Contacts

| Method | Endpoint | Description |
|---|---|---|
| GET | `/contacts` | List all contacts with optional filters |
| GET | `/contacts/{contactID}` | Get a single contact by ID |
| POST | `/contacts` | Create a new contact |
| PATCH | `/contacts/{contactID}` | Update a contact |
| DELETE | `/contacts/{contactID}` | Delete a contact |
| POST | `/contacts/{contactID}/tags` | Add tags to a contact |
| DELETE | `/contacts/{contactID}/tags/{tag}` | Remove a tag from a contact |

**Contact object fields**:

| Field | Type | Description |
|---|---|---|
| `contactID` | string | Unique contact identifier |
| `email` | string | Contact email address |
| `phone` | string | Contact phone number (E.164 format) |
| `firstName` | string | First name |
| `lastName` | string | Last name |
| `tags` | array | Array of tag strings |
| `status` | string | Subscription status: `subscribed`, `unsubscribed`, `nonSubscribed` |
| `smsStatus` | string | SMS subscription: `subscribed`, `unsubscribed`, `nonSubscribed` |
| `createdAt` | datetime | Creation timestamp (ISO 8601) |
| `customProperties` | object | Custom key-value pairs |

**Example — Create a contact**:
```bash
curl -X POST https://api.omnisend.com/api/contacts \
  -H "X-API-KEY: your-api-key" \
  -H "Omnisend-Version: 2026-03-15" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "tags": ["shopify", "vip"],
    "status": "subscribed"
  }'
```

---

### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | List all products |
| GET | `/products/{productID}` | Get a single product |
| POST | `/products` | Create/sync a product |
| PATCH | `/products/{productID}` | Update a product |
| DELETE | `/products/{productID}` | Delete a product |

**Product object fields**:

| Field | Type | Description |
|---|---|---|
| `productID` | string | Unique product identifier (from your store) |
| `title` | string | Product name |
| `productUrl` | string | Product page URL |
| `imageUrl` | string | Product image URL |
| `price` | number | Product price |
| `currency` | string | ISO 4217 currency code |
| `status` | string | `inStock`, `outOfStock`, `discontinued` |
| `vendor` | string | Product vendor/brand |
| `variants` | array | Array of variant objects (size, color, etc.) |

---

### Product Categories

| Method | Endpoint | Description |
|---|---|---|
| GET | `/categories` | List all product categories |
| GET | `/categories/{categoryID}` | Get a single category |
| POST | `/categories` | Create a category |
| PATCH | `/categories/{categoryID}` | Update a category |
| DELETE | `/categories/{categoryID}` | Delete a category |

---

### Campaigns

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns` | List all campaigns |
| GET | `/campaigns/{campaignID}` | Get a single campaign with stats |
| POST | `/campaigns` | Create a new campaign |
| PATCH | `/campaigns/{campaignID}` | Update a campaign |
| POST | `/campaigns/{campaignID}/actions/send` | Send a campaign |
| POST | `/campaigns/{campaignID}/actions/cancel` | Cancel a scheduled/sending campaign |

**Campaign statuses**: `draft`, `scheduled`, `sending`, `sent`, `cancelled`

---

### Events

| Method | Endpoint | Description |
|---|---|---|
| POST | `/events` | Send a custom event for a contact |

**Event tracking** is critical for custom ecommerce platforms without native integrations. Send events for:
- Page views (product viewed, category viewed)
- Cart events (added to cart, cart updated, cart abandoned)
- Order events (placed order, order fulfilled, order cancelled)
- Custom events (any action relevant to your automations)

**Example — Track a cart event**:
```bash
curl -X POST https://api.omnisend.com/api/events \
  -H "X-API-KEY: your-api-key" \
  -H "Omnisend-Version: 2026-03-15" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "eventName": "added to cart",
    "properties": {
      "productID": "prod_123",
      "productTitle": "Blue T-Shirt",
      "price": 29.99,
      "currency": "USD"
    }
  }'
```

---

### Segments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/segments` | List all segments |
| GET | `/segments/{segmentID}` | Get a segment with contact count |
| GET | `/segments/{segmentID}/contacts` | List contacts in a segment |

*Note: Segments are created and managed via the Omnisend UI. The API provides read access for syncing segment data to external systems.*

---

### Brands

| Method | Endpoint | Description |
|---|---|---|
| GET | `/brands` | List connected brands/stores |
| GET | `/brands/{brandID}` | Get brand details |

---

### Batches

| Method | Endpoint | Description |
|---|---|---|
| POST | `/batches` | Submit a batch operation (bulk contact create/update) |
| GET | `/batches/{batchID}` | Check batch operation status |

Use batches for bulk operations (importing thousands of contacts). Submit an array of operations, receive a batch ID, poll for completion.

---

### Email Content

| Method | Endpoint | Description |
|---|---|---|
| GET | `/templates` | List email templates |
| GET | `/templates/{templateID}` | Get a template |

---

### Images

| Method | Endpoint | Description |
|---|---|---|
| POST | `/images` | Upload an image |
| GET | `/images` | List uploaded images |

---

### Analytics

| Method | Endpoint | Description |
|---|---|---|
| GET | `/reports` | Generate analytics reports |

*Flag: Analytics API endpoints were not fully documented in public docs. The reports endpoint may require specific query parameters for date ranges, metrics, and grouping. Verify with Omnisend API documentation.*

---

## Webhooks

Omnisend supports webhooks for real-time event notifications. Configure in Store Settings → Webhooks or via the API.

*Flag: Webhook event types and payload formats were not fully documented in the public API reference reviewed. The API docs reference page indicated webhooks exist but details were limited. Verify webhook capabilities and setup with Omnisend support or the latest API documentation.*

---

## JavaScript Snippet (Client-Side Tracking)

For tracking website behavior (page views, cart events) without a native ecommerce integration:

```html
<script>
  window.omnisend = window.omnisend || [];
  omnisend.push(["accountID", "YOUR_ACCOUNT_ID"]);
  omnisend.push(["track", "$pageViewed", {
    $productID: "prod_123",
    $title: "Blue T-Shirt"
  }]);
</script>
```

The JavaScript snippet enables browse abandonment and product recommendation features for custom platforms.

---

## Key Differences from Other Marketing APIs

| Feature | Omnisend Behavior |
|---|---|
| Versioning | **Header-based** (`Omnisend-Version`), not URL-based |
| Pagination | **Cursor-based** (opaque tokens), not page-number-based |
| Authentication | API key as **header** (`X-API-KEY`), not query param |
| Error format | **RFC 9457 Problem Details** with structured `errors` array |
| Contacts | Single entity for email + SMS + push — not separate lists |
| Events | Generic event tracking API — send any event name with properties |
| Batches | Async bulk operations with polling for completion |

---

## Common Integration Patterns

**Product catalog sync**: POST products and categories via API → enable product recommendations and browse abandonment automations.

**Order tracking**: POST events for order lifecycle (placed, fulfilled, cancelled) → trigger post-purchase automations.

**Custom cart tracking**: POST "added to cart" and "cart abandoned" events → trigger cart abandonment workflows without native ecommerce integration.

**Contact sync**: POST/PATCH contacts with tags and custom properties → maintain audience segments for targeted campaigns.

**Bulk import**: Use `/batches` for importing large contact lists → poll batch status for completion.

---

## Source URLs

- API Documentation: https://api-docs.omnisend.com/
- API Authentication: https://api-docs.omnisend.com/reference/authentication
- Help Center: https://support.omnisend.com/
- Integrations: https://support.omnisend.com/en/articles/2888766-integrations-with-omnisend
