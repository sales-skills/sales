---
name: sales-laserfocus
description: "Laserfocus platform help — Salesforce overlay with Stacks, table views, bulk editing, precache technology, and task management. Use when reps find native Salesforce UI too complex for daily pipeline work, Salesforce data entry is slow and reps skip updates, evaluating Laserfocus vs Scratchpad vs Weflow vs Dooly for Salesforce overlay, need a lightweight Salesforce alternative without replacing the CRM, or Laserfocus Stacks or Field Groups not working as expected. Do NOT use for general CRM selection (use /sales-crm-selection) or conversation intelligence / call recording (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Laserfocus]"
license: MIT
version: 1.0.0
tags: [sales, pipeline-management, salesforce, platform]
---

# Laserfocus Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Laserfocus capability are you asking about?**
   - A) Stacks (workflow containers, automated scheduling)
   - B) Table views & bulk editing (spreadsheet-style Salesforce editing)
   - C) Field Groups (custom field clusters by sales stage)
   - D) Task management & activity timeline
   - E) Pricing, plan selection, or comparison with another tool
   - F) Something else — describe it

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
| General meeting note-taker selection | `/sales-note-taker [question]` |
| Scratchpad-specific questions | `/sales-scratchpad [question]` |
| Weflow-specific questions | `/sales-weflow [question]` |
| Revenue forecasting strategy across tools | `/sales-forecast [question]` |
| CRM data quality strategy (not Laserfocus-specific) | `/sales-data-hygiene [question]` |
| Salesforce platform configuration | `/sales-salesforce [question]` |
| Choosing a CRM | `/sales-crm-selection [question]` |

When routing, provide the exact command: "This is a {domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Laserfocus platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **Plan selection**: Free tier works for trying it (2 stacks, 2 views, 3 field groups, 3-record bulk edit). Pro ($30/user/mo) unlocks unlimited everything. Team (custom) adds Salesloft/Outreach integration, signal-based tasks, and org-level templates.
- **Rollout**: Start with table views + bulk editing for immediate time savings, then introduce Stacks for recurring workflows, then Field Groups for stage-specific layouts.
- **Migration from Scratchpad/Weflow**: Laserfocus is simpler and lighter — a pure UI overlay with no call recording, no CI, no forecasting. Best for teams that want a cleaner Salesforce interface and nothing more.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesforce-only** — no HubSpot, Dynamics, Pipedrive, or any other CRM. If the team isn't on Salesforce, Laserfocus is not an option.
- **No public API** — cannot build custom integrations or data pipelines. Data flows through the UI and into Salesforce.
- **No call recording or conversation intelligence** — this is a CRM overlay, not a meeting recorder. Pair with Gong, Fathom, or Fireflies for CI.
- **No collaboration features** — cannot share records or communicate within the tool. Must return to Salesforce or Slack for collaboration.
- **YC "Inactive" status** — Laserfocus is a Y Combinator W20 company listed as inactive with 2-3 employees. Evaluate longevity risk before committing.
- **Limited integrations on lower tiers** — Salesloft, Outreach, native phone, and custom objects are Team-only (custom pricing).
- **Free tier is very limited** — 2 stacks, 2 view imports, 3 field groups, 3-record bulk edit. Useful for evaluation only.

## Related skills

- `/sales-scratchpad` — Scratchpad platform help (primary competitor — Salesforce-native AI workspace with call recording, AI field updates, pipeline sheets)
- `/sales-weflow` — Weflow platform help (Salesforce-native Revenue AI with activity capture, CI, forecasting)
- `/sales-note-taker` — Comparing AI note-takers or wiring their APIs into CRM/warehouse
- `/sales-forecast` — Revenue forecasting strategy, pipeline coverage
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment strategy
- `/sales-salesforce` — Salesforce platform configuration, Flows, Apex, custom objects
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Reps avoid Salesforce because the UI is overwhelming
**User says**: "My reps hate updating Salesforce. They say there are too many fields and the interface is slow."
**Skill does**:
1. Identifies Laserfocus table views as the primary solution — spreadsheet-style editing with only relevant fields
2. Recommends starting with Pro plan ($30/user/mo) for unlimited views and bulk editing
3. Explains Field Groups: create stage-specific clusters so reps only see relevant fields at each deal stage
4. Notes precache technology loads data locally for sub-100ms interactions
**Result**: Deployment plan that simplifies the Salesforce experience for reps

### Example 2: Laserfocus vs Scratchpad for a 15-person team
**User says**: "We're evaluating Laserfocus and Scratchpad. Small Salesforce team, 15 reps, no Gong."
**Skill does**:
1. Compares: Laserfocus Pro $30/user/mo vs Scratchpad Solo $19/Team $49
2. Notes Laserfocus is simpler — pure UI overlay, no call recording, no AI field updates
3. Scratchpad includes Call Recorder, AI Field Updates, Hygiene Monitor, and Deal Agent
4. Recommends Scratchpad if team needs any CI/recording features; Laserfocus if they purely want a cleaner Salesforce data entry interface
**Result**: Clear comparison with decision criteria based on whether CI is needed

### Example 3: Setting up Stacks for weekly pipeline reviews
**User says**: "How do I set up recurring pipeline review workflows in Laserfocus?"
**Skill does**:
1. Explains Stacks — workflow containers that organize tasks and processes
2. Shows how to create an automated Stack that triggers weekly
3. Configures table view with pipeline fields, filters for the rep's deals
4. Notes Stack Scheduling is limited to 2 on Free tier — Pro unlocks unlimited
**Result**: Working recurring pipeline review workflow

## Troubleshooting

### Stacks not showing expected Salesforce data
**Symptom**: Table views in Stacks don't display certain fields or records
**Solution**: Laserfocus inherits Salesforce field-level security and sharing rules. Verify the user's profile has read/write access to the missing fields. Try re-importing the Salesforce view. On Free tier, only 2 view imports are allowed — upgrade to Pro for unlimited.

### Bulk editing limited to 3 records
**Symptom**: Can only select and edit 3 records at once
**Solution**: This is a Free tier limitation. Upgrade to Pro ($30/user/mo) for unlimited bulk editing. On Pro, select multiple records in table view and edit fields inline across all selected records.

### Slow initial load despite "sub-100ms" claim
**Symptom**: First load after login takes several seconds
**Solution**: Laserfocus uses precache technology that loads Salesforce data onto the user's local machine. The initial cache build takes time (especially for large Salesforce orgs), but subsequent interactions should be fast. If consistently slow, check browser memory and consider reducing the number of active Stacks/views.
