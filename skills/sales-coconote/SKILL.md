---
name: sales-coconote
description: "Coconote platform help — Quizlet's AI note-taker that records lectures and auto-generates study guides, flashcards, quizzes, and AI-narrated podcasts from recordings. Use when setting up Coconote for recording lectures and generating study materials, troubleshooting recordings that crash or fail to save on long lectures, figuring out why Coconote requires payment info before accessing the free plan, choosing between Coconote free and Pro subscription tiers, comparing Coconote to Voicenotes or AudioPen or Cleft Notes for voice capture, evaluating Coconote for student lecture note-taking across iOS and Android, or understanding why Coconote only generates one quiz and one flashcard set per note. Do NOT use for comparing AI meeting note-takers for sales teams (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Coconote]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, study-tools, platform]
github: "https://github.com/quizlet"
---

# Coconote Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Coconote (recording, transcription, study material generation)
   - B) Troubleshooting (recording crashes, long lecture failures, processing issues)
   - C) Understanding pricing (free vs Pro tiers, subscription confusion)
   - D) Comparing Coconote to alternatives (Voicenotes, AudioPen, Cleft Notes, Otter)
   - E) Workflow design (lecture capture, study routines, folder organization)

2. **What devices are you using?**
   - A) iPhone / iPad
   - B) Android
   - C) Web browser
   - D) Mac (M1+)
   - E) Apple Watch / Vision Pro

3. **What's your primary use case?**
   - A) Recording university lectures
   - B) Studying with AI-generated flashcards and quizzes
   - C) Organizing notes across courses with AI chat
   - D) Personal voice capture / brain dumps
   - E) Language learning or multilingual transcription

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms for sales | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting tools via Zapier or webhooks | `/sales-integration [question]` |

If the question is Coconote-specific, continue to Step 3.

## Step 3 — Coconote platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, study material generation, comparison with alternatives.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Lecture capture workflow**: Open app → hit record during lecture → Coconote transcribes and generates study guide + flashcards + quiz automatically
- **Study routine**: Record → review AI study guide → quiz yourself → use AI chat to ask questions about the material
- **Multi-course organization**: Create folders per course → AI chat scoped to folder turns each course into a searchable knowledge base
- **Multilingual use**: Record in any of 100+ supported languages → translate output to preferred study language

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free tier requires payment info** — users report being forced to enter credit card details before accessing the free plan. Cancel before the 1-week trial ends to avoid charges.
- **Confusing subscription pricing** — App Store shows multiple price points ($9.99/mo, $19.99/mo, $99.99/yr, $129.99/yr). The yearly option can appear worded as monthly — check the billing cycle carefully.
- **Long recordings fail to process** — lectures over 2-3 hours may not generate study materials. Split into multiple shorter recordings as a workaround.
- **One quiz + one flashcard set per note** — each recording generates a single quiz (15 questions max) and one flashcard deck. No way to generate additional sets from the same recording.
- **No YouTube URL processing** — cannot paste a YouTube link and generate notes. Must record or upload audio directly.
- **No camera/image scanning** — cannot photograph handwritten notes or textbook pages for processing.
- **No integrations** — no Zapier, no webhooks, no API, no CRM. Export is PDF only. Notes live inside the Coconote ecosystem.
- **Customer support response times** — multiple App Store reviews report slow or no response from support.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-voicenotes` — Voicenotes platform help — cross-platform voice notes with Ask AI search and Obsidian/Notion sync. Install: `npx skills add sales-skills/sales --skill sales-voicenotes -a claude-code`
- `/sales-cleftnotes` — Cleft Notes platform help — Apple-native on-device transcription with ADHD-friendly auto-organization. Install: `npx skills add sales-skills/sales --skill sales-cleftnotes -a claude-code`
- `/sales-audiopen` — AudioPen platform help — voice-to-polished-text with custom writing styles and one-time payment. Install: `npx skills add sales-skills/sales --skill sales-audiopen -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I record 3-hour lectures and Coconote keeps failing to generate notes from them — what can I do?"
**Skill does**: Identifies this as a known limitation with long recordings. Recommends splitting lectures into 45-60 minute segments, using the pause/resume approach, or recording in two parts. Notes that processing failures on long recordings don't produce error messages — the note just appears empty.

**User**: "Is Coconote free? It's asking me for my credit card before I can use it"
**Skill does**: Explains the free tier exists but requires payment info for the 1-week Pro trial. Walks through how to access free tier without being charged — enter payment, then cancel before trial ends. Warns about the confusing pricing display in the App Store.

**User**: "I'm a student deciding between Coconote and Voicenotes — which is better for lecture notes?"
**Skill does**: Compares both — Coconote is purpose-built for students with auto-generated flashcards, quizzes, and study guides. Voicenotes is more general-purpose with Ask AI search and better integrations (Obsidian, Notion, Zapier). Recommends Coconote if study material generation is the priority, Voicenotes if cross-app workflow and search matter more.

## Troubleshooting

### Recording crashes when saving with no audio recovery
**Symptom**: App freezes or crashes mid-recording, especially on longer sessions. The recording is lost with no recovery option.
**Fix**: Update to the latest Coconote version. Check available device storage (transcription needs space). Test with a short recording first. For long lectures, split into 45-60 minute segments. If persistent, try the web version instead of the mobile app.

### Study materials generate in wrong language
**Symptom**: Notes recorded in English produce flashcards or quizzes in Russian or another unexpected language.
**Fix**: Check the app's language settings — ensure the input and output languages match. Re-process the note after correcting language settings. If the issue persists, try re-recording a shorter segment and verifying the language is detected correctly.

### Headphones prevent recording from starting
**Symptom**: Recording fails to start or captures no audio when headphones (wired or Bluetooth) are connected.
**Fix**: Remove headphones and record using the device's built-in microphone. This is a known limitation on some device/OS combinations. If you must use headphones, try toggling Bluetooth off/on or switching between wired and wireless.
