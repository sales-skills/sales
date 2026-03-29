### SendGrid APIs — Comprehensive Reference

SendGrid provides a single REST API for transactional and marketing email, contact management, suppressions, statistics, and account administration.

> **Note**: Some endpoint details below are best-effort from research. The Email Activity API requires an additional purchase on non-Premier plans. Always check https://docs.sendgrid.com/api-reference for the most current documentation.

---

## Base URL

```
https://api.sendgrid.com/v3/
```

---

### Authentication

| Method | Details |
|---|---|
| Bearer Token | `Authorization: Bearer <API_KEY>` |

**Where to generate**: Settings → API Keys in the SendGrid dashboard.

**Key permission levels**:
- **Full Access** — complete access to all API endpoints
- **Restricted Access** — granular per-endpoint scopes
- **Billing Access** — billing-only permissions

**Example request**:
```bash
curl --request GET \
  --url "https://api.sendgrid.com/v3/marketing/contacts/count" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

---

### Rate Limits

- **600 requests/min** for most endpoints
- **mail/send endpoint**: up to 10,000 requests/sec (no rate limit headers returned)
- Exceeding the limit returns HTTP `429 Too Many Requests` with a `Retry-After` header
- **Message size limit**: 20 MB max (including headers and attachments)

---

### Pagination

Offset-based pagination using query parameters:

| Parameter | Default | Description |
|---|---|---|
| `limit` | varies | Number of records to return |
| `offset` | 0 | Number of records to skip |

---

### Request & Response Format

- **Methods**: Standard REST — GET, POST, PUT, PATCH, DELETE
- **Content-Type**: `application/json`
- Responses return JSON objects with standard HTTP status codes

### Error Responses

```json
{
  "errors": [
    {
      "message": "The provided authorization grant is invalid, expired, or revoked",
      "field": null,
      "help": null
    }
  ]
}
```

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 202 | Accepted (queued for processing) |
| 204 | No content (successful delete) |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 403 | Forbidden — insufficient permissions |
| 404 | Not found |
| 405 | Method not allowed |
| 413 | Payload too large (exceeds 20 MB) |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |

---

### Endpoints

---

#### 1. Mail Send — `/mail/send`

The core transactional email endpoint.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/mail/send` | Send an email (returns 202 Accepted) |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `personalizations` | array | Yes | Array of recipient-specific overrides |
| `from` | object | Yes | Sender email and name |
| `subject` | string | Yes* | Global subject (*can be overridden per personalization) |
| `content` | array | Yes* | Array of content blocks (*or use `template_id`) |
| `reply_to` | object | No | Reply-to address |
| `attachments` | array | No | File attachments (base64 encoded) |
| `template_id` | string | No | Transactional template ID |
| `headers` | object | No | Custom email headers |
| `categories` | array | No | Up to 10 categories for stats |
| `custom_args` | object | No | Custom arguments passed to webhook events |
| `send_at` | integer | No | Unix timestamp for scheduled send |
| `batch_id` | string | No | Batch ID for grouping scheduled sends |
| `asm` | object | No | Advanced suppression manager settings |
| `ip_pool_name` | string | No | IP pool to send from |
| `mail_settings` | object | No | Mail-level settings (sandbox, BCC, etc.) |
| `tracking_settings` | object | No | Click/open tracking overrides |

**Personalization fields**:

| Field | Type | Description |
|---|---|---|
| `to` | array | Recipients (required) |
| `cc` | array | CC recipients |
| `bcc` | array | BCC recipients |
| `subject` | string | Override global subject |
| `headers` | object | Per-personalization headers |
| `substitutions` | object | Substitution tags for legacy templates |
| `custom_args` | object | Per-personalization custom args |
| `send_at` | integer | Per-personalization schedule |
| `dynamic_template_data` | object | Handlebars template variables |

**ASM fields**:

| Field | Type | Description |
|---|---|---|
| `group_id` | integer | Unsubscribe group ID (required) |
| `groups_to_display` | array | Group IDs shown on the unsubscribe preferences page |

**Example — send a basic email**:
```bash
curl --request POST \
  --url "https://api.sendgrid.com/v3/mail/send" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "personalizations": [
      {
        "to": [{"email": "recipient@example.com", "name": "Jane Doe"}],
        "subject": "Hello from SendGrid"
      }
    ],
    "from": {"email": "sender@example.com", "name": "Acme Sales"},
    "reply_to": {"email": "replies@example.com"},
    "content": [
      {"type": "text/plain", "value": "Plain text body"},
      {"type": "text/html", "value": "<h1>Hello</h1><p>HTML body</p>"}
    ],
    "categories": ["onboarding"],
    "tracking_settings": {
      "click_tracking": {"enable": true},
      "open_tracking": {"enable": true}
    }
  }'
```

**Response**: `202 Accepted` with empty body. The email is queued for delivery.

**Example — send with a dynamic template**:
```bash
curl --request POST \
  --url "https://api.sendgrid.com/v3/mail/send" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "personalizations": [
      {
        "to": [{"email": "recipient@example.com"}],
        "dynamic_template_data": {
          "first_name": "Jane",
          "order_id": "12345",
          "total": "$49.99"
        }
      }
    ],
    "from": {"email": "orders@example.com", "name": "Acme Store"},
    "template_id": "d-abc123def456"
  }'
```

**Example — send with attachment**:
```bash
curl --request POST \
  --url "https://api.sendgrid.com/v3/mail/send" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "personalizations": [
      {"to": [{"email": "recipient@example.com"}]}
    ],
    "from": {"email": "sender@example.com"},
    "subject": "Invoice attached",
    "content": [{"type": "text/plain", "value": "Please find your invoice attached."}],
    "attachments": [
      {
        "content": "BASE64_ENCODED_CONTENT",
        "type": "application/pdf",
        "filename": "invoice.pdf",
        "disposition": "attachment"
      }
    ]
  }'
```

---

#### 2. Cancel Scheduled Sends — `/mail/batch` & `/user/scheduled_sends`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/mail/batch` | Create a batch ID |
| GET | `/mail/batch/{batch_id}` | Validate a batch ID |
| POST | `/user/scheduled_sends` | Cancel or pause a scheduled send |
| GET | `/user/scheduled_sends` | List all cancelled/paused sends |
| GET | `/user/scheduled_sends/{batch_id}` | Get status of a batch |
| DELETE | `/user/scheduled_sends/{batch_id}` | Remove cancellation/pause |

**Example — cancel a scheduled batch**:
```bash
curl --request POST \
  --url "https://api.sendgrid.com/v3/user/scheduled_sends" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"batch_id": "YOUR_BATCH_ID", "status": "cancel"}'
```

---

#### 3. Contacts — `/marketing/contacts`

| Method | Endpoint | Description |
|---|---|---|
| PUT | `/marketing/contacts` | Add or update contacts (upsert) |
| DELETE | `/marketing/contacts` | Delete contacts by ID |
| GET | `/marketing/contacts/{id}` | Get a single contact |
| GET | `/marketing/contacts/count` | Get total contact count |
| POST | `/marketing/contacts/search` | Search contacts with SGQL query |
| GET | `/marketing/contacts/exports` | List all contact exports |
| POST | `/marketing/contacts/exports` | Create a contact export |

**Example — add/update contacts**:
```bash
curl --request PUT \
  --url "https://api.sendgrid.com/v3/marketing/contacts" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "list_ids": ["abc-123-def"],
    "contacts": [
      {
        "email": "jane@example.com",
        "first_name": "Jane",
        "last_name": "Doe",
        "custom_fields": {
          "company": "Acme Corp",
          "plan": "enterprise"
        }
      },
      {
        "email": "john@example.com",
        "first_name": "John",
        "last_name": "Smith"
      }
    ]
  }'
```

**Response**:
```json
{
  "job_id": "abc123-def456-ghi789"
}
```

Note: Contact upserts are asynchronous. The `job_id` can be used to check import status.

**Example — search contacts with SGQL**:
```bash
curl --request POST \
  --url "https://api.sendgrid.com/v3/marketing/contacts/search" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"query": "last_name = '\''Doe'\'' AND CONTAINS(email, '\''example.com'\'')"}'
```

**Response**:
```json
{
  "result": [
    {
      "id": "contact-uuid",
      "email": "jane@example.com",
      "first_name": "Jane",
      "last_name": "Doe",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-06-01T14:22:00Z",
      "list_ids": ["abc-123-def"],
      "custom_fields": {
        "company": "Acme Corp"
      }
    }
  ],
  "contact_count": 1
}
```

---

#### 4. Lists — `/marketing/lists`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/marketing/lists` | Get all lists |
| POST | `/marketing/lists` | Create a list |
| GET | `/marketing/lists/{id}` | Get a specific list |
| PATCH | `/marketing/lists/{id}` | Update a list name |
| DELETE | `/marketing/lists/{id}` | Delete a list |
| GET | `/marketing/lists/{id}/contacts/count` | Get contact count for a list |

---

#### 5. Segments — `/marketing/segments/2.0`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/marketing/segments/2.0` | Get all segments |
| POST | `/marketing/segments/2.0` | Create a query-based segment |
| GET | `/marketing/segments/2.0/{id}` | Get a specific segment |
| PATCH | `/marketing/segments/2.0/{id}` | Update a segment |
| DELETE | `/marketing/segments/2.0/{id}` | Delete a segment |

---

#### 6. Single Sends (Marketing Campaigns) — `/marketing/singlesends`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/marketing/singlesends` | Get all single sends |
| POST | `/marketing/singlesends` | Create a single send |
| GET | `/marketing/singlesends/{id}` | Get a specific single send |
| PATCH | `/marketing/singlesends/{id}` | Update a single send |
| DELETE | `/marketing/singlesends/{id}` | Delete a single send |
| PUT | `/marketing/singlesends/{id}/schedule` | Schedule a single send |
| DELETE | `/marketing/singlesends/{id}/schedule` | Unschedule a single send |
| POST | `/marketing/singlesends/search` | Search single sends |

---

#### 7. Automations — `/marketing/automations`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/marketing/automations` | Get all automations |
| POST | `/marketing/automations` | Create an automation |
| GET | `/marketing/automations/{id}` | Get a specific automation |
| POST | `/marketing/automations/{id}/activate` | Activate an automation |
| POST | `/marketing/automations/{id}/deactivate` | Deactivate (pause) an automation |

---

#### 8. Transactional Templates — `/templates`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/templates` | Get all templates |
| POST | `/templates` | Create a template |
| GET | `/templates/{id}` | Get a specific template |
| PATCH | `/templates/{id}` | Update a template |
| DELETE | `/templates/{id}` | Delete a template |

**Template Versions**:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/templates/{id}/versions` | Create a version |
| GET | `/templates/{id}/versions/{version_id}` | Get a version |
| PATCH | `/templates/{id}/versions/{version_id}` | Update a version |
| DELETE | `/templates/{id}/versions/{version_id}` | Delete a version |
| POST | `/templates/{id}/versions/{version_id}/activate` | Activate a version |

---

#### 9. Design Library — `/designs`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/designs` | Get all designs |
| POST | `/designs` | Create a design |
| GET | `/designs/{id}` | Get a specific design |
| PATCH | `/designs/{id}` | Update a design |
| DELETE | `/designs/{id}` | Delete a design |
| GET | `/designs/pre-builts` | Get pre-built designs |

---

#### 10. Suppressions

##### Bounces — `/suppression/bounces`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/suppression/bounces` | Get all bounces |
| GET | `/suppression/bounces/{email}` | Get bounces for an email |
| DELETE | `/suppression/bounces` | Delete bounces |
| DELETE | `/suppression/bounces/{email}` | Delete a specific bounce |

##### Blocks — `/suppression/blocks`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/suppression/blocks` | Get all blocks |
| GET | `/suppression/blocks/{email}` | Get a specific block |
| DELETE | `/suppression/blocks` | Delete blocks |
| DELETE | `/suppression/blocks/{email}` | Delete a specific block |

##### Invalid Emails — `/suppression/invalid_emails`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/suppression/invalid_emails` | Get all invalid emails |
| GET | `/suppression/invalid_emails/{email}` | Get a specific invalid email |
| DELETE | `/suppression/invalid_emails` | Delete invalid emails |
| DELETE | `/suppression/invalid_emails/{email}` | Delete a specific invalid email |

##### Spam Reports — `/suppression/spam_reports`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/suppression/spam_reports` | Get all spam reports |
| GET | `/suppression/spam_reports/{email}` | Get a specific spam report |
| DELETE | `/suppression/spam_reports` | Delete spam reports |
| DELETE | `/suppression/spam_reports/{email}` | Delete a specific spam report |

##### Unsubscribe Groups (ASM) — `/asm/groups`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/asm/groups` | Get all suppression groups |
| POST | `/asm/groups` | Create a suppression group |
| GET | `/asm/groups/{group_id}` | Get a specific group |
| PATCH | `/asm/groups/{group_id}` | Update a group |
| DELETE | `/asm/groups/{group_id}` | Delete a group |

##### Suppressions per Group — `/asm/groups/{group_id}/suppressions`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/asm/groups/{group_id}/suppressions` | Get suppressions in a group |
| POST | `/asm/groups/{group_id}/suppressions` | Add emails to a group suppression |
| DELETE | `/asm/groups/{group_id}/suppressions/{email}` | Remove an email from a group |

##### Global Unsubscribes — `/asm/suppressions/global`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/asm/suppressions/global` | Get all global unsubscribes |
| POST | `/asm/suppressions/global` | Add global unsubscribes |
| GET | `/asm/suppressions/global/{email}` | Check if an email is globally unsubscribed |
| DELETE | `/asm/suppressions/global/{email}` | Remove a global unsubscribe |

---

#### 11. Statistics

##### Global Stats — `/stats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/stats` | Get global email stats |

Query parameters: `start_date` (required), `end_date`, `aggregated_by` (day/week/month).

**Example**:
```bash
curl --request GET \
  --url "https://api.sendgrid.com/v3/stats?start_date=2024-01-01&end_date=2024-01-31&aggregated_by=week" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

**Response**:
```json
[
  {
    "date": "2024-01-01",
    "stats": [
      {
        "metrics": {
          "requests": 15000,
          "delivered": 14850,
          "opens": 5200,
          "unique_opens": 3800,
          "clicks": 1200,
          "unique_clicks": 950,
          "bounces": 100,
          "spam_reports": 5,
          "unsubscribes": 15,
          "blocks": 50
        }
      }
    ]
  }
]
```

##### Category Stats — `/categories/stats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/categories/stats` | Get stats by category |
| GET | `/categories/stats/sums` | Get category stats sums |

##### Subuser Stats — `/subusers/stats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/subusers/stats` | Get stats by subuser |
| GET | `/subusers/stats/sums` | Get subuser stats sums |
| GET | `/subusers/stats/monthly` | Get monthly subuser stats |

##### Mailbox Provider Stats — `/mailbox_providers/stats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/mailbox_providers/stats` | Stats by mailbox provider (Gmail, Yahoo, etc.) |

##### Browser Stats — `/browsers/stats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/browsers/stats` | Stats by browser (for click events) |

##### Device Stats — `/devices/stats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/devices/stats` | Stats by device type (for open events) |

---

#### 12. Email Validation — `/validations/email`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/validations/email` | Validate a single email address in real time |

**Example**:
```bash
curl --request POST \
  --url "https://api.sendgrid.com/v3/validations/email" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"email": "test@example.com", "source": "signup"}'
```

**Response**:
```json
{
  "result": {
    "email": "test@example.com",
    "verdict": "Valid",
    "score": 0.95,
    "local": "test",
    "host": "example.com",
    "checks": {
      "domain": {"has_valid_address_syntax": true, "has_mx_or_a_record": true, "is_suspected_disposable_address": false},
      "local_part": {"is_suspected_role_address": false},
      "additional": {"has_known_bounces": false, "has_suspected_bounces": false}
    },
    "ip_address": "192.168.1.1"
  }
}
```

---

#### 13. Domain Authentication — `/whitelabel/domains`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/whitelabel/domains` | Get all authenticated domains |
| POST | `/whitelabel/domains` | Authenticate a new domain |
| GET | `/whitelabel/domains/{id}` | Get a specific domain |
| PATCH | `/whitelabel/domains/{id}` | Update a domain |
| DELETE | `/whitelabel/domains/{id}` | Delete a domain |
| POST | `/whitelabel/domains/{id}/validate` | Validate DNS for a domain |
| GET | `/whitelabel/domains/default` | Get the default domain |

DNS records required: CNAME records for DKIM signing, TXT record for SPF alignment.

---

#### 14. Link Branding — `/whitelabel/links`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/whitelabel/links` | Get all branded links |
| POST | `/whitelabel/links` | Create a branded link |
| GET | `/whitelabel/links/{id}` | Get a specific branded link |
| PATCH | `/whitelabel/links/{id}` | Update a branded link |
| DELETE | `/whitelabel/links/{id}` | Delete a branded link |
| POST | `/whitelabel/links/{id}/validate` | Validate DNS for a branded link |
| GET | `/whitelabel/links/default` | Get the default branded link |

---

#### 15. IP Management

##### IP Addresses — `/ips`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/ips` | Get all IP addresses |
| GET | `/ips/{ip_address}` | Get a specific IP |
| GET | `/ips/assigned` | Get all assigned IPs |
| GET | `/ips/remaining` | Get remaining IPs in your plan |

##### IP Pools — `/ips/pools`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/ips/pools` | Get all IP pools |
| POST | `/ips/pools` | Create an IP pool |
| GET | `/ips/pools/{pool_name}` | Get a specific pool |
| PUT | `/ips/pools/{pool_name}` | Update a pool name |
| DELETE | `/ips/pools/{pool_name}` | Delete a pool |
| POST | `/ips/pools/{pool_name}/ips` | Add an IP to a pool |
| DELETE | `/ips/pools/{pool_name}/ips/{ip}` | Remove an IP from a pool |

##### IP Warmup — `/ips/warmup`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/ips/warmup` | Get all IPs in warmup |
| POST | `/ips/warmup` | Start warming up an IP |
| GET | `/ips/warmup/{ip_address}` | Get warmup status for an IP |
| DELETE | `/ips/warmup/{ip_address}` | Remove an IP from warmup |

---

#### 16. API Keys — `/api_keys`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api_keys` | Get all API keys |
| POST | `/api_keys` | Create an API key |
| GET | `/api_keys/{api_key_id}` | Get a specific key |
| PUT | `/api_keys/{api_key_id}` | Update a key name and scopes |
| PATCH | `/api_keys/{api_key_id}` | Update a key name only |
| DELETE | `/api_keys/{api_key_id}` | Delete a key |

---

#### 17. Subusers — `/subusers`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/subusers` | Get all subusers |
| POST | `/subusers` | Create a subuser |
| GET | `/subusers/{subuser_name}` | Get a specific subuser |
| PATCH | `/subusers/{subuser_name}` | Enable/disable a subuser |
| DELETE | `/subusers/{subuser_name}` | Delete a subuser |

---

#### 18. Teammates — `/teammates`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/teammates` | Get all teammates |
| POST | `/teammates` | Invite a teammate |
| GET | `/teammates/{username}` | Get a specific teammate |
| PATCH | `/teammates/{username}` | Update teammate permissions |
| DELETE | `/teammates/{username}` | Delete a teammate |
| GET | `/teammates/pending` | Get all pending invites |
| DELETE | `/teammates/pending/{token}` | Cancel a pending invite |

---

#### 19. Event Webhooks — `/user/webhooks/event`

##### Webhook Settings

| Method | Endpoint | Description |
|---|---|---|
| GET | `/user/webhooks/event/settings` | Get event webhook settings |
| PATCH | `/user/webhooks/event/settings` | Update event webhook settings |
| POST | `/user/webhooks/event/test` | Send a test event to your URL |

##### Signed Webhooks

| Method | Endpoint | Description |
|---|---|---|
| PATCH | `/user/webhooks/event/settings/signed` | Toggle signed webhooks |
| GET | `/user/webhooks/event/settings/signed` | Get the public key for verification |

##### Event Types

| Event | Description |
|---|---|
| `processed` | Message has been received and is ready to be delivered |
| `dropped` | Message was not delivered (prior bounce, unsubscribe, etc.) |
| `delivered` | Message has been accepted by the receiving server |
| `deferred` | Receiving server temporarily rejected the message |
| `bounce` | Receiving server permanently rejected the message |
| `open` | Recipient opened the email |
| `click` | Recipient clicked a link in the email |
| `spam_report` | Recipient marked the email as spam |
| `unsubscribe` | Recipient clicked the unsubscribe link |
| `group_unsubscribe` | Recipient unsubscribed from a suppression group |
| `group_resubscribe` | Recipient resubscribed to a suppression group |

**Example — webhook event payloads**:

```json
[
  {
    "email": "recipient@example.com",
    "timestamp": 1706745600,
    "smtp-id": "<14c5d75ce93.dfd.64b469@ismtpd-555>",
    "event": "delivered",
    "category": ["onboarding"],
    "sg_event_id": "event-uuid-123",
    "sg_message_id": "14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
    "response": "250 2.0.0 OK",
    "ip": "168.1.1.1",
    "tls": 1,
    "cert_err": 0
  },
  {
    "email": "recipient@example.com",
    "timestamp": 1706745700,
    "smtp-id": "<14c5d75ce93.dfd.64b469@ismtpd-555>",
    "event": "open",
    "category": ["onboarding"],
    "sg_event_id": "event-uuid-456",
    "sg_message_id": "14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "ip": "203.0.113.1"
  },
  {
    "email": "recipient@example.com",
    "timestamp": 1706745800,
    "smtp-id": "<14c5d75ce93.dfd.64b469@ismtpd-555>",
    "event": "click",
    "category": ["onboarding"],
    "sg_event_id": "event-uuid-789",
    "sg_message_id": "14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
    "url": "https://example.com/welcome",
    "url_offset": {"index": 0, "type": "html"},
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "ip": "203.0.113.1"
  },
  {
    "email": "bounced@example.com",
    "timestamp": 1706745900,
    "smtp-id": "<14c5d75ce93.dfd.64b469@ismtpd-555>",
    "event": "bounce",
    "category": [],
    "sg_event_id": "event-uuid-abc",
    "sg_message_id": "14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
    "reason": "550 5.1.1 The email account that you tried to reach does not exist",
    "status": "5.1.1",
    "type": "bounce",
    "ip": "168.1.1.1",
    "tls": 1
  },
  {
    "email": "recipient@example.com",
    "timestamp": 1706746000,
    "smtp-id": "<14c5d75ce93.dfd.64b469@ismtpd-555>",
    "event": "spam_report",
    "category": [],
    "sg_event_id": "event-uuid-def",
    "sg_message_id": "14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0"
  },
  {
    "email": "recipient@example.com",
    "timestamp": 1706746100,
    "smtp-id": "<14c5d75ce93.dfd.64b469@ismtpd-555>",
    "event": "group_unsubscribe",
    "category": [],
    "sg_event_id": "event-uuid-ghi",
    "sg_message_id": "14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
    "asm_group_id": 12345,
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "ip": "203.0.113.1"
  }
]
```

**Example — configure event webhook**:
```bash
curl --request PATCH \
  --url "https://api.sendgrid.com/v3/user/webhooks/event/settings" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "enabled": true,
    "url": "https://yourapp.com/webhooks/sendgrid",
    "group_resubscribe": true,
    "delivered": true,
    "group_unsubscribe": true,
    "spam_report": true,
    "bounce": true,
    "deferred": true,
    "unsubscribe": true,
    "processed": true,
    "open": true,
    "click": true,
    "dropped": true
  }'
```

---

#### 20. Inbound Parse — `/user/webhooks/parse`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/user/webhooks/parse/settings` | Get all inbound parse settings |
| POST | `/user/webhooks/parse/settings` | Create an inbound parse setting |
| GET | `/user/webhooks/parse/settings/{hostname}` | Get a specific setting |
| PATCH | `/user/webhooks/parse/settings/{hostname}` | Update a setting |
| DELETE | `/user/webhooks/parse/settings/{hostname}` | Delete a setting |

When an email is received on the configured domain, SendGrid POSTs the following fields to your URL:

| Field | Description |
|---|---|
| `from` | Sender email (e.g., `Jane Doe <jane@example.com>`) |
| `to` | Recipient email |
| `subject` | Email subject line |
| `text` | Plain text body |
| `html` | HTML body |
| `sender_ip` | IP of the sending server |
| `envelope` | JSON string with SMTP envelope `to` and `from` |
| `attachments` | Number of attachments |
| `attachment1`, `attachment2`, etc. | File attachments (multipart) |
| `headers` | Raw email headers |
| `charsets` | JSON string of character sets for each field |
| `SPF` | SPF verification result |
| `DKIM` | DKIM verification keys and values |

---

#### 21. Sender Verification — `/verified_senders`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/verified_senders` | Get all verified senders |
| POST | `/verified_senders` | Create a verified sender |
| GET | `/verified_senders/{id}` | Get a specific verified sender |
| PATCH | `/verified_senders/{id}` | Update a verified sender |
| DELETE | `/verified_senders/{id}` | Delete a verified sender |
| POST | `/verified_senders/resend/{id}` | Resend verification email |
| GET | `/verified_senders/steps_completed` | Get verification completion steps |

---

#### 22. Email Activity — `/messages`

> **Important**: The Email Activity API requires an additional purchase on non-Premier plans.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/messages` | Search email activity with filters |
| GET | `/messages/{msg_id}` | Get a specific message |

**Query filters** (passed via `query` parameter):

Common filter fields: `to_email`, `from_email`, `subject`, `msg_id`, `status` (delivered, not_delivered, processing, deferred, bounce), `clicks`, `opens`, `last_event_time`.

**Example**:
```bash
curl --request GET \
  --url "https://api.sendgrid.com/v3/messages?query=to_email%3D%22jane%40example.com%22&limit=10" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

**Response**:
```json
{
  "messages": [
    {
      "from_email": "sender@example.com",
      "msg_id": "msg-uuid-123",
      "subject": "Hello from SendGrid",
      "to_email": "jane@example.com",
      "status": "delivered",
      "opens_count": 2,
      "clicks_count": 1,
      "last_event_time": "2024-01-31T15:30:00Z"
    }
  ]
}
```
