---
name: sales-tray
description: "Tray.ai platform help — enterprise iPaaS with 700+ connectors, Intelligent iPaaS, Enterprise Core governance, Merlin Agent Builder for AI agents, Tray Embedded for SaaS vendors, GraphQL API, Connector Development Kit. Use when Tray bill keeps climbing and task consumption is unpredictable, workflows fail with unclear errors and debugging feels opaque, evaluating Tray vs Workato vs MuleSoft vs Boomi, embedding integrations into a SaaS product via Tray Embedded, building Merlin AI agents, or configuring the GraphQL Embedded API and solution instances. Do NOT use for simple Zapier/Make automations (use /sales-integration), Workato-specific questions (use /sales-workato), or MuleSoft-specific questions (use /sales-mulesoft)."
argument-hint: "[describe what you need help with in Tray]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
github: "https://github.com/trayio"
---

# Tray.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Workflow building — connectors, triggers, steps, data mapping
   - B) Merlin Agent Builder — AI agents, knowledge, tools, MCP
   - C) Tray Embedded — embedding integrations in your SaaS product (Solutions, Solution Instances, Configuration Wizard)
   - D) API Management — rate limiting, throttling, governance
   - E) Connector Development Kit (CDK) — building custom connectors
   - F) GraphQL API — Embedded API, Master/User tokens, mutations
   - G) Deployment / environments / governance — Enterprise Core, SSO, audit logging
   - H) Monitoring / troubleshooting — workflow errors, debugging, rate limits
   - I) Pricing / licensing — task consumption, editions, cost optimization
   - J) Evaluating Tray vs other iPaaS platforms
   - K) Something else — describe it

2. **What edition are you on?**
   - A) Pro
   - B) Team
   - C) Enterprise
   - D) Tray Embedded (separate SKU)
   - E) Not sure / evaluating

3. **What's your role?**
   - A) Integration engineer (builds workflows)
   - B) SaaS product team (embedding Tray in your app)
   - C) Admin / architect (governance, security, deployment)
   - D) AI/automation builder (Merlin agents)
   - E) Evaluating Tray

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting Tray to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| Workato-specific questions | `/sales-workato {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| SnapLogic-specific questions | `/sales-snaplogic {question}` |
| Celigo-specific questions | `/sales-celigo {question}` |
| Jitterbit-specific questions | `/sales-jitterbit {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Workflow design and task optimization | Answer directly — read platform guide |
| Tray Embedded integration | Answer directly — read platform guide |
| Merlin Agent Builder | Answer directly — read platform guide |
| GraphQL API / solution instances | Answer directly — read API reference |
| Pricing and cost optimization | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — Tray platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, connectors, Merlin agents, Tray Embedded, rate limits, governance.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the GraphQL Embedded API (solution instances, user tokens, authentications), also **read `references/tray-api-reference.md`** for endpoints, authentication, and mutation details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check Tray's connector library first (700+ pre-built). If no connector exists, use the HTTP Client connector for any REST API, or build a custom connector with the Connector Development Kit (`falafel` Node.js framework).

**Cost optimization shortcut**: Task-based billing — each workflow step counts. Audit high-volume workflows, remove redundant steps, use branching to skip unnecessary actions. Enterprise contracts typically start at $36K/year; model task consumption before signing and negotiate usage caps.

**Debugging shortcut**: Use the workflow Debug panel to step through execution and inspect input/output at each step. For the Embedded API, inspect GraphQL responses for `errors` array — Tray returns HTTP 200 with an `errors` field even on failure. Check connection auth status; expired auths silently fail.

**Tray Embedded shortcut**: Solution instances are per-end-user copies of a Solution. Use Master Token for org-wide operations (Get Users, create Solution Instance). Use User Token (created via `createUserToken` mutation) for per-end-user operations (Get Solution Instances, update config). All API calls must be server-side — CORS blocks browser calls.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and feature availability which change frequently.*

- **No public pricing page.** Tray is sales-led — no self-service signup, no published tier pricing. Public third-party sources conflict by an order of magnitude (Pro quoted at both $99/mo and $595/mo). Enterprise contracts typically start at $36K/year. Always get a written quote before committing.
- **Task-based billing escalates unpredictably in production.** The most common user complaint across G2/Capterra reviews: task consumption in production exceeds estimates. Model expected task volume carefully and ask Tray sales for consumption alerts and soft caps before signing.
- **GraphQL backend-only — CORS blocks client-side calls.** "The Tray GraphQL API is a backend API only and calls must be invoked server-side." You cannot call the Embedded API from a browser. All integration UI in your SaaS product must route through your backend.
- **Two token types with different scopes.** Master Token = entire org workspace (used for `Get Users`, admin mutations). User Token = single end user (used for `Get Solution Instances`, `updateSolutionInstance`). Some endpoints (e.g., `Get Authentications`) accept both. Use the wrong token and you'll get empty results or auth errors.
- **Rate limits: 30 req/sec, 1800 req/min, burst 50/sec.** Call connector endpoint has separate concurrency limit of 1000 active requests. Docs don't specify which HTTP response code is returned when exceeded — monitor for rate-limit errors and implement exponential backoff.
- **Documentation gaps are a consistent complaint.** G2 and Capterra reviewers repeatedly note thin docs, missing real-world examples, and steep learning curve for advanced features. Budget training time and pair new builders with experienced ones.
- **Regional base URLs differ.** US: `tray.io/graphql`. EU: `eu1.tray.io/graphql`. APAC: `ap1.tray.io/graphql`. Whitelabel OAuth redirects use `{org}.integration-authentication.com/oauth2/token`. Using the wrong region returns empty results without an obvious error.
- **Tray.io → Tray.ai rebrand.** The product rebranded to Tray.ai in 2024 with heavy AI/Merlin pivot. `tray.io` now 301-redirects to `tray.ai`, but API surface and developer docs still use `tray.io` domains. Both work in documentation links.

## Related skills

- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors, recipe automation, MCP Gateway (top competitor)
- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, Data Hub MDM (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, NetSuite depth (direct competitor)
- `/sales-snaplogic` — SnapLogic platform help — enterprise iPaaS, 1000+ Snaps, AgentCreator (direct competitor)
- `/sales-jitterbit` — Jitterbit platform help — Harmony iPaaS, 400+ connectors, API Manager (direct competitor)
- `/sales-informatica` — Informatica IDMC platform help — enterprise iPaaS + data management, CDI/CAI, MDM, Data Catalog (direct competitor, data-management-first)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common Tray integration target
- `/sales-hubspot` — HubSpot platform help — common Tray integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Tray bill climbing and we can't see where the tasks are going
**User says**: "Our Tray bill went from $40K to $65K in 9 months — how do we figure out what's consuming tasks?"
**Skill does**: Reads platform guide for pricing section. Explains task-based billing — every workflow step counts, so high-volume workflows with many branches/steps are usually the culprits. Recommends: (1) review the workflow task consumption view in the Tray dashboard, (2) audit the top 10 highest-volume workflows for redundant or always-on steps, (3) add branching to skip unnecessary actions, (4) batch-process where the source API supports it, (5) renegotiate at contract renewal with usage data in hand. Notes that Tray doesn't hard-stop workflows at plan limits, so overages compound.
**Result**: User has a concrete optimization plan and a starting audit list.

### Example 2: Embedding Tray Solutions in a B2B SaaS product
**User says**: "We're a SaaS company and want to embed Tray so our customers can connect their own tools. How does that work?"
**Skill does**: Reads platform guide for Tray Embedded section and API reference for mutation details. Explains: (1) build a Solution in Tray (reusable workflow template), (2) use the Configuration Wizard to let end users authenticate and configure, (3) on your backend, call `createSolutionInstance` mutation with a Master Token to create per-customer copies, (4) pass `configValues` and `authValues` to customize each instance, (5) use `createUserToken` to generate per-user tokens for subsequent operations. Flags CORS constraint (API is backend-only), and points to the official sample app (`github.com/trayio/embedded-edition-sample-app`) for reference architecture.
**Result**: User understands the embedded integration model, token types, and reference implementation.

### Example 3: Evaluating Tray vs Workato for a technical team
**User says**: "We're a 6-person platform engineering team integrating 30 SaaS apps. Tray or Workato?"
**Skill does**: Reads platform guide for competitor comparison. For a technical team integrating many apps: Tray fits better for teams comfortable with API-first, JavaScript-adjacent workflows and custom connector development via the CDK. Workato fits better for teams that want faster time-to-value with business-user-friendly recipes and broader connector coverage (1,200+ vs 700+). Pricing is similar enterprise range. Notes: Tray docs are thinner — budget more ramp time. If you plan to embed in a product, Tray Embedded is mature (launched 2020); Workato also has Embedded iPaaS with the Embed Partner Program.
**Result**: User understands trade-offs and can pick based on team preference and roadmap.

## Troubleshooting

### Workflow silently fails — no error shown, no output
**Symptom**: A workflow step completes without an error but downstream steps receive empty data.
**Cause**: Tray's GraphQL API returns HTTP 200 with an `errors` field when the server encounters a problem. Connection authentication may have expired without flagging, or the step's input mapping references a null/missing field.
**Solution**: Open the workflow Debug panel and inspect input/output at each step. Check Connections → verify the connection for the step shows "Authenticated" (not expired). Re-authenticate if needed. For API-level debugging, inspect the full GraphQL response — look for `errors` array even on HTTP 200 responses.

### Getting 429 or rate-limit errors at scale
**Symptom**: Workflow actions fail intermittently when processing high volumes.
**Cause**: Tray enforces 30 req/sec and 1800 req/min across Embedded/Connectivity APIs (except Call Connector). Bursts up to 50/sec are tolerated briefly. Hitting these limits returns rate-limit responses (specific HTTP code not published).
**Solution**: Implement exponential backoff on rate-limit errors. For high-volume Call Connector usage, remember concurrency cap is 1000 active requests — request a CSM increase if needed. Reduce trigger frequency or batch source events. For Event delivery (Trigger API), Tray auto-implements exponential backoff when downstream endpoints rate-limit.

### Solution Instance not appearing for a specific end user
**Symptom**: You created a Solution Instance via the Embedded API but the end user doesn't see it in their Configuration Wizard.
**Cause**: Using the wrong token scope, or querying from the wrong regional endpoint. `Get Solution Instances` requires a User Token scoped to that specific end user. Master Token won't return a user's instances.
**Solution**: Generate a User Token via `createUserToken` mutation for that specific user_id, then query `Get Solution Instances` with that token. Confirm the regional base URL matches your org's region (US: `tray.io`, EU: `eu1.tray.io`, APAC: `ap1.tray.io`). Whitelabel deployments use `{org}.integration-authentication.com` for OAuth redirects — verify the end user's auth flow hits the correct redirect URL.
