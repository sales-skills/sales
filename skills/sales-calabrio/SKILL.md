---
name: sales-calabrio
description: "Calabrio ONE platform help — workforce engagement management with WFM forecasting/scheduling/adherence, quality management automated scorecards, interaction analytics speech/text/sentiment, bot analytics for chatbot/voicebot performance, call recording, performance management coaching. Use when setting up Calabrio WFM schedules or forecasts, Calabrio QM evaluation forms not scoring correctly, Calabrio analytics dashboards loading slowly, Calabrio API integration for schedule or absence data, Calabrio crashing or unstable in cloud deployment, or connecting Calabrio to Amazon Connect or Genesys or Salesforce. Do NOT use for choosing between CCaaS platforms (use /sales-ccaas-selection) or for QA tool comparison across vendors (use /sales-coaching)."
argument-hint: "[describe what you need help with in Calabrio ONE]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, wem, platform]
---

# Calabrio ONE Platform Help

> **Note**: Verint acquired Calabrio in February 2026. Calabrio ONE continues as Verint's midmarket offering. Da Vinci AI bots are being expanded to Calabrio customers. For Verint Open Platform (enterprise) questions, use `/sales-verint`.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Calabrio module?**
   - A) Workforce Management (forecasting, scheduling, adherence)
   - B) Quality Management (scorecards, evaluations, coaching)
   - C) Interaction Analytics (speech/text analytics, sentiment)
   - D) Bot Analytics (chatbot/voicebot performance)
   - E) Call Recording
   - F) Performance Management / Agent Coaching
   - G) API / Integration
   - H) GovSuite (FedRAMP)
   - I) Not sure / general question

2. **Deployment type?**
   - A) Calabrio ONE Cloud
   - B) Classic (on-prem / hybrid)
   - C) Not sure

3. **Which CCaaS platform?**
   - A) Amazon Connect
   - B) Genesys Cloud CX
   - C) NICE CXone
   - D) Five9
   - E) Cisco / Avaya / Mitel (on-prem)
   - F) Twilio Flex
   - G) Other / standalone

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between WEM/WFM vendors | `/sales-ccaas-selection {question}` |
| QA tool comparison (Calabrio vs Observe.AI vs Balto) | `/sales-coaching {question}` |
| Connecting Calabrio to CRM or CCaaS | `/sales-integration {question}` |
| Amazon Connect-specific questions | `/sales-ccaas-selection {question}` |
| Genesys Cloud CX-specific questions | `/sales-genesys {question}` |
| NICE CXone-specific questions | `/sales-nice-cxone {question}` |

If the question is about using Calabrio itself, continue to Step 3.

## Step 3 — Calabrio platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **WFM issues**: Check forecast algorithm settings, shrinkage %, schedule generation rules, real-time adherence thresholds
- **QM issues**: Verify scorecard criteria weighting, auto-evaluation rules, form assignment scope
- **Analytics issues**: Check data pipeline latency, filter scope, dashboard widget configuration
- **API issues**: Verify personal access token permissions, rate limit usage (500/min, 10K/hr), tenant URL format
- **Performance issues**: Check concurrent user load, dataset size, browser compatibility

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Cloud version stability** — users report crashes under heavy workload, especially when loading large team schedules. Clear browser cache, reduce date range, or load by team instead of org.
- **Support resolution times** — bugs can take weeks or months to resolve. Document issues thoroughly with screenshots and steps to reproduce. Escalate via your account manager, not just the ticket queue.
- **Feature parity between sales pitch and product** — verify specific features are available on your tier before purchasing. Get feature lists in writing during procurement.
- **Schedule trading is one-way** — once you trade schedules with a coworker, you can't reverse the trade through the UI. Plan trades carefully.
- **Reporting complexity** — generating reports across multiple queues/departments requires running the same report multiple times. Export to Excel for cross-queue analysis.
- **Android app limitations** — the mobile app interface is limited compared to desktop. Schedule changes and time-off requests work better via desktop.
- **API token lifecycle** — personal access tokens stop working if the creating user's leaving date passes or the user is deleted. Use a service account for integrations.
- **Historical Data API uses a different auth** — tenant keys (not personal access tokens) are required for historical data APIs. Contact your Calabrio rep for the tenant key.

## Related skills

- `/sales-verint` — Verint Open Platform help (parent company — enterprise CX automation, Da Vinci AI bots)
- `/sales-ccaas-selection` — Compare CCaaS platforms (Genesys, NICE, Talkdesk, Five9, etc.) to find the right contact center
- `/sales-coaching` — Sales coaching, QA, and agent training strategy across platforms
- `/sales-observe-ai` — Observe.AI — layer auto QA on top of any CCaaS
- `/sales-genesys` — Genesys Cloud CX platform help
- `/sales-nice-cxone` — NICE CXone platform help
- `/sales-talkdesk` — Talkdesk platform help
- `/sales-integration` — Connect tools with webhooks, Zapier, APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**User prompt**: "Our Calabrio WFM forecasts are way off — actual call volume is 30% higher than predicted every Monday."
**Skill does**: Walks through forecast algorithm configuration — check historical data weighting, special day handling for Mondays, shrinkage assumptions, and whether recent volume trend data is being ingested correctly.

**User prompt**: "I need to pull schedule data from Calabrio into our data warehouse via API."
**Skill does**: Covers the WFM API — personal access token setup, tenant URL format, read schedule permissions, rate limits (500/min), and the schedule endpoint for bulk export.

**User prompt**: "Calabrio keeps crashing when I try to load the team schedule for our 200-agent department."
**Skill does**: Addresses the known performance issue with large datasets — suggests loading by team instead of full department, reducing date range, clearing browser cache, and checking if the issue is reproducible across browsers.

## Troubleshooting

**Dashboard/schedule takes minutes to load**
Large datasets (200+ agents, multi-week views) cause slow rendering in the cloud version. Reduce the date range to one week, filter to a single team, or load during off-peak hours. If persistent, file a support ticket referencing the specific view and agent count.

**QM evaluations not auto-scoring**
Check that auto-evaluation rules are enabled and scoped to the correct queues/teams. Verify the scorecard form is published (not draft). Ensure the interaction was recorded and the recording is available in the system before the evaluation trigger fires.

**API personal access token returns 401**
The token may have expired or the creating user may have a past leaving date. Generate a new token from a service account. Check that the required permissions (Read/Write forecast, organization, request, schedule) are enabled on the user's role.
