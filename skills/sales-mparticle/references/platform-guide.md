# mParticle Platform Reference

## Platform overview

mParticle (now part of Rokt) is an enterprise hybrid Customer Data Platform that combines real-time event streaming with warehouse-native activation. Originally built as a mobile-first CDP, it has expanded to cover web, server-side, and OTT platforms. Target audience: multi-channel brands in media/entertainment, QSR, retail, travel, and financial services needing real-time identity resolution and audience activation at scale. Typically $40K-$375K+/year, enterprise-only, no self-serve tier.

## Key modules

### Data Collection
- **Client SDKs**: iOS, Android, Web, React Native, Flutter, Roku, tvOS, Alexa, SmartTV, FireTV, Xbox, Cordova, MAUI, UWP
- **Server SDKs**: Python, Node.js, Java, Ruby, Go, .NET
- **Events HTTP API**: Server-side event ingestion at `s2s.{pod}.mparticle.com/v2`
- **Partner Feeds**: Inbound data from partner integrations (attribution, analytics, CRM)

### Identity Resolution (IDSync)
- Real-time identity matching across devices and channels
- Configurable Identity Strategy (deterministic vs probabilistic)
- Identity API endpoints: `/identify`, `/login`, `/logout`, `/search`, `/{mpid}/modify`
- Three auth methods: Basic, HMAC digest, API key-only
- Supports 20+ identity types (email, phone, IDFA, GAID, customer ID, custom)

### Unified Profiles
- Customer 360 view aggregating events, attributes, and identities
- Profile API for querying user data programmatically
- Calculated Attributes: count, sum, min, max, first/last occurrence, unique list (note: no arithmetic operations like multiply/divide)
- Audience memberships visible on profiles

### Audience Segmentation
- Real-time and batch audience building
- Predictive audiences via AI/Cortex
- Composable Audiences: activate segments directly from Snowflake, BigQuery, or Databricks without copying data into mParticle
- Cross-workspace audience queries via Platform API

### AI/Cortex
- AI-powered customer insights and predictions
- Churn prevention models
- Predictive audience scoring
- Incrementality testing

### Data Governance
- **Data Plans**: Schema validation at the point of collection — JSON Schema-based, catches tracking errors before they propagate downstream
- **Data Planning API**: CRUD operations on plans, versions, and data points
- **Validation endpoint**: Test event batches against plans before sending
- Rate limits: 3,000 req/min (account), 6,000 req/min (org)

### Privacy & Compliance
- **DSR API** (Data Subject Requests): OpenDSR framework for GDPR/CCPA
  - v1 endpoint: `opengdpr.mparticle.com/v1`
  - v2 endpoint: `opendsr.mparticle.com/v2`
- Request types: access, erasure, portability
- Supports 20+ identity types for subject identification
- Callback notifications via signed HTTPS POST
- Results downloadable for 7 days

### Connections
- 300+ pre-built API integrations
- Categories: analytics, advertising, attribution, CRM, data warehousing, email, push, SMS
- Key partners: Google Ads, Meta, Braze, Amplitude, Mixpanel, Snowflake, Databricks, BigQuery, AWS
- Connection provisioning can take up to 48 hours on initial setup
- Data filters control which events/attributes forward to each destination

### Composable Architecture
- Direct activation from data warehouses (Snowflake, Databricks, BigQuery)
- Warehouse Sync API for bidirectional data flow
- ComposeID for warehouse-based identity resolution
- No data copying required — activate from warehouse as source of truth

## Pricing and limits

| Aspect | Details |
|---|---|
| **Model** | Consumption-based credits — events, storage, activation |
| **Entry point** | Contact sales (no self-serve) |
| **Typical range** | $40K-$375K+/year |
| **Average** | ~$156K/year |
| **Volume discounts** | More credits purchased upfront = lower rates |
| **Available on AWS Marketplace** | Yes |
| **Events API rate limit** | 250 events/sec (contact support for higher) |
| **Profile API rate limit** | 15 RPS (testing tier) |
| **Data Planning API rate limit** | 3,000 req/min (account), 6,000 req/min (org) |
| **Bulk events batch limit** | 100 batches per request, 128KB max per batch |
| **OAuth token expiry** | 8 hours (not revocable) |
| **Historical data** | Timestamps must be >72 hours old, use `/bulkevents/historical` |

*All pricing is approximate and subject to change. Verify with mParticle sales.*

## Integrations

### Native connections (300+)
- **Advertising**: Google Ads, Meta, The Trade Desk, Criteo, Pinterest, Snapchat, TikTok
- **Analytics**: Amplitude, Mixpanel, Indicative (now mParticle Analytics)
- **Attribution**: Branch, Adjust, AppsFlyer, Kochava
- **CRM/Engagement**: Braze, Iterable, Salesforce, HubSpot
- **Data Warehouses**: Snowflake, BigQuery, Databricks, Redshift, Azure Synapse
- **Customer Engagement**: CleverTap, OneSignal, Airship
- **Custom Feeds**: Census, Fivetran (inbound data to mParticle)

### Supported platforms for SDK collection
iOS, Android, Web, React Native, Flutter, Roku, tvOS, Alexa, SmartTV, FireTV, Xbox, Cordova, .NET MAUI, UWP

## Data model

### Key objects
- **User/Profile**: Identified by mParticle ID (MPID), contains identities, attributes, audience memberships
- **Event Batch**: Container for one user's events, includes user identities, device info, and event array
- **Events**: App events (custom), commerce events (product actions), screen views, session start/end
- **Data Plan**: Schema definition containing Data Plan Versions, each with Data Points (criteria + JSON Schema validator)
- **Workspace**: Organizational unit containing apps, connections, audiences, data plans
- **Account**: Contains multiple workspaces

### Identity types
Customer ID, email, phone, IDFA, IDFV, GAID, Microsoft Advertising ID, Microsoft Publisher ID, Fire Advertising ID, Roku Advertising ID, Roku Publisher ID, Facebook, Google, Twitter, Yahoo, other (custom), other2-10 (custom)

### Commerce events
Product actions: add_to_cart, remove_from_cart, checkout, checkout_option, click, view_detail, purchase, refund, add_to_wishlist, remove_from_wishlist

## Regional endpoints

| Pod | Events API | Identity API |
|---|---|---|
| US1 | `s2s.mparticle.com/v2` or `s2s.us1.mparticle.com/v2` | `identity.mparticle.com/v1` |
| US2 | `s2s.us2.mparticle.com/v2` | `identity.us2.mparticle.com/v1` |
| EU1 | `s2s.eu1.mparticle.com/v2` | `identity.eu1.mparticle.com/v1` |
| AU1 | `s2s.au1.mparticle.com/v2` | `identity.au1.mparticle.com/v1` |

## Workflow setup

### Getting started (first event to first destination)
1. Create a Workspace in the mParticle dashboard
2. Add an Input (web, iOS, Android, or server) — this generates API key/secret
3. Install the SDK or configure the Events API with your pod-specific endpoint
4. Send a test event and verify it appears in Live Stream
5. Add an Output (destination) — configure credentials and data filters
6. Wait for connection provisioning (can take up to 48 hours)
7. Verify events appear in the destination

### Setting up Data Plans
1. Go to Data Master > Plans > Create Plan
2. Define Data Points — each has match criteria and a JSON Schema validator
3. Create a Plan Version and activate it
4. Events that don't match the plan are quarantined for review
5. Use the Data Planning API or CLI for version control and CI/CD integration

### Configuring Identity Resolution
1. Go to Setup > Identity Strategy
2. Choose your strategy type (deterministic, probabilistic, or custom)
3. Configure which identity types are used for matching
4. Test with the IDSync `/identify` and `/search` endpoints
5. Monitor merge/split activity in the Identity dashboard

## Deep dives

### Authentication patterns

**Events API (Basic Auth)**:
- Use API Key as username, API Secret as password
- Or manually: `Authorization: Basic {base64(key:secret)}`

**Platform/Profile/Data Planning APIs (OAuth 2.0)**:
1. POST to `https://sso.auth.mparticle.com/oauth/token`
2. Body: `{"client_id": "...", "client_secret": "...", "audience": "https://api.mparticle.com", "grant_type": "client_credentials"}`
3. Response contains `access_token` (Bearer token, expires in ~8 hours)
4. Cache the token — initial requests take 1-3 seconds, subsequent requests are faster

**IDSync API (3 options)**:
1. Basic Auth (API Key + Secret)
2. HMAC digest (`x-mp-key` + `Date` + `x-mp-signature` headers)
3. API key-only (`x-mp-key` header, selectively enabled)

**DSR API (Basic Auth)**:
- Workspace-level credentials from Settings

### API Credential Management
- Admin/Compliance Admin role required
- Create credentials scoped to Org, Account, or Workspace level
- Assign per-API permissions (Profile API is read-only only)
- **Critical**: Copy Client Secret immediately on creation — it's not shown again (can regenerate)
- Credentials can be activated/deactivated/deleted

### Migration considerations
- mParticle was originally mobile-only — mobile SDKs are the most mature
- Implementation typically takes 2-4 weeks for a single platform, longer for multi-platform
- Data Planning (schema validation) is a key differentiator vs other CDPs — worth setting up early
- Composable Audiences reduce data duplication if you already have a warehouse
- Rokt acquisition (2024) may affect product roadmap — monitor for changes
