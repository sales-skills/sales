<!-- Source: https://developer.yoast.com/customization/apis/overview/ -->
<!-- Source: https://developer.yoast.com/customization/apis/rest-api/ -->
<!-- Source: https://developer.yoast.com/customization/apis/surfaces-api/ -->
<!-- Source: https://developer.yoast.com/customization/apis/metadata-api/ -->
<!-- Source: https://developer.yoast.com/features/schema/api/ -->

# Yoast SEO API Reference

Yoast SEO exposes four APIs for accessing and modifying SEO metadata output. All are read-only (no POST/PUT) and WordPress-specific.

Full developer documentation: https://developer.yoast.com/

---

## 1. REST API

Access SEO metadata headlessly. Two access methods:

### Via WP REST API (extended fields)
When Yoast SEO is active, two fields are appended to standard WordPress REST responses:
- `yoast_head` — prefabricated HTML blob (all meta tags + schema)
- `yoast_head_json` — raw structured data (requires Yoast SEO v16.7+)

Example requests:
```
GET https://example.com/wp-json/wp/v2/posts/607
GET https://example.com/wp-json/wp/v2/posts?slug=my-post
GET https://example.com/wp-json/wp/v2/types/custom_type
```

### Via Yoast URL endpoint
```
GET /wp-json/yoast/v1/get_head?url={URL}
```

Response properties:
- `html` — escaped meta tags and schema markup
- `json` — structured key/value pairs (OG image includes width, height, size, path, alt, pixels)
- `status` — HTTP status code (200 or 404)

Can be disabled via Site Features in Yoast SEO Settings.

---

## 2. Surfaces API

PHP API introduced in Yoast SEO 14.0. Access via `YoastSEO()` surface.

### Current page
```php
$title = YoastSEO()->meta->for_current_page()->title;
echo YoastSEO()->meta->for_current_page()->description;
echo (string) YoastSEO()->meta->for_current_page()->estimated_reading_time_minutes;
```

### Other pages
```php
YoastSEO()->meta->for_post(2)->canonical;
YoastSEO()->meta->for_url('https://example.com/page/')->title;
```

### Available properties (50+)
Canonical URL, meta description, SEO title, page ID, site name, schema data, Open Graph properties (author, modified, published, description, locale, site name, title, type, URL, image), X (Twitter) card data, robots values, breadcrumbs, estimated reading time.

### Helpers
```php
YoastSEO()->helpers->post_type->is_indexable(get_post_type());
YoastSEO()->helpers->post_type->get_public_post_types();
YoastSEO()->helpers->taxonomy->is_indexable('category');
```

Note: `open_graph_fb_app_id` is deprecated as of Yoast SEO 15.5.

---

## 3. Metadata API

Framework for managing meta tag construction and output in `<head>`. Uses presenter classes extending `Abstract_Indexable_Presenter`.

### Available presenters

**Generic:**
| Presenter | Filter | HTML output |
|---|---|---|
| `Title_Presenter` | `wpseo_title` | `<title>%s</title>` |
| `Meta_Description_Presenter` | `wpseo_metadesc` | `<meta name="description" content="%s" />` |
| `Canonical_Presenter` | `wpseo_canonical` | `<link rel="canonical" href="%s" />` |
| `Robots_Presenter` | `wpseo_robots` | `<meta name="robots" content="%s" />` |
| `Meta_Author_Presenter` | `wpseo_meta_author` | `<meta name="author" content="%s" />` |

**Webmaster verification:** Google, Bing, Baidu, Pinterest, Yandex

**X (Twitter):** Creator, Description, Image, Site, Title

**OpenGraph:** Article author/modified/published, description, locale, site name, title, type, URL, image

### Key methods
Presenters must implement:
- `get()` — returns raw meta value
- `present()` — returns complete formatted meta tag

### Properties available in presenters
- `$this->helpers` — helper classes
- `$this->replace_vars` — replacement variable substitution
- `$this->presentation` — all Yoast SEO output data

### Key filters
- `wpseo_frontend_presenters` — register, add, or remove presenters
- `wpseo_opengraph_image_size` — customize OG image dimensions

---

## 4. Schema API

Modify schema.org JSON-LD output.

### Disable all schema
```php
add_filter('wpseo_json_ld_output', '__return_false');
```

### Remove specific pieces
```php
add_filter('wpseo_schema_graph_pieces', function($pieces) {
    return array_filter($pieces, function($piece) {
        return !($piece instanceof \Yoast\WP\SEO\Generators\Schema\Breadcrumb);
    });
});
```

### Add custom pieces
Extend `Abstract_Schema_Piece` class. Receives `Meta_Tags_Context` object for accessing site variables.

### Modify existing pieces
Hook into `wpseo_schema_<class>` filters:
- `wpseo_schema_article`
- `wpseo_schema_organization`
- `wpseo_schema_person`
- `wpseo_schema_website`
- `wpseo_schema_webpage`
- `wpseo_schema_breadcrumb`

### Modify entire graph
```php
add_filter('wpseo_schema_graph', function($graph) {
    // Complex transformations across all Schema data
    return $graph;
});
```

### Conditional display
`wpseo_schema_needs_<class-name>` filter — enable/disable pieces based on custom logic.

### Gutenberg block integration
- `wpseo_pre_schema_block_type_<block-type>` action — fires when block detected
- `wpseo_schema_block_<block-type>` filter — receives graph, block content, and context

### Development mode
Pretty-print Schema output (not for production):
```php
add_filter('yoast_seo_development_mode', '__return_true');
```
