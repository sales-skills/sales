# Salesforce Platform Reference

## Platform overview

Salesforce is the #1 enterprise CRM platform — the default choice for mid-market and enterprise organizations (50+ users) that need complex multi-department workflows, infinite customization, and the largest integration ecosystem in business software. Core differentiators: custom objects via clicks or Apex code, 4,000+ AppExchange apps, 16+ industry-specific solutions (Financial Services Cloud, Health Cloud, etc.), and Agentforce autonomous AI agents. Target audience is teams past $5M ARR with a dedicated Salesforce admin. Not recommended for early-stage startups due to complexity and cost overhead.

## Key modules

### Sales Cloud
- **Leads**: Unqualified prospects with company + person info. Convert to Contact + Account + (optionally) Opportunity.
- **Accounts**: Organizations you sell to. Parent-child hierarchies for enterprise orgs.
- **Contacts**: People associated with Accounts. Multiple contacts per account.
- **Opportunities**: Deals in progress with Stage, Amount, Close Date, Probability. Central to pipeline and forecasting.
- **Products & Price Books**: Catalog items with standard/custom pricing. Multiple price books for different markets/currencies.
- **Quotes & CPQ**: Generate quotes from opportunities. Salesforce CPQ (add-on) handles complex pricing, bundles, subscriptions.
- **Forecasting**: Category-based (Pipeline, Best Case, Commit, Closed) or AI-powered. Collaborative forecasting with manager rollups.
- **Territory Management**: Assign accounts to territories by geography, industry, revenue. Available on Enterprise+.
- **Einstein Activity Capture**: Auto-log emails and calendar events from Gmail/Outlook without manual data entry.

### Service Cloud
- **Cases**: Customer support tickets. Auto-assignment rules, escalation rules, SLA milestones.
- **Knowledge Base**: Internal and external articles. Article types, data categories, approval workflows.
- **Omni-Channel Routing**: Route cases, leads, chats to available agents based on skills, capacity, priority.
- **Field Service**: Dispatch, scheduling, mobile workforce. Work orders, service appointments, asset management.
- **Live Agent / Messaging**: Real-time chat and messaging channels (SMS, WhatsApp, Facebook Messenger).

### Marketing Cloud / Account Engagement
- **Marketing Cloud Engagement**: Enterprise email + journey orchestration. Journey Builder, Email Studio, Audience Studio. Separate pricing from core CRM.
- **Account Engagement (formerly Pardot)**: B2B marketing automation. Engagement Studio drip campaigns, lead scoring, grading, forms, landing pages. Included with some Sales Cloud bundles or sold separately.
- **Marketing Cloud Intelligence (formerly Datorama)**: Cross-channel marketing analytics and attribution.
- **Key distinction**: Marketing Cloud is a separate platform with its own login and pricing. Account Engagement is integrated into the Salesforce CRM interface.

### Commerce Cloud
- **B2C Commerce**: Headless or template-based storefronts. Product catalogs, promotions, order management.
- **B2B Commerce**: Self-service portals for business buyers. Account-based pricing, bulk ordering, reorder support.
- **Order Management**: Distributed order orchestration, inventory management, payment processing.

### Data Cloud
- **Real-time CDP**: Ingest data from any source (CRM, web, mobile, point-of-sale, data lakes).
- **Identity Resolution**: Merge profiles across channels using deterministic and probabilistic matching.
- **Segmentation**: Build segments from unified profiles. Activate segments to Marketing Cloud, Ads, CRM.
- **Calculated Insights**: Create computed metrics (LTV, engagement scores) from unified data.
- **Data Shares**: Connect to Snowflake, BigQuery, Redshift without data movement.

### Agentforce (AI)
- **Agentforce Agents**: Autonomous AI agents for sales (SDR agent, sales coach), service (case resolution), marketing (campaign optimization), and custom use cases.
- **Einstein Copilot**: Conversational AI assistant across Salesforce — summarize records, draft emails, generate reports, explain Flows.
- **Einstein Prediction Builder**: No-code AI predictions on any field (churn likelihood, deal close probability).
- **Einstein Lead/Opportunity Scoring**: Predictive scores based on historical patterns. Enterprise+ only.
- **Prompt Builder**: Create custom AI prompts grounded in CRM data. Connect to external LLMs.
- **Important caveat**: Only 37.9% of advanced admins feel confident with AI features as of 2026. Governance and change management are still catching up.

### Platform (Lightning)
- **Custom Objects**: Define any data structure. Relationships (lookup, master-detail), custom fields, validation rules, page layouts.
- **Flow Builder**: Visual automation tool replacing Workflow Rules and Process Builder. Record-triggered, scheduled, screen, autolaunched, and platform event-triggered flows.
- **Apex**: Salesforce's proprietary Java-like language. Triggers, classes, batch jobs, web services. Required for complex logic Flow can't handle.
- **Lightning Web Components (LWC)**: Modern web component framework for custom UI. Replaces older Aura components.
- **Lightning App Builder**: Drag-and-drop page builder for record pages, home pages, and app pages.
- **Permission Sets & Profiles**: Field-level security, object permissions, tab visibility, app access. Permission Set Groups consolidate access.
- **Sharing Rules**: Organization-wide defaults (private, public read, public read/write) + role hierarchy + sharing rules + manual shares.
- **Sandboxes**: Developer (config only), Developer Pro (5MB data), Partial Copy (sample data), Full Copy (full production clone). Enterprise+ gets partial; Unlimited gets full.
- **Change Sets & DevOps**: Metadata deployment between environments. Change Sets (UI-based), SFDX CLI (source-driven), or third-party CI/CD (Copado, Gearset, Flosum).

### AppExchange (AgentExchange)
- 4,000+ apps, 7.5 million+ installs. 71% of customers use AppExchange apps.
- Categories: data enrichment, document generation, eSignature, analytics, ERP connectors, industry-specific.
- App types: managed packages (installed into your org), connected apps (external with OAuth), Lightning Bolts (pre-built solutions).
- Review process: all apps undergo Salesforce security review before listing.

## Pricing and limits

All prices per user/month, billed annually. Best-effort — verify at salesforce.com/pricing. A 6% price increase was applied across editions as of August 2025.

### Sales Cloud / Service Cloud editions

| Edition | Price | Key inclusions | Key limits |
|---------|-------|----------------|------------|
| **Starter Suite** | $25/user/mo | Basic CRM, email integration, guided setup, case management | No API access, no custom objects (beyond basic), 1 app, no Flows, no Apex |
| **Pro Suite** | $100/user/mo | Pipeline management, forecasting, quoting, basic automation | Limited API (lower daily limits), basic Flows, no Apex triggers, 1 sandbox (dev) |
| **Enterprise** | $175/user/mo | Advanced customization, full API, Flow Builder, Apex, multiple record types, territory management | 100K API calls/24hr (adjustable), 1 partial sandbox + multiple dev sandboxes |
| **Unlimited** | $330/user/mo | Premier support, full sandbox, 24/7 support, unlimited custom apps | Higher API limits, full copy sandbox |
| **Einstein 1 Sales** | $500/user/mo | Everything in Unlimited + Data Cloud, Agentforce, Slack, Revenue Intelligence | Highest limits |

### Add-on pricing (approximate)

| Add-on | Price | Notes |
|--------|-------|-------|
| CPQ | ~$75/user/mo | Complex quoting, pricing rules, approvals |
| Account Engagement (Pardot) | ~$1,250/mo (Growth) | 10K contacts, forms, landing pages, lead scoring |
| Marketing Cloud Engagement | $1,500+/mo | Separate platform, journey-based pricing |
| Data Cloud | Included with Einstein 1, otherwise ~$65K+/yr | Usage-based (profiles, segments) |
| Field Service | ~$50/user/mo (add to Service Cloud) | Mobile workforce, scheduling |
| Revenue Intelligence | Included with Einstein 1, otherwise $75/user/mo | AI pipeline analytics |

### API rate limits

| Edition | Daily API calls | Concurrent API calls |
|---------|----------------|---------------------|
| Enterprise | 100,000 + (per-user allocation) | 25 |
| Unlimited | 100,000 + (higher per-user) | 25 |
| Additional | Buy API call packs | Bulk API has separate limits |

- **Bulk API 2.0**: 15,000 batches/24hrs, 150MB per batch, 1 billion records per 24hrs
- **Streaming API**: 20K push events/24hrs (Enterprise), 200K (Unlimited)
- **SOQL**: 100 queries per transaction, 50K records per query, 10 aggregate queries per transaction

## Integrations

### Native connectors
- **MuleSoft**: API integration platform (acquired by Salesforce). Pre-built connectors for SAP, Workday, NetSuite, Oracle, AWS.
- **Slack**: Notifications, deal alerts, channel-to-record linking, workflow triggers from Slack.
- **Tableau**: BI dashboards connected to CRM data. CRM Analytics (formerly Einstein Analytics) for in-platform analytics.
- **Heroku**: Application platform for custom apps that connect to Salesforce via Heroku Connect (bi-directional data sync).

### Email & Calendar
- **Gmail / Google Workspace**: Einstein Activity Capture auto-logs emails and events. Salesforce extension for Chrome.
- **Outlook / Microsoft 365**: Salesforce for Outlook plugin. Lightning Sync for contacts and events.
- **Lightning Email**: Send tracked emails directly from Salesforce.

### AppExchange top categories
- Data enrichment: ZoomInfo, Clearbit, D&B, LinkedIn Sales Navigator
- Document generation: Conga, DocuSign, PandaDoc
- eSignature: DocuSign, Adobe Sign
- Project management: TaskRay, Milestones PM+
- CPQ: Salesforce CPQ, DealHub, PandaDoc

### iPaaS
- **Zapier**: Thousands of triggers/actions for Salesforce objects
- **Make (Integromat)**: Visual workflow builder with Salesforce modules
- **Workato**: Enterprise automation with Salesforce connector
- **MuleSoft Anypoint**: Salesforce's own integration platform (most powerful, most expensive)

### API
- **REST API**: Standard CRUD + SOQL + SOSL + Composite + Batch. See `salesforce-api-reference.md`.
- **SOAP API**: Older but still used for metadata operations and some integrations.
- **Bulk API 2.0**: High-volume data loads (millions of records). Ingest and query jobs.
- **Streaming API**: Real-time event notifications via CometD. PushTopics, Platform Events, Change Data Capture.
- **Metadata API**: Deploy and retrieve customizations (objects, fields, layouts, Flows, Apex).
- **Tooling API**: IDE integration, Apex compilation, debug logs, code coverage.
- **Connect API (Chatter REST)**: Social features, feeds, groups, files.
- **GraphQL API**: Newer API for flexible querying (generally available since Winter '23).

## Data model

### Standard objects
- **Lead**: Unqualified prospect. Fields: Name, Company, Email, Phone, Status, Rating, Lead Source, Owner.
- **Account**: Company/organization. Fields: Name, Industry, Annual Revenue, Website, Billing/Shipping Address, Owner, Parent Account.
- **Contact**: Person. Fields: Name, Email, Phone, Title, Department, Account (lookup), Mailing Address, Owner.
- **Opportunity**: Deal. Fields: Name, Amount, Close Date, Stage, Probability, Account (lookup), Owner, Forecast Category.
- **Case**: Support ticket. Fields: Subject, Description, Status, Priority, Origin, Contact (lookup), Account (lookup).
- **Task / Event**: Activities. Related to any record via WhoId (person) and WhatId (object).
- **Campaign**: Marketing initiative. Campaign Members link Leads/Contacts to campaigns.
- **Product / PricebookEntry**: Catalog items with pricing per price book.
- **Quote / QuoteLineItem**: Formal pricing documents linked to Opportunities.
- **Custom Objects (Your__c)**: Any object with `__c` suffix. Up to 200 custom objects on Enterprise, 2,000 on Unlimited.

### Key relationships
- Account → Contacts (one-to-many)
- Account → Opportunities (one-to-many)
- Opportunity → Opportunity Contact Roles (many-to-many bridge)
- Opportunity → Products via OpportunityLineItem (many-to-many bridge)
- Lead → (converts to) Contact + Account + Opportunity
- Campaign → Campaign Members → Leads/Contacts
- Account hierarchy: Parent Account → Child Accounts (self-referencing)

### SOQL essentials
```sql
-- Basic query
SELECT Id, Name, Amount, StageName, CloseDate FROM Opportunity WHERE StageName = 'Closed Won' AND CloseDate = THIS_YEAR

-- With relationship (parent)
SELECT Name, Account.Name, Account.Industry FROM Contact WHERE Account.Industry = 'Technology'

-- With child subquery
SELECT Name, (SELECT LastName, Email FROM Contacts) FROM Account WHERE Industry = 'Technology'

-- Aggregate
SELECT StageName, COUNT(Id) cnt, SUM(Amount) total FROM Opportunity GROUP BY StageName

-- Date literals: TODAY, YESTERDAY, THIS_WEEK, LAST_MONTH, THIS_QUARTER, THIS_YEAR, LAST_N_DAYS:90
```

## Workflow setup

### Creating a Record-Triggered Flow
1. Setup → Flows → New Flow → Record-Triggered Flow
2. Select object (e.g., Opportunity)
3. Set trigger: "A record is created or updated"
4. Add entry conditions (e.g., Stage changed to "Closed Won")
5. Choose when to run: Before save (fast, no DML) or After save (can create/update other records)
6. Add actions: Update Records, Create Records, Send Email, Post to Slack, Custom Apex Action
7. Add fault path for error handling
8. Save, then Activate

### Setting up Lead Assignment Rules
1. Setup → Lead Assignment Rules → New
2. Add rule entries (evaluated top-to-bottom, first match wins):
   - Entry 1: If Lead Source = "Web" AND State = "CA" → assign to West Coast queue
   - Entry 2: If Annual Revenue > $10M → assign to Enterprise team
   - Entry 3: Default catch-all → assign to General queue
3. Activate the rule set (only one can be active)
4. For Web-to-Lead: assignment rules fire automatically
5. For API: include `AssignmentRuleHeader` in the request

### Setting up Dashboards
1. Reports → New Report → Select report type (e.g., "Opportunities")
2. Add filters, groupings, summary fields
3. Save report
4. Dashboards → New Dashboard → Add Component → Select report
5. Choose chart type (bar, donut, funnel, gauge, table)
6. Set running user (dynamic = viewer's data, static = specific user's data)
7. Schedule dashboard refresh (daily/weekly)

## Deep dives

### Salesforce admin essentials
- **Profiles vs Permission Sets**: Profiles are the baseline (one per user). Permission Sets add access on top (many per user). Best practice: use a minimal profile + Permission Sets for flexibility.
- **Role Hierarchy**: Controls record visibility. Higher roles see records owned by lower roles. Doesn't affect edit permissions.
- **Sharing Rules**: Owner-based (share records owned by Role A with Role B) or criteria-based (share records where Field = Value with Group).
- **Sandbox strategy**: Dev sandbox for each developer. Partial Copy for QA/UAT with realistic data. Full Copy for production testing before go-live. Refresh schedules: Dev (daily), Partial (5 days), Full (29 days).

### Migration to Salesforce
1. **Map source objects to Salesforce objects** — Contacts → Contacts, Companies → Accounts, Deals → Opportunities, Custom fields → Custom fields
2. **Create custom fields and objects** in Salesforce before importing
3. **Clean data first** — deduplicate, standardize formats, validate emails (use `/sales-data-hygiene`)
4. **Import order matters**: Users → Accounts → Contacts → Opportunities → Activities
5. **Use Data Loader** for bulk imports (>50K records). Data Import Wizard for smaller datasets (<50K).
6. **External IDs**: Create an external ID field mapping records to their source system ID. Essential for maintaining relationships during import and for ongoing integration.
7. **Test with a subset** — import 100-200 records, verify relationships, check automation behavior
8. **Rebuild automations** — HubSpot Workflows → Salesforce Flows, Zapier integrations → MuleSoft or Zapier (reconnect)
9. **Timeline**: 4-12 weeks depending on complexity. Budget for a Salesforce consultant.

### Migration from Salesforce
1. **Export via Data Loader** — extract all objects with External IDs for relationship preservation
2. **Reports as exports** — scheduled report exports for ongoing data needs
3. **API extraction** — use Bulk API 2.0 for large datasets (millions of records)
4. **Key gotcha**: Salesforce stores history (field history tracking, activity history) that may not export cleanly. Plan for data loss in history fields.
5. **Timeline**: 2-8 weeks depending on data volume and target system.

### Salesforce DevOps
- **SFDX CLI**: Command-line interface for source-driven development. `sf org login web`, `sf project deploy start`, `sf apex run`.
- **VS Code + Salesforce Extensions**: Official IDE setup. IntelliSense for Apex, SOQL, Lightning Web Components.
- **Scratch Orgs**: Disposable development environments. Define config in `project-scratch-def.json`. Max 7 days (or 30 for Dev Hub).
- **CI/CD options**: GitHub Actions + SFDX CLI, Copado (native), Gearset (diff-based), Flosum (native). Copado and Gearset are the most popular third-party tools.
- **Metadata API vs Source Tracking**: Source tracking auto-detects changes in scratch orgs. For sandbox development, use change sets (UI) or manifest-based deployments (CLI).
