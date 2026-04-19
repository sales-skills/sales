# Observe.AI Platform Reference

## Platform overview

Observe.AI is an enterprise contact center intelligence platform that combines 100% auto QA, real-time agent guidance, post-call coaching analytics, and AI-powered virtual agents. Targets enterprise contact centers with 100 to 100,000 agents across healthcare, financial services, insurance, banking, and transportation. 350+ enterprise customers including DoorDash, Accolade, DailyPay, Omaha Steaks, Signify Health. Positioned as "Leader in AI Agents for customer experience."

## Key modules

### Auto QA
- Automatic quality assurance scoring on 100% of interactions — not sampling
- Custom QA scorecards with configurable criteria
- Manual QA overlay for human-reviewed quality assessment
- Screen Recording — capture agent desktop activity alongside call audio

### Agent Copilot (real-time)
- Real-time guidance during live calls — prompts, checklists, next-best-action
- Requires live audio stream from CCaaS (not post-call recording)
- Newer capability — Observe.AI was historically post-call focused

### Coaching Copilot (post-call)
- Post-interaction performance management
- Coaching dashboards with agent-level scoring trends
- Identifies coaching priorities from Auto QA data

### Insights Copilot
- On-demand voice-of-customer insights
- Natural-language querying of conversation data

### VoiceAI Agents
- Automate phone conversations end-to-end
- Intelligent routing and escalation
- Agent Blueprint — task orchestration framework for production-grade voice AI

### ChatAI Agents
- Handle authentication, issue resolution, and support across chat channels
- Autonomous or assisted modes

### Foundational capabilities
- **Comprehension**: Handles overtalk, interruptions, background noise, entity extraction
- **Execution**: Policy gates for authentication/disclosures, modular task frameworks
- **Governance**: LLM-as-judge evaluation, audit trails, runtime monitoring for drift/hallucinations

## Pricing and limits

No public pricing — all tiers require "Talk to sales" / "Book a demo."

**Estimated range**: $100-500/user/month (per third-party review sites)

**Five solution-based tiers** (no prices listed):
1. **VoiceAI Agents** — automated voice conversations
2. **Real-time AI** — live agent assist (Agent Copilot)
3. **Post-interaction AI** — Auto QA and Coaching Copilot
4. **Enterprise Advanced** — Real-time + Post-interaction combined with enterprise analytics
5. **Enterprise Unlimited** — All of Advanced plus call summarization and Knowledge AI

Pricing model: ROI-based / consultative, subscription, customized by agent count and modules. Annual contracts expected. No free plan or free trial mentioned.

## Integrations

250+ out-of-the-box integrations.

### CCaaS / Telephony (primary)
Five9, Amazon Connect, Avaya, 8x8, Aircall, CallRail, Talkdesk, Twilio, UJET, 3CLogic

### CRM
Salesforce (implied primary), others via API

### Marketing automation
ActiveCampaign, Adobe Marketo Engage

### HRIS / Workforce
ADP Workforce Now, BambooHR

### BI / Data
Amazon S3, Amplitude

### Project management
Airtable, Asana, Jira, Trello

### Knowledge
Confluence, Bloomfire

### Other
Adobe Commerce, BigCommerce, Brightpearl, AdvancedMD, Amadeus, Amdocs, athenaOne, Availity

### Methods
REST API, SFTP, S3, Webhooks

## Compliance and security

- SOC 2 Type II
- HIPAA compliant
- GDPR compliant
- End-to-end encryption
- SSO for user authentication
- Data isolation — never used for model training or shared
- Complete audit trails and access controls

## API

**Status**: REST API exists but documentation is partially gated.

- **Base URL**: `https://api.observe.ai/v1`
- **Auth**: Bearer token in `Authorization` header (issued by account admin, enterprise-gated)
- **Docs**: https://api-docs.observe.ai/ (Redoc, JS-rendered — may require enterprise access for full spec)

### Known endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/interactions` | List interactions with date range filtering and pagination |
| GET | `/v1/interactions/{id}/transcript` | Fetch transcript for a specific interaction |
| GET | `/v1/interactions/{id}/evaluation` | Fetch evaluation/QA data for an interaction |

**Query parameters** for `/v1/interactions`: `start_date`, `end_date`, `limit`, `offset`

### Data models

- **Interaction**: `interaction_id`, `agent_id`, `duration`, `timestamp`, `metadata`
- **Transcript**: Speaker-labeled utterances with `speaker_role` (agent/customer), `start_time`, `end_time`, `text`
- **Evaluation**: `overall_score`, `criteria[]` with individual scores, `coaching_moments[]`

### Rate limits
- Per-endpoint rate limits enforced
- Returns HTTP 429 when exceeded — use exponential backoff

### Webhooks
- Availability varies by plan and enterprise configuration
- Register webhook endpoint to receive events when interactions are fully processed
- Payload includes interaction ID, agent info, and metadata

### API caveats
- Transcripts and evaluations are NOT available instantly after a call ends — typical lag is minutes to hours
- Pagination uses cursor-based tracking — losing a cursor mid-backfill on large datasets (10,000+) means re-scanning from the start
- QA evaluations and coaching scores may arrive later than base transcripts — design extraction to handle partial data and backfill
- Full API spec likely requires enterprise access — ask your account team for the OpenAPI spec

## Partner program

Observe.AI has a **channel partner program** (not an affiliate program):
- Dedicated partner manager and exclusive training
- Claims "richest margin in the industry"
- Available through cloud provider marketplaces (AWS/Azure/GCP)
- Apply at observe.ai/become-a-partner
- No public affiliate/referral program

## Workflow setup

### Initial deployment (typical 3-6 months)

1. **CCaaS integration** — Connect your telephony platform. Five9 is the deepest native integration. Amazon Connect, Talkdesk, Avaya, 8x8, Twilio supported.
2. **Audio pipeline validation** — Verify call recordings flow correctly, check transcription accuracy on 50+ real calls before proceeding.
3. **Auto QA scorecard design** — Start with 5-8 evaluation criteria. Make criteria binary/objective where possible. Avoid subjective criteria that AI handles poorly.
4. **Calibration** — Human QA team scores 50-100 calls alongside Auto QA. Compare scores. Adjust criteria until alignment is acceptable.
5. **Coaching rollout** — Enable Coaching Copilot dashboards for supervisors. Set threshold-based alerts for calls needing coaching.
6. **Agent Copilot (optional)** — Add real-time guidance once post-call QA is stable and agents trust the system.
7. **AI Agents (optional)** — VoiceAI/ChatAI agents require the most governance setup. Deploy after operational workflows are stable.

### QA scorecard best practices

- **Binary criteria work best** — "Did the agent verify the customer's identity?" scores more consistently than "Was the opening professional?"
- **Start simple** — 5-8 criteria. Add complexity after calibrating on 50+ scored calls.
- **Separate compliance from quality** — Compliance criteria (required disclosures, PCI adherence) should be scored separately from quality criteria (empathy, resolution). Compliance = binary pass/fail. Quality = scaled.
- **Weight criteria by impact** — Not all criteria are equal. Compliance violations should weigh more heavily than tone.

## Deep dives

### Contact center QA landscape

Observe.AI sits in the "post-call QA + analytics" lane:

| Lane | Leaders | Observe.AI fit |
|------|---------|----------------|
| Real-time during-call guidance | Balto, Cresta, Abstrakt | Observe.AI Agent Copilot is newer — evaluate if real-time is primary need |
| Post-call QA / analytics | Observe.AI, CallMiner, Level AI, Enthu.AI | Core strength |
| Full CCaaS with built-in QA | NICE CXone, Talkdesk, Genesys | QA is one module in a larger platform |
| Enterprise virtual agents | Cresta, Cognigy, Uniphore | Observe.AI VoiceAI/ChatAI agents compete here |

### Selection considerations

- **Pick Observe.AI when**: 100+ agent contact center, need 100% auto QA to replace manual sampling, want a platform that can grow from QA into real-time guidance and AI agents, budget supports enterprise pricing ($100-500/user/mo), and you can invest 3-6 months in implementation.
- **Avoid Observe.AI when**: Team under 50 agents (try Enthu.AI), primary need is real-time during-call coaching (try Balto), budget under $100/user/mo, need fast deployment (weeks not months), or you want transparent pricing and self-serve API access.
