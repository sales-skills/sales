---
name: sales-retargeting
description: "Retargeting and remarketing strategy — website visitor retargeting, cart abandonment recovery, dynamic product ads, cross-channel retargeting, audience segmentation, frequency capping, attribution, pixel setup. Use when planning a retargeting strategy, recovering abandoned carts with ads, building retargeting audiences, choosing a retargeting platform, or measuring retargeting ROI. Do NOT use for AdRoll-specific config (use /sales-adroll), email marketing (use /sales-email-marketing), B2B account-based advertising (use /sales-b2b-advertising), or general paid ads strategy (use /paid-ads)."
argument-hint: "[describe your retargeting question or goal]"
license: MIT
version: 1.0.0
tags: [sales, retargeting, remarketing, advertising, ecommerce]
---
# Retargeting & Remarketing Strategy

Help the user plan and execute retargeting campaigns — website visitor retargeting, cart abandonment recovery, dynamic product ads, cross-channel remarketing, and audience segmentation. This skill is tool-agnostic but includes platform-specific guidance.

## Step 1 — Gather context

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
   - G) None — evaluating options
   - H) Other — describe it

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

### Retargeting funnel

Structure retargeting by intent level:

| Audience segment | Intent | Ad strategy | Budget priority |
|---|---|---|---|
| **Cart abandoners** | Highest | Product-specific ads + urgency/discount | 40-50% of retargeting budget |
| **Product/service page viewers** | High | Show viewed product/service + social proof | 25-30% |
| **Content/blog visitors** | Medium | Lead magnet or top-of-funnel offer | 10-15% |
| **Homepage-only visitors** | Low | Brand awareness + value prop | 5-10% |
| **Past purchasers** (upsell) | Varies | Complementary products, new releases | 10-15% |

### Key metrics

| Metric | What it measures | Good benchmark |
|---|---|---|
| ROAS (Return on Ad Spend) | Revenue per dollar spent | 4-10x for retargeting (higher than prospecting) |
| Conversion rate | % of retargeted visitors who convert | 2-5% (vs 0.5-1% for cold traffic) |
| Frequency | Avg impressions per user | 3-7/week (above 10 = fatigue) |
| View-through conversions | Conversions after ad view (no click) | Track but weight less than click-through |
| Cost per acquisition (CPA) | Cost to acquire a customer via retargeting | 50-80% lower than prospecting CPA |

### Audience segmentation best practices

1. **Segment by recency** — visitors from the last 7 days convert at 3-5x the rate of 30-day visitors. Bid higher on recent visitors.
2. **Segment by behavior** — cart abandoners vs. product viewers vs. homepage bouncers need different messages and budgets.
3. **Segment by value** — if you have purchase history, retarget high-AOV customers differently from low-AOV.
4. **Always exclude converters** — exclude people who already purchased (last 7-30 days) to avoid wasting budget and annoying customers.
5. **Use burn pixels** — place a conversion pixel on the thank-you page to automatically remove converters from retargeting audiences.

### Frequency capping

- **Display ads**: 3-5 impressions/day, 15-25/week
- **Social ads**: 2-3 impressions/day (social feels more intrusive)
- **Cart abandonment**: Can go higher (5-7/day for first 48 hours) — urgency justifies it
- **Diminishing returns**: After 10+ impressions with no engagement, move the user to a lower-frequency nurture audience or stop targeting them

### Creative strategy

- **Dynamic product ads**: Auto-populate with viewed/carted items. Include price and a CTA. Most effective for ecommerce.
- **Social proof ads**: Customer reviews, star ratings, "X people bought this today." Reduces purchase anxiety.
- **Urgency ads**: "Still in your cart" + countdown timer + limited-time discount. Best for cart abandoners within 24-48 hours.
- **Brand reinforcement**: For low-intent visitors, reinforce your value proposition rather than pushing a hard sell.
- **Rotate creative every 2-3 weeks** — creative fatigue is the #1 killer of retargeting ROAS. Have 3-5 variants running at all times.

## Step 3 — Platform-specific guidance

### In AdRoll
- **Cross-channel**: Display, social (Facebook/Instagram), native, CTV, DOOH, email retargeting — all from one platform. AdRoll's AI optimizes budget across channels.
- **Dynamic retargeting**: Auto-generates product ads from your Shopify/BigCommerce/WooCommerce feed. Best-in-class for ecommerce dynamic retargeting.
- **Lookalike audiences**: Build lookalikes from your customer/converter lists for prospecting alongside retargeting.
- **Ecommerce integration**: One-click Shopify, BigCommerce, WooCommerce. Auto-syncs product catalog, installs pixel, tracks revenue.
- **RollWorks (B2B)**: Account-based retargeting for B2B. Targets specific companies via IP matching. Deep HubSpot integration.
- **Best for**: Ecommerce brands wanting multi-channel retargeting managed in one platform. Strong Shopify ecosystem.
- **Pricing**: Pay-as-you-go ($5/day min), Marketing & Ads Plus ($36/mo for CTV), Advanced (annual for DOOH).

### In Google Ads
- **Remarketing lists**: Build from Google Analytics audiences or Google Ads pixel. Segment by page visits, session duration, events.
- **Dynamic remarketing**: Product feeds via Google Merchant Center. Auto-generates responsive ads with viewed products.
- **Search remarketing (RLSA)**: Bid higher on search ads when the searcher is a past visitor. Powerful for capturing intent.
- **YouTube remarketing**: Serve video ads to past website visitors on YouTube.
- **Customer Match**: Upload email lists for targeting. Minimum 1,000 matched users.
- **Best for**: Teams already running Google Ads who want to add remarketing without a separate platform. RLSA is uniquely powerful.
- **Limitation**: Display network quality varies. Less control over placements than dedicated retargeting platforms.

### In Meta Ads (Facebook/Instagram)
- **Custom Audiences**: Build from website pixel, customer lists, video viewers, page/profile engagers, app activity.
- **Dynamic Product Ads (DPA)**: Auto-show viewed/carted products in feed, stories, reels. Requires product catalog upload.
- **Advantage+ campaigns**: Meta's AI handles audience, placement, and creative optimization. Good starting point for retargeting.
- **Retention targeting**: Retarget existing customers with upsell/cross-sell via customer list or purchase events.
- **Best for**: B2C and D2C brands. Facebook/Instagram have the highest match rates for consumer audiences.
- **Limitation**: iOS 14.5+ tracking changes reduced pixel accuracy. Server-side Conversions API (CAPI) is now essential for reliable tracking.

### In Criteo
- **Commerce-focused**: Built specifically for ecommerce retargeting. One of the original retargeting platforms.
- **Criteo AI Engine**: Optimizes bids, creative, and audience in real-time based on purchase probability.
- **Dynamic Creative Optimization+**: Goes beyond showing viewed products — predicts which products the user is most likely to buy and shows those.
- **Massive ad network**: Access to 80%+ of internet users via direct publisher relationships.
- **Best for**: Large ecommerce retailers with $10K+/mo ad budgets. Criteo's algorithms improve with scale.
- **Limitation**: Minimum spend requirements. Less transparent reporting than self-serve platforms. Harder to control creative.

### In LinkedIn Ads
- **Website retargeting**: LinkedIn Insight Tag tracks visitors. Build audiences from page visits, lead gen form engagers, video viewers.
- **Matched Audiences**: Upload company or contact lists for targeting.
- **Account targeting + retargeting**: Combine account lists with website visitors for focused ABM retargeting.
- **Best for**: B2B companies retargeting website visitors on a platform where decision-makers browse professionally.
- **Limitation**: Higher CPM than display networks ($8-15 CPM vs $2-5). Smaller scale. Minimum audience of 300 matched members.

### In Klaviyo / Omnisend (Email retargeting)
- **Browse abandonment flows**: Trigger emails when known contacts view products but don't purchase. Requires email identification (cookie match or logged-in state).
- **Cart abandonment flows**: Multi-step email sequence triggered by cart abandonment. Typically 3 emails over 24-72 hours with escalating incentives.
- **Winback flows**: Target lapsed purchasers who haven't bought in X days.
- **Best for**: Ecommerce brands who have opted-in email addresses. Email retargeting is free (no ad spend) and highly effective — 5-10x ROAS vs display retargeting.
- **Limitation**: Only reaches known contacts (people who provided email). Not a substitute for ad-based retargeting of anonymous visitors.

## Step 4 — Actionable guidance

### Quick-start: First retargeting campaign

1. **Install tracking** — pixel on your website + server-side tracking if available
2. **Wait for data** — let 1-2 weeks of visitor data accumulate (aim for 1,000+ unique visitors in your retargeting pool)
3. **Segment audiences** — create at least 3 segments: cart abandoners, product viewers, all visitors
4. **Create ads** — 3-5 creative variants per segment. Dynamic product ads for cart/product viewers, brand ads for general visitors.
5. **Set budget** — allocate 40-50% to cart abandoners, 30% to product viewers, 20% to general visitors
6. **Launch and monitor** — check daily for first week. Watch ROAS, frequency, and conversion rate by segment.
7. **Optimize** — after 7-14 days, cut underperforming segments, increase budget on high-ROAS segments, refresh creative.

### Cart abandonment recovery playbook

| Channel | Timing | Message | Expected recovery rate |
|---|---|---|---|
| Email #1 | 1 hour after abandon | "You left something behind" + cart contents | 5-10% |
| Email #2 | 24 hours | Social proof + urgency | 3-5% |
| Display retargeting | 2-48 hours | Dynamic product ads (viewed/carted items) | 1-2% |
| Social retargeting | 2-48 hours | Carousel of carted products | 1-3% |
| Email #3 | 72 hours | Discount offer (last resort) | 2-4% |
| Exit from retargeting | 14 days | Stop retargeting to avoid fatigue | — |

**Total expected recovery**: 12-24% of abandoned carts (combined channels)

### Budget allocation by business type

| Business type | Primary channels | Monthly budget (starting) |
|---|---|---|
| Ecommerce (<$1M rev) | Email retargeting + Meta DPA + AdRoll | $500-2,000/mo (ads) + email (free) |
| Ecommerce ($1-10M rev) | Meta DPA + Google remarketing + AdRoll + email | $2,000-10,000/mo |
| B2B SaaS | LinkedIn retargeting + Google RLSA + display | $3,000-10,000/mo |
| Local business | Google RLSA + Meta retargeting | $500-2,000/mo |

## Gotchas

1. **Retargeting without fresh creative = ad fatigue** — the #1 mistake. Rotate creative every 2-3 weeks. If frequency is high and CTR is declining, your audience has tuned out your ads.

2. **Don't retarget everyone the same way** — a cart abandoner with $500 in their cart needs a different message than someone who bounced from your homepage in 3 seconds. Segment by behavior and value.

3. **iOS tracking limitations** — Apple's ATT framework (iOS 14.5+) significantly reduced pixel-based tracking accuracy for Safari/iOS users. Use server-side tracking (Meta CAPI, Google Enhanced Conversions, AdRoll S2S) to fill the gap.

4. **View-through attribution inflates ROAS** — platforms count conversions that happen after someone *saw* your ad, even if they didn't click. View-through is real but weaker than click-through. Compare click-through-only ROAS for a conservative measure.

5. **Retargeting cannibalizes organic conversions** — some retargeted users would have converted anyway. Run incrementality tests (holdout groups) to measure true lift. Typical true lift is 40-60% of reported retargeting conversions.

6. **Cookie deprecation** — third-party cookies are being phased out. Shift toward first-party data (email lists, logged-in users, server-side tracking) and contextual targeting. Platforms with strong first-party identity graphs (Meta, Google) will maintain better targeting.

## Related skills

- `/sales-adroll` — AdRoll platform help (retargeting pixel, campaigns, audiences, RollWorks ABM, NextRoll API)
- `/sales-b2b-advertising` — Account-based B2B advertising (ABM ads, not consumer retargeting)
- `/sales-email-marketing` — Email marketing strategy (email retargeting flows are covered here for strategy, platform skills for setup)
- `/sales-checkout` — Checkout optimization (reducing abandonment at the source)
- `/sales-funnel` — Funnel strategy (retargeting supports mid/bottom-funnel conversion)
- `/sales-audience-growth` — Growing your email/subscriber list (retargeting as a list-growth tactic)
- `/sales-klaviyo` — Klaviyo platform help (email/SMS retargeting flows for ecommerce)
- `/sales-omnisend` — Omnisend platform help (email/SMS retargeting for ecommerce)
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
