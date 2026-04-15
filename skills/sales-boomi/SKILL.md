---
name: sales-boomi
description: "Boomi platform help — enterprise iPaaS, 1000+ connectors, API Management, Data Hub MDM, Flow low-code builder, Event Streams, B2B/EDI, AgentStudio AI agents, MCP support. Use when Boomi integration keeps failing or data isn't syncing, connector won't authenticate to SAP or Salesforce, per-connection pricing is spiraling and you need to optimize, debugging a Boomi process is painful with vague error messages, evaluating Boomi vs MuleSoft vs Workato, or setting up API management and governance. Do NOT use for simple Zapier/Make automations (use /sales-integration) or MuleSoft-specific questions (use /sales-mulesoft)."
argument-hint: "[describe what you need help with in Boomi]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
---

# Boomi Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Integration development — connectors, data mapping, process building
   - B) API management — design, publish, govern, secure APIs
   - C) Data Hub — master data management, golden records, data quality
   - D) Flow — low-code app/workflow building
   - E) Event Streams — real-time event-driven integration
   - F) B2B/EDI — partner data exchange, trading partners
   - G) AI agents — AgentStudio, MCP, Platform Agents
   - H) Deployment — Atoms, Molecules, Atom Clouds, runtime management
   - I) Monitoring / troubleshooting — logs, errors, process execution
   - J) Pricing / licensing — per-connection costs, editions, optimization
   - K) Something else — describe it

2. **What's your deployment model?**
   - A) Boomi Atom Cloud (Boomi-hosted)
   - B) Local Atom (on-premises)
   - C) Molecule (clustered, high availability)
   - D) Not sure / evaluating

3. **What's your role?**
   - A) Integration developer (builds processes)
   - B) Architect (designs integration strategy)
   - C) Admin (manages platform, environments, users)
   - D) Business user (Flow / Task Automation)
   - E) Evaluating Boomi

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting Boomi to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Integration architecture strategy | Answer directly — read platform guide |
| Connector setup or troubleshooting | Answer directly — read platform guide |
| API management and governance | Answer directly — read platform guide |
| Pricing optimization | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — Boomi platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, connectors, deployment, Data Hub, API management, AI agents.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the Boomi Platform APIs, also **read `references/boomi-api-reference.md`** for endpoints, authentication, and rate limits.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check Boomi Marketplace first for pre-built connectors. If no connector exists, use the HTTP Client connector for REST APIs or the Connector SDK to build custom. Technology connectors (Database, Disk, FTP, HTTP, SFTP) are always available.

**Deployment decision shortcut**: Atom Cloud for fastest start (Boomi-hosted, no infrastructure). Local Atom for on-prem data that can't leave the network. Molecule for high availability and load balancing. Start small, scale up.

**Cost optimization shortcut**: Audit active connections — each endpoint costs ~$300/mo. Consolidate processes where possible. Use the Professional tier if you need ≤5 connections. Negotiate multi-year for volume discounts. Consider the PAYG ($99/mo + usage) for testing.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and feature availability which change frequently.*

- **Per-connection pricing adds up fast.** Every endpoint (even basic local disk or HTTP) costs ~$300/mo additional. Map your connection count before signing. A 20-integration setup can easily exceed $6K/mo in connection fees alone.
- **Debugging is painful.** Boomi's error messages are frequently vague ("process execution failed"). Enable detailed logging in process properties, use the Process Reporting tab, and check Atom logs directly for stack traces.
- **Single JVM per Atom — no auto-scaling.** Each Atom runs as one JVM process. High-throughput workloads hit memory ceilings. Use Molecules (clustered Atoms) for horizontal scaling, but design processes to be stateless first.
- **3-7% annual contract escalation.** Boomi contracts typically include automatic price increases at renewal. Negotiate a price cap or multi-year lock upfront.
- **Documentation is descriptive, not instructive.** Boomi docs explain what features do but rarely show how to solve integration problems. Community forums (community.boomi.com) and Boomi training courses fill the gap.
- **Server restarts can lose in-flight transactions.** Atom restarts (during updates or crashes) may drop transactions in progress. Implement idempotent processes and checkpoint/restart patterns for critical workflows.
- **Premium connector costs are hidden.** SAP, Workday, and some ERP connectors carry separate licensing fees beyond the per-connection cost. Verify connector licensing before planning integrations.

## Related skills

- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common Boomi integration target
- `/sales-hubspot` — HubSpot platform help — common Boomi integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Connector authentication failing
**User says**: "My Boomi Salesforce connector keeps failing with 'INVALID_SESSION_ID' after a few hours."
**Skill does**: Reads platform guide for connector section. Explains that Salesforce OAuth tokens expire — configure the Salesforce connector to use OAuth 2.0 with refresh tokens instead of session ID. Walks through the connector configuration in AtomSphere: Connection tab → Auth Type → OAuth 2.0 → set Client ID, Client Secret, and Refresh Token. Notes that Connected App in Salesforce needs "Refresh token is valid until revoked" setting.
**Result**: User has a persistent Salesforce connection that auto-refreshes.

### Example 2: Boomi vs MuleSoft for a mid-market company
**User says**: "We're evaluating Boomi and MuleSoft for our integration needs — 15 applications, mostly cloud SaaS, team of 3."
**Skill does**: Reads platform guide for pricing and positioning. Compares: Boomi is cloud-native with lower entry cost (~$550/mo Professional vs MuleSoft's $6K+/mo), faster learning curve (visual drag-and-drop vs DataWeave code), and 1000+ pre-built connectors. MuleSoft excels for API-led architecture and complex enterprise patterns. For 15 cloud apps with a small team, recommends Boomi for faster time-to-value. Notes Workato as another option for teams wanting automation-first ($1,500/mo).
**Result**: User understands the trade-offs and has a recommendation matching their scale.

### Example 3: Process execution is slow under load
**User says**: "Our Boomi process that syncs orders from Shopify to NetSuite takes 30 minutes during peak hours when we have 500+ orders queuing up."
**Skill does**: Explains single-JVM bottleneck. Recommends: (1) enable parallel processing in the Process shape — set concurrent executions to match available CPU cores, (2) use batch processing with the Map shape to process orders in groups of 50, (3) if still slow, deploy a Molecule (clustered Atoms) for horizontal scaling. Also checks if the NetSuite connector is the bottleneck (NetSuite has concurrency limits — check SuiteCloud governance).
**Result**: User has a scaling plan from process optimization to infrastructure upgrade.

## Troubleshooting

### "Process execution failed" with no useful error details
**Symptom**: Process fails but the error message is generic — no stack trace, no field-level detail.
**Cause**: Boomi's default logging level hides detailed errors. The Process Reporting view only shows high-level status.
**Solution**: Enable "Document Logging" in the process properties (Process Options → Enable Document Logging). Check Atom logs directly (Setup → Atom Management → Properties → Logs). For connector errors, check the connector's operation log. Add Try/Catch shapes around error-prone steps to capture and log specific exception details.

### Atom running out of memory during large data loads
**Symptom**: Process crashes or hangs when processing large files or high-volume batch operations.
**Cause**: Single JVM heap exhausted — Boomi loads entire documents into memory by default.
**Solution**: Increase Atom JVM heap in `atom.vmoptions` (set `-Xmx` to 4096m or higher). Use Flow Control shapes to batch large datasets (process 1000 records at a time). For very large files, use the Disk connector as intermediate storage instead of in-memory processing. Consider upgrading to a Molecule for distributed processing.

### Connector working in test but failing in production
**Symptom**: Integration works fine in development/test environment but fails after deployment to production Atom.
**Cause**: Environment-specific configuration not deployed — connection credentials, environment extensions, or Atom properties differ between environments.
**Solution**: Use Boomi Environment Extensions to manage environment-specific values (URLs, credentials, paths). Verify the production Atom has the correct extensions configured (Manage → Atom Management → Environment Extensions). Check that the production Atom's network can reach the target system (firewall rules, VPN, IP whitelisting).
