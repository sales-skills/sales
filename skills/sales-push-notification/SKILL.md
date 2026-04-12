---
name: sales-push-notification
description: "Mobile and web push notification strategy — opt-in optimization, rich push, segmentation, timing, frequency capping, deep linking, A/B testing, and analytics. Covers strategy and implementation across Braze, OneSignal, Airship, Firebase/FCM, Customer.io, Klaviyo, Iterable, and MoEngage. Use when push opt-in rates are low, users are disabling notifications, push campaigns get poor click-through, you're unsure which push provider to pick, or notifications feel spammy and drive uninstalls. Do NOT use for in-app messages (use /sales-in-app-messaging), email marketing (use /sales-email-marketing), SMS/WhatsApp messaging (use /sales-braze or platform-specific skill), or cold outbound (use /sales-cadence). For Braze-specific help, use /sales-braze. For Customer.io-specific help, use /sales-customerio."
argument-hint: "[describe your push notification question or goal]"
license: MIT
version: 1.0.0
tags: [sales, push-notification, mobile, web-push]
---
# Mobile & Web Push Notifications

Help the user with push notification strategy — from opt-in optimization and message design through segmentation, timing, frequency capping, and analytics. This skill is tool-agnostic but includes platform-specific guidance for Braze, OneSignal, Airship, Firebase/FCM, Customer.io, Klaviyo, Iterable, and MoEngage.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Strategy — planning a push notification program from scratch
   - B) Opt-in optimization — increasing push permission acceptance rates
   - C) Message design — content, rich push, action buttons, deep links
   - D) Segmentation — targeting the right users for push
   - E) Timing & frequency — when and how often to send
   - F) A/B testing — testing push variants
   - G) Analytics — measuring push effectiveness
   - H) Tool selection — choosing a push notification platform
   - I) Technical setup — SDK integration, certificates, FCM keys
   - J) Something else — describe it

2. **What platforms do you target?**
   - A) iOS (iPhone/iPad)
   - B) Android
   - C) Web (browser push)
   - D) iOS + Android
   - E) All (iOS + Android + Web)

3. **What tool are you using (or considering)?**
   - A) Braze
   - B) OneSignal
   - C) Airship (Urban Airship)
   - D) Firebase Cloud Messaging (FCM) directly
   - E) Customer.io
   - F) Klaviyo
   - G) Iterable
   - H) MoEngage
   - I) Not decided yet
   - J) Other

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Strategy and approach

### When push notifications work best

Push is highest-value for:
- **Time-sensitive actions** — flash sales, expiring offers, appointment reminders
- **Transactional updates** — order shipped, delivery arriving, payment received
- **Re-engagement** — dormant users, abandoned cart, feature they haven't tried
- **Social triggers** — someone liked/commented/messaged them
- **Personalized content** — recommendations, score updates, content they follow

Push is lowest-value (and most likely to cause unsubscribes) for:
- Generic promotional blasts with no personalization
- Sending too frequently (more than 1-2 per day for most apps)
- Content that could wait for email or in-app

### Push opt-in strategy

iOS requires explicit user permission for push. Android auto-enables but users can disable. Web requires permission prompt.

**The push primer pattern (critical for iOS):**
1. Don't show the OS permission prompt immediately on first launch
2. First, show a custom in-app message explaining the value ("Get notified when your order ships")
3. If user taps "Enable" on your custom prompt → show the OS prompt
4. If user taps "Not now" → don't show OS prompt, try again later
5. This avoids permanent "denied" status from premature OS prompts

**Opt-in rate benchmarks:**
- With push primer: 50-70% opt-in
- Without primer (OS prompt on first launch): 30-40% opt-in
- Web push: 5-15% opt-in (browser prompts are lower than native)

### Message design principles

1. **Keep it short** — 40-50 characters for the title, 100-120 for the body (iOS truncates beyond this)
2. **Lead with value** — what does the user get? Not what you want them to do.
3. **Personalize** — use name, last action, product interest. Generic = ignored.
4. **Create urgency (sparingly)** — "Ends in 2 hours" works, but don't manufacture false urgency
5. **Rich push** — images, GIFs, and action buttons increase engagement 20-40%
6. **Deep link** — always deep link to the relevant screen, never just open the app home

### Frequency and timing

**Frequency guidelines:**
- **Transactional**: No limit — users expect these (order updates, etc.)
- **Promotional**: 2-5 per week for engaged users, 1-2 per week for casual users
- **Maximum**: More than 1-2 per day drives unsubscribes for most app categories
- **Use frequency capping**: Most tools let you cap per user per day/week

**Timing optimization:**
- **Intelligent timing** (Braze, Iterable, OneSignal): ML-based per-user optimal send time
- **Manual defaults**: 10am-1pm and 6-9pm local time for most consumer apps. Avoid late night (10pm-7am).
- **Quiet hours**: Always respect quiet hours — never wake users up

### Push notification types

| Type | Example | Frequency | Priority |
|---|---|---|---|
| **Transactional** | "Your order shipped" | As needed | High |
| **Social** | "Alex commented on your post" | Real-time | High |
| **Reminder** | "Your appointment is in 1 hour" | Scheduled | High |
| **Re-engagement** | "You left items in your cart" | 1-2x per event | Medium |
| **Promotional** | "Flash sale: 30% off today only" | 2-5x per week | Low |
| **Content** | "New episode from a show you follow" | As published | Medium |

## Step 3 — Platform-specific guidance

### In Braze
- **Channels**: iOS (APNs), Android (FCM), Web Push, Kindle, Huawei
- **Rich push**: Images, GIFs, action buttons, custom sounds, push stories (multi-page carousel)
- **Push primer**: Built-in in-app message templates for push permission priming
- **Silent push**: Background data sync without visible notification
- **Canvas integration**: Push as steps in multi-step journeys with branching
- **Intelligent Timing**: ML-based per-user optimal send time
- **Frequency capping**: Global and per-campaign frequency limits
- **TTL and priority**: Configurable time-to-live and delivery priority
- **Segmentation**: Real-time behavioral segments, predictive (BrazeAI churn/purchase likelihood)
- **A/B testing**: Multivariate up to 8 variants, Intelligent Selection for auto-optimization
- **Analytics**: Sends, deliveries, opens, influenced opens, direct opens, bounces
- **Strength**: Best for enterprise-scale cross-channel orchestration where push is one channel in a Canvas journey alongside email, in-app, SMS, and Content Cards.
- **Platform skill**: `/sales-braze`

### In OneSignal
- **Channels**: iOS, Android, Web Push, Huawei, Amazon
- **Free tier**: Unlimited mobile push, 10K web push subscribers free
- **Rich push**: Images, action buttons, large images, big picture style
- **Segments**: Tag-based, filter-based, and data tag segments
- **Intelligent Delivery**: Per-user send time optimization
- **Journeys**: Visual workflow builder for multi-step push sequences
- **A/B testing**: Up to 10 variants
- **Strength**: Best free option for startups and indie developers. Simple API, fast setup.
- **Limitation**: Less sophisticated than Braze/Airship for enterprise cross-channel.

### In Airship (Urban Airship)
- **Channels**: iOS, Android, Web, SMS, Email, App Inbox
- **Performance push**: Optimized delivery for massive scale
- **Scenes**: In-app message sequences for onboarding
- **Preference Center**: User-managed notification preferences
- **Predictive AI**: Churn prediction, send time optimization
- **Strength**: Best for media, airlines, and brands with very high push volume and complex audience management.
- **Limitation**: Enterprise pricing, steeper learning curve.

### In Firebase Cloud Messaging (FCM)
- **What it is**: Google's free push notification infrastructure (iOS + Android + Web)
- **Pricing**: Free — no per-message cost
- **No built-in**: No segmentation, analytics, A/B testing, or timing optimization. FCM is infrastructure only — you build everything yourself.
- **Strength**: Free and reliable. Best for developer teams that want full control and build their own push logic.
- **Limitation**: You need to build everything: user segments, timing, frequency capping, analytics, and opt-in flows.

### In Customer.io
- **Push**: Mobile push as a channel in Journeys workflow builder
- **Triggered push**: Event-driven push based on user behavior
- **Strength**: Good for product-led companies already using Customer.io for email and in-app. Push as one channel in behavior-triggered journeys.
- **Platform skill**: `/sales-customerio`

### In Klaviyo
- **Push**: Mobile push for Shopify apps (iOS and Android)
- **Flows**: Push as steps in Klaviyo Flows alongside email and SMS
- **Strength**: Best for e-commerce brands already on Klaviyo who want push for cart abandonment, back-in-stock, and order updates.
- **Platform skill**: `/sales-klaviyo`

### In Iterable
- **Channels**: iOS (APNs), Android (FCM), Web Push (Chrome, Firefox, Opera, Safari via FCM)
- **Rich push**: Images, action buttons, custom sounds, deep linking to specific app screens
- **Studio integration**: Push as Send tiles in multi-step Studio journeys alongside email, SMS, in-app, WhatsApp
- **Send Time Optimization**: AI-based per-user optimal send time based on historical engagement
- **Frequency Optimization**: AI-chosen per-user cap on push messages per time window — prevents over-messaging
- **Brand Affinity**: Use engagement labels (Loyal, Positive, Neutral, Negative) to target push campaigns to the right audience segments
- **Experiments**: A/B test push content, titles, images, and send times within campaigns or Studio journeys
- **Silent push**: Background data sync without visible notification
- **Strength**: Strong cross-channel orchestration with AI features. Brand Affinity and Frequency Optimization are unique differentiators for push targeting.
- **Platform skill**: `/sales-iterable`

### In Omnisend
- **Web push only**: Browser push notifications to opted-in website visitors — no native mobile app push
- **Unlimited on all plans**: Web push included free on all Omnisend plans including free tier
- **Automation integration**: Web push as a step in any Omnisend automation workflow (cart abandonment, browse abandonment, welcome, etc.) alongside email and SMS
- **Content**: Title, message, image, URL, action buttons
- **Targeting**: Send to all subscribers or specific segments based on shopping behavior, engagement, or lifecycle stage
- **Best for**: Ecommerce brands on Omnisend who want web push as a third channel alongside email and SMS at no extra cost
- **Limitation**: Web push only — no iOS/Android native push. For mobile push, use a dedicated push platform (OneSignal, Braze) alongside Omnisend.
- **Platform skill**: `/sales-omnisend`

### In SendPulse
- **Web push only**: Browser-based push notifications for Chrome, Firefox, and Safari — no native mobile app push
- **Free plan**: Unlimited push subscribers, 10,000 web push notifications per month
- **Subscriber segmentation**: Segment by URL visited, country, browser, and subscription date
- **Campaigns**: Scheduled and triggered push campaigns with A/B testing for push content (title, message, image variants)
- **Automation 360 integration**: Add web push as a step in SendPulse multichannel automation flows alongside email, SMS, and chatbots
- **API**: `POST /push/tasks` (send push), `GET /push/tasks` (list campaigns), `GET /push/websites/{id}/subscribers` (subscriber data)
- **Strength**: Good free tier for web push with built-in multichannel automation. Best for teams already using SendPulse for email or chatbots who want to add web push as an additional channel.
- **Limitation**: Web push only — no iOS/Android native push. For mobile push, pair with a dedicated push platform (OneSignal, Braze).
- **Platform skill**: `/sales-sendpulse`

### In MoEngage
- **MoEngage**: Strong in APAC markets. AI-driven push optimization, smart triggers, geo-targeting. Good for media and e-commerce in India/SE Asia.

## Step 4 — Actionable guidance

### Implementation checklist

1. **Set up push infrastructure** — configure APNs (iOS), FCM (Android), and/or web push in your push platform
2. **Integrate SDK** — install the platform's SDK in your app/website
3. **Build push primer** — create an in-app message explaining push value before showing OS prompt (iOS critical)
4. **Define segments** — create behavioral segments for push targeting
5. **Set frequency caps** — configure per-user daily/weekly limits
6. **Set quiet hours** — define no-send windows (typically 10pm-7am local time)
7. **Create templates** — design push templates for each use case (transactional, promotional, re-engagement)
8. **Set up deep links** — every push should deep link to the relevant app screen
9. **A/B test** — test title, body, image, timing for each campaign type
10. **Monitor** — track opt-in rate, delivery rate, open rate, unsubscribe rate weekly

### Key metrics

| Metric | Benchmark | What it tells you |
|---|---|---|
| Opt-in rate | 50-70% (with primer) | Permission strategy effectiveness |
| Delivery rate | > 95% | Token validity, infrastructure health |
| Direct open rate | 5-15% | Message relevance and timing |
| Influenced open rate | 15-30% | Push drove app opens within window |
| Opt-out / disable rate | < 1% per month | Over-messaging or irrelevant content |
| CTR (with action buttons) | 10-20% | Call-to-action effectiveness |

## Gotchas

1. **iOS push permission is permanent** — if a user denies the OS prompt, you can never ask again (they must go to Settings to re-enable). This is why push primers are critical. Never show the OS prompt without a primer first.
2. **Android 13+ requires opt-in** — Android 13 (API 33) introduced runtime push permission, similar to iOS. Don't assume all Android users have push enabled by default.
3. **Push tokens expire** — if a user doesn't open your app for months, their push token may become invalid. Monitor delivery rates and clean stale tokens. Don't count push-enabled users who haven't opened the app in 90+ days.
4. **Web push has low opt-in** — browser push permission prompts are aggressively blocked by users (5-15% opt-in). Don't rely on web push as a primary channel. Use it as a supplement to email.
5. **Rich push requires separate assets** — iOS and Android handle rich push differently (different image sizes, aspect ratios, and action button limits). Test rich push on both platforms before launching.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-iterable` — Iterable platform help (push setup, Studio journeys, Brand Affinity, STO)
- `/sales-braze` — Braze platform help (push setup, Canvas integration, BrazeAI timing)
- `/sales-customerio` — Customer.io platform help (push in Journeys)
- `/sales-klaviyo` — Klaviyo platform help (push for Shopify e-commerce)
- `/sales-omnisend` — Omnisend platform help (web push + email + SMS for ecommerce)
- `/sales-sendpulse` — SendPulse platform help (web push + email + chatbots + Automation 360)
- `/sales-in-app-messaging` — In-app messages and content cards (companion to push)
- `/sales-email-marketing` — Email marketing strategy (coordinate push + email cadence)
- `/sales-sms-marketing` — SMS marketing strategy (coordinate push + SMS cadence)
- `/sales-live-chat` — Live chat and chatbot (another engagement channel)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Designing a push opt-in strategy
**User says**: "Our iOS push opt-in rate is only 25%. How do we improve it?"
**Skill does**: Diagnoses likely cause (showing OS prompt too early without primer). Designs a push primer flow: trigger in-app message after user completes first key action (e.g., first purchase, first save), explain value proposition specific to their behavior, show OS prompt only on "Enable" tap. Provides benchmark (50-70% with primer).
**Result**: Push primer implementation plan with expected 2x improvement in opt-in rate

### Example 2: Building a cart abandonment push campaign
**User says**: "I want to send push notifications to users who abandon their cart in our e-commerce app"
**Skill does**: Designs a 3-step push sequence: Push 1 at 1 hour ("You left something behind" + product image), Push 2 at 24 hours ("Still interested? Items selling fast"), Push 3 at 48 hours with incentive ("10% off if you complete today"). Includes deep linking to cart, frequency capping, and exit conditions (remove on purchase).
**Result**: Automated cart abandonment push campaign with timing, content, and deep links

### Example 3: Choosing a push notification platform
**User says**: "We're a Series A startup with 50K MAUs. Should we use OneSignal or Braze for push?"
**Skill does**: Compares OneSignal (free tier, simpler, good for push-primary) vs Braze (enterprise, expensive but powerful cross-channel). At 50K MAUs, recommends OneSignal to start — free, fast setup, covers push + basic email. Suggests re-evaluating Braze when they hit 500K+ MAUs or need sophisticated cross-channel journeys.
**Result**: Clear recommendation with migration path as they scale

## Troubleshooting

### Low push open rates
**Symptom**: Push notifications sent but open rate below 3%
**Cause**: Messages not personalized, bad timing, or sending to disengaged users
**Solution**: 1) Segment by recent activity — only send to users active in last 30 days. 2) Enable intelligent timing / send time optimization. 3) Personalize with user name and relevant content. 4) Use rich push (images, action buttons). 5) A/B test titles and body copy. 6) Review frequency — reduce if sending more than 1/day.

### High opt-out / disable rate
**Symptom**: Users disabling push notifications at > 2% per month
**Cause**: Sending too frequently, irrelevant content, or no frequency capping
**Solution**: 1) Implement frequency capping (max 1-2 promotional push per day). 2) Segment by interest — don't blast everyone. 3) Add preference center so users can choose notification types. 4) Review content relevance — are you sending value or just noise? 5) Reduce promotional push frequency for users who haven't engaged in 14+ days.

### Push not arriving on iOS
**Symptom**: Push campaigns show sends but no deliveries on iOS
**Cause**: APNs certificate expired, invalid tokens, or sandbox/production mismatch
**Solution**: 1) Check APNs certificate expiry in your push platform settings. 2) Verify you're using the correct environment (sandbox for dev, production for App Store). 3) Check that push entitlement is enabled in your Xcode project. 4) Test with a fresh install to generate a new token. 5) Check Apple's APNs status page for outages.
