---
name: sales-pendo
description: "Pendo platform help — product analytics, in-app guides, session replay, NPS/CSAT surveys, feature adoption tracking, Leo AI. Use when Pendo guides aren't showing, feature tagging is tedious, analytics data looks wrong, users aren't completing onboarding, NPS scores are flat, need help with Pendo API or aggregation queries, setting up Pendo for the first time, or comparing Pendo to Appcues or WalkMe. Do NOT use for in-app messaging strategy across platforms (use /sales-in-app-messaging) or general customer feedback strategy (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Pendo]"
license: MIT
version: 1.0.0
tags: [sales, product-analytics, digital-adoption, platform]
github: "https://github.com/pendo-io"
---

# Pendo Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Pendo (install script, tagging, metadata)
   - B) Product Analytics (funnels, paths, retention, feature adoption)
   - C) In-App Guides (tooltips, modals, walkthroughs, Resource Center)
   - D) Session Replay
   - E) Feedback & Surveys (NPS, CSAT, PMF, polls)
   - F) Predict (churn risk, upsell)
   - G) Orchestrate (multi-channel coordination)
   - H) API / Aggregation queries / Data Sync
   - I) Integrations (HubSpot, Salesforce, Segment)
   - J) Pricing / plan comparison
   - K) Something else — describe it

2. **What type of app?**
   - A) Web app (SaaS)
   - B) Mobile app (iOS/Android)
   - C) Both

3. **What Pendo plan are you on?** (Free / Base / Core / Ultimate / Not sure)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| In-app messaging strategy (not Pendo-specific) | `/sales-in-app-messaging {your question}` |
| General NPS/CSAT/VoC program design | `/sales-customer-feedback {your question}` |
| Customer success health scores, churn prevention | `/sales-customer-success {your question}` |
| Connecting Pendo to CRM via Zapier/Make | `/sales-integration {your question}` |

If the question is Pendo-specific, answer directly using the reference below.

## Step 3 — Pendo platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves the API, also **read `references/pendo-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation. Common patterns:

- **Setup**: Install script placement, visitor/account ID strategy, metadata schema design, page/feature tagging plan
- **Analytics**: Funnel construction, path analysis, retention cohorts, feature adoption tracking
- **Guides**: Targeting rules, activation triggers, guide chaining, A/B testing guides
- **Feedback**: Survey timing, throttling, closed-loop with CS tools
- **API**: Aggregation query construction, ETL patterns, metadata bulk updates

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Free plan caps at 500 MAU.** Above that you need Base or higher — no public pricing, expect $15K+/year.
2. **HubSpot and Salesforce integrations are paid add-ons.** Not included in any standard plan — budget separately.
3. **Retroactive analytics only works for tagged pages/features.** Pendo captures raw events automatically, but you can only analyze them retroactively once you tag the pages/features. Tag early.
4. **Guide targeting uses CSS selectors.** If your app redesigns a page, guide anchors break. Use stable selectors (data attributes) instead of auto-generated class names.
5. **Aggregation API uses MongoDB-style pipelines.** The query syntax is powerful but unfamiliar to most teams — expect a learning curve.
6. **Session Replay requires Core plan or higher** (or as a paid add-on on Base). Not available on Free.
7. **Metadata must be pre-defined in the UI** before you can send custom visitor/account properties via the install script or API.
8. **No native email channel.** Pendo only reaches users inside your app. For dormant users, pair with an email tool.

## Related skills

- `/sales-in-app-messaging` — In-app messaging strategy across platforms (Pendo, Appcues, Braze, Iterable). Install: `npx skills add sales-skills/sales --skill sales-in-app-messaging`
- `/sales-customer-feedback` — NPS, CSAT, VoC strategy and platform comparison. Install: `npx skills add sales-skills/sales --skill sales-customer-feedback`
- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding. Install: `npx skills add sales-skills/sales --skill sales-customer-success`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Feature adoption is low after launch
**User says**: "We shipped a new dashboard feature two weeks ago but Pendo shows only 12% of users have tried it. How do I increase adoption?"
**Skill does**: Analyzes the feature's Pendo analytics (paths, funnels from entry points), designs a targeted in-app guide campaign: tooltip on the nav item for users who haven't visited the feature, a walkthrough guide for first-time visitors, and a banner announcement for the broader user base. Includes targeting rules, display frequency, and success metrics.
**Result**: Multi-touch guide campaign with targeting, plus analytics setup to measure before/after adoption rate.

### Example 2: Pendo aggregation query for monthly active features
**User says**: "I need to pull feature usage data from Pendo into our data warehouse for executive reporting."
**Skill does**: Walks through the Aggregation API: endpoint (`POST /api/v1/aggregation`), authentication header, query structure with `featureEvents` source, date filtering with `timeSeries`, and grouping by feature and account. Provides a working JSON query example and suggests scheduling via cron or an ETL tool.
**Result**: Working aggregation query with authentication setup and ETL integration pattern.

### Example 3: Setting up Pendo for the first time
**User says**: "I just got Pendo and need to install it on our React SaaS app. Where do I start?"
**Skill does**: Covers the install script snippet placement, visitor ID and account ID strategy (use your internal user ID, not email), metadata schema design (role, plan, signup date), initial page and feature tagging plan, and first guide creation. Flags common mistakes: using email as visitor ID (breaks on email changes), not pre-defining metadata fields in the UI, and over-tagging features on day one.
**Result**: Complete setup plan with install script, metadata schema, and tagging strategy.

## Troubleshooting

### Guides not appearing for target users
**Symptom**: Guide is active but users don't see it.
**Cause**: CSS selector changed after a deploy, segment targeting is too narrow, or display frequency limit reached.
**Solution**: 1) Check the guide's element targeting — if using auto-detected selectors, switch to a `data-pendo` attribute. 2) Preview the guide on your own account to verify targeting. 3) Check display rules — "show once" means users who dismissed it won't see it again. 4) Verify the user matches the guide's segment.

### Analytics showing data discrepancies
**Symptom**: Feature usage numbers in Pendo don't match your own analytics.
**Cause**: Different event definitions, Pendo deduplication logic, or install script not firing on all pages.
**Solution**: 1) Verify the install script loads on every page (check for SPA route-change handling). 2) Compare event definitions — Pendo counts unique visitors per day by default, not raw events. 3) Check if ad blockers are suppressing the Pendo agent in your user base. 4) Use the browser console (`pendo.validateInstall()`) to verify the agent is running.

### Feature/page tagging is overwhelming
**Symptom**: Hundreds of untagged pages and features, unclear where to start.
**Cause**: Pendo captures all clicks and page views but requires manual tagging to make them meaningful.
**Solution**: 1) Start with your top 5-10 features by business value — don't try to tag everything. 2) Use URL rules for pages (wildcards for dynamic segments). 3) For features, tag the primary CTA element, not every clickable item. 4) Establish a naming convention early (Module > Feature > Action). 5) Assign tagging ownership by product area.
