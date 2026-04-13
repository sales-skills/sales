<!-- Source: https://payhip.com/api-reference -->

# Payhip API Reference

The Payhip API follows RESTful principles with consistent resource-based URLs, form-encoded requests, JSON responses, and standard HTTP methods/status codes.

## Authentication

**Method:** API key in header
- Header: `payhip-api-key: YOUR_API_KEY_HERE`
- Obtain from: https://payhip.com/settings/developer
- For license operations: `product-secret-key: YOUR_PRODUCT_SECRET_KEY_HERE`

## Coupons

### Create a coupon
`POST /api/v2/coupons`

**Parameters:**
- `code` (string, required): Coupon code for checkout
- `coupon_type` (enum, required): "single", "multi", or "collection"
- `percent_off` (float) OR `amount_off` (integer in cents): At least one required
- `product_key` (string): Required if coupon_type="single"
- `collection_id` (string): Required if coupon_type="collection"
- `notes` (string, optional): Internal notes only
- `usage_limit` (integer, optional): Maximum redemptions
- `start_date` (datetime, optional): RFC 3339 format
- `end_date` (datetime, optional): RFC 3339 format
- `minimum_purchase_amount` (integer, optional): Minimum cart total in cents

### List all coupons
`GET /api/v2/coupons`

**Parameters:**
- `limit` (integer): 1-100, default 10
- `offset` (integer): Pagination offset, default 0

### Retrieve a coupon
`GET /api/v2/coupons/:id`

## License Keys

### Verify a license key
`GET /api/v2/license/verify`

**Parameters:**
- `license_key` (string, required)

### Disable a license key
`PUT /api/v2/license/disable`

**Parameters:**
- `license_key` (string, required)

### Enable a license key
`PUT /api/v2/license/enable`

**Parameters:**
- `license_key` (string, required)

### Increase usage count
`PUT /api/v2/license/usage`

**Parameters:**
- `license_key` (string, required)

### Decrease usage count
`PUT /api/v2/license/decrease`

**Parameters:**
- `license_key` (string, required)

## License Key Object

```json
{
  "license_key": "XXXX-XXXX-XXXX-XXXX",
  "enabled": true,
  "product_link": "abc123",
  "buyer_email": "buyer@example.com",
  "uses": 3,
  "product_name": "My Software",
  "date": "2024-01-15T10:30:00Z"
}
```

## Coupon Object

```json
{
  "id": 12345,
  "coupon_type": "multi",
  "percent_off": 20.0,
  "amount_off": null,
  "code": "SAVE20",
  "start_date": null,
  "end_date": "2024-12-31T23:59:59Z",
  "product_key": null,
  "collection_id": null,
  "minimum_purchase_amount": 1000,
  "usage_limit": 100,
  "notes": "Holiday promotion"
}
```

## Response Format

All responses wrapped in `{"data": {...}}` structure.

## Webhooks

<!-- Source: https://help.payhip.com/article/115-webhooks -->

### Setup
Settings > Developer tab > input webhook endpoint URLs (comma-separated for multiple). Select events to subscribe to.

### Events

#### paid
Triggered when a customer is charged.

Payload includes: transaction_id, email, currency, price (in cents), items array, payment_type, fees, timestamp.

#### refunded
Triggered when a payment is refunded.

Payload includes all `paid` fields plus: amount_refunded, date_refunded, date_created.

#### subscription.created
Triggered when a new subscription begins.

Payload includes: subscription_id, customer details, plan_name, product info, consent status.

#### subscription.deleted
Triggered when a subscription is canceled.

Payload includes subscription.created fields plus: status ("canceled"), date_subscription_deleted.

### Security
All payloads include a `signature` field. Verify authenticity by comparing against `hash('sha256', $apiKey)` using your API key.

### Requirements
- Endpoints must return HTTP 200 status code
- Failed requests retry hourly for up to 3 hours
- All prices in cents (e.g., $10 = 1000)

## API Limitations

The current API only supports coupons and license keys. Payhip plans to expand the API to support more resource types in the future. For other automation, use Zapier triggers (New Sale, Sale Refund, New Membership Subscription) or webhooks.
