---
name: sales-otter
description: "Otter.ai platform help — OtterPilot auto-join, live transcription, AI summaries, AI Chat, action item extraction, Channels, Sales Notetaker, Zapier automation, CRM sync (HubSpot/Salesforce/Dynamics/Zoho). Use when setting up OtterPilot for Zoom/Meet/Teams, transcription accuracy is dropping with accents or noise, speakers are getting mixed up in transcripts, action items feel generic or wrong, minute limits are running out mid-month, connecting Otter to Slack or CRM via Zapier, deciding between Otter Pro vs Business vs Enterprise, or exporting transcripts to Snowflake or S3. Do NOT use for comparing AI note-takers across vendors (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Otter.ai]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# Otter.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up OtterPilot for my meetings (auto-join, calendar, recording)
   - B) Fix transcription quality (accuracy, speakers, noise)
   - C) Connect Otter to other tools (CRM, Slack, Zapier, S3)
   - D) Evaluate Otter plans / understand pricing limits
   - E) Use the API or webhooks (Enterprise)
   - F) Set up AI Chat or workflows
   - G) Something else

2. **Which Otter plan are you on?**
   - A) Free
   - B) Pro
   - C) Business
   - D) Enterprise
   - E) Not sure / evaluating

3. **Which meeting platform?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Multiple
   - E) In-person / phone (using app recording)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Otter vs Fathom vs Fireflies vs others | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching/scoring | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Salesloft Conversations config | `/sales-salesloft {user's question}` |

Otherwise, answer directly below.

## Step 3 — Otter.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For transcription quality issues:**
1. Check audio setup first — external mic > laptop mic, quiet room, stable internet
2. Enable speaker identification in settings and train it with voice samples
3. For accents: speak slightly slower, avoid crosstalk, consider supplementing with manual edits
4. Review and correct speaker labels post-meeting to train the model

**For integration questions:**
1. If not on Enterprise: Zapier is the primary integration path — connect to 8,000+ apps
2. If on Enterprise: use native CRM integrations (HubSpot, Salesforce, Dynamics, Zoho) + API + Workspace Webhooks
3. For data warehouse: Enterprise API → S3/Snowflake, or Zapier → Airtable/Google Sheets as lightweight alternative

**For plan evaluation:**
1. Calculate monthly meeting hours to check against minute limits (Free: 300, Pro: 1,200, Business: unlimited)
2. Check if you need features gated to higher tiers (API = Enterprise, concurrent meetings = Business, HIPAA = Enterprise)
3. Compare against alternatives if CRM depth or coaching features matter — Otter is thinnest on both

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API is Enterprise-only and in beta.** Don't plan a production integration on Otter's API unless you've confirmed Enterprise access and talked to your account manager. Zapier is the safer path for Pro/Business.
- **Free tier caps at 300 min/month and 25 conversations.** A team of 5 with 3 meetings/day burns through this in a week. Pro's 1,200 min/month is also tight for active teams.
- **90-min per-meeting cap on Pro.** Long strategy sessions or all-hands will get cut off. Business tier raises this to 4 hours.
- **Only 4 languages supported as of 2026.** If your team works across languages, Otter will miss non-English speakers entirely.
- **Speaker diarization degrades with 3+ speakers.** Two-person calls are fine; larger meetings often produce "Unknown Speaker" segments or misattributions.
- **AI Chat queries are capped per plan.** Free: 20/month, Pro: 50/month, Business: 200/month. Heavy users hit this fast.
- **OtterPilot bot visibility varies by meeting platform.** Some participants see "Otter.ai" join as a participant, which can be awkward in external calls. Desktop app recording is invisible but only works on Mac/Windows.
- **Class action lawsuit (2026).** Otter faces litigation around recording consent practices. Check your org's recording consent policies before deploying OtterPilot to external meetings.

## Related skills

- `/sales-note-taker` — Compare AI note-takers (Fathom vs Fireflies vs Avoma vs Gong vs Otter vs Fellow vs Grain vs Sembly vs Read.ai), architect transcript integration pipelines
- `/sales-fathom` — Fathom platform help (REST API, webhooks, OAuth, SDKs, MCP)
- `/sales-fireflies` — Fireflies.ai platform help (GraphQL API, webhooks, AskFred, MCP)
- `/sales-avoma` — Avoma platform help (REST API, scorecards, Lead Router)
- `/sales-gong` — Gong platform help (Revenue AI OS, Smart Trackers, coaching)
- `/sales-call-review` — Review a specific sales call for coaching
- `/sales-integration` — General CRM/tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: "My transcripts are a mess — speakers keep getting mixed up"
**Skill does**:
1. Asks which plan and meeting platform
2. Checks if speaker identification is enabled and trained
3. Recommends: enable speaker ID, train voices (Settings → Speaker Identification), reduce crosstalk, use external mic, post-meeting corrections to improve future accuracy
4. Notes that 3+ speaker meetings are a known weak spot — consider Fireflies or Fathom if multi-speaker accuracy is critical

### Example 2: "I want to send meeting summaries to Slack and HubSpot automatically"
**Skill does**:
1. Checks plan — if Pro/Business, recommends Zapier path (Otter trigger → Slack action + HubSpot action)
2. If Enterprise, recommends native HubSpot integration + Zapier for Slack (or native Slack integration)
3. Walks through Zapier setup: trigger = "Meeting Recording Finished", actions = post summary to Slack channel + create HubSpot activity
4. Notes that native CRM integrations (HubSpot, Salesforce) push Sales Insights automatically on Enterprise

### Example 3: "Should I upgrade from Pro to Business?"
**Skill does**:
1. Checks current usage — monthly minutes (Pro caps at 1,200), per-meeting length (Pro caps at 90 min), concurrent meeting needs
2. Reviews Business-tier features: unlimited minutes, 4hr/meeting, 3 concurrent, custom AI workflows, admin analytics
3. Compares price jump ($16.99 → $30/mo per user)
4. If the real need is API access, notes that requires Enterprise (not Business)

## Troubleshooting

### Transcription accuracy dropping below 85%
**Symptom**: Transcript is gibberish or missing large chunks
**Cause**: Poor audio quality, heavy accents, background noise, or multiple speakers talking over each other
**Solution**: Use external mic (not laptop mic), ensure stable internet (≥5 Mbps up), reduce background noise, ask participants to mute when not speaking. For accents, slightly slower speech helps. Post-meeting, correct errors — Otter learns from corrections over time.

### OtterPilot not joining meetings
**Symptom**: Bot doesn't appear in the meeting or joins late
**Cause**: Calendar integration disconnected, meeting link format not recognized, or meeting platform blocking bots
**Solution**: Check Settings → Calendar to verify Google/Outlook calendar is connected and auto-join is enabled. Ensure the calendar event has a valid Zoom/Meet/Teams join link (not a phone-only dial-in). Some orgs block external bots — check with meeting host's IT. If persistent, use the desktop app to record locally instead.

### Running out of monthly minutes mid-month
**Symptom**: Otter stops transcribing before month end
**Cause**: Free (300 min) and Pro (1,200 min) have hard caps that don't roll over
**Solution**: Check usage in Settings → Subscription. If consistently hitting limits: skip recording internal/low-value meetings, use the desktop app (which may use in-app minutes differently), or upgrade to Business (unlimited). Minutes reset on billing date, not calendar month.
