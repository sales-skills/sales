# Sales Skills

[![Skills](https://img.shields.io/badge/skills-110-blue)](https://skills.sh/sales-skills/sales)
[![Platforms](https://img.shields.io/badge/platforms-50%2B-green)](https://skills.sh/sales-skills/sales)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](LICENSE)
[![Install](https://img.shields.io/badge/install-npx%20skills%20add%20sales--skills%2Fsales-black)](https://skills.sh/sales-skills/sales)

Claude Code skills for sales, marketing, and GTM workflows.

## Quick Start

```bash
npx skills add sales-skills/sales --skills sales-do
```

Not sure which skill you need? Just run `/sales-do` and describe what you're trying to accomplish — it routes you to the right skill (99 first-party + 53 third-party skills).

Want every skill at once?

```bash
npx skills add sales-skills/sales
```

## What is `sales-do`?

`/sales-do` is a router skill — the single entry point for 93 skills in this repo + 53 third-party skills. Describe your objective in plain language and it matches you to the right specialized skill with a ready-to-use prompt. You don't need to memorize which skill does what.

```
/sales-do write a cold outbound sequence for CFOs at mid-market fintech companies
```

### How the workflow works

1. **You invoke the router** with a plain-language request (or no arguments at all).

2. **The router asks clarifying questions** — it always asks, even if you provided arguments. It needs to fully understand your situation: what you're trying to do, who the audience is, where you are in the process, and any constraints. Questions use multiple-choice options to make answering fast.

3. **The router detects your installed skills** — it checks `~/.claude/skills/` to see what you already have, so it only shows install commands for skills you're missing.

4. **The router matches and recommends** — it picks the best skill(s) and explains why. For complex objectives it recommends a full sequence of skills (no limit on how many).

5. **The router generates verbose, ready-to-use prompts** — for every recommended skill, it outputs a detailed `/skill-name` invocation packed with all the context you provided. You can copy-paste-run each prompt directly and get a great result without re-explaining anything.

### What it does NOT do

- It does **not** solve the problem itself — it never writes copy, audits SEO, or designs pricing. It only routes.
- It does **not** auto-invoke the target skill — you run the generated prompts yourself, so you stay in control.

### Example session

```
> /sales-do I need to launch our new product

Router asks:
  What kind of product?
  - A) SaaS / software
  - B) Physical product
  - C) Service / consulting

  Who is the target buyer?
  - A) SMB / startup founders
  - B) Mid-market (VP/Director level)
  - C) Enterprise (C-suite)
  - D) Consumer / B2C

  What assets do you already have?
  - A) Nothing yet — starting from scratch
  - B) We have positioning/messaging docs
  - C) We have a landing page but need the launch plan
  ...

Router recommends a 5-skill sequence:
  1. /product-marketing-context <verbose prompt with all your context>
  2. /launch-strategy <verbose prompt referencing step 1 output>
  3. /copywriting <verbose prompt for launch landing page>
  4. /email-sequence <verbose prompt for launch email campaign>
  5. /social-content <verbose prompt for launch social posts>
```

## Skills Catalog

### Prospecting & Pipeline

| Skill | What it does |
|---|---|
| `/sales-prospect` | ICP definition, target lists, lead identification |
| `/sales-research` | Account/contact research, competitive intel, org charts |
| `/sales-outreach` | Cold emails, LinkedIn messages, multi-touch sequences |
| `/sales-pipeline` | Pipeline review, forecasting, deal prioritization |

### Active Deals

| Skill | What it does |
|---|---|
| `/sales-discovery` | Discovery/qualification call prep, MEDDIC/BANT |
| `/sales-demo` | Demo prep, pitch decks, presentation customization |
| `/sales-proposal` | Proposals, pricing, SOWs, business cases, ROI |
| `/sales-objection` | Objection handling, negotiation prep |
| `/sales-follow-up` | Nurture, re-engagement, going-dark recovery |
| `/sales-close` | Closing strategies, mutual action plans, urgency |

### Qwilr & Proposals

| Skill | What it does |
|---|---|
| `/sales-proposal-page` | Write and structure a Qwilr proposal page with interactive quote blocks |
| `/sales-proposal-analytics` | Interpret Qwilr engagement signals and decide follow-up actions |
| `/sales-deal-room` | Design multi-stakeholder Qwilr deal rooms for complex B2B deals |
| `/sales-qwilr-automation` | Build automations connecting Qwilr to CRM via API, Zapier, or native integrations |
| `/sales-proposal-template` | Design reusable Qwilr proposal templates for your whole sales team |

### Salesloft & Platform

| Skill | What it does |
|---|---|
| `/sales-salesloft` | Salesloft platform help — config, Rhythm, Conversations, Drift, integrations |
| `/sales-cadence` | Design multi-channel outbound cadences with timing, A/B testing, and content |
| `/sales-call-review` | Review sales calls, extract coaching insights, score against MEDDPICC/SPIN |
| `/sales-deal-inspect` | Inspect deal health, map stakeholders, identify risks, recommend next actions |
| `/sales-forecast` | Build and validate revenue forecasts with pipeline coverage and gap analysis |

### Apollo.io & Platform

| Skill | What it does |
|---|---|
| `/sales-apollo` | Apollo.io platform help — config, CRM sync, API, analytics, dialer, credits, admin |
| `/sales-apollo-sequences` | Create and manage Apollo sequences — deliverability, A/B testing, mailbox config |

### Mailshake & Platform

| Skill | What it does |
|---|---|
| `/sales-mailshake` | Mailshake platform help — campaigns, Lead Catcher, recipients, senders, API, webhooks |

### Lemlist & Platform

| Skill | What it does |
|---|---|
| `/sales-lemlist` | Lemlist platform help — multichannel sequences, Lemwarm, People Database, enrichment, LinkedIn automation, calls, WhatsApp, API |

### Smartlead & Platform

| Skill | What it does |
|---|---|
| `/sales-smartlead` | Smartlead platform help — campaigns, SmartSenders, SmartInfra, SmartAgents, SmartDialer, SmartDelivery, SmartProspect, API, agency/white-label |

### Yesware & Platform

| Skill | What it does |
|---|---|
| `/sales-yesware` | Yesware platform help — email tracking, campaigns, templates, Prospector, Meeting Scheduler, Salesforce integration, reporting |

### Mixmax & Platform

| Skill | What it does |
|---|---|
| `/sales-mixmax` | Mixmax platform help — sequences, email tracking, one-click meetings, rules engine, dialer, AI Compose, Salesforce/HubSpot integration, polls, reporting |

### Reply.io & Platform

| Skill | What it does |
|---|---|
| `/sales-reply` | Reply.io platform help — multichannel sequences, Jason AI SDR, B2B database, email warmup, deliverability tools, unified inbox, analytics, Salesforce/HubSpot integration, agency features |

### Woodpecker & Platform

| Skill | What it does |
|---|---|
| `/sales-woodpecker` | Woodpecker platform help — cold email campaigns, condition-based sequences, email warmup, Bounce Shield, Adaptive Sending, email verification, inbox rotation, centralized inbox, LinkedIn automation, Lead Finder, agency panel, API & webhooks |

### Mailmo & Platform

| Skill | What it does |
|---|---|
| `/sales-mailmo` | Mailmo platform help — Email Finder, Email Verifier, catch-all detection, LinkedIn Chrome extension, bulk verification, CSV export |

### Hunter.io & Platform

| Skill | What it does |
|---|---|
| `/sales-hunter` | Hunter.io platform help — Domain Search, Email Finder, Email Verifier, Campaigns, Discover, Signals, TechLookup, Leads, browser extension, MCP server, API & integrations |

### Prospeo & Platform

| Skill | What it does |
|---|---|
| `/sales-prospeo` | Prospeo platform help — person enrichment, company enrichment, person/company search, bulk operations, Chrome extension, LinkedIn Sales Navigator extraction, 5-step email verification, API & integrations |

### Tomba & Platform

| Skill | What it does |
|---|---|
| `/sales-tomba` | Tomba.io platform help — domain search, email finder, email verifier, enrichment, author finder, LinkedIn finder, phone finder, bulk operations, browser extensions, API & integrations |

### Seismic & Platform

| Skill | What it does |
|---|---|
| `/sales-seismic` | Seismic platform help — Enablement Cloud, content management, Learning & Coaching, Aura AI, Digital Sales Rooms, Meeting Intelligence, LiveSend, LiveDocs, Programs, API & integrations |

### Allego & Platform

| Skill | What it does |
|---|---|
| `/sales-allego` | Allego platform help — AI-powered revenue enablement with Modern Learning (video training, AI role-play, conversation intelligence), Modern Content (AI-recommended content, centralized library), Digital Sales Rooms, coaching scorecards, Salesforce/HubSpot/Dynamics integrations |

### SWAI & Platform

| Skill | What it does |
|---|---|
| `/sales-swai` | SWAI.ai platform help — Autonomous Revenue OS with AI-driven campaign execution, landing page builder, AI chat widget, CRM, email automation, AI assistants (sales, support, lead gen, appointment scheduling), content tools, white-label partner program, analytics |

### Tagshop & Platform

| Skill | What it does |
|---|---|
| `/sales-tagshop` | Tagshop.ai platform help — AI UGC video ad generator (1000+ avatars, AI Twin, URL-to-Video, text-to-video, auto-captions, campaign publishing to Facebook/Instagram/TikTok/YouTube) and shoppable UGC galleries (Instagram/TikTok content collection, AI product tagging, Shopify/WooCommerce/BigCommerce/Wix integration, analytics) |

### influData & Platform

| Skill | What it does |
|---|---|
| `/sales-infludata` | influData platform help — AI-powered influencer marketing with creator discovery (20M+ profiles, prompt-based AI search, lookalike builder), audience analysis (50+ metrics, fake follower detection, overlap analysis), campaign management (real-time tracking, EMV/CPM/reach KPIs, sentiment analysis, shitstorm detection), social listening (brand mentions, hashtags, UGC), outreach mailing, Co-Pilot AI, Chrome extension |

### Creator.co & Platform

| Skill | What it does |
|---|---|
| `/sales-creatorco` | Creator.co platform help — AI-powered influencer marketing with London AI agent (automated creator matching from 400M+ profiles, AI outreach), campaign management (briefs, approvals, payouts), creator marketplace (creator.space), UGC with full usage rights, affiliate tracking (Impact, CJ, Awin, Rakuten), Shopify product gifting, Deep Insights reports, performance analytics (ROAS, conversions) |

### MicroLaunch & Platform

| Skill | What it does |
|---|---|
| `/sales-microlaunch` | MicroLaunch platform help — product launch and discovery platform for startups and indie makers. Month-long launch cycles (leaderboard ranking over 30 days), community scoring (idea and product scores), Pro Launch ($39/mo — skip queue, 2x boosts, featured spots, Product of the Day), deals marketplace (lifetime deals, discounts), DR59+ do-follow SEO backlinks, auto distribution (4+ SEO-optimized pages), verified product reviews, landing page audits |

### LaunchingNext & Platform

| Skill | What it does |
|---|---|
| `/sales-launchingnext` | LaunchingNext platform help — curated startup directory with 45,000+ listed startups. Free submission (editorial review, weeks/months queue), expedited review ($99 for 1-business-day consideration), promoted ads (Seed Boost $500/mo, Growth Engine $1,500/mo, Market Leader $4,500/mo with guaranteed impressions), DR51 do-follow backlinks, weekly newsletter (5,000+ founders), Twitter/X distribution (14.9K followers) |

### SideProjectors & Platform

| Skill | What it does |
|---|---|
| `/sales-sideprojectors` | SideProjectors platform help — marketplace to buy, sell, and showcase side projects (24,500+ listings). Free listing with no commission, co-founder matching, project showcase, editorial review, DR69 do-follow backlinks (highest among project directories), no escrow/payment handling (peer-to-peer), 631 categories |

### ProductBurst & Platform

| Skill | What it does |
|---|---|
| `/sales-productburst` | ProductBurst platform help — product launch and discovery platform with daily and weekly rankings (ongoing, not single-day like Product Hunt). Community upvoting, Top of Day/Week badges (shareable SVGs), featured homepage placement (one-time fee), DR46 do-follow backlinks, idea validation without a full build, comment threads, marketplace. No gatekeepers — launch in under 5 minutes |

### SoloPush & Platform

| Skill | What it does |
|---|---|
| `/sales-solopush` | SoloPush platform help — product launch and discovery platform for indie makers and solopreneurs with no launch day pressure. Community upvoting, daily trending, product reviews and comments, DR46-47 do-follow backlinks, solo maker community focus, idea-stage posting. Free submission, no editorial gatekeeping, instant listing |

### CtrlAlt.cc & Platform

| Skill | What it does |
|---|---|
| `/sales-ctrlaltcc` | CtrlAlt.cc platform help — curated startup tool directory with 26 categories, daily featured products, community upvoting, free submission (editorial review queue, up to 2 months), paid launch ($39 for week-long homepage feature with dofollow links), DA30 dofollow backlinks, Product of the Week newsletter |

### Open Launch & Platform

| Skill | What it does |
|---|---|
| `/sales-openlaunch` | Open Launch platform help — open-source Product Hunt alternative with tiered backlink system. Free submission (queue, conditional DR65 dofollow backlink requiring Top 3 daily + badge display), Premium launch ($12 for next-day launch with guaranteed DR65 backlink, 10 slots/day), SEO Growth ($59 for dedicated review article + backlink), daily rankings, community upvoting, 1,000+ listed tools |

### Huzzler & Platform

| Skill | What it does |
|---|---|
| `/sales-huzzler` | Huzzler platform help — founder community and weekly product launch competition for startups. Launch Arena (Mon-Wed submissions, Wed-Sun voting, Gold/Silver/Bronze badges with dofollow backlinks for winners only), community categories (#feedback, #showcases, #wins, #growth, #marketing), Huzzler Black ($79 one-time — lifetime premium visibility, verified badge, SEO boost), product showcases, Stripe-verified MRR, advertising credits ($34 promoted), AI-free community |

### Firsto & Platform

| Skill | What it does |
|---|---|
| `/sales-firsto` | Firsto platform help — fair product launch platform for indie makers with sustained SEO discovery. Free submission (~180-day queue, dofollow for Top 3 only + badge), Premium ($19.90 for 24-hour launch with guaranteed DR57+ backlink), Pro ($59.90 — 30-day homepage feature, mini review, star ratings in search), SEO Growth ($149 for custom review article), permanent SEO-optimized product pages, 72 categories, forked from Open Launch |

### OpenHunts & Platform

| Skill | What it does |
|---|---|
| `/sales-openhunts` | OpenHunts platform help — weekly product launch and discovery platform for indie makers. Free submission (~89-week queue, dofollow for Top 3 weekly only), Premium ($9.90 for next-Monday launch with guaranteed DR50 dofollow backlink), Highlight ($20/week — instant pinned launch with guaranteed Twitter/newsletter shoutout), weekly Monday launch cycle, 72+ categories, founder leaderboards |

### Awesome Indie & Platform

| Skill | What it does |
|---|---|
| `/sales-awesomeindie` | Awesome Indie platform help — curated startup and indie product directory. Free submission only (no paid tiers), editorial review queue, DR ~19-31 (backlink type unconfirmed — sources conflict on dofollow vs nofollow), 1-3 products listed per day, categories include AI, productivity, SaaS. Created by Diogo Capela |

### LaunchDay & Platform

| Skill | What it does |
|---|---|
| `/sales-launchday` | LaunchDay platform help — curated 24-hour product launch events for indie makers. $99 submission fee (only charged if selected), 1-2 events per month (max 20 products), >40% discount required, 30-min podcast interview (LaunchDay Podcast, 53+ episodes), influencer promotion (100K+ followers), Slack community, permanent archive. Created by Dagobert Renouf |

### Super Launch & Platform

| Skill | What it does |
|---|---|
| `/sales-superlaunch` | Super Launch platform help — minimalist product launch directory where every product gets 7 days on the front page. Covers free submission (nofollow backlink), paid dofollow backlinks (DR59), $49/month advertising, Top 50 Leaderboard, category browsing, and voting system |

### JustGotFound & Platform

| Skill | What it does |
|---|---|
| `/sales-justgotfound` | JustGotFound platform help — community-curated product discovery platform (Product Hunt alternative). Free submission with DR23 dofollow backlink, paid promotion tiers ($50/week to $500/3 months), community voting, category browsing (AI, Productivity, Marketing, Dev Tools), earnings program |

### Tiny Startups & Platform

| Skill | What it does |
|---|---|
| `/sales-tinystartups` | Tiny Startups platform help — curated startup launch directory and newsletter for bootstrapped founders and indie makers. Free submission (DR50 dofollow backlink), weekly human curation (#1 Product of the Week), newsletter distribution (17,500+ subscribers on Beehiiv), income reports, deals section, founder directory (17,500+ founders) |

### DevHunt & Platform

| Skill | What it does |
|---|---|
| `/sales-devhunt` | DevHunt platform help — open-source developer tool launch platform ("Product Hunt for developers"). Free submission (DR57-62 dofollow backlink), $49 featured placement, GitHub-authenticated voting, weekly rankings, 25+ developer categories, newsletter promotion. Founded by John Rush, part of MarsX ecosystem |

### TinyLaunch & Platform

| Skill | What it does |
|---|---|
| `/sales-tinylaunch` | TinyLaunch platform help — weekly product launch platform for indie makers (Product Hunt alternative). Free submission (DR60-71 dofollow backlink for Top 3), $39 premium launch (skip queue, guaranteed dofollow), weekly badge system, newsletter sponsorship ($50/issue to ~11,000 subscribers), featured spot placement. Founded by Christopher Woggon |

### Uneed & Platform

| Skill | What it does |
|---|---|
| `/sales-uneed` | Uneed platform help — social launchpad for tech products with daily voting competitions. Free submission (DR74 dofollow backlink), skip-the-line ($29.99), Pro subscription ($89/yr with vote multiplier and monthly relaunch), newsletter sponsorship ($147 to 15,000 subscribers at 40% open rate), premium ad spots, product reviews. Founded by Thomas Sanlis |

### Startup Directory Launch Strategy

| Skill | What it does |
|---|---|
| `/sales-launch-directory` | Startup directory launch strategy — coordinates submissions across Open Launch, CtrlAlt.cc, ProductBurst, SoloPush, MicroLaunch, LaunchingNext, SideProjectors, Huzzler, Firsto, OpenHunts, Awesome Indie, LaunchDay, Super Launch, JustGotFound, Tiny Startups, DevHunt, TinyLaunch, Uneed, Product Hunt, and more. Platform selection, launch sequencing (instant-list first, editorial last), backlink stacking, listing optimization, budget allocation, multi-directory coordination |

### Seamless.AI & Platform

| Skill | What it does |
|---|---|
| `/sales-seamless` | Seamless.AI platform help — Prospector, Buyer Intent, Job Changes, CRM Enrich, Pitch Intelligence, Engagement Hub, AI Agents, Autopilot, Chrome extension, API & integrations |

### SafetyMails & Platform

| Skill | What it does |
|---|---|
| `/sales-safetymails` | SafetyMails platform help — bulk email verification (19-step algorithm, up to 2M emails), real-time API for form validation, Email Finder, spamtrap/disposable detection, integrations |

### SendGrid & Platform

| Skill | What it does |
|---|---|
| `/sales-sendgrid` | SendGrid (Twilio) platform help — Email API, Marketing Campaigns, transactional email, dynamic templates, domain authentication, dedicated IPs, IP warmup, Event Webhooks, Inbound Parse, Email Validation API, suppressions, statistics, 7 official SDKs, 353 partner integrations |

### Postmark & Platform

| Skill | What it does |
|---|---|
| `/sales-postmark` | Postmark (ActiveCampaign) platform help — transactional email API, SMTP relay, Message Streams (transactional/broadcast), Handlebars templates, Inbound email parsing, 7 webhook types, DMARC Monitoring, bounce management, suppressions, dedicated IPs, sender vetting, best-in-class deliverability (98.7% inbox placement) |

### Mailgun & Platform

| Skill | What it does |
|---|---|
| `/sales-mailgun` | Mailgun (Sinch) platform help — developer-first transactional email API and SMTP relay, inbound email routing with custom parsing, templates, mailing lists, Domains API (DKIM/SPF/DNS), Routes, webhooks (8 event types), Metrics API, Mailgun Optimize (inbox placement testing, email validation, reputation monitoring), dedicated IPs, tags |

### Customer.io & Platform

| Skill | What it does |
|---|---|
| `/sales-customerio` | Customer.io platform help — customer engagement & marketing automation, Journeys (visual workflow builder), multi-channel messaging (email, SMS, push, in-app, WhatsApp), Data Pipelines (reverse ETL), Custom Objects, Ad Audience Sync, Transactional Messages API, segmentation, Broadcasts, A/B testing, analytics |

### Klaviyo & Platform

| Skill | What it does |
|---|---|
| `/sales-klaviyo` | Klaviyo platform help — AI-first B2C CRM and marketing automation for e-commerce. Flows (visual automation), Campaigns, Segmentation (behavior + predictive), Predictive Analytics (CLV, churn risk), Multi-channel (email, SMS, WhatsApp, RCS, push), Forms, Reviews, Klaviyo Data Platform (CDP, 350+ integrations), AI Agents, Catalogs, Coupons, Reporting (revenue attribution, benchmarks) |

### Outscraper & Platform

| Skill | What it does |
|---|---|
| `/sales-outscraper` | Outscraper platform help — data extraction and enrichment from Google Maps, reviews, and 50+ internet sources. Google Maps Places scraping (business data), Google Maps Reviews, Google Search/News, Emails & Contacts (website scraping), Contacts & Leads (enrichment), Company Insights, Email Validation, Amazon products/reviews, multi-platform review scraping (Yelp, Tripadvisor, G2, Trustpilot, Glassdoor, Capterra), YouTube Comments, Geocoding, REST API, Zapier/n8n |

### GetProspect & Platform

| Skill | What it does |
|---|---|
| `/sales-getprospect` | GetProspect platform help — B2B email finder, verifier, enrichment, and cold email outreach. Email Finder (200M+ contacts, 26M+ companies, 17+ filters, 95% accuracy), LinkedIn Email Finder Extension (Chrome, Sales Navigator export), Contact Enrichment (40+ data attributes), Email Verifier (catch-all detection, 97% deliverability guarantee, bulk verification), Cold Email Software (multi-step sequences, A/B testing, auto-stop, timezone-aware sending, SPF/DKIM checks), Built-in CRM (lists, tags, custom properties), Reverse Email Lookup, Phone Numbers, Team Collaboration, REST API, native CRM integrations (HubSpot, Salesforce, Pipedrive, Zoho, Outreach, Salesloft), Zapier, Google Sheets |

### Skrapp & Platform

| Skill | What it does |
|---|---|
| `/sales-skrapp` | Skrapp platform help — B2B email finder, data enrichment, and lead generation. Email Finder (200M+ contacts, 92% success rate), Lead Finder (B2B database, 17+ filters), Data Enrichment (bulk CSV/Excel, auto-mapping, AI Fields for buying role/seniority/function/gender), Email Verifier (97% accuracy, personal/disposable detection), LinkedIn Chrome Extension (25 profiles/sec, multi-page enrichment), Company Search (20M+ profiles), CRM integrations (HubSpot, Salesforce, Zoho, Pipedrive, Outreach), Zapier, REST API |

### OpenWeb Ninja & Platform

| Skill | What it does |
|---|---|
| `/sales-openwebninja` | OpenWeb Ninja platform help — 30+ real-time public data APIs for sales prospecting and enrichment. Website Contacts Scraper (emails, phones, social links from any domain), Email Search (web-indexed email discovery), Local Business Data (Google Maps 40+ fields), Social Links Search, Real-Time Web Search (SERP, AI Overviews, Knowledge Graph), JSearch (200M+ job postings), Web Unblocker (JS rendering, rotating proxies), Product Data (Amazon, eBay, Walmart, Costco), Finance Data, AI/LLM APIs. RapidAPI marketplace, per-API subscription ($0-$150/mo per API) |

### Anymail Finder & Platform

| Skill | What it does |
|---|---|
| `/sales-anymailfinder` | Anymail Finder platform help — email finder and verification with 97%+ delivery guarantee. Email Finder by Person (name + company/domain), Email Finder by Decision Maker (10 role categories), Email Finder by Company/Domain (up to 20 emails), Email Finder by LinkedIn URL, Email Verifier (valid/risky/invalid, 0.2 credits), Bulk Email Search (100K rows, async, webhook), GeoLead Finder (location-based), Chrome Extension, REST API v5.1 (no rate limits), Make/Zapier/n8n (7,000+ apps). Pay only for verified emails |

### ZeroBounce & Platform

| Skill | What it does |
|---|---|
| `/sales-zerobounce` | ZeroBounce platform help — email validation and deliverability suite. Email Validation (99.6% accuracy, 30+ types, bulk + real-time API), Email Finder (name + domain, 20 credits/find), AI Email Scoring (catch-all 1-10 scale), Activity Data (engagement recency 30-365+ days), Inbox Placement Testing (100+ configs), Blacklist Monitoring (200+ providers, 24/7), DMARC Monitor (multi-domain), Email Warmup (automated engagement simulation), REST API v2 (US/EU endpoints, 13 SDKs), 60+ native integrations, Zapier (2,000+ apps). SOC 2 Type 2, ISO-27001, GDPR/HIPAA/CCPA |

### Snov.io & Platform

| Skill | What it does |
|---|---|
| `/sales-snov` | Snov.io platform help — AI-powered sales automation and lead generation. Email Finder (domain search, name+domain, LinkedIn enrichment, company domain lookup), Email Verifier (98% accuracy, 7-tier, SMTP checks), Multichannel Campaigns (email + LinkedIn sequences, drip campaigns, A/B testing, sentiment analysis, AI email writer), LinkedIn Automation ($69/mo add-on — profile views, connections, follow-ups), Sales CRM (deals, pipelines, Google Calendar sync), Email Warmup (freemail support, large pool), Deliverability Check (inbox placement, reputation), Email Tracker (Gmail extension), REST API (33+ endpoints, OAuth 2.0, 60 req/min, webhooks), 5,000+ integrations (native HubSpot, Pipedrive, Salesforce, Zoho, Close, Freshsales + Zapier/Make) |

### Lobstr.io & Platform

| Skill | What it does |
|---|---|
| `/sales-lobstr` | Lobstr.io platform help — no-code web scraping and data collection at scale. 50+ ready-made scrapers (Google Maps Leads, Google Maps Reviews, LinkedIn Sales Navigator Leads, Twitter, YouTube, Vinted, and more), multi-threading (hundreds of concurrent scrapers), cookie-based account sync (scrape behind login walls), scheduled automation, data export (Google Sheets, Amazon S3, SFTP), webhooks (4 events with retry), Make integration, async REST API, Python SDK, CLI, MCP Server, enterprise custom scrapers |

### Minelead & Platform

| Skill | What it does |
|---|---|
| `/sales-minelead` | Minelead platform help — B2B email finder, verifier, and lead generation. Company Email Search (domain-based, 500M+ emails, 100M+ business profiles), Email Finder (name + domain), Lead Finder / Tags (keyword + location discovery), Email Verifier (quality scoring 25-100%), Disposable Email Detector, Email Campaigns (Gmail round-robin), Leads CRM, Bulk Operations (CSV upload), Browser Extensions (Chrome, Firefox), Integrations (HubSpot, Zoho CRM, Google Sheets, Zapier), REST API |

### Enrich.so & Platform

| Skill | What it does |
|---|---|
| `/sales-enrichso` | Enrich.so platform help — LinkedIn enrichment (profile → verified email, phone, company data, job history), Reverse Email Lookup, Email Finder (name + domain), Phone Finder, Company Data (domain or LinkedIn URL → firmographics, tech stack, social profiles), Similar Companies, Search Company Employees, bulk enrichment (CSV upload or API batch), REST API, Zapier/n8n/Make integrations |

### ActiveCampaign & Platform

| Skill | What it does |
|---|---|
| `/sales-activecampaign` | ActiveCampaign platform help — marketing automation (visual builder, 900+ recipes), email marketing (drag-and-drop, A/B testing, predictive sending), CRM (pipelines, deals, lead scoring, win probability), segmentation (tags, lists, behavioral, engagement-based), multi-channel (email, SMS, site messages, Facebook Custom Audiences), landing pages, forms, site tracking, event tracking, transactional email (via Postmark), 900+ integrations, REST API v3 |

### Mailchimp & Platform

| Skill | What it does |
|---|---|
| `/sales-mailchimp` | Mailchimp platform help — email campaigns, Customer Journey Builder automations, SMS marketing, audience management, segmentation, landing pages, transactional email (Mandrill), A/B testing, Content Studio, generative AI, 300+ integrations, Marketing + Transactional APIs |

### Closum & Platform

| Skill | What it does |
|---|---|
| `/sales-closum` | Closum platform help — omnichannel marketing automation: email, SMS, WhatsApp, Telegram, Web Push, no-code automations, AI assistant, landing pages, contact management, API & integrations |

### Groove.cm & Platform

| Skill | What it does |
|---|---|
| `/sales-groove` | Groove.cm platform help — GroovePages, GrooveFunnels, GrooveSell, GrooveMail, GrooveAffiliate, GrooveMember, GrooveVideo, GrooveWebinar, GrooveBlog, GrooveKart, GrooveProof |

### Brevo & Platform

| Skill | What it does |
|---|---|
| `/sales-brevo` | Brevo platform help — email/SMS/WhatsApp campaigns, marketing automation (journeys), transactional messaging, Sales CRM, Conversations (live chat, chatbot), Loyalty programs, push notifications, e-commerce, landing pages, Aura AI, API & integrations |

### Iterable & Platform

| Skill | What it does |
|---|---|
| `/sales-iterable` | Iterable platform help — cross-channel customer engagement with Studio journey builder, Campaigns, email (Handlebars), SMS/MMS, push (iOS/Android/web), in-app messages, Mobile Inbox, Embedded Messages, WhatsApp, Experiments, Iterable AI (Brand Affinity, STO, Frequency Optimization, Predictive Goals, Journey Assist), Smart Ingest (23+ data sources), Snowflake Secure Data Sharing, Catalog, segmentation, system webhooks, REST API |

### GetResponse & Platform

| Skill | What it does |
|---|---|
| `/sales-getresponse` | GetResponse platform help — email marketing (newsletters, autoresponders), visual marketing automation, conversion funnels, landing pages, webinars (live/on-demand), course creator, premium newsletters, SMS, web push, live chat, e-commerce (Shopify/WooCommerce), contact scoring, AI content, transactional email (MAX only), REST API |

### Braze & Platform

| Skill | What it does |
|---|---|
| `/sales-braze` | Braze platform help — Canvas Flow, Campaigns, email (Liquid templating, Connected Content), push notifications, in-app messages, Content Cards, SMS/MMS/RCS, WhatsApp, LINE, BrazeAI (predictive, generative, Decisioning Studio), Braze Data Platform (CDI, Currents), segmentation, Catalogs, Feature Flags, transactional email API, REST API, Braze Alloys integrations |

### ZoomInfo & Platform

| Skill | What it does |
|---|---|
| `/sales-zoominfo` | ZoomInfo platform help — SalesOS (prospecting, enrichment, intent, Engage sequences, Chorus conversation intelligence), MarketingOS (B2B advertising, FormComplete, WebSights, Chat), OperationsOS (data orchestration, CRM hygiene, deduplication), Copilot (AI pipeline management), API (PKI/OAuth auth, search, enrich, lookup, bulk, webhooks) |

### Omnisend & Platform

| Skill | What it does |
|---|---|
| `/sales-omnisend` | Omnisend platform help — email campaigns, SMS marketing, web push, automation workflows, popups/forms, segmentation, product recommendations, reporting, Shopify/WooCommerce/BigCommerce integrations, API |

### SendPulse & Platform

| Skill | What it does |
|---|---|
| `/sales-sendpulse` | SendPulse platform help — email marketing, Automation 360, chatbots (Telegram, Facebook, WhatsApp, Instagram, Viber, Live Chat), CRM, online course builder (EDU), website/landing page builder, web push, SMS, SMTP transactional email, pop-ups, email verifier, API (OAuth 2.0, 7 SDKs), MCP Server |

### Clearbit & Platform

| Skill | What it does |
|---|---|
| `/sales-clearbit` | Clearbit (HubSpot) platform help — Person Enrichment (80+ attributes), Company Enrichment (100+ firmographics), Reveal (IP-to-company), Prospector (contact search), Name to Domain, Form Shortening, Risk API, Breeze Intelligence, API (REST, HTTP Basic Auth, 600 req/min) |

### RB2B & Platform

| Skill | What it does |
|---|---|
| `/sales-rb2b` | RB2B platform help — Person-Level Website Visitor ID (US only, 35-45% match rate), Company-Level ID (Demandbase, global), Hot Pages (high-intent page flagging), Hot Leads (ICP filtering), Traffic Insights, Identity Resolution API (api.rb2b.com — IP/LinkedIn/email/company resolution, credit-based), 50+ integrations (Slack, HubSpot, Salesforce, Apollo, Salesloft, Outreach, Clay) |

### 6sense & Platform

| Skill | What it does |
|---|---|
| `/sales-6sense` | 6sense platform help — Signalverse Intent Data (1T+ signals, buying stage predictions), Predictive Analytics (6AI Scoring, 6QA), Sales Intelligence (Sales Copilot, Chrome extension), AI Email Agents (automated personalized outreach), Advertising & Audience Activation (display, LinkedIn sync, retargeting), Orchestration Workflows, Segments, Company Identification API, People/Company Enrichment API, Company Discovery |

### Clay & Platform

| Skill | What it does |
|---|---|
| `/sales-clay` | Clay platform help — Waterfall Enrichment (150+ data providers, multi-provider fallback), Claygent (AI research agents), Sculptor (natural language workflow builder), Signals (job changes, funding, website visits), Audiences (dynamic buyer segments), Ad Sync (LinkedIn/Meta/Google Ads), Email Sequencer (native outbound), CRM Sync (Salesforce/HubSpot/Dynamics bidirectional), HTTP API actions, webhooks |

### LeadMagic & Platform

| Skill | What it does |
|---|---|
| `/sales-leadmagic` | LeadMagic platform help — Email Finder (97% accuracy), Email Validation (catch-all detection), Mobile Finder, Profile Search, Company Search (firmographics/technographics), Company Funding, Employee Finder, Role Finder, Job Change Detector, Jobs Finder, Google/Meta/B2B Ads Search, REST API (19 endpoints at api.leadmagic.io), MCP Server (Claude/Cursor/Windsurf), CLI |

### AdRoll & Platform

| Skill | What it does |
|---|---|
| `/sales-adroll` | AdRoll platform help — retargeting pixel setup, display/social/CTV/native/DOOH campaigns, dynamic retargeting, audience segmentation, ecommerce integrations (Shopify/BigCommerce/WooCommerce), RollWorks ABM (account-based targeting, HubSpot integration), email retargeting, cross-channel attribution, NextRoll API |

### Kit (ConvertKit) & Platform

| Skill | What it does |
|---|---|
| `/sales-kit` | Kit (formerly ConvertKit) platform help — Visual Automations, Sequences, Broadcasts, landing pages, forms, Creator Profile, Commerce (digital products, paid newsletters), Creator Recommendations, subscriber tagging, segmentation, engagement scoring, API |

### Funnels, Email Marketing & Digital Sales

| Skill | What it does |
|---|---|
| `/sales-funnel` | Build and optimize sales funnels — strategy, structure, conversion, A/B testing across ClickFunnels, GoHighLevel, Groove, and more |
| `/sales-email-marketing` | Opt-in email marketing — broadcasts, nurture sequences, automation, segmentation across Kit, GrooveMail, Mailchimp, ActiveCampaign, and more |
| `/sales-newsletter` | Newsletter monetization — paid subscriptions, sponsorships, ad sales, paid recommendations, premium tiers across Kit, Substack, Beehiiv, Ghost, and more |
| `/sales-audience-growth` | Grow an email list or newsletter audience — lead magnets, cross-promotion, referral programs, social-to-email across Kit, Beehiiv, Mailchimp, and more |
| `/sales-digital-products` | Sell digital products — ebooks, templates, courses, downloads, pricing strategy, launch playbooks across Kit Commerce, Gumroad, Lemon Squeezy, and more |
| `/sales-affiliate-program` | Design and manage affiliate programs — commissions, recruitment, tracking, payouts across GrooveAffiliate, PartnerStack, and more |
| `/sales-webinar` | Webinar-based selling — live and evergreen strategy, presentation, follow-up across GrooveWebinar, Demio, WebinarJam, and more |
| `/sales-membership` | Membership sites and online courses — structure, pricing, retention across GrooveMember, Kajabi, Teachable, and more |
| `/sales-checkout` | Checkout optimization — upsells, order bumps, payment plans, cart abandonment across GrooveSell, ThriveCart, SamCart, and more |
| `/sales-meeting-scheduler` | Schedule sales meetings — booking pages, round-robin, Calendly/Chili Piper, no-show reduction, meeting page conversion |
| `/sales-email-tracking` | Email engagement tracking — open/click/attachment tracking, follow-up timing, Apple MPP, tracking accuracy |
| `/sales-transactional-email` | Transactional/triggered email delivery — provider selection, API/SMTP integration, templates, deliverability across SendGrid, Postmark, Mailgun, Brevo, Customer.io, SES |
| `/sales-live-chat` | Live chat and chatbot for sales — widget setup, chatbot flows, agent routing, chat-to-lead conversion across Brevo, Drift, Intercom, HubSpot, Crisp, and more |
| `/sales-loyalty` | Customer loyalty programs — points, tiers, rewards, VIP programs, member engagement, ROI across Brevo Loyalty, Smile.io, LoyaltyLion, Yotpo, and more |
| `/sales-sms-marketing` | SMS marketing — opt-in collection, compliance (TCPA/GDPR), campaign types, automation, two-way messaging, analytics across Omnisend, Klaviyo, Attentive, Postscript, Brevo, and more |
| `/sales-data-hygiene` | CRM data quality — deduplication, record matching, data decay management, enrichment automation, normalization across ZoomInfo OperationsOS, Salesforce, HubSpot Operations Hub, Clay, LeanData, DemandTools |
| `/sales-b2b-advertising` | Account-based B2B advertising — display ads, retargeting, cross-channel campaigns, ABM ads, audience building, ad-to-pipeline attribution across ZoomInfo MarketingOS, Demandbase, 6sense, Terminus, RollWorks, LinkedIn Ads |
| `/sales-retargeting` | Retargeting and remarketing strategy — website visitor retargeting, cart abandonment recovery, dynamic product ads, cross-channel retargeting, audience segmentation, frequency capping, platform selection (AdRoll, Google Ads, Meta, Criteo, LinkedIn) |
| `/sales-push-notification` | Mobile and web push notification strategy — opt-in optimization, rich push, segmentation, timing, frequency capping, deep linking across Braze, OneSignal, Airship, Firebase/FCM, Customer.io, Klaviyo, Iterable, MoEngage |
| `/sales-in-app-messaging` | In-app messages and content cards — onboarding, feature announcements, surveys, promotions, trigger design across Braze, Iterable, Intercom, Pendo, Appcues, Customer.io, MoEngage |
| `/sales-chatbot` | Chatbot marketing and conversational automation — chatbot flows, multichannel messaging (WhatsApp, Telegram, Facebook, Instagram, Viber, live chat), lead qualification bots, FAQ bots, human handoff across SendPulse, ManyChat, Tidio, Intercom, Drift, HubSpot |

### Prospecting, Enrichment & Signals

| Skill | What it does |
|---|---|
| `/sales-prospect-list` | Build targeted B2B prospect lists with ICP definition, filters, and segmentation |
| `/sales-enrich` | Enrich contacts with emails/phones, CRM data hygiene, dedup, bulk enrichment |
| `/sales-intent` | Interpret buying signals, intent data, job changes, lead scoring, account prioritization |
| `/sales-compete` | Run competitive displacement campaigns — find competitor customers ready to switch |
| `/sales-account-map` | Map the buying committee at a target account with multi-threading strategy |
| `/sales-lead-score` | Design, weight, and tune a lead scoring model with MQL/SQL thresholds |

### Cross-Platform

| Skill | What it does |
|---|---|
| `/sales-deliverability` | Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement, blacklists, sender reputation |
| `/sales-agency-outbound` | Multi-client outbound for agencies — infrastructure, client isolation, white-labeling, onboarding |
| `/sales-lead-routing` | Design lead routing and assignment rules — round-robin, territory, score-based, account-based |
| `/sales-integration` | Connect sales tools with webhooks, Zapier/Make, native integrations, and CRM sync |

### Strategy & Content

| Skill | What it does |
|---|---|
| `/sales-positioning` | Messaging, value props, competitive differentiation |

### Sales Enablement & Content

| Skill | What it does |
|---|---|
| `/sales-content` | Organize, distribute, and measure sales collateral — battle cards, one-pagers, case studies, decks, playbooks, content governance |
| `/sales-coaching` | Sales coaching and training — onboarding, role-play, coaching frameworks, certifications, ramp time optimization |

### Marketing & GTM

> 33 marketing skills from [`coreyhaines31/marketingskills`](https://skills.sh/coreyhaines31/marketingskills).
> Install all: `npx skills add coreyhaines31/marketingskills`
> Install one: `npx skills add coreyhaines31/marketingskills --skills <skill-name>`

#### SEO & Content

| Skill | What it does |
|---|---|
| `/ai-seo` | Optimize content for AI search engines and LLM citations |
| `/content-strategy` | Plan content strategy and identify topics to cover |
| `/copywriting` | Write marketing copy for homepages, landing pages, and sites |
| `/copy-editing` | Edit, review, and improve existing marketing copy |
| `/programmatic-seo` | Generate SEO pages at scale using templates |
| `/schema-markup` | Add and optimize structured data markup |
| `/seo-audit` | Audit and diagnose technical and on-page SEO issues |
| `/site-architecture` | Plan website hierarchy, navigation, and URL structure |
| `/social-content` | Create and schedule social media content |

#### Conversion & Growth

| Skill | What it does |
|---|---|
| `/ab-test-setup` | Plan, design, and implement A/B tests and experiments |
| `/form-cro` | Optimize lead capture and contact forms |
| `/onboarding-cro` | Optimize post-signup activation and time-to-value |
| `/page-cro` | Increase conversions on marketing and landing pages |
| `/paywall-upgrade-cro` | Optimize in-app paywalls and upsell modals |
| `/popup-cro` | Create and optimize popups, modals, and overlays |
| `/signup-flow-cro` | Optimize signup, registration, and trial activation |

#### Acquisition & Campaigns

| Skill | What it does |
|---|---|
| `/ad-creative` | Generate and scale ad headlines, descriptions, and full ads |
| `/cold-email` | Write B2B cold outreach and follow-up sequences |
| `/email-sequence` | Create automated email flows and drip campaigns |
| `/free-tool-strategy` | Plan and build free marketing tools for lead generation |
| `/lead-magnets` | Create and optimize lead magnets for email capture |
| `/paid-ads` | Manage Google, Meta, LinkedIn, and Twitter ad campaigns |

#### Strategy & Positioning

| Skill | What it does |
|---|---|
| `/competitor-alternatives` | Create competitor comparison and alternative pages |
| `/launch-strategy` | Plan product launches and feature announcements |
| `/marketing-ideas` | Generate marketing inspiration and SaaS strategies |
| `/marketing-psychology` | Apply behavioral science and mental models to marketing |
| `/pricing-strategy` | Determine pricing, packaging, and monetization decisions |
| `/product-marketing-context` | Create foundational product marketing documentation |
| `/competitive-landscape` | Analyze competitive dynamics with Porter's Five Forces, Blue Ocean Strategy, and positioning maps |

#### Retention & Revenue

| Skill | What it does |
|---|---|
| `/churn-prevention` | Reduce churn through cancellation flows and save offers |
| `/referral-program` | Build and optimize referral and affiliate programs |
| `/revops` | Manage lead lifecycle and marketing-to-sales handoff |
| `/sales-enablement` | Create pitch decks, one-pagers, and objection handling docs |

#### Analytics

| Skill | What it does |
|---|---|
| `/analytics-tracking` | Set up and audit analytics measurement and event tracking |
| `/marketing-skills-collection` | Generate marketing deliverables across CRO, copywriting, SEO, analytics, and growth |
| `/marketing-automation` | Marketing automation with 23 sub-skills across CRO, copywriting, SEO, analytics, and growth |

### Research & Data

> 10 skills from [`resciencelab/opc-skills`](https://skills.sh/resciencelab/opc-skills).
> Install all: `npx skills add resciencelab/opc-skills`
> Install one: `npx skills add resciencelab/opc-skills --skills <skill-name>`

#### Research

| Skill | What it does |
|---|---|
| `/producthunt` | Search and retrieve Product Hunt posts, topics, and collections |
| `/product-hunt-launch` | Optimize Product Hunt launches with research, gallery strategy, and timing |
| `/reddit` | Search and retrieve Reddit posts, comments, and subreddit info |
| `/requesthunt` | Collect and analyze user feedback from Reddit, X, and GitHub |
| `/apify-lead-generation` | Multi-platform lead scraping from Google Maps, social media, websites, and search engines |
| `/twitter` | Search and retrieve tweets, user profiles, and trends from X |

#### Creative & Design

| Skill | What it does |
|---|---|
| `/banner-creator` | Generate professional banners for GitHub, Twitter, and websites |
| `/logo-creator` | Generate professional logos with AI through iterative design |
| `/nanobanana` | Generate and edit images using AI (Gemini image model) |
| `/baoyu-slide-deck` | Transform content into professional presentation decks with customizable styles |

#### SEO & Domains

| Skill | What it does |
|---|---|
| `/seo-geo` | Optimize for AI search engines (GEO) and traditional search |
| `/backlink-analyzer` | Analyze backlink profiles with toxic link detection and competitor benchmarking |
| `/build-links` | Design link acquisition campaigns with prospect scoring and outreach strategy |
| `/domain-hunter` | Find domain names with availability checks and price comparison |

#### Utilities

| Skill | What it does |
|---|---|
| `/archive` | Capture, index, and reuse project knowledge across sessions |
| `/skill-standardization` | Validate and standardize SKILL.md files against the Agent Skills spec |
| `/skill-creator` | Scaffold new skills with validated directory structure, frontmatter, and progressive disclosure |

### Router

| Skill | What it does |
|---|---|
| `/sales-do` | Routes your objective to the right skill |
| `/sales-request-skill` | Build or request a skill that doesn't exist yet |

## Usage Examples

```
# Route automatically
/sales-do prep for a discovery call with Acme Corp

# Or use skills directly
/sales-research Acme Corp
/sales-outreach cold email for VP Engineering at Series B startups
/sales-objection they say they already have a solution in place
```

