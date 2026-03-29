### Klaviyo APIs — Comprehensive Reference

Klaviyo provides a REST API for managing profiles, tracking events, building segments and lists, sending campaigns, managing flows, product catalogs, templates, metrics/reporting, coupons, reviews, forms, images, tags, and webhooks.

> **Note**: Best-effort from research — verify endpoints and parameters against https://developers.klaviyo.com

---

## Base URL

```
Server-side: https://a.klaviyo.com/api/
Client-side: https://a.klaviyo.com/client/
```

Server-side endpoints require a private API key. Client-side endpoints use a public key (`company_id` query parameter).

---

### Authentication

**Server-side** — Private API key via custom header:

```bash
curl --request GET \
  --url "https://a.klaviyo.com/api/profiles/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "revision: 2026-01-15"
```

**OAuth** — Available for technology partners building integrations. Uses standard OAuth 2.0 bearer tokens. OAuth apps receive a separate rate-limit quota per app instance.

**Client-side** — Public key passed as a query parameter:

```bash
curl --request POST \
  --url "https://a.klaviyo.com/client/events/?company_id=YOUR_6CHAR_PUBLIC_KEY" \
  --header "Content-Type: application/json" \
  --data '{ ... }'
```

---

### API Versioning

Klaviyo uses date-based API versions set via the `revision` request header. Examples: `2024-10-15`, `2025-01-15`, `2026-01-15`. Always include the `revision` header in every request.

```
revision: 2026-01-15
```

---

### Rate Limits

- **Burst limit**: Fixed-window per 1-second interval
- **Steady limit**: Fixed-window per 1-minute interval
- Rate limits are per-account. OAuth apps get separate quota per app instance.
- Exceeding rate limits returns HTTP `429 Too Many Requests`
- Retry with exponential backoff; check `Retry-After` header when available

---

### Request & Response Format

- **Spec**: JSON:API — all request and response bodies follow the JSON:API specification
- **Content-Type**: `application/json` (with `application/vnd.api+json` also accepted)
- **Relationships**: Resources link to related resources via `relationships` objects
- **Sparse fieldsets**: Use `fields[resource]=field1,field2` to request only specific fields
- **Filtering**: Use `filter=equals(field,"value")` query parameter syntax
- **Sorting**: Use `sort=field` or `sort=-field` (descending) query parameters
- **All timestamps**: ISO 8601 / RFC 3339 format

### Pagination

Cursor-based pagination. List endpoints return a `links` object with `next` and `previous` URLs:

```json
{
  "data": [ ... ],
  "links": {
    "self": "https://a.klaviyo.com/api/profiles/",
    "next": "https://a.klaviyo.com/api/profiles/?page[cursor]=abc123",
    "previous": null
  }
}
```

Use `page[size]=50` to control page size. Follow the `next` URL to retrieve subsequent pages.

### Error Responses

```json
{
  "errors": [
    {
      "id": "error-id",
      "status": 400,
      "code": "invalid",
      "title": "Invalid input.",
      "detail": "The 'email' field is required.",
      "source": { "pointer": "/data/attributes/email" }
    }
  ]
}
```

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 202 | Accepted (async job queued) |
| 204 | No content (successful delete) |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 403 | Forbidden — insufficient permissions |
| 404 | Not found |
| 409 | Conflict — resource already exists |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |

---

### Endpoints

---

#### 1. Profiles API — `/api/profiles/`

Manage customer profiles (contacts). Profiles are the core identity object in Klaviyo.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/profiles/` | List profiles (filter, sparse fields, pagination) |
| POST | `/api/profiles/` | Create or update a profile |
| GET | `/api/profiles/{id}/` | Get a single profile |
| PATCH | `/api/profiles/{id}/` | Update a profile |
| POST | `/api/profile-merge/` | Merge duplicate profiles |
| POST | `/api/profile-suppression-bulk-create-jobs/` | Suppress profiles in bulk |
| POST | `/api/profile-subscription-bulk-create-jobs/` | Subscribe profiles in bulk |

**Example — Create or update a profile**:
```bash
curl --request POST \
  --url "https://a.klaviyo.com/api/profiles/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "profile",
      "attributes": {
        "email": "jane.doe@example.com",
        "first_name": "Jane",
        "last_name": "Doe",
        "phone_number": "+15551234567",
        "properties": {
          "plan": "premium",
          "signup_source": "website"
        },
        "location": {
          "city": "San Francisco",
          "region": "CA",
          "country": "US"
        }
      }
    }
  }'
```

**Response** (201 Created):
```json
{
  "data": {
    "type": "profile",
    "id": "01ABC123DEF456",
    "attributes": {
      "email": "jane.doe@example.com",
      "first_name": "Jane",
      "last_name": "Doe",
      "phone_number": "+15551234567",
      "properties": { "plan": "premium", "signup_source": "website" },
      "location": { "city": "San Francisco", "region": "CA", "country": "US" },
      "created": "2026-03-29T12:00:00+00:00",
      "updated": "2026-03-29T12:00:00+00:00"
    },
    "links": { "self": "https://a.klaviyo.com/api/profiles/01ABC123DEF456/" }
  }
}
```

**Filtering profiles**:
```
GET /api/profiles/?filter=equals(email,"jane.doe@example.com")
GET /api/profiles/?filter=greater-than(created,2026-01-01T00:00:00Z)
```

---

#### 2. Events API — `/api/events/`

Track customer actions (purchases, page views, custom events). Events drive flow triggers and segmentation.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/events/` | Create an event (track a customer action) |
| GET | `/api/events/` | List events |
| GET | `/api/events/{id}/` | Get a single event |

**Example — Track an event**:
```bash
curl --request POST \
  --url "https://a.klaviyo.com/api/events/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "event",
      "attributes": {
        "metric": {
          "data": {
            "type": "metric",
            "attributes": {
              "name": "Placed Order"
            }
          }
        },
        "profile": {
          "data": {
            "type": "profile",
            "attributes": {
              "email": "jane.doe@example.com"
            }
          }
        },
        "properties": {
          "OrderId": "ORD-12345",
          "Items": [
            { "ProductName": "Widget", "Quantity": 2, "Price": 29.99 }
          ],
          "Revenue": 59.98
        },
        "time": "2026-03-29T14:30:00+00:00"
      }
    }
  }'
```

---

#### 3. Lists & Segments API

Manage subscription lists and dynamic segments.

**Lists** — `/api/lists/`:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/lists/` | List all lists |
| POST | `/api/lists/` | Create a list |
| GET | `/api/lists/{id}/` | Get a list |
| PATCH | `/api/lists/{id}/` | Update a list |
| DELETE | `/api/lists/{id}/` | Delete a list |
| POST | `/api/list-profiles-bulk-create-jobs/` | Add profiles to a list in bulk |

**Segments** — `/api/segments/`:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/segments/` | List all segments |
| GET | `/api/segments/{id}/` | Get segment with profile count |
| GET | `/api/segments/{id}/profiles/` | Get profiles in a segment |

---

#### 4. Campaigns API — `/api/campaigns/`

Create, update, and send email and SMS campaigns.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/campaigns/` | List campaigns |
| POST | `/api/campaigns/` | Create a campaign |
| PATCH | `/api/campaigns/{id}/` | Update a campaign |
| DELETE | `/api/campaigns/{id}/` | Delete a campaign |
| POST | `/api/campaign-send-jobs/` | Send or schedule a campaign |
| GET | `/api/campaign-messages/{id}/` | Get campaign message content |

**Example — Create a campaign**:
```bash
curl --request POST \
  --url "https://a.klaviyo.com/api/campaigns/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "campaign",
      "attributes": {
        "name": "Spring Sale 2026",
        "channel": "email",
        "audiences": {
          "included": [
            { "id": "LIST_ID_HERE" }
          ],
          "excluded": [
            { "id": "SUPPRESSED_SEGMENT_ID" }
          ]
        },
        "send_strategy": {
          "method": "immediate"
        }
      }
    }
  }'
```

**Response** (201 Created):
```json
{
  "data": {
    "type": "campaign",
    "id": "01CAMP123ABC",
    "attributes": {
      "name": "Spring Sale 2026",
      "status": "draft",
      "channel": "email",
      "created_at": "2026-03-29T15:00:00+00:00",
      "updated_at": "2026-03-29T15:00:00+00:00"
    }
  }
}
```

---

#### 5. Flows API — `/api/flows/`

Manage automated flows (sequences triggered by events, segment membership, dates, etc.).

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/flows/` | List all flows |
| GET | `/api/flows/{id}/` | Get flow details |
| PATCH | `/api/flows/{id}/` | Update flow status (`live`, `draft`, `manual`) |
| GET | `/api/flow-actions/{id}/` | Get a flow action |
| GET | `/api/flow-messages/{id}/` | Get a flow message |

---

#### 6. Catalogs API — `/api/catalog-items/`

Manage product catalog data for personalized recommendations, back-in-stock alerts, and dynamic content.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/catalog-items/` | Create a catalog item |
| GET | `/api/catalog-items/` | List catalog items |
| GET | `/api/catalog-items/{id}/` | Get a catalog item |
| PATCH | `/api/catalog-items/{id}/` | Update a catalog item |
| DELETE | `/api/catalog-items/{id}/` | Delete a catalog item |
| POST | `/api/catalog-variants/` | Create a variant |
| POST | `/api/catalog-categories/` | Create a category |
| POST | `/api/catalog-item-bulk-create-jobs/` | Bulk create catalog items |
| POST | `/api/back-in-stock-subscriptions/` | Create a back-in-stock subscription |

---

#### 7. Templates API — `/api/templates/`

Create and manage reusable email templates.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/templates/` | List all templates |
| POST | `/api/templates/` | Create a template |
| GET | `/api/templates/{id}/` | Get a template |
| PATCH | `/api/templates/{id}/` | Update a template |
| DELETE | `/api/templates/{id}/` | Delete a template |
| POST | `/api/template-render/` | Render a template with context data |
| POST | `/api/template-clone/` | Clone a template |

---

#### 8. Metrics API — `/api/metrics/`

Query tracked metrics (event definitions) and aggregate metric data for reporting.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/metrics/` | List all metrics (event types tracked in the account) |
| POST | `/api/metric-aggregates/` | Query aggregate metric data (revenue, opens, clicks by date) |

**Example — Query aggregate metrics**:
```bash
curl --request POST \
  --url "https://a.klaviyo.com/api/metric-aggregates/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "metric-aggregate",
      "attributes": {
        "metric_id": "METRIC_ID_HERE",
        "measurements": ["count", "sum_value"],
        "interval": "day",
        "filter": [
          "greater-or-equal(datetime,2026-03-01T00:00:00Z)",
          "less-than(datetime,2026-03-30T00:00:00Z)"
        ],
        "page_size": 500,
        "by": ["$flow"],
        "sort": "-count"
      }
    }
  }'
```

**Response**:
```json
{
  "data": {
    "type": "metric-aggregate",
    "attributes": {
      "dates": ["2026-03-01T00:00:00+00:00", "2026-03-02T00:00:00+00:00"],
      "data": [
        {
          "dimensions": ["Welcome Flow"],
          "measurements": {
            "count": [150, 142],
            "sum_value": [4500.00, 4260.00]
          }
        }
      ]
    }
  }
}
```

---

#### 9. Coupons API — `/api/coupons/`

Create coupons and generate unique coupon codes for campaigns and flows.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/coupons/` | Create a coupon |
| GET | `/api/coupons/` | List coupons |
| GET | `/api/coupons/{id}/` | Get a coupon |
| POST | `/api/coupon-codes/` | Create a unique coupon code |
| POST | `/api/coupon-code-bulk-create-jobs/` | Bulk create coupon codes |

---

#### 10. Reviews API — `/api/reviews/`

Access product reviews collected through Klaviyo Reviews.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/reviews/` | List reviews |
| GET | `/api/reviews/{id}/` | Get a single review |

---

#### 11. Forms API — `/api/forms/`

Access signup form definitions and data.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/forms/` | List forms |
| GET | `/api/forms/{id}/` | Get form details |

---

#### 12. Images API — `/api/images/`

Upload and manage images for use in templates and campaigns.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/images/` | Upload an image |
| GET | `/api/images/` | List images |
| GET | `/api/images/{id}/` | Get an image |

---

#### 13. Tags API — `/api/tags/`

Organize resources (campaigns, flows, lists, segments) with tags.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tags/` | Create a tag |
| GET | `/api/tags/` | List tags |
| GET | `/api/tags/{id}/` | Get a tag |
| PATCH | `/api/tags/{id}/` | Update a tag |
| DELETE | `/api/tags/{id}/` | Delete a tag |
| POST | `/api/tag-relationships-campaigns/` | Tag campaigns |
| POST | `/api/tag-relationships-flows/` | Tag flows |
| POST | `/api/tag-relationships-lists/` | Tag lists |
| POST | `/api/tag-relationships-segments/` | Tag segments |

---

#### 14. Webhooks API — `/api/webhooks/`

Subscribe to real-time event notifications via webhooks. Requires Advanced KDP (Klaviyo Data Platform) for system webhooks.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/webhook-topics/` | List available webhook topics |
| POST | `/api/webhooks/` | Create a webhook subscription |
| GET | `/api/webhooks/` | List webhooks |
| GET | `/api/webhooks/{id}/` | Get a webhook |
| PATCH | `/api/webhooks/{id}/` | Update a webhook |
| DELETE | `/api/webhooks/{id}/` | Delete a webhook |

**Webhook topics** include:
- **Email events**: `email.received`, `email.clicked`, `email.opened`, `email.marked_as_spam`
- **SMS events**: `sms.received`, `sms.sent`, `sms.failed`
- **Review events**: `review.created`, `review.updated`
- **Consent events**: `profile.subscribed`, `profile.unsubscribed`

**Example — Create a webhook**:
```bash
curl --request POST \
  --url "https://a.klaviyo.com/api/webhooks/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "webhook",
      "attributes": {
        "name": "Order event webhook",
        "endpoint_url": "https://example.com/webhooks/klaviyo",
        "description": "Receives order-related events",
        "enabled": true,
        "topics": ["email.opened", "email.clicked"]
      }
    }
  }'
```

**Webhook signing**: Klaviyo signs webhook payloads using HMAC-SHA256 with a secret key. The signature is included in the `Klaviyo-Webhook-Signature` header. Verify by computing HMAC-SHA256 of the raw request body using your webhook secret and comparing to the signature value. Reject payloads that do not match.

---

### Flow Webhooks vs System Webhooks (Advanced KDP)

Klaviyo supports two distinct types of webhooks:

**Flow webhooks** (available to all accounts):
- Configured as an action within a flow (alongside email, SMS, push actions)
- Triggered when a profile reaches that step in a flow
- Send a JSON payload with profile and event data to a specified URL
- Useful for triggering external systems (CRM updates, fulfillment, Slack notifications) as part of automated sequences
- Configured in the flow builder UI, not via the API

**System webhooks (Advanced KDP)**:
- Configured via the `/api/webhooks/` API endpoints (described above)
- Subscribe to platform-wide event topics (email opens, clicks, SMS events, reviews, consent changes)
- Fire for all matching events across the account, not tied to a specific flow
- Require the Advanced Klaviyo Data Platform add-on
- Managed programmatically through the Webhooks API

---

#### 15. Reporting API

Query campaign and flow performance metrics.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/campaign-values-reports/` | Campaign performance metrics (totals) |
| POST | `/api/flow-values-reports/` | Flow performance metrics (totals) |
| POST | `/api/flow-series-reports/` | Flow time-series data |

---

#### 16. Client-side Endpoints — `/client/`

Public endpoints for use in browsers, mobile apps, and frontend code. Authenticated with the 6-character public API key (`company_id`).

| Method | Endpoint | Description |
|---|---|---|
| POST | `/client/subscriptions/` | Subscribe a profile (form submission) |
| POST | `/client/events/` | Track a client-side event |
| POST | `/client/profiles/` | Create or update a profile |
| POST | `/client/push-tokens/` | Register a push notification token |

**Auth**: Pass the `company_id` query parameter (your 6-character public API key):

```
POST /client/events/?company_id=AbCdEf
```

These endpoints are safe to call from client-side code because they only accept write operations and the public key cannot be used to read data.

---

## Quick Reference — Common Workflows

### Create a profile and track an event
```bash
# Step 1: Create profile
curl --request POST \
  --url "https://a.klaviyo.com/api/profiles/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "profile",
      "attributes": {
        "email": "customer@example.com",
        "first_name": "Alex",
        "properties": { "loyalty_tier": "gold" }
      }
    }
  }'

# Step 2: Track event for that profile
curl --request POST \
  --url "https://a.klaviyo.com/api/events/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "event",
      "attributes": {
        "metric": { "data": { "type": "metric", "attributes": { "name": "Added to Cart" } } },
        "profile": { "data": { "type": "profile", "attributes": { "email": "customer@example.com" } } },
        "properties": { "ProductName": "Running Shoes", "Price": 89.99 }
      }
    }
  }'
```

### Create a campaign and send it
```bash
# Step 1: Create campaign
curl --request POST \
  --url "https://a.klaviyo.com/api/campaigns/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "campaign",
      "attributes": {
        "name": "Weekly Newsletter",
        "channel": "email",
        "audiences": { "included": [{ "id": "LIST_ID" }] },
        "send_strategy": { "method": "immediate" }
      }
    }
  }'

# Step 2: Send the campaign (after configuring message content)
curl --request POST \
  --url "https://a.klaviyo.com/api/campaign-send-jobs/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "campaign-send-job",
      "attributes": {
        "campaign_id": "CAMPAIGN_ID_HERE"
      }
    }
  }'
```

### Set up a webhook and verify its signature
```bash
# Step 1: Create a webhook (requires Advanced KDP)
curl --request POST \
  --url "https://a.klaviyo.com/api/webhooks/" \
  --header "Authorization: Klaviyo-API-Key YOUR_PRIVATE_KEY" \
  --header "Content-Type: application/json" \
  --header "revision: 2026-01-15" \
  --data '{
    "data": {
      "type": "webhook",
      "attributes": {
        "name": "Email engagement webhook",
        "endpoint_url": "https://example.com/webhooks/klaviyo",
        "topics": ["email.opened", "email.clicked", "email.marked_as_spam"]
      }
    }
  }'

# Step 2: Verify webhook signature in your application (pseudocode):
# secret = YOUR_WEBHOOK_SECRET
# expected = hmac_sha256(secret, raw_request_body)
# if expected != request.headers["Klaviyo-Webhook-Signature"]: reject
```
