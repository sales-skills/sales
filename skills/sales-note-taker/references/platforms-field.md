# Field Sales & In-Person — Platform Reference

AI coaching and recording for in-person, field, and mobile sales. Tools for conversations that happen outside of video calls — in homes, on job sites, or face-to-face. For the comparison table across all categories, see `platforms.md`.

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

## Speakwise

For deep platform coverage (Notion setup, recording modes, transcription tips, pricing), use `/sales-speakwise`.

**Positioning**: iOS-native AI meeting assistant purpose-built for in-person conversations. Records from the iPhone microphone with AirPods hands-free control, transcribes in 50+ languages with on-device processing, and syncs everything to Notion automatically. Targets individual professionals (sales reps, consultants, financial advisors) who need lightweight meeting documentation without desktop tools or meeting bots. Extremely affordable at $59.99/yr.

**Pricing (2026-04)**: Free tier (basic features) + Premium at $59.99/yr (~$5/mo) with unlimited transcription, full AI summaries, priority Notion sync, enhanced multilingual support.

**API**: None. No public API, no webhooks, no third-party integrations beyond Notion.

**Webhooks**: None.

**Integrations**: Notion (native — auto-creates structured pages with transcript, summary, action items), Siri Shortcuts (recording automation), AirPods (hands-free control), Apple Watch (remote control). No CRM, no Zapier/Make/n8n, no Slack.

**Known issues (from App Store reviews and comparison articles)**:
- iOS-only — no Android, web, or desktop app
- No video call integration — cannot join Zoom, Teams, or Google Meet
- No CRM integration — Notion is the only output destination
- No team/collaboration features — individual use only
- Speaker diarization degrades with 5+ participants or overlapping speech
- Transcription accuracy drops in noisy environments despite 92%+ claim
- On-device processing speed depends on iPhone model — older devices slower

**Selection notes**:
- **Pick Speakwise when**: You need the cheapest in-person meeting recorder ($60/yr), you're an individual professional (not a team), you use Notion as your primary workspace, you want privacy-first on-device processing, you need iOS AirPods hands-free recording, or you need 50+ language support on mobile
- **Avoid Speakwise when**: Your team uses Android (→ Notta, Omi), you need CRM integration (→ Rilla, Siro, Fathom), you need video call recording (→ Fathom, Fireflies, Otter), you need team features or admin controls (→ any team-tier note-taker), you need an API or webhook integration (→ Fathom, Fireflies, Siro), or you need enterprise compliance certs (→ Gong, Avoma, Fireflies Enterprise)

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

## Plaud

For deep platform coverage (device comparison, VCS phone call recording, Developer API, unofficial Python client, troubleshooting), use `/sales-plaud`.

**Positioning**: The world's #1 AI note-taking brand (1.5M+ users). Hardware wearable voice recorders (NotePin, NotePin S, Note, Note Pro) that capture in-person meetings and phone calls via a Vibration Conduction Sensor (VCS), then sync to cloud for AI transcription in 112 languages and structured summaries. Unlike software note-takers, Plaud devices record without apps, bots, or phone dependencies.

**Pricing (2026-04)**:
| Item | Price |
|---|---|
| NotePin | $127-159 |
| NotePin S (recommended) | $179 |
| Note | $159 |
| Note Pro | $189 |
| Starter plan (free) | 300 min/mo |
| Pro plan | $99.99/yr ($17.99/mo) — 1,200 min/mo |
| Unlimited plan | $239.99/yr ($29.99/mo) — unlimited (24hr/day cap) |

**API**: Official Developer Platform at docs.plaud.ai (private beta — contact Plaud for access). Capabilities: transcription, file management, AI summary, AI workflow, device operation. Android/iOS SDKs. OpenAPI spec available. Also: unofficial `plaud-api` Python package (pip install plaud-api) — reverse-engineered, not affiliated with Plaud.

**Webhooks**: None documented publicly (official API in private beta).

**Integrations**: Cloud sync via app, AutoFlow email summaries, task manager integration (details vary). No documented Zapier/Make/n8n connectors. CRM integration mentioned in marketing but not detailed.

**Known issues (from G2/Capterra/Reddit/Amazon reviews)**:
- Touch controls on NotePin unreliable — accidental recordings, failure to trigger ("near impossible"), #1 complaint. NotePin S physical button fixes this.
- Sync/connectivity failures — recordings stuck on device, "Plaud disconnected" notifications, require app restarts
- Hardware reliability — battery issues and devices stop responding after 8-9 months (not universal but notable)
- Proprietary charging dock — no USB-C, dependency on specific accessory
- Customer support inconsistency — ranges from "super responsive" to "two weeks with no response"
- Not designed for online meetings — records ambient audio only, no bot join for Zoom/Meet/Teams
- AI summaries described as shallow by some users

**Selection notes**:
- **Pick Plaud when**: You need a polished, mature hardware recorder for in-person meetings and phone calls, you want VCS phone call recording (captures both sides without speakerphone), you need enterprise compliance (SOC 2/HIPAA/GDPR/ISO 27001), you want 112-language transcription, or you want the most established brand in the hardware recorder category
- **Avoid Plaud when**: You primarily do online meetings (→ Fathom, Fireflies, Gong — software-based), you need a public API for transcript pipelines today (→ Fathom, Fireflies, Siro — Plaud API is in private beta), you want the cheapest hardware option (→ Omi at $89), you want open-source or developer extensibility (→ Omi), you need native CRM connectors (→ Fathom, Fireflies, Gong, Avoma), or you need real-time coaching during appointments (→ Siro Halftime, Craft)
