# Informatica IDMC Platform Reference

## Platform overview

Informatica Intelligent Data Management Cloud (IDMC) is the company's enterprise iPaaS and cloud data management platform — a microservices-based, API-driven, AI-powered platform (AI engine: CLAIRE) that unifies data integration, application integration, API management, data catalog, data quality, master data management, governance, and AI agent engineering under a single control plane.

Informatica is the long-standing enterprise data management incumbent (PowerCenter heritage) and is consistently rated a Leader in the Gartner Magic Quadrant for Data Integration Tools, Data Quality, Master Data Management, and iPaaS. IDMC is the strategic successor to PowerCenter — all new investment goes to IDMC, and PowerCenter customers are being migrated.

**Target audience**: Large enterprises (financial services, healthcare, retail, manufacturing, public sector) with significant data volume, multiple source systems, regulatory/governance requirements, and dedicated data engineering / integration teams. Less suited to SMBs due to enterprise pricing.

**Key differentiator vs Boomi/MuleSoft/Workato**: Informatica is data-management-first — the strongest MDM, Data Quality, Data Catalog, and Governance capabilities of any iPaaS. Boomi and MuleSoft are application-integration-first with weaker native MDM. Workato is automation-first with no serious MDM story. Informatica also has the longest track record for high-volume ETL (PowerCenter heritage) and is often the default choice when regulatory/governance requirements are significant.

**Key differentiator vs Fivetran/dbt stack**: Fivetran + dbt is the "modern data stack" alternative for teams moving off Informatica's IDMC — cheaper, more developer-centric, but without MDM, governance, or real-time CAI. Informatica is chosen when governance, MDM, and enterprise patterns matter more than cost.

## Key modules

### Cloud Data Integration (CDI) — core
- **Mappings**: Visual, drag-and-drop data transformation flows. Sources, targets, transformations (Expression, Filter, Joiner, Aggregator, Lookup, Router, Sequence Generator, Sorter, Union, Web Services, etc.).
- **Mapping tasks**: Deployable unit that runs a mapping on a schedule or on-demand.
- **Taskflows**: Orchestrate multiple tasks with branching, loops, decision logic, and error handling.
- **CDI Elastic (advanced clusters)**: Serverless Spark-based runtime for large-scale ETL — auto-scaling Spark clusters for big data workloads.
- **Pushdown optimization**: Push transformation logic to the source/target database (full pushdown, source pushdown, target pushdown) to leverage warehouse compute.
- **Parameter files**: Externalize connection attributes, source/target paths, and other values for environment-specific deployments.
- **Mass Ingestion**: High-volume data ingestion for databases (CDC), files, and streaming sources.

### Cloud Application Integration (CAI)
- **Processes**: Real-time, event-driven application integration — REST/SOAP APIs, webhooks, message queues.
- **Service Connectors**: Pre-built or custom connectors to SaaS apps, exposed via OpenAPI/Swagger/WSDL specs. Community repo at github.com/InformaticaCloudApplicationIntegration/Service-Connectors.
- **App Connection**: Configure authentication and endpoints once; reuse across processes.
- **Human Tasks**: Build approval workflows with human-in-the-loop steps.
- **Process Objects**: Define reusable data structures for passing between processes.

### API Center
- **API design**: OpenAPI-first design tooling, publish APIs from CAI processes or CDI mappings.
- **API Gateway**: Traffic management, rate limiting, authentication policies (API key, OAuth 2.0, JWT).
- **Developer Portal**: Self-service portal for API consumers with documentation, sandbox, and key management.
- **API Analytics**: Usage metrics, response times, error rates, consumer dashboards.

### Data Catalog
- **Metadata management**: Catalog data assets across cloud and on-prem sources.
- **Data lineage**: End-to-end lineage from source to target, including transformation logic.
- **Search and discovery**: Google-style search across the catalog; tags, business glossary terms, data domains.
- **AI-driven classification**: CLAIRE automatically classifies data (PII, sensitive, by domain).

### Data Quality (CDQ) & Data Observability
- **Rules**: Library of pre-built data quality rules (completeness, uniqueness, validity, consistency, accuracy).
- **Profiling**: Profile data sources to identify quality issues.
- **Scorecards**: Dashboards showing DQ rule results over time.
- **Observability**: Pipeline monitoring — detects anomalies, schema drift, freshness issues.

### Master Data Management (MDM) & 360 Applications
- **Golden records**: Merge and reconcile data from multiple sources into a single trusted record.
- **Match rules**: Configurable deterministic and probabilistic matching.
- **Survivorship**: Rules for which source wins on conflict, per attribute.
- **Hierarchy management**: Multi-level relationships (company → subsidiary → contact).
- **360 Applications**: Customer 360, Supplier 360, Product 360 — pre-built data models and UIs.

### Data Governance, Access & Privacy (CDGC)
- **Business glossary**: Central definitions for business terms and data domains.
- **Policies**: Define and enforce data access, usage, and quality policies.
- **Stewardship**: Assign data stewards, workflow approvals for glossary changes.
- **Privacy**: PII detection, DSAR automation, consent management.

### B2B Gateway
- **Trading partner onboarding**: Manage partner-specific configurations, agreements, schedules.
- **EDI standards**: X12, EDIFACT, HL7, HIPAA, RosettaNet.
- **Document tracking**: End-to-end visibility into B2B document flow.

### AI Agent Engineering
- **CLAIRE GPT**: Natural-language querying of data via the catalog and MDM.
- **Custom AI agents**: Build agents that call IDMC services (CAI processes, CDI mappings, MDM lookups) as tools.

## Pricing and limits

### IPU (Informatica Processing Unit) consumption model
- **What it is**: Universal unit of consumption across all IDMC services. One IPU buys one unit of runtime for one hour (varies by service type).
- **Pre-paid annual**: Commit to an annual IPU pool; consumption decrements from the pool.
- **Flex IPU**: Shift unused IPUs across services within the contract year (e.g., unused CDI IPUs can offset CAI overage).
- **Volume tier pricing**: Cost per IPU decreases as total annual IPU commitment grows.
- **Classic IPU vs Flex IPU**: Classic pools are service-specific and strictly expire annually. Flex IPU pools are shared across services with some rollover flexibility.

### Cost ranges (from third-party reports — not official list prices)
- **Entry**: $50K–$100K/year for basic usage (small CDI deployment, few connectors).
- **Mid-size**: $150K–$300K/year for typical enterprise deployment.
- **High-volume**: $300K–$800K+/year for large-scale data operations with multiple services.
- **AWS Marketplace reference**: 120 IPUs/month listed at ~$129,600/year.
- **Implementation**: Typically $150K–$300K additional for initial deployment (SIs, training, migration).

### What drives IPU consumption
- **Service type**: CDI Elastic > CDI standard > CAI > API Center > Data Catalog (roughly, per hour).
- **Runtime duration**: Jobs pay for cluster/runtime lifetime, not just data processing time.
- **Data volume**: Some services (Mass Ingestion, advanced transformations) have volume-based IPU multipliers.

### Connector licensing
- **Standard connectors**: Included in IPU consumption.
- **Premium / enterprise connectors**: SAP, Workday, Oracle EBS, some industry-specific — additional licensing fees on top of IPU consumption.

### Optimization levers
- Right-size schedules (daily vs hourly)
- Consolidate mappings
- Use pushdown optimization to leverage warehouse compute instead of IDMC compute
- Scale down minimum cluster size for CDI Elastic
- Monitor with the v3 `/metering` API and set consumption alerts

## Integrations

### Native connectors
Hundreds of pre-built connectors across databases, warehouses, SaaS apps, files, messaging, and ERP. Includes:
- **Databases/warehouses**: Snowflake, Databricks, Redshift, BigQuery, Azure Synapse, Oracle, SQL Server, PostgreSQL, MySQL, Teradata, SAP HANA.
- **Cloud storage**: S3, ADLS, GCS, Azure Blob, Box, SharePoint.
- **SaaS apps**: Salesforce, Workday, NetSuite, ServiceNow, Microsoft Dynamics, SAP S/4HANA, Marketo, HubSpot.
- **Messaging/streaming**: Kafka, Kinesis, Event Hubs, Pub/Sub, JMS, MQ.
- **REST/SOAP**: REST V2 connector (Swagger 2.0 / OpenAPI 3.0.x spec-driven), Web Services Consumer.

### Custom connectors
- **REST V2 connector**: Import any Swagger/OpenAPI spec to auto-generate operations.
- **Informatica Connector Toolkit**: Java SDK for building proprietary connectors.
- **Service Connectors (CAI)**: Community-contributed, shared via the Service-Connectors GitHub repo.

### Source control
- **Git integration**: Native source control for projects, assets, and taskflows. Supports GitHub, GitLab, Bitbucket, Azure DevOps via the v3 `/sourcecontrol` resource.

## Secure Agent

The Secure Agent is the runtime component that executes CDI/CAI workloads close to your data. Three deployment models:

### Informatica-hosted Secure Agent
- Fully managed by Informatica on their cloud infrastructure.
- Fastest start — no setup required.
- Good for cloud-to-cloud integrations where sources/targets are SaaS.

### Customer-managed Secure Agent
- Installed on customer infrastructure (Linux/Windows VM, container, on-prem).
- Required when sources are on-prem or behind a firewall.
- Runs as a service; requires outbound connectivity to IDMC POD hostnames.
- Logs at `~/infaagent/apps/agentcore/logs/infaagent.log`.
- Management via `infaagent startup`, `infaagent shutdown`, `infaagent deploy`.

### Serverless runtime (CDI Elastic / advanced clusters)
- Informatica-managed Spark clusters that auto-scale for large CDI workloads.
- Pay for cluster lifetime in IPUs.

### Runtime environments
- Group Secure Agents into runtime environments for HA and load balancing.
- Assign tasks to specific runtime environments at deploy time.

## Org / environment model

- **Organization (org)**: Top-level tenant boundary. Each customer has one or more orgs (dev, test, prod).
- **Sub-orgs**: Child orgs under a parent, for multi-team or multi-BU structures.
- **Projects and folders**: Organize assets (mappings, tasks, processes) hierarchically within an org.
- **Source control**: Git repositories link to an org; changes can flow dev → test → prod.
- **Object migration**: Use the v3 `/export` and `/import` resources to migrate assets between orgs.

## Key workflows

### Build a CDI mapping
1. Open Data Integration service → New → Mapping.
2. Add a Source transformation, configure the source connection and object.
3. Add transformations (Expression, Filter, Joiner, etc.) and connect them.
4. Add a Target transformation, configure target connection and write behavior (insert, update, upsert, data driven).
5. Save, run as a Preview, then deploy as a Mapping Task with a schedule.

### Build a CAI real-time process
1. Open Application Integration service → New → Process.
2. Configure a Start event (REST service, scheduled, message).
3. Add activities: Service (call a Service Connector), Decision, Assignment, Parallel, Subprocess.
4. Add an End event.
5. Publish the process. If it has a REST Start, IDMC generates a callable URL.

### Set up MDM golden records
1. Define the data model (entities, attributes, relationships).
2. Configure sources (where records come from).
3. Define match rules (which attributes match, thresholds).
4. Define survivorship rules (which source wins per attribute on conflict).
5. Load data, review match candidates, resolve merges.
6. Publish golden records to downstream systems via CDI or CAI.

### Deploy dev → prod via source control
1. Connect project to a Git repository (v3 `/sourcecontrol`).
2. Commit changes in dev org.
3. Pull the commit into the target org (test or prod).
4. Verify connection bindings, parameter overrides, and runtime environment assignments.
5. Test in target org before scheduling.

## Community, support, training

- **Informatica Network**: Community forum (network.informatica.com).
- **Knowledge Base**: knowledge.informatica.com for articles, how-tos, and troubleshooting.
- **Success Accelerators**: success.informatica.com for platform automation and best-practice playbooks.
- **Informatica University**: Formal training and certification.
- **GitHub**: github.com/InformaticaCloudApplicationIntegration — Service-Connectors and Tools repos.
