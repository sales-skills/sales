<!-- Source: https://data.g2.com/api/v2/docs/index.html and https://documentation.g2.com/docs/developer-portal -->

# G2 API Reference

## Overview

The G2 API provides programmatic access to G2's product, category, and review data. Built on the JSON:API specification (`application/vnd.api+json`).

## Authentication

### Developer Portal Setup
1. Navigate to the G2 Developer Portal
2. Create an account and verify email
3. Enter Organization Name and choose a unique Organization Slug
4. Portal URL: `https://my.g2.com/developers/{your-slug}`

### Access Tokens
- Generated in the Developer Portal → Access Tokens tab
- Scoped to individual users or organizations
- Configure endpoint permissions via Access dropdown
- **Tokens expire after one year** — must be regenerated

### OAuth Apps
- Register apps in Developer Portal → OAuth Apps tab
- Provide: name, privacy policy URL, terms of service URL, redirect URL
- Receive: Client ID and Client Secret
- Redirect URLs must match exactly
- OAuth2 scopes: `buyer_intent.read`, `screenshots.read`, etc.

### Postman Testing
- Register OAuth app with callback URL: `https://oauth.pstmn.io/v1/browser-callback`
- Configure OAuth 2.0 with app credentials and scopes

## Base URLs

- **v1 API**: `https://data.g2.com/api/v1/`
- **v2 API**: `https://data.g2.com/api/v2/`
- **Syndication API**: `https://data.g2.com/api/2018-01-01/syndication/`

## Rate Limiting

- **Global limit**: 100 requests per second
- Exceeding triggers a **60-second access block**

## Pagination

- Parameters: `page[size]` and `page[number]`
- Default size: 10 items
- Maximum size: 100 (varies by endpoint)
- Response includes:
  - `links`: `self`, `prev`, `first`, `next`, `last`
  - `meta`: `record_count`, `page_count`

## Date Format

RFC3339: `2019-10-02T15:00:00Z`

## Common Filters

- `updated_at_gt` — records updated after timestamp
- `updated_at_lt` — records updated before timestamp
- Resource-specific filters per endpoint

## Response Structure

```json
{
  "data": [],
  "links": {
    "self": "...",
    "prev": "...",
    "first": "...",
    "next": "...",
    "last": "..."
  },
  "meta": {
    "record_count": 100,
    "page_count": 10
  }
}
```

Headers include `X-Request-ID` for tracking.

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 429 | Rate limit exceeded (60-second block) |
| 500 | Server error |

## v1 Endpoints

### Products
- `GET /api/v1/products` — List products
- Filters: resource-specific

### Reviews (Survey Responses)
- `GET /api/v1/survey-responses` — List reviews
- Includes: ratings, text, verified status, timestamps

### Categories
- `GET /api/v1/categories` — List G2 categories

### Questions
- `GET /api/v1/questions` — List discussion questions

### Answers
- `GET /api/v1/answers` — List question answers

### Buyer Intent
- `GET /api/v1/ahoy/` — Intent activity data
- `GET /api/v1/intent-history` — Historical intent data

### RESThooks (Webhooks)
- `GET /api/v1/resource-subscriptions` — Manage webhook subscriptions
- Subscribe to events: new reviews, intent signals, etc.

### Syndication
- `GET /api/2018-01-01/syndication/` — Review syndication data

## v2 Endpoints

The v2 API uses an OLAP-style query language with:
- **Dimensions**: fields to group by
- **Measures**: aggregation functions
- **Filters**: operators include `_eq`, `_cont`, `_gt`, `_lt`, etc.
- **Cursor-based pagination**

### Buyer Intent (v2)
- Sandbox and production environments
- Product-specific and global intent endpoints
- OAuth2 scope: `buyer_intent.read`

### Screenshots
- Manage product screenshots
- OAuth2 scope: `screenshots.read`

### Product Features & Categories
- Query product features and category assignments

### Market Signals
- Market trend and signal data

### Credit Account
- Manage review incentive credit balances

## Ruby SDK

Official Ruby wrapper: [g2crowd/g2crowd-ruby](https://github.com/g2crowd/g2crowd-ruby)

## Integration Notes

- Account permissions determine which endpoints are accessible
- Contact your G2 Account Executive for additional endpoint access
- The API is designed for custom workflows and advanced use cases
- For standard CRM/marketing connections, use native integrations (Salesforce, HubSpot, Zapier) instead
