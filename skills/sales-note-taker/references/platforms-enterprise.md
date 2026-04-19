# Enterprise & Revenue Intelligence — Platform Reference

Enterprise conversation intelligence and revenue platforms. High-budget tools ($1,000+/user/year) with deep analytics, deal intelligence, and forecasting integration, plus bolt-on CI modules inside existing sales platforms. For the comparison table across all categories, see `platforms.md`.

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

## Bolt-on conversation intelligence (inside other platforms)

These aren't standalone note-takers — they're modules within existing sales tools. Only relevant if you already use the parent platform.

## Clari Copilot

For deep platform coverage (API endpoints, pricing tiers, battlecard config, coaching scorecards, CRM sync), use `/sales-clari-copilot`.

**Positioning**: Enterprise conversation intelligence embedded within Clari's revenue orchestration platform. Best for teams already using or considering Clari Core for forecasting. Acquired Salesloft in late 2025 — platform consolidating sales engagement + CI + forecasting.

**Pricing (2026-04)**: Growth ~$60/user/mo, Accelerator ~$90/user/mo, Enterprise ~$110/user/mo. No free tier (30-day trial). Implementation $15K-75K. API access Enterprise-only.

**API**: Clari Core API at `api.clari.com/v4` — forecast export, data ingestion, audit events, opportunity retrieval. API key auth via `apikey` header, 100 req/sec. Copilot-specific API at `api-doc.copilot.clari.com` (Enterprise-only, JS-rendered docs, described as "primitive but functional").

**CRM**: Salesforce (deepest — native bi-directional), HubSpot (call recording links in contact records), Pipedrive (basic).

**Key differentiators**: Real-time battlecards during calls (not just post-call), direct integration with Clari's forecasting engine (call signals feed deal scores), "Ask Clari" conversational AI trained on org's call data, Smart Deal Summaries saving ~30 min per review.

**Limitations**: 15-language transcription only (vs Gong 70+, Notta 58), steep learning curve, bot joining delays reported, CRM sync requires clean pre-existing data.

**When to pick**: You already use Clari Core for forecasting and want CI in the same platform. You want real-time battlecards during calls. Budget is $60-110/user/mo and you're willing to invest in implementation.

**When NOT to pick**: Budget under $60/user/mo, team < 15 reps, need 30+ languages, want a simple plug-and-play tool, or you're not using/planning Clari Core.

---

## Cresta

For deep platform coverage (all modules, pricing, integrations, implementation planning), use `/sales-cresta`.

**Positioning**: Enterprise contact center AI platform — the broadest scope in the category, combining real-time agent coaching, AI virtual agents, and conversation intelligence/QA on one platform. Targets Fortune 500 with 100+ agent contact centers. Forrester Wave Leader for Conversation Intelligence Solutions for Contact Centers, Q2 2025.

**Pricing (2026-04)**: $60K-$150K/yr, custom quotes. AWS Marketplace: $150K/yr for 125K chats or 100K calls + $1.20/chat, $1.50/call overages. Annual contracts. Smaller deployments reportedly start around $60K/yr.

**API**: Developer portal at developers.cresta.com. SDK/API exists for CCaaS integration but no public endpoint documentation — docs behind auth/demo request. REST + webhooks reported.

**CRM**: Salesforce, ServiceNow, Pega, Dynamics 365, HubSpot, Zendesk, Pipedrive, Oracle, Intercom, Zoho.

**CCaaS integrations**: Five9, Amazon Connect, NICE CXone, Genesys, Avaya, LivePerson, Twilio, Cisco, SIPREC.

**Key differentiators**: AI virtual agents (not just coaching — can handle conversations autonomously), Knowledge Agent (proactive cited answers from connected knowledge bases during calls), Agent Operations Center (unified monitoring of human + AI agents), Automation Discovery (identifies which conversations to automate). Broadest contact center AI scope — competitors focus on subsets (Balto = real-time guidance, Gong = post-call analytics).

**Limitations**: 3-6 month implementation (vs Balto 45-60 days), no public API docs, opaque pricing, transcription accuracy varies with accents, backend integration requires engineering resources, vendor lock-in risk.

**When to pick**: You're Fortune 500 / 100+ agent contact center, want the full AI stack (virtual agents + real-time coaching + QA + analytics), have budget for $60K-$150K/yr + 3-6 month implementation, and value unified platform over best-of-breed.

**When NOT to pick**: Budget under $60K/yr, team under 100 agents, need fast deployment (→ Balto), primarily need post-call sales analytics (→ Gong), or want transparent pricing and public API docs.

---

## Momentum

For deep platform coverage (all modules, pricing, integrations, workflow automation), use `/sales-momentum`.

**Positioning**: AI revenue orchestration platform — sits between conversation intelligence (Gong, Chorus) and CRM (Salesforce) as an "action layer." Not primarily a note-taker — Momentum's core value is automating CRM updates, workflow triggers, and Slack routing from call data. The optional CI add-on ($30/user/mo) adds its own meeting recording/transcription capability.

**Pricing (2026-04)**: Business $69/user/mo + CI add-on $30/user/mo = $99/user/mo for recording + orchestration. Transformation $99/user/mo + CI add-on = $129/user/mo. Enterprise custom. Annual contracts. Startup plan: 50% discount for <10 GTM headcount.

**API**: REST API with `X-API-Key` auth. 100 requests per 15-minute window. OpenAPI spec available. API access must be enabled by Momentum support (not self-serve). Docs at docs.momentum.io.

**CRM**: Salesforce only (bi-directional, real-time). No HubSpot, Pipedrive, or other CRM support.

**Call sources**: Zoom, Google Meet, MS Teams, Cisco Webex (direct recording via CI add-on), or ingest from Gong, Chorus, Dialpad, Aircall, Orum, Salesloft, Outreach.

**Key differentiators**: MEDDIC Autopilot (auto-extracts qualification fields to Salesforce), Slack Deal Rooms (auto-created per opportunity), AI Signals (deal risk detection from calls), SmartClips (auto-generated video snippets), Deep Research (cross-deal AI analysis, usage-based credits), Approvals (complex approval workflows in Slack).

**Limitations**: Salesforce-only (no other CRM), CI add-on is separate cost, API access not self-serve, rescheduled meetings need manual steps, acquired by Salesforce Feb 2026 (product roadmap may change).

**When to pick**: You're on Salesforce, want automated CRM updates from calls without manual data entry, and value workflow orchestration (Slack routing, deal rooms, approvals) as much as call analytics. Works with or without Gong — CI add-on provides recording if you don't have a separate tool.

**When NOT to pick**: Not on Salesforce, need standalone conversation analytics (→ Gong), budget-constrained and primarily need transcription (→ Fathom/Fireflies), or evaluating CI tools without needing CRM automation.

---

## Observe.AI

For deep platform coverage (all modules, API endpoints, pricing tiers, CCaaS integration, QA scorecard design), use `/sales-observe-ai`.

**Positioning**: Enterprise contact center intelligence platform — 100% Auto QA, real-time Agent Copilot, Coaching Copilot, and AI virtual agents (VoiceAI/ChatAI). Targets enterprise contact centers with 100-100,000 agents. 350+ customers including DoorDash, Accolade, DailyPay, Signify Health. Historically strongest in post-call QA analytics — real-time Agent Copilot is a newer capability.

**Pricing (2026-04)**: No public pricing — all five tiers require "Talk to sales." Estimated $100-500/user/mo based on review sites. Tiers: VoiceAI Agents, Real-time AI, Post-interaction AI, Enterprise Advanced, Enterprise Unlimited. Annual contracts. No free tier or trial.

**API**:
- Docs: `https://api-docs.observe.ai/` (Redoc, JS-rendered — partial access)
- Type: REST
- Base URL: `https://api.observe.ai/v1`
- Auth: Bearer token (issued by account admin, enterprise-gated)
- Rate limits: Per-endpoint (exact numbers not public), 429 with exponential backoff
- Key endpoints:
  - `GET /v1/interactions` — list interactions with date range filtering
  - `GET /v1/interactions/{id}/transcript` — speaker-labeled transcript
  - `GET /v1/interactions/{id}/evaluation` — QA scores and coaching moments
- Caveats: Transcripts not instant (minutes to hours lag), evaluations arrive later than transcripts, cursor-based pagination

**Integrations**: 250+ integrations. CCaaS: Five9 (deepest), Amazon Connect, Talkdesk, Avaya, 8x8, Aircall, Twilio, UJET, 3CLogic. CRM: Salesforce. Data: S3, Amplitude. Knowledge: Confluence, Bloomfire.

**Known issues (from G2/Capterra reviews)**:
- Transcription accuracy: degrades with accents, non-native English, background noise, overtalk
- Speaker attribution errors: agent statements misattributed to customer and vice versa
- Call segmentation: long calls split into shorter segments, losing full context for QA
- Complex implementation: 3-6 month deployment timeline
- Opaque pricing: custom enterprise quotes only
- Navigation/UX: default dates not set to most recent, not all inbound calls appear

**Selection notes**:
- **Pick Observe.AI when**: 100+ agent enterprise contact center, need 100% auto QA to replace manual sampling, want a platform that can grow from QA into real-time guidance and AI agents, budget supports $100-500/user/mo, 3-6 month implementation timeline acceptable
- **Avoid Observe.AI when**: Team under 50 agents (→ Enthu.AI), primary need is real-time during-call coaching (→ Balto), budget under $100/user/mo, need fast deployment in weeks (→ Enthu.AI or Balto), or want transparent pricing

---

## NICE CXone

For deep platform coverage (all modules, API endpoints, pricing tiers, WFM, QM, Salesforce integration), use `/sales-nice-cxone`.

**Positioning**: Full CCaaS platform — not a standalone note-taker or conversation intelligence tool, but includes built-in recording, quality management, and interaction analytics as part of the contact center platform. Only relevant if you're evaluating CXone as your CCaaS and want to understand its recording/analytics capabilities vs buying a separate CI tool.

**Pricing (2026-04)**: Six tiers from $71-$209/agent/mo. Voice recording available from Voice Agent ($94), screen recording from Essential Suite ($135), AI analytics from Complete Suite ($209). Annual contracts, 15-25% negotiable on multi-year.

**Recording capabilities**:
- Voice recording and storage (Voice Agent+ tiers)
- Screen recording alongside voice (Essential Suite+)
- Digital interaction recording (Digital Agent+)
- Media Playback APIs for programmatic access to recordings

**Analytics capabilities**:
- Interaction Analytics — linguistic analysis on 100% of interactions (topic detection, sentiment, compliance)
- AI-driven sentiment analysis and trend discovery (Complete Suite)
- Real-Time Data APIs for custom dashboards
- Data Extraction APIs for external BI tools

**API**: 16 REST API groups including Recording APIs, Interaction Analytics APIs, and Media Playback APIs. OAuth2/Access Key/OIDC auth. Developer portal at developer.niceincontact.com.

**CRM**: Deep Salesforce integration (bi-directional Data Cloud, Agent for Salesforce workspace).

**Limitations**: Not a standalone CI/note-taker. No methodology-based call scoring (MEDDPICC/SPIN). No coaching moment detection or smart playlists. Reporting is widely cited as hard to use. AI Copilot can cause UI freezes. For dedicated conversation intelligence on top of CXone, layer Observe.AI, Balto, or Cresta.

**When to consider**: You're building or running a CXone contact center and evaluating whether its built-in recording + QM is sufficient, or whether you need to add a dedicated CI tool on top.

**When NOT to pick for CI**: Don't buy CXone just for call recording/analytics — it's a full CCaaS platform. If you need standalone conversation intelligence for a sales team, use Gong, Fireflies, Fathom, or a dedicated CI tool instead.

---

## Talkdesk

For deep platform coverage (all modules, API endpoints, pricing tiers, WFM, QM, Salesforce integration), use `/sales-talkdesk`.

**Positioning**: Full CCaaS platform — not a standalone note-taker or conversation intelligence tool, but includes built-in recording, quality management, AI analytics, and virtual agents as part of the contact center platform. Only relevant if you're evaluating Talkdesk as your CCaaS and want to understand its recording/analytics capabilities vs buying a separate CI tool.

**Pricing (2026-04)**: Four tiers from $85-$225/agent/mo. Voice recording on Voice Essentials+ ($105), screen recording on Elite ($165), AI analytics as paid add-on on any tier. 3-year contracts required. AI features (Autopilot, CoPilot, Navigator, Interaction Analytics) all require separate quotes — total costs typically 20-60% above base price.

**Recording capabilities**:
- Voice recording and storage (Voice Essentials+)
- Screen recording alongside voice (Elite)
- Digital interaction recording (Digital Essentials+)
- Explore API for asynchronous historical report extraction (5-min delay)
- Live API for real-time metrics via SSE streaming

**Analytics capabilities**:
- Interaction Analytics — linguistic analysis on 100% of interactions (paid add-on)
- AI CoPilot — real-time agent guidance during calls (paid add-on)
- Quality Management — evaluation forms, scoring, coaching workflows (Elite+)
- Navigator — GenAI-powered routing with topic detection (paid add-on)

**API**: 23 REST API specs including Live API (SSE streaming), Explore API (historical reports), Core API. OAuth 2.0 auth (Client Credentials/JWT/Auth Code). Regional base URLs: US `api.talkdeskapp.com`, EU `api.talkdeskapp.eu`, CA `api.talkdeskappca.com`. API access restricted to enterprise customers and AppConnect partners.

**CRM**: Deep Salesforce integration (CTI + Service Cloud Voice BYOT, Omni-Channel routing). 60+ total integrations.

**Limitations**: Not a standalone CI/note-taker. No methodology-based call scoring (MEDDPICC/SPIN). All AI features are paid add-ons. No predictive dialer. Support tickets average 3-4 days. Call quality issues reported (dropped calls, crackling audio). Reporting has steep learning curve. For dedicated QA overlay, use Observe.AI (which integrates natively with Talkdesk), Balto, or Cresta.

**When to consider**: You're building or running a Talkdesk contact center and evaluating whether its built-in recording + QM is sufficient, or whether you need to add a dedicated CI tool on top. Talkdesk deploys faster than NICE CXone for mid-market teams.

**When NOT to pick for CI**: Don't buy Talkdesk just for call recording/analytics — it's a full CCaaS platform. If you need standalone conversation intelligence for a sales team, use Gong, Fireflies, Fathom, or a dedicated CI tool instead.

---

---

### Verint (Da Vinci AI Bots)

**What**: Enterprise CX automation platform with Exact Transcription Bot (80+ languages), Wrap Up Bot (auto call summaries), Quality Bot (100% automated QA scoring), and Coaching Bot (real-time agent guidance). Not a standalone meeting note-taker — this is contact center conversation intelligence built into Verint's WEM platform. Acquired Calabrio Feb 2026.

**Transcription**: Exact Transcription Bot — market-leading accuracy per Verint, 80+ languages/dialects, customized models per customer. Speech & text analytics on top of transcripts.

**API**: Developer portal with API key auth. REST APIs for interaction export, user provisioning, KPI management. Webhooks for event notification. Community REST SDK (.NET). API docs behind authenticated portal.

**CRM sync**: Salesforce via EliteConnect (makes recordings searchable by Salesforce fields, playback within Salesforce). 500+ adaptors across 300 vendors.

**Pricing**: Enterprise custom — no public pricing. Estimated $100-500/user/month.

**Best for CI**: Large contact centers (500+ agents) that need transcription, QA scoring, and real-time coaching as an integrated suite across any CCaaS platform. Not appropriate for standalone sales meeting recording.

**When NOT to pick for CI**: Don't buy Verint for sales team meeting recording — it's an enterprise contact center platform. Use Gong, Fathom, or Fireflies for sales CI. If you just need QA scoring, Observe.AI or Balto are more focused. If midmarket, use Calabrio ONE (now Verint's midmarket brand).

---

## Bolt-on conversation intelligence (not standalone)

- **Revenue.io Conversation Intelligence** — inside Revenue.io (Orchestrate tier); covered by `/sales-revenue-io`
- **Salesloft Conversations** — inside Salesloft; covered by `/sales-salesloft`
- **ZoomInfo Chorus** — inside ZoomInfo; covered by `/sales-zoominfo`
- **Seismic Meeting Intelligence** — inside Seismic; covered by `/sales-seismic`
