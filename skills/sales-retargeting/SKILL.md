---
name: sales-retargeting
description: "Retargeting and remarketing strategy — website visitor retargeting, cart abandonment recovery, dynamic product ads, cross-channel retargeting, audience segmentation, frequency capping, attribution, pixel setup, in-app retargeting. Use when website visitors leave without converting, cart abandonment rates are too high, retargeting ads aren't profitable, you're unsure which retargeting platform to use, or past visitors never come back. Do NOT use for AdRoll-specific config (use /sales-adroll), Remerge-specific config (use /sales-remerge), email marketing (use /sales-email-marketing), B2B account-based advertising (use /sales-b2b-advertising), or general paid ads strategy (use /paid-ads)."
argument-hint: "[describe your retargeting question or goal]"
license: MIT
version: 1.0.0
tags: [sales, retargeting, remarketing, advertising, ecommerce]
---
# Retargeting & Remarketing Strategy

Help the user plan and execute retargeting campaigns — website visitor retargeting, cart abandonment recovery, dynamic product ads, cross-channel remarketing, and audience segmentation. This skill is tool-agnostic but includes platform-specific guidance.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your retargeting goal?**
   - A) Recover abandoned carts (ecommerce)
   - B) Re-engage website visitors who didn't convert
   - C) Upsell/cross-sell existing customers
   - D) Bring back lapsed users or churned customers
   - E) Build a full retargeting funnel from scratch
   - F) Not sure — help me figure out what to retarget

2. **What channels do you want to retarget on?**
   - A) Display ads (banner ads across the web)
   - B) Social ads (Facebook/Instagram, TikTok, LinkedIn)
   - C) Google Ads (search remarketing, display network)
   - D) Email retargeting (triggered by website behavior)
   - E) Connected TV (CTV) / video
   - F) Multiple / all channels
   - G) Not sure — recommend channels

3. **What retargeting platform do you have (or are considering)?**
   - A) AdRoll
   - B) Google Ads (remarketing)
   - C) Meta Ads (Facebook/Instagram retargeting)
   - D) Criteo
   - E) LinkedIn Ads (website retargeting)
   - F) Native ESP retargeting (Klaviyo, Omnisend, etc.)
   - G) Remerge, Adwake, or Zoomd (mobile in-app retargeting)
   - H) None — evaluating options
   - I) Other — describe it

4. **What's your business type?**
   - A) Ecommerce / D2C
   - B) B2B SaaS or services
   - C) Local business / services
   - D) Publisher / content
   - E) Other

## Step 2 — Strategy and approach

### How retargeting works

Retargeting serves ads to people who have already interacted with your brand — visited your website, viewed products, added to cart, or engaged with content. It works through:

1. **Pixel-based retargeting**: A JavaScript pixel on your site drops a cookie (or uses first-party data) on each visitor. Ad platforms use this data to serve ads to those visitors elsewhere on the web.
2. **List-based retargeting**: Upload email lists or CRM contacts to ad platforms. The platform matches against their user base and serves ads to matched users.
3. **Server-side tracking**: Send conversion and behavior events from your server to ad platforms directly — more reliable than client-side pixels with ad blockers.

## Step 3 — Retargeting reference

**Read `references/platform-guide.md`** for detailed funnel frameworks, audience segmentation, frequency capping, creative strategy, platform-specific guidance, and budget allocation.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### Quick-start: First retargeting campaign

1. **Install tracking** — pixel on your website + server-side tracking if available
2. **Wait for data** — let 1-2 weeks of visitor data accumulate (aim for 1,000+ unique visitors in your retargeting pool)
3. **Segment audiences** — create at least 3 segments: cart abandoners, product viewers, all visitors
4. **Create ads** — 3-5 creative variants per segment. Dynamic product ads for cart/product viewers, brand ads for general visitors.
5. **Set budget** — allocate 40-50% to cart abandoners, 30% to product viewers, 20% to general visitors
6. **Launch and monitor** — check daily for first week. Watch ROAS, frequency, and conversion rate by segment.
7. **Optimize** — after 7-14 days, cut underperforming segments, increase budget on high-ROAS segments, refresh creative.

## Gotchas

1. **Retargeting without fresh creative = ad fatigue** — the #1 mistake. Rotate creative every 2-3 weeks. If frequency is high and CTR is declining, your audience has tuned out your ads.

2. **Don't retarget everyone the same way** — a cart abandoner with $500 in their cart needs a different message than someone who bounced from your homepage in 3 seconds. Segment by behavior and value.

3. **iOS tracking limitations** — Apple's ATT framework (iOS 14.5+) significantly reduced pixel-based tracking accuracy for Safari/iOS users. Use server-side tracking (Meta CAPI, Google Enhanced Conversions, AdRoll S2S) to fill the gap.

4. **View-through attribution inflates ROAS** — platforms count conversions that happen after someone *saw* your ad, even if they didn't click. View-through is real but weaker than click-through. Compare click-through-only ROAS for a conservative measure.

5. **Retargeting cannibalizes organic conversions** — some retargeted users would have converted anyway. Run incrementality tests (holdout groups) to measure true lift. Typical true lift is 40-60% of reported retargeting conversions.

6. **Cookie deprecation** — third-party cookies are being phased out. Shift toward first-party data (email lists, logged-in users, server-side tracking) and contextual targeting. Platforms with strong first-party identity graphs (Meta, Google) will maintain better targeting.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-retention` — Retention.com platform help (ecommerce identity resolution, abandonment recovery)
- `/sales-customersai` — Customers.ai platform help (ad retargeting audience recovery via X-Ray identity resolution for Meta, Google, TikTok)
- `/sales-adroll` — AdRoll platform help (retargeting pixel, campaigns, audiences, RollWorks ABM, NextRoll API)
- `/sales-b2b-advertising` — Account-based B2B advertising (ABM ads, not consumer retargeting)
- `/sales-email-marketing` — Email marketing strategy (email retargeting flows are covered here for strategy, platform skills for setup)
- `/sales-checkout` — Checkout optimization (reducing abandonment at the source)
- `/sales-funnel` — Funnel strategy (retargeting supports mid/bottom-funnel conversion)
- `/sales-audience-growth` — Growing your email/subscriber list (retargeting as a list-growth tactic)
- `/sales-klaviyo` — Klaviyo platform help (email/SMS retargeting flows for ecommerce)
- `/sales-omnisend` — Omnisend platform help (email/SMS retargeting for ecommerce)
- `/sales-blueconic` — BlueConic CDP — build retargeting audiences from unified profiles, activate segments to ad platforms
- `/sales-reddit-ads` — Reddit Ads platform help (subreddit targeting, website retargeting, engagement audiences)
- `/sales-cloutboost` — Cloutboost platform help — gaming influencer retargeting, Portal discovery, campaign management
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns
- `/sales-remerge` — Remerge platform help — in-app retargeting DSP, audience segmentation, incrementality measurement, MMP integrations
- `/sales-adwake` — Adwake platform help — managed mobile app UA, branding, in-app retargeting (Entravision)
- `/sales-zoomd` — Zoomd platform help — mobile UA across 600+ sources, mobile DSP, CGC, Albert.ai AI optimization
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Ecommerce cart recovery
**User says**: "We're losing 70% of carts. How do I set up retargeting to recover them?"
**Skill does**: Designs a multi-channel cart recovery strategy: email sequence (1hr, 24hr, 72hr), display retargeting with dynamic product ads (AdRoll or Google), social retargeting with carousel ads (Meta). Provides timing, messaging, and budget allocation. Recommends starting with email (free) then layering paid channels.
**Result**: User has a complete cart recovery playbook across email and paid retargeting.

### Example 2: B2B website visitor retargeting
**User says**: "We get 10,000 monthly visitors to our SaaS site but only 2% convert. How do I retarget the rest?"
**Skill does**: Recommends LinkedIn retargeting (professional audience), Google RLSA (capture search intent from past visitors), and display retargeting. Segments by page: pricing page viewers get demo CTA ads, blog readers get lead magnet ads, homepage bouncers get brand awareness. Budgets accordingly.
**Result**: User has a segmented B2B retargeting strategy with channel and budget recommendations.

### Example 3: Choosing a retargeting platform
**User says**: "I'm choosing between AdRoll, Criteo, and just using Google/Meta directly for retargeting. What should I pick?"
**Skill does**: Compares platforms by use case: Google/Meta direct for teams already advertising there (simpler, no extra vendor), AdRoll for cross-channel retargeting in one platform (good for ecommerce, supports Shopify), Criteo for large-scale ecommerce with budget for premium dynamic creative. Recommends based on the user's budget, business type, and existing ad stack.
**Result**: User has a platform recommendation with clear trade-offs.

## Troubleshooting

### Retargeting audiences are too small
**Symptom**: Platform says audience is below minimum threshold (e.g., <100 users)
**Cause**: Low website traffic, pixel not installed on all pages, or audience window too narrow
**Solution**: Extend the lookback window (7 days → 30 days → 90 days). Ensure pixel is on ALL pages. Combine segments (product viewers + cart abandoners). For B2B with low traffic, use list-based retargeting (email uploads) instead of pixel-based.

### High frequency but low conversions
**Symptom**: Users see your ads 10+ times but aren't converting
**Cause**: Creative fatigue, wrong audience segment, or the user isn't going to buy regardless
**Solution**: Cap frequency at 3-5/day. Rotate creative. Move high-frequency non-converters to a "suppress" list after 14 days. Consider that some visitors were never qualified — narrow your retargeting segments to higher-intent behaviors.

### ROAS declining over time
**Symptom**: Retargeting ROAS was strong initially but has dropped
**Cause**: You've converted the easy wins and are now retargeting lower-intent users, or creative has gone stale
**Solution**: Refresh all creative. Narrow audiences to higher-intent segments. Test new channels (add email if only using display, or vice versa). Run an incrementality test to check true lift — you may need to accept a lower but more accurate ROAS figure.
