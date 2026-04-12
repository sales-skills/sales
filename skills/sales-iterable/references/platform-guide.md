# Iterable Platform Guide

## Studio (Journey Builder)

Studio is Iterable's visual journey orchestration tool. Key concepts:

- **Journey tiles**: Send (email, push, SMS, in-app, WhatsApp, web push), Delay, Filter, Experiment, Update User Profile, Webhook, Create Event, A/B Split
- **Entry sources**: List-triggered, event-triggered (custom events, purchases), segment-triggered, API-triggered
- **Branching**: Filter tiles split users by attributes, events, or channel engagement. Use "Has received" / "Has opened" / "Has clicked" filters for engagement-based routing.
- **Delays**: Fixed (wait X hours/days) or dynamic (wait until specific date field)
- **Exit criteria**: Define conditions that remove users from the journey (e.g., purchase made, unsubscribed)
- **Journey Assist (AI)**: Describe a journey in natural language → Iterable generates the workflow. Review and refine before activating.
- **Lifecycle journeys**: Welcome → onboarding → activation → retention → winback. Each as a separate Studio journey with entry/exit criteria.

## Campaigns

- **Blast campaigns**: One-time sends to a list or segment
- **Triggered campaigns**: Fired by API call, custom event, or purchase event
- **Proof campaigns**: Test sends to internal list before launching
- **Recurring campaigns**: Scheduled to repeat daily/weekly/monthly
- **Multi-channel**: A single campaign can target email, push, SMS, in-app, web push, or WhatsApp

## Channels

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

## Iterable AI Suite

| Feature | What it does |
|---|---|
| **Brand Affinity** | Scores each user's engagement level (Loyal, Positive, Neutral, Negative, Never Engaged). Use as segmentation filter or journey branch condition |
| **Send Time Optimization (STO)** | Per-user optimal send time based on historical engagement. Enable per campaign or journey step |
| **Frequency Optimization** | AI-chosen cap on messages per user per channel per time window. Prevents over-messaging |
| **Predictive Goals** | Predict likelihood of user taking a specific action (purchase, churn, etc.) within a time window |
| **Journey Assist** | Natural language → Studio journey. Describe what you want, AI generates the workflow |
| **Copy Assist** | AI-generated subject lines and email copy suggestions |
| **Smart Segmentation** | AI-suggested segments based on user behavior patterns |

## Data & Integration

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

## Data Model

| Object | Key fields | Notes |
|---|---|---|
| **User** | `email`, `userId`, `dataFields` (custom attributes), `phoneNumber` | `email` or `userId` is the primary identifier |
| **Event** | `email`/`userId`, `eventName`, `dataFields`, `createdAt` | Custom events power triggers and segmentation |
| **Campaign** | `id`, `name`, `type` (blast/triggered/recurring), `messageMedium` | One campaign = one channel |
| **List** | `id`, `name`, `listType` (static/dynamic) | Static: manual membership. Dynamic: rule-based |
| **Catalog** | `catalogName`, items with custom fields | Product data for personalization |
| **Template** | `templateId`, `name`, `messageMedium` | Email, push, SMS, in-app, web push templates |
| **Experiment** | `experimentId`, variants, metrics | A/B or multivariate testing |

## Experiments

- **Campaign experiments**: A/B test subject lines, content, send time, channel within a campaign
- **Journey experiments**: Experiment tile in Studio — split traffic between journey branches
- **Holdout groups**: Measure lift by withholding messages from a control group
- **Winning criteria**: Open rate, click rate, conversion event, custom metric
- **Statistical significance**: Iterable calculates significance — wait for sufficient sample before declaring a winner

## Segmentation

- **Static lists**: Manual membership — upload CSV, API subscribe, or journey action
- **Dynamic lists**: Rule-based — auto-update based on user attributes, events, engagement
- **Filters**: Combine user attributes, event history, campaign engagement, Brand Affinity labels, catalog interactions
- **Cohorts**: Time-based user groups (e.g., "signed up in last 30 days")

## API Quick Reference

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

## Integrations

- **Smart Ingest**: 23+ data sources (Snowflake, BigQuery, Redshift, Databricks, etc.)
- **Snowflake Secure Data Sharing**: Export Iterable data to Snowflake
- **System webhooks**: Email send/open/click, push send/open, SMS send/bounce, list subscribe/unsubscribe. Configure at Integrations > System Webhooks. Auth: None, Basic, or OAuth 2.0.
- **Journey webhooks**: Webhook tile in Studio — call external APIs at any point in a journey
- **Native integrations**: Shopify (product sync, cart events, purchase tracking), Segment, Hightouch, Movable Ink, Facebook Custom Audiences, Google Ads, Mixpanel, Amplitude
- **Zapier**: Triggers and actions for user updates, events, campaigns
- **SDKs**: iOS (Swift), Android (Kotlin/Java), React Native, Web (JavaScript)

## Pricing

As of March 2026 — verify current pricing with Iterable sales:
- **No free tier or self-serve signup** — enterprise sales process
- **MAU-based pricing** with channel-specific usage fees
- **Growth**: ~$3K-$6K/mo for 10K-50K MAUs (core channels, basic segmentation, workflows)
- **Enterprise**: Custom pricing ($10K+/mo) — all channels, AI suite, Smart Ingest, dedicated support
- **SMS and push** may carry additional per-message or per-MAU costs beyond base plan
