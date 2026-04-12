# Modash API Reference

## Overview

Modash offers four API products for building custom influencer marketing integrations. API access is priced separately from the platform subscription.

**Version**: 1.5.0
**Documentation**: https://docs.modash.io/
**Postman collection**: https://www.postman.com/modashio/modash/documentation/6u0ujia/modash-io-api-v1-5-0
**Help center**: https://help.modash.io/en/collections/3623833-modash-api

## Authentication

**Method**: Bearer token

Get your access token from: https://marketer.modash.io/developer

Three ways to authenticate:
1. **Authorization header** (recommended): `Authorization: Bearer {token}`
2. **Body parameter**: `access_token={token}`
3. **Query parameter**: `?access_token={token}`

## API Products

### Discovery API

Search and analyze Modash's 380M+ creator database. Built for finding new creators and understanding their audience and performance.

**Starting price**: $16,200/year (3,000 credits/month)
**Credit system**: Different endpoints consume varying credit amounts.

**Capabilities**:
- Search creators with filters (location, demographics, engagement, follower count, content topics)
- Get detailed creator profiles with audience demographics
- Audience analysis: location, age, gender, language, interests
- Fake follower detection and engagement authenticity scores
- Brand collaboration history
- Engagement rates and performance benchmarks

### Raw API

Live, unfiltered data from influencer profiles. Best for real-time monitoring and tracking.

**Starting price**: $10,000/year (40,000 requests/month)

**Capabilities**:
- Live profile data (follower counts, bio, recent posts)
- Real-time campaign post tracking
- Mention monitoring
- Content analysis and live metrics
- Market intelligence

**Best practices**: See https://help.modash.io/en/articles/10871299-raw-api-best-practices-onboarding-for-developers

### AI Search API

Natural-language creator search for AI agents and innovative applications.

**Capabilities**:
- Describe the creator you need in plain language
- AI interprets intent and returns ranked results
- Designed for integration into AI-powered tools and agents

### Collaborations API

Maps brand and creator partnership history.

**Capabilities**:
- Query which brands a creator has worked with
- Discover creator-brand partnership timelines
- Identify competitive conflicts or alignment

## Error Handling

- **429 Too Many Requests** — rate limit exceeded. Implement exponential backoff.
- **5xx Server Error** — non-billable. These don't consume credits. Retry with backoff.
- Always check the HTTP status code and handle errors before processing the response body.

## Rate Limits

Rate limiting errors return HTTP status code 429. Specific rate limits are not publicly documented — implement exponential backoff for 429 responses.

## Pagination

Pagination method not publicly documented in the current API reference. Check the interactive docs at docs.modash.io for endpoint-specific pagination parameters.

## Webhooks

No webhook support documented in the current API version.

## Notes

- API pricing is completely separate from the Modash platform subscription
- Failed requests (5xx errors) do not consume credits
- The Postman collection provides interactive testing for all endpoints
- For detailed endpoint schemas, use the interactive documentation at docs.modash.io
