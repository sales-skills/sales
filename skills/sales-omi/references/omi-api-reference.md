<!-- Source: https://docs.omi.me/doc/developer/api/overview -->

# Omi Developer API Reference

## Base URL

```
https://api.omi.me/v1/dev
```

## Authentication

All requests require a Bearer token in the Authorization header:

```
Authorization: Bearer omi_dev_your_api_key_here
```

Obtain keys via the Omi app: Settings → Developer → Create Key

## Rate Limits

- Per minute: 100 requests per API key
- Per day: 10,000 requests per user

Response headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: [timestamp]
```

## Endpoints

### Memories

Memories are AI-generated insights extracted from conversations.

- `GET /v1/dev/user/memories` — Retrieve memories (paginated)
- `POST /v1/dev/user/memories` — Create a single memory
- `POST /v1/dev/user/memories/batch` — Create up to 25 memories at once

### Action Items

Auto-detected tasks with context from conversations.

- `GET /v1/dev/user/action-items` — Retrieve action items
- `POST /v1/dev/user/action-items` — Create a single item
- `POST /v1/dev/user/action-items/batch` — Create up to 50 items at once

### Conversations

Raw transcripts with speaker diarization.

- `GET /v1/dev/user/conversations` — Retrieve conversations (paginated)
- `POST /v1/dev/user/conversations` — Create conversation from text
- `POST /v1/dev/user/conversations/from-segments` — Create conversation from transcript segments (speaker-labeled)

### API Keys

- `GET /v1/dev/keys` — List all API keys
- `POST /v1/dev/keys` — Create new API key
- `DELETE /v1/dev/keys/{key_id}` — Revoke an API key

## HTTP Status Codes

- 200 — OK
- 204 — No Content
- 400 — Bad Request
- 401 — Unauthorized
- 403 — Forbidden
- 404 — Not Found
- 422 — Unprocessable Entity
- 429 — Rate Limited
- 500 — Server Error

## Error Format

```json
{
  "detail": "Error message"
}
```

## App Framework (Webhook Integrations)

Apps are built through the Omi mobile app and can leverage webhook triggers:

### App Types

1. **Prompt-Based Apps** — No server needed. Customize AI behavior via system prompts.
2. **Integration Apps** — Connect to external services via webhooks.

### Webhook Triggers

- **Memory Triggers** — Fire when a conversation is saved as a memory. Ideal for syncing summaries to external tools.
- **Real-time Transcript** — Process live audio streams during active conversations.
- **Chat Tools** — User invokes custom functions within Omi conversations (e.g., "Post to Slack").
- **Audio Streaming** — Access raw audio bytes for custom speech recognition or analysis.

### Quick Start

1. Go to webhook.site and copy your unique URL
2. Open Omi app → Explore → Create an App
3. Select capabilities (Memory Trigger, Real-time Transcript, etc.)
4. Paste webhook.site URL as the endpoint
5. Have a conversation — webhook fires with payload

### Marketplace

Apps can be published to the Omi app store. Community-built integrations include:
- Telegram, Slack, GitHub, ClickUp, Notion, Dropbox
- Zapier (5,000+ app connections)
- RingCentral, Google Calendar, Microsoft OneNote
- ImportX (data hub for Notion/Slack/Twitter)

## SDKs

Documentation references React Native, Swift, and Python SDK support. Full source code available at github.com/BasedHardware/omi.

## Additional Resources

- API docs: https://docs.omi.me/doc/developer/api/overview
- App development: https://docs.omi.me/doc/developer/apps/Introduction
- GitHub: https://github.com/BasedHardware/omi
- Blog API guides: https://www.omi.me/blogs/api-guides
