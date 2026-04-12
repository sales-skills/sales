---
name: sales-upfluence
description: "Upfluence platform help — influencer and affiliate marketing for ecommerce with creator discovery (12M+ profiles, Live Capture for finding influential customers), Jaice AI, campaign management (IRM, outreach, briefs), commission-free affiliate tracking (promo codes, product seeding, ROAS), creator payments (Upfluence Pay), and Shopify/WooCommerce/BigCommerce integration. Use when Upfluence search isn't finding relevant creators, Live Capture isn't identifying influential customers, campaign tracking isn't attributing sales, promo codes aren't working, Shopify product seeding isn't syncing, creator payments are stuck, Jaice AI seems off, or unsure which Upfluence plan fits. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing) or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in Upfluence]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, affiliate-marketing, ecommerce, creator-discovery, platform]
github: "https://github.com/upfluence"
---
# Upfluence Platform Help

Helps the user with Upfluence platform questions — from creator discovery and Live Capture through campaign management, affiliate tracking, ecommerce integrations, creator payments, and Jaice AI automation.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding influencers — search, filters, Live Capture, ambassador signup
   - B) Managing creators — IRM dashboard, outreach, briefs, contracts
   - C) Campaign tracking — promo codes, affiliate links, content detection, ROAS
   - D) Product seeding — Shopify/WooCommerce gifting, one-click ordering
   - E) Affiliate program — commission-free affiliate setup, discount codes
   - F) Creator payments — Upfluence Pay, Stripe, international payouts
   - G) Ecommerce integration — Shopify, WooCommerce, BigCommerce, Klaviyo
   - H) Jaice AI — AI-powered automation, suggestions, workflow optimization
   - I) Pricing / plan selection
   - J) Something else — describe it

2. **Which social platforms are you targeting?**
   - A) Instagram
   - B) TikTok
   - C) YouTube
   - D) Twitch / Pinterest / Twitter
   - E) Multiple — specify which

3. **What's your ecommerce setup?**
   - A) Shopify
   - B) WooCommerce
   - C) BigCommerce / Adobe Commerce
   - D) No ecommerce store
   - E) Other — describe it

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Influencer strategy across tools → "This is a cross-platform influencer strategy question — run: `/sales-influencer-marketing {user's original question}`"
- Affiliate program design (not Upfluence-specific) → "This is a program design question — run: `/sales-affiliate-program {user's original question}`"
- Ad campaign strategy → "Run: `/sales-retargeting {user's original question}`"
- Email marketing to subscribers → "Run: `/sales-email-marketing {user's original question}`"
- UGC gallery / shoppable content → "Run: `/sales-tagshop {user's original question}`"
- Tool integration architecture → "Run: `/sales-integration {user's original question}`"

Otherwise, answer directly from platform knowledge below.

## Step 3 — Upfluence platform reference

**Read `references/platform-guide.md`** for detailed module documentation — Discovery, IRM, Campaign Management, Affiliate Tools, Payments, Integrations, Pricing, and Jaice AI.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Discovery workflow** — how to use search filters, Live Capture, and ambassador pages to build creator lists
2. **Vetting framework** — audience analysis, engagement checks, brand-fit assessment within Upfluence
3. **Campaign setup** — configuring tracking, assigning promo codes, setting up content monitoring
4. **Affiliate setup** — commission-free affiliate program, discount code generation, sales attribution
5. **Gifting workflow** — Shopify/WooCommerce product seeding with one-click ordering
6. **Payment workflow** — setting up Upfluence Pay, managing international payouts

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **12-month minimum contract.** All plans require an annual commitment starting at ~$478/mo. There is no monthly option. Evaluate thoroughly during the demo/trial period before signing — cancellation mid-contract is difficult based on user reports.
- **API is Growth/Enterprise only.** REST API access with OAuth2 is not available on the base plan. If you need programmatic access, confirm API availability during sales conversations.
- **Live Capture requires ecommerce integration.** The feature that identifies influential website visitors only works when connected to Shopify, WooCommerce, or another supported ecommerce platform. Without the integration, you're limited to search-only discovery.
- **Non-opted-in creators may not respond.** Upfluence indexes public profiles — some creators aren't expecting brand outreach. Expect lower response rates than opt-in marketplaces. Personalize every message.
- **Advanced keyword weighting is Instagram-only.** Weighted keyword search for more precise creator discovery results is limited to Instagram. TikTok and YouTube searches use basic keyword matching.
- **No public endpoint documentation.** Unlike some competitors, Upfluence doesn't publish detailed API docs publicly. Request API documentation during the sales process if integration is a requirement.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, discovery, vetting, campaign tracking, ROI measurement
- `/sales-affiliate-program` — Affiliate and referral program design (strategy, not Upfluence-specific)
- `/sales-hypeauditor` — HypeAuditor platform help — fraud detection, analytics, 223.6M+ profiles
- `/sales-modash` — Modash platform help — Shopify-focused influencer marketing, 350M+ profiles
- `/sales-aspire` — Aspire platform help — word-of-mouth commerce, product seeding, UGC
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS
- `/sales-integration` — Tool integration architecture (webhooks, Zapier, API pipelines)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Find micro-influencers among existing customers
**User says**: "I have a Shopify store — how do I find which of my customers are influencers?"
**Skill does**:
1. Walks through connecting Shopify to Upfluence for the Live Capture integration
2. Explains how Live Capture scans existing customer lists and website visitors to identify influential profiles
3. Shows how to set up a whitelabel ambassador signup page on the brand website
4. Recommends filtering discovered customers by engagement rate, follower count, and audience demographics
5. Sets up a product seeding campaign for the top matches
**Result**: Customer base mined for influential buyers, ambassador pipeline activated

### Example 2: Set up commission-free affiliate tracking
**User says**: "I want to give each influencer a unique discount code and track which ones drive sales — without paying affiliate commissions on top of Upfluence"
**Skill does**:
1. Creates unique promo codes per creator in Upfluence's affiliate tool
2. Configures sales attribution to track orders using each code via the ecommerce integration
3. Sets up the campaign dashboard to show revenue, conversions, and ROAS per creator
4. Explains Upfluence's commission-free model vs traditional affiliate networks
**Result**: Full attribution pipeline with no per-sale commission fees beyond the Upfluence subscription

### Example 3: Evaluate Upfluence pricing for a DTC brand
**User says**: "We're spending $3K/mo on influencer marketing — is Upfluence worth it at $478/mo?"
**Skill does**:
1. Reviews Upfluence pricing structure — base subscription, 12-month commitment, included features
2. Compares with alternatives at similar price points (Modash, Aspire, Influencer Hero)
3. Identifies which Upfluence features justify the cost for their specific use case (Live Capture, affiliate tracking, ecommerce integrations)
4. Flags the annual commitment risk and suggests maximizing the demo/trial period
**Result**: Clear cost-benefit analysis with recommendation based on their specific influencer program needs

## Troubleshooting

### Live Capture not finding influential customers
**Symptom**: Connected Shopify but Live Capture shows no or very few influential customers
**Cause**: Small customer base, or customers don't have significant public social profiles. Live Capture scans email addresses against social profiles — if customers used non-primary emails, matches will be low.
**Solution**: Ensure the ecommerce integration is fully synced (check all customer records, not just recent). Supplement with the ambassador signup page on your website to capture creators who opt in. Consider importing your email newsletter list through Klaviyo integration for a larger match pool.

### Promo codes not attributing sales
**Symptom**: Creators shared promo codes but sales dashboard shows zero attributed revenue
**Cause**: Promo code configuration mismatch between Upfluence and the ecommerce platform, or customers entering codes incorrectly at checkout.
**Solution**: Verify promo codes are created in both Upfluence AND the ecommerce platform (Shopify, WooCommerce). Check code format — avoid ambiguous characters (0/O, 1/l). Test the full flow yourself before distributing to creators. Ensure the ecommerce integration is syncing order data back to Upfluence.

### Creator outreach getting low response rates
**Symptom**: Sending bulk outreach to 100+ creators but getting under 10% response
**Cause**: Generic messaging, wrong creator-brand fit, or reaching non-opted-in creators who don't expect brand DMs. Upfluence indexes public profiles — many creators haven't opted in to hear from brands.
**Solution**: Personalize every message (reference specific content the creator posted). Use Upfluence's audience analysis to verify creator-brand alignment before outreach. Try smaller, more targeted batches over mass blasts. Consider using the ambassador signup page to attract opt-in creators who are already interested.
