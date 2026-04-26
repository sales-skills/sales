---
name: sales-vimcal
description: "Vimcal platform help — keyboard-first AI calendar for busy professionals, availability sharing, booking links, time zone management, Google Calendar and Outlook unification, Focus Mode, Vimcal EA for executive assistants. Use when Vimcal keyboard shortcuts aren't working, natural language event creation is inconsistent, availability sharing isn't generating correctly, booking links need customization, time zone display is wrong, calendar sync between Google and Outlook is broken, or choosing between Vimcal and Calendly/Reclaim/Motion. Do NOT use for meeting scheduling strategy across tools (use /sales-meeting-scheduler) or CRM calendar automation (use /sales-integration)."
argument-hint: "[describe what you need help with in Vimcal]"
license: MIT
version: 1.0.0
tags: [sales, calendar, scheduling, platform]
github: "https://github.com/Vimcal"
---
# Vimcal Platform Help

Help the user with Vimcal platform questions — from keyboard shortcuts and availability sharing through booking links, time zone management, calendar sync, and Focus Mode.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Vimcal do you need help with?**
   - A) Keyboard shortcuts — learning or customizing shortcuts
   - B) Availability sharing — drag-to-share, copy-paste times
   - C) Booking links — creating, customizing, embedding
   - D) Calendar sync — Google Calendar, Outlook, merging accounts
   - E) Time zones — overlap visualization, display issues
   - F) Focus Mode — Pomodoro, ambient sounds, backdrop
   - G) Vimcal EA — executive assistant features, multi-exec scheduling
   - H) AI features — natural language event creation, AI summaries
   - I) Choosing Vimcal vs alternatives

2. **Which plan are you on?**
   - A) Free (iOS only)
   - B) Paid ($20/mo)
   - C) Vimcal EA ($75/mo)
   - D) Enterprise
   - E) Not sure / evaluating

3. **What calendar provider(s) do you use?**
   - A) Google Calendar only
   - B) Outlook/Exchange only
   - C) Both Google + Outlook
   - D) Not connected yet

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Meeting scheduling strategy (tool-agnostic) | `/sales-meeting-scheduler {question}` |
| CRM integration or automation | `/sales-integration {question}` |
| Reducing no-shows or booking page conversion | `/sales-meeting-scheduler {question}` |
| Round-robin routing for a team | `/sales-meeting-scheduler {question}` |

For Vimcal-specific questions, continue to Step 3.

## Step 3 — Vimcal platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, keyboard shortcuts, availability sharing, and comparison with alternatives.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For **keyboard shortcut mastery**: Start with the 5 most-used shortcuts, practice for a week, then layer in more
- For **availability sharing**: Use drag-to-share for ad-hoc scheduling, booking links for recurring meeting types
- For **calendar unification**: Connect both Google and Outlook, use color-coding to distinguish work vs personal
- For **Focus Mode**: Pair with meeting-free blocks in your calendar for deep work
- For **Vimcal EA**: Set up exec preferences first, then configure calendar holds and handoff workflows

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API or webhooks.** Vimcal has no documented API, no webhooks, no Zapier/Make integration. You cannot programmatically create events, read calendars, or build automations through Vimcal — use the underlying Google Calendar or Outlook API instead.
- **No CRM integration.** Vimcal doesn't sync with Salesforce, HubSpot, or any CRM. Meeting data stays in your calendar provider. If you need meeting-to-CRM logging, use your CRM's native calendar sync or a tool like Cirrus Insight.
- **No Android app.** iOS only for mobile. Android users are limited to the desktop app or web.
- **Natural language is finicky.** "Meeting Alex for coffee" fails but "meeting with Alex for coffee" works. Small phrasing changes break the NLP parser — be explicit with prepositions and structure.
- **Free tier is iOS-only.** Desktop app, booking links, polls, and team features all require the $20/mo paid plan. The free tier is essentially a mobile calendar viewer.
- **No task management.** Vimcal is a calendar, not a planner. No time blocking for tasks, no AI task scheduling, no to-do integration. If you need task + calendar, look at Motion, Reclaim.ai, or Sunsama instead.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-meeting-scheduler` — Meeting scheduling strategy — booking pages, round-robin, no-show reduction, tool comparison
- `/sales-integration` — Connect sales tools to CRM and other platforms
- `/sales-lindy` — Lindy AI agent builder with calendar management capabilities
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up availability sharing for outbound sales
**User says**: "I'm an SDR and I want to quickly share my availability when prospects reply to my cold emails."
**Skill does**:
1. Recommends Vimcal's drag-to-share availability feature over traditional booking links for warm replies
2. Shows how to drag across preferred time slots in the calendar view
3. Explains the copy-paste workflow — drag times, Vimcal generates formatted text, paste into email reply
4. Configures time zone auto-detection so prospects see times in their local zone
5. Sets up a fallback booking link for prospects who prefer self-scheduling
**Result**: SDR can share availability in 5 seconds per reply — drag, copy, paste — without forcing prospects through a booking page

### Example 2: Unifying Google and Outlook calendars
**User says**: "I have a Google Calendar for my startup and an Outlook calendar from a consulting client. How do I see both in one view?"
**Skill does**:
1. Walks through connecting both accounts in Vimcal settings
2. Configures color-coding — one color per calendar source for visual distinction
3. Sets up conflict detection so events from both calendars block availability
4. Shows how auto-merge handles duplicate events that appear on both calendars
5. Verifies availability sharing includes both calendars so booking links never double-book
**Result**: Unified calendar view with both sources, conflict-free availability, and visual distinction between calendars

### Example 3: Choosing between Vimcal and Reclaim.ai
**User says**: "I'm a founder with 30+ meetings a week. Should I use Vimcal or Reclaim.ai?"
**Skill does**:
1. Reads the platform guide comparison section
2. Clarifies the core difference: Vimcal replaces your calendar UI (faster, keyboard-driven), Reclaim.ai adds AI scheduling on top of existing calendar
3. Recommends Vimcal if the founder's pain is calendar navigation speed and availability sharing
4. Recommends Reclaim.ai if the founder's pain is finding time for tasks and protecting focus blocks
5. Notes both can be used together — Reclaim manages the schedule, Vimcal is the interface
**Result**: Clear recommendation based on the founder's primary pain point, with option to use both

## Troubleshooting

### Natural language event creation not working
**Cause**: Vimcal's NLP parser is strict about phrasing — missing prepositions or unusual word order causes failures
**Solution**: Use structured phrasing: "Meeting with [person] about [topic] on [date] at [time]". Always include "with" before names and "on/at" before dates/times. If NLP keeps failing, use keyboard shortcut `C` to create an event manually — it's nearly as fast with Vimcal's shortcuts.

### Calendar sync not showing all events
**Cause**: Only one calendar provider connected, or specific sub-calendars not selected for sync
**Solution**: Go to Vimcal settings → Accounts → verify both Google and Outlook are connected. Then check the calendar list in the left sidebar — each account can have multiple sub-calendars (work, personal, holidays), and each must be individually toggled on. If events still don't appear, disconnect and reconnect the account — OAuth tokens occasionally expire.

### Booking link times showing wrong timezone
**Cause**: Timezone auto-detection disabled or browser location permissions blocked
**Solution**: Check Vimcal settings → Time Zones → ensure "Auto-detect booker's timezone" is enabled. Verify your own timezone is set correctly (Vimcal displays your availability in your timezone, then converts for the booker). If using the booking link in an iframe, ensure the parent page allows geolocation permissions.
