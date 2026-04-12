---
name: sales-adwake
description: "Adwake platform help — mobile app user acquisition, branding, and in-app retargeting powered by Entravision. Use when app install costs (CPI/CPA) are too high, mobile UA campaigns aren't scaling, retargeted app users aren't converting, you're comparing mobile advertising partners, or you need help choosing between managed service and self-serve DSPs for mobile apps. Do NOT use for web retargeting or display ads (use /sales-retargeting or /sales-adroll), B2B account-based advertising (use /sales-b2b-advertising)."
argument-hint: "[describe what you need help with in Adwake]"
license: MIT
version: 1.0.0
tags: [sales, mobile-advertising, user-acquisition, retargeting, platform]
---
# Adwake Platform Help

Help the user with Adwake — the mobile app user acquisition and advertising platform by Entravision. Adwake is a managed-service platform covering app install campaigns, brand awareness, in-app retargeting, and loyalty/rewards across 100+ markets.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) User acquisition — app install campaigns, CPI/CPA optimization
   - B) Branding — app awareness, category leadership
   - C) Retargeting — re-engaging lapsed app users, boosting LTV
   - D) Loyalty / rewards — Playback Rewards integration
   - E) Comparing Adwake with other mobile advertising partners
   - F) Campaign reporting and optimization
   - G) Something else — describe it

2. **What's your app vertical?**
   - A) Gaming
   - B) E-commerce / retail
   - C) Travel & entertainment
   - D) Fintech
   - E) Food & beverage / delivery
   - F) Other — describe it

3. **Where are you in the process?**
   - A) Evaluating mobile advertising partners
   - B) Onboarding with Adwake
   - C) Already running campaigns — need to optimize
   - D) Need to understand reporting/metrics

**If the user's prompt already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

If the user's question maps to another skill, route them:
- Web/display retargeting (not in-app) → "This is a web retargeting question — run: `/sales-retargeting {your question}`"
- B2B account-based advertising → "This is a B2B ad question — run: `/sales-b2b-advertising {your question}`"
- AdRoll display/social retargeting → "This is an AdRoll question — run: `/sales-adroll {your question}`"
- In-app retargeting DSP (Remerge) → "This is a Remerge question — run: `/sales-remerge {your question}`"
- Push notification re-engagement → "This is a push notification question — run: `/sales-push-notification {your question}`"

Otherwise, answer directly using the platform reference.

## Step 3 — Adwake platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing model, campaign types, verticals, integrations, Playback Rewards, and managed service workflow.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

### Evaluating Adwake
1. **Define goals** — UA scale, target CPI, ROAS threshold, geographic markets
2. **Compare managed vs self-serve** — Adwake is managed service (less control, more expertise); self-serve DSPs (Remerge, Liftoff) give more direct control
3. **Request a pilot** — ask for a 30-60 day test with clear KPIs before committing
4. **Verify attribution** — confirm MMP integration (AppsFlyer, Adjust, Branch) and attribution methodology
5. **Check vertical expertise** — Adwake has strong gaming, travel, fintech, retail verticals

### Optimizing running campaigns
1. **Check creative performance** — multivariate testing can drop CPI by 30%
2. **Review audience segmentation** — narrow to highest-converting segments
3. **Evaluate channel mix** — cross-platform optimization across ad networks
4. **Monitor incrementality** — ask for incrementality testing to prove true lift

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about pricing and service model that may be outdated.*

1. **Managed service means less direct control** — Adwake runs campaigns for you. If you need self-serve, real-time bid control, consider Remerge or Liftoff instead.

2. **No public API** — unlike self-serve DSPs, Adwake doesn't expose a public API. Reporting and optimization go through their dashboard and account team.

3. **Performance-based pricing is opaque** — "pay for results" sounds great but means you can't always see the full cost structure. Ask for transparent CPM/CPC breakdowns alongside CPI/CPA.

4. **MMP integration is critical** — without proper AppsFlyer/Adjust/Branch setup, attribution will be unreliable. Verify postback configuration before campaign launch.

5. **iOS IDFA limitations are industry-wide** — only 20-35% of iOS users opt in to tracking. This limits iOS targeting precision for any mobile advertising partner, not just Adwake.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-remerge` — Remerge platform help — in-app retargeting DSP with self-serve programmatic buying, incrementality measurement
- `/sales-retargeting` — Retargeting strategy across all platforms (web + app) — audience segmentation, creative, attribution
- `/sales-b2b-advertising` — Account-based B2B advertising — ABM ads, display, LinkedIn Ads
- `/sales-adroll` — AdRoll platform help — web retargeting, display/social/CTV campaigns, RollWorks ABM
- `/sales-push-notification` — Push notification strategy — alternative re-engagement channel for mobile apps
- `/sales-in-app-messaging` — In-app messaging strategy — another re-engagement channel alongside retargeting
- `/sales-loyalty` — Loyalty program strategy — relevant to Adwake's Playback Rewards
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Evaluating Adwake for a gaming app
**User says**: "I have a mobile game launching next month. Should I use Adwake or run my own UA campaigns on Meta and Google?"
**Skill does**: Compares managed service (Adwake — handles campaign ops, creative optimization, multi-network buying) vs self-serve (Meta/Google — more control but requires in-house expertise). Recommends Adwake for teams without dedicated UA managers, self-serve for teams with ad ops experience. Suggests requesting a pilot campaign with clear CPI targets.
**Result**: User has a decision framework for managed vs self-serve mobile UA.

### Example 2: Optimizing CPI on running campaigns
**User says**: "Our Adwake campaigns are getting $4 CPI on Android but we need to hit $2.50. What should I ask them to change?"
**Skill does**: Recommends requesting creative refresh (multivariate testing), audience narrowing to highest-converting segments, geo-optimization (shifting budget to lower-CPI markets), and bid strategy adjustment. Suggests asking for an incrementality report to verify true conversion lift.
**Result**: User has specific optimization requests to bring to their Adwake account team.

### Example 3: Comparing mobile advertising partners
**User says**: "We're choosing between Adwake, Remerge, and Liftoff for our e-commerce app retargeting. What should I pick?"
**Skill does**: Compares based on service model (Adwake: managed service across UA + retargeting, Remerge: self-serve retargeting-first DSP, Liftoff: self-serve UA + retargeting). Recommends Adwake for teams wanting full-service including UA, Remerge for retargeting-only with incrementality focus, Liftoff for broad UA + retargeting with more hands-on control.
**Result**: User has a clear comparison with trade-offs.

## Troubleshooting

### CPI is higher than expected
**Symptom**: App install costs are above target benchmarks
**Cause**: Creative fatigue, broad audience targeting, wrong geo mix, or competitive vertical (fintech/gaming CPI is naturally higher)
**Solution**: Request creative refresh with multivariate testing. Ask Adwake to narrow audiences to highest-converting segments. Shift budget toward lower-CPI geos (LATAM, APAC) if quality allows. Compare against industry benchmarks — iOS avg $4.70, Android avg $3.40 globally.

### Can't verify attribution
**Symptom**: Adwake reporting doesn't match MMP data
**Cause**: MMP postback misconfiguration, attribution window mismatch, or duplicate attribution across multiple ad partners
**Solution**: Verify MMP integration is active and postbacks are firing for all relevant events. Align attribution windows between Adwake and your MMP. If running multiple ad partners, use your MMP as the single source of truth and ask each partner to deduplicate.

### Unclear ROI on managed service
**Symptom**: Getting installs but can't tell if Adwake is worth the spend vs running ads directly
**Cause**: No incrementality measurement, or comparing Adwake's all-in cost against self-serve media costs only (ignoring internal labor)
**Solution**: Request an incrementality test (test vs holdout). Factor in full cost comparison: Adwake fee vs in-house UA manager salary + ad ops tools + creative production. Managed service typically makes sense when internal UA expertise is limited.
