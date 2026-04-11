# CreatorIQ API Reference (ExchangeIQ)

Enterprise API for integrating CreatorIQ data with CRM, BI tools, data lakes, and custom workflows.

## Authentication

- **Method**: API key in request header
- **Header**: `x-api-key: YOUR_API_KEY`
- **Provisioning**: Contact support@creatoriq.com or your CreatorIQ account representative — no self-serve key generation
- **Encryption**: All communications encrypted via SSL/TLS

## Base URLs

| API | Base URL |
|---|---|
| **Main API** | apidocs.creatoriq.com |
| **Link-Tracking / Attribution** | linktracking-apidoc.creatoriq.com |

## Format

- **Request/Response**: JSON
- **Documentation platform**: Stoplight (JS-rendered — may require browser access)

## Key API Categories

*Note: Full endpoint details are behind authenticated docs. This is a best-effort summary from available public information.*

### CRM Publishers API

Manage creator data and sync with external CRMs:
- Creator profile data (demographics, social handles, audience metrics)
- Creator lists and segments
- Relationship and pipeline stage data

### Campaign Data

- Campaign creation and configuration
- Campaign performance metrics (impressions, reach, engagement, conversions)
- Content tracking and post detection data
- Creator assignments and deliverable status

### Social Platform Data

Platform-specific endpoints for connected social accounts:
- Instagram metrics and content
- TikTok metrics and content
- YouTube metrics and content
- Facebook, Snapchat data

### Link-Tracking / Attribution

Separate API for ecommerce attribution:
- Affiliate link generation and tracking
- Coupon code performance
- Conversion attribution data
- Revenue and ROAS reporting

### Reporting

- Custom report generation
- Performance dashboards data export
- BenchmarkIQ competitive data (may be plan-gated)

## Rate Limits

Not publicly documented. Contact your CreatorIQ representative for rate limit details based on your plan tier.

## Webhooks

Not publicly documented. Check with your account rep whether webhook notifications are available for events like campaign status changes, content detection, or payment status updates.

## Gaps

- Full endpoint paths, request/response schemas, and pagination details are behind authenticated docs at apidocs.creatoriq.com
- Rate limits and webhook support are not publicly documented
- API access may be plan-gated — confirm with your CreatorIQ rep which endpoints your plan includes
