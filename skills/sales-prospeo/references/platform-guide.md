# Prospeo Platform Guide

## Person Enrichment

The core Prospeo feature — find verified emails, mobile numbers, and full B2B profiles.

**Input options** (any one of these):
- First name + last name + company identifier (name, website, or LinkedIn URL)
- Full name + company identifier
- LinkedIn URL (standalone)
- Email address (standalone — reverse lookup)
- Person ID (from a previous search)

**What you get back**:
- Verified email with status (VERIFIED, NOT_VERIFIED)
- Mobile number with verification status (costs 10 credits extra)
- Full profile: job title, job history, headline, skills, location, timezone
- Current company data: name, domain, industry, employee count, funding, tech stack, job postings

**Key settings**:
- `only_verified_email: true` — only return results with a verified email (saves credits on unmatched)
- `enrich_mobile: true` — include mobile number lookup (costs 10 credits instead of 1)
- `only_verified_mobile: true` — only return results with a verified mobile

**Credit costs**:
- Standard enrichment (person + company + email): 1 credit
- With mobile: 10 credits (email included free)
- No match found: free
- Same record enriched again: free (lifetime dedup)

## Company Enrichment

Firmographic data on 30M+ companies — 50+ data fields.

**Input options** (any one of these):
- Company website/domain (most reliable)
- Company LinkedIn URL
- Company name (use with caution — less precise)
- Company ID (from previous enrichment)

**What you get back**:
- Basic info: name, website, domain, description
- Classification: industry, type, SIC/NAICS codes
- Size: employee count, employee range, revenue range
- Location: HQ address, country, state, city
- Social: LinkedIn, Twitter, Facebook, YouTube URLs
- Financial: funding history, total funding, last funding date
- Technology: tech stack detection
- Engagement: job postings, B2B/B2C attributes, free trial/pricing indicators

**Credit costs**: 1 credit per matched company. Free for no match or duplicate.

## Person Search

Search through 200M+ contacts with 30+ filters. Returns up to 25 results per page, max 25,000 total (1,000 pages).

**Available filters**:

| Filter category | Filters |
|---|---|
| **Company** | industry, location, headcount range, funding (stage, date, amount, total), websites (up to 500), names (up to 500) |
| **Person** | seniority, department, location, job title, years of experience |

**Important**: Search returns profile data but NOT emails or phones. You must use Enrich Person on results to get contact info. Search costs 1 credit per request that returns results.

## Company Search

Search through 30M+ companies with filters. Same pagination as Person Search.

**Available filters**:
- Industry, location, headcount range
- Funding: stage, date, last amount, total amount
- Technology stack, email provider (MX)
- NAICS codes, SIC codes
- Websites (up to 500), names (up to 500)

**Credit cost**: 1 credit per request that returns results.

## Bulk Operations

Enrich up to 50 records per API call for both person and company enrichment.

**Bulk Enrich Person**: Same input options as single enrichment, but send an array of up to 50 records. Each record needs a unique `identifier` string for tracking. Response separates `matched`, `not_matched`, and `invalid_datapoints`.

**Bulk Enrich Company**: Same — up to 50 companies per call with identifiers.

**Credit costs**: Same as single enrichment (1 per matched person/company, 10 for mobile). `total_cost` field in response tracks total credits spent.

## Chrome Extension

Prospeo's Chrome extension extracts contact data from LinkedIn and LinkedIn Sales Navigator.

**What it does**:
- Find verified emails from LinkedIn profiles
- Extract contact data while browsing Sales Navigator
- One-click enrichment without switching to the Prospeo app

## 5-Step Email Verification

Prospeo uses a 5-step verification process (built into enrichment — not a separate endpoint):

1. **Syntax check** — valid email format
2. **Domain/MX check** — domain exists and accepts email
3. **SMTP verification** — mailbox exists
4. **Catch-all detection** — identifies domains that accept all addresses
5. **Result validation** — cross-references multiple signals

Verification statuses: `VERIFIED` (safe to send), `NOT_VERIFIED` (use with caution).

## Data Model

| Entity | What it represents | Key relationships |
|---|---|---|
| **Person** | A B2B professional with contact info | Has email, mobile, job history, skills; linked to Company |
| **Company** | An organization with firmographic data | Has employees, funding, tech stack, job postings |
| **Search** | A filtered query across the database | Returns Person or Company results (no contact info) |
| **Enrichment** | A lookup that returns full contact data | Consumes credits; lifetime dedup per account |

## API Quick Reference

- **Base URL**: `https://api.prospeo.io`
- **Auth**: `X-KEY` header with API key
- **Method**: POST for all endpoints (GET for account-information only)
- **Content-Type**: `application/json`
- **Rate limits**: Per-plan, tracked via response headers (`x-daily-request-left`, `x-minute-request-left`, `x-second-rate-limit`)
- **Active endpoints**: `/enrich-person`, `/bulk-enrich-person`, `/enrich-company`, `/bulk-enrich-company`, `/search-person`, `/search-company`, `/search-suggestions`, `/account-information`
- **Deprecated** (removed March 1, 2026): `/email-finder`, `/mobile-finder`, `/email-verifier`, `/domain-search`, `/social-url-enrichment`

For the full endpoint catalog, request/response schemas, and rate limits, see `references/prospeo-api-reference.md`.

## Integrations

| Integration | Type | What it does |
|---|---|---|
| **HubSpot** | Native | Enrich CRM contacts with verified emails, phones, firmographic data |
| **Salesforce** | Native | Keep CRM data clean with enriched contacts and accounts |
| **Clay** | Native | Automate datan enrichment in Clay workflows, build dynamic lead lists |
| **Smartlead** | Native | Push enriched leads to Smartlead campaigns |
| **Instantly** | Native | Push enriched leads to Instantly campaigns |
| **Lemlist** | Native | Push enriched leads to Lemlist sequences |
| **Zapier** | Native | Connect to 8,000+ apps for automated workflows |
| **Make** | Native | Visual automation workflows with Prospeo actions |
| **n8n** | Native (community node) | Self-hosted automation with `@prospeo/n8n-nodes-prospeo` |
| **MCP Server** | Official (`@prospeo/mcp-server`) | Access enrichment and search from AI agents via Model Context Protocol |

## Pricing

*As of March 2026 — verify current pricing at prospeo.io/pricing*

| Plan | Price/mo | Credits/mo | Key features |
|---|---|---|---|
| Free | $0 | 75 | Core enrichment, Chrome extension |
| Starter | $39 | 1,000 | Full API access |
| Growth | $99 | 5,000 | Team sharing |
| Pro | $199 | 20,000 | Priority support |
| Business | $369 | 50,000 | High-volume enrichment |

All plans include person + company enrichment, search, Chrome extension, and API access. Mobile enrichment costs 10 credits per lookup on all plans.
