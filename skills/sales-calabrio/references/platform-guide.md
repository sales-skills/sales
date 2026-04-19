# Calabrio ONE Platform Reference

## Platform overview

Calabrio ONE is an AI-powered workforce engagement management (WEM) suite for contact centers, unifying workforce management (WFM), quality management (QM), interaction analytics, bot analytics, call recording, and performance management in a single cloud-native platform. Targets mid-market to enterprise contact centers (50-10,000+ agents) across industries including finance, insurance, healthcare, retail, and utilities. Competes primarily with NICE CXone WFM, Verint, and Aspect Workforce (Alvaria). Calabrio is a standalone WEM vendor — it layers on top of CCaaS platforms (Amazon Connect, Genesys, NICE, Five9, Cisco, Avaya) rather than being a CCaaS itself.

## Key modules

### Workforce Management (WFM)
- **AI Forecasting**: Predict contact volumes across voice, email, chat, and social channels. Algorithms consider historical patterns, trends, special days, and events.
- **Automated Scheduling**: Generate optimized agent schedules based on forecasts, skill requirements, labor rules, and agent preferences. Supports multi-skill, multi-site scheduling.
- **Real-Time Adherence (RTA)**: Monitor agent schedule compliance in real-time. Alerts for out-of-adherence events. Historical adherence reporting.
- **Agent Self-Scheduling**: Agents can swap shifts, bid on schedules, and request time off through a self-service portal. Reduces WFM admin burden.
- **Intraday Management**: Adjust schedules in real-time based on actual volume vs forecast.

### Quality Management (QM)
- **Evaluation Forms**: Customizable scorecards for evaluating agent interactions. Weighted criteria. Auto and manual evaluation modes.
- **Screen Recording**: Capture agent desktop activity alongside voice recordings for full context.
- **Coaching Workflows**: Link evaluation results to coaching sessions. Track coaching completion and improvement over time.
- **Calibration**: Ensure evaluators score consistently across the team.

### Interaction Analytics
- **Speech Analytics**: Transcribe and analyze 100% of voice interactions. Detect sentiment, trending topics, and compliance violations.
- **Text Analytics**: Analyze chat, email, and social interactions alongside voice.
- **Sentiment Analysis**: Score customer sentiment (positive/negative/neutral) across interactions.
- **Automated Categorization**: Auto-categorize interactions by topic, issue type, or customer intent.
- **Trending Topics**: Surface emerging issues and topics across interactions.

### Bot Analytics
- **Unified View**: Analyze chatbot, voicebot, and live agent conversations in a single platform.
- **Bot-to-Agent Handoff Analysis**: Identify where bots fail and escalate to agents. Pinpoint gaps in bot training.
- **Performance Metrics**: Track bot containment rate, resolution rate, and customer satisfaction.

### Call Recording
- **Omnichannel Capture**: Record voice, screen, chat, email interactions.
- **Encryption and Compliance**: PCI DSS, HIPAA-compatible recording with pause/resume for sensitive data.
- **Storage Management**: Cloud or on-prem storage with configurable retention policies.

### Performance Management
- **Agent Dashboards**: Individual performance metrics visible to agents.
- **Gamification**: Leaderboards, badges, and goals to motivate agent performance.
- **Coaching Impact Tracking**: Measure the effect of coaching on KPIs over time.

### Agent Assist
- **Real-Time Guidance**: AI-powered suggestions and next-best-action prompts during live interactions.

### GovSuite
- **FedRAMP Authorized**: Government-grade security for federal contact centers.

## Pricing and limits

Calabrio uses custom pricing (not publicly listed). Based on review site aggregation:

| Tier | Approximate price | Typical features |
|---|---|---|
| Standard | ~$50-75/agent/mo | Core WFM (forecasting, scheduling, adherence), call recording |
| Advanced | ~$75-120/agent/mo | + Quality management, performance management, speech analytics |
| Enterprise | Custom ($120+/agent/mo) | + Bot analytics, advanced AI, GovSuite, dedicated support |

**Implementation costs**: $10,000-$50,000 depending on complexity (setup, training, data migration, integrations).

**Contract terms**: Typically annual. Multi-year discounts available.

**Rate limits (API)**: 500 calls/min, 10,000 calls/hr per user token. Historical Data APIs exempt from rate limits.

## Integrations

### CCaaS / ACD platforms
- **Amazon Connect** — native cloud integration, WFM + QM + analytics on top of Connect
- **Genesys Cloud CX** — certified integration for Genesys Engage and Cloud CX
- **NICE CXone** — compatible (Calabrio as WEM layer)
- **Five9** — certified integration
- **Cisco (UCCE/UCCX)** — on-prem and cloud
- **Avaya** — Aura, Elite, IX Workplace
- **Mitel** — MiContact Center
- **Twilio Flex** — cloud integration

### CRM
- **Salesforce Service Cloud** — AppExchange connector for QM (quality data in Salesforce context)
- **Microsoft Dynamics 365** — native connector

### HR / Payroll
- API-based HR integrations for syncing person data, absence management, schedules

### Developer ecosystem
- **Developer Partner Program** — build integrations for the Calabrio Marketplace
- **Calabrio Marketplace** — third-party integrations and add-ons

## API reference

### WFM API
- **Base URL**: `https://[customerURL].com/api/docs/index.html` (Swagger/OpenAPI)
- **Auth**: Personal access tokens (generated in User Settings)
- **Rate limits**: 500 calls/min, 10,000 calls/hr per user token
- **Required permissions**: Read/Write for forecast, organization, request, schedule (role-based)
- **Key resources**: Forecast, Organization, Request (time-off), Schedule
- **Service account recommended**: Create a dedicated API user — tokens break if the creating user is deleted or has a past leaving date

### Historical Data API
- **Base URL**: `https://[customerURL].com/historical-data/api/v1`
- **Docs URL**: `https://[customerURL].com/historical-data/docs/index.html`
- **Auth**: Tenant key (provided by Calabrio contact — different from personal access tokens)
- **Rate limits**: Exempt from standard rate limits
- **Data source key**: Additional key required, provided by Calabrio

### HR Integration API
- **Operations**: Query (All Absences, Schedule Absence by PersonIDs, All Business Units) and Command (Add/Update Person Account, Add/Remove Full Day and Intraday Absences)
- **Docs**: Available at tenant-specific Swagger URL

### Postman collection
- Available at: https://www.postman.com/calabriose

## Workflow setup

### Setting up WFM forecasting
1. Import historical data (ACD stats — calls offered, handled, abandoned, AHT by interval)
2. Configure forecast algorithms (select method: best fit, moving average, or weighted)
3. Set up special days (holidays, marketing events, seasonal spikes)
4. Define shrinkage categories (breaks, meetings, training, unplanned absence)
5. Generate forecast — review and adjust manually if needed
6. Link forecast to scheduling

### Setting up QM evaluation forms
1. Define evaluation criteria (greeting, compliance, resolution, soft skills, etc.)
2. Set weighting for each criterion
3. Choose evaluation type: manual, auto (random sample), or targeted (keyword-triggered)
4. Assign evaluators to teams/queues
5. Publish the form — draft forms don't trigger evaluations
6. Set up calibration sessions to ensure evaluator consistency

### Connecting to Amazon Connect
1. Ensure Calabrio ONE cloud subscription is active
2. Configure the Amazon Connect integration in Calabrio admin
3. Map Connect queues to Calabrio business units
4. Enable call recording passthrough (Connect records, Calabrio ingests)
5. Configure real-time data feed for adherence monitoring
6. Test with a sample queue before rolling out
