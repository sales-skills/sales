# Clearbit Platform Guide

## Data Model

| Entity | Key | Attributes | Source |
|--------|-----|------------|--------|
| Person | email | name, title, role, seniority, company, employment history, social profiles (LinkedIn, Twitter, GitHub), location, bio, avatar, time zone | Person API |
| Company | domain | name, legal name, industry (SIC/NAICS/GICS), sector, sub-industry, employee count, revenue range, funding (raised, stage), tech stack, type (private/public/nonprofit), location (HQ + geo), logo, social profiles, phone, description, founded year, parent company | Company API |
| Reveal | IP address | company match (domain, name, industry, employee count, revenue, location, tech stack), confidence score | Reveal API |
| Prospect | domain + filters | name, email, title, role, seniority, verified status | Prospector API |

## Person Enrichment

Look up a person by email to get 80+ attributes:

```
GET https://person.clearbit.com/v2/people/find?email={email}
```

**Streaming** (holds connection up to 60s instead of 202 queue):
```
GET https://person-stream.clearbit.com/v2/people/find?email={email}
```

**Key attributes returned**: `name.fullName`, `name.givenName`, `name.familyName`, `employment.title`, `employment.role`, `employment.seniority`, `employment.company`, `employment.domain`, `geo.city`, `geo.state`, `geo.country`, `linkedin.handle`, `twitter.handle`, `github.handle`, `avatar`, `bio`, `timeZone`

## Company Enrichment

Look up a company by domain to get 100+ firmographic attributes:

```
GET https://company.clearbit.com/v2/companies/find?domain={domain}
```

**Streaming**:
```
GET https://company-stream.clearbit.com/v2/companies/find?domain={domain}
```

**Key attributes returned**: `name`, `legalName`, `industry`, `sector`, `subIndustry`, `category.industryGroup`, `tags`, `metrics.employees`, `metrics.estimatedAnnualRevenue`, `metrics.raised`, `metrics.alexaUsRank`, `tech` (array of technologies), `type` (private/public/nonprofit/education/government), `geo`, `logo`, `url`, `phone`, `foundedYear`, `parent.domain`

## Combined Enrichment

Look up both person and company in one call:

```
GET https://person.clearbit.com/v2/combined/find?email={email}
```

Returns `{ person: {...}, company: {...} }`.

## Reveal (IP Intelligence)

Identify the company behind a website visitor's IP:

```
GET https://reveal.clearbit.com/v1/companies/find?ip={ip}
```

Returns company firmographics + a confidence score. Use for:
- De-anonymizing website traffic
- Personalizing website content by company
- Triggering sales alerts when target accounts visit
- Feeding intent models with visit data

## Prospector

Search for contacts at a company by role, seniority, title, or location:

```
GET https://prospector.clearbit.com/v1/people/search?domain={domain}
```

**Filter parameters**: `role`, `roles[]`, `seniority`, `seniorities[]`, `title`, `titles[]`, `city`, `cities[]`, `state`, `states[]`, `country`, `countries[]`, `name`, `page`, `page_size`, `suppression` (domain to exclude)

## Name to Domain

Resolve a company name to its website domain:

```
GET https://company.clearbit.com/v1/domains/find?name={company_name}
```

Returns `{ name, domain, logo }`. Useful for building prospect lists from company names without domains.

## Form Shortening

Auto-populate form fields when a visitor enters their email:
1. User enters email in form field
2. JavaScript calls Person Enrichment API
3. Pre-fill company, name, title, phone fields
4. User confirms and submits shorter form

Reduces form fields from 8-10 to 1-2, improving conversion rates by 20-50%.

## Risk API

Score signups for fraud risk:

```
GET https://risk.clearbit.com/v1/calculate?email={email}&ip={ip}&name={name}
```

Returns risk score and signals (disposable email, IP proxy, new domain, etc.).

## Breeze Intelligence (HubSpot)

For HubSpot users, Clearbit is integrated as **Breeze Intelligence**:
- **Auto-enrichment** — new contacts/companies automatically enriched in HubSpot
- **Bulk enrichment** — enrich existing records in batches
- **Form shortening** — built into HubSpot forms
- **Buyer intent** — Reveal data powers HubSpot's intent features
- **40+ attributes** — firmographic, demographic, technographic data on every record

**Credit system**: 100 credits = $45/mo, 1,000 = $150/mo, 10,000 = $700/mo. One credit per record enriched. Credits reset monthly (no rollover). Requires paid HubSpot subscription.

## API Quick Reference

| API | Base URL | Method | Key param |
|-----|----------|--------|-----------|
| Person | `person.clearbit.com/v2/people/find` | GET | `email` |
| Person (stream) | `person-stream.clearbit.com/v2/people/find` | GET | `email` |
| Company | `company.clearbit.com/v2/companies/find` | GET | `domain` |
| Company (stream) | `company-stream.clearbit.com/v2/companies/find` | GET | `domain` |
| Combined | `person.clearbit.com/v2/combined/find` | GET | `email` |
| Reveal | `reveal.clearbit.com/v1/companies/find` | GET | `ip` |
| Prospector | `prospector.clearbit.com/v1/people/search` | GET | `domain` |
| Name to Domain | `company.clearbit.com/v1/domains/find` | GET | `name` |
| Risk | `risk.clearbit.com/v1/calculate` | GET | `email`, `ip` |

**Auth**: HTTP Basic Auth — API key as username, empty password. Or `Authorization: Bearer {api_key}`.

**Rate limit**: 600 requests/minute per API (streaming and Reveal may differ).

## Integrations

| Integration | Type | What it does |
|-------------|------|-------------|
| HubSpot | Native (Breeze Intelligence) | Auto-enrich contacts/companies, form shortening, intent |
| Salesforce | Native | Enrich leads/contacts/accounts, create enrichment workflows |
| Segment | Native | Enrichment pushed to all connected destinations |
| Zapier | Triggers + actions | Enrich person/company on trigger, push data to 8,000+ apps |
| Make (Integromat) | Module | Clearbit enrichment in automation scenarios |
| Marketo | Native | Lead enrichment in marketing automation |
| Slack | Native (clearbit-slack) | Notify channels when target accounts visit site |
| Webhooks | API | Async enrichment delivery for queued lookups |
