# SnapLogic Platform Reference

## Platform overview

SnapLogic is an enterprise iPaaS (Integration Platform as a Service) branded as "The All-in-One Agentic Integration Platform." Combines integration, automation, API management, and AI agent building in a single platform. Target audience: enterprise IT teams, integration architects, data engineers, and increasingly business users via SnapGPT. Serves industries including financial services, healthcare, retail, manufacturing, and technology.

**Key differentiator vs Workato**: SnapLogic has stronger ETL/ELT capabilities (batch + streaming), visual pipeline designer is more powerful for complex data transformations, and AgentCreator is more mature for AI agent building. Workato's recipe model is simpler for business process automation. SnapLogic's task-based pricing is comparable; Workato's can spiral similarly. SnapLogic offers unlimited data movement (no per-GB charges).

**Key differentiator vs MuleSoft**: SnapLogic is more accessible (visual, low-code) vs MuleSoft's code-heavy approach (DataWeave/Java). Both have strong API management. MuleSoft is deeper for Salesforce-native integration and complex API-led architecture. SnapLogic's AgentCreator and SnapGPT give it an AI edge. MuleSoft typically costs more and requires specialized developers.

**Key differentiator vs Boomi**: Both offer visual builders and 1000+ connectors. Boomi has stronger MDM (Data Hub) and EDI capabilities. SnapLogic has stronger AI features (AgentCreator, SnapGPT) and better ETL/ELT handling. Boomi's per-connection pricing can spiral with many apps; SnapLogic's task-based pricing is more predictable for high-connection-count scenarios.

**Key differentiator vs Celigo**: Celigo excels for NetSuite-centric and eCommerce integrations. SnapLogic has broader enterprise coverage, stronger API management (3.0), and AI capabilities. Celigo is typically cheaper for mid-market. SnapLogic targets larger enterprises with complex integration needs.

## Key modules

### Intelligent Integration Platform (IIP) — core

- **Pipeline Designer**: Visual drag-and-drop interface for building integration pipelines. Each pipeline consists of connected Snaps (components) that process data in sequence or parallel.
- **Snaps**: Pre-built intelligent connectors (1,000+). Each Snap performs a specific operation — read, write, transform, parse, validate, route. Organized into Snap Packs by vendor/technology.
  - **Core Snap Packs**: Included with all packages — covers common apps, databases, file systems, protocols.
  - **Premium Snap Packs**: Enterprise connectors sold as add-ons.
    - **Tier 1** (~$45K add-on): Workday, SAP, NetSuite, and other major enterprise apps.
    - **Tier 2** (~$15K add-on): Mid-tier enterprise apps.
- **Triggers**: Event-driven (webhook), scheduled (cron), polling, or file-based triggers.
- **Expression Language (EL)**: JSONPath-based expression language for data mapping and transformation within Snaps. Supports string manipulation, date formatting, math, and conditional logic.
- **Ultra Pipelines**: Streaming execution mode for high-throughput, low-latency use cases. Pipeline runs continuously (vs standard batch execution). Ideal for real-time event processing, CDC, and IoT data streams.
- **Error Views**: Most Snaps support error views — data-level errors are routed to an error pipeline instead of failing the whole pipeline. Enables graceful error handling without stopping processing.
- **Child Pipelines**: Break complex logic into reusable sub-pipelines called via the Pipeline Execute Snap. Enables modularity and easier debugging.

### Connectors (1,000+ Snaps)

Major connector categories:
- **Enterprise Apps**: Salesforce, SAP, Oracle, Workday, ServiceNow, NetSuite, Microsoft Dynamics 365
- **Databases**: Oracle, SQL Server, PostgreSQL, MySQL, Snowflake, BigQuery, Redshift, AlloyDB, MongoDB
- **Cloud Storage**: AWS S3, Azure Blob, Google Cloud Storage, SFTP, FTP
- **Messaging**: Kafka, AMQP, JMS, Amazon SQS, Azure Event Hubs
- **AI/ML**: OpenAI, Google Gemini, Amazon Bedrock, Azure OpenAI, Pinecone, MongoDB Atlas Vector
- **Protocols**: REST, SOAP, GraphQL, JDBC, ODBC, OData
- **File Formats**: JSON, XML, CSV, Parquet, Avro, Excel, PDF (with OCR)
- **REST Snap**: Universal connector for any REST API without a dedicated Snap Pack
- **Snap Developer Kit (SDK)**: Java-based SDK for building custom Snaps. Published to your Org or shared via SnapLogic.

### AgentCreator

No-code platform for building, deploying, and managing AI agents.

- **Prompt Composer**: Visual interface for building agent prompts without coding. Defines the agent's instructions, context, and tool assignments. SnapGPT assists with prompt generation.
- **Tool Pipelines**: Standard SnapLogic pipelines exposed as "tools" that AI agents can invoke. Each pipeline = one tool (e.g., "query customer database," "create Salesforce record"). Agents call tools autonomously based on their instructions and the user's request.
- **LLM Snap Packs**: Connectors for OpenAI, Amazon Bedrock, Azure OpenAI, Google Gemini. Support chat completions, embeddings, and prompt generation.
- **Vector Database Snap Packs**: Connectors for Pinecone, MongoDB Atlas, Snowflake (Cortex), Weaviate. Enable RAG (Retrieval-Augmented Generation) patterns.
- **Agent Visualizer**: Visual tool showing the agent's reasoning chain — which tools it called, in what order, with what inputs/outputs. Provides diagram and log layout for debugging agent behavior.
- **Human-in-the-Loop (HITL)**: Pattern for requiring human approval before agents execute sensitive operations. Configurable per-tool or per-agent.
- **Use cases documented**: HR Q&A agent, legal contract analysis, financial portfolio extraction from SEC filings, briefing agent.
- **AgentCreator is a premium feature** — confirm it's included in your package.

### SnapGPT

AI copilot integrated into the SnapLogic platform.

- **Natural-language pipeline building**: Describe what you want in plain English, SnapGPT generates the pipeline structure with appropriate Snaps and connections.
- **Integration Assist**: Suggests Snaps, configurations, and expression language syntax as you build.
- **Prompt-to-pipeline**: Translate business requirements directly into working pipelines.
- **Learning from context**: SnapGPT uses your existing pipelines and Org context to make better suggestions.

### API Management 3.0

Full-lifecycle API management built into the SnapLogic platform.

- **Policy Studio**: Visual interface for configuring API policies — rate limiting, authentication, caching, request/response transformation, validation, IP filtering. Policies are composable and reusable.
- **Developer Hub**: Self-service developer portal for API consumers. Auto-generates documentation from OAS 3.x specs. Developers can browse published APIs, view specs, manage credentials, and test endpoints.
- **Service creation**: Create API services from SnapLogic pipelines (pipeline-as-API) or from Swagger 2.0/OAS 3.x specifications.
- **Version management**: Create, publish, unpublish, deprecate, and retire API versions. Duplicate service versions and endpoints.
- **AI agent governance**: Integrated governance for AI agents accessing APIs — control which agents can call which APIs, audit agent API usage.
- **OAS 3.x generation**: After publication, APIM 3.0 auto-generates an OAS 3.x specification that consumers can view or download from Developer Hub.
- **APIM 3.0 is in active development** — some features (auto-key-management, advanced admin UI) are still maturing. Check current release notes before planning a full governance rollout.

### Deployment

- **Cloudplex**: SnapLogic-managed cloud execution nodes. Zero infrastructure management. Auto-scaling.
- **Groundplex**: Customer-managed on-premises execution nodes. For data residency requirements or connecting to systems behind firewalls. Runs SnapLogic JCC (Java Container Controller) process on your infrastructure.
- **Hybrid**: Mix of Cloudplex and Groundplex nodes in the same Org. Route pipelines to appropriate execution environment based on data location and security requirements.
- **Control Plane vs Data Plane**: Control plane (pipeline design, management, monitoring) always runs in SnapLogic Cloud. Data plane (pipeline execution, data processing) runs on Cloudplex or Groundplex. Data never passes through the control plane.

### CI/CD and Git Integration

- **Git integration**: Connect SnapLogic projects to GitHub, GitHub Enterprise, GitLab, Bitbucket. Supports branch, checkout, pull, tag, and status operations.
- **Project migration**: Migrate projects between environments (dev → staging → prod) via API or UI.
- **Asset export/import**: Export individual assets or entire projects as JSON for version control.
- **Automated deployment**: Use SnapLogic Public APIs (Project APIs) to script CI/CD pipelines in Jenkins, GitHub Actions, etc.

## Pricing and limits

SnapLogic uses quote-based enterprise pricing — no public price list.

### Pricing model
- **Task-based billing**: Pipeline executions consumed from pre-purchased task blocks (100K, 500K, 1M+ tasks annually).
- **Unlimited data movement**: No per-GB charges for data transferred through pipelines.
- **Unlimited connections**: No per-connection pricing — connect as many endpoints as needed.

### Tiers
- **Standard**: Entry-level for straightforward integration needs. Base task allocation (typically 100K-250K tasks/year). Core Snap Packs included. Standard support.
- **Business**: Mid-tier for growing integration needs. Higher task allocation. Includes more advanced features.
- **Enterprise**: Full platform access — AgentCreator, API Management 3.0, advanced governance, priority support.

### Premium Snap Packs
- **Core Snap Packs**: Included with every package. Covers most common apps, databases, and protocols.
- **Premium Tier 1** (~$45K add-on): Enterprise apps — Workday, SAP, NetSuite, and other major platforms.
- **Premium Tier 2** (~$15K add-on): Mid-tier enterprise apps.

### Cloud marketplace
Available for purchase directly from AWS Marketplace, Azure Marketplace, and Google Cloud Marketplace. Can count toward cloud commit spend.

### Typical cost ranges (best-effort estimates)
- Mid-market (basic integration needs): $50K-150K/year
- Enterprise (full platform, multiple Snap Packs): $200K+/year
- Implementation services and training: additional
- Multi-year contracts typically include volume discounts

### Comparison to competitors
- **vs Workato**: Both use task/recipe-based pricing. Workato typically $15K-50K/year mid-market, $100K+ enterprise. Similar cost profile. SnapLogic's unlimited data movement is a plus for heavy ETL workloads.
- **vs MuleSoft**: MuleSoft uses vCore-based pricing, typically $50K+/year and requires specialized developers ($120-180K salary). SnapLogic is usually cheaper to operate.
- **vs Boomi**: Boomi uses per-connection pricing that spirals with many apps. SnapLogic's task-based pricing is more predictable for high-connection-count scenarios.
- **vs Celigo**: Celigo uses endpoint+flow pricing, typically cheaper for mid-market NetSuite shops. SnapLogic is priced for larger enterprises.

## Integrations

- **CRM**: Salesforce, HubSpot, Microsoft Dynamics 365, SAP CRM, Oracle CX
- **ERP**: SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365 Business Central, Workday
- **Data Warehouses**: Snowflake, BigQuery, Redshift, Azure Synapse, Databricks
- **Cloud Platforms**: AWS, Azure, Google Cloud (native Snaps for services)
- **Zapier**: No native Zapier connector. Use REST Snap to receive Zapier webhooks or call Zapier webhook URLs.
- **Make**: Same pattern as Zapier — REST Snap for bidirectional communication.
- **MCP**: AgentCreator supports Model Context Protocol for AI agent integration.

## Data model (API)

### Key objects
- **Org**: Top-level organizational unit. All assets belong to an Org.
- **Project/Space**: Container for pipelines, tasks, and other assets. Projects can be linked to Git repos.
- **Pipeline**: A workflow of connected Snaps. Has metadata (name, author, created date) and execution properties.
- **Snap**: Individual component within a pipeline. Configured via properties (account, settings, expressions).
- **Task**: A scheduled or triggered execution of a pipeline. Can be enabled/disabled, assigned to specific Snaplex nodes.
- **Snaplex**: Execution engine (Cloudplex or Groundplex). Contains one or more nodes that run pipelines.
- **Account**: Reusable credential/connection configuration for a specific endpoint (e.g., Salesforce account, Snowflake account).

### API authentication
- **Basic Auth**: Username + password or API token over HTTPS
- **JWT**: JSON Web Token authentication (recommended). Supports Okta and Microsoft Entra ID as identity providers.

### API base URL
- Org-specific: `https://{pod}.snaplogic.com/api/1/rest/...`
- Pod varies by region/instance (e.g., `elastic.snaplogic.com`, `uat.elastic.snaplogic.com`)

## Workflow setup — common patterns

### Pattern 1: Salesforce-to-Snowflake data sync
1. Create a Salesforce Read Snap (Account object, query filter for modified records)
2. Add Mapper Snap (transform field names to Snowflake column names)
3. Add Snowflake Bulk Load Snap (target table, merge/upsert strategy)
4. Add error view on Mapper and Bulk Load Snaps → route to an error notification pipeline
5. Schedule as a task (hourly or daily) or trigger on Salesforce Platform Events

### Pattern 2: Real-time event-driven processing with Ultra Pipeline
1. Create an Ultra Pipeline (streaming mode)
2. Add Kafka Consumer Snap (subscribe to topic)
3. Add Transform Snaps (filter, enrich, map)
4. Add target Snap (database write, API call, another Kafka topic)
5. Pipeline runs continuously — no scheduling needed

### Pattern 3: AI-powered document processing
1. Create a pipeline with File Reader Snap (S3, SFTP, or local)
2. Add Adobe PDF Snap (extract text, tables, images with OCR)
3. Add LLM Snap Pack (OpenAI/Bedrock) for summarization or classification
4. Add Mapper Snap to structure the output
5. Add target Snap (database write, API call, Slack notification)

## Deep dives

### Snaplex sizing and management
- **Cloudplex**: Auto-managed by SnapLogic. Scales automatically based on pipeline execution load.
- **Groundplex requirements**: JDK 11+, 8GB RAM minimum (16GB recommended), 4 CPU cores minimum. Linux (RHEL 7+, Ubuntu 18+) or Windows Server 2019+. Requires outbound HTTPS (443) to SnapLogic control plane.
- **Multi-node Groundplex**: Deploy multiple Groundplex nodes for high availability and load balancing. Pipelines are distributed across available nodes.

### Expression Language quick reference
- Access input fields: `$fieldName` or `$['field name with spaces']`
- String: `$name.toUpperCase()`, `$email.split('@')[1]`, `$str.trim()`
- Date: `Date.now()`, `$date.toLocaleDateTimeString('yyyy-MM-dd')`, `Date.parse($dateStr)`
- Math: `Math.round($price * 100) / 100`, `Math.max($a, $b)`
- Conditional: `$status == 'active' ? 'yes' : 'no'`
- Null handling: `$field || 'default'`, `$field == null`

### Migrating from competitor iPaaS
- **From Workato**: Map recipes → pipelines, actions → Snaps, formulas → Expression Language. Workato's recipe functions → SnapLogic child pipelines. No automated migration tool — manual rebuild required.
- **From MuleSoft**: Map flows → pipelines, processors → Snaps, DataWeave → Expression Language + Mapper Snap. MuleSoft's API-led layers (experience/process/system) → SnapLogic pipeline hierarchy + API Management 3.0. Expect 9-12 months for comprehensive migration.
- **From Boomi**: Map processes → pipelines, shapes → Snaps, maps → Mapper Snap. Boomi Data Hub → no direct equivalent (use external MDM). Boomi's per-connection model → SnapLogic's task-based model (may reduce costs for high-connection scenarios).
