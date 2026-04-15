# Celigo Platform Reference

## Platform overview

Celigo is a mid-market iPaaS (Integration Platform-as-a-Service) that unifies data, applications, and AI workflows. Named 2025 Gartner Customers' Choice for iPaaS. Positioned as the simpler, faster, more affordable alternative to MuleSoft/Boomi/Workato, with particular depth in NetSuite integrations. Target audience: mid-market organizations with 10-50 SaaS apps seeking faster time-to-value than enterprise iPaaS platforms. Strong in ecommerce, finance, and NetSuite-centric companies.

## Key modules

### Integration Marketplace
- 1,000+ pre-built connectors for popular business systems
- **Integration Apps**: fully managed, end-to-end solutions bundling multiple flows, mappings, and configs into one package (e.g., Shopify-NetSuite Integration App)
- **Integration Templates**: pre-built workflows with predefined data flows and mappings — ready-to-use but customizable
- **Universal Connectors**: for REST/SOAP APIs not in the marketplace — connect any API-accessible system

### AI-Powered Error Management
- ML + NLP + automation to classify, analyze, and resolve errors
- Claims 95% auto-resolution rate for integration errors
- Automatic resolution of duplicate errors and retries for transient issues
- Error classification: transient (timeouts, rate limits → auto-retry) vs persistent (bad data, wrong mapping → manual fix)
- Error investigation tools: Errors page, request/response details, AFE (Adaptive Flow Engine) input replay, debug logs

### API Management (APIM)
- Build, publish, and secure APIs from the APIM console
- Create and manage API plans, applications, and subscriptions
- Centralized API governance and access control
- Share data securely across business units, customers, partners

### B2B Manager for EDI
- Trading partner management and document exchange
- Standard formats: X12, EDIFACT, and others
- Automated document processing and validation

### OEM & Embedded Integrations
- White-label integration solutions
- Embed Celigo's integration capabilities into your SaaS product
- End users get pre-built integrations without seeing Celigo's UI

### Celigo Private Cloud
- Dedicated cloud infrastructure deployment
- Enterprise security and compliance requirements
- Isolated environment for sensitive data

### Celigo Ora
- AI agent for intelligent automation
- AI-assisted design for building integrations
- Part of the "Agentic Automation" capability set

## Pricing and limits

Celigo uses **endpoint + flow pricing** — you pay based on the number of connected apps (endpoints) and data flows, NOT per transaction or per record. This means volume spikes don't cause overages (unlike Workato's task-based billing).

| Edition | Endpoints | Flows | Key features | Est. annual cost |
|---|---|---|---|---|
| Free | 2 | 1 | 30-day trial (unlimited), then limited. No SSO, no API tokens | $0 |
| Basic | ~5 | 1-3 | Standard pre-built connectors, email support | $12,800-$25,500 |
| Premium | ~25 | 5-10 | SSO, advanced data mapping, enhanced support | $16,500-$50,000 |
| Enterprise | Unlimited | Unlimited | Custom API integrations, 24/7 support, SLA, dedicated account manager | $50,000-$73,300+ |
| Custom | Varies | Varies | Tailored mix of features | Custom quote |

*Pricing is best-effort from third-party sources (ERPPeers, Vendr). Contact Celigo for current pricing.*

**Key pricing notes**:
- Each connected app = 1 endpoint (not each flow)
- Flows can run on schedules or in real-time
- AI capabilities currently free across all editions (through June 2026)
- Additional implementation and training costs may apply
- Average annual cost: ~$17,000

## Integrations

### Pre-built connectors
Major platforms: Salesforce, Microsoft Dynamics 365, Oracle NetSuite, SAP, Walmart, Amazon, Shopify, Snowflake, Acumatica, HubSpot, and 1,000+ more.

### NetSuite (flagship integration)
- Deepest NetSuite integration of any iPaaS
- Pre-built Integration Apps for Shopify-NetSuite, Salesforce-NetSuite, and more
- NetSuite RESTlet proxying with custom headers (Integrator-NetSuite-ScriptId, Integrator-NetSuite-DeployId)
- Common workflows: order-to-cash, procure-to-pay, inventory sync, financial close

### Zapier / Make
No native Zapier/Make connector. Use webhooks or REST API for bidirectional communication.

## Data model (API)

The Celigo integrator.io API is RESTful, uses JSON, and requires Bearer token authentication.

**Base URLs**:
- North America: `https://api.integrator.io/v1/`
- EU: `https://api.eu.integrator.io/v1/`
- Browser: `https://integrator.io/api/`

**Key resources**:

| Resource | Purpose |
|---|---|
| Connection | Store credentials and auth info for integrated apps |
| Export | Extract data from source applications |
| Import | Insert/update data into destination applications |
| Flow | Compose exports + imports for data movement |
| Integration | Group flows with shared permissions and stats |
| State | Store arbitrary JSON data with custom keys |
| Job | Track flow execution state and final statistics |

**Rate limits**: Leaky bucket — 1,000 token bucket, 300 tokens/sec fill rate, ~1,080,000 requests/hour.

## Solution categories

**By business function**: Commerce & Retail, Customer Support, Data Warehouse & Analytics, Finance, IT, PeopleOps, Product, RevOps, Supply Chain.

**Common workflows**:
- **Order-to-cash**: Shopify/Amazon → NetSuite (orders, inventory, fulfillment)
- **Procure-to-pay**: Procurement → ERP → AP automation
- **Financial close**: Multi-system reconciliation → NetSuite/SAP
- **Employee onboarding**: HRIS → IT provisioning → payroll
- **Customer 360**: CRM + support + billing → unified view
- **3PL fulfillment**: Ecommerce → 3PL → shipping → tracking updates
- **Returns management**: Returns portal → ERP → refund/credit processing

## Competitive positioning

| Factor | Celigo | Workato | Boomi | MuleSoft |
|---|---|---|---|---|
| Pricing model | Endpoints + flows | Task-based | Per-connection | vCore-based |
| Best for | Mid-market, NetSuite-heavy | Business process automation | Hybrid cloud/on-prem | Enterprise API-led |
| Learning curve | Weeks | Weeks | Months | Months-years |
| Connector count | 1,000+ | 1,200+ | 1,000+ | 450+ |
| AI capabilities | Error management, Ora | LLM flow generation | AgentStudio | Einstein AI Gateway |
| Surprise costs | Low (no per-transaction) | High (task overages) | Medium (connection creep) | High (vCore sizing) |
| NetSuite depth | Deepest | Good | Good | Limited |
| Target team size | Small IT (2-5 people) | Small-medium IT | Medium-large IT | Large IT (certified devs) |

## Error debugging workflow

1. **Errors page** → expand failed record → check request/response details
2. **AFE input** → copy retry data → replay with visible data to isolate the issue
3. **Debug logs** → enable on HTTP connectors for full API request/response traces
4. **Run console** → check flow execution history, timing, record counts
5. **Dashboard** → high-level view of all flows, error trends, success rates
6. **Diagnostics** → system-level health checks
7. **2026.1.1 enhancement** → connection debug logs now show underlying API calls during connection establishment
