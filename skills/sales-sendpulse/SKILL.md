---
name: sales-sendpulse
description: "SendPulse platform help — email marketing, Automation 360, chatbots (WhatsApp/Instagram/Telegram/Facebook/Viber/TikTok), CRM, online course builder (EDU), website/landing page builder, web push notifications, SMS campaigns, Viber campaigns, SMTP/transactional email, pop-ups, email verifier, API. Use when SendPulse emails have low open rates, automations aren't triggering, chatbots aren't responding correctly, CRM deals are stuck in the pipeline, course students aren't completing lessons, landing pages aren't converting, web push subscribers aren't clicking, SMS messages aren't delivering, or pop-ups aren't capturing leads. Do NOT use for general email marketing strategy (use /sales-email-marketing), general chatbot strategy (use /sales-chatbot), general SMS strategy (use /sales-sms-marketing), general push notification strategy (use /sales-push-notification), general funnel strategy (use /sales-funnel), or general course/membership strategy (use /sales-membership)."
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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
