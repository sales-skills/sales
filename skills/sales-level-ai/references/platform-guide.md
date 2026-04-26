# Level AI Platform Reference

## Platform overview

Level AI is a contact center intelligence platform powered by proprietary AI called **Naviant** that uses semantic intelligence (intent-based analysis, not keyword matching) to analyze customer interactions across voice, chat, and email. Combines automated QA, real-time agent assist, VoC analytics, and AI virtual agents. Targets mid-market to enterprise contact centers (100-1,000+ agents) in healthcare, financial services, insurance, and retail. 2023 Gartner Cool Vendor designation. Key differentiator: semantic intelligence approach understands intent and meaning rather than surface-level keyword detection.

## Key modules

### InstaScore (Auto QA)
- 100% automated quality assurance — scores every interaction against custom scorecards
- Automatic scoring with near-human accuracy using QA-GPT model
- Custom scorecards with configurable criteria and weights
- Compliance checking (PCI, HIPAA, script adherence)
- Soft skills evaluation
- Replaces manual sampling (typically 1-3% of calls) with complete coverage
- Claims: 90% CSAT improvement, 45% reduction in cost per contact

### Real-Time Agent Assist (AgentGPT)
- Live in-conversation guidance using knowledge base
- Next-best-action suggestions during calls
- Auto-populates information from organization's knowledge base based on current discussion topic
- Proactive search query suggestions from support documentation
- Reduces handle times and improves first-contact resolution
- Claims: 25% reduction in agent ramp-up time

### Voice of Customer (VoC)
- Semantic intelligence analyzing customer intent and emotion across all channels
- **iCSAT** (inferred customer satisfaction) — predictive satisfaction scoring without surveys
- Sentiment analysis with tone and emotion detection
- Trend identification and emerging issue detection
- Product development and CX improvement insights

### Agent Screen Recording & Coaching
- Context-rich agent desktop capture during interactions
- Targeted coaching workflows based on QA findings
- Performance improvement tracking over time

### AI Virtual Agent
- Automated voice and chat handling for scripted tasks
- Intelligent routing and escalation paths for complex issues
- Handles common queries without human intervention

### Analytics
- Customizable dashboards with drill-down capabilities
- Conversation tagging with semantic classification
- Omnichannel analysis (voice, chat, email)
- Effective filtering and segmentation

## Pricing and limits

No public pricing — custom enterprise quotes only.

**Estimated range**: ~$185/agent/month (per comparison articles)

Pricing model: custom-quoted based on agent count, modules selected, and contract length. Annual contracts expected. No free plan or free trial mentioned publicly.

Published performance claims (verify during evaluation):
- 45% reduction in cost per contact
- 90% CSAT improvement
- 25% faster agent ramp time
- 100% interaction coverage

## Integrations

### CCaaS / Telephony
Zendesk, Five9, Freshworks, Kustomer, Vonage, Twilio, Amazon Connect, UJET, Talkdesk, Genesys, LivePerson, LiveChat, Dialpad

### CRM
Salesforce (AppExchange listing: "Level AI QA Assist")

### Methods
REST API, SFTP (inferred from enterprise patterns)

## Compliance and security

- SOC 2 Type II
- PCI compliant
- ISO 27001
- GDPR compliant
- HIPAA compliant

## API

**Status**: API exists but is not publicly documented. Enterprise customers receive access.

- **Architecture**: GraphQL-based (per Level AI engineering blog)
- **Auth**: Enterprise-gated — details provided during onboarding
- **Public docs**: None found — JS-rendered website, no Postman collection, no OpenAPI spec
- **Capability**: "Push large amounts of data to and from the platform" — designed for combining contact center data with analytics and BI tools

### API caveats
- No public documentation or self-serve API exploration available
- GraphQL architecture suggests flexible querying but requires schema knowledge from account team
- Request the API spec and auth credentials during contract negotiation — don't assume you'll get API access on all tiers
- Call ingestion delays (up to 24 hours per G2 reviews) affect API data availability

## Workflow setup

### Initial deployment

1. **CCaaS integration** — Connect your telephony platform. Level AI supports 12+ CCaaS platforms natively. Verify your platform is supported before signing.
2. **Audio pipeline validation** — Verify call recordings flow correctly. Check for ingestion delays — Level AI has reported 24+ hour lag in some deployments.
3. **InstaScore scorecard design** — Start with 5-8 evaluation criteria. Use binary criteria where possible ("Did agent verify identity?" vs "Was the opening professional?").
4. **Calibration** — Human QA team scores 30+ calls alongside InstaScore. Compare scores. Adjust criteria until alignment is acceptable. Expect 2-4 weeks of iterative tuning.
5. **VoC analytics setup** — Configure iCSAT, sentiment tracking, and trend dashboards once QA scoring is stable.
6. **AgentGPT rollout** — Enable real-time agent assist after post-call QA is calibrated. Requires knowledge base configuration.
7. **AI Virtual Agent (optional)** — Deploy automated voice/chat handlers for high-volume, scripted interactions.

### QA scorecard best practices

- **Binary criteria work best** — "Did the agent read the required disclosure?" scores more consistently than "Was the agent empathetic?"
- **Start simple** — 5-8 criteria. Add complexity after calibrating on 30+ scored calls.
- **Separate compliance from quality** — Compliance criteria = binary pass/fail. Quality criteria = scaled scoring. Weight compliance violations more heavily.
- **Account for language barriers** — Users report scoring issues when agents and customers speak with heavy accents or use non-standard phrasing. Test InstaScore accuracy across your agent population's language diversity.
- **Calibrate regularly** — Don't "set and forget." Schedule monthly calibration checks comparing InstaScore to manual reviews.

## Contact center QA landscape

Level AI sits in the "semantic intelligence QA + real-time assist" lane:

| Lane | Leaders | Level AI fit |
|------|---------|--------------|
| Real-time during-call guidance | Balto, Cresta, Abstrakt | AgentGPT competes here — evaluate if real-time is primary need |
| Post-call QA / analytics | Observe.AI, CallMiner, Level AI, Enthu.AI | Core strength — InstaScore 100% auto-scoring |
| Full CCaaS with built-in QA | NICE CXone, Talkdesk, Genesys | QA is one module in a larger platform |
| Semantic/intent-based intelligence | Level AI (Naviant) | Key differentiator — intent vs keyword matching |

### When to pick Level AI

- Mid-market contact center (100-1,000 agents) wanting modern AI QA without enterprise platform complexity
- Need combined real-time assist + post-call QA in one platform
- Value semantic intelligence over keyword-based analytics
- Industries: healthcare, financial services, insurance, retail
- Budget supports ~$185/agent/month

### When to avoid Level AI

- Under 50 agents — try Enthu.AI (~$15-69/user/mo) or MaestroQA (~$19/user/mo)
- Primary need is real-time coaching only — try Balto (faster deployment, sub-200ms response)
- Need 5,000+ agent enterprise scale — evaluate Observe.AI, Cresta, or NICE CXone
- Need transparent pricing or self-serve API — Level AI requires sales conversations for both
- Need same-day call monitoring — ingestion delays are a known concern
