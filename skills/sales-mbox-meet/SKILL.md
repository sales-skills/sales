---
name: sales-mbox-meet
description: "MBox AI Meet platform help — free Chrome extension for Google Meet real-time transcription and AI summaries powered by Gemini Pro. Use when setting up MBox AI Meet for automatic Google Meet transcription and email summaries, troubleshooting MBox Chrome extension not recording or transcription accuracy issues, deciding between MBox free and Pro plans or evaluating whether Enterprise API access is worth it, comparing MBox AI Meet to other bot-free Chrome extension note-takers like Tactiq or Scribbl, wondering why MBox only works on Google Meet and whether other platforms are coming, or evaluating MBox's privacy-first approach with no audio/video storage. Do NOT use for comparing AI note-takers across all platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in MBox AI Meet]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# MBox AI Meet Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up MBox AI Meet (Chrome extension install, recording, transcription)
   - B) AI features (summaries, action items, speaker identification)
   - C) Plan selection (Free vs Pro vs Enterprise) or comparing to alternatives
   - D) Privacy and security (E2E encryption, no audio storage)
   - E) Troubleshooting (recording not starting, transcription quality)

2. **Which meeting platform?**
   - A) Google Meet (fully supported)
   - B) Other platforms (not supported — MBox is Google Meet only)

3. **Team size?**
   - A) Solo / individual
   - B) Small team (2-10)
   - C) Larger team (10+, needs Enterprise plan)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| General CRM/tool integration patterns | `/sales-integration [question]` |

If the question is MBox-specific, continue to Step 3.

## Step 3 — MBox AI Meet platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, workflows, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Quick start**: Install Chrome extension from Chrome Web Store → join Google Meet → MBox transcribes in real-time → AI summary sent to email after call
- **Privacy pitch**: MBox processes transcription in real-time and saves only text — no audio or video is stored
- **Plan decision**: Free (basic transcription + summaries) → Pro ($4.99/mo, E2E encryption, advanced summaries) → Enterprise (custom, API access, dedicated support)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Google Meet only** — no Zoom, Teams, or in-person support. Other platforms listed as "under consideration" with no timeline.
- **Chrome browser required** — MBox is a Chrome extension. Firefox, Safari, Arc, and Brave users cannot use it.
- **No CRM integration** — no HubSpot, Salesforce, or any CRM connector on any plan. Sales teams needing CRM sync should look at Tactiq, Fathom, or Fireflies.
- **No public API** — Enterprise plan mentions API access but no documentation exists. Cannot build custom integrations.
- **~88% transcription accuracy** — lower than competitors like Tactiq or Scribbl. Accuracy varies by language and audio quality.
- **No webhooks, no Zapier, no MCP** — zero automation surface beyond email delivery of summaries.
- **E2E encryption is Pro-only** — free tier transcriptions are not end-to-end encrypted.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-tactiq` — Tactiq platform help — bot-free Chrome extension note-taker for Google Meet/Zoom/Teams with CRM sync. Install: `npx skills add sales-skills/sales --skill sales-tactiq -a claude-code`
- `/sales-scribbl` — Scribbl platform help — bot-free Chrome extension for Google Meet with AI Copilot chat. Install: `npx skills add sales-skills/sales --skill sales-scribbl -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I installed MBox AI Meet but my Google Meet call wasn't transcribed — what went wrong?"
**Skill does**: Walks through troubleshooting — check Chrome extension is enabled and has microphone permissions, verify the Scribbl/other conflicting extensions aren't blocking it, confirm the call was on Google Meet (not Zoom/Teams), check if MBox icon is visible in the browser toolbar during the call.

**User**: "Is MBox AI Meet's free plan enough for my 3-person sales team, or do we need Pro?"
**Skill does**: Explains free tier includes basic transcription and AI summaries. Pro adds E2E encryption and advanced summaries for $4.99/mo. Notes that neither plan has CRM integration — if the team needs HubSpot/Salesforce sync, recommends Tactiq ($8/mo with native CRM) or Fathom (free tier + $25/mo Business for CRM). Enterprise is the only tier with API access.

**User**: "How do I automatically push MBox meeting summaries into our CRM?"
**Skill does**: Explains MBox has no CRM integration, no API (except Enterprise), no webhooks, and no Zapier. The only output is email summaries. Suggests forwarding summary emails to CRM via email-to-CRM parsing (e.g., HubSpot BCC address) as a workaround. Points to `/sales-note-taker` for alternatives with native CRM sync.

## Troubleshooting

### Chrome extension not recording meetings
**Symptom**: MBox icon shows in toolbar but no transcription appears during Google Meet calls.
**Fix**: Verify microphone permission is granted to the extension (right-click MBox icon → Manage Extension → Site access). Confirm the call is on Google Meet — Zoom and Teams are not supported. Disable conflicting meeting extensions (Tactiq, Scribbl, Otter) that may intercept audio. Try removing and reinstalling the extension from Chrome Web Store.

### Transcription accuracy is poor
**Symptom**: Transcription contains frequent errors, wrong words, or garbled text.
**Fix**: MBox's Gemini Pro-based transcription achieves ~88% accuracy — lower than some competitors. Ensure your microphone is high quality and positioned close. Reduce background noise. Check if the language being spoken matches the transcription language setting. For consistently poor results, consider Tactiq or Fathom which use different STT engines with higher accuracy.

### AI summary not arriving in email
**Symptom**: Meeting was transcribed but no summary email was received.
**Fix**: Check spam/junk folder for emails from MBox. Verify your email address in MBox settings. AI processing happens server-side after the call — allow 5-10 minutes. Very short calls (<2 minutes) may not generate summaries. On Pro plan, check if advanced summary settings are configured correctly.
