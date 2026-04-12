# Influencer Hero API Reference

## Overview

Influencer Hero provides a REST API for managing influencer collaborations, tracking affiliate performance, and automating key tasks. Separate API products are available for influencer data access.

**Documentation**: https://docs.influencer-hero.com/ (requires authentication)

## Authentication

All API requests require an API key passed via the `X-API-KEY` header:

```
X-API-KEY: your-api-key
```

API keys are generated from your Influencer Hero account settings.

## Platform API

### Endpoint categories

| Category | What it covers |
|---|---|
| **Account** | Account management, settings, user info |
| **Affiliate Tracking** | Discount codes, affiliate links, sales attribution, commission tracking |
| **Campaigns** | Campaign management, influencer assignments |
| **Influencers** | CRM data, deal pages, relationship management |
| **Content** | UGC library, post tracking |
| **Webhooks** | Event-driven notifications |

### Webhook events

| Event | Trigger |
|---|---|
| New payout request | Influencer requests commission payout |
| New Max Bid for deal | New bid received on a deal |
| Discount code update | Discount code created, modified, or deactivated |
| Custom link update | Custom tracking link modified |
| Product send | Product shipped to influencer |
| New email sent | Outreach email sent to influencer |
| New influencer post | Influencer publishes content tied to your brand |

## Data APIs (separate products)

Influencer Hero also offers standalone data APIs for building custom integrations:

### Discovery API

Search influencers using advanced filters like audience demographics, location, engagement, and niche. Access to 450M+ creator profiles.

### Raw API

Access core influencer data and metrics directly — follower counts, engagement rates, audience demographics, content history. Build custom workflows and tools.

### Brand Collaborations API

Retrieve structured data on influencer–brand partnerships and sponsored content activity. Detect which brands influencers have worked with.

### AI Search API

Use natural language queries to discover influencers and posts across social platforms. Returns semantically relevant results.

## Technical details

- **Architecture**: RESTful API
- **Data freshness**: Daily updates
- **Infrastructure**: Engineered for scale — high volume, low latency
- **Pricing**: Usage-based with flexible plans; enterprise options include SLAs, webhooks, and custom endpoints

## Gaps

- Full endpoint paths, request/response schemas, and rate limits are not publicly documented (docs require authentication)
- Base URL not publicly disclosed
- Pagination method not documented
- Data API pricing not publicly available
- Contact Influencer Hero support or book a demo for complete API documentation access
