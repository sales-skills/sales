---
name: sales-influencity
description: "Influencity platform help — all-in-one influencer marketing with Discover (200M+ profiles on Instagram, TikTok, YouTube), IRM (influencer relationship management, audience analysis, fake follower detection), Campaigns (workflow visualization, Shopify gifting, coupon tracking, bulk email outreach), Reports (publication performance, PDF/Excel export), Social Hub (multi-channel content calendar, approval workflows), Monitoring (brand tracking, competitor analysis, 100M+ sources), Social Media Inbox, Analytics, Content Planner, and Influencer Payments. Covers credit system (Monthly Results, Monthly Analyses, Monthly Post Analyses), recruitment landing pages, and email integration. Use when Influencity campaigns aren't delivering expected results, discovery searches return irrelevant creators, IRM data is messy or incomplete, campaign reporting doesn't match actual performance, Shopify gifting isn't tracking properly, Social Hub posts aren't publishing, Monitoring misses mentions, or unsure which Influencity plan to choose. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing), ad campaign strategy (use /sales-retargeting), email marketing to subscribers (use /sales-email-marketing), or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in Influencity]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-discovery, campaign-tracking, social-listening, platform]
github: "https://github.com/influencity"
---
# Influencity Platform Help

Helps the user set up and optimize Influencity for influencer discovery, relationship management, campaign tracking, social media management, and brand monitoring.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding and discovering influencers (Discover)
   - B) Managing influencer relationships and data (IRM)
   - C) Setting up or running a campaign (Campaigns)
   - D) Tracking post performance and reporting (Reports)
   - E) Social media content planning and publishing (Social Hub)
   - F) Brand monitoring and competitor analysis (Monitoring)
   - G) Influencer payments
   - H) Shopify integration or product gifting
   - I) Choosing the right Influencity plan
   - J) Something else — describe it

2. **Which Influencity plan are you on?**
   - A) Professional
   - B) Business
   - C) Enterprise
   - D) Free trial
   - E) Not sure / haven't signed up yet

3. **What platforms do you need to cover?**
   - A) Instagram
   - B) TikTok
   - C) YouTube
   - D) Multiple — which ones?

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a different skill, route:
- Influencer strategy across platforms → `/sales-influencer-marketing`
- Modash, influData, Creator.co, Hypefy, or LTK specifics → `/sales-modash`, `/sales-infludata`, `/sales-creatorco`, `/sales-hypefy`, `/sales-ltk`
- Ad campaign strategy → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`
- Affiliate program design (not influencer-specific) → `/sales-affiliate-program`
- UGC galleries / shoppable content → `/sales-tagshop`

Otherwise, answer directly from the platform reference below.

## Step 3 — Influencity platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Discovery playbook** — search strategy, filter combinations, credit-efficient workflows
2. **IRM setup** — list organization, tagging strategy, audience overlap analysis
3. **Campaign plan** — workflow setup, gifting config, outreach templates, tracking setup
4. **Reporting setup** — which URLs to track, metrics to focus on, export formats
5. **Social Hub config** — content calendar setup, approval workflows, team collaboration
6. **Monitoring setup** — brand keywords, competitor tracking, alert configuration
7. **Plan recommendation** — which tier fits their volume and feature needs

**Credit optimization tips:**
- Use Discover filters aggressively before browsing results to minimize wasted Monthly Results
- Save promising creators to IRM lists immediately — re-searching wastes credits
- Batch your IRM analyses — analyze all shortlisted creators in one session rather than checking back repeatedly
- Use Reports selectively — prioritize analyzing top-performing publications, not every post

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Credits run out faster than expected.** Users frequently report running out of Monthly Analyses before they finish vetting creators. Plan your discovery → analysis workflow carefully. Use Discover filters to narrow before spending analysis credits.
- **Post tracking is manual.** You must input post URLs yourself to track performance — Influencity does not auto-detect influencer publications. This creates administrative overhead for large campaigns. Establish a process for creators to submit their post URLs.
- **No Instagram Stories or YouTube Shorts auto-tracking.** Ephemeral content (Stories) and short-form content (Shorts) cannot be tracked automatically. Creators must share their own analytics for these formats.
- **Shopify only for ecommerce.** No native integration with WooCommerce, BigCommerce, or Magento. If you're not on Shopify, you'll need to manage gifting and tracking manually or via workarounds.
- **Social listening is Business+ only.** Monitoring module (brand tracking, competitor analysis, sentiment) is not available on the Professional plan.
- **API is not publicly documented.** Even on Business/Enterprise plans, API access requires contacting support. Don't assume you can build integrations quickly.
- **Maintenance windows reported.** Some users report occasional extended maintenance periods that interrupt workflow. If running time-sensitive campaigns, build in buffer time.
- **Pricing varies across sources.** Published pricing differs between review sites. Always verify current pricing directly at influencity.com/pricing.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, discovery workflow, vetting, outreach, ROI tracking
- `/sales-modash` — Modash platform help — Shopify-first influencer marketing
- `/sales-infludata` — influData platform help — deep audience analytics and social listening
- `/sales-creatorco` — Creator.co platform help — AI-automated creator matching and UGC rights
- `/sales-hypefy` — Hypefy platform help — zero-subscription, pay-per-campaign influencer marketing
- `/sales-ltk` — LTK platform help — creator commerce and commission-based influencer marketing
- `/sales-tagshop` — UGC video ads and shoppable galleries
- `/sales-affiliate-program` — Affiliate and referral program design
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Set up a micro-influencer gifting campaign
**User says**: "I want to send free products from my Shopify store to 30 micro-influencers on Instagram and track who posts"
**Skill does**:
1. Walks through Discover search: filter by Instagram, 10K-100K followers, relevant niche, target geography
2. Explains credit usage: ~150 Monthly Results to find 30 good candidates, ~30 Monthly Analyses to vet them
3. Shows Shopify integration setup: connect store, select products, set up gifting links
4. Sets up tracking: create unique coupon codes per creator, use Reports to track post URLs
5. Recommends the Professional plan as sufficient for this scale (10K results, 150 analyses)
**Result**: Complete gifting campaign setup with credit budget and tracking plan

### Example 2: Monitor brand mentions and competitor activity
**User says**: "I want to track what people are saying about my brand and my competitors on social media"
**Skill does**:
1. Confirms Business plan is required for Monitoring module
2. Walks through keyword setup: brand name, product names, competitor names, relevant hashtags
3. Configures sentiment tracking and alerts
4. Sets up competitor share-of-voice comparison
5. Shows how to connect findings to influencer discovery — identify organic brand advocates in Monitoring, then recruit them via Discover
**Result**: Monitoring dashboard with brand tracking, competitor analysis, and influencer recruitment pipeline

### Example 3: Choose the right Influencity plan
**User says**: "I'm an agency managing influencer campaigns for 5 clients — which Influencity plan do I need?"
**Skill does**:
1. Assesses volume: 5 clients × estimated discovery/analysis needs per client
2. Compares Professional vs Business: user seats (5 vs unlimited), credits (10K/150 vs 25K/500), social listening (no vs yes)
3. Recommends Business plan for agency use: unlimited users, higher credits, social listening for client reporting
4. Notes Enterprise for high-volume agencies needing unlimited credits
5. Suggests credit optimization: batch analyses, use filters aggressively, prioritize top performers for Reports
**Result**: Plan recommendation with credit budgeting per client

## Troubleshooting

### Running out of Monthly Analyses too fast
**Symptom**: Analysis credits depleted mid-month, can't vet more creators
**Cause**: Analyzing too many candidates in Discover before narrowing the list, or repeatedly refreshing the same profiles
**Solution**: Use Discover filters to narrow results before spending analysis credits. Save promising creators to IRM lists immediately. Only analyze shortlisted creators, not every search result. If consistently hitting limits, consider upgrading from Professional (150) to Business (500) or contact sales for credit add-ons.

### Post performance not updating in Reports
**Symptom**: Added a post URL to Reports but metrics seem stale or missing
**Cause**: Reports require manual URL submission and may take time to pull data. Ephemeral content (Stories) and Shorts are not supported for auto-tracking.
**Solution**: Verify the URL is correct and publicly accessible. Wait 24-48 hours for initial data pull. For Stories and Shorts, ask creators to share their native analytics screenshots instead. Each post analyzed costs 1 Monthly Post Analysis credit.

### Shopify gifting not syncing products
**Symptom**: Connected Shopify but products aren't appearing in Influencity campaigns
**Cause**: Integration requires copying and pasting the Shopify API token correctly. Products may take time to sync.
**Solution**: Go to Accounts & Settings → Integrations → Shopify. Verify the store URL and API token. Re-enter the API token if needed. Check that products are published and visible in your Shopify storefront. Contact Influencity support if sync doesn't complete within a few hours.
