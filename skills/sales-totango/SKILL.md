---
name: sales-totango
description: "Totango platform help — SuccessBLOCs, SuccessPlays, Health Scores, Customer 360, Touchpoints, Customer Data Hub, Unison AI, Catalyst, email campaigns, REST API. Use when implementation is taking too long and you need a setup plan, SuccessPlays aren't triggering or running on the wrong accounts, health scores don't match actual churn risk, integrations keep breaking or disconnecting from Salesforce or HubSpot, reports and dashboards feel rigid and you can't build custom views, Totango API returns errors or you need to query accounts, or you're migrating to Totango from Gainsight or ChurnZero. Do NOT use for general customer success strategy (use /sales-customer-success) or NPS/CSAT survey methodology (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Totango]"
license: MIT
version: 1.0.0
tags: [sales, customer-success, platform]
github: "https://github.com/totango"
---

# Totango Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Totango do you need help with?**
   - A) SuccessBLOCs — modular journey templates, best-practice frameworks
   - B) SuccessPlays — automated workflows, triggers not firing, wrong audience
   - C) Health Scores — building or fixing composite scores, Unison AI churn prediction
   - D) Integrations — Salesforce, HubSpot, Zendesk, Segment, data not syncing
   - E) Customer Data Hub — data imports, ETL, CSV uploads, SFTP jobs
   - F) API — REST endpoints, search queries, touchpoints, authentication
   - G) Reporting & Dashboards — segments, custom views, exporting data
   - H) Catalyst — expansion signals, customer growth tracking
   - I) Email campaigns — campaigns from Totango, deliverability, templates
   - J) Admin — user roles, SSO/SCIM, billing, tokens
   - K) Migration — moving from another CS platform to Totango

2. **What CRM are you using?** (Salesforce, HubSpot, MS Dynamics, Zoho, other, none)

3. **Which Totango product/tier?** (Starter, Growth, Enterprise, Unison AI, Catalyst, unsure)

**Skip-ahead rule:** if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Customer success strategy (health score methodology, churn playbooks, expansion) | `/sales-customer-success {your question}` |
| NPS/CSAT survey design or response rate optimization | `/sales-customer-feedback {your question}` |
| In-app messaging strategy (not Totango-specific) | `/sales-in-app-messaging {your question}` |
| Salesforce/HubSpot CRM configuration (not Totango-specific sync) | `/sales-integration {your question}` |
| Data enrichment for customer profiles | `/sales-enrich {your question}` |
| Comparing Totango vs Gainsight vs ChurnZero vs Vitally | `/sales-customer-success {your question}` |

When routing, provide the exact command with the user's original question.

Otherwise, answer directly using the platform reference.

## Step 3 — Totango platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints, **also read `references/totango-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation. For SuccessPlay issues, trace the trigger→segment→action chain. For health score problems, audit factor weights and data freshness. For integration breakages, check connection status and field mappings. For reporting limits, suggest segment-based workarounds or data export approaches.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Implementation takes 200+ hours for complex setups.** G2 reviewers consistently flag the learning curve. Start with one SuccessBLOC (e.g., onboarding), not five at once. Use pre-built templates from the SuccessBLOC Marketplace to accelerate.
- **The UI has a steep learning curve.** Fields appear in some filters but not others. Timeline views require too many clicks. Budget 2-4 weeks for CSM team training.
- **Integrations break silently.** CRM connections can disconnect without alerts. Check Admin → Integrations status weekly. Set up webhook alerts via Customer Data Hub execution reporting to catch sync failures.
- **Reporting requires segments first.** Like ChurnZero, you must build a segment before creating a report. Pre-build common segments (at-risk, onboarding, renewal window) on day one.
- **Starter plan is limited.** Only 2 users, 500 accounts, 2,000 emails/month, single account hierarchy. Most teams outgrow it quickly.
- **Frequent software updates can disrupt workflows.** G2 reviewers note updates sometimes change UI without warning. Document your current workflow steps and check release notes.
- **API rate limit is 100 calls/minute per token.** Lower than ChurnZero (200/min). Use pagination and batch requests. Search API returns max 1,000 results per call — use offset for larger datasets.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding, expansion, playbook design, CS platform comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-success`
- `/sales-churnzero` — ChurnZero platform help: alternative CS platform with in-app engagement and OData API. Install: `npx skills add sales-skills/sales --skills sales-churnzero`
- `/sales-vitally` — Vitally platform help: alternative CS platform with fast setup and AI copilot. Install: `npx skills add sales-skills/sales --skills sales-vitally`
- `/sales-planhat` — Planhat platform help: alternative CS platform with strong data modeling and MCP server. Install: `npx skills add sales-skills/sales --skills sales-planhat`
- `/sales-customer-feedback` — NPS, CSAT, CES, VoC program design. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-integration` — Connect Totango to CRM, billing, and analytics tools. Install: `npx skills add sales-skills/sales --skills sales-integration`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: SuccessPlay not triggering on the right accounts

**User**: "I set up a SuccessPlay for renewal follow-up but it's running on accounts that already renewed."

**Approach**: Read platform-guide.md SuccessPlays section. Check: (1) Is the segment filter using the correct renewal date field (actual vs. contract end)? (2) Is the SuccessPlay active and not in draft? (3) Is the segment re-evaluating dynamically or is it a static snapshot? Walk through the trigger→segment→action chain. Verify the renewal date field is populated and current in the Customer Data Hub.

### Example 2: Salesforce integration keeps disconnecting

**User**: "Our Salesforce sync drops every few days and we miss account updates."

**Approach**: Read platform-guide.md integrations section. Check Admin → Integrations for error messages. Common causes: Salesforce API limits exceeded, token expiration, field mapping conflicts. Set up Customer Data Hub execution reporting via webhook to get proactive alerts on sync failures. Verify the Salesforce connected user has sufficient API permissions and hasn't been deactivated.

### Example 3: Need custom reporting beyond what dashboards allow

**User**: "I need a report showing accounts by health score, segment, and last touchpoint date but the dashboard won't let me combine these."

**Approach**: Read platform-guide.md reporting section. Build a segment with multi-criteria filters (health score range + account segment). Export the segment data to a spreadsheet for pivot table analysis. On Enterprise, explore the data warehouse integration (Snowflake/BigQuery) for BI-level reporting. Consider using the Search API to pull account data programmatically for custom dashboards.

## Troubleshooting

### Integrations keep breaking or data isn't syncing

- **Check integration status.** Go to Admin → Integrations and verify each CRM connection is active. Look for error messages or "disconnected" status.
- **Check Customer Data Hub jobs.** Failed CSV imports or SFTP jobs can silently fail. Review execution logs and set up webhook reporting for failure alerts.
- **Check field mappings.** Mismatched field types (text vs. number, date format differences) cause silent sync failures. Verify field types match between Totango and your CRM.

### Health scores don't match reality — green accounts churning

- **Audit your health score factors.** Check if product usage data is actually flowing into Totango. If the usage integration is broken, scores default to stale data.
- **Check Unison AI vs manual scores.** If using Unison AI models, verify the training data covers enough churn events. Standard models need 6+ months of data.
- **Segment your scoring model.** Enterprise and SMB accounts churn for different reasons. A single health model may produce misleading scores across segments.

### SuccessPlays running on wrong accounts or not at all

- **Check the segment criteria.** SuccessPlays run against segments — if the segment definition is wrong, the play runs on the wrong accounts.
- **Check play status.** Plays in "Draft" mode don't execute. Ensure the play is published and active.
- **Check execution frequency.** Some plays run on a schedule (daily, weekly). If you just created the segment, the play may not have run yet.
