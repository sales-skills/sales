---
name: sales-hynote
description: "HyNote AI platform help — full-stack AI note-taker that captures audio, meetings, PDFs, images, YouTube videos, and web pages into structured notes with flashcards, quizzes, mind maps, and presentation generation. Use when setting up HyNote for recording meetings or lectures and generating structured notes, troubleshooting transcription accuracy or speaker identification issues, figuring out which HyNote plan includes real-time transcription and Notion export, comparing HyNote to Otter or Granola or Coconote for AI note-taking, evaluating HyNote for multilingual transcription across web and mobile, understanding why exported notes don't include transcripts on the free plan, or deciding whether HyNote Teams is worth the per-seat cost. Do NOT use for comparing AI meeting note-takers for sales teams (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in HyNote]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# HyNote AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up HyNote (recording, transcription, note generation)
   - B) Troubleshooting (transcription accuracy, speaker ID, export issues)
   - C) Understanding pricing (Free vs Pro vs Plus vs Unlimited vs Teams)
   - D) Comparing HyNote to alternatives (Otter, Granola, Coconote, Fireflies)
   - E) Workflow design (meeting capture, study routines, content creation)

2. **What devices are you using?**
   - A) iPhone / iPad
   - B) Android
   - C) Web browser
   - D) Apple Watch
   - E) Multiple (cross-device sync)

3. **What's your primary use case?**
   - A) Meeting recording and transcription
   - B) Lecture capture and study material generation
   - C) Content creation (podcasts, presentations, blog posts)
   - D) File processing (PDF summaries, image OCR, YouTube transcription)
   - E) Multilingual transcription or translation

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms for sales | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting tools via Zapier or webhooks | `/sales-integration [question]` |

If the question is HyNote-specific, continue to Step 3.

## Step 3 — HyNote platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, content generation, comparison with alternatives.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Meeting capture workflow**: Connect calendar → HyNote auto-joins Zoom/Meet/Teams → get AI summary + action items + transcript after the meeting
- **Lecture capture**: Open app → record → HyNote generates structured notes + flashcards + quizzes automatically
- **Content creation**: Record or upload → generate podcast, presentation slides, or infographics using credits
- **File processing**: Upload PDF/image/video or paste YouTube URL → get AI summary and structured notes
- **Cross-device**: Record on Apple Watch or phone → notes sync automatically to web and tablet

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Transcript export is Pro+ only** — free tier records and transcribes but cannot export transcripts. Upgrade to Pro ($6.66/mo annual) for transcript export.
- **Real-time transcription requires Plus+** — live transcription during meetings is not available on Pro. Plus ($10.83/mo annual) or higher needed.
- **Notion/Google Docs export is Plus+ only** — free and Pro users can only export via PDF. Notes transfer to Notion and Google Docs requires Plus or Unlimited.
- **CRM integration is Unlimited only** — CRM connectivity only on the $15.83/mo annual tier.
- **Credits are one-time, not monthly** — podcast, slides, and infographic credits (300-600 depending on plan) are granted once at signup, not refilled monthly. Credit costs: 3-min podcast = 10 credits, 8-slide deck = 20 credits, 1 infographic = 30 credits.
- **No public API** — no REST endpoints, no webhooks, no Zapier. Only way to get content out is PDF export or Notion/Google Docs (Plus+).
- **Speaker identification is Plus+ only** — Pro tier does not include high-accuracy speaker identification.
- **Refund process confusion** — at least one report of misleading refund instructions (directing web purchasers to App Store refund). Contact support@hynote.ai directly for web purchases.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-coconote` — Coconote platform help — Quizlet's AI lecture note-taker with auto-generated study materials. Install: `npx skills add sales-skills/sales --skill sales-coconote -a claude-code`
- `/sales-voicenotes` — Voicenotes platform help — cross-platform voice notes with Ask AI search and Obsidian/Notion sync. Install: `npx skills add sales-skills/sales --skill sales-voicenotes -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I need to record 2-hour meetings but HyNote keeps cutting me off at 60 minutes — what's going on?"
**Skill does**: Identifies this as a plan limitation — Pro tier caps recording sessions at 60 minutes. Recommends upgrading to Plus (120-minute sessions) or Unlimited (no session limit). Notes that Plus is $10.83/mo annual vs Pro's $6.66/mo annual.

**User**: "Can I get my HyNote transcripts into Notion automatically?"
**Skill does**: Explains that Notion export requires Plus plan or higher ($10.83/mo annual). Free and Pro users are limited to PDF export. Walks through the Notes Transfer feature available on Plus+.

**User**: "I'm choosing between HyNote and Otter for recording multilingual meetings — which handles multiple languages better?"
**Skill does**: Compares both — HyNote positions itself as having superior multilingual accuracy with frequent algorithm updates for accents and language transitions. Otter is stronger on third-party integrations and real-time collaboration. Recommends HyNote if multilingual accuracy is the priority, Otter if deep Zoom/Teams integration and real-time captions matter more.

## Troubleshooting

### Recording session cuts off before expected time
**Symptom**: Recording stops at 60 or 120 minutes even though the meeting is still going.
**Fix**: Check your plan — Pro caps at 60 minutes per session, Plus at 120 minutes. Upgrade to Unlimited for no session limit. As a workaround, stop and restart the recording to capture the remaining meeting in a second note.

### Transcription accuracy is poor for non-English content
**Symptom**: Transcription produces garbled or incorrect text for non-English audio or multilingual conversations.
**Fix**: Ensure the audio is clear with minimal background noise. HyNote claims 100% English accuracy under ideal conditions but non-English quality depends on language complexity and audio quality. Try re-recording in a quieter environment. If switching languages mid-recording, speak each language clearly with distinct pauses.

### Credits run out with no way to get more
**Symptom**: Podcast, slide, or infographic generation fails because credits are exhausted, and no refill option is visible.
**Fix**: Credits (300-600 depending on plan) are one-time grants, not monthly refills. Contact support@hynote.ai to ask about purchasing additional credits or whether plan upgrades include fresh credit allocations.
