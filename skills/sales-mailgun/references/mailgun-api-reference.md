### Mailgun APIs — Comprehensive Reference

Mailgun provides a REST API for email sending, domain management, event tracking, inbound routing, mailing lists, templates, webhooks, suppressions, email validation, and IP management.

> **Note**: Best-effort from research — Mailgun's documentation site rendered poorly via WebFetch. Verify endpoints and parameters against https://documentation.mailgun.com

---

## Base URL

```
US: https://api.mailgun.net/v3/
EU: https://api.eu.mailgun.net/v3/
```

Use the EU base URL if your domain is provisioned in Mailgun's EU region.

---

### Authentication

Mailgun uses HTTP Basic Auth with `api` as the username and your API key as the password.

```bash
curl --request GET \
  --url "https://api.mailgun.net/v3/domains" \
  --user "api:YOUR_API_KEY"
```

**Domain Sending Keys**: Restricted API keys that only allow `POST /v3/{domain}/messages` and `POST /v3/{domain}/messages.mime`. Use these for applications that only need to send email, limiting exposure if the key is compromised.

---

### Rate Limits

- Rate limits vary by API endpoint
- Response headers indicate the current limit state
- Exceeding rate limits returns HTTP `429 Too Many Requests`
- **Uptime SLA**: 99.99%

---

### Request & Response Format

- **Methods**: Standard REST — GET, POST, PUT, DELETE
- **Content-Type**: `application/x-www-form-urlencoded` for most POST endpoints (messages, routes, etc.); `application/json` for analytics
- Responses return JSON objects with standard HTTP status codes

### Error Responses

```json
{
  "message": "Domain not found: example.com"
}
```

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 404 | Not found |
| 413 | Payload too large |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |
| 502 | Bad gateway |
| 503 | Service unavailable |

### Pagination

List endpoints return a `paging` object with a `next` URL for cursor-based pagination:

```json
{
  "items": [ ... ],
  "paging": {
    "first": "https://api.mailgun.net/v3/...",
    "last": "https://api.mailgun.net/v3/...",
    "next": "https://api.mailgun.net/v3/...",
    "previous": "https://api.mailgun.net/v3/..."
  }
}
```

Follow the `next` URL to retrieve subsequent pages.

---

### Endpoints

---

#### 1. Messages API — `POST /v3/{domain}/messages`

The core email sending endpoints.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v3/{domain}/messages` | Send an email (form-encoded) |
| POST | `/v3/{domain}/messages.mime` | Send a raw MIME message |

**Request body fields** (form-encoded):

| Field | Type | Required | Description |
|---|---|---|---|
| `from` | string | Yes | Sender email (e.g., `"Name <sender@example.com>"`) |
| `to` | string | Yes | Recipient(s), comma-separated (max 1,000 for batch) |
| `subject` | string | Yes | Email subject line |
| `text` | string | Yes* | Plain text body (*at least one of `text` or `html` required) |
| `html` | string | Yes* | HTML body (*at least one of `text` or `html` required) |
| `cc` | string | No | CC recipients, comma-separated |
| `bcc` | string | No | BCC recipients, comma-separated |
| `attachment` | file | No | File attachment (multipart/form-data); multiple allowed |
| `inline` | file | No | Inline image attachment; reference in HTML via `cid:` |
| `tag` | string | No | Tag for categorizing the message; multiple allowed (up to 3) |
| `o:tracking` | string | No | Enable/disable tracking (`"yes"` or `"no"`) |
| `o:tracking-clicks` | string | No | Click tracking (`"yes"`, `"no"`, `"htmlonly"`) |
| `o:tracking-opens` | string | No | Open tracking (`"yes"` or `"no"`) |
| `o:deliverytime` | string | No | Scheduled delivery time (RFC 2822 format, up to 7 days) |
| `o:testmode` | string | No | Set to `"yes"` to enable test mode (accepts but doesn't send) |
| `h:X-Custom-Header` | string | No | Custom MIME headers (prefix with `h:`) |
| `v:my-var` | string | No | Custom JSON data attached to the message (prefix with `v:`) |
| `recipient-variables` | string | No | JSON object for batch sending — per-recipient variables |
| `template` | string | No | Name of a stored template to use |
| `t:version` | string | No | Template version tag |
| `t:text` | string | No | Set to `"yes"` to auto-generate plain text from template HTML |

**Batch sending**: Include up to 1,000 recipients in the `to` field and provide a `recipient-variables` JSON object mapping each recipient email to their personalization variables:

```json
{
  "user1@example.com": {"first": "Alice", "id": 1},
  "user2@example.com": {"first": "Bob", "id": 2}
}
```

**Example — Send an email**:
```bash
curl --request POST \
  --url "https://api.mailgun.net/v3/YOUR_DOMAIN/messages" \
  --user "api:YOUR_API_KEY" \
  --form "from=Sender <sender@YOUR_DOMAIN>" \
  --form "to=recipient@example.com" \
  --form "subject=Hello from Mailgun" \
  --form "text=This is a test email sent via the Mailgun API." \
  --form "html=<h1>Hello</h1><p>This is a test email.</p>"
```

**Response**:
```json
{
  "id": "<20240115120000.abc123@YOUR_DOMAIN>",
  "message": "Queued. Thank you."
}
```

---

#### 2. Domains API — `/v3/domains`

Manage sending domains, DNS verification, SMTP credentials, and tracking settings.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/domains` | List all domains |
| GET | `/v3/domains/{domain}` | Get domain info and DNS records |
| POST | `/v3/domains` | Add a new domain |
| DELETE | `/v3/domains/{domain}` | Delete a domain |
| PUT | `/v3/domains/{domain}/verify` | Trigger domain DNS verification |
| GET | `/v3/domains/{domain}/credentials` | List SMTP credentials |
| POST | `/v3/domains/{domain}/credentials` | Create an SMTP credential |
| PUT | `/v3/domains/{domain}/credentials/{login}` | Update an SMTP credential |
| DELETE | `/v3/domains/{domain}/credentials/{login}` | Delete an SMTP credential |
| GET | `/v3/domains/{domain}/connection` | Get domain connection settings |
| PUT | `/v3/domains/{domain}/connection` | Update domain connection settings |
| GET | `/v3/domains/{domain}/tracking` | Get domain tracking settings |
| PUT | `/v3/domains/{domain}/tracking/open` | Update open tracking settings |
| PUT | `/v3/domains/{domain}/tracking/click` | Update click tracking settings |
| PUT | `/v3/domains/{domain}/tracking/unsubscribe` | Update unsubscribe tracking settings |

---

#### 3. Events API — `GET /v3/{domain}/events`

Query the event log for a domain. Supports filtering and pagination.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/events` | Query event log |

**Query parameters**:

| Parameter | Type | Description |
|---|---|---|
| `event` | string | Filter by event type (see event types below) |
| `recipient` | string | Filter by recipient email |
| `tags` | string | Filter by message tag |
| `begin` | string | Start date (RFC 2822 or Unix timestamp) |
| `end` | string | End date (RFC 2822 or Unix timestamp) |
| `ascending` | string | `"yes"` for chronological order |
| `limit` | integer | Number of results per page (max 300, default 100) |

**Event types**: `accepted`, `delivered`, `failed` (includes `permanent` and `temporary` severities), `opened`, `clicked`, `unsubscribed`, `complained`, `stored`.

**Example — Query recent delivery failures**:
```bash
curl --request GET \
  --url "https://api.mailgun.net/v3/YOUR_DOMAIN/events?event=failed&limit=10" \
  --user "api:YOUR_API_KEY"
```

**Response** includes an `items` array of event objects and a `paging` object with `next`/`previous` URLs for pagination.

---

#### 4. Routes API — `/v3/routes`

Manage inbound email routing rules. Routes use expression filters to match incoming messages and perform actions.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/routes` | List all routes |
| POST | `/v3/routes` | Create a route |
| GET | `/v3/routes/{id}` | Get a specific route |
| PUT | `/v3/routes/{id}` | Update a route |
| DELETE | `/v3/routes/{id}` | Delete a route |

**Request body fields** (create/update):

| Field | Type | Required | Description |
|---|---|---|---|
| `priority` | integer | No | Route priority (lower = higher priority, default 0) |
| `description` | string | No | Human-readable description |
| `expression` | string | Yes | Filter expression (see below) |
| `action` | string | Yes | Action(s) to perform; multiple allowed |

**Expression filters**:
- `match_recipient("pattern")` — match recipient address (supports wildcards: `".*@example.com"`)
- `match_header("header", "pattern")` — match a specific MIME header
- `catch_all()` — match all incoming messages

**Actions**:
- `forward("https://example.com/webhook")` — forward to a URL
- `forward("user@example.com")` — forward to an email address
- `store(notify="https://example.com/callback")` — store the message and notify a URL
- `stop()` — stop processing subsequent routes

---

#### 5. Mailing Lists API — `/v3/lists`

Manage mailing lists and their members.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/lists/pages` | List all mailing lists (paginated) |
| POST | `/v3/lists` | Create a mailing list |
| GET | `/v3/lists/{address}` | Get mailing list details |
| PUT | `/v3/lists/{address}` | Update a mailing list |
| DELETE | `/v3/lists/{address}` | Delete a mailing list |
| GET | `/v3/lists/{address}/members/pages` | List members (paginated) |
| GET | `/v3/lists/{address}/members/{member}` | Get a member |
| POST | `/v3/lists/{address}/members` | Add a member |
| PUT | `/v3/lists/{address}/members/{member}` | Update a member |
| DELETE | `/v3/lists/{address}/members/{member}` | Delete a member |
| POST | `/v3/lists/{address}/members.json` | Bulk add members (JSON array) |

---

#### 6. Templates API — `/v3/{domain}/templates`

Create and manage reusable email templates with version support.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/templates` | List all templates |
| POST | `/v3/{domain}/templates` | Create a template |
| GET | `/v3/{domain}/templates/{name}` | Get a template |
| PUT | `/v3/{domain}/templates/{name}` | Update a template |
| DELETE | `/v3/{domain}/templates/{name}` | Delete a template |
| GET | `/v3/{domain}/templates/{name}/versions` | List template versions |
| POST | `/v3/{domain}/templates/{name}/versions` | Create a template version |
| GET | `/v3/{domain}/templates/{name}/versions/{tag}` | Get a template version |
| PUT | `/v3/{domain}/templates/{name}/versions/{tag}` | Update a template version |
| DELETE | `/v3/{domain}/templates/{name}/versions/{tag}` | Delete a template version |

Template versions support A/B testing — create multiple versions with different content and assign each a `tag`. Set one version as active to use by default, or specify a version tag when sending.

---

#### 7. Tags API — `/v3/{domain}/tags`

View and manage message tags and their statistics.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/tags` | List all tags |
| GET | `/v3/{domain}/tags/{tag}` | Get tag info |
| PUT | `/v3/{domain}/tags/{tag}` | Update tag description |
| GET | `/v3/{domain}/tags/{tag}/stats` | Get tag statistics (aggregated by date) |
| DELETE | `/v3/{domain}/tags/{tag}` | Delete a tag |

**Stats query parameters**: `event` (required — e.g., `accepted`, `delivered`, `failed`, `opened`, `clicked`), `start`, `end`, `resolution` (`hour`, `day`, `month`).

---

#### 8. Webhooks API — `/v3/domains/{domain}/webhooks`

Configure webhook endpoints for real-time event notifications.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/domains/{domain}/webhooks` | List all webhooks |
| POST | `/v3/domains/{domain}/webhooks` | Create a webhook |
| GET | `/v3/domains/{domain}/webhooks/{webhookname}` | Get a webhook |
| PUT | `/v3/domains/{domain}/webhooks/{webhookname}` | Update a webhook |
| DELETE | `/v3/domains/{domain}/webhooks/{webhookname}` | Delete a webhook |

**Webhook names** (map to event types): `accepted`, `delivered`, `opened`, `clicked`, `permanent_fail`, `temporary_fail`, `complained`, `unsubscribed`.

**Example — Create a webhook for delivery events**:
```bash
curl --request POST \
  --url "https://api.mailgun.net/v3/domains/YOUR_DOMAIN/webhooks" \
  --user "api:YOUR_API_KEY" \
  --form "id=delivered" \
  --form "url=https://example.com/webhooks/mailgun/delivered"
```

**Webhook signing**: Mailgun signs webhook payloads using HMAC SHA256 with your webhook signing key. Verify by computing HMAC SHA256 of `timestamp` + `token` using your signing key and comparing to the `signature` value.

**Retry behavior**: Mailgun retries failed webhook deliveries (non-2xx responses) for up to 24 hours with exponential backoff.

---

#### 9. Suppressions API

Manage bounce, unsubscribe, complaint, and whitelist suppressions per domain.

**Bounces** — `/v3/{domain}/bounces`:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/bounces` | List all bounces |
| GET | `/v3/{domain}/bounces/{address}` | Get a single bounce |
| POST | `/v3/{domain}/bounces` | Add a bounce record |
| DELETE | `/v3/{domain}/bounces/{address}` | Delete a bounce record |
| DELETE | `/v3/{domain}/bounces` | Clear all bounces |

**Unsubscribes** — `/v3/{domain}/unsubscribes`:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/unsubscribes` | List all unsubscribes |
| GET | `/v3/{domain}/unsubscribes/{address}` | Get a single unsubscribe |
| POST | `/v3/{domain}/unsubscribes` | Add an unsubscribe record |
| DELETE | `/v3/{domain}/unsubscribes/{address}` | Delete an unsubscribe record |
| DELETE | `/v3/{domain}/unsubscribes` | Clear all unsubscribes |

**Complaints** — `/v3/{domain}/complaints`:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/complaints` | List all complaints |
| GET | `/v3/{domain}/complaints/{address}` | Get a single complaint |
| POST | `/v3/{domain}/complaints` | Add a complaint record |
| DELETE | `/v3/{domain}/complaints/{address}` | Delete a complaint record |
| DELETE | `/v3/{domain}/complaints` | Clear all complaints |

**Whitelists** — `/v3/{domain}/whitelists`:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/{domain}/whitelists` | List all whitelist entries |
| GET | `/v3/{domain}/whitelists/{address_or_domain}` | Get a single whitelist entry |
| POST | `/v3/{domain}/whitelists` | Add a whitelist entry (address or domain) |
| DELETE | `/v3/{domain}/whitelists/{address_or_domain}` | Delete a whitelist entry |

---

#### 10. Email Validation API (Mailgun Optimize) — `/v4/address/validate`

Validate email addresses for deliverability. Requires a separate Mailgun Optimize subscription.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v4/address/validate` | Validate a single email address |
| POST | `/v4/address/validate/bulk/{list_id}` | Submit a bulk validation job (CSV upload) |
| GET | `/v4/address/validate/bulk/{list_id}` | Get bulk validation job status/results |

**Single validation query parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `address` | string | Yes | Email address to validate |

**Example — Validate an email address**:
```bash
curl --request GET \
  --url "https://api.mailgun.net/v4/address/validate?address=test@example.com" \
  --user "api:YOUR_API_KEY"
```

**Response fields**:

| Field | Type | Description |
|---|---|---|
| `address` | string | The email address that was validated |
| `is_disposable_address` | boolean | Whether the address is a known disposable email |
| `is_role_address` | boolean | Whether the address is a role-based address (e.g., admin@) |
| `result` | string | Validation result: `deliverable`, `undeliverable`, `do_not_send`, `catch_all`, `unknown` |
| `risk` | string | Risk level: `low`, `medium`, `high`, `unknown` |
| `reason` | array | Reasons for the result (e.g., `mailbox_does_not_exist`) |
| `did_you_mean` | string | Suggested correction if a typo is detected (e.g., `gmail.com` for `gmial.com`) |

---

#### 11. Metrics API — `POST /v1/analytics/metrics`

Query aggregated sending metrics across domains and tags.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/v1/analytics/metrics` | Query sending metrics |

**Request body fields** (JSON):

| Field | Type | Description |
|---|---|---|
| `start` | string | Start date (ISO 8601) |
| `end` | string | End date (ISO 8601) |
| `resolution` | string | Time granularity: `hour`, `day`, `month` |
| `duration` | string | Alternative to start/end (e.g., `"7d"`, `"30d"`) |
| `dimensions` | array | Group by dimensions (e.g., `["domain"]`, `["tag"]`) |
| `metrics` | array | Metrics to return (e.g., `["delivered_count"]`, `["opened_count"]`) |
| `filter` | object | Filter criteria (domain, tag, etc.) |

**Available metrics**: `accepted_count`, `delivered_count`, `failed_count`, `opened_count`, `clicked_count`, `unsubscribed_count`, `complained_count`, `bounced_count`, and others.

---

#### 12. IP Management API — `/v3/ips`

Manage dedicated IP addresses and their domain assignments.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/ips` | List all IPs |
| GET | `/v3/ips/{ip}` | Get IP info (assigned domains, warmup status) |
| POST | `/v3/domains/{domain}/ips` | Assign an IP to a domain |
| DELETE | `/v3/domains/{domain}/ips/{ip}` | Unassign an IP from a domain |

---

### Webhook Event Payloads

All webhook payloads are JSON. Each payload includes a `signature` object for verification and an `event-data` object with the event details.

---

#### Payload Envelope

Every webhook POST from Mailgun uses this structure:

```json
{
  "signature": {
    "timestamp": "1700000000",
    "token": "unique-token-string",
    "signature": "hmac-sha256-hex-digest"
  },
  "event-data": {
    "event": "delivered",
    "timestamp": 1700000000.000,
    "id": "event-id",
    "message": { ... },
    "recipient": "user@example.com",
    "tags": ["welcome"],
    ...
  }
}
```

**Signature verification**: Compute HMAC SHA256 of the concatenation of `timestamp` + `token` using your webhook signing key (found in your Mailgun dashboard under Domain Settings > Sending > Webhooks). Compare the hex digest to the `signature` field. Reject payloads that do not match.

---

#### Delivered Event

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "delivered",
    "timestamp": 1700000000.123,
    "id": "evt_abc123",
    "recipient": "user@example.com",
    "envelope": {
      "transport": "smtp",
      "sender": "sender@yourdomain.com",
      "sending-ip": "192.168.1.1",
      "targets": "user@example.com"
    },
    "message": {
      "headers": {
        "to": "user@example.com",
        "message-id": "20240115120000.abc123@yourdomain.com",
        "from": "Sender <sender@yourdomain.com>",
        "subject": "Welcome"
      },
      "size": 1024
    },
    "tags": ["welcome"],
    "delivery-status": {
      "message": "OK",
      "code": 250,
      "description": ""
    }
  }
}
```

---

#### Failed Event (Permanent)

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "failed",
    "severity": "permanent",
    "timestamp": 1700000000.456,
    "id": "evt_def456",
    "recipient": "invalid@example.com",
    "reason": "bounce",
    "delivery-status": {
      "code": 550,
      "message": "5.1.1 The email account that you tried to reach does not exist.",
      "description": "Not delivering to previously bounced address"
    },
    "message": {
      "headers": {
        "to": "invalid@example.com",
        "message-id": "20240115120000.def456@yourdomain.com",
        "from": "Sender <sender@yourdomain.com>",
        "subject": "Hello"
      }
    },
    "tags": []
  }
}
```

---

#### Failed Event (Temporary)

Same structure as permanent failure but with `"severity": "temporary"`. Mailgun retries temporary failures automatically.

---

#### Opened Event

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "opened",
    "timestamp": 1700000050.789,
    "id": "evt_ghi789",
    "recipient": "user@example.com",
    "message": {
      "headers": {
        "message-id": "20240115120000.abc123@yourdomain.com"
      }
    },
    "geolocation": {
      "country": "US",
      "region": "CA",
      "city": "San Francisco"
    },
    "client-info": {
      "client-name": "Gmail",
      "client-os": "Windows",
      "device-type": "desktop",
      "user-agent": "Mozilla/5.0"
    },
    "ip": "203.0.113.1",
    "tags": ["welcome"]
  }
}
```

---

#### Clicked Event

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "clicked",
    "timestamp": 1700000060.123,
    "id": "evt_jkl012",
    "recipient": "user@example.com",
    "url": "https://example.com/offer",
    "message": {
      "headers": {
        "message-id": "20240115120000.abc123@yourdomain.com"
      }
    },
    "geolocation": {
      "country": "US",
      "region": "CA",
      "city": "San Francisco"
    },
    "client-info": {
      "client-name": "Chrome",
      "client-os": "Windows",
      "device-type": "desktop",
      "user-agent": "Mozilla/5.0"
    },
    "tags": ["welcome"]
  }
}
```

---

#### Unsubscribed Event

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "unsubscribed",
    "timestamp": 1700000100.456,
    "id": "evt_mno345",
    "recipient": "user@example.com",
    "message": {
      "headers": {
        "message-id": "20240115120000.abc123@yourdomain.com"
      }
    },
    "tags": ["marketing"]
  }
}
```

---

#### Complained Event

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "complained",
    "timestamp": 1700000200.789,
    "id": "evt_pqr678",
    "recipient": "user@example.com",
    "message": {
      "headers": {
        "message-id": "20240115120000.abc123@yourdomain.com"
      }
    },
    "tags": []
  }
}
```

---

#### Accepted Event

Fired when Mailgun accepts the message for delivery (queued).

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "accepted",
    "timestamp": 1700000000.000,
    "id": "evt_stu901",
    "recipient": "user@example.com",
    "method": "http",
    "message": {
      "headers": {
        "to": "user@example.com",
        "message-id": "20240115120000.abc123@yourdomain.com",
        "from": "Sender <sender@yourdomain.com>",
        "subject": "Welcome"
      },
      "size": 1024
    },
    "tags": ["welcome"],
    "storage": {
      "url": "https://storage.mailgun.net/v3/domains/yourdomain.com/messages/..."
    }
  }
}
```

---

#### Stored Event

Fired when a message is stored (e.g., via a `store()` route action for inbound messages).

```json
{
  "signature": { "timestamp": "1700000000", "token": "abc123", "signature": "..." },
  "event-data": {
    "event": "stored",
    "timestamp": 1700000000.000,
    "id": "evt_vwx234",
    "storage": {
      "url": "https://storage.mailgun.net/v3/domains/yourdomain.com/messages/...",
      "key": "message-key"
    },
    "message": {
      "headers": {
        "to": "inbound@yourdomain.com",
        "from": "sender@example.com",
        "subject": "Incoming message"
      }
    }
  }
}
```

---

## Quick Reference — Common Workflows

### Send an email and query its delivery status
```bash
# Step 1: Send email
curl --request POST \
  --url "https://api.mailgun.net/v3/YOUR_DOMAIN/messages" \
  --user "api:YOUR_API_KEY" \
  --form "from=App <noreply@YOUR_DOMAIN>" \
  --form "to=user@example.com" \
  --form "subject=Your order confirmation" \
  --form "html=<h1>Order Confirmed</h1><p>Thank you for your purchase.</p>" \
  --form "tag=order-confirmation"

# Step 2: Query events for delivery status
curl --request GET \
  --url "https://api.mailgun.net/v3/YOUR_DOMAIN/events?recipient=user@example.com&event=delivered&limit=5" \
  --user "api:YOUR_API_KEY"
```

### Set up a webhook and validate its signature
```bash
# Step 1: Create a webhook for delivery events
curl --request POST \
  --url "https://api.mailgun.net/v3/domains/YOUR_DOMAIN/webhooks" \
  --user "api:YOUR_API_KEY" \
  --form "id=delivered" \
  --form "url=https://example.com/webhooks/mailgun"

# Step 2: Verify webhook signature in your application (pseudocode):
# signing_key = YOUR_WEBHOOK_SIGNING_KEY
# expected = hmac_sha256(signing_key, timestamp + token)
# if expected != signature: reject
```

### Validate an email address before sending
```bash
curl --request GET \
  --url "https://api.mailgun.net/v4/address/validate?address=user@example.com" \
  --user "api:YOUR_API_KEY"
```
