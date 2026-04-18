---
name: sales-sonnet
description: "Sonnet AI platform help — bot-free AI meeting assistant with auto-CRM updates from conversations. Use when setting up Sonnet desktop app for device-audio recording, Sonnet CRM auto-update not syncing to HubSpot or Salesforce, Sonnet meeting notes not generating or missing action items, Sonnet custom templates for sales calls or legal consultations, Sonnet relationship tracker not pulling participant context, comparing Sonnet to Granola or Jamie or Fathom for bot-free recording, or Sonnet free tier limits (5 recordings 30 minutes). Do NOT use for choosing between AI note-takers (use /sales-note-taker) or general meeting transcript API integration (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Sonnet AI]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, crm, platform]
---

# Sonnet AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up Sonnet for my meetings (recording, templates, CRM)
   - B) Configure CRM auto-update (HubSpot/Salesforce)
   - C) Customize note templates or formats (concept maps, tables)
   - D) Troubleshoot a specific issue (notes not generating, CRM not syncing, recording failures)
   - E) Compare Sonnet to another tool

2. **What's your meeting type?**
   - A) Sales calls (discovery, demos, follow-ups)
   - B) Legal (consultations, depositions)
   - C) Medical (patient notes)
   - D) Recruiting (interviews, evaluations)
   - E) General / cross-functional

3. **Which plan are you on?**
   - A) Free (5 recordings/month)
   - B) Plus ($25/mo)
   - C) Pro ($35/mo)
   - D) Enterprise
   - E) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between AI note-takers (Sonnet vs Fathom vs Fireflies etc.) | `/sales-note-taker {user's question}` |
| Building a transcript API pipeline to CRM/warehouse | `/sales-note-taker {user's question}` — Sonnet has no public API |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |

Otherwise, answer directly below.

## Step 3 — Sonnet platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, CRM auto-update, templates, relationship tracker.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup**: Install the macOS desktop app, connect your calendar, configure which meetings to auto-record. Choose a note template matching your use case (sales, legal, medical, recruiting).

**For CRM**: Connect HubSpot or Salesforce in settings. Sonnet auto-logs meeting summaries, action items, and follow-up tasks after each call. Check that participant email addresses match CRM contacts.

**For templates**: Use the template gallery for domain-specific formats. Customize note output as tables, concept maps, or structured summaries depending on your workflow.

**For scaling**: Free tier is 5 recordings/month at 30 minutes max. Plus ($25/mo) gives 40 recordings at 90 minutes. Pro ($35/mo) gives 100 recordings with unlimited storage. Enterprise adds team features and custom integrations.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **macOS only.** Windows is in public beta but not fully supported. No Linux, no web-only mode. If your team is mixed OS, Sonnet won't work for everyone.
- **No live transcription.** Audio is processed post-call — you won't see real-time captions during the meeting. If you need live transcription, look at Otter, Colibri, or Tactiq.
- **No public API or webhooks.** You cannot build custom integrations, export transcripts programmatically, or connect to data pipelines. CRM sync is native-only (HubSpot/Salesforce). No Zapier or Make integration documented.
- **~10 languages only.** English, Spanish, French, German, and a few others. If your team does calls in 20+ languages, look at Jamy (100+), Notta (58), or Fireflies (60+).
- **Free tier is very limited.** 5 recordings/month, 30-minute max per recording, 2-month storage, 3 AI insights per call. Most competitors offer more generous free tiers (Fathom: unlimited, tl;dv: unlimited, Fireflies: limited but more).
- **YC status shows "Inactive."** The company was YC S22 and has 7 employees. Verify product roadmap and support responsiveness before committing a team.
- **Recording limit per call varies by plan.** Free: 30 min, Plus: 90 min, Pro: 100 recordings but recording length not specified. Long all-day meetings may not be fully captured.
- **Data stored on their servers.** Meeting audio, video, and transcripts are stored server-side. No self-hosted option. Review their privacy policy if handling sensitive data.

## Related skills

- `/sales-note-taker` — Compare Sonnet to Fathom, Fireflies, Avoma, Gong, and 30+ other AI note-takers, or build transcript API pipelines
- `/sales-granola` — Closest bot-free competitor with CRM sync (HubSpot/Attio/Affinity)
- `/sales-jamie` — Another bot-free note-taker with API access and EU privacy
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Sales team evaluating Sonnet for CRM auto-update
**User says**: "My reps hate updating HubSpot after every call. Can Sonnet do that automatically?"
**Skill does**:
1. Confirms Sonnet's core value prop is auto-CRM update from conversations
2. Walks through HubSpot connection setup in Sonnet settings
3. Explains what gets auto-logged: summaries, action items, follow-up tasks, participant context
4. Flags that the team must be on macOS — Windows beta exists but isn't fully stable
5. Notes Free tier limit (5 recordings/mo) means the team needs at least Plus ($25/mo) or Pro ($35/mo) per rep
**Result**: Clear understanding of CRM auto-update capabilities and plan requirements.

### Example 2: Customizing note templates for legal consultations
**User says**: "I need structured notes from client consultations — key issues discussed, action items, deadlines, and next steps in a table format."
**Skill does**:
1. Points to Sonnet's template gallery — legal templates exist for consultations and depositions
2. Explains table and concept map output formats
3. Notes that custom templates allow structured capture of specific fields
4. Flags 30-min recording limit on Free tier — most legal consultations run longer, so Plus ($25/mo, 90 min) is the minimum
**Result**: Template configured for structured legal note output.

### Example 3: Comparing Sonnet to Granola for bot-free CRM notes
**User says**: "I want a bot-free note-taker that syncs to my CRM. Sonnet or Granola?"
**Skill does**:
1. Both are bot-free and sync to CRM — but different CRMs: Sonnet does HubSpot/Salesforce, Granola does HubSpot/Attio/Affinity
2. Sonnet auto-updates CRM fields from conversations; Granola requires manual per-note push
3. Sonnet has domain templates (legal, medical, recruiting); Granola is a general-purpose AI notepad
4. Granola has a REST API and MCP beta; Sonnet has no API at all
5. Granola supports macOS + Windows + web; Sonnet is macOS-only
6. Recommends Sonnet if auto-CRM and domain templates matter most; Granola if API access, cross-platform, or Attio/Affinity CRM matters
**Result**: Clear comparison with decision criteria specific to user's CRM and platform needs.

## Troubleshooting

### Notes not generating after meeting
**Symptom**: Meeting ended but no notes appear in Sonnet
**Cause**: Desktop app may not have been running during the meeting, recording may have been under minimum length, or audio capture failed silently
**Solution**: Ensure the Sonnet desktop app is running and connected before the meeting starts. Check that your system audio permissions allow Sonnet to capture device audio. Recordings under ~1 minute may not generate notes. If the meeting was normal length and the app was running, contact Sonnet support.

### CRM not syncing meeting data
**Symptom**: Meeting notes exist in Sonnet but don't appear in HubSpot/Salesforce
**Cause**: CRM connection may have expired, participant emails may not match CRM contacts, or CRM sync may require a specific plan tier
**Solution**: Reconnect HubSpot/Salesforce in Sonnet settings. Verify that meeting participant email addresses exist as contacts in your CRM. Check that your plan supports CRM sync — this feature may be tier-gated (verify on current pricing page).

### Free tier recordings exhausted mid-month
**Symptom**: "Recording limit reached" message before month end
**Cause**: Free tier allows only 5 recordings/month with 30-minute max per recording and 2-month storage
**Solution**: Upgrade to Plus ($25/mo) for 40 recordings at 90 minutes, or Pro ($35/mo) for 100 recordings with unlimited storage. If evaluating, prioritize your highest-value meetings for the remaining free slots.
