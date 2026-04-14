---
name: sales-contentstack
description: "Contentstack platform help — headless CMS, Content Management API, Content Delivery API, GraphQL, Launch hosting, Automate workflows, Personalize, Brand Kit AI, Knowledge Vault, Marketplace apps, SDKs. Use when content types aren't publishing correctly, entries aren't showing on the frontend, API calls are returning errors, webhooks aren't firing, localization workflow is confusing, migration from a traditional CMS is complex, or preview/visual builder isn't working. Do NOT use for general email marketing (use /sales-email-marketing) or sales outbound sequences (use /sales-cadence)."
argument-hint: "[describe what you need help with in Contentstack]"
license: MIT
version: 1.0.0
tags: [sales, headless-cms, content-management, platform]
github: "https://github.com/contentstack"
---

# Contentstack Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Contentstack do you need help with?**
   - A) Content Management — content types, entries, assets, publishing
   - B) Content Delivery — CDA, GraphQL, caching, frontend integration
   - C) Launch — hosting, deployments, environments
   - D) Automate — workflow automations, triggers, connectors
   - E) Personalize — audiences, experiences, A/B tests, edge SDK
   - F) Brand Kit & AI — GenAI API, Knowledge Vault, voice profiles
   - G) API & SDKs — CMA/CDA endpoints, SDK setup, authentication
   - H) Marketplace — apps, extensions, custom fields
   - I) Migration — moving from another CMS to Contentstack
   - J) Admin — teams, roles, branches, environments, billing
   - K) Something else — describe it

2. **What's your role?**
   - A) Developer / engineer
   - B) Content editor / author
   - C) DevOps / platform admin
   - D) Marketing / digital team
   - E) Architect / tech lead
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**Skip-ahead rule:** If the user's prompt already provides enough context, skip to Step 2.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Tool integration / webhook setup → `/sales-integration {your question}`
- CRM data quality / enrichment → `/sales-data-hygiene {your question}`

Otherwise, answer directly using the platform reference.

## Step 3 — Contentstack platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

**Read `references/contentstack-api-reference.md`** for API endpoints, authentication, rate limits, and SDK details.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the full platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** — numbered steps to accomplish their goal
2. **Configuration recommendations** — specific settings with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **For API questions** — always point to `references/contentstack-api-reference.md`

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Preview takes ~15 minutes to reflect edits.** Visual Builder and previews are configurable but don't update instantly. Publish and check the live site for accurate rendering. Content editors used to WYSIWYG get frustrated here.
- **Localization is hidden under a dropdown.** Managing localized content requires selecting locale from a dropdown per entry — there's no side-by-side comparison view. Workflows for localized content can be unintuitive.
- **Rate limits are per-organization, not per-stack.** CMA write: 10 req/s, CDA origin: 100 req/s. If multiple stacks share an org, they compete for the same rate limit pool.
- **Management tokens max at 10 per stack.** Authtokens max at 20 per user. Plan token allocation carefully for CI/CD pipelines and multi-service architectures.
- **CDN-cached CDA responses are not rate-limited** but origin requests (cache misses) are. Use sync tokens and webhooks for real-time updates instead of polling.
- **Pricing is contract-based and opaque.** No self-serve plans. Annual contracts $30K–$200K+ depending on entries, API calls, and environments. Always confirm plan limits before architecting.
- **Limited built-in DAM.** Asset management is basic. For advanced DAM (tagging, AI metadata, rights management), integrate a dedicated DAM via Marketplace.

## Related skills

- `/sales-integration` — Connect Contentstack to CRM, marketing tools, or other systems via webhooks and API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Content type design
**User says**: "How should I structure content types for a multi-brand website?"
**Skill does**:
1. Reads platform guide for content type modeling patterns
2. Recommends using global fields for shared components, taxonomies for brand categorization
3. Explains branch strategy for multi-brand content isolation
4. Advises on reference fields vs embedded JSON for cross-brand content sharing
**Result**: User has a content architecture plan with specific Contentstack patterns

### Example 2: API integration
**User says**: "I need to fetch entries from Contentstack and display them in a Next.js app"
**Skill does**:
1. Points to API reference for CDA endpoints and JavaScript Delivery SDK
2. Explains environment + delivery token auth pattern
3. Shows the sync endpoint for incremental updates vs polling
4. Recommends DataSync SDK for server-side rendering with local cache
**Result**: User knows which SDK to use, how to authenticate, and how to keep content fresh

### Example 3: Migration from WordPress
**User says**: "We're migrating 10,000 pages from WordPress to Contentstack"
**Skill does**:
1. Reads platform guide's migration section
2. Recommends content modeling first — map WP post types to Contentstack content types
3. Explains CMA bulk import via API (entries endpoint + asset upload)
4. Warns about rate limits (10 write req/s) and suggests batching with backoff
5. Recommends branch strategy for staging migration before going live
**Result**: User has a migration plan with API approach, rate limit strategy, and staging workflow

## Troubleshooting

### Entries not appearing on frontend
**Symptom**: Content published in CMS but not showing on the website
**Cause**: CDA is CDN-cached; also check environment, locale, and publish status
**Solution**: Verify the entry is published to the correct environment. Check the CDA response directly (`GET /v3/content_types/{uid}/entries`). If using CDN, wait for cache TTL or use the sync API. Confirm the delivery token matches the target environment.

### Localization workflow confusion
**Symptom**: Edits to localized entries overwrite the master locale or don't appear
**Cause**: Contentstack's locale fallback behavior — unlocalized fields fall back to the master locale
**Solution**: Explicitly localize each field you want to differ by locale. Use `include_fallback=true` on CDA queries to see which fields are localized vs inherited. Set up per-locale publishing workflows to prevent accidental overwrites.

### API authentication errors (412/401)
**Symptom**: API calls return 412 "Invalid API key" or 401 "Access Denied"
**Cause**: Wrong API key type for the endpoint, expired token, or region mismatch
**Solution**: CMA uses stack API key + authtoken/management token. CDA uses stack API key + delivery token. Verify your base URL matches your stack's region (AWS NA, EU, AU, Azure, GCP). Check token expiry — authtokens expire when the 20-token-per-user limit is hit (oldest evicted).
