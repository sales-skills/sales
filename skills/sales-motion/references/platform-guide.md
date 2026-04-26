# Motion Platform Reference

## Overview

Motion is an AI-powered productivity platform that auto-schedules tasks, manages projects, takes meeting notes, and consolidates docs into one workspace. Primary differentiator: aggressive AI auto-scheduling that continuously re-optimizes your calendar as priorities change. Target audience: knowledge workers, solopreneurs, and teams who want to eliminate manual planning.

## Capabilities & automation surface

| Module | What it does | Automation surface |
|---|---|---|
| **AI Task Manager** | Creates, prioritizes, auto-schedules tasks with do-dates vs due-dates | API-accessible (full CRUD) |
| **AI Project Manager** | Generates projects from descriptions, assigns tasks, tracks progress | API-accessible (create, list, get) |
| **AI Calendar** | Auto-schedules tasks, consolidates multiple calendars, prevents double-booking | UI-only (no calendar API) |
| **AI Meeting Notetaker** | Records, transcribes, generates summaries and action items, converts to tasks | UI-only |
| **AI Docs** | Notes, wikis, publishable docs with embedded tasks/projects | UI-only |
| **AI Workflows** | Converts SOPs into executable task workflows | UI-only |
| **AI Dashboards** | Capacity planning, bottleneck detection, project completion predictions | UI-only (Business plan) |
| **AI Chat** | Context-aware Q&A across all work data | UI-only |
| **Booking Pages** | Meeting scheduling links with optimal time selection | UI-only |
| **Comments** | Task/project comments | API-accessible |
| **Custom Fields** | Custom data fields on tasks/projects | API-accessible |
| **Recurring Tasks** | Repeating task patterns | API-accessible |

## Pricing, limits & plan gates

All pricing best-effort as of 2026-04. Motion does not offer a free plan.

| Feature | Pro AI | Business AI | Enterprise |
|---|---|---|---|
| **Price (annual, 3+ seats)** | $19/seat/mo | $29/seat/mo | Custom |
| **Price (annual, 1 seat)** | $29/seat/mo | $39/seat/mo | Custom |
| **Price (monthly, 3+ seats)** | $29/seat/mo | $49/seat/mo | Custom |
| **Price (monthly, 1 seat)** | $49/seat/mo | $69/seat/mo | Custom |
| **AI credits** | 7,500/mo | 15,000/mo | Custom |
| Calendar + Tasks | Yes | Yes | Yes |
| Projects | Yes | Yes | Yes |
| Meeting Notetaker | Yes | Yes | Yes |
| Docs, Wiki, Notes | Yes | Yes | Yes |
| Integrations | Yes | Yes | Yes |
| iOS/Android/Desktop | Yes | Yes | Yes |
| Unlimited Storage | Yes | Yes | Yes |
| **Capacity Planning** | No | Yes | Yes |
| **Advanced Dashboards** | No | Yes | Yes |
| **Timeline & Gantt** | No | Yes | Yes |
| **Time Tracking** | No | Yes | Yes |
| **Permissions & Access** | No | Yes | Yes |
| **Priority Support** | No | Yes | Yes |
| **API rate limit** | 12 req/min | 120 req/min | Higher |

**25% discount** for verified students and non-profits. 7-day free trial, no free plan.

**AI credits warning**: Heavy use of AI Chat, Docs writing, and meeting notes can consume credits faster than expected. Users report 20-40% bill increases from AI feature usage. Monitor in Settings.

## Integrations

| Integration | Direction | Notes |
|---|---|---|
| **Google Calendar** | Bidirectional | Primary calendar sync |
| **Outlook Calendar** | Bidirectional | Microsoft 365 |
| **iCloud Calendar** | Read | Personal calendar blocking |
| **Gmail** | Inbound | Forward emails → auto-create tasks |
| **Outlook (email)** | Inbound | Forward emails → auto-create tasks |
| **Slack** | Inbound | Capture tasks from Slack messages |
| **Microsoft Teams** | Inbound | Capture tasks from Teams messages |
| **Zoom** | Bidirectional | Auto-generate meeting links, meeting notes |
| **Google Meet** | Bidirectional | Auto-generate meeting links, meeting notes |
| **HubSpot** | Read | CRM data access (details limited) |
| **Salesforce** | Read | CRM data access (details limited) |
| **Siri** | Inbound | iOS voice task creation |
| **Zapier** | Outbound only | Create/Update/Find Task, Create Project — no triggers |

**No native Make or n8n integration.** Use Motion API directly with Make's HTTP module or n8n's HTTP Request node.

**No webhook support** — cannot push events to external systems. Must poll the API or use Zapier's polling-based actions.

### Zapier details

| Type | Name | Description |
|---|---|---|
| Action | Create Task | Creates a new Motion task (workspace, name, schedule required) |
| Action | Create Project | Creates a new Motion project (workspace, name required) |
| Action | Update Task | Updates an existing task's fields |
| Action | Find Task | Searches for a task by properties |

**No Zapier triggers available.** The Motion-Zapier connector is in beta and doesn't expose all API fields.

## Community developer tools

- **Unofficial MCP server**: `github.com/RF-D/motion-mcp` — integrate Motion with Claude and other AI assistants
- **Unofficial Python SDK**: `github.com/rhymiz/python-motion` — Python wrapper for Motion API
- **Unofficial TypeScript SDK**: `github.com/dmurvihill/motion-sdk` — TypeScript SDK

## Data model

### Task object

```json
{
  "id": "task_abc123",
  "name": "Follow up with prospect",
  "description": "Send pricing proposal — supports GitHub Flavored Markdown",
  "duration": 30,
  "dueDate": "2026-04-30T17:00:00Z",
  "status": { "name": "In Progress", "isDefaultStatus": false, "isResolvedStatus": false },
  "priority": "HIGH",
  "labels": ["sales", "follow-up"],
  "assignees": [{ "id": "user_xyz", "name": "Jane Doe", "email": "jane@example.com" }],
  "creator": { "id": "user_xyz", "name": "Jane Doe" },
  "project": { "id": "proj_456", "name": "Q2 Pipeline" },
  "workspace": { "id": "ws_789", "name": "Sales Team" },
  "scheduledStart": "2026-04-28T14:00:00Z",
  "scheduledEnd": "2026-04-28T14:30:00Z",
  "completed": false,
  "autoScheduled": {
    "startDate": "2026-04-25T00:00:00Z",
    "deadlineType": "HARD",
    "schedule": "Work Hours"
  },
  "customFieldValues": {},
  "chunks": [],
  "createdTime": "2026-04-20T10:00:00Z",
  "updatedTime": "2026-04-25T12:00:00Z",
  "completedTime": null
}
```
<!-- Constructed from docs — verify against live API -->

### Project object

```json
{
  "id": "proj_456",
  "name": "Q2 Pipeline",
  "description": "Pipeline management for Q2",
  "workspaceId": "ws_789",
  "status": { "name": "Active", "isDefaultStatus": true, "isResolvedStatus": false },
  "createdTime": "2026-04-01T10:00:00Z",
  "updatedTime": "2026-04-20T15:00:00Z",
  "customFieldValues": {}
}
```
<!-- Constructed from docs — verify against live API -->

## Quick-start recipes

### Recipe 1: Create a task from a CRM deal update

**Trigger**: Deal moves to "Proposal Sent" stage in HubSpot
**Steps**: HubSpot webhook → your server → Motion API create task
**Use case**: Auto-create a follow-up task in Motion whenever a deal advances

```bash
# Create a task in Motion
curl -X POST https://api.usemotion.com/v1/tasks \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Follow up on proposal - Acme Corp",
    "workspaceId": "ws_789",
    "dueDate": "2026-05-02T17:00:00Z",
    "duration": 15,
    "priority": "HIGH",
    "description": "Proposal sent on 4/28. Follow up to check if they have questions.",
    "labels": ["sales", "follow-up"],
    "autoScheduled": {
      "startDate": "2026-04-30T00:00:00Z",
      "deadlineType": "SOFT",
      "schedule": "Work Hours"
    }
  }'
```

```python
import requests

def create_motion_task(api_key, workspace_id, name, due_date, duration=15, priority="HIGH"):
    resp = requests.post(
        "https://api.usemotion.com/v1/tasks",
        headers={"X-API-Key": api_key, "Content-Type": "application/json"},
        json={
            "name": name,
            "workspaceId": workspace_id,
            "dueDate": due_date,
            "duration": duration,
            "priority": priority,
            "autoScheduled": {
                "startDate": "2026-04-30T00:00:00Z",
                "deadlineType": "SOFT",
                "schedule": "Work Hours"
            }
        }
    )
    resp.raise_for_status()
    return resp.json()
```

**Gotcha**: Individual plans are limited to 12 req/min. If creating many tasks at once, add a 5-second delay between requests.

### Recipe 2: Poll for completed tasks and sync to CRM

**Trigger**: Cron job every 5 minutes
**Steps**: Poll Motion API → filter completed tasks → update HubSpot/Salesforce
**Use case**: Keep CRM activity timeline in sync with Motion task completions

```python
import requests
import time

def poll_completed_tasks(api_key, workspace_id, last_cursor=None):
    """Poll Motion for completed tasks using cursor pagination."""
    params = {
        "workspaceId": workspace_id,
        "status": ["Completed"],
    }
    if last_cursor:
        params["cursor"] = last_cursor

    resp = requests.get(
        "https://api.usemotion.com/v1/tasks",
        headers={"X-API-Key": api_key},
        params=params
    )
    resp.raise_for_status()
    data = resp.json()

    tasks = data.get("tasks", [])
    next_cursor = data.get("meta", {}).get("nextCursor")

    for task in tasks:
        # Sync to your CRM here
        print(f"Completed: {task['name']} at {task.get('completedTime')}")

    return next_cursor
```

**Gotcha**: Motion has no webhooks, so polling is the only way to detect changes. At 12 req/min (individual), you can poll at most every 5 seconds. For team plans (120 req/min), you can poll more aggressively.

### Recipe 3: Bulk create project with tasks from a template

**Trigger**: New client onboarding
**Steps**: Create project → create tasks in sequence with dependencies

```python
import requests
import time

def create_onboarding_project(api_key, workspace_id, client_name):
    """Create a standardized onboarding project with tasks."""
    # Step 1: Create project
    project = requests.post(
        "https://api.usemotion.com/v1/projects",
        headers={"X-API-Key": api_key, "Content-Type": "application/json"},
        json={"name": f"Onboarding - {client_name}", "workspaceId": workspace_id}
    ).json()

    # Step 2: Create tasks (throttle for rate limits)
    tasks = [
        {"name": "Kickoff call", "duration": 30, "priority": "ASAP"},
        {"name": "Gather requirements", "duration": 60, "priority": "HIGH"},
        {"name": "Configure account", "duration": 45, "priority": "HIGH"},
        {"name": "Training session", "duration": 60, "priority": "MEDIUM"},
        {"name": "Go-live check", "duration": 15, "priority": "MEDIUM"},
    ]

    for i, task in enumerate(tasks):
        time.sleep(5)  # Respect 12 req/min rate limit
        requests.post(
            "https://api.usemotion.com/v1/tasks",
            headers={"X-API-Key": api_key, "Content-Type": "application/json"},
            json={
                **task,
                "workspaceId": workspace_id,
                "projectId": project["id"],
                "dueDate": f"2026-05-{10 + i * 3}T17:00:00Z",
            }
        )

    return project
```

**Gotcha**: Add `time.sleep(5)` between requests on individual plans. On team plans, you can reduce to `time.sleep(0.5)`.

## Integration patterns

### CRM sync (polling-based)

Since Motion has no webhooks, CRM sync requires polling:

1. **Set up a cron job** (every 5 min) to call `GET /v1/tasks?status=Completed`
2. **Track cursor** — store `nextCursor` from each response to avoid re-processing
3. **Map fields**: Motion task name → CRM activity subject, completedTime → activity date, project → deal association
4. **Handle rate limits**: 12 req/min (individual) or 120 req/min (team). Use exponential backoff if you hit limits.
5. **Dedup**: Use Motion task `id` as external ID in CRM to prevent duplicate activities

### Zapier workflow patterns

Since Zapier has no Motion triggers, use these patterns:

- **Inbound**: External trigger (e.g., HubSpot deal update, Slack message, form submission) → Zapier → Create Motion Task action
- **Cannot do**: Motion event → trigger external action (no triggers available)
- **Workaround for outbound**: Use the Motion API polling approach above, or set up a Schedule trigger in Zapier that calls the Motion API via Webhooks by Zapier

### MCP server integration

The unofficial MCP server (`github.com/RF-D/motion-mcp`) allows Claude and other AI assistants to interact with Motion directly:

- Create/update/complete tasks via natural language
- List projects and tasks
- Requires Motion API key in MCP server configuration
