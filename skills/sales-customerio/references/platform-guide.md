# Customer.io Platform Guide

## Journeys
- **What it is**: Visual drag-and-drop workflow builder for multi-channel automation — the core of Customer.io's campaign orchestration
- **Triggers**: Segments (person enters/exits), events (behavioral), dates (attribute-based), form submissions, webhooks, API calls
- **Branching logic**: True/false branches based on attribute conditions, segment membership, event data, or random split (for A/B testing)
- **Time controls**: Delays (wait X minutes/hours/days), wait-until (pause until a condition is met or a date is reached), time windows (send only during business hours)
- **Actions**: Send email, send SMS, send push notification, send in-app message, send WhatsApp message, send webhook, update attribute, add/remove from segment, add to another journey
- **Multi-channel within a single journey**: Combine email, SMS, push, in-app, and webhooks in one workflow — e.g., send email, wait 2 days, if no open then send push notification
- **Draft mode**: Build and test journeys before activating — preview each step, send test messages

## Campaigns
- **Segment-triggered**: Automatically send when a person matches segment criteria (enters the segment)
- **Event-triggered**: Fire when a specific event is tracked for a person (e.g., `purchase_completed`, `trial_started`)
- **Date-triggered**: Send based on a date attribute (e.g., subscription renewal date, birthday)
- **Workflow vs. single-send**: Campaigns can be single messages or multi-step workflows (journeys)
- **Conversion tracking**: Set a conversion goal event and window to measure campaign effectiveness

## Transactional Messages
- **Purpose**: API-triggered messages for time-sensitive, user-initiated actions — password resets, receipts, shipping notifications, verification codes
- **Endpoint**: `POST https://api.customer.io/v1/send/email` (Bearer token authentication, 100 req/sec)
- **Channels**: Email, push notifications, SMS
- **Templates**: Create transactional message templates in the UI, trigger via API with dynamic data
- **Tracking**: Transactional messages appear in the same analytics as campaign messages — opens, clicks, deliveries
- **Key difference from campaigns**: Transactional messages are triggered by your application code via API, not by segments or events within Customer.io

## Segmentation
- **Data-driven segments**: Auto-updating segments based on person attributes, event history, and engagement data — people are automatically added/removed as their data changes
- **Manual segments**: Static lists — people are added/removed explicitly via UI or API
- **Segment conditions**: Combine attribute filters (e.g., `plan = "premium"`), event filters (e.g., "performed `login` in last 7 days"), engagement filters (e.g., "opened email in last 30 days"), and relationship filters (e.g., "related account has attribute X")
- **Nested logic**: AND/OR grouping for complex segment definitions
- **Segment-triggered workflows**: Segments serve as the primary entry trigger for campaigns and journeys
- **Real-time evaluation**: Data-driven segments re-evaluate as new data arrives — no manual refresh needed

## Multi-channel messaging
- **Email**: Full HTML email with Design Studio editor, Handlebars-style Liquid templating, AMP support
- **SMS**: Powered by Twilio — requires a separate Twilio account connected to Customer.io. Supports two-way SMS with keyword handling (STOP, HELP)
- **Push notifications**: iOS (APNs), Android (FCM), and web push. Requires SDK integration in your mobile app or website
- **In-app messages**: Rich messages displayed within your app — requires Customer.io SDK integration. Supports images, buttons, carousels
- **WhatsApp**: Send WhatsApp messages via Meta Business API integration
- **Channel preference management**: Respect user channel preferences and subscription status per channel

## Data Pipelines
- **What it is**: Customer.io's primary data ingestion layer — recommended for all new integrations
- **Sources**: JavaScript SDK, server-side SDKs (Node, Python, Ruby, Go, Java, PHP), HTTP API, Segment integration, reverse ETL (Snowflake, BigQuery)
- **Destinations**: Route data from your sources to Customer.io Journeys and to third-party tools
- **Reverse ETL**: Pull data from your data warehouse (Snowflake, BigQuery) into Customer.io — sync audiences, attributes, and events from your warehouse
- **Segment compatibility**: Data Pipelines API is compatible with Segment's tracking spec — easy migration from Segment
- **Recommended for new setups**: Customer.io recommends Data Pipelines over the Track API for new integrations

## Custom Objects
- **What it is**: Model relationships beyond people — accounts, companies, products, subscriptions, orders, etc.
- **Relationship types**: People can be related to custom objects, and custom objects can be related to other custom objects
- **Use cases**: Trigger messages based on account-level attributes, personalize with product data, segment by subscription status
- **Limits**: 2 object types on Essentials plan, 10 on Premium/Enterprise
- **Events on objects**: Track events on custom objects, not just people — e.g., track `subscription_renewed` on a subscription object

## Ad Audience Sync
- **Supported platforms**: Google Ads, Facebook, Instagram, YouTube
- **How it works**: Sync Customer.io segments to ad platform audiences — keep ad targeting aligned with your lifecycle segments
- **Use cases**: Suppress existing customers from acquisition ads, retarget churned users, create lookalike audiences from high-value segments
- **Sync frequency**: Audiences sync automatically as segment membership changes

## Design Studio
- **Drag-and-drop editor**: Visual email builder with pre-built content blocks (text, image, button, divider, social, etc.)
- **Collaborative editing**: Multiple team members can work on email designs
- **Reusable layouts**: Create layout templates that can be shared across campaigns
- **Code editor**: Switch to raw HTML/CSS for full control
- **Liquid templating**: Use Liquid syntax for dynamic content, conditional logic, and loops within email templates

## A/B & Cohort Testing
- **Content testing**: Test different email subject lines, body content, send times, or channels
- **Workflow branch testing**: Split journey paths to test different automation sequences
- **Random split**: Divide audience into test groups with configurable percentages
- **Winning criteria**: Define conversion goals and automatically select the winner
- **Cohort comparison**: Compare performance across user cohorts over time

## Broadcasts
- **One-time sends**: Send a single message to a segment immediately or at a scheduled time
- **Scheduled broadcasts**: Set a future date/time for delivery
- **API-triggered broadcasts**: Trigger a broadcast send via API — useful for programmatic one-time sends
- **Newsletter use case**: Use broadcasts for newsletters, product announcements, or one-time promotions
- **Rate limit**: API-triggered broadcasts are limited to 1 request per 10 seconds

## Analytics
- **Conversion goals**: Set an event as the conversion goal for a campaign — track the percentage of recipients who convert within the goal window
- **Cohort comparison**: Compare campaign performance across different user segments or time periods
- **AI-powered insights**: Automated recommendations for improving campaign performance (send time optimization, content suggestions)
- **Delivery metrics**: Opens, clicks, conversions, unsubscribes, bounces, spam complaints per campaign and message
- **Journey analytics**: Step-by-step performance metrics for each node in a journey — see where people drop off or convert
- **Revenue attribution**: Track revenue attributed to specific campaigns when revenue events are configured

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Person** | A profile representing a user/contact | id (or email), attributes (custom key-value), created_at, unsubscribed |
| **Event** | Behavioral data tracked for a person or object | name, timestamp, data (custom properties), person_id |
| **Segment** | Group of people matching criteria | id, name, type (data-driven/manual), conditions |
| **Campaign** | Triggered messaging workflow | id, name, type (segment/event/date), state (draft/active/paused), tags |
| **Broadcast** | One-time or scheduled message send | id, name, segment_id, send_at, state |
| **Transactional Message** | API-triggered message template | id, name, type (email/push/sms), body, subject |
| **Custom Object** | Non-person entity (account, product, etc.) | object_type_id, id, attributes, relationships |
| **Message Template** | Reusable message design | id, name, type, body, subject, from |
| **Webhook** | Outbound HTTP call within a journey | url, method, headers, body |
| **Data Pipeline Source** | Data ingestion source configuration | id, name, type (SDK/API/warehouse), write_key |
| **Data Pipeline Destination** | Data routing destination | id, name, type, configuration |

## API quick reference

- **Track API**: `https://track.customer.io/api/v1/` — Basic Auth (Site ID as username, API key as password), 100 req/sec rate limit
  - `PUT /customers/{id}` — identify/update a person
  - `POST /customers/{id}/events` — track an event for a person
  - `DELETE /customers/{id}` — delete a person
  - `POST /events` — track anonymous events
- **App API**: `https://api.customer.io/v1/api/` — Bearer token authentication, 10 req/sec rate limit
  - `GET /campaigns` — list campaigns
  - `GET /segments` — list segments
  - `POST /exports/customers` — export customer data
  - `GET /customers/{id}/attributes` — get person attributes
  - `POST /customers/{id}/suppress` — suppress a person
- **Transactional API**: `POST https://api.customer.io/v1/send/email` — Bearer token, 100 req/sec
- **API-triggered broadcasts**: `POST https://api.customer.io/v1/api/campaigns/{id}/triggers` — 1 req/10sec
- **Data Pipelines API**: Newer ingestion API, recommended for new setups — compatible with Segment tracking spec
- **EU region**: Use `track-eu.customer.io` and `api-eu.customer.io` subdomains for EU data residency
- **SDKs**: JavaScript (browser), Node.js, Python, Ruby, Go, Java, PHP, iOS (Swift), Android (Kotlin), React Native, Flutter
- **Docs**: customer.io/docs

## Integrations

| Category | Tools |
|----------|-------|
| **CRM** | Salesforce (bi-directional sync — sync contacts, leads, accounts between Salesforce and Customer.io) |
| **Data infrastructure** | Segment (source/destination), Snowflake (reverse ETL), BigQuery (reverse ETL) |
| **Automation** | Zapier (triggers and actions), webhooks (send/receive within journeys) |
| **SMS** | Twilio (powers Customer.io SMS — requires separate Twilio account) |
| **Advertising** | Google Ads, Facebook, Instagram, YouTube (Ad Audience Sync) |
| **Data Pipelines** | Primary integration method for new setups — supports 100+ sources and destinations |
| **Other** | Slack (notifications), Heap, Mixpanel, Amplitude (event data via Data Pipelines) |

## Pricing (USD, as of March 2026 — verify current pricing at customer.io)

| Plan | Price | Profiles | Key gated features |
|------|-------|----------|-------------------|
| **Essentials** | $100/mo | 5,000 profiles, 1M emails | 2 custom object types, basic integrations, standard support |
| **Premium** | $1,000/mo (annual) | Custom profiles/volume | 10 custom object types, HIPAA compliance, premium integrations, 90-day onboarding |
| **Enterprise** | Custom | Custom | Dedicated infrastructure, audit logging, dedicated CSM, priority support |

**Additional costs:**
- Extra profiles on Essentials: $0.009/profile
- SMS requires a separate Twilio account (Twilio pricing applies)
