---
name: sales-voicenotes
description: "Voicenotes platform help — AI voice notes and meeting transcription with Ask AI search, Zapier automation, and Obsidian/Notion sync. Use when setting up Voicenotes for capturing voice memos and converting to structured notes, configuring Zapier automations to route transcripts to CRM or project tools, troubleshooting failed uploads or lost voice recordings, fixing transcription accuracy issues with multilingual or accented speech, connecting Voicenotes to Obsidian or Notion for knowledge management, or choosing between Voicenotes Individual vs Teams plan. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Voicenotes]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, platform]
github: "https://github.com/VoicenotesAI"
---

# Voicenotes Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Voicenotes (recording, transcription, Ask AI)
   - B) Configuring integrations (Zapier, Obsidian, Notion, webhooks)
   - C) Meeting recording and reports
   - D) Troubleshooting (upload failures, transcription issues, tag bugs)
   - E) Choosing a plan (Free vs Individual vs Teams)

2. **What platform are you on?**
   - A) iOS / Apple Watch
   - B) Android / WearOS
   - C) Web
   - D) Multiple devices

3. **What's your primary use case?**
   - A) Personal voice journaling / thought capture
   - B) Meeting notes and action items
   - C) Content creation (blog posts, social, emails from voice)
   - D) Team collaboration

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about… | Route to… |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting Voicenotes to CRM via Zapier/webhooks | `/sales-integration [question]` |

If the question is Voicenotes-specific, continue to Step 3.

## Step 3 — Voicenotes platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, Zapier triggers, webhook setup, Ask AI, meeting recording.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Voice capture workflow**: Record → AI transcribes → review/edit → tag → thread related notes
- **Automation pattern**: Attach "Zapier" tag or use trigger → Zapier routes to destination (Notion, CRM, Slack)
- **Meeting workflow**: Connect calendar → auto-join or manual record → meeting report generated → share or export
- **Search strategy**: Use Ask AI for semantic questions across notes; use tags for categorical filtering

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No speaker diarization** — single-speaker only. Multi-person meetings transcribe as one continuous stream without speaker labels. For speaker-labeled transcripts, consider Fireflies, Otter, or Fathom.
- **Code-switching unreliable** — if you mix languages (e.g., Hindi-English), transcription quality drops significantly. Select the dominant language and expect errors on the secondary. No multi-language selection.
- **No public REST API** — automation is Zapier-only or webhooks. The Obsidian plugin uses a private token-based API not documented for general use.
- **Search is keyword-based, not semantic** — Ask AI uses LLM Q&A over notes but the search bar itself does basic text matching. For semantic search, use Ask AI instead.
- **No workspace separation** — all notes (personal + professional) live in one space. Use tags to segment, but there's no access control between categories.
- **Offline recording can lose notes** — the offline feature is early-stage. Notes recorded offline may fail to sync when reconnecting. Record in areas with connectivity when possible.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-integration` — Connect Voicenotes to your CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I record voice memos throughout the day but forget to review them — how do I get Voicenotes to auto-send summaries to Notion?"
**Skill does**: Walks through Zapier setup with "Summary Created" trigger → Notion "Create Page" action, including tag-based filtering.

**User**: "My team is on the Teams plan but recordings keep failing to upload on mobile"
**Skill does**: Troubleshoots upload failures — check connectivity, app version, retry from web app, contact support with recording ID.

**User**: "I want to use Voicenotes for meeting notes but I need speaker labels — is that possible?"
**Skill does**: Explains no speaker diarization exists, routes to `/sales-note-taker` for alternatives with speaker ID (Fireflies, Otter, Fathom).

## Troubleshooting

### Voice notes fail to upload or disappear
**Symptom**: Recording completes but never appears in the app; retry/download buttons don't work.
**Fix**: Check internet connectivity. Try accessing the note from the web app — some uploads succeed server-side but fail to display on mobile. Update to the latest app version. If the note is truly lost, contact team@voicenotes.com with the approximate recording time. Keep recordings under 30 min on unstable connections.

### Transcription is inaccurate or incomplete
**Symptom**: Words are garbled, half the recording is missing from the transcript, or wrong language detected.
**Fix**: Check language settings — select the dominant language you speak. Avoid code-switching mid-recording. For long recordings, the web app allows transcript regeneration (not available on iOS). Speak clearly and avoid background noise. If transcription cuts off, try splitting into shorter recordings.

### Tags don't stick on mobile
**Symptom**: You tag a note on mobile but the tag doesn't appear when you check later.
**Fix**: Known mobile bug — tag from the web app as a workaround. Pull-to-refresh on mobile after tagging to verify. Report persistent issues to team@voicenotes.com.
