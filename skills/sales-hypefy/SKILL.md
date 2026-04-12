---
name: sales-hypefy
description: "Hypefy platform help — AI-native influencer marketing with zero-subscription, pay-per-campaign pricing. Covers AI campaign setup (brief generation from product description, geography, and budget), influencer discovery (3K+ vetted internal database, 12M+ external on Instagram and TikTok), automated outreach and hiring (proposals, terms, coordination), content review and approval before publishing, influencer payments (multi-currency, milestone-based, compliance), performance dashboard (reach, engagement, ROI), and built-in calculators (Budget, ROI, Engagement, CPM, CTR). Use when Hypefy campaign setup isn't clear, unsure if Hypefy is the right platform for your budget, pricing model feels confusing, creator payments aren't going through, content approval workflow is stuck, or campaign metrics don't look right. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing), ad campaign strategy (use /sales-retargeting), email marketing to subscribers (use /sales-email-marketing), or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in Hypefy]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, campaign-automation, creator-discovery, platform]
---
# Hypefy Platform Help

Helps the user with Hypefy platform questions — from AI-powered campaign setup and influencer discovery through outreach, content review, payments, and performance tracking.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up a campaign — brief, targeting, budget
   - B) Finding influencers — discovery, vetting, recommendations
   - C) Outreach and hiring — contacting creators, proposals, terms
   - D) Content review — approving creator content before publishing
   - E) Payments — paying creators, invoicing, compliance
   - F) Performance tracking — metrics, reporting, ROI
   - G) Pricing and plans — understanding Hypefy's fee model
   - H) Comparing Hypefy to other platforms
   - I) Something else — describe it

2. **What social platforms are you targeting?**
   - A) Instagram
   - B) TikTok
   - C) Both
   - D) Not sure yet

3. **What's your campaign budget range?**
   - A) Small (under $1K)
   - B) Medium ($1K-10K)
   - C) Large ($10K+)
   - D) Not sure yet

4. **What's your current setup?**
   - A) Starting from scratch — no influencer program yet
   - B) Manual process (spreadsheets, DMs)
   - C) Using another platform — looking to switch or compare
   - D) Already on Hypefy — need help with a specific feature

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Influencer strategy across tools → `/sales-influencer-marketing`
- Modash-specific questions → `/sales-modash`
- influData-specific questions → `/sales-infludata`
- Creator.co-specific questions → `/sales-creatorco`
- Ad campaign strategy → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`
- Affiliate program design (not Hypefy-specific) → `/sales-affiliate-program`

Otherwise, answer directly from platform knowledge below.

## Step 3 — Hypefy platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Campaign setup** — walk through the 3-input brief generation, review, and launch flow
2. **Creator selection** — how to evaluate Hypefy's recommendations and choose the right mix
3. **Budget planning** — use the calculators to estimate costs and expected ROI
4. **Content approval** — best practices for the review workflow
5. **Payment setup** — configuring milestone-based payments and international processing
6. **Performance analysis** — reading the dashboard and optimizing for next campaign

## Gotchas

*Best-effort from research — review these, especially items about pricing and feature availability that may change.*

- **No public API.** Unlike Modash or influData, Hypefy doesn't offer a public API for custom integrations. All workflows happen through the platform UI. If you need programmatic access, contact their team.
- **Instagram and TikTok only.** Discovery is limited to Instagram and TikTok. If you need YouTube, Twitch, or other platforms, consider Modash (YouTube) or influData (Twitch, Snapchat, Facebook) alongside Hypefy.
- **Percentage-based pricing can get expensive at scale.** The 20-30% fee on campaign spend is great for testing with small budgets, but a brand spending $50K+/mo may pay more than a flat-subscription platform like Modash ($499/mo). Calculate your breakeven point.
- **Internal database is relatively small.** 3K+ vetted creators vs. Modash's 350M+ or influData's 20M+. The external 12M+ database fills the gap, but the vetting depth may vary for external creators.
- **No native ecommerce integrations.** Unlike Modash (deep Shopify integration with gifting + affiliate tracking), Hypefy doesn't advertise native Shopify/WooCommerce connectors. Product gifting may require manual coordination.
- **Performance data scope unclear.** The dashboard tracks reach, engagement, and impact — but sales attribution (promo codes, affiliate links, direct revenue tracking) isn't explicitly documented. Clarify with Hypefy what attribution methods are available.
- **Content review adds time.** The approval-before-publishing workflow is great for quality control but adds latency to campaign execution. Plan extra time between creator content submission and go-live dates.
- **"90% less management time" claim is for the full workflow.** Individual steps (especially content review and payment setup for international creators) may still require manual attention.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms (Modash, influData, Creator.co, Hypefy). Platform comparison, discovery strategy, vetting, ROI tracking, outreach
- `/sales-modash` — Modash platform help — discovery (350M+), Shopify gifting, affiliate tracking, payments, API
- `/sales-infludata` — influData platform help — AI creator search, audience analysis, social listening
- `/sales-creatorco` — Creator.co platform help — London AI agent, UGC rights, affiliate tracking
- `/sales-affiliate-program` — Affiliate and referral program design (strategy, not platform-specific)
- `/sales-retargeting` — Retargeting campaign audiences from influencer content
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Launch a first influencer campaign on Hypefy
**User says**: "I want to try influencer marketing for my skincare brand — how do I set up a campaign on Hypefy?"
**Skill does**:
1. Walks through the 3-input setup: product description ("organic skincare for women 25-40"), target geography (US), budget ($5K)
2. Explains how AI generates the campaign brief — strategy, audience targeting, content direction
3. Guides through reviewing and refining the brief
4. Shows how to evaluate creator recommendations and select the right mix of micro-influencers
5. Sets up content review workflow so nothing publishes without approval
6. Configures performance tracking to measure reach, engagement, and ROI
**Result**: Campaign launched with AI-generated brief, vetted creators selected, and tracking in place

### Example 2: Compare Hypefy pricing to Modash
**User says**: "Is Hypefy cheaper than Modash for running 3-4 influencer campaigns per quarter?"
**Skill does**:
1. Calculates Hypefy cost: if spending $10K/quarter on influencer fees, platform fee is ~$2K-3K/quarter
2. Calculates Modash cost: $199/mo Essentials = $597/quarter (but doesn't include payment processing or automated outreach)
3. Notes the tradeoff: Hypefy is cheaper for sporadic campaigns, Modash is cheaper for always-on programs
4. Highlights feature differences: Hypefy has no Shopify integration but includes automated outreach; Modash has deep Shopify but manual outreach
5. Recommends based on their specific situation
**Result**: Clear cost comparison with feature tradeoffs

### Example 3: Set up international creator payments
**User says**: "I'm working with influencers in 5 countries — how does Hypefy handle payments?"
**Skill does**:
1. Explains multi-currency payment support and compliance features
2. Sets up milestone-based payment triggers (e.g., pay after content approval)
3. Walks through tax documentation and invoicing for international creators
4. Notes that creators retain 100% of agreed earnings — platform fee is separate
5. Flags potential gotchas: currency conversion costs, processing times, local regulations
**Result**: International payment workflow configured with compliance documentation

## Troubleshooting

### AI brief doesn't match my brand voice
**Symptom**: Generated campaign brief feels generic or off-brand
**Cause**: The 3-input system (product, geography, budget) may not capture nuanced brand positioning
**Solution**: Use the review step to refine heavily. Add specific brand voice notes, content style preferences, and example posts you like. The more specific your product description, the better the AI output. If results are still off, request a free strategy session with Hypefy's team.

### Not finding enough relevant creators
**Symptom**: Platform recommendations don't match your niche or audience
**Cause**: The 3K+ internal database may not have depth in every niche. External database matching depends on campaign brief clarity.
**Solution**: Make your campaign brief more specific — include niche keywords, competitor brand names, and detailed audience demographics. If Hypefy's discovery isn't surfacing enough options, consider supplementing with Modash (350M+ profiles) or influData (20M+ with deeper analytics) for discovery, then coordinating campaigns through Hypefy.

### Payment processing delayed for international creators
**Symptom**: Creators in certain countries report delayed or failed payments
**Cause**: Cross-border payments involve currency conversion, local banking infrastructure, and compliance checks that can add processing time
**Solution**: Set realistic payment timelines with creators upfront — international transfers may take 5-7 business days. Verify creator bank details before campaign launch. For creators in markets with complex banking, ask Hypefy support about alternative payment methods available in that country.
