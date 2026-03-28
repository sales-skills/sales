### Tomba REST API — Comprehensive Reference

**Base URL**: `https://api.tomba.io/v1/`
**Docs**: https://docs.tomba.io/
**Developer portal**: https://developer.tomba.io/ (redirects to docs.tomba.io)

---

## Authentication

All requests require two headers:

| Header | Format | Description |
|---|---|---|
| `X-Tomba-Key` | `ta_xxxx` | Your API key |
| `X-Tomba-Secret` | `ts_xxxx` | Your API secret |

**Where to find**: Manage keys at `app.tomba.io/api`

**Example**:
```bash
curl -H "X-Tomba-Key: ta_xxxx" \
     -H "X-Tomba-Secret: ts_xxxx" \
     "https://api.tomba.io/v1/domain-search?domain=stripe.com"
```

---

## SDKs

13+ official client libraries:

| Language | Package |
|---|---|
| JavaScript/Node | `tomba` |
| Python | `tomba` |
| PHP | `tomba/tomba` |
| Ruby | `tomba` |
| Go | `github.com/tomba-io/go` |
| Rust | `tomba` |
| C# | `Tomba` |
| Dart | `tomba` |
| Elixir | `tomba` |
| Lua | `tomba` |
| Perl | `Tomba` |
| R | `tomba` |

SDK initialization pattern (all languages follow this):
```javascript
const Tomba = require("tomba");
const client = new Tomba();
client.setKey("ta_xxxx").setSecret("ts_xxxx");
```

---

## Response Format

All successful responses return HTTP 200 with JSON.

### Error Codes

| Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — missing or invalid parameters |
| 429 | Rate limit exceeded — back off and retry |

---

## Core Endpoints

### Domain Search

Find all email addresses at a domain.

```
GET /v1/domain-search
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes* | Domain to search (e.g., `stripe.com`) |
| `company` | string | Yes* | Company name (3-75 chars) — alternative to domain |
| `page` | integer | No | Page number (default: 1) |
| `limit` | enum | No | Results per page: `10`, `20`, `50` (default: `10`) |
| `department` | enum | No | Filter by department: engineering, sales, finance, hr, it, marketing, operations, management, executive, legal, support, communication, software, security, pr, warehouse, diversity, administrative, facilities, accounting |
| `country` | string | No | Two-letter country code |
| `enrich_mobile` | boolean | No | Include phone numbers in results |
| `webhook_url` | string | No | URL to receive async results |

*Provide either `domain` or `company`.

**Response** (200):
```json
{
  "data": {
    "organization": {
      "website_url": "stripe.com",
      "organization": "Stripe",
      "location": { ... },
      "social_links": { "twitter_url": "...", "linkedin_url": "..." },
      "industries": "Financial Services",
      "founded": "2010",
      "company_size": "1001-5000",
      "company_type": "privately held",
      "revenue": "$1B+",
      "description": "...",
      "pattern": "{first}.{last}",
      "total_similar": 50,
      "keywords": ["payments", "fintech"],
      "ranking": 150,
      "whois": { ... },
      "last_updated": "2026-01-15"
    },
    "emails": [
      {
        "email": "john.doe@stripe.com",
        "first_name": "John",
        "last_name": "Doe",
        "full_name": "John Doe",
        "gender": "male",
        "phone_number": "+1...",
        "type": "personal",
        "country": "US",
        "position": "Software Engineer",
        "department": "engineering",
        "seniority": "senior",
        "twitter": "johndoe",
        "linkedin": "https://linkedin.com/in/johndoe",
        "score": 90,
        "verification": { "status": "valid" },
        "sources": [{ "uri": "https://...", "extracted_on": "2025-06-01" }]
      }
    ]
  },
  "meta": {
    "total": 250,
    "pageSize": 10,
    "current": 1,
    "total_pages": 25,
    "params": { "domain": "stripe.com" }
  }
}
```

---

### Email Finder

Find a specific person's email from their name and company.

```
GET /v1/email-finder
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes* | Company domain |
| `company` | string | Yes* | Company name |
| `full_name` | string | Yes* | Person's full name |
| `first_name` | string | Yes* | First name |
| `last_name` | string | Yes* | Last name |
| `enrich_mobile` | boolean | No | Include phone number |
| `webhook_url` | string | No | Async callback URL |

*Provide domain or company, plus full_name or first_name+last_name.

**Response** (200): Person object with email, confidence score, verification status, sources, and enriched profile data.

---

### Email Verifier

Validate an email address for deliverability.

```
GET /v1/verifier
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email address to verify |

**Response** (200): Verification result with status (valid, invalid, accept_all, unknown), disposable check, webmail check, and detailed validation results.

---

### Email Enrichment

Enrich an email with person and company data.

```
GET /v1/enrich
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email address to enrich |
| `enrich_mobile` | boolean | No | Include phone data |
| `webhook_url` | string | No | Async callback URL |

**Response** (200): Person object with full name, title, company, social profiles, location, and phone data.

---

### Author Finder

Find the author of an online article.

```
GET /v1/author-finder
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Article URL |
| `webhook_url` | string | No | Async callback URL |

**Response** (200): Person object with author's email, name, company, position, verification status, and sources.

---

### LinkedIn Finder

Find an email from a LinkedIn profile URL.

```
GET /v1/linkedin
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | LinkedIn profile URL |
| `enrich_mobile` | boolean | No | Include phone data |
| `full` | boolean | No | Return all associated emails |
| `webhook_url` | string | No | Async callback URL |

**Response** (200): Person object or array (if `full=true`) with email(s) and comprehensive profile data.

---

### Email Count

Get a count overview of emails at a domain.

```
GET /v1/email-count
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Domain to count |

**Response** (200):
```json
{
  "data": {
    "total": 1250,
    "personal_emails": 1100,
    "generic_emails": 150,
    "department": {
      "engineering": 400,
      "sales": 200,
      "marketing": 150,
      "hr": 50,
      "finance": 75,
      "it": 100,
      "management": 80,
      "operations": 50,
      "legal": 30,
      "support": 65,
      "communication": 50
    },
    "seniority": {
      "junior": 500,
      "senior": 550,
      "executive": 200
    }
  }
}
```

---

### Email Format

Get the email pattern(s) used at a domain.

```
GET /v1/email-format
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Domain to check |

**Response** (200):
```json
{
  "data": [
    { "format": "{first}.{last}", "percentage": 85 },
    { "format": "{first}", "percentage": 10 },
    { "format": "{f}{last}", "percentage": 5 }
  ]
}
```

---

### Phone Finder

Find phone numbers for a domain or contact.

```
GET /v1/phone-finder
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Domain to search |

**Response** (200): Phone numbers with type (direct, mobile, HQ) and validation status.

---

## Utility Endpoints

### Email Sources

Find where an email address appears on the web.

```
GET /v1/email-sources
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email to find sources for |

**Response** (200):
```json
{
  "email": "m@wordpress.org",
  "data": [
    {
      "uri": "https://example.com/about",
      "extracted_on": "2025-03-15",
      "last_seen_on": "2026-01-20",
      "still_on_page": true,
      "website_url": "example.com"
    }
  ]
}
```

---

### Domain Status

Check if a domain is webmail or disposable.

```
GET /v1/domain-status
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Domain to check |

**Response** (200): Object with webmail and disposable boolean flags.

---

### Similar Domains

Find similar/competitor domains.

```
GET /v1/similar
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Domain to find similar matches |

**Response** (200):
```json
{
  "data": [
    { "website_url": "competitor.com", "name": "Competitor Inc" }
  ]
}
```

---

### Technology Detection

Detect the tech stack of a domain.

```
GET /v1/technology
```

**Parameters**:

| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Domain to analyze |

**Response** (200):
```json
{
  "domain": "tomba.io",
  "data": [
    {
      "slug": "google-analytics",
      "name": "Google Analytics",
      "icon": "...",
      "website": "https://analytics.google.com",
      "categories": [{ "id": 1, "slug": "analytics", "name": "Analytics" }]
    }
  ]
}
```

---

## Bulk Operations

All core endpoints have bulk equivalents for processing thousands of records. Bulk jobs are asynchronous — use the `webhook_url` parameter to receive results when processing completes.

- **Email Verifier Bulk**: Up to 10,000 emails per batch
- **Email Finder Bulk**: Batch name+domain lookups
- **Domain Search Bulk**: Batch domain searches
- **LinkedIn Finder Bulk**: Batch LinkedIn URL lookups
- **Email Enrichment Bulk**: Batch email enrichment
- **Phone Finder Bulk**: Batch phone lookups

*Note: Bulk endpoint documentation is incomplete in the public docs. Check https://docs.tomba.io/ for the latest bulk API specifications.*

---

## Webhooks

Several endpoints support a `webhook_url` parameter for asynchronous result delivery:

- Domain Search (when processing large domains)
- Email Finder
- Author Finder
- LinkedIn Finder
- Email Enrichment
- Bulk operations

When provided, the API returns immediately and POSTs results to your webhook URL when processing completes.

*Note: Webhook event types and payload format are not fully documented in the public API docs. Webhooks as a feature require Pro plan or above. Flag for manual review if building webhook-dependent workflows.*

---

## Rate Limits

The API returns `429 Too Many Requests` when rate limits are exceeded. Specific thresholds are not publicly documented and vary by plan.

**Best practices**:
- Implement exponential backoff on 429 responses
- Use bulk endpoints instead of looping individual calls
- Cache results to avoid redundant lookups
- Monitor your usage at `app.tomba.io/usage`

---

## Pagination

List endpoints (Domain Search) support pagination:

| Param | Default | Description |
|---|---|---|
| `page` | 1 | Page number |
| `limit` | 10 | Results per page (10, 20, or 50) |

Response includes `meta` with `total`, `pageSize`, `current`, and `total_pages`.

---

## Integrations

### MCP (Model Context Protocol)
Tomba provides an MCP server for AI agent integration:
- **Local server**: Run on your machine for development
- **Remote server**: Cloud-hosted for production use

### Zapier
Available triggers and actions for automation workflows connecting Tomba to 8,000+ apps.

### Additional
Make, n8n, Apify, Steampipe, Pipedream, Maltego — see https://docs.tomba.io/introduction for the full list.

---

## Gaps (flagged for manual review)

- Exact rate limit thresholds per plan not publicly documented
- Bulk operation endpoint paths and request formats not fully detailed in public docs
- Webhook payload format and retry behavior not documented
- Account/usage API endpoints not fully documented
- Lead management API endpoints (create/update/delete leads and lists) not detailed
