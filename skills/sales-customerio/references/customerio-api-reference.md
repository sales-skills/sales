### Customer.io APIs — Comprehensive Reference

Customer.io provides multiple REST APIs for customer data management, messaging automation, transactional messaging, and reporting. The APIs are split by function: Track API for ingesting customer data, App API for reading campaign/segment data, Transactional API for sending one-off messages, and a newer Data Pipelines API for structured data ingestion.

> **Note**: The Data Pipelines API is newer and documentation may evolve. Always check https://docs.customer.io for the most current documentation.

---

## APIs Overview

Customer.io has four primary APIs, each with its own base URL, authentication method, and rate limit:

| API | Purpose | Base URL | Auth | Rate Limit |
|---|---|---|---|---|
| Track API | Ingest customer data & events | `https://track.customer.io/api/v1/` | Basic Auth | 100 req/sec |
| App API | Read campaigns, segments, customers | `https://api.customer.io/v1/api/` | Bearer token | 10 req/sec |
| Transactional API | Send transactional emails & push | `https://api.customer.io/v1/` | Bearer token | 100 req/sec |
| Data Pipelines API | Structured data ingestion (newer) | Varies by source | Bearer token | Varies |

**EU data center** — substitute the base URLs:
- Track API: `https://track-eu.customer.io/api/v1/`
- App API: `https://api-eu.customer.io/v1/api/`

---

### Authentication

**Track API** — Basic Auth with Site ID as the username and API key as the password. Both are found in Settings > API Credentials.

```bash
curl --request PUT \
  --url "https://track.customer.io/api/v1/customers/user123" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"email":"user@example.com"}'
```

**App API** — Bearer token using the App API key from Settings > API Credentials.

```bash
curl --request GET \
  --url "https://api.customer.io/v1/api/campaigns" \
  --header "Authorization: Bearer YOUR_APP_API_KEY"
```

**Transactional API** — Bearer token using a separate Transactional API key (distinct from the App API key), also from Settings > API Credentials.

```bash
curl --request POST \
  --url "https://api.customer.io/v1/send/email" \
  --header "Authorization: Bearer YOUR_TRANSACTIONAL_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"transactional_message_id":"1","to":"user@example.com"}'
```

---

### Rate Limits

| API | Limit | Enforcement |
|---|---|---|
| Track API | 100 req/sec | Fair-use; not strictly enforced |
| App API | 10 req/sec | Strictly enforced |
| Transactional API | 100 req/sec | Strictly enforced |
| API-Triggered Broadcasts | 1 req/10 sec | Strictly enforced |

Exceeding rate limits returns HTTP `429 Too Many Requests`.

---

### Request & Response Format

- **Methods**: Standard REST — GET, POST, PUT, DELETE
- **Content-Type**: `application/json`
- Responses return JSON objects with standard HTTP status codes

### Error Responses

```json
{
  "meta": {
    "error": "Not Found"
  }
}
```

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or missing credentials |
| 404 | Not found |
| 408 | Request timeout |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |

### Pagination

List endpoints use offset-based pagination with `limit` and `start` parameters:

```
GET /v1/api/campaigns?limit=10&start=0
```

---

## Track API Endpoints

Base URL: `https://track.customer.io/api/v1/`

---

#### 1. Identify / Update a Person — `PUT /customers/{identifier}`

Create or update a person. The `{identifier}` is the value you use to identify people (typically `id` or `email`, depending on your workspace setting).

| Method | Endpoint | Description |
|---|---|---|
| PUT | `/customers/{identifier}` | Create or update a person and set attributes |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | No | Person's email address |
| `created_at` | integer | No | Unix timestamp when the person was created |
| *(any key)* | string/number/boolean/object | No | Custom attributes — set any key-value pair |

**Example — Identify a person with custom attributes**:
```bash
curl --request PUT \
  --url "https://track.customer.io/api/v1/customers/user_123" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "email": "jane@example.com",
    "created_at": 1609459200,
    "first_name": "Jane",
    "last_name": "Doe",
    "plan": "enterprise",
    "company": "Acme Corp",
    "monthly_spend": 4500
  }'
```

**Response**: `200 OK` with empty body on success.

---

#### 2. Delete a Person — `DELETE /customers/{identifier}`

Permanently remove a person and their data from Customer.io.

| Method | Endpoint | Description |
|---|---|---|
| DELETE | `/customers/{identifier}` | Delete a person |

**Example**:
```bash
curl --request DELETE \
  --url "https://track.customer.io/api/v1/customers/user_123" \
  --user "SITE_ID:API_KEY"
```

---

#### 3. Track Event for a Person — `POST /customers/{identifier}/events`

Record a named event for a known person. Events trigger campaigns and appear in activity logs.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/customers/{identifier}/events` | Track an event for a person |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Event name |
| `data` | object | No | Key-value pairs of event metadata |
| `type` | string | No | Set to `"page"` for page view events |

**Example — Track a purchase event**:
```bash
curl --request POST \
  --url "https://track.customer.io/api/v1/customers/user_123/events" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "purchase_completed",
    "data": {
      "product": "Pro Plan",
      "amount": 99.00,
      "currency": "USD",
      "order_id": "ord_8827"
    }
  }'
```

**Response**: `200 OK` with empty body on success.

---

#### 4. Track Anonymous Event — `POST /events`

Track an event not tied to a known person. Useful for pre-identification tracking.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/events` | Track an anonymous event |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Event name |
| `data` | object | No | Key-value pairs of event metadata |
| `anonymous_id` | string | No | Anonymous identifier to later merge with a known person |

**Example**:
```bash
curl --request POST \
  --url "https://track.customer.io/api/v1/events" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "page_viewed",
    "anonymous_id": "anon_abc123",
    "data": {
      "url": "/pricing",
      "referrer": "google.com"
    }
  }'
```

---

#### 5. Add a Device — `PUT /customers/{identifier}/devices`

Register a mobile device token for push notifications.

| Method | Endpoint | Description |
|---|---|---|
| PUT | `/customers/{identifier}/devices` | Add a push device |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `device.id` | string | Yes | Device token |
| `device.platform` | string | Yes | `"ios"` or `"android"` |
| `device.last_used` | integer | No | Unix timestamp of last use |

**Example**:
```bash
curl --request PUT \
  --url "https://track.customer.io/api/v1/customers/user_123/devices" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "device": {
      "id": "FCM_OR_APNS_TOKEN",
      "platform": "ios",
      "last_used": 1700000000
    }
  }'
```

---

#### 6. Remove a Device — `DELETE /customers/{identifier}/devices/{token}`

Remove a registered device token.

| Method | Endpoint | Description |
|---|---|---|
| DELETE | `/customers/{identifier}/devices/{token}` | Remove a push device |

---

#### 7. Suppress a Person — `POST /customers/{identifier}/suppress`

Suppress a person so they receive no messages. The person's profile is retained.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/customers/{identifier}/suppress` | Suppress a person |

---

#### 8. Unsuppress a Person — `POST /customers/{identifier}/unsuppress`

Remove suppression from a person, allowing messages to resume.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/customers/{identifier}/unsuppress` | Unsuppress a person |

---

## App API Endpoints

Base URL: `https://api.customer.io/v1/api/`

Auth: `Authorization: Bearer YOUR_APP_API_KEY`

---

#### 9. Campaigns — `/campaigns`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns` | List all campaigns |
| GET | `/campaigns/{id}` | Get a specific campaign |
| GET | `/campaigns/{id}/metrics` | Get campaign performance metrics |

**Example — List campaigns**:
```bash
curl --request GET \
  --url "https://api.customer.io/v1/api/campaigns" \
  --header "Authorization: Bearer YOUR_APP_API_KEY"
```

**Response**:
```json
{
  "campaigns": [
    {
      "id": 1,
      "name": "Welcome Series",
      "type": "triggered",
      "state": "active",
      "created_at": 1609459200,
      "updated_at": 1700000000
    }
  ]
}
```

---

#### 10. Segments — `/segments`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/segments/{id}` | Get a specific segment |
| GET | `/segments/{id}/membership` | List people in a segment |

---

#### 11. Customers — `/customers`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/customers` | Search for customers using filters |
| GET | `/customers/{id}/attributes` | Get all attributes for a customer |
| GET | `/customers/{id}/activities` | Get activity log for a customer |

**Example — Get customer attributes**:
```bash
curl --request GET \
  --url "https://api.customer.io/v1/api/customers/user_123/attributes" \
  --header "Authorization: Bearer YOUR_APP_API_KEY"
```

---

#### 12. Exports — `/exports`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/exports/customers` | Export customer data |
| POST | `/exports/deliveries` | Export message delivery data |
| GET | `/exports/{id}` | Check export status / download |

---

#### 13. Messages — `/messages`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/messages/{id}` | Get delivery metadata for a message |

---

#### 14. Newsletters / Broadcasts — `/newsletters`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/newsletters` | List all newsletters/broadcasts |
| GET | `/newsletters/{id}` | Get a specific newsletter/broadcast |

---

#### 15. Activities — `/activities`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/activities` | List recent activities across your workspace |

---

## Transactional API Endpoints

Base URL: `https://api.customer.io/v1/`

Auth: `Authorization: Bearer YOUR_TRANSACTIONAL_API_KEY` (separate key from App API)

---

#### 16. Send Transactional Email — `POST /send/email`

Send a single transactional email using a pre-built template or inline content.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/send/email` | Send a transactional email |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `transactional_message_id` | string/integer | Yes | Template ID or name from Customer.io |
| `to` | string | Yes | Recipient email address |
| `identifiers` | object | No | Identify the recipient (e.g., `{"id": "user_123"}`) |
| `message_data` | object | No | Key-value pairs for Liquid template variables |
| `from` | string | No | Override the sender address |
| `subject` | string | No | Override the subject line |
| `body` | string | No | Override the email body (HTML) |
| `reply_to` | string | No | Reply-to address |
| `bcc` | string | No | BCC address |
| `attachments` | array | No | File attachments (base64-encoded) |
| `disable_message_retention` | boolean | No | If `true`, do not store message content |
| `queue_draft` | boolean | No | If `true`, queue as draft instead of sending |
| `send_to_unsubscribed` | boolean | No | If `true`, send even if recipient has unsubscribed |

**Example — Send a transactional email with template data**:
```bash
curl --request POST \
  --url "https://api.customer.io/v1/send/email" \
  --header "Authorization: Bearer YOUR_TRANSACTIONAL_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "transactional_message_id": "order_confirmation",
    "to": "jane@example.com",
    "identifiers": {
      "id": "user_123"
    },
    "message_data": {
      "order_id": "ord_8827",
      "product_name": "Pro Plan",
      "amount": "$99.00",
      "receipt_url": "https://example.com/receipts/ord_8827"
    },
    "from": "billing@example.com",
    "reply_to": "support@example.com"
  }'
```

**Response**:
```json
{
  "delivery_id": "d_abc123",
  "queued_at": 1700000000
}
```

---

#### 17. Send Transactional Push — `POST /send/push`

Send a transactional push notification.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/send/push` | Send a transactional push notification |

---

#### 18. Transactional Message Metrics — `GET /transactional/{id}/metrics`

Get delivery metrics for a transactional message template.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/transactional/{id}/metrics` | Get metrics for a transactional message |

---

## API-Triggered Broadcasts

Rate limit: 1 request per 10 seconds.

---

#### 19. Trigger a Broadcast — `POST /campaigns/{id}/triggers`

Programmatically trigger a broadcast campaign (formerly called API-triggered broadcasts).

| Method | Endpoint | Description |
|---|---|---|
| POST | `/campaigns/{id}/triggers` | Trigger a broadcast |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | object | No | Key-value pairs for Liquid template variables |
| `recipients` | object | No | Targeting criteria — segment, filter, or specific IDs |
| `email_add_duplicates` | boolean | No | Send to duplicate email addresses |
| `email_ignore_missing` | boolean | No | Ignore recipients without email addresses |
| `id_ignore_missing` | boolean | No | Ignore recipient IDs that don't exist |

**Example — Trigger a broadcast with data and recipients**:
```bash
curl --request POST \
  --url "https://api.customer.io/v1/api/campaigns/5/triggers" \
  --header "Authorization: Bearer YOUR_APP_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "data": {
      "sale_name": "Spring Sale",
      "discount_pct": 20,
      "coupon_code": "SPRING20"
    },
    "recipients": {
      "segment": {
        "id": 7
      }
    },
    "email_ignore_missing": true
  }'
```

**Response**: `200 OK` on success.

---

## Data Pipelines API

The Data Pipelines API is Customer.io's newer data ingestion layer, similar in design to Segment's API. It provides a structured approach to sending customer data (identify, group, track, page) through configured sources and destinations.

Key operations:
- **Identify** — create or update a person
- **Group** — associate a person with a company/group
- **Track** — record an event
- **Page** — record a page view

> **Note**: The Data Pipelines API is actively evolving. Refer to https://docs.customer.io for the latest endpoints and schema.

---

## Webhook Events (Reporting Webhooks)

Customer.io sends webhook events to report on message delivery status. Configure reporting webhooks in Settings > Webhooks.

### Email Events

| Event | Description |
|---|---|
| `email_sent` | Email was sent to the delivery provider |
| `email_delivered` | Email was delivered to the recipient's inbox |
| `email_opened` | Recipient opened the email |
| `email_clicked` | Recipient clicked a link in the email |
| `email_bounced` | Email bounced (hard or soft) |
| `email_dropped` | Email was dropped before sending |
| `email_spamreport` | Recipient reported the email as spam |
| `email_unsubscribed` | Recipient unsubscribed via email link |

### SMS Events

| Event | Description |
|---|---|
| `sms_sent` | SMS was sent |
| `sms_delivered` | SMS was delivered |
| `sms_failed` | SMS delivery failed |
| `sms_bounced` | SMS bounced |

### Push Notification Events

| Event | Description |
|---|---|
| `push_sent` | Push notification was sent |
| `push_opened` | Push notification was opened |
| `push_bounced` | Push notification bounced |

### In-App Message Events

| Event | Description |
|---|---|
| `in_app_opened` | In-app message was displayed |
| `in_app_clicked` | In-app message was clicked |

### Journey Webhook Action

In addition to reporting webhooks, Customer.io supports a **Webhook action** within journeys (workflows). This sends a POST request to any URL with a custom JSON payload, allowing integration with external systems at specific points in a customer journey.

---

## Quick Reference — Common Workflows

### Identify a person and track their first event
```bash
# Step 1: Identify
curl --request PUT \
  --url "https://track.customer.io/api/v1/customers/user_456" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"email":"alex@example.com","first_name":"Alex","plan":"free"}'

# Step 2: Track event
curl --request POST \
  --url "https://track.customer.io/api/v1/customers/user_456/events" \
  --user "SITE_ID:API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"name":"signed_up","data":{"source":"organic","landing_page":"/pricing"}}'
```

### Send a transactional email and check metrics
```bash
# Step 1: Send email
curl --request POST \
  --url "https://api.customer.io/v1/send/email" \
  --header "Authorization: Bearer YOUR_TRANSACTIONAL_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"transactional_message_id":"password_reset","to":"alex@example.com","identifiers":{"id":"user_456"},"message_data":{"reset_url":"https://example.com/reset?token=abc"}}'

# Step 2: Check metrics for the template
curl --request GET \
  --url "https://api.customer.io/v1/transactional/password_reset/metrics" \
  --header "Authorization: Bearer YOUR_TRANSACTIONAL_API_KEY"
```
