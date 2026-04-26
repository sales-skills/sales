# SavvyCal Platform Reference

## Overview

SavvyCal is a scheduling platform focused on personalized, recipient-friendly booking. Its differentiator is the calendar overlay — recipients can see their own calendar alongside your available times, making it easier to find a mutually convenient slot. Founded by Derrick Reimer, ~2,000 customers, positioned between Calendly (mass-market) and Cal.com (developer-first).

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| **Scheduling Links** | Reusable, one-time, or personalized booking links with ranked availability | API-accessible |
| **Calendar Overlay** | Recipients overlay their own calendar to compare availability | UI-only (booker-side) |
| **Meeting Polls** | Group availability coordination for finding mutual times | UI-only |
| **Team Scheduling** | Collective (all must be free), round-robin (distribute), group (many-to-one slot) | API-accessible |
| **Workflows** | Automated reminders and follow-up notifications | UI-only config |
| **Payments** | Stripe-powered paid bookings (Premium plan) | UI-only config, webhook-accessible |
| **Embedding** | Inline, popover, floating widget, hyperlink — JS library | Embed API |
| **Webhooks** | 16 event types with HMAC-SHA256 verification | API-accessible |
| **REST API** | Scheduling links CRUD, events listing, time slots, webhooks | API-accessible |
| **Custom Domains** | White-label scheduling on your own domain (Premium plan) | UI-only config |
| **Delegated Access** | Let an assistant manage your scheduling (Premium plan) | UI-only |

## Pricing, limits & plan gates

| Plan | Price | Key gates |
|---|---|---|
| **Basic** | $12/user/mo | Unlimited links/calendars/teams, collective/round-robin/group, workflows, reminders, CRM integrations (HubSpot, Close), Zapier, API, webhooks, website embedding, Chrome extension, conferencing integrations |
| **Premium** | $20/user/mo | All Basic + custom domains, delegated access, paid bookings (Stripe), remove branding |

**Annual billing**: 2 months free (pay for 10, get 12).

**30-day money-back guarantee** on both plans.

**Free trial** available for both plans.

**No free tier** — both plans are paid. (SavvyCal previously had a free plan with 1 link; this was removed.)

**Affiliate program**: 25% recurring commission via Rewardful (savvycal.getrewardful.com).

## Integrations

| Integration | Type | Plan |
|---|---|---|
| **Google Calendar** | Bidirectional sync | Basic |
| **Outlook Calendar** | Bidirectional sync | Basic |
| **iCloud Calendar** | Bidirectional sync | Basic |
| **Fastmail Calendar** | Bidirectional sync | Basic |
| **Zoom** | Auto-generate meeting links | Basic |
| **Google Meet** | Auto-generate meeting links | Basic |
| **Microsoft Teams** | Auto-generate meeting links | Basic |
| **Whereby** | Attach meeting rooms | Basic |
| **SquadCast** | Create recording sessions (podcasting) | Basic |
| **HubSpot** | Create leads, record activity on booking | Basic |
| **Close** | Create leads, record activity on booking | Basic |
| **Stripe** | Payment collection at booking | Premium |
| **Slack** | Channel notifications on booking events | Basic |
| **Zapier** | 8 triggers, 0 actions | Basic |
| **Webhooks** | 16 event types, HMAC-SHA256 | Basic |
| **Podia** | Embed on coaching page | Basic |
| **Digioh** | Embed in Digioh box | Basic |
| **Userlist** | Create users, track events | Basic |
| **Fathom Analytics** | Privacy-first analytics on booking pages | Basic |
| **Chrome Extension** | Access links from any page | Basic |
| **Raycast** | Access links from Raycast launcher | Basic |

### Zapier triggers (8)

1. New Event Scheduled
2. Event Requested (requires approval)
3. Event Approved
4. Event Declined
5. Event Rescheduled
6. Event Canceled
7. Attendee Canceled from Group Event
8. Workflow Action Triggered

**No Zapier actions** — you cannot create events or manage links via Zapier. Use the REST API for write operations.

## Data model

| Entity | What it represents | Key relationships |
|---|---|---|
| **Link** | A scheduling link (reusable, one-time, or personalized) | Has Events, belongs to a User/Team |
| **Event** | A scheduled meeting booked via a link | Belongs to a Link, has Attendees, has Payment |
| **Attendee** | A person who booked or was added to an event | Belongs to an Event |
| **Payment** | Stripe payment associated with a paid booking | Belongs to an Event |
| **Poll** | A group availability poll | Has Responses |
| **Team** | A group of users for collective/round-robin/group scheduling | Has Users, has Links |
| **Webhook** | A subscription to event notifications | Has Events (triggers) |

## Embedding

SavvyCal's JavaScript embed library supports 4 modes. Install with 3 script tags before `</body>`:

```html
<script>window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};</script>
<script async src="https://embed.savvycal.com/v1/embed.js"></script>
<script>SavvyCal('init')</script>
```

### Mode 1: Hyperlink pop-up
```html
<a data-savvycal-embed href="https://savvycal.com/username/meeting">Schedule time</a>
```
Optional attributes: `data-email`, `data-display-name`, `data-phone`, `data-view`, `data-theme`, `data-hide-avatar`, `data-hide-banner`

### Mode 2: Floating widget button
```javascript
SavvyCal('init', { widget: { enabled: true, link: 'username/meeting', prompt: 'Book a call' } })
```

### Mode 3: JavaScript pop-up
```javascript
SavvyCal('open', { link: 'username/meeting' })
```

### Mode 4: Inline embed
```javascript
SavvyCal('inline', { link: 'username/meeting', selector: '#booking-container' })
```

### Tracking bookings (all modes)
```javascript
window.addEventListener("savvycal.scheduled", (ev) => {
  const { id, link, email, startAt, endAt } = ev.detail;
  // Push to analytics, CRM, etc.
})
```

### Custom domain
```javascript
SavvyCal('init', { origin: 'meet.yourdomain.com' })
```

## Quick-start recipes

### Recipe 1: List all scheduling links (cURL)

```bash
curl -s https://api.savvycal.com/v1/links \
  -H "Authorization: Bearer pt_secret_YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

### Recipe 2: Listen for new bookings (Python webhook handler)

```python
import hmac
import hashlib
from flask import Flask, request, jsonify

app = Flask(__name__)
WEBHOOK_SECRET = "your_webhook_secret"

@app.route("/webhook/savvycal", methods=["POST"])
def handle_webhook():
    signature = request.headers.get("x-savvycal-signature", "")
    expected = hmac.new(
        WEBHOOK_SECRET.encode(), request.data, hashlib.sha256
    ).hexdigest()
    if not hmac.compare_digest(signature, expected):
        return jsonify({"error": "invalid signature"}), 401

    event = request.json
    event_type = event.get("type")

    if event_type == "event.created":
        # New booking — push to CRM
        print(f"New booking: {event}")
    elif event_type == "event.canceled":
        # Cancellation — update CRM
        print(f"Cancellation: {event}")

    return jsonify({"ok": True}), 200
```

### Recipe 3: Embed with conversion tracking

```html
<div id="booking"></div>
<script>window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};</script>
<script async src="https://embed.savvycal.com/v1/embed.js"></script>
<script>
  SavvyCal('init');
  SavvyCal('inline', { link: 'username/discovery', selector: '#booking' });
  window.addEventListener("savvycal.scheduled", (ev) => {
    // Google Analytics 4 conversion
    gtag('event', 'meeting_booked', {
      email: ev.detail.email,
      link: ev.detail.link
    });
  });
</script>
```

## SavvyCal vs alternatives

| Feature | SavvyCal | Calendly | Cal.com |
|---|---|---|---|
| **Calendar overlay** | Yes (signature feature) | No | No |
| **Ranked availability** | Yes — preferred times shown first | No | No |
| **Free plan** | No | Yes (1 event type) | Yes (unlimited) |
| **Self-hosting** | No | No | Yes (AGPL-3.0) |
| **API** | REST, OAuth + personal tokens | REST v2, OAuth + PAT | REST v2, Bearer token |
| **Webhooks** | 16 events, HMAC-SHA256 | 3 events (paid plans) | 15+ events, HMAC-SHA256 |
| **Embed** | 4 modes (inline/popover/widget/link) | 3 modes (inline/popup widget/popup text) | React atoms (Platform plan) |
| **Round-robin** | Basic plan | Teams ($16/mo) | Teams ($12/mo) |
| **Routing forms** | No | Teams ($16/mo) | Teams ($12/mo) |
| **CRM integration** | HubSpot, Close | HubSpot (Standard+), Salesforce (Teams+) | HubSpot, Salesforce (Free) |
| **Payments** | Stripe (Premium) | Stripe/PayPal | Stripe/PayPal (Free) |
| **Mobile app** | No | Yes | Yes |
| **Best for** | Personalized 1:1 scheduling, relationship-focused sellers | Mass-market scheduling, broad integration ecosystem | Developers, self-hosters, teams wanting full API control |
