---
name: sales-enrich
description: "Enrich contacts and companies with verified emails, phones, and firmographic data. Also covers CRM data hygiene, deduplication, and bulk enrichment. Use when enriching leads, finding email addresses, cleaning CRM data, doing bulk enrichment, optimizing enrichment credits, setting up auto-enrichment, or fixing stale contact data. Do NOT use for building new prospect lists from scratch (use /sales-prospect-list), interpreting buying signals (use /sales-intent), or general Apollo platform help (use /sales-apollo)."
argument-hint: "[describe what data you need — e.g., 'enrich 500 leads with emails' or 'clean up stale CRM contacts']"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Enrich Contacts & Clean CRM Data

Help the user enrich contacts and companies with verified data, clean stale CRM records, and optimize their enrichment workflow. This skill is platform-agnostic but references Apollo.io as the primary tool. The same strategies apply to ZoomInfo, Clay, Lusha, Cognism, or any enrichment provider.

## Step 1 — Gather context

Ask the user:

1. **What do you need to do?**
   - A) Enrich a list of contacts with emails/phones
   - B) Enrich company/account records with firmographic data
   - C) Clean up stale or incomplete CRM data
   - D) Set up ongoing auto-enrichment
   - E) Deduplicate contacts or accounts
   - F) Verify existing email addresses before a campaign
   - G) Other — describe it

2. **How many records are involved?**
   - A) Under 100 (manual/one-time)
   - B) 100-1,000 (batch job)
   - C) 1,000-10,000 (bulk operation)
   - D) 10,000+ (large-scale cleanup)
   - E) Ongoing (continuous enrichment of new records)

3. **What enrichment tool(s) do you have?**
   - A) Apollo.io
   - B) ZoomInfo
   - C) Clay
   - D) Lusha / Cognism
   - E) Clearbit / Breeze
   - F) Multiple providers (waterfall)
   - G) None yet — recommend one

4. **What data do you need?**
   - A) Email addresses (verified/deliverable)
   - B) Phone numbers (direct/mobile)
   - C) Both email and phone
   - D) Firmographic data (company size, revenue, industry, tech stack)
   - E) All of the above

## Step 2 — Enrichment strategy

Choose the right approach based on volume and frequency:

### Single-record enrichment
- **When**: Researching a specific prospect, manual prospecting
- **How**: Look up individual records in your enrichment tool or via API
- **Credit cost**: 1 credit per person (email), more for phone numbers
- **Best for**: High-value ABM targets, executive-level contacts

### Batch enrichment
- **When**: Enriching a list before launching a campaign
- **How**: Upload CSV or select records in-platform for bulk enrichment
- **Credit cost**: 1 credit per record enriched (plan carefully)
- **Best for**: Campaign prep, list cleaning before outreach

### Auto-enrichment
- **When**: Keeping CRM data fresh continuously
- **How**: Set up rules to enrich new records on creation or on a schedule
- **Credit cost**: Ongoing — budget credits monthly
- **Best for**: Teams with steady lead flow who need data quality without manual effort

### Waterfall enrichment
- **When**: Single provider doesn't have enough coverage
- **How**: Try Provider A first → if no result, try Provider B → then Provider C
- **Credit cost**: Only pay for successful enrichments at each level
- **Best for**: Maximizing coverage when targeting niche personas or international contacts
- **Tools**: Clay is purpose-built for this; Lemlist has built-in waterfall enrichment; Apollo's waterfall enrichment is in beta; Yesware Prospector provides 100M+ contacts as an additional source; Reply.io has a built-in B2B database with 1B+ contacts and data credits for email/phone reveals; Woodpecker Lead Finder provides a B2B database with 1B+ leads and data credits for email finding; Tomba provides 430M+ indexed emails with domain search, email finder, and bulk enrichment; Prospeo provides 280M+ leads with 5-step email verification, company enrichment (50+ fields), and bulk operations (50 records per API call); Hunter.io provides Domain Search (all emails at a company), Email Finder (name+domain → email), and Email Verifier with bulk operations for all three; Mailmo provides email finding with catch-all verification (up to 100% accuracy on catch-all domains) and bulk verification via CSV; Seamless.AI provides 1.8B+ verified emails and 414M+ mobile numbers with real-time verification at point of reveal, CRM Enrich for automated database cleanup, and Autopilot for continuous list building; SafetyMails provides 19-step bulk verification (up to 2M emails), real-time API for form validation, and Email Finder (name+domain → verified email)

## Step 3 — Execute the enrichment

### Pre-enrichment checklist
- [ ] **Deduplicate first**: Remove duplicate records before enriching — don't pay to enrich the same person twice
- [ ] **Filter to qualified records only**: Don't enrich contacts you'll never reach out to
- [ ] **Check existing data**: Skip records that already have verified emails/phones
- [ ] **Estimate credit cost**: Records × credit cost per record. Stay within budget.
- [ ] **Set enrichment scope**: Choose which fields to enrich (email only is cheaper than email + phone + firmographic)

### In Apollo.io

**Single enrichment**: Search for the person in Apollo's database → click to reveal email/phone (costs credits).

**Bulk enrichment**:
1. Select contacts in a list or search results
2. Click "Enrich" → choose fields to enrich
3. Apollo processes in background, results appear on records
4. Export enriched data or sync to CRM

**CRM auto-enrichment**:
1. Settings > Enrichment > Auto-Enrichment
2. Set rules: enrich new contacts on creation, enrich existing contacts on a schedule
3. Choose fields to enrich and credit budget per month
4. Monitor usage in Settings > Usage

**API enrichment**:
- `POST /people/match` for single-record enrichment
- `POST /people/bulk_match` for batch (up to 10 per call)
- `GET /organizations/enrich` for company enrichment
- See `/sales-apollo` for full API reference

### In Tomba

**Single enrichment**: Use the Email Finder (name + domain → email) or Email Enrichment (email → full profile with name, title, company, social handles, location).

**Bulk enrichment**:
1. Upload a list to Tomba's bulk operations (up to 10,000 records per batch)
2. Choose the operation: bulk email finder, bulk verifier, bulk enrichment, bulk phone finder
3. Use `webhook_url` parameter for async completion notification
4. Export enriched results or sync to CRM via Zapier/HubSpot/Salesforce integration

**Domain-wide enrichment**:
1. Domain Search on the target company → get all known emails with names, titles, departments, seniority
2. Filter by department and seniority to focus on decision-makers
3. Verify results with Email Verifier before sending

**Email pattern detection**: Use the Email Format endpoint (`/v1/email-format`) to discover what pattern a company uses (e.g., `first.last@` at 85%). This lets you validate found emails and predict patterns for people not in the database.

**API enrichment**:
- `GET /v1/email-finder` for name+domain → email
- `GET /v1/enrich` for email → full profile
- `GET /v1/domain-search` for domain → all contacts
- `GET /v1/linkedin` for LinkedIn URL → email
- Auth: `X-Tomba-Key` + `X-Tomba-Secret` headers
- See `/sales-tomba` for full platform reference

**Credit economics**: Searches and verifications are separate quotas. Free plan: 25 searches + 50 verifications/month. Starter ($39/mo): 1,000 + 2,000. Phone data costs additional credits.

### In Mailmo

**Single enrichment**: Use the Email Finder — enter first name, last name, and company domain → Mailmo returns a verified email. Every result is verified in real-time including catch-all detection. You only pay for verified emails found — no charge for misses.

**Bulk verification**:
1. Upload a CSV of email addresses to Mailmo's Bulk Verification
2. Mailmo processes the list with catch-all verification
3. Download results with verification status per email
4. Remove invalid addresses before importing into outbound tools

**Catch-all advantage**: Mailmo's key differentiator is catch-all mailbox verification. Standard verifiers mark all catch-all addresses as "risky" — Mailmo attempts to verify the specific mailbox. For lists with many catch-all domains, Mailmo provides significantly more definitive results than competitors.

**LinkedIn prospecting**: Use the Chrome extension on LinkedIn/Sales Navigator profiles to find verified emails with one click while browsing.

**No API**: Mailmo does not have a public API. All operations are through the web UI or Chrome extension. Export via CSV for use in other tools.

**Credit economics**: 1 credit per verified email found or verified. No charge for misses or duplicate searches. Credits roll over month-to-month. Free plan: 50/mo. Starter ($9/mo): 500. Professional ($39/mo): 2,500.

### In Hunter.io

**Single enrichment**: Use Email Finder (first name + last name + domain → email with confidence score and verification status). Or use Domain Search to find all emails at a company, filtered by department and seniority.

**Bulk enrichment**:
1. Use the Bulk Email Finder API — submit an array of name+domain pairs
2. Hunter processes asynchronously — check job status via `GET /email-finder/bulk/{id}`
3. Verify found emails with Bulk Email Verifier before sending
4. Export results or push to CRM via HubSpot/Salesforce/Pipedrive integration

**Domain-wide enrichment**:
1. Domain Search on the target company → get all known emails with names, titles, departments, seniority, and confidence scores
2. Filter by department (executive, sales, engineering, etc.) and seniority to focus on decision-makers
3. Hunter also returns the company's email pattern (e.g., `{first}@domain.com`) — use it to predict emails for people not in the database
4. Verify results with Email Verifier before sending

**Technographic prospecting**: Use TechLookup to find companies using a specific technology, then Domain Search each to find contacts. Use Discover to filter companies by industry, size, and location.

**API enrichment**:
- `GET /domain-search` for domain → all contacts
- `GET /email-finder` for name+domain → email
- `GET /email-verifier` for email → deliverability status
- Bulk endpoints available for all three operations
- Auth: `api_key` query parameter, `X-API-KEY` header, or `Authorization: Bearer` header
- See `/sales-hunter` for full platform reference

**Credit economics**: Domain Search (1 credit per 10 results), Email Finder (1 credit per find), Email Verifier (1 credit per verification). All share the same monthly pool. Free plan: 50 credits/mo. Starter (€34/mo): 2,000. Growth (€104/mo): 10,000. Failed lookups (no results) are free.

### In Prospeo

**Single enrichment**: Provide name + company (website, LinkedIn, or name) or a LinkedIn URL → Prospeo returns verified email, job title, full profile, and company data. Set `only_verified_email: true` to only pay for records with verified emails.

**Bulk enrichment**:
1. Use the Bulk Enrich Person API — up to 50 records per call
2. Each record needs an `identifier` for tracking plus name+company or LinkedIn URL
3. Response separates `matched`, `not_matched`, and `invalid_datapoints`
4. Batch larger lists into groups of 50

**Company enrichment**: Provide a domain or LinkedIn URL → 50+ data fields including industry, employee count, funding, tech stack, revenue range, job postings, SIC/NAICS codes.

**Mobile enrichment**: Add `enrich_mobile: true` to any person enrichment — costs 10 credits instead of 1. Only enable for contacts you'll actually call.

**Search-then-enrich workflow**: Use Search Person (200M+ contacts, 30+ filters) to find targets, then Bulk Enrich to get contact info. Search returns profiles but NOT emails — enrichment is a separate step.

**API enrichment**:
- `POST /enrich-person` for single person enrichment
- `POST /bulk-enrich-person` for batch (up to 50 per call)
- `POST /enrich-company` for company enrichment
- `POST /bulk-enrich-company` for batch company enrichment
- Auth: `X-KEY` header
- See `/sales-prospeo` for full platform reference

**Credit economics**: 1 credit per matched person/company. 10 credits if mobile included. Free for no-match and lifetime dedup (re-enriching same record is free). Free plan: 75 credits/mo. Starter ($39/mo): 1,000.

### In Seamless.AI

**Single enrichment**: Search for a person in Seamless.AI's Prospector (1.8B+ emails, 414M+ mobile numbers) → reveal to get verified email, phone, title, and 100+ data points. Each reveal costs 1 credit. Search/browse is free — only pay when you reveal.

**Bulk enrichment (CRM Enrich)**:
1. Connect your CRM (Salesforce or HubSpot) via native integration
2. CRM Enrich matches existing records against Seamless.AI's database
3. Fills in missing/stale fields — emails, phones, titles, firmographics
4. Run on segments (not the entire database) to conserve credits

**Autopilot enrichment**: Set ICP criteria → Seamless.AI continuously finds and delivers new contacts matching your filters. Automated list building with enrichment built in.

**API enrichment**:
- `POST /contacts/research` to initiate contact enrichment (by search result IDs or direct contact data)
- `GET /contacts/research/poll` to check enrichment status
- `POST /companies/research` for company enrichment
- Async pattern — results delivered via polling or webhook
- Auth: `Token: API_KEY` header or `Authorization: Bearer` (OAuth 2.0)
- See `/sales-seamless` for full platform reference

**Credit economics**: 1 credit per contact reveal. Search/browse is free. Pro plan credits expire daily (~1,000/day/user). Free plan: 50 lifetime credits. Basic ($147/mo): 250/month.

### In SafetyMails

**Single enrichment (Email Finder)**: Enter first name, last name, and company domain → SafetyMails returns a verified corporate email. Every result is auto-verified through their 19-step algorithm. You only pay for found emails (7 credits) — risky domains cost 1 credit, not-found is free.

**Bulk verification**:
1. Upload a CSV/TXT list (up to 2M emails) to the SafetyMails panel
2. 19-step verification: syntax, MX, SMTP, catch-all, spamtrap, disposable (80+ services), role-based, domain typo correction
3. Download results with per-email status: Valid, Invalid, Catch-All, Disposable, Spamtrap, Role-Based, Syntax Error, Domain Error
4. Remove non-valid addresses before importing into outbound tools

**Real-time API (form validation)**: Embed JavaScript on signup forms to verify emails at point of capture. Prevents invalid addresses from entering your database — <1 second response.

**No bulk enrichment API**: SafetyMails bulk verification is upload-only via the panel. The real-time API is designed for single-email form validation, not programmatic batch enrichment. For API-driven bulk workflows, use SafetyMails for verification and another tool (Apollo, Hunter, Prospeo) for finding.

**Credit economics**: 1 credit per email verified (bulk). Email Finder: 7 credits per found email, 1 credit for risky/invalid domain, 0 if not found. Pay-as-you-go ($7.50/1,000) or subscription ($6.80/mo/1,000). Credits never expire. Free: 100 bulk + 1,000 API trial.

### Compliance checklist

Before enriching and contacting, verify compliance with data privacy regulations in your target regions:

**EU contacts (GDPR)**:
- [ ] You have a **lawful basis** for processing (legitimate interest for B2B outreach is common, but document it)
- [ ] Your enrichment provider has a GDPR-compliant data sourcing policy (check their DPA)
- [ ] You can honor **right to erasure** requests — if someone asks to be deleted, you can remove them from all systems
- [ ] Your outreach includes a clear way to opt out
- [ ] You're not enriching personal data beyond what's necessary (data minimization principle)

**US contacts (CAN-SPAM)**:
- [ ] Every email includes a **physical mailing address**
- [ ] Every email includes a working **unsubscribe link**
- [ ] Unsubscribe requests are honored within **10 business days**
- [ ] Subject lines are not deceptive
- [ ] The email is identified as an advertisement (if applicable)

**California contacts (CCPA/CPRA)**:
- [ ] You provide a "Do Not Sell My Personal Information" option if applicable
- [ ] You can disclose what personal data you've collected if a consumer requests it
- [ ] Your enrichment vendor's data collection practices comply with CCPA

**General rules**:
- If someone unsubscribes, suppress them globally — don't re-enrich and re-add them next month
- If you're enriching contacts in bulk, check regional distribution first and apply the strictest relevant regulation
- Keep a log of where enriched data came from (which provider, when) for audit purposes

### Data quality scoring

After enrichment, score your data quality:

| Field | Quality level | Action |
|---|---|---|
| Email verified + deliverable | High | Ready for outreach |
| Email found but unverified | Medium | Run through verification tool (NeverBounce, ZeroBounce) before sending |
| Email not found | Low | Try alternate enrichment provider or find via LinkedIn/company website |
| Phone — direct/mobile | High | Ready for calling |
| Phone — HQ/switchboard | Low | Not useful for cold calling — try to find direct line |

## Step 4 — CRM data hygiene

### Stale data identification

Records go stale quickly — people change jobs every 2-3 years on average. Run these checks:

| Check | How to identify | Action |
|---|---|---|
| **Bounced emails** | Email bounced in last campaign | Re-enrich to find current email |
| **Job changes** | Title/company doesn't match LinkedIn | Re-enrich or mark as churned contact |
| **Missing data** | Key fields (email, phone, title) are blank | Bulk enrich missing fields |
| **Duplicate records** | Same person/company appears multiple times | Merge duplicates, keep most recent data |
| **Outdated companies** | Company acquired, renamed, or shut down | Remove or update with current entity |
| **Unsubscribed/DNC** | On do-not-contact list | Remove from all active sequences and lists |

### Deduplication strategy

1. **Define match criteria**: Email address (strongest), or Company + Full Name (fallback)
2. **Set merge rules**: Most recently updated record wins for each field
3. **Keep audit trail**: Log what was merged and when
4. **Run regularly**: Monthly for active databases, quarterly for stable ones

### Enrichment schedule

| Data type | Refresh frequency | Why |
|---|---|---|
| Email addresses | Every 6 months | People change jobs; emails become invalid |
| Phone numbers | Every 6 months | Direct lines change with job changes |
| Job title/company | Every 3 months | Promotions and job changes |
| Firmographic data | Annually | Company size, revenue, and industry change slowly |
| Tech stack | Every 6 months | Technology adoption/removal is ongoing |

## Step 5 — Credit optimization

### Credit-saving strategies

- **Enrich only qualified records**: Apply ICP filters before enriching — don't waste credits on bad-fit contacts
- **Check existing data first**: Skip records that already have the data you need
- **Prioritize email over phone**: Email credits are typically cheaper. Only reveal phone numbers for contacts you'll actually call.
- **Use waterfall strategically**: Start with the cheapest provider, escalate to premium for high-value targets
- **Batch over real-time**: Bulk enrichment is often more credit-efficient than one-at-a-time
- **Monitor usage weekly**: Set up alerts when you hit 80% of monthly credit budget

### Apollo credit economics

| Action | Approximate credit cost |
|---|---|
| Email reveal | 1 credit |
| Mobile phone reveal | 5-10 credits (varies by plan) |
| Company enrichment | 1 credit |
| CSV export | 1 export credit per record |
| Search (no reveal) | Free |

Credits reset monthly and do not roll over. Plan enrichment around your billing cycle.

## Gotchas

- **Don't enrich before deduplicating.** Claude often recommends "enrich everything, then clean up." This wastes credits on duplicate records. Always dedup first, then enrich the clean list.
- **Don't assume enriched emails are deliverable.** Enrichment tools find email addresses — they don't guarantee deliverability. Always run enriched emails through a verification tool (NeverBounce, ZeroBounce, MillionVerifier) before high-volume campaigns. Apollo-reported "verified" emails still bounce at 5-10% rates.
- **Don't enrich an entire CRM database at once.** Claude tends to suggest bulk-enriching everything. This burns through credits fast and enriches records you may never contact. Start with your highest-priority segments and expand.
- **Don't ignore phone number credit costs.** Mobile number reveals are 5-10x more expensive than email reveals in most tools. Only reveal phone numbers for contacts your team will actually call — not the entire list.
- **Don't set up auto-enrichment without a credit budget cap.** Auto-enrichment can burn through an entire month's credits in days if configured too broadly. Set a monthly cap and limit auto-enrichment to new records matching your ICP.
- **Don't enrich contacts without checking regional compliance.** Enriching EU contacts without a lawful basis for processing (GDPR), or emailing US contacts without an unsubscribe link (CAN-SPAM), exposes you to legal risk. See the compliance checklist in Step 3 before enriching in bulk.

## Related skills

- `/sales-prospect-list` — Build the prospect list that you'll then enrich
- `/sales-intent` — Layer buying signals on enriched contacts to prioritize outreach
- `/sales-cadence` — Design the outbound sequence for enriched contacts
- `/sales-apollo` — Apollo.io platform help (enrichment settings, credit management)
- `/sales-apollo-sequences` — Set up sequences in Apollo for enriched contacts
- `/sales-lemlist` — Lemlist platform help (built-in waterfall enrichment, People Database)
- `/sales-yesware` — Yesware platform help (Prospector — 100M+ B2B contact database)
- `/sales-mixmax` — Mixmax platform help (import enriched contacts into Mixmax sequences)
- `/sales-reply` — Reply.io platform help (B2B database with 1B+ contacts and data credits)
- `/sales-woodpecker` — Woodpecker platform help (Lead Finder B2B database)
- `/sales-tomba` — Tomba platform help (430M+ email database, domain search, email finder, verifier, enrichment, phone finder)
- `/sales-prospeo` — Prospeo platform help (280M+ leads, 5-step email verification, company enrichment, bulk operations, Chrome extension)
- `/sales-hunter` — Hunter.io platform help (Domain Search, Email Finder, Email Verifier, Campaigns, Discover, TechLookup, Signals)
- `/sales-mailmo` — Mailmo platform help (Email Finder with catch-all verification, LinkedIn Chrome extension, bulk verification)
- `/sales-seamless` — Seamless.AI platform help (1.8B+ contacts, Buyer Intent, CRM Enrich, Autopilot, AI Agents, API)
- `/sales-safetymails` — SafetyMails platform help (19-step bulk verification, real-time API, Email Finder)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Pre-campaign enrichment
**User says**: "I have 500 contacts for a campaign but only 60% have emails. Enrich the rest."
**Skill does**:
1. Recommends deduping the list first
2. Filters to records missing emails
3. Sets up batch enrichment in Apollo with email-only scope (save phone credits)
4. Recommends email verification before launching the sequence
**Result**: List enriched to 85%+ email coverage, verified and ready for outreach

### Example 2: CRM data cleanup
**User says**: "Our Salesforce has 50,000 contacts but half the data is stale. Help me clean it up."
**Skill does**:
1. Identifies stale data patterns (bounced emails, outdated titles, missing fields)
2. Recommends a phased approach: dedup → prioritize top segments → enrich in batches
3. Sets up an ongoing enrichment schedule to prevent future staleness
4. Calculates credit budget for the cleanup
**Result**: Phased CRM hygiene plan with credit-conscious enrichment strategy

## Troubleshooting

### Low enrichment match rate
**Cause**: Prospects are in niche industries, use uncommon email domains, or are very senior (C-suite data is harder to find)
**Solution**: Try waterfall enrichment across multiple providers. For C-suite, try LinkedIn manual lookup or ask for referral introductions instead of cold outreach.

### Enriched emails bouncing
**Cause**: Data provider has stale records, or person recently changed jobs
**Solution**: Run enriched emails through a dedicated verification service before sending. Set up a feedback loop — when emails bounce, re-enrich or remove the contact.

### Credits running out mid-month
**Cause**: Over-enrichment (enriching too many records or enriching phone numbers unnecessarily)
**Solution**: Review usage in Settings > Usage. Restrict enrichment to ICP-qualified records only. Limit phone reveals to contacts tagged for calling. Consider upgrading plan if consistently hitting limits.
