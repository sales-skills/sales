### Lobstr.io API — Comprehensive Reference

Lobstr.io provides a REST API for web scraping and lead generation through an async workflow: configure a scraping job (squid), feed it URLs/parameters, execute a run, and retrieve structured JSON results. The platform offers 50+ ready-made crawlers for common sources like Google Maps, LinkedIn, and more.

> **Note**: Best-effort from research — Lobstr.io's API docs are at https://docs.lobstr.io/. Verify endpoints and parameters against the official documentation.

---

## Base URL

```
https://api.lobstr.io/v1/
```

---

### Authentication

Token-based authentication via the `Authorization` header.

```bash
curl --request POST \
  --url "https://api.lobstr.io/v1/runs" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json"
```

---

### Rate Limits

| Endpoint | Limit | Window |
|---|---|---|
| `/v1/squids` | 120 requests | per minute |
| `/v1/tasks` | 90 requests | per minute |
| `/v1/runtasks` | 90 requests | per minute |
| `/v1/runs` | 120 requests | per minute |
| `/v1/results` | 2 requests | per second |

**Rate limit headers** (included in every response):

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Maximum requests allowed in the window |
| `X-RateLimit-Remaining` | Requests remaining in the current window |
| `X-RateLimit-Reset` | Timestamp when the window resets |
| `Retry-After` | Seconds to wait before retrying (on 429) |

**Rate limit error** (HTTP 429):
```json
{
  "error": "Rate limit exceeded...",
  "type": "RateLimitExceeded",
  "code": 429
}
```

---

### Async Workflow

Lobstr.io uses an asynchronous scraping workflow:

1. **Choose a crawler** — Select from 50+ ready-made crawlers or create your own
2. **Create a squid** — `POST /squids` to create a scraping configuration
3. **Configure settings** — `POST /squids/{id}` to set country, language, result limits
4. **Add tasks** — `POST /tasks` to feed URLs or parameters (also supports CSV upload)
5. **Start a run** — `POST /runs` to execute the scraping job
6. **Check status** — `GET /runs/{id}` to poll run progress
7. **Retrieve results** — `GET /results` to get structured JSON output

---

### Endpoints

---

#### 1. Squids (Scraping Configurations)

Create and configure scraping jobs.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v1/squids` | Create a new squid (scraping configuration) |
| POST | `/v1/squids/{id}` | Configure squid settings |

**Configuration parameters** (on `/v1/squids/{id}`):

| Parameter | Type | Description |
|---|---|---|
| `country` | string | Target country for the scrape |
| `language` | string | Language preference |
| `result_limit` | int | Maximum number of results to collect |

**Example — Create a squid**:
```bash
curl --request POST \
  --url "https://api.lobstr.io/v1/squids" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json"
```

---

#### 2. Tasks (Scrape Inputs)

Feed URLs or parameters into a squid for scraping.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v1/tasks` | Add URLs/parameters to scrape |

Tasks define what a squid should scrape. You can add them individually via the API or in bulk via CSV upload.

**Example — Add tasks to a squid**:
```bash
curl --request POST \
  --url "https://api.lobstr.io/v1/tasks" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "squid": "SQUID_ID",
    "urls": ["https://example.com/page1", "https://example.com/page2"]
  }'
```

---

#### 3. Runs (Job Execution)

Execute scraping jobs and monitor their progress.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v1/runs` | Start a scraping run |
| GET | `/v1/runs/{id}` | Check run status |

**Example — Start a run**:
```bash
curl --request POST \
  --url "https://api.lobstr.io/v1/runs" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "squid": "SQUID_ID"
  }'
```

**Example — Check run status**:
```bash
curl --request GET \
  --url "https://api.lobstr.io/v1/runs/RUN_ID" \
  --header "Authorization: Token YOUR_API_KEY"
```

---

#### 4. Results

Retrieve structured JSON output from completed runs.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/results` | Retrieve structured JSON results |

**Example — Get results**:
```bash
curl --request GET \
  --url "https://api.lobstr.io/v1/results?run=RUN_ID" \
  --header "Authorization: Token YOUR_API_KEY"
```

---

#### 5. Run Tasks (Task-Level Status)

Monitor individual task progress within a run.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/runtasks` | Check task-level status within a run |

Rate limited to 90 requests per minute.

---

### Webhooks

Configure webhook delivery to receive notifications when run status changes.

**Configuration endpoint**: `POST /v1/delivery?squid={squid_hash}`

```bash
curl --request POST \
  --url "https://api.lobstr.io/v1/delivery?squid=SQUID_HASH" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "webhook_fields": {
      "url": "https://your-app.com/lobstr-callback",
      "is_active": true,
      "events": {
        "run.running": true,
        "run.paused": true,
        "run.done": true,
        "run.error": true
      },
      "retry": true
    }
  }'
```

**Webhook events**:

| Event | Description |
|---|---|
| `run.running` | Run has started executing |
| `run.paused` | Run has been paused |
| `run.done` | Run completed successfully |
| `run.error` | Run encountered an error |

**Webhook payload** (JSON):

```json
{
  "id": "run_hash_abc123",
  "object": "run",
  "event": "run.done",
  "squid": {
    "id": "squid_id",
    "name": "My Scraper"
  },
  "timestamp": "2026-03-29T12:00:00Z"
}
```

**Retry behavior**: Failed webhook deliveries are retried up to 3 times with a 15-minute delay between attempts. Your endpoint must respond with HTTP 200, 201, or 202 within 30 seconds.

---

### Other Delivery Methods

Beyond webhooks, Lobstr.io supports exporting results to:

- **Amazon S3** — Direct export to S3 buckets
- **Google Sheets** — Automatic sync to spreadsheets
- **SFTP** — File transfer to your server
- **Gmail notifications** — Email alerts on completion

---

### SDKs and Tools

| Tool | Description |
|---|---|
| `lobstrio-sdk` | Python SDK |
| `lobstrio-cli` | Command-line interface |
| MCP Server | Model Context Protocol integration |

---

### Ready-Made Crawlers

Lobstr.io provides 50+ pre-built crawlers for common scraping targets. Each crawler has a unique ID that you reference when creating squids.

**Example**: Google Maps Leads Scraper — ID: `4734d096159ef05210e0e1677e8be823`

---

## Quick Reference — Common Workflows

### Scrape Google Maps leads end-to-end
```bash
# Step 1: Create a squid using the Google Maps Leads Scraper
curl --request POST \
  --url "https://api.lobstr.io/v1/squids" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"crawler": "4734d096159ef05210e0e1677e8be823"}'

# Step 2: Configure the squid
curl --request POST \
  --url "https://api.lobstr.io/v1/squids/SQUID_ID" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"country": "US", "language": "en"}'

# Step 3: Add search tasks
curl --request POST \
  --url "https://api.lobstr.io/v1/tasks" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"squid": "SQUID_ID", "urls": ["restaurants in Austin TX"]}'

# Step 4: Start the run
curl --request POST \
  --url "https://api.lobstr.io/v1/runs" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"squid": "SQUID_ID"}'

# Step 5: Poll for status
curl --request GET \
  --url "https://api.lobstr.io/v1/runs/RUN_ID" \
  --header "Authorization: Token YOUR_API_KEY"

# Step 6: Retrieve results
curl --request GET \
  --url "https://api.lobstr.io/v1/results?run=RUN_ID" \
  --header "Authorization: Token YOUR_API_KEY"
```

### Set up webhook notifications
```bash
curl --request POST \
  --url "https://api.lobstr.io/v1/delivery?squid=SQUID_HASH" \
  --header "Authorization: Token YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "webhook_fields": {
      "url": "https://your-app.com/lobstr-callback",
      "is_active": true,
      "events": {
        "run.done": true,
        "run.error": true
      },
      "retry": true
    }
  }'
```
