<!-- Source: https://developer.calendly.com/api-docs, https://apidog.com/blog/use-calendly-apis/, https://zeeg.me/en/blog/post/calendly-api -->

# Calendly API Reference

## Base URL

```
https://api.calendly.com
```

API v2 (current, actively maintained). API v1 deprecated August 2025.

## Authentication

Two methods:

### Personal Access Token (internal apps)
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.calendly.com/users/me
```
Generate at: Settings → Integrations → API & Webhooks → Personal Access Tokens

### OAuth 2.0 (public apps)
- Authorization: `https://auth.calendly.com/oauth/authorize`
- Token exchange: `https://auth.calendly.com/oauth/token`
- Access tokens expire after **2 hours** — use refresh tokens
- Scopes: determined by Calendly subscription tier, not per-token

```bash
# Token exchange
curl -X POST https://auth.calendly.com/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=AUTH_CODE&redirect_uri=YOUR_REDIRECT&client_id=CLIENT_ID&client_secret=CLIENT_SECRET"
```

## Rate Limits

| Plan | Limit |
|---|---|
| Free | 60 requests/minute |
| Standard | 60 requests/minute |
| Teams | 60 requests/minute |
| Enterprise | 120 requests/minute |

Rate limit headers:
- `X-RateLimit-Limit` — max requests per minute
- `X-RateLimit-Remaining` — requests remaining
- `X-RateLimit-Reset` — UTC epoch seconds until reset

On 429 Too Many Requests: honor `Retry-After` header (seconds to wait).

## Endpoints

### Users

| Method | Path | Description |
|---|---|---|
| GET | `/users/me` | Get current authenticated user |
| GET | `/users/{uuid}` | Get a specific user |

### Organization

| Method | Path | Description |
|---|---|---|
| GET | `/organization_memberships` | List org members (filter by `organization`) |
| GET | `/organization_memberships/{uuid}` | Get specific membership |

### Event Types

| Method | Path | Description |
|---|---|---|
| GET | `/event_types` | List event types (filter by `user` or `organization`) |
| GET | `/event_types/{uuid}` | Get specific event type |

### Scheduled Events

| Method | Path | Description |
|---|---|---|
| GET | `/scheduled_events` | List scheduled events (filter by `user`, `min_start_time`, `max_start_time`, `status`) |
| GET | `/scheduled_events/{uuid}` | Get specific scheduled event |
| POST | `/scheduled_events/{uuid}/cancellation` | Cancel a scheduled event |

### Invitees

| Method | Path | Description |
|---|---|---|
| GET | `/scheduled_events/{event_uuid}/invitees` | List invitees for an event |
| GET | `/scheduled_events/{event_uuid}/invitees/{invitee_uuid}` | Get specific invitee |

### Availability

| Method | Path | Description |
|---|---|---|
| GET | `/event_type_available_times` | List available times for an event type |
| GET | `/user_busy_times` | Get busy times for a user |
| GET | `/user_availability_schedules` | List user availability schedules |
| GET | `/user_availability_schedules/{uuid}` | Get specific availability schedule |

### Webhooks

| Method | Path | Description |
|---|---|---|
| POST | `/webhook_subscriptions` | Create a webhook subscription |
| GET | `/webhook_subscriptions` | List webhook subscriptions |
| GET | `/webhook_subscriptions/{uuid}` | Get specific subscription |
| DELETE | `/webhook_subscriptions/{uuid}` | Delete a subscription |

### Routing Forms

| Method | Path | Description |
|---|---|---|
| GET | `/routing_forms` | List routing forms |
| GET | `/routing_forms/{uuid}` | Get specific routing form |
| GET | `/routing_form_submissions` | List routing form submissions |
| GET | `/routing_form_submissions/{uuid}` | Get specific submission |

### Scheduling Links

| Method | Path | Description |
|---|---|---|
| POST | `/scheduling_links` | Create a single-use scheduling link |

### Invitee No-Shows

| Method | Path | Description |
|---|---|---|
| POST | `/invitee_no_shows` | Mark an invitee as a no-show |
| GET | `/invitee_no_shows/{uuid}` | Get no-show record |
| DELETE | `/invitee_no_shows/{uuid}` | Unmark a no-show |

## Webhook Events

| Event | Description |
|---|---|
| `invitee.created` | New booking made |
| `invitee.canceled` | Booking canceled |
| `routing_form_submission.created` | Routing form submitted |

**Note:** Rescheduling fires `invitee.canceled` + `invitee.created` (two separate events).

### Webhook Signature Verification

Header: `Calendly-Webhook-Signature`
Format: `t={timestamp},v1={hash}`

```python
import hmac, hashlib

def verify_calendly_webhook(payload_body: str, signature_header: str, signing_key: str) -> bool:
    parts = dict(p.split("=", 1) for p in signature_header.split(",") if "=" in p)
    timestamp = parts.get("t", "")
    received_sig = parts.get("v1", "")
    expected = hmac.new(
        signing_key.encode(),
        f"{timestamp}.{payload_body}".encode(),
        hashlib.sha256,
    ).hexdigest()
    return hmac.compare_digest(expected, received_sig)
```

### Webhook Subscription Request
```json
{
  "url": "https://your-server.com/webhooks/calendly",
  "events": ["invitee.created", "invitee.canceled"],
  "organization": "https://api.calendly.com/organizations/ORG123",
  "user": "https://api.calendly.com/users/USER123",
  "scope": "user",
  "signing_key": "your-hmac-secret"
}
```

Scope options: `"user"` (events for one user) or `"organization"` (all events in org, requires admin).

## Pagination

All list endpoints use cursor-based pagination:

```json
{
  "collection": [...],
  "pagination": {
    "count": 20,
    "next_page": "https://api.calendly.com/scheduled_events?page_token=abc123",
    "next_page_token": "abc123",
    "previous_page": null,
    "previous_page_token": null
  }
}
```

Query parameters:
- `count` — items per page (default 20, max 100)
- `page_token` — cursor token from `next_page_token`

## Error Responses

| Code | Description |
|---|---|
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — expired/invalid token |
| 403 | Forbidden — insufficient permissions or plan |
| 404 | Not found — resource doesn't exist or not accessible |
| 409 | Conflict — e.g., webhook subscription already exists |
| 422 | Unprocessable — validation error |
| 429 | Rate limited — check `Retry-After` header |
| 500 | Server error |

Error response shape:
```json
{
  "title": "Resource Not Found",
  "message": "The server could not find the requested resource.",
  "details": [
    {
      "parameter": "uuid",
      "message": "not found"
    }
  ]
}
```

## Key Limitations

- **Cannot create bookings via API** — API is read-only for scheduling. Use embeds or scheduling_url for booking creation.
- **Cannot create/edit event types via API** — event type configuration is UI-only
- **Cannot set availability via API** — availability schedules are read-only
- **Webhooks require paid plan** — Free plan has no webhook access
- **No Apple Calendar support** — Google Calendar, Outlook, Exchange only

## Gaps

- Full OpenAPI spec not publicly available (developer portal is JS-rendered)
- Exact request/response fields for some endpoints may vary — constructed from multiple sources, verify against live API
- Activity log / audit trail endpoints not documented in public API
