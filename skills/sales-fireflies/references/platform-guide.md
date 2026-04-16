# Fireflies.ai Platform Reference

Full platform reference for Fireflies.ai — modules, pricing, integrations, GraphQL data model, workflows, and deep dives. For verbatim GraphQL queries/mutations/webhook schemas, see `fireflies-api-reference.md` in this directory.

## Platform overview

Fireflies.ai is an AI meeting note-taker and conversation-intelligence platform. A bot named **Fred** joins Zoom, Google Meet, and Microsoft Teams calls to record, transcribe (95% accuracy, 100+ languages), summarize, and analyze conversations. It targets sales teams, recruiting, product/UX research, VCs, healthcare (HIPAA), and general business meetings.

Differentiators:
- **GraphQL API** (not REST) — query only the fields you need, single endpoint `https://api.fireflies.ai/graphql`
- **AskFred** — AI assistant that answers questions across your meeting history, available as API queries/mutations
- **Real-time API** — streaming events during live meetings (action items, soundbites captured as they happen)
- **MCP server** — Fireflies has its own MCP server for Claude, ChatGPT, Devin
- **Strong compliance**: SOC 2 Type II, GDPR, HIPAA certified (Enterprise), zero data retention for AI training

## Key modules

### Transcription & recording
Fred joins the call, records audio/video, and produces a transcript with speaker diarization. Accuracy claimed at ~95% for English; performance on multilingual varies (tl;dv and some others score higher on non-English per 2026 comparison articles).

### AI Summaries
Auto-generated meeting overviews with action items, key points, and bullet summaries. Pro+ gets unlimited summaries; Free has limits.

### AskFred (AI assistant)
Natural-language query over meetings. Exposed via API as `askfred_thread`, `askfred_threads`, `create_askfred_thread`, `continue_askfred_thread`, `delete_askfred_thread`. Use to build "ask your meetings" features in internal apps.

### AI Skills & Topic Trackers
Customizable modules that tag meetings by topic or industry workflow. Queryable via `apps` (AI Apps).

### Real-time / Live Assist
During a live meeting, Fred can surface coaching suggestions, capture soundbites (`create-live-soundbite`), and extract action items (`create-live-action-item`). Real-time API streams these events. `Add to Live` mutation (rate limited to 3 per 20 min) lets you attach to an in-progress call.

### Bites (clips)
A **Bite** is a short clip of a meeting — equivalent to Grain's highlights. Queryable via `bite(id)`, `bites(...)`, creatable via `create-bite` mutation.

### Channels (team-wide sharing)
Channels are containers that group meetings for team-wide visibility. Queryable via `channel(id)`, `channels(...)`, mutable via `update-meeting-channel`.

### Analytics
Talk-time, sentiment, topic analysis, team/user analytics. Query: `analytics(...)` returns `MeetingAnalytics` objects.

### Integrations & Zapier
200+ integrations via native connectors + Zapier. Native: Salesforce, HubSpot, Slack, Asana, Trello, Notion, Aircall, RingCentral, Greenhouse, Lever.

### Super Admin (Enterprise)
Grants team-wide API access including webhooks that fire for any meeting owned by the team (not just the super admin's own). Required for multi-tenant / team-wide integrations.

## Pricing and limits

Pricing as of 2026-04 — verify at fireflies.ai/pricing before quoting a customer.

| Tier | Monthly | Annual | Storage | AI credits | Key features |
|---|---|---|---|---|---|
| Free | $0 | — | 800 min / seat | Limited | Unlimited transcription*, limited summaries |
| Pro | $18/seat | $10/seat/mo | 8,000 min / seat | 20 | Unlimited summaries, download, personal assistant, talk-time analytics, AI skills, voice agents |
| Business | $29/seat | $19/seat/mo | Unlimited | 30 | Video recording, multi-language, conversation intelligence, team analytics, user groups |
| Enterprise | $39/seat | $39/seat/mo | Unlimited | 50 | Rules engine, SSO, SCIM, HIPAA, private storage, custom retention, super admin role, dedicated AM |

### API rate limits

| Plan | Standard GraphQL limit |
|---|---|
| Free / Pro | **50 requests per day** |
| Business / Enterprise | **60 requests per minute** |

Special endpoint limits (all plans):
- **Add to Live**: 3 requests per 20 minutes
- **Share Meeting**: 10 requests per hour (up to 50 emails per request)

### Upload limits

| Type | Free | Pro / Business / Enterprise |
|---|---|---|
| Audio | 200MB | 200MB |
| Video | 100MB | 1.5GB |

### Affiliate program
Reditus-based (also self-hosted at fireflies.ai/affiliate) — 10-30% recurring commission for 12 months, tiered by MRR. 90-day cookie. Sign-up at fireflies.getrewardful.com.

## Integrations

### Native (no Zapier required)
- **CRM**: Salesforce, HubSpot (5+ listed) — bidirectional field mapping
- **Video conferencing**: Zoom, Google Meet, Microsoft Teams, Webex
- **Project management**: Asana, Trello, ClickUp, Monday, Notion (9+ listed)
- **Collaboration**: Slack (dedicated channels per meeting)
- **Dialers**: Aircall, RingCentral
- **ATS**: Greenhouse, Lever
- **Storage**: Multiple cloud options for meeting audio/video

### Developer integrations
- **GraphQL API** at `https://api.fireflies.ai/graphql`
- **Webhooks V1** (legacy, still supported) — single event: `Transcription completed`
- **Webhooks V2** (current) — `meeting.transcribed`, `meeting.summarized`
- **Real-time API** — streaming events during live meetings
- **Fireflies MCP server** — works with Claude Desktop, Claude Code, ChatGPT, Devin
- **n8n community node**: `n8n-nodes-fireflies`

### iPaaS / Long-tail
Zapier (official integration documented at `/integrations/zapier`), Make.com, n8n (community node maintained by firefliesai). 200+ total via Zapier.

## Data model (GraphQL)

Single endpoint, Bearer token auth. Key root types:

### Queries
- `transcript(id: String!)` — single meeting transcript (id is `meetingId`, used interchangeably)
- `transcripts(...)` — list with filters: date_from, date_to, host_email, participant_email, keyword, title, organizer_email, mine, limit, skip
- `user(id: ID)` / `users` — user data
- `user_groups` — user group listings
- `active_meetings(...)` — meetings currently in progress
- `analytics(...)` — `MeetingAnalytics` data (talk-time, sentiment, etc.)
- `apps(...)` — AI Apps (topic trackers, AI skills)
- `bite(id)` / `bites(...)` — clips
- `channel(id)` / `channels(...)` — team channels
- `contacts(...)` — contact records from meetings
- `live_action_items(...)` — real-time action items during an active meeting
- `rule_executions_by_meeting(...)` — Enterprise rules engine results
- `askfred_thread(id)` / `askfred_threads(...)` — AskFred AI conversations

### Mutations
- `uploadAudio(input: AudioUploadInput)` — upload external audio/video for transcription (with optional per-upload webhook)
- `createUploadUrl(input)` + `confirmUpload(input)` — two-step upload for large files
- `addToLive(...)` — attach Fred to an in-progress call (rate limited to 3 per 20 min)
- `createLiveActionItem` / `createLiveSoundbite` — tag moments during a live meeting
- `deleteTranscript` — delete a meeting transcript
- `shareMeeting(input: ShareMeetingInput)` — share with up to 50 emails, 10/hr limit
- `revokeSharedMeetingAccess` — revoke sharing
- `updateMeetingTitle` / `updateMeetingPrivacy` / `updateMeetingState` / `updateMeetingChannel` — meeting management
- `createBite` — clip creation
- `setUserRole` — Super Admin role management
- `createAskfredThread` / `continueAskfredThread` / `deleteAskfredThread` — AskFred interactions

### Core object: Transcript
Key fields (subset — see `fireflies-api-reference.md` for full schema):
- `id` (String) — meeting/transcript ID, same as `meetingId` in webhooks
- `title`, `organizer_email`, `host_email`, `date`, `duration`, `meeting_link`
- `participants[]` — list of attendee emails
- `speakers[]` (Speaker) — identified speakers with IDs
- `sentences[]` (Sentence) — transcript with `speaker_id`, `text`, `start_time`, `raw_text`
- `summary` (Summary) — `action_items`, `keywords`, `outline`, `overview`, `shorthand_bullet`, `bullet_gist`
- `sentiments` (Sentiments) — pos/neutral/neg breakdown
- `audio_url`, `video_url`, `transcript_url` — media links
- `meeting_attendees[]`, `shared_with[]`, `channel`, `user` — ownership/sharing state

## Webhook schema

### V1 payload
```json
{
  "meetingId": "ASxwZxCstx",
  "eventType": "Transcription completed",
  "clientReferenceId": "be582c46-4ac9-4565-9ba6-6ab4264496a8"
}
```
Signature: `X-Hub-Signature: sha256=<hex>` (shared secret configured in dashboard → Developer Settings, 16-32 char custom key or auto-generated).

### V2 payload
```json
{
  "event": "meeting.transcribed",
  "timestamp": 1710876543210,
  "meeting_id": "ASxwZxCstx",
  "client_reference_id": "be582c46-4ac9-4565-9ba6-6ab4264496a8"
}
```
Signature: same `X-Hub-Signature: sha256=<hex>` format. Headers also include `Content-Type: application/json` and `User-Agent: Fireflies-Webhook/1.0`.

### Event list (V2)
| Event | Fires when |
|---|---|
| `meeting.transcribed` | Raw transcript is ready |
| `meeting.summarized` | AI summary (action items, notes) has been processed — fires after `meeting.transcribed` |

### Delivery SLA
- Your endpoint must return 2xx within **10 seconds**
- Non-2xx or timeout marks delivery as failed
- Fires **only for meeting owners** (organizer_email)
- **Team-wide webhooks require Enterprise + Super Admin**

## Common workflows

### 1. CRM auto-log (Salesforce / HubSpot)

Fireflies has native CRM sync on Business+ tiers — no code needed for basic field mapping. Configure in dashboard → Integrations. For custom logic (e.g., "create a task in the owner's queue when sentiment is negative"), subscribe to Webhooks V2 `meeting.summarized`, fetch summary via `transcript(id)` query, then call Salesforce REST / HubSpot API.

### 2. Warehouse pipeline (Snowflake / BigQuery)

Pattern:
1. Webhooks V2 `meeting.summarized` → API Gateway / Cloud Run / Lambda
2. Verify HMAC `X-Hub-Signature` with `sha256=<hex>` using timing-safe comparison
3. Enqueue `{meeting_id, client_reference_id, event, timestamp}` to SQS/Pub-Sub
4. Worker fetches full transcript: `query { transcript(id: "...") { id title date duration sentences { speaker_id text start_time } summary { action_items keywords overview } participants } }`
5. Write raw GraphQL response to S3/GCS for audit, normalized rows to warehouse
6. Nightly reconcile: `transcripts(date_from: ..., date_to: ...)` for last 48h — backfill missed webhooks

**Rate-limit sizing**: Business (60 req/min) supports ~3,600 meeting fetches per hour. Queue outbound calls with a token-bucket limiter set to 50 req/min to leave headroom for other calls.

### 3. Slack real-time alerts

Use Webhooks V2 `meeting.transcribed` → your handler → fetch summary briefly → post to Slack. For "alert when competitor mentioned" logic, Fireflies' built-in Topic Trackers (on Business+) can push directly to Slack without your code.

### 4. Multi-tenant OAuth-style integration

Fireflies doesn't currently offer OAuth 2.0 for multi-tenant apps — each user provides their own API key. For SaaS products integrating Fireflies on behalf of customers, collect the customer's API key via a settings UI (document it's found under dashboard → Integrations → Fireflies API), store encrypted, and make requests on their behalf. At enterprise scale, ask the customer to use a Super Admin key so one key covers all their meetings.

### 5. AskFred-powered internal app

If building a "query our meeting history" feature, use `createAskfredThread` + `continueAskfredThread` to maintain a conversation thread. This is easier than rolling your own retrieval over transcript text — Fireflies' AI has context on speakers, dates, and meeting structure.

## Deep dives

### HMAC webhook verification (Node.js)
```javascript
const crypto = require('crypto');
function verifySignature(payload, signature, secret) {
  const expected = 'sha256=' + crypto.createHmac('sha256', secret).update(payload, 'utf8').digest('hex');
  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return false;
  return crypto.timingSafeEqual(sigBuf, expBuf);
}
```
See `fireflies-api-reference.md` → `graphql-api/webhooks-v2` for full Node, Python, and Java examples.

### Introspection
GraphQL introspection is enabled — use any GraphQL client (Apollo Studio, Insomnia, GraphiQL) to explore the schema interactively. Set endpoint to `https://api.fireflies.ai/graphql` and add `Authorization: Bearer <key>` header.

### Error handling
Fireflies returns GraphQL-standard errors in the `errors` array. Common codes include `auth_failed`, `not_found`, `rate_limited`, `invalid_arguments`. Full list in `references/fireflies-api-reference.md` → `miscellaneous/error-codes`.

### V1 → V2 migration
| Feature | V1 | V2 |
|---|---|---|
| Events | One (`Transcription completed`) | Two (`meeting.transcribed`, `meeting.summarized`), granular subscription |
| Payload | `meetingId`, `eventType`, `clientReferenceId` | `meeting_id`, `event`, `timestamp`, `client_reference_id` |
| Signature | `X-Hub-Signature: sha256=<hex>` | Same |
| Configuration | Dashboard → Developer Settings | Dashboard → Integrations → API → Webhook |

V1 still works indefinitely — don't rush migration unless you need the split event types. Consumers that only care about "transcript + summary both ready" can subscribe only to `meeting.summarized` in V2 and skip V1 entirely.

### Bot / auto-join control
Biggest end-user complaint. Fireflies joins every calendar meeting by default once calendar OAuth is granted. Controls:
- **Global toggle**: Dashboard → Settings → Meeting → Auto-join
- **Per-calendar**: Select which calendars Fred watches
- **Per-meeting**: Add `#noff` to meeting title to exclude, `#onff` to include (only if auto-join is off globally)
- **Org-level block**: Teams admin can block the Fred bot user; Zoom admin can block the Fireflies app; Google Workspace admin can revoke OAuth scope
