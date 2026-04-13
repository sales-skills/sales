---
name: sales-g2
description: "G2 platform help — B2B software review marketplace, review collection campaigns, buyer intent data, badges/reports, profile optimization, and API. Use when G2 reviews not coming in fast enough, G2 profile not ranking in your category, G2 buyer intent data not converting to pipeline, unsure if G2 paid plan is worth the cost, setting up G2 review campaigns with gift card incentives, connecting G2 buyer intent to Salesforce or HubSpot, G2 badge not qualifying or displaying, or comparing G2 vs Capterra vs TrustRadius. Do NOT use for ecommerce product review collection (use /sales-customer-reviews) or general intent data interpretation across providers (use /sales-intent)."
argument-hint: "[describe your G2 question — e.g., 'how do I get more G2 reviews' or 'is G2 buyer intent worth the $40K add-on']"
license: MIT
version: 1.0.0
tags: [sales, reviews, buyer-intent, B2B, social-proof, platform]
github: "https://github.com/g2crowd"
---

# G2 Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Getting more G2 reviews (campaigns, incentives, timing)
   - B) Optimizing my G2 profile for visibility
   - C) G2 Buyer Intent data (setup, ROI, integrations)
   - D) G2 badges, reports, and content licensing
   - E) G2 pricing — is the paid plan worth it?
   - F) G2 API integration
   - G) Comparing G2 vs Capterra vs TrustRadius
   - H) G2 Clicks or Paid Promotions (advertising on G2)
   - I) Something else — describe it

2. **What's your current G2 plan?** Free, Starter ($299/mo), Professional, Enterprise, or not sure

3. **What's your product category on G2?** (e.g., CRM, Marketing Automation, Sales Engagement — this affects strategy)

4. **How many G2 reviews do you have today?** None, 1-10, 10-50, 50+

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Ecommerce product review collection (Shopify, DTC) | Run: `/sales-customer-reviews {user's question}` |
| General intent data interpretation across tools | Run: `/sales-intent {user's question}` |
| Connecting G2 to CRM or marketing tools | Run: `/sales-integration {user's question}` |
| Competitive displacement using G2 data | Run: `/sales-compete {user's question}` |
| Email deliverability for review request campaigns | Run: `/sales-deliverability {user's question}` |

If the question is G2-specific, continue to Step 3.

## Step 3 — G2 platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, review campaigns, buyer intent, API quick ref.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Free plan users**: Claim and fully complete your profile, ask happy customers for reviews manually, use G2's self-service review campaigns, earn "Users Love Us" badge at 20+ reviews with 4.0+ avg
- **Starter users**: Run systematic review campaigns with $100 gift card credits, set up branded banners and custom CTAs, aim for Grid Report placement in your category
- **Professional/Enterprise users**: Activate Buyer Intent to identify companies researching your category, connect intent signals to Salesforce/HubSpot for automated follow-up, use Market Intelligence for competitive positioning, leverage G2 Content for sales collateral
- **All plans**: Respond to every negative review, keep reviews fresh (85% of buyers ignore reviews >3 months old), cross-promote G2 badges on your website and email signatures

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Buyer Intent is expensive** — $10K-$87K/yr add-on, delivers company names only (not contacts). You need an enrichment tool (Clay, ZoomInfo, Apollo) to turn intent signals into actionable outreach. 91% of B2B marketers use intent data but only 24% report exceptional ROI.
- **Reviews older than 3 months lose credibility** — 85% of buyers consider them irrelevant. You need a continuous review engine, not a one-time campaign.
- **Free plan gets you 80% of the value** — Grid placement, badges, and search visibility don't require a paid plan. Paid plans add intent data, review management, and profile visitor analytics.
- **Starter plan price doubles in year 2** — $299/mo year 1 becomes $599/mo year 2. Budget accordingly.
- **G2 intent data only covers G2 activity** — it doesn't track research on TrustRadius, Capterra, or the broader web. Layer with Bombora or 6sense for full-funnel intent.
- **Review incentives must be equal** — G2 allows gift cards for all reviewers, but you cannot selectively incentivize positive reviews or gate review requests to satisfied customers only.
- **Review verification is strict** — G2 requires screenshots, company info, and usage proof. Expect 10-20% of submitted reviews to be rejected or flagged.
- **Category ranking depends on review recency and volume** — not just average rating. A product with 50 fresh reviews can outrank one with 200 stale ones.

## Related skills

- `/sales-customer-reviews` — Product review collection strategy across ecommerce platforms (Judge.me, Yotpo, Okendo, etc.). Install: `npx skills add sales-skills/sales --skills sales-customer-reviews`
- `/sales-trustpilot` — Trustpilot platform help (TrustBox widgets, TrustScore, Google Seller Ratings). Install: `npx skills add sales-skills/sales --skills sales-trustpilot`
- `/sales-intent` — Interpret buying signals and prioritize accounts for outreach. Install: `npx skills add sales-skills/sales --skills sales-intent`
- `/sales-6sense` — 6sense platform help (Signalverse intent data, predictive scoring). Install: `npx skills add sales-skills/sales --skills sales-6sense`
- `/sales-enrich` — Enrich G2 intent signals with verified contact info. Install: `npx skills add sales-skills/sales --skills sales-enrich`
- `/sales-compete` — Run competitive displacement using G2 comparison data. Install: `npx skills add sales-skills/sales --skills sales-compete`
- `/sales-launch-directory` — Launch directory strategy (G2 is one of the directories). Install: `npx skills add sales-skills/sales --skills sales-launch-directory`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

**Example 1**: "I just launched my SaaS and have zero G2 reviews. How do I get my first 20?"
→ Walk through: claim your profile, complete every field, identify 30-50 happy customers (NPS 9-10 or recent positive support interactions), send personalized review requests with G2's self-service campaign tool, offer $25 gift cards as incentive, time requests after key milestones (successful onboarding, renewal, support resolution). Target 40-50% response rate from warm asks.

**Example 2**: "We're paying $40K/year for G2 Buyer Intent. How do I actually turn this into pipeline?"
→ Walk through: intent data gives you company names, not contacts. Set up enrichment layer (Clay/Apollo/ZoomInfo) to find contacts at intent-signaling companies. Route high-intent companies into priority sequences within 24-48 hours. Connect G2 intent to Salesforce/HubSpot via native integration or Zapier. Never reference "I saw you on G2" in outreach — use the signal to time your reach-out, not as a talking point.

**Example 3**: "Is G2 worth paying for or should I stay on the free plan?"
→ Evaluate: Free plan gives you Grid placement, badges, review collection, and search visibility. Paid is worth it if: your category is high-traffic on G2, you need buyer intent data AND have an enrichment + outreach stack to act on it, or you want profile visitor analytics. Most early-stage companies should stay free and invest in review volume instead.

## Troubleshooting

**Not getting enough reviews**
- Check if you're only asking at renewal — diversify touchpoints (onboarding, support resolution, feature adoption)
- Use in-product prompts, not just email — catch users while they're actively engaged
- Offer gift card incentives — G2 allows $10-$25 cards for all reviewers
- Personalize review requests — generic "leave us a review" gets <5% response, personalized asks from CSMs get 20-40%
- Time requests to emotional highs — right after a customer says "this is great" or achieves a milestone

**Buyer Intent data not converting to pipeline**
- You're getting company names, not contacts — add an enrichment layer (Clay, Apollo, ZoomInfo) to find the right person
- Act within 24-48 hours — intent signals decay fast, the buyer may have already moved on
- Don't mention G2 in outreach — "I noticed you were researching..." is creepy. Use the signal for timing and angle, not messaging.
- Layer G2 intent with other signals — G2 alone only covers research happening on G2. Combine with Bombora/6sense for broader coverage.

**G2 profile not ranking in your category**
- Reviews must be recent — G2 weights recency heavily. A steady stream of 5-10 reviews/month beats a one-time batch of 50
- Complete every profile field — screenshots, videos, pricing, integrations. Incomplete profiles rank lower.
- Monitor your G2 category — are you listed in the right categories? You can request category changes.
- Check competitor review velocity — if they're collecting 20 reviews/month and you're at 2, you'll be outranked regardless of rating
