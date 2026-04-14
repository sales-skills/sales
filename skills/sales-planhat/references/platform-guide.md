# Planhat Platform Reference

## Platform overview

Planhat is "The Agentic Customer Platform" — an enterprise-grade Customer Success Platform for B2B companies. It enables AI and human collaboration across the entire customer lifecycle: onboarding, adoption, retention, expansion, and renewal. 884 G2 reviews, 4.5/5 rating. Targets CS teams, Revenue Ops, and Account Management at mid-market to enterprise B2B companies (SaaS, IT Services, Healthcare, Security, Business Services).

Key differentiators vs Gainsight/ChurnZero/Vitally:
- Strong data modeling and flexible health scores — built for data-heavy teams
- Agentic Automation — AI agents that execute processes with governance
- MCP Server for Claude/ChatGPT integration
- 40+ native integrations including AI providers (Anthropic, OpenAI, Azure, Gemini)
- Comprehensive revenue management (Licenses, Opportunities, Invoices, Sales)

## Key modules

### Health Scores
- Dynamic scoring combining analytics, human input, and AI
- Configurable indicators from product usage, support, engagement, NPS, billing
- Weight adjustment per indicator
- Score calculated at Company level
- Best practice: don't change weights for 6-10 months after initial setup
- Validate against actual churn data before adjusting thresholds

### Revenue Management
- **Licenses**: recurring revenue records synced from CRM opportunities or created via API
- **Opportunities**: pipeline tracking synced from Salesforce/HubSpot
- **Invoices**: billing records for revenue recognition
- **Sales**: closed-won tracking
- Revenue metrics: ARR, MRR, expansion, contraction, churn
- Renewal tracking with date-based automation triggers

### CRM Sync
- **Salesforce**: bidirectional sync of Companies, Contacts, Opportunities, Notes, Tasks. All mapped CRM data related to "closed won" deals syncs bidirectionally. Neither system can delete objects in the other, but fields can be updated cross-system.
- **HubSpot**: bidirectional sync of Companies, Contacts, Deals (as Licenses/Opportunities), Notes, Tickets, Tasks. Highly flexible object mapping. Sync direction configurable per pair. Filters for which records to include.
- **Pipedrive**: bidirectional sync of Companies, Contacts, Deals
- **Key gotcha**: Salesforce ingestion rules assume clean data. Messy opportunity data creates bad licenses.

### Agentic Automation
- AI agents governed by rules for executing processes
- Triggers → Conditions → Actions workflow
- Connections to external services (Slack, email, CRM, custom webhooks)
- Code execution capability for custom logic
- Flows for multi-step automated workflows

### Enduser & Usage Tracking
- Track individual end users within customer companies
- User activity logging (login, feature usage, events)
- Touchpoint capture: emails, transcripts, tickets, interactions
- Product analytics integration via Segment, Mixpanel, Amplitude, Pendo
- Analytics endpoint (`analytics.planhat.com`) handles high-volume usage data

### Metrics & Reporting
- Custom metric builder with formula editor
- Calculated fields across any data model
- Dashboard widgets and custom views
- **Gotcha**: Metrics take 2-3 hours to build. Formula errors require a full rebuild cycle.
- **Limitation**: Table reporting can't sum fields inline or drag-and-drop columns. Export to CSV or use data warehouse + BI tool for advanced analysis.

### NPS
- NPS survey sending and response collection
- Score aggregation and trending
- Detractor/Passive/Promoter classification
- Response synced to Company and Enduser records

### Projects & Tasks
- Onboarding and implementation project tracking
- Milestone-based progression
- Task assignment and completion tracking
- Project templates for repeatable workflows

### Notes & Conversations
- Rich-text notes linked to Companies and Endusers
- Email conversation tracking (Outlook/Gmail sync)
- Call log recording and transcription (via Gong, Fathom, Fireflies, Jiminny)

### MCP Server
- Native MCP Server at `https://api.planhat.com/v1/mcp`
- Model Discovery: discover available data models and operations
- Schema Retrieval: get parameter schemas for model-operation pairs
- CRUD Operations: create, read, update, delete via standardized calls
- OAuth integration for ChatGPT, Claude Web
- Claude Desktop: manual config in `claude_desktop_config.json`
- User-scoped permissions based on account access levels

## Pricing and limits

Three tiers — all quote-based (no published prices):

| Plan | Typical annual cost | Target |
|---|---|---|
| **Start-Up** | ~$14K-$30K/year | Small CS teams, <500 accounts |
| **Professional** | ~$21K-$50K/year | Mid-market, 500-2,000 accounts |
| **Enterprise** | ~$50K-$100K+/year | Enterprise, 2,000+ accounts |

Pricing factors: customer account volume, automation executions, transactional emails, add-ons.

**All plans include:**
- Companies, Contacts, Opportunities
- Native Integrations
- Open API
- Custom Fields & Field Rules

**Add-ons (extra cost):**
- Upgraded AI Platform
- Advanced Service (resource management & service automation)
- Email Marketing
- Advanced Portals (prospect/customer collaboration)

**Services (separate):**
- Onboarding & Implementation
- AI Deployment
- Strategic Advisory
- Managed Services
- 24/5 Support
- Professional Services

**Unlimited user seats** for View Users (observers). Full seats priced per plan.

## Integrations

### AI
- Anthropic (embed Claude into workflows)
- OpenAI (embed GPT into workflows)
- Azure OpenAI
- Google Gemini

### CRM (bidirectional)
- **Salesforce**: accounts, contacts, opportunities, notes, tasks — bidirectional
- **HubSpot**: companies, contacts, deals, notes, tickets, tasks — bidirectional with flexible mapping
- **Pipedrive**: companies, contacts, deals — bidirectional

### Customer Experience & Support
- Zendesk: feedback and bug reports
- Freshdesk: feedback and bug reports
- Help Scout: feedback and bug reports
- Intercom: feedback, conversations, bug reports
- Jira: issue tracking and bug reports

### Communication
- Slack: notifications and account summaries
- Microsoft Teams: custom notifications to channels
- Outlook: unified inbox, notifications, event sync
- Gmail: unified inbox, notifications, event sync

### Call Recording & Transcription
- Gong: call recordings, AI summaries, metadata
- Jiminny: call recordings, AI summaries, metadata
- Fathom: AI summaries and full transcripts
- Fireflies: call logs, raw transcripts or summaries
- Ringover: calls, call logs, transcripts, recordings
- Aircall: calls, call logs, transcripts, recordings

### Product Analytics
- Pendo: product engagement monitoring
- Mixpanel: product engagement monitoring
- Amplitude: product engagement monitoring
- Segment: product engagement and data enrichment

### Data Warehouse & Storage
- Snowflake: sync and backup data
- BigQuery: sync and backup data
- PostgreSQL: sync time-series data as Metrics
- AWS S3: scheduled flat file import
- Google Cloud: scheduled flat file import
- Microsoft OneDrive: scheduled flat file import
- Google Drive: scheduled flat file import

### Automation & Integration
- Zapier: trigger actions, create companies/contacts/notes
- Stitch: push static data to destination pipeline
- Apideck: seamless software integration

### Learning & Development
- LearnUpon: create/enroll end-users in courses, push data

### Calendar
- Google Calendar: customer events as planned/logged activities
- Outlook Calendar: customer events as planned/logged activities

### Email Marketing & NPS
- Mailchimp: send segments for campaigns
- Mandrill: send segments for campaigns
- Delighted: NPS surveys and response sync
- Satismeter: NPS response sync

## Data model

### Core objects
- **Company**: the customer account. Fields: name, externalId, custom fields, health score, phase, owner
- **Enduser**: individual user within a company. Fields: name, email, externalId, activity data
- **License**: recurring revenue/subscription record. Synced from CRM opportunities or created via API
- **Opportunity**: pipeline/deal record synced from CRM
- **Invoice**: billing record
- **Sale**: closed-won revenue record
- **Asset**: product/service the customer uses
- **Campaign**: marketing campaign tracking
- **Note**: rich-text note linked to Company/Enduser
- **Task**: action item with assignee, due date, completion status
- **Ticket**: support ticket synced from Zendesk/Freshdesk/etc.
- **NPS**: survey response record
- **Project**: onboarding/implementation project with milestones
- **Conversation**: email/chat thread record
- **Custom Field**: extend any model with custom data
- **Issue**: bug/feature request tracking
- **Churn**: churn event record
- **Time Entry / Timesheet**: service time tracking
- **User Activity**: product usage event (sent to analytics endpoint)
- **Metrics**: calculated time-series data

### ID system
- Every object has a Planhat internal ID and an optional `externalId` (your system's ID, typically CRM record ID)
- "Keyables" determine uniqueness — if external ID matches, update; if not, create new
- This is why CRM sync creates duplicates when keyables aren't mapped correctly

### Open endpoints (no auth required)
- User Activities: push product usage events
- Metrics: push time-series data
- Call logs: push telephony data
- These use the `analytics.planhat.com` endpoint with Tenant Token authentication

## Workflow setup

### Setting up Health Scores
1. Identify indicators: product usage, support tickets, engagement, NPS, billing
2. Assign weights (usage heaviest at 40-50%, NPS no more than 15-20%)
3. Set thresholds for Green/Yellow/Red
4. Connect data sources (CRM, product analytics, support)
5. Monitor for 6-10 months before adjusting weights
6. Run retroactive analysis against actual churn to validate

### CRM Integration (Salesforce)
1. Navigate to Settings → Integrations → Salesforce
2. Authorize the connection
3. Map Salesforce objects to Planhat objects (Accounts → Companies, Contacts → Endusers, Opportunities → Licenses)
4. Define field-level sync direction (Planhat → SF, SF → Planhat, or bidirectional)
5. Set filters for which records to include
6. Configure ingestion rules for Opportunities → Licenses conversion
7. **Test with a small batch first** — verify keyable mapping before full sync

### CRM Integration (HubSpot)
1. Navigate to Settings → Integrations → HubSpot
2. Authorize the connection
3. Map HubSpot objects to Planhat models (Companies → Companies, Contacts → Endusers, Deals → Licenses/Opportunities)
4. Choose sync direction per pair
5. Apply filters for record inclusion
6. Verify bidirectional fields work correctly in both directions

### Setting up the MCP Server
1. Go to App Center → Create Private App
2. Assign appropriate permissions (read/write per model)
3. Generate an access token
4. For Claude Desktop: add to `claude_desktop_config.json`:
   ```json
   {
     "mcpServers": {
       "planhat": {
         "url": "https://api.planhat.com/v1/mcp",
         "headers": {
           "Authorization": "Bearer YOUR_ACCESS_TOKEN"
         }
       }
     }
   }
   ```
5. For OAuth (ChatGPT/Claude Web): create OAuth app in App Center, configure credentials in external platform

## Deep dives

### Enduser Tracking & Product Analytics
- **Direct API**: Push user activities to `analytics.planhat.com` (no auth, high volume)
- **Segment integration**: Stream product events via Segment source
- **Mixpanel/Amplitude/Pendo**: scheduled sync of product engagement data
- Activities include: logins, feature usage, page views, custom events
- Activities link to Enduser records → aggregate at Company level for health scoring

### Data Warehouse Integration
- **Snowflake/BigQuery**: bidirectional sync for backup and advanced analytics
- **PostgreSQL**: sync time-series data as Planhat Metrics
- **Use case**: when Planhat's built-in reporting isn't sufficient, push data to warehouse and use BI tools (Looker, Tableau, etc.) for custom reporting
- This is the recommended workaround for Planhat's table reporting limitations

### Service Accounts & API Authentication
- **Service Accounts** (Private Apps): create in Settings → App Center
- Each Service Account gets its own API Access Token
- Tokens are scoped to the permissions assigned to the Service Account
- **Personal Access Tokens**: per-user tokens for individual API access
- **OAuth Clients**: for third-party app integrations
- **Tenant Token**: used for open endpoints (analytics, activities, call logs) — find in Settings
