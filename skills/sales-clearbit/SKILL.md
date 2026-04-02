---
name: sales-clearbit
description: "Clearbit (HubSpot) platform help — Person Enrichment, Company Enrichment, Reveal (IP-to-company), Prospector, Name to Domain, Form Shortening, Risk API, Breeze Intelligence, API & integrations. Use when asking 'how do I enrich leads with Clearbit', 'Clearbit API', 'Clearbit Reveal', 'Clearbit Prospector', 'Breeze Intelligence', 'Clearbit form shortening', 'Clearbit HubSpot'. Do NOT use for enrichment strategy across tools (use /sales-enrich), intent/visitor identification strategy (use /sales-intent), building prospect lists across tools (use /sales-prospect-list), or lead scoring strategy (use /sales-lead-score)."
argument-hint: "[describe what you need help with in Clearbit]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Clearbit Platform Help

Help the user with Clearbit platform questions — Person and Company Enrichment, Reveal IP intelligence, Prospector contact search, Name to Domain, Form Shortening, Risk API, Breeze Intelligence (HubSpot), and API integration.

**Important context**: Clearbit was acquired by HubSpot in December 2023 and rebranded as **Breeze Intelligence** within HubSpot. The standalone API still works, but product investment has shifted to HubSpot. Non-HubSpot users can still use the API directly; HubSpot users get Breeze Intelligence as an add-on.

## Step 1 — Gather context

**What area of Clearbit do you need help with?**
- a) Person Enrichment — look up a person by email
- b) Company Enrichment — look up a company by domain
- c) Reveal — identify companies visiting your website by IP
- d) Prospector — find contacts at a target company
- e) Name to Domain — resolve company name to website domain
- f) Form Shortening — auto-populate form fields from email
- g) Risk API — fraud scoring for signups
- h) Breeze Intelligence — HubSpot-integrated enrichment
- i) API setup and integration
- j) Something else

**What's your CRM/stack?**
- a) HubSpot (Breeze Intelligence available)
- b) Salesforce
- c) Other CRM (Pipedrive, Close, etc.)
- d) Custom app / API-only
- e) Not sure

**What's your goal?**
- a) Enrich existing CRM records with firmographic/demographic data
- b) Identify anonymous website visitors
- c) Score and route leads in real-time
- d) Shorten forms to improve conversion
- e) Build prospect lists by role/company
- f) Integrate Clearbit data into my app via API

## Step 2 — Route or answer directly

If the question is about **enrichment strategy across tools** (not Clearbit-specific), route to `/sales-enrich`.
If the question is about **intent signals and visitor identification strategy**, route to `/sales-intent`.
If the question is about **building prospect lists across tools**, route to `/sales-prospect-list`.
If the question is about **lead scoring model design**, route to `/sales-lead-score`.
If the question is about **CRM data quality and dedup**, route to `/sales-data-hygiene`.
If the question is about **connecting Clearbit to other tools**, route to `/sales-integration`.

Otherwise, answer directly using the reference below.

## Step 3 — Clearbit platform reference

### Data model

| Entity | Key | Attributes | Source |
|--------|-----|------------|--------|
| Person | email | name, title, role, seniority, company, employment history, social profiles (LinkedIn, Twitter, GitHub), location, bio, avatar, time zone | Person API |
| Company | domain | name, legal name, industry (SIC/NAICS/GICS), sector, sub-industry, employee count, revenue range, funding (raised, stage), tech stack, type (private/public/nonprofit), location (HQ + geo), logo, social profiles, phone, description, founded year, parent company | Company API |
| Reveal | IP address | company match (domain, name, industry, employee count, revenue, location, tech stack), confidence score | Reveal API |
| Prospect | domain + filters | name, email, title, role, seniority, verified status | Prospector API |

### Person Enrichment

Look up a person by email to get 80+ attributes:

```
GET https://person.clearbit.com/v2/people/find?email={email}
```

**Streaming** (holds connection up to 60s instead of 202 queue):
```
GET https://person-stream.clearbit.com/v2/people/find?email={email}
```

**Key attributes returned**: `name.fullName`, `name.givenName`, `name.familyName`, `employment.title`, `employment.role`, `employment.seniority`, `employment.company`, `employment.domain`, `geo.city`, `geo.state`, `geo.country`, `linkedin.handle`, `twitter.handle`, `github.handle`, `avatar`, `bio`, `timeZone`

### Company Enrichment

Look up a company by domain to get 100+ firmographic attributes:

```
GET https://company.clearbit.com/v2/companies/find?domain={domain}
```

**Streaming**:
```
GET https://company-stream.clearbit.com/v2/companies/find?domain={domain}
```

**Key attributes returned**: `name`, `legalName`, `industry`, `sector`, `subIndustry`, `category.industryGroup`, `tags`, `metrics.employees`, `metrics.estimatedAnnualRevenue`, `metrics.raised`, `metrics.alexaUsRank`, `tech` (array of technologies), `type` (private/public/nonprofit/education/government), `geo`, `logo`, `url`, `phone`, `foundedYear`, `parent.domain`

### Combined Enrichment

Look up both person and company in one call:

```
GET https://person.clearbit.com/v2/combined/find?email={email}
```

Returns `{ person: {...}, company: {...} }`.

### Reveal (IP Intelligence)

Identify the company behind a website visitor's IP:

```
GET https://reveal.clearbit.com/v1/companies/find?ip={ip}
```

Returns company firmographics + a confidence score. Use for:
- De-anonymizing website traffic
- Personalizing website content by company
- Triggering sales alerts when target accounts visit
- Feeding intent models with visit data

### Prospector

Search for contacts at a company by role, seniority, title, or location:

```
GET https://prospector.clearbit.com/v1/people/search?domain={domain}
```

**Filter parameters**: `role`, `roles[]`, `seniority`, `seniorities[]`, `title`, `titles[]`, `city`, `cities[]`, `state`, `states[]`, `country`, `countries[]`, `name`, `page`, `page_size`, `suppression` (domain to exclude)

### Name to Domain

Resolve a company name to its website domain:

```
GET https://company.clearbit.com/v1/domains/find?name={company_name}
```

Returns `{ name, domain, logo }`. Useful for building prospect lists from company names without domains.

### Form Shortening

Auto-populate form fields when a visitor enters their email:
1. User enters email in form field
2. JavaScript calls Person Enrichment API
3. Pre-fill company, name, title, phone fields
4. User confirms and submits shorter form

Reduces form fields from 8-10 to 1-2, improving conversion rates by 20-50%.

### Risk API

Score signups for fraud risk:

```
GET https://risk.clearbit.com/v1/calculate?email={email}&ip={ip}&name={name}
```

Returns risk score and signals (disposable email, IP proxy, new domain, etc.).

### Breeze Intelligence (HubSpot)

For HubSpot users, Clearbit is integrated as **Breeze Intelligence**:
- **Auto-enrichment** — new contacts/companies automatically enriched in HubSpot
- **Bulk enrichment** — enrich existing records in batches
- **Form shortening** — built into HubSpot forms
- **Buyer intent** — Reveal data powers HubSpot's intent features
- **40+ attributes** — firmographic, demographic, technographic data on every record

**Credit system**: 100 credits = $45/mo, 1,000 = $150/mo, 10,000 = $700/mo. One credit per record enriched. Credits reset monthly (no rollover). Requires paid HubSpot subscription.

### API quick reference

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

### Integrations

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

## Step 4 — Actionable guidance

### Setting up Clearbit enrichment

1. **Get your API key** — sign up at clearbit.com, find key in account settings
2. **Choose sync vs. async** — use streaming endpoints (`-stream.clearbit.com`) for real-time; use standard endpoints + webhooks for batch/async
3. **Start with Combined endpoint** — `person.clearbit.com/v2/combined/find?email={email}` returns both person and company in one call
4. **Handle 202 responses** — if not using streaming, a 202 means the lookup is queued. Set up a webhook URL to receive results when ready
5. **Cache results** — enrichment data is valid for 30-90 days. Cache locally to avoid burning API calls on repeated lookups
6. **Map to CRM fields** — create custom fields in your CRM for key attributes (employee count, revenue, industry, tech stack)

### Reveal setup for website visitor identification

1. **Add the Clearbit JavaScript tag** to your website (or use Segment)
2. **Configure IP-to-company matching** — Reveal identifies the company, not the individual
3. **Set up alerts** — trigger Slack notifications or CRM tasks when target accounts visit
4. **Filter internal traffic** — exclude your own company's IP ranges
5. **Combine with Prospector** — once Reveal identifies a company, use Prospector to find the right contact

### Breeze Intelligence setup (HubSpot users)

1. **Purchase credits** — go to HubSpot Settings → Account Management → Breeze Intelligence
2. **Enable auto-enrichment** — toggle on for new contacts and companies
3. **Map fields** — Breeze auto-maps to standard HubSpot properties; review custom property mapping
4. **Set up form shortening** — enable on HubSpot forms to auto-populate fields from email
5. **Monitor credit usage** — credits don't roll over; adjust volume to match monthly needs

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **HubSpot lock-in**: Breeze Intelligence requires a paid HubSpot subscription. If you use Salesforce, Pipedrive, or any other CRM, you must use the standalone Clearbit API (not Breeze Intelligence). The standalone API's future is uncertain post-acquisition.
- **Credits don't roll over**: Breeze Intelligence credits reset monthly. If you buy 1,000 credits and use 200, you lose 800. Right-size your plan carefully.
- **Reveal identifies companies, not people**: The Reveal API returns company data from IP addresses, not individual visitors. You still need Prospector or another tool to find the specific contact at that company.
- **SDK deprecation**: The official Ruby, Node.js, Python, and Go SDKs are all deprecated. Clearbit recommends direct HTTP requests. If your code uses these SDKs, plan migration to direct API calls.
- **202 responses require webhooks**: Standard (non-streaming) enrichment endpoints return 202 if the person/company isn't in Clearbit's cache. You must configure a webhook URL to receive async results, or use the streaming endpoints which hold the connection open.

## Step 5 — Related skills

- `/sales-enrich` — Enrichment strategy across tools (Clearbit, ZoomInfo, Apollo, Clay, etc.)
- `/sales-intent` — Buying signals and visitor identification strategy (Reveal feeds intent models)
- `/sales-prospect-list` — Build prospect lists across tools (Prospector is one option)
- `/sales-lead-score` — Design lead scoring models using enrichment data
- `/sales-data-hygiene` — CRM data quality, dedup, enrichment automation
- `/sales-audience-growth` — Form optimization and conversion (form shortening)
- `/sales-integration` — Connect Clearbit to CRM, marketing automation, and other tools
- `/sales-zoominfo` — ZoomInfo platform (primary competitor for enterprise enrichment)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Real-time lead enrichment via API
**User says**: "I want to enrich new leads in real-time as they submit our website form — how do I set up Clearbit for this?"
**Skill does**: Recommends the Combined streaming endpoint (`person-stream.clearbit.com/v2/combined/find`), explains authentication, walks through the response structure, shows how to map key fields (company size, revenue, industry, title) to CRM properties, and suggests caching results to avoid redundant API calls
**Result**: Working real-time enrichment pipeline that enriches leads on form submission

### Example 2: Identify target accounts visiting the website
**User says**: "We want to know when our target accounts are browsing our pricing page so sales can follow up"
**Skill does**: Sets up Reveal API integration, explains IP-to-company matching, configures Slack alerts for target account visits filtered by page URL, recommends combining with Prospector to find the right contact, and suggests adding visit data to CRM account records
**Result**: Sales team gets real-time alerts when target accounts show buying intent on the website

### Example 3: Breeze Intelligence setup in HubSpot
**User says**: "We just got HubSpot Professional and want to use Clearbit enrichment — how do I set up Breeze Intelligence?"
**Skill does**: Walks through purchasing credits, enabling auto-enrichment for new contacts/companies, configuring form shortening on HubSpot forms, mapping enrichment fields to HubSpot properties, and monitoring credit usage to avoid waste
**Result**: HubSpot CRM automatically enriches every new contact with firmographic and demographic data

## Troubleshooting

### Enrichment returns 202 with no data
**Symptom**: API call returns HTTP 202 instead of enrichment data
**Cause**: The person or company isn't in Clearbit's cache and needs to be looked up asynchronously
**Solution**: Either switch to the streaming endpoint (`person-stream.clearbit.com`) which holds the connection open for up to 60 seconds, or configure a webhook URL in your Clearbit account settings to receive results when the async lookup completes.

### Reveal returns null for most visitors
**Symptom**: The Reveal API returns no company match for a large percentage of website visitors
**Cause**: Reveal can only match IP addresses that belong to known business ISPs. Residential IPs, VPNs, and mobile networks can't be matched to companies. Match rates are typically 20-30% of total traffic.
**Solution**: This is expected behavior — focus on the matched visits rather than the miss rate. Combine with UTM tracking, form fills, and other signals to identify the remaining visitors.

### Breeze Intelligence credits depleting too fast
**Symptom**: Monthly credits run out before the billing cycle resets
**Cause**: Auto-enrichment is enriching every new contact, including low-value leads from form spam, imported lists, or internal test records
**Solution**: Set up enrichment rules to only enrich contacts that meet minimum criteria (e.g., business email domain, specific form source, lead score threshold). Disable auto-enrichment for imported lists and use manual bulk enrichment instead.
