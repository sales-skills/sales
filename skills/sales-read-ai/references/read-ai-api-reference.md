<!-- Source: https://support.read.ai/hc/en-us/articles/49381161088659-API-Reference (403 - partial info from blog posts and search results) -->
<!-- Source: https://support.read.ai/hc/en-us/articles/49379985941523-Read-AI-API-and-MCP-Overview (403 - partial info) -->
<!-- Source: https://www.read.ai/post/read-ai-mcp-your-meetings-just-became-your-most-powerful-dev-tool -->
<!-- Source: https://support.read.ai/hc/en-us/articles/16352415827219-Getting-Started-with-Webhooks (403 - partial info from search) -->

# Read.ai API Reference (Partial — Help Center Blocked)

**Note**: Read.ai's Help Center returned 403 on WebFetch. This reference is assembled from blog posts, search result snippets, and the integrations page. It is incomplete — check the official docs for the full API specification.

## REST API

- **Status**: Open beta
- **Base URL**: `https://api.read.ai/`
- **Auth**: OAuth 2.0 (username/password at launch). Planned for GA: static API keys / personal access tokens, configurable token lifetimes, refresh token grace period.
- **Docs URL**: https://support.read.ai/hc/en-us/articles/49381161088659-API-Reference

### Known endpoints

- List available sessions
- Retrieve transcript by session
- (Additional endpoints planned for GA)

### Planned GA enhancements
- Support for static API keys / personal access tokens
- More options for token lifetimes and refresh token grace period
- Setting to enable live transcription for all meetings
- Additional endpoints, tools, and webhook/event support
- Expanded documentation

## MCP Server

- **URL**: `https://api.read.ai/mcp/`
- **Transport**: Streamable HTTP
- **Auth**: OAuth (authenticate once, AI tools access securely without API keys in config files)
- **Compatible clients**: Claude Code, Claude Desktop, Cursor, VS Code, ChatGPT
- **Architecture**: Full FastAPI server — supports both MCP protocol and standard REST HTTP endpoints

### Available MCP tools
- List available sessions
- Retrieve transcripts by session
- (Action items, summaries, engagement metrics — "following closely behind")

### Setup
1. Point MCP client at `https://api.read.ai/mcp/`
2. Enter username and password for OAuth authentication
3. Connected — query meeting data via natural language

### Example queries
- "What did we decide about the timeline in yesterday's meeting?"
- "Pull the transcript from today's sprint planning meeting and generate the FastAPI endpoint we discussed"
- "What did [person] tell me about [topic]?"

## Webhooks

- **Setup**: Read dashboard → Integrations → Webhooks
- **Plan requirement**: Pro+ (premium integration)
- **Docs URL**: https://support.read.ai/hc/en-us/articles/16352415827219-Getting-Started-with-Webhooks

### Trigger events
- `meeting_end` — fires when a meeting ends
- `manual` — manually triggered by user

### Payload format
HTTP POST with raw JSON body:

```json
{
  "session_id": "unique-meeting-session-id",
  "trigger": "meeting_end",
  "chapter_summaries": [
    {
      "summary": "...",
      "topics": ["..."]
    }
  ],
  "transcript": [
    {
      "speaker": "Speaker Name",
      "timestamp": 1234567890000,
      "text": "..."
    }
  ]
}
```

Top-level properties:
- `session_id` — unique identifier for the meeting session
- `trigger` — event type (`meeting_end` or `manual`)
- `chapter_summaries` — detailed summaries broken into sequential chapters with associated topics
- `transcript` — full meeting transcript with speaker names and timestamps in Unix time (milliseconds)

### Available data types in webhook payload
- Meeting summary
- Chapters
- Topics
- Action items
- Key questions

### Security
- Cryptographic signature included in `X-Read-Signature` request header
- Use the signing key from webhook configuration to verify request authenticity and integrity
- Verify that the request originated from Read.ai and was not modified in transit

## Zapier Integration

- **Docs**: https://support.read.ai/hc/en-us/articles/18847506033171-Getting-Started-with-Zapier
- **Plan requirement**: Pro+
- **App**: Read AI on Zapier (8,000+ connected apps)

### Triggers
- Meeting report/summary available

### Available data fields
- Meeting summary
- Action items
- Key questions
- Transcript
- Meeting metadata

### Common Zaps
- Meeting notes → Google Docs
- Action items → Asana/Jira/Linear tasks
- Meeting summary → Slack channel
- Contact + meeting data → CRM (Salesforce, HubSpot, Zoho, Dynamics)
- Meeting data → Notion database

## n8n Integration

- Read AI is available as an integration on n8n
- Docs: https://n8n.io/integrations/read-ai/
