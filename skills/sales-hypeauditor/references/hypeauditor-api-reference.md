# HypeAuditor API Reference

## Overview

HypeAuditor provides a REST API for programmatic access to influencer discovery, analytics reports, campaign management, lists, market analysis, and recruitment.

**Base URL**: `https://hypeauditor.com/api/method/`
**Docs**: https://hypeauditor.readme.io/
**Auth**: Header-based — `X-Auth-Id` (client ID) + `X-Auth-Token` (API token)
**Rate limit**: 100 requests per minute (HTTP 429 if exceeded)
**Response format**: JSON (`Content-Type: application/json`)
**Versioning**: Optional `v` parameter (current: `v=2`, default: latest). v1 deprecated August 2024.

## Authentication

Every request must include:

```
X-Auth-Id: {your_client_id}
X-Auth-Token: {your_api_token}
```

Contact HypeAuditor support to obtain credentials.

## Response structure

**Success**:
```json
{
  "result": {
    "...data...",
    "restTokens": 500,
    "validUntil": 1735689600
  }
}
```

**Error**:
```json
{
  "error": {
    "description": "Error message"
  }
}
```

## HTTP status codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 202 | Report processing — includes `retryTtl` (seconds to wait before retrying) |
| 400 | Bad request — invalid parameters |
| 402 | Insufficient credits |
| 403 | Invalid token or private account |
| 404 | User/resource not found |
| 429 | Rate limit exceeded (100 req/min) |
| 500 | Server unavailable |

## Endpoints by category

### Suggester API

Find influencers by name or account handle.

**`GET /auditor.suggester`**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `search` | string | Yes | Search keyword (name or handle) |
| `st` | string | No | Social network: `instagram`, `youtube`, `tiktok`, `twitter`, `twitch` |
| `exclSt` | string | No | Comma-separated networks to exclude |

### Discovery API

Search for influencers with filters.

**`POST /auditor.search/`**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `social_network` | string | Yes | `instagram`, `youtube`, `tiktok`, `twitter`, `twitch` |
| `search` | array | No | Keywords to search anywhere |
| `search_content` | array | No | Keywords in content |
| `search_description` | array | No | Keywords in bio/description |
| `niche_search` | string | No | Niche phrase for semantic matching |

**Audience filters** (all optional):
- `audience_geo` — audience location
- `audience_age` — audience age range
- `audience_gender` — audience gender split
- `audience_lang` — audience language

**Performance filters** (all optional):
- `followers_from` / `followers_to` — follower range
- `engagement_rate_from` / `engagement_rate_to` — ER range
- `growth` — follower growth rate
- `avg_likes`, `avg_views`, `avg_comments` — content averages

**Other filters**: account type, verification status, brand mentions, content type

**Pagination**: 20 results per page, max 500 pages (10,000 results). Use `page` parameter.
**Credits**: 1 Discovery Call per 20 results.
**Response includes**: `queries_left` field for remaining calls.

**Sandbox**: `POST /auditor.searchSandbox/` — same parameters, for testing.

### Reports API

Get detailed analytics for a specific creator.

**Instagram**: `GET /auditor.report/?username={username}&features={features}`
**YouTube**: `GET /auditor.youtubeReport/?channel_id={id}`
**TikTok**: `GET /auditor.tiktokReport/?username={username}`
**Twitter**: `GET /auditor.twitterReport/?username={username}`
**Twitch**: `GET /auditor.twitchReport/?username={username}`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `username` / `channel_id` | string | Yes | Creator identifier |
| `features` | string | No | Comma-separated feature list for custom reports |
| `v` | string | No | API version (default: latest, use `2019-10-18` for v2) |

**Response includes**: AQS score, audience demographics, engagement metrics, brand safety, rankings, historical data, branded mentions.

**Async processing**: May return 202 with `retryTtl` — wait the specified seconds then retry.

### Account Media

**Instagram**: `GET /auditor.instagramAccountMedia/?username={username}`
**YouTube**: `GET /auditor.youtubeAccountMedia/?channel_id={id}`
**TikTok**: `GET /auditor.tiktokAccountMedia/?username={username}`

Returns recent posts/videos with performance metrics.

### Metrics History

**Instagram**: `GET /auditor.instagramMetricsHistory/?username={username}`
**TikTok**: `GET /auditor.tiktokMetricsHistory/?username={username}`
**Twitter**: `GET /auditor.twitterMetricsHistory/?username={username}`
**Twitch**: `GET /auditor.twitchMetricsHistory/?username={username}`

Returns follower growth, engagement trends, and performance over time.

### Branded Mentions

**Instagram**: `GET /auditor.instagramBrandedMentions/?username={username}`
**YouTube**: `GET /auditor.youtubeBrandedMentions/?channel_id={id}`
**TikTok**: `GET /auditor.tiktokBrandedMentions/?username={username}`

Returns brand mentions and sponsored content detected in creator's posts.

### Lists Management API

Organize creators into lists for campaign management.

**Create list**: `POST /auditor.lists.create/`
**Get lists**: `GET /auditor.lists/`
**Add to list**: `POST /auditor.lists.addReports/`
**Remove from list**: `POST /auditor.lists.removeReports/`

### Campaign Management API

Two versions available (v1.0 and v2.0). Use v2.0 for new integrations.

**Endpoints**: Campaign CRUD, brief management, creator assignments, content approval workflows, performance tracking.

Full documentation: https://hypeauditor.com/swagger/campaign-management/

### Market Analysis API

Competitor analysis and industry benchmarking.

**`POST /auditor.marketAnalysis/`** — competitor campaign tracking, industry benchmarks, trend analysis.

*Plan-gated*: PRO and Enterprise only.

### Recruitment API

Automated creator outreach and recruitment.

**Version**: v1.0

Covers campaign-based recruitment workflows, brief distribution, and application management.

### Creator Profile Info

**`GET /auditor.creators/`**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | int | No | 1-100 results per request |
| `report_unlocked_from` | date | No | `yyyy-mm-dd` — filter by unlock date |
| `report_unlocked_to` | date | No | `yyyy-mm-dd` — filter by unlock date |
| `cursor` | int | No | Pagination cursor |

## Pagination

All list endpoints use cursor-based pagination:
- Response includes `next_cursor` field
- Pass `cursor={next_cursor}` in next request
- Empty or null `next_cursor` means no more results

## PDF Export

Reports can be exported as PDF for client reporting. Use the `export` parameter on report endpoints.

## Rate limiting

- **100 requests per minute** maximum
- HTTP 429 returned when exceeded
- Implement exponential backoff for batch operations
- Monitor `restTokens` in responses to track remaining API credits

## Webhooks

No webhook support documented. Use polling for async operations (check `retryTtl` on 202 responses).
