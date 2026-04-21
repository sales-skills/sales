# Dialpad Platform Reference

## Platform overview

Dialpad is an AI-native unified communications and contact center platform built on DialpadGPT (proprietary AI trained on 6+ billion minutes of business conversations). It combines UCaaS (voice, video, messaging) with CCaaS (contact center) in a single platform. Target audience: mid-market to enterprise teams wanting AI-powered communications. Founded 2011, headquartered in San Francisco.

## Key modules

### Business Communications (UCaaS)
- **Voice**: VoIP calling with HD audio, unlimited domestic calling, international to 70+ countries
- **Video**: AI Meetings with live transcription, up to 150 participants (150 on higher plans)
- **Messaging**: SMS/MMS, team messaging, group conversations
- **AI Recaps**: Automatic post-call summaries with action items, key topics, sentiment
- **AI Transcription**: Real-time transcription during calls powered by DialpadGPT
- **Voicemail**: Visual voicemail with AI transcription

### Contact Center (CCaaS)
- **AI Agent**: Autonomous customer resolution — handles appointments, orders, refunds without human intervention
- **AI Chatbot**: Virtual assistant built from knowledge base sources
- **IVR**: Interactive Voice Response with drag-and-drop builder
- **ACD**: Automatic Call Distribution with skills-based routing
- **Omnichannel**: Voice, chat, SMS, email in unified queue
- **AI Playbooks**: Accelerated agent onboarding with guided scripts
- **AI Coaching Hub**: Real-time sentiment analysis, CSAT tracking, performance metrics
- **Real-time coaching**: Live coaching cards triggered by keywords/sentiment

### Analytics & Reporting
- **Dialpad Analytics**: Call volume, duration, disposition, agent performance
- **AI Scorecard**: Automated call scoring against custom criteria
- **Stats API**: Programmatic access to analytics data (async POST/GET pattern)
- **WFM APIs**: Workforce management schedule data via Surfboard integration

## Pricing and limits

*Best-effort as of 2026-04 — verify on dialpad.com/pricing*

| Feature | Standard ($15/user/mo) | Pro ($25/user/mo) | Enterprise (custom) |
|---|---|---|---|
| Minimum users | 1 | 3 | 100 |
| Office locations | 1 | 10 | Unlimited |
| CRM integrations | None | Salesforce, HubSpot, Zendesk | All + custom |
| Ring groups | 3 max | 25 max | Unlimited |
| Phone support | None (web/chat only) | 24/7 | 24/7 + dedicated AM |
| SSO | No | No | Yes |
| Priority routing | No | No | Yes |
| SLA | None | None | 99.9% uptime |
| International SMS | No | Yes | Yes |
| API access | Basic | Full | Full + custom |

**Add-on costs:**
- Additional phone numbers: $5-15/month each
- Dialpad Meetings upgrade: $15+/user/month
- Internet fax: license fee + per-page
- Premium support: custom quote
- Contact Center: separate pricing (contact sales)

**Billing**: Annual billing saves ~40% vs monthly. Annual contracts only on Enterprise.

## Integrations

**70+ integrations** including:

**CRM** (Pro+ required): Salesforce, HubSpot, Zendesk, Zoho CRM, Microsoft Dynamics 365, Copper, Front
- Auto call logging, click-to-dial from CRM, contact sync, SMS logging (inconsistent on some connectors)

**Productivity**: Microsoft Teams, Google Workspace, Microsoft 365, Slack
- Embedded dialer, presence sync, calendar integration

**Contact Center**: ServiceNow, Zendesk (ticketing), Front
- Ticket creation from calls, screen pop with customer data

**Automation**: Zapier (complex to configure), webhooks, custom API
- Note: Zapier connector described as "complicated to get working" by users

**Other**: Okta (SSO, Enterprise), OneLogin, Azure AD

## Data model (API)

**API docs**: developers.dialpad.com
**Auth**: Manual API Key (Admin Settings > API Keys) or OAuth 2.0
**OpenAPI spec**: `dialpad.com/static/openapi/platform-v1.0.json`
**Python SDK**: `pip install dialpad` (github.com/dialpad/dialpad-python-sdk)

**Key API categories:**
- **Stats APIs**: Async report generation — POST to create, GET to retrieve CSV. Two export types: Stats (aggregated) and Records (per-call detail). Targeting by `office_id` or `target_id`.
- **SMS API**: Send/receive SMS, A2P compliance required
- **Digital Engagement API**: Chat, messaging channels
- **AI Virtual Agent API**: Configure and manage AI agents
- **Event Subscriptions**: Real-time webhooks for call events, agent status changes
- **WFM APIs**: Workforce management schedule data (via Surfboard)

**Stats API specifics:**
- `is_today=true` queries real-time tables (refreshed every 30 min)
- `days_ago` queries historical tables (updated every 4-5 hrs)
- Wait 15-20s between POST and GET
- Results cached: 30 min for `is_today`, 3 hrs for `days_ago`
- Timezone values must be IANA "tz database name" format

**Rate limits**: Not publicly documented per-endpoint. Retry on 429 with exponential backoff. Don't repeat identical POST requests.

## Workflow setup

### Setting up CRM integration (HubSpot)
1. Verify Pro+ plan
2. Go to Admin Settings > Integrations > HubSpot
3. Install the v2 integration (v1 deprecated)
4. Authorize with HubSpot admin account
5. Configure: auto-log calls, auto-log SMS, contact matching by phone number
6. Test: make a call, verify it appears in HubSpot contact timeline within minutes

### Setting up AI Coaching Hub
1. Go to Admin Settings > AI Coaching Hub
2. Create custom moments (keywords/phrases to track)
3. Set up scorecards with criteria
4. Enable real-time coaching cards for agents
5. Configure sentiment analysis thresholds
6. Review coaching dashboard for team performance trends

### Setting up contact center
1. Contact Dialpad sales for CCaaS pricing
2. Create call center in Admin Settings
3. Configure IVR tree with drag-and-drop builder
4. Set up ACD routing (skills-based, round-robin, or longest idle)
5. Deploy AI Agent for autonomous resolution (if applicable)
6. Connect knowledge base for AI Chatbot
7. Set up omnichannel queue (voice + chat + SMS + email)

## Deep dives

### Call quality optimization
- Run System Test: Settings > System Test (checks throughput, latency, device state)
- Minimum requirements: 100 kbps up/down per call, <150ms latency, <1% packet loss
- Disable parallel ring if using desktop + mobile simultaneously
- On macOS: disable Continuity Camera (System Settings > General > AirDrop & Handoff)
- VPN: exclude Dialpad traffic (domains: *.dialpad.com, *.uberconference.com)
- Rate calls 1-2 stars to flag quality issues automatically

### AI transcription accuracy
- Company Dictionary: Admin Settings > Company Dictionary — add product names, acronyms, industry terms
- Use quality headset with noise cancellation
- Speak directly into microphone — distance degrades accuracy significantly
- Accuracy varies by accent and dialect — no per-language accuracy published
- Filler words, stuttering, and overlapping speech reduce accuracy
