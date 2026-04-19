# Oliv.ai Platform Reference

## Platform overview

Oliv.ai is an AI-native revenue intelligence platform positioned as an agentic alternative to Gong. Instead of a monolithic dashboard, Oliv deploys modular AI agents that autonomously handle specific revenue workflows — meeting notes, CRM updates, deal coaching, forecasting. Teams buy only the agents they need, starting at $19/user/month. Target: SMB to enterprise sales teams replacing expensive Gong/Clari stacks or adding intelligence to existing CRM setups.

## Key modules

### Oliv Notetaker ($19/user/mo)
- Unlimited meeting transcription and video recording
- AI-generated meeting summaries (delivered via Slack, Teams, or email)
- Ask AI — natural language queries on any recorded meeting
- Multilingual support
- Automatic follow-up email generation

### Meeting Insights ($29/user/mo)
- Custom AI Meeting Scorecards — rate calls against methodology criteria
- Meeting coaching insights — real-time performance feedback
- Smart playlists — curated collections of calls by topic/outcome
- Global Ask AI — query across all meetings, not just one
- Interaction and talk-pattern analysis
- Auto call scoring with AI
- Real-time Answer Assistant
- Standard and custom topic intelligence
- Custom keyword trackers

### Deal Insights ($29/user/mo)
- AI Sales Methodology Tracker (MEDDIC, BANT, SPICED, or custom)
- AI Win-Loss Deal Analysis
- Deal view for pipeline reviews
- Ask AI across deals
- AI Deal Health Score
- AI Deal Lifecycle Tracking
- Roll-up and aggregated forecasting
- Two-way CRM integration

### AI Agents
- **Deal Driver** — identifies at-risk deals with specific remediation steps
- **Meeting Assistant** — prepares reps for calls with context dossiers
- **Coach** — provides performance coaching (coming soon as dedicated module)
- **Forecaster** — generates weekly presentation-ready pipeline reports ($199/manager/mo)
- **Analyst** — cross-deal pattern analysis
- **Prospector** — supports prospecting workflows
- **Researcher** — gathers account intelligence
- **CRM Manager** — auto-syncs conversation data to CRM fields (~$19/user/mo)
- **Content Curator** — curates relevant content for calls
- **Retention Forecaster** — predicts churn risk
- **Portfolio Manager** — manages account portfolios

### AI Meeting Prep
- Prospect research dossiers and ice-breaker questions
- Daily Deal Summary with pipeline prioritization
- Live Deals Dashboard for KPIs
- Weekly Deal Review with strategic planning

### During Meetings
- Live Scorecard — real-time sales activity tracking and gap identification
- Rolling Talk Tracks — adaptive conversation guidance
- Live Transcription
- Instant Call Highlights — automated key moment extraction

## Pricing and limits

All prices are annual commitment, annual payment.

| Module | Price | What's included |
|---|---|---|
| Notetaker | $19/user/mo | Unlimited transcription, recording, AI summaries, Ask AI |
| Meeting Insights | $29/user/mo | Scorecards, coaching, topic tracking, call scoring |
| Deal Insights | $29/user/mo | Deal health, win-loss, methodology tracking, forecasting, CRM sync |
| Full stack | $77/user/mo | All three modules |
| CRM Manager Agent | ~$19/user/mo | Auto-populates CRM from conversations |
| Forecaster Agent | $199/manager/mo | Weekly AI-generated forecast reports |

- **Viewers and collaborators are always free**
- No implementation fees
- Training and support included
- 14-day free trial (no credit card)
- Free migration from Gong, Fireflies, Avoma, Clari, or any tool
- Volume discounts and multi-year agreements available

**Example costs:**
- 10-person team, all three packs: ~$9,240/yr
- 10-person team + CRM Manager: ~$11,520/yr
- Fortune 500 (800 reps) replaced $400K+ Gong/Einstein stack with ~$85,400/yr Oliv

## Integrations

### CRM (bidirectional sync)
HubSpot, Salesforce, Zoho, Freshworks, Copper, Close, Pipedrive, Dynamics 365

### Conversational Intelligence
Gong, Clari, Avoma, Chorus, Grain — can use these as audio sources instead of Oliv Notetaker

### Sales Enablement
Highspot, Seismic, Guru, Mindtickle

### Meeting Recorders (alternative audio sources)
Fireflies, Fathom, tl;dv, Otter, Read

### Sales Prospecting
Apollo, Outreach, ZoomInfo, SalesIntel, Salesloft

### Email
Gmail, Outlook

### Communication
Slack, Microsoft Teams, Google Chat, Workplace

### Web Conferencing
Zoom, Google Meet, Microsoft Teams, Webex

### Browser Extension
Chrome Extension: web.oliv.ai/chrome/install
Outlook Add-in: via Microsoft AppSource

## Setup workflows

### Initial setup (required)
1. **Connect calendar** — log in at web.oliv.ai with Gmail or Outlook. Calendar integration is required for Oliv to function.
2. **Connect CRM** — Salesforce: web.oliv.ai/salesforce/connect (install package, enable "Assign tasks to multiple objects" + "Advanced notes"). HubSpot: web.oliv.ai/hubspot/connect.
3. **Install Zoom bot** (if using Zoom): web.oliv.ai/apps/zoom-meeting-bot. Teams and Meet auto-join once calendar is connected.
4. **Connect Slack** — accept Slack Connect request or install at web.oliv.ai/slack/direct-install.
5. **Install Chrome Extension** (optional): web.oliv.ai/chrome/install.

### CRM Manager Agent setup
1. Connect CRM (Step 2 above)
2. Let the agent process 3 calls to learn your qualification methodology
3. Agent auto-applies methodology to all future conversations
4. Review and adjust extracted fields in Oliv dashboard

### Migration from another tool
Oliv handles migration at no cost. Supported source platforms: Gong, Fireflies, Avoma, Clari, Otter, Fathom. Contact Oliv support via Intercom in the app to initiate.

## Data model

Oliv does not expose a public API. All data access is through the web application and native integrations. Key data objects:
- **Meetings** — recordings, transcripts, AI summaries, scorecards
- **Deals** — health scores, lifecycle tracking, methodology fields
- **Contacts** — synced from CRM
- **Agents** — configurable AI agents with per-agent settings
- **Scorecards** — custom criteria for call evaluation

## Deep dives

### Scorecard configuration
Create custom scorecards under Meeting Insights. Define criteria aligned to your methodology (MEDDIC, BANT, SPICED, or custom). AI auto-scores every call. View scores in the coaching dashboard and smart playlists.

### Forecaster Agent
Available at $199/manager/month. Generates weekly forecasts with AI commentary, showing target vs actual, gap to goal, and deals likely to slip. Delivers presentation-ready reports immediately upon deployment — no 8-12 week implementation cycle.

### CRM Manager Agent
Auto-syncs conversation insights to CRM fields. Learns your team's qualification methodology from 3 calls, then auto-applies to all future conversations. Supports custom methodology (not just pre-built frameworks). Works with Salesforce, HubSpot, and other connected CRMs.

### Supported services
- Dedicated Engineer for data migration and custom agent building
- Strategic AI Advisory for transformation planning
- Intercom-based support for all configuration changes and removals
