# Pendo Platform Reference

## Platform overview

Pendo is a product experience and analytics platform that helps software companies understand user behavior, collect feedback, and guide users through in-app experiences. It combines product analytics, in-app guidance, session replay, and feedback collection in a single platform. Target audience: B2B SaaS product teams, product managers, customer success teams, and UX researchers. Key differentiator: retroactive analytics — Pendo captures all user interaction data automatically without requiring custom event instrumentation, so you can analyze behavior for features and pages you tag after the fact.

Pendo processes 6B+ events daily and reaches 290M+ monthly end users.

## Key modules

### Product Analytics
- **Retroactive analytics**: Tag pages and features at any time, then analyze historical data going back to when the agent was installed
- **Paths**: Visualize user navigation flows between pages
- **Funnels**: Multi-step conversion analysis with drop-off identification
- **Retention**: Cohort-based retention analysis
- **Feature adoption**: Track which features users discover and use, with adoption rate trends
- **Frustration metrics**: Rage clicks, error clicks, dead clicks, U-turns — available for Pages and Features
- **Segments**: Behavioral and metadata-based user groups for targeting and analysis

### In-App Guides
- **Guide types**: Tooltips, lightboxes (modals), banners, walkthroughs (multi-step)
- **Resource Center**: In-app help hub combining guides, announcements, links, and onboarding checklists
- **Visual editor**: No-code guide creation directly on top of your live app
- **Targeting**: By segment, page, feature usage, metadata, or custom rules
- **Activation**: On page load, element click, element hover, or custom event
- **A/B testing**: Test guide variants for effectiveness
- **Localization**: Multi-language guide support

### Session Replay
- **Full session recording**: See what users see, click by click
- **Privacy controls**: Mask sensitive fields, exclude elements
- **Linked to analytics**: Jump from an analytics event to the session replay that contains it
- **Availability**: Core plan and above, or as paid add-on on Base

### Listen (Feedback)
- **Feedback collection**: In-app feedback widget for feature requests and bug reports
- **Voting**: Users can vote on feature requests to surface demand
- **Prioritization**: Score requests by votes, revenue impact, and strategic alignment
- **Roadmap sharing**: Publish a roadmap to show users what's planned

### Sentiment (Surveys)
- **NPS**: Net Promoter Score surveys with trend tracking
- **CSAT**: Customer Satisfaction surveys
- **PMF**: Product-Market Fit surveys ("How disappointed would you be if...")
- **Custom surveys**: Build custom in-app surveys with multiple question types
- **UX-Lite**: Standardized UX measurement survey
- **Availability**: Ultimate plan includes all; lower plans via add-on

### Predict
- **Churn prediction**: ML-based identification of at-risk accounts
- **Upsell prioritization**: Identify accounts with expansion potential
- **Availability**: Add-on for all plans

### Orchestrate
- **Multi-channel coordination**: Coordinate in-app guides with email, push, and other channels
- **Journey orchestration**: Design multi-step user journeys across touchpoints
- **Availability**: Ultimate plan

### Data Sync
- **Warehouse connectors**: Push Pendo data to Snowflake, BigQuery, Redshift, etc.
- **Bi-directional sync**: Pull data from external systems into Pendo
- **Availability**: Ultimate plan

### Agent Analytics
- **AI agent monitoring**: Track adoption and ROI of AI agents within your product
- **Usage metrics**: Agent interaction frequency, completion rates, user satisfaction
- **Availability**: Free allowance included, custom volume available

### Leo AI
- **Natural language querying**: Ask questions about your product data in plain English
- **Agent mode**: Autonomous analysis and recommendation generation
- **Available**: All plans

## Pricing and limits

| Plan | MAU | Analytics | Guides | Session Replay | Sentiment | Orchestrate | Data Sync | Price |
|---|---|---|---|---|---|---|---|---|
| **Free** | Up to 500 | Yes | Yes | Add-on ($) | Pendo-branded NPS/roadmap | No | No | Free |
| **Base** | Custom | Yes | Yes | Add-on ($) | Add-on ($) | No | No | Custom |
| **Core** | Custom | Yes | Yes | Included | Add-on ($) | No | No | Custom |
| **Ultimate** | Custom | Yes | Yes | Included | Included (NPS, PMF, CSAT) | Included | Included | Custom |

**Reported pricing**: $15,000-$140,000+/year depending on MAU and features. Base plan reported at ~$2K/quarter for 2K MAU.

**Universal features** (all plans): Leo AI, retroactive analytics, enterprise-grade security (SOC2, GDPR, HIPAA), 85+ integrations.

**Add-ons available on all plans**: Predict (churn/upsell, custom pricing), Agent Analytics.

## Integrations

### CRM
- **HubSpot**: Two-way integration (paid add-on). Pull visitor/account metadata from HubSpot into Pendo. Push product usage data and NPS results from Pendo into HubSpot.
- **Salesforce**: Paid add-on. Submit feedback from Salesforce to Pendo Discover. Pull visitor metadata from Salesforce User object.

### Data platforms
- **Segment** (Twilio): Webhooks, paid add-on
- **Data warehouses**: Snowflake, BigQuery, Redshift via Data Sync (Ultimate plan)
- **ETL tools**: Compatible with Singer taps, Stitch, Fivetran

### Developer tools
- **MCP Server**: Model Context Protocol support for connecting Pendo data to AI tools (Claude, Cursor)
- **Webhooks**: Real-time event notifications
- **REST API**: Full programmatic access (see API reference)

### Other
- 85+ total integrations covering analytics, support, project management, and communication tools
- Zapier available for lightweight integrations

## Data model

### Core objects
- **Visitor**: Individual user identified by `visitorId` (your internal user ID). Has auto-captured metadata (email, name, role, first/last visit) and custom metadata fields.
- **Account**: Company/organization identified by `accountId`. Groups visitors. Has auto and custom metadata.
- **Page**: A tagged URL pattern in your application.
- **Feature**: A tagged UI element (button, link, section) in your application.
- **Guide**: An in-app message (tooltip, modal, walkthrough) with targeting rules and display conditions.
- **Track Event**: A custom event sent via the SDK for actions not captured by automatic click/page tracking.

### Key relationships
- Visitors belong to Accounts (many-to-one)
- Events (page views, feature clicks, guide interactions) belong to Visitors
- Guides target Segments (groups of visitors based on metadata + behavior)

### ID strategy
- `visitorId` should be your internal user ID (UUID or database ID), NOT email. Emails change; IDs don't.
- `accountId` should be your internal organization/tenant ID.
- Both are set in the Pendo install script and cannot be changed after creation.

## Installation methods

1. **Install script** (most common): JavaScript snippet added to your app's HTML. Supports SPAs with automatic route detection.
2. **Tag manager**: Deploy via Google Tag Manager or similar.
3. **Pendo Launcher**: Browser extension for quick testing without code changes.
4. **Mobile SDK**: Native SDKs for iOS (Swift/ObjC), Android (Kotlin/Java), React Native, Flutter, Xamarin, MAUI.

### Install script example (web)
```javascript
(function(apiKey){
    // Pendo agent snippet
    // Configure with your API key
    pendo.initialize({
        visitor: {
            id: 'VISITOR-UNIQUE-ID',  // Your internal user ID
            email: 'user@example.com',
            role: 'admin'
            // Custom metadata fields (must be pre-defined in Pendo UI)
        },
        account: {
            id: 'ACCOUNT-UNIQUE-ID',  // Your internal org ID
            name: 'Acme Corp',
            planLevel: 'enterprise'
        }
    });
})('YOUR-API-KEY');
```

## Workflow setup

### Setting up feature adoption tracking
1. Install Pendo agent on all pages of your app
2. Define visitor ID and account ID strategy
3. Configure metadata fields in Pendo UI (Settings > Subscription Settings > Metadata)
4. Tag your top 5-10 features by business value using the visual tagger
5. Create segments for key user groups (by plan, role, tenure)
6. Build a feature adoption dashboard with adoption rate trends
7. Set up alerts for low-adoption features

### Creating an onboarding guide flow
1. Identify the 3-5 critical actions for new user activation
2. Create a segment for new users (e.g., signed up < 7 days ago)
3. Build guides in sequence: welcome modal → feature tooltip → success confirmation
4. Set activation rules: each guide triggers when the previous step is completed
5. Add a Resource Center checklist showing progress
6. Set display limits (show each guide once per user)
7. Monitor completion rates in guide analytics

### Setting up NPS surveys (Ultimate plan or Sentiment add-on)
1. Create an NPS survey in Pendo Sentiment
2. Target: active users who have been on the platform 30+ days
3. Throttle: no more than once per 90 days per user
4. Deploy via in-app survey (not email — Pendo only reaches in-app users)
5. Set up detractor alerts to route to CS team
6. Track NPS trend over time, segmented by plan and tenure

## Deep dives

### Page and feature tagging best practices
- **Pages**: Use URL rules with wildcards for dynamic segments. Example: `/app/projects/*/settings` matches all project settings pages.
- **Features**: Tag the primary interaction element (the button, not the container). Use the visual tagger in Pendo's Chrome extension.
- **Naming convention**: `Module > Feature > Action` (e.g., "Dashboard > Export > CSV Button")
- **Don't over-tag**: Start with high-value features. You can always add more later. 10 well-tagged features > 100 poorly named ones.
- **Stable selectors**: Add `data-pendo="feature-name"` attributes to your HTML for reliable targeting that survives UI redesigns.

### SPA (Single-Page Application) considerations
- Pendo auto-detects route changes in most SPAs (React, Angular, Vue)
- If using hash-based routing, configure Pendo to track hash changes
- For custom routing, call `pendo.pageLoad()` manually on route changes
- Test page tracking in your SPA by navigating and checking the Pendo debugger

### Pendo vs competitors
| Capability | Pendo | Appcues | WalkMe | Userpilot |
|---|---|---|---|---|
| Product analytics | Deep (retroactive, funnels, paths) | Basic | Moderate | Moderate |
| In-app guides | Yes (visual editor) | Yes (visual editor) | Yes (visual editor) | Yes (visual editor) |
| Session replay | Yes (Core+) | No | No | No |
| NPS/CSAT surveys | Yes (Ultimate or add-on) | Yes (built-in) | No | Yes (built-in) |
| Feedback/roadmap | Yes (Listen module) | No | No | No |
| Mobile SDK | Yes (iOS, Android, RN, Flutter) | No (web only) | Yes | No (web only) |
| Churn prediction | Yes (Predict add-on) | No | No | No |
| Free tier | 500 MAU | No | No | No |
| Pricing | $15K-$140K+/yr | From $249/mo | Custom ($$$) | From $299/mo |
| Best for | Product teams wanting analytics + guidance in one platform | Teams wanting simple no-code onboarding | Enterprise employee digital adoption | Mid-market SaaS product-led growth |
