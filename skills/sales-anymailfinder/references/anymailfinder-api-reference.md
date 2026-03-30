### Anymail Finder APIs — Comprehensive Reference

Anymail Finder provides a REST API for finding verified professional email addresses by person name, company domain, decision-maker role, or LinkedIn URL, plus email verification and bulk search capabilities.

> **Note**: Best-effort from research — several endpoints had incomplete or missing documentation at the time of writing. Full API docs at https://anymailfinder.com/api. Verify endpoints and parameters against the official documentation.

---

## Base URL

```
https://api.anymailfinder.com/v5.1
```

---

### Authentication

API key passed via the `Authorization` header (no "Bearer" prefix).

```bash
curl --request POST \
  --url "https://api.anymailfinder.com/v5.1/find-email/person" \
  --header "Authorization: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{"domain": "example.com", "first_name": "John", "last_name": "Doe"}'
```

---

### Rate Limits

No rate limits. Requests are queued and the system auto-scales. Use a 180-second timeout for individual requests.

---

### Response Format

All responses return JSON.

```json
{
  "credits_charged": 1,
  "email": "john.doe@example.com",
  "email_status": "valid",
  "...": "endpoint-specific data"
}
```

---

### Error Handling

Standard HTTP status codes. Common codes:

| Status | Error Key | Meaning |
|---|---|---|
| 400 | `bad_request` | Invalid or missing parameters |
| 401 | `unauthorized` | Missing or invalid API key |
| 402 | `upgrade_needed` | Insufficient credits |

Error response format:
```json
{
  "error": "bad_request",
  "message": "Description of the problem."
}
```

---

### Credit Costs

| Action | Cost |
|---|---|
| Person email found (valid) | 1 credit |
| Person email not found | Free |
| Decision-maker email found (valid) | 2 credits |
| Decision-maker email not found | Free |
| Email verification | 0.2 credits (re-verify within 30 days: free) |
| Company emails | 1 credit |

---

### Endpoints

---

#### 1. Find Person Email

Find a specific person's professional email address by name and company.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/find-email/person` | Find email for a named person at a company |

**`POST /find-email/person` body parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | One of `domain`/`company_name` | Company domain to search |
| `company_name` | string | One of `domain`/`company_name` | Company name to search |
| `first_name` | string | See note | Person's first name |
| `last_name` | string | See note | Person's last name |
| `full_name` | string | See note | Person's full name |

> **Note**: Provide either `full_name` or both `first_name` and `last_name`. At least one of `domain` or `company_name` is also required.

**Headers**:

| Header | Required | Description |
|---|---|---|
| `Authorization` | Yes | API key |
| `Content-Type` | Yes | `application/json` |
| `x-webhook-url` | No | URL for async delivery of results |

**Response fields**:

| Field | Type | Description |
|---|---|---|
| `credits_charged` | number | Credits consumed (1 if valid, 0 otherwise) |
| `email` | string | Discovered email address |
| `email_status` | string | Status: `valid`, `risky`, `not_found`, `blacklisted` |
| `valid_email` | string | The verified email (present when status is `valid`) |

---

#### 2. Find Decision Maker Email

Find the email of a decision maker at a company by role category.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/find-email/decision-maker` | Find email for a decision maker by role |

**`POST /find-email/decision-maker` body parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | One of `domain`/`company_name` | Company domain to search |
| `company_name` | string | One of `domain`/`company_name` | Company name to search |
| `decision_maker_category` | string[] | Yes | Role categories to search |

**Decision maker categories**: `ceo`, `engineering`, `finance`, `hr`, `it`, `logistics`, `marketing`, `operations`, `buyer`, `sales`

**Response fields**:

| Field | Type | Description |
|---|---|---|
| `credits_charged` | number | Credits consumed (2 if valid, 0 otherwise) |
| `decision_maker_category` | string | Matched category |
| `email` | string | Discovered email address |
| `email_status` | string | Status: `valid`, `risky`, `not_found`, `blacklisted` |
| `person_full_name` | string | Decision maker's full name |
| `person_job_title` | string | Decision maker's job title |
| `person_linkedin_url` | string | Decision maker's LinkedIn profile URL |
| `valid_email` | string | The verified email (present when status is `valid`) |

---

#### 3. Find Company Emails

> **Documentation gap**: Exact endpoint path not confirmed (docs page returned 404). Likely `POST /find-email/company` or similar. Verify against official docs.

Find up to 20 email addresses at a given domain or company. Costs 1 credit.

---

#### 4. Find Email by LinkedIn URL

> **Documentation gap**: Endpoint details not fully fetched. Likely `POST /find-email/linkedin`.

Find a person's email from their LinkedIn profile URL. Costs 1 credit if valid.

---

#### 5. Email Verification

Verify whether an email address is valid and deliverable.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/verify-email` | Verify an email address |

**`POST /verify-email` body parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Email address to verify |

**Headers**:

| Header | Required | Description |
|---|---|---|
| `Authorization` | Yes | API key |
| `Content-Type` | Yes | `application/json` |
| `x-webhook-url` | No | URL for async delivery of results |

**Response fields**:

| Field | Type | Description |
|---|---|---|
| `credits_charged` | number | Credits consumed (0.2; free if re-verified within 30 days) |
| `email_status` | string | Status: `valid`, `risky`, `invalid` |

---

#### 6. Bulk Email Search — Create with JSON

> **Documentation gap**: Exact endpoint path not confirmed. Likely `POST /bulk/create-json`. Verify against official docs.

Submit up to 100,000 rows for async bulk email search. Processing speed is approximately 1,000 rows in 5 minutes. Supports webhook notification on completion. Credits are charged on download, not on creation.

---

#### 7. Bulk Email Search — Create with File

> **Documentation gap**: Exact endpoint not confirmed. Upload a CSV or Excel file for bulk processing.

---

#### 8. Bulk Email Search — Get Info

> **Documentation gap**: Exact endpoint not confirmed. Check the status of an async bulk search job.

---

#### 9. Bulk Email Search — Download Results

> **Documentation gap**: Exact endpoint not confirmed. Download completed bulk search results. Credits are charged at download time.

---

#### 10. GeoLead Finder

> **Documentation gap**: No endpoint details found. Supports creating location-based lead searches, checking status, and downloading results.

---

#### 11. Get Account Details

> **Documentation gap**: Exact endpoint not confirmed. Returns account information and remaining credit balance.

---

#### 12. Domain Email Count / Order / Download

> **Documentation gap**: Exact endpoints not confirmed. Count emails at a domain, order the full list, and download results.

---

#### 13. Report Bad Email

> **Documentation gap**: Exact endpoint not confirmed. Feedback mechanism for reporting incorrect email results.

---

### Webhook Support

Anymail Finder supports async delivery via webhooks. Add the `x-webhook-url` header to any request, and results will be POSTed to your URL when processing is complete.

```bash
curl --request POST \
  --url "https://api.anymailfinder.com/v5.1/find-email/person" \
  --header "Authorization: yourApiKey" \
  --header "Content-Type: application/json" \
  --header "x-webhook-url: https://your-server.com/webhook" \
  --data '{"domain": "example.com", "first_name": "John", "last_name": "Doe"}'
```

---

## Quick Reference — Common Workflows

### Find a person's email by name and domain
```bash
curl --request POST \
  --url "https://api.anymailfinder.com/v5.1/find-email/person" \
  --header "Authorization: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{"domain": "microsoft.com", "first_name": "John", "last_name": "Doe"}'
```

**Response** (200 OK):
```json
{
  "credits_charged": 1,
  "email": "john.doe@microsoft.com",
  "email_status": "valid",
  "valid_email": "john.doe@microsoft.com"
}
```

### Find a decision maker at a company
```bash
curl --request POST \
  --url "https://api.anymailfinder.com/v5.1/find-email/decision-maker" \
  --header "Authorization: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{"domain": "example.com", "decision_maker_category": ["ceo"]}'
```

**Response** (200 OK):
```json
{
  "credits_charged": 2,
  "decision_maker_category": "ceo",
  "email": "jane.smith@example.com",
  "email_status": "valid",
  "person_full_name": "Jane Smith",
  "person_job_title": "Chief Executive Officer",
  "person_linkedin_url": "https://linkedin.com/in/janesmith",
  "valid_email": "jane.smith@example.com"
}
```

### Verify an email address
```bash
curl --request POST \
  --url "https://api.anymailfinder.com/v5.1/verify-email" \
  --header "Authorization: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{"email": "john.doe@microsoft.com"}'
```

**Response** (200 OK):
```json
{
  "credits_charged": 0.2,
  "email_status": "valid"
}
```
