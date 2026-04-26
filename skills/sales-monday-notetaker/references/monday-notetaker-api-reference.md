<!-- Source: https://developer.monday.com/api-reference/reference/notetaker -->
<!-- Source: https://developer.monday.com/api-reference/docs/basics -->

# monday.com Notetaker API Reference

## Authentication

- **Type**: API token in `Authorization` header
- **Eligible users**: Admins and Members have access to their own API tokens. Guests must use OAuth or shortLivedToken.
- **Viewers, deactivated users, and student accounts** cannot use the API.

## Base URL & Request Format

- **Endpoint**: `https://api.monday.com/v2`
- **Method**: All requests must be POST
- **Content-Type**: `application/json`
- **API version**: Notetaker queries require version **2026-04 or later**

## API Playground

Interactive testing: `https://monday.com/developers/v2/try-it-yourself`

---

## Query: `notetaker.meetings`

The top-level `notetaker` field returns a `NotetakerQueries` object. The `meetings` query on that namespace retrieves paginated meetings that have completed recordings.

### Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `limit` | `Int` | Maximum number of meetings to return. Default: `10`. Allowed range: 1–100. |
| `cursor` | `String` | Pagination cursor from the previous response's `page_info.cursor`. |
| `filters` | `MeetingsFilterInput` | Optional. Filter by meeting IDs, search text, or access level. |

### Return Type

`MeetingsResponse` — includes a `meetings` array and `page_info` for cursor-based pagination.

### Example Query

```graphql
query {
  notetaker {
    meetings(limit: 10, filters: { access: ALL }) {
      meetings {
        title
        start_time
        end_time
        recording_duration
        summary
        access_type
        meeting_link
        participants { email }
        topics {
          title
          talking_points { content }
        }
        action_items {
          content
          is_completed
          owner
          due_date
        }
      }
      page_info {
        has_next_page
        cursor
      }
    }
  }
}
```

---

## Meeting Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | `String` | Meeting title. |
| `start_time` | `String` | Meeting start time. |
| `end_time` | `String` | Meeting end time. |
| `recording_duration` | `Int` | Recording length in milliseconds. |
| `summary` | `String` | Meeting summary (markdown). |
| `access_type` | `MeetingAccess` | How the current user relates to the meeting. |
| `meeting_link` | `String` | Link to the meeting. |
| `participants` | `[Participant]` | People associated with the meeting. |
| `topics` | `[Topic]` | Discussion topics and talking points. |
| `action_items` | `[ActionItem]` | Action items captured from the meeting. |
| `transcript` | `[TranscriptEntry]` | Transcript segments with timing and speaker metadata. |

---

## Nested Types

### Participant

| Field | Type |
|-------|------|
| `email` | `String` |

### Topic

| Field | Type |
|-------|------|
| `title` | `String` |
| `talking_points` | `[TalkingPoint]` |

### TalkingPoint

| Field | Type | Notes |
|-------|------|-------|
| `content` | `String` | Content only — no `start_time` field available. |

### ActionItem

| Field | Type |
|-------|------|
| `content` | `String` |
| `is_completed` | `Boolean` |
| `owner` | `String` |
| `due_date` | `String` |

### TranscriptEntry

Transcript segments with timing and speaker metadata. Exact fields not fully documented — expect `speaker`, `text`, and `start_time` based on the schema pattern.

### MeetingsFilterInput

| Field | Type | Description |
|-------|------|-------------|
| `ids` | `[ID]` | Filter by specific meeting IDs. |
| `search` | `String` | Search text across meeting content. |
| `access` | `MeetingAccess` | Filter by access level (e.g., `ALL`). |

### MeetingsResponse

| Field | Type |
|-------|------|
| `meetings` | `[Meeting]` |
| `page_info` | `PageInfo` |

### PageInfo

| Field | Type |
|-------|------|
| `has_next_page` | `Boolean` |
| `cursor` | `String` |

---

## Rate Limits

monday.com enforces rate limits on all API calls. Specific notetaker endpoint limits are not separately documented. General monday.com API rate limits apply — consult the "Rate limits" section of the developer docs.

## Supported Products

The monday.com API supports: monday work management, dev product, sales CRM, and service product. Workforms are not yet supported.
