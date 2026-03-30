# Snov.io API Reference

## Overview

Snov.io provides a REST API for email finding, verification, prospect management, and drip campaign automation. The API uses a mix of v1 and v2 endpoints, with v2 endpoints following an asynchronous task pattern.

- **Base URL**: `https://api.snov.io`
- **Protocol**: HTTPS only
- **Format**: JSON request and response bodies
- **Rate Limit**: 60 requests per minute

---

## Authentication

Snov.io uses OAuth 2.0 client credentials flow.

### Obtain Access Token

```
POST /v1/oauth/access_token
```

**Parameters** (form body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `grant_type` | string | Yes | Must be `client_credentials` |
| `client_id` | string | Yes | Your API client ID |
| `client_secret` | string | Yes | Your API client secret |

**Response**:
```json
{
  "access_token": "xxxxxxxxxx",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

- Token lifespan: **1 hour** (3600 seconds). Refresh by requesting a new token before expiry.
- Include on all subsequent requests as: `Authorization: Bearer {access_token}` header.

---

## Rate Limits

- **60 requests per minute** across all endpoints.
- Exceeding the limit returns an error response. Implement exponential backoff on rate limit errors.

---

## Async Task Pattern (v2 Endpoints)

Most v2 endpoints follow a two-step async pattern:

1. **Start**: `POST /v2/{resource}/start` — submits the task and returns a `task_hash`.
2. **Result**: `GET /v2/{resource}/result/{task_hash}` — poll for results.

**Task statuses**:

| Status | Meaning |
|---|---|
| `completed` | Results are ready |
| `in_progress` | Still processing; poll again |
| `not_enough_credits` | Insufficient credits to complete |

**Webhook alternative**: Many async endpoints accept a `webhook_url` parameter. When provided, Snov.io sends results to your URL on completion instead of requiring polling.

---

## Endpoints

### Email Finder & Data Enrichment

#### Domain Search

```
POST /v2/domain-search/start
GET  /v2/domain-search/result/{task_hash}
```

Search for company information and emails by domain. Returns company details, technologies, and associated emails.

- **Cost**: 1 credit per unique request
- **Params**: `domain` (required)

#### Domain Search — Prospect Profiles

```
POST /v2/domain-search/prospects/start
GET  /v2/domain-search/prospects/result/{task_hash}
```

Retrieve prospect profiles associated with a domain.

- **Cost**: 1 credit per prospect with email found
- **Params**: `domain` (required), `positions[]` (optional, filter by job title), `page` (optional, pagination)

#### Domain Search — Prospect Email Lookup

```
POST /v2/domain-search/prospects/search-emails/start/{prospect_hash}
GET  /v2/domain-search/prospects/search-emails/result/{task_hash}
```

Find the email for a specific prospect identified by prospect hash (from prospect profiles endpoint).

- **Cost**: 1 credit per email found

#### Domain Emails

```
POST /v2/domain-search/domain-emails/start
GET  /v2/domain-search/domain-emails/result/{task_hash}
```

Get all known emails for a domain.

- **Cost**: 1 credit per unique request

#### Generic Company Contacts

```
POST /v2/domain-search/generic-contacts/start
GET  /v2/domain-search/generic-contacts/result/{task_hash}
```

Get generic company emails (e.g., info@, support@, sales@).

- **Cost**: 1 credit per unique request

#### Domain Email Count

```
POST /v1/get-domain-emails-count
```

Check how many emails Snov.io has for a domain without retrieving them.

- **Cost**: Free
- **Params**: `domain` (required)

#### Email Finder by Name + Domain

```
POST /v2/emails-by-domain-by-name/start
GET  /v2/emails-by-domain-by-name/result/{task_hash}
```

Find email addresses by providing first name, last name, and domain.

- **Cost**: 1 credit per email found
- **Params**: `rows[]` (array of objects with `first_name`, `last_name`, `domain`), `webhook_url` (optional)

#### Company Domain by Name

```
POST /v2/company-domain-by-name/start
GET  /v2/company-domain-by-name/result/{task_hash}
```

Look up a company's domain by its name.

- **Cost**: 1 credit per domain found
- **Params**: `names[]` (array of company names), `webhook_url` (optional)

#### LinkedIn Profile Enrichment

```
POST /v2/li-profiles-by-urls/start
GET  /v2/li-profiles-by-urls/result/{task_hash}
```

Enrich LinkedIn profiles by URL. Returns name, job title, company, emails, and social links.

- **Cost**: 1 credit per profile
- **Params**: `urls[]` (array of LinkedIn profile URLs), `webhook_url` (optional)

#### Profile by Email

```
POST /v1/get-profile-by-email
```

Enrich a contact profile using their email address.

- **Cost**: 1 credit (free if no data found)
- **Params**: `email` (required)

---

### Email Verifier

```
POST /v2/email-verification/start
GET  /v2/email-verification/result
```

Verify up to 10 email addresses per request.

- **Params**: `emails[]` (array, max 10), `webhook_url` (optional)

**Response fields per email**:

| Field | Description |
|---|---|
| `smtp_status` | SMTP verification result: `valid`, `unknown`, `not_valid` |
| `is_valid_format` | Whether the email format is valid |
| `is_disposable` | Whether the email is from a disposable provider |
| `is_webmail` | Whether the email is a webmail address (Gmail, Yahoo, etc.) |
| `is_gibberish` | Whether the local part appears to be random characters |
| `unknown_status_reason` | Explanation when status is `unknown` |

---

### Campaign Management

#### Campaign Analytics

```
GET /v2/statistics/campaign-analytics
```

Retrieve analytics for campaigns.

- **Cost**: Free
- **Params**: `campaign_id`, `sender_email`, `sender_linkedin`, `campaign_owner`, `date_from`, `date_to` (all optional filters)

#### Campaign Progress

```
GET /v2/campaigns/{campaign_id}/progress
```

Get progress details for a specific campaign.

- **Cost**: Free

#### Change Recipient Status

```
POST /v1/change-recipient-status
```

Change a recipient's status within a campaign.

- **Cost**: Free
- **Status values**: `Active`, `Paused`, `Unsubscribed`

#### Completed Prospects

```
GET /v1/prospect-finished
```

List prospects that have completed a campaign sequence.

- **Cost**: Free
- **Params**: `campaignId` (required)

#### Campaign Replies

```
GET /v1/get-emails-replies
```

Get replies received for a campaign.

- **Cost**: Free
- **Params**: `campaignId` (required), `offset` (optional, up to 10K)

#### Email Opens

```
GET /v1/get-emails-opened
```

Get email open tracking data.

- **Cost**: Free
- **Params**: `campaignId` (required), `offset` (optional, up to 10K)

#### Link Clicks

```
GET /v1/get-emails-clicked
```

Get link click tracking data.

- **Cost**: Free
- **Params**: `campaignId` (required), `offset` (optional, up to 10K)

#### Sent Emails

```
GET /v1/emails-sent
```

List emails sent for a campaign.

- **Cost**: Free
- **Params**: `campaignId` (required), `offset` (optional, up to 10K)

#### List All Campaigns

```
GET /v1/get-user-campaigns
```

Retrieve all campaigns for the authenticated user.

- **Cost**: Free

#### Do-Not-Email List

```
POST /v1/add-to-do-not-email-list
```

Add an email address to the global do-not-email list.

- **Cost**: Free

---

### Prospect Management

#### Create Prospect

```
POST /v1/add-prospect
```

Add a new prospect to your Snov.io account.

- **Cost**: Free

#### Find Prospect by ID

```
POST /v1/find-prospect-by-id
```

Look up a prospect by their Snov.io ID.

- **Cost**: Free

#### Find Prospect by Email

```
POST /v1/find-prospect-by-email
```

Look up a prospect by email address.

- **Cost**: Free

#### Custom Fields

```
GET /v1/get-prospect-custom-fields
```

Get the list of custom fields defined in your account.

- **Cost**: Free

#### List All Prospect Lists

```
GET /v1/get-user-lists
```

Retrieve all prospect lists.

- **Cost**: Free

#### View Prospects in List

```
POST /v1/view-prospects-in-list
```

Get prospects belonging to a specific list.

- **Cost**: Free

#### Create Prospect List

```
POST /v1/create-prospect-list
```

Create a new prospect list.

- **Cost**: Free

---

### Account

#### Check Credit Balance

```
GET /v1/check-user-balance
```

Check remaining credit balance for the authenticated account.

- **Cost**: Free

---

## Webhooks

Snov.io supports two webhook mechanisms:

### 1. Per-Request Callbacks

Many async v2 endpoints accept a `webhook_url` parameter. Results are POSTed to that URL when the task completes. This is a one-time callback for that specific request.

### 2. Persistent Webhooks (CRUD)

Manage persistent webhook subscriptions that receive ongoing notifications.

#### List Webhooks

```
GET /v1/webhooks
```

#### Add Webhook

```
POST /v1/webhooks
```

**Params**: `webhook_url` (required)

#### Update Webhook

```
PUT /v1/webhooks/{id}
```

**Params**: `webhook_url` (required)

#### Delete Webhook

```
DELETE /v1/webhooks/{id}
```

---

## Error Handling

- **Authentication errors**: Returned when the token is expired or invalid. Re-authenticate by requesting a new access token.
- **Rate limit errors**: Returned when exceeding 60 requests/minute. Implement backoff and retry.
- **Credit errors**: Async tasks return `not_enough_credits` status. Check balance with `/v1/check-user-balance` before bulk operations.
- **Standard HTTP status codes**: 200 (success), 400 (bad request), 401 (unauthorized), 429 (rate limited), 500 (server error).

---

## SDKs & Libraries

No official SDKs are provided. Third-party options:

- **PHP**: [HelgeSverre/snov-io](https://github.com/HelgeSverre/snov-io)
- **Python**: dltHub (data loading tool with Snov.io source)
