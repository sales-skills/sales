# SMB & Budget Note-Takers — Platform Reference

Budget-friendly AI note-takers and transcription tools. Platforms under ~$50/user/month with free tiers or low entry points. For the comparison table across all categories, see `platforms.md`.

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

## VoiceToNotes

For deep platform coverage (pricing tiers, AI features, OCR, export options, Chrome extension reliability), use `/sales-voicetonotes`.

**Positioning**: Ultra-affordable personal voice-to-text app with HIPAA compliance. Not a meeting bot — it's a personal voice recorder with AI enhancement (summaries, grammar, custom prompts, OCR). Wins on price ($1/mo unlimited) and healthcare compliance. Loses on integrations (zero native), team features, and Chrome extension reliability.

**Pricing (2026-04)**: Free (10 notes/day, 300 min/mo, 10 AI ops/day), Pro Monthly $1/mo (unlimited), Pro Annual $10/yr (unlimited + API + bulk export), Enterprise custom.

**API**: HIPAA-ready speech-to-text API claimed, but no public technical documentation. API access gated to Pro Annual and Enterprise. No endpoints, auth methods, or SDKs publicly documented.

**Integrations**: None. No Zapier, no CRM connectors, no webhooks, no Make/n8n. Export only: DOCX, PDF, TXT, CSV (manual download).

**Key gotchas**:
- Chrome extension drops recordings during long sessions ("note without audio")
- No self-service subscription cancellation
- Pricing shown inconsistently across the site ($1/mo vs $5/mo vs $7/mo)
- No bulk export on free or Pro Monthly

**Selection notes**:
- **Pick VoiceToNotes when**: Budget is the primary concern, you need HIPAA-compliant voice transcription for personal use, you want the simplest possible voice-to-text without meeting bots, or you need OCR alongside voice notes
- **Avoid VoiceToNotes when**: You need CRM integration (→ Fathom, Fireflies, Gong), you need Zapier/automation (→ Fireflies, Tactiq, Notta), you need team collaboration features (→ Otter, Fireflies), you need meeting bot recording (→ Fathom, Fireflies, Avoma), or you need reliable long-session recording (Chrome extension issues)

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

## Jamy.ai

For deep platform coverage (API setup, translation configuration, calendar auto-join troubleshooting, HubSpot CRM sync, pricing tiers), use `/sales-jamy`.

## Sonix

For deep platform coverage (API endpoints, pricing tiers, translation/subtitle workflows, accuracy optimization), use `/sales-sonix`.

**Positioning**: Upload-only AI transcription, translation, and subtitling platform. Not a live meeting note-taker — you upload audio/video files and get back transcripts in 53+ languages. Targets media producers, legal teams, researchers, podcasters, and enterprises needing batch transcription with compliance (SOC 2 Type 2, HIPAA). Claims 99% accuracy.

**Pricing (2026-04)**: Standard $10/hr pay-as-you-go (single user, 10 GB storage, no API). Premium $22/seat/mo ($16.50 annual) + $5/hr (API, custom dictionary, 100 GB storage). Enterprise custom (5+ seats, SSO/SAML, audit logs, 1 TB+ storage). AI Analysis (summaries, chapters, sentiment) is $5/mo add-on on Premium, included on Enterprise. Free trial: 30 min, no credit card.

**API**:
- Docs: `https://sonix.ai/docs/api`
- Base URL: `https://api.sonix.ai/v1`
- Auth: Bearer token via `Authorization` header
- Key endpoints:
  - `POST /media` — submit media for transcription (100 MB direct upload or URL)
  - `GET /media/{id}/transcript` — retrieve transcript (text, SRT, VTT, JSON, Avid DS)
  - `POST /media/{id}/translations` — request translation
  - `POST /media/{id}/summarizations` — generate summary/chapters/sentiment
  - `POST /media/{id}/video_burn_ins` — embed subtitles into video
  - Folder, user, and share management endpoints
- Webhooks: Enterprise only (transcription completion, translation completion)
- Rate limits: not publicly documented
- SDKs: none documented

**Integrations**: Video conferencing imports (Zoom, Teams, Meet, Webex, Loom — file import, not live join). Cloud storage (Dropbox, Google Drive, OneDrive, Box). CRM (Salesforce). Automation (Zapier). Media production (Adobe Premiere Pro, Final Cut Pro X, Adobe Audition, Avid Media Composer). Research/QDA (Atlas.ti, NVivo, MaxQDA). Legal (Clio, Relativity).

**Known issues (from G2/Capterra/review sites)**:
- No live/real-time transcription — upload-only, cannot join meetings
- Speaker diarization errors — AI over-segments speakers, creating phantom labels
- Pricing complexity — hybrid seat + per-hour model confuses new users
- Struggles with accents and conversational speech
- Excessive filler word transcription and punctuation errors
- Slow uploads for large files (>100 MB)
- No mobile app for the core transcription workflow

**Selection notes**:
- **Pick Sonix when**: You need batch transcription of uploaded files (not live meetings), multi-language translation is important, you need SRT/VTT subtitles or video burn-in, compliance matters (SOC 2, HIPAA), or you have media production workflows (Premiere Pro, Final Cut Pro integration)
- **Avoid Sonix when**: You need live meeting recording (→ Fathom/Fireflies/Otter), you want CRM integration beyond Salesforce (→ Fireflies/Avoma), you need coaching or conversation intelligence (→ Gong/Avoma/tl;dv), or your volume is low and you want to avoid per-hour charges (→ Fathom free tier)

## Jamy.ai

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

## Temi

**Positioning**: Budget AI transcription service owned by Rev, using Rev's automated speech recognition engine at $0.25/min. Upload-only (not a live meeting tool). English only. Simplest possible transcription: upload file, get transcript, pay per minute. No subscription tiers, no plan-gated features beyond API access. Mobile app (iOS/Android) for recording. Target audience: individuals and small teams needing cheap, quick English transcription.

**Pricing (2026-04)**: $0.25/min pay-as-you-go only ($15/hr). No subscription option. Free trial with limited credits. Rounded up to nearest minute.

**API**:
- Docs: `https://www.temi.com/api/reference/v1`
- Base URL: `https://api.temi.com/v1`
- Auth: Bearer token — API key from Temi developer page
- Endpoints: Submit Job (`POST /jobs`), Get Job (`GET /jobs/{id}`), List Jobs (`GET /jobs`), Delete Job (`DELETE /jobs/{id}`), Get Transcript (`GET /jobs/{id}/transcript`), Share Editor (`POST /jobs/{id}/share`), Get Account (`GET /account`)
- Transcript formats: text/plain, application/json, application/msword, application/pdf
- Webhooks: callback_url on job submission — POST on completion/failure
- Rate limits: not publicly documented
- Errors: RFC 7807 problem details format

**Integrations**: Zapier (submit jobs, trigger on completion — pre-built Zaps for Gmail, Google Drive, YouTube, Google Forms). Make. Pipedream. No native CRM connectors.

**Known issues (from reviews and complaints)**:
- Accuracy drops sharply with non-American English accents (most common complaint)
- No custom dictionary — same errors repeat on every transcription
- Mobile app credits don't sync with web account — persistent billing issue
- Price doubled from $0.10 to $0.25/min with no accuracy improvement
- Some users report double charges and frozen download pages

**Selection notes**:
- **Pick Temi when**: You need a one-off cheap English transcription with zero commitment, you want the simplest possible API for a basic transcript pipeline, or you're already in the Rev ecosystem
- **Avoid Temi when**: You need non-English transcription (→ Sonix, TranscribeMe, Transkriptor), you need high accuracy with accents (→ Sonix with custom dictionary, TranscribeMe human tier), you transcribe regularly (Sonix is cheaper per hour at any volume), you need translation or subtitles (→ Sonix), you need compliance certifications (→ Sonix SOC 2/HIPAA, TranscribeMe HIPAA, Verbit SOC 2/HIPAA), or you need live meeting recording (→ Fathom, Fireflies, Otter)

---

## Transkriptor

For deep platform coverage (API endpoints, meeting bot setup, custom vocabulary, pricing tiers, troubleshooting), use `/sales-transkriptor`.

**Positioning**: Budget AI transcription platform with 100+ language support and meeting recording via bot (Zoom/Meet/Teams). Combines batch file transcription with live meeting capture, AI summaries, subtitle generation (SRT/VTT), sentiment analysis (Team plan), and a knowledge base for querying across transcripts. Target audience: content creators, students (50% education discount), and small-to-mid teams needing multilingual transcription at competitive prices. Also operates sister products Speaktor (TTS) and Eskritor (AI writing).

**Pricing (2026-04)**: Lite $9.99/mo (300 min), Pro $19.99/mo or $99.99/yr (2,400 min, calendar sync, meeting bot, AI knowledge base), Team $30/seat/mo or $240/seat/yr (3,000 min/seat, sentiment analysis, speaker analytics, custom bot branding), Enterprise custom (API access, priority support). Bulk plans: 100 hrs $60/mo, 250 hrs $150/mo, 500 hrs $300/mo, 1,000 hrs $600/mo — all 50% off annually. Unused minutes do NOT roll over.

**API**:
- Docs: `https://developer.transkriptor.com/`
- Base URL: `https://api.tor.app/developer/`
- Auth: Bearer token — API key from account settings
- Endpoints: Get Upload URL, Upload File, Initiate Transcription, Get Transcription Result, Export (pdf/srt/txt/docx), List Files, Get/Delete File, Recognize Speakers, Get Summary, AI Chat, Webhooks (CRUD), Custom Vocabulary (CRUD), Text to Speech, Get Folders, Get Users
- Rate limit: 1,000 req/min
- **Plan gate: Enterprise only** — no API access on Lite, Pro, or Team

**Integrations**: Zoom/Meet/Teams (bot auto-join via calendar sync), Google Drive, Dropbox, OneDrive, SharePoint, Notion, Google Docs, OneNote, Slack, Gmail, Outlook, Trello, HubSpot/Salesforce/Zoho (listed but depth disputed in reviews). Zapier (8,000+ apps). Make (community).

**Known issues (from reviews and complaints)**:
- Auto-renewal billing surprises — most common complaint on Trustpilot, difficult cancellation
- Non-English accuracy significantly below English (Portuguese, Bulgarian specifically called out)
- Speaker diarization weaker than competitors for overlapping speech
- UI and export options change without notice, breaking workflows
- CRM integration depth disputed — verify actual field-mapping before relying on it
- Custom vocabulary doesn't apply retroactively to already-transcribed files

**Selection notes**:
- **Pick Transkriptor when**: You need budget multilingual transcription (100+ languages) with meeting recording, you want meeting bot + batch upload in one tool, you need subtitle generation at competitive prices, or you're a student (50% discount)
- **Avoid Transkriptor when**: You need API access without Enterprise pricing (→ Sonix Premium, Fathom, Fireflies), you need deep CRM field-mapping (→ Fathom Business, Gong), you need 99% accuracy for critical recordings (→ TranscribeMe human tier), you need English-only batch transcription at the lowest price (→ Temi $0.25/min), or you need compliance certifications (→ Sonix SOC 2/HIPAA, TranscribeMe HIPAA)
