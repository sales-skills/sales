# Momentum Platform Reference

## Platform overview

Momentum is an AI revenue orchestration platform that captures unstructured data from customer calls and interactions, structures it automatically via AI, and routes insights to revenue teams while automating execution across GTM systems (primarily Salesforce and Slack). Founded in San Francisco, Momentum was acquired by Salesforce in February 2026 to power Agentforce 360 and enhance Slack for sales teams.

Target audience: Revenue Operations teams, sales managers, customer success teams, enablement leaders, and CROs at mid-market to enterprise B2B SaaS companies. Salesforce is required — Momentum is Salesforce-first with no alternative CRM support.

Key differentiator: Momentum sits between conversation intelligence (Gong, Chorus) and CRM (Salesforce) as an "action layer" — it doesn't just analyze calls, it automatically updates CRM fields, triggers workflows, and routes insights to the right people in Slack.

## Key modules

### AI Agents

| Agent | What it does | Plan required |
|---|---|---|
| **Deal Execution Agent** | Automates post-call tasks — updates Salesforce fields, generates notes, suggests tasks, triggers follow-up workflows | Business |
| **Customer Retention Agent** | Detects churn risk from call sentiment, escalation language, and engagement patterns. Triggers retention workflows automatically. | Business |
| **AI CRO Agent** | Provides executive-level insights on accounts, reps, and pipeline forecasting. Generates executive briefs. | Transformation |
| **Coaching Agent** | Delivers data-driven coaching scores per call, identifies skill gaps, tracks improvement over time. | Transformation |

### MEDDIC Autopilot

Automated qualification tracking. AI listens to calls and extracts MEDDIC (or MEDDPICC, BANT, SPICED, etc.) fields, then writes them directly to mapped Salesforce custom fields.

- **Autopilot Classic**: Processes individual calls as they happen
- **Autopilot Batch**: Processes historical calls in bulk
- **Retropilot**: Re-processes past calls with updated extraction rules

### AI Summaries & SmartClips

- **Call summaries**: AI-generated notes posted to Salesforce and/or Slack automatically
- **SmartClips**: Auto-generated video snippets from calls highlighting key moments (competitor mentions, pricing discussions, objections)
- **Action items**: Extracted from calls and optionally turned into tasks

### AI Signals & Alerts

- **Smart Tags**: AI-extracted topics, themes, and keywords from conversations
- **AI Signals**: Deal risk detection — competitor mentions, budget objections, timeline shifts, champion changes
- **Smart Notifications**: Configurable Slack routing — choose which signals go to which channels/people based on deal stage, size, or signal type

### Deal Rooms & Account Rooms

- **Deal Rooms**: Slack channels automatically created per Salesforce opportunity. All deal activity (calls, emails, CRM updates, signals) centralized in one channel.
- **Account Rooms**: Same concept but at the account level — useful for CS teams tracking multiple opportunities under one account.

### IQ Reports & Deep Research

- **IQ Reports**: Aggregated intelligence dashboards
- **Deep Research**: Cross-deal AI analysis — ask questions across all calls and get AI-synthesized answers. Usage-based credits (annual platform license + per-analysis fee).
- **Ask Momentum**: Natural language queries about individual calls (Business) or across calls + accounts (Transformation)

### Executive Briefs

AI-generated briefings for leadership on account health, pipeline status, and team performance. Transformation tier only.

### Conversation Intelligence Add-on ($30/user/mo)

Optional module that adds:
- AI notetaker for Google Meet and Zoom (Momentum's own recording bot)
- Auto-recording capabilities
- Video library with commenting and tagging
- Playlists and snippet sharing
- 99+ language translations
- Enables Account Briefs and SmartClips features

Without this add-on, Momentum relies on connected CI tools (Gong, Chorus, etc.) for call data.

### Approvals

Complex approval processes run directly from Slack — discount approvals, deal desk escalations, contract exceptions.

## Pricing and limits

| Plan | Price | Key features |
|---|---|---|
| **Business** | $69/user/mo (annual) | Core AI, CRM hygiene, Slack Deal Rooms, Autopilot, AI Signals, notifications, Deal Execution + Retention agents, Ask Momentum (individual calls) |
| **Transformation** | $99/user/mo (annual) | All Business + Executive Briefs, AI Coaching Agent, AI CRO Agent, team performance analytics, Ask Momentum (calls + accounts) |
| **Enterprise** | Custom | All Transformation + SSO, white-glove onboarding, premium support, AI/automation professional services |

**Add-ons:**
- Conversation Intelligence: $30/user/mo
- Deep Research: Usage-based credits (annual license + per-analysis)
- Professional Services: Custom pricing

**Discounts:**
- Startup Plan: 50% off Business or Transformation for teams under 10 GTM headcount
- Volume: Discounts available for 50+ user teams

**API rate limit**: 100 requests per 15-minute window. Returns 429 when exceeded.

## Integrations

### Core (bi-directional read/write)
- **Salesforce**: Primary CRM. Real-time field updates, notes, workflow triggers. OAuth authentication.
- **Slack**: Deal Rooms, notifications, approvals, command center. Workspace-level app install.
- **Microsoft Teams**: Summaries and signals support.

### Call recording / transcription sources
- Zoom, Google Meet, Microsoft Teams, Cisco Webex (direct recording)
- Gong, Chorus, Dialpad, Aircall, Orum, Zoom Phone (ingest from existing CI)
- Salesloft, Outreach (sales engagement call data)

### Revenue intelligence
- Clari (AI summaries + Salesforce updates from Clari data)
- Wiser (buyer insights, objection trends)

### Email & calendar
- Gmail (auto-capture sales emails to Salesforce)
- Outlook/Microsoft 365 (inbox activity, no-show detection, follow-ups)
- Google Calendar (meeting detection, pre-call prep — coming soon)

### Productivity
- Google Docs (auto-generate call summaries, QBR reports)
- Asana (action items → tasks — coming soon)
- Mixmax (email engagement tracking)

### Data warehouse
- Snowflake (push structured GTM data — coming soon)

### Customer support
- Zendesk (analyze support interactions, extract upsell signals)

### AI models (underlying)
- OpenAI (GPT-4, GPT-4o) — summarization, CRM field population
- Anthropic (Claude) — tone detection, trust signals, stakeholder mapping
- Cohere — classification, ranking, tagging
- Google AI (Gemini) — Google Workspace integration

## Data model (API)

**Authentication**: API key passed as `X-API-Key` header. Request API access from Momentum support, then generate key in Integrations dashboard.

**Rate limit**: 100 requests / 15-minute window. 429 on exceeded.

**OpenAPI spec**: Available at docs.momentum.io. Full endpoint reference requires API access to be enabled for your workspace.

**Key objects** (based on available documentation):
- Calls / Meetings — transcripts, summaries, extracted fields
- Signals — AI-detected events (risk, competitor, budget)
- Workflows — automation rules and triggers
- Deal Rooms — Slack channel mappings to Salesforce opportunities

## Workflow setup

### 1. Core setup (day 1)
1. Connect Salesforce via OAuth — ensure write access to target fields
2. Install Momentum Slack app at workspace level
3. Connect call sources: either enable CI add-on ($30/user/mo) or connect existing Gong/Zoom/etc.
4. Map core Salesforce fields for AI extraction (Next Steps, MEDDIC fields)

### 2. Quick wins (week 1)
1. Enable Autopilot Classic for automatic post-call CRM updates
2. Set up call summary posting to Slack (deal-specific channels or a shared channel)
3. Configure 2-3 AI Signals (competitor mentions, budget objections, churn risk)
4. Create Deal Rooms for top 10 active opportunities

### 3. Advanced (weeks 2-4)
1. Build signal-driven workflows (e.g., churn signal → CS manager notification → retention playbook)
2. Configure Smart Notifications with stage/size/signal-type filters
3. Enable Executive Briefs for leadership (Transformation tier)
4. Set up Coaching Agent with custom scoring criteria (Transformation tier)
5. Run Autopilot Batch on historical calls to backfill CRM data

## Deep dives

### Salesforce integration details
- **OAuth scope**: Requires read/write on Opportunity, Contact, Account, and custom objects where MEDDIC fields live
- **Real-time sync**: Field updates happen within seconds of call processing completing
- **Bi-directional**: Salesforce changes (stage updates, owner changes) trigger Momentum workflows and Slack notifications
- **Salesforce Flow integration**: For orgs with restricted permissions, Momentum can trigger Salesforce Flows instead of direct field writes

### Slack integration details
- **Deal Rooms**: Auto-created per Salesforce opportunity. Channel naming follows `#deal-{company}-{opp-name}` pattern (configurable).
- **Buttons and actions**: Slack messages include actionable buttons (approve discount, update stage, assign task)
- **Approvals**: Multi-step approval workflows with escalation paths, all within Slack
- **DMs vs channels**: Critical signals can route to individual DMs; routine updates go to team channels

### Gong integration
- Momentum ingests Gong call data (transcripts, recordings) and layers its own AI extraction on top
- This is additive, not replacement — you keep Gong for analytics/coaching and use Momentum for CRM automation and workflow orchestration
- Common stack: Gong (conversation intelligence) + Momentum (orchestration) + Salesforce (CRM)

### Post-acquisition context (Salesforce)
- Acquired February 2026 to boost Agentforce 360 and Slack for enterprise sales
- Current pricing and standalone product continue during transition
- Long-term: Momentum capabilities expected to be embedded natively in Salesforce + Slack
- Recommendation: If evaluating now, verify current product roadmap and standalone availability with Momentum/Salesforce sales
