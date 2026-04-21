<!-- Source: https://developers.dialpad.com/docs/welcome -->
<!-- OpenAPI spec: https://dialpad.com/static/openapi/platform-v1.0.json -->
<!-- Python SDK: https://github.com/dialpad/dialpad-python-sdk -->

# Dialpad API Reference

## Overview

Dialpad APIs unlock the platform's capabilities for building custom integrations. Documentation is at developers.dialpad.com.

## Authentication

Two methods:
1. **Manual API Key**: Generate in Admin Settings > API Keys. Pass as `Authorization: Bearer {api_key}` header.
2. **OAuth 2.0**: For multi-tenant apps. Request OAuth access through the developer portal.

## OpenAPI Specification

Download the full API collection for Postman/tooling:
- **Primary**: `https://dialpad.com/static/openapi/platform-v1.0.json`
- **Analytics**: `analytics-api.json` (Beta)
- **Reseller**: `platform-reseller-api.json`
- **Service Titan**: `platform-service-titan-api.json`

## Python SDK

```bash
pip install dialpad
```

GitHub: github.com/dialpad/dialpad-python-sdk

```python
from dialpad import DialpadClient

client = DialpadClient(api_key="your_api_key")

# List contacts (paginated — use limit to avoid cursor corruption, see issue #13)
contacts = client.contacts.list(limit=100)

# Get call stats
# Note: Stats API is async — POST to start, GET to retrieve
```

**Known SDK issues (from GitHub):**
- #27: AI Recap endpoint not yet available in SDK (feature request)
- #26: No function to get SMS Opt Out List from Company resource
- #25: Installation fails on Windows (encoding issue)
- #13: Corrupt cursor in contacts list — add `limit` parameter to workaround

## API Categories

### Stats APIs
Async report generation for analytics data.

**Pattern**: POST to initiate → wait 15-20 seconds → GET to retrieve CSV.

**Export types:**
- `stats`: Aggregated data (call counts by status, averages)
- `records`: Individual call records with per-row detail

**Targeting parameters:**
- `office_id`: Filter by office
- `target_id`: Filter by call center or department (overrides office_id)

**Time parameters:**
- `is_today=true`: Real-time tables, refreshed every 30 minutes
- `days_ago`: Historical tables, updated every 4-5 hours
- `is_today` overrides `days_ago` when both specified
- Minimum `days_ago` value: 0

**Timezone**: Must use IANA "tz database name" entries (e.g., `America/New_York`).

**Caching:**
- `is_today=true`: Cached 30 minutes
- `days_ago`: Cached 3 hours
- Identical POST requests reuse cached results

**Best practices:**
- Wait 15-20s after POST before hitting GET
- Retry failed requests every 5-10 seconds (not every second)
- Don't send repeated identical POST requests
- Processing time varies by data volume

### SMS API
Send and receive SMS/MMS messages. A2P (Application-to-Person) compliance required.

### Digital Engagement API
Manage chat and messaging channel interactions.

### AI Virtual Agent API
Configure and manage autonomous AI agents for customer resolution.

### Event Subscriptions
Real-time webhooks for:
- Call events (start, end, transfer)
- Agent status changes
- Message events

### WFM APIs
Workforce management schedule data available via Surfboard integration.

## Rate Limits

Per-endpoint rate limits are not publicly documented. General guidance:
- Watch for HTTP 429 responses
- Implement exponential backoff on retries
- Don't send identical requests in rapid succession
- Stats API has built-in deduplication (identical POST requests return cached results)

## HTTP Status Codes

Standard REST status codes. 429 for rate limiting. Check developers.dialpad.com/docs for the full reference.
