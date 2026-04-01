# Kit API Reference

## Overview

- **Base URL**: `https://api.kit.com/v4/`
- **Legacy URL**: `https://api.convertkit.com/v3/` (deprecated, still functional)
- **Authentication**: OAuth 2.0 with PKCE flow (for apps) or API key (for personal/simple integrations)
- **Rate limit**: 120 requests per rolling 60-second window per API key
- **Pagination**: Cursor-based (v4)
- **Content-Type**: `application/json`
- **Developer docs**: https://developers.kit.com/v4

## Authentication

### OAuth 2.0 (recommended for apps)

Register an OAuth app at `https://app.kit.com/account_settings/advanced_settings`.

```
Authorization URL: https://app.kit.com/oauth/authorize
Token URL:         https://app.kit.com/oauth/token
Grant type:        Authorization Code with PKCE
```

Include the access token in requests:
```
Authorization: Bearer {access_token}
```

### API Key (simple integrations)

Find your API key in Kit → Settings → Advanced. Include as a query parameter or header (check current docs for exact method).

## Subscribers

### List subscribers
```
GET /v4/subscribers
```
Query params: `page`, `sort_field`, `sort_order`, `status` (active, inactive, bounced, complained, cancelled), `email_address`, `created_after`, `created_before`, `updated_after`, `updated_before`

### Get a subscriber
```
GET /v4/subscribers/{id}
```

### Create a subscriber (upsert)
```
POST /v4/subscribers
```
```json
{
  "email_address": "jane@example.com",
  "first_name": "Jane",
  "state": "active",
  "fields": {
    "company": "Acme Inc"
  }
}
```
If the email already exists, the subscriber is updated (upsert behavior).

### Update a subscriber
```
PUT /v4/subscribers/{id}
```

### Unsubscribe
```
POST /v4/subscribers/{id}/unsubscribe
```

### Bulk create subscribers
```
POST /v4/bulk/subscribers
```
```json
{
  "subscribers": [
    {"email_address": "jane@example.com", "first_name": "Jane"},
    {"email_address": "john@example.com", "first_name": "John"}
  ]
}
```
Processed asynchronously. Returns a bulk operation ID.

### List tags for a subscriber
```
GET /v4/subscribers/{id}/tags
```

## Tags

### List tags
```
GET /v4/tags
```

### Create a tag
```
POST /v4/tags
```
```json
{
  "name": "purchased-ebook"
}
```

### Tag a subscriber
```
POST /v4/tags/{tag_id}/subscribers
```
```json
{
  "email_address": "jane@example.com"
}
```

### Remove tag from subscriber
```
DELETE /v4/tags/{tag_id}/subscribers/{subscriber_id}
```

### Bulk tag subscribers
```
POST /v4/bulk/tags/{tag_id}/subscribers
```

## Broadcasts

### List broadcasts
```
GET /v4/broadcasts
```

### Get a broadcast
```
GET /v4/broadcasts/{id}
```

### Create a broadcast
```
POST /v4/broadcasts
```
```json
{
  "subject": "My Newsletter Issue #42",
  "content": "<p>Hello {{ subscriber.first_name }}</p>",
  "email_template_id": "template_id",
  "send_at": "2025-01-15T10:00:00Z"
}
```

### Update a broadcast
```
PUT /v4/broadcasts/{id}
```

### Delete a broadcast
```
DELETE /v4/broadcasts/{id}
```

### Get broadcast stats
```
GET /v4/broadcasts/{id}/stats
```
Returns: recipients, open_rate, click_rate, unsubscribes, complaints, revenue.

## Sequences

### List sequences
```
GET /v4/sequences
```

### Add subscriber to a sequence
```
POST /v4/sequences/{id}/subscribers
```
```json
{
  "email_address": "jane@example.com"
}
```

### Bulk add to sequence
```
POST /v4/bulk/sequences/{id}/subscribers
```

## Forms

### List forms
```
GET /v4/forms
```

### Add subscriber to a form
```
POST /v4/forms/{id}/subscribers
```
```json
{
  "email_address": "jane@example.com",
  "first_name": "Jane"
}
```

### Bulk add to form
```
POST /v4/bulk/forms/{id}/subscribers
```

## Custom Fields

### List custom fields
```
GET /v4/custom_fields
```

### Create a custom field
```
POST /v4/custom_fields
```
```json
{
  "label": "Company"
}
```

### Update a custom field
```
PUT /v4/custom_fields/{id}
```

### Delete a custom field
```
DELETE /v4/custom_fields/{id}
```

## Segments

### List segments
```
GET /v4/segments
```

## Purchases

### Create a purchase
```
POST /v4/purchases
```
```json
{
  "email_address": "jane@example.com",
  "transaction_id": "txn_123",
  "products": [
    {
      "name": "Ebook: Creator Guide",
      "pid": "prod_123",
      "lid": "line_123",
      "quantity": 1,
      "unit_price": 29.00
    }
  ],
  "currency": "USD",
  "transaction_time": "2025-01-15T10:00:00Z",
  "subtotal": 29.00
}
```

### List purchases
```
GET /v4/purchases
```

### Get a purchase
```
GET /v4/purchases/{id}
```

## Account

### Get current account
```
GET /v4/account
```
Returns: name, plan_type, primary_email_address, subscriber_count.

### Get email stats
```
GET /v4/account/email_stats
```

### Get growth stats
```
GET /v4/account/growth_stats
```
Returns subscriber growth data for the last 90 days.

## Webhooks

### Create a webhook
```
POST /v4/automations/hooks
```
```json
{
  "target_url": "https://your-app.com/webhooks/kit",
  "event": {
    "name": "subscriber.subscriber_activate"
  }
}
```

### List webhooks
```
GET /v4/automations/hooks
```

### Delete a webhook
```
DELETE /v4/automations/hooks/{id}
```

### Webhook events

| Event | Fires when |
|---|---|
| `subscriber.subscriber_activate` | Subscriber confirms opt-in |
| `subscriber.subscriber_unsubscribe` | Subscriber unsubscribes |
| `subscriber.subscriber_bounce` | Email bounces |
| `subscriber.subscriber_complain` | Spam complaint received |
| `subscriber.form_subscribe` | Subscriber opts in via form |
| `subscriber.course_subscribe` | Subscriber added to sequence |
| `subscriber.course_complete` | Subscriber completes sequence |

## Pagination (v4)

All list endpoints use cursor-based pagination:

```json
{
  "data": [...],
  "pagination": {
    "has_previous_page": false,
    "has_next_page": true,
    "start_cursor": "abc123",
    "end_cursor": "xyz789"
  }
}
```

Use `?after={end_cursor}` for the next page, `?before={start_cursor}` for the previous page.

## Error handling

| Status | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 204 | No content (successful delete) |
| 401 | Unauthorized — invalid or expired token |
| 404 | Resource not found |
| 422 | Validation error — check response body for details |
| 429 | Rate limited — wait and retry |
| 500 | Server error |

Rate limit headers:
```
X-RateLimit-Limit: 120
X-RateLimit-Remaining: 115
X-RateLimit-Reset: 1705312800
```

## Notes

- **v3 → v4 migration**: v3 at `api.convertkit.com` is deprecated. Key differences: v4 uses cursor pagination (not page-based), OAuth 2.0 (not just API key), and `api.kit.com` domain.
- **Bulk operations**: Processed asynchronously. Poll the returned operation ID for status.
- **Webhook payloads**: Event name + subscriber object. Exact payload schema not fully documented — test with a webhook inspector.
- **Liquid templating**: Email content supports Liquid syntax (`{{ subscriber.first_name }}`, `{% if %}` blocks).
