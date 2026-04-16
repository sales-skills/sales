# Tray.ai Platform Reference

<!-- Sources: https://tray.ai, https://tray.ai/documentation, G2/Capterra review snippets (Nov 2025), IsDown status page, Slashdot alternatives listing. Public pricing data is conflicting — verify with Tray sales. -->

## Platform overview

Tray.ai (rebranded from Tray.io in 2024) is an enterprise Integration Platform as a Service (iPaaS) and AI-ready workflow automation platform. Positioned as an API-first iPaaS that unifies Intelligent iPaaS, Enterprise Core governance, and Merlin Agent Builder into one connected platform. Target audience: technical integration engineers and SaaS/ISV OEMs embedding integrations in their products. Founded 2012 with iPaaS, added Tray Embedded in 2020, rebranded to Tray.ai in 2024 with heavy AI/agent pivot.

**Key differentiator vs Workato**: Tray is API-first and JavaScript-leaning — better fit for technical integration engineers who want flexibility and custom connector development. Workato is recipe-based and business-user-friendly with faster time-to-value and broader connector coverage (1,200+ vs 700+).

**Key differentiator vs MuleSoft**: Tray is lower-code and faster to deploy than MuleSoft's API-led architecture. MuleSoft requires certified developers and is better suited for complex API-led enterprise architecture and deep Salesforce integration. Tray is lighter on code but more flexible than recipe-based tools.

**Key differentiator vs Boomi**: Boomi is more enterprise-grade for data integration (Data Hub MDM, B2B/EDI depth). Tray is stronger on Embedded iPaaS for SaaS vendors and on AI-native workflow automation (Merlin Agent Builder launched Dec 2024).

**Key differentiator vs Celigo**: Celigo is NetSuite-centric and strong for eCommerce-ERP flows. Tray has broader horizontal enterprise coverage and much deeper Embedded iPaaS maturity for SaaS vendors.

## Key modules

### Intelligent iPaaS (core integration engine)
- **Workflow builder**: Visual step-based builder. Each workflow has a trigger (event that starts it) and ordered steps (connector operations, logic, transformations).
- **Triggers**: Webhook, scheduled (cron), manual, app-specific triggers, agent-invoked.
- **Steps**: Connector operations (CRUD on external apps), branching (IF/ELSE), loops, JSON transform, JavaScript (V8-based), error handling.
- **Data mapping**: JSONPath-style expressions. Output of any previous step can be referenced in any subsequent step.
- **Connects structured and unstructured data**: Documents, APIs, databases, files.
- **700+ prebuilt connectors** (as of 2026).

### Connectors (700+)
- **Pre-built connectors**: Salesforce, HubSpot, NetSuite, SAP, Oracle, Workday, ServiceNow, Slack, Google Workspace, Marketo, Segment, Zendesk, Outreach, Stripe, Microsoft 365, DataFox, Ambassador, Rare.io, Customer.io, Jotform, Brandfolder, Ironclad, and many more.
- **HTTP Client connector**: Call any REST API without a dedicated connector.
- **GraphQL connector**: Call GraphQL APIs.
- **Connector Development Kit (CDK)**: Build custom connectors. Primary SDK is `falafel` — a Node.js framework for Tray connectors (23 stars on GitHub, `github.com/trayio/falafel`).
- **Call connector endpoint**: Programmatic connector invocation via the Embedded API.

### Merlin Agent Builder (AI agents)
- **Launched December 2024**, updated June 2025. Tray's AI agent development module.
- **Model support**: OpenAI, Anthropic Claude, Google Gemini, Meta Llama.
- **Memory**: Short-term and long-term memory built into the agent runtime.
- **Agent Accelerators**: Pre-built agent templates for common use cases — knowledge retrieval, IT ticketing, customer support.
- **Agent Hub**: Centralized management for agents, data sources, tools, and interaction channels (including Slack).
- **Tools = workflows**: Agents invoke Tray workflows as tools, giving them access to 700+ connectors.
- **MCP support**: Model Context Protocol support (`mcp-remote` repo in `trayio` GitHub org).

### Tray Embedded (white-label iPaaS for SaaS vendors)
- **For SaaS/ISV OEMs**: Embed Tray's integration capabilities into your product so your customers can connect their own tools.
- **Solutions**: Reusable workflow templates built once by your team.
- **Solution Instances**: Per-end-user copies of a Solution. Each end user gets isolated instances.
- **Configuration Wizard**: White-label UI that end users see to authenticate external apps and set config values.
- **Config Values / Auth Values**: Parameters passed to Solution Instances at creation and update time.
- **Trigger URLs**: Each Solution Instance has workflow-level trigger URLs that external systems call to execute workflows.
- **Whitelabel OAuth**: Redirect URLs use `{your_org_name}.integration-authentication.com/oauth2/token` (vs default `auth.tray.io/oauth2/token`).
- **Sample app**: `github.com/trayio/embedded-edition-sample-app` (Apollo GraphQL based, actively maintained).

### Enterprise Core (governance)
- **Security & compliance**: SOC 2 Type II, GDPR, HIPAA-ready.
- **Admin**: Workspace management, user management, audit logging.
- **SSO/SAML**: Enterprise-tier only.
- **Audit logging**: Enterprise-tier only.
- **Custom data retention**: Enterprise-tier only.

### API Management
- **Rate limiting and throttling**: Platform-level controls for APIs exposed from Tray.
- **Request governance layer**: Released via recent capability update (2024-2025).
- **Exposes workflows as APIs**: Pattern similar to Workato/SnapLogic — workflow endpoints become callable APIs.

### Tray UAC (User Authentication & Access Control)
- Controls who can access what within a workspace — workflows, connections, Solutions, agents.

### Connector Development Kit (CDK)
- **falafel** (Node.js framework): Primary custom-connector SDK. Published on GitHub as `github.com/trayio/falafel`.
- **CDK Examples**: Public repo at `github.com/trayio/CDK-examples-public` (7 stars).
- **Connector testing**: `script-connector-tester` and `connector-tester-public` on GitHub for testing custom connectors.
- **embedded-customjs-public**: For custom JavaScript in embedded deployments.

## Pricing and limits

**Pricing model**: Usage-based — tasks (workflow steps), API calls, connected users. Sales-led — no public self-service signup.

**⚠️ Conflicting public data** — use only as directional. Tray's actual pricing is quote-based and varies by contract:

**Source A (lower-end reports)**:
| Tier | Price | Features |
|---|---|---|
| Professional | $99/month | Visual workflow builder, basic connectors, standard support |
| Business | $299/month | Advanced connectors, AI agent builder, priority support, enterprise security |
| Enterprise | $599/month | Unlimited workflows, advanced governance, custom connectors |

**Source B (enterprise-realistic reports)**:
| Tier | Price | Features |
|---|---|---|
| Pro | ~$595/month | 25,000 tasks/month, 400+ connectors, multi-step integrations, conditional logic, data mapping, error handling |
| Team | $1,800/month | 100,000 tasks |
| Enterprise | Custom (typically starts $36K/year) | Unlimited tasks, SSO/SAML, audit logging, custom data retention, dedicated CSM, SLA |

**Plan-gated (Enterprise-only)**:
- SSO / SAML
- Audit logging
- Custom data retention
- Dedicated CSM
- SLA guarantees
- Advanced governance
- Custom connectors (via CDK publishing to your org)
- Private Slack support channel
- 24/7/365 support with critical response SLAs

**Overages**: Task-based consumption is the most common source of bill shock. Tray does not hard-stop workflows at plan limits — monitor consumption proactively. Ask sales for consumption alerts and soft caps before signing.

## Integrations

**700+ pre-built connectors** across categories:
- **CRM**: Salesforce, HubSpot, Salesforce Service Cloud, Microsoft Dynamics 365, Outreach
- **ERP/Finance**: NetSuite, SAP, Oracle, Stripe
- **HR/ITSM**: Workday, ServiceNow
- **Marketing**: HubSpot, Marketo, Segment, DataFox, Ambassador, Rare.io
- **Communication**: Slack, Google Workspace, Microsoft 365
- **Customer Data**: Customer.io, Segment
- **Support**: Zendesk
- **Forms/Misc**: Jotform, Brandfolder, Ironclad
- **AI/LLM**: OpenAI, Anthropic Claude, Google Gemini, Meta Llama (via Merlin)

**HTTP Client connector**: For any REST API not covered by a pre-built connector.

**GraphQL connector**: For GraphQL APIs.

**Connector Development Kit (falafel)**: Node.js SDK for building custom connectors. Bidirectional sync supported; deep object coverage (e.g., Salesforce leads, contacts, custom objects/fields, workflow rules, outbound messages).

## Data model (API)

The Tray GraphQL API (Embedded API) is organized around these core resources:

- **Users**: End users of your embedded integration (Tray Embedded). Each has a unique user_id in your Tray org.
- **Authentications**: Stored OAuth/API-key credentials that a user has authorized.
- **Solutions**: Reusable workflow templates built by your team.
- **Solution Instances**: Per-end-user copies of a Solution, configured via Configuration Wizard or API.
- **Projects**: Organizational containers within workspaces.
- **Workflows**: The underlying automation unit. Each Solution Instance has workflows with their own trigger URLs.
- **Call Connector operations**: Programmatically invoke a connector from the API.
- **Workspaces**: Top-level org container.
- **Agents / Data sources / Tools / Interaction channels** (Merlin Agent Hub).

## Workflow setup

### Building a workflow (most common)

1. **Create a workspace project** (or use the default).
2. **Create a workflow**: New Workflow → name it → select trigger type.
3. **Configure trigger**: Webhook URL (generated automatically), scheduled (cron expression), or app-specific.
4. **Add steps**: Select connector → operation → map inputs from prior steps using JSONPath.
5. **Add branching / logic**: Use Conditional Branches, Loop Collections, JavaScript steps for custom logic.
6. **Add error handling**: Use try/catch pattern — wrap risky steps, route errors to Slack/logging connectors.
7. **Test**: Use Debug panel to step through with test payload. Inspect input/output at each step.
8. **Enable**: Enable the workflow. Monitor via Logs.

### Tray Embedded setup (SaaS vendor workflow)

1. **Build a Solution**: In your Tray org, create a Solution (reusable workflow template).
2. **Define Config Schema**: Specify what config values and auth values end users must provide.
3. **Design Configuration Wizard**: White-label the UI end users see. Match your product branding.
4. **Backend integration**: In your app's backend, call GraphQL `createSolutionInstance` with Master Token to provision an instance per end user.
5. **User Token flow**: Generate a User Token via `createUserToken` mutation for each end user; use this for per-user operations (`updateSolutionInstance`, `Get Solution Instances`).
6. **Embed Configuration Wizard**: Render the Wizard in your app via iframe or Tray's JS SDK (all API calls routed through your backend due to CORS).
7. **Monitor**: Use platform Logs to watch execution; surface errors to your end users via your product UI.

### Merlin Agent setup

1. **Create an Agent**: Agent Hub → New Agent → choose base model (OpenAI / Claude / Gemini / Llama).
2. **Define system prompt**: Role, behavior, constraints.
3. **Attach Data Sources**: Upload documents or connect data sources for knowledge.
4. **Attach Tools**: Expose existing Tray workflows as tools the agent can invoke.
5. **Configure Memory**: Short-term (session) and long-term (persistent across sessions).
6. **Set Interaction Channels**: Slack, web chat, MCP endpoint.
7. **Deploy**: Enable the agent. Monitor via Agent Hub dashboard.

## Deep dives

### Cost optimization strategies

1. **Audit task consumption**: Tray dashboard → workflow-level task usage view. Identify top 10 consumers.
2. **Reduce unnecessary steps**: Remove always-on logging/debugging steps. Use Conditional Branches to skip actions when not needed.
3. **Batch processing**: Where source APIs support batch reads, process multiple records per workflow run.
4. **Optimize trigger frequency**: Scheduled triggers — longer intervals for non-time-sensitive data. Webhook triggers don't consume extra tasks but downstream steps still count.
5. **Use JavaScript steps judiciously**: A single JavaScript step doing complex transforms costs 1 task; better than chaining 5 JSON Transform steps.
6. **Monitor proactively**: Set consumption alerts at 70% and 90% of plan limits. Ask CSM for soft caps.
7. **Negotiate at renewal**: Bring usage data, flag over-provisioning, renegotiate per-task pricing.

### Debugging workflows

1. **Debug panel**: Primary debugging tool. Shows input, output, and error for each step. Step through execution with test payloads.
2. **Workflow Logs**: Historical execution log. Search by trigger, status (success/error), timestamp.
3. **Connection status**: Connections page → verify each connection shows "Authenticated." Expired auths silently fail downstream.
4. **Call Connector API**: For programmatic debugging, invoke a specific connector operation via the Embedded API and inspect the raw GraphQL response (look for `errors` array on HTTP 200).
5. **GraphQL errors**: Tray returns HTTP 200 even on errors — always check `errors` field in GraphQL response.
6. **Regional URLs**: If calls return empty, verify you're using the correct regional base URL (US vs EU vs APAC).

### Tray Embedded vs competitors (for SaaS vendors)

| Factor | Tray Embedded | Workato Embedded | Prismatic | Paragon |
|---|---|---|---|---|
| **Launch year** | 2020 | ~2022 | 2020 | 2021 |
| **Connector count** | 700+ | 1,200+ | 300+ | 200+ |
| **Custom connector SDK** | falafel (Node.js) | Ruby DSL | TypeScript | JavaScript |
| **Target customer** | Mid-to-enterprise SaaS | Enterprise SaaS | SMB-to-mid SaaS | SMB-to-mid SaaS |
| **Pricing** | Custom, sales-led | Revenue-share (10% ARR) | Tiered + usage | Usage-based |
| **Best for** | API-first teams | Teams wanting broad coverage | Dev-first B2B SaaS | Fast time-to-market |

### Tray vs competitors decision framework

| Factor | Tray | Workato | MuleSoft | Boomi | Celigo |
|---|---|---|---|---|---|
| **Learning curve** | Medium (API-first) | Low-medium | High (DataWeave) | Medium | Low |
| **Time to first integration** | Hours-days | Hours-days | Weeks-months | Days-weeks | Hours-days |
| **Connector count** | 700+ | 1,200+ | 450+ | 1,000+ | 300+ |
| **API management** | Built-in | Built-in | Best-in-class | Built-in | Basic |
| **AI agents** | Merlin Agent Builder + MCP | Agent Studio + MCP | Agent Fabric + MCP | AgentStudio + MCP | None |
| **Pricing model** | Task-based (usage) | Task-based | vCore-based | Connection-based | Transaction-based |
| **Embedded iPaaS** | Yes (mature, 2020) | Yes (Embed Partner) | No | No | Yes (OEM) |
| **Typical cost** | $36K-100K+/yr | $15K-100K/yr | $50K-200K+/yr | $7K-100K+/yr | $10K-50K/yr |
| **Best for** | API-first technical teams + SaaS embedding | Business automation | API-led architecture | Enterprise data | NetSuite/eCommerce |
| **Team needed** | Technical integration engineers | Technical business users | Certified MuleSoft devs | Integration developers | Integration admins |

### Status and reliability

- **Status page**: IsDown tracked 61 incidents since Jan 2025; most recent incident: "Send Email Connector Degraded Performance" (Nov 10, 2025).
- **Statusgator**: Confirmed operational Nov 18, 2025.
- **Known reliability concerns**: G2 reviewers report scalability concerns in complex enterprise workflows vs Workato; some report support responsiveness inconsistent despite official 4.8/5 support rating.
