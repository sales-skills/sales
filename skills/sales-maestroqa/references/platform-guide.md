# MaestroQA Platform Reference

## Platform overview

MaestroQA (rebranded to Rippit) is an AI-powered conversation data and quality assurance platform that transforms unstructured customer interactions into actionable business insights. Founded in 2013, headquartered in New York. Targets enterprise support, sales, and CX teams across financial services (Brex, DraftKings), e-commerce (Etsy, Stitch Fix, Bombas), and marketplace platforms (Lyft, Tinder, Angi). G2 rating: 9.5/10 (319+ reviews).

MaestroQA positions itself as a "Conversation Data Platform" — beyond traditional QA, it ingests conversations from all sources, enables democratized analysis, and closes the loop with actionable coaching workflows and reverse-ETL.

## Key modules

### Quality Assurance (QA)
- Customizable scorecards with weighted sections and binary or scaled criteria
- Auto and manual evaluation modes
- Calibration tools for evaluator consistency
- Assignment rules — random sampling, targeted review, or full coverage
- Compliance monitoring and risk detection

### Coaching
- AI-powered coaching workflows triggered by QA scores
- Coaching sessions linked to specific call/ticket segments
- To-do assignment and tracking for agents
- Agent self-review — agents see their own scored interactions
- Performance trend tracking per agent

### Conversation Analytics
- **AskAI** — natural language interface for querying conversation data ("which agents struggle with refund requests?")
- Sentiment analysis across all interactions
- Topic detection and trending issue identification
- Root cause analysis
- Voice of Customer (VoC) extraction

### Reporting & Export
- Visualization dashboards
- Raw data export (CSV/ZIP via API)
- Reverse-ETL — push insights back to operational systems (CRM, Slack, WFM)
- Native data warehouse connectors (Snowflake, BigQuery, Redshift, Databricks, PostgreSQL, S3, SQL Server)

### Chatbot QA
- Grade AI chatbot conversations with the same scorecards used for human agents
- Integrations: Ada, Sierra, Agentforce, Decagon, Forethought
- Bot performance monitoring and optimization

## Pricing and limits

MaestroQA uses a per-agent, per-month pricing model with enterprise sales engagement (no self-serve).

| Tier | What's included | Typical annual cost |
|------|----------------|---------------------|
| Core | Manual scorecards, basic reporting, agent feedback | $6K-18K (5-25 agents) |
| Professional | Advanced analytics, custom scorecards, helpdesk integrations | $18K-60K (25-100 agents) |
| Enterprise | AI features, conversation analytics, data warehouse export | $60K-200K+ (100+ agents) |

- Base starts at ~$19/user/mo
- **AI features (conversation analytics, AskAI) are add-ons** — budget separately
- Implementation/onboarding: $2K-10K+
- No free tier or trial mentioned

**Rate limits (API):**
- 10 requests per second
- 100 requests per minute
- GDPR deletion API: 1 req/s, 30 req/min

## Integrations (60+)

### Helpdesk / Ticketing
Zendesk, Zendesk Chat, Freshdesk, Freshchat, Intercom, Front, Gorgias, Gmail, Gladly, Kustomer, Khoros Care, ServiceNow, Helpshift, LivePerson, Sprinklr, Dynamics 365, HubSpot, Salesforce

### Phone Systems / Call Centers
8x8, Aircall, Amazon Connect, Dialpad, Five9, Freshcaller, Gong, NICE inContact, PureCloud (Genesys), Regal, RingCentral, Talkdesk, TCN, Twilio, Vonage, Zoom

### Chatbots
Ada, Agentforce, Sierra, Decagon, Forethought

### Learning Management
Lessonly (Seismic), Guru

### LLM Providers (BYO AI)
Amazon Bedrock, Google AI, OpenAI

### Data Warehouse / Analytics
Snowflake, BigQuery, Amazon Redshift, Databricks, PostgreSQL, Amazon S3, SQL Server

### CSAT / Surveys
Delighted, GetFeedback, Qualtrics, Simplesat, Stella Connect

### Workforce Management
Assembled, Calabrio, Playvox WFM, Workday

### Other
Salesforce (CRM), Asana, Jira, Jira Data Center, Slack

**Sync behavior**: Tickets updated within the last 45 days sync automatically. Zendesk tickets typically sync within 3 hours.

## Data model (API)

Key objects in the Rippit API:

| Object | Description | Key fields |
|--------|-------------|------------|
| Ticket | Customer interaction (email, chat, call) | ticket_id, agent_id, status, metadata |
| Agent | Support/sales team member | agent_id, email, availability, identifiers |
| Comment | Note attached to a ticket | ticket_id, text, author |
| Attachment | File attached to a ticket | ticket_id, URL (presigned or direct) |
| Coaching Point | Specific coaching insight from a graded interaction | scorecard criteria, score, call segment |
| Coaching Session | Formal coaching meeting between supervisor and agent | session_id, agent, coaching points, to-dos |
| Todo | Action item from coaching | todo_id, assignee, status, due date |
| Assignment | QA grading assignment for an evaluator | assignment_id, evaluator, tickets |
| Metric (ticket) | Performance metric associated with a ticket | metric_name, value, ticket_id |
| Metric (agent) | Agent-level performance metric | metric_name, value, agent_id |

## Workflow setup

### 1. Connect your helpdesk/phone system
Go to Integrations > select your platform > authenticate. Tickets will begin syncing within hours. Only tickets updated in the last 45 days will appear.

### 2. Build QA scorecards
- Start with 5-8 binary (yes/no) criteria per scorecard
- Group into weighted sections: Compliance (30%), Quality (40%), Sales Effectiveness (30%)
- Add "auto-fail" criteria for critical compliance violations
- Run calibration: 3+ evaluators score the same 5 tickets, discuss disagreements

### 3. Set up assignments
- Random sampling: assign X tickets per agent per week for review
- Targeted: filter by low CSAT, escalated, or flagged tickets
- Full coverage: review 100% of interactions (requires AI add-on)

### 4. Connect coaching workflows
- Set threshold triggers (e.g., score < 70% → auto-create coaching session)
- Link specific low-scoring call segments to coaching points
- Assign to-dos with deadlines
- Track coaching session completion and agent score improvement

### 5. Export to data warehouse (optional)
- Native connectors for Snowflake, BigQuery, Redshift, Databricks
- Or use API: `POST /request-raw-export` → poll `GET /export-data/:id`
- Reverse-ETL: push insights to Salesforce, Slack, or other operational tools

## Deep dives

### CSAT correlation workflow
1. Connect CSAT source (Qualtrics, Delighted, Simplesat) or use CSAT Bulk Ingestion API
2. API: `POST /api/v1/create-customer-feedback` — max 100 items per request
3. Required fields: `submitted_at`, `ticket_id`, `agent_id` or `agent_email`, `score`
4. Use AskAI to query: "Do agents with high QA scores have higher CSAT?"
5. If correlation is weak, revise scorecard criteria to focus on outcome quality

### SCIM user provisioning
- Base URL: `https://app.rippit.com/api/v1/scim/v2`
- Supports SCIM 2.0 (RFC 7643/7644)
- CRUD operations on Users, Groups, and Usergroups
- Roles: admin, limitedAdmin, manager, grader, limited_agent, agent
- Deactivate users by setting `active: false` (no hard delete)
- Endpoint URLs are case-sensitive (`/Users` not `/users`)

### GDPR data deletion
- `DELETE /api/v1/data-deletion-request` — up to 5 emails per request
- Returns job ID for async tracking
- `GET /api/v1/data-deletion-check/:id` — poll for `completed` status
- Two-stage: immediate operational DB removal + async batch purge
- Rate limit: 1 req/s, 30 req/min
