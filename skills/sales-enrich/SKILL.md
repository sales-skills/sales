---
name: sales-enrich
description: "Enrich contacts and companies with verified emails, phones, and firmographic data. Also covers CRM data hygiene, deduplication, and bulk enrichment. Use when enriching leads, finding email addresses, cleaning CRM data, doing bulk enrichment, optimizing enrichment credits, setting up auto-enrichment, or fixing stale contact data. Do NOT use for building new prospect lists from scratch (use /sales-prospect-list), interpreting buying signals (use /sales-intent), ZoomInfo-specific enrichment config (use /sales-zoominfo), Clearbit/Breeze Intelligence platform help (use /sales-clearbit), or general Apollo platform help (use /sales-apollo)."
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

### In ZoomInfo
- **Contact Enrich** — POST `/enrich/contact` with name+company, email, or LinkedIn URL. Returns verified email, direct dial, title, department, seniority. Up to 25 records per API call.
- **Company Enrich** — POST `/enrich/company` with domain or company name. Returns revenue, employee count, industry, SIC/NAICS, tech stack, HQ location.
- **Bulk Enrich** — async batch enrichment via POST `/bulk/enrich` with callback URL. Use for 100+ record operations.
- **Auto-Enrich** — configure OperationsOS rules to enrich new CRM records on creation or on a schedule. No manual intervention needed.
- **Intent Enrich** — POST `/enrich/intent` returns active intent signals for a company plus recommended contacts. Use to prioritize which records to enrich first.
- **Credit system** — each enrichment consumes credits. Monitor via `X-Usage-Record-Limit-Remaining` header or Usage API. Professional: 5K credits/yr, Advanced: 10K, Elite: 10K + Copilot.
- **Waterfall position** — ZoomInfo has the broadest B2B database (260M+ contacts). Often used as the primary enrichment provider, with Apollo, Lusha, or Cognism as secondary/tertiary in a waterfall.

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

### In Outscraper

**Emails & Contacts**: Pass a list of website URLs or domains to `GET /emails-and-contacts` — Outscraper scrapes all publicly visible email addresses, phone numbers, and social profiles from those sites. Best for extracting contact info from business websites found via Google Maps scraping.

**Contacts & Leads**: `GET /contacts-and-leads` finds up to 3 email/phone contacts per company, with support for preferred contact types. More targeted than raw email scraping — returns named individuals rather than generic addresses.

**Company Insights**: `GET /company-insights` returns firmographic data (industry, size, revenue estimates), tech stack, social profiles, and company descriptions. Use to enrich CRM records with company-level data.

**Email Validation**: `GET /email-validator` verifies email deliverability (valid/invalid/risky). Run after enrichment to clean the list before sending. Supports batch queries (up to 25 per request).

**Bulk workflow**: Outscraper's API supports batching (25 queries per request) and async processing with webhook callbacks. Ideal for programmatic enrichment pipelines — scrape businesses from Google Maps, then enrich with contacts and validate emails in the same workflow.

**Credit economics**: Pay-as-you-go, no subscriptions. Free tier: 500 Google Maps records/month. Medium: $0.002/record. Business (50K+): $0.001/record. Tiers reset every 30 days.

### In Enrich.so

**Reverse Email Lookup**: Pass an email address to Enrich.so's API — returns the person's LinkedIn profile, job title, company, education, 50+ data points. Best for enriching CRM contacts where you have email but need full professional context.

**LinkedIn Profile Enrichment**: `GET /v1/api/linkedin-by-url` — pass a LinkedIn URL, get full profile data including positions, education, skills, contact info, network stats. Works for both person and company profiles.

**Email Finder / LinkedIn to Email**: Find verified business email from a LinkedIn profile URL. Supports async responses for large batches. Success-based credit model — only charged when an email is found.

**Phone Number Finder**: Find mobile and landline numbers from profiles or emails. Useful for phone-heavy outbound cadences.

**Company Data**: Company lookup by name, domain, or LinkedIn URL returns industry, size, revenue, tech stack, social profiles. Company Funding & Traffic adds investor details, funding rounds, and web traffic estimates.

**Search Similar Companies**: `POST /v1/api/similar-companies` — find lookalike companies from a LinkedIn company URL. Filter by location and employee size. Returns relevancy scores. Great for expanding target account lists from existing customers.

**Search Company Employees**: Find decision-makers by company and role with detailed profiles. Useful for multi-threading into target accounts.

**Bulk Enrichment**: `POST /v1/api/bulk-enrichment` — batch process via CSV upload, JSON array, or CSV URL. Supports types: person, company, find-email, mobile-finder, linkedin-to-email. Async with webhook callbacks (`webhookUrl` parameter). Poll `GET /v1/api/bulk-enrichment-results` for results.

**Credit economics**: Success-based model — only pay for verified data. Free: 25 credits. Starter: $59/mo. Professional: $99/mo. Scale: $149/mo. Pay-as-you-go from $20/100 credits.

### In Minelead
- **Company Email Search**: `GET /v1/search?domain={domain}` — discover all email addresses associated with a company domain. Returns email pattern, verified emails with quality flags. 500M+ emails indexed, 100M+ business profiles. Costs 1 credit per successful search.
- **Email Finder**: `GET /v1/find?firstname={first}&lastname={last}&domain={domain}` — find a specific person's professional email. Returns matched email with person and company details. 1 credit per operation.
- **Email Verifier**: `GET /v1/validate?email={email}` — verify deliverability with MX record check, catch-all detection, webmail detection, and existence validation. Quality scores from 25-100%.
- **Lead Finder / Tags**: `POST /v1/tags` — discover companies and contacts from keyword tags and locations. Good for building initial prospect lists when you don't have target companies yet.
- **Bulk Operations**: Upload CSV for batch domain search or email verification. Plan limits: Free/Starter (50 rows), Pro (100), Business (1,000), Enterprise (unlimited).
- **Leads CRM**: Built-in lead collections — save, organize, and export. Import from CSV or collect from search results. Export to Google Sheets, Zoho CRM, or HubSpot via Zapier.
- **Browser extensions**: Chrome and Firefox extensions for in-browser email lookup while browsing company websites.
- **Credit economics**: 1 credit = 1 successful search/verify/find. Free: 25/mo. Starter: $39/mo (1K). Pro: $69/mo (10K). Business: $149/mo (50K). Enterprise: $299/mo (200K). Annual saves 30%.

### In Lobstr.io (scraping-based enrichment)
- **Google Maps Leads Scraper**: Extract business contact data (phone, website, email, address, hours, ratings) from Google Maps listings. Not traditional enrichment — it's scraping public data, but the output is structured contact/company records you can import into CRM or outbound tools.
- **LinkedIn Sales Navigator Scraper**: Extract lead profiles from Sales Nav searches — names, titles, companies, LinkedIn URLs. Requires cookie-based account sync for login-wall access.
- **Emails & Contacts from websites**: Use Lobstr's website scrapers to extract email addresses and contact info from company websites at scale.
- **Scheduled enrichment**: Set up recurring scrapes to continuously enrich your data — e.g., weekly Google Maps scrapes for new businesses in target verticals.
- **No traditional enrichment API**: Lobstr.io scrapes raw data from sources rather than maintaining an enrichment database. Use it upstream to collect raw data, then feed into enrichment tools (Hunter, Tomba, Enrich.so) for email verification and additional firmographic data.
- **Export**: Google Sheets, Amazon S3, SFTP, or JSON via API. Webhook notifications on completion.
- **Credit economics**: 1 credit = 1 unique result. Free: 100 credits. Paid from €50/mo.

### In GetProspect
- **Email Finder**: Search 200M+ B2B contacts by name, company, title, domain, location, industry, and 17+ filters. Returns verified email addresses with 95% accuracy claim. 1 credit per valid email found.
- **Contact Enrichment**: Append 40+ data attributes to existing contacts — location, industry, tech stack, company size, revenue, social profiles, phone numbers. Enriches from GetProspect's own database.
- **LinkedIn Email Finder Extension**: Chrome extension to export leads directly from LinkedIn and Sales Navigator searches into GetProspect — names, titles, companies, and verified emails.
- **Reverse Email Lookup**: Input an email address and get back the person's name, title, company, and additional firmographic data.
- **Email Verifier**: Validate email deliverability with catch-all detection. 97% deliverability guarantee. Bulk verification available. Separate verification credits (don't consume email finder credits).
- **Bulk operations**: CSV enrichment for batch processing. Upload a list and enrich with emails, phone numbers, and company data.
- **Phone numbers**: Mobile and direct dial credits available as add-on (5 free/mo on paid plans, up to 3,000/mo).
- **Credit economics**: Free: 50 emails/mo. Starter: $49/mo (1K). Growth 5K: $99/mo (5K). Growth 20K: $199/mo (20K). Growth 50K: $399/mo (50K). Credits roll over month to month.

### In Skrapp
- **Email Finder**: Find verified professional email addresses by name + company/domain. 92% average success rate. Single lookup or bulk via CSV/Excel upload. 1 credit per valid email — no charge for duplicates or invalid results.
- **Data Enrichment**: Bulk CSV/Excel upload with auto-column mapping. Enriches contacts with verified emails, job titles, company data (industry, revenue, employee count, location), and firmographic attributes.
- **AI Fields**: ML-powered attributes auto-populated during enrichment — buying role, seniority, function, and gender. Adds segmentation context without manual research. Available on Professional+ plans.
- **Company Search**: Search 20M+ company profiles by domain. Returns all discoverable professionals at a company with verified emails and role data.
- **Email Verifier**: Single + bulk verification with 97% accuracy. Checks syntax, format, mailbox validity. Detects personal and disposable addresses.
- **LinkedIn Chrome Extension**: Extract verified emails from LinkedIn and Sales Navigator profiles — processes 25 profiles/second. Multi-page enrichment on Professional+ plans.
- **Bulk operations**: Upload CSV/Excel for batch email finding and enrichment. Auto-mapping detects columns and matches to required fields. Export enriched data as CSV/XLSX or sync to CRM.
- **Credit economics**: Free: 100/mo (1 user). Professional: €30/mo (1,000 credits, 2 users). Enterprise: €262/mo (50,000 credits, 15 users). No charge for duplicates or invalid results.

### In OpenWeb Ninja (API-based enrichment)
- **Website Contacts Scraper API**: Extract emails, phone numbers, and social profile links (Facebook, Instagram, Twitter, LinkedIn) from any website domain. Returns structured data with source URLs for each contact found. Response time 0.5-3s. Supports batching via keyword/name-based website lookup.
- **Email Search API**: Real-time web search for publicly available email addresses by query + optional email domain filter. Returns array of discovered email addresses indexed from the public web. Response time 1-2s.
- **Local Business Data API**: Retrieve business contact info from Google Maps — phone, email, website, social links, plus 40+ firmographic fields (industry, ratings, review count, opening hours, address, coordinates).
- **API-only enrichment**: OpenWeb Ninja is a developer API stack, not a point-and-click enrichment tool. Integrate via REST API into your pipeline. No native CRM sync — you build the integration. Code samples available for JavaScript, Python, Java, Ruby, cURL.
- **Credit economics**: Per-API subscription. Free: 50-500 requests/mo (varies by API). Pro: $25/mo (10K-20K requests). Ultra: $75/mo (50K-100K). Mega: $150/mo (200K-300K). Pay-as-you-go: $0.001-0.005/request. Each API has its own subscription — costs add up if using multiple APIs.
- **Best for**: Developers building custom enrichment pipelines, scraping contact data from websites at scale, supplementing primary enrichment tools with web-indexed email discovery.

### In Anymail Finder
- **Email Finder by Person**: POST name + company/domain to find verified email. 97%+ delivery guarantee on valid results. 1 credit per valid email — free for risky/not-found/blacklisted results. Duplicate searches free within 30 days.
- **Email Finder by Decision Maker**: Role-based search with 10 categories (ceo, engineering, finance, hr, it, logistics, marketing, operations, buyer, sales). Returns person name, title, LinkedIn URL, and email. 2 credits per valid result.
- **Email Finder by Company/Domain**: Find up to 20 emails at any company. 1 credit per search.
- **Email Finder by LinkedIn URL**: Extract email from a LinkedIn profile URL. 1 credit per valid result.
- **Email Verifier**: Validate deliverability — returns valid/risky/invalid status. 0.2 credits per verification. Repeated checks within 30 days free.
- **Bulk operations**: Up to 100K rows per request. Async processing (~1K rows in 5 min). JSON or CSV/Excel upload. Credits charged on download only. Webhook notifications for completion.
- **GeoLead Finder**: Location-based lead discovery — newer feature for geographic prospecting.
- **Credit economics**: Starter €14/mo (50 credits), Standard €39/mo (1K), Scale €129/mo (5K), Ultimate €259/mo (25K). Unused credits accumulate up to 2x plan size.
- **Best for**: High-accuracy email finding with pay-only-for-verified model, decision maker discovery by role, bulk enrichment at scale.

### In Snov.io
- **Email Finder (Domain Search)**: Find all emails at a company domain — returns company info, prospect profiles, and email addresses. 1 credit per unique domain request. Filter by position/role.
- **Email Finder (Name + Domain)**: Find individual email by first name, last name, and domain. Batch support with webhook callbacks. 1 credit per email found (valid/unknown).
- **Company Domain Lookup**: Discover domain from company name. 1 credit per domain found. Batch support.
- **LinkedIn Profile Enrichment**: Extract complete profile data from LinkedIn URLs — name, title, company, email. 1 credit per profile. Batch support with webhooks.
- **Profile Enrichment by Email**: Enrich an email with associated profile data. 1 credit per request (free if no data found).
- **Email Verifier**: 98% accuracy, 7-tier verification with SMTP checks. Returns smtp_status, is_valid_format, is_disposable, is_webmail, is_gibberish. API supports up to 10 emails per request.
- **Email Count Check**: Free endpoint to check how many emails are available at a domain before spending credits.
- **Credit economics**: Trial Free (50 credits), Starter $39/mo (1K), Pro S $99/mo (5K), Pro M $149/mo (20K), Pro L $249/mo (50K). Annual billing saves 25%. Unused credits roll over.
- **Best for**: All-in-one prospecting — find emails, verify them, and immediately send campaigns from the same platform. LinkedIn enrichment is a standout for building prospect profiles from LinkedIn URLs.

### In ZeroBounce
- **Email Finder**: Find B2B emails by name + domain. Returns validated email address. 20 credits per successful find. 10 free queries/month.
- **Email Validation**: Verify existing email addresses with 99.6% accuracy — returns valid/invalid/catch-all/spam-trap/abuse/do_not_mail status with detailed sub-status. Real-time API or bulk CSV upload (unlimited file size).
- **AI Email Scoring**: Score catch-all addresses on a 1-10 scale to predict deliverability — unique feature for deciding whether to include catch-all emails in campaigns.
- **Activity Data**: Append engagement recency to contacts (last active 30/60/90/180/365/365+ days) — helps prioritize recently active contacts for outreach.
- **Bulk validation**: Upload CSV/TXT for batch processing on `bulkapi.zerobounce.net`. Check status, download results. Detects 30+ email types.
- **Credit economics**: Free 100/mo, PAYG $39/2K credits (~$0.02/credit), ZeroBounce ONE $99/mo for 25K. Email Finder uses 20 credits per find. Credits never expire.
- **Best for**: High-accuracy email validation, catch-all scoring, engagement-based list segmentation, comprehensive deliverability monitoring alongside enrichment.

### In Clearbit (Breeze Intelligence)

**Person enrichment**: Pass an email address to `GET https://person.clearbit.com/v2/people/find?email={email}` — returns 80+ attributes: name, title, role, seniority, company, social profiles (LinkedIn, Twitter, GitHub), location, bio, and more. 1 credit per successful lookup.

**Company enrichment**: Pass a domain to `GET https://company.clearbit.com/v2/companies/find?domain={domain}` — returns 100+ firmographic attributes: employee count, estimated annual revenue, tech stack, industry (SIC/NAICS codes), funding history, company type, parent company, social profiles, location.

**Combined enrichment**: `GET https://person-stream.clearbit.com/v2/combined/find?email={email}` — returns both person and company data in a single call. Use this when you need both and want to minimize requests.

**Streaming vs async**: Clearbit offers two modes per endpoint:
- **Streaming** (e.g., `person-stream.clearbit.com`): Holds the HTTP connection open for up to 60 seconds while data is fetched. Returns the result inline. Best for real-time form enrichment and low-latency workflows.
- **Standard** (e.g., `person.clearbit.com`): Returns `202 Accepted` if data isn't immediately available, then delivers via webhook. Best for batch/background enrichment.

**Name to Domain**: `GET https://company.clearbit.com/v1/domains/find?name={company_name}` — resolve a company name to its website domain. Useful when you have company names but no domains (e.g., from event lead lists).

**Prospector**: `GET https://prospector.clearbit.com/v1/people/search` — find contacts at a company filtered by role, seniority, title, and location. Use to build contact lists at target accounts without needing names upfront.

**API details**:
- REST API, HTTP Basic Auth (API key as username, no password)
- Rate limit: 600 requests/minute
- Base URLs vary by API: `person.clearbit.com`, `company.clearbit.com`, `prospector.clearbit.com`, `reveal.clearbit.com`
- SDKs (Ruby, Node, Python, Go) are deprecated — use direct HTTP requests

**HubSpot / Breeze Intelligence**: Clearbit was acquired by HubSpot in December 2023 and is now also available as the Breeze Intelligence add-on inside HubSpot. Breeze uses a credit-based model within HubSpot. If the user is already on HubSpot, they may be able to access Clearbit enrichment natively without a separate Clearbit subscription.

**Bulk workflow**: Clearbit doesn't have a dedicated bulk endpoint. For batch enrichment, loop through the streaming endpoints (up to 600 req/min). Use the combined endpoint to get person + company in one call and halve your request count.

**Credit economics**: Clearbit pricing is volume-based and quote-driven (no public per-credit pricing). Contact sales for plans. HubSpot Breeze Intelligence: credits purchased as add-on packs within HubSpot billing.

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
- `/sales-outscraper` — Outscraper platform help (Google Maps scraping, email/contact extraction, company insights, email validation API)
- `/sales-enrichso` — Enrich.so platform help (reverse email lookup, LinkedIn enrichment, email/phone finder, company data, bulk enrichment API)
- `/sales-minelead` — Minelead platform help (domain email search, email finder, verifier, lead generator, campaigns, bulk operations, API)
- `/sales-lobstr` — Lobstr.io platform help (50+ web scrapers for Google Maps, LinkedIn, reviews — scraping-based data collection and enrichment)
- `/sales-getprospect` — GetProspect platform help (200M+ B2B database, email finder, enrichment, verifier, cold email sequences, LinkedIn Chrome extension)
- `/sales-skrapp` — Skrapp platform help (200M+ B2B contacts, email finder, data enrichment with AI Fields, email verifier, LinkedIn Chrome extension)
- `/sales-openwebninja` — OpenWeb Ninja platform help (30+ data APIs: Website Contacts Scraper, Email Search, Local Business Data for API-based enrichment)
- `/sales-anymailfinder` — Anymail Finder platform help (email finder by person/company/decision maker/LinkedIn, email verifier, bulk search, 97%+ delivery guarantee)
- `/sales-zerobounce` — ZeroBounce platform help (email validation 99.6% accuracy, Email Finder, AI scoring, activity data, blacklist monitoring, DMARC, warmup)
- `/sales-snov` — Snov.io platform help (email finder, domain search, LinkedIn enrichment, email verifier 98%, multichannel campaigns)
- `/sales-clearbit` — Clearbit / Breeze Intelligence platform help (person enrichment, company enrichment, prospector, Name to Domain, streaming API)
- `/sales-zoominfo` — ZoomInfo platform help (enrichment, intent, OperationsOS)
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment automation
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
