# Vimcal Platform Reference

## Overview

Vimcal is a keyboard-first calendar app designed for professionals with heavy meeting schedules — founders, VCs, and executive assistants. Its primary differentiator is speed (<100ms UI response) and drag-to-share availability. Founded 2018 (YC S18), 9 employees, New York, $4.5M raised.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| **Keyboard shortcuts** | Full navigation, event creation, view switching via keyboard | UI-only |
| **Availability sharing** | Drag across time slots to generate formatted availability text | UI-only |
| **Booking links** | Personal scheduling pages for prospects to self-book | UI-only |
| **Polls** | Group scheduling — poll invitees for best time | UI-only (paid plan) |
| **Calendar unification** | Merge Google Calendar + Outlook into single view | UI-only |
| **Time zone visualization** | Overlay multiple time zones, see overlap windows | UI-only |
| **AI event creation** | Natural language to calendar event (e.g., "Meeting with Alex Thursday 2pm") | UI-only |
| **AI meeting summaries** | Post-meeting summaries (details limited) | UI-only |
| **Focus Mode** | Pomodoro timer, ambient sounds, customizable backdrop | UI-only |
| **Auto-merge duplicates** | Detect and merge duplicate events across calendars | UI-only |
| **Color coding** | Auto-color events by keywords or calendar source | UI-only |
| **Attendee profiles** | Show social profiles and company info for meeting participants | UI-only |
| **Vimcal EA** | Multi-exec scheduling, calendar holds, audit trails, weekly metrics | UI-only (EA plan) |

**No public API. No webhooks. No Zapier/Make modules. No MCP server.** All automation must go through the underlying calendar provider APIs (Google Calendar API or Microsoft Graph API).

## Pricing, limits & plan gates

| Plan | Price | Key features |
|---|---|---|
| **Free** | $0 | iOS app only — drag-to-share, time zone conversion, auto-merge, dark mode |
| **Standard** | $20/mo or $200/yr | Desktop (Mac/PC), booking links, polls, team scheduling, remove Vimcal branding |
| **Vimcal EA** | $75/mo or $750/yr | 5 simultaneous time zones, auto calendar holds, exec preferences, weekly metrics, 1-on-1 onboarding |
| **Enterprise** | Custom | SAML SSO, dedicated support, advanced security |

**Plan gates that matter:**
- Desktop app requires paid plan ($20/mo)
- Booking links require paid plan
- Polls require paid plan
- "Created with Vimcal" branding removal requires paid plan
- Vimcal EA features (calendar holds, exec preferences, metrics) require EA plan ($75/mo)

**Security certifications:** GDPR, ISO 27001, SOC 2 Type II, HIPAA. Annual third-party audits.

## Integrations

| Integration | Direction | Notes |
|---|---|---|
| **Google Calendar** | Bidirectional | Full sync — events, availability, calendar selection |
| **Outlook/Exchange** | Bidirectional | Full sync — same as Google Calendar |
| **Zoom** | Read | Auto-generates Zoom meeting links for booked events |
| **Google Meet** | Read | Auto-generates Meet links |
| **Microsoft Teams** | Read | Auto-generates Teams links |

**Not integrated:** Salesforce, HubSpot, Pipedrive, Zapier, Make, Slack (no notifications), any CRM.

**Workaround for CRM sync:** Since Vimcal writes events to Google Calendar or Outlook, use your CRM's native calendar sync (HubSpot Activity Sync, Salesforce Einstein Activity Capture) to capture meeting data from the calendar provider.

## Data model

Vimcal does not expose its own data model via API. All event data flows through the underlying calendar provider.

**Google Calendar event (what Vimcal creates):**
```json
{
  "summary": "Meeting with Alex — Product Demo",
  "start": {
    "dateTime": "2026-04-28T14:00:00-04:00",
    "timeZone": "America/New_York"
  },
  "end": {
    "dateTime": "2026-04-28T14:30:00-04:00",
    "timeZone": "America/New_York"
  },
  "attendees": [
    {"email": "alex@company.com"}
  ],
  "conferenceData": {
    "createRequest": {
      "requestId": "vimcal-abc123",
      "conferenceSolutionKey": {"type": "hangoutsMeet"}
    }
  }
}
```
<!-- Constructed from docs — verify against live API -->

**To automate around Vimcal**, use Google Calendar API or Microsoft Graph API directly:
- **Google Calendar API**: `https://www.googleapis.com/calendar/v3/`
- **Microsoft Graph API**: `https://graph.microsoft.com/v1.0/me/events`

## Quick-start recipes

### Recipe 1: Monitor Vimcal-booked meetings via Google Calendar API

Since Vimcal has no API, poll Google Calendar for new events to detect bookings:

**cURL:**
```bash
curl -H "Authorization: Bearer $GOOGLE_TOKEN" \
  "https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=$(date -u +%Y-%m-%dT%H:%M:%SZ)&singleEvents=true&orderBy=startTime&maxResults=10"
```

**Python:**
```python
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

creds = Credentials(token="YOUR_TOKEN")
service = build("calendar", "v3", credentials=creds)

events = service.events().list(
    calendarId="primary",
    timeMin="2026-04-28T00:00:00Z",
    singleEvents=True,
    orderBy="startTime",
    maxResults=10
).execute()

for event in events.get("items", []):
    print(f"{event['summary']} — {event['start'].get('dateTime')}")
```

### Recipe 2: Sync Vimcal meetings to CRM via calendar webhook

Set up a Google Calendar push notification to get real-time updates when Vimcal creates/modifies events:

**cURL — Create watch channel:**
```bash
curl -X POST \
  -H "Authorization: Bearer $GOOGLE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "vimcal-crm-sync",
    "type": "web_hook",
    "address": "https://your-server.com/calendar-webhook"
  }' \
  "https://www.googleapis.com/calendar/v3/calendars/primary/events/watch"
```

When your webhook receives a notification, fetch the changed events and push to your CRM via its API.

### Recipe 3: Auto-generate availability text with keyboard shortcuts

No code needed — this is Vimcal's killer workflow:

1. Open Vimcal → navigate to the week view
2. Hold `Shift` and drag across your preferred time slots
3. Vimcal auto-generates formatted availability text
4. Press `Cmd+C` (Mac) or `Ctrl+C` (PC) to copy
5. Paste directly into your email reply

The pasted text auto-formats with day, date, and times — already converted to the recipient's timezone if you've set their location.

## Integration patterns

### CRM sync architecture

Since Vimcal has no native CRM integration, the recommended pattern is:

```
Vimcal → Google Calendar/Outlook → CRM native calendar sync
```

1. **HubSpot**: Enable "Calendar Sync" in HubSpot settings → connects to Google/Outlook → auto-logs meetings as activities on contact timelines
2. **Salesforce**: Enable "Einstein Activity Capture" or "Lightning Sync" → captures calendar events as Activity records
3. **Pipedrive**: Enable "Calendar sync" in Pipedrive settings → links Google/Outlook events to deals

This pattern means meeting data reaches CRM with a short delay (typically 5-15 minutes) but requires zero Vimcal-specific configuration.

## Comparison with alternatives

| Feature | Vimcal ($20/mo) | Calendly ($10/mo) | Reclaim.ai ($8/mo) | Motion ($19/mo) | Cal.com (free) |
|---|---|---|---|---|---|
| **Primary value** | Fast calendar UI | Booking pages | AI schedule management | AI task + calendar | Open-source booking |
| **Keyboard-first** | Yes (core UX) | No | No | No | No |
| **Availability sharing** | Drag-to-share | Booking link only | Smart 1:1 links | No | Booking link only |
| **Time zone handling** | Best-in-class | Good | Good | Basic | Good |
| **Task scheduling** | No | No | Yes (AI) | Yes (AI) | No |
| **API** | None | Full REST API | REST API | Limited | Full REST API |
| **CRM integration** | None (via calendar) | Native (SF/HS) | None (via calendar) | None | Zapier/Make |
| **Mobile** | iOS only | iOS + Android | None | iOS + Android | None |
| **EA/assistant mode** | Yes ($75/mo) | No | No | No | No |

**When to recommend Vimcal**: User's pain is slow calendar navigation, multi-timezone scheduling, or availability sharing friction. They don't need API access or CRM integration.

**When NOT to recommend Vimcal**: User needs task time-blocking (→ Motion/Reclaim), API/webhook access (→ Calendly/Cal.com), CRM-native scheduling (→ Chili Piper/HubSpot Meetings), or Android support.

## Affiliate program

Vimcal offers a partner program at `vimcal.com/partner` with **30% revenue share** for one year on referred customers.
