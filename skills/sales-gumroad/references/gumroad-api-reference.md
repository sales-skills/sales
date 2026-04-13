<!-- Source: https://github.com/antiwork/gumroad (open-source Rails codebase, API v2 controllers) -->
<!-- Supplemented by: https://rollout.com/integration-guides/gumroad/api-essentials, https://nocodeapi.com/docs/gumroad-api/, https://hexdocs.pm/gumroad_elixir/Gumroad.html -->

# Gumroad API v2 Reference

## General

- **Base URL:** `https://api.gumroad.com/v2/`
- **Protocol:** REST, all responses are JSON
- **Authentication:** OAuth 2.0 via Doorkeeper. Pass `access_token` as a parameter or in the Authorization header.
- **Rate Limiting:** HTTP 429 "Too Many Requests" (no published numeric limits)
- **Pagination:** Cursor-based via `page_key` parameter (Base64-encoded); responses include `next_page_url` when more results exist
- **Error format:** `{ "success": false, "message": "..." }`
- **Soft deletes:** Most DELETE operations set a `deleted_at` timestamp rather than hard-deleting

## OAuth Scopes

| Scope | Used By |
|---|---|
| `view_public` | Products, Offer Codes, Custom Fields, Variant Categories, Variants, SKUs, User |
| `view_sales` | Sales, Subscribers, Resource Subscriptions |
| `edit_products` | Product CRUD, Offer Codes, Custom Fields, Variants, Covers, Files, Bundle Contents, Licenses |
| `edit_sales` | Resend Receipt, Refund |
| `refund_sales` | Refund |
| `mark_sales_as_shipped` | Mark as Shipped |

---

## 1. Products

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products` | `view_public` | List all products (paginated via `page_key`) |
| POST | `/products` | `edit_products` | Create a product |
| GET | `/products/:id` | `view_public` | Get a single product |
| PUT | `/products/:id` | `edit_products` | Update a product |
| DELETE | `/products/:id` | `edit_products` | Delete a product (soft delete) |
| POST | `/products/:id/enable` | `edit_products` | Publish a product |
| POST | `/products/:id/disable` | `edit_products` | Unpublish a product |

**Create/Update parameters:**
- `name` (string, required on create)
- `description` (HTML string)
- `native_type` (string, default "digital")
- `price` (integer, cents)
- `price_currency_type` (currency code)
- `custom_permalink` (string)
- `customizable_price` (boolean — enables pay-what-you-want)
- `suggested_price_cents` (integer)
- `max_purchase_count` (integer)
- `quantity_enabled` (boolean)
- `is_adult` (boolean)
- `display_product_reviews` (boolean)
- `should_show_sales_count` (boolean)
- `taxonomy_id` (integer)
- `custom_receipt` (string)
- `custom_summary` (string)
- `tags` (array of strings)
- `subscription_duration` (membership type only)
- `files` (array: `{ url, id, display_name, extension, position, stream_only, description }`)
- `rich_content` (array of page objects: `{ id, title, description }`)
- `has_same_rich_content_for_all_variants` (boolean, update only)
- `cover_ids` (array, update only — reorder covers)

**Response:** `{ "success": true, "product": { ... } }`

---

## 2. Sales

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/sales` | `view_sales` | List sales (paginated) |
| GET | `/sales/:id` | `view_sales` | Get a single sale |
| POST | `/sales/:id/mark_as_shipped` | `mark_sales_as_shipped` | Mark sale as shipped |
| POST | `/sales/:id/refund` | `refund_sales` or `edit_sales` | Refund a sale |
| POST | `/sales/:id/resend_receipt` | `edit_sales` | Resend purchase receipt |

**List parameters:**
- `before` (string, "YYYY-MM-DD")
- `after` (string, "YYYY-MM-DD")
- `email` (string)
- `product_id` (string)
- `order_id` (string)
- `page_key` (string, cursor pagination)

**Mark as Shipped parameters:**
- `tracking_url` (string, optional)

**Refund parameters:**
- `amount_cents` (integer, optional — for partial refund)

---

## 3. Subscribers

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products/:product_id/subscribers` | `view_sales` | List subscribers for a product |
| GET | `/subscribers/:id` | `view_sales` | Get a single subscriber |

**List parameters:**
- `email` (string, filter by purchase email)
- `page_key` (string, cursor)
- `paginated` ("1" or "true" to enable pagination)

---

## 4. Licenses

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| POST | `/licenses/verify` | *public (no auth required)* | Verify a license key |
| PUT | `/licenses/enable` | `edit_products` | Enable a license |
| PUT | `/licenses/disable` | `edit_products` | Disable a license |
| PUT | `/licenses/rotate` | `edit_products` | Rotate (regenerate) a license key |
| PUT | `/licenses/decrement_uses_count` | `edit_products` | Decrement license uses count |

**Parameters (all endpoints):**
- `license_key` (string, required)
- `product_id` or `product_permalink` (required for enable/disable/rotate/decrement)

**Verify additional parameters:**
- `increment_uses_count` (boolean, default false)

**Verify response includes:** `success`, `uses`, `purchase` object (id, created_at, variants, custom_fields, offer_code, refunded, chargebacked, subscription status, test)

**Important:** Products created after Jan 9, 2023 require `product_id` instead of `product_permalink`.

---

## 5. Offer Codes

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products/:product_id/offer_codes` | `view_public` | List offer codes (includes universal codes) |
| GET | `/products/:product_id/offer_codes/:id` | `view_public` | Get a single offer code |
| POST | `/products/:product_id/offer_codes` | `edit_products` | Create an offer code |
| PUT | `/products/:product_id/offer_codes/:id` | `edit_products` | Update an offer code |
| DELETE | `/products/:product_id/offer_codes/:id` | `edit_products` | Delete an offer code (soft delete) |

**Create parameters:**
- `name` (string, required — the code itself)
- `offer_type` ("percent" or fixed amount)
- `amount_off` or `amount_cents` (one required)
- `universal` ("true" for all products)
- `max_purchase_count` (integer)

**Update parameters:**
- `max_purchase_count` (integer)

---

## 6. Custom Fields

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products/:product_id/custom_fields` | `view_public` | List custom fields |
| POST | `/products/:product_id/custom_fields` | `edit_products` | Create a custom field |
| PUT | `/products/:product_id/custom_fields/:id` | `edit_products` | Update a custom field |
| DELETE | `/products/:product_id/custom_fields/:id` | `edit_products` | Delete a custom field |

**Create parameters:**
- `name` (string, optional if `url` or `label` provided)
- `url` (string, optional)
- `label` (string, optional)
- `required` (boolean, default false)
- `type` (string, default "text")

---

## 7. Variant Categories

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products/:product_id/variant_categories` | `view_public` | List variant categories |
| POST | `/products/:product_id/variant_categories` | `edit_products` | Create a variant category |
| GET | `/products/:product_id/variant_categories/:id` | `view_public` | Get a single variant category |
| PUT | `/products/:product_id/variant_categories/:id` | `edit_products` | Update a variant category |
| DELETE | `/products/:product_id/variant_categories/:id` | `edit_products` | Delete (soft delete) |

**Create/Update parameters:**
- `title` (string)

---

## 8. Variants

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products/:pid/variant_categories/:vc_id/variants` | `view_public` | List variants |
| POST | `/products/:pid/variant_categories/:vc_id/variants` | `edit_products` | Create a variant |
| GET | `/products/:pid/variant_categories/:vc_id/variants/:id` | `view_public` | Get a single variant |
| PUT | `/products/:pid/variant_categories/:vc_id/variants/:id` | `edit_products` | Update a variant |
| DELETE | `/products/:pid/variant_categories/:vc_id/variants/:id` | `edit_products` | Delete (soft delete) |

**Create/Update parameters:**
- `name` (string)
- `price_difference_cents` (integer)
- `description` (string)
- `max_purchase_count` (integer)
- `rich_content` (JSON array, update only)

---

## 9. SKUs

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/products/:product_id/skus` | `view_public` | List SKUs for a product |

---

## 10. User

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/user` | `view_public` | Get authenticated user info |

---

## 11. Resource Subscriptions (Webhooks via API)

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| GET | `/resource_subscriptions` | `view_sales` | List resource subscriptions |
| POST | `/resource_subscriptions` | `view_sales` | Create a resource subscription |
| DELETE | `/resource_subscriptions/:id` | `view_sales` | Delete a resource subscription |

**List parameters:**
- `resource_name` (string, required)

**Create parameters:**
- `resource_name` (string, required)
- `post_url` (string, required — URL to receive POSTs)

**Supported resource names:**
1. `sale`
2. `refund`
3. `dispute`
4. `dispute_won`
5. `cancellation`
6. `subscription_updated`
7. `subscription_ended`
8. `subscription_restarted`

---

## 12. Covers (Product Images)

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| POST | `/products/:product_id/covers` | `edit_products` | Upload a cover image |
| DELETE | `/products/:product_id/covers/:id` | `edit_products` | Delete a cover image |

**Create parameters (one required):**
- `signed_blob_id` (string — pre-signed blob)
- `url` (string — direct URL)

---

## 13. Files (Direct Upload)

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| POST | `/products/:product_id/files/presign` | `edit_products` | Get presigned S3 upload URLs |
| POST | `/products/:product_id/files/complete` | `edit_products` | Complete multipart upload |

**Presign parameters:**
- `filename` (string, required)
- `file_size` (integer, required, max 20 GB)

**Presign response:** `{ upload_id, key, file_url, parts: [{ part_number, presigned_url }] }`

**Complete parameters:**
- `upload_id` (string, required)
- `key` (string, required)
- `parts` (array: `[{ part_number, etag }]`)

---

## 14. Bundle Contents

| Method | Endpoint | Scope | Description |
|---|---|---|---|
| PUT | `/products/:product_id/bundle_contents` | `edit_products` | Update bundle product contents |

**Parameters:**
- `products` (array, required): `[{ product_id, variant_id, quantity (default 1), position }]`

---

## 15. Ping / Webhooks (Dashboard-configured)

Configure at **Settings → Advanced → Ping endpoint**. Gumroad POSTs to your URL on events. Retries up to 3 times over 15–20 minutes if no response.

**Verification header:** `x-gumroad-signature` (HMAC-SHA256)

**Content-Type:** `application/x-www-form-urlencoded` (NOT JSON)

**Webhook POST payload fields:**

| Field | Type | Notes |
|---|---|---|
| `seller_id` | string | Seller's unique ID |
| `product_id` | string | Product unique ID |
| `product_name` | string | Product name |
| `permalink` | string | Product permalink |
| `product_permalink` | string | Original perma ID (never custom) |
| `email` | string | Buyer email |
| `full_name` | string | Buyer name (if present) |
| `price` | integer | Price paid in USD cents |
| `currency` | string | Currency code |
| `quantity` | integer | Quantity purchased |
| `order_number` | string | Order number |
| `sale_id` | string | Sale unique ID |
| `sale_timestamp` | string | ISO timestamp |
| `subscription_id` | string | Subscription ID (if recurring) |
| `variants` | object/array | Variant selections (if present) |
| `offer_code` | string | Discount code used (if any) |
| `license_key` | string | License key (if product has licensing) |
| `ip_country` | string | Buyer's country from IP |
| `recurrence` | string | Billing recurrence (monthly, yearly, etc.) |
| `is_gift_receiver_purchase` | boolean | Whether this is a gift redemption |
| `is_recurring_charge` | boolean | Whether this is a recurring charge |
| `is_preorder_authorization` | boolean | Whether this is a preorder auth |
| `refunded` | boolean | Whether the sale has been refunded |
| `resource_name` | string | Event type (sale, refund, dispute, etc.) |
| `disputed` | boolean | Whether sale is disputed |
| `dispute_won` | boolean | Whether dispute was won |
| `custom_fields` | object | Dictionary of custom field responses |
| `shipping_information` | object | Shipping details (if physical) |
| `url_params` | object | URL params passed during checkout |
| `test` | boolean | Whether this is a test ping |
