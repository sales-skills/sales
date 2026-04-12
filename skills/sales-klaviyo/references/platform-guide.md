# Klaviyo Platform Guide

## Flows
- **What they are**: Visual automation workflows triggered by events — purchase, browse, cart abandon, signup, custom events, date properties, price drop, back-in-stock
- **Builder**: Drag-and-drop canvas with trigger, conditional split, time delay, A/B split, and action nodes
- **Cross-channel steps**: A single flow can include email, SMS, and push notification steps — orchestrate across channels in one workflow
- **Branching logic**: Conditional splits based on profile properties, segment membership, event data, or predictive attributes (e.g., high CLV customers get a different path)
- **A/B splits**: Test different paths within a flow — split traffic by percentage and measure which branch performs better
- **Time delays**: Wait a fixed duration, until a specific time of day, or until a specific day of the week before the next step
- **Pre-built templates**: Welcome series, abandoned cart, post-purchase follow-up, winback, browse abandonment, back-in-stock, price drop, review request, birthday/anniversary
- **Flow webhooks**: POST action step that sends event/profile data to an external URL — use for syncing data to external systems within a flow

## Campaigns
- **What they are**: One-time or scheduled broadcast sends to a list or segment
- **A/B testing**: Test subject line, content, or send time across variants. Klaviyo auto-selects the winner based on open rate or click rate
- **Smart Send Time**: Klaviyo analyzes each recipient's historical engagement patterns and sends at the time they are most likely to open — optimized per-recipient, not a single "best" time
- **Send strategies**: Send immediately, schedule for a specific date/time, or use Smart Send Time
- **Segment targeting**: Send to dynamic segments that auto-update — the segment is evaluated at send time, so new qualifying profiles are included

## Segmentation
- **Real-time segments**: Segments update automatically as profiles match or stop matching conditions — no manual refresh needed
- **Condition types**: Behavior (opened email, placed order, viewed product), profile properties (location, custom fields), predictive attributes (CLV tier, churn risk), list membership, engagement metrics
- **Nested conditions**: Combine AND/OR logic with unlimited nesting depth for complex targeting
- **Predictive attributes in segments**: Segment by predicted CLV, churn risk, next order date, gender prediction — e.g., "high CLV customers likely to churn in 30 days"
- **Use everywhere**: Segments can be used as flow triggers, campaign recipients, conditional split conditions, form targeting rules, and reporting filters

## Predictive Analytics
- **Predicted CLV**: Estimated total revenue a customer will generate over their lifetime
- **Next order date**: When a customer is most likely to place their next order
- **Churn risk**: Probability that a customer will not purchase again (high/medium/low)
- **Average order value**: Predicted average spend per order
- **Spend tier**: Automatic bucketing into high/medium/low spenders
- **Gender prediction**: Inferred gender based on name and purchase behavior
- **Data requirements**: Requires sufficient order history — typically 500+ orders and 180+ days of data before predictions appear
- **Updates**: Predictions refresh regularly as new data flows in

## Multi-channel
- **Email**: Full HTML email with drag-and-drop editor, dynamic content blocks, product feeds, personalization tags
- **SMS/MMS**: Text and multimedia messages, short links, opt-in/opt-out management, quiet hours, carrier compliance
- **WhatsApp**: Business messaging via WhatsApp (select regions), templates, rich media
- **RCS for Business**: Rich Communication Services messaging with branded sender, carousels, suggested actions
- **Mobile push**: Push notifications via Klaviyo SDK integration in iOS/Android apps
- **Channel orchestration**: Use flows to coordinate across channels — e.g., send email first, if not opened after 24h, send SMS

## Forms
- **Types**: Pop-ups, fly-outs, embedded forms, full-page forms, multi-step forms
- **Targeting rules**: Show based on URL, time on page, scroll depth, exit intent, device type, segment membership, UTM parameters
- **A/B testing**: Test form variants (copy, design, timing, offer) and measure conversion rate
- **Multi-step**: Collect email first, then ask for SMS consent, preferences, or additional data in subsequent steps
- **List growth**: Forms automatically add subscribers to lists and trigger flow entries (e.g., welcome series)

## Reviews
- **Collection**: Automated review request emails/SMS after purchase with customizable timing
- **AI-powered responses**: Auto-generate responses to reviews using AI
- **Display widgets**: Embed star ratings, review carousels, and review pages on your storefront
- **Integration**: Reviews feed into segmentation (e.g., customers who left 5-star reviews) and product recommendations

## Klaviyo Data Platform (KDP)
- **Unified profiles**: Single customer view aggregating data from 350+ integrations, website tracking, email/SMS engagement, purchase history, and custom events
- **Event processing**: Ingests 2.5B events per day in real-time
- **Native integrations**: 350+ pre-built connectors including Shopify (deep native), BigCommerce, WooCommerce, Adobe Commerce, Salesforce Commerce Cloud, Salesforce CRM, Meta, TikTok, Google Ads, Zapier, Stripe, ReCharge, Yotpo, Gorgias, Zendesk
- **Custom properties**: Add any custom data to profiles via API or integrations
- **Real-time processing**: Events trigger flows and update segments within seconds

## Advanced KDP
- **Reverse ETL**: Sync Klaviyo segments and profile data back to your data warehouse or other tools
- **Custom objects**: Define custom data models beyond profiles and events (e.g., subscriptions, loyalty tiers, support tickets)
- **Advanced webhooks**: System-level event-driven webhooks with HMAC-SHA256 signing — fire on any event (email received, clicked, spam complaint, review events, consent events). Distinct from flow webhooks
- **Data transforms**: Transform incoming data before it reaches profiles
- **Warehouse sync**: Bidirectional sync with data warehouses (Snowflake, BigQuery, Redshift)
- **Pricing**: Enterprise-only — custom pricing, not available on standard Email or Email + SMS plans

## AI Agents
- **Marketing Agent**: Generate complete campaign drafts from a URL — Klaviyo analyzes the page content and creates email copy, subject lines, and design
- **Customer Agent**: AI-powered support automation that resolves approximately 65% of common support questions, recommends products, and handles order inquiries
- **Customer Hub**: Self-service portal where customers can track orders, browse FAQ, and get AI-assisted support

## Catalogs
- **Product catalog sync**: Automatically sync products from your e-commerce platform (Shopify, BigCommerce, etc.) for use in emails and flows
- **Personalized recommendations**: Dynamic product blocks in emails that show products based on browsing history, purchase history, or collaborative filtering
- **Back-in-stock alerts**: Customers subscribe to notifications when out-of-stock items become available — triggers a flow automatically
- **Price drop alerts**: Notify customers when items they viewed or wishlisted drop in price

## Coupons
- **Unique coupon codes**: Generate unique, single-use coupon codes via the API for use in flows and campaigns — prevents code sharing
- **Shopify integration**: Sync with Shopify discount codes — Klaviyo generates codes that are valid in your Shopify checkout
- **Dynamic insertion**: Insert unique coupon codes into email/SMS content using template tags

## Reporting
- **Revenue attribution**: Track revenue generated by each campaign and flow — Klaviyo attributes purchases within a configurable attribution window
- **Campaign analytics**: Opens, clicks, conversions, revenue, unsubscribes, spam complaints per campaign
- **Flow analytics**: Per-step metrics showing where recipients convert, drop off, or skip
- **Benchmarks**: Compare your performance against industry peers (open rates, click rates, revenue per recipient)
- **Custom dashboards**: Build dashboards with custom metrics, date ranges, and visualizations
- **SMS analytics**: Delivery rates, click rates, opt-out rates, revenue per SMS

## Templates
- **Drag-and-drop editor**: Visual email builder with content blocks (text, image, button, product, table, social links)
- **Dynamic blocks**: Show/hide content blocks based on profile properties or event data — personalize within a single template
- **Mobile-responsive**: Templates automatically adapt to mobile screens
- **Product feeds**: Dynamic product blocks that pull from your catalog based on recommendations, browsing history, or manual selection
- **Saved rows/sections**: Reusable template components for consistent branding across emails

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Profile** | Individual customer/contact | id, email, phone_number, properties, predictive_analytics, location |
| **Event** | Tracked action or behavior | id, metric, profile, properties, datetime |
| **Metric** | Event type definition | id, name, integration (e.g., Shopify, API) |
| **List** | Static subscriber collection | id, name, profiles (manual add/remove) |
| **Segment** | Dynamic audience definition | id, name, conditions (auto-updates) |
| **Flow** | Automation workflow | id, name, status, trigger, actions |
| **Campaign** | Broadcast send | id, name, status, audiences, send_time, message |
| **Template** | Reusable email design | id, name, html, editor_type |
| **Catalog Item** | Product in catalog | id, title, price, url, image_url, categories |
| **Catalog Variant** | Product variant | id, catalog_item_id, title, price, sku |
| **Coupon** | Discount rule | id, coupon_code (unique per generation) |
| **Form** | Signup/data capture form | id, name, type, status |
| **Webhook** | Event notification subscription | id, endpoint_url, topic (Advanced KDP only for system webhooks) |
| **Tag** | Organization label | id, name (applied to flows, campaigns, lists, segments) |

## API quick reference

- **Base URL**: `https://a.klaviyo.com/api/` (server-side), `https://a.klaviyo.com/client/` (client-side)
- **Authentication**:
  - Private API key: `Authorization: Klaviyo-API-Key {private_key}` header — used for all server-side endpoints
  - OAuth: For tech partner integrations — scoped access tokens
  - Public API key: Query parameter `company_id={public_key}` — used for client-side endpoints only (forms, client events)
- **Format**: JSON:API spec — resources have `type`, `id`, `attributes`, and `relationships`. Supports filtering (`?filter`), sparse fieldsets (`?fields[TYPE]`), includes (`?include`), and cursor-based pagination (`?page[cursor]`)
- **Rate limits**: Fixed-window burst limit (per second) + steady limit (per minute), per-account. OAuth apps get separate quota. Exceeding limits returns HTTP 429
- **Key endpoints**:
  - `POST /api/profiles/` — create or update a profile (upsert by email or phone)
  - `POST /api/events/` — track a custom event
  - `GET /api/campaigns/` — list campaigns
  - `POST /api/campaigns/` — create a campaign
  - `POST /api/campaign-send-jobs/` — send a campaign
  - `GET /api/flows/` — list flows
  - `GET /api/segments/` — list segments
  - `GET /api/metrics/` — list metrics (event types)
  - `POST /api/catalog-items/` — create a catalog item
  - `POST /api/coupon-codes/` — create a unique coupon code
  - `GET /api/webhook-topics/` — list available webhook topics (Advanced KDP)
  - `POST /api/webhooks/` — create a webhook subscription (Advanced KDP)
  - Client: `POST /client/subscriptions/` — subscribe via form (public key auth)
  - Client: `POST /client/events/` — track client-side event (public key auth)
- **SDKs**: Official — Python (`klaviyo-api`), Node.js (`klaviyo-api`), Ruby (`klaviyo-api-sdk`), PHP (`klaviyo/api`). Also: Swift, Android/Kotlin SDKs for mobile push
- **Docs**: developers.klaviyo.com

## Integrations

| Category | Tools |
|----------|-------|
| **E-commerce (deep native)** | Shopify (deep bidirectional sync — orders, products, customers, carts, checkout), BigCommerce, WooCommerce, Adobe Commerce (Magento), Salesforce Commerce Cloud |
| **CRM** | Salesforce CRM, HubSpot (via third-party) |
| **Advertising** | Meta (Facebook/Instagram), TikTok, Google Ads, Pinterest — sync segments as ad audiences |
| **Payments / Subscriptions** | Stripe, ReCharge, Bold Subscriptions |
| **Reviews / UGC** | Yotpo, Stamped.io, Judge.me, Okendo |
| **Support** | Gorgias, Zendesk, Intercom |
| **Data / Automation** | Zapier, Make (Integromat), Fivetran, Census, Hightouch |
| **Loyalty** | Smile.io, LoyaltyLion, Yotpo Loyalty |
| **Shipping** | Aftership, ShipStation |

## Pricing (USD, as of March 2026 — verify current pricing at klaviyo.com)

| Plan | Price | Volume | Key features |
|------|-------|--------|-------------|
| **Free** | $0/mo | 250 active profiles, 500 emails/mo, 150 SMS credits | Email support for 60 days, basic flows and campaigns |
| **Email** | From $20/mo | 500 active profiles, 5,000 emails/mo | Predictive analytics, AI features, no Klaviyo branding, A/B testing |
| **Email + SMS** | From $35/mo | 500 active profiles, 5,000 emails/mo, 1,250 SMS credits | Everything in Email plus SMS/MMS, WhatsApp |
| **Advanced KDP** | Custom pricing | Enterprise | Custom objects, reverse ETL, advanced webhooks, warehouse sync, data transforms |

**Key pricing notes**:
- Pricing scales by **active profiles** — all subscribed contacts count toward your profile limit, not just those you email (Feb 2025 billing change)
- SMS credits are consumed per message segment (longer messages use more credits)
- WhatsApp and RCS messaging available on Email + SMS plan and above
