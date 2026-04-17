<!-- Source: https://www.hedy.ai/help/hedy-api/ + https://www.hedy.ai/integrations + https://www.hedy.ai/help/webhooks/ -->
<!-- Full SwaggerHub docs at https://app.swaggerhub.com/apis-docs/HedyAI/hedy-api/ (auth-gated, could not WebFetch) -->

# Hedy API Reference

## Base URL

`https://api.hedy.bot/v1`

## Authentication

Include API key in the Authorization header:

```
Authorization: Bearer YOUR_API_KEY
```

Generate API keys from Hedy Settings → API Access.

**Requires Pro subscription.**

## Rate Limits

200 requests per minute per API key.

## Endpoints

### Sessions

- `GET /sessions` — List and retrieve meeting sessions with transcripts and summaries

### Highlights

- Retrieve important moments from meetings (exact path not documented outside SwaggerHub)

### Topics

- `GET /topics` — List topics
- `POST /topics` — Create a topic
- `PATCH /topics/{id}` — Update a topic
- `DELETE /topics/{id}` — Delete a topic
- `GET /topics/{id}/sessions` — List sessions within a topic

### Todos

- Retrieve and manage action items (exact path not documented outside SwaggerHub)

### Session Contexts

- `GET /contexts` — List session contexts
- `POST /contexts` — Create a session context
- `PATCH /contexts/{id}` — Update a session context
- `DELETE /contexts/{id}` — Delete a session context

### Webhooks

- `GET /webhooks` — List webhooks
- `POST /webhooks` — Create a webhook
- `DELETE /webhooks/{id}` — Delete a webhook

### User

- `GET /me` — Retrieve account details

## Webhooks

### Event Types

| Event | When it fires | Payload contains |
|---|---|---|
| `session.created` | Recording starts | Session title, start time |
| `session.ended` | Recording finishes | Full session data: transcript, recap, meeting minutes, highlights, topic info, speaker-by-speaker conversations |
| `session.exported` | Manual session export | Transcript, recap, highlights |
| `highlight.created` | Highlight captured during session | Highlight text, AI insight, timestamp |
| `todo.exported` | Action item exported | Todo text, due date, associated session |

### Payload Format

All webhooks send HTTP POST requests with JSON body.

`session.ended` payloads contain:
- Session details (title, times, duration)
- Full transcript text
- Speaker-by-speaker conversations
- Meeting minutes
- AI-generated recap
- Highlights with insights and timestamps
- Topic assignment and insights (if applicable)

### Security

Every webhook request includes:
- `X-Hedy-Signature` header — HMAC-SHA256 hash of the request body, signed with your webhook's unique secret
- `X-Hedy-Event` header — event type identifier

HTTPS required for all webhook URLs.

### Limits

- Maximum 10 webhooks per account
- Requires Pro subscription
- Cloud sync must be enabled

### Retry Policy

- Server errors (5xx): retried up to 2 times with increasing delays
- Rate limited (429): retried once, respecting retry timing
- Client errors (4xx): not retried

### Setup

1. Settings → API Access → Manage Webhooks
2. Click **+** to create new webhook
3. Enter optional name and HTTPS URL
4. Choose events to subscribe to
5. Confirm creation

Use built-in test function in Settings → API Access to verify webhook functionality.

## MCP Server

- **Endpoint**: `https://api.hedy.bot/mcp`
- **Auth**: OAuth 2.1 with PKCE
- **Compatible clients**: Claude Desktop, ChatGPT, Cursor, other MCP clients
- **18 tools** across 5 categories:
  - **Sessions**: view sessions, retrieve details, see highlights, list action items
  - **Highlights**: browse all highlights, get full context for any moment
  - **Tasks**: see all action items across meetings
  - **Topics**: view, create, update, remove topics
  - **Session Contexts**: list, view, create, update, remove contexts
- **Permissions**: can organize topics and contexts, cannot delete recordings or transcripts
- **Requires**: Pro subscription + cloud sync enabled
