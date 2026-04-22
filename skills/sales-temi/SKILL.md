---
name: sales-temi
description: "Temi platform help — budget AI transcription at $0.25/min (Rev's automated engine). Use when uploading audio or video files for cheap batch transcription, integrating Temi REST API into a transcript pipeline, comparing Temi vs Sonix vs Rev vs Otter for batch transcription pricing, troubleshooting Temi accuracy with accents or multiple speakers, debugging Temi mobile app sync or billing issues, or choosing between Temi pay-as-you-go and Rev human transcription. Do NOT use for live meeting recording or real-time transcription (Temi is upload-only — use /sales-note-taker for live meeting tools)."
argument-hint: "[describe what you need help with in Temi]"
license: MIT
version: 1.0.0
tags: [sales, transcription, platform]
---

# Temi Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Transcribe audio/video files (batch transcription)
   - B) Integrate Temi API into a pipeline
   - C) Compare Temi to alternatives for my use case
   - D) Troubleshoot a specific issue (accuracy, billing, mobile app)

2. **What type of content are you transcribing?**
   - A) Meetings / calls
   - B) Interviews / podcasts
   - C) Legal / compliance recordings
   - D) Media production
   - E) Research / academic
   - F) Mixed / high volume

3. **Volume?**
   - A) Occasional (< 5 hrs/mo)
   - B) Regular (5-50 hrs/mo)
   - C) High volume (50+ hrs/mo)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing a live meeting recorder or note-taker | `/sales-note-taker {user's question}` |
| Building a coaching program from call recordings | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Comparing batch transcription tools broadly (Sonix, TranscribeMe, Rev, Verbit) | `/sales-note-taker {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — Temi platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, data model, workflows.

If the question involves the API, also read `references/temi-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**When Temi makes sense:**
- One-off or low-volume English transcription where $0.25/min is acceptable
- Simple API pipeline needing submit → poll/webhook → fetch transcript
- Already in the Rev ecosystem and want the automated/budget option

**When to look elsewhere:**
- Non-English content → Sonix (53 languages) or TranscribeMe (50+ languages)
- Need custom dictionary for domain terms → Sonix Premium
- Need translation or subtitles → Sonix
- Need 99% accuracy guarantee → TranscribeMe Standard ($1.25/min) or Rev Human ($1.50/min)
- High volume (50+ hrs/mo) → Sonix Premium saves significantly ($5/hr vs $15/hr)
- Need live meeting recording → Fathom, Fireflies, Otter (see `/sales-note-taker`)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **English only.** Temi does not support any other language. If you need multilingual transcription, use Sonix or TranscribeMe.
- **No custom dictionary.** You cannot teach Temi domain-specific terms — every transcription repeats the same mis-recognitions for proper nouns, technical terms, and acronyms.
- **Temi is a reskinned Rev.** It uses Rev's automated speech recognition engine at the same $0.25/min price but with fewer features (no human review tier, no captioning, no translation). Rev offers the same AI transcription plus human options.
- **Accuracy drops significantly with accents.** Claims 90-95% but users report much lower with non-American English accents, multiple overlapping speakers, or background noise.
- **Mobile app and web credits don't sync.** Credits purchased on the web may not be usable from the mobile app and vice versa — a persistent complaint.
- **Price increased from $0.10 to $0.25/min.** Older reviews mention $0.10/min pricing. The current rate is $0.25/min with no subscription option to reduce per-minute cost.
- **No webhooks for free accounts.** Webhook callbacks require including `callback_url` in the job submission — available to all API users but API keys require a paid account.
- **Upload-only, no live transcription.** Temi does not join meetings or capture audio live. For live use cases, route to `/sales-note-taker`.

## Related skills

- `/sales-sonix` — Sonix platform help (AI transcription + translation + subtitles, 53 languages, REST API, SOC 2/HIPAA). More features at comparable or lower per-hour cost for regular users.
- `/sales-transcribeme` — TranscribeMe platform help (human+AI hybrid, 99% accuracy guarantee, HIPAA, REST API). When accuracy is non-negotiable.
- `/sales-verbit` — Verbit platform help (enterprise AI+human transcription, live captioning, accessibility compliance). Enterprise batch/live transcription.
- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms. Temi is a batch transcription option, not a live meeting tool.
- `/sales-integration` — General tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing Temi vs Sonix for interview transcription
**User says**: "I record about 10 hours of interviews per month in English. Is Temi or Sonix cheaper?"
**Skill does**:
1. Calculates Temi cost: 10 hrs × 60 min × $0.25 = $150/mo
2. Calculates Sonix Standard: 10 hrs × $10/hr = $100/mo; Sonix Premium: $22 + 10 × $5 = $72/mo
3. Recommends Sonix — cheaper at any volume, plus custom dictionary and speaker diarization tools
4. Notes Temi's only advantage is simplicity (no subscription, pure pay-as-you-go)
**Result**: Clear cost comparison showing Sonix wins on both price and features.

### Example 2: Building a Temi API pipeline
**User says**: "I want to auto-transcribe call recordings using the Temi API when they land in S3."
**Skill does**:
1. Reads the API reference for endpoint details
2. Sketches the pipeline: S3 event → Lambda → `POST /jobs` with `media_url` (S3 presigned URL) + `callback_url` → webhook fires on completion → `GET /jobs/{id}/transcript` → write to warehouse
3. Notes Bearer token auth, supported formats (WAV, MP3, MP4, WebM, OGG), and 403 on insufficient balance
4. Flags: English only, no custom dictionary, consider Sonix API if accuracy needs improvement
**Result**: Working pipeline architecture with Temi-specific constraints.

### Example 3: Temi accuracy problems with accented speakers
**User says**: "My Temi transcripts are terrible — half the words are wrong. The speakers have British accents."
**Skill does**:
1. Confirms this is the most common Temi complaint — accuracy drops sharply with non-American accents
2. Notes there's no custom dictionary or vocabulary training to improve results
3. Recommends switching to Sonix (better accuracy, custom dictionary on Premium) or TranscribeMe (human review option for near-perfect accuracy)
4. If budget is the constraint, suggests Rev Human ($1.50/min) for critical recordings
**Result**: Honest assessment that Temi isn't the right tool, with concrete alternatives.

## Troubleshooting

### Accuracy far below 90% with accents or multiple speakers
**Symptom**: Transcript has excessive errors — wrong words, missing sentences, garbled speaker attribution
**Cause**: Temi's ASR engine (Rev's automated model) optimizes for clear American English. Non-American accents, cross-talk, and background noise cause steep accuracy drops.
**Solution**: No fix within Temi — there's no custom dictionary or training. For better accuracy: upload the highest quality audio possible, ensure speakers don't talk over each other, or switch to Sonix (custom dictionary) or TranscribeMe/Rev Human (human review).

### Mobile app credits not working / double charges
**Symptom**: Credits purchased on web can't be used in the mobile app, or charged twice for the same transcription
**Cause**: Known sync issue between Temi's web and mobile billing systems
**Solution**: Contact Temi support for refunds on double charges. For reliability, use the web interface or API exclusively — avoid the mobile app for purchasing credits.

### Job stuck in processing or webhook never fires
**Symptom**: Submitted a job via API but status stays "queued" or the callback URL never receives a POST
**Cause**: Insufficient balance (returns 403 but may not surface clearly), unsupported media format, or callback URL not publicly accessible
**Solution**: Check `GET /account` for balance. Verify the media file format is supported (WAV, MP3, MP4, WebM, OGG, AVI, MOV, WMV, FLV). Ensure `callback_url` is HTTPS and publicly reachable. Poll `GET /jobs/{id}` as a fallback if webhooks aren't firing.
