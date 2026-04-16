---
name: sales-ltk
description: "LTK platform help — creator commerce and influencer marketing for brands. Brand Platform (free: Brand Profiles, Creator Discovery, Gifting & Codes, Creator CRM, Content Library, Dashboard, Leaderboards), LTK Connect (self-serve campaigns: Launch $99/mo, Pro $999/mo, Enterprise), LTK Optimize (managed service), LTK Ads, LTK Boost, LTK CTV (Connected TV), LTK 360 (analytics), LTK AI (creator matching), LTK RMN (retail media network), LTK Soirée (events). Use when LTK campaigns not reaching the right creators, gifting program getting low response rates, LTK Connect not driving enough sales, LTK Ads underperforming, or analytics not showing expected attribution. Do NOT use for cross-platform influencer strategy (use /sales-influencer-marketing), affiliate program design (use /sales-affiliate-program), or connecting tools (use /sales-integration)."
argument-hint: "[describe what you need help with in LTK]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-commerce, platform]
github: "https://github.com/rewardStyle"
---
# LTK Platform Help

Help the user with LTK (formerly rewardStyle / LIKEtoKNOW.it) platform questions — from setting up brand profiles and discovering creators through campaign management, gifting, analytics, and paid amplification (Ads, Boost, CTV).

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of LTK do you need help with?**
   - A) Brand Platform setup — brand profile, creator discovery, gifting
   - B) LTK Connect — self-serve campaigns, creator outreach, offers
   - C) LTK Optimize — managed service, full-service campaigns
   - D) LTK Ads / Boost / CTV — paid amplification
   - E) Analytics & reporting — LTK 360, full-funnel dashboard
   - F) Creator discovery — finding and vetting creators
   - G) Gifting & codes — product seeding, promo codes
   - H) Content library — creator content access and repurposing
   - I) Pricing & plans — understanding LTK Connect tiers
   - J) Commission setup — rates, payment structure
   - K) Something else — describe it

2. **Are you a brand or an agency?**
   - A) Brand (DTC / ecommerce)
   - B) Brand (retail / multi-location)
   - C) Agency managing multiple brands
   - D) Creator looking for brand info

3. **Which LTK products are you using?**
   - A) Free Brand Platform only
   - B) LTK Connect (Launch / Pro / Enterprise)
   - C) LTK Optimize (managed service)
   - D) Not on LTK yet — evaluating
   - E) Not sure

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Influencer marketing strategy (platform-agnostic) → `/sales-influencer-marketing`
- Affiliate program design → `/sales-affiliate-program`
- Retargeting with creator content → `/sales-retargeting`
- Tool integration → `/sales-integration`

Otherwise, answer directly using the reference below.

## Step 3 — LTK platform reference

### Platform architecture

LTK has two layers: a **free Brand Platform** and **paid products** (Connect, Optimize, Ads, Boost, CTV).

**Free Brand Platform** — available to all brands, no subscription:

| Module | What it does |
|---|---|
| **Brand Profile** | Branded page on the LTK App — shoppers find, follow, and shop curated creator content |
| **Creator Discovery** | AI-powered search to find creators matching brand, products, and goals |
| **Gifting & Codes** | Send products and promo codes to creators, track from outreach through performance |
| **Creator CRM** | Manage creator relationships from discovery through ongoing collaboration |
| **Content Library** | Access and repurpose creator-generated content (with permissions) |
| **Full-Funnel Dashboard** | Transparent reporting — clicks, sales, orders, attribution |
| **Leaderboards** | Rank top creators and content by performance |

**LTK Connect** — self-serve paid campaigns:

| Plan | Price | Creators/mo | Yearly spend cap | Brands | Seats |
|---|---|---|---|---|---|
| **Launch** | $99/mo | 10 | $25,000 | 1 | 1 |
| **Pro** | $999/mo | 50 | $100,000 | 2 | 1 |
| **Enterprise** | Custom | Unlimited | Unlimited | Unlimited | Scalable |

- Extra seats: $99/mo (Launch), $499/mo (Pro)
- Customized dashboard: $399/mo add-on
- Shopify integration: VIP access
- 10% minimum commission rate, 15% recommended to attract top creators

**LTK Optimize** — managed service:
- Full-service campaign management by LTK consultants
- Data-driven creator casting, content strategy, and optimization
- For brands wanting a hands-off, agency-like experience

### Paid amplification products

| Product | What it does |
|---|---|
| **LTK Ads** | Native advertising on the LTK App and creator content |
| **LTK Boost** | Amplify top-performing creator content with paid media |
| **LTK CTV** | Connected TV ads featuring creator content |
| **LTK RMN** | Retail media network — leverage creator content within retailer ad networks |
| **LTK Soirée** | Event-based marketing with creators |

### LTK AI & LTK 360

- **LTK AI** — AI-powered creator matching using 250M+ data points: audience demographics, purchase behavior, content performance, brand affinity
- **LTK 360** — comprehensive analytics: campaign performance, creator ROI, audience insights, sales attribution, content performance

### Commission and payment model

LTK operates on a **commission/affiliate model**:
- Brands set commission rates (10% minimum, 15%+ recommended)
- Creators earn commission on sales driven through their LTK links
- LTK handles creator payments
- Connect plans add fixed-fee creator collaborations on top of commissions

### Scale and reach

- 300,000+ creators worldwide
- 40M+ monthly shoppers on the LTK App
- 8,000 retailers, 1M+ brands across 165+ countries
- 500+ employees across 7 countries (HQ: Dallas, TX)
- Nearly 1,100 "LTK millionaires" (creators and brands)

### API

- **Developer Portal**: api.rewardstyle.com (requires application for access)
- **Public content API**: `api-gateway.rewardstyle.com/api/ltk/v2/ltks/` (LTK content feed)
- **Auth**: Application-based access (no self-serve API keys)
- **Note**: API documentation is behind authentication. Limited public docs available. Contact LTK for developer access.

## Step 4 — Actionable guidance

Based on the user's question, provide step-by-step guidance. Always:
- Clarify which products are free vs paid
- Flag plan-tier requirements early
- Recommend commission rates based on category norms
- Suggest creator discovery strategies specific to LTK's tools

### Common workflows

**Getting started with the free Brand Platform:**
1. Create your Brand Profile on the LTK App
2. Use Creator Discovery to find creators in your category
3. Send gifting offers — start with 10-20 micro-influencers
4. Track performance in the Full-Funnel Dashboard
5. Build your Content Library from creator posts

**Launching a Connect campaign:**
1. Choose a Connect plan based on creator volume needs
2. Define campaign goals (awareness, traffic, sales)
3. Use LTK AI to find matching creators
4. Create offers with flat fee + commission structure
5. Set commission rate (15%+ for competitive positioning)
6. Monitor with LTK 360 analytics
7. Boost top-performing content with LTK Boost

**Running a gifting/seeding program:**
1. Use Creator Discovery to build a target list by category, audience, engagement
2. Create gifting offers in Gifting & Codes module
3. Ship products with tracking
4. Monitor which creators post and track attribution
5. Convert top performers to paid collaborations

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Free platform has real value but limited campaign tools.** The Brand Platform (profiles, discovery, gifting, CRM, dashboard) is genuinely free. But running structured paid campaigns with creator offers requires LTK Connect ($99-999+/mo).
2. **LTK App redirect can hurt conversions.** Creator links route through the LTK App — new consumers may be prompted to download the app before purchasing. This extra friction can reduce conversion rates. No workaround from the brand side.
3. **Creator costs can be high on top of LTK fees.** Many LTK creators expect flat fees on top of commissions. On a $99/mo Launch plan with a $25K yearly cap, the effective cost-per-creator can be significant. Budget for creator fees beyond the platform subscription.
4. **10% commission is the minimum, but 15%+ is the real floor.** LTK requires 10% minimum commission, but top creators gravitate toward brands offering 15-20%+. Low-commission brands get less creator attention.
5. **Creator discovery depends on plan tier.** Launch plan gets partial database access; Pro and Enterprise get full database with audience demographics. Discovery quality is plan-gated.
6. **Attribution lives inside LTK.** All click, sale, and order data flows through LTK's attribution system. If you want to compare LTK performance against other channels, you'll need to export or cross-reference manually.
7. **Shopify integration requires VIP access.** Deep Shopify integration isn't available on standard Connect plans — requires VIP tier or Enterprise.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Cross-platform influencer marketing strategy, creator discovery, vetting, and ROI measurement
- `/sales-affiliate-program` — Affiliate and referral program design with commission structures
- `/sales-modash` — Modash platform help (creator discovery and analytics)
- `/sales-creatorco` — Creator.co platform help (influencer campaigns)
- `/sales-hypefy` — Hypefy platform help (AI-powered influencer campaigns)
- `/sales-infludata` — influData platform help (influencer audience analytics)
- `/sales-retargeting` — Retargeting with creator content
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Getting started with influencer marketing on LTK
**User says**: "I'm a DTC beauty brand and want to start working with influencers on LTK. Where do I begin?"
**Skill does**: Walks through setting up the free Brand Platform first — creating a Brand Profile, using Creator Discovery to find beauty creators, starting with a gifting program (10-20 micro-influencers), tracking in the dashboard. Then recommends upgrading to Connect Launch ($99/mo) when ready for structured campaigns.
**Result**: Phased approach from free to paid, with specific first steps

### Example 2: Understanding LTK Connect pricing
**User says**: "What does LTK Connect cost and is it worth it for a mid-size fashion brand?"
**Skill does**: Breaks down the three tiers (Launch $99/mo, Pro $999/mo, Enterprise custom), explains creator limits and spend caps, recommends Pro for mid-size brands wanting 50 creators/month, flags that creator fees come on top of platform cost, and suggests starting with Launch to test before upgrading.
**Result**: Clear pricing breakdown with recommendation

### Example 3: Boosting creator content with LTK Ads
**User says**: "A creator posted amazing content about our product. How can we amplify it?"
**Skill does**: Explains LTK Boost (amplify specific creator posts with paid media), LTK Ads (native ads on LTK App), and LTK CTV (Connected TV placement). Recommends Boost for amplifying proven content, Ads for broader LTK App visibility, CTV for brand awareness at scale.
**Result**: Paid amplification strategy using LTK's ad products

## Troubleshooting

### Low creator response rate to gifting offers
**Symptom**: Sending gifting offers but creators aren't accepting or posting
**Cause**: Commission rate too low, product not relevant to creator's audience, or gift offer doesn't include a flat fee
**Solution**: 1) Increase commission to 15-20%. 2) Target creators who already post in your product category. 3) Consider adding a small flat fee ($50-100) alongside gifting to signal seriousness. 4) Personalize outreach — reference specific content the creator posted.

### Dashboard not showing sales attribution
**Symptom**: Creators are posting but no sales appear in the dashboard
**Cause**: Attribution tracking requires proper link setup through LTK, and there can be attribution delays
**Solution**: 1) Verify creators are using LTK links (not direct product links). 2) Check attribution window — LTK typically uses a 30-day cookie. 3) Allow 24-48 hours for sales data to populate. 4) If using Shopify integration, verify VIP access is enabled. 5) Contact LTK support for missing attribution.

### Connect plan creator limit reached
**Symptom**: Can't send more offers because monthly creator limit is hit
**Cause**: Launch plan caps at 10 creators/month, Pro at 50
**Solution**: 1) Wait for the next billing cycle reset. 2) Upgrade to the next tier if consistently hitting limits. 3) Prioritize higher-performing creators. 4) Use the free Brand Platform for discovery and gifting (no limits) alongside Connect for paid campaigns.
