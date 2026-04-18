---
name: sales-jiminny
description: "Jiminny platform help — conversation intelligence, revenue intelligence, AI notetaker, sales coaching, and automatic CRM logging. Use when setting up Jiminny call recording or transcription, configuring Jiminny CRM sync to Salesforce or HubSpot, connecting Jiminny to a dialer like Aircall or Dialpad, troubleshooting calls not appearing in Jiminny or tagging delays, pulling activity data from the Jiminny API, comparing Jiminny vs Gong pricing or features, or evaluating Jiminny for pipeline visibility. Do NOT use for general coaching program design (use /sales-coaching) or comparing standalone AI note-takers (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Jiminny]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, revenue-intelligence, coaching, platform]
github: "https://github.com/jiminny"
---

# Jiminny Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up call recording and transcription
   - B) Configuring CRM integration (Salesforce, HubSpot, Pipedrive, etc.)
   - C) Conversation intelligence — call insights, competitive mentions, topic tracking
   - D) Revenue intelligence — pipeline visibility, deal risks, win/loss analysis
   - E) Sales coaching — call scoring, performance tracking, team coaching
   - F) Dialer integration (Aircall, Dialpad, RingCentral, Five9, etc.)
   - G) API integration — pulling activity data into other systems
   - H) Comparing Jiminny to alternatives (Gong, Avoma, Fireflies)

2. **What's your Jiminny seat type?**
   - A) Recording Seat ($83/mo — full recording + transcription + insights)
   - B) Insights Seat ($42/mo — view/listen only, no recording)
   - C) Listener Seat (free — playback only)
   - D) Evaluating — haven't started yet

3. **What CRM do you use?**
   - A) Salesforce
   - B) HubSpot
   - C) Zoho / Pipedrive / Close / Bullhorn / Copper / Microsoft Dynamics
   - D) None / other

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence (tool-agnostic) | `/sales-coaching {user's question}` |
| Reviewing a specific call recording for coaching | `/sales-call-review {user's question}` |
| Comparing AI note-takers / conversation intelligence platforms | `/sales-note-taker {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Gong-specific questions | `/sales-gong {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — Jiminny platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API quick ref, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Key decision points:**
- Recording vs Insights seats — only Recording seats capture calls; Insights seats are for managers/leaders who review but don't record
- CRM sync depth varies by CRM — Salesforce and HubSpot have the deepest native integrations
- Dialer compatibility — check that your dialer is supported before committing (not all dialers have native integration)
- API is partial REST — good for pulling activity data out, but limited compared to Gong's API breadth

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Transcription accuracy degrades with accents and background noise.** This is a known limitation across G2 reviews (57 mentions). Consider post-processing or use quiet environments for important calls.
- **Calls may take time to appear in Jiminny after completion.** Tagging complexity and processing delays are the #1 complaint (71 G2 mentions). Don't assume a missing call was unrecorded — check after 20-30 minutes.
- **AI insights require specificity to be useful.** Generic prompts to the AI produce generic output. Set up specific coaching frameworks and scoring criteria to get actionable results.
- **API download links expire after 24 hours.** If you're building a pipeline that stores recordings, fetch and persist the media promptly after receiving the API response.
- **API key generation is admin/owner-only.** Regular users can't generate API keys — this must go through Organization Settings.
- **No platform fee, but one-time setup fee exists.** Unlike Gong's $5K-50K platform fee, Jiminny charges a one-time setup fee (amount varies by deal).
- **12-month minimum contract.** No monthly billing option — annual commitment required.

## Related skills

- `/sales-note-taker` — Comparing conversation intelligence platforms (Fathom, Fireflies, Avoma, Gong, etc.) or wiring APIs for transcript pipelines
- `/sales-coaching` — Building coaching programs that consume call data
- `/sales-call-review` — Reviewing specific sales calls and extracting coaching insights
- `/sales-gong` — Gong platform help (the main enterprise competitor)
- `/sales-outdoo` — Outdoo platform help (mid-market alternative with AI roleplay)
- `/sales-forecast` — Revenue forecasting and pipeline analytics
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM sync not working
**User says**: "Jiminny isn't syncing call notes to our Salesforce — what should I check?"
**Skill does**:
1. Reads platform guide for Salesforce integration details
2. Walks through common sync issues — field mapping, permissions, sync frequency
3. Recommends checking Jiminny's activity log for sync errors and verifying Salesforce connected app authorization
**Result**: Step-by-step troubleshooting for CRM sync with specific Jiminny settings to check

### Example 2: Evaluating Jiminny vs Gong
**User says**: "Should I go with Jiminny or Gong for a 30-person sales team?"
**Skill does**:
1. Compares pricing (Jiminny Recording $83/mo vs Gong ~$133/mo + platform fee)
2. Compares features — Gong has deeper analytics/ecosystem, Jiminny is more accessible and coaching-focused
3. Recommends Jiminny if budget matters and coaching is the priority; Gong if deep deal intelligence and ecosystem integration are critical
**Result**: Clear comparison with a recommendation based on budget and priorities

### Example 3: Pulling call data via API
**User says**: "I need to extract all call transcripts from Jiminny into our data warehouse."
**Skill does**:
1. Reads API reference for activity retrieval endpoints
2. Recommends batching in 500-1000 activity pulls, respecting 30 req/min rate limit
3. Warns about 24-hour download link expiry for recordings
4. Suggests regular incremental pulls rather than annual dumps
**Result**: API integration pattern with rate limit handling and data pipeline recommendations

## Troubleshooting

### Calls not appearing in Jiminny
**Symptom**: A call was made but doesn't show up in the Jiminny dashboard
**Cause**: Processing delays, tagging issues, or the dialer integration not triggering correctly
**Solution**: Wait 20-30 minutes — calls can take time to process. If still missing, check: (1) the dialer integration is connected and active, (2) the call was made from a Recording Seat (Insights/Listener seats don't record), (3) no recording rules excluded this call type. Contact Jiminny support if the call is still missing after an hour.

### Meetings connected to wrong colleague
**Symptom**: A recorded meeting appears under the wrong team member's profile
**Cause**: Calendar or dialer mapping mismatch — Jiminny maps calls to users based on calendar events or dialer user IDs
**Solution**: Verify the user's email matches between Jiminny and the calendar/dialer. Check for shared calendar entries that might confuse the mapping. Jiminny support can manually reassign recordings if needed.

### Transcription accuracy poor for non-English calls
**Symptom**: Transcripts for calls in non-English languages or with heavy accents contain many errors
**Cause**: ASR models vary in quality across languages and accents — Jiminny supports 60+ languages but accuracy varies
**Solution**: For critical calls, review and manually correct transcripts. Ensure the correct language is set for the call. Background noise compounds accuracy issues — use quiet environments for important recordings.
