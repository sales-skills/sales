---
name: sales-clay
description: "Clay platform help — Waterfall Enrichment (150+ data providers), Claygent (AI Research Agents), Sculptor (workflow builder), Signals (job changes, intent), Audiences, Ad Sync (LinkedIn/Meta/Google), Email Sequencer, CRM Sync (Salesforce/HubSpot/Dynamics), HTTP API actions, webhooks. Use when asking 'how do I set up Clay', 'Clay waterfall enrichment', 'Clay Claygent', 'Clay Sculptor workflows', 'Clay signals', 'Clay audiences', 'Clay ad sync', 'Clay sequencer', 'Clay CRM sync', 'Clay webhooks', 'Clay vs Apollo'. Do NOT use for enrichment strategy across tools (use /sales-enrich), cadence/sequence strategy across tools (use /sales-cadence), intent signal strategy across tools (use /sales-intent), B2B advertising strategy across tools (use /sales-b2b-advertising), or CRM data hygiene strategy across tools (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in Clay]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, automation, waterfall, ai-agents, platform]
github: "https://github.com/clay-run"
---
# Clay Platform Help

Help the user with Clay platform questions — from waterfall enrichment and Claygent AI agents through Sculptor workflows, Signals, Audiences, Ad Sync, Email Sequencer, CRM sync, and webhook/API integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Clay do you need help with?**
   - A) Waterfall Enrichment — finding emails, phones, firmographics via 150+ providers
   - B) Claygent — AI research agents for prospect research, web scraping, gated content
   - C) Sculptor — building workflows with natural language, conditional logic, automation
   - D) Signals — tracking job changes, promotions, funding, website visits
   - E) Audiences — dynamic buyer segments from CRM + enrichment + signals
   - F) Ad Sync — pushing audiences to LinkedIn, Meta, Google Ads
   - G) Email Sequencer — native outbound email sequences
   - H) CRM Sync — Salesforce, HubSpot, Dynamics 365 bidirectional sync
   - I) Webhooks & HTTP API — inbound/outbound data flow, external API calls
   - J) Data Credits & Billing — credit usage, plan optimization, provider costs
   - K) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / GTM Ops
   - D) Marketing / Growth
   - E) Founder / solo seller
   - F) GTM Engineer
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Enrichment strategy / provider comparison → `/sales-enrich`
- Cadence strategy / sequence design → `/sales-cadence`
- Intent signal strategy / prioritization → `/sales-intent`
- B2B advertising strategy → `/sales-b2b-advertising`
- CRM data hygiene strategy → `/sales-data-hygiene`
- Prospect list building strategy → `/sales-prospect-list`
- Lead scoring model design → `/sales-lead-score`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly using the platform reference below.

## Step 3 — Clay platform reference

### Core concepts

| Concept | What it is |
|---------|-----------|
| **Table** | Spreadsheet-like workspace where you build enrichment + automation workflows. Each row = a person or company. |
| **Waterfall Enrichment** | Query multiple data providers in sequence — if Provider A misses, Provider B tries, then C, etc. Maximizes coverage. |
| **Claygent** | AI research agent that browses the web, searches databases, navigates gated content. Reusable and versionable. |
| **Sculptor** | Natural language workflow builder — describe what you want in plain English, Clay builds the automation with conditional logic. |
| **Signals** | Event triggers — job changes, promotions, funding rounds, website visits, company news. |
| **Audiences** | Dynamic segments combining first-party data (CRM) + third-party data (enrichment) + signals. |
| **Ad Sync** | Push Audiences to LinkedIn Ads, Meta Ads, Google Ads for targeted campaigns. |
| **Email Sequencer** | Native outbound email with multi-step sequences, triggers, and personalization. |
| **Actions** | Operations that run on rows — enrichments, AI research, HTTP calls, CRM writes. Consume Actions credits. |
| **Data Credits** | Currency for enrichment lookups. Different providers cost different amounts. Unused credits roll over up to 2x monthly allocation on paid plans. |
| **Destinations** | Where enriched data goes — CRM, data warehouse, email tools, webhooks, websites. |

### Data model

| Object | Key fields | Notes |
|--------|-----------|-------|
| **Table** | name, rows, columns, webhook URL | Each table has a unique webhook URL for inbound data |
| **Row** | All column values | Each row = one person/company being enriched |
| **Column** | name, type, enrichment source | Can be manual, enriched, computed, or AI-generated |
| **Enrichment** | provider, input fields, output fields, credits | 150+ providers available via waterfall |
| **Claygent** | prompt, instructions, version | Reusable AI agent — can browse web, extract data |
| **Workflow (Sculptor)** | natural language description, steps, conditions | Converted to executable automation |
| **Signal** | type (job change, funding, visit), trigger conditions | Fires when conditions match |
| **Audience** | segment rules, source data, sync destinations | Dynamic — updates as data changes |
| **Sequence** | steps, delays, conditions, sender | Email Sequencer outbound campaign |

### Waterfall enrichment — how it works

1. **Add enrichment columns** to your table (e.g., "Work Email", "Phone", "Company Revenue")
2. **Configure the waterfall** — pick providers in priority order (e.g., Hunter → Dropcontact → Apollo → People Data Labs)
3. **Clay queries Provider 1** — if it returns data, done. If not, tries Provider 2, then 3, etc.
4. **Each provider hit costs Data Credits** — different providers cost different amounts
5. **Coverage rates compound** — if each provider covers 60%, a 3-provider waterfall might hit 85-95%

**Key providers available**: Hunter, Apollo, Clearbit/Breeze, People Data Labs, Dropcontact, ZoomInfo, Lusha, RocketReach, Snov.io, Cognism, LeadMagic, and 140+ more.

**Best practices**:
- Start with cheaper providers, escalate to expensive ones
- Use "only if empty" logic so you don't burn credits on already-enriched rows
- Monitor credit consumption per provider in table settings
- Test waterfall order on a small batch before running at scale

### Claygent — AI research agents

- **What it does**: Browses the web, searches databases, extracts structured data from unstructured sources
- **Use cases**: Find company tech stack, extract pricing from websites, research competitor features, find decision-maker info from LinkedIn profiles, summarize 10-K filings
- **MCP server support**: Connect to Salesforce, Gong, Google Docs, Notion for data access
- **Best practices**: Write clear, specific instructions. Version your agents so you can roll back. Test on 5-10 rows before scaling.

### Sculptor — workflow builder

- **What it does**: Describe workflows in natural language → Clay generates the automation
- **Capabilities**: Conditional logic (if/then), data transformation, multi-step enrichment chains, formatting
- **Best practices**: Start simple, add complexity incrementally. Review the generated logic before running at scale.

### Signals

- **Job changes**: Track when prospects change roles, get promoted, or move companies
- **Funding events**: Trigger outreach when target companies raise rounds
- **Website visits**: Identify companies visiting your site (requires tracking setup)
- **Company news**: Monitor for acquisitions, product launches, expansions
- **Plan gate**: Signals require Launch plan or above

### Audiences & Ad Sync

- **Audiences**: Combine CRM data + enrichment + signals into dynamic segments
- **Ad Sync**: Push audiences to LinkedIn Ads, Meta Ads, Google Ads
- **Plan gate**: Ad Sync requires Growth plan or above (1 audience included; Enterprise gets 2)
- **Best practices**: Use Audiences for ABM campaigns — enrich target accounts, build segments, sync to ad platforms for air cover alongside outbound

### Email Sequencer

- **What it does**: Multi-step outbound email sequences with personalization
- **Features**: A/B testing, send scheduling, reply detection, auto-pause on reply
- **Available on**: Free plan and above
- **Best practices**: Use Clay's enrichment to personalize every email. Combine with Signals to trigger sequences on job changes or funding events.

### CRM Sync

- **Salesforce**: Bidirectional sync — import leads/contacts/accounts for enrichment, push enriched data back. Create/update records automatically.
- **HubSpot**: Import contacts/companies, enrich in Clay, push back. Native marketplace app available.
- **Dynamics 365**: Create, update, and lookup records directly from Clay workflows.
- **ActiveCampaign**: Manage contacts and automations from Clay.
- **Plan gate**: CRM Sync requires Growth plan or above.

### Webhooks & HTTP API

- **Inbound webhooks**: Each table has a unique webhook URL. POST JSON to it → creates new rows. Use for triggering enrichment from external events (form submissions, Zapier, custom apps).
- **HTTP API action**: Call any external API from within a Clay table. Configure method (GET/POST/PUT/DELETE), headers, body, and field mapping. Use for pushing data to tools that don't have native integrations.
- **Plan gate**: HTTP API requires Growth plan or above.
- **No traditional REST API**: Clay doesn't expose a public REST API for querying/managing tables programmatically. Integration is webhook-based.
- **Enterprise People & Company API**: Lightweight lookup via email, LinkedIn URL, or domain. Available only on Enterprise plans.

### Pricing & credits (as of March 2026 — verify current pricing)

| Plan | Price | Actions/mo | Data Credits/mo | Key features |
|------|-------|-----------|----------------|--------------|
| **Free** | $0 | 500 | 100 | Unlimited seats/tables, waterfall, Claygent, Sequencer, 200 rows/table |
| **Launch** | $167-185/mo | 15,000 | 2,500 | Phone enrichment, Signals, 50K rows/table, email integrations |
| **Growth** | $446-495/mo | 40,000 | 6,000 | CRM sync, HTTP API, webhooks, web intent, Ad Sync (1 audience), priority support |
| **Enterprise** | Custom | Custom | Custom | Data warehouse sync, unlimited Audience rows, SSO/RBAC, Ad Sync (2 audiences), dedicated strategist |

- Unused credits roll over up to 2x monthly allocation on paid plans
- Additional credits available at ~30% premium
- Actions reset monthly (no rollover)

### Integrations

**Native CRM**: Salesforce, HubSpot, Dynamics 365, ActiveCampaign, Pipedrive
**Email/Outbound**: Outreach, Salesloft, Apollo, Smartlead, Instantly, Lemlist, Reply.io
**Data providers**: 150+ via waterfall (Hunter, Clearbit, People Data Labs, ZoomInfo, Apollo, Lusha, Dropcontact, Cognism, RocketReach, etc.)
**Advertising**: LinkedIn Ads, Meta Ads, Google Ads (via Ad Sync)
**Automation**: Zapier, Make, HTTP API
**Data warehouses**: Snowflake, BigQuery (Enterprise)
**Other**: Slack, Google Sheets, Airtable, Notion

## Step 4 — Actionable guidance

When answering, always:

1. **Specify the plan requirement** — many features are plan-gated. Don't recommend CRM Sync to a Free user.
2. **Include credit impact** — waterfall enrichment burns credits fast. Help users optimize provider order and "only if empty" logic.
3. **Recommend testing at small scale** — always test on 5-50 rows before running enrichment or Claygent on thousands.
4. **Link to Clay University** — point users to university.clay.com for detailed guides on specific features.
5. **Consider the full workflow** — Clay is most powerful when enrichment → signals → sequencing → CRM sync work together. Help users build end-to-end workflows, not isolated steps.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Credit burn from waterfall enrichment is the #1 surprise cost.** Each provider in a waterfall consumes credits independently. A 5-provider waterfall on 10,000 rows can burn 50,000 credits if you're not using "only if empty" logic. Always test on small batches and monitor credit usage in table settings.

2. **No public REST API — webhook-only integration model.** Clay doesn't expose traditional API endpoints for managing tables or data programmatically. All external integration is via inbound webhooks (POST to table URL) and outbound HTTP API actions. This surprises developers expecting a standard CRUD API.

3. **CRM Sync requires Growth plan ($446+/mo).** Many users sign up for Launch expecting to sync with Salesforce/HubSpot, then discover CRM sync is plan-gated. Same for HTTP API and webhooks — all require Growth.

4. **Claygent results vary with prompt quality.** AI research agents are powerful but sensitive to instruction quality. Vague prompts produce inconsistent results. Always write specific, structured instructions and test on 5-10 rows before scaling.

5. **Data credit costs vary by provider — not all enrichments cost the same.** A Hunter email lookup might cost 1 credit while a ZoomInfo enrichment costs 10+. The waterfall order matters for cost optimization, not just coverage.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Enrichment strategy across all tools (for choosing providers, comparing approaches)
- `/sales-cadence` — Multi-channel outbound sequence design (for cadence strategy beyond Clay's sequencer)
- `/sales-intent` — Buying signals and account prioritization (for signal strategy beyond Clay's Signals)
- `/sales-prospect-list` — Building targeted prospect lists (for list strategy)
- `/sales-lead-score` — Lead scoring models (for scoring strategy using Clay's enrichment data)
- `/sales-b2b-advertising` — B2B advertising strategy (for ad strategy beyond Clay's Ad Sync)
- `/sales-data-hygiene` — CRM data hygiene (for data quality strategy using Clay's CRM sync)
- `/sales-integration` — Connecting tools with webhooks, Zapier, APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up waterfall enrichment for work emails
**User says**: "I have a list of 5,000 leads with names and companies but no emails. How do I find their work emails in Clay?"
**Skill does**: Recommends waterfall enrichment with provider order (Hunter → Dropcontact → Apollo → People Data Labs), "only if empty" logic between steps, small batch test first (50 rows), and credit budget estimate.
**Result**: Step-by-step waterfall setup with provider prioritization and cost optimization.

### Example 2: Building an intent-triggered outbound workflow
**User says**: "I want to automatically enrich and email prospects when they change jobs at target accounts."
**Skill does**: Walks through Signals setup (job change trigger), enrichment waterfall for new role details, Claygent for company research, Email Sequencer for personalized outreach, and CRM sync to log activity. Notes Launch plan minimum for Signals.
**Result**: End-to-end automated workflow from signal detection through outbound.

### Example 3: Clay vs Apollo for enrichment
**User says**: "Should I use Clay or Apollo for contact enrichment? We already have Apollo."
**Skill does**: Explains Clay's waterfall approach (150+ providers, higher coverage) vs Apollo's single-database model (275M+ contacts, simpler). Notes Clay as an enrichment orchestrator that can include Apollo as one provider. Recommends Clay for teams needing maximum coverage; Apollo alone for teams prioritizing simplicity and built-in outbound.
**Result**: Clear comparison with recommendation based on team needs.

## Troubleshooting

### Waterfall enrichment returning low match rates
**Symptom**: Running waterfall enrichment but only getting 30-40% email coverage.
**Cause**: Provider order may not be optimized, or input data quality is poor (misspelled company names, outdated titles).
**Solution**: Clean input data first — standardize company names and verify LinkedIn URLs. Reorder providers with highest-coverage providers first. Add more providers to the waterfall (5-7 is typical for 80%+ coverage). Check that "only if empty" logic is working correctly between providers. Test with a small batch to identify which providers perform best for your ICP.

### Credits running out faster than expected
**Symptom**: Data Credits depleted before the monthly cycle ends.
**Cause**: Waterfall enrichment without "only if empty" logic queries every provider for every row, even if the first one succeeds. Multi-column enrichment compounds costs (email + phone + company = 3x credits per row).
**Solution**: Add "only if empty" conditions between waterfall steps. Prioritize cheaper providers first. Run enrichment on high-priority segments rather than entire database. Monitor per-provider credit consumption in table settings. Consider upgrading plan for more credits if the ROI justifies it.

### CRM sync not working
**Symptom**: Enriched data isn't syncing back to Salesforce/HubSpot.
**Cause**: CRM sync requires Growth plan ($446+/mo). Also, field mapping must be configured correctly — Clay column names must map to CRM field API names, not display labels.
**Solution**: Verify you're on Growth plan or above. Check field mapping in the CRM integration settings — use API field names (e.g., `Email` not "Email Address"). Test sync with a single row before bulk operations. Check CRM-side permissions — the connected user needs create/update access on the target object.
