---
name: sales-maestroqa
description: "MaestroQA platform help — conversation data QA platform with customizable scorecards, AI-powered coaching workflows, conversation analytics (AskAI), reverse-ETL to CRM/Slack/data warehouses, CSAT ingestion, chatbot QA monitoring. 60+ integrations (Zendesk, Freshdesk, Salesforce, Intercom, ServiceNow, Kustomer, Front, Gorgias, Gladly, Khoros Care, Five9, Talkdesk, Amazon Connect, NICE, Aircall, Gong, Zoom, Dialpad, Snowflake, BigQuery, Redshift). Rippit API (app.rippit.com/api/v1, token auth, 10 req/s). Use when QA scorecards not catching the right issues, coaching workflows feel disconnected from QA data, grading data export to warehouse, CSAT scores not correlating with QA scores, setting up MaestroQA integrations with helpdesk or phone system, MaestroQA API automation, or evaluating MaestroQA vs Observe.AI or Enthu.AI or Klaus. Do NOT use for CCaaS platform selection (use /sales-ccaas-selection) or real-time agent coaching during calls (use /sales-balto)."
argument-hint: "[describe what you need help with in MaestroQA — e.g., 'set up auto QA scorecards for compliance' or 'export grading data to Snowflake']"
license: MIT
version: 1.0.0
tags: [sales, qa, coaching, contact-center, platform]
---

# MaestroQA Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need?**
   - A) Set up or refine QA scorecards
   - B) Build coaching workflows from QA data
   - C) Configure conversation analytics / AskAI
   - D) Integrate with helpdesk, phone system, or CRM
   - E) Export data to warehouse or via API
   - F) Monitor AI chatbot quality
   - G) Ingest CSAT scores and correlate with QA
   - H) Other

2. **Current setup?**
   - A) New to MaestroQA (not yet connected)
   - B) Connected to helpdesk, building scorecards
   - C) Running QA, want to improve coaching
   - D) Mature — need analytics, API, or warehouse export

3. **Helpdesk / phone system?**
   - A) Zendesk / Freshdesk / Intercom / Front / Gorgias
   - B) Salesforce Service Cloud / ServiceNow / Dynamics 365
   - C) Five9 / Talkdesk / Amazon Connect / NICE / Genesys
   - D) Aircall / RingCentral / Dialpad / Twilio / Vonage
   - E) Other / multiple

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing QA tools (MaestroQA vs Observe.AI vs Enthu.AI) | `/sales-coaching` for cross-platform comparison |
| Choosing a CCaaS platform | `/sales-ccaas-selection` |
| Real-time agent coaching during calls | `/sales-balto` or `/sales-cresta` |
| Help desk platform selection | `/sales-helpdesk-selection` |
| Salesforce-specific questions | `/sales-salesforce` |
| Sales call review and coaching | `/sales-call-review` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — MaestroQA platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Scorecard design**: Start with 5-8 binary criteria per scorecard. Binary (yes/no) scores faster and more consistently than scaled (1-5). Add weighted sections for compliance vs quality vs sales effectiveness.
- **Coaching connection**: Link low QA scores to coaching sessions automatically — don't let scores sit in reports. Use reverse-ETL to push coaching tasks to Slack or your CRM.
- **Analytics adoption**: Start with AskAI for ad-hoc queries before building custom dashboards. AskAI answers natural language questions about conversation data without needing SQL.
- **API automation**: Use the Rippit API for bulk data export, CSAT ingestion, and agent provisioning. Rate limit is 10 req/s — batch operations where possible.
- **Chatbot QA**: Connect Ada, Sierra, Agentforce, or Forethought to grade bot conversations with the same scorecards used for human agents.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **AI features cost extra.** MaestroQA's AI-powered analytics and conversation intelligence are add-ons — budget separately from the base QA subscription.
- **Ticket sync delay.** Zendesk tickets typically take up to 3 hours to sync. Only tickets updated within the last 45 days sync. Plan QA workflows around this lag.
- **API tokens expire every 90 days** by default. Set up a rotation process or disable expiry for long-lived integrations.
- **Export format limitations.** Some users report inability to export grading progress as CSV/PDF directly from the UI. Use the Rippit API `POST /request-raw-export` endpoint as a workaround.
- **Dashboard customization is limited.** For advanced analytics, export to Snowflake/BigQuery and use external BI tools.
- **Learning curve.** MaestroQA requires upfront investment to configure scorecards, calibration sessions, and coaching workflows. Budget 2-4 weeks for initial setup with a dedicated QA admin.
- **Rate limits.** API is 10 req/s and 100 req/min. Batch operations (comments, metrics) accept up to 500 items per request — use these instead of individual calls.

## Related skills

- `/sales-coaching` — Sales coaching and training strategy across all QA and enablement platforms
- `/sales-observe-ai` — Observe.AI platform help (enterprise contact center QA with Auto QA, Agent Copilot)
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA, fast setup)
- `/sales-balto` — Balto platform help (real-time AI guidance during calls)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI)
- `/sales-convin` — Convin platform help (contact center QA + coaching + LMS)
- `/sales-ccaas-selection` — Choosing a CCaaS platform
- `/sales-helpdesk-selection` — Choosing a help desk platform
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Set up QA scorecards for a support team
**User says**: "We just connected Zendesk — how do I build QA scorecards for our support team?"
**Skill does**: Walks through scorecard design (binary criteria, weighted sections, compliance vs quality), calibration setup for evaluator consistency, and assignment rules for random sampling vs targeted review.

### Example 2: Export QA data to Snowflake
**User says**: "I need to get our grading data into Snowflake for custom reporting"
**Skill does**: Covers the native Snowflake integration setup and the Rippit API export endpoints (`POST /request-raw-export`, `GET /export-data/:id`) as alternatives, with rate limit considerations.

### Example 3: Correlate CSAT with QA scores
**User says**: "We want to see if our QA scores actually predict customer satisfaction"
**Skill does**: Explains the CSAT Bulk Ingestion API, how to connect Qualtrics/Delighted/Simplesat for native CSAT ingestion, and how to use AskAI to query correlations between QA scores and CSAT data.

## Troubleshooting

### QA scores don't correlate with customer satisfaction
**Cause**: Scorecards measure process compliance (did the agent follow the script) but not outcome quality (was the customer actually helped)
**Solution**: Add outcome-oriented criteria — resolution quality, customer effort reduction, empathy signals. Use CSAT ingestion to validate that QA criteria predict customer satisfaction. If they don't, revise criteria.

### Evaluators score the same ticket differently
**Cause**: Criteria are ambiguous or subjective
**Solution**: Use binary (yes/no) criteria instead of scaled (1-5). Run calibration sessions monthly — have 3+ evaluators score the same 5 tickets independently, then discuss disagreements. MaestroQA has built-in calibration tools for this.

### Coaching sessions feel disconnected from QA data
**Cause**: QA scores sit in MaestroQA dashboards but coaching happens in a separate tool or ad-hoc
**Solution**: Use MaestroQA's coaching workflows — low scores automatically trigger coaching sessions with specific call segments linked. Use reverse-ETL to push coaching tasks to Slack or your CRM so supervisors see them in their workflow.
