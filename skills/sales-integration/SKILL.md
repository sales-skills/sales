---
name: sales-integration
description: "Connect sales tools with webhooks, Zapier/Make, native integrations, and custom API pipelines — CRM sync, event triggers, data mapping, and error handling. Use when connecting Mailshake/Apollo/Salesloft to CRM, setting up webhook pipelines, building Zapier/Make automations for sales workflows, syncing data between tools, or troubleshooting integration issues. Do NOT use for Qwilr-specific automations (use /sales-qwilr-automation), general CRM platform config (use /sales-apollo or /sales-salesloft), or marketing automation flows (use /email-sequence)."
argument-hint: "[describe source tool, destination tool, trigger event, and desired action]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Connect Sales Tools

Help the user design and implement integrations between sales tools — from choosing the right integration method through trigger/action design, field mapping, and error handling. This skill covers webhooks, Zapier/Make, native integrations, and custom API pipelines.

## Step 1 — Gather context

Ask the user:

1. **What are you connecting?**
   - Source tool (where the event happens): Mailshake, Apollo, Salesloft, Smartlead, Lemlist, Yesware, Groove.cm, Mixmax, Reply.io, Woodpecker, Hunter.io, Seismic, Tomba, Prospeo, Seamless.AI, SafetyMails, Closum, Omnisend, Mailchimp, SendGrid, Postmark, Customer.io, Mailgun, Klaviyo, ActiveCampaign, Outscraper, Enrich.so, Minelead, Lobstr.io, GetProspect, Skrapp, OpenWeb Ninja, Anymail Finder, ZeroBounce, Snov.io, ZoomInfo, Brevo, Braze, Iterable, GetResponse, HubSpot, Salesforce, Qwilr, other
   - Destination tool (where the action should happen): Salesforce, HubSpot, Slack, Pipedrive, other
   - Is this one-way or bidirectional?

2. **What should trigger the integration?**
   - A) Email reply received
   - B) New lead captured
   - C) Meeting booked
   - D) Deal stage changed
   - E) Contact created/updated
   - F) Sequence/cadence completed
   - G) Form submission
   - H) Custom event — describe it

3. **What should happen when triggered?**
   - A) Create a record (contact, task, deal, activity)
   - B) Update a record (field change, stage change, owner change)
   - C) Send a notification (Slack, email, SMS)
   - D) Enroll in a sequence/cadence
   - E) Multiple actions — describe

4. **What's your technical comfort level?**
   - A) No-code — Zapier, Make, native integrations only
   - B) Low-code — comfortable with basic API calls, can follow docs
   - C) Code — can build custom integrations with API + webhooks

5. **What's your current stack?** (list all sales/marketing/CRM tools in use)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Integration architecture

Choose the right integration method based on complexity and technical requirements.

### Decision matrix

| Method | Best for | Technical skill | Cost | Reliability |
|--------|----------|----------------|------|-------------|
| **Native integration** | CRM sync, built-in connectors | None | Free (included) | High |
| **Zapier / Make** | Multi-step workflows, no-code | Low | $20-100/mo | High |
| **Webhooks + handler** | Real-time events, custom logic | Medium | Free-low | Medium-high |
| **Custom API pipeline** | Complex transformations, high volume | High | Varies | Depends on implementation |

### Native integrations — always check first

Before building anything custom, check if a native integration exists:

| Tool pair | Native integration? | What it does |
|-----------|---------------------|--------------|
| Mailshake → Salesforce | Yes | Push leads, sync activity |
| Mailshake → HubSpot | Yes | Push leads, sync activity |
| Mailshake → Pipedrive | Yes | Push leads |
| Apollo → Salesforce | Yes (bi-directional) | Full contact/account/deal sync |
| Apollo → HubSpot | Yes (bi-directional) | Full contact/account/deal sync |
| Salesloft → Salesforce | Yes (bi-directional) | Contact/account/activity sync |
| Salesloft → HubSpot | Yes | Activity sync |
| Smartlead → HubSpot | Yes (native) | Push leads, sync activity |
| Smartlead → Salesforce | Via OutboundSync (third-party) | Lead and activity sync |
| Smartlead → Clay | Yes (native) | Enrichment pipeline |
| Lemlist → HubSpot | Yes (native) | Push leads, sync activity |
| Lemlist → Salesforce | Yes (native, 2-way) | Lead and activity sync |
| Lemlist → Pipedrive | Yes (native) | Push leads |
| Yesware → Salesforce | Yes (Enterprise plan, bi-directional) | Email/calendar/activity sync, inbox sidebar |
| Yesware → Gmail | Yes (Chrome extension) | Email tracking, templates, campaigns |
| Yesware → Outlook | Yes (add-in) | Email tracking, templates, campaigns |
| Yesware → Zoom | Yes (native) | Auto-generate meeting links in scheduler |
| Yesware → LinkedIn | Yes (native) | Prospect insights from inbox |
| Mixmax → Salesforce | Yes (Growth+CRM plan) | Inbox sidebar, auto-create leads, activity sync, advanced rules |
| Mixmax → HubSpot | Yes (Growth plan) | Activity sync, list import, sidebar |
| Mixmax → Slack | Yes (native) | Real-time tracking notifications |
| Mixmax → LinkedIn Sales Navigator | Yes (native) | InMail and connection requests in sequences |
| Mixmax → Zoom | Yes (native) | Auto-generate meeting links |
| Reply.io → Salesforce | Yes (native, bi-directional) | Contact/lead sync, email/call/task activity, status sync, custom workflows |
| Reply.io → HubSpot | Yes (native, bi-directional) | Contact sync (auto-sync every 2h), email/call/task activity, status sync, field mappings |
| Reply.io → Pipedrive | Yes (native) | Contact sync, activity logging |
| Woodpecker → HubSpot | Yes (native, with API add-on) | Contact sync, activity logging, deal stage triggers |
| Woodpecker → Pipedrive | Yes (native) | Contact sync, activity logging |
| Woodpecker → Salesforce | Via Zapier | Contact sync, activity logging |
| Woodpecker → Clay | Yes (native) | Enrichment pipeline |
| Woodpecker → Calendly | Yes (native) | Meeting booking from campaigns |
| Kit → Shopify | Yes (native) | Purchase events trigger Kit automations, tag buyers |
| Kit → WooCommerce | Yes (native) | Purchase events, subscriber sync |
| Kit → WordPress | Yes (plugin) | Forms, Elementor, Contact Form 7 integration |
| Kit → Stripe | Yes (required for Commerce) | Payment processing for digital products |
| Kit → Teachable | Yes (native) | Course enrollment triggers, student tagging |
| Kit → Zapier | Yes | 120+ app connections via Zapier |
| Kit → Make | Yes | Automation workflows with Kit triggers/actions |
| Qwilr → Salesforce | Yes | Proposal/quote sync — see `/sales-qwilr-automation` |
| Qwilr → HubSpot | Yes | Proposal/quote sync — see `/sales-qwilr-automation` |
| Seismic → Salesforce | Native | Content recommendations in SF, activity logging, LiveSend tracking, DSR engagement sync |
| Seismic → HubSpot | Native | Content sharing, engagement tracking, CRM data sync for LiveDocs |
| Seismic → Microsoft Dynamics | Native | Content access within Dynamics, activity logging |
| Seismic → Microsoft 365/Teams | Native | Content in Outlook/Teams, Aura AI copilot in Teams |
| Seismic → Slack | Native | Content search and sharing, Aura AI copilot |
| Seismic → Gong | Native | Call recordings access, conversation intelligence enrichment |
| Seismic → Salesloft | Native | Content insertion in sequences, engagement data |
| Seismic → Zoom | Native | Meeting recording, intelligence, content sharing |
| Tomba → HubSpot | Native | Enrich CRM contacts with Tomba email/enrichment data |
| Tomba → Salesforce | Via Zapier | Sync discovered contacts to Salesforce |
| Tomba → Pipedrive | Native | Sync findings to Pipedrive contacts |
| Tomba → Google Sheets | Native (add-on) | Domain search, email finder, verifier in-spreadsheet |
| Tomba → Zapier | Native | 8,000+ app connections — trigger on domain search, email find, enrichment |
| Tomba → Make | Native | Visual automation workflows with Tomba actions |
| Tomba → n8n | Native | Self-hosted automation with Tomba nodes |
| Hunter.io → HubSpot | Native | Push leads, sync activity |
| Hunter.io → Salesforce | Native | Push leads, sync activity |
| Hunter.io → Pipedrive | Native | Push leads |
| Hunter.io → Google Sheets | Native (add-on) | Domain search, email finder, verifier in-spreadsheet |
| Hunter.io → Zapier | Native | Triggers for new leads; actions for domain search, email finder, verifier |
| Prospeo → HubSpot | Native | Enrich CRM contacts with verified emails, phones, firmographic data |
| Prospeo → Salesforce | Native | Keep CRM data clean with enriched contacts and accounts |
| Prospeo → Clay | Native | Automate data enrichment in Clay workflows |
| Prospeo → Smartlead | Native | Push enriched leads to Smartlead campaigns |
| Prospeo → Instantly | Native | Push enriched leads to Instantly campaigns |
| Prospeo → Lemlist | Native | Push enriched leads to Lemlist sequences |
| Prospeo → Zapier | Native | Connect to 8,000+ apps for automated workflows |
| Prospeo → Make | Native | Visual automation workflows with Prospeo actions |
| Prospeo → n8n | Native (community node) | `@prospeo/n8n-nodes-prospeo` for self-hosted automation |
| Seamless.AI → Salesforce | Native (bi-directional) | Push contacts, enrich CRM records, sync activity |
| Seamless.AI → HubSpot | Native (bi-directional) | Push contacts, enrich CRM records, sync activity |
| Seamless.AI → Microsoft Dynamics | Native | Push contacts and enriched data |
| Seamless.AI → Zoho | Native | Push contacts |
| Seamless.AI → Keap | Native | Push contacts |
| Seamless.AI → Pipedrive | Native | Push contacts |
| Seamless.AI → Salesloft | Native | Push contacts to cadences |
| Seamless.AI → Outreach | Native | Push contacts to sequences |
| Seamless.AI → Insightly | Native | Push contacts |
| Seamless.AI → Greenhouse | Native | Push contacts (recruiting) |
| Seamless.AI → Mixmax | Native | Push contacts |
| Seamless.AI → Zapier | Native | Connect to 8,000+ apps |
| SafetyMails → HubSpot | Native | Verify/clean HubSpot contact emails |
| SafetyMails → Mailchimp | Native | Verify subscriber lists before sending |
| SafetyMails → ActiveCampaign | Native | Clean contact lists |
| SafetyMails → SendGrid | Native | Verify sender lists |
| SafetyMails → RD Station | Native | Verify lead emails |
| SafetyMails → Salesforce | Via Zapier | Verify CRM contact emails |
| SafetyMails → Pipedrive | Via Zapier | Verify deal contact emails |
| SafetyMails → Brevo | Native | Clean marketing lists |
| SafetyMails → WordPress | Native (plugin) | Real-time form validation |
| SafetyMails → Zapier | Native | Connect to 8,000+ apps |
| SafetyMails → Make | Native | Visual automation workflows |
| SafetyMails → n8n | Native | Self-hosted automation |
| SafetyMails → Pabbly Connect | Native | Low-cost automation |
| SafetyMails → Pluga | Native | Brazil-focused automation platform |
| Mailchimp → Salesforce | Native | Contact sync, campaign activity, audience sync |
| Mailchimp → HubSpot | Native | Contact sync, list sync, campaign data |
| Mailchimp → Shopify | Native (deep) | E-commerce sync — products, orders, customers, abandoned carts, purchase automations |
| Mailchimp → WooCommerce | Native | E-commerce sync — products, orders, customers |
| Mailchimp → BigCommerce | Native | E-commerce sync |
| Mailchimp → Stripe | Native | Payment and subscription sync for revenue tracking |
| Mailchimp → WordPress | Native (plugin) | Signup forms, contact sync |
| Mailchimp → Zapier | Native | 6,000+ app connections — triggers on subscribe, unsubscribe, campaign sent, etc. |
| Mailchimp → Make | Native | Visual automation workflows |
| Mailchimp → Google Analytics | Native | Campaign tracking, e-commerce attribution |
| Mailchimp → Facebook/Instagram | Native | Ad audiences, retargeting, lead ads sync |
| Mailchimp → Slack | Via Zapier | Notifications on subscribes, campaign sends |
| Mailchimp → Canva | Native | Design emails and assets directly from Mailchimp |
| SendGrid → Salesforce | Via Salesforce Data Cloud | Ingest email engagement data into Data Cloud |
| SendGrid → HubSpot | Via Zapier/Make | Sync email events, contact activity |
| SendGrid → Zapier | Native | Triggers: email delivered, opened, clicked, bounced, unsubscribed. Actions: send email, add to list |
| SendGrid → Make | Native | Email event triggers and actions |
| SendGrid → n8n | Native (community node) | Full API access — contacts, sends, webhooks |
| SendGrid → Segment | Native | Event streaming for customer data platforms |
| SendGrid → WordPress | Native (plugin) | Signup forms, SMTP relay for transactional emails |
| SendGrid → Shopify | Via Zapier/Make | Transactional email for order confirmations, shipping |
| SendGrid → Heroku | Native (add-on) | Provisioned as Heroku add-on — shared account |
| SendGrid → Google Cloud | Native (marketplace) | Marketplace integration for GCP projects |
| SendGrid → Azure | Native (marketplace) | Azure marketplace offering for transactional email |
| Postmark → Zapier | Native | 3 triggers (inbound message, bounce, open) + 2 actions (send email) |
| Postmark → ActiveCampaign | Parent company | Shared infrastructure under ActiveCampaign umbrella |
| Postmark → Heroku | Community | Heroku add-on for transactional email |
| Customer.io → Salesforce | Native (bi-directional) | Data-in: sync CRM records to Customer.io. Data-out: create/update Salesforce objects from Customer.io events |
| Customer.io → Segment | Native (bi-directional) | Data-in: receive Segment events. Data-out: publish metrics to Segment as source |
| Customer.io → Snowflake | Native (reverse ETL) | Sync warehouse data to Customer.io via Data Pipelines |
| Customer.io → BigQuery | Native (reverse ETL) | Sync warehouse data to Customer.io via Data Pipelines |
| Customer.io → Zapier | Native | Triggers on events/messages, actions to add/update people |
| Customer.io → Google Ads | Native | Ad audience sync for retargeting |
| Customer.io → Facebook/Instagram | Native | Ad audience sync for retargeting |
| Customer.io → Twilio | Native | SMS channel — Twilio account required for SMS sends |
| Customer.io → Webhooks | Native | Webhook destination + webhook actions in journeys — POST to any URL |
| Mailgun → Zapier | Native | Triggers: bounce, delivery, inbound email, unsubscribe, log data. Actions: add to mailing list, email validation |
| Mailgun → Webhooks | Native | 8 event types (accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed). HMAC SHA256 signing. 24hr retry. |
| Mailgun → Any (API) | API | RESTful API for all operations — no native CRM connectors. Use Zapier or custom webhook handlers for CRM sync. |
| Outscraper → Google Sheets | Via Zapier | Push scraped Google Maps data, reviews, or contacts to a spreadsheet |
| Outscraper → Salesforce | Via Zapier | Create leads/contacts from scraped Google Maps businesses |
| Outscraper → HubSpot | Via Zapier | Create contacts from Google Maps scraping results |
| Outscraper → Zapier | Native | Trigger on task finished. Actions: Google Maps search, Google News, Amazon reviews |
| Outscraper → n8n | Native | Outscraper node for automated scraping workflows |
| Outscraper → Pipedream | Native | API integration for custom scraping pipelines |
| Outscraper → Any (API) | API | REST API with webhook callbacks — scrape, enrich, validate, and POST results to any endpoint |
| Minelead → Google Sheets | Native | Export lead collections and search results directly to Google Sheets |
| Minelead → Zoho CRM | Native (Enterprise) | Import discovered leads into Zoho CRM records |
| Minelead → HubSpot | Via Zapier | Push discovered contacts to HubSpot CRM via Zapier workflows |
| Minelead → Zapier | Native | 6,000+ app connections — trigger on new lead found, actions for email search and verification |
| Minelead → Any (API) | API | REST API at api.minelead.io/v1 — search, find, validate, manage leads and campaigns programmatically |
| GetProspect → HubSpot | Native | Sync contacts, companies, and lists to HubSpot CRM |
| GetProspect → Salesforce | Native | Sync contacts and companies to Salesforce |
| GetProspect → Pipedrive | Native | Sync contacts and deals to Pipedrive |
| GetProspect → Zoho CRM | Native | Sync contacts and companies to Zoho CRM |
| GetProspect → Outreach | Native | Push enriched contacts into Outreach sequences |
| GetProspect → Salesloft | Native | Push enriched contacts into Salesloft cadences |
| GetProspect → Google Sheets | Native | Export and sync prospect data to Google Sheets |
| GetProspect → Zapier | Native | Connect to 6,000+ apps — triggers on new contact, actions for email finding/verification |
| GetProspect → Notion | Native | Sync prospect data to Notion databases |
| GetProspect → Airtable | Native | Export prospect data to Airtable bases |
| GetProspect → Any (API) | API | REST API at api.getprospect.com — search leads, find emails, verify, manage contacts/lists programmatically |
| Skrapp → HubSpot | Native | Sync enriched contacts and lists to HubSpot CRM |
| Skrapp → Salesforce | Native | Sync enriched contacts to Salesforce |
| Skrapp → Zoho CRM | Native | Sync enriched contacts to Zoho CRM |
| Skrapp → Pipedrive | Native | Sync enriched contacts to Pipedrive |
| Skrapp → Outreach | Native | Push enriched contacts into Outreach sequences |
| Skrapp → Zapier | Native | Connect to 1,000+ apps — triggers on new contacts found |
| Skrapp → Any (API) | API | REST API at skrapp.io/api — email finder, verifier, company info, account/list management. X-Access-Key auth |
| OpenWeb Ninja → Any (API) | API | 30+ REST APIs — Website Contacts Scraper, Email Search, Local Business Data, Web Search, JSearch, Web Unblocker. Per-API subscription via portal or RapidAPI |
| OpenWeb Ninja → RapidAPI | Marketplace | All APIs available on RapidAPI marketplace with X-RapidAPI-Key auth |
| Anymail Finder → Zapier | Via Zapier | Connect to 7,000+ apps via Zapier triggers/actions for email finding |
| Anymail Finder → Make | Via Make | Automate email finding workflows with Make.com scenarios |
| Anymail Finder → n8n | Via n8n | HTTP Request node calling Anymail Finder REST API for automated pipelines |
| Anymail Finder → Any (API) | API | REST API v5.1 at api.anymailfinder.com — find person/company/decision maker emails, verify, bulk search. Authorization header auth. No rate limits |
| ZeroBounce → HubSpot | Native | Validate and clean email lists directly from HubSpot contacts |
| ZeroBounce → Mailchimp | Native | Validate subscriber lists before sending campaigns |
| ZeroBounce → Salesforce | Via Zapier | Validate emails on contact create/update, sync validation results |
| ZeroBounce → ActiveCampaign | Via Zapier | Validate emails in automations, clean lists before sending |
| ZeroBounce → Zapier | Native | 2,000+ app connections — triggers on validation complete, actions for validate/find email |
| ZeroBounce → Any (API) | API | REST API v2 at api.zerobounce.net (+ US/EU endpoints) — validate, batch validate, bulk file upload, email finder, AI scoring, activity data. api_key query param auth. 80K req/hr. 13 SDKs |
| Snov.io → HubSpot | Native | Sync prospects, contacts, and campaign activity bidirectionally |
| Snov.io → Pipedrive | Native | Push prospects and deals, sync activity |
| Snov.io → Salesforce | Native | Contact/lead sync, campaign activity |
| Snov.io → Zoho CRM | Native | Lead and contact sync |
| Snov.io → Close CRM | Native | Contact sync and deal management |
| Snov.io → Freshsales | Native | Lead sync and activity tracking |
| Snov.io → Zapier/Make | Native | 5,000+ app connections — triggers on prospect found, email verified, campaign events |
| Snov.io → Any (API) | API | REST API at api.snov.io (v1+v2) — 33+ endpoints: email finder, verifier, campaigns, prospects, webhooks. OAuth 2.0 Bearer token (1-hr lifespan). 60 req/min |
| Lobstr.io → Google Sheets | Native | Auto-export scraping results to Google Sheets on run completion |
| Lobstr.io → Amazon S3 | Native | Upload structured JSON/CSV results to S3 bucket automatically |
| Lobstr.io → Webhook | Native | 4 events (run.running, run.paused, run.done, run.error) — POST JSON to any URL with 3x retry |
| Lobstr.io → Gmail | Native | Email notifications on run completion or failure |
| Lobstr.io → Make | Native | No-code automation workflows via make.com integration |
| Lobstr.io → Any (API) | API | Async REST API at api.lobstr.io/v1 — create squids, add tasks, start runs, retrieve results as JSON |
| Enrich.so → Zapier | Via Zapier | Trigger on enrichment complete. Actions: enrich email, find LinkedIn profile |
| Enrich.so → n8n | Via n8n | HTTP Request node calling Enrich.so REST API for automated enrichment workflows |
| Enrich.so → Make | Via Make | HTTP module calling Enrich.so API for enrichment automation |
| Enrich.so → Any (API) | API | REST API with bulk enrichment and callback URLs — enrich, search, and POST results to any endpoint |
| ActiveCampaign → Salesforce | Native (bi-directional) | Contact/lead sync, deal sync, activity logging, custom field mapping |
| ActiveCampaign → HubSpot | Via Zapier/Make | Contact sync, deal activity, engagement events |
| ActiveCampaign → Shopify | Native (deep) | Customer sync, order data, abandoned cart automations, purchase triggers |
| ActiveCampaign → WooCommerce | Native (deep) | Customer sync, order data, abandoned cart, product recommendations |
| ActiveCampaign → WordPress | Native (plugin) | Form integration, site tracking, contact sync |
| ActiveCampaign → Facebook Custom Audiences | Native | Sync segments as ad audiences for retargeting |
| ActiveCampaign → Zapier | Native | 900+ app connections — triggers on contact update, deal update, tag added, automation entered |
| ActiveCampaign → Make | Native | Visual automation with ActiveCampaign triggers and actions |
| ActiveCampaign → Slack | Via Zapier | Notifications on deal changes, new contacts, automation events |
| ActiveCampaign → Postmark | Native (parent company) | Transactional email via Postmark — separate reputation from marketing sends |
| Klaviyo → Shopify | Native (deep) | Real-time sync of customers, orders, products, carts, browse events. Bi-directional — Klaviyo segments can sync back to Shopify. |
| Klaviyo → Salesforce CRM | Native | Sync Leads/Contacts to Klaviyo profiles. Map CRM fields to profile properties. |
| Klaviyo → Salesforce Commerce Cloud | Native | Real-time customer and order sync for e-commerce personalization. |
| Klaviyo → BigCommerce | Native | Customer, order, and product sync. |
| Klaviyo → WooCommerce | Native | Customer, order, and product sync via plugin. |
| Klaviyo → Meta (Facebook/Instagram) | Native | Ad audience sync from Klaviyo segments for retargeting. |
| Klaviyo → Google Ads | Native | Ad audience sync from Klaviyo segments. |
| Klaviyo → TikTok | Native | Ad audience sync from Klaviyo segments. |
| Klaviyo → Zapier | Native | Triggers: new subscriber, new event, updated profile. Actions: add to list, track event, update profile. |
| Klaviyo → Webhooks | Native | Flow webhooks (POST in any flow step) + Advanced KDP system webhooks (event-driven, HMAC-SHA256 signed). |
| Omnisend → Shopify | Native (deep) | Product, order, customer, cart, browse event sync. Bi-directional — Omnisend segments available for targeted campaigns. |
| Omnisend → WooCommerce | Native (plugin) | Product, order, and customer sync via WordPress plugin. |
| Omnisend → BigCommerce | Native | Product, order, and customer sync. |
| Omnisend → Wix | Native | Contact and order sync. |
| Omnisend → Google Ads | Native | Audience sync from Omnisend segments for retargeting. |
| Omnisend → Facebook/Meta Ads | Native | Audience sync from Omnisend segments for retargeting. |
| Omnisend → Zapier | Native | Triggers: new subscriber, new order. Actions: add/update contacts. |
| Omnisend → Make | Native | Automation scenarios with Omnisend triggers and actions. |
| Omnisend → Smile.io | Native | Loyalty program data sync. |
| Omnisend → Gorgias | Native | Customer support data sync. |
| Closum → Salesforce | Native | Contact sync, field mapping, lifecycle stage mapping |
| Closum → Pipedrive | Native | Contact sync |
| Closum → Zoho | Native | Contact sync |
| Closum → Bitrix24 | Native | Contact sync |
| Closum → Shopify | Native | E-commerce contact and order sync |
| Closum → WooCommerce | Native | E-commerce contact and order sync |
| Closum → Stripe | Native | Payment and subscription sync |
| Closum → Zapier | Native | Connect to 600+ apps |
| Closum → Google Sheets | Native | Contact and data sync |
| Closum → Facebook/Meta | Native | Lead ads, audience sync |
| Closum → Slack | Native | Notifications and alerts |
| Closum → OpenAI | Native | AI assistant for message creation |
| Closum → Apollo | Native | Contact sync |
| ZoomInfo → Salesforce | Native app (bi-directional) | Contact/account/lead/opportunity sync, enrich on create |
| ZoomInfo → HubSpot | Native | Contact/company sync, enrichment, intent data, FormComplete |
| ZoomInfo → Microsoft Dynamics | Native | Contact/account sync, enrichment, intent alerts |
| ZoomInfo → Marketo | Native | Lead enrichment, audience sync, FormComplete |
| ZoomInfo → Pardot | Native | Lead enrichment, scoring integration |
| ZoomInfo → Salesloft | Native | Push contacts to cadences from ZoomInfo |
| ZoomInfo → Outreach | Native | Push contacts to sequences from ZoomInfo |
| ZoomInfo → Slack | Native | Intent alerts, Scoops notifications |
| ZoomInfo → Zapier | Connector | Trigger on new contacts/companies, enrich records |

**Rule**: If a native integration covers your use case, use it. Native integrations handle auth, retry, and error handling automatically. Only go custom when native doesn't support your specific trigger or action.

## Step 3 — Common integration patterns

### Lead/reply → CRM record + notification

**Trigger**: Reply received in Mailshake/Apollo/Salesloft
**Actions**:
1. Create or update contact in CRM
2. Create activity/task on the contact record
3. Send Slack notification to rep

**Implementation options**:
- Zapier: Trigger = Mailshake "Reply Received" → Actions = Salesforce "Create Task" + Slack "Send Message"
- Webhook: Mailshake push event (Reply) → your endpoint → Salesforce API + Slack API
- Native: Mailshake-Salesforce integration (auto-syncs replies as activities)

### Meeting booked → CRM + sequence exit

**Trigger**: Meeting booked (Calendly, Chili Piper, or CRM scheduler)
**Actions**:
1. Update contact status/stage in CRM
2. Remove from active sequence/cadence
3. Create deal/opportunity
4. Notify AE

### CRM status change → sequence enrollment

**Trigger**: Lead status changes to "MQL" in CRM
**Actions**:
1. Enroll contact in outbound sequence (Apollo, Salesloft, Mailshake)
2. Assign to appropriate rep based on routing rules

**Implementation options**:
- **Zapier/Make (no-code)**: HubSpot "Lifecycle Stage Change" trigger → Apollo "Add Contact to Sequence" action. Easiest setup, handles auth automatically.
- **CRM webhook + custom API (low-code)**: HubSpot workflow triggers webhook → your endpoint calls Apollo `POST /contacts/add_to_emailer_campaign`. More control over field mapping, error handling, and conditional logic.
- **Native CRM workflow (if supported)**: Some CRM-to-engagement-tool integrations support enrollment triggers natively — check Settings > Integrations before building custom.

**Error handling for sequence enrollment**:
- **Duplicate contact**: Check if contact already exists in the engagement tool before creating — use "Find or Create" logic
- **Already enrolled**: The API may reject enrollment if the contact is active in another sequence — handle gracefully (log, skip, or queue for later)
- **Sequence capacity / enrollment limits**: Sequences may have max enrollment caps or daily add limits. Monitor the API response for limit errors and implement a retry queue for overflow.
- **Re-qualification**: If a lead was previously disqualified and re-enters MQL, decide whether to re-enroll or skip (prevent spamming the same contact)

### Deal stage change → stakeholder notification

**Trigger**: Deal moves to "Proposal Sent" or "Negotiation" in CRM
**Actions**:
1. Notify relevant stakeholders in Slack
2. Create follow-up task for rep
3. Trigger proposal creation in Qwilr (see `/sales-qwilr-automation`)

### Multi-tool activity sync

**Trigger**: Any activity logged in engagement tool (email sent, call made, meeting held)
**Action**: Sync activity to CRM as a completed task/activity

**Key considerations**:
- Define sync direction (one-way vs bidirectional)
- Map fields between tools (Salesloft "Call" → Salesforce "Task" with type "Call")
- Handle duplicates (check if activity already exists before creating)

## Step 4 — Platform webhook reference

### Mailshake webhooks
- **Setup**: API endpoint `/push/create` with `targetUrl` and `event`
- **Events**: Sent, Open, Click, Reply, LeadCatcher, Bounce, Unsubscribe
- **Payload**: JSON with event type, recipientID, campaignID, timestamp, event-specific data
- **Full reference**: See `/sales-mailshake` → `references/mailshake-api-reference.md`

### Apollo webhooks
- **Setup**: Settings > Integrations > Webhooks
- **Events**: Contact created, contact updated, sequence enrollment, sequence completion, email bounced
- **Note**: Apollo's webhook support is more limited than Mailshake's. For complex automations, use the REST API with polling.

### Salesloft webhooks
- **Setup**: Settings > Integrations > Webhooks (admin only)
- **Events**: Person created/updated, cadence step completed, email bounced, call logged
- **Note**: Salesloft also offers a robust REST API for building custom integrations

### Smartlead webhooks
- **Setup**: API endpoint `POST /webhooks` with `url` and `event_type`
- **Events**: LEAD_REPLIED, LEAD_INTERESTED, LEAD_UNSUBSCRIBED, EMAIL_SENT, EMAIL_OPENED, EMAIL_CLICKED, EMAIL_BOUNCED
- **Payload**: JSON with event_type, timestamp, and data object (lead_id, campaign_id, email, event-specific fields)
- **Full reference**: See `/sales-smartlead` → `references/smartlead-api-reference.md`

### Lemlist webhooks
- **Setup**: API endpoint `POST /api/webhooks` with `url` and event configuration
- **Events**: Reply, open, click, bounce, unsubscribe, lead interested, lead not interested
- **Rate limits**: 20 requests per 2 seconds on all API endpoints
- **Full reference**: See `/sales-lemlist` → `references/lemlist-api-reference.md`

### Groove.cm webhooks
- **Setup**: GrooveSell product settings > Webhooks
- **Events**: Sale, Refund, Failed Rebill, Cancellation
- **Payload**: JSON with event type, product, customer, and transaction data
- **Note**: Groove.cm has no public REST API. For integrations beyond webhooks, use Zapier (triggers/actions for GrooveMail and GrooveSell).
- **Full reference**: See `/sales-groove`

### Yesware integrations
- **No public API**: Yesware does not offer a public REST API. No webhook endpoints, no developer docs.
- **Integration methods**: Native connectors only — Salesforce (Enterprise plan), Gmail, Outlook, Zoom, LinkedIn, Clari, DocSend
- **Zapier**: Limited Zapier support — check Zapier for available triggers/actions (may be community-built, not official)
- **For custom integrations**: No programmatic access. If you need Yesware data in other tools, the Salesforce integration (Enterprise plan) is the best bridge — sync Yesware activity to Salesforce, then integrate Salesforce with other tools.
- **Workaround**: For teams needing API access, consider Salesloft, Apollo, or Mailshake which all offer full REST APIs.

### Reply.io webhooks
- **Setup**: API endpoint `POST /webhooks` or via Settings > Integrations > Webhooks in dashboard
- **Events**: Contact replied, email sent, email opened, email clicked, email bounced, contact status changed, task created (specific event types available via `GET /webhook-events`)
- **Delivery management**: API endpoints for managing webhook delivery, retries, and failures
- **API versions**: V3 (beta) has full webhook management; V1/V2 have basic webhook support
- **Full reference**: See `/sales-reply` → `references/reply-api-reference.md`

### Woodpecker webhooks
- **Setup**: API endpoint or via Settings > Integrations > Webhooks in dashboard
- **Events**: Prospect replied, email sent, email opened, email clicked, email bounced, prospect status changed, prospect interested (specific events via webhook management endpoints)
- **API access**: Requires API & integrations add-on (€20/mo)
- **Rate limits**: Same as main API — 1 concurrent request, queue of 6
- **Full reference**: See `/sales-woodpecker` → `references/woodpecker-api-reference.md`

### Mixmax rules (webhooks)
- **Setup**: Dashboard at app.mixmax.com/dashboard/rules or API `POST /rules` with trigger and actions
- **Trigger types**: IF/THEN rules on email events (open, click, reply), Salesforce object changes (new/updated opportunities, accounts, custom objects), date fields, lead owner changes
- **Action types**: Webhook call, Salesforce record update, sequence enrollment, task creation, Slack notification
- **Advanced rules**: Growth+CRM plan — trigger on Salesforce objects, use complex logic (AND/OR conditions)
- **API**: `GET/POST /rules`, `PATCH/DELETE /rules/:id`, `POST/GET /rules/:id/actions`
- **Note**: Mixmax rules are more of an automation engine than simple webhooks — they combine triggers and actions with conditional logic. For simple webhook forwarding, create a rule with a webhook action.

### Hunter.io integrations
- **Native CRM**: HubSpot, Salesforce, Pipedrive — push leads and sync activity directly from Hunter.
- **Google Sheets**: Add-on for running Domain Search, Email Finder, and Email Verifier directly in spreadsheets.
- **Zapier**: Triggers for new leads found; actions for domain search, email finder, and verifier.
- **Campaigns webhooks**: Configure webhook URLs in campaign settings for email sent, opened, clicked, replied, and bounced events.
- **MCP Server**: Official `hunter-mcp` Python package for AI agent integration via Model Context Protocol.
- **API-first**: For custom pipelines, use the REST API — `api_key` query parameter, `X-API-KEY` header, or Bearer auth. See `/sales-hunter` for full API reference.

### Prospeo integrations
- **No webhook support**: Prospeo does not appear to support webhook event subscriptions. Integrations are push-based (native CRM connectors) or pull-based (API polling).
- **Native CRM**: HubSpot and Salesforce native integrations handle enrichment sync automatically.
- **Automation platforms**: Zapier, Make, and n8n have Prospeo actions for enrichment workflows.
- **MCP Server**: Official `@prospeo/mcp-server` npm package for AI agent integration via Model Context Protocol.
- **API-first**: For custom pipelines, use the REST API directly — all POST endpoints with `X-KEY` auth. See `/sales-prospeo` for full API reference.

### Tomba webhooks
- **Setup**: Pass `webhook_url` parameter on supported API endpoints (domain search, email finder, enrichment, LinkedIn finder, author finder, bulk operations)
- **Events**: Async result delivery — when a lookup or bulk job completes, Tomba POSTs results to your webhook URL
- **Plan requirement**: Webhooks require Pro plan or above
- **Note**: Tomba's webhook model is callback-based (per-request), not event-subscription-based. You provide a URL on each API call rather than registering a persistent webhook endpoint.

### Seamless.AI webhooks
- **Setup**: Configure webhook URLs for async research result delivery
- **Events**: Contact research completed, company research completed — results POSTed to your webhook URL when enrichment finishes
- **Pattern**: Callback-based — Seamless.AI POSTs enriched data when research completes, rather than event-subscription-based
- **API-first**: For custom pipelines, use the REST API with research/poll endpoints or webhook callbacks. See `/sales-seamless` for full API reference.

### SafetyMails integrations
- **No public REST API or webhook support**: SafetyMails does not offer documented REST API endpoints or webhook event subscriptions for custom pipelines.
- **Real-time API**: JavaScript embed for form validation — not a REST API. Validates emails on web forms in <1 second.
- **Integration method**: Native connectors (HubSpot, Mailchimp, ActiveCampaign, SendGrid, RD Station, Brevo, Pipedrive, WordPress) and automation platforms (Zapier, Make, n8n, Pabbly Connect, Pluga).
- **For custom pipelines**: Use Zapier/Make as the bridge — trigger on list upload completion or schedule periodic verification runs. No direct API-to-API integration available.

### Mailchimp webhooks
- **Marketing API webhooks**: Configure per-audience at `/lists/{list_id}/webhooks`. Events: subscribe, unsubscribe, profile update, cleaned (bounced), email change, campaign sent.
- **Transactional API (Mandrill) webhooks**: Configure at `/webhooks/add`. Events: send, deferral, hard_bounce, soft_bounce, delivered, open, click, spam, unsub, reject. Payload format: POST with `mandrill_events` JSON parameter.
- **Setup**: Marketing webhooks via API or Audience > Settings > Webhooks in the dashboard. Transactional webhooks via Mandrill dashboard or API.
- **Two separate APIs**: Marketing API (`https://<dc>.api.mailchimp.com/3.0/`) and Transactional API (`https://mandrillapp.com/api/1.0/`) have completely independent webhook systems.
- **300+ native integrations**: Shopify, WooCommerce, Salesforce, HubSpot, WordPress, Canva, Google Analytics, Facebook, Instagram, Zapier, Make, and many more.

### Omnisend integrations
- **API**: Base URL `https://api.omnisend.com/api/`, API key auth (`X-API-KEY` header), header-based versioning (`Omnisend-Version: 2026-03-15`). Cursor-based pagination. Endpoints: Contacts, Products, Product Categories, Campaigns, Events, Segments, Brands, Batches, Email Content, Images, Analytics.
- **Webhooks**: Supported — configure in Store Settings → Webhooks. Event types and payload details vary; consult Omnisend API docs for current webhook documentation.
- **Native ecommerce**: Shopify (deep — products, orders, carts, customers, browse events), WooCommerce (plugin), BigCommerce, Wix, Ecwid. These are the primary integration path — most Omnisend features depend on ecommerce data sync.
- **Ad platforms**: Google Ads and Facebook/Meta Ads audience sync from Omnisend segments.
- **Reviews & loyalty**: Loox, Judge.me, Yotpo, Stamped (reviews), Smile.io, LoyaltyLion (loyalty).
- **Support**: Gorgias, Zendesk.
- **Automation platforms**: Zapier (triggers: new subscriber, new order; actions: add/update contacts), Make.
- **For custom pipelines**: Use the REST API for contact sync, product catalog sync, event tracking, and campaign management. The Events API enables custom ecommerce platforms to trigger automations without a native integration.

### Closum integrations
- **API**: Base URL `https://api.closum.com/api`, Bearer token auth. Known endpoints: `GET /audience-list`, `GET /contact-lifecycle-stage/`, `POST /lead-audience-list`. Full endpoint list not publicly documented.
- **No webhook support documented**: No webhook event subscriptions or callback URLs found in available documentation.
- **Native connectors**: Salesforce, Pipedrive, Zoho, Bitrix24, Shopify, WooCommerce, Stripe, PayPal, Google Sheets, Slack, Facebook/Meta, Apollo, and more.
- **Automation platforms**: Zapier (600+ apps), plus native integrations with form tools (Tally, Typeform) and productivity tools (Notion, Asana, ClickUp).
- **For custom pipelines**: Use the API for contact management (add leads to audience lists) or Zapier as the bridge for event-driven workflows. Full API documentation may be available via the Postman collection at developers.closum.com.

### Postmark webhooks
- **7 webhook types**: Bounce, Delivery, Open, Click, SpamComplaint, SubscriptionChange, Inbound. Configure per-server in Settings > Webhooks or via API (`POST /webhooks`).
- **Inbound email parsing**: Receive incoming emails as structured JSON POST — From, To, Subject, TextBody, HtmlBody, Headers[], Attachments[]. Use for reply parsing, support tickets, forum comments.
- **Retry schedule**: Bounce & Inbound retry aggressively (1min → 6hr over 10 attempts). Click/Open/Delivery retry briefly (1min, 5min, 15min). 403 response stops retries.
- **HTTP auth**: Embed credentials in webhook URL (`https://user:pass@example.com/webhook`). HTTPS strongly recommended.
- **Zapier integration**: 3 triggers (new inbound message, bounced email, message opened) + 2 actions (send transactional email). Webhook-based — requires minimal setup.
- **No native CRM integration**: Postmark is API-first. Use Zapier or build custom webhook handlers for CRM sync. No native Salesforce/HubSpot connector.

### Outscraper webhooks
- **Webhook callback pattern**: Pass `webhook=https://your-url.com/callback` as a parameter on any async API endpoint. When the scraping task completes, Outscraper POSTs the full JSON results to your URL.
- **Supported on all scraping endpoints**: Google Maps search, reviews, photos, emails & contacts, contacts & leads, company insights, Amazon, Yelp, Trustpilot, G2, and all other scraping services.
- **No event-based webhooks**: Outscraper doesn't fire webhooks on events like "new review found" — it's a task-completion callback pattern. The webhook fires once when the entire scraping task finishes.
- **Zapier integration**: Trigger on task finished. Actions: search Google Maps, search Google News, extract Amazon reviews. Use Zapier as the bridge to CRM, spreadsheets, or outbound tools.
- **n8n integration**: Native Outscraper node for self-hosted automation workflows.

### Minelead webhooks
- **No event-based webhooks documented**: Minelead does not appear to support real-time webhook notifications. The API is request/response based — you call endpoints and get results synchronously.
- **Zapier integration**: Connect via Zapier for automated workflows — trigger email searches from CRM events, push verified leads to downstream tools. 6,000+ app connections available.
- **Google Sheets native**: Direct export to Google Sheets for simple automation without code.
- **Zoho CRM native**: Enterprise-tier feature for direct CRM lead import.
- **API polling**: Use `GET /v1/history` to poll for recent search activity if you need to track operations programmatically.

### GetProspect integrations
- **No webhook support documented**: GetProspect's API does not include webhook endpoints. Use polling via the API or Zapier triggers for event-driven workflows.
- **Native CRM integrations**: HubSpot, Salesforce, Pipedrive, Zoho — direct two-way sync of contacts and companies.
- **Sales engagement**: Native connectors for Outreach and Salesloft — push enriched contacts directly into sequences/cadences.
- **Zapier**: Connect to 6,000+ apps. Triggers on new contacts found. Actions for email finding and verification.
- **Google Sheets / Notion / Airtable**: Native export and sync for spreadsheet/database workflows.
- **Gmail / Outlook**: Connect email accounts for sending cold email sequences directly from GetProspect.
- **API**: REST API at api.getprospect.com — search leads, find/verify emails, manage contacts/companies/lists. API key auth. Still under development — some endpoints may change.

### Skrapp integrations
- **No webhook support documented**: Skrapp does not offer webhooks. Use Zapier triggers or API polling for event-driven workflows.
- **Native CRM integrations**: HubSpot, Salesforce, Zoho, Pipedrive, Outreach — sync enriched contacts directly to CRM.
- **Zapier**: Connect to 1,000+ apps. Trigger on new contacts found, actions for email finding.
- **Chrome Extension**: LinkedIn and Sales Navigator integration for extracting leads directly from browser. Processes 25 profiles/second.
- **API**: REST API at skrapp.io/api — email finder, email verifier, company info, account and list management. X-Access-Key header auth. API access requires Professional+ plan.
- **Export**: CSV/XLSX export from any list. Direct CRM sync available for supported platforms.

### OpenWeb Ninja integrations
- **API-only platform**: OpenWeb Ninja is a developer API stack — no native CRM integrations, no Zapier connector, no webhooks. All integration is via direct REST API calls.
- **30+ REST APIs**: Each API is a separate product with its own subscription, endpoints, and rate limits. Sales-relevant: Website Contacts Scraper, Email Search, Local Business Data, Social Links Search, Real-Time Web Search, JSearch, Web Unblocker.
- **RapidAPI marketplace**: All APIs available on RapidAPI with `X-RapidAPI-Key` header authentication. Alternative to the direct portal.
- **Direct portal**: Access via app.openwebninja.com. Auth method via portal's own API key system.
- **Code samples**: JavaScript/Node.js, Python, Java, Ruby, cURL available for all APIs.
- **Custom integration required**: Build your own pipeline — API call → parse JSON response → push to CRM/outbound tool. No pre-built connectors.

### Anymail Finder integrations
- **Webhook support**: Pass `x-webhook-url` header on any API request to receive async results via POST. Especially useful for bulk searches and slow real-time lookups (180s timeout).
- **Make.com**: Native integration for automated email finding workflows — trigger on new contacts in CRM, find email via Anymail Finder, update CRM record.
- **Zapier**: Connect to 7,000+ apps. Triggers and actions for email finding and verification.
- **n8n**: Use HTTP Request node to call Anymail Finder's REST API v5.1 endpoints for self-hosted automation.
- **API**: REST API v5.1 at `api.anymailfinder.com` — find person/company/decision maker emails, find by LinkedIn URL, verify emails, bulk search (100K rows), GeoLead Finder. `Authorization` header with API key. No rate limits — requests queued and auto-scaled.
- **Chrome Extension**: Browser-based email finding from any website. Requires login to anymailfinder.com.

### Lobstr.io webhooks
- **4 event types**: `run.running` (run begins/resumes), `run.paused` (execution halts due to account limits), `run.done` (run finishes without errors), `run.error` (run crashed with error).
- **Payload**: JSON with `id` (run hash), `object` ("run"), `event` (event type), `squid` (object with `id` and `name`), `timestamp` (UTC YYYY/MM/DD HH:MM:SS).
- **Setup**: `POST /v1/delivery?squid={squid_hash}` with `webhook_fields.url`, `webhook_fields.is_active`, `webhook_fields.events` (per-event booleans), `webhook_fields.retry` (boolean).
- **Retry**: Up to 3 attempts with 15-minute delay between retries. Endpoint must respond with HTTP 200/201/202 within 30 seconds.
- **Other delivery methods**: Google Sheets (native auto-export), Amazon S3, SFTP, Gmail notifications. Configure via dashboard or API.
- **Make integration**: Native make.com integration for no-code automation workflows triggered by scraping results.
- **Coming soon**: HubSpot, Slack, Zapier, Airtable integrations announced but not yet available.

### Enrich.so webhooks
- **Bulk enrichment callbacks**: When submitting bulk enrichment jobs via API, provide a `callback_url` parameter. Enrich.so POSTs the enriched results as JSON when the batch completes.
- **No event-based webhooks**: Enrich.so is a request/response enrichment API — no real-time event webhooks. Use polling or callback URLs for async bulk operations.
- **Zapier integration**: Available via Zapier for triggering enrichment from other tools (e.g., new CRM contact → enrich via Enrich.so → update CRM record).
- **n8n / Make**: Use the HTTP Request node (n8n) or HTTP module (Make) to call Enrich.so's REST API endpoints. Chain with other nodes for automated enrichment pipelines.

### ActiveCampaign webhooks
- **25+ event types**: subscribe, unsubscribe, update (contact updated), click, open, sent_mail, reply, bounce, forward, share, deal_add, deal_update, deal_task_add, deal_task_complete, deal_pipeline_add, deal_stage_change, contact_note_add, account_add, account_update, contact_tag_added, contact_tag_removed, automation_before_action, sms_reply, sms_sent, sms_unsub. Configure in Settings > Developer > Webhooks or via API (`POST /api/3/webhooks`).
- **Payload**: Form-encoded POST with event type (`type`), date, and relevant object data (contact ID, deal ID, list ID, tag, automation name). Not JSON by default — parse as form data.
- **Multiple webhook URLs**: Configure different webhook URLs for different event types. Each webhook subscription can listen to one or more event types.
- **Automation webhooks**: Add "Send Webhook" action inside any automation to POST custom JSON to any URL when a contact reaches that step. Use for real-time CRM updates, Slack notifications, or triggering external workflows mid-automation.
- **No built-in signing**: ActiveCampaign webhooks don't include HMAC signing. Secure endpoints with secret tokens in the URL path or verify the source IP range.
- **900+ native integrations**: Salesforce (deep, bi-directional), Shopify, WooCommerce, WordPress, BigCommerce, Stripe, PayPal, Facebook, Google Analytics, Unbounce, Typeform, Calendly, Zapier, Make, and many more.

### Klaviyo webhooks
- **Flow webhooks**: Add a webhook action to any flow step — POST JSON with event/profile data to your endpoint URL when a profile reaches that step. Available on all plans. Use for CRM updates, Slack notifications, or triggering external actions mid-flow.
- **Advanced KDP system webhooks**: Event-driven webhooks for email events (received, opened, clicked, marked spam), SMS events, review events, consent events. HMAC-SHA256 signed. Managed via Webhooks API (`POST /api/webhooks/`). Enterprise-only (Advanced KDP required).
- **350+ native integrations**: Deep Shopify integration (real-time sync), BigCommerce, WooCommerce, Adobe Commerce, Salesforce CRM/Commerce Cloud, Meta, Google Ads, TikTok, Stripe, ReCharge, Yotpo, Gorgias, Zendesk.
- **Zapier integration**: Triggers on new subscriber, new event, updated profile. Actions to add to list, track event, update profile.
- **JSON:API format**: All API responses follow JSON:API spec with relationships, filtering, sparse fieldsets, and cursor-based pagination.

### Mailgun webhooks
- **8 event types**: accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed. Configure per-domain via dashboard (Sending > Webhooks) or API (`POST /v3/domains/{domain}/webhooks`).
- **Payload**: JSON with `signature` (timestamp, token, signature for HMAC verification), `event-data` (event type, recipient, message headers, timestamp, delivery-status, user-variables, tags).
- **Webhook signing**: HMAC SHA256 — verify payloads using your webhook signing key (available in dashboard under Settings > API Keys). Always verify in production.
- **Retry schedule**: Automatic retry with exponential backoff for up to 24 hours on non-2xx responses.
- **Inbound routing**: Configure routes (`POST /v3/routes`) to forward incoming emails to HTTP endpoints as structured JSON — includes From, To, Subject, body-plain, body-html, attachments (base64-encoded). Custom parsing with regex/JSONPath expressions.
- **Zapier integration**: Triggers for bounce, delivery, inbound, unsubscribe, log data. Actions for mailing list management and email validation. No native CRM connectors — use Zapier as bridge.

### Customer.io webhooks
- **Reporting webhooks**: Configured in Settings > Workspace Settings > Reporting Webhooks. Events: email delivered, opened, clicked, bounced, dropped, unsubscribed, spam_complaint, converted. Payload: JSON with `event_type`, `data` (customer_id, delivery_id, campaign_id, timestamp, metadata).
- **Workflow webhooks**: Add a "Send Webhook" action inside any Journey to POST JSON to any URL when a customer reaches that step — use for CRM updates, Slack notifications, or triggering external actions mid-workflow.
- **Data Pipelines**: Reverse ETL from Snowflake/BigQuery into Customer.io. Forward data to 100+ destinations (Salesforce, Segment, Google Ads, Facebook).
- **Native integrations**: Salesforce (bi-directional contact/lead sync), Segment (bi-directional), Twilio (SMS), Zapier (triggers: new/updated person, event tracked, message sent; actions: create/update person, track event).
- **API-first architecture**: Track API (100 req/sec) for ingesting data, App API (10 req/sec) for reading, Transactional API (100 req/sec) for triggered messages.

### SendGrid webhooks
- **Event Webhooks**: Configure at Settings > Mail Settings > Event Webhooks or via API (`POST /v3/user/webhooks/event/settings`). Events: processed, dropped, delivered, deferred, bounce, open, click, spam_report, unsubscribe, group_unsubscribe, group_resubscribe. Payload: JSON array of event objects with email, timestamp, event type, sg_message_id, and event-specific fields.
- **Inbound Parse**: Receive incoming emails as structured POST data. Configure a subdomain MX record pointing to SendGrid, then set the parse webhook URL. Receives: from, to, subject, text, html, attachments, envelope, SPF/DKIM results.
- **Signed webhooks**: Enable ECDSA signature verification for Event Webhooks — validates payload authenticity. Public key available via API (`GET /v3/user/webhooks/event/settings/signed`).
- **Up to 5 Event Webhooks**: Pro plan supports up to 5 simultaneous webhook endpoints (Essentials: 2, Free Trial: 1).
- **353 partner integrations**: Mostly API-driven — no deep native CRM integration. Use Zapier/Make as the bridge for event-driven workflows, or build custom pipelines using the Event Webhook + destination API.

### Iterable Smart Ingest, webhooks & integrations
- **Smart Ingest** (co-built with Hightouch): Sync data from 23+ sources (Snowflake, BigQuery, Redshift, Databricks, PostgreSQL, S3) directly into Iterable. Sync types: Users, Events, Catalog items, Lists. Up to every 15 minutes. Configure at Integrations > Smart Ingest.
- **Snowflake Secure Data Sharing**: Export Iterable data (user profiles, campaigns, events) to your Snowflake account. No ETL required — uses Snowflake's native data sharing. Bidirectional when combined with Smart Ingest.
- **System webhooks**: Events — email send/open/click/bounce/complaint/unsubscribe, push send/open/bounce, SMS send/bounce/received, in-app send/open/click, web push send/open, list subscribe/unsubscribe, user profile update. Configure at Integrations > System Webhooks. Auth: None, Basic, or OAuth 2.0.
- **Journey webhooks**: Webhook tile in Studio — call any external API at any point in a journey with Handlebars-templated request bodies.
- **Native integrations**: Shopify (product sync, cart events, purchase tracking, catalog sync), Segment, Hightouch, Movable Ink, Facebook Custom Audiences, Google Ads, Mixpanel, Amplitude.
- **REST API**: Full API for users, events, campaigns, catalogs, lists, templates, experiments. `Api-Key` header auth. Base URLs: `api.iterable.com` (US), `api.eu.iterable.com` (EU).
- **Zapier**: Triggers and actions for user updates, event tracking, campaign management.
- **SDKs**: iOS (Swift), Android (Kotlin/Java), React Native, Web (JavaScript) — for push, in-app, Mobile Inbox, Embedded Messages, and client-side event tracking.

### Braze Currents, CDI & Alloys integrations
- **Currents (data streaming)**: Real-time event streaming to data warehouses and analytics tools. Events: email sends/deliveries/opens/clicks/bounces, push sends/opens, in-app impressions/clicks, Content Card impressions/clicks/dismissals, SMS sends/deliveries, purchases, custom events, session starts. Destinations: Snowflake, Amazon S3, Google Cloud Storage, Azure Blob, Mixpanel, Amplitude, mParticle, Segment, and more.
- **Cloud Data Ingestion (CDI)**: Sync data from your data warehouse into Braze — import user attributes, events, and purchases from Snowflake, BigQuery, Redshift, or Databricks. Configure in Settings > Data Settings > Cloud Data Ingestion.
- **Braze Alloys (technology partners)**: 170+ pre-built integrations across categories: analytics (Amplitude, Mixpanel, Segment), attribution (Adjust, AppsFlyer, Branch), CDP (mParticle, Segment, Tealium), CRM (Salesforce — via Braze native connector), e-commerce (Shopify), data warehouse (Snowflake Data Sharing), and more.
- **REST API**: Full API for user data (`/users/track`, `/users/identify`, `/users/delete`), messaging (`/messages/send`, `/campaigns/trigger/send`, `/canvas/trigger/send`), segments, catalogs, and more. Bearer token auth. Rate limit: 250,000 requests/hour.
- **Webhooks in Canvas/Campaigns**: Configure outbound webhook steps in Canvas Flow or Campaigns to call any external API when users reach that step — trigger CRM updates, Slack notifications, or custom backend actions.
- **Connected Content**: Pull data from external APIs at email send time for real-time personalization (product recommendations, pricing, inventory).
- **SCIM provisioning**: Automated user provisioning and deprovisioning via SCIM 2.0 (Okta, Azure AD).
- **No inbound webhooks**: Braze doesn't receive webhooks from external systems the way Mailchimp or SendGrid do. Instead, use the `/users/track` API endpoint to send events/attributes into Braze, or use CDI for warehouse-based sync.

### Brevo webhooks & integrations
- **Webhooks**: Create via API (`POST /webhooks`). Events: delivered, opened, clicked, hardBounce, softBounce, unsubscribed, complaint, blocked. Separate webhook types for transactional and marketing. Export webhook history via `POST /webhooks/{webhookId}/export`.
- **Zapier**: Triggers — new contact, campaign status update, email delivered/opened/clicked/bounced/unsubscribed/complaint. Actions — create/update contact, send transactional email, manage deals. 7,000+ connected apps.
- **Make (Integromat)**: Full Brevo module with contact, campaign, transactional email, and SMS operations.
- **Native e-commerce**: Shopify, WooCommerce, Magento, BigCommerce, PrestaShop — real-time product/order sync, abandoned cart triggers.
- **Native CRM sync**: No direct Salesforce native connector — use Zapier/Make as bridge. HubSpot sync available via Zapier.
- **REST API**: Full API covering contacts, campaigns, transactional email/SMS/WhatsApp, CRM (deals, companies, tasks), e-commerce, loyalty, conversations. SDKs: Python, Node.js, PHP, Ruby, Java, TypeScript, Go, C#.
- **SMTP relay**: `smtp-relay.brevo.com:587` for transactional email integration with any application.
- **Master account API**: Sub-account management, SSO token generation, IP management — useful for agencies managing multiple client accounts.

### GetResponse webhooks, API & integrations
- **Webhooks/Callbacks**: Subscribe to events — subscribe, open, click, goal, survey, unsubscribe. Configure via API (`POST /v3/callbacks`) or in UI under Integrations > API & Webhooks. Callbacks send POST requests with contact data, campaign info, and message details.
- **REST API v3**: Full API covering contacts, campaigns (lists), newsletters, autoresponders, tags, custom fields, landing pages, webinars, forms, shops (e-commerce), and transactional email (MAX only). Auth: `X-Auth-Token: api-key {key}`. Rate limits: 30K calls/10 min, 80/sec.
- **Native CRM sync**: Salesforce (bidirectional sync), HubSpot, Zoho CRM.
- **Native e-commerce**: Shopify, WooCommerce, Magento, BigCommerce, PrestaShop — product/order sync, abandoned cart triggers, product recommendations.
- **Zapier**: 150+ app connections. Triggers: new contact, newsletter sent, autoresponder triggered. Actions: create/update contact, add tag.
- **Payment processors**: Stripe, PayPal, Square — for courses and conversion funnels.
- **Social/Ads**: Facebook Custom Audiences, Google Ads audience sync.
- **CMS**: WordPress, Squarespace, Wix plugins.
- **Webinar platforms**: Zoom, GoToWebinar integration (in addition to built-in webinars).
- **Important note**: GetResponse "campaign" = mailing list in the API. `POST /v3/campaigns` creates a list, not an email send. `POST /v3/newsletters` creates an email send.

### Seismic webhooks
- **Events**: Content views, LiveSend opens, DSR engagement, user provisioning (SCIM)
- **Setup**: Configure via the developer portal (developer.seismic.com). OAuth 2.0 auth.
- **Use cases**: Trigger CRM updates on content engagement or alert reps when prospects view shared content.

### Qwilr webhooks
- **Full reference**: See `/sales-qwilr-automation` for Qwilr-specific webhook events and CRM integrations

## Step 5 — Data sync best practices

### Define source of truth
Before building any bidirectional sync, decide which tool is the source of truth for each field:

| Data type | Typical source of truth | Why |
|-----------|------------------------|-----|
| Contact info (name, email, phone) | CRM (Salesforce/HubSpot) | CRM is the canonical record |
| Activity data (emails, calls) | Engagement tool (Apollo/Salesloft/Mailshake) | Activity originates in the engagement tool |
| Deal/opportunity | CRM | Revenue data lives in CRM |
| Lead score | MAP or CRM | Scoring logic runs in MAP/CRM |
| Sequence status | Engagement tool | Sequence state managed by engagement tool |

### Conflict resolution
- **Last-write-wins**: Simple but dangerous — later update overwrites earlier one
- **Source-of-truth wins**: Designated source always overwrites destination
- **Field-level rules**: Different rules per field (e.g., CRM wins for phone, engagement tool wins for email status)
- **Manual review**: Flag conflicts for human review (safest for critical fields)

### Deduplication
- **Match keys**: Email address (primary), company domain + name (secondary)
- **When to dedup**: Before creating records, during sync, and periodically as maintenance
- **Tools**: Native CRM dedup (Salesforce Duplicate Rules, HubSpot dedup tool), or third-party (Dedupely, RingLead)

### Error handling
- **Retry logic**: Implement exponential backoff for failed API calls (1s, 2s, 4s, 8s)
- **Dead letter queue**: Store failed events for manual review and replay
- **Alerting**: Slack/email notification when sync errors exceed threshold
- **Monitoring**: Track sync success rate, latency, and error types weekly

## Gotchas

- **Check native integrations first.** Don't build a Zapier workflow for something the tools already handle natively. Native integrations are more reliable, handle edge cases better, and don't cost extra. Check Settings > Integrations in both tools before going custom.
- **Respect API rate limits.** Every tool has rate limits — Mailshake (100/min), Apollo (~200/min on Pro), Salesforce (varies), HubSpot (100/10s). High-volume syncs that ignore rate limits will get throttled or blocked. Always implement batching and backoff.
- **Define source of truth before bidirectional sync.** Bidirectional sync without clear field-level ownership creates data ping-pong (A updates B, B updates A, loop). For every field that syncs bidirectionally, document which tool wins on conflict.

## Related skills

- `/sales-qwilr-automation` — Qwilr-specific CRM integrations, API, and webhook events
- `/sales-mailshake` — Mailshake platform help including API and webhook details
- `/sales-apollo` — Apollo platform help including CRM sync and API
- `/sales-smartlead` — Smartlead platform help including API and webhook details
- `/sales-lemlist` — Lemlist platform help including API and webhook details
- `/sales-salesloft` — Salesloft platform help including integrations
- `/sales-groove` — Groove.cm platform help including GrooveSell webhooks and Zapier integration
- `/sales-yesware` — Yesware platform help (native Salesforce integration, no API)
- `/sales-mixmax` — Mixmax platform help including rules engine and integrations
- `/sales-reply` — Reply.io platform help including webhooks and integrations
- `/sales-woodpecker` — Woodpecker platform help including API and webhook details
- `/sales-deliverability` — Email deliverability (relevant when integrating sending tools)
- `/sales-seismic` — Seismic platform help including integrations, LiveSend, and Digital Sales Rooms
- `/sales-tomba` — Tomba platform help including API, webhook callbacks, and CRM integrations
- `/sales-prospeo` — Prospeo platform help including API, native CRM integrations, and MCP server
- `/sales-hunter` — Hunter.io platform help including API, CRM integrations, webhooks, and MCP server
- `/sales-seamless` — Seamless.AI platform help including API, CRM integrations, and webhooks
- `/sales-customerio` — Customer.io platform help including Track/App/Transactional APIs, Data Pipelines, and webhook workflows
- `/sales-mailgun` — Mailgun platform help including REST API, inbound routing, webhooks, and Mailgun Optimize
- `/sales-klaviyo` — Klaviyo platform help including 350+ integrations, flow webhooks, Advanced KDP webhooks, and Shopify deep sync
- `/sales-activecampaign` — ActiveCampaign platform help including 900+ integrations, 25+ webhook events, automation webhooks, and Salesforce/Shopify deep sync
- `/sales-outscraper` — Outscraper platform help including REST API with webhook callbacks, Zapier, n8n, and Pipedream integrations
- `/sales-enrichso` — Enrich.so platform help including REST API, bulk enrichment callbacks, Zapier, and n8n/Make integration
- `/sales-minelead` — Minelead platform help including REST API, Zapier, Google Sheets, and Zoho CRM integrations
- `/sales-lobstr` — Lobstr.io platform help including async REST API, webhooks (4 events), Google Sheets, S3, Make, and SFTP integrations
- `/sales-getprospect` — GetProspect platform help including REST API, native CRM integrations (HubSpot, Salesforce, Pipedrive, Zoho), Outreach/Salesloft sync, and Zapier
- `/sales-skrapp` — Skrapp platform help including REST API, native CRM integrations (HubSpot, Salesforce, Zoho, Pipedrive, Outreach), and Zapier
- `/sales-openwebninja` — OpenWeb Ninja platform help including 30+ REST APIs (Website Contacts Scraper, Email Search, Local Business Data, Web Search), RapidAPI marketplace
- `/sales-anymailfinder` — Anymail Finder platform help including REST API v5.1, webhook support, Make/Zapier/n8n integrations, Chrome Extension
- `/sales-zerobounce` — ZeroBounce platform help including REST API v2, 60+ native integrations, Zapier, 13 SDKs, email validation/finder/scoring/activity/blacklist/DMARC
- `/sales-snov` — Snov.io platform help including REST API (33+ endpoints, OAuth 2.0), native CRM integrations (HubSpot, Pipedrive, Salesforce, Zoho, Close, Freshsales), Zapier/Make (5,000+ apps), webhooks
- `/sales-sendgrid` — SendGrid platform help including Email API, Event Webhooks, Inbound Parse, and Marketing Campaigns
- `/sales-postmark` — Postmark platform help including transactional email API, Message Streams, and webhooks
- `/sales-safetymails` — SafetyMails platform help (bulk verification, real-time API, Email Finder, native integrations)
- `/sales-iterable` — Iterable platform help (Smart Ingest from 23+ sources, Snowflake Secure Data Sharing, system webhooks, Studio journey webhooks, REST API)
- `/sales-braze` — Braze platform help (Currents data streaming, CDI warehouse sync, 170+ Alloys integrations, REST API, Canvas webhooks, Connected Content)
- `/sales-brevo` — Brevo platform help (email/SMS/WhatsApp campaigns, automation, transactional API, CRM, 150+ integrations, webhooks)
- `/sales-getresponse` — GetResponse platform help (REST API v3, webhooks/callbacks, Zapier, native CRM sync, e-commerce integrations)
- `/sales-closum` — Closum platform help (omnichannel marketing automation: email, SMS, WhatsApp, Telegram, Web Push)
- `/sales-mailchimp` — Mailchimp platform help (email marketing, automations, SMS, 300+ integrations, Marketing + Transactional APIs)
- `/sales-sendgrid` — SendGrid platform help (Email API, Marketing Campaigns, Event Webhooks, Inbound Parse, 353 partner integrations)
- `/sales-postmark` — Postmark platform help (transactional email API, 7 webhook types, Inbound email parsing, Zapier)
- `/sales-omnisend` — Omnisend platform help (email/SMS/push for ecommerce, Shopify/WooCommerce/BigCommerce integrations, REST API)
- `/sales-zoominfo` — ZoomInfo platform help (SalesOS, MarketingOS, OperationsOS integrations)
- `/sales-data-hygiene` — CRM data quality and enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Mailshake reply → Salesforce + Slack
**User says**: "When someone replies to my Mailshake campaign, I want to create a task in Salesforce and get a Slack notification."
**Skill does**:
1. Checks if Mailshake-Salesforce native integration covers this (it does for activity sync)
2. Recommends native for Salesforce + Zapier for Slack notification
3. Provides Zapier workflow: Mailshake "Reply" trigger → Slack "Send Message" action
4. Configures field mapping for the Salesforce activity
**Result**: Reply-to-task sync via native integration, Slack alert via Zapier

### Example 2: Salesloft activity → HubSpot
**User says**: "I need to sync all Salesloft activity to HubSpot so our marketing team can see sales touchpoints."
**Skill does**:
1. Checks native integration (Salesloft-HubSpot integration exists)
2. Walks through native integration setup and field mapping
3. Defines sync direction (Salesloft → HubSpot, one-way for activity)
4. Addresses dedup and conflict resolution
**Result**: Native integration configured with clear sync direction and field mapping

### Example 3: HubSpot MQL → Apollo sequence
**User says**: "When a lead hits MQL status in HubSpot, I want to auto-enroll them in an Apollo sequence."
**Skill does**:
1. Designs trigger: HubSpot workflow on lifecycle stage = MQL
2. Recommends Zapier (HubSpot trigger → Apollo "Add Contact to Sequence" action)
3. Provides field mapping from HubSpot to Apollo contact fields
4. Adds error handling (what if contact already exists in Apollo, what if sequence is full)
**Result**: MQL-triggered enrollment with field mapping and error handling

## Troubleshooting

### Sync creating duplicates
**Symptom**: Same contact appearing multiple times in destination tool
**Cause**: Missing dedup logic — sync creates new records instead of matching existing ones
**Solution**: Add matching/dedup step before create. Match on email address (primary key). Use CRM's native dedup rules. For Zapier, use "Find or Create" actions instead of "Create."

### Events not firing
**Symptom**: Webhook or trigger not executing when expected
**Cause**: Webhook URL misconfigured, event type wrong, or tool's webhook delivery failing
**Solution**: Check webhook logs in the source tool. Test with a webhook debugging tool (webhook.site or RequestBin). Verify the event type matches exactly. Check if the webhook was disabled after errors.

### Rate limit errors in high-volume sync
**Symptom**: 429 errors, sync falling behind, or events being dropped
**Cause**: Sending too many API requests too quickly
**Solution**: Implement batching (batch multiple records per request where API supports it). Add exponential backoff on 429 responses. Reduce sync frequency (every 5 min instead of real-time). Use bulk API endpoints where available.
