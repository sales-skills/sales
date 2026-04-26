---
name: sales-liznr
description: "Liznr platform help — AI meeting assistant with real-time transcription, contextual intelligence, and task sync to Jira/Slack/Notion. Use when setting up Liznr Chrome extension or Teams app for meeting recording, Liznr transcription not capturing speakers correctly, Liznr action items not syncing to Jira or Slack, choosing Liznr vs Fathom or Fireflies or tl;dv for budget meeting notes, evaluating Liznr for recruiting interviews or legal meetings, Liznr multilingual transcription accuracy, or Liznr privacy and data security questions. Do NOT use for comparing note-takers broadly without mentioning Liznr (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Liznr]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# Liznr Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Set up Liznr for my team (installation, configuration)
   - B) Troubleshoot a Liznr issue (transcription, sync, speaker ID)
   - C) Evaluate Liznr vs alternatives (selection, comparison)
   - D) Integrate Liznr outputs into my workflow (Jira, Slack, Notion)

2. **Which platform are you using Liznr on?**
   - A) Chrome extension (Google Meet / Zoom web)
   - B) Microsoft Edge add-on
   - C) Microsoft Teams app
   - D) Multiple / not sure yet

3. **What's your use case?**
   - A) Sales calls — discovery, demo, pipeline
   - B) Recruiting — candidate interviews
   - C) Legal — depositions, client calls
   - D) General team meetings

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing note-takers broadly (not Liznr-specific) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Liznr platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, setup, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For setup**: Walk through Chrome/Edge/Teams installation, calendar connection, first meeting test
- **For comparison**: Frame Liznr as a budget entry point ($9/mo) with contextual intelligence but no API/CRM — compare against Fathom (free tier + API) or Fireflies (GraphQL + CRM)
- **For integration**: Liznr has no API — suggest manual export, copy-paste to CRM, or evaluate alternatives with API access
- **For troubleshooting**: Check browser permissions, extension version, microphone access, meeting platform compatibility

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API or webhooks.** You cannot programmatically pull transcripts, summaries, or action items from Liznr. If automation is a requirement, evaluate Fathom, Fireflies, or MeetGeek instead.
- **No native CRM sync.** Liznr syncs to Jira, Slack, Notion, and Trello — task/collaboration tools, not CRMs. Sales teams needing HubSpot/Salesforce auto-update should look elsewhere.
- **Pricing details are scarce.** SourceForge lists $9/mo starting price, but detailed tier/feature breakdown is not publicly documented. Request pricing directly from support@liznr.ai.
- **Very early stage.** Launched May 2025, fewer than 5 reviews across all platforms. Expect rapid feature changes but also potential instability.
- **"Lizy" branding.** The AI assistant is branded "Lizy" — the platform is "Liznr." Don't confuse with "Lindy" (different product entirely).

## Related skills

- `/sales-note-taker` — Compare AI meeting note-takers broadly, evaluate pricing/features/API across 80+ platforms
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluating Liznr for a recruiting team
**User says**: "We're a 10-person recruiting team doing 30+ candidate interviews per week on Google Meet. Would Liznr work for us?"
**Skill does**:
1. Confirms Liznr supports Google Meet via Chrome extension
2. Notes Liznr has a recruiting-specific use case page with candidate insight capture
3. Flags limitations: no ATS integration, no API for automation, no CRM sync
4. Recommends evaluating the free trial first, but suggests Fireflies or Noota as alternatives with deeper ATS/CRM integration if automation is needed
**Result**: Honest assessment — Liznr works for basic transcription but lacks recruiting workflow automation.

### Example 2: Setting up Liznr on Microsoft Teams
**User says**: "How do I install Liznr as a Teams app for my team?"
**Skill does**:
1. Points to the Microsoft Teams marketplace listing (WA200009491)
2. Walks through: Admin Center → Manage Apps → search "Liznr" → approve for org
3. Notes individual users can also install from the Teams app store
4. Recommends testing with a single user first before org-wide rollout
**Result**: Step-by-step Teams installation with admin approval guidance.

### Example 3: Connecting Liznr outputs to a CRM
**User says**: "Can I automatically send Liznr meeting summaries to HubSpot?"
**Skill does**:
1. Confirms Liznr has no API, webhooks, or native CRM integration
2. Suggests workarounds: manual copy-paste, or use Liznr's Slack/Notion sync and then Zapier from Slack/Notion to HubSpot
3. If CRM automation is critical, recommends switching to Fathom Business ($25/mo, native HubSpot sync) or Fireflies Business ($19/mo, HubSpot + API)
**Result**: Honest "no native path" answer with creative workaround and alternative recommendations.

## Troubleshooting

### Liznr Chrome extension not recording in Google Meet
**Symptom**: Extension installed but no transcription appears during the meeting
**Cause**: Browser permissions not granted, or extension disabled/updated
**Solution**: Check chrome://extensions — ensure Liznr is enabled and has microphone permission. Click the extension icon during a meeting to verify it's active. Try removing and reinstalling if the issue persists.

### Speaker identification mixing up participants
**Symptom**: Transcript attributes speech to the wrong person
**Cause**: Similar voice profiles or microphone pickup from multiple speakers in one room
**Solution**: Ensure each participant uses their own microphone (no shared room mics). If in-person, speaker ID accuracy drops — this is a known limitation across most AI note-takers, not Liznr-specific.

### Action items not appearing in Jira/Slack after meeting
**Symptom**: Meeting ends but no action items sync to connected tools
**Cause**: Integration not configured, or Liznr didn't detect any action items in the conversation
**Solution**: Check Liznr dashboard (dashboard.liznr.ai) to verify the meeting was captured and action items were extracted. Verify the Jira/Slack integration is connected in settings. If action items are missing from the transcript, they may not have been stated clearly enough for AI detection — review and manually add.
