<!-- Source: https://docs.usemotion.com/docs/motion-rest-api/44e37c461ba67-motion-rest-api -->
<!-- Source: https://docs.usemotion.com/api-reference/tasks/post/ -->
<!-- Source: https://docs.usemotion.com/api-reference/tasks/list/ -->
<!-- Source: https://docs.usemotion.com/api-reference/projects/list/ -->
<!-- Source: https://docs.usemotion.com/cookbooks/getting-started/ -->
<!-- Source: https://docs.usemotion.com/cookbooks/rate-limits/ -->

# Motion API Reference

## Base URL

```
https://api.usemotion.com/v1
```

## Authentication

API key passed via `X-API-Key` header. Create in Motion Settings → API.

```bash
curl https://api.usemotion.com/v1/workspaces \
  -H "X-API-Key: YOUR_API_KEY"
```

Key is shown once at creation — copy immediately.

## Rate limits

| Plan | Limit |
|---|---|
| Individual | 12 requests/minute |
| Team | 120 requests/minute |
| Enterprise | Custom (contact sales) |

Rate limit headers and retry-after behavior are not documented. Use exponential backoff on 429 responses.

## Pagination

Cursor-based. Responses include a `meta` object:

```json
{
  "meta": {
    "nextCursor": "abc123",
    "pageSize": 20
  }
}
```

Pass `cursor` query parameter to get the next page. When `nextCursor` is null, you've reached the end.

## Endpoints

### Tasks

#### Create task
`POST /v1/tasks`

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Task title |
| `workspaceId` | string | Yes | Workspace ID |
| `dueDate` | datetime | No | ISO 8601. Required for scheduled tasks |
| `duration` | string/number | No | `"NONE"`, `"REMINDER"`, or integer (minutes) |
| `status` | string | No | Defaults to workspace default |
| `projectId` | string | No | Associate with project |
| `description` | string | No | GitHub Flavored Markdown |
| `priority` | string | No | `ASAP`, `HIGH`, `MEDIUM`, `LOW` |
| `labels` | array\<string\> | No | Label names |
| `assigneeId` | string | No | User ID |
| `autoScheduled` | object/null | No | `{ startDate, deadlineType, schedule }` |

**autoScheduled fields:**
- `startDate` — ISO 8601, earliest date to schedule
- `deadlineType` — `"HARD"` (must complete by due date) or `"SOFT"` (flexible)
- `schedule` — Schedule name (e.g., `"Work Hours"`)

**Response (200):** Task object with `id`, `name`, `description`, `duration`, `dueDate`, `status`, `priority`, `labels`, `assignees`, `creator`, `project`, `workspace`, `scheduledStart`, `scheduledEnd`, `completed`, `customFieldValues`, `chunks`, `createdTime`, `updatedTime`, `completedTime`.

#### List tasks
`GET /v1/tasks`

**Query parameters:**

| Field | Type | Description |
|---|---|---|
| `workspaceId` | string | Filter by workspace (omit for all) |
| `projectId` | string | Filter by project |
| `assigneeId` | string | Filter by assignee |
| `status` | array\<string\> | Filter by status names |
| `includeAllStatuses` | boolean | Include all statuses (cannot use with `status`) |
| `label` | string | Filter by label |
| `name` | string | Case-insensitive name search |
| `cursor` | string | Pagination cursor |

**Response (200):** `{ meta: { nextCursor, pageSize }, tasks: [Task] }`

#### Get task
`GET /v1/tasks/{taskId}`

#### Update task
`PATCH /v1/tasks/{taskId}`

Same fields as create (all optional).

#### Delete task
`DELETE /v1/tasks/{taskId}`

#### Move task
`PATCH /v1/tasks/{taskId}/move`

Move task between workspaces/projects.

#### Unassign task
`DELETE /v1/tasks/{taskId}/assignee`

### Projects

#### Create project
`POST /v1/projects`

| Field | Type | Required |
|---|---|---|
| `name` | string | Yes |
| `workspaceId` | string | Yes |
| `description` | string | No |
| `dueDate` | datetime | No |
| `priority` | string | No |

#### List projects
`GET /v1/projects`

Query params: `workspaceId`, `cursor`.

**Response (200):**
```json
{
  "meta": { "nextCursor": "string", "pageSize": 0 },
  "projects": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "workspaceId": "string",
      "status": { "name": "string", "isDefaultStatus": true, "isResolvedStatus": false },
      "createdTime": "datetime",
      "updatedTime": "datetime",
      "customFieldValues": {}
    }
  ]
}
```

#### Get project
`GET /v1/projects/{projectId}`

### Comments

#### Get comments
`GET /v1/comments`

#### Create comment
`POST /v1/comments`

### Custom Fields

#### Create custom field
`POST /v1/custom-fields`

#### Get custom fields
`GET /v1/custom-fields`

#### Add custom field to project/task
`POST /v1/custom-fields/{fieldId}/add`

#### Delete custom field
`DELETE /v1/custom-fields/{fieldId}`

### Recurring Tasks

#### Create recurring task
`POST /v1/recurring-tasks`

#### List recurring tasks
`GET /v1/recurring-tasks`

#### Delete recurring task
`DELETE /v1/recurring-tasks/{taskId}`

### Schedules

#### Get schedules
`GET /v1/schedules`

Returns available schedule definitions (e.g., "Work Hours", "Personal").

### Statuses

#### Get statuses
`GET /v1/statuses`

Returns available task statuses for the workspace.

### Users

#### List users
`GET /v1/users`

#### Get current user
`GET /v1/users/me`

### Workspaces

#### List workspaces
`GET /v1/workspaces`

## Gaps

- No webhook endpoints — the API is read/write only, no event push
- Rate limit response headers not documented
- Error response shape not documented (likely standard HTTP status codes with JSON body)
- Calendar/meeting/docs/workflows modules have no API surface
- Booking pages have no API surface
- AI credits usage has no API surface
