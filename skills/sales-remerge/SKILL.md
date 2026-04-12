---
name: sales-remerge
description: "Remerge platform help — demand-side platform (DSP) for programmatic in-app retargeting and user acquisition. Covers campaign setup, audience segmentation, dynamic product ads, incrementality measurement, deep linking, Reporting API, Event Tracking API, MMP integrations (AppsFlyer, Adjust, Branch), Braze webhooks. Use when asking 'how do I do X in Remerge', configuring Remerge campaigns, setting up audience segments, measuring incrementality, integrating with MMPs, pulling reporting data via API, or comparing mobile DSPs. Do NOT use for web retargeting strategy (use /sales-retargeting), B2B account-based advertising (use /sales-b2b-advertising), AdRoll/display retargeting (use /sales-adroll), or general paid ads (use /paid-ads)."
argument-hint: "[describe what you need help with in Remerge]"
license: MIT
version: 1.0.0
tags: [sales, retargeting, mobile, dsp, programmatic, platform]
github: "https://github.com/remerge"
---
# Remerge Platform Help

Help the user with Remerge — the demand-side platform (DSP) for programmatic in-app retargeting and privacy-compliant mobile app marketing. Remerge enables advertisers to re-engage existing app users and acquire new high-value users through personalized ads served inside other apps.

## Step 1 — Gather context

Ask the user:

1. **What do you need help with in Remerge?**
   - A) Setting up a new retargeting campaign
   - B) Audience segmentation (defining who to retarget)
   - C) Dynamic product ads / creative setup
   - D) Incrementality measurement / uplift testing
   - E) MMP integration (AppsFlyer, Adjust, Branch)
   - F) Reporting API / pulling campaign data
   - G) Event Tracking API / sending events to Remerge
   - H) Deep linking configuration
   - I) Braze or other CRM webhook integration
   - J) Comparing Remerge with other mobile DSPs
   - K) Privacy compliance (GDPR, ATT, Privacy Sandbox)
   - L) Something else — describe it

2. **What's your app vertical?**
   - A) Gaming
   - B) E-commerce
   - C) Delivery / on-demand
   - D) Finance / fintech
   - E) Other — describe it

3. **Are you already running Remerge campaigns or just getting started?**
   - A) Already running — need to optimize or troubleshoot
   - B) Getting started — need setup guidance
   - C) Evaluating Remerge vs other DSPs

## Step 2 — Route or answer directly

If the user's question maps to another skill, route them:
- Web retargeting (not in-app) → `/sales-retargeting`
- B2B account-based advertising → `/sales-b2b-advertising`
- AdRoll display/social retargeting → `/sales-adroll`
- Email retargeting → `/sales-email-marketing`
- General paid ads → `/paid-ads`

Otherwise, answer directly using the reference below.

## Step 3 — Remerge platform reference

### Platform overview

Remerge is a demand-side platform (DSP) custom-built for **in-app retargeting** — it serves ads to users inside other mobile apps (not on the mobile web). Founded 2014 in Berlin, 180+ employees, offices in Berlin, New York, Tokyo, Singapore, Seoul.

**What makes Remerge different from web retargeting (AdRoll, Criteo, Google Ads):**
- Targets users **inside apps**, not on websites or the mobile web
- Uses **Mobile Measurement Partner (MMP)** data (AppsFlyer, Adjust, Branch) instead of website pixels
- Segments based on **in-app events** (purchases, level completions, cart additions) not page views
- Deep links land users at specific in-app screens, not web pages
- Designed for mobile app verticals: gaming, e-commerce, delivery, finance

### Core capabilities

**Audience segmentation**
- Real-time segmentation based on in-app activity via MMP event streams
- Segment types: first-time buyers, active users, churned/lapsed users, high-value users, custom event-based segments
- Segments update dynamically as new events stream in
- Recommended: share last 3 months of historical user data for initial segment building

**Campaign types**
- **Re-engagement**: Bring back lapsed users who haven't opened the app in X days
- **Retention**: Keep active users engaged with personalized offers
- **User acquisition**: Find new high-value users via lookalike modeling
- **Cross-promotion**: Promote other apps in your portfolio to existing users

**Dynamic product ads (DPAs)**
- Auto-generated ads using product catalog data
- Personalized with products the user viewed, carted, or purchased
- Deep links to specific product pages inside the app
- Requires product feed integration

**Incrementality measurement**
- Randomized control trials: test group (sees ads) vs control group (does not)
- Measures true campaign lift beyond organic behavior
- Remerge's primary success metric — not just ROAS or CPA
- Results typically show 40-60% of attributed conversions are truly incremental

**Creative services**
- In-house creative team available
- Static images required in 5 aspect ratio sizes + native ad background
- Dynamic creative optimization for DPAs
- Video ad formats supported

**Bidding and optimization**
- Efficient bidding algorithms optimized for in-app conversion events
- 40 billion daily bid requests with IDs available (iOS)
- Access to thousands of publisher apps through SSP partnerships
- CPA, CPC, CPE, CPS, and ROAS pricing models available

### Privacy and compliance

**iOS (ATT framework)**
- Only 20-35% of iOS users allow IDFA tracking post-ATT
- Remerge processes available IDFAs for consenting users
- Reduced iOS retargeting scale is industry-wide, not Remerge-specific
- Exploring Privacy Sandbox on-device bidding (partnership with Verve Group)

**Android (Privacy Sandbox)**
- Google phasing in Topics API and Attribution Reporting API
- Remerge adapting bidding and attribution to work within new constraints
- On-device bidding reduces reliance on device-level identifiers

**GDPR**
- Remerge operates as a data processor
- Highest data protection level claimed
- Opt-out functionality available for end users

### Integrations

**Mobile Measurement Partners (MMPs)**
- **AppsFlyer**: Premier Partner. Enable Remerge as an ad network in AppsFlyer → configure postbacks for install and in-app events → set up tracking links with campaign naming conventions
- **Adjust**: Certified partner. Configure callback URLs for events → enable Remerge module
- **Branch**: Universal Links and App Links support for deep linking

**CRM / engagement platforms**
- **Braze**: Webhook integration. POST to `https://remerge.events/event` with user ID, device identifiers (IDFA/AAID), app IDs, and event data. HTTP 204 = success. Content-Type: application/json.
- Other platforms can integrate via the Event Tracking API

**Setup requirements for any campaign:**
1. MMP integration activated (event stream flowing to Remerge)
2. SDK integrated in your app (for performance data)
3. Deep links configured with trackable parameters
4. Historical user data shared (last 3 months recommended)
5. Creative assets provided (static in 5 aspect ratios minimum)

### API reference

**Reporting API**
- Pull JSON-based reports for active campaigns
- Daily granularity
- Clients use cURL, internal API tools, or BI connectors
- Authentication: API key (provided by Remerge account team)
- Base URL: documented at help.remerge.io (access restricted to clients)

**Event Tracking API**
- Endpoint: `https://remerge.events/event`
- Method: GET or POST
- Send webhook events with user identifiers and event data
- Used for CRM integrations (Braze, etc.)
- Parameters: app_id (Android/iOS), event name, device identifiers (IDFA/AAID), partner key

*Note: Remerge's help center (help.remerge.io) is restricted to clients. Full API documentation requires an active account. The details above are from public integration docs and partner documentation.*

### Service model

Remerge offers both:
- **Managed service**: Dedicated account team handles campaign optimization, creative, segmentation — primary offering
- **Self-service**: Available but less emphasized

**Pricing**: Not publicly available. Custom quotes based on campaign volume. Supports CPA, CPC, CPE, CPS, and Revshare/ROAS models across mobile display and video inventory.

### Competitor comparison

| Feature | Remerge | Adikteev | Liftoff | Criteo |
|---|---|---|---|---|
| **Focus** | In-app retargeting (DSP) | App re-engagement + churn prediction | UA + retargeting (broader) | Ecommerce retargeting (web + app) |
| **Incrementality** | Core feature — randomized control trials | Available | Available | Available |
| **Creative** | In-house team + DPAs | In-house + interactive/video | Self-serve + managed | Dynamic Creative Optimization+ |
| **Privacy** | Privacy Sandbox partner (Verve Group) | Privacy-first focus | ID-less solutions | Large first-party publisher network |
| **Verticals** | Gaming, e-commerce, delivery | Gaming, e-commerce, finance | Gaming, e-commerce, apps | Primarily ecommerce |
| **Scale** | 40B daily bid requests | Smaller but focused | Very large (Vungle + Liftoff merger) | Massive publisher network |
| **Pricing** | Custom, managed-service-first | Custom | Self-serve + managed | High minimums |

## Step 4 — Actionable guidance

Based on the user's specific question, provide step-by-step guidance. Adapt the detail level to whether they're getting started or optimizing.

### Quick start: First Remerge campaign

1. **Activate MMP integration** — enable Remerge as a partner in AppsFlyer/Adjust, configure postbacks for all relevant in-app events
2. **Share historical data** — export 3 months of user event data to Remerge for initial segment building
3. **Define segments** — start with 3 core segments: lapsed users (no activity 7-30 days), cart abandoners, high-value users (top 20% by revenue)
4. **Provide creative** — minimum: static images in 5 aspect ratios. Recommended: dynamic product feed for DPAs.
5. **Configure deep links** — ensure deep links route to specific in-app screens (product page, cart, home)
6. **Launch with incrementality test** — run test vs control group from day 1 to measure true lift
7. **Optimize** — after 2-4 weeks of data, narrow to highest-performing segments and creative

### Budget allocation for app retargeting

| App maturity | Retargeting budget (% of total UA+retargeting) | Focus |
|---|---|---|
| New app (<6 months) | 10-20% | Mostly UA, limited retargeting pool |
| Growing app (6-18 months) | 20-30% | Build retargeting as user base grows |
| Mature app (18+ months) | 30-50%+ | Retargeting often more efficient than new UA |

*Industry guidance: start with 20-30% of growth budget on retargeting, adjust based on incrementality results.*

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **iOS retargeting scale is limited post-ATT** — only 20-35% of iOS users allow IDFA tracking. This is not a Remerge limitation — it's industry-wide. Budget more toward Android retargeting if iOS scale is insufficient.

2. **Incrementality results will be lower than attributed ROAS** — Remerge's incrementality measurement typically shows 40-60% of attributed conversions are truly incremental. This is honest measurement, not underperformance. Compare Remerge's incremental results against other channels' honest (non-last-click) numbers.

3. **MMP postback delays affect real-time segmentation** — if your MMP has delayed event forwarding, Remerge's real-time segments will lag. Ensure postback frequency is as close to real-time as possible in your MMP settings.

4. **Deep link misconfiguration is the #1 setup issue** — if deep links fall back to the app home screen instead of the intended in-app page, conversion rates drop significantly. Test deep links on both iOS and Android before launching.

5. **Historical data sharing is critical for cold start** — without 3 months of event history, Remerge's initial segments will be thin and optimization algorithms will take longer to converge. Don't skip this step.

6. **Managed service means less direct control** — Remerge emphasizes managed service. If you need full self-serve control (bid adjustments, real-time creative changes), clarify this during onboarding.

7. **Help center is client-restricted** — full API docs and setup guides at help.remerge.io require an active account. Public documentation is limited to partner integration pages (Braze, AppsFlyer, Branch).

## Related skills

- `/sales-retargeting` — Retargeting strategy across all platforms (web + app) — audience segmentation, creative, frequency capping, attribution
- `/sales-adroll` — AdRoll platform help — web retargeting, display/social ads, ecommerce integration, RollWorks ABM
- `/sales-b2b-advertising` — B2B account-based advertising — ABM ads, LinkedIn Ads, display for B2B
- `/sales-push-notification` — Push notification strategy — alternative re-engagement channel for mobile apps
- `/sales-in-app-messaging` — In-app messaging strategy — another re-engagement channel alongside retargeting
- `/sales-integration` — Connect Remerge to other tools via webhooks, MMPs, and API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up first Remerge campaign for a gaming app
**User says**: "I have a mobile game with 500K MAU and 74% day-1 churn. How do I set up Remerge to bring back lapsed players?"
**Skill does**: Walks through MMP integration (AppsFlyer postbacks for level completions, purchases, session starts), segment definition (lapsed 7-day, 14-day, 30-day), creative strategy (show the game level they reached), deep link to their last played level, incrementality test setup.
**Result**: User has a complete lapsed-player retargeting campaign plan with measurement framework.

### Example 2: Measuring true campaign impact
**User says**: "Our Remerge ROAS looks great but our CFO wants to know if these users would have come back anyway. How do I prove incrementality?"
**Skill does**: Explains Remerge's randomized control trial methodology — test group sees ads, control group doesn't. Compares conversion rates between groups to calculate true lift. Recommends running incrementality tests for 2-4 weeks with a 10-15% holdout group. Contextualizes: 40-60% incremental lift is typical, meaning the rest would have converted organically.
**Result**: User can set up and interpret an incrementality test to prove ROI to finance.

### Example 3: Comparing Remerge vs other mobile DSPs
**User says**: "Should I use Remerge, Adikteev, or Liftoff for our e-commerce app retargeting?"
**Skill does**: Compares platforms on focus (Remerge: retargeting-first DSP, Adikteev: churn prediction + re-engagement, Liftoff: broader UA + retargeting), creative capabilities, incrementality measurement, privacy approach, and pricing models. Recommends based on user's priorities (pure retargeting → Remerge, UA + retargeting → Liftoff, churn prediction → Adikteev).
**Result**: User has a decision framework with clear trade-offs.

## Troubleshooting

### Campaign not delivering impressions
**Symptom**: Campaign is live but getting zero or very low impressions
**Cause**: MMP integration not forwarding events correctly, segments too narrow, or IDFA/AAID availability too low
**Solution**: Verify MMP postbacks are firing (check MMP dashboard for Remerge partner events). Broaden segment criteria (extend lookback window, include more event types). Check iOS vs Android split — if most users are iOS and IDFA opt-in is low, impressions will be limited. Contact Remerge account team to verify SSP connections.

### Incremental lift is low or negative
**Symptom**: Incrementality test shows <10% lift or control group converts at the same rate as test
**Cause**: Targeting users who would convert organically (too broad), or control group too small for statistical significance
**Solution**: Narrow targeting to lower-intent segments (users further from natural conversion). Ensure control group is at least 10-15% of the audience. Run test for a full 2-4 weeks before judging. If lift remains <10%, reallocate budget from that segment to higher-opportunity groups.

### Deep links falling back to home screen
**Symptom**: Users tap ads but land on the app's home screen instead of the intended product/content page
**Cause**: Deep link configuration mismatch between Remerge creative and app routing, or deferred deep linking not set up for users who need to reinstall
**Solution**: Test deep links on both iOS (Universal Links) and Android (App Links) with a real device. Verify the deep link scheme is registered in the app. Ensure Branch/AppsFlyer deep linking SDK is handling Remerge click URLs. Check for edge case: user has the app but the deep link route was added in a newer version they haven't updated to.
