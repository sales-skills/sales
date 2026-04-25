---
name: sales-reason8
description: "reason8 platform help — AI meeting note-taker for in-person meetings using multi-smartphone audio capture. Use when setting up reason8 for in-person meeting recording, configuring multi-device recording to improve audio quality, troubleshooting speaker identification or transcription accuracy, understanding reason8 pricing tiers (Free 15 min / Pro $19.99/mo / Enterprise custom), choosing between reason8 and other in-person recording tools (Speakwise, Omi, Plaud, Wave), evaluating reason8 for a team that primarily does face-to-face meetings, or understanding reason8's export and sharing features. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in reason8]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, in-person, transcription, platform]
---

# reason8 Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up reason8 for in-person meeting recording
   - B) Multi-device recording (combining audio from multiple phones)
   - C) Troubleshooting (transcription accuracy, speaker ID, audio quality)
   - D) Exporting and sharing meeting notes
   - E) Choosing a plan (Free vs Pro vs Enterprise) or comparing to alternatives

2. **What's your primary use case?**
   - A) Sales meetings (face-to-face client meetings, presentations)
   - B) Internal meetings (team meetings, all-hands, standups)
   - C) Interviews (hiring, research, journalism)
   - D) Project management (capturing decisions and action items)

3. **Team size?**
   - A) Individual / solo
   - B) Small team (2-10)
   - C) Larger team (10+)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| General CRM/tool integration patterns | `/sales-integration [question]` |

If the question is reason8-specific, continue to Step 3.

## Step 3 — reason8 platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, multi-device setup, export options, known limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Basic recording workflow**: Open app → start recording → tap highlight button for key moments → stop → AI generates transcript + summary + action items
- **Multi-device workflow**: All participants open reason8 on their phones → start recording on each device → reason8 combines multiple audio streams into a single transcript with better speaker separation
- **Sharing workflow**: After processing, share summary via app → recipients get meeting notes without needing reason8 accounts
- **Export workflow**: Export transcript and summary to review or send to colleagues

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features that may be outdated.*

- **No public API** — reason8 has no REST API, no webhooks, no Zapier/Make connectors. If you need programmatic access to transcripts, consider Fathom, Fireflies, or Siro.
- **No CRM integration** — cannot auto-log meeting notes to Salesforce, HubSpot, or any CRM. Slack is the only documented integration. Manual copy-paste or export is required.
- **15-minute free tier cap** — free plan limits recordings to 15 minutes, which is too short for most business meetings. Pro is required for practical use.
- **English only** — SourceForge lists English as the only supported language. Not suitable for multilingual teams.
- **No video call integration** — cannot join or record Zoom, Teams, or Google Meet. In-person and phone only.
- **Very limited reviews** — no G2 reviews found, sparse Capterra/SourceForge presence. Hard to verify current feature claims independently.
- **Patent-pending multi-device approach is unique but unproven at scale** — the multi-smartphone audio fusion is reason8's differentiator, but limited independent validation of quality claims.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-speakwise` — Speakwise platform help — iOS-native in-person meeting recorder with Notion sync, cheapest at $60/yr. Install: `npx skills add sales-skills/sales --skill sales-speakwise -a claude-code`
- `/sales-wave` — Wave platform help — mobile-first AI note-taker with REST API, semantic search, and webhooks. Install: `npx skills add sales-skills/sales --skill sales-wave -a claude-code`
- `/sales-plaud` — Plaud platform help — hardware AI voice recorder for in-person + phone calls with VCS technology. Install: `npx skills add sales-skills/sales --skill sales-plaud -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I do a lot of face-to-face client meetings and want to capture notes automatically. Is reason8 worth it?"
**Skill does**: Explains reason8's multi-device recording approach for in-person meetings, notes the $19.99/mo Pro price, compares to alternatives (Speakwise at $60/yr for iOS-only Notion users, Wave for API access, Omi for open-source wearable, Plaud for hardware recorder), and flags the no-CRM and no-API limitations.

**User**: "How does reason8's multi-device recording work? Can I use it for a 6-person meeting?"
**Skill does**: Explains that multiple attendees open reason8 on their phones and record simultaneously, then reason8 fuses the audio streams into one transcript with speaker identification. Notes that speaker diarization accuracy may degrade with more participants.

**User**: "I need my meeting transcripts in Salesforce automatically. Can reason8 do that?"
**Skill does**: Explains that reason8 has no CRM integration and no API — Salesforce sync is not possible. Recommends Fathom Business ($25/user/mo) or Fireflies Business ($19/seat/mo) for HubSpot/Salesforce CRM auto-sync, or Wave for a mobile-first tool with API access.

## Troubleshooting

### Transcription accuracy is poor
**Symptom**: Transcript contains many errors, missed words, or garbled text.
**Fix**: Ensure phones are placed close to speakers (within 3 feet). Use multi-device recording — each participant recording on their own phone produces significantly better results than a single device. Minimize background noise. Check that the room doesn't have excessive echo.

### Speaker identification is wrong
**Symptom**: Transcript attributes speech to the wrong person.
**Fix**: Multi-device recording improves speaker separation because each phone primarily captures the nearest speaker. Position devices closer to their respective speakers. In single-device mode, speaker diarization degrades with more than 2-3 participants.

### Recording doesn't process or summary is missing
**Symptom**: Recording completes but transcript or summary never appears.
**Fix**: Check internet connectivity — reason8 requires server-side processing. Ensure the app is updated to the latest version. If a recording is very short, processing may be skipped. Try force-closing and reopening the app, then check if the recording appears.
