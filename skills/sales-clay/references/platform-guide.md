# Clay Platform Guide

## Core concepts

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

## Data model

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

## Waterfall enrichment — how it works

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

## Claygent — AI research agents

- **What it does**: Browses the web, searches databases, extracts structured data from unstructured sources
- **Use cases**: Find company tech stack, extract pricing from websites, research competitor features, find decision-maker info from LinkedIn profiles, summarize 10-K filings
- **MCP server support**: Connect to Salesforce, Gong, Google Docs, Notion for data access
- **Best practices**: Write clear, specific instructions. Version your agents so you can roll back. Test on 5-10 rows before scaling.

## Sculptor — workflow builder

- **What it does**: Describe workflows in natural language → Clay generates the automation
- **Capabilities**: Conditional logic (if/then), data transformation, multi-step enrichment chains, formatting
- **Best practices**: Start simple, add complexity incrementally. Review the generated logic before running at scale.

## Signals

- **Job changes**: Track when prospects change roles, get promoted, or move companies
- **Funding events**: Trigger outreach when target companies raise rounds
- **Website visits**: Identify companies visiting your site (requires tracking setup)
- **Company news**: Monitor for acquisitions, product launches, expansions
- **Plan gate**: Signals require Launch plan or above

## Audiences & Ad Sync

- **Audiences**: Combine CRM data + enrichment + signals into dynamic segments
- **Ad Sync**: Push audiences to LinkedIn Ads, Meta Ads, Google Ads
- **Plan gate**: Ad Sync requires Growth plan or above (1 audience included; Enterprise gets 2)
- **Best practices**: Use Audiences for ABM campaigns — enrich target accounts, build segments, sync to ad platforms for air cover alongside outbound

## Email Sequencer

- **What it does**: Multi-step outbound email sequences with personalization
- **Features**: A/B testing, send scheduling, reply detection, auto-pause on reply
- **Available on**: Free plan and above
- **Best practices**: Use Clay's enrichment to personalize every email. Combine with Signals to trigger sequences on job changes or funding events.

## CRM Sync

- **Salesforce**: Bidirectional sync — import leads/contacts/accounts for enrichment, push enriched data back. Create/update records automatically.
- **HubSpot**: Import contacts/companies, enrich in Clay, push back. Native marketplace app available.
- **Dynamics 365**: Create, update, and lookup records directly from Clay workflows.
- **ActiveCampaign**: Manage contacts and automations from Clay.
- **Plan gate**: CRM Sync requires Growth plan or above.

## Webhooks & HTTP API

- **Inbound webhooks**: Each table has a unique webhook URL. POST JSON to it → creates new rows. Use for triggering enrichment from external events (form submissions, Zapier, custom apps).
- **HTTP API action**: Call any external API from within a Clay table. Configure method (GET/POST/PUT/DELETE), headers, body, and field mapping. Use for pushing data to tools that don't have native integrations.
- **Plan gate**: HTTP API requires Growth plan or above.
- **No traditional REST API**: Clay doesn't expose a public REST API for querying/managing tables programmatically. Integration is webhook-based.
- **Enterprise People & Company API**: Lightweight lookup via email, LinkedIn URL, or domain. Available only on Enterprise plans.

## Pricing & credits (as of March 2026 — verify current pricing)

| Plan | Price | Actions/mo | Data Credits/mo | Key features |
|------|-------|-----------|----------------|--------------|
| **Free** | $0 | 500 | 100 | Unlimited seats/tables, waterfall, Claygent, Sequencer, 200 rows/table |
| **Launch** | $167-185/mo | 15,000 | 2,500 | Phone enrichment, Signals, 50K rows/table, email integrations |
| **Growth** | $446-495/mo | 40,000 | 6,000 | CRM sync, HTTP API, webhooks, web intent, Ad Sync (1 audience), priority support |
| **Enterprise** | Custom | Custom | Custom | Data warehouse sync, unlimited Audience rows, SSO/RBAC, Ad Sync (2 audiences), dedicated strategist |

- Unused credits roll over up to 2x monthly allocation on paid plans
- Additional credits available at ~30% premium
- Actions reset monthly (no rollover)

## Integrations

**Native CRM**: Salesforce, HubSpot, Dynamics 365, ActiveCampaign, Pipedrive
**Email/Outbound**: Outreach, Salesloft, Apollo, Smartlead, Instantly, Lemlist, Reply.io
**Data providers**: 150+ via waterfall (Hunter, Clearbit, People Data Labs, ZoomInfo, Apollo, Lusha, Dropcontact, Cognism, RocketReach, etc.)
**Advertising**: LinkedIn Ads, Meta Ads, Google Ads (via Ad Sync)
**Automation**: Zapier, Make, HTTP API
**Data warehouses**: Snowflake, BigQuery (Enterprise)
**Other**: Slack, Google Sheets, Airtable, Notion
