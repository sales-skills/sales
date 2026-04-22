---
name: sales-plaud
description: "Plaud platform help — hardware AI voice recorder (Note, NotePin, NotePin S, Note Pro) with cloud transcription, AI summaries, and Developer API. Use when choosing between Plaud devices, setting up phone call recording with the vibration sensor, troubleshooting recording activation or sync failures, integrating Plaud transcripts into CRM or data pipelines via the Developer API, comparing Plaud pricing tiers (Starter/Pro/Unlimited), or debugging Bluetooth connectivity and charging issues. Do NOT use for choosing between note-taker platforms (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Plaud]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, hardware, wearable, transcription, platform]
---

# Plaud Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **Which Plaud device do you have (or are considering)?**
   - A) NotePin / NotePin S (wearable pin)
   - B) Note (credit-card recorder)
   - C) Note Pro (4-mic extended range)
   - D) Haven't decided yet — help me choose

2. **What's your primary goal?**
   - A) Set up and configure my device
   - B) Compare Plaud devices or pricing plans
   - C) Integrate Plaud transcripts into CRM, Slack, or a data pipeline
   - D) Troubleshoot a recording, sync, or hardware issue

3. **What are you recording?**
   - A) In-person meetings / interviews
   - B) Phone calls (using vibration sensor)
   - C) Both in-person and phone
   - D) Online meetings (Zoom/Meet/Teams)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between Plaud and other note-taker platforms | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program from call data | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Plaud platform reference

**Read `references/platform-guide.md`** for the full platform reference — devices, pricing, integrations, API, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Device selection quick guide:**
- **NotePin S** ($179) — best all-around wearable, physical button fixes touch-control complaints, 20hr recording
- **NotePin** ($127-159) — budget wearable, touch-only controls (less reliable)
- **Note** ($159) — portable credit-card size, good for desk/table placement
- **Note Pro** ($189) — best for large rooms (4 mics, 16ft range, double battery)

**Plan selection:** Start on free Starter (300 min/mo). Upgrade to Pro ($99.99/yr) when you exceed 300 min/mo or need full AI templates. Unlimited ($239.99/yr) only if you record 4+ hours daily.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Touch controls on NotePin are unreliable.** The most common complaint — accidental recordings, failure to trigger, "near impossible" activation. NotePin S adds a physical button that fixes this. If buying new, get the S.
- **Proprietary charging dock required.** No USB-C direct charging. If you lose the dock, you can't charge. Order a spare.
- **"Unlimited" plan caps at 24 hours/day.** Not truly unlimited — it's capped at 24hr of transcription per day, which only matters for heavy batch uploaders.
- **Official Developer API is in private beta.** Contact Plaud for access. The unofficial `plaud-api` Python package exists but is reverse-engineered and unsupported.
- **Online meetings require a separate workflow.** Plaud devices record ambient audio — they don't join Zoom/Meet/Teams as a bot. For online-only teams, use a software note-taker instead.
- **Each user needs their own physical device.** Multiple devices can pair to one subscription account, but you still need a device per person.
- **Syncing requires internet after recording.** Recordings are stored locally on the 64GB device but transcription/summaries happen in the cloud after syncing via the app.

## Related skills

- `/sales-note-taker` — Compare all AI note-taker platforms, plan API integrations, choose the right tool for your team
- `/sales-omi` — Omi AI open-source wearable ($89) — budget alternative with developer extensibility
- `/sales-rilla` — Rilla field sales coaching — if you need AI coaching for in-person sales, not just recording
- `/sales-siro` — Siro field sales coaching — multi-industry in-person recording with mid-call coaching
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing the right Plaud device
**User says**: "I do a lot of in-person client meetings and phone calls. Should I get the NotePin or Note Pro?"
**Skill does**:
1. Asks about recording environment — meeting rooms vs outdoor, group size, phone call frequency
2. Recommends NotePin S for portability + phone calls (VCS works best when device touches phone), Note Pro only if recording in large conference rooms with 5+ participants at 10+ feet
3. Notes that NotePin S physical button is more reliable than original NotePin touch controls
**Result**: Clear device recommendation with rationale.

### Example 2: Troubleshooting sync failures
**User says**: "My NotePin recordings aren't showing up in the app after meetings."
**Skill does**:
1. Checks: Is the device connected via Bluetooth? Is the app open during sync? Is there sufficient battery?
2. Walks through the standard troubleshooting: force-close app → re-pair device → check firmware update → manual sync from device storage
3. Notes that recordings are stored locally on 64GB and won't be lost — they just need to sync
**Result**: Step-by-step sync recovery with reassurance about data safety.

### Example 3: Building a transcript pipeline
**User says**: "I want to automatically push Plaud transcripts into Salesforce after each meeting."
**Skill does**:
1. Notes the official Developer API is in private beta — recommends contacting Plaud for access
2. As interim solution, suggests the unofficial `plaud-api` Python package for polling transcripts
3. Sketches architecture: poll recordings.list → fetch transcript → map to Salesforce Activity via REST API
4. Warns about unofficial API instability and recommends migrating to official API when available
**Result**: Pragmatic integration path with official API waitlist + unofficial interim.

## Troubleshooting

### Recording appears empty after a meeting
**Symptom**: Device showed it was recording (LED on), but the transcript is blank or nearly empty after sync
**Cause**: Touch controls may have stopped recording prematurely, or the microphone was obstructed (clothing, case). On NotePin, accidental double-tap stops recording.
**Solution**: Upgrade to NotePin S (physical button). Place the device microphone-side out (not against clothing). Check recording duration in app — if it's only a few seconds, the recording was stopped accidentally. Use the AutoFlow feature to get email confirmation when a recording completes.

### Bluetooth connection drops during sync
**Symptom**: "Plaud disconnected" notification, recordings stuck on device, app shows no new recordings
**Cause**: Bluetooth interference, phone battery optimization killing the app, or firmware mismatch
**Solution**: Keep the Plaud app in foreground during sync. Disable battery optimization for the Plaud app (Android) or enable Background App Refresh (iOS). Update firmware via app Settings → Device → Firmware Update. If persistent, forget the device in Bluetooth settings and re-pair.

### Phone call recording quality is poor
**Symptom**: VCS phone call recordings are muffled, one-sided, or have low volume
**Cause**: The Vibration Conduction Sensor needs direct contact with the phone's earpiece speaker area. Cases or screen protectors can dampen vibrations.
**Solution**: Place the Plaud device directly on the phone's earpiece (top edge, where the speaker is). Remove thick cases during recording. Ensure the VCS side of the device faces the phone. Use speakerphone as fallback for important calls — ambient mic captures both sides clearly.
