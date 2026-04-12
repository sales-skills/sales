---
name: sales-lobstr
description: "Lobstr.io platform help — no-code web scraping platform with 50+ ready-made scrapers for Google Maps, LinkedIn Sales Navigator, Twitter, YouTube, and more. Features cookie-based login sync, scheduled automation, multi-threading, and a full API with Python SDK and MCP Server. Use when configuring a Lobstr scraper, exporting data to Google Sheets or S3, setting up scheduled scraping, working with the Lobstr API or Python SDK, or managing credits. Do NOT use for general prospect list strategy (use /sales-prospect-list), cross-platform enrichment strategy (use /sales-enrich), or integration strategy (use /sales-integration)."
argument-hint: "[describe what you need help with in Lobstr.io]"
license: MIT
version: 1.0.0
tags: [sales, scraping, data-extraction, linkedin, platform]
github: "https://github.com/lobstrio"
---
# Lobstr.io Platform Help

Help the user with Lobstr.io platform questions — from configuring ready-made scrapers and running data collection jobs through scheduling automation, exporting results, managing credits, and API integration. Lobstr.io is a no-code web scraping and data collection platform based in Saint-Mandé, France. It offers 50+ ready-made scrapers, multi-threading, cookie-based account sync, scheduled automation, and a full API with Python SDK, CLI, and MCP Server.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Lobstr.io do you need help with?**
   - A) Ready-made scrapers — choosing and configuring a pre-built scraper (Google Maps, LinkedIn, Twitter, YouTube, etc.)
   - B) No-code web app — running scrapers, managing runs, viewing results in the UI
   - C) Cookie-based account sync — scraping behind login walls (LinkedIn, etc.) using the cookie picking add-on
   - D) Scheduled automation — setting up recurring scraping jobs with triggers
   - E) Data export — exporting results to Google Sheets, Amazon S3, or SFTP
   - F) Webhooks — configuring run status notifications (run.running, run.paused, run.done, run.error)
   - G) API / SDK / CLI — programmatic access, Python SDK, CLI, MCP Server
   - H) Make integration — connecting Lobstr to make.com automation workflows
   - I) Enterprise custom scrapers — tailored data collectors for specific use cases
   - J) Account / Billing / Credits — pricing tiers, credit usage, browsing limits
   - K) Safety management — browsing limit protection to avoid account bans
   - L) Something else — describe it

2. **What's your role?**
   - A) Sales / business development
   - B) Marketing / growth
   - C) Developer / engineer
   - D) Data analyst / researcher
   - E) Agency / freelancer
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General prospect list strategy / building target lists -> `/sales-prospect-list`
- Cross-platform datan enrichment strategy -> `/sales-enrich`
- Email deliverability / verification strategy -> `/sales-deliverability`
- Connecting Lobstr to CRM or other tools via middleware -> `/sales-integration`
- Outscraper-specific questions -> `/sales-outscraper`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Lobstr.io platform reference

Provide module-by-module guidance based on the user's area:

### Key terminology

| Term | Meaning |
|------|---------|
| **Squid** | A scraper configuration — the template that defines what to scrape and how |
| **Task** | A URL or set of parameters to feed into a squid (the input) |
| **Run** | An execution of a squid with its tasks (the job) |
| **Credit** | 1 unique result = 1 credit (the billing unit) |

### Ready-Made Scrapers (50+)
- **What it does**: Pre-built scraper configurations for popular platforms — no coding required, just configure inputs and run
- **Popular scrapers**: Google Maps Leads, Google Maps Reviews, LinkedIn Sales Navigator Leads, Twitter User Tweets, YouTube Channel Scraper, Vinted Products, and many more
- **How it works**: Select a scraper from the catalog, configure its parameters (search terms, URLs, filters), add tasks (inputs), and start a run
- **Premium scrapers**: Some scrapers are marked Premium and are only available on paid plans

### No-Code Web App
- **What it does**: Browser-based interface to configure, run, and manage all your scrapers without writing code
- **Workflow**: Select squid → configure parameters → add tasks → start run → monitor progress → download or export results
- **Run management**: View active, paused, completed, and failed runs with timestamps, credit usage, and result counts

### Multi-Threading
- **What it does**: Run hundreds of concurrent scrapers simultaneously for high-throughput data collection
- **Use case**: Large-scale scraping projects where you need results from many sources quickly
- **Benefit**: Dramatically reduces total collection time compared to sequential execution

### Cookie-Based Account Sync
- **What it does**: 1-click cookie picking browser add-on that lets you scrape behind login walls (LinkedIn, etc.) without sharing your credentials
- **How it works**: Install the browser extension, log into the target platform normally, click to sync cookies — Lobstr uses the session cookies to access authenticated pages
- **Safety**: Your password is never shared with Lobstr — only session cookies are transferred
- **Use case**: LinkedIn Sales Navigator scraping, any platform requiring authentication

### Scheduled Automation
- **What it does**: Set up recurring scraping jobs that run on autopilot with configurable triggers
- **Scheduling options**: Define frequency (daily, weekly, custom intervals) and triggers for automatic execution
- **Plan requirement**: Scheduling is not available on the Free plan — requires a paid subscription
- **Use case**: Ongoing lead generation, regular competitive monitoring, periodic data refreshes

### Data Export
- **What it does**: Export scraped results to external destinations
- **Destinations**: Google Sheets (direct integration), Amazon S3 (cloud storage), SFTP (server transfer)
- **Export limits**: Free plan limited to 30 rows per export; paid plans allow full exports
- **Use case**: Feeding scraped data into spreadsheets, data warehouses, or downstream tools

### Webhooks
- **What it does**: Receive HTTP POST notifications when run status changes
- **Events**: `run.running` (run started), `run.paused` (run paused), `run.done` (run completed), `run.error` (run failed)
- **Configuration**: `POST /v1/delivery?squid={id}` to set up webhook endpoint for a squid
- **Payload**: JSON with run ID, squid info, and timestamp
- **Retry policy**: 3 attempts with 15-minute delay between retries
- **Response requirement**: Your endpoint must respond with 200, 201, or 202 within 30 seconds

### Gmail Notifications
- **What it does**: Email alerts on run completion or failure
- **Use case**: Simple monitoring when you don't need programmatic webhook handling

### Make Integration
- **What it does**: Connect Lobstr to make.com for no-code automation workflows
- **Use case**: Chain Lobstr scraping results into downstream actions — CRM updates, spreadsheet writes, Slack notifications, email sends, etc.

### API + Python SDK + CLI + MCP Server
- **What it does**: Full programmatic access to all Lobstr scrapers and platform features
- **API**: REST API for creating squids, managing tasks, starting runs, retrieving results
- **Python SDK**: Python library for scripted access
- **CLI**: Command-line interface for automation and scripting
- **MCP Server**: Model Context Protocol server for AI agent integration

### Enterprise Custom Scrapers
- **What it does**: Tailored data collectors built by the Lobstr team for your specific use case
- **SLA**: 99.5% task completion rate, 24-hour failure resolution
- **Pricing**: Custom pricing based on requirements
- **Use case**: Complex scraping needs that aren't covered by ready-made scrapers

### Safety Management
- **What it does**: Browsing limit protection to avoid account bans when scraping platforms like LinkedIn
- **How it works**: Configurable limits on browsing activity to stay within safe thresholds and avoid detection
- **Use case**: Protecting your LinkedIn or other platform accounts from being flagged or banned due to excessive automated activity

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Squid** | Scraper configuration template | id, name, description, parameters, status, created_at |
| **Task** | Input URL or parameters for a squid | id, squid_id, url, parameters, status |
| **Run** | Execution of a squid with its tasks | id, squid_id, status (running/paused/done/error), started_at, completed_at, credits_used, results_count |
| **Result** | Single scraped data record (1 credit) | id, run_id, data (varies by scraper), scraped_at |
| **Delivery/Webhook** | Webhook configuration for a squid | id, squid_id, url, events, retry_count, created_at |

### API quick reference

- **Base URL**: `https://api.lobstr.io/v1/`
- **Authentication**: `Authorization: Token {your_api_key}` header on all requests
- **Rate limits**:
  - `/squids` — 120 requests/min
  - `/tasks` — 90 requests/min
  - `/runtasks` — 90 requests/min
  - `/runs` — 120 requests/min
  - `/results` — 2 requests/sec
- **Async workflow**: Create squid → configure parameters → add tasks → start run → poll status → retrieve results as JSON
- **Webhook setup**: `POST /v1/delivery?squid={id}` — configure endpoint URL and events
- **Key endpoints**:
  - `GET /squids` — List your squids
  - `POST /squids` — Create a new squid
  - `GET /squids/{id}` — Get squid details
  - `POST /tasks` — Add tasks to a squid
  - `GET /tasks` — List tasks for a squid
  - `POST /runs` — Start a run
  - `GET /runs` — List runs
  - `GET /runs/{id}` — Get run status
  - `GET /results` — Retrieve results for a run
  - `POST /delivery?squid={id}` — Configure webhooks
- **SDKs**: Python SDK, CLI, MCP Server
- **Docs**: lobstr.io

### Integrations

| Category | Tools | Status |
|----------|-------|--------|
| **Cloud storage** | Amazon S3 | Live |
| **Spreadsheets** | Google Sheets | Live |
| **File transfer** | SFTP | Live |
| **Webhooks** | Custom HTTP endpoints | Live |
| **Email** | Gmail notifications | Live |
| **Automation** | Make (make.com) | Live |
| **CRM** | HubSpot | Coming soon |
| **Messaging** | Slack | Coming soon |
| **Automation** | Zapier | Coming soon |
| **Database** | Airtable | Coming soon |

### Pricing (as of March 2026 — verify current pricing at lobstr.io)

| Tier | Price | Credits | Export limit | Scheduling | Premium scrapers | Data retention |
|------|-------|---------|-------------|------------|------------------|----------------|
| **Free** | €0/mo | 100 credits | 30 rows/export | No | No | 7 days |
| **Paid** | From €50/mo | More credits | Full exports | Yes | Yes | Up to 28 days |
| **Enterprise** | Custom | Custom | Full exports | Yes | Yes | Custom |

**Key pricing notes**:
- 1 credit = 1 unique result — credits are the universal billing unit
- Credits refresh monthly and do not roll over to the next month
- Premium scrapers are only available on paid plans
- Scheduling/automation requires a paid plan
- Free plan is limited to 30 rows per export and 7-day data retention
- Enterprise tier includes custom scrapers with 99.5% task completion SLA

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Setting up a Google Maps lead scraping job**:
   1. Go to the Lobstr scraper catalog and select "Google Maps Leads"
   2. Configure the scraper parameters — search query (e.g., "dentists in Austin, TX"), result limits, and any filters
   3. Add tasks — each task is a search query or URL to scrape
   4. Start the run — Lobstr executes the scraper with multi-threading for speed
   5. Monitor run status in the web app or via webhook notifications
   6. Export results to Google Sheets, S3, or download as file
   7. Each unique result costs 1 credit — monitor your credit usage in the dashboard

2. **Scraping LinkedIn Sales Navigator with cookie sync**:
   1. Install the Lobstr cookie picking browser extension
   2. Log into LinkedIn normally in your browser
   3. Click the extension to sync your session cookies with Lobstr — your password is never shared
   4. Select the "LinkedIn Sales Navigator Leads" scraper in Lobstr
   5. Configure search parameters (title, industry, location, company size, etc.)
   6. Enable safety management — set browsing limits to avoid LinkedIn detecting excessive automated activity
   7. Start the run and monitor progress — results include name, title, company, location, and profile URL
   8. Be conservative with volume — stay within safe browsing limits to protect your LinkedIn account

3. **Setting up scheduled recurring scraping**:
   1. Requires a paid plan (scheduling not available on Free tier)
   2. Configure your squid with the desired scraper and parameters
   3. Add your tasks (URLs or search queries)
   4. In the scheduling settings, define frequency (daily, weekly, or custom interval) and trigger conditions
   5. Set up notifications — configure webhooks for `run.done` and `run.error` events, or enable Gmail alerts
   6. Optionally configure auto-export to Google Sheets or S3 so results are delivered automatically
   7. Monitor credit consumption — recurring jobs use credits each time they run

4. **Using the API to automate scraping programmatically**:
   1. Get your API key from the Lobstr dashboard
   2. Create a squid: `POST /v1/squids` with scraper configuration
   3. Add tasks: `POST /v1/tasks` with URLs or parameters to scrape
   4. Start a run: `POST /v1/runs` referencing the squid
   5. Poll run status: `GET /v1/runs/{id}` until status is `done`
   6. Retrieve results: `GET /v1/results` for the completed run
   7. Alternative to polling: configure a webhook via `POST /v1/delivery?squid={id}` to receive a POST notification when the run completes
   8. Mind rate limits: `/results` is limited to 2 requests/sec — implement backoff when fetching large result sets

5. **Exporting results to Google Sheets**:
   1. Connect your Google account in Lobstr's integration settings
   2. After a run completes, select "Export to Google Sheets" from the results view
   3. Choose an existing spreadsheet or create a new one
   4. Free plan exports are capped at 30 rows — upgrade to a paid plan for full exports
   5. For automated exports, combine scheduling with the Google Sheets integration so each recurring run auto-exports

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Free plan is very limited — 100 credits, 30 rows/export, no scheduling, no Premium scrapers, 7-day data retention.** The free tier is suitable only for testing. Any serious data collection requires a paid plan starting at €50/month. Credits do not roll over, and the 30-row export cap means you cannot download full result sets on the free plan.
2. **Credits are consumed per unique result and do not roll over month to month.** Each unique result costs 1 credit regardless of which scraper produced it. Unused credits expire at the end of each billing cycle. Plan your scraping volumes to match your credit allowance, and monitor usage to avoid running out mid-month.
3. **Cookie-based account sync requires careful safety management to avoid platform bans.** When scraping behind login walls (especially LinkedIn), always configure browsing limits in Lobstr's safety management settings. Excessive automated activity on your account can trigger detection and lead to restrictions or bans. Start with conservative limits and increase gradually.
4. **Webhook endpoints must respond within 30 seconds with a 2xx status code, or Lobstr will retry.** If your endpoint is slow or returns an error, Lobstr retries up to 3 times with a 15-minute delay between attempts. After 3 failed attempts, the delivery is abandoned. Process webhook payloads asynchronously — accept the request quickly and handle the data in a background job.
5. **The /results endpoint has a strict 2 requests/second rate limit — much tighter than other endpoints.** When fetching large result sets, implement proper rate limiting and backoff in your client code. Batch your result retrieval and avoid tight polling loops. The /squids and /runs endpoints are more generous at 120 requests/minute.
6. **HubSpot, Slack, Zapier, and Airtable integrations are listed as "coming soon" — they are not yet available.** If you need to connect Lobstr to these tools today, use the Make integration as a bridge or build a custom integration using Lobstr's webhook and API capabilities.
7. **Data retention is 7 days on Free and up to 28 days on paid plans — export or retrieve results promptly.** Results are automatically deleted after the retention period. Set up auto-export to Google Sheets or S3, or retrieve results via API as soon as runs complete. Do not rely on the Lobstr dashboard as a long-term data store.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-prospect-list` — Build and refine prospect lists using data from Lobstr and other sources
- `/sales-enrich` — Cross-platform datan enrichment strategy (combine Lobstr data with other enrichment tools)
- `/sales-integration` — Connect Lobstr to CRM, automation, or other tools
- `/sales-deliverability` — Email deliverability and verification strategy for scraped contact data
- `/sales-outscraper` — Similar scraping and data extraction platform — compare capabilities and choose the right tool
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building a local business lead list from Google Maps
**User says**: "I need to scrape all coffee shops in Paris with their addresses, phone numbers, and ratings using Lobstr."
**Skill does**:
1. Recommends the "Google Maps Leads" ready-made scraper from the Lobstr catalog
2. Advises breaking Paris into arrondissements or neighborhoods to maximize coverage — e.g., "coffee shops, Paris 1er", "coffee shops, Paris 2ème", etc. — since broad queries may miss results
3. Creates tasks for each geographic segment and starts a multi-threaded run
4. Results include business name, address, phone, website, Google rating, review count, hours, and categories
5. Exports full results to Google Sheets for the sales team (requires paid plan for more than 30 rows)
6. Suggests setting up a monthly scheduled run to capture newly opened coffee shops
**Result**: User has a comprehensive list of Paris coffee shops with contact details and ratings, exported to Google Sheets and set up for monthly refresh

### Example 2: Scraping LinkedIn Sales Navigator leads with cookie sync
**User says**: "I want to extract leads from a LinkedIn Sales Navigator search for CTOs at SaaS companies in Germany."
**Skill does**:
1. Walks through installing the Lobstr cookie picking browser extension and syncing LinkedIn session cookies
2. Selects the "LinkedIn Sales Navigator Leads" scraper (Premium — requires paid plan)
3. Configures search parameters: title = "CTO", industry = "SaaS / Software", location = "Germany"
4. Enables safety management with conservative browsing limits (e.g., 100 profiles/day) to protect the LinkedIn account
5. Starts the run and monitors via webhook notifications for `run.done` event
6. Results include name, title, company, location, LinkedIn profile URL, and other available fields
7. Warns about LinkedIn's Terms of Service — scraping may violate their TOS, so user should assess their own risk tolerance
**Result**: User has a targeted list of German SaaS CTOs from Sales Navigator, collected safely with browsing limits, ready for outreach campaign planning

### Example 3: Automating recurring data collection with API and webhooks
**User says**: "I need to set up an automated pipeline that scrapes Google Maps reviews for our competitors every week and pushes results to our S3 bucket."
**Skill does**:
1. Creates a squid via `POST /v1/squids` configured for the Google Maps Reviews scraper
2. Adds tasks with competitor Google Maps URLs or place IDs via `POST /v1/tasks`
3. Configures a webhook via `POST /v1/delivery?squid={id}` pointing to a Lambda function URL, listening for `run.done` events
4. Sets up scheduled automation to run the squid weekly (requires paid plan)
5. In the Lambda function: on `run.done` webhook, calls `GET /v1/results` (respecting the 2 req/sec rate limit) and writes results to the S3 bucket
6. Adds error handling: also listens for `run.error` webhook events and sends alerts via SNS or Slack
7. Monitors credit usage — weekly runs consume credits each cycle, so verifies the plan has sufficient monthly credits
**Result**: User has a fully automated weekly pipeline: Lobstr scrapes competitor reviews on schedule, webhook triggers Lambda, results land in S3 — all running hands-free with error alerting

## Troubleshooting

### Run stuck in "running" status or taking too long
**Symptom**: A run has been in "running" status for an unexpectedly long time with no results appearing.
**Cause**: Large task volumes, rate-limited target platforms, or network issues can cause runs to take longer than expected. Multi-threaded runs against rate-limited platforms (like LinkedIn) may be intentionally throttled by safety management settings.
**Solution**: Check the run details in the web app for progress indicators (tasks completed vs. total). If safety management is enabled, browsing limits may be throttling execution speed — this is expected behavior to protect your accounts. For very large runs, consider breaking them into smaller batches. If the run appears genuinely stuck (no progress for an extended period), pause and restart it. Configure `run.error` webhooks so you are notified immediately if something fails rather than discovering it later.

### Credits running out mid-month
**Symptom**: You receive a notification that your credits are exhausted, or runs stop producing results before you expected.
**Cause**: Each unique result costs 1 credit. Large scraping jobs can consume credits faster than anticipated, especially with high-volume scrapers like Google Maps or LinkedIn. Credits do not roll over, so any unused credits from last month do not help.
**Solution**: Monitor credit usage in the dashboard before starting large runs. Estimate credit consumption: number of tasks multiplied by expected results per task gives approximate credit cost. For ongoing scheduled jobs, calculate monthly credit needs (weekly runs × results per run × 4 weeks) and ensure your plan covers the total. If you consistently run out, upgrade to a higher plan tier. Consider reducing result volumes by narrowing search parameters or filtering inputs more tightly.

### Webhook not receiving notifications
**Symptom**: You configured a webhook via `POST /v1/delivery?squid={id}` but your endpoint is not receiving POST requests when runs complete.
**Cause**: Common issues include: endpoint URL not publicly accessible (localhost or firewalled), endpoint not responding with 200/201/202 within 30 seconds (Lobstr treats slow responses as failures), TLS/SSL certificate issues, or incorrect webhook configuration.
**Solution**: Verify your endpoint is publicly accessible — test with a tool like webhook.site first to confirm Lobstr is sending requests. Ensure your endpoint responds with a 2xx status code within 30 seconds — offload heavy processing to a background job. Check that your TLS certificate is valid and not self-signed. Review the webhook configuration: confirm you are listening for the correct events (`run.done`, `run.error`, etc.) and that the squid ID is correct. Remember that Lobstr retries failed deliveries up to 3 times with a 15-minute delay — check if retries are arriving. If all else fails, use Gmail notifications as a fallback while debugging the webhook setup.
