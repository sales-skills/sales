# Lobstr.io Platform Guide

## Key Terminology

| Term | Meaning |
|------|---------|
| **Squid** | A scraper configuration — the template that defines what to scrape and how |
| **Task** | A URL or set of parameters to feed into a squid (the input) |
| **Run** | An execution of a squid with its tasks (the job) |
| **Credit** | 1 unique result = 1 credit (the billing unit) |

## Ready-Made Scrapers (50+)
- **What it does**: Pre-built scraper configurations for popular platforms — no coding required, just configure inputs and run
- **Popular scrapers**: Google Maps Leads, Google Maps Reviews, LinkedIn Sales Navigator Leads, Twitter User Tweets, YouTube Channel Scraper, Vinted Products, and many more
- **How it works**: Select a scraper from the catalog, configure its parameters (search terms, URLs, filters), add tasks (inputs), and start a run
- **Premium scrapers**: Some scrapers are marked Premium and are only available on paid plans

## No-Code Web App
- **What it does**: Browser-based interface to configure, run, and manage all your scrapers without writing code
- **Workflow**: Select squid -> configure parameters -> add tasks -> start run -> monitor progress -> download or export results
- **Run management**: View active, paused, completed, and failed runs with timestamps, credit usage, and result counts

## Multi-Threading
- **What it does**: Run hundreds of concurrent scrapers simultaneously for high-throughput data collection
- **Use case**: Large-scale scraping projects where you need results from many sources quickly
- **Benefit**: Dramatically reduces total collection time compared to sequential execution

## Cookie-Based Account Sync
- **What it does**: 1-click cookie picking browser add-on that lets you scrape behind login walls (LinkedIn, etc.) without sharing your credentials
- **How it works**: Install the browser extension, log into the target platform normally, click to sync cookies — Lobstr uses the session cookies to access authenticated pages
- **Safety**: Your password is never shared with Lobstr — only session cookies are transferred
- **Use case**: LinkedIn Sales Navigator scraping, any platform requiring authentication

## Scheduled Automation
- **What it does**: Set up recurring scraping jobs that run on autopilot with configurable triggers
- **Scheduling options**: Define frequency (daily, weekly, custom intervals) and triggers for automatic execution
- **Plan requirement**: Scheduling is not available on the Free plan — requires a paid subscription
- **Use case**: Ongoing lead generation, regular competitive monitoring, periodic data refreshes

## Data Export
- **What it does**: Export scraped results to external destinations
- **Destinations**: Google Sheets (direct integration), Amazon S3 (cloud storage), SFTP (server transfer)
- **Export limits**: Free plan limited to 30 rows per export; paid plans allow full exports
- **Use case**: Feeding scraped data into spreadsheets, data warehouses, or downstream tools

## Webhooks
- **What it does**: Receive HTTP POST notifications when run status changes
- **Events**: `run.running` (run started), `run.paused` (run paused), `run.done` (run completed), `run.error` (run failed)
- **Configuration**: `POST /v1/delivery?squid={id}` to set up webhook endpoint for a squid
- **Payload**: JSON with run ID, squid info, and timestamp
- **Retry policy**: 3 attempts with 15-minute delay between retries
- **Response requirement**: Your endpoint must respond with 200, 201, or 202 within 30 seconds

## Gmail Notifications
- **What it does**: Email alerts on run completion or failure
- **Use case**: Simple monitoring when you don't need programmatic webhook handling

## Make Integration
- **What it does**: Connect Lobstr to make.com for no-code automation workflows
- **Use case**: Chain Lobstr scraping results into downstream actions — CRM updates, spreadsheet writes, Slack notifications, email sends, etc.

## API + Python SDK + CLI + MCP Server
- **What it does**: Full programmatic access to all Lobstr scrapers and platform features
- **API**: REST API for creating squids, managing tasks, starting runs, retrieving results
- **Python SDK**: Python library for scripted access
- **CLI**: Command-line interface for automation and scripting
- **MCP Server**: Model Context Protocol server for AI agent integration

## Enterprise Custom Scrapers
- **What it does**: Tailored data collectors built by the Lobstr team for your specific use case
- **SLA**: 99.5% task completion rate, 24-hour failure resolution
- **Pricing**: Custom pricing based on requirements
- **Use case**: Complex scraping needs that aren't covered by ready-made scrapers

## Safety Management
- **What it does**: Browsing limit protection to avoid account bans when scraping platforms like LinkedIn
- **How it works**: Configurable limits on browsing activity to stay within safe thresholds and avoid detection
- **Use case**: Protecting your LinkedIn or other platform accounts from being flagged or banned due to excessive automated activity

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Squid** | Scraper configuration template | id, name, description, parameters, status, created_at |
| **Task** | Input URL or parameters for a squid | id, squid_id, url, parameters, status |
| **Run** | Execution of a squid with its tasks | id, squid_id, status (running/paused/done/error), started_at, completed_at, credits_used, results_count |
| **Result** | Single scraped data record (1 credit) | id, run_id, data (varies by scraper), scraped_at |
| **Delivery/Webhook** | Webhook configuration for a squid | id, squid_id, url, events, retry_count, created_at |

## API quick reference

- **Base URL**: `https://api.lobstr.io/v1/`
- **Authentication**: `Authorization: Token {your_api_key}` header on all requests
- **Rate limits**:
  - `/squids` — 120 requests/min
  - `/tasks` — 90 requests/min
  - `/runtasks` — 90 requests/min
  - `/runs` — 120 requests/min
  - `/results` — 2 requests/sec
- **Async workflow**: Create squid -> configure parameters -> add tasks -> start run -> poll status -> retrieve results as JSON
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

## Integrations

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

## Pricing (as of March 2026 — verify current pricing at lobstr.io)

| Tier | Price | Credits | Export limit | Scheduling | Premium scrapers | Data retention |
|------|-------|---------|-------------|------------|------------------|----------------|
| **Free** | EUR0/mo | 100 credits | 30 rows/export | No | No | 7 days |
| **Paid** | From EUR50/mo | More credits | Full exports | Yes | Yes | Up to 28 days |
| **Enterprise** | Custom | Custom | Full exports | Yes | Yes | Custom |

**Key pricing notes**:
- 1 credit = 1 unique result — credits are the universal billing unit
- Credits refresh monthly and do not roll over to the next month
- Premium scrapers are only available on paid plans
- Scheduling/automation requires a paid plan
- Free plan is limited to 30 rows per export and 7-day data retention
- Enterprise tier includes custom scrapers with 99.5% task completion SLA
