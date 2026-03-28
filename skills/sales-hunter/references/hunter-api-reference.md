# Hunter.io API Reference (v2)

## Overview

- **Base URL**: `https://api.hunter.io/v2/`
- **Authentication**: Three methods supported:
  - Query parameter: `?api_key=YOUR_API_KEY`
  - Header: `X-API-KEY: YOUR_API_KEY`
  - Header: `Authorization: Bearer YOUR_API_KEY`
- **Rate limits**: Vary by plan:
  - Starter: 150 requests/minute
  - Growth: 300 requests/minute
  - Scale: 600 requests/minute
  - Enterprise: Custom
- **Response format**: JSON
- **Credit system**: Domain Search, Email Finder, and Email Verifier share a monthly credit pool. Credits reset on billing date. Searches that return no results are not charged.

## Endpoints

### Domain Search

Find all email addresses associated with a domain.

**`GET /domain-search`**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes (or `company`) | Target company domain |
| `company` | string | Yes (or `domain`) | Company name (domain preferred for accuracy) |
| `limit` | integer | No | Max results to return (default 10) |
| `offset` | integer | No | Number of results to skip (for pagination) |
| `type` | string | No | `personal` or `generic` |
| `seniority` | string | No | Comma-separated: `junior`, `senior`, `executive` |
| `department` | string | No | Comma-separated: `executive`, `it`, `finance`, `management`, `sales`, `legal`, `support`, `hr`, `marketing`, `communication`, `education`, `design`, `health`, `operations` |
| `required_field` | string | No | Comma-separated fields that must be present: `full_name`, `position`, `phone_number` |

**Response** (key fields):
```json
{
  "data": {
    "domain": "stripe.com",
    "disposable": false,
    "webmail": false,
    "accept_all": false,
    "pattern": "{first}",
    "organization": "Stripe",
    "emails": [
      {
        "value": "patrick@stripe.com",
        "type": "personal",
        "confidence": 91,
        "first_name": "Patrick",
        "last_name": "Collison",
        "position": "CEO",
        "seniority": "executive",
        "department": "executive",
        "sources": [...],
        "verification": { "status": "valid", "date": "2025-01-15" }
      }
    ],
    "linked_domains": []
  },
  "meta": {
    "results": 150,
    "limit": 10,
    "offset": 0,
    "params": { "domain": "stripe.com" }
  }
}
```

**Credit cost**: 1 credit per 10 results returned.

---

### Email Finder

Find a specific person's email address.

**`GET /email-finder`**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes (or `company`) | Company domain |
| `company` | string | Yes (or `domain`) | Company name |
| `first_name` | string | Yes (or `full_name`) | First name |
| `last_name` | string | Yes (or `full_name`) | Last name |
| `full_name` | string | Yes (or first+last) | Full name |
| `max_duration` | integer | No | Max seconds to wait (for real-time lookup) |

**Response** (key fields):
```json
{
  "data": {
    "first_name": "Patrick",
    "last_name": "Collison",
    "email": "patrick@stripe.com",
    "score": 91,
    "domain": "stripe.com",
    "accept_all": false,
    "position": "CEO",
    "company": "Stripe",
    "sources": [...],
    "verification": { "status": "valid", "date": "2025-01-15" }
  }
}
```

**Credit cost**: 1 credit per successful find. No charge if no email found.

---

### Email Verifier

Verify deliverability of an email address.

**`GET /email-verifier`**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email address to verify |

**Response** (key fields):
```json
{
  "data": {
    "email": "patrick@stripe.com",
    "result": "deliverable",
    "score": 95,
    "status": "valid",
    "regexp": true,
    "gibberish": false,
    "disposable": false,
    "webmail": false,
    "mx_records": true,
    "smtp_server": true,
    "smtp_check": true,
    "accept_all": false,
    "block": false,
    "sources": [...]
  }
}
```

**Verification statuses**: `valid`, `invalid`, `accept_all`, `webmail`, `disposable`, `unknown`

**Credit cost**: 1 credit per verification.

---

### Leads

Manage leads saved in your Hunter account.

**`GET /leads`** — List all leads

| Parameter | Type | Required | Description |
|---|---|---|---|
| `offset` | integer | No | Pagination offset |
| `limit` | integer | No | Results per page (max 100) |
| `lead_list_id` | integer | No | Filter by lead list |
| `email` | string | No | Filter by email |
| `company` | string | No | Filter by company |

**`POST /leads`** — Create a lead

| Parameter | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email address |
| `first_name` | string | No | First name |
| `last_name` | string | No | Last name |
| `position` | string | No | Job title |
| `company` | string | No | Company name |
| `company_industry` | string | No | Industry |
| `company_size` | string | No | Employee count range |
| `phone_number` | string | No | Phone number |
| `twitter` | string | No | Twitter handle |
| `linkedin_url` | string | No | LinkedIn profile URL |
| `notes` | string | No | Notes |
| `leads_list_id` | integer | No | Lead list to add to |
| `source` | string | No | Lead source |

**`GET /leads/{id}`** — Get a specific lead

**`PUT /leads/{id}`** — Update a lead

**`DELETE /leads/{id}`** — Delete a lead

---

### Leads Lists

Manage lead list collections.

**`GET /leads_lists`** — List all lead lists

**`POST /leads_lists`** — Create a lead list

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | List name |

**`GET /leads_lists/{id}`** — Get a specific list

**`PUT /leads_lists/{id}`** — Update a list

**`DELETE /leads_lists/{id}`** — Delete a list

---

### Campaigns

Manage cold email campaigns.

**`GET /campaigns`** — List all campaigns

**`POST /campaigns`** — Create a campaign

**`GET /campaigns/{id}`** — Get campaign details

**`PUT /campaigns/{id}`** — Update a campaign

**`DELETE /campaigns/{id}`** — Delete a campaign

#### Campaign Recipients

**`GET /campaigns/{campaign_id}/recipients`** — List recipients

**`POST /campaigns/{campaign_id}/recipients`** — Add recipients

| Parameter | Type | Required | Description |
|---|---|---|---|
| `emails` | array | Yes | Array of email objects with optional fields (first_name, last_name, company, etc.) |

**`DELETE /campaigns/{campaign_id}/recipients/{id}`** — Remove a recipient

#### Campaign Sends

**`GET /campaigns/{campaign_id}/sends`** — List all sends for a campaign

Returns send history with open/click/reply tracking data per recipient.

---

### Discover

Search for companies matching specific criteria.

**`GET /discover`**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | No | Free-text search |
| `industry` | string | No | Industry filter |
| `country` | string | No | Country code |
| `city` | string | No | City name |
| `size` | string | No | Employee count range (e.g., `1-10`, `11-50`, `51-200`) |
| `technology` | string | No | Technology name |
| `limit` | integer | No | Max results |
| `offset` | integer | No | Pagination offset |

**Response**: Returns company objects with domain, description, industry, size, location, and social profiles.

**Credit cost**: Free to search. Credits consumed only when using Domain Search or Email Finder on results.

---

### TechLookup

Find companies using a specific technology.

**`GET /technology-lookup`**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `technology` | string | Yes | Technology name (e.g., "Salesforce", "React", "Shopify") |
| `limit` | integer | No | Max results |
| `offset` | integer | No | Pagination offset |

**Response**: Returns list of domains using the specified technology with company details.

**Credit cost**: Free to search.

---

### Account

**`GET /account`** — Get account information including plan, credits remaining, and usage.

---

### Bulk Operations

#### Bulk Domain Search

**`POST /domain-search/bulk`** — Submit bulk domain search job

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domains` | array | Yes | Array of domain strings |

**`GET /domain-search/bulk/{id}`** — Check bulk job status and retrieve results

#### Bulk Email Finder

**`POST /email-finder/bulk`** — Submit bulk email finder job

| Parameter | Type | Required | Description |
|---|---|---|---|
| `items` | array | Yes | Array of objects with `domain`, `first_name`, `last_name` |

**`GET /email-finder/bulk/{id}`** — Check bulk job status and retrieve results

#### Bulk Email Verifier

**`POST /email-verifier/bulk`** — Submit bulk verification job

| Parameter | Type | Required | Description |
|---|---|---|---|
| `emails` | array | Yes | Array of email strings |

**`GET /email-verifier/bulk/{id}`** — Check bulk job status and retrieve results

---

## Webhooks

Hunter supports webhooks for campaign events. Configure webhook URLs in campaign settings to receive real-time notifications for:
- Email sent
- Email opened
- Link clicked
- Reply received
- Bounce detected

Webhook payloads include campaign ID, recipient details, and event-specific data.

---

## Pagination

- Use `offset` and `limit` parameters for paginated endpoints
- Default `limit` varies by endpoint (typically 10-20)
- `meta` object in response includes total `results` count

## Error Handling

Standard HTTP status codes:
- `200` — Success
- `400` — Bad request (invalid parameters)
- `401` — Unauthorized (invalid API key)
- `403` — Forbidden (insufficient credits or plan)
- `404` — Not found
- `429` — Rate limit exceeded
- `500` — Server error

Error responses include a `errors` array with descriptive messages.

## MCP Server

Hunter.io provides an official MCP server for AI agent integration:
- **Repository**: `hunter-io/hunter-mcp`
- **Language**: Python
- **Install**: `pip install hunter-mcp`
- **Configuration**: Set `HUNTER_API_KEY` environment variable
- **Capabilities**: Exposes Domain Search, Email Finder, Email Verifier, and Lead management as MCP tools

## Rate Limit Headers

Responses include rate limit headers:
- `X-RateLimit-Limit` — requests allowed per minute
- `X-RateLimit-Remaining` — requests remaining in current window
- `X-RateLimit-Reset` — seconds until rate limit resets
