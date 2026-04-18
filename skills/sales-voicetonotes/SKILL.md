---
name: sales-voicetonotes
description: "VoiceToNotes platform help — AI voice-to-text transcription with real-time capture, AI summaries, grammar correction, OCR scanning, custom prompts, HIPAA compliance, web + iOS + Android. Use when setting up VoiceToNotes for a team, choosing between VoiceToNotes free vs Pro, voice notes not transcribing accurately, recordings disappearing or showing 'note without audio', configuring VoiceToNotes AI operations or custom prompts, comparing VoiceToNotes vs Otter vs Notta for personal voice notes, or exporting VoiceToNotes transcripts to other tools. Do NOT use for choosing a meeting note-taker for a sales team (use /sales-note-taker)."
argument-hint: "[describe what you need help with in VoiceToNotes]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, platform]
---

# VoiceToNotes Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up VoiceToNotes for the first time
   - B) Troubleshoot a recording or transcription issue
   - C) Understand pricing / decide if Pro is worth it
   - D) Export or integrate transcripts with other tools
   - E) Use AI features (summaries, custom prompts, OCR)
   - F) Compare VoiceToNotes to alternatives

2. **Which platform are you on?**
   - A) Web (dashboard.voicetonotes.ai)
   - B) iOS app
   - C) Android app
   - D) Chrome extension

3. **Which plan are you on?**
   - A) Free / Starter
   - B) Pro Monthly ($1/mo)
   - C) Pro Annual ($10/yr)
   - D) Enterprise
   - E) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between multiple AI note-takers for a team | `/sales-note-taker {user's question}` |
| General tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |
| Email deliverability for outbound | `/sales-deliverability {user's question}` |

Otherwise, answer directly below.

## Step 3 — VoiceToNotes platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, features, limitations, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

**For setup**: Walk through account creation → first recording → AI features. Emphasize the free tier limits (10 notes/day, 300 min/mo) so they know when to upgrade.

**For troubleshooting**: Check which client they're using (Chrome extension is least reliable). Guide toward the web dashboard or mobile app for critical recordings.

**For export/integration**: VoiceToNotes has no native integrations (no Zapier, no CRM connectors). Export is manual (DOCX/PDF/TXT/CSV). API access requires Pro Annual ($10/yr). If they need automated workflows, suggest evaluating alternatives with Zapier support.

**For comparison**: VoiceToNotes wins on price ($1/mo unlimited) and HIPAA compliance. It loses on integrations (zero), team features (minimal), and reliability (Chrome extension issues). For personal voice notes it's strong; for team meeting recording, point them to `/sales-note-taker`.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Chrome extension is unreliable for long recordings.** Multiple reports of "note without audio" after 30-60 minute recordings. Use the web dashboard or mobile app for anything critical.
- **Pricing pages show conflicting numbers.** FAQ says $5/mo, pricing page says $1/mo, blog says $7/mo. The /pricing page ($1/mo, $10/yr) appears most current — verify before committing.
- **No native integrations.** No Zapier, no CRM connectors, no webhooks on any plan. Export is manual only (DOCX/PDF/TXT/CSV). API access is Pro Annual only.
- **Subscription cancellation requires contacting support.** There's no self-service cancel button — you must email support.
- **Phone recordings stop when screen locks.** On mobile, the recording stops if the screen turns off during capture. Keep screen active for long recordings.
- **Free tier limits reset daily, not monthly (except minutes).** 10 notes/day and 10 AI ops/day reset each day, but the 300 min/mo cap is monthly.
- **"100+ languages" vs "20+ languages" — conflicting claims.** FAQ says 20+, homepage says 100+. Expect best accuracy in major languages (English, Spanish, French, German, Mandarin).
- **No bulk export.** Files must be downloaded one at a time, and formats vary (MP3 vs M4A). Bulk export is only on Pro Annual.

## Related skills

- `/sales-note-taker` — AI meeting note-taker / conversation-intelligence strategy and platform selection. Use this to compare VoiceToNotes against meeting-focused alternatives.
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Personal voice notes for a sales rep
**User says**: "I want to capture voice memos after client meetings and get AI summaries. Is VoiceToNotes good enough or should I use something else?"
**Skill does**: Explains VoiceToNotes free tier (10 notes/day, AI summaries included) is ideal for post-meeting voice memos. Notes the lack of CRM integration — they'd need to manually copy summaries. If they want auto-CRM sync, suggests Fathom or Fireflies via `/sales-note-taker`.

### Example 2: HIPAA compliance for healthcare
**User says**: "I need HIPAA-compliant voice transcription for patient notes. Does VoiceToNotes qualify?"
**Skill does**: Confirms VoiceToNotes claims HIPAA + SOC 2 Type II + GDPR compliance, AES-256 encryption at rest, TLS 1.2 in transit, zero-retention API policy. Recommends verifying BAA availability on Enterprise plan before using for PHI. Notes medical terminology support is claimed but accuracy should be tested.

### Example 3: Chrome extension lost recording
**User says**: "I recorded a 45-minute meeting with the Chrome extension and it shows 'note without audio'. Where's my recording?"
**Skill does**: Explains this is a known Chrome extension reliability issue. The recording was likely lost — the extension doesn't reliably handle long sessions. Recommends using the web dashboard or mobile app for meetings over 15 minutes, and keeping the Chrome tab active/focused during recording.

## Troubleshooting

### Recording shows "note without audio"
**Symptom**: After recording, the note appears but has no audio or transcript
**Cause**: Chrome extension drops the audio stream during long recordings, especially if the tab loses focus or the system goes to sleep
**Solution**: Use the web dashboard (dashboard.voicetonotes.ai) or mobile app instead of the Chrome extension for recordings over 15 minutes. Keep the recording tab active and in focus. There is no way to recover lost audio.

### Transcription accuracy is poor
**Symptom**: Transcription has many errors, wrong words, or garbled text
**Cause**: Background noise, overlapping speakers, weak microphone, or unsupported language/dialect
**Solution**: Use a quality microphone, reduce background noise, speak clearly. Check the language setting matches what you're speaking. For specialized jargon (medical, legal), expect some manual correction — the custom pronunciation learning feature improves over time.

### Can't find how to cancel subscription
**Symptom**: No cancel button in account settings
**Cause**: VoiceToNotes doesn't offer self-service cancellation
**Solution**: Email their support team to request cancellation. If unresponsive, dispute through your payment provider. Consider this before subscribing.
