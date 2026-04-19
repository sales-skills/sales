---
name: sales-oliv
description: "Oliv.ai platform help — AI-native revenue intelligence with modular agents (Notetaker, Meeting Insights, Deal Insights, CRM Manager, Forecaster, Coach, Deal Driver). Use when meeting transcriptions aren't syncing to CRM, AI scorecards not scoring calls correctly, deal health scores seem wrong, forecast agent not generating weekly reports, Oliv bot not joining meetings, CRM Manager agent not updating Salesforce fields, or comparing Oliv vs Gong pricing. Do NOT use for building a coaching program (use /sales-coaching) or choosing between note-takers (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Oliv.ai]"
license: MIT
version: 1.0.0
tags: [sales, revenue-intelligence, conversation-intelligence, platform]
github: "https://github.com/oliv-ai"
---

# Oliv.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Oliv do you need help with?**
   - A) Notetaker — transcription, recording, AI summaries ($19/user/mo)
   - B) Meeting Insights — scorecards, coaching insights, call scoring ($29/user/mo)
   - C) Deal Insights — deal health, win-loss analysis, methodology tracking, forecasting ($29/user/mo)
   - D) CRM Manager Agent — Salesforce/HubSpot auto-sync, field population
   - E) AI Agents — Forecaster, Coach, Deal Driver, Prospector, Researcher, etc.
   - F) Integrations — CRM, dialer, meeting recorder, Slack/Teams setup
   - G) Migration — moving from Gong, Fireflies, Avoma, or Clari
   - H) Something else

2. **What CRM are you using?**
   - A) Salesforce  B) HubSpot  C) Zoho  D) Pipedrive  E) Dynamics 365  F) Freshworks  G) Copper  H) Close  I) Other/None

3. **What's your team size and role?**

**If the user's request already provides most of this context, skip directly to Step 2.**

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:

| Problem domain | Route to |
|---|---|
| Choosing between Oliv and other note-takers | `/sales-note-taker {your question}` |
| Building a coaching program or onboarding | `/sales-coaching {your question}` |
| Revenue forecasting methodology | `/sales-forecast {your question}` |
| Reviewing a specific call for coaching | `/sales-call-review {your question}` |
| CRM data quality strategy | `/sales-data-hygiene {your question}` |
| Connecting Oliv to other tools | `/sales-integration {your question}` |

If the question is Oliv-specific, continue to Step 3.

## Step 3 — Oliv platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, agent types, setup workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- For setup issues: walk through the integration checklist (calendar → CRM → recorder → comms)
- For agent configuration: identify which agents match their workflow and plan tier
- For migration: outline the free migration path from their current tool
- For scoring/coaching: help configure custom scorecards aligned to their methodology

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Calendar integration is required** — Oliv won't work without Gmail or Outlook calendar connected. This is the first setup step, not optional.
- **Annual commitment only** — all pricing is based on annual commitment with annual payment. No monthly option.
- **No public API** — unlike Gong or Fireflies, Oliv has no documented public API. Integrations are through the web UI and native connectors only.
- **Module pricing stacks** — Notetaker ($19) + Meeting Insights ($29) + Deal Insights ($29) = $77/user/mo for the full stack. CRM Manager is an additional agent cost.
- **CRM Manager learns from 3 calls** — the agent needs at least 3 calls to learn your team's qualification methodology before it auto-applies.
- **Supported recorder alternative** — if you already have Fireflies, Gong, Avoma, Otter, or Fathom, you can skip the Oliv Notetaker module and use your existing recorder as the audio source.
- **Coach module coming soon** — the dedicated Coach Agent with AI Meeting Evaluation and personalized action plans is listed as "Coming Soon" as of April 2026.

## Related skills

- `/sales-note-taker` — Comparing Oliv against other meeting AI platforms? The note-taker skill covers 40+ platforms with pricing, API, and CRM depth comparisons.
- `/sales-coaching` — Building a coaching program? This skill covers frameworks, scorecards, and platform-specific coaching setup.
- `/sales-forecast` — Revenue forecasting methodology and pipeline coverage analysis.
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**Example 1:** "My Oliv bot isn't joining my Google Meet calls"
→ Verify calendar integration at web.oliv.ai, check that Google Meet is connected (should be automatic once calendar is linked), confirm bot permissions haven't been revoked.

**Example 2:** "Should I get Oliv or stick with Gong? We have 15 reps."
→ Route to `/sales-note-taker` for cross-platform comparison. Quick context: Oliv full stack at $77/user/mo × 15 = $13,860/yr vs Gong at ~$1,400/user/yr × 15 + platform fee = $26K+/yr.

**Example 3:** "How do I get Oliv to auto-fill MEDDIC fields in Salesforce?"
→ Enable CRM Manager agent, connect Salesforce via web.oliv.ai/salesforce/connect, wait for 3 calls for the agent to learn your methodology, then it auto-applies to all future calls.

## Troubleshooting

**Oliv bot not joining meetings**
- Verify calendar integration is active at web.oliv.ai
- For Zoom: install bot at web.oliv.ai/apps/zoom-meeting-bot
- For Teams/Meet: should auto-join once calendar is connected — check calendar permissions

**CRM fields not updating after calls**
- Confirm CRM connection is active (Salesforce: web.oliv.ai/salesforce/connect, HubSpot: web.oliv.ai/hubspot/connect)
- CRM Manager agent needs 3+ calls to learn your methodology before auto-applying
- Check that "Assign tasks to multiple objects" and "Advanced notes" are enabled in Salesforce

**AI scorecards not generating**
- Meeting Insights module ($29/user/mo) is required — Notetaker alone doesn't include scorecards
- Verify the user has a paid Meeting Insights seat, not just a free viewer seat
