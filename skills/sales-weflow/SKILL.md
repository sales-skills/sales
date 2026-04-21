---
name: sales-weflow
description: "Weflow platform help — Salesforce-native Revenue AI with activity capture, conversation intelligence, and deal forecasting. Use when Salesforce data is stale because reps don't update it, emails and meetings aren't logging to Salesforce automatically, need AI call recording and transcription inside Salesforce, pipeline forecasts are inaccurate because CRM data is garbage, or comparing Weflow vs Gong vs Clari vs Scratchpad for Salesforce teams. Do NOT use for general CRM data cleanup strategy (use /sales-data-hygiene) or choosing a CRM (use /sales-crm-selection)."
argument-hint: "[describe what you need help with in Weflow]"
license: MIT
version: 1.0.0
tags: [sales, revenue-intelligence, conversation-intelligence, salesforce, platform]
---

# Weflow Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Weflow module are you asking about?**
   - A) Activity & Contact Capture (email/meeting auto-sync to Salesforce)
   - B) Conversation Intelligence (AI notetaker, transcription, summaries)
   - C) Deal Intelligence & Forecasting (pipeline, deal health, forecast roll-ups)
   - D) Ask Weflow AI (natural language queries on Salesforce data)
   - E) Chrome Extension (update Salesforce from anywhere)
   - F) Mobile Copilot (in-person meetings, field updates)
   - G) Pricing, plan selection, or comparison with another tool
   - H) Something else — describe it

2. **What's your Salesforce edition?**
   - A) Professional
   - B) Enterprise
   - C) Unlimited
   - D) Not sure

3. **How big is your sales team?**
   - A) Under 10 reps
   - B) 10-39 reps
   - C) 40-100 reps
   - D) 100+ reps

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| General meeting note-taker selection (Fathom vs Fireflies vs Gong vs...) | `/sales-note-taker [question]` |
| Building a coaching program or reviewing a specific call | `/sales-coaching [question]` or `/sales-call-review [question]` |
| Revenue forecasting strategy across tools | `/sales-forecast [question]` |
| Deal health assessment methodology | `/sales-deal-inspect [question]` |
| CRM data quality strategy (not Weflow-specific) | `/sales-data-hygiene [question]` |
| Salesforce platform configuration | `/sales-salesforce [question]` |

When routing, provide the exact command: "This is a {domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Weflow platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

**Before recommending another platform skill**, check whether Weflow handles the use case natively. Weflow bundles activity capture + CI + forecasting — many questions that seem like they need a separate tool are actually covered by a different Weflow module.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **Module selection**: Match modules to pain points. Activity Capture alone ($19) solves stale CRM data. CI ($39) adds call recording. Full bundle ($79) adds forecasting. Don't over-buy.
- **Salesforce API limits**: Weflow consumes Salesforce API calls. Check their current API usage (Setup → Company Information → API Requests, Last 24 Hours) before deploying. The managed package reduces API consumption.
- **Rollout sequencing**: Start with Activity Capture (immediate value, zero behavior change required), then add CI after reps trust the auto-logging, then layer forecasting once data quality improves.
- **Migration from Gong/Clari**: Weflow positions itself at 50% of Gong's price. Key tradeoffs: Salesforce-only (no HubSpot), no VoIP/SMS capture, smaller ecosystem.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesforce-only** — no HubSpot, Dynamics, Pipedrive, or any other CRM. If the team isn't on Salesforce, Weflow is not an option.
- **No public API** — cannot build custom integrations or data pipelines. All data flows through the Weflow UI or Salesforce.
- **No VoIP/SMS capture** — phone calls and text messages are not recorded or synced. Only email, calendar, and video meetings.
- **Salesforce API consumption** — activity capture makes API calls against your org's limits. Monitor via Setup → Company Information. Install the managed package to reduce API call volume.
- **Minimum 10 users for bundles** — volume discounts start at 20+ users. Under 10, you pay full per-module pricing.
- **Not suited for 1,000+ rep orgs** — Weflow targets mid-market. Enterprise forecast hierarchies at very large scale may need Clari.
- **New Salesforce field lag** — when a custom field is created in Salesforce, it can take time before Weflow recognizes and syncs it.

## Related skills

- `/sales-note-taker` — Comparing AI note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring their APIs into CRM/warehouse
- `/sales-coaching` — Building a sales coaching program, onboarding reps, role-play design
- `/sales-call-review` — Reviewing a single sales call for coaching insights and scoring
- `/sales-forecast` — Revenue forecasting strategy, pipeline coverage, commit validation
- `/sales-deal-inspect` — Deal health assessment, MEDDPICC extraction, stakeholder mapping
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment strategy
- `/sales-salesforce` — Salesforce platform configuration, Flows, Apex, custom objects
- `/sales-gong` — Gong platform help (primary Weflow competitor for conversation intelligence)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Reps not updating Salesforce
**User says**: "My reps spend 30 minutes a day manually logging activities in Salesforce. Half the fields are stale or empty."
**Skill does**:
1. Identifies Activity & Contact Capture ($19/user/mo) as the right module
2. Explains server-side auto-sync of emails, meetings, and contacts — no browser extension needed
3. Covers 24-month historical backfill and managed package installation
4. Recommends monitoring Salesforce API usage before and after deployment
**Result**: Auto-sync plan that eliminates manual logging with zero behavior change

### Example 2: Weflow vs Gong for a 25-person Salesforce team
**User says**: "We're evaluating Weflow and Gong for conversation intelligence. We use Salesforce Enterprise. 25 reps."
**Skill does**:
1. Compares pricing: Weflow full bundle $79/user/mo vs Gong ~$100-133/user/mo
2. Notes Weflow's native Salesforce integration vs Gong's CRM connector approach
3. Flags key tradeoffs: Gong has deeper analytics ecosystem and VoIP support; Weflow includes activity capture and forecasting in the bundle
4. Recommends trying the 14-day Weflow trial alongside a Gong pilot
**Result**: Feature-by-feature comparison with pricing math and recommendation

### Example 3: Forecast accuracy is bad because CRM data is stale
**User says**: "Our pipeline forecast is off by 30% every quarter because deal data in Salesforce is never current."
**Skill does**:
1. Diagnoses the root cause: forecast accuracy depends on CRM data, CRM data depends on reps updating it
2. Recommends Activity Capture first to auto-log activities, then CI to auto-fill deal fields from calls
3. Explains Deal Intelligence module's 50+ AI health signals and forecast roll-ups
4. Suggests phased rollout: capture → CI → forecasting
**Result**: Phased deployment plan that fixes data quality first, then layers forecasting

## Troubleshooting

### Salesforce API limits hitting after Weflow deployment
**Symptom**: "API Request Limit Exceeded" errors after enabling Weflow
**Solution**: Install the Weflow managed Salesforce package — it reduces API call volume by running operations inside the org. Check current usage at Setup → Company Information → API Requests, Last 24 Hours. If still hitting limits, reduce sync frequency or upgrade Salesforce edition for higher API allocation.

### Emails or meetings not syncing to Salesforce
**Symptom**: Activity capture enabled but some emails/meetings don't appear on Salesforce records
**Solution**: Verify the email domain is connected (Google Workspace or M365). Check Weflow's sync settings — some email types may be excluded by default. Ensure the Salesforce user has write permissions on EmailMessage, Task, and Event objects. Check if Salesforce Einstein Activity Capture is also running (conflicts possible).

### Chrome extension not showing Salesforce fields
**Symptom**: Chrome extension loads but doesn't display the expected Salesforce fields for editing
**Solution**: Verify the page layout in Salesforce includes the fields you want to edit. Weflow's extension mirrors your Salesforce field layout — if a field isn't on the layout, it won't appear. Also check that the Salesforce user profile has field-level security permissions on those fields.
