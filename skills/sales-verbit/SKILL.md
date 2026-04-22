---
name: sales-verbit
description: "Verbit platform help — enterprise AI+human transcription, live captioning, and accessibility (ADA/WCAG/CVAA) for education, legal, media, and government. Use when setting up Verbit live captioning for Zoom or Teams events, uploading recorded audio for human-verified transcription, integrating the Verbit API (Insights, Live Booking, Post-Production, Search) into a transcript pipeline, comparing Verbit vs Rev vs 3Play Media vs Sonix for enterprise transcription, troubleshooting ASR punctuation or speaker diarization errors, choosing between self-service and enterprise plans, or configuring SmartPlayer for accessible video playback. Do NOT use for picking a sales meeting note-taker (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Verbit]"
license: MIT
version: 1.0.0
tags: [sales, transcription, captioning, accessibility, enterprise, platform]
github: "https://github.com/verbit-ai"
---

# Verbit Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Set up live captioning for events, lectures, or meetings
   - B) Transcribe recorded audio/video files (post-production)
   - C) Integrate the Verbit API into a transcript pipeline
   - D) Compare Verbit to alternatives for my use case
   - E) Configure Gen.V AI insights (summaries, keywords, quizzes)
   - F) Troubleshoot transcription accuracy or speaker labeling issues

2. **What vertical are you in?**
   - A) Higher education (lectures, courses, LMS)
   - B) Legal (depositions, court proceedings, compliance)
   - C) Media & entertainment (subtitles, dubbing, localization)
   - D) Corporate / government (meetings, town halls, events)
   - E) Other

3. **Which plan are you on (or considering)?**
   - A) Self-Service ($29/mo, 20 hrs AI transcription)
   - B) Enterprise (custom, human-verified)
   - C) Not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing a live sales meeting note-taker | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program from call data | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Comparing batch transcription tools (Sonix, TranscribeMe) | `/sales-note-taker {user's question}` |

When routing, provide the exact command.

## Step 3 — Verbit platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves the API, also read `references/verbit-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Plan selection**: Self-Service ($29/mo) for occasional AI-only transcription up to 20 hrs/mo. Enterprise for human-verified accuracy, compliance (HIPAA BAA, SOC 2), SLA guarantees, and volume pricing. No mid-market tier exists — if you need more than 20 hrs/mo but don't need enterprise contracts, compare Sonix ($10/hr PAYG) or Rev ($0.25/min AI).

**API selection**: Use Post-Production API for batch upload workflows. Use Live Booking API for scheduled live captioning events. Use Insights API (Gen.V) for AI-generated summaries, keywords, and quizzes from completed transcripts.

**Accuracy optimization**: Upload highest-quality audio. Request custom ASR model tuning on Enterprise. Use human review tier for legal/compliance content where 99%+ accuracy is required.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No mid-market pricing tier.** Self-Service is $29/mo (20 hrs AI-only). Enterprise is custom (~$33K-$75K/yr). Nothing in between — mid-size teams are stranded.
- **Self-Service is AI-only transcription.** No human review, no custom ASR models, no compliance certifications. Those require Enterprise.
- **ASR punctuation and grammar errors are common.** Unnecessary spaces before punctuation, run-on sentences, missed capitalization — review and edit output before publishing.
- **Speaker diarization splits speakers incorrectly.** Multiple speakers grouped under one label or one speaker split into several — worse with similar voices or cross-talk.
- **Bearer tokens expire after 24 hours.** API integrations must handle token refresh. Post-Production API alternatively supports API key auth (simpler for server-to-server).
- **Gen.V Insights require completed transcripts.** You can't generate summaries or keywords until transcription processing finishes.
- **Rate limits are not published.** Design with conservative throttling and exponential backoff. Monitor for 429 responses.
- **VITAC (Verbit subsidiary) has separate quality issues.** If you're evaluating broadcast captioning, VITAC reviews cite inconsistent quality and missed deliverables.

## Related skills

- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms, or choosing batch transcription tools (Sonix, TranscribeMe, Rev)
- `/sales-sonix` — Sonix platform help (batch AI transcription, translation, subtitles)
- `/sales-transcribeme` — TranscribeMe platform help (human+AI hybrid transcription)
- `/sales-integration` — General tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Comparing Verbit vs Sonix for education transcription
**User says**: "I need to transcribe 500 hours of lecture recordings per semester for accessibility compliance. Should I use Verbit or Sonix?"
**Skill does**:
1. Notes the volume (500 hrs/semester) and compliance requirement (ADA/WCAG)
2. Compares: Sonix is $10/hr PAYG ($5K total) with AI-only output. Verbit Enterprise offers human-verified transcription with ADA/WCAG compliance certifications and LMS integrations (Blackboard, Canvas).
3. Recommends Verbit Enterprise if accuracy and compliance documentation matter. Sonix if budget is primary and human review can be done in-house.
4. Notes Verbit's Captivate ASR can be custom-tuned for academic terminology on Enterprise.
**Result**: Clear comparison based on volume, compliance needs, and budget.

### Example 2: Setting up live captioning for Zoom events
**User says**: "I need live captions for our weekly town hall on Zoom — about 200 attendees."
**Skill does**:
1. Reads the platform guide for Live Booking API and Zoom integration details
2. Explains Verbit integrates natively with Zoom for live captioning — no separate bot needed
3. Walks through booking flow: create order via Live Booking API or dashboard, specify Zoom meeting ID, select captioning profile
4. Notes human captioners are available for Enterprise plans (higher accuracy) vs AI-only for Self-Service
**Result**: Step-by-step setup for Zoom live captioning with plan-appropriate options.

### Example 3: Building a post-production transcript pipeline
**User says**: "I want to automatically transcribe every recording uploaded to our S3 bucket using the Verbit API."
**Skill does**:
1. Reads the API reference for Post-Production endpoints
2. Sketches the pipeline: S3 event → Lambda → `POST /job/new` + `POST /job/add_media` (S3 URL) + `POST /job/perform_transcription` → poll `GET /job/info` for status → `GET /job/get_caption` for completed transcript
3. Notes API key auth is simpler for server-to-server (vs OAuth Bearer tokens with 24hr expiry)
4. Flags: no webhook for job completion documented — must poll status endpoint
**Result**: Working pipeline architecture with Verbit-specific API flow.

## Troubleshooting

### ASR output has punctuation and grammar errors
**Symptom**: Transcripts have extra spaces before periods, missing capitalization, run-on sentences
**Cause**: Verbit's Captivate ASR engine produces raw output that needs post-processing — common across all ASR engines but more noticeable in Verbit's output per user reports
**Solution**: Use the Verbit editor to clean up output. On Enterprise, request custom ASR model tuning for your domain vocabulary. For critical content (legal, compliance), use human review tier instead of AI-only.

### Speaker labels are wrong or missing
**Symptom**: Two speakers labeled as one, or one speaker split into 5+ labels
**Cause**: Speaker diarization struggles with similar voices, cross-talk, poor audio quality, and single-channel (mono) recordings
**Solution**: Upload stereo/multi-channel audio when possible. Review and merge/rename speakers in the editor. On Enterprise, request custom speaker model training. For critical content, use human review.

### Post-Production API job stuck in processing
**Symptom**: Job status stays "processing" for hours after upload
**Cause**: Large files, queue backlog, or unsupported format. Human review tier has longer turnaround (hours to days, not minutes).
**Solution**: Check file format is supported (MP3, WAV, MP4, M4A, FLAC, OGG). For large files, use URL-based upload instead of direct upload. Check Verbit status page for service issues. On Enterprise, contact support for priority processing. AI-only jobs should complete in minutes — if not, the file may have processing errors.
