<!-- Source: https://cal.com/docs/api-reference/v2/introduction, https://cal.com/docs/developing/guides/automation/webhooks -->

# Cal.com API v2 Reference

## Authentication

### API Key
- Found in Settings > Security
- Test keys prefix: `cal_`
- Live keys prefix: `cal_live_`
- Header: `Authorization: Bearer YOUR_API_KEY`
- Rate limit: 120 req/min (upgradable to 200 or 800 with support)

### OAuth 2.0
- Recommended for integrations and App Store listings
- Access tokens: 60-minute validity
- Refresh tokens: 1-year validity
- Refresh endpoint: `POST /v2/oauth/refresh`
- Docs: https://cal.com/docs/api-reference/v2/oauth

### Platform OAuth (Deprecated December 15, 2025)
- Headers: `x-cal-client-id`, `x-cal-secret-key`
- Existing enterprise customers only

## Base URL

```
https://api.cal.com/v2
```

All requests must use HTTPS. Unauthenticated requests will fail.

## Endpoint Categories

| Category | Description | Plan required |
|---|---|---|
| **Bookings** | Create, retrieve, update, cancel bookings | Free |
| **Event Types** | CRUD for event types (user, team, org) | Free (team: Teams+) |
| **Schedules** | Manage availability windows | Free |
| **Slots** | Query available booking slots | Free |
| **Calendars** | Connect/manage calendars, busy times | Free |
| **Users** | Profile, booking limits, verified contacts | Free |
| **Webhooks** | Subscribe to booking/meeting events | Free |
| **Teams** | Create/manage teams and memberships | Teams+ |
| **Organizations** | Org-level management and permissions | Organizations+ |
| **Routing Forms** | Qualification forms before booking | Teams+ |
| **OAuth** | Token exchange and refresh | Free |
| **Conferencing** | Configure video apps, get recordings | Free |
| **Payments** | Stripe account connection, credits | Free |

## Key Endpoints

### Bookings

```
GET    /v2/bookings              # List bookings (paginated)
GET    /v2/bookings/:id          # Get booking details
POST   /v2/bookings              # Create booking
PATCH  /v2/bookings/:id          # Update booking
DELETE /v2/bookings/:id          # Cancel booking
POST   /v2/bookings/:id/reschedule  # Reschedule booking
```

### Event Types

```
GET    /v2/event-types           # List your event types
GET    /v2/event-types/:id       # Get event type details
POST   /v2/event-types           # Create event type
PATCH  /v2/event-types/:id       # Update event type
DELETE /v2/event-types/:id       # Delete event type
```

### Schedules

```
GET    /v2/schedules             # List schedules
GET    /v2/schedules/:id         # Get schedule details
POST   /v2/schedules             # Create schedule
PATCH  /v2/schedules/:id         # Update schedule
DELETE /v2/schedules/:id         # Delete schedule
```

### Slots

```
GET    /v2/slots/available       # Get available slots for an event type
```

Query params: `eventTypeId`, `startTime`, `endTime`, `timeZone`

### Webhooks

```
GET    /v2/webhooks              # List webhook subscriptions
POST   /v2/webhooks              # Create webhook subscription
PATCH  /v2/webhooks/:id          # Update webhook
DELETE /v2/webhooks/:id          # Delete webhook
```

## Webhook Events

| Event | Description |
|---|---|
| `BOOKING_CREATED` | New booking confirmed |
| `BOOKING_CANCELLED` | Booking cancelled (includes `cancellationReason`) |
| `BOOKING_RESCHEDULED` | Booking time changed (includes `rescheduleUid`) |
| `BOOKING_REQUESTED` | Booking awaiting approval (requires-confirmation event types) |
| `BOOKING_REJECTED` | Booking declined (includes `rejectionReason`) |
| `BOOKING_PAID` | Payment completed for paid event type |
| `PAYMENT_INITIATED` | Payment started but not yet completed |
| `MEETING_STARTED` | Fires at booking start time (auto-scheduled) |
| `MEETING_ENDED` | Fires at booking end time (auto-scheduled) |
| `RECORDING_READY` | Cal Video recording available for download |
| `FORM_SUBMITTED` | Routing form completed (with booking) |
| `FORM_SUBMITTED_NO_EVENT` | Routing form completed (no booking created) |
| `INSTANT_MEETING_CREATED` | Instant meeting created |
| `INSTANT_MEETING_ACCEPTED` | Instant meeting accepted |
| `BOOKING_NO_SHOW_UPDATED` | Manual no-show marking on `/bookings/past` |
| `AFTER_HOSTS_CAL_VIDEO_NO_SHOW` | Host didn't join Cal Video meeting |
| `AFTER_GUESTS_CAL_VIDEO_NO_SHOW` | Guest didn't join Cal Video meeting |
| `OOO_CREATED` | Out-of-office entry created |
| `WRONG_ASSIGNMENT_REPORT` | Routing accuracy feedback |

## Webhook Payload Structure

### Standard booking events
```json
{
  "triggerEvent": "BOOKING_CREATED",
  "createdAt": "2026-04-26T10:00:00.000Z",
  "payload": {
    "type": "30-Min Discovery Call",
    "title": "Discovery Call between Jane and John",
    "startTime": "2026-04-28T14:00:00.000Z",
    "endTime": "2026-04-28T14:30:00.000Z",
    "uid": "abc123-def456",
    "description": "Quick intro call",
    "location": "https://app.cal.com/video/abc123",
    "organizer": {
      "name": "Jane Smith",
      "email": "jane@company.com",
      "timezone": "America/New_York",
      "language": {"locale": "en"}
    },
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@prospect.com",
        "timezone": "America/Chicago"
      }
    ],
    "metadata": {
      "videoCallUrl": "https://app.cal.com/video/abc123"
    }
  }
}
```
<!-- Constructed from docs — verify against live API -->

### Meeting events (MEETING_STARTED / MEETING_ENDED) — flat structure
```json
{
  "triggerEvent": "MEETING_STARTED",
  "title": "Discovery Call between Jane and John",
  "startTime": "2026-04-28T14:00:00.000Z",
  "endTime": "2026-04-28T14:30:00.000Z",
  "uid": "abc123-def456",
  "organizer": {"name": "Jane Smith", "email": "jane@company.com"},
  "attendees": [{"name": "John Doe", "email": "john@prospect.com"}]
}
```
<!-- Constructed from docs — verify against live API -->

**Important:** Meeting events use a flat structure — no `payload` wrapper. Custom payload templates are NOT supported for meeting events.

## Webhook Signature Verification (HMAC-SHA256)

1. Set a secret key when creating the webhook subscription
2. Compute HMAC-SHA256 of the raw request body using the secret
3. Compare with `x-cal-signature-256` header
4. Reject if mismatch

```python
import hmac
import hashlib

def verify_signature(body: bytes, secret: str, signature: str) -> bool:
    expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
```

## Custom Webhook Payload Templates

Use double-brace syntax to reference booking data:

```json
{
  "event": "{{type}}",
  "title": "{{title}}",
  "organizer": "{{organizer.name}}",
  "guest": "{{attendees.0.name}}",
  "start": "{{startTime}}",
  "end": "{{endTime}}",
  "meetingLink": "{{metadata.videoCallUrl}}"
}
```

Available variables: `triggerEvent`, `createdAt`, `type`, `title`, `startTime`, `endTime`, `description`, `location`, `organizer` (Person), `attendees` (Person[]), `uid`, `rescheduleUid`, `cancellationReason`, `rejectionReason`, `team.name`, `team.members`, `metadata`.

## Pagination

Endpoints returning lists use offset-based pagination:

```
GET /v2/bookings?take=10&skip=20
```

- `take`: number of results per page (default varies by endpoint)
- `skip`: offset from start

## Rate Limits

| Auth method | Limit |
|---|---|
| API Key | 120 req/min (default) |
| API Key (upgraded) | 200 or 800 req/min (contact support) |
| OAuth | Same as API key tier |

**Retry strategy:** Check `X-RateLimit-Remaining` and `X-RateLimit-Reset` headers. Back off with exponential delay when approaching limits.

## Error Response Shape

```json
{
  "status": "error",
  "timestamp": "2026-04-26T10:00:00.000Z",
  "path": "/v2/bookings",
  "error": {
    "code": "NOT_FOUND",
    "message": "Booking not found"
  }
}
```
<!-- Constructed from docs — verify against live API -->

## OpenAPI Specification

Available at:
- v2: https://api.cal.com/v2/docs (JSON)
- Full docs: https://cal.com/docs/llms.txt (LLM-friendly index)

## Gaps

- Full endpoint parameter schemas for each endpoint were not fetchable (JS-rendered multi-page docs)
- Exact pagination response envelope not confirmed
- Rate limit header names not confirmed (assumed standard `X-RateLimit-*`)
- No MCP server found
- No official SDK (community Python SDK exists on GitHub)
