---
name: sales-aspire
description: "Aspire platform help — word-of-mouth commerce for influencer marketing, product seeding, affiliate tracking, UGC sourcing, and paid social. Covers Discovery (170M+ profiles, Quickmatch AI, image recognition), Campaign Management (lifecycle tracking, content approval, term sheets), Product Seeding (Shopify gifting, shipping), Affiliate Tracking (promo codes, attribution), UGC & Content (library, repurposing for ads), Paid Social (TikTok Spark Ads, Meta whitelisting), Creator Payments (free processing). Integrates with Shopify, WooCommerce, Meta, TikTok, Pinterest, Klaviyo, CJ, Impact, ShareASale/Awin. Use when setting up Aspire campaigns, configuring Shopify product seeding, building affiliate programs in Aspire, managing content approvals, using Aspire discovery, choosing an Aspire plan, or connecting Aspire integrations. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing) or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in Aspire]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, product-seeding, affiliate-tracking, ugc, platform]
---
# Aspire Platform Help

Helps the user with Aspire (formerly AspireIQ) platform questions — from influencer discovery and product seeding through campaign management, affiliate tracking, and content repurposing for paid ads.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding influencers — Discovery search, Quickmatch, image recognition
   - B) Campaign management — creating campaigns, tracking lifecycle, content approval
   - C) Product seeding — Shopify gifting, shipping, variant selection
   - D) Affiliate tracking — promo codes, trackable links, sales attribution
   - E) UGC and content — sourcing, rights, repurposing for ads
   - F) Paid social — TikTok Spark Ads, Meta whitelisting, ad amplification
   - G) Creator payments — processing, invoicing
   - H) Analytics and reporting — campaign ROI, EMV, performance metrics
   - I) Pricing and plan selection
   - J) Something else — describe it

2. **What's your current setup?**
   - A) New to Aspire — evaluating or just signed up
   - B) Using Aspire Basic (1 user, 1 campaign)
   - C) Using Aspire Pro (4 users, 4 campaigns)
   - D) Using Aspire Enterprise (unlimited users, 10 campaigns)
   - E) Migrating from another platform — which one?

3. **What ecommerce platform do you use?**
   - A) Shopify
   - B) WooCommerce
   - C) Other / none

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a different skill, route:
- Influencer strategy across platforms (choosing a tool, vetting framework, rate benchmarks) → `/sales-influencer-marketing`
- TikTok marketing strategy (organic, paid, algorithm) → `/sales-tiktok-marketing`
- Gaming influencer campaigns → `/sales-gaming-marketing`
- Affiliate program design (strategy, not Aspire-specific) → `/sales-affiliate-program`
- UGC galleries / shoppable content → `/sales-tagshop`
- Ad retargeting strategy → `/sales-retargeting`
- Email marketing to subscribers → `/sales-email-marketing`

Otherwise, answer directly from the platform reference below.

## Step 3 — Aspire platform reference

### Platform overview

Aspire (formerly AspireIQ, founded 2014) is a word-of-mouth commerce platform built for ecommerce brands. It operationalizes influencer, ambassador, affiliate, and UGC programs at scale.

| Feature | Details |
|---|---|
| **Database** | 170M+ creator profiles across Instagram, TikTok, YouTube, Pinterest |
| **Discovery methods** | Keyword/hashtag search, Quickmatch (swipe-style browsing), AI image recognition, competitor monitoring, creator marketplace (1M+ opt-in creators) |
| **Campaign management** | End-to-end lifecycle tracking, digital term sheets, content collaboration, automated reminders for overdue content |
| **Product seeding** | Native Shopify integration — auto-create orders, variant selection, shipping tracking, bulk promo code generation |
| **Affiliate tracking** | Unique promo codes and trackable affiliate links per creator, Shopify sales attribution |
| **Content & UGC** | Content library, content approval workflow, repurposing for paid ads |
| **Paid social** | TikTok Spark Ads integration, Meta/Facebook Ads whitelisting, content amplification |
| **Creator payments** | Free payment processing (rare in the industry — most platforms charge fees) |
| **Social listening** | Brand mention tracking, competitor watchlist monitoring |
| **Review generation** | Influencer-driven product review collection |
| **Analytics** | Individual creator performance, campaign summaries, EMV, ROI tracking |

### Integrations

| Integration | What it does |
|---|---|
| **Shopify** | Product sync, automated order creation for gifting, promo code generation, affiliate sales tracking, customer data sync (auto-refreshes daily) |
| **WooCommerce** | Product sync, basic ecommerce integration |
| **Meta / Facebook Ads** | Content repurposing for paid social, whitelisting creator accounts |
| **TikTok** | Spark Ads integration — boost creator organic posts as paid ads |
| **Pinterest** | Creator content tracking |
| **Slack** | Campaign notifications, team collaboration |
| **Gmail** | Creator outreach email sync |
| **Microsoft Outlook** | Branded creator communication and shared inbox management |
| **Klaviyo** | Sync influencer contacts to CRM for email nurture sequences |
| **CJ** | Centralize conversion data for affiliate performance measurement |
| **Impact** | Affiliate link integration for sales tracking and creator payments |
| **ShareASale / Awin** | Track affiliate clicks, conversions, and payouts across systems |
| **PayPal** | Direct creator payment processing |
| **Chrome Extension** | Search, invite, and import creators to campaigns directly from your browser |

### Shopify integration deep dive

The Shopify integration is Aspire's strongest ecommerce connector:

1. **Data sync** — connects via OAuth, pulls customer purchase data, enriches with social engagement data and brand mentions. Auto-syncs every morning.
2. **Product seeding** — creators accept gifting offers, pick variants, enter shipping info. Orders auto-create in Shopify and ship through your normal fulfillment.
3. **Promo codes** — bulk create unique Shopify promo codes and affiliate links per creator without leaving Aspire.
4. **Attribution** — track which creators drive sales through promo code usage and affiliate link clicks.

### Discovery methods

| Method | How it works | Best for |
|---|---|---|
| **Keyword/hashtag search** | Search by content topic, bio keywords, hashtags | Finding creators in a specific niche |
| **Quickmatch** | Tinder-style swipe browsing of creator profiles | Quick discovery sessions, exploring new niches |
| **Image recognition AI** | Find creators posting content similar to a reference image | Visual brand alignment (fashion, food, beauty) |
| **Competitor monitoring** | Track which creators work with competitors | Poaching competitor creators, market intelligence |
| **Creator marketplace** | 1M+ opt-in creators browse and apply to your campaigns | Inbound creator interest, reducing cold outreach |
| **Social listening** | Brand mention tracking across platforms | Finding organic advocates already talking about your brand |

### Campaign workflow

1. **Create campaign** — set objectives, deliverables, timeline, compensation (paid, gifted, or affiliate)
2. **Discover & invite** — use any discovery method to find creators, send invitations
3. **Negotiate terms** — digital term sheets with deliverables, timeline, compensation, usage rights
4. **Ship products** — if gifting, products auto-ship via Shopify integration
5. **Content creation** — creators produce content, submit for review
6. **Content approval** — review and approve before publishing (or set auto-approve)
7. **Track performance** — monitor posts, engagement, promo code usage, sales
8. **Pay creators** — free payment processing through Aspire
9. **Repurpose content** — license approved content for paid social ads (Spark Ads, Meta)

### Pricing

*Best-effort from research — verify with Aspire sales for current pricing.*

| Tier | Users | Campaigns | Key features |
|---|---|---|---|
| **Basic** | 1 | 1 | Core discovery, campaign management, analytics |
| **Pro** | 4 | 4 | Everything in Basic + dedicated success manager, social listening, competitor tracking (up to 5 competitors) |
| **Enterprise** | Unlimited | 10 | Everything in Pro + dedicated success team, automated e-signature legal contracts, customizable media values for ROI |

- Custom pricing starting ~$2,300/mo (yearly commitment required)
- No free tier or self-serve signup — demo required
- Free payment processing included on all plans

### API

Aspire has an API but documentation is not publicly accessible. The legacy AspireIQ API docs existed on Apiary (aspireiq.docs.apiary.io) but are no longer maintained as public documentation.

To access the API:
1. Contact your Aspire account manager
2. API keys are generated in Account Settings > API Keys
3. Authentication: OAuth 2.0 client credentials flow (Client ID + Client Secret → Bearer token)

*Flag: API details are limited — verify capabilities and endpoints with Aspire support before building integrations.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Discovery playbook** — which search method to use and when, building creator shortlists
2. **Seeding program** — Shopify setup, product selection, creator outreach, tracking who posts
3. **Affiliate setup** — promo code structure, commission rates, attribution tracking
4. **Campaign execution** — campaign creation, term sheets, content approval workflow
5. **Content strategy** — UGC sourcing, rights management, repurposing for paid social
6. **ROI analysis** — which metrics to track, benchmarking against industry averages
7. **Plan selection** — which tier fits their team size, campaign volume, and budget

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Quickmatch recommendations can be irrelevant.** Multiple reviewers report the AI discovery algorithm recommends creators that don't match their niche or audience criteria. Supplement Quickmatch with manual keyword search and competitor monitoring for higher-quality results.
- **Page load times can be slow.** Users report occasional sluggishness in the browser interface, especially when managing multiple campaigns. Clear browser cache, reduce open campaigns, or contact support if persistent.
- **No transparent pricing.** All pricing is custom and requires a sales call. Budget ~$2,300/mo minimum with a yearly commitment. No month-to-month option.
- **Creators ghost after receiving products.** This is an industry-wide problem, not Aspire-specific. Use contracted gifting with clear deliverables in digital term sheets rather than no-strings gifting to improve post rates.
- **Content guidelines are rigid to customize.** The contract/brief builder can be limiting for complex campaign requirements. Some teams draft terms externally and attach them as documents.
- **Running multiple campaigns is clunky on Basic/Pro.** Campaign limits are strict (1 on Basic, 4 on Pro). If you need 5+ concurrent campaigns, you need Enterprise.
- **Yearly commitment required.** No month-to-month plans. Test with a demo and trial before committing.
- **Only Shopify and WooCommerce for ecommerce.** No BigCommerce, Magento, or other platform integrations. If you're not on Shopify or WooCommerce, product seeding and affiliate tracking require manual workarounds.
- **API docs are not public.** You need an account manager to access API documentation and credentials.
- **Creator database quality can be inconsistent.** Shopify App Store reviewers report scarce results for popular hashtags (sometimes <10 results), inaccurate user data, and undeliverable email addresses. Cross-reference with a second discovery method if results look thin.
- **Instagram lookalike search was removed.** You can no longer find creators with similar audiences to your top performers via lookalike search on Instagram. Use keyword search, competitor monitoring, or image recognition AI as alternatives.
- **Post tracking relies on creator tagging.** Aspire requires creators to submit content via briefs or tag the brand. If they tag incorrectly or forget, you have to manually find their posts.
- **PayPal payments are USD-only.** International creators get hit with currency conversion fees on their agreed rates. Factor this into compensation discussions with non-US creators.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — discovery, vetting, outreach, campaign tracking, ROI measurement
- `/sales-affiliate-program` — Affiliate and referral program design (strategy, not platform-specific)
- `/sales-hypeauditor` — HypeAuditor platform help — AI analytics, fraud detection, Discovery API
- `/sales-modash` — Modash platform help — Shopify gifting, affiliate tracking, 350M+ profiles
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS, Creator Graph, SafeIQ
- `/sales-tagshop` — UGC video ads and shoppable galleries for ecommerce
- `/sales-retargeting` — Retargeting campaign audiences from influencer content
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic growth, paid ads, influencer strategy
- `/sales-gaming-marketing` — Gaming influencer marketing strategy
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up a product seeding campaign on Shopify
**User says**: "I want to send free products to 100 micro-influencers through Aspire and track who posts"
**Skill does**:
1. Walks through Shopify integration setup (OAuth connection, product sync)
2. Configures a gifting campaign with contracted deliverables (1 post + 2 stories)
3. Sets up discovery using keyword search + Quickmatch for creator shortlisting
4. Creates digital term sheets with clear expectations and timeline
5. Explains how to track content submissions, post rates, and sales via promo codes
**Result**: End-to-end seeding program with Shopify automation and tracking

### Example 2: Build an influencer affiliate program
**User says**: "How do I set up affiliate tracking for my influencers in Aspire?"
**Skill does**:
1. Creates unique promo codes per creator via Shopify integration
2. Sets up trackable affiliate links for each creator
3. Configures commission structure (flat or % of attributed sales)
4. Explains sales attribution tracking in Aspire analytics
5. Recommends tiered commissions for top performers
**Result**: Working affiliate program with per-creator attribution

### Example 3: Repurpose influencer content for paid ads
**User says**: "I have great UGC from my Aspire campaign — how do I use it in paid social?"
**Skill does**:
1. Checks content rights in digital term sheets (usage rights for ads)
2. Walks through TikTok Spark Ads setup (boosting creator organic posts)
3. Shows Meta/Facebook Ads whitelisting for creator account amplification
4. Recommends A/B testing top-performing organic content as paid ads
5. Sets up tracking to measure paid amplification ROI vs organic performance
**Result**: Content repurposing workflow from Aspire to TikTok and Meta paid campaigns

## Troubleshooting

### Discovery returns irrelevant creators
**Symptom**: Quickmatch or search results show creators that don't match your niche
**Cause**: AI algorithm recommendations can be broad, especially for niche categories
**Solution**: Use keyword/hashtag search with specific terms instead of Quickmatch for niche targeting. Layer filters (location, follower count, engagement rate) to narrow results. Use competitor monitoring to find creators already working in your space. Consider the creator marketplace for inbound applications from interested creators.

### Shopify orders not syncing
**Symptom**: Product seeding orders aren't appearing in Shopify or data isn't refreshing
**Cause**: OAuth connection may need reauthorization, or sync hasn't run yet (daily morning sync)
**Solution**: Check the Shopify integration status in Aspire settings. Disconnect and reconnect the OAuth if needed. Data syncs automatically every morning — if you need immediate data, wait for the next sync cycle or contact support for a manual refresh.

### Creators not submitting content on time
**Symptom**: Creators accepted the campaign but haven't submitted content by the deadline
**Cause**: Aspire sends automated reminder emails for overdue content, but creators may ignore them. The platform doesn't penalize creators for ghosting.
**Solution**: Set clear deadlines in digital term sheets. Use Aspire's automated reminder system (triggers for overdue content and unaccepted offers). Follow up directly via email or DM outside Aspire. For future campaigns, vet creators more carefully and prefer creators with high completion rates from past campaigns.
