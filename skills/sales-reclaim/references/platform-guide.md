# Reclaim.ai Platform Reference

## Overview

Reclaim.ai is an AI calendar automation tool that auto-schedules tasks, habits, focus time, meetings, and buffer time around existing calendar events. Primary differentiator: it works *on top of* your existing Google Calendar or Outlook rather than replacing it. Target audience: busy professionals, founders, and teams who want AI to manage their time without abandoning their calendar provider.

## Capabilities & automation surface

| Capability | What it does | Automation surface |
|---|---|---|
| **AI Tasks** | Syncs tasks from Asana/ClickUp/Todoist/Jira/Linear/Google Tasks and auto-schedules them by priority and due date | API-accessible (full CRUD + planner actions) |
| **AI Focus Time** | Defends uninterrupted work blocks based on weekly hour goals | UI-only (set goals in app) |
| **AI Habits** | Recurring routines (lunch, exercise, reading) that flex around schedule | API-accessible (CRUD + planner actions) |
| **AI Smart Meetings** | Finds optimal meeting times across all attendees | UI-only |
| **AI Scheduling Links** | Booking pages with smart availability based on all calendars | Webhook-accessible (Business+ plan) |
| **AI Calendar Sync** | Blocks availability across multiple Google/Outlook calendars | UI-only |
| **AI Buffer Time** | Auto-schedules breaks/travel between meetings | UI-only (configure in app) |
| **AI Time Tracking** | Analyzes time across meetings, tasks, focus time | UI-only (analytics dashboard) |
| **Workforce Analytics** | Team-level time metrics and dashboards | UI-only (admin dashboard) |

## Pricing, limits & plan gates

| Feature | Lite (Free) | Starter ($10/seat/mo) | Business ($15/seat/mo) | Enterprise ($22/seat/mo) |
|---|---|---|---|---|
| Max users | 1 | 10 | 100 | 100+ |
| Scheduling range | 1 week | 8 weeks | 12 weeks | 12 weeks |
| Scheduling Links | 1 | 3 | Unlimited | Unlimited |
| Habits | 1 | Unlimited | Unlimited | Unlimited |
| Calendar Sync | 1 personal | Unlimited | Unlimited | Unlimited |
| Smart Meetings | - | 3 | Unlimited | Unlimited |
| Integrations | Limited | Unlimited | Unlimited | Unlimited |
| Webhooks | - | - | Yes | Yes |
| OOO Calendar | - | - | Yes | Yes |
| Delegated Access | - | - | Yes | Yes |
| SSO/SCIM | - | - | - | Yes |
| Tasks & Buffer Time | Unlimited | Unlimited | Unlimited | Unlimited |

Annual billing prices shown. Monthly: Starter $12, Business $18. Enterprise annual-only.

**Rate limits**: API rate limit is 100 requests/minute (all plans).

**Will my integration break on the free plan?** The API is accessible on all plans, but webhooks require Business+. Scheduling links are limited to 1 on Lite. Task and habit APIs work on all plans.

## Integrations

| Integration | Direction | Notes |
|---|---|---|
| **Google Calendar** | Bidirectional | Primary calendar provider, fastest sync |
| **Outlook/Exchange** | Bidirectional | Supported, slightly slower sync |
| **Slack** | Write | Status sync — Reclaim updates Slack status based on calendar |
| **Zoom** | Read | Meeting link generation |
| **Asana** | Bidirectional | Task sync |
| **ClickUp** | Bidirectional | Task sync |
| **Todoist** | Bidirectional | Task sync |
| **Jira** | Bidirectional | Task sync |
| **Linear** | Bidirectional | Task sync |
| **Google Tasks** | Bidirectional | Task sync |
| **Raycast** | Read | Mac quick-access extension |
| **Zapier** | Actions: Create Task, API Request (Beta). No triggers. | API key auth from Developer Settings |
| **Make** | Modules: Create Task, Get Task, List Tasks, List Events, API Call | API key auth |
| **HubSpot** | Coming soon | Not yet available |
| **Salesforce** | Coming soon | Not yet available |

## Data model

### Task object

<!-- Constructed from unofficial SDK + Zapier docs — verify against live API -->

```json
{
  "id": "uuid",
  "title": "Write Q2 report",
  "status": "NEW|IN_PROGRESS|COMPLETE|ARCHIVED|CANCELLED",
  "priority": "P1|P2|P3|P4",
  "timeNeeded": "PT2H",
  "minChunkSize": "PT30M",
  "maxChunkSize": "PT2H",
  "due": "2026-05-01T17:00:00Z",
  "snoozeUntil": null,
  "eventCategory": "WORK|PERSONAL",
  "eventColor": null,
  "notes": "Include revenue charts",
  "onDeck": false,
  "taskSource": {
    "type": "RECLAIM|TODOIST|ASANA|CLICKUP|JIRA|LINEAR|GOOGLE_TASKS",
    "externalId": "ext-123"
  }
}
```

### Habit object

<!-- Constructed from unofficial SDK — verify against live API -->

```json
{
  "id": "uuid",
  "title": "Lunch break",
  "enabled": true,
  "recurrence": "DAILY_WEEKDAYS",
  "idealTime": "12:00",
  "duration": "PT1H",
  "defenseLevel": "FLEXIBLE|DEFAULT|AGGRESSIVE",
  "eventCategory": "PERSONAL"
}
```

### Webhook payload (Scheduling Link events)

```json
{
  "type": "SchedulingLink.Meeting.Created",
  "event_ts": "2026-04-26T14:30:00Z",
  "webhook_sent_at": "2026-04-26T14:30:01Z",
  "api_version": "v2025-09-26",
  "request_id": "uuid",
  "meeting": {
    "participants": [{"name": "Jane Doe", "email": "jane@example.com"}],
    "attendee": {"name": "John Smith", "email": "john@prospect.com"},
    "start_time": "2026-04-28T10:00:00Z",
    "end_time": "2026-04-28T10:30:00Z",
    "scheduling_link_id": "uuid",
    "scheduling_link_title": "30-min Product Demo",
    "scheduling_link_description": "Walk through the product",
    "meeting_id": "uuid",
    "meeting_title": "Product Demo with John",
    "meeting_url": "https://zoom.us/j/123456",
    "custom_data": {"data": {}, "errors": []}
  }
}
```

Webhook headers: `x-reclaim-webhook-type`, `x-reclaim-api-version`, `x-reclaim-signature-256` (HMAC-SHA256).

## Quick-start recipes

### Recipe 1: Create a task via API

**Trigger**: New deal in CRM → create a "Prep for demo" task in Reclaim

```bash
curl -X POST "https://api.app.reclaim.ai/api/tasks" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Prep demo for Acme Corp",
    "timeNeeded": "PT1H",
    "minChunkSize": "PT30M",
    "maxChunkSize": "PT1H",
    "due": "2026-05-01T17:00:00Z",
    "priority": "P2",
    "eventCategory": "WORK",
    "notes": "Review their usage data before call"
  }'
```

```python
import requests

resp = requests.post(
    "https://api.app.reclaim.ai/api/tasks",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json={
        "title": "Prep demo for Acme Corp",
        "timeNeeded": "PT1H",
        "minChunkSize": "PT30M",
        "maxChunkSize": "PT1H",
        "due": "2026-05-01T17:00:00Z",
        "priority": "P2",
        "eventCategory": "WORK",
        "notes": "Review their usage data before call"
    }
)
task = resp.json()
print(f"Task created: {task['id']}")
```

**Gotcha**: `timeNeeded`, `minChunkSize`, `maxChunkSize` use ISO 8601 duration format (PT1H = 1 hour, PT30M = 30 minutes).

### Recipe 2: Verify and process scheduling link webhooks

**Trigger**: Prospect books a meeting via Reclaim scheduling link → log to CRM

```python
import hmac
import hashlib
import base64
from flask import Flask, request, jsonify

app = Flask(__name__)
WEBHOOK_SECRET = "your-webhook-secret"

@app.route("/reclaim-webhook", methods=["POST"])
def handle_webhook():
    # Verify signature
    signature = request.headers.get("x-reclaim-signature-256", "")
    expected = "sha256=" + base64.b64encode(
        hmac.new(
            WEBHOOK_SECRET.encode(),
            request.get_data(),
            hashlib.sha256
        ).digest()
    ).decode()

    if not hmac.compare_digest(signature, expected):
        return jsonify({"error": "Invalid signature"}), 401

    payload = request.json
    event_type = payload["type"]
    meeting = payload["meeting"]

    if event_type == "SchedulingLink.Meeting.Created":
        attendee_email = meeting["attendee"]["email"]
        start_time = meeting["start_time"]
        # Log to CRM via API...
        print(f"New booking: {attendee_email} at {start_time}")

    return jsonify({"ok": True}), 200
```

**Gotcha**: Webhooks require Business plan ($15/seat/mo). Delivery is "at most once" with exponential backoff retries. Endpoints suspended after 24hr of failures.

### Recipe 3: List all tasks and sync to a spreadsheet

```bash
curl "https://api.app.reclaim.ai/api/tasks" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

```python
import requests
import csv

resp = requests.get(
    "https://api.app.reclaim.ai/api/tasks",
    headers={"Authorization": "Bearer YOUR_API_KEY"}
)
tasks = resp.json()

with open("reclaim_tasks.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Title", "Status", "Priority", "Due"])
    for task in tasks:
        writer.writerow([
            task["title"],
            task["status"],
            task.get("priority", ""),
            task.get("due", "")
        ])
print(f"Exported {len(tasks)} tasks")
```

## Integration patterns

### CRM sync (via Zapier/Make until native integrations ship)

Since HubSpot and Salesforce integrations are "coming soon," bridge with:

1. **Zapier**: Use "Create Task" action to push CRM events → Reclaim tasks. Use "API Request" action for custom endpoints.
2. **Make**: Use "Create Task" module for CRM → Reclaim, "List Events" for Reclaim → CRM reporting.
3. **Webhooks** (Business+): Receive scheduling link bookings and POST to CRM API.

### Webhook listener setup

1. Admin creates webhook configuration in Team Settings → Webhook Settings
2. Specify: Name, HTTPS endpoint URL, auto-generated Secret
3. Attach webhook config to specific Scheduling Links
4. Events: `SchedulingLink.Meeting.Created`, `SchedulingLink.Meeting.Updated`, `SchedulingLink.Meeting.Cancelled`
5. Verify signatures using HMAC-SHA256 (see Recipe 2)
6. Respond with 2xx within 10 seconds

### Task integration sync architecture

Reclaim syncs bidirectionally with task managers:
- **Asana/ClickUp/Todoist/Jira/Linear/Google Tasks** → Tasks appear in Reclaim and get auto-scheduled
- **Status updates flow back** — marking a task complete in Reclaim updates the source
- **Conflict resolution**: Source task manager is authoritative for title/description; Reclaim is authoritative for scheduling

## Comparison with alternatives

| Feature | Reclaim.ai | Motion | Sunsama | Vimcal |
|---|---|---|---|---|
| **Approach** | AI layer on existing calendar | Replaces your calendar | Mindful daily planner | Replaces calendar UI |
| **Task scheduling** | Auto from 6 task managers | Auto from projects | Manual daily pull | None |
| **Focus Time** | Auto-defended blocks | Auto-scheduled | Guided planning | None |
| **Habits** | Flex-scheduled routines | None | Daily rituals | None |
| **Free tier** | Yes (Lite) | No (14-day trial) | No (14-day trial) | Yes (iOS only) |
| **Pricing** | $10-22/seat/mo | ~$34/mo | $16/mo | $20/mo |
| **API** | Yes (REST, all plans) | No | No | No |
| **Webhooks** | Yes (Business+) | No | No | No |
| **Best for** | Protecting time while keeping existing calendar | Full AI control of schedule | Mindful daily planning | Fast calendar navigation |
