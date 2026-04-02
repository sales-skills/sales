# Clay API & Integration Reference

## Overview

| Property | Value |
|----------|-------|
| Auth | No traditional API auth — webhook-based integration |
| API style | Webhooks (inbound/outbound) + HTTP API actions (outbound) |
| REST API | No public REST API for table/data management |
| Enterprise API | People & Company API (Enterprise plan only) |
| Rate limit | Configurable per HTTP API action (e.g., 10 requests/1000ms) |
| Plan gates | HTTP API and webhooks require Growth plan ($446+/mo) |
| Docs | university.clay.com/docs |

**Important**: Clay does not have a traditional REST API. Integration is webhook-based — you push data into Clay via inbound webhooks and pull data out via HTTP API actions or native integrations. The Enterprise plan includes a lightweight People & Company API for lookups.

## Inbound Webhooks

Push data into a Clay table by POSTing JSON to the table's unique webhook URL.

### Getting the webhook URL

1. Open your Clay table
2. Click **Sources** → **Webhook**
3. Copy the unique webhook URL (format: `https://app.clay.com/webhook/...`)

### Sending data

```bash
curl -X POST "https://app.clay.com/webhook/{table_webhook_id}" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Jane",
    "last_name": "Doe",
    "company": "Acme Corp",
    "email": "jane@acme.com"
  }'
```

**Behavior**:
- Each POST creates a new row in the table
- JSON keys map to column names (auto-created if they don't exist)
- Enrichments configured on the table run automatically on new rows
- No authentication required on the webhook URL (security via URL obscurity)

**Use cases**:
- Form submissions → Clay enrichment
- CRM triggers → Clay enrichment → push back to CRM
- Zapier/Make → Clay for enrichment middleware
- Custom apps → Clay for data enrichment

## HTTP API Action (Outbound)

Call external APIs from within Clay table workflows. Available on Growth plan and above.

### Configuration

In your Clay table:
1. Click **Add enrichment** → search for **HTTP API**
2. Configure:
   - **Method**: GET, POST, PUT, DELETE
   - **Endpoint**: The external API URL
   - **Headers**: Authorization, Content-Type, custom headers
   - **Query parameters**: Key-value pairs appended to URL
   - **Body**: JSON payload (can use dynamic column values)
   - **Field path**: JSONPath to extract specific fields from the response

### Rate limiting

Configure per-action:
- **Request limit**: Number of requests per duration window
- **Duration (ms)**: Time window for the request limit
- Example: `10 requests / 1000ms` = 10 requests per second

### Example: Push enriched data to a webhook

```
Method: POST
Endpoint: https://your-app.com/api/enriched-leads
Headers:
  Authorization: Bearer YOUR_TOKEN
  Content-Type: application/json
Body:
{
  "email": {{Work Email}},
  "company": {{Company Name}},
  "revenue": {{Company Revenue}},
  "enriched_at": {{_timestamp}}
}
```

Dynamic values use `{{Column Name}}` syntax to reference table columns.

## Enterprise People & Company API

Available only on Enterprise plans. Lightweight lookup API for basic profile and company data.

### Capabilities

- **People lookup**: Send an email or LinkedIn URL → get basic profile info (name, title, company, location)
- **Company lookup**: Send a domain → get company details (name, industry, size, location)
- **Limitations**: Does not include deep data like verified emails, phone numbers, or revenue figures. For those, use Clay's table-based waterfall enrichment.

### Details

No public documentation available for endpoint URLs, authentication, or response schemas. Contact Clay sales or your dedicated Growth Strategist for Enterprise API access and documentation.

## Native CRM Integrations

### Salesforce

| Action | Description |
|--------|------------|
| Import | Pull leads, contacts, accounts, opportunities into Clay tables |
| Create | Create new records in Salesforce from enriched Clay data |
| Update | Update existing records with enriched fields |
| Lookup | Search Salesforce for matching records |

**Setup**: Connect via OAuth in Clay → Integrations → Salesforce. Requires Growth plan.

### HubSpot

| Action | Description |
|--------|------------|
| Import | Pull contacts, companies, deals into Clay tables |
| Create object | Create new CRM records |
| Update object | Update existing records |
| Create association | Link records together |
| Lookup object | Search for matching records |

**Setup**: Connect via OAuth or HubSpot Marketplace app. Requires Growth plan.

### Dynamics 365

| Action | Description |
|--------|------------|
| Create | Create new records |
| Update | Update existing records |
| Lookup | Search for matching records |

**Setup**: Connect via OAuth. Requires Growth plan.

## Zapier Integration

### Triggers (Clay → Zapier)

- **New row added** — fires when a new row appears in a Clay table
- **Row updated** — fires when a row is modified (enrichment complete, manual edit)

### Actions (Zapier → Clay)

- **Add row** — push data into a Clay table via webhook
- **Update row** — modify an existing row

### Setup

Use Clay's webhook URL as the endpoint in Zapier's webhook action, or use the native Clay app in Zapier.

## Make (Integromat) Integration

Clay has a native Make app supporting:
- Webhook triggers (new/updated rows)
- Table row creation
- HTTP API actions for custom workflows

## Ad Sync Destinations

Push Clay Audiences to advertising platforms:

| Platform | Sync type | Notes |
|----------|----------|-------|
| LinkedIn Ads | Matched Audiences | Company + contact targeting |
| Meta Ads | Custom Audiences | Email-based matching |
| Google Ads | Customer Match | Email-based matching |

**Plan gate**: Growth plan (1 audience) or Enterprise (2 audiences).

## Credit System

| Credit type | What it covers | Rollover |
|-------------|---------------|----------|
| **Actions** | Enrichments, Claygent runs, HTTP calls, CRM writes | No — resets monthly |
| **Data Credits** | Provider-specific enrichment lookups | Yes — up to 2x monthly allocation |

- Different providers cost different amounts of Data Credits
- Waterfall enrichment consumes credits for each provider attempted (not just successful matches)
- "Only if empty" logic prevents redundant lookups and saves credits
- Additional credits available at ~30% premium on paid plans

## Error Handling

### Webhook errors

| Scenario | Behavior |
|----------|---------|
| Invalid JSON | Row not created, no error response (fire-and-forget) |
| Table deleted | 404 response |
| Rate limited | 429 response — retry with backoff |

### HTTP API action errors

| Status | Meaning |
|--------|---------|
| 200-299 | Success — response data extracted per field path config |
| 400 | Bad request — check body/params configuration |
| 401/403 | Auth error — check headers/token |
| 404 | Endpoint not found |
| 429 | Rate limited — Clay respects the configured rate limit |
| 500+ | Server error — Clay retries automatically |

## Gaps & Limitations

- **No public REST API**: Clay does not expose endpoints for programmatic table management, row CRUD, or enrichment triggering outside of webhooks. This is a deliberate product choice — Clay is a workflow platform, not an API service.
- **Enterprise API undocumented**: The People & Company API (Enterprise only) has no public documentation. Contact Clay for specs.
- **Webhook security**: Inbound webhook URLs have no authentication — security relies on URL obscurity. For sensitive data, consider adding a verification layer in your source system.
- **Credit costs per provider not public**: Exact Data Credit costs for each of the 150+ providers are not publicly documented. Check within the Clay UI when configuring enrichments.
- **No official SDKs**: Clay does not publish client libraries. Use direct HTTP requests for webhook and HTTP API integration.
