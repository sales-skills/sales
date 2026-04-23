---
name: sales-talknotes
description: "TalkNotes platform help — AI voice note app that converts speech into structured text using 100+ pre-made templates (blog posts, emails, to-do lists, meeting notes). Use when setting up TalkNotes for capturing voice memos and converting to structured content, configuring Zapier automations to route TalkNotes notes to Notion or other tools, troubleshooting recordings that fail to upload or process on mobile, choosing between TalkNotes Plus and Pro plans, fixing transcription accuracy issues with background noise or accented speech, or deciding whether TalkNotes or Voicenotes or AudioPen fits your voice capture workflow. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in TalkNotes]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, platform]
---

# TalkNotes Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up TalkNotes (recording, transcription, templates)
   - B) Configuring integrations (Zapier, webhooks, export)
   - C) Content creation using templates (blog posts, emails, to-do lists)
   - D) Troubleshooting (upload failures, transcription issues, processing errors)
   - E) Choosing a plan (Plus vs Pro) or comparing to Voicenotes/AudioPen

2. **What platform are you on?**
   - A) iOS
   - B) Android
   - C) Web
   - D) Multiple devices

3. **What's your primary use case?**
   - A) Personal thought capture / journaling
   - B) Content creation (blog posts, social media, emails from voice)
   - C) Meeting notes and action items
   - D) Lecture or interview transcription

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting TalkNotes to CRM via Zapier/webhooks | `/sales-integration [question]` |

If the question is TalkNotes-specific, continue to Step 3.

## Step 3 — TalkNotes platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, templates, integrations, Zapier setup, workflow patterns.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Voice capture workflow**: Record → choose template style → AI transcribes + structures → edit → export (PDF/MD/text)
- **Template workflow**: Pick from 100+ pre-made templates OR create custom styles → record → AI formats to match template
- **Automation pattern**: Zapier "Note Created" trigger → route to Notion, Google Docs, Slack, CRM, or any connected app
- **Sharing workflow**: Use shareable recorder link (Pro) to collect guest recordings → notes appear in your account

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No permanent free tier** — only a 7-day trial. After trial ends you must subscribe or lose access. Unlike Voicenotes (free tier with limits) or AudioPen (one-time payment), TalkNotes requires an ongoing subscription.
- **No public API** — automation is Zapier-only or webhooks. No REST endpoints for custom integrations. Contact support@talknotes.io for API access requests.
- **20-minute recording limit on Plus** — Plus plan caps recordings at 20 minutes. Pro extends to 2 hours (25 recordings). For unlimited-length recordings, consider Voicenotes or Fireflies.
- **No speaker diarization** — single-speaker only. Multi-person recordings transcribe as one continuous stream. For speaker-labeled transcripts, use Fireflies, Otter, or Fathom.
- **Mobile upload reliability** — App Store reviews report intermittent upload failures on mobile, especially on unstable connections. The web app is more reliable for processing.
- **Template-driven, not verbatim** — TalkNotes restructures speech into template formats by default. If you need raw transcripts, look for a plain transcript template option.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-voicenotes` — Voicenotes platform help — closest competitor with Ask AI, Obsidian/Notion sync, and Zapier automation. Install: `npx skills add sales-skills/sales --skill sales-voicenotes -a claude-code`
- `/sales-audiopen` — AudioPen platform help — voice-to-polished-text with custom writing styles and one-time payment. Install: `npx skills add sales-skills/sales --skill sales-audiopen -a claude-code`
- `/sales-integration` — Connect TalkNotes to your CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I record client meeting notes on my phone but the output is always a wall of text — how do I get structured notes with action items?"
**Skill does**: Recommends using the "Meeting Notes" or "To-Do List" template, walks through recording → template selection → review workflow. Notes that Plus plan (20 min) may be sufficient for most meetings but Pro (2 hr) is needed for longer sessions.

**User**: "I want TalkNotes to automatically create a Notion page every time I record a voice memo"
**Skill does**: Walks through Zapier setup — "Note Created" trigger → Notion "Create Page" action, mapping the note title and content to Notion properties. Notes that Zapier integration requires an active subscription.

**User**: "My recordings keep failing to process on my iPhone — the app just spins and nothing happens"
**Skill does**: Troubleshoots upload failures — check internet connectivity, try the web app as fallback, update to latest app version, check if trial has expired. If the issue persists, contact support@talknotes.io with recording timestamp.

## Troubleshooting

### Recordings fail to upload or process on mobile
**Symptom**: Recording completes but never appears as a note; the app shows a spinner indefinitely.
**Fix**: Check internet connectivity — TalkNotes requires server-side processing. Switch to Wi-Fi if on cellular. Try accessing the web app to see if the recording arrived server-side. Update to the latest app version (v1.6.5+ fixed prior crash bugs). If the recording is truly lost, contact support@talknotes.io with the approximate recording time.

### Transcription is inaccurate or garbled
**Symptom**: Words are wrong, sentences are jumbled, or the wrong language is detected.
**Fix**: Check language settings — select the dominant language before recording. Minimize background noise and speak clearly. The app works best with a single speaker in a quiet environment. For noisy environments, consider Krisp for noise cancellation before recording.

### Trial expired and lost access to notes
**Symptom**: After the 7-day trial ends, you can't access previously recorded notes.
**Fix**: Subscribe to a Plus or Pro plan to regain access. Before the trial ends, export important notes as PDF, Markdown, or plain text. TalkNotes does not offer a permanent free tier — plan accordingly.
