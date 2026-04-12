# Push Notification Platform Guide

## Push Notification Types

| Type | Example | Frequency | Priority |
|---|---|---|---|
| **Transactional** | "Your order shipped" | As needed | High |
| **Social** | "Alex commented on your post" | Real-time | High |
| **Reminder** | "Your appointment is in 1 hour" | Scheduled | High |
| **Re-engagement** | "You left items in your cart" | 1-2x per event | Medium |
| **Promotional** | "Flash sale: 30% off today only" | 2-5x per week | Low |
| **Content** | "New episode from a show you follow" | As published | Medium |

## Platform-Specific Guidance

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

## Implementation Checklist

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

## Key Metrics

| Metric | Benchmark | What it tells you |
|---|---|---|
| Opt-in rate | 50-70% (with primer) | Permission strategy effectiveness |
| Delivery rate | > 95% | Token validity, infrastructure health |
| Direct open rate | 5-15% | Message relevance and timing |
| Influenced open rate | 15-30% | Push drove app opens within window |
| Opt-out / disable rate | < 1% per month | Over-messaging or irrelevant content |
| CTR (with action buttons) | 10-20% | Call-to-action effectiveness |
