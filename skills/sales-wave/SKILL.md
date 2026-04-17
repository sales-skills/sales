---
name: sales-wave
description: "Wave platform help — AI note-taker with mobile-first recording (iOS, Android, Mac, Windows, Apple Watch, Chrome, web), 76-language transcription, Voice ID speaker labeling, REST API with semantic search and webhooks, MCP server. Use when recording meetings on your phone and transcripts aren't accurate, setting up Wave API to pull session transcripts into your CRM, configuring Wave webhooks for real-time session notifications, phone call recording stops when another call comes in, Wave meeting bot not joining Zoom or Google Meet, comparing Wave pricing vs Fathom or Otter for a small team, searching across all your Wave recordings with the API, or exporting Wave summaries to Notion or Google Docs. Do NOT use for choosing between multiple note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Wave]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Wave Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Recording setup — getting Wave to record calls, meetings, or lectures reliably
   - B) API integration — pulling transcripts/summaries into another system
   - C) Webhooks — real-time notifications when sessions complete
   - D) Export/sharing — getting notes into Notion, Google Docs, OneNote, etc.
   - E) Pricing/plan selection — which Wave tier is right for my usage
   - F) Troubleshooting — something isn't working as expected

2. **How are you recording?**
   - A) Mobile app (iPhone/Android) — in-person meetings or phone calls
   - B) Desktop app (Mac/Windows) — system audio capture
   - C) Meeting bot — Zoom/Meet/Teams calendar integration
   - D) Chrome extension — browser-based meetings
   - E) Apple Watch
   - F) Multiple methods

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between Wave and other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program from call data | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Wave platform reference

**Read `references/platform-guide.md`** for the full platform reference — recording methods, pricing, integrations, Voice ID, export options, and common workflows.

**Read `references/wave-api-reference.md`** for API endpoints, authentication, webhooks, rate limits, and the OpenAPI spec.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Recording reliability checklist:**
1. Check which recording method matches the use case (mobile mic for in-person, desktop for system audio, bot for scheduled virtual meetings)
2. For phone calls on iPhone, verify Phone Bridge is enabled and working
3. For meeting bots, confirm calendar integration is connected and auto-join is enabled
4. Test with a short recording before relying on it for important calls

**API integration pattern:**
1. Create token at `app.wave.co/settings/integrations/api` with needed scopes
2. Register a webhook for `session.completed` events to get real-time notifications
3. On webhook fire, call `GET /v1/sessions/{id}/transcript` for full transcript with speaker segments
4. Store raw JSON, then normalize into your common schema

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Incoming calls kill active recordings on mobile.** If a phone call comes in while Wave is recording, the recording stops and prior audio may be lost. No resume/append capability. Use Do Not Disturb mode during important recordings.
- **Free tier is only 30 minutes/month.** Enough for a test, not for regular use. Pro ($11.67/mo annual) is effectively the entry point.
- **API tokens expire after 1 year.** Set a calendar reminder to rotate — failed auth will silently stop your pipeline.
- **Media URLs expire after 1 hour.** If you need to store audio/video, download immediately after fetching the signed URL. Don't cache the URL itself.
- **Rate limits are tight for bulk operations.** 60 req/min and 1,000/day per token. For backfills, use `POST /v1/sessions/bulk` (up to 50 sessions) instead of individual fetches.
- **Voice ID requires training.** Speaker labeling improves over time as Wave learns voices — early recordings may have unlabeled or mislabeled speakers.
- **"Stuck on saving" is a known issue.** Some users report the app hanging on transcription. Force-close and reopen — the recording is usually saved but processing may be delayed.
- **Export formatting degrades in OneNote.** Copy-paste from Wave to OneNote loses formatting. Use the native OneNote integration instead of clipboard.

## Related skills

- `/sales-note-taker` — Comparing AI note-takers (Fathom, Fireflies, Avoma, Gong, Otter, and 10+ others) or building a transcript pipeline across vendors
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Recording setup for a sales team
**User says**: "I want my 4-person sales team to use Wave for all our Zoom calls. How do I set it up so recordings auto-start?"
**Skill does**: Walks through calendar integration for meeting bot auto-join, recommends Teams plan ($7.50/user/mo), explains shared workspace for team visibility, notes Voice ID training for speaker attribution.

### Example 2: Piping transcripts to HubSpot
**User says**: "How do I automatically get Wave transcripts into HubSpot after every call?"
**Skill does**: Outlines webhook setup for `session.completed`, API call to fetch transcript, then either Zapier (simple) or custom middleware (flexible) to push to HubSpot call activity. Notes rate limits and token scoping.

### Example 3: Recording stops mid-call
**User says**: "Wave recorded only the first 5 minutes of my 45-minute call. What happened?"
**Skill does**: Checks if an incoming call interrupted recording (most common cause), whether battery optimization killed the app in background, or if storage was full. Recommends Do Not Disturb mode and testing with a short call first.

## Troubleshooting

### Recording stops or captures only a few minutes
**Symptom**: Wave records the beginning of a call but stops partway through
**Cause**: Most commonly, an incoming phone call interrupts the recording. Also: battery optimization killing the app, storage full, or app crash during long recordings
**Solution**: Enable Do Not Disturb before important recordings. On Android, exempt Wave from battery optimization. Check available storage. For calls >1 hour, test reliability first with a shorter recording.

### App stuck on "saving recording" or transcription hangs
**Symptom**: After recording, the app shows "saving" or processing spinner indefinitely
**Cause**: Large recordings can take time to process; network interruptions during upload; known intermittent bug
**Solution**: Wait 5-10 minutes. If still stuck, force-close and reopen — the recording is usually saved server-side. Check internet connection. If the recording is lost, contact support@wave.co.

### Webhook fires but transcript has no speaker labels
**Symptom**: `session.completed` webhook payload arrives, transcript text is present but all segments show "Unknown Speaker"
**Cause**: Voice ID hasn't been trained for these speakers yet, or the recording quality was too low for speaker diarization
**Solution**: Voice ID improves with use — label speakers manually in the first few recordings to train the model. For virtual meetings, meeting bot recordings have better speaker separation than mobile mic recordings.
