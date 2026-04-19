---
name: sales-verint
description: "Verint Open Platform help — enterprise CX automation with Da Vinci AI bots (Quality Bot 100% QA, Coaching Bot real-time guidance, Wrap Up Bot auto-summaries, CX/EX Scoring, TimeFlex agent scheduling, Exact Transcription 80+ languages), WFM forecasting/scheduling/adherence, knowledge automation, IVA virtual assistants, speech/text analytics, financial compliance, Verint Marketplace 350+ listings. Use when Verint reports loading slowly or showing inconsistent data, Quality Bot not scoring interactions correctly, Coaching Bot recommendations irrelevant, WFM forecasts off vs actual volume, Verint API integration or developer portal questions, comparing Verint vs NICE vs Genesys WEM capabilities, or connecting Verint to your CCaaS or CRM. Do NOT use for choosing between CCaaS platforms (use /sales-ccaas-selection) or for QA tool comparison across vendors (use /sales-coaching)."
argument-hint: "[describe what you need help with in Verint]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, wem, cx-automation, platform]
---

# Verint Open Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which area?**
   - A) Da Vinci AI Bots (Quality Bot, Coaching Bot, Wrap Up Bot, etc.)
   - B) Workforce Management (forecasting, scheduling, adherence)
   - C) Quality Management (evaluations, scorecards)
   - D) CX Analytics / Speech & Text Analytics
   - E) Knowledge Automation
   - F) IVA / Virtual Assistants
   - G) Financial Compliance / Fraud & Security
   - H) API / Developer Portal / Integration
   - I) Calabrio migration / merger questions
   - J) Not sure / general question

2. **Deployment?**
   - A) Verint Cloud Platform
   - B) On-premises / hybrid
   - C) Calabrio ONE (now part of Verint)
   - D) Not sure

3. **What CCaaS/telephony?**
   - A) Amazon Connect
   - B) Genesys Cloud CX
   - C) NICE CXone
   - D) Five9
   - E) Cisco / Avaya / Mitel (on-prem)
   - F) Twilio Flex
   - G) Other / multiple

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between WEM/CCaaS vendors | `/sales-ccaas-selection {question}` |
| QA/coaching tool comparison across vendors | `/sales-coaching {question}` |
| Connecting Verint to CRM or CCaaS | `/sales-integration {question}` |
| Genesys Cloud CX-specific questions | `/sales-genesys {question}` |
| NICE CXone-specific questions | `/sales-nice-cxone {question}` |
| Talkdesk-specific questions | `/sales-talkdesk {question}` |
| Calabrio ONE-specific questions | `/sales-calabrio {question}` |

If the question is about using Verint itself, continue to Step 3.

## Step 3 — Verint platform reference

**Read `references/platform-guide.md`** for the full platform reference — Da Vinci AI bots, modules, integrations, API, pricing.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **AI Bot issues**: Check which Da Vinci bot applies, verify bot is enabled for the right queues/teams, review training data in Data Hub
- **WFM issues**: Check forecast algorithm settings, shrinkage %, historical data quality, adherence thresholds
- **Quality Bot issues**: Verify scoring rules, interaction scope, form assignment, compliance criteria
- **Performance issues**: Reduce date ranges, filter by team, check concurrent user load, try off-peak hours
- **API issues**: Verify developer portal access, API key permissions, check adaptors vs custom API

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Steep learning curve** — the platform is notoriously complex. Budget 2-4 weeks for admin training. Verint Academy exists but users report needing extensive self-directed learning beyond official materials.
- **Report latency and inconsistency** — reporting tools are outdated and can produce conflicting numbers. Cross-queue analysis often requires running the same report multiple times and reconciling in Excel.
- **Support resolution times** — bugs can take weeks or months to resolve. Document issues thoroughly and escalate via your account manager, not just the ticket queue.
- **Opaque pricing** — no public pricing. Contracts are custom and highly negotiable. Get feature lists in writing during procurement — features promised by sales may not be in your purchased tier.
- **Calabrio acquisition (Feb 2026)** — Verint acquired Calabrio. Existing Calabrio customers continue on Calabrio ONE. Da Vinci AI bots are being expanded to Calabrio customers. If you're on Calabrio, use `/sales-calabrio` for platform-specific help.
- **Mobile limitations** — mobile experience is limited compared to desktop. Schedule changes and time-off requests work better via desktop.
- **Data privacy** — there have been complaints about call recordings being used for AI training. Review your data processing agreement and opt-out options.

## Related skills

- `/sales-calabrio` — Calabrio ONE platform help (now part of Verint, positioned for midmarket)
- `/sales-ccaas-selection` — Compare CCaaS platforms (Genesys, NICE, Talkdesk, Five9, etc.)
- `/sales-coaching` — Sales coaching, QA, and agent training strategy across platforms
- `/sales-observe-ai` — Observe.AI — layer auto QA on top of any CCaaS
- `/sales-nice-cxone` — NICE CXone platform help
- `/sales-genesys` — Genesys Cloud CX platform help
- `/sales-talkdesk` — Talkdesk platform help
- `/sales-integration` — Connect tools with webhooks, Zapier, APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**User prompt**: "Our Verint Quality Bot is only scoring 40% of interactions — should be 100%."
**Skill does**: Walks through Quality Bot configuration — check scoring rule scope (queue/team filters), verify interactions are being recorded and available before the evaluation trigger fires, review rule syntax for overly narrow matching, check Data Hub data freshness.

**User prompt**: "We need to connect Verint WFM to our Genesys Cloud CX for real-time adherence."
**Skill does**: Covers BYOT integration — built-in Genesys adaptor, ACD data flow configuration, real-time adherence monitoring setup, and common issues with multi-ACD environments.

**User prompt**: "Verint reports take 5+ minutes to load and the numbers don't match what we see in the dashboard."
**Skill does**: Addresses known reporting limitations — reduce date range, filter to single team, check data pipeline latency between systems, export to Excel for cross-queue reconciliation.

## Troubleshooting

**Quality Bot scoring rules not triggering**
Verify rules are published (not draft), scoped to the correct queues/teams, and that interactions have completed recording before the scoring trigger fires. Check the Data Hub for data freshness — stale data means the bot has nothing to score. If using custom compliance criteria, test the rule against a known interaction to validate matching.

**WFM forecast accuracy consistently off**
Check historical data weighting — Verint may be using outdated patterns. Verify shrinkage percentages, special day handling, and whether recent volume trends are being ingested. If forecasts are off every Monday, check if the system is using weekly vs daily patterns. Adjust the forecast algorithm (short-term vs long-term weighting).

**Dashboard/reports slow and inconsistent**
Large datasets (200+ agents, multi-week views) cause rendering delays. Reduce date range to one week, filter to a single team, and load during off-peak hours. For cross-queue analysis, export individual reports and reconcile in Excel — the platform doesn't handle cross-queue aggregation well natively.
