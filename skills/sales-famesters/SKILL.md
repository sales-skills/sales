---
name: sales-famesters
description: "Famesters platform help — global full-cycle influencer marketing agency with 8+ years experience and 1000+ brand portfolio across Gaming, FinTech, Apps & Software, and iGaming. Covers campaign services (strategy, creator selection, outreach, content coordination, performance tracking), platform coverage (YouTube, TikTok, Instagram, Twitch), BuzzGuru proprietary analytics technology, competitor analysis, measurement and reporting (tracking links, promo codes, UTM parameters), and campaign workflow. Use when you're considering hiring Famesters but aren't sure if they're the right fit, need to understand what Famesters costs and covers, wondering how Famesters compares to Cloutboost or House of Marketers, or trying to decide between agency vs in-house influencer marketing for gaming/fintech/apps. Do NOT use for influencer marketing strategy across platforms (use /sales-influencer-marketing), gaming influencer marketing strategy (use /sales-gaming-marketing), TikTok marketing strategy (use /sales-tiktok-marketing), or general retargeting (use /sales-retargeting)."
argument-hint: "[describe what you need help with at Famesters — e.g., 'plan a YouTube influencer campaign for my mobile game' or 'compare Famesters to Cloutboost for gaming marketing']"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, gaming, agency, platform]
---

# Famesters Platform Help

Helps the user evaluate and work with Famesters — the global full-cycle influencer marketing agency that combines data-driven strategy with proprietary BuzzGuru analytics technology to run influencer campaigns across YouTube, TikTok, Instagram, and Twitch.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Evaluating Famesters — deciding if they're the right agency
   - B) Planning an influencer campaign through Famesters
   - C) Understanding pricing and service scope
   - D) Comparing Famesters to other agencies or platforms
   - E) Measurement and reporting expectations
   - F) Agency vs in-house influencer marketing decision
   - G) Something else — describe it

2. **What's your industry?**
   - A) Gaming (PC, console, mobile)
   - B) iGaming (betting, casino, poker)
   - C) FinTech (trading, banking, crypto, payments)
   - D) Apps & Software (SaaS, mobile apps, utilities)
   - E) Other — describe it

3. **What's your current influencer marketing setup?**
   - A) No influencer marketing yet — starting from scratch
   - B) Running campaigns in-house
   - C) Using a self-serve platform (Modash, influData, etc.)
   - D) Working with another agency
   - E) Exploring agency options

4. **Budget range?**
   - A) Under $10K (single campaign)
   - B) $10K-50K
   - C) $50K-200K
   - D) $200K+ (ongoing retainer, multi-market)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Influencer marketing strategy (not Famesters-specific) → `/sales-influencer-marketing`
- Gaming influencer marketing strategy → `/sales-gaming-marketing`
- TikTok marketing strategy (organic, paid, content) → `/sales-tiktok-marketing`
- General retargeting strategy → `/sales-retargeting`
- Social media management → `/sales-social-media-management`
- Cloutboost-specific questions → `/sales-cloutboost`
- House of Marketers-specific questions → `/sales-houseofmarketers`

Otherwise, answer directly from the platform reference below.

## Step 3 — Famesters platform reference

**Read `references/platform-guide.md`** for detailed service documentation, pricing, verticals, competitor comparison, and BuzzGuru technology.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Agency evaluation** — whether Famesters fits their vertical, budget, and goals
2. **Campaign briefing** — how to brief Famesters effectively (goals, audience, tone, KPIs, timeline, content expectations)
3. **Budget planning** — realistic campaign budget based on vertical, creator tier, and platform mix
4. **Agency comparison** — side-by-side with Cloutboost, House of Marketers, or self-serve platforms
5. **Measurement expectations** — what metrics to track, reporting cadence, attribution setup
6. **Agency vs in-house** — decision framework based on team capacity, budget, and expertise

## Gotchas

> *Best-effort from research — review these, especially items about pricing and service scope that may be outdated.*

- **No self-serve platform.** Unlike Cloutboost (Portal) or Modash, Famesters is a pure agency — no SaaS product for DIY influencer discovery. You work with their team, not a dashboard.
- **No public pricing.** All campaigns are custom-scoped. Budget expectations in this skill are estimated from industry context, not confirmed by Famesters.
- **BuzzGuru analytics is internal-only.** Clients receive reports from Famesters' team, not direct access to BuzzGuru's platform. If you need your own discovery tool, pair Famesters with a self-serve platform or use a different approach.
- **Heavy on regulated verticals.** Famesters' iGaming and FinTech expertise includes regulatory awareness (gambling advertising rules, financial promotion guidelines), but always verify compliance with your own legal team.
- **Creator database size not disclosed.** Unlike platforms that publish database sizes (Modash 350M+, Cloutboost 1.5M+), Famesters doesn't disclose how many creators they source from. The BuzzGuru platform powers discovery, but the exact coverage isn't public.
- **Multi-vertical breadth vs depth tradeoff.** Famesters covers gaming, fintech, iGaming, and apps — broader than gaming-only Cloutboost or TikTok-only HoM. This breadth may mean less niche depth per vertical compared to specialized agencies.
- **Cyprus-headquartered.** While they serve global clients, timezone differences may affect response times for teams in North/South America or Asia-Pacific.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns, budget allocation
- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, creator discovery, vetting, ROI measurement
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic growth, paid ads, content creation, influencer strategy
- `/sales-cloutboost` — Cloutboost platform help — gaming-only influencer platform (1.5M+ creators), Portal discovery, retargeting
- `/sales-houseofmarketers` — House of Marketers platform help — TikTok-focused agency, 50K+ creators, paid ads, content creation
- `/sales-retargeting` — Retargeting strategy — visitor retargeting, dynamic ads, cross-channel
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Evaluate Famesters for a mobile game launch
**User says**: "I'm launching a mobile RPG and need help with influencer marketing. Should I use Famesters or Cloutboost? Budget is $30K."
**Skill does**:
1. Compares Famesters (multi-vertical agency) vs Cloutboost (gaming-only with self-serve Portal)
2. Notes $30K qualifies for both — Famesters managed service and Cloutboost managed service
3. Recommends Famesters if they want full-cycle management across YouTube + TikTok + Twitch, or Cloutboost if they want to self-serve some discovery via Portal
4. Suggests requesting case studies from both for mobile game launches
5. Routes to `/sales-gaming-marketing` for gaming-specific campaign strategy regardless of agency choice
**Result**: User has a clear comparison with reasoning and next steps

### Example 2: Plan a FinTech influencer campaign
**User says**: "I run a trading app and want to use influencers to drive app installs. How would Famesters approach this?"
**Skill does**:
1. Highlights Famesters' FinTech expertise — they've worked with FxPro and similar platforms
2. Walks through expected campaign workflow: strategy → creator selection (finance/trading creators) → content coordination → install tracking
3. Notes regulatory considerations for financial promotion in influencer content
4. Sets measurement expectations: track installs via tracking links, measure LTV of acquired users
5. Suggests requesting Famesters' FinTech case studies and asking about compliance support
**Result**: User understands the FinTech-specific approach and what to ask Famesters

### Example 3: Agency vs self-serve decision
**User says**: "I have $5K/month for influencer marketing for my SaaS app. Should I hire Famesters or use a platform like Modash?"
**Skill does**:
1. Notes $5K/mo ($60K/yr) is viable for either approach but tight for a full-service agency
2. Recommends starting with self-serve (Modash $199/mo or Hypefy pay-per-campaign) to learn and iterate
3. Suggests Famesters when budget scales to $10K+ per campaign and they want full-cycle management
4. Routes to `/sales-influencer-marketing` for platform comparison and self-serve setup
**Result**: User has a staged approach — start self-serve, graduate to agency when ready

## Troubleshooting

### Not sure if Famesters covers your industry
**Symptom**: Your industry isn't gaming, fintech, iGaming, or apps/software
**Cause**: Famesters' public case studies and positioning focus on these four verticals
**Solution**: Contact Famesters directly — they may take clients outside their core verticals, but expertise and creator relationships will be strongest in gaming/fintech/iGaming/apps. For other industries, consider general-purpose agencies or self-serve platforms. Use `/sales-influencer-marketing` to compare platforms that work across all verticals.

### Campaign results below expectations
**Symptom**: Influencer content is live but not driving expected installs or registrations
**Cause**: Creator-audience mismatch, content didn't resonate, or tracking wasn't set up correctly
**Solution**: Review tracking setup with Famesters — ensure tracking links, promo codes, and UTM parameters are properly configured. Ask for audience demographic reports on selected creators to verify alignment with your target users. Request a post-campaign analysis comparing actual vs predicted performance. For future campaigns, ask Famesters to run a test phase with 2-3 creators before scaling.

### Budget too small for agency engagement
**Symptom**: Famesters quotes a campaign price higher than your budget allows
**Cause**: Full-service agency campaigns have overhead (strategy, coordination, reporting) that requires minimum scale
**Solution**: Use self-serve platforms instead — Modash ($199/mo), Heepsy ($49/mo), or Hypefy (no subscription, pay per campaign). Use `/sales-influencer-marketing` to compare platforms and find one that fits your budget. Return to Famesters when campaign budgets reach $10K+ and you need full-service support.
