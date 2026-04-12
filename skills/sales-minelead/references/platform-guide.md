# Minelead Platform Guide

## Company Email Search
- **What it does**: Takes a domain and returns all known email addresses associated with that company — draws from a database of 500M+ emails and 100M+ business profiles
- **Endpoint**: `GET /v1/search` with `domain` parameter
- **Key behavior**: Excludes webmail domains (Gmail, Yahoo, etc.) by default to focus on business emails; returns email addresses with associated metadata
- **Credit cost**: 1 credit per successful domain search
- **Use cases**: Building prospect lists from target company domains, finding all reachable contacts at an account, enriching account records with contact emails

## Email Finder
- **What it does**: Finds a professional email address from a person's first name, last name, and company domain
- **Endpoint**: `GET /v1/find` with `first_name`, `last_name`, and `domain` parameters
- **Credit cost**: 1 credit per successful finder operation
- **Use cases**: Finding a specific decision-maker's email when you know their name and company, building targeted outbound lists for account-based outreach

## Lead Finder / Tags
- **What it does**: Discovers companies and leads based on keywords and geographic locations — acts as a keyword-based lead generation engine
- **Endpoint**: `GET /v1/tags` with keyword and location parameters
- **Use cases**: Building prospect lists for a specific industry or niche, discovering new target accounts by business category and geography, expanding your TAM with keyword-driven discovery

## Email Verifier
- **What it does**: Validates email deliverability and returns a quality score from 25 to 100%
- **Endpoint**: `GET /v1/validate` with `email` parameter
- **Quality scores**: 25-100% indicating deliverability confidence — higher is better
- **Key behavior**: Detects catch-all domains (domains that accept all email addresses regardless of whether the mailbox exists), checks MX records and mailbox status
- **Credit cost**: 1 credit per verification
- **Use cases**: Cleaning email lists before outreach, reducing bounce rates, protecting sender reputation, validating leads before adding to CRM

## Disposable Email Detector
- **What it does**: Identifies whether an email address is from a temporary/disposable email provider and returns a score from 0 to 5
- **Endpoint**: `GET /v1/detect-disposable` with `email` parameter
- **Scoring**: 0 = not disposable, 5 = definitely disposable; intermediate scores indicate varying confidence levels
- **Use cases**: Form validation to prevent fake signups, cleaning email lists of throwaway addresses, lead quality filtering

## Email Campaigns
- **What it does**: Send email campaigns through connected Gmail accounts with round-robin support for distributing sends across multiple accounts
- **Endpoint**: `/v1/campaigns` (CRUD) and `/v1/campaigns-recipients` for managing recipient lists
- **Key features**: Connect multiple Gmail accounts, round-robin sending distributes volume across accounts to protect deliverability, manage recipient lists, track campaign performance
- **Use cases**: Cold outreach campaigns, follow-up sequences, nurture campaigns to lead collections

## Leads/CRM
- **What it does**: Save, organize, and manage lead collections within Minelead — export to CSV, import from CSV, organize into collections
- **Endpoint**: `/v1/leads` (CRUD operations)
- **Key features**: Create and manage lead collections, import leads via CSV, export lead data, organize leads into groups for targeted actions
- **Use cases**: Centralizing discovered leads, organizing prospects by campaign or segment, preparing lead lists for export to external CRM

## Bulk Operations
- **What it does**: Batch email search and verification via CSV upload — process large lists without making individual API calls
- **Plan limits**: Free and Starter plans support up to 50 records per batch, Pro supports 100, Business supports 1,000, Enterprise supports unlimited
- **Use cases**: Verifying large email lists before a campaign, batch-searching emails by domain, processing CRM exports for validation

## Browser Extensions
- **What it does**: Chrome and Firefox extensions for in-browser email lookup — find emails while browsing company websites or LinkedIn profiles
- **Use cases**: Prospecting while browsing target company websites, quick email lookup during research sessions, finding contact info without leaving the browser

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Domain Email** | Email found via domain search | email, domain, type, source |
| **Found Email** | Email found via name+domain finder | email, first_name, last_name, domain, confidence |
| **Verification Result** | Email validation output | email, status, quality_score (25-100%), catch_all, mx_found |
| **Disposable Check** | Disposable detection output | email, disposable_score (0-5), provider |
| **Lead** | Saved lead record | id, email, name, company, domain, collection_id |
| **Lead Collection** | Group of leads | id, name, lead_count, created_at |
| **Campaign** | Email campaign | id, name, status, gmail_accounts, recipients_count, sent_count |
| **Campaign Recipient** | Individual recipient in a campaign | id, campaign_id, email, status, opened, clicked |
| **Tag Result** | Lead generation result from keywords | company, domain, location, keyword, category |
| **Bulk Job** | Batch operation record | id, type, status, total_records, processed_records |

## API quick reference

- **Base URL**: `https://api.minelead.io/v1`
- **Authentication**: API key passed as query parameter — `key=<your-api-key>` on all requests
- **Format**: JSON responses; OpenAPI 3.0 specification available
- **Key endpoints**:
  - `GET /v1/search?domain=&key=` — domain-based email search (find all emails at a company)
  - `GET /v1/find?first_name=&last_name=&domain=&key=` — find professional email from name + domain
  - `GET /v1/validate?email=&key=` — verify email deliverability (quality score 25-100%)
  - `GET /v1/detect-disposable?email=&key=` — check if email is disposable (score 0-5)
  - `GET /v1/tags?keyword=&location=&key=` — discover companies by keyword and location
  - `GET /v1/leads?key=` — list saved leads / lead collections
  - `POST /v1/leads` — create or update leads
  - `GET /v1/campaigns?key=` — list email campaigns
  - `POST /v1/campaigns` — create a new campaign
  - `POST /v1/campaigns-recipients` — add recipients to a campaign
  - `GET /v1/history?key=` — search and verification history
  - `GET /v1/account?key=` — account info and credit balance
- **Rate limits**: Vary by plan — Free tier is throttled; paid plans have higher throughput
- **Docs**: API documentation available at Minelead developer portal

## Integrations

| Category | Tools |
|----------|-------|
| **CRM** | HubSpot (sync leads and contacts), Zoho CRM (push verified leads) |
| **Productivity** | Google Sheets (export/import lead data directly) |
| **Automation** | Zapier (6,000+ app connections — trigger on new leads, verify emails, search domains) |
| **Browser** | Chrome Extension, Firefox Extension (in-browser email lookup) |
| **API** | REST API with API key auth — integrate with any system that can make HTTP requests |

## Pricing (USD, as of March 2026 — verify current pricing at minelead.io)

| Plan | Price | Credits/mo | Bulk limit | Multi-users | Key features |
|------|-------|-----------|------------|-------------|-------------|
| **Free** | $0 | 25 | 50 | — | Throttled, basic access |
| **Starter** | $39/mo | 1,000 | 50 | — | Unlimited results per search |
| **Pro** | $69/mo | 10,000 | 100 | 2 | All integrations |
| **Business** | $149/mo | 50,000 | 1,000 | 5 | API support |
| **Enterprise** | $299/mo | 200,000 | Unlimited | 10 | Full access, priority support |

**Key pricing notes**:
- **1 credit = 1 operation** — 1 successful domain search, 1 email verification, 1 finder operation, 1 generator/tags request, or 1 email campaign sent.
- Credits are consumed on successful operations — plan your credit budget based on the mix of operations you need.
- Bulk operation limits are per-batch and vary by plan (50 for Free/Starter, 100 for Pro, 1,000 for Business, unlimited for Enterprise).
- Multi-user seats are available on Pro (2), Business (5), and Enterprise (10) plans.
