# Reddit Ads API v3 Reference

## Overview

The Reddit Ads API allows programmatic management of campaigns, ad groups, ads, and reporting. It is **not self-serve** — access requires whitelisting by a Reddit sales representative.

## Authentication

- **Method**: OAuth 2.0
- **Flow**: Client Credentials (Client ID + Client Secret → access token)
- **Scopes**: Campaign management, reporting, audience management
- **Token endpoint**: Standard Reddit OAuth endpoint

## Access requirements

1. Create a Reddit account and developer application at reddit.com/prefs/apps
2. Register for Ads API access through your Reddit sales representative
3. Reddit reviews and whitelists your application
4. Use Client ID and Client Secret to obtain access tokens

## Key functional areas

The API covers these domains (specific endpoint paths require whitelisted access to view full docs):

### Accounts
- List ad accounts
- Get account details
- Account-level settings and permissions

### Campaigns
- Create, read, update, delete campaigns
- Set objectives, budgets, schedules
- Campaign status management (active, paused, archived)

### Ad Groups
- Create, read, update, delete ad groups
- Targeting configuration (communities, interests, keywords, custom audiences)
- Bid strategy and placement settings
- Frequency caps

### Ads
- Create, read, update, delete ads
- Creative upload and management
- CTA configuration (13 available CTAs: Shop Now, Sign Up, Download, Install, Learn More, etc.)
- Ad review status

### Product Catalogs
- Manage product feeds for dynamic Product Ads
- Product data upload and sync

### Audiences
- Create and manage custom audiences
- Website visitor audiences (via Pixel)
- Customer list upload (hashed emails)
- Engagement audiences
- Lookalike audience creation

### Reporting
- Campaign, ad group, and ad-level performance reports
- Flexible metrics and breakdowns
- Date range selection

## Data format

- All timestamps in **UTC**
- JSON request and response bodies
- Standard REST conventions

## Rate limits

Not publicly documented. Likely enforced per-account. Contact your Reddit sales representative for specifics.

## Webhook support

Not documented in the Ads API. Use Zapier integration for event-driven workflows (Lead Gen Ads → CRM).

## Conversions API (CAPI)

Separate from the Ads API. Server-side event tracking:

- **Endpoint**: Events Manager → Conversions API in Reddit Ads Manager
- **Auth**: API token generated in Events Manager
- **Events**: PageView, ViewContent, Search, AddToCart, Purchase, Lead, SignUp, Custom
- **Match keys**: email (hashed), IP address, user agent, Reddit click ID
- **Deduplication**: Use event_id to prevent double-counting between Pixel and CAPI

## Third-party tools

- **Postman collection**: [Reddit Ads API v3 on Postman](https://www.postman.com/reddit-ads-api/reddit-ads-api-v3/overview) — pre-built requests for testing
- **MCP servers**: Community-built MCP servers exist for read-only access (listing campaigns, ad groups, ads, performance reports)
- **Salesforce Marketing Cloud**: Native Reddit Ads API connector for data streams
- **Adobe Experience Platform**: Reddit Conversions API extension for server-side event forwarding

## Gaps

- Full endpoint paths and request/response schemas require whitelisted access
- Rate limit specifics not publicly available
- Webhook support not documented
- SDK/client libraries not officially provided by Reddit (community wrappers available via Windsor.ai for Python and R)
