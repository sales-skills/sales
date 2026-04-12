# SendPulse Platform Guide

## Email Marketing

SendPulse's core feature — opt-in email campaigns.

### Campaign creation
- **Drag-and-drop editor** — visual builder with blocks for text, images, buttons, social links, video, countdown timers
- **130+ templates** — pre-designed responsive templates by industry and use case
- **AMP emails** — interactive email content (carousels, accordions, forms inside emails)
- **Personalization** — merge tags for name, location, DOB, custom fields
- **Segmentation** — filter by gender, location, interests, activity, custom fields; static and dynamic segments
- **A/B testing** — test subject lines, sender names, content; auto-send winner
- **Resend to unopened** — automatically resend to non-openers with different subject line
- **Subscriber rating** — internal engagement scoring (1-5 stars) based on opens/clicks

### List management
- **Mailing lists** — create multiple lists, import contacts (CSV, copy-paste, API)
- **Subscription forms** — embedded, pop-up, floating forms with customizable fields
- **Double opt-in** — configurable confirmation emails
- **Unsubscribe management** — one-click unsubscribe, reason collection
- **Blacklist** — global suppression list across all lists

### Analytics
- **Campaign stats** — opens, clicks, bounces, unsubscribes, spam complaints, geo/device data
- **Click maps** — visual heatmap of link clicks within an email
- **Google Analytics integration** — UTM parameter auto-tagging

## Automation 360

Multichannel automation engine — the differentiator that ties all SendPulse channels together.

- **Visual flow builder** — drag-and-drop workflow editor with branching logic
- **Multichannel steps** — single flow can send email + SMS + web push + chatbot message + Viber
- **Triggers** — contact added, event fired, date/anniversary, webhook, form submission, purchase
- **Conditions** — if/else branching on contact fields, engagement, segment membership, time
- **Filters** — segment contacts within a flow by any field or behavior
- **Goals** — track conversion events within a flow (e.g., purchase, page visit)
- **Wait steps** — delay by time, until condition met, or until specific date
- **CRM actions** — create/update deals, move pipeline stages, assign team members from within flows
- **Ready-made templates** — pre-built flows: welcome series, abandoned cart, re-engagement, birthday
- **Flow statistics** — per-element analytics: sends, opens, clicks, conversions for each step

## Chatbot Builder

Create automated chatbot flows across 7 messaging platforms.

### Supported platforms
- **WhatsApp** — via WhatsApp Business API (24-hour messaging window, template messages outside window)
- **Instagram** — DM automation, story replies, comment triggers
- **Facebook Messenger** — automated flows, persistent menu, quick replies
- **Telegram** — bot builder with buttons, commands, inline keyboards
- **Viber** — chatbot flows with rich messages
- **TikTok** — DM automation (newer feature)
- **Live Chat** — website chat widget with automated + live agent flows

### Features
- **Visual flow builder** — same drag-and-drop builder as email automations
- **Triggers** — keywords, buttons, subscriptions, external events via API
- **Variables** — collect and store user data within chat flows
- **ChatGPT integration** — AI-powered responses within chatbot flows
- **Bulk messaging** — send to all subscribers or segments
- **Live chat handoff** — transfer from bot to human agent
- **Subscription widgets** — embed chatbot signup on websites
- **Tags and segmentation** — organize chatbot subscribers by behavior/interest

## CRM

Built-in sales CRM — not a standalone CRM product, but integrated with all SendPulse channels.

- **Pipeline management** — customizable stages (e.g., New → Qualified → Proposal → Won/Lost)
- **Deal cards** — amount, stage, expected close date, assigned rep, custom fields
- **Contact cards** — unified view of all interactions across email, chat, SMS, push
- **Auto-deal creation** — trigger deal creation from automation flows, chatbot actions, or form submissions
- **Task management** — assign tasks to team members with due dates
- **Filters and views** — filter deals by stage, amount, date, assigned rep
- **Communication from CRM** — send email/SMS/chat directly from a contact or deal card
- **Team collaboration** — user roles and permissions, deal assignment

## Online Course Builder (EDU)

Create, market, and sell online courses within SendPulse.

- **Course structure** — modules, lessons, quizzes, assignments
- **Lesson types** — text, video (embed or upload), audio, PDF, infographics
- **Monetization** — accept payments via Stripe, PayPal, MercadoPago; set pricing per course
- **Student management** — enrollment, progress tracking, completion certificates
- **Communication** — lesson comments, Q&A, notifications vian email/SMS/chatbot/push
- **Access control** — free, paid, drip (time-released), or completion-gated lessons
- **CRM integration** — student contacts auto-added to CRM, deal created on enrollment
- **Marketing integration** — promote courses vian email campaigns, automations, chatbots, pop-ups

## Website / Landing Page Builder

- **Drag-and-drop builder** — blocks for text, images, forms, buttons, video, countdown, payment
- **Templates** — pre-designed landing pages, online store pages, bio link pages
- **Online store** — product catalog, cart, checkout with Stripe/PayPal
- **Bio link pages** — multi-link pages for social media profiles
- **Custom domains** — connect your own domain
- **SEO tools** — meta titles, descriptions, Open Graph tags
- **Analytics** — Google Analytics integration, built-in visitor tracking
- **Form integration** — forms auto-connect to SendPulse mailing lists

## Web Push Notifications

- **Browser push** — Chrome, Firefox, Safari, Edge, Opera
- **Subscription prompt** — customizable opt-in widget with timing control
- **Segmentation** — by browser, OS, location, subscription date, custom tags
- **Automation** — trigger pushes from Automation 360 flows
- **Scheduling** — immediate, scheduled, or time-zone optimized
- **Rich push** — images, action buttons, custom icons
- **Offline delivery** — queued until user comes online
- **API** — programmatic sending via REST API

## SMS Campaigns

- **Global delivery** — 1,000+ mobile operators worldwide
- **Sender ID** — display company name (where supported by carrier)
- **Personalization** — merge tags for recipient name, custom data, verification codes
- **Scheduling** — bulk send, recurring, or trigger-based via Automation 360
- **Analytics** — delivery rates, click tracking (with shortened URLs)
- **API** — send transactional and marketing SMS programmatically
- **Pricing** — pay-per-SMS, rates vary by country

## Viber Campaigns

- **Rich messages** — images, buttons, text up to 1,000+ characters
- **Scheduling** — send immediately or schedule
- **Message lifetime** — set delivery attempt window; SMS fallback if Viber fails
- **SMS fallback** — automatically resend via SMS if Viber delivery expires
- **Integration** — use in Automation 360 flows as a channel step

## SMTP / Transactional Email

- **SMTP relay** — send transactional emails via SendPulse's infrastructure
- **Dedicated IPs** — available on paid plans for sender reputation control
- **SPF/DKIM** — domain authentication support
- **Templates** — Handlebars-style templates for transactional emails
- **Tracking** — opens, clicks, bounces, deliveries
- **Webhooks** — delivery status, opens, clicks, bounces, unsubscribes
- **API** — send transactional email via REST API with attachments and templates

## Pop-ups & Forms

- **Types** — modal pop-up, floating bar, slide-in, fullscreen, embedded form
- **Templates** — pre-designed by industry and use case
- **Triggers** — exit intent, scroll depth, time delay, click, page URL
- **A/B testing** — test pop-up variants
- **NPS survey widget** — Net Promoter Score collection
- **Social media widget** — floating panel with social buttons
- **Integration** — subscribers auto-added to mailing lists, trigger automations

## Email Verifier

- **Single verification** — check one email address
- **Bulk verification** — upload a list (CSV) for batch verification
- **Status types** — valid, invalid, unknown, disposable, role-based
- **Integration** — verify on form submission via API, clean lists before campaigns
- **Credits** — included in plan (100 on Standard), additional credits purchasable

## Data model

| Object | Key fields | Notes |
|--------|-----------|-------|
| Mailing list | id, name, all_email_qty, active_email_qty | Container for contacts |
| Contact | email, phone, name, variables, tags, status | Shared across email, SMS, CRM |
| Campaign | id, name, subject, sender, status, stats | Email campaign with analytics |
| Automation | id, name, status, created, statistics | Automation 360 flow |
| Deal | id, name, amount, stage, contact, assignee | CRM deal with pipeline stage |
| Chatbot subscriber | id, platform, variables, tags | Per-platform chatbot contact |
| Course | id, name, status, students_count, revenue | EDU course with enrollment data |
| Web push subscriber | id, browser, os, location, tags | Browser push subscriber |

## API quick reference

| Action | Method | Endpoint | Notes |
|--------|--------|----------|-------|
| Get access token | POST | `/oauth/access_token` | Client ID + Secret → token (1hr) |
| List mailing lists | GET | `/addressbooks` | All contact lists |
| Create campaign | POST | `/campaigns` | Send or schedule email |
| Get campaign stats | GET | `/campaigns/{id}` | Opens, clicks, bounces |
| Add contact | POST | `/addressbooks/{id}/emails` | Add to mailing list |
| Send SMTP email | POST | `/smtp/emails` | Transactional email |
| Send SMS | POST | `/sms/send` | Single or bulk SMS |
| Create automation | POST | `/flows` | Automation 360 flow |
| Manage chatbot | Various | `/messenger/...` | Platform-specific endpoints |
| CRM deals | Various | `/crm/deals` | Create, update, list deals |
| Courses | Various | `/edu/...` | Course and student management |
| Web push | POST | `/push/tasks` | Send push notification |
| Verify email | POST | `/verifier` | Single email verification |
| Webhooks | Various | `/webhooks` | Create, list, delete |

**Base URL**: `https://api.sendpulse.com`
**Auth**: OAuth 2.0 (POST `/oauth/access_token` with client_id + client_secret → bearer token, 1hr expiry) or static API key
**Rate limits**: Free: 1K req/min, 500K/day · Standard: 2K/min, 1M/day · Enterprise: 3K/min, 3M/day
**SDKs**: PHP, Python, Ruby, Java, Node.js, C#, Go
**MCP Server**: `sendpulse/mcp-server` on GitHub

See `/sales-sendpulse/references/sendpulse-api-reference.md` for the full API reference.

## Integrations

| Integration | Type | What it does |
|-------------|------|-------------|
| Shopify | Native | Sync contacts (email + phone), display pop-ups on Shopify pages |
| WooCommerce | Plugin | Sync customer data (email, name, phone, company, city, state, country) to mailing lists |
| WordPress | Plugin | Add subscription forms, sync new subscribers to mailing lists |
| OpenCart | Native | Sync customer data to SendPulse |
| Stripe | Native | Accept course payments, website store payments |
| PayPal | Native | Accept course payments, website store payments |
| MercadoPago | Native | Accept course payments (LatAm) |
| Zapier | Connector | 5,000+ app connections, triggers on new contacts/campaigns/deals |
| Make | Connector | Advanced automation workflows with SendPulse as source/destination |
| Google Analytics | Native | UTM auto-tagging for campaigns, website tracking |
