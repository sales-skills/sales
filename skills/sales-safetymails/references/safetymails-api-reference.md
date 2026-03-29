# SafetyMails API Reference

> **Documentation status:** SafetyMails uses a help-center style docs site (docs.safetymails.com) with installation guides rather than a traditional REST API reference. Many standard API details (endpoints, request/response schemas, rate limits) are not publicly documented. Gaps are flagged throughout this reference.

## Overview

| Field | Value |
|-------|-------|
| Platform | SafetyMails — email verification (bulk + real-time API + Email Finder) |
| Documentation | [docs.safetymails.com](https://docs.safetymails.com) |
| Panel / Dashboard | [panel.safetymails.com](https://panel.safetymails.com) |
| Authentication | API key (generated in panel under API settings) |
| Trial | 1,000 free API credits for 15 days |

---

## Real-Time API (Form Validation)

**Primary use:** JavaScript embed for validating emails on web forms and landing pages.

**Response time:** < 1 second

### Installation

The Real-Time API is deployed by embedding a JavaScript snippet into form pages. There is no traditional REST endpoint with request/response documentation.

**Supported platforms:**

- WordPress (plugin or manual embed)
- Google Tag Manager
- RD Station
- E-goi
- Custom HTML forms

### Features

- Syntax check
- MX record validation
- Disposable email detection (80+ services)
- Domain typo correction (e.g., "gmial.com" -> "gmail.com")
- Customizable error messages
- Flood / abuse protection

### How It Works

1. Add JavaScript snippet to form page
2. Snippet intercepts form submission
3. Email is validated via SafetyMails servers
4. Callback returns validation result
5. Form submission is allowed or blocked based on result

> **GAP:** No REST endpoint URLs documented (e.g., `POST /api/v1/verify`). The real-time API operates exclusively through the JavaScript embed with callbacks. No request/response JSON schemas are available. If a direct HTTP API exists, it is not publicly documented.

---

## Bulk Verification

**Method:** Upload via panel (not a documented API endpoint).

### Upload Options

- CSV file
- TXT file
- Paste email list directly

### Limits

- Up to 2,000,000 emails per batch
- 1 credit = 1 email verified

### Verification Process

- 19-step verification algorithm (proprietary)

### Result Categories

| Category | Description |
|----------|-------------|
| Valid | Deliverable email address |
| Invalid | Undeliverable email address |
| Catch-All | Domain accepts all addresses (deliverability uncertain) |
| Disposable | Temporary/throwaway email service |
| Spamtrap | Known spam trap address |
| Role-Based | Generic address (e.g., info@, support@) |
| Syntax Error | Malformed email format |
| Domain Error | Domain does not exist or has no MX records |

### Export

- Results downloadable as CSV from the panel

> **GAP:** No bulk verification API endpoint documented. Bulk verification appears to be UI-only (upload via panel). No documented way to programmatically submit lists, poll for status, or retrieve results via API.

---

## Email Finder

**Input:** First name + last name + domain

**Output:** Verified corporate email address

### Credit Costs

| Outcome | Credits |
|---------|---------|
| Email found (verified) | 7 credits |
| Risky or invalid domain | 1 credit |
| Email not found | 0 credits |

### Constraints

- Results stored for 30 days in dashboard
- Individual lookups only — no bulk or scraping
- No separate API endpoint documented

> **GAP:** Email Finder API access is unclear. This feature may be UI-only (panel dashboard). No REST endpoint, request format, or response schema is documented for programmatic Email Finder lookups.

---

## Integrations

### Native Integrations

- RD Station
- SendGrid
- HubSpot
- Mailchimp
- ActiveCampaign
- WordPress
- E-goi
- Pipedrive
- Brevo (formerly Sendinblue)
- Salesforce

### Automation Platforms

- Zapier
- Make (formerly Integromat)
- n8n
- Pabbly Connect
- Pluga

---

## Authentication

API keys are generated in the SafetyMails panel:

1. Log in to [panel.safetymails.com](https://panel.safetymails.com)
2. Navigate to API settings
3. Generate or copy your API key

> **GAP:** No documentation on how the API key is passed (header, query parameter, or embedded in the JavaScript snippet). No details on key rotation, scoping, or revocation.

---

## Known Documentation Gaps

The following areas lack public documentation and should be flagged for manual review:

| Gap | Details |
|-----|---------|
| **No REST endpoint URLs** | No documented endpoints (e.g., `POST /verify`, `GET /status`, `POST /finder`) |
| **No response schema / JSON examples** | No request or response payload formats available |
| **No rate limit documentation** | Throttling behavior, concurrency limits, and retry guidance are undocumented |
| **No webhook support documented** | No callbacks for async bulk verification completion |
| **Email Finder API access unclear** | May be UI-only; no programmatic access documented |
| **Bulk verification API unclear** | May be upload-only via panel; no programmatic submission documented |
| **Authentication mechanism unclear** | How the API key is transmitted is not specified |
| **Error handling undocumented** | No error codes, error response formats, or troubleshooting guidance |
| **API versioning unknown** | No version prefix or changelog documented |

---

*Last updated: 2026-03-29*
*Status: Incomplete — pending discovery of REST API documentation*
