# TIBCO Cloud Integration Platform Reference

## Platform overview

TIBCO Cloud Integration (TCI) is TIBCO's enterprise iPaaS — a multi-tenant cloud platform that combines four integration capability pillars under one control plane. The platform targets users of all skill levels, from business users building point-and-click replications to developers building event-driven microservices and enterprise integration architects modeling hybrid flows.

TIBCO's positioning is "one platform for integration, API management, and application development" — with deep heritage in enterprise middleware (BusinessWorks, EMS, Rendezvous) now extended to the cloud. TCI is sold alongside TIBCO Cloud API Management, TIBCO Spotfire, and other products in the TIBCO (now Cloud Software Group) portfolio.

**Target audience**: Mid-market to large enterprise with hybrid infrastructure (on-prem + cloud), existing TIBCO footprint (BusinessWorks, EMS, Spotfire), regulated industries (financial services, manufacturing, healthcare, telco), and enterprise integration patterns (real-time messaging, guaranteed delivery, EDI). Less suited to SMBs or developer-only teams where Zapier/Make or lightweight iPaaS options are cheaper.

**Key differentiator vs Boomi/MuleSoft/Informatica**: TCI is the only major iPaaS that bundles a lightweight Scribe-style no-code tool AND enterprise-grade BusinessWorks AND an open-source-derived developer tool (Flogo) AND a citizen developer app builder in one subscription. Boomi is strong on cloud-native integrations; MuleSoft dominates API-led architecture; Informatica leads on data management and MDM. TCI is chosen when existing TIBCO on-prem investment must be extended or when event-driven real-time messaging patterns (EMS heritage) are first-class requirements.

**Key differentiator vs Workato/Tray/Celigo**: Those are cloud-native only and strong on SaaS-to-SaaS workflows. TCI's Hybrid plan runs BusinessWorks and Flogo agents on-premise or in private cloud, which Workato/Tray/Celigo don't offer to the same depth.

## Four capability pillars

### Connect — TIBCO Scribe
- **Positioning**: "The iPaaS with extreme ease of use — no coding required."
- **Users**: Business analysts, admins, non-developers.
- **Key capabilities**:
  - **Replication Services**: One-click source-to-target data replication (e.g., Dynamics 365 CRM → SQL Server). Good for keeping a reporting DB in sync with a SaaS CRM.
  - **Integration Maps**: Drag-and-drop data integration with transformations, filters, and target write rules (insert/update/upsert).
  - **On-Schedule apps**: Scribe flows that run on a cron-style schedule.
  - **Connectors**: 100+ pre-built connectors (Salesforce, Dynamics, NetSuite, Marketo, SQL Server, Oracle, MySQL, REST, etc.).
- **Scribe Cloud AuditSafe**: Optional add-on for audit logging of Scribe actions.

### Develop — TIBCO Flogo
- **Positioning**: "Event-driven, cloud-native application development."
- **Users**: Developers comfortable with visual design; also supports IDE/Project Flogo open-source coding.
- **Key capabilities**:
  - **Visual flow designer**: Web-based. Triggers (REST, GraphQL, Kafka, Pulsar, Azure Service Bus, scheduled, file, etc.) → activities → error handlers.
  - **Flow structure**: One Flogo app can contain multiple flows, each bound to its own trigger. Counts as ONE app instance regardless of flow count.
  - **Language**: Built on Project Flogo (open-source Go framework). You can develop locally in the Flogo CLI, deploy to TCI, and vice versa.
  - **Deployment targets**: TCI cloud, standalone binary, Docker container, Kubernetes.
- **Flogo Connectors** (sample): Apache Pulsar (batching, chunking, mTLS), Microsoft Azure Service Bus (OAuth2), Microsoft Azure Storage (OAuth2), OData, SAP Solutions, HTTP, Kafka, REST, GraphQL.

### Integrate — TIBCO BusinessWorks (TCI-BW)
- **Positioning**: "Enterprise integration patterns for hybrid deployments."
- **Users**: Integration architects and developers with enterprise integration experience.
- **Key capabilities**:
  - **Model-driven**: Zero-code drag-drop with model-first design; generates Java underneath.
  - **Enterprise integration patterns**: Message routing, transformation, enrichment, aggregation, splitter, content-based routing.
  - **Hybrid agents**: Run BusinessWorks agents on-prem, in private cloud, or in TCI — unified management from TCI console.
  - **Microservices**: Package BW flows as Docker containers for Kubernetes.
- **BusinessWorks Plug-ins** (sample): Apache Kafka (3.7.x), Salesforce.com (with retry mechanisms), SAP Solutions (qRFC support).
- **Licensing**: Requires Premium or Hybrid subscription AND separate BusinessWorks licensing. Not included in Basic.

### Automate — TIBCO Cloud Live Apps
- **Positioning**: "Citizen developer platform for business applications."
- **Users**: Business users, citizen developers building approval-style workflows.
- **Key capabilities**:
  - **Browser-based no-code**: Point-and-click app builder with forms, actions, and workflow states.
  - **Common patterns**: Approval workflows, case management, issue tracking, ad-hoc business apps.

### TIBCO Cloud API Management (separate but bundled)
- **Positioning**: Full API lifecycle management — design, gateway, analytics, developer portal.
- **Key capabilities**:
  - **API design**: OpenAPI-first design, publish APIs from Flogo/BusinessWorks backends.
  - **Gateway**: Traffic management, rate limiting, authentication (API key, OAuth 2.0, JWT), throttling.
  - **Developer Portal**: Self-service sandbox, documentation, key management for consumers.
  - **Analytics**: Usage, latency, error rates, consumer dashboards.

## Subscription plans

### Basic Plan
- **App instance limit**: 5 combined iPaaS app instances (prod). Test orgs get 10.
- **Included**: TIBCO Flogo, Node.js apps, Scribe Connect (on-schedule apps, data replication apps).
- **Not included**: BusinessWorks, Child Organizations.
- **Support**: Community channel only.

### Premium Plan
- **App instance limit**: 15 combined iPaaS app instances.
- **Included**: All iPaaS app types (Flogo, Node.js, Scribe), BusinessWorks (requires additional BW licensing), Child Organizations.
- **Support**: Community channel.

### Hybrid Plan
- **App instance limit**: 25 instances per pack. Subscriptions typically include 2 Packs of Applications.
- **Deployment flexibility**: On-premise, Private Cloud, or TIBCO Cloud — same control plane.
- **Capacity per pack**: Either 1 Processor OR 25-100 Application Instances (varies by product).
- **Included**: All Standard Connectors for BusinessWorks and Flogo.

### What "app instance" means (the subtle part)
- 1 app instance = 1 deployed app, regardless of how many flows it contains.
- Consolidating many small integrations into fewer multi-flow Flogo apps preserves instance quota.
- Scribe replication apps and Scribe on-schedule apps each count as 1.
- Hitting the cap blocks new deployments; either consolidate, upgrade, or decommission unused apps.

## Pricing (best-effort, from third-party sources)

- **No public list pricing** — custom quotes only.
- **Vendr average**: ~$52,500/year annual cost (median data).
- **3-year TCO range**: $180K–$250K for mid-market (industry-average iPaaS TCO is ~$150K).
- **Implementation**: Typically 0.5x to 2x annual software spend for complex hybrid deployments (SIs, training, architecture design, connector configuration).
- **Gotcha**: BusinessWorks adds a separate license cost on top of Premium/Hybrid subscription.

## Connectors and extensibility

### Scribe Online Connectors (Connect)
- 100+ pre-built: Salesforce, Dynamics 365, NetSuite, Marketo, SAP, SQL Server, Oracle, MySQL, PostgreSQL, REST, SOAP, flat files, SharePoint, etc.

### Flogo Connectors (Develop)
- Apache Pulsar, Azure Service Bus, Azure Storage, OData, SAP Solutions, HTTP, Kafka, AMQP, MongoDB, REST, GraphQL, scheduled, file watcher.

### BusinessWorks Plug-ins (Integrate)
- Apache Kafka 3.7.x, Salesforce, SAP Solutions (qRFC), WebSphere MQ, Oracle, SQL Server, LDAP, FTP/SFTP, JDBC, JMS, EMS, REST, SOAP, EDI.

### Custom connectors
- **Flogo extension SDK** (Go-based, Project Flogo).
- **BusinessWorks custom activities** (Java plug-in SDK).
- **Community contributions**: github.com/TIBCOSoftware hosts plug-ins, samples, and extensions — `bw-samples`, `flogo-maven-plugin`, `cic-cli-main` (CLI) and others.

## Deployment and runtime

### TIBCO-hosted cloud
- Fully managed by TIBCO. Fastest start, no infra setup. Best for cloud-only integrations (SaaS ↔ SaaS).

### Hybrid agents (on-prem / private cloud)
- Install BusinessWorks or Flogo agents on your own infrastructure.
- Required when sources are on-prem or behind a firewall.
- Agents communicate outbound to TCI control plane via secure channels.
- Runtime lifecycle: `bwagent start/stop`, Flogo container commands.
- Management: TCI console deploys apps to on-prem agents without VPN into your network.

### Regions
- **AWS US** — `https://api.cloud.tibco.com/tci/v1`
- **AWS US East** — `http://us-east.api.cloud.tibco.com/tci/v1`
- **AWS Europe** — `https://eu.api.cloud.tibco.com/tci/v1`
- **AWS Australia** — `https://au.api.cloud.tibco.com/tci/v1`
- **Azure US** — `https://api.us.azure.cloud.tibco.com/tci/v1`
- Each region has its own Swagger docs page at `/tci/docs/` under the same domain. API calls to the wrong region return no data.

## Org / environment model

- **Organization (org)**: Top-level tenant. Each customer has one or more orgs (dev, test, prod).
- **Child Organizations**: Sub-orgs under a parent — Premium plan only. Use for multi-team or multi-BU isolation.
- **Apps and flows**: Apps are the deployable unit; each contains one or more flows.
- **IP safe lists**: Restrict API and agent traffic to specific IP ranges per tenant.

## Security model

- **Encrypted channels**: All UI, agents, and third-party apps communicate over TLS/HTTPS.
- **Credential storage**: Encrypted containers; secrets never stored in plaintext.
- **IP allowlists**: Restrict access to specific tenant IPs.
- **OAuth 2.0 / Bearer Token** for API access.
- **Role-based access**: Users, groups, and roles per org.

## CI/CD and CLI tooling

- **TIBCO Cloud CLI** (`tibco-cli` / repo `cic-cli-main` on GitHub) — central CLI with plugin architecture.
- **Plugins**: `tcapim-cli-plugin` (API Management), `cic-cli-plugin-asyncapi` (AsyncAPI → Flogo), `cic-cli-plugin-tcam`, plus others in the `TIBCOSoftware` GitHub org.
- **TIBCO Cloud Integration API**: Used for automation and CI/CD — deploy apps, manage orgs, inspect runtime status. See `references/tibco-api-reference.md`.

## Known issues and pain points (from TIBCO Community & G2)

### Flogo known issues
- **REST/GraphQL trigger port field** does not support app properties — cannot environmentalize the port.
- **Date/DateTime types** shown as string in the REST trigger output tab when schema is inferred from JSON sample. Double types shown as number.
- **Flow error handler**: `$error.data` and `$error.code` not supported in the mapper.
- **Null object schema** fails validation in Flow Tester with "validation error".
- **Event posting** fails with "Fail to save event" if `extra_props` setting is not enabled.

### Scribe known issues
- **No successful record history stored** — reconciliation with target systems is hard when the target has issues mid-run.
- **Error details panel** not resizable; long error messages run off the bottom of the screen.
- **Replication Service has no pre-filter** — pulls all records and all columns from inception. Use Integration Maps or source views for filtering.
- **Common runtime errors**: "Execution timeout expired", "data would be truncated", "Cannot insert duplicate key row".

### General TCI pain points
- **Documentation is descriptive, not instructive.** TIBCO docs explain *what* features do but often don't show end-to-end workflows.
- **Cryptic error messages** — some runtime errors surface without clear context or remediation steps.
- **Implementation-heavy** — TIBCO consistently gets flagged on reviews as hard to configure without consultants or internal expertise.

## Community, support, training

- **TIBCO Community**: community.tibco.com — forum posts, Known Issues articles, tutorials.
- **TIBCO Product Documentation**: docs.tibco.com — per-product manuals and API references.
- **TIBCO Support**: Enterprise tiers include ticket-based support; Basic is community-only.
- **TIBCO Education**: Formal training and certification.
- **GitHub**: github.com/TIBCOSoftware — 213 public repos including CLI tools, Helm charts, samples, and contrib projects.

## Common workflows

### Build a Flogo REST API
1. Open TCI → Apps → Create → Flogo app.
2. Add a flow → Start event = REST trigger.
3. Configure method, path, request/response schema.
4. Add activities (map data, call another service, transform).
5. Deploy. TCI generates a callable URL with per-region base.

### Replicate a SaaS source to a SQL target with Scribe
1. Open Scribe → Replication Services → New.
2. Choose source connection (e.g., Dynamics 365 CRM).
3. Choose target connection (e.g., SQL Server).
4. Map objects (entities → tables). Scribe auto-creates tables on first run.
5. Schedule the replication job. On first run, full sync; incremental thereafter (if source supports change tracking).

### Deploy a BusinessWorks app to a hybrid agent
1. Install BW agent on your on-prem VM or container host.
2. Register the agent with TCI (pulls credentials + control-plane connection).
3. In TCI → Integrate → Deploy → choose the on-prem agent as target.
4. Monitor execution from TCI console; logs stay on the agent host but metrics surface to TCI.

### Expose a Flogo flow as a managed API
1. Deploy the Flogo flow with a REST trigger in TCI.
2. In TIBCO Cloud API Management → Register API → import the OpenAPI spec.
3. Configure gateway policies (rate limit, auth, quota).
4. Publish to developer portal with docs and sandbox.
