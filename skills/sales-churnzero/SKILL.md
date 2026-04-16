---
name: sales-churnzero
description: "ChurnZero platform help — Health Scores, Plays & Automation, Journeys, Renewal Forecasting, In-App WalkThroughs, Surveys (NPS/CSAT/CES), AI Agents, REST API (OData v4). Use when health scores aren't predicting churn accurately, plays automation isn't triggering, Salesforce or HubSpot sync is broken, reporting dashboards feel inflexible, in-app WalkThroughs aren't reaching users, renewal forecasting numbers don't match CRM, or the ChurnZero API returns unexpected errors. Do NOT use for general customer success strategy (use /sales-customer-success) or NPS/CSAT survey methodology (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in ChurnZero]"
license: MIT
version: 1.0.0
tags: [sales, customer-success, platform]
github: "https://github.com/churnzero"
---

# ChurnZero Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of ChurnZero do you need help with?**
   - A) Health Scores — building ChurnScores, weighting factors, debugging scores that miss churn
   - B) Plays & Automation — triggers, conditions, actions, plays not firing
   - C) Journeys — milestone-based customer journeys, progress tracking
   - D) Integrations — Salesforce, HubSpot, Segment, Mixpanel, data not syncing
   - E) REST API — OData v4 queries, filtering, pagination, authentication
   - F) Reporting & Dashboards — building segments, custom views, exporting data
   - G) In-App Communications — WalkThroughs, announcements, tooltips, banners
   - H) Surveys — NPS, CSAT, CES survey setup, response collection
   - I) Renewal Forecasting Hub — renewal predictions, pipeline accuracy
   - J) AI Agents — autonomous CS actions, meeting follow-ups, email generation
   - K) Admin — user roles, SSO, billing, API keys

2. **What CRM are you using?** (Salesforce, HubSpot, NetSuite, Pipedrive, other, none)

3. **Which ChurnZero edition?** (Professional, Enterprise, unsure)

**Skip-ahead rule:** if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Customer success strategy (health score methodology, churn playbooks, expansion) | `/sales-customer-success {your question}` |
| NPS/CSAT survey design or response rate optimization | `/sales-customer-feedback {your question}` |
| In-app messaging strategy (not ChurnZero-specific) | `/sales-in-app-messaging {your question}` |
| Salesforce/HubSpot CRM configuration (not ChurnZero-specific sync) | `/sales-integration {your question}` |
| Data enrichment for customer profiles | `/sales-enrich {your question}` |
| Comparing ChurnZero vs Vitally vs Gainsight vs Planhat | `/sales-customer-success {your question}` |

When routing, provide the exact command with the user's original question.

Otherwise, answer directly using the platform reference.

## Step 3 — ChurnZero platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints, **also read `references/churnzero-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation. For health score questions, walk through ChurnScore factor selection and weighting. For automation issues, trace the Play trigger→condition→action chain. For integration problems, check field mappings and sync direction. For reporting, help build segments and suggest workarounds for dashboard limitations.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Implementation takes 6-12 weeks.** G2 reviewers (87 mentions) flag the steep learning curve. Plan dedicated CS-ops time. Don't try to configure everything at once — start with health scores OR plays, not both.
- **REST API is Enterprise-only.** Professional edition has no API access. If you need programmatic access, budget for Enterprise pricing.
- **Custom dashboards require Enterprise.** Professional users get inflexible default dashboards (41 G2 mentions). Workaround: export data to Excel/Google Sheets via the live spreadsheet integration.
- **Reporting requires segments first.** You must build a segment before creating a report — this is unintuitive but by design. Pre-build common segments (at-risk, onboarding, renewal window) to speed up reporting.
- **Plays are often created but underutilized.** Start with 3-5 high-impact plays (churn risk, renewal reminder, champion change) rather than building dozens that nobody monitors.
- **Data quality determines success.** "Garbage in, garbage out" is the consensus. If CRM data is messy, fix it before implementing ChurnZero — bad data produces misleading health scores and broken automations.
- **Bidirectional CRM sync can overwrite fields.** Define a clear source-of-truth per field before enabling bidirectional sync with Salesforce or HubSpot. Test with a small account set first.
- **Rate limit is 200 requests/minute.** API returns `429` when exceeded. Use OData pagination (`$top`/`$skip`) and batch requests where possible.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding, expansion, playbook design, CS platform comparison. Install: `npx skills add sales-skills/sales --skill sales-customer-success`
- `/sales-vitally` — Vitally platform help: Health Scores, Playbooks, Projects, API — alternative CS platform. Install: `npx skills add sales-skills/sales --skill sales-vitally`
- `/sales-planhat` — Planhat platform help: Health Scores, Revenue Management, CRM Sync, Automation, MCP Server, API. Install: `npx skills add sales-skills/sales --skill sales-planhat`
- `/sales-customer-feedback` — NPS, CSAT, CES, VoC program design — survey methodology, response rates, closed-loop feedback. Install: `npx skills add sales-skills/sales --skill sales-customer-feedback`
- `/sales-in-app-messaging` — In-app messages for onboarding tours, feature announcements, NPS surveys. Install: `npx skills add sales-skills/sales --skill sales-in-app-messaging`
- `/sales-integration` — Connect ChurnZero to CRM, billing, and analytics tools via native integrations, Zapier, or API. Install: `npx skills add sales-skills/sales --skill sales-integration`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Health scores show green for accounts that churned

**User**: "My ChurnScores aren't catching at-risk accounts — green accounts churned last quarter."

**Approach**: Read platform-guide.md health scores section. Audit ChurnScore factors — likely missing product usage signals or over-weighting login frequency. Check if usage tracking data (via Segment/Mixpanel/Pendo integration) is syncing correctly. Recommend adding lagging indicators (support ticket trend, days since key-feature use) and validating factor weights against 6-12 months of actual churn data.

### Example 2: Play automation not triggering

**User**: "I set up a renewal play to create tasks 90 days before renewal but nothing happens."

**Approach**: Read platform-guide.md plays section. Check: (1) Is the renewal date field populated on accounts? (2) Is the Play active (not draft)? (3) Do the account segment filter conditions match? (4) Check the Play execution log for errors. Walk through the trigger→condition→action chain.

### Example 3: Reporting feels too rigid

**User**: "I need a dashboard showing accounts by health score and renewal date but the default dashboards don't support it."

**Approach**: Read platform-guide.md reporting section. On Professional, custom dashboards aren't available — workaround: build a segment filtering by health score range + renewal date window, then export to Google Sheets via the live spreadsheet integration. On Enterprise, use the custom dashboard builder. For BI-level analysis, connect Snowflake/BigQuery via the data warehouse integration.

## Troubleshooting

### CRM data not syncing or fields being overwritten

- **Check integration status.** Go to Admin → Integrations and verify the CRM connection is active (not disconnected or errored).
- **Check field mappings.** ChurnZero syncs whitelisted fields bidirectionally — verify the fields you expect are selected and the sync direction is correct.
- **Check for duplicate accounts.** If external IDs from CRM don't match ChurnZero's account identifiers, sync may create duplicates instead of updating.

### Dashboards showing stale data

- **Check data source refresh.** Integrations sync every 15 minutes by default. Data warehouse connections (Snowflake, BigQuery) sync on a configured schedule.
- **Check segment definitions.** Reports are segment-based — if the segment criteria don't match your expectations, the dashboard shows unexpected results.
- **Consider the live spreadsheet workaround.** Export segments to Excel 365 or Google Sheets for real-time, auto-updating data outside ChurnZero's dashboard limitations.

### WalkThroughs not displaying to users

- **Check the JavaScript tracking script.** ChurnZero's in-app features require the tracking script installed on your product. Verify it's loaded on the pages where WalkThroughs should appear.
- **Check targeting rules.** WalkThroughs target specific user segments — verify the user matches the segment criteria.
- **Check browser console.** Look for JavaScript errors related to the ChurnZero embed. Ad blockers and CSP headers can prevent loading.
