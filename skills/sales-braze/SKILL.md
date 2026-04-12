---
name: sales-braze
description: "Braze platform help — Canvas Flow journey orchestration, email/push/in-app/SMS/WhatsApp/Content Cards campaigns, BrazeAI (predictive, generative, agentic), Braze Data Platform (CDI, Currents), real-time segmentation, Catalogs, Feature Flags, transactional email API, Liquid templating, Connected Content, Braze Alloys integrations, SCIM, REST API. Use when asking 'how do I do X in Braze', configuring Canvas flows, building segments, setting up Currents data streaming, using the Braze API, or migrating from Appboy. Do NOT use for building prospect lists (use /sales-prospect-list), designing outbound cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), transactional email strategy (use /sales-transactional-email), push notification strategy (use /sales-push-notification), in-app messaging strategy (use /sales-in-app-messaging), or email marketing strategy (use /sales-email-marketing)."
argument-hint: "[describe what you need help with in Braze]"
license: MIT
version: 1.0.0
tags: [sales, marketing-automation, messaging, push-notification, platform]
github: "https://github.com/braze-inc"
---
# Braze Platform Help

Help the user with Braze platform questions — from Canvas Flow journey orchestration and cross-channel campaigns through BrazeAI, Braze Data Platform, segmentation, Catalogs, Feature Flags, and REST API integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Braze do you need help with?**
   - A) Canvas Flow — journey orchestration, multi-step cross-channel flows
   - B) Campaigns — single-send or API-triggered messages
   - C) Email — templates, drag-and-drop editor, Liquid, Connected Content
   - D) Push notifications — iOS, Android, web push, rich push (route to `/sales-push-notification` for cross-platform strategy)
   - E) In-app messages / Content Cards — modals, slideups, persistent cards (route to `/sales-in-app-messaging` for cross-platform strategy)
   - F) SMS / MMS / RCS / WhatsApp / LINE — mobile messaging channels
   - G) BrazeAI — predictive models, generative content, AI agents, Decisioning Studio
   - H) Segmentation — real-time segments, SQL segments, CDI Segments, filters
   - I) Braze Data Platform — Cloud Data Ingestion, Currents streaming, data transformation
   - J) Catalogs — product data, location data, dynamic personalization
   - K) Feature Flags — controlled rollouts, A/B testing features
   - L) Transactional email — dedicated API for time-sensitive 1:1 messages (route to `/sales-transactional-email` for cross-platform)
   - M) Deliverability — domain auth, IP warmup, sender reputation (route to `/sales-deliverability` for cross-platform)
   - N) REST API — endpoints, authentication, rate limits, SDKs
   - O) Integrations — Braze Alloys, CDP connectors, data warehouse sync
   - P) Liquid templating / Connected Content — dynamic personalization
   - Q) Admin — workspaces, API keys, SCIM, permissions, billing
   - R) Migration from Appboy or another platform
   - S) Something else — describe it

2. **What's your role?**
   - A) Marketing / CRM / lifecycle marketer
   - B) Growth / product manager
   - C) Developer / engineer
   - D) Data / analytics
   - E) Admin / ops
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Push notification strategy → `/sales-push-notification`
- In-app messaging strategy → `/sales-in-app-messaging`
- Email marketing strategy (opt-in) → `/sales-email-marketing`
- Transactional email architecture → `/sales-transactional-email`
- Cross-platform deliverability → `/sales-deliverability`
- Tool integration architecture → `/sales-integration`
- Lead scoring models → `/sales-lead-score`
- Live chat / chatbot → `/sales-live-chat`
- Loyalty programs → `/sales-loyalty`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Braze platform reference

### Canvas Flow (Journey Orchestration)
- **What it is**: Visual drag-and-drop journey builder for multi-step, cross-channel customer experiences
- **Key concepts**: Canvas = a journey, Steps = individual actions (message, delay, decision split, experiment, audience sync, action paths, user update), Variants = A/B test branches
- **Channels in Canvas**: Email, push (iOS/Android/web), in-app message, Content Card, SMS/MMS, WhatsApp, webhook
- **Triggers**: Action-based (user does X), API-triggered, scheduled, event-triggered
- **Branching**: Decision Split (filter-based), Action Paths (did user do X within Y time?), Audience Paths (segment membership), Experiment Path (A/B/n testing)
- **Entry controls**: Entry schedule (scheduled, action-based, API-triggered), entry limits, rate limiting, re-eligibility, quiet hours
- **Canvas vs Campaign**: Use Canvas for multi-step journeys with branching. Use Campaign for simple single-send messages. Canvas supports all channels Campaign does, plus more complex orchestration.
- **Best practices**: Start with the simplest Canvas that achieves your goal. Use Decision Splits to personalize, not to create complexity. Set entry limits to prevent over-messaging. Use Experiment Paths to optimize.

### Campaigns
- **What it is**: Single-step message sends across any channel
- **Types**: Scheduled, action-based (event trigger), API-triggered
- **A/B testing**: Test subject lines, content, send time, channel — Braze auto-selects winner
- **Multivariate**: Up to 8 variants per campaign
- **API-triggered campaigns**: `POST /campaigns/trigger/send` — send with dynamic properties
- **Transactional campaigns**: Dedicated endpoint for time-sensitive 1:1 messages with SLA guarantees
- **Best practices**: Use campaigns for simple one-off sends. Move to Canvas when you need branching, delays, or multi-step logic.

### Email
- **Editor**: Drag-and-drop editor, HTML editor, or plain text
- **Templating**: Liquid templating engine — `{{${first_name}}}`, conditionals, loops, filters
- **Connected Content**: Pull dynamic data from external APIs at send time — `{% connected_content https://api.example.com/user/{{${user_id}}} :save response %}`
- **Dynamic content**: Conditional content blocks based on user attributes, catalog data, or Connected Content
- **AMP for email**: Interactive email elements (forms, carousels, accordions)
- **Preference centers**: Built-in subscription management UI
- **IP warming**: Braze provides dedicated IPs and warmup scheduling assistance
- **Plan gates**: AMP, advanced analytics, dedicated IPs available on Pro+

### Push Notifications
- **Platforms**: iOS (APNs), Android (FCM), Web (Web Push), Kindle, Huawei
- **Rich push**: Images, GIFs, action buttons, custom sounds
- **Push stories**: Multi-page carousel push (iOS and Android)
- **Notification channels**: Android notification channel management
- **Silent push**: Background data sync without user-visible notification
- **Push primers**: In-app message asking for push permission before the OS prompt (increases opt-in rates)
- **TTL and priority**: Configurable time-to-live and delivery priority
- **Best practices**: Always use a push primer before the OS prompt. Segment by push-enabled status. Respect quiet hours.

### In-App Messages
- **Types**: Modal, Slideup, Fullscreen, HTML Custom, Survey
- **Triggers**: Session start, custom event, purchase event, push click, or API
- **Display rules**: Show once, show on every session, show after X sessions, show after delay
- **Dark mode**: Automatic dark mode support
- **Custom HTML**: Full HTML/CSS/JS for complex in-app experiences
- **Best practices**: Use for onboarding, feature announcements, surveys, and permission priming. Don't overuse — one in-app message per session max.

### Content Cards
- **What it is**: Persistent content feed within your app — like a personalized inbox
- **Types**: Classic (image + text), Banner (image only), Captioned Image
- **Key difference from in-app**: Content Cards persist until dismissed or expired. In-app messages show once and disappear.
- **Use cases**: Promotions, personalized recommendations, onboarding checklists, notification center
- **Pinning**: Pin important cards to the top of the feed
- **Expiration**: Set card expiry (default 30 days)
- **Best practices**: Use Content Cards for persistent content users can revisit. Use in-app messages for time-sensitive interruptions.

### SMS / MMS / RCS
- **SMS**: Two-way messaging, subscription management, keyword handling (STOP, HELP, custom)
- **MMS**: Images, GIFs, video, audio in messages
- **RCS**: Rich Communication Services — rich media, carousels, suggested actions (Android)
- **Subscription groups**: Manage SMS opt-in/opt-out per subscription group
- **Short codes / long codes / toll-free**: Configure sender numbers by country
- **Smart encoding**: Automatic GSM-7 vs UCS-2 detection
- **Quiet hours**: Configurable no-send windows per timezone
- **Plan gates**: SMS/RCS available on Pro+ plan

### WhatsApp
- **What it is**: WhatsApp Business API messaging via Braze
- **Templates**: Must be Meta-approved before sending (24-48hr review)
- **Conversation types**: Marketing, utility, service conversations — different pricing per type
- **Media**: Images, documents, video, location, interactive buttons/lists
- **Two-way**: Receive and respond to user messages within 24hr service window

### LINE
- **What it is**: LINE messaging for APAC markets (Japan, Taiwan, Thailand, Indonesia)
- **Message types**: Text, image, video, sticker, rich menu, flex message
- **Use case**: Primary engagement channel for brands with APAC presence

### BrazeAI
- **Predictive Suite**: Churn prediction, purchase prediction, event prediction — ML models that score users 0-100
- **Intelligent Timing**: Send at the optimal time for each user (learned from behavior)
- **Intelligent Channel**: Predict which channel each user is most likely to engage with
- **Intelligent Selection**: Automatic A/B test winner selection based on Bayesian optimization
- **AI Copywriting**: Generate email/push/SMS copy from prompts
- **AI Image Generation**: Create images from text descriptions
- **Decisioning Studio**: 1:1 personalization engine — picks the best message/offer per user at send time
- **AI Agents**: Autonomous agents that optimize campaigns continuously
- **Plan gates**: Predictive Suite requires Pro+. Decisioning Studio requires Enterprise.

### Braze Data Platform
- **Cloud Data Ingestion (CDI)**: Sync user attributes, events, and purchases from Snowflake, Redshift, BigQuery, Databricks, or Microsoft Fabric directly into Braze
- **CDI Segments**: Build segments directly from warehouse data without importing (zero-copy)
- **Currents**: Real-time event streaming — export engagement events (opens, clicks, purchases, custom events) to data warehouses, CDPs, or analytics tools
- **Currents destinations**: Amazon S3, Azure Blob Storage, Google Cloud Storage, Snowflake, Segment, mParticle, Amplitude, Mixpanel, Treasure Data
- **Data transformation**: Transform incoming webhook data before ingesting into Braze
- **Connected Content**: Pull external data into messages at send time via HTTP API calls

### Segmentation
- **Real-time segments**: Auto-updating based on user attributes, behavior, events, purchases
- **Filters**: 50+ filter types — demographics, behavior, engagement, custom events, purchase history, location, technology
- **SQL Segment Extensions**: Write SQL queries against your warehouse (CDI Segments) to build segments
- **Predictive segments**: Based on BrazeAI predictions (churn risk, purchase likelihood)
- **Segment Analytics**: Size, growth, engagement overlap
- **Best practices**: Start with behavioral segments (what users did), not just demographic (who they are). Layer engagement recency to keep segments fresh.

### Catalogs
- **What it is**: Store non-user data (products, promotions, locations, restaurants, events) in Braze for personalization
- **Use cases**: Product recommendations, location-based content, dynamic promotion cards, personalized menus
- **Access in Liquid**: `{% catalog_items your_catalog_name {{${user_attribute}}} %}`
- **API management**: Create, update, delete catalog items via REST API
- **Limits**: Up to 100 catalogs, 100M items across all catalogs

### Feature Flags
- **What it is**: Control feature visibility and rollout without code deploys
- **Use cases**: Gradual rollouts, A/B test features, kill switches, user-segment-targeted features
- **Canvas integration**: Enable/disable features as a Canvas step
- **Properties**: Attach key-value properties to feature flags for configuration

### Transactional Email
- **Endpoint**: `POST /transactional/v1/campaigns/{campaign_id}/send`
- **Purpose**: Time-sensitive 1:1 emails (password resets, order confirmations, OTP)
- **SLA**: Designed for high reliability with delivery guarantees
- **Separate from marketing**: Transactional campaigns don't count against marketing rate limits

### Data model quick reference

| Object | Key fields | Notes |
|---|---|---|
| User | external_id, email, phone, attributes, events, purchases | Central entity — all engagement ties to users |
| Campaign | name, channel, schedule, segments, messages | Single-step message send |
| Canvas | name, steps, variants, entry_schedule, tags | Multi-step journey orchestration |
| Segment | name, filters | Auto-updating audience |
| Content Card | title, description, image, url, extras, expiration | Persistent in-app content |
| Catalog | name, fields, items | Non-user data for personalization |
| Subscription Group | name, type (email/SMS), status | Opt-in/opt-out management per channel |
| Currents | connector_type, destination, events | Real-time event streaming export |
| Feature Flag | id, name, enabled, properties | Controlled feature rollout |

### API quick reference
- **Base URL**: `https://rest.{instance}.braze.com` (instance-specific — check dashboard for yours)
- **Auth**: `Authorization: Bearer YOUR_REST_API_KEY`
- **Rate limit**: 250,000 requests/hour default
- **Key endpoints**: `/users/track`, `/users/export/ids`, `/messages/send`, `/campaigns/trigger/send`, `/canvas/trigger/send`, `/catalogs`, `/templates/email/create`, `/segments/list`
- **SDKs**: iOS, Android, Web (JS), React Native, Flutter, Unity, Roku, Unreal Engine
- **Full reference**: See `references/braze-api-reference.md`

### Integrations (Braze Alloys)
- **CDPs**: Segment, mParticle, Tealium, Rudderstack, Census, Hightouch, Amperity, Amplitude
- **Data warehouses**: Snowflake (bidirectional), Redshift, BigQuery, Databricks, Microsoft Fabric
- **Analytics**: Mixpanel, Amplitude, Looker, Tableau
- **Attribution**: Adjust, AppsFlyer, Branch, Kochava, Singular
- **CRM**: Salesforce (via partners/Zapier)
- **E-commerce**: Shopify, Talon.One, Voucherify
- **Total**: 140+ technology partnerships

## Step 4 — Actionable guidance

Based on the user's area, provide:

1. **Step-by-step instructions** — exact Braze UI paths or API calls
2. **Configuration recommendations** — settings, plan considerations, gotchas
3. **Verification steps** — how to confirm the setup works
4. **Next steps** — what to do after the immediate task

### Common setup workflows

**First-time setup checklist:**
1. Configure SDK integration (iOS/Android/Web) — install SDK, set API key and endpoint
2. Set up user identification — `changeUser()` with external_id
3. Track custom events and attributes — define your event taxonomy
4. Set up email domain authentication (SPF/DKIM/DMARC)
5. Configure push credentials (APNs certificate, FCM key)
6. Create your first segment based on user behavior
7. Build a simple campaign to test each channel
8. Set up Currents for data export (if needed)

**Canvas Flow quickstart:**
1. Dashboard → Messaging → Canvas → Create Canvas
2. Set entry schedule (action-based, scheduled, or API-triggered)
3. Add entry audience (segment or filters)
4. Build flow: add message steps, delays, decision splits
5. Add variants for A/B testing if desired
6. Set conversion events to track success
7. Review, test with internal users, then launch

**API key setup:**
1. Dashboard → Settings → APIs and Identifiers
2. Create New API Key — name it descriptively
3. Select only the permissions this key needs (principle of least privilege)
4. Note your REST endpoint (instance-specific URL)
5. Test: `curl -H "Authorization: Bearer YOUR_KEY" https://rest.{instance}.braze.com/users/export/ids -d '{"external_ids": ["test_user"]}'`

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Instance-specific endpoints**: Braze has 10+ regional instances (US-01 through US-10, EU-01/02, AU-01, etc.). Using the wrong instance URL for your API calls will silently fail. Always check your dashboard for the correct REST endpoint.
2. **Canvas vs Campaign confusion**: Braze has both "Campaigns" (single-step) and "Canvas" (multi-step). Users asking about "sequences" or "journeys" want Canvas, not Campaign. Users asking about "blasts" or "one-time sends" want Campaign.
3. **MAU-based pricing can spike unexpectedly**: Braze charges by Monthly Active Users, not contacts. If you run a reactivation campaign that wakes up dormant users, your MAU count (and bill) will increase. Warn users about this when designing win-back campaigns.
4. **Liquid vs Handlebars**: Braze uses Liquid templating (like Shopify), NOT Handlebars (like SendGrid/Postmark). Syntax is `{{${first_name}}}` not `{{first_name}}`. The double-dollar-sign wrapping is Braze-specific Liquid.
5. **Connected Content rate limits**: Connected Content API calls happen at send time. If you send to 1M users and each message calls an external API, that's 1M API calls to your server. Implement caching (`{% connected_content ... :cache_max_age 300 %}`) and ensure your API can handle the load.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-push-notification` — Push notification strategy across platforms
- `/sales-in-app-messaging` — In-app messaging and content card strategy across platforms
- `/sales-email-marketing` — Opt-in email marketing strategy across platforms
- `/sales-transactional-email` — Transactional/triggered email delivery strategy
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, reputation)
- `/sales-integration` — Connect Braze with data warehouses, CDPs, and other tools
- `/sales-live-chat` — Live chat and chatbot strategy
- `/sales-loyalty` — Customer loyalty program design
- `/sales-lead-score` — Lead/engagement scoring models
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building an onboarding Canvas
**User says**: "How do I create a 7-day onboarding journey in Braze for new app users?"
**Skill does**: Guides through creating a Canvas with action-based entry (session start, first time = true) → Day 0 welcome push + in-app → Day 1 email with getting started guide → Day 3 Decision Split (completed setup? yes → feature highlight Content Card, no → reminder push) → Day 7 survey in-app message. Includes setting conversion events and A/B variant setup.
**Result**: Complete onboarding Canvas with branching, multi-channel messages, and success metrics

### Example 2: Setting up Currents data export
**User says**: "I need to stream Braze engagement events to our Snowflake data warehouse"
**Skill does**: Walks through Dashboard → Data Settings → Currents → Create New Current → Snowflake → configure connection credentials, select events to stream (email opens, push clicks, in-app impressions, purchases), set data format. Explains the Snowflake Data Sharing alternative for zero-ETL access.
**Result**: Real-time engagement data flowing from Braze to Snowflake

### Example 3: Using Connected Content for personalized recommendations
**User says**: "How do I pull product recommendations from our API into Braze email at send time?"
**Skill does**: Shows Connected Content syntax: `{% connected_content https://api.example.com/recs/{{${user_id}}} :save recs :cache_max_age 900 %}` → iterate with `{% for item in recs.products %}` → build product cards in email. Covers error handling (`{% if connected_content_status == 200 %}`), caching, and load testing.
**Result**: Dynamically personalized product recommendation emails pulling from external API

## Troubleshooting

### Canvas not sending to expected audience
**Symptom**: Canvas shows 0 entries or far fewer users than expected
**Cause**: Entry audience filters too restrictive, rate limiting too aggressive, re-eligibility disabled, or entry schedule not matching expected trigger
**Solution**: 1) Check entry audience — preview the segment size. 2) Verify the trigger event is actually firing (check user profile event log). 3) Check rate limiting settings. 4) Ensure re-eligibility is enabled if users should enter multiple times. 5) For API-triggered Canvas, verify the API call includes the correct `canvas_id`.

### Push notifications not delivering
**Symptom**: Push campaigns show sends but low/zero deliveries
**Cause**: Invalid push tokens, expired APNs certificate, incorrect FCM key, or users unsubscribed
**Solution**: 1) Check push token validity in user profiles. 2) Verify APNs certificate or FCM key in Dashboard → Settings → App Settings. 3) Check push subscription status — filter segment by "Push Enabled". 4) For iOS, ensure push primer was shown and user accepted. 5) Test with a known-good device first.

### Connected Content returning errors
**Symptom**: Emails rendering with blank personalization or error fallbacks
**Cause**: External API unreachable at send time, rate limited, or returning unexpected format
**Solution**: 1) Test the API URL manually with a sample user_id. 2) Add error handling: `{% if connected_content_status == 200 %}`. 3) Add caching: `:cache_max_age 300` to reduce API calls. 4) Ensure your API can handle the send volume (1 call per recipient). 5) Add a fallback: `{% else %}Default content here{% endif %}`.
