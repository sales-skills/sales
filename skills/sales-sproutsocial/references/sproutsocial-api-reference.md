# Sprout Social API Reference

## Overview

The Sprout Social API provides programmatic access to analytics, publishing, and messaging data. **Requires Advanced or Enterprise plan.**

## Authentication

- **Method**: Bearer token (API key)
- **Token generation**: Settings → Global Features → API → API Token Management
- **Header**: `Authorization: Bearer {api_token}`
- **Permissions**: User generating the token must have API Permissions entitlement (granted by account admin)

## Base URL

```
https://api.sproutsocial.com
```

## Key endpoints

### Metadata

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/{customerId}/metadata/customer` | Customer profile metadata — connected profiles, profile groups |
| GET | `/v2/{customerId}/metadata/customer` | Customer metadata v2 — enhanced profile details |
| GET | `/v1/metadata/client` | Client-level metadata |
| GET | `/v1/{customerId}/metadata/customers/users` | User metadata — team members and roles |

### Analytics

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v1/{customerId}/analytics/posts` | Post-level analytics — engagement, impressions, clicks, video views |
| POST | `/v1/{customerId}/analytics/profiles` | Profile-level analytics — audience growth, engagement trends |

### Messages

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/{customerId}/messages` | Retrieve messages with filtering (by profile, date, type, case_id) |
| POST | `/v1/{customerId}/messages` | Create/publish posts |

## Data models

### Post metrics
- `impressions` — total times content was displayed
- `engagements` — total interactions (likes, comments, shares, clicks)
- `video_views` — video view count
- `video_view_time` — total video watch time (Instagram)
- `is_boosted` — whether the post was boosted/promoted
- `clickthrough_link` — destination URL

### Message fields
- `case_id` — linked support case ID
- `sent` — timestamp
- `inbox_permalink` — direct link to message in Smart Inbox

### Network metadata
- `address` — location data for profiles with physical locations
- `store_code` — store identifier for multi-location businesses

## Pagination

Not publicly documented. The API uses cursor-based pagination for message retrieval. Check response headers for pagination tokens.

## Rate limits

Not publicly documented. Sprout recommends contacting their support team for rate limit guidance specific to your use case.

## Webhooks

Not available. Use polling to check for new messages or analytics updates.

## SDK / client libraries

No official SDKs. Use HTTP client libraries in your language of choice. Postman collection available at: Sprout Social API workspace on Postman.

## Changelog

Sprout maintains an API changelog at `https://api.sproutsocial.com/docs/changelog/` documenting endpoint additions, field changes, and deprecations.

## Limitations

- **No implementation support** — Sprout's support team can troubleshoot API behavior but won't help build integrations.
- **Plan-gated** — requires Advanced ($399/seat/mo) or Enterprise plan.
- **Read-heavy** — the API is strongest for reading analytics and messages. Publishing capabilities are more limited than the UI.
- **No real-time** — no WebSocket or streaming endpoints. Polling only.
