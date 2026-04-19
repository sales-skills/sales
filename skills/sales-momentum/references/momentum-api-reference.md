<!-- Source: https://docs.momentum.io/api-access -->
<!-- Full API reference at: https://docs.momentum.io/llms.txt (documentation index) -->
<!-- Apiary docs (JS-rendered, not fetchable): https://themomentumapiv1.docs.apiary.io/ -->

# Momentum API Reference

## Authentication

Use an API key passed as the `X-API-Key` header on all requests.

**Setup:**
1. Contact Momentum support to enable API access for your workspace
2. Navigate to Integrations page in your Momentum dashboard
3. Select "Create API key"
4. Use the generated key in the `X-API-Key` header

## Rate Limits

All API endpoints are rate limited to **100 requests per 15-minute window**.

When the rate limit is exceeded, the API returns a `429 Rate limit exceeded` error.

## OpenAPI Specification

An OpenAPI spec is available for developers building custom integrations. Access the documentation index at:
https://docs.momentum.io/llms.txt

## Known Limitations

- API access must be explicitly enabled by Momentum support — it's not self-serve
- The Apiary-hosted API v1 docs (themomentumapiv1.docs.apiary.io) are JS-rendered and cannot be fetched programmatically
- Specific endpoint paths, request/response schemas, and detailed parameter documentation require workspace-level API access to view
- Post-Salesforce acquisition: API availability and terms may change

## Gaps

The publicly available API documentation is minimal. The full endpoint reference (paths, methods, parameters, response formats) is behind authenticated access. This file captures what's publicly documented — for comprehensive endpoint details, request API access from Momentum support or consult the OpenAPI spec once access is granted.
