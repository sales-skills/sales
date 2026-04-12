# GetProspect Platform Guide

## Email Finder
- **What it does**: Search a database of 200M+ contacts by name, company, title, domain, and more with 17+ filters — returns verified email addresses with 95% accuracy on verified results
- **Key features**: Search by name, company, job title, industry, location, company size, revenue, technology stack, and other filters; results include email, name, title, company, and enrichment data
- **Credit cost**: 1 email credit per valid email found
- **Use cases**: Building targeted prospect lists, finding decision-maker emails at target accounts, sourcing contacts by title and industry

## LinkedIn Email Finder Extension
- **What it does**: Chrome extension that exports leads directly from LinkedIn and Sales Navigator — extracts emails and enrichment data from LinkedIn profiles and search results
- **Key features**: One-click export from LinkedIn profiles, bulk export from Sales Navigator search results, automatic enrichment with email and phone data
- **Use cases**: Prospecting directly from LinkedIn, building lists from Sales Navigator saved searches, enriching LinkedIn connections with email addresses

## B2B Contact Database
- **What it does**: Browse and search 200M+ contacts and 26M+ companies with advanced filters — a standalone prospecting database accessible from the GetProspect web app
- **Key features**: 17+ search filters (title, industry, location, company size, revenue, tech stack), company profiles with employee counts and industry classification, saved searches
- **Use cases**: Market research, TAM analysis, building account lists by firmographic criteria, discovering new target companies

## Contact Enrichment
- **What it does**: Append 40+ data attributes to existing contacts — location, industry, tech stack, phone numbers, social profiles, company data, and more
- **Key features**: Bulk enrichment via CSV upload or CRM sync, 40+ data points per contact, company-level enrichment (industry, size, revenue, tech stack)
- **Credit cost**: 1 email credit per contact enriched
- **Use cases**: Filling gaps in CRM data, appending phone numbers and titles to email-only records, enriching event lead lists with firmographic data

## Email Verifier
- **What it does**: Validate email deliverability with 95% accuracy — catch-all detection, bulk verification, 97% deliverability guarantee on verified-valid emails
- **Key features**: Real-time single verification, bulk verification via CSV upload, catch-all domain detection, MX record checks, syntax validation
- **Credit cost**: 1 verification credit per email checked
- **Deliverability guarantee**: 97% — if more than 3% of verified-valid emails bounce, GetProspect provides credit refunds
- **Use cases**: Cleaning email lists before outreach, validating leads before CRM import, reducing bounce rates, protecting sender reputation

## Cold Email Software
- **What it does**: Build and send multi-step cold email sequences with A/B testing, auto-stop on reply or click, timezone-aware sending, and deliverability safeguards
- **Key features**: Multi-step sequences (email + follow-ups), A/B testing on subjects, messages, and CTAs, auto-stop when prospect replies or clicks, timezone-aware sending windows, SPF/DKIM authentication checks, randomized sending intervals, configurable daily sending limits, templates library, attachment support, unsubscribe link management
- **Use cases**: Cold outbound campaigns, multi-touch follow-up sequences, A/B testing outreach messaging, automated drip sequences

## Built-in CRM
- **What it does**: Manage contacts, companies, lists, tags, and custom properties — a lightweight CRM built into the GetProspect platform
- **Key features**: Contact and company records, custom properties, tags, notes, lists (static and dynamic), domain blacklisting to exclude specific companies, ownership-based filtering for team use
- **Use cases**: Organizing prospects by campaign or segment, tracking outreach status, managing do-not-contact lists via domain blacklisting, lightweight pipeline management

## Reverse Email Lookup
- **What it does**: Find person and company data from an email address — returns name, title, company, social profiles, and enrichment data
- **Use cases**: Identifying unknown inbound leads, enriching email-only records, researching contacts who have engaged with your content

## Phone Numbers
- **What it does**: Access mobile and direct phone numbers as an add-on credit type — 5 free phone credits per month on paid plans
- **Credit cost**: 1 phone credit per phone number revealed
- **Use cases**: Multi-channel outreach (email + phone), finding direct dials for high-priority prospects, supplementing email outreach with phone follow-ups

## Team Collaboration
- **What it does**: Share templates, campaigns, lists, and credits across team members with visibility into team activity and ownership-based filtering
- **Key features**: Shared template library, shared campaign access, team credit pool, activity visibility across team members, ownership-based filtering to see your leads vs. team leads
- **Use cases**: Coordinating outbound across SDR teams, sharing proven templates, managing team credit allocation, preventing duplicate outreach

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Contact** | Person record with email and enrichment data | email, first_name, last_name, title, company, industry, location, phone, linkedin_url, custom_properties |
| **Company** | Organization record with firmographic data | name, domain, industry, size, revenue, tech_stack, location, employee_count |
| **List** | Collection of contacts (static or dynamic) | id, name, contact_count, type, created_at |
| **Sequence** | Multi-step cold email campaign | id, name, steps, status, contacts_count, sent, opened, replied, a_b_variants |
| **Sequence Step** | Individual email in a sequence | id, sequence_id, step_number, subject, body, delay_days, variant |
| **Email Verification** | Verification result for an email | email, status (valid/invalid/catch-all/unknown), deliverability_score |
| **Enrichment Result** | Enrichment output for a contact | email, data_points_found, attributes (40+ fields) |
| **Template** | Reusable email template | id, name, subject, body, shared, created_by |
| **Tag** | Label applied to contacts | id, name, color, contact_count |
| **Phone Lookup** | Phone number result | contact_email, phone_number, phone_type (mobile/direct), confidence |

## API quick reference

- **Base URL**: `https://api.getprospect.com`
- **Authentication**: API key passed in the `apiKey` header — get your key from app.getprospect.com/settings/api
- **Format**: JSON responses
- **Status**: API is marked "still under development" — endpoints may change
- **Key endpoints**:
  - `POST /api/v2/email-finder` — find email by name and domain (V2)
  - `POST /api/v2/email-verifier` — verify email deliverability (V2)
  - `GET /api/v1/lookup-email?email=` — reverse email lookup (find person/company from email)
  - `GET /api/v1/leads/search?query=` — search leads in your account
  - `GET /api/v1/companies/search?query=` — search companies in your account
  - `POST /api/v1/search-by-linkedin` — find contact by LinkedIn URL
  - `POST /api/v1/fast-search` — fast contact search
  - `GET /api/v1/contacts` — list contacts
  - `POST /api/v1/contacts` — create contact
  - `PUT /api/v1/contacts/:id` — update contact
  - `DELETE /api/v1/contacts/:id` — delete contact
  - `GET /api/v1/companies` — list companies
  - `POST /api/v1/companies` — create company
  - `PUT /api/v1/companies/:id` — update company
  - `DELETE /api/v1/companies/:id` — delete company
  - `GET /api/v1/lists` — list management
  - `POST /api/v1/lists` — create list
  - `GET /api/v1/health` — API health check
- **Rate limits**: Not publicly documented — monitor for 429 responses and implement exponential backoff
- **Docs**: API documentation available at getprospect.com; API is still under development so verify endpoints before building production integrations

## Integrations

| Category | Tools |
|----------|-------|
| **CRM** | HubSpot, Salesforce, Pipedrive, Zoho CRM |
| **Sales engagement** | Outreach, Salesloft |
| **Productivity** | Google Sheets, Notion, Airtable |
| **Automation** | Zapier (connect to 6,000+ apps) |
| **Email** | Gmail, Outlook (for cold email sending) |
| **Browser** | Chrome Extension (LinkedIn Email Finder) |
| **API** | REST API with API key auth — integrate with any system that can make HTTP requests |

## Pricing (USD, as of March 2026 — verify current pricing at getprospect.com)

| Plan | Price | Emails/mo | Verifications/mo | Phone credits/mo | Key features |
|------|-------|-----------|-------------------|------------------|--------------|
| **Free** | $0 | 50 | 100 | 0 | Basic access, limited features |
| **Starter** | $49/mo | 1,000 | 2,000 | 5 | Full feature access |
| **Growth 5K** | $99/mo | 5,000 | 10,000 | 5 | Higher volume |
| **Growth 20K** | $199/mo | 20,000 | — | 5 | High volume |
| **Growth 50K** | $399/mo | 50,000 | — | 5 | Enterprise volume |

**Key pricing notes**:
- **Credits roll over** — unused email and verification credits carry forward to the next billing period.
- **Annual billing saves ~30%** compared to monthly pricing.
- **Add-on verification credits** are available for purchase separately and do not expire.
- **Phone credits**: 5 free per month on paid plans, 0 on Free. Additional phone credits available as add-on purchases.
- **1 email credit = 1 valid email found** or 1 contact enriched. **1 verification credit = 1 email verified.**
