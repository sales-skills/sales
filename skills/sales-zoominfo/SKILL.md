---
name: sales-zoominfo
description: "ZoomInfo platform help — SalesOS, MarketingOS, OperationsOS, Copilot, API, integrations. Use when asking 'how do I do X in ZoomInfo', setting up ZoomInfo searches, configuring ZoomInfo enrichment, ZoomInfo intent, ZoomInfo Engage sequences, ZoomInfo advertising, ZoomInfo FormComplete, ZoomInfo data orchestration, ZoomInfo Copilot, or troubleshooting ZoomInfo. Do NOT use for general enrichment strategy (use /sales-enrich), general intent strategy (use /sales-intent), general cadence design (use /sales-cadence), general data hygiene strategy (use /sales-data-hygiene), or general B2B advertising strategy (use /sales-b2b-advertising)."
argument-hint: "[describe what you need help with in ZoomInfo]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, intent-data, prospecting, platform]
github: "https://github.com/Zoominfo"
---
# ZoomInfo Platform Help

Help the user with ZoomInfo platform questions — SalesOS (prospecting, enrichment, intent, org charts, Engage sequences, conversation intelligence), MarketingOS (B2B advertising, FormComplete, website chat), OperationsOS (data orchestration, CRM hygiene, deduplication), Copilot (AI pipeline management), and API integration.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which ZoomInfo product are you working with?**
   - A) SalesOS — prospecting, enrichment, Engage sequences
   - B) MarketingOS — advertising, FormComplete, chat
   - C) OperationsOS — data orchestration, CRM hygiene
   - D) Copilot — AI-assisted pipeline management
   - E) API — building custom integrations
   - F) Not sure / multiple areas

2. **What's your role?**
   - A) Sales rep or SDR
   - B) Sales manager or director
   - C) Marketing / demand gen
   - D) Rev ops / sales ops
   - E) Developer / engineer
   - F) Admin configuring ZoomInfo

3. **What are you trying to accomplish?**
   - A) Find and export prospect lists
   - B) Enrich existing CRM records
   - C) Set up buyer intent alerts
   - D) Build outbound sequences (Engage)
   - E) Configure advertising audiences
   - F) Clean up / deduplicate CRM data
   - G) Integrate ZoomInfo with CRM or other tools
   - H) Use the API programmatically
   - I) Something else — describe it

## Step 2 — Route or answer directly

If the question is about **strategy** rather than ZoomInfo-specific configuration, route to the appropriate skill:

- General enrichment strategy → `/sales-enrich`
- Buying intent interpretation → `/sales-intent`
- Multi-channel cadence design → `/sales-cadence`
- Account mapping strategy → `/sales-account-map`
- CRM data quality strategy → `/sales-data-hygiene`
- B2B advertising strategy → `/sales-b2b-advertising`
- Call coaching methodology → `/sales-call-review`
- Lead routing rules → `/sales-lead-routing`
- Prospect list strategy → `/sales-prospect-list`
- Tool integrations → `/sales-integration`

If the question is ZoomInfo-specific, answer directly using the reference below.

## Step 3 — ZoomInfo platform reference

### SalesOS

The core prospecting and intelligence product.

#### Search & Prospecting
- **Advanced Search** — filter by 300+ attributes: company size, revenue, industry, technology, location, job title, seniority, department, funding, news triggers
- **Boolean Search** — combine filters with AND/OR/NOT for precision targeting
- **Saved Searches** — save filter combinations, receive alerts when new matches appear
- **Org Charts** — visualize reporting hierarchies, identify decision-makers and buying committee members
- **News & Alerts** — track company events (funding, leadership changes, expansion) as prospecting triggers
- **Scoops** — pre-built buying signals: projects, initiatives, pain points reported by ZoomInfo's research team

#### Enrichment
- **Contact Enrich** — pass partial records (name + company), get back verified email, direct dial, title, department, seniority
- **Company Enrich** — firmographic data: revenue, employee count, industry, sub-industry, SIC/NAICS codes, tech stack, location
- **Bulk Enrich** — enrich up to 25 records per API call, or use in-platform bulk operations
- **Auto-Enrich** — configure rules to enrich new CRM records automatically on creation
- **Credit system** — enrichment consumes credits; monitor via Usage API or in-platform dashboard

#### Buyer Intent
- **Intent signals** — tracks 4,000+ topics across the web; surfaces companies actively researching topics relevant to your product
- **Topic configuration** — select intent topics in ZoomInfo admin; these determine which signals you receive
- **Intent scoring** — companies scored by signal strength; "Spike" indicates surge vs baseline
- **Recommended Contacts** — intent enrichment returns suggested contacts at companies showing intent
- **Alerts** — configure email/Slack alerts when target accounts show intent spikes

#### Engage (Sales Engagement)
- **Sequences** — multi-step email + call + LinkedIn sequences with automated follow-up
- **Email templates** — personalization variables, A/B testing, template library
- **Dialer** — built-in power dialer with local presence, call recording, voicemail drop
- **Task management** — automated task creation for manual steps (LinkedIn, research)
- **Analytics** — open/click/reply rates, sequence performance, rep activity metrics

#### Conversation Intelligence
- **Chorus** (acquired) — call recording, transcription, and AI analysis
- **Deal insights** — tracks mentions of competitors, pricing, next steps, objections
- **Coaching** — highlights talk-to-listen ratio, longest monologue, question frequency
- **CRM sync** — auto-logs call summaries and key moments to CRM records

### MarketingOS

B2B marketing-specific features.

#### Advertising
- **Display ads** — target accounts across programmatic ad networks based on ZoomInfo data
- **Audience Builder** — create audiences from ZoomInfo segments: intent, firmographic, technographic
- **Cross-channel** — display, social (LinkedIn, Facebook), connected TV
- **ABM campaigns** — target specific account lists with tailored creative
- **Retargeting** — re-engage website visitors identified by WebSights

#### FormComplete
- **Form shortening** — auto-fill form fields using ZoomInfo data when a visitor's email is recognized
- **Progressive profiling** — reduce form fields to 2-3; ZoomInfo enriches the rest
- **Lead capture** — even partial submissions get enriched with full contact/company data
- **Integration** — works with Marketo, HubSpot, Pardot, and custom forms

#### Chat (Website Visitor Engagement)
- **Chatbot** — trigger conversations based on visitor firmographic data (identified via WebSights)
- **Routing** — route high-value visitors to the right sales rep based on territory/account ownership
- **Meeting booking** — let visitors book meetings directly from chat

#### WebSights
- **Anonymous visitor ID** — identify companies visiting your website using IP-to-company matching
- **Visitor analytics** — see which pages target accounts are viewing, session frequency, time on site
- **Alerts** — get notified when target accounts visit key pages (pricing, demo, case studies)
- **Integration** — feed visitor data into CRM, marketing automation, or advertising audiences

### OperationsOS

Data management and orchestration.

#### Data Orchestration
- **Workflows** — build automated data flows: when X happens → enrich → route → update CRM
- **Matching** — fuzzy match incoming records to existing CRM records before creating duplicates
- **Normalization** — standardize job titles, industries, company names across your database
- **Routing** — assign leads to reps based on territory, account ownership, round-robin, or custom rules

#### CRM Hygiene
- **Deduplication** — identify and merge duplicate contacts, leads, and accounts
- **Data decay management** — flag stale records (job changes, company changes) and auto-refresh
- **Field completeness** — identify records missing critical fields and trigger enrichment
- **Compliance** — manage opt-outs and do-not-contact lists across your database

### Copilot

AI-powered sales assistant (Elite plan).

- **Next-best-action** — AI recommends which accounts to prioritize and what action to take
- **Deal predictions** — forecasts deal outcomes based on engagement signals, intent, and activity
- **Pipeline management** — surfaces at-risk deals, stalled opportunities, and buying committee gaps
- **Auto-research** — generates account briefs and talking points before meetings
- **Integration** — surfaces recommendations in CRM, email, and Engage

### Data model

| Object | Key fields | Notes |
|--------|-----------|-------|
| Contact | personId, firstName, lastName, email, phone, directPhoneDoNotCall, jobTitle, managementLevel, department, companyId | personId is the unique identifier; email may have multiple (work, personal) |
| Company | companyId, companyName, website, revenue, employeeCount, industry, subIndustry, sicCode, naicsCode, techStack | revenue and employeeCount are ranges in search, exact in enrich |
| Intent | companyId, topicId, topicName, signalScore, signalStartDate, audienceStrength | signalScore is relative to baseline; "Spike" = above normal |
| Scoops | scoopId, topicName, companyId, publishedDate, description | Pre-researched buying signals from ZoomInfo research team |
| News | newsId, companyId, headline, category, publishedDate | Categories: funding, acquisition, expansion, leadership, product launch |

### API quick reference

| Action | Method | Endpoint | Notes |
|--------|--------|----------|-------|
| Authenticate (PKI) | POST | `/authenticate` | Returns JWT; refresh every 60 min |
| Search Contacts | POST | `/search/contact` | Filter by 300+ attributes |
| Search Companies | POST | `/search/company` | Firmographic + technographic filters |
| Enrich Contact | POST | `/enrich/contact` | Up to 25 records per call |
| Enrich Company | POST | `/enrich/company` | Firmographic data |
| Enrich Intent | POST | `/enrich/intent` | Intent signals for a company |
| Lookup Contact | GET | `/lookup/contact/{personId}` | Full profile by ID |
| Lookup Company | GET | `/lookup/company/{companyId}` | Full company profile |
| Bulk Enrich | POST | `/bulk/enrich` | Async batch enrichment |
| Usage | GET | `/usage` | Credit consumption tracking |
| WebSights | POST | `/websights/search` | Anonymous visitor data |
| Compliance | POST | `/compliance/optout` | Manage opt-out records |

**Base URL**: `https://api.zoominfo.com`
**Auth**: PKI (Client ID + Private Key → JWT) or username/password → JWT. Token expires every 60 minutes.
**Rate limits**: Auth: 1 req/s · Standard APIs: 25 req/s · Scaling APIs: 33 req/s
**Rate limit headers**: `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `X-Usage-Record-Limit-Remaining`

See `/sales-zoominfo/references/zoominfo-api-reference.md` for the full API reference.

### Integrations

| Integration | Type | What it does |
|-------------|------|-------------|
| Salesforce | Native app | Bi-directional sync: contacts, accounts, leads, opportunities. Enrich on create. View ZoomInfo data in SF. |
| HubSpot | Native | Contact/company sync, enrich on create, intent data in HubSpot, FormComplete for HubSpot forms |
| Microsoft Dynamics | Native | Contact/account sync, enrichment, intent alerts |
| Marketo | Native | Lead enrichment, audience sync for nurture, FormComplete integration |
| Pardot | Native | Lead enrichment, scoring integration |
| Salesloft | Native | Push contacts to Salesloft cadences directly from ZoomInfo |
| Outreach | Native | Push contacts to Outreach sequences from ZoomInfo |
| Slack | Native | Intent alerts, Scoops notifications, daily digests |
| Zapier | Connector | Trigger on new contacts/companies, enrich records in other tools |
| Pipedrive | Native | Contact/deal sync, enrichment |

## Step 4 — Actionable guidance

Based on the user's goal, provide step-by-step instructions:

### For prospecting (finding new leads)
1. Define your ICP using Advanced Search filters (industry, employee count, revenue, technology)
2. Layer intent signals — filter for companies showing intent on your topics
3. Use Org Charts to identify the buying committee (economic buyer, champion, technical evaluator)
4. Export to CRM or push directly to Engage/Salesloft/Outreach sequences
5. Set up Saved Searches with alerts for new matches

### For enrichment
1. Identify records to enrich (new leads, stale contacts, incomplete accounts)
2. Choose enrichment method: manual (in-platform), bulk (CSV upload), auto (rules-based), or API
3. Map enrichment fields to CRM fields before running bulk operations
4. Monitor credit usage — enrichment consumes credits per record
5. Set up auto-enrich rules for ongoing data freshness

### For intent-based selling
1. Configure your intent topics in ZoomInfo admin (align with your product's problem spaces)
2. Create a Saved Search filtered by intent spike + your ICP criteria
3. Set up Slack/email alerts for target account intent spikes
4. Use Recommended Contacts to find the right people at spiking accounts
5. Trigger Engage sequences or push to your sales engagement platform

### For advertising (MarketingOS)
1. Build audience segments using firmographic + intent + technographic filters
2. Create campaigns targeting those audiences across display, LinkedIn, Facebook
3. Set up WebSights to track which target accounts visit your site after seeing ads
4. Retarget engaged visitors with bottom-of-funnel creative
5. Measure with ZoomInfo attribution — which accounts progressed after ad exposure

### For data orchestration (OperationsOS)
1. Audit current CRM data quality — field completeness, duplicate rate, decay rate
2. Set up matching rules to prevent future duplicates
3. Configure normalization rules for job titles, industries, company names
4. Build enrichment workflows: new record → match → enrich → route
5. Schedule recurring data hygiene jobs (monthly dedup, quarterly refresh)

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Intent topics are subscription-dependent** — you only receive intent signals for topics configured in your ZoomInfo account. If a user asks about intent data they're not seeing, check their topic configuration first — the API won't return topics that aren't in their subscription.

2. **Credit system is complex** — different actions consume different credit amounts (search vs enrich vs export). Bulk operations can burn through credits fast. Always check `X-Usage-Record-Limit-Remaining` header or the Usage API before large operations.

3. **JWT expires every 60 minutes** — API integrations MUST handle token refresh. A common failure mode is hardcoding a token and having it silently expire. Implement auto-refresh logic that checks the JWT expiration claim.

4. **Copilot is Elite-only** — AI features (next-best-action, deal predictions, auto-research) require the Elite plan (~$39,995/yr). Don't recommend Copilot features to users who may be on Professional or Advanced plans.

5. **WebSights identifies companies, not individuals** — IP-to-company matching reveals the organization, not the specific person. Users sometimes expect individual visitor identification. Pair WebSights with Contact Search to find the right people at identified companies.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — enrichment strategy across all providers, waterfall enrichment
- `/sales-intent` — interpreting buying signals and prioritizing accounts
- `/sales-account-map` — mapping buying committees and org charts
- `/sales-cadence` — designing multi-channel outbound sequences
- `/sales-call-review` — coaching from recorded sales calls
- `/sales-live-chat` — website chat strategy and implementation
- `/sales-data-hygiene` — CRM data quality, deduplication, and data decay management
- `/sales-b2b-advertising` — account-based advertising strategy across platforms
- `/sales-prospect-list` — building targeted prospect lists
- `/sales-integration` — connecting ZoomInfo to CRM and other tools
- `/sales-lead-routing` — lead assignment and territory rules
- `/sales-deliverability` — email deliverability for Engage sequences
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up intent-based prospecting
**User says**: "I want to find companies showing buying intent for cybersecurity solutions and get the right contacts there"
**Skill does**: Walks through configuring intent topics (endpoint security, SIEM, zero trust, etc.), building a Saved Search with ICP filters + intent spike, using Recommended Contacts to find security decision-makers, and setting up Slack alerts for new spikes.
**Result**: User has an intent-triggered prospecting workflow that surfaces in-market accounts with the right contacts.

### Example 2: Bulk CRM enrichment
**User says**: "We have 15,000 contacts in Salesforce with missing phone numbers and stale job titles. How do I clean this up in ZoomInfo?"
**Skill does**: Recommends OperationsOS data orchestration approach — export stale records, run bulk enrichment via API or in-platform, map fields back to Salesforce, set up auto-enrich rules for ongoing freshness. Warns about credit consumption at scale.
**Result**: User has a plan to refresh 15K records and prevent future data decay.

### Example 3: API integration for custom enrichment
**User says**: "I'm building a lead scoring system and need to pull ZoomInfo data via API whenever a new lead comes in"
**Skill does**: Provides API authentication setup (PKI method), shows the Contact Enrich endpoint with request/response format, explains credit implications, recommends implementing JWT refresh logic and rate limit handling.
**Result**: User has working API integration code for real-time lead enrichment.

## Troubleshooting

### Intent data not showing for target accounts
**Symptom**: User configured intent topics but isn't seeing signals for accounts they expect
**Cause**: Intent topics must match ZoomInfo's taxonomy exactly. Also, small companies may not generate enough web activity to trigger intent signals.
**Solution**: Review intent topic configuration in ZoomInfo admin. Check that topics align with ZoomInfo's available taxonomy (4,000+ topics). For small companies, use Scoops and News alerts as supplementary buying signals instead of relying solely on intent.

### API returns 401 after working initially
**Symptom**: API calls that were working suddenly return 401 Unauthorized
**Cause**: JWT token expired (60-minute lifespan)
**Solution**: Implement token refresh logic — check the `exp` claim in the JWT payload and re-authenticate before expiration. Use the PKI auth method for programmatic access (more reliable than username/password for automated systems).

### Enrichment returning incomplete data
**Symptom**: Bulk enrichment returns records with missing fields (no phone, no email)
**Cause**: ZoomInfo's coverage varies by contact — not every person has a verified direct dial or email. Also, some fields are plan-gated.
**Solution**: Check your plan's data access level. For missing contacts, use waterfall enrichment (ZoomInfo → Apollo → Lusha) via `/sales-enrich`. For missing company data, try the Company Enrich endpoint with the company's domain as the identifier (higher match rate than company name).
