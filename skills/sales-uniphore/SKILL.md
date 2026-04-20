---
name: sales-uniphore
description: "Uniphore platform help — Business AI Cloud for enterprise contact centers with conversation intelligence, real-time agent assist (U-Assist), automated QA, CSATai predictive scoring, Emotion AI, self-service virtual agents, and CDP (ActionIQ). Use when setting up Uniphore conversation analytics, configuring U-Assist real-time guidance, building automated QA scorecards on 100% of calls, using CSATai to replace CSAT surveys, deploying Emotion AI for sentiment detection, integrating Uniphore with Genesys or Salesforce or Five9, comparing Uniphore vs NICE vs Verint vs Observe.AI, or troubleshooting ActionIQ CDP segments. Do NOT use for CCaaS platform comparison (use /sales-ccaas-selection) or general coaching strategy (use /sales-coaching)."
argument-hint: "[describe what you need help with in Uniphore — e.g., 'set up U-Assist for real-time agent guidance' or 'integrate Uniphore with Genesys Cloud']"
license: MIT
version: 1.0.0
tags: [sales, contact-center, conversation-intelligence, platform]
github: "https://github.com/uniphore"
---

# Uniphore Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Real-time agent guidance (U-Assist)
   - B) Conversation analytics and insights (U-Analyze)
   - C) Automated QA scoring
   - D) CSATai predictive satisfaction scoring
   - E) Self-service virtual agent (IVA)
   - F) CDP / ActionIQ marketing AI
   - G) Integration with CCaaS or CRM
   - H) Other

2. **Which Uniphore product are you using?**
   - A) Customer Service AI (contact center)
   - B) Marketing AI / CDP Agent (ActionIQ)
   - C) Sales AI (Sales Interaction Agent)
   - D) Business AI Suite (unified)
   - E) Not sure / evaluating

3. **Current contact center setup?**
   - A) Genesys Cloud CX
   - B) Cisco
   - C) Avaya
   - D) Amazon Connect
   - E) Five9
   - F) Twilio
   - G) Other CCaaS
   - H) Not applicable (marketing/sales use case)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Choosing between CCaaS platforms | `/sales-ccaas-selection [user's question]` |
| General coaching strategy (not Uniphore-specific) | `/sales-coaching [user's question]` |
| Meeting note-taking / conversation intelligence comparison | `/sales-note-taker [user's question]` |
| CDP comparison / selection | `/sales-cdp [user's question]` |
| Chatbot strategy (not Uniphore IVA) | `/sales-chatbot [user's question]` |
| Customer feedback / VoC strategy | `/sales-customer-feedback [user's question]` |

When routing, provide the exact command: "This is a {domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Uniphore-specific, continue to Step 3.

## Step 3 — Uniphore platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, architecture.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **For U-Assist setup**: Start with the highest-volume call type, build 3-5 guidance rules, measure handle time reduction over 2 weeks before expanding
- **For QA automation**: Define 5-10 scoring criteria based on existing manual QA rubric, run parallel scoring (manual vs AI) for 1 month to calibrate
- **For CSATai deployment**: Compare CSATai predictions against actual survey responses for the first 30 days to validate accuracy before retiring surveys
- **For ActionIQ CDP**: Start with a single high-value segment (e.g., churn-risk customers), validate against manual analysis, then expand
- **For integrations**: Map data flow between Uniphore and CCaaS/CRM first — which fields sync, which direction, what triggers sync

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Custom pricing only** — no self-serve. Expect ~$35/agent base + ~$1500/integration + platform fee. Budget 2-3 months for procurement.
- **ActionIQ requires SQL** — building audience segments requires writing SQL queries. No drag-and-drop segment builder. Plan for analyst resources.
- **Platform stability** — G2 reviews report intermittent platform failures with no bulk recovery mechanism (can't mass unpause campaigns after an outage).
- **No public API docs** — X-Platform has API capabilities, but documentation is behind enterprise auth. Request API access during contract negotiation.
- **Emotion AI accuracy varies** — multimodal sentiment detection works best on voice; text-only channels have lower accuracy. Calibrate thresholds per channel.
- **Integration timeline** — enterprise integrations (Genesys, Salesforce, Avaya) typically take 4-8 weeks for full deployment with custom data mapping.
- **Zero Data AI** — Uniphore's privacy-preserving architecture means some advanced analytics may have higher latency than competitors that process data centrally.

## Related skills

- `/sales-ccaas-selection` — Compare Genesys vs NICE vs Talkdesk vs Five9 for your contact center
- `/sales-coaching` — Sales coaching and training strategy across all platforms
- `/sales-note-taker` — AI meeting note-taker and conversation intelligence comparison
- `/sales-cdp` — CDP comparison and selection (covers ActionIQ alongside Segment, Tealium, etc.)
- `/sales-observe-ai` — Observe.AI — direct competitor for contact center AI
- `/sales-verint` — Verint Open Platform — enterprise CX automation competitor
- `/sales-cresta` — Cresta — enterprise contact center AI competitor
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

- `My CSAT survey response rate is 8% — how can Uniphore's CSATai help me score every interaction instead?`
- `I need real-time agent guidance during calls on our Genesys Cloud CX — walk me through setting up U-Assist`
- `We're evaluating Uniphore vs Observe.AI vs NICE for automated QA on 100% of calls — help me compare`

## Troubleshooting

- **ActionIQ segments returning unexpected results** — Check SQL syntax. Common issue: audience attributes must be written in SQL (no drag-and-drop). Verify joins between tables and test with a small sample before running at scale.
- **Platform errors with no mass unpause** — After a platform failure, campaigns/processes must be restarted individually. Document your active campaign list externally (spreadsheet) so you can recover quickly. Escalate to Uniphore support for bulk recovery options.
- **Emotion AI scoring seems inaccurate** — Calibrate per channel type (voice vs chat vs email). Voice has highest accuracy. For text channels, consider supplementing with keyword-based sentiment rules. Retrain thresholds after 1000+ scored interactions.
