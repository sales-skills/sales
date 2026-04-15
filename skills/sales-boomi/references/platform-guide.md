# Boomi Platform Reference

## Platform overview

Boomi ("The Data Activation Company") is a cloud-native enterprise integration platform (iPaaS) that connects applications, APIs, data, and AI agents. Owned by Dell Technologies (spun out as independent entity in 2022, Francisco Partners/TPG Capital). Positioned #1 in Gartner Magic Quadrant for iPaaS (2026) and API Management (2025). Serves 30,000+ customers across industries. Target audience: mid-market to enterprise IT teams, integration architects, and business users via low-code/no-code interfaces.

**Key differentiator vs MuleSoft**: Cloud-native from day one (no on-prem legacy), visual drag-and-drop process builder (vs MuleSoft's code-heavy DataWeave), lower entry cost (~$550/mo vs $6K+/mo), faster learning curve, 1000+ pre-built connectors. MuleSoft excels for complex API-led architecture and organizations deeply invested in the Salesforce ecosystem.

**Key differentiator vs Workato**: Boomi is more enterprise-grade (MDM, EDI, API management built-in). Workato is more automation-focused (recipe-based, easier for business users). Boomi handles complex data transformations and enterprise patterns better; Workato handles multi-app workflow automation better.

## Key modules

### Integration (core)
- **Visual process builder**: Drag-and-drop canvas for building integration flows. Process shapes: Start, Map, Decision, Route, Branch, Flow Control, Try/Catch, Stop.
- **1000+ pre-built connectors**: SAP, Salesforce, ServiceNow, Oracle NetSuite, Workday, AWS (S3, SQS, SNS, Lambda), Snowflake, Stripe, Slack, Microsoft 365, Google Workspace, Shopify, HubSpot, and many more.
- **Technology connectors**: Database (JDBC), Disk, FTP/SFTP, HTTP Client, HTTP Server, Mail, JMS, AMQP, Kafka, MLLP (healthcare).
- **Data mapping**: Visual mapper with functions (string, date, math, lookup, cross-reference). Custom scripting via Groovy or JavaScript for complex transformations.
- **Connector SDK**: Build custom connectors for proprietary or niche systems. Java-based.
- **OpenAPI support**: Import/export OpenAPI 3.0 specs to auto-generate connector operations.

### API Management
- **Full API lifecycle**: Design (OpenAPI/Swagger), build, deploy, manage, monitor, retire.
- **API Gateway**: Flex Gateway (lightweight, Kubernetes-deployable) for traffic management, rate limiting, security policies.
- **API Governance**: Policy enforcement across all APIs — authentication, rate limiting, IP whitelisting, CORS, request/response transformation.
- **API Products**: Bundle APIs into products with SLA tiers, usage plans, and developer portal access.
- **Developer Portal**: Self-service portal for API consumers with documentation, sandbox, and key management.

### Data Hub (Master Data Management)
- **Golden records**: Merge and reconcile data from multiple sources into a single trusted record.
- **Match rules**: Configurable fuzzy matching for deduplication across sources.
- **Data quality**: Validation rules, standardization, enrichment integration.
- **Quarantine**: Records that fail validation are quarantined for manual review.
- **Real-time sync**: Changes to golden records propagate to connected systems automatically.

### Flow (low-code)
- **Visual app builder**: Create forms, approval workflows, and lightweight apps without code.
- **User experience layer**: Build front-end experiences on top of integration processes.
- **Collaboration**: Multi-user collaboration with role-based access.
- **Mobile-responsive**: Apps work on desktop and mobile browsers.

### Event Streams
- **Event-driven architecture**: Publish/subscribe messaging for real-time integrations.
- **Event topics**: Create topics for different event types (order placed, contact updated, etc.).
- **Guaranteed delivery**: At-least-once delivery with configurable retention.
- **Protocols**: AMQP, MQTT, Kafka-compatible.

### B2B/EDI Management
- **Trading partner management**: Onboard and manage trading partners with partner-specific configurations.
- **EDI standards**: X12, EDIFACT, HL7, HIPAA, RosettaNet.
- **Document tracking**: End-to-end visibility into B2B document flow.
- **AS2/SFTP**: Secure document exchange protocols.

### Task Automation (no-code)
- **RPA-adjacent**: Automate repetitive tasks without code — file moves, data entry, scheduled reports.
- **Scheduled execution**: Cron-like scheduling for recurring tasks.
- **Trigger-based**: Start tasks on file arrival, email receipt, or webhook.

### Agent Management & AI (new, 2025-2026)
- **AgentStudio**: Design, govern, and orchestrate AI agents.
- **Platform Agents**: Pre-built AI agents for common automation patterns.
- **Agent Connectivity**: Enterprise context for AI agents at scale.
- **MCP support**: Model Context Protocol for AI agent integration with Boomi processes.
- **Meta Hub**: Grounds AI agents with business context and metadata.
- **Responsible AI**: Governance, security, and auditability for AI workflows.

## Pricing and limits

> *Pricing is not publicly listed — all below is approximate from third-party sources (Vendr, Integrate.io, G2). Contact Boomi sales for exact quotes.*

| Edition | Approx. monthly cost | Connections | Key features |
|---|---|---|---|
| Pay-As-You-Go | $99/mo + usage | Limited | Testing, small projects |
| Professional | ~$550/mo | Up to 5 | Cloud Atoms, standard connectors, standard support |
| Enterprise | ~$1,200/mo | Unlimited | Multi-environment (dev/test/prod), API management, Flow |
| Enterprise Plus | Custom (higher) | Unlimited | Advanced MDM, EDI/B2B, dedicated CSM, enhanced support |

**Per-connection costs**: Each additional endpoint/connection is approximately ~$300/mo beyond what's included in your tier. Even basic connections (local disk, HTTP) count.

**Annual escalation**: Contracts typically include 3-7% annual price increases at renewal. Negotiate a cap upfront.

**Free trial**: 30 days, no credit card required.

**Premium connectors**: SAP, Workday, Oracle, and some ERP connectors may carry separate licensing fees ($5K-50K+/year) beyond the base subscription. Verify before planning.

## Integrations

### Pre-built connectors (1000+)
**CRM**: Salesforce, HubSpot, Microsoft Dynamics, Zoho, Pipedrive
**ERP**: SAP (S/4HANA, ECC, Business ByDesign), Oracle (NetSuite, E-Business Suite, Cloud), Workday, Infor
**Cloud**: AWS (S3, SQS, SNS, Lambda, DynamoDB), Azure (Service Bus, Blob, Functions), Google Cloud (Pub/Sub, BigQuery, Cloud Storage)
**Database**: Any JDBC-compatible (MySQL, PostgreSQL, SQL Server, Oracle DB), MongoDB, Cassandra
**Data warehouse**: Snowflake, BigQuery, Redshift, Databricks
**Collaboration**: Slack, Microsoft Teams, Microsoft 365, Google Workspace
**E-commerce**: Shopify, Magento, WooCommerce, Stripe, PayPal
**ITSM**: ServiceNow, Jira, Zendesk, Freshdesk
**HR**: Workday, BambooHR, ADP, UKG, Dayforce
**Marketing**: HubSpot, Mailchimp, Marketo, Salesforce Marketing Cloud

### Boomi Marketplace
Central hub for discovering pre-built:
- **Connectors**: Ready-to-deploy application connectors
- **Recipes**: Pre-built integration patterns (Salesforce-to-NetSuite, Workday-to-ADP, etc.)
- **Accelerators**: Industry-specific solution bundles
- **AI agents**: Pre-built platform agents

### Custom connectors
- **Connector SDK**: Java-based SDK for building custom connectors
- **HTTP Client connector**: For any REST API without a dedicated connector
- **OpenAPI import**: Auto-generate operations from OpenAPI/Swagger specs

## Deployment model

### Atom (runtime engine)
The Atom is Boomi's lightweight runtime engine that executes integration processes.

- **Atom Cloud** (Boomi-hosted): Fully managed, no infrastructure to maintain. Best for cloud-to-cloud integrations. Fastest to start.
- **Local Atom** (self-hosted): Install on your own server (Windows, Linux, Docker). Required for on-prem data sources that can't leave the network. You manage the server, Boomi manages the software.
- **Molecule** (clustered Atoms): Multiple Atoms working together for high availability and load balancing. Required for production workloads needing fault tolerance. Shared file system between nodes.
- **Atom Cloud 2.0**: Next-gen hosted runtime with better isolation and scaling.

### Environment management
- **Environments**: Separate environments for dev, test, production
- **Deployment**: Package → Deploy → Attach to Environment → Execute
- **Environment Extensions**: Manage environment-specific values (URLs, credentials, connection strings) without modifying processes

### Infrastructure requirements (self-hosted)
- **Minimum**: 2 CPU cores, 4 GB RAM, 10 GB disk
- **Recommended production**: 4+ CPU cores, 8+ GB RAM, SSD storage
- **JVM**: Java 11+ (bundled with installer)
- **Network**: HTTPS outbound to Boomi cloud services (no inbound ports required)

## Data model (Platform API)

### Key objects
- **Account**: Top-level tenant object (one per Boomi subscription)
- **Atom**: Runtime engine instance (Atom, Molecule, or Atom Cloud)
- **Environment**: Logical grouping (dev, test, prod) with attached Atoms
- **Component**: Any deployable artifact — Process, API, Connector Operation, Map, Profile
- **Process**: Integration flow definition (the main build artifact)
- **Deployment**: A packaged version of components deployed to an Environment
- **Execution Record**: Log of a process execution with status, timing, documents processed
- **Connector**: Pre-built or custom application connector
- **Environment Extension**: Environment-specific override values

### Relationships
Account → Environments → Atoms → Deployments → Execution Records
Account → Components (Processes, Maps, Profiles, Connectors)

## Workflow setup

### Building your first integration
1. **Create an Account** (or start 30-day trial)
2. **Set up an Atom** — Atom Cloud for cloud-to-cloud, Local Atom for on-prem
3. **Create a Process** — Build > New > Process
4. **Add Start shape** — choose connector (e.g., Salesforce) and operation (e.g., Query)
5. **Add processing shapes** — Map (transform data), Decision (conditional logic), Branch (parallel paths)
6. **Add End shape** — destination connector and operation (e.g., NetSuite Create)
7. **Test** — Run in test mode with sample data
8. **Deploy** — Package → Deploy to target environment
9. **Schedule or trigger** — Cron schedule, webhook trigger, or event-driven

### Common patterns
- **Sync pattern**: Poll source system → Transform → Upsert to destination (handles creates and updates)
- **Event pattern**: Listen for webhook/event → Process → Push to destination
- **Batch pattern**: Scheduled process → Bulk query → Transform → Bulk upsert
- **Pub/sub pattern**: Event Streams topic → Multiple subscriber processes

## Deep dives

### Error handling best practices
- **Try/Catch shapes**: Wrap error-prone steps (connectors, transformations) in Try/Catch
- **Exception types**: Catch by exception type (ConnectorException, MappingException, GenericException)
- **Error notifications**: Route caught exceptions to notification processes (email, Slack, logging system)
- **Retry logic**: Use custom properties + Decision shapes to implement retry with backoff
- **Dead letter patterns**: Route failed documents to a "dead letter" process or disk location for manual review

### Performance optimization
- **Parallel processing**: Use Flow Control shape with concurrent execution for independent operations
- **Batch sizing**: Process records in batches of 100-1000 (not one-by-one, not all-at-once)
- **Memory management**: For large files, use Disk connector as intermediate storage instead of in-memory processing
- **Connection pooling**: Enable connection pooling on database connectors to reduce connection overhead
- **Caching**: Use Process Properties or Cross Reference Tables for frequently accessed lookup data
- **JVM tuning**: Increase heap in `atom.vmoptions` (`-Xmx4096m` for production). Monitor GC pauses.

### Security
- **Authentication**: API tokens (recommended), username/password, OAuth 2.0 for connector auth
- **Encryption**: All data in transit via TLS. At-rest encryption for Document Logging and Data Hub.
- **Access control**: Role-based access (Admin, Developer, Read-only). Environment-level permissions.
- **Audit logging**: All user actions and process executions logged with timestamps and user IDs.
- **Network security**: Local Atoms only need outbound HTTPS — no inbound ports required. Use Atom Workers for additional isolation.
