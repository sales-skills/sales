---
name: sales-demodesk
description: "Demodesk platform help — AI-powered sales meeting platform with conversation intelligence, coaching scorecards, CRM auto-update, and autonomous AI agents. Use when setting up Demodesk recording and transcription, CRM fields not syncing from Demodesk to Salesforce or HubSpot, AI coaching scorecards scoring inaccurately, transcription in wrong language or speakers mixed up, configuring AI Crew autonomous agents, downloading transcripts or summaries via the Demodesk API, comparing Demodesk to Gong or other conversation intelligence tools, or Demodesk webhook events not firing. Do NOT use for choosing between AI note-takers generally (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Demodesk question — e.g., 'CRM fields not updating after calls' or 'set up custom coaching scorecards']"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, coaching, platform]
github: "https://github.com/demodesk"
---

# Demodesk Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up recording, transcription, or AI summaries
   - B) CRM integration (Salesforce, HubSpot, Pipedrive)
   - C) AI coaching scorecards and performance dashboards
   - D) AI Crew autonomous agents (deal rescue, follow-ups)
   - E) API integration (transcripts, recordings, webhooks)
   - F) Comparing Demodesk to alternatives
   - G) Troubleshooting (transcription accuracy, speaker ID, language detection)

2. **Which Demodesk modules are you using?**
   - A) AI Assistant only (recording + transcription + summaries)
   - B) AI Coach (scorecards, feedback, dashboards)
   - C) AI Analyst (pipeline insights, "Ask AI Analyst")
   - D) AI CRM Concierge (zero-setup CRM field detection)
   - E) AI Crew (autonomous workflow agents)
   - F) Multiple / all of the above

3. **Which CRM?**
   - A) Salesforce
   - B) HubSpot
   - C) Pipedrive
   - D) None / not connected yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between Demodesk and other note-takers | `/sales-note-taker {user's question}` |
| Building a coaching program or framework | `/sales-coaching {user's question}` |
| Reviewing a specific sales call | `/sales-call-review {user's question}` |
| CRM integration strategy across tools | `/sales-integration {user's question}` |
| Meeting scheduling optimization | `/sales-meeting-scheduler {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — Demodesk platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API endpoints, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

For API-specific questions, also **read `references/demodesk-api-reference.md`** for endpoint details, authentication, rate limits, and webhook events.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **CRM sync issues**: Check which CRM is connected, verify field mapping in Settings > Integrations, confirm the meeting was recorded (not just scheduled). AI CRM Concierge detects fields automatically but needs human approval before first sync.
- **Transcription problems**: Verify the meeting had audio (not screen-share only). Language detection is automatic but can fail with code-switching or strong accents — check if manual language override is available.
- **Scorecard setup**: Start with built-in templates (BANT, MEDDIC, SPIN), then customize. Scores are 1-5 per question. Export via API `/recordings/{token}/scorecards`.
- **AI Crew pricing**: Tiered by events (€299/5K events, €999/25K events). Start with Standard plan to gauge event volume before committing to higher tier.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Full Google account access required** — Demodesk requests broad Google permissions for calendar/recording. No granular scope options.
- **No bot announcement by default** — Demodesk records silently (no bot joins call). Users must handle consent/disclosure themselves. Check local recording laws.
- **AI Crew is a separate add-on** — €299-999/mo on top of per-user pricing. Not included in Standard or Enterprise base plans.
- **Webhook setup requires emailing support** — you can't self-serve webhook endpoints. Email support@demodesk.com with your endpoint URLs.
- **V1 API is legacy** — use V2 (`/api/v2/`) for recordings, transcripts, summaries, scorecards. V1 still works for meetings/users but isn't getting new features.
- **Rate limits are per API key, not per user** — 120 req/min global, 60 req/min per endpoint. Batch transcript endpoint handles up to 100 tokens per request.
- **Pricing is in EUR** — €49/user/mo annual, €59 monthly. Free viewer seats for non-sales team members.

## Related skills

- `/sales-note-taker` — Choosing between AI note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring their APIs into downstream systems
- `/sales-coaching` — Building coaching programs, onboarding, role-plays, measuring coaching impact
- `/sales-call-review` — Reviewing a specific sales call for coaching feedback
- `/sales-integration` — Connecting sales tools via webhooks, Zapier, Make, or API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM fields not updating
**User says**: "Demodesk isn't syncing call notes to Salesforce after meetings"
**Skill does**: Checks CRM connection status, verifies AI CRM Concierge field mapping, confirms meeting was recorded and transcription completed, walks through Salesforce event object mapping and duplicate prevention settings.

### Example 2: Custom coaching scorecards
**User says**: "I want to score my team's discovery calls on MEDDIC criteria"
**Skill does**: Walks through creating a custom scorecard template with MEDDIC dimensions (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion), configuring 1-5 scoring per question, setting up team performance dashboards, and exporting scores via the API.

### Example 3: Transcript pipeline
**User says**: "How do I download all team transcripts into our data warehouse?"
**Skill does**: Covers V2 API authentication, listing recordings with filters, cursor-based pagination, batch transcript download (POST /transcripts/batch with up to 100 tokens), rate limit handling (120 req/min, 429 with Retry-After), and webhook-driven pipeline using `recording.transcription_postprocessed` event.

## Troubleshooting

### Transcription in wrong language or speakers mixed up
**Cause**: Automatic language detection fails with code-switching (e.g., switching between English and German mid-call) or strong accents. Speaker diarization struggles with similar-sounding voices.
**Solution**: Check if the meeting had clear audio (no background noise). Demodesk supports 98 languages but auto-detection can misfire — look for manual language override in meeting settings. For speaker attribution, ensure all participants joined with distinct audio sources (not sharing a mic).

### AI summaries contradict what was actually said
**Cause**: AI notes are generated from transcripts — if the transcript has errors, the summary inherits them. Notes can also be placed into irrelevant templates.
**Solution**: Always verify summaries against the raw transcript. Check that the correct note template was applied. Report persistent inaccuracies to Demodesk support for model improvement.

### Webhook events not arriving
**Cause**: Webhook setup requires manual activation by Demodesk support. Self-service webhook configuration is not available.
**Solution**: Email support@demodesk.com with your endpoint URLs and which events you need (e.g., `recording.transcription_postprocessed`, `demo.ended`). Verify your endpoint returns 200 within the timeout window. Check for 429 rate limiting if processing is slow.
