---
name: sales-qeval
description: "QEval platform help — AI-powered contact center QA with 100% automated scoring, speech analytics, compliance monitoring, agent coaching, and VOC analytics. Use when QA scores are inconsistent across evaluators, only reviewing a sample of calls and missing problems, agents getting incorrect low grades, compliance alerts not triggering, reports are confusing or need training, integrating QEval with your CRM or telephony stack, or choosing between Manual vs AI plan. Do NOT use for general coaching strategy without a specific platform (use /sales-coaching) or comparing contact center QA tools (use /sales-coaching then check platforms)."
argument-hint: "[describe your QEval question — e.g., 'set up automated QA scoring for 100% of calls' or 'integrate QEval with our CRM']"
license: MIT
version: 1.0.0
tags: [sales, contact-center, qa, platform]
---

# QEval Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up automated QA scoring
   - B) Configuring compliance monitoring and alerts
   - C) Agent performance management and coaching
   - D) Reporting and analytics
   - E) Integrating QEval with CRM/telephony/WFM
   - F) Choosing between Manual ($40/user/mo) and AI ($100/user/mo) plans
   - G) VOC analytics and customer sentiment
   - H) Other

2. **Current setup?**
   - A) New to QEval — evaluating or onboarding
   - B) Using Manual plan, considering upgrade to AI
   - C) Using AI plan, need help with specific features
   - D) Integrating with existing contact center stack

3. **Contact center size?**
   - A) Small (<50 agents)
   - B) Mid-size (50-200 agents)
   - C) Large (200-1000 agents)
   - D) Enterprise (1000+ agents)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General coaching strategy, not QEval-specific | Run: `/sales-coaching {your question}` |
| Comparing QA platforms (MaestroQA, Observe.AI, etc.) | Run: `/sales-coaching` and check `references/platforms.md` for comparison |
| CCaaS platform selection | Run: `/sales-ccaas-selection {your question}` |
| CRM data quality | Run: `/sales-data-hygiene {your question}` |

If the question is QEval-specific, continue to Step 3.

## Step 3 — QEval platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

**Evaluation approach:**
- Start with the Manual plan ($40/user/mo) if your team does <500 evaluations/month — manual scoring with custom forms is sufficient
- Upgrade to AI plan ($100/user/mo) when you need 100% interaction coverage, automated scoring, or speech analytics
- For enterprise (1000+ agents), contact sales for volume pricing — custom discounts are standard

**Implementation sequence:**
1. Define evaluation criteria and custom scorecards (week 1)
2. Integrate with call recording system via API/SFTP (week 2)
3. Configure compliance alerts for critical errors (week 3)
4. Train QA team on dashboards and reporting (week 4)
5. Roll out agent-facing coaching features (week 5+)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Reporting requires training** — QEval's analytics dashboards are extensive but not intuitive. Plan 1-2 training sessions for QA leads before they'll be productive with reports. Export-to-presentation workflows help.
- **AI plan required for 100% coverage** — The Manual plan ($40/mo) only supports human-evaluated interactions (typically 1-5% sample). Automated scoring on 100% of calls requires the AI plan ($100/mo).
- **Scoring accuracy varies by use case** — QEval claims 94% accuracy on automated QA, but this depends on scorecard complexity and call types. Calibrate with manual reviews during the first 30 days.
- **Custom pricing for enterprise** — Published pricing is $40-100/user/mo, but enterprise deals are negotiated. No self-serve signup — demo required.
- **30-day deployment timeline** — QEval quotes 30 days for full deployment including integrations. Factor in additional time for scorecard design and team training.
- **No public API docs** — API exists for integrations (CRM, telephony, WFM) but documentation is provided during onboarding, not publicly available. Request API access early in the evaluation.
- **Agents may receive incorrect low grades** — G2 reviewers report occasional false-low automated scores. Build a QA dispute process and calibrate AI scoring against manual reviews monthly.

## Related skills

- `/sales-coaching` — Sales coaching strategy across all platforms — onboarding, role-plays, manager coaching, certifications
- `/sales-observe-ai` — Observe.AI platform help (enterprise contact center AI, 100% Auto QA, Agent Copilot)
- `/sales-maestroqa` — MaestroQA platform help (customizable QA scorecards, coaching workflows, 60+ integrations)
- `/sales-convin` — Convin platform help (100% automated QA, Real-Time Assist, AI Phone Call agent)
- `/sales-balto` — Balto platform help (real-time AI guidance, automated QA, compliance monitoring)
- `/sales-enthu` — Enthu.AI platform help (contact center QA with auto-scoring, affordable)
- `/sales-ccaas-selection` — Comparing CCaaS platforms (Genesys, NICE, Talkdesk, Five9)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up automated QA
**User says**: "We're only reviewing 2% of calls manually — how do I get QEval to score everything automatically?"
**Skill does**: Explains the AI plan requirement, walks through automated scorecard configuration, sets calibration expectations, and recommends a 30-day parallel run (AI + manual) to validate accuracy before trusting automated scores exclusively.

### Example 2: Integration with existing stack
**User says**: "How do I connect QEval to our Five9 call recording and Salesforce CRM?"
**Skill does**: Covers QEval's integration methods (API, SFTP, cloud storage), explains the "bring your own tech stack" approach, walks through connecting telephony for call ingestion and CRM for agent metadata, and sets timeline expectations for integration setup.

### Example 3: Compliance monitoring
**User says**: "We need real-time alerts when agents miss required disclosures on calls"
**Skill does**: Explains QEval's compliance monitoring module, walks through configuring critical error notifications, setting up custom compliance criteria in evaluation forms, and using the risk mitigation dashboard to track compliance trends.

## Troubleshooting

### Reports are confusing and hard to interpret
**Cause**: QEval's reporting is extensive but requires familiarity with its dashboard structure and export options.
**Solution**: Start with the KPI Dashboard for high-level metrics before diving into granular reports. Schedule a training session with QEval support (24/7 available). Use the export-to-presentation feature to build recurring report templates that your team can reuse.

### Agents getting incorrect low automated scores
**Cause**: AI scoring calibration may not match your specific evaluation criteria, especially for nuanced soft-skill assessments.
**Solution**: Run a 30-day parallel scoring period where both AI and human evaluators score the same interactions. Compare results and adjust scorecard weights. Use QEval's calibration tools to align AI scoring with your team's standards. Build a dispute process so agents can flag scores for human review.

### Integration not pulling all call recordings
**Cause**: SFTP sync timing or API connection issues with your call recording platform.
**Solution**: Verify the connection method (API vs SFTP vs cloud storage) matches your recording platform's export capabilities. Check sync frequency settings — real-time API is more reliable than batch SFTP for high-volume centers. Contact QEval support at support@QEvalpro.com for integration-specific troubleshooting.
