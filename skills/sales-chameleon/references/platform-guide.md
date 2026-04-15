# Chameleon Platform Reference

## Platform overview

Chameleon is an AI-powered product adoption platform for SaaS companies. It enables product teams to create personalized in-app experiences — product tours, tooltips, microsurveys, launchers, checklists, banners, and interactive demos — without engineering. Targets product managers, product marketers, and product designers. Web-only (no native mobile). Competes with Pendo, Appcues, Whatfix, UserGuiding, and Userpilot.

Key differentiators: deep customization (CSS-level control), AI features (Copilot for campaign building, Ranger for optimization), 30+ native integrations, and a focus on SaaS product-led growth.

## Key modules

### Product Tours
Multi-step guided walkthroughs with modals, tooltips, and highlight overlays. WYSIWYG builder on top of your live app. Supports branching logic (show different steps based on user actions), element targeting via CSS selectors, URL matching for SPAs, and display rules (frequency, segment, schedule). Unlimited on all paid plans.

### Tooltips
Standalone contextual tooltips pointing to specific UI elements. Triggered on page load, hover, or click. Useful for feature discovery without full tours. Unlimited on all paid plans.

### Microsurveys
In-app surveys — NPS, CSAT, PMF, custom. Templates for common survey types. Response collection via dashboard, API, or webhook. Responses can be pushed to analytics tools. **Startup: 5 microsurveys. Growth+: unlimited.**

### Launchers
In-app widget/button that opens a menu of resources, tours, checklists, or links. Persistent UI element users can access anytime. Think of it as a custom help menu. **Startup: 1 launcher. Growth+: unlimited.**

### HelpBar
AI-powered search bar (Cmd+K) within your app. Searches across your help center, Chameleon experiences, and custom content. Available as an add-on.

### Banners
Non-blocking top/bottom announcements. Good for feature releases, maintenance notices, promotions. Dismissible.

### Checklists
Onboarding task lists with completion tracking. Users see progress and can click to launch tours or navigate to features. Tied to Chameleon events for auto-completion.

### Interactive Demos (AI)
AI-generated interactive product demos. Available on Growth+ plans. Uses AI to create guided demo experiences from your product.

### A/B Testing
Split test different tour/survey variants. Measures completion rates, click rates, goal conversion. **Growth+ only.**

### Copilot AI
AI assistant for building campaigns. Generates tour copy, suggests targeting, recommends improvements. Available on all plans.

### Ranger AI
AI optimization agent. Monitors experience performance and suggests/auto-applies optimizations. **Growth+ only.**

### Automations
Trigger actions based on user behavior — e.g., show a tour when a user visits a page for the 3rd time, or send a webhook when a survey is completed. Rules-based automation engine.

## Pricing and limits

| Feature | Startup ($279/mo) | Growth ($15K/yr) | Enterprise (custom) |
|---|---|---|---|
| **Price** | $279/mo base, scales with MTU | $15,000/yr | Custom |
| **Tours & Tooltips** | Unlimited | Unlimited | Unlimited |
| **Microsurveys** | 5 | Unlimited | Unlimited |
| **Launchers** | 1 | Unlimited | Unlimited |
| **Seats** | 6 | 15 | Unlimited |
| **Tracked Events** | 5 | 20 | 50 |
| **Environments** | 2 | 4 | Unlimited |
| **A/B Testing** | — | ✓ | ✓ |
| **Localization** | — | — | ✓ |
| **SAML SSO** | — | ✓ (2FA + Google SSO on Startup) | ✓ |
| **Interactive Demos AI** | — | ✓ | ✓ |
| **Ranger AI** | — | ✓ | ✓ |
| **Custom CSS** | ✓ | ✓ | ✓ |
| **Copilot AI** | ✓ | ✓ | ✓ |
| **Support** | Email + Help Center | Email + Zoom + go-live plan | Email + Zoom + success packages |

**MTU-based pricing**: All plans scale with Monthly Tracked Users. Startup tiers: base $279, then +$75, +$200, +$200, +$200 per tier. Growth pricing customized by MTU volume ($12K-$60K+ range).

**30-day money-back guarantee** on all plans. Free 30-day trial available. "Demos Free" tier for exploring interactive demos only.

## Integrations

### Analytics & Data
- **Amplitude** — bidirectional: target by Amplitude data, push Chameleon events to Amplitude
- **Heap** — pull Heap data for targeting, push engagement metrics back
- **Mixpanel** — target based on behavioral data, analyze impact in Mixpanel
- **Google Analytics (GA4)** — send Chameleon events to GA4 for analysis
- **FullStory** — see how users interact with tours in session replays

### CRM & Sales
- **HubSpot** — build audiences, trigger in-app messages based on CRM data
- **Salesforce** — target experiences using contact and account data
- **Chili Piper** — enable in-app meeting booking from tours/launchers

### Data Infrastructure
- **Twilio Segment** — install Chameleon via Segment, bidirectional data flow
- **Census** — sync enriched warehouse data to Chameleon for targeting
- **Hightouch** — sync warehouse data to Chameleon
- **Fivetran** — send Chameleon data to your data warehouse
- **Google Tag Manager** — deploy Chameleon via GTM
- **Freshpaint** — install and sync data between tools

### Support & Help
- **Intercom** — offer help at the right moment, sync in-app and help center data
- **Help Scout** — surface help articles in-app at relevant moments
- **Zendesk** — context-aware help within the app

### Surveys & Feedback
- **Typeform** — launch engaging in-app surveys
- **Airtable** — collect in-app feedback into Airtable bases

### Video & Presentation
- **Loom**, **Vimeo**, **Wistia**, **YouTube** — embed videos in tours
- **Pitch** — present slides in-app

### Interactive Demos
- **Arcade**, **Navattic** — embed interactive product demos in tours
- **Figma** — show designs/prototypes in-app

### Calendar & Scheduling
- **Calendly** — in-app meeting booking from tours

### Events
- **Livestorm** — in-app webinar registration

### Other
- **Custom JS** — extend with custom code
- **Zapier** — connect to 5000+ apps
- **G2** — prompt users to leave G2 reviews in-app

## Data model (API)

### Key objects

| Object | Description | API path |
|---|---|---|
| **User Profiles** | Users identified via `chmln.identify()`. Properties: email, name, plan, custom data | `/v3/analyze/profiles` |
| **Companies** | Account/company data associated with users | `/v3/analyze/companies` |
| **Tours** | Product tour configurations — steps, targeting, display rules | `/v3/edit/tours` |
| **Microsurveys** | Survey configurations — questions, targeting | `/v3/edit/surveys` |
| **Tour Interactions** | User interaction data — started, completed, dismissed, per step | `/v3/analyze/interactions` |
| **Microsurvey Responses** | Survey answers collected from users | `/v3/analyze/responses` |
| **Segments** | User segments for targeting — rules-based or manual | `/v3/edit/segments` |
| **Launchers** | Launcher widget configurations | `/v3/edit/launchers` |
| **Tooltips** | Standalone tooltip configurations | `/v3/edit/tooltips` |
| **Deliveries** | Programmatic experience delivery to specific users | `/v3/edit/deliveries` |
| **Webhooks** | Webhook endpoint configurations | `/v3/edit/webhooks` |
| **Rate Limit Groups** | Control experience display frequency | `/v3/edit/limit_groups` |
| **Alert Groups** | Notifications when experiences violate alert conditions | `/v3/edit/alert_groups` |
| **Tags** | Organize experiences with tags | `/v3/edit/tags` |
| **Domains** | Approved domains for Chameleon | `/v3/edit/urls` |
| **Data Properties** | Custom property definitions | `/v3/edit/properties` |
| **Data Imports** | CSV import configurations | `/v3/edit/imports` |

### Relationships
- Users belong to Companies (optional)
- Tours/Microsurveys target Segments
- Tours have Steps with Elements (CSS selectors)
- Rate Limit Groups control how often experiences show
- Deliveries push a specific experience to a specific user

## Workflow setup

### Setting up your first product tour

1. **Install Chameleon** — add JS snippet via npm (`@chamaeleonidae/chmln`), script tag, or Segment
2. **Identify users** — call `chmln.identify(userId, { email, name, plan, ... })` with user data
3. **Approve domain** — add your app domain in Settings → Domains
4. **Build a tour** — open the Builder overlay, navigate to the target page, add steps (modals, tooltips, highlights)
5. **Set targeting** — choose segment (e.g., "new users who signed up < 7 days ago"), URL matching, and display rules
6. **Test** — preview the tour using the Builder's test mode on your own account
7. **Publish** — activate the tour. Monitor in Analytics dashboard.

### Setting up microsurveys

1. **Create a microsurvey** — choose template (NPS, CSAT, PMF, custom)
2. **Add questions** — single-choice, multi-choice, text input, rating scale
3. **Set targeting** — segment + URL + display rules (e.g., show once per 90 days)
4. **Connect responses** — push to analytics via Segment, webhook, or download via API
5. **Publish and monitor** — track response rates and completion in dashboard

### Setting up Segment integration

1. **Enable Chameleon destination in Segment** — Settings → Destinations → Chameleon
2. **Pass Segment data to Chameleon** — `analytics.identify()` automatically maps to `chmln.identify()`
3. **Send Chameleon events back to Segment** — enable in Chameleon dashboard, events flow to all Segment destinations
4. **Target by Segment data** — use any Segment trait or event for targeting Chameleon experiences

## Deep dives

### Tour targeting and element selection

Chameleon targets elements using CSS selectors. Best practices:

- **Use `data-*` attributes**: `data-chameleon="feature-button"` is stable across UI changes. Class names and IDs can change during redesigns.
- **Test on SPA route changes**: Chameleon watches for URL changes, but dynamic content may not be rendered when the tour triggers. Use "Wait for element" conditions.
- **Multiple environments**: Startup allows 2 environments (production + staging). If selectors differ between environments, configure separate selectors per environment.
- **Rate limiting**: Use Rate Limit Groups to prevent experience fatigue. Example: "Show at most 1 tour per session and 3 per week."

### Chameleon Debugger

The Debugger is a browser console tool for troubleshooting:
- Run `chmln.debug()` in the console to see which experiences are eligible, which are suppressed (and why), and which elements are matched/missing.
- Useful for diagnosing: "Why doesn't this tour show?" — the Debugger reveals segment mismatches, display limit blocks, and missing elements.

### Copilot AI and Ranger AI

- **Copilot**: Assist in building campaigns. Input your goal (e.g., "onboard new users to the reporting feature") and Copilot generates tour steps, copy, and targeting suggestions. Available on all plans.
- **Ranger**: Autonomous optimization agent. Monitors tour/survey performance and auto-adjusts (e.g., changes CTA copy, adjusts targeting). Growth+ only. Requires opt-in per experience.

### HelpBar setup

HelpBar provides Cmd+K search within your app:
1. Enable HelpBar in dashboard
2. Connect content sources — Chameleon help center, external docs, custom URLs
3. Customize appearance — match your app's design system
4. AI-powered answers — HelpBar uses AI to summarize help content for users

Available as add-on (check current pricing for inclusion in plans).
