---
name: sales-aviso
description: "Aviso AI platform help — end-to-end AI revenue operating system with 98%+ forecast accuracy, conversation intelligence, relationship intelligence, MIKI AI Chief of Staff, pipeline inspection, deal acceleration, and 200+ integrations. Use when setting up Aviso forecasting for complex revenue models (splits, overlays, consumption-based), confused about which Aviso forecast type to trust (AI vs sales vs adjusted), conversation intelligence not capturing buyer emotions or sentiment correctly, MIKI AI agent workflows not triggering or producing wrong outputs, Aviso dashboard customizations reverting unexpectedly, choosing between Aviso and Clari or Gong for revenue intelligence, CRM writeback not updating Salesforce or HubSpot fields, or evaluating Aviso pricing for your team size. Do NOT use for picking between note-takers generally (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Aviso AI question — forecasting, CI, MIKI, integrations, pricing, etc.]"
license: MIT
version: 1.0.0
tags: [sales, revenue-intelligence, forecasting, conversation-intelligence, platform]
---

# Aviso AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Aviso or connecting CRM (Salesforce, HubSpot, Dynamics 365)
   - B) Revenue forecasting (models, accuracy, AI vs adjusted vs sales forecast)
   - C) Conversation intelligence (transcription, sentiment, emotion analysis, coaching)
   - D) MIKI AI agent or GTM Agent Studio workflows
   - E) Pipeline inspection, deal acceleration, or deal health scoring
   - F) Relationship intelligence (Aviso Graph, org charts, engagement tracking)
   - G) Integrations (CRM writeback, data warehouse, conferencing, engagement tools)
   - H) Pricing or plan evaluation
   - I) Troubleshooting (dashboards, sync, scoring, forecast confusion)

2. **Which CRM are you connecting?**
   - A) Salesforce
   - B) HubSpot
   - C) Microsoft Dynamics 365
   - D) Other (Freshworks, Oracle, SAP, Zoho, Pipedrive)
   - E) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Aviso to other note-takers or CI tools | `/sales-note-taker {user's question}` |
| Comparing Aviso to other revenue forecasting tools | `/sales-forecast {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Aviso data | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Aviso platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data architecture, known issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Connect primary CRM first (Salesforce or Dynamics 365 is best-supported), then configure forecasting hierarchies, then enable conversation intelligence on conferencing tools (Zoom/Teams), then set up MIKI workflows.

**Forecast selection**: Use "AI Forecast" as the primary prediction (100+ variable model). "Sales Forecast" reflects manager judgment. "Adjusted Forecast" is the manual override. When they disagree, investigate the gap — AI may see signals managers don't, or managers may have context AI lacks.

**Evaluation tip**: Aviso is enterprise-only with custom pricing (~$1,000/user/yr). Request a pilot with historical data to validate the 98% accuracy claim against your actual pipeline. Insist on seeing accuracy metrics on YOUR data, not benchmarks.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API documentation.** Aviso Connect exists as an integration layer but has no public developer docs, endpoints, or auth specs. You cannot build custom integrations without engaging Aviso's team.
- **Three forecast types cause confusion.** AI Forecast, Sales Forecast, and Adjusted Forecast serve different purposes — users frequently report not understanding which to trust. AI Forecast is the model's prediction; Sales Forecast is the manager's call; Adjusted Forecast is the manual override.
- **Dashboard customizations may revert.** Multiple G2 reviewers report losing custom dashboard configurations after updates or reloads. Save/export configurations if possible.
- **Deal scoring lacks transparency.** The AI model considers 100+ variables but doesn't fully explain why a deal is scored high or low. This frustrates reps who disagree with the score.
- **Integration requires dev work.** Setting up CRM sync and data pipelines is not a self-service drag-and-drop — expect to involve your technical team or Aviso's implementation support.
- **Enterprise pricing only (~$1,000/user/yr).** No free tier, no self-serve. SMB teams will be priced out. Request multi-year discount and pilot period.

## Related skills

- `/sales-note-taker` — Comparing Aviso's conversation intelligence to dedicated note-takers (Fathom, Gong, Fireflies, etc.)
- `/sales-forecast` — Revenue forecasting strategy across platforms (Clari, Gong Forecast, Salesforce, Aviso)
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-gong` — Gong platform help (primary competitor for CI + deal intelligence)
- `/sales-clari-copilot` — Clari Copilot platform help (primary competitor for forecasting)
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing between Aviso and Clari for forecasting
**User says**: "Should I pick Aviso or Clari for revenue forecasting? I'm on Salesforce with a 50-person sales team."
**Skill does**:
1. Frames the key difference: Aviso is AI-native forecasting analyzing 100+ variables with claimed 98% accuracy; Clari focuses on structured forecast rollups, commit management, and executive visibility
2. Notes both are enterprise-priced (~$1,000/user/yr), so cost isn't the tiebreaker
3. Recommends Aviso if: complex revenue models (consumption-based, splits/overlays, multi-product), willingness to trust AI predictions, need for multi-CRM consolidation
4. Recommends Clari if: structured forecast governance, strong exec reporting, simpler pipeline models, larger existing Clari ecosystem
**Result**: Clear decision framework based on forecasting complexity and governance needs.

### Example 2: CRM writeback not updating Salesforce fields
**User says**: "Aviso isn't writing deal updates back to Salesforce after meetings. What's wrong?"
**Skill does**:
1. Checks that CRM Writeback is enabled in Aviso settings and Salesforce integration is connected
2. Verifies field mapping — Aviso needs to know which Salesforce fields to update
3. Checks Salesforce permissions — the connected user needs write access to opportunity fields
4. Notes that writeback may have a delay (Aviso processes data before writing)
5. Suggests checking Aviso's sync logs for error messages
**Result**: Specific CRM writeback troubleshooting steps.

### Example 3: Piping Aviso data into a data warehouse
**User says**: "Can I get Aviso forecasting data into Snowflake for my BI team?"
**Skill does**:
1. Notes that Aviso has no public API — direct programmatic access isn't available
2. Checks if Aviso supports native warehouse connectors (Snowflake, Redshift, BigQuery are listed as integrations)
3. Recommends engaging Aviso's implementation team to set up a data export pipeline
4. Suggests Aviso Connect (their integration layer) as the mechanism, but notes it requires Aviso's team to configure
5. As a fallback, CRM writeback → Salesforce → Snowflake pipeline if direct integration isn't available
**Result**: Practical data pipeline options despite no public API.

## Troubleshooting

### Forecast types are confusing — which one should I trust?
**Symptom**: Three different forecast numbers (AI Forecast, Sales Forecast, Adjusted Forecast) and unclear which is the "real" one.
**Cause**: Aviso provides multiple forecast views: AI Forecast is the model's prediction based on 100+ signals, Sales Forecast is the manager's judgment call, and Adjusted Forecast is the manual override.
**Solution**: Use AI Forecast as the baseline prediction. Compare it against Sales Forecast to find disagreements — investigate those deals specifically. Use Adjusted Forecast only for executive-level overrides with documented reasoning. Over time, track which forecast type was most accurate to calibrate trust.

### Dashboard customizations resetting after changes
**Symptom**: Custom dashboard layouts, filters, or views revert to defaults.
**Cause**: Known issue reported by multiple users — dashboard state may not persist reliably across sessions or after platform updates.
**Solution**: Document your dashboard configurations externally (screenshots, config notes). After customizing, verify the changes persist by logging out and back in. Report persistent issues to Aviso support — this is a known pain point they may have fixed in recent releases.

### Steep learning curve for new users
**Symptom**: Team struggles to adopt Aviso despite investment — features feel overwhelming.
**Cause**: Aviso covers 10+ modules (forecasting, CI, relationship intelligence, engagement, CS) and the breadth can paralyze new users.
**Solution**: Phase the rollout: start with forecasting only (the primary differentiator), add conversation intelligence in month 2, then relationship intelligence and MIKI agents in month 3. Assign a power user per team to become the internal champion. Request Aviso's onboarding playbook and insist on live training sessions, not just docs.
