# Seamless.AI API Reference

## Overview

- **Base URL**: `https://api.seamless.ai/api/client/v1`
- **Auth**: API key (`Token: API_KEY` header) or OAuth 2.0 (`Authorization: Bearer ACCESS_TOKEN`)
- **Content-Type**: `application/json` for all requests and responses
- **Rate Limit**: ~100 requests per 60 seconds per endpoint

### Rate Limit Headers

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Maximum requests allowed in current window |
| `X-RateLimit-Remaining` | Requests remaining in current window |
| `X-RateLimit-Reset` | Unix epoch time when window resets |
| `X-PublicAPI-Credits` | Remaining credits for requests |

## Authentication

### API Key

Include in the request header:

```
Token: YOUR_API_KEY
```

API keys are persistent and managed in Seamless.AI Settings > API.

### OAuth 2.0

**Authorization endpoint**: `https://login.seamless.ai/oauth/authorize`
**Token endpoint**: `POST /oauth/accessToken`

**Grant types**: `authorization_code`, `refresh_token`

**Exchange authorization code for access token**:

```http
POST /oauth/accessToken
Content-Type: application/json

{
  "grant_type": "authorization_code",
  "code": "AUTH_CODE",
  "redirect_uri": "YOUR_REDIRECT_URI",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}
```

**Refresh token**:

```http
POST /oauth/accessToken
Content-Type: application/json

{
  "grant_type": "refresh_token",
  "refresh_token": "YOUR_REFRESH_TOKEN",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}
```

**Header format**: `Authorization: Bearer ACCESS_TOKEN`

## Endpoints

### Contact Search

Search for contacts matching specified criteria.

```http
POST /search/contacts
Content-Type: application/json
Token: API_KEY

{
  "filters": {
    "company": ["Acme Corp"],
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "US"
    },
    "department": ["engineering", "sales"],
    "industry": ["technology"],
    "seniority": ["vp", "director", "c_level"],
    "keywords": ["product management"],
    "news": ["funding"]
  },
  "limit": 50,
  "nextToken": null
}
```

**Response**:

```json
{
  "data": [
    {
      "id": "contact_123",
      "firstName": "Jane",
      "lastName": "Smith",
      "title": "VP Engineering",
      "company": "Acme Corp",
      "email": "jane.smith@acme.com",
      "phone": "+14155551234",
      "location": {
        "city": "San Francisco",
        "state": "CA",
        "country": "US"
      },
      "department": "engineering",
      "seniority": "vp"
    }
  ],
  "supplementalData": {
    "nextToken": "eyJhbGciOiJIUzI1NiJ9...",
    "totalResults": 150
  }
}
```

**Pagination**: Use the `nextToken` from `supplementalData.nextToken` in subsequent requests.

### Company Search

Search for companies matching specified criteria.

```http
POST /search/companies
Content-Type: application/json
Token: API_KEY

{
  "filters": {
    "name": "Acme",
    "domain": "acme.com",
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "US"
    },
    "industry": ["technology"],
    "employeeCount": {
      "min": 50,
      "max": 500
    },
    "revenue": {
      "min": 10000000,
      "max": 100000000
    },
    "technologies": ["Salesforce", "React"]
  },
  "limit": 50,
  "nextToken": null
}
```

**Response**: Similar structure to Contact Search with company-level fields (domain, employee count, revenue, industry, technologies, location).

### Contact Research (Enrichment)

Initiate enrichment for contacts. This is an async operation — results are delivered via polling or webhook.

**Option 1 — Enrich from search results**:

```http
POST /contacts/research
Content-Type: application/json
Token: API_KEY

{
  "searchResultIds": ["contact_123", "contact_456"]
}
```

**Option 2 — Enrich from direct contact data**:

```http
POST /contacts/research
Content-Type: application/json
Token: API_KEY

{
  "contacts": [
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "company": "Acme Corp"
    }
  ]
}
```

**Response**:

```json
{
  "requestIds": ["req_abc123", "req_def456"],
  "status": "processing"
}
```

### Contact Research Poll

Check the status of a contact research request.

```http
GET /contacts/research/poll?requestIds=req_abc123,req_def456
Token: API_KEY
```

**Response**:

```json
{
  "data": [
    {
      "requestId": "req_abc123",
      "status": "completed",
      "contact": {
        "firstName": "Jane",
        "lastName": "Smith",
        "title": "VP Engineering",
        "company": "Acme Corp",
        "email": "jane.smith@acme.com",
        "phone": "+14155551234",
        "linkedIn": "linkedin.com/in/janesmith"
      }
    }
  ]
}
```

**Statuses**: `processing`, `completed`, `failed`

### Company Research (Enrichment)

Initiate enrichment for companies. Async — results via polling or webhook.

```http
POST /companies/research
Content-Type: application/json
Token: API_KEY

{
  "searchResultIds": ["company_789"]
}
```

**Response**: Returns `requestIds` for polling.

### Company Research Poll

```http
GET /companies/research/poll?requestIds=req_ghi789
Token: API_KEY
```

**Response**: Returns enriched company data including 50+ intelligence URLs and structured metrics (employee count, revenue, industry, technologies, funding, etc.).

### Organization Contacts

Retrieve contacts from your organization's Seamless.AI account.

```http
GET /contacts?startDate=2026-01-01&endDate=2026-03-28
Token: API_KEY
```

**Parameters**:
- `startDate` (optional): Filter contacts added after this date
- `endDate` (optional): Filter contacts added before this date

### Organization Companies

Retrieve companies from your organization's account.

```http
GET /companies
Token: API_KEY
```

## Webhooks

Seamless.AI supports webhook delivery for async research results.

### Contact Research Webhook

When contact research completes, Seamless.AI POSTs enriched contact data to your configured webhook URL.

**Payload**:

```json
{
  "event": "contact.research.completed",
  "requestId": "req_abc123",
  "data": {
    "firstName": "Jane",
    "lastName": "Smith",
    "title": "VP Engineering",
    "company": "Acme Corp",
    "email": "jane.smith@acme.com",
    "phone": "+14155551234",
    "linkedIn": "linkedin.com/in/janesmith"
  }
}
```

### Company Research Webhook

Delivers enriched company data including 50+ intelligence URLs and structured company metrics.

## Pagination

All search endpoints use opaque token pagination:

1. First request: omit `nextToken` or set to `null`
2. Response includes `supplementalData.nextToken`
3. Subsequent requests: include the `nextToken` value
4. When `nextToken` is `null`, you've reached the end

Default `limit`: 50 results per page.

## Error Handling

| Status Code | Meaning | Action |
|---|---|---|
| `200` | Success | Process response |
| `202` | Accepted (async) | Poll for results |
| `401` | Unauthorized | Check API key or refresh OAuth token |
| `422` | Insufficient credits or missing license | Check credit balance; may need plan upgrade |
| `429` | Rate limited | Back off; check `X-RateLimit-Reset` header |
| `500` | Server error | Retry with exponential backoff |

## Credit Consumption

- Contact search/browse: **Free** (no credits consumed)
- Contact reveal (email/phone): **1 credit per contact**
- Company research: **Credits vary by plan**
- API research requests consume credits the same as UI reveals

Monitor remaining credits via the `X-PublicAPI-Credits` response header.

## Best Practices

1. **Search before revealing**: Use search endpoints to browse results without consuming credits. Only call research endpoints on contacts you'll actually reach out to.
2. **Use webhooks for research**: The research/poll pattern adds latency. Configure webhooks for faster async delivery of enriched data.
3. **Respect rate limits**: 100 req/60s is the documented limit. Implement exponential backoff on 429 responses. Check rate limit headers to pace requests.
4. **Batch research requests**: Submit multiple `searchResultIds` in a single research call rather than one-at-a-time.
5. **Monitor credits**: Check `X-PublicAPI-Credits` in responses to avoid hitting zero mid-workflow.
