<!-- Source: https://trustmrr.com/docs/api -->

# TrustMRR API Reference

## Overview

TrustMRR provides programmatic access to verified startup revenue data. The API allows browsing and filtering startups by revenue, MRR, asking price, and growth metrics backed by payment provider data.

## Core Details

- **Base URL**: `https://trustmrr.com/api/v1`
- **Authentication**: Bearer token via API key (format: `tmrr_*`), generated from the developer dashboard
- **Rate Limit**: 20 requests per minute per API key, with rate limit headers included in responses

## Endpoints

1. `GET /startups` — Browse and filter startups with sorting, pagination, and revenue filters
2. `GET /startups/{slug}` — Retrieve full details for a single startup including tech stack, cofounders, and extended metrics

## Authentication

Pass API key as Bearer token:

```
Authorization: Bearer tmrr_your_api_key
```

## Rate Limit Headers

- `X-RateLimit-Limit`: Maximum requests allowed (20)
- `X-RateLimit-Remaining`: Requests left in current window
- `X-RateLimit-Reset`: Unix timestamp for window reset

## Error Codes

| Status | Meaning |
|--------|---------|
| 400 | Invalid or missing parameters |
| 401 | Missing or invalid API key |
| 404 | Resource not found |
| 429 | Rate limited |
| 500 | Server error |

---

## GET /api/v1/startups

Returns a paginated list of startups with verified revenue on TrustMRR. Supports filtering by sale status, category, revenue range, and price range with multiple sort options.

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number for pagination. Starts at 1. |
| limit | integer | 10 | Number of results per page. Min 1, max 50. |
| sort | string | revenue-desc | Sort order. One of: revenue-desc, revenue-asc, price-desc, price-asc, multiple-asc, multiple-desc, growth-desc, growth-asc, listed-desc, listed-asc, best-deal. |
| onSale | string | null | Filter by sale status. 'true' returns only startups listed for sale. 'false' returns only startups not for sale. |
| category | string | null | Filter by startup category (ai, saas, developer-tools, fintech, marketing, ecommerce, productivity, design-tools, no-code, analytics, crypto-web3, education, health-fitness, social-media, content-creation, sales, customer-support, recruiting, real-estate, travel, legal, security, iot-hardware, green-tech, entertainment, games, community, news-magazines, utilities, marketplace, mobile-apps) |
| xHandle | string | null | Filter by the founder's X (Twitter) handle. Omit the @ symbol. |
| minRevenue | number | null | Minimum last-30-days revenue in USD cents. Example: 10000 = $100. |
| maxRevenue | number | null | Maximum last-30-days revenue in USD cents. Example: 500000 = $5,000. |
| minMrr | number | null | Minimum monthly recurring revenue in USD cents. Example: 50000 = $500. |
| maxMrr | number | null | Maximum monthly recurring revenue in USD cents. Example: 1000000 = $10,000. |
| minGrowth | number | null | Minimum 30-day revenue growth as a decimal. Example: 0.1 = 10% growth. |
| maxGrowth | number | null | Maximum 30-day revenue growth as a decimal. Example: 0.5 = 50% growth. |
| minPrice | number | null | Minimum asking price in USD cents. Example: 1000000 = $10,000. |
| maxPrice | number | null | Maximum asking price in USD cents. Example: 10000000 = $100,000. |

### Sort Options

| Value | Description |
|-------|-------------|
| revenue-desc | Highest last-30-days revenue first (default) |
| revenue-asc | Lowest last-30-days revenue first |
| price-desc | Highest asking price first |
| price-asc | Lowest asking price first |
| multiple-asc | Lowest revenue multiple first (best value) |
| multiple-desc | Highest revenue multiple first |
| growth-desc | Fastest growing first |
| growth-asc | Slowest growing first |
| listed-desc | Most recently listed first |
| listed-asc | Oldest listings first |
| best-deal | Best acquisition deals first (default when onSale=true) |

### Response Fields

**All monetary values are in USD cents** (e.g. 42500 = $425.00).

| Field | Type | Description |
|-------|------|-------------|
| name | string | Startup name |
| slug | string | URL-friendly identifier. Use this for the /startups/{slug} endpoint. |
| icon | string \| null | URL to the startup's icon/logo |
| description | string \| null | Short description, truncated to 200 characters |
| website | string \| null | Startup's website URL |
| country | string \| null | Country code (ISO 3166-1 alpha-2) |
| foundedDate | string \| null | When the startup was founded (ISO date) |
| category | string \| null | Primary category (e.g. saas, ai, ecommerce) |
| paymentProvider | string | Payment provider used for revenue verification (stripe, lemonsqueezy, polar, revenuecat, dodopayment, paddle, superwall, creem) |
| targetAudience | string \| null | Target audience (b2b, b2c, or both) |
| revenue.last30Days | number | Verified revenue in the last 30 days, in USD cents |
| revenue.mrr | number | Monthly recurring revenue, in USD cents |
| revenue.total | number | All-time total revenue, in USD cents |
| customers | number | Total customer count |
| activeSubscriptions | number | Number of currently active subscriptions |
| askingPrice | number \| null | Asking price in USD cents, if listed for sale |
| profitMarginLast30Days | number \| null | Profit margin over the last 30 days (0-100 percentage) |
| growth30d | number \| null | Revenue growth over the last 30 days as a percentage (e.g. 24 = 24% growth) |
| growthMRR30d | number \| null | MRR growth over the last 30 days as a percentage. Tracks how recurring revenue is changing. |
| multiple | number \| null | Asking price divided by annualized revenue (price / (last30Days × 12)) |
| rank | number \| null | Revenue ranking among all active startups on TrustMRR (1 = highest total revenue). Updated hourly. |
| visitorsLast30Days | number \| null | Total website visitors in the last 30 days. Source: DataFast, Google Analytics, or Google Search Console (clicks). |
| googleSearchImpressionsLast30Days | number \| null | Number of times the startup's website appeared in Google search results in the last 30 days. Only available when Google Search Console is connected. |
| revenuePerVisitor | number \| null | Revenue per visitor ratio (last 30 days revenue / last 30 days visitors). Indicates monetization efficiency. |
| onSale | boolean | Whether the startup is currently listed for sale |
| firstListedForSaleAt | string \| null | When the startup was first listed for sale (ISO date) |
| xHandle | string \| null | X (Twitter) handle without the @ symbol |

### Pagination

The `meta` object tells you where you are in the result set. Keep incrementing `page` until `hasMore` is `false`.

| Field | Type | Description |
|-------|------|-------------|
| meta.total | integer | Total matching startups across all pages |
| meta.page | integer | Current page number |
| meta.limit | integer | Results per page |
| meta.hasMore | boolean | Whether there are more pages after this one |

### Example Response (200 OK)

```json
{
  "data": [
    {
      "name": "ShipFast",
      "slug": "shipfast",
      "icon": "https://cdn.trustmrr.com/icons/shipfast.png",
      "description": "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app...",
      "website": "https://shipfa.st",
      "country": "TH",
      "foundedDate": "2023-09-01T00:00:00.000Z",
      "category": "saas",
      "paymentProvider": "stripe",
      "targetAudience": "b2b",
      "revenue": {
        "last30Days": 4250000,
        "mrr": 180000,
        "total": 98000000
      },
      "customers": 7800,
      "activeSubscriptions": 320,
      "askingPrice": 50000000,
      "profitMarginLast30Days": 92,
      "growth30d": 0.12,
      "growthMRR30d": 8.5,
      "multiple": 0.98,
      "rank": 42,
      "visitorsLast30Days": 12400,
      "googleSearchImpressionsLast30Days": 513015,
      "revenuePerVisitor": 3.87,
      "onSale": true,
      "firstListedForSaleAt": "2025-11-15T08:30:00.000Z",
      "xHandle": "shipaborad"
    }
  ],
  "meta": {
    "total": 142,
    "page": 1,
    "limit": 10,
    "hasMore": true
  }
}
```

### Request Examples

**cURL:**
```bash
curl -s "https://trustmrr.com/api/v1/startups?sort=revenue-desc&limit=10" \
  -H "Authorization: Bearer tmrr_your_api_key"
```

**JavaScript (fetch):**
```javascript
const response = await fetch(
  "https://trustmrr.com/api/v1/startups?sort=revenue-desc&limit=10",
  {
    headers: {
      Authorization: "Bearer tmrr_your_api_key",
    },
  }
);
const { data, meta } = await response.json();
console.log(`Found ${meta.total} startups`);
```

**Python (requests):**
```python
import requests
response = requests.get(
    "https://trustmrr.com/api/v1/startups",
    params={"sort": "revenue-desc", "limit": 10},
    headers={"Authorization": "Bearer tmrr_your_api_key"},
)
data = response.json()
print(f"Found {data['meta']['total']} startups")
```

---

## GET /api/v1/startups/{slug}

Returns full details for a single startup, including tech stack, cofounders, social metrics, and the complete description. All monetary values in USD cents.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| slug | string | required | The startup's URL-friendly identifier. Get this from the list endpoint's `slug` field. |

### Request Examples

**cURL:**
```bash
curl -s "https://trustmrr.com/api/v1/startups/shipfast" \
  -H "Authorization: Bearer tmrr_your_api_key"
```

**JavaScript (fetch):**
```javascript
const slug = "shipfast";
const response = await fetch(
  `https://trustmrr.com/api/v1/startups/${slug}`,
  { headers: { Authorization: "Bearer tmrr_your_api_key" } }
);
const { data } = await response.json();
console.log(data.name, "—", data.revenue.mrr / 100, "$/mo MRR");
```

**Python (requests):**
```python
import requests
slug = "shipfast"
response = requests.get(
    f"https://trustmrr.com/api/v1/startups/{slug}",
    headers={"Authorization": "Bearer tmrr_your_api_key"},
)
data = response.json()["data"]
print(f"{data['name']} — ${data['revenue']['mrr'] / 100:.0f}/mo MRR")
```

### Response Fields

**Core Fields**: name, slug, icon, description (full, not truncated), website, country, foundedDate, category, paymentProvider, targetAudience

**Revenue & Growth**: revenue.last30Days, revenue.mrr, revenue.total, customers, activeSubscriptions, profitMarginLast30Days, growth30d, growthMRR30d

**Valuation & Metrics**: askingPrice, multiple, rank, visitorsLast30Days, googleSearchImpressionsLast30Days, revenuePerVisitor

**Sale Status**: onSale, firstListedForSaleAt

**Social & Tech**: xHandle, xFollowerCount, isMerchantOfRecord, techStack[] (slug, category), cofounders[] (xHandle, xName)

### Example Response (200 OK)

```json
{
  "data": {
    "name": "ShipFast",
    "slug": "shipfast",
    "icon": "https://cdn.trustmrr.com/icons/shipfast.png",
    "description": "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app. From idea to production in 5 minutes.",
    "revenue": { "last30Days": 4250000, "mrr": 180000, "total": 98000000 },
    "customers": 7800,
    "techStack": [
      { "slug": "nextjs", "category": "framework" },
      { "slug": "mongodb", "category": "database" }
    ],
    "cofounders": [{ "xHandle": "marc_louvion", "xName": "Marc Lou" }]
  }
}
```

### Error Responses

**400 Bad Request:**
```json
{ "error": "Slug is required" }
```

**404 Not Found:**
```json
{ "error": "Startup not found" }
```
