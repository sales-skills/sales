---
name: sales-tldv
description: "tl;dv platform help — AI meeting note-taker with recording, transcription, CRM sync, and sales coaching. Use when configuring tl;dv recording on Zoom/Meet/Teams, tl;dv bot joining calls you didn't invite it to, tl;dv free plan AI summary limits or recording deletion, syncing tl;dv notes to HubSpot or Salesforce, setting up tl;dv API or webhooks for transcript export, tl;dv sales coaching playbooks (MEDDIC/BANT/SPIN), tl;dv transcription accuracy with multiple speakers, or tl;dv MCP server setup. Do NOT use for picking between AI note-takers (use /sales-note-taker) or reviewing a single call for coaching insights (use /sales-call-review)."
argument-hint: "[describe what you need help with in tl;dv]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
github: "https://github.com/tldv-public"
---

# tl;dv Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up tl;dv recording (Zoom, Google Meet, or Teams)
   - B) Configure CRM sync (HubSpot, Salesforce, Pipedrive)
   - C) Use the API or webhooks for transcript/notes export
   - D) Set up sales coaching playbooks or aggregated insights
   - E) Fix a specific issue (bot not joining, transcription errors, etc.)
   - F) Understand pricing / plan differences

2. **Which plan are you on?**
   - A) Free
   - B) Pro ($29/mo / $18 annual)
   - C) Business ($98/mo / $59 annual)
   - D) Enterprise

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking between tl;dv and Fireflies, Fathom, Gong, etc. | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Meeting scheduling (not note-taking) | `/sales-meeting-scheduler {user's question}` |

Otherwise, answer directly below.

## Step 3 — tl;dv platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints or webhook payloads, also read `references/tldv-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup questions**: Walk through the specific workflow step-by-step, noting plan gates (e.g., native CRM sync requires Business+, API requires Pro+).

**For API/webhook questions**: Provide the exact endpoint, headers, and example payload. Note the v1alpha1 status — the API is early and may change.

**For coaching setup**: Explain which playbook templates are available (MEDDIC, BANT, SPIN) and how to customize them. Note this requires Business plan.

**For troubleshooting**: Check the Gotchas section first, then Troubleshooting. Many issues are plan-gated (e.g., API access, native CRM).

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **"Unlimited recordings" on Free is misleading.** You get unlimited recordings but only 10 AI summaries *for the lifetime of the account*, and recordings are auto-deleted after 3 months. The 40 recordings/week cap also applies.
- **API is Pro+ only.** Free plan users cannot use the API or webhooks. The API is also in v1alpha1 — expect breaking changes.
- **Native CRM sync requires Business ($98/mo).** Pro plan only gets CRM sync through Zapier (separate Zapier subscription needed). Native HubSpot and Salesforce integration is Business-only.
- **Bot joins uninvited calls.** The tl;dv bot can join meetings on your calendar that you didn't explicitly invite it to. Check your auto-join settings in the tl;dv dashboard to restrict which meetings it joins.
- **No custom vocabulary.** Teams in specialized fields (medical, legal, technical) will see repeated transcription errors for domain terms. No way to add a custom dictionary — manual corrections required after every meeting.
- **3-hour recording limit.** Meetings longer than 3 hours (recorded or uploaded) will be cut off. Plan accordingly for all-day workshops or training sessions.

## Related skills

- `/sales-note-taker` — AI meeting note-taker / conversation-intelligence selection & API integration. Covers cross-platform comparison and integration patterns.
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM sync not working
**User says**: "I set up tl;dv but my meeting notes aren't showing up in HubSpot"
**Skill does**: Checks which plan they're on — if Pro, explains native HubSpot sync requires Business ($98/mo) and walks through the Zapier workaround. If Business, walks through the HubSpot integration setup in tl;dv settings and common issues (contact matching, field mapping).

### Example 2: API webhook setup
**User says**: "I want to get transcripts pushed to my app whenever a meeting ends"
**Skill does**: Confirms they're on Pro+ (API requires it), then walks through the webhook setup with `MeetingReady` and `TranscriptReady` triggers, shows the API endpoint for fetching transcript content via `GET /v1alpha1/meetings/{meetingId}/transcript`, and notes the 6-hour TTL on recording download URLs.

### Example 3: Free plan limitations
**User says**: "tl;dv says unlimited but I can only get 10 AI summaries"
**Skill does**: Explains the Free plan's 10 lifetime AI summary cap, notes recordings delete after 3 months and the 40/week recording cap. Recommends Pro ($18/mo annual) for unlimited AI notes and permanent storage, or suggests Fathom free tier as an alternative with truly unlimited AI summaries.

## Troubleshooting

### tl;dv bot not joining meetings
**Symptom**: Meeting ends but no recording appears in tl;dv
**Cause**: Auto-join settings may be misconfigured, or the bot was blocked by the meeting host's IT security
**Solution**: Check Settings → Recording → Auto-join preferences. Ensure the meeting platform (Zoom/Meet/Teams) allows third-party bots. For Google Meet, the meeting organizer's Workspace admin must allow external participants. For Zoom, check the "Allow apps" setting in Zoom account security.

### Transcription accuracy poor with multiple speakers
**Symptom**: Speaker labels are wrong, names misassigned, or transcript garbles overlapping speech
**Cause**: Speaker diarization struggles with similar voices, cross-talk, or poor audio quality
**Solution**: Ensure each participant uses a separate microphone (no shared conference room mic). Speak one at a time when possible. For accented speech, tl;dv claims up to 96% accuracy in clear English but drops to ~85-90% with heavy accents or multiple simultaneous speakers. No custom vocabulary option exists — review and correct critical transcripts manually.

### Integration shows "connected" but data not syncing
**Symptom**: HubSpot or Salesforce integration appears connected but meeting notes don't appear in CRM
**Cause**: Common causes include contact matching failures (CRM email doesn't match meeting invitee email), field mapping not configured, or plan-gated features
**Solution**: Verify you're on Business plan (native CRM sync). Check that meeting invitee emails match CRM contact emails exactly. Review the field mapping in tl;dv Settings → Integrations → CRM to ensure target fields are selected. Try disconnecting and reconnecting the integration.
