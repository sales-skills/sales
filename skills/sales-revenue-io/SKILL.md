---
name: sales-revenue-io
description: "Revenue.io platform help — Salesforce-native revenue orchestration with RingDNA dialer, Guided Selling cadences, Moments real-time coaching, conversation intelligence, and Revenue Intelligence dashboards. Use when calls not logging to Salesforce from Revenue.io, setting up Guided Selling cadences and task prioritization, configuring Moments real-time coaching notifications, choosing between Activate vs Engage vs Orchestrate tiers, dialer call dispositions not syncing to Salesforce, or Revenue.io vs Gong for conversation intelligence. Do NOT use for general conversation intelligence strategy (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in Revenue.io]"
license: MIT
version: 1.0.0
tags: [sales, revenue-orchestration, conversation-intelligence, dialer, platform]
---

# Revenue.io Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your role?**
   - A) SDR/BDR — dialing and prospecting
   - B) AE — deals, forecasting, call coaching
   - C) Sales manager — team coaching, performance dashboards
   - D) RevOps — configuration, data, integrations
   - E) Evaluating Revenue.io vs alternatives

2. **Which Revenue.io module?**
   - A) RingDNA Dialer — click-to-dial, local presence, voicemail drop
   - B) Guided Selling — cadences, sequences, task prioritization
   - C) Moments — real-time in-call coaching and notifications
   - D) Conversation Intelligence — call recording, transcription, scoring
   - E) Revenue Intelligence — dashboards, forecasting, deal scoring
   - F) Ask Revenue — AI-powered queries
   - G) General setup / evaluation

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Revenue.io to other CI tools | `/sales-note-taker [your comparison question]` |
| Building outbound sequences (not Revenue.io-specific) | `/sales-cadence [your cadence question]` |
| Coaching program design | `/sales-coaching [your coaching question]` |
| Reviewing a specific call recording | `/sales-call-review [paste transcript]` |
| Revenue forecasting methodology | `/sales-forecast [your forecast question]` |
| Salesforce CRM configuration | `/sales-salesforce [your CRM question]` |

When routing to another skill, provide the exact command.

## Step 3 — Revenue.io platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Dialer issues**: Check Salesforce CTI adapter settings, Chrome extension version, call disposition requirements
- **Guided Selling**: Verify cadence entry/exit criteria match Salesforce field values — standard and custom fields both work
- **Moments coaching**: Test notification triggers on a sandbox call before rolling out to the team
- **Conversation Intelligence**: Confirm recording consent settings match your jurisdiction's requirements (one-party vs two-party)
- **Revenue Intelligence**: Start with out-of-box dashboards before customizing — they cover 80% of use cases

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesforce-only** — Revenue.io does not work with HubSpot, Pipedrive, or any non-Salesforce CRM. If you're not on Salesforce, this is not the right tool.
- **Mandatory call dispositioning** — reps cannot receive new calls until they disposition the current one. This is by design but slows high-volume dialers. Configure dispositions to be as simple as possible (3-5 options max).
- **Duplicate lead creation** — clicking phone numbers in the UI can create duplicate Salesforce leads. Use the dialer's click-to-dial button, not raw phone number links.
- **No predictive contact search** — unlike Salesloft/Outreach, the search doesn't auto-complete as you type. Type most of the contact name before searching.
- **Guided Selling vs Salesforce tasks** — these are separate task systems. Reps must manage both unless you configure Guided Selling to be the single task source and suppress native Salesforce task creation.
- **Pricing opacity** — no published pricing. Expect ~$2,400/mo starting, ~$59K/yr median contract (Vendr data). Budget for 15+ seats minimum.
- **No public API** — no documented REST API. All integration goes through native Salesforce objects and the Chrome extension. Custom integrations require working with Revenue.io support.
- **Conversation Intelligence on Orchestrate only** — full CI suite (AI summaries, deal scoring, Ask Revenue) requires the highest tier.

## Related skills

- `/sales-note-taker` — Comparing conversation intelligence platforms or wiring transcripts into your stack
- `/sales-cadence` — Building outbound sequences across any platform
- `/sales-coaching` — Designing coaching programs and manager frameworks
- `/sales-call-review` — Reviewing a specific sales call for coaching insights
- `/sales-forecast` — Building revenue forecasts with pipeline coverage analysis
- `/sales-salesforce` — Salesforce CRM configuration and admin
- `/sales-salesloft` — Salesloft platform help (common alternative)
- `/sales-gong` — Gong platform help (common alternative)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Dialer not logging calls
**User says**: "My reps' calls aren't showing up in Salesforce — they dial from Revenue.io but the activity log is empty."
**Skill does**:
1. Checks CTI adapter configuration and Chrome extension status
2. Verifies call disposition requirements (calls without dispositions may not sync)
3. Reviews Salesforce activity object permissions and field-level security
4. Tests with a single rep to isolate whether it's a user-level or org-level issue
**Result**: Troubleshooting checklist that identifies the sync failure point

### Example 2: Choosing the right tier
**User says**: "We have 25 AEs on Salesforce. We want a dialer and basic coaching. Do we need Orchestrate?"
**Skill does**:
1. Maps their needs to Revenue.io tiers — dialer + coaching = Engage tier
2. Explains what Orchestrate adds (AI summaries, deal scoring, Ask Revenue) and whether it's worth the uplift
3. Recommends starting with Engage and upgrading if AI features become a priority
**Result**: Clear tier recommendation with upgrade path

### Example 3: Revenue.io vs Gong
**User says**: "We're evaluating Revenue.io and Gong for our Salesforce-native team. What's the real difference?"
**Skill does**:
1. Frames the core difference: Revenue.io = real-time in-call coaching + engagement, Gong = post-call analysis + revenue intelligence
2. Highlights Revenue.io's Salesforce-native advantage (no shadow CRM) vs Gong's deeper analytics
3. Notes Revenue.io includes a dialer and cadences, while Gong requires pairing with a separate engagement tool
**Result**: Decision framework based on whether the team values real-time coaching or post-call analytics more

## Troubleshooting

### Calls creating duplicate leads in Salesforce
**Cause**: Clicking phone number links in the UI triggers lead creation instead of matching existing records
**Solution**: Train reps to use the RingDNA dialer's click-to-dial button exclusively. Check Salesforce duplicate matching rules — Revenue.io respects them but only if they're configured. Review the lead matching settings in Revenue.io admin.

### Guided Selling tasks competing with Salesforce tasks
**Cause**: Revenue.io creates its own task objects alongside native Salesforce tasks
**Solution**: Decide on a single task source. Either suppress Salesforce task auto-creation for activities Revenue.io manages, or configure Guided Selling to write directly to Salesforce tasks. Don't run both systems — reps will ignore one.

### Real-time coaching notifications not appearing
**Cause**: Moments requires the Chrome extension active and proper keyword/trigger configuration
**Solution**: Verify the RingDNA Chrome extension is installed, up to date, and not disabled. Check Moments configuration — triggers must match actual conversation patterns (avoid overly specific phrases). Test on a sandbox call with a colleague before rolling out.
