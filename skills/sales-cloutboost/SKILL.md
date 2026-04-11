---
name: sales-cloutboost
description: "Cloutboost platform help — gaming influencer marketing platform with 1.5M+ creator database across YouTube, Twitch, and TikTok, plus managed agency services. Covers Portal (influencer discovery, 20+ search filters, game-genre filtering), campaign management (outreach, scheduling, content review, approval), automated analytics and reporting, retargeting (repurposing influencer content for paid ads), and PR/media relations for game launches. Use when setting up Cloutboost campaigns, searching for gaming influencers, understanding Portal pricing plans, configuring campaign workflows, interpreting Cloutboost reports, or planning influencer retargeting for games. Do NOT use for influencer marketing strategy across platforms (use /sales-influencer-marketing), gaming marketing strategy (use /sales-gaming-marketing), general retargeting strategy (use /sales-retargeting), or PR strategy (use /sales-media-relations)."
argument-hint: "[describe what you need help with in Cloutboost — e.g., 'find Twitch streamers for my indie RPG' or 'set up a retargeting campaign from influencer content']"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, gaming, platform]
github: "https://github.com/cloutboost"
---

# Cloutboost Platform Help

Helps the user set up and get the most out of Cloutboost — the gaming-focused influencer marketing platform and agency that connects game publishers with gaming creators across YouTube, Twitch, and TikTok. Covers Portal discovery, campaign management, analytics, retargeting, and PR services.

## Step 1 — Gather context

Ask the user:

1. **What do you need help with?**
   - A) Finding gaming influencers (Portal discovery)
   - B) Setting up or managing a campaign
   - C) Understanding analytics and reporting
   - D) Retargeting from influencer content
   - E) PR and media relations for a game launch
   - F) Understanding pricing and plans
   - G) API access or integrations
   - H) Something else — describe it

2. **What type of game or brand?**
   - A) Indie game studio
   - B) Mid-size publisher
   - C) AAA publisher
   - D) Mobile game developer
   - E) Non-gaming brand targeting gamers
   - F) Other — describe it

3. **What's your current setup?**
   - A) Evaluating Cloutboost — haven't signed up
   - B) Using the self-serve Portal
   - C) Working with Cloutboost's managed agency service
   - D) Comparing Cloutboost to other options

4. **Budget range?**
   - A) Under $5K (Portal self-serve only)
   - B) $5K-20K (managed campaign minimum)
   - C) $20K-100K (multi-campaign)
   - D) $100K+ (ongoing retainer)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Influencer marketing strategy (not Cloutboost-specific) → `/sales-influencer-marketing`
- Gaming marketing strategy (game launches, streamer partnerships) → `/sales-gaming-marketing`
- General retargeting strategy → `/sales-retargeting`
- PR and media relations strategy → `/sales-media-relations`
- Ad campaign strategy → `/sales-b2b-advertising`

Otherwise, answer directly from the platform reference below.

## Step 3 — Cloutboost platform reference

### How Cloutboost works

Cloutboost operates as both a **self-serve platform (Portal)** and a **managed agency service**:

1. **Portal** — SaaS product for discovering gaming influencers, managing campaigns, and tracking performance
2. **Managed Service** — Cloutboost's team handles influencer selection, outreach, negotiation, content coordination, and reporting end-to-end

### Portal — Influencer Discovery

The Portal provides access to **1.5M+ gaming influencers** across YouTube, Twitch, and TikTok with daily-refreshed data.

**Basic search filters:**
- Followers / subscribers
- Average video views
- True reach
- Concurrent viewers (Twitch)
- Country and language
- Platform (YouTube, Twitch, TikTok)

**Advanced filters (game-specific):**
- Game genre
- Specific game titles played
- Email verification status
- Talent agency representation
- Content activity status
- Shorts ratio and upload frequency
- Video duration metrics

**Data sources:** Social media APIs (YouTube, Twitch), RAWG and IGDB game databases, public sources, and manual verification.

### Portal — Campaign Management

- Multi-stage workflow: influencer selection → outreach → scheduling → content production → review → publication
- Real-time tracking of outreach status, content submissions, and campaign milestones
- Direct content review and approval within the platform before publication
- Automated daily reporting from social media APIs

### Portal — Analytics & Reporting

- Near real-time reporting on reach, engagement, post performance, and costs
- Multi-metric influencer comparison
- CSV export (plan-dependent limits)
- Customized reporting based on KPIs that matter to each client

### Portal pricing

| Plan | Price | Users | Campaigns | CSV Exports |
|---|---|---|---|---|
| **Indie** | $279/yr | 2 | — | 2,500 |
| **Studio** | $519/yr | 10 | 10 | 5,000 |
| **Scale** | $1,029/yr | Unlimited | 50 | 10,000 |
| **Agency** | Custom | Unlimited | Unlimited | 15,000 |

### Managed service — Agency

Cloutboost's agency service handles full-cycle campaigns for brands with $5K+ budgets.

**Services included:**
- **Influencer campaigns** — AI-powered creator selection from the 1.5M+ database, outreach, negotiation, content coordination, and performance optimization
- **Retargeting** — repurposing influencer-generated content for paid ad campaigns. Claimed 3x higher CTR vs standard ads by retargeting users who engaged with influencer content
- **PR / Media Relations** — gaming press outreach, press releases, feature coverage, review key distribution, press kit creation

**Pricing models for managed service:**
| Model | How it works |
|---|---|
| **Pay Per Post** | Flat fee based on predicted engagement |
| **Pay Per View (CPV)** | Cost per view model |
| **Mixed Model** | Guaranteed payment + CPV with cap |
| **Sponsorship Package** | Integrated short or long-term sponsorship including cross-platform branding |

**Fee structure:** Project-based or monthly retainer.

### Retargeting with Cloutboost

Cloutboost's retargeting service repurposes influencer content for paid advertising:

1. **Content capture** — collect high-performing influencer videos, streams, and posts
2. **Audience building** — build retargeting audiences from users who watched, clicked, or engaged with influencer content
3. **Ad creation** — repurpose influencer content into ad formats (video ads, display, social)
4. **Campaign optimization** — optimize based on performance data, claimed 3x CTR improvement over standard creative

This bridges influencer marketing (awareness) with performance marketing (acquisition). Route to `/sales-retargeting` for platform-agnostic retargeting strategy.

### PR services

Cloutboost's PR offering focuses specifically on gaming media:
- Press release creation and distribution to gaming outlets
- Review key management and distribution
- Press kit creation
- Media coverage tracking
- Relationship management with gaming journalists and editors

Route to `/sales-media-relations` for general PR strategy and journalist database tools.

### API

Cloutboost has a Queryable API Server (v0.0.1) available at `api.portal.cloutboost.com`. Currently early-stage with minimal public documentation.

- **Status**: v0.0.1 — expect limited endpoints and possible breaking changes
- **Auth**: Not publicly documented — contact Cloutboost for access
- **Documentation**: Minimal — check with Cloutboost support for current endpoint availability

### Integrations

- Campaign ROI Calculator tool
- Google Analytics integration for measurement
- Social media API data feeds (YouTube, Twitch)
- RAWG and IGDB game databases for game metadata

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Discovery playbook** — how to use Portal filters to find the right gaming creators for their game genre, budget, and platform
2. **Campaign setup** — workflow from creator shortlist through content approval and publication
3. **Plan selection** — which Portal plan fits their team size, campaign volume, and export needs
4. **Self-serve vs managed** — decision framework: Portal alone for discovery + DIY outreach, managed service for full-cycle campaign execution
5. **Retargeting setup** — how to bridge influencer content into paid ad campaigns
6. **PR planning** — leveraging Cloutboost's gaming media relationships for launch coverage

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **$5K minimum for managed service.** The Portal is affordable ($279-$1,029/yr) but agency campaigns start at $5K. Indie studios on tight budgets should start with Portal-only for discovery, then handle outreach themselves.
- **Portal is discovery-focused, not a full campaign platform.** For features like automated outreach sequences, content approval workflows, and creator payments, you need the managed service or to handle those processes externally.
- **Gaming-only database.** The 1.5M+ creator database is exclusively gaming. If you need influencers outside gaming (beauty, fitness, tech), use a general-purpose platform like Modash or influData instead.
- **API is v0.0.1.** Don't build production integrations against it without confirming stability with Cloutboost. Expect limited endpoints and potential breaking changes.
- **Retargeting claims are self-reported.** The "3x higher CTR" claim for influencer content retargeting is from Cloutboost's marketing. Benchmark against your own performance data.
- **Pricing is annual for Portal.** No monthly billing option for any Portal plan. The Indie plan at $279/yr is the lowest commitment.
- **Content review is plan-gated.** Campaign management features (including content review/approval) have campaign limits per plan — Indie has none, Studio allows 10, Scale allows 50.

## Related skills

- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns, budget allocation
- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, creator discovery, vetting, ROI measurement
- `/sales-retargeting` — Retargeting strategy — visitor retargeting, cart abandonment, dynamic ads, cross-channel
- `/sales-media-relations` — Media relations strategy — journalist databases, PR pitching, coverage tracking
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Find Twitch streamers for an indie RPG
**User says**: "I'm launching a turn-based RPG on Steam next month. I need to find mid-tier Twitch streamers who play RPGs. Budget is $10K."
**Skill does**:
1. Recommends using Portal advanced filters: game genre = RPG, platform = Twitch, follower range = 10K-100K
2. Explains how to use game title filters to find streamers who played similar RPGs
3. Advises on managed service vs DIY: $10K qualifies for managed, which handles outreach and negotiation
4. Suggests starting with 15-20 streamers at $500-700 each for a launch window campaign
**Result**: User has a discovery strategy and understands self-serve vs managed trade-offs for their budget

### Example 2: Choose a Portal plan
**User says**: "I'm a mobile game publisher running 3-4 influencer campaigns per quarter. Which Cloutboost plan should I get?"
**Skill does**:
1. Calculates campaign needs: 12-16 campaigns/year
2. Compares Studio (10 campaigns) vs Scale (50 campaigns)
3. Recommends Studio if campaigns are small, Scale if running concurrent campaigns or need unlimited users
4. Notes CSV export limits and team size differences
**Result**: User has a plan recommendation with clear reasoning

### Example 3: Set up retargeting from influencer content
**User says**: "Our YouTube influencer campaign generated 2M views but we want to turn that into paid ads. Can Cloutboost help with retargeting?"
**Skill does**:
1. Explains Cloutboost's retargeting service — repurposing influencer video content into paid ad formats
2. Notes this requires the managed service (not Portal-only)
3. Recommends building custom audiences from video viewers + engagers
4. Routes to `/sales-retargeting` for platform-agnostic retargeting setup on Google/Meta/TikTok
**Result**: User understands the retargeting pathway and which parts Cloutboost handles vs self-serve

## Troubleshooting

### Portal search returns too many irrelevant results
**Symptom**: Searching for gaming creators but getting channels outside your target genre or game type
**Cause**: Basic filters are too broad — follower count and platform alone don't narrow to gaming niches
**Solution**: Use advanced filters: specify game genre, specific game titles, and content activity status. Filter by shorts ratio to exclude channels that primarily post short-form content if you need long-form gameplay videos. Check email verification status to focus on contactable creators.

### Managed campaign not generating expected engagement
**Symptom**: Influencer content is live but engagement (views, likes, comments) is lower than predicted
**Cause**: Creator-game mismatch, wrong audience demographics, or content didn't resonate with the creator's audience
**Solution**: Review the creator selection criteria with your Cloutboost account manager. Check if selected creators actually play your game genre regularly (not just one-off sponsored content). Ask for audience demographic reports to verify alignment. For future campaigns, request a test phase with 2-3 creators before scaling to the full roster.

### Unsure whether to use Portal or managed service
**Symptom**: Want to run influencer campaigns but not sure if you need full agency support
**Cause**: Budget and team capacity aren't clear
**Solution**: Use Portal alone ($279-$1,029/yr) if you have someone on your team who can handle creator outreach, negotiation, content review, and reporting. Use managed service ($5K+ minimum) if you want Cloutboost to handle everything end-to-end. Hybrid approach: use Portal for discovery, then engage managed service for the top-priority campaigns only.
