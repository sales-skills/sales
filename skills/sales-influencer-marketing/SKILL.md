---
name: sales-influencer-marketing
description: "Influencer marketing strategy across platforms — creator discovery, audience vetting, campaign tracking, ROI measurement, outreach, gifting, and affiliate programs. Covers platform comparison (Modash, influData, Creator.co, Hypefy, LTK, Influencity, Meltwater, Skeepers, Heepsy, CreatorIQ, NeoReach, Afluencer, Collabstr, Cloutboost, House of Marketers, Famesters, inBeat), discovery workflow (search, filters, lookalikes, audience analysis), vetting framework (fake followers, engagement authenticity, audience demographics), campaign setup and tracking (EMV, ROAS, CPM, sales attribution), creator outreach (email templates, negotiation, rate cards), product gifting and seeding, influencer affiliate programs, and creator payments. Use when choosing an influencer platform, building a creator discovery workflow, vetting influencers, setting up campaign tracking, planning influencer outreach, or measuring influencer ROI. Do NOT use for platform-specific config (use /sales-modash, /sales-infludata, /sales-creatorco, /sales-hypefy, /sales-ltk, /sales-influencity, /sales-meltwater, /sales-brandwatch, /sales-skeepers, /sales-heepsy, /sales-creatoriq, /sales-neoreach, /sales-afluencer, /sales-collabstr, /sales-cloutboost, /sales-houseofmarketers, /sales-famesters, or /sales-inbeat), TikTok marketing strategy (use /sales-tiktok-marketing), gaming influencer marketing strategy (use /sales-gaming-marketing), ad campaign strategy (use /sales-retargeting), or email marketing to subscribers (use /sales-email-marketing)."
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
- Meltwater setup, config, or features → `/sales-meltwater`
- Skeepers setup, config, or features → `/sales-skeepers`
- Heepsy setup, config, or features → `/sales-heepsy`
- CreatorIQ setup, config, or features → `/sales-creatoriq`
- Afluencer setup, config, or features → `/sales-afluencer`
- Collabstr setup, config, or features → `/sales-collabstr`
- Cloutboost setup, config, or features → `/sales-cloutboost`
- House of Marketers agency services → `/sales-houseofmarketers`
- NeoReach setup, config, or features → `/sales-neoreach`
- inBeat agency services or free toolkit → `/sales-inbeat`
- Famesters agency services → `/sales-famesters`
- TikTok marketing strategy (organic, paid, content) → `/sales-tiktok-marketing`
- Gaming influencer marketing strategy → `/sales-gaming-marketing`
- Later Influence setup, config, or features → `/sales-later`
- Sprout Social influencer features → `/sales-sproutsocial`
- Affiliate program design (not influencer-specific) → `/sales-affiliate-program`
- UGC galleries / shoppable content → `/sales-tagshop`
- Ad campaign strategy → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Influencer marketing strategy reference

### Platform comparison

| Feature | Modash | influData | Creator.co | Hypefy | LTK | Influencity | Meltwater | Skeepers | Heepsy | CreatorIQ | NeoReach | Afluencer | Collabstr | Cloutboost | House of Marketers | Famesters | inBeat |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Database size** | 350M+ profiles (IG, TT, YT) | 20M+ profiles (IG, TT, YT, Twitch, Snapchat, FB, LinkedIn) | 400M+ profiles | 3K+ vetted + 12M+ external (IG, TT) | 300K+ opted-in creators | 200M+ profiles (IG, TT, YT) | Large (global, not publicly sized) | 100K+ pre-vetted micro/nano creators | 11M+ profiles (IG, TT, YT, Twitch) | ~20M profiles (IG, TT, YT, FB, Snapchat, Amazon) | 3M+ profiles (IG, TT, YT) | Curated marketplace (not publicly sized, 200+ categories) | 250K+ vetted creators (IG, TT, YT) | 1.5M+ gaming creators (YT, Twitch, TT) | 50K+ creator network (TT, IG, YT, Twitch, X) | Via BuzzGuru (not publicly sized, YT, TT, IG, Twitch) | Agency-curated (not publicly sized, TT, IG, YT) |
| **Discovery method** | AI search + filters + lookalikes | AI prompt search + lookalike builder | London AI agent (automated matching) | AI matching from 3-input brief | LTK AI (250M+ data points) | Filters + audience demographics + lookalikes | Search by topic, platform, demographics, engagement | AI creator-brand matching (inbound opt-in model) | Filters + lookalikes + marketplace + creator detection | Creator Graph AI search + filters + lookalikes + audience analysis | 40+ filters + AI recommendation engine + lookalikes + conversation topics | Marketplace — brands post Collabs, creators apply + directory filters | Marketplace — search + filters + campaign posting (creators apply with pricing) | AI-powered + 20+ filters (game genre, game title, platform, activity) | Agency-managed matching (curated by HoM team, no self-serve) | Agency-managed (BuzzGuru AI analytics + manual vetting, no self-serve) | Agency-managed (curated creator matching, no self-serve — SaaS database shut down March 2026) |
| **Fake follower detection** | Yes | Yes (detailed scoring) | Via Deep Insights | Yes (bot detection, vetting) | Not documented | Yes | Not documented | Pre-vetted community (screened on join) | Yes (audience quality score 1-100, Plus+) | Yes (SafeIQ — AI-powered, always-on) | Yes (always-on, engagement pod detection) | No | Pre-vetted (identity verified, social audit on join) | Not documented | Via agency vetting (not self-serve) | Via agency vetting (BuzzGuru analytics, not self-serve) | Via agency vetting (not self-serve) |
| **Audience analysis** | Demographics, overlap | 50+ metrics, overlap, sentiment | Deep Insights reports | Demographics, engagement patterns | Purchase behavior, brand affinity | Demographics, overlap, engagement | Demographics, engagement | Demographics, engagement, brand affinity | Demographics, growth, engagement (Plus+) | Demographics, interests, brand affinity, geographic, overlap | Demographics, psychographics (income, occupation, marital status), brand affinities | Basic profile stats only | Basic profile stats, impressions, engagement | 50+ data points, game-genre data (RAWG/IGDB) | Agency-provided reporting (demographics, engagement, reach) | Agency-provided (BuzzGuru competitor analysis, audience demographics, engagement) | Agency-provided reporting (demographics, engagement, reach) |
| **Campaign tracking** | Auto-detect (no creator signup) | Real-time with story archival | Dashboard with approvals | Real-time dashboard | Full-funnel dashboard (clicks, sales, orders) | Manual URL submission (no auto-detect) | Campaign reporting (reach, engagement, EMV) | Campaign dashboard (reach, engagement, conversions) | Media gallery + Shopify sales (Advanced) | Auto-detect + pre-publish approval + real-time dashboards | Campaign dashboard (ROI, CPM, CPE, IMV, audience exposure) | Manual tracking only (no auto-detect) | Real-time dashboard (impressions, engagement) | Automated daily reporting, content review/approval, real-time dashboard | Agency-delivered reports (custom KPIs, performance tracking) | Agency-delivered (tracking links, promo codes, UTMs, installs, LTV, ROI) | Agency-delivered reporting (performance tracking, paid amplification metrics) |
| **Shopify integration** | Deep (gifting, affiliates, payouts) | No native Shopify | Product gifting via Shopify | No native ecommerce | VIP access (Enterprise/Pro) | Product gifting + coupon tracking | No native ecommerce | Native Shopify app (product sync, review widgets) | Shopify + WooCommerce (Advanced plan only) | Yes (gifting, attribution) | No native ecommerce | Yes (product sync, gifting) + BigCommerce | No native ecommerce | No (gaming-focused, not ecommerce) | No (agency model, not SaaS) | No (agency model, not SaaS) | No (agency model, not SaaS) |
| **Creator payments** | Built-in (180+ countries) | No | Via platform | Built-in (multi-currency, milestone-based) | Built-in (commission-based) | Built-in (multi-currency) | No | Product gifting (no cash payments) | No built-in payments | Built-in (CreatorIQ Pay — multi-currency, tax compliance) | Payment tracking (history and status per influencer) | No built-in payments (arrange off-platform) | Built-in escrow (held until approval) | Via managed service (not self-serve Portal) | Agency-managed (HoM handles creator payments) | Agency-managed (Famesters handles creator payments) | Agency-managed (inBeat handles creator payments) |
| **Outreach** | Gmail/Outlook sync, templates | Built-in email campaigns | London AI automated outreach | Fully automated outreach + follow-ups | Creator CRM + gifting offers | Bulk email + Gmail/Outlook sync | Via media relations module | Inbound — creators apply to campaigns | CSV/XLS export + marketplace (creators apply) | Built-in outreach + automated portals (CreatorIQ Recruit) | Centralized communications hub | Marketplace (creators apply to Collabs) + invitation credits | Marketplace (search + direct purchase) + campaign posting | Via managed service (agency handles outreach) | Full-service (HoM handles all creator outreach and negotiation) | Full-service (Famesters handles all outreach and negotiation) | Full-service (inBeat handles all creator outreach and coordination) |
| **UGC rights** | No | No | Full usage rights | No | Content Library (with permissions) | No | No | Yes (automatic content licensing) | No | Not documented | Not documented | No | UGC packages available (brand purchases content) | Via managed service (retargeting repurposes content) | Via campaign contracts (agency negotiates usage rights) | Via campaign contracts (agency negotiates usage rights) | Unlimited copyright for paid ads and social media (UGC platform) |
| **Affiliate tracking** | Promo codes via Shopify | No | Impact, CJ, Awin, Rakuten | Not documented | Built-in (commission/affiliate model) | Coupon codes via Shopify | No | No | Via Shopify (Advanced plan) | CJ, Awin, Impact, Rakuten, Commission Factory, Partnerize | Not documented | Manual (affiliate Collab type available) | No | No | No (agency model, not self-serve) | No (agency model — promo codes and tracking links managed by agency) | No (agency model — tracking managed by agency) |
| **Social listening** | No | Brand mentions, hashtags, UGC | No | No | No | Yes (100M+ sources, Business+) | Yes (300K+ news sources + social — strongest in class) | No | Basic (brand interaction alerts) | No (use Sprinklr or Meltwater integrations) | No | No | No | No | No | Via BuzzGuru (competitor analysis, market intelligence) | No |
| **Content review** | No pre-publish approval | No | Yes | Yes (approve before publishing) | No | Yes (Social Hub approval workflows) | No | Yes (review + approve before publishing) | Media gallery (no pre-publish approval) | Yes (pre-publish approval workflow) | Content progress monitoring | Via messaging (manual) | Yes (review + request revisions before approving payment) | Yes (review and approve before publication, plan-gated) | Yes (agency reviews and coordinates content before publication) | Yes (agency reviews and coordinates content before publication) | Yes (review and request revisions in UGC platform) |
| **Starting price** | $199/mo | €599/mo (annual) | Contact for pricing | No subscription — 20-30% of spend | Free Brand Platform; Connect from $99/mo | ~$278/mo (annual) | ~$6K/yr (sales call, includes full suite) | ~3K EUR/mo (sales call, includes UGC suite) | Free; Starter $49/mo; Plus $169/mo; Advanced $269/mo | ~$30K/yr (enterprise, sales call required) | ~$399/mo (small team); $50K-$500K/yr (enterprise) | Free; VIP $49/mo; Pro Plus ~$99/mo; Concierge $199/mo | Free (10% fee); Pro $299/mo; Premium $399/mo (5% fee) | $279/yr (Indie); $519/yr (Studio); $1,029/yr (Scale); custom (Agency) | $20K+ per campaign (agency, custom pricing) | Custom (agency, est. $10K+ per campaign) | Free toolkit; managed from $1K/mo; full campaigns $20K+ (custom) |
| **API** | Yes (separate pricing) | Enterprise only | No public API | No public API | Behind auth (apply for access) | Business+ (no public docs) | Yes (REST + streaming + MCP, plan-gated) | Yes (OAuth 2.0, Published API for reviews) | No public API | Yes (ExchangeIQ — JSON, x-api-key auth) | Yes (REST, JSON, 400+ data points, enterprise only, no public docs) | No public API | No public API | v0.0.1 (early stage, minimal docs) | No (agency model) | No |

#### When to choose each platform

- **Modash** — best for Shopify ecommerce brands that want an all-in-one workflow (discover → gift → track sales → pay creators). Strongest Shopify integration. Largest discoverable database at the lowest entry price.
- **influData** — best for teams that prioritize deep audience analytics, sentiment analysis, and social listening. Covers more platforms (Twitch, Snapchat, Facebook, LinkedIn). Best for brands that need to monitor brand mentions and competitor activity alongside influencer campaigns. Built-in creator outreach mailing with per-plan limits (20-500 emails/mo).
- **Creator.co** — best for brands that want AI-automated creator matching and outreach (London AI agent does the work for you). Strong for UGC campaigns where you need full content usage rights. Good affiliate network integrations.
- **Hypefy** — best for brands that want zero upfront commitment and full-service automation. No subscription — pay a percentage of campaign spend only when you launch. AI handles brief generation, creator matching, outreach, and coordination. Strong content review workflow (approve before publishing). Best for testing influencer marketing or running sporadic campaigns without a monthly fee.
- **LTK** — best for ecommerce and DTC brands focused on creator commerce with a commission/affiliate model. Free Brand Platform includes creator discovery, gifting, CRM, and dashboard. 300K+ opted-in creators with 40M+ monthly shoppers on the LTK App. Commission-based (10% min, 15%+ recommended) — no flat-fee creator payments. Best when you want creators driving shoppable content directly to consumers through the LTK shopping app.
- **Influencity** — best for brands and agencies that need influencer marketing plus social media management in one platform. 200M+ creator database with Social Hub (content calendar, approval workflows), Monitoring (brand tracking, competitor analysis across 100M+ sources), and Shopify gifting. Credit-based system (results, analyses, post analyses). Strongest fit when you also need social listening and multi-channel content planning alongside influencer campaigns. Starting ~$278/mo annual.
- **Meltwater** — best for enterprise PR and communications teams that already use Meltwater for media monitoring and want influencer marketing in the same platform. Influencer discovery + campaign tracking integrated with 300K+ news sources and social listening. Strongest when influencer campaigns are part of a broader PR and media intelligence strategy. No separate influencer pricing — included in the Meltwater suite (~$6K+/yr).
- **Brandwatch** — best for enterprise brands already using Brandwatch for consumer intelligence or social listening that want basic influencer capabilities in the same platform. Influencer discovery and campaign tracking via the Influence module (formerly Paladin). Less feature-rich than dedicated influencer platforms — no built-in payments, no Shopify integration, no outreach automation. Strongest when influencer marketing is secondary to social listening and you want everything in one vendor. Enterprise pricing (included in Brandwatch suite).
- **Skeepers** — best for ecommerce brands that want influencer-generated UGC combined with product reviews in one platform. 100K+ pre-vetted micro/nano creators opt into campaigns (inbound model — no cold outreach). AI matches creators to brands. Automatic content licensing for reuse across ads and product pages. Unique "Gifted Reviews" extension bridges influencer content and review collection. Strongest when you need UGC + reviews + influencer in a single platform. European focus — creator pool skews French/EU. ~3K EUR/mo (sales call required, includes full UGC suite).
- **Heepsy** — best for brands on a budget that need affordable influencer discovery and basic campaign management. 11M+ profiles across Instagram, TikTok, YouTube, and Twitch. Lowest entry price ($49/mo Starter) with a free tier for testing. Built-in marketplace where creators apply to your campaigns (reduces cold outreach). Audience quality scoring and fake follower detection on Plus plan+. Shopify/WooCommerce integration for sales tracking on Advanced plan ($269/mo). Credit-based analytics (reports per month). European roots — strongest data accuracy in EU markets. Weaknesses: no built-in outreach email sending, no creator payments, no API, limited integrations beyond Shopify/WooCommerce. Best when you need a low-cost entry point for influencer discovery and don't need advanced outreach automation or creator payment features.
- **Afluencer** — best for small and medium brands new to influencer marketing who want the simplest possible entry point. Marketplace model — post a Collab listing and let creators apply, no cold outreach needed. Free plan available (1 invitation credit/day). Shopify and BigCommerce integration for product gifting. VIP plan ($49/mo) adds 60 invitation credits and premium filters. Concierge plan ($199/mo) includes managed service and Afluencer Podcast appearance. Weaknesses: no advanced analytics or reporting, no content auto-detection, no fake follower detection, no API, geographic coverage skews US. Best when you want to test influencer marketing with minimal setup and budget, especially for product gifting campaigns on Shopify.
- **Collabstr** — best for brands that want to purchase influencer or UGC content on a per-project basis without subscriptions or long-term commitments. Self-serve marketplace with 250K+ vetted creators across Instagram, TikTok, and YouTube. Transparent upfront pricing — browse, order directly, or post campaigns for creators to apply. Escrow payment protection (funds held until you approve deliverables). Free to search with 10% marketplace fee per transaction. Pro ($299/mo) and Premium ($399/mo) reduce fees and unlock unlimited campaigns. Weaknesses: no Shopify integration, no API, no affiliate tracking, no advanced analytics (EMV, ROAS), smaller database than discovery platforms, limited regional coverage outside US. Best when you need one-off UGC videos or sponsored posts quickly and want the simplicity of marketplace pricing over subscription-based discovery platforms.
- **Cloutboost** — best for gaming companies (publishers, indie studios, mobile game devs). The only influencer platform exclusively focused on gaming — 1.5M+ creator database with game-genre and game-title filters powered by RAWG/IGDB data. Self-serve Portal ($279-$1,029/yr) for discovery, or managed agency service ($5K+ minimum) for end-to-end campaigns including retargeting of influencer content. Also offers gaming PR and media relations. Weaknesses: gaming-only (no non-gaming creators), no built-in outreach or payments on Portal, API is v0.0.1 (early stage), annual billing only. Best when you need gaming-specific creator discovery with game-genre filtering and/or a full-service gaming influencer agency.
- **House of Marketers** — best for brands that want a full-service TikTok-focused agency instead of a self-serve platform. Founded by an ex-TikTok employee with a 50K+ creator network across TikTok, Instagram, YouTube, Twitch, and X. Services include influencer campaigns, paid ads, content creation, strategy, and business profile growth. Campaigns start at $20K+ (custom pricing). Multilingual execution across 5 continents. Strongest when you need TikTok expertise and want an agency to handle everything end-to-end. Weaknesses: no self-serve platform, no API, no dashboard — all reporting is agency-delivered. Not for brands under $20K/campaign budget.
- **Famesters** — best for brands in gaming, fintech, iGaming, or apps that want a full-cycle influencer agency with proprietary analytics. Founded in 2017 as part of the BuzzGuru ecosystem — uses BuzzGuru's analytics platform internally for AI-powered creator discovery, competitor analysis, and campaign measurement. 1000+ brand portfolio including Opera, Konami, PUBG, FxPro. Covers YouTube, TikTok, Instagram, and Twitch. Strongest when you need multi-vertical expertise (gaming + fintech + iGaming + apps in one agency) and data-driven campaign management. Weaknesses: no self-serve platform, no public API, no dashboard — all reporting is agency-delivered. Creator database size not publicly disclosed. Custom pricing (est. $10K+ per campaign).
- **inBeat** — best for DTC, CPG, and mobile app brands that want a full-service agency covering influencer marketing + UGC production + paid media management across Meta, TikTok, Snapchat, and Google in one vendor. Notable clients include 7-Eleven, Bumble, Airbnb, Disney, New Balance. Also offers a free marketing toolkit (ROAS, CPM, CPA calculators and ad mockup generators) at inbeat.co. Note: inBeat's original SaaS influencer discovery database was shut down in March 2026 — only agency services and free tools remain. Best when you need multi-channel campaign execution (not just influencer) and want one agency handling creative + paid amplification. Weaknesses: no self-serve platform, no API, no dashboard — all reporting is agency-delivered. Custom pricing (campaigns $20K+).
- **NeoReach** — best for Fortune 500 and large enterprise brands that want data-driven influencer marketing with optional managed services. 3M+ creator database with 40+ discovery filters and an AI recommendation engine that improves with usage. Proprietary Influencer Media Value (IMV) metric for ROI reporting. Strongest when you need enterprise analytics, competitor spend intelligence, and the option to outsource campaign execution ($25K+ per managed campaign). REST API with 400+ data points for custom integrations. Pricing starts ~$399/mo for small teams but enterprise API access requires $50K+/yr contracts. Weaknesses: enterprise-only pricing excludes SMBs, no public API documentation, limited micro-influencer coverage compared to larger databases (Modash 350M+, Creator.co 400M+), interface can be slow with complex searches.
- **CreatorIQ** — best for global enterprises and agencies running large-scale, multi-market creator programs. Creator Graph (~20M profiles) with AI-powered discovery, SafeIQ brand safety (always-on fraud detection), BenchmarkIQ competitive benchmarking, CreatorIQ Pay (multi-currency payments with tax compliance), and CreatorIQ Recruit (automated creator portals). Deepest affiliate network integrations (CJ, Awin, Impact, Rakuten, Commission Factory, Partnerize). Pre-publish content approval workflow. ExchangeIQ API for CRM/BI integration. Pricing starts ~$30K/yr (enterprise only — no self-serve, 6-8 week implementation). Best when you need enterprise governance, global compliance, multi-market campaign coordination, and deep affiliate attribution at scale. Weaknesses: smaller discovery database than competitors, search filters can return irrelevant results, payment error notifications inconsistent, steep learning curve.

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
- `/sales-brandwatch` — Brandwatch platform help — Consumer Intelligence, Social Media Management, Influence (influencer module), API
- `/sales-meltwater` — Meltwater platform help — media intelligence, social listening, influencer marketing, API
- `/sales-skeepers` — Skeepers platform help — UGC suite (Verified Reviews, Influencer Marketing, Feedback Management, Brand Communities)
- `/sales-heepsy` — Heepsy platform help — influencer discovery (11M+ profiles), analytics, campaigns, CRM, Shopify integration
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS, Creator Graph, SafeIQ, BenchmarkIQ, ExchangeIQ API
- `/sales-afluencer` — Afluencer platform help — micro-influencer marketplace, Collab listings, Shopify gifting
- `/sales-collabstr` — Collabstr platform help — influencer and UGC creator marketplace, escrow payments, campaign posting
- `/sales-cloutboost` — Cloutboost platform help — gaming influencer discovery (1.5M+ creators), campaign management, retargeting, PR
- `/sales-houseofmarketers` — House of Marketers platform help — TikTok-focused agency, influencer campaigns, paid ads, content creation
- `/sales-neoreach` — NeoReach platform help — enterprise influencer marketing, 3M+ creators, AI discovery, fraud detection, IMV analytics, REST API
- `/sales-inbeat` — inBeat platform help — creative growth agency (influencer, UGC, paid media, performance creative), free marketing toolkit
- `/sales-famesters` — Famesters platform help — full-cycle influencer agency (gaming, fintech, iGaming, apps), BuzzGuru analytics
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic growth, paid ads, content creation, influencer strategy, algorithm
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns, budget allocation
- `/sales-later` — Later platform help — includes Later Influence (influencer discovery, campaigns, content review, Reporting API)
- `/sales-sproutsocial` — Sprout Social platform help — includes Influencer Marketing module (Tagger acquisition)
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
