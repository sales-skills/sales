---
name: sales-infludata
description: "influData platform help — AI-powered influencer marketing for creator discovery, audience analysis, and campaign tracking. Covers prompt-based creator search (20M+ profiles across Instagram, TikTok, YouTube, Twitch, Snapchat, Facebook, LinkedIn), audience demographics (50+ metrics, fake follower detection, overlap analysis), campaign management (real-time tracking, EMV/CPM/reach KPIs, sentiment analysis, shitstorm detection), social listening (brand mentions, hashtag tracking, UGC discovery), outreach mailing (creator email campaigns with per-plan limits, templates, tracking), Co-Pilot AI, Chrome extension, and lookalike builder. Use when influData searches aren't finding the right creators, audience analysis data seems off, campaign tracking isn't capturing posts, social listening misses brand mentions, creator outreach emails aren't sending, or unsure which influData plan fits your needs. Do NOT use for ad campaign strategy (use /sales-retargeting or /sales-b2b-advertising), email marketing to subscribers (use /sales-email-marketing), or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in influData]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-discovery, analytics, campaign-tracking, platform]
---
# influData Platform Help

Helps the user with influData platform questions — from AI-powered creator discovery and audience analysis through campaign tracking, social listening, outreach mailing, and reporting.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding influencers — search, filters, lookalikes
   - B) Analyzing a creator — audience quality, demographics, engagement
   - C) Campaign tracking — setting up tracking, reading KPIs, reporting
   - D) Social listening — brand mentions, hashtag tracking, UGC discovery
   - E) Outreach mailing — emailing creators from influData
   - F) Co-Pilot AI — using the AI assistant for profile insights
   - G) Chrome extension — viewing creator data on Instagram/TikTok
   - H) Pricing / plan selection
   - I) Something else — describe it

2. **Which social platforms are you targeting?**
   - A) Instagram
   - B) TikTok
   - C) YouTube / YouTube Shorts
   - D) Twitch
   - E) Snapchat / Facebook
   - F) Multiple — specify which

3. **What's your influData plan?**
   - A) Pro (€599/mo)
   - B) All-In (€1,199/mo)
   - C) Enterprise (custom)
   - D) Free trial / evaluating
   - E) Not sure

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Ad campaign strategy / targeting / bidding → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`
- Affiliate program design → `/sales-affiliate-program`
- UGC gallery / shoppable content → `/sales-tagshop`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge below.

## Step 3 — influData platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — walk through the task in influData
2. **Search strategy** — how to construct effective prompts and filter combinations
3. **Audience vetting framework** — which metrics matter most for the user's goals
4. **Campaign setup checklist** — what to configure before launching tracking
5. **Reporting templates** — how to structure influencer campaign reports

### Creator vetting checklist

| Check | What to look for | Red flag |
|---|---|---|
| Engagement rate | 1-3% for 100K+, 3-6% for under 100K | Under 1% or suspiciously over 10% |
| Follower growth | Steady organic growth | Sudden spikes (purchased followers) |
| Audience location | Matches target market | Audience in unexpected countries |
| Audience authenticity | Low fake follower % | Over 30% suspicious accounts |
| Brand collaborations | Complementary brands | Competitor collaborations |
| Content quality | Consistent, on-brand | Inconsistent posting, off-topic |

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Audience reports are rationed.** Pro gets 300/year, All-In gets 1,200/year. Each time you unlock a creator's audience demographics, it consumes one report. Plan your vetting workflow to avoid burning reports on creators you'll reject for other reasons (check engagement rate and content quality first — those are free).
- **Pro plan doesn't include all platforms.** Pro covers Instagram, TikTok, and YouTube only. If you need Twitch, Snapchat, or Facebook data, you need All-In or Enterprise.
- **Sentiment analysis is rationed.** Pro gets 10 community sentiment analyses per year, All-In gets 30, Enterprise gets 120. The "shitstorm detection" and comment analysis features — arguably the most differentiated features — are very limited on Pro.
- **No public API docs.** If you need programmatic access to influData data, you must be on Enterprise and request API documentation from their sales team. There's no self-serve developer portal.
- **12-month minimum on all plans.** There's no monthly billing option. Factor this into your evaluation — you're committing to at least €7,188 (Pro) or €14,388 (All-In) annually.
- **Audience data can be slow.** Capterra reviewers note that unlocking audience demographic reports has gotten slower over time. Plan for this during time-sensitive campaign planning.
- **Data accuracy varies by platform.** Some reviewers report occasional inaccuracies in audience data, particularly for smaller creators or newer platforms (Twitch, Snapchat). Cross-reference key data points with the creator's own analytics when possible.
- **Lookalike builder is powerful but needs good seeds.** The AI Lookalike Builder requires up to 3 brands or 10 creators as input. If your seed profiles are too diverse, results will be scattered. Use seeds with similar audience profiles for best results.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms (Modash, influData, Creator.co). Platform comparison, discovery, vetting, ROI tracking
- `/sales-modash` — Modash platform help — discovery, tracking, Shopify gifting, payments, API
- `/sales-creatorco` — Creator.co platform help — London AI agent, UGC rights, affiliate tracking
- `/sales-collabstr` — Collabstr platform help — influencer and UGC creator marketplace, escrow payments, campaign posting
- `/sales-tagshop` — UGC video ads and shoppable galleries for ecommerce
- `/sales-affiliate-program` — Affiliate and creator partnership program design
- `/sales-content` — Sales content management and governance
- `/sales-retargeting` — Retargeting strategy for campaign audiences
- `/sales-cadence` — Multi-channel outreach cadence design (for B2B, not creator outreach)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Find fitness influencers for a product launch
**User says**: "I need to find fitness influencers in the US with 50K-200K followers for a protein bar launch"
**Skill does**:
1. Uses AI prompt search: "fitness influencers in the United States, 50K-200K followers, posts about nutrition, protein, or gym content"
2. Applies filters: location (US), follower range, engagement rate minimum (2%+)
3. Vets top results: check audience demographics (US-based audience, 18-35 age range), fake follower %, brand collaboration history (no competitor bars)
4. Saves vetted creators to a collection for the campaign
5. Uses audience overlap to ensure selected creators don't share too much audience
**Result**: Curated list of vetted fitness creators with complementary audiences, ready for outreach

### Example 2: Track an Instagram campaign
**User says**: "I've booked 10 creators for an Instagram campaign — how do I track everything in influData?"
**Skill does**:
1. Creates a new campaign in Campaign Management with campaign goals and KPIs
2. Adds all 10 creators to the campaign by handle
3. Configures automatic story detection and post tracking
4. Sets up the live dashboard with EMV, reach, engagement, and CPM views
5. Enables sentiment analysis (requires All-In plan) to monitor comment sentiment
**Result**: Campaign tracking live with automatic content detection and real-time KPI dashboard

### Example 3: Vet a creator for fake followers
**User says**: "A creator with 500K followers wants $5,000 for a post — how do I check if they're legit?"
**Skill does**:
1. Searches the creator in influData and opens their profile
2. Reviews fake follower detection score — what percentage of followers are suspicious
3. Checks engagement rate against category benchmarks (should be 1-3% for 500K)
4. Examines follower growth chart for suspicious spikes (purchased followers)
5. Reviews audience demographics — if a US-focused brand, audience should be primarily US-based
6. Checks brand collaboration history for past campaign performance
**Result**: Data-driven assessment of creator legitimacy with specific metrics to justify or reject the $5,000 ask

## Troubleshooting

### Audience report taking too long to load
**Symptom**: Clicked "unlock audience data" but the report is still loading after several minutes
**Cause**: Known performance issue noted by multiple reviewers — audience reports have gotten slower over time, especially for creators with large followings
**Solution**: Wait up to 5 minutes for large profiles. If still loading, try refreshing the page. For time-sensitive decisions, check the creator's free metrics first (engagement rate, follower count, content) and only unlock audience data for your shortlist. Contact influData support if the issue persists — their support is highly rated (9.6/10).

### Search results don't match expectations
**Symptom**: AI prompt search returns irrelevant creators or misses obvious matches
**Cause**: Natural-language search is powerful but can misinterpret vague queries. The AI may weight different factors than you expect.
**Solution**: Be specific in prompts — include platform, location, follower range, content topic, and audience demographics. Use the 15+ manual filters to narrow results after the AI search. Try the Lookalike Builder with known good creators as seeds for more targeted discovery.

### Campaign not detecting creator content
**Symptom**: Creator posted but the campaign dashboard doesn't show the content
**Cause**: Content detection relies on matching the creator's handle and tracking parameters. Stories have a 24-hour detection window. Some content formats may take longer to index.
**Solution**: Verify the creator's handle is correctly added to the campaign. For stories, influData auto-detects and archives them, but there can be a delay of 1-2 hours. If posts aren't appearing after 4+ hours, check that the creator posted from the correct account and that the content is public (not restricted or close-friends only).
