# Yoast SEO Platform Reference

## Platform overview

Yoast SEO is the most widely used WordPress SEO plugin with 13M+ active installations, founded in 2010 by Joost de Valk. Now owned by Newfold Digital, the company employs ~92 people. Yoast offers a WordPress plugin (free + Premium tiers) and a Shopify app. Target audience: bloggers, small business owners, ecommerce stores, content publishers, and marketing teams.

## Key modules

### Content analysis (SEO score)
- **Focus keyphrase**: Checks keyword placement in title, meta description, URL slug, first paragraph, subheadings, image alt text, and body content
- **Keyphrase density**: Targets 0.5-3% occurrence rate
- **Internal/external links**: Flags pages with no outbound links
- **Meta description**: Checks length (120-156 chars), keyphrase presence
- **SEO title**: Checks length (under 600px), keyphrase position
- **Premium**: Up to 5 related keyphrases per post, internal linking suggestions, redirect manager

### Readability analysis
- **Flesch Reading Ease**: Targets 60-70 for general audiences
- **Sentence length**: Flags sentences over 20 words
- **Passive voice**: Warns if >10% of sentences use passive voice
- **Transition words**: Recommends >30% of sentences use transitions
- **Paragraph length**: Flags paragraphs over 150 words
- **Subheading distribution**: Requires subheadings every 300 words
- **Available in multiple languages** — readability rules adapt to language

### Schema / structured data
- **Auto-generated**: Article, Organization, Person, BreadcrumbList, WebSite, WebPage, SearchAction
- **WooCommerce**: Product, Offer, AggregateRating, Review
- **Shopify**: Product (with enhanced pricing schema — sale price strikethroughs as of Jan 2026)
- **Schema API**: Developers can add/modify/remove graph pieces via filters
- **Schema Aggregation**: New feature for making content machine-readable for AI

### Redirect manager (Premium only)
- 301 (permanent), 302 (temporary), 307, 410 (gone), 451 (legal)
- Automatic redirect suggestions when you change a URL slug
- Regex redirects supported
- Server-side redirects load faster than PHP-based ones

### AI features
- **Yoast SEO Premium**: AI-generated SEO titles and meta descriptions
- **Yoast SEO AI+** (€358.80/yr): Extended AI content suggestions
- **Shopify**: AI-powered suggestions for meta descriptions and titles built into the Product Editor

### llms.txt (Shopify, March 2026)
- Generates an `llms.txt` file that tells AI tools which parts of your store matter most
- Maps top products, collections, policies, and key pages
- Designed for AI-powered search and LLM crawlers

### Google Docs Add-on
- 1 seat included with Premium
- Real-time SEO and readability feedback while writing in Google Docs
- Syncs focus keyphrase and analysis to WordPress

## Pricing and limits

| Product | Price | Key features beyond free |
|---|---|---|
| Yoast SEO Free (WordPress) | $0 | Single focus keyphrase, basic schema, XML sitemaps, readability analysis |
| Yoast SEO Premium (WordPress) | €118.80/yr per site | 5 keyphrases, redirect manager, internal linking, AI titles/meta, 24/7 support, Local/Video/News SEO plugins bundled |
| Yoast WooCommerce SEO | €178.80/yr per site | Product schema, enhanced breadcrumbs, WooCommerce-specific optimizations |
| Yoast SEO AI+ (WordPress) | €358.80/yr per site | Extended AI content suggestions beyond Premium |
| Yoast SEO for Shopify | $19/30 days | Content analysis, schema, AI suggestions, readability, llms.txt |

**Key limits**:
- Per-site licensing — each subscription = one domain
- Bulk discounts available for multiple sites
- Staging site access included (transferable between live/staging via MyYoast)
- No free trial for Premium — but free plugin includes substantial features

## Integrations

### Native integrations
- **WordPress** (primary): Plugin architecture, hooks/filters for themes and other plugins
- **Shopify**: Shopify App Store, integrates with Judge.me, Loox, Opinew, Ali Reviews, Semrush, Weglot
- **WooCommerce**: Product schema, enhanced SEO for product pages
- **Semrush**: Keyword research from inside Yoast (Shopify version)
- **Google Docs**: Add-on for real-time SEO feedback while writing

### API integrations
- WordPress REST API (extends native WP REST with `yoast_head` and `yoast_head_json` fields)
- Zapier/Make via WordPress webhooks
- n8n community workflows for automated SEO title/description updates

## APIs

Yoast exposes 4 APIs, all read-only and WordPress-specific:

### 1. REST API
Access SEO metadata for any URL on a WordPress site.

**Via WP REST API extension** (added fields on standard endpoints):
```
GET /wp-json/wp/v2/posts/607
→ Response includes `yoast_head` (HTML) and `yoast_head_json` (structured JSON)
```

**Via Yoast endpoint** (query by URL):
```
GET /wp-json/yoast/v1/get_head?url=https://example.com/page/
→ Response: { html, json, status }
```

Requires Yoast SEO v16.7+ for JSON format. Can be disabled in Site Features settings.

### 2. Surfaces API (PHP)
```php
// Current page
$title = YoastSEO()->meta->for_current_page()->title;
$desc = YoastSEO()->meta->for_current_page()->description;

// Specific post
$canonical = YoastSEO()->meta->for_post(2)->canonical;

// Specific URL
$title = YoastSEO()->meta->for_url('https://example.com/page/')->title;
```
50+ properties: canonical, description, title, page_id, site_name, schema, Open Graph, Twitter card, robots, breadcrumbs, estimated_reading_time_minutes.

Helpers:
```php
YoastSEO()->helpers->post_type->is_indexable(get_post_type());
YoastSEO()->helpers->post_type->get_public_post_types();
```

### 3. Metadata API (PHP filters)
Modify meta tag output via presenter classes:

| Presenter | Filter | Output |
|---|---|---|
| Title | `wpseo_title` | `<title>` tag |
| Meta Description | `wpseo_metadesc` | `<meta name="description">` |
| Canonical | `wpseo_canonical` | `<link rel="canonical">` |
| Robots | `wpseo_robots` | `<meta name="robots">` |
| OpenGraph image size | `wpseo_opengraph_image_size` | OG image dimensions |

Register/remove presenters: `wpseo_frontend_presenters` filter.

### 4. Schema API (PHP filters)
Modify schema.org JSON-LD output:

```php
// Remove a schema piece (e.g., breadcrumbs)
add_filter('wpseo_schema_graph_pieces', function($pieces) {
    return array_filter($pieces, fn($piece) => !$piece instanceof Breadcrumb);
});

// Modify a specific piece
add_filter('wpseo_schema_article', function($data) {
    $data['wordCount'] = str_word_count(get_the_content());
    return $data;
});

// Disable all schema output
add_filter('wpseo_json_ld_output', '__return_false');
```

Gutenberg block integration:
- `wpseo_pre_schema_block_type_<block-type>` — fires when block detected
- `wpseo_schema_block_<block-type>` — modify schema for specific blocks

Dev mode (pretty-print schema): `add_filter('yoast_seo_development_mode', '__return_true');`

## Workflow setup

### Initial WordPress setup
1. Install Yoast SEO plugin
2. Run First-time Configuration wizard (set site type, organization/person, social profiles)
3. Configure Site Features (toggle XML sitemaps, REST API, admin bar, text link counter)
4. Set up Title & Meta templates for post types
5. Connect Google Search Console (optional)

### Content optimization workflow
1. Write content in WordPress editor
2. Set focus keyphrase in Yoast meta box
3. Follow SEO analysis checklist (aim for green bullets)
4. Follow readability analysis (aim for green)
5. Customize SEO title and meta description
6. Set social media (Facebook/X) preview images

### Shopify setup
1. Install from Shopify App Store ($19/30 days)
2. Complete first-time configuration
3. Yoast auto-handles: product schema, canonical URLs, indexing
4. Customize per-product: meta titles, descriptions, focus keyphrases
5. Configure llms.txt (March 2026+)

## Deep dives

### Headless WordPress with Yoast
For headless/decoupled WordPress (Next.js, Gatsby, etc.):
- Use REST API: `GET /wp-json/yoast/v1/get_head?url={page-url}`
- Parse `json` response for structured meta data
- `yoast_head` provides pre-formatted HTML you can inject into `<head>`
- No write API — content authors still use WordPress admin for SEO fields
- Works with WPGraphQL via Yoast SEO WPGraphQL addon

### WooCommerce product SEO
- Yoast WooCommerce SEO adds Product schema (name, price, availability, reviews)
- Enhanced breadcrumbs with product categories
- Primary category selection for products in multiple categories
- Global product identifiers (GTIN, ISBN, MPN) for rich snippets

### Competitor comparison quick reference
| Feature | Yoast Free | Yoast Premium | Rank Math Free | AIOSEO Free |
|---|---|---|---|---|
| Focus keyphrases | 1 | 5 | 5 | 1 |
| Redirect manager | No | Yes | Yes | No |
| Schema types | Basic (auto) | Basic (auto) | 18+ types | Catalog |
| Internal linking | No | Yes | No | No |
| 404 monitoring | No | No | Yes | No |
| Google Analytics | No | No | Yes | No |
| Price (1 site) | Free | €118.80/yr | Free | Free |
| Price (unlimited) | Free | n/a (per-site) | $59/yr | $49.60/yr |
