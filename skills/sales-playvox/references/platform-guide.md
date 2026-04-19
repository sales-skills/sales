# Playvox Platform Reference

## Platform overview

Playvox (now part of NICE) is a modular workforce engagement management (WEM) suite for mid-market contact centers and BPOs. It combines Quality Management, Workforce Management, Performance Management, Coaching/eLearning, and Agent Motivation (gamification) in a single platform. Unlike full CCaaS platforms (NICE CXone, Genesys, Talkdesk), Playvox focuses exclusively on the agent engagement and QA layer — it doesn't handle routing, IVR, or telephony. It integrates with existing CRM and CCaaS platforms to pull interaction data for evaluation.

**Target audience**: Mid-market contact centers (50-500 agents), BPOs, customer support teams already using Zendesk, Salesforce Service Cloud, or similar helpdesk/CRM platforms.

**Key differentiator**: Gamification and agent motivation features (badges, leaderboards, rewards) are unique in the WEM space — most competitors (Calabrio, Verint, MaestroQA) focus on QA and WFM without built-in motivation tools. The eLearning module is also uncommon in standalone WEM.

## Key modules

### Quality Management (QM)
- **Scorecard-based evaluations**: Create custom scorecards with weighted criteria, sections, and auto-fail items
- **Sampling**: Configure random, targeted, or round-robin sampling of interactions for evaluation
- **Calibration**: Run calibration sessions where multiple evaluators score the same interaction independently to ensure consistency
- **Coaching triggers**: Automatically assign coaching based on low evaluation scores
- **Dispute workflow**: Agents can dispute evaluations, tracked with audit trail
- **Limitation**: Evaluates a sample (2-5%) of interactions, not 100%. For 100% automated QA, pair with or consider Observe.AI, Convin, or Balto

### Workforce Management (WFM)
- **Forecasting**: AI-based volume forecasting across voice and digital channels
- **Scheduling**: Agent scheduling with shift patterns, breaks, and skill-based assignment
- **Adherence monitoring**: Real-time and historical schedule adherence tracking
- **Intraday management**: Adjust schedules based on actual vs forecasted volume
- **Key terminology**: "Schedule adherence" = agent following assigned schedule, "Conformance" = productive time, "Shrinkage" = non-productive time (breaks, training, meetings)

### Performance Management
- **KPI dashboards**: Agent and team performance dashboards with targets
- **Goal setting**: Define performance goals with thresholds and tracking
- **Scorecards**: Aggregate QA scores, productivity metrics, and CSAT into unified agent scorecards
- **Reporting**: Pre-built and custom reports (note: adherence reports are known to be confusing — request CSM walkthrough)

### Coaching & eLearning
- **Learning modules**: Create and assign training content (text, video, quizzes)
- **Coaching sessions**: Structured coaching with linked QA evaluations and specific low-scoring segments
- **Certification paths**: Build skill-based certification tracks for agents
- **Automation**: Auto-assign training based on QA scores or skill gaps

### Agent Motivation (Gamification)
- **Leaderboards**: Real-time rankings based on KPIs
- **Badges and rewards**: Earn badges for achievements, redeemable rewards
- **Karma points**: Points system for positive behaviors
- **Challenges**: Team and individual competitions with configurable rules
- **Community wall**: Social feed for recognition and achievements

### Customer AI (VoC)
- **Sentiment analysis**: Analyze customer sentiment from interactions
- **Topic detection**: Identify trending topics and issues
- **VoC insights**: Surface customer feedback patterns
- **Note**: This is a newer module — initial setup may require Playvox support assistance

## Pricing and limits

**Pricing model**: Per-agent, per-month, per-module. Modules can be purchased individually or bundled.

| Module | Estimated range |
|---|---|
| Quality Management | $30-50/agent/mo |
| Workforce Management | $30-50/agent/mo |
| Performance Management | $20-30/agent/mo |
| Coaching & eLearning | $15-25/agent/mo |
| Agent Motivation | $10-20/agent/mo |
| Customer AI | Quote-based |
| Full bundle | $60-90/agent/mo |

*Prices are estimates — actual pricing depends on negotiation, volume, and contract length. Multi-module bundles and annual/multi-year commitments unlock 15-30% discounts.*

**No free tier or trial** publicly listed (request demo for evaluation access).

## Integrations

### Native integrations
- **Helpdesk/CRM**: Zendesk, Salesforce, Intercom, ServiceNow, Freshdesk, Kustomer, Gladly, LiveChat
- **CCaaS**: Five9, Genesys, CloudTalk, Dialpad
- **HR/payroll**: ADP, Workday
- **Communication**: Slack
- **Note**: Requires a separate Playvox instance per Zendesk instance

### API
- **Authentication**: OAuth2 client credentials flow
- **Developer portal**: developers.playvox.com (JS-rendered — may not load in all browsers)
- **Help center API docs**: help.playvox.com/hc/en-us/sections/11105849447443-API-Documentation
- **Capabilities**: Custom integrations API (create/manage integrations), Bulk API (import up to 100 interactions per request), Reporting API (export evaluation and performance data)
- **WFM API**: Separate API at help-wfm.playvox.com — scheduling, forecasting, adherence data
- **OpenAPI/Swagger**: Specs available via developer portal
- **Python wrapper**: `python-playvox` on PyPI (community-maintained)
- **Rate limits**: Not publicly documented — check developer portal

### Open API for custom integrations
Playvox provides open APIs for clients and partners seeking custom integrations beyond native connectors. The Custom Integrations API allows creating integrations that push interaction data from any source into Playvox for evaluation.

## Workflow setup

### Setting up QA evaluations (most common workflow)
1. **Connect data source** — Link Playvox to your helpdesk (Zendesk, Salesforce, etc.) via native integration
2. **Create scorecards** — Define evaluation criteria with sections, weights, and auto-fail items
3. **Configure sampling** — Set up random or targeted sampling rules (which agents, which interaction types, how many per week)
4. **Assign evaluators** — Define who evaluates whom (team leads, QA analysts, peer review)
5. **Run calibration** — Have multiple evaluators score the same 5-10 interactions independently, then compare and align
6. **Set coaching triggers** — Configure automatic coaching assignment when scores fall below threshold
7. **Launch** — Begin evaluations, review initial results after 2 weeks, adjust scorecard criteria as needed

### Setting up WFM
1. **Import historical data** — Load at least 3-6 months of interaction volume data
2. **Define shifts and schedules** — Configure available shift patterns, break rules, and scheduling constraints
3. **Set up forecasting** — Choose forecasting method and configure channels to forecast
4. **Generate schedules** — Run the scheduling optimizer, review agent assignments
5. **Configure adherence monitoring** — Set adherence thresholds and alert rules
6. **Go live** — Begin real-time monitoring, adjust forecasts weekly based on actual vs predicted

### Setting up gamification
1. **Choose KPIs** — Select metrics for leaderboards (QA scores, CSAT, AHT, schedule adherence)
2. **Configure badges** — Create badges for achievements (first perfect score, 10 consecutive on-time logins, etc.)
3. **Set up rewards** — Define redeemable rewards (gift cards, extra break time, team lunch, PTO)
4. **Launch challenges** — Create team or individual competitions with time limits
5. **Monitor engagement** — Track participation rates and adjust difficulty/rewards based on engagement

## Deep dives

### NICE acquisition context
- Playvox was acquired by NICE (the company behind NICE CXone)
- NICE CXone already has built-in QM, WFM, and analytics — creating feature overlap with Playvox
- Risks for existing customers: feature deprecation, forced migration to CXone, pricing increases
- What may persist: gamification/agent motivation (CXone doesn't have this), eLearning (CXone's is weaker), and the standalone WEM positioning for non-NICE CCaaS customers
- Recommendation: If renewing a Playvox contract, negotiate migration protection clauses and multi-year pricing locks

### Playvox vs alternatives

| Feature | Playvox | MaestroQA | Observe.AI | Calabrio ONE |
|---|---|---|---|---|
| QA evaluation | Scorecard-based, 2-5% sample | Scorecard-based, AI-enhanced | 100% automated QA | Scorecard-based + AI |
| WFM | Yes (full module) | No | No | Yes (full module) |
| Gamification | Yes (unique differentiator) | No | No | No |
| eLearning/LMS | Yes (built-in) | No | No | No |
| Real-time coaching | No | No | Agent Copilot | No |
| Pricing | $30-90/agent/mo modular | ~$19/user/mo starting | ~$100-500/user/mo | ~$50-120/agent/mo |
| Best for | Mid-market, agent engagement | QA workflow purists | Enterprise 100% QA | Standalone WEM layer |
