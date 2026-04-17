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
| Fellow | Meeting management | Yes (5 lifetime) | $7-15/user | REST | Yes (Zapier) | Medium (Business+) | Manager 1:1s, leadership meetings |
| Grain | AI meeting recorder | Yes (20 meetings) | $15-39/seat | REST (Business+) | Yes (Zapier) | Medium (Business+) | GTM teams, clip sharing, MCP |
| Sembly | Agentic meeting intelligence | No (trial only) | $17-39/user | Webhook-first | Yes | Medium (10 CRMs) | Professional services, deliverables, task automation |
| Read.ai | Meeting AI | Yes | $15-30/seat | Webhook-first | Yes | Medium | Engagement/sentiment analytics |
| MeetGeek | AI meeting assistant | Yes (3 hrs/mo) | $9.99/mo | REST | Yes | Medium (7 CRMs) | Teams wanting customizable templates, analytics, affordable pricing |
| Jamie | Bot-free AI note-taker | Yes (10 meetings) | €21/mo | REST | Yes (Plus+) | Medium (3 CRMs, Pro+) | Privacy-first EU teams, in-person meetings, bot-free recording |
| Krisp | Voice AI + note-taker | No (7-day trial) | $8/mo | Webhooks | Yes (Advanced+) | Medium (HubSpot Core+, SF Advanced+) | Noisy environments, noise cancellation + AI notes, SDK developers |
| Colibri | Real-time transcription + Sales Copilot | Yes (5 hrs/mo) | $16/mo | None | None | Thin (Salesforce Scale only) | Real-time live coaching during calls, legal transcription |
| Cluely | Real-time AI coaching overlay | Yes (limited) | $20/mo | None | None | Medium (via Merge.dev, Team+) | Real-time AI prompts during calls, knowledge base RAG, pre-call briefs |
| Jamy.ai | AI meeting assistant + translation | Yes (300 min/mo) | $14.99/mo | REST (partial) | Yes (Zapier/Make) | Thin (HubSpot only) | Multilingual teams needing real-time translation in 100+ languages |
| Wave | Mobile-first AI note-taker | Yes (30 min/mo) | $11.67/mo | REST | Yes (HMAC-SHA256) | None (export only) | In-person recording, phone calls, cross-device sync, semantic search |

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

For deep platform coverage (all modules, API endpoints, webhook automation, Smart Tracker tuning, coaching scorecards, pricing breakdown, known issues), use `/sales-gong`.

**Positioning**: Revenue intelligence leader — the deepest conversation analytics, deal risk detection, coaching analytics, and deal intelligence in the category. Enterprise-priced. Trusted by 5,000+ customers. Also includes Gong Forecast (revenue forecasting, widely considered weak — ~40% of customers stack Clari), Gong Engage (sales engagement, known stability issues), Gong Enable (enablement), and Gong Agents (AI automation).

**Pricing (2026-04)**: ~$1,600/user/year list (negotiated: $1,000-$1,349 at scale). Mandatory platform fee: $5K-$50K/year regardless of team size. Onboarding: $7,500+. Add-ons: Forecast ~$700/user/yr, Engage ~$800/user/yr. Fully loaded: $2,400-$3,000/user/yr + platform fees. Annual/multi-year contracts with 5-10% renewal uplift. No public self-serve pricing.

**API**:
- Docs: `https://help.gong.io/docs/what-the-gong-api-provides`
- Type: REST
- Base URL: `https://api.gong.io/v2/`
- Auth: Basic Auth (`access_key:access_key_secret` base64-encoded) or OAuth 2.0 (required for multi-tenant)
- Scopes: `api:users:read`, `api:calls:read`, `api:flows:read`, etc.
- Rate limits: **3 req/sec, ~1k/hr, 10k/day per API key** — design for this early
- Rate-limit headers on every response: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
- 429 responses include `Retry-After` header
- Key endpoints:
  - `GET /v2/calls` — list calls (filter by date, users, deal)
  - `GET /v2/calls/{id}` — call metadata (participants, topics, trackers, scorecards)
  - `POST /v2/calls/{id}/transcript` — **POST**, not GET — returns full transcript with monologues
  - `GET /v2/users`, `GET /v2/users/{id}/stats` — user data and activity stats
  - `GET/POST /v2/crm/object`, `GET/POST /v2/crm/map-fields` — CRM integration
  - `GET/POST/PUT /v2/flows` — Engage flow management (requires `api:flows:read`)

**Webhooks**:
- Enable via Automations tab in Developer Hub
- Payload: JSON with `callData` (full call data — metadata, CRM context, parties, tracked content, interaction stats, collaboration comments) and `isTest` flag
- Authentication: Signed JWT header — verify digital signature with public key from Developer Hub
- Events: Call processed, deal updated, engagement events (push external events into Gong timeline)
- Payload schema matches API response schema

**Integrations**: Deep Salesforce (tasks, bi-directional deal sync), HubSpot (meetings, bi-directional), Dynamics 365; Slack; Zoom, Teams, Webex, Google Meet, Dialpad, RingCentral, Aircall, 50+ dialers. MCP support announced (2026). Gong Collective marketplace (230+ partners).

**Known issues (from 600+ G2/Capterra reviews)**:
- Smart Trackers: high false-positive rates (87 mentions), need 50-100 examples per tracker, context-blind
- Call search: unintuitive filtering, hard to find specific calls (154 mentions)
- Transcription accuracy: degrades with accents, non-native English, technical jargon (84 mentions)
- No bulk data export via UI — must use API (requires dev resources)
- Gong Forecast widely considered weak — ~40% of customers also buy Clari
- Gong Engage: slow, buggy, high admin burden
- Support quality declined 2024-2025 — outsourced onboarding, slow ticket resolution
- Mandatory bundling on new contracts — CI-only pricing increasingly hard to get
- CRM sync is one-way for many fields — doesn't auto-populate methodology fields or custom objects

**Selection notes**:
- **Pick Gong when**: You're enterprise (50+ reps), revenue intelligence is a strategic investment, coaching/deal analytics ROI justifies $1k+/user/yr, and you need the deepest conversation analytics in the category
- **Avoid Gong when**: Budget is a primary constraint, team is under ~20 reps (overkill and negative ROI), you primarily need forecasting (→ Clari) or sales engagement (→ Salesloft/Outreach), or you need a quick-start tool without 3-6 month implementation

**API gotchas**:
- Transcript endpoint is **POST**, unlike most vendors — common first-integration bug
- 3 req/sec is aggressive — queue/batch every outbound call, target 2/sec for headroom
- Backfilling history burns daily quota fast — paginate nightly, not all at once
- No bulk export endpoint — must iterate through calls individually
- OAuth required for multi-tenant apps; Basic Auth for single-org only

---

## Otter.ai

For deep platform coverage (OtterPilot setup, transcription accuracy tuning, AI Chat, Zapier automation, CRM sync, pricing tiers, Enterprise API/webhooks, MCP Server, privacy considerations), use `/sales-otter`.

**Positioning**: Broad-market AI transcription and note-taking (not sales-first). Strongest for live transcription and real-time captioning. OtterPilot bot auto-joins Zoom/Meet/Teams. Solid free tier for general meetings. Sales CRM depth is limited vs dedicated tools. G2 4.4/5 (460+ reviews).

**Pricing (2026-04)**: Free (300 min/mo, 25 conversations, 20 AI Chat queries), Pro $16.99/mo ($8.33 annual, 1,200 min/mo, 90 min/meeting), Business $30/mo ($19.99 annual, unlimited min, 4hr/meeting, 3 concurrent), Enterprise custom (API/Webhooks, SSO/SCIM, HIPAA add-on, Sales Notetaker). Student/teacher 20% off Pro.

**API**:
- **Public API is Enterprise-only and in beta** — contact Otter account manager to enable
- Auth: API key (workspace-scoped), ~500 req/min
- Official docs not publicly indexed — provided after Enterprise API access granted
- Workspace Webhooks for Enterprise Admins: `https://help.otter.ai/hc/en-us/articles/35634832371735-Workspace-Webhooks`
- Export formats via UI/Zapier: TXT, DOCX, PDF, SRT (captions), MP3 (audio)
- Unofficial community APIs on GitHub (Python, Node.js) — not production-grade
- Recall.ai offers a third-party unified API for Otter integration as an alternative

**MCP Server**: Announced — connects AI models (Claude, ChatGPT) to Otter data. Details at help center.

**Integrations**: Deep — Zoom, Meet, Teams, Slack, Zoom Phone, Dialpad, RingCentral, JustCall, HubSpot, Salesforce, Dynamics, Zoho, Salesloft, Outreach, Monday.com, Google Drive, Dropbox, S3, OneDrive, SharePoint, Egnyte, Snowflake, Asana, ClickUp, Notion, Airtable, Jira, Google Docs, Zapier (8,000+ apps, Pro+), Chrome extension, desktop + mobile apps.

**Key modules**: OtterPilot (auto-join bot), live transcription, AI summaries, AI Chat (natural language meeting queries, capped per plan), action item extraction, Channels (team organization), Sales Notetaker (Enterprise — auto-push to CRM).

**Known issues (from G2/Capterra/review analysis)**:
- Transcription accuracy: 93-95% in ideal conditions, drops to 70% with noise/accents/crosstalk (55+ negative G2 mentions)
- Speaker diarization: degrades with 3+ speakers — "Unknown Speaker" segments common in larger meetings
- Action item detection: often generic or misses real next steps — manual review recommended
- Language support: only 4 languages as of 2026
- Minute caps: Free (300/mo) and Pro (1,200/mo) feel restrictive for active teams
- Class action lawsuit (2026) around recording consent practices

**Selection notes**:
- **Pick Otter when**: Use case is general meetings (not sales-specific), live transcription is critical, budget is tight, team already uses OtterPilot, or you need broad integration coverage via Zapier
- **Avoid Otter when**: You need a production API on anything below Enterprise, CRM depth matters for sales intelligence, you need methodology scorecards or coaching analytics (→ Gong/Avoma), or multi-language support is required

---

## Fellow

**Positioning**: AI meeting assistant + note-taker focused on meeting management for managers and teams. NYT Wirecutter top pick. Structured agendas, 500+ templates, 1:1 workflows, collaborative notes alongside AI transcription. SOC 2 Type II, HIPAA, GDPR compliant. Not primarily sales-focused.

**Pricing (2026-04)**: Free ($0, 5 AI notes + 5 AI recordings lifetime), Team ($7/user/mo annual, 10 AI notes/recordings per user/month), Business ($15/user/mo annual, unlimited AI, CRM sync), Enterprise ($25/user/mo annual, analytics, redaction, provisioning). Startup discounts up to 25% off first year.

**API**: REST API (Team+ plan). Docs at `developers.fellow.ai/reference`. Auth via API key (`Authorization` header), user-scoped (no workspace-wide key). Returns JSON — transcripts, speaker timestamps, agendas, action items, metadata. 90-day audit logs. Rate limits undocumented. No OAuth (API key only).

**Webhooks**: Zapier triggers for agendas, AI notes, transcripts (Team+). Some triggers require manual kickoff. n8n official node exists.

**Recording modes**: Both bot-based (visible in meeting, video playback) and bot-free (local recording via desktop app, no bot in participant list). Bot-free has no automated disclosure for external participants.

**Integrations**: 50+ native — Zoom, Google Meet, MS Teams, Slack huddles, Salesforce, HubSpot (Business+), Jira, Asana, Linear, Monday, Notion, Confluence, Glean, GitHub. 8,000+ via Zapier. n8n official node. Third-party MCP server (liba2k/fellow-mcp).

**Key gotchas**:
- Free plan is effectively a trial (lifetime caps, not monthly)
- AI action items hallucinate — creates false items from questions, misses actual commitments
- Bot-free recording has no automated participant disclosure (compliance risk)
- Transcript export is in a separate menu from AI notes export
- API keys are user-scoped only — no workspace-wide admin key
- Zapier triggers can require manual kickoff

**Selection notes**:
- **Pick Fellow when**: You want 1:1 templates, structured agendas, and manager workflows alongside AI notes. Good for CS, leadership, and cross-functional meetings. Strong security posture.
- **Avoid Fellow when**: Sales conversation intelligence is the primary need — no methodology scorecards, deal boards, or pipeline intelligence (pick Gong/Avoma/Fathom instead)
- **Platform skill**: `/sales-fellow` for Fellow-specific configuration, API, CRM sync, troubleshooting

---

## Grain

For deep platform coverage (API endpoints, MCP Server setup, pricing gates, Zapier automation, bot troubleshooting), use `/sales-grain`.

**Positioning**: AI meeting recorder focused on GTM teams. Strong on clip sharing — snip a 30-second moment, share to Slack or paste into docs. Good for revenue teams who want to syndicate customer quotes. Official MCP Server with built-in SPICED/MEDDICC and Voice of Customer prompts.

**Pricing (2026-04)**: Free (20 meetings), Starter $15-19/seat (unlimited recordings, Slack/Zapier/Productboard), Business $29-39/seat (CRM sync, coaching, API, trackers, deal board), Enterprise custom (SSO, full API, dedicated CS). MCP Server free on all plans.

**API**:
- REST API at `api.grain.com`, Bearer token auth (`GRAIN_API_TOKEN`)
- Docs: `developers.grain.com` (Notion-hosted)
- Key endpoints: workspace recordings list (paginated), transcript retrieval (`transcript_format=json`), tags, action items, video uploads (Business+)
- Business plan required (since Dec 2025); Enterprise for full access
- Rate limits: not formally published — official examples use 1 req/sec
- MCP Server: `https://api.grain.com/_/mcp` — works with Claude, ChatGPT, Cursor, Windsurf

**Webhooks**: Yes — recordings, highlights, transcripts. Zapier triggers (Starter+) rebuilt March 2026 with workspace-level connections and enhanced filtering.

**Integrations**: Zoom, Google Meet, Teams, Webex, Slack Huddles, Slack (Starter+), Productboard (Starter+), Zapier (Starter+), HubSpot (Business+), Salesforce (Business+), Aircall (Business+), MCP Server (all plans).

**Selection notes**:
- **Pick Grain when**: GTM/product teams want to share specific call moments internally, CRM sync is a nice-to-have rather than the primary value, or you want MCP-powered AI workflows with meeting data in Claude/Cursor
- **Avoid Grain when**: You need methodology scorecards (→ Avoma), enterprise-grade deal intelligence (→ Gong), or structured CRM field-level enrichment (Grain's CRM sync is activity-level only)

---

## Sembly

For deep platform coverage (pricing gates, automation setup, AI credit system, CRM connectors, troubleshooting), use `/sales-sembly`.

**Positioning**: "Agentic augmentation platform" for professional services — goes beyond passive note-taking with AI that auto-generates client deliverables (proposals, briefs, pitch decks, investment memos), auto-detects tasks with owners/deadlines, and supports multi-meeting AI chat via Semblian assistant. Targets consulting, legal, HR, VC, and client-facing teams. SOC 2 Type II, GDPR, HIPAA (MAX+). 48-language transcription.

**Pricing (2026-04)**: Basic $17/mo ($10 annual, 1 user), Pro $29/user/mo ($20 annual, up to 40 users), MAX $39/user/mo ($30 annual, 3-500 users, min 3), Enterprise custom. Annual saves 30%. No free tier — Basic free trial only (limited, no credit card).

**API**:
- **No traditional REST/GraphQL API.** Integration is webhook-first (outbound automations).
- Outbound Automations via HTTPS POST to configurable endpoint with configurable field names
- Data types: Transcription, Meeting Notes, Tasks — filtered by team, keywords, conversation type
- Docs: `helpdesk.sembly.ai` (article on custom adapter development — returns 403 via WebFetch)
- Zapier triggers: New Meeting Notes, New Tasks, New Transcription

**Webhooks**: Primary integration path. Configure in My Automations → Custom tab.

**Integrations**: 50+ native — 10 CRMs (Salesforce, HubSpot, Zoho, Pipedrive, Freshsales, Attio, Capsule, Close, TeamLeader, Copper), 13 PM tools (Monday, Asana, Jira, Trello, ClickUp, etc.), Slack, Teams, Confluence, Google Drive/Dropbox/OneDrive/SharePoint, Zapier, n8n (official). MCP access (Pro+).

**Known issues (from G2/Capterra reviews)**:
- Long meetings (>3hr) get fragmented into separate segments — no merge feature
- Calendar integration silently disconnects — bot misses meetings
- Speaker recognition degrades with 5+ participants
- AI credits consumed by Semblian chat (5 docs/insights on Pro, 40 on MAX)
- No DOCX/Word export for summaries/tasks
- No inbound API for programmatic queries

**Selection notes**:
- **Pick Sembly when**: Professional services team wants AI-generated client deliverables (proposals, briefs) from meetings, task automation with owners/deadlines, and webhook-first integration to existing tools. Strong if you need 48-language support, HIPAA compliance (MAX), or in-person recording.
- **Avoid Sembly when**: You need sales-specific features like methodology scorecards or deal intelligence (→ Gong/Avoma), a traditional REST/GraphQL API for custom integrations (→ Fireflies/Fathom), or unlimited AI chat without credit limits

---

## Read.ai

For deep platform coverage (API endpoints, MCP server setup, webhook configuration, engagement analytics, Search Copilot, pricing tiers, auto-join troubleshooting), use `/sales-read-ai`.

**Positioning**: Meeting AI with engagement/sentiment analytics + Search Copilot (unified search across meetings, emails, chats, CRMs) + Ada digital twin. Differentiator is analytics depth — attention heatmaps, speaker talk ratios, sentiment analysis, meeting quality scores — not just transcription. SOC 2 Type 2, GDPR, HIPAA (Enterprise+). 20+ languages.

**Pricing (2026-04)**: Free (5 meetings/mo, 1-hour max), Pro $19.75/mo ($15 annual — unlimited meetings, 4-hour max, premium integrations), Enterprise $29.75/mo ($22.50 annual — video playback + highlights), Enterprise+ $39.75/mo ($29.75 annual — HIPAA, SSO/SAML, 8-hour max, 10+ seat min). Education: $5/mo with .edu. Volume: 10% (100+), 15% (500+), 20% (1000+).

**API**:
- REST API (open beta): Base URL `https://api.read.ai/`, OAuth auth. Endpoints for listing sessions and retrieving transcripts. GA planned with static API keys, additional endpoints.
- MCP Server: `https://api.read.ai/mcp/`, Streamable HTTP, OAuth auth. Compatible with Claude Code, Cursor, VS Code, ChatGPT. Tools: list sessions, retrieve transcripts/summaries.

**Webhooks**:
- Setup: Read dashboard → Integrations → Webhooks (Pro+ required)
- Events: `meeting_end`, `manual`
- Payload: `session_id`, `trigger`, `chapter_summaries`, `transcript` (speaker + timestamp ms + text), action items, key questions
- Security: HMAC signature in `X-Read-Signature` header

**Integrations**: Zoom, Google Meet, Teams, Webex (recording). Salesforce, HubSpot (CRM sync, Pro+). Notion, Confluence (reports), Asana, Jira, Linear (action items). Slack, Teams (summaries). Google Docs, OneNote (live notes). Gmail, Outlook (email insights). Google Drive, OneDrive (Search Copilot). Zapier (8,000+ apps), webhooks. n8n.

**Selection notes**:
- **Pick Read.ai when**: Engagement and sentiment analytics matter (e.g., you want to see team engagement trends, attention patterns, and meeting quality over time), you want a unified search copilot across meetings + email + chat, or you need MCP integration for AI-powered meeting queries
- **Avoid Read.ai when**: Bot auto-joining meetings is unacceptable for your org or clients (universities have banned it), you need video playback without paying Enterprise pricing, you need a mature public API (still in beta with limited endpoints), or you need deep coaching scorecards (→ Avoma, Gong)

---

## MeetGeek

For deep platform coverage (recording modes, summary templates, conversation analytics, API endpoints, MCP Server, CRM connectors, pricing tiers, bot troubleshooting), use `/sales-meetgeek`.

**Positioning**: Team-focused AI meeting assistant with customizable summary templates by meeting type, conversation analytics (100+ KPIs), and both bot and no-bot recording. Affordable pricing ($9.99/user Pro) with 7 native CRM connectors. Voice agents on Business+. MCP Server for Claude/Cursor. 50K+ teams, 4.7★ (1,000+ reviews).

**Pricing (2026-04)**: Basic (free, 3 hrs/mo, 3-month transcript storage), Pro $9.99/mo ($119.88/yr annual, 20 hrs/mo, 1-year storage), Business $17/mo ($204/yr, unlimited transcription, HD video, team spaces), Enterprise custom (SSO/SCIM, on-premise storage). Extra hours $0.50/hr on Pro. 40% annual discount.

**API**:
- Docs: `https://docs.meetgeek.ai` (JS-rendered Mintlify)
- Type: REST
- Regional endpoints: `https://api.meetgeek.ai` (EU default), `https://api-eu.meetgeek.ai`, `https://api-us.meetgeek.ai`
- Auth: Bearer token (`Authorization: Bearer YOUR_API_KEY`). Keys are region-specific — generate separate keys per region.
- Key endpoints:
  - `GET /v1/meetings` — list meetings (paginated)
  - `GET /v1/meetings/{id}` — meeting details
  - `GET /v1/meetings/{id}/transcript` — transcript
  - `GET /v1/meetings/{id}/highlights` — highlights
  - `GET /v1/meetings/{id}/summary` — AI summary
  - `POST /v1/meetings/{id}/download` — temporary recording download URL
  - `POST /v1/upload` — upload recording
  - `GET /v1/teams`, `GET /v1/teams/{id}/meetings` — team data

**Webhooks**: Subscribe to meeting analysis completion events. Configure webhook URL at Integrations → Public API Card.

**MCP Server**: Official server at `github.com/meetgeekai/meetgeek-mcp-server` (23★). Cloud MCP (no local install) and Local MCP (self-hosted with API key). Works with Claude, ChatGPT, Cursor. Tools: list meetings, retrieve transcripts/summaries, search history. Free on all plans.

**Integrations**: Zoom/Meet/Teams/Webex/Discord (video), 7 CRMs (HubSpot, Salesforce, Pipedrive, Affinity, Attio, Zoho, Close), Asana/Jira/Monday/Notion/ClickUp/Trello (PM), Slack, Google Drive, Greenhouse (ATS), RingCentral/Aircall (dialers), Zapier/Make/n8n (Pro+). n8n official community node.

**Known issues (from G2/Capterra/review analysis)**:
- Transcription accuracy: 95%+ in English, degrades significantly in non-English despite 100+ language claim
- Bot reliability: can arrive 1-2 min late, misses initial context. Google Meet requires host admission.
- MS Teams: bot joins as unauthenticated guest — blocked if Guest Access is restricted in Teams admin
- Free plan caps: 3 hrs/mo is very limiting (competitors like Fathom offer unlimited free recordings)
- Video recording: Business+ only — Free/Pro are audio-only
- Dashboard complexity: analytics-heavy interface has a learning curve

**Selection notes**:
- **Pick MeetGeek when**: Team wants customizable summary templates per meeting type, 7 native CRM connectors at an affordable price point ($9.99/user), conversation analytics with 100+ KPIs, both bot and no-bot recording options, or MCP integration for AI workflows
- **Avoid MeetGeek when**: Free plan is important (Fathom's free tier is more generous), multilingual accuracy matters (test first), you need methodology scorecards (→ Avoma/Gong), or MS Teams admin restricts guest access (→ use no-bot recording)

---

## Jamie

For deep platform coverage (API endpoints, webhook setup, MCP server, CRM sync, pricing gates), use `/sales-jamie`.

**Positioning**: Privacy-first, bot-free AI meeting note-taker. Records via the user's device (desktop/mobile) rather than joining calls as a bot. EU-based with GDPR, ISO 27001. Audio deleted after transcription. Works for online and in-person meetings.

**Pricing (2026-04)**: Free €0 (10 meetings/mo, 30 min), Plus €21/mo annual (20 meetings, 2 hr), Pro €39/mo annual (unlimited, 3 hr), Team €33/seat/mo annual (2+ seats), Enterprise custom (10+ seats, SSO). CRM sync and API are Pro+.

**API**:
- Docs: `docs.meetjamie.ai` (JS-rendered — use llms-full.txt for structured info)
- Auth: `x-api-key: jk_...` header (personal keys for `/v1/me/`, workspace keys for `/v1/workspace/`)
- Key endpoints:
  - `GET /v1/me/meetings` or `/v1/workspace/meetings` — list, fetch, search, delete meetings
  - Meeting detail: summaries (Markdown/HTML), transcripts, participants, tasks, tags, calendar events
  - Tasks API: filter action items by completion, date, assignee, meeting
  - Tags API: list tags (personal keys only)
- Rate limits: 100 req/min per user or workspace

**Webhooks**:
- Event: `meeting.completed` — fires when meeting is fully processed
- Auth: API Key in custom header or HMAC-SHA256 via `x-jamie-signature`
- Requirements: Plus+ plan, HTTPS endpoint
- Delivery: 30s timeout, 5 retries with exponential backoff
- Limitations: URL and events immutable after creation — delete and recreate to change

**MCP**: Community-built `vicampuzano-jamie-mcp` (npm). Requires Pro+ and `JAMIE_API_KEY` env var. Connects to Claude, ChatGPT, Cursor.

**Integrations**: HubSpot, Salesforce, Attio (CRM, Pro+), Notion, Google Docs, OneNote (notes), Asana (tasks, Pro+), Make.com (webhooks), Google Calendar, Outlook.

**Limitations**:
- No video recording — audio only
- No Android app (Mac, Windows, iOS only)
- No native Zapier integration — webhooks go through Make.com or custom endpoints
- Free tier very limited (10 meetings, 30 min cap)
- No sales coaching or methodology scorecards
- Processing delays (5-10 min for summaries) and ~80% reliability reported by users — not ideal for high-stakes calls without a backup
- Speaker identification inconsistent in large meetings (7-8+ people) — participants can be left out entirely

**Selection notes**:
- **Pick Jamie when**: Privacy is paramount (EU residency, audio deleted, ISO 27001), bot-free recording is non-negotiable, you need in-person meeting recording, team is EU-based and GDPR is critical, or you want a simple MCP integration for AI workflows
- **Avoid Jamie when**: You need video recording (→ tl;dv, Fireflies, Grain), you want sales coaching/scorecards (→ Avoma, Gong), you need a generous free tier (→ Fathom), you need native Zapier (→ Fireflies, Otter, Fellow), or your team includes Android users

---

## Krisp

For deep platform coverage (noise cancellation setup, AI meeting notes, accent conversion, Voice AI SDK, webhook integration, Call Center AI, pricing gates, troubleshooting), use `/sales-krisp`.

**Positioning**: Noise-cancellation-first AI meeting assistant. Started as the leading noise/echo removal tool, expanded into AI transcription, summaries, accent conversion, and call center AI. Bot-free recording (desktop/mobile app captures audio locally). Unique angle: noise cancellation can reduce transcription errors by up to 39%. Also offers a Voice AI SDK for developers embedding noise cancellation into their own apps. SOC 2, GDPR, HIPAA (Enterprise), PCI-DSS.

**Pricing (2026-04)**: Free 7-day trial (all features), Core $16/mo ($8 annual), Advanced $30/mo ($15 annual), Enterprise custom. Call Center AI from $10/agent/mo (40 seat min). Voice AI SDK custom pricing.

**API**:
- **No traditional REST API for meetings.** Integration is webhook-first (Advanced+ plans).
- Webhooks: configure destination URL + trigger events (transcript created, notes generated, outline generated)
- Webhook payload: event type, meeting metadata (ID, title, start/end time, duration, link), generated content (transcript, notes, outline), event ID
- Auth: custom headers configured during setup (no documented HMAC signing)
- **Voice AI SDK**: JS (WASM), desktop, mobile, server SDKs at sdk-docs.krisp.ai. API key auth via sdk.krisp.ai. Models: VIVA (voice isolation), NC (noise cancellation), AC (accent conversion), BVC (background voice cancellation), turn-taking.
- **Platform API**: Team management via Postman workspace (Enterprise, details limited)
- **Speech-to-Text API**: Announced, likely part of SDK offering

**Webhooks**:
- Setup: Settings → Integrations → Webhook → Connect
- Events: transcript created, notes generated, outline generated
- Payload includes meeting metadata + generated content
- Custom request headers supported (e.g., Authorization)

**Rate limits**: Not publicly documented for webhook API. SDK usage tracked via sdk.krisp.ai dashboard.

**Integrations**: Zoom, Google Meet, Teams, Webex, Discord, WeChat, Slack Huddles (conferencing). HubSpot (Core+), Salesforce (Advanced+), Pipedrive, Affinity (CRM). Slack, Loom (productivity). Zapier (Core+). Google Calendar, Outlook. Chrome extension, mobile apps.

**Known issues (from G2/Capterra/review analysis)**:
- Free tier removed — used to have 60 min/day free, now 7-day trial only
- Transcription accuracy inconsistent — degrades with accents, non-English (only 16 languages vs competitors' 100+)
- Missing recordings — some meetings record but transcriptions vanish
- App crashes and high CPU usage — real-time neural net processing is resource-intensive
- Calendar doesn't distinguish meetings from tasks — records everything
- Customer support complaints — slow responses, some reports of rude emails
- Accent conversion limited to 4 English accents only
- 60% price increase reported by some users (2025-2026)
- Noise cancellation may not work with Bluetooth / 3.5mm headphones (USB required)

**Selection notes**:
- **Pick Krisp when**: Background noise is the primary pain point, you want noise cancellation + AI notes in one tool, bot-free recording matters, you need accent conversion for BPO/call center agents, or you're building with the Voice AI SDK
- **Avoid Krisp when**: You need a generous free tier (→ Fathom), deep coaching/methodology scorecards (→ Gong/Avoma), 100+ language transcription (→ Fireflies), a mature REST API for custom integrations (→ Fireflies/Fathom/MeetGeek), or your team is on a tight budget and noise isn't the main issue

---

## Colibri

For deep platform coverage (Sales Copilot setup, cue card configuration, conversation analytics, legal transcription, pricing gates, troubleshooting), use `/sales-colibri`.

**Positioning**: Real-time meeting transcription and conversation intelligence with a unique Sales Copilot — live AI guidance during calls with cue cards, objection handling tips, monologue alerts, and sentiment analysis. Also offers a Legal vertical for deposition transcription with professional transcriptionist review. Works via Chrome extension or native Zoom app. No public API or webhooks.

**Pricing (2026-04)**: Free (5 hrs/mo, 40-min max), Starter $20/mo ($16 annual, 20 hrs/mo, 90-min max), Pro $50/mo ($40 annual, unlimited, AI summaries, Slack), Growth $60/mo ($50 annual, Sales Copilot, analytics), Scale $80/mo ($70 annual, Salesforce, custom language model, phone calls, unlimited recording length). Annual saves 15-20%.

**API**:
- **No public API.** No REST, no GraphQL, no webhooks, no developer integration path.
- Transcript export is copy/paste only — no programmatic access.
- This is Colibri's biggest weakness vs competitors.

**Integrations**: Zoom (native app), Google Meet/Teams/Webex/RingCentral/BlueJeans/GoToMeeting/UberConference (Chrome extension), Slack (Pro+), Salesforce (Scale only, $70/mo). No HubSpot, no Zapier, no Make/n8n, no webhooks.

**Known issues (from G2/Capterra/review analysis)**:
- No API or webhooks — cannot build custom integrations or data pipelines
- Salesforce is Scale-only ($70/mo) — 4-5x the price of competitors with CRM sync on lower tiers
- No HubSpot integration at any tier — the most popular SMB CRM has no integration path
- AI summaries require Pro ($40/mo) — Free and Starter only get raw transcription
- Sales Copilot requires Growth ($50/mo) — not available on lower tiers
- Free plan caps at 5 hrs/mo and 40-minute recordings — very limited
- English-only transcription on Free plan

**Selection notes**:
- **Pick Colibri when**: Real-time live transcription is critical (text appears as people speak), you want Sales Copilot with live coaching cue cards during calls, conversation analytics for team coaching, legal deposition transcription, or you're already on Zoom and want a native app
- **Avoid Colibri when**: CRM integration matters (no HubSpot, Salesforce is $70/mo only), you need an API or webhooks for custom integrations (→ Fireflies/Fathom/MeetGeek), you want bot-free recording (Colibri uses Chrome extension or Zoom app), or budget is tight and you need more than raw transcription on lower plans

---

## Cluely

For deep platform coverage (Live Insights setup, Knowledge Base RAG, pre-call briefs, CRM integration via Merge.dev, coaching analytics, pricing gates, security considerations), use `/sales-cluely`.

**Positioning**: Real-time AI meeting assistant with a live coaching overlay — AI-generated answers, suggestions, and coaching during calls (not after). Unique features: pre-call briefs with participant research, Knowledge Base with 1M token RAG context window for company docs, and "undetectability" mode that hides the overlay from screen sharing. Desktop app only (Mac + Windows). Controversial security history (83K user data breach in 2025). 0 G2 reviews, ~2.1 stars on Trustpilot.

**Pricing (2026-04)**: Free (limited AI + notes, 3 file uploads), Pro $20/mo (unlimited AI + notes + files), Pro + Undetectability $75/mo (hidden from screen share), Team ~$99/seat/yr (shared playbooks, admin dashboards, SSO, CRM/ATS integration).

**API**:
- **No public API.** api.cluely.com exists but DNS doesn't resolve. No REST, no webhooks, no Zapier.
- CRM/ATS integration via Merge.dev only (Team/Enterprise plan).
- Docs at docs.cluely.com (llms.txt available).

**Integrations**: Zoom, Google Meet, Teams, Webex, Slack (conferencing). HubSpot, Salesforce, Pipedrive, Zoho (CRM via Merge.dev, Team+). Greenhouse, Lever, Workday, BambooHR (ATS via Merge.dev, Team+). Google Calendar only (no Outlook).

**Known issues (from Trustpilot/review articles)**:
- 2025 data breach — 83K users' data exposed via credentials in public GitHub repo
- Billing complaints — instant charges with no confirmation dialog on upgrade
- Transcription accuracy — speaker attribution errors, 5-10 second delay on suggestions
- AI suggestions often feel generic without Knowledge Base content loaded
- Google Calendar only — no Outlook/Office 365 support
- Overlay can freeze requiring full app restart

**Selection notes**:
- **Pick Cluely when**: You want real-time AI coaching during calls (not just post-call notes), you need a knowledge base with RAG retrieval for company battlecards during live conversations, pre-call meeting prep with participant research, or you're evaluating real-time copilots specifically
- **Avoid Cluely when**: Security is a top concern (data breach history), you need a public API or webhooks for custom integrations (→ Fireflies/Fathom/MeetGeek), you use Outlook for calendar (no support), you want post-call coaching analytics depth (→ Gong/Avoma), or the $75/mo undetectability premium is unjustified for your use case

---

## Jamy.ai

For deep platform coverage (API setup, translation configuration, calendar auto-join troubleshooting, HubSpot CRM sync, pricing tiers), use `/sales-jamy`.

**Positioning**: AI meeting assistant with real-time translation as the key differentiator. Records, transcribes, summarizes, and translates meetings in 100+ languages with cross-language search. Targets multilingual global teams. SOC 2 Type II certified. Only 29 AppSumo reviews (3.3/5) — limited social proof.

**Pricing (2026-04)**: Starter free (300 min/mo transcription, 60 min/mo translation, 60-day storage, 60-min max), Pro $14.99/mo (unlimited transcription, 300 min/mo translation, unlimited storage), Global Business $29.99/mo (unlimited everything, 4-hr max translated meetings). Per user/month.

**API**:
- Docs: `https://docs.jamy.ai/` (JS-rendered — can't scrape)
- Auth: API key from `https://app.jamy.ai/settings/apikeys` (OWNER role required)
- Known endpoints: Create Report (generate report from uploaded recording), Answer Question (query reports)
- Webhooks supported for Zapier/Make automation
- Rate limits: not publicly documented

**Integrations**: Zoom/Meet/Teams (native). HubSpot (CRM — only native CRM today). Salesforce, Pipedrive, Close.com listed as "Coming Soon." Slack, Notion, Trello, Monday.com, Gmail, Outlook. API + webhooks for Zapier/Make.

**Known issues (from AppSumo reviews)**:
- Calendar integration breaks silently — bot stops joining meetings (most reported issue)
- AppSumo-onboarded users report worse auto-join reliability vs direct signups
- Chrome extension unreliable
- "Premium feature" upgrade prompts appear unexpectedly while exploring

**Selection notes**:
- **Pick Jamy when**: Real-time translation is essential for multilingual teams, you need cross-language search across meeting history, budget is moderate ($15-30/mo), and HubSpot is your CRM
- **Avoid Jamy when**: CRM depth matters beyond HubSpot (Salesforce/Pipedrive not yet available), you need a mature API with documented endpoints (→ Fireflies/Fathom), social proof and reliability matter (limited reviews, known bot issues), or you don't need translation (Fathom's free tier is more generous)

---

## Wave

For deep platform coverage (REST API, webhook HMAC verification, recording methods, MCP server, Voice ID, semantic search), use `/sales-wave`.

**Positioning**: Mobile-first AI note-taker built for in-person meetings, phone calls, and cross-device recording. Four capture methods: mobile mic, desktop system audio (no bot), meeting bot (Zoom/Meet/Teams), and Chrome extension. Semantic search (Wave Assistant) across entire recording history is the standout feature. No native CRM sync — relies on API, Zapier, or manual export.

**Pricing (2026-04)**: Free (30 min/mo), Pro $11.67/mo annual (unlimited), Teams $7.50/user/mo (min 5, shared workspace + admin).

**API**:
- Docs: `https://api.wave.co/` (OpenAPI spec at `/v1/openapi.json`)
- Base URL: `https://api.wave.co/v1/`
- Auth: Bearer token (`wave_api_...`) created at `app.wave.co/settings/integrations/api`. Expires after 1 year.
- Scopes: `sessions:read/write/delete/search`, `transcripts:read`, `media:read`, `account:read`, `webhooks:manage`
- Key endpoints:
  - `GET /v1/sessions` — list with cursor pagination, filter by type/date
  - `GET /v1/sessions/{id}` — metadata, summary, notes
  - `GET /v1/sessions/{id}/transcript` — full transcript with speaker segments
  - `GET /v1/sessions/{id}/media` — signed audio/video URLs (1-hour expiry)
  - `POST /v1/sessions/search` — semantic vector similarity search
  - `POST /v1/sessions/bulk` — export up to 50 sessions at once
  - `GET /v1/account` — profile, subscription, session count
- MCP server: `mcp.wave.co` (Claude Desktop, Claude Code, ChatGPT)

**Webhooks**:
- Create via `POST /v1/webhooks` (max 5 per user, secret returned once)
- Events: `session.completed`, `session.updated`, `session.deleted`
- Signature: HMAC-SHA256 with three headers (`X-Wave-Webhook-Id`, `X-Wave-Webhook-Timestamp`, `X-Wave-Webhook-Signature`). Formula: `HMAC-SHA256(secret, "{webhookId}.{timestamp}.{body}")`

**Rate limits**: 60 req/min, 1,000/day per token. Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.

**Integrations**: Zoom/Meet/Teams (bot). Notion, Google Docs, OneNote, Evernote (export). PDF/DOCX export. Zapier. MCP server (Claude/ChatGPT). No native CRM connectors — use API or Zapier for CRM sync.

**Known issues (from App Store/Product Hunt reviews)**:
- Incoming phone calls kill active recordings on mobile — no resume/append
- App gets stuck on "saving recording" or transcription step
- Incomplete recordings (records only first few minutes of long calls)
- Background noise misinterpreted as speech (fan → "thank you thank you thank you")
- Export formatting degrades when copy-pasting to OneNote
- Account setup passkey loop for some email providers

**Selection notes**:
- **Pick Wave when**: In-person meetings and phone calls are your primary use case (not just virtual meetings), you need cross-device sync (phone + desktop + watch), semantic search across recording history is valuable, and you don't need native CRM integration
- **Avoid Wave when**: Native CRM sync is required (→ Fathom Business, Fireflies Business, Avoma), you need deep sales coaching features (→ Gong, Avoma), your team is >10 people and needs admin controls beyond shared workspace, or you need a generous free tier (30 min/mo is very limited → Fathom free is unlimited)

---

## Bolt-on conversation intelligence (inside other platforms)

These aren't standalone note-takers — they're modules within existing sales tools. Only relevant if you already use the parent platform.

- **Salesloft Conversations** — inside Salesloft; covered by `/sales-salesloft`
- **ZoomInfo Chorus** — inside ZoomInfo; covered by `/sales-zoominfo`
- **Seismic Meeting Intelligence** — inside Seismic; covered by `/sales-seismic`
