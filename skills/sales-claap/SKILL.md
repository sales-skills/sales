---
name: sales-claap
description: "Claap platform help — AI sales call recorder with no-bot recording, CRM auto-enrichment, and deal scoring. Use when configuring Claap recording on Zoom/Meet/Teams, Claap bot-free Chrome extension not saving recordings, Claap AI summaries ignoring speakers or being shallow, syncing Claap notes to HubSpot or Salesforce, setting up Claap API or webhooks for transcript export, Claap video processing slow after long calls, Claap free plan limits, or Claap MCP connector setup. Do NOT use for picking between AI note-takers (use /sales-note-taker) or reviewing a single call for coaching insights (use /sales-call-review)."
argument-hint: "[describe what you need help with in Claap]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Claap Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up Claap recording (Zoom, Google Meet, Teams, phone, in-person)
   - B) Configure CRM sync (HubSpot, Salesforce, Attio, Pipedrive)
   - C) Use the API or webhooks for transcript/recording export
   - D) Set up AI agents (Analyst, Coach) or deal scoring (SPICED, MEDDIC, BANT)
   - E) Fix a specific issue (extension crash, slow processing, summary quality)
   - F) Understand pricing / plan differences

2. **Which plan are you on?**
   - A) Basic (Free)
   - B) Pro ($24/user/mo annual)
   - C) Business ($48/user/mo annual)
   - D) Enterprise

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking between Claap and Fathom, Fireflies, Gong, etc. | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Meeting scheduling (not note-taking) | `/sales-meeting-scheduler {user's question}` |

Otherwise, answer directly below.

## Step 3 — Claap platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints or webhook payloads, also read `references/claap-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Recording setup**: Start with bot-free (Chrome extension) for privacy. Switch to bot recorder if you need automatic recording without browser. Both support Zoom, Meet, Teams.

**CRM enrichment**: Business plan required for auto-enrichment. Map custom CRM fields in Settings → Integrations. Test with one deal before bulk-enabling.

**Deal scoring**: Configure methodology (SPICED, MEDDIC, BANT) in AI Analyst settings. Scores update after each recorded call.

**API integration**: API keys require Pro+ plan (free plan gets 401). Create keys in Settings → API & Webhooks (admin only). Use webhooks for real-time — `recording_added` fires when transcription + analysis completes.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free plan is extremely limited** — 10 videos, 300 minutes, 3-month storage. Core AI features (coaching, deal insights, CRM enrichment) locked behind Business ($48/user/mo). You can't meaningfully evaluate the product on Free.
- **Chrome extension crashes during screen recording** — multiple reports of extension becoming unresponsive, failing to save recordings, or requiring constant page refresh. If recording disappears, check the Claap dashboard — it may have uploaded but not shown in the extension UI.
- **AI summaries can be unbalanced** — reviews report summaries focused entirely on one speaker in multi-person calls. No workaround; escalate to support if critical.
- **Bot-free recording raises privacy questions** — recording without a visible bot means participants may not know they're being recorded. Check local consent laws. Claap sends notifications but some users report these cause participants to disconnect.
- **API keys only work on paid plans or trials** — free plan API requests return 401. Video/transcript URLs from the API expire in 24 hours.
- **Video processing is slow for long recordings** — multiple users report significant delays (15+ minutes) for group calls over 1 hour.

## Related skills

- `/sales-note-taker` — Picking between AI note-takers or building a transcript integration pipeline across vendors
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up CRM auto-enrichment
**User says**: "I want Claap to automatically update my HubSpot deal fields after every sales call"
**Skill does**: Confirms Business plan required, walks through HubSpot integration setup in Settings → Integrations, shows how to map custom properties, recommends testing with one deal first, flags that only recordings visible in workspace (not private) sync to CRM.

### Example 2: API webhook for transcript pipeline
**User says**: "I need to pipe Claap transcripts into our data warehouse whenever a recording finishes"
**Skill does**: Shows webhook setup for `recording_added` event, explains payload structure (recording metadata, outline, insights, transcript URL), notes URL expiration (24h), recommends fetching and storing transcript immediately on webhook receipt, points to OpenAPI spec for full schema.

### Example 3: Extension not saving recordings
**User says**: "My Claap Chrome extension keeps crashing and recordings aren't showing up"
**Skill does**: Checks if recordings appear in dashboard despite extension failure, suggests clearing extension cache, verifying Chrome version, checking if multiple recording extensions conflict, recommends switching to bot recorder as fallback.

## Troubleshooting

### AI summary ignores some speakers
**Symptom**: Summary focuses on one participant, barely mentions others in a multi-person call
**Cause**: Known limitation — Claap's summarization model can overweight the dominant speaker
**Solution**: No configuration fix exists. Workarounds: manually edit the summary, or export the full transcript for your own processing. Contact support if it happens consistently.

### Chrome extension stops recording or crashes
**Symptom**: Extension becomes unresponsive, recording controls disappear, or saved recording is missing
**Cause**: Tab switching, heavy browser load, or conflicting extensions
**Solution**: Disable other recording extensions, pin the Claap tab, refresh the page before recording. Check Claap dashboard — the recording may have uploaded despite the extension showing an error. If persistent, switch to the bot recorder.

### Video takes very long to process
**Symptom**: Recording stuck in "processing" for 15+ minutes after a call
**Cause**: Long group calls (1h+) with many speakers cause processing delays
**Solution**: Wait — it usually completes eventually. If stuck beyond 30 minutes, contact support with the recording ID. Shorter calls (under 30 min) typically process in 2-5 minutes.
