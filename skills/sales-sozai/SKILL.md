---
name: sales-sozai
description: "Soz AI platform help — mobile-first AI transcription and note-taking with 100+ languages, speaker diarization, YouTube URL transcription, and subtitles at $9.99/mo unlimited. Use when setting up Soz AI for meeting recording on mobile, transcription accuracy issues with accents or noisy environments, comparing Soz AI to Otter or Notta or Transkriptor for multilingual transcription, YouTube video transcription not working or transcript quality poor, subtitle generation in SRT or VTT format, or understanding Soz AI free tier limits vs unlimited plan. Do NOT use for picking between note-takers generally (use /sales-note-taker) or building a transcript API pipeline (Soz AI has no public API — use /sales-note-taker for API-first platforms)."
argument-hint: "[describe your Soz AI question — recording, transcription, subtitles, pricing, etc.]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, mobile, platform]
---

# Soz AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Soz AI for meeting recording
   - B) Transcription accuracy or language support
   - C) YouTube video transcription
   - D) Subtitle generation (SRT/VTT)
   - E) Speaker diarization or multi-speaker meetings
   - F) Pricing (free tier vs unlimited)
   - G) Comparing Soz AI to other transcription tools
   - H) Offline recording or sync issues

2. **What platform are you using?**
   - A) iOS (iPhone/iPad)
   - B) Android
   - C) macOS desktop
   - D) Chrome browser

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Soz AI to other note-takers broadly | `/sales-note-taker {user's question}` |
| Building a transcript pipeline or API integration | `/sales-note-taker {user's question}` — Soz AI has no public API |
| CRM integration needs | `/sales-note-taker {user's question}` — Soz AI has no CRM connectors |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Soz AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, recording modes, language support, subtitle tools.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Best use cases for Soz AI**: Mobile recording of in-person meetings, multilingual transcription (100+ languages), YouTube content transcription, batch subtitle generation. Strongest when you need affordable high-volume transcription on mobile.

**Setup priority**: Download app (iOS/Android/macOS/Chrome) → test with a short recording → verify language detection → try YouTube URL paste if relevant → evaluate subtitle export formats.

**Key decision point**: Soz AI excels at mobile transcription and YouTube URL paste but has no API, no CRM integration, no webhooks, and no team features. If you need any of those, look at Fathom, Fireflies, or Otter instead.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API** — no REST, no GraphQL, no webhooks. You cannot programmatically access transcripts or build data pipelines. Export is manual only.
- **No CRM integration** — no Salesforce, HubSpot, Pipedrive, Zapier, or Make connectors. Transcript data stays in the app.
- **No team features** — no shared workspaces, no admin controls, no team analytics. Designed for individual users.
- **Free tier is only 30 minutes** — after that you must upgrade to the $9.99/mo unlimited plan. No generous free tier like Fathom or tl;dv.
- **95-99% accuracy depends on conditions** — noisy environments, heavy accents, overlapping speakers, or poor microphone placement will degrade accuracy significantly.
- **Speaker diarization caps at 10 speakers** — larger meetings may not get accurate speaker attribution.
- **Offline recording requires later sync** — transcription happens after reconnecting to the internet; no on-device transcription.

## Related skills

- `/sales-note-taker` — Comparing Soz AI to other note-takers (Fathom, Fireflies, Otter, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up YouTube transcription
**User says**: "I need to transcribe a bunch of YouTube videos for research — can Soz AI do this?"
**Skill does**:
1. Confirms Soz AI supports direct YouTube URL paste transcription
2. Walks through the workflow: paste URL → AI processes → transcript with timestamps
3. Notes 100+ language support with automatic detection
4. Mentions LeMUR-powered summaries are included at no extra cost
**Result**: Working YouTube transcription workflow with language detection.

### Example 2: Mobile meeting recording accuracy issues
**User says**: "My Soz AI transcripts are messy when I record team meetings — lots of errors and wrong speaker labels."
**Skill does**:
1. Checks placement — phone should be central, within 3-6 feet of speakers
2. Notes speaker diarization works best with 2-5 speakers, degrades with more
3. Recommends reducing background noise and avoiding overlapping speech
4. If accuracy remains insufficient, suggests Otter or Fireflies for dedicated meeting recording with better speaker ID
**Result**: Practical recording tips and alternative recommendations if needed.

### Example 3: Comparing Soz AI to Transkriptor for batch transcription
**User says**: "I'm choosing between Soz AI and Transkriptor for transcribing interview recordings in multiple languages."
**Skill does**:
1. Compares language coverage (Soz AI 100+ vs Transkriptor 100+)
2. Compares pricing (Soz AI $9.99/mo unlimited vs Transkriptor $9.99/mo tiered minutes)
3. Notes Soz AI is mobile-first while Transkriptor is web-first with a meeting bot
4. Flags that neither has a robust API for automation — if that matters, routes to `/sales-note-taker`
**Result**: Clear comparison with decision criteria based on workflow preference.

## Troubleshooting

### Transcription accuracy much worse than expected
**Symptom**: Transcript has many errors, garbled text, or wrong words.
**Cause**: Poor audio quality — too much background noise, speakers too far from microphone, heavy accents, or low-quality audio file uploads.
**Solution**: Record in quieter environments, keep the device within 3-6 feet of speakers. For uploaded files, ensure source audio is clear (at least 128kbps). Try setting the language manually instead of relying on auto-detection if it's guessing wrong.

### YouTube URL transcription failing or returning empty
**Symptom**: Pasting a YouTube URL produces no transcript or an error.
**Cause**: The video may be private, age-restricted, have no audio track, or YouTube may be blocking automated access.
**Solution**: Verify the video is publicly accessible. Try a different video to isolate the issue. If the problem persists, use the audio upload method — download the video's audio separately and upload the file instead.

### Speaker labels mixed up in multi-person recordings
**Symptom**: AI attributes quotes to wrong speakers in transcripts.
**Cause**: Speaker diarization struggles with similar-sounding voices, overlapping speech, or speakers at varying distances from the microphone.
**Solution**: Place the recording device centrally among speakers. Avoid crosstalk. For critical recordings where attribution matters, manually note speaker transitions. Soz AI supports up to 10 speakers but accuracy degrades above 5.
