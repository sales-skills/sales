# ZoomInfo API Reference

> **Note**: ZoomInfo has 5 separate OpenAPI registries (Data, Marketing, Platform, Copilot, GTM Studio). This reference covers the core Data API endpoints most commonly used for sales workflows. Marketing, Copilot, and GTM Studio APIs are not fully documented here — consult [docs.zoominfo.com](https://docs.zoominfo.com/) for complete specs.

## Overview

| Property | Value |
|----------|-------|
| Base URL | `https://api.zoominfo.com` |
| Auth | PKI (JWT) or Username/Password → JWT |
| Token lifetime | 60 minutes (must refresh) |
| Rate limit (auth) | 1 request/second |
| Rate limit (standard) | 25 requests/second |
| Rate limit (scaling) | 33 requests/second |
| Response format | JSON |
| SDKs | [Java](https://github.com/Zoominfo/api-auth-java-client), [Node.js](https://github.com/Zoominfo/api-auth-nodejs-client), [Python](https://github.com/Zoominfo/api-auth-python-client), [C#](https://github.com/Zoominfo/api-auth-csharp-client) |
| MCP Plugin | [zoominfo-mcp-plugin](https://github.com/Zoominfo/zoominfo-mcp-plugin) |

## Authentication

### PKI Authentication (recommended for production)

Obtain a Client ID and Private Key from your ZoomInfo admin portal.

```
POST /authenticate
Content-Type: application/json

{
  "clientId": "your-client-id",
  "privateKey": "your-private-key"
}
```

**Response:**
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 3600
}
```

### Username/Password Authentication

```
POST /authenticate
Content-Type: application/json

{
  "username": "your-email@company.com",
  "password": "your-password"
}
```

**Response:** Same JWT format as PKI.

### Using the Token

Include the JWT in all subsequent requests:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

**Important**: The JWT expires every 60 minutes. Check the `exp` claim and refresh before expiration. Implement automatic refresh logic in production integrations.

## Rate Limiting

Rate limits are enforced per-account, not per-token.

| API Type | Limit | Scope |
|----------|-------|-------|
| Authentication | 1 req/s | Per account |
| Standard APIs (Search, Enrich, Lookup) | 25 req/s | Per account |
| Scaling APIs (Bulk, Batch) | 33 req/s | Per account |
| Compliance APIs | 25 req/s | Per account |

**Rate limit headers** (included in every response):
- `X-RateLimit-Remaining` — requests remaining in current window
- `X-RateLimit-Reset` — seconds until limit resets
- `X-Usage-Record-Limit-Remaining` — credits remaining in billing period

When rate limited, the API returns `429 Too Many Requests`. Back off and retry after the `X-RateLimit-Reset` interval.

## Endpoints by Category

### Search

Search endpoints let you discover new contacts and companies matching your criteria.

#### Search Contacts

```
POST /search/contact
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "jobTitle": ["VP Sales", "Director Sales"],
  "managementLevel": ["VP", "Director"],
  "department": ["Sales"],
  "companyRevenue": { "min": 10000000, "max": 500000000 },
  "companyEmployeeCount": { "min": 50, "max": 1000 },
  "companyIndustry": ["Software", "SaaS"],
  "companyLocation": { "country": "US", "state": ["CA", "NY"] },
  "page": 1,
  "rpp": 25
}
```

**Key parameters**:
- `jobTitle` — array of title keywords
- `managementLevel` — C-Level, VP, Director, Manager, Staff
- `department` — Sales, Marketing, Engineering, Finance, HR, IT, Operations
- `companyRevenue` — min/max in USD
- `companyEmployeeCount` — min/max headcount
- `companyIndustry` — ZoomInfo industry taxonomy
- `companyTechStack` — filter by technologies used
- `page`, `rpp` — pagination (results per page, max 25)

**Response**: Array of contact objects with personId, name, title, company, email (if included in plan).

#### Search Companies

```
POST /search/company
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "companyName": "Acme",
  "revenue": { "min": 5000000 },
  "employeeCount": { "min": 100 },
  "industry": ["Technology"],
  "location": { "country": "US" },
  "techStack": ["Salesforce", "AWS"],
  "page": 1,
  "rpp": 25
}
```

**Key parameters**:
- `companyName` — partial match supported
- `website` — domain-based lookup
- `sicCode`, `naicsCode` — industry classification codes
- `techStack` — array of technology names
- `fundingAmount` — min/max funding

### Enrich

Enrich endpoints take partial records and return complete data. Best practice: use Search to find records first, then Enrich for full details.

#### Enrich Contact

```
POST /enrich/contact
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "matchPersonInput": [
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "companyName": "Acme Corp"
    },
    {
      "emailAddress": "jane.smith@acme.com"
    }
  ],
  "outputFields": ["personId", "firstName", "lastName", "email", "phone", "jobTitle", "department", "managementLevel", "companyId", "companyName"]
}
```

**Notes**:
- Up to 25 records per request
- Match by name+company, email, LinkedIn URL, or personId
- `outputFields` controls which fields are returned (reduces response size)
- Consumes 1 credit per matched record

#### Enrich Company

```
POST /enrich/company
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "matchCompanyInput": [
    { "companyName": "Acme Corp" },
    { "companyWebsite": "acme.com" }
  ],
  "outputFields": ["companyId", "companyName", "website", "revenue", "employeeCount", "industry", "subIndustry", "techStack", "location"]
}
```

**Notes**:
- Up to 25 records per request
- Match by company name, domain, or companyId
- Domain-based matching has higher accuracy than name-based

#### Enrich Intent

```
POST /enrich/intent
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "companyId": "123456789"
}
```

**Response** includes:
- Intent topics the company is researching
- Signal score (relative to baseline)
- Signal start date
- Audience strength
- Recommended contacts at the company

**Notes**:
- Only returns topics configured in your ZoomInfo subscription
- Intent data refreshes weekly

### Lookup

Lookup endpoints retrieve full profiles by known identifier.

#### Lookup Contact

```
GET /lookup/contact/{personId}
Authorization: Bearer {jwt}
```

Returns the complete contact profile including all available fields.

#### Lookup Company

```
GET /lookup/company/{companyId}
Authorization: Bearer {jwt}
```

Returns the complete company profile including tech stack, financials, and locations.

### Bulk / Scaling APIs

For high-volume operations.

#### Bulk Enrich

```
POST /bulk/enrich
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "inputType": "contact",
  "matchInput": [ ... ],
  "outputFields": [ ... ],
  "callbackUrl": "https://your-server.com/webhook/zoominfo"
}
```

**Notes**:
- Async operation — submit job, receive results via callback URL or poll for status
- Higher rate limit (33 req/s) than standard enrich
- Use for batch operations of 100+ records
- Results delivered to `callbackUrl` when processing completes

### WebSights

Anonymous website visitor identification.

#### Search WebSights

```
POST /websights/search
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "startDate": "2026-03-01",
  "endDate": "2026-03-31",
  "page": 1,
  "rpp": 25
}
```

**Response** includes:
- Company name and ID of visiting organization
- Pages viewed, session count, time on site
- Visit timestamps

**Notes**:
- Identifies companies, not individual visitors
- Requires WebSights pixel installed on your website
- Pair with Contact Search to find people at identified companies

### Compliance

#### Manage Opt-Outs

```
POST /compliance/optout
Authorization: Bearer {jwt}
Content-Type: application/json

{
  "emailAddress": "optout@example.com",
  "action": "add"
}
```

**Actions**: `add` (add to opt-out list), `remove` (remove from opt-out list), `check` (verify opt-out status)

### Usage

#### Check Credit Usage

```
GET /usage
Authorization: Bearer {jwt}
```

**Response**:
```json
{
  "creditsUsed": 3500,
  "creditsRemaining": 1500,
  "creditLimit": 5000,
  "billingPeriodEnd": "2026-12-31"
}
```

## Pagination

Search endpoints use page-based pagination:

| Parameter | Description | Default | Max |
|-----------|-------------|---------|-----|
| `page` | Page number (1-indexed) | 1 | Varies by plan |
| `rpp` | Results per page | 25 | 25 |

Response includes:
```json
{
  "totalResults": 1250,
  "currentPage": 1,
  "maxResults": 25,
  "data": [ ... ]
}
```

## Error Handling

| Status | Meaning | Action |
|--------|---------|--------|
| 400 | Bad Request — invalid parameters | Check request body against schema |
| 401 | Unauthorized — invalid or expired JWT | Re-authenticate and retry |
| 403 | Forbidden — insufficient permissions or plan | Check plan access level |
| 404 | Not Found — invalid endpoint or resource ID | Verify endpoint URL |
| 429 | Rate Limited | Wait for `X-RateLimit-Reset` seconds, then retry |
| 500 | Server Error | Retry with exponential backoff |

## Common Patterns

### Token refresh middleware

```python
import time
import requests

class ZoomInfoClient:
    def __init__(self, client_id, private_key):
        self.client_id = client_id
        self.private_key = private_key
        self.jwt = None
        self.jwt_expires = 0

    def authenticate(self):
        resp = requests.post("https://api.zoominfo.com/authenticate", json={
            "clientId": self.client_id,
            "privateKey": self.private_key
        })
        data = resp.json()
        self.jwt = data["jwt"]
        self.jwt_expires = time.time() + 3500  # refresh 100s before expiry

    def request(self, method, endpoint, **kwargs):
        if time.time() > self.jwt_expires:
            self.authenticate()
        headers = {"Authorization": f"Bearer {self.jwt}"}
        return requests.request(method, f"https://api.zoominfo.com{endpoint}",
                                headers=headers, **kwargs)
```

### Search → Enrich workflow

1. Use Search Contacts to find prospects matching your ICP
2. Collect `personId` values from search results
3. Use Enrich Contact with `personId` to get full profiles (email, phone, etc.)
4. Export or push to CRM/sequence tool

This two-step approach is more credit-efficient than enriching every search result — only enrich the contacts you actually want to reach.

## Gaps & Limitations

- **Marketing API**: Advertising audience management, campaign creation — not documented here. See [docs.zoominfo.com](https://docs.zoominfo.com/) OpenAPI spec `openapi-marketing.yaml`.
- **Copilot API**: AI recommendations, deal predictions — not documented here. See `openapi-copilot.yaml`.
- **GTM Studio API**: Custom workflow automation — not documented here. See `openapi-gtm-studio.yaml`.
- **Webhook events**: ZoomInfo supports callbacks for bulk operations, but a full webhook event catalog is not publicly documented.
- **Platform API**: Account management, user provisioning — see `openapi-platform.yaml`.
