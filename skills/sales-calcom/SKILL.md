---
name: sales-calcom
description: "Cal.com platform help — open-source scheduling infrastructure with REST API v2, webhooks, embeddable atoms, self-hosting, round-robin routing, and booking page workflows. Use when setting up Cal.com booking pages or event types, Cal.com API not returning expected data, Cal.com webhooks not firing on booking events, Cal.com round-robin not distributing meetings evenly, Cal.com self-hosted instance has calendar sync issues, choosing between Cal.com cloud and self-hosted, or Cal.com routing forms not qualifying leads correctly. Do NOT use for general scheduling strategy across tools (use /sales-meeting-scheduler), or calendar-based CRM automation patterns (use /sales-integration)."
argument-hint: "[describe what you need help with in Cal.com]"
license: MIT
version: 1.0.0
tags: [sales, scheduling, booking, calendar, open-source, platform]
github: "https://github.com/calcom"
---

# Cal.com Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Cal.com do you need help with?**
   - A) Booking pages & event types — setup, customization, branding
   - B) Round-robin & team scheduling — routing, collective events, managed events
   - C) Routing forms — lead qualification before booking
   - D) API & webhooks — building integrations, automation
   - E) Self-hosting — Docker setup, calendar sync, Outlook issues
   - F) Workflows — automated reminders, notifications, follow-ups
   - G) Embeddable atoms — embedding Cal.com in your app
   - H) Payments — Stripe/PayPal collection on booking
   - I) Choosing Cal.com vs Calendly vs other tools
   - J) Something else

2. **Are you on cloud or self-hosted?**
   - A) Cal.com cloud (cal.com)
   - B) Self-hosted (Docker/custom)
   - C) Not sure yet / evaluating

3. **What plan are you on?**
   - A) Free
   - B) Teams ($12/user/mo)
   - C) Organizations ($28/user/mo)
   - D) Enterprise
   - E) Self-hosted (no plan)

**If the user's request already provides most of this context, skip directly to Step 2.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General scheduling strategy → "This is a scheduling strategy question — run: `/sales-meeting-scheduler {user's question}`"
- CRM integration patterns → "This is a tool integration question — run: `/sales-integration {user's question}`"
- No-show recovery or reminder design → "This is a scheduling optimization question — run: `/sales-meeting-scheduler {user's question}`"

Otherwise, answer directly from platform knowledge.

## Step 3 — Cal.com platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, API quick-starts, webhook payloads, integration recipes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** for their goal in Cal.com
2. **Configuration recommendations** — specific settings, with navigation paths
3. **Code examples** for API/webhook questions — point to `references/calcom-api-reference.md`
4. **Verification steps** — how to confirm it worked

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Round-robin and routing forms require the Teams plan ($12/user/mo).** Free plan users can't distribute meetings across reps. Check plan before recommending team scheduling features.
- **Self-hosted calendar sync does not auto-detect cancellations immediately.** If a user deletes an event in Google/Outlook, Cal.com may still show the slot as booked until the next sync cycle. This is a common complaint — recommend checking sync interval settings.
- **Removing a user from a team doesn't remove them from round-robin host tables.** After removing someone, manually check the round-robin event type's host list. Otherwise departed reps keep getting booked.
- **Self-hosted Outlook integration requires Azure AD app registration.** Missing this step is the #1 cause of "can't connect Outlook" on self-hosted instances. The cloud version handles this automatically.
- **Webhook payloads differ between booking events and meeting events.** Booking events use `{ triggerEvent, createdAt, payload: {...} }` wrapper. Meeting events (MEETING_STARTED/ENDED) use a flat structure with no nested payload. Don't assume consistent shape.
- **Custom API access requires the Teams plan or higher.** Free plan users get basic API key access for personal use but custom API integrations need Teams+.

## Related skills

- `/sales-meeting-scheduler` — Scheduling strategy across all tools — booking page CRO, no-show recovery, round-robin design, tool selection
- `/sales-integration` — Connect Cal.com to CRM and other tools via webhooks, Zapier, or API
- `/sales-vimcal` — Vimcal platform help (keyboard-first calendar alternative)
- `/sales-reclaim` — Reclaim.ai platform help (AI task scheduling with scheduling links)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up booking pages for a solo founder
**User says**: "I just signed up for Cal.com free plan — how do I set up a booking page for discovery calls?"
**Skill does**:
1. Walks through creating a 30-min discovery call event type
2. Configures availability — working hours, 15-min buffer, 4-hour minimum notice
3. Sets up Cal Video or Zoom integration for auto-generated meeting links
4. Creates email reminder workflow (24hr + 1hr)
5. Connects Google Calendar for conflict checking
**Result**: Fully configured booking page with reminders and calendar sync — ready to share

### Example 2: Webhook integration for CRM sync
**User says**: "How do I listen for new bookings and push them to my CRM via webhook?"
**Skill does**:
1. Points to `references/calcom-api-reference.md` for webhook payload schema
2. Walks through creating a BOOKING_CREATED webhook subscription at `/settings/developer/webhooks`
3. Shows HMAC-SHA256 signature verification code
4. Provides example payload parsing to extract attendee email, meeting time, and event type
5. Shows how to map fields to CRM contact/event creation
**Result**: Working webhook listener that verifies signatures and syncs bookings to CRM

### Example 3: Self-hosted Outlook calendar not connecting
**User says**: "I self-host Cal.com with Docker and can't connect my Outlook calendar"
**Skill does**:
1. Identifies root cause: Azure AD app registration required for self-hosted Outlook
2. Walks through creating an Azure AD app with Calendar.ReadWrite permissions
3. Shows the environment variables needed (MS_GRAPH_CLIENT_ID, MS_GRAPH_CLIENT_SECRET)
4. Verifies the redirect URI matches the Cal.com instance URL
**Result**: Outlook calendar connected with bi-directional sync

## Troubleshooting

### Self-hosted instance stuck at localhost or giving 404
**Symptom**: Booking pages return 404 or the app redirects to localhost:3000 despite setting NEXT_PUBLIC_WEBAPP_URL
**Cause**: Environment variables not applied correctly, or Docker container not rebuilt after changes
**Solution**: Verify `.env` has `NEXT_PUBLIC_WEBAPP_URL=https://your-domain.com`, `NEXTAUTH_URL=https://your-domain.com`, and `CALENDSO_ENCRYPTION_KEY` set. Rebuild the container after any `.env` change. If using reverse proxy (nginx/Caddy), ensure it forwards the Host header.

### Calendar sync not reflecting external changes
**Symptom**: Events deleted or moved in Google/Outlook still show as booked in Cal.com
**Cause**: Cal.com polls calendars on a sync interval — it doesn't get instant push notifications from all providers
**Solution**: Check Settings > Calendars to verify bi-directional sync is enabled. For faster sync, use the API to trigger a manual refresh. On self-hosted, check the `CRON_ENABLE_CALENDAR_SYNC` environment variable is set to true.

### Webhooks not firing for booking events
**Symptom**: Webhook subscription exists but no POST requests arrive at the subscriber URL
**Cause**: Subscriber URL must be HTTPS on cloud Cal.com (HTTP only allowed on self-hosted). Private IPs and localhost are blocked on cloud.
**Solution**: Verify the subscriber URL is publicly accessible HTTPS. Check that the correct trigger events are selected. Use a tool like webhook.site to test. On self-hosted, check that the webhook worker process is running.
