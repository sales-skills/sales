---
name: sales-trendhero
description: "trendHERO platform help — Instagram influencer analytics (95M+ profiles, 20+ filters), Account Quality Score (AQS 1-100, fake follower detection), Audience Analysis, Daily Tracking, Ads Database (10M+ posts), Audience Overlap, REST API (Bearer auth, webhooks). Covers discovery search, AQS interpretation, audience vetting, tracking setup, ads database research, API integration, and pricing (Free/Lite/Pro/Advanced). Use when searching for influencers in trendHERO, checking fake followers with AQS, setting up tracking, exploring the ads database, using the trendHERO API, comparing plans, or choosing trendHERO vs HypeAuditor vs Heepsy. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing), TikTok marketing (use /sales-tiktok-marketing), gaming influencer marketing (use /sales-gaming-marketing), or ad campaigns (use /sales-retargeting)."
argument-hint: "[describe what you need help with in trendHERO]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, analytics, fraud-detection, instagram, platform]
---

# trendHERO Platform Help

Helps the user with trendHERO platform questions — from influencer discovery and fake follower detection through audience analysis, tracking, ads database research, and API integration.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding influencers — Discovery search, filters, keyword search
   - B) Analyzing a creator — AQS score, fake follower detection, audience quality
   - C) Tracking — daily monitoring of influencer accounts
   - D) Ads database — researching influencer ad posts and mentions
   - E) Audience overlap — comparing audiences across influencers
   - F) Outreach — contacting influencers through trendHERO
   - G) Lists — organizing and comparing influencers
   - H) API integration — generating reports programmatically
   - I) Pricing and plan selection
   - J) Something else — describe it

2. **What's your current setup?**
   - A) New to trendHERO — evaluating or just signed up
   - B) Using trendHERO for discovery/analytics
   - C) Using trendHERO for tracking and monitoring
   - D) Integrating via API
   - E) Comparing trendHERO to other platforms

3. **What plan are you on?**
   - A) Free ($0/mo)
   - B) Lite ($16/mo)
   - C) Pro ($40/mo)
   - D) Advanced ($120/mo)
   - E) Not sure / evaluating

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

## Step 3 — trendHERO platform reference

### Platform overview

trendHERO is an Instagram-focused influencer analytics platform specializing in fake follower detection and audience quality analysis. It provides a database of 95M+ Instagram profiles with 90+ metrics per creator, making it a focused, affordable tool for brands and agencies vetting influencers before partnerships.

### Core modules

#### Influencer Discovery
- **Database**: 95M+ Instagram profiles (TikTok analytics recently added)
- **Search methods**: Keyword search in names and bios (required and negative keywords), audience demographic filters (geo, age, gender), engagement metrics (followers, ER, growth), category/niche filtering
- **20+ filters** including audience location, category, engagement rate, follower count range
- **Relevance ranking**: Results ranked by keyword match density in profile name and bio
- **Results**: Searchable database with list-saving capability

#### Account Quality Score (AQS)
- **Scale**: 1-100 (higher = better quality)
- **5 evaluation dimensions**:
  1. Audience quality & engagement — authenticity and activity level of followers
  2. Follower type — classification of audience composition (real, suspicious, mass followers)
  3. Comment quality — analysis of engagement patterns (generic vs. authentic comments)
  4. Giveaway activity — frequency of promotional giveaways (inflates metrics temporarily)
  5. Growth patterns — historical follower acquisition trends (organic vs. purchased)
- **Purpose**: Rapid 2-second overall account health assessment — consolidates multiple red flags into one score

#### Analytics Reports (90+ metrics)
- **Engagement**: Median likes/comments per post (uses median to eliminate outliers from viral posts), views per reel (unique views, not play count), weekly post frequency
- **Audience**: Demographics (age, gender, location, language), audience type breakdown (real, suspicious, mass followers), reachability (% of followers following <1,500 accounts)
- **Growth**: Followers/followings growth tracking over time, growth pattern analysis
- **Benchmarks**: Comments-to-likes ratio (0.5–5 per 100 likes), views-to-likes ratio (2–10 views per like)
- **Export**: PDF and Excel download

#### Daily Tracking
- Monitor influencer accounts daily for follower growth, engagement changes, and content activity
- Track competitors' influencer partnerships
- Alerts for significant changes (follower spikes, engagement drops)
- *Plan-gated*: Lite = 3 accounts, Pro = 20, Advanced = 50

#### Ads Database
- **10M+ ad posts** — database of influencer-brand mentions and sponsored content
- Research which influencers are working with which brands
- Discover competitors' influencer partnerships
- Filter by brand, influencer, date range, engagement metrics

#### Audience Overlap
- Compare audiences across multiple influencers
- Identify unique reach vs. shared followers
- Optimize influencer selection for maximum reach (minimize overlap)
- Essential for multi-influencer campaigns

#### Lists & Comparison
- Create lists to organize influencer candidates
- Side-by-side comparison of key metrics
- Export lists for team review
- Favorites/shortlisting functionality

#### Outreach
- Built-in influencer outreach tools
- Contact influencers directly through the platform
- Track outreach status and responses

### Pricing

*Best-effort — verify with trendHERO for current pricing.*

| Plan | Price | Reports/mo | Tracking | Lists | Key features |
|---|---|---|---|---|---|
| **Free** | $0/mo | — | — | Favorites only | Engagement rate, follower growth, basic metrics |
| **Lite** | $16/mo | 10 | 3 accounts | 10 lists | Full reports, PDF export |
| **Pro** | $40/mo | 50 | 20 accounts | Unlimited | Excel export, full search across 95M+ profiles |
| **Advanced** | $120/mo | 200 | 50 accounts | Unlimited | Priority support, all features |

- Additional reports can be purchased as add-ons
- All paid plans include AQS scoring and audience analysis
- Free plan provides basic engagement data — useful for quick checks

### Plan-gated features to watch

- **Full influencer search (95M+ database)** — Pro+ only (Lite has limited search)
- **Excel export** — Pro+ only (Lite only has PDF)
- **Tracking limits** — Lite: 3 accounts, Pro: 20, Advanced: 50
- **Report limits** — credits consumed per report, varies by plan
- **Priority support** — Advanced only

### Metrics reference

| Metric | What it measures | Calculation method |
|---|---|---|
| Likes/post | Typical like volume | Median of last 18 posts (excludes most recent if <1 day old) |
| Comments/post | Comment engagement | Same median methodology |
| Views/reel | Unique video views | Unique views (not Instagram play count — ratio up to 5:1) |
| Weekly posts | Content consistency | Average posts per week over analyzed period |
| Engagement rate | Audience interaction % | (Likes + comments) / followers × 100 |
| Reachability | Addressable audience % | % of followers following <1,500 accounts |
| AQS | Overall account quality | Composite of 5 dimensions (1-100 scale) |

## Step 4 — Actionable guidance

Based on the user's specific question, provide:

1. **Discovery playbook** — how to set up searches, keyword strategies, filter combinations for their niche
2. **Vetting workflow** — how to read AQS scores, what score ranges mean, red flags to watch
3. **Tracking setup** — which accounts to monitor, how to interpret growth alerts
4. **Ads database research** — how to find competitor influencer partnerships
5. **Audience overlap analysis** — how to optimize multi-influencer campaigns for reach
6. **API integration** — authentication, endpoints, webhook setup, processing times
7. **Plan recommendation** — which tier fits their needs and budget

For API integration questions, refer to the detailed [trendHERO API Reference](references/trendhero-api-reference.md).

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Reports consume credits, not just time.** Each analytics report uses one credit from your monthly allocation. Running reports on influencers you end up rejecting still costs credits. Vet with free metrics (engagement rate, follower growth) before spending a report credit on a full AQS analysis.
- **Report generation can be slow for large accounts.** Accounts with 1M+ followers can take 2-4 hours to generate. Smaller accounts (<10K) take 30-60 minutes. Already-cached accounts return instantly. Plan ahead for time-sensitive vetting.
- **Instagram-focused with limited multi-platform coverage.** trendHERO's 95M+ database is primarily Instagram. TikTok analytics were recently added but with less depth. If you need YouTube, X, or Twitch coverage, consider HypeAuditor or Modash.
- **Free plan is very limited.** Only basic engagement rate and follower growth — no AQS, no full reports, no search. Useful for a quick check but not for serious vetting. Lite ($16/mo) is the minimum for actionable analytics.
- **Median-based metrics can surprise you.** trendHERO uses median (not average) for likes and comments to eliminate viral post outliers. This gives a more realistic picture of typical performance but may show lower numbers than you expect if you're used to average-based tools.
- **Reachability metric is unique and important.** The "% of followers following <1,500 accounts" metric indicates how likely your content is to actually appear in followers' feeds. Low reachability means the influencer's followers follow so many accounts that your sponsored post may not be seen.
- **API has no documented rate limits.** The API docs don't specify rate limits, but report generation is inherently throttled by processing time. For batch operations, implement reasonable delays between requests.
- **Webhook requires setup in the Access Tokens page.** The API supports webhook callbacks when reports finish processing, but you must configure the webhook URL in your account settings — it's not set per-request.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across all platforms — discovery, vetting, campaigns, ROI
- `/sales-hypeauditor` — HypeAuditor platform help — AI-powered influencer analytics, 223.6M+ profiles, fraud detection, Campaign Management, API
- `/sales-heepsy` — Heepsy platform help — budget-friendly influencer discovery, 11M+ profiles, Shopify integration
- `/sales-modash` — Modash platform help — Shopify-focused discovery, gifting, payments, API
- `/sales-infludata` — influData platform help — AI creator search, audience analysis, social listening
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic growth, paid ads, content creation, influencer strategy
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamers, game launches
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Vet an influencer before a paid partnership
**User says**: "A fitness influencer with 80K followers wants $1,200 for a post — how do I check if they're legit?"
**Skill does**:
1. Shows how to search for the creator by username in trendHERO
2. Explains how to read the AQS score — what ranges indicate good quality (>60), concerning (<40), or deal-breaker (<25)
3. Walks through the 5 AQS dimensions: audience type, comment quality, growth patterns, giveaway history
4. Highlights reachability metric — what % of their followers will actually see the post
5. Compares the $1,200 ask to their actual authentic reach and engagement
**Result**: Data-driven decision on whether the partnership is worth the investment

### Example 2: Research competitor influencer partnerships
**User says**: "I want to see which influencers my competitors are working with"
**Skill does**:
1. Shows how to use the Ads Database to search by brand/competitor name
2. Explains filtering by date range, engagement metrics, and influencer size
3. Demonstrates how to identify which creators drive the best engagement for competitors
4. Suggests saving interesting creators to a list for further analysis
5. Recommends running AQS reports on shortlisted creators before outreach
**Result**: Competitive intelligence on influencer partnerships with actionable next steps

### Example 3: Set up API integration for batch influencer reports
**User says**: "I want to pull influencer analytics into our internal tool via the trendHERO API"
**Skill does**:
1. Walks through API authentication: Bearer token from Access Tokens page
2. Shows the POST endpoint to create a report: `POST /reports?username={username}`
3. Explains async processing — reports aren't instant, check status field for `ready` vs `collecting`
4. Demonstrates webhook setup for completion notifications
5. Shows GET endpoint to retrieve completed reports: `GET /reports/{username}`
6. Points to the API reference for full endpoint documentation
**Result**: Working API integration plan with auth, endpoints, and async handling

## Troubleshooting

### Report takes hours to generate
**Symptom**: Requested a report but it's still in "collecting" status after 30+ minutes
**Cause**: Large accounts (1M+ followers) require more data processing. First-time reports for uncached accounts take longer.
**Solution**: Check if the account has been analyzed before — previously cached accounts return instantly. For large accounts, allow up to 2-4 hours. Use the API webhook to get notified when the report is ready instead of polling manually. If a report is stuck beyond 4 hours, the account may be private or have restricted data access — check for `impossible` status.

### AQS score seems too low for a legitimate creator
**Symptom**: A creator you know is legitimate has an AQS below 40
**Cause**: AQS factors in giveaway history and growth patterns. Creators who run frequent giveaways or had rapid growth spurts (even organic ones from viral content) may get penalized.
**Solution**: Don't rely on AQS alone — check individual dimensions. If audience type and comment quality are high but giveaway activity is dragging the score down, the creator may still be a good partner. Cross-reference with engagement rate and reachability metrics for a complete picture.

### Running out of report credits too fast
**Symptom**: Monthly report allocation exhausted before finding enough qualified influencers
**Cause**: Running full reports on every potential influencer without pre-screening wastes credits.
**Solution**: Use free metrics first — check engagement rate and follower growth on the free plan or in search results before spending a credit on a full report. Create a pre-screening checklist: engagement rate >2%, steady growth pattern, relevant content. Only run full AQS reports on influencers that pass the free-metric screen. Consider upgrading to Pro (50 reports) or Advanced (200 reports) if you regularly need more.
