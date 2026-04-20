---
name: sales-solidroad
description: "Solidroad platform help — AI-powered QA and training for CX teams. Use when reps ramping too slowly and need AI practice simulations, QA only covers 2% of conversations and you want 100% automated scoring, training and QA are disconnected and insights don't turn into coaching, setting up Solidroad scorecards or custom quality rubrics, connecting Solidroad to Salesforce Service Cloud or Zendesk or Intercom, or evaluating Solidroad vs Observe.AI vs Balto vs Cresta for contact center QA. Do NOT use for general coaching strategy without a specific platform (use /sales-coaching)."
argument-hint: "[describe what you need help with in Solidroad]"
license: MIT
version: 1.0.0
tags: [sales, coaching, qa, training, platform]
---

# Solidroad Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need?**
   - A) Set up AI training simulations for new reps
   - B) Configure automated QA scoring on conversations
   - C) Build custom quality scorecards/rubrics
   - D) Connect Solidroad to my CRM or contact center
   - E) Understand pricing or evaluate Solidroad vs alternatives
   - F) Troubleshoot AI simulation or scoring issues
   - G) Other

2. **Your team?**
   - A) Small CX team (<20 agents)
   - B) Mid-size contact center (20-100 agents)
   - C) Large contact center / BPO (100+ agents)
   - D) Sales team (not support)

3. **Current tools?**
   - A) Salesforce Service Cloud
   - B) Zendesk
   - C) Intercom
   - D) Genesys / Five9 / NICE CXone / other CCaaS
   - E) None yet / spreadsheets

**Skip-ahead rule**: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General coaching strategy (not Solidroad-specific) | `/sales-coaching [question]` |
| Comparing QA platforms (Observe.AI, Balto, Cresta, MaestroQA) | `/sales-coaching [question]` — see references/platforms.md for comparison |
| CCaaS platform selection | `/sales-ccaas-selection [question]` |
| Help desk selection | `/sales-helpdesk-selection [question]` |

When routing, provide the exact command: "This is a {domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Solidroad platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Start with QA before training**: Deploy automated scoring first (1-2 weeks), then use the quality gaps it surfaces to configure targeted training simulations
- **Define 3-5 binary scoring criteria first**: Avoid subjective rubrics — "Did agent confirm order number?" not "Was agent professional?"
- **Calibrate AI vs manual for 2-4 weeks**: Compare Solidroad's automated scores against supervisor manual scores before trusting automation
- **Use the closed-loop**: QA gaps → targeted simulation → re-score → measure improvement. This is Solidroad's core differentiator

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **AI responds before you finish talking in simulations.** Multiple G2 reviewers report the AI doesn't wait for complete responses before replying during voice practice. Workaround: use shorter, more structured responses and pause clearly between sentences.
- **AI sometimes mimics agents instead of customers.** The simulation AI occasionally takes the wrong role (acting as the agent instead of the customer). Report to Solidroad support — they've been responsive to bug fixes.
- **No public API.** SaaSworthy lists API support as "NA." All integrations go through Solidroad's native connectors (Salesforce, Zendesk, Intercom) or contact their team for custom integration.
- **Pricing not fully transparent.** $10-50/user/mo range confirmed, but specific tier features aren't publicly documented. Request a detailed feature matrix during evaluation.
- **SOC 2 + ISO 27001 certified.** Enterprise security is solid — this is a genuine differentiator vs smaller QA tools.

## Related skills

- `/sales-coaching` — Sales coaching and training strategy across all platforms (onboarding, role-play, coaching frameworks, certifications)
- `/sales-observe-ai` — Observe.AI platform help (enterprise contact center QA, Agent Copilot, 100% Auto QA)
- `/sales-balto` — Balto platform help (real-time AI guidance for contact centers, <200ms latency)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI, real-time agent assist, Knowledge Agent)
- `/sales-maestroqa` — MaestroQA platform help (conversation data QA, customizable scorecards, 60+ integrations)
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA, 100% auto-scoring)
- `/sales-convin` — Convin platform help (100% automated QA, Real-Time Assist, integrated LMS)
- `/sales-ccaas-selection` — Comparing CCaaS platforms (Genesys vs NICE vs Talkdesk vs Five9)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Set up QA for a BPO
**User says**: "We run a 200-agent BPO and only review 3% of calls manually — how do I set up Solidroad to score everything?"
**Skill does**:
1. Walks through defining binary QA criteria for automated scoring
2. Explains the SCORE methodology for scenario-based calibration
3. Covers integration with the existing CCaaS (Genesys, Five9, etc.)
4. Sets up the closed-loop: QA gaps → targeted training simulations → re-score
5. Recommends a 2-4 week calibration period comparing AI vs manual scores

### Example 2: Reduce onboarding ramp time
**User says**: "New agents take 6 weeks to get to quality standards — can Solidroad cut that?"
**Skill does**:
1. Explains how AI simulations generate practice scenarios from real conversation patterns
2. Walks through multi-channel training setup (voice, chat, email)
3. Covers scorecard configuration for tracking ramp progress
4. References Podium case study (50% ramp reduction, 33% faster resolution)

### Example 3: Evaluate Solidroad vs alternatives
**User says**: "Should I use Solidroad or Observe.AI for our contact center QA?"
**Skill does**:
1. Compares positioning: Solidroad = QA + training closed-loop; Observe.AI = pure QA + virtual agents
2. Covers pricing differences and team size fit
3. Explains when to choose each: Solidroad for training + QA bundled, Observe.AI for enterprise QA-only

## Troubleshooting

### AI simulation doesn't feel realistic
**Cause**: AI responding too fast or taking wrong role
**Solution**: Report specific scenarios to Solidroad support (they fix bugs fast per G2 reviews). For voice simulations, use clear pauses between statements to help the AI track turn-taking. Check if your custom scenario has enough context — vague scenarios produce generic AI responses.

### QA scores don't match manual reviews
**Cause**: Scoring criteria are too subjective
**Solution**: Replace subjective criteria ("Was the agent empathetic?") with binary, observable criteria ("Did the agent acknowledge the customer's frustration?"). Calibrate for 2-4 weeks. Compare AI scores against 3+ manual reviewers to establish baseline accuracy.

### Integration not syncing conversations
**Cause**: Connector configuration or permissions
**Solution**: Verify API permissions in your CRM/CCaaS. Solidroad integrates natively with Salesforce Service Cloud, Zendesk, and Intercom. For other platforms (Genesys, Five9, Avaya, Cisco), check if the telephony connector is properly configured. Contact Solidroad support for custom integration help.
