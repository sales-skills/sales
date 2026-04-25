# Aviso AI Platform Reference

## Overview

Aviso AI is an end-to-end AI revenue operating system that unifies forecasting, pipeline inspection, deal intelligence, conversation intelligence, relationship intelligence, coaching, sales engagement, and customer success in a single platform. Key differentiator: AI-native forecasting analyzing 100+ variables with claimed 98%+ accuracy, plus MIKI (AI Chief of Staff) with 30+ agentic workflows. Founded 2012, Palo Alto CA. $37M revenue (Dec 2025), 336 employees, 450+ revenue teams. Enterprise-only with custom pricing (~$1,000/user/yr). Primary competitors: Clari (structured forecasting governance), Gong (conversation intelligence), People.ai (activity capture).

## Capabilities & automation surface

### Revenue Forecasting — UI-only (no public API)
AI-driven forecasting with three views: AI Forecast (100+ variable model), Sales Forecast (manager judgment), Adjusted Forecast (manual override). Supports complex models: splits/overlays, run rate, consumption-based, channel-based. Independent hierarchies enable pivots across product lines, geographies, and opportunity views. Patented time-series database (Aviso Replay) ingests 8+ quarters of historical data for temporal analysis.

### Pipeline Inspection & Deal Acceleration — UI-only
Deal drill-down with health scoring, risk signals, next-best-action recommendations. Deal boards with customizable views. Activity timeline showing all touchpoints. Alerts for deals going dark or slipping.

### Conversation Intelligence — UI-only
Transcription, emotion analysis (happiness, sadness, anger, surprise, fear, disgust — not just pos/neg), semantic similarity for objection detection, talk-listen ratios, patience insights, question rates. Ingests recordings from Zoom, Teams, Meet, Webex, RingCentral. Coaching metrics generated per rep and per call.

### Relationship Intelligence (Aviso Graph) — UI-only
GDPR/CCPA-compliant continuously updating network mapping user relationships. Quantified relationship depth and engagement frequency metrics. Dynamic org charts. Mutual success plans. Tenant data isolation.

### MIKI (AI Chief of Staff) — UI-only
Agentic AI with 30+ out-of-the-box workflows: account research, meeting summaries, outreach drafting, risk surfacing, workflow orchestration across GTM systems. Role-specific AI avatars for deal guidance. GTM Agent Studio enables no-code custom agent creation for 50+ revenue use cases.

### Sales Engagement — UI-only
Cadences with AI-personalized messaging. Multi-channel outreach. Integration with Outreach and Salesloft for teams already using those platforms.

### Marketing Intelligence — UI-only
Intent signal ingestion from 6sense and LinkedIn Sales Navigator. Campaign attribution and pipeline influence tracking.

### Customer Success Intelligence — UI-only
Renewal prediction, expansion opportunity detection, churn risk scoring. Integrates with Gainsight and Totango.

### Reports & Analytics — UI-only
NLP-powered report generation. Custom dashboards (note: customizations may revert — known issue). Role-based views for reps, managers, and executives.

### CRM Writeback (Aviso CRM Writeback) — native integration
Auto-updates deal details, logs rep activities, enriches contacts. Bi-directional CRM sync. Supported CRMs: Salesforce (deepest), HubSpot (certified App Partner), Dynamics 365, Freshworks, Oracle, SAP, Zoho, Pipedrive.

### Aviso Connect — enterprise API layer (not public)
Plug-and-play API integration layer extending beyond native datasets to external sources. No public documentation, endpoints, or auth specs available. Requires Aviso implementation team to configure.

**Automation summary**: No public API, no documented webhooks, no MCP server. All integrations are via native connectors or Aviso Connect (enterprise-managed). CRM Writeback is the primary automated data flow. Aviso LiveStream provides real-time sync using NoSQL database.

## Pricing and limits

*Best-effort as of 2026-04 — custom pricing only, verify with Aviso sales.*

| Aspect | Details |
|---|---|
| Pricing model | Custom quote per customer — no public per-seat price |
| Estimated range | ~$1,000/user/year (comparable to Clari) |
| Contract | Annual/multi-year enterprise contracts |
| Free tier | None |
| Trial | POC/pilot available on request |
| Modules | Likely modular pricing — forecasting, CI, engagement, CS may be separate add-ons |

**Negotiation tips**: Request pilot with YOUR historical data to validate accuracy claims. Push for phased module rollout to manage cost. Ask about volume discounts at 50+ seats. Insist on accuracy SLAs if the 98% claim is a selling point.

## Integrations

### CRM (bi-directional sync)
Salesforce (deepest — primary system of record), HubSpot (certified App Partner, marketplace listing), Microsoft Dynamics 365, Freshworks, Oracle NetSuite, Oracle, SAP, Zoho CRM, Pipedrive.

### Conferencing (recording ingestion for CI)
Zoom, Microsoft Teams, Google Meet, Webex, RingCentral, BlueJeans, GoTo Meetings, Moxo.

### Email & Calendar
Gmail, Microsoft Outlook, Google Calendar.

### Messaging
Slack (deal alerts), Microsoft Teams (messaging), Webex, Twilio.

### Sales Engagement
Outreach, Salesloft, SalesHood, Highspot.

### Marketing / Intent
6sense, LinkedIn Sales Navigator, Marketo, Salesforce Account Engagement (Pardot), Mailchimp.

### Customer Success
Gainsight, GoSquared, Intercom, Totango, Olark, SupportBee.

### Data Warehouse
Snowflake, Amazon Redshift, Google BigQuery.

### Data Providers
People Data Labs, Predict Leads, Dun & Bradstreet.

### Ticketing
Zendesk, Chargebee, Maxio, Airbrake.

### Project Management
Jira, Asana, ClickUp, UserVoice, Trello, Monday.com.

### SSO
Okta, OneLogin, Active Directory.

### Financial Systems
Oracle NetSuite, Sage Intacct, SAP Business One, QuickBooks, FinancialForce Financial Management ERP.

### Content / Storage
Box, Dropbox, Apple iCloud, Citrix ShareFile, Microsoft OneDrive, Zoho WorkDrive.

## Data model

No public API — data model is not externally documented. Key objects from platform descriptions:

```json
// Opportunity (central deal object)
{
  "opportunity_id": "opp_abc123",
  "name": "Acme Corp - Enterprise License",
  "stage": "Negotiation",
  "amount": 150000,
  "close_date": "2026-06-30",
  "ai_forecast_amount": 142500,
  "deal_health_score": 72,
  "risk_signals": ["champion_left", "competitor_mentioned"],
  "next_best_action": "Schedule executive alignment meeting",
  "last_activity_date": "2026-04-20"
}
```
<!-- Constructed from docs — verify against live API -->

```json
// Aviso Graph Relationship
{
  "source_user": "rep@company.com",
  "target_contact": "buyer@prospect.com",
  "relationship_depth": 0.85,
  "engagement_frequency": "weekly",
  "last_interaction": "2026-04-18",
  "interaction_types": ["email", "meeting", "call"]
}
```
<!-- Constructed from docs — verify against live API -->

```json
// Conversation Intelligence Call
{
  "call_id": "call_xyz789",
  "meeting_source": "zoom",
  "duration_s": 2400,
  "participants": ["rep@company.com", "buyer@prospect.com"],
  "emotions_detected": {
    "buyer": {"happiness": 0.6, "surprise": 0.2, "anger": 0.05},
    "rep": {"happiness": 0.7, "patience": 0.8}
  },
  "talk_listen_ratio": {"rep": 0.45, "buyer": 0.55},
  "questions_asked": 12,
  "objections_detected": ["pricing_concern", "timeline_risk"],
  "coaching_score": 78
}
```
<!-- Constructed from docs — verify against live API -->

## Quick-start recipes

Since Aviso has no public API, these are configuration-based workflows.

### Recipe 1: Set up Salesforce bi-directional sync with CRM Writeback

1. **Trigger**: You want Aviso to read Salesforce opportunities AND write deal updates back automatically.
2. **Steps**:
   - In Aviso Admin → Integrations → Salesforce, connect via OAuth
   - Map Salesforce fields: Opportunity Name, Stage, Amount, Close Date, Owner → Aviso equivalents
   - Enable CRM Writeback for: deal stage changes, activity logging, contact enrichment, next step updates
   - Configure which fields Aviso can write to (restrict to avoid overwriting manual entries)
   - Set sync frequency (Aviso LiveStream provides real-time, but writeback may batch)
3. **Gotchas**: The connected Salesforce user needs object-level write permissions on Opportunities, Contacts, and Activities. Field-level security in Salesforce can silently block writebacks. Test with a single opportunity before enabling org-wide.

### Recipe 2: Configure multi-model forecasting for a SaaS company

1. **Trigger**: You have subscription revenue, usage-based pricing, and expansion opportunities — need separate forecast models.
2. **Steps**:
   - In Aviso Forecasting → Hierarchies, create independent views for: New Business, Expansion, Renewals
   - Configure product line pivots if you have multiple SKUs
   - Set up consumption-based model for usage revenue (Aviso supports this natively)
   - Enable AI Forecast, set historical lookback to 8 quarters for maximum model accuracy
   - Create executive roll-up view combining all models
3. **Gotchas**: The AI model needs at least 2 quarters of historical data to produce meaningful predictions. Feed it 8+ quarters for best results. If you recently changed your sales process or territories, the model may need recalibration.

### Recipe 3: Enable conversation intelligence from Zoom recordings

1. **Trigger**: You want Aviso to analyze sales calls for coaching and deal signals.
2. **Steps**:
   - In Aviso Admin → Integrations → Zoom, connect via OAuth
   - Enable recording ingestion (Aviso will pull recordings after each meeting)
   - Configure coaching metrics: talk-listen ratio targets, question rate goals, emotion detection sensitivity
   - Set up manager alerts for: low coaching scores, competitor mentions, pricing objections
   - Link conversation insights to deal records for pipeline impact analysis
3. **Gotchas**: Recordings must be cloud recordings (not local). Ensure Zoom recording consent is configured per your jurisdiction. Processing may take 15-30 minutes after the call. Emotion analysis works best with clear audio — noisy environments reduce accuracy.

## Integration patterns

### CRM sync architecture
Aviso uses Aviso LiveStream (real-time NoSQL streaming) for CRM reads and Aviso CRM Writeback for CRM updates:
- **Read**: Continuous sync of opportunities, contacts, accounts, activities from CRM
- **Write**: Auto-updates deal details, logs activities, enriches contacts back to CRM
- **Conflict resolution**: Aviso timestamps all writes — last-write-wins. Configure which fields Aviso can modify vs read-only to prevent overwriting manual entries.
- **Multi-CRM**: Aviso One consolidates multiple CRM instances into a unified view (e.g., Salesforce + Dynamics in same org).

### Data warehouse integration
Aviso lists Snowflake, Redshift, and BigQuery as integrations:
- Likely an export/ETL flow rather than real-time API push (no documentation on mechanism)
- Contact Aviso implementation team to configure
- Fallback: CRM Writeback → CRM → existing CRM-to-warehouse pipeline

### Workaround for missing public API
- **CRM as a proxy**: Aviso writes to CRM → use CRM's API to read the enriched data
- **Slack alerts**: Aviso pushes deal alerts to Slack → use Slack's API for downstream automation
- **Data warehouse**: If Aviso → Snowflake integration is configured, query the warehouse directly
- **Feature request**: If API access is critical for your use case, negotiate it into your enterprise contract

## Notable customers

450+ revenue teams. A software company reportedly scaled from $100M to $1B using Aviso. Industries: Technology, Pharma/Life Sciences, Financial Services.

## Competitive comparison

| Feature | Aviso | Clari | Gong | People.ai |
|---|---|---|---|---|
| Primary strength | AI-native forecasting (100+ variables) | Structured forecast governance | Conversation intelligence | Activity capture + CRM enrichment |
| Forecasting depth | Deepest (splits, overlays, consumption, multi-CRM) | Strong (Waterfall, commit management) | Basic (add-on, ~40% stack Clari) | Indirect (via activity data) |
| Conversation intelligence | Full (emotion analysis, coaching) | Via Clari Copilot (separate product) | Best-in-class | None native |
| Relationship intelligence | Aviso Graph (quantified, GDPR-compliant) | Limited | Limited | Strong (activity-based) |
| Agentic AI | MIKI + GTM Agent Studio (30+ workflows) | Limited | Gong Agents (newer) | None |
| Public API | None | REST (Core API, Enterprise) | REST (extensive, 3 req/sec) | None |
| CRM breadth | 9 CRMs (broadest) | Salesforce-centric | All major CRMs | Salesforce, Dynamics, HubSpot |
| Pricing | ~$1,000/user/yr (custom) | ~$1,000/user/yr (custom) | ~$1,200-1,600/user/yr + platform fee | Custom |
| Best for | Complex revenue models, multi-CRM, AI-first orgs | Forecast governance, exec reporting | Call analytics, coaching at scale | CRM data accuracy, activity capture |
