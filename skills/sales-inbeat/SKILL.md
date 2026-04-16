---
name: sales-inbeat
description: "inBeat platform help — creative growth agency (influencer marketing, UGC, paid media, performance creative) plus free marketing toolkit (ROAS/CPM/CPA/CTR calculators, ad mockup generators for Instagram/Facebook/TikTok/Twitter/Snapchat/LinkedIn). Covers agency service selection (influencer vs paid media vs UGC vs performance creative vs strategy), free toolkit usage (calculators, ad mockups), UGC platform (creator matching, content review, usage rights), agency vs in-house decision framework, campaign workflow, pricing, and platform comparison. Use when unsure if inBeat is the right agency, need help with inBeat's free ROAS/CPM calculators or ad mockup tools, influencer or UGC campaign through inBeat isn't meeting goals, inBeat pricing is unclear, or trying to decide between inBeat and other agencies. Do NOT use for influencer marketing strategy across platforms (use /sales-influencer-marketing), TikTok marketing strategy (use /sales-tiktok-marketing), general paid social advertising (use /sales-b2b-advertising or /sales-retargeting), or UGC video ad generation with AI avatars (use /sales-tagshop)."
argument-hint: "[describe what you need help with at inBeat — e.g., 'plan a UGC campaign for my DTC brand through inBeat' or 'how do I use the free ROAS calculator']"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, ugc, agency, paid-media, platform]
github: "https://github.com/inbeat"
---

# inBeat Platform Help

Helps the user evaluate and work with inBeat — the creative growth agency offering influencer marketing, UGC production, paid media management, performance creative, and strategy services, plus a free marketing toolkit with calculators and ad mockup generators.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Evaluating inBeat — deciding if they're the right agency
   - B) Planning an influencer or UGC campaign through inBeat
   - C) Using inBeat's free toolkit (calculators, ad mockups)
   - D) Paid media management (Meta, TikTok, Snapchat, Google)
   - E) Performance creative and ad production
   - F) Understanding pricing and service tiers
   - G) Agency vs in-house decision
   - H) Something else — describe it

2. **What's your business type?**
   - A) DTC / ecommerce brand
   - B) Mobile app developer
   - C) CPG brand
   - D) Healthcare / wellness
   - E) SaaS / B2B
   - F) Agency managing clients
   - G) Other — describe it

3. **What's your current marketing setup?**
   - A) No influencer or UGC program yet
   - B) Running campaigns in-house, want to scale
   - C) Working with another agency, considering a switch
   - D) Just need the free tools (calculators, mockups)

4. **Budget range?**
   - A) Under $5K (free toolkit only)
   - B) $5K-20K
   - C) $20K-100K
   - D) $100K+ (multi-channel, ongoing retainer)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Influencer marketing strategy across platforms → `/sales-influencer-marketing`
- TikTok marketing strategy (not inBeat-specific) → `/sales-tiktok-marketing`
- General retargeting strategy → `/sales-retargeting`
- Paid social advertising strategy → `/sales-b2b-advertising`
- AI-generated UGC video ads → `/sales-tagshop`
- Social media management → `/sales-social-media-management`

Otherwise, answer directly from the platform reference below.

## Step 3 — inBeat platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Service selection** — which inBeat service fits their goal (influencer vs paid media vs UGC vs creative vs strategy)
2. **Free toolkit usage** — which calculator or mockup generator to use, how to interpret results
3. **Budget planning** — realistic campaign budget based on goals, channels, and scale
4. **Agency vs in-house** — decision framework based on timeline, budget, expertise, and control needs
5. **Campaign briefing** — how to brief inBeat effectively (goals, audience, brand guidelines, KPIs, timeline)
6. **Performance expectations** — realistic timeline (60-90 days for reliable results), benchmark metrics

## Gotchas

> *Best-effort from research — review these, especially items about pricing and service scope that may be outdated.*

- **SaaS database is shut down.** inBeat's original paid influencer discovery platform was discontinued in March 2026. The free toolkit and agency services continue. If you signed up for the SaaS product, refunds were issued for March and future invoices cancelled.
- **No self-serve dashboard for agency clients.** Unlike SaaS platforms (Modash, Heepsy), inBeat agency services don't include a self-serve dashboard. Reporting is agency-delivered. Ask about reporting frequency and format during briefing.
- **No API.** inBeat does not offer a public API. If you need programmatic access to influencer data, consider Modash, NeoReach, or CreatorIQ APIs instead.
- **UGC platform may redirect to Showcase.** The UGC platform signup currently redirects to showca.se — clarify with inBeat directly whether UGC services are handled through the agency or through the Showcase platform.
- **"From $1K/month" is for basic managed services.** Full campaign services with strategy, creative, and multi-channel paid media start at $20K+. Don't expect full-service at the $1K/month tier.
- **G2 reviews reflect the old SaaS product.** Many of the 584 G2 reviews are from the influencer discovery SaaS product that was shut down. Agency service reviews may differ.
- **Compensation model for creators varies.** G2 reviews from creators note that not all collaborations are paid — some are gifting-only. If you're a creator evaluating inBeat, clarify compensation terms upfront.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, creator discovery, vetting, ROI measurement
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic growth, paid ads, content creation, influencer strategy, algorithm, metrics
- `/sales-retargeting` — Retargeting strategy — visitor retargeting, dynamic ads, cross-channel
- `/sales-b2b-advertising` — B2B and paid social advertising strategy
- `/sales-tagshop` — AI UGC video ad generator and shoppable galleries
- `/sales-houseofmarketers` — House of Marketers — TikTok-focused agency comparison
- `/sales-famesters` — Famesters — full-cycle influencer agency (gaming, fintech, apps)
- `/sales-social-media-management` — Social media management strategy
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluate inBeat for a DTC product launch
**User says**: "I'm launching a new skincare line and want to use influencer content as paid ad creative. Is inBeat a good fit? Budget is $40K."
**Skill does**:
1. Notes $40K is well within inBeat's campaign range for influencer + performance creative
2. Recommends the influencer/UGC + performance creative bundle — creators produce content, inBeat optimizes it for paid channels
3. Highlights inBeat's UGC platform with unlimited usage rights and creator conversion bootcamp
4. Compares to alternatives: Hypefy (pay-per-campaign, no subscription) for smaller scope, Collabstr for one-off UGC purchases
5. Suggests briefing approach: define 3-4 product angles, let creators interpret natively
**Result**: User has a clear recommendation with budget allocation and briefing strategy

### Example 2: Use the free toolkit for campaign planning
**User says**: "I want to estimate the ROI of a $5K influencer campaign before I commit. Are there free tools for this?"
**Skill does**:
1. Points to inBeat's free Influencer Marketing ROI Calculator and ROAS Calculator
2. Walks through how to use the ROI calculator: input campaign spend, estimated reach, engagement rate, conversion rate
3. Notes the CPM calculator helps compare cost efficiency across creators
4. Suggests using the ad mockup generators to preview how influencer content would look as paid ads
5. Compares to other free tools: GRIN's CPM calculator, Modash's fake follower checker
**Result**: User can estimate campaign ROI before committing budget, using free tools

### Example 3: inBeat vs House of Marketers
**User says**: "I'm choosing between inBeat and House of Marketers for a TikTok campaign. Both are agencies. What's the difference?"
**Skill does**:
1. Compares positioning: inBeat is full-service across multiple channels (Meta + TikTok + Snapchat + Google), HoM is TikTok-first
2. Notes HoM was founded by an ex-TikTok employee (deeper TikTok-specific expertise), while inBeat covers more channels
3. Compares services: inBeat offers paid media management and performance creative alongside influencer, HoM focuses on influencer + TikTok ads
4. Notes both are similarly priced ($20K+ per campaign)
5. Recommends: TikTok-only campaign → HoM; multi-channel campaign → inBeat
**Result**: User understands the differentiation and can choose based on their channel strategy

## Troubleshooting

### Confused about what's still available after SaaS shutdown
**Symptom**: User signed up for the influencer database and it's gone
**Cause**: inBeat shut down the paid SaaS influencer discovery platform in March 2026
**Solution**: The free toolkit (calculators, ad mockups) and agency services continue. If you need self-serve influencer discovery, switch to Modash ($199/mo), Heepsy ($49/mo), or Creator.co. For managed services, contact inBeat's agency team at hello@inbeat.agency.

### Budget doesn't match agency minimums
**Symptom**: inBeat quotes a campaign price higher than budget allows
**Cause**: Full-service agency campaigns have overhead (strategy, coordination, reporting) requiring minimum scale
**Solution**: If under $20K, use self-serve platforms: Modash ($199/mo), Heepsy ($49/mo), Hypefy (no subscription, pay per campaign), or Collabstr (marketplace, pay per deliverable). Use inBeat's free toolkit for planning. Return to the agency when budgets reach $20K+. Use `/sales-influencer-marketing` to compare options.

### Not sure which inBeat service to request
**Symptom**: inBeat offers influencer, paid media, creative, strategy, and UGC — unclear where to start
**Cause**: Services overlap — influencer campaigns include creative, UGC feeds paid ads, strategy underpins everything
**Solution**: Match to your primary goal: brand awareness → influencer campaigns, performance/conversions → paid media + performance creative, content library → UGC platform, direction → strategy & research. For most brands, start with a strategy engagement to define the playbook, then execute. Ask inBeat for a bundled proposal covering discovery + execution + paid amplification.
