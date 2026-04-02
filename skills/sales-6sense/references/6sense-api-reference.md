# 6sense API Reference

## Overview

| Property | Value |
|----------|-------|
| Auth | API token (org-level, provisioned in platform settings) |
| Rate limit | Not publicly documented |
| Response format | JSON |
| Credits | API calls consume credits from plan allocation |
| Docs | support.6sense.com/docs/apis (requires authentication) |

**Important**: 6sense API documentation is behind an authenticated support portal. The endpoints, parameters, and response schemas below are reconstructed from public sources (blog posts, integration guides, product pages). Verify against your org's API portal for exact specifications.

## Authentication

All requests use an API token passed as a header:

```bash
curl https://epsilon.6sense.com/v3/company/details \
  -H "Authorization: Token your_api_token"
```

API tokens are provisioned at the org level. You can create multiple tokens for different integrations, sandbox environments, or security isolation. Manage tokens in 6sense platform settings.

## Endpoints by Category

### Company Identification API

Identify companies visiting your website by IP address.

```
GET https://epsilon.6sense.com/v3/company/details
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `ip` | Yes | IPv4 address to resolve |

**Returns**: Company firmographic data — name, domain, industry, employee count, revenue range, location, and more. Similar to Clearbit Reveal or RB2B Company-Level ID.

**Use case**: Install via WebTag (JavaScript snippet) on your website, or call directly from your backend to identify anonymous visitors.

### People Enrichment API

Enrich contacts with professional data.

```
GET/POST https://scribe.6sense.com/v2/people/Enrichment
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `email` | Conditional | Email address to enrich |
| `first_name` | Conditional | First name (with company) |
| `last_name` | Conditional | Last name (with company) |
| `company` | Conditional | Company name or domain |

Provide either `email` alone or `first_name` + `last_name` + `company`.

**Returns**: Contact data including email, company phone, mobile number, title, seniority, job function, department, and associated company firmographics.

### Lead Scoring & Full Firmographics API

Get complete contact + company data with scoring.

```
GET/POST https://scribe.6sense.com/v2/people/full
```

**Parameters**: Same as People Enrichment.

**Returns**: Everything from People Enrichment plus product scoring data and firmographic enrichment. If you have segments published for APIs, returns segment membership and scores.

### Segments API

Check which segments a company belongs to and get scoring data.

```
GET https://scribe.6sense.com/v2/company/segments
```

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Conditional | Company domain |
| `company_name` | Conditional | Company name |

**Returns**: Segment membership, buying stage, intent scores, profile fit score, and 6QA status for the matched company. Useful for real-time personalization (website, email, ad targeting).

### API Settings: Segments and Score Configurations

Configure which segments and scoring models are available via API in the 6sense platform under Settings > API Configuration. You can publish multiple segments for API consumption, allowing different applications to query different audience definitions.

## WebTag (Company Identification JavaScript)

Install on your website for automatic visitor identification:

```html
<script>
  // 6sense WebTag 2.0
  // Installed via Google Tag Manager or directly in <head>
  // Configuration in 6sense platform settings
</script>
```

**Setup options**:
- Direct installation in `<head>` tag
- Google Tag Manager (GTM) — recommended for most teams
- GA4 integration for combined analytics

WebTag identifies companies visiting your site and feeds data into 6sense segments, workflows, and CRM in real-time.

## Credit System

- API calls consume credits from your plan allocation
- Credit consumption varies by endpoint (Company Identification vs People Enrichment vs Segments)
- Monitor usage in platform settings
- Unused credits expire (monthly reset, no rollover)
- Overage charges apply when exceeding allocation

## Error Handling

| Status | Meaning |
|--------|---------|
| 200 | Success — data returned |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid or expired API token |
| 403 | Forbidden — endpoint not provisioned for your org |
| 404 | Not Found — no match for this lookup |
| 429 | Rate Limited — too many requests |
| 500 | Server Error — retry with backoff |

## Gaps & Limitations

- **Documentation behind auth wall**: Full API docs are only accessible via the 6sense support portal (requires login). The endpoints above are reconstructed from public sources.
- **Rate limits not documented publicly**: No public information on request-per-minute or daily limits. Check your org's API portal.
- **Response schemas not fully documented**: Exact response field names and structures may differ from what's described here. Use your API portal's interactive docs to explore response schemas.
- **Credit consumption unclear**: No public documentation on how many credits each API endpoint consumes. Contact 6sense support or check your API settings.
- **No public SDKs**: 6sense does not publish official client libraries. Use direct HTTP requests.
- **Webhook support unclear**: No public documentation on webhook events from the 6sense platform. Check integration settings in your org.
