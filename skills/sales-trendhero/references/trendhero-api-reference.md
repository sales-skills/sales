# trendHERO API Reference

REST API for generating and retrieving influencer analytics reports programmatically.

## Authentication

- **Method**: Bearer token
- **Header**: `Authorization: Bearer {access_token}`
- **Token management**: [API → Access Tokens](https://trendhero.io/app/api/access-tokens) in the trendHERO dashboard

## Base URL

```
https://api.trendhero.io/api/public/v1
```

## Endpoints

### Create Report

Generate an analytics report for an Instagram account.

```
POST /reports?username={username}
```

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `username` | string | Yes | Instagram handle (without @) |

**Example:**

```bash
curl --location --request POST \
  'https://api.trendhero.io/api/public/v1/reports?username=davidrobsonyoga' \
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

**Response includes:**
- `pk` / `account_pk` — unique Instagram account ID (use for webhook matching)
- `status` — report generation state (see status values below)
- Partial influencer data that updates progressively as the report generates

### Retrieve Report

Fetch a completed report.

```
GET /reports/{username}
```

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `username` | string | Yes | Instagram handle (without @) |

**Response structure:**
- `preview` — initial/basic data
- `report` — full analytics report data (90+ metrics)
- `openai_report` — AI-generated narrative analysis
- `saves_shares_report` — engagement breakdown (saves, shares)

## Report Status Values

| Status | Meaning |
|---|---|
| `collecting` | Data gathering in progress — report not ready yet |
| `recollecting` | Re-generating an existing report with fresh data |
| `ready` | Report complete — all data available |
| `impossibleButReady` | Report ready but with limited data |
| `impossible` | Report failed — account is private or data unavailable |
| `preview` | Incomplete data — report not formally requested via POST |

## Processing Times

| Account size | Expected time |
|---|---|
| Already cached | Instant |
| <10K followers | 30-60 minutes |
| 10K-1M followers | 1-2 hours |
| 1M+ followers | 2-4 hours |

## Webhooks

Configure a webhook URL in the Access Tokens page to receive notifications when reports finish processing.

**Callback payload:**

```json
{
  "report_type": "overall_report",
  "notification_type": "report_ready",
  "account_pk": 12345678,
  "version": "2026-04-12T10:30:00Z"
}
```

Match `account_pk` from the callback to the `pk` value returned when you created the report.

## Common Errors

| Error | Cause | Solution |
|---|---|---|
| "Wrong token" | Invalid or expired API token | Regenerate token in Access Tokens page |
| "You already have the latest version" | Report already exists and is current | Use GET to retrieve the existing report |
| `impossible` status | Private account or restricted data | Verify the account is public and the username is correct |

## Rate Limits

No documented rate limits. Report generation is inherently throttled by processing time. For batch operations, implement reasonable delays (5-10 seconds) between POST requests to avoid overwhelming the API.

## Postman Collection

trendHERO provides a Postman collection for testing. Import it from the API documentation section in your dashboard to quickly test endpoints with demo accounts before consuming credits.

## Notes

- Reports consume credits from your plan's monthly allocation
- The API returns complex nested JSON with integers, strings, arrays, and objects
- AI-generated analysis (`openai_report`) provides a narrative summary of the analytics data
- First-time reports for uncached accounts take longer — subsequent requests for the same account return faster
