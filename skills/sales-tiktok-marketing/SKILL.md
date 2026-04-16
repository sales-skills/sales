---
name: sales-tiktok-marketing
description: "TikTok marketing strategy — organic growth, paid ads, content creation, influencer campaigns, algorithm optimization, and performance measurement. Covers organic profile growth (content strategy, posting cadence, trending audio, algorithm mechanics), TikTok Ads (campaign objectives, creative formats, targeting, Spark Ads, bidding), UGC and content creation (native formats, hooks, trending concepts), influencer strategy on TikTok (creator tiers, campaign types, ROI measurement), TikTok Shop integration, and performance metrics (CPM, CPC, ROAS, EMV). Use when your TikTok videos aren't getting views, TikTok ads are spending but not converting, your profile growth has stalled, you're unsure what content to post on TikTok, you can't tell if TikTok campaigns are actually driving revenue, or you're debating whether to hire an agency for TikTok. Do NOT use for platform-specific agency help (use /sales-houseofmarketers or /sales-cloutboost), general influencer marketing across platforms (use /sales-influencer-marketing), or social media management scheduling (use /sales-social-media-management)."
argument-hint: "[describe your TikTok marketing question — e.g., 'how do I grow my brand on TikTok organically' or 'my TikTok ads aren't converting, what should I fix']"
license: MIT
version: 1.0.0
tags: [sales, tiktok, social-media, content-marketing, strategy]
---

# TikTok Marketing Strategy

Helps the user plan and execute TikTok marketing — from organic growth and content creation through paid ads, influencer campaigns, and performance measurement. Platform-specific strategy for TikTok's unique algorithm, audience, and content formats.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Growing a TikTok profile organically
   - B) TikTok paid ads (creating or optimizing campaigns)
   - C) Content creation strategy for TikTok
   - D) TikTok influencer campaigns
   - E) TikTok Shop setup or optimization
   - F) Measuring TikTok marketing ROI
   - G) Agency vs in-house decision for TikTok
   - H) Something else — describe it

2. **What's your business type?**
   - A) DTC / ecommerce brand
   - B) Mobile app
   - C) SaaS / B2B
   - D) Local business
   - E) Creator / personal brand
   - F) Agency managing clients
   - G) Other — describe it

3. **Current TikTok maturity?**
   - A) No profile yet — starting from zero
   - B) Profile exists, under 10K followers
   - C) 10K-100K followers, growing
   - D) 100K+ followers, optimizing
   - E) Running paid ads already

4. **Target audience?**
   - A) Gen Z (16-24)
   - B) Millennials (25-34)
   - C) Broad (25-44)
   - D) Niche community — describe it

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- House of Marketers agency services → `/sales-houseofmarketers`
- Cloutboost gaming influencer platform → `/sales-cloutboost`
- General influencer marketing strategy → `/sales-influencer-marketing`
- Gaming influencer marketing → `/sales-gaming-marketing`
- Social media scheduling/management tools → `/sales-social-media-management`
- Retargeting from TikTok content → `/sales-retargeting`
- Email marketing to TikTok-acquired leads → `/sales-email-marketing`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — TikTok marketing strategy reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Organic growth playbook** — content pillars, posting schedule, hook formulas, trending audio strategy, profile optimization
2. **Paid ads setup** — campaign structure, creative testing framework, budget allocation, scaling rules
3. **Influencer campaign** — creator tier selection, budget allocation, outreach, content briefs, ROI measurement
4. **Content strategy** — what to post, how often, format mix, trend adaptation, content calendar
5. **TikTok Shop setup** — product listing, affiliate program, live shopping readiness
6. **ROI measurement** — attribution setup (Pixel, CAPI, UTMs), benchmark metrics, reporting cadence
7. **Agency vs in-house** — cost comparison, timeline, expertise requirements, hybrid approaches

## Gotchas

> *Best-effort from research — review these, especially items about platform features and ad pricing that may change.*

- **Algorithm changes frequently.** TikTok updates its algorithm regularly. Strategies that worked 3 months ago may underperform. Stay current with trending formats and features.
- **Creative fatigue is faster than other platforms.** TikTok ads lose effectiveness after 7-14 days. Budget for ongoing creative production, not just one-time asset creation.
- **TikTok Pixel attribution is imperfect.** In-app browser, iOS ATT, and cross-device behavior mean TikTok Pixel underreports conversions by 20-40%. Use Conversions API (CAPI) alongside Pixel for better data.
- **B2B on TikTok is possible but harder.** Most TikTok success stories are B2C. B2B works for brand awareness and recruiting, but conversion campaigns are challenging due to audience composition.
- **Business vs Creator account tradeoff.** Business accounts get ads and analytics but lose access to some trending sounds and effects. Many brands run a Creator account for organic and a separate Business account for ads.
- **Don't overproduce content.** Polished, studio-quality content typically underperforms native, raw, phone-shot content on TikTok. UGC-style beats brand-style by 2-3x on engagement.
- **Vanity metrics mislead.** High view counts and follower growth don't equal business results. Track downstream metrics (website visits, add-to-carts, purchases, app installs) alongside TikTok metrics.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-houseofmarketers` — House of Marketers platform help — TikTok-focused agency services, pricing, campaign planning
- `/sales-cloutboost` — Cloutboost platform help — gaming influencer marketing platform, Portal discovery
- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, creator discovery, vetting, ROI
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns
- `/sales-retargeting` — Retargeting strategy — repurpose TikTok content for paid ads across channels
- `/sales-social-media-management` — Social media management strategy — publishing, scheduling, cross-platform
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Grow a DTC brand on TikTok organically
**User says**: "I sell handmade candles on Shopify. I have 500 TikTok followers. How do I grow organically?"
**Skill does**:
1. Recommends content pillars: candle-making process (behind-the-scenes), scent descriptions (ASMR/sensory), customer unboxing (UGC), day-in-the-life of a small business owner
2. Sets posting cadence: 5x/week, ideal length 21-34 seconds, use trending audio
3. Provides hook formulas: "POV: you just lit a candle that smells like..." or "Watch me pour this candle from scratch"
4. Sets realistic timeline: 8+ weeks of consistent posting before meaningful traction
5. Recommends Creator account for better trending sound access
**Result**: User has a content strategy with specific pillars, cadence, and timeline expectations

### Example 2: Fix underperforming TikTok ads
**User says**: "My TikTok ads are getting views but not converting. CPC is $2.50 and ROAS is 0.8x. Budget is $200/day."
**Skill does**:
1. Diagnoses likely issue: creative-audience mismatch or wrong campaign objective
2. Checks: are they using Conversion objective (not Traffic or Video Views)?
3. Recommends: switch to UGC-style creative (2-3x better than polished), test 3-5 variants, use Spark Ads with top organic posts
4. Suggests targeting fix: start with broad/smart targeting, let TikTok's algorithm optimize
5. Notes: need 50+ conversions for learning phase to complete. At current budget and CPA, that's 2-3 weeks
6. Flags Pixel vs CAPI: ensure Conversions API is set up alongside Pixel to capture iOS-blocked conversions
**Result**: User has specific optimization steps with expected timeline for improvement

### Example 3: Plan a TikTok influencer campaign
**User says**: "I have $15K for a TikTok influencer campaign to launch our new protein bar. Who should I target and how?"
**Skill does**:
1. Recommends micro-influencer strategy: 6-8 creators at $1,500-2,500 each in fitness/nutrition niche
2. Advises on content brief: authentic taste-test format, workout integration, not scripted testimonial
3. Suggests including Spark Ads rights in creator contracts to boost top-performing posts
4. Sets measurement plan: UTM links per creator, dedicated landing page, 30-day attribution window
5. Notes: $15K is below most agency minimums — use self-serve platforms (Modash, Heepsy) for creator discovery
**Result**: User has creator selection criteria, budget allocation, and measurement plan

## Troubleshooting

### TikTok organic reach suddenly dropped
**Symptom**: Videos that used to get 5K-10K views are now getting 200-500
**Cause**: Algorithm shift, content fatigue (posting similar formats repeatedly), or account flagged for guideline borderline content
**Solution**: Diversify content formats (try Duets, Stitches, text-on-screen, different hooks). Check if any videos were removed or restricted. Post at different times (test 7am, 12pm, 6pm, 9pm local time). If sustained drop for 2+ weeks with varied content, the account may need a content reset — archive underperforming videos and try a completely new content pillar.

### TikTok ads stuck in learning phase
**Symptom**: Ad group says "Learning" for 5+ days with no conversions
**Cause**: Too narrow targeting, too low budget for the objective, or conversion event too far down funnel
**Solution**: Broaden targeting (remove interest restrictions, use Smart targeting). Increase daily budget to at least 10x your target CPA. If optimizing for purchases with a $50 product, you need at least $500/day per ad group. Alternatively, optimize for a higher-frequency event (Add to Cart instead of Purchase) to exit learning phase faster, then switch to Purchase optimization once you have 50+ events.

### Can't attribute TikTok's impact on sales
**Symptom**: TikTok reports strong engagement but Google Analytics shows minimal TikTok traffic
**Cause**: TikTok's in-app browser strips referrer data, iOS ATT blocks tracking, and TikTok drives delayed conversions (30-45 days post-exposure)
**Solution**: Implement TikTok Conversions API (CAPI) alongside Pixel for server-side tracking. Use dedicated landing pages or vanity URLs per campaign (mysite.com/tiktok). Compare brand search volume and direct traffic during campaign periods vs baseline. For influencer campaigns, use unique promo codes per creator. Accept that TikTok attribution will always undercount — use incrementality testing (geo holdout or time-based on/off) for true measurement.
