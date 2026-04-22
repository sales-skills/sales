# Platform-Specific Enrichment Guide

Detailed per-platform enrichment workflows, API endpoints, credit economics, and bulk operation instructions.

## Table of contents

- [In Apollo.io](#in-apolloio)
- [In ZoomInfo](#in-zoominfo)
- [In Tomba](#in-tomba)
- [In Mailmo](#in-mailmo)
- [In Hunter.io](#in-hunterio)
- [In Prospeo](#in-prospeo)
- [In Seamless.AI](#in-seamlessai)
- [In SafetyMails](#in-safetymails)
- [In Outscraper](#in-outscraper)
- [In Enrich.so](#in-enrichso)
- [In Minelead](#in-minelead)
- [In Lobstr.io (scraping-based enrichment)](#in-lobstrio-scraping-based-enrichment)
- [In GetProspect](#in-getprospect)
- [In Skrapp](#in-skrapp)
- [In OpenWeb Ninja (API-based enrichment)](#in-openweb-ninja-api-based-enrichment)
- [In Anymail Finder](#in-anymail-finder)
- [In Snov.io](#in-snovio)
- [In ZeroBounce](#in-zerobounce)
- [In Clearbit (Breeze Intelligence)](#in-clearbit-breeze-intelligence)
- [In RB2B (Identity Resolution API)](#in-rb2b-identity-resolution-api)
- [In 6sense](#in-6sense)
- [In Clay (Waterfall Enrichment)](#in-clay-waterfall-enrichment)
- [In LeadMagic](#in-leadmagic)
- [In Attio](#in-attio)
- [In Nooks (Waterfall Enrichment)](#in-nooks-waterfall-enrichment)
- [In Amplemarket](#in-amplemarket)
- [In Sendr (Data Studio)](#in-sendr-data-studio)

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

### In RB2B (Identity Resolution API)

**IP-to-identity resolution**: RB2B's API product (api.rb2b.com) resolves IP addresses to identity data — hashed email (HEM), LinkedIn profile URL, and company firmographics. Use for enriching website visitor data or building identity resolution into custom pipelines.

**Endpoint chain for full enrichment**:
1. `GET /v1/ip/hem` — resolve IP to hashed email (SHA256)
2. `GET /v1/ip/linkedin` — resolve IP directly to LinkedIn profile URL
3. `GET /v1/ip/company` — resolve IP to company firmographics
4. `GET /v1/linkedin/email` — resolve LinkedIn URL to work email
5. `GET /v1/email/linkedin` — resolve email to LinkedIn URL
6. `GET /v1/company/firmographics` — get full company data from domain

**Pixel-based enrichment**: The main RB2B product (pixel, not API) automatically enriches website visitors with person-level data (name, email, LinkedIn, title, company) — no manual enrichment needed. Data pushed to CRM/Slack in real-time.

**API pricing**: Credit-based, separate from pixel product. 1 credit per lookup. 100 credits = $9, 1,000 = $49, 10,000 = $299. No subscription required — buy credits as needed.

**US-focused**: Person-level resolution has highest match rates for US-based data. Company-level resolution works globally.

**Best for**: Enriching anonymous website traffic with identity data, building custom identity resolution pipelines, resolving IP→person→company in programmatic workflows.

### In 6sense

**People Enrichment API**: `GET/POST scribe.6sense.com/v2/people/Enrichment` — pass email or name+company to get contact data including email, phone, mobile, title, seniority, job function, department, and associated company firmographics. 1 API credit per lookup.

**Full Enrichment (Lead Scoring + Firmographics)**: `GET/POST scribe.6sense.com/v2/people/full` — returns everything from People Enrichment plus product scoring data and segment membership. Use when you need both contact data and 6sense intelligence in one call.

**Company Identification**: `GET epsilon.6sense.com/v3/company/details` — resolve IP addresses to company firmographics. Install via WebTag (JavaScript) on your website for automatic visitor identification, or call directly from your backend.

**Segments API**: `GET scribe.6sense.com/v2/company/segments` — check which 6sense segments a company belongs to, plus buying stage, intent scores, and profile fit score. Use for real-time personalization.

**API auth**: Org-level API tokens provisioned in platform settings. Multiple tokens supported for security isolation.

**Credit system**: API calls consume credits from plan allocation. Credit consumption varies by endpoint. Unused credits expire monthly.

**Pricing note**: API access requires a paid 6sense plan ($50K+/year). Free plan (50 credits/mo) gives basic search only — not full API access. Enterprise pricing makes 6sense better suited for high-volume, high-value enrichment, not one-off lookups.

**Best for**: Enterprise teams already using 6sense for ABM who want to enrich inbound leads with intent data and buying stage alongside contact/firmographic data. Not cost-effective as a standalone enrichment tool — use Apollo, Hunter, or Tomba for enrichment-only use cases.

### In Clay (Waterfall Enrichment)

- **What it is**: Clay aggregates 150+ data providers (Hunter, Apollo, Clearbit, People Data Labs, Dropcontact, ZoomInfo, Lusha, RocketReach, Cognism, and more) in a single waterfall workflow. Query multiple providers in sequence — if Provider A misses, Provider B tries, then C.
- **Waterfall enrichment**: Configure provider priority order per column (email, phone, firmographics). Use "only if empty" logic between steps to avoid burning credits. Coverage compounds — 3 providers at 60% each can yield 85-95% coverage.
- **Claygent for custom enrichment**: AI research agents browse the web, extract data from company pages, navigate gated content. Use for non-standard enrichment (tech stack, pricing, org charts).
- **CRM sync**: Bidirectional sync with Salesforce, HubSpot, Dynamics 365. Import contacts for enrichment, push enriched data back automatically. Requires Growth plan ($446+/mo).
- **Credit system**: Data Credits consumed per provider lookup. Different providers cost different amounts. Unused credits roll over up to 2x monthly allocation on paid plans.
- **Pricing**: Free (100 credits/mo), Launch ($167-185/mo, 2,500 credits), Growth ($446-495/mo, 6,000 credits), Enterprise (custom). As of March 2026 — verify current pricing.
- **Best for**: Teams needing maximum enrichment coverage across multiple providers with a single tool. GTM engineers building automated enrichment workflows.

### In LeadMagic

- **What it is**: API-first B2B data enrichment with 19 REST endpoints. Pay-per-result — you only pay for valid results (not_found = free). Base URL: api.leadmagic.io, auth via X-API-Key header.
- **Email Finder**: Name + domain → verified work email at 97% accuracy (1 credit). Profile to Email: LinkedIn URL → work email (1-2 credits). Personal Email Finder: B2B profile → personal email (1-2 credits).
- **Mobile Finder**: Direct dial mobile numbers for decision-makers (5 credits per valid result).
- **Company enrichment**: Company Search for firmographics, technographics, and competitors (1-2 credits). Company Funding for rounds, investors, amounts (4 credits).
- **Employee/Role discovery**: Employee Finder at just 0.05 credits per employee for bulk discovery. Role Finder for specific titles at companies (1-2 credits).
- **MCP Server**: Official MCP server with all 19 tools for Claude Code, Cursor, Windsurf, VS Code — enrich directly from your editor.
- **Pricing**: Trial (free, 100 credits), Basic ($59.99/mo, 2,500), Essential ($99.99/mo, 10,000), Growth ($179.99/mo, 20,000), Advanced ($259.99/mo, 30,000). As of April 2026 — verify current pricing.
- **Best for**: Developers and GTM engineers wanting API-first enrichment with transparent per-result pricing. Excellent as a provider in Clay waterfall enrichment.

## In Attio

- **What it is**: Attio's built-in contact and company enrichment. Basic enrichment on all plans; AI-powered enrichment on Pro ($69/seat/mo) and above.
- **Auto-enrichment**: New contacts and companies are automatically enriched from email addresses and domain data. Fills company name, industry, size, social profiles, and contact details.
- **AI Research Agent** (Pro plan): Goes beyond database lookups — researches contacts and companies from public web sources, LinkedIn, news, and more. Can create notes and update fields automatically.
- **Data sources**: Email metadata, domain/company databases, public web (AI agent). Not as comprehensive as dedicated enrichment tools (Apollo, ZoomInfo, Clay) but eliminates manual data entry for basic CRM fields.
- **Limitations**: No credit-based pay-per-enrichment model — enrichment is included but limited to Attio's data sources. No waterfall enrichment across multiple providers. Personal email addresses (Gmail, Yahoo) often don't match.
- **Best for**: Teams using Attio as primary CRM who want automatic record enrichment without adding a separate tool. For deeper enrichment needs (mobile numbers, technographics, intent data), pair with Apollo, Clay, or ZoomInfo.

## In BrandJet

- 700M+ contact database with AI-powered enrichment — search by company, title, industry, location
- Instant email and phone lookups built into the platform — no separate enrichment tool needed
- LinkedIn autopilot: collect contacts from LinkedIn searches, Sales Navigator, and post reactions automatically
- Social listening enrichment: discover leads from social conversations mentioning relevant topics, competitors, or buyer intent signals
- Contact verification included — verified leads marked in the database, reducing bounce risk
- Import enriched contacts directly into multi-channel sequences without CSV export/import
- Integrations: sync enriched contacts to HubSpot or Attio CRM for downstream use
- No public API for enrichment — all enrichment happens within the BrandJet platform
- Starter plan: 1,000 verified leads/mo; Pro plan: 10,000 verified leads/mo — monthly credit model, plan usage carefully

### In Nooks (Waterfall Enrichment)

- **Waterfall enrichment**: Cascades across 9 data providers to find verified contact data: Apollo, Cognism, ContactOut, Datagma, Forager, LeadIQ, PDL (People Data Labs), Prospeo, ZoomInfo
- **Automatic number verification**: Validates phone numbers before they enter the dial queue, reducing bad-number waste and improving connect rates
- **Catch-all detection**: Identifies and flags catch-all email domains, prioritizes verified email addresses for outreach
- **Enrichment is built into the dialing workflow**: Prospects are enriched as they're added to call lists — no separate enrichment step needed
- **No standalone enrichment API**: Enrichment happens within the Nooks platform, not via a public API. You can't use Nooks as an enrichment provider for external tools
- **Coverage focus**: Optimized for finding direct mobile numbers (the primary channel for parallel dialing). Email enrichment is secondary
- **Best for**: Teams using Nooks for dialing who want enrichment bundled into the workflow. For standalone enrichment across tools, use Clay waterfall or dedicated enrichment providers

## In Amplemarket

- **Searcher database**: 300M+ verified contacts with 70M+ weekly updates. Search by industry (1000+), department, job function, company size, funding stage, technologies, location
- **Single enrichment**: `GET /people/find` — find one person by name + company or LinkedIn URL. Costs 0.5-1 email credit + 1 phone credit per reveal
- **Batch enrichment**: `POST /people/enrichment-requests` — up to 10K contacts per request. More credit-efficient than individual lookups. Poll `GET /people/enrichment-requests/{id}` for results (check `Retry-After` header)
- **Company enrichment**: `POST /companies/enrichment-requests` — up to 10K companies per batch. Returns name, domain, LinkedIn URL, industry, headcount, funding, technologies, locations, revenue, B2B/B2C flags
- **Email validation**: Separate from enrichment — `POST /email-validations` validates existing emails (100K max, 15K/hour). Results: deliverable, risky, unknown, undeliverable
- **Credit economics**: Email reveals cost 0.5-1 credit each. Phone reveals cost 1 credit each. Credits reset monthly. Phone credits are the expensive resource — only reveal phone numbers for high-priority prospects
- **Data accuracy**: ~95% for US contacts (industry-competitive). International data accuracy is significantly lower — budget for 10-20% higher bounce rates on non-US data. Validate international contacts with the email validation endpoint before sequencing
- **Cancel in-progress enrichment**: `PATCH /people/enrichment-requests/{id}` — useful for stopping large batch jobs if you realize the filters were wrong
- **Rate limits**: `/people/search` is 300/min (stricter than the general 500/min limit). `/people/find` is 350/min. Plan batch operations accordingly
- **Best for**: Teams using Amplemarket as their primary outreach platform who want enrichment built into the same workflow. No need for separate enrichment tools — data access is native. For standalone enrichment feeding external tools, the API supports it but credit costs add up at volume
- **Platform skill**: `/sales-amplemarket`

### In Sendr (Data Studio)

- **Data Studio module**: Verify and enrich contacts in Sendr's Sheets (internal spreadsheet-like data structure)
- **Email verification**: Validate emails before building personalized pages — avoids wasting credits on invalid contacts
- **Personality analysis**: Classifies contacts by personality type (e.g., "high green") to inform outreach tone. Unique to Sendr — most enrichment tools don't include behavioral profiling
- **Lead Finder as enrichment source**: 479M+ B2B contacts refreshed monthly. Use Lead Finder to fill gaps in existing lists (missing emails, phone numbers)
- **API enrichment** (Pro plan only): Add rows to Sheets via `POST /api/v1/sheet/{sheetId}/row`, then run enrichment through the UI or automation builder
- **Credit economics**: Enrichment operations consume credits from the same pool as page generation. At Growth plan (2,500/mo), budget enrichment carefully if also generating personalized pages
- **No waterfall enrichment**: Unlike Clay or Nooks, Sendr uses a single data source (its own 479M+ database). For comprehensive enrichment, combine Sendr Lead Finder with Clay or Apollo for waterfall coverage
- **Bulk operations**: Data Studio supports batch cleaning and enrichment on entire Sheets. No documented API endpoint for batch enrichment — UI-based only
- **Data accuracy**: US data is stronger than international. Validate international contacts with email verification before spending credits on personalized pages
- **Best for**: Teams already using Sendr for outreach who want basic enrichment without a separate tool. For heavy enrichment workflows, pair with Clay or Apollo
- **Platform skill**: `/sales-sendr`

### In Cognism

- **CRM Enrichment module**: Automated enrichment of existing CRM records at scale — connects to Salesforce (Professional+) and HubSpot (2-way sync) to refresh stale records with verified emails, phone numbers, job titles, and company data
- **Diamond Data phone verification** (Elevate plan only): Cognism's team manually calls mobile numbers to confirm they reach the right person. Claimed 98% accuracy, 22% connect rate. Grow plan mobiles are not phone-verified and have significantly lower connect rates
- **Email quality caveat**: Some email addresses are pattern-generated (firstname.lastname@domain) rather than verified. Run email validation through ZeroBounce or SafetyMails before large outbound campaigns to avoid bounces
- **API enrichment**: Search API finds contacts by filters (20-100 per request, 1,000 req/min), Redeem API returns full data based on your Entitlement. Entitlements must be configured in admin before API returns full fields
- **Fair-use cap**: "Unlimited" plans have a fair-use cap of ~2,000 records/user/month. Plan batch enrichment around this — for higher volume, contact Cognism about DaaS packages
- **Regional data quality**: EMEA data is industry-leading (strongest in UK, DACH, France, Nordics). US data has notable gaps vs ZoomInfo, especially mid-market. APAC is weakest — validate before use
- **Waterfall enrichment position**: Strong as primary provider for EMEA teams. For global coverage, pair with ZoomInfo (US) or Apollo (budget-friendly global). Cognism as secondary/tertiary in a waterfall adds EMEA phone coverage that other providers miss
- **Bombora intent enrichment** (Elevate plan only): Enrich accounts with intent topic scores showing active research behavior. 8-15 configurable topics. Combines with hiring/funding signals for composite scoring
- **Credit economics**: Quote-based pricing — Grow ~$15-25K platform + $1.5-2.5K/user/yr, Elevate ~$2.5K+/user. Discounts of 28-52% are common — never accept first quote. Watch for auto-renewal with 10-15% annual price increases
- **Best for**: Teams prospecting into EMEA who need phone-verified mobile numbers for cold calling. Diamond Data connect rates are the key differentiator. For US-only teams, ZoomInfo is stronger. For budget-conscious teams, Apollo offers more features at lower cost
- **Platform skill**: `/sales-cognism`

### In LeadIQ

- **Chrome Extension enrichment**: One-click contact capture from LinkedIn profiles and Sales Navigator. Reveals emails (1 credit) and phone numbers (10 credits) with direct push to Salesforce or HubSpot. Best for real-time enrichment during active prospecting sessions
- **CRM Enrichment module**: Salesforce native managed package with bi-directional sync, field mapping, and duplicate detection via email/name/company domain matching. HubSpot connects through Workato middleware — adds setup complexity but supports custom field mapping
- **Phone number accuracy caveat**: Phone data is LeadIQ's #1 complaint across 1,000+ G2 reviews. Mobile numbers may be personal cells, outdated, or wrong person. Cross-validate high-priority numbers through Cognism Diamond Data or ZoomInfo before cold calling
- **Account enrichment**: 3 credits per company — returns technology stack, funding info, revenue range, employee count. Use to screen company fit before spending 10+ credits on individual contact reveals
- **Credit economics**: Email = 1 credit, phone = 10, both = 11, account = 3. Pro plan starts at ~$200/mo for 200 credits (= ~18 full contacts). Credits don't roll over. Phone lookups are 10x more expensive than email — budget accordingly
- **API enrichment**: GraphQL API at `api.leadiq.com/graphql`. HTTP Basic auth. searchPeople, searchCompany, flatAdvancedSearch, groupedAdvancedSearch queries. 10 req/min (free) or 60 req/min (paid). submitPersonFeedback mutation for data corrections
- **Champion Tracking**: Monitors existing contacts for job changes — unique feature for enriching your warm pipeline. Alerts don't consume credits until you reveal updated contact info at the new company
- **Waterfall enrichment position**: Good as a secondary source for US email data. Weak on phones compared to Cognism (EMEA) or ZoomInfo (US). Best value is the champion tracking feature — no other enrichment tool offers systematic job change monitoring at this price point
- **Best for**: SDR teams doing high-volume LinkedIn prospecting who want one-click CRM push. Champion tracking is the key differentiator. For phone-heavy outbound, pair with a provider that has stronger phone verification
- **Platform skill**: `/sales-leadiq`

