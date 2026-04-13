# Checkout Optimization Platform Guide

## Checkout Page Elements

A high-converting checkout page includes:

1. **Order summary** — Clear product name, image, price, and what's included. Never make the buyer guess what they're paying for.
2. **Trust badges** — SSL/secure checkout icon, payment processor logos (Visa, Mastercard, PayPal), money-back guarantee badge.
3. **Testimonials** — 1-3 short proof elements near the purchase button. Social proof at the moment of decision reduces hesitation.
4. **Guarantee** — Prominently display your refund policy. A 30-day money-back guarantee typically increases conversions more than it increases refunds.
5. **Minimal form fields** — Only collect what you need. Every extra field reduces completion rate by roughly 3-5%. For digital products: name, email, payment. That's it.
6. **Single-page checkout** — Multi-step checkouts lose 10-20% of buyers at each step. Use a single-page layout unless you have a specific reason not to.
7. **Progress indicator** — If multi-step is unavoidable, show a clear progress bar.
8. **Urgency/scarcity** — Countdown timers, limited availability, or fast-action bonuses. Use honestly.

## Order Bumps

An order bump is an add-on offer shown directly on the checkout page, typically as a checkbox. The buyer can add it with one click without leaving the page.

- **Benchmark take rate**: 20-40% of buyers will accept a well-positioned order bump.
- **Pricing sweet spot**: Price the bump at 30-50% of the main offer. A $97 product pairs well with a $37-$47 bump.
- **Best practices**:
  - Place the bump between the order summary and the payment button.
  - Use a checkbox with a short, benefit-driven description (1-2 sentences).
  - Frame it as a complement to the main offer: "Add [X] to get [specific benefit] — just $37."
  - The bump should feel like an obvious add-on, not a distraction.
  - Limit to 1-2 bumps maximum. More than that creates decision fatigue.

## Upsells (Post-Purchase)

A one-click upsell is presented after the initial purchase is complete. The buyer's payment info is already on file, so they can accept with a single click.

- **Benchmark take rate**: 10-25% of buyers will accept a relevant upsell.
- **Pricing**: Upsells can be priced at or above the main offer. Common pattern: main offer $97, upsell $197.
- **Upsell sequence**: Offer -> Upsell 1 -> (if declined) Downsell -> Upsell 2 -> Thank You page. Limit to 2-3 offers total.
- **Best practices**:
  - The upsell must be a logical next step from what they just bought.
  - Use a video or short copy explaining the offer. Keep it under 2 minutes.
  - Include a clear "Yes, add this" and "No thanks, skip this" button.
  - Never make the buyer feel tricked or trapped.

## Downsells

If the buyer declines an upsell, offer a downsell — a lower-priced or reduced version of the same offer.

- Price the downsell at 40-60% of the upsell price.
- Alternatively, offer a payment plan version of the upsell.
- Downsells typically convert 15-30% of those who declined the upsell.

## Payment Plans vs. Pay-in-Full

- **Payment plans** increase total buyers by 20-40% but introduce failed payment risk and lower immediate cash flow.
- **Pay-in-full incentive**: Offer a discount (5-15%) or bonus for paying in full. Example: "$997 one-time or 3 payments of $397."
- The pay-in-full option should always be the default/highlighted choice.
- For products over $200, always offer a payment plan option.
- Use dunning management (automated retry of failed payments) to reduce involuntary churn on payment plans.

## Cart Abandonment Recovery

60-80% of people who begin checkout will abandon it. Recovery strategies:

1. **Exit-intent popup** — Trigger when the cursor moves toward the browser close button. Offer a small incentive or remind them of the guarantee.
2. **Abandoned cart email sequence** — 3-email sequence: (1) reminder at 1 hour, (2) objection-handling at 24 hours, (3) urgency/final chance at 48-72 hours.
3. **Retargeting ads** — Show ads to people who visited the checkout page but didn't purchase.
4. **SMS follow-up** — If you collected the phone number, a single text reminder at 2-4 hours converts well.
5. **Save cart state** — Ensure the checkout page preserves entered information if the user navigates away and returns.

## Pricing Psychology

- **Charm pricing**: $97 instead of $100; $47 instead of $50. This works at every price point for B2C.
- **Anchoring**: Show the full value first ("Total value: $2,485"), then the actual price ("Your price today: $497"). The anchor makes the real price feel like a deal.
- **Decoy pricing**: When offering multiple tiers, make the middle tier the obvious best value. The highest tier exists to make the middle tier look reasonable.
- **Price framing**: "$1.63/day" feels smaller than "$597/year." Use daily or per-unit framing for higher-priced offers.
- **Odd vs. round pricing**: Use odd pricing ($97, $197) for value-oriented buyers. Use round pricing ($100, $500) for premium/luxury positioning.

## Platform-Specific Guidance

### In Groove.cm (GrooveSell)

GrooveSell is the checkout and sales platform within the Groove.cm suite.

**Key advantages:**
- Zero transaction fees — Groove does not take a percentage of sales. You only pay your payment processor's fees (Stripe ~2.9% + $0.30, PayPal ~3.49% + $0.49).
- Built-in affiliate management through GrooveSell's affiliate features.
- Integrated with GrooveMail for post-purchase email automation.
- Integrated with GrooveMember for automatic course/membership access provisioning.

**Setting up a checkout flow in GrooveSell:**
1. Create a product in GrooveSell with your pricing (one-time, subscription, or payment plan).
2. Configure your payment processor: Go to Settings -> Payment Integrations -> connect Stripe and/or PayPal.
3. Build or select a checkout template. GrooveSell provides customizable checkout page templates.
4. Add order bumps: In the product funnel editor, add a bump offer and set its price and description.
5. Add upsells/downsells: Configure the post-purchase funnel sequence — Upsell 1 -> Downsell -> Upsell 2 -> Thank You.
6. Set up webhook events: GrooveSell fires webhooks on `purchase_completed`, `refund_processed`, `subscription_cancelled`, and `payment_failed`. Use these to trigger automations in GrooveMail or external tools.
7. Enable cart abandonment tracking: GrooveSell captures email addresses entered on the checkout page. Use GrooveMail to trigger an abandoned cart sequence when a checkout is started but not completed.

**GrooveSell-specific tips:**
- Use the built-in A/B testing to test different checkout page layouts.
- Set up coupon codes for promotions — supports percentage-off, fixed-amount, and free-trial coupons.
- Configure tax settings per product if selling to regions with VAT/sales tax requirements.
- Use the GrooveSell dashboard to monitor conversion rates, AOV, and revenue per product.

### ThriveCart

- Lifetime deal available (one-time payment, no monthly fees) — popular for this reason.
- Strong A/B testing for checkout pages built in.
- Supports bump offers, upsells, downsells, and auto-applied coupons.
- "Thrivecart Learn" adds basic course delivery if you need lightweight membership.
- Embeddable checkout — can embed directly on your sales page for a seamless experience.
- Supports Stripe, PayPal, Apple Pay, Google Pay, and Authorize.net.

### SamCart

- Conversion-optimized checkout templates designed around best practices.
- "Order bump" and "one-click upsell" features are core to the platform.
- Advanced subscription saver (dunning) to recover failed payments automatically.
- A/B testing built in at the checkout page level.
- Integrates with most email platforms, membership tools, and Zapier.
- Higher monthly cost than some alternatives but strong feature set for digital product sellers.

### Stripe Checkout

- Developer-friendly hosted checkout — minimal setup for simple use cases.
- Stripe Checkout handles PCI compliance, 3D Secure, and localized payment methods automatically.
- Supports subscriptions, one-time payments, free trials, and metered billing.
- Limited built-in upsell/bump functionality — typically requires custom code or a third-party tool layered on top.
- Best for SaaS or tech-savvy sellers who want full control via the API.
- Use Stripe's Payment Links for no-code simple checkouts.

### Paddle

- Merchant of record — Paddle handles VAT, sales tax, and compliance globally. You don't need to register for VAT in the EU.
- Ideal for SaaS companies selling internationally.
- Higher effective fee rate than Stripe alone, but saves significant accounting and tax overhead.
- Checkout overlay or inline embed options.
- Limited customization of the checkout UI compared to dedicated checkout tools.

### Kit Commerce

Kit (formerly ConvertKit) includes a built-in Commerce feature for selling digital products and subscriptions. For full platform help, use `/sales-kit`.

- **Product types**: Digital downloads (PDF, video, audio, zip) and recurring subscriptions (paid newsletters, memberships).
- **Checkout**: Simple product page with Stripe-powered checkout. No separate checkout page builder — the product page IS the checkout.
- **Fees**: 0.6% Kit transaction fee + Stripe processing fees (~2.9% + 30c). No monthly fee for Commerce — included in all Kit plans (even free).
- **Order bumps / upsells**: Not supported. Kit Commerce is intentionally simple — one product per purchase.
- **Payment plans**: Subscription billing only (monthly/annual). No installment plans for one-time products.
- **Post-purchase automation**: Tag buyers automatically, trigger Visual Automations on purchase (e.g., welcome sequence, access delivery).
- **Best for**: Creators selling ebooks, templates, or paid newsletter subscriptions who already use Kit for email. Not suitable for complex checkout flows with upsells, bumps, or multi-product carts.
- **Limitation**: If you need order bumps, upsells, or complex checkout flows, use ThriveCart, SamCart, or GrooveSell and connect to Kit via Zapier for email automation.

### In Payhip

Payhip provides a simple checkout flow for digital downloads, courses, memberships, coaching, and physical products. For full platform help, use `/sales-payhip`.

- **Checkout flow**: Single-page checkout with product summary, Stripe/PayPal payment. Clean and minimal.
- **Embedding**: Product embed widgets, checkout overlay (popup on your site), Buy Now buttons. Customers can purchase without leaving your website.
- **Cross-selling**: Promote related products at checkout with a discount incentive. Not a true order bump (checkbox add-on) — it's a recommendation.
- **Coupons**: Percentage or fixed-amount discounts with start/end dates, usage limits, minimum purchase amounts. Managed via API or dashboard.
- **Payment processing**: Stripe + PayPal. Instant payouts (paid immediately on transaction, unlike Gumroad weekly or Lemon Squeezy twice-monthly).
- **Subscription billing**: Recurring payments for memberships with cancel/pause.
- **Tax handling**: Automatic EU/UK VAT. Does NOT handle US sales tax.
- **What it does NOT have**: No order bumps, no post-purchase upsell pages, no downsell flows, no cart abandonment recovery, no A/B testing for checkout. If you need these, use ThriveCart, SamCart, or GrooveSell.
- **Best for**: Creators who want embedded checkout on their existing site with minimal friction and low fees. Not suitable for complex multi-step checkout optimization.

### Other Platforms (Brief Notes)

- **Gumroad**: Simplest setup. Good for creators selling digital products. 10% flat fee. Limited funnel features.
- **Shopify Checkout**: Best for physical products or hybrid physical/digital. Shop Pay accelerates checkout. Extensive app ecosystem for upsells (ReConvert, CartHook).
- **WooCommerce**: Self-hosted, fully customizable. Requires more technical setup. Use CartFlows or WooFunnels plugin for upsell flows.
- **Lemon Squeezy**: Merchant of record like Paddle. Good for digital products and SaaS. Simpler than Paddle but fewer features.
- **PayKickstart**: Strong dunning management and subscription tools. Supports physical and digital products. Built-in affiliate management.
