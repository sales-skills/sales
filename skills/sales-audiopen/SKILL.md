---
name: sales-audiopen
description: "AudioPen platform help — voice-to-polished-text tool that rewrites spoken thoughts into structured writing with custom styles. Use when setting up AudioPen for capturing voice memos and converting to polished text, configuring custom writing styles or uploading voice samples for style matching, troubleshooting recordings that don't process or produce garbled output, setting up Zapier automations to route AudioPen notes to Notion or other tools, combining multiple voice notes into a single document with SuperSummaries, choosing between AudioPen free and Prime plans, or deciding whether AudioPen or Voicenotes fits your voice capture workflow. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in AudioPen]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, platform]
---

# AudioPen Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up AudioPen (recording, transcription, custom styles)
   - B) Configuring integrations (Zapier, webhooks)
   - C) SuperSummaries or combining notes
   - D) Troubleshooting (processing failures, style issues, upload problems)
   - E) Choosing a plan (Free vs Prime) or comparing to Voicenotes

2. **What platform are you on?**
   - A) iOS
   - B) Android
   - C) Mac app
   - D) Chrome extension
   - E) Web

3. **What's your primary use case?**
   - A) Personal thought capture / journaling
   - B) Content creation (blog posts, social, emails from voice)
   - C) Professional documentation (meeting notes, client summaries, legal memos)
   - D) Multilingual writing

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting AudioPen to CRM via Zapier/webhooks | `/sales-integration [question]` |

If the question is AudioPen-specific, continue to Step 3.

## Step 3 — AudioPen platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, custom styles, SuperSummaries, integrations, workflow patterns.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Voice capture workflow**: Record → AI transcribes + rewrites → pick style → copy/share → optionally combine into SuperSummary
- **Style workflow**: Create custom style with description OR upload writing sample → apply to new recordings or restyle existing notes
- **Automation pattern**: Zapier "New Note" trigger → route to Notion, Google Docs, email, CRM, or any connected app
- **Multilingual workflow**: Record in any supported language → AudioPen transcribes and rewrites in same or different output language (64 languages)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API** — automation is Zapier-only (Prime required) or webhooks. No REST endpoints for custom integrations. If you need a programmable API, consider Fathom or Fireflies.
- **15-minute recording limit** — Prime users are capped at 15 minutes per recording. For longer sessions, split into multiple recordings and use SuperSummaries to combine.
- **AI rewrites, not verbatim transcripts** — AudioPen's default behavior polishes and restructures your speech. If you need a word-for-word transcript, look for the "Transcript" style option. This catches new users off guard.
- **One-time payment, not subscription** — unique pricing model. No auto-renewal, but also no refunds. Verify the tool fits before buying.
- **Limited custom prompt control** — you can create custom styles but cannot inject arbitrary system prompts. The rewriting is style-guided, not prompt-engineered.
- **No speaker diarization** — single-speaker only. Not suitable for multi-person meetings.
- **Upload limits on Prime** — 100 audio file uploads per 4-week rolling window, max 100MB each. Heavy batch users may hit this.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-voicenotes` — Voicenotes platform help — closest competitor with Ask AI, Obsidian/Notion sync, and Zapier automation. Install: `npx skills add sales-skills/sales --skill sales-voicenotes -a claude-code`
- `/sales-integration` — Connect AudioPen to your CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I dictate client meeting summaries in the car and want them to land in Google Docs automatically — how do I set that up?"
**Skill does**: Walks through Zapier setup with "New Note" trigger → Google Docs "Create Document" action, recommends creating a custom "Meeting Summary" style for consistent formatting.

**User**: "I bought AudioPen Prime but the AI keeps rewriting my notes in a style I don't like — too formal and wordy"
**Skill does**: Explains custom styles — create a new style with a description like "casual, concise bullet points" or upload a writing sample that matches desired tone. Shows how to restyle existing notes without re-recording.

**User**: "I have 30 voice memos from a week-long conference and want to turn them into one coherent trip report"
**Skill does**: Explains SuperSummaries — select the notes to combine, AudioPen generates a unified document. Recommends tagging conference notes first, then using consistent styles before combining.

## Troubleshooting

### Recording doesn't process or produces garbled output
**Symptom**: Recording completes but the note never appears, or the text output is nonsensical.
**Fix**: Check internet connectivity — AudioPen requires server-side processing. Try the web app if mobile fails. For garbled output, check language settings and minimize background noise. If the recording is very short (<5 seconds), AudioPen may skip processing.

### Zapier automation not triggering on new notes
**Symptom**: Notes are created in AudioPen but the Zap never fires.
**Fix**: Verify AudioPen Prime is active (Zapier integration is Prime-only). Check the Zap's trigger configuration — the "New Note" trigger fires instantly but requires the AudioPen connection to be authorized. Re-authorize the connection in Zapier if stale. Test with Zapier's built-in "Test trigger" to confirm the connection works.

### Custom style produces unexpected results
**Symptom**: Output doesn't match the style description or uploaded sample.
**Fix**: Make style descriptions specific and concrete — "3-5 bullet points, no headers, casual tone" works better than "professional." If using a sample, upload 3+ examples of the desired output to give AudioPen more to learn from. Restyle the same note multiple times — output varies slightly each time.
