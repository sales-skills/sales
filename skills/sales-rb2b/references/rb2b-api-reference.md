# RB2B API Reference

## Overview

| Property | Value |
|----------|-------|
| Product | RB2B Identity Resolution API (separate from pixel product) |
| Base URL | `https://api.rb2b.com` |
| Auth | API key (header) |
| Pricing | Credit-based ($9/100 to $9,999/1M credits) |
| Response format | JSON |

**Important**: The RB2B API is a **separate product** from the pixel-based visitor identification. It has its own credit-based pricing and is designed for programmatic identity resolution. Several endpoints are marked "coming soon" as of early 2025.

## Authentication

All requests require an API key passed as a header:

```bash
curl https://api.rb2b.com/v1/ip/hem \
  -H "x-api-key: your_api_key"
```

Obtain your API key from your RB2B API dashboard at api.rb2b.com.

## Endpoints by Category

### IP Resolution

#### IP → Hashed Email (HEM)

```
GET https://api.rb2b.com/v1/ip/hem?ip={ip_address}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `ip` | Yes | IPv4 address to resolve |

Resolves an IP address to a hashed email (SHA256). Use this as the first step in an identity resolution chain — follow up with HEM → LinkedIn or decrypt the hash if you have a matching database.

**Credits**: 1 per lookup

#### IP → Company

```
GET https://api.rb2b.com/v1/ip/company?ip={ip_address}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `ip` | Yes | IPv4 address to resolve |

Returns company firmographic data for the IP address. Similar to Clearbit Reveal — identifies the company behind a business IP.

**Credits**: 1 per lookup

#### IP → LinkedIn

```
GET https://api.rb2b.com/v1/ip/linkedin?ip={ip_address}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `ip` | Yes | IPv4 address to resolve |

Resolves an IP address directly to a LinkedIn profile URL. Combines IP → identity → LinkedIn in a single call.

**Credits**: 1 per lookup

### Email / HEM Resolution

#### HEM → LinkedIn

```
GET https://api.rb2b.com/v1/hem/linkedin?hem={hashed_email}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `hem` | Yes | SHA256-hashed email address |

Resolves a hashed email to a LinkedIn profile URL.

**Credits**: 1 per lookup

#### Email → LinkedIn

```
GET https://api.rb2b.com/v1/email/linkedin?email={email}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Yes | Email address |

Resolves a plain-text email to a LinkedIn profile URL.

**Credits**: 1 per lookup

### LinkedIn Resolution

#### LinkedIn → Email

```
GET https://api.rb2b.com/v1/linkedin/email?url={linkedin_url}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `url` | Yes | LinkedIn profile URL |

Resolves a LinkedIn profile URL to a work email address.

**Credits**: 1 per lookup

### Company Data

#### Company → Firmographics

```
GET https://api.rb2b.com/v1/company/firmographics?domain={domain}
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Company website domain |

Returns full firmographic data for a company: name, industry, employee count, revenue range, location, tech stack, etc.

**Credits**: 1 per lookup

### Mobile Ad ID (Coming Soon)

#### MAID → HEM

```
GET https://api.rb2b.com/v1/maid/hem?maid={mobile_ad_id}
```

Resolves a mobile advertising ID to a hashed email. **Status: Coming soon.**

#### MAID → LinkedIn

```
GET https://api.rb2b.com/v1/maid/linkedin?maid={mobile_ad_id}
```

Resolves a mobile advertising ID to a LinkedIn profile URL. **Status: Coming soon.**

## Pixel Webhooks

The pixel product (separate from the API) can push visitor data via webhooks:

**Webhook payload** (when a visitor is identified):
```json
{
  "event": "visitor_identified",
  "visitor": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "linkedin_url": "https://linkedin.com/in/janesmith",
    "title": "VP of Marketing",
    "company": "Example Corp",
    "city": "San Francisco",
    "state": "CA"
  },
  "visit": {
    "page_url": "https://yoursite.com/pricing",
    "timestamp": "2025-01-15T14:30:00Z",
    "referrer": "https://google.com",
    "hot_page": true
  },
  "company": {
    "name": "Example Corp",
    "domain": "example.com",
    "industry": "Technology",
    "employee_count": 500,
    "revenue_range": "$50M-$100M"
  }
}
```

Configure webhook URL in RB2B dashboard under Settings → Integrations → Webhooks.

## Credit Pricing

| Credits | Price | Per-credit cost |
|---------|-------|-----------------|
| 100 | $9 | $0.090 |
| 1,000 | $49 | $0.049 |
| 10,000 | $299 | $0.030 |
| 100,000 | $1,999 | $0.020 |
| 1,000,000 | $9,999 | $0.010 |

All endpoints cost 1 credit per lookup. Credits are prepaid and do not expire (verify current terms).

## Error Handling

| Status | Meaning |
|--------|---------|
| 200 | Success — data returned |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid API key |
| 402 | Payment Required — insufficient credits |
| 404 | Not Found — no match for this lookup |
| 429 | Rate Limited — too many requests |
| 500 | Server Error — retry with backoff |

## Gaps & Limitations

- **API documentation is sparse**: Full response schemas are not publicly documented. The endpoint list and parameters above are based on the api.rb2b.com product page — actual response fields may differ.
- **MAID endpoints not yet available**: Mobile Ad ID resolution is listed as "coming soon" and may not be functional.
- **Rate limits not documented**: No public documentation on rate limits for the API product.
- **US-focused**: Like the pixel product, the API's person-level resolution likely has higher match rates for US-based data.
- **No SDK**: No official client libraries — use direct HTTP requests.
- **Webhook schema is estimated**: The webhook payload structure above is inferred from integration descriptions and may not exactly match the actual payload format.
