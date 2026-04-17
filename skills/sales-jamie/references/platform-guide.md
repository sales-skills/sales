# Jamie Platform Reference

## Platform overview

Jamie is a privacy-first, bot-free AI meeting note-taker. Unlike competitors that join calls as a bot participant, Jamie records via the user's device (desktop or mobile app), making it work across any meeting platform and in-person conversations. Based in the EU with full GDPR compliance, ISO 27001 certification, and AES 256-bit encryption. Audio is deleted after transcription.

**Target audience**: Professionals and teams who want meeting notes without the awkwardness of a bot joining their calls. Strong appeal for privacy-conscious organizations and EU-based companies.

**Key differentiators**: Bot-free recording (device-based), 99+ language support, EU data residency, audio deleted post-transcription, works for in-person meetings.

## Key modules

### Recording
- **Bot-free capture**: Records via device microphone — no bot joins the call
- **Platforms**: Works with Zoom, Google Meet, Microsoft Teams, and any audio source
- **In-person**: Can record physical meetings via mobile app or desktop mic
- **Auto-record**: Can be set to automatically start when a calendar event begins
- **Duration limits**: 30 min (Free), 2 hr (Plus), 3 hr (Pro/Team/Enterprise)

### AI processing
- **Transcription**: 99+ languages with speaker diarization
- **Summaries**: Structured meeting notes with key points, decisions, and context
- **Action items**: Auto-extracted tasks with owners (when identifiable)
- **Ask Jamie**: AI chat to query across all your meetings — find details, compare discussions, surface patterns
- **Custom templates**: Format meeting output to your preferred structure
- **Custom words**: Teach Jamie domain-specific terminology and proper nouns

### Speaker recognition
- **Speaker labeling**: Auto-labels speakers (Speaker 1, Speaker 2, etc.)
- **Speaker memory**: Learns voices over time from repeated meetings — progressively replaces "Speaker N" with actual names
- **Manual correction**: Label speakers manually in early meetings to accelerate learning

### Integrations
- **CRM**: HubSpot, Salesforce, Attio (Pro+ only) — auto-attach notes to matching contacts
- **Notes**: Notion (create pages), Google Docs (export), OneNote (save)
- **Tasks**: Asana (create tasks from action items)
- **Automation**: Make.com via webhooks, custom webhooks to any HTTPS endpoint
- **AI tools**: MCP server (`vicampuzano-jamie-mcp`) for Claude, ChatGPT, Cursor (Pro+ required)
- **Calendar**: Google Calendar, Outlook

### Organization
- **Tags**: Organize meetings with custom tags
- **Search**: Full-text search across all meetings
- **Sharing**: Share meetings with workspace members

## Pricing and limits

Best-effort as of 2026-04 — verify on meetjamie.ai/pricing before quoting.

| Tier | Price (monthly) | Price (annual) | Meetings | Duration | Key features |
|---|---|---|---|---|---|
| Free | €0 | €0 | 10/mo | 30 min | Core notes, transcripts, action items, Notion/Google Docs/OneNote, Ask Jamie |
| Plus | €25/mo | €21/mo (€250/yr) | 20/mo | 2 hr | Everything in Free + webhooks |
| Pro | €47/mo | €39/mo (€470/yr) | Unlimited | 3 hr | Everything in Plus + CRM sync (HubSpot/Salesforce/Attio) + Asana + API access |
| Team | €39/seat/mo | €33/seat/mo (€390/yr) | Unlimited | 3 hr | Everything in Pro + centralized billing + 2-seat minimum |
| Enterprise | Custom | Custom | Unlimited | 3 hr | Everything in Team + SSO (Microsoft Entra ID, Google) + admin controls + EU data residency + DPAs + ISO 27001 + personalized onboarding + 10-seat minimum |

**Plan-gated features**:
- Webhooks: Plus+
- CRM sync (HubSpot/Salesforce/Attio): Pro+
- Asana integration: Pro+
- API access: Pro+
- MCP server: Pro+ (requires API key)
- SSO: Enterprise only
- Admin controls: Enterprise only

All plans include Ask Jamie chat and unlimited storage.

## API reference

**Docs**: docs.meetjamie.ai (JS-rendered — summary below from llms-full.txt; check docs site for latest)

### Authentication

API key via `x-api-key` header. Keys start with `jk_` prefix. Generate in Jamie app: Settings → Developers → API Keys.

**Two key types**:
- **Personal keys** — access `/v1/me/` routes. See your own meetings + meetings shared with you. Support full-text search and tag management.
- **Workspace keys** — access `/v1/workspace/` routes. Admin-created. See all workspace meetings. Enable user-email filtering for team-wide queries.

### Rate limits

100 requests/minute per user (personal key) or per workspace (workspace key).

### Core endpoints

**Meetings API** (`/v1/me/meetings` or `/v1/workspace/meetings`):
- List meetings (with filters)
- Fetch a single meeting
- Search meetings (full-text)
- Delete a meeting
- Get meeting summary (Markdown or HTML format)
- Get full transcript
- Get participants list
- Get tasks (action items)
- Get tags
- Get calendar event details

**Tasks API**:
- Query action items extracted from meetings
- Filter by: completion status, date range, assignee, specific meeting

**Tags API** (personal keys only):
- List available tags
- Filter meetings by tag in list operations

### Webhooks

**Event**: `meeting.completed` — fires when a meeting is fully processed (summary, transcript, participants, tasks, and calendar attendee data are all ready).

**Requirements**:
- Plus plan or higher
- HTTPS endpoint (HTTP not supported)

**Authentication options**:
1. **API Key** — Jamie sends a static key in a header of your choice (e.g., `x-jamie-api-key`, `x-make-apikey`, `Authorization`)
2. **HMAC-SHA256** — Jamie signs each request; signature sent in `x-jamie-signature` header

**Payload**: Contains summary, transcript, participants, tasks, and calendar attendee data.

**Delivery**:
- Timeout: 30 seconds
- Retries: Up to 5 attempts with exponential backoff
- Success: 2xx HTTP status required
- Failed webhooks trigger admin notification (rate-limited to 1/hour per endpoint)

**Limitations**:
- Endpoint URL cannot be updated after creation — must delete and recreate
- Selected events cannot be changed after creation — must create a new webhook
- Regenerating signing secret invalidates the old one immediately

**Make.com setup**:
1. Create a Make.com scenario with a Webhooks trigger
2. Copy the Make.com webhook URL
3. In Jamie: Settings → Integrations → Webhooks → Create Webhook
4. Paste URL, add description, select API Key auth, set header to `x-make-apikey`
5. Create webhook and test with a short meeting

### MCP server

Community-built: `vicampuzano-jamie-mcp` (npm package)

**Setup**:
```json
{
  "mcpServers": {
    "jamie": {
      "command": "npx",
      "args": ["-y", "vicampuzano-jamie-mcp"],
      "env": {
        "JAMIE_API_KEY": "jk_your_key_here"
      }
    }
  }
}
```

**Requirements**: Pro, Team, or Enterprise plan (API key required).

**Capabilities**: List meetings, read summaries and transcripts, search across meetings, manage tasks — all accessible from Claude, ChatGPT, or Cursor.

## Privacy and security

- **EU data residency**: Data stored in EU
- **GDPR compliant**: Full compliance
- **ISO 27001 certified**
- **Encryption**: AES 256-bit at rest, TLS 1.2 in transit
- **Audio handling**: Deleted after transcription — not stored
- **No training**: Customer data not used for model training
- **SOC 2**: Not mentioned — verify if required

## Apps and platforms

- **Desktop**: Mac, Windows (MSI installer via GitHub releases)
- **Mobile**: iOS (App Store)
- **No Android app** — desktop or iOS only
- **Browser**: Web app at app.meetjamie.ai
- **Homebrew**: `brew install --cask jamie`
