# RudderStack Platform Reference

## Platform overview

RudderStack is a warehouse-native Customer Data Platform (CDP) built for engineering and data teams. Unlike traditional CDPs that copy data into their own storage, RudderStack keeps your data warehouse (Snowflake, BigQuery, Redshift, Databricks) as the single source of truth. The platform is open-source (AGPLv3) with a managed cloud option. Target audience: developers, data engineers, and data teams at companies that prioritize data ownership, cost control, and flexible infrastructure.

**Key differentiators vs Segment**: 50-80% cost savings (event-based vs MTU pricing), open-source option, warehouse-native architecture, no vendor lock-in. **Trade-offs**: smaller ecosystem, steeper learning curve for non-technical users, Profiles/identity resolution is cloud-only.

## Key modules

### Event Streams
Collects customer events from any source and routes them to destinations in real-time.

- **Sources**: JavaScript SDK, iOS/Android/React Native/Flutter mobile SDKs, Node.js/Python/Go/Ruby/Java/PHP server SDKs, cloud app webhooks, HTTP API
- **Destinations**: 200+ streaming destinations — analytics (GA, Amplitude, Mixpanel), CRMs (Salesforce, HubSpot), marketing (Braze, Iterable, Klaviyo), warehouses (Snowflake, BigQuery, Redshift), ad platforms (Facebook, Google Ads)
- **Processing modes**: Cloud mode (server-side, through RudderStack backend) and Device mode (client-side, SDK loads destination's native SDK)
- **Key features**: Event filtering, event replay, session tracking, consent management, multi-instance support

### Reverse ETL
Syncs data from your warehouse back to business tools — turn warehouse tables, SQL models, or dbt models into audiences and sync them to destinations.

- **Supported warehouse sources**: Snowflake, BigQuery, Redshift, PostgreSQL, MySQL, Databricks, Trino, Amazon S3, Google Cloud Storage
- **Sync modes**: Full sync, incremental (changed records only), mirror (add + delete)
- **Scheduling**: Cron-based, manual, or API-triggered
- **Audience builder**: Visual audience builder for non-SQL users (cloud only)

### Transformations
En-route transformations using JavaScript or Python functions. Applied before events reach destinations.

- **Use cases**: PII masking, event filtering, data enrichment, format conversion, deduplication
- **Libraries**: Shared transformation libraries for reusable logic
- **Testing**: Built-in test mode with sample events
- **Versioning**: Version control with rollback capability

### Profiles (Cloud only)
Identity resolution and customer 360 built on your warehouse.

- **Identity graph**: Merges anonymous and known user profiles using deterministic matching (email, customer ID, phone)
- **Feature computation**: SQL-based trait computation (LTV, purchase frequency, engagement score) stored in warehouse
- **Activation**: Computed traits flow to destinations via Reverse ETL

### Cloud Extract (ETL)
Pulls data from cloud applications (Salesforce, Zendesk, Stripe, etc.) into your warehouse via pre-built connectors.

## Pricing and limits

*All pricing approximate — verify with RudderStack.*

| Plan | Price | Events/month | Features |
|---|---|---|---|
| **Free (Cloud)** | $0 | 10,000 | Event Streams, 3 destinations, community support |
| **Free (Open-source)** | $0 | Unlimited | Event Streams, Reverse ETL core, self-hosted |
| **Starter** | From $220/mo | 1M | Event Streams, Reverse ETL, Transformations, email support |
| **Growth** | Custom | 5M-50M+ | Everything in Starter + Profiles, SSO, dedicated support |
| **Enterprise** | Custom | Custom | Everything in Growth + SLA, dedicated CSM, custom connectors |

**Starter pricing by volume**: 1M events = $220/mo, 5M = $750/mo, 10M = $1,250/mo, 50M = $4,500/mo.

**Key limits**:
- HTTP API: 32 KB max per call, 4 MB max per batch call
- Collect HTTP API rate limit: destination-dependent (varies by plan)
- Warehouse sync retry: exponential backoff, max 3 hours
- Transformations: 128 MB memory limit per function execution

## Integrations

### SDKs (Event Stream Sources)
| Platform | SDK | Key features |
|---|---|---|
| Web | JavaScript SDK | Auto-track, SPA support, consent, plugins |
| iOS | Swift SDK | Lifecycle events, screen tracking, device mode |
| Android | Kotlin SDK | Background flush, offline queuing |
| React Native | RN SDK | Cross-platform, wraps native SDKs |
| Flutter | Flutter SDK | Cross-platform Dart SDK |
| Node.js | Node SDK | Server-side, Redis persistence option |
| Python | Python SDK | Server-side, async support |
| Go | Go SDK | Server-side, lightweight |
| Java | Java SDK | Server-side, Spring Boot compatible |
| Ruby | Ruby SDK | Server-side, Rails integration |
| PHP | PHP SDK | Server-side, Laravel support |

### Warehouse destinations
Snowflake, BigQuery, Redshift, PostgreSQL, ClickHouse, Databricks Delta Lake, Azure Synapse, S3 Data Lake, GCS Data Lake, MinIO

### Popular streaming destinations
- **Analytics**: Google Analytics 4, Amplitude, Mixpanel, Heap, PostHog, Keen
- **CRM**: Salesforce, HubSpot, Pipedrive, Zoho
- **Marketing automation**: Braze, Iterable, Klaviyo, Customer.io, ActiveCampaign, Mailchimp
- **Ad platforms**: Facebook Conversions API, Google Ads, LinkedIn, TikTok, Reddit Ads, Snapchat, Pinterest
- **Engagement**: Intercom, Zendesk, Drift, Freshdesk
- **Data platforms**: Segment (yes, can send to Segment), mParticle, Tealium

### Orchestration
- **Airflow**: RudderStack Airflow provider for pipeline orchestration
- **Dagster**: Native Dagster integration
- **dbt**: Reverse ETL can use dbt models as sources

## Data model

### Event specification (Segment-compatible)
RudderStack uses the same event spec as Segment — migration is typically a SDK swap.

| Call type | Purpose | Example |
|---|---|---|
| `identify` | Associate a user with traits | `rudderanalytics.identify("user123", {email: "user@example.com", plan: "pro"})` |
| `track` | Record an action | `rudderanalytics.track("Order Completed", {revenue: 99.99, currency: "USD"})` |
| `page` | Record a page view | `rudderanalytics.page("Home")` |
| `screen` | Record a screen view (mobile) | `rudderanalytics.screen("Dashboard")` |
| `group` | Associate a user with a group/company | `rudderanalytics.group("company123", {name: "Acme", industry: "SaaS"})` |
| `alias` | Merge two user identities | `rudderanalytics.alias("new_id", "old_id")` |

### Key objects
- **Source**: Where events come from (SDK, webhook, cloud app). Has a unique write key.
- **Destination**: Where events go (analytics tool, CRM, warehouse). Configured per source.
- **Connection**: A source → destination link with optional transformations.
- **Transformation**: JavaScript/Python function applied to events in-flight.
- **Model** (Reverse ETL): SQL query defining a dataset in your warehouse to sync.
- **Audience** (Reverse ETL): Visual segment builder output, compiled to SQL.

### Authentication
- **SDK/HTTP API**: Basic Auth with source write key as username, empty password
- **Transformations API**: Bearer token (Personal Access Token from dashboard)
- **Data Plane URL**: `https://<your-dataplane>.dataplane.rudderstack.com` (cloud) or your self-hosted URL

## API quick reference

### HTTP API (Event ingestion)
Base URL: `https://<data-plane-url>/v1/`

| Endpoint | Method | Purpose |
|---|---|---|
| `/identify` | POST | Send identify event |
| `/track` | POST | Send track event |
| `/page` | POST | Send page event |
| `/screen` | POST | Send screen event |
| `/group` | POST | Send group event |
| `/alias` | POST | Send alias event |
| `/batch` | POST | Send batch of events (max 4 MB) |

**Auth**: Basic Auth — `<write_key>:` (write key as username, empty password)

**Headers**: `Content-Type: application/json`

### Transformations API
Manage transformations and libraries programmatically.

| Endpoint | Method | Purpose |
|---|---|---|
| `/transformations` | GET | List all transformations |
| `/transformations` | POST | Create a transformation |
| `/transformations/{id}` | GET | Get a transformation |
| `/transformations/{id}` | PUT | Update a transformation |
| `/transformations/{id}` | DELETE | Delete a transformation |
| `/libraries` | GET/POST | List/create shared libraries |

**Auth**: Bearer token (Personal Access Token)

### Test API
Verify event workflow for configured sources and destinations.

## Workflow setup

### Setting up Event Streams (most common)
1. **Create a source** in the RudderStack dashboard — choose source type (JavaScript, Node.js, etc.)
2. **Copy the write key and data plane URL** from the source settings
3. **Install the SDK** in your app:
   ```bash
   # JavaScript
   npm install @rudderstack/analytics-js
   # Node.js
   npm install @rudderstack/rudder-sdk-node
   ```
4. **Initialize the SDK** with write key + data plane URL
5. **Send a test event**: `rudderanalytics.track("Test Event", {test: true})`
6. **Add destinations** — configure each destination with its API key/credentials
7. **Verify in Live Events** — check the dashboard for event delivery status

### Setting up Reverse ETL
1. **Connect your warehouse** as a Reverse ETL source (Snowflake, BigQuery, etc.)
2. **Create a model** — write a SQL query defining the data to sync, or use the visual audience builder
3. **Add a Reverse ETL destination** — configure the business tool (Braze, Salesforce, etc.)
4. **Map columns** — map warehouse columns to destination fields
5. **Set sync schedule** — cron expression, or trigger via API
6. **Run initial sync** — use "full sync" for the first run, then switch to incremental

### Migrating from Segment
1. RudderStack uses the same event spec — `identify`, `track`, `page`, `screen`, `group`, `alias`
2. Swap the Segment SDK for the RudderStack SDK (same API surface)
3. Update the write key and endpoint URL
4. Re-configure destinations in the RudderStack dashboard
5. Test with Live Events to verify parity

## Deep dives

### Self-hosted deployment
RudderStack open-source can be deployed via Docker, Kubernetes (Helm chart), or developer machine setup. The open-source version includes Event Streams and basic Reverse ETL but not Profiles, premium connectors, or the visual audience builder.

- **Docker**: `docker-compose` setup with config-backend, backend, and PostgreSQL
- **Kubernetes**: Helm chart at `rudderlabs/rudderstack-helm`
- **Config backend**: Can use RudderStack's hosted control plane (free) or self-host

### Event filtering and consent
- **Event filtering**: Block specific events from reaching a destination (configured per connection)
- **Consent management**: OneTrust/Ketch integration, or custom consent via SDK API. Events are suppressed for users who haven't consented to a destination's purpose category.

### Debugging event delivery
1. **Live Events** — real-time view of events flowing through a source or destination. Shows delivery status, errors, and payloads.
2. **Event Metrics** — aggregate view of event counts, error rates, and latency over time.
3. **Destination Live Events** — shows the actual response from the destination API (including error messages).
4. **Server logs** (self-hosted) — check `rudder-server` logs for processing errors.
