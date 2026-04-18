---
name: sales-clari-copilot
description: "Clari Copilot (formerly Wingman) platform help — conversation intelligence with real-time battlecards, live coaching during calls, AI call summaries, coaching scorecards, gametapes, deal intelligence, and CRM auto-update within Clari's revenue orchestration platform. Use when setting up Clari Copilot for a sales team, battlecards popping up too often during calls, meeting bot not joining or joining late, Clari Copilot vs Gong pricing or features, Clari API integration for forecast export or data ingestion, CRM field mapping not syncing correctly, coaching scorecards not scoring accurately, or evaluating Clari Copilot for enterprise conversation intelligence. Do NOT use for picking a note-taker across vendors (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in Clari Copilot]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, coaching, platform]
---

# Clari Copilot Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Clari Copilot for the first time
   - B) Configuring battlecards, playbooks, or coaching scorecards
   - C) Troubleshooting meeting bot, CRM sync, or transcription issues
   - D) Clari API integration (forecast export, data ingestion, audit events)
   - E) Evaluating Clari Copilot vs alternatives (Gong, Avoma, tl;dv, etc.)
   - F) Understanding pricing tiers and what's gated to which plan

2. **Which Clari Copilot plan are you on?**
   - A) Growth (~$60/user/mo)
   - B) Accelerator (~$90/user/mo)
   - C) Enterprise (~$110/user/mo)
   - D) Bundled with Clari Core / not sure
   - E) Evaluating — haven't purchased yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a note-taker across vendors (Clari Copilot vs Gong vs Fathom, etc.) | `/sales-note-taker {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Revenue forecasting strategy (not Clari API) | `/sales-forecast {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Clari Copilot platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup decisions to walk through:**
- Battlecard frequency vs rep distraction — start with 2-3 critical battlecards, not every competitor
- Coaching scorecards — pick 3-5 behaviors that correlate with win rates, avoid scoring everything
- CRM sync — map only the fields reps actually use in their workflow, not every available field
- Gametapes — curate 5-10 best calls per use case, don't let the library bloat

**When to escalate to Clari support:**
- Meeting bot consistently fails to join (not just late) — likely a calendar/permissions issue on Clari's side
- CRM field mapping returns errors — may need Clari admin to adjust field permissions
- Enterprise API access not provisioned — requires account team intervention

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Copilot API is Enterprise-only.** Growth and Accelerator plans don't get API access. If you need programmatic access to call data, confirm Enterprise pricing first.
- **Battlecards can be distracting.** Multiple users report cards popping up repeatedly mid-call. Start with a small set of high-value battlecards and expand gradually — don't enable every card at launch.
- **Bot joining is not instant.** Clari's meeting bot can take a few minutes to join after a call starts, potentially missing the opening. Invite the bot manually before critical calls if auto-join is unreliable.
- **15-language transcription limit.** If your team sells globally, Clari Copilot supports fewer languages than competitors like tl;dv (30+) or Notta (58). Check your language coverage before committing.
- **CRM sync requires clean data.** Incomplete or stale CRM records cause sync failures and inaccurate deal intelligence. Clean your CRM data before rolling out Copilot — don't expect Copilot to fix data quality.
- **Steep learning curve.** Users describe the UI as "overwhelming" with complex navigation. Plan for 2-4 weeks of admin ramp time and schedule team training sessions.
- **Implementation costs add 20-30% to first year.** Budget $15K-75K for professional services on top of per-seat pricing. Negotiate this as part of the initial contract.
- **Clari acquired Salesloft (late 2025).** The product roadmap is merging. If evaluating Clari Copilot standalone, ask your account team about Salesloft bundling and how features will consolidate.

## Related skills

- `/sales-note-taker` — Picking an AI note-taker across vendors (Fathom, Fireflies, Avoma, Gong, etc.) or wiring APIs for transcript pipelines
- `/sales-coaching` — Building coaching programs, onboarding, role-play, certifications, measuring coaching impact
- `/sales-call-review` — Review a specific call for coaching or scoring
- `/sales-forecast` — Revenue forecasting, pipeline coverage, commit validation, gap analysis
- `/sales-gong` — Gong platform help — direct competitor, often compared on pricing and features
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Battlecards overwhelming reps
**User says**: "Our reps complain that Clari Copilot battlecards pop up constantly during calls and distract them from the conversation."
**Skill does**:
1. Reads platform guide for battlecard configuration
2. Recommends reducing active battlecards to top 3-5 competitors the team actually encounters
3. Suggests configuring trigger sensitivity to only fire on explicit competitor mentions, not adjacent keywords
4. Advises reviewing battlecard engagement analytics after 2 weeks to see which ones reps actually use
**Result**: Focused battlecard strategy that helps instead of distracts.

### Example 2: Evaluating Clari Copilot pricing
**User says**: "We're a 30-person sales team on HubSpot. Clari quoted us $90/user/month for Accelerator. Is that worth it vs Gong?"
**Skill does**:
1. Reads pricing section — Accelerator at $90/user = $32,400/yr for 30 users, plus $15-50K implementation
2. Compares to Gong at ~$1,600/user/yr + $5-50K platform fee = $48K+ for 30 users
3. Notes Clari Copilot is cheaper but Gong has deeper conversation analytics and larger integration ecosystem
4. Flags that Accelerator doesn't include API access — Enterprise ($110/user) needed for that
5. Recommends requesting a Gong quote for direct comparison, and evaluating whether Clari Core forecasting (bundled) justifies the premium over dedicated note-takers like Fathom Business ($25/seat)
**Result**: Clear pricing comparison with the right questions to ask each vendor.

### Example 3: Clari API integration for forecast data
**User says**: "I need to export our Clari forecast submissions to Snowflake every night. How do I set this up?"
**Skill does**:
1. Reads API reference for forecast export endpoints
2. Walks through: POST `/export/forecast/{forecastId}` to initiate, GET `/export/jobs/{jobId}` to poll status, GET `/export/jobs/{jobId}/results` to download
3. Notes auth via `apikey` header, 100 req/sec rate limit
4. Recommends a nightly cron job with error handling for FAILED/ABORTED states
5. Flags that API access requires Enterprise plan
**Result**: Working architecture for automated forecast export.

## Troubleshooting

### Meeting bot not joining or joining late
**Symptom**: Clari Copilot bot doesn't appear in calls, or joins minutes after the call starts
**Cause**: Calendar permission issues, calendar sync delays, or bot capacity during peak hours
**Solution**: Verify calendar integration permissions in Clari admin. For critical calls, manually invite the Copilot bot before the call starts. Check that the meeting organizer's calendar is connected (not just attendees). If persistent, contact Clari support — this is a known issue from user reviews.

### CRM fields not syncing after calls
**Symptom**: Call data captured by Copilot doesn't appear in Salesforce/HubSpot/Pipedrive
**Cause**: Field mapping misconfiguration, CRM field permissions, or stale contact data
**Solution**: In Clari admin, verify each mapped field exists in the CRM and has write permissions. Check that the contact/deal exists in the CRM before the call — Copilot can't create new CRM records, only update existing ones. Test with a single rep before rolling out to the team.

### Transcription accuracy issues with accents or industry jargon
**Symptom**: Transcripts contain frequent errors, especially with technical terms or non-native English speakers
**Cause**: Clari Copilot's ASR has 92-96% accuracy — lower than some competitors for accented speech
**Solution**: No custom vocabulary feature exists currently. For critical terminology, train reps to speak technical terms clearly. Consider supplementing with a tool like Notta (58 languages, higher multilingual accuracy) if your team is globally distributed. Monitor accuracy over time — Clari's models improve with usage.
