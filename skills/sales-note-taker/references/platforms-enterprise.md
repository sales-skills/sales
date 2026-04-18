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

## Bolt-on conversation intelligence (not standalone)

- **Revenue.io Conversation Intelligence** — inside Revenue.io (Orchestrate tier); covered by `/sales-revenue-io`
- **Salesloft Conversations** — inside Salesloft; covered by `/sales-salesloft`
- **ZoomInfo Chorus** — inside ZoomInfo; covered by `/sales-zoominfo`
- **Seismic Meeting Intelligence** — inside Seismic; covered by `/sales-seismic`
