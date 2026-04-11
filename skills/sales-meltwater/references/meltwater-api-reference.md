# Meltwater API Reference

## Overview

The Meltwater API provides programmatic access to media monitoring, social analytics, and AI-powered insights.

**Base URL**: `https://api.meltwater.com/v3/`
**Auth**: API key via `apikey` request header
**Protocol**: HTTPS required (plain HTTP will fail)
**OpenAPI spec**: Available for download in YAML format from the developer portal

## Authentication

```
apikey: YOUR_API_TOKEN
```

API tokens are created and managed in the Meltwater application under API Credentials. If a token is compromised, revoke it and create a new one from the same page.

## API Feature Areas

### Listening

Export, stream, search, and analyze mentions from your Meltwater searches.

| Capability | Description |
|---|---|
| **Mention export** | Batch export mentions matching a saved search |
| **Mention streaming** | Real-time stream of mentions as they're detected |
| **Search management** | Create, update, and manage saved searches |
| **Analytics** | Generate aggregate analytics (volume, sentiment, top sources) from search results |
| **Mention tagging** | Apply tags to mentions programmatically |
| **X post rehydration** | Retrieve full X/Twitter post data for mentions |
| **Custom output templates** | Define custom content output formats for exports |

### Explore+

Optimized searching with advanced features.

| Capability | Description |
|---|---|
| **Advanced search** | Optimized mention search with enhanced filtering |
| **Analytical reporting** | Advanced analytics and reporting on search results |
| **Search management** | Create and manage optimized saved searches |
| **Custom fields** | Define and manage custom fields for mention enrichment |

### Social Analytics

Fetch content and metrics from owned social media accounts.

| Capability | Description |
|---|---|
| **Owned posts** | Retrieve posts from connected social accounts |
| **Owned analytics** | Fetch engagement metrics, reach, and performance data |

### Mira API (AI)

AI-powered chat completions endpoint for media intelligence insights.

| Capability | Description |
|---|---|
| **Responses** | Chat completion endpoint — submit messages, receive AI-generated insights with citations |
| **Streaming** | Real-time streaming mode for progressive response delivery |
| **Projects** | Manage Mira API projects |
| **MCP Server** | Remote MCP server for integration with AI assistants (Claude, Cursor, etc.) |

**Access**: Mira API is sold as a separate package. Contact your account manager.

### Bring Your Own Content (BYOC)

Import custom content into Meltwater for analysis.

| Capability | Description |
|---|---|
| **Content import** | Upload custom documents, articles, or data for analysis |
| **Import monitoring** | Track the progress of content import jobs |

### BI Integrations

Connect Meltwater data to business intelligence tools.

| Tool | Integration method |
|---|---|
| **Power BI Desktop** | Direct connector |
| **Power BI Service** | Cloud connector |
| **Looker Data Studio** | Data connector |

## Usage Limits

API feature access and usage limits depend on your Meltwater package. Check the Usage Statistics page in your Meltwater application or contact your account manager.

## Rate Limits

Not publicly documented. Specific rate limits are provided with your API access credentials.

## Webhooks

Not documented in public API reference. Check with your account manager for webhook support availability.

## SDKs & Developer Resources

- **Developer Portal**: https://developer.meltwater.com/docs/
- **OpenAPI Spec**: Downloadable YAML from the reference page
- **API Guides**: https://developer.meltwater.com/docs/meltwater-api/guides/
- **Academy**: https://academy.meltwater.com (training and certification)
- **Community**: https://help.meltwater.com (help articles and guides)

## Status Codes

Standard HTTP status codes. Key ones:
- `200` — Success
- `401` — Unauthorized (invalid or missing API key)
- `403` — Forbidden (feature not included in your package)
- `429` — Rate limit exceeded
- `500` — Server error

All requests include a `X-Request-Id` header for debugging and support escalation.

## Multi-Company Support

The API supports multi-company accounts. If your organization manages multiple Meltwater accounts, you can access data across companies with appropriate credentials.
