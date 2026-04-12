# Anymail Finder Platform Guide

## Email Finder by Person
- **What it does**: Takes a person's name and company or domain, returns a verified email address with status (valid, risky, not_found, or blacklisted)
- **Endpoint**: `POST /v5.1/search/person.json` with `full_name` (or `first_name` + `last_name`) and `company_name` or `domain` in the request body
- **Credit cost**: 1 credit per valid result — risky and not-found results are free
- **Key behavior**: Real-time searches can take up to 180 seconds — set your HTTP timeout accordingly. Duplicate searches within 30 days are free (not re-charged)
- **Use cases**: Finding a specific decision-maker's email when you know their name and company, building targeted outbound lists for account-based outreach

## Email Finder by Company/Domain
- **What it does**: Finds up to 20 email addresses at a given company or domain
- **Endpoint**: `POST /v5.1/search/company.json` with `company_name` or `domain`
- **Credit cost**: 1 credit per search (returns up to 20 emails)
- **Use cases**: Building prospect lists from target company domains, finding all reachable contacts at an account, enriching account records with contact emails

## Email Finder by Decision Maker
- **What it does**: Role-based email search — finds contacts by job function category at a company. Returns person name, title, LinkedIn URL, and email
- **Categories**: ceo, engineering, finance, hr, it, logistics, marketing, operations, buyer, sales
- **Endpoint**: `POST /v5.1/search/decision_maker.json` with `domain` and `category`
- **Credit cost**: 2 credits per valid result (double the standard person search)
- **Use cases**: Finding the right department contact without knowing a name, account-based selling where you need to reach a specific function (e.g., "find me the head of engineering at acme.com")

## Email Finder by LinkedIn URL
- **What it does**: Extracts a verified email address from a LinkedIn profile URL
- **Endpoint**: `POST /v5.1/search/linkedin.json` with `linkedin_url`
- **Credit cost**: 1 credit per valid result
- **Use cases**: Converting LinkedIn prospects into contactable leads, enriching LinkedIn Sales Navigator exports with verified emails

## Email Verifier
- **What it does**: Validates an email address and returns a status of valid, risky, or invalid
- **Endpoint**: `POST /v5.1/verify.json` with `email_address`
- **Credit cost**: 0.2 credits per verification — repeated checks on the same email within 30 days are free
- **Use cases**: Cleaning email lists before outreach, reducing bounce rates, protecting sender reputation, validating leads before adding to CRM

## Bulk Email Search
- **What it does**: Process up to 100,000 rows per request asynchronously — supports JSON body or CSV/Excel file upload
- **Endpoint**: `POST /v5.1/bulk/search.json` (JSON) or `POST /v5.1/bulk/upload.json` (file upload)
- **Key behavior**: Async processing — approximately 1,000 rows in 5 minutes. Credits are charged only when you download results, not when you create the job. Webhook notifications via `x-webhook-url` header for completion alerts
- **Use cases**: Processing large prospect lists, batch-enriching CRM exports, high-volume email discovery campaigns

## GeoLead Finder
- **What it does**: Location-based lead discovery — find leads by geographic area
- **Endpoints**: Create a GeoLead search, Get Info on a search, Download Results
- **Note**: GeoLead Finder documentation is limited — expect some experimentation to understand the full feature set
- **Use cases**: Territory-based prospecting, finding local businesses in a geographic area, location-targeted lead generation

## Chrome Extension
- **What it does**: Browser-based email finding from any website — find emails while browsing company websites or LinkedIn profiles
- **Requirement**: Requires login to anymailfinder.com in the same browser session
- **Use cases**: Prospecting while browsing target company websites, quick email lookup during research sessions, finding contact info without leaving the browser

## Domain Email Count / Order / Download
- **What it does**: Count the number of known emails at a domain, place an order for the full list, and download the results
- **Endpoints**: Count (`POST /v5.1/domain/count.json`), Order (`POST /v5.1/domain/order.json`), Download (`GET /v5.1/domain/download.json`)
- **Use cases**: Assessing coverage at a target domain before committing credits, bulk domain email retrieval

## Report Bad Email
- **What it does**: Report an incorrect email result back to Anymail Finder for correction
- **Endpoint**: `POST /v5.1/report.json`
- **Use cases**: Improving data quality by flagging bounced or incorrect emails, contributing to the platform's accuracy

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Email** | Found or verified email | email, status (valid/risky/not_found/blacklisted), domain |
| **Person** | Contact found via decision maker or person search | name, title, linkedin_url, email |
| **Company/Domain** | Target company for email search | domain, company_name, email_count |
| **Bulk Search** | Async bulk job | id, status, total_rows, processed_rows, webhook_url |
| **GeoLead Search** | Location-based lead search | id, status, results |
| **Account** | User account details | credits_remaining, plan, api_key |

## API quick reference

- **Base URL**: `https://api.anymailfinder.com/v5.1`
- **Authentication**: `Authorization: <your-api-key>` header on all requests
- **Format**: JSON responses; all search endpoints use POST
- **Rate limits**: None — requests are queued and the system auto-scales. At high volume, requests are queued rather than rejected, so response times may increase
- **Webhook support**: Pass `x-webhook-url` header to receive async completion notifications (especially useful for bulk operations)
- **Key endpoints**:
  - `POST /v5.1/search/person.json` — find email by person name + company/domain (1 credit)
  - `POST /v5.1/search/company.json` — find up to 20 emails at a company/domain (1 credit)
  - `POST /v5.1/search/decision_maker.json` — find email by role category at a domain (2 credits)
  - `POST /v5.1/search/linkedin.json` — find email from LinkedIn URL (1 credit)
  - `POST /v5.1/verify.json` — verify an email address (0.2 credits)
  - `POST /v5.1/bulk/search.json` — bulk email search via JSON body (up to 100K rows)
  - `POST /v5.1/bulk/upload.json` — bulk email search via CSV/Excel file upload
  - `POST /v5.1/domain/count.json` — count known emails at a domain
  - `POST /v5.1/domain/order.json` — order full email list for a domain
  - `GET /v5.1/domain/download.json` — download ordered domain email list
  - `POST /v5.1/report.json` — report a bad email result
- **Docs**: API documentation available at anymailfinder.com

## Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Make.com, Zapier, n8n (7,000+ app connections via these platforms) |
| **Browser** | Chrome Extension (in-browser email lookup — requires anymailfinder.com login) |
| **API** | REST API v5.1 with API key auth — integrate with any system that can make HTTP requests |

## Pricing (EUR, as of March 2026 — verify current pricing at anymailfinder.com)

| Plan | Price | Credits/mo | Key features |
|------|-------|-----------|-------------|
| **Starter** | EUR 14/mo | 50 | Basic access |
| **Standard** | EUR 39/mo | 1,000 | Standard volume |
| **Scale** | EUR 129/mo | 5,000 | Higher volume |
| **Ultimate** | EUR 259/mo | 25,000 | Full access |

**Key pricing notes**:
- **Yearly billing saves 33%** on all plans.
- **Credit costs by operation**: Person search = 1 credit, Decision Maker search = 2 credits, Email Verifier = 0.2 credits, Company/Domain search = 1 credit (up to 20 emails).
- **Free for risky/not-found results** — you only pay for valid emails. Risky results are returned but not charged.
- **Duplicate searches within 30 days are free** — re-searching the same person or email does not consume additional credits.
- **Unused credits accumulate up to 2x your plan size** — e.g., a Standard plan (1,000 credits/mo) can accumulate up to 2,000 credits maximum. Credits beyond that cap are forfeited.
