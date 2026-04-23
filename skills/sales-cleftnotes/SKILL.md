---
name: sales-cleftnotes
description: "Cleft Notes platform help — Apple-native AI voice-to-notes app with on-device transcription that turns spoken thoughts into organized markdown notes with auto-headings. Use when setting up Cleft Notes for capturing voice memos and converting rambling thoughts into structured notes, configuring Obsidian or Notion sync to route Cleft notes into an existing knowledge base, troubleshooting recordings that fail after a couple minutes or produce garbled transcription output, setting up Zapier automations to send Cleft notes to project management or CRM tools, choosing between Cleft free and Plus plans, deciding whether Cleft or Voicenotes or AudioPen fits your voice capture workflow, or evaluating Cleft for ADHD-friendly voice-first note-taking on Apple devices. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Cleft Notes]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, platform]
---

# Cleft Notes Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Cleft (recording, transcription, AI scribe settings)
   - B) Configuring integrations (Obsidian, Notion, Zapier, Apple Shortcuts)
   - C) Troubleshooting (recording failures, garbled output, sync issues)
   - D) Choosing a plan (Basic free vs Plus) or comparing to Voicenotes/AudioPen
   - E) Workflow design (daily capture, meeting notes, content creation)

2. **What Apple devices are you using?**
   - A) iPhone only
   - B) iPhone + Mac
   - C) iPad (with Apple Pencil)
   - D) Apple Watch
   - E) Multiple Apple devices

3. **What's your primary use case?**
   - A) Personal thought capture / brain dumps
   - B) Meeting notes and action items
   - C) Content creation (blog drafts, social posts from voice)
   - D) Task and to-do capture while mobile
   - E) ADHD-friendly idea capture

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting Cleft to CRM via Zapier | `/sales-integration [question]` |

If the question is Cleft-specific, continue to Step 3.

## Step 3 — Cleft Notes platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, workflow patterns, comparison with alternatives.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Quick capture workflow**: Lock Screen widget or Apple Watch → speak freely → Cleft transcribes on-device + AI organizes with headings → edit in markdown editor → share or export
- **Knowledge base workflow**: Record → Cleft creates note → Obsidian auto-syncs markdown to vault (macOS) or Notion auto-pushes (one-way)
- **Automation pattern**: Zapier "New Note" trigger (Plus) → route to Asana, Todoist, Google Docs, Slack, or any connected app
- **Custom AI instructions** (Plus): Tell the AI scribe how to format output — bullet lists, specific heading styles, tone preferences

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Apple ecosystem only** — no Android, no Windows, no Linux. If you need cross-platform, consider Voicenotes (iOS + Android + web) or AudioPen (iOS + Android + Mac + Chrome + web).
- **5-minute free tier recording limit** — Basic plan caps recordings at 5 minutes. Plus extends to 30 minutes. For longer sessions, split into multiple recordings.
- **AI rewrites, not verbatim transcripts** — Cleft restructures and organizes your speech by default. New users who expect word-for-word transcripts are surprised by reformatted output with auto-generated headings.
- **Obsidian sync is macOS-only** — the Obsidian integration syncs markdown files to your local vault but only works on Mac, not iOS/iPadOS.
- **Notion integration is one-way** — notes push from Cleft to Notion. Edits in Notion don't sync back.
- **Custom AI instructions require Plus** — free tier users cannot customize how the AI scribe formats output.
- **No speaker diarization** — single-speaker only. Not suitable for multi-person meeting transcription with speaker labels.
- **No public API** — automation is Zapier-only (Plus) or Apple Shortcuts. No REST endpoints for custom integrations.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-voicenotes` — Voicenotes platform help — closest competitor with Ask AI, Obsidian/Notion sync, and Zapier automation. Install: `npx skills add sales-skills/sales --skill sales-voicenotes -a claude-code`
- `/sales-audiopen` — AudioPen platform help — voice-to-polished-text with custom writing styles and one-time payment. Install: `npx skills add sales-skills/sales --skill sales-audiopen -a claude-code`
- `/sales-integration` — Connect Cleft to your CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I have ADHD and need a voice app that captures my ideas while I'm walking — should I use Cleft or Voicenotes?"
**Skill does**: Compares both tools — Cleft is purpose-built for ADHD/neurodivergent users with on-device transcription and auto-organization, Apple-only. Voicenotes works on both iOS and Android with Ask AI search and meeting recording. Recommends Cleft if Apple-only and wants the most frictionless brain-dump-to-organized-note experience, Voicenotes if cross-platform or needs search across all notes.

**User**: "I record voice memos in Cleft and want them to automatically appear in my Obsidian vault — how do I set this up?"
**Skill does**: Confirms Obsidian sync is Plus-only and macOS-only. Walks through enabling it in Settings → Integrations, selecting the vault folder. Notes that iOS recordings sync via iCloud to Mac first, then to Obsidian. Warns about the macOS-only limitation.

**User**: "My Cleft recordings keep failing after about 2 minutes and I lose everything"
**Skill does**: Identifies this as a known App Store issue. Suggests checking iOS/macOS version, ensuring adequate storage, trying shorter test recordings. Recommends contacting Cleft support (responsive developer) with device model and OS version. Notes the app has no audio recovery for failed recordings.

## Troubleshooting

### Recording fails after a couple minutes with no audio recovery
**Symptom**: Recording appears to complete but the note is empty or never processes, especially on longer recordings.
**Fix**: Update to the latest Cleft version — the developer actively patches recording stability issues. Check available device storage. Test with a short 30-second recording to isolate the issue. If persistent, contact support at hello@cleftnotes.com with device model and OS version — the team is known for rapid response with beta builds.

### Transcription produces garbled or nonsensical text
**Symptom**: Output contains random words or phrases that don't match what was spoken ("translating eurkeoan jekslah mounmoa").
**Fix**: On-device transcription quality depends on audio clarity. Minimize background noise, speak at a moderate pace, ensure the microphone isn't obstructed. Try recording in a quieter environment. If the issue persists across recordings, reinstall the app to refresh the transcription model.

### Offline notes fail to sync when reconnecting
**Symptom**: Notes recorded offline don't appear on other devices after coming back online.
**Fix**: Force-sync by opening Cleft on the device that has the offline notes. Check that iCloud sync is enabled in device Settings. If notes are stuck, try toggling airplane mode off/on to force a reconnection. The app processes offline recordings locally but needs connectivity to sync across devices.
