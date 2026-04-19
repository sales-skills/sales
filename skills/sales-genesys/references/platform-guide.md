# Genesys Cloud CX Platform Reference

## Platform overview

Genesys Cloud CX is an AI-powered experience orchestration platform — the leading enterprise CCaaS (Contact Center as a Service) solution. It enables organizations to manage customer interactions across voice, digital, and self-service channels from a single cloud platform. Target audience is mid-market to large enterprise contact centers (50-10,000+ agents). Reached ~$2.5B in annual recurring revenue by early 2026 with 35% YoY cloud growth.

Key differentiators vs competitors: composable architecture, deep Salesforce joint product (CX Cloud), AppFoundry marketplace (450+ apps), 15 regional deployments, and phased migration support from on-prem (PureBridge program).

## Key modules

### ACD Routing
Automatic Contact Distribution routes interactions to agents based on skills, language, priority, queue membership, and AI-predicted outcomes (CX 4). Supports voice, email, chat, SMS, social media, and web messaging channels. Bullseye routing narrows/expands agent pool based on wait time.

### Architect (IVR/Flow Builder)
Visual drag-and-drop flow builder for IVR, bot flows, digital flows, and workflow automations. Supports speech recognition, DTMF, data dips, and external integrations. Archy CLI tool enables YAML-based flow authoring for CI/CD pipelines. Bot Transcription Connector allows third-party ASR engines.

### Workforce Management (WFM)
Available on CX 3 ($155/mo) and above. Forecasting uses historical data and AI to predict interaction volumes by channel. Scheduling optimizes agent shifts with constraints (skills, availability, labor rules). Real-time adherence monitoring tracks agents against schedule. Intra-day management for adjustments. **Limitation**: Cannot build schedules for multiple sites simultaneously — must build per site.

### Quality Management (QM)
Evaluation forms for structured agent scoring. Screen recording alongside voice recording (CX 3+). Coaching workflows — low evaluation scores automatically trigger coaching tasks. Calibration sessions for evaluator consistency. Analytics on evaluation trends over time.

### AI Capabilities (CX 4 — $240/mo)
- **Predictive routing**: AI-powered interaction routing based on predicted outcomes
- **Agent Assist**: Real-time knowledge surfacing and next-best-action during conversations
- **Virtual agents**: Conversational AI for self-service (voice and digital)
- **Journey Analytics**: Cross-channel journey mapping and optimization
- **Knowledge Management**: Centralized knowledge base with AI-powered search

### Outbound Dialer
Campaign management with predictive, power, progressive, and preview dialing modes. TCPA/DNC compliance tools. Contact list management. Campaign analytics. **Tip**: For teams under 25 agents, power dialing performs better than predictive — the algorithm is too aggressive for small teams.

### Interaction Analytics
Speech and text analytics across 100% of interactions. Sentiment analysis, topic detection, keyword spotting. Available on CX 3 (basic) and CX 4 (advanced AI). Useful for compliance monitoring and trend discovery.

### Recording
Voice and screen recording. Dual-channel recording for quality purposes. Storage policies with automatic archival. Encryption at rest and in transit.

## Pricing and limits

| Tier | Price/user/mo | Key inclusions |
|---|---|---|
| CX 1 | $75 | Voice-only: inbound/outbound voice, basic IVR with speech recognition, call recording, standard reporting |
| CX 2 | $115 | + Email routing, web chat with co-browse, SMS/MMS, social media channels |
| CX 3 | $155 | + WFM (forecasting, scheduling, adherence), speech analytics, sentiment analysis, screen recording |
| CX 4 | $240 | + Predictive routing, agent assist, journey analytics, knowledge management |

**Telephony costs (separate from seat licenses):**
- Inbound DID (local): ~$0.009/min
- Inbound toll-free: ~$0.015/min
- Outbound (US): ~$0.0119/min

**Add-ons:**
- Genesys Cloud AI: usage-based pricing (separate quote)
- Extra recording storage: tiered pricing
- Premium support: 15-20% of licensing
- Professional services / implementation

**Contract terms:** Multi-year commitments standard. Named user licensing (pay for every licensed user, active or not). Actual pricing depends on seat count, contract length, and negotiation.

## Integrations

### Salesforce
- **CX Cloud from Genesys and Salesforce**: Joint product — unified AI-powered agent workspace in Salesforce with Genesys Cloud CX contact center capabilities. Available on AppExchange and AppFoundry.
- **Genesys Cloud CX for Service Cloud Voice**: Single-pane agent desktop through Salesforce Service Cloud, powered by Genesys Cloud.
- **Smart Connector for Salesforce**: Data sync between Genesys Cloud and Salesforce.

### AppFoundry Marketplace
450+ curated apps, integrations, and services. Categories include CRM connectors, WFM add-ons, analytics, compliance, and AI. Tiered partnership (Bronze entry, progression based on cloud recurring revenue KPIs).

### Native integrations
- CRM: Salesforce, Microsoft Dynamics 365, Zendesk, ServiceNow
- AI/Bots: Amazon Lex, Google Dialogflow
- Cloud: AWS Lambda
- Collaboration: Microsoft Teams
- Analytics: Various BI connectors

### Complementary tools that integrate with Genesys
- **Observe.AI**: Auto QA scoring on 100% of interactions
- **Balto**: Real-time agent guidance during live calls
- **Cresta**: Enterprise AI (agent assist + virtual agents + QA)
- **Calabrio ONE**: Workforce optimization + analytics

## API and developer platform

### Authentication
OAuth 2.0 with two grant types:
- **Client Credentials**: Single-step, for non-user applications (services, cron jobs)
- **Code Authorization**: Two-step, for user-facing applications

Endpoints: `/oauth/authorize` (user auth), `/oauth/token` (token exchange)

### Regional API base URLs

| Region | Base URL |
|---|---|
| US East | `https://api.mypurecloud.com` |
| US East 2 | `https://api.use2.us-gov-pure.cloud` |
| US West | `https://api.usw2.pure.cloud` |
| Canada | `https://api.cac1.pure.cloud` |
| São Paulo | `https://api.sae1.pure.cloud` |
| Dublin | `https://api.mypurecloud.ie` |
| Frankfurt | `https://api.mypurecloud.de` |
| London | `https://api.euw2.pure.cloud` |
| Zurich | `https://api.euc2.pure.cloud` |
| Mumbai | `https://api.aps1.pure.cloud` |
| Seoul | `https://api.apne2.pure.cloud` |
| Sydney | `https://api.mypurecloud.com.au` |
| Osaka | `https://api.apne3.pure.cloud` |
| Tokyo | `https://api.mypurecloud.jp` |
| UAE | `https://api.mec1.pure.cloud` |

### Platform Client SDKs
JavaScript (CJS/AMD/ES6), Java/Android, Go, .NET, Python, iOS

### API resource categories
Routing, Conversations, Analytics, Users, Groups, Architect (Flows), Outbound, Quality, WFM, Recording, Integrations, Authorization, Telephony, Notifications, GDPR, Billing, Organization, Content Management, External Contacts, Geolocation, and more.

### Developer tools
- **API Explorer**: Browser-based API documentation and inline request testing
- **Platform API CLI (`gc`)**: Command-line tool for scripting
- **Archy**: YAML-based Architect flow authoring for CI/CD
- **Notification relay**: WebSocket-based real-time event streaming
- **Developer Center**: https://developer.genesys.cloud/

### GitHub
Organization: MyPureCloud (101 public repos)
Notable repos:
- `terraform-provider-genesyscloud` (54 stars, 65 open issues) — Terraform provider for infrastructure-as-code
- `developercenter-tutorials` (26 stars) — Sample code and tutorials
- `openapi-explorer` (18 stars) — API documentation tool
- `client-app-sdk` (15 stars, 22 open issues) — Client application SDK

## Workflow setup

### Setting up ACD routing
1. Create queues with agent members and skills
2. Configure Architect call flow (IVR menus, data dips, routing logic)
3. Assign DID numbers to call flows
4. Set up wrap-up codes and after-call work
5. Enable queue monitoring and supervisor tools

### Setting up WFM (CX 3+)
1. Import historical data for forecasting baseline
2. Configure business units, service goals, and planning groups
3. Generate forecasts by channel
4. Create scheduling rules (shifts, rotations, constraints)
5. Publish schedules and enable real-time adherence

### Setting up Salesforce integration
1. Choose integration type: CX Cloud (joint product), Service Cloud Voice, or Smart Connector
2. Install from AppExchange or AppFoundry
3. Configure OAuth credentials
4. Map agent desktop layout in Salesforce
5. Set up data sync rules (contacts, cases, interaction logs)

## Deep dives

### Migration from on-prem
Genesys offers PureBridge Cloud program for migrating from Genesys Engage (on-prem), Avaya, Cisco, or other legacy systems. Includes:
- Proven migration methodology
- Special offers to avoid double-payment during transition
- Technical scholarships for team training
- Hybrid deployment support (partial cloud, partial on-prem)

### Compliance and security
- SOC 2 Type II, ISO 27001, PCI DSS, HIPAA eligible
- GDPR compliance tools (data subject requests via API)
- FedRAMP authorized (US East 2 region)
- Data residency options across 15 regions
- MFA enforcement for administrators (required from March 2026)

### Partner ecosystem
- **Ascend Partner Program**: Solution providers, referral partners, technology distributors (NA only), services partners
- **AppFoundry**: ISV marketplace with tiered partnership (Bronze entry)
- Genesys runs its own partner portal for deal registration and enablement
