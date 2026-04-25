# Mid-Market Note-Takers — Platform Reference

Sales-focused conversation intelligence and meeting tools for mid-market teams. Platforms with coaching, methodology scorecards, CRM enrichment, or specialized capabilities at $15-100/user/month. For the comparison table across all categories, see `platforms.md`.

## Sybill

For deep platform coverage (CRM Autofill configuration, Ask Sybill, Deal Workspace, pricing tiers, behavioral insights, known issues, troubleshooting), use `/sales-sybill`.

**Positioning**: AI sales assistant that combines conversation intelligence with deal execution automation. Learns how teams win deals and automates post-call workflows — CRM autofill, follow-up emails, deal prep, and pipeline intelligence. Built for mid-market sales teams that want Gong-like deal intelligence without Gong pricing, and with rep productivity (not just leadership analytics) as the primary focus.

**Pricing (2026-04)**: Free $0 (500 credits/wk, 20 summaries/mo, 3mo storage), Pro $30/user/mo (unlimited summaries, no CRM), Business $90/user/mo (CRM Autofill 10 fields, Deal Workspace, unlimited credits), Enterprise custom (20+ seats, API, MCP, unlimited autofill). Annual billing saves ~34%.

**API**:
- Enterprise-only — no public API documentation available
- Auth: not publicly documented
- MCP (Claude/ChatGPT): Enterprise-only
- Webhooks: available on all plans for pushing meeting insights to external tools

**Integrations**: Salesforce, HubSpot, Zoho, Dynamics 365 (CRM, Business+ for autofill); Zoom/Teams/Meet/Webex (video); Outreach (dialer, Nooks/Dialpad/Aircall/RingCentral/Kixie coming soon); Gmail/Outlook/Zoho Mail (email); Slack; Zapier/Make (via webhooks).

**Known issues (from G2/review analysis)**:
- Insight generation not real-time — 5 min for summaries, 30 min for behavioral insights (Buyer EQ)
- Behavioral insights (Buyer EQ) Zoom-only — no Teams/Meet support
- Bot deactivation confusing — joins unwanted meetings, exclusion settings not intuitive
- CRM Autofill completely gated to Business+ ($90/user/mo) — most requested feature on lower plans
- API/MCP Enterprise-only — no programmatic access for Business or below
- Login occasionally slow

**Strengths vs competitors**:
- Deeper CRM autofill than Fathom/Fireflies (MEDDPICC/BANT/SPICED framework extraction)
- Deal Workspace + Ask Sybill for pipeline intelligence (closer to Gong's deal boards than any other mid-market tool)
- Follow-up email drafting trained on user's writing style
- 100+ language support for transcription
- Outcome-based learning — recommendations improve based on won/lost deal patterns

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

## IRIS Clarity

For deep platform coverage (desktop app setup, SDK integration, Talkdesk AppConnect, pricing breakdown, Krisp comparison), use `/sales-iris-clarity`.

**Positioning**: Pure bidirectional AI noise cancellation — removes background noise on both sides of a call in real time. Originated from Formula 1 race communications (demonstrated removing 130 dB of noise in racing). No meeting notes, transcription, or AI summaries — noise cancellation only. Desktop app (Windows/Mac) creates a virtual audio device that any VoIP platform routes through. Also offers Web SDK (WebRTC) and Server SDK (C++/Python/Node.js) for developers embedding noise cancellation into their own platforms. Talkdesk AppConnect native integration.

**Pricing (2026-04)**: Professional £9.50/seat/mo (£6.50 annual, ≈$8.25 USD), up to 100 seats, 14-day free trial. Enterprise custom (100-1,000+ seats, annual commitment, concurrent licensing, dedicated CSM).

**API**:
- **No REST API for meetings.** IRIS Clarity is noise cancellation only — no meeting data to query.
- **Web SDK**: WebRTC Audio Worklet Processor, npm install with `IRIS_SDK_TOKEN`, 18+ config params
- **Server SDK**: C++, Python, Node.js — batch processing, streaming, IVR noise removal
- **Cloud deployment**: Terraform, Helm, Docker
- **Developer portal**: developer.iris.audio (login-gated, request access)
- **SDK docs**: sdk.iris.audio

**Integrations**: Works with all VoIP platforms via virtual audio device (Zoom, Teams, Meet, Webex, RingCentral, 8x8, Vonage). Talkdesk AppConnect (native). Salesforce. Adobe Connect.

**Known issues (from G2/comparison reviews)**:
- No meeting notes or transcription — pure noise cancellation only, must pair with a separate note-taker
- Won't cancel all noise — very loud or unusual sounds may bleed through
- Desktop app only for end users — no mobile app, no browser extension (SDK enables browser via developer integration)
- Enterprise required for 100+ seats — Professional plan caps at 100
- Sparse review data — only ~14 G2 reviews, hard to validate claims at scale
- Pricing in GBP — can confuse USD-budgeting teams

**Selection notes**:
- **Pick IRIS Clarity when**: Pure noise cancellation is the only need (no notes/transcription), you're embedding noise cancellation in your own VoIP product via SDK, you're on Talkdesk (native AppConnect), or you need concurrent licensing for a large contact center
- **Avoid IRIS Clarity when**: You also need meeting notes or transcription (→ Krisp or a dedicated note-taker), you need accent conversion (→ Krisp), you want a mobile app (→ Krisp), or you need deep CRM integrations beyond Salesforce

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

## Outdoo

For deep platform coverage (AI roleplays, coaching programs, revenue intelligence, CRM automation, API integration), use `/sales-outdoo`.

**Positioning**: Closed-loop AI coaching and revenue intelligence platform (formerly MeetRecord). Combines AI roleplay practice, real-call scoring, and CRM automation. Positioned as mid-market Gong alternative — no platform fee, AI roleplay (Gong lacks this), 120+ integrations. G2 4.6/5 (125+ reviews).

**Pricing (2026-04)**: Free (basic roleplays + limited call recording), Premium (custom — courses, gamified learning, 15+ call integrations), Enterprise (custom — SSO, Developer APIs, MCP Server, private cloud). Budget ~$660-1,200/user/year. No platform fee (vs Gong's $10K).

**API**: REST API at `openapi.outdoo.ai/api/v1/`. JWT Bearer token auth. Enterprise-only. Endpoints: conversations (list, get, transcript, create), buyers, users, stats, scorecards, trackers, initiatives, workspaces. Max page size 20. Full OpenAPI spec at `openapi.outdoo.ai/openapi.json`.

**Integrations**: 120+ — Salesforce (AppExchange managed package), HubSpot (marketplace), Zoho, Pipedrive, Close, Dynamics 365, Attio, HighLevel, Monday, Keap, LeadSquared, FollowUpBoss. Meeting: Zoom, Teams, Google Meet. Dialers: Aircall, Dialpad, RingCentral, CallRail, Outplay, Salesloft Dialer, Outreach Dialer. CI: Gong, Clari, Chorus, Fireflies, Avoma. LMS: Docebo, TalentLMS, Cornerstone, Absorb, Moodle. Data: Snowflake. Other: Slack, Zapier.

**Key gotchas**:
- API and MCP Server are Enterprise-only
- CRM integration not self-service — typically needs CSM help to configure
- Non-English transcription (especially Portuguese) has accuracy issues
- Speaker identification can misattribute — manual reassignment available
- Pricing is fully custom/opaque — no published per-seat rates
- SOC 2, HIPAA, ISO 27001 certified

**Selection notes**:
- **Pick Outdoo when**: AI roleplay practice is a priority alongside conversation intelligence, budget matters vs Gong ($660-1,200 vs $1,600+/user/yr + $10K platform fee), you want closed-loop coaching connecting practice to real-call performance, your team needs LMS integration (40+ SCORM connectors on Enterprise), or you want hiring assessments via roleplay simulation
- **Avoid Outdoo when**: You need the deepest conversation analytics ecosystem (→ Gong), you need transparent published pricing (→ Fathom, Fireflies), you need self-service CRM integration (→ Fathom, Fireflies, Avoma), you need standalone note-taking without coaching/roleplay (→ Fathom, Otter, Fireflies), or non-English transcription accuracy is critical (→ Jamy, Notta)

---

## Jiminny

For deep platform coverage (modules, pricing, CRM integration, API, dialer connections, coaching setup), use `/sales-jiminny`.

**Positioning**: Coaching-focused conversation intelligence for mid-market sales teams. More accessible than Gong — no $5K-50K platform fee, wider native CRM support (8 CRMs vs Gong's one-at-a-time). Less deep analytics and smaller ecosystem than Gong. Captures phone calls, video meetings, and emails.

**Pricing (2026-04)**: Recording Seat from $83/mo, Insights Seat (view/listen only) from $42/mo, Listener Seat (playback only) $0/mo. 12-month minimum contract. One-time setup fee (no recurring platform fee). 14-day free trial.

**API**:
- Type: Partial REST API, JSON format
- Auth: API key (admin/owner-generated via Organization Settings → General → API Key)
- Rate limits: 30 req/min (`getActivities`), 120 req/min (all other endpoints)
- Data: activity metadata (title, host, participants, duration), playback stats, coaching frameworks, transcriptions, CRM data
- Download links for recordings expire after 24 hours
- Swagger docs at `jiminny.github.io/customer-api-docs/` (JS-rendered, requires browser)
- No webhook events documented — polling-based integration

**Integrations**:
- CRM: Salesforce, HubSpot, Zoho, Pipedrive, Close, Bullhorn, Copper, Microsoft Dynamics
- Dialers: 8x8, Aircall, Apollo, Bloobirds, Close, Cloudcall, Cloudtalk, Connect and Sell, Dialpad, Five9, RingCentral
- Video: Google Meet, Microsoft Teams
- Sales tools: Amazon Connect, Outreach, Salesloft, Planhat
- 60+ language transcription

**Security**: SOC 2 Type II, GDPR, CCPA, HIPAA, 256-bit AES, AWS-hosted, SAML2 SSO, 2FA, 99.9% uptime

**Selection notes**:
- **Pick Jiminny when**: Budget matters vs Gong ($83/mo vs $133/mo + platform fee), you need coaching-focused conversation intelligence without deep analytics, your CRM is Bullhorn/Close/Copper/Dynamics (Gong doesn't support these natively), you want call/email/video capture in one platform, or your team uses a supported dialer and wants seamless recording
- **Avoid Jiminny when**: You need the deepest analytics and deal intelligence ecosystem (→ Gong), you need a rich API with webhooks for event-driven pipelines (→ Gong, Fireflies, Fathom), you need a free tier (→ Fathom, Fireflies, Otter), you need transparent self-serve pricing (→ Fathom, Fireflies), or transcription accuracy with accents is critical

---

## Enthu.AI

For deep platform coverage (modules, pricing, QA scorecard setup, dialer integrations, compliance monitoring), use `/sales-enthu`.

**Positioning**: Lightweight AI-powered call QA and coaching for small-to-mid contact centers. Scores 100% of calls against custom QA scorecards (not sampling). Fast setup (hours not months), no minimum agent commitments. Positioned as an affordable alternative to Gong and CallMiner for contact center QA.

**Pricing (2026-04)**: Not transparently published. Review sites report $15/mo (SoftwareSuggest), $59/user/mo (SourceForge), $69/user/mo (Zonka article). Custom pricing based on agent count and call volume. Free trial available. No minimum commitments.

**API**:
- Not publicly documented
- Enthu mentions "secure APIs and pre-built connectors" but no published REST/GraphQL docs
- GetApp lists "API not available" (may be outdated)
- Custom integrations built during onboarding at no extra charge

**Integrations**:
- Dialers: Aircall, RingCentral, Freshcaller, Twilio, GoToConnect, Dialpad
- CRM: HubSpot, Pipedrive, Bullhorn, Close
- Meetings: Zoom, Webex
- Custom telephony integrations available on request

**Key features**:
- Auto QA scoring on 100% of calls with custom scorecards
- Agent coaching with auto-flagged coaching moments
- Sentiment analysis and keyword tracking
- Compliance monitoring with PII auto-redaction
- Multi-language transcription
- Real-time alerts for threshold violations

**Selection notes**:
- **Pick Enthu.AI when**: You need affordable QA auto-scoring for a contact center, fast setup without enterprise implementation, no minimum agent count, compliance-heavy environment (PII redaction, disclosure checking), or evaluating alongside Gong/CallMiner
- **Avoid Enthu.AI when**: You need revenue intelligence and deal analytics (→ Gong), you need a documented API for custom integrations (→ Gong, Fireflies, Fathom), you need a free tier (→ Fathom, Fireflies), you need deep coaching programs with role-plays (→ Outdoo, Allego), or your team >200 agents and needs enterprise-grade reporting (→ NICE, CallMiner)

---

## Demodesk

**Category**: AI sales meeting platform — conversation intelligence + coaching + CRM automation + autonomous agents
**Pricing**: €49/user/mo (annual) / €59/mo (monthly), Enterprise custom, AI Crew add-on €299-999/mo, free viewer seats
**Free tier**: 14-day trial only
**API**: REST V2 (`https://demodesk.com/api/v2/`), `api-key` header auth, 120 req/min global
**Webhooks**: 13 events (demo lifecycle + recording events), requires email to support@demodesk.com for activation
**CRM**: Salesforce, HubSpot, Pipedrive (native — auto-create events, field updates, scheduling buttons, duplicate prevention)
**Conferencing**: Zoom, Microsoft Teams, Google Meet, Webex
**Dialers**: Aircall, RingCentral
**Languages**: 98 languages (auto-detected)
**Compliance**: GDPR-native (EU data centers only, Azure Frankfurt), ISO 27001:2022
**Mobile**: iOS/Android app for offline/in-person meeting capture

**Key features**:
- AI Assistant: recording, transcription, summaries, follow-up email drafting, CRM auto-update
- AI Coach: custom scorecards (BANT, MEDDIC, SPIN), 1-5 scoring, performance dashboards, deal risk detection
- AI Analyst: pipeline insights, "Ask AI Analyst" natural-language queries
- AI CRM Concierge: zero-setup CRM field detection with human-in-the-loop verification (99-100% accuracy)
- AI Crew (add-on): autonomous agents for stalled deal rescue, automated follow-ups, triggered by custom logic
- Speaker analytics: talk-to-listen ratio, engagement, words-per-minute

**API endpoints** (V2 — recommended):
- `GET /recordings` — list with Ransack-style filters, cursor pagination
- `GET /recordings/{token}` — detail with participants, engagement scores
- `GET /recordings/{token}/transcript` — plaintext or JSON with speaker timestamps
- `POST /transcripts/batch` — batch up to 100 recording tokens
- `GET /recordings/{token}/summaries` — AI-generated summaries with prompt metadata
- `GET /recordings/{token}/scorecards` — coaching scorecards with scores and comments

**Selection notes**:
- **Pick Demodesk when**: You need conversation intelligence + autonomous AI agents that act on insights, your team is EU-based and needs GDPR-native hosting, you want zero-setup CRM updates with human verification, you need coaching scorecards + pipeline analytics in one tool without Gong's platform fee, or you want 98-language transcription
- **Avoid Demodesk when**: You need a free tier for individual use (→ Fathom, Fireflies), you need bot-free recording without silent capture (→ Granola, Jamie), you need field sales / in-person coaching (→ Rilla, Siro), you need self-service webhook setup (Demodesk requires emailing support), or your team is budget-constrained below €49/user/mo (→ Fathom, MeetGeek)

---

## Salesken

For deep platform coverage (all modules, CRM integration, QA setup, real-time coaching, pricing, troubleshooting), use `/sales-salesken`.

**Positioning**: All-in-one AI conversation intelligence with real-time in-call coaching (not just post-call analysis). Combines Revenue Intelligence, QA automation, AI Sales Assistant, Note Taker, and Field Sales Analytics. Strong APAC/India focus with multilingual capabilities. Targets banking, insurance, healthcare, BPO, EdTech, SaaS, real estate. SOC 2 Type II, GDPR, ISO 27001.

**Pricing (2026-04)**: Per-recorded-user license (~$99/mo starting) + platform fee based on total supported users. Per-module pricing available (Revenue Intelligence, QA AI, Sales Assistant, Note Taker, Field Sales). Bundle discounts on combined plans. Enterprise custom. No free tier. Integration included at no extra cost.

**API**:
- No publicly documented REST API
- Postman collection exists (`documenter.getpostman.com/view/11429137/SztA6o8r`) but JS-rendered/inaccessible
- Enterprise customers get API-level flexibility for CRM data flows, custom field mapping, security model integration
- Third-party integration via ApiX-Drive

**Webhooks**: Not publicly documented.

**Rate limits**: Not publicly documented.

**Integrations**:
- CRM: Salesforce (Classic + Lightning, native), HubSpot (native), Zoho CRM (native), custom/legacy CRM (built by Salesken onboarding team)
- Dialers: Most major sales dialers supported (specific list not published)
- Sales engagement: Salesloft marketplace partner
- Video: Most major video conferencing tools supported

**Data flow to CRM**:
- Auto-syncs: transcripts, summaries, action items, next steps, deal risk scores, buyer sentiment, QA metrics, objection handling scores, next-best-action recommendations
- Real-time or within minutes after calls
- Configurable field-level mapping, source-of-truth designation, role-based access, custom object support (Salesforce)

**Known issues (from reviews/comparison articles)**:
- Dashboard lag during high-volume calling blocks — performance degrades under load
- Call dropouts during live coaching — some reps report interruptions when AI is actively prompting
- Navigation complexity — too many features requiring multiple clicks to find insights
- Post-call analysis depth doesn't match Gong — Salesken optimizes for real-time, Gong for post-call
- No public API docs — enterprise-only API access, self-service integration not possible
- Pricing is fully opaque — requires sales call for any quote

**Selection notes**:
- **Pick Salesken when**: Real-time in-call coaching is the primary requirement (not just post-call analysis), you need 100% QA scoring across all calls (banking, insurance, BPO compliance), your team is APAC-based or multilingual, you want revenue intelligence + QA + coaching in one platform without Gong pricing, or you have field sales teams needing on-site conversation capture
- **Avoid Salesken when**: You need a public API for custom integrations (→ Gong, Fireflies, Fathom), you need transparent self-serve pricing (→ Fathom, Fireflies), you need a free tier (→ Fathom, tl;dv, Fireflies), you need the deepest post-call analytics ecosystem (→ Gong), you need methodology scorecards like MEDDIC/BANT built in (→ Avoma), or you need bot-free recording (→ Jamie, Granola, Krisp)

## Oliv

For deep platform coverage (agent configuration, CRM setup, scorecard configuration, migration, pricing tiers), use `/sales-oliv`.

**Positioning**: AI-native revenue intelligence platform with modular agent architecture. Instead of a monolithic CI platform, Oliv deploys individual AI agents (Notetaker, Meeting Insights, Deal Insights, CRM Manager, Forecaster) that teams buy à la carte. Positioned as a 13x cheaper alternative to Gong — a team paying $19/user/mo for transcription can scale to $77/user/mo for the full stack without switching platforms.

**Pricing (2026-04)**: Notetaker $19/user/mo, Meeting Insights $29/user/mo, Deal Insights $29/user/mo (all annual). Full stack $77/user/mo. CRM Manager Agent ~$19/user/mo add-on. Forecaster Agent $199/manager/mo. Viewers and collaborators free. 14-day trial, no CC. Free migration from Gong/Fireflies/Avoma/Clari/Otter/Fathom. Volume discounts available.

**API**: No public API documented. All integrations through web.oliv.ai UI and native connectors.

**Webhooks**: None documented.

**Rate limits**: N/A (no public API).

**Integrations**: Salesforce, HubSpot, Zoho, Freshworks, Copper, Close, Pipedrive, Dynamics 365 (CRM). Gong, Clari, Avoma, Chorus, Grain (CI — can use as audio sources). Highspot, Seismic, Guru, Mindtickle (enablement). Fireflies, Fathom, tl;dv, Otter, Read (alternative recorders). Apollo, Outreach, ZoomInfo, SalesIntel, Salesloft (prospecting). Zoom, Google Meet, Teams, Webex (conferencing). Slack, Teams, Google Chat (comms). 42+ total integrations.

**CRM sync**:
- Bidirectional with all 8 supported CRMs
- CRM Manager Agent auto-populates fields from conversation context
- Agent learns team methodology from 3 calls, then auto-applies
- Setup: Salesforce via web.oliv.ai/salesforce/connect (package install), HubSpot via web.oliv.ai/hubspot/connect
- Auto-syncs: transcripts, summaries, deal health scores, methodology fields, follow-up actions

**Known issues (from comparison articles/reviews)**:
- No public API — cannot build custom integrations, webhook pipelines, or data warehouse exports
- 0 G2 reviews as of 2026-04 — very early-stage platform, limited independent validation
- Coach module listed as "Coming Soon" — dedicated coaching agent not yet available
- Calendar integration is a hard dependency — Oliv won't function without Gmail or Outlook calendar connected
- Annual-only pricing — no monthly payment option

**Selection notes**:
- **Pick Oliv when**: You want Gong-level intelligence at a fraction of the cost, you prefer modular pricing (buy only what you need), you're migrating from an expensive CI stack, you want AI agents that autonomously complete work (not just dashboards), your team uses multiple CRMs or needs broad CRM support (8 CRMs), or you want an existing recorder (Gong, Fireflies, etc.) as audio source with Oliv for intelligence
- **Avoid Oliv when**: You need a public API for custom integrations (→ Gong, Fireflies, Fathom), you need an established platform with extensive reviews and case studies (→ Gong), you need bot-free recording (→ Jamie, Granola, Krisp), you need enterprise-grade contact center features (→ Cresta, Balto), you need a free tier (→ Fathom, tl;dv), or you need a dedicated coaching module today (Coach is "Coming Soon")

## Weflow

For deep platform coverage (module selection, Salesforce API management, pricing tiers, comparison with Gong/Clari/Scratchpad), use `/sales-weflow`.

**Positioning**: Salesforce-native Revenue AI platform combining activity capture, conversation intelligence, and deal intelligence/forecasting. Positioned as "Gong with better AI at 50% the price" for mid-market Salesforce teams. Bundles what competitors sell as 3 separate products (Clari + Clari Capture + Clari Copilot) into one tool starting at $19/user/mo.

**Pricing (2026-04)**: Free $0 (100 SF updates, basic pipeline views), Activity Capture $19/user/mo (email/meeting/contact auto-sync), Conversation Intelligence $39/user/mo (AI notetaker, 96+ languages, CRM auto-fill), Deal Intelligence $39/user/mo (50+ AI signals, forecast roll-ups). Bundles: Activity+CI $49/user/mo (16% savings), Full Platform $79/user/mo (19% savings). Volume: 5% off 20-39 users, 40+ contact sales. Multi-year: 10% (2yr), 20% (3yr). Min 10 users for bundles. 14-day free trial.

**API**: No public API. Weflow syncs bi-directionally with Salesforce using the Salesforce REST API. Data lands in native Salesforce objects (EmailMessage, Task, Event, Contact) — queryable via SOQL and Salesforce API.

**Webhooks**: None — no webhook or event-based notification system.

**Rate limits**: N/A (no public API). However, Weflow consumes Salesforce API calls — monitor at Setup → Company Information → API Requests. Install managed package to reduce consumption.

**Integrations**: Salesforce (exclusive, bi-directional, real-time, native objects). Google Workspace, Microsoft 365 (email/calendar). Zoom, Teams, Google Meet (video conferencing). Chrome Extension. Managed Salesforce Package available.

**CRM sync**:
- Server-side auto-sync — no browser extension or user action required
- 24-month historical backfill on activation
- Native Salesforce objects — works with existing reports, dashboards, automations
- AI auto-fills opportunity fields from call transcripts (MEDDIC, BANT, custom)

**Known issues (from G2/review analysis)**:
- No public API — cannot build custom integrations or data warehouse pipelines
- Salesforce-only — no HubSpot, Dynamics, Pipedrive, or any other CRM
- No VoIP/SMS capture — phone calls and text messages not recorded
- New Salesforce field lag — custom fields may take time to appear in Weflow
- No Slack integration — notifications require Salesforce workflow rules
- Not suited for 1,000+ rep enterprise forecast hierarchies
- Managed package recommended to avoid Salesforce API limit issues

**Selection notes**:
- **Pick Weflow when**: Salesforce-only team wanting activity capture + CI + forecasting in one bundle at ~50% of Gong pricing, reps not updating Salesforce (server-side auto-capture requires zero behavior change), need to fix forecast accuracy by fixing CRM data quality first, mid-market team (10-100 reps) wanting self-serve deployment with 14-day trial
- **Avoid Weflow when**: You use HubSpot or any non-Salesforce CRM, you need VoIP/SMS recording (→ Gong, Revenue.io), you need a public API for custom pipelines (→ Gong, Fireflies, Fathom), you need 1,000+ rep scale (→ Clari, Gong), you need the deepest analytics ecosystem (→ Gong), you need bot-free recording (→ Jamie, Granola, Krisp)

## Scratchpad

For deep platform coverage (module selection, credit system, pricing tiers, comparison with Weflow/Gong/Clari), use `/sales-scratchpad`.

**Positioning**: Salesforce-native AI workspace that sits between sales teams and Salesforce. Unlike standalone revenue intelligence platforms (Gong, Clari), Scratchpad is a CRM overlay — makes Salesforce easier to use with modern UI, AI field updates, and pipeline views. Complements Gong rather than replacing it (Team plan integrates with Gong). 4.9-star rating from 1,470+ G2 reviews.

**Pricing (2026-04)**: Free $0 (3 views, 10 hrs/mo recording, 100 AI credits/mo), Solo $19/user/mo annual ($24 monthly, full workspace, 400 credits/mo), Team $49/user/mo annual ($62 monthly, pooled 800 credits/mo, Gong integration), Enterprise custom (unlimited credits, white-glove services). No setup fees or minimums.

**API**:
- No public API — no developer portal, no endpoints, no SDK
- No webhooks or event-based notifications
- All data flows through the Scratchpad UI into native Salesforce objects (queryable via SOQL/Salesforce API)

**Integrations**: Salesforce (core, bi-directional), Zoom, Google Meet, Microsoft Teams, Gong (Team+), Chorus, Gmail, Outlook, Slack.

**Known issues (from G2/review analysis)**:
- Complex Salesforce workflows (opportunity creation, multi-step processes) can't be completed in Scratchpad
- No mobile experience for pipeline management
- AI credits opaque — consumption per action not clearly documented
- Integration gaps with SalesLoft and other sales engagement tools
- Opportunity management views less polished than native Salesforce for complex objects
- Cost justification difficult — ROI harder to demonstrate vs free/cheaper alternatives
- No VoIP/SMS capture — phone calls not recorded

**Selection notes**:
- **Pick Scratchpad when**: Team already has Gong for CI and wants a Salesforce productivity overlay, reps need a modern UI for daily pipeline management (sheets + Kanban), you want AI field updates without buying a full revenue platform, budget is tight ($19-49/user/mo vs Weflow $79 or Gong $100+)
- **Avoid Scratchpad when**: You need standalone forecasting (→ Weflow, Clari, Gong Forecast), you need a public API for custom integrations (→ Gong, Fireflies, Fathom), you use HubSpot or any non-Salesforce CRM, you need VoIP/SMS recording (→ Gong, Revenue.io), you need a standalone CI platform (→ Gong, Avoma), you need bot-free recording (→ Jamie, Granola, Krisp)

## Laserfocus

For deep platform coverage (module selection, pricing tiers, comparison with Scratchpad/Weflow), use `/sales-laserfocus`.

**Positioning**: Salesforce overlay that simplifies CRM data entry and pipeline management. Unlike Scratchpad (which bundles call recording, AI field updates, Hygiene Monitor) or Weflow (activity capture + CI + forecasting), Laserfocus is a pure UI simplification tool — Stacks, table views, bulk editing, Field Groups, and precache technology for sub-100ms interactions. YC W20, Berlin-based, 2-3 employees (YC lists status as "Inactive").

**Pricing (2026-04)**: Free $0 (2 stacks, 2 view imports, 3 field groups, 3-record bulk edit), Pro $30/user/mo (unlimited everything), Team custom (Salesloft/Outreach integration, signal-based tasks, org templates, dedicated CSM). YC companies get 20% off Team for 6 months.

**API**: No public API — no developer portal, no endpoints, no SDK, no webhooks.

**Integrations**: Salesforce (core, exclusive, bi-directional via precache). Salesloft/Outreach (Team only). Calendar and email sync (all plans). No Slack, no Zapier, no HubSpot.

**Known issues**:
- YC "Inactive" status — evaluate longevity risk before committing
- No collaboration features — must return to Salesforce or Slack
- No call recording, CI, or forecasting — pure UI overlay
- No mobile app
- Very limited integration surface
- security.laserfocus.io subdomain no longer resolving

**Selection notes**:
- **Pick Laserfocus when**: Team purely wants a cleaner Salesforce data entry interface, no need for call recording or CI, budget-conscious ($30 vs Scratchpad $49 Team), prefer local data caching (precache) over cloud-side sync, small team that values simplicity over feature depth
- **Avoid Laserfocus when**: You need call recording or CI (→ Scratchpad, Gong, Fathom), you need activity capture (→ Weflow), you need forecasting (→ Weflow, Clari), you need a public API (→ Gong, Fireflies), you use HubSpot or non-Salesforce CRM, you need collaboration features, you're concerned about vendor longevity (YC "Inactive")

## Noota

For deep platform coverage (all modules, recruitment automation, pricing breakdown, known issues, troubleshooting), use `/sales-noota`.

**Positioning**: AI meeting assistant + recruitment automation platform (Paris-based). Two product lines: **Noota 360** (productivity — meeting notes, email automation, knowledge base) and **Noota Talent** (recruitment — AI sourcing, screening agents, outreach sequences). Records online meetings (Zoom, Teams, Meet, Webex), phone calls (Aircall, Ringover), and in-person meetings via mobile. 200,000+ users across 5,000+ teams. Differentiator is the combined meeting intelligence + recruitment automation in one platform — most competitors do one or the other.

**Pricing (2026-04)**: Free $0 (300 min/mo, 1-month storage), Pro $19/user/mo annual ($29 monthly, 1,000 min/mo, up to 10 seats), Business $39/user/mo annual ($49 monthly, unlimited recording/seats, Zapier & API, analytics), Hiring Agent $199/user/mo annual ($299 monthly, 500 candidates + 500 screenings/mo), Enterprise custom (50+ licenses). Annual saves up to 50%.

**API**:
- Business+ plan required — no public API documentation found
- Auth: not publicly documented
- Zapier integration available on Business+ (triggers: meeting completed, summary generated)
- No documented webhooks, REST endpoints, or SDK
- Enterprise plan offers custom integrations

**Integrations**: 7 CRMs (HubSpot, Salesforce, Pipedrive, Zoho, Zendesk, Monday, Dynamics 360), 15 ATS platforms (Greenhouse, Bullhorn, SmartRecruiter, Workable, BambooHR, etc.), meeting platforms (Zoom, Teams, Meet, Webex), VoIP (Aircall, Ringover), productivity (Slack, Notion, OneNote, Gmail, Outlook, Google Drive, OneDrive), Zapier (Business+).

**Known issues (from G2/Capterra reviews)**:
- Transcription quality needs manual cleanup — numbers, percentages, and technical jargon frequently misinterpreted
- Can only record on Zoom, Teams, Meet, Webex, Aircall, Ringover — other platforms not supported
- Summary language detection sometimes fails — generates summaries in wrong language in multilingual teams
- Free plan has 1-month storage retention — export before it expires
- API/Zapier completely gated to Business+ ($39/mo) — no automation for Free/Pro users
- Mobile interface less polished than desktop
- Pricing considered expensive for transcription quality that still requires manual review
- Enterprise requires 50+ license minimum

**Selection notes**:
- **Pick Noota when**: You need meeting recording + recruitment automation in one platform, you're a recruiting team/agency wanting AI candidate screening and voice agents, you need EU-compliant data handling (GDPR, ISO 27001, SOC 2 Type II, SecNumCloud), you want ~20 customizable summary templates, you need broad ATS integration (15 platforms), or you want email inbox automation alongside meeting notes
- **Avoid Noota when**: You need a public webhook API for transcript pipelines (→ Fathom, Fireflies, Sembly), you need deep deal intelligence and CRM autofill (→ Sybill, Gong), you need conversation intelligence with coaching scorecards (→ Avoma, tl;dv, Gong), you need bot-free recording (→ Jamie, Granola, Krisp), you need real-time coaching during calls (→ Cluely, Hedy, Salesken), or you need a standalone meeting tool without the recruitment modules (→ Fathom, Fireflies, tl;dv)

---

## Dialpad

For deep platform coverage (all modules, API endpoints, call quality troubleshooting, pricing breakdown, known issues), use `/sales-dialpad`.

**Positioning**: AI-native unified communications platform (UCaaS + CCaaS) with built-in conversation intelligence. DialpadGPT (trained on 6B+ minutes of business conversations) powers real-time transcription, AI Recaps (post-call summaries + action items), AI Coaching Hub (sentiment analysis, scorecards, real-time coaching cards), and AI Agent (autonomous customer resolution). Not a dedicated note-taker — it's a full phone/video/SMS/contact center platform with AI features layered in. Closest comparison in this category: Revenue.io (Salesforce-native dialer + CI) or Aircall (cloud phone + integrations), not Gong or Fathom.

**Pricing (2026-04)**: Standard $15/user/mo (1 user, no CRM), Pro $25/user/mo (3+ users, CRM integrations, 24/7 support), Enterprise custom (100+ users, SSO, 99.9% SLA). Contact Center module priced separately. Annual billing saves ~40%.

**API**:
- Docs: `https://developers.dialpad.com`
- Type: REST
- Auth: API Key (`Authorization: Bearer {key}`) or OAuth 2.0
- OpenAPI spec: `https://dialpad.com/static/openapi/platform-v1.0.json`
- Python SDK: `pip install dialpad` (github.com/dialpad/dialpad-python-sdk, 15 stars)
- Key APIs: Stats (async report generation), SMS, Digital Engagement, AI Virtual Agent, Event Subscriptions, WFM
- Stats API pattern: POST to create report → wait 15-20s → GET to retrieve CSV
- Rate limits: Not published per-endpoint; retry on 429 with backoff

**Integrations**: 70+ including Salesforce, HubSpot, Zendesk (all Pro+ only), Microsoft Teams, Google Workspace, ServiceNow, Zoho, Front, Microsoft Dynamics. Zapier connector available but described as "complicated to get working."

**Known issues (from G2/Capterra/Trustpilot reviews)**:
- Call quality degrades on Wi-Fi-to-LTE handoff — one-way audio or dropped calls (#1 complaint)
- CRM integration requires Pro+ ($25/user/mo) — Standard has zero CRM support
- AI transcription struggles with accents and industry jargon — use Company Dictionary
- CRM sync (especially SMS logging) inconsistent on some connectors
- Mobile app less reliable than desktop
- Billing disputes after cancellation (Trustpilot)
- Standard plan limited to 1 user/1 office — effectively a solo plan
- Enterprise requires 100-user minimum

**Selection notes**:
- **Pick Dialpad when**: You need a unified phone + video + SMS + contact center platform with AI features built in, you want AI Recaps without adding a separate note-taker, you need a contact center with AI Agent for autonomous resolution, you want real-time coaching cards during live calls, you need 70+ integrations including Microsoft Teams embedding, or you're evaluating UCaaS + CCaaS in one vendor
- **Avoid Dialpad when**: You need a dedicated conversation intelligence tool with deep coaching analytics (→ Gong, tl;dv, Avoma), you need CRM autofill from calls (→ Sybill, Gong), you need bot-free meeting recording (→ Jamie, Granola, Krisp), you need a public webhook API for transcript pipelines (��� Fathom, Fireflies, Sembly), you need deep deal intelligence and revenue forecasting (→ Gong, Clari Copilot, Weflow), or you already have a phone system and just need AI notes (→ Fathom, Fireflies, tl;dv)

---

## Winn.ai

For deep platform coverage (playbook setup, CRM field mapping, real-time tracking, pricing breakdown, known issues), use `/sales-winn`.

**Positioning**: Revenue Execution Platform built for real-time playbook adherence during sales calls. Unlike traditional CI tools that analyze recordings after the call, Winn.ai operates via a Chrome extension overlay that tracks talking points live, checks off methodology items as they're discussed, and auto-captures data for CRM population. Proprietary "Vibe Selling" concept. Founded 2021 (Tel Aviv). Key differentiator: real-time in-call guidance and playbook enforcement, not post-call analytics. Sales-only — does not support CS, internal meetings, or general transcription.

**Pricing (2026-04)**: Pro $69/seat/mo (annual billing required, 14-day free trial), Enterprise custom (20+ seat minimum). No free tier. Pro includes unlimited meetings/playbooks, CRM auto-updates (25 fields), 35+ AI talking points, Slack updates, built-in methodology templates. Enterprise adds live coaching, live answers, AI battle cards, unlimited CRM fields, unlimited AI talking points, reporting & analytics, custom AI digests, in-meeting CRM visibility, opportunity creation, custom objects, SAML SSO (Okta), dedicated account manager.

**API**:
- No public API — no developer API, no webhooks, no SDKs
- All integrations are pre-built connectors only (Salesforce, HubSpot, Slack)
- No Zapier/Make support
- No programmatic data export capability

**Integrations**: Salesforce, HubSpot (CRM, auto-update fields); Zoom, Google Meet, Microsoft Teams (video, via Chrome extension); Slack (post-call notifications); Okta (SSO, Enterprise only); OpenAI (powers AI features).

**Known issues (from reviews and comparison articles)**:
- No video recording — cannot review calls later, no call library
- Virtual meetings only — no phone call or in-person meeting support
- CRM sync delays up to 15 minutes — not instant
- Transcription accuracy drops with technical jargon and accents
- Inconsistent speaker detection in multi-speaker technical calls
- Sales-only — no CS, support, or cross-functional meeting support
- Limited analytics on Pro (no multi-meeting insights, no keyword tracking)
- No G2 profile — limited independent review coverage

**Selection notes**:
- **Pick Winn.ai when**: You need real-time methodology enforcement during calls (not just post-call), reps consistently miss playbook talking points and you need live tracking, you want automated CRM field population from structured methodology (MEDDIC/BANT/SPICED), you need built-in methodology templates with minimal setup, you want AI meeting prep briefs and follow-up emails alongside playbook tracking, or you're evaluating real-time coaching tools (Enterprise)
- **Avoid Winn.ai when**: You need call recordings for coaching review (→ Gong, tl;dv, Avoma), you need a public API for custom integrations or data pipelines (→ Fathom, Fireflies, Gong), you need field/in-person sales support (→ Rilla, Siro, Omi), you need deep deal workspace and revenue intelligence (→ Gong, Sybill, Clari Copilot), you need cross-functional meeting support beyond sales (→ Fathom, Fireflies, Otter), you need a free tier or budget option under $50/mo (→ Fathom, MeetGeek, Colibri), or you need post-call coaching analytics rather than live guidance (→ Gong, Avoma, tl;dv)

---

## Circleback

For deep platform coverage (webhook setup, MCP server, CRM integration, plan comparison, known issues, troubleshooting), use `/sales-circleback`.

**Positioning**: AI meeting notes platform with cross-meeting search, action item tracking, and webhook-based workflow automations. Supports Zoom, Google Meet, Microsoft Teams, Slack huddles, and in-person recording. Offers both bot-based and botless recording modes. Key differentiator: MCP server for AI tool integration (Claude, ChatGPT, Cursor, Raycast) and HMAC-signed webhook API for custom automations. No coaching or methodology features — focused on meeting capture and downstream data flow.

**Pricing (2026-04)**: Individual $20.83/user/mo (annual) or $25/mo (monthly), Team $25/user/mo (annual) or $30/mo (monthly), Enterprise custom. No free tier — 7-day trial only (credit card required). Team plan adds shared meetings, Slack huddles, team automations, centralized billing, usage dashboard.

**API**:
- Webhook API: HMAC-SHA256 signed POST (`x-signature` header, `whsec_` prefix), payload includes meeting ID, notes (Markdown), action items (with assignee/status), transcript segments (speaker/text/timestamp), custom insights, recording URL (24hr expiry)
- MCP Server: `app.circleback.ai/api/mcp` — Streamable HTTP, OAuth auth. Claude/ChatGPT/Cursor/Raycast compatible.
- REST API: Swagger UI at `api.circleback.com` (JS-rendered, endpoints not publicly extractable)
- CLI: agent-friendly command-line access
- No Zapier/Make native modules — use webhook triggers

**Integrations**: HubSpot, Salesforce, Attio (CRM native); Google Calendar, Gmail, Outlook (calendar/email); Linear, Notion, Monday, Zoho (productivity); Slack (notifications + huddles on Team+); Zapier/Make (via webhooks).

**Known issues (from G2/review analysis)**:
- Speaker identification unreliable with overlapping speakers or conference rooms
- No customizable note templates — generic output only
- Recurring meetings may need manual approval per occurrence (auto-join not fully automatic)
- Billing/cancellation support response times slow — multiple emails needed
- iPhone app buggy (multiple users report issues)
- Recording URL expires after 24 hours — must download immediately for archival
- Only 3 G2 reviews as of 2026 — limited independent review coverage

**Selection notes**:
- **Pick Circleback when**: You need cross-meeting AI search with webhook-based automations, you want both bot-based and botless recording options, you need Slack huddle recording (Team plan), you want MCP server integration for AI-powered workflows (Claude/Cursor/Raycast), you need in-person recording via mobile alongside virtual meetings, your CRM is HubSpot/Salesforce/Attio
- **Avoid Circleback when**: You need a free tier (→ Fathom, tl;dv, MeetGeek), you need coaching or methodology scorecards (→ tl;dv, Avoma, Gong), you need customizable note templates (→ tl;dv, Granola, MeetGeek), you need a full REST API for custom data pipelines (→ Fathom, Fireflies, Gong), you need deal intelligence or revenue forecasting (→ Gong, Clari Copilot, Sybill)

---

## Attention

For deep platform coverage (API endpoints, MCP server, workflow builder, coaching scorecards, CRM auto-update, pricing tiers, known issues, troubleshooting), use `/sales-attention`.

**Positioning**: AI-native conversation intelligence and revenue orchestration platform. Records calls across Zoom/Meet/Teams, automates CRM updates, generates coaching scorecards (MEDDIC/BANT/custom), provides real-time battlecards during live calls, and offers a no-code workflow builder. Claims more integrations (200+) than any CI competitor. Positioned below Gong on price, above most mid-market tools on features. G2 4.9 stars (~15 reviews).

**Pricing (2026-04, best-effort from third-party reviews — not publicly listed)**: Starter ~$59/user/mo (call recording, transcription, basic AI coaching), Professional ~$149/user/mo (advanced coaching, custom scorecards, deeper analytics), Enterprise ~$399/user/mo (custom AI agents, advanced integrations, premium support). Free trial available, no permanent free tier.

**API**:
- Docs: `https://docs.attention.com` (OpenAPI spec at `/api-reference/openapi.json`)
- Base URL: `https://api.attention.tech/v2`
- Auth: Bearer token via `Authorization: Bearer API_KEY` header (Admin-scoped — manage via Settings → Organization → API Keys)
- Key endpoints:
  - `GET /conversations` — list conversations with filters (date, participants, teams, status, pagination)
  - `GET /conversations/{id}` — get conversation details (transcription, participants, metadata)
  - `POST /conversations/import` — import from external sources (Gong, Salesforce)
  - `POST /ask_attention/v2` — query insights across all conversations
  - `POST /createScorecardResult` — score a conversation
  - `POST /snippets` — create shareable clip
  - `GET /organizations/users`, `POST /organizations/users` — manage users
  - `GET /teams`, `GET /teams/{id}/members` — team management
  - SCIM 2.0 provisioning (Okta, Azure AD)
- MCP server: https://github.com/highgravitas/attention-mcp (search calls, analyze deals, review scorecards via Claude/ChatGPT)

**Rate limits**: 429 responses when exceeded — specific numbers not publicly documented. Contact account manager for increases.

**Integrations**: Zoom/Meet/Teams (video), Salesforce/HubSpot (CRM, native 2-way sync), Gmail/Outlook (email), Slack (notifications), Aircall/Dialpad (dialer), Apollo/Clay (enrichment), Zapier (automation), Cal.com/Calendly (scheduling), Asana/ClickUp/Confluence (PM), Airtable/Box/Dropbox (storage), SCIM/SSO (provisioning). 200+ total.

**Known issues (from G2/review analysis)**:
- CRM sync can bug out intermittently — fields don't update on some calls, requires checking workflow run logs
- Insight prompt customization limited — users want more control over AI extraction
- AI agent features (Agent Builder) still maturing — bugs reported especially in complex automations
- Slow insight loading on complex calls — not real-time for all features
- Pricing hidden behind sales call — hard to evaluate without committing to a demo
- Only ~15 G2 reviews despite 4.9 rating — limited independent review coverage

**Selection notes**:
- **Pick Attention when**: You want real-time battlecards during live calls, you need 200+ integrations out of the box, you want a no-code workflow builder for post-call automations, you need coaching scorecards with MEDDIC/BANT/custom frameworks, you want an MCP server for AI assistant integration, you're looking for a Gong alternative at a lower price point
- **Avoid Attention when**: You need a free tier (→ Fathom, tl;dv, MeetGeek), you need deep behavioral/body language insights (→ Sybill Buyer EQ), you want transparent self-serve pricing (→ Fathom, Fireflies, tl;dv), you need a large independent review base for vendor evaluation (→ Gong, Chorus), you need a public REST API with documented rate limits (→ Fathom, Fireflies, Gong)

## Rafiki

For deep platform coverage (AI agents, call scoring frameworks, CRM sync, deal intelligence, role-play, pricing tiers, known issues, troubleshooting), use `/sales-rafiki`.

**Positioning**: AI-powered conversation + revenue intelligence positioned as the most affordable Gong alternative. Claims 99% of Gong's features at 25% of the price. Squad of AI agents (Notetaking, Coaching, Follow-Up, CRM Sync, Revenue, Role Play) handles recording, scoring, CRM updates, and deal intelligence. Targets SMB and mid-market teams. G2 4.8 stars (~150 reviews), 500+ revenue teams.

**Pricing (2026-04, from public pricing page)**: Free (recording + transcription + summaries), Starter $19/user/mo annual ($24 quarterly, up to 3 users, 2K min/mo transcription), Premium $49/user/mo annual ($59 quarterly, unlimited, scoring, deal dashboard), Enterprise custom (API, in-house deployment). 14-day free trial, no CC.

**API**: Enterprise-only — not publicly documented. No public API for Starter or Premium plans. No webhooks documented for non-Enterprise. No MCP server.

**Integrations**: Zoom/Meet/Teams (recording), Salesforce/HubSpot/Zoho/Pipedrive/Freshworks/Monday.com (CRM), Aircall/OpenPhone (dialer), Slack (notifications), Salesloft (marketplace partner), Google/Outlook Calendar (auto-detect).

**Known issues (from G2/review analysis)**:
- Starter plan's 2,000 min/mo transcription cap can surprise high-volume teams — recordings stop being transcribed mid-month
- CRM field auto-capture (MEDDIC/BANT/SPIN) is Premium-only — Starter users only get summary sync
- Gen AI Search and Reports use add-on credits on Premium — not fully unlimited
- No public API or webhook support below Enterprise — limits automation options
- Smaller review base (~150 G2 reviews) compared to Gong (5,000+) or Chorus (3,000+)
- Role Play Agent quality varies — may not match purpose-built roleplay tools (Solidroad, SecondBody)

**Selection notes**:
- **Pick Rafiki when**: You want Gong-level features (scoring, coaching, CRM sync, deal intelligence) at $19-49/user/mo, your team is 2-15 reps, you use Salesforce/HubSpot/Zoho/Pipedrive, you don't need a public API, you want transparent self-serve pricing, you need 55+ language transcription
- **Avoid Rafiki when**: You need a public API for custom integrations (→ Gong, Fireflies, Fathom), you need real-time in-call coaching (→ Cluely, Balto, Colibri), you need deep behavioral/body language analysis (→ Sybill), you need enterprise-scale deployment with SSO/SCIM (→ Gong), you have more than 3 users but only want to pay $19/seat (Starter caps at 3 users)

## Proshort

For deep platform coverage (AI Roleplay, CRM auto-sync, Deal Agents, Skill Intelligence Dashboard, pricing tiers, known issues, troubleshooting), use `/sales-proshort`.

**Positioning**: Enablement-first revenue intelligence platform that bridges call insights and contextual coaching. Converts call analysis into real-time coaching moments — in-call cues, AI Roleplay for onboarding, Deal Agents for automated guidance, Skill Intelligence Dashboard for rep-level performance scoring. Positioned as a Gong alternative emphasizing coaching/enablement over pure analytics. Founded 2022, $8M seed, Cupertino CA + Bangalore, 100+ revenue teams.

**Pricing (2026-04, from homepage — pricing page 404)**: Professional $75/user/mo (recording, transcription, AI coaching, CRM sync, Deal Agents, Roleplay, Slack alerts), Enterprise custom (dedicated support, 99.9% SLA). No free tier. No free trial documented.

**API**: No public API. No webhooks. No MCP server. All integrations are native.

**Integrations**: Zoom/Meet/Teams (recording), Salesforce/HubSpot/Zoho (CRM auto-sync), Gmail/Outlook (email signal tracking), Google/Outlook Calendar (meeting detection), Slack (deal risk alerts), Gong (layer coaching on top of existing Gong CI).

**Known issues (from research — limited review base)**:
- No public API or webhooks — cannot build custom integrations or pipe data to a warehouse
- No free tier or trial documented — requires sales conversation to evaluate
- Pricing page returns 404 — $75/user/mo from homepage only, verify with sales
- No G2 reviews found — limited independent social proof (rely on case studies: RateGain, Increff, Aviz Networks)
- "TodoFusion" appears in blog post titles — CMS artifact, not a separate product
- AI Roleplay quality depends on snippet library — thin call library produces generic scenarios

**Selection notes**:
- **Pick Proshort when**: You want coaching/enablement as the primary CI outcome (not just analytics), you need AI Roleplay for rep onboarding and practice, you want contextual in-call cues and Deal Agents, you're on Salesforce/HubSpot/Zoho and want auto-sync with 100% field fill, you want SOC 2 + ISO 27001 + GDPR + HIPAA compliance, you're looking for a Gong alternative under $100/user/mo with stronger coaching focus
- **Avoid Proshort when**: You need a public API for custom data pipelines (→ Gong, Fireflies, Fathom), you want a free tier to trial (→ Fathom, Rafiki, tl;dv), you need transparent self-serve pricing (→ Rafiki, Fathom), you need a large independent review base (→ Gong, Chorus), you need Zapier/Make automation (→ Fireflies, tl;dv, Jamie), you need the deepest raw analytics/deal intelligence (→ Gong), you want the cheapest mid-market CI (→ Rafiki $19-49)

---

## Salesroom

For deep platform coverage (real-time coaching setup, battle cards, buyer engagement scoring, CRM sync, competitive comparison), use `/sales-salesroom`.

**Positioning**: AI-powered video conferencing platform built from scratch for sales teams. Unlike bot-based CI tools (Gong, Fathom, Fireflies) that join existing Zoom/Meet/Teams calls, Salesroom IS the meeting platform — reps send a Salesroom meeting link and conduct the entire call inside Salesroom's interface. This gives native access to real-time coaching, live buyer engagement scoring, and battle cards without any third-party bot. Closest competitor is Demodesk (also its own meeting platform). Founded by Roy Solomon (ex-Applause/Vista Equity) and Daria Danilina (ex-Dropbox/HSBC). $8.5M seed (June 2022) from Craft Ventures. Boston-based.

**Pricing (2026-04)**: Free (limited), Pro $49/mo (full coaching + analytics + CRM sync), Enterprise custom (teams). Specific feature limits per plan not publicly documented.

**API**: No public API. No webhooks. No MCP server. No Zapier/Make modules. All automation is through native integrations only.

**Integrations**: HubSpot (marketplace OAuth app — meeting summaries, notes, engagement data to contact timeline), Salesforce (events on opportunity/lead/contact), Zoom (calendar integration), Slack (highlights + summaries), Gong (push recordings to Gong for teams using Gong as CI platform of record).

**Known issues (from research — niche startup, limited review base)**:
- Buyer adoption friction is the primary risk — prospects must join an unfamiliar video platform instead of Zoom/Teams
- No public API, webhooks, or MCP — cannot programmatically access meeting data, transcripts, or engagement scores
- SSL certificate on salesroom.com has been intermittently broken — doesn't affect the meeting platform but may concern evaluators
- Small team and limited funding ($8.5M seed, 2022) — evaluate vendor risk for enterprise deployment
- Limited integration ecosystem (HubSpot, Salesforce, Zoom, Slack, Gong only)
- Feature limits per plan not well-documented publicly

**Selection notes**:
- **Pick Salesroom when**: You want real-time coaching and buyer engagement scoring as a native video conferencing feature (not a bolt-on), you want a simpler tech stack (one tool replaces Zoom + note-taker), your buyers are SMB/startup and won't mind a different meeting link, you want live battle cards and objection handling during calls, budget is tight compared to Gong ($49/mo vs ~$1,200/user/yr), you can tolerate a niche startup's maturity level
- **Avoid Salesroom when**: Your buyers are enterprise and expect Zoom/Teams (adoption friction kills deals), you need API/webhook access for data pipelines (→ Gong, Fireflies, Fathom), you need a broad integration ecosystem (→ Gong, tl;dv, Fireflies), you want post-call analytics depth and revenue intelligence (→ Gong), you need proven scale and vendor stability (→ Gong, Avoma), you want real-time coaching as an overlay on existing Zoom without changing platforms (→ Cluely)
