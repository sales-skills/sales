# Contentstack Platform Reference

## Platform overview

Contentstack is an enterprise headless CMS and "Agentic Experience Platform" (AXP) — API-first, cloud-native, MACH-compliant. It separates content management from frontend delivery, letting teams manage content centrally and deliver it to any channel (web, mobile, IoT, kiosk) via REST and GraphQL APIs. Target audience: enterprise organizations in retail, financial services, travel, manufacturing, and media who need multi-brand, multi-region content at scale. Key differentiators: governance controls, localization, visual editing, AI automation (Polaris/Agent OS), and a composable marketplace.

## Key modules

### Headless CMS (Core)
- **Content Types** — define schemas with fields (text, rich text, number, date, reference, file, JSON, modular blocks, global fields). Content types are versioned and support import/export.
- **Entries** — instances of content types. Support versioning, localization, workflow stages, scheduling, and bulk operations. Atomic operations available (PUSH, PULL, UPDATE, ADD, SUB on array/number fields).
- **Assets** — file storage for images, documents, media. Upload via CMA, deliver via Image Delivery API with on-the-fly transformations (resize, crop, format conversion). Limited built-in DAM — no advanced tagging, AI metadata, or rights management.
- **Branches** — Git-like content branching for dev/staging/production isolation. Compare and merge branches. Aliases point to specific branches for environment routing.
- **Environments** — deployment targets (dev, staging, production). Entries are published per-environment. Each environment gets its own delivery token.
- **Taxonomies** — hierarchical classification system. Create taxonomy trees with terms, localize terms, query across taxonomies.
- **Global Fields** — reusable field groups shared across content types (e.g., SEO metadata, author bio).
- **Workflows** — customizable content approval pipelines with stages, assignees, and notifications. Enterprise plan unlocks fully customizable workflows.
- **Webhooks** — event notifications for content lifecycle (entry created, published, deleted, workflow stage change, asset upload, etc.). Configure per-channel with retry logic.
- **Releases** — bundle entries and assets into a release for coordinated publishing.

### Launch (Frontend Hosting)
- Integrated hosting for static and server-rendered frontends.
- Git-based or file-upload deployments.
- Per-environment deployment with CDN caching and cache revalidation.
- API for managing projects, environments, and deployments programmatically.

### Automate (Workflow Automation)
- Visual automation builder — trigger on Contentstack events or external events.
- Connectors for Salesforce, Slack, Jira, custom webhooks, and more.
- Project-scoped with variables, execution logs, and audit logs.
- API for managing automations, projects, variables, and logs.

### Personalize
- **Attributes** — user properties for segmentation (custom + built-in like geo, device, referrer).
- **Audiences** — segments defined by attribute rules.
- **Experiences** — content variations targeted to audiences. Types: Segmented (rule-based) and A/B Test (split traffic).
- **Events** — track user actions for analytics and targeting.
- **Edge SDK** — JavaScript SDK that evaluates personalization rules client-side for low-latency delivery.
- **Analytics** — summary and time-series data per experience (impressions, conversions, variant performance).
- **Geolocation** — built-in region/country/city lookup for location-based targeting.

### Brand Kit & Generative AI
- **Brand Kit** — define voice profiles, brand guidelines, and custom AI credentials.
- **GenAI API** — send prompts through a brand-aware AI pipeline grounded in Knowledge Vault data.
- **Knowledge Vault** — ingest, update, and delete content for AI grounding (vector database). Feeds the GenAI API with brand-specific context.

### Marketplace
- App store for pre-built integrations: commerce (Shopify, commercetools, Salesforce Commerce), search (Algolia), translation (Smartling), DAM (Bynder, Cloudinary), analytics, and more.
- One-click install, zero glue code.
- Marketplace SDK for building custom apps.
- Developer Hub for building and publishing apps.

### SCIM (Identity Provisioning)
- SCIM 2.0 API for automated user provisioning/deprovisioning via identity providers (Okta, Azure AD, etc.).

## Pricing and limits

*Best-effort from research — confirm with Contentstack sales for current pricing.*

**Pricing model:** Contract-based, customized per organization. No self-serve.

**Tiers:** Starter, Growth, Scale, Enterprise.

**Three pricing dimensions:**
- Content entries (records)
- API calls per month
- Environments (dev, staging, production)

**Typical ranges:**
- Small teams: ~$3,500/month ($42K/year)
- Mid-market: $50K–$100K/year
- Enterprise: $100K–$200K+/year

**Plan-gated features:**
- Enterprise: fully customizable workflows, advanced management, unlimited translation memory
- Growth/Scale: standard workflows, limited environments
- Starter: basic CMS features, limited API calls

**Rate limits (applies to all plans):**
- CMA Read (GET): 10 req/s per organization
- CMA Write (POST/PUT/DELETE): 10 req/s per organization
- CMA Bulk: 1 req/s
- Stack creation: 1 per minute
- CDA origin: 100 req/s per organization (CDN-cached responses are not rate-limited)
- Launch/Automate/Personalize: 10 req/s per organization
- GenAI/Knowledge Vault: 10 write req/s per organization

**Token limits:**
- Authtokens: max 20 per user (oldest evicted when exceeded)
- Management tokens: max 10 per stack

## Integrations

**Marketplace (pre-built):** Shopify, commercetools, Salesforce Commerce, Algolia, Smartling, Bynder, Cloudinary, Netlify, Vercel, and more. One-click install.

**Native connectors via Automate:** Salesforce, Slack, Jira, custom webhooks.

**CRM:** No native CRM integration — connect via Automate, webhooks, or Zapier/Make.

**Zapier/Make:** Available for basic triggers/actions.

**SDKs (official):**
- Delivery: JavaScript, TypeScript, React Native, Node.js, Python, Java, .NET, PHP, Ruby, Android, iOS, Dart
- Management: JavaScript, Python, Java, .NET
- Utils: TypeScript, JavaScript, Python, Java, .NET, Ruby, Android, iOS, Dart
- Marketplace: JavaScript, Java
- App SDK: TypeScript
- Personalize Edge: JavaScript
- DataSync: TypeScript

**OpenAPI specs:** Available at `github.com/contentstack/contentstack-openapi` for CDA and CMA.

## Data model

**Hierarchy:** Organization → Stack → Branch → Content Type → Entry

| Object | What it represents | Key fields |
|---|---|---|
| **Organization** | Top-level account | org_uid, name, plan |
| **Stack** | A content project | api_key, name, org_uid, branches |
| **Branch** | Content version (like git branch) | branch_uid, source, alias |
| **Content Type** | Schema definition | uid, title, fields[], description |
| **Entry** | Content instance | uid, title, locale, version, workflow_stage, publish_details |
| **Asset** | File (image, doc, media) | uid, filename, url, content_type, file_size |
| **Environment** | Deployment target | uid, name, urls[], deploy_content |
| **Taxonomy** | Classification tree | uid, name, terms[] |
| **Term** | Taxonomy node | uid, name, parent_uid, depth |
| **Webhook** | Event notification | uid, name, channels, retry_policy |
| **Workflow** | Approval pipeline | uid, name, stages[], content_types[] |
| **Release** | Publishing bundle | uid, name, items[], deploy_details |

**Relationships:**
- Entries belong to a Content Type and a Branch
- Entries can reference other Entries (via reference fields) or Assets (via file fields)
- Entries are published to Environments
- Entries move through Workflow stages
- Entries are classified by Taxonomy Terms
- Branches can be compared and merged
- Aliases point to Branches for environment routing

## Workflow setup — common patterns

### 1. Content modeling (first step for any new project)
1. Plan content types based on your content strategy (pages, articles, components, navigation)
2. Use modular blocks for flexible page layouts
3. Use global fields for shared schema (SEO, metadata, author)
4. Use reference fields for relationships (article → author, page → components)
5. Use taxonomies for classification (categories, tags, regions)

### 2. Multi-environment publishing
1. Create environments: Development, Staging, Production
2. Generate delivery tokens per environment
3. Set up webhooks to trigger rebuilds on publish events
4. Use branches for feature isolation (feature branch → staging → main → production)

### 3. Localization
1. Enable locales on your stack (Settings → Languages)
2. Add locales (en-us, fr-fr, de-de, etc.) with fallback chain
3. Localize entries by selecting locale from the dropdown
4. Use `include_fallback=true` on CDA queries to inherit unlocalized fields from parent locale
5. Set up per-locale workflows for approval before publishing

### 4. Migration from traditional CMS
1. **Content audit** — map existing content types to Contentstack schemas
2. **Content modeling** — create content types, global fields, taxonomies in Contentstack
3. **Data migration** — use CMA API for bulk import (entries + assets). Batch at ≤10 req/s.
4. **Branch strategy** — import into a migration branch, review, then merge to main
5. **Frontend rebuild** — build frontend using CDA/GraphQL + chosen framework (Next.js, Gatsby, Nuxt, etc.)
6. **Verification** — compare old and new sites for content parity

## Deep dives

### Webhook configuration
- Configure in Settings → Webhooks
- Events: entry/asset create, update, delete, publish, unpublish, workflow stage change
- Channels: HTTP endpoint, Slack, custom
- Retry: configurable with exponential backoff
- Security: signing secret for payload verification

### Visual Builder / Live Preview
- Available on higher plans
- Configure preview URLs per environment
- Uses the Contentstack App SDK for live editing
- Requires frontend to embed the Live Preview SDK
- Known limitation: edits take time to reflect — not instant WYSIWYG

### Branch management
- Create branches from existing branches
- Compare: see added, modified, deleted content types/entries between branches
- Merge: combine branch changes (handles conflicts)
- Aliases: named pointers to branches (e.g., "production" alias → "main" branch)
- Use for: feature development, A/B content testing, migration staging
