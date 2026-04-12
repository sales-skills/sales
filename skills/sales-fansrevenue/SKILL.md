---
name: sales-fansrevenue
description: "FansRevenue platform help — creator monetization through affiliate brand promotion, creator-to-creator promotion, MyEroLink link-in-bio, Creator Academy, and CrakRevenue network. Use when setting up FansRevenue brand partnerships, commission earnings aren't showing up, custom landing pages aren't converting, MyEroLink bio links need optimization, Creator Academy isn't loading, or trying to understand which offers pay highest commissions. Do NOT use for general affiliate program design strategy (use /sales-affiliate-program), influencer marketing strategy from a brand's perspective (use /sales-influencer-marketing), or CPA network selection (use /sales-performcb)."
argument-hint: "[describe what you need help with in FansRevenue]"
license: MIT
version: 1.0.0
tags: [sales, creator-monetization, affiliate, platform]
---
# FansRevenue Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your role with FansRevenue?**
   - A) Content creator — looking to monetize my fanbase
   - B) Cam model — want to promote brands alongside my shows
   - C) Affiliate marketer — exploring adult CPA offers
   - D) Evaluating FansRevenue — deciding whether to sign up
   - E) Already using it — need help with a specific feature
   - F) Other

2. **What area do you need help with?**
   - A) Brand partnerships — choosing and promoting offers (Jerkmate, Streamate, OnlyFans, etc.)
   - B) Creator-to-creator promotion — earning by promoting other creators
   - C) MyEroLink — setting up or optimizing my link-in-bio
   - D) Custom landing pages — building pages for my promotions
   - E) Creator Academy — learning resources and training
   - F) Commissions and payouts — tracking earnings, payment questions
   - G) Referral program — recruiting other creators
   - H) Getting started — account setup, profile claiming
   - I) Something else

3. **What's your specific question or goal?**

**If the user's request already provides context, skip directly to the relevant section.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Affiliate program design / commission strategy → "This is an affiliate program design question — run: `/sales-affiliate-program {user's original question}`"
- Influencer marketing from a brand's perspective → "This is an influencer marketing question — run: `/sales-influencer-marketing {user's original question}`"
- CPA network selection or Perform[cb] → "This is a CPA network question — run: `/sales-performcb {user's original question}`"
- Email deliverability for promotional emails → "This is a deliverability question — run: `/sales-deliverability {user's original question}`"

Otherwise, answer directly from the platform reference below.

## Step 3 — FansRevenue platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, brand partnerships, commission structures, MyEroLink, Creator Academy, workflows, and CrakRevenue network details.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Offer selection** — which brand partnerships match their audience and content style
2. **Promotion strategy** — how to integrate affiliate links into their existing content without alienating fans
3. **Optimization** — improving click-through and conversion on landing pages and bio links
4. **Scaling** — growing from single-offer promotion to a diversified affiliate portfolio
5. **Referral strategy** — recruiting other creators for the 5% lifetime referral bonus

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about commission rates and offer availability that may change.*

- **Commission rates vary wildly by offer.** Some brand partnerships pay 15% while others pay 40% lifetime. Always check the specific offer terms in your FansRevenue dashboard before promoting — don't assume all offers share the same rate.
- **Adult content restrictions apply to promotion channels.** Most mainstream social platforms (Instagram, TikTok, YouTube) restrict adult content promotion. MyEroLink and direct-to-fan channels (OnlyFans bio, cam profile) are safer promotion surfaces.
- **Cookie windows and attribution matter.** If a fan clicks your link but doesn't convert immediately, attribution depends on the brand's cookie window. CrakRevenue-powered offers typically use 30-day cookies, but confirm per offer.
- **Payouts require minimum thresholds.** CrakRevenue (parent network) has a $100 minimum payout. Earnings below threshold roll over to the next payment period.
- **BrandItScan protection is opt-in.** Content piracy monitoring through BrandItScan isn't automatic — you need to set it up through your FansRevenue dashboard.
- **DivaTraffic (traffic generation) is a separate tool.** After FansRevenue acquired DivaTraffic, traffic services may be available but are distinct from standard affiliate promotions.

## Related skills

- `/sales-affiliate-program` — Affiliate and referral program design (strategy, commission structures, recruitment)
- `/sales-influencer-marketing` — Influencer marketing strategy from a brand's perspective (discovery, vetting, campaigns)
- `/sales-performcb` — Perform[cb] CPA network — campaigns, fraud detection, Partner API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Choose the best brand partnership
**User says**: "I'm a cam model on Chaturbate — which FansRevenue offers should I promote?"
**Skill does**:
1. Asks about audience size, content style, and current promotion channels
2. Reviews available brand partnerships that align with cam model audiences
3. Recommends starting with familiar platforms (Chaturbate referral if available, Jerkmate for high commissions)
4. Suggests a promotion strategy using cam profile links and MyEroLink
**Result**: Prioritized list of 3-5 offers with commission rates and promotion tips

### Example 2: Set up MyEroLink for conversions
**User says**: "My MyEroLink page gets clicks but nobody converts on my affiliate links"
**Skill does**:
1. Reviews current link structure and number of links displayed
2. Identifies common conversion killers (too many links, no hierarchy, weak CTAs)
3. Recommends prioritizing 2-3 top-converting offers above the fold
4. Suggests A/B testing different link descriptions and ordering
**Result**: Optimized MyEroLink layout with clear hierarchy and stronger CTAs

### Example 3: Maximize the creator referral program
**User says**: "How does the FansRevenue referral program work and how can I recruit other creators?"
**Skill does**:
1. Explains the 5% lifetime commission structure on referred creators' earnings
2. Suggests recruitment channels (DMs to creator friends, cam model communities, Twitter/X)
3. Warns about spam and recommends authentic, relationship-based outreach
4. Calculates potential earnings based on number of active referrals
**Result**: Clear referral strategy with earning projections

## Troubleshooting

### Commissions not showing in dashboard
**Symptom**: Promoted an offer, fans clicked, but no commissions appear
**Cause**: Attribution may be lost (wrong link used, fan's browser blocking cookies, conversion not yet processed)
**Solution**: Verify you're using the correct tracking link from your FansRevenue dashboard (not a direct URL). Check if the offer has a processing delay (some brands take 24-72 hours to report conversions). If commissions still don't appear after 72 hours, contact support@fansrevenue.com with the specific offer and date range.

### MyEroLink page not loading or displaying incorrectly
**Symptom**: Bio link page shows blank or broken layout
**Cause**: Browser caching, incomplete profile setup, or platform outage
**Solution**: Clear browser cache and try incognito. Verify all required profile fields are filled in the Creator Hub. Check if the issue persists across multiple devices. If so, contact support@fansrevenue.com.

### Referral bonus not credited for recruited creator
**Symptom**: Recruited a creator who signed up but no 5% referral commission appears
**Cause**: Creator may not have used your referral link, or hasn't generated earnings yet
**Solution**: The 5% referral commission only kicks in when the referred creator earns commissions themselves. Verify they signed up through your unique referral link. If they did and have active earnings, contact support with both account details.
