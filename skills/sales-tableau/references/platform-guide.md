# Tableau Platform Reference

## Platform overview

Tableau (Salesforce) is the leading visual analytics platform, enabling users to explore, visualize, and share data insights through interactive dashboards. Positioned as the "gold standard" for data visualization since 2003, it serves analysts, data teams, business leaders, and developers across every industry. Acquired by Salesforce in 2019 for $15.7B, it now integrates deeply with the Salesforce ecosystem (Data Cloud, CRM Analytics, MuleSoft).

## Key modules

### Tableau Desktop
- Primary authoring tool for building dashboards and visualizations
- Connects to 90+ native data connectors (databases, files, cloud services, Salesforce)
- Visual drag-and-drop interface — no coding required for basic use
- Calculated fields, LOD expressions, parameters, sets, table calculations for advanced analysis
- Creator license required ($75/user/mo)
- Available for Windows and Mac

### Tableau Cloud (SaaS)
- Fully hosted by Salesforce — no infrastructure to manage
- Publishing, sharing, scheduling extracts, permissions
- Tableau Bridge for connecting to on-premises data sources
- 10GB extract size limit per data source
- Built-in collaboration: comments, subscriptions, data-driven alerts
- Accelerated views for faster dashboard loading

### Tableau Server (self-hosted)
- On-premises or private cloud deployment
- Full control over data, security, and infrastructure
- No extract size limits (bounded by your hardware)
- Advanced security: Active Directory/LDAP, Kerberos, SAML, trusted auth
- Requires IT team for installation, maintenance, and upgrades
- Kubernetes deployment available (Tableau Server in Kubernetes)

### Tableau Prep
- Visual data preparation tool — clean, combine, and shape data before analysis
- Drag-and-drop joins, unions, pivots, aggregations
- Fuzzy matching for messy data
- Prep Builder (desktop) + Prep Conductor (server scheduling, requires Data Management license)
- Flows can be scheduled on Cloud/Server but NOT on Desktop alone

### Tableau Pulse
- AI-powered metrics layer — define business metrics once, share everywhere
- Natural language Q&A — ask questions about your data in plain English
- Proactive insights — Pulse surfaces anomalies and trends automatically
- Available on Tableau Cloud and Tableau+

### Tableau+ (Premium)
- Agentic analytics — AI agents that can take autonomous action from data insights
- Advanced AI features, Einstein integration
- Premium support and success resources
- Contact sales for pricing

### Tableau Embedding API v3
- Embed Tableau dashboards in external web applications
- JavaScript API for interactive control (filtering, selection, event handling)
- Connected Apps (JWT) for seamless SSO — replaces legacy Trusted Authentication
- Responsive sizing, toolbar customization, theme matching
- Samples and guide: github.com/tableau/embedding-api-v3-samples

### Tableau MCP Server
- Official MCP (Model Context Protocol) server for AI agent integration
- Enables AI agents (Claude, Cursor, etc.) to query Tableau data programmatically
- 235+ GitHub stars (github.com/tableau/tableau-mcp)
- Connects to Tableau Cloud or Server via REST API

### tabcmd
- Command-line utility for automating Tableau Server/Cloud tasks
- Export views (PDF, PNG, CSV), publish workbooks, manage users
- Available as standalone Python package (github.com/tableau/tabcmd, 50 stars)
- Useful for CI/CD pipelines and batch operations

## Pricing and limits

All prices per user per month, billed annually. No monthly billing option.

### Standard tiers

| Role | Price | Can do |
|------|-------|--------|
| **Creator** | $75/mo | Full Desktop + Cloud/Server. Build dashboards, connect to any data source, publish, Prep |
| **Explorer** | $42/mo | Web editing of existing workbooks. Cannot create new data connections or use Desktop |
| **Viewer** | $15/mo | View and interact with published dashboards only. No editing |

### Enterprise tiers

| Role | Price | Additional features |
|------|-------|-------------------|
| **Creator** | $115/mo | Advanced management, enterprise security, premium support |
| **Explorer** | $70/mo | Same |
| **Viewer** | $35/mo | Same |

### Key limits and requirements
- Every deployment needs at least 1 Creator license
- Tableau Cloud: 10GB max extract size per data source
- Tableau Cloud: 25GB storage per Creator, 5GB per Explorer
- REST API: no published rate limits, but very high request volumes may be throttled
- Extract refresh: minimum 15-minute intervals on Cloud (hourly recommended)
- Row-level security: implemented via user filters or data source filters (not enforced at API level)

### Tableau Public (free)
- Free version — all visualizations are public (no private dashboards)
- 10M rows max per data source, 10GB total storage
- Limited data connectors (files only, no databases)
- No Prep, no API access, no embedding

## Integrations

### Native Salesforce
- **Salesforce CRM connector**: Predefined queries for standard objects (Accounts, Contacts, Opportunities, Cases), OAuth authentication, incremental refresh
- **Salesforce Data Cloud connector**: Access unified customer profiles, segments, and Data Cloud objects (released 2023.2+)
- **Salesforce Marketing Cloud connector**: Extract-only connection for email campaign data
- **CRM Analytics (formerly Tableau CRM)**: Embedded analytics within Salesforce, powered by Einstein
- **Lightning Web Component**: Embed Tableau views directly in Salesforce Lightning pages

### Data warehouse / database
- Snowflake, BigQuery, Redshift, Databricks, Azure Synapse (native connectors)
- PostgreSQL, MySQL, SQL Server, Oracle, Teradata
- Amazon Athena, Google Cloud SQL, SAP HANA

### Cloud data
- Google Sheets, Excel, CSV, JSON
- Box, Dropbox, OneDrive
- Salesforce Data Cloud, HubSpot (via CData or custom connector)

### API and developer tools
- REST API v3.28 (300+ endpoints — see tableau-api-reference.md)
- Tableau Server Client (TSC) Python library
- Postman collection (github.com/tableau/tableau-postman)
- Tableau MCP Server for AI agent integration
- LangChain integration (github.com/tableau/tableau_langchain)
- Hyper API for programmatic extract creation
- Document API for modifying .twb/.twbx files

### Tableau Bridge
- Connects Tableau Cloud to on-premises data sources
- Installed on a machine inside your network
- Scheduled or live connections through Bridge
- Requires Windows machine (Linux support limited)

## Data model

### Key concepts
- **Data Source**: A connection to data (live or extract) — the foundation
- **Workbook**: A collection of dashboards and sheets (.twb or .twbx file)
- **Sheet**: A single visualization (chart, map, table)
- **Dashboard**: A collection of sheets arranged on a canvas
- **Story**: A sequence of dashboards/sheets that tell a narrative
- **Project**: An organizational folder on Server/Cloud for permissions
- **Site**: A top-level tenant on Server/Cloud — isolated content and users
- **Extract (.hyper)**: A snapshot of data optimized for fast queries

### Common objects in REST API
- `site-id` / `site-luid`: Identifies the site
- `workbook-id`: Identifies a workbook
- `view-id`: Identifies a sheet/view within a workbook
- `datasource-id`: Identifies a data source
- `user-id`: Identifies a user
- `group-id`: Identifies a user group
- `job-id`: Tracks async operations (extract refreshes, publishing)

## Workflow setup

### Connecting Salesforce data to Tableau (most common)
1. Open Tableau Desktop → Connect → Salesforce
2. Authenticate via OAuth (username/password deprecated since 2020.4)
3. Select from predefined queries or write custom SOQL
4. Switch to Extract for better performance (live connections are slow for large orgs)
5. Publish data source to Tableau Cloud/Server
6. Schedule incremental refresh (daily recommended for pipeline data)
7. Build dashboards on top of the shared data source

### Embedding Tableau in a web app
1. Enable Connected Apps on your Tableau Cloud/Server site
2. Generate a JWT secret for your Connected App
3. Use the Embedding API v3 JavaScript library
4. Initialize the viz with `<tableau-viz>` web component or `TableauViz` class
5. Pass JWT token for SSO (no separate login prompt)
6. Handle events: filter changes, mark selection, parameter changes
7. Use responsive sizing for mobile-friendly embedding

### Optimizing a slow dashboard
1. Open Performance Recorder (Help > Settings > Start Performance Recording)
2. Interact with the dashboard, then stop recording
3. Review the performance workbook — identify slowest queries
4. Common fixes:
   - Switch from live to extract
   - Reduce marks (aggregate data, filter before visualization)
   - Simplify LOD expressions (especially FIXED LODs that bypass context filters)
   - Replace blended data sources with a proper join in Prep or SQL
   - Use context filters to limit data before other filters apply
   - Reduce dashboard actions (cross-filtering cascades can multiply queries)
   - Use Accelerated Views on Tableau Cloud

## Deep dives

### LOD expressions (Level of Detail)
The #1 source of confusion for intermediate Tableau users. Three types:
- **FIXED**: Computes at a specified granularity, ignoring all dimension filters (but respects context filters and data source filters). Example: `{FIXED [Region] : SUM([Sales])}` — always sums by Region regardless of what's on the dashboard.
- **INCLUDE**: Adds a dimension to the current granularity. Example: `{INCLUDE [Customer] : AVG([Sales])}` — includes Customer in the average, even if Customer isn't on the view.
- **EXCLUDE**: Removes a dimension from the current granularity. Example: `{EXCLUDE [Month] : SUM([Sales])}` — sums without Month, even if Month is on the view.

Key gotcha: FIXED LODs bypass dimension filters by default. To make them respect filters, promote filters to context filters (right-click filter > Add to Context).

### Calculated fields performance
- Table calculations (RUNNING_SUM, RANK, WINDOW_AVG) execute client-side — fine for small data, slow for large
- LOD expressions execute server-side — generally faster for large data
- String calculations (CONTAINS, REPLACE, REGEXP) are slower than numeric
- Nested calculations compound performance — flatten where possible
- Use native Tableau functions over custom SQL when possible

### License optimization strategy
Most organizations over-license. Typical right-sizing:
- **Creators** (5-10%): Data team, BI developers, anyone building from scratch
- **Explorers** (10-20%): Power users who modify existing dashboards, create web-authored workbooks
- **Viewers** (70-85%): Everyone else — executives, sales reps, operations — who consume dashboards

Audit steps:
1. Check Server/Cloud admin views → User Activity
2. Identify Explorers who haven't web-edited in 90+ days → downgrade to Viewer
3. Identify Creators who only publish pre-built workbooks → may stay Creator (Desktop required)
4. Calculate savings: each Explorer→Viewer save = $27/mo ($324/yr); each Creator→Explorer save = $33/mo ($396/yr)
