# Balto Platform Reference

## Platform overview

Balto is the #1-positioned contact center AI platform providing real-time guidance during live calls. Unlike post-call analytics tools (Gong, Chorus, CallMiner), Balto coaches agents in the moment — delivering dynamic prompts, compliance checklists, and objection handling cues with sub-200ms latency while the call is happening. Founded in St. Louis, Missouri.

Key differentiators vs post-call analytics tools:
- **Real-time, in-call guidance** — prompts appear during the conversation, not in a post-call review
- **Automated QA on 100% of calls** — 95% accuracy claimed, replaces manual sampling
- **Compliance enforcement** — real-time PCI/HIPAA/regulatory scanning during live calls
- **Contact center focus** — purpose-built for 50+ agent teams, not field sales or deal intelligence

## Key modules

### Real-Time Guidance
- Dynamic prompts and checklists that appear on the agent's screen during live calls
- Objection handling cues triggered by AI detection of customer pushback
- Compliance checklists with mandatory checkpoint enforcement
- Script adherence monitoring with real-time deviation alerts
- Sub-200ms latency for prompt delivery
- Playbook builder for different call scenarios (sales, support, compliance, collections)

### Real-Time QA
- Automated scoring of 100% of calls (95% accuracy claimed)
- Custom scoring criteria aligned to existing QA rubrics
- Priority-ranked call queue — worst scores surfaced first
- Replaces random 2-5% manual sampling with full-coverage automation
- Compliance violation detection and flagging
- Score trend tracking over time per agent and team

### Coaching
- AI identifies coaching needs from call patterns and QA scores
- Pulls "coachable moments" — specific call segments where the agent missed or fumbled
- Manager alerts for real-time intervention on flagged calls
- Performance tracking tied to coaching interventions
- Connects QA scores to coaching workflows

### Compliance
- Real-time PCI DSS scanning during live calls
- HIPAA compliance monitoring
- Regulatory script enforcement (Medicare, financial disclosures, etc.)
- PII scrubbing from transcripts and recordings
- Audit trails for compliance reporting
- Configurable rules per industry/regulation

### Insights
- AI-generated business intelligence from aggregated call data
- Trend analysis across teams, campaigns, and time periods
- Identifies systemic issues (product problems, process gaps) from conversation patterns
- Win/loss pattern detection
- Agent performance benchmarking

### Notes
- Automatic call summarization
- Pushes summaries, action items, and key moments to CRM
- Reduces after-call work (ACW) time
- Structured data extraction from conversations

## Pricing and limits

Pricing is quote-based with no published rate card.

| Estimate source | Price | Notes |
|---|---|---|
| Industry research | ~$100-150/agent/month | Per-agent licensing |
| Annual estimate | ~$1,200+/agent/year | Enterprise annual contracts |

**What's consistent across sources:**
- Custom packaging by module — not all modules required
- Enterprise annual contracts (multi-year discounts available)
- 50+ agent minimum typical for new contracts
- No free tier or self-service signup
- Custom pricing based on agent count, modules, and contract length
- Implementation fees may be separate

**Recommendation**: Get a detailed written quote with per-module pricing. Negotiate based on agent count and contract length. Ask about pilot pricing for initial rollout.

## Integrations

### Cloud CCaaS platforms
- Five9
- Genesys Cloud CX
- Amazon Connect
- Twilio Flex
- Talkdesk
- NICE CXone

### On-premises telephony
- Cisco UCCE/PCCE
- Avaya Aura
- Microsoft Teams

### CRM
- Salesforce (embedded experience)
- HubSpot
- Dynamics 365
- Zendesk

### Softphone / desktop
- 50+ softphone integrations
- Balto desktop app (Windows primary)
- Browser extension option

### Integration notes
- 45-60 day typical implementation timeline
- Cloud CCaaS integrations are faster than on-prem
- On-prem (Cisco, Avaya) requires more implementation effort and version compatibility checks
- Dedicated implementation team assigned for deployment

## Compliance and security

| Standard | Status |
|---|---|
| SOC 2 Type II | Certified |
| HIPAA | Ready (BAA available) |
| GDPR | Compliant |
| PCI DSS | Compliant |
| CCPA | Compliant |
| SSO | SAML 2.0 |

## API

**Customer-only API access** behind login at balto.ai/docs.

- REST API + webhooks
- API key authentication
- No public documentation available for pre-purchase evaluation
- Scope includes: call data, scoring results, playbook management, user management (exact endpoints not publicly documented)
- Webhooks for real-time event notifications

**If API access is critical**: Request API documentation and scope during the sales process. Ask specifically about the endpoints you need (call export, scoring data, CRM sync) before committing.

## Target market

- **Company size**: Mid-market to enterprise
- **Team size**: 50+ agents (minimum), sweet spot 100-1,000+
- **Industries**: Financial services, insurance, telecom, healthcare, BPO
- **Use cases**: Compliance-heavy call centers, high-volume sales teams, regulated industries
- **Not ideal for**: Small teams (<50 agents), field sales, deal intelligence/pipeline analytics

## Workflow setup

### Implementation timeline (45-60 days typical)

**Weeks 1-2: Platform setup**
1. CCaaS/telephony integration — connect Balto to your call platform
2. Deploy Balto desktop app or browser extension to agent workstations
3. Configure SSO (SAML 2.0) and user provisioning
4. Set up admin roles and permissions

**Weeks 3-4: Playbook configuration**
1. Build first Real-Time Guidance playbook for highest-value use case
2. Configure compliance checklists for regulated call types
3. Set up Real-Time QA scoring criteria aligned to existing QA rubric
4. Define coaching alert thresholds

**Weeks 5-6: Training and pilot**
1. Train managers on coaching dashboards and coachable moments
2. Pilot with 10-20% of agents on the configured playbooks
3. Gather agent feedback on prompt relevance and timing
4. Refine playbook triggers based on pilot data

**Weeks 7-8: Rollout**
1. Expand to full agent population
2. Enable Balto Notes for CRM summarization
3. Configure Insights dashboards for leadership reporting
4. Establish ongoing playbook review cadence

### Ongoing operations

- **Daily**: Managers review coaching alerts and coachable moments
- **Weekly**: QA team reviews priority-ranked call queue, conducts coaching sessions
- **Monthly**: Refine playbook triggers based on Insights data, adjust scoring criteria
- **Quarterly**: Review team-wide compliance trends, measure ramp time improvements, ROI reporting

## Competitive positioning

| Feature | Balto | Gong | CallMiner | Observe.AI | Enthu.AI |
|---|---|---|---|---|---|
| Real-time in-call guidance | Yes (core) | No (post-call) | No (post-call) | Yes (limited) | No (post-call) |
| QA automation | 100% of calls | Sampling | 100% of calls | 100% of calls | 100% of calls |
| Compliance (PCI/HIPAA) | Real-time scanning | Post-call | Post-call | Post-call | Post-call |
| Setup time | 45-60 days | Weeks-months | Weeks-months | Weeks | Hours |
| Minimum agents | ~50 | Varies | Enterprise | Varies | None |
| Pricing | ~$100-150/agent/mo | ~$1,600/user/yr | Enterprise | ~$70-150/agent/mo | ~$15-69/user/mo |
| Target | Contact centers | Sales teams | Contact centers | Contact centers | SMB contact centers |
| Revenue intelligence | No | Yes | No | No | No |
| Public API docs | No | Yes | Yes | Limited | No |
