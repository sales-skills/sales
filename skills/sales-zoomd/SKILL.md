---
name: sales-zoomd
description: "Zoomd platform help — mobile user acquisition across 600+ media sources, mobile DSP with real-time bidding, creator-generated content (CGC), Albert.ai autonomous campaign optimization, and Digital 360 performance marketing. Use when app install costs (CPI/CPA) are too high and you need multi-channel optimization, you want to manage UA campaigns across Meta/Google/TikTok/programmatic from one dashboard, mobile DSP campaigns aren't scaling or hitting ROAS targets, you need creator content for app marketing, Albert.ai isn't optimizing as expected, or you're comparing Zoomd with other mobile UA platforms. Do NOT use for web retargeting or display ads (use /sales-retargeting or /sales-adroll), B2B account-based advertising (use /sales-b2b-advertising)."
argument-hint: "[describe what you need help with in Zoomd]"
license: MIT
version: 1.0.0
tags: [sales, mobile-advertising, user-acquisition, dsp, platform]
---
# Zoomd Platform Help

Help the user with Zoomd — the mobile app user acquisition and performance marketing platform combining programmatic advertising (DSP), creator-generated content, influencer marketing, and AI optimization (Albert.ai) across 600+ media sources in 70+ markets.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) User acquisition — app install campaigns, CPI/CPA optimization
   - B) Mobile DSP — programmatic buying, real-time bidding, exchange management
   - C) Creator-generated content (CGC) — micro-creator video campaigns
   - D) Albert.ai — AI-powered campaign optimization across channels
   - E) Digital 360 — full-funnel performance marketing
   - F) Comparing Zoomd with other mobile UA or DSP platforms
   - G) Campaign reporting and attribution
   - H) Something else — describe it

2. **What's your app vertical?**
   - A) Gaming
   - B) E-commerce / retail
   - C) Fintech
   - D) Entertainment / streaming
   - E) Travel / food delivery
   - F) Other — describe it

3. **Where are you in the process?**
   - A) Evaluating mobile UA or DSP platforms
   - B) Onboarding with Zoomd
   - C) Already running campaigns — need to optimize
   - D) Setting up Albert.ai for the first time
   - E) Need help with reporting/metrics

**If the user's prompt already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

If the user's question maps to another skill, route them:
- Web/display retargeting (not in-app) → "This is a web retargeting question — run: `/sales-retargeting {your question}`"
- B2B account-based advertising → "This is a B2B ad question — run: `/sales-b2b-advertising {your question}`"
- AdRoll display/social retargeting → "This is an AdRoll question — run: `/sales-adroll {your question}`"
- Remerge in-app retargeting DSP → "This is a Remerge question — run: `/sales-remerge {your question}`"
- Push notification re-engagement → "This is a push notification question — run: `/sales-push-notification {your question}`"
- Influencer marketing strategy (not Zoomd-specific CGC) → "This is an influencer marketing question — run: `/sales-influencer-marketing {your question}`"

Otherwise, answer directly using the platform reference.

## Step 3 — Zoomd platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing model, Albert.ai, DSP details, CGC workflow, integrations, and MMP setup.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

### Evaluating Zoomd
1. **Define goals** — target CPI, ROAS threshold, geographic markets, vertical
2. **Compare self-serve vs managed** — Zoomd offers both; self-serve DSP gives control, managed service adds Zoomd's optimization layer
3. **Request a pilot** — 30-60 day test with clear KPIs across 2-3 channels
4. **Verify MMP integration** — confirm AppsFlyer/Adjust/Branch postbacks before launch
5. **Evaluate Albert.ai fit** — best for multi-channel campaigns where budget allocation is complex

### Optimizing running campaigns
1. **Check creative performance** — Zoomd's CGC can provide fresh creatives; test against existing assets
2. **Review channel mix** — use the unified dashboard to shift budget to highest-ROAS channels
3. **Leverage Albert.ai** — let AI handle cross-channel budget allocation; intervene only on strategy
4. **Monitor fraud signals** — Zoomd's vetted exchange safelist reduces but doesn't eliminate fraud; cross-check MMP fraud reports

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about pricing and service model that may be outdated.*

1. **No public API** — unlike self-serve DSPs (Remerge, Liftoff), Zoomd doesn't expose a public API. Reporting and optimization go through their dashboard and account team.

2. **Pricing is opaque** — performance-based (CPM/CPC/CPI/CPO/CPE) but full cost structure isn't transparent. Ask for detailed breakdowns alongside performance metrics.

3. **Albert.ai is a separate product** — acquired in 2022. It optimizes across Google, Meta, TikTok, YouTube, DV360, Bing — but it's focused on paid social/search, not the DSP inventory.

4. **MMP integration is critical** — without proper AppsFlyer/Adjust/Branch/Kochava setup, attribution will be unreliable. Verify postback configuration before campaign launch.

5. **iOS SKAN limitations** — only 20-35% of iOS users opt in to tracking. This limits iOS targeting precision for any mobile UA platform, not just Zoomd.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-adwake` — Adwake platform help — managed mobile app UA and in-app retargeting by Entravision
- `/sales-remerge` — Remerge platform help — self-serve in-app retargeting DSP with incrementality measurement
- `/sales-retargeting` — Retargeting strategy across all platforms (web + app) — audience segmentation, creative, attribution
- `/sales-influencer-marketing` — Influencer marketing strategy — creator discovery, campaign management, ROI measurement
- `/sales-b2b-advertising` — Account-based B2B advertising — ABM ads, display, LinkedIn Ads
- `/sales-push-notification` — Push notification strategy — alternative re-engagement channel for mobile apps
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Evaluating Zoomd for a gaming app launch
**User says**: "I'm launching a mobile game and need to scale installs fast across multiple channels. Should I use Zoomd?"
**Skill does**: Explains Zoomd's multi-channel UA across 600+ sources via unified dashboard. Compares with single-channel alternatives (running Meta + Google separately). Recommends requesting a pilot with clear CPI targets and gaming-vertical benchmarks.
**Result**: User has a decision framework for Zoomd vs managing UA channels independently.

### Example 2: Albert.ai not hitting ROAS targets
**User says**: "I set up Albert.ai for our e-commerce app campaigns but ROAS is below target after two weeks. What should I check?"
**Skill does**: Explains Albert.ai's learning period, checks if sufficient event data is flowing, reviews channel allocation, and suggests adjusting optimization goals. Recommends letting Albert run for 30+ days before manual intervention.
**Result**: User understands Albert.ai's optimization cycle and what to monitor.

### Example 3: Comparing Zoomd DSP with alternatives
**User says**: "We're choosing between Zoomd, Remerge, and Liftoff for our fintech app. How do they compare?"
**Skill does**: Compares based on UA vs retargeting focus (Zoomd: full UA + DSP + CGC, Remerge: retargeting-only DSP, Liftoff: UA + retargeting DSP). Notes Zoomd's managed + self-serve options, Albert.ai AI layer, and CGC content production as differentiators.
**Result**: User has a comparison with trade-offs for their fintech vertical.

## Troubleshooting

### CPI is higher than expected across channels
**Symptom**: App install costs are above target despite multi-channel optimization
**Cause**: Creative fatigue, broad targeting, wrong geo mix, or competitive vertical timing
**Solution**: Request CGC content refresh for new creatives. Use the unified dashboard to identify which channels/geos are underperforming. Shift budget toward lower-CPI markets (LATAM, SEA) if quality allows. Compare against industry benchmarks.

### Attribution discrepancies between Zoomd and MMP
**Symptom**: Zoomd dashboard numbers don't match AppsFlyer/Adjust data
**Cause**: MMP postback misconfiguration, attribution window mismatch, or multi-touch attribution differences
**Solution**: Verify MMP integration is active with correct postback events. Align attribution windows. Use MMP as single source of truth across all ad partners.

### Albert.ai budget allocation seems wrong
**Symptom**: Albert.ai is allocating budget heavily to one channel while ignoring others
**Cause**: Insufficient event data on underperforming channels, or the AI correctly identified one channel as highest-ROAS
**Solution**: Check if all channels have sufficient conversion events for Albert to learn (typically 50+ events per week). Review if the optimization goal matches your intent (ROAS vs volume). Give Albert 30+ days before overriding its allocations.
