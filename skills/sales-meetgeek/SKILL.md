---
name: sales-meetgeek
description: "MeetGeek platform help — AI meeting assistant with bot and no-bot recording, customizable AI summary templates, conversation analytics (100+ KPIs), voice agents, REST API with regional endpoints (EU/US), webhooks, MCP Server, 7 native CRM connectors. Use when setting up MeetGeek recording for Zoom/Meet/Teams, customizing summary templates by meeting type, connecting MeetGeek to HubSpot or Salesforce, building automations with MeetGeek API or webhooks, MeetGeek bot not joining or arriving late, configuring no-bot Chrome/desktop recording, setting up MeetGeek MCP server for Claude or Cursor, or debugging MeetGeek transcription accuracy. Do NOT use for choosing between note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in MeetGeek]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-intelligence, platform]
---

# MeetGeek Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your goal?**
   - A) Set up recording and transcription (bot, no-bot, or mobile)
   - B) Configure AI summaries and meeting templates
   - C) Integrate MeetGeek with CRM, project management, or other tools
   - D) Build automations with the API, webhooks, or MCP
   - E) Fix a specific issue (bot not joining, accuracy, Teams security)
   - F) Understand pricing and plan-gated features

2. **Which plan are you on?**
   - A) Basic (free — 3 hrs/mo)
   - B) Pro ($9.99/mo — 20 hrs/mo)
   - C) Business ($17/mo — unlimited)
   - D) Enterprise (custom)

3. **Which video platform?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Webex / Discord / other

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between MeetGeek and other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — MeetGeek platform reference

**Read `references/platform-guide.md`** for the full platform reference — recording modes, pricing tiers, CRM integrations, API endpoints, automation workflows, analytics.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Recording setup priority:**
1. Decide recording mode — bot (automatic, visible in meeting) vs no-bot (Chrome extension or desktop app, invisible) vs mobile (in-person)
2. Configure calendar integration (Google/Outlook) for auto-join
3. Set meeting filters — which meetings to record, which to skip
4. Customize AI summary templates for different meeting types (sales, onboarding, standup)
5. Connect downstream tools — CRM, Slack, Notion, etc.

**Integration priority:**
1. Native CRM connector (HubSpot, Salesforce, Pipedrive, etc.) if on Pro+
2. Zapier/Make/n8n for multi-step automations (Pro+)
3. REST API + webhooks for custom pipelines (all plans)
4. MCP Server for Claude/Cursor AI workflows (all plans)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free plan caps at 3 hours/month.** Many competitors (Fathom, tl;dv) offer unlimited free recordings. Budget for Pro ($9.99/user) if the team has more than ~6 meetings/month.
- **Zapier/Make/n8n require Pro plan or above.** Free plan has API/MCP access but no automation platform connectors.
- **Bot needs host admission on Google Meet.** If the host hasn't joined yet, the bot waits outside — nobody sees the "admit" prompt. Inform meeting hosts in advance.
- **MS Teams may block the bot.** MeetGeek's bot joins as an unauthenticated guest. Teams admin settings that restrict guest access will block it. Requires loosening Guest Access in Teams admin center.
- **Bot can arrive 1-2 minutes late.** Joins after detecting participants — initial context may be missed. Use no-bot recording (Chrome/desktop) when the first minute matters.
- **Transcription accuracy degrades in non-English.** Claims 100+ languages, but G2 reviews consistently report quality drops outside English. Verify with a test meeting before committing for multilingual teams.
- **API keys are region-specific.** EU and US endpoints use separate keys. If your data is on the US region (`api-us.meetgeek.ai`), an EU-region key won't work.
- **Video recording is Business+ only.** Free and Pro plans record audio only. If you need video playback, upgrade to Business ($17/user).

## Related skills

- `/sales-note-taker` — Picking or comparing AI note-takers (MeetGeek vs Fathom vs Fireflies vs Gong vs others), backend API integration patterns, webhook vs polling, CRM sync pipelines
- `/sales-call-review` — Reviewing a specific call for coaching
- `/sales-coaching` — Building coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up MeetGeek for a sales team on HubSpot
**User says**: "I want MeetGeek to automatically record our Zoom sales calls and push transcripts to HubSpot deals."
**Skill does**:
1. Confirms plan (Pro+ needed for Zapier, native HubSpot available on Pro+)
2. Walks through calendar integration setup for auto-join
3. Configures native HubSpot connector — maps meetings to deals
4. Sets up a sales-specific summary template for deal-relevant notes
5. Shows how to filter which meetings get recorded (skip internals)
**Result**: Automated pipeline from Zoom call → transcript + summary → HubSpot deal activity.

### Example 2: Building a custom transcript pipeline with the API
**User says**: "I need to pull all meeting transcripts via API and store them in our data warehouse."
**Skill does**:
1. Reads the API reference — Bearer token auth, regional endpoints
2. Recommends webhook-first approach (subscribe to meeting completion events)
3. Walks through `GET /v1/meetings` → `GET /v1/meetings/{id}/transcript` flow
4. Flags region-specific API keys — ensure the key matches the data region
5. Notes: paginate with cursor, handle rate limits
**Result**: Architecture for webhook-triggered transcript ingestion with proper auth and pagination.

### Example 3: MeetGeek bot not joining Google Meet
**User says**: "MeetGeek isn't showing up in my Google Meet calls even though I set up auto-join."
**Skill does**:
1. Checks calendar integration — is the Google Calendar connected?
2. Checks meeting filter settings — is auto-join enabled for this meeting type?
3. Explains host admission requirement — bot waits outside until host admits
4. Suggests no-bot Chrome extension as fallback for when admission is unreliable
5. Recommends testing with a dummy meeting first
**Result**: Diagnosed the admission issue and provided a workaround.

## Troubleshooting

### Bot not joining meetings automatically
**Symptom**: MeetGeek is configured for auto-join but doesn't appear in the meeting
**Cause**: Calendar integration disconnected, meeting filters excluding the call, or host admission pending (Google Meet)
**Solution**: Check Integrations → Calendar status. Verify meeting filter rules. For Google Meet, the host must admit the bot — if no host is present yet, the bot waits. Inform hosts to expect the bot. Try a test meeting to isolate the issue.

### AI summary missing key details or context
**Symptom**: Summary doesn't capture important decisions or action items from the meeting
**Cause**: Default summary template doesn't match the meeting type, or the bot joined late and missed context
**Solution**: Create a custom summary template for the specific meeting type (sales call, standup, 1:1). Use the "Topics timeline" view to check what was actually captured. If the bot joined late, consider using no-bot recording for critical meetings.

### MS Teams blocking the MeetGeek bot
**Symptom**: Bot can't join Microsoft Teams meetings, gets rejected or never appears
**Cause**: Teams admin has restricted Guest Access for external participants
**Solution**: Teams admin must enable Guest Access in Teams admin center → Org-wide settings → Guest access → Allow guest access. The MeetGeek bot joins as an unauthenticated guest — any policy blocking external guests will block it. Some orgs require adding MeetGeek's domain to an allowlist.
