# Treasure Data Platform Reference

## Platform overview

Treasure Data is an enterprise AI-native Customer Data Platform (CDP) that unifies customer data from 400+ sources, resolves identities across channels, builds audience segments, and activates them to downstream marketing/advertising/CRM tools. Evolved from a pure CDP into an "AI Marketing Cloud" with five AI Suites for engagement, personalization, creative, paid media, and service. Target audience: enterprise B2C marketers at companies like Sony, Canon, Subaru, AB InBev, Nestlé. Requires strong technical teams — many workflows need SQL. Implementation typically takes 8-12 weeks.

## Key modules

### Intelligent CDP (core)
- **Data Ingestion** — 400+ pre-built connectors (batch import, streaming, SDK, API, file upload). 50B+ events/day capacity. Schema-flexible — no rigid schema required.
- **Profile Unification** — Identity resolution merging customer records across channels. Deterministic matching (email, phone, customer ID) and probabilistic (device IDs, cookies). Parent table defines the unified profile; child tables feed into it.
- **Audience Studio** — No-code segment builder. Build audience cohorts using data models engineers configure. SQL-based segments also supported for advanced use cases.
- **Journey Orchestration** — Customer journey workflows with triggered campaigns, branching logic, and multi-channel activation.
- **Treasure Insights** — Analytics and reporting on unified customer data.
- **QA and Dev Sandboxes** — Test changes to parent tables, identity rules, and segments before production deployment.

### AI Marketing Cloud (add-on suites)
Each suite is a separate fixed-annual license + consumption-based "AI Suite Credits" tracked monthly:

- **Engagement AI Suite** — Omnichannel campaign orchestration and engagement optimization
- **Personalization AI Suite** — Real-time personalization across web, app, and email
- **Creative AI Suite** — Creative automation and content generation
- **Paid Media AI Suite** — Ad targeting optimization, audience activation to ad platforms
- **Service AI Suite** — Customer service AI for support optimization

### Marketing Super Agent
AI teammate for campaign research, creation, decision-making, and optimization. Part of the AI Marketing Cloud.

### Agent Hub & Treasure Code
- **Agent Hub** — Library of pre-built and customizable AI agents for marketing tasks
- **Treasure Code** — Agent development framework for building custom AI agents

## Pricing and limits

**Enterprise-only pricing — no self-serve plans.**

| Tier | What's included | Pricing model |
|------|----------------|---------------|
| **Intelligent CDP** | Data ingestion, profile unification, segmentation, batch activation, journey orchestration, AI Agent Foundry, security/governance, custom scripts, Treasure Insights, QA/dev sandboxes | Annual subscription based on Profiles + Behaviors (P+B units) — number of unified profiles and behavioral events |
| **AI Marketing Cloud** | Everything in Intelligent CDP + all 5 AI Suites | Fixed annual license per suite + consumption-based AI Suite Credits |

- **Estimated cost**: $100K–$750K/year depending on profile volume and suites
- **Implementation cost**: $30K–$100K+ depending on complexity (typically via implementation partner)
- **Implementation timeline**: 8-12 weeks from contract to production
- **"No Compute" pricing**: Charges for profiles and events stored, NOT for queries/activations run. Unlimited queries, segmentations, and activations without compute costs.
- **Trade-Up Program**: Up to 24 months free when migrating from a competing CDP
- **Free POC**: Two-week proof of concept available
- **No free tier**

## Deployment options

- **Complete CDP** — All-in-one fully managed infrastructure. Fastest implementation.
- **Composable CDP** — Extends your existing data warehouse (Snowflake, Databricks, BigQuery, Redshift) with CDP functionality. Hybrid architecture.

## Integrations (400+)

### By category

| Category | Example connectors |
|----------|--------------------|
| **Advertising** | Google Ads, Google DV360, Meta/Facebook Custom Audiences, Amazon DSP, Pinterest, TikTok, Snapchat, The Trade Desk, Criteo, LinkedIn, Yahoo! Ads, Reddit Ads |
| **CRM** | Salesforce, HubSpot, Microsoft Dynamics 365, Salesforce Pardot |
| **Marketing Automation** | Adobe Marketo, Braze, Iterable, Klaviyo, Mailchimp, Omnisend, SendGrid, Sailthru, Moengage, Customer.io, Brevo |
| **Data Warehouses** | Snowflake, Databricks, Amazon Redshift, Google BigQuery, Azure Data Lake |
| **Cloud Storage** | Amazon S3, Google Cloud Storage, Azure, Box, Dropbox, OneDrive, SFTP |
| **Analytics/BI** | Tableau, Looker, Power BI, Domo, Mode, Qlik, Metabase, Amplitude, Mixpanel |
| **eCommerce** | Shopify, Salesforce Commerce Cloud, Stripe, Vtex |
| **Mobile/SDK** | iOS SDK, Android SDK, React Native SDK, Unity SDK, Unreal SDK, Cordova SDK |
| **Messaging** | LINE, Kakao, Firebase Cloud Messaging |
| **Identity/DMP** | LiveRamp, Oracle BlueKai, Salesforce DMP, mParticle, Segment |
| **IoT** | Arduino, Raspberry Pi, Arm MBED |
| **Databases** | MySQL, PostgreSQL, MongoDB, SQL Server, Oracle, Teradata |
| **Custom** | Python custom scripts, HTTP/webhooks, Postback API, REST API, Kafka Streaming |

### Integration methods

| Method | Use case |
|--------|----------|
| **Pre-built connectors** | 400+ batch/streaming connectors managed by TD engineering team |
| **Audience Studio Activation** | No-code segment deployment to ad platforms and CRMs |
| **Data Workbench Push** | Automated scheduled exports to destinations |
| **Datatank Pull** | Optimized BI performance for analytics tools |
| **Trino JDBC Pull** | Fresh ad-hoc queries from BI tools via JDBC driver |
| **REST API Pull** | Custom application integrations |
| **Postback API** | Real-time small-batch JSON data ingestion |
| **Import API** | Batch gzipped msgpack format data ingestion |
| **Bulk Import API** | Large file-based data loads from external systems |
| **Custom connectors** | Professional services builds custom connectors (6-8 week timeline) |

## Data model

### Key objects
- **Database** — top-level container for tables
- **Table** — stores event/record data within a database
- **Parent Table** — the unified profile table where identity resolution merges records
- **Child Table** — source data tables that feed into the parent table
- **Job** — a query or data processing task (Presto/Trino or Hive)
- **Connector** — configured import or export integration
- **Segment/Audience** — defined cohort of unified profiles for activation
- **Journey** — orchestrated multi-step campaign workflow

### Identity resolution flow
1. Data ingested from multiple sources into child tables
2. Identity resolution rules match records across sources (email, phone, device ID, customer ID)
3. Matched records merge into the parent table as unified profiles
4. Segments query the parent table to build activation audiences
5. Audiences activate to downstream connectors (ad platforms, CRM, email)

## Regional endpoints

Treasure Data operates in four regions. Always use the correct region's URLs:

### US (us01)
| Service | URL |
|---------|-----|
| Console | https://console.us01.treasuredata.com |
| TD API | https://api.treasuredata.com |
| Audience API | https://api-cdp.treasuredata.com |
| Stream Import | https://api-import.treasuredata.com |
| Postback/Mobile SDK | https://in.treasuredata.com |
| JS SDK | https://us01.records.in.treasuredata.com |
| Workflow | https://api-workflow.treasuredata.com |
| Trino JDBC | https://api-presto.treasuredata.com |
| Profiles API | https://cdp.in.treasuredata.com |
| Personalization | https://us01.p13n.in.treasuredata.com |

### Europe (eu01)
| Service | URL |
|---------|-----|
| Console | https://console.eu01.treasuredata.com |
| TD API | https://api.eu01.treasuredata.com |
| Audience API | https://api-cdp.eu01.treasuredata.com |
| Stream Import | https://api-import.eu01.treasuredata.com |
| Postback/Mobile SDK | https://eu01.in.treasuredata.com |
| JS SDK | https://eu01.records.in.treasuredata.com |
| Workflow | https://api-workflow.eu01.treasuredata.com |
| Trino JDBC | https://api-presto.eu01.treasuredata.com |
| Profiles API | https://cdp-eu01.in.treasuredata.com |
| Personalization | https://eu01.p13n.in.treasuredata.com |

### Japan (ap01)
| Service | URL |
|---------|-----|
| Console | https://console.treasuredata.co.jp |
| TD API | https://api.treasuredata.co.jp |
| Audience API | https://api-cdp.treasuredata.co.jp |
| Stream Import | https://api-import.treasuredata.co.jp |
| Postback/Mobile SDK | https://tokyo.in.treasuredata.com |
| JS SDK | https://ap01.records.in.treasuredata.com |
| Workflow | https://api-workflow.treasuredata.co.jp |
| Trino JDBC | https://api-presto.treasuredata.co.jp |
| Profiles API | https://cdp-tokyo.in.treasuredata.com |
| Personalization | https://ap01.p13n.in.treasuredata.com |

### Korea (ap02)
| Service | URL |
|---------|-----|
| Console | https://console.ap02.treasuredata.com |
| TD API | https://api.ap02.treasuredata.com |
| Audience API | https://api-cdp.ap02.treasuredata.com |
| Stream Import | https://api-import.ap02.treasuredata.com |
| Postback/Mobile SDK | https://ap02.in.treasuredata.com |
| JS SDK | https://ap02.records.in.treasuredata.com |
| Workflow | https://api-workflow.ap02.treasuredata.com |
| Trino JDBC | https://api-presto.ap02.treasuredata.com |
| Profiles API | https://cdp-ap02.in.treasuredata.com |

## Workflow setup — common patterns

### Pattern 1: Unify profiles from multiple sources
1. Create a database and parent table with your unified profile schema
2. Configure child tables for each data source (website events, CRM, POS, email)
3. Set up import connectors for each source in Integration Hub
4. Define identity resolution rules (match on email → phone → device ID)
5. Set source priority order for conflicting values
6. Run unification job in QA sandbox, verify merge quality
7. Promote to production

### Pattern 2: Build and activate an audience segment
1. In Audience Studio, create a new segment using the visual builder OR write SQL
2. Define segment criteria (e.g., purchased in last 90 days AND email_opted_in = true)
3. Preview segment size and sample profiles
4. Configure activation connector (e.g., Facebook Custom Audiences, Google Ads)
5. Set sync frequency (one-time, daily, weekly)
6. Monitor match rates and activation logs

### Pattern 3: Set up a data pipeline with Treasure Workflows
1. Create a new workflow YAML definition
2. Define task DAG: ingest → transform → unify → segment → activate
3. Set schedule (cron syntax) or trigger condition
4. Configure error handling and retry policies
5. Deploy to production and monitor via console

## Client SDKs

| Language | Package | Source |
|----------|---------|--------|
| Python | `td-client` | github.com/treasure-data/td-client-python |
| Ruby | `td-client` | github.com/treasure-data/td-client-ruby |
| Java | `td-client-java` | github.com/treasure-data/td-client-java |
| Node.js | `td` | github.com/treasure-data/td-client-node |
| Go | `td-client-go` | github.com/treasure-data/td-client-go |
| iOS | `TreasureData-iOS-SDK` | github.com/treasure-data/td-ios-sdk |
| Android | `TreasureData-Android-SDK` | github.com/treasure-data/td-android-sdk |
| React Native | `td-react-native-sdk` | github.com/treasure-data/td-react-native-sdk |
| Unity | `td-unity-sdk-package` | github.com/treasure-data/td-unity-sdk-package |
| Cordova | `td-cordova-sdk` | github.com/treasure-data/td-cordova-sdk |

## Existing Treasure Data tools for Claude/AI

- **td-skills** — Official Treasure Data Claude Code skills (github.com/treasure-data/td-skills, 17 stars)
- **td-mcp-server** — Official MCP server for Treasure Data (github.com/treasure-data/td-mcp-server, 6 stars)
