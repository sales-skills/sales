# NeoReach API Reference

## Overview

NeoReach provides a REST API for integrating influencer data into enterprise applications. The API returns JSON data and offers 400+ custom data points.

**Important**: NeoReach does not publish public API documentation. API access, specs, authentication details, and endpoint documentation are provided only after signing an enterprise contract. The information below is based on publicly available marketing materials and may not reflect the full API surface.

## Authentication

- **Method**: Not publicly documented — likely API key or OAuth (confirmed during onboarding)
- **Base URL**: Not publicly documented
- **Rate limits**: Not publicly documented

## Known API capabilities

Based on NeoReach's marketing materials, the API provides access to:

### Creator data
- Creator profiles and network statistics
- Hashtag and content trends
- Audience demographics and insights
- 100+ NeoReach custom data endpoints

### Sponsorship intelligence
- Sponsorship pricing data (historical and current)
- Historical price and ROI data for benchmarking
- Competitor spend analysis

### Discovery and matching
- Audience matching (find creators whose audience matches target demographics)
- Fast-growing influencer tracking (identify rising creators)
- Brand affinity data

### Fraud detection
- Programmatic access to fraud scoring
- Fake follower detection via API
- Engagement authenticity scoring

### Data integration
- 400+ custom data points for in-house tool integration
- JSON response format
- Standard REST parameters

## Integration patterns

### Dashboard integration
Pull NeoReach data into internal BI tools (Tableau, Looker, custom dashboards) for unified reporting across marketing channels.

### CRM enrichment
Enrich creator records in your CRM with NeoReach audience data, fraud scores, and historical performance metrics.

### Automated workflows
Use API data to trigger workflows — e.g., auto-flag creators whose fraud score exceeds a threshold, or auto-add rising creators to watchlists.

## Getting started

1. Contact NeoReach sales to discuss API access (enterprise tier required)
2. Request API documentation and sandbox/staging environment
3. Plan a proof-of-concept with a small subset of endpoints
4. Validate data quality and response formats before building production integrations

## Gaps

- No public Swagger/OpenAPI spec
- No documented SDKs or client libraries
- No webhook support documented
- No rate limit information available
- Authentication method not publicly disclosed
