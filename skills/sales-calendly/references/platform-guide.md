# Calendly Platform Reference

## Overview

Calendly is the market-leading scheduling link platform, letting users share a booking page URL so invitees self-schedule meetings. Founded 2013, used by 20M+ users. Primary differentiator: brand recognition and simplicity — prospects already know how Calendly works.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| **Event types** | 1:1, group, collective, round-robin scheduling | API-readable (GET /event_types) |
| **Booking pages** | Customizable scheduling pages with branding | UI-only (create/edit) |
| **Routing forms** | Lead qualification → route to correct rep/event type | UI-only (Teams+ plan) |
| **Workflows** | Automated email/SMS reminders, follow-ups, notifications | UI-only |
| **Embeds** | Inline, popup widget, popup text — JavaScript snippet | UI-only (configuration) |
| **Scheduled events** | View/cancel booked meetings | API-accessible (read + cancel) |
| **Invitees** | Attendee data for scheduled events | API-accessible (read-only) |
| **Availability** | Available time slots and busy times | API-accessible (read-only) |
| **Webhooks** | Real-time event notifications | API-accessible (paid plans) |
| **Payments** | Stripe/PayPal collection on booking | UI-only |
| **Analytics** | Event type performance, popular times | UI-only |
| **Round-robin** | Equal or availability-optimized distribution | UI-only (Teams+ plan) |

## Pricing, limits & plan gates

| Feature | Free | Standard ($10-12/seat/mo) | Teams ($16-20/seat/mo) | Enterprise ($15K+/yr) |
|---|---|---|---|---|
| Event types | 1 | Unlimited | Unlimited | Unlimited |
| Calendar connections | 1 | 6 | 6 | 6 |
| Group events | No | Yes | Yes | Yes |
| Collective events | No | No | Yes | Yes |
| Workflows | No | Yes | Yes | Yes |
| Routing forms | No | No | Yes | Yes |
| Round-robin | No | No | Yes | Yes |
| Custom branding | No | Yes | Yes | Yes |
| HubSpot integration | No | Yes | Yes | Yes |
| Salesforce integration | No | No | Yes | Yes |
| Webhooks | No | Yes | Yes | Yes |
| API rate limit | 60/min | 60/min | 60/min | 120/min |
| SSO/SAML | No | No | No | Yes |
| SCIM provisioning | No | No | No | Yes |

Annual billing saves ~20%. Teams plan volume pricing: seats 1-30 at $16/seat/mo, seats 31-50 at $14.50/seat/mo (annual).

## Integrations

| Integration | Direction | Plan required | Notes |
|---|---|---|---|
| Google Calendar | Bidirectional | Free | Primary calendar connection |
| Outlook/Office 365 | Bidirectional | Free | Via Microsoft Graph |
| Exchange | Bidirectional | Free | On-premises Exchange |
| Zoom | Reads availability, creates meeting | Free | Auto-generates join URL |
| Google Meet | Creates meeting | Free | Auto-generates join URL |
| Microsoft Teams | Creates meeting | Free | Auto-generates join URL |
| HubSpot | Writes contact + activity | Standard | Creates/updates CRM records |
| Salesforce | Bidirectional | Teams | Full event sync |
| Stripe | Collects payment | Standard | Charge on booking |
| PayPal | Collects payment | Standard | Charge on booking |
| Zapier | Triggers out | Standard | 4 triggers: created, canceled, no-show, routing form |
| Make (Integromat) | Triggers out | Standard | Similar to Zapier |
| Slack | Notifications | Standard | Channel notifications on booking |
| Google Analytics | Tracking | Standard | Booking conversion tracking |
| Meta Pixel | Tracking | Standard | Ad conversion tracking |

No native Apple Calendar support — use Google Calendar or Outlook as an intermediary.

## Data model

### User
```json
{
  "resource": {
    "uri": "https://api.calendly.com/users/ABC123",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "timezone": "America/New_York",
    "scheduling_url": "https://calendly.com/janedoe",
    "slug": "janedoe",
    "created_at": "2024-01-15T10:00:00.000000Z",
    "updated_at": "2026-03-20T14:30:00.000000Z"
  }
}
```

### Event Type
```json
{
  "resource": {
    "uri": "https://api.calendly.com/event_types/ETC123",
    "name": "30 Min Consultation",
    "active": true,
    "slug": "30min",
    "scheduling_url": "https://calendly.com/janedoe/30min",
    "duration": 30,
    "kind": "solo",
    "type": "StandardEventType",
    "color": "#0099FF",
    "description_plain": "Book a 30-minute consultation",
    "internal_note": "Discovery call for inbound leads"
  }
}
```

### Scheduled Event
```json
{
  "resource": {
    "uri": "https://api.calendly.com/scheduled_events/EVT123",
    "name": "30 Min Consultation",
    "status": "active",
    "start_time": "2026-04-28T14:00:00.000000Z",
    "end_time": "2026-04-28T14:30:00.000000Z",
    "event_type": "https://api.calendly.com/event_types/ETC123",
    "location": {
      "type": "zoom",
      "join_url": "https://zoom.us/j/123456789",
      "status": "pushed"
    },
    "invitees_counter": {
      "total": 1,
      "active": 1,
      "limit": 1
    },
    "created_at": "2026-04-25T09:15:00.000000Z",
    "updated_at": "2026-04-25T09:15:00.000000Z"
  }
}
```

### Invitee
```json
{
  "resource": {
    "uri": "https://api.calendly.com/scheduled_events/EVT123/invitees/INV123",
    "email": "prospect@example.com",
    "name": "Alex Prospect",
    "status": "active",
    "timezone": "Europe/London",
    "created_at": "2026-04-25T09:15:00.000000Z",
    "questions_and_answers": [
      {
        "question": "What's your company size?",
        "answer": "11-50",
        "position": 0
      }
    ],
    "tracking": {
      "utm_source": "linkedin",
      "utm_medium": "social",
      "utm_campaign": "spring-2026"
    }
  }
}
```

### Webhook Payload (invitee.created)
```json
{
  "event": "invitee.created",
  "created_at": "2026-04-25T09:15:00.000000Z",
  "created_by": "https://api.calendly.com/users/ABC123",
  "payload": {
    "uri": "https://api.calendly.com/scheduled_events/EVT123/invitees/INV123",
    "email": "prospect@example.com",
    "name": "Alex Prospect",
    "status": "active",
    "timezone": "Europe/London",
    "event": "https://api.calendly.com/scheduled_events/EVT123",
    "questions_and_answers": [],
    "tracking": {
      "utm_source": null,
      "utm_medium": null
    },
    "scheduled_event": {
      "uri": "https://api.calendly.com/scheduled_events/EVT123",
      "name": "30 Min Consultation",
      "status": "active",
      "start_time": "2026-04-28T14:00:00.000000Z",
      "end_time": "2026-04-28T14:30:00.000000Z"
    }
  }
}
```
<!-- Constructed from docs — verify against live API -->

## Quick-start recipes

### Recipe 1: List upcoming meetings (cURL + Python)

**Use case:** Pull all scheduled events for the next 7 days into a dashboard or CRM sync job.

**cURL:**
```bash
curl -s -H "Authorization: Bearer $CALENDLY_TOKEN" \
  "https://api.calendly.com/scheduled_events?user=https://api.calendly.com/users/ME&min_start_time=$(date -u +%Y-%m-%dT%H:%M:%SZ)&max_start_time=$(date -u -v+7d +%Y-%m-%dT%H:%M:%SZ)&status=active" \
  | jq '.collection[].resource | {name, start_time, end_time, status}'
```

**Python:**
```python
import requests
from datetime import datetime, timedelta, timezone

token = "YOUR_PERSONAL_ACCESS_TOKEN"
headers = {"Authorization": f"Bearer {token}"}

# Get current user URI
me = requests.get("https://api.calendly.com/users/me", headers=headers).json()
user_uri = me["resource"]["uri"]

# List next 7 days of events
now = datetime.now(timezone.utc)
params = {
    "user": user_uri,
    "min_start_time": now.isoformat(),
    "max_start_time": (now + timedelta(days=7)).isoformat(),
    "status": "active",
}
events = requests.get(
    "https://api.calendly.com/scheduled_events", headers=headers, params=params
).json()

for event in events["collection"]:
    print(f"{event['name']} — {event['start_time']} to {event['end_time']}")
```

**Gotcha:** Pagination — if you have many events, check `pagination.next_page_token` in the response and pass it as `page_token` query param.

### Recipe 2: Webhook listener for new bookings

**Use case:** Get notified when someone books a meeting — push to Slack, CRM, or trigger an automation.

**Step 1 — Create webhook subscription:**
```bash
curl -X POST "https://api.calendly.com/webhook_subscriptions" \
  -H "Authorization: Bearer $CALENDLY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-server.com/webhooks/calendly",
    "events": ["invitee.created", "invitee.canceled"],
    "organization": "https://api.calendly.com/organizations/ORG123",
    "user": "https://api.calendly.com/users/ME",
    "scope": "user",
    "signing_key": "your-secret-key"
  }'
```

**Step 2 — Python webhook receiver (Flask):**
```python
import hmac, hashlib, json
from flask import Flask, request, abort

app = Flask(__name__)
SIGNING_KEY = "your-secret-key"

@app.route("/webhooks/calendly", methods=["POST"])
def handle_webhook():
    # Verify signature
    sig_header = request.headers.get("Calendly-Webhook-Signature", "")
    parts = dict(p.split("=", 1) for p in sig_header.split(",") if "=" in p)
    timestamp = parts.get("t", "")
    signature = parts.get("v1", "")

    payload = f"{timestamp}.{request.data.decode()}"
    expected = hmac.new(
        SIGNING_KEY.encode(), payload.encode(), hashlib.sha256
    ).hexdigest()

    if not hmac.compare_digest(expected, signature):
        abort(403)

    data = request.json
    if data["event"] == "invitee.created":
        invitee = data["payload"]
        print(f"New booking: {invitee['name']} ({invitee['email']})")
        print(f"Meeting: {invitee['scheduled_event']['start_time']}")
        # TODO: POST to your CRM here

    return "", 200
```

**Gotcha:** Webhooks require a paid plan. The signing key is set when you create the subscription — store it securely. Rescheduling fires both `invitee.canceled` + `invitee.created`.

### Recipe 3: Check available times for an event type

**Use case:** Show available slots in your own UI instead of embedding Calendly.

```python
import requests

token = "YOUR_PERSONAL_ACCESS_TOKEN"
headers = {"Authorization": f"Bearer {token}"}

event_type_uri = "https://api.calendly.com/event_types/ETC123"
params = {
    "event_type": event_type_uri,
    "start_time": "2026-04-28T00:00:00Z",
    "end_time": "2026-05-05T00:00:00Z",
}
resp = requests.get(
    "https://api.calendly.com/event_type_available_times",
    headers=headers,
    params=params,
).json()

for slot in resp["collection"]:
    print(f"Available: {slot['start_time']} ({slot['status']})")
```

**Gotcha:** You can read availability but cannot create bookings via the API. To let users book, redirect them to the `scheduling_url` or use Calendly embeds.

## Integration patterns

### CRM sync (HubSpot / Salesforce)

**Native approach (recommended):**
- HubSpot (Standard plan): Calendly creates/updates HubSpot contacts on booking. Maps email, name, meeting time. Enable in Calendly → Integrations → HubSpot.
- Salesforce (Teams plan): Bidirectional sync — Calendly events appear as Salesforce events. Lead/contact matching by email.

**API approach (custom):**
1. Subscribe to `invitee.created` webhook
2. On event: extract invitee email, name, meeting time, Q&A answers
3. Search CRM for existing contact by email
4. Create or update contact, log meeting activity
5. On `invitee.canceled`: update CRM meeting status

**Conflict resolution:** Native integrations use email as the match key. If multiple CRM records share an email, Calendly picks the first match. Use custom webhook logic for deduplication.

### Webhook listener patterns

- **Verification:** HMAC-SHA256 using `Calendly-Webhook-Signature` header (format: `t={timestamp},v1={hash}`)
- **Retry behavior:** Calendly retries failed deliveries with exponential backoff. Returns 410 if your endpoint is consistently down → subscription deactivated.
- **Idempotency:** Use the invitee URI as an idempotency key — same booking won't fire duplicate events, but rescheduling fires cancel + create.

### Pagination

All list endpoints use cursor-based pagination:
- Response includes `pagination.next_page_token`
- Pass as `page_token` query parameter
- Default page size: 20, max: 100 (pass `count` parameter)
