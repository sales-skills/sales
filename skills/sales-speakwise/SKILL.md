---
name: sales-speakwise
description: "Speakwise platform help — iOS-native AI meeting assistant with on-device transcription, Notion integration, and AirPods hands-free recording. Use when setting up Speakwise for in-person meeting recording, Notion sync not working or notes not appearing, choosing between Speakwise and Otter or Notta or Fathom for iPhone recording, transcription accuracy issues in noisy rooms, configuring AirPods hands-free recording, or understanding Speakwise free vs premium pricing. Do NOT use for picking between note-takers generally (use /sales-note-taker) or recording video calls on desktop (use /sales-note-taker — Speakwise is iOS in-person only)."
argument-hint: "[describe your Speakwise question — setup, Notion sync, recording, pricing, etc.]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-recording, ios, platform]
---

# Speakwise Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Speakwise or connecting Notion
   - B) Recording in-person meetings (conference rooms, 1:1s, field visits)
   - C) Transcription accuracy or language support
   - D) AirPods hands-free recording or Siri Shortcuts
   - E) AI summaries, action items, or follow-up emails
   - F) Pricing (free vs premium)
   - G) Troubleshooting (Notion sync, recording issues, speaker ID)

2. **What type of meetings are you recording?**
   - A) In-person (conference room, office)
   - B) Phone calls
   - C) Walking meetings or field visits
   - D) Mixed (some in-person, some virtual)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Speakwise to other note-takers | `/sales-note-taker {user's question}` |
| Recording Zoom/Teams/Meet video calls | `/sales-note-taker {user's question}` — Speakwise doesn't support video call platforms |
| CRM integration (Salesforce, HubSpot) | `/sales-note-taker {user's question}` — Speakwise only integrates with Notion |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Speakwise platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, Notion setup, recording modes, language support.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Install from App Store → grant microphone permission → connect Notion workspace → do a test recording in a quiet room to establish baseline quality → then try in your actual meeting environment.

**Recording tips**: Place iPhone face-down on the table between speakers for best pickup. Use AirPods for hands-free control if you need to be discreet. Enable scheduled reminders if you frequently forget to start recording.

**Notion workflow**: Each recording creates a Notion page with transcript, summary, and action items. Use Notion databases and filters to organize by project, date, or contact.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **iOS-only** — no Android, no web, no desktop app. If anyone on your team uses Android, Speakwise won't work for them.
- **No video call integration** — Speakwise records from the iPhone microphone only. It cannot join Zoom, Teams, or Google Meet as a bot. For virtual meetings, use a different note-taker.
- **No CRM integration** — Notion is the only external integration. No Salesforce, HubSpot, Pipedrive, or Zapier.
- **No API or webhooks** — you cannot programmatically access transcripts or build pipelines. Export is manual or Notion-only.
- **No collaboration features** — designed for individual professionals, not teams. No shared workspaces, no team analytics, no admin controls.
- **On-device processing trade-off** — privacy is excellent (nothing leaves the phone), but processing speed depends on iPhone model. Older iPhones may be slower.
- **95% accuracy claim requires optimal conditions** — noisy environments, multiple overlapping speakers, or heavy accents will degrade accuracy below the marketed figure.

## Related skills

- `/sales-note-taker` — Comparing Speakwise to other note-takers (Fathom, Fireflies, Otter, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Notion integration
**User says**: "I just installed Speakwise — how do I get my meeting notes to show up in Notion automatically?"
**Skill does**:
1. Walks through connecting Notion workspace from Speakwise settings
2. Explains the page structure (transcript, summary, action items per recording)
3. Recommends creating a dedicated Notion database for meeting notes
4. Suggests testing with a short recording first to verify sync
**Result**: Working Notion pipeline with organized meeting notes.

### Example 2: Improving transcription in a noisy conference room
**User says**: "My transcripts are messy when there are 5+ people in a conference room — lots of speaker mix-ups."
**Skill does**:
1. Recommends placing iPhone centrally, face-down on table for even pickup
2. Suggests using AirPods if the user is the primary speaker (better isolation)
3. Notes that 92%+ accuracy in noisy rooms is realistic, but speaker diarization degrades with overlapping speech
4. If accuracy is still insufficient, suggests considering a hardware solution like Omi or Plaud for better multi-speaker capture
**Result**: Practical recording placement tips and expectation-setting.

### Example 3: Deciding if Speakwise fits a sales team
**User says**: "I run a 4-person field sales team — would Speakwise work for recording client meetings?"
**Skill does**:
1. Confirms Speakwise handles in-person meetings well — that's its core use case
2. Flags limitations: no CRM integration (manual logging to Salesforce/HubSpot), no team features, iOS-only requirement
3. If CRM auto-fill is critical, routes to `/sales-note-taker` for alternatives like Rilla or Siro that have CRM integrations
4. If lightweight Notion-based tracking is acceptable, Speakwise at $59.99/yr per person is extremely budget-friendly
**Result**: Clear fit assessment with alternative recommendations if CRM is a requirement.

## Troubleshooting

### Notion sync not showing new recordings
**Symptom**: Recordings complete in Speakwise but don't appear in Notion.
**Cause**: Notion integration may have lost authorization, or the target database/page may have been moved or deleted.
**Solution**: Go to Speakwise settings → Notion → disconnect and reconnect. Verify the target Notion workspace is accessible. Check that the Notion integration has the correct page permissions. Try a fresh test recording after reconnecting.

### Transcription accuracy much worse than expected
**Symptom**: Transcript has many errors, wrong words, or garbled text.
**Cause**: Poor microphone placement, excessive background noise, or speakers too far from the iPhone. Heavy accents or non-primary languages may also reduce accuracy.
**Solution**: Place iPhone within 3-6 feet of speakers, face-down on a hard surface. Reduce background noise (close doors, turn off music). For multilingual meetings, set the primary language before recording. If the environment is consistently noisy, consider AirPods recording mode.

### Speaker identification mixing up participants
**Symptom**: AI attributes quotes to the wrong speakers in the transcript.
**Cause**: Speaker diarization struggles with similar-sounding voices, overlapping speech, or participants at varying distances from the microphone.
**Solution**: Ensure speakers are roughly equidistant from the iPhone. Avoid crosstalk (people talking over each other). For critical meetings where speaker attribution matters, note who said what in real-time and correct the transcript after. Speaker ID accuracy improves with fewer participants.
