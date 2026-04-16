# Jitterbit Platform Reference

## Platform overview

Jitterbit is an AI-infused low-code iPaaS (Integration Platform as a Service) that unifies integration, API management, app development, and EDI processing under the Harmony platform. Founded in 2003, headquartered in Alameda, CA. Targets mid-market to enterprise IT teams with a focus on ease of use, responsive customer support, and rapid time-to-value. Serves thousands of customers across industries, with strong adoption in manufacturing, retail, distribution, and services.

**Key differentiator vs Boomi**: Jitterbit positions on responsive customer support and a simpler learning curve. Pricing is typically lower for comparable tiers. Boomi is more mature for MDM (Data Hub) and EDI/B2B, and is cloud-native throughout. Both use per-connection pricing with similar gotchas.

**Key differentiator vs Workato**: Workato is automation-first with a recipe model aimed at citizen integrators. Jitterbit is more traditional iPaaS — visual operation design aimed at integration developers. Jitterbit is stronger for ERP-heavy stacks (SAP, NetSuite, Oracle); Workato is stronger for SaaS-to-SaaS automation and business-user workflows.

**Key differentiator vs MuleSoft**: Jitterbit costs significantly less and has a gentler learning curve. MuleSoft excels for API-led architecture, complex enterprise patterns, and organizations deeply invested in Salesforce. Jitterbit is the pragmatic choice for mid-market teams that need integration to ship quickly.

**Key differentiator vs Celigo**: Both target mid-market. Celigo has deeper NetSuite specialization (RESTlet proxying, pre-built NetSuite Integration Apps). Jitterbit is more general-purpose and stronger when Salesforce is also a major endpoint.

## Harmony platform architecture

Harmony is the unified Jitterbit platform. All products run on Harmony and share common infrastructure: identity, project repository, agent groups, logging, monitoring.

### Products under Harmony

- **Integration Studio** (web-based, recommended for new work): Modern browser-based designer for building integration projects. Workflow design, design canvas, component palette, script editor. Access at `https://login.jitterbit.com`.
- **Design Studio** (desktop application, legacy): Windows/Mac desktop IDE. Still fully supported, but Jitterbit is investing primarily in Integration Studio. No automatic migration between the two — projects are not interchangeable.
- **API Manager**: Full API lifecycle — design, publish, govern, monitor. Custom APIs, OData APIs, Proxy APIs. Security Profiles, Trusted IP Groups, API Groups, Developer Portal.
- **App Builder**: No-code application development — forms, tables, lists, business logic. Data, business, UI, and security layers. AI assistant for building apps.
- **EDI Management**: Trading partner management, X12, EDIFACT, HL7. AS2/SFTP document exchange.
- **Agent Management (AI)**: Agent governance, Platform Agents, AI connectivity, MCP support (2025-2026).
- **Connector Builder**: Visual connector design for common patterns.
- **Connector SDK**: Java-based SDK for deep custom connector development.
- **Marketplace**: 400+ templates, recipes, pre-built projects.

### Agent groups (runtime)

Harmony supports three deployment topologies:

1. **Cloud agents** (Jitterbit-managed): Fully hosted by Jitterbit. Best for cloud-to-cloud integrations. No infrastructure to manage. Fastest to start.
2. **Private agents** (self-hosted): Install on your own server (Windows, Linux). Required when integrations touch on-prem data that can't leave the network. You manage the host; Jitterbit manages the agent software.
3. **Hybrid** (cloud gateway + private agents): Cloud API gateway handles external traffic, auth, and rate limiting. Private agents execute the work behind your firewall. Most common enterprise pattern. All agent communication is outbound-only HTTPS (TLS 1.2+) — no inbound ports required.

Agents use JMS listeners to pull work from the cloud. All traffic is outbound HTTPS, which means private agents can run behind restrictive firewalls without inbound rules.

### Regional hosting

Harmony is deployed across three AWS regions with primary and secondary sub-regions:
- **NA**: NA East (primary) and NA West (secondary). Portal: `apps.na-east.jitterbit.com`.
- **EMEA**: EMEA West (primary) and EMEA East (secondary). Portal: `apps.emea-west.jitterbit.com`.
- **APAC**: APAC East (primary) and APAC West (secondary). Portal: `apps.apac-east.jitterbit.com`.

Data residency: client application and project metadata stays within the origin region unless contractually agreed otherwise. Login via `https://login.jitterbit.com` auto-redirects to the geolocation-matched region.

## Key concepts

- **Project**: Top-level container for a related set of integrations. Has its own components, connections, schedules.
- **Workflow**: A named grouping of operations within a project (Integration Studio).
- **Operation**: The executable unit — a sequence of activities (read source, transform, write target). Equivalent to Boomi's Process or Workato's Recipe.
- **Activity**: A single action inside an operation — a connector call, transformation, script.
- **Connection**: A configured authentication/endpoint pairing for a connector.
- **Connector**: A reusable integration to an application or technology.
- **Schema**: XSD or JSON Schema definition for structured data shapes.
- **Transformation**: Visual mapping from source schema to target schema.
- **Script**: Jitterbit Script Language (JBSL) or JavaScript/Groovy for complex logic.
- **Environment**: Logical grouping (Development, Test, Production) attached to agent groups.
- **Global Variable / Project Variable**: Configuration values for environment-specific overrides.

## Pricing and limits

> *Pricing is not publicly listed — all below is approximate from third-party sources (Vendr, Integrate.io, G2). Contact Jitterbit sales for exact quotes.*

### Tier structure

| Tier | Approx. monthly | Connections | Key features |
|---|---|---|---|
| Standard | Custom (quote) | 2-3 | Cloud agents, standard connectors |
| Professional | Custom (quote) | 5 | Multi-environment, more connectors |
| Enterprise | ~$5,000+/mo | 8+ | Private agents, API Manager add-on, EDI add-on |

### Bundle options (2025-2026)

- **iPaaS AI Bundle**: Integration-focused.
- **AI Harmony Bundle**: Unified Harmony access.
- **App Builder AI Bundle**: App Builder-focused.

### Typical ACV

Based on Vendr data, buyers with 5-15 active integrations and standard transaction volume land at **$30,000-$80,000/year** annual contracts. Premium connectors and professional services commonly add 20-50% to first-year cost.

### Contract terms

- **Annual contracts required** — no monthly billing option.
- **Multi-year discounts** typically 10-25% for 2-3 year commitments.
- **Premium connectors** (SAP, Workday, Oracle ERP) carry separate licensing fees — $5K-50K+/year beyond base subscription. Always verify before signing.
- **Add-ons** that often become line items: API Manager, EDI Management, additional private agents, professional services, premium support.

## Connectors and integrations

### Pre-built connectors (400+)

- **CRM**: Salesforce, Microsoft Dynamics 365, HubSpot, Zoho, SugarCRM
- **ERP**: NetSuite, SAP (ECC, S/4HANA), Oracle E-Business Suite, Microsoft Dynamics, Sage, Epicor, Infor, Acumatica
- **E-commerce**: Shopify, BigCommerce, Magento/Adobe Commerce, Amazon, Walmart
- **HRIS/HCM**: Workday, ADP, UKG, BambooHR
- **Financial**: NetSuite, QuickBooks, Xero, Sage Intacct
- **Marketing**: HubSpot, Marketo, Eloqua, Mailchimp, Pardot, Salesforce Marketing Cloud
- **Service**: ServiceNow, Jira, Zendesk, Freshdesk
- **Cloud**: AWS (S3, SQS, Lambda), Azure, Google Cloud, Snowflake, BigQuery, Redshift
- **Database**: Any JDBC-compatible (MySQL, PostgreSQL, SQL Server, Oracle DB), MongoDB
- **Shipping/Logistics**: FedEx, UPS, USPS
- **Collaboration**: Slack, Microsoft Teams, Microsoft 365, Google Workspace

### Technology connectors (universal)

Always available:
- HTTP (REST/HTTP calls)
- SOAP
- Database (JDBC)
- File Share / Disk / FTP / SFTP
- LDAP
- Temporary Storage

### Custom connectors

- **Connector Builder**: Visual, for common REST patterns.
- **Connector SDK**: Java-based, for deep custom development. Used when Connector Builder isn't flexible enough.

## Data model

### Main objects (for Harmony Management API)

- **Organization**: Top-level tenant
- **Environment**: Logical grouping attached to agent groups
- **Agent Group**: Collection of agents sharing a runtime
- **Agent**: Single runtime instance (cloud or private)
- **Project**: Integration project container
- **Operation**: Executable integration flow
- **API**: Published API in API Manager
- **Security Profile**: Auth configuration for published APIs
- **Operation Log**: Execution history record
- **Schedule**: Cron-like operation schedule

### Common relationships

Organization → Environments → Agent Groups → Agents → Operations (via Project/Deployment) → Operation Logs

## Common workflows

### Building your first integration (Integration Studio)

1. **Sign in** at `https://login.jitterbit.com` — auto-redirects to your region portal.
2. **Create a Project** — Projects page → New Project.
3. **Configure environments** — typically Development, QA, Production.
4. **Add connections** — under the project, add source and target connections (e.g., Salesforce + NetSuite).
5. **Create an operation** — drag activities onto the design canvas.
6. **Build transformations** — map source schema fields to target schema fields visually.
7. **Add error handling** — on-failure operations, try/catch-style scripts, logging.
8. **Deploy to environment** — Deploy → target environment.
9. **Schedule or trigger** — cron schedule, API trigger, file watcher, or event-driven.

### Common integration patterns

- **Scheduled sync**: Poll source on cron → transform → upsert to destination.
- **API-triggered**: External system POSTs to API Manager endpoint → operation executes → response returned.
- **Event-driven**: File drop or webhook trigger → operation chain executes.
- **Bulk batch**: Scheduled full-table refresh with batch processing.
- **Hybrid API exposure**: Private agent operation exposed as cloud-managed API via API Manager.

## Deep dives

### Error handling best practices

- **On-success / on-failure operations**: Every operation can chain to another on success or failure — use this for error routing.
- **Try/catch-style scripts**: Wrap risky connector calls in scripts that capture exceptions and route to error handlers.
- **Per-record failures in bulk operations**: Salesforce bulk upserts return per-record status. Parse the response body and route failures individually (Jitterbit doesn't do this automatically).
- **Error notification operations**: Dedicated operation that takes failure context (operation name, error message, payload) and sends to email, Slack, or a monitoring system.
- **Dead letter pattern**: Route failed documents to a disk location or staging table for manual review and replay.
- **Alerting**: Configure Harmony Alerts on operation failure count thresholds. For more custom logic, build notification operations that run from the on-failure hook.

### Performance optimization

- **Chunking**: For large datasets, use chunking in the transformation (process N records at a time rather than the full set).
- **Parallel execution**: Fan out work across multiple operations or agent nodes.
- **Agent sizing**: Private agents scale vertically — more CPU/RAM for heavier workloads. Multiple agents in an agent group load-balance automatically.
- **Connector tuning**: Many connectors have batch size settings — tune based on target API limits (Salesforce bulk API: 10,000 records, NetSuite: 1,000 records).
- **Caching**: Use Project Variables or cross-reference lookups for frequently accessed data instead of repeated API calls.
- **Schedule off-peak**: Large sync jobs on overnight schedules to avoid interfering with transactional workloads.

### Security

- **Authentication to Harmony**: Email + password, or SSO (Okta, Azure AD, Google, Salesforce).
- **Multi-factor authentication**: Configurable per user. Note that TFA "on each login" breaks unattended API access — disable for service accounts.
- **API Manager auth types**: Anonymous, Basic, OAuth 2.0, API Key.
- **Trusted IP Groups**: IP allowlisting for API consumers.
- **Role-based access**: Admin, Read, User Manager, EDI-specific roles.
- **Environment permissions**: View Logs, Read, Execute, Write.
- **Data encryption**: TLS 1.2+ for all Harmony communication. FIPS 140-2 at-rest encryption with per-customer keys.
- **Account lockout**: After 5 failed login attempts.
- **Audit logging**: User actions and operation executions logged with timestamps.

### API Manager specifics

- **API types**: Custom API (build from scratch), OData (expose data via OData v4), Proxy API (front another API with Jitterbit policies).
- **Security Profiles**: Auth methods (Anonymous, Basic, OAuth 2.0, API Key), scope control, token issuers.
- **API Groups**: Apply consistent security/rate limit policies to a group of APIs.
- **Developer Portal**: Self-service for API consumers — documentation (auto-generated from OpenAPI), sandbox testing, key management.
- **Analytics**: Request volume, latency, error rates per API and per consumer.
- **Rate limiting**: Configurable per API Group — requests per time window, with 429 responses on exceedance.

### Design Studio vs Integration Studio

**Use Integration Studio when**:
- Starting new projects.
- Collaborating across team members (web-based, better for multi-user).
- You want Jitterbit's ongoing investment (new features ship here first).

**Stay on Design Studio when**:
- You have a large existing Design Studio codebase and no migration budget.
- You're using Design Studio-specific features not yet in Integration Studio.

**Migration between them**:
- No automatic conversion tool. Projects must be rebuilt.
- Plan migration as a project — treat it like a small refactor, not a mechanical port.
- Use migration as an opportunity to clean up technical debt.
