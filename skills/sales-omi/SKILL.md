---
name: sales-omi
description: "Omi AI wearable platform help — open-source AI necklace for all-day conversation capture (in-person + online meetings), Developer API (`api.omi.me/v1/dev`, Bearer token, 100 req/min), app marketplace with webhook integrations, memories/conversations/action-items endpoints. Use when setting up an Omi wearable for meeting capture, building a custom Omi app or integration, troubleshooting Bluetooth disconnects or transcription accuracy, connecting Omi to Slack or CRM via webhooks, comparing Omi to Plaud or Limitless for in-person recording, or accessing Omi's API to export conversations and action items. Do NOT use for choosing between software-only note-takers without wearable needs (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Omi]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, wearable, platform]
github: "https://github.com/BasedHardware"
---

# Omi AI Wearable Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Set up and configure my Omi device
   - B) Build a custom Omi app or webhook integration
   - C) Troubleshoot hardware/connectivity/transcription issues
   - D) Compare Omi to other wearable recorders (Plaud, Limitless, Bee)
   - E) Export data via the Developer API

2. **Which Omi product do you have?**
   - A) Omi necklace (consumer)
   - B) Omi Dev Kit 2 (developer)
   - C) Don't have one yet — evaluating

3. **What plan are you on?**
   - A) Basic (free — 1,200 cloud min/mo)
   - B) Unlimited ($19/mo or $199/yr)
   - C) Not sure / haven't purchased yet

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between software-only note-takers (Fathom, Fireflies, Gong, etc.) | `/sales-note-taker {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Reviewing a sales call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |

Otherwise, answer directly below.

## Step 3 — Omi platform reference

**Read `references/platform-guide.md`** for the full platform reference — hardware specs, API endpoints, app framework, pricing, integrations, data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup**: Walk through device pairing, app installation, first recording. Flag the common Bluetooth disconnect issue and mitigation (keep phone nearby, check BLE settings).

**For app development**: Guide through the app framework (prompt-based vs integration apps), webhook setup, and testing with webhook.site.

**For API integration**: Map endpoints to the user's goal. Memories for AI-generated insights, Conversations for raw transcripts, Action Items for to-dos.

**For comparison**: Omi's differentiators are price ($89 vs $159 Plaud), open-source (full hardware + software), and developer extensibility. Trade-offs are transcription accuracy and connectivity reliability vs more polished competitors.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Bluetooth disconnects are the #1 complaint.** "Your Omi Disconnected" notifications are frequent. Keep phone within 3m, check BLE 5.3 compatibility, and update to latest firmware. Dev Kit 2 improved this significantly.
- **Battery indicator is unreliable.** Readings swing between random percentages (100%, 41%, -1%). Charge fully before important meetings rather than trusting the gauge.
- **Cannot filter background audio from speech.** Omi records everything it hears — TV, other conversations, ambient noise. No voice isolation feature exists. Position the device close to your mouth for best results.
- **Transcription accuracy varies.** Speaker diarization misidentifies speakers in 1:1 meetings. Non-English accuracy is lower. Share example conversations with support if consistently garbled.
- **No native CRM connectors.** CRM sync requires building a custom webhook app or using the Zapier integration app from the marketplace. No direct HubSpot/Salesforce integration.
- **Free plan limits cloud processing, not recording.** Recordings continue after 1,200 min/mo but are saved locally only — no cloud transcription until next month or upgrade.
- **"Unlimited" only changes cloud minutes.** All features (transcription, summaries, memories) are identical on Basic and Unlimited. The only difference is the monthly cloud listening cap.

## Related skills

- `/sales-note-taker` — Compare and integrate AI meeting note-takers across all platforms
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing between Omi and Plaud for in-person meetings
**User says**: "I need to record in-person sales meetings. Should I get Omi or Plaud NotePin?"
**Skill does**:
1. Compares: Omi ($89, open-source, all-day capture, 1,200 free cloud min) vs Plaud NotePin S ($159, polished hardware, 300 min/mo free then $99-240/yr)
2. Flags Omi's trade-offs: lower transcription accuracy, Bluetooth disconnect issues, no polished app
3. Recommends Omi for developers/tinkerers who want extensibility; Plaud for reliability-first users
4. Notes both lack native CRM — either requires webhook/Zapier workaround

### Example 2: Building a Slack integration for meeting summaries
**User says**: "I want Omi to post a meeting summary to Slack whenever a conversation ends."
**Skill does**:
1. Recommends building an Integration App with memory trigger
2. Walks through: Create App → select Memory Trigger → set webhook URL to a serverless function → function formats summary and posts to Slack via Slack API
3. Notes the Zapier app in marketplace as a no-code alternative (5000+ connections)
4. Provides API endpoint for fetching full conversation: `GET /v1/dev/user/conversations`

### Example 3: Exporting all conversations via API
**User says**: "I want to pull all my Omi conversations into a data warehouse for analysis."
**Skill does**:
1. Points to `GET /v1/dev/user/conversations` endpoint with pagination
2. Notes auth: Bearer token from Settings → Developer → Create Key
3. Flags rate limits: 100 req/min, 10K/day — plan batch fetches accordingly
4. Suggests also pulling action items (`GET /v1/dev/user/action-items`) and memories (`GET /v1/dev/user/memories`)
5. Recommends a nightly sync job rather than real-time polling given rate limits

## Troubleshooting

### Device keeps disconnecting with "Your Omi Disconnected" spam
**Symptom**: Constant disconnect/reconnect notifications, recordings interrupted
**Cause**: BLE 5.3 connection instability between device and phone — most common on older phones or when device is far from phone
**Solution**: Keep phone within 3m of device. Update to latest firmware (Settings → Device → Check for Updates). If using Dev Kit 1, consider upgrading to Dev Kit 2 which has significantly improved connectivity. Restart both device and phone Bluetooth if stuck.

### Transcription is garbled or assigns wrong speakers
**Symptom**: Transcript contains nonsense text, or speaker labels are swapped/multiplied
**Cause**: Background audio interference (TV, music, other conversations), or microphone obstructed by clothing
**Solution**: Position device on outside of clothing near neck. Record in quieter environments. For consistently garbled output even in quiet conditions, share 1-2 example Conversations with Omi support. Dev Kit 2's improved MEMS microphone helps with accuracy.

### To-do list keeps reverting completed tasks
**Symptom**: Tasks marked as done reappear as incomplete
**Cause**: Known app bug — sync conflict between local and cloud state
**Solution**: Force-close and reopen the app after marking tasks done. Use the API (`GET /v1/dev/user/action-items`) to manage action items programmatically as a workaround. Check for app updates.
