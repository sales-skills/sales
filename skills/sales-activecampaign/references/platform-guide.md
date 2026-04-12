# ActiveCampaign Platform Guide

## Automations
- **What they are**: Visual workflows triggered by events — email opens/clicks, site visits, purchases, form submissions, deal changes, tag additions/removals, dates, custom events
- **Builder**: ActiveCampaign's visual automation builder is a drag-and-drop canvas where you design workflows using trigger, if/else branching, wait steps (fixed duration or until conditions), goals, split actions, and action nodes
- **Triggers**: Email events (open, click, reply, forward, bounce), site visits (visited URL, time on site), purchases, form submissions, deal changes (stage move, field update, won/lost), tag added/removed, date-based, custom events
- **If/else branching**: Conditional paths based on contact fields, tags, list membership, deal properties, lead score, site visits, email engagement, or custom conditions
- **Wait steps**: Wait a fixed duration, wait until a specific date, or wait until a condition is met (e.g., contact visits a URL or reaches a lead score threshold)
- **Goals**: Define a target action within an automation — contacts who achieve the goal can skip ahead in the automation, and goal completion rates are tracked for reporting
- **Split actions**: A/B split testing within automations — divide contacts into multiple paths (up to 5) and measure which path performs better
- **Key strength**: Most powerful automation engine in the mid-market — deeper conditional logic, more trigger types, and more granular control than most competitors at this price point

## Email Marketing
- **Campaigns**: One-time broadcast sends to lists or segments — schedule or send immediately
- **A/B testing**: Test up to 5 variants of subject line, from name, or email content. Winner selected by open rate or click rate after a test period
- **Conditional content**: Show/hide content blocks within a single email based on contact fields, tags, or custom data — personalize without creating multiple emails
- **Dynamic personalization**: Merge tags for contact fields, deal fields, and custom fields — fallback values for missing data
- **Send time optimization**: Predictive sending (Pro+) analyzes each contact's engagement history and sends at the time they are most likely to engage — optimized per-contact
- **Predictive sending**: Available on Pro plan and above — uses machine learning to determine optimal send times per recipient

## CRM / Deals / Pipelines
- **Pipelines**: Customizable sales pipelines with unlimited stages — drag-and-drop deal cards between stages
- **Deals**: Track deal value, expected close date, assigned owner, custom fields, and associated contacts/organizations
- **Tasks**: Create tasks tied to deals or contacts — due dates, assignments, reminders
- **Win probability**: Automatically calculated based on deal stage and historical conversion rates
- **Sales automation**: Trigger automations when deals change stage, are created, updated, won, or lost — automate follow-ups, task creation, notifications
- **Add-ons**: "Pipelines" add-on ($68/mo, B2C-oriented) and "Sales Engagement" (Pro+, B2B-focused with prospecting, sequences, and engagement tracking)
- **Unlimited pipelines**: All CRM add-ons include unlimited pipelines and stages

## Lead Scoring
- **AI-powered scoring**: Automatically score contacts and deals based on engagement and behavior
- **Multiple models**: Create multiple scoring models per account — e.g., one for email engagement, one for purchase readiness, one per product line
- **Score factors**: Email engagement (opens, clicks, replies), site visits (pages viewed, frequency), form submissions, tag additions, custom field values, deal activity
- **Deal scoring**: Separate scoring for deals based on pipeline activity, task completion, and engagement
- **Automation triggers**: Use lead score thresholds to trigger automations — e.g., when a contact reaches score 50, notify sales or move to a new pipeline stage

## SMS Marketing
- **Automated SMS**: Send SMS messages as steps within automations — triggered by any automation event
- **SMS campaigns**: Broadcast SMS to lists or segments, similar to email campaigns
- **Two-way SMS**: Receive and respond to SMS replies within ActiveCampaign
- **SMS in workflows**: Combine email and SMS in a single automation — e.g., send email, wait 24h, if not opened, send SMS

## WhatsApp
- **WhatsApp channel**: Send WhatsApp messages as automation steps
- **Templates**: Use pre-approved WhatsApp message templates
- **Rich media**: Send images, documents, and interactive buttons via WhatsApp

## Landing Pages
- **Templates**: 56 pre-built landing page templates for lead capture, webinars, product launches, and more
- **Builder**: Drag-and-drop editor with text, image, video, button, form, and custom HTML blocks
- **Form integration**: Embed ActiveCampaign forms directly into landing pages — submissions trigger automations and add to lists
- **Custom domains**: Publish landing pages on your own domain
- **Available on**: Plus plan and above

## Forms
- **Types**: Inline (embedded), floating bar, modal (pop-up), floating box
- **Conditional fields**: Show/hide form fields based on previous answers or contact data
- **Custom CSS**: Full CSS customization for advanced styling
- **Automation triggers**: Form submissions trigger automations, add tags, add to lists, update contact fields
- **Available on**: All plans

## Site Tracking
- **Contact-level tracking**: Track which pages each contact visits on your website — see full browsing history per contact
- **Behavior triggers**: Trigger automations based on site behavior — visited a specific URL, visited any page, time on site, number of visits
- **Setup**: Add ActiveCampaign's site tracking JavaScript snippet to your website — automatically associates visits with known contacts (identified vian email link clicks)
- **Use cases**: Score contacts based on site activity, trigger sales notifications when a lead visits the pricing page, personalize emails based on pages viewed

## Transactional Email
- **Postmark-powered**: ActiveCampaign acquired Postmark in 2022 — transactional email is powered by Postmark as a separate add-on
- **Separate add-on**: Not included in any ActiveCampaign plan — requires a separate Postmark subscription
- **Use cases**: Order confirmations, password resets, shipping notifications, account alerts — any email triggered by a user action that is not marketing
- **Do not confuse**: Marketing automation emails (sent via ActiveCampaign) are different from transactional emails (sent via Postmark add-on)

## Segmentation
- **Tag-based**: Segment contacts by tags — tags can be added manually, via forms, automations, or API
- **List-based**: Contacts belong to one or more lists — segment by list membership
- **Engagement-based**: Segment by email engagement (opened/clicked in last X days), inactive contacts, highly engaged contacts
- **Behavioral**: Segment by site tracking data (visited URL, pages viewed), form submissions, event attendance
- **Custom field-based**: Segment by any custom field value — date fields, dropdowns, text fields, checkboxes
- **Deal-based**: Segment contacts by deal properties — pipeline, stage, value, status (won/lost/open)

## Reporting
- **Campaign analytics**: Opens, clicks, bounces, unsubscribes, forwards, social shares, revenue attribution per campaign
- **Automation reports**: Contacts entered, completed, currently active, goal completion rates, per-step metrics
- **Deal reports**: Pipeline value, win/loss rates, average deal duration, revenue by pipeline/stage/owner
- **Goal tracking**: Define goals within automations and track completion rates over time
- **Custom reports**: Available on Pro+ — build custom reports with filters, date ranges, and multiple metrics
- **Attribution reporting**: Track which campaigns and automations drive conversions and revenue

## AI / Active Intelligence
- **AI campaign suggestions**: AI analyzes your audience and suggests campaign content, subject lines, and send times
- **Audience insights**: AI-powered analysis of your contact base — engagement trends, growth patterns, segment recommendations
- **Predictive content**: Automatically select the best-performing content variant for each contact based on their profile and behavior
- **Predictive sending**: Machine learning determines the optimal send time per contact (Pro+)
- **Autonomous marketing workflows**: AI-assisted automation creation — describe your goal and AI suggests trigger, steps, and conditions

## Conversations (Legacy)
- **Live chat**: Embeddable live chat widget for your website
- **Chatbot**: Rule-based chatbot for automated responses
- **Status**: Being sunset — consider alternatives for live chat needs

## Data model

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

## API quick reference

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

## Integrations

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

## Pricing (USD, as of March 2026 — verify current pricing at activecampaign.com)

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
