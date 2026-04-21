# Modjo Platform Reference

## Platform overview

Modjo is an AI-powered revenue intelligence platform headquartered in Paris, France. It positions itself as the European alternative to Gong — GDPR-first with all data hosted in France on AWS Paris servers, encrypted in transit and at rest. 22,000+ users, primarily European sales organizations. Founded to give EU sales teams conversation intelligence without sending data to US servers.

## Key modules

### AI Call Scoring
Automated call quality grading based on configurable criteria. Scores calls on methodology adherence, talk-to-listen ratio, question quality, and custom dimensions. Scores are surfaced in the call library and CRM.

### AI CRM Filling
Automatically updates CRM fields from conversation content — claims 90% of fields auto-filled. Supports Salesforce, HubSpot, Pipedrive, Zoho, Sellsy, and Microsoft Dynamics. Eliminates manual CRM data entry post-call.

### AI Insights
Detects business signals across all conversations: churn risk, expansion opportunities, competitor mentions, objection patterns. Aggregated across the team for trend analysis.

### Modjo Deals
Deal intelligence module — pipeline visibility with health signals derived from conversation data. Shows which deals are progressing, stalled, or at risk based on actual call content rather than rep self-reports.

### Email Follow-Up
AI-generated post-call follow-up emails. Drafts are based on call content and action items. Known issue: generated emails can sound overly formal/robotic — best used as draft generators for rep editing.

### Library
Conversation repository with search, tagging, and filtering. Managers can build playlists of exemplary calls for training. Supports comments and sharing, though comment organization (no hashtags/classification) is a known gap.

### Ask Modjo AI
Natural language query interface across all conversation data. Ask questions like "Which deals mentioned budget concerns this quarter?" or "Show me calls where competitors were mentioned." Cross-references calls, CRM data, and deal information.

### AI Agents
Ready-made and customizable AI agents for automated workflows. Agents can transcribe calls, update CRM, spot business signals, and trigger actions based on conversation events.

### MCP Server
Modjo offers an MCP (Model Context Protocol) server to embed conversation data into custom workflows and internal tools — compatible with Claude, Cursor, and other MCP clients.

## Pricing and limits

**Pricing model**: Custom — no public price list. Must contact sales for a quote.

**Estimated costs (2026-04)**:
- Recording license: ~€99/user/mo (~$108 USD)
- Listener license: **Free** (managers, leadership who review but don't record)
- Minimum commitment: ~15 seats
- Entry-level annual cost: ~€17,820/year for 15 recording seats
- Onboarding: €2,000-€5,000 one-time (setup, training, configuration)
- **First-year TCO for 15-person team**: ~€19,820-€22,820

**Contract terms**: Annual contracts only. No monthly billing. No free trial or free plan. Volume discounts available but not publicly documented.

**All subscriptions include**: Full feature access, personalized onboarding, dedicated Account Manager, listener licenses at no extra cost.

**Compared to Gong**: 20-30% cheaper. Gong ~$1,600/user/year + $5K-$50K platform fee + $7,500+ onboarding. Modjo includes onboarding in subscription.

## Integrations

### Phone systems (23)
Adversus, Aircall, Amazon Connect x Service Cloud Voice, Apizee, CloudTalk, Diabolocom, Five9, Fuze, Freshcaller, HubSpot (calling), JustCall, Keyyo, OnOff, Outreach, RingCentral, Ringover, Salesloft, Sipsim, Talkdesk, Vocalcom, Zoom, Zoom Phone, 3CX

### Video conferencing (6)
Google Meet, Microsoft Teams, Zoom, Demodesk (+ deprecated versions of Google Meet and Teams)

### CRM (6)
Salesforce, HubSpot, Pipedrive, Zoho, Sellsy, Microsoft Dynamics

### Collaboration
Slack

### Sales engagement
Outreach, Salesloft (as phone system integrations — calls made through these platforms are automatically imported)

## Data model (API)

### Authentication
- Method: API key via `X-API-KEY` header
- Key generation: Settings > Integrations > Public API (requires Administrator or Manager permissions)
- Key must be copied immediately — cannot be retrieved later
- Base URL: `https://api.modjo.ai/v1/`

### Core objects
- **Calls**: Recording, transcript, summary, highlights, topics, tags, speakers, scoring, reviews
- **Users**: Email, name, license status (recording/listener), role, team assignments, language
- **Teams**: Organizational groupings for users
- **Accounts**: CRM-synced company records
- **Deals/Opportunities**: CRM-synced deal records linked to calls
- **Libraries**: Curated collections of calls for training/sharing

### Key endpoints
- `POST /v1/calls` — Upload a call (provide recording URL or get signed URL for direct upload)
- `POST /v1/calls/exports` — Export call data with advanced filters (v2 beta)
- `GET /v1/users` — List users (paginated, max 100/page)
- `POST /v1/users/bulk` — Create multiple users
- `DELETE /v1/users` — Delete users by ID
- `GET /v1/teams` — List teams (paginated, max 100/page)

### Webhooks
Three event types with HMAC-SHA256 signature verification:
- `call_summarized` — fired when AI summary is generated
- `call_transcript_deleted` — fired when transcript is deleted
- `call_recording_deleted` — fired when recording is deleted

Verification: `SHA256(timestamp + JSON.stringify(payload) + secretToken)`

Payload includes: timestamp, payloadSignature, webhookUuid, webhookUrl, tenantName, eventName, payload

### Supported upload formats
wav, mp3, mpeg, m4a, mp4, webm

## Workflow setup

### 1. Connect CRM (do this first)
1. Go to Settings > Integrations
2. Select your CRM (Salesforce, HubSpot, Pipedrive, Zoho, Sellsy, Dynamics)
3. Authorize the connection
4. Map CRM fields to Modjo's auto-fill targets
5. For HubSpot: also install the Chrome extension for embedded experience

### 2. Connect telephony/video
1. Settings > Integrations > select your phone system or video tool
2. Authorize — Modjo will automatically import calls from connected systems
3. Test with a real call to verify recording, transcription, and CRM logging

### 3. Configure AI scoring
1. Review default scoring criteria
2. Customize to match your sales methodology (MEDDIC, BANT, SPICED)
3. Adjust scoring weights for different criteria
4. Allow 2-3 weeks of call data before evaluating scoring accuracy

## Deep dives

### GDPR and data residency
- All data hosted in France on AWS Paris servers
- Encrypted in transit (TLS) and at rest
- Full GDPR compliance — data processing agreements available
- Call recordings, transcripts, and CRM data never leave EU
- Consent management: Modjo supports configurable recording consent notifications
- Key differentiator vs US-hosted competitors (Gong, Chorus, Salesloft Conversations)

### CRM integration details
- **Salesforce**: Native integration. Bi-directional sync. Call summaries, notes, topics, tags, and comments logged to Activity/Task records. Video conferencing notes available. CRM fields auto-populated from conversation content.
- **HubSpot**: Native integration via Chrome extension. Same sync capabilities as Salesforce. Requires Chrome extension installation for embedded experience.
- **Pipedrive**: Native integration. Video conferencing notes and call logging.
- **Zoho, Sellsy, Dynamics**: Native integrations. CRM notes section logging available for Salesforce, HubSpot, and Pipedrive only — other CRMs get basic call logging.

### API integration patterns
- **Transcript pipeline**: Set up `call_summarized` webhook → receive notification → call `POST /v1/calls/exports` with call ID filter → extract transcript + summary → write to data warehouse
- **User management automation**: Use `POST /v1/users/bulk` to sync users from HR system → `DELETE /v1/users` for offboarding → `GET /v1/teams` to verify team assignments
- **Custom upload**: Use `POST /v1/calls` with recording URL for external call sources (e.g., Twilio recordings) — Modjo downloads within 30 minutes and processes automatically
