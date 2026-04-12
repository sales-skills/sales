# Platform-Specific Email Marketing Guide

Detailed per-platform email marketing configuration — automation builders, segmentation tools, campaign setup, and platform-specific features.

## Table of contents

- [In Groove.cm (GrooveMail)](#in-groovecm-groovemail)
- [In ActiveCampaign](#in-activecampaign)
- [In Mailchimp](#in-mailchimp)
- [In Kit (formerly ConvertKit)](#in-kit-formerly-convertkit)
- [In Closum](#in-closum)
- [In SendGrid (Marketing Campaigns)](#in-sendgrid-marketing-campaigns)
- [In Postmark (Broadcast Message Streams)](#in-postmark-broadcast-message-streams)
- [In Customer.io](#in-customerio)
- [In Mailgun (Sinch)](#in-mailgun-sinch)
- [In Brevo](#in-brevo)
- [In Iterable](#in-iterable)
- [In Braze](#in-braze)
- [In GetResponse](#in-getresponse)
- [In Omnisend](#in-omnisend)
- [In SendPulse](#in-sendpulse)
- [In Klaviyo](#in-klaviyo)
- [In AdRoll](#in-adroll)
- [In Retention.com](#in-retentioncom)
- [In Buttondown](#in-buttondown)

### In Groove.cm (GrooveMail)

GrooveMail is the email marketing component of the Groove.cm suite. Key capabilities and how to use them:

**Broadcasts**
- Navigate to GrooveMail > Broadcasts to create one-time email sends
- Use the drag-and-drop editor or HTML editor for email design
- Always send a test email before broadcasting — check rendering on mobile
- Schedule sends using GrooveMail's built-in scheduler; best results with send-time optimization if available

**Sequences (Automation)**
- Create automated sequences under GrooveMail > Sequences
- Set triggers: opt-in to a list, tag applied, purchase via GrooveSell, page visit via GroovePages
- Set delays between emails (e.g., 1 day, 2 days) — front-load early emails, then space out
- Use conditional logic to branch based on opens, clicks, or purchases
- Remove subscribers from a sequence when they take the desired action (e.g., purchase) to avoid irrelevant follow-ups

**Segmentation and Tags**
- Use tags liberally — tag on opt-in source, link clicks, page visits, and purchases
- Create segments combining tags, list membership, and engagement data
- Use GrooveMail's built-in engagement scoring to identify active vs. cold subscribers

**Integration with Groove Suite**
- GrooveSell purchases can trigger email sequences automatically
- GroovePages forms feed directly into GrooveMail lists
- GrooveMember membership events (signup, lesson completion) can trigger targeted emails
- Use GrooveAffiliate data to send different emails to affiliates vs. customers

**GrooveMail tips**
- Warm up new sending domains gradually — start with your most engaged segment
- Use the built-in link tracking to trigger automations based on click behavior
- Set up a sunset policy: suppress subscribers who haven't opened in 90+ days to protect deliverability

### In ActiveCampaign

ActiveCampaign is the mid-market leader in marketing automation — its automation builder is the most powerful in the category and the core differentiator.

- **Automations (visual workflow builder)**: The heart of ActiveCampaign. Triggers include list subscribe, tag added, form submitted, site visited, deal stage changed, date-based, API event, and more. If/else branching, wait steps, goals (skip to end when achieved), split actions. Use Automations for sequences — Campaigns are for one-time broadcasts only.
- **Campaigns (broadcasts)**: One-time sends to lists or segments. A/B testing (up to 5 variants for subject, content, from name, from email). Conditional content blocks show different content based on tags, fields, or segments within a single email.
- **Predictive sending** (Pro+): AI determines optimal send time per contact based on engagement history.
- **Site tracking**: Track website visits per contact — trigger automations when contacts visit specific pages (pricing page = hot lead). Requires tracking code snippet on your site.
- **Lead scoring integration**: Score contacts based on email engagement, site visits, form submissions, tags. Use score thresholds to trigger automations (e.g., score > 50 → notify sales, add to deal pipeline).
- **Segmentation**: Tag-based (manual or automation-assigned), list-based, custom field-based, engagement-based (opened in last X days), behavioral (visited URL). Segments are dynamic and auto-update.
- **SMS & WhatsApp**: Send SMS messages within automations. Two-way SMS for replies. WhatsApp as a channel in workflows.
- **Landing pages**: 56 templates, drag-and-drop builder, form integration, custom domains. Available on Plus+.
- **Forms**: Inline, floating bar, modal, floating box. Conditional fields. Feed directly into automations on submission.
- **CRM integration is native**: Deal stage changes trigger email sequences. Tag contacts by pipeline stage. Combine marketing automation with sales pipeline management.
- **Transactional email**: Separate Postmark add-on (ActiveCampaign acquired Postmark in 2022). Not included in base plans.
- **Pricing**: Starter $15/mo (1K contacts), Plus $49/mo, Pro $79/mo, Enterprise $145/mo. Send limits are 10-15x contact count (not unlimited). All contacts count toward billing (Nov 2025 change).
- **ActiveCampaign's strength**: Best for businesses that need sophisticated multi-step automations with CRM integration and lead scoring. The automation builder is unmatched in the mid-market. Overkill for simple newsletter sends.

### In Mailchimp

Mailchimp is the dominant email marketing platform (13M+ users, owned by Intuit). For full platform help, use `/sales-mailchimp`.

- **Customer Journey Builder** (Standard+ plan): Visual automation workflows with triggers (signup, purchase, tag, date, API event), conditions, branching, and wait steps. Replaces the older Classic Automations. Pre-built journeys available for welcome, abandoned cart, and re-engagement — customize rather than build from scratch.
- **Broadcasts**: Create one-time campaigns via the drag-and-drop editor. A/B testing on Essentials+, multivariate testing on Premium only.
- **Segmentation**: Tags for manual/import-based grouping, segments for dynamic rule-based filtering. Basic segments on Free/Essentials, advanced on Standard, predictive segmentation on Premium.
- **Send Time Optimization** (Standard+): Learns per-subscriber open patterns and delivers at the individually optimal time.
- **Dynamic Content** (Standard+): Show different content blocks to different segments within the same email.
- **Content Studio**: Asset management + generative AI (Intuit Assist) for subject lines, email copy, and content suggestions.
- **SMS Marketing**: Add-on for paid plans ($20/1,000 credits), 37 countries. Integrate SMS into Customer Journeys alongside email.
- **Key limitation**: Mailchimp bills for ALL contacts including unsubscribed — archive or delete contacts you're not mailing to control costs.
- **Transactional email**: Available as Mandrill add-on (Standard+ plan) for receipts, password resets, and notifications via a separate API.

### In Kit (formerly ConvertKit)

Kit is a creator-first email marketing platform built for authors, podcasters, course creators, coaches, and newsletter operators. For full platform help, use `/sales-kit`.

- **Visual Automations**: Canvas-based workflow builder — triggers (form subscribe, tag added, purchase, link clicked, date-based), actions (add/remove tag, subscribe to sequence, send email, set custom field, webhook), and if/else branching. Unlimited automations on Creator+ plans; free plan gets 1.
- **Sequences**: Linear drip email series with timed delays between steps. Subscriber filters skip steps based on tags/segments/custom fields. Exit conditions remove subscribers on tag add, purchase, or custom event. Not available on the free Newsletter plan.
- **Broadcasts**: One-off email sends with 3 templates (Text-only, Classic, Modern). A/B test subject lines on Creator+, content on Pro. RSS campaigns auto-send on new content. Resend to unopens with different subject.
- **Tag-based architecture**: No traditional "lists" — segment entirely through tags and custom fields. Dynamic segments auto-update as subscribers match conditions.
- **Engagement scoring** (Pro plan only): Subscriber engagement scoring for identifying active vs. cold subscribers. Use for targeted sends and list hygiene.
- **Landing pages and forms**: Unlimited on all plans (including free). Inline, modal, slide-in, sticky bar forms. Each form can trigger different automations.
- **Commerce**: Sell digital products and subscriptions directly. Requires Stripe. 0.6% Kit transaction fee + Stripe fees.
- **Creator Recommendations**: Cross-promotion network — recommend other creators after opt-in confirmation. Paid ($1–$5/subscriber) or free mutual recommendations.
- **Newsletter referral system** (Pro only): Built-in subscriber referral program with milestone rewards.
- **Key terminology**: "Broadcast" = one-off email, "Sequence" = drip campaign, "Visual Automation" = workflow, "Creator Profile" = bio link page.
- **Plan limits**: Free plan (Newsletter) has 10K subscribers but no sequences, no integrations, no A/B testing, 1 automation. Creator ($33/mo) unlocks sequences + automations. Pro ($66/mo) adds engagement scoring, deliverability reporting, referral system, unlimited team members.
- **API**: v4 at `api.kit.com`, OAuth 2.0 + API key, 120 req/60s rate limit. Legacy v3 at `api.convertkit.com` is deprecated but still functional.

### In Closum

Closum is a Portugal-based omnichannel marketing automation platform. Key email marketing capabilities:

- **Drag-and-drop editor**: Visual email builder with prebuilt templates, custom blocks, and responsive design — no HTML required
- **Personalization variables**: Dynamic fields (first name, company, custom attributes) in subject lines and body
- **Newsletters**: One-time broadcasts to audience lists or segments
- **Email automations**: Trigger-based sequences — welcome, abandoned cart, re-engagement, date-based. Cross-channel: combine email with SMS, WhatsApp, Telegram, and Web Push in a single workflow
- **Real-time reporting**: Opens, clicks, bounces, unsubscribes — per-campaign and aggregate
- **Send limits**: Zero plan: 1,000/hr; Growth: 5,000/hr; Advanced: 100,000/hr
- **Unlimited contacts**: All plans include unlimited contacts
- **AI assistant**: Built-in OpenAI integration for generating subject lines, email copy, and translations
- **Plan limits**: Zero/Growth: 1 automation; Advanced: 5 automations. Add-on: EUR 5/mo per 5 additional automations
- **Closum's strength**: True omnichannel — build a single automation that spans email, SMS, WhatsApp, Telegram, and Web Push with condition branches based on engagement

### In SendGrid (Marketing Campaigns)

SendGrid (Twilio) is primarily a transactional email API but also offers Marketing Campaigns as a separate product. Key email marketing capabilities:

- **Drag-and-drop design editor**: Visual email builder with reusable content modules, plus full HTML editing for complete control
- **Dynamic content**: Handlebars-based template syntax for personalization — conditional content blocks, dynamic sections based on contact data
- **Single Sends**: One-time broadcast emails to lists or segments — equivalent to campaigns in other platforms
- **Automations**: Trigger-based email sequences — welcome series, re-engagement, date-based. Visual automation builder with branching logic
- **Segmentation**: Query-based segments using contact fields, engagement data, and custom fields. Segments update dynamically.
- **Signup forms**: Built-in form builder for list growth (up to 15 on Advanced plan)
- **A/B testing**: Test subject lines, content, or send time on Single Sends
- **Email testing**: Inbox rendering previews across clients/devices, link validation, spam testing (credit-based — 3 on Free Trial, 10 on Basic, 60 on Advanced)
- **Statistics**: Open rate, click rate, bounce rate, unsubscribe rate — per-send and aggregate. Mailbox provider-level stats available.
- **Separate billing**: Marketing Campaigns is billed separately from the Email API. Basic ($15/mo, 5K contacts), Advanced ($60/mo, 100K contacts, dedicated IP), Custom (500K+). Sends count separately from API sends.
- **SendGrid's strength**: Developer-friendly email marketing — teams already using SendGrid's Email API for transactional email can add marketing campaigns without a separate vendor. Shared domain authentication and suppression management across both products.

### In Postmark (Broadcast Message Streams)

Postmark (ActiveCampaign) is primarily a transactional email service but supports broadcast email via dedicated Message Streams. Key email marketing capabilities:

- **Broadcast Message Streams**: Separate infrastructure for one-to-many sends — newsletters, product announcements, policy updates. Broadcast streams use dedicated infrastructure so transactional delivery stays fast and reliable.
- **Templates**: Server-side Handlebars templates with layout inheritance — share headers/footers across templates, use dynamic variables for personalization. Template validation prevents broken sends.
- **No visual drag-and-drop editor**: Postmark templates are code-based (HTML + Handlebars). Use their open-source transactional email templates as starting points, but there's no WYSIWYG builder like Mailchimp or SendGrid.
- **No automation/journey builder**: Postmark does not have built-in automation workflows. Broadcast sends are API-triggered or manual — you need external automation (your app code, Zapier, or ActiveCampaign) to build sequences.
- **Unsubscribe management**: Broadcast streams include automatic unsubscribe link handling and subscription change webhooks. Suppression lists managed per-stream.
- **Statistics**: Opens, clicks, delivery rates per stream and per tag. No A/B testing built in.
- **Pricing**: Same plans as transactional — broadcast emails count toward your monthly volume. Basic ($15/mo, 10K), Pro ($16.50/mo), Platform ($18/mo).
- **Postmark's strength for broadcast**: Exceptional deliverability — same 98.7% inbox placement for broadcast as transactional. Best for developer teams already using Postmark for transactional who want simple newsletters without a separate vendor.
- **Limitation**: No segmentation, no visual editor, no automation — Postmark broadcast is for simple one-to-many sends, not full email marketing. If you need campaigns with segmentation and automation, use Mailchimp, ActiveCampaign, or SendGrid Marketing Campaigns instead.

### In Customer.io

Customer.io is a data-driven marketing automation platform focused on behavior-triggered multi-channel messaging. Key email marketing capabilities:

- **Journeys (visual workflow builder)**: Drag-and-drop campaign builder with event triggers, segment triggers, date triggers, form submissions, and API triggers. Branching logic, time delays, wait-until conditions, and A/B test splits within workflows.
- **Multi-channel in one workflow**: Combine email, SMS, push notifications, in-app messages, and WhatsApp in a single journey — route to the optimal channel based on user behavior and preferences.
- **Event-driven automation**: Trigger campaigns based on any event your app sends (signup, purchase, feature_used, cart_abandoned, etc.) — not just email events. This is Customer.io's core differentiator vs. traditional email marketing platforms.
- **Data-driven segmentation**: Segments auto-update based on profile attributes, event history, and engagement data. Use segments as campaign triggers or filters within workflows.
- **Custom Objects**: Model relationships beyond people — accounts, products, subscriptions. Use object data in message personalization and segment conditions (e.g., "users whose subscription expires in 7 days").
- **Transactional messages**: API-triggered email, push, and SMS for receipts, password resets, etc. — separate from marketing campaigns but managed in the same platform.
- **Broadcasts**: One-time or scheduled sends to segments — equivalent to campaigns in Mailchimp. API-triggered broadcasts available (1 req/10sec limit).
- **Design Studio**: Collaborative email editor with drag-and-drop. Liquid templating for dynamic content.
- **A/B & cohort testing**: Test subject lines, content, send times, and entire workflow branches. Measure against conversion goals.
- **Pricing**: Essentials ($100/mo, 5K profiles, 1M emails), Premium ($1,000/mo annual), Enterprise (custom). $0.009/additional profile.
- **Customer.io's strength**: Best for product-led companies that need behavior-triggered automation across the entire lifecycle (onboarding → activation → retention → re-engagement) with first-party event data at the center. Overkill for simple newsletter sends.

### In Mailgun (Sinch)

Mailgun is a developer-first transactional email API — not a traditional email marketing platform. However, it supports marketing-style email via mailing lists and templates:

- **Mailing lists**: Programmatic list management via API (`POST /v3/lists`, `POST /v3/lists/{address}/members`). Create lists, add/remove members, bulk import via JSON. Lists support member variables for personalization.
- **Templates**: Account-level and domain-level stored templates accessible via API. Template versioning for A/B testing. Use Handlebars-style variables for dynamic content.
- **Batch sending**: Send to up to 1,000 recipients per API call using recipient-variables for per-recipient personalization — functions like a basic broadcast system.
- **Tags**: Categorize and track sends by tag. Use `GET /v3/{domain}/tags/{tag}/stats` for per-tag engagement analytics (opens, clicks, bounces).
- **No visual campaign builder**: Mailgun has no drag-and-drop email editor or campaign workflow UI. All sending is via API or SMTP — build your own sending logic or use Zapier.
- **No automation workflows**: No built-in journey builder or trigger-based sequences. Use external automation (Zapier, custom code) to trigger Mailgun API calls based on events.
- **Pricing**: Foundation $35/mo (50K emails), Scale $90/mo (100K). No campaign-specific pricing tier.
- **Mailgun's strength**: Best for developers who need programmatic control over marketing email sends and want to build custom sending infrastructure. Not ideal for marketers who need a visual campaign builder.

### In Brevo

Brevo (formerly Sendinblue) is an all-in-one marketing platform with email, SMS, WhatsApp, push notifications, CRM, and automation at volume-based pricing (unlimited contacts on all plans).

- **Email campaigns**: Drag-and-drop editor with templates, A/B testing (Standard plan+), AI content generator, AI send-time optimization. Campaigns in Brevo are single sends — for multi-step sequences, use Automation.
- **Automation (Journeys)**: Visual workflow builder triggered by events (contact added, form submitted, email opened, purchase, custom event, date). Actions include send email, send SMS, send WhatsApp, update contact, webhook, wait, if/else split. Standard plan+ required.
- **Multi-channel in one workflow**: Combine email, SMS, WhatsApp, and push notifications in a single journey — strongest multi-channel coverage in the mid-market alongside Customer.io and Closum.
- **Segmentation**: Filter by attributes, behavior (opens, clicks, page visits), e-commerce activity, custom events. AI-powered contact scoring on Professional plan+.
- **SMS marketing**: Credits-based, integrated into campaigns and automations. Sender name/number varies by country regulation.
- **WhatsApp campaigns**: Requires approved templates (24-48hr Meta review). Professional plan+ only.
- **Push notifications**: Web and mobile push to opted-in users. Professional plan+ only.
- **E-commerce integration**: Native Shopify, WooCommerce, Magento, BigCommerce plugins. Abandoned cart automation, product recommendations, revenue attribution.
- **Landing pages**: Drag-and-drop builder with form integration (Standard plan+ — 1 page included).
- **Pricing**: Free (300 emails/day), Starter (from 5K/mo), Standard (most popular — adds automation, A/B, landing pages), Professional (from 150K/mo — WhatsApp, push, AI), Enterprise (custom). Volume-based — unlimited contacts on all plans.
- **Brevo's strength**: Best all-around value for teams needing email + SMS + WhatsApp + push in one platform with marketing automation, without contact-based billing. Good for growing businesses that want to start free and scale.
- **Limitation**: Automation requires Standard plan+. WhatsApp and push require Professional+. CRM is lightweight compared to HubSpot/ActiveCampaign.

### In Iterable

Iterable is an enterprise cross-channel customer engagement platform (competitor to Braze). Key email marketing capabilities:

- **Studio journeys**: Visual journey builder for multi-step email sequences — combine email with push, SMS, in-app, web push, and WhatsApp. Event-based, list-based, and API-triggered entry. Filter tiles for engagement-based branching, delay tiles, experiment tiles for A/B splits.
- **Blast campaigns**: One-time email sends to lists or segments. A/B testing on subject lines, content, and send time.
- **Triggered campaigns**: Event-driven emails fired by custom events, purchase events, or API calls.
- **Handlebars templating**: Dynamic content with Handlebars syntax (`{{variable}}`), conditional blocks, loops, and catalog data references for product recommendations.
- **Snippets**: Reusable content blocks shared across templates (headers, footers, product cards).
- **Iterable AI**: Send Time Optimization (per-user optimal send time), Brand Affinity (engagement scoring with Loyal/Positive/Neutral/Negative labels), Frequency Optimization (AI-chosen per-user message caps), Copy Assist (AI-generated subject lines).
- **Experiments**: A/B and multivariate testing built into campaigns and Studio journeys. Test subject lines, content, send time, or entire journey branches.
- **Segmentation**: Dynamic lists auto-updating on user attributes, events, and engagement. Brand Affinity labels as segment filters.
- **Pricing**: MAU-based, enterprise sales process. Growth ~$3K-$6K/mo (10K-50K MAUs), Enterprise custom ($10K+/mo). No free tier.
- **Iterable's strength**: Best for growth and product teams that need sophisticated cross-channel orchestration with strong AI features (Brand Affinity, STO, Frequency Optimization) and native data warehouse integration (Smart Ingest, Snowflake). Comparable to Braze in capabilities but with a different UX philosophy.
- **Limitation**: No self-serve pricing. Enterprise sales cycle. Handlebars templating (not Liquid like Braze).

### In Braze

Braze is an enterprise customer engagement platform built for cross-channel orchestration at scale. Key email marketing capabilities:

- **Canvas Flow**: Visual journey builder for multi-step email sequences — combine email with push, in-app, SMS, WhatsApp, and Content Cards in one orchestration. Action-based, event-based, and audience-based entry triggers. Decision splits, A/B paths, Intelligent Selection for auto-optimization.
- **Campaigns**: Single-send or scheduled email broadcasts to segments. Multivariate testing (up to 8 variants). Intelligent Timing for per-user optimal send time.
- **Liquid templating**: Braze uses Liquid (not Handlebars) for dynamic content — personalization, conditional blocks, connected content, and custom attributes. Liquid is more powerful than most email platform template languages.
- **Connected Content**: Pull real-time data from external APIs at send time — product recommendations, pricing, inventory, weather. Cached for 5 minutes by default.
- **Segmentation**: Real-time behavioral segments, predictive segments (BrazeAI churn likelihood, purchase likelihood), and custom attribute segments. Segments update in real-time.
- **Content Cards**: Persistent in-app content feed — promotions, announcements, recommendations. Cards persist until dismissed or expired. Unique to Braze in the engagement platform category.
- **BrazeAI**: Intelligent Timing (per-user send time), Intelligent Channel (preferred channel selection), Intelligent Selection (auto-optimize variants), predictive churn/purchase scoring, generative AI for copy.
- **Pricing**: MAU-based (monthly active users) — contact Braze for pricing. Enterprise-oriented; no self-serve free tier.
- **Braze's strength**: Best for enterprise brands with large audiences that need sophisticated cross-channel orchestration where email is one channel in a Canvas journey alongside push, in-app, SMS, and Content Cards. Not designed for simple newsletter sends.
- **Limitation**: MAU pricing can spike on high-traffic apps. Steeper learning curve than mid-market tools. Liquid templating has a learning curve vs. drag-and-drop editors.

### In GetResponse

GetResponse is an all-in-one email marketing platform with autoresponders, visual marketing automation, conversion funnels, webinars, and course creation. Key email marketing capabilities:

- **Newsletters (broadcasts)**: One-time email sends to lists or segments. Drag-and-drop editor with 100+ templates. AI content generator for subject lines and body copy. A/B testing up to 5 variants (subject, content, send time, from field).
- **Autoresponders**: Time-based automated sequences triggered by subscription date — Day 0 (welcome), Day 1, Day 3, etc. Each list ("campaign" in GetResponse) can have its own autoresponder series. Available on all plans including Starter — use these for simple sequences without upgrading to Marketer.
- **Marketing automation** (Marketer plan+): Visual workflow builder with triggers (subscribe, open, click, purchase, visit URL, tag applied, custom event, score change), actions (send email, SMS, web push, wait, tag, score, move to list, webhook), and if/else conditions. Pre-built templates for welcome series, abandoned cart, re-engagement.
- **Perfect Timing**: AI-based per-subscriber send time optimization — delivers emails when each contact is most likely to engage. **Time Travel**: Send at a specific local time regardless of timezone.
- **Segmentation**: Filter by demographics, behavior, engagement, tags, scores, e-commerce activity. Dynamic segments auto-update.
- **Contact scoring** (Marketer+): Assign points based on opens, clicks, purchases, page visits. Score thresholds trigger automation actions.
- **E-commerce integration**: Native Shopify, WooCommerce, Magento. Abandoned cart automation, product recommendations, promo codes, revenue tracking.
- **Important terminology**: In GetResponse, "campaign" = mailing list. "Newsletter" = email send. This confuses every new user.
- **Plan limits**: Starter allows 1 automation workflow. Marketer ($59/mo) unlocks unlimited automations, scoring, SMS, advanced segmentation. Creator ($69/mo) adds webinars and course creator.
- **GetResponse's strength**: Best for businesses that need email marketing + webinars + courses + funnels in one platform without the enterprise pricing of Braze/Iterable. Strong autoresponder heritage (one of the original autoresponder platforms).

### In Omnisend

Omnisend is an ecommerce-first email & SMS marketing automation platform — the affordable Klaviyo alternative for small/mid-sized ecommerce brands. Key email marketing capabilities:

- **Email campaigns**: Drag-and-drop editor with 250+ templates, product picker (pulls from Shopify/WooCommerce/BigCommerce), dynamic discount codes, product recommendations. A/B testing for subject lines and content on Standard+ plans.
- **Campaign Booster**: Auto-resend to non-openers with a different subject line after a configurable delay — unique feature for improving campaign reach without manual effort.
- **Automation workflows**: Pre-built workflows for welcome, abandoned cart, browse abandonment, post-purchase, win-back, birthday, back-in-stock. Custom workflows with any trigger. Multi-channel steps: email + SMS + web push in one workflow.
- **Segmentation**: Dynamic segments based on shopping behavior (purchased, viewed, carted), email engagement, contact properties, lifecycle stage, and RFM scoring. Auto-assigned lifecycle stages (New Subscriber, Active Customer, At Risk, Lapsed, Champions).
- **Product recommendations**: AI-powered product recommendation blocks in emails based on browsing and purchase history. Requires ecommerce integration.
- **Popups & forms**: Popup, embedded, landing page, Wheel of Fortune (gamified), multi-step (email → SMS). Targeting by URL, device, referral source, scroll depth, exit intent.
- **Reporting**: Revenue attribution per campaign and automation, click maps, segment comparison.
- **Pricing**: Free (250 contacts, 500 emails/mo), Standard ($16/mo, 500 contacts, 6K emails), Pro ($59/mo, unlimited emails). Contact-based billing. 30% discount for 3-month prepay.
- **Omnisend's strength**: Best for ecommerce brands that want email + SMS + push in one platform at a lower price point than Klaviyo, with strong pre-built automations and ecommerce integrations. Easier learning curve than Klaviyo but less advanced segmentation and predictive analytics.

### In SendPulse

SendPulse is an affordable multi-channel marketing platform with strong email automation and a generous free tier. Key email marketing capabilities:

- **Email campaigns**: Visual drag-and-drop editor with 130+ pre-designed templates. A/B testing for subject lines, email content, and send times — test up to 3 variants per campaign.
- **Mailing lists**: Custom variables (fields) on contacts for personalization and dynamic content. Segment lists by engagement, demographics, custom variables, or behavior. Import contacts via CSV, copy-paste, or API.
- **Automation 360**: Trigger-based email flows for welcome series, abandoned cart recovery, re-engagement, birthday/anniversary, and custom event triggers. Visual flow builder with conditions, delays, filters, and actions. Connects email flows to chatbot flows (Telegram, Facebook, WhatsApp) within the same automation — unique cross-channel capability.
- **Subscriber rating**: Engagement scoring system that rates subscribers based on opens, clicks, and activity. Use ratings to segment engaged vs. disengaged subscribers and target re-engagement campaigns.
- **Send time optimization**: AI-powered optimal send time per recipient based on historical engagement patterns. Available on paid plans.
- **Verifier integration**: Built-in email address verification to clean lists before sending — reduces bounces without a third-party tool.
- **Pricing**: Free plan (500 subscribers, 15,000 emails/month — one of the most generous free tiers). Paid plans start at $8/mo for 500 subscribers with unlimited emails. Scales by subscriber count.
- **SendPulse's strength**: Best for small businesses and solopreneurs who want email marketing + chatbots + SMS + web push in one affordable platform, especially those connecting email automations to chatbot flows via Automation 360. Less advanced segmentation than Klaviyo or ActiveCampaign but significantly cheaper.

### In Klaviyo

Klaviyo is a data-driven marketing automation platform built specifically for e-commerce. It's the dominant choice for Shopify-based brands and excels at behavior-triggered multi-channel messaging.

- **Flows (visual automation builder)**: Pre-built flow templates for welcome series, abandoned cart, browse abandonment, post-purchase, winback, sunset/re-engagement, back-in-stock, price drop. Drag-and-drop builder with event triggers, conditional splits, time delays, A/B splits. Cross-channel steps: email + SMS + push in one flow.
- **Campaigns**: One-time or scheduled broadcasts to segments. A/B testing for subject lines, content, and send time. Smart Send Time optimization uses predictive data to send at each recipient's optimal time.
- **Deep e-commerce integration**: Native Shopify (deep), BigCommerce, WooCommerce, Adobe Commerce — real-time sync of product data, cart data, purchase history, browse behavior. Product data available in templates for dynamic blocks and recommendations.
- **Segmentation**: Real-time segments based on purchase behavior, engagement, predictive attributes (CLV, churn risk), custom properties. Segments auto-update. Use as campaign audiences or flow triggers/filters.
- **Predictive analytics**: Predicted CLV, next order date, churn risk, average order value, spend tier, gender prediction. Requires sufficient data (500+ orders, 180+ days). Use predictions in segments and flows for proactive retention.
- **Multi-channel in one workflow**: Email, SMS/MMS, WhatsApp, RCS, mobile push — all available as flow steps. Conditional splits to route to preferred channel.
- **Forms**: Pop-ups, fly-outs, embedded forms, multi-step forms for list growth. Targeting rules (URL, device, referrer, time on page). A/B testing.
- **Reviews**: Product review collection via email/SMS flows, AI-powered review responses, review display widgets for social proof.
- **AI agents**: Marketing Agent generates campaigns from your URL. Segments AI creates segments from natural language. Email AI generates subject lines and content.
- **Pricing**: Free (250 profiles, 500 emails), Email ($20/mo, 500 profiles), Email + SMS ($35/mo). Profile-based billing — all active profiles count (Feb 2025 change). Scales with profile count.
- **Klaviyo's strength**: Best for e-commerce brands (especially Shopify) that need behavior-triggered automation with deep product data integration, predictive analytics, and multi-channel (email + SMS + push). Overkill for simple newsletters or non-e-commerce use cases.

### In SWAI

SWAI.ai is an AI-Native Revenue OS that handles email marketing as part of autonomous campaign execution. For full platform help, use `/sales-swai`.

- **AI-generated email campaigns**: SWAI creates email content, subject lines, and send schedules based on your campaign goal — no manual campaign building required.
- **Automated sequences**: Trigger-based flows (welcome, nurture, re-engagement) generated and optimized by AI.
- **Personalization**: Dynamic content based on contact data, behavior, and engagement patterns.
- **Unified with other channels**: Email campaigns are coordinated with landing pages, AI chat widget, and ads as part of the overall campaign goal — not managed as a standalone channel.
- **Limitations**: No manual drag-and-drop email editor, no advanced segmentation UI, no A/B testing controls — SWAI handles optimization autonomously. Users who want fine-grained control over email design and segmentation should use a dedicated ESP (Mailchimp, ActiveCampaign, Klaviyo).
- **Best for**: Agencies and small businesses that want AI to handle email as part of an autonomous marketing system. Not ideal for teams that need manual control over email templates, complex segmentation, or detailed campaign analytics.

### In AdRoll

AdRoll is primarily a retargeting and advertising platform, but includes email retargeting capabilities for ecommerce:

- **Email retargeting**: Send behavior-triggered emails based on website activity — browse abandonment, cart abandonment, post-purchase follow-up. Emails are retargeting-focused (triggered by pixel data), not broadcast campaigns.
- **Dynamic product emails**: Auto-populate emails with products the visitor viewed or carted. Requires product feed integration (Shopify, BigCommerce, WooCommerce).
- **Cross-channel orchestration**: Coordinate email retargeting with display, social, and CTV ads from the same platform. A visitor who abandons cart gets both an email and retargeting ads.
- **Audience segmentation**: Segment email recipients by website behavior, purchase history, and engagement level. Exclude recent purchasers, target high-value browsers.
- **Limitations**: AdRoll email is retargeting, not a full ESP. No broadcast campaigns, no newsletter builder, no advanced segmentation beyond behavior. For full email marketing, use a dedicated platform (Klaviyo, Omnisend, ActiveCampaign, etc.) and layer AdRoll for ad retargeting alongside email.
- **Best for**: Ecommerce brands already using AdRoll for ad retargeting who want to add behavior-triggered emails without a separate ESP for that specific use case. Most brands will still need a primary ESP for broadcast and lifecycle email.

### In MailerLite

MailerLite is an affordable, easy-to-use email marketing platform targeting solopreneurs, small businesses, and creators. For full platform help, use `/sales-mailerlite`.

- **Email campaigns**: Drag-and-drop editor (templates on paid plans only — free plan is design-from-scratch). A/B testing for subject lines and content. Campaign types: regular, A/B, resend (to non-openers), RSS. Auto-resend to non-openers with different subject line (Growing Business+).
- **Automation workflows**: Trigger-based sequences — form submission, group join, link click, date-based, e-commerce events. Actions: send email, wait, if/else condition, add/remove group, update field, webhook. Pre-built templates for welcome, abandoned cart, re-engagement, birthday. **Limitation**: Linear flow only — no multi-path branching. If/else splits exist but flows are linear. For complex branching, use ActiveCampaign or Klaviyo.
- **Segmentation**: Groups (manual or automation-assigned) + Segments (dynamic rule-based filters, up to 250). Filter by subscriber data, engagement, e-commerce activity.
- **Smart sending** (Advanced+): AI-optimized per-subscriber send time based on engagement history.
- **AI writing assistant** (Advanced+): Subject line and body copy generation.
- **Landing pages**: Drag-and-drop builder with templates, custom domains, SEO settings. 10 on Free, unlimited on paid. No A/B testing on landing pages.
- **Signup forms**: Pop-up, embedded, promotion (Advanced+). Exit-intent, scroll, time triggers. GDPR consent checkbox.
- **E-commerce**: Native Shopify, WooCommerce, BigCommerce, PrestaShop integration. Abandoned cart, post-purchase, product recommendation automations. Revenue tracking per campaign/automation.
- **Digital products & paid newsletters**: Sell downloads and recurring subscriptions via Stripe. 1 product on Free, 3 on Growing Business, unlimited on Advanced.
- **Pricing**: Free (500 subs, 12K emails/mo, no templates), Growing Business ($10/mo, unlimited emails, 3 seats), Advanced ($20/mo, unlimited seats, AI, smart sending), Enterprise (custom, dedicated IP).
- **Key terminology**: "Groups" = lists, "Segments" = dynamic filters, "Automation" = workflow, "Forms" = signup forms.
- **MailerLite's strength**: Best for solopreneurs and small businesses that want an affordable all-in-one (email + landing pages + digital products + paid newsletters) without the complexity of ActiveCampaign or the cost of Mailchimp. Overkill limitation: automation is basic compared to mid-market tools.

### In Ghost

Ghost has built-in email newsletter functionality tightly integrated with its publishing platform. Unlike traditional ESPs, Ghost sends emails as part of the content publishing workflow — you write a post and optionally send it as an email to your subscribers.

**Email campaigns**:
- Every post can be sent as an email newsletter at publish time
- Email-only posts: send to inbox without creating a web page
- Audience segmentation: by newsletter subscription, free/paid status, labels, or specific tier
- Multiple newsletters (Publisher plan: 3, Business: 10) — subscribers choose which to receive
- Customizable email template: header image, colors, typography, footer

**Automation**:
- Ghost has minimal automation compared to traditional ESPs
- Welcome emails for free and paid member signups (configurable)
- No drip sequences, conditional logic, or event-triggered automations natively
- Workaround: Use Zapier to trigger external email tools (Mailchimp, ActiveCampaign) based on Ghost member events

**Segmentation**:
- By newsletter subscription (which newsletters they opted into)
- By access level: free, paid, comped, specific tier
- By labels (custom tags you assign to members)
- No behavioral segmentation (no "opened last 3 emails" or "clicked link X")

**Analytics**:
- Per-newsletter: open rate, click rate, positive/negative feedback reactions
- Open rates are approximate due to email client pixel blocking (Apple Mail Privacy Protection)
- Click tracking is more reliable than open tracking
- No A/B testing for subject lines or content

**Key differences from traditional ESPs**:
- Ghost is publishing-first, email-second — you publish content that happens to also send as email
- No drag-and-drop email builder — your email template matches your Ghost theme/newsletter settings
- No automation workflows — Ghost handles email as a broadcast tool, not a marketing automation platform
- If you need sequences, conditional workflows, or advanced automation, pair Ghost with an ESP via Zapier

**Best for**: Publishers and bloggers who want a unified publishing + email experience without managing a separate ESP. Not ideal for marketers who need advanced automation, A/B testing, or complex segmentation.

### In Retention.com

Retention.com is not an ESP — it's an identity resolution layer that feeds identified contacts INTO your ESP (Klaviyo, Mailchimp, Omnisend, etc.) for email marketing:

- **Reclaim (abandonment recovery)**: Identifies anonymous visitors who abandon checkout/cart/browse and pushes them to your ESP's abandonment flows. Captures events that Klaviyo and Elevar miss because the visitor was anonymous.
- **Grow (list building)**: Identifies anonymous visitors and adds them to your marketing email list in your ESP. These contacts bypass opt-in forms entirely.
- **Integration pattern**: Retention.com → your ESP (Klaviyo, etc.) → your email flows. Retention.com identifies the contact; your ESP sends the email. Keep identified contacts in separate segments with different cadence and sunset rules.
- **Deliverability impact**: Retention.com contacts didn't opt in. Send from a separate subdomain. Expect higher spam complaints and lower engagement. Don't mix with your organic list segments.
- **Best for**: Ecommerce brands using Klaviyo/Omnisend who want to expand their abandonment recovery and list building beyond what opt-in forms capture. Not a replacement for an ESP — it's a data source that feeds into one.

### In Buttondown

Buttondown is a minimal, developer-friendly newsletter platform with Markdown-native editing and privacy-first analytics.

**Broadcasts**
- Compose in Markdown or rich text editor. Schedule for future delivery or send immediately.
- Email-to-send: email `newsletters@mg.buttondown.email` to create a draft from any email client.
- File attachments available as an add-on ($9/mo).

**Automations**
- Welcome sequences for new subscribers, tag-triggered flows, and survey-driven flows.
- Requires Automations add-on ($29/mo) — not included in base plan.
- No visual automation builder (unlike Kit or ActiveCampaign) — automations are configured via settings and rules.

**Segmentation**
- Tags for manual categorization (add-on: $9/mo for tagging & segmentation).
- Segments are dynamic filtered groups based on tags, subscription type, and metadata.
- Custom metadata on subscribers via API for advanced segmentation.

**Analytics**
- Opt-in only — not enabled by default (privacy-first). Add-on: $9/mo.
- Tracks opens, clicks, subscriber growth when enabled.

**API-first**
- Full REST API at `https://api.buttondown.com/v1/` — available on all plans including free.
- Every UI feature is available via API. Manage subscribers, send emails, create tags programmatically.
- CLI tool available for terminal-based newsletter management.

**Best for**: Developers and technical writers who want Markdown, API access, and no tracking by default. Not ideal for visual-heavy marketing campaigns or complex multi-step automations.

