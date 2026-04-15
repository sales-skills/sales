---
name: sales-tableau
description: "Tableau platform help — Tableau Desktop, Tableau Cloud, Tableau Server, Tableau Prep, Tableau Pulse, Embedding API, REST API (v3.28, PAT/JWT auth, 300+ endpoints), MCP server, and Tableau+. Use when dashboards are slow with large datasets, LOD expressions or calculated fields aren't working, licensing costs are confusing or spiraling, Tableau won't connect to Salesforce or your data warehouse, embedded analytics aren't rendering, Tableau Prep flows keep failing, or you need help choosing Creator vs Explorer vs Viewer licenses. Do NOT use for general CRM config (use /sales-salesforce) or sales forecasting methodology (use /sales-forecast)."
argument-hint: "[describe what you need help with in Tableau]"
license: MIT
version: 1.0.0
tags: [sales, analytics, bi, platform]
github: "https://github.com/tableau"
---

# Tableau Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Dashboard building — visualizations, charts, calculated fields, LOD expressions, parameters
   - B) Data connections — connecting to Salesforce, databases, cloud sources, live vs extract
   - C) Tableau Prep — data preparation flows, cleaning, joins, unions, pivots
   - D) Tableau Cloud / Server — publishing, permissions, scheduling, site admin
   - E) Tableau Pulse — metrics, AI-powered insights, natural language Q&A
   - F) Embedding — Embedding API v3, JavaScript, Connected Apps, SSO
   - G) REST API / Automation — API calls, Python TSC library, tabcmd, automation scripts
   - H) Performance — slow dashboards, extract optimization, query tuning
   - I) Licensing / pricing — Creator vs Explorer vs Viewer, Cloud vs Server, cost optimization
   - J) Tableau+ / AI features — agentic analytics, Tableau MCP server, AI calibration
   - K) Migration — moving between Server and Cloud, upgrading versions
   - L) Something else — describe it

2. **Which deployment are you on?**
   - A) Tableau Cloud (SaaS)
   - B) Tableau Server (self-hosted)
   - C) Tableau Desktop only (no server)
   - D) Tableau Public (free)
   - E) Evaluating / not started yet

3. **Which license type?**
   - A) Creator ($75/user/mo)
   - B) Explorer ($42/user/mo)
   - C) Viewer ($15/user/mo)
   - D) Enterprise tier (Creator $115 / Explorer $70 / Viewer $35)
   - E) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

Check if the user's question maps to another skill:

| If about... | Route to... |
|---|---|
| CRM setup/config (Salesforce) | `/sales-salesforce {question}` |
| Revenue forecasting methodology | `/sales-forecast {question}` |
| Connecting Tableau to other tools | `/sales-integration {question}` |
| MuleSoft data integration | `/sales-mulesoft {question}` |

If the question is Tableau-specific, continue to Step 3.

## Step 3 — Tableau platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, data model, connectors, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

For API questions, also **read `references/tableau-api-reference.md`** for authentication, endpoint patterns, and the Python TSC library.

## Step 4 — Actionable guidance

Focus on the user's specific situation. Provide step-by-step instructions for their exact problem.

For performance issues, check: extract vs live, data source size, calculated field complexity, number of marks, dashboard actions, container layout.

For licensing questions, recommend the minimum role per user based on what they actually need to do (most users are Viewers, not Explorers).

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and licensing that may be outdated.*

- **Every deployment needs at least one Creator license.** You cannot run a Tableau Cloud or Server site with only Explorer/Viewer seats — at least one Creator is required to publish data sources and workbooks.
- **Tableau Cloud and Server are billed annually only.** No monthly billing option at standard rates. Enterprise pricing is negotiable but significantly higher ($115/$70/$35 per role).
- **LOD expressions bypass dashboard filters by default.** FIXED, INCLUDE, and EXCLUDE LOD calcs compute at their own granularity before filters apply. Use context filters or table-scope filtering to control this behavior.
- **Live connections to Salesforce have row limits.** The Salesforce connector returns predefined objects and has incremental refresh support — but live connections can be slow with large orgs. Switch to extracts for dashboards that don't need real-time data.
- **Tableau Prep flows don't have scheduling on Desktop.** You need Tableau Server or Cloud with Data Management to schedule Prep flows. Desktop users must run flows manually.
- **Embedding API v3 requires Connected Apps for SSO.** The old Trusted Authentication method from v2 is deprecated. v3 uses JWT-based Connected Apps for seamless SSO embedding.
- **Tableau Cloud has a 10GB extract size limit.** Bridge (for on-prem data) and large extracts may hit Cloud limits. Consider Tableau Server for very large datasets.
- **Customer support quality has declined post-Salesforce acquisition.** Multiple user reviews flag generic support responses and billing confusion. Check Tableau Community (Trailblazer) and Stack Overflow before opening a support case.

## Related skills

- `/sales-salesforce` — Salesforce platform help — Tableau is part of the Salesforce ecosystem
- `/sales-mulesoft` — MuleSoft integration platform — connect data sources to Tableau via API-led connectivity
- `/sales-forecast` — Revenue forecasting methodology — Tableau visualizes forecasts but this skill builds them
- `/sales-integration` — Connect Tableau to CRMs, data warehouses, and other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Slow dashboard
**User says**: `/sales-tableau My pipeline dashboard takes 30 seconds to load and my manager is complaining`
**Skill does**: Checks extract vs live, identifies common performance killers (too many marks, complex LOD calcs, unoptimized data source), gives step-by-step optimization path.

### Example 2: Salesforce data connection
**User says**: `/sales-tableau How do I pull our Salesforce opportunity data into Tableau Cloud and keep it updated daily?`
**Skill does**: Walks through the native Salesforce connector, extract scheduling, incremental refresh setup, and common gotchas with Salesforce object relationships.

### Example 3: License optimization
**User says**: `/sales-tableau We have 50 people using Tableau and our bill is $45K/year — is that right?`
**Skill does**: Audits their license mix, identifies users who should be Viewers instead of Explorers, calculates potential savings, recommends the right Creator/Explorer/Viewer split.

## Troubleshooting

### Dashboard is painfully slow
**Symptom**: Dashboard takes 10-30+ seconds to load
**Common causes**: Live connection to a large data source, too many marks (>1M), complex LOD or table calculations, dashboard actions triggering cascading queries
**Solution**: Switch to extract, reduce marks (aggregate or filter), simplify LOD calcs, use Performance Recorder (Help > Settings > Start Performance Recording) to identify the slowest sheets.

### Salesforce connector shows incomplete data
**Symptom**: Not all Salesforce objects or fields appear in Tableau
**Common causes**: Salesforce field-level security blocking fields, predefined query selecting limited objects, connected user doesn't have API access
**Solution**: Check the connected Salesforce user's profile/permission set has "API Enabled" and field-level security on the objects you need. Use custom SOQL if the predefined queries are too limited.

### Extract refresh keeps failing on Cloud
**Symptom**: Scheduled extract refresh fails with timeout or credential errors
**Common causes**: Credentials expired (especially OAuth tokens), extract exceeds 10GB Cloud limit, Bridge connection dropped for on-prem sources
**Solution**: Re-authenticate the data source, check extract size (consider incremental refresh or filtering to reduce size), verify Bridge client is running and connected if using on-prem data.
