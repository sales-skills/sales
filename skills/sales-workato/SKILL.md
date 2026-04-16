---
name: sales-workato
description: "Workato platform help — enterprise iPaaS, 1200+ connectors, recipe-based automation, API Management, MCP Gateway, Agent Studio (Genies AI agents), Data Tables, Event Streams, B2B/EDI, Embedded iPaaS, IDP. Use when recipe costs keep spiraling and you need to optimize task consumption, recipe errors are unclear and debugging is painful, evaluating Workato vs MuleSoft vs Boomi vs Celigo, setting up API management or MCP gateway, building Genies AI agents in Agent Studio, or connecting enterprise apps without coding. Do NOT use for simple Zapier/Make automations (use /sales-integration) or MuleSoft-specific questions (use /sales-mulesoft)."
argument-hint: "[describe what you need help with in Workato]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
github: "https://github.com/workato"
---

# Workato Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Recipe building — connectors, triggers, actions, data mapping
   - B) API Management — build, publish, manage, MCP Gateway
   - C) Agent Studio — Genies, skills, knowledge bases, MCP servers
   - D) Data Tables — structured storage, queries, record management
   - E) Event Streams — real-time pub/sub messaging
   - F) Embedded iPaaS — embedding integrations in your SaaS product
   - G) B2B/EDI — trading partner data exchange
   - H) Deployment — environments, RLCM, CI/CD, testing
   - I) Monitoring / troubleshooting — job errors, debug tracing, performance
   - J) Pricing / licensing — task consumption, editions, cost optimization
   - K) Something else — describe it

2. **What edition are you on?**
   - A) Standard
   - B) Business
   - C) Enterprise
   - D) Workato One
   - E) Not sure / evaluating

3. **What's your role?**
   - A) Integration builder (creates recipes)
   - B) Architect (designs integration strategy)
   - C) Admin (manages workspace, users, governance)
   - D) Business user (simple automations)
   - E) Evaluating Workato

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting Workato to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| SnapLogic-specific questions | `/sales-snaplogic {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Recipe design and optimization | Answer directly — read platform guide |
| API management and MCP Gateway | Answer directly — read platform guide |
| Agent Studio / Genies | Answer directly — read platform guide |
| Pricing and cost optimization | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — Workato platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, connectors, recipes, API management, Agent Studio, Event Streams.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the Workato Developer API, also **read `references/workato-api-reference.md`** for endpoints, authentication, and resource details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check Workato's integration library first for pre-built connectors (1,200+ available). If no connector exists, use the HTTP connector for any REST API, or build a custom connector with the Connector SDK (Ruby-based).

**Cost optimization shortcut**: Audit recipe task consumption — each action inside a recipe counts as a task. Consolidate multi-step recipes where possible. Use conditional logic to skip unnecessary actions. Monitor via the Consumption Dashboard. Negotiate multi-year for volume discounts.

**Debugging shortcut**: Enable Job Debug Tracing for detailed HTTP request/response logs per action. Use Network Tracing for connector-level debugging. Add error-handling steps (Monitor → On Error) with custom notifications. Test incrementally — use the step-skip feature to isolate failures.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and feature availability which change frequently.*

- **Task-based billing spirals fast.** Each action inside a recipe = 1 task. A 10-step recipe processing 1,000 records/day = 10,000 tasks/day. Teams report costs doubling within 6-12 months of initial deployment. Model your task consumption before signing and set up consumption alerts.
- **Data size limits are real.** CSV parsing caps at 50K records. Lookup Tables cap at 100K rows. For larger datasets, use Data Tables or external storage. These limits are not obvious until you hit them.
- **Not built for ETL.** Workato excels at business process automation but struggles with complex joins, data masking, deduplication, or multi-step data transformations. Use a dedicated ETL tool (Fivetran, dbt, Airbyte) for data pipeline work.
- **Recipe errors can be vague.** Default error messages often lack specificity. Enable Job Debug Tracing (per-job HTTP logs) and add Monitor → On Error steps with detailed error notifications. Test recipes incrementally using step-skip.
- **No Git-style versioning.** Workato uses recipe versioning (snapshots) but lacks branching, merging, or pull requests. For teams used to Git workflows, this feels limiting. Use RLCM (Recipe Lifecycle Management) with export manifests for promotion between environments.
- **Connector API limits are inherited.** Workato respects the target system's API rate limits but doesn't always surface these clearly. A recipe that works at low volume may hit 429 errors at scale. Check the target system's rate limit docs before scaling.
- **Consumption overages aren't blocked by default.** Workato tracks consumption proactively but doesn't hard-stop recipes that exceed your plan. Set up consumption alerts and monitor the dashboard weekly during ramp-up.

## Related skills

- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, API Management, Data Hub MDM (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, AI error management, NetSuite depth (direct competitor)
- `/sales-snaplogic` — SnapLogic platform help — enterprise iPaaS, 1000+ Snaps, AgentCreator AI agents, API Management 3.0 (direct competitor)
- `/sales-jitterbit` — Jitterbit platform help — Harmony iPaaS, 400+ connectors, API Manager, App Builder (direct competitor)
- `/sales-tray` — Tray.ai platform help — enterprise iPaaS, 700+ connectors, Merlin Agent Builder, Tray Embedded (direct competitor)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common Workato integration target
- `/sales-hubspot` — HubSpot platform help — common Workato integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Recipe costs spiraling out of control
**User says**: "Our Workato bill went from $15K to $30K in 6 months and we can't figure out why."
**Skill does**: Reads platform guide for pricing section. Explains task-based billing — each action = 1 task, so a 10-step recipe processing 1,000 triggers/day = 10,000 tasks/day = 300K tasks/month. Recommends: (1) open Consumption Dashboard → sort by task usage to find top consumers, (2) audit high-volume recipes for unnecessary steps, (3) add conditions to skip actions that don't need to run every time, (4) consider batch processing to reduce trigger frequency. Notes that consumption alerts should be set at 80% of plan.
**Result**: User identifies the cost drivers and has a concrete optimization plan.

### Example 2: Evaluating Workato vs MuleSoft vs Boomi
**User says**: "We need an iPaaS for 25 SaaS apps, small IT team of 4, mostly cloud — Workato, MuleSoft, or Boomi?"
**Skill does**: Reads platform guide for comparison section. For a small team with 25 cloud apps: Workato is the best fit — lowest learning curve (visual recipe builder), fastest time-to-value, 1,200+ pre-built connectors, and business users can build simple automations. MuleSoft is overkill (needs certified developers, $50K+/yr). Boomi is mid-ground but per-connection pricing adds up fast with 25 apps. Recommends Workato Standard/Business tier. Notes: model task consumption carefully to avoid bill shock.
**Result**: User understands the trade-offs and has a recommendation for their scale.

### Example 3: Recipe failing with unclear error on high volume
**User says**: "My recipe that syncs Salesforce opportunities to NetSuite keeps failing with 'Action failed' but the error details are empty."
**Skill does**: Explains debugging approach: (1) Enable Job Debug Tracing for the recipe — this captures full HTTP request/response for each action, (2) check if the error is a rate limit from NetSuite (429 or SuiteTalk concurrency limit), (3) add a Monitor → On Error step that captures `error_message` and `error_type` and sends to Slack, (4) if rate-limited, add a Repeat step with delay between batches. Notes that NetSuite has a 25-concurrent-request limit on SuiteTalk API.
**Result**: User has debugging steps and a likely root cause.

## Troubleshooting

### Recipe suddenly stops triggering
**Symptom**: Recipe was working fine but stops processing new events — no errors, no jobs.
**Cause**: Trigger polling may have hit an API limit on the source system, or the trigger's "since" cursor is stuck. Connection tokens may have expired.
**Solution**: Check the connection status (Connections → verify it shows "Connected"). Re-test the trigger manually. Check if the source app's API changed authentication requirements. If the trigger cursor is stuck, reset it via Recipe → Reset Trigger (warning: may reprocess old events). Check Workato's status page for platform-wide issues.

### Job debug tracing shows 429 errors
**Symptom**: Actions fail intermittently, debug tracing shows HTTP 429 (Too Many Requests) responses.
**Cause**: Target system's API rate limit exceeded. Workato sends requests as fast as the recipe runs — it doesn't auto-throttle to match the target system's limits.
**Solution**: Add a Repeat step with configurable delay between actions. Reduce batch size. Check the target system's rate limit docs and set your recipe frequency accordingly. For Salesforce, check the 24-hour API request limit (varies by edition). For NetSuite, check SuiteTalk concurrency limits.

### Recipe works in test but fails in production
**Symptom**: Recipe runs fine with test data but fails on real production data.
**Cause**: Production data has edge cases not present in test — nulls, special characters, unexpected formats, larger payloads exceeding field limits.
**Solution**: Add data validation steps before key actions. Use error handling (Monitor → On Error) to catch and log specific failures. Check for null values with conditional logic before mapping. Verify field length limits on the destination system match your production data.
