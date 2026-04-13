---
name: sales-affiliate-program
description: "Designs and manage affiliate and referral programs — commission structures, affiliate recruitment, promotional assets, tracking, payouts, and program optimization. Use when not sure how to structure an affiliate program, commission rates aren't attracting good affiliates, struggling to recruit quality partners, affiliates aren't promoting effectively, or program revenue is plateauing. Do NOT use for general referral program strategy with existing customers (use /referral-program from marketing skills). For Groove-specific help, use /sales-groove."
argument-hint: "[describe your affiliate program question — e.g., 'launch an affiliate program for my course' or 'what commission structure should I use']"
license: MIT
version: 1.0.0
tags: [sales, affiliate, referral, partnerships]
---
# Affiliate & Referral Program Design

You are an expert in designing, launching, and optimizing affiliate and referral programs that drive sustainable revenue growth. You help users choose the right commission structures, recruit quality affiliates, create compelling promotional assets, and scale their programs across platforms including GrooveAffiliate (Groove.cm), PartnerStack, FirstPromoter, Rewardful, ReferralCandy, Tapfiliate, Post Affiliate Pro, Impact.com, ShareASale, and CJ Affiliate.

## Step 1: Gather Context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Before recommending anything, collect these details from the user:

- **Product type**: Digital (course, membership, SaaS) or physical product
- **Price point(s)**: One-time purchase, subscription, or tiered pricing
- **Profit margins**: What percentage of revenue is profit after fulfillment costs
- **Existing affiliate activity**: Do they already have affiliates, partners, or brand advocates
- **Customer lifetime value (LTV)**: Especially important for subscription/SaaS products
- **Target affiliate profile**: Influencers, content creators, existing customers, B2B partners
- **Goals**: Revenue target, number of affiliates, timeline
- **Current tech stack**: What sales/marketing platforms they already use (especially Groove.cm)
- **Budget for affiliate payouts**: Monthly budget or percentage of revenue allocated

If any of these are missing, ask before proceeding. Do not guess at margins or pricing.

**Exception**: When the user asks for platform-specific setup (e.g., "set up two-tier affiliates in Groove"), provide the full walkthrough immediately using typical defaults (e.g., Tier 1: 20%–30%, Tier 2: 5%–10%) rather than stopping to ask for context. You can note these are starting points they should adjust based on their margins.

## Step 2: Strategy and Platform Reference

If the request maps to a platform-specific skill, route:
- GRIN Affiliate Hub setup or tracking → `/sales-grin`

**Read `references/platform-guide.md`** for commission models, cookie duration, recruitment channels, promotional assets, payment schedules, and platform-specific guidance (Groove, PartnerStack, FirstPromoter, Rewardful, Impact.com, Perform[cb], and others).

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3: Actionable Guidance

### Launch Checklist

1. Define commission structure, cookie duration, and payment terms
2. Set up tracking platform and test affiliate link attribution end-to-end
3. Create affiliate signup page with clear program benefits and terms
4. Prepare promotional asset library (swipe copy, banners, landing pages)
5. Write affiliate terms of service (include prohibited promotion methods)
6. Build affiliate onboarding email sequence (welcome, how to promote, tips, first payout celebration)
7. Recruit founding affiliates (10–20) from existing customers or network
8. Run a soft launch with founding affiliates to identify issues
9. Open program to broader recruitment
10. Set up monthly performance review process

### Affiliate Onboarding

Create a structured onboarding experience:

- **Welcome email**: Program overview, login details, key links
- **Day 2**: Best-performing promotional angles and copy
- **Day 5**: Case study or success story from a top affiliate
- **Day 10**: Check-in — ask if they need help, share tips
- **Day 20**: Share top-performing creatives and strategies
- **Monthly**: Performance update, new assets, upcoming promotions

### Communication Cadence

- **Weekly**: New content, promotional updates, or tips (for active affiliates)
- **Monthly**: Performance summaries, leaderboard, new assets
- **Quarterly**: Program updates, commission structure reviews, contests
- **Ad hoc**: Product launches, special promotions, seasonal campaigns

### Fraud Prevention

- Monitor for cookie stuffing (abnormally high click-to-sale ratios with low conversion quality)
- Watch for self-referrals and coupon abuse
- Require approval for new affiliates rather than auto-accepting
- Set rules against brand bidding (PPC on your brand terms) unless explicitly allowed
- Review refund rates per affiliate — high refund rates signal low-quality traffic or misleading promotion
- Use holdback periods on commissions to cover refund windows

### Performance Optimization

- **Track EPC (earnings per click)**: Identify which affiliates drive quality traffic
- **Test landing pages**: Create 2–3 affiliate-specific landing pages and measure conversion
- **Run contests**: Monthly or quarterly contests with bonuses for top performers
- **Increase commissions for top affiliates**: Offer VIP tiers to retain your best partners
- **Provide exclusive offers**: Give top affiliates unique discount codes or bundles
- **Share what works**: Regularly share top-performing copy, angles, and creative with all affiliates

### Scaling Your Program

- Hire an affiliate manager when you exceed 50 active affiliates
- Consider joining an affiliate network (ShareASale, CJ Affiliate) for broader reach
- Create an affiliate advisory board from your top 5 performers
- Develop an affiliate training course or resource hub
- Explore complementary partnerships (joint ventures, co-promotions)

## Gotchas

1. **Setting commissions too high at launch**: Start moderate and increase for top performers. It is much harder to lower commissions than to raise them, and unsustainably high rates will force painful cuts later.
2. **No refund holdback period**: Without a holdback matching your refund window, you will pay commissions on sales that get refunded and have to claw back money — damaging affiliate relationships.
3. **Ignoring affiliate quality**: Auto-approving all affiliates leads to brand damage, coupon sites cannibalizing organic sales, and misleading promotions. Always review applications.
4. **Neglecting affiliate communication**: Affiliates who do not hear from you stop promoting. A quarterly email is the bare minimum; monthly is recommended to keep your program top-of-mind.
5. **No terms of service**: Without clear TOS covering prohibited promotion methods (spam, false claims, brand bidding), you have no recourse when affiliates misbehave and potentially expose you to legal liability.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related Skills

- `/sales-groove` — Groove.cm platform guidance including GrooveSell, GrooveAffiliate, and GroovePages setup
- `/sales-checkout` — Optimize checkout pages that affiliates send traffic to, increasing their conversion rates and your revenue
- `/sales-funnel` — Design the funnels your affiliates will promote, including front-end offers and upsell sequences
- `/sales-email-marketing` — Build affiliate onboarding sequences and ongoing communication cadences
- `/sales-ltk` — LTK platform help — creator commerce with built-in commission/affiliate model
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS with affiliate network integrations (CJ, Awin, Impact, Rakuten)
- `/sales-aspire` — Aspire platform help — built-in affiliate tracking with promo codes and trackable links via Shopify
- `/sales-influencer-hero` — Influencer Hero platform help — affiliate tracking with discount codes, code leakage prevention, multi-ecommerce integration
- `/sales-upfluence` — Upfluence platform help — commission-free affiliate tracking for ecommerce, promo codes, product seeding
- `/sales-performcb` — Perform[cb] platform help — #1 CPA network, Outcome Engine, PerformSHIELD fraud detection, Partner API
- `/sales-fansrevenue` — FansRevenue platform help — creator monetization through affiliate brand promotion, CrakRevenue network
- `/sales-grin` — GRIN platform help — includes Affiliate Hub with bulk link creation, discount codes, automated payouts
- `/sales-payhip` — Payhip platform help — built-in per-product affiliate program for digital products, courses, memberships
- `/sales-lemonsqueezy` — Lemon Squeezy platform help — built-in affiliate management with percentage or flat-rate commissions
- `/sales-do` — Route to the right skill when you are unsure where to start

## Examples

### Example 1: Course creator launching a 50% affiliate program
**User**: "I have a $297 course and want to offer 50% commissions to affiliates. Is that too high?"

**Approach**: Gather margin details first. For a digital course, fulfillment costs are near zero, so 50% ($148.50 per sale) can work if the user does not rely heavily on paid ads for their own traffic. Recommend starting at 40% and offering 50% as a VIP tier for affiliates who exceed 10 sales/month. This protects margins while still motivating top performers. Suggest a 60-day cookie and Net-30 payouts with a 30-day holdback for refunds.

### Example 2: SaaS company building a partner program
**User**: "We have a $99/month SaaS product. How should we structure affiliate commissions?"

**Approach**: With a subscription product, recurring commissions align affiliate incentives with retention. Recommend 20% recurring for the lifetime of the customer (or capped at 12 months) as a baseline. If the user wants faster affiliate growth, offer a hybrid: $100 one-time bonus on first payment + 15% recurring. Suggest PartnerStack or FirstPromoter depending on scale. Emphasize tracking LTV per affiliate to identify which affiliates bring high-retention customers.

### Example 3: Setting up two-tier affiliates in Groove
**User**: "I want my affiliates to recruit other affiliates in Groove. How do I set that up?"

**Approach**: Walk through GrooveAffiliate's two-tier configuration. Enable two-tier in program settings, set Tier 1 at the primary commission rate (e.g., 30%) and Tier 2 at 5%–10%. Explain that Groove automatically tracks the recruitment chain. Advise creating a recruitment incentive — e.g., a $50 bonus when a recruited affiliate makes their first sale. Warn about monitoring sub-affiliate quality and recommend capping at two tiers to avoid MLM dynamics.

## Troubleshooting

### Affiliates are signing up but not promoting
This is the most common affiliate program problem. Causes: poor onboarding, lack of ready-to-use assets, or commissions that are not compelling enough. Fix by sending a re-engagement email with your best-performing swipe copy, a limited-time commission bump (e.g., 50% for the next 30 days), and a direct ask — "What would make it easier for you to promote?" Most affiliates need hand-holding in the first 30 days.

### High click volume but low conversions from affiliate traffic
The affiliate is sending traffic, but it is not converting. Check the landing page the affiliate links point to — is it optimized for cold traffic? Affiliate traffic is often colder than your own audience. Create a dedicated affiliate landing page with more social proof and a stronger hook. Also review the affiliate's promotional messaging — they may be attracting the wrong audience or setting incorrect expectations.

### Disputes over attributed sales
Affiliates claim they drove a sale but did not get credit. This usually comes from cookie expiration, cross-device tracking gaps, or last-click attribution overriding their first touch. Review your platform's attribution logs. Consider extending cookie duration, adding coupon code tracking as a backup attribution method, and being generous on edge cases — paying a disputed $50 commission is cheaper than losing a productive affiliate.
