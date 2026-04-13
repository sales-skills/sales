<!-- Source: https://docs.lemonsqueezy.com/api -->
<!-- Source: https://docs.lemonsqueezy.com/api/getting-started/requests -->
<!-- Source: https://docs.lemonsqueezy.com/api/license-api -->

# Lemon Squeezy API Reference

## Base URL

```
https://api.lemonsqueezy.com/v1/
```

All requests must use HTTPS. HTTP calls will fail.

## Authentication

Bearer token authentication using API keys generated in the dashboard (Settings → API).

```
Authorization: Bearer {api_key}
```

Keys exist in two modes:
- **Live mode**: Production use
- **Test mode**: Development/testing environments

Keys are valid for one year. Display only once at creation — store securely. Never share in public repos or client-side code.

## Required Headers

```
Accept: application/vnd.api+json
Content-Type: application/vnd.api+json
Authorization: Bearer {api_key}
```

## CORS Proxy

For sandboxed environments with null Origin headers:
```
https://api-cors-anywhere.lemonsqueezy.com
```

## Rate Limiting

**Main API**: 300 requests per minute

Response headers:
- `X-Ratelimit-Limit` — max requests per window
- `X-Ratelimit-Remaining` — remaining requests

Exceeding returns `429 Too Many Requests`.

## Response Format

JSON:API specification. Responses include:
- `data` — the primary resource(s)
- `relationships` — related resource links
- `included` — related resources (when requested via `?include=`)
- `meta` — pagination metadata
- `links` — navigation links

## Pagination

Page-based pagination on all list endpoints.

```
?page[size]=25&page[number]=2
```

- `page[size]`: Results per page (default 10, min 1, max 100)
- `page[number]`: Page to retrieve

Response includes:
- `links.first`, `links.last`, `links.next`, `links.prev` — URL-encoded navigation
- `meta.page.currentPage`, `meta.page.lastPage`, `meta.page.total`, `meta.page.perPage`, `meta.page.from`, `meta.page.to`

## Filtering

JSON:API query parameter filtering on list endpoints:

```
?filter[product_id]=2
?filter[status]=open&filter[store_id]=1
```

## Including Related Resources

Reduce API calls by including related data:

```
?include=variants
?include=variants,files
```

Related resources appear in the top-level `included` array.

## Nested Queries

Retrieve related objects directly:

```
GET /v1/products/100/variants
```

## API Resources

### Core
- `GET /v1/users/me` — Current user
- `GET /v1/stores` — List stores
- `GET /v1/stores/{id}` — Get store
- `GET /v1/customers` — List customers
- `POST /v1/customers` — Create customer
- `GET /v1/customers/{id}` — Get customer
- `PATCH /v1/customers/{id}` — Update customer
- `GET /v1/products` — List products
- `GET /v1/products/{id}` — Get product
- `GET /v1/variants` — List variants
- `GET /v1/variants/{id}` — Get variant
- `GET /v1/prices` — List prices
- `GET /v1/prices/{id}` — Get price
- `GET /v1/files` — List files
- `GET /v1/files/{id}` — Get file

### Transactions
- `GET /v1/orders` — List orders
- `GET /v1/orders/{id}` — Get order
- `POST /v1/orders/{id}/refund` — Refund order
- `GET /v1/order-items` — List order items
- `GET /v1/order-items/{id}` — Get order item
- `GET /v1/subscriptions` — List subscriptions
- `GET /v1/subscriptions/{id}` — Get subscription
- `PATCH /v1/subscriptions/{id}` — Update subscription (change plan, pause, resume, cancel)
- `DELETE /v1/subscriptions/{id}` — Cancel subscription immediately
- `GET /v1/subscription-invoices` — List invoices
- `GET /v1/subscription-items` — List subscription items
- `PATCH /v1/subscription-items/{id}` — Update subscription item (usage)
- `POST /v1/subscription-items/{id}/current-usage` — Get current usage

### Monetization
- `GET /v1/discounts` — List discounts
- `POST /v1/discounts` — Create discount
- `GET /v1/discounts/{id}` — Get discount
- `DELETE /v1/discounts/{id}` — Delete discount
- `GET /v1/discount-redemptions` — List redemptions
- `POST /v1/usage-records` — Create usage record
- `GET /v1/usage-records` — List usage records
- `GET /v1/license-keys` — List license keys
- `GET /v1/license-keys/{id}` — Get license key
- `PATCH /v1/license-keys/{id}` — Update license key
- `GET /v1/license-key-instances` — List instances
- `GET /v1/license-key-instances/{id}` — Get instance

### Commerce
- `POST /v1/checkouts` — Create checkout
- `GET /v1/checkouts/{id}` — Get checkout
- `GET /v1/webhooks` — List webhooks
- `POST /v1/webhooks` — Create webhook
- `GET /v1/webhooks/{id}` — Get webhook
- `PATCH /v1/webhooks/{id}` — Update webhook
- `DELETE /v1/webhooks/{id}` — Delete webhook

## License API

The License API is **separate** from the main API with different requirements.

### Base URL
```
https://api.lemonsqueezy.com
```

### Rate Limit
60 requests per minute (vs 300 for main API)

### Headers
```
Accept: application/json
Content-Type: application/x-www-form-urlencoded
```

Note: Uses `application/x-www-form-urlencoded`, NOT `application/vnd.api+json`.

### Endpoints

**Activate a license key**
```
POST /v1/licenses/activate
Body: license_key={key}&instance_name={name}
```

**Validate a license key**
```
POST /v1/licenses/validate
Body: license_key={key}&instance_id={id}
```

**Deactivate a license key**
```
POST /v1/licenses/deactivate
Body: license_key={key}&instance_id={id}
```

### License Key Status Values
- `inactive` — valid but no activations
- `active` — has one or more activations
- `expired` — expiry date passed (product license length or subscription expiration)
- `disabled` — manually disabled from dashboard

### Error Codes
- `400` — General error (check `error` field)
- `404` — License key or instance not found
- `422` — Invalid or missing required field

## Official SDKs

- **JavaScript**: `@lmsqueezy/lemonsqueezy.js` (npm)
- **Laravel**: `@lmsqueezy/laravel` (composer)

## Community SDKs

Go, Ruby, Rust, Swift, Python, PHP, Elixir, Java — see GitHub for links.

## Webhook Events

Key events for webhook subscriptions:
- `order_created`, `order_refunded`
- `subscription_created`, `subscription_updated`, `subscription_cancelled`, `subscription_expired`, `subscription_paused`, `subscription_unpaused`, `subscription_payment_success`, `subscription_payment_failed`, `subscription_payment_recovered`
- `license_key_created`, `license_key_updated`

Webhook requests are POST with JSON body and `X-Signature` header (HMAC-SHA256).
Failed deliveries retry 3 times with exponential backoff.
