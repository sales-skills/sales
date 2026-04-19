# Convin Platform Reference

## Platform overview

Convin (convin.ai) is an AI-powered conversation intelligence and contact center automation platform headquartered in Bengaluru, India. It positions as a full-stack solution that analyzes 100% of customer conversations across voice, chat, email, and social channels — combining automated QA, real-time agent coaching, AI phone agents, and an agent training LMS in one platform. Primary competitors: Observe.AI, Cresta, Balto, CallMiner, Enthu.AI. Target: B2C contact centers with 50-1000+ agents in healthcare, banking, BPO, insurance, EdTech, real estate, and home services.

Recognition: LinkedIn Top Startup 2025 (#6 in India), G2 rated 4.7/5.

## Key modules

### Conversation Intelligence Agent
Analyzes 100% of customer conversations (voice, chat, email, social) using Convin's proprietary LLM. Extracts topics, sentiment, compliance violations, and customer intent. Supports 70+ languages.

### Automated Quality Assurance
100% conversation auditing with AI-generated QA scores. Configurable evaluation criteria (compliance, process adherence, soft skills). Replaces manual QA sampling (which typically covers 1-5% of calls). Key limitation: AI scoring sometimes lacks explanations for "No" marks.

### Real-Time Assist Agent
Live guidance to agents and supervisors during active calls. Surfaces battlecards, compliance checklists, next-best-action suggestions, and upsell prompts based on conversation context. Latency not publicly documented — some reviewers report occasional lag.

### AI Phone Call Agent
Autonomous voicebot for outbound calls — lead qualification, follow-ups, payment collections, appointment scheduling, and customer support. Operates 24/7 without human intervention. Supports multiple languages.

### AI Learning Management System (LMS)
Agent onboarding and training platform. Creates personalized training paths based on agent performance gaps identified by QA scoring. Claims 60% faster ramp-up for new agents. Includes assessments and certification tracking.

### Voice of Customer Analytics
Sentiment analysis, topic trending, and customer insight extraction across all conversations. Identifies emerging issues, common complaints, and satisfaction drivers.

### Compliance Monitoring
Automated flagging for regulatory adherence — HIPAA, GDPR, CCPA, PCI-DSS. Detects script deviations, missing disclosures, and unauthorized promises.

## Pricing and limits

- **Pricing model**: Custom/quote-based. No publicly disclosed per-agent rates.
- **Free tier**: Exists with limited features (per review sites), but specifics unclear.
- **Enterprise**: Contact sales for demo and quote. Pricing tailored to team size and call volume.
- **No published rate limits**: No API = no rate limits to worry about.

## Integrations

30+ pre-built connectors across 15 categories. Custom integrations available with ~3-day turnaround.

| Category | Platforms |
|---|---|
| CCaaS | 8x8, Amazon Connect, Ameyo, Augutech, Avaya, Bright Pattern, CXM, Cirrus |
| CRM | Close (confirmed), likely others on pages 2-5 |
| Dialer | Aircall |
| Calendar | Calendly |
| HR | ADP, Bamboo HR |
| BI / Data | Amazon S3, BigQuery |
| Knowledge Base | Bloomfire, Boost.ai, Box |
| Video Conferencing | BlueJeans, Cisco Webex |
| Project Management | Asana |
| WFM | Assembled |
| Call Tracking | CallRail |

Additional categories: Experience Management, Marketing Automation, Team Messaging, Ticketing. Also listed on RingCentral App Gallery.

**Notable gap**: No Salesforce or HubSpot integration confirmed on page 1. Check with Convin sales if your CRM is supported.

## Security and compliance

GDPR, HIPAA, CCPA, SOC 2 Type II, ISO 27001 certified. End-to-end encryption. Deployment options: on-premises, client cloud, or Convin's private cloud.

## Competitive positioning

### Convin vs Observe.AI
- **Convin advantage**: Includes AI Phone Call agent (outbound voicebot), built-in LMS for agent training, potentially lower pricing for India/APAC customers.
- **Observe.AI advantage**: More mature virtual agent capabilities (VoiceAI/ChatAI), deeper US enterprise presence, 250+ integrations, wider CCaaS compatibility.
- **Both**: 100% automated QA, real-time agent assist, conversation intelligence.

### Convin vs Cresta
- **Convin advantage**: Built-in voicebot and LMS, broader language support (70+), more affordable for mid-market.
- **Cresta advantage**: Deeper enterprise focus, Knowledge Agent with RAG, more CCaaS integrations, ISO 42001 AI governance certification.

### Convin vs Balto
- **Convin advantage**: Full-stack (QA + coaching + voicebot + LMS vs Balto's real-time-first approach), conversation intelligence across all channels.
- **Balto advantage**: <200ms real-time latency (fastest in category), 50+ softphone integrations, compliance-first design (PCI/HIPAA), more established in US healthcare/insurance.

### Convin vs Enthu.AI
- **Convin advantage**: AI Phone Call agent, Real-Time Assist, LMS, larger scale (case studies cite 350+ agents).
- **Enthu.AI advantage**: Simpler setup (hours vs weeks), no minimum commitments, published pricing (~$15-69/user/mo), easier for small contact centers.

## Workflow setup

### Setting up automated QA (most common)

1. **Connect your CCaaS** — use the pre-built connector for your platform (8x8, Amazon Connect, Avaya, etc.)
2. **Define evaluation criteria** — start with 3-5 binary criteria:
   - Identity verification completed
   - Greeting script followed
   - Issue resolution confirmed
   - Required disclosures made
   - Proper call closing
3. **Calibrate AI scoring** — run AI alongside manual QA for 2-4 weeks, compare scores, adjust criteria
4. **Set scoring thresholds** — define pass/fail benchmarks per criterion and overall
5. **Enable automated coaching triggers** — when QA score drops below threshold, auto-assign training modules in LMS

### Setting up Real-Time Assist

1. **Configure knowledge sources** — upload battlecards, compliance checklists, product guides
2. **Define trigger conditions** — what topics/keywords/situations should surface guidance
3. **Pilot with small group** — 10-20 agents on a single queue
4. **Monitor alert fatigue** — if agents start ignoring prompts, reduce frequency
5. **Iterate** — add/remove triggers based on agent feedback and QA score improvement

### Deploying AI Phone Call agent

1. **Define use case** — lead qualification, follow-ups, collections, appointment scheduling
2. **Script the conversation flows** — define opening, branching logic, objection handling, handoff to human
3. **Configure language and voice** — select language, voice type, speaking pace
4. **Set operating hours and volume** — calls per day, time windows, retry logic
5. **Monitor and refine** — review transcripts, adjust flows based on call outcomes

## Partner program

- **URL**: convin.ai/become-a-partner
- **Partnership types**: Consulting Partners, Contact Centers, Cloud Partners, ISVs, Integration Partners, Resellers
- **Benefits**: "Attractive profit margins" (no public commission rates), collaborative marketing, training, dedicated resources
- **Process**: Apply → Qualify → Connect → Launch (4-step onboarding)
