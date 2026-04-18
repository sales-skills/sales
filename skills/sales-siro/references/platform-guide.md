# Siro Platform Reference

## Platform overview

Siro is an AI-powered field sales coaching platform that records in-person customer conversations via mobile app and provides AI analysis, real-time coaching, and automated CRM data capture. It targets in-person sales teams across auto dealerships, home improvement, home services, home builders, telecom, political canvassing, and medical devices. Siro raised $50M in 2025 (led by SignalFire) and positions itself as enabling sales leaders to coach at scale without physical ride-alongs.

## Key modules

### Recording & Transcription
- Mobile app records conversations — tap to start
- Works offline (no cell service required) — uploads when connectivity returns
- Automatic transcription of all interactions
- Recordings stored locally until uploaded

### Halftime — Real-time Mid-Call Coaching
- Delivers live coaching guidance during active sales calls
- Performance scorecards update mid-conversation
- Helps reps adjust approach while still with the customer
- Note: Some comparison sources say Siro's coaching is post-call only — Siro's own site emphasizes Halftime as real-time. Verify with Siro which features are available on your plan.

### Ask Siro
- AI Q&A on individual recordings
- Get answers to specific questions without reviewing the full transcript
- "What objections did the customer raise?" / "What products were discussed?"

### Automated Data Capture
- AI extracts key details: decision maker, objections, next steps, products discussed
- Auto-fills CRM fields on the associated opportunity
- Eliminates manual data entry after appointments

### Analytics & Performance
- Real-time performance insights across the team
- Benchmark scoring against organizational best practices
- Pattern identification from top performers
- Cross-sell and upsell opportunity surfacing

### Follow-up Automation
- Auto-generated follow-up message drafts after appointments
- Deal momentum flagging
- Reduces admin busywork between appointments

## Pricing and limits

**Pricing is not publicly listed.** Siro requires a demo/sales conversation for quotes.

Best-effort estimates from review sites and comparison articles (2026):
- **Per-user cost**: $200-350/month (~$3,000+/user/year)
- **Minimum commitment**: 5-10 users typically required
- **Contract length**: Annual (12-month minimum)
- **Setup fees**: $2,000-$5,000 depending on integration complexity
- **10-person team estimate**: $30,000-$40,000/year plus setup
- **Renewal increases**: ~15% price increases reported at renewal

**Support tiers** (from review articles):
- Starter/Professional: Email-only support, 24-48 hour response time
- Enterprise: Dedicated account manager

**Security**: SOC 2 Type II certified, MFA and SSO, data policy states "Siro never trains AI models on your conversations."

## Integrations

### CRM (via Merge)
Siro uses Merge's CRM Unified API for standard integrations:
- Salesforce
- HubSpot
- Zoho CRM
- Pipedrive
- Microsoft Dynamics
- SugarCRM

Objects synced: Opportunities, Engagements, Engagement Types, Users. Merge handles Field Mapping for custom CRM fields.

### Field sales / home services platforms
- ServiceTitan
- SalesRabbit
- SPOTIO
- Leap SalesPro
- i360 Lightning
- FieldRoutes
- CompanyCam

### No Zapier/Make/n8n connectors
Siro does not have connectors in Zapier, Make, or n8n. For custom integrations, use the REST API.

## Data model (API)

### Core objects
- **Engagement**: A sales interaction (meeting, call, appointment). Has `externalId`, `startTime`, `endTime`, `subject`, `engagementType`.
- **Opportunity**: A deal/sale. Has `externalId`, `name`, `amount`, `closedAt`, `disposition` (WON/LOST).
- **Recording**: An audio recording linked to an engagement. Has `recordingId`, `summary`, `entityExtractions`.
- **Entity Extraction**: AI-extracted data from a recording — `name`, `value`, `mappings` to CRM fields.

### API base URLs
- Main API: `https://functions.siro.ai/api-externalApi/v1`
- Recordings/Entities: `https://api.siro.ai`

### Authentication
- **Organization API Token**: `Authorization: Bearer <token>` header
- **OAuth Access Token**: `x-siro-auth-token: <token>` header, 16-hour lifespan

### Key endpoints
| Method | Endpoint | Base URL | Auth | Purpose |
|---|---|---|---|---|
| PUT | `/v1/integrations/sync/engagements` | functions.siro.ai | Bearer | Sync appointments/engagements from CRM |
| PUT | `/v1/integrations/sync/opportunities` | functions.siro.ai | Bearer | Sync deals/opportunities from CRM |
| GET | `/v1/integrations/engagements/{id}` | functions.siro.ai | Bearer | Get engagement details |
| GET | `/v1/core/recordings/{recordingId}` | api.siro.ai | OAuth | Get recording details (summary, extractions) |
| GET | `/v1/core/entities/extractions/{recordingId}` | api.siro.ai | OAuth | Get AI-extracted CRM field data |
| GET | `/v1/core/recordings/{recordingId}/summaries` | functions.siro.ai | Bearer | Get recording summaries |
| POST | `/v1/core/oauth/apps` | api.siro.ai | — | Create OAuth app |
| POST | `/v1/core/oauth/apps/{clientId}/access-token` | api.siro.ai | — | Generate OAuth token (16hr lifespan) |

### Webhooks
Two event types:
- `integrations.recordingProcessed` — fired when recording processing completes
- `integrations.recordingLinked` — fired when recording links to a CRM record

Payload includes `recordingId`, `siroUserId`, CRM context (`engagement.externalId`, `opportunity.externalId`, `account.externalId`).

Webhook verification uses Svix headers:
- `svix-id` — unique message identifier
- `svix-timestamp` — epoch seconds
- `svix-signature` — base64-encoded signature

### Deep linking
Open the Siro app directly to a recording session:
```
siro://record?appointmentId={external-id}&title={customer-name}&opportunityId={opp-external-id}
```

## Workflow setup

### Initial setup (new team)
1. **Install mobile app** on each rep's phone (iOS/Android)
2. **Configure recording consent** — check if your state requires two-party consent (11 U.S. states). Train reps on disclosure language.
3. **Connect CRM** via Merge (standard CRMs) or REST API (custom CRMs)
4. **Customize scorecards** — upload your sales script or import from top-performer recordings
5. **Enable Halftime** — configure real-time coaching settings
6. **Test with one rep** — run a test appointment, verify recording uploads, CRM sync fires, and coaching feedback appears
7. **Roll out** — deploy to full team with training on app usage and Halftime

### Custom CRM integration (API)
1. Generate an Organization API Token in Siro console
2. Create an OAuth app (POST `/v1/core/oauth/apps`) for recording access
3. Sync your CRM's engagements to Siro via PUT `/v1/integrations/sync/engagements`
4. Sync opportunities via PUT `/v1/integrations/sync/opportunities`
5. Register webhook endpoints for `recordingProcessed` and `recordingLinked`
6. When webhook fires, GET the recording details and entity extractions
7. Map extracted data back to your CRM fields

## Deep dives

### Siro vs Rilla comparison

| Factor | Siro | Rilla |
|---|---|---|
| Pricing | ~$3,000+/user/year | ~$4,000+/user/year |
| Real-time coaching | Halftime (mid-call) | No (post-appointment only) |
| Offline recording | Yes | Yes |
| CRM via Merge | 6 CRMs | 5 CRMs |
| Public API | Yes (REST + webhooks) | No public API |
| Phone call recording | Mentioned in some sources | No |
| Industries | Auto, home services, telecom, political, medical | Home services focus |
| Home services depth | Generic playbooks | Deeper vertical specialization |
| Contract | Annual, 5-10 user min | Annual, 5 user min |

### Recording consent by state
These 11 U.S. states require all-party consent for recording:
California, Connecticut, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Oregon, Pennsylvania, Washington.

In these states, reps must verbally disclose they're recording before starting. Siro does not auto-handle consent notifications.

### Referral program
Siro offers an affiliate referral program (through June 2026):
- 10% of referral's first-year annual contract value
- $50K grand prize for top referrer of the year
- Monthly commission payouts
- Current Siro customers only — find referral link in web dashboard under "Earn"
