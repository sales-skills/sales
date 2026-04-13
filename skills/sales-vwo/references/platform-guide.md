# VWO Platform Reference

## Platform overview

VWO (Visual Website Optimizer) is a digital experience optimization platform built by Wingify. It combines A/B testing, behavior analytics (heatmaps, session recordings), website personalization, and feature flag management into a single suite. In January 2026, VWO merged with AB Tasty to form a combined entity with $100M+ annual revenue and 4,000+ customers globally. Target audience: ecommerce, SaaS, media, and enterprise marketing/product teams.

**Key people**: Sparsh Gupta (CEO), Ankit Jain (CTO/CPTO), Rémi Aubert (Chief Customer & Strategy Officer, ex-AB Tasty), Alix de Sagazan (CRO, ex-AB Tasty).

## Key modules

### VWO Testing
A/B, multivariate (MVT), and split URL testing with a visual editor and code editor.
- **Visual editor**: Point-and-click editor for text, images, CSS, element visibility. Works best on static/server-rendered sites. Breaks on SPAs and dynamically rendered content.
- **Code editor**: JavaScript/CSS injection for complex changes. Required for dynamic sites.
- **Multivariate testing**: Test multiple element combinations simultaneously. Requires high traffic (4x+ the sample of A/B).
- **Split URL testing**: Redirect traffic between entirely different page URLs. Good for testing redesigns.
- **Statistics**: Bayesian engine by default. Shows probability to be best, expected loss, and improvement range.
- **Goals**: Track clicks, page visits, form submissions, revenue, custom events. Multiple goals per test allowed but app may slow with many goals.
- **Targeting**: URL patterns, visitor segments (device, location, behavior, cookie, custom attributes), traffic allocation percentage.
- **Preview**: Built-in preview mode and Chrome extension for verifying changes before going live.

### VWO Insights
Behavior analytics — understand what visitors do and why they struggle.
- **Heatmaps**: Click maps, scroll maps, move maps (mouse movement). Generated from sampled visitor data on high-traffic sites.
- **Session recordings**: Replay individual visitor sessions including clicks, scrolls, form interactions, rage clicks, and dead clicks. Filterable by page, device, duration, events.
- **Form analytics**: Field-level drop-off analysis showing where users abandon forms.
- **Surveys**: On-page surveys and feedback widgets for qualitative data.
- **Funnels**: Funnel visualization showing drop-off between defined steps. Uses implicit ordered funnels — users must hit all steps in sequence.

### VWO Personalize
Dynamic content targeting based on visitor attributes.
- **Audience targeting**: Device type, geo-location, traffic source, cookie values, day/time, custom JavaScript conditions.
- **Experience types**: Content changes (text/image swaps), widget overlays, redirect experiences.
- **Mutually exclusive experiences**: Ensure visitors see only one personalization at a time to avoid conflicts.
- **Measurement**: Built-in A/B testing of personalized vs default experience.

### VWO Feature Experimentation (FME)
Server-side feature flags and experimentation via SDKs.
- **Feature flags**: Boolean or multivariate flags with variables (string, integer, boolean, JSON).
- **Rules**: Rollout rules (percentage-based), A/B test rules, personalization rules. Multiple rules per flag with priority ordering.
- **Environments**: Separate configurations for development, staging, production.
- **SDKs**: Node.js, Python, Java, PHP, Ruby, Go, .NET, React, Flutter, React Native, Android, iOS. All Apache 2.0 licensed on GitHub under Wingify org.
- **OpenFeature providers**: Available for Node.js, Python, Java, Go, PHP, .NET — standard feature flag interface.
- **MCP Server**: `vwo-fme-mcp` repo — Model Context Protocol server for AI agent integration with feature flags.
- **REST API** (Enterprise only): CRUD for feature flags and rules, workspace management.
  - Feature Flag APIs: GET all flags, GET specific flag, POST create flag, PATCH update flag
  - Feature Flag Rules APIs: GET projects/environments, GET all rules, GET specific rule, POST create rule, PATCH update rule, PATCH toggle rule status, PATCH toggle environment status, DELETE rule
  - Auth: API token from `app.vwo.com/#/developers/tokens`
  - Contact: api@vwo.com

### VWO Web Rollouts
Deploy UI changes to a percentage of visitors without a code deploy.
- Uses the same visual/code editor as VWO Testing.
- Gradual rollout with percentage control.
- Instant rollback without deployment.

## Pricing and limits

VWO uses Monthly Tracked Users (MTU) — a visitor counted when they enter a VWO-powered campaign.

| Plan | Monthly cost (annual billing) | Key features |
|---|---|---|
| Starter/Free | $0 (up to 50K MTU) | Basic A/B testing only |
| Growth | $198–$314 | A/B testing, basic insights, limited integrations |
| Pro | $531–$972 | Full testing, insights, personalization |
| Enterprise | $1,265+/mo (custom) | API access, advanced analytics, dedicated support |

**Module pricing**: VWO Testing, Insights, Personalize, Web Rollouts, and Feature Experimentation are priced separately or bundled. Mobile Insights is Enterprise-only (~$1,374+/mo).

**MTU counting**: Same visitor across multiple campaigns of one product = 1 MTU. Same visitor across different VWO products = separate MTU per product. Quota is delivered upfront (except Insights, which auto-adjusts sampling). When quota exhausts, all tests and data capture stop immediately until next billing cycle.

**Median customer spend**: $16,660/year (based on verified purchases). 15-30% discounts available through negotiation.

## Integrations

**Analytics**: Google Analytics 4 (bi-directional), Amplitude (cohorts + events), Snowflake (data streaming), Google Cloud Storage
**CRM**: Salesforce (campaign data sync, daily auto-sync), HubSpot (audience targeting, experiment data)
**Segment**: VWO Segment integration (forward experiment impressions via `@segment/analytics-next`)
**Tag managers**: Google Tag Manager
**Heatmap/recording competitors**: Can coexist with Hotjar, Clarity, etc. but may increase page load
**SmartCode**: JavaScript snippet placed in `<head>` — must load synchronously to prevent flicker

## Data model

### VWO Testing
| Entity | Description |
|---|---|
| **Campaign** | An A/B, MVT, or split URL test |
| **Variation** | A version of the page/element being tested (including Control) |
| **Goal** | A metric being tracked (click, pageview, revenue, custom event) |
| **Segment** | Audience targeting rules for who enters the campaign |
| **SmartCode** | The JavaScript snippet that connects VWO to your site |

### VWO FME
| Entity | Description |
|---|---|
| **Feature flag** | A named flag with a key, variables, and rules |
| **Rule** | A rollout, A/B test, or personalization attached to a flag |
| **Environment** | A deployment context (dev, staging, production) |
| **Variable** | A typed value attached to a flag (string, int, bool, JSON) |
| **Project** | A container for organizing flags |

## Workflow setup

### Setting up your first A/B test
1. Install SmartCode: Add the VWO JavaScript snippet to your site's `<head>` (synchronous, before page content loads).
2. Create a campaign: Dashboard → Testing → Create → A/B Test.
3. Set the URL: Enter the page URL to test.
4. Create variations: Use the visual editor or code editor to make changes. Name variations descriptively.
5. Define goals: Add at least one conversion goal (click, page visit, custom event). Set the primary goal.
6. Set targeting: Choose URL targeting rules, visitor segments, and traffic allocation.
7. Preview: Use VWO preview mode to verify all variations render correctly.
8. Launch: Start the campaign. Wait for statistical significance before declaring a winner.

### Setting up feature flags with FME SDK
1. Create a feature flag in the VWO dashboard (Feature Experimentation section).
2. Define variables and default values.
3. Create rules: rollout percentage, A/B test variations, or personalization conditions.
4. Install the SDK: `npm install vwo-fme-node-sdk` (or equivalent for your language).
5. Initialize: Provide your account ID, SDK key, and optional event gateway.
6. Evaluate: Call `getFlag(flagKey, context)` to check if the flag is enabled and get variable values.
7. Track: Call `trackEvent(eventName, context)` to send conversion events.

### Setting up heatmaps
1. SmartCode must be installed (same as testing).
2. Dashboard → Insights → Heatmaps → Create.
3. Enter the page URL to track.
4. Choose heatmap type: click map, scroll map, or move map.
5. Set sampling rate if needed (auto-adjusts on high-traffic sites).
6. Wait for data collection (typically 24-48 hours for meaningful patterns).

## Deep dives

### SmartCode installation and flicker prevention
VWO SmartCode is a JavaScript snippet that must be placed in the `<head>` tag, synchronously (not `async` or `defer`). If loaded asynchronously, visitors see the original content briefly before VWO applies changes ("flash of original content" / FOOC).

For single-page applications: Use VWO's SPA mode or the `activate` API to re-evaluate campaigns on route changes. The visual editor alone won't work reliably on SPAs.

### Statistical significance in VWO
VWO defaults to Bayesian statistics. Key metrics shown:
- **Probability to be best**: The chance this variation is the winner (aim for >95%).
- **Expected loss**: How much conversion rate you'd lose by choosing this variation if it's not actually the best.
- **Improvement range**: Confidence interval for the improvement over control.

**Minimum sample guidance**: At least 100 conversions per variation, run for at least 7 days (full business cycle). For low-traffic sites, test bigger changes and use fewer variations.

### VWO and the AB Tasty merger
Announced January 20, 2026. The combined entity has 11 offices, $100M+ revenue, 4,000+ customers. Everstone Capital is the largest institutional shareholder. Leadership: Sparsh Gupta (CEO), Ankit Jain (CPTO), Rémi Aubert (CCSO), Alix de Sagazan (CRO). Existing contracts, pricing, and support remain unchanged during transition.

### VWO SDK architecture
All SDKs follow the same pattern:
1. Initialize with `accountId` and `sdkKey`
2. `getFlag(flagKey, context)` → returns flag status and variable values
3. `trackEvent(eventName, context)` → sends conversion data
4. Context includes `id` (user identifier) and optional custom attributes for targeting

SDKs handle bucketing (consistent user assignment to variations), event batching, and network error recovery. All hosted on GitHub under the `wingify` org with Apache 2.0 license.
