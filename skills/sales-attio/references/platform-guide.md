# Attio Platform Guide

## How Attio works

Attio is an AI-native CRM built on a relationship database model. Instead of fixed objects (Contacts, Companies, Deals), Attio lets you create custom objects that mirror your actual business. Founded by Nicolas Sharp (CEO) and Alexander Christie (CTO) in London, used by 80,000+ startups.

**Key differentiator**: Custom objects with flexible attributes and relationships — like a programmable database that happens to be a CRM. Competes with HubSpot (marketing-first) and Salesforce (enterprise) by being simpler, faster, and more flexible for early-stage teams.

## Data model

| Concept | What it is | Example |
|---|---|---|
| Objects | Entity types (standard or custom) | People, Companies, Deals, "Investors", "Partners" |
| Attributes | Fields on objects | Name, email, revenue, custom "Funding Stage" |
| Records | Individual entries | A specific person or company |
| Lists | Filtered views of records | "Active Deals", "Enterprise Prospects" |
| Entries | Records within a list with list-specific data | A deal in the pipeline with stage, value |

**Standard objects**: People, Companies, Deals, Users, Workspaces
**Custom objects**: Create any object type — Investors, Products, Projects, whatever fits your business

## Attribute types

Text, numbers, currencies, dates, timestamps, checkboxes, selections, statuses, ratings, locations, domains, email addresses, phone numbers, personal names, interactions, actor references, record references.

## Pricing

| Plan | Price | Seats | Key features |
|---|---|---|---|
| Free | $0 | Up to 3 | Core CRM, basic views, limited automations |
| Plus | $29/seat/mo (annual) | Unlimited | Advanced reporting, more automations, API access |
| Pro | $69/seat/mo (annual) | Unlimited | AI features, advanced automations, priority support |
| Enterprise | Custom | Unlimited | SSO/SAML, advanced security, dedicated support |

*14-day free trial on all paid plans.*

## Automations

No-code workflow builder with triggers and actions:
- **Triggers**: Record created/updated, field changed, stage moved, email received, webhook
- **Actions**: Update records, send emails, create tasks, notify team, call webhooks, AI research
- Plan-gated: advanced automations require Plus or higher

## Email sequences

Built-in email sequences for outreach within the CRM:
- Multi-step sequences with delays
- Personalization with record attributes
- Open/click tracking
- Auto-pause on reply
- Works with synced email accounts (Gmail, Outlook)

## AI features

- **Ask Attio**: Natural language queries against your CRM data
- **AI Research Agent**: Automatically researches contacts and companies from public sources
- **Auto-enrichment**: Enriches contact/company records from email and domain data
- *AI features require Pro plan or higher*

## Integrations

- **Native**: Gmail, Outlook, Google Calendar, Slack
- **Zapier**: Triggers (record created/updated) and actions (create/update records)
- **Make**: Native Attio module
- **API**: REST API with 100+ endpoints (see API reference)
- **MCP Server**: mcp.attio.com/mcp — AI agents can read/write CRM data
- **App SDK**: Embed custom React apps within Attio

## API quick reference

| Detail | Value |
|---|---|
| Base URL | api.attio.com |
| Auth | OAuth 2.0 / Bearer token (API key) |
| Rate limits | 100 reads/s, 25 writes/s |
| Format | JSON over HTTPS |
| Webhooks | Record, list, attribute, comment, note, task, meeting events |
| SDKs | Node.js, TypeScript, Python, PHP, .NET, Java |
| OpenAPI spec | Available at api.attio.com/openapi |

For full API reference, see `references/attio-api-reference.md`.

## Comparison with other CRMs

| Feature | Attio | HubSpot | Salesforce | Folk |
|---|---|---|---|---|
| Custom objects | Core feature, all plans | Operations Hub Pro ($800/mo) | Available, complex setup | Limited |
| AI features | Built-in (Pro+) | AI add-on | Einstein (extra cost) | Basic |
| Free tier | 3 seats | Generous free CRM | No free tier | Limited free |
| Target | Startups <50 people | SMB to enterprise | Enterprise | Small teams |
| Native integrations | ~20 | 2,000+ | 3,000+ (AppExchange) | ~30 |
| API quality | Excellent, modern | Good | Complex but powerful | Basic |
| Learning curve | Medium | Low-Medium | High | Low |
| Pricing (10 seats) | $290-$690/mo | $0-$1,200/mo | $250-$1,500/mo | $270-$590/mo |
