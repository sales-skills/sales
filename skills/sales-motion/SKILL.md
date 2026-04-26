---
name: sales-motion
description: "Motion platform help — AI-powered calendar, task auto-scheduling, project management, meeting notes, and docs in one workspace. Use when tasks keep getting shuffled and you can't pin them to a time, AI calendar is double-booking across personal and work calendars, you want to auto-create Motion tasks from email or Slack via API or Zapier, the mobile app feels laggy or missing features compared to desktop, AI credit consumption is increasing your bill unexpectedly, Zapier integration is one-way and you need event triggers, or you're evaluating Motion vs Reclaim vs Sunsama for AI scheduling. Do NOT use for general scheduling strategy across tools (use /sales-meeting-scheduler) or choosing a dedicated AI note-taker (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Motion]"
license: MIT
version: 1.0.0
tags: [sales, calendar, scheduling, project-management, platform]
---

# Motion Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your Motion challenge?**
   - A) Setting up Motion for the first time (calendar, tasks, projects)
   - B) Controlling how Motion auto-schedules my tasks
   - C) Integrating Motion with other tools (API, Zapier, CRM)
   - D) Managing AI credits and billing
   - E) Mobile app issues
   - F) Evaluating Motion vs alternatives
   - G) Something else

2. **What's your setup?**
   - A) Solo user (individual plan)
   - B) Small team (2-14 seats)
   - C) Larger team (15+ seats)

3. **Which Motion modules do you use?**
   - A) Calendar + Tasks only
   - B) Calendar + Tasks + Projects
   - C) Full suite (including Meeting Notes, Docs, Workflows)

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Scheduling strategy across multiple tools | `/sales-meeting-scheduler [question]` |
| Choosing a dedicated AI note-taker | `/sales-note-taker [question]` |
| CRM integration patterns | `/sales-integration [question]` |
| Everything else | Answer directly using Step 3 |

When routing, provide the exact command.

## Step 3 — Motion platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For task scheduling control: explain do-dates vs due-dates, deadline types, and the "not auto-scheduled" escape hatch
- For integrations: check API rate limits (12 req/min individual, 120 team) and recommend Zapier for simple flows, API for custom pipelines
- For billing: estimate AI credit usage based on their workflow and recommend the right plan tier

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Task shuffling is by design.** Motion's optimizer continuously reschedules tasks to fit deadlines. If you need a task at a specific time, set it as "not auto-scheduled" or use a calendar event instead. This is the #1 user complaint.
- **No webhook support.** The API is one-directional — you can create/read/update/delete but can't receive event notifications. Use Zapier polling or build a cron-based sync instead.
- **Zapier has no triggers.** Only actions (Create Task, Create Project, Update Task, Find Task). You cannot trigger external workflows from Motion events natively.
- **AI credits increase bills.** Pro gets 7,500 credits/mo, Business gets 15,000. Heavy AI Chat, Docs, and meeting notes usage can push bills up 20-40%. Monitor usage in Settings.
- **Mobile app lags behind desktop.** Missing features like task snoozing, full notification options, and some views. Use desktop for setup and configuration.
- **Rate limits are low for individuals.** 12 requests/min on individual plans vs 120 on team plans. Batch operations need throttling and retry logic.
- **Setup takes 2-4 weeks.** Full value requires calibrating task durations, priorities, and schedules. Start with just Calendar + Tasks before adding Projects and Docs.

## Related skills

- `/sales-meeting-scheduler` — Cross-platform scheduling strategy (booking pages, no-shows, round-robin)
- `/sales-note-taker` — AI meeting note-taker comparison and API integration
- `/sales-reclaim` — Reclaim.ai platform help (main competitor — AI task scheduling with free tier)
- `/sales-vimcal` — Vimcal platform help (keyboard-first calendar)
- `/sales-integration` — Connect Motion to CRM and other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Solo founder setting up Motion for the first time
**User says**: "I just signed up for Motion. How should I set it up as a solo founder?"
**Skill does**:
1. Recommends starting with Pro AI plan ($19/mo annual) and Calendar + Tasks only
2. Walks through connecting Google Calendar and setting working hours
3. Explains the do-date vs due-date concept for task scheduling
4. Sets up a simple task workflow: email → task creation, with duration estimates
5. Configures Zoom integration for auto-generated meeting links
6. Advises waiting 1-2 weeks before adding Projects module
**Result**: Clean first-week setup focused on calendar + task scheduling — avoids overwhelm

### Example 2: Syncing Motion tasks to a CRM via the API
**User says**: "How do I automatically sync completed Motion tasks to HubSpot?"
**Skill does**:
1. Reads platform-guide.md for API details
2. Explains that Motion has no webhooks — must use polling approach
3. Provides a Python script that polls `GET /v1/tasks` every 5 minutes with cursor pagination, filters for completed tasks, and creates HubSpot activities via HubSpot API
4. Notes the 12 req/min rate limit for individual plans and recommends upgrading to team for 120 req/min if polling frequently
5. Suggests Zapier as a simpler alternative if the workflow is straightforward
**Result**: Working polling-based sync pipeline with rate limit handling

### Example 3: Evaluating Motion vs Reclaim for a small team
**User says**: "Should my 5-person team use Motion or Reclaim?"
**Skill does**:
1. Compares core approaches: Motion auto-schedules aggressively (tasks placed on calendar automatically), Reclaim defends existing schedule (focus time, habits, buffer)
2. Notes pricing: Motion $19-29/seat/mo (annual), Reclaim free tier available then $8-15/seat/mo
3. Highlights Motion's project management advantage (Gantt, dashboards, capacity planning on Business plan)
4. Highlights Reclaim's advantage for calendar defense and free tier
5. Recommends Motion if team needs project management + scheduling in one tool, Reclaim if team already has a PM tool and wants calendar optimization
**Result**: Clear decision framework based on team's existing tooling and primary need

## Troubleshooting

### Tasks show "Could not fit" at the top of calendar
**Cause**: Task can't be scheduled within the auto-scheduling window due to conflicting events, too many high-priority tasks, or unrealistic duration estimates
**Solution**: Check task duration estimates — are they realistic? Reduce priority on lower-importance tasks. Extend deadlines where possible. If a task truly can't fit, Motion is telling you your schedule is overcommitted. Consider delegating or removing tasks. Check that working hours are correctly configured.

### Double-booking across personal and work calendars
**Cause**: Personal calendar not connected, or calendar sync is one-directional
**Solution**: Connect all calendars (Google, Outlook, iCloud) in Motion Settings → Calendars. Verify bi-directional sync is active for each. Personal calendar events should show as "busy" blocks that Motion schedules around. If using multiple Google accounts, connect each one separately.

### Zapier tasks created without correct scheduling
**Cause**: Zapier's Motion connector is in beta and doesn't expose all API fields
**Solution**: Set `autoScheduled` to true and provide `dueDate`, `duration`, and `schedule` fields. If Zapier doesn't expose these, switch to the API directly — create tasks via `POST /v1/tasks` with full control over scheduling parameters. Use Zapier only for simple task creation where auto-scheduling defaults are acceptable.
