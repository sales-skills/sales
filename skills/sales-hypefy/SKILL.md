---
name: sales-hypefy
description: "Hypefy platform help — AI-native influencer marketing with zero-subscription, pay-per-campaign pricing. Covers AI campaign setup (brief generation from product description, geography, and budget), influencer discovery (3K+ vetted internal database, 12M+ external on Instagram and TikTok), automated outreach and hiring (proposals, terms, coordination), content review and approval before publishing, influencer payments (multi-currency, milestone-based, compliance), performance dashboard (reach, engagement, ROI), and built-in calculators (Budget, ROI, Engagement, CPM, CTR). Use when setting up Hypefy campaigns, choosing Hypefy vs other platforms, understanding Hypefy pricing, configuring creator payments, reviewing content approvals, or tracking campaign performance. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing), ad campaign strategy (use /sales-retargeting), email marketing to subscribers (use /sales-email-marketing), or affiliate program design (use /sales-affiliate-program)."
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

### How Hypefy works

Hypefy automates influencer marketing end-to-end. Users provide three inputs:
1. **Product description** — one sentence about what you sell
2. **Target geography** — where your customers are
3. **Campaign budget** — how much you want to spend

The platform's AI then handles the full workflow: generates a campaign brief, matches creators, runs outreach, coordinates content, processes payments, and tracks results.

### AI Campaign Setup

#### Campaign brief generation
- AI generates a tailored brief from your three inputs (product, geography, budget)
- Brief includes strategy, audience focus, content direction, and creator criteria
- Review and customize the brief before it goes live
- Iterative — refine the brief until it matches your vision

#### Campaign workflow
1. **Brief** — describe your product and goals, AI generates the campaign plan
2. **Review** — approve or refine the strategy, audience, and content direction
3. **Selection** — platform recommends creators, you choose who to work with
4. **Outreach** — automated outreach and coordination with selected creators
5. **Content review** — approve all content before it goes live
6. **Tracking** — real-time performance monitoring through the dashboard

### Influencer Discovery

Hypefy sources creators directly from Instagram and TikTok — not limited to an internal database.

#### Internal database
- 3,000+ carefully vetted creators
- Pre-screened for content quality, engagement authenticity, and audience relevance
- Faster matching since they're already profiled

#### External discovery
- 12M+ influencers available in the broader database
- AI-powered matching based on campaign goals, audience alignment, and performance history
- Focuses on micro (10K-100K) and mid-tier (100K-500K) creators
- Spreads budgets across 10-50+ creators instead of 2-3 celebrity partnerships

#### Vetting process
- Audience demographics analysis
- Engagement pattern evaluation
- Content consistency check
- Historical performance review
- Bot detection — identifies irregular follower growth, fake engagement
- No fakes, no hate speech, no inappropriate content (per Hypefy's vetting criteria)

### Outreach and Hiring

#### Automated outreach
- Personalized outreach messages generated and sent to matched creators
- Follow-up automation for non-responders
- All communication managed through the platform

#### Hiring workflow
- Streamlined proposal generation
- Terms and rate negotiation within the platform
- Contract and approval management
- Creator accepts, you review, campaign proceeds

### Content Review

- Creators submit content through the platform before publishing
- Brand reviews and approves (or requests changes) before anything goes live
- Quality control integrated into the workflow — no surprise posts
- All content tracked and archived in the dashboard

### Influencer Payments

#### Payment processing
- Automated payments triggered by predefined conditions
- Milestone-based: pay on content approval, posting confirmation, or performance thresholds
- Influencers retain 100% of their agreed earnings — platform fee comes from the brand

#### International support
- Multi-currency processing for cross-border campaigns
- Bank transfers, digital payment services, and specialized payment platforms
- Currency conversion, international tax reporting, and compliance with local regulations

#### Documentation
- Tax documentation and invoicing handled automatically
- Financial records linked to campaign activity for audit trails
- Supports reconciliation, budgeting, and regulatory reporting

### Performance Dashboard

#### Real-time tracking
- Reach, engagement, and impact metrics updated in real-time
- Per-creator and per-campaign breakdowns
- Easy report generation and export

#### Key metrics
| Metric | What it tracks |
|---|---|
| Reach | Total audience exposed to campaign content |
| Engagement | Likes, comments, shares, saves across all posts |
| Impressions | Total views of campaign content |
| ROI | Return on campaign investment |
| CPM | Cost per 1,000 impressions |
| CTR | Click-through rate on linked content |

### Built-in Calculators

Hypefy provides free tools for campaign planning:
- **Budget Calculator** — estimate total campaign cost based on goals
- **ROI Calculator** — project returns based on expected reach and conversions
- **Engagement Calculator** — estimate engagement from creator selection
- **CPM Calculator** — cost per thousand impressions analysis
- **CTR Calculator** — click-through rate projections

### Pricing

*Best-effort — verify at hypefy.ai. Model may have changed.*

Hypefy uses a **zero-subscription, pay-per-campaign** model:
- No monthly or annual subscription fee
- No fees until you launch a campaign
- Platform fee is a percentage of campaign spend (estimated 20-30%)
- For a brand spending $10,000 on influencer fees, expect $2,000-$3,000 in platform fees
- Free campaign setup, brief generation, and creator matching preview
- Free strategy sessions available for qualified prospects

#### How it compares to traditional pricing
| Model | Cost structure | Best for |
|---|---|---|
| Hypefy | % of campaign spend, no subscription | Variable-budget brands, testing influencer marketing |
| Modash | $199-499/mo subscription | Always-on programs, Shopify-heavy brands |
| influData | €599+/mo subscription | Analytics-heavy teams, social listening |
| Creator.co | Contact for pricing | AI-automated outreach, UGC rights |
| Traditional agency | $5K-20K+/mo + 15-30% of spend | Full-service management |

### International Operations

Hypefy operates in 13+ markets:
- Europe (headquartered in Zagreb, Croatia; US office in Dover, DE)
- North America
- South America
- Australia
- Africa

Clients include Nivea, Henkel Schwarzkopf, Cedevita, and 80+ other brands.

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
