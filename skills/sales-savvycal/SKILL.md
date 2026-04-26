---
name: sales-savvycal
description: "SavvyCal platform help — personalized scheduling with calendar overlay, booking links, meeting polls, team scheduling (collective/round-robin/group), workflows, webhooks, REST API, and embeddable scheduling. Use when setting up SavvyCal booking links or event types, SavvyCal calendar overlay not showing for recipients, SavvyCal webhooks not firing on booking events, SavvyCal round-robin not distributing meetings evenly, SavvyCal embed not rendering on website, choosing between SavvyCal and Calendly or Cal.com, SavvyCal Zapier triggers not working, SavvyCal API returning errors, or SavvyCal paid bookings via Stripe not collecting payment. Do NOT use for general scheduling strategy across tools (use /sales-meeting-scheduler), calendar-based CRM automation patterns (use /sales-integration), or cadence/sequence design (use /sales-cadence)."
argument-hint: "[describe what you need help with in SavvyCal]"
license: MIT
version: 1.0.0
tags: [sales, scheduling, booking, calendar, platform]
github: "https://github.com/svycal"
---

# SavvyCal Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of SavvyCal do you need help with?**
   - A) Scheduling links — setup, customization, branding, calendar overlay
   - B) Team scheduling — collective, round-robin, group modes
   - C) Meeting polls — group availability coordination
   - D) API & webhooks — building integrations, automation
   - E) Embedding — inline, popover, floating widget on your website
   - F) Workflows — reminders, notifications, follow-ups
   - G) Payments — Stripe paid bookings (Premium)
   - H) Integrations — HubSpot, Close, Zapier, Slack, conferencing
   - I) Choosing SavvyCal vs Calendly vs Cal.com
   - J) Something else

2. **What plan are you on?**
   - A) Basic ($12/user/mo)
   - B) Premium ($20/user/mo)
   - C) Not sure yet / evaluating

**If the user's request already provides most of this context, skip directly to Step 2.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General scheduling strategy → "This is a scheduling strategy question — run: `/sales-meeting-scheduler {user's question}`"
- CRM integration patterns → "This is a tool integration question — run: `/sales-integration {user's question}`"
- No-show recovery or reminder design → "This is a scheduling optimization question — run: `/sales-meeting-scheduler {user's question}`"

Otherwise, answer directly from platform knowledge.

## Step 3 — SavvyCal platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, API quick-starts, webhook payloads, embed recipes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** for their goal in SavvyCal
2. **Configuration recommendations** — specific settings, with navigation paths
3. **Code examples** for API/webhook/embed questions — point to `references/savvycal-api-reference.md`
4. **Verification steps** — how to confirm it worked

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

- **No mobile app.** SavvyCal is web-only — no iOS or Android app for managing scheduling on the go. This is the #1 complaint on G2/Capterra. Manage via mobile browser or use calendar app notifications.
- **Custom domains and paid bookings require Premium ($20/mo).** Don't recommend Stripe payment collection or custom scheduling domains to Basic plan users without noting the upgrade.
- **Calendar overlay requires the recipient to connect their calendar.** The signature feature (seeing your own calendar alongside available times) only works if the booker clicks "overlay my calendar" — it's not automatic. Some recipients skip this step.
- **API docs are partially JS-rendered.** Full endpoint response schemas may not load in all fetching tools. Point developers to developers.savvycal.com for interactive docs.
- **Zapier integration has 8 triggers but no actions.** You can trigger Zaps when events are created/cancelled/rescheduled, but you can't create SavvyCal events from Zapier. Use the REST API for programmatic event creation.
- **No free plan anymore.** SavvyCal removed the free tier (previously 1 link). Both plans are paid. Verify current pricing before recommending.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-meeting-scheduler` — Scheduling strategy across all tools — booking page CRO, no-show recovery, round-robin design, tool selection
- `/sales-calcom` — Cal.com platform help (open-source scheduling with full API, webhooks, self-hosting)
- `/sales-calendly` — Calendly platform help (market-leading scheduling)
- `/sales-vimcal` — Vimcal platform help (keyboard-first AI calendar)
- `/sales-reclaim` �� Reclaim.ai platform help (AI task scheduling with scheduling links)
- `/sales-integration` — Connect SavvyCal to CRM and other tools via webhooks, Zapier, or API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Setting up personalized booking links
**User says**: "How do I create a SavvyCal link that shows my preferred times first?"
**Skill does**:
1. Walks through creating a new scheduling link at Settings > Scheduling Links
2. Configures ranked availability — preferred times get highlighted, less-preferred times still bookable
3. Sets up calendar overlay so recipients can compare against their own schedule
4. Configures buffer time, minimum notice, and rolling window
5. Shows how to share via direct link, email signature embed, or Chrome extension
**Result**: Personalized booking link with ranked availability and calendar overlay — ready to share

### Example 2: Webhook integration for CRM sync
**User says**: "I want to get notified when someone books via SavvyCal and push the data to my CRM"
**Skill does**:
1. Points to `references/savvycal-api-reference.md` for webhook payload schema
2. Walks through creating a webhook at Settings > Integrations or via API
3. Shows HMAC-SHA256 signature verification code (x-savvycal-signature header)
4. Lists relevant event types: event.created, event.rescheduled, event.canceled
5. Provides example payload parsing to extract attendee email, meeting time, and link details
**Result**: Working webhook listener that verifies signatures and syncs bookings to CRM

### Example 3: Embedding scheduling on a marketing site
**User says**: "I want to embed my SavvyCal booking page inline on my website"
**Skill does**:
1. Points to embed documentation in `references/platform-guide.md`
2. Shows the 3-line script installation (init + embed.js + SavvyCal('init'))
3. Configures inline mode with `SavvyCal('inline', { link: 'username/meeting', selector: '#booking' })`
4. Adds event listener for `savvycal.scheduled` to track conversions
5. Shows custom domain setup for branded URLs (Premium plan)
**Result**: Inline scheduling widget embedded on website with conversion tracking

## Troubleshooting

### Calendar overlay not showing for recipients
**Symptom**: Recipients see available times but can't overlay their own calendar
**Cause**: The overlay requires the recipient to click "overlay my calendar" and authorize their Google/Outlook/iCloud calendar. It's opt-in, not automatic.
**Solution**: Educate recipients by adding a note to the booking page description: "Click 'overlay my calendar' to see your schedule alongside mine." Consider adding this to email templates that include booking links.

### Webhook not firing for booking events
**Symptom**: Webhook subscription exists but no POST requests arrive
**Cause**: URL must be HTTPS. Non-2xx responses trigger exponential backoff retries.
**Solution**: Verify the subscriber URL is publicly accessible HTTPS. Use webhook.site to test. Check the x-savvycal-signature header is being verified correctly. If retries stopped, recreate the webhook subscription.

### Zapier trigger not firing
**Symptom**: SavvyCal Zapier integration connected but Zaps don't trigger
**Cause**: The Zapier connection may have expired, or the trigger event type doesn't match what happened
**Solution**: Reconnect SavvyCal in Zapier (Settings > Integrations > Zapier). Verify the correct trigger is selected (e.g., "New Event Scheduled" vs "Event Rescheduled"). Test by booking a real event — Zapier test mode may not catch webhook-based triggers.
