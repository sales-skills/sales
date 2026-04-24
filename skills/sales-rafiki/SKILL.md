---
name: sales-rafiki
description: "Rafiki platform help — AI-powered conversation intelligence with call recording, Smart Call Scoring (MEDDIC/BANT/SPIN), AI CRM Sync to Salesforce/HubSpot/Zoho/Pipedrive, deal intelligence, Gen AI Reports, and role-play coaching. Use when Rafiki call recordings aren't syncing to CRM, call scoring criteria not matching your sales process, AI summaries missing key details from meetings, setting up coaching scorecards for your team, role-play practice not generating useful feedback, Gen AI Reports not showing the insights you need, or comparing Rafiki vs Gong vs Chorus for your team. Do NOT use for designing cadence strategy (use /sales-cadence) or cross-platform coaching programs (use /sales-coaching)."
argument-hint: "[describe what you need help with in Rafiki]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, coaching, platform]
---

# Rafiki Platform Help

Help the user with Rafiki platform questions — from call recording and AI scoring through CRM sync, deal intelligence, coaching, and role-play.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Rafiki do you need help with?**
   - A) Call Recording & Transcription — setup, language support, meeting platforms
   - B) Smart Call Scoring — MEDDIC/BANT/SPIN frameworks, custom criteria
   - C) CRM Sync — auto-field population, Salesforce/HubSpot/Zoho/Pipedrive
   - D) Deal Intelligence — pipeline reports, forecasting, deal health
   - E) Coaching & Role Play — AI coaching agent, role-play practice, playlists
   - F) Smart Follow-Up — AI-generated post-call emails
   - G) Gen AI Reports & Search — Ask Rafiki, one-click reports
   - H) Integrations — Zoom, Meet, Teams, Slack, dialers
   - I) Admin & Billing — plans, team management, settings
   - J) Something else — describe it

2. **What's your Rafiki plan?**
   - A) Free (recording + transcription + summaries)
   - B) Starter ($19/user/mo, up to 3 users, 2K min/mo transcription)
   - C) Premium ($49/user/mo, unlimited, scoring, deal dashboard)
   - D) Enterprise (custom, API access, in-house deployment)
   - E) Not sure

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Cadence or sequence design | `/sales-cadence {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Revenue forecasting strategy | `/sales-forecast {user's question}` |
| Choosing a note-taker (comparing Rafiki to alternatives) | `/sales-note-taker {user's question}` |
| General CRM-to-tool integration | `/sales-integration {user's question}` |

Otherwise, answer directly from platform knowledge below.

## Step 3 — Rafiki platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Rafiki
2. **Configuration recommendations** — specific settings to change, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **Plan gating** — note if the feature requires Premium or Enterprise

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't assume API access exists.** Rafiki's API is Enterprise-only. Starter and Premium users must rely on native integrations and Zapier. Claude tends to suggest API solutions that won't work on lower plans.
- **Don't confuse Starter's 3-user cap with a team plan.** Starter is designed for 1-3 person teams. If the user has more than 3 reps, they need Premium.
- **Don't overlook Starter's transcription cap.** Starter includes 2,000 minutes/month transcription. High-volume teams can burn through this quickly — recommend Premium for unlimited.
- **Don't skip CRM field mapping setup.** Auto-capture CRM fields (MEDDIC, BANT, SPIN, custom) require Premium. The feature needs initial configuration to map conversation data to CRM fields correctly.
- **Don't recommend Gen AI Reports without credits context.** Gen AI Search and Gen AI Reports on Premium use add-on credits — they're not fully unlimited.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-note-taker` — Picking an AI note-taker or comparing Rafiki to alternatives (Fathom, Fireflies, Gong, Avoma, etc.)
- `/sales-coaching` — Building coaching programs that consume call data from Rafiki or any CI tool
- `/sales-call-review` — Reviewing a specific call for coaching insights
- `/sales-forecast` — Revenue forecasting and deal health strategy
- `/sales-integration` — Connecting Rafiki to other tools via native integrations or Zapier
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up MEDDIC scoring
**User says**: "How do I set up MEDDIC call scoring in Rafiki?"
**Skill does**:
1. Confirms user is on Premium (scoring is plan-gated)
2. Walks through enabling Smart Call Scoring with MEDDIC framework
3. Explains how to customize criteria and weights for their sales process
4. Shows how scored calls appear in the deal dashboard
5. Recommends reviewing scoring accuracy after 20+ calls and adjusting criteria
**Result**: MEDDIC scoring enabled with custom criteria and a validation plan

### Example 2: CRM sync to HubSpot
**User says**: "Rafiki isn't syncing call data to our HubSpot — what's wrong?"
**Skill does**:
1. Checks integration status in Rafiki settings
2. Verifies HubSpot connection is active and properly authenticated
3. Confirms which CRM fields are mapped (default vs custom)
4. Identifies common issues: field mapping misconfiguration, plan limitations, sync lag
5. Provides troubleshooting steps: disconnect/reconnect, verify field permissions in HubSpot
**Result**: CRM sync diagnosed and fixed with verified field mappings

### Example 3: Comparing Rafiki vs Gong
**User says**: "Should I switch from Gong to Rafiki to save money?"
**Skill does**:
1. Routes to `/sales-note-taker` for full comparison
2. Notes key trade-offs: Rafiki is ~75% cheaper but lacks Gong's ecosystem depth, public API, and enterprise features
3. Highlights what Rafiki matches (scoring, CRM sync, coaching) vs what it doesn't (API richness, Smart Trackers, Engage)
**Result**: Clear trade-off analysis with a recommendation based on team size and needs

## Troubleshooting

### CRM fields not populating after calls
**Symptom**: Calls are recorded and scored but CRM opportunity fields stay empty
**Cause**: Auto-capture CRM fields requires Premium plan AND initial field mapping configuration
**Solution**: Verify plan is Premium. Go to Settings → CRM Integration → Field Mapping. Map Rafiki's extracted fields (methodology scores, next steps, key topics) to your CRM's custom fields. Allow 1-2 calls after configuration to verify sync is working.

### Call scoring results seem inaccurate
**Symptom**: Scores don't match what actually happened on the call
**Cause**: Using a default framework that doesn't match your sales process, or criteria are too generic
**Solution**: Customize scoring criteria to match your actual methodology steps. Start with 5-7 concrete, observable criteria rather than abstract ones. Review and calibrate scores manually for the first 20 calls, then adjust weights. Consider custom criteria over MEDDIC/BANT presets if your process is non-standard.

### Starter plan running out of transcription minutes
**Symptom**: Recordings stop being transcribed mid-month
**Cause**: Starter plan has a 2,000 minutes/month cap
**Solution**: Check usage in Settings → Billing. If consistently exceeding, upgrade to Premium (unlimited transcription). Short-term: prioritize which meetings get recorded (external calls over internal meetings). Transcription resets monthly.
