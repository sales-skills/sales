---
name: sales-treasuredata
description: "Treasure Data platform help — enterprise AI-native CDP with profile unification, audience segmentation, journey orchestration, 400+ connectors, AI Marketing Cloud suites. Use when setting up Treasure Data CDP, unifying customer profiles across channels, building audience segments in Treasure Data, activating audiences to ad platforms or CRMs, configuring Treasure Data connectors or integrations, writing SQL queries in Treasure Data, troubleshooting Treasure Data workflows or jobs, or working with the TD API. Do NOT use for general CRM data quality without Treasure Data context — use /sales-data-hygiene instead."
argument-hint: "[describe what you need help with in Treasure Data]"
license: MIT
version: 1.0.0
tags: [sales, cdp, enterprise, platform]
github: "https://github.com/treasure-data"
---

# Treasure Data Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What do you need help with?

- **A. Initial setup** — implementation, onboarding, connecting first data sources
- **B. Profile unification** — identity resolution, merging customer records, parent/child tables
- **C. Audience segmentation** — building segments, no-code Audience Studio, SQL-based segments
- **D. Connectors & integrations** — configuring import/export connectors, Integration Hub, 400+ sources
- **E. Journey orchestration** — customer journeys, triggered campaigns, activation workflows
- **F. AI Marketing Cloud** — AI Suites (Engagement, Personalization, Creative, Paid Media, Service)
- **G. Agent Hub & Treasure Code** — AI agents, Marketing Super Agent, agent development
- **H. API & SDK** — TD API, Audience API, Postback API, LLM API, client SDKs
- **I. SQL & queries** — Presto/Trino queries, job management, query optimization
- **J. Workflow scheduling** — Treasure Workflows, DAGs, scheduling jobs, CI/CD
- **K. Pricing & plans** — Intelligent CDP vs AI Marketing Cloud, "No Compute" pricing, Trade-Up Program
- **L. Choosing vs competitors** — Treasure Data vs Segment, Tealium, Amperity, Hightouch, RudderStack
- **M. Other**

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| CRM data deduplication or quality outside TD | `/sales-data-hygiene [question]` |
| Retargeting/remarketing strategy | `/sales-retargeting [question]` |
| Connecting TD to other tools (general integration strategy) | `/sales-integration [question]` |
| Contact/company enrichment | `/sales-enrich [question]` |
| Lead scoring models | `/sales-lead-score [question]` |
| Buying intent signals | `/sales-intent [question]` |
| Email campaign strategy | `/sales-email-marketing [question]` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Treasure Data platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows, regional endpoints.

If the question involves the API, also **read `references/treasuredata-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Start with the simplest approach** — use Audience Studio UI before writing SQL, use pre-built connectors before custom scripts
- **Check regional endpoints** — TD has separate API base URLs for US, EU, Japan, and Korea
- **Test in QA sandbox first** — production changes to parent tables or identity rules affect all downstream segments
- **Monitor job queue** — Presto/Trino jobs share compute; large queries can block others
- **Use Treasure Workflows for orchestration** — don't schedule individual jobs when a DAG handles dependencies

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **SQL required for many workflows** — Audience Studio handles basic segments, but complex transformations, custom enrichment, and advanced queries need Presto/Trino SQL. Non-technical marketers will need analyst support.
- **Postback API is case-sensitive** — column names in payload must match table schema exactly (case-sensitive). Mismatched casing silently drops data.
- **Legacy compute engine contention** — Presto/Hive jobs share resources. Large queries can queue behind others. Schedule heavy jobs during off-peak hours.
- **Profile API refresh lag** — unified profiles don't update instantly. Allow time for identity resolution jobs to complete before querying the Profiles API.
- **Implementation timeline** — typical deployment takes 8-12 weeks with implementation partner. Budget $30K-$100K+ for implementation costs on top of licensing.
- **"No Compute" pricing** — charges are based on unified profiles and events, not queries. But profile count can grow unexpectedly if identity resolution rules are too loose.
- **Regional endpoint mismatch** — using the wrong region's API URL returns auth errors, not a helpful redirect. Double-check your site (US/EU/JP/KR) in console settings.
- **Add-on costs** — AI Marketing Cloud suites (Engagement, Personalization, Creative, Paid Media, Service) are separate fixed-annual + consumption-based licenses on top of the CDP.

## Related skills

- `/sales-blueconic` — BlueConic CDP — profile unification, segmentation, audience activation (mid-market alternative)
- `/sales-data-hygiene` — CRM data quality, deduplication, normalization
- `/sales-retargeting` — Retargeting and remarketing strategy across ad platforms
- `/sales-integration` — Connecting sales tools with webhooks, APIs, Zapier, Make
- `/sales-enrich` — Contact and company enrichment across providers
- `/sales-intent` — Buying intent signals and prioritization
- `/sales-lead-score` — Lead scoring models across platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

**User prompt:** "Our customer profiles are fragmented — website visitors tracked separately from email subscribers and in-store purchases. How do I unify them in Treasure Data?"

Response covers: parent table setup, identity resolution rules (deterministic matching on email/phone, probabilistic on device IDs), data source priority configuration, testing unification in QA sandbox before production.

**User prompt:** "I need to build an audience of high-value customers who haven't purchased in 90 days and push them to Facebook Custom Audiences"

Response covers: SQL segment definition using purchase history and recency, Audience Studio segment creation, Facebook Custom Audiences connector configuration, sync frequency and match rate expectations.

**User prompt:** "Our Treasure Data implementation is $200K/year and leadership wants to know if we're getting value. What should I measure?"

Response covers: profile unification rate, audience activation volume, campaign lift from CDP-powered segments vs non-CDP, time-to-insight reduction, connector utilization across the 400+ available, "No Compute" pricing optimization.

## Troubleshooting

**Profiles not merging correctly**
- Check identity resolution rules in parent table configuration — are you matching on the right identifiers (email, phone, customer ID)?
- Verify data source priority order — conflicting values resolve based on source ranking
- Run a test unification on a small dataset in QA sandbox before applying to production

**Connector sync failing or data not appearing**
- Verify connector credentials haven't expired (especially OAuth tokens for Salesforce, Google)
- Check the job log in TD Console for specific error messages
- Confirm the regional API endpoint matches your TD site (US vs EU vs JP vs KR)
- For Postback API: verify column name casing matches the target table schema exactly

**Queries running slowly or timing out**
- Check the job queue — other Presto/Trino jobs may be consuming shared compute
- Optimize SQL: avoid `SELECT *`, use `WHERE` clauses to reduce scan scope, partition large tables by time
- Schedule heavy analytical queries during off-peak hours
- Consider Treasure Workflows to chain dependent queries instead of running sequentially
