---
name: sales-notewave
description: "NoteWave platform help — iOS AI note-taker with one-tap recording, transcription in 100+ languages, AI summaries, speaker identification, flashcard/quiz generation, YouTube URL and PDF document import. Use when setting up NoteWave for meeting recording, NoteWave transcription not working or inaccurate, NoteWave vs Otter or Notta or Fathom or Cleft Notes, NoteWave premium subscription not activating, choosing a simple iOS-only AI note-taking app for meetings or lectures, or evaluating NoteWave for a small team. Do NOT use for CRM integration or API automation (NoteWave has none — use /sales-note-taker for platforms with API/CRM), or for sales coaching and deal intelligence (use /sales-coaching)."
argument-hint: "[describe your NoteWave question or issue]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# NoteWave Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Evaluating NoteWave vs alternatives (selection)
   - B) Setting up NoteWave or configuring features
   - C) Troubleshooting a specific issue (transcription, subscription, audio)
   - D) Understanding pricing and what's included on each tier

2. **What's your primary use case?**
   - A) Meeting transcription (virtual or in-person)
   - B) Lecture/class note-taking and study materials
   - C) Research — transcribing interviews or recordings
   - D) Personal voice notes and idea capture

3. **What devices are you using?**
   - A) iPhone only
   - B) iPad
   - C) Mac (Apple Silicon)
   - D) Multiple Apple devices

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing note-takers across platforms (not just NoteWave) | `/sales-note-taker {user's question}` |
| Need CRM integration or API automation | `/sales-note-taker {user's question}` — NoteWave has no API or CRM |
| Sales coaching or call scoring | `/sales-coaching {user's question}` |
| General tool integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — NoteWave platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data handling, known limitations, and workarounds.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Selection framework:**
- NoteWave is best for Apple-ecosystem users who want a simple, privacy-first recording + transcription + AI summary app with study features (flashcards, quizzes)
- It has no API, no CRM, no webhooks, no desktop integrations beyond Apple — if you need those, look elsewhere
- Compare on: language support (100+), privacy (audio deleted after processing), study features (flashcards), price ($12.99/mo or $44.99-79.99/yr)
- For sales teams needing CRM sync, coaching, or API access, redirect to Fathom, Fireflies, or tl;dv

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Apple ecosystem only.** iOS 15.1+, macOS 12.0+ (Apple Silicon only), visionOS. No Android, no Windows, no web app. If your team has mixed devices, NoteWave won't work.
- **Apple Sign-in required.** No email/password registration. Every user needs an Apple ID.
- **No API, no webhooks, no CRM.** Zero integration surface. You cannot programmatically access transcripts, export to a CRM, or automate workflows. Export is manual only.
- **Free tier is extremely limited — 3 notes total.** Not 3 per month; 3 ever. You're essentially forced to evaluate quickly and decide on Premium.
- **Audio is deleted immediately after processing.** Privacy benefit, but means you cannot re-process or re-transcribe with better settings later.
- **Pricing tiers are confusing.** There are 4 Premium options ($9.99/wk, $12.99/mo, $44.99/yr, $79.99/yr) with unclear feature differences between the two annual tiers.
- **AI summaries and flashcards are AI-generated.** Review before relying on them for important decisions — standard AI accuracy caveats apply.

## Related skills

- `/sales-note-taker` — Compare AI meeting note-takers, pick the right one, wire its API into CRM/warehouse/Slack. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Evaluating NoteWave for a small team
**User says**: "I have a 4-person team and we need meeting transcription. Is NoteWave a good fit?"
**Skill does**: Checks device requirements (all Apple?), explains NoteWave has no team features, no shared workspace, no CRM, Apple Sign-in only. Recommends Fathom (free, HubSpot/Salesforce sync) or Fireflies (team analytics) instead for team use. Notes NoteWave is better suited for individual use.

### Example 2: NoteWave subscription question
**User says**: "What's the difference between the $44.99/yr and $79.99/yr NoteWave plans?"
**Skill does**: Reads platform guide, notes that pricing tier differences are not clearly documented on the App Store listing. Recommends checking the in-app subscription screen for specific feature breakdowns or contacting contact@notewave.ai.

### Example 3: Wanting to export NoteWave transcripts to a CRM
**User says**: "How do I get my NoteWave transcripts into HubSpot automatically?"
**Skill does**: Explains NoteWave has no API, webhooks, or CRM integration — export is manual only. Recommends switching to Fathom Business ($25/seat annual) or Fireflies Business ($19/seat annual) for native HubSpot sync, or using Wave ($11.67/mo) for API-based custom pipelines.

## Troubleshooting

### Transcription quality is poor or garbled
**Symptom**: Transcript has many errors, missing words, or incorrect speaker labels
**Cause**: Background noise, low microphone quality, or unsupported accent/dialect
**Solution**: Record in a quiet environment. Use an external microphone if possible. Check that the correct language is selected before recording. NoteWave uses Google Cloud AI for transcription — accuracy varies by language and audio quality.

### Premium subscription not activating
**Symptom**: Paid for Premium but still seeing free-tier limits
**Cause**: Apple subscription sync delay or account mismatch
**Solution**: Check Settings → Apple ID → Subscriptions to verify the subscription is active. Try restoring purchases in the NoteWave app. If using Family Sharing, ensure the subscription is shared. Contact contact@notewave.ai if the issue persists.

### Notes hitting the free-tier limit
**Symptom**: "Upgrade to Premium" prompt after creating 3 notes
**Cause**: Free tier allows only 3 notes total (not per month)
**Solution**: Subscribe to Premium or delete existing notes to free up slots. The $12.99/mo plan is the lowest barrier; the $44.99/yr plan is the best value if you plan to use it long-term.
