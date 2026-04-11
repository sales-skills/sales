---
name: sales-influencer-marketing
description: "Influencer marketing strategy across platforms — creator discovery, audience vetting, campaign tracking, ROI measurement, outreach, gifting, and affiliate programs. Covers platform comparison (Modash, influData, Creator.co, Hypefy, LTK, Influencity), discovery workflow (search, filters, lookalikes, audience analysis), vetting framework (fake followers, engagement authenticity, audience demographics), campaign setup and tracking (EMV, ROAS, CPM, sales attribution), creator outreach (email templates, negotiation, rate cards), product gifting and seeding, influencer affiliate programs, and creator payments. Use when choosing an influencer platform, building a creator discovery workflow, vetting influencers, setting up campaign tracking, planning influencer outreach, or measuring influencer ROI. Do NOT use for platform-specific config (use /sales-modash, /sales-infludata, /sales-creatorco, /sales-hypefy, /sales-ltk, or /sales-influencity), ad campaign strategy (use /sales-retargeting), or email marketing to subscribers (use /sales-email-marketing)."
argument-hint: "[describe your influencer marketing question — e.g., 'how do I find micro-influencers for my skincare brand' or 'what metrics should I track for influencer campaigns']"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-discovery, campaign-tracking, strategy]
---
# Influencer Marketing Strategy

Helps the user plan and execute influencer marketing programs across platforms — from choosing the right tool and finding creators through vetting, outreach, campaign tracking, and ROI measurement.

## Step 1 — Gather context

Ask the user:

1. **What do you need help with?**
   - A) Choosing an influencer marketing platform
   - B) Finding and discovering creators
   - C) Vetting influencers (fake followers, audience quality)
   - D) Outreach to creators (emails, DMs, negotiation)
   - E) Product gifting / seeding program
   - F) Campaign tracking and ROI measurement
   - G) Influencer affiliate program setup
   - H) Creator payments and contracts
   - I) Something else — describe it

2. **What's your business type?**
   - A) Ecommerce / Shopify store
   - B) DTC brand
   - C) SaaS / B2B
   - D) Agency managing multiple clients
   - E) Other — describe it

3. **What's your current setup?**
   - A) Starting from scratch — no influencer program yet
   - B) Manual process (spreadsheets, DMs, no tooling)
   - C) Already using a platform — which one?
   - D) Looking to switch platforms

4. **Budget and scale?**
   - A) Small (under $1K/mo, handful of creators)
   - B) Medium ($1K-5K/mo, 20-50 creators)
   - C) Large ($5K+/mo, 50+ creators)
   - D) Not sure yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Modash setup, config, or features → `/sales-modash`
- influData setup, config, or features → `/sales-infludata`
- Creator.co setup, config, or features → `/sales-creatorco`
- Hypefy setup, config, or features → `/sales-hypefy`
- LTK setup, config, or features → `/sales-ltk`
- Influencity setup, config, or features → `/sales-influencity`
- Affiliate program design (not influencer-specific) → `/sales-affiliate-program`
- UGC galleries / shoppable content → `/sales-tagshop`
- Ad campaign strategy → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Influencer marketing strategy reference

### Platform comparison

| Feature | Modash | influData | Creator.co | Hypefy | LTK | Influencity |
|---|---|---|---|---|---|---|
| **Database size** | 350M+ profiles (IG, TT, YT) | 20M+ profiles (IG, TT, YT, Twitch, Snapchat, FB) | 400M+ profiles | 3K+ vetted + 12M+ external (IG, TT) | 300K+ opted-in creators | 200M+ profiles (IG, TT, YT) |
| **Discovery method** | AI search + filters + lookalikes | AI prompt search + lookalike builder | London AI agent (automated matching) | AI matching from 3-input brief | LTK AI (250M+ data points) | Filters + audience demographics + lookalikes |
| **Fake follower detection** | Yes | Yes (detailed scoring) | Via Deep Insights | Yes (bot detection, vetting) | Not documented | Yes |
| **Audience analysis** | Demographics, overlap | 50+ metrics, overlap, sentiment | Deep Insights reports | Demographics, engagement patterns | Purchase behavior, brand affinity | Demographics, overlap, engagement |
| **Campaign tracking** | Auto-detect (no creator signup) | Real-time with story archival | Dashboard with approvals | Real-time dashboard | Full-funnel dashboard (clicks, sales, orders) | Manual URL submission (no auto-detect) |
| **Shopify integration** | Deep (gifting, affiliates, payouts) | No native Shopify | Product gifting via Shopify | No native ecommerce | VIP access (Enterprise/Pro) | Product gifting + coupon tracking |
| **Creator payments** | Built-in (180+ countries) | No | Via platform | Built-in (multi-currency, milestone-based) | Built-in (commission-based) | Built-in (multi-currency) |
| **Outreach** | Gmail/Outlook sync, templates | Built-in email campaigns | London AI automated outreach | Fully automated outreach + follow-ups | Creator CRM + gifting offers | Bulk email + Gmail/Outlook sync |
| **UGC rights** | No | No | Full usage rights | No | Content Library (with permissions) | No |
| **Affiliate tracking** | Promo codes via Shopify | No | Impact, CJ, Awin, Rakuten | Not documented | Built-in (commission/affiliate model) | Coupon codes via Shopify |
| **Social listening** | No | Brand mentions, hashtags, UGC | No | No | No | Yes (100M+ sources, Business+) |
| **Content review** | No pre-publish approval | No | Yes | Yes (approve before publishing) | No | Yes (Social Hub approval workflows) |
| **Starting price** | $199/mo | €599/mo (annual) | Contact for pricing | No subscription — 20-30% of spend | Free Brand Platform; Connect from $99/mo | ~$278/mo (annual) |
| **API** | Yes (separate pricing) | Enterprise only | No public API | No public API | Behind auth (apply for access) | Business+ (no public docs) |

#### When to choose each platform

- **Modash** — best for Shopify ecommerce brands that want an all-in-one workflow (discover → gift → track sales → pay creators). Strongest Shopify integration. Largest discoverable database at the lowest entry price.
- **influData** — best for teams that prioritize deep audience analytics, sentiment analysis, and social listening. Covers more platforms (Twitch, Snapchat, Facebook). Best for brands that need to monitor brand mentions and competitor activity alongside influencer campaigns.
- **Creator.co** — best for brands that want AI-automated creator matching and outreach (London AI agent does the work for you). Strong for UGC campaigns where you need full content usage rights. Good affiliate network integrations.
- **Hypefy** — best for brands that want zero upfront commitment and full-service automation. No subscription — pay a percentage of campaign spend only when you launch. AI handles brief generation, creator matching, outreach, and coordination. Strong content review workflow (approve before publishing). Best for testing influencer marketing or running sporadic campaigns without a monthly fee.
- **LTK** — best for ecommerce and DTC brands focused on creator commerce with a commission/affiliate model. Free Brand Platform includes creator discovery, gifting, CRM, and dashboard. 300K+ opted-in creators with 40M+ monthly shoppers on the LTK App. Commission-based (10% min, 15%+ recommended) — no flat-fee creator payments. Best when you want creators driving shoppable content directly to consumers through the LTK shopping app.
- **Influencity** — best for brands and agencies that need influencer marketing plus social media management in one platform. 200M+ creator database with Social Hub (content calendar, approval workflows), Monitoring (brand tracking, competitor analysis across 100M+ sources), and Shopify gifting. Credit-based system (results, analyses, post analyses). Strongest fit when you also need social listening and multi-channel content planning alongside influencer campaigns. Starting ~$278/mo annual.

### Creator discovery workflow

Follow this sequence to find creators efficiently:

1. **Define your ideal creator profile (ICP)**
   - Content niche (beauty, fitness, tech, food, etc.)
   - Platform(s) (Instagram, TikTok, YouTube)
   - Follower range — micro (10K-100K) typically gives best ROI for ecommerce
   - Location — where your customers are, not necessarily where the creator lives
   - Audience demographics — age, gender, interests that match your customer profile

2. **Run discovery searches**
   - Start with keyword/AI search to cast a wide net
   - Apply demographic and performance filters to narrow
   - Use lookalike/similar creator features to expand from known good creators

3. **Build a shortlist**
   - Save promising creators to a list/collection
   - Aim for 3-5x your target number (expect 20-30% response rates on outreach)

4. **Vet your shortlist** (see vetting framework below)

### Creator vetting framework

Vet in this order to save time — free/fast checks first, detailed analysis only for creators that pass initial screening.

**Round 1 — Quick scan (free, 30 seconds per creator)**:
| Check | Pass | Fail |
|---|---|---|
| Content quality | Consistent, on-brand, good production | Erratic, off-topic, low-effort |
| Posting frequency | Regular (3+ posts/week) | Inactive or sporadic |
| Brand alignment | No competitor partnerships visible | Recently promoted a direct competitor |

**Round 2 — Metrics check (free or low-cost, 1 minute per creator)**:
| Check | Healthy range | Red flag |
|---|---|---|
| Engagement rate | 3-6% (under 100K), 1-3% (100K+) | Under 1% or over 10% |
| Follower growth | Steady organic trend | Sudden spikes (purchased followers) |
| Comment quality | Genuine, relevant comments | Generic ("nice!" "great!" spam) |

**Round 3 — Deep analysis (uses platform credits, 2-3 minutes per creator)**:
| Check | What to verify | Red flag |
|---|---|---|
| Fake follower % | Under 25% suspicious accounts | Over 25% bots or purchased |
| Audience location | Matches your target market | Concentrated in irrelevant countries |
| Audience demographics | Age/gender match your customer | Demographics misaligned |
| Audience overlap | Low overlap with other selected creators | High overlap wastes reach |

### Creator outreach

#### Email outreach best practices
- **Personalize every message** — reference specific content the creator posted, not just their follower count
- **Lead with value** — what the creator gets (product, payment, exposure), not what you need
- **Be specific about expectations** — deliverables, timeline, compensation upfront
- **Keep it short** — 3-5 sentences max for initial outreach
- **Follow up twice** — day 3 and day 7. Stop after two follow-ups.

#### Rate benchmarks (2025-2026)

| Creator tier | Instagram post | Instagram reel | TikTok | YouTube |
|---|---|---|---|---|
| Nano (1K-10K) | $50-150 | $75-200 | $50-150 | $100-300 |
| Micro (10K-100K) | $150-500 | $200-750 | $150-500 | $300-1,500 |
| Mid (100K-500K) | $500-2,500 | $750-3,500 | $500-2,500 | $1,500-5,000 |
| Macro (500K-1M) | $2,500-7,500 | $3,500-10,000 | $2,500-7,500 | $5,000-15,000 |

*Rates vary significantly by niche, audience quality, and engagement. These are ballpark ranges.*

#### Negotiation tips
- Propose a **paid test** first — one post to evaluate performance before committing to a longer partnership
- Offer **performance bonuses** — base fee + bonus if content exceeds engagement benchmarks
- Bundle deliverables — a package (2 posts + 3 stories + 1 reel) is often cheaper per piece than à la carte
- For gifting-only partnerships, be upfront that there's no payment — some creators only accept paid work

### Product gifting and seeding

Product gifting sends free products to creators in exchange for content (sometimes with no posting obligation).

#### Gifting program types
- **No-strings gifting** — send product with no expectation of posting. Lowest response rate but most authentic content when creators do post.
- **Gifting with posting expectation** — send product with a brief of expected deliverables. Higher compliance but less authentic.
- **Seeding campaign** — send to a large number of creators (50-200+) to generate organic mentions. Volume play.

#### Gifting workflow
1. Select products and set up gifting links (Modash automates this with Shopify)
2. Reach out to creators with the gifting offer
3. Creators accept, pick variants, enter shipping info
4. Orders auto-create in your ecommerce platform
5. Ship products through your normal fulfillment
6. Track who posts and what content they create

#### Metrics for gifting programs
- **Acceptance rate** — % of creators who accept the gift (aim: 40-60%)
- **Post rate** — % of gifted creators who actually post (aim: 30-50% for no-strings, 70-90% for contracted)
- **Cost per post** — product cost / number of posts generated
- **EMV per dollar spent** — earned media value / total gifting cost

### Campaign tracking and ROI

#### Key metrics
| Metric | What it measures | When to use |
|---|---|---|
| **ROAS** | Revenue ÷ total cost | Bottom-line campaign performance |
| **EMV** | Estimated value of organic impressions | Awareness campaigns |
| **CPM** | Cost per 1,000 impressions | Comparing creator efficiency |
| **CPA** | Cost per acquisition | Direct-response campaigns |
| **Engagement rate** | (Likes + comments) ÷ impressions | Content resonance |
| **Sales attribution** | Revenue traced to specific creators | Affiliate/promo code campaigns |

#### Attribution methods
- **Promo codes** — unique code per creator, track usage in ecommerce. Most reliable for direct sales.
- **Affiliate links** — unique URLs with tracking parameters. Good for online-only products.
- **UTM parameters** — add UTM tags to creator links for Google Analytics tracking.
- **Post-purchase surveys** — "How did you hear about us?" catches untracked word-of-mouth.
- **Brand lift studies** — measure awareness/consideration changes. Best for large campaigns.

#### ROI benchmarks
- Average influencer marketing ROI: $5.78 per $1 spent (industry average)
- Micro-influencers typically deliver 20-60% higher ROI than macro-influencers
- Gifting programs: expect $3-8 EMV per $1 of product cost

### Influencer affiliate programs

Turn one-time creator partnerships into ongoing revenue channels.

- **Commission structure** — 10-20% of attributed sales is standard for influencer affiliates
- **Cookie window** — 30 days is standard; shorter for impulse purchases, longer for high-consideration
- **Tiered commissions** — reward top performers with higher rates (e.g., 15% base → 20% after 50 sales/mo)
- **Hybrid model** — flat fee per post + commission on sales. Best for mid-tier creators.
- **Tracking**: Modash uses Shopify promo codes, Creator.co integrates with Impact/CJ/Awin/Rakuten

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Platform recommendation** — which tool fits their needs, budget, and tech stack
2. **Discovery playbook** — step-by-step search and filtering strategy
3. **Vetting checklist** — ordered checks to efficiently qualify creators
4. **Outreach templates** — personalized email/DM drafts for their specific situation
5. **Campaign plan** — tracking setup, metrics, reporting cadence
6. **Program design** — gifting, affiliate, or hybrid program structure

## Gotchas

*Best-effort from research — review these, especially items about pricing and platform capabilities that may change.*

- **Fake follower rates are high across the industry.** ~37% of influencer followers are estimated to be fake or bot accounts (2025 data). Never skip the vetting step, even for creators who look legitimate at first glance.
- **Response rates are low.** Expect 20-30% response rates on cold creator outreach. Build your shortlist at 3-5x your target number of creators. Personalization significantly improves response rates.
- **Micro-influencers outperform macro for ROI.** Creators with 10K-100K followers consistently deliver higher engagement rates and better ROAS for ecommerce brands. Don't chase follower counts.
- **Gifting ≠ guaranteed content.** No-strings gifting has a 30-50% post rate. If you need guaranteed posts, use paid partnerships or contracted gifting with clear deliverables.
- **Platform databases overlap.** Modash, influData, and Creator.co all index public profiles from the same social platforms. The differentiation is in analytics depth, workflow tools, and integrations — not the raw creator database.
- **API costs add up fast.** Both Modash and influData charge separately for API access. If you only need discovery + management, use the platform UI rather than paying for API access on top.

## Related skills

- `/sales-modash` — Modash platform help — discovery, tracking, Shopify gifting, payments, API
- `/sales-infludata` — influData platform help — AI creator search, audience analysis, social listening
- `/sales-creatorco` — Creator.co platform help — London AI agent, UGC rights, affiliate tracking
- `/sales-hypefy` — Hypefy platform help — AI campaign automation, zero-subscription pricing, content review, payments
- `/sales-ltk` — LTK platform help — creator commerce, Brand Platform, Connect campaigns, Ads, Boost, CTV
- `/sales-influencity` — Influencity platform help — 200M+ creators, IRM, campaigns, Social Hub, Monitoring, Shopify gifting
- `/sales-tagshop` — UGC video ads and shoppable galleries for ecommerce
- `/sales-affiliate-program` — Affiliate and referral program design (strategy, not platform-specific)
- `/sales-retargeting` — Retargeting campaign audiences from influencer content
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Choose an influencer marketing platform
**User says**: "I run a Shopify DTC brand and want to start working with influencers. Which platform should I use?"
**Skill does**:
1. Asks about budget, scale, and priorities (discovery vs. outreach automation vs. analytics)
2. Compares Modash, influData, and Creator.co on relevant dimensions
3. Recommends Modash for Shopify-first brands wanting gifting + affiliate tracking in one workflow
4. Notes Creator.co if they want AI-automated outreach, influData if they need deep analytics
**Result**: Clear platform recommendation with reasoning matched to their specific situation

### Example 2: Build a micro-influencer gifting program
**User says**: "I want to send free products to 50 micro-influencers and track who posts about it"
**Skill does**:
1. Designs the gifting program: product selection, no-strings vs. contracted, expectations
2. Walks through discovery workflow to find 150-250 candidates (3-5x target for response rates)
3. Provides outreach template for gifting offers
4. Sets up tracking: content monitoring, post rate tracking, EMV calculation
5. Recommends Modash for Shopify gifting automation or manual process for smaller budgets
**Result**: Complete gifting program plan from discovery through tracking

### Example 3: Measure influencer campaign ROI
**User says**: "I spent $10K on influencer campaigns last quarter — how do I know if it worked?"
**Skill does**:
1. Identifies what tracking was in place (promo codes, UTMs, affiliate links, or none)
2. Calculates available metrics: ROAS from promo code sales, EMV from content reach, CPA
3. Benchmarks results against industry averages ($5.78 per $1 spent)
4. Recommends attribution setup for future campaigns to get better data
5. Suggests A/B testing creators and content types to optimize spend
**Result**: ROI analysis with specific recommendations for improving measurement going forward

## Troubleshooting

### Low response rate on creator outreach
**Symptom**: Sending outreach to 100+ creators but getting under 10% response
**Cause**: Generic messaging, wrong creator-brand fit, or reaching non-opted-in creators who aren't expecting brand outreach
**Solution**: Personalize every message (reference specific content), verify creator-brand alignment before outreach, try DMs in addition to email, and consider platforms with opt-in marketplaces (Creator.co) for higher response rates. Test different offer types (paid vs. gifting vs. affiliate).

### Can't tell if an influencer is worth the price
**Symptom**: Creator is asking for $X but you're unsure if the audience quality justifies it
**Cause**: Missing data on audience authenticity, demographics, and past performance
**Solution**: Run through the full vetting framework: check fake follower %, audience demographics, engagement quality (not just rate), and ask the creator for their media kit with past campaign performance data. Compare their rate to the benchmarks in this guide. Propose a paid test (one post) before committing to a larger deal.

### Campaign ran but no measurable sales
**Symptom**: Influencer posted, got engagement, but no sales showed up
**Cause**: Missing attribution (no promo codes or tracking links), wrong audience fit, or content didn't drive purchase intent
**Solution**: For future campaigns, always set up promo codes or affiliate links before content goes live. Add post-purchase surveys ("How did you hear about us?") to catch untracked conversions. Review whether the creator's audience matches your buyer persona — high engagement with the wrong audience won't convert.
