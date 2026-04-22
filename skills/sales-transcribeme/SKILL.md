---
name: sales-transcribeme
description: "TranscribeMe platform help — human+AI hybrid transcription service with 99% accuracy guarantee on human-reviewed tiers, HIPAA compliance, and REST API. Use when uploading audio for human-edited transcription, choosing between Machine Express and human-reviewed tiers, integrating TranscribeMe API into a transcript pipeline, comparing TranscribeMe vs Rev vs GoTranscript vs Sonix for accuracy-critical transcription, troubleshooting slow turnaround or inconsistent punctuation, setting up HIPAA-compliant medical or legal transcription, or debugging chunked upload or OAuth token issues. Do NOT use for live meeting recording or real-time transcription (TranscribeMe is upload-only — use /sales-note-taker for live meeting tools)."
argument-hint: "[describe what you need help with in TranscribeMe]"
license: MIT
version: 1.0.0
tags: [sales, transcription, platform]
github: "https://github.com/TranscribeMe"
---

# TranscribeMe Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Transcribe audio/video files (batch transcription)
   - B) Integrate TranscribeMe API into a pipeline
   - C) Compare TranscribeMe to alternatives for my use case
   - D) Set up HIPAA-compliant medical/legal transcription
   - E) Troubleshoot a specific issue (turnaround, accuracy, uploads)

2. **What accuracy level do you need?**
   - A) Good enough — AI-only is fine ($0.07/min)
   - B) High — human-edited, ~98% ($0.79/min)
   - C) Guaranteed 99% — two-step human review ($1.25/min)
   - D) Verbatim with fillers — 99% guaranteed ($2.00/min)
   - E) Not sure yet

3. **What type of content?**
   - A) Sales/business calls
   - B) Medical (HIPAA required)
   - C) Legal (court proceedings, depositions)
   - D) Academic research/interviews
   - E) Call center recordings (high volume)
   - F) Mixed

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing a live meeting recorder or note-taker | `/sales-note-taker {user's question}` |
| Batch AI-only transcription with translation/subtitles | `/sales-sonix {user's question}` |
| Building a coaching program from call recordings | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — TranscribeMe platform reference

**Read `references/platform-guide.md`** for the full platform reference — service tiers, pricing, integrations, data model, workflows.

If the question involves the API, also read `references/transcribeme-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Tier selection framework:**
- **Bulk/non-critical audio, speed matters most** → Machine Express ($0.07/min, ~3x audio duration turnaround)
- **Business calls, interviews — "good enough" accuracy** → First Draft ($0.79/min, 1 business day)
- **Legal, medical, compliance — accuracy guaranteed** → Standard ($1.25/min, 1-3 business days, 99%)
- **Court proceedings, depositions — every word matters** → Verbatim ($2.00/min, 2-5 business days, 99%)
- **Cost comparison vs AI-only**: Sonix Standard is $10/hr ($0.17/min). TranscribeMe Machine Express is cheaper at $0.07/min but with no accuracy guarantee. For human accuracy, TranscribeMe First Draft at $0.79/min is the entry point.

**When TranscribeMe beats pure AI:**
1. Heavy accents, overlapping speakers, noisy audio — human review catches what AI misses
2. Domain-specific terminology (medical, legal) — human transcribers trained in verticals
3. Compliance requirements — HIPAA BAA available, 99% accuracy guarantee with SLA

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No live/real-time transcription.** TranscribeMe is upload-only — you must upload a recorded file. For live transcription, use Fathom, Fireflies, or Otter.
- **API access requires contacting TranscribeMe.** You must request an API key via a form — there's no self-serve key provisioning. Plan for lead time.
- **Turnaround times are estimates, not SLAs.** "1 business day" for First Draft can stretch longer during peak periods. Rush service is available but limited to files under 70 minutes with quality audio.
- **Timestamps are at ~30-second intervals.** If you need precise word-level timestamps, TranscribeMe may not be sufficient — pure AI tools like Sonix offer tighter timestamp granularity.
- **No native integrations.** No Zoom, Google Meet, Teams, Zapier, or CRM connectors. Everything goes through the web portal or REST API. Plan for custom integration work.
- **Chunked upload required for large files.** Files must be split into 5MB chunks for the preferred upload method. The simple upload endpoint is being deprecated.
- **BrainTree handles payment.** Credit card management goes through BrainTree's SDK, not TranscribeMe directly. This adds complexity for API-only integrations.
- **Machine Express has no accuracy guarantee.** The $0.07/min tier is fully automated AI with no human review — accuracy varies significantly with audio quality.

## Related skills

- `/sales-sonix` — Sonix platform help (batch AI transcription in 53+ languages, translation, SRT/VTT subtitles, REST API, SOC 2/HIPAA)
- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms. TranscribeMe is a backend transcription service, not a live meeting tool.
- `/sales-integration` — General tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing TranscribeMe vs Sonix for medical transcription
**User says**: "I run a clinic and need HIPAA-compliant transcription for patient consultations. Should I use TranscribeMe or Sonix?"
**Skill does**:
1. Notes both offer HIPAA compliance — TranscribeMe with human review, Sonix AI-only
2. Compares: TranscribeMe Standard tier ($1.25/min) gives 99% accuracy with trained medical transcribers; Sonix ($0.17/min) is cheaper but relies on AI + custom dictionary
3. Recommends TranscribeMe Standard for patient safety-critical transcription where accuracy is non-negotiable; Sonix for lower-stakes internal notes where cost matters more
**Result**: Clear recommendation based on accuracy requirements and risk tolerance.

### Example 2: Building an API pipeline for call center recordings
**User says**: "I need to auto-transcribe 500 call center recordings per day via the TranscribeMe API. What's the architecture?"
**Skill does**:
1. Reads the API reference for endpoint details
2. Sketches the pipeline: S3 event → Lambda → chunked upload (5MB chunks) → `POST /orders` → configure settings (language, type, speakers) → `POST /orders/{id}/place` → poll `GET /recordings/{id}/status` → `GET /recordings/{id}/transcription` for JSON results
3. Notes: no webhook for completion — must poll status endpoint; OAuth2 token expires every hour — implement refresh token flow
4. Recommends First Draft tier ($0.79/min) for call center volume as balance of cost and accuracy
**Result**: Working pipeline architecture with TranscribeMe-specific constraints and cost estimate.

### Example 3: Turnaround too slow for deadline
**User says**: "I submitted 3 hours of legal depositions on Standard tier and they said 1-3 business days but it's been 4 days. What do I do?"
**Skill does**:
1. Explains turnaround times are estimates — longer files and peak periods cause delays
2. Notes: files over 90 minutes add 1 extra business day per TranscribeMe's policy
3. Recommends contacting support (though response times are inconsistent per reviews), and for future submissions: break long files into <70 minute segments, consider rush service for time-sensitive work
**Result**: Practical workaround plus prevention strategy for next time.

## Troubleshooting

### Turnaround delays on human-reviewed tiers
**Symptom**: Transcription takes longer than the quoted 1-3 business days
**Cause**: Files over 90 minutes add extra processing time; peak periods slow the human transcriber queue; audio quality issues require more review passes
**Solution**: Break long recordings into segments under 70 minutes before submitting. Use rush service for urgent files (limited to quality audio under 70 min). For predictable turnaround at scale, consider Machine Express for non-critical recordings and reserve human tiers for accuracy-critical content.

### Inconsistent punctuation and formatting
**Symptom**: Sentences run together, commas in wrong places, inconsistent formatting across files
**Cause**: Different human transcribers may apply slightly different formatting conventions; Machine Express tier has no human formatting pass
**Solution**: If using human tiers and formatting is inconsistent, report specific examples to support — they can flag your account for formatting preferences. For Machine Express output, plan for a post-processing cleanup step. Specify domain (legal, medical) in order settings to get transcribers trained in that vertical's formatting conventions.

### OAuth token expires mid-pipeline
**Symptom**: API calls start returning 401 errors after ~1 hour of processing
**Cause**: Access tokens expire after 1 hour (3600 seconds)
**Solution**: Implement the refresh token flow — store the `refresh_token` from initial auth, and when you get a 401, call `POST /api/v1/token` with `grant_type=refresh_token`. Better yet, use the `applicationtoken` grant type for long-running integrations — it avoids password dependency and survives password changes.
