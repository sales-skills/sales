<!-- Source: https://developers.mailerlite.com/docs/ -->

# MailerLite API Reference

## Base URL
`https://connect.mailerlite.com/api`

## Authentication
Bearer token in Authorization header:
```
Authorization: Bearer YOUR_API_KEY
```
API keys are generated in MailerLite dashboard: Integrations > MailerLite API. Keys are permanently bound to the user who created them and become invalid if that user is removed.

## Required headers
```
Content-Type: application/json
Accept: application/json
```

## Rate limits
120 requests per minute globally. Exceeding returns 429 with headers:
- `X-RateLimit-Limit: 120`
- `X-RateLimit-Remaining`
- `Retry-After`

## Versioning
Override with `X-Version` header (date format, e.g., `2038-01-19`). Default uses latest.

## Official SDKs
PHP, Go, Node.js, Python, Ruby

---

## Subscribers

### List all subscribers
`GET /subscribers`
- `filter[status]`: active, unsubscribed, unconfirmed, bounced, junk
- `limit`: defaults to 25
- `cursor`: pagination
- `include`: "groups"

### Create/upsert subscriber
`POST /subscribers`
- `email` (required): RFC 2821 valid
- `fields` (optional): custom field data
- `groups` (optional): array of group IDs
- `status` (optional): active, unsubscribed, unconfirmed, bounced, junk
- `resubscribe` (optional, boolean): reactivate unsubscribed
- Returns 201 (new) or 200 (updated)

### Update subscriber
`PUT /subscribers/{id}`
- `fields`: additive updates
- `groups`: removes from unlisted groups

### Fetch subscriber
`GET /subscribers/{id_or_email}`

### Fetch total count
`GET /subscribers?limit=0` → returns `{"total": N}`

### Fetch subscriber activity
`GET /subscribers/{id}/activity-log`
- `filter[log_name]`: campaign_send, automation_email_sent, email_open, link_click, email_bounce, spam_complaint, unsubscribed, email_forward, marketing_preferences_change, preference_center
- `limit`: defaults to 100
- `page`: from 1

### Delete subscriber
`DELETE /subscribers/{id}` → 204

### Forget subscriber (GDPR)
`POST /subscribers/{id}/forget` → data deleted within 30 days

### Get single import
`GET /subscribers/import/{import_id}`

---

## Groups

### List all groups
`GET /groups`
- `filter[name]`: partial match
- `sort`: name, total, open_rate, click_rate, created_at (prepend `-` for desc)
- Max 1,000 groups per account

### Create group
`POST /groups` — `name` (required, max 255 chars)

### Update group
`PUT /groups/{id}` — `name` (required)

### Delete group
`DELETE /groups/{id}` → 204

### Get subscribers in group
`GET /groups/{id}/subscribers`
- `filter[status]`, `limit` (max 1000), `cursor`, `include`

### Assign subscriber to group
`POST /subscribers/{subscriber_id}/groups/{group_id}`

### Unassign subscriber from group
`DELETE /subscribers/{subscriber_id}/groups/{group_id}` → 204

### Bulk import to group
`POST /groups/{id}/import-subscribers`
- `subscribers` (array): each with `email` (required) + `fields` (optional)

---

## Segments

### List all segments
`GET /segments` — max 250 per account

### Get segment subscribers
`GET /segments/{id}/subscribers`
- `filter[status]`, `limit`, `after`, `cursor`

### Update segment
`PUT /segments/{id}` — `name` (required, max 255)

### Delete segment
`DELETE /segments/{id}` → 204

---

## Campaigns

### List campaigns
`GET /campaigns`
- `filter[status]`: sent, draft, ready
- `filter[type]`: regular, ab, resend, rss
- `limit`: 1-100 (default 25)
- `page`: from 1

### Get single campaign
`GET /campaigns/{id}`

### Create campaign
`POST /campaigns`
- `name` (required, max 255)
- `type` (required): regular, ab, resend, multivariate
- `emails` (array): subject, from_name, from, reply_to
- `groups` or `segments` (array)
- `ab_settings`, `resend_settings`, `multivariate_settings`

### Update campaign
`PUT /campaigns/{id}` — draft only

### Schedule campaign
`POST /campaigns/{id}/schedule`
- `delivery`: instant, scheduled, timezone_based, smart_sending
- `schedule`: date, hours, minutes, timezone_id

### Cancel campaign
`POST /campaigns/{id}/cancel` → reverts to draft

### Delete campaign
`DELETE /campaigns/{id}` → 204

### Get subscriber activity
`GET /campaigns/{id}/reports/subscriber-activity`
- `filter[type]`: opened, unopened, clicked, unsubscribed, forwarded, hardbounced, softbounced, junk

---

## Automations

### List automations
`GET /automations`
- `filter[enabled]`, `filter[name]`, `filter[group]`

### Get single automation
`GET /automations/{id}`

### Get subscriber activity
`GET /automations/{id}/activity`
- `filter[status]` (required): completed, active, canceled, failed

### Create draft automation
`POST /automations` — `name` (required) → creates empty draft

### Delete automation
`DELETE /automations/{id}` → 204

---

## Forms

### List forms by type
`GET /forms/{type}` — type: popup, embedded, promotion
- `filter[name]`, `sort`, `limit`, `page`

### Get form
`GET /forms/{id}`

### Update form
`PUT /forms/{id}` — `name` (required, max 255)

### Delete form
`DELETE /forms/{id}` → 204

### Get form subscribers
`GET /forms/{id}/subscribers`

---

## Fields

### List fields
`GET /fields`
- `filter[keyword]`, `filter[type]`: text, number, date
- Max 100 fields

### Create field
`POST /fields` — `name` (max 255), `type` (text/number/date)

### Update field
`PUT /fields/{id}` — `name`

### Delete field
`DELETE /fields/{id}` → 204

---

## Webhooks

### Events
- `subscriber.created`, `subscriber.updated`, `subscriber.unsubscribed`
- `subscriber.added_to_group`, `subscriber.removed_from_group`
- `subscriber.bounced`, `subscriber.automation_triggered`, `subscriber.automation_completed`
- `subscriber.spam_reported`, `subscriber.deleted` (requires batchable: true)
- `subscriber.active`
- `campaign.sent`, `campaign.click` (requires batchable: true), `campaign.open` (requires batchable: true)

### Security
Signature header: HMAC SHA256 of JSON payload using webhook secret.
```php
hash_hmac('sha256', $jsonPayload, $secret)
```

### Retry logic
3 retries on failure: 10s, 100s, 1000s delay. Must return 2XX within 3 seconds.

### List webhooks
`GET /webhooks`

### Create webhook
`POST /webhooks`
- `events` (required, array), `url` (required)
- `name`, `enabled`, `batchable` (optional)

### Update webhook
`PUT /webhooks/{id}`

### Delete webhook
`DELETE /webhooks/{id}` → 204

---

## Batching

### Batch request
`POST /batch`
- `requests` (array, max 50): each with `method`, `path` (starts with `api/`), `body` (optional)
- Order preserved in response
- Webhooks not supported in batch requests
- Partial failures don't stop the batch

---

## E-commerce API

### Shops
- `GET /ecommerce/shops` — list
- `POST /ecommerce/shops` — create (name, url, currency required; platform, group_id, enable_popups, enabled, access_data optional)
- `PUT /ecommerce/shops/{id}` — update
- `GET /ecommerce/shops/{id}` — fetch
- `DELETE /ecommerce/shops/{id}` — delete
- `GET /ecommerce/shops?limit=0` — count

### Additional e-commerce endpoints (documented separately)
- Cart API, Cart Items API
- Categories API, Categories Products API
- Customers API, Import API
- Orders API, Products API

---

## Response codes
200 OK, 201 Created, 202 Accepted, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 408 Timeout, 422 Unprocessable Entity, 429 Rate Limited, 500/502/503/504 Server Error
