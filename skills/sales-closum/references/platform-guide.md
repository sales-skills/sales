# Closum Platform Guide

## Email Marketing
- **Drag-and-drop editor**: Visual email builder — no HTML required. Prebuilt templates, custom blocks, responsive design
- **Personalization variables**: Dynamic fields (first name, company, custom attributes) inserted into subject lines and body
- **Newsletters**: One-time broadcast sends to selected audience lists or segments
- **Email automations**: Trigger-based email sequences — welcome series, abandoned cart, re-engagement, date-based
- **Real-time reporting**: Opens, clicks, bounces, unsubscribes — per-campaign and aggregate dashboards
- **Send limits**: Zero plan: 1,000/hr; Growth: 5,000/hr; Advanced: 100,000/hr

## SMS Marketing
- **SMS campaigns**: Broadcast text messages to contact lists with scheduling and personalization
- **SMS automations**: Trigger-based SMS — combine with email workflows for multichannel journeys
- **Personalization**: Dynamic fields in SMS body (name, custom attributes)
- **Enriched SMS**: SMS with links, images, or landing page URLs for richer engagement
- **Pricing**: Separate from base plan — from EUR 0.014/SMS

## WhatsApp Marketing
- **Automated messaging**: Send WhatsApp messages as part of automation workflows
- **Intelligent flows**: Branching logic based on user responses — contextual personalization
- **Use cases**: Order confirmations, appointment reminders, promotional campaigns, customer support follow-ups

## Telegram Marketing
- **Automated alerts**: Trigger-based Telegram messages from automation workflows
- **Document/image sharing**: Send files, images, and rich media through Telegram
- **Group management**: Manage Telegram groups and broadcast channels from Closum
- **Use cases**: Product announcements, event notifications, support updates

## Web Push
- **Browser notifications**: Push notifications to subscribers without requiring an app
- **Scheduling**: Set send times or trigger based on user behavior
- **Images**: Rich push notifications with images and custom icons
- **Segmented campaigns**: Target specific audience segments with tailored push content

## Landing Pages & Forms
- **Drag-and-drop builder**: Visual page builder — no coding required
- **Pop-ups**: Timed, exit-intent, or scroll-triggered pop-ups for lead capture
- **Forms**: Embedded forms for newsletters, lead magnets, event registrations
- **Dynamic segmentation**: Auto-tag and segment contacts based on which form or landing page they convert on
- **Plan limits**: Advanced plan includes 15 landing pages; add-on available (EUR 15/mo for 4 additional pages)

## No-Code Automations
- **Workflow builder**: Visual drag-and-drop builder for customer journeys
- **Triggers**: Form submission, tag added, lifecycle stage change, date-based, custom events
- **Actions**: Send email, send SMS, send WhatsApp, send Telegram, add tag, update contact field, wait, condition branch
- **Cross-channel**: Build journeys that span email, SMS, WhatsApp, Telegram, and Web Push in a single workflow
- **Plan limits**: Zero/Growth: 1 automation; Advanced: 5 automations; add-on: EUR 5/mo per 5 additional automations

## AI Assistant
- **OpenAI integration**: Built-in AI for accelerating message creation — subject lines, email copy, SMS text
- **Use cases**: Generate email drafts, rewrite copy for different tones, translate messages, brainstorm subject lines
- **Access**: Available from the message editor across email, SMS, and other channel editors

## Contact Management
- **Unified profiles**: Single contact record aggregating activity across all channels (email, SMS, WhatsApp, Telegram, Web Push)
- **Lifecycle stages**: Customizable stages to track where contacts are in the customer journey
- **Audience lists**: Group contacts into lists for targeted campaigns
- **Segmentation**: Filter and segment by tags, lifecycle stage, engagement, custom fields, form submissions
- **Unlimited contacts**: All plans include unlimited contacts

## Data Model

| Object | Description | Key fields |
|--------|-------------|------------|
| Contact | Unified customer profile | email, phone, name, tags, lifecycle stage, custom fields |
| Audience List | Grouping of contacts for targeting | id, name, contact count |
| Lifecycle Stage | Customer journey position | id, name, order |
| Campaign | Email/SMS/Push broadcast | id, channel, status, audience, scheduled time |
| Automation | No-code workflow | id, name, trigger, steps, status |
| Landing Page | Lead capture page | id, name, URL, form, status |
| Form | Embedded or pop-up lead capture | id, name, type, fields, audience list |

## API Quick Reference

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

## Integrations

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

## Pricing (as of 2026-03, EUR — verify current pricing at closum.com)

| Plan | Price | Emails/mo | Automations | Data retention | Send limit | Landing pages | Team members |
|------|-------|-----------|-------------|----------------|------------|---------------|--------------|
| **Zero (Free)** | EUR 0/mo | 2,500 | 1 | 30 days | 1,000/hr | — | 1 |
| **Growth** | EUR 12/mo | 10,000 | 1 | 30 days | 5,000/hr | — | 1 |
| **Advanced** | EUR 35/mo | 10,000 | 5 | 180 days | 100,000/hr | 15 | 3 |

**All plans**: Unlimited contacts.

**SMS**: Separate pricing from EUR 0.014/SMS.

**Add-ons**: Landing pages (EUR 15/mo for 4 pages), automations (EUR 5/mo per 5 automations), team members (EUR 9/mo per member).
