# BlueConic Platform Reference

## Platform overview

BlueConic is a marketer-first, pure-play Customer Data Platform (CDP) that enables brands to build dynamic, consent-aware customer profiles, segment audiences in real-time, personalize digital experiences, and activate audiences across 100+ marketing and advertising platforms. Founded in 2010 in the Netherlands, BlueConic positions itself as "The Platform Powering Customer Growth." Target audience is enterprise B2C brands (Heineken, L'Oréal, PepsiCo, Unilever, ASICS). Named a Strong Performer in the 2024 Forrester Wave for CDPs.

Key differentiators:
- Marketer-operated — no SQL or data engineering required for segmentation and activation
- Non-invasive data handling — reads from data warehouses in real-time, doesn't require copying/storing all data
- Consent-driven first-party data collection (GDPR, ISO, CCPA, SOC 2 certified)
- 100+ pre-built connections (named integrations + universal connectors)

## Key modules

### Customer Data Platform (CDP)
- **Profile unification**: Builds unified customer profiles from web, mobile, CRM, email, ecommerce, and offline data. Profiles merge based on shared identifiers (primarily email). Profiles update in real-time with every interaction.
- **Segmentation**: No-code segment builder with behavioral, demographic, and predictive criteria. Segments are dynamic (re-evaluate continuously) or static (snapshot).
- **Audience activation**: Push segments to 100+ marketing, advertising, and analytics platforms via Connections.

### Experiences (by Jebbit)
- Interactive digital experiences — quizzes, surveys, product finders, assessments
- AI Shopping Assistant — conversational product discovery
- AI Discovery Optimization — content personalization
- Progressive profiling — collect zero-party data from anonymous visitors
- Anonymous visitor identification

### AI capabilities
- **AI Workbench**: Jupyter-based environment for custom ML models using BlueConic data. Python package available (`blueconic` PyPI).
- **Lookalike audience expansion**: Find new prospects similar to best customers
- **Customer drop-off prediction**: Identify at-risk customers before they churn
- **Smart replenishment**: Upsell recommendations based on purchase patterns
- **GenAI assistants**: Natural language interaction for data exploration

### Growth Plays (use cases organized by journey stage)
- **Awareness**: Intent-based targeting, lookalike expansion, AI discovery optimization
- **Consideration**: Anonymous identification, progressive profiling, AI Shopping Assistant
- **Purchase**: Cart abandonment recovery, first-purchase acceleration, order value expansion
- **Loyalty**: Tier progression, replenishment upselling, attrition prevention, advocacy growth

### Dialogues (on-site personalization)
- Interactions triggered by segments, behaviors, or events
- Types: banners, overlays, pop-ups, inline content, listeners
- A/B testing and variant management
- Position-based targeting (specific DOM elements)

## Pricing and limits

> *Best-effort from research — verify current pricing directly with BlueConic.*

| Tier | Price | Profile limit | Notes |
|---|---|---|---|
| Pyxis (free) | $0 for 6 months, then $750/mo | 100,000 profiles | Full feature access during trial |
| Standard | ~$2,000/mo+ | Varies by contract | Core CDP, segmentation, connections |
| Professional | Custom | Varies | + advanced features |
| Enterprise | Custom (contact sales) | Varies | + SSO, dedicated support, SLAs |

- Pricing is based on number of managed customer profiles
- 10,000 profiles: ~$5,000-$7,000/month
- Implementation costs: $5,000-$20,000 (SMB) to $50,000+ (enterprise)
- Overage billing is automatic if you exceed profile threshold
- No mobile admin access — desktop-only UI

## Integrations (Connections)

BlueConic Connections are plugins that import/export customer data between BlueConic and your martech stack. Two types:

### Named connections (pre-built)

**Campaign Management & Email**: Acoustic, ActiveCampaign, Adestra, Adobe Marketo, Campaign Monitor, Copernica, Eloqua, Higher Logic, HubSpot, Klaviyo, Iterable, Mailchimp, Responsys, Sailthru, Salesforce Marketing Cloud, SendGrid, WhatCounts

**Advertising**: AdRoll, Amazon Ads, Criteo, Facebook Advertising, Facebook Leads, Google Ad Manager, Google Ad Manager for Publishers, Google Ads, Instagram, LinkedIn, Microsoft Advertising, Pinterest Ads, Prebid.js, Snapchat, The Trade Desk, TikTok, Twitter Ads

**CRM**: Microsoft Dynamics, Salesforce, Zendesk

**E-commerce**: Magento, Shopify

**Analytics & Big Data**: Adobe Analytics, Amazon Kinesis, Amazon Web Services (S3), Azure Blob Storage, Azure Data Lake Storage, Decibel, Google BigQuery, Google Cloud Pub/Sub, Google Drive, Google Storage Cloud, Microsoft Azure Event Hubs, Mixpanel, Power BI, Snowflake, Google Analytics 4

**DMP**: Adobe Audience Manager, Lotame DMP

**Web & Digital Experience**: Adobe Target, Airship, Braze, Ensighten, Firebase, Google Tag Manager, Momentive GetFeedback, Optimizely, Optimizely X, Quickbase, Slack, Tealium, Visual Website Optimizer, Zapier

**Identity & Data Enrichment**: Acxiom, Auth0, Facebook Connect, Gigya, LiveRamp, Unified ID 2.0

### Universal connections

For any system not covered by a named connection:
- **Android SDK** / **iOS SDK** / **React Native SDK** / **Flutter SDK** / **Roku SDK**
- **Apache Kafka**, **CSV**, **IFTTT**, **SFTP**, **Webhooks**

## Data model

### Profile
The core entity — represents a single customer across all touchpoints.

Key properties:
- **Profile ID**: BlueConic-generated unique identifier
- **Profile properties**: Key-value pairs (standard + custom). Standard: email, name, phone, company, etc.
- **Permission levels**: DO_NOT_TRACK, ANONYMOUS, PERSONAL
- **Consent objectives**: Granular consent tracking per purpose (GDPR)
- **Lifecycle stages**: Configurable journey stages per profile
- **Timeline events**: Timestamped events (page views, purchases, custom events)

### Segment
A dynamic or static group of profiles matching defined criteria.

### Dialogue / Interaction
An on-site action (banner, overlay, listener) triggered by segments, behaviors, or events.

### Connection
An import/export pipeline between BlueConic and an external system.

## JavaScript front-end API

Main entry point: `window.blueConicClient` (injected when BlueConic loads).

### Initialization pattern
```javascript
if (typeof window.blueConicClient !== 'undefined' &&
    typeof window.blueConicClient.event !== 'undefined') {
    // BlueConic loaded — proceed
} else {
    window.addEventListener('onBlueConicLoaded', function() {
        // BlueConic now available
    }, false);
}
```

### Key methods

**Profile access**:
- `blueConicClient.profile.getProfile()` — returns current visitor's profile
- `profile.getValue(property)` / `profile.getValues(property)` — read profile data
- `profile.setValue(property, value)` / `profile.setValues(property, values)` — write profile data
- `profile.addValue(property, value)` — append to existing values
- `profile.incrementValue(property, value)` — increment numeric property
- `profile.updateProfile(caller, onSuccess)` — persist changes to server (required after set/add)
- `profile.loadValues(properties, caller, onSuccess)` — async load specific properties
- `profile.getId()` — returns BlueConic Profile ID

**Events**:
- `blueConicClient.createEvent(eventType, interactionId, caller, onSuccess)` — trigger CLICK, VIEW, CONVERSION, or custom events
- `blueConicClient.event.publish(eventName, eventContext)` — publish custom events (does not trigger dialogues)
- `blueConicClient.event.subscribe(eventName, handler, handlerFunction)` — subscribe to events

**Segments & Interactions**:
- `blueConicClient.getSegments()` — returns array of Segment objects (requires "Expose segments" enabled)
- `blueConicClient.getInteractions()` — returns triggered dialogues/variants for current page

**SPA support**:
- `blueConicClient.handlePageView()` — re-evaluate connections/dialogues for current URL. Call after hash changes or client-side route changes.

**Utilities**:
- `blueConicClient.util.loadScript(url, caller, onSuccess)` — load external JS
- `blueConicClient.util.loadCSS(url)` — load external CSS
- `blueConicClient.util.log(message)` — console log with "[BC]" prefix

**Consent**:
- `profile.getConsentedObjectives()` / `profile.getRefusedObjectives()` — consent status
- `profile.addConsentedObjective(id)` / `profile.addRefusedObjective(id)` — set consent
- `profile.getPrivacyLegislation()` — returns legislation based on IP (e.g., 'GDPR')

**Recommendations**:
- `blueConicClient.recommendation.getRecommendations(params, callback)` — product recommendations with algorithms: RECENT_VIEW, COLLABORATIVE_FILTERING, LOOK_ALIKE, INTEREST, etc.

**Timeline**:
- `profile.timeline.createEvent(eventType, date, attributes, caller, onSuccess)` — create timeline event

### Custom interaction pattern
```javascript
var MyInteraction = InteractionType.extend({
    getPreloadProperties: function() { return ['email', 'first_name']; },
    init: function(blueConicClient, ctx) {
        this.bc = blueConicClient;
        this.ctx = ctx;
    },
    onLoad: function() {
        var profile = this.ctx.getProfile();
        var name = profile.getValue('first_name');
        // Business logic here
    }
});
```

## Event API

Custom events for tracking user interactions beyond standard HTML events.

```javascript
// Publish a custom event
window.blueConicClient.event.publish('play_button_clicked', ['my Homevideo']);

// Create a trackable event (triggers dialogues)
blueConicClient.createEvent('myCustomEvent', this, function(result) {
    console.log('event registered');
});
```

Custom events created with `createEvent()` must also be registered in the BlueConic UI via an Event Trigger Listener before they can trigger dialogues.

## REST API v2

- **Base URL**: `https://{tenant}.blueconic.net/` (API spec at `https://rest.apidoc.blueconic.com`)
- **Auth**: OAuth 2.0 (client credentials flow or authorization code flow)
- **Format**: JSON only (XML not supported)
- **Encoding**: gzip by default, minified. Add `?prettyPrint=true` for readable output
- **Version**: R100 (current)
- **Resources**: Visitor profiles, segments, interactions, audit events

### OAuth 2.0 setup
1. BlueConic Settings > Access management > Applications
2. Create application with client credentials enabled
3. Grant desired read/write scopes
4. Copy Client ID and Client Secret
5. Activate and save

## MCP server (Model Context Protocol)

BlueConic has an official MCP server for AI tool integration.

**Package**: `@blueconic/blueconic-mcp` (npx)

**What it does**: Read-only API access to your tenant's OpenAPI spec. Secured with OAuth2 tokens. Enables natural language queries — e.g., "Get all segments from my BlueConic tenant" or "Retrieve 1000 profiles from the all visitors segment."

**Prerequisites**: Active BlueConic tenant, OAuth2 credentials with read scopes, MCP-compatible tool.

**Setup**:
1. BlueConic Settings > Access management > Applications
2. Create app with client credentials, grant read scopes
3. Copy Client ID and Client Secret

**Local client config** (Cursor, VS Code Copilot, Claude Desktop):
```json
{
  "mcpServers": {
    "blueconic": {
      "command": "npx",
      "args": ["@blueconic/blueconic-mcp"],
      "env": {
        "BLUECONIC_TENANT": "your-tenant.blueconic.net",
        "BLUECONIC_CLIENT_ID": "your-client-id",
        "BLUECONIC_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

**Public HTTP server**: `https://{tenant}.blueconic.net/mcp`

**Alternative header** (for n8n, etc.): `"X-BlueConic-Client-ID-Secret": "<client-ID>##<client-secret>"`

**Security note**: MCP gives the AI model access to your BlueConic environment. Grant only necessary read scopes.

## Mobile SDKs

| Platform | Package | Custom plugins |
|---|---|---|
| Android | BlueConic SDK for Android | Yes |
| iOS | BlueConic SDK for iOS | Yes |
| React Native | BlueConic SDK for React Native | Yes |
| Flutter | BlueConic SDK for Flutter | Yes |
| Roku (CTV) | BlueConic SDK for Roku | No |

## Workflow: Setting up BlueConic on a new site

1. **Add the BlueConic script tag** to your site's `<head>` (provided in BlueConic Settings > Channels)
2. **Configure the channel** in BlueConic — set the domain, enable/disable features
3. **Set up profile properties** — map the data you want to collect (email, name, purchase history)
4. **Create connections** — import existing customer data (CRM, ecommerce), export segments to ad platforms
5. **Build segments** — define your key audiences using profile properties and behaviors
6. **Create dialogues** — set up on-site personalization (banners, overlays, recommendations)
7. **Configure consent** — set up privacy objectives for GDPR/CCPA compliance

## Workflow: Activating audiences to ad platforms

1. **Build a segment** in BlueConic (e.g., "Cart abandoners last 7 days")
2. **Create a connection** to the ad platform (e.g., Facebook Advertising)
3. **Map the segment** to the connection's export configuration
4. **Set sync frequency** — real-time or scheduled (hourly/daily)
5. **Verify** — check the ad platform for the matched audience and audience size

## Deep dives

### Data warehouse integration
BlueConic reads directly from data warehouses (Snowflake, BigQuery, S3) in real-time without copying data. This means:
- No data replication costs
- Data stays in your existing infrastructure
- Profiles enriched in real-time from warehouse queries
- Connections: Snowflake, Google BigQuery, Amazon S3, Azure Blob/Data Lake

### Sandbox environment
BlueConic supports sandbox environments for testing. Changes in sandbox don't affect production. Use for testing new dialogues, connections, and segments before going live.

### Browser performance
BlueConic provides performance guidelines. Key considerations:
- Script loads asynchronously — minimal impact on page load
- Preload profile properties via `getPreloadProperties()` for efficiency (single server call vs multiple `loadValues()` calls)
- Use library dependencies in XML definitions instead of `util.loadScript()` for better caching

### SSO integration
BlueConic supports Single Sign-On via SAML 2.0. Enterprise feature for centralizing user management.

### Plugin development
Custom plugins extend BlueConic's functionality:
- XML definition file describes the plugin structure
- JavaScript implements the business logic
- Can access profile data, create events, and modify the DOM
