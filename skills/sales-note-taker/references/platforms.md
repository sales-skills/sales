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

**Positioning**: Free-tier leader for AI note-taking. Individual reps and small teams lean on Fathom because the free plan has unlimited recordings and a decent AI summary. Business tier ($20/seat) adds CRM sync.

**Pricing (2026-04)**: Free (unlimited recordings), Premium $16/mo, Team $14/user/mo, Business $20/user/mo.

**API**:
- Docs: `https://developers.fathom.ai/quickstart` (primary) and `https://api-docs.fathom.global/`
- Auth: API key in header; keys are user-scoped and see meetings the user recorded or that were shared to their Team
- OAuth flow available — required if building a multi-tenant app (OAuth apps can't use `include_transcript` / `include_summary` query params, must fetch transcript via `/recordings/{recording_id}/transcript`)
- Key endpoints:
  - `GET /recordings` — list meetings
  - `GET /recordings/{recording_id}` — meeting metadata
  - `GET /recordings/{recording_id}/transcript` — full transcript (markdown)
  - `GET /recordings/{recording_id}/summary` — AI summary
  - `GET /recordings/{recording_id}/action-items` — action items with assignees + completion status
  - Webhook management via API

**Webhooks**:
- Configurable parameters: `include_transcript`, `include_summary`, `include_action_items`, `include_crm_matches`, `triggered_for` (array of recording types that trigger)
- Events: recording-level completion; CRM match notifications
- Exported transcript format: markdown with metadata (date, duration, participants, Fathom link), AI summary, action items (with assignees + completion), full transcript (speaker labels + timestamps)

**Rate limits**: Published per-key — check current docs. Use cursor-based pagination for list endpoints.

**Integrations**: HubSpot, Salesforce, Slack, Linear, Notion (native); Zapier, Make for everything else.

**Selection notes**:
- **Pick Fathom when**: Budget is tight, the team wants a free tier for most reps, HubSpot/Salesforce sync is "good enough" rather than deep, and you don't need MEDDPICC-style scorecards
- **Avoid Fathom when**: You need deep deal intelligence (→ Gong), methodology-based scorecards (→ Avoma), or HIPAA compliance without checking current SOC/HIPAA posture

---

## Fireflies.ai

**Positioning**: Strong AI note-taker with a GraphQL API and surprisingly deep conversation search. Popular at SMB/mid-market for teams that want to query their transcript history with natural language.

**Pricing (2026-04)**: Free (limited meetings), Pro $10/seat, Business $19/seat, Enterprise custom.

**API**:
- Docs: `https://docs.fireflies.ai/graphql-api/`
- Type: GraphQL
- Endpoint: `https://api.fireflies.ai/graphql`
- Auth: `Authorization: Bearer YOUR_API_KEY_HERE`, `Content-Type: application/json`
- Key queries/mutations:
  - `transcripts(...)` — list meetings with filtering (date range, participants, keywords)
  - `transcript(id: ...)` — full transcript for a meeting
  - `setUserWebhook` — subscribe to webhook events
  - Users, teams, AI filters, topics

**Webhooks**:
- Configured at `https://app.firefiles.ai/settings` → Developer settings
- Events include: `Transcription completed` (primary) — fires when meeting has been processed and transcript is ready
- Payload: `meetingId`, `eventType`, optional `clientReferenceId`
- Fires only for meeting **owners** (referred to as `organizer_email` in API)
- Security: `x-hub-signature` header with SHA-256 HMAC — always verify before trusting payload

**Rate limits**: GraphQL complexity limits — batch multiple fields per query up to the limit, but don't request full transcript + audio URL for 100 meetings in one query. Split into transcript-fetch vs metadata-fetch pipelines.

**Integrations**: Salesforce, HubSpot (Business+), Slack, Zoom, Meet, Teams, Webex; Zapier, Make for the long tail.

**Selection notes**:
- **Pick Fireflies when**: The team wants conversation search across their history, you prefer GraphQL for fine-grained data fetching, and you want a mid-range price point
- **Avoid Fireflies when**: You need enterprise revenue intelligence (→ Gong), the team is non-technical and won't use GraphQL tooling (REST vendors are simpler to integrate)

---

## Avoma

**Positioning**: End-to-end meeting lifecycle — prep, notes, coaching scorecards, and deal intelligence. Built for sales and customer success teams that want methodology adherence baked into every call.

**Pricing (2026-04)**: Startup $19/recorder seat/mo, Organization $29/recorder seat/mo, Enterprise $39/recorder seat/mo (plus non-recorder seats which are cheaper).

**API**:
- Docs: `https://dev.avoma.com/` and `https://help.avoma.com/api-documentation`
- Type: REST
- Auth: `Authorization` header with combined `CLIENT_KEY:CLIENT_SECRET`
- Key endpoints: recordings, transcripts, notes, insights, meetings, users
- Webhook setup documented in dev.avoma.com

**Webhooks**:
- Events: new note generated, new meeting scheduled, meeting rescheduled, meeting cancelled (with reason)
- Prefer webhooks over polling for volume

**Rate limits**: Standard REST pagination; specific per-key limits in the dev portal. Conservative approach: queue outbound calls.

**Integrations**: Deep Salesforce and HubSpot field-mapping (auto-updates CRM fields based on meeting content), Slack, Zoom/Meet/Teams.

**Selection notes**:
- **Pick Avoma when**: You want AI scorecards tied to a sales methodology (MEDDPICC, BANT, etc.), automatic CRM field updates, and a single platform covering both sales and CS workflows
- **Avoid Avoma when**: You're enterprise and need Gong-level revenue intelligence, or you're solo/SMB and the price doesn't fit

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
