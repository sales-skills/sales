# Prospeo API Reference

## Overview

- **Base URL**: `https://api.prospeo.io`
- **Authentication**: API key via `X-KEY` header
- **Content-Type**: `application/json` (required on all requests)
- **Protocol**: HTTPS only
- **Method**: POST for all endpoints except Account Information (GET)
- **Response format**: JSON with `error` boolean field indicating success/failure

### Authentication

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-KEY: your_api_key" \
  -d '{"data": {"linkedin_url": "https://linkedin.com/in/example"}}' \
  "https://api.prospeo.io/enrich-person"
```

API keys are generated and managed from the [dashboard](https://app.prospeo.io/api). Multiple keys per account are supported.

### Response codes

| Code | Meaning |
|---|---|
| 200 | Valid request (check `error` field for result status) |
| 400 | Error occurred (see `error_code` field) |
| 401 | Invalid API key |
| 429 | Rate limit exceeded |

### Rate limits

Rate limits are per-plan and tracked via response headers:

| Header | Description |
|---|---|
| `x-daily-request-left` | Remaining daily requests |
| `x-minute-request-left` | Remaining minute requests |
| `x-daily-reset-seconds` | Seconds until daily reset |
| `x-minute-reset-seconds` | Seconds until minute reset |
| `x-daily-rate-limit` | Total daily limit |
| `x-minute-rate-limit` | Total minute limit |
| `x-second-rate-limit` | Total per-second limit |

Enrich endpoints count 1 per request (bulk: 1 per submitted record). Search endpoints count 1 per request.

---

## Endpoints

### Enrich Person

Enrich a lead with their verified email, mobile, and B2B profile data.

**POST** `/enrich-person`

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | object | Yes | Identifying data (see matching options below) |
| `only_verified_email` | boolean | No | Only return records with verified email (default: false) |
| `enrich_mobile` | boolean | No | Include mobile number lookup (costs 10 credits) |
| `only_verified_mobile` | boolean | No | Only return records with verified mobile (default: false) |

**Data matching options** (provide one combination):
- `first_name` + `last_name` + company identifier (`company_name`, `company_website`, or `company_linkedin_url`)
- `full_name` + company identifier
- `linkedin_url` (standalone)
- `email` (standalone — reverse lookup)
- `person_id` (from Search Person results)

**Credits**: 1 credit (standard), 10 credits (with mobile). Free if no match or duplicate.

**Response**:

```json
{
  "error": false,
  "free_enrichment": false,
  "person": {
    "person_id": "aaaacd817619fba3d254cd64",
    "first_name": "John",
    "last_name": "Doe",
    "full_name": "John Doe",
    "linkedin_url": "https://linkedin.com/in/johndoe",
    "current_job_title": "VP Engineering",
    "headline": "Building great products",
    "job_history": [...],
    "skills": [...],
    "country": "United States",
    "state": "California",
    "city": "San Francisco",
    "time_zone": "America/Los_Angeles",
    "email": {
      "status": "VERIFIED",
      "revealed": true,
      "email": "john.doe@example.com"
    },
    "mobile": {
      "status": "VERIFIED",
      "revealed": true,
      "mobile": "+1 415-555-1234"
    }
  },
  "company": {
    "name": "Example Corp",
    "website": "example.com",
    "domain": "example.com",
    "description": "...",
    "employee_count": 250,
    "employee_range": "201-500",
    "type": "Private",
    "industry": "Software",
    "location": {...},
    "social_urls": {...},
    "funding": {...},
    "technology_stack": [...],
    "job_postings": [...]
  }
}
```

**Error codes**: `NO_MATCH`, `INVALID_DATAPOINTS`, `INSUFFICIENT_CREDITS`, `INVALID_API_KEY`, `RATE_LIMITED`

---

### Bulk Enrich Person

Enrich up to 50 leads at once with their contact info and profile data.

**POST** `/bulk-enrich-person`

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | array | Yes | Array of up to 50 person objects with `identifier` field |
| `only_verified_email` | boolean | No | Filter for verified emails only |
| `enrich_mobile` | boolean | No | Include mobile enrichment |
| `only_verified_mobile` | boolean | No | Filter for verified mobiles only |

Each record in `data` requires an `identifier` (alpha-numeric tracking string) plus the same matching options as single enrichment.

**Response**:

```json
{
  "error": false,
  "total_cost": 42,
  "matched": [
    {"identifier": "lead-001", "person": {...}, "company": {...}}
  ],
  "not_matched": ["lead-015", "lead-023"],
  "invalid_datapoints": ["lead-050"]
}
```

---

### Enrich Company

Enrich a company with firmographic data — 50+ fields.

**POST** `/enrich-company`

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | object | Yes | Company identification (at least one field required) |

**Data fields**:
- `company_website` — e.g., "intercom.com" (recommended)
- `company_linkedin_url` — e.g., "https://linkedin.com/company/intercom"
- `company_name` — e.g., "Intercom" (less precise when used alone)
- `company_id` — from previous enrichment

**Credits**: 1 credit per match. Free for no match or duplicate.

**Response**: Company object with name, website, domain, description, type, industry, employee count, location, SIC/NAICS codes, social URLs, funding history, technology stack, job postings, revenue range, and company attributes (B2B, free trial, pricing indicators).

**Error codes**: `NO_MATCH`, `INSUFFICIENT_CREDITS`, `INVALID_API_KEY`, `RATE_LIMITED`, `INVALID_REQUEST`, `INTERNAL_ERROR`

---

### Bulk Enrich Company

Enrich up to 50 companies at once.

**POST** `/bulk-enrich-company`

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | array | Yes | Array of up to 50 company objects with `identifier` field |

Each record needs an `identifier` plus at least one company data field (website + LinkedIn recommended).

**Credits**: 1 credit per matched company. Free for no match or duplicate.

**Response**: Same structure as Bulk Enrich Person — `matched`, `not_matched`, `invalid_datapoints` arrays with `total_cost`.

---

### Search Person

Search through 200M+ contacts with 30+ filters.

**POST** `/search-person`

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filters` | object | Yes | Filter configuration with include/exclude logic |
| `page` | integer | No | Page number (default: 1, max: 1,000) |

**Available filters**:
- `company_industry` — include/exclude industries
- `company_location` — geographic filtering
- `company_headcount_range` — employee count ranges
- `company_funding` — stage, date, amounts
- `company.websites` — list of domains (up to 500)
- `company.names` — list of company names (up to 500)
- `person_seniority` — include/exclude seniority levels
- `person_department` — include/exclude departments
- `person_location` — geographic filtering
- `person_job_title` — title matching
- `person_year_of_experience` — min/max years

Filters support `include` and `exclude` arrays. Exclude-only searches are not allowed (at least one include filter required).

**Credits**: 1 credit per request that returns results.

**Response**:

```json
{
  "error": false,
  "results": [
    {"person": {...}, "company": {...}}
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 25,
    "total_page": 100,
    "total_count": 2500
  }
}
```

**Important**: Email and mobile data are NOT returned in search results. Use Enrich Person to get contact info.

**Error codes**: `INVALID_FILTERS`, `NO_RESULTS`, `INSUFFICIENT_CREDITS`, `INVALID_API_KEY`, `RATE_LIMITED`

---

### Search Company

Search through 30M+ companies.

**POST** `/search-company`

**Parameters**: Same structure as Search Person — `filters` object + optional `page`.

**Available filters**: company_industry, company_funding (stage, date, amounts), company_location, company_websites (up to 500), company_names (up to 500), company_headcount_range, technology stack, email provider (MX), NAICS codes, SIC codes.

**Credits**: 1 credit per request that returns results. Max 25,000 results (1,000 pages × 25).

**Response**: Same pagination structure as Search Person, with company objects in results.

---

### Search Suggestions

**POST** `/search-suggestions`

Provides autocomplete suggestions for search filters. Details not fully documented — use to populate filter dropdowns.

---

### Account Information

**GET** `/account-information`

Returns account usage data. Free to call.

**Response**:

```json
{
  "error": false,
  "response": {
    "current_plan": "STARTER",
    "current_team_members": 3,
    "remaining_credits": 750,
    "used_credits": 250,
    "next_quota_renewal_days": 15,
    "next_quota_renewal_date": "2026-04-15T00:00:00Z"
  }
}
```

---

## Deprecated Endpoints

The following endpoints were **removed on March 1, 2026**. Use the Enrich Person/Company endpoints instead:

- `/email-finder` → use `/enrich-person`
- `/mobile-finder` → use `/enrich-person` with `enrich_mobile: true`
- `/email-verifier` → verification is built into `/enrich-person`
- `/domain-search` → use `/search-person` with `company.websites` filter
- `/social-url-enrichment` → use `/enrich-person` with `linkedin_url`

---

## SDKs and Tools

- **MCP Server**: `@prospeo/mcp-server` — official Model Context Protocol server for AI agent integration
- **n8n Node**: `@prospeo/n8n-nodes-prospeo` — community node for n8n automation
- **Chrome Extension**: LinkedIn Sales Navigator extraction

---

## Gaps

*The following details were not fully captured during research — verify with Prospeo documentation:*

- Exact rate limit thresholds per plan tier
- Search Suggestions endpoint parameters and response format
- Chrome extension feature details and limitations
- Webhook support (not documented — Prospeo may not support webhooks)
- Detailed field-level documentation for all 50+ company enrichment fields
