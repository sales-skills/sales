<!-- Source: https://circleback.ai/docs/webhook-integration (redirects to https://support.circleback.ai/en/articles/11014015-export-meeting-data-with-webhooks) -->
<!-- Source: https://api.circleback.com/ (Swagger UI — JS-rendered, endpoints not extractable) -->
<!-- Note: Full REST API docs are behind a JS-rendered Swagger UI. This reference captures the webhook API (publicly documented) and MCP server details. REST endpoint details are partial. -->

# Circleback API Reference

## API overview

Circleback provides three integration surfaces:

1. **Webhook API** — event-driven POST requests when meetings are processed
2. **MCP Server** — Model Context Protocol server for AI tool integration
3. **REST API** — available at `api.circleback.com` (Swagger UI, details below are partial)

## Authentication

### Webhook signing
- Signing secret provided during webhook configuration
- Secret prefix: `whsec_`
- Signature header: `x-signature`
- Algorithm: HMAC-SHA256
- Verify before trusting any payload

### MCP Server
- URL: `https://app.circleback.ai/api/mcp`
- Transport: Streamable HTTP
- Auth: OAuth (browser-based authorization flow)
- Compatible clients: Claude, ChatGPT, Cursor, Raycast

### REST API
- Base URL: `https://api.circleback.com`
- Auth: not publicly documented (likely Bearer token or API key)
- Swagger UI available at base URL but requires JavaScript to render

## Webhook API

### Setup

Webhooks are configured through Circleback's Automations feature:

1. Open Automations → Create automation
2. Add meeting filter conditions
3. Select "Send webhook request"
4. Enter endpoint URL
5. Select meeting outcomes to include
6. Test with most recent meeting (optional)
7. Name and create

### Webhook payload

POST request with JSON body containing:

```json
{
  "id": 12345,
  "name": "Weekly Sales Standup",
  "createdAt": "2026-04-23T14:30:00.000Z",
  "duration": 1800,
  "url": "https://zoom.us/j/123456789",
  "recordingUrl": "https://storage.circleback.ai/recordings/abc123",
  "tags": ["sales", "weekly"],
  "icalUid": "abc123@google.com",
  "attendees": [
    { "name": "Jane Smith", "email": "jane@example.com" }
  ],
  "notes": "## Summary\n\nDiscussed Q2 pipeline...",
  "actionItems": [
    {
      "id": 1,
      "title": "Follow up with Acme",
      "description": "Send proposal by Friday",
      "assignee": "jane@example.com",
      "status": "pending"
    }
  ],
  "transcript": [
    {
      "speaker": "Jane Smith",
      "text": "Let's review the pipeline numbers.",
      "timestamp": 0
    }
  ],
  "insights": {
    "Competitor Mentions": "Acme mentioned evaluating Gong as well."
  }
}
```

### Field reference

| Field | Type | Notes |
|---|---|---|
| `id` | number | Meeting identifier — use to construct Circleback links |
| `name` | string | Meeting title from calendar event |
| `createdAt` | string | ISO-8601 timestamp |
| `duration` | number | Seconds |
| `url` | string \| null | Meeting platform URL (null for in-person) |
| `recordingUrl` | string \| null | **Expires after 24 hours** — download immediately if archiving |
| `tags` | string[] | User-applied tag names |
| `icalUid` | string \| null | Calendar event UID for deduplication |
| `attendees` | object[] | `{ name: string, email: string }` |
| `notes` | string | Markdown-formatted AI notes |
| `actionItems` | object[] | `{ id: number, title: string, description: string, assignee: string, status: string }` |
| `transcript` | object[] | `{ speaker: string, text: string, timestamp: number }` |
| `insights` | object | Key-value pairs of user-defined insight names to extracted content |

### Signature verification

TypeScript example:

```typescript
import crypto from 'crypto';

function verifyWebhook(body: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

// Usage in Express:
app.post('/webhook/circleback', (req, res) => {
  const signature = req.headers['x-signature'] as string;
  const isValid = verifyWebhook(
    JSON.stringify(req.body),
    signature,
    process.env.CIRCLEBACK_WEBHOOK_SECRET // starts with whsec_
  );
  if (!isValid) return res.status(401).send('Invalid signature');
  // Process webhook...
  res.status(200).send('OK');
});
```

## MCP Server

### Connection details
- **URL**: `https://app.circleback.ai/api/mcp`
- **Transport**: Streamable HTTP
- **Auth**: OAuth (browser-based)

### Compatible clients
- Claude (Anthropic)
- ChatGPT (OpenAI)
- Cursor
- Raycast

### Capabilities
- Query meeting data and transcripts
- Search across all conversations
- Access action items and their status
- Retrieve custom insights

## REST API (partial)

The REST API is documented at `https://api.circleback.com/` via Swagger UI. The interface requires JavaScript to render, so individual endpoints could not be extracted during research.

**Known details:**
- Base URL: `https://api.circleback.com`
- Documentation format: OpenAPI/Swagger
- Auth method: not publicly documented outside Swagger UI

**Recommendation:** Visit `https://api.circleback.com/` in a browser to explore available endpoints. For programmatic integration, the webhook API is the most accessible and best-documented option.

## Integration platforms

### Make.com
- Module: **Watch Webhook Request** (trigger only)
- Triggers Make scenarios when Circleback webhook fires
- No action modules available — Circleback data flows out only

### Zapier
- Available as a webhook trigger
- Use "Webhooks by Zapier" → "Catch Hook" to receive Circleback payloads
- Parse JSON fields (notes, actionItems, transcript) in subsequent Zapier steps

## Rate limits

No public rate limit documentation found. The webhook API is event-driven (no polling), so rate limits are unlikely to be a concern for standard usage. For REST API rate limits, check the Swagger UI documentation.
