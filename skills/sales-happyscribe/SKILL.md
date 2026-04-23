---
name: sales-happyscribe
description: "HappyScribe platform help — AI + human transcription, subtitle generation, and translation in 120+ languages with SOC 2 / GDPR compliance. Use when uploading audio or video for batch transcription across many languages, generating SRT/VTT/Premiere subtitles for video production, ordering human transcription for 99% accuracy on legal or broadcast content, integrating HappyScribe REST API into a transcript pipeline, troubleshooting accuracy with accents or multiple speakers, comparing HappyScribe vs Sonix vs Rev vs Trint for media transcription, choosing between AI and human transcription tiers, or debugging export format issues. Do NOT use for live meeting recording or real-time note-taking (HappyScribe is upload-only — use /sales-note-taker for live meeting tools)."
argument-hint: "[describe what you need help with in HappyScribe]"
license: MIT
version: 1.0.0
tags: [sales, transcription, subtitles, translation, platform]
github: "https://github.com/happyscribe"
---

# HappyScribe Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Transcribe audio/video files (batch transcription)
   - B) Generate subtitles/captions for video
   - C) Translate transcripts or subtitles into other languages
   - D) Order human transcription for high-accuracy needs
   - E) Integrate HappyScribe API into a pipeline
   - F) Compare HappyScribe to alternatives for my use case
   - G) Troubleshoot a specific issue (accuracy, editor, exports)

2. **What type of content are you transcribing?**
   - A) Meetings / calls
   - B) Interviews / podcasts
   - C) Legal / compliance recordings
   - D) Media production (film, TV, marketing videos)
   - E) Research / academic
   - F) Mixed / high volume

3. **What plan are you on (or considering)?**
   - A) Free trial (10 min)
   - B) Basic ($17/mo — 120 AI minutes)
   - C) Pro ($29/mo — 600 AI minutes)
   - D) Business ($89/mo — 6,000 AI minutes)
   - E) Enterprise (custom)
   - F) Not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing a live meeting recorder or note-taker | `/sales-note-taker {user's question}` |
| Building a coaching program from call recordings | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Comparing batch transcription tools broadly | `/sales-note-taker {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — HappyScribe platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves the API, also read `references/happyscribe-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Plan selection framework:**
- **One-off or light use (<2 hrs/mo)** → Basic ($17/mo for 120 min, or $8.50/mo annual)
- **Regular transcription (up to 10 hrs/mo)** → Pro ($29/mo for 600 min, 3 seats included)
- **High-volume production (up to 100 hrs/mo)** → Business ($89/mo for 6,000 min, 5 seats, style guides)
- **Overflow credits**: $0.20/min ($12/hr) once monthly allotment is exhausted
- **Human transcription**: $2.00/min ($120/hr) — order separately from subscription

**AI vs Human decision:**
- AI (85% accuracy) → drafts, internal use, content with clear audio and common accents
- Human (99% accuracy) → legal, broadcast, publication, heavy accents, poor audio quality

**Accuracy optimization:**
1. Upload highest quality audio (minimize background noise, crosstalk)
2. Use custom glossaries (Business+) for domain-specific terms
3. Use style guides for formatting consistency across team projects
4. Review speaker labels after transcription — diarization is imperfect

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No live/real-time transcription.** HappyScribe is upload-only — it does not join meetings or capture audio live. For live transcription, use Fathom, Fireflies, or Otter.
- **85% AI accuracy requires manual cleanup.** Expect significant corrections with background noise, multiple speakers, or strong accents. Budget editor time into your workflow.
- **Free trial is 10 minutes total, not recurring.** Exports are watermarked on free tier. You cannot evaluate properly without paying.
- **Pricing can change suddenly.** Multiple users report unexpected price increases. Lock in annual billing to protect your rate.
- **Style guides are Business-only.** Teams needing formatting consistency across projects must be on Business ($89/mo) or Enterprise.
- **API rate limit is 200 req/hour.** Lower than most transcription APIs — queue requests and cache responses for high-volume pipelines.
- **Editor can lose unsaved work.** Some users report page refresh bugs that wipe edits. Save frequently and export drafts.
- **Human transcription is billed separately.** The $2.00/min cost is on top of your subscription fee, not instead of it.

## Related skills

- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms (Fathom, Fireflies, Gong, etc.). HappyScribe is a batch transcription option, not a live meeting tool.
- `/sales-sonix` — Sonix platform help (closest competitor — batch AI transcription, 53+ languages, REST API, SOC 2/HIPAA)
- `/sales-integration` — General tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing HappyScribe vs Sonix for subtitle production
**User says**: "I produce marketing videos in 5 languages and need subtitles. Should I use HappyScribe or Sonix?"
**Skill does**:
1. Notes HappyScribe supports 120+ languages vs Sonix's 53+ — wider coverage for multilingual workflows
2. Compares subtitle editors: HappyScribe has styling/positioning controls and more export formats (SRT, VTT, STL, Premiere XML, FCP XML); Sonix has video burn-in
3. Compares pricing: HappyScribe Pro $29/mo for 600 min vs Sonix Premium $22/mo + $5/hr — HappyScribe is cheaper at moderate volumes
4. Recommends HappyScribe for multi-language subtitle workflows with extensive format needs
**Result**: Clear recommendation based on language coverage and subtitle feature comparison.

### Example 2: Building an API pipeline for transcription
**User says**: "I want to auto-transcribe uploaded recordings using the HappyScribe API and export as SRT."
**Skill does**:
1. Reads the API reference for endpoint details
2. Sketches the pipeline: Upload via signed S3 URL → Create Order with `is_subtitle: true` → Poll or webhook for completion → Create Export with `format: srt` → Download from export URL
3. Notes: use Orders endpoint (Transcriptions endpoint is deprecated), 200 req/hr rate limit, Bearer token auth
4. Flags: `confirm: true` on order creation to auto-submit, or create then confirm separately for review
**Result**: Working pipeline architecture with HappyScribe-specific endpoint details.

### Example 3: Transcription accuracy is terrible with accented speakers
**User says**: "HappyScribe keeps getting names and technical terms wrong — the transcript is unusable for our legal team."
**Skill does**:
1. Explains 85% AI accuracy is typical — for legal-grade work, recommends human transcription ($2.00/min, 99% accuracy)
2. For AI transcription improvement: create a custom glossary with names and technical terms (Business+ required), upload highest quality audio, ensure clear speaker separation
3. Suggests a hybrid workflow: AI transcription first for speed, then order human proofreading on critical sections
**Result**: Practical fix with cost/accuracy trade-off guidance.

## Troubleshooting

### AI transcription accuracy drops with multiple speakers or accents
**Symptom**: Transcript has frequent word errors, especially with non-native English speakers or cross-talk
**Cause**: HappyScribe's AI engine (Whisper-based) struggles with overlapping speech, strong accents, and domain-specific terminology
**Solution**: Upload the highest quality audio available. Create a custom glossary (Business+) with proper nouns, technical terms, and acronyms. For critical content, use human transcription ($2.00/min). If accuracy is consistently below 70%, the audio quality may be the limiting factor — consider using a dedicated recording tool with noise cancellation.

### Editor loses changes on page refresh
**Symptom**: Edits disappear after the browser refreshes or the page reloads unexpectedly
**Cause**: Known intermittent bug where the editor fails to auto-save before a page refresh
**Solution**: Save manually and frequently (Ctrl/Cmd+S). Export a draft after major edits as a backup. Use Chrome or Firefox (most tested). Avoid editing on unstable internet connections. If the issue persists, contact HappyScribe support with your browser version.

### Translation quality is poor or nonsensical
**Symptom**: Translated transcripts contain gibberish, made-up content, or completely wrong translations
**Cause**: HappyScribe changed their AI translation model and quality regressed for some language pairs
**Solution**: Review translations immediately after generation — don't publish without human review. For critical translations, order human translation instead of AI. If a specific language pair consistently fails, report it to HappyScribe support and use a dedicated translation service in the interim.
