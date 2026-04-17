# Gong Platform Reference

## Platform overview

Gong is the #1 revenue intelligence platform, positioned as a "Revenue AI OS" for enterprise sales teams. It records and analyzes every customer interaction (calls, emails, web conferences), surfaces deal risks, coaches reps, and forecasts revenue. Trusted by 5,000+ customers. Target audience: enterprise revenue organizations with 20+ reps who can justify $1K+/user/year.

## Key modules

### Gong Core (Conversation Intelligence)
- **Call recording & transcription**: Auto-joins Zoom, Teams, Webex, Google Meet, and 50+ dialers. Transcribes with AI. Supports video playback with transcript sync.
- **Smart Trackers**: AI-powered keyword/phrase detection for competitors, pricing, objections, and custom topics. Requires 50-100 training examples for acceptable accuracy. Known for high false-positive rates out of the box.
- **Conversation analytics**: Talk-to-listen ratio, longest monologue, question frequency, filler words, interactivity scores, speaker statistics.
- **Search**: Search across all recorded calls by topic, keyword, speaker, deal, or team. Known UX issues — filtering and navigation are unintuitive (154 mentions in G2 reviews).

### Gong Forecast
- Revenue forecasting with AI-driven pipeline analysis.
- Rated ~4/10 informally by users. ~40% of Gong customers stack Clari for forecasting.
- Requires extensive manual deal reviews.
- No proactive risk identification.
- ~$700/user/year add-on.

### Gong Engage (Sales Engagement)
- Outbound sequencing, email tracking, multi-channel engagement.
- ~$800/user/year add-on.
- Known stability issues — "slow, buggy, and creates excessive administrative burden" per user reviews.
- 6-month trials commonly end without conversion.

### Gong Enable (Revenue Enablement)
- Enablement grounded in actual customer interaction data.
- Training content tied to real conversation patterns.

### Gong Agents
- AI automation for follow-up emails, pipeline updates, and forecast corrections.
- Part of Gong's 2025-2026 AI push.

### Revenue Graph
- Central data layer connecting all interactions across the business.
- Powers AI insights, deal risk detection, and coaching recommendations.

### Gong Collective
- Integration and partner ecosystem.
- 230+ technology and channel partners.
- Curated integrations and services.

## Pricing and limits

**All pricing is market-reported — Gong does not publish official prices.**

| Component | Cost | Notes |
|---|---|---|
| Per-user license (Foundation) | ~$1,600/user/year (list) | Negotiated: $1,000-$1,349 at scale |
| Platform fee | $5,000-$50,000/year | Mandatory regardless of team size |
| Onboarding | $7,500+ (one-time) | Often required, sometimes outsourced |
| Gong Forecast add-on | ~$700/user/year | Weak module — many stack Clari |
| Gong Engage add-on | ~$800/user/year | Known stability issues |
| Gong Enable | Not publicly priced | ~$300-$800/user/year estimated |

**Contract terms**: Annual or multi-year. Auto-renewal with 5-10% uplift. Volume discounts: 100+ seats → 20-35% lower per-seat pricing.

**Fully loaded TCO** (100-user team, Year 1):
- License: ~$300,000/yr
- Platform fees: ~$30,000/yr
- Implementation: ~$100,000 (one-time)
- RevOps maintenance: ~$96,000/yr (Smart Tracker tuning, model retraining)
- **Total Year 1: ~$526,000+**

**ROI by segment**:
- Enterprise (250+ reps): Positive ROI with high adoption
- Mid-market (50-250): Break-even; widespread underutilization common
- Startups (<50): Negative ROI; "too expensive" is the most common complaint

## Integrations

**CRM** (one CRM at a time):
- Salesforce — deepest integration. Calls logged as tasks, bi-directional data sync, deal/opportunity mapping.
- HubSpot — bi-directional sync. Calls logged as meetings.
- Microsoft Dynamics 365 — supported.
- **Limitation**: Cannot connect to two CRMs simultaneously.

**CRM sync timing**:
- Web conference calls: ~15 minutes to appear in CRM
- Configuration changes: 2-24 hours
- Initial import/export: up to 24 hours

**Video/calling**: Zoom, Microsoft Teams, Webex, Google Meet, Dialpad, RingCentral, Aircall, and 50+ dialers.

**Collaboration**: Slack (call summaries, alerts).

**MCP**: Gong announced Model Context Protocol (MCP) support in 2026 to unify AI agents across HubSpot, Microsoft, Salesforce, and others.

**Gong Collective**: 230+ integration partners. Marketplace at collective.gong.io.

## Data model (API)

**Base URL**: `https://api.gong.io/v2/`

**Authentication**:
- Basic Auth: `Authorization: Basic <base64(access_key:access_key_secret)>` — for internal integrations
- OAuth 2.0: Required for public/multi-tenant integrations
- API access scopes: `api:users:read`, `api:flows:read`, `api:calls:read`, etc.

**Key objects**:
- **Calls** — recordings with metadata (participants, duration, direction, media type, language, system)
- **Transcripts** — monologue-structured text with speaker attribution and timestamps
- **Users** — Gong workspace members with stats and activity
- **Deals** — CRM deal/opportunity data synced into Gong
- **Engagements** — interaction events (emails, calls, meetings)
- **Flows** (Engage API) — outbound sequence definitions

**Key endpoints**:
- `GET /v2/calls` — list calls with filters (date, users, deal)
- `GET /v2/calls/{id}` — call metadata (participants, topics, trackers, scorecards)
- `POST /v2/calls/{id}/transcript` — **POST** not GET — returns full transcript with monologues
- `GET /v2/users` — list users
- `GET /v2/users/{id}/stats` — user activity stats
- `GET /v2/stats/activity` — activity statistics
- `GET /v2/stats/interaction` — interaction statistics
- `GET/POST /v2/crm/object` — CRM data operations
- `GET/POST /v2/crm/map-fields` — CRM field mapping
- `GET/POST/PUT /v2/flows` — Engage flow management (requires `api:flows:read` scope)

**Rate limits**:
- **3 requests per second**
- **~1,000 requests per hour**
- **10,000 requests per day**
- Headers on every response: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
- 429 responses include `Retry-After` header
- **Design for this early** — queue all outbound API calls, cache call metadata, batch transcript fetches

**Error responses**: 400 (malformed), 401 (auth failed), 403 (forbidden), 404 (not found), 429 (rate limited), 500+ (server errors)

## Webhooks

**Setup**: Automations tab in Gong's Developer Hub. Create rules that fire webhooks on events.

**Payload structure**: JSON with two top-level fields:
- `callData` — call details in the same schema as API responses
- `isTest` — boolean flag for test executions from the UI

**Payload sections**:
- `metaData` — call ID, URL, title, scheduling, duration, participants, system (Zoom/Teams), direction, media type, language
- `context` — CRM integration data (object types, IDs, field values for Opportunities/Accounts)
- `parties` — participant info: email, name, title, speaker ID, CRM context, affiliation (Internal/External), methods
- `content` — tracked items and topics: tracker names, occurrence counts, phrases
- `interaction` — speaker stats: talk time, ratios, monologue lengths, interactivity, video engagement
- `collaboration` — public comments with timestamps, commenter details, reply threading

**Authentication**: Signed JWT header. Copy the public key from Gong and verify the digital signature on each payload.

**Event types**: Call processed, deal updated, engagement events (push external events into Gong's activity timeline).

## Workflow setup

### Setting up call recording
1. Connect video platform (Zoom, Teams, etc.) in Gong admin
2. Configure which meetings to record (all, select calendars, opt-in)
3. Set up notification preferences (pre-meeting notice to participants)
4. Enable transcription language settings
5. Configure recording storage and retention policies

### Configuring Smart Trackers
1. Go to Settings → Smart Trackers
2. Create a new tracker (e.g., "Competitor: Salesforce")
3. Add trigger phrases (minimum 10-15, target 50-100 for accuracy)
4. Add negative examples to reduce false positives
5. Review flagged moments weekly — retrain as needed
6. **Budget 40+ hours/month for ongoing maintenance** across all trackers

### Building coaching scorecards
1. Define methodology criteria (MEDDPICC, SPIN, Challenger, or custom)
2. Create scorecard template with weighted dimensions
3. Assign to team or deal type
4. Managers score calls against the template
5. Track improvement trends over time
6. **Limitation**: Scorecards are manual — Gong surfaces data but managers do the scoring

### API integration (transcript pipeline)
1. Generate API credentials (Settings → Developer Hub → API Keys)
2. Set up webhook automation rule for "call processed" events
3. Webhook receiver validates JWT signature, enqueues call ID
4. Worker calls `POST /v2/calls/{id}/transcript` (note: POST, not GET)
5. Rate-limit outbound calls to 2/sec (below 3/sec limit for headroom)
6. Normalize transcript JSON, persist to warehouse, fan out to CRM/Slack
7. Set up nightly reconcile job to catch missed webhooks

## Deep dives

### CRM integration details
- Gong syncs call data to CRM as activities (Salesforce tasks, HubSpot meetings)
- Bi-directional sync for deal/opportunity data
- **Does NOT auto-populate**: custom methodology fields, MEDDPICC scores, opportunity stages, or custom objects. Use automation rules or iPaaS to bridge this gap.
- **One CRM only** — cannot connect to Salesforce and HubSpot simultaneously
- CRM field mapping available via API (`/v2/crm/map-fields`)

### Gong Engage API
- Separate from the core Gong API
- Endpoints for flows (sequences), contacts, and engagement events
- Requires `api:flows:read` scope
- Use for programmatic sequence management, contact enrollment, and engagement tracking

### Data portability
- **No bulk export via UI** — must download calls individually
- API is the only path for bulk data access
- Budget developer time for building export pipelines
- Consider iPaaS (Workato, Celigo) for no-code API bridge to warehouse
