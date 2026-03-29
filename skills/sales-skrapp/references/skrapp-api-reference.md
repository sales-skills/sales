### Skrapp.io APIs — Comprehensive Reference

Skrapp.io provides a REST API for email finding, email verification, company enrichment, bulk operations, and lead list management.

> **Note**: Best-effort from publicly available documentation. Some endpoints may have changed. Official docs: https://skrapp.io/api. Help center articles were behind 403 at time of research. Verify endpoints and parameters against the official documentation before use.

> **Access**: The Skrapp API requires a premium plan (Professional or Enterprise). Free-tier accounts do not have API access.

---

## Base URL

```
https://skrapp.io/api
```

---

### Authentication

API key passed via the `X-Access-Key` header on every request.

```bash
curl --request POST \
  --url "https://skrapp.io/api/emailFinder" \
  --header "X-Access-Key: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"domain": "example.com", "name": "John Doe"}'
```

> **Alternative auth**: Some third-party sources reference Bearer token authentication (`Authorization: Bearer YOUR_API_KEY`). The official method is `X-Access-Key`. If one method fails, try the other.

---

### Rate Limits

> **GAP**: Rate limits are not publicly documented. Monitor usage through your Skrapp account dashboard. Contact Skrapp support for rate limit details.

---

### Response Format

All responses return JSON.

```json
{
  "...": "endpoint-specific data"
}
```

> **GAP**: The exact response envelope structure (status fields, error wrapping) is not fully documented. Inspect live responses for the current format.

---

### Error Handling

> **GAP**: Error codes and error response format are not publicly documented. Expect standard HTTP status codes:

| Status | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — invalid or missing parameters |
| 401 | Unauthorized — invalid or missing API key |
| 403 | Forbidden — plan does not include API access |
| 404 | Not found |
| 429 | Rate limited (assumed) |
| 500 | Internal server error |

---

### Pagination

> **GAP**: Pagination behavior is not publicly documented. Bulk and list endpoints may return paginated results — inspect response headers and payload for pagination fields.

---

### Endpoints

---

#### 1. Email Finder

Find the most likely email address for a person at a given company domain.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/emailFinder` | Find a person's email from their name and company domain |

**`POST /emailFinder` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Company domain to search (e.g., `example.com`) |
| `name` | string | Yes | Full name of the person (e.g., `John Doe`) |

**Response fields** (inferred):

| Field | Type | Description |
|---|---|---|
| `email` | string | Most likely email address for the person |

---

#### 2. Email Verifier

Verify whether an email address is valid and deliverable.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/emailVerifier` | Verify an email address |

**`POST /emailVerifier` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email address to verify |

**Response fields** (inferred):

| Field | Type | Description |
|---|---|---|
| `validity` | string | Overall validity status |
| `syntax` | boolean | Whether the email syntax is valid |
| `format` | boolean | Whether the email format is correct |
| `mailbox_type` | string | Type of mailbox (e.g., corporate, webmail) |
| `personal` | boolean | Whether the email is a personal address |
| `disposable` | boolean | Whether the email is from a disposable provider |

---

#### 3. Company Info

Retrieve company enrichment data from a domain.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/companyInfo` | Get company details by domain |

**`POST /companyInfo` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Company domain to look up (e.g., `example.com`) |

**Response fields** (inferred):

| Field | Type | Description |
|---|---|---|
| `industry` | string | Company industry |
| `location` | string | Headquarters location |
| `revenue` | string | Estimated revenue |
| `headcount` | int | Estimated number of employees |

---

#### 4. Bulk Email Finder

Find email addresses for multiple people in a single request.

| Method | Endpoint | Description |
|---|---|---|
| POST | *unknown* | Bulk email finding |

> **GAP**: The exact endpoint path for bulk email finding is not documented. It may be `/bulk/emailFinder`, `/emailFinder/bulk`, or a separate path. Check official docs or contact Skrapp support.

---

#### 5. Bulk Email Verifier

Verify multiple email addresses in a single request.

| Method | Endpoint | Description |
|---|---|---|
| POST | *unknown* | Bulk email verification |

> **GAP**: The exact endpoint path for bulk email verification is not documented. It may be `/bulk/emailVerifier`, `/emailVerifier/bulk`, or a separate path. Check official docs or contact Skrapp support.

---

#### 6. Account Data

Retrieve account information including credits remaining.

| Method | Endpoint | Description |
|---|---|---|
| GET/POST | *path unconfirmed* | Retrieve account details |

**Response fields** (inferred):

| Field | Type | Description |
|---|---|---|
| `name` | string | Account holder name |
| `email` | string | Account email address |
| `created_at` | string | Account creation date |
| `credits` | int | Remaining API credits |

> **GAP**: The exact endpoint path and HTTP method are not confirmed in public documentation.

---

#### 7. List Data

Retrieve metadata about a saved lead list.

| Method | Endpoint | Description |
|---|---|---|
| GET/POST | *path unconfirmed* | Get list metadata |

**Response fields** (inferred):

| Field | Type | Description |
|---|---|---|
| `name` | string | List name |
| `size` | int | Number of leads in the list |
| `created_at` | string | List creation date |

> **GAP**: The exact endpoint path and HTTP method are not confirmed in public documentation.

---

#### 8. List Leads

Access lead details from a specific list.

| Method | Endpoint | Description |
|---|---|---|
| GET/POST | *path unconfirmed* | Get leads from a list |

**Response fields** (inferred):

| Field | Type | Description |
|---|---|---|
| `leads` | array | Array of lead objects |
| `leads[].name` | string | Lead full name |
| `leads[].email` | string | Lead email address |

> **GAP**: The exact endpoint path, HTTP method, and list identifier parameter are not confirmed in public documentation.

---

### Webhook Support

> **GAP**: Webhook support is not documented. Check official docs for updates on webhook or callback support.

---

## Quick Reference — Common Workflows

### Find an email address by name and domain
```bash
curl --request POST \
  --url "https://skrapp.io/api/emailFinder" \
  --header "X-Access-Key: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"domain": "example.com", "name": "John Doe"}'
```

**Response** (200 OK, inferred):
```json
{
  "email": "john.doe@example.com"
}
```

### Verify an email address
```bash
curl --request POST \
  --url "https://skrapp.io/api/emailVerifier" \
  --header "X-Access-Key: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"email": "john.doe@example.com"}'
```

**Response** (200 OK, inferred):
```json
{
  "validity": "valid",
  "syntax": true,
  "format": true,
  "mailbox_type": "corporate",
  "personal": false,
  "disposable": false
}
```

### Look up company information
```bash
curl --request POST \
  --url "https://skrapp.io/api/companyInfo" \
  --header "X-Access-Key: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"domain": "example.com"}'
```

**Response** (200 OK, inferred):
```json
{
  "industry": "Technology",
  "location": "San Francisco, CA",
  "revenue": "$10M-$50M",
  "headcount": 250
}
```

---

## Summary of Documentation Gaps

| Area | Status |
|---|---|
| Rate limits | Not documented |
| Error codes / error response format | Not documented |
| Pagination | Not documented |
| Webhooks | Not documented |
| Bulk Email Finder endpoint path | Not documented |
| Bulk Email Verifier endpoint path | Not documented |
| Account Data endpoint path | Not documented |
| List Data endpoint path | Not documented |
| List Leads endpoint path | Not documented |
| Response field names (all endpoints) | Inferred — verify against live responses |
