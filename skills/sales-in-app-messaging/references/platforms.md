# Platform-Specific In-App Messaging Guide

Detailed per-platform guidance for in-app messaging tools. Referenced from the main SKILL.md when users ask about a specific tool.

## Table of contents
- [Braze](#in-braze)
- [Iterable](#in-iterable)
- [Intercom](#in-intercom)
- [Pendo](#in-pendo)
- [Appcues](#in-appcues)
- [Customer.io](#in-customerio)
- [MoEngage](#in-moengage)
- [Whatfix](#in-whatfix)
- [Chameleon](#in-chameleon)

---

## In Braze
- **In-app message types**: Modal, Slideup, Fullscreen, HTML Custom, Survey
- **Content Cards**: Persistent content feed — Classic (image + text), Banner (image), Captioned Image. Cards persist until dismissed or expired (default 30 days). Pinning supported.
- **Triggers**: Session start, custom event, purchase, push click, API
- **Display rules**: Show once, every session, after X sessions, after delay
- **Canvas integration**: In-app messages and Content Cards as steps in multi-step Canvas Flow journeys — combine with push, email, SMS in one orchestration
- **BrazeAI**: Intelligent Timing for in-app, Intelligent Selection for auto-optimization
- **Dark mode**: Automatic dark mode support
- **Custom HTML**: Full HTML/CSS/JS for complex in-app experiences
- **Strength**: Best for enterprise cross-channel orchestration where in-app is one component of a Canvas journey. Content Cards are unique to Braze in the engagement platform category.
- **Platform skill**: `/sales-braze`

## In Iterable
- **In-app messages**: Modal, Center, Fullscreen, Top/Bottom banner. Custom HTML/CSS for branded designs. Trigger on app open, custom event, or Studio journey step.
- **Mobile Inbox**: Persistent message list within the app — users browse, read, and delete messages. Messages stay until expiry or dismissal. Similar to Braze Content Cards but presented as a dedicated inbox view.
- **Embedded Messages**: Inline native content rendered in your app's UI — no overlay, popup, or modal. Requires SDK integration. Best for contextual content that feels native to the app experience.
- **Studio workflows**: In-app messages as Send tiles in multi-step Studio journeys alongside email, push, SMS, and WhatsApp. Use Filter tiles to branch on in-app engagement.
- **Brand Affinity targeting**: Use Brand Affinity labels to show in-app messages only to engaged users (Loyal/Positive) or re-engagement messages to disengaged users (Negative/Neutral).
- **Experiments**: A/B test in-app message content and design within campaigns or Studio journeys.
- **Strength**: Good balance of power and usability. Three distinct in-app message types (overlay, inbox, embedded) provide flexibility. Mobile Inbox is strong for persistent content. Embedded Messages are unique — most competitors only offer overlay-style in-app messages.
- **Platform skill**: `/sales-iterable`

## In Intercom
- **Product Tours**: Multi-step guided tours with tooltips and modals
- **Custom Bots**: Chatbot flows triggered by in-app behavior
- **Banners**: Non-blocking top-of-screen announcements
- **Surveys**: NPS, CSAT, and custom surveys within the app
- **Outbound messages**: Modals and chat messages triggered by user behavior
- **Strength**: Best for SaaS apps already using Intercom for support. Combines in-app messaging with live chat and help center.

## In Pendo
- **Guides**: Tooltips, lightboxes (modals), banners, walkthroughs
- **Resource Center**: In-app help hub with guides, announcements, and links
- **Feature adoption tracking**: See which features users discover and use
- **Retroactive analytics**: Pendo captures product usage data without code instrumentation
- **Strength**: Best for product teams focused on feature adoption and product analytics. No-code guide creation (visual editor on top of your app).
- **Limitation**: Less strong on marketing-style campaigns. Not a cross-channel platform.

## In Appcues
- **Flows**: Multi-step modals, tooltips, slideouts, and hotspots
- **Checklists**: Onboarding task lists with completion tracking
- **NPS/Surveys**: Built-in NPS and custom survey widgets
- **Launchpad**: In-app menu for flows, announcements, and resources
- **No-code builder**: Visual WYSIWYG editor — build on top of your live app
- **Strength**: Best for SaaS product teams wanting no-code onboarding and feature adoption without engineering resources.
- **Limitation**: Web only (no native mobile). Not a cross-channel engagement platform.

## In Customer.io
- **In-app messages**: Mobile in-app messages triggered by events within Customer.io Journeys
- **Strength**: Good for product-led companies already using Customer.io for lifecycle messaging. In-app messages as one channel alongside email, push, and SMS in behavior-triggered workflows.
- **Platform skill**: `/sales-customerio`

## In MoEngage
- **In-app messaging**: Modals, fullscreen, HTML custom
- **Cards**: Similar to Content Cards — persistent notification center
- **Smart Triggers**: AI-driven triggering based on user behavior patterns
- **Strength**: Strong in APAC markets. Good AI-driven in-app timing and targeting.

## In Whatfix
- **Flows**: Step-by-step interactive walkthroughs with branching logic. Flow Standby pauses/resumes if user navigates away. Supports audio, video, and image annotations.
- **Smart Tips**: Field-level tooltips triggered on click or hover — contextual help for form fields and UI elements. Reduces errors during high-stakes data entry.
- **Beacons**: Animated pulsating icons for feature discovery — non-blocking.
- **Task Lists**: Sequential checklists grouping multiple Flows into onboarding programs. Dependency support (complete Step 1 to unlock Step 2).
- **Self Help**: In-app knowledge hub aggregating Whatfix content + external sources (Confluence, ServiceNow). AI-powered search and summarization.
- **Segmentation**: Tag-based (role, page, auto, custom) — less intuitive than rules-based but flexible.
- **Product Analytics**: Sankey charts, funnels, cohort reporting — separate product, not built into DAP by default.
- **Mirror**: Sandbox replicas for training — practice workflows without affecting live data.
- **Strength**: Best for enterprise employee adoption of 3rd-party apps (Salesforce, SAP, Workday). Unique combination of guidance + analytics + sandbox training. Designed for IT/L&D teams deploying complex enterprise software, not product teams building their own apps.
- **Limitation**: Enterprise pricing (~$24K+/year). Per-application licensing. Steep learning curve. Tag-based segmentation less intuitive than Pendo/Appcues. CSS knowledge needed for advanced customization.
- **Platform skill**: `/sales-whatfix`

## In Chameleon
- **Product Tours**: Multi-step guided walkthroughs with modals, tooltips, and highlight overlays. WYSIWYG builder. Branching logic, URL matching for SPAs, element targeting via CSS selectors.
- **Tooltips**: Standalone contextual tooltips for feature discovery — triggered on page load, hover, or click.
- **Microsurveys**: In-app NPS, CSAT, PMF, and custom surveys. Templates included. Responses via dashboard, API, or webhook. Startup: 5 microsurveys. Growth+: unlimited.
- **Launchers**: Persistent in-app widget/menu for resources, tours, checklists. Startup: 1 launcher. Growth+: unlimited.
- **HelpBar**: AI-powered Cmd+K search within the app — searches help center, experiences, custom content.
- **Checklists**: Onboarding task lists with progress tracking and auto-completion via events.
- **Interactive Demos (AI)**: AI-generated interactive product demos. Growth+ only.
- **A/B Testing**: Split test tour/survey variants. Growth+ only.
- **Copilot AI**: AI assistant for building campaigns — generates copy, targeting, and improvements. All plans.
- **Ranger AI**: Autonomous optimization agent — monitors and auto-adjusts experiences. Growth+ only.
- **Strength**: Best for SaaS product teams wanting deep customization (CSS-level control) and AI assistance. Strong integration ecosystem (30+ tools). Affordable entry ($279/mo) for basic product tours.
- **Limitation**: Web-only (no native mobile). Steep pricing jump from Startup ($279/mo) to Growth ($15K/yr). A/B testing, localization, and advanced features locked behind Growth+. Element targeting can break on UI changes — use stable data attributes.
- **Platform skill**: `/sales-chameleon`
