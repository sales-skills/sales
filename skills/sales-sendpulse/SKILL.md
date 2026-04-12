---
name: sales-sendpulse
description: "SendPulse platform help — email marketing, Automation 360, chatbots (WhatsApp/Instagram/Telegram/Facebook/Viber/TikTok), CRM, online course builder (EDU), website/landing page builder, web push notifications, SMS campaigns, Viber campaigns, SMTP/transactional email, pop-ups, email verifier, API. Use when asking 'how do I do X in SendPulse', setting up SendPulse email campaigns, configuring SendPulse automations, building SendPulse chatbots, managing SendPulse CRM deals, creating SendPulse courses, building SendPulse landing pages, SendPulse web push, SendPulse SMS, SendPulse pop-ups, or troubleshooting SendPulse. Do NOT use for general email marketing strategy (use /sales-email-marketing), general chatbot strategy (use /sales-chatbot), general SMS strategy (use /sales-sms-marketing), general push notification strategy (use /sales-push-notification), general funnel strategy (use /sales-funnel), or general course/membership strategy (use /sales-membership)."
argument-hint: "[describe what you need help with in SendPulse]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, marketing-automation, chatbot, platform]
---
# SendPulse Platform Help

Help the user with SendPulse platform questions — email marketing, Automation 360 (multichannel workflows), chatbot builder (WhatsApp, Instagram, Telegram, Facebook, Viber, TikTok), CRM (pipeline, deals, contacts), online course builder (EDU), website/landing page builder, web push notifications, SMS campaigns, Viber campaigns, SMTP/transactional email, pop-ups/forms, email verifier, and API integration.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which SendPulse feature are you working with?**
   - A) Email marketing — campaigns, templates, A/B testing
   - B) Automation 360 — multichannel workflows
   - C) Chatbots — WhatsApp, Instagram, Telegram, Facebook, Viber, TikTok
   - D) CRM — deals, pipeline, contacts
   - E) Online courses (EDU) — course creation, lessons, students
   - F) Website / landing page builder
   - G) Web push notifications
   - H) SMS campaigns
   - I) Pop-ups and subscription forms
   - J) SMTP / transactional email
   - K) API integration
   - L) Not sure / multiple areas

2. **What's your role?**
   - A) Marketing manager or email marketer
   - B) Business owner or solopreneur
   - C) Course creator or educator
   - D) Developer integrating SendPulse
   - E) Agency managing multiple clients
   - F) Sales rep using CRM

3. **What are you trying to accomplish?**
   - A) Set up and send email campaigns
   - B) Build automated workflows (Automation 360)
   - C) Create chatbot flows for a messaging platform
   - D) Manage sales pipeline and deals
   - E) Create and sell an online course
   - F) Build a landing page or website
   - G) Set up web push or SMS campaigns
   - H) Integrate SendPulse with other tools via API
   - I) Improve deliverability or verify emails
   - J) Something else — describe it

## Step 2 — Route or answer directly

If the question is about **strategy** rather than SendPulse-specific configuration, hand off to the appropriate skill:

- Email marketing strategy → `/sales-email-marketing`
- Chatbot strategy across platforms → `/sales-chatbot`
- SMS marketing strategy → `/sales-sms-marketing`
- Push notification strategy → `/sales-push-notification`
- Funnel/landing page strategy → `/sales-funnel`
- Course/membership strategy → `/sales-membership`
- Audience growth strategy → `/sales-audience-growth`
- Transactional email strategy → `/sales-transactional-email`
- Email deliverability → `/sales-deliverability`
- Tool integrations → `/sales-integration`

If the question is SendPulse-specific, answer directly using the reference below.

## Step 3 — SendPulse platform reference

### Email Marketing

SendPulse's core feature — opt-in email campaigns.

#### Campaign creation
- **Drag-and-drop editor** — visual builder with blocks for text, images, buttons, social links, video, countdown timers
- **130+ templates** — pre-designed responsive templates by industry and use case
- **AMP emails** — interactive email content (carousels, accordions, forms inside emails)
- **Personalization** — merge tags for name, location, DOB, custom fields
- **Segmentation** — filter by gender, location, interests, activity, custom fields; static and dynamic segments
- **A/B testing** — test subject lines, sender names, content; auto-send winner
- **Resend to unopened** — automatically resend to non-openers with different subject line
- **Subscriber rating** — internal engagement scoring (1-5 stars) based on opens/clicks

#### List management
- **Mailing lists** — create multiple lists, import contacts (CSV, copy-paste, API)
- **Subscription forms** — embedded, pop-up, floating forms with customizable fields
- **Double opt-in** — configurable confirmation emails
- **Unsubscribe management** — one-click unsubscribe, reason collection
- **Blacklist** — global suppression list across all lists

#### Analytics
- **Campaign stats** — opens, clicks, bounces, unsubscribes, spam complaints, geo/device data
- **Click maps** — visual heatmap of link clicks within an email
- **Google Analytics integration** — UTM parameter auto-tagging

### Automation 360

Multichannel automation engine — the differentiator that ties all SendPulse channels together.

- **Visual flow builder** — drag-and-drop workflow editor with branching logic
- **Multichannel steps** — single flow can send email + SMS + web push + chatbot message + Viber
- **Triggers** — contact added, event fired, date/anniversary, webhook, form submission, purchase
- **Conditions** — if/else branching on contact fields, engagement, segment membership, time
- **Filters** — segment contacts within a flow by any field or behavior
- **Goals** — track conversion events within a flow (e.g., purchase, page visit)
- **Wait steps** — delay by time, until condition met, or until specific date
- **CRM actions** — create/update deals, move pipeline stages, assign team members from within flows
- **Ready-made templates** — pre-built flows: welcome series, abandoned cart, re-engagement, birthday
- **Flow statistics** — per-element analytics: sends, opens, clicks, conversions for each step

### Chatbot Builder

Create automated chatbot flows across 7 messaging platforms.

#### Supported platforms
- **WhatsApp** — via WhatsApp Business API (24-hour messaging window, template messages outside window)
- **Instagram** — DM automation, story replies, comment triggers
- **Facebook Messenger** — automated flows, persistent menu, quick replies
- **Telegram** — bot builder with buttons, commands, inline keyboards
- **Viber** — chatbot flows with rich messages
- **TikTok** — DM automation (newer feature)
- **Live Chat** — website chat widget with automated + live agent flows

#### Features
- **Visual flow builder** — same drag-and-drop builder as email automations
- **Triggers** — keywords, buttons, subscriptions, external events via API
- **Variables** — collect and store user data within chat flows
- **ChatGPT integration** — AI-powered responses within chatbot flows
- **Bulk messaging** — send to all subscribers or segments
- **Live chat handoff** — transfer from bot to human agent
- **Subscription widgets** — embed chatbot signup on websites
- **Tags and segmentation** — organize chatbot subscribers by behavior/interest

### CRM

Built-in sales CRM — not a standalone CRM product, but integrated with all SendPulse channels.

- **Pipeline management** — customizable stages (e.g., New → Qualified → Proposal → Won/Lost)
- **Deal cards** — amount, stage, expected close date, assigned rep, custom fields
- **Contact cards** — unified view of all interactions across email, chat, SMS, push
- **Auto-deal creation** — trigger deal creation from automation flows, chatbot actions, or form submissions
- **Task management** — assign tasks to team members with due dates
- **Filters and views** — filter deals by stage, amount, date, assigned rep
- **Communication from CRM** — send email/SMS/chat directly from a contact or deal card
- **Team collaboration** — user roles and permissions, deal assignment

### Online Course Builder (EDU)

Create, market, and sell online courses within SendPulse.

- **Course structure** — modules, lessons, quizzes, assignments
- **Lesson types** — text, video (embed or upload), audio, PDF, infographics
- **Monetization** — accept payments via Stripe, PayPal, MercadoPago; set pricing per course
- **Student management** — enrollment, progress tracking, completion certificates
- **Communication** — lesson comments, Q&A, notifications vian email/SMS/chatbot/push
- **Access control** — free, paid, drip (time-released), or completion-gated lessons
- **CRM integration** — student contacts auto-added to CRM, deal created on enrollment
- **Marketing integration** — promote courses vian email campaigns, automations, chatbots, pop-ups

### Website / Landing Page Builder

- **Drag-and-drop builder** — blocks for text, images, forms, buttons, video, countdown, payment
- **Templates** — pre-designed landing pages, online store pages, bio link pages
- **Online store** — product catalog, cart, checkout with Stripe/PayPal
- **Bio link pages** — multi-link pages for social media profiles
- **Custom domains** — connect your own domain
- **SEO tools** — meta titles, descriptions, Open Graph tags
- **Analytics** — Google Analytics integration, built-in visitor tracking
- **Form integration** — forms auto-connect to SendPulse mailing lists

### Web Push Notifications

- **Browser push** — Chrome, Firefox, Safari, Edge, Opera
- **Subscription prompt** — customizable opt-in widget with timing control
- **Segmentation** — by browser, OS, location, subscription date, custom tags
- **Automation** — trigger pushes from Automation 360 flows
- **Scheduling** — immediate, scheduled, or time-zone optimized
- **Rich push** — images, action buttons, custom icons
- **Offline delivery** — queued until user comes online
- **API** — programmatic sending via REST API

### SMS Campaigns

- **Global delivery** — 1,000+ mobile operators worldwide
- **Sender ID** — display company name (where supported by carrier)
- **Personalization** — merge tags for recipient name, custom data, verification codes
- **Scheduling** — bulk send, recurring, or trigger-based via Automation 360
- **Analytics** — delivery rates, click tracking (with shortened URLs)
- **API** — send transactional and marketing SMS programmatically
- **Pricing** — pay-per-SMS, rates vary by country

### Viber Campaigns

- **Rich messages** — images, buttons, text up to 1,000+ characters
- **Scheduling** — send immediately or schedule
- **Message lifetime** — set delivery attempt window; SMS fallback if Viber fails
- **SMS fallback** — automatically resend via SMS if Viber delivery expires
- **Integration** — use in Automation 360 flows as a channel step

### SMTP / Transactional Email

- **SMTP relay** — send transactional emails via SendPulse's infrastructure
- **Dedicated IPs** — available on paid plans for sender reputation control
- **SPF/DKIM** — domain authentication support
- **Templates** — Handlebars-style templates for transactional emails
- **Tracking** — opens, clicks, bounces, deliveries
- **Webhooks** — delivery status, opens, clicks, bounces, unsubscribes
- **API** — send transactional email via REST API with attachments and templates

### Pop-ups & Forms

- **Types** — modal pop-up, floating bar, slide-in, fullscreen, embedded form
- **Templates** — pre-designed by industry and use case
- **Triggers** — exit intent, scroll depth, time delay, click, page URL
- **A/B testing** — test pop-up variants
- **NPS survey widget** — Net Promoter Score collection
- **Social media widget** — floating panel with social buttons
- **Integration** — subscribers auto-added to mailing lists, trigger automations

### Email Verifier

- **Single verification** — check one email address
- **Bulk verification** — upload a list (CSV) for batch verification
- **Status types** — valid, invalid, unknown, disposable, role-based
- **Integration** — verify on form submission via API, clean lists before campaigns
- **Credits** — included in plan (100 on Standard), additional credits purchasable

### Data model

| Object | Key fields | Notes |
|--------|-----------|-------|
| Mailing list | id, name, all_email_qty, active_email_qty | Container for contacts |
| Contact | email, phone, name, variables, tags, status | Shared across email, SMS, CRM |
| Campaign | id, name, subject, sender, status, stats | Email campaign with analytics |
| Automation | id, name, status, created, statistics | Automation 360 flow |
| Deal | id, name, amount, stage, contact, assignee | CRM deal with pipeline stage |
| Chatbot subscriber | id, platform, variables, tags | Per-platform chatbot contact |
| Course | id, name, status, students_count, revenue | EDU course with enrollment data |
| Web push subscriber | id, browser, os, location, tags | Browser push subscriber |

### API quick reference

| Action | Method | Endpoint | Notes |
|--------|--------|----------|-------|
| Get access token | POST | `/oauth/access_token` | Client ID + Secret → token (1hr) |
| List mailing lists | GET | `/addressbooks` | All contact lists |
| Create campaign | POST | `/campaigns` | Send or schedule email |
| Get campaign stats | GET | `/campaigns/{id}` | Opens, clicks, bounces |
| Add contact | POST | `/addressbooks/{id}/emails` | Add to mailing list |
| Send SMTP email | POST | `/smtp/emails` | Transactional email |
| Send SMS | POST | `/sms/send` | Single or bulk SMS |
| Create automation | POST | `/flows` | Automation 360 flow |
| Manage chatbot | Various | `/messenger/...` | Platform-specific endpoints |
| CRM deals | Various | `/crm/deals` | Create, update, list deals |
| Courses | Various | `/edu/...` | Course and student management |
| Web push | POST | `/push/tasks` | Send push notification |
| Verify email | POST | `/verifier` | Single email verification |
| Webhooks | Various | `/webhooks` | Create, list, delete |

**Base URL**: `https://api.sendpulse.com`
**Auth**: OAuth 2.0 (POST `/oauth/access_token` with client_id + client_secret → bearer token, 1hr expiry) or static API key
**Rate limits**: Free: 1K req/min, 500K/day · Standard: 2K/min, 1M/day · Enterprise: 3K/min, 3M/day
**SDKs**: PHP, Python, Ruby, Java, Node.js, C#, Go
**MCP Server**: `sendpulse/mcp-server` on GitHub

See `/sales-sendpulse/references/sendpulse-api-reference.md` for the full API reference.

### Integrations

| Integration | Type | What it does |
|-------------|------|-------------|
| Shopify | Native | Sync contacts (email + phone), display pop-ups on Shopify pages |
| WooCommerce | Plugin | Sync customer data (email, name, phone, company, city, state, country) to mailing lists |
| WordPress | Plugin | Add subscription forms, sync new subscribers to mailing lists |
| OpenCart | Native | Sync customer data to SendPulse |
| Stripe | Native | Accept course payments, website store payments |
| PayPal | Native | Accept course payments, website store payments |
| MercadoPago | Native | Accept course payments (LatAm) |
| Zapier | Connector | 5,000+ app connections, triggers on new contacts/campaigns/deals |
| Make | Connector | Advanced automation workflows with SendPulse as source/destination |
| Google Analytics | Native | UTM auto-tagging for campaigns, website tracking |

## Step 4 — Actionable guidance

### For email campaigns
1. Import or build your mailing list (CSV import, subscription form, or API)
2. Set up sender authentication — verify sender email, configure SPF/DKIM for your domain
3. Choose a template or build from scratch with the drag-and-drop editor
4. Personalize with merge tags and segment your audience
5. Set up A/B test (subject line or content) if sending to 1,000+ contacts
6. Schedule or send immediately; enable "resend to unopened" for important campaigns
7. Review analytics: opens, clicks, bounces, click map

### For Automation 360
1. Choose a trigger — contact added to list, custom event, date, form submission
2. Build the flow — add email/SMS/push/chatbot steps with delays and conditions
3. Use if/else conditions to branch based on engagement (opened email? clicked link?)
4. Add CRM actions — create deals, update stages from within the flow
5. Set goals — define conversion events to measure flow effectiveness
6. Test with a sample contact before activating
7. Monitor per-element statistics and optimize

### For chatbots
1. Choose a platform (WhatsApp, Instagram, Telegram, Facebook, Viber, TikTok)
2. Connect your business account (WhatsApp requires Business API approval)
3. Build a flow with the visual builder — greeting, menu, FAQ, lead capture
4. Set up keyword triggers and button responses
5. Configure live chat handoff for complex queries
6. Add tags to segment subscribers by interest or behavior
7. Use Automation 360 to trigger chatbot messages from email/CRM events

### For online courses
1. Create a course — set name, description, pricing, access type (free/paid/drip)
2. Build modules and lessons — add text, video, audio, PDF content
3. Configure payment (connect Stripe/PayPal)
4. Set up enrollment automation — welcome email, progress reminders via Automation 360
5. Promote vian email campaigns, chatbots, pop-ups, or landing pages
6. Monitor student progress and completion rates
7. Use CRM to track course-related deals and student lifetime value

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Free plan limitations are strict** — 500 contacts, 15K emails/mo, 3 chatbots, basic automation only. Users hitting these limits need to upgrade. Don't recommend advanced automation or large-scale sending on the free plan.

2. **WhatsApp requires Business API approval** — connecting WhatsApp to SendPulse chatbots requires WhatsApp Business API access (Meta verification). This can take days/weeks. Users asking about WhatsApp chatbots should start the approval process early.

3. **Automation 360 flow limits are plan-dependent** — Standard: 5 flows, 50 elements per flow. Pro and Enterprise have higher/unlimited limits. Complex multichannel workflows may require Pro+.

4. **SMS pricing is per-message, not included in plan** — email plans don't include SMS credits. SMS is billed separately per message, with rates varying by country. Budget separately for SMS campaigns.

5. **Course builder payments depend on external gateways** — SendPulse doesn't process payments directly; you must connect Stripe, PayPal, or MercadoPago. If none of these work in the user's region, course monetization may be limited.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — email marketing strategy across all platforms
- `/sales-chatbot` — chatbot strategy across messaging platforms
- `/sales-sms-marketing` — SMS marketing strategy and compliance
- `/sales-push-notification` — web and mobile push notification strategy
- `/sales-funnel` — funnel and landing page strategy
- `/sales-membership` — online course and membership strategy
- `/sales-audience-growth` — growing email lists and subscriber audiences
- `/sales-transactional-email` — transactional email delivery strategy
- `/sales-deliverability` — email deliverability, SPF/DKIM/DMARC
- `/sales-integration` — connecting SendPulse to other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up a welcome automation
**User says**: "I want to create a welcome series in SendPulse that sends an email, then a push notification, then an SMS if they don't open the email"
**Skill does**: Walks through Automation 360 setup — trigger on list subscription, send welcome email, wait 1 day, check if opened (condition), if no → send web push, wait 1 day, check again, if still no engagement → send SMS. Explains how to set up each channel step and the if/else branching.
**Result**: User has a multichannel welcome flow that escalates across channels based on engagement.

### Example 2: Building a WhatsApp chatbot
**User says**: "How do I set up a WhatsApp chatbot in SendPulse to handle customer inquiries and collect leads?"
**Skill does**: Explains WhatsApp Business API connection process, walks through building a chatbot flow (greeting → menu → FAQ branch / lead capture branch), setting up keyword triggers, collecting contact info via variables, tagging subscribers, and configuring live chat handoff for complex queries.
**Result**: User has a WhatsApp chatbot that handles FAQs and captures leads with handoff to human agents.

### Example 3: API integration for transactional email
**User says**: "I need to send order confirmation emails via SendPulse SMTP API from my app"
**Skill does**: Provides OAuth authentication setup, shows the POST `/smtp/emails` endpoint with request format (to, from, subject, html, attachments), explains template variables, recommends setting up webhooks for delivery/bounce tracking, and warns about rate limits.
**Result**: User has working transactional email integration with delivery monitoring.

## Troubleshooting

### Emails going to spam
**Symptom**: Campaign emails landing in spam folders for many recipients
**Cause**: Missing domain authentication (SPF/DKIM), poor list hygiene, or sending to unengaged contacts
**Solution**: Verify SPF and DKIM records are configured for your sending domain. Run your list through SendPulse's email verifier to remove invalid addresses. Segment out contacts who haven't opened in 90+ days — sending to unengaged contacts hurts sender reputation. Use `/sales-deliverability` for comprehensive deliverability strategy.

### Automation flow not triggering
**Symptom**: Automation 360 flow is active but contacts aren't entering it
**Cause**: Trigger misconfiguration — wrong event, wrong mailing list, or contact already processed
**Solution**: Check the trigger settings — verify the correct mailing list or event is selected. Check if "allow re-entry" is enabled (disabled by default — contacts can only enter a flow once). Test with a new contact that hasn't been through the flow before. Check flow statistics for any error indicators.

### Chatbot not responding on WhatsApp
**Symptom**: WhatsApp chatbot is built but users don't get responses
**Cause**: WhatsApp Business API not properly connected, or 24-hour messaging window expired
**Solution**: Verify WhatsApp Business API connection in SendPulse settings. WhatsApp enforces a 24-hour rule — you can only send free-form messages within 24 hours of the user's last message. Outside this window, you must use pre-approved template messages. Check that your bot flow has a keyword trigger matching the user's message.
