---
name: sales-snaplogic
description: "SnapLogic platform help — enterprise iPaaS, 1000+ Snap connectors, AgentCreator AI agents, SnapGPT pipeline copilot, API Management 3.0, ETL/ELT/reverse ETL, visual pipeline designer. Use when pipeline debugging is painful and errors are hard to trace, evaluating SnapLogic vs Workato vs MuleSoft vs Boomi vs Celigo, building AI agents with AgentCreator or Prompt Composer, managing APIs with Policy Studio and Developer Hub, premium Snap Pack costs are unclear, or connecting enterprise apps with visual pipelines. Do NOT use for simple Zapier/Make automations (use /sales-integration) or Workato-specific questions (use /sales-workato)."
argument-hint: "[describe what you need help with in SnapLogic]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
github: "https://github.com/SnapLogic"
---

# SnapLogic Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Pipeline building — Snaps, triggers, data mapping, transformations
   - B) AgentCreator — AI agents, Prompt Composer, Agent Visualizer, RAG
   - C) SnapGPT — natural-language pipeline generation
   - D) API Management 3.0 — Policy Studio, Developer Hub, governance
   - E) ETL/ELT — data integration, reverse ETL, data products
   - F) Snaplex management — Groundplex, Cloudplex, node config
   - G) Monitoring / troubleshooting — pipeline errors, debug tracing, performance
   - H) Pricing / licensing — task consumption, Snap Pack costs, editions
   - I) Connectors — finding or building Snaps, Premium Snap Packs
   - J) CI/CD — Git integration, automated deployment, environments
   - K) Something else — describe it

2. **What deployment model?**
   - A) SnapLogic Cloud (Cloudplex)
   - B) On-premises (Groundplex)
   - C) Hybrid
   - D) Not sure / evaluating

3. **What's your role?**
   - A) Integration developer (builds pipelines)
   - B) Architect (designs integration strategy)
   - C) Admin (manages Org, users, Snaplexes)
   - D) Business user (simple automations)
   - E) Evaluating SnapLogic

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting SnapLogic to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| Workato-specific questions | `/sales-workato {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| Celigo-specific questions | `/sales-celigo {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Pipeline design, Snaps, AgentCreator, API Mgmt | Answer directly — read platform guide |
| Pricing, Snap Packs, cost optimization | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — SnapLogic platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, connectors, pipelines, AgentCreator, API Management 3.0, deployment.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the SnapLogic Public APIs, also **read `references/snaplogic-api-reference.md`** for endpoints, authentication, and API categories.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check SnapLogic's Snap library first (1,000+ pre-built). If no Snap exists, use the REST Snap for any REST API, or build a custom Snap with the Snap Developer Kit (Java-based).

**Cost optimization shortcut**: Task-based billing — each pipeline execution counts. Monitor via SnapLogic Dashboard. Audit high-frequency triggered pipelines. Use Ultra Pipelines for high-throughput streaming instead of repeated batch triggers. Evaluate whether Premium Snap Packs (Tier 1 ~$45K, Tier 2 ~$15K) are necessary or if REST Snap can substitute.

**Debugging shortcut**: Use Pipeline Debug mode for step-by-step execution with data preview at each Snap. Check error views on individual Snaps for data-level errors. Use the Dashboard for pipeline execution logs, duration, and failure rates. For complex pipelines, break into child pipelines for easier isolation.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and premium Snap Pack costs which may change.*

- **Pipeline debugging is the #1 complaint.** Error messages can be vague — "Action failed" with empty details. Always enable Pipeline Debug mode and check error views on individual Snaps. Break large pipelines into child pipelines so failures are easier to isolate.
- **Premium Snap Pack costs surprise teams.** Core Snaps are included, but enterprise connectors (Workday, SAP, NetSuite) are Premium — Tier 1 adds ~$45K, Tier 2 ~$15K. Confirm which Snaps you need before signing. The REST Snap can sometimes substitute for Premium connectors if you're comfortable with raw API calls.
- **Large pipelines cause UI issues.** Snaps can disconnect visually and the canvas becomes hard to navigate. Use child pipelines to break complex logic into smaller, manageable units. Keep any single pipeline under ~30 Snaps.
- **API Management 3.0 is still maturing.** Users report missing auto-key-management and the admin interface needs improvement. Check current release notes for the latest APIM 3.0 features before planning a full API governance rollout.
- **Incremental data loads are cumbersome.** SnapLogic handles full loads well but incremental/delta loads require manual cursor management. Plan your watermark/cursor strategy upfront for high-volume data pipelines.
- **Task-based billing can spiral.** Each pipeline execution = tasks consumed from your block. High-frequency triggered pipelines eat through task allocations fast. Use Ultra Pipelines (streaming) for high-volume scenarios to reduce per-execution overhead. Set consumption alerts early.

## Related skills

- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors, recipe automation (direct competitor)
- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, API Management, Data Hub MDM (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, AI error management, NetSuite depth (direct competitor)
- `/sales-jitterbit` — Jitterbit platform help — Harmony iPaaS, 400+ connectors, API Manager, App Builder (direct competitor)
- `/sales-tray` — Tray.ai platform help — enterprise iPaaS, 700+ connectors, Merlin Agent Builder, Tray Embedded (direct competitor)
- `/sales-informatica` — Informatica IDMC platform help — enterprise iPaaS + data management, CDI/CAI, MDM, Data Catalog (direct competitor, data-management-first)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common SnapLogic integration target
- `/sales-hubspot` — HubSpot platform help — common SnapLogic integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Pipeline errors are vague and hard to debug
**User says**: "My SnapLogic pipeline keeps failing with no useful error message — just 'Snap execution error' on the Mapper Snap."
**Skill does**: Reads platform guide for debugging section. Recommends: (1) enable Pipeline Debug mode to step through and preview data at each Snap, (2) check if the Mapper Snap has an error view configured — if not, add one to capture data-level errors, (3) verify input schema matches — Mapper failures often come from null values or unexpected types in upstream data, (4) break the pipeline into smaller child pipelines to isolate where the data goes wrong. Notes that Mapper Snap errors are often caused by expression evaluation on null fields.
**Result**: User has a debugging approach and likely root cause.

### Example 2: Evaluating SnapLogic vs Workato vs MuleSoft
**User says**: "We need an iPaaS for 30 cloud apps, small IT team of 5, mix of API and data integrations — SnapLogic, Workato, or MuleSoft?"
**Skill does**: Reads platform guide for comparison section. For a small team with 30 cloud apps and mixed needs: SnapLogic is a strong fit — visual pipeline designer is accessible, 1,000+ Snaps, and the ETL/ELT capabilities handle data integration that Workato struggles with. Workato is faster for pure business process automation (recipes are simpler). MuleSoft is overkill for the team size (needs certified developers). Notes: model task consumption carefully for SnapLogic, and check if needed connectors are Core or Premium Snaps before pricing.
**Result**: User understands trade-offs with a recommendation for their scenario.

### Example 3: Building an AI agent with AgentCreator
**User says**: "How do I build an AI agent in SnapLogic that answers questions about our company data?"
**Skill does**: Reads platform guide for AgentCreator section. Walks through: (1) use Prompt Composer to define the agent's instructions and context, (2) create tool pipelines that query your data sources (Snowflake, Salesforce, etc.) — each pipeline becomes a "tool" the agent can call, (3) connect LLM Snap Pack (OpenAI, Bedrock, Azure OpenAI) for the agent's reasoning, (4) optionally add vector database Snap Pack (Pinecone, MongoDB) for RAG over unstructured documents, (5) use Agent Visualizer to debug the agent's reasoning chain, (6) enable human-in-the-loop for sensitive operations. Notes that AgentCreator is a premium feature — confirm it's included in your package.
**Result**: User has a step-by-step plan for building their first AI agent.

## Troubleshooting

### Pipeline works in preview but fails in production
**Symptom**: Pipeline runs fine in debug/preview mode but fails on scheduled or triggered execution.
**Cause**: Production data has edge cases not present in preview — nulls, special characters, larger payloads, or API rate limits hit at full volume.
**Solution**: Add error views to critical Snaps to capture data-level failures. Add validation Snaps before key operations. Check for null values with Filter or Condition Snaps before Mapper. For rate limits, check the target system's API docs and add throttling via the Pipeline Execute Snap's concurrency settings.

### Snap connectivity errors on Groundplex
**Symptom**: Snaps that work on Cloudplex fail with connection errors on Groundplex (on-premises).
**Cause**: Groundplex nodes may lack network access to the target system, or firewall rules block outbound connections from the Snaplex JCC.
**Solution**: Verify the Groundplex node can reach the target endpoint (DNS resolution + port access). Check firewall rules for outbound HTTPS (443) and any non-standard ports. Verify the Snaplex JCC process is running and the node shows "Running" in the Dashboard. Check if the Groundplex version is current — older versions may lack connector updates.

### Premium Snap Pack not appearing after purchase
**Symptom**: Purchased a Premium Snap Pack but it doesn't show in the Snap palette.
**Cause**: Snap Packs need to be enabled for your Org/Space by an admin after purchase. License activation may take up to 24 hours.
**Solution**: Contact your SnapLogic admin to verify the Snap Pack is enabled in your Org settings. Check Manager > Snap Packs for the activation status. If recently purchased, allow 24 hours for license propagation. If still missing, contact SnapLogic Support with your order confirmation.
