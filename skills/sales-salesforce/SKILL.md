---
name: sales-salesforce
description: "Salesforce platform help — Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Data Cloud, Agentforce AI, Platform (Lightning/Apex/Flow), AppExchange, and REST API (v66.0, OAuth 2.0, SOQL, Bulk API 2.0). Use when Salesforce workflows or Flows aren't firing, reports don't show the right numbers, lead assignment rules aren't working, Apex triggers are failing, AppExchange app won't install, need help with SOQL queries, implementation is stalling, data migration to or from Salesforce, or not sure which Salesforce edition you need. Do NOT use for CRM comparison and selection (use /sales-crm-selection) or CRM data cleanup strategy (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in Salesforce]"
license: MIT
version: 1.0.0
tags: [sales, crm, enterprise, platform]
github: "https://github.com/salesforce"
---

# Salesforce Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Sales Cloud — leads, opportunities, pipeline, forecasting, CPQ
   - B) Service Cloud — cases, knowledge base, omnichannel routing
   - C) Marketing Cloud / Account Engagement (Pardot) — campaigns, journeys, email
   - D) Commerce Cloud — B2B/B2C storefront, checkout, catalogs
   - E) Data Cloud — customer data platform, identity resolution, segments
   - F) Agentforce / Einstein AI — AI agents, predictive scoring, recommendations
   - G) Platform — custom objects, Apex, Flows, Lightning components, permissions
   - H) Integrations — AppExchange, MuleSoft, API, Zapier/Make, webhooks
   - I) Admin — users, profiles, roles, sharing rules, sandboxes, deployments
   - J) Reporting — dashboards, custom reports, cross-object reports
   - K) Pricing / edition selection — Starter vs Pro vs Enterprise vs Unlimited
   - L) Something else — describe it

2. **Which edition are you on?**
   - A) Starter Suite ($25/user/mo)
   - B) Pro Suite ($100/user/mo)
   - C) Enterprise ($175/user/mo)
   - D) Unlimited ($330/user/mo)
   - E) Einstein 1 / Agentforce ($500+/user/mo)
   - F) Not sure / evaluating

3. **Team size?**
   - A) Solo / 1-5 people
   - B) Small team 5-25
   - C) Mid-market 25-100
   - D) Enterprise 100+

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| CRM comparison — Salesforce vs HubSpot vs Attio vs others | `/sales-crm-selection {question}` |
| Outbound sequence design across platforms | `/sales-cadence {question}` |
| CRM data cleanup, deduplication, record matching | `/sales-data-hygiene {question}` |
| Contact enrichment for CRM records | `/sales-enrich {question}` |
| Connecting Salesforce to other tools (architecture) | `/sales-integration {question}` |
| Lead scoring model design (cross-platform) | `/sales-lead-score {question}` |
| Lead routing and assignment strategy | `/sales-lead-routing {question}` |
| Revenue forecasting strategy | `/sales-forecast {question}` |
| Email deliverability for outbound | `/sales-deliverability {question}` |

When routing, provide the exact command.

## Step 3 — Salesforce platform reference

**Read `references/platform-guide.md`** for the full platform reference — clouds, modules, pricing, integrations, data model, Flow Builder, Apex, SOQL.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the REST API, also **read `references/salesforce-api-reference.md`** for endpoints, authentication, and rate limits.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup priority**: Create users and profiles → import accounts/contacts → set up opportunity pipeline stages → configure lead assignment rules → build 2-3 key Flows → connect email (Gmail/Outlook) → set up basic dashboards.

**Edition selection shortcut**: Starter for <10 users with basic CRM needs. Pro for forecasting and customization. Enterprise for API access, advanced automation, and multiple sandboxes. Unlimited for premier support and full AI. Most mid-market teams land on Enterprise.

**When Salesforce is overkill**: If you have <50 users, no dedicated admin, and don't need complex multi-department workflows, consider HubSpot or Attio first — use `/sales-crm-selection` to evaluate.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially plan-gated features and pricing which change frequently.*

- **You need a dedicated admin.** Salesforce without an admin quickly becomes a mess of stale automations, broken Flows, and technical debt. 67% of admins say cleaning up years of quick fixes is their hardest task. Budget for at least a part-time admin from day one.
- **Implementation costs 2-3x the licensing fee.** A typical Enterprise setup takes 8-12 weeks and requires consultants ($150-300/hr). The first-year total cost is often 3-5x the listed per-user price.
- **API access is gated by edition.** Starter Suite has no API access. Pro Suite has limited API. Full REST API requires Enterprise or above. Check edition limits before planning integrations.
- **The pricing page lies by omission.** Base prices don't include essential add-ons like CPQ, Pardot, or Data Cloud. Each Cloud is priced separately. Get a full quote before committing.
- **Data quality degrades fast and Agentforce amplifies it.** 51% of admins say deduplication consumes their time. AI features like Agentforce depend on clean data — garbage in, garbage out at AI scale.
- **Annual contracts auto-renew.** Like HubSpot, Salesforce contracts are annual with auto-renewal. Downgrading or canceling mid-contract requires negotiation. Set a reminder 90 days before renewal.
- **Flow Builder replaced Workflow Rules and Process Builder.** If you're following old tutorials, they may reference deprecated automation tools. All new automation should use Flow Builder.
- **70% of Salesforce implementations fail.** Root causes: unclear goals, poor user adoption, no executive sponsor, no dedicated admin. Plan for change management, not just technology.

## Related skills

- `/sales-crm-selection` — CRM comparison and selection — choosing between Salesforce, HubSpot, Attio, and others
- `/sales-hubspot` — HubSpot platform help — if considering HubSpot as an alternative
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-enrich` — Contact enrichment — emails, phones, company data, bulk enrichment
- `/sales-cadence` — Outbound sequence design — multi-channel cadences across platforms
- `/sales-integration` — Connecting Salesforce to other tools — webhooks, Zapier, Make, MuleSoft
- `/sales-lead-score` — Lead scoring model design — dimensions, weights, MQL/SQL thresholds
- `/sales-lead-routing` — Lead routing and assignment — round-robin, territory, score-based
- `/sales-forecast` — Revenue forecasting — pipeline coverage, commit validation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing the right Salesforce edition
**User says**: "We're a 30-person SaaS company evaluating Salesforce editions. We need API access and custom automation but don't want to overpay."
**Skill does**: Reads platform guide for edition comparison. Recommends Enterprise ($175/user/mo) — it's the most popular tier because it includes API access, advanced Flow Builder, multiple sandboxes, and customization without the Unlimited premium. Flags that Starter/Pro lack full API access. Notes the implementation cost multiplier and recommends budgeting for a part-time admin.
**Result**: User understands edition trade-offs and total cost of ownership.

### Example 2: Flow Builder automation not working
**User says**: "I built a Flow to update opportunity stage when all tasks are completed, but it never fires."
**Skill does**: Reads platform guide for Flow Builder section. Checks common causes: trigger type mismatch (record-triggered vs autolaunched), entry conditions too restrictive, flow not activated, running user lacks field-level security. Recommends using Debug mode in Flow Builder and checking Flow error emails in Setup. Notes that scheduled Flows have a 250K record limit per batch.
**Result**: User identifies the root cause and gets the Flow working.

### Example 3: Migrating from HubSpot to Salesforce
**User says**: "We've outgrown HubSpot — 80 users, complex deal cycles, need custom objects. How do we migrate to Salesforce?"
**Skill does**: Validates that Salesforce is the right move at this scale (80 users, complex deals — yes). Walks through migration: map HubSpot objects → Salesforce objects (contacts, companies → accounts, deals → opportunities). Notes that HubSpot custom properties → Salesforce custom fields, but HubSpot workflows → Salesforce Flows require rebuilding. Recommends using HubSpot's native Salesforce integration for bi-directional sync during transition. Flags a 4-8 week timeline with consultant help.
**Result**: User has a migration plan with timeline and gotchas.

## Troubleshooting

### "Reports show wrong numbers"
**Symptom**: Dashboard metrics don't match what you see in list views or exports.
**Cause**: Common causes: (1) report type filters exclude records (e.g., "Opportunities with Contact Roles" misses opportunities without contacts), (2) sharing rules restrict visibility — reports respect the running user's access, (3) cross-filters or date ranges set incorrectly, (4) archived records excluded by default.
**Solution**: Check the report type — it determines which objects/fields are available. Verify the running user has visibility into the records. Check for cross-object filters. Use "Show Details" to see which records are included. For dashboard-level issues, check if the dashboard runs as a specific user or the viewing user.

### "Lead assignment rules aren't routing correctly"
**Symptom**: New leads go to the wrong owner or sit in a queue with no assignment.
**Cause**: Assignment rules evaluate top-to-bottom and stop at the first match. If the first rule is too broad, it catches everything. If no rule matches, the lead stays with the default owner. Web-to-Lead and API-created leads must have "Assign using active assignment rules" checked.
**Solution**: Review rule order in Setup → Lead Assignment Rules. Make specific rules first, broad catch-all rules last. Verify that the active rule set is the one you expect (only one can be active). For API/integration-created leads, pass the `AssignmentRuleHeader` in the API call.

### "Salesforce is too slow / clicks take forever"
**Symptom**: Pages load slowly, list views take 10+ seconds, reports time out.
**Cause**: Usually a combination of: (1) too many fields on page layouts, (2) complex validation rules/triggers on record save, (3) list views with too many records and unindexed filters, (4) browser extensions interfering.
**Solution**: Reduce visible fields on page layouts (show only what reps actually use). Check for Apex triggers that fire on every record save — inefficient triggers compound across the org. Use indexed fields in list view filters (standard fields, external IDs). Try incognito mode to rule out browser extensions. For reports, add filters to reduce the dataset before running.
