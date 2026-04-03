# LeadMagic API Reference

## Overview

| Property | Value |
|----------|-------|
| Base URL | `https://api.leadmagic.io` |
| Auth | API key via `X-API-Key` header |
| Response format | JSON |
| Response times | <200ms average |
| Uptime | 99.9% |
| Credits | Pay-per-result — failed lookups (null) cost 0 credits |
| Docs | leadmagic.io/docs/v1/introduction |
| OpenAPI spec | github.com/LeadMagic/leadmagic-openapi |
| MCP Server | github.com/LeadMagic/leadmagic-mcp (19 tools) |

## Authentication

All requests require an `X-API-Key` header:

```bash
curl -X POST "https://api.leadmagic.io/v1/people/email-finder" \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"first_name": "Jane", "last_name": "Doe", "company_name": "acme.com"}'
```

Get your API key from: Sign up at app.leadmagic.io → Settings → API

## Endpoints by Category

### Credits

```
GET /v1/credits
```

**Credits**: 0 (free)

**Returns**: Current credit balance.

---

### People Data

#### Email Finder

```
POST /v1/people/email-finder
```

**Credits**: 1 per valid result (0 if not found)

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `first_name` | Yes | Contact's first name |
| `last_name` | Yes | Contact's last name |
| `company_name` | Yes | Company domain or name |

**Returns**: Verified work email address. 97% accuracy claimed.

#### Email Validation

```
POST /v1/people/email-validation
```

**Credits**: 0.25 per validation

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Yes | Email address to validate |

**Returns**: Validation status (`valid`, `invalid`, `unknown`), catch-all detection, deliverability score. Real-time SMTP verification.

#### Mobile Finder

```
POST /v1/people/mobile-finder
```

**Credits**: 5 per valid result (0 if not found)

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `first_name` | Yes | Contact's first name |
| `last_name` | Yes | Contact's last name |
| `company_name` | Yes | Company domain or name |

**Returns**: Direct dial mobile number.

#### Profile Search

```
POST /v1/people/profile-search
```

**Credits**: 1

**Rate limit**: 300 requests/minute

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `url` | Yes | LinkedIn or B2B profile URL |

**Returns**: Work history, education, skills, current role, and professional details.

#### Email to Profile

```
POST /v1/people/b2b-profile
```

**Credits**: 10 per result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Yes | Work email address |

**Returns**: B2B profile URL and professional details.

#### Profile to Email (B2B Social to Email)

```
POST /v1/people/b2b-profile-email
```

**Credits**: 1-2 per valid result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `url` | Yes | LinkedIn or B2B profile URL |

**Returns**: Verified work email address.

#### Personal Email Finder

```
POST /v1/people/personal-email-finder
```

**Credits**: 1-2 per valid result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `url` | Yes | B2B profile URL |

**Returns**: Personal email address (Gmail, Outlook, etc.).

#### Role Finder

```
POST /v1/people/role-finder
```

**Credits**: 1-2 per result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `company_name` | Yes | Company domain or name |
| `role` | Yes | Role/title to search for (e.g., "VP Sales") |

**Returns**: Contact(s) matching the role at the specified company.

#### Employee Finder

```
POST /v1/people/employee-finder
```

**Credits**: 0.05 per employee

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `company_name` | Yes | Company domain or name |

**Returns**: List of employees at the company. Low-cost bulk discovery endpoint.

#### Job Change Detector

```
POST /v1/people/job-change
```

**Credits**: 3 per result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Conditional | Contact's email |
| `url` | Conditional | Contact's LinkedIn URL |

**Returns**: Whether the contact has changed jobs, new company and role details.

---

### Company Data

#### Company Search

```
POST /v1/companies/company-search
```

**Credits**: 1-2 per result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `company_name` | Conditional | Company name |
| `domain` | Conditional | Company domain |
| `url` | Conditional | Company LinkedIn URL |

Provide at least one identifier.

**Returns**: Firmographics (industry, size, revenue, location), technographics (tech stack), and competitor information.

#### Company Funding

```
POST /v1/companies/company-funding
```

**Credits**: 4 per result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `company_name` | Conditional | Company name |
| `domain` | Conditional | Company domain |

**Returns**: Funding rounds, investors, amounts, dates, and total funding.

---

### Jobs

#### Jobs Finder

```
POST /v1/jobs/jobs-finder
```

**Credits**: 1 per job result

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `query` | Yes | Job search keywords |
| `country` | No | Country filter (use GET /v1/jobs/countries for options) |
| `job_type` | No | Job type filter (use GET /v1/jobs/job-types for options) |

**Returns**: Job listings matching the search criteria.

#### Job Countries Reference

```
GET /v1/jobs/countries
```

**Credits**: 0 (free)

**Returns**: List of available countries for job search filtering.

#### Job Types Reference

```
GET /v1/jobs/job-types
```

**Credits**: 0 (free)

**Returns**: List of available job type filters.

---

### Ads Intelligence

#### Google Ads Search

```
POST /v1/ads/google-ads-search
```

**Credits**: 1 per ad returned

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Company domain to search ads for |

**Returns**: Google search ads — ad copy, keywords, landing page URLs.

#### Meta Ads Search

```
POST /v1/ads/meta-ads-search
```

**Credits**: 1 per ad returned

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Company domain to search ads for |

**Returns**: Facebook/Instagram ads — creative, ad copy, engagement metrics.

#### B2B Ads Search

```
POST /v1/ads/b2b-ads-search
```

**Credits**: 1 per ad returned

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Company domain to search ads for |

**Returns**: B2B display and social advertising campaigns.

#### B2B Ad Details

```
POST /v1/ads/b2b-ads-details
```

**Credits**: 1

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `ad_id` | Yes | Ad ID from B2B Ads Search results |

**Returns**: Detailed information about a specific B2B ad.

## MCP Server

LeadMagic provides an official MCP (Model Context Protocol) server exposing all 19 tools:

```bash
# Install and run
npx leadmagic-mcp

# Or configure in Claude Code / Cursor / Windsurf
# Environment variable: LEADMAGIC_API_KEY=your_key
```

**Supported clients**: Claude Code, Cursor, Windsurf, VS Code, Continue.dev, ChatGPT

**GitHub**: github.com/LeadMagic/leadmagic-mcp

## CLI

LeadMagic offers a command-line interface for terminal-based lookups:

```bash
# GitHub: github.com/LeadMagic/cold-email-cli
```

## Credit System

| Endpoint | Credits |
|----------|---------|
| Email Finder | 1 |
| Email Validation | 0.25 |
| Profile Search | 1 |
| Profile to Email | 1-2 |
| Personal Email Finder | 1-2 |
| Role Finder | 1-2 |
| Company Search | 1-2 |
| Employee Finder | 0.05 |
| Job Change Detector | 3 |
| Company Funding | 4 |
| Mobile Finder | 5 |
| Email to Profile | 10 |
| Ads endpoints | 1 per result |
| Get Credits | 0 |
| Job Countries/Types | 0 |

**Key rule**: You only pay for valid results. `not_found` / `null` results cost 0 credits.

## Error Handling

Standard error format:
```json
{"error": "error_type", "message": "Human-readable description"}
```

| Status | Meaning |
|--------|---------|
| 200 | Success — data returned |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 403 | Forbidden — insufficient credits or access |
| 404 | Not Found — no data for this lookup (0 credits charged) |
| 429 | Rate Limited — throttle requests (300/min on Profile Search) |
| 500 | Server Error — retry with backoff |

## Gaps & Limitations

- **Rate limits mostly undocumented**: Only Profile Search (300 req/min) has a publicly documented rate limit. Other endpoints likely have limits but they're not specified.
- **Response schema inconsistencies**: Field naming mixes snake_case and camelCase across endpoints. Use the OpenAPI spec (github.com/LeadMagic/leadmagic-openapi) for exact field names.
- **No webhooks**: LeadMagic is request-response only — no webhook/event push mechanism.
- **No native CRM write-back**: Results go to your application/pipeline. For CRM sync, use Clay, Zapier, Make, or n8n as middleware.
- **Credit costs for some endpoints are ranges (1-2)**: Exact credit consumption may depend on data completeness or source. Monitor via GET /v1/credits.
