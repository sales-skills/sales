# Braze Platform Guide

## Canvas Flow (Journey Orchestration)
- **What it is**: Visual drag-and-drop journey builder for multi-step, cross-channel customer experiences
- **Key concepts**: Canvas = a journey, Steps = individual actions (message, delay, decision split, experiment, audience sync, action paths, user update), Variants = A/B test branches
- **Channels in Canvas**: Email, push (iOS/Android/web), in-app message, Content Card, SMS/MMS, WhatsApp, webhook
- **Triggers**: Action-based (user does X), API-triggered, scheduled, event-triggered
- **Branching**: Decision Split (filter-based), Action Paths (did user do X within Y time?), Audience Paths (segment membership), Experiment Path (A/B/n testing)
- **Entry controls**: Entry schedule (scheduled, action-based, API-triggered), entry limits, rate limiting, re-eligibility, quiet hours
- **Canvas vs Campaign**: Use Canvas for multi-step journeys with branching. Use Campaign for simple single-send messages. Canvas supports all channels Campaign does, plus more complex orchestration.
- **Best practices**: Start with the simplest Canvas that achieves your goal. Use Decision Splits to personalize, not to create complexity. Set entry limits to prevent over-messaging. Use Experiment Paths to optimize.

## Campaigns
- **What it is**: Single-step message sends across any channel
- **Types**: Scheduled, action-based (event trigger), API-triggered
- **A/B testing**: Test subject lines, content, send time, channel — Braze auto-selects winner
- **Multivariate**: Up to 8 variants per campaign
- **API-triggered campaigns**: `POST /campaigns/trigger/send` — send with dynamic properties
- **Transactional campaigns**: Dedicated endpoint for time-sensitive 1:1 messages with SLA guarantees
- **Best practices**: Use campaigns for simple one-off sends. Move to Canvas when you need branching, delays, or multi-step logic.

## Email
- **Editor**: Drag-and-drop editor, HTML editor, or plain text
- **Templating**: Liquid templating engine — `{{${first_name}}}`, conditionals, loops, filters
- **Connected Content**: Pull dynamic data from external APIs at send time — `{% connected_content https://api.example.com/user/{{${user_id}}} :save response %}`
- **Dynamic content**: Conditional content blocks based on user attributes, catalog data, or Connected Content
- **AMP for email**: Interactive email elements (forms, carousels, accordions)
- **Preference centers**: Built-in subscription management UI
- **IP warming**: Braze provides dedicated IPs and warmup scheduling assistance
- **Plan gates**: AMP, advanced analytics, dedicated IPs available on Pro+

## Push Notifications
- **Platforms**: iOS (APNs), Android (FCM), Web (Web Push), Kindle, Huawei
- **Rich push**: Images, GIFs, action buttons, custom sounds
- **Push stories**: Multi-page carousel push (iOS and Android)
- **Notification channels**: Android notification channel management
- **Silent push**: Background data sync without user-visible notification
- **Push primers**: In-app message asking for push permission before the OS prompt (increases opt-in rates)
- **TTL and priority**: Configurable time-to-live and delivery priority
- **Best practices**: Always use a push primer before the OS prompt. Segment by push-enabled status. Respect quiet hours.

## In-App Messages
- **Types**: Modal, Slideup, Fullscreen, HTML Custom, Survey
- **Triggers**: Session start, custom event, purchase event, push click, or API
- **Display rules**: Show once, show on every session, show after X sessions, show after delay
- **Dark mode**: Automatic dark mode support
- **Custom HTML**: Full HTML/CSS/JS for complex in-app experiences
- **Best practices**: Use for onboarding, feature announcements, surveys, and permission priming. Don't overuse — one in-app message per session max.

## Content Cards
- **What it is**: Persistent content feed within your app — like a personalized inbox
- **Types**: Classic (image + text), Banner (image only), Captioned Image
- **Key difference from in-app**: Content Cards persist until dismissed or expired. In-app messages show once and disappear.
- **Use cases**: Promotions, personalized recommendations, onboarding checklists, notification center
- **Pinning**: Pin important cards to the top of the feed
- **Expiration**: Set card expiry (default 30 days)
- **Best practices**: Use Content Cards for persistent content users can revisit. Use in-app messages for time-sensitive interruptions.

## SMS / MMS / RCS
- **SMS**: Two-way messaging, subscription management, keyword handling (STOP, HELP, custom)
- **MMS**: Images, GIFs, video, audio in messages
- **RCS**: Rich Communication Services — rich media, carousels, suggested actions (Android)
- **Subscription groups**: Manage SMS opt-in/opt-out per subscription group
- **Short codes / long codes / toll-free**: Configure sender numbers by country
- **Smart encoding**: Automatic GSM-7 vs UCS-2 detection
- **Quiet hours**: Configurable no-send windows per timezone
- **Plan gates**: SMS/RCS available on Pro+ plan

## WhatsApp
- **What it is**: WhatsApp Business API messaging via Braze
- **Templates**: Must be Meta-approved before sending (24-48hr review)
- **Conversation types**: Marketing, utility, service conversations — different pricing per type
- **Media**: Images, documents, video, location, interactive buttons/lists
- **Two-way**: Receive and respond to user messages within 24hr service window

## LINE
- **What it is**: LINE messaging for APAC markets (Japan, Taiwan, Thailand, Indonesia)
- **Message types**: Text, image, video, sticker, rich menu, flex message
- **Use case**: Primary engagement channel for brands with APAC presence

## BrazeAI
- **Predictive Suite**: Churn prediction, purchase prediction, event prediction — ML models that score users 0-100
- **Intelligent Timing**: Send at the optimal time for each user (learned from behavior)
- **Intelligent Channel**: Predict which channel each user is most likely to engage with
- **Intelligent Selection**: Automatic A/B test winner selection based on Bayesian optimization
- **AI Copywriting**: Generate email/push/SMS copy from prompts
- **AI Image Generation**: Create images from text descriptions
- **Decisioning Studio**: 1:1 personalization engine — picks the best message/offer per user at send time
- **AI Agents**: Autonomous agents that optimize campaigns continuously
- **Plan gates**: Predictive Suite requires Pro+. Decisioning Studio requires Enterprise.

## Braze Data Platform
- **Cloud Data Ingestion (CDI)**: Sync user attributes, events, and purchases from Snowflake, Redshift, BigQuery, Databricks, or Microsoft Fabric directly into Braze
- **CDI Segments**: Build segments directly from warehouse data without importing (zero-copy)
- **Currents**: Real-time event streaming — export engagement events (opens, clicks, purchases, custom events) to data warehouses, CDPs, or analytics tools
- **Currents destinations**: Amazon S3, Azure Blob Storage, Google Cloud Storage, Snowflake, Segment, mParticle, Amplitude, Mixpanel, Treasure Data
- **Data transformation**: Transform incoming webhook data before ingesting into Braze
- **Connected Content**: Pull external data into messages at send time via HTTP API calls

## Segmentation
- **Real-time segments**: Auto-updating based on user attributes, behavior, events, purchases
- **Filters**: 50+ filter types — demographics, behavior, engagement, custom events, purchase history, location, technology
- **SQL Segment Extensions**: Write SQL queries against your warehouse (CDI Segments) to build segments
- **Predictive segments**: Based on BrazeAI predictions (churn risk, purchase likelihood)
- **Segment Analytics**: Size, growth, engagement overlap
- **Best practices**: Start with behavioral segments (what users did), not just demographic (who they are). Layer engagement recency to keep segments fresh.

## Catalogs
- **What it is**: Store non-user data (products, promotions, locations, restaurants, events) in Braze for personalization
- **Use cases**: Product recommendations, location-based content, dynamic promotion cards, personalized menus
- **Access in Liquid**: `{% catalog_items your_catalog_name {{${user_attribute}}} %}`
- **API management**: Create, update, delete catalog items via REST API
- **Limits**: Up to 100 catalogs, 100M items across all catalogs

## Feature Flags
- **What it is**: Control feature visibility and rollout without code deploys
- **Use cases**: Gradual rollouts, A/B test features, kill switches, user-segment-targeted features
- **Canvas integration**: Enable/disable features as a Canvas step
- **Properties**: Attach key-value properties to feature flags for configuration

## Transactional Email
- **Endpoint**: `POST /transactional/v1/campaigns/{campaign_id}/send`
- **Purpose**: Time-sensitive 1:1 emails (password resets, order confirmations, OTP)
- **SLA**: Designed for high reliability with delivery guarantees
- **Separate from marketing**: Transactional campaigns don't count against marketing rate limits

## Data model quick reference

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

## API quick reference
- **Base URL**: `https://rest.{instance}.braze.com` (instance-specific — check dashboard for yours)
- **Auth**: `Authorization: Bearer YOUR_REST_API_KEY`
- **Rate limit**: 250,000 requests/hour default
- **Key endpoints**: `/users/track`, `/users/export/ids`, `/messages/send`, `/campaigns/trigger/send`, `/canvas/trigger/send`, `/catalogs`, `/templates/email/create`, `/segments/list`
- **SDKs**: iOS, Android, Web (JS), React Native, Flutter, Unity, Roku, Unreal Engine
- **Full reference**: See `references/braze-api-reference.md`

## Integrations (Braze Alloys)
- **CDPs**: Segment, mParticle, Tealium, Rudderstack, Census, Hightouch, Amperity, Amplitude
- **Data warehouses**: Snowflake (bidirectional), Redshift, BigQuery, Databricks, Microsoft Fabric
- **Analytics**: Mixpanel, Amplitude, Looker, Tableau
- **Attribution**: Adjust, AppsFlyer, Branch, Kochava, Singular
- **CRM**: Salesforce (via partners/Zapier)
- **E-commerce**: Shopify, Talon.One, Voucherify
- **Total**: 140+ technology partnerships
