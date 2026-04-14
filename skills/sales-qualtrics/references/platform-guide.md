# Qualtrics XM Platform Reference

## Platform overview

Qualtrics XM is an enterprise experience management platform used by thousands of organizations to capture, analyze, and act on customer, employee, and market feedback. Acquired by SAP in 2019 (and taken private again by Silver Lake/CPP Investments in 2023), Qualtrics positions itself as the all-in-one XM platform bridging surveys, analytics, and AI-powered action. Key differentiator vs competitors: survey methodology depth (conjoint, MaxDiff, advanced logic) and breadth across CX, EX, and research in a single platform.

## Key modules

### Customer Experience (CX)

- **Surveys**: NPS, CSAT, CES, and custom surveys with 23+ question types
- **Dashboards**: Role-based dashboards with widgets, filters, crosstabs
- **Closed-loop follow-up**: Automated ticket creation and routing for detractor responses
- **Text iQ**: AI-powered text analytics for open-ended responses — sentiment, topics, trends
- **Digital feedback**: Website/app intercepts via Site Intercept module
- **Action planning**: Track improvement initiatives linked to feedback themes

### Employee Experience (EX)

- **Engagement surveys**: Annual, pulse, and lifecycle surveys (onboarding, exit)
- **360-degree feedback**: Multi-rater assessments for leadership development
- **Employee lifecycle**: Automated surveys triggered by HR events (hire, promotion, exit)
- **Manager dashboards**: Cascaded results by org hierarchy
- **Action planning**: Manager-level action plans with tracking

### Strategy & Research

- **Survey design**: Advanced question types, skip logic, display logic, randomization, quotas
- **Conjoint analysis**: Choice-based conjoint for product/pricing research
- **MaxDiff**: Best-worst scaling for preference ranking
- **Concept testing**: Side-by-side concept evaluation
- **Synthetic audiences**: AI-powered research-grade LLMs for hypothesis validation (new in 2025-2026)
- **Video feedback**: Open-ended video responses with AI transcription

### Experience Agents (AI)

- **Automated response**: AI agents that respond to feedback in real-time
- **Smart routing**: Route complex cases to the right team based on feedback content
- **Connected intelligence**: Unify signals across survey, call, digital, and social channels

### XM Directory

- **Contact management**: Centralized contact database across all XM programs
- **Distribution**: Email, SMS, and anonymous link distribution
- **Contact frequency rules**: Throttle survey invitations per contact (configurable cooldown period)
- **Segments**: Dynamic and static contact segments for targeted distribution
- **Automations**: Trigger surveys based on events (e.g., CRM triggers, webhook events)

## Pricing and limits

> *Best-effort from research — verify with Qualtrics sales for current pricing.*

| Tier | Price | Includes |
|---|---|---|
| **Free Account** | $0 | 1 active survey, 100 responses per survey, limited question types |
| **Strategic Research** | $420/mo (billed annually) | Advanced survey features, analysis, unlimited questions |
| **CX Suite** | Custom (sales call required) | CX dashboards, closed-loop, Text iQ, digital feedback |
| **EX Suite** | Custom (sales call required) | Engagement, lifecycle, 360, manager dashboards |
| **Full XM Platform** | Custom (sales call required) | All modules, Experience Agents, advanced analytics |

**Enterprise pricing factors**:
- Base platform fee + per-seat licensing
- Response volume tiers
- Module add-ons (DXA, Contact Center, Research Core)
- Professional services for implementation
- Annual increases: SMB ~9%, Enterprise ~30% year-over-year (industry reports)

**Small deployments** (10-25 users, single product): Low five figures annually
**Enterprise** (100+ users, multiple products): Six to seven figures annually
**Average enterprise deal**: ~$323K/year (reported by SpendHound)

## Integrations

### Native integrations
- **Salesforce**: Bi-directional — surveys triggered from Salesforce events, responses mapped back to accounts/contacts/cases. Up to 5 Salesforce instances per Qualtrics account.
- **SAP**: Native connector (former parent company integration)
- **ServiceNow**: Case creation from feedback, bi-directional field mapping
- **Workday**: Employee data sync for EX programs
- **HubSpot**: Survey triggers and response mapping
- **Slack**: Alert notifications for feedback events
- **Microsoft Teams**: Alert notifications
- **Tableau**: Data export connector for advanced visualization
- **Marketo**: Lead enrichment with survey data

### Automation platforms
- **Zapier**: 15+ triggers (new response, survey completed, etc.) and actions
- **Make (Integromat)**: HTTP module with Qualtrics API
- **Workato**: Enterprise automation recipes

### API & developer tools
- **REST API v3**: Full survey, distribution, response, and directory management
- **MCP servers**: Model Context Protocol for AI application integration (new)
- **Webhooks**: Event subscriptions for response completion, survey status changes
- **Extension SDK**: Build custom apps in the Developer Portal

## Data model (API context)

### Key objects
- **Survey** (`SV_xxxxx`) — the survey instrument
- **Response** — individual survey submission
- **Distribution** (`EMD_xxxxx`) — email distribution record
- **Contact** — XM Directory contact record
- **Mailing List** (`ML_xxxxx`) — contact group for distribution
- **Directory** (`POOL_xxxxx`) — XM Directory container

### Key IDs
- **Organization ID** — your Qualtrics instance
- **Datacenter ID** — determines base URL (e.g., `iad1`, `sjc1`, `ca1`, `eu`, `gov1`)
- **API Token** — per-user, single-generation (regenerating invalidates previous)
- **Client ID / Client Secret** — for OAuth flows

### Common query patterns
- Export responses: 3-step async (create export → poll progress → download file)
- Create distribution: POST with survey ID + mailing list ID
- Manage contacts: CRUD operations on XM Directory entries
- Webhooks: Subscribe to `surveyengine.completedResponse` events

## Workflow setup

### Setting up a CX NPS program

1. **Create survey**: New Project → Customer Experience → Blank Survey. Add NPS question (0-10 scale), open-end follow-up, optional driver question.
2. **Configure logic**: Add display logic to show follow-up questions based on NPS score (detractor: 0-6, passive: 7-8, promoter: 9-10).
3. **Set up XM Directory**: Import contacts from CRM. Create a mailing list for NPS recipients.
4. **Configure distribution**: Set up email distribution with embedded NPS rating in email body. Configure contact frequency rules (minimum 90-day gap).
5. **Build dashboard**: Create CX dashboard with NPS trend widget, response rate widget, and text iQ topic analysis.
6. **Set up closed-loop**: Create workflow triggered on detractor response — alert account owner, create follow-up ticket.
7. **Activate**: Set survey to active, schedule recurring distribution.

### Connecting Qualtrics to Salesforce

1. **Install extension**: Admin → Extensions → Salesforce. Authenticate with Salesforce admin credentials.
2. **Configure survey trigger**: In Salesforce, create a workflow rule that triggers Qualtrics distribution (e.g., after case closure).
3. **Map response data**: In Qualtrics, map survey response fields back to Salesforce objects (Account, Contact, Case, or custom objects).
4. **Set up Web-to-Lead**: Use Qualtrics Web Service to create leads in Salesforce from survey responses.
5. **Test bi-directionally**: Submit a test response and verify data flows both ways.

### Setting up API access

1. **Generate API token**: Click user icon (top-right) → Account Settings → Qualtrics IDs → Generate Token. **Critical**: Token can only be generated once — regenerating invalidates the previous token and breaks existing integrations.
2. **Find datacenter ID**: Same page shows your datacenter ID (e.g., `iad1`). Base URL is `https://{datacenterid}.qualtrics.com/API/v3/`.
3. **For OAuth**: Account Settings → Qualtrics IDs → OAuth Client Manager → Create Client → Choose "Client Credentials" grant type. **Critical**: Client Secret is shown only once — copy it immediately.
4. **Test**: Make a GET request to `/API/v3/whoami` with `X-API-TOKEN: {your-token}` header to verify.

## Deep dives

### Survey methodology features

Qualtrics's research heritage shows in its survey methodology depth:
- **23+ question types** including Matrix, Rank Order, Constant Sum, Hot Spot, Heat Map, Graphic Slider
- **Advanced logic**: Skip logic, display logic, branch logic, loop & merge, randomization (question, block, answer choice)
- **Quotas**: Response count limits by segment with cross-quota coordination
- **Piped text**: Dynamic content from previous answers, embedded data, panel fields
- **Survey flow**: Visual flow builder with authenticators, web services, embedded data, end of survey elements
- **A/B testing**: Random assignment to survey versions using Survey Flow randomizer

### Text iQ analytics

AI-powered text analytics engine:
- **Sentiment analysis**: Positive, negative, neutral, mixed classification
- **Topic detection**: Automatic topic extraction from open-ended responses
- **Theme hierarchy**: Parent-child topic organization
- **Trend analysis**: Topic frequency changes over time
- **Integration**: Results feed into dashboards, alerts, and action planning

### Contact frequency and survey fatigue management

- XM Directory allows contact frequency rules at the directory level
- Set minimum days between survey invitations per contact
- Rules apply across all distributions in the directory (not per-survey)
- **Limitation**: Rules don't span multiple Qualtrics organizations — multi-org setups need manual coordination
- Best practice: 90-day minimum gap for relationship surveys, 30-day for transactional
