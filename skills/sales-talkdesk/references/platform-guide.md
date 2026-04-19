# Talkdesk Platform Reference

## Platform overview

Talkdesk is an enterprise cloud contact center (CCaaS) platform headquartered in San Francisco. Positioned as "Customer Experience Automation" (CXA), it combines AI-powered virtual agents, omnichannel routing, workforce management, quality management, and analytics into a single platform. Targets mid-market to enterprise contact centers. Gartner Magic Quadrant Leader for CCaaS. FedRAMP authorized. Industry-specific Experience Clouds for healthcare (Epic integration), banking, insurance, retail, travel/hospitality, utilities, commercial services, and government.

## Key modules

### Voice (ACD + IVR)
- **Studio**: No-code IVR builder for call flows — drag-and-drop, visual routing logic
- **ACD routing**: Skills-based routing, queue management, business hour rules
- **Recording**: Voice and screen recording (screen recording on Elite+)
- **Real-time/historical analytics**: Standard reporting dashboards

### Digital channels (Digital Essentials+ or Elite)
- Email, chat, SMS, social messaging (Facebook, WhatsApp, Instagram, Twitter)
- IVR digital channel flow builder
- Unified agent workspace for all channels

### AI features (all paid add-ons, quote-based)
- **Autopilot**: AI virtual agents — handle conversations autonomously, no-code AI agent builder
- **CoPilot**: Real-time agent assist — next-best-action suggestions, knowledge surfacing, compliance prompts during calls
- **Navigator**: GenAI-powered routing with multi-language topic detection — intelligent call distribution
- **Interaction Analytics**: Linguistic analysis on 100% of interactions — sentiment, topic detection, compliance markers
- **Identity**: Voice biometrics for caller authentication

### Quality Management (QM)
- Evaluation forms and scoring
- Coaching workflows triggered by evaluations
- Supervisor workspace
- AI-assisted quality scoring (with Interaction Analytics add-on)

### Workforce Management (WFM)
- Forecasting and scheduling
- Adherence monitoring
- History import API for migration
- Request management (time-off, shift swaps)

### Outbound
- Campaign management
- Advanced dialer (preview, progressive — no predictive dialer)
- Automated notifications (SMS, voice)

### Talkdesk Express (free tier)
- US/Canada only
- 25 free licenses included
- $100 in usage credits
- Limited feature set — basic voice contact center

## Pricing and limits

All pricing requires 3-year contract. Telecom fees (PSTN, toll-free, inbound numbers) are separate.

| Plan | Price | What's included |
|---|---|---|
| Digital Essentials | $85/agent/mo | Digital channels only (email, chat, SMS, social). No voice. |
| Voice Essentials | $105/agent/mo | Voice only (inbound/outbound). Studio IVR, analytics, Automation Designer, mobile app, custom integrations. No digital channels. |
| CX Cloud Elite | $165/agent/mo | Omnichannel (voice + digital). Screen recording, SMS notifications, WFM, performance management, Feedback survey tool. |
| Industry Experience Clouds | $225/agent/mo | All Elite features + industry-specific workflows (healthcare, banking, insurance, retail, travel, utilities, commercial services). |
| Government Experience Cloud | Custom | Quote-based. |
| Express | Free | 25 licenses, $100 credits, US/Canada only, limited features. |

### AI add-ons (all quote-based, not included in any plan)
- Autopilot (virtual agents)
- CoPilot (agent assist)
- Navigator (AI routing)
- Interaction Analytics
- Identity (voice biometrics)

### Other add-ons (quote-based)
- Local Presence
- Hybrid Cloud
- Phone Service
- Studio Text-to-Speech
- Social Messaging
- eFax
- Secure Payments (PCI)
- Proactive Outbound Engagement

### Cost reality
Base prices are misleading — expect total costs 20-60% above listed per-agent price when adding AI features, telecom, and essential add-ons. Get an all-in quote during evaluation.

## Integrations

### CRM
- **Salesforce**: Deep integration — Talkdesk for Salesforce (CTI), Talkdesk for Service Cloud Voice (native BYOT), Omni-Channel routing, click-to-call, automatic contact record updates
- 60+ business tool integrations total

### Talkdesk Connections
- Self-service integration builder for connecting third-party APIs
- No-code configuration
- Action executors and authorization validators

### AppConnect marketplace
- Partner-built integrations and apps
- Application registration and management via Partner Project

## Data model (API)

### Authentication
- OAuth 2.0 (Client Credentials, Signed JWT, Authorization Code)
- Scoped permissions per API
- API access requires enterprise plan or AppConnect partnership — submit request with account info

### Base URLs by region
- US: `https://api.talkdeskapp.com/`
- EU: `https://api.talkdeskapp.eu/`
- Canada: `https://api.talkdeskappca.com/`

### API characteristics
- RESTful architecture
- JSON message formatting
- Pagination, sorting, and filtering
- Standard HTTP response codes
- TLS 1.2 minimum

### Key API groups (23 total)
| API | Purpose |
|---|---|
| Core API | Primary platform functionality — contacts, users, accounts |
| Events API | Event streaming, webhooks, app installation lifecycle |
| Live API | Real-time metrics via HTTP Server-Sent Events (SSE) — 5-60 second update frequency, up to 16 metrics per subscription |
| Explore API | Asynchronous historical report extraction — 5-minute data delay to real-time |
| Omnichannel API | Multi-channel support |
| Campaign Management API | Outbound campaign configuration |
| Advanced Dialer API | Dialer operations |
| Automated Notifications API | SMS/voice notifications |
| WFM History Import API | Workforce management data migration |
| WFM Request Management API | Time-off and shift swap requests |
| Voice Biometrics Enrollment API | Caller identity verification |
| Billing Insights API | Usage and billing data |
| CCaaS User Status API | Agent status management |
| Queues API | Queue configuration and metrics |
| Healthcare Experience Cloud API | Patient lookup (Epic integration) |
| Financial Services Experience Cloud API | Banking workflows |
| HLS Payers Integrations API | Healthcare payer integrations |
| Industries Activities API | Industry-specific activity tracking |

### Live API specifics
- Server-Sent Events (SSE) streaming
- Subscribe to up to 16 metrics per subscription
- Update frequency: 5-60 seconds
- All numeric values: up to 20 decimal places precision
- Follows Talkdesk Contacts Data Model
- Use cases: custom dashboards, cross-account aggregation, automated alerts, local metric storage

### Explore API specifics
- Asynchronous — execute report, check status, download when complete
- 5-minute delay to real-time
- GA since July 2021
- Operations: execute, check status, download, delete, list by type

## Workflow setup

### 1. Basic voice contact center
1. Set up account and configure regional base URL
2. Build IVR flow in Studio (drag-and-drop)
3. Configure ACD routing rules and agent skills
4. Set business hours and after-hours routing
5. Enable recording
6. Integrate with Salesforce (CTI or Service Cloud Voice)

### 2. Adding AI features
1. Start with core voice/digital setup first
2. Add CoPilot for real-time agent assist (test with small group first)
3. Add Autopilot for common inquiry automation
4. Add Navigator for intelligent routing
5. Phase additions — don't deploy everything at once

### 3. WFM setup
1. Import historical data via WFM History Import API
2. Configure forecasting models
3. Build schedules against forecast
4. Set adherence monitoring rules
5. Train supervisors on request management

## Deep dives

### Salesforce integration options
1. **Talkdesk for Salesforce (CTI)**: Traditional CTI integration. Click-to-call from any Salesforce phone field. Automatic call logging. Works within Salesforce console.
2. **Talkdesk for Service Cloud Voice (BYOT)**: Native Salesforce integration. Phone, digital channels, and Salesforce data unified in Salesforce workspace. Omni-Channel routing. Deeper data integration.
3. Choose Service Cloud Voice if you want agents to never leave Salesforce. Choose CTI for simpler deployment.

### Talkdesk CXA platform (mid-2025+)
Multi-agent AI architecture designed to automate customer journeys beyond the contact center. Agentic AI enhancements to CoPilot (late 2025). Represents Talkdesk's strategic direction toward full customer experience automation.

### Partner program
- Reseller and referral partner tracks
- BPO partner program (CXTalent)
- Developer/integration partners via Partner Project
- TSB & TSD partners (US, Canada, UK, Australia)
- Portal: partners.talkdesk.com
