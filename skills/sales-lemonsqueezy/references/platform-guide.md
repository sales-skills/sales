# Lemon Squeezy Platform Reference

## Platform overview

Lemon Squeezy is an all-in-one platform for selling digital products, software, and subscriptions globally. It acts as a **Merchant of Record (MoR)** — meaning Lemon Squeezy is the legal seller of record, handling sales tax, VAT, and fraud on behalf of the merchant. Acquired by Stripe in July 2024. Target audience: indie developers, SaaS founders, digital creators, and small software companies.

**Key differentiator**: MoR model eliminates tax compliance burden. Compared to Stripe (where you're the seller and must handle tax yourself), Lemon Squeezy handles all tax collection, reporting, and remittance across 130+ countries.

## Key modules

### Products and Variants
- **Products**: The top-level item you sell (an ebook, a SaaS plan, a template pack)
- **Variants**: Different versions of a product — e.g., Basic ($29/mo) and Pro ($99/mo) plans, or Standard and Bundle editions
- **Pricing options**: One-time, subscription (recurring), usage-based, "pay what you want", free/lead magnet
- **Files**: Attach downloadable files to products — secure download links generated per order
- **License keys**: Auto-generate unique license keys on purchase for software activation/gating

### Subscriptions
- Recurring billing at any interval (monthly, yearly, custom)
- Usage-based billing with metered usage records
- Free trials (time-limited)
- Dunning management: automatic retry on failed payments with configurable retry schedule
- Pause and resume subscriptions
- Upgrade/downgrade with proration
- Cancellation with optional grace period (access until end of billing period)

### Checkout
- **Hosted checkout**: Full-page checkout on Lemon Squeezy's domain (checkout.lemonsqueezy.com)
- **Checkout overlay**: Modal overlay on your own site — loads LS checkout in a popup without leaving your page
- **Checkout links**: No-code shareable URLs that go directly to payment
- **Embeddable forms**: Script tag for embedding checkout directly in your page
- **Customization**: Logo, colors, product images, custom fields, discount codes at checkout
- **Payment methods**: 20+ methods including credit/debit cards, PayPal, Apple Pay, Google Pay — 95+ currencies

### License Keys
- Auto-generated on purchase (configurable length and format)
- **License API** (separate from main API): Activate, deactivate, and validate license keys
- **Activation limits**: Set max number of instances a key can be activated on
- **Status values**: inactive (valid, no activations), active (has activations), expired (past expiry or subscription ended), disabled (manually disabled)
- **Subscription-tied keys**: Keys stay active as long as subscription is active, expire when subscription expires

### Email Marketing
- Built-in newsletter sending to customers and subscribers
- Automatic customer segmentation (by product, purchase status)
- Free up to 500 subscribers, then tiered pricing ($10/mo for 1K, scales to $2,500/mo for 500K)
- Subscriber collection via purchases and signup forms
- Real-time subscriber profiles and performance tracking
- **Limitations**: No automation builder, no drip sequences, no A/B testing, no advanced segmentation. For serious email marketing, connect to a dedicated ESP via webhooks/Zapier.

### Affiliate Management
- Built-in affiliate program for merchants
- Set percentage or flat-rate commissions per product
- Affiliate hub for affiliates to track referrals and earnings
- Application-based affiliate approval (manual review)
- Automatic payout tracking
- **Fees**: 2% fee on affiliate-referred orders (added to base 5% + 50¢) + 1% deducted from affiliate payouts

### Analytics and Reporting
- Real-time revenue dashboard (MRR, total revenue, refunds)
- Per-product and per-variant sales reporting
- Customer analytics
- Subscription metrics (active, churned, MRR growth)

## Pricing and limits

### Transaction Fees
- **Base**: 5% + 50¢ per transaction (no monthly fee, no setup fee)
- **Affiliate orders**: Additional 2% fee per affiliate-referred sale
- **Volume discounts**: Available on request for high-volume sellers
- **Custom pricing**: Available for enterprise/unique business models

### Email Marketing Pricing
| Subscribers | Monthly | Annual |
|---|---|---|
| Up to 500 | Free | Free |
| 1,000 | $10/mo | $100/yr |
| 5,000 | $25/mo | $250/yr |
| 10,000 | $50/mo | $500/yr |
| 50,000 | $200/mo | $2,000/yr |
| 500,000 | $2,500/mo | $25,000/yr |

### Rate Limits
- **Main API**: 300 requests per minute
- **License API**: 60 requests per minute

## Integrations

### Native Integrations (from LS dashboard)
- **ConvertKit (Kit)**: Auto-add customers as subscribers
- **Mailchimp**: Auto-add customers as subscribers
- **Zapier**: Connect to 8,000+ apps — triggers for new orders, subscriptions, license keys, refunds

### External Integrations (connect TO Lemon Squeezy)
- **Fernand**: Show purchase data in customer support tool
- **Framer**: Sell products on Framer sites
- **ParityDeals**: Purchasing power parity pricing

### Developer Integrations
- **REST API**: Full programmatic access to all store data
- **Webhooks**: Real-time event notifications for orders, subscriptions, license keys, etc.
- **Official SDKs**: JavaScript (@lmsqueezy/lemonsqueezy.js), Laravel (@lmsqueezy/laravel)
- **Community SDKs**: Go, Ruby, Rust, Swift, Python, PHP, Elixir, Java

### Stripe (Post-Acquisition)
- Lemon Squeezy now uses Stripe for payment processing infrastructure
- Stripe Managed Payments (private beta) — Stripe's own MoR solution being built on LS technology

## Data model (API)

### Core Objects
| Object | Description |
|---|---|
| **User** | Your Lemon Squeezy account |
| **Store** | A storefront (you can have multiple) |
| **Product** | A product in your store |
| **Variant** | A pricing option/version of a product |
| **Price** | Pricing details for a variant |
| **File** | Downloadable file attached to a product |
| **Customer** | Someone who has purchased from your store |

### Transaction Objects
| Object | Description |
|---|---|
| **Order** | A completed purchase |
| **Order Item** | A line item within an order |
| **Subscription** | An active or past subscription |
| **Subscription Invoice** | A billing event for a subscription |
| **Subscription Item** | A line item within a subscription |
| **Usage Record** | Metered usage data for usage-based billing |

### Monetization Objects
| Object | Description |
|---|---|
| **Discount** | A discount code |
| **Discount Redemption** | A record of a discount being used |
| **License Key** | A software license key |
| **License Key Instance** | An activation of a license key |
| **Checkout** | A programmatically created checkout session |
| **Webhook** | A configured webhook endpoint |

### Relationships
- Store → has many Products → has many Variants → has many Prices
- Product → has many Files
- Customer → has many Orders → has many Order Items
- Customer → has many Subscriptions → has many Subscription Invoices
- Variant → has many License Keys → has many License Key Instances

## Workflow setup

### Setting up a digital product sale
1. Create a Store (Settings → Stores)
2. Create a Product (Products → New Product)
3. Add Variant(s) with pricing (one-time, subscription, or pay-what-you-want)
4. Upload downloadable files
5. Optionally enable license key generation
6. Get your checkout link (Products → Share) or create a Checkout via API
7. Configure webhooks for order fulfillment (Settings → Webhooks)

### Setting up a SaaS subscription
1. Create Product with subscription variant(s) (monthly, annual)
2. Enable license keys for software gating
3. Configure trial period if desired
4. Set up webhooks for: `subscription_created`, `subscription_updated`, `subscription_cancelled`, `subscription_expired`, `subscription_payment_success`, `subscription_payment_failed`
5. Implement License API validation in your software (activate on first launch, validate on subsequent launches)
6. Implement upgrade/downgrade flow via API or Lemon Squeezy's customer portal

### Setting up webhooks
1. Go to Settings → Webhooks → click "+"
2. Enter your callback URL (must be HTTPS, must be production — not localhost)
3. Select events to listen for
4. Copy the signing secret for signature verification
5. Your endpoint must return 200 within the timeout
6. Failed deliveries retry 3 times with exponential backoff
7. Use test mode to simulate webhook events before going live

## Deep dives

### Tax handling as Merchant of Record
- Lemon Squeezy is the seller of record — they collect, report, and remit sales tax and VAT globally
- Tax is calculated automatically based on the buyer's location
- Tax amounts are deducted from your payout (not charged to you separately)
- You receive a 1099 (US) or equivalent tax form for your earnings
- **Important**: Lemon Squeezy handles transaction taxes (sales tax, VAT, GST). You're still responsible for your own income tax on earnings.

### Webhook signature verification
- Every webhook request includes a `X-Signature` header
- Verify by computing HMAC-SHA256 of the raw request body using your signing secret
- Compare the computed hash to the signature header
- Reject requests that don't match — this prevents spoofed webhook calls

### Checkout overlay integration
```html
<script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
<a href="https://yourstore.lemonsqueezy.com/checkout/buy/variant-uuid" class="lemonsqueezy-button">Buy Now</a>
```
The `lemon.js` script intercepts clicks on `.lemonsqueezy-button` links and opens the checkout in a modal overlay instead of navigating away.

### Customer portal
- Lemon Squeezy provides a hosted customer portal where customers can:
  - View order history
  - Download purchased files
  - Manage subscription (upgrade, downgrade, cancel, update payment method)
  - View and activate license keys
- Link: `https://app.lemonsqueezy.com/my-orders` (customer logs in with their email)
