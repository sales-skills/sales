# Whatfix Platform Reference

## Platform overview

Whatfix is an enterprise AI-powered Digital Adoption Platform (DAP) that helps organizations accelerate user adoption of enterprise software. It overlays interactive guidance on top of any web, desktop, or mobile application — employees or customers get step-by-step walkthroughs, contextual tooltips, and self-service help without leaving the application they're working in. Whatfix combines three products: the DAP (in-app guidance), Product Analytics (adoption tracking), and Mirror (sandbox training). Target audience is enterprise IT, L&D, and CX teams deploying complex software (Salesforce, SAP, Workday, ServiceNow, Oracle, custom apps). Typical customers have 100+ employees. Positioned as a leader in Gartner's DAP Magic Quadrant alongside WalkMe.

## Key modules

### Digital Adoption Platform (DAP) — Core

**Flows**: Step-by-step interactive walkthroughs that guide users through multi-step processes. Support branching logic, audio/video/image annotations, and multi-language. Flow Standby feature pauses the flow if a user navigates away or encounters an error, then resumes when they return to the correct step.

**Smart Tips**: Contextual tooltips attached to specific UI elements. Triggered on click or hover. Used for field-level guidance (e.g., explaining what to enter in a form field), compliance notes, or best practices. Reduce errors during high-stakes data entry.

**Beacons**: Animated pulsating icons placed on UI elements to draw attention to new features or important actions. Non-blocking — users can ignore them. Good for feature discovery without interrupting workflow.

**Task Lists**: Sequential checklists grouping multiple Flows into an onboarding or training program. Support dependencies (complete Step 1 before Step 2 unlocks). Can group tasks by category. Track completion percentage per user.

**Announcements (Pop-ups)**: Modal announcements for feature launches, policy changes, downtime notices, or communications. Configurable display conditions (user segment, page, frequency).

**Self Help**: Enterprise-grade in-app help widget that aggregates content from multiple sources into a searchable knowledge hub. Users search without leaving the application. Sources include: Whatfix Flows, external knowledge bases (Confluence, ServiceNow), FAQs, videos, and documents. AI summarizes results and recommends the most relevant resources. Content aggregation limits: 2,000 articles (Standard), 50,000 (Premium), unlimited (Enterprise).

**Content Segmentation**: Uses tags to control who sees what content. Tag types:
- **Role tags**: Job function (e.g., "Sales Rep", "HR Admin")
- **Page tags**: Current page/screen in the application
- **Auto tags**: Automatically applied based on user behavior or attributes
- **Miscellaneous tags**: Custom categorization

**Whatfix Diagnostics**: Automated troubleshooting tool that identifies why content isn't displaying — checks targeting, segmentation, URL patterns, and script loading.

### Product Analytics

Standalone product (separately priced) for tracking user behavior and adoption metrics across enterprise applications.

**User Journey Visualization**: Sankey charts showing how users actually navigate through workflows — identifies common paths, detours, and drop-off points.

**Funnel Analysis**: Two types:
- **Conversion funnels**: Track completion of multi-step processes (e.g., onboarding, purchase order creation)
- **Productivity funnels**: Measure how efficiently users complete workflows

**Cohort-Based Reporting**: Segment users into cohorts (by department, start date, role) and track adoption metrics over time.

**Trend Insights**: Custom engagement reports showing adoption trends with configurable metrics and time periods.

**Whatfix AI**: Generates automated charts and insights from analytics data. Natural language queries for non-technical users.

### Mirror (Sandbox Training)

Separately priced product for creating interactive sandbox replicas of web applications.

**Screen Capture**: Captures the application's UI to create a safe, isolated training environment.

**Data Blurring**: Automatically blurs or replaces sensitive data (PII, financial data) in the sandbox — enables training without exposing real information.

**Risk-Free Practice**: Users practice workflows in the sandbox without affecting live data. Mistakes have no consequences. Supports guided exercises and free-form exploration.

**Use Cases**: Pre-production training for new software rollouts, onboarding new employees, compliance certification practice, testing process changes before go-live.

### Surveys

Built-in survey engine for capturing user feedback within the application.

**Survey Types**:
- **NPS Surveys**: Net Promoter Score with follow-up question
- **Usability Surveys**: Task-specific usability feedback
- **Custom Surveys**: Multiple question types, conditional logic

**Display Conditions**: Trigger surveys based on user segment, page, completed actions, time-based rules, or multiple combined conditions.

**Limitations**: Standard plan gets out-of-box templates only. Custom surveys and advanced conditions require Premium+. Survey design is described as less interactive and modern-looking than dedicated survey tools.

## Pricing and limits

Whatfix operates as a suite of three separately-priced products:
- **Whatfix DAP** (Digital Adoption Platform) — core offering
- **Whatfix Product Analytics** — adoption tracking add-on
- **Whatfix Mirror** — sandbox training add-on

### Pricing tiers (DAP)

| Feature | Standard | Premium | Enterprise |
|---------|----------|---------|-----------|
| In-App Guidance | Core (Flows, Smart Tips, Beacons, Task Lists, Pop-ups) | All core features | All features across multiple apps |
| Integrations | Limited to 2 | Unlimited | Unlimited |
| Content Aggregation (Self Help) | Up to 2,000 articles | Up to 50,000 articles | Unlimited enterprise-wide |
| Custom Surveys | Out-of-box only | Custom + out-of-box | Custom + out-of-box |
| Analytics | Basic guidance analytics | Advanced dashboards | Advanced across all apps |
| Auto-Translation | Manual only | One-click auto-translation | Multi-language at scale |
| Auto-Testing | Not included | Included | Included |
| Deployment | Cloud or on-premise | Cloud or self-hosted | Cloud, self-hosted, virtual desktop |
| Support | 24×5 + CSM | 24×5 + CSM | 24×5 + CSM (enhanced) |

### Cost estimates

> *Best-effort from public sources — verify with Whatfix sales.*

- **Standard**: ~$24,000-$35,000/year for single-app implementations
- **Premium**: ~$40,000-$70,000/year for multi-app or advanced features
- **Enterprise**: ~$79,000-$100,000+/year for multi-app or unlimited
- **Pricing model**: Flat fee + per-user license fees. Employee-facing = total users with access. Customer-facing = monthly active users (MAU).
- **Cost drivers**: Platform coverage (web, desktop, mobile, OS), plan tier, user volume, add-ons (white labeling, on-premise authoring, professional services)
- **Negotiation**: 10-20% reductions achievable through competitor comparisons, volume discounts, and removing auto-renewal clauses

### Product Analytics pricing

Standard analytics is included with DAP. Premium analytics is a separately priced add-on or included with Enterprise DAP tier.

### Mirror pricing

Single-tier pricing, separately from DAP. Cost depends on number of applications and users.

## Integrations

Whatfix's Integration Hub enables bi-directional data exchange with enterprise systems.

### Enterprise Applications (data sharing for user segmentation)
- **Salesforce** — share account data for targeted, contextual content
- **Oracle** — segment users by role, department, job type
- **SAP SuccessFactors** — role-based user information for tailored guidance
- **Workday** — content based on user role information
- **Microsoft Azure Active Directory / Entra ID** — content based on role information
- **ServiceNow** — convert Whatfix flows into ServiceNow slideshows
- **Bullhorn** — personalized customer experiences through data sharing

### Analytics & Data
- **Amplitude** — show tailored content to specific user groups
- **Heap** — share account data to focus content on specific segments
- **Google Analytics** — display different content based on user segments
- **Power BI** — push Whatfix analytics data as datasets for custom reporting
- **Salesforce Einstein** — export analytics to create custom dashboards
- **Quantum Metric** — segment content based on captured user errors
- **FullStory** — identify rage clicks to reduce user frustration

### Knowledge Management
- **Confluence** — automatically create Whatfix flows as Confluence articles
- **Google Sheets / Microsoft Excel** — import support articles and export reports

### Survey & Feedback
- **Microsoft Forms** — display surveys based on multiple conditions
- **SurveyMonkey** — show surveys conditionally to users
- **Salesforce Survey** — present surveys based on multiple triggers

### Integration Hub capabilities
- Create custom uni- or bi-directional data flows
- Listen to multiple APIs and Webhooks
- Schedule integrations with configurable frequency
- Exchange data with any app that has an API

## Data model

### API overview

Whatfix has a REST API v1 for programmatic operations:

- **Authentication**: API token passed as `x-whatfix-integration-key` header. Generated from Whatfix dashboard.
- **Format**: JSON output, CORS-enabled
- **Capabilities**: Content management (create/update/delete Flows, Smart Tips), content tagging, enterprise integration attributes, report analytics data export

### Key objects
- **Flows**: Multi-step walkthroughs with targeting rules
- **Smart Tips**: Field-level tooltips with trigger configuration
- **Beacons**: Feature discovery indicators
- **Task Lists**: Grouped flow sequences
- **Pop-ups**: Announcement modals
- **Self Help articles**: Aggregated knowledge base content
- **Surveys**: NPS, usability, and custom surveys
- **Segments/Tags**: User categorization for content targeting

### Analytics data points
- Number of queries served by Self Help
- Number of times a Pop-up was shown to users
- Number of times a Flow was played
- Number of times a Smart Tip was shown to users
- User journey paths and completion rates

## Workflow setup

### Setting up Whatfix on a new enterprise app

1. **Install the Whatfix script** — add the Whatfix JavaScript snippet to your application (injected via browser extension for authoring, deployed via script tag or tag manager for production)
2. **Configure user identification** — map user attributes (employee ID, role, department, location) for segmentation
3. **Plan content taxonomy** — define tag categories (role, department, application area) before creating content
4. **Create initial content** — start with the top 5-10 most common workflows, not everything at once
5. **Set up segmentation** — configure which user groups see which content
6. **Test with pilot group** — deploy to a small group (10-20 users) before company-wide rollout
7. **Monitor analytics** — track completion rates, drop-off points, Self Help search patterns
8. **Iterate** — refine content based on analytics and user feedback

### Creating effective Flows

1. **Keep steps to 5-7 max** — longer flows have exponential drop-off
2. **Enable Flow Standby** — so users can recover from navigation errors without restarting
3. **Use Smart Tips instead of Flows for complex forms** — field-level guidance > linear walkthrough for data entry
4. **Target by role** — don't show sales workflows to HR users
5. **Combine with Task Lists** — group related flows into a progressive onboarding sequence
6. **Test across browsers** — CSS selector targeting can behave differently across browsers

### Setting up Product Analytics

1. **Define key workflows** — list the 3-5 most important processes to track
2. **Create conversion funnels** — map each workflow's steps as funnel stages
3. **Set up user journeys** — enable Sankey charts for the tracked workflows
4. **Create cohorts** — segment by department, role, hire date, or custom attributes
5. **Configure Whatfix AI** — enable automated insights for non-technical stakeholders
6. **Connect to Power BI** — push analytics data for executive dashboards

## Deep dives

### Whatfix vs WalkMe

| Dimension | Whatfix | WalkMe |
|-----------|--------|--------|
| Ownership | Independent (private) | SAP (acquired Sep 2024) |
| Positioning | Enterprise DAP + analytics + sandbox | Enterprise DAP (increasingly SAP-focused) |
| Analytics | Product Analytics (Sankey, funnels, cohorts) | WalkMe Insights |
| Training | Mirror (sandbox replicas) | No equivalent |
| Pricing | ~$24K-$100K+/year | ~$25K-$100K+/year |
| Best for | Multi-app enterprises wanting analytics + training | SAP-ecosystem enterprises |
| Risk | Independent vendor risk | SAP lock-in risk, non-SAP deprioritization |

### Whatfix vs Pendo

| Dimension | Whatfix | Pendo |
|-----------|--------|-------|
| Primary audience | Enterprise IT/L&D (employee adoption of 3rd-party apps) | Product teams (user adoption of your own product) |
| Analytics | Adoption analytics for enterprise apps | Product analytics with retroactive data |
| Guides | Flows, Smart Tips, Beacons, Task Lists | Tooltips, lightboxes, walkthroughs, Resource Center |
| Surveys | NPS, Usability, Custom | NPS, CSAT, PMF, custom polls |
| Pricing | ~$24K-$100K+/year | Free (500 MAU), then ~$15K+/year |
| Best for | Training employees on Salesforce/SAP/Workday | Understanding and guiding users in your own product |

### Whatfix vs Appcues

| Dimension | Whatfix | Appcues |
|-----------|--------|---------|
| Target audience | Enterprise (100+ employees) | SaaS product teams (SMB-mid) |
| App overlay | 3rd-party enterprise apps | Your own web product |
| Content types | Flows, Smart Tips, Beacons, Task Lists, Self Help, Mirror | Flows (modals, tooltips, slideouts), Checklists, Launchpad |
| Mobile | iOS + Android SDKs | Web only |
| Pricing | ~$24K+/year | From ~$249/mo |
| Best for | Enterprise digital adoption | PLG onboarding without engineering |

### Common pain points and solutions

**Steep learning curve**: Whatfix's admin interface is powerful but complex. Recommend designating 2-3 "Whatfix Champions" per department who receive advanced training and create content for their teams.

**Content maintenance at scale**: As the content library grows, managing hundreds of flows across multiple apps becomes difficult. Use naming conventions (App > Module > Action), tag consistently, and schedule quarterly content audits.

**Segmentation complexity**: Whatfix uses tags instead of standard rules-based segmentation. This is less intuitive than tools like Pendo or Appcues. Plan your tag taxonomy carefully before creating content — changing it later requires updating every piece of content.

**Performance at scale**: Large deployments with hundreds of flows and thousands of users can experience script loading delays. Work with Whatfix support on script optimization and lazy loading configuration.
