# Native Integration Lookup Table

Before building anything custom, check if a native integration exists between your tools.

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
| Treasure Data → Salesforce | Native | Audience activation, contact sync, CRM enrichment |
| Treasure Data → HubSpot | Native | Contact sync, audience activation |
| Treasure Data → Google Ads | Native | Audience segment activation for retargeting |
| Treasure Data → Meta/Facebook | Native | Custom Audiences activation from CDP segments |
| Treasure Data → Snowflake | Native (bi-directional) | Data warehouse sync, composable CDP architecture |
| Treasure Data → Databricks | Native (bi-directional) | Data warehouse sync, composable CDP |
| Treasure Data → Amazon Redshift | Native | Data warehouse import/export |
| Treasure Data → Google BigQuery | Native | Data warehouse import/export |
| Treasure Data → Braze | Native | Audience activation for engagement campaigns |
| Treasure Data → Klaviyo | Native | Audience sync for email/SMS marketing |
| Treasure Data → Shopify | Native | E-commerce customer and order data ingestion |
| Treasure Data → Amazon S3 | Native | Cloud storage import/export |
| Treasure Data → Segment | Native | CDP-to-CDP data routing |
| Treasure Data → Any (API) | API | TD API (REST) — databases, jobs, queries, connectors. TD1 API key auth. 400+ pre-built connectors |
