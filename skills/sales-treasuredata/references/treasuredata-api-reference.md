<!-- Source: https://docs.treasuredata.com/apis/td-api, https://docs.treasuredata.com/apis/endpoints/endpoints, https://docs.treasuredata.com/apis -->

# Treasure Data API Reference

## API Overview

Treasure Data provides multiple APIs:

| API | Base URL (US) | Purpose |
|-----|---------------|---------|
| **TD API** | https://api.treasuredata.com | Core platform API — databases, tables, jobs, connectors, users, access control |
| **Audience API** | https://api-cdp.treasuredata.com | CDP-specific — segments, audiences, activations |
| **Import API** | https://api-import.treasuredata.com | Batch data ingestion (gzipped msgpack format) |
| **Postback API** | https://in.treasuredata.com | Real-time small-batch JSON data ingestion |
| **LLM API** | (see docs) | AI/LLM capabilities |
| **Workflow API** | https://api-workflow.treasuredata.com | Workflow scheduling and management |
| **Profiles API** | https://cdp.in.treasuredata.com | Unified profile queries |
| **Personalization API** | https://us01.p13n.in.treasuredata.com | Real-time personalization |
| **Trino JDBC** | https://api-presto.treasuredata.com | SQL query access via JDBC/ODBC |

**Regional base URLs**: Replace `treasuredata.com` with the region-specific domain:
- US: `treasuredata.com` (default)
- Europe: `eu01.treasuredata.com`
- Japan: `treasuredata.co.jp`
- Korea: `ap02.treasuredata.com`

## Authentication

All API requests require the `Authorization` header:

```
Authorization: TD1 YOUR_API_KEY_HERE
```

API keys are managed in the TD Console under account settings. The key format is a long alphanumeric string prefixed with your organization ID.

## TD API Endpoints

### List Databases

```
GET /v3/database/list
```

**Response:**
```json
{
  "databases": [
    {
      "name": "my_database",
      "count": 12345,
      "created_at": "2024-01-15 10:30:00 UTC",
      "updated_at": "2024-06-20 14:22:00 UTC",
      "organization": null
    }
  ]
}
```

### Issue a Query (Presto/Trino)

```
POST /v3/job/issue/presto/{database_name}
Content-Type: application/json
```

**Request body:**
```json
{
  "query": "SELECT * FROM my_table WHERE time > 1700000000 LIMIT 100",
  "domain_key": 1234,
  "Priority": 0
}
```

**Parameters:**
- `query` (string, required) — SQL query to execute
- `domain_key` (integer) — Domain identifier
- `Priority` (integer) — Job priority level (lower = higher priority)

**Response:**
```json
{
  "job": "12345678",
  "job_id": "12345678",
  "database": "my_database"
}
```

### Get Query Results

```
GET /v3/job/result/{job_id}?format=json
```

**Parameters:**
- `job_id` (path, required) — Job ID from the issue query response
- `format` (query) — Response format: `json`, `csv`, `tsv`, `msgpack`

**Response:** Array of result rows with column data.

### List Connectors

```
GET /v3/result/list
```

**Response:**
```json
{
  "results": [
    {
      "name": "my_salesforce_connector",
      "url": "salesforce://...",
      "organization": null
    }
  ]
}
```

## Import Methods

### Import API (Batch — msgpack)
- **Subdomain**: `api-import`
- **Format**: Gzipped msgpack
- **Use case**: High-volume batch data ingestion

### Postback API (Real-time — JSON)
- **Subdomain**: `in`
- **Format**: JSON
- **Use case**: Frequent, lightweight event payloads (mobile SDK, webhooks)
- **⚠️ IMPORTANT**: Column names in the JSON payload are **case-sensitive** and must match the target table schema exactly. Mismatched casing silently drops data.

### Bulk Import API (External Systems)
- **Path**: `/v3/bulk_import/*`
- **Use case**: Large file-based data loads from third-party systems

## Client SDKs

Official client libraries wrap the REST API:

| Language | Package | Install |
|----------|---------|---------|
| Python | `td-client` | `pip install td-client` |
| Ruby | `td-client` | `gem install td-client` |
| Java | `td-client-java` | Maven dependency |
| Node.js | `td` | `npm install td` |
| Go | `td-client-go` | `go get github.com/treasure-data/td-client-go` |

## Rate Limits

Rate limits are not publicly documented with specific numbers. Enterprise accounts have higher limits. Contact TD support if you're hitting rate limits — they can adjust per-account.

## Query Engine Notes

- **Presto/Trino** — primary query engine for interactive SQL queries. Shared compute across the platform.
- **Hive** — available for batch processing, larger dataset handling. Slower but handles bigger workloads.
- Jobs are queued and processed based on priority. Monitor the job queue in TD Console to avoid contention.
