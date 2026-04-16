---
name: sales-reddit-ads
description: "Reddit Ads platform help — campaign setup, subreddit targeting, ad formats (Image, Video, Carousel, Conversation, Product, Free-Form, AMA, Takeover, Interactive, Max), Reddit Pixel, Conversions API (CAPI), Lead Gen Ads, Business Manager, bidding strategy, audience building, conversion tracking. Use when Reddit ad ROAS is underperforming, you're not sure which subreddits to target, the Reddit Pixel isn't tracking conversions, your ads get downvoted or feel off-tone for Reddit, or you can't figure out the right bidding strategy. Do NOT use for general retargeting strategy (use /sales-retargeting), B2B advertising strategy across tools (use /sales-b2b-advertising), or organic Reddit marketing (out of scope)."
argument-hint: "[describe what you need help with in Reddit Ads]"
license: MIT
version: 1.0.0
tags: [sales, advertising, paid-social, reddit, platform]
---
# Reddit Ads Platform Help

Help the user with Reddit Ads platform questions — from campaign setup and subreddit targeting through ad creative, Reddit Pixel/CAPI tracking, audience building, bidding, and optimization.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Reddit Ads do you need help with?**
   - A) Campaign setup — creating campaigns, ad groups, ads
   - B) Targeting — subreddit selection, interests, keywords, custom audiences
   - C) Ad creative — formats, specs, what works on Reddit
   - D) Tracking — Reddit Pixel, Conversions API (CAPI), attribution
   - E) Optimization — bidding, budget, ROAS improvement
   - F) Lead Gen Ads — lead forms, Zapier integration
   - G) Business Manager — partner access, agency setup
   - H) API — Reddit Ads API v3, automation
   - I) Reporting — dashboards, metrics, benchmarks
   - J) Something else — describe it

2. **What's your campaign objective?**
   - A) Awareness (brand reach)
   - B) Consideration (traffic, engagement, video views)
   - C) Conversion (purchases, signups, app installs)
   - D) Lead generation
   - E) Not sure — help me choose

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General retargeting strategy → `/sales-retargeting`
- B2B advertising strategy across tools → `/sales-b2b-advertising`
- Funnel design (Reddit as traffic source) → `/sales-funnel`
- Lead scoring / intent signals → `/sales-intent`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly using the reference below.

## Step 3 — Reddit Ads platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### First campaign setup checklist

1. **Install Reddit Pixel** — add to all pages via GTM or manual install. Verify with Pixel Helper.
2. **Set up CAPI** — generate token in Events Manager. Configure server-side event sending.
3. **Wait for data** — let 1-2 weeks of pixel data accumulate before launching conversion campaigns.
4. **Choose objective** — start with Traffic or Engagement if new to Reddit. Move to Conversion once pixel has 50+ events.
5. **Build ad groups** — 1 targeting method per ad group. Start with 5-10 relevant subreddits.
6. **Create ads** — 3-5 creative variants per ad group. Write like a Redditor, not a marketer.
7. **Set budget** — $50-100/day to give the algorithm enough data.
8. **Launch and wait** — don't touch anything for 72 hours. Let delivery stabilize.
9. **Optimize** — after 7 days, cut underperforming ad groups, increase budget on winners, refresh creative.

### Creative that works on Reddit

Reddit users are hostile to traditional advertising. Successful ads feel like native posts:

- **Write like a community member**, not a brand — first-person, casual tone, honest
- **Lead with value or a genuine question** — "I built this tool because I was frustrated with X" outperforms "Introducing the all-new X"
- **Use lo-fi creative** — product-in-use photos, screenshots, UGC-style video outperforms polished studio content
- **Long-form body text works** — Reddit users read. Free-Form ads with 200+ words can outperform image ads
- **Engage with comments** — Reddit ads allow comments. Monitor and respond authentically. Ignoring comments = wasted opportunity
- **Don't hide that it's an ad** — Redditors respect transparency. "Yeah, this is an ad, but here's why it's relevant to this community" actually works

### Subreddit research workflow

1. Search reddit.com for your product category — note which subreddits discuss it
2. Check subreddit size (subscribers) and activity (posts/day)
3. Read the top posts to understand community tone and interests
4. In Ads Manager, search subreddits under "Communities" targeting — note which are available
5. Group similar subreddits into clusters (e.g., "finance enthusiasts" vs "finance professionals")
6. Launch separate ad groups per cluster — different messaging for each
7. After 7 days, check performance by subreddit and reallocate budget

### Multi-channel integration

Reddit ads work best as part of a broader funnel:
- **Reddit → Google**: When Reddit campaigns run, branded search volume on Google increases 10-25%. Budget for this lift.
- **Reddit → Retargeting**: Build website custom audiences from Reddit traffic → retarget on Meta, Google, or AdRoll
- **Reddit + Email**: Use Lead Gen Ads → Zapier → email platform for automated nurture
- **Reddit + ABM**: For B2B, target industry subreddits alongside LinkedIn and display ABM campaigns

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Reddit users downvote and mock bad ads** — unlike Meta or Google, Reddit ads have a comment section. Poorly crafted ads generate visible negative feedback that other users see. This is the biggest risk unique to Reddit advertising. Monitor comments and respond authentically.

2. **96% of Reddit conversions are view-through, not click-through** — if you only measure last-click attribution, Reddit will look like it doesn't work. Use view-through attribution windows or run lift studies. Reddit's impact often shows up as increased branded search on Google.

3. **API access requires whitelisting** — the Reddit Ads API v3 is not self-serve. You must contact your Reddit sales representative to get API access. Self-serve advertisers are limited to the Ads Manager UI.

4. **Subreddit targeting audience estimates are unreliable** — Reddit's audience size estimator often breaks for small audiences or bid-capped campaigns. Launch and check actual delivery rather than relying on estimates.

5. **Don't optimize in the first 72 hours** — Reddit's algorithm needs time to stabilize delivery. Making changes too early resets the learning period. Wait at least 3-7 days before drawing conclusions.

6. **Conversation placement ads are 15-30% cheaper** — ads placed within comment threads cost less than feed placements and reach engaged users. Test conversation placement alongside feed placement in separate ad groups.

7. **Max Campaigns use AI targeting** — if you enable Max Campaigns, Reddit controls targeting and creative optimization. Good for beginners but you lose granular subreddit control. Don't use Max if you need precise audience control.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related Skills

- `/sales-retargeting` — Retargeting strategy across all platforms (website visitor retargeting, cart recovery, cross-channel remarketing)
- `/sales-b2b-advertising` — B2B account-based advertising strategy (ABM ads, LinkedIn, display, audience building)
- `/sales-funnel` — Funnel strategy (Reddit as a traffic source for lead magnet, webinar, or sales page funnels)
- `/sales-intent` — Buying signals and account prioritization (Reddit engagement as a signal)
- `/sales-integration` — Connecting Reddit Ads to CRM, email platforms, and other tools via Zapier/API
- `/sales-adroll` — AdRoll platform help (cross-channel retargeting including Reddit traffic)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: First Reddit ad campaign for SaaS
**User says**: "I want to run my first Reddit ad campaign for our project management SaaS. Where do I start?"
**Skill does**: Walks through the first campaign setup checklist. Recommends starting with a Traffic objective targeting subreddits like r/projectmanagement, r/productivity, r/startups. Suggests Free-Form ad format with honest, first-person copy. Sets budget at $50/day for 2 weeks. Installs Reddit Pixel + CAPI for tracking. Plans creative that feels native — "I built this because Asana drove me crazy" style.
**Result**: User has a complete launch plan with subreddit selection, creative direction, budget, and tracking setup.

### Example 2: Improving ROAS on existing campaigns
**User says**: "My Reddit ads have a 1.2x ROAS after 3 weeks. How do I improve it?"
**Skill does**: Diagnoses the bottleneck — is it CPM (targeting too broad), CTR (creative not resonating), or CVR (landing page issue)? Checks if Reddit Pixel + CAPI are both installed. Reviews attribution model — if using last-click, the true ROAS is likely higher (96% view-through). Recommends narrowing subreddit targeting, refreshing creative to feel more native, and testing Conversation placement for cheaper CPMs.
**Result**: User has a specific optimization plan with metrics to track.

### Example 3: Reddit Lead Gen Ads setup
**User says**: "How do I set up Reddit Lead Gen Ads and push leads to HubSpot?"
**Skill does**: Walks through Lead Gen Ad creation in Business Manager, form field configuration, Zapier integration setup (Reddit Lead Ads trigger → HubSpot Create Contact action). Recommends pre-fill fields to reduce friction. Sets up event tracking for lead quality measurement.
**Result**: User has working Lead Gen → HubSpot pipeline with tracking.

## Troubleshooting

### Reddit Pixel not tracking conversions
**Symptom**: Pixel is installed but Events Manager shows no events
**Cause**: Pixel code not on all pages, ad blockers preventing pixel fire, or event parameters misconfigured
**Solution**: Use Reddit Pixel Helper extension to verify the pixel fires on each page. Check that event names match exactly (case-sensitive). Set up CAPI as backup — server-side tracking isn't affected by ad blockers. If using GTM, verify the tag fires on the correct trigger.

### Ads not delivering / audience too small
**Symptom**: Campaign approved but impressions are near zero
**Cause**: Audience size below delivery threshold, bid too low for the auction, or targeting over-constrained
**Solution**: Reddit recommends minimum 50,000 audience for consistent delivery. If targeting niche subreddits, increase bid above the suggested minimum. Remove layered targeting constraints — don't combine community + interest + demographic simultaneously. Try broader interest targeting first, then narrow once delivery stabilizes.

### Low ROAS despite decent traffic
**Symptom**: Getting clicks but conversions are poor or ROAS is below 2x
**Cause**: Could be attribution gap (view-through not counted), landing page mismatch, or wrong audience
**Solution**: First, check attribution — switch to 1-day view + 28-day click window. If view-through conversions are high, your actual ROAS is better than reported. Second, ensure landing page matches ad creative tone — don't send Reddit users to a corporate-looking page after a casual ad. Third, segment by subreddit — some communities convert and others don't. Cut non-converters after 7-14 days. Fourth, ensure you have 50+ conversion events for Reddit's algorithm to optimize — below that, use manual bidding.
