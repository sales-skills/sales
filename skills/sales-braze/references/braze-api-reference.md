# Braze API Reference

## Overview

- **Base URL**: `https://rest.{instance}.braze.com` — instance-specific (e.g., `iad-01`, `iad-02`, `fra-01`, `fra-02`)
- **Protocol**: REST over HTTPS
- **Auth**: Bearer token — `Authorization: Bearer YOUR_REST_API_KEY`
- **Format**: JSON request and response bodies
- **Content-Type**: `application/json`
- **Rate limit**: 250,000 requests/hour default (some endpoints have custom limits)
- **Pagination**: Cursor-based using `page` parameter or `next_uri` in response
- **SDKs**: iOS (Swift/Obj-C), Android (Kotlin/Java), Web (JS), React Native, Flutter, Unity, Roku, Unreal Engine

## Authentication

### API Key Setup
Dashboard → Settings → APIs and Identifiers → Create New API Key.

Each key has granular permissions scoped to specific endpoint groups. Use principle of least privilege — only enable permissions the key needs.

### Request Format
```
curl -X POST "https://rest.iad-01.braze.com/users/track" \
  -H "Authorization: Bearer YOUR_REST_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"attributes": [{"external_id": "user123", "first_name": "John"}]}'
```

## HTTP Status Codes

| Code | Meaning |
|---|---|
| 200 | OK — request succeeded |
| 201 | Created — resource created |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 403 | Forbidden — key lacks required permission |
| 404 | Not Found — resource doesn't exist |
| 429 | Rate Limit Exceeded — back off and retry |
| 500 | Internal Server Error |

## Error Response Format

```json
{
  "message": "Description of error",
  "errors": ["specific error detail"]
}
```

---

## User Data

### Track users (attributes, events, purchases)
`POST /users/track`

The primary endpoint for ingesting user data. Supports up to 75 attributes, 75 events, and 75 purchases per request.

```json
{
  "attributes": [
    {
      "external_id": "user123",
      "first_name": "John",
      "email": "john@example.com",
      "custom_attribute": "value"
    }
  ],
  "events": [
    {
      "external_id": "user123",
      "name": "completed_purchase",
      "time": "2024-01-15T10:30:00Z",
      "properties": {"product_id": "SKU123", "price": 49.99}
    }
  ],
  "purchases": [
    {
      "external_id": "user123",
      "product_id": "SKU123",
      "currency": "USD",
      "price": 49.99,
      "time": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Identify users
`POST /users/identify`

Merge anonymous user profile with identified profile.

```json
{
  "aliases_to_identify": [
    {
      "external_id": "user123",
      "user_alias": {"alias_name": "anon_abc", "alias_label": "anonymous"}
    }
  ]
}
```

### Create user aliases
`POST /users/alias/new`

### Delete users
`POST /users/delete`

Delete user profiles by external_id, braze_id, or user_alias. Up to 50 per request.

### Merge users
`POST /users/merge`

Merge two user profiles into one.

### Export user data
`POST /users/export/ids`

Export user profiles by external_id or braze_id.

```json
{
  "external_ids": ["user123", "user456"],
  "fields_to_export": ["first_name", "email", "custom_events", "purchases"]
}
```

`POST /users/export/segment`

Export all users in a segment (async — triggers a file export).

### Global control group
`POST /users/export/global_control_group`

Export users in the global control group.

---

## Messaging

### Send messages immediately
`POST /messages/send`

Send a one-off message to specific users without a campaign.

```json
{
  "external_user_ids": ["user123"],
  "messages": {
    "email": {
      "app_id": "APP_ID",
      "from": "hello@example.com",
      "subject": "Welcome!",
      "body": "<html>...</html>"
    },
    "apple_push": {
      "alert": "Welcome to our app!",
      "badge": 1
    }
  }
}
```

### Schedule messages
`POST /messages/schedule/create`
`POST /messages/schedule/update`
`POST /messages/schedule/delete`

### API-triggered campaign send
`POST /campaigns/trigger/send`

Trigger a pre-built campaign via API with dynamic properties.

```json
{
  "campaign_id": "CAMPAIGN_ID",
  "recipients": [
    {
      "external_user_id": "user123",
      "trigger_properties": {"order_id": "A-12345", "total": "$99.00"}
    }
  ]
}
```

### API-triggered Canvas send
`POST /canvas/trigger/send`

```json
{
  "canvas_id": "CANVAS_ID",
  "recipients": [
    {
      "external_user_id": "user123",
      "canvas_entry_properties": {"signup_source": "web"}
    }
  ]
}
```

### Schedule API-triggered campaigns
`POST /campaigns/trigger/schedule/create`
`POST /campaigns/trigger/schedule/update`
`POST /campaigns/trigger/schedule/delete`

### Schedule API-triggered Canvas
`POST /canvas/trigger/schedule/create`
`POST /canvas/trigger/schedule/update`
`POST /canvas/trigger/schedule/delete`

### Transactional email
`POST /transactional/v1/campaigns/{campaign_id}/send`

Dedicated endpoint for time-sensitive 1:1 transactional emails with delivery SLA guarantees.

```json
{
  "external_send_id": "txn_order_123",
  "trigger_properties": {"order_id": "A-12345"},
  "recipient": {
    "external_user_id": "user123"
  }
}
```

---

## Campaigns

### List campaigns
`GET /campaigns/list?page=0&include_archived=false`

### Campaign details
`GET /campaigns/details?campaign_id={id}`

### Campaign analytics
`GET /campaigns/data_series?campaign_id={id}&length=14`

---

## Canvas

### List Canvas
`GET /canvas/list?page=0&include_archived=false`

### Canvas details
`GET /canvas/details?canvas_id={id}`

### Canvas analytics
`GET /canvas/data_series?canvas_id={id}&length=14`
`GET /canvas/data_summary?canvas_id={id}&length=30`

---

## Segments

### List segments
`GET /segments/list?page=0`

### Segment details
`GET /segments/details?segment_id={id}`

### Segment analytics
`GET /segments/data_series?segment_id={id}&length=14`

---

## Templates

### Email templates
`POST /templates/email/create`
`PUT /templates/email/update`
`GET /templates/email/info?email_template_id={id}`
`GET /templates/email/list`

### Content Blocks
`POST /content_blocks/create`
`PUT /content_blocks/update`
`GET /content_blocks/info?content_block_id={id}`
`GET /content_blocks/list`

---

## Catalogs

### Manage catalogs
`POST /catalogs` — Create catalog
`GET /catalogs` — List catalogs
`DELETE /catalogs/{catalog_name}` — Delete catalog

### Catalog items
`POST /catalogs/{catalog_name}/items` — Create items (up to 50 per request)
`PATCH /catalogs/{catalog_name}/items` — Update items
`DELETE /catalogs/{catalog_name}/items` — Delete items
`GET /catalogs/{catalog_name}/items` — List items
`GET /catalogs/{catalog_name}/items/{item_id}` — Get single item

### Catalog fields
`POST /catalogs/{catalog_name}/fields` — Create fields

### Async catalog operations
`POST /catalogs/{catalog_name}/items/async` — Bulk create (up to 10,000 items)
`PATCH /catalogs/{catalog_name}/items/async` — Bulk update
`DELETE /catalogs/{catalog_name}/items/async` — Bulk delete

---

## Subscription Groups

### Email subscription
`POST /subscription/status/set` — Set subscription status
`GET /subscription/status/get?external_id={id}&subscription_group_id={id}`
`GET /subscription/user/status?external_id={id}`

### SMS subscription
Same endpoints — subscription groups support both email and SMS types.

---

## Data Export

### Revenue data
`GET /purchases/revenue_series?length=30`
`GET /purchases/quantity_series?length=30`

### KPIs
`GET /kpi/new_users/data_series?length=30`
`GET /kpi/dau/data_series?length=30`
`GET /kpi/mau/data_series?length=30`
`GET /kpi/uninstalls/data_series?length=30`

### Events
`GET /events/list` — List custom events
`GET /events/data_series?event={name}&length=30`

### Sessions
`GET /sessions/data_series?length=30`

### Feed (News Feed — legacy)
`GET /feed/list`
`GET /feed/details?card_id={id}`
`GET /feed/data_series?card_id={id}&length=30`

---

## SCIM (User Management)

### Dashboard user accounts
`POST /scim/v2/Users` — Create dashboard user
`GET /scim/v2/Users/{id}` — Get user
`PUT /scim/v2/Users/{id}` — Update user
`DELETE /scim/v2/Users/{id}` — Deactivate user
`GET /scim/v2/Users?filter=userName eq "user@example.com"` — Search

---

## Preference Center

`POST /preference_center/v1` — Create preference center
`PUT /preference_center/v1/{id}` — Update
`GET /preference_center/v1/{id}` — Get details
`GET /preference_center/v1/list` — List all
`GET /preference_center/v1/{id}/url/{user_id}` — Get URL for user

---

## SDK Authentication

`POST /app_group/sdk_authentication/create` — Create SDK auth key

---

## Rate Limits

- **Default**: 250,000 requests/hour across all endpoints
- **`/users/track`**: Custom higher limits available (contact Braze)
- **`/users/export/segment`**: Async — limited concurrent exports
- **Batch sizes**: `/users/track` supports 75 attributes + 75 events + 75 purchases per request
- **Headers**: Check `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` response headers

---

## Braze Currents (Streaming Export)

Currents is not accessed via REST API — it's configured in the dashboard:
Dashboard → Data Settings → Currents → Create New Current

### Supported destinations
- Amazon S3
- Azure Blob Storage
- Google Cloud Storage
- Snowflake Data Sharing
- Segment
- mParticle
- Amplitude
- Mixpanel
- Treasure Data

### Event types streamed
- **Email**: Send, delivery, open, click, bounce, soft_bounce, spam, unsubscribe
- **Push**: Send, open, bounce, foreground
- **In-app message**: Impression, click
- **Content Card**: Impression, click, dismiss
- **SMS**: Send, delivery, rejection, short_link_click
- **WhatsApp**: Send, delivery, read, failure
- **Webhook**: Send
- **Canvas**: Entry, conversion, exit
- **Campaign**: Send, conversion
- **Custom events**: All custom events
- **Purchases**: All purchases
- **Session**: Start, end
- **User**: State change, uninstall

---

## Notes

- API documentation: https://www.braze.com/docs/api
- Postman collection available: https://documenter.getpostman.com/view/4689407/SVYrsdsG
- Braze was formerly known as Appboy — some SDK packages may use old naming
- Connected Content (in-message API calls) is separate from the REST API — it executes at send time
- Always use your instance-specific REST endpoint, not the SDK endpoint
