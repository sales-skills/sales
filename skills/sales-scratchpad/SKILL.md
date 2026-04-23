---
name: sales-scratchpad
description: "Scratchpad platform help — Salesforce-native AI workspace with call recording, AI field updates, pipeline sheets, Hygiene Monitor, and Deal Agent. Use when reps waste time manually updating Salesforce after calls, pipeline views in Salesforce are clunky and reps avoid them, CRM data is stale because reps don't log activities, evaluating Scratchpad vs Weflow vs Gong vs Clari for Salesforce teams, or Scratchpad AI credits running out too fast. Do NOT use for general CRM data cleanup strategy (use /sales-data-hygiene) or choosing a CRM (use /sales-crm-selection)."
argument-hint: "[describe what you need help with in Scratchpad]"
license: MIT
version: 1.0.0
tags: [sales, pipeline-management, conversation-intelligence, salesforce, platform]
---

# Scratchpad Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Scratchpad capability are you asking about?**
   - A) Call Recorder & Notetaker (transcription, summaries from Zoom/Meet/Teams)
   - B) AI Field Updates (auto-populate Salesforce fields from calls/emails/notes)
   - C) Hygiene Monitor (track missing fields, stale data, overdue tasks)
   - D) Sales Sheets & Kanban (pipeline views, board-style deal management)
   - E) Deal & Account Agent (AI assistant with custom prompts)
   - F) Command HUD (update Salesforce from any web page)
   - G) Pricing, plan selection, or comparison with another tool
   - H) Something else — describe it

2. **What's your Salesforce edition?**
   - A) Professional
   - B) Enterprise
   - C) Unlimited
   - D) Not sure

3. **How big is your sales team?**
   - A) Solo / under 5 reps
   - B) 5-20 reps
   - C) 20-100 reps
   - D) 100+ reps

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| General meeting note-taker selection (Fathom vs Fireflies vs Gong vs...) | `/sales-note-taker [question]` |
| Building a coaching program or reviewing a specific call | `/sales-coaching [question]` or `/sales-call-review [question]` |
| Revenue forecasting strategy across tools | `/sales-forecast [question]` |
| Deal health assessment methodology | `/sales-deal-inspect [question]` |
| CRM data quality strategy (not Scratchpad-specific) | `/sales-data-hygiene [question]` |
| Salesforce platform configuration | `/sales-salesforce [question]` |
| Weflow-specific questions | `/sales-weflow [question]` |

When routing, provide the exact command: "This is a {domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Scratchpad platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, credit system, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

**Before recommending another tool**, check whether Scratchpad handles the use case natively. Scratchpad bundles recording + AI field updates + pipeline views + hygiene monitoring — many questions that seem like they need a separate tool are actually covered by a different Scratchpad capability.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **Plan selection**: Free tier is viable for solo reps (100 credits/mo, 10 hrs recording). Solo ($19) unlocks full workspace + Hygiene Monitor. Team ($49) adds pooled credits + Gong integration. Don't over-buy.
- **Credit budgeting**: Single field update = 1 credit, multi-call update = 5, call summary = 1, record insights = 5. Solo gets 400/mo, Team gets 800/mo. Track usage before upgrading.
- **Rollout sequencing**: Start with Sales Sheets + Command HUD (immediate productivity, zero AI cost), then enable Call Recorder, then AI Field Updates once reps trust the tool.
- **Migration from Gong/Clari**: Scratchpad is lighter-weight — a Salesforce overlay, not a standalone revenue intelligence platform. Key tradeoffs: no public API, no VoIP capture, no standalone forecasting module. It complements rather than replaces Gong.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesforce-only** — no HubSpot, Dynamics, Pipedrive, or any other CRM. If the team isn't on Salesforce, Scratchpad is not an option.
- **No public API** — cannot build custom integrations or data pipelines. All data flows through the Scratchpad UI or into Salesforce.
- **AI credits are opaque** — the credit system isn't documented publicly with clear per-action costs. Monitor usage carefully on Solo/Team plans to avoid hitting limits mid-month.
- **Complex Salesforce workflows may not work** — opportunity creation and multi-step processes that rely on Salesforce page layouts or custom triggers may not be available in Scratchpad's interface.
- **No mobile app for pipeline management** — the mobile experience is limited; field reps needing mobile pipeline views should check Weflow's Mobile Copilot instead.
- **Not a Gong replacement** — Scratchpad complements conversation intelligence tools rather than replacing them. Team plan explicitly integrates with Gong. It's a productivity/CRM overlay, not a standalone revenue intelligence platform.
- **Opportunity management UX** — some users report the opportunity views are less polished than native Salesforce, especially for complex opportunity objects.

## Related skills

- `/sales-weflow` — Weflow platform help (primary competitor — Salesforce-native Revenue AI with activity capture, CI, forecasting)
- `/sales-gong` — Gong platform help (revenue intelligence, deeper analytics, Scratchpad Team integrates with Gong)
- `/sales-note-taker` — Comparing AI note-takers or wiring their APIs into CRM/warehouse
- `/sales-coaching` — Building a sales coaching program, onboarding reps
- `/sales-call-review` — Reviewing a single sales call for coaching insights
- `/sales-forecast` — Revenue forecasting strategy, pipeline coverage, commit validation
- `/sales-deal-inspect` — Deal health assessment, MEDDPICC extraction, stakeholder mapping
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment strategy
- `/sales-salesforce` — Salesforce platform configuration, Flows, Apex, custom objects
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Reps waste 30 minutes a day updating Salesforce
**User says**: "My reps spend half an hour after every call manually updating Salesforce fields. It's killing productivity."
**Skill does**:
1. Identifies AI Field Updates as the primary solution — auto-populates Salesforce fields from call transcripts
2. Recommends starting with Solo plan ($19/user/mo) for full workspace + 400 AI credits/mo
3. Explains the workflow: Scratchpad records the call → AI extracts field values → proposes or directly applies updates to Salesforce
4. Notes credit consumption: 1 credit per single field update, 5 per multi-call update
**Result**: Deployment plan that eliminates manual post-call CRM logging

### Example 2: Scratchpad vs Weflow for a 30-person Salesforce team
**User says**: "We're evaluating Scratchpad and Weflow. We use Salesforce Enterprise, 30 reps. Budget is tight."
**Skill does**:
1. Compares pricing: Scratchpad Team $49/user/mo vs Weflow Full Bundle $79/user/mo
2. Notes Weflow includes server-side activity capture (no browser needed) + standalone forecasting; Scratchpad is lighter and cheaper
3. Flags key tradeoffs: Weflow has deeper CI and forecasting; Scratchpad has better UX for daily pipeline management and works alongside Gong
4. Recommends Scratchpad if they already have Gong for CI and want a CRM overlay; Weflow if they want one tool for everything
**Result**: Feature-by-feature comparison with clear decision criteria

### Example 3: AI credits running out mid-month
**User says**: "We're on the Solo plan and keep hitting the AI credit limit before month-end."
**Skill does**:
1. Reviews credit consumption: 400/mo on Solo (4,800/yr)
2. Identifies likely causes: AI Field Updates on every call (5 credits for multi-call) + Record Insights (5 credits) burn fast
3. Suggests limiting auto-updates to high-value calls, using manual field updates for routine ones
4. If still insufficient, recommends Team plan ($49/user/mo, 800 credits/mo pooled across team)
**Result**: Credit optimization strategy with upgrade path

## Troubleshooting

### Complex Salesforce workflows fail in Scratchpad
**Symptom**: Can't create opportunities or run multi-step processes that work in native Salesforce
**Solution**: Scratchpad mirrors your Salesforce page layouts but doesn't support all custom triggers, validation rules, or multi-step wizards. For complex opportunity creation, use native Salesforce and let Scratchpad handle post-creation field updates and pipeline views. Check which Salesforce objects/fields Scratchpad can edit in Settings → Salesforce Configuration.

### AI-generated field values are inaccurate
**Symptom**: AI Field Updates propose wrong values for Salesforce fields after calls
**Solution**: Review the AI's proposed updates before auto-applying — use the "propose" mode rather than "direct apply" initially. Custom prompts in Deal & Account Agent can improve extraction accuracy for your specific terminology and sales methodology. Provide MEDDPICC/BANT/SPICED framework context in custom prompts.

### Scratchpad not showing expected Salesforce fields
**Symptom**: Sales sheets or Command HUD don't display certain Salesforce fields
**Solution**: Scratchpad inherits your Salesforce field-level security and page layout permissions. Verify the user's profile has read/write access to the missing fields. Check that the fields are on the Salesforce page layout for the relevant object. Newly created custom fields may take time to appear — try refreshing the Scratchpad configuration.
