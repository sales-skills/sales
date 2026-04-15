# Workato Platform Reference

## Platform overview

Workato is an enterprise iPaaS (Integration Platform as a Service) and automation platform, recognized as an 8x Leader in Gartner's Magic Quadrant for iPaaS. Positioned as "Enterprise MCP for Agentic AI | Built on the #1 iPaaS." Serves enterprise IT, RevOps, HR, Finance, and Support teams. Target audience: IT teams building enterprise integrations, business users automating multi-app workflows, and SaaS vendors embedding integrations into their products.

**Key differentiator vs MuleSoft**: Workato is low-code/recipe-based (business users can build), faster time-to-value, 1,200+ connectors vs 450+. MuleSoft is code-heavy (DataWeave/Java), better for complex API-led architecture and deep Salesforce integration. MuleSoft needs certified developers ($120-180K salary); Workato can be operated by technical business users.

**Key differentiator vs Boomi**: Workato is automation-first (recipe-based, easier for business users). Boomi is more enterprise-grade for data (MDM, EDI built-in) but has per-connection pricing that spirals. Workato's task-based pricing can also spiral but is more predictable for high-connection-count scenarios.

**Key differentiator vs Celigo**: Celigo excels for NetSuite-centric and eCommerce integrations (300+ pre-built flows). Workato has broader enterprise coverage (1,200+ connectors), stronger API management, and Agent Studio for AI. Celigo is typically cheaper for mid-market NetSuite shops.

## Key modules

### Recipes (core automation)
- **Recipe builder**: Visual drag-and-drop interface for building integrations and automations. Each recipe has a trigger (event that starts it) and one or more actions (what happens).
- **Triggers**: Polling (scheduled check), real-time webhooks, scheduled (cron), or app-specific triggers.
- **Actions**: CRUD operations on connected apps, conditional logic (IF/ELSE), loops, error handling, data mapping.
- **Formulas**: Built-in formula mode for data transformation — string manipulation, date formatting, number conversion, list operations.
- **Recipe functions**: Reusable sub-recipes that can be called from other recipes (like functions in code).
- **Lookup Tables**: Key-value reference tables stored in Workato (100K row limit). Useful for mapping codes, translations, and reference data.
- **Parallel processing**: Recipes can process triggers concurrently for higher throughput.

### Connectors (1,200+)
- **Pre-built connectors**: Salesforce, SAP, Oracle NetSuite, Workday, ServiceNow, Slack, Microsoft 365, Google Workspace, Snowflake, AWS, Jira, Zendesk, Marketo, HubSpot, Shopify, Stripe, and hundreds more.
- **Universal HTTP connector**: Connect to any REST API without a pre-built connector.
- **Connector SDK**: Build custom connectors using Ruby-based DSL. Publish to your workspace or share via Workato Community Library.
- **GraphQL support**: Native GraphQL connector for APIs that use GraphQL.
- **On-prem Agent**: Secure tunnel to connect cloud recipes to on-premises databases, file systems, and applications behind firewalls.
- **AI connectors**: Pre-built connectors for OpenAI, Google Gemini, Amazon Bedrock, Azure OpenAI for integrating AI into workflows.

### API Management
- **API Platform**: Full-lifecycle API management — create, deploy, manage, and consume APIs from the Workato platform.
- **Recipe endpoints**: Expose any recipe as a REST API endpoint (callable externally).
- **Proxy endpoints**: Pass-through to existing APIs with added rate limiting, auth, and monitoring.
- **API Collections**: Group endpoints into collections for organization and access control.
- **API Clients + Access Profiles**: Control who can call your APIs with API keys and OAuth 2.0.
- **API Developer Portal**: Self-service portal for API consumers with docs, credential management, and endpoint testing.
- **Rate limiting**: Configurable per-client rate limits.

### MCP Gateway
- **MCP Servers**: Create and manage Model Context Protocol (MCP) servers that expose Workato recipe actions as tools for AI agents (Claude, ChatGPT, etc.).
- **Tool assignment**: Assign specific recipe-based tools to MCP servers.
- **User group access**: Control which user groups can access each MCP server.
- **Server policies**: Configure policies governing MCP server behavior.
- **Token-based auth**: Dedicated authentication tokens for MCP server connections.

### Agent Studio (Genies)
- **Genies**: Pre-built and custom AI agents for IT, Sales, HR, Support, CX, and Marketing automation.
- **Skills**: Modular capabilities assigned to Genies — each skill maps to a recipe or set of recipes the agent can invoke.
- **Knowledge Bases**: Upload documents and data sources that agents reference when answering questions or making decisions.
- **User Group Access**: Control which teams can interact with which agents.
- **Start/Stop lifecycle**: Agents can be started/stopped via API for deployment control.

### Data Tables
- **Structured storage**: Create relational-style tables inside Workato with custom columns.
- **Record CRUD**: Create, query, update, delete records via recipes or API.
- **File attachments**: Upload files to record fields.
- **Larger than Lookup Tables**: Designed for structured data beyond Lookup Table's 100K row limit.
- **Query filters**: Filter records using SQL-like conditions.

### Event Streams
- **Topics**: Named channels for publishing and consuming messages.
- **Pub/Sub model**: Multiple recipes can publish to a topic; multiple recipes can consume from it.
- **Real-time**: Events are delivered in near-real-time.
- **External access**: Public APIs for publishing/consuming from outside Workato.
- **Batch publishing**: Send multiple messages in a single API call.

### B2B/EDI
- **Trading partner management**: Define partners, communication protocols, and document formats.
- **EDI document support**: X12, EDIFACT, and custom formats.
- **AS2/SFTP transport**: Secure document exchange over standard B2B protocols.

### Embedded iPaaS
- **For SaaS vendors**: Embed Workato's integration capabilities into your product.
- **White-label**: Customize the UI with your branding.
- **Customer workspaces**: Each of your customers gets isolated integration workspaces.
- **Embed Partner Program**: Revenue sharing — earn 10% of customer's first-year ARR as credit.

### Intelligent Document Processing (IDP)
- **AI-powered extraction**: Extract structured data from invoices, receipts, contracts, and other documents.
- **Template-free**: Works without pre-defining document templates.
- **Integration**: Feed extracted data directly into recipes for downstream processing.

## Pricing and limits

**Pricing model**: Consumption-based with platform edition fee + usage-based tasks.

| Edition | Best for | Key capabilities |
|---|---|---|
| **Standard** | Basic integration needs | Core recipes, connectors, security |
| **Business** | Growing teams | Everything in Standard + more governance |
| **Enterprise** | Large organizations | Full platform including RLCM, advanced governance |
| **Workato One** | Full platform + AI | Everything including Agent Studio, MCP Gateway |

**What's included in all editions**: Unlimited connections, unlimited workflows, unlimited collaborators, security & data protection, RBAC governance, in-product support.

**Consumption billing**: Tasks are the unit of consumption. 1 task = 1 action executed inside a recipe. API Management and Event Streams have separate consumption meters.

**Indicative pricing** (from third-party sources — contact Workato for actuals):
- Mid-market: $15,000-$50,000/year
- Enterprise: $25,000-$100,000+/year
- Entry: ~$10,000/year (Base Workspace)

**Data limits**:
- CSV parsing: 50,000 records per file
- Lookup Tables: 100,000 rows
- Data Tables: Higher limits (edition-dependent)
- Job history retention: Edition-dependent

**Overages**: Consumption is proactively tracked. Workato helps forecast and optimize, but recipes aren't hard-stopped at limit — monitor the Consumption Dashboard.

## Integrations

**1,200+ pre-built connectors** across categories:
- **CRM**: Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics
- **ERP**: SAP, Oracle NetSuite, Sage, Microsoft Dynamics 365
- **HR**: Workday, BambooHR, ADP, Greenhouse, Lever
- **IT/DevOps**: Jira, ServiceNow, PagerDuty, GitHub, GitLab, Datadog
- **Finance**: Stripe, QuickBooks, Xero, Netsuite, Coupa
- **Marketing**: Marketo, HubSpot, Mailchimp, Salesforce Marketing Cloud
- **Communication**: Slack, Microsoft Teams, Zoom, Twilio
- **Cloud**: AWS (S3, SQS, Lambda), Google Cloud, Azure
- **Database**: PostgreSQL, MySQL, SQL Server, Oracle, Snowflake, BigQuery, Redshift
- **AI**: OpenAI, Google Gemini, Amazon Bedrock, Azure OpenAI
- **File Storage**: Box, Dropbox, Google Drive, SharePoint, S3

**Universal HTTP connector**: For any REST API not covered by a pre-built connector.

**On-prem Agent**: Secure agent installed behind your firewall for connecting to on-premises systems without VPN.

## Data model (API)

The Workato Developer API is organized around these core resources:

- **Recipes**: The fundamental automation unit. Has triggers, actions, connections, versions, health status.
- **Connections**: Authenticated links to external apps. Each connection stores credentials.
- **Jobs**: Individual recipe executions. Each job has a status, start/end time, and step-by-step logs.
- **Connectors**: Available integration connectors (pre-built + custom).
- **Folders/Projects**: Organizational containers for recipes and assets.
- **Data Tables**: Structured data storage with records.
- **Lookup Tables**: Key-value reference data.
- **Event Stream Topics**: Pub/sub message channels.
- **Genies**: AI agents with assigned skills and knowledge bases.
- **MCP Servers**: Model Context Protocol servers with assigned tools and policies.
- **API Collections/Endpoints/Clients**: API Management assets.
- **Members/User Groups/Roles**: Workspace governance.
- **Deployments**: Environment promotion with review workflow.

## Workflow setup

### Recipe building (most common workflow)

1. **Create a connection**: Settings → Connections → New → select app → authenticate.
2. **Create a recipe**: New Recipe → name it → select trigger app and event.
3. **Configure trigger**: Choose the specific trigger event (e.g., "New record in Salesforce") and set filters.
4. **Add actions**: Click "+" to add steps — select app, choose action, map fields from trigger data.
5. **Add conditions**: Use IF/ELSE for conditional logic, loops for batch processing.
6. **Add error handling**: Wrap steps in Monitor → On Error blocks with notification actions.
7. **Test**: Run with test data using the built-in tester. Use step-skip to isolate specific actions.
8. **Start**: Activate the recipe. Monitor via Jobs tab.

### Environment promotion (RLCM)

1. **Build in dev**: Create and test recipes in development workspace.
2. **Create export manifest**: Select assets to promote (recipes, connections, lookup tables).
3. **Export package**: Generate a versioned package from the manifest.
4. **Import to staging/prod**: Import the package into the target environment.
5. **Review deployment**: Assign reviewers, submit for review, approve/reject.
6. **Deploy**: Execute the deployment to activate promoted recipes.

### MCP Server setup

1. **Create MCP Server**: Agent Studio → MCP Servers → Create.
2. **Assign tools**: Map recipe endpoints as tools the MCP server exposes.
3. **Set user groups**: Control access to the MCP server.
4. **Configure policies**: Set server-level policies for tool execution.
5. **Get connection URL**: Use the MCP server URL + auth token to connect AI agents (Claude, etc.).

## Deep dives

### Cost optimization strategies

1. **Audit task consumption**: Consumption Dashboard → sort recipes by task usage. Identify the top 10 consumers.
2. **Reduce unnecessary actions**: Remove redundant steps. Use conditional logic to skip actions that don't need to run for every trigger.
3. **Batch processing**: Process multiple records per recipe run instead of one-at-a-time.
4. **Optimize trigger frequency**: Use polling triggers with longer intervals for non-time-sensitive data.
5. **Use recipe functions**: Extract common logic into reusable functions called by multiple recipes — reduces duplication.
6. **Monitor proactively**: Set consumption alerts at 70% and 90% of plan limits.
7. **Right-size your edition**: If you're only using basic features, Standard may suffice. Don't pay for Enterprise features you don't use.

### Debugging recipes

1. **Job Debug Tracing**: Enable per-job to see full HTTP request/response for each action. Shows headers, payloads, and responses.
2. **Network Tracing**: Connector-level debugging for authentication and connectivity issues.
3. **Step-by-step testing**: Use the recipe tester to run one step at a time. Skip steps to isolate failures.
4. **Error handling patterns**:
   - Monitor → On Error: Catch errors from specific steps and handle gracefully. Configure up to 3 retries with 1-10 second intervals. Use optional "Retry IF" toggle for conditional retries.
   - On Error datapills: `error[type]`, `error[message]`, `error[retry_count]`, `error[uuid]`, `error[line_number]`, `error[adapter]`, `error[action]`, `error[inner_message]`.
   - Structured error fields: `error_type_id` (stable identifier, e.g., `err.http.response.client_error.not_found`), `error_id` (unique instance), `http_response` (status code, headers, body).
   - Stop Job step: End recipe early on critical errors — use within conditional branches with error datapills for context.
   - Dead letter pattern: Log failed records to a Data Table for manual review.
   - Custom error alerts: Use "Email by Workato" action within On Error blocks with error datapills + Recipe URL + Job URL properties.
5. **Common error types**:
   - Design-time errors: Caught before recipe starts — fix mapping/configuration.
   - Runtime errors: Occur during execution — check job logs for HTTP status codes.
   - Timeout errors: Long-running actions exceeding limits — break into smaller batches.
   - **Note**: API recipe Handle Errors steps do NOT trigger on API request timeouts — this is a known limitation.

### Workato vs competitors decision framework

| Factor | Workato | MuleSoft | Boomi | Celigo |
|---|---|---|---|---|
| **Learning curve** | Low-medium | High (DataWeave) | Medium | Low |
| **Time to first integration** | Hours-days | Weeks-months | Days-weeks | Hours-days |
| **Connector count** | 1,200+ | 450+ | 1,000+ | 300+ |
| **API management** | Built-in | Best-in-class | Built-in | Basic |
| **AI agents** | Agent Studio + MCP | Agent Fabric + MCP | AgentStudio + MCP | None |
| **Pricing model** | Task-based | vCore-based | Connection-based | Transaction-based |
| **Best for** | Business automation | API-led architecture | Enterprise data | NetSuite/eCommerce |
| **Typical cost** | $15K-100K/yr | $50K-200K+/yr | $7K-100K+/yr | $10K-50K/yr |
| **Build vs buy** | Low-code (build fast) | Code-heavy (build right) | Low-code (visual) | Pre-built (configure) |
| **Team needed** | Technical business users | Certified MuleSoft devs | Integration developers | Integration admins |
