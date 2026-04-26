# Cal.com Platform Reference

## Overview

Cal.com is open-source scheduling infrastructure (AGPL-3.0, 40K+ GitHub stars). Self-hostable or use the cloud version. Primary differentiator over Calendly: full API access, self-hosting for data sovereignty, embeddable UI atoms, and no per-seat pricing on self-hosted. Target audience: developers, startups, and teams that want scheduling they control.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| **Event Types** | Booking templates: one-on-one, round-robin, collective, managed | API-accessible |
| **Booking Pages** | Shareable scheduling links with custom branding | API-accessible |
| **Round-Robin** | Distribute meetings across team members (equal or weighted) | API-accessible (Teams+) |
| **Routing Forms** | Qualify prospects with form questions before booking | API-accessible (Teams+) |
| **Workflows** | Automated reminders, follow-ups, notifications via email/SMS | UI-only |
| **Cal Video** | Built-in video conferencing (no Zoom needed) | Webhook-accessible (recording events) |
| **Payments** | Collect via Stripe/PayPal at booking time | UI-only config, webhook-accessible (BOOKING_PAID) |
| **Atoms** | Embeddable React UI components for scheduling | API-accessible (Platform plan) |
| **Cal.ai** | AI phone agent for booking via voice call | UI-only |
| **Schedules** | Availability windows, time blocking, timezone management | API-accessible |
| **Webhooks** | 15+ trigger events for booking, meeting, form, no-show | API-accessible |
| **OAuth** | "Continue with Cal.com" for third-party apps | API-accessible |

## Pricing, limits & plan gates

| Plan | Price | Key gates |
|---|---|---|
| **Free** | $0 | 1 user, unlimited bookings/event types/calendars, Stripe/PayPal, HubSpot/Salesforce sync, 100+ integrations, mobile app, API key access |
| **Teams** | $12/user/mo (annual) | Round-robin, routing forms, managed/collective events, branded pages, custom APIs, booking analytics, recurring events, custom email/SMS |
| **Organizations** | $28/user/mo (annual) | SAML SSO, SCIM, HIPAA/SOC 2/ISO 27001, unlimited sub-teams, custom subdomain, instant meetings, domain-wide delegation |
| **Enterprise** | Custom | Dedicated DB, SLA, HRIS integrations, priority support |
| **Self-hosted** | $0 | All features (Teams-level), no per-seat pricing, you manage infrastructure |

**Rate limits:** API key 120 req/min (upgradable to 200 or 800 with support request). OAuth tokens: access 60 min, refresh 1 year.

**Annual discount:** 25% off on yearly billing for Teams and Organizations.

**14-day free trial** available for Teams and Organizations plans.

## Integrations

| Integration | Direction | Plan required |
|---|---|---|
| **Google Calendar** | Bidirectional sync | Free |
| **Outlook/Office 365** | Bidirectional sync | Free (cloud) / requires Azure AD config (self-hosted) |
| **Apple Calendar** | Read via ICS feed | Free |
| **Salesforce** | Two-way sync | Free |
| **HubSpot** | Two-way sync | Free |
| **Zoom** | Auto-generate meeting links | Free |
| **Google Meet** | Auto-generate meeting links | Free |
| **Microsoft Teams** | Auto-generate meeting links | Free |
| **Stripe** | Payment collection at booking | Free |
| **PayPal** | Payment collection at booking | Free |
| **Zapier** | 5 triggers (booking created/cancelled/rescheduled, OOO created, meeting ended) | Free |
| **Make** | Webhook-based modules | Free |
| **n8n** | Official Cal.com node | Free |
| **Slack** | Booking notifications | Free |

## Data model

### Event Type
```json
{
  "id": 123456,
  "title": "30-Min Discovery Call",
  "slug": "discovery-call",
  "length": 30,
  "description": "Quick intro call to discuss your needs",
  "locations": [{"type": "integrations:zoom"}],
  "hidden": false,
  "schedulingType": "ROUND_ROBIN",
  "minimumBookingNotice": 240,
  "beforeEventBuffer": 15,
  "afterEventBuffer": 15,
  "periodType": "ROLLING",
  "periodDays": 14
}
```
<!-- Constructed from docs — verify against live API -->

### Booking (webhook payload)
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
    "location": "https://app.cal.com/video/abc123",
    "metadata": {
      "videoCallUrl": "https://app.cal.com/video/abc123"
    }
  }
}
```
<!-- Constructed from docs — verify against live API -->

### Meeting Event (flat structure — no nested payload)
```json
{
  "triggerEvent": "MEETING_STARTED",
  "title": "Discovery Call between Jane and John",
  "startTime": "2026-04-28T14:00:00.000Z",
  "endTime": "2026-04-28T14:30:00.000Z",
  "uid": "abc123-def456",
  "organizer": { "name": "Jane Smith", "email": "jane@company.com" },
  "attendees": [{ "name": "John Doe", "email": "john@prospect.com" }]
}
```
<!-- Constructed from docs — verify against live API -->

## Quick-start recipes

### Recipe 1: Create a booking via API

**Trigger:** New lead in CRM → auto-book a discovery call
**Steps:** Authenticate → create booking → verify

```bash
# List available event types
curl -s -H "Authorization: Bearer cal_your_api_key" \
  "https://api.cal.com/v2/event-types" | jq '.data[]'

# Create a booking
curl -X POST "https://api.cal.com/v2/bookings" \
  -H "Authorization: Bearer cal_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "eventTypeId": 123456,
    "start": "2026-04-28T14:00:00.000Z",
    "responses": {
      "name": "John Doe",
      "email": "john@prospect.com"
    },
    "timeZone": "America/Chicago"
  }'
```

```python
import requests

API_KEY = "cal_your_api_key"
BASE = "https://api.cal.com/v2"
headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

# Create booking
resp = requests.post(f"{BASE}/bookings", headers=headers, json={
    "eventTypeId": 123456,
    "start": "2026-04-28T14:00:00.000Z",
    "responses": {"name": "John Doe", "email": "john@prospect.com"},
    "timeZone": "America/Chicago",
})
print(resp.json())
```

**Gotcha:** `eventTypeId` must be an active event type you own. Check with `GET /v2/event-types` first.

### Recipe 2: Listen for booking webhooks and verify signature

**Trigger:** Any booking event → process in your backend
**Steps:** Set up webhook → verify HMAC → parse payload

```python
import hmac
import hashlib
from flask import Flask, request, jsonify

app = Flask(__name__)
WEBHOOK_SECRET = "your_webhook_secret"

@app.route("/webhook/calcom", methods=["POST"])
def handle_webhook():
    # Verify HMAC-SHA256 signature
    signature = request.headers.get("x-cal-signature-256", "")
    expected = hmac.new(
        WEBHOOK_SECRET.encode(), request.data, hashlib.sha256
    ).hexdigest()
    if not hmac.compare_digest(signature, expected):
        return jsonify({"error": "Invalid signature"}), 401

    data = request.json
    event = data["triggerEvent"]

    if event == "BOOKING_CREATED":
        payload = data["payload"]
        print(f"New booking: {payload['title']}")
        print(f"  Attendee: {payload['attendees'][0]['email']}")
        print(f"  Time: {payload['startTime']}")
        # Push to CRM here
    elif event == "BOOKING_CANCELLED":
        payload = data["payload"]
        print(f"Cancelled: {payload['title']}")
        print(f"  Reason: {payload.get('cancellationReason', 'none')}")

    return jsonify({"ok": True}), 200
```

**Gotcha:** Meeting events (MEETING_STARTED/ENDED) use a flat structure — no `data["payload"]` wrapper. Check `triggerEvent` before parsing.

### Recipe 3: Get available slots for a date range

**Trigger:** Display availability in your own UI
**Steps:** Query slots → show to user → book selected slot

```bash
curl -s -H "Authorization: Bearer cal_your_api_key" \
  "https://api.cal.com/v2/slots/available?eventTypeId=123456&startTime=2026-04-28T00:00:00Z&endTime=2026-05-02T00:00:00Z&timeZone=America/New_York" \
  | jq '.data'
```

```python
import requests

resp = requests.get(
    "https://api.cal.com/v2/slots/available",
    headers={"Authorization": "Bearer cal_your_api_key"},
    params={
        "eventTypeId": 123456,
        "startTime": "2026-04-28T00:00:00Z",
        "endTime": "2026-05-02T00:00:00Z",
        "timeZone": "America/New_York",
    },
)
slots = resp.json()["data"]
for date, times in slots.items():
    for slot in times:
        print(f"  {slot['time']}")
```

## Integration patterns

### CRM sync via webhooks
1. Subscribe to `BOOKING_CREATED`, `BOOKING_CANCELLED`, `BOOKING_RESCHEDULED`
2. On `BOOKING_CREATED`: search CRM for attendee email → if found, create activity on existing contact; if not, create new contact + activity
3. On `BOOKING_CANCELLED`: update CRM activity status to cancelled, log reason
4. On `BOOKING_RESCHEDULED`: update activity time, log old → new time change
5. **Conflict resolution:** Cal.com is source of truth for meeting data; CRM is source of truth for contact/deal data. Don't sync contact fields back to Cal.com.

### Zapier automation patterns
- **Trigger:** New booking in Cal.com → **Action:** Create HubSpot contact + deal
- **Trigger:** Booking cancelled → **Action:** Send Slack notification to sales channel
- **Trigger:** After meeting ends → **Action:** Create follow-up task in project management tool

### Self-hosted deployment
- Docker Compose is the recommended approach: `docker-compose up -d`
- Required env vars: `DATABASE_URL`, `NEXT_PUBLIC_WEBAPP_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `CALENDSO_ENCRYPTION_KEY`
- For Outlook: register an Azure AD app with `Calendars.ReadWrite` scope, set `MS_GRAPH_CLIENT_ID` and `MS_GRAPH_CLIENT_SECRET`
- For Google Calendar: create OAuth credentials in Google Cloud Console, set `GOOGLE_API_CREDENTIALS`
- Enable calendar sync cron: `CRON_ENABLE_CALENDAR_SYNC=true`
