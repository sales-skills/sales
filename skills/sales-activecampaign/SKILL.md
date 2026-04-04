---
name: sales-activecampaign
description: "ActiveCampaign platform help — marketing automation and CRM for email, SMS, WhatsApp, landing pages, and sales pipelines. Use when building marketing automations, configuring CRM pipelines and deals, setting up lead scoring, creating landing pages or forms, managing email campaigns with A/B testing and conditional content, or working with the ActiveCampaign API. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), email tracking strategy (use /sales-email-tracking), or lead scoring strategy (use /sales-lead-score)."
argument-hint: "[describe what you need help with in ActiveCampaign]"
license: MIT
version: 1.0.0
tags: [sales, marketing-automation, email-marketing, crm, platform]
github: "https://github.com/ActiveCampaign"
---
# ActiveCampaign Platform Help

Help the user with ActiveCampaign platform questions — from Automations and Email Marketing through CRM/Deals/Pipelines, Lead Scoring, SMS, WhatsApp, Landing Pages, Forms, Site Tracking, Transactional Email, Segmentation, Reporting, and AI/Active Intelligence. ActiveCampaign is an all-in-one marketing automation and CRM platform, founded in 2003 by Jason VandeBoom. Chicago-based, 180K+ businesses, 700+ employees. Offers email, SMS, WhatsApp, landing pages, lead scoring, deals/pipelines, and 900+ integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of ActiveCampaign do you need help with?**
   - A) Automations — visual workflow builder (triggers, branching, goals, split actions, wait steps)
   - B) Email Marketing — campaigns (broadcasts), A/B testing, conditional content, predictive sending
   - C) CRM / Deals / Pipelines — customizable pipelines and stages, deal tracking, tasks, win probability
   - D) Lead Scoring — AI-powered contact and deal scoring, multiple scoring models
   - E) SMS — automated SMS in workflows, SMS campaigns, two-way SMS
   - F) WhatsApp — WhatsApp messaging channel in automations
   - G) Landing Pages — 56 templates, drag-and-drop builder, form integration, custom domains
   - H) Forms — inline, floating bar, modal, floating box, conditional fields
   - I) Site Tracking — track website visits per contact, trigger automations based on site behavior
   - J) Transactional Email — Postmark-powered transactional email add-on
   - K) Segmentation — tag-based, list-based, engagement-based, behavioral, deal-based
   - L) Reporting — campaign analytics, automation reports, deal reports, attribution, custom reports
   - M) AI / Active Intelligence — predictive content, predictive sending, autonomous marketing workflows
   - N) Conversations — live chat and chatbot (legacy, being sunset)
   - O) API / Integrations — REST API, webhooks, 900+ integrations
   - P) Account / Billing — plans, pricing, contact-based billing
   - Q) Something else — describe it

2. **What's your role?**
   - A) Small business owner / solopreneur
   - B) Email / lifecycle marketer
   - C) Developer / engineer
   - D) Agency / freelancer
   - E) Sales / revenue operations
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability (not ActiveCampaign-specific) -> `/sales-deliverability`
- Email open/click tracking strategy -> `/sales-email-tracking`
- Lead scoring strategy / models (not ActiveCampaign-specific) -> `/sales-lead-score`
- Connecting ActiveCampaign to other tools via middleware -> `/sales-integration`
- Klaviyo-specific questions -> `/sales-klaviyo`
- Customer.io-specific questions -> `/sales-customerio`
- Mailchimp-specific questions -> `/sales-mailchimp`
- Postmark-specific questions -> `/sales-postmark`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — ActiveCampaign platform reference

Provide module-by-module guidance based on the user's area:

### Automations
- **What they are**: Visual workflows triggered by events — email opens/clicks, site visits, purchases, form submissions, deal changes, tag additions/removals, dates, custom events
- **Builder**: Drag-and-drop canvas with trigger, if/else branching, wait steps (fixed duration or until conditions), goals, split actions, and action nodes
- **Triggers**: Email events (open, click, reply, forward, bounce), site visits (visited URL, time on site), purchases, form submissions, deal changes (stage move, field update, won/lost), tag added/removed, date-based, custom events
- **If/else branching**: Conditional paths based on contact fields, tags, list membership, deal properties, lead score, site visits, email engagement, or custom conditions
- **Wait steps**: Wait a fixed duration, wait until a specific date, or wait until a condition is met (e.g., contact visits a URL or reaches a lead score threshold)
- **Goals**: Define a target action within an automation — contacts who achieve the goal can skip ahead in the automation, and goal completion rates are tracked for reporting
- **Split actions**: A/B split testing within automations — divide contacts into multiple paths (up to 5) and measure which path performs better
- **Key strength**: Most powerful automation engine in the mid-market — deeper conditional logic, more trigger types, and more granular control than most competitors at this price point

### Email Marketing
- **Campaigns**: One-time broadcast sends to lists or segments — schedule or send immediately
- **A/B testing**: Test up to 5 variants of subject line, from name, or email content. Winner selected by open rate or click rate after a test period
- **Conditional content**: Show/hide content blocks within a single email based on contact fields, tags, or custom data — personalize without creating multiple emails
- **Dynamic personalization**: Merge tags for contact fields, deal fields, and custom fields — fallback values for missing data
- **Send time optimization**: Predictive sending (Pro+) analyzes each contact's engagement history and sends at the time they are most likely to engage — optimized per-contact
- **Predictive sending**: Available on Pro plan and above — uses machine learning to determine optimal send times per recipient

### CRM / Deals / Pipelines
- **Pipelines**: Customizable sales pipelines with unlimited stages — drag-and-drop deal cards between stages
- **Deals**: Track deal value, expected close date, assigned owner, custom fields, and associated contacts/organizations
- **Tasks**: Create tasks tied to deals or contacts — due dates, assignments, reminders
- **Win probability**: Automatically calculated based on deal stage and historical conversion rates
- **Sales automation**: Trigger automations when deals change stage, are created, updated, won, or lost — automate follow-ups, task creation, notifications
- **Add-ons**: "Pipelines" add-on ($68/mo, B2C-oriented) and "Sales Engagement" (Pro+, B2B-focused with prospecting, sequences, and engagement tracking)
- **Unlimited pipelines**: All CRM add-ons include unlimited pipelines and stages

### Lead Scoring
- **AI-powered scoring**: Automatically score contacts and deals based on engagement and behavior
- **Multiple models**: Create multiple scoring models per account — e.g., one for email engagement, one for purchase readiness, one per product line
- **Score factors**: Email engagement (opens, clicks, replies), site visits (pages viewed, frequency), form submissions, tag additions, custom field values, deal activity
- **Deal scoring**: Separate scoring for deals based on pipeline activity, task completion, and engagement
- **Automation triggers**: Use lead score thresholds to trigger automations — e.g., when a contact reaches score 50, notify sales or move to a new pipeline stage

### SMS Marketing
- **Automated SMS**: Send SMS messages as steps within automations — triggered by any automation event
- **SMS campaigns**: Broadcast SMS to lists or segments, similar to email campaigns
- **Two-way SMS**: Receive and respond to SMS replies within ActiveCampaign
- **SMS in workflows**: Combine email and SMS in a single automation — e.g., send email, wait 24h, if not opened, send SMS

### WhatsApp
- **WhatsApp channel**: Send WhatsApp messages as automation steps
- **Templates**: Use pre-approved WhatsApp message templates
- **Rich media**: Send images, documents, and interactive buttons via WhatsApp

### Landing Pages
- **Templates**: 56 pre-built landing page templates for lead capture, webinars, product launches, and more
- **Builder**: Drag-and-drop editor with text, image, video, button, form, and custom HTML blocks
- **Form integration**: Embed ActiveCampaign forms directly into landing pages — submissions trigger automations and add to lists
- **Custom domains**: Publish landing pages on your own domain
- **Available on**: Plus plan and above

### Forms
- **Types**: Inline (embedded), floating bar, modal (pop-up), floating box
- **Conditional fields**: Show/hide form fields based on previous answers or contact data
- **Custom CSS**: Full CSS customization for advanced styling
- **Automation triggers**: Form submissions trigger automations, add tags, add to lists, update contact fields
- **Available on**: All plans

### Site Tracking
- **Contact-level tracking**: Track which pages each contact visits on your website — see full browsing history per contact
- **Behavior triggers**: Trigger automations based on site behavior — visited a specific URL, visited any page, time on site, number of visits
- **Setup**: Add ActiveCampaign's site tracking JavaScript snippet to your website — automatically associates visits with known contacts (identified via email link clicks)
- **Use cases**: Score contacts based on site activity, trigger sales notifications when a lead visits the pricing page, personalize emails based on pages viewed

### Transactional Email
- **Postmark-powered**: ActiveCampaign acquired Postmark in 2022 — transactional email is powered by Postmark as a separate add-on
- **Separate add-on**: Not included in any ActiveCampaign plan — requires a separate Postmark subscription
- **Use cases**: Order confirmations, password resets, shipping notifications, account alerts — any email triggered by a user action that is not marketing
- **Do not confuse**: Marketing automation emails (sent via ActiveCampaign) are different from transactional emails (sent via Postmark add-on)

### Segmentation
- **Tag-based**: Segment contacts by tags — tags can be added manually, via forms, automations, or API
- **List-based**: Contacts belong to one or more lists — segment by list membership
- **Engagement-based**: Segment by email engagement (opened/clicked in last X days), inactive contacts, highly engaged contacts
- **Behavioral**: Segment by site tracking data (visited URL, pages viewed), form submissions, event attendance
- **Custom field-based**: Segment by any custom field value — date fields, dropdowns, text fields, checkboxes
- **Deal-based**: Segment contacts by deal properties — pipeline, stage, value, status (won/lost/open)

### Reporting
- **Campaign analytics**: Opens, clicks, bounces, unsubscribes, forwards, social shares, revenue attribution per campaign
- **Automation reports**: Contacts entered, completed, currently active, goal completion rates, per-step metrics
- **Deal reports**: Pipeline value, win/loss rates, average deal duration, revenue by pipeline/stage/owner
- **Goal tracking**: Define goals within automations and track completion rates over time
- **Custom reports**: Available on Pro+ — build custom reports with filters, date ranges, and multiple metrics
- **Attribution reporting**: Track which campaigns and automations drive conversions and revenue

### AI / Active Intelligence
- **AI campaign suggestions**: AI analyzes your audience and suggests campaign content, subject lines, and send times
- **Audience insights**: AI-powered analysis of your contact base — engagement trends, growth patterns, segment recommendations
- **Predictive content**: Automatically select the best-performing content variant for each contact based on their profile and behavior
- **Predictive sending**: Machine learning determines the optimal send time per contact (Pro+)
- **Autonomous marketing workflows**: AI-assisted automation creation — describe your goal and AI suggests trigger, steps, and conditions

### Conversations (Legacy)
- **Live chat**: Embeddable live chat widget for your website
- **Chatbot**: Rule-based chatbot for automated responses
- **Status**: Being sunset — consider alternatives for live chat needs

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Contact** | Individual person/subscriber | id, email, phone, firstName, lastName, tags, lists, custom fields, score |
| **Deal** | Sales opportunity in a pipeline | id, title, value, currency, stage, pipeline, owner, contact, status, custom fields |
| **Pipeline** | Sales process with stages | id, title, stages (ordered list) |
| **Stage** | Step within a pipeline | id, title, pipeline, order, width (percentage-based win probability) |
| **Automation** | Visual workflow | id, name, status (active/inactive), triggers, steps |
| **Campaign** | Broadcast email send | id, name, type, status, send_date, list, segment |
| **List** | Subscriber collection | id, name, subscriber_count |
| **Tag** | Organization/segmentation label | id, tag (name), applied to contacts |
| **Form** | Data capture form | id, name, type (inline/modal/floating bar/floating box) |
| **Task** | Action item tied to deal/contact | id, title, due_date, deal, contact, assignee, status |
| **Note** | Free-text note on contact/deal | id, note, contact, deal |
| **Custom Field** | User-defined field | id, title, type, group |
| **Score** | Lead score model | id, name, rules, contact or deal level |
| **Webhook** | Event notification subscription | id, url, events, sources |

### API quick reference

- **Base URL**: `https://{account}.api-us1.com/api/3/` (unique per account — replace `{account}` with your account name)
- **Authentication**:
  - API key: `Api-Token` HTTP header with your API key — used for all endpoints
  - OAuth 2.0: Available for third-party integrations — scoped access tokens
- **Format**: RESTful JSON — resources returned as objects with nested relationships
- **Rate limits**: 5 requests per second per account — significantly lower than most competitors. Custom limits available on request for high-volume accounts
- **Webhooks**: 25+ event types with at-least-once delivery (may fire more than once — implement idempotency)
  - Contact events: subscribe, unsubscribe, update
  - Email events: open, click, bounce, reply, sent, forward, share
  - Deal events: deal_add, deal_update, deal_stage_add, deal_pipeline_add, deal_task_add, deal_task_complete, deal_note_add
  - Tag events: contact_tag_added, contact_tag_removed
  - SMS events: sms_sent, sms_reply, sms_unsub
  - List events: list_add
  - Note events: subscriber_note
- **Key endpoints**:
  - `POST /api/3/contacts` — create a contact
  - `PUT /api/3/contacts/{id}` — update a contact
  - `POST /api/3/contactSync` — create or update (upsert) a contact by email
  - `GET /api/3/contacts` — list contacts (supports search and filtering)
  - `POST /api/3/contactTags` — add a tag to a contact
  - `GET /api/3/deals` — list deals
  - `POST /api/3/deals` — create a deal
  - `PUT /api/3/deals/{id}` — update a deal
  - `GET /api/3/dealPipelines` — list pipelines
  - `GET /api/3/dealStages` — list pipeline stages
  - `POST /api/3/dealTasks` — create a deal task
  - `GET /api/3/automations` — list automations
  - `POST /api/3/contactAutomations` — add a contact to an automation
  - `GET /api/3/campaigns` — list campaigns
  - `POST /api/3/webhooks` — create a webhook
  - `GET /api/3/webhooks` — list webhooks
  - `GET /api/3/scores` — list lead scoring models
  - `POST /api/3/fieldValues` — set a custom field value for a contact
- **Docs**: developers.activecampaign.com

### Integrations

| Category | Tools |
|----------|-------|
| **E-commerce** | Shopify (bi-directional sync), WooCommerce, BigCommerce, Square, Magento |
| **CRM** | Salesforce (bi-directional sync), HubSpot, Pipedrive, Microsoft Dynamics |
| **Payments** | Stripe, PayPal, Square |
| **Advertising** | Facebook, Google Ads |
| **Scheduling** | Calendly |
| **Communication** | Slack |
| **Forms / Surveys** | Typeform, Gravity Forms, JotForm |
| **E-commerce platforms** | WordPress (plugin), Unbounce |
| **Automation / iPaaS** | Zapier, Make (Integromat), Pabbly Connect |
| **Transactional email** | Postmark (owned by ActiveCampaign) |

### Pricing (USD, as of March 2026 — verify current pricing at activecampaign.com)

| Plan | Price (annual, 1K contacts) | Send limit | Key features |
|------|----------------------------|------------|--------------|
| **Starter** | $15/mo | 10x contact count | Email marketing, forms, basic automations, site tracking |
| **Plus** | $49/mo | 10x contact count | CRM (Pipelines add-on available, $68/mo), landing pages, SMS, lead scoring |
| **Pro** | $79/mo | 12x contact count | Sales Engagement, predictive sending, custom reports, split automations |
| **Enterprise** | $145/mo | 15x contact count | Custom objects, HIPAA support, custom reporting |

**Key pricing notes**:
- Send limits are **multipliers** of your contact count, NOT unlimited — a 5K-contact Plus plan gets 50K emails/month
- **All contacts count toward billing (Nov 2025 change)** — unsubscribed, bounced, and unconfirmed contacts all count for new users. Clean lists aggressively
- **CRM is a paid add-on** — "Pipelines" ($68/mo, B2C-oriented) or "Sales Engagement" (Pro+, B2B-focused)
- **Transactional email is a separate Postmark add-on** — not included in any plan
- Add-ons: Enhanced CRM Pipelines ($68/mo), Transactional Email (Postmark), SMS credits purchased separately

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Building an automation workflow with lead scoring**:
   1. Navigate to Automations > Create an Automation > Start from Scratch (or choose a template)
   2. Set the trigger — e.g., "Submits a Form" for a lead capture form, or "Tag is Added" for a specific lead source tag
   3. Add an action to adjust the contact's lead score: Contacts > Adjust Score > select your scoring model and add points (e.g., +10 for form submission)
   4. Add a wait step: "Wait for conditions" > wait until the contact's lead score reaches your threshold (e.g., score >= 50)
   5. Add an if/else condition: check the contact's score — if score >= 50, route to the "sales-ready" path; otherwise, continue nurturing
   6. On the sales-ready path: create a deal in your pipeline (Actions > CRM > Add a Deal), assign it to a sales rep, send a notification email to the rep
   7. On the nurture path: send a series of educational emails with wait steps between them, adding lead score points for each email opened (+5) or link clicked (+10)
   8. Add a goal: "Deal is Won" — contacts who purchase skip ahead to the end of the automation
   9. Monitor: check automation reports for contacts entered, goal completion rate, and average time to goal

2. **Setting up a CRM pipeline with sales automation**:
   1. Navigate to Deals > Pipelines > Add Pipeline
   2. Define your stages — e.g., "New Lead", "Qualified", "Proposal Sent", "Negotiation", "Won", "Lost"
   3. Set stage widths (win probability) — each stage represents a percentage likelihood of closing (e.g., New Lead = 10%, Qualified = 30%, Proposal = 60%)
   4. Create custom deal fields for your business: deal source, product interest, contract length, etc.
   5. Build automations triggered by deal events:
      - "Deal Stage Changes to Qualified" > send a personalized email to the contact, create a task for the sales rep to schedule a call
      - "Deal Stage Changes to Proposal Sent" > wait 3 days > if deal is still in "Proposal Sent" stage, send a follow-up email and notify the rep
      - "Deal is Won" > add a "Customer" tag, move to onboarding automation, send a welcome email
      - "Deal is Lost" > add a "Lost Deal" tag, wait 30 days, send a re-engagement email
   6. Set up deal task templates: standard tasks for each stage (e.g., "Schedule discovery call" when entering Qualified stage)
   7. Monitor: use deal reports to track pipeline value, win/loss rates, and average deal duration per stage

3. **Creating a conditional content email campaign**:
   1. Navigate to Campaigns > Create a Campaign > Standard
   2. Select your target list or segment
   3. In the email designer, add a content block and click "Make Conditional"
   4. Define the condition: e.g., "Contact tag contains VIP" > show a VIP-exclusive offer; otherwise, show a standard offer
   5. Add multiple conditional blocks in the same email — e.g., different product recommendations based on custom fields (industry, product interest, location)
   6. Use dynamic personalization tags: `%FIRSTNAME%`, `%DEAL_VALUE%`, or any custom field with fallback values for missing data
   7. Set up A/B testing: test up to 5 subject line variants — ActiveCampaign sends each variant to a percentage of your list, then sends the winner to the rest
   8. Enable predictive sending (Pro+): let ActiveCampaign determine the optimal send time for each individual contact
   9. Review and send: preview conditional content for different contacts, verify personalization renders correctly, and schedule or send

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **CRM is a PAID ADD-ON — "Pipelines" ($68/mo) or "Sales Engagement" (Pro+). Don't assume CRM features are included in base plans.** The Starter and Plus plans do not include CRM/deals/pipelines by default. You must purchase the "Pipelines" add-on ($68/mo, B2C-oriented) or upgrade to Pro with the "Sales Engagement" bundle (B2B-focused). If your user mentions deals or pipelines, verify they have the CRM add-on before advising on CRM features.
2. **Send limits are multipliers (10x/12x/15x contact count), NOT unlimited.** A 5K-contact Plus plan gets 50K emails/month. Exceeding the limit triggers overage charges. Unlike competitors that offer unlimited sends, ActiveCampaign caps email volume relative to your contact count. Calculate your monthly send volume before choosing a plan.
3. **All contacts count toward billing (Nov 2025 change) — unsubscribed, bounced, and unconfirmed contacts all count for new users.** This is a significant change from the previous model. Clean your lists aggressively by archiving or deleting contacts who have unsubscribed, bounced repeatedly, or never confirmed. Failing to clean lists means you pay for contacts you cannot email.
4. **Transactional email is a SEPARATE Postmark add-on — not included in any plan.** Do not confuse marketing emails (sent via ActiveCampaign automations/campaigns) with transactional emails (order confirmations, password resets, etc.). Transactional email requires a separate Postmark subscription. If a user needs transactional email, direct them to the Postmark add-on or `/sales-postmark`.
5. **API rate limit is only 5 req/sec — significantly lower than competitors (Klaviyo, Mailgun, etc.).** Batch operations carefully and implement retry logic with exponential backoff for HTTP 429 responses. For bulk imports or syncs, use ActiveCampaign's bulk import tools in the UI rather than hitting the API one contact at a time. Custom rate limits are available on request for Enterprise accounts.

## Step 5 — Related skills

- `/sales-email-marketing` — Opt-in email marketing strategy across tools
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-email-tracking` — Email engagement tracking strategy
- `/sales-lead-score` — Lead scoring models and strategy
- `/sales-integration` — Connect ActiveCampaign to CRM, e-commerce, or other tools
- `/sales-cadence` — Multi-touch sales cadence design and optimization
- `/sales-klaviyo` — Klaviyo platform help (primary ActiveCampaign competitor for e-commerce)
- `/sales-customerio` — Customer.io platform help (primary competitor for behavior-driven automation)
- `/sales-mailchimp` — Mailchimp platform help (primary competitor for email marketing)
- `/sales-postmark` — Postmark platform help (powers ActiveCampaign's transactional email)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Automation workflow with lead scoring
**User says**: "I want to build an automation that nurtures leads and hands them off to sales when they're ready. How do I use lead scoring in ActiveCampaign?"
**Skill does**:
1. Sets up a lead scoring model with point values: form submission (+10), email open (+5), link click (+10), pricing page visit (+20), webinar attendance (+15)
2. Creates an automation triggered by form submission — adds the contact to a nurture sequence and starts accumulating score
3. Sends a 4-email nurture series with wait steps (3 days between emails), each email building on the last: intro/welcome, educational content, case study, product demo invite
4. After each email interaction (open, click), the automation adjusts the lead score via score-adjustment actions
5. Adds a "Wait for conditions" step: wait until lead score >= 50 — contacts who engage heavily reach this threshold faster and skip remaining nurture emails
6. On the sales-ready path: creates a deal in the sales pipeline, assigns it to a rep based on round-robin or territory rules, sends the rep a notification with the contact's score breakdown and engagement history
7. Sets a goal of "Deal is Won" so contacts who convert early exit the automation cleanly
**Result**: User has a complete lead nurturing and scoring automation that qualifies leads based on engagement, automatically creates deals for sales-ready contacts, and tracks the entire funnel from first touch to closed deal

### Example 2: CRM pipeline setup with deal automation
**User says**: "We're a B2B SaaS company and want to set up our sales pipeline in ActiveCampaign. Can you help me configure the stages and automate follow-ups?"
**Skill does**:
1. Confirms the user has the CRM add-on (Pipelines or Sales Engagement) — if not, explains the add-on options and pricing ($68/mo for Pipelines, Pro+ for Sales Engagement)
2. Creates a pipeline with stages mapped to their B2B SaaS sales process: "Inbound Lead" (10%), "Discovery Call Scheduled" (20%), "Discovery Completed" (35%), "Proposal/Demo" (55%), "Negotiation" (75%), "Closed Won" (100%), "Closed Lost" (0%)
3. Sets up custom deal fields: Annual Contract Value, Product Tier (Starter/Pro/Enterprise), Decision Maker Name, Expected Start Date, Competitor Mentioned
4. Builds stage-change automations: when a deal moves to "Discovery Call Scheduled", create a task for the rep to send a pre-call questionnaire and add a calendar reminder; when a deal enters "Proposal/Demo", send the contact a personalized case study email based on their industry (using conditional content)
5. Creates a stale-deal automation: if a deal has been in any stage for more than 14 days without activity, notify the deal owner and send the contact a re-engagement email
6. Configures a "Closed Won" automation: tag the contact as "Customer", remove from marketing nurture automations, trigger an onboarding email sequence, notify the customer success team
7. Sets up a "Closed Lost" automation: tag with "Lost Deal" and the loss reason, wait 60 days, then enter a re-engagement nurture sequence
**Result**: User has a fully automated B2B SaaS sales pipeline with stage-based follow-ups, stale-deal alerts, and post-close workflows for both won and lost deals

### Example 3: Conditional content email campaign
**User says**: "I want to send a single email campaign but show different content to different segments — VIP customers should see an exclusive offer, and everyone else should see a standard promotion."
**Skill does**:
1. Creates a campaign targeting the full subscriber list (or a broad segment)
2. In the email designer, adds a conditional content block: condition = "Contact tag contains VIP" — shows a 30% exclusive VIP discount with personalized copy ("As one of our most valued customers...")
3. Adds the else branch: standard 15% promotion with general copy for non-VIP contacts
4. Adds a second conditional block for product recommendations: condition = custom field "Product Interest" equals "Software" shows software products; "Hardware" shows hardware products; default shows best-sellers
5. Inserts dynamic personalization: `%FIRSTNAME%` in the greeting (with fallback "there"), `%CITY%` in a location-relevant line (with fallback that omits the line)
6. Sets up A/B testing with 3 subject line variants: "Your exclusive deal inside", "Don't miss this, %FIRSTNAME%", and a curiosity-driven subject — test with 30% of the list, send winner to 70%
7. Enables predictive sending (Pro+) so each contact receives the email at their optimal engagement time
**Result**: User sends one campaign that dynamically personalizes content, offers, and product recommendations per contact — increasing relevance without creating multiple separate campaigns

## Troubleshooting

### Automation contacts stuck in a wait step and not progressing
**Symptom**: Contacts enter an automation but pile up at a "Wait" step and never move to the next action, even after the wait duration has passed or the wait condition appears to be met.
**Cause**: Most commonly, the wait condition is misconfigured — "Wait until conditions are met" steps require the condition to be checked against live contact data, and if the condition references a field or tag that is not being updated as expected, contacts wait indefinitely. Also, if the automation is set to "Once" entry and the contact previously completed it, they cannot re-enter.
**Solution**: Check the wait step configuration — click on the step and verify the condition logic. For "Wait until conditions" steps, confirm that the referenced field, tag, or score is actually being updated by another automation or manual process. Test by opening a stuck contact's profile, checking their current field values and tags, and comparing against the wait condition. If contacts should be able to re-enter, change the automation's entry setting from "Once" to "Multiple times." For time-based waits, verify the timezone setting matches your expectations.

### Lead scores not updating after contact engagement
**Symptom**: Contacts are opening emails and clicking links, but their lead scores remain at zero or do not increase as expected.
**Cause**: Lead scoring rules must be explicitly configured — ActiveCampaign does not automatically score contacts based on engagement unless you define the rules. Additionally, score adjustments within automations require an explicit "Adjust Score" action step; the scoring model's passive rules and automation-based adjustments are separate systems.
**Solution**: Navigate to Contacts > Scoring and verify your scoring model has rules defined for the engagement types you expect (email opens, clicks, site visits, form submissions). Check that each rule has the correct point value and conditions. If you are using automation-based scoring, verify that your automations include "Adjust Score" action steps at the appropriate points. Note that scoring model rules (passive) run automatically when conditions are met, while automation score adjustments only fire when a contact reaches that step in the automation. Use both for comprehensive scoring.

### Building WhatsApp/SMS cart recovery in external automation tools instead of natively
**Symptom**: User builds a complex multi-step Make or Zapier scenario with webhooks, HTTP modules, and conditional routers to orchestrate WhatsApp cart recovery from ActiveCampaign — e.g., webhook on tag addition, HTTP call to check tags, send WhatsApp template via API, parse button responses, implement delay loops.
**Cause**: They don't realize ActiveCampaign has native WhatsApp and SMS as automation action steps. You can trigger on tag addition, branch with if/else, add wait steps, and send WhatsApp templates all within a single ActiveCampaign automation — no external middleware needed for the core flow.
**Solution**: Build the flow inside ActiveCampaign's automation builder: create an automation triggered by "Tag Added: Abandoned Cart", add an if/else split checking for the "Buyer" tag, send a WhatsApp template message on the appropriate branch, add a wait step (e.g., 48 hours), and loop or exit based on conditions. Reserve Make/Zapier for actions ActiveCampaign can't do natively (updating external databases, triggering non-integrated services, custom reporting). For interactive WhatsApp buttons, use pre-approved WhatsApp message templates with quick-reply or call-to-action buttons configured in your WhatsApp Business account.

### Site tracking not recording visits for known contacts
**Symptom**: The site tracking script is installed on your website, but contact profiles show no page visit data, and site-visit-based automation triggers are not firing.
**Cause**: Site tracking requires the contact to be "identified" — ActiveCampaign associates site visits with a contact only after they click a link in an ActiveCampaign email (which appends a tracking parameter) or are identified via the JavaScript API. Anonymous visits are not attributed to contacts. Additionally, the site tracking code must be installed on every page you want to track.
**Solution**: Verify the site tracking code is installed correctly: check your website's HTML source for the ActiveCampaign tracking snippet (it should be in the `<head>` or before `</body>` on every page). Confirm your account ID in the snippet matches your ActiveCampaign account. To identify contacts, ensure your emails include tracked links (ActiveCampaign adds tracking parameters by default). For contacts who arrive via other channels (direct, organic search), use the JavaScript API to identify them after they submit a form: `vgo('setEmail', 'contact@example.com')`. Check a specific contact's profile to see if any page visits are recorded — if not, send yourself a test email, click a link, browse your site, and verify visits appear on your profile.
