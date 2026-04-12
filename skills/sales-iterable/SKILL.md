---
name: sales-iterable
description: "Iterable platform help — cross-channel customer engagement with Studio journey builder, AI suite (Brand Affinity, STO, Predictive Goals), and Smart Ingest from 23+ data sources. Use when Studio journeys aren't triggering correctly, campaigns or experiments produce unexpected results, email/SMS/push/in-app/WhatsApp channels aren't delivering, AI features like Brand Affinity or STO aren't improving metrics, Smart Ingest or Snowflake sync is failing, or something in Iterable isn't working as expected. Do NOT use for general email marketing strategy (use /sales-email-marketing), push notification strategy (use /sales-push-notification), in-app messaging strategy (use /sales-in-app-messaging), transactional email strategy (use /sales-transactional-email), cross-platform deliverability (use /sales-deliverability), or connecting tools generically (use /sales-integration)."
argument-hint: "[describe what you need help with in Iterable]"
license: MIT
version: 1.0.0
tags: [sales, marketing-automation, cross-channel, platform]
github: "https://github.com/Iterable"
---
# Iterable Platform Help

Help the user with Iterable platform questions — from Studio journey creation and campaign configuration through channel setup (email, SMS, push, in-app, web push, WhatsApp), AI features, data integration, experiments, and API usage.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

If the question is about general strategy rather than Iterable-specific config, hand off to the appropriate skill:

| Question type | Hand off |
|---|---|
| Email marketing strategy (not Iterable-specific) | "This is an email marketing strategy question — run: `/sales-email-marketing {your question}`" |
| Push notification strategy across tools | "This is a push notification strategy question — run: `/sales-push-notification {your question}`" |
| In-app messaging strategy across tools | "This is an in-app messaging strategy question — run: `/sales-in-app-messaging {your question}`" |
| Transactional email provider comparison | "This is a transactional email question — run: `/sales-transactional-email {your question}`" |
| SPF/DKIM/DMARC setup across tools | "This is an email deliverability question — run: `/sales-deliverability {your question}`" |
| Connecting Iterable to CRM via Zapier/Make | "This is a tool integration question — run: `/sales-integration {your question}`" |

Otherwise, answer directly with Iterable-specific guidance below.

## Step 3 — Iterable platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

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
