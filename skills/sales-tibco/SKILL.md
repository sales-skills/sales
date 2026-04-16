---
name: sales-tibco
description: "TIBCO Cloud Integration platform help — enterprise iPaaS combining TIBCO Scribe (Connect), Flogo (Develop), BusinessWorks (Integrate), Cloud Live Apps (Automate), Cloud API Management, app-instance subscription tiers, REST API v1, hybrid on-prem + cloud deployments. Use when a TIBCO Flogo REST trigger is failing or mapping a field wrong, TIBCO Scribe replication is pulling all history with no filter, a Scribe job hit Execution timeout or duplicate-key errors, BusinessWorks hybrid agent won't connect to TIBCO Cloud, hitting the 5 or 15 app instance limit on Basic/Premium plan, evaluating TIBCO vs Boomi vs MuleSoft vs Informatica, or migrating from on-prem TIBCO BusinessWorks to TCI. Do NOT use for simple Zapier/Make automations (use /sales-integration) or Informatica-specific questions (use /sales-informatica)."
argument-hint: "[describe what you need help with in TIBCO Cloud Integration]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, platform]
github: "https://github.com/TIBCOSoftware"
---

# TIBCO Cloud Integration Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Connect (TIBCO Scribe) — no-code iPaaS, data replication, pre-built connectors
   - B) Develop (TIBCO Flogo) — event-driven apps, visual flow designer, Node.js
   - C) Integrate (TIBCO BusinessWorks) — enterprise integration patterns, hybrid, microservices
   - D) Automate (TIBCO Cloud Live Apps) — no-code business apps, citizen developer
   - E) TIBCO Cloud API Management — API gateway, policies, developer portal
   - F) Pricing / subscription tiers / app instance limits
   - G) REST API / CI/CD automation
   - H) Migration from on-prem TIBCO (BusinessWorks, EMS) to TCI
   - I) Something else — describe it

2. **What's your deployment model?**
   - A) TIBCO-hosted cloud only
   - B) Hybrid (on-prem or private cloud agents + TCI control plane)
   - C) Evaluating / not deployed yet

3. **Which subscription tier?**
   - A) Basic — 5 iPaaS app instances, no BusinessWorks
   - B) Premium — 15 app instances, BusinessWorks available
   - C) Hybrid — 25 instances per pack, flexible deployment
   - D) Don't know / evaluating

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting TIBCO to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| Informatica IDMC-specific questions | `/sales-informatica {question}` |
| Workato-specific questions | `/sales-workato {question}` |
| SnapLogic-specific questions | `/sales-snaplogic {question}` |
| Jitterbit-specific questions | `/sales-jitterbit {question}` |
| Tray.ai-specific questions | `/sales-tray {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Scribe / Flogo / BusinessWorks / Live Apps | Answer directly — read platform guide |
| API Management / gateway / policies | Answer directly — read platform guide |
| Subscription / app instance limits | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — TIBCO platform reference

**Read `references/platform-guide.md`** for the full platform reference — the four capability pillars, subscription tiers, connectors, deployment, known issues, CLI tooling.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the TCI REST API, also **read `references/tibco-api-reference.md`** for authentication, endpoints, and usage details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Capability selection shortcut**: Scribe for non-developers doing SaaS-to-SaaS data movement and replication. Flogo for developers building event-driven microservices with a visual designer. BusinessWorks when you already run on-prem TIBCO (Premium plan only, add-on license). Live Apps for citizen developers building approval-style business apps.

**Deployment decision shortcut**: TIBCO-hosted for cloud-only integrations. Hybrid plan when sources are on-prem or behind a firewall — it bundles BusinessWorks and Flogo agents you run anywhere. Pick the region closest to your data (AWS US/Europe/Australia or Azure US) — the API base URL and Swagger page are region-specific, and calls to the wrong region return nothing.

**Cost / tier decision shortcut**: Basic plan (5 app instances, no BusinessWorks) fits small Scribe/Flogo footprints. Premium (15 instances) is the common starting point for multi-app deployments. If you hit the instance cap, consolidate Flogo apps (multiple flows per app) or upgrade — don't split work across multiple orgs. BusinessWorks on Premium still requires a separate BW license.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing and subscription tier details which change; the June 2024 subscription notice in TIBCO docs warned tiers would evolve.*

- **The 5/15/25 app instance limits are hard.** Basic is capped at 5 combined iPaaS app instances, Premium at 15, Hybrid at 25 per pack. "Instance" means a deployed app, not a flow — one Flogo app with 10 flows counts as 1 instance. Test orgs on Basic get 10 instances as a bonus. Hitting the cap blocks new deployments; plan consolidation before it bites.
- **BusinessWorks is not on Basic at all.** Basic only includes Flogo, Node.js, and Scribe Connect. BusinessWorks requires Premium or Hybrid plan AND separate BusinessWorks licensing — it is not included in base subscription.
- **No public pricing — custom quotes only.** Budget ~$50K/year entry, ~$52.5K/year average (Vendr data), $180K–$250K 3-year TCO mid-market. TIBCO does not publish per-seat or per-instance list prices; expect significant implementation services cost (0.5x–2x annual software spend for complex deployments).
- **Region-specific API URLs — calls to the wrong region silently return nothing.** AWS US is `https://api.cloud.tibco.com/tci/v1`, EU is `eu.api.cloud.tibco.com`, AU is `au.api.cloud.tibco.com`, Azure US is `api.us.azure.cloud.tibco.com`. Each region has its own Swagger page. Use the URL that matches your subscription region.
- **Scribe Replication can't pre-filter.** The Replication Service pulls all records and all columns from the beginning of time — no filter at the source level. For selective replication, use a Scribe Integration Map instead, or filter/transform downstream.
- **Flogo REST triggers don't respect app property for port.** The port field on REST and GraphQL triggers does not support app properties — you cannot environmentalize the port via the standard app property mechanism. Hardcode per environment or use deployment automation to rewrite at deploy time.
- **Flogo Date/DateTime fields show as string in the output tab.** When a REST trigger is created from schema or JSON sample data with Date/DateTime types, Flogo displays them as strings (and doubles as numbers). This is a UI display quirk — the runtime behavior is correct, but maps need explicit type coercion if downstream strict typing is expected.
- **Flogo error handler doesn't expose `$error.data` and `$error.code` in the mapper.** In the flow error handler, these error context variables are not supported in the mapper. Capture errors in a catch block and map via activity input instead, or surface the error in a logger activity.
- **Scribe doesn't persist successful record history.** When the target system has an issue, you can't easily reconcile which records Scribe already processed — the success log is not retained. Add downstream audit logging in the target or in a separate audit table.
- **Documentation is descriptive, not instructive.** Like most enterprise iPaaS docs, TIBCO docs explain *what* features do but rarely walk through end-to-end problem solutions. TIBCO Community (community.tibco.com), Known Issues articles, and Support cases fill the gap. Plan for a learning curve and budget for training/consulting on first deployment.

## Related skills

- `/sales-boomi` — Boomi platform help — cloud-native iPaaS, 1000+ connectors, Data Hub MDM, AgentStudio (direct competitor)
- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-informatica` — Informatica IDMC platform help — enterprise iPaaS + MDM + data catalog + IPU pricing (direct competitor)
- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors, recipe automation (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, NetSuite depth (direct competitor)
- `/sales-snaplogic` — SnapLogic platform help — enterprise iPaaS, 1000+ Snaps, AgentCreator (direct competitor)
- `/sales-jitterbit` — Jitterbit platform help — Harmony iPaaS, 400+ connectors, API Manager (direct competitor)
- `/sales-tray` — Tray.ai platform help — enterprise iPaaS, 700+ connectors, Merlin Agent Builder (direct competitor)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common TIBCO integration target
- `/sales-hubspot` — HubSpot platform help — common TIBCO integration target
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Hit the Basic plan app instance limit
**User says**: "We're on TIBCO Cloud Integration Basic and deploying our 6th Flogo app is failing. Support says we're at the limit."
**Skill does**: Reads platform guide for subscription tier section. Explains Basic is capped at 5 combined iPaaS app instances across Flogo/Node.js/Scribe Connect. Two options: (1) consolidate — a single Flogo app can host multiple flows so multiple logical integrations can share one instance; refactor the 6 apps into 3-4 multi-flow apps, (2) upgrade to Premium (15 instances). Notes the test org gets 10 instances as a bonus so prototyping there doesn't eat the prod cap.
**Result**: User knows how to consolidate Flogo apps to stay within plan or plan the Premium upgrade.

### Example 2: TIBCO Cloud Integration vs Boomi for mid-market
**User says**: "We're evaluating TCI and Boomi. We're a mid-market manufacturer with on-prem SAP ECC, Salesforce, and Workday. 3 integration developers."
**Skill does**: Reads platform guide for positioning. Compares: TCI's strength is TIBCO heritage — if there's existing on-prem BusinessWorks, EMS, or Spotfire, TCI extends it; SAP integration via the TIBCO SAP Solutions plug-in is mature. Boomi is more cloud-native and has a lower entry cost (~$550/mo Professional vs TCI's $50K+/year custom quotes). For a mid-market manufacturer with no existing TIBCO footprint, recommends Boomi for faster time-to-value unless real-time messaging/EMS-style patterns dominate. Notes SAP connector licensing is extra on both platforms.
**Result**: User understands trade-offs and gets a recommendation calibrated to their stack and scale.

### Example 3: Scribe replication pulling all history
**User says**: "Scribe replication is hammering our source DB — it's pulling every record from the beginning of time. Can I filter at the source?"
**Skill does**: Reads platform guide for Scribe section. Confirms: Replication Service does not support pre-filtering — by design it replicates the full source. Options: (1) switch to a Scribe **Integration Map** and add a query filter at the source transformation — this is the intended path for selective sync, (2) if source is a DB, use a view that pre-filters and point the Replication Service at the view, (3) add an incremental filter column (modified date) and use Scribe's incremental replication mode which only pulls changes after the initial full sync.
**Result**: User picks Integration Map or a source view and stops the full-history pulls.

## Troubleshooting

### Flogo REST trigger: Date fields show as string in test output
**Symptom**: Flogo flow tester shows Date/DateTime fields as strings and doubles as numbers; schema/JSON sample was correct.
**Cause**: Known UI display behavior — Flogo REST trigger output tab does not distinguish Date/DateTime/double types visually. Runtime behavior is correct but mapper activities may not auto-coerce.
**Solution**: In downstream mapper activities, explicitly coerce with the appropriate function (`date()`, `number()`, etc.) if the target schema is strict. Don't rely on the test output tab to validate type fidelity — run an end-to-end test against the real target instead.

### Scribe: Execution timeout expired / duplicate key on replication
**Symptom**: Replication Service fails with "Execution timeout expired", "data would be truncated", or "Cannot insert duplicate key row".
**Cause**: Timeout — source query is too slow on first full sync. Truncation — target column is smaller than source. Duplicate key — target already has keys from a previous partial run.
**Solution**: For timeouts, increase the connection timeout in the Scribe agent config and reduce initial sync volume via source-side views or an Integration Map with filters. For truncation, size target columns to source max lengths before running (Scribe won't auto-resize). For duplicate keys, truncate the target or use an upsert/update-match strategy in an Integration Map instead of insert-only replication.

### API call returns empty response / 404 despite valid token
**Symptom**: REST call to TCI API returns nothing or 404 after OAuth token was issued successfully.
**Cause**: Calling the wrong regional endpoint for your subscription — each TCI region has a separate API URL (AWS US vs EU vs AU vs Azure US) and tokens issued for one region don't return data from another.
**Solution**: Verify your subscription region in the TCI UI. Use the matching base URL: `https://api.cloud.tibco.com/tci/v1` (AWS US), `https://eu.api.cloud.tibco.com/tci/v1` (EU), `https://au.api.cloud.tibco.com/tci/v1` (AU), `https://api.us.azure.cloud.tibco.com/tci/v1` (Azure US). Also use the region-specific Swagger page to confirm endpoint paths — they are the same across regions but the host differs. All calls require the Subscription Locator header except `GET /v1/userinfo`.
