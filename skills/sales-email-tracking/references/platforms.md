# Platform-Specific Email Tracking Guide

Detailed per-platform tracking setup — tracking types, notifications, webhooks, analytics, and best practices.

## Table of contents

- [In Yesware](#in-yesware)
- [In Salesloft](#in-salesloft)
- [In Apollo](#in-apollo)
- [In HubSpot Sales](#in-hubspot-sales)
- [In Mailshake](#in-mailshake)
- [In Reply.io](#in-replyio)
- [In Woodpecker](#in-woodpecker)
- [In Seismic](#in-seismic)
- [In Mixmax](#in-mixmax)
- [In SendGrid](#in-sendgrid)
- [In Postmark](#in-postmark)
- [In Customer.io](#in-customerio)
- [In Mailgun (Sinch)](#in-mailgun-sinch)
- [In Klaviyo](#in-klaviyo)
- [In ActiveCampaign](#in-activecampaign)

## In Yesware

- **Tracking**: Built into Gmail/Outlook — auto-tracks opens, clicks, attachments on every email sent through the extension
- **Notifications**: Real-time desktop notifications when prospects open or click. Configurable — set thresholds to avoid notification fatigue (e.g., only notify on 2nd+ open)
- **Attachment tracking**: Attach files through Yesware to get view notifications and page-by-page analytics showing which slides prospects spent time on
- **Recipient engagement reports**: Per-contact engagement history showing every open, click, and attachment view for a specific recipient — use this to identify hot prospects and time follow-ups
- **Team reports** (Premium+ plans): Aggregate tracking metrics across reps — see team-wide open rates, click rates, reply rates, and template performance. Managers can compare rep performance and identify coaching opportunities. Export data for pipeline reviews.
- **Limitation**: Sends from your inbox (good for deliverability, but no separate sending infrastructure)
- **Limitation**: Doesn't report deliverability rate — you don't know how many emails actually reached the inbox vs. bounced or went to spam

## In Salesloft

- **Live Website Tracking**: See when prospects visit your website (beyond just email engagement)
- **Activity feed**: Real-time stream of all engagement across cadences — opens, clicks, replies, bounces
- **Hot Leads**: Auto-surfaces highly engaged prospects based on engagement scoring across all cadence touches
- **Analytics**: Step-level and cadence-level engagement metrics. Compare open/click/reply rates across cadence variants
- **Limitation**: Engagement data is cadence-scoped — ad hoc emails outside cadences may not be tracked consistently

## In Apollo

- **Open/click tracking**: Built into sequences — per-step and per-prospect analytics
- **Engagement scoring**: Apollo scores contacts by engagement level, surfacing hot leads in your dashboard
- **Alerts**: Email and in-app notifications for engagement events (opens, clicks, replies)
- **Command Center**: Deliverability monitoring dashboard includes tracking metrics alongside inbox placement data
- **Limitation**: Tracking is primarily sequence-scoped. One-off emails sent outside sequences have limited tracking visibility

## In HubSpot Sales

- **Free tracking**: Email tracking included in free HubSpot CRM — no paid plan required for basic open/click tracking
- **Activity feed**: Real-time notifications in HubSpot and browser extension when prospects open or click
- **Document tracking**: Track PDFs and documents shared via HubSpot — see who opened, how long they viewed, which pages
- **Sequences**: Track engagement within sales sequences with per-step analytics
- **Limitation**: Free tier tracks individual emails only. Sequence tracking requires Sales Hub Starter+

## In Mailshake

- **Campaign analytics**: Open, click, reply, bounce rates per campaign and per recipient — clean dashboard view
- **Lead Catcher**: Auto-captures engaged replies as leads and routes them for follow-up
- **A/B testing**: Test subject lines and email body variants with tracking data to optimize
- **Limitation**: No real-time push notifications for individual opens — engagement visible in dashboard but not pushed to desktop/mobile

## In Reply.io
- **Tracking types**: Opens (pixel), clicks (link wrapping), replies, bounces
- **Real-time notifications**: Desktop and email alerts on opens/clicks/replies
- **Branded links**: Custom tracking domains to reduce spam filtering — configure in Settings > Branded Links. Replaces Reply.io's default tracking domain with your own (e.g., track.yourdomain.com)
- **Per-sequence tracking**: Track opens, clicks, replies, and bounces at the sequence level, step level, and individual contact level
- **Channel efficiency dashboard**: Compare engagement across email, LinkedIn, calls, SMS — see which channels drive the most replies
- **Statistics API**: Programmatic access to tracking data via `GET /statistics/email`, `GET /statistics/clicks`, etc.
- **Unified inbox**: All replies from all channels appear in one inbox — no switching between tools to see responses
- **Google Postmaster integration**: Monitor domain reputation and spam rates alongside tracking data
- **Apple MPP impact**: Same as other platforms — Apple Mail recipients inflate open rates. Reply.io doesn't filter MPP opens separately. Weight clicks and replies over opens.
- **Best practice**: Use branded links to improve click tracking accuracy and reduce spam filtering. Monitor the channel efficiency dashboard weekly to shift budget toward highest-performing channels.

## In Woodpecker
- **Tracking types**: Opens (pixel), clicks (link wrapping), replies (auto-detected), bounces
- **Centralized inbox**: All replies from all connected mailboxes in one view — auto-categorized as interested, auto-replied, bounced, or out-of-office
- **Per-campaign tracking**: Opens, clicks, replies, bounces, and "interested" rate per campaign step and per prospect
- **A/B test tracking**: Compare performance across up to 5 variants per step — identify winning subject lines and body copy
- **Adaptive Sending feedback**: Woodpecker uses tracking signals (bounces, spam complaints) to automatically throttle sending — tracking directly influences deliverability
- **No custom tracking domains**: Woodpecker uses its own tracking domain. Dedicated servers add-on (€59/server) provides custom infrastructure but not custom tracking domains per se.
- **Apple MPP impact**: Same as other platforms — Apple Mail recipients inflate open rates. Weight replies and clicks over opens.
- **Best practice**: Focus on reply rate and "interested" categorization in the centralized inbox rather than open rate. Use A/B testing data to optimize subject lines and body copy over 2-3 campaign cycles.

## In Seismic

- **LiveSend**: Tracked content delivery — send documents, decks, and proposals to prospects and track opens, time spent per page, downloads, and forwards. Different from email open/click tracking — this is document-level engagement analytics.
- **Engagement signals**: See exactly which pages a prospect spent time on, how many times they returned, and whether they shared the content internally. High engagement on pricing pages = buying signal.
- **Alerts**: Get notified when a prospect views shared content, enabling timely follow-up while the content is top of mind.
- **Analytics**: Content effectiveness reporting — which content pieces drive the most engagement across all LiveSend deliveries. Helps marketing understand what resonates.
- **CRM sync**: LiveSend activity logs to Salesforce/HubSpot opportunity records — visible in deal reviews for pipeline inspection.

## In Mixmax

- **Tracking types**: Opens (pixel), clicks (link wrapping), file downloads (attachment tracking), RSVPs, poll responses
- **Real-time notifications**: Desktop, email, or Slack alerts on opens/clicks/replies — configurable per message or globally
- **Live Feed**: Real-time stream of all tracking events across your team at app.mixmax.com/dashboard/livefeed; also available via API (`GET /livefeed/events`)
- **Per-message controls**: Toggle `trackingEnabled`, `linkTrackingEnabled`, `fileTrackingEnabled`, `notificationsEnabled` individually per message
- **Smart Send**: AI analyzes recipient engagement patterns to recommend optimal send times — increases open rates by sending when recipients are most active
- **Tracking domains**: Custom tracking domains available for branded link tracking (reduces spam filtering on tracked links)
- **Reporting**: Aggregate tracking data by template, sequence, recipient, team, or individual; export via Insights Reports API (`GET /insightsreports`)
- **Salesforce sync**: Tracking events (opens, clicks, replies) auto-log to Salesforce contact/lead activity timeline (Growth+CRM plan)
- **Apple MPP impact**: Mixmax is Gmail-native — Apple MPP primarily affects Apple Mail recipients. Same mitigation applies: weight clicks and replies over opens for Apple Mail contacts
- **Gotcha**: Mixmax tracking is Gmail-only. If your team uses Outlook, Mixmax tracking won't work — consider Yesware or Salesloft instead

## In SendGrid

- **Tracking types**: Opens (pixel), clicks (link wrapping) — configurable per-message via `tracking_settings` in the Mail Send API or globally in Settings > Tracking
- **Event Webhooks**: Real-time event delivery to your endpoint. Events: processed, dropped, delivered, deferred, bounce, open, click, spam_report, unsubscribe, group_unsubscribe, group_resubscribe. Configure at Settings > Mail Settings > Event Webhooks or via API (`/v3/user/webhooks/event/settings`).
- **Signed webhooks**: Enable webhook signature verification to validate that events are genuinely from SendGrid — uses ECDSA signatures with a public key retrievable via API
- **Statistics dashboard**: Aggregate stats by category, mailbox provider, browser, device, and geography. Available in the dashboard or via Stats API endpoints (`GET /v3/stats`, `GET /v3/categories/stats`, etc.)
- **Email Activity Feed**: Search and filter individual message events — delivery status, opens, clicks, bounces. Available in the dashboard. API access (`GET /v3/messages`) requires additional purchase on non-Premier plans.
- **Click tracking domains**: Custom branded domains for click tracking links — reduces spam filtering and improves trust. Configure via Link Branding in Sender Authentication.
- **Suppression-based unsubscribe tracking**: SendGrid manages unsubscribe groups (ASM) — recipients can manage subscription preferences across groups. Unsubscribe events fire to webhooks automatically.
- **Gotcha**: SendGrid's open/click tracking is subject to the same Apple MPP and bot-click inflation as other platforms. The Event Webhook delivers raw events — you'll need to build your own filtering logic for bot detection (rapid multi-click from data center IPs within seconds of delivery).

## In Postmark

- **Tracking types**: Opens (pixel), clicks (link wrapping) — configurable per-message via `TrackOpens` (boolean) and `TrackLinks` (None, HtmlAndText, HtmlOnly, TextOnly) in the Email API, or globally per-server in Settings
- **Webhooks**: 7 webhook types for tracking: Bounce, Delivery, Open, Click, SpamComplaint, SubscriptionChange, Inbound. Configure per-server in Settings > Webhooks or via API (`POST /webhooks`). Each webhook can subscribe to specific event types.
- **Webhook payloads**: Rich event data including RecordType, MessageID, Recipient, Tag, timestamp, plus event-specific fields. Open/Click webhooks include Client (name, company, family), OS, Platform, UserAgent, and Geo (city, country, region, IP) data.
- **Retry schedule**: Bounce & Inbound: retries at 1min, 5min, 10min (×3), 15min, 30min, 1hr, 2hr, 6hr. Click/Open/Delivery: retries at 1min, 5min, 15min. 403 response stops retries immediately.
- **Statistics API**: `GET /stats/outbound/opens`, `GET /stats/outbound/clicks`, plus breakdowns by platform, email client, browser, and geographic location. Filter by tag or message stream.
- **Message detail**: `GET /messages/outbound/{messageID}/details` returns full event history for a single message — every open, click, delivery, and bounce event with timestamps.
- **No real-time notifications**: Postmark doesn't have desktop/mobile push notifications for opens/clicks like Yesware or Mixmax. You receive events via webhooks and build your own notification system.
- **Gotcha**: Postmark's tracking is subject to the same Apple MPP and bot-click inflation as other platforms. Use click and delivery webhooks as the most reliable signals. Postmark's Geo data in open/click webhooks can help identify bot activity (data center IPs vs. real user locations).

## In Customer.io

- **Tracking types**: Opens (pixel), clicks (link wrapping) — enabled by default on campaigns. Configurable per-message in workflow steps.
- **Conversion goals**: Define conversion events (e.g., "purchased", "activated") on campaigns — Customer.io tracks whether recipients complete the goal within a time window. This is more powerful than basic open/click tracking because it measures actual business outcomes.
- **Reporting webhooks**: Customer.io can POST engagement events to your webhook URL: email_sent, email_delivered, email_opened, email_clicked, email_bounced, email_dropped, email_spamreport, email_unsubscribed, plus SMS/push equivalents. Configure in Settings > Webhooks.
- **Campaign analytics**: Per-campaign metrics including sends, deliveries, opens, clicks, conversions, unsubscribes, bounces, spam complaints. Cohort comparison to measure performance over time.
- **A/B test results**: Built-in significance testing for A/B experiments — Customer.io calculates statistical significance and recommends a winner.
- **Activity log**: Per-person activity timeline showing every message sent, opened, clicked, converted — available in the UI and via App API (`GET /customers/{id}/activities`).
- **No real-time desktop notifications**: Customer.io doesn't push open/click alerts to your desktop like Yesware or Mixmax. Use reporting webhooks to build custom notifications, or check the dashboard.
- **Gotcha**: Same Apple MPP and bot-click caveats apply. Customer.io's conversion goals are the most reliable engagement signal — they measure actual actions, not pixel loads.

## In Mailgun (Sinch)

- **Tracking types**: Opens (tracking pixel) and clicks (link rewriting). Enable/disable per-domain in domain tracking settings or via API. CNAME record must point to mailgun.org for click tracking to work.
- **Webhooks (8 event types)**: accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed. Configure per-domain via dashboard (Sending > Webhooks) or API (`POST /v3/domains/{domain}/webhooks`). Payload is JSON with event type, recipient, timestamp, message headers, and event-specific data.
- **Webhook signing**: HMAC SHA256 verification — Mailgun signs payloads with your webhook signing key. Always verify signatures in production to prevent spoofing.
- **Webhook retry**: Automatic retry with exponential backoff for up to 24 hours on failed deliveries (non-2xx responses).
- **Events API**: `GET /v3/{domain}/events` — query event log filtered by event type, recipient, tags, date range. Paginated via `next` URL. Use for historical analysis when webhooks aren't enough.
- **Metrics API**: `POST /v1/analytics/metrics` — aggregate analytics on deliverability and engagement per domain, tag, or date range.
- **Tags for tracking**: Tag sends with up to 3 tags per message. View per-tag statistics via `GET /v3/{domain}/tags/{tag}/stats` — useful for tracking engagement by campaign, template, or segment.
- **No real-time desktop notifications**: Mailgun is API-first — no browser extension or desktop alerts for opens/clicks. Build custom notifications using webhooks → Slack/email.
- **Gotcha**: Same Apple MPP and bot-click caveats apply. Mailgun's click tracking requires the CNAME record — without it, click events won't fire.

## In Klaviyo

- **Tracking types**: Opens (pixel) and clicks (link wrapping) — enabled by default on all campaigns and flows. Configurable per-message.
- **Flow analytics**: Per-flow and per-step engagement metrics — opens, clicks, revenue attributed, unsubscribes, spam complaints. Conversion tracking attributes revenue to specific flow messages within a configurable attribution window.
- **Campaign analytics**: Per-campaign metrics with A/B test results, revenue attribution, click heatmaps, and geographic data. Compare performance across campaigns.
- **Metrics API**: `GET /api/metrics/` lists all tracked events. `POST /api/metric-aggregates/` queries aggregate data (opens, clicks, revenue) by date range, campaign, or flow. Use for custom dashboards and reporting.
- **Webhooks**: Flow webhooks fire as a flow action step — POST event/profile data to your endpoint URL. Advanced KDP system webhooks fire on any event (email received, clicked, opened, marked spam, consent changes). HMAC-SHA256 signed. Advanced KDP webhooks are enterprise-only.
- **Benchmarks**: Compare your open rates, click rates, and revenue-per-recipient against industry peers and similar-sized accounts. Available in Analytics > Benchmarks.
- **Predictive engagement**: Klaviyo predicts churn risk and next order date — use these in segments to proactively target at-risk customers before they disengage.
- **No real-time desktop notifications**: Klaviyo doesn't push individual open/click alerts. Use flow webhooks to trigger Slack/email notifications, or check the dashboard.
- **Gotcha**: Same Apple MPP and bot-click caveats apply. Klaviyo's revenue attribution window is configurable — default is 5 days for flows, 3 days for campaigns. Overly generous windows inflate attributed revenue.

## In ActiveCampaign

- **Tracking types**: Opens (pixel) and clicks (link wrapping) — enabled by default on all campaigns and automations. Configurable per-campaign.
- **Site tracking**: JavaScript snippet tracks page visits, referral source, and time on page. Use site tracking data to trigger automations (e.g., visited pricing page → send follow-up) and score leads. Available on all plans.
- **Event tracking**: Custom event tracking via API or JavaScript — track any user action (e.g., "viewed_demo", "started_trial"). Events feed into automations, segments, and lead scoring.
- **Automation analytics**: Per-automation metrics — contacts entered, completed, converted (goal reached), email opens/clicks at each step. Conversion goals measure actual outcomes, not just engagement.
- **Campaign analytics**: Per-campaign metrics with A/B test results, opens, clicks, replies, bounces, unsubscribes, forwards. Split testing up to 5 variants.
- **Contact activity timeline**: Per-contact history of every email sent, opened, clicked, page visited, form submitted, automation entered — available in the contact record and via API (`GET /api/3/contacts/{id}/contactAutomations`).
- **Webhooks**: 25+ event types via Settings > Developer > Webhooks. Events include: subscribe, unsubscribe, update, click, open, sent_mail, reply, bounce, deal_add, deal_update, task_complete, and more. Payload is form-encoded with event type and relevant IDs.
- **No real-time desktop notifications**: ActiveCampaign doesn't push individual open/click alerts. Use webhooks to trigger Slack/email notifications, or set up automations to notify sales when contacts engage.
- **Gotcha**: Same Apple MPP and bot-click caveats apply. ActiveCampaign's site tracking and event tracking are more reliable engagement signals than email opens. Use goal conversions in automations as the most trustworthy metric.
