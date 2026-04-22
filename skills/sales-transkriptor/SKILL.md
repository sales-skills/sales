---
name: sales-transkriptor
description: "Transkriptor platform help — AI transcription in 100+ languages with meeting recording, summaries, subtitles, and API integration. Use when uploading audio or video files for multilingual batch transcription, integrating Transkriptor REST API into a transcript pipeline, comparing Transkriptor vs Sonix vs Otter vs Notta for multilingual transcription pricing, troubleshooting Transkriptor accuracy with accents or multiple speakers, debugging Transkriptor meeting bot not joining or recording issues, dealing with Transkriptor billing or subscription cancellation problems, or setting up Transkriptor custom vocabulary for domain-specific terms. Do NOT use for live meeting recording strategy or choosing between note-takers broadly (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Transkriptor]"
license: MIT
version: 1.0.0
tags: [sales, transcription, platform]
---

# Transkriptor Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Transcribe audio/video files (batch transcription)
   - B) Record and transcribe meetings (Zoom/Meet/Teams)
   - C) Integrate Transkriptor API into a pipeline
   - D) Compare Transkriptor to alternatives for my use case
   - E) Troubleshoot a specific issue (accuracy, billing, meeting bot)

2. **What type of content are you transcribing?**
   - A) Meetings / calls
   - B) Interviews / podcasts
   - C) Lectures / education
   - D) Media production / subtitles
   - E) Mixed / high volume

3. **Volume?**
   - A) Occasional (< 5 hrs/mo)
   - B) Regular (5-40 hrs/mo)
   - C) High volume (40+ hrs/mo)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing a live meeting recorder or note-taker broadly | `/sales-note-taker {user's question}` |
| Building a coaching program from call recordings | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Comparing batch transcription tools broadly (Sonix, TranscribeMe, Rev, Verbit, Temi) | `/sales-note-taker {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — Transkriptor platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, data model, workflows.

If the question involves the API, also read `references/transkriptor-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**When Transkriptor makes sense:**
- Multilingual transcription (100+ languages) at budget prices
- Meeting recording via bot (Zoom/Meet/Teams) with AI summaries
- Subtitle generation (SRT/VTT) for multilingual content
- Teams needing sentiment analysis and speaker analytics

**When to look elsewhere:**
- Enterprise revenue intelligence or sales coaching → Gong, Avoma (see `/sales-note-taker`)
- 99% accuracy guarantee → TranscribeMe Standard ($1.25/min human review)
- English-only budget batch transcription → Temi ($0.25/min, simpler)
- Deep CRM field-mapping → Fathom Business, Fireflies Business, Gong
- API access without Enterprise pricing → Sonix Premium, Fathom, Fireflies

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API is Enterprise-only.** You cannot access the REST API on Lite, Pro, or Team plans. If you need API integration on a budget, use Sonix Premium or Temi.
- **Accuracy drops sharply with non-English languages.** Users report significantly worse results for Portuguese, Bulgarian, and other non-English languages compared to English. Test with your actual audio before committing.
- **Auto-renewal billing surprises.** The most common complaint on Trustpilot — subscriptions auto-renew with no warning email, and cancellation is difficult through the app. Cancel well before renewal date and confirm via email.
- **Speaker diarization is weak.** Multiple speakers in the same audio often get misattributed, especially with overlapping speech. This is worse than competitors like Fireflies or Otter for multi-speaker calls.
- **CRM integrations are shallow.** Homepage lists HubSpot/Salesforce/Zoho but reviews dispute the depth of these integrations. Verify actual field-mapping capabilities before relying on them.
- **Custom vocabulary requires manual setup.** Available via API and app, but only on paid plans. Doesn't work retroactively on already-transcribed files.
- **UI and export options change without notice.** Users report interface changes breaking their established workflows. Export format availability varies by plan.
- **Unused minutes don't roll over.** Monthly minute allotments reset each billing cycle with no carryover.

## Related skills

- `/sales-sonix` — Sonix platform help (AI transcription + translation + subtitles, 53 languages, REST API, SOC 2/HIPAA). More features with API access on lower tiers.
- `/sales-temi` — Temi platform help (budget AI transcription at $0.25/min, Rev's engine, English-only). Simpler and cheaper for English-only batch work.
- `/sales-transcribeme` — TranscribeMe platform help (human+AI hybrid, 99% accuracy guarantee, HIPAA). When accuracy is non-negotiable.
- `/sales-verbit` — Verbit platform help (enterprise AI+human transcription, live captioning, accessibility compliance). Enterprise batch/live transcription.
- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms broadly.
- `/sales-integration` — General tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing Transkriptor vs Sonix for multilingual podcast transcription
**User says**: "I transcribe podcasts in English, Spanish, and French — about 20 hours per month. Is Transkriptor or Sonix better?"
**Skill does**:
1. Calculates Transkriptor Pro: $19.99/mo for 2,400 min (40 hrs) — covers it with room to spare
2. Calculates Sonix Standard: 20 hrs × $10/hr = $200/mo; Sonix Premium: $22 + 20 × $5 = $122/mo
3. Notes Transkriptor is significantly cheaper for this volume
4. Flags: Transkriptor API is Enterprise-only if they need automation; Sonix Premium includes API
5. Recommends Transkriptor Pro if they only need web UI and Zapier, Sonix if they need API access
**Result**: Clear cost comparison with API access as the decision tiebreaker.

### Example 2: Debugging accuracy with non-English recordings
**User says**: "My Transkriptor transcripts in Portuguese are barely usable — so many errors."
**Skill does**:
1. Confirms non-English accuracy is the most common complaint in reviews
2. Recommends setting up custom vocabulary for Portuguese domain terms
3. Suggests improving audio quality (reduce background noise, use close microphone)
4. If accuracy is still insufficient, recommends TranscribeMe ($1.25/min human review) or Verbit for professional Portuguese transcription
**Result**: Practical workarounds plus alternative recommendations.

### Example 3: Building a Transkriptor API pipeline
**User says**: "I want to auto-transcribe recordings via the Transkriptor API when they hit our S3 bucket."
**Skill does**:
1. Confirms API requires Enterprise plan — asks user to verify their plan
2. Reads the API reference for endpoint details
3. Sketches pipeline: S3 event → Lambda → `POST /transcription/local_file/get_upload_url` → upload binary → `POST /transcription/local_file/initiate_transcription` → webhook on completion → `GET /files/{order_id}/content` → normalize → warehouse
4. Notes: Bearer token auth, 1K req/min rate limit, webhook support for event-driven architecture
5. If Enterprise pricing is prohibitive, suggests Sonix Premium API as alternative
**Result**: Working pipeline architecture with Transkriptor-specific constraints and fallback option.

## Troubleshooting

### Billing auto-renewal with no warning or difficulty cancelling
**Symptom**: Subscription auto-renewed unexpectedly, cancellation button doesn't work or support doesn't respond
**Cause**: Most common complaint — Transkriptor auto-renews without sending reminder emails, and the in-app cancellation flow has known reliability issues
**Solution**: Cancel at least 7 days before renewal. Use the web dashboard (not mobile app) to cancel. Email support@transkriptor.com directly with cancellation request and save the confirmation. If charged after cancellation, dispute with your payment provider.

### Meeting bot not joining or not recording
**Symptom**: Transkriptor bot doesn't appear in Zoom/Meet/Teams meeting, or joins but doesn't capture audio
**Cause**: Calendar sync misconfiguration, meeting platform security settings blocking bots, or the meeting link format isn't recognized
**Solution**: Verify calendar is connected in Settings. Check that the meeting platform allows external bot participants (Zoom → Settings → Security → "Allow participants to join before host"). For Google Meet, ensure the meeting link is a standard `meet.google.com` URL. Try manually adding the meeting URL in Transkriptor instead of relying on auto-join.

### Accuracy far below expected with technical jargon or proper nouns
**Symptom**: Transcript consistently mis-recognizes brand names, technical terms, acronyms, and proper nouns
**Cause**: Generic ASR model doesn't know domain-specific vocabulary
**Solution**: Set up custom vocabulary in Transkriptor Settings (paid plans only). Add commonly used terms, acronyms, and proper nouns. For ongoing accuracy improvement, review and correct transcripts — Transkriptor uses corrections to improve future results. If custom vocabulary doesn't help enough, consider TranscribeMe human review tier for critical recordings.
