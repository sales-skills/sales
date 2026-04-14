---
name: sales-planhat
description: "Planhat platform help — Health Scores, Agentic Automation, Revenue Management, CRM Sync, Enduser Tracking, Projects, NPS, REST API, MCP Server. Use when health scores aren't reflecting churn risk, CRM sync is overwriting fields or not pulling data, metrics take hours to build and formulas keep breaking, automation rules aren't triggering, revenue or license data doesn't match Salesforce, enduser tracking isn't capturing product usage, or the Planhat API returns unexpected errors. Do NOT use for general customer success strategy (use /sales-customer-success) or NPS/CSAT survey methodology (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Planhat]"
license: MIT
version: 1.0.0
tags: [sales, customer-success, platform]
github: "https://github.com/planhat"
---

# Planhat Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Planhat do you need help with?**
   - A) Health Scores — building composite scores, weighting indicators, debugging scores that don't reflect reality
   - B) CRM Sync — Salesforce, HubSpot, or Pipedrive sync issues, field mappings, bidirectional conflicts
   - C) Revenue Management — Licenses, Opportunities, Invoices, renewal tracking, ARR/MRR calculations
   - D) Automation — triggers, flows, connections, code execution, actions not firing
   - E) Enduser & Usage Tracking — user activity, product analytics, Segment/Mixpanel/Pendo integration
   - F) Metrics & Reporting — custom metrics, calculated fields, dashboards, metric build delays
   - G) REST API — creating/updating Companies, Endusers, Assets, bulk upsert, authentication
   - H) MCP Server — Claude/ChatGPT integration, OAuth setup, CRUD operations
   - I) NPS — sending surveys, response tracking, scoring
   - J) Projects & Tasks — onboarding templates, task management, milestones
   - K) Integrations — Slack, Teams, Zendesk, Intercom, Gong, data warehouse sync
   - L) Admin — Service Accounts, roles, SSO, billing

2. **What CRM are you using?** (Salesforce, HubSpot, Pipedrive, none)

3. **Which Planhat plan?** (Start-Up, Professional, Enterprise, unsure)

**Skip-ahead rule:** if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Customer success strategy (health score methodology, churn playbooks, expansion) | `/sales-customer-success {your question}` |
| NPS/CSAT survey design or response rate optimization | `/sales-customer-feedback {your question}` |
| Salesforce/HubSpot CRM configuration (not Planhat-specific sync) | `/sales-integration {your question}` |
| Data enrichment for customer profiles | `/sales-enrich {your question}` |
| Comparing Planhat vs Vitally vs Gainsight vs ChurnZero | `/sales-customer-success {your question}` |

When routing, provide the exact command with the user's original question.

Otherwise, answer directly using the platform reference.

## Step 3 — Planhat platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints, **also read `references/planhat-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation. For health score questions, walk through indicator selection and weighting. For CRM sync issues, check field mappings, sync direction, and conflict resolution rules. For metric problems, check formula syntax and the 2-3 hour build cycle. For automation issues, trace the trigger→condition→action chain.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Steep learning curve is the #1 complaint.** G2 reviewers consistently flag being overwhelmed by flexibility. Plan 3-6 weeks for full setup. Start with one module (health scores OR automation), get it working, then expand.
- **Metrics take 2-3 hours to build.** If the formula is wrong, you wait that long to find out. Test metric formulas on a small dataset first. Save frequently. Double-check before triggering a full rebuild.
- **CRM sync can overwrite fields.** Salesforce bidirectional sync + ingestion rules assume clean data. If CRM data is messy, fields get overwritten or duplicates are created. Define clear source-of-truth rules per field.
- **License ingestion assumes clean opportunity data.** Converting Salesforce opportunities to Planhat licenses requires uniform close dates, amounts, and stage names. Bad data produces bad licenses.
- **Rate limit is 200 API calls/min (soft limit).** Hard limit ~150 req/sec with up to 50 parallel. Bulk upsert supports up to 5,000 objects per request. Analytics endpoint (`analytics.planhat.com`) has separate, higher limits.
- **Email marketing is plan-gated.** Full email campaign features require add-on purchase. Don't assume email marketing is included on your plan.
- **Renewal-centric revenue model.** Most revenue calculations assume renewal-based business. If your model isn't renewal-based (usage-based, project-based), you'll need custom metric workarounds.
- **Reporting tables can't sum fields or drag columns.** Workaround: export to CSV/spreadsheet or use data warehouse sync + BI tool for advanced reporting.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding, expansion, playbook design, CS platform comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-success`
- `/sales-vitally` — Vitally platform help: Health Scores, Playbooks, Projects, API — alternative CS platform. Install: `npx skills add sales-skills/sales --skills sales-vitally`
- `/sales-customer-feedback` — NPS, CSAT, CES, VoC program design — survey methodology, response rates, closed-loop feedback. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-integration` — Connect Planhat to CRM, billing, and analytics tools via native integrations, Zapier, or API. Install: `npx skills add sales-skills/sales --skills sales-integration`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Health score shows green for accounts that churned

**User**: "My health scores aren't predicting churn — green accounts are leaving."

**Approach**: Read platform-guide.md health scores section. Audit indicator selection — likely missing usage/engagement signals or over-weighting login frequency. Check if data sources (product analytics via Segment/Mixpanel, support tickets via Zendesk) are syncing. Recommend adding lagging indicators (support ticket trend, days since last key-feature use) and validating weights against 6-12 months of churn data. Use the 4-metric framework from /sales-customer-success if building from scratch.

### Example 2: Salesforce sync creating duplicate companies

**User**: "Every time I sync, Planhat creates duplicate companies instead of updating existing ones."

**Approach**: Read platform-guide.md CRM sync section. Check: (1) Is the external ID (Salesforce Account ID) mapped correctly as the keyable/unique identifier? (2) Are ingestion rules matching on the right field? Planhat uses "keyables" for uniqueness — if the external ID isn't set or doesn't match, it creates a new record. (3) Check the help center article on "Data Uniqueness and Keyables" for field mapping rules. Fix the keyable mapping, then deduplicate existing records via bulk upsert with the correct external IDs.

### Example 3: Custom metric formula keeps failing

**User**: "I built a metric to track expansion revenue but the formula gives wrong results and takes 3 hours to rebuild."

**Approach**: Read platform-guide.md metrics section. Check: (1) Is the formula referencing the correct license/revenue fields? (2) Are date ranges set correctly (expansion = new licenses minus renewals in period)? (3) Test on a single company first to validate before running full rebuild. Recommend using the API to pull raw license data and validate the expected values before rebuilding the metric. If the formula keeps breaking, consider a simpler metric + data warehouse calculation as a workaround.

## Troubleshooting

### CRM data not syncing or fields being overwritten

- **Check field mapping direction.** Go to Settings → Integrations → CRM and verify which fields are Planhat → CRM, CRM → Planhat, or bidirectional. Bidirectional fields need a clear source-of-truth rule.
- **Check keyable/unique identifier.** Planhat uses external IDs (from CRM) as keyables. If the external ID isn't mapped, sync creates duplicates instead of updating.
- **Check ingestion rules.** For Salesforce opportunities → Planhat licenses, verify that close date, amount, and stage filters match your CRM's actual data format.

### Automation not triggering

- **Check trigger conditions.** Verify the trigger field has data — empty fields won't fire. For date-based triggers, check that the date field (e.g., renewal date) is populated on the company record.
- **Check flow status.** Is the automation active or still in draft? Check Settings → Automations.
- **Check connection health.** If the automation depends on an external connection (Slack, email, CRM), verify the connection is active and authorized.

### API returning unexpected errors

- **Check authentication.** Use `Authorization: Bearer {access_token}` header. Generate tokens via Settings → Service Accounts (Private Apps).
- **Check rate limits.** 200 calls/min soft limit. If you hit `429`, implement exponential backoff. Use bulk upsert (up to 5,000 items) to reduce call volume.
- **Check object limits.** Most endpoints return max 2,000 objects per request (5,000 for companies). Use pagination for larger datasets.
