# MuleSoft Platform Reference

## Platform overview

MuleSoft (Anypoint Platform) is Salesforce's enterprise integration and API management platform — the industry standard for API-led connectivity. Acquired by Salesforce in 2018 for $6.5B. Core differentiator: treating every integration as a reusable API product, organized into system/process/experience layers. Target audience is mid-to-large enterprises (100+ employees) with complex multi-system landscapes (ERP, CRM, databases, SaaS). Not recommended for small teams with simple integrations (use Zapier/Make instead). Pricing starts at ~$50K/year and scales with vCores, connectors, and support tiers.

## Key modules

### Design Center
- **API Designer**: Browser-based editor for RAML and OpenAPI (OAS) specifications. Visual and code modes.
- **Flow Designer**: Visual integration builder for simple flows (alternative to Anypoint Studio for basic use cases).
- **API specifications**: Define request/response schemas, data types, resource hierarchies. Publish to Exchange.
- **Key concept**: "API-first design" — write the spec before coding the implementation.

### Anypoint Studio
- **What**: Desktop IDE for building Mule applications. Eclipse-based.
- **Core features**: Visual flow canvas (drag-and-drop connectors), XML-based Mule config, DataWeave editor, built-in debugger, MUnit testing framework.
- **Alternatives**: Anypoint Code Builder (VS Code-based, lighter weight, cloud-hosted option).
- **Known issues**: Memory-hungry, crashes on large projects, misleading error messages (see Troubleshooting in SKILL.md).

### Anypoint Code Builder
- **What**: Modern development environment based on VS Code. Available as desktop (VS Code extension) or cloud-hosted.
- **Advantages over Studio**: Lighter weight, better performance, familiar VS Code interface, cloud-accessible.
- **When to use**: New projects, developers who prefer VS Code, teams wanting cloud-based development.

### Exchange
- **What**: Asset repository for the MuleSoft ecosystem. Think "app store for integrations."
- **Assets**: API specifications, connectors, templates, examples, custom policies, DataWeave libraries.
- **450+ connectors**: Pre-built connectors for Salesforce, SAP, Workday, ServiceNow, AWS, Azure, databases, file systems, messaging, and more.
- **Premium connectors**: SAP, Oracle, Workday, Siebel, PeopleSoft carry additional annual licensing fees.
- **Custom connectors**: Build with MuleSoft Connector DevKit or XML SDK. Publish to private Exchange for org-wide reuse.

### Runtime Manager
- **What**: Deploy, monitor, and manage Mule applications across all deployment targets.
- **Deployment targets**: CloudHub (fully managed), CloudHub 2.0 (shared responsibility), Runtime Fabric (self-managed Kubernetes), on-premises Mule runtime.
- **Monitoring**: Application logs, performance dashboards, alerts, worker status.
- **REST API**: Programmatic management via `https://anypoint.mulesoft.com/hybrid/api/v1`.

### API Manager
- **What**: Govern, secure, and monitor APIs post-deployment.
- **Policies**: Out-of-the-box policies for authentication (OAuth 2.0, JWT, Basic Auth, SAML), rate limiting, throttling, IP whitelisting, CORS, header injection, message logging.
- **Custom policies**: Build with Flex Gateway PDK or Mule Gateway SDK.
- **SLA tiers**: Define access levels with request quotas. Require approval for higher tiers.
- **API Autodiscovery**: Automatically register Mule apps with API Manager for lifecycle tracking.
- **Analytics**: Total requests, policy violations, HTTP errors (4xx/5xx), response times (1-minute aggregation).
- **API Governance**: Test API instances against compliance rulesets. Identify missing policies, TLS contexts, versioning issues.

### Flex Gateway
- **What**: Lightweight API gateway for cloud, on-prem, or edge deployments.
- **Modes**: Connected (managed via API Manager) or Local (standalone configuration).
- **Use cases**: API gateway at the edge, Kubernetes ingress, service mesh sidecar.
- **Advantage over Mule Gateway**: Lower resource footprint, faster startup, Envoy-based.

### MuleSoft Composer
- **What**: No-code integration tool built into Salesforce. Designed for business users and Salesforce admins.
- **Capabilities**: Connect Salesforce to external apps (Google Sheets, Slack, Workday, NetSuite, Jira, etc.) without code.
- **Governance**: Same security, monitoring, and access control as Anypoint Platform.
- **Limitation**: Covers simple point-to-point integrations only. Complex transformations or multi-step orchestrations require Anypoint Studio.
- **Licensing**: Included in some Salesforce editions or available as add-on.

### MuleSoft RPA
- **What**: Robotic Process Automation for automating repetitive tasks with bots.
- **Capabilities**: Process automation, web scraping, document processing, data entry, form filling.
- **Integration**: Orchestrate RPA bots from Mule flows. Combine API-based integration with UI-based automation.
- **Use case**: Automate legacy systems that don't have APIs (mainframes, desktop apps, green screens).

### MuleSoft IDP (Intelligent Document Processing)
- **What**: AI-powered extraction of structured data from unstructured documents.
- **Capabilities**: Invoice processing, purchase orders, contracts, forms — extract fields, tables, signatures.
- **Integration**: Feed extracted data into Mule flows for downstream processing.

### DataWeave
- **What**: MuleSoft's proprietary functional data transformation language.
- **Purpose**: Transform data between formats (JSON ↔ XML ↔ CSV ↔ flat files ↔ Java objects ↔ custom formats).
- **Key concepts**:
  - `---` separator between header and body
  - `map` for array iteration
  - `flatMap` for nested-to-flat transformations
  - `filter`, `reduce`, `groupBy` for data manipulation
  - `default` operator for null handling
  - `as` operator for type coercion
  - `match/case` for pattern matching
  - Modules: `dw::core::Strings`, `dw::core::Arrays`, `dw::core::Objects`
- **DataWeave Playground**: Browser-based testing environment — test transformations with sample data before deploying.
- **CLI**: `data-weave-cli` (open source, 111 stars on GitHub) for running DataWeave scripts locally.
- **Learning curve**: Significant. Proprietary syntax with no direct equivalent. Budget 2-4 weeks for developers to become productive.

### Einstein for MuleSoft / AI features
- **MuleSoft Dev Agent**: AI assistant that generates integration code, suggests configurations, explains errors. Natural language → Mule app.
- **AI Gateway**: Intelligent routing, cost controls, and policy enforcement across AI providers from a single control point.
- **Agent Fabric**: Enable Agentforce AI agents to access enterprise data and actions via MuleSoft integrations.
- **MCP Support**: Model Context Protocol support for connecting AI agents to MuleSoft-powered APIs and actions.

## Pricing and limits

MuleSoft does NOT publish simple tier pricing. Everything is custom-quoted.

### Pricing components
- **Platform subscription**: $15K-50K+/year for base Anypoint Platform access
- **vCores**: The primary scaling unit. CloudHub vCores cost ~$50K-70K per vCore per year
  - 0.1 vCore: Development/testing (500 MB heap)
  - 0.2 vCore: Light workloads (1 GB heap)
  - 1.0 vCore: Production standard (1.5 GB heap)
  - 2.0+ vCore: High-throughput production (3+ GB heap)
- **Premium connectors**: SAP, Oracle, Workday, Siebel — $5K-50K+ per connector per year
- **Support tiers**: Gold (standard), Platinum (faster response), Titanium (dedicated TAM)

### Subscription editions
- **Integration Starter**: Entry-level, limited connectors and features
- **Integration Advanced**: Full Anypoint Platform capabilities, all connectors

### Cost reality
- First-year total cost is often 2-3x the base subscription (implementation, training, premium connectors)
- Typical mid-market deployment: $100K-300K/year all-in
- Enterprise deployment: $500K-1M+/year
- Implementation partners charge $150-300/hour
- Certified MuleSoft developers command $120K-180K/year salaries

### Compared to alternatives
- MuleSoft is typically 30-50% more expensive than Boomi for equivalent workloads
- Workato starts at ~$10K/year but scales differently (recipe-based, not vCore-based)
- Zapier/Make: $20-100/month for simple integrations (different category entirely)

## Integrations

### Native Salesforce integration
- **Salesforce Connector**: Connect to Salesforce SOAP API, REST API, Bulk API, Streaming API
- **Data Cloud Connector**: Ingest data into Salesforce Data Cloud
- **Platform Events**: Real-time event-driven integration between Salesforce and MuleSoft
- **Composer**: No-code Salesforce-native integrations
- **AppExchange**: MuleSoft apps available on Salesforce AppExchange
- Companies using MuleSoft for Salesforce integration build apps 57% faster (Salesforce benchmark)

### Connector categories
- **Enterprise apps**: SAP, Oracle, Workday, ServiceNow, NetSuite, PeopleSoft, Siebel
- **Cloud platforms**: AWS (S3, SQS, SNS, Lambda), Azure (Blob, Service Bus), GCP
- **Databases**: MySQL, PostgreSQL, Oracle DB, SQL Server, MongoDB, Cassandra
- **Messaging**: Anypoint MQ, RabbitMQ, Kafka, JMS, AMQP
- **File systems**: FTP/SFTP, S3, Azure Blob, local file system
- **Protocols**: HTTP/HTTPS, SOAP, REST, GraphQL, gRPC, WebSockets
- **Identity**: LDAP, SAML, OAuth 2.0, OpenID Connect

### Third-party integration
- **Zapier**: MuleSoft APIs can be exposed as Zapier triggers/actions
- **Make**: Connect via HTTP module to MuleSoft-deployed APIs
- **iPaaS competitors**: Boomi, Workato, Tray.io, Celigo (MuleSoft is the enterprise tier)

## Data model (Anypoint Platform)

### Key concepts
- **Organization**: Top-level container. Maps to a company.
- **Business Group**: Sub-division within an org. Separate environments, assets, permissions.
- **Environment**: Deployment target (Production, Sandbox, Design). Each environment has its own apps, APIs, and configurations.
- **Application**: A deployed Mule app running on a worker (vCore allocation).
- **API Instance**: A managed API registered in API Manager with policies, SLA tiers, and analytics.
- **Asset**: Anything published to Exchange (API spec, connector, template, example).
- **Worker**: A compute unit in CloudHub that runs your Mule application. Sized by vCores.

### Identifiers
- **Organization ID (ORG_ID)**: UUID for your org — found at `/accounts/api/me`
- **Environment ID (ENV_ID)**: UUID for each environment — found at `/accounts/api/organizations/{ORG_ID}/environments`
- **Application ID**: Unique within an environment
- **API Instance ID**: Unique within API Manager

## Deployment options

### CloudHub (legacy, fully managed)
- **Model**: Salesforce hosts and manages everything
- **Workers**: Dedicated per-app vCore allocation
- **Regions**: US, EU, APAC, more
- **Shared load balancer**: Free, included
- **Dedicated load balancer**: Available for custom domains, SSL termination
- **Object Store**: Built-in key-value store (per-app, per-region)
- **Limitation**: No Kubernetes access, limited customization

### CloudHub 2.0 (new default)
- **Model**: Shared responsibility — Salesforce manages infrastructure, you manage apps
- **Improvements**: Better autoscaling, resource efficiency, Kubernetes-native
- **Replicas**: Scale horizontally by adding replicas instead of larger workers
- **Private Space**: Isolated network with VPN/Transit Gateway connectivity

### Runtime Fabric (self-managed)
- **Model**: MuleSoft runtime on your own Kubernetes cluster
- **Use case**: Organizations with existing K8s infrastructure and specific compliance/network requirements
- **Advantage**: Full control over compute, networking, security
- **Requirement**: Kubernetes expertise, infrastructure management

### On-premises (standalone)
- **Model**: Mule runtime installed on your own servers (no Kubernetes required)
- **Use case**: Air-gapped environments, strict data residency, legacy infrastructure
- **Limitation**: No cloud management features, manual scaling

## API-led connectivity (architecture pattern)

MuleSoft's recommended architecture pattern organizes APIs into three layers:

### System APIs (bottom layer)
- **Purpose**: Connect directly to backend systems (ERP, databases, SaaS apps)
- **Examples**: "SAP Order API", "Salesforce Account API", "MySQL Customer API"
- **Characteristics**: Thin wrappers, minimal business logic, system-specific

### Process APIs (middle layer)
- **Purpose**: Orchestrate business logic across multiple system APIs
- **Examples**: "Order Fulfillment API", "Customer Onboarding API", "Lead Routing API"
- **Characteristics**: Business rules, data aggregation, cross-system coordination

### Experience APIs (top layer)
- **Purpose**: Serve specific channels or applications
- **Examples**: "Mobile App API", "Partner Portal API", "IoT Dashboard API"
- **Characteristics**: Channel-optimized, may combine data from multiple process APIs

### Why this matters
- **Reusability**: System APIs are reused across multiple process and experience APIs
- **Agility**: Change a channel (new mobile app) without touching backend integrations
- **Governance**: Clear ownership boundaries — system team owns system APIs, business team owns process APIs

## Deep dives

### MUnit (testing framework)
- **What**: Built-in testing framework for Mule applications
- **Capabilities**: Unit tests for flows, mock processors, assertions, spy processors
- **Integration**: Runs in Anypoint Studio, Maven, CI/CD pipelines
- **Known issues**: MUNIT with Maven can produce misleading test results (Capterra complaint). Always verify locally before trusting CI results.

### CI/CD setup
- **Mule Maven Plugin**: Deploy Mule apps from Maven/Gradle
- **GitHub/GitLab/Azure DevOps**: Standard CI/CD pipelines with Maven-based build and deploy
- **Anypoint CLI**: Command-line interface for platform operations
- **Note**: CI/CD pipeline integration requires significant custom DevOps work — not included out-of-the-box

### Performance tuning
- **Thread pools**: Configure connector-specific thread pools for throughput optimization
- **Batch processing**: Use Batch module for large data volumes (ETL, data migration)
- **Caching**: Use Object Store or Cache scope to reduce redundant API calls
- **Streaming**: Use streaming for large payloads to avoid memory issues (repeatable vs non-repeatable streams)
