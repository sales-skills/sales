---
name: sales-notta
description: "Notta platform help — AI meeting transcription in 58 languages, Notta Bot auto-join for Zoom/Meet/Teams/Webex, Notta Brain cross-meeting AI agent, Zapier automation, CRM sync to Salesforce/HubSpot/Zoho/Freshsales/Salesflare (Business+). Use when Notta bot won't join a meeting, transcription accuracy drops with accents or multiple speakers, setting up Notta CRM sync to HubSpot or Salesforce, connecting Notta to Zapier for transcript automation, comparing Notta pricing tiers or minute limits, or Notta Brain not finding answers across meetings. Do NOT use for comparing multiple note-takers (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Notta]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# Notta Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your situation?**
   - A) Setting up Notta for the first time (calendar, bot, team workspace)
   - B) Transcription quality issues (accuracy, languages, speakers)
   - C) Integrating Notta with CRM or other tools
   - D) Automating workflows via Zapier
   - E) Using Notta Brain for cross-meeting intelligence
   - F) Billing, plan selection, or minute limits

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Notta vs other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| General Zapier/webhook integration patterns | `/sales-integration {user's question}` |
| Meeting scheduling (not note-taking) | `/sales-meeting-scheduler {user's question}` |

When routing, provide the exact command.

Otherwise, answer directly below.

## Step 3 — Notta platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Plan selection quick guide:**
- Solo user, light usage → Free (120 min/mo, 3-min live limit)
- Individual professional → Pro ($13.99/mo, 1,800 min, exports)
- Team needing CRM sync + video recording → Business ($44-203/mo, up to 20 seats)
- Enterprise needing SSO, audit logs, AI training opt-out → Enterprise (custom)

**Automation decision:** Notta has no public API. All programmatic integration goes through Zapier triggers (new AI notes, new transcription, new public share) and actions (upload audio, generate summary).

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free trial auto-charges.** Credit card required for trial; cancellation process is not obvious. Multiple user reports of unexpected charges ($97.99 annual or $14.99/mo) after trial. Cancel well before trial ends and verify cancellation confirmation.
- **CRM sync is Business+ only.** Salesforce, HubSpot, Zoho, Freshsales, Salesflare connectors are not available on Free or Pro plans.
- **No public API.** Cannot build custom integrations, data pipelines, or transcript exports programmatically. Zapier is the only automation path.
- **AI training data caveat.** Free, Pro, and Business plan data is used for Notta's AI model training by default. Only Enterprise can opt out. Sensitive sales conversations may be a concern.
- **Language must be pre-selected.** Notta does not auto-detect language. If a call switches languages mid-conversation, transcription produces gibberish. Set the expected primary language before the meeting starts.
- **Chrome extension requires reinstalls.** Users report the extension stops working after one session, requiring uninstall/reinstall cycles.
- **Customer support is slow.** Multiple reports of unresponsive support — plan for self-service troubleshooting.

## Related skills

- `/sales-note-taker` — Compare note-taker platforms, plan API integrations, architect transcript pipelines
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Notta for a multilingual sales team
**User says**: "I have a 10-person team selling across EMEA — calls happen in English, French, German, and Spanish. Will Notta handle this?"
**Skill does**: Confirms Notta supports all 4 languages (58 total). Warns that language must be pre-selected per meeting — no auto-detection. Recommends Business plan for team features + CRM sync. Notes that if calls frequently switch languages mid-conversation, accuracy will degrade — consider setting the dominant language and accepting lower accuracy on secondary language segments.

### Example 2: Connecting Notta to HubSpot via Zapier
**User says**: "I want meeting transcripts automatically logged in HubSpot contacts after every call."
**Skill does**: Notes that native HubSpot sync exists on Business+ plan — check if that's sufficient before building Zapier automation. If on Pro, walks through Zapier setup: trigger "New AI Notes Generated" → action "Create Note on HubSpot Contact" using attendee email matching. Warns about Zapier task consumption on high-volume teams.

### Example 3: Notta Brain not surfacing relevant answers
**User says**: "I uploaded 50 meeting recordings but Notta Brain gives generic answers when I ask about specific customer objections."
**Skill does**: Checks if user is on a plan that includes Notta Brain credits. Suggests being more specific in queries (include customer name, date range, product name). Notes that Notta Brain works best with well-transcribed meetings — if source transcriptions have accuracy issues, Brain's cross-meeting analysis will inherit those errors.

## Troubleshooting

### Transcription missing punctuation and random capitalizations
**Symptom**: Transcript has no periods, commas, or paragraph breaks; words randomly capitalized
**Cause**: Known Notta issue — ASR post-processing sometimes fails, especially with non-English or noisy audio
**Solution**: Re-upload the audio file for re-transcription. Ensure the correct language is selected before recording. Use a headset or external mic to reduce background noise. If the issue persists across clean recordings, contact Notta support.

### Bot not joining scheduled meetings
**Symptom**: Notta Bot doesn't appear in Zoom/Meet/Teams despite calendar integration being connected
**Cause**: Calendar permission expired, meeting link format not recognized, or workspace admin disabled bot auto-join
**Solution**: Re-authorize Google Calendar or Outlook in Notta settings. Verify the meeting has a valid join link (not a "join by phone only" invite). Check workspace settings for auto-join toggle. For Teams, ensure the Notta Bot is not blocked by your organization's Teams admin policies.

### Charged after cancelling trial
**Symptom**: Credit card charged $97.99 or $14.99/mo despite cancelling during trial period
**Cause**: Cancellation may not have fully processed, or trial required explicit cancellation steps beyond just stopping usage
**Solution**: Check Settings → Billing for active subscription status. If subscription shows active, cancel again and screenshot confirmation. Contact support@notta.ai with cancellation confirmation and request refund. If support is unresponsive, dispute the charge with your credit card provider — multiple users have resolved this way.
