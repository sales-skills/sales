# Clearbit API Reference

## Overview

| Property | Value |
|----------|-------|
| Auth | HTTP Basic Auth (API key as username, empty password) or Bearer token |
| Rate limit | 600 req/min per API |
| Response format | JSON |
| Async delivery | Webhooks (for 202 queued responses) |
| SDKs | Ruby, Node.js, Python, Go (all **deprecated** — use direct HTTP) |
| Streaming | Hold connection up to 60s instead of async webhook |

**Important**: Clearbit was acquired by HubSpot (Dec 2023). The standalone API still works, but SDKs are deprecated and product investment has shifted to Breeze Intelligence (HubSpot add-on). The API endpoints and auth documented here are for the standalone API.

## Authentication

All requests use HTTP Basic Auth with your API key as the username and an empty password:

```bash
curl https://person.clearbit.com/v2/people/find?email=alex@clearbit.com \
  -u sk_your_api_key:
```

Or as a Bearer token:

```
Authorization: Bearer sk_your_api_key
```

Find your API key in Account Settings at dashboard.clearbit.com.

## Rate Limiting

- **Standard APIs**: 600 requests/minute
- **Streaming APIs**: May have different limits (check response headers)
- **Reveal API**: May have different limits based on plan

Rate limit headers:
- `X-RateLimit-Limit` — requests allowed per minute
- `X-RateLimit-Remaining` — requests remaining
- `X-RateLimit-Reset` — Unix timestamp when limit resets

When rate limited: `429 Too Many Requests`.

## Endpoints by Category

### Person Enrichment

#### Standard (async — may return 202)

```
GET https://person.clearbit.com/v2/people/find?email={email}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Yes | Email address to look up |
| `webhook_url` | No | URL to receive async results |
| `webhook_id` | No | Custom ID included in webhook payload |
| `subscribe` | No | If true, re-enrich when data changes |
| `given_name` | No | Hint for disambiguation |
| `family_name` | No | Hint for disambiguation |
| `company` | No | Company name hint |
| `company_domain` | No | Company domain hint |
| `ip_address` | No | For geo inference |

**Response (200):**
```json
{
  "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
  "avatar": "https://...",
  "name": {
    "fullName": "Alex MacCaw",
    "givenName": "Alex",
    "familyName": "MacCaw"
  },
  "email": "alex@clearbit.com",
  "gender": null,
  "location": "San Francisco, CA, US",
  "timeZone": "America/Los_Angeles",
  "utcOffset": -8,
  "geo": {
    "city": "San Francisco",
    "state": "California",
    "stateCode": "CA",
    "country": "United States",
    "countryCode": "US",
    "lat": 37.7749,
    "lng": -122.4194
  },
  "bio": "CEO at Clearbit",
  "site": "https://alexmaccaw.com",
  "twitter": { "handle": "maboroshi", "followers": 5000 },
  "linkedin": { "handle": "alex-maccaw-ab592978" },
  "github": { "handle": "maboroshi", "avatar": "..." },
  "employment": {
    "domain": "clearbit.com",
    "name": "Clearbit",
    "title": "CEO",
    "role": "ceo",
    "subRole": null,
    "seniority": "executive"
  },
  "indexedAt": "2024-01-15T..."
}
```

**Response (202):** Lookup queued — result delivered via webhook.

**Response (404):** Person not found.

#### Streaming (synchronous — waits up to 60s)

```
GET https://person-stream.clearbit.com/v2/people/find?email={email}
```

Same parameters as standard. Holds the connection open until data is ready (up to 60 seconds). Always returns 200 with data or 404 if not found — never 202.

### Company Enrichment

#### Standard

```
GET https://company.clearbit.com/v2/companies/find?domain={domain}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Company website domain |
| `webhook_url` | No | URL for async delivery |
| `webhook_id` | No | Custom ID for webhook |

**Response (200):**
```json
{
  "id": "027b0d40-016c-40ea-8925-a076fa640992",
  "name": "Clearbit",
  "legalName": "APIHub, Inc.",
  "domain": "clearbit.com",
  "domainAliases": [],
  "url": "https://clearbit.com",
  "logo": "https://logo.clearbit.com/clearbit.com",
  "category": {
    "sector": "Technology",
    "industryGroup": "Software",
    "industry": "Internet Software & Services",
    "subIndustry": "B2B Data & Analytics"
  },
  "tags": ["SaaS", "B2B", "Technology"],
  "description": "Business intelligence APIs...",
  "emailProvider": false,
  "type": "private",
  "ticker": null,
  "identifiers": { "usEIN": null, "usCIK": null },
  "phone": "+1 415-...",
  "site": { "phoneNumbers": [...], "emailAddresses": [...] },
  "geo": {
    "streetNumber": "...",
    "streetName": "...",
    "city": "San Francisco",
    "state": "California",
    "stateCode": "CA",
    "postalCode": "94104",
    "country": "United States",
    "countryCode": "US",
    "lat": 37.7903,
    "lng": -122.4009
  },
  "metrics": {
    "raised": 15000000,
    "alexaUsRank": 25000,
    "alexaGlobalRank": 50000,
    "employees": 150,
    "employeesRange": "51-250",
    "marketCap": null,
    "annualRevenue": null,
    "estimatedAnnualRevenue": "$10M-$50M",
    "fiscalYearEnd": 12
  },
  "tech": ["google-analytics", "mixpanel", "stripe", "intercom", "segment"],
  "techCategories": ["analytics", "payments", "customer-support"],
  "parent": { "domain": "hubspot.com" },
  "ultimateParent": { "domain": "hubspot.com" },
  "foundedYear": 2014,
  "indexedAt": "2024-01-15T..."
}
```

#### Streaming

```
GET https://company-stream.clearbit.com/v2/companies/find?domain={domain}
```

### Combined Enrichment (Person + Company)

```
GET https://person.clearbit.com/v2/combined/find?email={email}
```

Returns `{ "person": {...}, "company": {...} }` in a single call.

### Reveal (IP Intelligence)

```
GET https://reveal.clearbit.com/v1/companies/find?ip={ip}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `ip` | Yes | IPv4 address to look up |

**Response:**
```json
{
  "ip": "104.132.0.0",
  "fuzzy": false,
  "domain": "clearbit.com",
  "company": {
    "id": "...",
    "name": "Clearbit",
    "domain": "clearbit.com",
    "category": { "sector": "Technology", "industry": "..." },
    "metrics": { "employees": 150, "employeesRange": "51-250" },
    "geo": { "city": "San Francisco", "state": "California" },
    "tech": ["google-analytics", "segment"],
    "type": "private"
  },
  "confidence": "high"
}
```

**Match rates**: Typically 20-30% of website traffic (business IPs only — residential, VPN, and mobile IPs return null).

### Prospector

```
GET https://prospector.clearbit.com/v1/people/search?domain={domain}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Company domain to search |
| `role` | No | Single role filter (e.g., `marketing`, `sales`, `engineering`) |
| `roles[]` | No | Multiple roles |
| `seniority` | No | Single seniority (e.g., `executive`, `director`, `manager`) |
| `seniorities[]` | No | Multiple seniorities |
| `title` | No | Title contains filter |
| `titles[]` | No | Multiple title filters |
| `city` | No | City filter |
| `state` | No | State filter |
| `country` | No | Country filter |
| `name` | No | Name contains filter |
| `page` | No | Pagination page (default 1) |
| `page_size` | No | Results per page (default 20, max 100) |
| `suppression` | No | Domain to suppress (exclude contacts) |

**Response:**
```json
{
  "page": 1,
  "page_size": 20,
  "total": 45,
  "results": [
    {
      "id": "...",
      "name": { "fullName": "Jane Smith", "givenName": "Jane", "familyName": "Smith" },
      "title": "VP of Marketing",
      "role": "marketing",
      "seniority": "executive",
      "email": "jane@example.com",
      "verified": true,
      "phone": null
    }
  ]
}
```

**Note**: Prospector is a paid add-on — not included in standard enrichment plans.

### Name to Domain

```
GET https://company.clearbit.com/v1/domains/find?name={company_name}
```

**Response:**
```json
{
  "name": "Uber",
  "domain": "uber.com",
  "logo": "https://logo.clearbit.com/uber.com"
}
```

### Risk API

```
GET https://risk.clearbit.com/v1/calculate?email={email}&ip={ip}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Yes | Email to assess |
| `ip` | No | IP address for additional signals |
| `name` | No | Name for cross-referencing |

Returns risk score and signals (disposable email, free email provider, new domain, proxy IP, etc.).

### Logo API (free)

```
GET https://logo.clearbit.com/{domain}
```

Returns the company logo as an image. Free to use, no authentication required.

### Autocomplete API

```
GET https://autocomplete.clearbit.com/v1/companies/suggest?query={partial_name}
```

Returns company name suggestions with domain and logo. Useful for typeahead in forms.

## Webhooks

For standard (non-streaming) endpoints that return 202, Clearbit delivers results via webhook.

**Setup**: Configure your webhook URL in Clearbit account settings or pass `webhook_url` as a parameter.

**Payload**: Same as the 200 response body for the corresponding endpoint.

**Verification**: Use the webhook signing secret to verify payloads:
```ruby
webhook = Clearbit::Webhook.new(request.env)
webhook.type   # => "person" | "company"
webhook.body   # => enrichment data
```

**Events**: Webhooks fire for initial enrichment results and for data changes if `subscribe: true` is set.

## Pagination

Only the Prospector API supports pagination:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | Page number | 1 |
| `page_size` | Results per page | 20 (max 100) |

Response includes `total` count for calculating pages.

## Error Handling

| Status | Meaning |
|--------|---------|
| 200 | Success — data returned |
| 202 | Queued — result will be delivered via webhook |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid API key |
| 402 | Payment Required — plan limit reached |
| 404 | Not Found — no data for this lookup |
| 422 | Unprocessable — invalid email/domain format |
| 429 | Rate Limited — 600 req/min exceeded |
| 500 | Server Error — retry with backoff |

## Gaps & Limitations

- **SDKs deprecated**: Official Ruby, Node.js, Python, and Go SDKs are no longer maintained. Use direct HTTP requests.
- **Standalone API future uncertain**: Post-HubSpot acquisition, it's unclear how long the standalone API will be supported. Breeze Intelligence is the go-forward product for HubSpot users.
- **Prospector is a paid add-on**: Not included in standard enrichment API plans.
- **Risk API documentation limited**: Endpoint details and response schema are not fully documented publicly.
- **Reveal match rates are modest**: Expect 20-30% of website traffic to match — residential IPs, VPNs, and mobile connections can't be identified.
