---
name: sales-remerge
description: "Remerge platform help — demand-side platform (DSP) for programmatic in-app retargeting and user acquisition. Covers campaign setup, audience segmentation, dynamic product ads, incrementality measurement, deep linking, Reporting API, Event Tracking API, MMP integrations (AppsFlyer, Adjust, Branch), Braze webhooks. Use when lapsed app users aren't coming back, Remerge campaigns aren't hitting ROAS targets, you can't prove incrementality on retargeting spend, MMP data isn't syncing with Remerge, or you're unsure whether Remerge is the right mobile DSP for your app. Do NOT use for web retargeting strategy (use /sales-retargeting), B2B account-based advertising (use /sales-b2b-advertising), AdRoll/display retargeting (use /sales-adroll), or general paid ads (use /paid-ads)."
argument-hint: "[describe what you need help with in Remerge]"
license: MIT
version: 1.0.0
tags: [sales, retargeting, mobile, dsp, programmatic, platform]
github: "https://github.com/remerge"
---
# Remerge Platform Help

Help the user with Remerge — the demand-side platform (DSP) for programmatic in-app retargeting and privacy-compliant mobile app marketing. Remerge enables advertisers to re-engage existing app users and acquire new high-value users through personalized ads served inside other apps.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **iOS retargeting scale is limited post-ATT** — only 20-35% of iOS users allow IDFA tracking. This is not a Remerge limitation — it's industry-wide. Budget more toward Android retargeting if iOS scale is insufficient.

2. **Incrementality results will be lower than attributed ROAS** — Remerge's incrementality measurement typically shows 40-60% of attributed conversions are truly incremental. This is honest measurement, not underperformance. Compare Remerge's incremental results against other channels' honest (non-last-click) numbers.

3. **MMP postback delays affect real-time segmentation** — if your MMP has delayed event forwarding, Remerge's real-time segments will lag. Ensure postback frequency is as close to real-time as possible in your MMP settings.

4. **Deep link misconfiguration is the #1 setup issue** — if deep links fall back to the app home screen instead of the intended in-app page, conversion rates drop significantly. Test deep links on both iOS and Android before launching.

5. **Historical data sharing is critical for cold start** — without 3 months of event history, Remerge's initial segments will be thin and optimization algorithms will take longer to converge. Don't skip this step.

6. **Managed service means less direct control** — Remerge emphasizes managed service. If you need full self-serve control (bid adjustments, real-time creative changes), clarify this during onboarding.

7. **Help center is client-restricted** — full API docs and setup guides at help.remerge.io require an active account. Public documentation is limited to partner integration pages (Braze, AppsFlyer, Branch).

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-retargeting` — Retargeting strategy across all platforms (web + app) — audience segmentation, creative, frequency capping, attribution
- `/sales-adroll` — AdRoll platform help — web retargeting, display/social ads, ecommerce integration, RollWorks ABM
- `/sales-b2b-advertising` — B2B account-based advertising — ABM ads, LinkedIn Ads, display for B2B
- `/sales-push-notification` — Push notification strategy — alternative re-engagement channel for mobile apps
- `/sales-in-app-messaging` — In-app messaging strategy — another re-engagement channel alongside retargeting
- `/sales-integration` — Connect Remerge to other tools via webhooks, MMPs, and API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
