---
name: sales-playvox
description: "Playvox (by NICE) platform help — modular WEM suite for contact centers with Quality Management scorecards, Workforce Management forecasting/scheduling, Performance Management dashboards, Coaching & eLearning, and Agent Motivation gamification. Use when Playvox QA scorecards not evaluating correctly, Playvox WFM scheduling or adherence reports confusing, Playvox keeps logging out or losing saved work, Playvox performance slow or pages not loading, comparing Playvox pricing tiers ($30-90/agent/mo per module), integrating Playvox with Zendesk or Salesforce or Five9, evaluating Playvox after NICE acquisition risks, or setting up Playvox gamification and leaderboards. Do NOT use for NICE CXone platform configuration (use /sales-nice-cxone) or comparing CCaaS platforms (use /sales-ccaas-selection)."
argument-hint: "[describe what you need help with in Playvox]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, qa, wfm, platform]
---

# Playvox Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Quality Management — scorecards, evaluations, QA sampling
   - B) Workforce Management — forecasting, scheduling, adherence
   - C) Performance Management — KPI dashboards, goal tracking
   - D) Coaching & eLearning — learning modules, training content
   - E) Agent Motivation — gamification, badges, leaderboards, rewards
   - F) Customer AI — VoC analytics, sentiment
   - G) API integration or data import/export
   - H) Integrations with Zendesk, Salesforce, or other platforms
   - I) Pricing comparison or module selection
   - J) NICE acquisition — migration concerns, feature deprecation risks
   - K) Other

2. **Current setup?**
   - A) Evaluating whether to buy
   - B) New — setting up for the first time
   - C) Running but having issues
   - D) Considering migrating away (post-NICE acquisition)

3. **Contact center size?**
   - A) Small (< 50 agents)
   - B) Mid-size (50-200 agents)
   - C) Large (200+ agents)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Comparing QA tools (Playvox vs MaestroQA vs Observe.AI) | `/sales-coaching` for cross-platform comparison |
| Choosing a CCaaS platform | `/sales-ccaas-selection {user's question}` |
| NICE CXone platform-specific questions | `/sales-nice-cxone {user's question}` |
| Help desk platform selection | `/sales-helpdesk-selection {user's question}` |
| Real-time agent coaching during calls | `/sales-balto {user's question}` or `/sales-cresta {user's question}` |
| Comparing standalone WEM platforms (Playvox vs Calabrio vs Verint) | Answer directly — see Step 3 |

When routing to another skill, provide the exact command.

## Step 3 — Playvox platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Module selection**: Start with QM if QA is the pain point, then add WFM. Don't buy all modules at once — Playvox's modular pricing lets you scale.
- **Integration architecture**: One Playvox instance per Zendesk/CRM instance is the standard pattern. Plan for this if you have multiple CRM instances.
- **NICE acquisition risk**: If evaluating today, consider whether Playvox features you need overlap with NICE CXone built-in WEM. If they do, you may be forced to migrate eventually. If they don't (gamification, eLearning), Playvox may persist as a standalone product.
- **Performance issues**: Clear browser cache, use Chrome, avoid having multiple Playvox tabs open. If slow loading persists, escalate to support with HAR file.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **NICE acquisition uncertainty** — Playvox was acquired by NICE. Significant feature overlap with NICE CXone WEM raises risks of forced migrations, feature deprecation, and pricing increases for existing Playvox customers. Evaluate your contract renewal terms carefully.
- **QA samples only 2-5% of interactions** — Unlike AI-first tools (Observe.AI, Convin, Balto) that score 100% of calls, Playvox QM uses manual + random sample evaluation. If you need 100% automated QA, Playvox alone won't cover it.
- **Separate instance per Zendesk instance** — If your org runs multiple Zendesk instances, you'll need a Playvox instance for each. This gets expensive and complicates reporting.
- **Frequent auto-logouts** — Multiple G2 reviewers report being logged out unexpectedly and losing unsaved work. Save frequently.
- **WFM adherence reports confusing** — The adherence report layout is not intuitive. Request a walkthrough from your Playvox CSM during onboarding.
- **Developer portal is JS-rendered** — API docs at developers.playvox.com may not load in all browsers. Use the help center articles as fallback.
- **Support responsiveness varies** — Some customers report support ghosting during onboarding. Escalate through your account executive if support is unresponsive.

## Related skills

- `/sales-nice-cxone` — NICE CXone platform help (Playvox's parent company CCaaS)
- `/sales-coaching` — Cross-platform coaching strategy and QA tool comparison
- `/sales-ccaas-selection` — Comparing CCaaS platforms (Genesys vs NICE vs Talkdesk vs Five9)
- `/sales-maestroqa` — MaestroQA platform help (alternative QA platform with stronger AI analytics)
- `/sales-observe-ai` — Observe.AI platform help (100% automated QA alternative)
- `/sales-balto` — Balto platform help (real-time agent coaching alternative)
- `/sales-calabrio` — Calabrio ONE platform help (standalone WEM alternative, now part of Verint)
- `/sales-verint` — Verint platform help (enterprise WEM alternative, acquired Calabrio)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: QA scorecard setup
**User says**: "How do I set up QA scorecards in Playvox for customer service calls?"
**Skill does**:
1. Walks through creating evaluation forms with weighted criteria
2. Explains sampling rules and how to configure random vs targeted evaluation
3. Covers calibration sessions for evaluator consistency
4. Sets up coaching triggers for low-scoring agents

### Example 2: NICE acquisition migration risk
**User says**: "We're on Playvox — should we migrate to NICE CXone or look at alternatives?"
**Skill does**:
1. Assesses which Playvox modules the user relies on
2. Identifies overlap with NICE CXone built-in WEM
3. Evaluates migration risk vs staying on Playvox
4. Compares alternatives (Calabrio, Verint, MaestroQA) for the user's specific needs

### Example 3: WFM scheduling issues
**User says**: "Playvox WFM forecasts are way off and schedules don't match actual volume"
**Skill does**:
1. Checks historical data quality and volume patterns
2. Reviews forecasting algorithm settings and interval configuration
3. Identifies common causes of forecast inaccuracy (seasonality, event spikes, data gaps)
4. Suggests adjustment workflow and re-forecasting cadence

## Troubleshooting

### Playvox is slow and keeps logging me out
**Cause**: Browser cache, multiple tabs, or session timeout settings
**Solution**: Clear browser cache, use Chrome, avoid multiple Playvox tabs. Check with IT if SSO session timeout is configured too aggressively. Save work frequently — Playvox doesn't auto-save in all modules.

### QA evaluations don't match what agents actually said
**Cause**: Sampling misses the worst interactions, or scorecard criteria are ambiguous
**Solution**: Increase sample size for agents with low CSAT. Tighten scorecard criteria with specific examples of pass/fail for each item. Run monthly calibration sessions where 3+ evaluators score the same interaction independently and compare.

### Support isn't responding during onboarding
**Cause**: Known support responsiveness issue reported by multiple customers
**Solution**: Escalate through your account executive, not just the support portal. Request a dedicated CSM for onboarding. Document your implementation blockers with screenshots and send to your AE directly.
