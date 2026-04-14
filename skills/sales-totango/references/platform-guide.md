# Totango Platform Reference

## Platform overview

Totango is an enterprise customer success platform positioned as "turn customer outcomes into customer growth." After merging with Catalyst, the product suite includes three components: Totango (CS software), Unison (AI intelligence engine for churn prediction), and Catalyst (customer growth platform for expansion signals). Named a Forrester Wave Leader 2025 for Customer Success Platforms. Target audience is mid-market to enterprise B2B SaaS companies with dedicated CS teams.

## Key modules

### SuccessBLOCs
Modular, pre-built customer journey templates from the SuccessBLOC Marketplace. Each SuccessBLOC packages a best-practice program (onboarding, adoption, renewal, expansion, advocacy) with pre-configured health scores, SuccessPlays, email templates, and reports. Think of them as starter kits — pick one, customize it, launch it.

Key SuccessBLOCs available:
- Onboarding & First Value
- Adoption & Engagement
- Renewal Management
- Expansion & Growth
- Customer Advocacy & Reference Program

### SuccessPlays
Automated workflow engine. A SuccessPlay triggers actions (tasks, emails, alerts) when accounts match a segment criteria. Each play has:
- **Trigger**: Segment-based — accounts enter/exit a segment
- **Actions**: Create task, send email, trigger alert, update attribute, assign CSM
- **Frequency**: One-time, recurring (daily/weekly), continuous
- **Priority**: Plays can be ranked so CSMs see highest-priority actions first

Common SuccessPlay patterns:
- Renewal at risk: health score drops to Red + renewal < 90 days → assign to senior CSM + create save plan task
- Onboarding stalled: no key milestone completed in 14 days → send re-engagement email + alert CSM
- Expansion ready: usage near plan limits + health Green → create expansion opportunity task for AE

### Health Scores
Composite health scoring based on configurable factors:
- **Product usage**: Login frequency, feature adoption, DAU/MAU ratio
- **Engagement**: Email opens, meeting attendance, support interactions
- **Outcomes**: Goal completion, time-to-value milestones
- **Sentiment**: NPS responses, CSAT scores

Scoring can be manual (weighted formula) or AI-powered via Unison. Scores are typically 0-100 with Green/Yellow/Red thresholds.

### Customer 360
Unified account profile showing:
- Health score and trend
- Touchpoint timeline (calls, emails, meetings, notes)
- Product usage metrics
- CRM data (opportunity, revenue, contract dates)
- Tasks and action items
- Stakeholder/contact details

### Touchpoints
Activity logging system for customer interactions. Types:
- **General notes** — free-form notes attached to accounts
- **Alerts** — system-generated or manual notifications
- **Tasks** — assigned action items with due dates
- **Touchpoints** — logged interactions (calls, emails, meetings)

Touchpoints API allows CRUD operations (create, read, update, delete) programmatically.

### Customer Data Hub
Data integration and ETL layer. Supports:
- **CSV imports** — manual file uploads
- **SFTP jobs** — automated file drops on a schedule
- **API ingestion** — HTTP API for real-time data streaming
- **Native connectors** — Salesforce, HubSpot, Zendesk, Segment
- **Execution reporting** — webhook-based alerts for job success/failure

### Unison AI
AI intelligence engine (separate product tier):
- **Standard AI Models**: Pre-built risk detection, key moment tracking. Setup in 1-2 days. Includes platform access, one CRM/CSP integration, Slack and email alerts, 3 customer segments.
- **Custom AI Models**: Enterprise-grade custom models trained on your historical data. Includes everything in Standard plus tailored models, SSO, CRM objects, 6-month evaluation period.

### Catalyst
Customer Growth Platform (separate product):
- Expansion signal detection
- Customer goal tracking
- Playbook designer for growth plays
- Salesforce Custom Objects integration (up to 5 on Growth tier)

### Email campaigns
Built-in email campaigns sent directly from Totango. Limited to plan allocation:
- Starter: 2,000 emails/month
- Higher tiers: custom limits

## Pricing and limits

*Pricing is best-effort from research — Totango uses "contact sales" for most tiers.*

### Totango (CS Platform)

| Tier | Users | Accounts | Teams | Key limits | Est. price |
|---|---|---|---|---|---|
| Starter | 2 practitioners | 500 | 1 | Single account hierarchy, 2K emails/mo | $249/mo |
| Growth | 10 practitioners | — | — | — | $1,099/mo |
| Enterprise | 10 practitioners | 2,000 | 5 | Enterprise CSM support | ~$80-120K/yr |
| Premier | 20 practitioners + 3 viewers | 10,000 | Unlimited | Dev instance, dedicated account team | Custom |

### Unison AI (separate product)
- **Standard**: Standard risk detection model, 3 segments, 1 CRM integration
- **Custom**: Custom models, SSO, multiple integrations, 6-month evaluation

### Catalyst (separate product)
- **Growth**: 2,500 accounts, 5 Salesforce custom objects

### Seat types
| Seat type | Access level |
|---|---|
| Practitioner | Full platform access (admins, CSMs) |
| Contributor | Limited access (sales, support, marketing) |
| Viewer | Read-only access (leadership) |

## Integrations

### Native CRM connectors
- **Salesforce** — bidirectional sync of accounts, contacts, opportunities
- **HubSpot** — account and contact sync
- **MS Dynamics** — account sync
- **Zoho CRM** — account and contact sync

### Data & analytics
- **Segment** — event streaming
- **Snowflake / BigQuery** — data warehouse export (Enterprise+)
- **Zendesk** — support ticket data

### Communication
- **Slack** — alerts and notifications
- **Gmail / Microsoft Outlook** — email integration
- **Dropbox** — file sharing

### Automation
- **Zapier** — triggers: account attribute changed, new account added, user attribute changed, new user added. Actions: send data via HTTP API.

## Data model (API)

### Base URLs
- US: `https://api.totango.com`
- EU: `https://api-eu1.totango.com`

### Authentication
- **App token**: Header `app-token: YOUR-TOKEN-HERE`
- **Session token**: Legacy v1 token or login-generated session token
- **SCIM 2.0**: Enterprise only, requires SSO enabled first. Endpoint: `https://api.totango.com/scim/v2`

### Key objects
| Object | API endpoint | Methods |
|---|---|---|
| Accounts | `/api/v1/search/accounts` | POST (search) |
| Users | `/api/v1/search/users` | POST (search) |
| Events | `/api/v2/events/search` | POST (search) |
| Touchpoints | `/api/v3/touchpoints/` | POST (create), GET, PUT, DELETE |
| Team Members | `/api/v2/team_members` | GET (list/detail), POST (create/update), DELETE (deactivate) |
| Accounts Plan | `/api/v3/accounts-plan` | — |
| Tasks | `/api/v3/tasks/export/csv` | GET (export) |
| SuccessPlays | `/api/v3/tasks/export/csv` | GET (export stats) |
| Audit Log | Audit log API | GET (by date range) |
| Account Data | `/api/v1/accounts` | POST (ingest, form-encoded) |

### Search API specifics
- Content-Type: `application/x-www-form-urlencoded`
- Query parameter: JSON string with `{"terms":[], "count":100, "offset":0}`
- `terms` array is **mandatory** — omitting it returns 401
- Max 1,000 results per call — use `offset` for pagination

### Rate limits
- Global: **100 calls/minute per token**
- Search: max 1,000 results per call

## Workflow setup

### Setting up health scores
1. Define your health model factors (product usage, engagement, outcomes, sentiment)
2. Configure data sources for each factor (CRM, product analytics, support)
3. Set factor weights (usage 40-50%, engagement 20-25%, outcomes 20-25%, sentiment 10-15%)
4. Define Green/Yellow/Red thresholds
5. Validate against historical churn data (need 6+ months)
6. Optional: enable Unison AI for ML-based prediction

### Building your first SuccessPlay
1. Create a segment that defines the target accounts (e.g., "Renewal < 90 days AND Health = Red")
2. Create a new SuccessPlay
3. Set the segment as the trigger
4. Define actions: create task, send email, trigger alert
5. Set frequency: one-time or recurring
6. Publish and monitor execution

### Connecting Salesforce
1. Go to Admin → Integrations → Salesforce
2. Authenticate with a Salesforce user that has API access
3. Map account fields (Totango account ID ↔ Salesforce Account ID)
4. Map contact/user fields
5. Set sync direction per field (Salesforce → Totango, Totango → Salesforce, bidirectional)
6. Enable sync and monitor for first 48 hours
7. Set up Customer Data Hub webhook for sync failure alerts

## Deep dives

### Migration from another CS platform
Common migration paths:
- **From Gainsight**: Export health score configs, rule sets, and CTA data. Totango SuccessBLOCs can replicate most Gainsight programs. Budget 3-6 months for enterprise migrations.
- **From ChurnZero**: Export Play configs and Journey data. Map ChurnZero Plays → Totango SuccessPlays, Journeys → SuccessBLOCs. Budget 2-4 months.
- **From spreadsheets**: Use Customer Data Hub for CSV/SFTP imports. Start with one SuccessBLOC to prove value before expanding.

### Totango vs competitors at a glance

| Aspect | Totango | Gainsight | ChurnZero | Vitally |
|---|---|---|---|---|
| Best for | Enterprise, modular deploy | Enterprise, complex orgs | Mid-market, SaaS | Mid-market, fast setup |
| Setup time | 2-8 weeks (modular) | 2-6 months | 6-12 weeks | 2-4 weeks |
| AI | Unison (separate product) | Built-in | AI Agents | AI copilot |
| API rate limit | 100/min | Varies | 200/min | Varies |
| In-app comms | Limited | Limited | Strong (WalkThroughs) | Limited |
| Pricing entry | $249/mo | ~$30K/yr | Custom | Custom |
