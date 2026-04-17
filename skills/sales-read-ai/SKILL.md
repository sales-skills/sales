---
name: sales-read-ai
description: "Read.ai platform help — meeting intelligence with engagement/sentiment analytics, Search Copilot across meetings/email/chat, Ada digital twin, REST API (beta) + MCP Server (`api.read.ai/mcp/`), OAuth auth, webhook automations (`meeting_end` events with HMAC signing), CRM sync to Salesforce/HubSpot, Zapier/n8n workflows, 20+ language transcription. Use when setting up Read.ai webhooks or API integration, connecting Read.ai transcripts to a CRM or data warehouse, configuring Read.ai engagement analytics for a sales team, comparing Read.ai pricing tiers, troubleshooting Read.ai auto-joining meetings without permission, or setting up the Read.ai MCP server with Claude or Cursor. Do NOT use for picking between note-takers (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Read.ai]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-intelligence, platform]
---

# Read.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up Read.ai for my team (onboarding, permissions, calendar sync)
   - B) Integrate Read.ai data into another system (CRM, warehouse, Slack, internal app)
   - C) Configure engagement analytics or Search Copilot
   - D) Troubleshoot an issue (auto-join, permissions, transcript quality, removal)
   - E) Understand pricing or plan differences

2. **Which plan are you on?**
   - A) Free (5 meetings/month)
   - B) Pro ($19.75/mo)
   - C) Enterprise ($29.75/mo)
   - D) Enterprise+ ($39.75/mo)
   - E) Not sure / evaluating

3. **If integrating, what's the target?**
   - A) CRM (Salesforce, HubSpot)
   - B) Project management (Asana, Jira, Linear, Notion, Confluence)
   - C) Data warehouse or internal database
   - D) Slack / Teams notifications
   - E) AI tool via MCP (Claude, Cursor, VS Code)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking between Read.ai vs Fathom vs Fireflies vs other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, Make, iPaaS) | `/sales-integration {user's question}` |
| Meeting scheduling | `/sales-meeting-scheduler {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — Read.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, API, MCP, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Quick decision framework:**
- Need webhook automation? → Pro+ required. Set up via Read dashboard → Integrations → Webhooks
- Need CRM sync (Salesforce/HubSpot)? → Pro+ required (premium integration)
- Need video playback? → Enterprise required ($29.75/mo)
- Need HIPAA/SSO? → Enterprise+ required ($39.75/mo, 10+ seats)
- Need MCP for Claude/Cursor? → Connect to `https://api.read.ai/mcp/`, OAuth auth
- Need Zapier automation? → Pro+ required, triggers: meeting report ready

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Auto-join behavior is aggressive.** Read.ai hooks into your calendar and joins all scheduled meetings by default. External participants see a "Read.ai" bot join without being asked. This has caused university bans and Trustpilot complaints. Configure per-meeting or disable auto-join in settings.
- **Video playback is Enterprise-only.** Pro plan ($19.75/mo) gets unlimited transcripts but no video playback or highlights. That's a 50% price jump to Enterprise ($29.75/mo) for video.
- **Removing Read.ai is difficult.** Deleting your account may not stop it from joining meetings. You may need to revoke OAuth permissions in Google/Microsoft and remove the app from your calendar integrations manually.
- **Sentiment analysis lacks cultural nuance.** The engagement/sentiment scoring can misread cultural communication styles and flag benign language. Don't rely on it for performance decisions.
- **API is in open beta.** Planned GA enhancements include static API keys, more endpoints, and expanded docs. Expect breaking changes.
- **Webhook events are limited.** Only `meeting_end` and `manual` triggers — no real-time or mid-meeting events.
- **Free plan exhausts quickly.** 5 meetings/month with 1-hour max per meeting. Regular users hit the cap in 1-2 weeks.
- **Recordings may become inaccessible after cancellation.** Users report losing access to historical recordings when subscriptions end.

## Related skills

- `/sales-note-taker` — Picking or integrating an AI meeting note-taker (Fathom, Fireflies, Avoma, Gong, Otter, Fellow, Grain, Sembly, Read.ai). Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code -y`
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up MCP with Claude
**User says**: "How do I connect Read.ai to Claude so I can query my meeting transcripts?"
**Skill does**: Walks through MCP server connection at `https://api.read.ai/mcp/`, OAuth authentication, and example prompts like "What did we decide about the timeline in yesterday's meeting?"

### Example 2: Webhook integration to push meeting data to CRM
**User says**: "I want meeting summaries automatically pushed to Salesforce after every call"
**Skill does**: Confirms Pro+ plan required, walks through webhook setup (dashboard → Integrations → Webhooks), payload fields (summary, chapters, action items, transcript), HMAC signature verification, and Salesforce mapping.

### Example 3: Troubleshooting unwanted auto-join
**User says**: "Read.ai keeps joining my meetings and my clients are complaining about a bot appearing"
**Skill does**: Walks through disabling auto-join in Read.ai settings, revoking calendar OAuth permissions if needed, and configuring per-meeting join preferences.

## Troubleshooting

### Read.ai joins meetings without permission
**Symptom**: A "Read.ai" bot appears in meetings you didn't invite it to, or participants report an unexpected bot
**Cause**: Read.ai hooks into your calendar and auto-joins all scheduled meetings by default once linked
**Solution**: Go to Read.ai settings → disable auto-join for all meetings. To fully remove: revoke OAuth access in Google Workspace Admin or Microsoft 365, remove Read.ai from calendar app integrations, and consider domain-level blocking if needed for your org.

### Can't access video playback on Pro plan
**Symptom**: Meeting recordings show transcript only, no video playback option
**Cause**: Video playback and video highlights are gated to Enterprise plan ($29.75/mo) and above
**Solution**: Upgrade to Enterprise, or use the meeting platform's own recording (Zoom/Meet/Teams) alongside Read.ai for video needs.

### Webhook payloads missing transcript or action items
**Symptom**: Webhook fires on `meeting_end` but payload is incomplete
**Cause**: AI processing (summary, action items, key questions) may not be complete when the `meeting_end` event fires
**Solution**: Add a delay or re-fetch via the REST API after receiving the webhook. Use the `session_id` from the payload to poll for the complete report.
