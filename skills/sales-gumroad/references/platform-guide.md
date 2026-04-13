# Gumroad Platform Reference

## Platform overview

Gumroad is a digital commerce platform for independent creators to sell digital products, subscriptions, and memberships with zero monthly fees. Founded by Sahil Lavingia, Gumroad positions itself as the simplest way to "earn your first dollar online." The platform charges a flat 10% + $0.50 per sale (plus payment processing ~2.9% + $0.30). Since January 2025, Gumroad operates as a Merchant of Record, handling all global tax compliance (VAT, GST, sales tax). The codebase is open source at github.com/antiwork/gumroad.

**Target audience**: Solo creators, indie developers, artists, educators, writers, musicians — anyone selling digital products without wanting to manage infrastructure.

**Key differentiators**: Zero monthly fees (pay only when you sell), Discover marketplace for organic traffic, built-in email broadcasts, license key generation, open-source codebase.

## Key modules

### Product types
- **Digital downloads**: Ebooks, templates, presets, audio, design assets. Buyers get immediate download access. Supports PDF, ePub, Mobi, lossless audio, and any file format.
- **Courses**: Video lessons with structured content. Supports drip content.
- **Memberships/subscriptions**: Monthly, quarterly, biannual, or yearly recurring payments. Access tied to subscription duration.
- **Software with license keys**: Auto-generated license keys per purchase. API for verification, enable/disable, rotation.
- **Physical products**: Supports shipping with address collection.
- **Bundles**: Combine multiple products into a single purchase.

### Pricing options
- **Fixed price**: Set a specific price
- **Pay-what-you-want**: Set a minimum (including $0), let buyers choose
- **Tiered/variants**: Create variant categories with price differences
- **Subscriptions**: Recurring billing (monthly/quarterly/biannual/yearly)

### Storefront
- Customizable product pages with colors, covers, and descriptions
- Embed checkout on your own website via overlay or embed widget
- Custom domain support
- "Follow" button for your own site
- Rich content pages per product (for course-style content)

### Discover marketplace
- Gumroad's built-in marketplace where buyers browse by category (3D, audio, comics, design, gaming, education, etc.)
- **Requires at least one prior sale to activate** — new products with zero sales don't appear
- Marketplace sales cost 30% (not the standard 10%) — this covers marketing/discovery
- Categories: 3D, Audio, Business & Money, Comics & Graphic Novels, Design, Drawing & Painting, Education, Fiction Books, Films, Fitness & Health, Gaming, Music, Nonfiction Books, Other, Photography, Programming, Recorded Music, Self Improvement, Software, Writing & Publishing

### Email broadcasts
- Send emails to all buyers and followers
- Segment by product purchased
- Import/export email lists
- No automation sequences (unlike dedicated ESPs) — broadcasts only
- Good for product announcements and updates, not for complex marketing automation

### Affiliate management
- Built-in per-product affiliate program
- Commission rate: creator-configurable from 1% to 90%
- 30-day cookie duration
- Affiliates must be invited by the creator (no central signup)
- Payouts every Friday, $10 minimum threshold
- Track affiliate performance per product

### Content protection
- Lightweight DRM for digital files
- PDF stamping with buyer info
- License key generation and verification API
- Usage count tracking per license

### Analytics
- Sales dashboard with revenue, refunds, and conversion metrics
- Per-product analytics
- Traffic source tracking
- Geographic breakdown

## Pricing and limits

| Item | Cost |
|---|---|
| Monthly fee | $0 (free) |
| Direct sale fee | 10% + $0.50 per transaction |
| Discover marketplace fee | 30% flat (includes all processing) |
| Payment processing | ~2.9% + $0.30 (Stripe, included in direct sale fee) |
| Payout schedule | Weekly on Fridays |
| Payout minimum | $10 |
| File size limit | Up to 20 GB per file |
| Tax handling | Full MoR since Jan 2025 — Gumroad handles all VAT/GST/sales tax globally |

**Effective fee rates by price point** (direct sales, including Gumroad's 10% + $0.50):

| Product price | Gumroad fee | Effective rate |
|---|---|---|
| $3 | $0.80 | 26.7% |
| $5 | $1.00 | 20.0% |
| $10 | $1.50 | 15.0% |
| $25 | $3.00 | 12.0% |
| $50 | $5.50 | 11.0% |
| $100 | $10.50 | 10.5% |
| $500 | $50.50 | 10.1% |

Payment processing fees (~2.9% + $0.30) are additional on top of these.

**No volume discounts.** The 10% rate is flat regardless of revenue. Compare:
- Payhip: Free plan 5%, Plus $29/mo 2%, Pro $99/mo 0%
- Lemon Squeezy: 5% + $0.50
- Kit Commerce: 0.6% (on Creator Pro plan)

## Integrations

### Native
- **Zapier**: Triggers (new sale, cancellation, refund, new product) and actions
- **Stripe**: Payment processing (credit/debit cards only — PayPal removed Oct 2024)
- **Email**: Import/export subscribers, broadcast emails

### Webhooks (Ping)
Configure at Settings → Advanced → Ping endpoint. Gumroad POSTs to your URL on sale, refund, dispute, and subscription events. Data format: `x-www-form-urlencoded` (not JSON). Retries up to 3 times over 15–20 minutes. Signature verification via `x-gumroad-signature` header (HMAC-SHA256).

### API
REST API v2 at `https://api.gumroad.com/v2/`. OAuth 2.0 authentication. Full CRUD for products, sales, subscribers, licenses, offer codes, custom fields, variants, and resource subscriptions. See `references/gumroad-api-reference.md` for complete endpoint documentation.

### Zapier triggers/actions
- **Triggers**: New sale, sale refunded, subscription cancelled, new product added
- **Actions**: Create product, update product
- **Searches**: Find sale, find product

## Data model

### Key objects
- **Product** (aka Link): The sellable item. Has `id`, `name`, `permalink`, `custom_permalink`, `price`, `currency`, `published`, covers, files, variants, offer codes, custom fields
- **Sale** (aka Purchase): A completed transaction. Has `id`, `email`, `price`, `currency`, `product_id`, `order_number`, `sale_timestamp`, `refunded`, `license_key`, `custom_fields`, `variants`
- **Subscriber**: A recurring subscription buyer. Has `id`, `product_id`, `email`, `status` (alive/cancelled), `created_at`, `ended_at`
- **License**: Auto-generated per sale for products with licensing enabled. Has `license_key`, `uses`, `enabled`
- **Offer Code**: Discount code. Has `name` (the code), `amount_off`, `offer_type` (percent/fixed), `max_purchase_count`
- **Variant Category**: Grouping for product options (e.g., "Size", "Format"). Contains variants with `name`, `price_difference_cents`

### IDs
- Gumroad uses "perma IDs" — short alphanumeric strings that persist even if a custom permalink is set
- `product_permalink` is the original perma ID (never changes), distinct from `custom_permalink` (user-chosen URL slug)
- API endpoints accept the product `id` (full ID) — for license verification, use `product_id` (not `product_permalink`) for products created after Jan 9, 2023

## Workflow setup

### Setting up your first product
1. Sign up at gumroad.com (free)
2. Go to Products → New Product
3. Choose product type (digital, course, membership, physical, bundle)
4. Add name, description, cover image, and price
5. Upload files (up to 20 GB per file)
6. Set pricing (fixed, pay-what-you-want, subscription)
7. Configure delivery (instant download, drip content for courses)
8. Publish — your product gets a gumroad.com/{username}/{permalink} URL
9. Optionally embed on your website using Gumroad's overlay or embed widget

### Setting up license key verification
1. Create a product with "Generate a unique license key per sale" enabled
2. After sale, buyer receives a license key in their receipt email
3. In your software, call `POST https://api.gumroad.com/v2/licenses/verify` with `product_id` and `license_key`
4. Check `success`, `uses`, and `purchase.test` in the response
5. Optionally set `increment_uses_count: true` to track activations
6. Use `PUT /licenses/disable` to revoke and `PUT /licenses/enable` to restore

### Setting up webhooks
1. Go to Settings → Advanced → Ping
2. Enter your endpoint URL (must be HTTPS)
3. Click "Send test ping to URL" to verify
4. Your endpoint receives POST data as `x-www-form-urlencoded`
5. Verify authenticity using the `x-gumroad-signature` header (HMAC-SHA256)
6. Supported events: sale, refund, dispute, dispute_won, cancellation, subscription_updated, subscription_ended, subscription_restarted

### Setting up affiliates
1. Go to a product's settings → Affiliates
2. Enable the affiliate program for that product
3. Set the commission rate (1–90%)
4. Invite affiliates by email — they receive a unique referral link
5. Affiliates share the link; sales are tracked via 30-day cookie
6. Payouts happen automatically every Friday ($10 minimum)

## Deep dives

### Fee optimization strategies
- **Bundle products** to increase AOV — a $49 bundle loses 11.5% to Gumroad vs 20% on a $5 individual product
- **Use pay-what-you-want with a high suggested price** — buyers often pay more than the minimum, improving your per-sale fee ratio
- **Drive direct traffic** — avoid the 30% Discover fee by sending your own traffic to product pages
- **Consider switching at $3K+/month revenue** — at this level, Payhip Pro ($99/mo, 0% fee) or Lemon Squeezy (5%) save hundreds monthly

### Email broadcasts best practices
- Gumroad's email tool is basic — no automation, no sequences, no A/B testing
- Use for product announcements, updates, and simple newsletters
- For marketing automation, connect Gumroad to a dedicated ESP (Kit, MailerLite, Mailchimp) via Zapier or webhooks
- Segment by product purchased — email all buyers of Product X about a related launch

### Gumroad Discover optimization
- Requires at least one sale before your product appears
- Use relevant categories and tags
- Price competitively — Discover shoppers compare options
- High ratings and reviews improve visibility
- The 30% fee on Discover sales means it's essentially a paid marketing channel — evaluate ROI like you would for ads
