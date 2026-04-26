<!-- Source: https://github.com/llabusch93/reclaim-sdk, https://help.reclaim.ai/en/articles/10008727-webhooks-for-scheduling-links-overview, https://zapier.com/apps/reclaim-ai/integrations, https://apps.make.com/reclaim-ai -->

# Reclaim.ai API Reference

## Authentication

**Method**: API Key (Bearer token)
**Token location**: `https://app.reclaim.ai/settings/developer`
**Header format**: `Authorization: Bearer {API_KEY}`

```bash
# Quick test — list all tasks
curl "https://api.app.reclaim.ai/api/tasks" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Rate limit**: 100 requests/minute (all plans).

## Base URL

```
https://api.app.reclaim.ai
```

Swagger/OpenAPI spec: `https://api.app.reclaim.ai/swagger/reclaim-api-0.1.yml`

## Endpoints

### Tasks

| Method | Path | Description |
|---|---|---|
| GET | `/api/tasks` | List all tasks |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/{id}` | Get a task by ID |
| PUT | `/api/tasks/{id}` | Update a task |
| DELETE | `/api/tasks/{id}` | Delete a task |
| POST | `/api/tasks/{id}/start` | Start a task (begin planner) |
| POST | `/api/tasks/{id}/stop` | Stop a task (pause planner) |
| POST | `/api/tasks/{id}/snooze` | Snooze a task |
| POST | `/api/tasks/{id}/plan-work` | Plan work for a task |
| POST | `/api/tasks/{id}/complete` | Mark task complete |
| POST | `/api/tasks/{id}/log-work` | Log work on a task |
| POST | `/api/tasks/batch` | Batch operations |
| POST | `/api/tasks/{id}/reindex` | Reindex a task |

### Habits (DailyHabit)

| Method | Path | Description |
|---|---|---|
| GET | `/api/habits` | List all habits |
| POST | `/api/habits` | Create a habit |
| GET | `/api/habits/{id}` | Get a habit by ID |
| PUT | `/api/habits/{id}` | Update a habit |
| DELETE | `/api/habits/{id}` | Delete a habit |
| POST | `/api/habits/{id}/start` | Start a habit |
| POST | `/api/habits/{id}/stop` | Stop a habit |
| POST | `/api/habits/{id}/restart` | Restart a habit |
| POST | `/api/habits/{id}/toggle` | Toggle habit on/off |
| POST | `/api/habits/{id}/reschedule` | Reschedule a habit |
| POST | `/api/habits/{id}/skip` | Skip next occurrence |

### Hours

| Method | Path | Description |
|---|---|---|
| GET | `/api/hours` | List time schemes (work hours, meeting hours, etc.) |

### Events

| Method | Path | Description |
|---|---|---|
| GET | `/api/events` | List events (supports date range filtering) |

### Changelog

| Method | Path | Description |
|---|---|---|
| GET | `/api/changelog/tasks` | Task change feed |
| GET | `/api/changelog/events` | Event change feed |
| GET | `/api/changelog/habits` | Habit change feed |
| GET | `/api/changelog/meetings` | Meeting change feed |
| GET | `/api/changelog/scheduling-links` | Scheduling link change feed |

### Webhooks (API-level)

| Method | Path | Description |
|---|---|---|
| GET | `/api/webhooks` | List webhook subscriptions |
| POST | `/api/webhooks` | Create webhook subscription |
| DELETE | `/api/webhooks/{id}` | Delete webhook subscription |

## Webhook Events (Scheduling Links)

Available on **Business and Enterprise plans** only.

### Event types

- `SchedulingLink.Meeting.Created` — new meeting booked
- `SchedulingLink.Meeting.Updated` — meeting rescheduled
- `SchedulingLink.Meeting.Cancelled` — meeting cancelled

### Delivery

- **Semantics**: At most once, with exponential backoff retries
- **Timeout**: Must respond 2xx within 10 seconds
- **Suspension**: Endpoint suspended after 24 hours of failures
- **Ordering**: Events may arrive out of order

### Headers

| Header | Description |
|---|---|
| `x-reclaim-webhook-type` | Event type identifier |
| `x-reclaim-api-version` | `v2024-10-02` or `v2025-09-26` |
| `x-reclaim-signature-256` | `sha256=` + base64-encoded HMAC-SHA256 |

### Signature verification (Node.js)

```javascript
import crypto from 'crypto';

function verifySignature(headers, body, secret) {
  const sig = headers['x-reclaim-signature-256'];
  if (!sig) return false;

  const signature = Buffer.from(sig.substring(7)); // strip "sha256="
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(body);
  const hash = Buffer.from(hmac.digest('base64'));

  return signature.length === hash.length &&
    crypto.timingSafeEqual(signature, hash);
}
```

### Custom data passthrough

Scheduling link URLs accept up to 5 `data-` prefixed query parameters (max 512 bytes minified JSON). These flow through to the `custom_data` field in webhook payloads with the `data-` prefix stripped.

Errors: `TRUNCATED` (exceeded 5 params or 512 bytes), `UNSERIALIZABLE` (non-JSON value).

## Webhook Events (Task/Habit — via API)

The API-level webhook subscriptions support additional event types for tasks and habits:
- `TaskWebhookEvent` — task created, updated, completed, deleted
- `HabitWebhookEvent` — habit created, updated, toggled, deleted

These use the same HMAC-SHA256 signature verification.

## Data Models

### Enums

| Enum | Values |
|---|---|
| `PriorityLevel` | `P1` (Critical), `P2` (High), `P3` (Normal), `P4` (Low) |
| `TaskStatus` | `NEW`, `IN_PROGRESS`, `COMPLETE`, `ARCHIVED`, `CANCELLED` |
| `EventCategory` | `WORK`, `PERSONAL` |
| `EventColor` | Calendar color identifiers |

### Duration format

All duration fields use ISO 8601: `PT1H` = 1 hour, `PT30M` = 30 minutes, `PT1H30M` = 1.5 hours.

## Gaps

- No official public API documentation page — the above is reconstructed from the unofficial Python SDK, Zapier/Make module inspection, and webhook docs
- Swagger spec at `/swagger/reclaim-api-0.1.yml` exists but is not publicly browsable
- Pagination pattern for list endpoints not documented — likely returns full arrays for reasonable task counts
- Error response shapes (4xx/5xx) not documented
- Focus Time, Buffer Time, Smart Meetings, and Calendar Sync have no API endpoints — UI-only configuration
- SCIM endpoints exist at `https://api.app.reclaim.ai/scim/v2` for Enterprise SSO provisioning (separate from main API)

## iPaaS Surface

### Zapier

| Type | Name | Description |
|---|---|---|
| Action | Create Task | Create a new task with title, due date, priority, duration, category, notes |
| Action | API Request (Beta) | Raw HTTP request with Reclaim auth — access any endpoint |

No Zapier triggers available.

### Make (Integromat)

| Module | Description |
|---|---|
| Create a Task | Create task with full field configuration |
| Get a Task | Retrieve task by ID |
| List Tasks | List all tasks |
| List Events | List events with date range filter |
| Make an API Call | Custom API request with auth |

No Make triggers/watchers available.
