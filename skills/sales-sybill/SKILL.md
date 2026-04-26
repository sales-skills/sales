---
name: sales-sybill
description: "Sybill platform help — AI sales assistant with Magic Summaries, CRM Autofill, Deal Workspace, Ask Sybill, and follow-up automation. Use when setting up Sybill CRM autofill for Salesforce or HubSpot, Magic Summaries not generating or taking too long, Sybill bot joining meetings you don't want it on, configuring Ask Sybill for deal questions, choosing between Sybill and Gong or Fathom or Avoma, CRM fields not populating after calls, setting up Sybill webhooks or Zapier automations, or understanding Sybill pricing tiers and what's gated to Business or Enterprise. Do NOT use for picking between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Sybill question — setup, CRM sync, summaries, pricing, etc.]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, note-taker, crm-autofill, platform]
---

# Sybill Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Sybill or connecting CRM (Salesforce, HubSpot, Zoho, Dynamics)
   - B) Magic Summaries, Ask Sybill, or Deal Workspace
   - C) CRM Autofill configuration (field mapping, MEDDPICC/BANT/SPICED)
   - D) Follow-up emails, pre-meeting briefs, or task automation
   - E) Integrations (Slack, webhooks, Zapier/Make, MCP)
   - F) Pricing, plan comparison, or upgrading
   - G) Troubleshooting (bot not joining, summaries delayed, CRM not syncing)

2. **Which Sybill plan are you on?**
   - A) Free
   - B) Pro ($30/user/mo)
   - C) Business ($90/user/mo)
   - D) Enterprise (custom)
   - E) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Sybill to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Sybill data | `/sales-coaching {user's question}` |
| Revenue forecasting with Sybill deal data | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Sybill platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Connect CRM first (Business+ required for Salesforce/HubSpot), then configure Autofill field mappings, then set up Slack channel for deal alerts. Start with default MEDDPICC fields before customizing.

**Plan selection**: Free for solo evaluation. Pro if you just need summaries + Ask Sybill without CRM. Business if CRM autofill and deal workspace are requirements. Enterprise if you need API/MCP access or unlimited autofill fields.

**Webhook setup**: Use Sybill's webhook automations to push meeting insights to external tools. For Zapier/Make integrations, connect through the webhook URL.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **CRM Autofill requires Business plan ($90/user/mo)** — the most requested feature is completely unavailable on Free and Pro. Free gets 20 team-wide summaries/month; Pro gets unlimited summaries but no CRM.
- **Insights are NOT real-time** — even short meetings take 5+ minutes for summaries to generate. Behavioral insights (Buyer EQ) take up to 30 minutes and are Zoom-only.
- **Behavioral insights (Buyer EQ) only work on Zoom** — Google Meet and Teams get transcription and summaries but not the body language / engagement analysis.
- **Deactivating Sybill from meetings is not straightforward** — users report it joining unwanted meetings. Check calendar integration settings to exclude internal meetings or specific calendar types.
- **API and MCP access are Enterprise-only** — you cannot programmatically access deal data or build custom integrations on Free/Pro/Business plans.
- **Business plan caps CRM Autofill at 10 fields** — Enterprise gets unlimited. If you need more than 10 auto-populated fields, you need Enterprise.
- **500 credits/week on Free** — credits are consumed by AI tasks (summaries, follow-ups, Ask Sybill queries). Heavy users burn through this quickly.

## Related skills

- `/sales-note-taker` — Comparing Sybill to other note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-forecast` — Revenue forecasting and deal health assessment
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM autofill not populating
**User says**: "I connected Sybill to Salesforce but my MEDDPICC fields aren't filling after calls."
**Skill does**:
1. Confirms the user is on Business plan (autofill requires Business+)
2. Checks field mapping configuration — Sybill needs to know which Salesforce fields map to which MEDDPICC elements
3. Verifies the opportunity/deal is matched correctly (Sybill matches calls to CRM records by participant email)
4. Checks that the call was long enough for extraction (very short calls may not contain enough signal)
**Result**: Specific troubleshooting steps for the CRM autofill pipeline.

### Example 2: Choosing the right plan
**User says**: "Is Sybill Business worth the jump from Pro for a 12-person team?"
**Skill does**:
1. Identifies what Business adds: CRM Autofill (10 fields), Deal Workspace, pipeline views, unlimited credits, custom Slack channels, admin controls
2. Calculates cost delta: 12 × ($90 - $30) = $720/mo or $8,640/yr
3. Frames ROI: if reps save 2+ hrs/week on CRM entry and deal prep, the cost pays for itself
4. Notes Enterprise alternative if they need >10 autofill fields or API access
**Result**: Clear plan comparison with cost math and ROI framework.

### Example 3: Sybill joining unwanted meetings
**User says**: "Sybill keeps joining my internal 1:1s and standup meetings — how do I stop it?"
**Skill does**:
1. Checks calendar integration settings for inclusion/exclusion rules
2. Recommends configuring Sybill to only join meetings with external participants or specific calendar labels
3. If exclusion rules aren't granular enough, suggests using "Do Not Record" keyword in meeting titles
**Result**: Configuration steps to control which meetings Sybill joins.

## Troubleshooting

### Magic Summaries taking too long or not generating
**Symptom**: Summaries don't appear for 30+ minutes after a call, or don't appear at all.
**Cause**: Sybill processes calls asynchronously — 5 minutes is normal, 30 minutes for behavioral insights. Missing summaries may mean the call wasn't captured (bot didn't join or was removed by host).
**Solution**: Check that Sybill's bot successfully joined (look in the Sybill dashboard for the meeting). If behavioral insights are enabled, 30 minutes is expected on Zoom. If the meeting isn't showing at all, check calendar integration and bot permissions.

### Ask Sybill returning vague or wrong answers
**Symptom**: Querying deals through Ask Sybill gives generic responses that don't match what was discussed on calls.
**Cause**: Ask Sybill's quality depends on having enough call and email data. On Free/Pro, it only has access to calls — not CRM data. On Business+, it cross-references CRM, email, and Slack.
**Solution**: Upgrade to Business for CRM + email + Slack data access. Ensure calls are being captured consistently. Ask more specific questions ("What did [contact] say about budget on the last call?") rather than broad ones.

### Webhooks not firing after meetings
**Symptom**: Configured webhook URL but not receiving events after calls.
**Cause**: Webhook automations require proper URL configuration and the meeting must be successfully processed first. Sybill sends webhook events after processing completes (5-30 min delay).
**Solution**: Verify webhook URL is publicly accessible and returns 200 on POST. Check Sybill's automation logs for delivery failures. Test with a tool like webhook.site first. Note the processing delay — webhooks fire after summary generation, not immediately after the call ends.
