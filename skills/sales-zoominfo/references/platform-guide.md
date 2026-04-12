# ZoomInfo Platform Guide

## SalesOS

The core prospecting and intelligence product.

### Search & Prospecting
- **Advanced Search** — filter by 300+ attributes: company size, revenue, industry, technology, location, job title, seniority, department, funding, news triggers
- **Boolean Search** — combine filters with AND/OR/NOT for precision targeting
- **Saved Searches** — save filter combinations, receive alerts when new matches appear
- **Org Charts** — visualize reporting hierarchies, identify decision-makers and buying committee members
- **News & Alerts** — track company events (funding, leadership changes, expansion) as prospecting triggers
- **Scoops** — pre-built buying signals: projects, initiatives, pain points reported by ZoomInfo's research team

### Enrichment
- **Contact Enrich** — pass partial records (name + company), get back verified email, direct dial, title, department, seniority
- **Company Enrich** — firmographic data: revenue, employee count, industry, sub-industry, SIC/NAICS codes, tech stack, location
- **Bulk Enrich** — enrich up to 25 records per API call, or use in-platform bulk operations
- **Auto-Enrich** — configure rules to enrich new CRM records automatically on creation
- **Credit system** — enrichment consumes credits; monitor via Usage API or in-platform dashboard

### Buyer Intent
- **Intent signals** — tracks 4,000+ topics across the web; surfaces companies actively researching topics relevant to your product
- **Topic configuration** — select intent topics in ZoomInfo admin; these determine which signals you receive
- **Intent scoring** — companies scored by signal strength; "Spike" indicates surge vs baseline
- **Recommended Contacts** — intent enrichment returns suggested contacts at companies showing intent
- **Alerts** — configure email/Slack alerts when target accounts show intent spikes

### Engage (Sales Engagement)
- **Sequences** — multi-step email + call + LinkedIn sequences with automated follow-up
- **Email templates** — personalization variables, A/B testing, template library
- **Dialer** — built-in power dialer with local presence, call recording, voicemail drop
- **Task management** — automated task creation for manual steps (LinkedIn, research)
- **Analytics** — open/click/reply rates, sequence performance, rep activity metrics

### Conversation Intelligence
- **Chorus** (acquired) — call recording, transcription, and AI analysis
- **Deal insights** — tracks mentions of competitors, pricing, next steps, objections
- **Coaching** — highlights talk-to-listen ratio, longest monologue, question frequency
- **CRM sync** — auto-logs call summaries and key moments to CRM records

## MarketingOS

B2B marketing-specific features.

### Advertising
- **Display ads** — target accounts across programmatic ad networks based on ZoomInfo data
- **Audience Builder** — create audiences from ZoomInfo segments: intent, firmographic, technographic
- **Cross-channel** — display, social (LinkedIn, Facebook), connected TV
- **ABM campaigns** — target specific account lists with tailored creative
- **Retargeting** — re-engage website visitors identified by WebSights

### FormComplete
- **Form shortening** — auto-fill form fields using ZoomInfo data when a visitor's email is recognized
- **Progressive profiling** — reduce form fields to 2-3; ZoomInfo enriches the rest
- **Lead capture** — even partial submissions get enriched with full contact/company data
- **Integration** — works with Marketo, HubSpot, Pardot, and custom forms

### Chat (Website Visitor Engagement)
- **Chatbot** — trigger conversations based on visitor firmographic data (identified via WebSights)
- **Routing** — route high-value visitors to the right sales rep based on territory/account ownership
- **Meeting booking** — let visitors book meetings directly from chat

### WebSights
- **Anonymous visitor ID** — identify companies visiting your website using IP-to-company matching
- **Visitor analytics** — see which pages target accounts are viewing, session frequency, time on site
- **Alerts** — get notified when target accounts visit key pages (pricing, demo, case studies)
- **Integration** — feed visitor data into CRM, marketing automation, or advertising audiences

## OperationsOS

Data management and orchestration.

### Data Orchestration
- **Workflows** — build automated data flows: when X happens → enrich → route → update CRM
- **Matching** — fuzzy match incoming records to existing CRM records before creating duplicates
- **Normalization** — standardize job titles, industries, company names across your database
- **Routing** — assign leads to reps based on territory, account ownership, round-robin, or custom rules

### CRM Hygiene
- **Deduplication** — identify and merge duplicate contacts, leads, and accounts
- **Data decay management** — flag stale records (job changes, company changes) and auto-refresh
- **Field completeness** — identify records missing critical fields and trigger enrichment
- **Compliance** — manage opt-outs and do-not-contact lists across your database

## Copilot

AI-powered sales assistant (Elite plan).

- **Next-best-action** — AI recommends which accounts to prioritize and what action to take
- **Deal predictions** — forecasts deal outcomes based on engagement signals, intent, and activity
- **Pipeline management** — surfaces at-risk deals, stalled opportunities, and buying committee gaps
- **Auto-research** — generates account briefs and talking points before meetings
- **Integration** — surfaces recommendations in CRM, email, and Engage

## Data model

| Object | Key fields | Notes |
|--------|-----------|-------|
| Contact | personId, firstName, lastName, email, phone, directPhoneDoNotCall, jobTitle, managementLevel, department, companyId | personId is the unique identifier; email may have multiple (work, personal) |
| Company | companyId, companyName, website, revenue, employeeCount, industry, subIndustry, sicCode, naicsCode, techStack | revenue and employeeCount are ranges in search, exact in enrich |
| Intent | companyId, topicId, topicName, signalScore, signalStartDate, audienceStrength | signalScore is relative to baseline; "Spike" = above normal |
| Scoops | scoopId, topicName, companyId, publishedDate, description | Pre-researched buying signals from ZoomInfo research team |
| News | newsId, companyId, headline, category, publishedDate | Categories: funding, acquisition, expansion, leadership, product launch |

## API quick reference

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

## Integrations

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
