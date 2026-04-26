# Meeting Scheduling Platform Guide

## Booking Page Design

A booking page is your prospect's first impression of the meeting experience. Get it right:

| Element | Best practice |
|---|---|
| **Title** | Clear and benefit-oriented — "30-Min Product Demo" not "Meeting with Sales" |
| **Description** | 1-2 sentences on what the prospect will get out of the meeting |
| **Duration options** | Offer 15 min (quick chat) and 30 min (demo) — don't offer 60 min unless necessary |
| **Buffer time** | 10-15 min between meetings to prep and decompress |
| **Branding** | Match your company colors, add logo, use a professional headshot |
| **Questions** | Minimum: name + email. Add 1-2 qualifying questions max (role, company size) |

## Availability Management

| Setting | Recommendation |
|---|---|
| **Working hours** | Set explicit hours — don't let prospects book 7am or 8pm meetings |
| **Meeting limits** | Cap at 5-6 external meetings per day to protect focus time |
| **Buffer time** | 10-15 min before and after each meeting |
| **Minimum notice** | At least 4 hours — avoid same-hour bookings that catch you unprepared |
| **Rolling window** | Show availability 2-3 weeks out (not 1 month — urgency matters) |

## Meeting Types

| Type | Duration | Notes |
|---|---|---|
| **Discovery/qualification** | 15-30 min | Keep short — respect the prospect's time, qualify fit quickly |
| **Product demo** | 30-45 min | 10 min intro, 20-25 min demo, 5-10 min Q&A and next steps |
| **Follow-up** | 15 min | Tight agenda — answer remaining questions, discuss proposal |
| **Strategy/onboarding** | 45-60 min | Post-sale only — don't schedule 60 min meetings pre-sale |

## Round-Robin Routing

For teams with multiple reps, route meetings fairly and effectively:

| Strategy | When to use | How it works |
|---|---|---|
| **Equal distribution** | Small teams, all reps are equal | Each rep gets the same number of meetings |
| **Weighted by quota** | Reps have different capacities | Higher-quota reps get proportionally more meetings |
| **Skill-based** | Different meeting types need different expertise | Route demos to SEs, discovery to SDRs |
| **Territory-based** | Geographic or segment-based teams | Route by company location, size, or industry |
| **Account-owner based** | Existing accounts | Route to the rep who owns the account in CRM |

## Reminder Sequences

Reminders are the single biggest lever for reducing no-shows.

| Timing | Channel | Content |
|---|---|---|
| **24 hours before** | Email | Confirm meeting, share agenda, include reschedule link |
| **1 hour before** | Email + SMS (if available) | Quick reminder with meeting link |
| **5 minutes before** | SMS (optional) | "Starting in 5 min — here's your link" |

## No-Show Handling

When a prospect doesn't show up:

1. **Wait 5 minutes** past the scheduled time
2. **Send a "missed you" email** within 10 minutes — friendly, not passive-aggressive
3. **Include a reschedule link** — make it one click to rebook
4. **Follow up next day** if no response — one more attempt
5. **Add to re-engagement cadence** if still no response — they may have gone cold
6. **Track no-show reason** in CRM for pattern analysis

## Timezone Management

- **Always display times in the booker's timezone** — auto-detect from browser
- **Avoid early morning/late evening slots** — restrict to 8am-6pm in booker's timezone
- **For global teams**: set per-rep working hours so prospects see correct availability
- **Include timezone in confirmation emails** to avoid confusion

## Meeting Page CRO (Conversion Rate Optimization)

Optimize your booking page to maximize the percentage of visitors who actually book:

| Tactic | Impact |
|---|---|
| **Social proof** | Add customer logos, "Trusted by 500+ companies" |
| **Brief agenda** | Show what the prospect will learn — make the meeting feel valuable |
| **Clear CTA** | "Pick a time" not "Schedule a meeting" — action-oriented |
| **Minimal friction** | No login required, no unnecessary form fields |
| **Mobile-friendly** | 30%+ of bookings happen on mobile — test your page on phone |
| **Fast load time** | Embedded scheduling loads faster than redirect links |

## Calendar and CRM Integration

| Integration | Why it matters |
|---|---|
| **Google Calendar / Outlook sync** | Bi-directional sync prevents double-booking |
| **Salesforce / HubSpot** | Auto-create event, update contact record, trigger workflows |
| **Zoom / Google Meet / Teams** | Auto-generate meeting links in calendar invites |
| **Slack** | Notify reps instantly when a meeting is booked |

## Benchmarks

Use these to gauge how your scheduling is performing:

| Metric | Target | Great |
|---|---|---|
| **Booking page conversion** | 20-40% of visitors | 40%+ |
| **Reminder open rate** | 60-80% | 80%+ |
| **No-show rate** | <15% | <10% |
| **Average time to book** | <2 min from link click | <1 min |
| **Reschedule rate** | <20% | <10% |

## Platform-Specific Guidance

### In Yesware

- **Meeting Scheduler**: Built into inbox (Gmail/Outlook) — create event types, share booking links directly from your email
- **Event types**: Free plan allows 2 event types, paid plans allow more
- **Zoom integration**: Auto-generates Zoom meeting links in calendar invites
- **Key advantage**: Lives in your inbox — no separate app to manage, no context switching
- **Limitation**: No round-robin on team plans, no advanced routing. For team scheduling, pair Yesware with Calendly or Chili Piper
- **Best for**: Solo sellers or small teams who want scheduling embedded in their email workflow

### In Calendly

- **Market leader** for scheduling — most widely adopted, prospects are familiar with the UX
- **Event types**: One-on-one, round-robin, collective (group scheduling), and routing forms
- **Round-robin**: Equal distribution or optimized for availability — configure per event type (Teams plan)
- **Routing forms**: Qualify leads before scheduling based on form answers, then route to the right rep or meeting type (Teams plan)
- **Workflows**: Automated reminders, follow-ups, and notifications (email, SMS, Slack) (Standard+)
- **Integrations**: Salesforce (Teams+), HubSpot (Standard+), Zoom, Google Meet, Teams, Slack, Stripe, Zapier
- **API**: REST v2 at api.calendly.com — read events, invitees, availability; webhooks for booking events (paid plans). Cannot create bookings via API.
- **Plans**: Free (1 event type), Standard ($10/mo), Teams ($16/mo), Enterprise ($15K+/yr)
- **Best for**: Most sales teams — strong balance of features, usability, and price
- **Platform skill**: `/sales-calendly` — for Calendly-specific setup, API/webhook integration, and troubleshooting

### In Chili Piper

- **Best for**: High-volume inbound scheduling and form-to-meeting conversion
- **Instant Booker**: Embed scheduling directly in web forms — prospect fills form, immediately sees available times without leaving the page
- **Concierge**: Qualify, route, and book in one flow. Highest conversion rate for inbound because there's zero friction between form submit and booking
- **Round-robin**: Advanced routing — weighted distribution, by territory, by segment, by account ownership in CRM
- **Handoff**: SDR books meetings on behalf of AEs — critical for SDR/AE team structures
- **Plans**: Instant Booker ($15/user/mo), Handoff ($25/user/mo), Concierge ($30/user/mo)
- **Best for**: B2B teams with high inbound volume where speed-to-lead and conversion rate matter most

### In HubSpot Meetings

- **Included free** with HubSpot CRM — no additional cost
- **Event types**: One-on-one, group (multiple hosts), round-robin
- **CRM native**: Auto-creates contact, logs meeting activity, updates timeline — no integration setup needed
- **Round-robin**: Based on HubSpot contact owner or rep availability
- **Limitation**: Less flexible routing than Chili Piper, limited customization of booking page design
- **Best for**: Teams already on HubSpot who want zero-cost scheduling with native CRM integration

### In Cal.com

- **Open source** (AGPL-3.0, 40K+ GitHub stars) — self-host for free or use cloud-hosted version
- **Event types**: One-on-one, round-robin, collective, managed events (admins control team event types)
- **Routing forms**: Qualify prospects with form questions before booking, route to different event types or team members (Teams+ plan)
- **Workflows**: Built-in automated reminders and follow-ups via email/SMS — no Zapier needed for basic reminder sequences
- **API**: Full REST API v2 (Bearer token auth, 120 req/min) — create bookings, manage event types, query available slots programmatically
- **Webhooks**: 15+ trigger events (BOOKING_CREATED, CANCELLED, RESCHEDULED, MEETING_STARTED/ENDED, FORM_SUBMITTED, no-show detection) with HMAC-SHA256 verification and custom payload templates
- **Embeddable atoms**: React UI components for embedding scheduling directly in your app (Platform plan)
- **Integrations**: Google Calendar, Outlook, Zoom, Google Meet, Teams, Salesforce (2-way sync), HubSpot (2-way sync), Stripe/PayPal payments, Zapier, Make, n8n
- **Cal Video**: Built-in video conferencing — no Zoom dependency needed
- **Advantage**: Self-hosted = full data control, no per-seat pricing, fully customizable. Cloud free plan includes unlimited bookings, event types, and CRM sync
- **Plans**: Free (1 user, unlimited bookings), Teams ($12/user/mo — round-robin, routing forms, analytics), Organizations ($28/user/mo — SSO, HIPAA, SOC 2), Enterprise (custom)
- **Gotcha**: Round-robin and routing forms require Teams plan. Self-hosted Outlook integration requires Azure AD app registration. Calendar sync doesn't instantly reflect external cancellations.
- **Best for**: Developers and technical founders who want full API access and data control, teams that need self-hosting for compliance, or anyone who wants Calendly-level features without per-seat pricing at scale
- **Platform skill**: `/sales-calcom`

### In Mixmax
- **One-click meetings**: Embed available time slots directly in emails — recipients click a time to book without leaving the email
- **Shared calendar scheduling**: Create meetings with multiple colleagues using combined availability; built-in double-booking prevention
- **Round-robin**: Distribute meetings across team members; configurable weighting and availability rules
- **Inbound lead routing**: Route inbound leads to book with the right rep automatically — instant handoff from form fill to calendar
- **Meeting types**: Configure different meeting types (discovery, demo, check-in) with different durations, locations, and availability
- **Appointment links**: Shareable scheduling pages; embeddable on websites; API access via `GET /appointmentlinks`
- **Reminders**: Automated meeting reminder emails to reduce no-shows
- **Integrations**: Google Calendar (native), Zoom (auto-generate meeting links), Salesforce (auto-log meetings)
- **API access**: `GET /meetingtypes` to list meeting types, `GET /meetinginvites` to list invitations, `POST /meetings/summaries/search` for meeting summaries
- **Gotcha**: Mixmax scheduling is Gmail/Google Calendar only — no Outlook/Microsoft 365 calendar support. If your team is on Microsoft, use Calendly or Chili Piper instead

### In Qualified (Piper Meetings)

- **Chat-to-meeting**: Piper AI SDR qualifies website visitors in real-time chat and books meetings directly in the conversation flow — no redirect to a separate booking page
- **Calendar integration**: Syncs with Google Calendar and Microsoft Outlook/Office 365 for rep availability
- **Salesforce routing**: Books meetings with the correct rep based on Salesforce account ownership, territory, or round-robin
- **Real-time**: Piper checks rep availability live during the conversation and offers available times immediately
- **24/7 booking**: Piper handles meeting booking when reps are offline — visitors never hit a dead-end
- **Best for**: Enterprise B2B teams on Salesforce who want meetings booked from inbound chat conversations without a separate scheduling tool
- **Limitation**: Salesforce required. No standalone booking page (meetings are booked through Piper conversations). Enterprise pricing ($42K-$100K+/yr).
- **Platform skill**: `/sales-qualified`

### In SavvyCal

- **Personalized scheduling** — recipients overlay their own calendar to find mutual availability (signature differentiator)
- **Ranked availability**: Show your preferred times first, with less-preferred times still bookable
- **Links**: Reusable links, one-time links, and personalized links for specific contacts
- **Team scheduling**: Collective (all must be free), round-robin (distribute), group (many-to-one) — all on Basic plan
- **API**: REST API at api.savvycal.com — scheduling links CRUD, events, time slots. OAuth 2.0 + Personal Access Tokens.
- **Webhooks**: 16 event types (event.created/rescheduled/canceled, checkout events, attendee events, poll responses, workflow triggers) with HMAC-SHA256 verification
- **Embed**: 4 modes — inline, popover, floating widget, hyperlink. JS library with `savvycal.scheduled` event listener for conversion tracking.
- **Integrations**: Google/Outlook/iCloud/Fastmail calendars, Zoom/Meet/Teams/Whereby conferencing, HubSpot/Close CRM, Stripe payments, Zapier (8 triggers, no actions), Slack
- **Plans**: Basic ($12/user/mo — unlimited links, teams, API, webhooks), Premium ($20/user/mo — custom domains, delegated access, paid bookings, no branding). No free plan.
- **Limitation**: No mobile app. No routing forms. Zapier has triggers only (no actions). Calendar overlay requires recipient opt-in.
- **Best for**: Founders, AEs, and senior sellers who schedule with high-value prospects and want the recipient to see a personalized view
- **Platform skill**: `/sales-savvycal`

### In Reclaim.ai

- **AI Scheduling Links**: Smart booking pages that factor in all connected calendars, tasks, habits, and buffer time — availability is dynamically computed, not static
- **Advantage over traditional tools**: Availability auto-adjusts around Reclaim-managed focus time, habits, and task blocks. A 2pm slot may show as available to prospects even if you have a task scheduled there, because Reclaim can reschedule the task
- **Webhook support**: Business plan ($15/seat/mo) and above — receive `SchedulingLink.Meeting.Created`, `Updated`, `Cancelled` events with HMAC-SHA256 verification. Useful for auto-logging bookings to CRM
- **Custom data passthrough**: Append `data-` query params to scheduling link URLs (up to 5, max 512 bytes). These flow through to webhook payloads — useful for tracking UTM source of bookings
- **Limitations**: Only 1 scheduling link on the free plan. Can't use custom hour blocks — only Reclaim's preset schedules (Work, Personal, Meeting Times). No built-in round-robin or routing
- **Plans**: Lite (Free, 1 link), Starter ($10/mo, 3 links), Business ($15/mo, unlimited + webhooks)
- **Best for**: Solopreneurs and small teams who already use Reclaim for task/focus time management and want scheduling links that respect their full AI-managed schedule
- **Platform skill**: `/sales-reclaim`

### In Motion

- **AI-powered booking pages** — Motion creates scheduling links that factor in all auto-scheduled tasks, calendar events, and projects when showing availability
- **Advantage**: Booking availability automatically adjusts as Motion reschedules tasks. Unlike static tools, the availability shown reflects your true capacity, not just calendar gaps
- **Calendar consolidation**: Connects Google Calendar, Outlook, and iCloud — all synced calendars factor into availability for booking pages
- **Meeting Notetaker**: Built-in AI meeting notes with transcription, summaries, and automatic action item → task conversion. No separate note-taking tool needed
- **Integrations**: Zoom, Google Meet for auto-generated meeting links. HubSpot and Salesforce for CRM data.
- **API**: REST API at `api.usemotion.com/v1` — tasks and projects CRUD, but no calendar/booking page API. Auth via `X-API-Key` header. 12 req/min (individual), 120 req/min (team)
- **No webhooks**: Cannot receive event notifications. Must poll API or use Zapier actions
- **Limitation**: No round-robin routing, no routing forms, no team scheduling distribution. Booking pages are individual-only. No free plan — Pro AI starts at $19/seat/mo (annual)
- **Best for**: Solo sellers and small teams who want calendar + task management + meeting notes + scheduling links in one tool, and are willing to give up webhook/trigger capabilities
- **Platform skill**: `/sales-motion`
