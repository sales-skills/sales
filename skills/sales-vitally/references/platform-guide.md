# Vitally Platform Reference

## Platform overview

Vitally is an AI-powered Customer Success Platform for B2B SaaS companies. Positioned as "The AI-Powered Workspace for CSMs," it combines customer data, team collaboration, and automated workflows in a single workspace. 600+ customers, 4.5 stars on G2 (679 reviews). Targets CSMs, CS leaders, CS Ops, and Account Managers at mid-market to enterprise B2B SaaS companies.

Key differentiators vs Gainsight/ChurnZero/Totango:
- Faster time-to-value (2-4 week implementation vs months)
- Modern, intuitive UI with Kanban boards and collaborative spreadsheet views
- Built-in AI copilot for call summaries, transcripts, and insights
- Productivity-first design (task management, docs, meeting management alongside analytics)

## Key modules

### Health Scores
- Composite score (0-10) based on configurable indicators
- Indicators pull from: product usage, support tickets, NPS, engagement, billing data
- Weights are adjustable per indicator
- Scores calculated at Account and Organization level
- Health score breakdown available via API: `GET /resources/accounts/:id/healthScores`
- NPS score also maintained separately at account/org level (-100 to 100)

### Automation & Playbooks
- Rule-based automation: trigger → condition → action chains
- Playbooks: multi-step automated workflows tied to customer lifecycle events
- Blueprints: curated workflow templates for common CS scenarios
- Actions include: create tasks, send emails, update traits, assign CSMs, add to segments
- Triggers include: health score changes, trait updates, date-based (renewal approaching), segment entry/exit
- Unlimited automations on all plans

### Projects
- Onboarding and implementation tracking with milestones
- Project Templates: reusable templates with pre-defined tasks and milestones
- Project Categories and Statuses for organizing
- Track target vs actual start/completion dates
- Duration tracking (days between start and completion)
- Owner assignment per project
- API: Create projects from templates via `POST /resources/projects`

### Vitally AI
- AI copilot for CSMs
- Call recording with automatic transcription
- AI-generated call summaries and key points
- Risk assessment on meetings
- Transcript search and analysis
- Meeting → Task conversion (auto-create tasks from action items)

### Dashboards & Reporting
- Customizable dashboards with configurable widgets
- Segments: dynamic customer groupings based on traits, scores, and behavior
- Hubs: focused workspaces for specific views (e.g., renewals, at-risk)
- Kanban board view for pipeline-style customer management
- Table view (collaborative spreadsheet-style)

### Customer Surveys & NPS
- Built-in NPS survey sending
- Custom surveys with configurable questions
- Response tracking at User and Account level
- NPS score aggregation (detractor/passive/promoter counts)
- Survey responses available via API

### Notes
- Rich-text notes with HTML support
- Note categories for organization (Meeting, Call, etc.)
- Tags for cross-cutting organization
- Custom traits on notes (via `vitally.custom.` prefix)
- Template variables: `{{account.traits.traitKey}}` or `{{organization.traits.traitKey}}`
- Notes synced bidirectionally with Salesforce/HubSpot

### Tasks
- Task assignment to team members
- Due dates, categories, and tags
- Completion tracking with `completedAt` and `completedById`
- Link tasks to projects
- Custom traits on tasks
- Tasks synced bidirectionally with CRM

### Conversations
- Email conversation tracking (Gmail/Outlook integration)
- Inbound/outbound message classification
- Conversation traits for metadata (e.g., expansion opportunity flags)
- Note: Conversations API creates records as reference points — it does NOT send messages

### Meetings
- Google Calendar sync
- Participant tracking (organizer/attendee, response status)
- Recording URL and transcript storage
- AI-generated summaries and key points
- Risk assessment field
- Transcript API with speaker identification and timestamped sentences

### Custom Objects
- Extend the data model beyond accounts/users/orgs
- Define custom fields with types (string, datetime, etc.)
- Write modes: writable (admins), writableByAll, readonly
- Link instances to accounts/organizations
- Full CRUD via API including search by custom field values

### Collaborative Docs
- Shared documents for CS team
- Template-based creation

### Goals Tracking
- Track customer success milestones
- Goal-based reporting

## Pricing and limits

Three tiers — all "Request Pricing" (no published rates):

| Plan | Target model | Key differentiator |
|---|---|---|
| **Tech-Touch** | One-to-many & PLG Customer Success | Scaling automation-first CS |
| **Hybrid-Touch** | Any model of Customer Success | Flexible for mixed approaches |
| **High-Touch** | One-to-one Customer Success | **Unlimited full seats** |

**All plans include:**
- All core features
- Unlimited automations
- Unlimited observer seats
- SSO
- Full integration library
- Unlimited documents

**No publicly documented feature gating between plans.** The primary difference appears to be seat model and pricing structure rather than feature access.

## Integrations

### CRM (bidirectional)
- **Salesforce**: accounts, contacts, notes, tasks, custom objects — real-time bidirectional sync. Can push health scores back to Salesforce records.
- **HubSpot**: companies, contacts, notes, meetings, calls, tasks, emails — bidirectional sync with hierarchy support (organizations, deals).

### Billing & Subscriptions
- **Stripe**: customer and subscription data — trials, MRR, renewal dates, churn
- **Chargebee**: customer and subscription data — trials, MRR, renewal dates, churn
- **Recurly**: subscription data — MRR, renewal dates, churn

### Email & Communication
- **Gmail**: import/sync customer emails, send automated personalized messages
- **Outlook**: import/sync customer emails, send automated personalized messages
- **Slack**: send indicators, notes, tasks to Slack channels
- **Intercom**: sync companies, users, product events, conversations; start automated Intercom conversations

### Email Delivery (for automated messages)
- **SendGrid**: transactional emails via Vitally
- **Mailgun**: transactional emails via Vitally

### Support & Ticketing
- **Zendesk**: import/sync organizations, end users, tickets
- **Jira**: sync issues to users and accounts

### Analytics & Product Events
- **Mixpanel**: users, customers, event tracking via API
- **Amplitude**: customer data on recurring schedule
- **Pendo**: product events on recurring schedule
- **Segment**: users, customers, event tracking (streaming)
- **RudderStack**: users, customers, event tracking (streaming)

### Data Warehouses & Databases
- **Snowflake**: customer data on recurring schedule
- **BigQuery**: customer data on recurring schedule
- **PostgreSQL**: customer data on recurring schedule
- **MySQL**: customer data sync
- **Amazon Redshift**: customer data on recurring schedule
- **Amazon S3**: customer data on recurring schedule

### Data Integration Platforms
- **Census**: reverse ETL sync
- **Hightouch**: reverse ETL sync

### Business Intelligence
- **Looker**: embed dashboards and looks into Vitally

### Surveys
- **Simplesat**: sync survey data on recurring schedule

### Data Enrichment
- **Clearbit**: enrich customer profiles with 85+ data points

### Call Intelligence
- **Gong**: link Call Briefs and Next Steps; convert Next Steps into Vitally tasks

### Support Tools
- **Thena**: sync Thena requests to Vitally

### Calendar
- **Google Calendar**: sync meetings to Vitally as meeting objects

### Automation
- **Zapier**: integrate with 1,000+ apps

### Native APIs
- **Analytics API**: JavaScript SDK + HTTPS for sending product events directly
- **REST API**: full CRUD for accounts, users, notes, tasks, projects, etc.

## Data model

### Object hierarchy
```
Organization (optional parent)
  └── Account (the customer company)
       ├── Users (end users / contacts)
       ├── Notes
       ├── Tasks
       ├── Projects (from templates)
       ├── Conversations → Messages
       ├── Meetings → Transcripts
       ├── NPS Responses
       ├── Survey Responses
       └── Custom Object Instances
```

### Key fields
- **Organization**: externalId, name, traits, mrr (via traits), nextRenewalDate (via traits), churnedAt (via traits), healthScore, npsScore
- **Account**: externalId, name, traits, mrr (via traits), healthScore (0-10), npsScore (-100 to 100), status (active/churned)
- **User**: externalId, name, email, traits, lastSeenTimestamp, npsLastScore, segments
- **Admin**: id, name, email, licenseStatus (active/deactivated/auto-created)

### ID system
- Every object has a Vitally `id` (UUID) and an optional `externalId` (your system's ID)
- Most GET endpoints accept either ID type
- externalId is only settable on creation (immutable after)

### Traits
- Key-value pairs on any object (accounts, users, orgs, notes, tasks, projects)
- Custom traits use `vitally.custom.` prefix from the admin panel
- Traits merge on update — omitting a trait keeps its current value
- Set to `null` to delete a trait
- Can be used as template variables in notes: `{{account.traits.traitKey}}`

## Workflow setup

### Setting up Health Scores
1. Navigate to Settings → Health Scores
2. Choose indicators (product usage, support, engagement, NPS, etc.)
3. Assign weights to each indicator
4. Set thresholds for Green/Yellow/Red zones
5. Apply to account segments (different segments can have different models)
6. Monitor for 6-10 months before adjusting weights

### Creating an Onboarding Playbook
1. Create a Project Template with milestones and tasks
2. Set up an automation: Trigger = "Account created" or "Account trait changed" (e.g., stage = onboarding)
3. Action = "Create Project from Template" for the account
4. Tasks auto-assign to the account's CSM
5. Track completion via Projects dashboard or Kanban view

### Renewal Tracking
1. Ensure `nextRenewalDate` trait is populated (via CRM sync or API)
2. Create automation: Trigger = "Date-based" (90 days before renewal)
3. Action = Create renewal tasks, send CSM notification, update account stage
4. Build a Renewals Hub dashboard filtered by renewal date range
5. Track health score alongside renewal date for risk assessment

## Deep dives

### CRM Integration (Salesforce)
- **Setup**: Settings → Integrations → Salesforce → Authorize
- **Sync objects**: Accounts, Contacts, Opportunities, Tasks, Notes, Custom Objects
- **Field whitelisting**: Select which Salesforce fields appear in Vitally account profiles
- **Bidirectional push**: Push Vitally health scores, indicators, and segments back to Salesforce records
- **Real-time sync**: Changes reflect within minutes
- **Gotcha**: If you push health scores TO Salesforce AND pull Salesforce data INTO health score calculations, test for circular update loops

### CRM Integration (HubSpot)
- **Setup**: Settings → Integrations → HubSpot → Authorize
- **Sync objects**: Companies (as Accounts/Orgs), Contacts (as Users), Notes, Meetings, Calls, Tasks, Emails
- **Hierarchy support**: HubSpot organizations map to Vitally organizations, companies to accounts
- **Deal sync**: HubSpot deals visible in Vitally for renewal/expansion tracking
- **Bidirectional**: Notes and tasks sync both ways

### API Architecture
- **Base URL (US)**: `https://{subdomain}.rest.vitally.io/resources/`
- **Base URL (EU)**: `https://rest.vitally-eu.io/resources/`
- **Auth**: Basic Authentication via `Authorization: Basic {base64_encoded_key}`
- **Rate limit**: 1000 requests/minute (sliding window)
- **Pagination**: Cursor-based, `limit` (max 100) + `from` (cursor string), `next` returns null at end
- **Sorting**: `sortBy` parameter accepts `createdAt` or `updatedAt`
- **HTML fields**: Supports subset of HTML tags (a, img, p, div, br, ul, ol, li, b, u, i, strong, em, code)
- **Error codes**: 400 (bad request), 401 (unauthorized), 429 (rate limited)
- **Subdomain**: Found in your login URL: `https://yoursubdomain.vitally.io`

### Vitally AI Setup
- AI features are built into the platform (not a separate add-on based on available info)
- Call recording requires calendar integration (Google Calendar)
- Transcripts include speaker identification with timestamped sentences
- Summaries and key points are auto-generated and editable
- Risk assessment is auto-populated on meetings
