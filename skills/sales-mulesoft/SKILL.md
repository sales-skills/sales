---
name: sales-mulesoft
description: "MuleSoft platform help — Anypoint Platform, API-led connectivity, Design Center, Anypoint Studio, Code Builder, Exchange, Runtime Manager, API Manager, Flex Gateway, Composer, RPA, IDP, DataWeave, CloudHub, 450+ connectors. Use when Anypoint Studio crashes or gives misleading errors, DataWeave transformation isn't working, CloudHub deployment fails or runs out of CPU credits, API policies aren't enforcing correctly, connectors won't authenticate to SAP or Salesforce, vCore pricing is spiraling and you need to optimize, or MuleSoft implementation is stalling. Do NOT use for general CRM platform config (use /sales-salesforce) or simple Zapier/Make integrations (use /sales-integration)."
argument-hint: "[describe what you need help with in MuleSoft]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
github: "https://github.com/mulesoft"
---

# MuleSoft Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) API design — RAML/OAS specs, Design Center, API-first approach
   - B) Integration development — Anypoint Studio, Code Builder, connectors, DataWeave
   - C) Deployment — CloudHub, CloudHub 2.0, Runtime Fabric, on-prem, hybrid
   - D) API management — API Manager, policies, SLA tiers, Flex Gateway, rate limiting
   - E) Composer — no-code integrations, Salesforce-native automation
   - F) RPA / IDP — robotic process automation, document processing
   - G) AI — Einstein for MuleSoft, Dev Agent, Agent Fabric, MCP support
   - H) Exchange — publishing assets, discovering connectors, templates
   - I) Monitoring / troubleshooting — logs, alerts, performance, errors
   - J) Pricing / licensing — vCores, editions, Gold/Platinum/Titanium, cost optimization
   - K) Something else — describe it

2. **What's your deployment model?**
   - A) CloudHub (Salesforce-hosted)
   - B) CloudHub 2.0 (shared responsibility)
   - C) Runtime Fabric (self-managed Kubernetes)
   - D) On-premises (standalone Mule runtime)
   - E) Hybrid (mix of above)
   - F) Not sure / evaluating

3. **What's your role?**
   - A) MuleSoft developer (builds integrations)
   - B) Architect (designs API strategy)
   - C) Admin (manages platform, users, environments)
   - D) Business user (Composer / no-code)
   - E) Evaluating MuleSoft

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting MuleSoft to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| SnapLogic-specific questions | `/sales-snaplogic {question}` |
| Workato-specific questions | `/sales-workato {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| API design best practices (REST, versioning) | Answer directly — this is core MuleSoft |
| DataWeave transformation help | Answer directly — read platform guide |
| CloudHub deployment or performance | Answer directly — read platform guide |
| vCore optimization or pricing | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — MuleSoft platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, deployment options, DataWeave.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the Anypoint Platform APIs, also **read `references/mulesoft-api-reference.md`** for endpoints, authentication, and rate limits.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**API-led connectivity shortcut**: System APIs (connect to backend systems) → Process APIs (orchestrate business logic) → Experience APIs (serve channels/apps). Layer this architecture to maximize reuse.

**Deployment decision shortcut**: CloudHub for fastest start, lowest ops burden. Runtime Fabric for Kubernetes shops needing control. On-prem only if regulatory/compliance requires it. CloudHub 2.0 is the new default — evaluate before choosing legacy CloudHub.

**Cost optimization shortcut**: Right-size vCores (start with 0.1 for dev, 0.2 for staging, 1.0+ for prod). Use shared workers for low-traffic APIs. Consolidate apps where possible to reduce vCore count. Monitor CPU/memory to avoid over-provisioning.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and feature availability which change with Salesforce releases.*

- **vCore pricing spirals with scale.** Each integration flow needs vCores. Enterprise contracts commonly exceed $50K/year before headcount. Model your vCore needs before signing — add 30% buffer for non-production environments.
- **DataWeave has a steep learning curve.** It's a proprietary functional language with no equivalent outside MuleSoft. Certified MuleSoft developers command $120-180K salaries. Budget for training or hire experienced developers.
- **Implementation takes 6-18 months.** Typical enterprise MuleSoft deployment is a multi-quarter project. CI/CD pipeline integration requires custom DevOps scripting not included in the platform.
- **Anypoint Studio IDE is buggy.** Crashes, memory leaks, port binding issues, and misleading error messages are common complaints. Save frequently, use version control, and consider Code Builder as an alternative.
- **CloudHub has CPU credit limits.** Applications that run fine locally may struggle after CloudHub deployment. Monitor CPU usage closely — exceeding credits causes throttling.
- **Premium connectors cost extra.** SAP, Oracle, Workday, Siebel connectors carry separate annual fees ($5K-50K+ each). Verify connector licensing before planning integrations.
- **MuleSoft Community migrated to Trailblazer.** As of May 2025, help.mulesoft.com forums moved to Salesforce Trailblazer Community. Old bookmarks may not work.

## Related skills

- `/sales-salesforce` — Salesforce platform help — MuleSoft's parent company, CRM integration target
- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors, recipe automation, MCP Gateway (direct competitor)
- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, API Management, Data Hub MDM (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, AI error management, NetSuite depth (direct competitor)
- `/sales-snaplogic` — SnapLogic platform help — enterprise iPaaS, 1000+ Snaps, AgentCreator AI agents, API Management 3.0 (direct competitor)
- `/sales-jitterbit` — Jitterbit platform help — Harmony iPaaS, 400+ connectors, API Manager, App Builder (direct competitor)
- `/sales-tray` — Tray.ai platform help — enterprise iPaaS, 700+ connectors, Merlin Agent Builder, Tray Embedded (direct competitor)
- `/sales-informatica` — Informatica IDMC platform help — enterprise iPaaS + data management, CDI/CAI, MDM, Data Catalog (direct competitor, data-management-first)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-hubspot` — HubSpot platform help — common MuleSoft integration target
- `/sales-crm-selection` — CRM comparison and selection — choosing the right CRM to integrate with
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: DataWeave transformation not working
**User says**: "My DataWeave transformation keeps failing — I'm trying to map a nested JSON array from SAP to flat Salesforce records."
**Skill does**: Reads platform guide for DataWeave section. Explains `flatMap` and `map` for nested-to-flat transformations. Provides a DataWeave snippet mapping nested SAP items to flat Salesforce Contact records. Notes common pitfalls: null handling with `default`, type coercion with `as String`, and the `---` separator requirement.
**Result**: User gets a working DataWeave transformation with error handling.

### Example 2: CloudHub deployment running out of resources
**User says**: "Our MuleSoft API deployed to CloudHub is timing out under load — we're on a 0.2 vCore worker."
**Skill does**: Reads platform guide for deployment section. Explains vCore sizing: 0.2 is development-tier (500 MB heap). For production load, recommends minimum 1.0 vCore. Suggests monitoring via Runtime Manager dashboards. Flags that horizontal scaling (multiple workers) distributes load but requires stateless design. Notes CloudHub 2.0 offers better autoscaling.
**Result**: User understands vCore sizing and scaling options.

### Example 3: Choosing between MuleSoft and simpler tools
**User says**: "My boss wants us to use MuleSoft for everything but we're a 20-person startup with basic CRM integrations."
**Skill does**: Explains that MuleSoft is enterprise-grade ($50K+/year, 6-18 month implementation). For a 20-person startup with basic integrations, recommends Zapier/Make first ($20-100/mo, same-day setup). Routes to `/sales-integration` for no-code options. Notes MuleSoft makes sense when you have 50+ integrations, need API governance, or compliance requirements.
**Result**: User understands when MuleSoft is (and isn't) the right tool.

## Troubleshooting

### "Anypoint Studio keeps crashing or freezing"
**Symptom**: IDE becomes unresponsive, throws memory errors, or crashes during development.
**Cause**: Anypoint Studio is Eclipse-based and resource-hungry. Common triggers: large projects, multiple open flows, insufficient heap memory, conflicting plugins.
**Solution**: Increase heap size in `AnypointStudio.ini` (set `-Xmx` to 4096m or higher). Close unused projects in the workspace. Disable unused plugins. Consider switching to Anypoint Code Builder (VS Code-based, lighter weight). Save and commit frequently.

### "DataWeave type coercion errors"
**Symptom**: Transformation fails with "Cannot coerce" or unexpected null values in output.
**Cause**: Input data has unexpected types or null values that DataWeave can't auto-coerce. Common with SAP/ERP sources that send numbers as strings or use empty strings for nulls.
**Solution**: Use explicit type coercion (`as String`, `as Number`). Add null guards with `default` operator. Use `skipNullOn="everywhere"` output directive. Test with sample payloads using DataWeave Playground before deploying.

### "vCore costs keep growing and I can't justify the budget"
**Symptom**: MuleSoft licensing bill increases every renewal cycle as integration count grows.
**Cause**: Each deployed application consumes vCores. Non-production environments (dev, staging, QA) each need their own allocation. Premium connectors add per-connector fees on top.
**Solution**: Right-size vCores per environment (0.1 for dev, 0.2 for staging). Consolidate related flows into single applications where possible. Use Composer for simple Salesforce-native integrations (included in some Salesforce licenses). Negotiate multi-year contracts for volume discounts. Document ROI per integration to justify costs.
