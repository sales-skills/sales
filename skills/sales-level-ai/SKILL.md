---
name: sales-level-ai
description: "Level AI platform help — contact center intelligence with Naviant semantic AI, InstaScore 100% automated QA, Real-Time Agent Assist (AgentGPT), Voice of Customer analytics (iCSAT), AI Virtual Agent, screen recording, omnichannel analysis. Use when setting up Level AI InstaScore QA scorecards for contact center agents, AgentGPT real-time assist not surfacing correct knowledge articles during calls, QA scores seem inaccurate or don't match manual evaluations, Level AI call ingestion delayed more than 24 hours, comparing Level AI vs Observe.AI or Cresta or CallMiner for contact center QA, integrating Level AI with Five9 or Talkdesk or Amazon Connect or Zendesk, configuring compliance monitoring for PCI or HIPAA, or evaluating Level AI for a mid-market contact center. Do NOT use for building a general coaching program (use /sales-coaching), reviewing a specific call transcript (use /sales-call-review), or CCaaS platform selection (use /sales-ccaas-selection)."
argument-hint: "[describe what you need help with in Level AI]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, contact-center, qa, platform]
---

# Level AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up InstaScore QA scorecards and evaluation criteria
   - B) Configuring Real-Time Agent Assist (AgentGPT) for live guidance
   - C) Voice of Customer analytics — sentiment, iCSAT, trends
   - D) AI Virtual Agent setup (voice/chat automation)
   - E) CCaaS integration (Five9, Talkdesk, Zendesk, Genesys, etc.)
   - F) API integration — pushing/pulling interaction data
   - G) Comparing Level AI to another tool (Observe.AI, Cresta, CallMiner, Balto)
   - H) Compliance monitoring (PCI, HIPAA, script adherence)
   - I) Screen recording and agent coaching workflows
   - J) Other

2. **What's your current setup?**
   - A) Evaluating whether to buy
   - B) New — haven't started implementation
   - C) In implementation
   - D) Running but having issues
   - E) Expanding to new modules

3. **What's your CCaaS/telephony?**
   - A) Five9
   - B) Talkdesk
   - C) Zendesk
   - D) Genesys
   - E) Amazon Connect
   - F) Twilio
   - G) Freshworks
   - H) Kustomer
   - I) Other

4. **Contact center size?**
   - A) Mid-size (50-200 agents)
   - B) Large (200-1,000 agents)
   - C) Enterprise (1,000+ agents)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific call transcript for coaching | `/sales-call-review {user's question}` |
| Choosing between note-taker/conversation intelligence platforms | `/sales-note-taker {user's question}` |
| CCaaS platform comparison/selection | `/sales-ccaas-selection {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Level AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Implementation priority order:**
1. Connect your CCaaS first — call data must flow before anything else works
2. Configure InstaScore with a starter scorecard (5-8 criteria) — validate transcription accuracy on 50+ calls before trusting scores
3. Calibrate QA — have human reviewers score the same 20-30 calls and compare to InstaScore. Adjust criteria until alignment is acceptable
4. Roll out coaching workflows — use screen recordings and QA findings to identify coaching priorities
5. Enable AgentGPT for real-time guidance once post-call QA is stable
6. AI Virtual Agent last — requires the most tuning and governance

**When comparing to competitors:**
- vs **Observe.AI**: Similar scope. Level AI differentiates on semantic intelligence (intent-based, not keyword). Observe.AI has more mature VoiceAI/ChatAI agents and 250+ integrations. Both ~$150-200/agent/mo.
- vs **Cresta**: Cresta targets larger enterprises with Knowledge Agent and deeper virtual agent capabilities. Level AI is more accessible for mid-market.
- vs **CallMiner**: CallMiner has deeper post-call analytics and compliance for regulated industries. Level AI has stronger real-time agent assist. CallMiner averages ~$102K/yr.
- vs **Balto**: Balto deploys in weeks and leads in real-time guidance. Level AI combines real-time with post-call QA in one platform. Balto is ~$100-150/agent/mo.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Call ingestion can be delayed 24+ hours.** G2 reviewers report calls not appearing until the next day, making same-day QA monitoring unreliable. Ask about ingestion SLAs during evaluation.
- **InstaScore accuracy requires calibration.** AI QA scores won't match human QA out of the box — scoring issues tied to language barriers and subjective criteria. Start with binary/objective criteria and run a calibration period against manual scores.
- **Sentiment analysis misclassifies neutral conversations.** Users report neutral conversations flagged as negative. Don't rely on sentiment alone for coaching decisions — cross-reference with QA scores.
- **No public pricing.** Estimated ~$185/agent/month. Custom quotes required — pricing varies by agent count, modules, and contract length.
- **API exists but is not publicly documented.** GraphQL-based per their engineering blog. Enterprise customers get access — ask your account team for the API spec during evaluation.
- **Mid-market focus may limit scalability for very large operations.** The platform excels at 100-1,000 agent contact centers. For 5,000+ agents, also evaluate Observe.AI, Cresta, or NICE CXone.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-coaching` — Build coaching programs, onboarding, role-plays, certifications
- `/sales-note-taker` — Compare AI note-takers and conversation intelligence tools or wire APIs into CRM
- `/sales-observe-ai` — Observe.AI platform help (enterprise contact center QA, deepest AI agent capabilities)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI, Fortune 500 focus)
- `/sales-callminer` — CallMiner platform help (enterprise post-call analytics, strongest compliance)
- `/sales-balto` — Balto platform help (real-time agent guidance, fastest deployment)
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA for smaller teams)
- `/sales-ccaas-selection` — Compare CCaaS platforms (Genesys, NICE, Talkdesk, Five9, etc.)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up automated QA
**User says**: "We manually review 3% of calls. How do I set up InstaScore in Level AI to auto-score everything?"
**Skill does**:
1. Reads platform guide for InstaScore module
2. Explains 100% auto-scoring with custom scorecards — define criteria, assign weights, auto-evaluate all interactions
3. Walks through scorecard creation with binary criteria (compliance, verification) and scaled criteria (empathy, resolution)
4. Recommends a 2-week calibration period comparing InstaScore to manual reviews
**Result**: User has a plan to move from 3% manual sampling to 100% automated QA

### Example 2: Comparing Level AI vs Observe.AI
**User says**: "We're evaluating Level AI and Observe.AI for our 300-agent insurance contact center"
**Skill does**:
1. Compares both platforms on QA, real-time assist, compliance, integrations, and pricing
2. Notes Level AI's semantic intelligence vs Observe.AI's post-call analytics depth
3. Highlights Observe.AI's more mature VoiceAI agents vs Level AI's stronger mid-market positioning
4. Recommends piloting both with 20-30 agents over 30 days
**Result**: Side-by-side comparison tailored to insurance contact center requirements

## Troubleshooting

### InstaScore QA scores don't match manual evaluations
**Symptom**: Auto-scores diverge significantly from human QA reviewer scores
**Cause**: Scorecard criteria may be too subjective, transcription errors affecting scoring, or language barriers causing misclassification
**Solution**: Make criteria binary where possible ("Did agent verify identity?" not "Was the opening professional?"). Run calibration on 30 calls with human reviewers. Check transcription quality — poor transcription = unreliable scoring regardless of criteria.

### Calls not appearing or delayed ingestion
**Symptom**: Calls from today aren't visible in the platform, 24+ hour delay
**Cause**: CCaaS integration pipeline processing lag — known issue in G2 reviews
**Solution**: Check CCaaS integration status in admin panel. Verify call recordings are flowing from your telephony system. Contact Level AI support if delays exceed 24 hours consistently. For same-day monitoring needs, evaluate Balto for real-time visibility.

### AgentGPT not surfacing relevant guidance
**Symptom**: Real-time assist shows generic or irrelevant knowledge articles during calls
**Cause**: Knowledge base not properly configured or not mapped to the right call contexts
**Solution**: Review your knowledge base content in Level AI — articles need clear topic tagging. Test with specific call scenarios. AgentGPT uses semantic matching, so ensure knowledge articles use language similar to how agents and customers discuss topics.
