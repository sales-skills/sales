# Interprefy Platform Reference

## Overview

Interprefy (interprefy.com) is an enterprise multilingual communication platform combining Remote Simultaneous Interpretation (RSI) with human interpreters, AI-powered speech translation, and live captions. Targets event organizers, enterprises, and institutions hosting multilingual meetings and events. Differentiator: four flexible integration methods (Inject, Widget, Agent, Virtual Cable) that work across 80+ meeting and event platforms, plus a network of 6,000+ professional interpreters.

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| Remote Simultaneous Interpretation (RSI) | Live human interpretation — spoken and sign language, 6,000+ interpreters globally | UI-only (interpreter booking via dashboard) |
| AI Speech Translation | Real-time automated translation, 80+ languages, enterprise-grade | UI-only (toggle via dashboard) |
| Live Captions & Subtitles | AI-powered captioning, 6,000+ language combinations | UI-only |
| Media Services | Event recording, secure storage, professionally edited delivery | UI-only |
| Interprefy Inject | Delivers translation directly into meeting platform audio feed — seamless, no separate app | UI-only (configured per event) |
| Interprefy Widget | Separate panel alongside events for interpretation/captions | UI-only (embed via iframe) |
| Interprefy Virtual Cable | AI speech translation + captions without changing existing AV setup | UI-only |
| Interprefy Agent | Smart participant that auto-joins meetings, streams audio to Interprefy for translation | UI-only (configured per meeting) |
| Event Management | Create/manage events, sessions, language channels | **API-accessible** (REST API v2, JWT auth) |
| Session Management | Create interpretation sessions, assign languages, manage login tokens | **API-accessible** (REST API v2) |
| RTC Session Access | Client-side session token generation for real-time communication | **API-accessible** (static token auth) |
| Booking Requests | Programmatic interpretation booking email submission | **API-accessible** (static token auth) |
| Network Testing | Generate test sessions for network quality verification | **API-accessible** (static token auth) |

## Pricing, limits & plan gates

Pricing is 100% custom-quoted — no public dollar amounts.

**Pricing models:**

| Model | Best for | Details |
|---|---|---|
| Hourly rates | Meetings, webinars, shorter sessions | Platform access included, volume discounts available |
| Daily rates | Events running 5+ hours | Up to 10 hours coverage/day, dedicated event support |
| 12-month plans | Recurring multilingual events | Bundled hours, minimum 10 hours, usable across 12 months |

**Three plan modules:**
1. **Platform** — access to platform and mobile app, billed per minute
2. **Professional Services** — project management, remote support, training, billed hourly
3. **Interpreters** — certified interpreter services for multilingual events

**Cost factors:** event duration, number of languages, number of attendees, human vs AI services, support level needed.

**Claims**: up to 75% cost reduction vs on-site interpretation through cloud-based remote services.

**Plan-gated features:** No public documentation on feature gating. All pricing requires contacting sales.

**API access:** Not documented as plan-gated — appears available to all customers with API tokens.

## Integrations

**80+ platform integrations** via four methods:

| Integration method | How it works | Best for |
|---|---|---|
| **Interprefy Inject** | Delivers translation directly into meeting platform's audio feed | Seamless experience — attendees stay in their meeting tool |
| **Interprefy Widget** | Separate panel alongside the event | Platforms that can't modify audio feeds |
| **Interprefy Virtual Cable** | Accessible via mobile app or web platform | Existing AV setups that can't be modified |
| **Interprefy Agent** | Auto-joins meetings as a smart participant, QR code for language selection | Quick setup — no platform integration needed |

**Confirmed platform integrations:**

| Platform | Integration method | Notes |
|---|---|---|
| Microsoft Teams | Inject / Agent | Native integration |
| Zoom | Inject / Agent | Marketplace integration |
| Google Meet | Agent / Widget | Via Agent auto-join |
| Webex (Cisco) | Inject / Widget | Native integration |
| RingCentral / BlueJeans | Widget | Via iframe embed |
| ON24 | Widget | Virtual event platform |
| Livestorm | Widget | Virtual event platform |
| 6Connex | Widget | Virtual event platform |
| Bizzabo | Widget | Event management platform |
| Accelevents | Widget | Virtual event platform |
| Airmeet | Widget | Virtual event platform |

**CRM integration:** None documented. No Zapier/Make connectors. All automation is via the REST API.

## Data model

### Event object

```json
{
  "id": 42,
  "name": "global-sales-kickoff-2026",
  "displayName": "Global Sales Kickoff 2026",
  "logo": "https://cdn.example.com/logo.png",
  "owner": 1,
  "managers": [1, 5, 12],
  "disabled": false,
  "subscribersSeeFloor": false,
  "locationHint": "192.168.1.100",
  "allowSourceVideo": false,
  "quality": "high",
  "mobileDisallow": false,
  "mobileAudienceDisallow": false,
  "mobileData": "",
  "mfa": "email"
}
```

### Session object

```json
{
  "id": 101,
  "event": 42,
  "language": "Spanish",
  "languageCode": "es",
  "isFloor": false,
  "sessionId": "2_MX40Njk0OTEwNH5-...",
  "mode": "routed",
  "archive": true
}
```
<!-- Constructed from docs — verify against live API -->

### Login Token object

```json
{
  "id": 200,
  "event": 42,
  "token": "ABC12345",
  "tokenType": "participant"
}
```
<!-- Constructed from docs — verify against live API -->

Token types: `participant`, `interpreter`, `floor`, `remote`, `moderator`

### RTC Session response

```json
{
  "event": { "id": 42, "name": "global-sales-kickoff-2026" },
  "loginToken": { "tokenType": "participant" },
  "sessions": [
    {
      "language": "Spanish",
      "sessionId": "2_MX40Njk0OTEwNH5-...",
      "sessionToken": "T1==cGFydG5lcl9pZ..."
    }
  ]
}
```
<!-- Constructed from docs — verify against live API -->

## Quick-start recipes

### Recipe 1: Create an event with language sessions

**Trigger**: You need to programmatically create a multilingual event with interpretation channels.

**Steps:**
1. Obtain a JWT token
2. Create the event
3. Create a floor session (original language)
4. Create language sessions for each target language
5. Generate login tokens for participants and interpreters

**Code (cURL):**

```bash
# Step 1: Obtain JWT
TOKEN=$(curl -s -X POST "https://session.interprefy.com/api/v2/token-auth/obtain/" \
  -H "Content-Type: application/json" \
  -d '{"username":"your_user","password":"your_pass"}' | jq -r '.token')

# Step 2: Create event
EVENT_ID=$(curl -s -X POST "https://session.interprefy.com/api/v2/events/" \
  -H "Authorization: JWT $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"sales-kickoff-2026","displayName":"Sales Kickoff 2026"}' | jq -r '.id')

# Step 3: Create floor session
curl -s -X POST "https://session.interprefy.com/api/v2/sessions/" \
  -H "Authorization: JWT $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"event\":$EVENT_ID,\"language\":\"Floor\",\"isFloor\":true}"

# Step 4: Create language sessions
for LANG in "Spanish" "French" "Mandarin"; do
  curl -s -X POST "https://session.interprefy.com/api/v2/sessions/" \
    -H "Authorization: JWT $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"event\":$EVENT_ID,\"language\":\"$LANG\"}"
done

# Step 5: Generate participant token
curl -s -X POST "https://session.interprefy.com/api/v2/logintokens/" \
  -H "Authorization: JWT $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"event\":$EVENT_ID,\"token\":\"PART$(date +%s)\",\"tokenType\":\"participant\"}"
```

**Code (Python):**

```python
import requests

BASE = "https://session.interprefy.com/api/v2"

# Obtain JWT
resp = requests.post(f"{BASE}/token-auth/obtain/",
    json={"username": "your_user", "password": "your_pass"})
token = resp.json()["token"]
headers = {"Authorization": f"JWT {token}", "Content-Type": "application/json"}

# Create event
event = requests.post(f"{BASE}/events/",
    headers=headers,
    json={"name": "sales-kickoff-2026", "displayName": "Sales Kickoff 2026"}).json()

# Create floor + language sessions
requests.post(f"{BASE}/sessions/", headers=headers,
    json={"event": event["id"], "language": "Floor", "isFloor": True})

for lang in ["Spanish", "French", "Mandarin"]:
    requests.post(f"{BASE}/sessions/", headers=headers,
        json={"event": event["id"], "language": lang})

# Generate login token
import time
requests.post(f"{BASE}/logintokens/", headers=headers,
    json={"event": event["id"], "token": f"PART{int(time.time())}", "tokenType": "participant"})
```

**Gotchas:** JWT expires after 7 days (1-hour grace). Refresh via `/token-auth/refresh/` before expiry. Boolean query params must be capitalized (`True`/`False`).

### Recipe 2: Client-side session access for attendees

**Trigger**: Your custom event platform needs to connect attendees to their chosen language channel.

**Steps:**
1. Generate a login token per attendee (via management API)
2. On the client side, use the static API token to request an RTC session
3. Use the returned TokBox session ID and token to connect to the audio stream

**Code (cURL):**

```bash
# Client-side: exchange login token for RTC session
curl -s -X POST "https://session.interprefy.com/api/v2/rtcsessions/" \
  -H "Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b" \
  -H "Content-Type: application/json" \
  -d '{"loginToken":"PART1714000000"}'
```

**Response (201 Created):**

```json
{
  "event": {"id": 42, "name": "sales-kickoff-2026"},
  "loginToken": {"tokenType": "participant"},
  "sessions": [
    {
      "language": "Spanish",
      "sessionId": "2_MX40Njk0OTEwNH5-...",
      "sessionToken": "T1==cGFydG5lcl9pZ..."
    }
  ]
}
```

**Gotchas:** Use `additionalAccess: ["view_floor"]` to force floor session return for participant tokens. Invalid tokens return 403. Disabled events return 404.

### Recipe 3: Submit a booking request via API

**Trigger**: You want to automate interpretation booking requests from your internal event system.

**Code (cURL):**

```bash
curl -s -X POST "https://session.interprefy.com/api/v2/bookingemails/" \
  -H "Authorization: Token YOUR_STATIC_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "event": {
      "date": "2026-05-15",
      "country": "Switzerland",
      "lengthDays": "3",
      "lengthHoursDay": "8",
      "amountPeople": "500",
      "fromLang": "English",
      "toLang": "Spanish, French, German"
    },
    "contact": {
      "name": "Event Coordinator",
      "position": "Head of Events",
      "company": "Acme Corp",
      "phone": "+41 79 123 4567",
      "email": "events@acme.com"
    }
  }'
```

**Response:** 204 No Content (email sent successfully). 400 if fields missing, 500 if email delivery fails.

## Integration patterns

### Authentication

Two auth mechanisms:

| Method | Use case | Header format |
|---|---|---|
| Static API token | Client-side session access, booking emails, network tests | `Authorization: Token {token}` |
| JWT | Management operations (events, sessions, users, login tokens) | `Authorization: JWT {token}` |

JWT flow: obtain via `POST /token-auth/obtain/` (username + password), expires in 7 days, refresh via `POST /token-auth/refresh/` (up to 30 days from initial issue).

### Pagination

Offset-based pagination with default page size of 100.

```
GET /api/v2/events/?limit=50&offset=2
```

Parameters: `limit` (page size), `offset` (page number — not item offset).

### Error handling

```json
// General error
{"detail": "Authentication credentials were not provided."}

// Field-specific error
{"password": ["This field is required."]}

// Non-field error
{"nonFieldErrors": ["Unable to login with provided credentials."]}
```

### Rate limits

Not documented in the API reference. No rate limit headers mentioned. If you hit rate limits, implement exponential backoff starting at 1 second.

### Filtering

Use query parameters to filter collections:
```
GET /api/v2/sessions/?event=3
```

Note: Boolean values must be capitalized (`True`/`False`, not `true`/`false`).
