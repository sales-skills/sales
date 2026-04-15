---
name: sales-celigo
description: "Celigo platform help — mid-market iPaaS, 1000+ connectors, AI-powered error management, endpoint+flow pricing, NetSuite depth, API Management, B2B/EDI, Embedded iPaaS, Celigo Ora AI agent. Use when integration errors are vague and you can't figure out what's failing, field mapping between apps is confusing or broken, evaluating Celigo vs Workato vs Boomi vs MuleSoft for your team, NetSuite integration keeps throwing invalid reference errors, flows stop processing data and you don't know why, or pricing tiers don't make sense and you need to optimize endpoints/flows. Do NOT use for simple Zapier/Make automations (use /sales-integration) or Workato/MuleSoft/Boomi-specific questions (use their platform skills)."
argument-hint: "[describe what you need help with in Celigo]"
license: MIT
version: 1.0.0
tags: [sales, integration, ipaas, api, platform]
github: "https://github.com/celigo"
---

# Celigo Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Flow building — connectors, triggers, imports/exports, data mapping
   - B) Error management — debugging errors, understanding error messages, AI resolution
   - C) API Management — build, publish, secure APIs via APIM console
   - D) B2B/EDI — trading partner data exchange, document formats
   - E) Embedded/OEM — embedding integrations in your SaaS product
   - F) Deployment — environments, migration, Private Cloud
   - G) Monitoring / troubleshooting — flow stopped, errors spiking, performance issues
   - H) Pricing / licensing — endpoint+flow model, tier comparison, cost optimization
   - I) NetSuite integration — setup, mapping, common errors
   - J) Something else — describe it

2. **What edition are you on?**
   - A) Free (2 endpoints, 1 flow)
   - B) Basic (~5 endpoints)
   - C) Premium (~25 endpoints, SSO)
   - D) Enterprise (unlimited)
   - E) Not sure / evaluating

3. **What's your primary ERP/system?**
   - A) Oracle NetSuite
   - B) Salesforce
   - C) SAP
   - D) Microsoft Dynamics 365
   - E) Shopify / ecommerce
   - F) Other — name it

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Connecting Celigo to CRM (Salesforce/HubSpot) | `/sales-integration {question}` |
| CRM comparison — Salesforce vs HubSpot vs others | `/sales-crm-selection {question}` |
| Salesforce-specific config (Flows, Apex, SOQL) | `/sales-salesforce {question}` |
| Simple no-code Zapier/Make automations | `/sales-integration {question}` |
| MuleSoft-specific questions | `/sales-mulesoft {question}` |
| Workato-specific questions | `/sales-workato {question}` |
| Boomi-specific questions | `/sales-boomi {question}` |
| CRM data quality / deduplication | `/sales-data-hygiene {question}` |
| Flow design and optimization | Answer directly — read platform guide |
| Error management and debugging | Answer directly — read platform guide |
| API management | Answer directly — read platform guide |
| Pricing and cost optimization | Answer directly — read platform guide |
| NetSuite integration | Answer directly — read platform guide |

When routing, provide the exact command.

## Step 3 — Celigo platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, connectors, error management, API management, NetSuite integration.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the Celigo REST API, also **read `references/celigo-api-reference.md`** for endpoints, authentication, and resource details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Connector selection shortcut**: Check Celigo's Integration Marketplace first for pre-built connectors and Integration Apps. If no connector exists, use Universal Connectors for REST/SOAP APIs. Integration Apps bundle multiple flows with pre-built mappings — always prefer these over building from scratch.

**Cost optimization shortcut**: Celigo charges by endpoints and flows, not per transaction. Count your connected apps (each = 1 endpoint) and distinct data flows. If approaching your tier limit, consolidate flows where possible. Unlike task-based pricing (Workato), volume spikes don't cause overages.

**Error debugging shortcut**: Go to Errors page → check request/response details. Enable debug logs for HTTP connectors. Use the AFE (Adaptive Flow Engine) input tool to replay error data. For NetSuite errors, check that you're using Internal IDs (not names) in field mappings.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Error messages are notoriously vague.** Default error messages often lack specificity — "Action failed" with no details is common. Enable debug logs for HTTP connectors to see full request/response. Copy retry data into AFE input to replay and diagnose. Add error notifications to catch issues before they cascade.
- **Field mapping has a steep learning curve.** Mapping between apps (especially NetSuite) requires understanding both systems' data models. Use Internal IDs instead of names for NetSuite references. Dynamic lookups and static mappings must align value sets exactly (e.g., Shopify state abbreviation "CA" vs NetSuite Internal ID). Test mappings with the AFE before running flows.
- **Pricing jumps between tiers are significant.** Going from Basic (~5 endpoints) to Premium (~25 endpoints) can double or triple your annual cost. Count endpoints carefully — each connected app = 1 endpoint, not each flow. Consolidate connections where possible.
- **Flows auto-cancel after 4 hours.** If a flow runs for 4+ hours without completing, it's automatically canceled. For large data loads, break into smaller batches or use scheduled incremental syncs instead of full syncs.
- **NetSuite is the strongest integration but also the trickiest.** Celigo was built for NetSuite, so the integration is deep — but NetSuite's SuiteTalk API has quirks. Custom field names must match exactly. Refresh credentials/tokens regularly. Multi-select fields need special mapping treatment.
- **Free tier is very limited.** 2 endpoints and 1 flow means you can connect exactly 2 apps with 1 data flow. Useful for proof-of-concept only. You'll hit limits immediately for any real use case.

## Related skills

- `/sales-workato` — Workato platform help — enterprise iPaaS, 1200+ connectors (direct competitor)
- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, Data Hub MDM (direct competitor)
- `/sales-mulesoft` — MuleSoft platform help — Anypoint Platform, API-led connectivity, 450+ connectors (direct competitor)
- `/sales-integration` — Connecting sales tools — webhooks, Zapier/Make, native integrations, CRM sync
- `/sales-salesforce` — Salesforce platform help — common Celigo integration target
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Vague error messages on NetSuite sync
**User says**: "My Celigo flow syncing Shopify orders to NetSuite keeps failing with 'Action failed' but I can't see what's wrong."
**Skill does**: Reads platform guide for error management section. Explains debugging approach: (1) Go to Errors page → expand the failed record → check request/response details, (2) enable debug logs on the NetSuite HTTP connector for full API traces, (3) copy retry data into AFE input to replay the failure with visible data, (4) check if the error is a NetSuite validation issue (common: using item names instead of Internal IDs, mismatched multi-select values). Recommends adding Monitor → Error Notification for Slack alerts.
**Result**: User has concrete debugging steps and a likely root cause.

### Example 2: Evaluating Celigo vs Workato vs Boomi
**User says**: "We're a mid-size ecommerce company with NetSuite, Shopify, and 10 other SaaS apps. Celigo, Workato, or Boomi?"
**Skill does**: Reads platform guide for comparison context. For NetSuite-centric ecommerce: Celigo is the strongest fit — purpose-built for NetSuite, pre-built Shopify-NetSuite Integration App, endpoint+flow pricing means no per-transaction overages. Workato has more connectors (1,200+) but task-based pricing spirals with ecommerce volume. Boomi is enterprise-focused with per-connection pricing that adds up fast with 12+ apps. Recommends Celigo Premium tier for 12 endpoints.
**Result**: User understands the trade-offs and has a recommendation for their stack.

### Example 3: Flow stopped processing data
**User says**: "My Celigo flow that syncs customer data from Salesforce to NetSuite stopped running — no errors, nothing in the log."
**Skill does**: Explains troubleshooting: (1) Check connection status for both Salesforce and NetSuite — expired tokens are the #1 cause of silent failures, (2) check if the flow was automatically canceled after 4 hours (large dataset), (3) verify the source app isn't rate-limiting the connection, (4) check Celigo's status page for platform issues, (5) if trigger cursor is stuck, re-enable the flow. Notes that Celigo auto-resumes after connectivity restoration in most cases, but waits up to 4 hours before canceling.
**Result**: User has a systematic troubleshooting checklist.

## Troubleshooting

### Flow stopped processing — no errors visible
**Symptom**: Flow was working fine but stops processing new events — no errors, no job logs.
**Cause**: Source or target app connection expired, or flow was auto-canceled after 4-hour timeout, or source app API is down.
**Solution**: Check connection status (both source and target). Re-authenticate if expired. Check if the flow hit the 4-hour timeout (large batch). Check Celigo status page. If connection is fine, disable and re-enable the flow to reset the trigger cursor.

### NetSuite "Invalid Reference" errors on import
**Symptom**: Records fail to import into NetSuite with "Invalid Reference" errors.
**Cause**: Mapping uses display names (e.g., "California") instead of NetSuite Internal IDs. NetSuite requires Internal IDs for reference fields, custom lists, and multi-select fields.
**Solution**: Switch field mappings to use Internal IDs. Use dynamic lookups to resolve names → IDs at runtime. For custom fields, verify the exact field name in NetSuite (Customization → Custom Fields). Test mappings in AFE before running the full flow.

### Error auto-resolution not working as expected
**Symptom**: AI error management isn't resolving errors that seem like they should be auto-resolved.
**Cause**: AI error management resolves duplicate and transient errors. Persistent errors (bad data, wrong mapping) require manual intervention because the root cause is in the configuration, not the execution.
**Solution**: Check the error category — transient errors (timeouts, rate limits) should auto-resolve on retry. Persistent errors (validation failures, missing fields) need you to fix the mapping or data. Use the error classification in the Errors page to filter. For persistent errors, use the retry data in AFE to identify the exact field causing the failure.
