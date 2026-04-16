---
name: sales-jitterbit
description: "Jitterbit platform help — AI-infused low-code iPaaS (Harmony), 400+ connectors, API Manager, App Builder, EDI, Design Studio, Integration Studio, Agent Management. Use when Jitterbit process keeps failing with vague errors or no stack trace, Salesforce or NetSuite connector fails silently on individual record updates, debugging a Harmony integration is painful with limited logging, per-connection pricing is making costs unpredictable as you add endpoints, evaluating Jitterbit vs Workato or Boomi or MuleSoft, setting up hybrid agents behind a firewall, or looking for API Manager and API gateway configuration. Do NOT use for simple Zapier/Make automations (use /sales-integration) or Boomi-specific questions (use /sales-boomi)."
argument-hint: "[describe what you need help with in Jitterbit]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
github: "https://github.com/jitterbit"
---

# Jitterbit Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Integration development — connectors, data mapping, process building
   - B) API Manager — design, publish, secure, monitor APIs
   - C) App Builder — low-code app/workflow building
   - D) EDI / B2B — trading partner setup, X12, EDIFACT
   - E) Agent Management / AI — agents, MCP, AI integration
   - F) Deployment — agent groups (cloud, private, hybrid), runtime config
   - G) Monitoring / troubleshooting — logs, Session Trace, Operation Log errors
   - H) Pricing / licensing — per-connection costs, bundle optimization
   - I) Migration — Design Studio to Integration Studio, or from competitor
   - J) Something else — describe it

2. **Which Jitterbit product are you using?**
   - A) Integration Studio (web-based, current recommended)
   - B) Design Studio (desktop, legacy but still widely deployed)
   - C) API Manager
   - D) App Builder
   - E) Not sure / evaluating

3. **What's your deployment model?**
   - A) Cloud agents (Jitterbit-managed)
   - B) Private agents (on-premises / behind firewall)
   - C) Hybrid (cloud API gateway + private agents)
   - D) Not sure / evaluating

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting Jitterbit to Salesforce/HubSpot/CRM | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| Workato-specific questions | `/sales-workato {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| Celigo-specific questions | `/sales-celigo {question}` |
| SnapLogic-specific questions | `/sales-snaplogic {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Integration architecture strategy | Answer directly — read platform guide |
| Connector setup or troubleshooting | Answer directly — read platform guide |
| API Manager / gateway / security profiles | Answer directly — read platform guide |
| Pricing optimization | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — Jitterbit platform reference

**Read `references/platform-guide.md`** for the full platform reference — Harmony architecture, products (Integration Studio, Design Studio, API Manager, App Builder), connectors, pricing, agent groups.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the Harmony Management API, also **read `references/jitterbit-api-reference.md`** for endpoints, authentication, and regional base URLs.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check the Connector Marketplace first. If no pre-built connector exists, use the HTTP or REST connector for any API, or build a custom connector with the Connector SDK (Java). Technology connectors (Database, File Share, HTTP, FTP/SFTP, LDAP) are always available.

**Deployment decision shortcut**: Cloud agents for fastest start and no infrastructure. Private agents for on-prem data that can't leave the network. Hybrid (cloud API gateway + private agents) for the most common enterprise pattern — gives you cloud management with behind-firewall execution. All agent traffic is outbound-only HTTPS, so no inbound ports needed.

**Cost optimization shortcut**: Jitterbit uses tier-based connection pricing (Standard 2-3 connections, Professional 5, Enterprise 8+). Each additional connection negotiation can be expensive — audit your active connections and consolidate where possible. Premium connectors (SAP, Workday) carry separate fees. Multi-year contracts typically save 10-25%.

**Studio choice shortcut**: Integration Studio (web) is where Jitterbit is investing — use it for new projects. Design Studio (desktop) is legacy but still fully supported — only stay on it if you have complex existing projects that haven't been migrated. There is no automatic migration path; plan for a rewrite.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details and feature availability which change frequently.*

- **Per-connection pricing is unpredictable.** Teams that start with 3-5 connections often find themselves negotiating expensive tier upgrades within 12 months. Map your connection count before signing, including "invisible" connections like local disk and HTTP. Premium connectors (SAP, Workday) are a separate line item beyond the base subscription.
- **Individual record errors pass silently.** A Jitterbit operation can report "Success" while individual Salesforce record updates fail. There's no built-in alert when a data update fails — you have to build error routing in Jitterbit or create audit reports in Salesforce to catch them. Always add error-trapping scripts after every bulk upsert.
- **Logging is limited.** Operation logs lack rich text formatting and alternative logging formats, making it hard to review and analyze processes after runtime. Enable Debug Logging only while troubleshooting — it generates a lot of data — and combine with Session Trace for deeper inspection.
- **No native source control.** Jitterbit has no code branching or Git integration built into the platform (as of 2026). If IT leadership requires source control, you have to export projects and manage versioning externally. This is the single most cited blocker for Jitterbit adoption in mature IT organizations.
- **CDC support is limited.** Change Data Capture connectors are the most-cited technical gap in user reviews. If you need real-time data replication for analytics, plan to supplement with a dedicated CDC tool (Debezium, Fivetran) or use polling + timestamps.
- **Authentication tokens expire quickly.** Harmony Management API tokens are documented to expire after 15 minutes (observed up to 5 hours in practice). For unattended API access, build refresh logic or use service accounts. TFA configured as "on each login" breaks unattended API access — disable TFA for service accounts or use bypass rules.
- **Integration Studio and Design Studio are not interchangeable.** Projects built in one cannot be opened in the other. If you're starting new work, use Integration Studio. If you inherit a Design Studio project, plan for a rewrite when you're ready to modernize — there is no automatic migration.
- **Design Studio debugging is harder than Integration Studio.** Design Studio has less visibility into runtime behavior. If you're troubleshooting a hard bug and your project is in Design Studio, sometimes the fastest path is porting the problematic operation to Integration Studio temporarily for debugging.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, API Management, Data Hub MDM (direct competitor)
- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors, recipe automation, MCP Gateway (direct competitor)
- `/sales-celigo` — Celigo platform help — mid-market iPaaS, 1000+ connectors, AI error management, NetSuite depth (direct competitor)
- `/sales-snaplogic` — SnapLogic platform help — enterprise iPaaS, 1000+ Snaps, AgentCreator AI agents, API Management 3.0 (direct competitor)
- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-tray` — Tray.ai platform help — enterprise iPaaS, 700+ connectors, Merlin Agent Builder, Tray Embedded (direct competitor)
- `/sales-informatica` — Informatica IDMC platform help — enterprise iPaaS + data management, CDI/CAI, MDM, Data Catalog (direct competitor, data-management-first)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common Jitterbit integration target
- `/sales-hubspot` — HubSpot platform help — common Jitterbit integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Salesforce record updates failing silently
**User says**: "My Jitterbit operation runs successfully but some Salesforce contact updates aren't actually landing. Our users are finding out when data is wrong — how do I get alerted?"
**Skill does**: Reads platform guide error-handling section. Explains that Jitterbit reports bulk operation success even when individual records fail — Salesforce returns per-record results in the response, but Jitterbit doesn't surface them by default. Walks through the fix: after the Salesforce upsert step, parse the response body, check each record's `success` flag, and route failures to an error-handling operation (email, Slack, or log to a monitoring file). Also suggests Salesforce-side audit reports as a fallback safety net.
**Result**: User has per-record error visibility with notification on failures.

### Example 2: Jitterbit vs Boomi vs Workato for a mid-market manufacturer
**User says**: "We're evaluating Jitterbit, Boomi, and Workato. We're a 200-person manufacturer with SAP, Salesforce, and NetSuite. Small integration team of 3. Which one?"
**Skill does**: Reads platform guide pricing and positioning sections. Compares: Jitterbit is strong for teams wanting quick time-to-value with visual design and responsive support, good for mid-market ERP-heavy stacks. Boomi is more mature for MDM/EDI and has cloud-native depth. Workato is automation-first and best for business-user citizen integrators. For a small team with SAP + NetSuite, flags the premium connector cost (SAP especially — all three charge extra). Recommends getting quotes including connector fees from all three and pressure-testing Jitterbit's responsiveness during the POC (their main differentiator is support).
**Result**: User has a concrete evaluation framework with pricing gotchas flagged.

### Example 3: Designing a hybrid agent deployment
**User says**: "We have on-prem SQL Server data that can't leave the network, but we want to expose it via a managed API to cloud partners. How do I set this up in Jitterbit?"
**Skill does**: Reads platform guide for agent architecture. Explains the hybrid pattern: install a Private Agent on-prem with network access to SQL Server; build an API in API Manager that routes to an operation on that private agent; the cloud API gateway (apps.na-east or apps.emea) handles external traffic, auth, and rate limiting; the private agent pulls work from the cloud via outbound HTTPS only (no inbound ports). Walks through agent group setup, API Manager security profile (OAuth 2.0 recommended), and IP allowlisting if needed.
**Result**: User has a working hybrid architecture plan with no inbound firewall changes required.

## Troubleshooting

### "Operation execution failed" with no useful details
**Symptom**: Operation shows failed status but the error message is generic — no stack trace, no field-level info.
**Cause**: Default logging level hides detailed errors. Operation Log only shows high-level status.
**Solution**: Enable Debug Logging at the operation or project level (Operation options → Debug Mode) while troubleshooting. Use Session Trace (Monitoring tab) to step through execution. For connector errors, check the connector's operation trace. Add try/catch-style scripts around risky steps to capture and log specific exception details. Remember to disable Debug Logging when done — it generates significant data volume.

### Private agent can't reach cloud
**Symptom**: Private agent shows offline in Management Console, or operations queue up without executing.
**Cause**: Outbound HTTPS to Jitterbit Harmony endpoints is blocked, or regional URL is misconfigured. All agent communication is outbound HTTPS over TLS 1.2+; no inbound ports required.
**Solution**: Verify the agent host can reach `apps.na-east.jitterbit.com` (NA) or `apps.emea-west.jitterbit.com` (EMEA) or `apps.apac-east.jitterbit.com` (APAC) on port 443. Check the allowlist documentation for the full set of hosts (JMS messaging, API gateway, log ingestion). Verify the agent config points to the correct region. Check proxy settings in `jitterbit-agent.conf` if behind a corporate proxy.

### Per-record failures in bulk Salesforce upsert
**Symptom**: Bulk upsert reports success, but downstream users find records didn't update.
**Cause**: Jitterbit reports operation-level status; Salesforce's bulk API returns per-record success/failure in the response body. Without parsing the response, per-record failures are invisible.
**Solution**: After the Salesforce upsert step, parse the response for per-record results. Use an If or Script step to check each record's `success` and `errors` fields. Route failed records to an error-handling operation (write to error table, send notification, or retry). For Design Studio, use the "Post-Operation Script" to inspect the response; for Integration Studio, add a Script component after the connector activity.
