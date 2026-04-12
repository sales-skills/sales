# Skeepers API Reference

## Overview

Skeepers provides a RESTful API for accessing Verified Reviews data (product reviews, ratings, brand reviews). The API uses OAuth 2.0 client credentials for authentication and returns JSON or XML responses.

> **Migration notice**: The legacy Product Reviews API is deprecated and will be removed in June 2026. All integrations must migrate to the Published API documented below.

## Authentication

**OAuth 2.0 Client Credentials Flow**

```
POST https://auth.skeepers.io/realms/skeepers/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(clientId:clientSecret)

grant_type=client_credentials&scope=openid&audience=verified-reviews
```

**Credentials**: Found in Skeepers backoffice → Reviews collection → Configuration → API tab.

**Token Usage**: Include in all subsequent requests:
```
Authorization: Bearer {access_token}
```

Tokens expire — implement automatic refresh in your integration.

## Base URL

```
https://api.skeepers.io/verified-reviews/v1/published
```

## Endpoints

### Product Reviews

```
GET /products/reviews
```

Fetch reviews for one or more products.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `product_variation_id` | string | No | Filter by product identifier (replaces legacy `ref`) |
| `review_rate` | integer | No | Filter by rating (1-5, replaces legacy `rate`) |
| `limit` | integer | No | Results per page (max 200) |
| `cursor` | string | No | Pagination cursor from Link header |
| `sort` | string | No | Sort field(s) |
| `desc` | string | No | Fields to sort descending |

### Product Ratings

```
GET /products/ratings
GET /products
```

Fetch aggregate ratings for products.

### Brand Reviews

```
GET /brands/reviews
```

Fetch brand-level reviews (not product-specific).

### Brand Ratings

```
GET /brands
```

Fetch aggregate brand ratings.

## Response Format

```json
[
  {
    "review_id": "uuid",
    "review_rate": 4,
    "review_content": "Great product, fast shipping...",
    "product_variation_id": "SKU-12345",
    "author_firstname": "Marie",
    "is_verified": true,
    "created_at": "2026-03-15T10:30:00Z",
    "media": [
      {
        "type": "image",
        "url": "https://...",
        "sizes": { "small": "...", "medium": "...", "large": "..." }
      }
    ],
    "translation": {
      "language": "en",
      "content": "Translated review content..."
    }
  }
]
```

**Notable response fields:**
- `is_verified` — whether the review comes from a verified purchase
- `media` — photo/video attachments with multiple size variants
- `translation` — AI-translated content for multi-language stores
- AI-generated review summaries (when enabled)

## Pagination

Cursor-based pagination via HTTP `Link` headers:

```
Link: <https://api.skeepers.io/...?cursor=abc123>; rel="next",
      <https://api.skeepers.io/...?cursor=xyz789>; rel="prev"
```

Parse the `Link` header to get next/previous page URLs. Do NOT construct cursor values manually.

## Rate Limits

| Limit | Value |
|---|---|
| Per second | 5 requests |
| Per minute | 100 requests |

**HTTP 429** returned when exceeded. Implement exponential backoff.

## Product Identifiers

Products can be identified by multiple identifiers:
- `product_variation_id` — primary identifier (your SKU or product ID)
- GTIN, MPN — supported for multi-identifier product matching
- Shop-specific filtering available for multi-store setups

## Migration from Legacy API

| Legacy (deprecated June 2026) | Published API |
|---|---|
| Custom token auth | OAuth 2.0 client credentials |
| `ref` parameter | `product_variation_id` |
| `rate` parameter | `review_rate` |
| Offset pagination | Cursor-based pagination |
| `/api/v2/product_reviews` | `/verified-reviews/v1/published/products/reviews` |

**Migration guide**: `https://apidocs.skeepers.io/migrations-published.html`

## Feedback Management API

The Feedback Management (NPS/CSAT/CES) module has a separate API accessed via the CXR help center. Authentication uses the same OpenID Connect pattern. Endpoints cover survey creation, response collection, and analytics. Access documentation at `help.cxr.skeepers.com/hc/en-us/sections/12757991129628-API` (requires account access).

## Webhooks

No webhook support documented for the Published API. For real-time review notifications, poll the API or use the Shopify/Magento native connectors which handle sync automatically.

## Error Codes

| Code | Meaning |
|---|---|
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or expired token |
| 429 | Rate limit exceeded |
| 500 | Server error |
