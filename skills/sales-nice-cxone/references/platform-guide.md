# NICE CXone Platform Reference

## Platform overview

NICE CXone (branded "CXone Mpower" since 2024) is a full-stack cloud Contact Center as a Service (CCaaS) platform. It covers omnichannel routing, IVR, workforce management, quality management, analytics, digital engagement, recording, AI copilot, and virtual agents. Target audience: mid-market to enterprise contact centers (50-10,000+ agents). NICE is the market leader in CCaaS by revenue, competing primarily with Genesys Cloud CX, Five9, Talkdesk, and 8x8.

## Key modules

### ACD / Omnichannel Routing
- Automatic Contact Distribution across voice, chat, email, social, SMS, WhatsApp (30+ digital channels)
- Skills-based routing, priority routing, bullseye routing
- Universal queue for concurrent interaction handling
- Digital First Omnichannel (DFO) for messaging-first channels

### IVR / Self-Service
- Voice IVR with natural language understanding
- Visual IVR for mobile callers
- Studio scripting environment for call flow design
- Pre-built IVR templates

### Workforce Management (WFM)
- AI-driven omnichannel forecasting and scheduling
- Agent mobile scheduling app
- Intraday management and schedule adherence monitoring
- Time utilization insights
- 360-degree agent KPI views
- **Limitation**: Forecasting only works for legacy email/chat — DFO channels not supported for forecasting

### Quality Management (QM)
- Screen recording alongside voice recording
- QA evaluation forms and coaching workflows
- Supervisor workspace for real-time monitoring
- AI-assisted quality scoring (Complete Suite)
- Customizable cross-domain dashboards

### Analytics & Reporting
- Prebuilt data visualization dashboards and reports (Omnichannel+ tiers)
- AI-driven omnichannel analytics (Complete Suite)
- Sentiment analysis and trend discovery (Complete Suite)
- Voice of the Customer integration (Complete Suite)
- Interaction Analytics — linguistic analysis on 100% of interactions
- **Known issue**: Reporting UI is widely cited as hard to understand — budget for customization or use APIs for BI tool integration

### Digital Engagement
- 30+ digital channels (email, chat, social media, SMS, WhatsApp, Apple Messages, etc.)
- Digital recording and storage
- Unified agent workspace for all channels
- CXexchange marketplace for additional channel integrations

### Recording
- Voice recording and storage (Voice Agent+ tiers)
- Screen recording (Essential Suite+ tiers)
- Digital recording (Digital Agent+ tiers)
- Media Playback APIs for programmatic access

### AI Copilot
- Real-time agent assistance during interactions
- Next-best-action suggestions
- Knowledge base surfacing
- **Known issue**: Enabling Copilot can cause severe UI freezes in agent workspace — test with small group first

### Virtual Agents
- VoiceAI for automated phone interactions
- ChatAI for automated digital channel interactions
- Virtual Agent Hub for third-party bot integration

## Pricing and limits

All prices per agent per month, billed annually:

| Plan | Price | Key features included |
|---|---|---|
| **Digital Agent** | $71 | 30+ digital channels, dedicated agent/supervisor workspace, digital recording |
| **Voice Agent** | $94 | Voice calling, universal queue, voice IVR, voice recording |
| **Omnichannel Agent** | $110 | Blended routing (digital + voice), both recording types, prebuilt dashboards |
| **Essential Suite** | $135 | + Screen recording, quality management, supervisor workspace, custom dashboards |
| **Core Suite** | $169 | + AI WFM forecasting/scheduling, mobile scheduling app, adherence insights, 360° KPIs |
| **Complete Suite** | $209 | + AI analytics, sentiment analysis, trend discovery, Voice of Customer |

**Negotiation**: Buyers commonly negotiate 15-25% below list pricing on 2-3 year commitments or when bundling multiple modules.

**Free trial**: 60-day trial available (vs typical 14-30 day industry standard).

**Add-ons**: Specific add-ons not publicly priced — TAM (Technical Account Manager), AI Copilot, Virtual Agents, Interaction Analytics may be separate charges. Get a detailed feature matrix before signing.

## Integrations

### CRM
- **Salesforce** (deepest): Bi-directional integration with Data Cloud, Agent for Salesforce embedded workspace, Agentforce integration (announced 2025). NICE CXone Agent for Salesforce available on AppExchange.
- Standard CRM connectors for other platforms

### CCaaS ecosystem
- CXexchange marketplace (hundreds of partner apps)
- DEVone developer partner program
- Pre-built integrations with common telephony, WFM, and analytics tools

### Telephony
- SIP trunking, BYOC (bring your own carrier)
- WebRTC for browser-based agent workspace

## Data model (API)

### API architecture
- **16 REST API groups** covering the full platform
- **Protocol**: HTTPS only
- **Auth**: OAuth 2.0, Access Key, or OpenID Connect
- **Response format**: JSON
- **Access control**: CXone Central Security Profile permissions

### Key API groups

| API group | What it does |
|---|---|
| Authentication | OAuth2/OIDC login, token management |
| Admin | Agents, skills, address books, teams, campaigns |
| Agent | Session management for phone, chat, email, SMS, work items |
| Patron | Customer-facing apps (callbacks, live chat) |
| Real-Time Data | Live dashboards, leaderboards, control panels |
| Reporting | Historical data, calculated metrics |
| Data Extraction | Bulk data export for external BI tools |
| Media Playback | Access voice and screen recordings |
| Digital Engagement | Third-party messaging channel integration |
| WFM | Agent schedule information |
| Recording | Voice and screen recording management |
| Interaction Analytics | Linguistic analytics on interactions |
| Privacy | GDPR data erasure requests |
| Data Policies | Policy results management |

### SDKs (GitHub: nice-devone)
- **Agent SDK** (`nice-cxone-agent-sdk`, 7 stars) — agent workspace customization
- **Chat Web SDK** (`nice-cxone-chat-web-sdk`, 7 stars) — LiveChat + Chat Messaging
- **Mobile SDK Android** (`nice-cxone-mobile-sdk-android`) — mobile chat
- **Mobile SDK iOS** (`nice-cxone-mobile-sdk-ios`) — mobile chat

### Rate limits
Not publicly documented per-endpoint. Design conservatively — use pagination, cache metadata, and respect 429 responses.

## Workflow setup

### 1. Initial deployment
1. Provision CXone tenant and configure SSO/SAML
2. Set up ACD skills and routing rules
3. Import agent profiles and team structure
4. Configure IVR flows in Studio
5. Connect telephony (SIP trunk or BYOC)
6. Set up recording policies
7. Deploy agent workspace (browser-based)

### 2. Quality management setup
1. Create QA evaluation forms (criteria, weighting, scoring)
2. Configure screen recording for agents on Essential Suite+
3. Set up supervisor workspace with monitoring dashboards
4. Create coaching workflows (low-score → coaching session)
5. Test AI scoring on 50+ interactions before trusting scores

### 3. WFM setup
1. Import historical interaction volume data
2. Configure forecasting models (voice, legacy chat, legacy email)
3. Build agent schedule templates (shifts, breaks, off-queue time)
4. Deploy mobile scheduling app for agents
5. Set adherence thresholds and alert rules
6. **Note**: DFO channels (Digital First Omnichannel) cannot be forecasted in WFM

## Deep dives

### Salesforce integration
NICE CXone offers the deepest Salesforce integration in the CCaaS market:
- **Agent for Salesforce**: Agents handle voice + digital without leaving Salesforce
- **Bi-directional data flow**: CXone ↔ Salesforce Data Cloud (Zero Copy integration)
- **Agentforce compatibility**: CXone real-time orchestration works with Salesforce Agentforce AI
- **AppExchange**: Two listings — "CXone Agent for Salesforce" and "CXone Agent for Salesforce with Digital"
- **Configuration**: Set up CRM Configuration in CXone Admin → map Salesforce objects to CXone data

### Studio scripting
- Desktop Studio (legacy) and CXone Studio (cloud-based) for IVR/routing design
- REST API action available in Studio for calling external APIs during call flows
- Variables, branching, and dynamic routing based on CRM data lookups
- Pre-built action library (Transfer, IVR, Agent, etc.)

### CXexchange marketplace
- Hundreds of pre-built integrations from DEVone partners
- Categories: WFM, QM, analytics, AI, compliance, CRM, UC
- Partner applications configured via Partner Applications admin page
- Custom integrations via REST APIs + webhooks

### Security and compliance
- SOC 2 Type II, PCI DSS, HIPAA eligible, GDPR
- Privacy APIs for data erasure requests
- FedRAMP authorized (government deployments)
- Regional data residency options
