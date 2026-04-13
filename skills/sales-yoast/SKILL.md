---
name: sales-yoast
description: "Yoast SEO platform help — the most widely used WordPress SEO plugin (13M+ installs) with a Shopify app. Covers content analysis, readability scoring, focus keyphrase optimization, schema/structured data output, redirect manager, internal linking suggestions, AI-generated meta descriptions, llms.txt for AI search, REST API for headless WordPress, and WooCommerce product SEO. Use when Yoast readability or SEO score won't turn green, schema markup isn't showing in Google Search Console, your site slowed down after installing Yoast, you need to set Yoast fields via REST API for headless publishing, Yoast update caused a critical error, or you want to configure Yoast for Shopify. Do NOT use for general SEO strategy without Yoast context (use /seo-audit or /sales-semrush)."
argument-hint: "[describe what you need help with in Yoast SEO]"
license: MIT
version: 1.0.0
tags: [sales, seo, wordpress, shopify, platform]
github: "https://github.com/Yoast"
---

# Yoast SEO Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **Which platform are you using Yoast on?**
   - A) WordPress (free plugin)
   - B) WordPress (Premium / AI+)
   - C) Shopify
   - D) WooCommerce
   - E) Not sure / evaluating

2. **What do you need help with?**
   - A) Content optimization — SEO score or readability won't improve
   - B) Schema / structured data — not appearing in search results
   - C) Technical setup — redirects, sitemaps, canonical URLs, robots
   - D) API / headless — setting Yoast fields via REST API
   - E) Performance — site slowed down after installing Yoast
   - F) Update issue — Yoast update broke something
   - G) Shopify-specific — setup, uninstall, schema, llms.txt
   - H) Pricing / plan comparison — which tier do I need
   - I) Something else — describe it

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General SEO strategy (not Yoast-specific) | `/sales-semrush [your SEO question]` or `/seo-audit [your question]` |
| AI search visibility / LLM citations | `/sales-ai-visibility [your question]` |
| Schema markup strategy (cross-platform) | `/schema-markup [your question]` |
| Email deliverability for marketing | `/sales-deliverability [your question]` |
| WordPress site performance | Answer directly using platform guide |

When routing to another skill, provide the exact command: "This is a general SEO question — run: `/sales-semrush [user's original question]`"

If the question is Yoast-specific, continue to Step 3.

## Step 3 — Yoast platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, APIs.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **Content scores**: Check focus keyphrase placement (title, first paragraph, subheadings, meta description, slug, alt text). Green requires hitting most checks — not all.
- **Schema issues**: Validate with Google Rich Results Test. Check if theme outputs duplicate schema. Yoast auto-generates Article, Organization, BreadcrumbList, Product (WooCommerce/Shopify).
- **Performance**: Disable unused features (internal linking for free, admin bar, text link counter). Test with Query Monitor plugin.
- **API/headless**: Use `yoast_head_json` on WP REST endpoints or `/wp-json/yoast/v1/get_head?url=`. Read-only — no write endpoints.
- **Shopify uninstall**: Follow official uninstall process to remove metafields. Test with Google Rich Results Test after removal.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Premium features per-site licensed** — each €118.80/yr subscription covers ONE domain. Multi-site gets expensive fast vs Rank Math (unlimited sites on Pro).
- **Free version limits focus keyphrase to 1** — Premium allows up to 5 related keyphrases per post.
- **Redirect manager is Premium-only** — free users need a separate plugin (Redirection, Safe Redirect Manager).
- **Internal linking suggestions are Premium-only** — and require a background indexing process that can slow large sites.
- **Shopify version is stripped down** — no full snippet variables, no internal linking tools, fewer customization options than WordPress.
- **Content-Security-Policy can block analysis** — if you have a custom CSP header, add Yoast's analysis worker to `worker-src` directive.
- **Schema conflicts with themes** — many WordPress themes output their own schema. Yoast's schema can duplicate, causing Google Search Console warnings.
- **Yoast SEO AI+ is €358.80/yr** — includes AI-generated titles/descriptions. The base Premium (€118.80) has limited AI features.

## Related skills

- `/sales-semrush` — Semrush SEO platform (keyword research, site audits, rank tracking, backlink analysis). Install: `npx skills add sales-skills/sales --skills sales-semrush`
- `/sales-ai-visibility` — AI visibility monitoring (track what ChatGPT, Perplexity, Gemini say about your brand). Install: `npx skills add sales-skills/sales --skills sales-ai-visibility`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

**Example 1**: "My Yoast readability score is orange and I can't figure out what to fix"
→ Walks through Flesch Reading Ease target (60-70), sentence length (<20 words), passive voice (<10%), transition words (>30%), paragraph length, and subheading distribution.

**Example 2**: "I'm building a headless Next.js site and need Yoast meta data from the REST API"
→ Covers the `/wp-json/yoast/v1/get_head?url=` endpoint, `yoast_head_json` field on WP REST responses, and how to parse the JSON response for title, description, OG tags, and schema.

**Example 3**: "My Google Search Console shows duplicate schema errors after installing Yoast"
→ Diagnoses theme vs Yoast schema conflict, shows how to use `wpseo_json_ld_output` filter to disable Yoast schema or remove theme schema, and how to validate with Rich Results Test.

## Troubleshooting

### Yoast update caused a critical error / white screen
WordPress shows "critical error" after updating Yoast to a new version. Disable Yoast via FTP (rename `wordpress-seo` folder in `/wp-content/plugins/`), check PHP version compatibility (Yoast requires PHP 7.4+), then re-enable. Check for plugin conflicts by disabling all other plugins first.

### SEO analysis shows gray bullets / meta box won't load
The Yoast meta box loads via JavaScript. A CSP header blocking `worker-src`, a JavaScript conflict with another plugin, or a caching plugin serving stale assets can prevent it from loading. Check browser console for errors. Add `blob:` and `data:` to your CSP `worker-src` if applicable.

### Yoast left behind code on Shopify after uninstalling
Yoast injects schema and metafields that persist after app removal. Run the official Yoast uninstall process (not just Shopify app delete). Check your theme's `<head>` for leftover `ld+json` blocks and use Google Rich Results Test to verify clean removal.
