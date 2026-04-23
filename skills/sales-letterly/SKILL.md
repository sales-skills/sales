---
name: sales-letterly
description: "Letterly platform help — AI speech-to-text app that transforms voice recordings into polished emails, social posts, and structured notes with 25+ rewrite options. Use when setting up Letterly for converting voice memos into content (posts, emails, journals, to-do lists), configuring custom rewrite styles or adapting output for different formats, troubleshooting recordings that produce random text or fail to process, setting up Zapier automations or webhooks to route Letterly notes to Notion or Google Docs, hitting the 15-minute recording limit and needing workarounds for longer sessions, choosing between Letterly and AudioPen or TalkNotes or Voicenotes for voice-to-content, or connecting Letterly to Claude or ChatGPT via AI tool integrations. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Letterly]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, content-creation, platform]
---

# Letterly Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Letterly (recording, transcription, rewrite options)
   - B) Configuring integrations (Zapier, webhooks, AI tools)
   - C) Content creation workflow (social posts, emails, journals)
   - D) Troubleshooting (recording failures, garbled text, sync issues)
   - E) Choosing a plan or comparing to AudioPen/TalkNotes/Voicenotes

2. **What platform are you on?**
   - A) iOS
   - B) Android
   - C) Web
   - D) macOS

3. **What's your primary use case?**
   - A) Social media content creation from voice
   - B) Quick emails and messages
   - C) Personal journaling / thought capture
   - D) Professional note-taking
   - E) Multilingual content

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting Letterly to CRM via Zapier/webhooks | `/sales-integration [question]` |

If the question is Letterly-specific, continue to Step 3.

## Step 3 — Letterly platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, rewrite options, integrations, workflow patterns.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Voice-to-content workflow**: Record → AI transcribes → pick rewrite option (social post, email, to-do, etc.) → copy/share → optionally send via Zapier
- **Custom rewrite workflow**: Create a custom rewrite with specific instructions → apply to any recording for consistent output formatting
- **Automation pattern**: Zapier "Note Created" or webhook → route to Notion, Google Docs, Slack, email, or any connected app
- **Multilingual workflow**: Record in any of 90+ languages → Letterly transcribes and rewrites → optionally translate to another language

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **15-minute recording limit** — each recording session caps at 15 minutes. For longer sessions, split into multiple recordings. There's no way to extend this.
- **No audio file upload** — you must record directly in the app. Cannot import existing MP3/WAV files for processing. If you need upload support, consider AudioPen or TalkNotes.
- **No search feature** — as notes accumulate, finding older recordings is difficult. Use tags aggressively to organize. This is the most-requested missing feature.
- **Per-device licensing** — AppSumo LTD plans are device-limited (1/2/4 devices). Adding a new device requires upgrading or purchasing another license.
- **Ghost text on empty recordings** — if you start recording without speaking and stop, the app may generate random text. Delete these immediately.
- **No speaker diarization** — single-speaker only. Not suitable for multi-person meetings or interviews.
- **Zapier integration reliability** — some users report automations not triggering consistently. Test thoroughly before relying on it for production workflows.
- **No public API** — integration is Zapier and webhooks only. No REST endpoints for custom development.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-audiopen` — AudioPen platform help — closest competitor with custom writing styles, SuperSummaries, and one-time payment. Install: `npx skills add sales-skills/sales --skill sales-audiopen -a claude-code`
- `/sales-voicenotes` — Voicenotes platform help — voice notes with Ask AI search, Obsidian/Notion sync, and 9 Zapier triggers. Install: `npx skills add sales-skills/sales --skill sales-voicenotes -a claude-code`
- `/sales-talknotes` — TalkNotes platform help — 100+ pre-made templates for structured voice-to-content. Install: `npx skills add sales-skills/sales --skill sales-talknotes -a claude-code`
- `/sales-integration` — Connect Letterly to your CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I record voice memos while walking and want them to automatically become Twitter/X posts — how do I set that up in Letterly?"
**Skill does**: Explains the rewrite workflow — record voice memo → select "X post" rewrite option → AI generates tweet-length content. For automation, set up Zapier with webhook trigger → Buffer or X posting action.

**User**: "I bought Letterly but my recordings keep producing gibberish text that I never said"
**Skill does**: Explains the ghost text issue — stopping a recording with no speech generates random text. Recommends deleting ghost notes, ensuring microphone permissions are granted, and checking background noise levels.

**User**: "I need to record a 45-minute brainstorm session — how do I handle the 15-minute limit?"
**Skill does**: Explains the split-recording workaround — record in 15-minute chunks, tag all segments with the same tag, then manually combine the rewritten outputs. Notes that AudioPen has the same 15-min limit, while TalkNotes Plus allows 20 minutes and TalkNotes Pro allows 2 hours.

## Troubleshooting

### Recording produces random/ghost text
**Symptom**: You stop a recording and the app generates text you never said.
**Fix**: This happens when recording is started without speech input. Delete the ghost note. Always ensure you're speaking before stopping. If the issue persists with actual speech, check microphone permissions (Settings → Letterly → Microphone) and try re-recording in a quieter environment.

### Zapier automation not triggering on new notes
**Symptom**: Notes are created in Letterly but the Zap never fires.
**Fix**: Verify your Letterly account is connected in Zapier — re-authorize if the connection is stale. Test with Zapier's built-in "Test trigger" first. If using webhooks instead of Zapier, verify the webhook URL is correct and the receiving endpoint returns a 200 status. Some users report intermittent trigger failures — add a Zapier filter step as a safety check.

### Notes not syncing across devices
**Symptom**: Notes created on your phone don't appear on the web or Mac app.
**Fix**: Ensure you're logged into the same account on all devices. Check internet connectivity — offline recordings queue for sync when back online. Force-refresh by pulling down on the note list. If the issue persists, log out and back in on the affected device. Cloud syncing improvements have been ongoing — check for app updates.
