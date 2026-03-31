# GetResponse API v3 Reference

## Overview

| Property | Value |
|---|---|
| **Base URL (retail)** | `https://api.getresponse.com/v3` |
| **Base URL (MAX)** | `https://api3.getresponse360.com/v3` or `https://api3.getresponse360.pl/v3` |
| **Auth** | `X-Auth-Token: api-key {your-api-key}` header |
| **OAuth 2.0** | Supported — authorization code grant for third-party apps |
| **Content-Type** | `application/json` (all POST requests) |
| **Rate limits** | 30,000 calls / 10 min, 80 calls/sec, max 10 simultaneous requests |
| **Key expiry** | API keys expire after 90 days of inactivity |
| **MAX header** | MAX users must include `X-Domain: {client-domain}` header |

## Authentication

### API Key (simplest)
```
GET /v3/contacts
X-Auth-Token: api-key abc123def456
```

### OAuth 2.0 (third-party apps)
1. Register app in GetResponse Developer Portal
2. Redirect user to `https://app.getresponse.com/oauth2_authorize.html?response_type=code&client_id={id}&state={state}`
3. Exchange code for token at `POST https://api.getresponse.com/v3/token`
4. Use `Authorization: Bearer {access_token}` header

## HTTP Methods

| Method | Usage |
|---|---|
| **GET** | Retrieve resources — idempotent, no body |
| **POST** | Create new resources or update existing |
| **DELETE** | Remove resources — no body or query string |

**Note**: GetResponse uses POST for both create and update (no PUT/PATCH).

## Pagination

Collections support pagination via query parameters:
- `page` — page number (1-based)
- `perPage` — items per page (max 1000, default 100)
- Response headers include total count: `TotalCount`, `TotalPages`, `CurrentPage`

## Error Handling

| Status | Meaning |
|---|---|
| 200 | Success |
| 202 | Accepted (async processing) |
| 400 | Validation error — response body details the issues |
| 401 | Unauthorized — invalid or expired API key |
| 404 | Resource not found |
| 409 | Conflict — duplicate resource |
| 429 | Rate limit exceeded |
| 500 | Server error |

Error response format:
```json
{
  "httpStatus": 400,
  "code": 1000,
  "codeDescription": "General error of validation process",
  "message": "Custom field invalid",
  "moreInfo": "https://apidocs.getresponse.com/v3/errors/1000",
  "context": { "fieldName": ["Invalid value"] }
}
```

---

## Endpoints by Resource

### Campaigns (Mailing Lists)

**Important**: In GetResponse, "campaign" = mailing list, NOT an email send.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/campaigns` | List all campaigns (lists) |
| GET | `/v3/campaigns/{campaignId}` | Get a campaign |
| POST | `/v3/campaigns` | Create a campaign (list) |
| POST | `/v3/campaigns/{campaignId}` | Update a campaign |
| DELETE | `/v3/campaigns/{campaignId}` | Delete a campaign |
| GET | `/v3/campaigns/{campaignId}/contacts` | Get contacts in a campaign |
| GET | `/v3/campaigns/{campaignId}/blacklists` | Get campaign blacklist |
| POST | `/v3/campaigns/{campaignId}/blacklists` | Add to campaign blacklist |

**Create campaign example:**
```json
POST /v3/campaigns
{
  "name": "my_list",
  "confirmation": {
    "fromField": { "fromFieldId": "abc123" },
    "replyTo": { "fromFieldId": "abc123" },
    "redirectType": "hosted"
  },
  "languageCode": "EN"
}
```

### Contacts

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/contacts` | List contacts (supports query filters) |
| GET | `/v3/contacts/{contactId}` | Get a single contact |
| POST | `/v3/contacts` | Create a contact |
| POST | `/v3/contacts/{contactId}` | Update a contact |
| DELETE | `/v3/contacts/{contactId}` | Delete a contact |
| GET | `/v3/contacts/{contactId}/activities` | Get contact activities |
| GET | `/v3/contacts/{contactId}/tags` | Get contact tags |
| POST | `/v3/contacts/{contactId}/tags` | Add tag to contact |
| DELETE | `/v3/contacts/{contactId}/tags/{tagId}` | Remove tag from contact |

**Create contact example:**
```json
POST /v3/contacts
{
  "email": "user@example.com",
  "name": "John Doe",
  "campaign": { "campaignId": "abc123" },
  "dayOfCycle": 0,
  "tags": [
    { "tagId": "tag123" }
  ],
  "customFieldValues": [
    {
      "customFieldId": "field123",
      "value": ["Developer"]
    }
  ]
}
```

**Query filters for GET /v3/contacts:**
- `query[email]` — filter by email
- `query[name]` — filter by name
- `query[campaignId]` — filter by campaign (list)
- `query[origin]` — filter by source (import, api, webform, etc.)
- `query[createdOn][from]` / `query[createdOn][to]` — date range
- `sort[fieldName]` — sort by field (email, name, createdOn)
- `fields` — select specific fields to return

### Batch Contacts

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v3/contacts/batch` | Batch create/update contacts (async) |

Batch endpoint accepts up to 100 contacts per request and processes asynchronously.

### Search Contacts (Segments)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/search-contacts` | List saved segments |
| GET | `/v3/search-contacts/{searchContactId}` | Get segment details |
| POST | `/v3/search-contacts` | Create a segment |
| POST | `/v3/search-contacts/{searchContactId}` | Update a segment |
| DELETE | `/v3/search-contacts/{searchContactId}` | Delete a segment |
| GET | `/v3/search-contacts/{searchContactId}/contacts` | Get contacts in a segment |

**Note**: "search-contacts" in the API = "segments" in the GetResponse UI.

### Tags

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/tags` | List all tags |
| GET | `/v3/tags/{tagId}` | Get a tag |
| POST | `/v3/tags` | Create a tag |
| POST | `/v3/tags/{tagId}` | Update a tag |
| DELETE | `/v3/tags/{tagId}` | Delete a tag |

### Custom Fields

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/custom-fields` | List custom fields |
| GET | `/v3/custom-fields/{customFieldId}` | Get a custom field |
| POST | `/v3/custom-fields` | Create a custom field |
| POST | `/v3/custom-fields/{customFieldId}` | Update a custom field |
| DELETE | `/v3/custom-fields/{customFieldId}` | Delete a custom field |

### Newsletters (Email Sends)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/newsletters` | List newsletters |
| GET | `/v3/newsletters/{newsletterId}` | Get a newsletter |
| POST | `/v3/newsletters` | Create and schedule a newsletter |
| DELETE | `/v3/newsletters/{newsletterId}` | Cancel a scheduled newsletter |
| GET | `/v3/newsletters/{newsletterId}/statistics` | Get newsletter statistics |

**Create newsletter example:**
```json
POST /v3/newsletters
{
  "subject": "Welcome to our newsletter",
  "name": "March Newsletter",
  "campaign": { "campaignId": "abc123" },
  "sendOn": "2026-04-15T10:00:00+0000",
  "content": {
    "html": "<html><body>Hello {{CONTACT \"subscriber_first_name\"}}!</body></html>",
    "plain": "Hello!"
  },
  "flags": ["openrate", "clicktrack"]
}
```

### Autoresponders

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/autoresponders` | List autoresponders |
| GET | `/v3/autoresponders/{autoresponderId}` | Get an autoresponder |
| POST | `/v3/autoresponders` | Create an autoresponder |
| POST | `/v3/autoresponders/{autoresponderId}` | Update an autoresponder |
| DELETE | `/v3/autoresponders/{autoresponderId}` | Delete an autoresponder |
| GET | `/v3/autoresponders/{autoresponderId}/statistics` | Get autoresponder statistics |

**Create autoresponder example:**
```json
POST /v3/autoresponders
{
  "name": "Day 1 Welcome",
  "subject": "Welcome aboard!",
  "campaign": { "campaignId": "abc123" },
  "triggerSettings": {
    "dayOfCycle": 0,
    "frequency": "once",
    "selectedDays": ["monday", "tuesday", "wednesday", "thursday", "friday"],
    "selectedCampaigns": []
  },
  "content": {
    "html": "<html><body>Welcome!</body></html>"
  },
  "flags": ["openrate", "clicktrack"]
}
```

### From Fields (Sender Addresses)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/from-fields` | List sender addresses |
| GET | `/v3/from-fields/{fromFieldId}` | Get a sender address |
| POST | `/v3/from-fields` | Create a sender address |
| DELETE | `/v3/from-fields/{fromFieldId}` | Delete a sender address |

### Landing Pages

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/landing-pages` | List landing pages |
| GET | `/v3/landing-pages/{landingPageId}` | Get a landing page |

### Webinars

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/webinars` | List webinars |
| GET | `/v3/webinars/{webinarId}` | Get a webinar |

### Forms

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/forms` | List signup forms |
| GET | `/v3/forms/{formId}` | Get a form |

### Statistics

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/statistics/sms` | SMS sending statistics |
| POST | `/v3/statistics/emails` | Email statistics (with date range filters) |

### Accounts

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/accounts` | Get account info (plan, limits, features) |
| POST | `/v3/accounts` | Update account info |
| GET | `/v3/accounts/billing` | Get billing info |

### Shops (E-commerce)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/shops` | List shops |
| POST | `/v3/shops` | Create a shop |
| GET | `/v3/shops/{shopId}/products` | List products |
| POST | `/v3/shops/{shopId}/products` | Create a product |
| GET | `/v3/shops/{shopId}/orders` | List orders |
| POST | `/v3/shops/{shopId}/orders` | Create an order |
| GET | `/v3/shops/{shopId}/carts` | List carts |
| POST | `/v3/shops/{shopId}/carts` | Create a cart |

E-commerce endpoints enable abandoned cart tracking, product recommendations, and revenue attribution.

### Transactional Email (MAX only)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v3/transactional-emails` | Send a transactional email |
| GET | `/v3/transactional-emails` | List transactional emails |

**Note**: Transactional email API is only available on MAX/Enterprise plans.

---

## Webhooks / Callbacks

GetResponse supports webhook callbacks for real-time event notifications.

### Supported Events

| Event | Trigger |
|---|---|
| `subscribe` | Contact subscribes to a list |
| `open` | Contact opens an email |
| `click` | Contact clicks a link |
| `goal` | Contact reaches a conversion goal |
| `survey` | Contact responds to a survey |
| `unsubscribe` | Contact unsubscribes |

### Callback Setup

Configure callbacks via the API or in the GetResponse UI under Integrations > API & Webhooks.

```json
POST /v3/callbacks
{
  "url": "https://yourapp.com/webhook",
  "actions": {
    "subscribe": true,
    "open": true,
    "click": true,
    "goal": true,
    "unsubscribe": true
  }
}
```

Callbacks send POST requests to your URL with event payload including contact data, campaign info, and message details.

---

## SDKs and Libraries

GetResponse provides API client libraries:
- **PHP**: Official PHP SDK
- **Python**: Community libraries available
- **Node.js**: Community libraries available
- **Ruby**: Community libraries available

For all other languages, use the REST API directly with any HTTP client.

---

## Key Gotchas

1. **"Campaign" = mailing list** — `POST /v3/campaigns` creates a list, not an email send. Use `POST /v3/newsletters` to send email.
2. **POST for updates** — GetResponse uses POST (not PUT/PATCH) to update existing resources.
3. **API keys expire** — Unused keys are deactivated after 90 days of no API calls.
4. **MAX requires X-Domain header** — All MAX/Enterprise API calls must include the `X-Domain` header.
5. **Rate limits are per-account** — 30K calls/10 min is shared across all API keys on the account.
6. **Batch contacts are async** — `POST /v3/contacts/batch` returns 202 and processes in the background.
7. **Search-contacts = segments** — The API uses "search-contacts" where the UI shows "segments."

---

*API reference is best-effort from research — some endpoints may have additional parameters not documented here. Refer to the official documentation at https://apidocs.getresponse.com/v3 for complete details.*
