# SendPulse API Reference

## Overview

| Property | Value |
|----------|-------|
| Base URL | `https://api.sendpulse.com` |
| Auth | OAuth 2.0 (Client ID + Secret → bearer token) or static API key |
| Token lifetime | 1 hour (OAuth), permanent (API key) |
| Rate limit (Free) | 1,000 req/min · 500,000/day |
| Rate limit (Standard) | 2,000 req/min · 1,000,000/day |
| Rate limit (Enterprise) | 3,000 req/min · 3,000,000/day |
| Response format | JSON |
| SDKs | PHP, Python, Ruby, Java, Node.js, C#, Go |
| MCP Server | [sendpulse/mcp-server](https://github.com/sendpulse/mcp-server) |

## Authentication

### OAuth 2.0 (recommended)

```
POST /oauth/access_token
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "client_id": "your-client-id",
  "client_secret": "your-client-secret"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Static API Key

Generate a permanent API key in Account Settings → API. Include in all requests:

```
Authorization: Bearer your-api-key
```

### Using the Token

```
Authorization: Bearer {access_token}
```

## Rate Limiting

| Plan | Per Minute | Per Day |
|------|-----------|---------|
| Free | 1,000 | 500,000 |
| Standard | 2,000 | 1,000,000 |
| Enterprise | 3,000 | 3,000,000 |

**Endpoint-specific limits:**

| Endpoint type | Per Hour | Per Second |
|--------------|----------|------------|
| SMTP | 3.6M–7.2M | 1,000–2,000 |
| SMS | 540K–720K | 150–200 |
| Events | 36K–72K | 10–20 |
| Other | 100–200 | — |

**Rate limit headers:**
- `x-sib-ratelimit-limit`
- `x-sib-ratelimit-remaining`
- `x-sib-ratelimit-reset`

When rate limited: `429 Too Many Requests`.

## Endpoints by Category

### Email Service

#### Mailing Lists

```
GET /addressbooks                          # List all mailing lists
POST /addressbooks                         # Create mailing list
GET /addressbooks/{id}                     # Get mailing list details
PUT /addressbooks/{id}                     # Update mailing list
DELETE /addressbooks/{id}                  # Delete mailing list
GET /addressbooks/{id}/emails              # Get contacts in list
POST /addressbooks/{id}/emails             # Add contacts to list
DELETE /addressbooks/{id}/emails           # Remove contacts from list
GET /addressbooks/{id}/variables           # Get list variables
POST /addressbooks/{id}/variables          # Create list variable
```

#### Campaigns

```
POST /campaigns                            # Create and send campaign
GET /campaigns/{id}                        # Get campaign details + stats
GET /campaigns                             # List campaigns
POST /campaigns/{id}/cancel                # Cancel scheduled campaign
POST /campaigns/{id}/test                  # Send test email
```

**Create campaign request:**
```json
{
  "sender_name": "Your Company",
  "sender_email": "hello@yourcompany.com",
  "subject": "Campaign subject",
  "body": "<html>...</html>",
  "list_id": 12345,
  "send_date": "2026-04-15 10:00:00",
  "name": "April Newsletter"
}
```

#### Templates

```
GET /templates                             # List all templates
GET /templates/{id}                        # Get template
POST /templates                            # Create template
PUT /templates/{id}                        # Update template
DELETE /templates/{id}                     # Delete template
```

#### Senders

```
GET /senders                               # List verified senders
POST /senders                              # Add sender address
DELETE /senders/{email}                    # Remove sender
POST /senders/{email}/activate             # Activate sender
```

#### Contacts

```
GET /emails/{email}                        # Get contact info
POST /emails/{email}                       # Update contact
DELETE /emails/{email}                     # Delete contact from all lists
GET /emails/{email}/statistic              # Get contact engagement stats
```

#### Tags

```
GET /tags                                  # List all tags
POST /addressbooks/{id}/emails/tags        # Assign tag to contacts
DELETE /addressbooks/{id}/emails/tags       # Remove tag from contacts
```

#### Blacklist

```
GET /blacklist                             # Get blacklisted emails
POST /blacklist                            # Add to blacklist
DELETE /blacklist                          # Remove from blacklist
```

### SMTP Service

```
POST /smtp/emails                          # Send transactional email
GET /smtp/emails                           # List sent emails
GET /smtp/emails/{id}                      # Get email details
GET /smtp/bounces                          # Get bounced emails
GET /smtp/unsubscribe                      # Get unsubscribed recipients
```

**Send transactional email:**
```json
{
  "email": {
    "subject": "Order Confirmation #1234",
    "from": {"name": "Store", "email": "orders@yourstore.com"},
    "to": [{"name": "Jane", "email": "jane@example.com"}],
    "html": "<html>Your order has been confirmed...</html>",
    "attachments": {"invoice.pdf": "base64-encoded-content"}
  }
}
```

### Automation 360

```
GET /flows                                 # List all flows
GET /flows/{id}                            # Get flow details
POST /flows/{id}/run                       # Manually trigger flow for contact
GET /flows/{id}/statistics                 # Get flow statistics
```

### Chatbots

Endpoints are platform-specific:

```
# Telegram
GET /messenger/telegram/contacts           # List Telegram subscribers
POST /messenger/telegram/send              # Send message

# Facebook
GET /messenger/facebook/contacts           # List Facebook subscribers
POST /messenger/facebook/send              # Send message

# WhatsApp
GET /messenger/whatsapp/contacts           # List WhatsApp subscribers
POST /messenger/whatsapp/send              # Send message (within 24hr window)
POST /messenger/whatsapp/send_template     # Send template message (outside window)

# Instagram
GET /messenger/instagram/contacts          # List Instagram subscribers
POST /messenger/instagram/send             # Send message

# Viber
GET /messenger/viber/contacts              # List Viber subscribers
POST /messenger/viber/send                 # Send message

# Live Chat
GET /messenger/livechat/contacts           # List live chat contacts
```

### SMS Service

```
POST /sms/send                             # Send SMS
GET /sms/campaigns                         # List SMS campaigns
GET /sms/campaigns/{id}                    # Get SMS campaign details
POST /sms/contacts/add                     # Add SMS contact
GET /sms/contacts                          # List SMS contacts
POST /sms/blacklist/add                    # Add to SMS blacklist
GET /sms/blacklist                         # Get SMS blacklist
```

**Send SMS:**
```json
{
  "sender": "YourCompany",
  "phones": ["+1234567890"],
  "body": "Your verification code is 1234",
  "route": {"US": "sms"}
}
```

### CRM

```
GET /crm/deals                             # List deals
POST /crm/deals                            # Create deal
PUT /crm/deals/{id}                        # Update deal
DELETE /crm/deals/{id}                     # Delete deal
GET /crm/pipelines                         # List pipelines
GET /crm/contacts                          # List CRM contacts
```

### Courses (EDU)

```
GET /edu/courses                           # List courses
POST /edu/courses                          # Create course
GET /edu/courses/{id}                      # Get course details
GET /edu/courses/{id}/students             # List enrolled students
POST /edu/courses/{id}/students            # Enroll student
```

### Web Push

```
POST /push/tasks                           # Send push notification
GET /push/tasks                            # List push campaigns
GET /push/tasks/{id}                       # Get push campaign details
GET /push/websites                         # List registered websites
GET /push/websites/{id}/subscribers        # List push subscribers
```

### Pop-ups

```
GET /popups                                # List pop-ups
GET /popups/{id}                           # Get pop-up details
GET /popups/{id}/statistics                # Get pop-up stats
```

### Email Verifier

```
POST /verifier                             # Verify single email
POST /verifier/mailing_lists/{id}          # Verify entire mailing list
GET /verifier/mailing_lists/{id}/status    # Check verification progress
```

### Account

```
GET /user/balance                          # Get account balance
GET /user/balance/detail                   # Detailed balance info
```

## Webhooks

### Email Service Events
- `email_delivered` — email delivered to recipient
- `email_opened` — recipient opened email
- `email_clicked` — recipient clicked link
- `email_bounced` — email bounced (hard/soft)
- `email_spam` — marked as spam
- `email_unsubscribed` — recipient unsubscribed
- `campaign_sent` — campaign finished sending

### SMTP Events
- `smtp_delivered`, `smtp_opened`, `smtp_clicked`, `smtp_bounced`, `smtp_unsubscribed`

### Chatbot Events
- `chatbot_subscribed` — new chatbot subscriber
- `chatbot_message` — message received
- `chatbot_livechat` — live chat session started
- `chatbot_trigger` — flow trigger activated
- `chatbot_redirect` — redirect action executed
- `chatbot_blocked` — subscriber blocked bot

### Webhook Management

```
GET /webhooks                              # List webhooks
POST /webhooks                             # Create webhook
PUT /webhooks/{id}                         # Update webhook
DELETE /webhooks/{id}                      # Delete webhook
```

**Create webhook:**
```json
{
  "url": "https://your-server.com/webhook",
  "events": ["email_delivered", "email_bounced", "email_spam"],
  "active": true
}
```

## Pagination

List endpoints support offset-based pagination:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `limit` | Results per page | 100 |
| `offset` | Skip N results | 0 |

## Error Handling

| Status | Meaning |
|--------|---------|
| 200 | Success |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid or expired token |
| 404 | Not Found — resource doesn't exist |
| 429 | Rate Limited — slow down |
| 500 | Server Error — retry with backoff |

## Common Patterns

### Token refresh middleware (Python)

```python
import requests
import time

class SendPulseClient:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.token = None
        self.token_expires = 0

    def authenticate(self):
        resp = requests.post("https://api.sendpulse.com/oauth/access_token", json={
            "grant_type": "client_credentials",
            "client_id": self.client_id,
            "client_secret": self.client_secret
        })
        data = resp.json()
        self.token = data["access_token"]
        self.token_expires = time.time() + 3500

    def request(self, method, endpoint, **kwargs):
        if time.time() > self.token_expires:
            self.authenticate()
        headers = {"Authorization": f"Bearer {self.token}"}
        return requests.request(method, f"https://api.sendpulse.com{endpoint}",
                                headers=headers, **kwargs)
```

## Gaps & Limitations

- **Viber API**: Endpoint documentation is limited — send/receive basic messages, but advanced features may require the platform UI.
- **Course API**: EDU endpoints are newer and may not cover all course builder features available in the UI.
- **Chatbot flow management**: Creating/editing chatbot flows via API is limited — most flow building is done in the UI. API is primarily for sending messages and managing subscribers.
