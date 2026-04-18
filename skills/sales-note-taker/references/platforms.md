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
| tl;dv | AI note-taker + sales coaching | Yes (limited) | $18-29/mo | REST (v1alpha1) | Yes (2 triggers) | Deep (Business+) | Free unlimited recordings, sales coaching with playbooks, aggregated insights |
| Claap | AI sales call assistant | Yes (limited) | $24/user/mo | REST + OAuth | Yes (HMAC) | Deep (Business+) | Sales teams wanting CRM auto-enrichment, deal scoring, lemlist ecosystem |
| Tactiq | Chrome extension note-taker | Yes (10 transcripts/mo) | $8/mo | None (Zapier only) | None | Medium (native HubSpot/Salesforce/Pipedrive) | Zero-setup bot-free transcription, Google Meet-first teams |
| Granola | Bot-free AI notepad | Yes (limited history) | $14/user/mo | REST (Business+) | None | Medium (HubSpot/Attio/Affinity, Business+) | Bot-free, AI-enhanced notes, VCs/product teams, privacy-sensitive contexts |
| Hedy | Real-time AI meeting coach | Yes (5 hrs/mo) | $12.99/mo | REST (Pro) | Yes (HMAC) | None (via Zapier/n8n) | Real-time coaching during calls, cross-session intelligence, Apple Watch |
| Bluedot | Bot-free AI note-taker | No (5 lifetime) | $14/mo | None (webhooks only) | Yes (Svix) | Medium (HubSpot/Salesforce, Business+) | Bot-free video recording, Chrome-first teams, screen recording |
| Notta | AI meeting transcription (58 languages) | Yes (120 min/mo) | $13.99/mo | None (Zapier only) | None (Zapier only) | Medium (5 CRMs, Business+) | Multilingual global teams, 58-language transcription |
| Lindy | AI agent builder (notes are one module) | Yes (free trial) | $49.99/mo | None | Inbound only | Indirect (via workflow) | All-in-one AI assistant (email + meetings + calendar + workflows) |
| Rilla | Field sales AI coaching | No | ~$199-349/rep/mo | None (via Merge) | Yes (Merge) | Medium (5 CRMs via Merge) | In-person field sales coaching, virtual ridealongs, home services |
| Siro | Field sales AI coaching | No | ~$200-350/rep/mo | REST + OAuth | Yes (Svix) | Medium (6 CRMs via Merge) | In-person field sales coaching, Halftime real-time coaching, multi-industry (auto, home services, telecom, political) |
| Sales Ask | Field sales AI coaching | No | ~$42-208/user/mo | None (partner-only) | None | Medium (ServiceTitan/Jobber/Housecall Pro/Salesforce/Lasso) | Home services field + call center coaching, active AI feedback, native trade CRM integrations |
| Sonnet | Bot-free AI note-taker + CRM | Yes (5 rec/mo) | $25/mo | None | None | Medium (HubSpot/Salesforce auto-update) | Bot-free CRM auto-update, domain templates (sales/legal/medical/recruiting) |
| Supernormal | AI agent for agencies | Yes (15 credits/mo) | $10-18/mo | None (Zapier only) | None | Medium (HubSpot/Salesforce/Pipedrive) | Agencies wanting AI-generated deliverables (decks, briefs, emails) from meetings |

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

## tl;dv

For deep platform coverage (API endpoints, webhook triggers, CRM setup, coaching playbooks, MCP server), use `/sales-tldv`.

**Positioning**: Free-tier leader for unlimited recordings (but only 10 lifetime AI summaries on free). Sales coaching and aggregated insights on Business plan. 2M+ users. Strong Zoom/Meet/Teams support.

**Pricing (2026-04)**: Free (unlimited recordings, 10 lifetime AI summaries, deleted after 3 months, 40/week cap), Pro $29/mo ($18 annual), Business $98/mo ($59 annual), Enterprise custom. 40% annual discount.

**API**:
- Docs: `https://doc.tldv.io/index.html`
- Base URL: `https://pasta.tldv.io`
- Version: v1alpha1 (alpha — expect breaking changes)
- Auth: API key via `x-api-key` header (Pro+ only)
- Key endpoints:
  - `POST /v1alpha1/meetings/import` — import external recording
  - `GET /v1alpha1/meetings` — list meetings with pagination (`page`, `pages`, `total`, `pageSize`, `results[]`)
  - `GET /v1alpha1/meetings/{meetingId}` — meeting detail with organizer, invitees, duration
  - `GET /v1alpha1/meetings/{meetingId}/download` — 302 redirect to signed URL (6-hour TTL)
  - `GET /v1alpha1/meetings/{meetingId}/transcript` — full transcript with speaker, text, timestamps
  - `GET /v1alpha1/meetings/{meetingId}/notes` — structured notes, markdown content, topics
  - `GET /v1alpha1/health` — health check

**Webhooks**:
- Triggers: `MeetingReady` (meeting finishes processing), `TranscriptReady` (transcript generated)
- Scope levels: User, Team, Organization
- No HMAC signing documented (alpha API)

**Rate limits**: Not publicly documented (alpha API). Design conservatively.

**Integrations**: Zoom/Meet/Teams (bot). HubSpot, Salesforce, Pipedrive (Business+ native; Pro via Zapier). Slack, Notion, Google Docs. Zapier (5,000+ apps). Make (community module). MCP server (`github.com/tldv-public/tldv-mcp-server`).

**Known issues (from G2/reviews)**:
- Bot joins uninvited calls — check auto-join settings in dashboard
- Video library lacks sorting by date/name — search is unreliable
- Free plan "unlimited" is misleading — 10 lifetime AI summaries, 3-month deletion, 40/week cap
- Transcription accuracy drops with multiple speakers, accents, or cross-talk (~85-90%)
- No custom vocabulary for specialized industries — manual correction required
- HubSpot/Slack integrations reported as broken or limited by some users
- 3-hour recording limit on all plans
- Customer support hard to reach

**Selection notes**:
- **Pick tl;dv when**: You want unlimited free recordings for the team and can live with limited AI summaries on free, you need sales coaching with playbook monitoring (MEDDIC/BANT/SPIN) on Business, you want aggregated insights across multiple meetings, or you need a generous free tier for casual users alongside paid seats for power users
- **Avoid tl;dv when**: You need truly unlimited free AI summaries (→ Fathom free tier), you need deep deal intelligence (→ Gong), you need a stable production API (tl;dv is v1alpha1 → Fathom/Fireflies/Gong have mature APIs), you need bot-free recording (→ Jamie, Krisp, Granola), or you need native CRM on a budget (Business at $59-98/mo is steep → Fathom Business at $25/mo)

---

## Claap

For deep platform coverage (API endpoints, webhook verification, CRM enrichment setup, pricing gates, MCP connector), use `/sales-claap`.

**Category**: AI sales call & pipeline assistant
**API**: REST at `api.claap.io` (OpenAPI 3.1.0). Auth via `X-Claap-Key` header (`cla_xxxxx`). Endpoints: list/get/create/delete recordings, transcripts, workspace info, webhooks, OAuth 2.0. API requires paid plan — free returns 401.
**Webhooks**: `recording_added` event fires when recording is transcribed + analyzed. Headers: `X-Claap-Webhook-Id`, `X-Claap-Webhook-Secret`. Must respond 200 within 5s. Retries: immediately → 1 min → 5 min → abandoned.
**CRM**: HubSpot, Salesforce, Attio, Pipedrive (Business+ for auto-enrichment).
**Recording**: Bot-free (Chrome extension) + bot recorder. Zoom, Meet, Teams, phone, in-person. 99+ languages.
**AI features**: AI Agent (summaries, follow-ups), AI Analyst (deal scoring — SPICED/MEDDIC/BANT, win/loss, objections), AI Coach (scorecards, skill gaps). All Business+ only.

**Pricing** (annual):
| Plan | Price | Minutes | CRM enrichment | API | Coaching |
|---|---|---|---|---|---|
| Basic (Free) | $0 | 300 total | No | No (401) | No |
| Pro | $24/user/mo | 1,000/mo | No | Yes | No |
| Business | $48/user/mo | Unlimited | Yes | Yes | Yes |
| Enterprise | Custom | Unlimited | Yes | Yes | Yes + SSO/SCIM |

**Known issues (from G2/reviews)**:
- Chrome extension crashes mid-recording — check dashboard, recording may have uploaded
- AI summaries focus on one speaker, ignoring others in multi-person calls
- Video processing very slow for long calls (15+ min for 1h+ calls)
- Free plan too limited to evaluate (10 videos, 300 min, no AI features)
- Bot-free recording raises privacy/GDPR concerns — participants may not know they're being recorded
- No Notion auto-push (manual copy-paste), no automatic language detection
- Support described as slow

**Selection notes**:
- **Pick Claap when**: You want CRM auto-enrichment without Gong pricing, you're already in the lemlist ecosystem, you want bot-free recording with deal scoring, or you need SPICED/MEDDIC/BANT methodology scoring on a mid-market budget
- **Avoid Claap when**: You need a generous free tier (→ Fathom, tl;dv), you need reliable screen recording (Chrome extension is buggy), you need a mature production API (→ Gong, Fireflies, Fathom), you need bot-free with better privacy controls (→ Jamie, Granola), or budget is tight (→ Fathom $16-25/mo, Fireflies $10-19/mo)

---

## Tactiq

For deep platform coverage (Chrome extension setup, AI credit management, Zapier workflows, native CRM integrations, transcription accuracy troubleshooting, plan comparison), use `/sales-tactiq`.

**Positioning**: Zero-setup, bot-free Chrome extension for live meeting transcription. No bot joins the call — the extension captures audio directly from the browser. Simplest onboarding in the category (install extension → join meeting → transcript appears), but weakest on accuracy and API/developer features.

**Pricing (2026-04)**: Free (10 transcripts/mo, 5 AI credits), Pro $8/mo annual ($12 monthly, unlimited transcripts, 10 AI credits), Team $16.67/mo annual ($20 monthly, unlimited AI), Business $29.16/mo annual ($40 monthly, SSO, AI agents), Enterprise custom.

**API**: **None documented.** No public REST or GraphQL API. All automation routes through native integrations (HubSpot, Salesforce, Pipedrive, Slack, Notion, Linear, Confluence) or Zapier ("Transcription completed" trigger). No webhooks. No MCP server (Zapier MCP wrapper only). This is the biggest gap vs every other platform in this comparison.

**Integrations**: Google Meet/Zoom/Teams (browser-based), HubSpot, Salesforce, Pipedrive (native CRM), Slack, Notion, Linear, Confluence, Google Drive, OneDrive, Quip, Google Calendar. Zapier for broader automation (7,000+ apps).

**Known issues (from G2/Capterra/TrustPilot reviews)**:
- Transcription accuracy is polarizing — ranges from "good enough" to "barely 1% accurate" depending on accent, microphone quality, and language
- No auto-language detection — must manually set language before each meeting; mid-call language switches produce gibberish
- No video/audio recording — text-only, can't verify transcript against original
- Chrome extension requires broad permissions ("read and change all data on all websites")
- AI credits on Free (5/mo) and Pro (10/mo) run out quickly — Team is the real entry point for AI features
- TrustPilot rating: 2.6/5 (limited reviews)

**Selection notes**:
- **Pick Tactiq when**: You want the absolute simplest setup (install Chrome extension and go), your team primarily uses Google Meet, you don't need video playback or API access, IT prohibits bots joining calls but allows browser extensions, and you're OK with Zapier-level automation
- **Avoid Tactiq when**: Transcription accuracy is critical (→ Otter, Fireflies), you need a production API (→ Fathom, Fireflies, Gong), you need video recording/playback (→ Fathom, Fireflies, tl;dv), your team uses Zoom desktop app (extension may not capture audio), or you need a generous free tier (→ Fathom unlimited free, tl;dv unlimited recordings)

---

## Granola

For deep platform coverage (API endpoints, CRM setup, privacy settings, troubleshooting, Zapier workflows), use `/sales-granola`.

**Category**: Bot-free AI notepad
**API**: REST at `https://public-api.granola.ai/v1`. Auth via Bearer token (`grn_` prefix, created in desktop app). Endpoints: `GET /notes` (list, paginate with cursor, filter by `created_after`), `GET /notes/{id}` (include `transcript`). Read-only — no write endpoints. Rate limits: 25 burst / 5 req/sec sustained. Only returns notes with completed AI summary.
**Webhooks**: None documented. Poll-based integration only. Use Zapier for event-driven automation.
**CRM**: HubSpot (Business+, manual one-click push per note), Attio (Business+), Affinity (Business+). No native Salesforce — use Zapier bridge.
**Recording**: Bot-free (local audio capture). Mac, Windows, iOS. No Android, no web. Zoom, Google Meet, Teams, Webex, Slack huddles. iOS for phone calls and in-person.
**AI features**: Note enhancement (combines your notes + transcript), AI chat (within and across meetings), customizable templates, action item extraction, follow-up email drafting.

**Pricing** (monthly):
| Plan | Price | History | Integrations | API | SSO |
|---|---|---|---|---|---|
| Basic (Free) | $0 | Limited | None | No | No |
| Business | $14/user/mo | Unlimited | HubSpot, Attio, Affinity, Slack, Notion, Zapier, MCP | Personal API | No |
| Enterprise | $35/user/mo | Unlimited | All Business + admin controls | Enterprise API | Yes (50+ users) |

**Known issues (from reviews/articles)**:
- Notes are shareable by default — every note gets a public link unless sharing is restricted
- AI model training opt-in by default on Free/Business — must manually disable in Settings → Privacy
- No speaker identification in transcripts (macOS: mic vs speaker only; iOS: Speaker A/B labels)
- No audio playback — audio is discarded after transcription, can't verify accuracy
- Silent recording failures — blank notes with no error when OS audio pipeline breaks
- No Android app, no web version — Mac + Windows + iOS only
- HubSpot sync is manual per note (one-click, not automatic)
- Transcript accuracy drops with accents, non-English, and mid-call language switches
- Custom vocabulary doesn't work with multi-language transcripts

**Selection notes**:
- **Pick Granola when**: You need bot-free recording for sensitive contexts (VCs, board meetings, client calls where bots create friction), you prefer an AI-enhanced notepad over raw transcription, your team is on Mac/Windows + iOS, or you want a simple HubSpot integration without Gong pricing
- **Avoid Granola when**: You need speaker identification or diarization (→ Fireflies, Gong, Avoma), you need audio/video playback (→ Fathom, Fireflies, tl;dv), you need Salesforce native integration (→ Fathom, Fireflies, Gong), you need a mature production API with webhooks (→ Fathom, Fireflies, Gong), you need Android support (→ Fellow, Otter), or you need coaching/methodology features (→ Avoma, tl;dv, Gong)

---

## Hedy

For deep platform coverage (API endpoints, webhook setup, MCP server, coaching configuration, troubleshooting), use `/sales-hedy`.

**Category**: Real-time AI meeting coach
**API**: REST at `https://api.hedy.bot/v1`. Auth via Bearer token (API key from Settings → API Access). Endpoints: sessions, highlights, topics (CRUD), todos, session contexts (CRUD), webhooks (CRUD), `/me` (user info). Rate limit: 200 req/min. Pro-only.
**Webhooks**: 5 events — `session.created`, `session.ended`, `session.exported`, `highlight.created`, `todo.exported`. Signed with HMAC-SHA256 via `X-Hedy-Signature`. Max 10 per account. Retry: 5xx up to 2 retries, 429 once, 4xx not retried. Pro-only + cloud sync required.
**MCP**: `https://api.hedy.bot/mcp`, OAuth 2.1 with PKCE, 18 tools across 5 categories (sessions, highlights, tasks, topics, contexts). Claude/ChatGPT/Cursor compatible. Pro-only.
**CRM**: No native connectors. CRM integration via Zapier, n8n (`n8n-nodes-hedy` verified node), ActivePieces, viaSocket, Pabbly Connect, or custom API.
**Recording**: Bot-free (on-device audio processing). Mac, Windows, iOS, Android, Web (view-only), Apple Watch (companion display). No meeting bot joins calls. Phone call recording works on speaker only (headphone limitation).
**AI features**: Real-time coaching suggestions, cross-session intelligence, smart summaries, action items, highlights with AI insights, prep notes, session contexts (custom coaching instructions), YouTube import & analysis.

**Pricing** (monthly):
| Plan | Price | Hours | Coaching | API/Webhooks/MCP | Cloud Sync |
|---|---|---|---|---|---|
| Free | $0 | 5 hrs/mo | 30 min/session | No | Basic |
| Pro | $12.99/mo ($99.99/yr) | Unlimited | Unlimited | Yes | Full |
| Lifetime | $299 one-time | Unlimited | Unlimited | Yes | Full |

**Known issues (from AppSumo reviews/questions)**:
- iOS mic cutouts mid-meeting — background audio restrictions can interrupt recording, resulting in partial transcripts
- Intel Mac freezing on launch — known Hedy 3.x issue, fix available in v3.0.7+
- Phone call recording can't capture both sides through headphones (OS restriction)
- Non-English transcript inaccuracy (Italian, Swiss German, Thai reported)
- Web app is view-only — cannot record, only review transcripts and query AI
- Cloud sync failures between devices — verify same account, sync enabled, connectivity
- macOS Jabra speaker/mic compatibility unverified (users report headsets work)

**Selection notes**:
- **Pick Hedy when**: You want AI coaching DURING meetings (not just notes after), you need cross-session intelligence that learns from past conversations, you want Apple Watch coaching for in-person meetings, privacy-first on-device processing matters, or you want a single tool that works across all meeting platforms and in-person conversations
- **Avoid Hedy when**: You need native CRM connectors without automation middleware (→ Fathom, Fireflies, Gong), you need deep sales methodology scoring (MEDDIC/BANT/SPIN) (→ Avoma, tl;dv, Gong), you need team analytics and call scoring (→ Gong, Avoma), you need a mature production API with full endpoint documentation (→ Fathom, Fireflies, Gong), or you need video recording/playback (→ Fathom, Fireflies, tl;dv)

---

## Omi

For deep platform coverage (hardware specs, API endpoints, app framework, webhook setup, troubleshooting), use `/sales-omi`.

**Category**: Open-source AI wearable + meeting notes
**API**: REST at `https://api.omi.me/v1/dev`. Auth via Bearer token (`omi_dev_` prefix, from Settings → Developer → Create Key). Endpoints: memories (CRUD + batch up to 25), action items (CRUD + batch up to 50), conversations (CRUD + from-segments), API keys (CRUD). Rate limit: 100 req/min, 10K/day.
**Webhooks**: Via App Framework — memory triggers (conversation saved), real-time transcript (live audio processing), chat tools (user-invoked custom functions), audio streaming (raw audio bytes). No HMAC signing documented. Built through the mobile app, not API.
**MCP**: None documented.
**CRM**: No native connectors. CRM sync requires custom webhook integration app, Zapier marketplace app, or direct API integration.
**Recording**: Hardware wearable necklace (BLE 5.3 + Wi-Fi 6). Records in-person + online (via desktop app). No bot joins calls. All-day capture. Dev Kit 2: ~14hr battery, improved MEMS microphone.
**AI features**: Memories (AI-generated insights), action items (auto-detected tasks), conversation transcription with speaker diarization (accuracy varies), AI chat (query conversation history).

**Pricing**:
| Plan | Price | Cloud Minutes | Notes |
|---|---|---|---|
| Basic (free) | $0 (device $89) | 1,200/mo | All features unlocked, recordings continue locally after cap |
| Unlimited | $19/mo ($199/yr) | Unlimited | Only difference: cloud listening cap removed |

**Known issues (from user reviews and GitHub)**:
- Bluetooth disconnect spam — "Your Omi Disconnected" is the #1 complaint, improved in Dev Kit 2
- Battery indicator unreliable — readings swing between random percentages
- Background audio not filtered — records TV, music, other conversations alongside wearer
- Transcription accuracy — speaker diarization misidentifies speakers, especially in 1:1 meetings
- No native task app integrations (Google Tasks, Todoist) — to-do list has a sync bug that reverts completed tasks
- AI chat described as "just about useless" by multiple reviewers

**Selection notes**:
- **Pick Omi when**: You need the lowest-price wearable recorder ($89), you want a fully open-source stack (hardware + software + firmware), you're a developer who wants to build custom apps/integrations, you need all-day in-person recording plus desktop online meeting capture, or privacy is paramount and you want to audit the full codebase
- **Avoid Omi when**: You need polished, reliable enterprise-grade transcription (→ Plaud, Gong, Fireflies), you need native CRM connectors (→ Fathom, Fireflies, Gong, Avoma), you need compliance certs like SOC 2 or HIPAA (→ Gong, Avoma, Fireflies Enterprise), you need accurate speaker diarization (→ Fathom, Fireflies, Gong), or you need a mature production API with webhooks and HMAC signing (→ Fathom, Fireflies, Gong)

---

## Bluedot

**Category**: Bot-free AI note-taker with video recording
**API**: No public REST API. Integration is webhook-only via Svix infrastructure.
**Webhooks**: Fires once after summary + transcript are generated. User-level by default; workspace-level on request (contact support). Svix-powered — endpoint receives POST with meeting content. Custom JavaScript transforms available to reshape payload before delivery. Failed deliveries can be manually replayed from dashboard. Calendar integration populates attendee email addresses in webhook payloads.
- User-level webhook: only receives events for the user who configured it
- Workspace-level webhook: receives events for all users (priority rule: if a user has their own webhook, the workspace-wide one is ignored for that user)
**MCP**: None documented.
**CRM**: Salesforce + HubSpot native sync (Business plan only, $32/mo). Also: Pipedrive, Copper, Zoho. Auto-populates deal records with meeting links and AI-powered notes.
**Recording**: Bot-free via Chrome extension, desktop apps (Mac/Windows), mobile apps (iOS/Android). Records video + audio (unique among bot-free tools). Screen recording with webcam overlay. No bot joins calls. No calendar access required. In-person recording via mobile app.
**AI features**: Custom meeting templates with AI prompts, AI chat across up to 10 meetings simultaneously, Meeting Insights (talk ratio, monologues, question count), automated follow-up email generation in your tone, file import (MP4/MP3/M4A), 100+ language transcription, speaker identification, filler word removal.

**Pricing**:
| Plan | Monthly | Annual | Key features |
|---|---|---|---|
| Free | $0 | - | 5 meetings lifetime, 1hr max, Zapier/Make/Slack/Notion |
| Basic | $14/mo | $18/mo | Unlimited audio-only, 1hr max, public webhooks |
| Pro | $20/mo | $25/mo | + Video recording, unlimited duration, custom templates, imports |
| Business | $32/mo | $39/mo | + HubSpot/Salesforce, unlimited imports, unlimited free members |
| Unlimited | Custom | - | + SSO, SCIM, all features |

> *Best-effort from research — verify on vendor site before quoting.*

**Known issues (from reviews and comparison articles)**:
- Desktop app drops/crashes after ~1 hour of continuous recording
- Mobile app sometimes captures only first 30 seconds of a conversation
- Chrome extension breaks in managed IT environments where extensions are restricted
- No custom vocabulary — accuracy drops with technical jargon, acronyms, industry terms
- No offline processing — requires cloud for all transcription and note generation
- SOC 2 certification still pending (GDPR + CCPA compliant, 256-bit AES encryption)
- Free plan is effectively a trial (5 lifetime meetings), not a sustainable free tier
- Transcription accuracy degrades with multiple simultaneous speakers and strong accents
- No Firefox or Safari support — Chrome/desktop app only

**Selection notes**:
- **Pick Bluedot when**: You need bot-free recording with video (unique combo), you want screen recording with webcam overlay, your team is Chrome-first, you need in-person + virtual meeting recording, you want Meeting Insights analytics (talk ratio, monologues), you need automated follow-up emails, or you want CRM auto-sync to HubSpot/Salesforce on Business plan
- **Avoid Bluedot when**: You need a public REST API for custom integrations (→ Fathom, Fireflies, Gong), you need SOC 2 compliance (→ Gong, Avoma, Fireflies), you need a generous free tier (→ Fathom unlimited free, tl;dv unlimited free), you're on Firefox/Safari (→ Jamie, Granola, Omi), you need custom vocabulary for technical terms (→ Fireflies, Gong), or you need production-grade webhook signing/HMAC verification (→ Fathom, Fireflies, Wave)

---

## Notta

For deep platform coverage (modules, pricing, Zapier automation, CRM sync, Notta Brain), use `/sales-notta`.

**Positioning**: AI meeting transcription platform with best-in-class language support (58 languages, up to 98% claimed accuracy). Key differentiator is multilingual capability — ideal for global/EMEA teams. Notta Brain adds cross-meeting AI agent for querying across all meeting data. No public API — Zapier is the only automation path.

**Pricing (2026-04)**: Free (120 min/mo, 3-min live limit), Pro $13.99/mo ($8.25 annual), Business $44-203/mo (up to 20 seats, CRM sync, video recording), Enterprise custom (SSO, audit logs, AI training opt-out). Annual plans ~30% cheaper, do not auto-renew.

**API**: None. No public REST API, no GraphQL, no developer portal. All programmatic access goes through Zapier.

**Zapier integration**:
- Triggers: New AI Notes generated, New recording shared publicly, New recording transcribed
- Actions: Upload audio/video for transcription, Generate AI summary from transcription
- No Make/n8n/native webhook support

**CRM sync (Business+ only)**:
- Salesforce — sync to Log a Call or Tasks, associate with Deal or Contact
- HubSpot — sync call summaries to Contacts & Deals
- Zoho CRM, Freshsales, Salesflare

**Integrations**: Zoom, Google Meet, Teams, Webex (bot auto-join), Google Calendar, Outlook, Slack, Google Drive/Docs, OneDrive, Notion.

**Compliance**: SOC 2 Type II, ISO 27001, GDPR, CCPA, APPI. AES-256 at rest, TLS 1.2/1.3 in transit. **Warning**: Free/Pro/Business data used for AI training — Enterprise opt-out only.

**Known issues (from reviews)**:
- Free trial auto-charges credit card — cancellation process not obvious, many reports of unexpected charges
- Transcription sometimes lacks punctuation, has random capitalizations
- Chrome extension unreliable — stops working after one session, requires reinstall
- Language must be pre-selected — no auto-detection, mid-call language switches produce gibberish
- Customer support widely reported as unresponsive
- Trustpilot rating: 2.3 stars (billing complaints dominate)

**Selection notes**:
- **Pick Notta when**: Your team operates across multiple languages (58 supported), you need Zoom/Meet/Teams/Webex auto-join with multilingual transcription, you want cross-meeting AI intelligence (Notta Brain), you don't need a public API and Zapier automation is sufficient, or you need affordable per-seat pricing for global teams
- **Avoid Notta when**: You need a public API for custom integrations (→ Fathom, Fireflies, Gong), you need deep coaching/methodology features (→ Gong, Avoma, tl;dv), you need bot-free recording (→ Jamie, Granola, Bluedot, Tactiq), you handle sensitive data and can't accept AI training on your conversations (→ Enterprise only, or pick Jamie/Fathom), you need reliable Chrome extension (→ Tactiq, Bluedot), or customer support responsiveness matters to you

---

## Lindy

For deep platform coverage (all modules, workflow builder, credit system, integrations, pricing), use `/sales-lindy`.

**Positioning**: AI agent builder where meeting notes are one module among email triage, calendar management, and custom AI workflows. Positioned as an "AI employee" — handles meetings alongside everything else. Not a dedicated note-taker, but convenient if you want a single tool for email + meetings + calendar.

**Pricing (2026-04)**: Plus $49.99/mo (2 inboxes), Pro $99.99/mo (3 inboxes, computer use), Max $199.99/mo (5 inboxes), Enterprise custom (SSO, SCIM, HIPAA). Credit-based usage — simple tasks 1-3 credits, AI-intensive tasks 10+ credits. 7-day free trial on all plans.

**Meeting notes capabilities**:
- Auto-join recording for Zoom, Google Meet, Microsoft Teams
- Real-time transcription and AI summaries
- Action item extraction
- Post-meeting follow-up drafts
- Pre-meeting prep briefings (participant research, context)

**API**: No public developer API. Cannot programmatically fetch transcripts, trigger recordings, or build integrations on top of Lindy. The HTTP Fetch action lets Lindy call external APIs within workflows, but not the reverse.

**Webhooks**: Inbound webhooks can trigger Lindy workflows. No outbound webhooks for meeting events (no `transcription.completed` or `meeting.ended` events).

**CRM sync**: Indirect — through workflow automation (connect Lindy to HubSpot/Salesforce via built-in integrations). No native field-mapping like Fathom Business or Gong.

**Integrations**: 4,000+ via Pipedream Connect (Gmail, Outlook, Slack, HubSpot, Salesforce, Notion, Asana, etc.). Custom API calls via HTTP Fetch action.

**Compliance**: SOC 2 Type II, HIPAA, GDPR, PIPEDA. AES-256 encryption. Enterprise BAA available.

**Known issues (from reviews)**:
- Credit consumption is unpredictable — meeting recording + AI summary + follow-up drafts can use 10+ credits per meeting
- Complex multi-step workflows (meeting → summarize → update CRM → send follow-up) produce errors more often than simple flows
- No transcript search or conversation analytics — meeting notes are AI summaries, not searchable transcript archives
- No coaching features (talk ratios, filler words, methodology scorecards)
- Trustpilot rating is 2.4 stars (billing/cancellation complaints dominate)
- G2 rating is 4.9 stars (170 reviews, mostly positive on ease of use)
- Pricing structure may differ between marketing page and actual signup (reports of A/B testing)

**Selection notes**:
- **Pick Lindy when**: You want a single AI assistant for email + meetings + calendar, you value natural language task delegation via iMessage/Slack, you're already building custom AI workflows in Lindy, you want meeting prep briefings alongside note-taking, or you prefer a generalist tool over multiple specialized ones
- **Avoid Lindy when**: You need a dedicated note-taker with deep CRM field-mapping (→ Fathom, Gong, Avoma), you need conversation analytics and coaching (→ Gong, tl;dv, Avoma), you need a public API to build transcript pipelines (→ Fathom, Fireflies, Gong), you need predictable pricing without credit anxiety (→ Fathom free tier, tl;dv free tier), you need transcript search across hundreds of meetings (→ Fireflies, Gong), or you need production-grade webhooks for meeting events (→ Fathom, Fireflies, Sembly)

---

## Rilla

For deep platform coverage (setup, CRM integration via Merge, scorecard customization, recording best practices, field sales competitor comparison), use `/sales-rilla`.

**Positioning**: The only conversation intelligence tool built specifically for outside/field sales. Records in-person customer conversations via mobile app and provides AI coaching through virtual ridealongs. Dominant in home services (HVAC, plumbing, roofing, solar, windows, dental, senior living).

**Pricing (2026-04)**: Not publicly listed. Estimated ~$199-349/rep/month (~$4,000+/user/year). Annual contract required, 5-user minimum. Implementation fee $1,500-$5,000.

**API**: No public API documentation. CRM integrations built through Merge's CRM Unified API (Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics). Webhooks fire on CRM appointment field changes via Merge. Custom integrations require contacting Rilla.

**Webhooks**: Via Merge — fires when appointment fields change in CRM (date, status, etc.). Real-time notification to Rilla with appointment context.

**Integrations**: Salesforce, HubSpot, Zoho, Pipedrive, Dynamics (via Merge), ServiceTitan, SPOTIO. No Zapier/Make/n8n connectors.

**Known issues (from G2/Capterra reviews)**:
- Transcription accuracy degrades in noisy environments (basements, construction sites, outdoor)
- Speaker mix-ups when multiple people talk simultaneously
- Processing time 15-30+ minutes after recording (not real-time)
- Battery drain from sustained mobile recording
- No phone call recording — in-person only
- Annual contract lock-in with reported billing issues after cancellation
- No public API — can't build custom transcript pipelines

**Selection notes**:
- **Pick Rilla when**: Your sales team does in-person presentations (home services, field sales), you need to replace physical ridealongs with scalable AI coaching, you want CRM sync for field appointment context, and your budget supports $4K+/user/year
- **Avoid Rilla when**: Your team sells over phone/video (→ Fathom, Fireflies, Gong), you need real-time coaching during the appointment (→ Craft), you need a public API for transcript pipelines (→ Fathom, Fireflies, Gong), you want month-to-month pricing (→ most alternatives), or your team has <5 reps (minimum license requirement)

---

## Siro

For deep platform coverage (API endpoints, OAuth setup, webhook verification, Halftime coaching, CRM integration via Merge, scorecard customization), use `/sales-siro`.

**Positioning**: AI field sales coaching platform covering auto dealerships, home improvement, home services, home builders, telecom, political canvassing, and medical devices. Records in-person conversations via mobile app with offline capability, provides real-time "Halftime" mid-call coaching, and auto-captures CRM data. Broader industry coverage than Rilla but with less home-services-specific depth.

**Pricing (2026-04)**: Not publicly listed. Estimated ~$200-350/rep/month (~$3,000+/user/year). Annual contract required, 5-10 user minimum. Setup fee $2,000-$5,000. Renewal price increases of ~15% reported.

**API**: REST API with two base URLs — `functions.siro.ai/api-externalApi/v1` (sync engagements/opportunities) and `api.siro.ai` (recordings, entity extractions, summaries). Auth via Organization Bearer Token or OAuth Access Token (16-hour lifespan). See `sales-siro/references/siro-api-reference.md` for full endpoint reference.

**Webhooks**: Svix-based signing (`svix-id`, `svix-timestamp`, `svix-signature`). Two events: `integrations.recordingProcessed` and `integrations.recordingLinked`. Payload includes CRM context (engagement, opportunity, account external IDs).

**Integrations**: Salesforce, HubSpot, Zoho, Pipedrive, Dynamics, SugarCRM (via Merge), ServiceTitan, SalesRabbit, SPOTIO, Leap SalesPro, i360 Lightning, FieldRoutes, CompanyCam. No Zapier/Make/n8n connectors.

**Known issues (from G2/Capterra/comparison reviews)**:
- Coaching prompts are generic/horizontal — not tailored to specific verticals (HVAC, roofing, solar)
- No call center coverage — only in-person field sales
- Battery drain from sustained mobile recording
- Opaque pricing with annual lock-in and reported 15% renewal hikes
- Support is email-only (24-48hr) on non-Enterprise plans
- Deep linking requires matching external IDs between CRM and Siro

**Selection notes**:
- **Pick Siro when**: Your field team spans multiple industries (not just home services), you want real-time mid-call coaching (Halftime), you need a public REST API for custom integrations, or your team records in low/no-connectivity environments
- **Avoid Siro when**: You need home-services-specific coaching depth (→ Rilla), you need call center + field coverage (→ Craft), you want transparent pricing and month-to-month contracts (→ SalesAsk), you want phone/video call recording (→ Fathom, Fireflies, Gong), or your team has <5 reps

---

## Sales Ask

For deep platform coverage (Coach Dean coaching, CRM integration, virtual ridealongs, roleplay, white-label program), use `/sales-salesask`.

**Positioning**: AI-powered sales coaching platform purpose-built for home services and trades businesses (HVAC, roofing, plumbing, remodeling, dental). Uses "Coach Dean" AI agent that reviews 100% of conversations and texts reps immediate, specific feedback. Covers both call center (CSR/phone) and field (in-home) sales — unlike Rilla and Siro which are field-only. Native integrations with trade-specific CRMs.

**Pricing (2026-04)**: Not publicly listed. Team pricing estimated ~$1,500-$5,000/month (~$42-208/user/month). Flexible monthly plans, no rigid seat minimums. Claims ~40% less than Rilla. Always get a custom quote.

**API**: No public API documentation. Partner/reseller API access gated behind partner program. Custom integrations require contacting Sales Ask.

**Webhooks**: None documented publicly.

**Integrations**: ServiceTitan, Jobber, Housecall Pro (native, deep — recordings link to revenue tickets), Salesforce, Lasso. No Merge middleware — direct integrations.

**Known issues (from comparison articles and vendor claims — limited independent reviews)**:
- Pricing not transparent — must request a quote
- No public API — can't build custom integrations without partner access
- Home services vertical only — not suitable for auto, telecom, political, medical devices
- "Real-time" coaching is between-appointment text feedback, not in-ear live prompts during conversations (Craft does that)
- Limited independent reviews — no G2 listing found as of 2026-04

**Selection notes**:
- **Pick Sales Ask when**: Your team is in home services (HVAC, roofing, plumbing, remodeling), you use ServiceTitan/Jobber/Housecall Pro, you want both call center and field coaching in one tool, you want active AI coaching (not passive dashboards), or you want lower pricing than Rilla/Siro with flexible monthly plans
- **Avoid Sales Ask when**: Your team isn't in home services (→ Siro for multi-industry, Gong for enterprise B2B), you need a public API for custom integrations (→ Siro), you want live in-ear coaching during appointments (→ Craft), or you need enterprise compliance certifications beyond SOC 2 (→ Gong)

---

## Sonnet

For deep platform coverage (CRM auto-update, templates, relationship tracker, pricing tiers), use `/sales-sonnet`.

**Positioning**: Bot-free AI meeting assistant focused on auto-CRM updates. Records device audio (no bot), generates structured notes with domain templates (sales, legal, medical, recruiting), and auto-updates HubSpot/Salesforce from conversation data. YC S22, 7 employees, San Francisco. Backed by Techstars, NVIDIA Inception. macOS only (Windows beta).

**Pricing (2026-04)**: Free (5 rec/mo, 30-min limit, 2-month storage, 3 AI insights/call), Plus $25/mo ($15 annual, 40 rec/mo, 90-min, 6-month storage), Pro $35/mo ($20 annual, 100 rec/mo, unlimited storage, priority support), Enterprise custom (team features, custom integrations, white glove).

**API**: No public API. No webhooks. No developer portal. No MCP. No Zapier or Make integration documented. Custom integrations are not possible — CRM sync is native-only.

**Integrations**: Zoom, Google Meet, Teams, Discord, Slack. CRM: HubSpot, Salesforce (auto-update). Calendar: Google Calendar.

**Unique features**:
- Auto-CRM update from conversations — logs summaries, action items, follow-up tasks without manual entry
- Domain-specific note templates (sales, legal, medical, recruiting)
- Concept maps and table-format note output
- Relationship tracker that builds participant profiles across meetings
- Pre-meeting participant context from prior conversations

**Key gotchas**:
- macOS only — Windows in beta, no Linux or web-only
- No live transcription — post-call processing only
- ~10 languages (English, Spanish, French, German + ~6 others)
- No public API or webhooks — zero custom integration capability
- Free tier very limited (5 recordings, 30 min, 2-month storage)
- YC status "Inactive" — verify product viability before committing

**Selection notes**:
- **Pick Sonnet when**: You're a macOS sales team that wants auto-CRM update (HubSpot/Salesforce) from calls without any manual logging, domain-specific templates are valuable (legal, medical, recruiting), bot-free recording is non-negotiable
- **Avoid Sonnet when**: You need API access (→ Fathom, Fireflies, Gong), Windows/Linux support (→ Jamie, Granola, Fathom), 20+ languages (→ Jamy, Notta, Fireflies), live transcription (→ Otter, Colibri, Tactiq), enterprise compliance (→ Gong, Avoma), budget-friendly plans (→ Fathom free, Tactiq $8/mo)

---

## Supernormal

For deep platform coverage (AI Agents, credit system, bot-free setup, deliverable workflows), use `/sales-supernormal`.

**Positioning**: AI agent for agencies — pivoted from pure meeting note-taker to a platform that turns meeting context into client deliverables (pitch decks, project briefs, follow-up emails, spreadsheets, mood boards). Bot-free desktop app capture. 700K+ users.

**Pricing (2026-04, mid-transition)**: Free (15 credits/mo, 5 daily cap), Pro ($10/mo annual / $18 monthly, 50 credits/mo, rollover), Business ($19/mo annual / $29 monthly, GPT-4, SSO, audit logs). 20% annual discount.

**API**: No public API. No developer portal. MCP mentioned on website but not documented. Automation via Zapier only.

**Integrations**: Slack (primary), HubSpot, Salesforce, Pipedrive, Asana, Notion, Airtable, ClickUp, Linear, Workable. Zapier for everything else.

**Unique features**:
- AI Agents generate client deliverables (presentations, briefs, emails, spreadsheets, images) from meeting context + uploaded files
- Norma AI assistant for real-time meeting insights
- Voice Agents that actively participate in meetings
- Custom vocabulary (paid plans)
- 60+ language transcription

**Key gotchas**:
- No public API — can't build custom integrations beyond Zapier
- Credits consumed by both meeting captures AND AI Agent tasks
- GPT-4 is Business-only ($19-29/mo); Starter/Pro use GPT 3.5-Turbo
- Bot auto-join can surprise external meeting participants — recommend desktop app instead
- Transcripts are not editable
- Pricing structure appears to be mid-transition — verify directly

**Selection notes**:
- **Pick Supernormal when**: You're an agency that needs AI-generated client deliverables from meetings, you want bot-free recording for client calls, you need broad deliverable types (decks, mood boards, spreadsheets)
- **Avoid Supernormal when**: You need API access for custom integrations (→ Fireflies, Fathom, Gong), you need deep CRM field-mapping (→ Gong, Avoma), you need sales coaching/methodology (→ tl;dv, Avoma, Gong), or you need enterprise compliance beyond SOC 2 (→ Gong)

---

## Bolt-on conversation intelligence (inside other platforms)

These aren't standalone note-takers — they're modules within existing sales tools. Only relevant if you already use the parent platform.

- **Salesloft Conversations** — inside Salesloft; covered by `/sales-salesloft`
- **ZoomInfo Chorus** — inside ZoomInfo; covered by `/sales-zoominfo`
- **Seismic Meeting Intelligence** — inside Seismic; covered by `/sales-seismic`
