# Omnisend Platform Guide

## Email Campaigns
- **What it is**: Broadcasts sent to contacts or segments — newsletters, promotions, product announcements
- **Editor**: Drag-and-drop email editor with 250+ templates, product picker (pulls from your store), dynamic discount codes, product recommendations
- **A/B testing**: Test subject lines, sender name, and content on Standard+ plans. Split audience automatically, send winner to remainder.
- **Campaign Booster**: Auto-resend campaign to non-openers with a different subject line after a configurable delay
- **Best practices**: Use product recommendation blocks for ecommerce. Segment by engagement. A/B test subject lines on every campaign.

## SMS Marketing
- **What it is**: SMS campaigns and automated SMS messages sent to opted-in contacts
- **Opt-in**: Separate SMS consent required (not inherited from email opt-in). Collect via popups, checkout, or keyword opt-in.
- **SMS credits**: Pro plan includes SMS credits; Standard plan has SMS as paid add-on. Credits vary by country.
- **Character limits**: 160 chars (GSM-7) or 70 chars (Unicode). Messages over limit split into multiple segments at higher cost.
- **MMS**: Supported — include images in SMS messages for higher engagement
- **Two-way SMS**: Contacts can reply to SMS messages. Replies visible in Omnisend.
- **Compliance**: TCPA compliance built in — automatic quiet hours, opt-out handling ("STOP" keyword), consent tracking

## Automation Workflows
- **What it is**: Trigger-based automated message sequences — the core of Omnisend's value
- **Pre-built workflows** (ready to activate):
  - Welcome series (new subscriber)
  - Abandoned cart (cart created, not completed)
  - Browse abandonment (product/category viewed, no purchase)
  - Order confirmation & shipping updates
  - Post-purchase follow-up (review request, cross-sell)
  - Win-back / re-engagement (lapsed customer)
  - Birthday / anniversary
  - Back-in-stock notification
- **Custom workflows**: Build from scratch with any trigger + conditions + actions
- **Multi-channel**: Each workflow step can be email, SMS, or web push — mix channels in one automation
- **Splits and conditions**: A/B split testing within workflows, conditional branches based on segment membership, purchase history, engagement
- **Timing**: Configurable delays between steps (minutes, hours, days)
- **Exit conditions**: Auto-remove contacts from workflow when they take the desired action (purchase, resubscribe)

## Popups & Forms
- **Types**: Popup, embedded form, landing page, Wheel of Fortune (gamified spin-to-win), teaser (small persistent trigger)
- **Targeting**: Show based on URL, device, referral source, time on page, scroll depth, exit intent, new vs returning visitor
- **Multi-step forms**: Collect email first, then SMS on a second step (increases overall opt-in rate)
- **Discount delivery**: Auto-apply discount codes to form submissions
- **A/B testing**: Test form design, copy, and offers

## Segmentation
- **Segment types**: Based on shopping behavior (purchased, viewed, added to cart), email/SMS engagement (opened, clicked, subscribed date), contact properties (tags, location, custom fields), and campaign activity
- **Dynamic segments**: Auto-update as contacts match/unmatch conditions
- **Lifecycle stages**: Omnisend auto-assigns lifecycle stages — New Subscriber, Active Customer, At Risk, Lapsed, Champions
- **Product-based segments**: Contacts who bought/viewed specific products or categories
- **RFM analysis**: Built-in Recency-Frequency-Monetary scoring for customer value segmentation

## Web Push Notifications
- **What it is**: Browser push notifications to opted-in website visitors
- **Unlimited on all plans**: Including free plan — no extra cost
- **Triggers**: Manual send or automation workflow step
- **Content**: Title, message, image, URL, action buttons
- **Limitation**: Web push only — no native mobile app push (use with Shopify's native push or a dedicated push tool for mobile)

## Reporting & Analytics
- **Campaign reports**: Opens, clicks, unsubscribes, revenue attributed per campaign
- **Automation reports**: Revenue per workflow, conversion rate, per-step performance
- **Sales dashboard**: Revenue attribution across all channels (email, SMS, push), customer lifetime value trends
- **Segment performance**: Compare performance across segments
- **Click maps**: Visual heatmap of where contacts click in your emails

## Omnisend data model

Core entities — understand these to navigate the UI and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Contact** | A person in your audience (email, phone, or both) | Has Tags, belongs to Segments, has Events |
| **Campaign** | A one-time email/SMS broadcast | Sent to a Segment or list of Contacts |
| **Automation** (Workflow) | A trigger-based multi-step sequence | Contains Steps (email, SMS, push, delay, split) |
| **Product** | A product from your ecommerce store | Synced from Shopify/WooCommerce/BigCommerce |
| **Order** | A completed purchase | Belongs to a Contact, contains Products |
| **Event** | A tracked action (page view, cart, purchase) | Belongs to a Contact, triggers Automations |
| **Segment** | A dynamic group of contacts based on rules | Used as campaign audience or workflow condition |
| **Form** | A popup, embedded form, or landing page | Creates/tags Contacts on submission |

## API & Integrations

**For detailed API documentation including all endpoints, authentication, rate limits, and data models, always consult `references/omnisend-api-reference.md`.** Point the user to this file for the full endpoint catalog, request/response schemas, and rate limit details.

**Quick reference**: Base URL `https://api.omnisend.com/api/`, API key auth (`X-API-KEY` header), header-based versioning (`Omnisend-Version: 2026-03-15`), cursor-based pagination. Key capabilities: contact management, campaign CRUD, product sync, event tracking, segment management, analytics.

## Native integrations
- **Ecommerce**: Shopify (deep — products, orders, carts, customers, browse events), WooCommerce (plugin), BigCommerce (native), Wix, Ecwid
- **Ecommerce features**: Product sync, order sync, cart tracking, browse tracking, customer data sync, revenue attribution
- **Automation**: Zapier (triggers for new subscriber, new order; actions for adding contacts), Make
- **Reviews**: Shopify product reviews, Loox, Judge.me, Yotpo, Stamped
- **Loyalty**: Smile.io, LoyaltyLion
- **Other**: Google Ads (audience sync), Facebook Ads (audience sync), Gorgias, Zendesk

## Pricing (as of April 2026 — verify current pricing)
- **Free**: 250 contacts, 500 emails/mo, unlimited web push, all features, 60 SMS credits
- **Standard**: From $16/mo (500 contacts, 6,000 emails/mo, SMS add-on)
- **Pro**: From $59/mo (unlimited emails, advanced reporting, higher SMS allowance)
- Scales by contact count. 30% discount for 3-month prepay on first subscription.
