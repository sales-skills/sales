# Clari Copilot Platform Reference

## Platform overview

Clari Copilot (formerly Wingman, acquired by Clari in 2022) is an enterprise conversation intelligence platform embedded within Clari's revenue orchestration suite. It provides real-time in-call coaching, AI-powered call summaries, coaching scorecards, gametapes, and deal intelligence — all feeding into Clari's forecasting and pipeline analytics engine. In late 2025, Clari acquired Salesloft, creating a unified revenue platform combining sales engagement, conversation intelligence, and revenue forecasting.

**Target audience**: Enterprise and mid-market sales teams (20+ reps) who want conversation intelligence tightly integrated with revenue forecasting. Best for organizations already using or considering Clari Core for pipeline management.

**Key differentiators**:
- Real-time battlecards and live coaching during active calls (not just post-call)
- Deep integration with Clari's forecasting engine — call signals feed directly into deal scores and pipeline risk
- "Ask Clari" GPT-like chatbot trained on your organization's conversation data
- Smart Deal Summaries that save ~30 minutes per deal review
- Gametapes for curating and sharing winning call moments

## Key modules

### Conversation Intelligence
- **Real-time transcription**: Live text during active calls
- **Call recording**: All calls stored with searchable transcripts
- **AI summaries**: Automatic call summaries, notes, action items, suggestions, and follow-up emails
- **Buyer signal detection**: Intent, objections, competitor mentions, next steps captured automatically

### Live Coaching
- **Battlecards**: Real-time guidance cards that pop up during calls based on conversation triggers (competitor mentions, objection keywords)
- **Playbooks**: Standardized call structures that drive consistency across reps
- **Monologue alerts**: Notifications when a rep talks too long without pausing

### Coaching & QA
- **Coaching scorecards**: Performance metrics — talk-to-listen ratio, monologue length, question frequency, objection handling
- **Gametapes**: Library of recorded winning moments for onboarding and team training
- **Smart Deal Summaries**: AI-generated deal overviews that save reps ~30 min per deal review
- **Ask Clari**: GPT-like chatbot trained on your organization's conversation data

### Revenue Intelligence
- **Deal scoring**: AI-driven opportunity health scores based on conversation signals
- **Pipeline risk flagging**: Identifies deals at risk based on buyer engagement, competitor mentions, stalled activity
- **Forecasting integration**: Call data feeds directly into Clari Core's forecasting engine
- **Win rate tracking**: Claims 20%+ increases with consistent usage

### CRM Auto-Update
- Automatic capture of intent, objections, contacts, and next steps into CRM fields
- Bi-directional sync — pull CRM context into Copilot pre-call, push call insights back post-call

## Pricing and limits

*Best-effort as of 2026-04 — Clari does not publish pricing; verify with your account team.*

| Plan | Est. cost | Key features |
|---|---|---|
| **Growth** | ~$60/user/mo ($720/yr) | Core conversation intelligence — recording, transcription, AI summaries |
| **Accelerator** | ~$90/user/mo ($1,080/yr) | + AI summaries, custom naming, snippet sharing |
| **Enterprise** | ~$110/user/mo ($1,320/yr) | + SSO, API access, dedicated CSM, HIPAA compliance |

**Additional costs:**
- Implementation/professional services: $15K-75K (typically 20-30% of first-year spend)
- Multi-year contracts common for enterprise deals
- Clari Core (forecasting) sold separately: ~$100-125/user/mo
- Full platform (Core + Copilot + Groove): avg ~$160K/yr for enterprise, some exceeding $1M
- No free tier — 30-day trial only

**Plan-gated features:**
- API access → Enterprise only
- SSO/SAML → Enterprise only
- HIPAA compliance → Enterprise only
- Dedicated CSM → Enterprise only
- AI summaries → Accelerator+
- Snippet sharing → Accelerator+

**Standalone vs bundled**: Copilot pricing is lower when bundled with Clari Core. Standalone 2026 estimates run $120-160/user/mo.

## Integrations

### CRM
- **Salesforce**: Native bi-directional sync. One-click integration brings SFDC context into Copilot and pushes call insights back. Deepest integration.
- **HubSpot**: Native integration. Call recordings linked to contacts, link to recording page within HubSpot contact records.
- **Pipedrive**: Native integration. Basic call logging and contact matching.

### Dialers & Video
- Zoom, Google Meet, Microsoft Teams (meeting bot auto-join)
- Dozens of dialer integrations (specific list varies by plan)

### Other
- Zapier (automation)
- Slack (notifications)
- Clari Core (native — forecasting, pipeline analytics)
- Clari Groove (native — sales engagement, post-Salesloft acquisition)

## API reference

Clari has two separate APIs:

### Clari Core API (developer.clari.com)

**Base URL**: `https://api.clari.com/v4`
**Auth**: API key via `apikey` header. Manage tokens in Account Settings → API Token.
**Rate limit**: 100 requests per second per token.
**Plan gate**: Specific plan requirements not documented, but export features typically require Enterprise.

**Endpoints:**

| Method | Path | Purpose |
|---|---|---|
| POST | `/export/forecast/{forecastId}` | Initiate forecast data export |
| GET | `/export/jobs/{jobId}` | Check export job status |
| GET | `/export/jobs/{jobId}/results` | Retrieve completed export data |
| PATCH | `/export/jobs/{jobId}` | Cancel in-progress job |
| GET | `/export/jobs` | List user's export jobs |
| GET | `/admin/limits` | View org rate limit info |
| POST | `/export/audit/events` | Queue audit event export |
| GET | `/audit/events` | Retrieve paginated audit events |
| POST | `/export/activity` | Create activity export job |
| POST | `/ingest/entity/{entity}` | Upload up to 100 records (v2 base URL) |
| POST | `/ingest/bulk/entity/{entity}` | Bulk upload JSON file, max 10MB (v2) |
| GET | `/ingest/job/{jobId}` | Check ingestion job status (v2) |
| POST | `/ingest/schema/{entity}/field` | Manage picklist values (v2) |
| GET | `/opportunity` | Retrieve opportunity data by ID |

**Job states**: `SCHEDULED`, `STARTED`, `DONE`, `FAILED`, `CANCELLED`, `ABORTED`
**Content-Type**: `application/json`
**Error codes**: 400 (bad request), 401 (unauthorized), 403 (forbidden), 500 (server error)

### Clari Copilot API (api-doc.copilot.clari.com)

**Status**: JS-rendered documentation — could not fetch full spec. Enterprise-only access.
**Known capabilities**: Call data export, recording access, transcript retrieval.
**User feedback**: "API is a bit primitive but serves its purpose."

For full Copilot API documentation, log in at api-doc.copilot.clari.com with your Enterprise credentials.

## Data model

### Key objects (Core API)
- **Forecast**: Represents a forecast submission period with forecast entries per rep/team
- **Opportunity**: Salesforce/CRM opportunity synced into Clari with health scores
- **Activity**: Meeting, email, or call activity logged in the system
- **Audit Event**: Admin action logs for compliance tracking
- **Ingestion Entity**: Custom data records uploaded via the ingestion API

### Key objects (Copilot)
- **Call/Meeting**: A recorded conversation with transcript, participants, duration
- **Transcript**: Speaker-labeled text segments with timestamps
- **Summary**: AI-generated meeting summary with action items
- **Scorecard**: Coaching metrics computed from call analysis
- **Battlecard**: Real-time coaching card triggered by conversation keywords
- **Gametape**: Curated call clip saved for training

## Workflow setup

### Initial Copilot deployment (most common)

1. **Connect calendar** — Admin connects Google Workspace or Microsoft 365 org-wide. Verify permissions for all reps, not just the admin.
2. **Configure CRM sync** — Set up Salesforce/HubSpot/Pipedrive integration. Map specific CRM fields for auto-update. Start with 5-10 critical fields.
3. **Set up battlecards** — Create 3-5 battlecards for top competitors. Configure trigger keywords carefully to avoid false positives.
4. **Build initial scorecards** — Pick 3-5 coaching behaviors that correlate with win rates. Keep it simple at launch.
5. **Curate gametapes** — Record 5-10 exemplary calls covering common scenarios (discovery, demo, objection handling). Share with new hires.
6. **Train the team** — Schedule 2-3 training sessions. Plan for 2-4 weeks of admin ramp time due to UI complexity.
7. **Monitor and iterate** — Review battlecard engagement, scorecard effectiveness, and CRM sync accuracy after 2-4 weeks.

### Forecast export pipeline (Clari Core API)

1. **Get API token** — Account Settings → API Token in Clari
2. **Identify forecast ID** — Find the forecast period you want to export
3. **Initiate export** — `POST /export/forecast/{forecastId}`
4. **Poll for completion** — `GET /export/jobs/{jobId}` until state is `DONE`
5. **Download results** — `GET /export/jobs/{jobId}/results`
6. **Load to warehouse** — Parse JSON and load into Snowflake/BigQuery/Redshift
7. **Schedule nightly** — Cron job or orchestrator (Airflow, Prefect) for recurring exports

## Deep dives

### Clari Copilot vs Gong (detailed comparison)

| Dimension | Clari Copilot | Gong |
|---|---|---|
| **Price** | ~$60-110/user/mo | ~$1,600/user/yr + $5-50K platform fee |
| **Real-time coaching** | Live battlecards during calls | Limited (post-call focus) |
| **Forecasting** | Native integration with Clari Core | Gong Forecast (~$700/user/yr add-on, widely considered weak) |
| **Conversation analytics** | Good — scorecards, talk ratios, objection tracking | Best in class — Smart Trackers, deal boards, deeper analytics |
| **API** | Core API good (100 req/sec), Copilot API "primitive" (Enterprise only) | Richest API in category (REST + webhooks, 3 req/sec, 10K/day) |
| **Transcription accuracy** | 92-96% | 85-90% (lower accuracy, compensated by analytics depth) |
| **Languages** | 15 | 70+ |
| **CRM depth** | Good (Salesforce deepest, HubSpot, Pipedrive) | Deep (Salesforce, HubSpot, Dynamics — one CRM at a time) |
| **Best for** | Teams wanting CI + forecasting in one platform | Teams wanting deepest conversation analytics regardless of cost |

### Salesloft acquisition impact (late 2025)

Clari's acquisition of Salesloft means the combined platform now covers:
- **Sales engagement** (Salesloft cadences, dialer, email)
- **Conversation intelligence** (Copilot)
- **Revenue forecasting** (Clari Core)

For buyers, this means:
- Bundled pricing may become more attractive than buying point solutions
- Feature overlap between Copilot and Salesloft Conversations will likely consolidate
- If you're already a Salesloft customer, ask about Copilot bundling
- If evaluating fresh, the combined platform competes directly with Gong's "Revenue AI OS" vision

### Transcription and language limitations

Clari Copilot supports 15 languages for transcription — significantly fewer than:
- Notta: 58 languages
- tl;dv: 30+ languages
- Jamy.ai: 100+ languages with real-time translation
- Gong: 70+ languages

If your sales team sells across multiple regions and languages, this is a meaningful limitation. English-only teams won't notice, but global teams should evaluate carefully.
