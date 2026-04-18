# Salesken Platform Reference

## Platform overview

Salesken is an AI-powered sales platform that analyzes customer conversations to provide real-time insights, coaching, and quality assurance. Founded in India, it serves 200+ businesses across FinTech, Banking, Healthcare, Insurance, EdTech, SaaS, Real Estate, Travel & Hospitality, and BPO Contact Centers. Positions as an all-in-one platform replacing multiple point solutions — conversation intelligence, QA, coaching, and revenue intelligence in a single tool. Strong APAC focus with multilingual capabilities. SOC 2 Type II, GDPR, ISO 27001 certified.

## Key modules

### Revenue Intelligence AI
- Pipeline transparency with deal outcome predictions
- Deal health monitoring with risk alerts
- AI-powered forecasting and BANT qualification
- Buyer intent analysis from conversation signals
- Actionable recommendations for at-risk deals
- Deal summaries with closure probability

### Quality Assurance AI
- Evaluates 100% of conversations automatically (no random sampling)
- Custom performance parameters and scoring rubrics
- Compliance monitoring and regulatory risk detection
- Real-time flagging of compliance breaches
- QA dashboards with trend analysis
- Flexible pricing: 100% call analysis or hourly analysis models

### AI Sales Assistant
- Real-time, personalized coaching prompts during live calls
- Objection-handling suggestions contextual to the conversation
- Automated note-taking during calls
- CRM enrichment — auto-logs transcripts, summaries, and action items
- Historical objection and preference data for context
- Next-best-action recommendations

### Meeting Note Taker
- Call transcription and summarization
- Discussion point capture and organization
- Action item tracking and assignment
- Follow-up generation

### Field Sales Analytics
- Captures in-person/field sales conversations
- AI-powered performance insights for field reps
- Coaching based on on-site interactions
- Conversion analytics for field teams

## Pricing and limits

**Pricing model**: Per-recorded-user license + platform fee based on total supported users.

| Component | Details |
|---|---|
| Starting price | ~$99/mo per recorded user |
| Platform fee | Based on total supported users (amount varies) |
| Module pricing | Available per-module (Revenue Intelligence, QA AI, Sales Assistant, Note Taker, Field Sales) |
| Bundle | Mix-and-match with discounted pricing on combined plans |
| Enterprise | Fully customized solution with tailored integrations and dedicated support |
| Integration cost | Included at no extra cost |
| Free tier | None |

**No publicly listed pricing tiers.** All pricing requires requesting a quote or scheduling a demo.

**Claimed ROI**: 30% improved conversion rates, 80% reduction in QA costs, 25% reduction in managerial costs, 27% revenue increase, 63% ramp-time reduction, 34% lead-cost reduction.

## Integrations

### CRM (native)
- **Salesforce** (Classic and Lightning) — embeds inside dashboards, real-time call insights, deal risk signals, sentiment data. Custom fields, objects, and security model support. API-level flexibility for enterprise.
- **HubSpot** — native integration with auto-logging
- **Zoho CRM** — native integration
- **Custom/legacy CRM** — Salesken builds tailored connectors during onboarding

### Dialers & communication
- Works with most major sales dialers
- Salesloft marketplace partner
- Video conferencing tool support (specific list not published)

### Data flow
- Auto-syncs to CRM: call transcripts, summaries, action items, next steps, deal risk scores, buyer sentiment, QA metrics, objection handling scores, next-best-action recommendations
- Most syncing happens in real time or within minutes after calls
- Field-level mapping configuration available
- Source-of-truth designation per field
- Role-based data access controls
- Custom object support in Salesforce
- Multilingual transcript support across regions

## Data model (API)

No publicly documented REST API. A Postman collection exists at `documenter.getpostman.com/view/11429137/SztA6o8r` but returns JS-rendered content (not accessible programmatically).

Enterprise customers get API-level flexibility:
- Custom field mapping to CRM objects
- Custom data flow definitions
- Security model integration
- Role-based access controls

Third-party integration available via ApiX-Drive (`apix-drive.com/en/salesken-api`).

## Workflow setup

### Standard CRM integration (Salesforce/HubSpot/Zoho)
1. Connect CRM in Salesken admin panel
2. Configure field mapping (which Salesken data maps to which CRM fields)
3. Set source-of-truth rules per field
4. Configure role-based access (who sees what)
5. Enable auto-sync for desired data types (transcripts, summaries, risk scores, etc.)
6. Deploy within days — standard integrations are plug-and-play

### QA scoring setup
1. Define custom performance parameters and scoring rubrics
2. Configure compliance rules and regulatory requirements
3. Set alert thresholds for compliance breaches
4. Enable 100% call analysis or hourly analysis model
5. Train QA team on dashboard and reporting

### Real-time coaching setup
1. Enable AI Sales Assistant module
2. Configure talk track templates and objection handling scenarios
3. Set up real-time prompt preferences per team/role
4. Pilot with a small team (10-15 reps) before org-wide rollout
5. Monitor for call dropout issues during pilot

### Custom integration
1. Contact Salesken onboarding team
2. Map data requirements (fields, objects, security models)
3. Salesken builds tailored connectors
4. Test data flows end-to-end
5. Included at no additional cost

## Deep dives

### Real-time coaching architecture
Salesken's AI listens to live calls, analyzes audio streams in real time, and delivers personalized coaching prompts. Unlike post-call analysis tools (Gong, most CI platforms), Salesken provides in-the-moment guidance. This is a key differentiator but also a source of reported issues (latency, call drops).

### Competitive positioning
- **vs Gong**: Salesken is significantly cheaper (~$99/mo vs ~$1,600/user/yr + $5K-50K platform fee). Salesken has real-time coaching (Gong is primarily post-call). Gong has deeper analytics, larger ecosystem, and more mature API.
- **vs Clari Copilot**: Both offer real-time coaching. Clari integrates deeper with revenue operations workflows and Clari's forecasting platform. Salesken targets more price-sensitive and APAC markets.
- **vs Avoma**: Avoma focuses on meeting lifecycle with methodology scorecards. Salesken focuses on real-time guidance and QA automation. Different strengths.
- **vs Enthu.AI**: Both target contact center QA. Salesken is broader (revenue intelligence + coaching + QA). Enthu.AI is cheaper and more focused on QA specifically.

### Security and compliance
- SOC 2 Type II certified
- GDPR compliant
- ISO 27001 certified
- Enterprise-grade data handling
- Role-based access controls
- Field-level security in CRM integrations

### Target industries and use cases
| Industry | Primary use case |
|---|---|
| Banking / FinTech | Compliance monitoring, regulatory breach detection, QA scoring |
| Insurance | Policy adherence, disclosure compliance, agent coaching |
| Healthcare | HIPAA-adjacent call handling, patient communication quality |
| EdTech | Enrollment call optimization, admission coaching |
| SaaS | Pipeline intelligence, deal health, sales coaching |
| Real Estate | Lead qualification, showing appointment conversion |
| Travel & Hospitality | Booking optimization, upsell coaching |
| BPO Contact Centers | 100% call QA, agent performance, compliance |
