---
name: sales-maxiq
description: "MaxIQ platform help — AI-native revenue intelligence with EchoIQ conversation intelligence, InspectIQ pipeline visibility, ForecastIQ AI-driven forecasting, 9 AI agents (NoteTaker, Radar, Summarizer, Coach, Taskmaster, Watchdog, Forecaster, Revenue Planner, Deal Mapper), usage-based pricing (no per-seat), Salesforce/HubSpot CRM sync. Use when EchoIQ not capturing all meeting types, AI Coach scoring criteria not matching your sales process, CRM fields not auto-populating from calls, InspectIQ deal signals seem inaccurate, ForecastIQ predictions not matching reality, comparing MaxIQ vs Gong vs Clari for revenue intelligence, setting up AI Radar keyword tracking, or evaluating usage-based CI pricing vs per-seat alternatives. Do NOT use for designing outbound cadences (use /sales-cadence) or cross-platform coaching programs (use /sales-coaching)."
argument-hint: "[describe what you need help with in MaxIQ]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, revenue-intelligence, forecasting, platform]
github: "https://github.com/delightiq"
---

# MaxIQ Platform Help

Help the user with MaxIQ platform questions — from EchoIQ conversation intelligence and AI agents through InspectIQ pipeline visibility, ForecastIQ forecasting, and CRM integration.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of MaxIQ do you need help with?**
   - A) EchoIQ — call recording, transcription, AI summaries, conversation capture
   - B) AI Agents — Coach, Radar, Taskmaster, Watchdog, Forecaster, Revenue Planner, Deal Mapper
   - C) InspectIQ — pipeline visibility, deal scoring, risk detection
   - D) ForecastIQ — revenue forecasting, signal-based predictions
   - E) CRM Sync — Salesforce/HubSpot auto-population, field mapping
   - F) Integrations — Zoom, Teams, Slack, Google Calendar, webhooks, Zapier
   - G) Admin & Billing — usage-based pricing, startup program, team management
   - H) Something else — describe it

2. **What's your MaxIQ plan?**
   - A) Startup Program (free 1 year)
   - B) Standard (usage-based)
   - C) Enterprise (custom)
   - D) Not sure / evaluating

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Cadence or sequence design | `/sales-cadence {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Revenue forecasting strategy | `/sales-forecast {user's question}` |
| Deal health inspection | `/sales-deal-inspect {user's question}` |
| Choosing a note-taker (comparing MaxIQ to alternatives) | `/sales-note-taker {user's question}` |
| General CRM-to-tool integration | `/sales-integration {user's question}` |

Otherwise, answer directly from platform knowledge below.

## Step 3 — MaxIQ platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in MaxIQ
2. **Configuration recommendations** — specific settings to change, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **Module gating** — note if the feature requires a specific MaxIQ module (InspectIQ, ForecastIQ, EchoIQ)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't assume public API access exists.** MaxIQ mentions custom APIs, webhooks, and Zapier, but there is no public API documentation. Automation relies on Zapier, webhooks, or custom API arrangements negotiated during contracting.
- **Don't confuse EchoIQ with the full MaxIQ suite.** EchoIQ is the conversation intelligence module. InspectIQ (pipeline), ForecastIQ (forecasting), and SuccessIQ (CS, launching soon) are separate modules with distinct capabilities.
- **Don't expect all 9 AI agents on day one.** Some features shown are in active development. Verify availability with MaxIQ before planning workflows around specific agents.
- **Don't overlook the Salesforce-only limitation for some features.** While MaxIQ lists HubSpot support, deeper integrations (bi-directional deal sync, pipeline views) may be Salesforce-first. Confirm HubSpot feature parity before committing.
- **Usage-based pricing needs monitoring.** Unlike per-seat pricing with predictable costs, usage-based billing can spike with high meeting volumes. Ask about usage dashboards and budget alerts during onboarding.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-note-taker` — Picking an AI note-taker or comparing MaxIQ to alternatives (Gong, Avoma, Clari Copilot, Fireflies, etc.)
- `/sales-coaching` — Building coaching programs that consume call data from MaxIQ or any CI tool
- `/sales-call-review` — Reviewing a specific call for coaching insights
- `/sales-forecast` — Revenue forecasting and deal health strategy
- `/sales-deal-inspect` — Inspecting individual deal health, MEDDPICC gaps
- `/sales-integration` — Connecting MaxIQ to other tools via native integrations, Zapier, or webhooks
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up AI Radar keyword tracking
**User says**: "How do I set up keyword tracking in EchoIQ to monitor competitor mentions?"
**Skill does**:
1. Confirms EchoIQ is active on the user's MaxIQ instance
2. Walks through AI Radar configuration for keyword, competitor, and theme monitoring
3. Explains how alerts work and where to find flagged mentions
4. Recommends starting with 5-10 high-priority competitors and key objection phrases
5. Shows how to route alerts to Slack for real-time team visibility
**Result**: AI Radar configured with competitor monitoring and Slack alerts

### Example 2: Connecting MaxIQ to Salesforce
**User says**: "Our CRM fields aren't auto-populating from calls — what's wrong?"
**Skill does**:
1. Checks Salesforce integration status in MaxIQ settings
2. Verifies field mapping configuration — which call data maps to which CRM fields
3. Identifies common issues: field mapping not configured, permissions insufficient, sync lag
4. Provides troubleshooting steps: re-authenticate, verify Salesforce field-level security, check sync logs
5. Confirms which data auto-populates (opportunity notes, MEDDIC fields, next steps) vs what requires manual review
**Result**: CRM sync diagnosed and fixed with verified field mappings

### Example 3: Evaluating MaxIQ vs Gong for revenue intelligence
**User says**: "We're on Gong but considering MaxIQ — is it worth switching?"
**Skill does**:
1. Routes to `/sales-note-taker` for full comparison
2. Notes key differentiators: MaxIQ's usage-based pricing vs Gong's per-seat + platform fees, MaxIQ's unified revenue journey (pre-sale through post-sale) vs Gong's CI-first approach
3. Flags trade-offs: MaxIQ is newer (smaller ecosystem, fewer integrations, active development), Gong is category leader (deeper analytics, larger community, mature API)
4. Recommends evaluating MaxIQ Startup Program (free 1 year) to test before committing
**Result**: Clear trade-off analysis with a path to low-risk evaluation

## Troubleshooting

### EchoIQ not capturing certain meeting types
**Symptom**: Some meetings are recorded and transcribed but others are missed
**Cause**: Calendar sync or meeting platform integration not configured for all meeting types
**Solution**: Verify Google Calendar/Office 365 sync is active. Check that Zoom and Teams integrations are both connected (MaxIQ captures from both but each requires separate setup). For ad-hoc meetings not on the calendar, confirm whether EchoIQ requires calendar events to trigger recording.

### AI Coach scoring doesn't match your sales process
**Symptom**: Coach feedback doesn't align with your team's methodology or priorities
**Cause**: Default scoring criteria may not match your specific sales methodology
**Solution**: Review and customize scoring criteria. MaxIQ's AI Coach reviews calls against sales methodology — if your team uses a custom framework (not standard MEDDIC/BANT), configure custom criteria. Calibrate by having managers review 10-15 scored calls and adjust weights.

### Usage-based costs higher than expected
**Symptom**: Monthly bill is significantly above budget estimates
**Cause**: High meeting volume, large team, or unexpected conversation capture (internal meetings being recorded)
**Solution**: Review usage dashboard. Identify whether internal meetings are being captured (and exclude them if not needed). Set up alerts for usage thresholds. Consider limiting recording to external customer-facing calls only if budget is a concern.
