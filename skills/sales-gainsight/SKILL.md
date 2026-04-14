---
name: sales-gainsight
description: "Gainsight platform help — CS health scores, CTAs, playbooks, success plans, Journey Orchestrator, PX in-app engagement, Staircase AI, Skilljar education, REST API. Use when health scores aren't predicting churn, CTAs aren't triggering from rules engine, success plans need automation, Salesforce sync is broken, Journey Orchestrator emails aren't sending, PX in-app guides aren't showing, Staircase sentiment seems wrong, Scorecard weights need tuning, or API bulk loads are failing. Do NOT use for general customer success strategy (use /sales-customer-success) or NPS/CSAT survey methodology (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Gainsight]"
license: MIT
version: 1.0.0
tags: [sales, customer-success, platform]
github: "https://github.com/gainsight"
---
# Gainsight Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Gainsight do you need help with?**
   - A) Health Scores / Scorecards — building, weighting, debugging composite scores
   - B) CTAs & Cockpit — creating, managing, bulk closing, rule-triggered CTAs
   - C) Playbooks — designing task sequences attached to CTAs
   - D) Success Plans — creating objectives, tracking milestones, templates
   - E) Journey Orchestrator — email/survey programs, audience criteria, scheduling
   - F) Integrations — Salesforce sync, Snowflake, Segment, data connectors
   - G) REST API — Company, Person, CTA, Success Plan, Custom Object, Bulk APIs
   - H) Gainsight PX — in-app guides, product analytics, feature adoption, PX API
   - I) Staircase AI — conversation intelligence, sentiment, risk/expansion signals
   - J) Skilljar — customer education, LMS, certifications, course analytics
   - K) Customer Communities — inSided community platform, ideation, knowledge base
   - L) Timeline — logging activities, Salesforce Activity sync, email integration
   - M) Dashboards & Reporting — building reports, multi-select fields, C360 layout
   - N) Admin — user management, permissions, license types, data management
   - O) Something else — describe it

2. **What CRM are you using?** (Salesforce, HubSpot, Pipedrive, none)

3. **Which Gainsight products do you have?** (CS only, CS + PX, CS + Staircase, full CustomerOS, unsure)

**Skip-ahead rule:** if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Customer success strategy (health score methodology, churn playbooks, expansion) | `/sales-customer-success {your question}` |
| NPS/CSAT survey design or response rate optimization | `/sales-customer-feedback {your question}` |
| Choosing between CS platforms (Gainsight vs Vitally vs ChurnZero) | `/sales-customer-success {your question}` |
| CRM data quality or deduplication | `/sales-data-hygiene {your question}` |
| Connecting Gainsight to non-native tools via Zapier/webhooks | `/sales-integration {your question}` |

When routing, provide the exact command with the user's original question.

Otherwise, answer directly using the platform reference.

## Step 3 — Gainsight platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints, **also read `references/gainsight-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

For health score questions, audit indicator selection and weighting against actual churn data. For CTA/playbook issues, trace the rule→trigger→action chain. For API questions, verify auth headers, rate limits, and batch sizes. For Salesforce sync, check connector config, real-time vs batch, and field mapping direction.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Implementation takes 2-6 months, not weeks.** Budget for dedicated admin time. Most failed deployments trace back to rushing setup or not having a Gainsight admin. Consider third-party implementation partners for complex orgs.
- **You need a full-time Gainsight admin.** This is not optional for mid-to-large deployments. The platform's power comes from configuration depth, which requires ongoing maintenance.
- **Health scores need 6-10 months before adjusting weights.** Changing weights too early means you can't validate against actual churn data. Start with 4-5 indicators, run retroactive analysis, then refine.
- **Sync rate limits are strict.** Synchronous APIs: 100 calls/min, 50K/day. Async (Bulk): 10/hr, 100/day. Plan batch loads carefully — hitting limits blocks all API traffic for the window.
- **Salesforce real-time sync only works for one job per object.** You can enable real-time on OOB jobs (Accounts, Contacts, Cases) or custom jobs, but only one real-time job per object type.
- **PX is a separate product with separate pricing.** PX (Product Experience) uses MAU-based pricing ($30K-100K+/yr). Don't assume it's included with CS — check your contract.
- **Staircase AI sentiment can lag behind reality.** It analyzes conversation patterns over time. A single bad call won't immediately flip sentiment to red. Check the underlying conversation timeline if the score feels wrong.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding, expansion, playbook design, CS platform comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-success`
- `/sales-customer-feedback` — NPS, CSAT, CES, VoC program design — survey methodology, response rates, closed-loop feedback. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-vitally` — Vitally platform help: Health Scores, Playbooks, Projects, API. Install: `npx skills add sales-skills/sales --skills sales-vitally`
- `/sales-churnzero` — ChurnZero platform help: ChurnScores, Plays, Journeys, API. Install: `npx skills add sales-skills/sales --skills sales-churnzero`
- `/sales-totango` — Totango platform help: SuccessBLOCs, SuccessPlays, Health Scores, API. Install: `npx skills add sales-skills/sales --skills sales-totango`
- `/sales-planhat` — Planhat platform help: Health Scores, Agentic Automation, API. Install: `npx skills add sales-skills/sales --skills sales-planhat`
- `/sales-integration` — Connect Gainsight to CRM, billing, and analytics tools. Install: `npx skills add sales-skills/sales --skills sales-integration`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Health scores showing green for accounts that churned

**User**: "Our Scorecard shows green for accounts that churned last quarter — what's wrong?"

**Approach**: Read platform-guide.md Scorecards section. Audit the measure selection — likely over-indexing on login frequency (vanity metric) and missing engagement decline signals (support ticket trend, email responsiveness, champion departure). Run a retroactive analysis: pull 12 months of Scorecard data alongside actual churn events. If Green accounts churned, the indicators or thresholds are wrong. Add measures for support ticket volume trend and days-since-last-QBR. Reweight product usage to 40-50%.

### Example 2: Bulk closing CTAs from rule engine

**User**: "I have 200 stale CTAs I need to close. Can I do this through the rules engine instead of one by one?"

**Approach**: Read platform-guide.md CTA section. Use the Rules Engine with a "Set CTA to Closed" action. Create a rule that filters CTAs by status (Open) + due date (older than X days) + type. Alternatively, use the CTA API's Update endpoint to bulk-update status to Closed via script — batch 50 records per call.

### Example 3: Salesforce data not syncing to Timeline

**User**: "I set up the Salesforce Activity sync but events aren't showing in Timeline."

**Approach**: Read platform-guide.md Salesforce integration section. Check: (1) Is the Salesforce Connector active in Connectors 2.0? (2) Is the Activity Sync job configured for both Event and Task objects? (3) Are the activity types whitelisted in Timeline Admin settings? (4) Check if real-time sync is enabled — batch sync only runs on schedule. (5) Verify field mappings match between Salesforce Activity fields and Gainsight Timeline fields.

## Troubleshooting

### Implementation is overwhelming — where to start

- **Phase 1 (weeks 1-4)**: Get data flowing — connect Salesforce, set up Company and Person data sync, configure C360 layout with core fields. Don't touch health scores yet.
- **Phase 2 (weeks 5-8)**: Build 3-5 CTAs for your most critical moments (renewal approaching, usage drop, new customer onboarded). Attach simple playbooks.
- **Phase 3 (months 3-6)**: Build your first Scorecard with 4-5 indicators. Run it in parallel with your existing health assessment for 2+ months before trusting it.
- **Don't try to boil the ocean.** Gainsight has dozens of modules. Pick 2-3 that solve your biggest pain, get adoption, then expand.

### Scorecard doesn't correlate with actual churn

- **Run retroactive analysis.** Export 12 months of Scorecard snapshots alongside renewal outcomes. If Red accounts renewed and Green accounts churned, your measures are wrong.
- **Check data freshness.** If product usage data syncs daily but Scorecard recalculates weekly, you're always behind. Align refresh cadences.
- **Remove vanity metrics.** Login count and page views are noise for most B2B SaaS. Replace with outcome-based measures (goals achieved, key feature adoption rate).

### Need a dedicated Gainsight admin but can't justify headcount

- **Start with a fractional admin.** Several consulting firms specialize in Gainsight administration (check the Gainsight Marketplace under Service Partners).
- **Train an existing CS Ops person.** Gainsight University offers free admin certification. Budget 20-40 hours for initial training.
- **Use Gainsight's Professional Services.** They offer implementation and ongoing optimization packages — expensive but faster than hiring.
