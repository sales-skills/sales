---
name: sales-karax
description: "KaraX.ai platform help — agentic AI workspace combining multi-LLM chat (Claude/Gemini), real-time meeting transcription, and AI workflow automation across 800+ integrations from a single OneChat interface, SOC 2 Type II/HIPAA/GDPR, no public API. Use when setting up KaraX for meeting transcription on Zoom or Google Meet or Teams, KaraX OneChat not triggering workflows or automations, choosing between KaraX and Otter or Fathom or Fireflies for meeting notes, KaraX free plan data disappearing after 7 days, KaraX integration with Salesforce or HubSpot not syncing, KaraX meeting recording hitting 30-minute cap on Starter, or KaraX plan selection (Starter free/Pro $14.99/Business $39.99/Enterprise custom). Do NOT use for comparing all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your KaraX setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, workflow-automation, platform]
---

# KaraX.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up KaraX (connecting to Zoom/Meet/Teams, first meeting, integrations)
   - B) Troubleshooting an issue (workflows not triggering, data retention, meeting caps)
   - C) Comparing KaraX to another note-taker or AI workspace (Otter, Fathom, Fireflies)
   - D) Understanding pricing or plan limits
   - E) CRM integration (Salesforce, HubSpot, Notion, ClickUp)
   - F) AI workflow automation setup

2. **How are you using KaraX?**
   - A) Meeting transcription and notes
   - B) AI chat (multi-LLM workspace)
   - C) Workflow automation across tools
   - D) All of the above

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just KaraX) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — KaraX platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, data model, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Sign up at karax.ai — Starter is free (25 AI chats/day, 5 meetings at 30 min max)
2. Install the Chrome extension, desktop app, or mobile app
3. Connect meeting platforms (Zoom, Google Meet, Teams)
4. Connect key integrations (CRM, Notion, Slack, Gmail) — 800+ available on Pro+
5. For CRM auto-updates, upgrade to Business ($39.99/mo) for CRM + workflow builder

**Comparison quick guide:**
- KaraX vs Otter → Otter has deeper transcription accuracy and real-time collaboration; KaraX adds multi-LLM chat and workflow automation beyond meetings
- KaraX vs Fathom → Fathom has a more generous free tier (unlimited recordings) and a public API; KaraX adds AI chat workspace and agentic automation
- KaraX vs Fireflies → Fireflies has GraphQL API, AskFred analytics, and deeper conversation search; KaraX adds multi-LLM chat and 800+ native integrations

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features.*

- **Starter plan has 7-day data retention.** Meeting transcripts and chat history auto-delete after 7 days on the free plan. Export anything important before then.
- **30-minute meeting cap on Starter.** Free plan limits individual meetings to 30 minutes. Pro extends to 8 hours/day, Business to 16 hours/day.
- **Only 4 app integrations on Starter.** The "800+ integrations" claim applies to Pro and above. Starter gets 4 apps only.
- **No public API.** No developer portal, no REST/GraphQL endpoints, no webhooks. All automation goes through the platform's own agentic AI interface.
- **CRM + workflow builder require Business ($39.99/mo).** Salesforce/HubSpot CRM integration and the workflow builder are not available on Pro.
- **25 AI chats/day on Starter.** Daily chat limit resets, but can be restrictive for heavy users.
- **Niche platform with limited community.** Few G2/Capterra reviews, no Stack Overflow presence, no community forum — troubleshooting resources are sparse.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-fathom` — Fathom platform help — free-tier leader with CRM sync and API
- `/sales-fireflies` — Fireflies.ai platform help — GraphQL API, AskFred, conversation search
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up KaraX for meeting transcription
**User says**: "I want to use KaraX to transcribe my Zoom sales calls and auto-create tasks in ClickUp."
**Skill does**:
1. Walks through signing up and connecting Zoom in the OneChat workspace
2. Explains meeting transcription captures live notes with action items
3. Shows how to connect ClickUp as an integration (Pro+ required for 800+ apps)
4. Demonstrates using the agentic AI to auto-convert action items to ClickUp tasks
5. Notes the 30-min meeting cap on Starter — recommend Pro for full sales calls
**Result**: User is set up for Zoom transcription with task automation.

### Example 2: KaraX workflow automating CRM updates
**User says**: "Can KaraX automatically update Salesforce after my meetings?"
**Skill does**:
1. Confirms CRM integration requires the Business plan ($39.99/mo)
2. Explains that KaraX uses agentic AI to extract decisions and action items and push to Salesforce
3. Notes that Pro plan has 800+ integrations but CRM-specific automation needs Business
4. Compares to Fathom (API + webhook CRM sync) and Fireflies (GraphQL + CRM) for developer-oriented alternatives
**Result**: Clear path to CRM integration with plan requirements.

### Example 3: Meeting data disappearing after a week
**User says**: "My KaraX meeting transcripts vanish after a few days. What's happening?"
**Skill does**:
1. Identifies the 7-day data retention limit on the Starter (free) plan
2. Recommends upgrading to Pro ($14.99/mo) or Business ($39.99/mo) for unlimited retention
3. Suggests exporting critical transcripts before the 7-day window closes
4. Notes that Pro is $14.99/mo annual and includes unlimited data retention
**Result**: User understands the retention limit and options to resolve it.

## Troubleshooting

### Meeting transcripts disappearing
**Symptom**: Transcripts and chat history auto-delete after approximately 7 days
**Cause**: Starter (free) plan has a 7-day data retention limit
**Solution**: Upgrade to Pro ($14.99/mo annual) or Business ($39.99/mo) for unlimited retention. As a workaround, export transcripts manually before the 7-day window.

### Workflow automation not triggering
**Symptom**: AI workflow described in OneChat doesn't execute across connected tools
**Cause**: Starter plan limits workflows to 3 tools per workflow. Integration count is also limited to 4 apps on Starter.
**Solution**: Verify you're on Pro (5 tools/workflow, 800+ apps) or Business (8 tools/workflow + workflow builder). Check that the target integration is connected and authorized in settings.

### Meeting recording hitting 30-minute cap
**Symptom**: Meeting transcription stops at 30 minutes
**Cause**: Starter plan caps individual meetings at 30 minutes
**Solution**: Upgrade to Pro (8 hours/day meeting capacity) or Business (16 hours/day). Enterprise offers custom limits.
