# Payhip Platform Reference

## Platform overview

Payhip is an all-in-one creator commerce platform for selling digital downloads, online courses, memberships, coaching sessions, and physical products. Founded in 2011 in London, bootstrapped and profitable, serving 130,000+ sellers. Key differentiator: all features available on every plan (no feature gating) — plans differ only in transaction fee percentage.

## Key modules

### Digital downloads
- Sell any file type: ebooks, PDFs, templates, software, design assets, music, video, zip archives
- Instant delivery via hosted download link after purchase
- Unique download links with configurable download limits
- PDF stamping available for piracy deterrence

### Online courses
- Video lessons with text content, quizzes, and assignments
- Drip course scheduling (release lessons over time)
- Student progress tracking
- Completion certificates
- Multimedia support (video, audio, text, downloads per lesson)

### Memberships
- Recurring subscription billing (monthly, annual, or custom intervals)
- Tiered membership levels
- Content gating by membership tier
- Cancel/pause functionality for subscribers

### Coaching
- 1:1 coaching session scheduling
- Integrates with Zoom and Calendly for booking
- Set session duration, price, and availability
- Calendar sync

### Physical products
- Inventory management with stock tracking
- Shipping configuration by region
- Product variants (size, color, etc.)

### Store builder
- Customizable storefront with themes (limited number)
- Custom domain connection (free on all plans)
- Website embedding (product widgets, checkout overlays, Buy Now buttons)
- Mobile-responsive design
- No coding required

## Marketing tools

### Coupons
- Percentage or fixed-amount discounts
- Per-product, multi-use, or collection-based coupons
- Start/end dates, usage limits, minimum purchase amounts
- Internal notes for tracking

### Affiliate program
- Built-in per-product affiliate system
- Configurable commission rates per product
- Affiliate tracking with unique links
- Dashboard for affiliates to track earnings
- PayPal payouts

### Cross-selling and upsells
- Cross-sell recommendations at checkout (suggest related products with discount incentive)
- No true order bump or post-purchase upsell flow

### Referral program
- Incentivize customers to share products with friends
- Reward both referrer and referee with special pricing

### Customer reviews
- Verified purchaser badges
- Review display on product pages

### Email marketing
- Built-in mailing list management
- Send updates/broadcasts to customers
- GDPR consent handling for EU subscribers
- **Native ESP integrations** (subscribers pushed every 10 minutes):
  - ActiveCampaign
  - AWeber
  - Campaign Monitor
  - Kit (ConvertKit)
  - Drip
- Other ESPs via Zapier
- Elastic Email integration available

### Bundles
- Group multiple products into bundles at a discount

## Pricing and limits

| Plan | Monthly cost | Transaction fee | Features |
|---|---|---|---|
| **Free Forever** | $0 | 5% | All features, unlimited products, unlimited revenue |
| **Plus** | $29 | 2% | All features, unlimited products, unlimited revenue |
| **Pro** | $99 | 0% | All features, unlimited products, unlimited revenue |

- PayPal and Stripe processing fees apply on all plans (typically ~2.9% + $0.30)
- No feature gating — every feature available on every plan
- Cancel anytime, no commitment
- **Instant payouts** — paid the moment a transaction completes (vs Gumroad weekly, Lemon Squeezy twice-monthly)

### Fee break-even analysis

| Monthly revenue | Free (5%) | Plus ($29 + 2%) | Pro ($99 + 0%) |
|---|---|---|---|
| $500 | $25 | $39 | $99 |
| $1,000 | $50 | $49 | $99 |
| $2,000 | $100 | $69 | $99 |
| $3,000 | $150 | $89 | $99 |
| $5,000 | $250 | $129 | $99 |
| $10,000 | $500 | $229 | $99 |

- Free → Plus break-even: ~$967/mo ($29 / 0.03 = $967)
- Plus → Pro break-even: ~$3,500/mo ($70 / 0.02 = $3,500)

## Integrations

### Payment processors
- **Stripe** — primary payment processor
- **PayPal** — alternative payment option
- No other payment processors supported

### Native ESP integrations
ActiveCampaign, AWeber, Campaign Monitor, Kit (ConvertKit), Drip — subscriber sync every 10 minutes

### Zapier
- Triggers: New Sale, Sale Refund, New Membership Subscription
- Connect to 8,000+ apps
- Use for ESPs not natively supported

### Website embedding
- Product embed widgets
- Checkout overlay (popup)
- Buy Now buttons
- Custom domain connection

### Other
- Elastic Email integration
- Google Analytics
- Facebook Pixel

## Data model (API)

### Coupons
- `id` (integer): Unique identifier
- `coupon_type` (enum): "single", "multi", or "collection"
- `percent_off` (float/null): 0-100 discount percentage
- `amount_off` (integer/null): Fixed discount in cents
- `code` (string): Coupon code
- `start_date`/`end_date` (datetime/null): RFC 3339 format
- `product_key` (string/null): For "single" type
- `collection_id` (string/null): For "collection" type
- `minimum_purchase_amount` (integer/null): In cents
- `usage_limit` (integer/null): Max redemptions
- `notes` (string/null): Internal notes

### License keys
- `license_key` (string): Unique identifier
- `enabled` (boolean): Valid/invalid status
- `product_link` (string): Product identifier
- `buyer_email` (string): Purchase email
- `uses` (integer): Usage count
- `product_name` (string): Product name
- `date` (datetime): RFC 3339 creation timestamp

### Webhook events
- `paid` — customer charged (transaction ID, email, currency, price in cents, items, fees, timestamp)
- `refunded` — payment refunded (includes amount_refunded, date_refunded, date_created)
- `subscription.created` — new subscription (subscription ID, customer details, plan, product)
- `subscription.deleted` — subscription canceled (status: "canceled", date_subscription_deleted)

All webhook prices in cents (e.g., $10 = 1000). Signature verification via `hash('sha256', $apiKey)`. Failed deliveries retry hourly for 3 hours. Endpoints must return HTTP 200.

## Workflow setup

### Setting up a digital product store
1. Create account at payhip.com (free)
2. Connect Stripe and/or PayPal in Settings > Payments
3. Add products: Products > Add Product > choose type (Digital Download, Course, Membership, Coaching, Physical)
4. Upload files, set price, write description
5. Configure store theme and branding in Store > Customize
6. (Optional) Connect custom domain in Settings > Domain
7. (Optional) Connect ESP in Settings > Integrations
8. (Optional) Enable affiliate program per product in product settings
9. Share store link or embed on existing site

### Setting up a course
1. Products > Add Product > Course
2. Add modules and lessons (video, text, quiz, assignment, downloads)
3. Configure drip schedule if releasing over time
4. Set pricing (one-time or subscription)
5. Preview course from student perspective
6. Publish and share enrollment link

### Setting up memberships
1. Products > Add Product > Membership
2. Define membership tiers and pricing (monthly/annual)
3. Add gated content to each tier
4. Configure welcome email and onboarding content
5. Publish

## Deep dives

### Tax handling
- Automatic EU/UK VAT calculation and reporting
- VAT ID: GB201772244 (UK), EU372014671 (EU)
- Does NOT handle US sales tax, Australian GST, Canadian GST/HST, or other non-EU/UK taxes
- If selling globally, consider supplementing with a tax service or using Payhip only for EU/UK sales

### Custom domain setup
- Free on all plans
- Point your domain's CNAME record to Payhip
- SSL certificate provisioned automatically
- Store accessible at your custom domain (e.g., store.yourbrand.com)

### Embedding on external sites
- **Product embed**: Full product listing widget for any webpage
- **Checkout overlay**: Popup checkout triggered by Buy Now button — customer never leaves your site
- **Buy Now button**: Simple button that links to Payhip checkout
- For WordPress: paste embed code in a Custom HTML block
- For Squarespace/Wix: use embed/code injection features
