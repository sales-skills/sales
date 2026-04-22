# Platform-Specific Prospecting Guide

Detailed per-platform list-building workflows, search filters, import/export procedures, and API prospecting instructions.

## Table of contents

- [In Apollo.io](#in-apolloio)
- [In ZoomInfo](#in-zoominfo)
- [Exporting for Mailshake](#exporting-for-mailshake)
- [Importing into Lemlist](#importing-into-lemlist)
- [Importing into Yesware](#importing-into-yesware)
- [Importing into Mixmax](#importing-into-mixmax)
- [Importing into Smartlead](#importing-into-smartlead)
- [Importing into Woodpecker](#importing-into-woodpecker)
- [Finding prospects with Mailmo](#finding-prospects-with-mailmo)
- [Finding prospects with Seamless.AI](#finding-prospects-with-seamlessai)
- [Finding prospects with Hunter.io](#finding-prospects-with-hunterio)
- [Finding prospects with Prospeo](#finding-prospects-with-prospeo)
- [Finding prospects with Tomba](#finding-prospects-with-tomba)
- [Importing into Reply.io](#importing-into-replyio)
- [Building lists from Outscraper (Google Maps)](#building-lists-from-outscraper-google-maps)
- [Building lists from Enrich.so (LinkedIn + employee search)](#building-lists-from-enrichso-linkedin-employee-search)
- [Building lists from Minelead (domain search + lead generation)](#building-lists-from-minelead-domain-search-lead-generation)
- [Building lists from Lobstr.io (web scraping + Google Maps + LinkedIn)](#building-lists-from-lobstrio-web-scraping-google-maps-linkedin)
- [Building lists from GetProspect (B2B database + LinkedIn extension)](#building-lists-from-getprospect-b2b-database-linkedin-extension)
- [Building lists from Skrapp (email finder + LinkedIn extension)](#building-lists-from-skrapp-email-finder-linkedin-extension)
- [Building lists from OpenWeb Ninja (Google Maps + web scraping APIs)](#building-lists-from-openweb-ninja-google-maps-web-scraping-apis)
- [Building lists from Anymail Finder (email finder + decision maker search)](#building-lists-from-anymail-finder-email-finder-decision-maker-search)
- [Building lists from Snov.io (all-in-one prospecting)](#building-lists-from-snovio-all-in-one-prospecting)
- [Building lists from ZeroBounce (email finder + validation)](#building-lists-from-zerobounce-email-finder-validation)
- [In Clearbit (Prospector)](#in-clearbit-prospector)
- [Building lists from RB2B (visitor-to-prospect)](#building-lists-from-rb2b-visitor-to-prospect)
- [Building lists from 6sense (Company Discovery + Sales Intelligence)](#building-lists-from-6sense-company-discovery-sales-intelligence)
- [Building lists from Clay](#building-lists-from-clay)
- [Building lists from LeadMagic](#building-lists-from-leadmagic)
- [Prospecting with AiSDR](#prospecting-with-aisdr)
- [Building prospect lists in Nooks](#building-prospect-lists-in-nooks)
- [Building prospect lists in Amplemarket](#building-prospect-lists-in-amplemarket)
- [Building prospect lists in Sendr (Lead Finder)](#building-prospect-lists-in-sendr-lead-finder)

### In Apollo.io

Use Apollo's People Search with these filter categories:
- **Job Titles**: Use "is any of" for title matching — Apollo supports exact and fuzzy matching
- **Seniority**: Filter by management level (C-suite, VP, Director, Manager)
- **Company**: Employee count ranges, revenue ranges, industry tags
- **Location**: Country, state, city, or metro area
- **Technologies**: Filter by tech stack (Apollo tracks 10,000+ technologies)
- **Signals**: Job changes, funding events, hiring activity

Save the search as a dynamic list — new matches will appear automatically.

### In ZoomInfo
- **Advanced Search** — 300+ filters: company size, revenue, industry, technology, location, job title, seniority, department, funding events, news triggers. Boolean operators (AND/OR/NOT) for precision targeting.
- **Intent layering** — filter prospects by companies showing buyer intent on your topics. Combines ICP fit with active research signals.
- **Org Chart** — once you identify target companies, use org charts to find the complete buying committee (economic buyer, champion, technical evaluator, end users).
- **Saved Searches** — save filter combinations and receive alerts when new contacts match. Good for "always-on" list building.
- **Export options** — export to CSV, push directly to CRM (Salesforce, HubSpot), or push to Engage sequences / Salesloft / Outreach.
- **Scoops** — filter by companies with active buying signals (projects, vendor evaluations, budget approvals) from ZoomInfo's research team.
- **Credit management** — search is free; exporting/enriching consumes credits. Plan exports carefully to conserve credits.
- **API** — POST `/search/contact` and `/search/company` for programmatic list building with the same 300+ filters.

### Exporting for Mailshake
- Export CSV with columns mapping to Mailshake recipient fields
- Required: `email` (only mandatory column)
- Recommended: `first`, `last`, `company`, `title` → merge fields {{first}}, {{last}}, {{company}}, {{title}}
- Custom fields: additional CSV columns become custom merge fields
- Pre-send: verify emails before import — Mailshake does not verify on upload. See `/sales-deliverability`

### Importing into Lemlist
- **CSV import**: Upload CSV with `email` as the only required column. Recommended fields: `firstName`, `lastName`, `companyName`, plus any custom fields for personalization variables.
- **API import**: `POST /api/campaigns/{id}/leads` with lead objects containing email and custom variables. See `/sales-lemlist` → `references/lemlist-api-reference.md`. Rate limit: 20 requests per 2 seconds.
- **People Database**: Alternative to external list building — Lemlist's built-in 600M+ contact database with smart filtering (title, seniority, industry, company size, intent signals). Leads are pre-verified. Pay per lead via credits.
- **CRM import**: Import leads directly from connected HubSpot, Salesforce, or Pipedrive via the CRM integration.
- **Pre-send**: Enable Lemwarm on all email accounts and warm up 3-5 weeks before launching sequences. Verify emails before import to keep bounce rate <3%.

### Importing into Yesware
- **Individual add**: Add recipients one at a time within a campaign — enter name, email, and custom fields
- **Bulk import**: Upload a CSV or import from Salesforce list views (Enterprise plan)
- **Prospector**: Alternatively, use Yesware's built-in Prospector (100M+ B2B contacts) to find and add leads directly — search by title, industry, company size, and more
- **Salesforce import**: Enterprise plan users can import leads/contacts directly from Salesforce list views into campaigns
- **Pre-send**: Verify emails before import — Yesware does not verify on upload. Keep bounce rate <3%.
- **Recipient limits**: Free plan = 10 recipients/month, Pro = 20/month, Premium+ = unlimited

### Importing into Mixmax
- **From Gmail**: Mixmax lives in Gmail — any contact you email is automatically available
- **From CSV**: Upload CSV to add recipients to sequences (map email, first name, last name, custom fields)
- **From Salesforce**: Import Salesforce leads/contacts directly into sequences (Growth+CRM plan); use Salesforce list views or reports as source
- **From HubSpot**: Import HubSpot contact lists into Mixmax sequences (Growth plan)
- **Via API**: `POST /sequences/:id/recipients` to programmatically add recipients to a sequence
- **Via rules**: Auto-enroll contacts based on Salesforce triggers (e.g., new lead created → add to sequence)
- **Limits**: Recipient limits per sequence vary by plan; check Mixmax plan details

### Importing into Smartlead
- **CSV import**: Upload CSV with `email` as the only required column. Recommended fields: `first_name`, `last_name`, `company`, plus any custom fields for merge variables.
- **API import**: `POST /api/v1/campaigns/{id}/leads` with a `lead_list` array containing lead objects. See `/sales-smartlead` → `references/smartlead-api-reference.md`.
- **SmartProspect**: Alternative to external list building — Smartlead's built-in verified lead database with intent signals. 3x email verification (syntax, domain, mailbox). Pay per verified lead via credits.
- **Pre-send**: Verify emails before import to keep bounce rate <3%. SmartProspect leads are pre-verified; external lists are not.

### Importing into Woodpecker
- **From Lead Finder**: Built-in B2B database with 1B+ leads — search by company, title, industry, location. Uses data credits (400 free, more from €28/2K credits). Export directly into campaigns.
- **From CSV**: Upload CSV to add prospects to campaigns (map email, first name, last name, company, custom fields)
- **From Google Sheets**: Native integration for ongoing prospect sync
- **From HubSpot/Pipedrive**: Native CRM integrations sync contacts into Woodpecker
- **Via API**: `POST /prospects` to create prospects, then add to campaigns via campaign endpoints
- **Via Zapier/Clay**: Connect any lead source to Woodpecker prospect creation
- **Auto-verification**: Woodpecker automatically validates prospect emails via Bouncer when added — invalid emails are flagged before sending
- **Limits**: Pricing based on "contacted prospects" per month — every new person added to a campaign counts against limit

### Finding prospects with Mailmo
- **Email Finder**: Enter a person's first name, last name, and company domain → Mailmo returns their verified email. Best for one-at-a-time lookups when you already know who you want to reach.
- **LinkedIn Chrome Extension**: Browse LinkedIn or Sales Navigator profiles → click the Mailmo extension → verified email appears. Great for building prospect lists while browsing Sales Navigator search results.
- **Catch-all advantage**: Mailmo's catch-all verification provides definitive results on domains where other finders return "risky" or "unknown."
- **No bulk search**: Mailmo does not have a company/domain search like Hunter or Tomba — you need to know the person's name. For finding all emails at a company, use Hunter.io Domain Search or Tomba Domain Search instead.
- **Export**: Download found emails as CSV for import into CRM or outbound tools.
- **Pre-send**: Emails found via Mailmo are already verified — no separate verification step needed.

### Finding prospects with Seamless.AI
- **Prospector**: Search 1.8B+ contacts with filters — title, seniority, department, industry, company size, revenue, location, technologies, keywords, news mentions. Browse/search is free — only pay credits when you reveal contact info.
- **Buyer Intent layer**: Combine Prospector search with Buyer Intent signals to prioritize accounts actively researching your category. Find the right people at accounts showing buying behavior.
- **Job Changes**: Monitor target personas for role changes — new leaders buy in their first 90 days. Use job change signals as a prospecting trigger.
- **Autopilot**: Set ICP criteria and Seamless.AI continuously builds lists in the background. "Set and forget" prospecting.
- **Chrome Extension**: Find contacts while browsing LinkedIn, company websites, and news articles. One-click save to lists or CRM.
- **Export**: Save to Seamless.AI lists, export CSV, or push directly to CRM (Salesforce, HubSpot) and engagement tools (Salesloft, Outreach, Mixmax).
- **Credit costs**: 1 credit per contact reveal. Search is free. Pro plan: ~1,000 credits/day/user (expire daily). Set daily caps on Autopilot.
- **Pre-send**: Seamless.AI verifies emails at point of reveal — no separate verification step needed for freshly revealed contacts.

### Finding prospects with Hunter.io
- **Discover**: Search for companies by industry, employee count, location, and technology — find companies matching your ICP without consuming credits. Then use Domain Search to find contacts at each.
- **TechLookup**: Find companies using specific technologies — great for competitive displacement (find companies using a competitor) or complementary targeting (find companies using tools adjacent to yours).
- **Domain Search**: Enter a target company's domain → Hunter returns all known emails with names, titles, departments, seniority, and confidence scores. Filter by department and seniority to narrow to decision-makers.
- **Email Finder**: Have a specific person's name? Provide first name + last name + domain → Hunter returns their email with confidence score and verification status.
- **Bulk operations**: Process hundreds of domains or name+domain pairs through bulk API endpoints. Async processing with job status polling.
- **Browser Extension**: Chrome/Firefox extension finds emails on any website you visit — works on LinkedIn and company sites.
- **Export**: Save results to Hunter Lead Lists, then export as CSV or push to CRM via HubSpot/Salesforce/Pipedrive integration.
- **Pre-send**: Always verify found emails with Hunter's Email Verifier before importing into campaign tools. Hunter separates finding from verification — both consume credits.

### Finding prospects with Prospeo
- **Search Person**: Search 200M+ contacts with 30+ filters — industry, seniority, department, location, headcount, funding, tech stack, years of experience. Up to 25 results per page, 25,000 max.
- **Search Company**: Search 30M+ companies — then use results to find people at target accounts.
- **Company-targeted search**: Use `company.websites` filter with up to 500 target domains to find contacts at specific accounts. Combine with `person_seniority` and `person_department` to narrow to decision-makers.
- **Search → Enrich workflow**: Search returns profiles but NOT emails/phones. Use Bulk Enrich Person (50 per call) on search results to get verified contact info.
- **Chrome extension**: Extract contacts from LinkedIn Sales Navigator while browsing.
- **Export**: Enriched data available via API response — push to CRM via native HubSpot/Salesforce integration, Zapier, Make, or n8n.
- **Credit costs**: 1 credit per search request that returns results + 1 credit per person enriched. Budget for both steps.
- **Pre-send**: Prospeo's 5-step verification is built into enrichment — use `only_verified_email: true` to get only deliverable addresses.

### Finding prospects with Tomba
- **Domain Search**: Enter a target company's domain → Tomba returns all known emails with names, titles, departments, seniority, and confidence scores. Filter by department (sales, engineering, marketing) and seniority (executive, senior) to narrow to decision-makers.
- **Email Finder**: Have a specific person's name? Provide name + domain → Tomba returns their email with a confidence score. Great for ABM when you know who you want to reach.
- **LinkedIn Finder**: Browse LinkedIn for prospects → use Tomba's LinkedIn Finder (or browser extension) to find their email from the profile URL.
- **Email Format**: Check a company's email pattern first (`/v1/email-format`) — if you know it's `first.last@domain.com`, you can predict emails for people not yet in the database.
- **Bulk operations**: Process thousands of name+domain pairs through bulk email finder. Async with webhook callbacks.
- **Export**: Save results to Tomba lead lists, then export as CSV or sync to CRM via HubSpot/Salesforce/Pipedrive integration.
- **Pre-send**: Always verify found emails with Tomba's Email Verifier before importing into campaign tools. Tomba separates search credits from verification credits.

### Importing into Reply.io
- **From B2B database**: Reply.io has a built-in database of 1B+ contacts — search by industry, company size, title, location, tech stack. Use data credits to reveal emails/phones.
- **From CSV**: Upload CSV to add contacts to sequences (map email, first name, last name, company, custom fields)
- **From Chrome extension**: Reply.io email finder extension finds emails while browsing LinkedIn or company websites
- **From Salesforce/HubSpot**: Native 2-way sync imports CRM contacts directly into Reply.io
- **Via API**: `POST /contacts` to create contacts, then add to sequences via Sequence Contacts endpoints
- **Via Zapier/Make**: Connect any lead source to Reply.io contact creation
- **Limits**: Unlimited contact storage on Multichannel plan; data credits required for B2B database reveals

### Building lists from Outscraper (Google Maps)
- **Google Maps scraping**: Search by category + location (e.g., "restaurants brooklyn usa") to extract business names, addresses, phones, websites, ratings, hours, categories, and coordinates. Up to 500 results per query.
- **Contacts & Leads enrichment**: For each business found, use Outscraper's Contacts & Leads endpoint to find up to 3 email/phone contacts per company — adds decision-maker emails on top of the business listing.
- **Email & contact scraping**: Pass business website URLs to Outscraper's Emails & Contacts endpoint to scrape all public email addresses from those sites.
- **Company Insights**: Enrich business records with firmographic data, tech stack, and social profiles.
- **Export**: Download results as CSV/JSON for import into any outbound tool. Or use Zapier integration to push results directly to your CRM or sequence tool.
- **Best for**: Local business prospecting, brick-and-mortar lead lists, location-based campaigns, agency clients targeting specific geographies or verticals.
- **Pricing**: Free tier gives 500 Google Maps records/month. Pay-as-you-go beyond that ($0.002/record medium tier, $0.001/record business tier).

### Building lists from Enrich.so (LinkedIn + employee search)
- **Search Company Employees**: Given a company domain or LinkedIn URL, Enrich.so returns all employees with name, title, LinkedIn URL, and (if available) email/phone. Use this to build targeted lists from specific accounts — great for ABM.
- **LinkedIn enrichment**: Start with a LinkedIn profile URL and get verified email, phone, company info, and job history. Build your list from LinkedIn Sales Navigator exports.
- **Email Finder**: Enter a name + company domain to get verified email addresses. Works for individual lookups or bulk CSV upload (up to 25K rows).
- **Company Data**: Enrich company records with headcount, industry, revenue range, founding year, tech stack, and social profiles via domain or LinkedIn URL.
- **Similar Companies**: Found a great-fit account? Use Enrich.so's Similar Companies endpoint to find lookalike companies and expand your target list.
- **Bulk processing**: Upload CSV with LinkedIn URLs, domains, or names+companies for batch enrichment — results available in dashboard or via API callback.
- **Best for**: ABM list building from LinkedIn, enriching Sales Navigator exports, expanding account lists with lookalikes, building persona-specific lists from company employee data.
- **Pricing**: Pay-per-credit model — Email Finder costs 1 credit, LinkedIn enrichment 1 credit, Company Data 1 credit, Similar Companies 1 credit per result.

### Building lists from Minelead (domain search + lead generation)
- **Company Email Search**: Enter a domain and Minelead returns all discovered email addresses for that company. Use to build contact lists from a target account list — 500M+ emails indexed across 100M+ business profiles. 1 credit per successful search.
- **Lead Finder / Tags**: `POST /v1/tags` — discover companies and contacts from keyword tags and geographic locations. Great for building initial prospect lists when you have an ICP but no target company list yet (e.g., "SaaS companies in London").
- **Email Finder**: Find a specific person's email by entering first name, last name, and company domain. 1 credit per find. Use after identifying decision-makers on LinkedIn or company websites.
- **Built-in verification**: Every email found can be immediately verified via Minelead's Email Verifier (quality scores 25-100%) before adding to your outbound list. Catches catch-all domains and invalid addresses.
- **Leads CRM**: Save found emails into collections, organize by campaign or segment, and export as CSV. Import into Google Sheets, Zoho CRM, or any tool via Zapier.
- **Bulk operations**: Upload CSV of domains for batch email discovery. Plan limits: Free/Starter (50), Pro (100), Business (1,000), Enterprise (unlimited).
- **Browser extensions**: Chrome and Firefox extensions — look up company emails while browsing LinkedIn profiles or company websites without switching tabs.
- **Best for**: Building email lists from target account domains, discovering contacts at specific companies, keyword-based company discovery, and verifying found emails in one workflow.
- **Pricing**: Free (25 credits/mo), Starter $39/mo (1K), Pro $69/mo (10K), Business $149/mo (50K), Enterprise $299/mo (200K).

### Building lists from Lobstr.io (web scraping + Google Maps + LinkedIn)
- **Google Maps Leads Scraper**: Search by category + location to extract business names, addresses, phones, websites, ratings, hours, and more. Export structured data as CSV/JSON. Great for local business prospecting.
- **Google Maps Reviews Scraper**: Extract reviews with ratings, text, and reviewer info — use for competitive research or identifying dissatisfied customers of competitors.
- **LinkedIn Sales Navigator Leads Scraper**: Extract lead data from Sales Navigator searches. Requires cookie-based account sync (1-click browser extension) — scrapes behind the login wall without sharing credentials.
- **50+ additional scrapers**: Twitter users, YouTube channels, Instagram profiles, e-commerce product listings, and more. Each scraper returns structured data you can export and import into your outbound tools.
- **Scheduled automation**: Set up recurring scrapes to build lists automatically — e.g., scrape new Google Maps listings in your target area weekly and export to Google Sheets.
- **Multi-threading**: Run hundreds of concurrent scrapers for large-scale list building across multiple geographies or verticals simultaneously.
- **Export options**: Google Sheets (native), Amazon S3, SFTP, or retrieve via API as JSON. Webhook notifications when runs complete.
- **Best for**: Local business prospecting from Google Maps, LinkedIn lead extraction, building lists from any website at scale, monitoring new listings/profiles over time with scheduled scrapes.
- **Pricing**: Free (100 credits, 30 rows/export), paid from €50/mo. 1 credit = 1 unique result. Credits refresh monthly.

### Building lists from GetProspect (B2B database + LinkedIn extension)
- **B2B Contact Database**: Search 200M+ contacts and 26M+ companies with 17+ filters — name, company, title, industry, location, tech stack, employee count, revenue. Returns verified email addresses (95% accuracy) with enrichment data.
- **LinkedIn Email Finder Extension**: Chrome extension that exports leads directly from LinkedIn and Sales Navigator searches. Extracts names, titles, companies, and finds verified emails — great for building targeted lists from LinkedIn without manual data entry.
- **Reverse Email Lookup**: Already have an email? Get back the person's name, title, company, and firmographic data to enrich your existing list.
- **Bulk finding**: Upload a CSV of names + companies for batch email finding. Enriches in bulk with 40+ data attributes.
- **Built-in CRM**: Save found contacts into lists, add tags, notes, custom properties. Organize by campaign or segment. Export as CSV/XLSX.
- **Cold email sequences**: Build your list, verify emails, and send cold email sequences all within GetProspect — no need to export to a separate sending tool. A/B testing, auto-stop on reply, timezone-aware sending.
- **Best for**: Building B2B prospect lists with verified emails, enriching LinkedIn exports, combining email finding + verification + outreach in one tool.
- **Pricing**: Free (50 emails/mo), Starter $49/mo (1K), Growth 5K $99/mo (5K), Growth 20K $199/mo (20K), Growth 50K $399/mo (50K). Credits roll over.

### Building lists from Skrapp (email finder + LinkedIn extension)
- **Email Finder**: Search by name + company/domain to find verified professional emails. 92% average success rate. 200M+ business contacts in database.
- **Lead Finder**: Search Skrapp's B2B database with filters — job title, location, industry, company size, revenue, seniority. Build targeted lists without needing LinkedIn.
- **LinkedIn Chrome Extension**: Extract verified emails from LinkedIn and Sales Navigator profiles. Processes 25 profiles/second. Multi-page enrichment on Professional+ plans — bulk extract from search results pages.
- **Company Search**: Enter a company name or domain to discover all professionals at that company with verified emails. 20M+ company profiles.
- **Data Enrichment (bulk)**: Upload CSV/Excel of names + companies. Skrapp auto-maps columns, enriches with verified emails, job titles, and firmographic data. AI Fields add buying role, seniority, function, and gender.
- **List management**: Save contacts into lists, export as CSV/XLSX, or sync directly to CRM (HubSpot, Salesforce, Pipedrive, Zoho, Outreach).
- **Best for**: Finding verified B2B emails by name/domain, building lists from LinkedIn at scale, enriching existing contact spreadsheets with AI-powered segmentation fields.
- **Pricing**: Free (100 credits/mo, 1 user). Professional €30/mo (1,000 credits, 2 users). Enterprise €262/mo (50,000 credits, 15 users). No charge for duplicates or invalid results.

### Building lists from OpenWeb Ninja (Google Maps + web scraping APIs)
- **Local Business Data API**: Search and retrieve businesses directly from Google Maps. 40+ fields per business — name, phone, email, website, address, coordinates, ratings, review count, opening hours, social links, photos, reviews, posts. Supports nearby search, keyword search, bulk search, and autocomplete.
- **Website Contacts Scraper API**: Extract emails, phone numbers, and social links from any website domain. Great for building contact lists from a list of target company domains.
- **Email Search API**: Real-time web search for publicly available emails by company/person query. Cast a wide net for email discovery beyond traditional B2B databases.
- **API-only workflow**: OpenWeb Ninja is a developer API stack — no GUI for list building. Build your pipeline: Local Business Data → extract businesses → Website Contacts Scraper → enrich with emails/phones → export to CRM or outbound tool.
- **Best for**: Local/SMB prospecting from Google Maps data, building contact lists from website scraping, developers building custom prospecting pipelines.
- **Pricing**: Per API — Free (50-500/mo), Pro $25/mo (10K-20K), Ultra $75/mo (50K-100K), Mega $150/mo (200K-300K). Each API subscribed separately.

### Building lists from Anymail Finder (email finder + decision maker search)
- **Email Finder by Company/Domain**: Find up to 20 verified emails at any company in one search. 1 credit per search — great for building contact lists from a target company list.
- **Decision Maker Search**: Find specific roles at target companies — CEO, engineering, finance, HR, IT, marketing, sales, operations, buyer, logistics. Returns name, title, LinkedIn URL, and verified email. 2 credits per valid result.
- **GeoLead Finder**: Location-based lead discovery for geographic prospecting. Create searches, check status, download results.
- **Bulk Email Search**: Upload CSV/Excel of up to 100K names + companies for batch email finding. Async processing (~1K rows in 5 min). Credits charged only when you download results.
- **Domain Email Count**: Check how many emails are available at a domain before committing credits. Order and download full domain email lists.
- **Best for**: Building targeted lists by decision maker role, bulk email finding from name+company lists, geographic prospecting via GeoLead Finder.
- **Pricing**: Starter €14/mo (50 credits), Standard €39/mo (1K), Scale €129/mo (5K), Ultimate €259/mo (25K). Pay only for verified emails.

### Building lists from Snov.io (all-in-one prospecting)
- **Domain Search**: Find all emails and prospect profiles at a company domain. Filter by position/role to find decision-makers. 1 credit per unique domain request.
- **Email Finder (Name + Domain)**: Find specific individual's email by name and domain. Batch support for processing multiple prospects at once.
- **LinkedIn Extension + LinkedIn Search**: Find emails directly from LinkedIn profiles — Chrome extension for browsing, in-platform LinkedIn search without extension.
- **LinkedIn Profile Enrichment**: Extract complete prospect data from LinkedIn URLs via API — name, title, company, verified email. 1 credit per profile.
- **Company Domain Lookup**: Start with company names, discover their domains, then run domain search for emails.
- **Email Count Check**: Free check to see how many emails are available at a domain before spending credits — helps prioritize which companies to research.
- **Prospect Management**: Built-in list management with custom fields. Create lists, add prospects, and move directly into campaigns — no CSV export/import needed.
- **Email Verifier**: Verify prospect emails inline (98% accuracy, 7-tier). Send only to verified addresses.
- **Best for**: End-to-end prospecting workflow — find → verify → warm up → campaign in one platform. LinkedIn enrichment and domain search are the standout features for list building.
- **Pricing**: Trial Free (50 credits), Starter $39/mo (1K credits), Pro S $99/mo (5K), Pro M $149/mo (20K), Pro L $249/mo (50K).

### Building lists from ZeroBounce (email finder + validation)
- **Email Finder**: Find B2B email addresses by name + domain. Each found email is validated automatically. 20 credits per successful find. 10 free queries/month on the free plan.
- **Bulk validation before outreach**: Upload prospect lists (CSV/TXT) for batch validation. Detects invalid, spam traps, disposable, catch-all, and abuse addresses. Remove bad addresses before importing into outbound tools.
- **AI Scoring for catch-all domains**: Score catch-all addresses (1-10) to decide which are worth including. Helps expand your sendable list beyond just "valid" results.
- **Activity Data for prioritization**: Append engagement recency (30-365+ day windows) to decide which contacts to prioritize. Recently active contacts are more likely to respond.
- **Best for**: Validating and cleaning prospect lists before outreach, finding emails for named contacts, scoring catch-all addresses, and prioritizing by engagement recency.
- **Pricing**: Free 100/mo, PAYG $39/2K credits, ZeroBounce ONE $99/mo for 25K. Email Finder uses 20 credits per find.

### In Clearbit (Prospector)
- **Contact search by domain**: `GET prospector.clearbit.com/v1/people/search?domain={domain}` — search for contacts at any company by domain. Returns name, email, title, role, seniority, and verified status for each match.
- **Filtering**: Narrow results by role, seniority, title, city, state, country, or name. Combine filters to find specific personas (e.g., VP-level marketing contacts in San Francisco).
- **Pagination**: Use `page` and `page_size` parameters (max 100 per page) to iterate through large result sets.
- **Suppression**: Use the suppression parameter to exclude contacts from a specific domain — useful for filtering out your own employees or existing customers.
- **Combine with Reveal**: Pair Prospector with Clearbit Reveal (IP intelligence) to identify companies visiting your website, then use Prospector to find decision-makers at those companies. Turns anonymous traffic into targeted prospect lists.
- **Paid add-on**: Prospector is not included in standard Clearbit enrichment plans — it requires a separate subscription.
- **Acquired by HubSpot**: Clearbit was acquired by HubSpot in December 2023. HubSpot customers may have access through their HubSpot subscription; standalone API access may change over time.
- **Best for**: Finding contacts at specific target companies by domain, ABM list building when you already have a target account list, converting website visitors into prospect lists via Reveal + Prospector.

### Building lists from RB2B (visitor-to-prospect)
- **Person-level visitor identification**: RB2B's pixel identifies individual website visitors (US traffic only) — name, work email, LinkedIn URL, job title, and company. Unlike Clearbit Reveal (company-level only), RB2B gives you the person, not just the company.
- **Hot Pages for intent filtering**: Mark pricing, demo, and comparison pages as "Hot Pages" — only build lists from visitors who viewed high-intent content. Reduces noise from casual browsing.
- **Hot Leads for ICP filtering**: Apply firmographic and demographic filters (title, company size, industry, seniority) to only surface visitors matching your ICP. Automated list qualification.
- **CRM integration**: Push identified visitors directly to HubSpot or Salesforce as new leads/contacts. Auto-create records when ICP-matching visitors hit Hot Pages.
- **Outbound tool integration**: Native integrations with Apollo, Salesloft, Outreach, Smartlead, and Clay — push identified visitors directly into outbound sequences.
- **Identity Resolution API**: For programmatic list building, use the API (api.rb2b.com) to resolve IPs, LinkedIn URLs, and emails. Chain endpoints: IP→LinkedIn→Email to build a full contact record.
- **Best for**: Converting anonymous website visitors into actionable prospect lists, warm outbound to people who've already shown interest, combining website intent with ICP filtering for high-quality lists.
- **Coverage**: Pro+ plans: 35-45% person-level match rate for US visitors. Free plan: company-level only (150 resolutions/mo).

### Building lists from 6sense (Company Discovery + Sales Intelligence)
- **Company Discovery**: 6sense identifies new accounts matching your ICP that aren't in your CRM — proactive list building from intent signals. Accounts showing buying behavior for your category are surfaced automatically.
- **Sales Intelligence search**: Search 6sense's database for contacts by title, seniority, department, company, industry, and more. Free plan gives 50 credits/mo for basic search.
- **Intent-driven list building**: Build prospect lists filtered by buying stage (Consideration+), intent topics, and ICP fit. Focus on accounts actively researching your category — higher conversion than cold lists.
- **Segment-based lists**: Create 6sense segments combining firmographic fit + intent signals + buying stage, then export or sync matched accounts/contacts to CRM or outbound tools.
- **Buyer discovery**: Once 6sense identifies an in-market account, use buyer discovery to find the right contacts (by persona, seniority, department) at that account.
- **Chrome extension**: Browse LinkedIn or company websites and see 6sense intent data, buying stage, and firmographics in a sidebar. One-click save to lists.
- **Export to outbound**: Push 6sense-identified accounts and contacts to Outreach, Salesloft, or CRM for sequencing. Native integrations maintain intent context.
- **Best for**: Enterprise ABM teams building high-quality, intent-driven prospect lists. Not cost-effective for generic list building — use Apollo, ZoomInfo, or Hunter for broader prospecting without ABM context.
- **Pricing**: Free plan: 50 credits/mo (basic search). Paid plans: $50K+/year for full Company Discovery + intent-driven list building.

### Building lists from Clay

- **Import sources**: Pull prospects from Salesforce, HubSpot, LinkedIn Sales Navigator, CSV uploads, or webhook triggers into Clay tables.
- **Waterfall enrichment**: Enrich imported lists with work emails, phone numbers, firmographics, and technographics via 150+ providers. Coverage compounds across providers — aim for 85-95% with 3-5 provider waterfalls.
- **Claygent for list building**: Use AI research agents to find prospects matching specific criteria — scrape company websites, extract team pages, research industry directories.
- **Signals for dynamic lists**: Track job changes, funding events, and website visits to automatically add new prospects to tables as triggers fire.
- **Audiences**: Build dynamic buyer segments from enriched data + signals + CRM data. Audiences auto-update as new data flows in.
- **Export to outbound tools**: Push enriched lists to Outreach, Salesloft, Apollo, Lemlist, Smartlead, or Clay's own Email Sequencer.
- **Best for**: GTM engineers building automated prospect pipelines — import → enrich → segment → outreach in one workflow.

### Prospecting with AiSDR

- **Built-in database**: AiSDR provides access to 700M+ contacts — search by title, seniority, industry, company size, and buying signals. No separate prospecting tool needed.
- **ICP filtering**: Define your Ideal Customer Profile in AiSDR and the AI finds matching prospects automatically. Filters include persona, company attributes, and intent signals.
- **HubSpot import**: Sync HubSpot lists directly into AiSDR campaigns — no CSV export/import. Bi-directional sync keeps contacts updated.
- **No CSV import for external lists**: AiSDR is designed to use its own database or CRM imports. For lists built in other tools (Apollo, ZoomInfo, Clay), import into HubSpot first, then sync to AiSDR.
- **Lead search credits**: 1,200/mo on Explore ($900/mo), 4,500/mo on Grow ($2,500/mo). Credits consumed when adding prospects to campaigns.
- **AI enrichment**: AiSDR researches each prospect individually — company news, tech stack, job postings, LinkedIn activity — for personalized outreach. This happens automatically as part of campaign execution.
- **Best for**: Teams who want AI-driven prospecting and outreach in one platform without managing separate tools. For advanced list building with custom enrichment waterfalls, use Clay or Apollo and push to AiSDR via CRM sync.

### Building lists from LeadMagic

- **Employee Finder**: Discover employees at target companies at just 0.05 credits each — the cheapest bulk discovery option. Great for building initial lists of contacts at target accounts.
- **Role Finder**: Find specific roles at companies (e.g., "VP Sales at Acme") for targeted prospecting (1-2 credits).
- **Email Finder**: Enrich discovered contacts with verified work emails (1 credit per valid result, free for not_found).
- **Mobile Finder**: Add direct dial numbers for phone-based outreach (5 credits per valid result).
- **Company Search**: Identify target companies by firmographics, technographics, and competitors, then use Employee/Role Finder to build contact lists.
- **Jobs Finder**: Search job listings to identify companies with active hiring signals — a proxy for growth and budget.
- **API-first approach**: All endpoints are REST APIs — pipe results directly into CRM, outbound tools, or Clay for further enrichment.
- **Best for**: GTM engineers building automated prospecting pipelines via API. Combine with Clay waterfall for maximum coverage.

### Building prospect lists in Nooks

- **Signals & Intelligence module**: 100+ pre-built buyer signals from CRM data, call transcripts, web-based intent, hiring activity, funding events, and competitor usage
- **Dynamic prospect lists**: Auto-updating lists based on signal combinations — e.g., "companies hiring SDRs + using competitor CRM + raised Series B in last 6 months"
- **Custom signal builder**: Create proprietary signals from your data sources to define ICP criteria
- **AI lead prioritization**: Ranks prospects by conversion likelihood based on signal strength, so reps work the highest-potential prospects first
- **Account research automation**: AI researches accounts 24/7, surfacing relevant context (recent news, tech stack, org structure) before calls
- **Waterfall enrichment built in**: Once prospects are on a list, Nooks enriches across 9 providers (Apollo, Cognism, ContactOut, Datagma, Forager, LeadIQ, PDL, Prospeo, ZoomInfo) to find verified mobiles and emails
- **Import sources**: Pull prospects from CRM (Salesforce, HubSpot, Pipedrive), CSV upload, or SEP (Outreach, Salesloft, Apollo)
- **No standalone prospecting database**: Nooks doesn't have its own contact database like Apollo or ZoomInfo. It enriches contacts you bring in or find via signal-based triggers
- **Best for**: Teams already using Nooks for dialing who want signal-driven list building integrated with the dialer. For cold prospecting from scratch (finding new contacts at new companies), use Apollo, ZoomInfo, or Seamless.AI first, then import into Nooks

### Building prospect lists in Amplemarket

- **Searcher database**: 300M+ B2B contacts with advanced filters — industry (1000+ options), department, job function, company size, funding stage, technologies used, location (country/state/city)
- **Intent-driven prospecting**: Combine search filters with intent signals — find companies in your ICP that are also showing buying signals (researching your category, hiring for roles you solve, recently funded)
- **Lead Lists via API**: `POST /lead-lists` — create lists from LinkedIn URLs, emails, or names. Add up to 10K leads per batch with `POST /lead-lists/{id}/leads`
- **People Search API**: `POST /people/search` — programmatic search with the same filters as the UI. 300 requests/min rate limit. Returns enriched profiles with email, phone, LinkedIn, company data
- **Dynamic lists**: Search criteria saved as dynamic lists — new matches appear automatically as Amplemarket's database updates (70M+ weekly updates)
- **CRM import**: Pull existing contacts from Salesforce or HubSpot, then use Searcher to find similar companies (lookalike search)
- **Exclusion management**: API supports `POST /excluded-emails` and `POST /excluded-domains` to prevent contacting competitors, customers, or opted-out contacts
- **Sequence integration**: Lists feed directly into multichannel sequences — no export/import step needed. Enrichment happens at list creation time
- **Credit consumption**: Each contact reveal costs 0.5-1 email credit + 1 phone credit. Large list builds consume credits quickly — use email-only reveals for initial prospecting, then phone-enrich high-priority matches
- **Data quality notes**: US data is strongest (~95% accuracy). International coverage varies significantly — validate emails before sequencing non-US contacts
- **Best for**: Teams using Amplemarket as their primary platform who want prospecting, enrichment, and outreach in one flow. Comparable to Apollo's database (300M+ contacts) but bundled with the full engagement suite
- **Platform skill**: `/sales-amplemarket`

### Building prospect lists in Sendr (Lead Finder)

- **Lead Finder module**: Access 479M+ global B2B contacts, refreshed monthly. Search by ICP criteria, intent signals, and company attributes
- **Personality analysis**: Unique to Sendr — classifies leads by personality type during search, enabling tone-matched outreach from the start
- **Export to Sheets**: Results save to Sendr's internal Sheets data structure. From there, enrich via Data Studio, then generate personalized pages/videos
- **API prospecting** (Pro plan only): `GET /api/v1/sheet` to list sheets, `POST /api/v1/sheet/{sheetId}/row` to add contacts programmatically. No dedicated search API — Lead Finder is UI-based
- **Credit consumption**: Each lead reveal from Lead Finder consumes credits. Budget carefully — at Growth plan (2,500 credits/mo), lead search + enrichment + page generation all draw from the same pool
- **Data quality**: US data is strongest. International coverage varies — validate emails via Data Studio before spending credits on personalized video pages for non-US contacts
- **No CRM import**: Sendr doesn't pull existing contacts from Salesforce/HubSpot for prospecting. It's a net-new lead source. Import existing contacts manually via CSV or API
- **Integration with outreach**: Lists feed directly into Sendr's campaign module and page generation. No export step needed if using Sendr end-to-end. For external sending tools, export from Sheets or use API
- **Best for**: Teams wanting a single tool for prospecting + personalized outreach (video + pages). For large-scale prospecting (100K+ contacts), Apollo or ZoomInfo may be more cost-effective — Sendr's credit model makes bulk prospecting expensive
- **Platform skill**: `/sales-sendr`

### Building prospect lists in Cognism

- **Sales Intelligence search**: Filter by job title, seniority, department, industry, company size (headcount), revenue, location (country/region/city), and technologies used. Build targeted lists matching your ICP criteria
- **Diamond Data filtering** (Elevate plan only): Filter search results to show only contacts with phone-verified mobile numbers — ensures every contact on your list has a confirmed direct dial. Best for cold calling campaigns where connect rate matters more than list size
- **Intent-driven prospecting** (Elevate plan only): Bombora intent signals show which companies are actively researching topics relevant to your product. Build lists of contacts at surging accounts — these are higher-conversion prospects than cold lists
- **Hiring & funding signals**: Filter for companies posting relevant job openings or announcing funding rounds. Both are strong buying indicators that improve list quality
- **Chrome Extension**: LinkedIn overlay showing Cognism data for any profile or company page. Prospect one-by-one from LinkedIn and export directly to CRM. Available on all plans
- **Export options**: Export to Salesforce (as Leads or Contacts with/without Accounts, requires Professional+), HubSpot (2-way sync), Pipedrive, Dynamics 365, Outreach, Salesloft, or CSV
- **Regional coverage**: EMEA (especially UK, DACH, France, Nordics) is Cognism's strongest region with the deepest Diamond Data coverage. US data has gaps vs ZoomInfo — for US-heavy prospecting, consider Apollo or ZoomInfo as primary. APAC coverage is limited
- **Fair-use cap**: ~2,000 records/user/month under "unlimited" plans. For large list builds (10K+ contacts), budget across multiple users or contact Cognism about DaaS packages
- **API prospecting**: Search API (20-100 records per request, 1,000 req/min) enables programmatic list building. Redeem API gets full contact data. Useful for automated ICP-based list refreshes
- **DNC compliance**: Cognism checks contacts against 13 European Do Not Call lists (UK TPS/CTPS, Germany, France, Spain, Italy, etc.). Contacts are flagged but still visible — filter them out before exporting to calling campaigns
- **Best for**: EMEA-focused teams that prioritize phone-verified mobile data for cold calling. Diamond Data is the key differentiator — no other provider offers human-verified mobiles at scale. For US prospecting or budget-conscious teams, pair with ZoomInfo or Apollo
- **Platform skill**: `/sales-cognism`

### Building prospect lists in LeadIQ

- **Chrome Extension prospecting**: Primary list-building method — browse LinkedIn profiles or Sales Navigator search results and capture contacts one by one with the sidebar overlay. One-click reveal of email and phone, then push directly to CRM or sales engagement tool
- **AI Account Prospecting** (Enterprise only): Automatically surfaces high-fit accounts based on your ICP definition and identifies key decision-makers. Pro users are limited to manual Chrome Extension prospecting
- **Champion Tracking for warm lists**: Build prospect lists from past champions who changed jobs. Import your closed-won contacts and LeadIQ monitors job changes — when a champion moves to a new company, you get a warm prospect without cold prospecting
- **GraphQL API prospecting**: `flatAdvancedSearch` returns a flat list of people matching ICP criteria (job title, seniority, company size, geography, technologies, industry). `groupedAdvancedSearch` returns results organized by company. Useful for automated list refreshes
- **Search dimensions**: Filter by job title, seniority level, role/function, company size, geography, technologies used, funding status, industry classification. Sort by name, seniority, title, or update date
- **Export options**: Direct push to Salesforce (native managed package), HubSpot (via Workato), Salesloft, Outreach, Gong, Groove by Clari. CSV export available
- **Credit planning for list building**: 200 Pro credits = 200 emails-only OR ~18 full contacts (email + phone). For large list builds, use email-first capture (1 credit each) then selectively reveal phones for top prospects
- **Data quality**: Email accuracy is generally reliable. Phone number accuracy is the platform's weakest point — plan for ~30-40% invalid phone data based on G2 reviews. Cross-validate with a second provider for calling campaigns
- **Regional coverage**: Strongest in US. EMEA coverage weaker than Cognism. APAC limited. For European prospecting, consider Cognism as primary
- **Best for**: SDR teams building lists through LinkedIn prospecting who want one-click CRM push. Champion tracking builds warm lists no other tool can match. For bulk list building (10K+ contacts), Apollo or ZoomInfo offer better credit economics
- **Platform skill**: `/sales-leadiq`

