### Mailchimp APIs — Comprehensive Reference

Mailchimp exposes **two separate APIs**: the Marketing API for audience management, campaigns, and automations, and the Transactional API (Mandrill) for triggered transactional emails.

> **Note**: Some endpoint details below may be incomplete. Always check https://mailchimp.com/developer/ for the most current documentation.

---

## 1. Marketing API

**Base URL**: `https://<dc>.api.mailchimp.com/3.0/`
**Docs**: https://mailchimp.com/developer/marketing/

The `<dc>` placeholder is your data center prefix, derived from the suffix of your API key (e.g., if your key is `abc123def-us6`, the base URL is `https://us6.api.mailchimp.com/3.0/`).

---

### Authentication

| Method | Details |
|---|---|
| HTTP Basic Auth | Username: any string, Password: your API key |
| Bearer token | `Authorization: Bearer {API_KEY}` |
| OAuth 2 | Supported for third-party applications |

**API key format**: `{key}-{dc}` (e.g., `abc123def-us6`)
**Where to generate**: Account > Extras > API keys

**Example request (Basic Auth)**:
```bash
curl --request GET \
  --url "https://us6.api.mailchimp.com/3.0/lists" \
  --user "anystring:YOUR_API_KEY"
```

**Example request (Bearer)**:
```bash
curl --request GET \
  --url "https://us6.api.mailchimp.com/3.0/lists" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

---

### Rate Limits

- **10 concurrent connections** per API key
- Exceeding the limit returns HTTP `429 Too Many Requests`
- Use the Batch Operations endpoint (`/batches`) for high-volume operations

---

### Pagination

Offset-based pagination using query parameters:

| Parameter | Default | Max | Description |
|---|---|---|---|
| `offset` | 0 | — | Number of records to skip |
| `count` | 10 | 1000 | Number of records to return |

---

### Request & Response Format

- **Methods**: Standard REST — GET, POST, PUT, PATCH, DELETE
- **Content-Type**: `application/json`
- Responses return JSON objects with HAL-style `_links` for discoverability

### Error Responses

```json
{
  "type": "https://mailchimp.com/developer/marketing/docs/errors/",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "The requested resource could not be found.",
  "instance": "abc123-def456"
}
```

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid API key |
| 403 | Forbidden — insufficient permissions |
| 404 | Not found |
| 405 | Method not allowed |
| 414 | URI too long |
| 422 | Unprocessable entity — validation error |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |

---

### Endpoints

#### Lists / Audiences — `/lists`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lists` | Get all audiences |
| POST | `/lists` | Create an audience |
| GET | `/lists/{list_id}` | Get a specific audience |
| PATCH | `/lists/{list_id}` | Update an audience |
| DELETE | `/lists/{list_id}` | Delete an audience |

#### Members — `/lists/{list_id}/members`

The `{subscriber_hash}` is the MD5 hash of the member's lowercase email address.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lists/{list_id}/members` | List all members in an audience |
| POST | `/lists/{list_id}/members` | Add a new member |
| GET | `/lists/{list_id}/members/{subscriber_hash}` | Get a specific member |
| PUT | `/lists/{list_id}/members/{subscriber_hash}` | Add or update a member (upsert) |
| PATCH | `/lists/{list_id}/members/{subscriber_hash}` | Update a member |
| DELETE | `/lists/{list_id}/members/{subscriber_hash}` | Archive a member |
| POST | `/lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent` | Permanently delete a member |

#### Tags — `/lists/{list_id}/members/{subscriber_hash}/tags`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/lists/{list_id}/members/{subscriber_hash}/tags` | Add or remove tags from a member |

#### Segments — `/lists/{list_id}/segments`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lists/{list_id}/segments` | List all segments for an audience |
| POST | `/lists/{list_id}/segments` | Create a segment |
| PATCH | `/lists/{list_id}/segments/{segment_id}` | Update a segment |

#### Campaigns — `/campaigns`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns` | List all campaigns |
| POST | `/campaigns` | Create a campaign |
| GET | `/campaigns/{campaign_id}` | Get a specific campaign |
| PATCH | `/campaigns/{campaign_id}` | Update a campaign |
| DELETE | `/campaigns/{campaign_id}` | Delete a campaign |
| POST | `/campaigns/{campaign_id}/actions/send` | Send a campaign |
| POST | `/campaigns/{campaign_id}/actions/schedule` | Schedule a campaign |
| POST | `/campaigns/{campaign_id}/actions/test` | Send a test email |

#### Campaign Content — `/campaigns/{campaign_id}/content`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campaigns/{campaign_id}/content` | Get campaign content |
| PUT | `/campaigns/{campaign_id}/content` | Set campaign content |

#### Automations — `/automations`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/automations` | List all automations |
| GET | `/automations/{workflow_id}` | Get a specific automation |
| POST | `/automations/{workflow_id}/actions/start-all-emails` | Start all emails in an automation |
| POST | `/automations/{workflow_id}/actions/pause-all-emails` | Pause all emails in an automation |

#### Templates — `/templates`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/templates` | List all templates |
| POST | `/templates` | Create a template |
| GET | `/templates/{template_id}` | Get a specific template |
| PATCH | `/templates/{template_id}` | Update a template |
| DELETE | `/templates/{template_id}` | Delete a template |

#### Reports — `/reports`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/reports` | List all campaign reports |
| GET | `/reports/{campaign_id}` | Get a specific campaign report |
| GET | `/reports/{campaign_id}/open-details` | Get open details for a campaign |
| GET | `/reports/{campaign_id}/click-details` | Get click details for a campaign |
| GET | `/reports/{campaign_id}/unsubscribed` | Get unsubscribed members for a campaign |

#### Landing Pages — `/landing-pages`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/landing-pages` | List all landing pages |
| POST | `/landing-pages` | Create a landing page |

#### Batch Operations — `/batches`

Use batch operations to submit multiple API calls in a single request, ideal for high-volume operations that would otherwise hit rate limits.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/batches` | Start a batch operation |
| GET | `/batches` | List all batch operations |
| GET | `/batches/{batch_id}` | Get status of a batch operation |

#### Webhooks — `/lists/{list_id}/webhooks`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lists/{list_id}/webhooks` | List webhooks for an audience |
| POST | `/lists/{list_id}/webhooks` | Create a webhook for an audience |

**Supported webhook events**: `subscribe`, `unsubscribe`, `profile`, `cleaned`, `upemail`, `campaign`

#### File Manager — `/file-manager/files`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/file-manager/files` | List uploaded files |
| POST | `/file-manager/files` | Upload a file |

---

## 2. Transactional API (Mandrill)

**Base URL**: `https://mandrillapp.com/api/1.0/`
**Docs**: https://mailchimp.com/developer/transactional/

The Transactional API (powered by Mandrill) handles triggered, one-to-one transactional emails — order confirmations, password resets, notifications, etc.

---

### Authentication

The API key is passed in the JSON body of every request:

```json
{
  "key": "YOUR_TRANSACTIONAL_API_KEY"
}
```

---

### Request & Response Format

- **All endpoints use POST** — there are no GET, PUT, PATCH, or DELETE methods
- Append `.json` to the endpoint path (e.g., `/messages/send.json`)
- **Content-Type**: `application/json`

**Example request**:
```bash
curl --request POST \
  --url "https://mandrillapp.com/api/1.0/messages/send.json" \
  --header "Content-Type: application/json" \
  --data '{
    "key": "YOUR_TRANSACTIONAL_API_KEY",
    "message": {
      "from_email": "sender@example.com",
      "to": [{"email": "recipient@example.com", "type": "to"}],
      "subject": "Order Confirmation",
      "html": "<p>Your order has shipped.</p>"
    }
  }'
```

---

### Endpoints

#### Messages — `/messages`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/messages/send.json` | Send a transactional email |
| POST | `/messages/send-template.json` | Send using a stored template |
| POST | `/messages/search.json` | Search sent messages |
| POST | `/messages/info.json` | Get info for a specific message |
| POST | `/messages/content.json` | Get full content of a sent message |

#### Templates — `/templates`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/templates/add.json` | Create a template |
| POST | `/templates/info.json` | Get template details |
| POST | `/templates/update.json` | Update a template |
| POST | `/templates/publish.json` | Publish a draft template |
| POST | `/templates/delete.json` | Delete a template |
| POST | `/templates/list.json` | List all templates |

#### Users — `/users`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/info.json` | Get account info and usage stats |
| POST | `/users/ping.json` | Test API key connectivity |

#### Tags — `/tags`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/tags/list.json` | List all tags |
| POST | `/tags/info.json` | Get detailed info for a tag |
| POST | `/tags/time-series.json` | Get time-series stats for a tag |

#### Webhooks — `/webhooks`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/webhooks/list.json` | List all webhooks |
| POST | `/webhooks/add.json` | Add a webhook |
| POST | `/webhooks/info.json` | Get webhook details |
| POST | `/webhooks/update.json` | Update a webhook |
| POST | `/webhooks/delete.json` | Delete a webhook |

**Supported webhook events**: `send`, `deferral`, `hard_bounce`, `soft_bounce`, `delivered`, `open`, `click`, `spam`, `unsub`, `reject`

#### Senders — `/senders`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/senders/list.json` | List all sender addresses |
| POST | `/senders/info.json` | Get info for a sender address |
| POST | `/senders/domains.json` | List all sender domains |

---

### SMTP Integration

As an alternative to the REST API, transactional emails can be sent via SMTP:

| Setting | Value |
|---|---|
| Host | `smtp.mandrillapp.com` |
| Port (STARTTLS) | 587 |
| Port (SSL) | 465 |
| Username | Any valid Mailchimp username |
| Password | Transactional API key |
