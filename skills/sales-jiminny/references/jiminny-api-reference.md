<!-- Source: https://help.jiminny.com/en/articles/9527212-what-is-the-jiminny-api + https://jiminny.github.io/customer-api-docs/ (JS-rendered, partially captured) -->

# Jiminny API Reference

## Overview

The Jiminny API is a **partial REST API**. Data is returned in **JSON format**.

The API enables customers to pull information from Jiminny into other applications within their technology stack.

## Authentication

API keys are required for access. **Only Admins/Owners** can generate them:

1. Go to **Organisation Settings** in your Jiminny account
2. Navigate to **General**
3. Locate the **API Key** section
4. Click **Generate API Key**

API keys should be treated as confidential and shared only through secure methods like 1Password or Azure Secure Blob — **never via email**.

## Rate Limits

| Endpoint | Rate Limit |
|---|---|
| `getActivities` | 30 requests per minute |
| All other endpoints | 120 requests per minute |

## Data Available

Each activity record pulled from Jiminny contains:

- **Metadata**: title, host, participants, duration, date/time
- **Playback statistics**: listen count, coaching activity, automated call scoring
- **Coaching frameworks**: ratings, coach and coachee information
- **Transcriptions**: full call transcript text
- **CRM data**: linked CRM records and field values

## Media Downloads

Video content and call recording download links are provided in API responses. These links are **only active for 24 hours** once issued. Fetch and persist recordings promptly if archiving is needed.

## Best Practices

- Start with **500-1,000 activities** per request batch
- Pull data **regularly in manageable batches** rather than large annual dumps to avoid performance issues
- Implement queuing with a token-bucket rate limiter tuned below the published limits

## API Documentation

- **Help Center**: https://help.jiminny.com/en/collections/9687417-jiminny-api
- **Swagger UI**: https://jiminny.github.io/customer-api-docs/ (JS-rendered — requires browser to view full spec)

## Limitations

- **Partial REST API** — not all CRUD operations are available; primarily designed for data extraction
- **Admin/Owner-only key generation** — regular users cannot create API keys
- **24-hour download link expiry** — media URLs are temporary
- **No webhook support documented** — polling-based integration only (unlike Gong/Fireflies which offer webhook events)
- **Swagger docs are JS-rendered** — the full OpenAPI spec could not be captured via static fetch; visit in a browser for complete endpoint details

## GitHub Resources

Jiminny maintains open-source OAuth2 client libraries for dialer integrations:
- `jiminny/oauth2-dialpad` — Dialpad OAuth 2.0 for PHP League
- `jiminny/oauth2-bullhorn` — Bullhorn OAuth 2.0
- `jiminny/oauth2-aircall` — Aircall OAuth 2.0
- `jiminny/oauth2-salesloft` — Salesloft OAuth 2.0
- `jiminny/oauth2-pipedrive` — Pipedrive OAuth 2.0

GitHub org: https://github.com/jiminny
