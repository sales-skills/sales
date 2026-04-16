# Platform Webhook Reference

Platform-specific webhook configurations, API integrations, and native connector details for sales tool integrations.

## Table of contents

- [Mailshake webhooks](#mailshake-webhooks)
- [Apollo webhooks](#apollo-webhooks)
- [Salesloft webhooks](#salesloft-webhooks)
- [Smartlead webhooks](#smartlead-webhooks)
- [Lemlist webhooks](#lemlist-webhooks)
- [Groove.cm webhooks](#groovecm-webhooks)
- [Yesware integrations](#yesware-integrations)
- [Reply.io webhooks](#replyio-webhooks)
- [Woodpecker webhooks](#woodpecker-webhooks)
- [Mixmax rules (webhooks)](#mixmax-rules-webhooks)
- [Hunter.io integrations](#hunterio-integrations)
- [Prospeo integrations](#prospeo-integrations)
- [Tomba webhooks](#tomba-webhooks)
- [Seamless.AI webhooks](#seamlessai-webhooks)
- [SafetyMails integrations](#safetymails-integrations)
- [Mailchimp webhooks](#mailchimp-webhooks)
- [Omnisend integrations](#omnisend-integrations)
- [Closum integrations](#closum-integrations)
- [Postmark webhooks](#postmark-webhooks)
- [Outscraper webhooks](#outscraper-webhooks)
- [Minelead webhooks](#minelead-webhooks)
- [GetProspect integrations](#getprospect-integrations)
- [Skrapp integrations](#skrapp-integrations)
- [OpenWeb Ninja integrations](#openweb-ninja-integrations)
- [Anymail Finder integrations](#anymail-finder-integrations)
- [Lobstr.io webhooks](#lobstrio-webhooks)
- [Enrich.so webhooks](#enrichso-webhooks)
- [ActiveCampaign webhooks](#activecampaign-webhooks)
- [Klaviyo webhooks](#klaviyo-webhooks)
- [Mailgun webhooks](#mailgun-webhooks)
- [Customer.io webhooks](#customerio-webhooks)
- [SendGrid webhooks](#sendgrid-webhooks)
- [Iterable Smart Ingest, webhooks & integrations](#iterable-smart-ingest-webhooks-integrations)
- [Braze Currents, CDI & Alloys integrations](#braze-currents-cdi-alloys-integrations)
- [Brevo webhooks & integrations](#brevo-webhooks-integrations)
- [GetResponse webhooks, API & integrations](#getresponse-webhooks-api-integrations)
- [SendPulse webhooks, API & integrations](#sendpulse-webhooks-api-integrations)
- [Clearbit webhooks, API & integrations](#clearbit-webhooks-api-integrations)
- [RB2B webhooks, API & integrations](#rb2b-webhooks-api-integrations)
- [6sense webhooks, API & integrations](#6sense-webhooks-api-integrations)
- [Seismic webhooks](#seismic-webhooks)
- [Clay webhooks, API & integrations](#clay-webhooks-api-integrations)
- [LeadMagic API & integrations](#leadmagic-api-integrations)
- [Qwilr webhooks](#qwilr-webhooks)
- [Jotform webhooks & API](#jotform-webhooks-api)
- [Celigo integrations](#celigo-integrations)
- [Jitterbit integrations](#jitterbit-integrations)
- [Tray integrations](#tray-integrations)

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

### SendPulse webhooks, API & integrations
- **Webhooks**: Email events (delivered, opened, clicked, bounced, spam, unsubscribed), SMTP events, chatbot events (subscribed, message, livechat, trigger).
- **REST API**: OAuth 2.0 auth. SDKs in 7 languages: PHP, Python, Ruby, Java, Node.js, C#, Go.
- **MCP Server**: github.com/sendpulse/mcp-server — for AI agent integration.
- **Zapier**: 30+ triggers/actions (new subscriber, email sent, new deal, contact updated).
- **Make (Integromat)**: Full module set for email, SMS, chatbot, CRM.
- **Native integrations**: WordPress, WooCommerce, Shopify, OpenCart, PrestaShop, Magento, Bitrix24, Salesforce, HubSpot, Pipedrive.

### Clearbit webhooks, API & integrations
- **HubSpot**: Native integration (Breeze Intelligence) — auto-enrichment, form shortening, buyer intent.
- **Salesforce**: Native — enrich leads/contacts/accounts, enrichment workflows.
- **Segment**: Native — enrichment data pushed to all connected destinations.
- **Marketo**: Native — lead enrichment in marketing automation.
- **Slack**: clearbit-slack integration — notify channels when target accounts visit site (Reveal).
- **Zapier**: Triggers + actions for person/company enrichment, push to 8,000+ apps.
- **Make (Integromat)**: Clearbit enrichment module.
- **API**: REST API with per-resource subdomains, HTTP Basic Auth, 600 req/min.
- **Webhooks**: Async enrichment delivery for queued (202) responses, data change notifications with `subscribe:true`.

### RB2B webhooks, API & integrations
- **Slack**: Native — real-time alerts with visitor name, company, title, LinkedIn when visitors are identified.
- **HubSpot**: Native — push identified visitors as contacts, create/update records automatically.
- **Salesforce**: Native — push to leads/contacts, match to existing accounts.
- **Apollo.io**: Native — sync identified visitors for outbound sequencing.
- **Salesloft**: Native — push visitors to Salesloft cadences.
- **Outreach**: Native — push visitors to Outreach sequences.
- **Smartlead**: Native — add identified visitors to Smartlead campaigns.
- **Clay**: Native — enrich RB2B visitors with Clay's waterfall enrichment.
- **Zapier**: Triggers on new visitor identified → connect to 8,000+ apps.
- **Make (Integromat)**: RB2B visitor data in automation scenarios.
- **Webhooks**: Push visitor data (person + company + visit context) to any endpoint in real-time.
- **Identity Resolution API**: Separate product at api.rb2b.com — credit-based access to IP→identity, LinkedIn→email, email→LinkedIn, company→firmographics endpoints.

### 6sense webhooks, API & integrations
- **Salesforce**: Native bidirectional sync — account scores, buying stages, intent data, contact enrichment, workflow triggers, recommended actions in CRM.
- **HubSpot**: Native — account data sync, intent insights in HubSpot, enrichment export via 6sense Enrichment App, nightly data sync.
- **Microsoft Dynamics**: Native CRM sync with account intelligence and scoring.
- **Marketo**: Native MAP sync — People Enrichment API integration, segment-based campaign activation.
- **LinkedIn Ads**: Native — dynamic segment sync to LinkedIn Campaign Manager for all ad types (Sponsored Content, Messaging, Text, Dynamic). Auto-updating audiences.
- **Outreach**: Native — push prioritized accounts and contacts with intent context to sequences.
- **Salesloft**: Native — push accounts/contacts to cadences with buying stage and intent data.
- **Drift**: Native — conversational marketing powered by 6sense account intelligence.
- **Slack**: Native — real-time alerts when target accounts show intent spikes or buying stage changes.
- **Bombora / G2 / TrustRadius**: Data partners — third-party intent data feeding into Signalverse.
- **LeanData**: Native — lead-to-account matching and routing powered by 6sense data.
- **Zapier**: Connector — connect 6sense events to 8,000+ apps.
- **API**: Company Identification (`epsilon.6sense.com`), People Enrichment + Segments (`scribe.6sense.com`). Org-level API tokens, credit-based.

### Seismic webhooks
- **Events**: Content views, LiveSend opens, DSR engagement, user provisioning (SCIM)
- **Setup**: Configure via the developer portal (developer.seismic.com). OAuth 2.0 auth.
- **Use cases**: Trigger CRM updates on content engagement or alert reps when prospects view shared content.

### Clay webhooks, API & integrations

| Integration | Type | What it does |
|------------|------|-------------|
| Salesforce | Native (bidirectional) | Import leads/contacts/accounts for enrichment, push enriched data back. Create/update records. Growth plan required. |
| HubSpot | Native (bidirectional) | Import contacts/companies, enrich, push back. Marketplace app available. Growth plan required. |
| Dynamics 365 | Native (bidirectional) | Create, update, lookup records. Growth plan required. |
| ActiveCampaign | Native | Manage contacts and automations from Clay workflows. |
| Pipedrive | Native | Sync contact and deal data. |
| Outreach | Native | Push enriched contacts to Outreach sequences. |
| Salesloft | Native | Push enriched contacts to Salesloft cadences. |
| LinkedIn Ads | Ad Sync | Push Clay Audiences for targeted campaigns. Growth plan required. |
| Meta Ads | Ad Sync | Push Clay Audiences via email-based matching. Growth plan required. |
| Google Ads | Ad Sync | Push Clay Audiences via Customer Match. Growth plan required. |
| Zapier | Native app | Trigger on new/updated rows, create rows via webhook. |
| Make | Native app | Webhook triggers, row creation, HTTP API workflows. |
| Webhooks (inbound) | Webhook | Each table has a unique webhook URL — POST JSON to create rows. |
| HTTP API | Action | Call any external API from Clay workflows. Growth plan required. |
| Snowflake / BigQuery | Data warehouse | Sync enriched data to data warehouses. Enterprise plan required. |
| Slack | Native | Notifications and alerts from Clay workflows. |
| Google Sheets / Airtable | Native | Import/export data between Clay and spreadsheets. |
| 150+ data providers | Enrichment | Waterfall enrichment via Hunter, Apollo, Clearbit, People Data Labs, ZoomInfo, Lusha, Dropcontact, Cognism, RocketReach, etc. |

### LeadMagic API & integrations

| Integration | Type | What it does |
|------------|------|-------------|
| REST API | Native (19 endpoints) | All enrichment, company, job, and ads endpoints via api.leadmagic.io with X-API-Key auth. |
| MCP Server | Native | 19 tools for Claude Code, Cursor, Windsurf, VS Code, Continue.dev, ChatGPT. github.com/LeadMagic/leadmagic-mcp |
| CLI | Native | Command-line access for terminal-based lookups. github.com/LeadMagic/cold-email-cli |
| Clay | Native provider | LeadMagic is available as an enrichment provider in Clay's waterfall. |
| Zapier | Native | Trigger enrichment from Zapier workflows, push results to other tools. |
| Make | Native | Integrate LeadMagic into Make scenarios. |
| n8n | Native | LeadMagic nodes for n8n workflow automation. |
| Salesforce | Via middleware | Push enriched data to Salesforce via Zapier, Make, n8n, or custom API integration. |
| Instantly | Compatible | Use LeadMagic to enrich leads before importing to Instantly campaigns. |
| Smartlead | Compatible | Enrich and validate emails before loading into Smartlead. |

### AdRoll / NextRoll integrations

| Integration | Type | What it does |
|------------|------|-------------|
| Shopify | Native (deep) | One-click install. Auto-syncs product catalog, installs pixel, enables dynamic retargeting, tracks revenue. |
| BigCommerce | Native | Product feed sync, pixel installation, conversion tracking. |
| WooCommerce | Native (plugin) | WordPress plugin. Product catalog sync, pixel, conversion tracking. |
| Wix | Native | Via Wix App Market. Pixel and basic product sync. |
| HubSpot (RollWorks) | Native (bidirectional) | Sync HubSpot company lists to RollWorks audiences. Account-level engagement data in HubSpot. Trigger workflows from RollWorks signals. |
| Salesforce (RollWorks) | Native | Sync account lists, push engagement data to Salesforce. |
| Facebook/Instagram | Native | Manage social retargeting campaigns through AdRoll. Audience sync. |
| Zapier | Native | Triggers on conversion events. Actions for audience management. |
| NextRoll API | REST API | CRUD, GraphQL Reporting, Audience, User Lists, Prospecting, Automated Campaigns, Universal Campaigns, S2S conversion tracking. OAuth 2.0 / PAT auth. |
| S2S Conversion Tracking | API | Server-side conversion events without client-side pixel. `POST /track/convert`. |

### Attio webhooks & API

| Integration | Type | Details |
|---|---|---|
| REST API | Native | 100+ endpoints. Records, objects, lists, notes, tasks, comments. OAuth 2.0 / API key auth. 100 reads/s, 25 writes/s. |
| Webhooks | Native | Record CRUD, list entry changes, attribute updates, comments, notes, tasks, call recordings. |
| Gmail/Outlook | Native | Email sync for automatic contact creation and email tracking. |
| Zapier | Native | Triggers: record created/updated. Actions: create/update records, add list entries. |
| Make | Native | Attio module with triggers and actions for CRM operations. |
| MCP Server | Native | mcp.attio.com/mcp — AI agents can search, update, and manage CRM data. |
| App SDK | Native | Embed TypeScript React apps within Attio UI with server functions and API access. |
| SDKs | Official | Node.js, TypeScript, Python, PHP, .NET, Java. |

### Contentstack webhooks & API

| Integration | Type | Details |
|---|---|---|
| REST API (CMA) | Native | Full CRUD for content types, entries, assets, workflows, branches, taxonomies. API Key + Authtoken/Management Token/OAuth auth. 10 read/write req/s per org. |
| REST API (CDA) | Native | Read-only content delivery via CDN. API Key + Delivery Token auth. 100 origin req/s per org (CDN-cached not limited). |
| GraphQL CDA | Native | Custom queries, nested resources in single request. Same auth as CDA. |
| Webhooks | Native | Entry/asset CRUD, publish/unpublish, workflow stage changes. Configurable channels (HTTP, Slack), retry with backoff. |
| Automate | Native | Visual automation builder — trigger on Contentstack events, connect to Salesforce, Slack, Jira, custom endpoints. API for managing automations. |
| Marketplace | Native | Pre-built apps: Shopify, commercetools, Algolia, Smartling, Bynder, Cloudinary, Netlify, Vercel. One-click install. |
| Zapier/Make | Available | Basic triggers and actions for content operations. |
| SDKs | Official | Delivery: JS, TS, Python, Java, .NET, PHP, Ruby, iOS, Android, Dart. Management: JS, Python, Java, .NET. App SDK (TS). |
| OpenAPI | Official | CDA + CMA OpenAPI specs at github.com/contentstack/contentstack-openapi. |
| Personalize | Native | Audiences, experiences, A/B tests, edge SDK. Separate API at personalize-api.contentstack.com. |
| Launch | Native | Frontend hosting + deployment API. Git or file upload deployments. |
| **Rate limits** | — | CMA: 10 req/s read + write, 1 req/s bulk. CDA origin: 100 req/s. All other APIs: 10 req/s. Per-organization. |
| **Regions** | — | AWS NA/EU/AU, Azure NA/EU, GCP NA/EU — each has its own base URL. |
| **Full reference** | — | See `/sales-contentstack` → `references/contentstack-api-reference.md` |

### Qwilr webhooks
- **Full reference**: See `/sales-qwilr-automation` for Qwilr-specific webhook events and CRM integrations

### Jotform webhooks & API
- **Webhook setup**: Form Builder → Settings → Integrations → WebHooks. Enter endpoint URL.
- **Trigger**: Every browser-submitted form submission. **Does NOT fire on API-created submissions.**
- **Payload**: `application/x-www-form-urlencoded` with `formID`, `submissionID`, `rawRequest` (JSON string), `pretty` (human-readable), plus individual form fields.
- **Timeout**: 30 seconds — process async if your handler is slow.
- **API**: REST at `api.jotform.com` (EU: `eu-api.jotform.com`, HIPAA: `hipaa-api.jotform.com`). API key auth via header (`APIKEY: {key}`) or query param.
- **Key endpoints**: `GET /form/{id}/submissions`, `POST /form/{id}/submissions`, `POST /form/{id}/webhooks`, `GET /user/forms`.
- **SDKs**: Python, Node.js, PHP, Java, Go, C#, Ruby, Scala, Android, iOS.
- **MCP Server**: `jotform/mcp-server` on GitHub.
- **Native integrations**: Salesforce, HubSpot, Mailchimp, ActiveCampaign, Google Sheets, Slack, Airtable, Zapier (3,000+ apps), Make.
- **Gotcha**: API-created submissions bypass webhooks entirely. Workaround: poll `/form/{id}/submissions` with date filters, or use Zapier "New Submission" trigger (which polls the API).
- **Rate limits (daily)**: Free 1K, Bronze 10K, Silver 50K, Gold 100K, Enterprise 1M.
- **Full reference**: See `/sales-jotform` → `references/jotform-api-reference.md`

### Boomi integrations

| Integration | Type | Details |
|---|---|---|
| Platform API | REST | `https://api.boomi.com/api/rest/v1/{accountID}`. HTTP Basic auth (API token or username/password). XML default, JSON via headers. 10 req/sec rate limit. OpenAPI 3.0 spec available. |
| 1000+ connectors | Native | SAP, Salesforce, ServiceNow, Oracle NetSuite, Workday, AWS, Snowflake, Stripe, Slack, Microsoft 365, Google Workspace, Shopify, HubSpot, and many more. |
| Boomi Marketplace | Native | Pre-built recipes (integration patterns), accelerators (industry bundles), and AI agents. |
| Connector SDK | Custom | Java-based SDK for building custom connectors. HTTP Client connector for any REST API without a dedicated connector. |
| Event Streams | Native | Publish/subscribe messaging for real-time event-driven integrations. AMQP, MQTT, Kafka-compatible. |
| B2B/EDI | Native | Trading partner management, X12, EDIFACT, HL7, HIPAA, AS2/SFTP document exchange. |
| Data Hub | Native | Master data management — golden records, fuzzy match dedup, data quality rules, real-time sync to connected systems. |
| Zapier | Via HTTP | No native Zapier connector. Use Boomi's HTTP Server connector to receive Zapier webhooks, or HTTP Client to call Zapier webhook URLs. |
| Make | Via HTTP | Same pattern as Zapier — HTTP Server/Client connectors for bidirectional communication. |
| MCP | Native | Model Context Protocol support for AI agent integration with Boomi processes. |
| **Full reference** | — | See `/sales-boomi` → `references/boomi-api-reference.md` |

### Celigo integrations

| Integration | Type | Details |
|---|---|---|
| integrator.io API | REST | `https://api.integrator.io/v1/` (NA), `https://api.eu.integrator.io/v1/` (EU). Bearer token auth. Leaky bucket rate limit (~1.08M req/hr). Resources: Connection, Export, Import, Flow, Integration, State, Job. |
| 1000+ connectors | Native | Salesforce, NetSuite, SAP, Dynamics 365, Shopify, Amazon, Walmart, Snowflake, Acumatica, HubSpot, and more. |
| Integration Marketplace | Native | Pre-built Integration Apps (fully managed bundles), Integration Templates (customizable workflows), Universal Connectors (any REST/SOAP API). |
| NetSuite (flagship) | Native | Deepest NetSuite integration of any iPaaS. Pre-built Integration Apps for Shopify-NetSuite, Salesforce-NetSuite. RESTlet proxying via custom headers. |
| API Management (APIM) | Native | Build, publish, and secure APIs. API plans, applications, subscriptions via APIM console. |
| B2B/EDI | Native | Trading partner management, X12, EDIFACT document exchange. |
| Embedded/OEM | Native | White-label integration solutions for embedding in SaaS products. |
| Zapier | Via HTTP | No native Zapier connector. Use webhooks or REST API for bidirectional communication. |
| Make | Via HTTP | Same pattern as Zapier — webhooks or REST API for bidirectional communication. |
| **Full reference** | — | See `/sales-celigo` → `references/celigo-api-reference.md` |

### SnapLogic integrations

| Integration | Type | Details |
|---|---|---|
| Public APIs | REST | `https://{pod}.snaplogic.com/api/1/rest/...`. Basic auth or JWT (Okta/Entra ID). 12 API categories: Activity, APIM, Asset, Asset Catalog, Log, Runtime, Pipeline, Task, Project, Snaplex, Snap Statistics, User/Group. JSON responses. |
| 1000+ Snaps | Native | Salesforce, SAP, Oracle, Workday, ServiceNow, NetSuite, Snowflake, BigQuery, Redshift, Kafka, AWS, Azure, Google Cloud, and many more. Core Snaps included; Premium Snap Packs (Tier 1 ~$45K, Tier 2 ~$15K) for enterprise apps. |
| REST Snap | Universal | Connect to any REST API without a dedicated Snap Pack. Equivalent to Workato's HTTP connector or Boomi's HTTP Client. |
| Snap Developer Kit | Custom | Java-based SDK for building custom Snaps. Publish to your Org or share. |
| AgentCreator | Native | AI agent builder — agents invoke SnapLogic pipelines as tools. LLM Snap Packs (OpenAI, Bedrock, Azure OpenAI, Gemini) + Vector DB Snap Packs (Pinecone, MongoDB). |
| API Management 3.0 | Native | Full-lifecycle API management — Policy Studio, Developer Hub, OAS 3.x generation, AI agent governance. Pipeline-as-API pattern. |
| Ultra Pipelines | Native | Streaming execution mode for high-throughput real-time event processing (Kafka, AMQP, CDC). |
| Git integration | Native | GitHub, GitHub Enterprise, GitLab, Bitbucket. Branch, checkout, pull, tag, status operations. CI/CD via Project APIs. |
| Zapier | Via HTTP | No native Zapier connector. Use REST Snap to receive Zapier webhooks or call Zapier webhook URLs. |
| Make | Via HTTP | Same pattern as Zapier — REST Snap for bidirectional communication. |
| MCP | Native | AgentCreator supports Model Context Protocol for AI agent integration with SnapLogic pipelines. |
| **Full reference** | — | See `/sales-snaplogic` → `references/snaplogic-api-reference.md` |

### Jitterbit integrations

| Integration | Type | Details |
|---|---|---|
| Harmony Management API | REST | `https://na-east.jitterbit.com/jitterbit-cloud-restful-service` (NA), `https://emea-west.jitterbit.com/jitterbit-cloud-restful-service` (EMEA), `https://apac-east.jitterbit.com/jitterbit-cloud-restful-service` (APAC). Session-token login via `PUT /user/login` (email/password/deviceId). Tokens expire ~15 min. OpenAPI 3.0 spec on SwaggerHub. |
| 400+ connectors | Native | Salesforce, NetSuite, SAP (ECC, S/4HANA), Oracle EBS, Microsoft Dynamics 365, Workday, ADP, Shopify, BigCommerce, Magento, ServiceNow, Snowflake, Slack, Microsoft 365, and more. |
| Connector Marketplace | Native | 400+ templates, recipes, and pre-built projects. Industry accelerators and reference patterns. |
| Connector Builder | Low-code | Visual connector design for common REST patterns. |
| Connector SDK | Custom | Java-based SDK for deep custom connector development. HTTP/SOAP/Database/FTP/SFTP technology connectors always available. |
| API Manager | Native | Custom APIs, OData APIs, Proxy APIs. Security Profiles (Anonymous, Basic, OAuth 2.0, API Key), Trusted IP Groups, API Groups, Developer Portal, rate limiting. |
| App Builder | Low-code | No-code app development layered on Harmony — forms, tables, business logic. |
| EDI / B2B | Native | Trading partner management, X12, EDIFACT, HL7, AS2/SFTP. |
| Agent groups | Native | Cloud (Jitterbit-managed), Private (on-prem), Hybrid (cloud gateway + private agents). All outbound HTTPS only — no inbound ports. |
| Zapier | Via HTTP | No native Zapier connector. Use HTTP/REST connector to send to Zapier webhook URLs, or expose an API Manager endpoint that Zapier calls. |
| Make | Via HTTP | Same pattern as Zapier — HTTP/REST connector or API Manager endpoint. |
| MCP | Native | Harmony Agent Management supports Model Context Protocol for AI agent integration. |
| **Full reference** | — | See `/sales-jitterbit` → `references/jitterbit-api-reference.md` |

### Tray integrations

| Integration | Type | Details |
|---|---|---|
| GraphQL Embedded API | GraphQL | `https://tray.io/graphql` (US), `https://eu1.tray.io/graphql` (EU), `https://ap1.tray.io/graphql` (APAC). Bearer token auth. **Backend-only** — CORS blocks browser calls. Two token types: Master Token (org-wide) and User Token (per-end-user). |
| 700+ connectors | Native | Salesforce, HubSpot, NetSuite, SAP, Oracle, Workday, ServiceNow, Slack, Google Workspace, Microsoft 365, Marketo, Segment, Zendesk, Outreach, Stripe, Customer.io, Jotform, and many more. |
| HTTP Client connector | Universal | Connect to any REST API without a dedicated connector. |
| GraphQL connector | Universal | Call external GraphQL APIs from within workflows. |
| Connector Development Kit (CDK) | Custom | `falafel` Node.js framework (`github.com/trayio/falafel`). Build and publish custom connectors to your org. |
| Tray Embedded | OEM | White-label iPaaS for SaaS vendors. Solutions (reusable workflow templates) + Solution Instances (per-end-user copies) + Configuration Wizard for end-user auth. Whitelabel OAuth redirects via `{org}.integration-authentication.com/oauth2/token`. |
| Merlin Agent Builder | Native | AI agents with OpenAI/Claude/Gemini/Llama support. Agents invoke Tray workflows as tools. MCP support via `mcp-remote` repo. |
| API Management | Native | Rate limiting, throttling, request governance. Expose workflows as callable APIs. |
| Zapier | Via HTTP | No native Zapier connector. Use HTTP Client connector to call Zapier webhook URLs, or expose a workflow trigger URL that Zapier calls. |
| Make | Via HTTP | Same pattern as Zapier — HTTP Client connector or workflow trigger URL. |
| Rate limits | — | 30 req/sec, 1800 req/min across Embedded/Connectivity APIs. Burst 50/sec. Call Connector endpoint: concurrency-limited to 1000 active requests (not rate-limited). Event delivery (Trigger API) is not rate-limited. |
| **Full reference** | — | See `/sales-tray` → `references/tray-api-reference.md` |
