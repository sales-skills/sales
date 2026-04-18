# Cresta Platform Reference

## Platform overview

Cresta is an enterprise-grade generative AI platform for contact centers, combining human and AI agents at scale. Founded in 2017, headquartered in Palo Alto. Named a Leader in The Forrester Wave: Conversation Intelligence Solutions for Contact Centers, Q2 2025 (highest Current Offering score among all evaluated vendors). Notable customers include United Airlines, Cox Communications, Brinks Home, Snap Finance, Intuit, LendingClub, Alaska Airlines, Holiday Inn, Xanterra.

## Key modules

### AI Agents
Virtual AI agents that handle customer conversations autonomously across voice and chat channels. Full lifecycle management:
- **Discover** — identify automation opportunities from conversation data
- **Build** — create AI agent workflows using no-code Opera interface
- **Test & Deploy** — staged rollout with guardrails
- **Optimize** — continuous improvement from production data
- **AI Receptionist** — handles inbound call routing and simple requests
- **Agent Operations Center** — unified command center for monitoring both human and AI agents, quality and compliance tracking

### Agent Assist
Real-time generative AI guidance for human agents during live conversations:
- **Knowledge Agent** — proactively surfaces cited answers from CRM, knowledge bases, and internal tools via persistent browser sidebar. Eliminates tab-switching during calls.
- **AI Summaries** — automatic conversation summaries synced to CRM
- **Behavioral Guidance** — live coaching prompts based on top-performer behavior patterns
- **Typing Efficiency** — auto-complete and smart suggestions for chat/messaging agents
- **Real-Time Translation** — live translation for multilingual support

### Conversation Intelligence
Analytics and coaching platform for post-conversation insights:
- **Insights** — data discovery across all conversations, trend detection
- **Coach** — agent development with performance tracking and skill gap identification
- **Quality Management** — automated QA on 100% of conversations (not sampling)
- **AI Analyst** — natural-language querying of conversation data for pattern detection
- **Automation Discovery** — identifies which conversation types are best suited for AI agent automation

## Pricing and limits

**Pricing model**: Custom quotes only. No public pricing page. Seat-based + feature tier, annual contracts.

**Known pricing data points:**
- AWS Marketplace listing: $150,000/year for up to 125,000 chat sessions or 100,000 voice calls
- Usage-based overages: $1.20 per additional chat session, $1.50 per additional voice call
- Smaller deployments reportedly start around $60,000/year
- Expect additional costs for setup, onboarding, and dedicated support
- Multi-year contracts typical

**Inferred tiers** (not officially published):
- Basic — AI-powered agent assistance
- Pro — deeper integration, more sophisticated AI actions
- Enterprise — maximum customization, security, multi-agent orchestration

## Integrations

### Telephony & Chat (CCaaS)
Five9, Amazon Connect, NICE CXone, Genesys Cloud CX, Avaya, LivePerson, Twilio, Cisco, SIPREC

### CRM & Customer Engagement
Salesforce, Pega, ServiceNow, Microsoft Dynamics 365, Pipedrive, Zendesk, HubSpot, Oracle, Intercom, Zoho

### Knowledge Management
API, PDF ingestion, Salesforce Knowledge, Google Drive, SharePoint, Zendesk Guide, Bloomfire, Shelf, Contentful

### Marketing (data flow)
Salesforce Marketing Cloud, BigCommerce, Shopify, Facebook Ads, Adobe, HubSpot Marketing, Google Ads, Marketo

### Data & Analytics
Amazon S3, Bynder, Databricks, AWS Glue, SQL databases, MySQL, AWS Lambda, SQS, DynamoDB, Google Cloud

### Integration capabilities
- Bi-directional data synchronization at near-zero latency
- Automatic CRM record updates from conversation data
- Real-time knowledge access during customer interactions
- Compliance-focused data delivery based on customer metadata

## API

**Developer portal**: developers.cresta.com
- SDK and API for integrating with Cresta conversation services
- API is platform-agnostic, works with existing chat and voice platforms
- No public endpoint documentation — API docs require demo/auth access
- REST + webhooks with API key auth (reported)
- Future plans include public SDK and exposed public API for historical data ingestion and exports

**GitHub**: github.com/cresta (78 public repos, all internal tooling — no product SDK)

## Security and compliance

- ISO/IEC 42001 — AI governance
- ISO 27701 — privacy information management
- PCI-DSS — payment card data protection
- Secure Development Lifecycle (SDLC) with static code analysis
- PII redaction capabilities
- Customer-approved data training only
- Three-pillar guardrail strategy: system-level rules, real-time supervision, adversarial testing

## Workflow setup

### Agent Assist deployment
1. Connect CCaaS platform (Five9, Genesys, Amazon Connect, etc.)
2. Ingest historical conversation data for model training
3. Connect knowledge sources (CRM, knowledge base, internal docs)
4. Configure behavioral guidance rules based on top-performer analysis
5. Deploy to a pilot group of agents (start with 10-20)
6. Iterate on guidance rules based on pilot feedback
7. Roll out to full agent population
8. Configure QA scoring criteria aligned to existing rubric

### AI Agent deployment
1. Use Automation Discovery to identify high-volume, low-complexity conversation types
2. Build AI agent workflows in Opera (no-code)
3. Test with simulated conversations
4. Deploy with human-in-the-loop supervision via Agent Operations Center
5. Monitor quality and compliance metrics
6. Gradually reduce human oversight as confidence increases

## Deep dives

### Cresta vs Balto
| Dimension | Cresta | Balto |
|---|---|---|
| **Scope** | AI agents + agent assist + conversation intelligence | Real-time guidance + QA |
| **Target** | Fortune 500, 100+ agents | Mid-market to enterprise, 50+ agents |
| **Deployment** | 3-6 months | 45-60 days |
| **Pricing** | $60K-$150K/yr | ~$100-150/agent/mo |
| **Real-time coaching** | Yes (Behavioral Guidance) | Yes (Dynamic Prompts, <200ms) |
| **AI virtual agents** | Yes (full lifecycle) | No |
| **QA automation** | Yes (100% of conversations) | Yes (100% of calls, 95% accuracy) |
| **No-code config** | Yes (Opera interface) | Yes (playbook builder) |
| **Compliance** | ISO 42001, ISO 27701, PCI-DSS | SOC 2 Type II, HIPAA, PCI DSS |
| **Knowledge Agent** | Yes (proactive, cited answers) | No |

### Cresta vs Gong
| Dimension | Cresta | Gong |
|---|---|---|
| **Focus** | Contact center (high-volume CX) | Sales (deal intelligence, forecasting) |
| **Real-time coaching** | Yes (during conversations) | No (post-call analytics) |
| **AI virtual agents** | Yes | No |
| **Deal intelligence** | No | Yes (deep) |
| **Revenue forecasting** | No | Yes (Gong Forecast) |
| **Pricing** | $60K-$150K/yr | ~$1,600/user/yr + $5K-50K platform fee |
| **Best for** | Contact center with 100+ agents | Sales teams with 50+ reps |

### Performance case studies
- **Brinks Home**: 92% first-call resolution, 30-point NPS increase, 50% operational cost reduction
- **Snap Finance**: 40% reduction in average handle time
- **Aptive**: $2M+ in customer retention driven by real-time AI
- **General metrics**: +23% customer satisfaction, +73% first-call resolution improvement
