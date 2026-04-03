---
name: sales-iterable
description: "Iterable platform help — cross-channel customer engagement with Studio journey builder, AI suite (Brand Affinity, STO, Predictive Goals), and Smart Ingest from 23+ data sources. Use when configuring Studio journeys, setting up campaigns or experiments, managing email/SMS/push/in-app/WhatsApp channels, using Iterable AI features, configuring Smart Ingest or Snowflake sync, or troubleshooting Iterable. Do NOT use for general email marketing strategy (use /sales-email-marketing), push notification strategy (use /sales-push-notification), in-app messaging strategy (use /sales-in-app-messaging), transactional email strategy (use /sales-transactional-email), cross-platform deliverability (use /sales-deliverability), or connecting tools generically (use /sales-integration)."
argument-hint: "[describe what you need help with in Iterable]"
license: MIT
version: 1.0.0
tags: [sales, marketing-automation, cross-channel, platform]
---
# Iterable Platform Help

Help the user with Iterable platform questions — from Studio journey creation and campaign configuration through channel setup (email, SMS, push, in-app, web push, WhatsApp), AI features, data integration, experiments, and API usage.

## Step 1 — Gather context

Ask the user:

1. **What area do you need help with?**
   - A) Studio — journey workflows, tiles, branching, delays
   - B) Campaigns — single-send or triggered messages
   - C) Email — templates, dynamic content, editor
   - D) SMS/MMS — setup, two-way, media messages
   - E) Push notifications — iOS, Android, web push
   - F) In-app messages — modals, banners, Mobile Inbox, Embedded Messages
   - G) WhatsApp — template setup, message types
   - H) Experiments — A/B testing, multivariate
   - I) AI features — Brand Affinity, STO, Frequency Optimization, Journey Assist
   - J) Data — Smart Ingest, Snowflake, Catalog, user profiles, events
   - K) Segmentation — audiences, filters, dynamic lists
   - L) Integrations — webhooks, API, Zapier, third-party
   - M) Analytics & reporting — campaign performance, engagement
   - N) Something else — describe it

2. **What's your role?**
   - A) Marketer / campaign manager
   - B) Developer / engineer
   - C) Data / analytics
   - D) Marketing ops / admin

3. **What's the goal?**
   - A) Set something up for the first time
   - B) Optimize or improve existing setup
   - C) Troubleshoot a problem
   - D) Understand how something works

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the question is about general strategy rather than Iterable-specific config, route to the appropriate skill:

| Question type | Route to |
|---|---|
| Email marketing strategy (not Iterable-specific) | `/sales-email-marketing` |
| Push notification strategy across tools | `/sales-push-notification` |
| In-app messaging strategy across tools | `/sales-in-app-messaging` |
| Transactional email provider comparison | `/sales-transactional-email` |
| SPF/DKIM/DMARC setup across tools | `/sales-deliverability` |
| Connecting Iterable to CRM via Zapier/Make | `/sales-integration` |

Otherwise, answer directly with Iterable-specific guidance below.

## Step 3 — Iterable platform reference

### Studio (Journey Builder)

Studio is Iterable's visual journey orchestration tool. Key concepts:

- **Journey tiles**: Send (email, push, SMS, in-app, WhatsApp, web push), Delay, Filter, Experiment, Update User Profile, Webhook, Create Event, A/B Split
- **Entry sources**: List-triggered, event-triggered (custom events, purchases), segment-triggered, API-triggered
- **Branching**: Filter tiles split users by attributes, events, or channel engagement. Use "Has received" / "Has opened" / "Has clicked" filters for engagement-based routing.
- **Delays**: Fixed (wait X hours/days) or dynamic (wait until specific date field)
- **Exit criteria**: Define conditions that remove users from the journey (e.g., purchase made, unsubscribed)
- **Journey Assist (AI)**: Describe a journey in natural language → Iterable generates the workflow. Review and refine before activating.
- **Lifecycle journeys**: Welcome → onboarding → activation → retention → winback. Each as a separate Studio journey with entry/exit criteria.

### Campaigns

- **Blast campaigns**: One-time sends to a list or segment
- **Triggered campaigns**: Fired by API call, custom event, or purchase event
- **Proof campaigns**: Test sends to internal list before launching
- **Recurring campaigns**: Scheduled to repeat daily/weekly/monthly
- **Multi-channel**: A single campaign can target email, push, SMS, in-app, web push, or WhatsApp

### Channels

| Channel | Key capabilities |
|---|---|
| **Email** | Drag-and-drop editor, HTML editor, dynamic content with Handlebars, AMP email, snippets (reusable content blocks), preview/test across clients |
| **SMS/MMS** | Two-way messaging, media-rich (images, GIFs), keyword opt-in/out, short codes and long codes, quiet hours |
| **Push (iOS/Android)** | Rich push (images, action buttons, sounds), deep linking, silent push for background data sync, push action buttons |
| **Web push** | Chrome, Firefox, Opera, Safari via FCM. Browser permission prompt, icon/image support |
| **In-app messages** | Center, top, bottom, full placement. Custom HTML/CSS. Trigger on app open, custom event, or journey |
| **Mobile Inbox** | Persistent message list — users browse, read, delete. Messages stay until expiry or dismissal. Similar to Braze Content Cards |
| **Embedded Messages** | Inline native content — no overlay or popup. Renders in your app's native UI. Requires SDK integration |
| **WhatsApp** | Marketing, Utility, Service message types. Quick reply buttons, CTA buttons. Meta-approved templates required |

### Iterable AI Suite

| Feature | What it does |
|---|---|
| **Brand Affinity** | Scores each user's engagement level (Loyal, Positive, Neutral, Negative, Never Engaged). Use as segmentation filter or journey branch condition |
| **Send Time Optimization (STO)** | Per-user optimal send time based on historical engagement. Enable per campaign or journey step |
| **Frequency Optimization** | AI-chosen cap on messages per user per channel per time window. Prevents over-messaging |
| **Predictive Goals** | Predict likelihood of user taking a specific action (purchase, churn, etc.) within a time window |
| **Journey Assist** | Natural language → Studio journey. Describe what you want, AI generates the workflow |
| **Copy Assist** | AI-generated subject lines and email copy suggestions |
| **Smart Segmentation** | AI-suggested segments based on user behavior patterns |

### Data & Integration

**Smart Ingest** (co-built with Hightouch):
- Sync from 23+ data sources: Snowflake, BigQuery, Redshift, Databricks, PostgreSQL, S3, and more
- Sync types: Users, Events, Catalog items, Lists
- Frequency: Up to every 15 minutes
- Configure in Iterable dashboard under Integrations > Smart Ingest

**Snowflake Secure Data Sharing**:
- Export Iterable data (user profiles, campaign data, events) to your Snowflake account
- Join Iterable data with your warehouse data for BI/analytics
- No ETL required — uses Snowflake's native data sharing

**Catalog**:
- Store product data, content, recommendations in Iterable
- Reference catalog items in templates for dynamic product recommendations
- Sync via Smart Ingest or API (`POST /api/catalogs/{catalogName}/items`)

**User profiles & events**:
- Update users: `POST /api/users/update` with `email` or `userId` + `dataFields`
- Track events: `POST /api/events/track` with `eventName` + `dataFields`
- Bulk operations: `POST /api/users/bulkUpdate`, `POST /api/events/trackBulk` (rate limit: 10 req/s)

### Data model

| Object | Key fields | Notes |
|---|---|---|
| **User** | `email`, `userId`, `dataFields` (custom attributes), `phoneNumber` | `email` or `userId` is the primary identifier |
| **Event** | `email`/`userId`, `eventName`, `dataFields`, `createdAt` | Custom events power triggers and segmentation |
| **Campaign** | `id`, `name`, `type` (blast/triggered/recurring), `messageMedium` | One campaign = one channel |
| **List** | `id`, `name`, `listType` (static/dynamic) | Static: manual membership. Dynamic: rule-based |
| **Catalog** | `catalogName`, items with custom fields | Product data for personalization |
| **Template** | `templateId`, `name`, `messageMedium` | Email, push, SMS, in-app, web push templates |
| **Experiment** | `experimentId`, variants, metrics | A/B or multivariate testing |

### Experiments

- **Campaign experiments**: A/B test subject lines, content, send time, channel within a campaign
- **Journey experiments**: Experiment tile in Studio — split traffic between journey branches
- **Holdout groups**: Measure lift by withholding messages from a control group
- **Winning criteria**: Open rate, click rate, conversion event, custom metric
- **Statistical significance**: Iterable calculates significance — wait for sufficient sample before declaring a winner

### Segmentation

- **Static lists**: Manual membership — upload CSV, API subscribe, or journey action
- **Dynamic lists**: Rule-based — auto-update based on user attributes, events, engagement
- **Filters**: Combine user attributes, event history, campaign engagement, Brand Affinity labels, catalog interactions
- **Cohorts**: Time-based user groups (e.g., "signed up in last 30 days")

### API quick reference

| Action | Method & endpoint |
|---|---|
| Update user | `POST /api/users/update` |
| Bulk update users | `POST /api/users/bulkUpdate` |
| Track event | `POST /api/events/track` |
| Bulk track events | `POST /api/events/trackBulk` |
| Send email | `POST /api/email/target` |
| Send push | `POST /api/push/target` |
| Send SMS | `POST /api/sms/target` |
| Send in-app | `POST /api/inApp/target` |
| Create list | `POST /api/lists` |
| Subscribe to list | `POST /api/lists/subscribe` |
| Unsubscribe from list | `POST /api/lists/unsubscribe` |
| Export users | `GET /api/export/data.csv` |
| Get campaigns | `GET /api/campaigns` |
| Catalog items | `POST /api/catalogs/{catalogName}/items` |

- **Base URLs**: `https://api.iterable.com` (US), `https://api.eu.iterable.com` (EU)
- **Auth**: `Api-Key` header. Optional JWT for client-side keys (Bearer token in `Authorization` header).
- **Rate limits**: Varies by endpoint. Bulk track: 10 req/s. Export: 4 req/min. 429 status on limit — implement exponential backoff.

### Integrations

- **Smart Ingest**: 23+ data sources (Snowflake, BigQuery, Redshift, Databricks, etc.)
- **Snowflake Secure Data Sharing**: Export Iterable data to Snowflake
- **System webhooks**: Email send/open/click, push send/open, SMS send/bounce, list subscribe/unsubscribe. Configure at Integrations > System Webhooks. Auth: None, Basic, or OAuth 2.0.
- **Journey webhooks**: Webhook tile in Studio — call external APIs at any point in a journey
- **Native integrations**: Shopify (product sync, cart events, purchase tracking), Segment, Hightouch, Movable Ink, Facebook Custom Audiences, Google Ads, Mixpanel, Amplitude
- **Zapier**: Triggers and actions for user updates, events, campaigns
- **SDKs**: iOS (Swift), Android (Kotlin/Java), React Native, Web (JavaScript)

### Pricing

As of March 2026 — verify current pricing with Iterable sales:
- **No free tier or self-serve signup** — enterprise sales process
- **MAU-based pricing** with channel-specific usage fees
- **Growth**: ~$3K-$6K/mo for 10K-50K MAUs (core channels, basic segmentation, workflows)
- **Enterprise**: Custom pricing ($10K+/mo) — all channels, AI suite, Smart Ingest, dedicated support
- **SMS and push** may carry additional per-message or per-MAU costs beyond base plan

## Step 4 — Actionable guidance

### Getting started checklist

1. **Set up data center** — confirm US or EU data center for your project (affects API base URL and data residency)
2. **Configure channels** — authenticate sending domains (email), set up FCM/APNs (push), provision SMS numbers, configure web push
3. **Integrate SDK** — install iOS/Android/Web SDK for push, in-app, Mobile Inbox, Embedded Messages, and event tracking
4. **Import users** — bulk upload via CSV, API (`/api/users/bulkUpdate`), or Smart Ingest from your data warehouse
5. **Define events** — map your key user actions (signup, purchase, feature_used, cart_abandoned) and implement tracking via SDK or API
6. **Build segments** — create dynamic lists for key audiences (active, lapsed, high-value, new users)
7. **Create templates** — design email, push, SMS, and in-app templates with dynamic Handlebars content
8. **Build first journey** — start with a welcome journey in Studio: entry on signup event → email → delay → push → branch on engagement
9. **Set up experiments** — A/B test subject lines and send times on your first campaign
10. **Enable AI** — turn on Brand Affinity, STO, and Frequency Optimization once you have 30+ days of engagement data
11. **Configure webhooks** — set up system webhooks for delivery monitoring and CRM sync
12. **Connect data warehouse** — set up Snowflake Secure Data Sharing or Smart Ingest for bidirectional data flow

### Key metrics to track

| Metric | Where in Iterable | Benchmark |
|---|---|---|
| Email open rate | Campaign analytics | 20-25% |
| Email click rate | Campaign analytics | 2-5% |
| Push open rate | Campaign analytics | 5-15% |
| In-app click rate | Campaign analytics | 15-30% |
| SMS delivery rate | Campaign analytics | > 95% |
| Journey completion rate | Studio analytics | Varies by journey |
| Brand Affinity distribution | AI > Brand Affinity | Healthy: majority Positive/Loyal |
| Experiment significance | Experiment results | Wait for 95% confidence |

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Campaign = one channel only.** Unlike Braze (where a Canvas can send email + push + in-app), an Iterable campaign targets one message channel. To send across multiple channels, use Studio journeys with multiple Send tiles — don't try to make a single campaign multi-channel.
2. **Brand Affinity needs data.** Brand Affinity labels won't be accurate until you have 30+ days of engagement data across campaigns. Don't use Brand Affinity for segmentation in your first month — you'll get mostly "Neutral" and "Never Engaged" labels.
3. **API rate limits vary by endpoint and are per-project.** Bulk track events is 10 req/s, exports are 4 req/min. Multiple API consumers on the same project share the per-project rate limit. Implement exponential backoff for 429 responses.
4. **Smart Ingest syncs are not real-time.** The fastest Smart Ingest sync interval is 15 minutes. For real-time data, use the REST API (`/api/users/update`, `/api/events/track`) instead. Smart Ingest is best for periodic warehouse syncs, not event streaming.
5. **In-app messages require SDK integration.** Unlike email or push, in-app messages, Mobile Inbox, and Embedded Messages require the Iterable SDK installed in your app. They won't work if you're only using the REST API for server-side messaging.

## Related skills

- `/sales-email-marketing` — Email marketing strategy across platforms (not Iterable-specific)
- `/sales-push-notification` — Push notification strategy (opt-in, rich push, frequency capping across tools)
- `/sales-in-app-messaging` — In-app messaging strategy (message types, trigger design, onboarding across tools)
- `/sales-transactional-email` — Transactional email delivery (provider comparison, API integration)
- `/sales-deliverability` — Email deliverability (SPF/DKIM/DMARC, warmup, sender reputation)
- `/sales-integration` — Connect Iterable to CRM, data warehouse, and other tools
- `/sales-braze` — Braze platform help (primary competitor — for Braze-specific questions)
- `/sales-customerio` — Customer.io platform help (another cross-channel platform)
- `/sales-klaviyo` — Klaviyo platform help (e-commerce-focused engagement)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building a welcome journey in Studio
**User says**: "How do I create a multi-step welcome journey for new users in Iterable?"
**Skill does**: Walks through creating a Studio journey: entry trigger on "signup" custom event → Send email (welcome + value prop) → Delay 1 day → Filter (opened welcome email?) → Yes branch: Send push (feature highlight) → Delay 2 days → Send in-app (onboarding tooltip). No branch: Send email (re-engagement). Exit criteria: user completes onboarding event. Includes template recommendations and Brand Affinity filtering for later stages.
**Result**: Complete Studio journey with multi-channel onboarding flow

### Example 2: Setting up experiments
**User says**: "How do I A/B test email subject lines in Iterable?"
**Skill does**: Explains two approaches: 1) Campaign-level experiment — create a blast campaign, add experiment with 2-4 subject line variants, set winning metric (open rate), sample size (20%), and auto-send winner timing. 2) Journey experiment — add Experiment tile in Studio to split traffic between two email Send tiles with different subjects. Recommends minimum 1,000 recipients per variant for statistical significance.
**Result**: A/B test configured with proper sample sizing and winning criteria

### Example 3: Integrating with Snowflake via Smart Ingest
**User says**: "How do I sync our user data from Snowflake into Iterable?"
**Skill does**: Walks through Smart Ingest setup: Integrations > Smart Ingest > Create Connection > Select Snowflake > Configure credentials (account, warehouse, database, schema) > Map sync type (Users) > Map fields (email → email, custom attributes → dataFields) > Set sync frequency (every 15 min or hourly) > Test and activate. Mentions Snowflake Secure Data Sharing for the reverse direction (Iterable → Snowflake).
**Result**: Bidirectional Snowflake-Iterable data pipeline configured

## Troubleshooting

### Push notifications not delivering on iOS
**Symptom**: Push campaigns show sends but no deliveries on iOS devices
**Cause**: APNs certificate expired, sandbox/production mismatch, or SDK not properly initialized
**Solution**: 1) Check APNs certificate expiry in Iterable Settings > Mobile Apps. 2) Verify you're using the correct APNs environment (sandbox for TestFlight, production for App Store). 3) Confirm the Iterable SDK is initialized with the correct API key and push registration is calling `registerForRemoteNotifications()`. 4) Check that the device token is being sent to Iterable via `setDeviceToken()`. 5) Test with a fresh app install to generate a new token.

### Smart Ingest sync failing
**Symptom**: Smart Ingest connection shows errors or no data syncing
**Cause**: Credential issues, query timeout, or field mapping mismatch
**Solution**: 1) Verify Snowflake/BigQuery credentials are still valid and have SELECT permissions on the source table. 2) Check that the source query returns data (run it directly in your warehouse). 3) Verify field mapping — email or userId must be mapped to identify users. 4) Check for data type mismatches (e.g., string field mapped to number). 5) Review Smart Ingest logs in Iterable for specific error messages.

### Low Brand Affinity accuracy
**Symptom**: Most users showing as "Neutral" or "Never Engaged" in Brand Affinity
**Cause**: Insufficient engagement data — Brand Affinity needs historical cross-channel interaction data to generate meaningful scores
**Solution**: 1) Ensure you've been sending campaigns across multiple channels for 30+ days. 2) Verify that open/click tracking is enabled for email campaigns. 3) Check that push notification open tracking is working (SDK properly configured). 4) Brand Affinity recalculates periodically — wait for the next refresh cycle after adding more engagement data. 5) In the meantime, use traditional engagement-based segmentation (opened in last 30 days) instead of Brand Affinity labels.
