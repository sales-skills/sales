---
name: sales-reclaim
description: "Reclaim.ai platform help — AI calendar automation for task scheduling, focus time protection, habits, smart meetings, scheduling links, buffer time, calendar sync, and workforce analytics. Use when tasks aren't getting scheduled on your calendar, focus time keeps getting overridden by meetings, habits aren't finding open slots, Reclaim scheduling links not showing correct availability, calendar sync between Google and Outlook is delayed, choosing between Reclaim and Motion or Sunsama or Clockwise, buffer time not appearing between meetings, or building automations with the Reclaim API or webhooks. Do NOT use for meeting scheduling strategy across tools (use /sales-meeting-scheduler) or CRM calendar automation (use /sales-integration)."
argument-hint: "[describe what you need help with in Reclaim.ai]"
license: MIT
version: 1.0.0
tags: [sales, calendar, scheduling, productivity, platform]
github: "https://github.com/reclaim-ai"
---
# Reclaim.ai Platform Help

Help the user with Reclaim.ai platform questions — from task scheduling and focus time through habits, smart meetings, scheduling links, API integration, and webhook automation.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Reclaim do you need help with?**
   - A) Tasks — auto-scheduling, prioritization, task integrations
   - B) Focus Time — protecting deep work blocks
   - C) Habits — recurring routines, flex scheduling
   - D) Smart Meetings — finding optimal meeting times
   - E) Scheduling Links — booking pages, availability
   - F) Calendar Sync — multi-calendar, Google + Outlook
   - G) Buffer Time — breaks between meetings
   - H) API / Webhooks — building automations
   - I) Workforce Analytics — team time tracking
   - J) Choosing Reclaim vs alternatives

2. **Which plan are you on?**
   - A) Lite (Free)
   - B) Starter ($10/seat/mo)
   - C) Business ($15/seat/mo)
   - D) Enterprise ($22/seat/mo)
   - E) Not sure / evaluating

3. **What calendar provider(s)?**
   - A) Google Calendar
   - B) Outlook/Exchange
   - C) Both
   - D) Not connected yet

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Meeting scheduling strategy (tool-agnostic) | `/sales-meeting-scheduler {question}` |
| CRM integration or automation | `/sales-integration {question}` |
| Reducing no-shows or booking page conversion | `/sales-meeting-scheduler {question}` |
| Round-robin routing for a sales team | `/sales-meeting-scheduler {question}` |

For Reclaim-specific questions, continue to Step 3.

## Step 3 — Reclaim platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, API surface, data model, integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For **task scheduling**: Check priority settings, scheduling windows, and task source sync
- For **focus time**: Verify weekly hour targets and defense level (flexible vs aggressive)
- For **habits**: Ensure time windows are wide enough for Reclaim to find slots
- For **scheduling links**: Check plan (Lite = 1 link), verify hours configuration
- For **API/webhooks**: Start with the task CRUD endpoints, webhooks need Business+ plan

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Webhooks require Business plan.** Scheduling link webhooks (Created/Updated/Cancelled) are gated to Business ($15/seat/mo) and Enterprise. Free and Starter plans cannot receive webhook notifications.
- **Tasks always land on main calendar.** Reclaim creates task events on your primary calendar — there's no way to put them on a secondary calendar. This means your main calendar view always includes Reclaim-managed events.
- **Bulk deletion is painful.** If Reclaim creates hundreds of task events you don't want, there's no bulk delete. You may need to delete them one-by-one in Google Calendar or use the API.
- **Calendar sync delays.** Multi-calendar sync (especially iCloud → Reclaim) can lag minutes to hours. Google Calendar syncs fastest. If events aren't appearing, wait before troubleshooting.
- **Scheduling links can't use custom hours.** You can only use Reclaim's preset schedules (Personal, Work, Meeting Times) for scheduling link availability — custom hour configurations you create aren't selectable.
- **Critical priority dominates.** Setting too many items to Critical priority causes lower-priority items to never get scheduled. Use Critical sparingly — most items should be High or Normal.
- **No native CRM integration.** HubSpot and Salesforce are listed as "coming soon." For now, use Zapier or Make to bridge Reclaim to your CRM.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-meeting-scheduler` — Meeting scheduling strategy — booking pages, round-robin, no-show reduction, tool comparison
- `/sales-vimcal` — Vimcal platform help — keyboard-first AI calendar (complementary tool)
- `/sales-integration` — Connect sales tools to CRM and other platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Tasks not getting scheduled
**User says**: "I added 20 tasks to Reclaim but only 3 are showing on my calendar. Where are the rest?"
**Skill does**:
1. Reads platform guide for task scheduling behavior
2. Explains that Reclaim schedules tasks based on priority, available time windows, and due dates
3. Checks if too many tasks are set to Critical (which crowds out lower-priority items)
4. Verifies scheduling windows aren't too narrow — if "Work Hours" is 9-5 but all day is meetings, tasks have nowhere to go
5. Recommends reviewing the Planner view to see which tasks are queued vs scheduled
**Result**: User understands why tasks aren't appearing and adjusts priorities and time windows to unblock scheduling

### Example 2: Choosing between Reclaim and Motion
**User says**: "I'm a solo founder with 25+ meetings a week. Should I use Reclaim or Motion?"
**Skill does**:
1. Reads platform guide comparison section
2. Explains core difference: Reclaim adds AI scheduling to your existing calendar; Motion replaces your calendar with an aggressive AI planner
3. Reclaim is better if: you want to keep Google Calendar/Outlook as your primary interface, you need habit scheduling, you want a free tier to start
4. Motion is better if: you want the AI to control your entire day end-to-end, you want project management + calendar in one tool
5. Notes pricing: Reclaim Lite is free, Starter $10/mo; Motion is ~$34/mo with no free tier
**Result**: Clear recommendation based on the founder's workflow preferences and budget

### Example 3: Setting up webhook automation for CRM sync
**User says**: "I want to automatically log booked meetings from Reclaim scheduling links into HubSpot."
**Skill does**:
1. Reads API reference for webhook setup
2. Confirms user needs Business plan ($15/seat/mo) for webhook support
3. Walks through: create webhook endpoint in Team Settings, configure for SchedulingLink.Meeting.Created event
4. Shows payload structure with participant info, start/end times, scheduling_link_id
5. Provides a Pipedream/Zapier pattern: receive webhook → extract contact email → create/update HubSpot contact → log meeting activity
6. Includes HMAC-SHA256 signature verification code for custom implementations
**Result**: Working webhook-to-CRM pipeline that auto-logs every booked Reclaim meeting into HubSpot

## Troubleshooting

### Tasks not appearing on calendar
**Cause**: Too many Critical-priority tasks competing for limited time, scheduling windows too narrow, or tasks have no due date (low urgency items get deferred indefinitely)
**Solution**: Review task priorities — only 1-2 tasks should be Critical at any time, most should be High or Normal. Widen scheduling windows (e.g., allow evening slots for low-priority tasks). Add due dates to give Reclaim urgency signals. Check the Planner view to see the scheduling queue — if tasks show "No time available," you're overcommitted.

### Calendar sync delays between Google and Outlook
**Cause**: Cross-provider sync goes through Reclaim's servers, not direct calendar-to-calendar. iCloud has the longest delay (minutes to hours). OAuth tokens can also expire silently.
**Solution**: Google Calendar syncs fastest — use it as primary if possible. For Outlook, verify the connection in Settings → Calendars → check for error badges. Disconnect and reconnect if sync is stale. For iCloud, expect delays and don't rely on real-time accuracy.

### Scheduling links showing wrong availability
**Cause**: Custom hours not selectable for scheduling links (only preset schedules work), or multiple calendars not all connected so Reclaim doesn't see conflicts
**Solution**: Verify all calendars are connected in Settings → Calendars. Use one of Reclaim's built-in schedules (Work, Personal, Meeting Times) for scheduling link hours — custom hour blocks you create won't appear as options. If availability still looks wrong, check that Buffer Time is configured (buffer events block scheduling link slots).
