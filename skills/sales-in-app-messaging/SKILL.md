---
name: sales-in-app-messaging
description: "In-app messages and content cards — onboarding, feature announcements, surveys, promotions, persistent content feeds. Covers strategy, design, triggering, and analytics across Braze, Iterable, Intercom, Pendo, Appcues, Customer.io, MoEngage, Whatfix and Chameleon. Use when users aren't completing onboarding, in-app messages have low engagement, not sure which in-app messaging tool to pick, feature announcements go unnoticed, employees aren't adopting enterprise software, or unsure whether to use in-app messages vs push vs email for a use case. Do NOT use for push notifications (use /sales-push-notification), email marketing (use /sales-email-marketing), live chat widgets (use /sales-live-chat), or cold outbound (use /sales-cadence). For Braze-specific help, use /sales-braze."
argument-hint: "[describe your in-app messaging question or goal]"
license: MIT
version: 1.0.0
tags: [sales, messaging, in-app, onboarding, product-led]
---
# In-App Messages & Content Cards

Help the user with in-app messaging — from strategy and message type selection through trigger design, content cards, onboarding flows, and analytics. This skill is tool-agnostic but includes platform-specific guidance for Braze, Iterable, Intercom, Pendo, Appcues, Customer.io, MoEngage, Whatfix and Chameleon.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Strategy — planning an in-app messaging program
   - B) Onboarding — new user walkthroughs, tooltips, feature tours
   - C) Feature announcements — introducing new features to existing users
   - D) Promotions — in-app offers, upsells, upgrade prompts
   - E) Surveys / feedback — collecting user input within the app
   - F) Content cards / inbox — persistent content feed design
   - G) Tool selection — choosing an in-app messaging platform
   - H) Triggering — when and how to show in-app messages
   - I) Analytics — measuring in-app message effectiveness
   - J) Something else — describe it

2. **What type of app?**
   - A) Mobile app (iOS/Android)
   - B) Web app (SaaS)
   - C) Both mobile and web
   - D) E-commerce app
   - E) Gaming

3. **What tool are you using (or considering)?**
   - A) Braze
   - B) Iterable
   - C) Intercom
   - D) Pendo
   - E) Appcues
   - F) Customer.io
   - G) MoEngage
   - H) Whatfix
   - I) Chameleon
   - J) Not decided yet
   - K) Other

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Strategy and approach

### In-app message types

| Type | Best for | Display | Duration |
|---|---|---|---|
| **Modal** | Important announcements, permission requests, promotions | Center of screen, blocks interaction | Until dismissed |
| **Slideup / Banner** | Lightweight notifications, success confirmations | Top or bottom of screen, non-blocking | Auto-dismiss or swipe |
| **Fullscreen** | Major announcements, onboarding steps, surveys | Covers entire screen | Until dismissed |
| **Tooltip / Hotspot** | Feature discovery, contextual help | Points to a specific UI element | Until dismissed or after delay |
| **Carousel / Tour** | Multi-step onboarding, feature walkthroughs | Sequence of screens/modals | Until completed |
| **Content Card** | Persistent promotions, notification inbox, recommendations | In a dedicated feed/section of the app | Until expired or dismissed |
| **Custom HTML** | Complex interactive experiences, mini-games, embedded forms | Custom placement | Custom |
| **Survey** | NPS, CSAT, feature requests, feedback | Modal or fullscreen | Until submitted |

### When to use in-app vs other channels

| Scenario | Best channel | Why |
|---|---|---|
| User is active in the app right now | **In-app message** | Immediate, contextual, no permission needed |
| User hasn't opened the app in days | **Push notification** | Brings them back to the app |
| Long-form content or tutorial | **Email** | More space, user can read at their pace |
| Time-sensitive alert for inactive user | **Push + SMS** | Reaches them outside the app |
| Persistent content they can revisit | **Content Card** | Stays in their feed until they engage |
| Feature announcement for web SaaS | **In-app + email** | In-app for active users, email for others |

### Trigger design principles

1. **Trigger on context, not time** — show a message when the user is on the relevant screen/feature, not just "after 5 seconds"
2. **Event-based triggers**: Session start, specific screen visited, custom event (completed purchase, used feature X times), reached milestone
3. **Behavioral conditions**: Only show to users who haven't used feature X yet, or who are on free plan, or who signed up > 7 days ago
4. **Display limits**: Show once per session, once per lifetime, once per week — avoid message fatigue
5. **Priority and queue**: If multiple messages could trigger at once, define priority order (onboarding > promotion > survey)

### Onboarding best practices

1. **Progressive disclosure** — don't show everything on first session. Introduce features as users reach them.
2. **Contextual tooltips > walkthroughs** — pointing at the actual UI element they should use is more effective than a 5-screen tutorial they'll skip
3. **Action-triggered, not time-triggered** — show the next onboarding step when they complete the previous one
4. **Allow skip** — always provide a dismiss/skip option. Forced walkthroughs create resentment.
5. **Measure completion** — track how many users finish each onboarding step, not just "saw the message"
6. **Empty states** — when a feature has no data yet, use the empty state as an in-app message explaining what to do

## Step 3 — Platform-specific guidance

For platform-specific in-app messaging guidance (Braze, Iterable, Intercom, Pendo, Appcues, Customer.io, MoEngage, Whatfix, Chameleon), **read `references/platforms.md`**. Answer using only the section relevant to the user's tool.

## Step 4 — Actionable guidance

### Implementation checklist

1. **Define use cases** — list every scenario where in-app messaging adds value (onboarding, feature adoption, promotions, surveys)
2. **Choose message types** — match each use case to the right format (modal, tooltip, content card, etc.)
3. **Design triggers** — for each message, define the event/condition that shows it
4. **Set display limits** — how often can each message show (once ever, once per session, etc.)
5. **Build templates** — create reusable designs in your tool's editor
6. **Define priority** — if multiple messages could trigger, which one wins?
7. **Test** — preview on all target devices (iOS, Android, web, dark mode)
8. **Launch to small segment** — roll out to 10% of users first, check metrics
9. **Measure** — impression rate, click rate, dismiss rate, goal completion
10. **Iterate** — A/B test messaging, timing, and design

### Key metrics

| Metric | Benchmark | What it tells you |
|---|---|---|
| Impression rate | 30-60% of eligible users | Trigger design effectiveness |
| Click/action rate | 15-30% | Message relevance and CTA quality |
| Dismiss rate | 20-40% | Message value vs annoyance |
| Onboarding completion | 40-70% | Flow design and motivation |
| Feature adoption (post-message) | 10-25% increase | Impact of feature announcements |
| Survey response rate | 15-30% | Survey design and timing |

## Gotchas

1. **Don't show modals on app launch** — a fullscreen modal the moment the app opens feels aggressive. Wait for a meaningful trigger (screen visit, completed action, X sessions). Exception: critical announcements (terms of service change, mandatory update).
2. **Don't stack multiple messages** — if a user triggers 3 in-app messages at once, show only the highest-priority one. Most tools have queue/priority settings — use them. Multiple simultaneous popups = instant dismissal.
3. **Content Cards are not push notifications** — Content Cards sit passively in a feed. Users must open the feed to see them. Don't use Content Cards for time-sensitive messages that need to interrupt the user. Use push or in-app modals for urgency.
4. **In-app messages require the app to be open** — unlike push or email, in-app messages only reach users who are already in your app. For dormant users, in-app messaging is useless. Use push to bring them back, then in-app to engage them.
5. **Web SaaS tooltips break on UI changes** — if you position a tooltip on a specific button and then redesign the page, the tooltip points to nothing. Use tools with visual editors (Pendo, Appcues) that automatically detect UI changes, or tie tooltips to CSS selectors that are stable.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-chameleon` — Chameleon platform help (product tours, tooltips, microsurveys, launchers, HelpBar, A/B testing, AI). Install: `npx skills add sales-skills/sales --skills sales-chameleon`
- `/sales-whatfix` — Whatfix platform help (enterprise DAP, Flows, Smart Tips, Product Analytics, Mirror sandbox). Install: `npx skills add sales-skills/sales --skills sales-whatfix`
- `/sales-pendo` — Pendo platform help (analytics, guides, session replay, NPS, API). Install: `npx skills add sales-skills/sales --skills sales-pendo`
- `/sales-iterable` — Iterable platform help (in-app messages, Mobile Inbox, Embedded Messages, Studio journeys)
- `/sales-braze` — Braze platform help (in-app messages, Content Cards, Canvas integration)
- `/sales-customerio` — Customer.io platform help (in-app in Journeys)
- `/sales-push-notification` — Push notification strategy (complementary channel)
- `/sales-email-marketing` — Email marketing strategy (coordinate with in-app)
- `/sales-live-chat` — Live chat and chatbot (Intercom combines both)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Designing a SaaS onboarding flow
**User says**: "We're a B2B SaaS app and our activation rate is low. How should we use in-app messages to guide new users?"
**Skill does**: Designs a progressive onboarding flow: Step 1 (first login) → welcome modal with 3-step overview. Step 2 (reaches dashboard) → tooltip pointing at key feature. Step 3 (first feature use) → success slideup + next step tooltip. Checklist widget showing 5 setup tasks with completion tracking. Includes trigger design, display rules, and completion metrics.
**Result**: Onboarding flow with contextual tooltips, checklist, and activation metric tracking

### Example 2: Promoting an upgrade within a mobile app
**User says**: "How do I show an upgrade prompt to free users who've hit their usage limit?"
**Skill does**: Designs a non-intrusive upgrade flow: trigger when user hits limit → show modal explaining what they can unlock on paid plan → action buttons ("Upgrade" deep links to payment screen, "Maybe later" dismisses). Display rule: show once per week max. A/B test: feature-focused vs pricing-focused copy. Fallback: after 3 dismissals, switch to subtle banner instead of modal.
**Result**: Upgrade prompt campaign with A/B test, frequency capping, and escalation strategy

### Example 3: Building a Content Card notification center
**User says**: "We want to add a notification inbox in our app using Braze Content Cards"
**Skill does**: Walks through creating Content Card campaigns in Braze: card types (classic for text updates, captioned image for promotions, banner for announcements), expiration settings, pinning important cards, targeting segments, and building a custom Content Card feed UI in the app. Includes API integration for marking cards as read/dismissed.
**Result**: Branded notification center powered by Braze Content Cards with custom UI

## Troubleshooting

### In-app messages not showing
**Symptom**: Message configured but users don't see it
**Cause**: Trigger event not firing, display limits reached, segment targeting too narrow, or SDK not initialized
**Solution**: 1) Verify the trigger event is actually occurring (check event logs in your tool). 2) Check display limits — message may have already been shown to this user. 3) Verify the user matches the target segment. 4) Ensure SDK is properly initialized and user is identified. 5) Test in a debug/preview mode on your own device.

### Low click rates on in-app messages
**Symptom**: Users see the message but don't tap the CTA
**Cause**: Weak CTA, message not relevant to the context, or CTA button not prominent enough
**Solution**: 1) Make the CTA specific and action-oriented ("Start free trial" not "Learn more"). 2) Ensure the message appears at a contextually relevant moment. 3) Make the button visually prominent (contrast, size). 4) A/B test copy, button text, and message design. 5) Consider a slideup instead of a modal if the content is lightweight.

### Users dismissing messages immediately
**Symptom**: High dismiss rate (>50%) on in-app messages
**Cause**: Message appearing at the wrong time, too intrusive, or shown too frequently
**Solution**: 1) Review trigger timing — is the message interrupting a task? 2) Consider less intrusive formats (slideup vs fullscreen). 3) Reduce display frequency. 4) Make the message valuable — does it help the user or just promote something? 5) Add a "remind me later" option instead of just dismiss.
