---
name: sales-hypeauditor
description: "HypeAuditor platform help — AI-powered influencer marketing with Influencer Discovery (223.6M+ profiles across Instagram, TikTok, YouTube, X, Twitch, Snapchat), Analytics Reports (35+ metrics, AQS scoring), Fraud Detection (53 patterns, 95%+ accuracy), My Network IRM (CRM), Campaign Management (tracking, content approval, payments, product seeding), Market Analysis (competitor monitoring, benchmarks), Recruitment API, and ecommerce integrations (Shopify, WooCommerce, Magento). Covers Discovery API, Reports API, Campaign Management API, Lists Management API, Market Analysis API, Suggester API, and Gmail sync. Use when searching for influencers in HypeAuditor, analyzing creator audiences, detecting fake followers, setting up campaign tracking, using the HypeAuditor API, configuring ecommerce integrations, or choosing a HypeAuditor plan. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing), TikTok marketing strategy (use /sales-tiktok-marketing), gaming influencer marketing (use /sales-gaming-marketing), or ad campaign strategy (use /sales-retargeting)."
argument-hint: "[describe what you need help with in HypeAuditor]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-discovery, fraud-detection, analytics, platform]
github: "https://github.com/hypeauditor"
---
# HypeAuditor Platform Help

Helps the user with HypeAuditor platform questions — from influencer discovery and fraud detection through audience analysis, campaign management, and API usage.

## Step 1 — Gather context

Ask the user:

1. **What do you need help with?**
   - A) Finding influencers — Discovery search, filters, lookalikes
   - B) Analyzing a creator — audience quality, fraud detection, AQS score
   - C) Campaign management — tracking, content approval, payments
   - D) Market Analysis — competitor monitoring, industry benchmarks
   - E) My Network IRM — managing influencer relationships
   - F) API integration — Reports API, Discovery API, Campaign API
   - G) Ecommerce integration — Shopify, WooCommerce, Magento
   - H) Pricing and plan selection
   - I) Something else — describe it

2. **What's your current setup?**
   - A) New to HypeAuditor — evaluating or just signed up
   - B) Using HypeAuditor for discovery/analytics only
   - C) Using full platform (discovery + campaigns + IRM)
   - D) Integrating via API
   - E) Comparing HypeAuditor to other platforms

3. **What plan are you on?**
   - A) Basic ($299/mo)
   - B) PRO
   - C) Enterprise
   - D) Not sure / free trial
   - E) Evaluating — haven't signed up yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route:
- Influencer marketing strategy across platforms → `/sales-influencer-marketing`
- TikTok marketing strategy → `/sales-tiktok-marketing`
- Gaming influencer marketing → `/sales-gaming-marketing`
- Ad campaign strategy → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`
- Affiliate program design → `/sales-affiliate-program`

Otherwise, answer directly from the platform reference below.

## Step 3 — HypeAuditor platform reference

### Platform overview

HypeAuditor is an AI-powered influencer marketing platform covering the full lifecycle: discover creators, analyze their audiences for authenticity, manage campaigns, track performance, and handle payments — all in one platform.

### Core modules

#### Influencer Discovery
- **Database**: 223.6M+ profiles across Instagram, TikTok, YouTube, X (Twitter), Twitch, and Snapchat
- **Search methods**: Keyword search (content, description, niche), audience demographic filters (geo, age, gender, language), engagement metrics (followers, ER, growth), content performance (likes, views, comments), account type/verification status, brand mention filters
- **Lookalike search**: Find creators similar to a known good performer
- **AI-powered**: Smart niche detection and relevance scoring
- **Results**: Up to 10,000 rows (500 pages), 20 results per page

#### Analytics Reports
- **35+ metrics** per creator profile covering:
  - Account Quality Score (AQS) — overall account health rating
  - Audience demographics (age, gender, location, language)
  - Audience authenticity and bot detection
  - Engagement rate and patterns
  - Content performance metrics
  - Brand mention history
  - Growth trajectory and follower history
  - Rankings (by niche, location)
- **Channel Quality Score** for YouTube
- **PDF export** for client reporting

#### Fraud Detection
- **53 fraud-detection patterns** analyzed per account
- **95%+ detection accuracy** (independently verified)
- Detects: fake followers, bot-generated engagement, engagement pods, purchased followers, suspicious growth spikes
- Integrated into every analytics report — not a separate tool

#### My Network IRM (Influencer Relationship Management)
- Built-in CRM for managing influencer relationships
- Lifecycle tracking — where each influencer is in your pipeline
- Lists and segments for organizing creators
- Gmail sync for email communication
- Notes, tags, and custom fields

#### Campaign Management
- Campaign creation with briefs and deliverables
- Content approval workflows (review before publishing)
- Performance tracking (reach, engagement, conversions)
- Product seeding and gifting workflows
- Creator payments — multi-currency support
- Budget tracking and reporting
- Customizable reporting and dashboards

#### Market Analysis
- Competitor monitoring — track competitor influencer campaigns
- Industry benchmarks — compare your performance to industry averages
- Trend analysis — discover trending topics and creators in your niche
- *Plan-gated*: Available on PRO and Enterprise plans only

#### Recruitment
- Creator outreach and recruitment workflows
- Recruitment API (v1.0) for automated outreach
- Campaign-based recruitment — post briefs and receive applications

### Ecommerce integrations

| Platform | What it does |
|---|---|
| **Shopify** | Product sync, gifting, sales attribution, campaign ROI tracking |
| **WooCommerce** | Product sync, sales tracking |
| **Magento** | Product sync, sales tracking |

### Pricing

*Best-effort — verify with HypeAuditor for current pricing.*

| Plan | Starting price | Key features |
|---|---|---|
| **Basic** | $299/mo (annual) | Discovery (limited filters), Analytics Reports, My Network IRM, Campaign Management |
| **PRO** | Custom (sales call) | + AI Search, Account Quality Score filter, advanced audience parameters, Market Analysis, Competitor Monitoring |
| **Enterprise** | Custom (sales call) | + Full data coverage, expanded limits, API access, dedicated support |

- Annual contracts include discounts; best rates on 2-year agreements
- API access is separately priced (contact sales)
- All plans include all modules but with different usage limits

### Plan-gated features to watch

- **AI Search and advanced Discovery filters** — PRO+ only
- **Account Quality Score filter in Discovery** — PRO+ only
- **Market Analysis and Competitor Monitoring** — PRO+ only
- **API access** — Enterprise only (separately priced)
- **Full data coverage** — Enterprise only

## Step 4 — Actionable guidance

Based on the user's specific question, provide:

1. **Discovery playbook** — how to set up searches and filters for their niche
2. **Vetting workflow** — how to read AQS scores and fraud detection results
3. **Campaign setup** — step-by-step campaign creation with tracking
4. **API integration** — authentication, endpoints, rate limits, pagination
5. **Ecommerce setup** — connecting Shopify/WooCommerce/Magento for sales tracking
6. **Plan recommendation** — which tier fits their needs and budget

For API integration questions, refer to the detailed [HypeAuditor API Reference](references/hypeauditor-api-reference.md).

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Advanced Discovery filters are plan-gated.** The AI Search, Account Quality Score filter, and advanced audience parameters are only available on PRO and above. Basic plan gets limited filters — verify which filters you need before choosing a plan.
- **Market Analysis is PRO+ only.** Competitor monitoring and industry benchmarks require PRO or Enterprise. If competitive intelligence is a priority, factor this into plan selection.
- **API is Enterprise-only and separately priced.** Don't assume API access comes with your plan — it requires a separate agreement and additional cost.
- **v1 API is deprecated.** As of August 2024, v=1 is deprecated. Make sure any integration code uses v=2. If you're on an older integration, migrate before it breaks.
- **Rate limit is 100 requests per minute.** The API returns HTTP 429 if exceeded. Build in backoff logic for batch operations.
- **Report processing is async.** The API may return HTTP 202 with a `retryTtl` field — this means the report is still being generated. Poll after the retry interval.
- **Discovery results cap at 10,000.** Regardless of how broad your search is, you'll get a maximum of 500 pages (20 results each). Use tighter filters to find the right creators rather than browsing all results.
- **Ecommerce integrations vary in depth.** Shopify has the deepest integration (product sync, gifting, sales attribution). WooCommerce and Magento are more limited — verify which features you need before relying on them.
- **Gmail sync is one-way.** Gmail integration syncs email communication into My Network IRM but may not support all email workflows. Verify the sync direction and limitations for your use case.
- **Pricing increases over time.** Multiple reviewers report annual price increases. Lock in pricing with longer-term contracts if budget predictability matters.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across all platforms — discovery, vetting, campaigns, ROI
- `/sales-modash` — Modash platform help — Shopify-focused discovery, gifting, payments, API
- `/sales-infludata` — influData platform help — AI creator search, audience analysis, social listening
- `/sales-creatorco` — Creator.co platform help — London AI agent, UGC rights, affiliate tracking
- `/sales-hypefy` — Hypefy platform help — AI campaigns, zero-subscription, content review
- `/sales-heepsy` — Heepsy platform help — budget-friendly discovery, Shopify integration
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS, SafeIQ, ExchangeIQ API
- `/sales-neoreach` — NeoReach platform help — enterprise influencer marketing, fraud detection, REST API
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic, paid, content, influencer
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamers, game launches
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Find micro-influencers in a specific niche
**User says**: "I want to find beauty micro-influencers on Instagram in the US with high engagement"
**Skill does**:
1. Walks through Discovery search setup: keyword "beauty", platform Instagram, geo US
2. Recommends filters: followers 10K-100K, engagement rate >3%, audience location US >60%
3. Shows how to use AQS filter (PRO+) to automatically exclude low-quality accounts
4. Explains how to save results to a list in My Network IRM
5. Recommends vetting the shortlist with fraud detection reports
**Result**: Targeted search strategy with filters optimized for micro-influencer quality

### Example 2: Verify if an influencer has fake followers
**User says**: "A creator with 500K followers wants $5,000 for a post — how do I check if their audience is real?"
**Skill does**:
1. Shows how to pull the creator's Analytics Report (username search)
2. Explains AQS score interpretation: what's good (>60), concerning (<40), deal-breaker (<25)
3. Walks through fraud detection flags: bot %, suspicious growth patterns, engagement pod indicators
4. Highlights audience demographics: are their followers in the right country/age range?
5. Compares the $5,000 ask to benchmarks for their actual authentic reach
**Result**: Data-driven decision on whether the creator's audience justifies the price

### Example 3: Set up API integration for creator reports
**User says**: "I want to pull creator analytics into our internal dashboard via the HypeAuditor API"
**Skill does**:
1. Confirms Enterprise plan or API agreement is in place
2. Walks through authentication setup: X-Auth-Id + X-Auth-Token headers
3. Shows the Reports endpoint: `GET /auditor.report/?username={username}`
4. Explains async processing (202 status + retryTtl) and how to handle it
5. Covers rate limiting (100 req/min) and cursor-based pagination
6. Points to the API reference for full endpoint documentation
**Result**: Working API integration plan with auth, endpoints, and error handling

## Troubleshooting

### Discovery search returns irrelevant results
**Symptom**: Searching for "fitness" creators but getting unrelated accounts
**Cause**: Keyword search is broad — it searches content, descriptions, and niches. Without additional filters, results include anyone who mentioned fitness once.
**Solution**: Use `niche_search` instead of `search` for more targeted niche matching. Add audience demographic filters (location, age, gender) to narrow results. Use the AI Search feature (PRO+) for better semantic matching. Start with tight filters and expand gradually rather than casting a wide net.

### API returning 402 (Insufficient Credits)
**Symptom**: API calls fail with 402 error
**Cause**: Your API credit balance is depleted. Each report or discovery call consumes credits based on your agreement.
**Solution**: Check `restTokens` in any successful API response to see remaining credits. Contact your account manager to purchase additional credits or upgrade your API agreement. Implement credit tracking in your integration to alert before running out.

### Campaign ROI not matching ecommerce data
**Symptom**: HypeAuditor campaign metrics show different numbers than your Shopify/WooCommerce dashboard
**Cause**: Attribution window differences, delayed data sync, or promo code usage not captured by the integration
**Solution**: Verify the ecommerce integration is properly connected and syncing. Check that promo codes assigned to creators are correctly configured in both HypeAuditor and your ecommerce platform. Allow 24-48 hours for data to fully sync. For discrepancies, use the ecommerce platform as the source of truth for revenue and HypeAuditor for engagement and reach metrics.
