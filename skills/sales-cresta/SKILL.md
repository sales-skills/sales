---
name: sales-cresta
description: "Cresta platform help — enterprise contact center AI with real-time agent assist, AI virtual agents, conversation intelligence, and automated QA. Use when agents need live coaching prompts during customer calls, evaluating Cresta vs Balto or Observe.AI for contact center AI, setting up AI virtual agents to handle voice and chat autonomously, QA team can only review a sample of calls and needs 100% automated scoring, Knowledge Agent not surfacing the right answers during calls, configuring Cresta integrations with Five9 or Genesys or Amazon Connect, or comparing Cresta pricing against other enterprise contact center platforms. Do NOT use for building a general coaching program (use /sales-coaching) or reviewing a specific call transcript (use /sales-call-review)."
argument-hint: "[describe what you need help with in Cresta]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, contact-center, enterprise, platform]
github: "https://github.com/cresta"
---

# Cresta Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) AI Agent setup (virtual agents for voice/chat)
   - B) Agent Assist configuration (real-time coaching, Knowledge Agent, AI Summaries)
   - C) Conversation Intelligence (Insights, Coach, Quality Management, AI Analyst)
   - D) Agent Operations Center (monitoring human + AI agents)
   - E) Integrations (CCaaS, CRM, knowledge management)
   - F) Comparing Cresta to another platform
   - G) Implementation planning
   - H) Other

2. **What's your current setup?**
   - A) Evaluating Cresta — haven't started
   - B) Purchased but in implementation
   - C) Running but having issues
   - D) Expanding to additional modules or teams

3. **What's your CCaaS / telephony?**
   - A) Five9
   - B) Amazon Connect
   - C) NICE CXone
   - D) Genesys Cloud CX
   - E) Avaya
   - F) Twilio
   - G) Cisco
   - H) LivePerson
   - I) Other

4. **Primary use case?**
   - A) Sales (revenue growth, upsell/cross-sell)
   - B) Customer care (cost optimization, CSAT)
   - C) Retention (churn reduction)
   - D) Collections (compliance + efficiency)
   - E) Multiple

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific call transcript for coaching | `/sales-call-review {user's question}` |
| Choosing between note-taker/conversation intelligence platforms | `/sales-note-taker {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Cresta platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Implementation priority order:**
1. Define use case scope — which conversations (sales, care, retention, collections) and channels (voice, chat, both)
2. Connect your CCaaS platform — Cresta needs the audio/text stream before anything works
3. Feed historical conversation data — Cresta's AI trains on your org's past conversations to learn winning behaviors
4. Deploy Agent Assist first — real-time coaching for human agents is the fastest time-to-value
5. Configure Quality Management — automated QA scoring on 100% of conversations
6. Build AI Agents last — virtual agents require the most tuning and testing before production

**When comparing to Balto:** Cresta is broader (AI virtual agents + agent assist + conversation intelligence vs Balto's real-time guidance focus). Cresta targets larger enterprises with deeper analytics and AI agent capabilities. Balto deploys faster (45-60 days vs Cresta's months) and has more transparent pricing.

**When comparing to Gong:** Cresta is contact center-focused (high-volume, many agents, compliance). Gong is sales-focused (deal intelligence, forecasting, field sales coaching). Different buyers, different problems.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API documentation.** Developer portal at developers.cresta.com exists but API docs are behind auth/demo request. Can't evaluate API scope before buying. Ask for API docs during evaluation.
- **Implementation timeline is months, not weeks.** Unlike lightweight tools, Cresta requires CCaaS integration, historical data ingestion, AI model training on your conversations, workflow configuration, and agent training. Plan for 3-6 months.
- **Pricing is opaque and enterprise-level.** AWS Marketplace shows $150K/yr for 125K chats or 100K calls, plus $1.20-$1.50 per additional interaction. Smaller deployments reportedly start around $60K/yr. Always get a written quote with module breakdown.
- **Transcription accuracy varies.** G2 reviews report inconsistent transcription, especially with accents, background noise, or fast speech. This affects real-time coaching accuracy since guidance depends on understanding what's being said.
- **Backend integration requires technical resources.** Users report difficulty integrating with existing systems. Expect to involve your engineering team, not just ops.
- **Vendor lock-in risk.** Cresta restricts third-party AI access to your conversation data, limiting architectural flexibility if you want to switch platforms later.

## Related skills

- `/sales-coaching` — Sales coaching and training programs
- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-note-taker` — AI note-taker selection and API integration
- `/sales-balto` — Balto platform help (real-time AI coaching for contact centers, fastest deployment)
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA alternative)
- `/sales-salesken` — Salesken platform help (real-time in-call coaching, multilingual, APAC focus)
- `/sales-gong` — Gong platform help (revenue intelligence for sales teams)
- `/sales-integration` — Tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluating Cresta for a large contact center
**User says**: "We have 500 agents on Five9 and want AI to help with real-time coaching and QA"
**Skill does**:
1. Explains Cresta's Agent Assist module — Knowledge Agent for real-time answers, Behavioral Guidance for coaching prompts
2. Walks through Quality Management for automated QA on 100% of conversations
3. Covers Five9 integration requirements and timeline
4. Compares pricing ($60K-$150K/yr) against Balto (~$100-150/agent/mo) and Enthu.AI (~$15-69/user/mo) for similar capabilities
**Result**: Full evaluation framework with pricing comparison, integration timeline, and module recommendations

### Example 2: AI virtual agent deployment
**User says**: "We want to automate 30% of customer service calls with AI agents"
**Skill does**:
1. Explains Cresta's AI Agent suite — Discovery, Build, Test & Deploy, Optimize lifecycle
2. Walks through the Agent Operations Center for monitoring AI + human agents
3. Covers guardrail strategy (system rules, real-time supervision, adversarial testing)
4. Sets expectations on timeline and training data requirements
**Result**: AI agent deployment plan with monitoring setup and guardrail configuration

### Example 3: Cresta vs Balto for compliance
**User says**: "We're in financial services and need real-time compliance monitoring during calls"
**Skill does**:
1. Compares Cresta's compliance approach (conversation intelligence + QA automation) vs Balto's (real-time PCI/HIPAA scanning with live alerts)
2. Evaluates deployment timelines — Balto at 45-60 days vs Cresta at 3-6 months
3. Reviews certifications — Cresta (ISO 42001, ISO 27701, PCI-DSS) vs Balto (SOC 2 Type II, HIPAA, PCI DSS)
4. Provides pricing comparison and recommendation based on team size and urgency
**Result**: Side-by-side compliance comparison with deployment timeline and pricing analysis

## Troubleshooting

### Knowledge Agent returning irrelevant answers
**Symptom**: Real-time knowledge suggestions don't match what the customer is asking about
**Cause**: Knowledge sources may not be properly connected or indexed, or the AI model hasn't been trained on enough domain-specific data
**Solution**: Verify all knowledge sources are connected (Salesforce, Google Drive, SharePoint, Zendesk, etc.) and fully indexed. Check that the knowledge base content is up-to-date and covers the topics customers ask about. Work with your Cresta CSM to retrain the model on recent conversation data. Consider adding FAQ-style content that directly answers common customer questions.

### Real-time guidance latency
**Symptom**: Coaching prompts appear too late to be useful during fast-paced conversations
**Cause**: Network latency between the CCaaS platform, Cresta's API, and the agent's browser can delay real-time features
**Solution**: Check network latency between your infrastructure and Cresta's endpoints. Ensure agents have stable, low-latency connections (wired preferred over WiFi for contact centers). Work with Cresta support to optimize the integration pipeline. For voice, verify the SIPREC or native CCaaS audio stream is properly configured.

### QA scores not matching manual review
**Symptom**: Automated QA scores from Cresta don't align with what human reviewers would score
**Cause**: QA criteria may be too broad or not calibrated against your existing rubric
**Solution**: Start by calibrating Cresta's QA criteria against your existing manual rubric. Score a batch of 50 calls both manually and with Cresta, compare results, and adjust criteria. Focus on measurable behaviors (did the agent say X, did they ask about Y) rather than subjective assessments. Iterate monthly until automated and manual scores converge within 10%.
