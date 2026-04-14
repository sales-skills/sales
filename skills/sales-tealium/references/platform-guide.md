# Tealium Platform Reference

## Platform overview

Tealium is an enterprise Customer Data Platform (CDP) that unifies, enriches, and activates real-time customer data across 1,300+ integrations. Founded in 2008, Tealium targets enterprise organizations across retail, healthcare, financial services, automotive, pharma, travel/hospitality, gaming, insurance, education, and banking. Key differentiators: real-time data processing, marketer-friendly AudienceStream UI for audience building, deep tag management heritage (iQ), and a Connector Marketplace with 1,300+ pre-built integrations.

## Key products

### iQ Tag Management
Client-side tag orchestration for web. Manages vendor tags (analytics, ads, personalization) through a single JavaScript library (utag.js). Features include:
- **Load rules** — conditions that control when tags fire (page type, URL, data layer values)
- **Extensions** — JavaScript code that runs before or after tags (data manipulation, cookies, DOM interaction)
- **Tag templates** — pre-built integrations for major vendors (Google Analytics, Meta Pixel, etc.)
- **Async loading** — tags load in parallel to prevent page blocking
- **Tag timeout** — cancels slow-responding vendor tags to protect page performance
- **Data layer** — standardized data object (`utag_data`) that feeds all tags

### EventStream API Hub
Server-side event processing. Receives events from any source (web, mobile, IoT, API) and routes them to destinations via connectors.
- **Event feeds** — incoming data streams from data sources
- **Event specifications** — define expected event structure and validation
- **Connectors** — real-time integrations that transmit data to vendors (see Connectors section)
- **Transformations** — modify event data before sending to destinations

### AudienceStream CDP
Real-time customer data platform for audience segmentation and activation.
- **Visitor profiles** — unified customer profiles built from all data sources
- **Enrichments** — rules that calculate and store attributes on visitor profiles (metrics, properties, badges, dates, flags)
- **Audiences** — dynamic segments based on profile attributes, behaviors, and enrichments
- **Badges** — binary audience membership indicators (true/false)
- **Visitor timeline** — complete journey view showing all events and attribute changes
- **Predictive ML** — machine learning scoring for visitor attributes
- **Identity resolution** — Visitor Switching to merge profiles across devices/channels

### Composable CDP
Streams clean, consented data directly into data warehouses:
- **Snowflake** — native connector, real-time streaming in <10 seconds
- **BigQuery** — direct integration
- **Databricks** — lakehouse streaming
- **Redshift** — warehouse sync

### CloudStream
Activates customer data directly from data clouds without duplicating data into Tealium's platform. Zero-copy activation from existing warehouse infrastructure.

### AIStream
Intelligent real-time customer data stream designed for AI/ML pipelines and feature stores. Delivers enriched, consented profile data to AI models.

## Pricing and limits

Tealium does not publicly disclose pricing. Key facts:
- **Entry point**: ~$149/month (basic iQ Tag Management only)
- **Enterprise CDP**: Custom quotes, typically $50K-$200K+/year depending on event volume
- **Pricing model**: Event-based — costs scale with the number of events collected
- **Overage fees**: If you exceed contract limits, additional fees apply
- **Solution bundles**: Discounts available when purchasing AudienceStream + iQ + EventStream together
- **Implementation**: Professional services typically required — plan $30K-$100K+ for initial deployment

**Plan-gated features** (approximate — verify with Tealium sales):
- iQ Tag Management: Available in all plans
- AudienceStream CDP: Requires CDP license
- EventStream: Requires separate license or bundle
- Composable CDP / CloudStream: Enterprise tier
- Predictive ML scoring: Enterprise tier
- AIStream: Enterprise tier

**Rate limits**:
- Collect HTTP API: 100 events/second (single or bulk)
- API bearer token: Valid 30 minutes, reuse until expiry
- Connector actions: Varies by destination, frequency capping available

## Integrations

### Connector Marketplace (1,300+ integrations)
Categories: Accessibility, AdTech, Affiliates, Analytics, Big Data, CRM, Commerce/CMS, Email, Engagement/VoC, Error/Performance Monitoring, Identity, Mobile, Personalization, Pharma, Search, Security.

**How connectors work**:
- A **connector** is the vendor connection configured with credentials (API keys, account IDs)
- **Actions** are vendor-specific operations (trigger email, build audience, send event)
- **Sources** indicate data origin — audience segments or event feeds
- Actions trigger in real-time when events arrive or when visitors enter/exit audiences

**Connector setup**:
1. Go to Server-Side > Connectors > Marketplace
2. Select the vendor connector
3. Enter authentication credentials
4. Configure actions — map Tealium attributes to vendor fields
5. Set source (audience or event feed)
6. Set frequency capping if needed

**Retry logic**: Failed requests retry at 1-minute, 5-minute, and 30-minute intervals for error codes 408, 429, 500, 502, 503, 504. Non-responsive requests (>5 second timeout) are not retried.

**Overload protection**: If error rates exceed a threshold, Tealium pauses or throttles data transmission until performance stabilizes.

### Native CRM connectors
Salesforce, HubSpot, Microsoft Dynamics, and other major CRMs via the Connector Marketplace.

### Data warehouses
Snowflake (real-time <10s), BigQuery, Databricks, Redshift — via Composable CDP or CloudStream.

### Mobile SDKs
iOS (Swift), Android (Kotlin/Java), React Native, Flutter, NativeScript, Roku. Available on GitHub at github.com/tealium.

## Data model

### Visitor profile structure
Visitor profiles contain these attribute types:

| Type | Sub-object | Description |
|---|---|---|
| Identifiers | `secondary_ids` | Additional visitor IDs |
| Metrics | `metrics`, `metric_lists` | Numeric counts and values |
| Properties | `properties`, `property_lists`, `property_sets` | String attributes |
| Audiences | `audiences` | Dynamic segment membership |
| Flags | `flags`, `flag_lists` | Boolean indicators |
| Dates | `dates` | Timestamp values (first visit, last visit, etc.) |
| Badges | `badges` | Binary membership indicators |
| Metric sets | `metric_sets` | Counted occurrence tallies |
| Sequences | `sequences` | Chronological event history |
| Funnels | `funnels` | Multi-step progression tracking |

### Key identifiers
- `tealium_visitor_id` — anonymous GUID, consistent across sessions
- User identifiers (email, login ID) — for known visitor identification in server-to-server scenarios

## Identity resolution (Visitor Switching)

Tealium's identity resolution merges visitor profiles across devices and channels using Visitor Switching:

**How it works**:
1. Anonymous visitors get a `tealium_visitor_id` (cookie-based)
2. When a visitor identifies (login, form submission, email click), the identifier is stored
3. If that identifier matches an existing profile, profiles merge
4. The merged profile retains the history from both profiles

**Common configurations**:
- **Email-based**: Merge when email matches across profiles
- **Customer ID**: Merge when CRM/system ID matches
- **Cross-device**: Merge when the same login appears on different devices

**Known issues**:
- **Householding**: Shared devices blur individual profiles — configure household rules or exclude shared devices
- **Guest transactions**: Email from a guest checkout may overwrite an existing profile's primary email
- **Call center overwrites**: Agent-entered data can create identity conflicts
- **Default configs often fall short**: Test all identity rules in QA sandbox before production

## Workflow setup

### Setting up iQ Tag Management
1. Create a Tealium account and profile
2. Define your data layer (`utag_data` object) with page and event attributes
3. Add the utag.js loader snippet to your site `<head>`
4. Add vendor tags in the iQ UI — configure templates, set load rules
5. Test in Dev environment using Tealium Tools browser extension
6. Publish to QA → Staging → Production environments

### Setting up EventStream with connectors
1. Create a data source (get the data source key)
2. Send events via Collect HTTP API or SDK
3. In EventStream, create an event feed for the data source
4. Add a connector from the Marketplace
5. Configure connector credentials and actions
6. Map Tealium attributes to destination fields
7. Set trigger conditions (event type, audience membership)
8. Test with sample events, monitor in connector dashboard

### Setting up AudienceStream audiences
1. Define enrichment rules — create metrics (visit count), properties (favorite category), dates (last purchase)
2. Create badges for binary membership
3. Build audiences using enrichment criteria
4. Connect audiences to connectors for activation (ad platforms, email tools, CRM)
5. Monitor audience sizes and connector delivery in the dashboard

## Deep dives

### Tag performance optimization
- Load all tags asynchronously (default in iQ)
- Set tag timeouts (5 seconds recommended) to cancel slow vendor tags
- Prioritize high-value tags (analytics) at the top of the load order
- Use load rules to limit tags to relevant pages only
- Monitor tag performance in the iQ dashboard — look for tags with high load times
- Use bundled extensions to reduce HTTP requests

### Consent management
Tealium provides built-in consent management:
- Consent categories classify tags and connectors (Analytics, Advertising, Personalization, etc.)
- Visitors can opt in/out of categories — Tealium suppresses data collection for opted-out categories
- Privacy API supports GDPR right-to-deletion (DELETE endpoint)
- Consent state persists in the visitor profile and travels across devices when identity is resolved

### SPA (Single Page App) integration
Tealium's default page tracking doesn't detect client-side route changes:
- Call `utag.view(data_layer_object)` on each virtual page view
- For React: `useEffect` hook triggered by route change
- For Angular: subscribe to router events
- For Vue: use router afterEach guard
- Update the data layer object with new page_name, page_type, and page_url values for each view
