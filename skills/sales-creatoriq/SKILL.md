---
name: sales-creatoriq
description: "CreatorIQ platform help — enterprise influencer marketing OS with Creator Graph (20M+ profiles), creator discovery, audience analysis, campaign execution, CreatorIQ Pay (payments), SafeIQ (brand safety/fraud detection), BenchmarkIQ (competitive benchmarking), ExchangeIQ (API integrations), and affiliate attribution via CJ/Awin/Impact/Rakuten. Use when setting up CreatorIQ campaigns, configuring creator discovery filters, managing creator payments via CreatorIQ Pay, interpreting BenchmarkIQ reports, connecting ExchangeIQ API, troubleshooting SafeIQ alerts, or comparing CreatorIQ to other influencer platforms. Do NOT use for influencer marketing strategy across platforms (use /sales-influencer-marketing), affiliate program design (use /sales-affiliate-program), or ad campaign strategy (use /sales-retargeting)."
argument-hint: "[describe what you need help with in CreatorIQ — e.g., 'set up a campaign for beauty creators on TikTok' or 'connect CreatorIQ to my CRM via ExchangeIQ']"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, platform, enterprise]
---

# CreatorIQ Platform Help

Helps the user set up and get the most out of CreatorIQ — the enterprise operating system for creator-led growth. Covers creator discovery via the Creator Graph, campaign execution, creator payments, brand safety, competitive benchmarking, and API integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Creator discovery and search (finding the right influencers)
   - B) Campaign setup and execution
   - C) Creator payments (CreatorIQ Pay)
   - D) Brand safety and fraud detection (SafeIQ)
   - E) Competitive benchmarking (BenchmarkIQ)
   - F) API integrations (ExchangeIQ)
   - G) Reporting and measurement
   - H) Creator recruitment and onboarding (CreatorIQ Recruit)
   - I) Ecommerce and attribution (CreatorIQ Convert)
   - J) Something else — describe it

2. **What social platforms are you targeting?**
   - A) Instagram
   - B) TikTok
   - C) YouTube
   - D) Facebook
   - E) Snapchat
   - F) Amazon
   - G) Multiple — which ones?

3. **What's your team setup?**
   - A) Single brand, in-house team
   - B) Agency managing multiple brands
   - C) Enterprise with multiple markets/teams
   - D) Just evaluating CreatorIQ

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Influencer marketing strategy (not CreatorIQ-specific) → `/sales-influencer-marketing`
- Affiliate program design → `/sales-affiliate-program`
- Ad retargeting strategy → `/sales-retargeting`
- Email marketing → `/sales-email-marketing`
- Social listening strategy → `/sales-social-listening`

Otherwise, answer directly from the platform reference below.

## Step 3 — CreatorIQ platform reference

### The Creator Graph

CreatorIQ's proprietary intelligence infrastructure powering creator discovery and evaluation.

- **Database**: ~20M creator profiles across Instagram, TikTok, YouTube, Facebook, Snapchat, and Amazon
- **AI-powered search**: Search by topic, audience demographics, content style, engagement patterns, brand affinity, and past partnerships
- **Lookalike discovery**: Find creators similar to your top performers
- **Audience analysis**: Demographics, interests, brand affinity, geographic distribution, and audience overlap between creators
- **Fraud detection**: AI-powered fake follower and engagement fraud scoring (part of SafeIQ)

### Creator Management CRM

- **Creator profiles**: Centralized view of all creator data, past campaigns, content history, and performance metrics
- **Custom fields and tags**: Organize creators by campaign, tier, category, or any custom taxonomy
- **Creator lists**: Build and share curated lists across teams
- **Notes and activity history**: Track all interactions with each creator
- **Relationship stages**: Track creators through recruitment → onboarding → active → alumni pipeline

### Campaign Execution

- **Campaign creation**: Set objectives, briefs, timelines, deliverables, and budgets
- **Content review**: Approve creator content before publishing (pre-publish approval workflow)
- **Content tracking**: Auto-detect published posts across platforms — no creator signup or manual URL submission required
- **Performance dashboards**: Real-time metrics — impressions, reach, engagement, video views, clicks, conversions
- **Multi-market campaigns**: Run campaigns across regions with market-specific creator pools and budgets

### CreatorIQ Recruit

Streamlines creator recruitment and onboarding:
- **Automated portals**: Creators apply to campaigns through branded portals
- **Personalized outreach**: Built-in outreach tools with templates and bulk messaging
- **Onboarding workflows**: Automated contract management, brand guidelines distribution, and compliance checks
- **DocuSign integration**: Electronic contract signing built into the workflow

### CreatorIQ Convert

Ecommerce and attribution module:
- **Affiliate integrations**: Native connections to CJ, Awin, Impact, Rakuten Advertising, Commission Factory, and Partnerize
- **Coupon code tracking**: Assign unique codes per creator and track redemptions
- **Affiliate link tracking**: Generate and monitor affiliate links with conversion attribution
- **Shopify integration**: Product gifting, order creation, and sales attribution
- **ROI and ROAS reporting**: Calculate return on influencer spend at the campaign and creator level

### CreatorIQ Pay

Built-in creator payment processing:
- **Global payments**: Pay creators in multiple currencies and regions
- **Tax compliance**: Automated tax form collection and 1099 reporting (US)
- **Payment scheduling**: Set up one-time or milestone-based payments
- **Budget tracking**: Monitor spend against campaign budgets in real time
- **Payment status**: Track pending, processing, and completed payments per creator

### SafeIQ

AI-powered brand safety and fraud detection:
- **Fake follower detection**: Automatically flags suspicious follower patterns and bot accounts
- **Engagement authenticity**: Scores engagement quality — distinguishes genuine interactions from artificial inflation
- **Content safety scanning**: Monitors creator content for brand-unsafe topics, language, or imagery
- **Always-on monitoring**: Continuous scanning across all creators in your community, not just during campaigns
- **Risk alerts**: Proactive notifications when a creator's safety profile changes

### BenchmarkIQ

Competitive benchmarking module:
- **Industry benchmarks**: Compare your creator program performance against category peers
- **Share of voice**: Track your brand's influencer share of voice vs competitors
- **Trending creators**: Identify creators gaining momentum in your category
- **Program health metrics**: Benchmark creator engagement rates, content frequency, and ROI against industry standards

### ExchangeIQ (API)

Enterprise API for connecting CreatorIQ data to your tech stack:
- **Authentication**: API key via `x-api-key` header — contact support@creatoriq.com or your CreatorIQ rep to obtain
- **Format**: JSON-based, encrypted via SSL/TLS
- **CRM Publishers API**: Sync creator data with your CRM (Salesforce, HubSpot, etc.)
- **Campaign data endpoints**: Export campaign performance, creator lists, and content data
- **Reporting endpoints**: Pull metrics into BI tools (Tableau, Looker, Google Analytics)
- **Link-Tracking API**: Separate API at linktracking-apidoc.creatoriq.com for attribution data
- **Docs**: apidocs.creatoriq.com (requires authentication for full endpoint reference)

### Key Integrations

| Category | Integrations |
|---|---|
| **Social platforms** | Instagram, TikTok, YouTube, Facebook, Snapchat, Amazon |
| **Ecommerce** | Shopify |
| **Affiliate networks** | CJ, Awin, Impact, Rakuten Advertising, Commission Factory, Partnerize |
| **Business tools** | Sprinklr, Google Analytics, Tableau, DocuSign |

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Discovery playbook** — how to use Creator Graph filters, lookalikes, and audience analysis to find the right creators
2. **Campaign setup** — step-by-step campaign creation with briefs, deliverables, timelines, and content review workflows
3. **Payment workflow** — setting up CreatorIQ Pay, tax compliance, milestone payments, and budget tracking
4. **Safety configuration** — interpreting SafeIQ alerts, setting brand safety thresholds, responding to flagged creators
5. **API integration** — connecting ExchangeIQ to CRM, BI tools, or custom data pipelines
6. **Benchmarking** — using BenchmarkIQ to measure program health and competitive positioning
7. **Attribution** — setting up affiliate tracking via CJ/Awin/Impact, coupon codes, and Shopify integration

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Creator database is smaller than some competitors.** CreatorIQ indexes ~20M profiles vs Modash (350M+), Creator.co (400M+), or Influencity (200M+). The database is curated and enterprise-focused, but if you need maximum reach into nano/micro creators, you may need to supplement with another discovery tool.
- **Discovery filters may return irrelevant results.** Multiple G2 reviewers report that search filters don't always narrow results accurately — the platform sometimes surfaces creators that don't match specified criteria. Use Creator Graph search as a starting point, then manually vet the shortlist.
- **Enterprise pricing only — no self-serve.** Pricing starts ~$30K-36K/yr and requires a sales process. No monthly plans, no free tier, no self-serve signup. Implementation can take 6-8 weeks. This is not a platform for SMBs or individual marketers.
- **Payment error notifications are inconsistent.** G2 reviews mention that CreatorIQ Pay doesn't always proactively notify when a payment fails or is delayed. Creators may follow up about missing payments before you know there's an issue. Monitor payment status dashboards regularly.
- **Platform can feel slow and overwhelming.** Enterprise-grade features come with enterprise-grade complexity. Navigation requires multiple clicks and separate windows. New users report a steep learning curve — invest in onboarding and training.
- **ExchangeIQ API key requires manual provisioning.** You can't generate API keys self-serve. Contact support@creatoriq.com or your CreatorIQ account rep to request API access.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy — platform comparison, creator discovery, vetting, campaign tracking, ROI measurement
- `/sales-affiliate-program` — Affiliate and referral program design (strategy, not platform-specific)
- `/sales-modash` — Modash platform help — largest database (350M+), Shopify-first workflow
- `/sales-infludata` — influData platform help — deep audience analytics, social listening
- `/sales-creatorco` — Creator.co platform help — AI-automated matching, UGC rights
- `/sales-hypefy` — Hypefy platform help — zero-subscription, AI campaign automation
- `/sales-ltk` — LTK platform help — creator commerce, commission-based model
- `/sales-influencity` — Influencity platform help — 200M+ creators, Social Hub
- `/sales-meltwater` — Meltwater platform help — media intelligence + influencer marketing
- `/sales-skeepers` — Skeepers platform help — UGC suite, pre-vetted micro/nano creators
- `/sales-heepsy` — Heepsy platform help — affordable influencer discovery (11M+ profiles)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up a TikTok campaign for beauty creators
**User says**: "I need to find 50 beauty micro-influencers on TikTok for a product launch campaign"
**Skill does**:
1. Walks through Creator Graph search with beauty + TikTok filters, follower range 10K-100K
2. Recommends using lookalike discovery from existing top-performing creators
3. Sets up campaign with brief, deliverables (2 TikToks each), timeline, and budget
4. Configures content review workflow for pre-publish approval
5. Sets up CreatorIQ Pay with milestone payments (50% on content approval, 50% on publish)
**Result**: Complete campaign setup from discovery through payment with 50 beauty micro-influencers

### Example 2: Connect CreatorIQ to Salesforce via ExchangeIQ
**User says**: "How do I sync creator data from CreatorIQ into our Salesforce CRM?"
**Skill does**:
1. Explains ExchangeIQ API authentication (x-api-key header)
2. Walks through CRM Publishers API endpoints for syncing creator profiles
3. Maps CreatorIQ creator fields to Salesforce custom objects
4. Sets up automated sync schedule for campaign performance data
5. Notes: API key must be requested from support@creatoriq.com
**Result**: Working CRM integration plan with field mappings and sync configuration

### Example 3: Investigate a SafeIQ brand safety alert
**User says**: "SafeIQ flagged one of our top creators — what should I do?"
**Skill does**:
1. Explains how to read SafeIQ risk scores and alert types
2. Distinguishes between fake follower flags vs content safety flags
3. Walks through investigation workflow: review flagged content, check engagement patterns, compare to historical scores
4. Recommends response options: pause, investigate further, or clear if false positive
5. Notes that SafeIQ runs continuously — a one-time flag may resolve or escalate
**Result**: Clear action plan for investigating and responding to the brand safety alert

## Troubleshooting

### Creator discovery returns irrelevant results
**Symptom**: Filters are set but results include creators who don't match your criteria
**Cause**: Creator Graph search uses AI matching that can be overly broad, especially for niche categories or combined filters
**Solution**: Start with fewer filters and progressively narrow. Use lookalike discovery from a known-good creator instead of keyword search. Cross-reference results with audience analysis to verify demographic fit before adding to campaigns. If a specific filter (e.g., location) consistently returns wrong results, report to your CreatorIQ account rep.

### Creator payment shows "pending" for days
**Symptom**: Payment was initiated via CreatorIQ Pay but hasn't processed
**Cause**: Missing tax forms (W-9/W-8BEN), incorrect banking details, or payment processing delays. The platform may not proactively notify you of errors.
**Solution**: Check the payment status dashboard for error messages. Verify the creator has submitted required tax forms. Confirm banking details are correct. For international payments, check currency and routing requirements. Proactively message the creator if payment is delayed more than 5 business days. Contact CreatorIQ support if the issue persists.

### ExchangeIQ API returns authentication errors
**Symptom**: API calls return 401 or 403 errors
**Cause**: API key not provisioned, expired, or incorrect header format
**Solution**: Verify you're passing the key in the `x-api-key` header (not Authorization). Confirm your key is active — contact support@creatoriq.com if unsure. Check that your API access level matches the endpoints you're calling (some endpoints may require higher-tier access). API docs at apidocs.creatoriq.com may require separate authentication to view.
