---
name: sales-customerio
description: "Customer.io platform help — customer engagement & marketing automation for behavior-based multi-channel messaging. Journeys (visual workflow builder with branching, delays, wait-untils), Campaigns (segment/event/date-triggered), Transactional Messages (API-triggered email, push, SMS), Segmentation (data-driven auto-updating and manual/static), Multi-channel (email, SMS via Twilio, push iOS/Android/web, in-app, WhatsApp), Data Pipelines (primary ingestion API, reverse ETL), Custom Objects, Ad Audience Sync (Google, Facebook, Instagram, YouTube), Design Studio (drag-and-drop email editor), A/B & cohort testing, Broadcasts (one-time/scheduled/API-triggered), Webhooks in workflows, and Analytics with AI-powered insights. Use when asking 'how do I do X in Customer.io', building behavior-triggered automation, setting up transactional messaging via Customer.io, configuring segments or journeys, integrating Customer.io Data Pipelines, or working with the Track/App/Transactional APIs. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), or email open/click tracking strategy (use /sales-email-tracking)."
argument-hint: "[describe what you need help with in Customer.io]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Customer.io Platform Help

Help the user with Customer.io platform questions — from behavior-triggered journeys and campaigns through transactional messaging, segmentation, multi-channel delivery (email, SMS, push, in-app, WhatsApp), Data Pipelines, Custom Objects, Ad Audience Sync, and analytics. Customer.io is a customer engagement and marketing automation platform for data-driven, event-based messaging across the entire customer lifecycle. Founded in 2012 by Colin Nederkoorn and John Allison, Customer.io serves 9,000+ brands with $100M+ ARR and differentiates through event-driven automation for product-led companies — while Mailchimp/SendGrid focus on marketing email, Customer.io excels at behavior-triggered messaging (onboarding, activation, retention, re-engagement) with first-party data at the center.

## Step 1 — Gather context

Ask the user:

1. **What area of Customer.io do you need help with?**
   - A) Journeys — visual drag-and-drop workflow builder for multi-channel automation
   - B) Campaigns — segment-triggered, event-triggered, or date-triggered messaging
   - C) Transactional Messages — API-triggered email, push, or SMS (password resets, receipts, etc.)
   - D) Segmentation — data-driven (auto-updating) or manual (static) segments
   - E) Multi-channel messaging — email, SMS, push notifications, in-app messages, WhatsApp
   - F) Data Pipelines — data ingestion API, reverse ETL, Segment integration
   - G) Custom Objects — modeling relationships beyond people (accounts, products, subscriptions)
   - H) Ad Audience Sync — Google, Facebook, Instagram, YouTube audience sync
   - I) Design Studio — collaborative drag-and-drop email editor
   - J) A/B & cohort testing — testing content, subject lines, workflow branches, send times
   - K) Broadcasts — one-time or scheduled messages to segments
   - L) Webhooks — sending/receiving data to any API within journey steps
   - M) Analytics — conversion goals, cohort comparison, AI-powered insights
   - N) APIs — Track API, App API, Transactional API, Data Pipelines API
   - O) Integrations — Salesforce, Segment, Snowflake, BigQuery, Zapier, etc.
   - P) Account / Billing — plans, pricing, profile limits
   - Q) Something else — describe it

2. **What's your role?**
   - A) Developer / engineer
   - B) Product / growth
   - C) Marketing / lifecycle
   - D) Admin / account owner
   - E) Founder / solo operator
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability (not Customer.io-specific) -> `/sales-deliverability`
- Email open/click tracking strategy -> `/sales-email-tracking`
- Connecting Customer.io to other tools via Zapier or middleware -> `/sales-integration`
- Funnel strategy / conversion optimization -> `/sales-funnel`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Customer.io platform reference

Provide module-by-module guidance based on the user's area:

### Journeys
- **What it is**: Visual drag-and-drop workflow builder for multi-channel automation — the core of Customer.io's campaign orchestration
- **Triggers**: Segments (person enters/exits), events (behavioral), dates (attribute-based), form submissions, webhooks, API calls
- **Branching logic**: True/false branches based on attribute conditions, segment membership, event data, or random split (for A/B testing)
- **Time controls**: Delays (wait X minutes/hours/days), wait-until (pause until a condition is met or a date is reached), time windows (send only during business hours)
- **Actions**: Send email, send SMS, send push notification, send in-app message, send WhatsApp message, send webhook, update attribute, add/remove from segment, add to another journey
- **Multi-channel within a single journey**: Combine email, SMS, push, in-app, and webhooks in one workflow — e.g., send email, wait 2 days, if no open then send push notification
- **Draft mode**: Build and test journeys before activating — preview each step, send test messages

### Campaigns
- **Segment-triggered**: Automatically send when a person matches segment criteria (enters the segment)
- **Event-triggered**: Fire when a specific event is tracked for a person (e.g., `purchase_completed`, `trial_started`)
- **Date-triggered**: Send based on a date attribute (e.g., subscription renewal date, birthday)
- **Workflow vs. single-send**: Campaigns can be single messages or multi-step workflows (journeys)
- **Conversion tracking**: Set a conversion goal event and window to measure campaign effectiveness

### Transactional Messages
- **Purpose**: API-triggered messages for time-sensitive, user-initiated actions — password resets, receipts, shipping notifications, verification codes
- **Endpoint**: `POST https://api.customer.io/v1/send/email` (Bearer token authentication, 100 req/sec)
- **Channels**: Email, push notifications, SMS
- **Templates**: Create transactional message templates in the UI, trigger via API with dynamic data
- **Tracking**: Transactional messages appear in the same analytics as campaign messages — opens, clicks, deliveries
- **Key difference from campaigns**: Transactional messages are triggered by your application code via API, not by segments or events within Customer.io

### Segmentation
- **Data-driven segments**: Auto-updating segments based on person attributes, event history, and engagement data — people are automatically added/removed as their data changes
- **Manual segments**: Static lists — people are added/removed explicitly via UI or API
- **Segment conditions**: Combine attribute filters (e.g., `plan = "premium"`), event filters (e.g., "performed `login` in last 7 days"), engagement filters (e.g., "opened email in last 30 days"), and relationship filters (e.g., "related account has attribute X")
- **Nested logic**: AND/OR grouping for complex segment definitions
- **Segment-triggered workflows**: Segments serve as the primary entry trigger for campaigns and journeys
- **Real-time evaluation**: Data-driven segments re-evaluate as new data arrives — no manual refresh needed

### Multi-channel messaging
- **Email**: Full HTML email with Design Studio editor, Handlebars-style Liquid templating, AMP support
- **SMS**: Powered by Twilio — requires a separate Twilio account connected to Customer.io. Supports two-way SMS with keyword handling (STOP, HELP)
- **Push notifications**: iOS (APNs), Android (FCM), and web push. Requires SDK integration in your mobile app or website
- **In-app messages**: Rich messages displayed within your app — requires Customer.io SDK integration. Supports images, buttons, carousels
- **WhatsApp**: Send WhatsApp messages via Meta Business API integration
- **Channel preference management**: Respect user channel preferences and subscription status per channel

### Data Pipelines
- **What it is**: Customer.io's primary data ingestion layer — recommended for all new integrations
- **Sources**: JavaScript SDK, server-side SDKs (Node, Python, Ruby, Go, Java, PHP), HTTP API, Segment integration, reverse ETL (Snowflake, BigQuery)
- **Destinations**: Route data from your sources to Customer.io Journeys and to third-party tools
- **Reverse ETL**: Pull data from your data warehouse (Snowflake, BigQuery) into Customer.io — sync audiences, attributes, and events from your warehouse
- **Segment compatibility**: Data Pipelines API is compatible with Segment's tracking spec — easy migration from Segment
- **Recommended for new setups**: Customer.io recommends Data Pipelines over the Track API for new integrations

### Custom Objects
- **What it is**: Model relationships beyond people — accounts, companies, products, subscriptions, orders, etc.
- **Relationship types**: People can be related to custom objects, and custom objects can be related to other custom objects
- **Use cases**: Trigger messages based on account-level attributes, personalize with product data, segment by subscription status
- **Limits**: 2 object types on Essentials plan, 10 on Premium/Enterprise
- **Events on objects**: Track events on custom objects, not just people — e.g., track `subscription_renewed` on a subscription object

### Ad Audience Sync
- **Supported platforms**: Google Ads, Facebook, Instagram, YouTube
- **How it works**: Sync Customer.io segments to ad platform audiences — keep ad targeting aligned with your lifecycle segments
- **Use cases**: Suppress existing customers from acquisition ads, retarget churned users, create lookalike audiences from high-value segments
- **Sync frequency**: Audiences sync automatically as segment membership changes

### Design Studio
- **Drag-and-drop editor**: Visual email builder with pre-built content blocks (text, image, button, divider, social, etc.)
- **Collaborative editing**: Multiple team members can work on email designs
- **Reusable layouts**: Create layout templates that can be shared across campaigns
- **Code editor**: Switch to raw HTML/CSS for full control
- **Liquid templating**: Use Liquid syntax for dynamic content, conditional logic, and loops within email templates

### A/B & Cohort Testing
- **Content testing**: Test different email subject lines, body content, send times, or channels
- **Workflow branch testing**: Split journey paths to test different automation sequences
- **Random split**: Divide audience into test groups with configurable percentages
- **Winning criteria**: Define conversion goals and automatically select the winner
- **Cohort comparison**: Compare performance across user cohorts over time

### Broadcasts
- **One-time sends**: Send a single message to a segment immediately or at a scheduled time
- **Scheduled broadcasts**: Set a future date/time for delivery
- **API-triggered broadcasts**: Trigger a broadcast send via API — useful for programmatic one-time sends
- **Newsletter use case**: Use broadcasts for newsletters, product announcements, or one-time promotions
- **Rate limit**: API-triggered broadcasts are limited to 1 request per 10 seconds

### Analytics
- **Conversion goals**: Set an event as the conversion goal for a campaign — track the percentage of recipients who convert within the goal window
- **Cohort comparison**: Compare campaign performance across different user segments or time periods
- **AI-powered insights**: Automated recommendations for improving campaign performance (send time optimization, content suggestions)
- **Delivery metrics**: Opens, clicks, conversions, unsubscribes, bounces, spam complaints per campaign and message
- **Journey analytics**: Step-by-step performance metrics for each node in a journey — see where people drop off or convert
- **Revenue attribution**: Track revenue attributed to specific campaigns when revenue events are configured

### Data model

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

### API quick reference

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

### Integrations

| Category | Tools |
|----------|-------|
| **CRM** | Salesforce (bi-directional sync — sync contacts, leads, accounts between Salesforce and Customer.io) |
| **Data infrastructure** | Segment (source/destination), Snowflake (reverse ETL), BigQuery (reverse ETL) |
| **Automation** | Zapier (triggers and actions), webhooks (send/receive within journeys) |
| **SMS** | Twilio (powers Customer.io SMS — requires separate Twilio account) |
| **Advertising** | Google Ads, Facebook, Instagram, YouTube (Ad Audience Sync) |
| **Data Pipelines** | Primary integration method for new setups — supports 100+ sources and destinations |
| **Other** | Slack (notifications), Heap, Mixpanel, Amplitude (event data via Data Pipelines) |

### Pricing (USD, as of March 2026 — verify current pricing at customer.io)

| Plan | Price | Profiles | Key gated features |
|------|-------|----------|-------------------|
| **Essentials** | $100/mo | 5,000 profiles, 1M emails | 2 custom object types, basic integrations, standard support |
| **Premium** | $1,000/mo (annual) | Custom profiles/volume | 10 custom object types, HIPAA compliance, premium integrations, 90-day onboarding |
| **Enterprise** | Custom | Custom | Dedicated infrastructure, audit logging, dedicated CSM, priority support |

**Additional costs:**
- Extra profiles on Essentials: $0.009/profile
- SMS requires a separate Twilio account (Twilio pricing applies)

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Setting up an event-triggered campaign**:
   1. Identify the event that should trigger the campaign (e.g., `trial_started`, `purchase_completed`, `feature_activated`) — make sure your application is tracking this event via the Track API or Data Pipelines
   2. In Customer.io, go to Journeys > Create Journey > choose "Event triggered"
   3. Select the trigger event name — optionally add event data filters (e.g., only trigger when `plan = "pro"`)
   4. Add a delay if needed (e.g., wait 1 hour after signup before sending the first onboarding email)
   5. Add your first message action — select the channel (email, SMS, push, etc.) and design the message
   6. Use Liquid templating to personalize: `{{ customer.first_name }}`, `{{ event.plan_name }}`, `{{ customer.company }}`
   7. Add branching logic for follow-ups — e.g., "Did user complete onboarding step?" true/false branch
   8. Set a conversion goal event (e.g., `onboarding_completed`) with a time window to measure campaign effectiveness
   9. Test the journey in draft mode — use a test profile and manually trigger the event via the Track API
   10. Activate the journey when ready

2. **Sending transactional email via the API**:
   1. Create a transactional message template in Customer.io: Transactional > Create Transactional Message > Email
   2. Design the email content — use Liquid variables for dynamic data (e.g., `{{ order_number }}`, `{{ reset_url }}`)
   3. Note the transactional message ID from the template settings
   4. Get your App API key from Settings > API Credentials (this is a Bearer token, different from the Track API Site ID/key pair)
   5. Send via API:
      ```
      POST https://api.customer.io/v1/send/email
      Authorization: Bearer YOUR_APP_API_KEY
      Content-Type: application/json

      {
        "transactional_message_id": "YOUR_TEMPLATE_ID",
        "to": "recipient@example.com",
        "identifiers": { "id": "user_123" },
        "message_data": { "order_number": "ORD-456", "total": "$99.00" }
      }
      ```
   6. Handle the response — check for success (200) or error codes
   7. Monitor delivery in Customer.io's Transactional Messages section — opens, clicks, and delivery status appear alongside campaign analytics
   8. For EU data residency, use `https://api-eu.customer.io/v1/send/email`

3. **Building data-driven segments**:
   1. Go to Segments > Create Segment > Data-driven
   2. Define conditions using the visual condition builder — combine attribute filters, event filters, and engagement filters
   3. Attribute filter example: `plan` equals `"premium"` AND `created_at` is after 2025-01-01
   4. Event filter example: Person has performed `login` at least 3 times in the last 7 days
   5. Engagement filter example: Person has opened any email in the last 30 days
   6. Use AND/OR grouping for complex logic — e.g., (plan = "premium" OR plan = "enterprise") AND (last login within 14 days)
   7. Preview the segment to see matching profiles before saving
   8. Use the segment as a journey trigger — people automatically enter the journey when they match the segment criteria and exit when they no longer match
   9. Segments re-evaluate in real time as new data arrives via Track API or Data Pipelines — no manual refresh needed

4. **Adding a webhook to a journey workflow**:
   1. Open an existing journey or create a new one in the journey builder
   2. Add a "Send Webhook" action at the desired step in the workflow
   3. Configure the webhook: set the HTTP method (GET, POST, PUT, PATCH, DELETE), URL, headers, and body
   4. Use Liquid templating in the webhook body to include person attributes and event data: `{ "user_id": "{{ customer.id }}", "plan": "{{ customer.plan }}" }`
   5. Add authentication headers as needed (e.g., `Authorization: Bearer YOUR_EXTERNAL_API_KEY`)
   6. Use cases: update an external CRM, trigger a Slack notification, call your own API to provision a resource, sync data to a third-party tool
   7. Handle webhook responses — you can branch the journey based on the webhook response status code (success/failure paths)
   8. Test the webhook in draft mode before activating the journey — verify your external endpoint receives the expected payload

5. **Setting up Data Pipelines for data ingestion**:
   1. Go to Data Pipelines > Sources > Add Source
   2. Choose your source type — JavaScript SDK (browser), server-side SDK (Node, Python, Ruby, Go, Java, PHP), or HTTP API
   3. Copy the write key for your source — this authenticates data flowing into Customer.io
   4. Install the SDK in your application (e.g., `npm install @customerio/cdp-analytics-node` for Node.js)
   5. Initialize with your write key and send data:
      - `analytics.identify("user_123", { name: "Jane", plan: "premium" })` — creates/updates a person
      - `analytics.track("user_123", "Feature Activated", { feature: "reports" })` — tracks an event
   6. Data Pipelines API is compatible with Segment's tracking spec — if migrating from Segment, minimal code changes are needed
   7. For reverse ETL (Snowflake/BigQuery): go to Data Pipelines > Sources > Add Source > Warehouse, connect your warehouse credentials, and configure sync schedules
   8. Add destinations to route data beyond Customer.io Journeys — e.g., send event data to Amplitude, Mixpanel, or a webhook endpoint
   9. Monitor source health in the Data Pipelines dashboard — track event volume, errors, and latency

## Gotchas

> Best-effort from research — verify details against current Customer.io documentation.

1. **Essentials plan starts at $100/mo, which is steep for small senders.** Unlike Mailchimp (free tier up to 500 contacts) or SendGrid (free tier for 100 emails/day), Customer.io has no free plan and the entry point is $100/mo for 5,000 profiles. If you are a very early-stage startup or small sender with fewer than a few thousand contacts, evaluate whether Customer.io's event-driven automation justifies the cost versus simpler tools. The $0.009/profile overage also adds up quickly at scale.

2. **Only 2 custom object types are available on the Essentials plan.** If you need to model more than 2 non-person entities (e.g., accounts, products, subscriptions, orders), you must upgrade to Premium ($1,000/mo annual). Plan your data model carefully before committing to Essentials — if you need accounts and one more object type, you are already at the limit.

3. **API-triggered broadcasts are rate-limited to 1 request per 10 seconds.** This is significantly slower than the Track API (100 req/sec) or Transactional API (100 req/sec). Do not use API-triggered broadcasts for high-frequency or real-time use cases. If you need to send urgent one-time messages to many people quickly, consider using the Transactional API for individual sends or schedule the broadcast in advance rather than triggering it via API at the last moment.

4. **In-app messages require Customer.io SDK integration in your application.** Unlike email or SMS which work without any client-side code, in-app messages need the Customer.io JavaScript SDK (web) or mobile SDK (iOS/Android/React Native/Flutter) installed and initialized in your app. This means engineering work to integrate the SDK, handle message rendering, and manage the user session. Budget development time for this — it is not a plug-and-play channel.

5. **SMS requires a separate Twilio account and incurs separate Twilio charges.** Customer.io does not provide SMS infrastructure directly — it uses Twilio under the hood. You must create a Twilio account, purchase a phone number, and connect your Twilio credentials to Customer.io. SMS costs are billed by Twilio (not Customer.io) based on Twilio's per-message pricing. This adds billing complexity and means your total messaging cost is split across two vendors.

## Step 5 — Related skills

- `/sales-email-marketing` — Email marketing strategy and best practices (platform-agnostic)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-email-tracking` — Email open and click tracking strategy
- `/sales-integration` — Connect Customer.io to other tools via Zapier, webhooks, or API
- `/sales-funnel` — Funnel strategy and conversion optimization
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building an onboarding drip sequence triggered by signup
**User says**: "I want to send a 5-email onboarding sequence when someone signs up for our SaaS product, with different paths based on whether they complete key activation steps."
**Skill does**:
1. Confirms the user is tracking a `signed_up` event (or equivalent) via the Track API or Data Pipelines — if not, guides them through instrumenting the event
2. Creates a new journey triggered by the `signed_up` event
3. Designs a 5-step email sequence with delays: welcome email (immediate), getting started guide (day 1), key feature walkthrough (day 3), activation nudge (day 5), check-in (day 7)
4. Adds branching logic after step 3: checks if the person has performed the `activated` event — true branch skips the activation nudge and sends a "great job" email instead; false branch continues with the nudge
5. Sets `activated` as the conversion goal with a 14-day window
6. Uses Liquid templating for personalization: `{{ customer.first_name }}`, `{{ customer.company }}`, `{{ customer.plan }}`
7. Tests the journey with a test profile in draft mode before activating
**Result**: User has a behavior-driven onboarding sequence that adapts based on whether the user activates, with conversion tracking to measure effectiveness

### Example 2: Setting up transactional order confirmation emails
**User says**: "We need to send order confirmation emails with line items immediately after purchase, triggered from our backend API."
**Skill does**:
1. Creates a transactional message template in Customer.io with Liquid templating for order data: `{{ order_number }}`, `{{ items }}` (looped with `{% for item in message_data.items %}`), `{{ total }}`
2. Guides the user through getting their App API key from Settings > API Credentials
3. Shows the API call structure: `POST https://api.customer.io/v1/send/email` with `transactional_message_id`, `to`, `identifiers`, and `message_data` containing the order details
4. Recommends including the person's `id` in `identifiers` so the transactional send is associated with their profile for analytics
5. Advises setting up a webhook or checking the Transactional Messages dashboard to monitor delivery failures
6. Notes: if the user is on EU infrastructure, switch to `api-eu.customer.io`
**Result**: User has production-ready transactional order confirmation emails triggered from their backend with dynamic line-item rendering

### Example 3: Syncing a high-value customer segment to Google Ads for suppression
**User says**: "We want to stop showing acquisition ads to people who are already paying customers. Can Customer.io sync our paying customer segment to Google Ads?"
**Skill does**:
1. Confirms the user has a data-driven segment that identifies paying customers (e.g., `plan` is not `"free"` AND `subscription_status` equals `"active"`)
2. Walks through setting up Ad Audience Sync: go to Integrations > Ad Audiences > Google Ads
3. Connects the Google Ads account via OAuth
4. Maps the paying customer segment to a Google Ads customer list
5. Explains that the audience syncs automatically as people enter/exit the segment — new paying customers are added and churned customers are removed
6. Recommends creating an exclusion audience in Google Ads using this synced list to suppress existing customers from acquisition campaigns
**Result**: User's acquisition ad spend is optimized by automatically excluding paying customers, with the audience staying current as subscription status changes

## Troubleshooting

### Events not triggering campaigns or journeys
**Symptom**: You are tracking events via the Track API or Data Pipelines, but event-triggered campaigns or journeys are not firing for those events.
**Cause**: The most common cause is that the person does not exist in Customer.io before the event is tracked. The Track API requires that a person is identified (`PUT /customers/{id}`) before events can be associated with them. Another common cause is a mismatch between the event name in your code and the event name configured as the journey trigger (event names are case-sensitive). Finally, check that the journey is in an active state — draft or paused journeys will not trigger.
**Solution**: Verify the person exists by checking their profile in Customer.io (People > search by ID or email). Ensure you call identify before track in your integration code. Double-check the event name matches exactly (case-sensitive) between your code and the journey trigger configuration. Confirm the journey status is "Active" in the Journeys list. Use the Activity Log to see if Customer.io received the event at all — if the event does not appear, the issue is in your integration code or API authentication.

### SMS messages not sending despite being configured in a journey
**Symptom**: Email steps in a journey work correctly, but SMS steps are skipped or show errors in the journey analytics.
**Cause**: SMS in Customer.io requires a connected Twilio account with an active phone number. If Twilio credentials are not configured, expired, or the Twilio account has insufficient funds, SMS steps will fail silently or be skipped. Additionally, the person must have a valid phone number attribute (typically `phone` or a custom attribute mapped in settings) and must not have unsubscribed from SMS.
**Solution**: Go to Settings > Workspace Settings > SMS to verify your Twilio Account SID, Auth Token, and phone number are correctly configured. Test the Twilio connection by sending a test SMS. Check the person's profile to confirm they have a valid phone number in the expected attribute field. Verify the person's SMS subscription status is not unsubscribed. Check your Twilio account dashboard for any errors, insufficient balance, or number compliance issues.

### Data Pipelines events appearing in the source dashboard but not in person profiles
**Symptom**: The Data Pipelines source shows events being received (event count is increasing), but when you look at individual person profiles in Customer.io, the events do not appear.
**Cause**: Data Pipelines requires that an `identify` call is made for a person before `track` events are associated with their profile. If you are sending `track` calls with a `userId` that has never been identified, the events may be received by the pipeline but not associated with a person profile. Another cause is that the Data Pipelines destination for Customer.io Journeys is not enabled or is misconfigured.
**Solution**: Verify that you are calling `analytics.identify("user_id", { traits })` before or alongside your `analytics.track()` calls. Check Data Pipelines > Destinations to confirm that Customer.io Journeys is listed as a destination and is enabled. Review the destination's event delivery logs for any errors. If using reverse ETL from a warehouse, verify that the sync mapping includes both identity and event data, and check the sync schedule to ensure it has run recently.
