---
name: sales-winn
description: "Winn.ai platform help — real-time AI sales assistant with playbook adherence tracking, automated CRM updates, and live coaching. Use when setting up Winn.ai playbook templates for MEDDIC or BANT or SPICED, CRM fields not populating after sales calls in Salesforce or HubSpot, Winn.ai not tracking talking points during calls, choosing between Winn.ai and Gong or Sybill or Fathom for real-time guidance, understanding Winn.ai Pro vs Enterprise pricing and feature gating, configuring AI meeting prep briefs or follow-up emails, or Winn.ai Chrome extension not working during Zoom or Teams calls. Do NOT use for picking between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Winn.ai question — setup, playbooks, CRM sync, pricing, etc.]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, note-taker, playbook-adherence, platform]
---

# Winn.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Winn.ai or connecting CRM (Salesforce, HubSpot)
   - B) Playbook templates and real-time talking point tracking
   - C) Automated CRM field updates after calls
   - D) AI meeting prep briefs or follow-up emails
   - E) Live Coaching or Battle Cards (Enterprise)
   - F) Pricing, plan comparison, or upgrading
   - G) Troubleshooting (talking points not tracking, CRM not syncing, Chrome extension issues)

2. **Which Winn.ai plan are you on?**
   - A) Pro ($69/seat/mo)
   - B) Enterprise (custom, 20+ seats)
   - C) Free trial (14-day)
   - D) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Winn.ai to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Winn.ai data | `/sales-coaching {user's question}` |
| Revenue forecasting with deal data | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Winn.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Connect CRM first, then configure playbook templates (start with a built-in like MEDDIC before customizing), then enable Slack notifications. Run 2-3 test calls to verify talking point tracking and CRM field capture before rolling out to the team.

**Plan selection**: Pro for teams that need playbook adherence tracking and CRM auto-updates on up to 25 fields. Enterprise if you need live coaching, battle cards, unlimited CRM fields, custom AI digests, reporting/analytics, or in-meeting CRM data visibility.

**Key differentiator**: Winn.ai centers on real-time playbook adherence during the call (not just post-call analysis). If you primarily need post-call summaries and CRM fill, evaluate Sybill or Fathom too. If you need real-time guidance and playbook enforcement, Winn.ai is purpose-built for that.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No video recording** — Winn.ai tracks talking points and captures data in real-time but does not record video. If you need call recordings for coaching review, pair with a separate recorder or use a tool like Gong or tl;dv.
- **Virtual meetings only** — no phone call or in-person meeting support. Field sales teams should use Rilla, Siro, or Omi instead.
- **CRM field limit on Pro** — Pro supports up to 25 CRM fields; Enterprise gets unlimited. If you need more than 25, you need Enterprise.
- **Live Coaching and Battle Cards are Enterprise-only** — the real-time guidance features that differentiate Winn.ai most are gated behind the Enterprise plan (20+ seat minimum, custom pricing).
- **No public API** — no programmatic access for custom integrations. You're limited to pre-built Salesforce, HubSpot, and Slack connectors.
- **CRM sync can lag up to 15 minutes** — updates are not instant. Plan accordingly for reps who expect immediate CRM population after calls.
- **Transcription struggles with technical jargon** — accuracy drops during highly technical discussions or heavy-accent calls.

## Related skills

- `/sales-note-taker` — Comparing Winn.ai to other note-takers (Fathom, Fireflies, Gong, Sybill, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-forecast` — Revenue forecasting and deal health assessment
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM fields not populating after calls
**User says**: "I finished a discovery call but my MEDDIC fields in Salesforce are empty — Winn.ai didn't update anything."
**Skill does**:
1. Confirms the user's plan — Pro supports up to 25 fields
2. Checks that the Salesforce integration is connected and field mappings are configured
3. Notes the 5-15 minute delay for CRM sync — asks user to wait and recheck
4. Verifies the playbook template was active during the call (talking points must be tracked for fields to populate)
**Result**: Specific troubleshooting steps for the CRM auto-update pipeline.

### Example 2: Setting up a MEDDIC playbook
**User says**: "How do I set up MEDDIC tracking for my team's discovery calls in Winn.ai?"
**Skill does**:
1. Points to built-in MEDDIC template in Playbook Templates
2. Walks through customizing talking points for each MEDDIC element
3. Explains how Winn.ai tracks which points are covered in real-time during the call
4. Recommends mapping MEDDIC fields to corresponding CRM fields for auto-population
**Result**: Step-by-step MEDDIC playbook setup with CRM field mapping.

### Example 3: Choosing between Winn.ai and Sybill
**User says**: "Should I use Winn.ai or Sybill for my 15-person sales team?"
**Skill does**:
1. Routes to `/sales-note-taker` for a full comparison
2. Notes key difference: Winn.ai is built for real-time playbook adherence during calls; Sybill is built for post-call CRM autofill and deal workspace
3. Compares pricing: Winn.ai Pro $69/seat vs Sybill Business $90/seat
4. Recommends Winn.ai if playbook enforcement is the priority, Sybill if CRM autofill depth and deal intelligence matter more
**Result**: Decision framework based on primary use case.

## Troubleshooting

### Talking points not being tracked during calls
**Symptom**: Winn.ai shows the playbook but doesn't check off talking points as they're discussed.
**Cause**: The Chrome extension may not be capturing audio correctly, or the playbook template wasn't activated before the call started.
**Solution**: Verify the Chrome extension is enabled and has microphone permissions. Ensure you activate the playbook template before the meeting starts, not during. Check that you're on a supported platform (Zoom, Google Meet, or Teams).

### CRM updates delayed or missing
**Symptom**: CRM fields aren't populated 30+ minutes after a call, or some fields update but others don't.
**Cause**: CRM sync can lag up to 15 minutes normally. Missing fields usually mean the playbook didn't capture enough signal for those specific data points, or the field mapping is misconfigured.
**Solution**: Wait 15 minutes and recheck. Verify field mappings in Winn.ai settings match your CRM field names exactly. Check that the call was long enough for Winn.ai to extract relevant data. If using custom fields, ensure they're mapped in the playbook template.

### Chrome extension not working on calls
**Symptom**: Winn.ai overlay doesn't appear during Zoom, Teams, or Google Meet calls.
**Cause**: Chrome extension disabled, browser permissions missing, or conflicting extensions.
**Solution**: Verify the extension is enabled in Chrome's extension manager. Grant microphone and screen access permissions. Disable other meeting assistant extensions that may conflict. Try restarting Chrome. If using a managed Chrome profile, check with IT that the extension is whitelisted.
