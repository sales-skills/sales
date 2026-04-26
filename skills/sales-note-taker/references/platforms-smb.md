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

## Meetily

For deep platform coverage (setup, model selection, deployment, troubleshooting), use `/sales-meetily`.

**Positioning**: Open-source (MIT license), privacy-first AI meeting assistant. 100% local processing — audio never leaves the device. Bot-free recording via system audio capture. 121K+ downloads, 11K+ GitHub stars. Positions as self-hosted alternative to Otter.ai, Granola, Fathom.

**Pricing (2026-04)**: Community free (MIT), Pro $10/user/mo ($120/yr), Enterprise custom. 14-day free trial for Pro.

**API**:
- Local FastAPI server only — `http://localhost:5167/docs` (Swagger UI)
- No cloud API — all processing on-device
- Endpoints for uploading, processing audio, and retrieving transcripts/summaries
- No authentication (local server)

**Transcription models**:
- NVIDIA Parakeet Lightning (default, 4x faster than Whisper, English-focused)
- OpenAI Whisper via Whisper.cpp (tiny/base/small/medium/large-v3, 99+ languages)
- Hardware acceleration: Apple Metal + CoreML, NVIDIA CUDA, AMD/Intel Vulkan

**Summarization providers**: Ollama (fully local), Claude, Groq, OpenRouter, any OpenAI-compatible endpoint

**Integrations**: Currently limited — LLM providers + export (Markdown/PDF/DOCX). CRM integrations (Salesforce, HubSpot), Slack, Notion, Jira planned but not shipped.

**Known issues (from GitHub Issues)**:
- Parakeet Lightning must be installed even if using another model — blocks recording without it
- Whisper model selection can cause "processing recording" hang — switching to Parakeet resolves
- macOS microphone permissions may not prompt — manual grant required in System Settings
- Audio device selection not saved after switching tabs (bug in some versions)
- System requirements: 8GB RAM minimum, 16GB recommended, GPU acceleration strongly helps

**Selection notes**:
- **Pick Meetily when**: Data sovereignty and privacy are hard requirements (HIPAA/GDPR by architecture), you want self-hosted on your own infrastructure, you need open-source with MIT license, you want fully offline transcription after initial setup, or you're a developer wanting extensibility and custom integrations
- **Avoid Meetily when**: You need CRM integration today (→ Fathom Business, Fireflies Business), you need cloud API for external integrations (→ Fathom, Fireflies, Gong), you need zero-setup experience (→ Fathom free tier, Tactiq), you need mobile recording (→ Wave, Omi, Speakwise), or your team lacks technical comfort with desktop app installation and model configuration

---

## Char

For deep platform coverage (setup, STT/LLM provider selection, plugin SDK, automation hooks, CLI, privacy/telemetry, GPL licensing), use `/sales-char`.

**Positioning**: Open-source, bot-free, local-first AI meeting notepad. Captures system audio without joining meetings as a participant. Stores everything as plain markdown files in a local SQLite database. Formerly known as Hyprnote (rebranded February 2026). YC S25. 8.3k GitHub stars. GPL-3.0 license.

**Pricing (2026-04)**: Free (on-device transcription, BYOK, chat, templates), Lite $8/mo (cloud STT + LLM, speaker ID, integrations, cloud sync, shareable links), Pro $25/mo or $250/yr (advanced sharing controls with view tracking, team features, selective sync, Google Calendar), Team (custom).

**API**:
- **Public REST API**: "Coming soon" — not yet available
- **CLI**: `char` command with `db templates` CRUD (list, get, upsert, delete), `completions`, `desktop` subcommands
- **Automation hooks**: `hooks.json` at `~/Library/Application Support/hyprnote/hooks.json`. Two events: `beforeListeningStarted`, `afterListeningStopped`. Scripts receive `--resource-dir`, `--app-hyprnote`, `--app-meeting` flags. Multiple commands per event run in parallel.
- **Plugin SDK**: Tab-based UI extensions. Register via `window.__char_plugins.register()`. React-based. 51 built-in plugins. Install path: `~/Library/Application Support/com.hyprnote.dev/plugins/`
- **Deeplinks**: Native deep-linking support
- **MCP**: Currently internal (support chat only), not exposed for external tools

**Transcription providers**:
- Local: Cactus engine (on-device, no API keys)
- Cloud (10 providers, BYOK): Deepgram, AssemblyAI, Soniox, Fireworks, OpenAI (batch), Gladia, ElevenLabs, DashScope/Qwen3-ASR, Mistral/Voxtral, pyannoteAI (batch)
- 45+ languages across providers

**LLM providers**: OpenRouter (ZDR routing), BYOK (OpenAI, Anthropic, Google, Azure OpenAI, Azure AI Foundry), local (Ollama, LM Studio)

**Integrations**: Zoom, Google Meet, Teams, Webex. Apple Calendar/Contacts. Obsidian (via local-rest-api plugin). HubSpot, Salesforce, Slack, Notion on roadmap (not shipped).

**Known issues (from HN Launch thread + GitHub)**:
- Speaker identification fails in group meetings — team acknowledged feature is still maturing
- App won't open on some Mac models (M4 Pro Mini) — AudioTap API incompatibility
- "Local-first" but ships with PostHog analytics and Sentry error tracking — opt-out exists but not surfaced
- GPL-3.0 license concerns for corporate adoption (copyleft implications)
- macOS only — Windows/Linux scheduled Q2 2026
- No public API — automation limited to hooks and CLI
- CRM integrations listed as "coming soon" — not available today

**Selection notes**:
- **Pick Char when**: Data ownership and local-first is a hard requirement, you want open-source with a large plugin ecosystem (51 plugins), you prefer markdown output over proprietary formats, you want flexibility in STT providers (10 cloud options + local), you need bot-free capture without meeting participants noticing, or you're a developer wanting to build custom plugins/hooks
- **Avoid Char when**: You need CRM integration today (→ Fathom Business, Fireflies Business), you need a public API for external integrations (→ Fathom, Fireflies, Gong), you need reliable speaker identification in group meetings (→ Fathom, Fireflies), you need Windows/Linux support now (→ Meetily), your legal team objects to GPL-3.0 (→ Meetily with MIT license), or you need enterprise-grade QA/coaching features (→ Gong, Avoma)

---

## Amical

For deep platform coverage (Whisper model selection, Ollama/OpenRouter LLM setup, context-aware formatting, troubleshooting), use `/sales-amical`.

**Positioning**: Open-source (MIT license), local-first AI dictation app. Push-to-talk voice-to-text — hold `fn` key, speak, release, and formatted text auto-pastes into the active application. Context-aware formatting detects the active app and adjusts tone (professional for Gmail, casual for Slack, clean for Cursor). Free alternative to Wispr Flow ($20/mo) and Superwhisper. 1.2k GitHub stars. **Not a meeting recorder** — this is a typing replacement tool. For passive meeting transcription, use Meetily, Char, or a dedicated note-taker.

**Pricing (2026-04)**: Completely free. No paid tiers, no credits, no usage caps. MIT license.

**API**: None. No public API, no webhooks, no developer portal, no CRM connectors, no Zapier. Local desktop app only.

**STT models**: Local Whisper via whisper.cpp — Tiny (78 MB), Base (148 MB), Small (488 MB), Medium (1.5 GB), Large v3 (3.1 GB), Large v3 Turbo (1.5 GB). Download in Settings → AI Models → Speech.

**LLM formatting**: Ollama (fully local) or OpenRouter (cloud, BYOK). Required for context-aware formatting — without it, you get raw Whisper transcription only.

**Integrations**: Context-aware pasting into any application (Gmail, Slack, Notion, Discord, Cursor, Instagram, WhatsApp, Jira). No native tool integrations.

**Known issues (from GitHub Issues)**:
- Can't switch microphones in-app (#137) — set preferred mic as OS system default
- Japanese/CJK text formatting produces wrong style or punctuation (#111, #88)
- Context-aware formatting requires LLM configured (#110) — not obvious during onboarding
- Real-time meeting transcription is planned but not shipped (#65)
- Non-QWERTY keyboard layouts may conflict with shortcuts (#89)
- MCP voice commands are planned but not shipped

**Selection notes**:
- **Pick Amical when**: You want free, open-source (MIT) voice dictation with zero subscription cost, privacy-first local processing matters, you want context-aware formatting that adapts to each app automatically, you're comfortable configuring Whisper models and Ollama, or you need dictation in 100+ languages
- **Avoid Amical when**: You need passive meeting recording (→ Meetily, Char, Fathom), you need CRM integration (→ Fathom Business, Fireflies Business), you need polished zero-setup UX (→ Wispr Flow), you need cross-device sync (→ Wispr Flow), you need an API for custom integrations (→ Fathom, Fireflies, Gong), or you need continuous transcription without push-to-talk (→ Otter, Tactiq)

---

## Handy

For deep platform coverage (STT model selection, CLI flags, Bluetooth troubleshooting, Linux setup), use `/sales-handy`.

**Positioning**: Open-source (MIT-compatible), cross-platform push-to-talk speech-to-text desktop app built with Tauri (Rust + React/TypeScript). Press a keyboard shortcut, speak, release, and Handy pastes transcribed text into the active application. Dual STT engine: Whisper (GPU-accelerated) and Parakeet V3 (CPU-only with automatic language detection). 20.4k GitHub stars, 1.7k forks. Positioned as "the most forkable STT app" — developer extensibility over polish. Free alternative to Wispr Flow ($20/mo) and Superwhisper. **Not a meeting recorder** — this is a typing replacement tool. For passive meeting transcription, use Meetily, Char, or a dedicated note-taker.

**Pricing (2026-04)**: Completely free. No paid tiers, no credits, no usage caps. Open-source.

**API**: None. No public API, no webhooks, no developer portal, no CRM connectors, no Zapier. CLI flags (`--toggle-transcription`, `--cancel`, `--start-hidden`) are the only external control surface.

**STT models**:
- **Whisper** (OpenAI): Small (~500 MB), Medium (~1.5 GB), Turbo (~1.5 GB), Large (~3 GB). GPU-accelerated. Known crash issues on some Windows/Linux GPU configs.
- **Parakeet V3** (NVIDIA): CPU-optimized, ~5x real-time speed, automatic language detection. Best for laptops without dedicated GPUs.

**Voice Activity Detection**: Silero VAD filters silence before STT processing — configurable sensitivity.

**Install**:
- macOS: `brew install --cask handy` (Intel + Apple Silicon)
- Windows: `winget install cjpais.Handy` (x64, requires WebView2)
- Linux: Download from GitHub releases (x64, requires `wtype` or `dotool` for Wayland)

**Integrations**: None. Auto-pastes into any application via OS-level text insertion. No native tool integrations.

**Known issues (from GitHub Issues and HN)**:
- Bluetooth headset latency — 1-2 second delay before transcription with AirPods and other wireless audio. Developer acknowledged.
- Whisper crashes on certain Windows/Linux GPU configs — fall back to Parakeet V3
- macOS Tahoe beta crashes reported
- Linux recording overlay disabled by default due to compositor focus issues
- No custom dictionary/vocabulary support (feature request)
- No LLM post-processing — raw STT output only, no grammar correction or formatting

**Selection notes**:
- **Pick Handy when**: You want free, open-source push-to-talk dictation, you need cross-platform support including Linux, you want Parakeet V3 CPU-only option without GPU, you're a developer wanting to fork/extend a Tauri/Rust STT app, raw transcription speed matters more than polished formatting, or you want the largest open-source STT community (20k+ stars)
- **Avoid Handy when**: You want context-aware formatting or grammar correction (→ Amical), you need passive meeting recording (→ Meetily, Char, Fathom), you need CRM integration (→ Fathom Business, Fireflies Business), you need an API for custom integrations (→ Fathom, Fireflies, Gong), you use Bluetooth headphones primarily (known latency issue), or you need a polished zero-setup UX (→ Wispr Flow)

## Soz AI

For deep platform coverage (features, pricing, recording modes, language support, subtitle tools), use `/sales-sozai`.

**Positioning**: Budget mobile-first transcription app. Strongest for individual professionals who need affordable high-volume transcription on iOS/Android with 100+ language support and YouTube URL paste. Not a meeting bot — records from the device microphone. No API, no CRM, no team features.

**Pricing (2026-04)**: Free (30 min, no credit card required), Unlimited $9.99/mo. No team plans documented.

**API**: None. No public API, no webhooks, no developer portal, no CRM connectors, no Zapier.

**Key features**:
- 100+ language transcription with automatic detection
- Speaker diarization for up to 10 speakers
- YouTube URL paste transcription (direct — no download needed)
- AI note-taking with topic segmentation, action items, key decisions
- Subtitle generation (SRT/VTT) with free validation tools
- Voice translation across 50+ languages
- Offline recording with sync when reconnected
- LeMUR-powered AI summaries

**Platforms**: iOS, Android, macOS, Chrome

**Security**: AES-256 encryption, TLS 1.3, GDPR, CCPA, HIPAA compliant, 99.9% uptime SLA. Audio never used for AI training.

**Integrations**: None. No Salesforce, HubSpot, Zapier, Make, Notion, or Slack. Export is manual only (transcript text, SRT/VTT subtitles).

**Known limitations**:
- No meeting bot — cannot join Zoom/Teams/Meet calls
- No API or webhooks — no programmatic access to transcripts
- No CRM integration — transcript data stays in the app
- No team features — no shared workspaces, admin controls, or analytics
- Free tier is only 30 minutes (compared to Fathom's unlimited free recordings)
- Speaker diarization caps at 10 speakers
- 95-99% accuracy requires optimal conditions — degrades in noisy environments

**Selection notes**:
- **Pick Soz AI when**: You need budget unlimited mobile transcription ($9.99/mo), you transcribe YouTube videos frequently (URL paste is unique), you need 100+ language support on mobile, you're a journalist/consultant/professional doing interviews on the go, or you need quick subtitle generation
- **Avoid Soz AI when**: You need a meeting bot for Zoom/Teams/Meet (→ Fathom, Fireflies, Otter), you need CRM integration (→ Fathom Business, Fireflies Business), you need an API for transcript pipelines (→ Fathom, Fireflies, Gong), you need team features or analytics (→ tl;dv, Avoma, Gong), you want a generous free tier (→ Fathom free unlimited, tl;dv free unlimited), or you need on-device processing (→ Speakwise, Handy)

---

## Shadow

For deep platform coverage (setup, Autopilot, screen capture, AI Skills, export, bot-free comparison), use `/sales-shadow`.

**Positioning**: The only bot-free AI meeting assistant that captures both audio and screen content. Shadow runs locally on macOS, transcribes on-device (audio never leaves your Mac), and uses SOC 2-certified cloud APIs for AI summaries, action items, and follow-up emails. Key differentiator vs other bot-free tools (Granola, Jamie, Bluedot) is screen capture — Shadow sees slides, demos, and shared content alongside the conversation.

**Pricing (2026-04)**: Free $0 (unlimited recording/transcription, AI features for first 25 lifetime meetings), Plus $8/mo (unlimited AI meeting notes, Skills, and Chat). No documented team or enterprise plans — custom plans available on request.

**API**:
- No public API documented
- No REST/GraphQL endpoints
- No developer documentation
- No MCP server
- No SDK

**Webhooks**:
- Zapier webhook integration available (some features may still be in "Coming" state)
- No native webhook system for custom integrations

**Integrations**: Markdown export, Obsidian, Zapier webhook. Works with Zoom, Google Meet, Microsoft Teams, Slack Huddles, Webex, Discord. No native CRM connectors (Salesforce, HubSpot, Pipedrive — none).

**Known issues (from G2/review analysis)**:
- macOS only — no Windows, Linux, mobile, or web app
- Free tier 25-meeting AI cap is lifetime, not monthly — easy to burn through in a week
- Occasionally gets stuck during meetings (restart resolves)
- Resource-intensive on older/Intel Macs (improving with updates)
- Speaker attribution can be inaccurate
- No native CRM connectors — data transfer requires manual copy or Zapier
- No public API — cannot build automated pipelines
- "Shadow AI" governance risk — runs invisibly, IT may not know it's in use

**Selection notes**:
- **Pick Shadow when**: You want bot-free recording with screen capture (unique feature), you're on macOS, you want the cheapest bot-free option ($8/mo vs Granola $14/mo or Jamie €21/mo), you want autopilot meeting detection with zero setup, or you need AI-drafted follow-up emails automatically
- **Avoid Shadow when**: Your team uses Windows (→ Jamie), you need CRM integration (→ Fathom Business, Fireflies Business, Bluedot Business), you need a public API for pipelines (→ Fathom, Fireflies, Gong), you need team admin controls or analytics (→ tl;dv Business, Avoma, Gong), or you need HIPAA/regulated compliance (→ Fireflies Enterprise, Gong)

---

## HappyScribe

For deep platform coverage (API endpoints, Orders workflow, export formats, glossaries, pricing tiers), use `/sales-happyscribe`.

**Positioning**: Batch transcription + subtitling platform with the broadest language support (120+ languages). Offers both AI transcription (~85% accuracy) and human transcription (99% accuracy at $2.00/min). Key differentiator vs Sonix is language coverage (120+ vs 53+), advanced subtitle editor with styling/positioning, and more export formats (15+ including Premiere XML, FCP XML, STL, AVID). Not a live meeting tool — upload-only.

**Pricing (2026-04)**: Free $0 (10-min one-time trial, watermarked exports), Basic $17/mo ($8.50 annual) for 120 AI min, Pro $29/mo ($19 annual) for 600 AI min + 3 seats, Business $89/mo ($59 annual) for 6,000 AI min + 5 seats + style guides. Overflow: $0.20/min. Human transcription: $2.00/min billed separately.

**API**:
- Docs: `https://dev.happyscribe.com/`
- Base URL: `https://www.happyscribe.com/api/v1`
- Auth: Bearer token (API key from account settings)
- Key endpoints:
  - `GET /uploads/new` — get signed S3 upload URL
  - `POST /orders` — create transcription/subtitling/translation order (replaces deprecated `POST /transcriptions`)
  - `POST /orders/<ID>/confirm` — confirm order for processing
  - `GET /transcriptions` — list transcriptions (filter by org, folder, tags)
  - `GET /transcriptions/<ID>` — retrieve transcription with state
  - `POST /exports` — create export in 12+ formats (txt, docx, pdf, srt, vtt, stl, premiere, fcp, avid, maxqda, json, html)
  - `GET /exports/<ID>` — retrieve export status and download URL
  - `POST /orders/translation` — create translation order
  - `GET /glossaries` — list custom glossaries
  - `GET /style_guides` — list style guides
  - Organization and membership management endpoints
- Rate limit: 200 req/hour

**Webhooks**:
- Via `webhook_url` parameter on order creation — notified on completion
- No standalone webhook management API — URL set per-order

**Integrations**: YouTube, Vimeo, Google Drive (native imports). Zapier (9,000+ apps). No native CRM connectors (no HubSpot, Salesforce, Pipedrive).

**Known issues (from review analysis)**:
- AI accuracy drops significantly with accents, multiple speakers, or background noise
- Free trial is 10 minutes total with watermarked exports — feels like bait-and-switch
- Pricing has increased suddenly for some users — lock in annual billing
- Browser editor can crash/refresh, losing unsaved edits
- Translation quality regressed after AI model change — some language pairs produce gibberish
- No HIPAA BAA documented — verify with HappyScribe for healthcare use

**Selection notes**:
- **Pick HappyScribe when**: You need batch transcription with the widest language coverage (120+ languages), you produce subtitles for video in multiple languages and need advanced subtitle editing, you need human transcription for legal/broadcast accuracy, you want extensive export formats (Premiere XML, FCP XML, STL, AVID), or you need SOC 2 + GDPR compliance for EU data residency
- **Avoid HappyScribe when**: You need live meeting recording (→ Fathom, Fireflies, Otter), you need CRM integration (→ Fathom Business, Fireflies Business), you need HIPAA compliance (→ Sonix, Fireflies Enterprise), you need higher API rate limits for pipeline throughput (→ Sonix), or you need real-time transcription during calls (→ Colibri, Krisp)

## Memoro

For deep platform coverage (Blueprints, Memories, pricing, comparison), use `/sales-memoro`.

**Positioning**: German GDPR-first AI meeting assistant. Records locally from the device mic — no bot joins the meeting. Key differentiators vs Jamie: cross-platform support (Linux, iOS, Android, macOS, Windows), offline mode, lower entry price (€9/mo vs €21/mo), and Mana-based flexible pricing. Key differentiator vs Fathom/Fireflies: German hosting with end-to-end encryption, no US data transfer. Targets education, healthcare, construction, and office administration verticals — broader than typical sales-focused CI tools. 2,800+ users, 4.8/5 stars.

**Pricing (2026-04)**: Free €0 (180 Mana/~75 min), Plus €9/mo (600 Mana/~250 min), Pro €23/mo (1,800 Mana/~750 min), Ultra €42/mo (4,800 Mana/~2,000 min). One-time "Mana Potion" purchases available for overflow. No annual pricing documented.

**API**:
- Mentioned on website but **no public API documentation** available
- No REST docs, no GraphQL, no webhook documentation indexed
- Contact kontakt@memoro.ai for API access inquiries

**Webhooks**: None documented.

**Integrations**: No native CRM, calendar, Slack, Zapier, or Make integrations. Export only: Word, PDF, Markdown.

**Key features**:
- Transcription in 50+ languages with automatic language detection
- AI summaries in 24 languages
- Speaker recognition (up to 12 speakers)
- Customizable Blueprints (templates) for different meeting types
- Searchable Memories (knowledge base across all recordings)
- Task and appointment detection
- Sentiment analysis and topic detection
- Offline recording mode
- Cross-platform: iOS, Android, macOS, Windows, Linux, Web

**Known issues**:
- Auto-language detection defaults to device/app language — can misidentify meeting language
- No CRM integration means manual export/paste workflow for sales teams
- Mana-to-minutes ratio is not 1:1 (~2.4 Mana per minute) — confusing for budgeting
- Limited third-party integrations compared to competitors
- Smaller user base and ecosystem than established tools

**Selection notes**:
- **Pick Memoro when**: GDPR with German hosting is non-negotiable, you need bot-free recording across all platforms including Linux, you want offline mode for field recordings, your budget is under €10/mo, you're in education/healthcare/construction verticals, or you need 50+ language transcription with customizable output templates
- **Avoid Memoro when**: You need CRM integration (→ Fathom Business, Jamie, Granola), you need API/webhook automation (→ Fathom, Fireflies, Wave), you need sales coaching or deal intelligence (→ Gong, Avoma, tl;dv), you need the cheapest possible option with unlimited recordings (→ Fathom free), or you need SOC 2/HIPAA compliance (→ Sonix, Fireflies Enterprise)

## MinutesLink

For deep platform coverage (features, pricing, sharing workflow, known issues), use `/sales-minuteslink`.

**Positioning**: Budget AI meeting note-taker from Pandaverse OÜ (Estonia). Records Google Meet and Zoom calls via bot auto-join or Chrome extension (bot-free). Key differentiator: shareable meeting summary links that recipients view without creating an account. 50+ language transcription, concurrent meeting capture on Pro+. Founded Sep 2023, ~50-100 employees, 4.9/5 (own site), 3.7/5 (The Business Dive).

**Pricing (2026-04)**: Free $0 (10 meetings/mo, 60 min each), Pro $9/mo annual / $16.99/mo monthly (30 meetings/mo, concurrent capture), Business $24/mo annual / $29.99/mo monthly (100 meetings/mo, priority support). Meeting limits are account-wide, not per-seat.

**API**:
- No public API documented
- `dev.minuteslink.com` domain exists but DNS not resolving
- No REST, GraphQL, or webhook endpoints

**Webhooks**: None.

**Integrations**: Google Calendar (native), Google Meet (native), Zoom (native). HubSpot and Salesforce via Zapier. No Slack, Make, or n8n integration. Microsoft Teams planned but not available.

**Key features**:
- Bot auto-join or Chrome extension (bot-free) recording
- Speaker-labeled transcripts in 50+ languages
- AI summaries with action items
- Meeting chat — ask AI questions about past meetings
- Public shareable links (no sign-up for recipients)
- Concurrent meeting capture (Pro+)
- End-to-end encryption, GDPR/CCPA compliant

**Known issues**:
- No Microsoft Teams support (top complaint) — planned with no timeline
- No mobile app — desktop/web only
- AI notes are basic compared to Fathom/Fireflies — no coaching analytics, no methodology scorecards
- No API or webhooks — CRM integration limited to Zapier
- Monthly meeting caps are account-wide — a 4-person team on Free shares 10 meetings total
- Subscription cancellation flow is not prominently surfaced in the UI

**Selection notes**:
- **Pick MinutesLink when**: Budget under $10/mo, Google Meet or Zoom only, you need shareable meeting links for external stakeholders without requiring sign-up, simple transcription + summaries are sufficient, EU data jurisdiction matters (Estonia-based), or you need concurrent meeting capture at low cost
- **Avoid MinutesLink when**: You need Microsoft Teams (→ Fathom, Fireflies, tl;dv), you need API/webhook automation (→ Fathom, Fireflies, Wave), you need CRM beyond Zapier (→ Fathom Business, Fireflies Business), you need coaching/methodology features (→ tl;dv, Avoma, Gong), you need mobile recording (→ Wave, Omi, Plaud), or you need unlimited recordings (→ Fathom free)

## Voicenotes

For deep platform coverage (features, pricing, integrations, Zapier triggers, Ask AI, meeting recording, known issues), use `/sales-voicenotes`.

**Positioning**: AI voice note-taker and meeting transcription platform by the BuyMeACoffee.com team. Record thoughts on iOS, Android, web, Apple Watch, or WearOS — AI transcribes using GPT-4o and Claude 3.5 Sonnet, then generates summaries, to-dos, main points, and draft emails. "Ask AI" lets you query across all notes in natural language. Also has a meetings product with calendar auto-join and meeting reports. Strong Zapier integration (9 triggers) and native Obsidian/Notion/Readwise sync. Not primarily sales-focused — targets individuals and small teams doing idea capture, journaling, and meeting notes.

**Pricing (2026-04)**: Free $0 (basic, short recordings), Individual $14.99/mo or $99.99/yr (unlimited notes + meetings, all AI features, all integrations), Teams $49/mo + $9/member/mo (unlimited users, 10,000 min/mo, shared workspace).

**API**:
- No public REST API
- Obsidian plugin uses private token-based auth (not documented for general use)
- Claude MCP server available for Claude Code/Desktop

**Webhooks**: Custom webhook support available. Payload format and authentication not publicly documented.

**Zapier** (9 triggers, primary automation path):
- Voicenote Created / Updated / Deleted
- Summary Created, Main Points Created, To-Do Created, Email Created, Meeting Report Created
- Attach Zapier Tag (manual selective export)

**Integrations**: Notion (native), Obsidian (official plugin), Readwise, Todoist, Things 3, Google Calendar, Microsoft Outlook, Zapier (8,000+ connected apps), Webhooks, Claude MCP, OpenClaw.

**Key features**:
- Voice recording on iOS, Android, web, Apple Watch, WearOS
- AI transcription in 100+ languages (GPT-4o + Claude 3.5 Sonnet)
- Ask AI — natural language Q&A across all notes
- Related Notes — AI surfaces connected notes (cosine similarity, Claude Haiku)
- Threads — group related notes
- Tags — manual tagging with special "Zapier" tag for automations
- Meeting recording with calendar integration and auto-join
- AI outputs: summaries, main points, to-dos, emails, meeting reports
- Auto-titling of notes

**Known issues**:
- No speaker diarization — single-speaker only, multi-person meetings have no speaker labels
- Code-switching unreliable — mixing languages mid-recording produces inconsistent transcription
- Upload failures — recordings may fail to sync from mobile, especially on unstable connections
- Search is keyword-based — the search bar does text matching, not semantic search (use Ask AI instead)
- Related Notes uses basic cosine similarity — degrades with bilingual notes
- Offline mode unreliable — may lose recordings when reconnecting
- No workspace separation — personal and professional notes share one space
- Mobile tagging bugs — tags may not persist, use web as fallback
- Cannot save Ask AI responses as notes or attach to threads
- No auto-tagging — all tagging is manual

**Selection notes**:
- **Pick Voicenotes when**: You want a personal voice capture tool that lives on your phone/watch, you need "Ask AI" search across all your recordings, you want strong Zapier automation (9 triggers for routing different AI outputs), you're already using Obsidian or Notion for knowledge management, you need meeting recording but don't need coaching analytics, or your budget is under $15/mo for unlimited recordings
- **Avoid Voicenotes when**: You need speaker diarization for multi-person meetings (→ Fireflies, Otter, Fathom), you need a public API for custom integrations (→ Fathom, Fireflies, Wave), you need CRM auto-fill or sales coaching (→ tl;dv, Avoma, Gong, Sybill), you need enterprise security certifications (→ Sonix, Fireflies Enterprise), you need reliable offline recording (→ Omi, Plaud hardware), or you need team analytics and conversation intelligence (→ Fireflies, Gong)

---

## AudioPen

For deep platform coverage (features, pricing, custom styles, SuperSummaries, Zapier setup, comparison with Voicenotes), use `/sales-audiopen`.

**Positioning**: Voice-to-polished-text tool by Louis Pereira (Nicheless Inc.). Unlike pure transcription tools, AudioPen actively rewrites and restructures spoken thoughts into clean prose matching a selected style. Available on iOS, Android, Mac, Chrome extension, and web. Unique one-time payment model (no subscription). 200,000+ active users. Not a meeting note-taker — targets solo professionals who think out loud and want polished written output.

**Pricing (2026-04)**: One-time payment — Free $0 (10 notes, 3 min each), 3 Months $33 ($11/mo), 1 Year $99 ($8.25/mo), 2 Years $159 ($6.63/mo). All paid plans ("Prime") include identical features.

**API**:
- No public REST API
- No SDKs or MCP server

**Webhooks**: Custom webhook support (Prime only). Payload format and authentication not publicly documented.

**Zapier** (1 trigger, Prime only):
- New Note — fires instantly when a note is created
- Connects to 8,000+ apps

**Integrations**: Zapier (Prime only), webhooks (Prime only). No native CRM, Notion, Obsidian, or Slack integrations.

**Key features**:
- Voice recording on iOS, Android, Mac, Chrome extension, web
- AI rewriting into polished text (not just transcription)
- Custom writing styles — describe desired tone or upload writing samples
- SuperSummaries — combine multiple notes into one document
- Restyle existing notes without re-recording
- Audio file uploads (100/4 weeks, 100MB each, Prime only)
- 58 input languages, 64 output languages
- 15-minute recording limit per note (Prime)
- Text processing — restyle written content through AI

**Known issues**:
- No speaker diarization — single-speaker only
- AI rewrites by default — new users expect verbatim transcripts and get polished rewrites instead
- 15-minute recording cap — no way to extend for longer sessions
- Limited custom prompt control — styles guide the rewriting but you can't inject arbitrary system prompts
- Upload cap of 100 files per 4-week window — heavy batch users hit this
- Zapier is the only automation path — no native integrations with any tool
- No team features — purely a solo tool

**Selection notes**:
- **Pick AudioPen when**: You want AI to rewrite and polish your speech (not just transcribe), you value custom writing styles or need to match a specific writing voice, you prefer a one-time payment over subscription, you work solo and don't need team features, you need multilingual output (64 languages), or you want to combine multiple voice notes into unified documents (SuperSummaries)
- **Avoid AudioPen when**: You need semantic search across notes (→ Voicenotes Ask AI), you need native Obsidian/Notion sync (→ Voicenotes), you need meeting recording with calendar auto-join (→ Voicenotes, Fathom, Fireflies), you need more Zapier triggers per output type (→ Voicenotes has 9), you need a public API (→ Fathom, Fireflies, Wave), you need CRM integration (→ Fathom Business, Sybill, tl;dv), you need speaker diarization (→ Fireflies, Otter, Fathom), or you need team collaboration (→ Voicenotes Teams, Fireflies)

## TalkNotes

For deep platform coverage (features, pricing, templates, Zapier setup, comparison with Voicenotes/AudioPen), use `/sales-talknotes`.

**Positioning**: AI voice note app by Collin Brewer (Clutch Codeworks LLC) that converts speech into structured content using 100+ pre-made templates. Unlike pure transcription tools (Voicenotes) or rewriting tools (AudioPen), TalkNotes focuses on template-driven output — blog outlines, email drafts, to-do lists, meeting notes, lecture summaries. Available on iOS, Android, and web. 50+ languages. Content creators and professionals who want structured output immediately, not raw transcripts.

**Pricing (2026-04)**: No permanent free tier — 7-day trial only. Plus ~$10/mo ($5.75/mo annual) — unlimited notes, 20-min recordings, file upload, custom styles. Pro ~$42-49/mo — shareable recorder link, 100 guest notes, 25 two-hour recordings, priority support.

**API**:
- No public REST API — contact support@talknotes.io for access
- No SDKs or MCP server

**Webhooks**: Webhook support available but payload format and authentication not publicly documented.

**Zapier** (1 trigger):
- Note Created — fires when a new note is created
- Connects to 9,000+ apps

**Integrations**: Zapier, webhooks. No native CRM, Notion, Obsidian, or Slack integrations. Export: PDF, Markdown, plain text.

**Key features**:
- 100+ pre-made note templates (blog, email, to-do, meeting notes, lecture summaries, social posts)
- Custom note styles
- AI Chat — ask questions about your notes (v1.6.0+)
- AI summaries and keyword extraction
- Background recording (continues when switching apps)
- Siri shortcuts for hands-free recording (iOS)
- File upload — create notes from existing audio files
- Shareable recorder link (Pro) — collect guest recordings without app install
- 50+ language support

**Known issues**:
- No permanent free tier — 7-day trial only, then subscription required
- No speaker diarization — single-speaker only
- 20-minute recording cap on Plus (2 hours on Pro, limited to 25 recordings)
- Mobile upload reliability issues reported in App Store reviews
- Template-driven output by default — not raw transcripts
- No native integrations — Zapier is the only automation path
- AI Chat is relatively new (v1.6.0) — feature depth may be limited compared to Voicenotes Ask AI

**Selection notes**:
- **Pick TalkNotes when**: You want voice memos converted into specific content formats (blog posts, emails, to-do lists) using pre-made templates, you value the widest template library (100+), you want a shareable recorder link to collect guest recordings (Pro), you need AI Chat to query your notes, or you prefer mobile-first recording with Siri integration
- **Avoid TalkNotes when**: You need a permanent free tier (→ Voicenotes, AudioPen), you need semantic search across notes (→ Voicenotes Ask AI), you need native Obsidian/Notion sync (→ Voicenotes), you need a public API (→ Fathom, Fireflies, Wave), you need CRM integration (→ Fathom Business, Sybill, tl;dv), you need speaker diarization (→ Fireflies, Otter, Fathom), you need more Zapier triggers (→ Voicenotes has 9), or you prefer a one-time payment (→ AudioPen)

## Letterly

For deep platform coverage (features, pricing, rewrite options, Zapier setup, comparison with AudioPen/Voicenotes/TalkNotes), use `/sales-letterly`.

**Positioning**: AI speech-to-text app that transforms unstructured voice recordings into polished, formatted content using 25+ built-in rewrite options. Unlike pure transcription (Voicenotes), custom-style rewriting (AudioPen), or template-driven output (TalkNotes), Letterly focuses on instant content reformatting — turn a voice memo into a social post, email, to-do list, or journal entry in seconds. Available on iOS, Android, web, and macOS. 300,000+ users. Content creators, entrepreneurs, journalists, and professionals who need quick formatted output from spoken thoughts.

**Pricing (2026-04)**: AppSumo LTD — Plan 1 $69 (1 device), Plan 2 $138 (2 devices), Plan 3 $207 (4 devices). All plans include unlimited recordings, 27 rewrite options, 90+ languages, 15-min recording limit. Regular subscription pricing not publicly displayed on website.

**API**:
- No public REST API
- No SDKs or MCP server

**Webhooks**: Custom webhook support available. Payload format and authentication not publicly documented.

**Zapier** (primary automation path):
- Trigger: Note Created — sends note text to connected apps
- Connects to 8,000+ apps
- Configured via Actions button inside each note
- Some users report intermittent trigger reliability issues

**Integrations**: Zapier, webhooks, AI tool connections (Claude, ChatGPT, Cursor, Perplexity, Gemini, Codex). No native CRM, Notion, Obsidian, or Slack integrations.

**Key features**:
- Voice recording on iOS, Android, web, macOS (Windows coming soon)
- Screen-off recording and offline recording capability
- Widget for one-tap recording from home screen
- 25+ built-in rewrite options (X post, formal email, friendly message, to-do list, journal, structured text, article outline, video script, etc.)
- Custom rewrite creation
- Automatic language detection for 90+ languages
- Translation into any supported language
- Tag-based note organization
- Cross-device cloud sync
- Dark/light mode

**Known issues**:
- 15-minute recording limit per session — no way to extend
- No audio file upload — must record directly in-app
- No search feature — finding older notes is difficult as collection grows
- Per-device licensing on LTD — adding devices requires upgrade
- Ghost text generation — starting/stopping a recording without speech produces random text
- AI rewrites can feel generic/repetitive for some formats
- Mobile-first design limits desktop workflows
- Zapier integration reported as unreliable by some users
- No folder organization — tags only

**Selection notes**:
- **Pick Letterly when**: You want 25+ instant rewrite formats from voice (social posts, emails, journals, to-do lists), you need screen-off or offline recording, you want 90+ language auto-detection, you prefer a lifetime deal pricing model, you need AI tool connections (Claude, ChatGPT, Cursor), or you create content across many formats from voice regularly
- **Avoid Letterly when**: You need search across notes (→ Voicenotes Ask AI), you need audio file upload (→ AudioPen, TalkNotes, Voicenotes), you need recordings longer than 15 minutes (→ TalkNotes Pro 2hr, Voicenotes unlimited), you need native Obsidian/Notion sync (→ Voicenotes, Cleft Notes), you need a public API (→ Fathom, Fireflies, Wave), you need CRM integration (→ Fathom Business, Sybill, tl;dv), you need speaker diarization (→ Fireflies, Otter, Fathom), or you need team features (→ Voicenotes Teams, Fireflies)

## Cleft Notes

For deep platform coverage (features, pricing, integrations, Obsidian/Notion sync, comparison with Voicenotes/AudioPen), use `/sales-cleftnotes`.

**Positioning**: Apple-native AI voice-to-notes app designed for "verbal thinkers" and neurodivergent users (ADHD). Uses on-device transcription to capture speech and an AI Scribe to restructure rambling thoughts into organized notes with auto-generated headings. Available on iOS, iPadOS, macOS, Apple Watch, and CarPlay. Featured in Fast Company "25 Best New Apps." 4.7/5 stars on App Store. Privacy-first with on-device transcription. The cheapest annual voice note plan in the category at $29/yr.

**Pricing (2026-04)**: Free $0 (5-min recordings, unlimited notes, markdown editor, publish online). Plus $9/mo or $29/yr — 30-min recordings, custom AI instructions, Zapier, Obsidian, Notion, attachments.

**API**:
- No public REST API
- No SDKs or MCP server
- OpenAPI spec referenced in docs but not publicly accessible

**Webhooks**: None documented. Automation via Zapier (Plus only) or Apple Shortcuts.

**Zapier** (Plus only):
- Trigger: New note created
- Connects to 8,000+ apps

**Integrations**: Obsidian (macOS-only, Plus), Notion (one-way push, Plus), Apple Notes, Apple Shortcuts, Zapier (Plus), Craft, Reflect, Drafts, ChatGPT, Perplexity. Task manager integrations via Shortcuts/Zapier (Asana, ClickUp, Todoist, Trello, Things, TickTick, Jira, Google Tasks, Microsoft To Do).

**Key features**:
- On-device voice transcription (works offline)
- AI Scribe auto-organizes with headings and restructures for readability
- Custom AI instructions (Plus) — control formatting, tone, structure
- Full visual markdown editor
- Lock Screen widget and Action Button for one-tap capture
- Apple Watch and CarPlay recording
- Live transcription during recording
- Batch processing — process multiple recordings at once
- Append to existing notes
- Shareable public links
- Tags, search, filters, archive
- File and image attachments (Plus)
- Multi-language transcription
- GDPR, CCPA, WCAG 2.1 AA compliant

**Known issues**:
- Apple ecosystem only — no Android, no Windows, no Linux
- Recording failures reported after ~2 minutes in some cases, with no audio recovery
- Garbled/nonsensical transcription output occasionally (device-dependent)
- 5-minute free tier recording limit (30 min on Plus)
- Obsidian sync is macOS-only — doesn't work on iOS/iPadOS
- Notion sync is one-way (Cleft → Notion)
- No speaker diarization — single-speaker only
- No public API — Zapier or Apple Shortcuts are the only automation paths
- AI auto-organizes by default — users expecting verbatim transcripts get restructured output
- Offline notes occasionally fail to sync when reconnecting

**Selection notes**:
- **Pick Cleft Notes when**: You're fully in the Apple ecosystem, you want on-device transcription for privacy and offline use, you value auto-organization with headings over raw transcripts, you want the cheapest annual plan ($29/yr), you need native Obsidian sync on macOS, you want an ADHD-friendly brain dump tool, or you need Apple Watch/CarPlay recording
- **Avoid Cleft Notes when**: You need Android or Windows (→ Voicenotes, AudioPen, TalkNotes, Letterly), you need semantic search across notes (→ Voicenotes Ask AI), you need meeting recording with calendar auto-join (→ Voicenotes, Fathom, Fireflies), you need a public API (→ Fathom, Fireflies, Wave), you need CRM integration (→ Fathom Business, Sybill, tl;dv), you need speaker diarization (→ Fireflies, Otter, Fathom), you need team features (→ Voicenotes Teams, Fireflies), or you want AI to rewrite into a specific writing style (→ AudioPen)

---

## Coconote

For deep platform coverage (features, pricing, study material generation, comparison with alternatives), use `/sales-coconote`.

**Positioning**: AI-powered note-taking app by Quizlet Inc that records lectures and auto-generates study materials — study guides, flashcards, quizzes, and AI-narrated podcasts. The only voice note tool in this category that produces active study aids (not just transcripts or summaries). 4.8/5 on App Store (15K+ ratings). Primarily student-focused. Available on iOS, Android, web, macOS (M1+), Apple Watch, Vision Pro.

**Pricing (2026-04)**: Free (basic recording, requires payment info for trial). Pro $9.99/mo or $19.99/mo, $99.99/yr or $129.99/yr. Family $189.99. 1-week free trial.

**API**:
- No public API
- No SDKs or MCP server
- No REST endpoints

**Webhooks**: None.

**Zapier**: None.

**Integrations**: None. No Zapier, no webhooks, no third-party integrations. Export limited to PDF and shareable Coconote links. Copy-paste is the only way to get content into other tools.

**Key features**:
- Live lecture recording with real-time transcription
- Auto-generated study guides from recordings
- Flashcard generation (one set per recording)
- Quiz generation (up to 15 questions per recording)
- AI-narrated podcast generation from notes
- AI chat scoped to all notes or specific folders
- Folder organization (per course, topic)
- Translation to 100+ languages
- Bookmark flagging during recording
- PDF export and shareable note links
- Cross-platform: iOS, Android, web, macOS, Apple Watch, Vision Pro

**Known issues**:
- Free tier requires entering payment info (1-week trial, then must cancel)
- Confusing pricing — multiple price points in App Store, yearly can appear as monthly
- Long recordings (2-3+ hours) may fail to generate study materials
- Only one quiz and one flashcard set generated per recording
- No YouTube URL processing
- No camera/image scanning for handwritten notes
- No integrations — notes live inside Coconote ecosystem only
- App crashes when saving recordings reported (device/OS dependent)
- Headphones can prevent recording from starting
- Customer support response times are slow
- Study materials may generate in wrong language (language detection issues)

**Selection notes**:
- **Pick Coconote when**: You're a student who wants auto-generated flashcards, quizzes, and study guides from lecture recordings — no other tool in this category generates active study aids. You want folder-scoped AI chat to turn course notes into a searchable knowledge base. You need cross-platform support (iOS + Android + web).
- **Avoid Coconote when**: You need any integrations (→ Voicenotes, Cleft Notes, Fathom, Fireflies), you need Obsidian/Notion sync (→ Voicenotes, Cleft Notes), you need a public API (→ Fathom, Fireflies, Wave), you need CRM integration (→ Fathom Business, Sybill, tl;dv), you need speaker diarization (→ Fireflies, Otter, Fathom), you need on-device/offline transcription (→ Cleft Notes), you record lectures over 2-3 hours (processing fails), or you want polished rewriting (→ AudioPen, Letterly)

---

## HyNote AI

For deep platform coverage (all tiers, credit system, content generation, integrations, comparison with alternatives), use `/sales-hynote`.

**Positioning**: Full-stack AI note-taker by Turing Intelligence LLC that captures audio, meetings, PDFs, images, YouTube videos, and web pages, then transforms them into structured notes, flashcards, quizzes, mind maps, presentations, and AI-narrated podcasts. Positions as privacy-focused (GDPR/CCPA/HIPAA) with superior multilingual accuracy. Cross-platform: web, iOS, Android, tablet, Apple Watch.

**Pricing (2026-04)**: Free ($0). Pro $6.66/mo annual ($79.99/yr). Plus $10.83/mo annual ($129.99/yr). Unlimited $15.83/mo annual ($189.99/yr). Teams $15/seat/mo ($180/seat/yr). 7-day free trial on all paid plans. 7-day money-back guarantee.

**API**:
- No public API
- No SDKs or MCP server
- No REST endpoints

**Webhooks**: None.

**Zapier**: None.

**Integrations**: Google Calendar, Google Meet, Microsoft Teams, Outlook, Zoom (auto-transcription). Google Docs and Notion export (Plus+ only). CRM integration (Unlimited only). Chrome Extension. PDF export (all plans). No Zapier, no webhooks, no Slack, no Obsidian.

**Key features**:
- Audio recording with transcription (1,200 min/mo on Pro/Plus, unlimited on Unlimited)
- Real-time transcription (Plus+ only)
- High-accuracy speaker identification (Plus+ only)
- File processing: PDF, images (OCR), videos, YouTube URLs, web pages
- AI summarization with professional templates (FAQ, resume, outline, case study, SWOT)
- Flashcard and quiz generation from notes
- Mind map and flowchart generation
- AI-narrated podcast generation (uses credits)
- Presentation slide generation (uses credits)
- Infographic generation (uses credits)
- Cross-device sync (web, mobile, tablet, Apple Watch)
- Offline access for saved notes
- High-accuracy translation (Plus+ only, live)

**Credits system**: One-time credit grants (not monthly refills). Pro: 300 credits, Plus: 400, Unlimited: 600. Costs: 3-min podcast = 10 credits, 8-slide deck = 20 credits, 1 infographic = 30 credits.

**Known issues**:
- Credits are one-time, not monthly — users run out with no visible refill mechanism
- Transcript export, real-time transcription, speaker ID, and Notion/Google Docs export all gated behind Plus+ plans
- CRM integration only on Unlimited tier — specific CRMs not documented
- At least one report of misleading refund process (directed to App Store for web purchase)
- No API/webhooks/Zapier — content locked inside HyNote unless exported via PDF or Notion/GDocs (Plus+)

**Selection notes**:
- **Pick HyNote when**: You want a single app that handles meetings, lectures, files, YouTube, and web pages — broadest input format coverage in the category. You need multilingual transcription with strong accent handling. You want study material generation (flashcards, quizzes) plus content creation (podcasts, slides, infographics) from the same platform. You need HIPAA/GDPR/CCPA compliance. You want Apple Watch recording.
- **Avoid HyNote when**: You need any API or automation (→ Fathom, Fireflies, Wave), you need Zapier/webhook integrations (→ Voicenotes, Circleback, Fathom), you need Obsidian sync (→ Voicenotes, Cleft Notes), you need deep CRM integration (→ Fathom Business, Sybill, tl;dv), you need real-time transcription on a budget (gated behind Plus at $10.83/mo), you need speaker identification on a budget (also Plus+), or you want one-time payment pricing (→ AudioPen)

---

## Superpowered

For deep platform coverage (AI Templates setup, CRM sync, auto-join troubleshooting, plan comparison), use `/sales-superpowered`.

**Positioning**: Bot-free AI note-taker that captures device audio, transcribes live, and generates structured notes using customizable AI Templates. Audio deleted immediately after transcription; transcripts retained 7 days. No bot joins the call. Desktop app only (macOS/Windows). SOC-2 Type II and GDPR compliant. Y Combinator-backed, used by 15,000+ companies. Product Hunt #5 Product of the Day.

**Pricing (2026-04)**: Free ($0 — 1 calendar, 1-month note history, limited AI notes), Basic $25/mo (unlimited calendars/history, Slack + Email integrations), Pro $50/mo (all Basic + Notion, Google Drive, Salesforce, HubSpot, Zapier, unlimited AI notes), Enterprise custom.

**API**: None. No public API, no REST endpoints, no SDKs.

**Webhooks**: None.

**Zapier**: Yes (Pro plan only).

**Integrations**: Zoom, Google Meet, Microsoft Teams, Webex, Around. Calendar: Google Calendar, Outlook, Apple Calendar (workaround). CRM: Salesforce, HubSpot (Pro only). Productivity: Notion, Google Drive (Pro only). Communication: Slack, Email (Basic+).

**Key gotchas**:
- Desktop only — no mobile app (iOS/Android), no Linux, no web
- CRM integrations locked behind Pro plan ($50/mo) — significantly pricier than competitors for CRM sync
- No public API — Zapier (Pro) is the only automation option
- Audio deleted immediately — no re-listening, notes are the only durable artifact
- Auto-join requires calendar connection — won't detect ad-hoc or unscheduled calls
- Transcript retained only 7 days — if notes aren't generated or exported, data is lost

**Selection notes**:
- **Pick Superpowered when**: You want bot-free recording without any participant seeing a bot join, you need structured AI notes with customizable templates (sales, 1:1s, interviews), you want SOC-2/GDPR compliance, you value audio privacy (nothing stored), or you need multi-language support (50+ languages)
- **Avoid Superpowered when**: You need mobile recording (→ Wave, Omi, Plaud), you need an API for data pipelines (→ Fathom, Fireflies), you want cheaper CRM sync (→ Fathom $25/mo Business, tl;dv $29/mo), you need video recording (→ Claap, tl;dv, Grain), or you need to re-listen to recordings (→ most alternatives store audio)

---

## Noted

For deep platform coverage (timestamped recording setup, transcription troubleshooting, Apple device comparison, pricing tiers), use `/sales-noted`.

**Positioning**: Combined audio recording and rich-text note-taking app for the Apple ecosystem. Core differentiator is timestamped audio-note linking — every line typed or drawn during a recording is tied to that moment, letting you tap to jump to that exact playback point. 3M+ downloads, App Store Editors' Choice. Made by Digital Workroom Ltd (UK).

**Pricing (2026-04)**: Free (recording, timestamped notes, rich text, Apple Pencil, Intelligent Playback), Noted+ $9.99/mo or $79.99/yr or $89.99 lifetime (AI Transcribe, Ask AI, AI summaries, dictation, Time Stroke). Noted Assistant add-on $2.99. Family Sharing on yearly plans. 7-day free trial on yearly.

**API**: None. No public API, no REST endpoints, no SDKs, no MCP server.

**Webhooks**: None.

**Zapier**: None.

**CRM**: None. Export-only (PDF, TXT, M4A, web links). No CRM connectors.

**Key features**:
- Time-stamped audio-note linking — core differentiator
- Intelligent Playback — ML-powered silence/noise skipping
- AI Transcribe — 18 languages, cloud-based (Noted+ only)
- Apple Pencil drawing with Time Stroke replay (iPad)
- Apple Watch recording — hands-free
- Apple Vision Pro support
- Ask AI — search recordings for answers (Noted+ only)
- iCloud sync across all Apple devices

**Gotchas**: Transcription UI is buried in the note's options menu — common user complaint. AI features require cloud upload (no offline transcription). Apple ecosystem only (secondary Android app exists but feature parity not guaranteed). 18 languages for transcription — fewer than Voicenotes (100+) or Notta (58).

---

## Backtrack

For deep platform coverage (rolling buffer setup, audio capture troubleshooting, bot-free comparison, pricing tiers), use `/sales-backtrack`.

**Positioning**: Mac menu bar app that solves the "forgot to hit record" problem with a continuously rolling audio/screen buffer. Instead of starting recording before a meeting, Backtrack lets you retroactively save the last 1-5 hours of audio with one click. Privacy-first — recordings are local until you explicitly share. No meeting bot visible to participants. Made by Yac Inc.

**Pricing (2026-04)**: Free (1 hr rolling buffer, basic capture), Pro $9.99/mo (5 hr buffer, AI search, keyword highlights, enhanced sharing), Business custom pricing (team access, admin controls, extended storage). Also available via Setapp ($9.99/mo for 240+ Mac apps).

**API**: None. No public API, no REST endpoints, no SDKs, no MCP server.

**Webhooks**: None.

**Zapier**: None.

**Integrations**: Zoom, Google Meet, Microsoft Teams, Slack Huddles, in-person (via microphone). No CRM connectors, no Zapier/Make/n8n, no Slack/Notion export, no calendar integration.

**Key gotchas**:
- Mic-only capture by default — headphones mean you only record your side of a call (use speakers or enable system audio capture)
- Transcript generation is unreliable — ~10% failure rate reported by some users
- macOS only — no Windows, Linux, iOS, or web
- Menu bar icon hidden by Bartender/Vanilla/Hidden Bar — check hidden section
- Free tier buffer is 1 hour — meetings over 1 hour lose their beginning
- Cloud upload required for AI transcription — local recording alone gets no AI features

**Selection notes**:
- **Pick Backtrack when**: You frequently forget to hit record and want a safety net, you want retroactive capture (unique in the category), you prefer a simple Mac menu bar utility over a full meeting platform, you want bot-free recording for calls and in-person meetings, or you're on Setapp already
- **Avoid Backtrack when**: You need CRM integration (→ Fathom Business, Sybill, tl;dv), you need an API or webhooks (→ Fathom, Fireflies, Gong), you need Windows support (→ Jamie, Granola), you need reliable transcription (→ Otter, Fireflies), you need team collaboration features (→ Fireflies, Grain), or you need calendar-based auto-join (→ Fathom, Fireflies, most bot-based tools)

---

## Scribbl

For deep platform coverage (Chrome extension setup, AI Copilot, team library, plan selection, Google Meet limitations), use `/sales-scribbl`.

**Positioning**: Bot-free AI meeting notes Chrome extension marketed as "the AI notetaker Google Workspace users actually want." Silently records Google Meet calls without a bot participant, generates instant AI summaries and action items. AI Copilot (GPT-4 chat) lets you query meeting content. Trusted by 10,000+ organizations including Google and Spotify. Currently Google Meet-only — Zoom and Teams listed as "coming soon."

**Pricing (2026-04)**: Lite (Free) $0/15 meetings/mo, unlimited length, video expires after 2 months, up to 5 members. Pro $13/user/mo annual ($20 monthly), unlimited meetings, 1-year video retention, 500GB team storage, unlimited AI Chat, up to 5 members. Team custom pricing (contact sales), unlimited team size, CRM integrations, Slack, Google Drive, Zoom/Teams support, admin controls, dedicated support.

**API**: None. No public API, no REST endpoints, no webhooks, no MCP server, no Zapier/Make integration.

**Webhooks**: None.

**Zapier**: None.

**Integrations**: Google Drive, Slack, CRM — all Team plan only. Shareable meeting links (all plans). No calendar integration (extension auto-detects Meet calls).

**Key gotchas**:
- Google Meet only — Zoom and Teams "coming soon" with no public timeline
- Chrome browser required — no desktop app, no Firefox/Safari/Arc
- Pro plan caps teams at 5 members — 6+ requires Team plan with custom pricing
- Free tier video recordings expire after 2 months (transcripts persist)
- No public API — zero programmability, no custom integrations possible
- CRM integration details vague — Team plan only, specific CRMs not publicly confirmed
- AI Copilot is Pro+ only — free tier gets summaries and action items but not interactive chat

**Selection notes**:
- **Pick Scribbl when**: Your team is 100% on Google Meet and Chrome, you want the simplest possible bot-free setup (one extension install, no config), you want instant AI summaries without any meeting bot visible to participants, you value AI Copilot chat to query past meetings, or your free-tier needs are under 15 meetings/month
- **Avoid Scribbl when**: You use Zoom or Teams (→ Fathom, Fireflies, tl;dv), you need CRM integration without custom pricing (→ Fathom Business $25/mo, Sybill $30/mo), you need an API or webhooks (→ Fathom, Fireflies, Gong), you need teams larger than 5 on a published price (→ Fireflies Business, tl;dv Business), or you need deep coaching/methodology features (→ Avoma, tl;dv Business, Gong)

---

## JotMe

For deep platform coverage (live translation setup, pricing tiers, Chrome extension vs desktop app, translation minute management), use `/sales-jotme`.

**Positioning**: Real-time AI translation and meeting intelligence platform — the translation-first note-taker. Provides simultaneous interpretation across 107 languages with near-zero latency, bot-free system audio capture, multilingual transcription (up to 10 languages simultaneously), and AI-powered meeting summaries. Used by professionals at Toyota, Google, Netflix, Hitachi, and Mercari. Primary use case is live translation during multilingual meetings and conferences, with meeting notes as a secondary feature.

**Pricing (2026-04)**: Free $0 (20 min translation, 5 AI credits, 50 min transcription). Pro $20/mo ($10 annual), 200 min translation, 20 AI credits, 500 min desktop transcription, unlimited Chrome Meet transcription. Premium $30/mo ($15 annual), 500 min translation, 50 AI credits, 2,000 min transcription, unlimited recordings. Enterprise custom pricing (unlimited everything, team billing, Slack/Google Docs/email integrations).

**API**: None. No public API, no REST endpoints, no SDKs, no webhooks, no MCP server.

**Webhooks**: None.

**Zapier**: None.

**Integrations**: Google Meet (Chrome extension), Zoom/Teams/Webex/Slack/Discord/WhatsApp/LINE/WeChat/YouTube (via desktop app system audio capture). Enterprise-only: Slack, Google Docs, email. No CRM connectors on any plan.

**Key gotchas**:
- Translation minutes and AI credits are separate pools — you can exhaust one while the other remains
- Chrome extension is Google Meet only — all other platforms require the desktop app
- No CRM sync on any self-serve plan — Enterprise only for Slack/Docs/email
- Real-time transcript scrolls too fast to read — use post-meeting summaries instead
- Enterprise pricing not published — must contact sales for unlimited usage
- No rollover of unused minutes/credits month to month

**Selection notes**:
- **Pick JotMe when**: Your team needs simultaneous interpretation during live meetings, you work across 10+ languages regularly, you want bot-free translation that doesn't announce itself to other participants, you're running multilingual conferences or events, or you need custom vocabulary for industry-specific translation
- **Avoid JotMe when**: You need CRM integration (→ Fathom Business, Sybill, Jamy), you need an API or webhooks (→ Fathom, Fireflies, Gong), translation is secondary to meeting notes quality (→ Notta, Jamy), you need unlimited usage on a published price (→ Fathom Free unlimited recordings), or you need team collaboration features beyond Enterprise (→ Fireflies, Grain)

---

## Audionotes

For deep platform coverage (webhook payload, Zapier setup, Notion sync, template configuration, WhatsApp Bot, pricing gates), use `/sales-audionotes`.

**Positioning**: Multi-format AI note-taker that converts voice, text, images, video files, and YouTube links into structured notes via 100+ output templates. Broader input coverage than most voice-only tools (AudioPen, Voicenotes, TalkNotes). WhatsApp Bot enables mobile-first capture. Rated 4.9+ by 200K+ users.

**Pricing (2026-04)**: Free (1 min/note limit, basic features). Pro $129.99/yr (~$10.83/mo) — unlimited voice notes, file uploads (3-hr audio/video, 500 MB), YouTube video notes, image notes, mind maps, Zapier, Notion, webhooks, WhatsApp Bot, note chatting. Enterprise custom (teams of 5+, contact sales).

**API**: None. No public REST API, no SDKs, no MCP server.

**Webhooks**: Fixed JSON payload on new note creation — `{noteId, createdAt, noteType, title, transcript, content}`. No HMAC signature verification documented. No filtering by note type. Only post-connection notes are sent (no backfill). Pro plan required.

**Zapier**: "New Note V2" trigger. Auth via API key + email. Maps same fields as webhook payload. Pro plan required.

**Notion sync**: Native integration — all new + existing notes auto-sync to a Notion database template. Fields: Title, Transcript, AI Notes, Created At, Note Type, Speaker Transcript. One-way (Audionotes → Notion). Pro plan required.

**Integrations**: Notion (native sync), Zapier (8,000+ apps), webhook (any endpoint), WhatsApp Bot (mobile capture). No CRM connectors. No Slack/Teams/Zoom meeting bot — Audionotes is voice memo + upload only, not a meeting joiner.

**Key gotchas**:
- Free plan is 1 minute per note — essentially unusable for real work
- No HMAC/signature on webhooks — must implement own endpoint security
- No CRM connectors — requires Zapier or custom webhook middleware for HubSpot/Salesforce
- Transcription accuracy drops on domain-specific audio (medical, legal terms)
- No speaker diarization confirmed — may be single-speaker stream despite speaker recognition mention
- No real-time collaboration — single-user notes, shared via export/public pages only

**Selection notes**:
- **Pick Audionotes when**: You want the broadest input format coverage (voice + text + image + video + YouTube) in one tool, WhatsApp-first capture is important, you need 100+ output templates for varied use cases (medical SOAP notes, blog posts, meeting minutes), you want simple Notion auto-sync, or you're a content creator who captures ideas across formats
- **Avoid Audionotes when**: You need a meeting bot that joins Zoom/Meet/Teams (→ Fathom, Fireflies), you need CRM integration (→ Fathom Business, Sybill), you need a REST API (→ Fathom, Fireflies, Wave), you need speaker diarization (→ Fireflies, Otter), you need real-time collaboration (→ Grain, Fireflies), or you need HMAC-signed webhooks (→ Fathom, Circleback, Wave)

## Bubbles

For deep platform coverage (Zapier automation, async video workflows, plan comparison), use `/sales-bubbles`.

**Positioning**: Async video messaging tool that added AI meeting note-taking. Bridges sync and async by auto-joining meetings for recording + summaries, plus screen recording for async updates. Target audience is design/product/remote teams — not sales-specific. SOC 2 Type II certified.

**Pricing (2026-04)**: Free (5 meetings/week, 30-min limit, 2 channels, recordings lock after 2 weeks inactive), Pro Teams $12/user/mo annual / $15 monthly (3+ members required, unlimited recordings, customizable notetaker, branded customization), Pro Personal $18/mo annual / $22 monthly (1-2 members, auto-transitions to Pro Teams at 3 members). 14-day free trial for Pro.

**API**: None. No REST API, no webhooks, no MCP server. All automation through Zapier only.

**Zapier**: Connect via Settings → Integrations. "New Recording" trigger fires when meeting recording completes. Routes to Slack, Notion, Asana, Google Docs, or any of 200+ connected apps.

**Integrations**: Zoom, Google Meet, Microsoft Teams (notetaker bot joins), Slack (native notifications + recording access), Google Calendar, Outlook (auto-detect meetings), Zapier (200+ outbound apps). **No CRM connectors** — no HubSpot, Salesforce, or Pipedrive.

**Key gotchas**:
- English-only — no multilingual transcription
- Free plan transcripts are not available (summaries + action items only; full AI transcripts require Pro)
- No editable transcripts
- External collaborators need a Bubbles account to leave video/text comments
- No coaching, scoring, sentiment analysis, or conversation intelligence features
- No video clips or highlight reels — full recordings only

**Selection notes**:
- **Pick Bubbles when**: Your team prioritizes async video collaboration + meeting recording in one tool, you don't need CRM integration, you want screen recording alongside meeting notes, your team uses Zoom/Meet/Teams and wants auto-join without setup friction, or you're a design/product team that values async comments on recordings
- **Avoid Bubbles when**: You need CRM sync (→ Fathom Business, Fireflies Business, Sybill), you need an API for custom integrations (→ Fathom, Fireflies, Wave), you need multilingual transcription (→ Notta, Jamy), you need sales coaching or conversation intelligence (→ Gong, Avoma, tl;dv), you need editable transcripts (→ Fireflies, Otter), or you need external collaborators to comment without creating an account (→ Loom Business)

## Transync AI

For deep platform coverage (setup, plan selection, AI Assistant configuration, troubleshooting), use `/sales-transync-ai`.

**Positioning**: Real-time AI meeting translation with the lowest latency in the category (<0.5s). Dual-screen bilingual display shows original and translated speech side-by-side. AI voice broadcast outputs natural voice in the target language. Bot-free — captures system audio without joining meetings as a participant. Targets multilingual business teams, foreign trade professionals, and cross-border freelancers.

**Pricing (2026-04)**: Free (40 min one-time trial), Personal Premium $8.99/mo (10 hrs/mo), Enterprise $24.99/seat/mo (40 hrs/seat/mo, org knowledge base, compliance docs). Time card top-ups: $0.70/hr, $7.99/10hr, $22.99/30hr, $69.99/100hr. Enterprise volume discounts at $1K (2%), $3K (5%), $5K (8%), $10K+ (10%) annual spend.

**API**: None. No REST API, no webhooks, no SDK, no MCP server. No Zapier or Make integrations. All interaction is through the desktop/mobile/web app.

**Integrations**: Zoom, Microsoft Teams, Google Meet, WhatsApp voice calls, in-person meetings — all via system audio sharing (no plugins, no bot). No CRM connectors. Transcript/note export is manual (copy/paste or download).

**Key capabilities**:
- 60+ languages, 1,770+ language pairs
- Near-zero latency (<0.5s) — fastest in category
- Dual-screen bilingual display with speaker identification
- AI voice broadcast (natural voice output in target language)
- AI meeting notes (transcription + translation + summaries)
- AI Assistant for custom domain terminology and keywords
- Auto language detection and speaker detection
- Multi-platform: Windows, macOS, iOS, Android, Web

**Security**: AES-128 + TLS 1.3 encryption, audio immediately deleted after processing, GDPR compliant, SOC 2 Type II + ISO 27001 in progress (not yet certified as of 2026-04).

**Key gotchas**:
- 40-minute free trial is one-time — no recurring free tier
- No API or automation — cannot automate transcript export or CRM sync
- System audio sharing setup varies by OS (macOS requires Screen Recording permission)
- Accuracy degrades with heavy accents, overlapping speakers, and noisy environments
- Enterprise SOC 2/ISO 27001 certifications still in progress
- No CRM integration at all — meeting notes stay inside Transync AI

**Selection notes**:
- **Pick Transync AI when**: You need the lowest latency real-time translation for business meetings, you want dual-screen bilingual display, you need AI voice broadcast in the target language, your meetings are primarily bilingual (one language pair), you want bot-free system audio capture, or you're in foreign trade/cross-border business
- **Avoid Transync AI when**: You need API integration or CRM sync (→ Fathom, Fireflies, Sybill), you need 100+ languages (→ JotMe 107 languages), you need human interpreters for enterprise events (→ KUDO, Interprefy), you need domain-specific AI voice avatars (→ Langfinity), you need conversation intelligence or sales coaching (→ Gong, Avoma, tl;dv), or you need automated transcript pipelines (→ Fireflies API, Fathom REST + MCP)

## Talo

For deep platform coverage (Palabra API endpoints, Python/JS/Java SDKs, voice cloning, glossary setup, streaming integration, pricing tiers), use `/sales-talo`.

**Positioning**: Enterprise-grade real-time meeting translation with a single-bot architecture. Palabra.AI (parent company) acquired Talo in late 2025 and provides the underlying speech-to-speech API. Differentiated by SOC 2 + ISO 27001 compliance and developer API access — most meeting translators have no public API.

**How it works**: A single AI bot joins your Zoom, Google Meet, or Microsoft Teams call. As participants speak in their native languages, the bot translates in real-time (~2-3 second latency). Each participant hears translations in their preferred language. One bot handles all languages — no need for separate bots per language pair.

**Talo meeting app pricing** (best-effort 2026-04):
- **Starter**: $33/mo ($396/yr) — 1 member, 120 min/mo, 60 languages
- **Pro**: $100/mo ($80/mo annual) — 1 member, 400 min/mo, $0.25/extra min
- **Team**: $500/mo ($400/mo annual) — 5 members, 400 min/mo, $0.20/extra min, SSO (coming soon)
- **Enterprise**: Custom — unlimited members/minutes, SOC 2, dedicated support
- 7-day free trial (no credit card)

**Palabra API pricing** (separate from meeting app):
- Pro $150/mo (150 credits), Scale $900/mo (900 credits), Business $3,500/mo, Enterprise custom
- Credit rates: 30 credits/hr for calls/API, 150/hr for events, 80/hr for broadcasting

**API surface** (via Palabra):
- REST + WebSocket/WebRTC streaming at `api.palabra.ai`
- Sessions, Voice Cloning, Glossaries, Blob Upload, Billing endpoints
- Python SDK (`pip install palabra-ai`), JavaScript, Java SDKs
- Auth: `X-Client-Id` + `X-Client-Secret` headers
- No webhooks, no MCP server

**Key gotchas**:
- 7-8x more expensive per minute than JotMe ($0.275/min vs ~$0.045/min) — justify with compliance needs
- Bot is visible to all participants — some orgs block meeting bots
- API pricing is separate from the meeting app — $33/mo Starter doesn't include API access
- Team plan "coming soon" — multi-seat requires Enterprise contact
- No CRM integration — pair with a note-taker (Fathom, Fireflies) for CRM sync
- No webhooks — poll or use streaming API for real-time data
- 60 languages (not 100+) — check supported language list for rare pairs

**Selection notes**:
- **Pick Talo when**: You need SOC 2/ISO 27001 compliant meeting translation, you want a developer API (Palabra) for custom translation integration, you prefer single-bot simplicity over bot-free tools, your team is on Zoom/Meet/Teams, or you need voice cloning for natural-sounding translations
- **Avoid Talo when**: Budget is the primary concern (→ JotMe $10/mo, Transync AI $8.99/mo), you need bot-free translation (→ Transync AI, JotMe), you need 100+ languages (→ JotMe 107), you need human interpreters for critical events (→ KUDO, Interprefy), you need domain-specific AI voice avatars (→ Langfinity), or you need CRM integration (pair with a separate note-taker)

## Rimo

**Positioning**: Japanese-optimized AI meeting transcription and summarization with ISO 27001/27017 compliance and Japan-hosted data (GCP). Bot joins Zoom/Teams/Meet/Webex via calendar integration. Strongest for Japanese-first teams needing high-accuracy transcription with data residency in Japan.

**Pricing** (best-effort as of 2026-04, launch pricing = 50% off):

| Plan | Launch price | Regular price | AI credits | Key additions |
|---|---|---|---|---|
| Solo | $9/mo | $18/mo | 100/mo | Unlimited transcription, bot recording, AI summaries, AI chat |
| Business | $15/mo | $30/mo | 1,000/mo | + Team management, shared folders, team-wide analysis |
| Corporate | Custom (11+ seats) | Custom | Custom | + SSO (SAML/OIDC), IP restrictions, audit logging, unlimited storage |

- Free trial available (no credit card)
- Japanese pricing differs (¥1,650-6,600/mo)
- Launch pricing locked while subscription stays active

**Integration surface**: Thin — calendar (Google/Outlook), Slack/email notifications, manual CSV/Excel/PDF export. **No API, no webhooks, no Zapier/Make, no CRM connectors.** API listed as "upcoming" but undated.

**Key gotchas**:
- No API or CRM integration — meeting insights require manual export and paste into CRM
- AI credits are consumed by summaries and AI chat — Solo's 100/mo runs out fast with heavy usage
- iOS app only — no Android, no desktop app (web-only)
- Bot takes 30-60 seconds to join meetings
- English/non-Japanese accuracy is lower than Japanese
- Dictionary changes only apply to new recordings, not retroactively

**Selection notes**:
- **Pick Rimo when**: Your team primarily speaks Japanese, you need ISO 27001/27017 compliance with Japan data residency, you want affordable Japanese-optimized transcription ($9-15/mo launch), you don't need API or CRM integration
- **Avoid Rimo when**: You need API access (→ Fathom, Fireflies, MeetGeek), you need CRM integration (→ Fathom, Fireflies, Avoma), your team primarily speaks English (→ Fathom, Otter), you need Android mobile support (→ Otter, Fireflies), or you need real-time translation (→ JotMe, Talo, Transync AI)

## Wudpecker

For deep platform coverage (custom instructions setup, plan comparison, HubSpot/Notion integration, troubleshooting), use `/sales-wudpecker`.

**Positioning**: AI meeting note-taker that differentiates on **custom instructions** — users tell the AI exactly what to capture, how to structure notes, and what vocabulary to use. Bot joins Zoom/Meet/Teams; desktop + phone app handles in-person recording. EU-based, GDPR compliant, AES-256 encryption, EU servers. 18,000+ users including TikTok, Salesforce, Nokia, Deliveroo.

**Pricing (2026-04)**:

| Plan | Price | Bot meetings/mo | Ask AI | Key additions |
|---|---|---|---|---|
| Free | $0 | 10 | 3 per recording | Unlimited in-person (app), custom instructions, collections, 39+ languages |
| Plus | $19/mo ($15.20 annual) | 30 | Unlimited | + Notion/Slack/HubSpot integrations, rename bot, bot join preferences, invite to unscheduled |
| Pro | $32/mo ($25.60 annual) | 100 | Unlimited | + Everything in Plus with higher meeting limit |

- 2-week Plus trial, no credit card
- Max meeting length: 2h 15m (all plans)
- Single calendar per account
- Unlimited cloud storage on all plans

**Integration surface**: No API, no webhooks, no MCP server. Native integrations on Plus+: HubSpot (CRM sync), Notion (auto-export), Slack (summaries), Google Docs (export, all plans). Salesforce beta. No Zapier/Make.

**Key gotchas**:
- No API or webhooks — cannot build custom automations or pipe transcripts to a data warehouse
- Bot is visible to all participants — can be renamed on Plus+ but still conspicuous
- 2h 15m max meeting length is a hard limit across all plans
- HubSpot/Notion/Slack locked to Plus+ ($19/mo)
- Single calendar per account — can't monitor multiple calendars
- Speaker identification accuracy varies — mix-ups in larger meetings
- CRM sync is one-way push with fixed field mapping (no custom mapping)

**Selection notes**:
- **Pick Wudpecker when**: Custom note formatting is your top priority (MEDDIC templates, specific capture instructions), you want in-person + virtual recording in one tool, your team uses HubSpot and wants affordable CRM sync ($19/mo), you're EU-based and want GDPR compliance with EU-hosted data, or you want Ask Wudpecker AI Q&A for post-meeting insights
- **Avoid Wudpecker when**: You need API access or webhooks (→ Fathom, Fireflies, MeetGeek), you need unlimited bot meetings (→ Fathom free tier), you need deep CRM field mapping (→ Fathom Business, Avoma), you need coaching/methodology scorecards (→ tl;dv, Avoma), you need meetings longer than 2h 15m, or you need multi-calendar support

## Sally AI

For deep platform coverage (MCP connector setup, plan comparison, CRM integration, troubleshooting), use `/sales-sally`.

**Positioning**: German-hosted GDPR-first AI meeting assistant. Bot joins Zoom/Teams/Meet/Webex, transcribes in 99+ languages, generates summaries with action items and decisions. Differentiator: tiered AI accuracy models (Bronze 90.3% → Gold 98.8%) and an MCP server for querying meetings from Claude/ChatGPT/Cursor. 50,000+ users, 1,000+ companies, 4.8/5 rating. Developed by Aliru GmbH.

**Pricing (2026-04)**:

| Plan | Price (annual) | Price (monthly) | Minutes/mo | AI model | Upload | Key additions |
|---|---|---|---|---|---|---|
| Starter | $10/mo | $14/mo | 1,200 | Bronze (90.3%) | 1 GB | MCP, custom vocab, 8,000+ integrations, 99+ languages |
| Pro | $40/mo | $45/mo | Unlimited | Silver (94.1%) | 5 GB | + Custom meeting types, AI chat per meeting, sales analytics, objection detection, quality benchmarks |
| Enterprise | $79/mo | $99/mo | Unlimited | Gold (98.8%) | 5 GB | + On-premise deployment, global AI chat, priority support |

- 30-day free trial on all plans, no credit card required
- Mobile app (iOS/Android) for in-person recording included on all plans

**Integration surface**: MCP server (read-only, 5 tools: search_appointments, search_summaries, get_recordings, get_summary, get_transcription). Bearer token auth (`sally_pat_...`). No REST write API. No webhook subscriptions. Native CRM sync (outbound push) to HubSpot, Salesforce, Dynamics 365, Pipedrive, Zoho, Odoo, Bitrix24. iPaaS via Zapier, Make, Power Automate, n8n. Native PM sync to Asana, Monday.com, Trello, Notion, Jira, ClickUp.

**Key gotchas**:
- MCP is read-only — cannot create, update, or delete anything programmatically
- No REST API for write operations — all automation must go through iPaaS or native integrations
- No webhook subscriptions — cannot receive real-time event notifications
- Accuracy gap between tiers is significant: Bronze (90.3%) struggles with technical terms, Gold (98.8%) handles jargon well
- Custom meeting types and AI chat per meeting are Pro-only ($40/mo)
- Global AI chat (cross-meeting search) is Enterprise-only ($79/mo)
- On-premise deployment is Enterprise-only
- Upload limit: 1 GB on Starter, 5 GB on Pro/Enterprise

**Selection notes**:
- **Pick Sally when**: GDPR compliance with German hosting is a requirement, you need 99+ language transcription, you want MCP integration for AI assistant workflows, you want tiered accuracy to match budget, or you need broad native CRM/PM integrations without Zapier
- **Avoid Sally when**: You need a write API or webhooks (→ Fathom, Fireflies, Grain), you need real-time coaching during calls (→ Gong, Clari Copilot, Balto), you need conversation methodology scoring (→ Avoma, tl;dv), you need unlimited free recordings (→ Fathom), or you need deep Salesforce-native pipeline management (→ Scratchpad, Weflow)

## Liznr

For deep platform coverage (setup, integrations, limitations, workarounds), use `/sales-liznr`.

**Positioning**: AI meeting assistant with real-time transcription and contextual intelligence from Liznr Labs (Bhopal, India). The "Lizy" AI secretary provides live contextual references during meetings — jargon simplification, keyword highlights, and action item capture. Available as Chrome extension, Edge add-on, and Microsoft Teams app. Privacy-first design (data not shared for model training). Launched May 2025, very early stage with limited public reviews. Not to be confused with "Lindy" (different platform).

**Pricing (2026-04)**: Free trial (time-limited). Starting at $9/mo per SourceForge listing. Detailed tier/feature breakdown not publicly documented — contact support@liznr.ai for current pricing.

**API**: None. No public REST API, GraphQL, webhooks, or MCP server.

**Integrations**: Zoom/Meet/Teams (via Chrome/Edge/Teams app). Output sync to Jira, Slack, Notion, Trello. Gmail and Google Calendar for meeting detection. No CRM integration (HubSpot, Salesforce, Pipedrive — none).

**Key gotchas**:
- No API means zero programmatic access to transcripts, summaries, or action items
- No CRM integration — sales teams needing HubSpot/Salesforce sync must use workarounds (Slack → Zapier → CRM)
- Very early stage — fewer than 5 reviews across all platforms, expect rapid changes
- Pricing details are opaque — $9/mo starting price but no public tier breakdown
- No documented compliance certifications (SOC 2, HIPAA, ISO 27001) — only "industry-standard encryption"
- No offline or in-person recording mode documented
- Chrome extension may not work with Zoom desktop app (only web client via browser)

**Selection notes**:
- **Pick Liznr when**: You want budget meeting transcription starting at $9/mo, contextual intelligence (live jargon simplification, keyword highlights) is a differentiator for your use case, your team uses Jira/Slack/Notion for task management and doesn't need CRM sync, or you're evaluating for recruiting/legal use cases with basic transcription needs
- **Avoid Liznr when**: You need any API access (→ Fathom, Fireflies, MeetGeek), you need CRM integration (→ Fathom Business, Fireflies Business, Avoma), you need proven compliance certifications (→ Fathom, Gong, Fireflies Enterprise), you need coaching/methodology scorecards (→ tl;dv, Avoma, Gong), you need deep meeting analytics (→ Read.ai, Grain), or you need a mature platform with substantial user base and reviews

## Meeting.ai

For deep platform coverage (visual mind map workflow, export options, comparison with text-based note-takers, pricing investigation), use `/sales-meeting-ai`.

**Positioning**: Visual-first AI note-taker that converts meetings into mind maps. Differentiates on spatial visual output while most competitors produce text summaries. Strong multilingual transcription optimized for Southeast Asian accents. Singapore-based (BAHASALAB).

**Pricing (2026-04)**: Opaque — 7-day free trial, possible free tier, no public pricing page. Check App Store/Google Play for in-app purchase prices or contact support@meeting.ai.

**API**: None. No webhooks. No programmatic access.

**Integrations**: None documented — no CRM, no Zapier, no Make, no Slack. Manual export only (PDF, image, text, secure link).

**Meeting platforms**: Zoom, Google Meet, Teams (bot joins), in-person (device mic), audio/video file upload, Google Drive.

**Key features**:
- Visual Note Pro — auto-generated mind maps from meetings
- AI summaries with key points, decisions, action items
- Speaker identification with automatic detection
- Ask AI — post-meeting Q&A on meeting content
- Meeting statistics (duration, speaker talk time)
- 30+ language transcription, 99% accuracy claimed
- Cross-platform: web, iOS, Android with auto-sync

**Key gotchas**:
- No API, no webhooks, no CRM — zero automation surface
- Pricing is not publicly documented in standard tiers
- Mind maps are auto-generated and can't be manually restructured in-app
- No documented compliance certifications (SOC 2, HIPAA, ISO 27001)
- Visual mind maps can get cluttered on long meetings with many topic switches
- Singapore data jurisdiction — check with support for data residency details

**Selection notes**:
- **Pick Meeting.ai when**: You want visual mind map output from meetings instead of just text summaries, you work in Southeast Asian markets with multilingual meetings and diverse accents, you want a simple visual-first experience without needing CRM or API integration, or you prefer spatial/visual note formats for brainstorming and workshop sessions
- **Avoid Meeting.ai when**: You need any API or webhook access (→ Fathom, Fireflies, MeetGeek), you need CRM integration (→ Fathom Business, Fireflies Business, Avoma), you need compliance certifications (→ Fathom, Gong, Fireflies Enterprise), you need automated workflows or Zapier integration (→ Fireflies, Circleback, VoiceToNotes), you need clear upfront pricing (→ most competitors publish pricing), or you need to search across multiple meetings (→ Fireflies, Gong, Grain)

---

## Laxis

For deep platform coverage (recording methods, voice keyboard, CRM automation, hardware ecosystem, pricing gates), use `/sales-laxis`.

**Positioning**: AI meeting intelligence platform that combines bot-free meeting recording with a universal voice keyboard for dictation. Differentiators are voice keyboard with verbal/precision cleanup, 50+ report templates, hardware ecosystem (OSO AI Earbuds, Panocore360 camera), and team-wide Synergy Radar. 100K+ users across 4K+ orgs.

**Pricing (2026-04)**: Basic (Free) 300 min/mo with 30-day history, Premium $15.99/mo with 2K min/mo + AI Writer + LaxisChat, Business $29.99/mo unlimited + CRM + Zapier + team admin, Enterprise custom with API + SSO + private AI. Annual saves 20%.

**API**: Enterprise-only. No public documentation, no developer portal, no public endpoints. API + SSO + data residency only available on custom Enterprise contracts.

**Webhooks**: None. No webhook system on any plan.

**Integrations**: HubSpot + Salesforce (Business+), Slack, Gmail, Notion, Zapier 7,000+ apps (Business+). No Make, no n8n, no native iPaaS beyond Zapier.

**Recording methods**:
- Bot-free (zero-footprint) — captures audio from device, no visible bot in meeting
- AI assistant bot — joins via calendar invite
- File upload — process existing audio/video
- Hardware — OSO AI Earbuds for in-person, Panocore360 for room capture

**Key gotchas**:
- Closed captions must stay on or transcription stops mid-meeting
- Speaker ID uses names on Google Meet but generic labels (Speaker 1/2) on Zoom/Teams
- No audio recording for Google Meet — transcription works but no playback
- CRM sync requires Business ($29.99/mo) — not available on Premium
- 7,000+ integrations claim goes through Zapier, not native connectors
- Support responsiveness and AI quota tracking reported as unreliable (G2/Capterra)
- No documented SOC 2, HIPAA, or ISO 27001

**Selection notes**:
- **Pick Laxis when**: You want bot-free meeting recording plus universal voice dictation in a single tool, you need voice keyboard with filler word cleanup across Slack/Gmail/Notion/Teams, you want 50+ structured report templates for professional meeting output, you're interested in hardware (earbuds/camera) for in-person meeting capture, or you need team-wide meeting trend analysis (Synergy Radar)
- **Avoid Laxis when**: You need a public API or webhooks for custom integrations (→ Fathom, Fireflies, MeetGeek), you want CRM sync under $30/mo (→ Fathom Business $25/annual, Fireflies Business $19/annual), you need compliance certifications (→ Fathom, Gong, Fireflies Enterprise), you need named speaker identification on Zoom/Teams (→ Fireflies, Fathom), or you need a generous free tier (→ Fathom unlimited free recordings vs Laxis 300 min/mo)

---

## KaraX.ai

For deep platform coverage (OneChat workspace, AI workflow automation, pricing gates, integration details), use `/sales-karax`.

**Positioning**: Agentic AI workspace that combines multi-LLM chat (Claude 4.5 Sonnet, Gemini 2.5 Flash, 4 others on paid), real-time meeting transcription, and AI workflow automation across 800+ integrations — all from a single "OneChat" interface. Replaces separate subscriptions for ChatGPT/Claude Pro + Otter.ai + Zapier at $14.99/mo. Founded 2023 by C3ALabs, NYC. NVIDIA Inception member. SOC 2 Type II, HIPAA, GDPR.

**Pricing (2026-04)**: Starter (Free) 25 AI chats/day, 5 meetings at 30 min max, 4 integrations, 7-day retention. Pro $14.99/mo annual ($19.99 monthly) with 100 chats/day, 8 hrs meetings, 800+ integrations. Business $39.99/mo annual ($49.99 monthly) with 500 chats/day, 16 hrs meetings, CRM + workflow builder. Enterprise custom with unlimited, E2EE, private models.

**API**: None. No public API, no developer portal, no REST/GraphQL endpoints, no webhooks on any plan.

**Webhooks**: None.

**Integrations**: Zoom, Google Meet, Teams (all plans). Google Drive, OneDrive, Gmail, Outlook, Notion, Linear, ClickUp, Trello, Jira, Slack (Pro+). Salesforce, HubSpot (Business+). 800+ total on Pro+. No Zapier, no Make — automation is via the platform's own agentic AI.

**Key gotchas**:
- 7-day data retention on Starter — transcripts auto-delete
- 30-minute meeting cap on Starter
- Only 4 integrations on Starter (800+ is Pro+)
- CRM integration requires Business ($39.99/mo)
- No public API or webhooks — can't build custom integration pipelines
- Limited community presence — no G2/Capterra reviews, sparse troubleshooting resources
- 127 reviews on their website (4.8/5) but no independent review platform presence

**Selection notes**:
- **Pick KaraX when**: You want meeting transcription + multi-LLM AI chat + workflow automation in a single tool instead of 3-4 separate subscriptions, you want agentic AI that executes multi-step workflows by describing outcomes rather than building rules, you're budget-conscious and want to replace ChatGPT + Otter + Zapier for under $15/mo, or you value SOC 2/HIPAA/GDPR compliance on a startup budget
- **Avoid KaraX when**: You need an API or webhooks for custom integrations (→ Fathom, Fireflies, Grain), you need deep conversation intelligence or sales coaching (→ Gong, Avoma, tl;dv), you need a proven platform with extensive independent reviews (→ Otter, Fathom, Fireflies), you need CRM sync under $40/mo (→ Fathom Business $25/annual, Fireflies Business $19/annual), or you need unlimited free recordings (→ Fathom free tier)

---

## Dicte

For deep platform coverage (privacy architecture, AI SKILLs, DicteBOX, pricing tiers), use `/sales-dicte`.

**Positioning**: EU privacy-first AI meeting assistant using exclusively open-source/EU AI models with post-quantum encryption (Kyber) and French-hosted servers. Unique for transcript pseudonymization before AI processing and on-premises DicteBOX hardware for regulated industries. Mobile-first (iOS/Android strongest).

**Pricing (2026-04)**: Free (120 min/mo), Plus €19.99/mo (€9.92 annual), Business custom (3+ users), Enterprise custom (10+ users). 50% webapp discount on Plus, 40% on Business.

**API**: Business/Enterprise only. No public API documentation. No documented endpoints, auth methods, or rate limits.

**Webhooks**: Not documented.

**Integrations**: Business/Enterprise only — details not public. No Zapier/Make modules. No MCP server.

**Key differentiators**:
- Open-source/EU AI models only — no data sent to US AI providers
- Transcript pseudonymization before any model processing
- Post-quantum encryption (Kyber) for data at rest
- Audio deleted after processing — no centralized audio storage
- DicteBOX on-premises hardware (Enterprise only)
- AI SKILLs: SWOT analysis, project reports, mind maps, custom models (Business+)
- Servers in Paris (Scaleway), French jurisdiction

**Limitations**:
- Only 5 languages (EN, FR, DE, ES, IT) vs competitors with 50-100+
- No public API or webhook documentation
- Mac desktop in beta
- Conversational AI agent still "coming soon"
- No independent reviews (G2/Capterra)
- ~23K users — small user base

**Selection notes**:
- **Pick Dicte when**: EU data residency is mandatory, you need open-source/EU-only AI models (no US providers), you want on-premises with DicteBOX for regulated industries, you want AI analysis beyond transcription (SWOT, project reports, mind maps), or you operate in FR/DE/ES/IT/EN and want a privacy-first mobile recorder
- **Avoid Dicte when**: You need an API or webhooks for custom integrations (→ Fathom, Fireflies, Grain), you need more than 5 languages (→ Notta 58, Jamy 100+), you need CRM sync on a budget (→ Fathom Business, Fireflies Business), you need sales coaching or methodology scorecards (→ Gong, Avoma, tl;dv), or you want a proven platform with community support and independent reviews (→ Otter, Fathom)

---

## NoteWave

For deep platform coverage (features, pricing, data handling, limitations, selection comparison), use `/sales-notewave`.

**Positioning**: iOS AI note-taking app by DOTFORGE LIMITED. One-tap recording with AI transcription in 100+ languages, speaker identification, AI summaries, and unique study features (flashcards, quizzes). Also imports YouTube URLs and PDF/Word documents. Privacy-first — audio deleted immediately after processing. Apple ecosystem only (iOS 15.1+, macOS 12.0+ M1, visionOS). Launched Dec 2025.

**Pricing (2026-04)**: Free (3 notes total — not per month), Premium Weekly $9.99/wk, Monthly $12.99/mo, Annual $44.99/yr or $79.99/yr. All via Apple App Store.

**API**: None. No public REST API, no GraphQL, no webhook endpoints.

**Webhooks**: None.

**Integrations**: None. No CRM, no Zapier/Make, no Slack, no calendar sync, no MCP server. Export is manual only. Apple Sign-in required.

**Key features**:
- One-tap audio recording with AI transcription (100+ languages)
- Speaker identification
- AI-generated summaries and key points
- Flashcards and quiz generation (Premium)
- Chat with notes — ask AI questions about recordings (Premium)
- YouTube URL → structured notes
- PDF/Word/presentation import → structured notes
- Full-text search across all transcripts
- Privacy-first: audio deleted immediately after processing (Google Cloud AI)
- Storage on Supabase (US + EU data centers)

**Known issues**:
- Free tier is only 3 notes ever — functionally a trial
- No API, webhooks, or any integration surface — fully siloed
- Apple ecosystem only — no Android, Windows, or web app
- Apple Sign-in required — no email/password option
- Pricing has 4 tiers with unclear differences between two annual plans ($44.99 vs $79.99)
- No team features, shared workspace, or collaboration
- No meeting bot — doesn't auto-join Zoom/Meet/Teams
- No CRM integration — transcripts stay inside the app

**Selection notes**:
- **Pick NoteWave when**: You're an Apple-only user wanting a simple recording + transcription + AI summary app with study features (flashcards/quizzes), you want 100+ language support on iOS, you value privacy (audio deleted immediately), you're a student/researcher turning lectures into study materials, or you want YouTube/PDF import into the same note-taking workflow
- **Avoid NoteWave when**: You need any integrations — CRM, Slack, Zapier, webhooks, API (→ Fathom, Fireflies, Wave), you need Android or Windows support (→ Otter, Notta, Fireflies), you need a meeting bot that auto-joins calls (→ Fathom, Fireflies, tl;dv), you need team collaboration or shared workspaces (→ Fireflies, tl;dv), you need sales coaching or deal intelligence (→ Gong, Avoma, tl;dv), or you want a generous free tier (→ Fathom unlimited free)
