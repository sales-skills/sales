# Sales Note-Taker Platforms — Selection & API Reference

Per-platform detail for selection and backend API integration. Pricing is best-effort as of 2026-04 — verify on vendor site before quoting a customer.

## Quick comparison

| Platform | Category | Free tier | Starting paid | API | Webhooks | CRM depth | Best for |
|---|---|---|---|---|---|---|---|
| Fathom | AI note-taker | Yes (unlimited) | $16/mo | REST | Yes | Medium (Business+) | Budget-conscious SMB/indie sales |
| Fireflies.ai | AI note-taker | Yes (limited) | $10-$19/mo | GraphQL | Yes | Medium (Business+) | Mid-market, conversation search |
| Avoma | Meeting lifecycle | No | $19/seat | REST | Yes | Deep | Mid-market sales + CS, methodology |
| Gong | Revenue intelligence | No | ~$1,200-1,600/user/yr | REST | Yes (extensive) | Deep | Enterprise sales + coaching |
| Otter.ai | Transcription | Yes | $17-30/mo | REST (Enterprise beta) | Yes (Workspace) | Thin | General meetings, non-sales |
| Fellow | Meeting management | Yes | $11-15/user | REST | Yes | Medium | Manager 1:1s, leadership meetings |
| Grain | AI meeting recorder | Yes | $19-39/seat | REST | Yes | Medium | GTM teams, clip sharing |
| Sembly | AI meeting assistant | Yes | $10-20/seat | Webhook-first | Yes | Medium | Task automation, agent workflows |
| Read.ai | Meeting AI | Yes | $15-30/seat | Webhook-first | Yes | Medium | Engagement/sentiment analytics |

## Fathom

For deep platform coverage (API endpoints, HMAC webhook verification, OAuth flow, SDK usage, MCP setup, pricing gates), use `/sales-fathom`.

**Positioning**: Free-tier leader for AI note-taking. Individual reps and small teams lean on Fathom because the free plan has unlimited recordings and a decent AI summary. Business tier adds CRM sync.

**Pricing (2026-04)**: Free, Premium $20/mo ($16 annual), Team $19/user/mo ($15 annual, 2-user min), Business $34/user/mo ($25 annual, 2-user min). Team/Business cap at max 3 CRM users per domain. CRM sync is Business-only.

**API**:
- Docs: `https://developers.fathom.ai` (OpenAPI spec at `/api-reference/openapi.yaml`)
- Base URL: `https://api.fathom.ai/external/v1/`
- Auth: API key via `X-Api-Key` header (user-scoped — sees only meetings the user recorded or that were shared to their Team), or OAuth 2.0 Bearer token for multi-tenant apps
- Key endpoints:
  - `GET /meetings` — list meetings with filters (`calendar_invitees_domains[]`, `recorded_by[]`, `teams[]`, `created_after/before`, `include_transcript`, `include_summary`, `include_action_items`, `include_crm_matches`, `cursor`)
  - `GET /recordings/{recording_id}/transcript` — fetch transcript (supports async mode via `destination_url`)
  - `GET /recordings/{recording_id}/summary` — fetch AI summary (supports async mode)
  - `GET /teams`, `GET /team_members` — list teams / members
  - `POST /webhooks`, `DELETE /webhooks/{id}` — manage webhooks
- OAuth apps must fetch transcript/summary per recording (inline `include_transcript`/`include_summary` is disabled for OAuth)

**Webhooks**:
- Create via `POST /webhooks` with `destination_url`, `triggered_for` (one or more of `my_recordings`, `shared_external_recordings`, `my_shared_with_team_recordings`, `shared_team_recordings`), and at least one of `include_transcript`, `include_crm_matches`, `include_summary`, `include_action_items`
- Signature: Svix-style HMAC-SHA256 with three headers (`webhook-id`, `webhook-timestamp`, `webhook-signature`). Secret starts with `whsec_` — strip and base64-decode. Signed content: `${id}.${timestamp}.${raw_body}`
- Payload shape: same as `Meeting` object from the list endpoint, with requested fields populated

**Rate limits**: 60 requests/minute per-user (not per-key — multiple keys don't raise it). Headers: `RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`.

**SDKs**: Official TypeScript (`fathom-typescript`) and Python (`fathom-python`) SDKs. MCP server for Claude Desktop, Claude Code, and ChatGPT.

**Integrations**: Zoom/Meet/Teams, Slack, Gmail, Asana, Notion, Salesforce, HubSpot (Business+), Zapier, Make, n8n. MCP: Claude, ChatGPT.

**Selection notes**:
- **Pick Fathom when**: Budget is tight, the team wants a free tier for most reps, HubSpot/Salesforce sync is "good enough" rather than deep, you need a solid public API with webhooks + OAuth, and you don't need MEDDPICC-style scorecards (though AI Scorecards are available on Team+)
- **Avoid Fathom when**: You need deep deal intelligence (→ Gong), methodology-based scorecards at enterprise depth (→ Avoma), Google Meet bot capture is blocked by your customer's IT security, or you need >60 calls/minute for bulk ops

---

## Fireflies.ai

For deep platform coverage (GraphQL queries/mutations, Webhooks V1 vs V2, HMAC verification, rate limits per tier, AskFred AI, Real-time API, MCP server, bot auto-join control), use `/sales-fireflies`.

**Positioning**: Strong AI note-taker with a GraphQL API, built-in AskFred AI assistant for conversation search, and a bot (Fred) that joins Zoom/Meet/Teams. Popular at SMB/mid-market for teams that want to query their transcript history in natural language and have a developer-friendly API.

**Pricing (2026-04)**: Free, Pro $18/mo ($10/seat annual), Business $29/mo ($19/seat annual, CRM sync + video + team analytics), Enterprise $39/seat (SSO, SCIM, HIPAA, Super Admin role, private storage). Unlimited storage from Business tier up.

**API**:
- Docs: `https://docs.fireflies.ai` (llms.txt index at `/llms.txt`)
- Type: GraphQL (single endpoint)
- Endpoint: `https://api.fireflies.ai/graphql`
- Auth: `Authorization: Bearer YOUR_API_KEY` + `Content-Type: application/json`. API keys are user-scoped (see only meetings the user recorded or was shared). Multi-tenant = each tenant provides own key; Enterprise Super Admin key sees all team meetings.
- Key queries: `transcripts(...)` (list + filters), `transcript(id)`, `users`, `user_groups`, `active_meetings`, `analytics`, `apps`, `bites`, `channels`, `contacts`, `askfred_thread(s)`
- Key mutations: `uploadAudio`, `createUploadUrl`+`confirmUpload` (two-step), `addToLive`, `deleteTranscript`, `shareMeeting`, `updateMeetingTitle/Privacy/State/Channel`, `createBite`, `setUserRole`, `createAskfredThread`/`continueAskfredThread`

**Webhooks**:
- Two systems coexist. **V1** (legacy, still supported): dashboard → Developer Settings, single event `Transcription completed`, payload `{meetingId, eventType, clientReferenceId}`. **V2** (current): dashboard → Integrations → API → Webhook, granular events `meeting.transcribed` + `meeting.summarized`, payload `{event, timestamp, meeting_id, client_reference_id}`.
- Both use `X-Hub-Signature: sha256=<hex>` HMAC-SHA256 with a dashboard-configured signing secret. Always timing-safe-compare.
- V2 delivery SLA: endpoint must return 2xx within **10 seconds**.
- Fires **only for meeting owners** (`organizer_email`). Team-wide webhooks require **Enterprise + Super Admin role**.

**Rate limits**:
- Free / Pro: **50 requests per day** (not per minute — easy to hit during a backfill)
- Business / Enterprise: **60 requests per minute**
- Add to Live: 3 per 20 min. Share Meeting: 10/hr, 50 emails per request.
- Upload: 200MB audio all tiers; 100MB video Free, 1.5GB video paid.

**Integrations**: Salesforce, HubSpot (Business+), Slack, Zoom, Meet, Teams, Webex, Aircall, RingCentral, Asana, Trello, Notion, Greenhouse, Lever; Zapier (200+), Make, n8n (community node `n8n-nodes-fireflies`). Native MCP server for Claude/ChatGPT/Devin.

**Selection notes**:
- **Pick Fireflies when**: The team wants conversation search across history (AskFred is genuinely useful), you prefer GraphQL for exact-field fetching, you want built-in Real-time streaming events, and mid-range pricing fits
- **Avoid Fireflies when**: You need enterprise revenue intelligence with deal risk scoring (→ Gong), Free/Pro's 50 req/day cap will choke a backfill and you can't justify Business, or end users have flagged Fred's auto-join behavior as a deal-breaker with IT/security

---

## Avoma

For deep platform coverage (API authentication, webhook events, scorecard setup, Lead Router, pricing tiers, known reliability issues, troubleshooting), use `/sales-avoma`.

**Positioning**: End-to-end meeting lifecycle — scheduling, prep, AI notes, coaching scorecards, and deal intelligence. Built for mid-market sales and CS teams that want methodology adherence (MEDDIC/BANT/SPICED) baked into every call. Also includes a built-in Scheduler and Lead Router module.

**Pricing (2026-04)**: Startup $19/seat (annual), Organization $24/seat, Enterprise $39/seat. Add-ons: Conversation Intelligence $29/seat, Revenue Intelligence $29/seat, Lead Router $19/seat. Bundle discounts: 10% for 2, 15% for all 3. Free viewer seats available. Fully-loaded Enterprise seat with all add-ons: ~$104/mo.

**API**:
- Docs: `https://dev.avoma.com/` (JS-rendered) and `https://help.avoma.com/api-documentation`
- Type: REST
- Auth: `CLIENT_KEY:CLIENT_SECRET` combined string in HTTP Authorization header
- Key endpoints: meetings, recordings, transcriptions, notes, scorecards
- Max 5 API keys per organization (admin-only creation)
- **API access requires Organization plan or above** — Startup plan has no API

**Webhooks**:
- Events: new note generated, new meeting scheduled, meeting rescheduled, meeting cancelled (with reason)
- Prefer webhooks over polling for volume

**Rate limits**: 60 requests/minute per API key.

**Integrations**: Salesforce, HubSpot, Pipedrive, Zendesk Sell, Zoho, Copper (CRM), Zoom/Meet/Teams/GoToMeeting/BlueJeans (video), ZoomPhone/Salesloft/Aircall/RingCentral/Kixie/Groove/Outreach/Koncert (dialers), Slack, ClickUp, Zapier.

**Known issues (from G2/review analysis)**:
- Bot reliability: 73% of reviewers report failures — late joins (48%), mid-call drops (31%), no-shows (27%). Teams is worst (79% failure rate).
- Transcription accuracy drops with accents, technical terms, multi-speaker overlap.
- CRM sync can delay 60+ minutes.

**Selection notes**:
- **Pick Avoma when**: You want AI scorecards tied to a sales methodology (MEDDPICC, BANT, SPICED), automatic CRM field updates, built-in scheduling + lead routing, and a single platform covering both sales and CS workflows
- **Avoid Avoma when**: You're enterprise and need Gong-level revenue intelligence, you're solo/SMB on a tight budget (base + add-ons adds up fast), or Teams is your primary video platform (worst bot reliability)

---

## Gong

**Positioning**: Revenue intelligence leader — the deepest conversation analytics, deal risk detection, and coaching analytics in the category. Enterprise-priced.

**Pricing (2026-04)**: From ~$1,200-$1,600/user/year (annual contract, Sales+-class tiers). No public self-serve.

**API**:
- Docs: `https://help.gong.io/docs/what-the-gong-api-provides`
- Type: REST
- Rate limits: **3 req/sec, 10k/day, ~1k/hr per API key** — design for this early
- Rate-limit headers on every response: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
- 429 responses include `Retry-After` header
- Key endpoints:
  - `GET /v2/calls` — list calls (filter by date, users, deal, etc.)
  - `GET /v2/calls/{id}` — call metadata
  - `POST /v2/calls/{id}/transcript` — **POST**, not GET — returns full transcript with monologues
  - `/v2/users`, `/v2/deals`, `/v2/engagements` — richer CRM/deal context

**Webhooks**:
- Enable via Automations tab in Developer Hub
- Extensive event catalog (calls, deals, engagements)
- Configure endpoint + authentication

**Integrations**: Deep Salesforce, Dynamics, HubSpot; Slack; Zoom, Teams, Webex, Dialpad, lots of dialers.

**Selection notes**:
- **Pick Gong when**: You're enterprise, revenue intelligence is a strategic investment, and coaching/deal analytics ROI justifies $1k+/user/yr
- **Avoid Gong when**: Budget is a primary constraint or the team is under ~20 reps (overkill)

**API gotchas**:
- Transcript endpoint is **POST**, unlike most vendors — common first-integration bug
- 3 req/sec is aggressive — queue/batch every outbound call
- Backfilling history burns daily quota fast — paginate nightly, not all at once

---

## Otter.ai

**Positioning**: Broad-market transcription (not sales-first). Solid free tier, good for general meetings. Sales CRM depth is limited.

**Pricing (2026-04)**: Free (limited), Pro $17/mo, Business $30/user/mo, Enterprise custom.

**API**:
- **Public API is Enterprise-only and in beta** — contact Otter account manager to enable
- Official docs are not publicly indexed for non-Enterprise
- Unofficial community APIs exist on GitHub but are not production-grade
- Export formats available in UI/Zapier: TXT, DOCX, PDF, SRT (for video captions), MP3 (audio)

**Webhooks**:
- Workspace Webhooks available to Workspace Admins on Enterprise
- Docs: `https://help.otter.ai/hc/en-us/articles/35634832371735-Workspace-Webhooks`

**Integrations**: Salesforce, HubSpot, Slack, Zoom, Meet, Teams; Zapier (broad coverage — often the best path for non-Enterprise).

**Selection notes**:
- **Pick Otter when**: Use case is general meetings (not sales-specific), budget is tight, or the team already uses OtterPilot
- **Avoid Otter when**: You need a production API on anything below Enterprise, or CRM depth matters

---

## Fellow

**Positioning**: Meeting management + note-taking for managers and leadership teams. 1:1 agendas, action items, feedback — not primarily sales.

**Pricing (2026-04)**: Free (limited), Pro $11/user/mo, Business $15/user/mo, Enterprise custom.

**API**: REST API for transcripts, agendas, action items. Documented but lower volume of community-discoverable detail than Fathom/Fireflies.

**Webhooks**: Yes, at Business+ tier.

**Integrations**: Slack, Google Calendar, Outlook, Jira, Asana, Zoom, Meet, Teams, HubSpot, Salesforce (Business+).

**Selection notes**:
- **Pick Fellow when**: You want 1:1 templates, structured agendas, and manager workflows alongside AI notes
- **Avoid Fellow when**: Sales conversation intelligence is the primary need (pick Gong/Avoma/Fathom instead)

---

## Grain

**Positioning**: AI meeting recorder focused on GTM teams. Strong on clip sharing — snip a 30-second moment, share to Slack or paste into docs. Good for revenue teams who want to syndicate customer quotes.

**Pricing (2026-04)**: Free, Starter $19/seat, Business $39/seat, Enterprise custom.

**API**: REST for transcripts, highlights, clips, recordings. Webhook-first design.

**Webhooks**: Yes — recordings, highlights, transcripts.

**Integrations**: Salesforce, HubSpot, Slack, Zoom, Meet, Teams, Notion, Productboard, Linear.

**Selection notes**:
- **Pick Grain when**: GTM/product teams want to share specific call moments internally, CRM sync is a nice-to-have rather than the primary value
- **Avoid Grain when**: You need methodology scorecards (→ Avoma) or enterprise-grade deal intelligence (→ Gong)

---

## Sembly

**Positioning**: AI meeting assistant with a stronger focus on task automation and smart agents — auto-creates tasks, routes them, and can run workflow agents on meeting content.

**Pricing (2026-04)**: Free, Professional $10/seat, Team $20/seat, Enterprise custom.

**API**:
- Outbound Automations via HTTPS POST to configurable endpoint with configurable field names
- Docs: `https://helpdesk.sembly.ai/hc/en-us/articles/17664440116369-Guide-to-Outbound-Personal-and-Workspace-Automations-in-Sembly-for-API-Integrators-and-Custom-Adapter-Developers`
- Webhook-first architecture — meeting notes, transcripts, AI tasks pushed out via webhooks organized by speaker, timestamp, metadata

**Webhooks**: Primary integration path.

**Integrations**: Zapier (official), n8n (official), Slack, CRMs via webhook.

**Selection notes**:
- **Pick Sembly when**: You want AI to auto-create tasks from meetings and pipe them into your stack, and you prefer webhook-first integration
- **Avoid Sembly when**: You need deep native CRM field mapping (→ Avoma) or revenue intelligence (→ Gong)

---

## Read.ai

**Positioning**: Meeting AI with engagement and sentiment analytics layered on top of transcripts. Surfaces who's engaged, who's disengaged, and trends over time.

**Pricing (2026-04)**: Free, Pro $15/seat, Enterprise $30/seat+.

**API**: Webhook-first. Integration via Read's official webhooks feature — meeting reports and summaries pushed out to any webhook-receiving app.

**Webhooks**: Primary integration path. Docs at `https://www.read.ai/integrations` and `https://www.read.ai/post/read-integration-webhooks`.

**Integrations**: Webhook-native → works with any project management, CRM, workspace, wiki, database, marketing, or HR tool that accepts webhooks.

**Selection notes**:
- **Pick Read.ai when**: Engagement and sentiment analytics matter (e.g., you want to see team engagement trends across all meetings)
- **Avoid Read.ai when**: You need transcript-level analytics rather than meeting-level engagement scores

---

## Bolt-on conversation intelligence (inside other platforms)

These aren't standalone note-takers — they're modules within existing sales tools. Only relevant if you already use the parent platform.

- **Salesloft Conversations** — inside Salesloft; covered by `/sales-salesloft`
- **ZoomInfo Chorus** — inside ZoomInfo; covered by `/sales-zoominfo`
- **Seismic Meeting Intelligence** — inside Seismic; covered by `/sales-seismic`
