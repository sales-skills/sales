---
name: sales-vwo
description: "VWO platform help — A/B testing, multivariate tests, heatmaps, session recordings, personalization, feature flags, server-side experimentation, SDKs, REST API. Use when A/B tests aren't reaching significance, visual editor is breaking your site, heatmaps aren't showing useful data, personalization rules aren't targeting correctly, feature flags need rollout strategy, MTU quota is running out, or you're comparing VWO vs Optimizely vs AB Tasty. Do NOT use for funnel strategy (use /sales-funnel) or checkout optimization strategy (use /sales-checkout)."
argument-hint: "[describe what you need help with in VWO]"
license: MIT
version: 1.0.0
tags: [sales, cro, experimentation, ab-testing, personalization, platform]
github: "https://github.com/wingify"
---
# VWO Platform Help

Help the user with VWO (Visual Website Optimizer) platform questions — from A/B test setup and heatmap analysis through personalization rules, feature flags, SDK integration, and API usage.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **Which VWO module do you need help with?**
   - A) Testing — A/B, multivariate, split URL tests, visual editor
   - B) Insights — heatmaps, session recordings, form analytics, surveys
   - C) Personalize — visitor segmentation, dynamic content, targeting rules
   - D) Feature Experimentation — feature flags, server-side testing, SDKs
   - E) Web Rollouts — deploying changes without code deploys
   - F) API / integrations — REST API, webhooks, CRM/analytics integrations
   - G) Pricing / plans — MTU limits, module costs, plan comparison
   - H) Something else — describe it

2. **What's your situation?**
   - A) Setting up VWO for the first time
   - B) Test isn't working / results look wrong
   - C) Need to optimize an existing setup
   - D) Integrating VWO with other tools
   - E) Evaluating VWO vs alternatives

3. **What's your VWO plan?** (Starter/Growth/Pro/Enterprise — affects feature availability)

**If the user's request already provides enough context, skip to the relevant step.** Lead with your best-effort answer, then ask 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Funnel A/B testing strategy → `/sales-funnel {your question}`
- Checkout page optimization → `/sales-checkout {your question}`
- CRM / analytics integration architecture → `/sales-integration {your question}`
- Tool comparison (VWO vs Optimizely broadly) → answer directly using platform knowledge

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — VWO platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, SDK setup, API overview.

Answer the user's question using only the relevant section. Don't dump the full reference.

**For API questions**, also read `references/vwo-api-reference.md` for endpoint details, authentication, and SDK documentation.

## Step 4 — Actionable guidance

You no longer need the full platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** — numbered steps to accomplish their goal in VWO
2. **Configuration recommendations** — specific settings, with navigation paths in the VWO dashboard
3. **Statistical guidance** — minimum sample sizes, when to call a test, Bayesian vs frequentist interpretation
4. **Verification** — how to confirm the setup works (preview mode, debug console, SmartCode check)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API access is Enterprise-only.** Don't recommend REST API solutions to Growth/Pro users — they need to upgrade or use the visual editor and dashboard.
- **MTU quota stops tests immediately.** When monthly tracked users are exhausted, all active tests and data capture halt until the next billing cycle. No overage billing — just a hard stop.
- **Visual editor breaks dynamic/SPA sites.** The editor replaces static HTML — it can't handle React, Vue, or dynamically rendered content reliably. Recommend server-side testing or custom code for SPAs.
- **VWO SmartCode must load before page content.** Place it synchronously in `<head>` to avoid flicker. Async loading causes visible content changes (flash of original content).
- **Bayesian statistics ≠ "call the test early."** VWO uses Bayesian methods, but you still need adequate sample size. Don't declare winners with fewer than 100 conversions per variation.
- **VWO merged with AB Tasty (Jan 2026).** Platform integration is ongoing — some AB Tasty features may appear in VWO, and pricing/packaging may change.
- **Heatmap data sampling.** On high-traffic sites, VWO samples heatmap data rather than recording every visitor. Patterns are reliable but individual user tracking may be incomplete.
- **Plan-gated features change frequently.** Personalization, server-side testing, and advanced analytics may require Pro or Enterprise. Always verify current plan access.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-funnel` — Sales funnel strategy, A/B testing priorities, conversion benchmarks, funnel structure
- `/sales-checkout` — Checkout page optimization, order bumps, cart abandonment recovery
- `/sales-integration` — Connecting VWO to CRM, analytics, and data warehouse tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: A/B test not reaching significance

**User**: "I've been running an A/B test on my pricing page for two weeks but VWO still shows inconclusive results."

**Approach**: Check the test's sample size and conversion count per variation. VWO needs ~100+ conversions per variation for reliable Bayesian results. If traffic is low, recommend extending the test or testing a more impactful change (headline swap > button color). Review the test setup for proper goal configuration and check if bots are inflating visitor counts without converting.

### Example 2: Heatmap analysis for checkout drop-off

**User**: "Where are people dropping off on my checkout page? I set up heatmaps but I'm not sure what to look for."

**Approach**: Guide through VWO Insights — set up a click heatmap and scroll map on the checkout page. Look for: clicks on non-clickable elements (confusion), scroll drop-off before the CTA (page too long or trust signals missing), rage clicks on form fields (validation frustration). Suggest pairing with session recordings filtered to checkout bounces for qualitative context.

### Example 3: Feature flag rollout with VWO FME

**User**: "I want to roll out a new checkout flow to 10% of users first, then gradually increase."

**Approach**: Set up a feature flag in VWO FME with a percentage-based rollout rule. Install the appropriate SDK (Node.js, Python, etc.), initialize with the account ID and SDK key, evaluate the flag at runtime. Start at 10%, monitor error rates and conversion, bump to 25% → 50% → 100%. Use environment-specific rules for staging vs production.

## Troubleshooting

### "My A/B test shows a winner but revenue didn't change"

- **Check your primary goal.** VWO may be optimizing for clicks or page views, not actual conversions/revenue. Switch the primary metric to a revenue-correlated event.
- **Check for segment pollution.** If the test ran on all traffic including bots, internal users, or irrelevant segments, the "winner" may not reflect real customer behavior. Use VWO's segmentation to exclude non-customer traffic.
- **Verify the test ran for a full business cycle.** Weekend vs weekday behavior varies significantly. A test that ran Mon-Thu may show different results than one covering a full week.

### "Visual editor changes aren't showing on my site"

- **Verify SmartCode installation.** Check the browser console for VWO initialization. The SmartCode must be in `<head>` and load synchronously. Use VWO's Chrome extension to debug.
- **Check for caching.** CDN or browser cache may serve the original page. Test in incognito mode with cache disabled.
- **Dynamic content conflict.** If your site renders content via JavaScript frameworks (React, Vue, Next.js), the visual editor changes may be overwritten after page load. Use custom code or the VWO Code Editor instead.

### "MTU quota exhausted mid-month"

- **Understand VWO's MTU counting.** A visitor is only counted as an MTU when they enter a campaign. The same visitor across multiple campaigns of the same product = 1 MTU, but across different VWO products = separate MTUs.
- **Reduce MTU consumption.** Target tests to specific pages/segments instead of site-wide. Use URL targeting and audience conditions to limit who enters campaigns.
- **Plan for next month.** MTU quota resets at billing cycle. Consider upgrading if you consistently exhaust quota, or consolidate tests to run sequentially rather than simultaneously.
