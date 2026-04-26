---
name: sales-calendly
description: "Calendly platform help — scheduling links, booking pages, event types, round-robin routing, workflows, routing forms, embeds, and API/webhook integration. Use when setting up Calendly booking pages or event types, Calendly round-robin not distributing meetings evenly, Calendly routing forms not qualifying leads, Calendly webhook not firing on booking events, Calendly API returning unexpected data or hitting rate limits, Calendly timezone showing wrong time to invitees, Calendly embed not loading in your app, or choosing between Calendly Standard vs Teams plan. Do NOT use for general scheduling strategy across tools (use /sales-meeting-scheduler), or calendar-based CRM automation patterns (use /sales-integration)."
argument-hint: "[describe what you need help with in Calendly]"
license: MIT
version: 1.0.0
tags: [sales, scheduling, booking, calendar, platform]
github: "https://github.com/calendly"
---

# Calendly Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Calendly do you need help with?**
   - A) Booking pages & event types — setup, customization, branding
   - B) Round-robin & team scheduling — routing, collective events
   - C) Routing forms — lead qualification before booking
   - D) API & webhooks — building integrations, syncing data
   - E) Workflows — automated reminders, follow-ups, notifications
   - F) Embeds — inline, popup widget, or popup text in your site/app
   - G) Payments — Stripe/PayPal collection on booking
   - H) Integrations — Salesforce, HubSpot, Zapier, etc.
   - I) Choosing Calendly vs Cal.com vs other tools
   - J) Something else

2. **What plan are you on?**
   - A) Free (1 event type, 1 calendar)
   - B) Standard ($10-12/seat/mo)
   - C) Teams ($16-20/seat/mo)
   - D) Enterprise
   - E) Not sure yet / evaluating

**If the user's request already provides most of this context, skip directly to Step 2.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General scheduling strategy → "This is a scheduling strategy question — run: `/sales-meeting-scheduler {user's question}`"
- CRM integration patterns → "This is a tool integration question — run: `/sales-integration {user's question}`"
- No-show recovery or reminder design → "This is a scheduling optimization question — run: `/sales-meeting-scheduler {user's question}`"
- Comparing Calendly vs Cal.com → "For head-to-head comparison — run: `/sales-meeting-scheduler compare Calendly vs Cal.com`"

If the question is Calendly-specific, continue to Step 3.

## Step 3 — Calendly platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

For API or webhook questions, also **read `references/calendly-api-reference.md`** for endpoint details, JSON shapes, and code examples.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Free plan users**: Note the 1-event-type limit — suggest Standard if they need multiple event types or workflows
- **API builders**: Emphasize the read-only booking limitation — Calendly API cannot create bookings, only read them. Use embeds or scheduling links for booking creation.
- **Team admins**: Round-robin and routing forms require Teams plan ($16/seat/mo)
- **Migration**: Cal.com offers a 1-click Calendly import tool if they're evaluating switching

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free plan = 1 event type only.** No group events, no workflows, no custom branding. Standard ($10/mo) unlocks unlimited event types.
- **API cannot create bookings.** The API is read-heavy — you can list events, manage webhooks, check availability, but cannot programmatically book a meeting. Use scheduling links or embeds for booking creation.
- **Webhooks require a paid plan.** Free plan has no webhook access. Standard unlocks `invitee.created` and `invitee.canceled`.
- **Rate limits vary by plan.** 60 req/min on Free/Standard/Teams, 120 req/min on Enterprise. HTTP 429 includes `Retry-After` header.
- **Routing forms require Teams plan.** Lead qualification routing is not available on Standard.
- **Round-robin requires Teams plan.** Equal distribution and availability-optimized routing both need Teams ($16/seat/mo).
- **Salesforce integration requires Teams plan.** HubSpot is available on Standard.
- **No Apple Calendar support.** Only Google Calendar, Outlook/Office 365, and Exchange are supported natively.

## Related skills

- `/sales-meeting-scheduler` — Scheduling strategy across all tools (booking pages, round-robin, no-show reduction, meeting page CRO). Install: `npx skills add sales-skills/sales --skill sales-meeting-scheduler -a claude-code`
- `/sales-calcom` — Cal.com platform help — open-source alternative with self-hosting and more generous free tier. Install: `npx skills add sales-skills/sales --skill sales-calcom -a claude-code`
- `/sales-reclaim` — Reclaim.ai platform help — AI calendar automation. Install: `npx skills add sales-skills/sales --skill sales-reclaim -a claude-code`
- `/sales-integration` — Tool integration patterns (CRM sync, webhooks, API pipelines). Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**Example 1** — "I set up Calendly but prospects in Europe keep seeing the wrong meeting times"
→ Read platform guide timezone section → Check if the user has set their event type timezone to "Automatically detect" or locked it → Explain that Calendly converts times but the event type's timezone setting matters → Note Apple Calendar incompatibility if relevant

**Example 2** — "How do I sync Calendly bookings to my CRM via the API?"
→ Read API reference → Show webhook subscription setup (POST /webhook_subscriptions for invitee.created) → Provide Python listener example that parses invitee data and POSTs to CRM → Note: requires paid plan for webhooks

**Example 3** — "Should I stay on Calendly or switch to Cal.com? I'm a solopreneur."
→ Compare: Cal.com free has unlimited event types + CRM sync; Calendly free has 1 event type. If user needs multiple booking types or API access on free tier, Cal.com wins. If user values simplicity and brand recognition, Calendly Standard at $10/mo is solid. Route to `/sales-meeting-scheduler` for full comparison.

## Troubleshooting

**Timezone mismatch — invitees see wrong times**
- Check event type settings → Availability → ensure timezone is set to "Automatically detect invitee's timezone" (not locked to your zone)
- If using embeds, verify the embed snippet doesn't override timezone with a hardcoded value
- Confirm the connected calendar's timezone matches Calendly account timezone

**Double bookings or calendar conflicts**
- Check connected calendars: Calendly only blocks times from connected calendars. If a calendar isn't connected, those events won't show as busy.
- Verify "Check for conflicts" is enabled for all relevant calendars in Settings → Calendar Connections
- Buffer time between events: set minimum scheduling notice and buffer time in event type settings

**Webhook not firing**
- Confirm you're on a paid plan (webhooks not available on Free)
- Check webhook subscription is active: GET /webhook_subscriptions and verify `state: "active"`
- Verify the webhook URL is HTTPS and publicly accessible — Calendly won't POST to HTTP or localhost
- Check the signing secret: validate `Calendly-Webhook-Signature` header using HMAC-SHA256 with your signing key
