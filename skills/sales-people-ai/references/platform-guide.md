# People.ai (Backstory) Platform Guide

> People.ai rebranded to **Backstory** on April 21, 2026. URLs redirect from people.ai → backstory.ai. App login: app.people.ai.

## Platform overview

**Category**: Revenue intelligence / activity capture platform
**Target**: CROs, VPs of Sales, RevOps leaders at mid-market to enterprise companies
**Core value**: Eliminates manual CRM data entry by automatically capturing every email, call, and meeting, then analyzing that activity data to reveal which rep behaviors drive revenue.

**Key metrics (vendor-reported)**:
- 43% increase in win rates on tracked deals
- 30% reduction in sales cycle length
- 30 hours saved annually per user in data entry
- 100,000+ daily users
- 600+ G2 reviews, 4.5+ rating, Leader Enterprise

**Notable customers**: NVIDIA, OpenAI, Red Hat, AMD, Zscaler, Rubrik, HPE, Five9, Seismic, Pluralsight, Databricks, Ping Identity, Forcepoint

---

## Core modules

### Activity Capture
Automatically logs all sales activities without rep action:
- **Email**: Gmail, Outlook — captures sent/received emails, associates with CRM contacts/accounts/opportunities
- **Calendar**: Google Calendar, Outlook Calendar — captures meetings, attendees, duration
- **Calls**: Zoom, Microsoft Teams — captures call metadata (participants, duration, but NOT recordings/transcripts)
- **Chat**: Slack — captures messaging activity
- **Historical data**: Analyzes 2 years of prior activity on day one — immediate pipeline visibility

Activity capture is the foundation. All other modules depend on this data layer.

### Deal Intelligence
Applies AI reasoning to activity data to surface deal health signals:
- **Risk flagging**: Identifies at-risk deals before they stall — declining engagement, missed follow-ups, slowing momentum
- **Single-threading detection**: Flags deals with only one contact engaged — the #1 predictor of deal failure
- **Stakeholder mapping**: Shows which personas are engaged (champion, economic buyer, technical evaluator) and which are missing
- **Engagement scoring**: Quantifies deal engagement based on actual activity (emails sent, meetings held, response times)
- **Champion tracking**: Detects when champions go quiet or key contacts go dark

### Pipeline & Forecasting
Activity-backed pipeline analytics:
- **Pipeline health monitoring**: Real-time views of pipeline by stage, team, segment
- **Revenue forecasting**: Predictions backed by actual engagement data, not rep self-reports
- **Win/loss patterns**: Identifies which rep behaviors and engagement patterns correlate with wins
- **Coverage analysis**: Activity-backed pipeline coverage ratios

### MCP Integration (announced February 2026)
Model Context Protocol integration for AI agent access:
- Connects AI agents (Claude, ChatGPT, Microsoft Copilot) to People.ai's data layer
- Queries across structured CRM data + unstructured activity data
- Enterprise tier required
- Example queries: "Which deals are single-threaded?" "Which accounts had declining engagement?"

---

## Integrations

### CRM
- **Salesforce**: Primary integration — bi-directional sync, automatic contact creation, opportunity linking, activity logging to native Salesforce objects
- **Microsoft Dynamics**: Full integration with activity capture and deal intelligence
- **Oracle**: Supported CRM integration
- **Multi-CRM**: Supports multiple CRM instances simultaneously across geographies/subsidiaries

### Communication
- Gmail and Outlook (email + calendar)
- Zoom and Microsoft Teams (calls/meetings)
- Slack (chat activity)

### Ecosystem
- Salesforce AppExchange (managed package available)
- MCP for AI agent workflows
- Open APIs (REST — see API section)

---

## API

People.ai offers a REST API, though documentation is not publicly accessible (requires customer login).

**Known details**:
- **Type**: REST API
- **Python library**: `peopleai-api` on PyPI (third-party, by maxzheng) — downloads activities from People.ai
- **Setup portal**: setup.people.ai (installation wizard, not API docs)
- **Auth**: Requires customer credentials (not publicly documented)
- **Key capabilities**: Activity data download, CRM sync configuration

**API docs are not publicly accessible.** The setup portal at setup.people.ai is an installation wizard, not API documentation. For API access, contact People.ai/Backstory support.

**MCP integration** (Feb 2026): Provides structured access to revenue intelligence data through Model Context Protocol. Supports Claude, ChatGPT, Copilot, and custom AI agents. Enterprise tier required.

---

## Pricing

**Enterprise-only** — no public pricing, no free tier, no self-serve signup.

- Custom quotes based on team size, modules, and CRM(s)
- Annual contracts typical
- Implementation: 2-4 weeks
- Market estimates: $50-100+/user/month (based on third-party reports)
- Total funding: $198M over 6 rounds; last valuation $1.1B (Aug 2021)

---

## Competitive positioning

| vs | People.ai strength | Competitor strength |
|---|---|---|
| **Gong** | Activity data (emails, meetings, calendar — full picture). Lower admin burden. | Call recordings and transcripts. Coaching scorecards. Conversation analytics. |
| **Clari** | Data layer — activity capture feeds forecast accuracy. | Forecast roll-ups, submission workflows, executive governance. |
| **Scratchpad** | Enterprise-grade, multi-CRM, deeper analytics. | Lighter-weight, cheaper, better daily UX for Salesforce reps. |
| **Weflow** | Multi-CRM support, deeper enterprise features. | Standalone forecasting module, transparent pricing. |
| **Revenue.io** | Broader activity capture (not just phone). | Salesforce-native, real-time guided selling, dialer. |

**Common stacks**: People.ai + Gong (activity + conversation), People.ai + Clari (data + forecasting), People.ai + Gong + Clari (full stack).

---

## Known issues (from G2/Capterra/TrustRadius reviews)

- **Salesforce sync delays**: Activity data (especially call data) can take 24-48 hours to fully process. Real-time dashboards don't reflect same-day calls.
- **Contact matching accuracy**: Activities associate with wrong contacts when CRM email data is outdated. Requires clean contact records as a prerequisite.
- **Adoption challenges**: Low team utilization reported — reps unsure how to use insights for their specific role. Needs executive sponsorship and clear positioning.
- **Reporting limitations**: Some users find reports not customizable enough; role-specific views limited.
- **Dependence on CRM quality**: Value depends on good account hierarchy and consistent data in underlying CRM.
- **No call recording**: Activity metadata only — does not record or transcribe calls. Must pair with a conversation intelligence tool for call-level insights.
- **Opaque pricing**: No public pricing makes evaluation and budget planning difficult.

---

## Implementation playbook

### Week 1-2: Foundation
1. Connect email systems (Gmail/Outlook) for all reps
2. Connect calendar systems
3. People.ai ingests 2 years of historical data — immediate baseline
4. Configure CRM sync rules and contact matching

### Week 2-3: Deal Intelligence
1. Enable pipeline health dashboards for managers
2. Configure risk signal thresholds
3. Train managers on single-threading and engagement score interpretation
4. Set up alert workflows for at-risk deals

### Week 3-4: Rollout
1. Roll out pipeline views to reps (positioned as "faster than Salesforce")
2. Enable manager coaching workflows using activity data
3. Configure forecast views with activity-backed data
4. Set up recurring pipeline review cadence using People.ai data
