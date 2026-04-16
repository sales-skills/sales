---
name: sales-attio
description: "Attio platform help — AI-native CRM with custom objects, relationship database, deal pipelines, email sequences, automations, and built-in enrichment for 80,000+ startups. Covers custom data model design (objects, attributes, relationships), pipeline configuration, workflow automations, email sequences, AI agents (Ask Attio), reporting, API integration (REST, OAuth 2.0, 100+ endpoints, webhooks, MCP server), and pricing tiers (Free/Plus/Pro/Enterprise). Use when Attio data model doesn't fit your workflow, deal pipeline stages need restructuring, automations aren't firing correctly, API or webhook integration isn't working, or not sure if Attio is the right CRM for your team. Do NOT use for general CRM data hygiene strategy (use /sales-data-hygiene), outbound sequences across platforms (use /sales-cadence), contact enrichment strategy (use /sales-enrich), or tool integration patterns (use /sales-integration)."
argument-hint: "[describe what you need help with in Attio]"
license: MIT
version: 1.0.0
tags: [sales, crm, platform]
github: "https://github.com/attio"
---
# Attio Platform Help

Helps the user with Attio CRM questions — from custom data model design and deal pipeline configuration through automations, email sequences, AI features, and API integration.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Data model — custom objects, attributes, relationships
   - B) Deal pipelines — stages, views, automation triggers
   - C) Email sequences — setup, templates, tracking
   - D) Automations — workflow builder, triggers, actions
   - E) AI features — Ask Attio, research agents, auto-enrichment
   - F) API / integrations — REST API, webhooks, Zapier, Make, MCP
   - G) Reporting — charts, dashboards, funnel analysis
   - H) Pricing / plan selection — Free vs Plus vs Pro vs Enterprise
   - I) Something else — describe it

2. **What's your team size?**
   - A) Solo / 1-3 people (Free tier fits)
   - B) Small team 4-15 (Plus territory)
   - C) Growing team 15-50 (Pro territory)
   - D) 50+ (Enterprise territory)

3. **What CRM are you coming from?**
   - A) No CRM — first time
   - B) Spreadsheets / Notion
   - C) HubSpot
   - D) Salesforce
   - E) Folk / Clay / other modern CRM
   - F) Other — name it

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- CRM data quality strategy across platforms → `/sales-data-hygiene`
- Outbound sequence design → `/sales-cadence`
- Contact enrichment strategy → `/sales-enrich`
- Tool integration patterns → `/sales-integration`
- Lead scoring design → `/sales-lead-score`
- Deal health inspection → `/sales-deal-inspect`
- Revenue forecasting → `/sales-forecast`
- Lead routing rules → `/sales-lead-routing`

Otherwise, answer directly from platform knowledge below.

## Step 3 — Attio platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### Setting up Attio for the first time

| Step | What to do | Why it matters |
|---|---|---|
| 1. Map your data model | List all entity types and relationships before creating objects | Prevents restructuring later — get the model right first |
| 2. Start with standard objects | Use People, Companies, Deals before creating custom objects | Standard objects have built-in enrichment and integrations |
| 3. Connect email | Sync Gmail/Outlook for automatic contact creation | Populates CRM passively from email activity |
| 4. Set up pipelines | Create deal stages matching your actual sales process | Kanban views only work if stages match reality |
| 5. Import existing data | CSV import or API sync from previous CRM | Clean data during import — don't migrate junk |
| 6. Build automations gradually | Start with 2-3 simple automations, add complexity later | Complex automations break silently if you overengineer early |

### When to upgrade from Free

| Signal | Recommended plan |
|---|---|
| 4th team member needs access | Plus ($29/seat/mo) |
| Need advanced reporting or more automations | Plus |
| Want AI research agents and Ask Attio | Pro ($69/seat/mo) |
| Need SSO/SAML or SOC 2 compliance | Enterprise |
| Outgrew Attio entirely (50+ seats, complex RevOps) | Consider HubSpot or Salesforce |

### Migrating from HubSpot

1. Export contacts, companies, deals from HubSpot as CSV
2. Map HubSpot properties → Attio attributes (create custom attributes for non-standard fields)
3. Import in order: Companies → People → Deals (to preserve relationships)
4. Recreate deal pipeline stages to match your HubSpot pipeline
5. Set up Zapier/Make automations to replace HubSpot workflows
6. Re-connect email integrations (Gmail/Outlook)
7. Plan 2 weeks of parallel operation before cutting over

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Workflow setup is tricky at first.** Users consistently report that building automations has a learning curve despite the no-code builder. Start simple — a complex workflow that doesn't fire is worse than no automation.
- **Integrations are limited compared to HubSpot/Salesforce.** ~20 native integrations vs 2,000+ on HubSpot. If your tech stack depends on niche tools, check Attio's integration page before committing. Zapier/Make fill some gaps but add cost.
- **Zapier integration can be unreliable.** Multiple users report Zapier connections breaking after months of working fine. Monitor Zaps regularly and have fallback plans.
- **AI features require Pro plan.** Ask Attio, AI research agents, and advanced auto-enrichment are gated behind Pro ($69/seat/mo). On Free/Plus, you get basic enrichment only.
- **Data model flexibility is a double-edged sword.** Teams spend significant time configuring and maintaining custom objects. Resist the urge to model everything — start minimal and add complexity as needed.
- **No built-in formula fields.** Can't create calculated fields natively. Use automations or external tools for computed values.
- **Advanced reporting is limited.** Bar, line, pie, and funnel charts cover basics, but don't expect Salesforce-level reporting. For advanced analytics, export data to a BI tool.
- **Customer support can be inconsistent.** Multiple review sites note varying support quality. Enterprise plan gets priority support.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-data-hygiene` — CRM data quality, deduplication, and enrichment strategy
- `/sales-lead-routing` — Lead routing rules and assignment
- `/sales-lead-score` — Lead scoring model design
- `/sales-deal-inspect` — Deal health inspection and pipeline analysis
- `/sales-forecast` — Revenue forecasting
- `/sales-hubspot` — HubSpot platform help — Smart CRM, Marketing/Sales/Service Hubs, workflows, sequences, API
- `/sales-crm-selection` — CRM comparison and selection — choosing between Attio, HubSpot, Salesforce, Folk, Pipedrive, and others
- `/sales-enrich` — Contact and company enrichment
- `/sales-cadence` — Multi-channel outbound sequences
- `/sales-integration` — Connect sales tools with webhooks, APIs, and iPaaS
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Set up Attio for a seed-stage startup
**User says**: "I just raised a seed round and need a CRM. We're 4 people and coming from a Google Sheet."
**Skill does**:
1. Recommends Plus plan ($29/seat/mo for 4 seats = $116/mo)
2. Maps their spreadsheet columns to Attio attributes
3. Suggests starting with People + Companies + Deals (standard objects)
4. Walks through email sync setup for automatic contact creation
5. Creates a simple deal pipeline matching their sales stages
**Result**: CRM configured with data imported from spreadsheet

### Example 2: Build custom objects for a VC firm
**User says**: "I'm a VC and need to track portfolio companies, fund commitments, and LP relationships in Attio"
**Skill does**:
1. Designs custom objects: Portfolio Companies, Funds, LPs, Commitments
2. Maps relationships: LP → Commitment → Fund → Portfolio Company
3. Sets up list views for each object with relevant filters
4. Configures automations for deal flow tracking
5. Notes that AI Research Agent (Pro plan) can auto-enrich portfolio companies
**Result**: VC-specific CRM structure with relationship tracking

### Example 3: Evaluate Attio vs HubSpot
**User says**: "We're at 20 people and trying to decide between Attio and HubSpot. We need email sequences and deal tracking."
**Skill does**:
1. Compares pricing: Attio Pro (20 × $69 = $1,380/mo) vs HubSpot Sales Hub Pro (20 × $100 = $2,000/mo)
2. Notes Attio's advantage in custom objects vs HubSpot's gating behind Operations Hub Pro ($800/mo)
3. Flags HubSpot's advantage in integrations (2,000+ vs ~20)
4. Recommends Attio if flexibility and cost matter, HubSpot if marketing integration matters
5. Suggests a 14-day Attio trial to test with real data
**Result**: Data-driven CRM decision with trial plan

## Troubleshooting

### Automations not firing
**Symptom**: Created a workflow automation but it doesn't trigger on expected events
**Cause**: Common causes include: (1) trigger conditions are too narrow and don't match real data, (2) the automation is in draft/disabled state, (3) the triggering field update is done via API without the right webhook scope, (4) rate limits are throttling execution.
**Solution**: Check the automation's run history for errors. Simplify trigger conditions to one field first, verify it fires, then add complexity. Ensure the automation is published and active. If triggered by API, verify the access token has the required scopes.

### Enrichment not populating data
**Symptom**: Added a contact but enrichment fields (company, title, LinkedIn) remain empty
**Cause**: Attio enrichment requires a valid email address or domain to match against. If the email is personal (Gmail, Yahoo) or the domain isn't in Attio's data sources, enrichment may not find a match. AI-powered enrichment requires Pro plan.
**Solution**: Ensure the contact has a work email address (not personal). On Free/Plus, enrichment is basic — upgrade to Pro for AI Research Agent that pulls from public sources. For bulk enrichment needs, consider `/sales-enrich` for a multi-tool enrichment strategy.

### Data import from another CRM is messy
**Symptom**: Imported contacts from HubSpot/Salesforce but data is duplicated, missing relationships, or has wrong field mappings
**Cause**: CRM data models don't map 1:1. HubSpot "properties" ≠ Attio "attributes". Relationship structures differ. CSV exports lose relational context.
**Solution**: Import in order: Companies first, then People (linked to companies), then Deals. Map fields before import — create custom attributes in Attio for non-standard fields. After import, use Attio's merge feature to deduplicate. For large migrations (1000+ records), use the API instead of CSV for better control. See `/sales-data-hygiene` for deduplication strategy.
