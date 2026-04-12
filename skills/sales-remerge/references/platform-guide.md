# Remerge Platform Guide

## Platform Overview

Remerge is a demand-side platform (DSP) custom-built for **in-app retargeting** — it serves ads to users inside other mobile apps (not on the mobile web). Founded 2014 in Berlin, 180+ employees, offices in Berlin, New York, Tokyo, Singapore, Seoul.

**What makes Remerge different from web retargeting (AdRoll, Criteo, Google Ads):**
- Targets users **inside apps**, not on websites or the mobile web
- Uses **Mobile Measurement Partner (MMP)** data (AppsFlyer, Adjust, Branch) instead of website pixels
- Segments based on **in-app events** (purchases, level completions, cart additions) not page views
- Deep links land users at specific in-app screens, not web pages
- Designed for mobile app verticals: gaming, e-commerce, delivery, finance

## Core Capabilities

### Audience Segmentation
- Real-time segmentation based on in-app activity via MMP event streams
- Segment types: first-time buyers, active users, churned/lapsed users, high-value users, custom event-based segments
- Segments update dynamically as new events stream in
- Recommended: share last 3 months of historical user data for initial segment building

### Campaign Types
- **Re-engagement**: Bring back lapsed users who haven't opened the app in X days
- **Retention**: Keep active users engaged with personalized offers
- **User acquisition**: Find new high-value users via lookalike modeling
- **Cross-promotion**: Promote other apps in your portfolio to existing users

### Dynamic Product Ads (DPAs)
- Auto-generated ads using product catalog data
- Personalized with products the user viewed, carted, or purchased
- Deep links to specific product pages inside the app
- Requires product feed integration

### Incrementality Measurement
- Randomized control trials: test group (sees ads) vs control group (does not)
- Measures true campaign lift beyond organic behavior
- Remerge's primary success metric — not just ROAS or CPA
- Results typically show 40-60% of attributed conversions are truly incremental

### Creative Services
- In-house creative team available
- Static images required in 5 aspect ratio sizes + native ad background
- Dynamic creative optimization for DPAs
- Video ad formats supported

### Bidding and Optimization
- Efficient bidding algorithms optimized for in-app conversion events
- 40 billion daily bid requests with IDs available (iOS)
- Access to thousands of publisher apps through SSP partnerships
- CPA, CPC, CPE, CPS, and ROAS pricing models available

## Privacy and Compliance

### iOS (ATT framework)
- Only 20-35% of iOS users allow IDFA tracking post-ATT
- Remerge processes available IDFAs for consenting users
- Reduced iOS retargeting scale is industry-wide, not Remerge-specific
- Exploring Privacy Sandbox on-device bidding (partnership with Verve Group)

### Android (Privacy Sandbox)
- Google phasing in Topics API and Attribution Reporting API
- Remerge adapting bidding and attribution to work within new constraints
- On-device bidding reduces reliance on device-level identifiers

### GDPR
- Remerge operates as a data processor
- Highest data protection level claimed
- Opt-out functionality available for end users

## Integrations

### Mobile Measurement Partners (MMPs)
- **AppsFlyer**: Premier Partner. Enable Remerge as an ad network in AppsFlyer → configure postbacks for install and in-app events → set up tracking links with campaign naming conventions
- **Adjust**: Certified partner. Configure callback URLs for events → enable Remerge module
- **Branch**: Universal Links and App Links support for deep linking

### CRM / Engagement Platforms
- **Braze**: Webhook integration. POST to `https://remerge.events/event` with user ID, device identifiers (IDFA/AAID), app IDs, and event data. HTTP 204 = success. Content-Type: application/json.
- Other platforms can integrate via the Event Tracking API

### Setup Requirements for Any Campaign
1. MMP integration activated (event stream flowing to Remerge)
2. SDK integrated in your app (for performance data)
3. Deep links configured with trackable parameters
4. Historical user data shared (last 3 months recommended)
5. Creative assets provided (static in 5 aspect ratios minimum)

## API Reference

### Reporting API
- Pull JSON-based reports for active campaigns
- Daily granularity
- Clients use cURL, internal API tools, or BI connectors
- Authentication: API key (provided by Remerge account team)
- Base URL: documented at help.remerge.io (access restricted to clients)

### Event Tracking API
- Endpoint: `https://remerge.events/event`
- Method: GET or POST
- Send webhook events with user identifiers and event data
- Used for CRM integrations (Braze, etc.)
- Parameters: app_id (Android/iOS), event name, device identifiers (IDFA/AAID), partner key

*Note: Remerge's help center (help.remerge.io) is restricted to clients. Full API documentation requires an active account. The details above are from public integration docs and partner documentation.*

## Service Model

Remerge offers both:
- **Managed service**: Dedicated account team handles campaign optimization, creative, segmentation — primary offering
- **Self-service**: Available but less emphasized

**Pricing**: Not publicly available. Custom quotes based on campaign volume. Supports CPA, CPC, CPE, CPS, and Revshare/ROAS models across mobile display and video inventory.

## Competitor Comparison

| Feature | Remerge | Adikteev | Liftoff | Criteo |
|---|---|---|---|---|
| **Focus** | In-app retargeting (DSP) | App re-engagement + churn prediction | UA + retargeting (broader) | Ecommerce retargeting (web + app) |
| **Incrementality** | Core feature — randomized control trials | Available | Available | Available |
| **Creative** | In-house team + DPAs | In-house + interactive/video | Self-serve + managed | Dynamic Creative Optimization+ |
| **Privacy** | Privacy Sandbox partner (Verve Group) | Privacy-first focus | ID-less solutions | Large first-party publisher network |
| **Verticals** | Gaming, e-commerce, delivery | Gaming, e-commerce, finance | Gaming, e-commerce, apps | Primarily ecommerce |
| **Scale** | 40B daily bid requests | Smaller but focused | Very large (Vungle + Liftoff merger) | Massive publisher network |
| **Pricing** | Custom, managed-service-first | Custom | Self-serve + managed | High minimums |

## Budget Allocation for App Retargeting

| App maturity | Retargeting budget (% of total UA+retargeting) | Focus |
|---|---|---|
| New app (<6 months) | 10-20% | Mostly UA, limited retargeting pool |
| Growing app (6-18 months) | 20-30% | Build retargeting as user base grows |
| Mature app (18+ months) | 30-50%+ | Retargeting often more efficient than new UA |

*Industry guidance: start with 20-30% of growth budget on retargeting, adjust based on incrementality results.*
