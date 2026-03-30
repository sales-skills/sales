# ZeroBounce API Reference

## Overview

ZeroBounce is an email validation and deliverability platform. The API provides single and bulk email validation, email activity data, credit management, and usage reporting.

**SDKs**: Python, Java, JavaScript, PHP, C#, Ruby, Go, Delphi, C, C++, iOS, Android, Rust (13 official SDKs).

**Sandbox mode**: Available for testing without consuming credits.

## Base URLs

| Environment | URL |
|---|---|
| Default | `https://api.zerobounce.net/v2/` |
| USA | `https://api-us.zerobounce.net/v2/` |
| EU | `https://api-eu.zerobounce.net/v2/` |
| Bulk | `https://bulkapi.zerobounce.net/v2/` |

Use the Bulk URL for file-based bulk validation endpoints (`sendfile`, `filestatus`, `getfile`, `deletefile`). All other endpoints use the default, USA, or EU URLs.

## Authentication

All requests authenticate via the `api_key` query parameter.

```
GET /v2/validate?api_key=YOUR_API_KEY&email=user@example.com
```

Invalid API keys return:

```json
{"Credits": -1}
```

## Rate Limits

| Limit | Threshold | Consequence |
|---|---|---|
| `getcredits` endpoint | 80,000 requests/hour | 24-hour block |
| Bad API key requests | 200 requests/hour | 1-hour block |

---

## Endpoints

### Email Validation

#### Single Email Validation

```
GET /v2/validate
```

Validates a single email address and returns detailed results.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `email` | string | Yes | Email address to validate |
| `ip_address` | string | No | IP address of the email owner (improves accuracy) |
| `timeout` | integer | No | Timeout in seconds (3-60) |
| `activity_data` | boolean | No | Include email activity/engagement data |
| `verify_plus` | boolean | No | Enable enhanced verification |
| `greylist_processing` | boolean | No | Enable greylist retry processing (uses `callback_url` webhook) |
| `callback_url` | string | No | Webhook URL for greylist results |
| `domain_info` | boolean | No | Include domain-level information |

**Example request**:

```
GET /v2/validate?api_key=YOUR_KEY&email=user@example.com&ip_address=127.0.0.1
```

**Example response**:

```json
{
  "address": "user@example.com",
  "status": "valid",
  "sub_status": "",
  "free_email": false,
  "did_you_mean": "",
  "account": "user",
  "domain": "example.com",
  "domain_age_days": "3650",
  "smtp_provider": "example",
  "mx_found": "true",
  "mx_record": "mx.example.com",
  "firstname": "John",
  "lastname": "Doe",
  "gender": "male",
  "country": "US",
  "region": "California",
  "city": "Los Angeles",
  "zipcode": "90001",
  "processed_at": "2026-03-30 12:00:00.000",
  "domain_website_exists": true,
  "domain_registrant_company_name": "Example Inc"
}
```

**Status values**:

| Status | Meaning |
|---|---|
| `valid` | Email is valid and deliverable |
| `invalid` | Email is not deliverable |
| `catch-all` | Domain accepts all emails (delivery uncertain) |
| `unknown` | Could not determine validity |
| `spamtrap` | Known spam trap address |
| `abuse` | Known abuse/complaint address |
| `do_not_mail` | Should not be mailed (disposable, role-based, etc.) |

#### Batch Email Validation

```
POST /v2/validatebatch
```

Validates up to 200 emails in a single request.

**Parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `email_batch` | array | Yes | Array of email objects (max 200) |
| `timeout` | integer | No | Timeout in seconds (10-120) |
| `activity_data` | boolean | No | Include activity data |
| `verify_plus` | boolean | No | Enable enhanced verification |

Each item in `email_batch`:

| Field | Type | Required | Description |
|---|---|---|---|
| `email_address` | string | Yes | Email to validate |
| `ip_address` | string | No | IP address of the email owner |

**Example request**:

```json
{
  "api_key": "YOUR_KEY",
  "email_batch": [
    {"email_address": "user1@example.com", "ip_address": ""},
    {"email_address": "user2@example.com", "ip_address": ""}
  ]
}
```

**Response**: Array of validation results, same structure as single validation.

---

### Bulk File Processing

All bulk endpoints use the **Bulk URL**: `https://bulkapi.zerobounce.net/v2/`

#### Upload File for Bulk Validation

```
POST /v2/sendfile
```

Upload a CSV or TXT file for asynchronous bulk validation.

**Parameters** (multipart form):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `file` | file | Yes | CSV or TXT file to validate |
| `api_key` | string | Yes | Your API key |
| `email_address_column` | integer | Yes | Column index containing emails (1-indexed) |
| `first_name_column` | integer | No | Column index for first names |
| `last_name_column` | integer | No | Column index for last names |
| `gender_column` | integer | No | Column index for gender |
| `ip_address_column` | integer | No | Column index for IP addresses |
| `has_header_row` | boolean | No | Whether the file has a header row |

**Example response**:

```json
{
  "success": true,
  "message": "File accepted",
  "file_name": "contacts.csv",
  "file_id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
}
```

#### Check File Processing Status

```
GET /v2/filestatus
```

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `file_id` | string | Yes | File ID from `sendfile` response |

**Example response**:

```json
{
  "success": true,
  "file_id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "file_name": "contacts.csv",
  "file_status": "Complete",
  "complete_percentage": "100%",
  "return_url": null
}
```

#### Download Validated Results

```
GET /v2/getfile
```

Downloads the validated results file once processing is complete.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `file_id` | string | Yes | File ID from `sendfile` response |

**Response**: CSV file download.

#### Delete Processed File

```
GET /v2/deletefile
```

Removes a processed file from ZeroBounce servers.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `file_id` | string | Yes | File ID to delete |

**Example response**:

```json
{
  "success": true,
  "message": "File deleted",
  "file_name": "contacts.csv",
  "file_id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
}
```

---

### Account & Usage

#### Get Remaining Credits

```
GET /v2/getcredits
```

Returns the number of validation credits remaining on the account.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |

**Example response**:

```json
{
  "Credits": "50000"
}
```

**Note**: Subject to rate limiting (80,000 requests/hour; exceeding triggers a 24-hour block).

#### Get API Usage Statistics

```
GET /v2/getusage
```

Returns API usage statistics for a date range.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `start_date` | string | Yes | Start date (YYYY-MM-DD) |
| `end_date` | string | Yes | End date (YYYY-MM-DD) |

**Example request**:

```
GET /v2/getusage?api_key=YOUR_KEY&start_date=2026-01-01&end_date=2026-03-30
```

---

### Email Activity

#### Get Email Activity Data

```
GET /v2/activity
```

Returns engagement/activity data for an email address.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `api_key` | string | Yes | Your API key |
| `email` | string | Yes | Email address to check |

**Response includes activity status within these windows**:

- Active in last 30 days
- Active in last 60 days
- Active in last 90 days
- Active in last 180 days
- Active in last 365 days
- Active 365+ days ago

---

### Additional APIs

> **Documentation gaps**: The following APIs have limited public documentation. Endpoint paths, full parameter lists, and response schemas are not fully documented in official references.

#### Email Finder API

Find an email address by providing a person's name and domain. Useful for prospecting when you know a contact's name and company domain but not their email.

**Gap**: Exact endpoint path, required/optional parameters, and response schema need verification against official docs or SDK source.

#### Email Scoring API

AI-powered scoring for catch-all email addresses on a 1-10 scale. Helps determine deliverability likelihood for emails that return a `catch-all` status during validation.

**Gap**: Exact endpoint path, scoring methodology details, and full response schema need verification.

#### List Evaluator API

Free email list health assessment. Evaluates an uploaded list and provides aggregate quality metrics without consuming validation credits.

**Gap**: Exact endpoint path, upload format requirements, and response schema need verification.

---

## Webhooks

ZeroBounce supports webhooks for greylist processing results.

**How it works**:

1. Pass `greylist_processing=true` and `callback_url=https://your-server.com/webhook` in a `/v2/validate` request.
2. If the email requires greylist retry processing, ZeroBounce retries validation and sends results to the callback URL when complete.
3. Your server must respond with HTTP `200` or `201` to confirm delivery.
4. ZeroBounce retries failed webhook deliveries automatically.

**Webhook payload**: Same structure as the standard `/v2/validate` response.

---

## Error Handling

**Authentication errors**:

```json
{"Credits": -1}
```

Returned when the API key is invalid. Exceeding 200 bad API key requests per hour triggers a 1-hour block.

**Rate limit errors**: Exceeding 80,000 requests/hour on `getcredits` triggers a 24-hour block. Monitor usage to avoid interruptions.

**General error pattern**: Responses include a `success` field (boolean) and `message` field with details on failure for bulk endpoints.

---

## Pagination

The ZeroBounce API does not use cursor or offset-based pagination. Single validation returns one result, batch validation returns up to 200 results, and bulk file processing handles large lists asynchronously via file upload/download.
