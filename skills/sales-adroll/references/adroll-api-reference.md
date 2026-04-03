# AdRoll / NextRoll API Reference

## Overview

AdRoll's APIs are provided by NextRoll, the parent company. The API suite covers campaign management, reporting, audience management, and conversion tracking.

**Base URL**: `https://api.nextroll.com/api/v1/`

**Authentication**: OAuth 2.0 or Personal Access Tokens (PAT)
- **OAuth 2.0**: Standard authorization code flow. Register an app in the NextRoll developer portal. Scopes control access to specific resources.
- **Personal Access Token**: Generate in AdRoll dashboard → Settings → API. Include as `Authorization: Bearer {token}` header. Recommended for server-to-server integrations.

## API Suite

### 1. CRUD API
Core resource management for campaigns, ad groups, ads, and creatives.

**Key endpoints**:
- `GET /advertisable/{eid}` — Get advertiser details
- `GET /advertisable/{eid}/campaigns` — List campaigns
- `POST /advertisable/{eid}/campaigns` — Create campaign
- `PUT /campaign/{eid}` — Update campaign
- `GET /campaign/{eid}/adgroups` — List ad groups
- `POST /campaign/{eid}/adgroups` — Create ad group
- `GET /adgroup/{eid}/ads` — List ads in ad group
- `POST /adgroup/{eid}/ads` — Create ad

**Campaign fields**: name, status (active/paused), budget, start_date, end_date, kpi_goal, kpi_metric

### 2. GraphQL Reporting API
Cross-channel analytics and performance data.

**Endpoint**: `POST /report/graphql`

**Capabilities**:
- Campaign, ad group, and ad-level performance metrics
- Cross-channel attribution (display, social, email, CTV)
- Date range queries with daily/weekly/monthly granularity
- Metrics: impressions, clicks, conversions, revenue, ROAS, CPA, CTR, viewability

**Example query**:
```graphql
{
  campaign(eid: "CAMPAIGN_EID") {
    name
    metrics(dateRange: {start: "2024-01-01", end: "2024-01-31"}) {
      impressions
      clicks
      conversions
      revenue
      cost
    }
  }
}
```

### 3. Audience API
Manage audience segments for targeting.

**Key endpoints**:
- `GET /advertisable/{eid}/audiences` — List audiences
- `POST /advertisable/{eid}/audiences` — Create audience segment
- `PUT /audience/{eid}` — Update audience
- `DELETE /audience/{eid}` — Delete audience

**Audience types**: website_visitors, crm_upload, lookalike, exclusion

### 4. User Lists API
Upload and manage CRM contact lists for targeting.

**Key endpoints**:
- `POST /advertisable/{eid}/user_lists` — Create user list
- `POST /user_list/{eid}/users` — Add users to list (email, phone, or device IDs)
- `DELETE /user_list/{eid}/users` — Remove users from list
- `GET /user_list/{eid}` — Get list details and match rates

**Match rate**: Typically 40-60% for email lists. Higher for hashed email matching.

### 5. Prospecting API
Find new audiences similar to your existing customers.

**Key endpoints**:
- `POST /advertisable/{eid}/prospecting` — Create prospecting audience from seed audience
- `GET /prospecting/{eid}` — Get prospecting audience details

### 6. Automated Campaigns API
Manage automated/triggered campaign rules.

**Key endpoints**:
- `GET /advertisable/{eid}/automated_campaigns` — List automated campaigns
- `POST /advertisable/{eid}/automated_campaigns` — Create automated campaign
- `PUT /automated_campaign/{eid}` — Update automated campaign

### 7. Universal Campaigns API
Cross-channel campaign management — create campaigns that span display, social, native, CTV.

**Key endpoints**:
- `POST /advertisable/{eid}/universal_campaigns` — Create universal campaign
- `GET /universal_campaign/{eid}` — Get campaign details
- `PUT /universal_campaign/{eid}` — Update campaign

### 8. Server-to-Server (S2S) Conversion Tracking
Track conversions server-side without relying on client-side pixel.

**Endpoint**: `POST /track/convert`

**Fields**: advertisable_eid, event_name, revenue, currency, order_id, email (hashed), timestamp

**Use cases**: Backend purchase events, phone orders, offline conversions, privacy-compliant tracking without client-side cookies.

## Rate limits

Not publicly documented in detail. General guidance:
- Reporting API: ~60 requests/minute
- CRUD API: ~120 requests/minute
- Batch operations recommended for bulk updates

## Webhooks

No documented webhook/callback system. Use polling via the Reporting API for near-real-time data, or S2S conversion tracking for event-based integration.

## SDKs and tools

- **No official SDKs** — API is REST-based, use any HTTP client
- **Shopify App**: Handles pixel, product feed, and conversion tracking automatically
- **BigCommerce App**: Native integration
- **WooCommerce Plugin**: WordPress plugin for integration

## Notes

- All entity IDs (eids) are string-based unique identifiers
- API documentation may require NextRoll developer portal access
- RollWorks (B2B) APIs may have separate endpoints — check with NextRoll
- API access may be plan-gated — verify with AdRoll support
