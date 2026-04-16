# Fathom Platform Reference

## Platform overview

Fathom is an AI meeting note-taker that joins video calls (Zoom, Google Meet, Microsoft Teams), records and transcribes them, and generates AI summaries, action items, and highlights. Over 300,000 companies reportedly use Fathom across sales, customer success, marketing, operations, HR, and product teams. Its positioning is "never take notes again" — a generous free tier (unlimited recordings) paired with paid plans that add CRM sync, team-wide sharing, and AI Scorecards.

**Key differentiators vs the broader note-taker category:**
- Most generous free plan in the category (unlimited recordings)
- Native integrations with Zoom/Meet/Teams, Slack, Gmail, Asana, Notion, Salesforce, HubSpot
- Public REST API + webhooks + MCP server (ChatGPT, Claude Desktop, Claude Code)
- TypeScript + Python official SDKs
- "Bot-free capture" mode for privacy-sensitive environments (local capture, no bot joins the call)
- "Ask Fathom" natural-language search across all meetings

## Key modules

### Transcription
Real-time transcription during the call with speaker identification. Supports ~38 languages. Transcript is formatted as HH:MM:SS timestamps with speaker display names matched to calendar invitees when possible.

### Summaries
AI-generated meeting summary in markdown format (always English output regardless of transcript language). Templates can be customized per meeting type. The `template_name` is returned on the summary object along with `markdown_formatted` text.

### Action Items
Automatically extracted action items with:
- `description` (always English)
- `user_generated` flag (was it auto-extracted or manually added)
- `completed` boolean
- `recording_timestamp` (HH:MM:SS pointing into the recording)
- `recording_playback_url` (deep link)
- `assignee` (name, email, team)

### Ask Fathom
Natural-language search across your meeting library. E.g., "what did the acme team say about pricing in Q1" surfaces relevant meeting segments with transcript quotes.

### Bot-Free Capture
Records without a bot joining the call. Useful for privacy-sensitive environments or when Google Meet flags Fathom's default bot mode as a security risk (see Gotchas).

### AI Scorecards (Team/Business)
Methodology-based scorecards (MEDDPICC, BANT, custom criteria) applied to recorded calls. Team/Business plan feature.

### Alerts
Configurable alerts that fire when specific keywords or topics come up (competitor mentions, pricing pushback, etc.).

### CRM Matching
Business-tier feature that matches meeting participants to CRM records (contacts, companies, deals) and surfaces them in the Fathom UI + API responses. Returns:
- `contacts[]` with name, email, record_url
- `companies[]` with name, record_url
- `deals[]` with name, amount, record_url
- `error` field populated if no CRM is connected

## Pricing tiers (2026-04)

| Tier | Monthly | Annual | Min seats | CRM sync | AI Scorecards | Notes |
|------|---------|--------|-----------|----------|---------------|-------|
| Free | $0 | $0 | 1 | No | No | Unlimited recordings, summaries, action items |
| Premium | $20/mo | $16/mo | 1 | No | Limited | For individual power users |
| Team | $19/user/mo | $15/user/mo | 2 | No | Yes | Shared meeting library |
| Business | $34/user/mo | $25/user/mo | 2 | Yes | Yes | Salesforce + HubSpot sync |

**Plan-gated features:**
- **CRM sync (Salesforce, HubSpot)**: Business only
- **AI Scorecards**: Team and Business
- **Team-wide shared libraries**: Team and Business
- **API access**: All paid plans; Free tier has limited API access
- **CRM user cap**: Team and Business cap at a max of 3 CRM users per domain

**Special programs:**
- **Qualified Portfolio Program** — up to 2 years of Fathom free for portfolio companies of approved VC funds
- **Nonprofits** — 10 free Business seats for registered nonprofits
- **Gong switchover** — free Business tier for the remainder of an existing Gong contract if switching

## Integrations

### Native (first-party)
- **Video platforms**: Zoom, Google Meet, Microsoft Teams
- **Comms**: Slack, Gmail
- **Productivity**: Asana, Notion
- **CRM** (Business+): Salesforce, HubSpot
- **AI**: ChatGPT, Claude (web, desktop, Claude Code) via MCP

### MCP Server
Fathom ships an official MCP (Model Context Protocol) server that lets LLMs query your meeting data directly. Supported clients:
- Claude Desktop
- Claude Code (via `claude mcp add` command)
- ChatGPT (via the Fathom app)

### Third-party / DIY
- Public REST API (see `fathom-api-reference.md`)
- Webhooks (see API reference)
- Zapier, Make.com, n8n (via API or webhook)
- TypeScript SDK: `fathom-typescript` (npm)
- Python SDK: `fathom-python` (PyPI)

## Data model

### Meeting (from `GET /meetings`)
Core fields:
- `title`, `meeting_title` (calendar event title)
- `recording_id` (integer — the primary key for downstream API calls)
- `url` (Fathom permalink), `share_url` (shareable link)
- `created_at`, `scheduled_start_time`, `scheduled_end_time`, `recording_start_time`, `recording_end_time`
- `calendar_invitees_domains_type` — `only_internal` or `one_or_more_external`
- `transcript_language` (ISO code)
- `calendar_invitees[]` — name, email, email_domain, is_external, matched_speaker_display_name
- `recorded_by` — FathomUser (name, email, email_domain, team)

Optional (toggled by `include_*` query params):
- `transcript[]` — TranscriptItem (speaker, text, timestamp)
- `default_summary` — MeetingSummary (template_name, markdown_formatted)
- `action_items[]` — ActionItem (description, user_generated, completed, recording_timestamp, recording_playback_url, assignee)
- `crm_matches` — CRMMatches (contacts, companies, deals, error)

### Webhook payload (new meeting content ready)
Same shape as a meeting object, with the fields requested in the webhook config populated.

## Common workflows

### Auto-pull transcripts into a CRM (HubSpot example)
1. Create a webhook in Fathom with `include_transcript=true`, `include_summary=true`, `include_action_items=true`, `include_crm_matches=true`, `triggered_for=["my_recordings", "my_shared_with_team_recordings"]`.
2. Receive webhook at your endpoint, verify HMAC signature.
3. Use `crm_matches.contacts[0].record_url` to locate the HubSpot contact (or fall back to email matching).
4. POST the summary + action items as a HubSpot engagement (`/engagements/v1/engagements`).
5. Optionally store full transcript in an attached file/note.

### Backfill historical meetings into a data warehouse
1. Call `GET /meetings?created_after=2024-01-01T00:00:00Z&include_transcript=true&include_summary=true&cursor={next}`.
2. Iterate via `next_cursor` until null. **Rate limit: 60 req/min** — queue at 1 request/second.
3. For OAuth apps, `include_transcript`/`include_summary` are disabled — fetch each via `GET /recordings/{id}/transcript` and `GET /recordings/{id}/summary`. That's 3N calls (list + transcript + summary per meeting).
4. For large backfills, use the async mode on transcript/summary endpoints: pass `destination_url` — Fathom will POST the result to that URL instead of returning inline. Useful when a single transcript could time out a sync call.

### Multi-tenant SaaS integration via OAuth
1. Register at `fathom.video/marketplace_applications/new` — receive `client_id` and `client_secret`.
2. Redirect user to the authorization URL with `scope=public_api` and a random `state`.
3. On callback, exchange `code` for tokens at `POST https://api.fathom.ai/external/v1/oauth2/token`.
4. Persist `access_token`, `refresh_token`, `expires` in a TokenStore (SQLite/Postgres/Redis — never in-memory in production).
5. Access tokens are short-lived; the SDK auto-refreshes. A `refresh_token` can only be used once but stays valid until the user revokes access.

## Rate limits

- Global: **60 requests per minute per user** (not per key — creating multiple keys doesn't raise this)
- Headers on every response:
  - `RateLimit-Limit` — 60
  - `RateLimit-Remaining` — requests left in the current window
  - `RateLimit-Reset` — seconds until the window resets
- On `429`, back off and respect `RateLimit-Reset`

## Deep dives

For the verbatim API endpoints, request/response schemas, OAuth flow, HMAC verification code samples, SDK methods, and MCP setup, see `fathom-api-reference.md`.
