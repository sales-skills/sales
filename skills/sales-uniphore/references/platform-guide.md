# Uniphore Platform Reference

## Platform overview

Uniphore is an enterprise AI platform ("The Business AI Company") that unifies conversation intelligence, real-time agent assist, automated QA, virtual agents, and a CDP (ActionIQ) under a single "Business AI Cloud" architecture. Founded 2008 in Chennai, India; HQ in Palo Alto. Backed by NVIDIA, AMD, Snowflake, Databricks. Target audience: large contact centers (500+ agents), enterprise marketing teams, and revenue operations. Named a Leader in the 2026 Gartner Magic Quadrant for Customer Data Platforms.

## Key modules

### Customer Service AI

- **Real-time Guidance Agent (U-Assist)** — live agent coaching during calls. Surfaces recommended responses, compliance prompts, knowledge articles, and next-best-action suggestions based on conversation context. Reduces handle time and improves first-call resolution.
- **Communication Recording Agent** — captures and stores 100% of customer interactions (voice, chat, email) for compliance and analytics. Integrates with existing recording infrastructure.
- **Conversation Insights Agent (U-Analyze)** — post-call analytics with NLP-powered topic detection, sentiment analysis, and trending issue identification. Populates TethrRX dashboards with churn risk, agent performance, and customer effort scores.
- **Self-Service Agent (IVA)** — intelligent virtual agent for customer self-service. Handles routine inquiries, routes complex cases to live agents with full context transfer.
- **CSATai** — predicts customer satisfaction scores for every conversation without surveys. Uses conversation signals to generate CSAT predictions, eliminating reliance on low-response-rate post-call surveys (typical response rates: 5-15%).
- **Emotion AI** — multimodal sentiment detection combining voice tone analysis with text sentiment. Detects frustration, satisfaction, confusion in real time. Most accurate on voice; text-only channels have lower accuracy.

### Marketing AI (ActionIQ CDP)

- **CDP Agent** — customer data platform for audience segmentation, campaign orchestration, and marketing analytics. Acquired ActionIQ in 2025. SQL-based segment building (no drag-and-drop).
- **Audience Agent** (coming soon) — AI-powered audience discovery and lookalike modeling.
- **Marketing Insights Agent** (coming soon) — cross-channel marketing performance analytics.
- **CDP Search Agent** (coming soon) — natural language queries against CDP data.

### Sales AI

- **Sales Interaction Agent** — conversation intelligence for sales calls. Transcription, key moment detection, deal risk signals, and coaching insights for sales teams.

### People AI

- **Recruiting Agent** — applies conversation AI to recruiting interviews and candidate screening.

### Business AI Cloud architecture

Four-layer sovereign architecture:
1. **Data Layer** — ingests and normalizes data from CCaaS, CRM, CDP, and other enterprise systems
2. **Knowledge Layer** — organizes enterprise knowledge (FAQs, policies, product info) for AI consumption
3. **Model Layer** — manages AI model deployment (proprietary + third-party models)
4. **Agentic Layer** — autonomous agents that act on insights (real-time guidance, automated QA, campaign triggers)

**Zero Data AI** — privacy-preserving approach where sensitive customer data stays within the customer's environment. Supports on-prem, cloud, and multi-cloud deployment.

## Pricing and limits

**Pricing model:** Custom enterprise — no self-serve or published pricing.

**Estimated costs (from industry sources):**
- Base: ~$35/agent/month
- Integration fee: ~$1,500 per integration
- Platform fee: varies by deployment size and modules
- Total typical range: $50-200/agent/month depending on modules selected

**Free trial:** Available for conversation intelligence — upload up to 1,000 calls for analysis.

**Plan-gated features:**
- Real-time agent assist (U-Assist) — likely requires premium tier
- Emotion AI — add-on module
- ActionIQ CDP — separate product/pricing from contact center modules
- Zero Data AI / on-prem deployment — enterprise tier only

## Integrations

### CCaaS / telephony
- Cisco, Avaya, Genesys Cloud CX, Amazon Connect, Five9, Twilio, tcn
- Works as an overlay on top of existing CCaaS — not a replacement

### CRM
- Salesforce (AppExchange listing), Zendesk, Oracle
- ActionIQ CDP integrates with marketing platforms (details limited)

### Data / cloud
- NVIDIA, AMD, Snowflake, Databricks partnerships
- AWS Marketplace listing for ActionIQ CDP

### Integration approach
- Designed as a composable layer that overlays existing infrastructure
- Not locked to a single CCaaS or CRM vendor
- Typical integration timeline: 4-8 weeks for enterprise deployment

## Data model (limited — no public API docs)

No public API documentation available. The X-Platform provides extensible API capabilities for enterprise customers, accessible through the X-Console developer environment.

Key data objects (inferred from product capabilities):
- **Interactions** — individual customer conversations (voice, chat, email) with transcription, sentiment scores, topics
- **Agents** — contact center agents with performance scores, coaching history, QA results
- **CSAT predictions** — CSATai scores per interaction (replacing survey-based CSAT)
- **Emotion signals** — real-time and post-call sentiment/emotion data points
- **Audiences** (ActionIQ) — marketing segments defined via SQL queries
- **Campaigns** (ActionIQ) — marketing campaign definitions with audience targeting

## Workflow setup

### Setting up conversation analytics (U-Analyze)

1. Connect Uniphore to your CCaaS platform (Genesys, Cisco, Avaya, etc.)
2. Configure call recording ingestion — Uniphore processes 100% of interactions
3. Define custom topics and categories relevant to your business
4. Set up TethrRX dashboards — pre-built dashboards for churn risk, agent performance, customer effort
5. Review insights weekly — look for trending topics, high-effort interactions, at-risk customers

### Setting up real-time agent guidance (U-Assist)

1. Identify top 3-5 call types by volume
2. Build guidance rules for each call type — what agents should say, compliance requirements, recommended next actions
3. Connect U-Assist to your CCaaS for live audio/screen pop integration
4. Pilot with 10-20 agents for 2 weeks — measure handle time and quality improvements
5. Expand to full team with adjustments based on pilot feedback

### Setting up CSATai

1. Enable CSATai on your interaction data pipeline
2. Run parallel scoring — continue existing CSAT surveys alongside CSATai predictions for 30 days
3. Compare CSATai predictions against actual survey responses to validate accuracy
4. Adjust thresholds if needed — CSATai may need calibration for your specific customer base
5. Gradually reduce survey frequency as confidence in CSATai predictions grows

## Deep dives

### Uniphore vs competitors

| Capability | Uniphore | NICE CXone | Verint | Observe.AI | Cresta |
|---|---|---|---|---|---|
| Real-time agent assist | U-Assist | AI Copilot | Coaching Bot | Agent Copilot | Agent Assist |
| 100% automated QA | Yes | Quality Management | Quality Bot | Auto QA | Automated QA |
| Predictive CSAT | CSATai | Interaction Analytics | Speech Analytics | — | — |
| Emotion AI | Yes (multimodal) | Sentiment analysis | Speech Analytics | Sentiment | — |
| CDP | ActionIQ (built-in) | — | — | — | — |
| Virtual agents / IVA | Self-Service Agent | MAX IVA | IVA | VoiceAI | Virtual Agent |
| Deployment | Cloud + on-prem + multi-cloud | Cloud | Cloud + on-prem | Cloud | Cloud |
| Pricing | ~$35+/agent custom | $71-$209/agent | Custom enterprise | ~$100-500/user | $60K-$150K/yr |

**Key differentiators:**
- Only platform combining conversation intelligence + CDP in a single architecture
- Zero Data AI enables on-prem/sovereign deployment (critical for regulated industries)
- Emotion AI is multimodal (voice tone + text), not just keyword-based sentiment
- CSATai eliminates dependency on low-response CSAT surveys

### ActionIQ CDP specifics

- Acquired by Uniphore to add marketing AI capabilities
- SQL-based audience segmentation — requires analyst resources, no visual builder
- G2 reviews praise data organization but flag SQL complexity and platform stability
- AWS Marketplace listing available
- Integrates with marketing execution platforms for campaign delivery

### Recognition and market position

- 2026 Gartner Magic Quadrant Leader: Customer Data Platforms
- Forrester Wave recognition for CDPs
- 2025 Inc. Best in Business for AI Implementation
- Deloitte Technology Fast 500 (#131, third consecutive year)
- Funded: $610M+ total raised

### Partner program (Uniphore Unite)

- Types: referral, resell, managed services, co-selling, services
- Tiers: Unite (entry) → Pro → Pro+ (strategic)
- Benefits: Partner Helpdesk, Marketing Development Funds (MDF), Partner Advisory Council
- Apply at: uniphore.com/become-a-partner
