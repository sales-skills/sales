### Postmark APIs — Comprehensive Reference

Postmark provides a REST API for transactional email sending, bounce management, templates, inbound processing, message streams, statistics, webhooks, and account administration.

> **Note**: Some newer endpoints (e.g., Bulk API) may not be fully documented here. Always check https://postmarkapp.com/developer for the most current documentation.

---

## Base URL

```
https://api.postmarkapp.com
```

---

### Authentication

Postmark uses two token types, passed as HTTP headers:

| Token | Header | Scope |
|---|---|---|
| Server Token | `X-Postmark-Server-Token` | Server-level privileges — sending, managing email, server config |
| Account Token | `X-Postmark-Account-Token` | Account-level privileges — managing servers, domains, account settings |

**Test token**: Use the literal string `POSTMARK_API_TEST` as a server token to test API calls without sending real emails.

**Required headers on all requests**:
- `Accept: application/json`
- `Content-Type: application/json`

**Example request**:
```bash
curl --request POST \
  --url "https://api.postmarkapp.com/email" \
  --header "X-Postmark-Server-Token: YOUR_SERVER_TOKEN" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{"From":"sender@example.com","To":"recipient@example.com","Subject":"Hello","TextBody":"Hello world"}'
```

---

### Rate Limits

- No strict published rate limits; excessive requests return HTTP `429 Too Many Requests`
- **Quality requirements**: Spam complaint rate must stay below 0.1%, bounce rate below 10%
- **Single email payload limit**: 10 MB (including attachments)
- **Batch payload limit**: 50 MB

---

### Request & Response Format

- **Methods**: Standard REST — GET, POST, PUT, PATCH, DELETE
- **Content-Type**: `application/json`
- Responses return JSON objects with standard HTTP status codes

### Error Responses

```json
{
  "ErrorCode": 300,
  "Message": "Invalid 'From' address: 'sender@example.com'."
}
```

Postmark defines 70+ error codes. The `ErrorCode` field identifies the specific error, and `Message` provides human-readable details.

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 401 | Unauthorized — invalid or missing token |
| 404 | Not found |
| 413 | Payload too large (exceeds size limit) |
| 415 | Unsupported media type — missing required headers |
| 422 | Unprocessable entity — invalid data |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

### Endpoints

---

#### 1. Email API — `/email`

The core transactional email sending endpoints.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/email` | Send a single email |
| POST | `/email/batch` | Send a batch of up to 500 emails |

**Request body fields** (single email):

| Field | Type | Required | Description |
|---|---|---|---|
| `From` | string | Yes | Sender email (must match a confirmed sender signature) |
| `To` | string | Yes | Recipient(s), comma-separated (max 50) |
| `Subject` | string | No | Email subject line |
| `HtmlBody` | string | Yes* | HTML email body (*at least one of HtmlBody or TextBody required) |
| `TextBody` | string | Yes* | Plain text email body (*at least one of HtmlBody or TextBody required) |
| `Cc` | string | No | CC recipients, comma-separated |
| `Bcc` | string | No | BCC recipients, comma-separated |
| `Tag` | string | No | Tag for categorizing the message |
| `ReplyTo` | string | No | Reply-to email address |
| `Headers` | array | No | Custom email headers (`[{"Name":"X-Custom","Value":"value"}]`) |
| `TrackOpens` | boolean | No | Enable open tracking |
| `TrackLinks` | string | No | Link tracking mode: `None`, `HtmlAndText`, `HtmlOnly`, `TextOnly` |
| `Metadata` | object | No | Key-value metadata attached to the message |
| `Attachments` | array | No | File attachments |
| `MessageStream` | string | No | Message stream ID (defaults to `"outbound"`) |

**Attachment object fields**:

| Field | Type | Description |
|---|---|---|
| `Name` | string | Filename |
| `Content` | string | Base64-encoded file content |
| `ContentType` | string | MIME type |
| `ContentID` | string | Optional content ID for inline images |

**Response fields**:

| Field | Type | Description |
|---|---|---|
| `To` | string | Recipient address |
| `SubmittedAt` | string | Timestamp of submission |
| `MessageID` | string | Unique message identifier |
| `ErrorCode` | number | 0 on success |
| `Message` | string | Status message |

---

#### 2. Template Email API — `/email/withTemplate`

Send emails using pre-built templates.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/email/withTemplate` | Send a single templated email |
| POST | `/email/batchWithTemplates` | Send a batch of templated emails |

**Request body fields**:

| Field | Type | Required | Description |
|---|---|---|---|
| `TemplateId` | number | Yes* | Template ID (*or use `TemplateAlias`) |
| `TemplateAlias` | string | Yes* | Template alias (*or use `TemplateId`) |
| `TemplateModel` | object | Yes | Key-value data to populate template variables |
| `From` | string | Yes | Sender email |
| `To` | string | Yes | Recipient(s) |
| `Cc` | string | No | CC recipients |
| `Bcc` | string | No | BCC recipients |
| `Tag` | string | No | Categorization tag |
| `ReplyTo` | string | No | Reply-to address |
| `Headers` | array | No | Custom headers |
| `TrackOpens` | boolean | No | Open tracking |
| `TrackLinks` | string | No | Link tracking mode |
| `Metadata` | object | No | Key-value metadata |
| `Attachments` | array | No | File attachments |
| `MessageStream` | string | No | Message stream ID |

---

#### 3. Bounce API — `/bounces`

Manage bounced emails and delivery statistics.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/bounces` | List bounces (with filters) |
| GET | `/bounces/{bounceID}` | Get a single bounce |
| GET | `/deliverystats` | Get delivery stats with bounce type breakdown |
| PUT | `/bounces/{bounceID}/activate` | Reactivate a bounced recipient |

---

#### 4. Templates API — `/templates`

Create and manage email templates.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/templates` | Create a new template |
| GET | `/templates` | List templates |
| GET | `/templates/{templateID}` | Get a template |
| PUT | `/templates/{templateID}` | Update a template |
| DELETE | `/templates/{templateID}` | Delete a template |
| POST | `/templates/validate` | Validate template content and variables |

---

#### 5. Server API — `/server`

Manage the current server's configuration. Uses server-level token.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/server` | Get current server configuration |
| PUT | `/server` | Update server configuration |

---

#### 6. Servers API (Account-Level) — `/servers`

Manage multiple servers across the account. Requires account-level token.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/servers` | List all servers |
| POST | `/servers` | Create a new server |
| GET | `/servers/{serverID}` | Get a server |
| PUT | `/servers/{serverID}` | Update a server |
| DELETE | `/servers/{serverID}` | Delete a server |

---

#### 7. Message Streams API — `/message-streams`

Manage message streams for separating transactional, broadcast, and inbound mail.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/message-streams` | List all message streams |
| POST | `/message-streams` | Create a message stream |
| GET | `/message-streams/{streamID}` | Get a message stream |
| PATCH | `/message-streams/{streamID}` | Update a message stream |
| POST | `/message-streams/{streamID}/archive` | Archive a message stream |
| POST | `/message-streams/{streamID}/unarchive` | Unarchive a message stream |

---

#### 8. Messages API — `/messages`

Search and inspect sent and received messages.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/messages/outbound` | Search outbound messages |
| GET | `/messages/outbound/{messageID}/details` | Get outbound message details |
| GET | `/messages/outbound/{messageID}/dump` | Get raw MIME dump of outbound message |
| GET | `/messages/inbound` | Search inbound messages |
| GET | `/messages/inbound/{messageID}/details` | Get inbound message details |
| PUT | `/messages/inbound/{messageID}/retry` | Retry a failed inbound message webhook |

---

#### 9. Webhooks API — `/webhooks`

Configure webhook endpoints for real-time event notifications.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/webhooks` | List all webhooks |
| POST | `/webhooks` | Create a webhook |
| GET | `/webhooks/{webhookID}` | Get a webhook |
| PUT | `/webhooks/{webhookID}` | Update a webhook |
| DELETE | `/webhooks/{webhookID}` | Delete a webhook |

**Supported webhook event types**: Bounce, Delivery, Open, Click, SpamComplaint, SubscriptionChange, Inbound.

---

#### 10. Stats API — `/stats`

Retrieve sending statistics and analytics.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/stats/outbound` | Aggregate outbound stats |
| GET | `/stats/outbound/sends` | Send counts |
| GET | `/stats/outbound/bounces` | Bounce counts |
| GET | `/stats/outbound/spam` | Spam complaint counts |
| GET | `/stats/outbound/tracked` | Tracked email counts |
| GET | `/stats/outbound/opens` | Open counts |
| GET | `/stats/outbound/clicks` | Click counts |
| GET | `/stats/outbound/opens/platforms` | Opens broken down by platform |
| GET | `/stats/outbound/opens/emailclients` | Opens broken down by email client |
| GET | `/stats/outbound/clicks/location` | Clicks broken down by location |
| GET | `/stats/outbound/clicks/platforms` | Clicks broken down by platform |

---

#### 11. Suppressions API — `/message-streams/{streamID}/suppressions`

Manage suppression lists per message stream.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/message-streams/{streamID}/suppressions/dump` | List all suppressions for a stream |
| POST | `/message-streams/{streamID}/suppressions` | Add suppressions |
| POST | `/message-streams/{streamID}/suppressions/delete` | Remove suppressions |

---

#### 12. Inbound Rules API — `/triggers/inboundrules`

Manage rules for blocking inbound email processing.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/triggers/inboundrules` | List inbound rules |
| POST | `/triggers/inboundrules` | Create an inbound rule |
| DELETE | `/triggers/inboundrules/{ruleID}` | Delete an inbound rule |

---

#### 13. Sender Signatures API — `/senders`

Manage verified sender identities.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/senders` | List sender signatures |
| POST | `/senders` | Create a sender signature |
| GET | `/senders/{signatureID}` | Get a sender signature |
| PUT | `/senders/{signatureID}` | Update a sender signature |
| DELETE | `/senders/{signatureID}` | Delete a sender signature |
| POST | `/senders/{signatureID}/resend` | Resend signature confirmation email |

---

#### 14. Domains API — `/domains`

Manage authenticated sending domains. Requires account-level token.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/domains` | List domains |
| POST | `/domains` | Create a domain |
| GET | `/domains/{domainID}` | Get a domain |
| PUT | `/domains/{domainID}` | Update a domain |
| DELETE | `/domains/{domainID}` | Delete a domain |
| PUT | `/domains/{domainID}/verifyDkim` | Trigger DKIM verification |
| PUT | `/domains/{domainID}/verifyReturnPath` | Trigger return-path verification |

---

#### 15. Data Removal API — `/data-removals`

Request removal of recipient data for compliance.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/data-removals` | List data removal requests |
| POST | `/data-removals` | Create a data removal request |

---

### Webhook Event Payloads

All webhook payloads are JSON. The `RecordType` field identifies the event type.

---

#### Bounce Event

```json
{
  "RecordType": "Bounce",
  "Type": "HardBounce",
  "MessageID": "00000000-0000-0000-0000-000000000000",
  "Description": "The server was unable to deliver your message.",
  "Details": "smtp;550 5.1.1 The email account does not exist.",
  "Email": "recipient@example.com",
  "From": "sender@example.com",
  "BouncedAt": "2024-01-15T10:30:00.0000000Z",
  "Tag": "welcome-email",
  "MessageStream": "outbound"
}
```

Bounce types include: `HardBounce`, `SoftBounce`, `Transient`, `AutoResponder`, `AddressChange`, `DnsError`, `SpamNotification`, `ManuallyDeactivated`, `Unconfirmed`, `Blocked`, `SMTPApiError`, `InboundError`, `DMARCPolicy`, `TemplateRenderingFailed`.

---

#### Delivery Event

```json
{
  "RecordType": "Delivery",
  "MessageID": "00000000-0000-0000-0000-000000000000",
  "Recipient": "recipient@example.com",
  "Tag": "welcome-email",
  "DeliveredAt": "2024-01-15T10:30:05.0000000Z",
  "MessageStream": "outbound"
}
```

---

#### Open Event

```json
{
  "RecordType": "Open",
  "MessageID": "00000000-0000-0000-0000-000000000000",
  "Recipient": "recipient@example.com",
  "Tag": "welcome-email",
  "ReceivedAt": "2024-01-15T10:35:00.0000000Z",
  "Client": {
    "Name": "Gmail",
    "Company": "Google",
    "Family": "Gmail"
  },
  "OS": {
    "Name": "Windows 10",
    "Company": "Microsoft",
    "Family": "Windows"
  },
  "Platform": "Desktop",
  "UserAgent": "Mozilla/5.0",
  "Geo": {}
}
```

---

#### Click Event

```json
{
  "RecordType": "Click",
  "MessageID": "00000000-0000-0000-0000-000000000000",
  "Recipient": "recipient@example.com",
  "Tag": "welcome-email",
  "ReceivedAt": "2024-01-15T10:36:00.0000000Z",
  "ClickLocation": "HTML",
  "OriginalLink": "https://example.com/offer",
  "Client": {
    "Name": "Chrome",
    "Company": "Google",
    "Family": "Chrome"
  },
  "OS": {
    "Name": "Windows 10",
    "Company": "Microsoft",
    "Family": "Windows"
  },
  "Platform": "Desktop",
  "UserAgent": "Mozilla/5.0",
  "Geo": {}
}
```

---

#### SpamComplaint Event

```json
{
  "RecordType": "SpamComplaint",
  "MessageID": "00000000-0000-0000-0000-000000000000",
  "From": "sender@example.com",
  "Email": "recipient@example.com",
  "Tag": "welcome-email",
  "SpamComplainedAt": "2024-01-15T11:00:00.0000000Z"
}
```

---

#### SubscriptionChange Event

```json
{
  "RecordType": "SubscriptionChange",
  "MessageID": "00000000-0000-0000-0000-000000000000",
  "Recipient": "recipient@example.com",
  "SuppressSending": true,
  "Tag": "marketing",
  "MessageStream": "broadcast"
}
```

---

#### Inbound Event

```json
{
  "From": "sender@example.com",
  "FromFull": {
    "Email": "sender@example.com",
    "Name": "Sender Name"
  },
  "To": "inbound@yourdomain.com",
  "ToFull": [
    {
      "Email": "inbound@yourdomain.com",
      "Name": ""
    }
  ],
  "Subject": "Re: Your inquiry",
  "TextBody": "Plain text content",
  "HtmlBody": "<html><body>HTML content</body></html>",
  "Tag": "",
  "Headers": [
    {
      "Name": "Message-ID",
      "Value": "<message-id@example.com>"
    }
  ],
  "Attachments": [
    {
      "Name": "document.pdf",
      "Content": "base64-encoded-content",
      "ContentType": "application/pdf",
      "ContentLength": 48576
    }
  ]
}
```
