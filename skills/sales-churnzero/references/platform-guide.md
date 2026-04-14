# ChurnZero Platform Reference

## Platform overview

ChurnZero is a customer success platform ("engine for customer growth") built for SaaS companies to reduce churn, drive expansion, and scale CS operations. Positioned as a Gartner Magic Quadrant Leader for Customer Success Management Platforms (2024, 2025). Primary audience: mid-market to enterprise B2B SaaS with 5+ CSMs. Competes with Gainsight, Vitally, Totango, Custify, and Planhat.

Key differentiators: real-time health scoring (G2 score 9.2/10 for Customer Monitoring), in-app engagement (WalkThroughs, announcements), AI Agents for autonomous CS actions, and 50+ native integrations.

## Key modules

### Health Scores (ChurnScores)

- Composite health scores with unlimited custom scoring models
- Configurable factors: product usage, engagement, support activity, sentiment (NPS/CSAT), contract/billing signals
- Factor weighting with percentage allocation across categories
- Real-time updates based on incoming data signals
- Segment-based scoring — different models for enterprise vs SMB vs PLG
- ChurnScore Factors and ChurnScore Calculations available via API

**Best practices:**
- Start with 4-6 factors, weight product usage highest (40-50%)
- Don't adjust weights for 6-10 months — need stable data to validate
- Run retroactive analysis: did Red accounts actually churn?
- Track leading indicators (usage decline, engagement drop) not just lagging (NPS, renewals)

### Plays & Automation

- Rule-based automations triggered by events, score changes, dates, or field updates
- Actions: create tasks, send emails, send in-app messages, update fields, notify via Slack/Teams
- Condition logic: filter by segment, account attributes, contact attributes
- Execution logs for debugging plays that don't fire
- Enterprise edition adds conditional logic (branching within plays)

**Common plays:**
1. Churn risk — health score drops to Red → create urgent task + executive escalation
2. Renewal reminder — 90 days before renewal → create task for CSM + send check-in email
3. Champion change — primary contact job title changes → alert CSM within 48 hours
4. Onboarding stall — 14+ days without milestone progress → escalate to onboarding manager
5. Expansion signal — usage approaching plan limits → create opportunity for AM

### Journeys

- Milestone-based customer journey tracking (onboarding, adoption, renewal, expansion)
- Journey Instances track individual customer progress through journey stages
- Journey Progress monitors completion of specific milestones
- Journey Milestones define the steps and success criteria
- Configurable milestone dependencies and parallel paths
- Journey data available via API (Journey, JourneyInstance, JourneyProgress, JourneyMilestone endpoints)

### In-App Communications

- **WalkThroughs**: Step-by-step product tours and guides displayed inside your application
- **Announcements**: Modal or banner messages for feature launches, updates, maintenance notices
- **Tooltips**: Contextual help overlays on specific UI elements
- **Banners**: Persistent messages at top/bottom of the application
- Requires ChurnZero JavaScript tracking script embedded in your product
- Targeting by user segment, account attributes, journey stage, or custom criteria
- Supports HTML/CSS customization for brand-consistent styling

### Surveys (NPS, CSAT, CES)

- Native NPS, CSAT, and CES surveys
- Delivery channels: in-app (via tracking script), email
- Response collection and scoring within ChurnZero
- Survey response data available via API (Survey, SurveyResponse endpoints)
- Throttling to prevent over-surveying
- Integration with AskNicely, Wootric, and Pendo for external survey tools

### Renewal Forecasting Hub

- Renewal pipeline with expected renewal dates, amounts, and likelihood
- Revenue at risk calculations based on health scores
- Forecast accuracy tracking over time
- CSM and manager views for pipeline management
- Enterprise edition feature

### AI Agents

- Purpose-built, embedded AI agents that take autonomous actions
- AI-generated follow-up emails based on meeting transcriptions
- Automated meeting summaries and action item extraction
- Knowledge sources: Zendesk Guide, Confluence, SharePoint articles curated for agent context
- Refresh every 60 minutes from connected knowledge sources

### Reporting & Analytics

- Segment-based reporting: build a segment first, then create reports from it
- Pre-built dashboards for common metrics (health distribution, renewal pipeline, engagement trends)
- Custom dashboards: **Enterprise edition only**
- Live spreadsheet exports to Excel 365 and Google Sheets with automatic updates
- Shareable dashboards (login-free access URLs) for cross-team visibility
- Data warehouse connectors (Snowflake, BigQuery, S3) for BI-tool analysis

**Known limitations (from user feedback):**
- Default dashboards lack flexibility (Professional edition)
- Cross-segment search is limited
- Must build segments before creating reports
- Playbook-specific reporting is restricted
- Workaround: export to Excel/Sheets or use data warehouse + Tableau/Power BI

## Pricing and limits

ChurnZero uses a hybrid pricing model: platform fee + per-user seats + managed account overages. No public pricing — all contracts are negotiated.

**Editions:**

| Feature | Professional | Enterprise |
|---|---|---|
| Health Scores | ✓ | ✓ |
| Plays & Automation | ✓ | ✓ (+ conditional logic) |
| Journeys | ✓ | ✓ |
| In-App Communications | ✓ | ✓ |
| Surveys | ✓ | ✓ |
| Renewal Hub | ✗ | ✓ |
| Custom Dashboards | ✗ | ✓ |
| REST API | ✗ | ✓ |
| Account Insights | ✗ | ✓ |
| SSO/SAML | Add-on ($2K-$5K/yr) | ✓ |
| Light User Seats | ✗ | ✓ |

**Indicative pricing (based on Vendr contract analysis, 2025-2026):**

| Team size | Professional (median) | Enterprise (median) |
|---|---|---|
| 3 users | ~$10,700/yr | ~$18,100/yr |
| 8 users | ~$12,800/yr | — |
| 15 users | ~$15,700/yr | ~$26,000/yr |
| 35 users | ~$24,100/yr | — |
| 75 users | ~$41,000/yr | ~$65,300/yr |

**Additional costs:**
- Implementation fee: $1,500-$15,000 (varies by team size and complexity)
- Managed account overages: $3,000-$8,000 per 100-account block/year
- Executive User seats: $1,200-$2,400/year (negotiable to $500-$1,200)
- Additional training: $1,000-$2,500/session

**Negotiation tips:**
- Q4 timing: +5-10% savings
- 2-year terms: +10-15% additional savings
- 70/30 Full/Light user mix: 15-20% cost reduction
- Renewal protection clause (3-5% cap) prevents standard 5-10% annual increases
- Buyers achieve 45-71% off list pricing on average

**Implementation timeline:** 3-6 months depending on complexity. Minimum 3 months.

## Integrations

### CRM (bidirectional, sync every 15 min)
- **Salesforce** — accounts, contacts, custom fields, tasks/activities. OAuth, requires Web Services API.
- **HubSpot** — companies, contacts, custom fields, deals, engagements. OAuth. ChurnZero is a HubSpot Certified App Partner.
- **NetSuite** — customers, contacts, custom fields, tasks. OAuth.
- **Pipedrive, Zoho CRM, Copper, Close, Freshsales, Spiro, Dynamics 365, Zendesk Sell** — account/contact/task sync. API keys or OAuth.

### Collaboration
- **Slack** — real-time push alerts to channels. Bot token + user profile mapping.
- **Microsoft Teams** — real-time push alerts. Admin enables, users authorize.

### Data Warehouse (import-only, configurable schedule)
- **Snowflake, Google BigQuery, Amazon S3** — import accounts, contacts, activities, events, custom objects.

### Usage Tracking
- **Segment** — near real-time event/user property sync via webhooks.
- **Mixpanel** — event sync every 15-20 minutes.
- **Pendo** — event and user property sync, near real-time.
- **Intercom** — event and user property sync.

### Support/Ticketing (read, sync every 15 min)
- **Zendesk, Salesforce Service Cloud, HubSpot Service Hub, Freshdesk, Help Scout, Intercom, Jira Software, Jira Service Management, Zoho Desk, ServiceNow, Teamwork Desk** — tickets/issues/conversations.

### Finance/Billing (sync every 15-30 min)
- **Stripe, Chargebee, Recurly, ChartMogul, QuickBooks, Exact, Maxio** — subscriptions, invoices, payments.

### Meeting/Call Recording (sync every 15 min)
- **Gong, Chorus, Zoom, Microsoft Teams** — meetings with participants, summaries, transcripts.

### Customer Enablement (LMS)
- **Skilljar** — course data, completions, quiz results (webhooks, near real-time).
- **Absorb LMS** — course enrollments, completions (every 15 min).
- **Northpass** — course data, completions (webhooks).
- **Higher Logic Vanilla** — community activity (webhooks).

### NPS Tools
- **AskNicely, Wootric, Pendo** — survey responses, contact matching (every 15 min).

### AI Agent Knowledge Sources (refresh every 60 min)
- **Zendesk Guide, Confluence, Microsoft SharePoint** — curated articles for AI agent context.

### Calendar (sync every 15 min)
- **Google Calendar, Outlook Calendar** — scheduled events → ChurnZero meetings.

### Email (read-only, sync every 15 min)
- **Gmail, Outlook** — reads emails/conversations. Can send ChurnZero-generated messages.

### Project Management (read-only, sync every 15 min to daily)
- **Teamwork Projects, Wrike, Asana, Targetprocess** — projects, tasks, milestones.

### Reporting
- **Excel 365, Google Sheets** — scheduled segment data export with auto-updates.

### SSO
- **Google, Microsoft, SAML** — login authentication.

### Video/Webinars
- **GoTo Webinar** — webinar registrants, attendees (daily sync).
- **Synthesia** — generated videos in emails and in-app messages.

## Data model (API — Enterprise only)

ChurnZero's REST API is OData v4 compliant. Key objects:

| Object | Description | Key fields |
|---|---|---|
| Account | Customer accounts | Id, AccountExternalId, Name, NextRenewalDate |
| Contact | Individual users/contacts | Id, ContactExternalId, AccountExternalId, Email |
| Event | Usage/activity events | EventType, Timestamp, Account, Contact |
| EventType | Event type definitions | Name, Description |
| ChurnScore | Health score values | Score, Account, CalculationDate |
| ChurnScoreFactor | Health score factor config | Name, Weight, Category |
| ChurnScoreCalculation | Score calculation details | Factors, Values, Weights |
| Journey | Journey definitions | Name, Milestones |
| JourneyInstance | Customer journey progress | Account, Journey, Status |
| JourneyProgress | Milestone completion | Milestone, CompletionDate |
| Task | CSM tasks | Subject, DueDate, Status, Account |
| Survey | Survey definitions | Type (NPS/CSAT/CES) |
| SurveyResponse | Survey answers | Score, Comment, Contact |

**Lookup patterns:**
- By internal ID: `GET /Account({Id})`
- By external ID: `GET /Account(AccountExternalId='{id}')`
- Contacts by account: `GET /Contact(AccountExternalId='{aid}',ContactExternalId='{cid}')`

## Workflow setup

### Initial implementation (3-6 months)

1. **Week 1-2: CRM integration** — Connect Salesforce/HubSpot. Map account and contact fields. Define source-of-truth rules per field. Test bidirectional sync with a small account set.

2. **Week 3-4: Usage tracking** — Install JavaScript tracking script. Connect Segment/Mixpanel/Pendo. Verify events are flowing. Map key feature usage events.

3. **Week 5-8: Health scores** — Define ChurnScore factors (start with 4-6). Set initial weights. Build segments for Green/Yellow/Red. Validate against historical churn data.

4. **Week 9-12: Plays & Journeys** — Build 3-5 core plays (churn risk, renewal, onboarding stall, champion change, expansion signal). Set up onboarding journey with milestones. Test play execution with real accounts.

5. **Week 13+: In-app & surveys** — Deploy WalkThroughs for onboarding flows. Set up NPS/CSAT surveys with throttling. Configure Slack/Teams alerts for the CS team.

### Common workflow: Churn risk response

1. ChurnScore drops below threshold (e.g., < 40) → Play triggers
2. Play creates an urgent task assigned to account CSM
3. Play sends Slack alert to CS manager
4. CSM reviews account: health score factors, recent events, support tickets
5. CSM conducts intervention call within 24-48 hours
6. CSM updates account with action plan and next steps
7. Health score is monitored for improvement over next 30 days

### Common workflow: Renewal management

1. Renewal Hub shows accounts with renewal in next 90 days
2. Play auto-creates renewal preparation task for CSM
3. CSM reviews health score, usage trends, expansion signals
4. CSM conducts pre-renewal QBR (60 days out)
5. Handoff to AM/AE for commercial negotiation if needed
6. Post-renewal: update contract dates, adjust account segment
