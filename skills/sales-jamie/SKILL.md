---
name: sales-jamie
description: "Jamie platform help — bot-free AI meeting note-taker, REST API with personal and workspace keys, webhook automations, CRM sync to HubSpot/Salesforce/Attio, MCP server for Claude/ChatGPT/Cursor. Use when setting up Jamie for a sales team, connecting Jamie webhooks to Make.com or a custom endpoint, pulling meeting transcripts and summaries via Jamie API, syncing Jamie action items to Asana or CRM, troubleshooting Jamie not recording or missing speakers, comparing Jamie pricing tiers, or configuring Jamie speaker recognition. Do NOT use for choosing between note-takers (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Jamie]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
github: "https://github.com/meetjamie"
---

# Jamie Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Initial setup — installing the app, connecting calendar, first recording
   - B) API integration — pulling transcripts/summaries programmatically
   - C) Webhook setup — automating workflows when meetings complete
   - D) CRM sync — connecting HubSpot, Salesforce, or Attio
   - E) Notes sync — Notion, Google Docs, or OneNote
   - F) Speaker recognition or custom terminology
   - G) Pricing / plan selection
   - H) Troubleshooting — recording not working, missing content, sync issues

2. **Which plan are you on?**
   - A) Free (10 meetings/mo, 30 min limit)
   - B) Plus (20 meetings/mo, 2 hr limit)
   - C) Pro (unlimited meetings, 3 hr limit)
   - D) Team (Pro features + centralized billing)
   - E) Enterprise (SSO, admin controls, EU residency)
   - F) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between note-takers (Jamie vs Fireflies vs Fathom etc.) | `/sales-note-taker {user's question}` |
| Reviewing a specific sales call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration patterns (Zapier, iPaaS) | `/sales-integration {user's question}` |
| HubSpot platform config (beyond Jamie sync) | `/sales-hubspot {user's question}` |
| Salesforce platform config (beyond Jamie sync) | `/sales-salesforce {user's question}` |

Otherwise, answer directly below.

## Step 3 — Jamie platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, API endpoints, webhook setup, integrations, data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **API vs webhooks**: Use webhooks (`meeting.completed`) for real-time pipelines; use REST API for batch queries and search. Combine both for production: webhook for push + nightly reconcile poll.
- **Personal vs workspace keys**: Personal keys see only your meetings + shared ones. Workspace keys (admin-created) see all workspace meetings — use for team-wide dashboards or CRM sync.
- **Plan gating**: API/webhooks require Pro+. CRM sync (HubSpot/Salesforce/Attio) requires Pro+. Free and Plus are personal-use only.
- **MCP**: Community-built `vicampuzano-jamie-mcp` connects Jamie to Claude/ChatGPT/Cursor — requires Pro+ and `JAMIE_API_KEY` env var.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Processing delays.** Summaries can take 5-10 minutes even for short meetings. Users report summaries getting stuck in "processing" — if this happens, check for app updates or restart Jamie.
- **Lost/failed recordings.** Multiple users report entire meetings lost, especially during app upgrades. Never update Jamie mid-meeting. For high-stakes calls, keep a backup recorder.
- **Speaker identification is inconsistent.** Mislabeling, duplicating, and phantom speaker tags are common. In large meetings (7-8+ people), entire participants may be left out. Manually correct speakers in early meetings to train speaker memory.
- **No video recording.** Audio only. If you need to review slide shares or demos, pair with a screen recorder or choose a video-capable note-taker.
- **No Android app.** Desktop (Mac/Windows) and iOS only.
- **Free tier is very limited.** 10 meetings/month with a 30-minute cap. Most competitors offer more generous free tiers (Fathom: unlimited free recordings).
- **No native Zapier integration.** Automation goes through Make.com or custom webhooks.
- **CRM sync is Pro+ only.** Free and Plus plans can't push notes to HubSpot/Salesforce/Attio.
- **Webhook endpoint URL can't be updated.** Delete and recreate if the URL changes. Events are also immutable after creation.
- **Audio deleted after transcription.** You can't re-listen to or re-process a meeting.

## Related skills

- `/sales-note-taker` — Compare note-takers, plan API integration architecture, normalize transcript formats across vendors
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, Make, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up Jamie webhooks with Make.com
**User says**: "I want Jamie to automatically create a Notion page for every meeting."
**Skill does**:
1. Confirms user is on Plus+ plan (webhooks require it)
2. Walks through: Jamie Settings → Integrations → Webhooks → Create Webhook → paste Make.com webhook URL
3. Notes to select `meeting.completed` event and API Key auth with `x-make-apikey` header
4. Shows Make.com scenario: webhook trigger → parse JSON → create Notion page with summary + action items
**Result**: Automated Notion pages for every completed meeting.

### Example 2: Building a transcript pipeline via Jamie API
**User says**: "I need to pull all meeting transcripts from Jamie into our data warehouse nightly."
**Skill does**:
1. Recommends workspace API key (admin-created, sees all workspace meetings)
2. Shows: `GET /v1/workspace/meetings` with date filters → paginate → for each meeting fetch transcript (Markdown format)
3. Flags 100 req/min rate limit — add throttling for large workspaces
4. Suggests hybrid: webhook for real-time + nightly batch to catch gaps
**Result**: Production-ready architecture for transcript ingestion.

### Example 3: Jamie not picking up speakers correctly
**User says**: "Jamie keeps labeling my colleague as 'Speaker 2' instead of their name."
**Skill does**:
1. Explains speaker memory: Jamie learns speakers over time from repeated meetings
2. Walks through: manually label speakers in the first few meetings → Jamie's speaker memory learns the voice
3. Notes custom words feature for proper nouns and company-specific terminology
4. Flags: bot-free recording relies on device microphone quality — if remote participants are quiet, diarization suffers
**Result**: Clear steps to improve speaker identification accuracy.

## Troubleshooting

### Meeting summary stuck in processing or lost entirely
**Symptom**: Meeting ends but summary never appears, stays in "processing" indefinitely, or disappears
**Cause**: App update during recording, network interruption, or processing pipeline failure. Users report ~80% reliability — critical meetings can be missed.
**Solution**: Never update Jamie during an active meeting. If stuck: restart the Jamie app, check for pending updates, and verify internet connectivity. For high-stakes meetings, run a backup recorder (screen recording or a second tool). If a summary is lost, there's no recovery — Jamie deletes audio after transcription.

### Speaker mislabeled or missing in large meetings
**Symptom**: Speakers labeled as "Speaker 2" instead of names, phantom speaker tags appear, or participants entirely missing from transcript (common in 7-8+ person meetings)
**Cause**: Bot-free recording relies on device microphone quality. Remote participants with poor audio, crosstalk, or similar voices cause diarization failures. Speaker memory needs multiple meetings to learn voices.
**Solution**: Manually correct speaker labels in the first 3-5 meetings with each person to train speaker memory. Use custom words for uncommon names. For large meetings, ensure good microphone quality (headset > laptop mic). Accept that large-group diarization will be imperfect — consider Gong or Fireflies for 8+ person calls.

### Webhook not firing after meeting ends
**Symptom**: Webhook endpoint never receives `meeting.completed` event
**Cause**: Webhook requires Plus+ plan, endpoint must be HTTPS, or webhook was created with wrong event
**Solution**: Verify plan is Plus or higher. Check webhook URL is HTTPS (HTTP is rejected). In Jamie Settings → Integrations → Webhooks, confirm the webhook shows `meeting.completed` as the selected event. Test with a short meeting. Check delivery logs — Jamie retries up to 5 times with exponential backoff. Note: processing delays (5-10 min) mean the webhook fires later than expected — don't assume failure until 15 minutes have passed.
