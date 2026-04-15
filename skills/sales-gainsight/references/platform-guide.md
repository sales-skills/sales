# Gainsight Platform Reference

## Platform overview

Gainsight is the #1 Gartner Magic Quadrant Leader for Customer Success Management Platforms. It's an enterprise-grade platform for managing customer health, retention, expansion, and product adoption across the full post-sale lifecycle. The platform targets mid-market to enterprise B2B SaaS companies with 500+ customers and $50K+ ACV, though it supports organizations of all sizes. Gainsight differentiates through depth of configurability, deep Salesforce integration, and a broad product suite (CS, PX, Staircase AI, Skilljar, Communities) unified under CustomerOS.

## Key modules

### Gainsight CS (Customer Success)

**Scorecards (Health Scores)**
- Composite health scores combining multiple measures with configurable weights
- Measure types: Manual, Calculated, Rule-Based, Survey-Based, Usage-Based
- Scoring models: Numeric (0-100) or Color-coded (Green/Yellow/Red)
- Group scoring: Weight measures by category (Product Usage 40%, Engagement 25%, Outcomes 25%, Sentiment 10%)
- Scorecard history tracking — view score trends over time per account
- Best practice: Don't adjust weights for 6-10 months after initial setup

**CTAs (Calls to Action) & Cockpit**
- CTAs are action items triggered by rules, manual creation, or API
- Cockpit is the CSM's daily work queue — prioritized list of CTAs
- CTA types: Risk, Expansion, Lifecycle, Activity (configurable)
- Priority: Critical, High, Medium, Low
- Reasons: Churn Risk, Upsell Opportunity, Onboarding, Renewal, etc.
- Bulk operations: Use Rules Engine for mass CTA creation/closure
- Cascading: Due date and owner changes can cascade to linked tasks

**Playbooks**
- Pre-built task sequences attached to CTAs
- Templates define ordered tasks with owners, due dates, descriptions
- Playbooks auto-create tasks when applied to a CTA
- Can be triggered by rules or applied manually
- Support conditional branching based on CTA outcomes

**Success Plans**
- Structured plans with objectives, milestones, and tasks
- Templates: Onboarding, Renewal, Expansion, Custom
- API-first: Create plans with objectives in a single API call
- Track completion percentage, status (Draft/Active/Complete/Closed)
- Link to specific accounts and relationships

**Journey Orchestrator (JO)**
- Automated multi-step email/survey programs
- Programs: Onboarding, Renewal, Risk Mitigation, NPS, custom
- Audience criteria based on account/person attributes
- Email sources: Gmail, Outlook, or Gainsight email relay
- Survey types: NPS, CSAT, open-ended
- Scheduling: Immediate, delayed, recurring
- Conditional branching based on email opens, clicks, survey responses

**Timeline**
- Chronological record of all customer interactions
- Activity types: Call, Meeting, Email, Note, Milestone, Custom
- Salesforce Activity sync: Pull Events and Tasks into Timeline
- Email integration: Log emails directly from Gmail/Outlook
- API-accessible for external system integration

**Cockpit Views & Dashboards**
- List, Board (Kanban), and Calendar views
- C360 (Customer 360): Single-page account view with configurable sections
- R360 (Relationship 360): For managing multiple relationships per company
- Dashboard builder with charts, tables, and custom widgets
- Multi-select dropdown reporting requires splitting values (A;B;C format) for pie charts

**Rules Engine**
- Automated workflows triggered by data conditions
- Sources: Gainsight objects, Salesforce data, product usage, surveys
- Actions: Create/Update CTA, Send Email, Set Score, Update Field, Load to MDA
- Schedule: On-demand, scheduled (daily/weekly/monthly), event-driven
- Chain rules for complex multi-step automations

**Copilot AI**
- AI-powered call prep summaries
- Auto-generated account summaries and risk analysis
- Meeting follow-up drafts
- CS Copilot for quick account context

### Gainsight PX (Product Experience)

- In-app engagement: Guides, Tooltips, Hotspots, Dialogs, Surveys, Banners
- Product analytics: Feature adoption, user journeys, retention cohorts
- User segmentation based on behavior, attributes, and events
- A/B testing for in-app experiences
- Knowledge Center: In-app resource hub
- PX SDK: JavaScript (web), iOS, Android, React Native, Flutter, NativeScript
- Pricing: MAU-based, separate from CS. Free Starter tier (100 MAU), paid plans $30K-100K+/yr
- Implementation: Typically 3-6 months (can take 18+ months for complex deployments)

### Staircase AI

- Conversation intelligence: Analyzes email, meeting, and chat patterns
- Sentiment scoring: Automatic health/sentiment derived from conversation tone
- Risk detection: Early warning for churn based on communication pattern changes
- Expansion signals: Identifies upsell opportunities from conversation context
- Integrates with Gmail, Outlook, Zoom, Microsoft Teams, Slack
- Works alongside Scorecard — provides sentiment dimension without manual CSM input
- Cheatsheet integration: Auto-populates key account context

### Skilljar (Customer Education)

- LMS: Build and host customer training courses
- Certifications: Issue certificates on course completion
- Multi-tenancy: Separate training portals per customer segment
- Analytics: Course completion rates, assessment scores, learner engagement
- Integrations: SSO, CRM, payment gateways (for monetized training)
- Acquired by Gainsight — integrates with CS for education-driven health scoring

### Customer Communities (inSided)

- Community platform for customer self-service
- Features: Forums, Ideation boards, Knowledge Base, Product Updates
- Gamification: Points, badges, leaderboards
- Moderation: Content flagging, spam detection, community guidelines
- Integrations: Salesforce, Zendesk, Jira, Productboard, Intercom
- Analytics: Community engagement metrics, deflection rates, top contributors

### CustomerOS

- Unified operating system connecting all Gainsight products
- Single data model across CS, PX, Staircase, Skilljar, Communities
- Cross-product workflows: PX usage data → CS health scores → CTA triggers
- Atlas AI Agents: Autonomous agents that execute CS workflows
- Gainsight Benchmarks: Compare your post-sales performance metrics against anonymized peer data

### 2026 product updates

- **Advanced Programs redesign** — New drag-and-drop editor with inline action outcomes and conditional wait branching (replaces older Program Experience)
- **Data Designer overhaul** — New Program Experience (Data Designer) for building audience criteria; note: participant removal during testing still requires workarounds (clone program, delete test version)
- **Customer Goals** — Goal-setting feature for structuring implementation, adoption, QBR, and expansion objectives per account
- **Gainsight Benchmarks** — New benchmarking tool to compare post-sales metrics against anonymized peer cohorts
- **Atlas AI Agents** — Autonomous agents for CS workflows (scheduling, prep, follow-up)
- **Copilot enhancements** — AI Cheat Sheet integration, auto-generated account summaries

## Pricing and limits

Gainsight does not publicly disclose detailed pricing. All pricing below is best-effort from third-party sources and may be outdated.

**Gainsight CS:**
- Essentials: ~$1,200-2,400/user/year
- Enterprise: ~$2,400-4,200/user/year
- Median annual contract: ~$50K
- Small contracts: ~$13-14K/yr; large enterprise: up to $200K/yr
- License types: Full, Viewer, Viewer Analytics, Internal Collaborators, External
- Implementation fees: Up to $120K for complex deployments
- Typical 5-10% annual uplift on renewal

**Gainsight PX:**
- Free Starter: Up to 100 MAU
- Paid plans: $30K-100K+/yr (MAU-based)

**API rate limits:**
- Synchronous: 100 calls/min, 50,000 calls/day
- Asynchronous (Bulk): 10 calls/hour, 100 calls/day
- User Management: 100 requests/hour, 1,000 requests/day
- Success Plan: 5,000 calls/min, 50,000/day
- Fixed window rate limiting

**Data limits:**
- Single API call: Max 50 records (insert/update)
- Read API: Max 5,000 records per call (use offset for pagination)
- CTA Fetch: Max 1,000 records per request
- Bulk API: CSV-based, async processing, 10 jobs/hour

## Integrations

**CRM (native, deep):**
- **Salesforce**: Bi-directional real-time sync for Accounts, Contacts, Cases. Team View embeds Gainsight data in Salesforce. Connector 2.0 with fine-grained field mapping. Only one real-time sync job per object type.
- **HubSpot**: Native connector via Connectors 2.0
- **Pipedrive**: Sync deals, accounts, contacts
- **Microsoft Dynamics**: Supported via connectors

**Data warehouses:**
- Snowflake, BigQuery, Redshift, MySQL, Postgres — ingest usage data into Adoption Explorer

**Product analytics:**
- Segment, Mixpanel, Google Analytics — pipe usage data for health scoring

**Support & ticketing:**
- Zendesk, Freshdesk, ServiceNow, Jira — sync tickets for support health indicators

**Communication:**
- Slack (notifications, PX feedback), Gong (auto-log meetings), Intercom

**Billing & subscription:**
- Zuora (invoices and subscription data for revenue health)

**Data integration:**
- Fivetran (single source of truth), Zapier (5,000+ app connections)

**Marketplace:**
- 35+ integrations across categories: Analytics, CRM, Data Management, Support, Engagement, Education

## Data model

**Core objects:**
- **Company**: Primary account record. Fields: Name, Industry, ARR, Employees, RenewalDate, Stage, Status, CSM, ParentCompany. Identified by GSID.
- **Person**: Individual contact. Fields: Email (mandatory), FirstName, LastName, LinkedIn, Location, Timezone. Linked to Companies via Company Person association.
- **Relationship**: Sub-accounts under a Company (for multi-product or multi-division tracking)
- **CTA**: Action item with Type, Priority, Reason, Status, Owner, DueDate, Company link
- **Success Plan**: Structured plan with Objectives, linked to Company or Relationship
- **Custom Objects**: User-defined objects for extending the data model

**Key relationships:**
- Company → many Persons (via Company Person join)
- Company → many CTAs
- Company → many Success Plans → many Objectives
- Company → many Relationships → many Relationship Persons
- CTA → many Tasks (via Playbook)

**Identifiers:**
- GSID: Gainsight's internal unique identifier (used across all APIs)
- External Reference ID: Your system's ID (used for deduplication)
- SFDC ID: Salesforce record ID (for synced records)

## Workflow setup

### Setting up health scoring (most common first workflow)

1. **Connect data sources** — Salesforce (account data), Segment/Mixpanel (product usage), Zendesk (support tickets)
2. **Create a Scorecard** — Admin → Scorecards → New. Choose Company or Relationship level.
3. **Add 4-5 measures** — Start with: Product Usage (rule-based from usage data), Engagement (manual CSM input), Support Health (rule-based from ticket volume), Sentiment (from Staircase or manual), Outcomes (from success plan completion)
4. **Set weights** — Usage 40%, Engagement 20%, Support 15%, Sentiment 15%, Outcomes 10%
5. **Define thresholds** — Green > 70, Yellow 40-70, Red < 40 (adjust after 6+ months of data)
6. **Schedule recalculation** — Daily for rule-based measures, weekly for composite score
7. **Don't change weights for 6-10 months** — you need stable data to validate against actual churn

### Setting up CTAs with playbooks

1. **Define CTA types** — Admin → Cockpit → CTA Types (Risk, Expansion, Lifecycle, Activity)
2. **Create playbook templates** — Admin → Playbooks → New. Add ordered tasks with owners and relative due dates.
3. **Create rules** — Rules Engine → New Rule. Set trigger conditions (e.g., health score drops below 40). Set action: "Create CTA" with type, priority, reason, and linked playbook.
4. **Test** — Run rule on a test segment. Verify CTA appears in Cockpit with correct playbook tasks.

### Connecting Salesforce

1. **Connector 2.0** — Admin → Connectors → Salesforce → Authenticate with admin credentials
2. **Configure sync jobs** — Select objects (Accounts, Contacts, Cases, Opportunities). Map fields. Choose sync direction (SF→GS, GS→SF, or bidirectional).
3. **Enable real-time sync** (optional) — Edit OOB jobs to enable real-time. Only one real-time job per object.
4. **Set up Team View** — Install Gainsight Salesforce package. Configure which Gainsight data (health score, CTAs, Timeline) appears on Account/Opportunity pages.
5. **Timeline Activity sync** — Admin → Timeline → Salesforce Activity. Map Event and Task objects to Timeline activity types.

## Deep dives

### Salesforce integration details

- **Connector 2.0** is the current integration framework (replacing legacy connectors)
- **Bi-directional sync** risks: If health scores push to Salesforce AND Salesforce fields feed back into health score inputs, test for circular update loops
- **Real-time sync limitations**: One job per object type. Cannot combine real-time and batch for the same object — pick one.
- **Team View embedding**: Requires Salesforce Managed Package installation. Displays Gainsight C360, health scores, CTAs, and Timeline in Salesforce Lightning/Classic
- **Bulk initial load**: For first-time data migration, use Bulk API to load historical data before enabling real-time sync

### Advanced Scorecard configuration

- **Group measures by category**: Create measure groups (Product, Engagement, Support, Sentiment) with group-level weights
- **Override logic**: CSMs can manually override individual measures with justification notes
- **Scorecard snapshots**: Automatically captured on score change — use for trend analysis
- **Multi-Scorecard support**: Different Scorecards for different segments (SMB vs Enterprise, by product line)
- **Scorecard for Relationships**: Track health at sub-account level, not just company level

### Journey Orchestrator best practices

- **Sender reputation**: Use a dedicated sender domain for JO emails. Don't share with marketing emails.
- **Throttling**: JO respects contact-level send limits. Set global max emails per contact per week.
- **Survey fatigue**: Don't send NPS more than quarterly. Set exclusion rules to prevent over-surveying.
- **Program types**: One-time (onboarding), Recurring (monthly check-in), Event-driven (triggered by score change)
- **Email domain limitations**: Primary domains may have DMARC restrictions. Use subdomains for JO sending (e.g., cs.yourcompany.com).

### Gainsight referral program

- $50 per referral when they complete a demo
- $150 if the referral becomes a customer
- Max $599 aggregate per referrer
- Must be an employee of a current Gainsight client
- Signup: https://www.gainsight.com/gainsight-referral-program/
