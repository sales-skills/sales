---
name: sales-informatica
description: "Informatica IDMC platform help — enterprise iPaaS + data management cloud, Cloud Data Integration, Cloud Application Integration, API Center, Data Catalog, Data Quality, MDM, B2B Gateway, AI Agent Engineering, IPU consumption pricing, REST API v2/v3. Use when Informatica IDMC mapping or task keeps failing, CDI job is slow and IPU consumption is spiraling, Secure Agent is offline or can't reach source systems, REST V2 connector won't authenticate to a REST API, evaluating Informatica vs Boomi vs MuleSoft vs Talend, migrating off PowerCenter to IDMC, or configuring MDM golden records and match rules. Do NOT use for simple Zapier/Make automations (use /sales-integration) or Boomi-specific questions (use /sales-boomi)."
argument-hint: "[describe what you need help with in Informatica IDMC]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, data, platform]
github: "https://github.com/InformaticaCloudApplicationIntegration"
---

# Informatica IDMC Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Cloud Data Integration (CDI) — ETL/ELT mappings, tasks, pipelines
   - B) Cloud Application Integration (CAI) — real-time processes, API workflows
   - C) API Center — API design, gateway, developer portal
   - D) Data Catalog — metadata, lineage, search
   - E) Data Quality / Observability — rules, scorecards, profiling
   - F) MDM / 360 Applications — golden records, match rules
   - G) B2B Gateway — trading partners, EDI
   - H) AI Agent Engineering — custom agents, CLAIRE
   - I) Secure Agent — install, runtime, connectivity, upgrades
   - J) Pricing / IPU consumption — costs, Flex IPU, optimization
   - K) Migration from PowerCenter to IDMC
   - L) Something else — describe it

2. **What's your deployment model?**
   - A) Informatica-hosted (fully cloud, Secure Agent on their cloud)
   - B) Hybrid (customer-managed Secure Agent on VM/container, IDMC control plane in cloud)
   - C) Serverless runtime (advanced clusters)
   - D) Not sure / evaluating

3. **What's your role?**
   - A) Data engineer / developer (builds mappings and tasks)
   - B) Integration architect (designs integration strategy)
   - C) Admin (manages orgs, users, runtime, licenses)
   - D) Data steward (Data Quality, MDM, Governance)
   - E) Evaluating Informatica

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting Informatica to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| SnapLogic-specific questions | `/sales-snaplogic {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| CDI mapping / task development | Answer directly — read platform guide |
| CAI real-time processes | Answer directly — read platform guide |
| API Center / developer portal | Answer directly — read platform guide |
| MDM golden records / match rules | Answer directly — read platform guide |
| Secure Agent setup / troubleshooting | Answer directly — read platform guide |
| IPU pricing / optimization | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — Informatica platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, connectors, Secure Agent, MDM, API Center, AI agents.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the IDMC REST APIs, also **read `references/informatica-api-reference.md`** for authentication, endpoints, and resources.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check the Informatica Cloud Marketplace first. If no native connector exists, use the REST V2 connector (supports Swagger 2.0 and OpenAPI 3.0.x specs — import the spec and IDMC generates the operations). For proprietary systems, the Informatica Connector Toolkit (Java) builds custom connectors.

**Deployment decision shortcut**: Informatica-hosted Secure Agent for fastest start. Customer-managed Secure Agent when sources are on-prem or behind firewall. Serverless runtime (advanced clusters) for elastic Spark-based processing of large CDI workloads. Always place the Secure Agent close to the heaviest source/target to minimize data egress.

**Cost optimization shortcut**: IPU consumption is driven by service type × runtime × data volume. CDI Elastic / advanced clusters consume more IPUs per hour than standard CDI. Right-size schedules (don't run hourly if daily works), consolidate mappings, and review the Metering API weekly. Flex IPU model lets you shift IPUs across services within the contract year — useful when usage patterns change.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and feature availability which change frequently.*

- **IPU consumption can spiral without monitoring.** IPU is metered per service and per runtime type — a single poorly-designed CDI Elastic job can burn through tens of thousands of IPUs. Set up consumption alerts in the admin UI and pull metering data via the v3 `/metering` API weekly.
- **No public price list — every deal is custom.** Informatica pricing requires a quote. Budget $50K–$100K/year minimum for entry usage, scaling to $300K–$800K+/year for high-volume processing. Enterprise deployments typically need $80K–$150K in software plus $150K–$300K in implementation.
- **Unused IPUs expire annually.** Classic IPU contracts lose unused IPUs at the contract anniversary. Flex IPU lets you carry some across services but still within the contract term. Right-size the contract or negotiate a Flex model.
- **Pod-specific base URLs — you can't hardcode.** IDMC runs on multiple regional pods (dm-us, dm-em, dm-ap, etc.). The v3 login response returns the correct `baseApiUrl` for your org — always use that value for subsequent calls, never a hardcoded URL.
- **REST API v1 is deprecated.** Only v2 and v3 receive updates. v3 uses JSON + `INFA-SESSION-ID` header; v2 uses XML/JSON + `icSessionId` header. Prefer v3 unless the resource you need only exists in v2.
- **PowerCenter migration is non-trivial.** IDMC is the strategic successor to PowerCenter, but mapping compatibility is not 1:1. Use Informatica's PowerCenter-to-CDI mapping conversion utility and expect rework for mapplets, custom transformations, and push-down optimization logic.
- **Premium and enterprise connectors cost extra.** SAP, Workday, Oracle, and some industry connectors carry additional licensing fees beyond IPU consumption. Verify connector licensing before planning integrations.
- **Documentation is descriptive, not instructive.** Like most enterprise iPaaS docs, Informatica documentation explains *what* features do but rarely shows *how* to solve end-to-end integration problems. Informatica Network community, Success Accelerators, and University training fill the gap.

## Related skills

- `/sales-boomi` — Boomi platform help — cloud-native iPaaS, 1000+ connectors, Data Hub MDM, AgentStudio (direct competitor)
- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors, recipe automation, MCP Gateway (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, AI error management, NetSuite depth (direct competitor)
- `/sales-snaplogic` — SnapLogic platform help — enterprise iPaaS, 1000+ Snaps, AgentCreator AI agents, API Management 3.0 (direct competitor)
- `/sales-jitterbit` — Jitterbit platform help — Harmony iPaaS, 400+ connectors, API Manager, App Builder (direct competitor)
- `/sales-tray` — Tray.ai platform help — enterprise iPaaS, 700+ connectors, Merlin Agent Builder, Tray Embedded (direct competitor)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common Informatica integration target
- `/sales-hubspot` — HubSpot platform help — common Informatica integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: REST V2 connector auth failing
**User says**: "My Informatica REST V2 connector keeps failing with 401 when calling a partner API that uses OAuth 2.0 client credentials."
**Skill does**: Reads platform guide for connector section. Walks through REST V2 OAuth 2.0 setup: create a REST V2 Connection with Auth Type = OAuth 2.0 Client Credentials, set Token Endpoint URL, Client ID, Client Secret, and scope. If the API returns the token in a non-standard field, configure the Token Response Parsing Strategy. Notes that the Swagger 2.0 / OpenAPI 3.0.x spec must be imported into the connection for operations to generate.
**Result**: User has a working OAuth-authenticated REST V2 connection.

### Example 2: Informatica IDMC vs Boomi for a mid-market company
**User says**: "We're evaluating Informatica IDMC and Boomi. We're a mid-market retail company with mostly cloud SaaS, plus an on-prem Oracle ERP, and 4 integration developers."
**Skill does**: Reads platform guide for pricing and positioning. Compares: IDMC is stronger for data-heavy ETL, MDM, and governance; Boomi is stronger for cloud-native application integration and has lower entry cost (~$550/mo Professional vs IDMC's $50K+/yr IPU minimum). For a mid-market team with 4 developers and mostly SaaS + one on-prem ERP, recommends Boomi for faster time-to-value unless the MDM + Data Quality requirements are significant. Notes that Informatica's strength shows at enterprise scale where data volume, governance, and regulatory requirements dominate.
**Result**: User understands the trade-offs and has a recommendation matching their scale and use cases.

### Example 3: CDI job IPU consumption spiking
**User says**: "One of our CDI Elastic mappings started consuming 10x more IPUs last week — we went from 2K IPUs/week to 25K IPUs/week. How do I diagnose this?"
**Skill does**: Explains IPU metering model. Recommends: (1) pull metering data via v3 `/metering` API for the last 30 days to confirm the spike is in CDI Elastic and not another service, (2) check the mapping's run history — did source data volume grow? Did someone change from standard CDI to Elastic? Did the schedule change to more frequent runs? (3) profile the mapping — Elastic jobs pay for the cluster lifetime, so even empty runs cost IPUs; scale down minimum cluster size or use standard CDI if volume doesn't justify Elastic, (4) set up a metering alert to catch future spikes within a day.
**Result**: User has a diagnostic plan and knows how to prevent recurrence.

## Troubleshooting

### "Secure Agent offline" or tasks failing with connectivity errors
**Symptom**: Mappings/tasks fail immediately with "Secure Agent not available" or connections can't reach source systems.
**Cause**: Secure Agent process stopped, lost its session with IDMC control plane, or can't reach the source endpoint from the network where the agent runs.
**Solution**: In Administrator → Runtime Environments, check agent status. Restart the agent service (`infaagent startup` / `infaagent shutdown` on Linux). Check the agent logs at `~/infaagent/apps/agentcore/logs/infaagent.log` for the actual error. If the agent is running but can't reach sources, check firewall rules, proxy settings, and that the agent host can resolve the source's DNS. For outbound connectivity to IDMC, allowlist the IDMC POD hostnames (`*.dm-us.informaticacloud.com`, etc.).

### REST API v3 call returns 401 even with a fresh session
**Symptom**: After login succeeds, subsequent v3 API calls return 401 Unauthorized.
**Cause**: Missing or incorrect `INFA-SESSION-ID` header, or calling a v3 endpoint on the generic public URL instead of the org-specific `baseApiUrl` returned in the login response.
**Solution**: Confirm the login response was parsed correctly — the header is `INFA-SESSION-ID` (not `icSessionId`, that's v2). Use the `baseApiUrl` value from the login response (e.g., `https://usw3.dm-us.informaticacloud.com/saas`) as the base for all subsequent v3 calls, not `https://dm-us.informaticacloud.com`. Session IDs expire after 30 minutes of inactivity — refresh by calling `/login` again if the session has idled.

### Mapping works in dev but fails in production
**Symptom**: A CDI mapping runs fine in the development runtime but fails after being deployed to production.
**Cause**: Environment-specific configuration didn't deploy — connection credentials, parameter file values, or runtime environment assignments differ between orgs.
**Solution**: Use Informatica's **connection parameter override** mechanism — define connection attributes per runtime environment (e.g., different database host/credentials for dev vs prod). For taskflows and mapping tasks, use **parameter files** or **in-out parameters** so values aren't hardcoded. When deploying via Source Control (Git), verify that connection references resolve correctly in the target org — connection IDs differ across orgs, so the deployment should re-bind by name, not ID. Test with a small sample in production before running full volume.
