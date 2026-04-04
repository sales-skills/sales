---
name: sales-closum
description: "Closum platform help — omnichannel marketing automation: email, SMS, WhatsApp, Telegram, Web Push from one dashboard, drag-and-drop editors, no-code automations, AI assistant, landing pages, contact management. Use when asking 'how do I do X in Closum', setting up Closum campaigns, configuring Closum automations or landing pages, connecting Closum to CRMs, or troubleshooting Closum deliverability. Do NOT use for general email marketing strategy (use /sales-email-marketing), outbound cadence strategy (use /sales-cadence), funnel strategy (use /sales-funnel), or connecting Closum to other tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Closum]"
license: MIT
version: 1.0.0
tags: [sales, marketing-automation, omnichannel, platform]
github: "https://github.com/Closum"
---
# Closum Platform Help

Help the user with Closum platform questions — from email and SMS campaigns through WhatsApp, Telegram, Web Push notifications, landing pages, no-code automations, AI assistant, contact management, API, and integrations. Closum is a Portugal-based omnichannel marketing automation platform with 2,500+ customers (Decathlon, Fnac, Recheio, Boomfit, Era, Remax, FitnessUp, Job&Talent, Seaside).

## Step 1 — Gather context

Ask the user:

1. **What channel or area of Closum do you need help with?**
   - A) Email Marketing — newsletters, automations, drag-and-drop editor, reporting
   - B) SMS Marketing — campaigns, automations, personalization, enriched SMS
   - C) WhatsApp Marketing — automated messaging, intelligent flows
   - D) Telegram Marketing — automated alerts, document/image sharing, group management
   - E) Web Push — browser notifications, scheduling, segmented campaigns
   - F) Landing Pages & Forms — drag-and-drop builder, pop-ups, forms
   - G) Automations — no-code workflow builder for customer journeys
   - H) AI Assistant — accelerate message creation with OpenAI
   - I) Contact Management — unified profiles, lifecycle stages, segmentation
   - J) Integrations / API — connecting to CRMs, Zapier, API automation
   - K) Something else — describe it

2. **What's your goal?**
   - A) Set up a new campaign or workflow
   - B) Improve performance of existing campaigns
   - C) Connect Closum to another tool
   - D) Understand pricing or plan limits
   - E) Troubleshoot an issue
   - F) Other

3. **Which Closum plan are you on?**
   - A) Zero (Free) — 2,500 emails/mo, 1 automation
   - B) Growth — 10,000 emails/mo, 1 automation
   - C) Advanced — 10,000 emails/mo, 5 automations, landing pages, team members
   - D) Not sure / evaluating

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Email marketing strategy (platform-agnostic) -> `/sales-email-marketing`
- Outbound cadence strategy / sequence design -> `/sales-cadence`
- Funnel strategy / conversion optimization -> `/sales-funnel`
- Connecting Closum to other tools via Zapier or middleware -> `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Closum platform reference

Provide module-by-module guidance based on the user's area:

### Email Marketing
- **Drag-and-drop editor**: Visual email builder — no HTML required. Prebuilt templates, custom blocks, responsive design
- **Personalization variables**: Dynamic fields (first name, company, custom attributes) inserted into subject lines and body
- **Newsletters**: One-time broadcast sends to selected audience lists or segments
- **Email automations**: Trigger-based email sequences — welcome series, abandoned cart, re-engagement, date-based
- **Real-time reporting**: Opens, clicks, bounces, unsubscribes — per-campaign and aggregate dashboards
- **Send limits**: Zero plan: 1,000/hr; Growth: 5,000/hr; Advanced: 100,000/hr

### SMS Marketing
- **SMS campaigns**: Broadcast text messages to contact lists with scheduling and personalization
- **SMS automations**: Trigger-based SMS — combine with email workflows for multichannel journeys
- **Personalization**: Dynamic fields in SMS body (name, custom attributes)
- **Enriched SMS**: SMS with links, images, or landing page URLs for richer engagement
- **Pricing**: Separate from base plan — from EUR 0.014/SMS

### WhatsApp Marketing
- **Automated messaging**: Send WhatsApp messages as part of automation workflows
- **Intelligent flows**: Branching logic based on user responses — contextual personalization
- **Use cases**: Order confirmations, appointment reminders, promotional campaigns, customer support follow-ups

### Telegram Marketing
- **Automated alerts**: Trigger-based Telegram messages from automation workflows
- **Document/image sharing**: Send files, images, and rich media through Telegram
- **Group management**: Manage Telegram groups and broadcast channels from Closum
- **Use cases**: Product announcements, event notifications, support updates

### Web Push
- **Browser notifications**: Push notifications to subscribers without requiring an app
- **Scheduling**: Set send times or trigger based on user behavior
- **Images**: Rich push notifications with images and custom icons
- **Segmented campaigns**: Target specific audience segments with tailored push content

### Landing Pages & Forms
- **Drag-and-drop builder**: Visual page builder — no coding required
- **Pop-ups**: Timed, exit-intent, or scroll-triggered pop-ups for lead capture
- **Forms**: Embedded forms for newsletters, lead magnets, event registrations
- **Dynamic segmentation**: Auto-tag and segment contacts based on which form or landing page they convert on
- **Plan limits**: Advanced plan includes 15 landing pages; add-on available (EUR 15/mo for 4 additional pages)

### No-Code Automations
- **Workflow builder**: Visual drag-and-drop builder for customer journeys
- **Triggers**: Form submission, tag added, lifecycle stage change, date-based, custom events
- **Actions**: Send email, send SMS, send WhatsApp, send Telegram, add tag, update contact field, wait, condition branch
- **Cross-channel**: Build journeys that span email, SMS, WhatsApp, Telegram, and Web Push in a single workflow
- **Plan limits**: Zero/Growth: 1 automation; Advanced: 5 automations; add-on: EUR 5/mo per 5 additional automations

### AI Assistant
- **OpenAI integration**: Built-in AI for accelerating message creation — subject lines, email copy, SMS text
- **Use cases**: Generate email drafts, rewrite copy for different tones, translate messages, brainstorm subject lines
- **Access**: Available from the message editor across email, SMS, and other channel editors

### Contact Management
- **Unified profiles**: Single contact record aggregating activity across all channels (email, SMS, WhatsApp, Telegram, Web Push)
- **Lifecycle stages**: Customizable stages to track where contacts are in the customer journey
- **Audience lists**: Group contacts into lists for targeted campaigns
- **Segmentation**: Filter and segment by tags, lifecycle stage, engagement, custom fields, form submissions
- **Unlimited contacts**: All plans include unlimited contacts

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| Contact | Unified customer profile | email, phone, name, tags, lifecycle stage, custom fields |
| Audience List | Grouping of contacts for targeting | id, name, contact count |
| Lifecycle Stage | Customer journey position | id, name, order |
| Campaign | Email/SMS/Push broadcast | id, channel, status, audience, scheduled time |
| Automation | No-code workflow | id, name, trigger, steps, status |
| Landing Page | Lead capture page | id, name, URL, form, status |
| Form | Embedded or pop-up lead capture | id, name, type, fields, audience list |

### API quick reference

- **Base URL**: `https://api.closum.com/api`
- **Auth**: Bearer token — `Authorization: Bearer {token}`
- **API key generation**: Settings -> Application -> Integrations -> API Keys -> Generate
- **Known endpoints**:
  - `GET /audience-list` — retrieve audience lists
  - `GET /contact-lifecycle-stage/` — retrieve lifecycle stages
  - `POST /lead-audience-list` — add a lead to an audience list
- **Documentation**: developers.closum.com (redirects to Postman collection)
- **GitHub**: github.com/Closum/closum-api
- **Gaps**: Full endpoint list not publicly documented. Rate limits unknown. Check Postman collection for the most current endpoints.

### Integrations

| Category | Tools |
|----------|-------|
| **CRM** | Salesforce, Pipedrive, Zoho, Bitrix24 |
| **E-commerce** | Shopify, WooCommerce, Magento, Ecwid, Hotmart |
| **Payments** | Stripe, PayPal |
| **Productivity** | Google Sheets, Airtable, Notion, Asana, ClickUp, Google Calendar, Outlook |
| **Communication** | Slack, Tawk.to, Facebook/Meta |
| **AI** | OpenAI |
| **Forms** | Tally, Typeform |
| **Other** | Zapier (600+ tools), DocuSign, Bitly, Calendly, Mautic, Apollo |

### Pricing (as of 2026-03, EUR — verify current pricing at closum.com)

| Plan | Price | Emails/mo | Automations | Data retention | Send limit | Landing pages | Team members |
|------|-------|-----------|-------------|----------------|------------|---------------|--------------|
| **Zero (Free)** | EUR 0/mo | 2,500 | 1 | 30 days | 1,000/hr | — | 1 |
| **Growth** | EUR 12/mo | 10,000 | 1 | 30 days | 5,000/hr | — | 1 |
| **Advanced** | EUR 35/mo | 10,000 | 5 | 180 days | 100,000/hr | 15 | 3 |

**All plans**: Unlimited contacts.

**SMS**: Separate pricing from EUR 0.014/SMS.

**Add-ons**: Landing pages (EUR 15/mo for 4 pages), automations (EUR 5/mo per 5 automations), team members (EUR 9/mo per member).

## Step 4 — Actionable guidance

Based on the user's specific question:

### Setting up an email campaign
1. Navigate to Campaigns -> Email -> Create new
2. Choose a template or start from scratch in the drag-and-drop editor
3. Add personalization variables (first name, company, custom fields)
4. Select audience list or segment for targeting
5. Configure send time (immediate or scheduled)
6. Preview and test — send a test email to yourself
7. Launch the campaign
8. Monitor real-time reporting for opens, clicks, bounces

### Setting up an SMS campaign
1. Ensure you have SMS credits (purchased separately from EUR 0.014/SMS)
2. Navigate to Campaigns -> SMS -> Create new
3. Write your SMS copy with personalization variables
4. Select audience list — ensure contacts have phone numbers
5. Schedule or send immediately
6. Monitor delivery and click rates

### Setting up WhatsApp automation
1. Connect your WhatsApp Business account in Settings -> Integrations
2. Create a new automation workflow
3. Set your trigger (form submission, tag added, lifecycle stage change)
4. Add a WhatsApp message step — configure the message template with personalization
5. Add branching logic based on user responses if needed
6. Test the workflow with a test contact
7. Activate the automation

### Building an automation workflow
1. Navigate to Automations -> Create new
2. Select a trigger (form submission, tag change, date-based, custom event)
3. Add steps — email, SMS, WhatsApp, Telegram, wait, condition, tag, update field
4. Use condition branches to split journeys based on engagement or contact data
5. Test the entire flow with a test contact
6. Activate — monitor the automation dashboard for execution stats
7. Note: Check your plan's automation limit (Zero/Growth: 1, Advanced: 5)

### Creating a landing page
1. Navigate to Landing Pages -> Create new
2. Use the drag-and-drop builder — add sections, forms, images, CTAs
3. Configure the form to capture the fields you need
4. Set the audience list and tags for new contacts captured
5. Publish and grab the URL
6. Optionally add a pop-up trigger (timed, exit-intent, scroll)
7. Note: Landing pages require the Advanced plan or add-on (EUR 15/mo for 4 pages)

## Gotchas

> Best-effort from research — verify details against current Closum documentation.

1. **Automation limits are strict per plan.** Zero and Growth plans include only 1 automation. If you need complex multi-step journeys across channels, you'll either need the Advanced plan (5 automations) or the add-on (EUR 5/mo per 5 automations). Plan your workflows before hitting the limit.
2. **SMS is billed separately from your base plan.** Email plans don't include SMS credits. SMS starts at EUR 0.014/SMS and costs vary by country. Budget for SMS separately if planning multichannel campaigns.
3. **Data retention varies dramatically by plan.** Zero and Growth plans retain data for only 30 days. Advanced extends to 180 days. If you need historical reporting beyond these windows, export data regularly or upgrade your plan.
4. **The API is sparsely documented.** The official docs at developers.closum.com redirect to a Postman collection. The full endpoint list is not publicly captured, and rate limits are unknown. Expect to explore the Postman collection and GitHub repo (github.com/Closum/closum-api) for endpoint discovery.
5. **Landing pages are not available on Zero or Growth plans.** You need the Advanced plan (15 pages included) or the landing page add-on (EUR 15/mo for 4 pages). If you're building lead capture funnels, factor this into your plan choice.

## Step 5 — Related skills

- `/sales-email-marketing` — Email marketing strategy — list building, segmentation, deliverability (platform-agnostic)
- `/sales-cadence` — Design outbound cadence strategy (works with Closum email sequences)
- `/sales-funnel` — Funnel strategy and conversion optimization
- `/sales-integration` — Connect Closum to CRMs, e-commerce platforms, and other tools
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Multichannel welcome sequence
**User says**: "How do I set up a welcome sequence in Closum that sends an email, then an SMS, then a WhatsApp message?"
**Skill does**:
1. Creates a new automation with trigger: "Contact added to audience list" or "Form submitted"
2. Step 1: Send welcome email immediately — drag-and-drop editor with personalization
3. Step 2: Wait 1 day, then send SMS with a personal touch and link to key content
4. Step 3: Wait 2 days, then send WhatsApp message with a product recommendation or onboarding prompt
5. Adds condition branches — if email opened, skip SMS and go straight to WhatsApp; if not opened, send SMS as a nudge
**Result**: User has a cross-channel welcome journey that adapts based on engagement, using email + SMS + WhatsApp from a single Closum automation

### Example 2: Landing page with lead capture and segmentation
**User says**: "I want to create a landing page for a webinar and automatically tag registrants in Closum"
**Skill does**:
1. Creates a new landing page in the drag-and-drop builder with webinar details, speaker info, and a registration form
2. Configures the form to capture name, email, company, and role
3. Sets the form to add registrants to a "Webinar Registrants" audience list and apply a "webinar-2026" tag
4. Connects an automation: on form submission, send confirmation email with calendar link, then send reminder SMS 1 hour before the event
5. Notes the Advanced plan requirement for landing pages (or EUR 15/mo add-on)
**Result**: User has a published landing page that captures leads, auto-segments them, and triggers a confirmation + reminder sequence

### Example 3: Connecting Closum to Salesforce
**User says**: "How do I sync Closum contacts with Salesforce?"
**Skill does**:
1. Checks if the user's goal is CRM sync or a more complex integration architecture (routes to `/sales-integration` if the latter)
2. Walks through Settings -> Application -> Integrations -> Salesforce connection setup
3. Explains the native Salesforce integration — contact sync, field mapping, lifecycle stage mapping
4. Recommends mapping Closum lifecycle stages to Salesforce lead statuses before enabling sync
5. Suggests starting with a small audience list to test sync before enabling for all contacts
**Result**: User has Salesforce connected with contact sync configured and tested

## Troubleshooting

### Emails not being delivered
**Symptom**: Low delivery rates, recipients not receiving emails, or emails landing in spam
**Cause**: Missing domain authentication (SPF/DKIM/DMARC), sending too fast on a new account, or poor sender reputation
**Solution**: Verify domain authentication is configured correctly in Settings. Start with low volume and ramp up gradually — respect your plan's hourly send limit (Zero: 1,000/hr, Growth: 5,000/hr, Advanced: 100,000/hr). Check your sender reputation. If emails are going to spam, review content for spam triggers and ensure you have proper unsubscribe links. See `/sales-deliverability` for a comprehensive diagnosis framework.

### Automation not triggering
**Symptom**: Contacts are entering the expected condition (form submitted, tag added) but the automation does not execute
**Cause**: Automation limit reached, automation not activated, or trigger misconfigured
**Solution**: Check your plan's automation limit (Zero/Growth: 1 active automation, Advanced: 5). Verify the automation status is "Active" not "Draft." Confirm the trigger matches the expected event — e.g., ensure the form is connected to the correct automation. Test with a new contact to rule out "already processed" issues. If you need more automations, add the automation add-on (EUR 5/mo per 5).

### API authentication failing
**Symptom**: API calls return 401 Unauthorized
**Cause**: Invalid or expired Bearer token, incorrect header format
**Solution**: Generate a new API key in Settings -> Application -> Integrations -> API Keys -> Generate. Ensure the Authorization header is formatted exactly as `Authorization: Bearer {token}` (with a space after "Bearer"). Test with a simple GET request to `/audience-list` to confirm authentication works before building complex integrations. Check the Postman collection at developers.closum.com for working request examples.
