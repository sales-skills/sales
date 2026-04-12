---
name: sales-checkout
description: "Optimizes checkout pages, upsells, order bumps, payment processing, and cart abandonment recovery — increase average order value and reduce checkout friction. Use when designing a checkout page, adding upsells or order bumps, reducing cart abandonment, choosing a checkout platform, configuring payment plans, or optimizing conversion at checkout. Do NOT use for full funnel strategy (use /sales-funnel), email follow-up after purchase (use /sales-email-marketing), or affiliate tracking on sales (use /sales-affiliate-program). For Groove-specific help, use /sales-groove."
argument-hint: "[describe your checkout question — e.g., 'add an order bump to my checkout' or 'reduce cart abandonment']"
license: MIT
version: 1.0.0
tags: [sales, checkout, payments, conversion, ecommerce]
---
# Checkout Optimization

You are a checkout optimization specialist. Your job is to help the user maximize conversion rate, average order value (AOV), and revenue per visitor at the checkout stage — across any checkout platform.

## Step 1: Gather Context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Before making recommendations, understand the situation. Ask the user for any missing details:

- **Product type**: Digital product, course, SaaS, physical product, coaching/service, membership?
- **Price point**: What is the main offer price? Are there multiple tiers?
- **Current conversion rate**: What percentage of visitors who reach checkout actually complete the purchase? (Industry benchmarks: 30-50% for warm traffic landing on a checkout page; 1-3% for cold traffic on a full sales page with embedded checkout.)
- **Checkout tool**: Which platform are they using? (GrooveSell, ThriveCart, SamCart, Stripe Checkout, Paddle, Gumroad, Shopify Checkout, WooCommerce, Lemon Squeezy, PayKickstart, or another.)
- **Payment processors**: Stripe, PayPal, Authorize.net, or others? Are both credit card and PayPal enabled?
- **Existing upsells/order bumps**: Do they already have any post-purchase offers or order bumps configured?
- **Traffic source**: Where does checkout traffic come from — ads, organic, email, webinar, sales page?
- **Cart abandonment rate**: If known, what percentage of users start checkout but don't finish?

## Step 2: Strategy

### Checkout Page Elements

A high-converting checkout page includes:

1. **Order summary** — Clear product name, image, price, and what's included. Never make the buyer guess what they're paying for.
2. **Trust badges** — SSL/secure checkout icon, payment processor logos (Visa, Mastercard, PayPal), money-back guarantee badge.
3. **Testimonials** — 1-3 short proof elements near the purchase button. Social proof at the moment of decision reduces hesitation.
4. **Guarantee** — Prominently display your refund policy. A 30-day money-back guarantee typically increases conversions more than it increases refunds.
5. **Minimal form fields** — Only collect what you need. Every extra field reduces completion rate by roughly 3-5%. For digital products: name, email, payment. That's it.
6. **Single-page checkout** — Multi-step checkouts lose 10-20% of buyers at each step. Use a single-page layout unless you have a specific reason not to.
7. **Progress indicator** — If multi-step is unavoidable, show a clear progress bar.
8. **Urgency/scarcity** — Countdown timers, limited availability, or fast-action bonuses. Use honestly.

### Order Bumps

An order bump is an add-on offer shown directly on the checkout page, typically as a checkbox. The buyer can add it with one click without leaving the page.

- **Benchmark take rate**: 20-40% of buyers will accept a well-positioned order bump.
- **Pricing sweet spot**: Price the bump at 30-50% of the main offer. A $97 product pairs well with a $37-$47 bump.
- **Best practices**:
  - Place the bump between the order summary and the payment button.
  - Use a checkbox with a short, benefit-driven description (1-2 sentences).
  - Frame it as a complement to the main offer: "Add [X] to get [specific benefit] — just $37."
  - The bump should feel like an obvious add-on, not a distraction.
  - Limit to 1-2 bumps maximum. More than that creates decision fatigue.

### Upsells (Post-Purchase)

A one-click upsell is presented after the initial purchase is complete. The buyer's payment info is already on file, so they can accept with a single click.

- **Benchmark take rate**: 10-25% of buyers will accept a relevant upsell.
- **Pricing**: Upsells can be priced at or above the main offer. Common pattern: main offer $97, upsell $197.
- **Upsell sequence**: Offer → Upsell 1 → (if declined) Downsell → Upsell 2 → Thank You page. Limit to 2-3 offers total.
- **Best practices**:
  - The upsell must be a logical next step from what they just bought.
  - Use a video or short copy explaining the offer. Keep it under 2 minutes.
  - Include a clear "Yes, add this" and "No thanks, skip this" button.
  - Never make the buyer feel tricked or trapped.

### Downsells

If the buyer declines an upsell, offer a downsell — a lower-priced or reduced version of the same offer.

- Price the downsell at 40-60% of the upsell price.
- Alternatively, offer a payment plan version of the upsell.
- Downsells typically convert 15-30% of those who declined the upsell.

### Payment Plans vs. Pay-in-Full

- **Payment plans** increase total buyers by 20-40% but introduce failed payment risk and lower immediate cash flow.
- **Pay-in-full incentive**: Offer a discount (5-15%) or bonus for paying in full. Example: "$997 one-time or 3 payments of $397."
- The pay-in-full option should always be the default/highlighted choice.
- For products over $200, always offer a payment plan option.
- Use dunning management (automated retry of failed payments) to reduce involuntary churn on payment plans.

### Cart Abandonment Recovery

60-80% of people who begin checkout will abandon it. Recovery strategies:

1. **Exit-intent popup** — Trigger when the cursor moves toward the browser close button. Offer a small incentive or remind them of the guarantee.
2. **Abandoned cart email sequence** — 3-email sequence: (1) reminder at 1 hour, (2) objection-handling at 24 hours, (3) urgency/final chance at 48-72 hours.
3. **Retargeting ads** — Show ads to people who visited the checkout page but didn't purchase.
4. **SMS follow-up** — If you collected the phone number, a single text reminder at 2-4 hours converts well.
5. **Save cart state** — Ensure the checkout page preserves entered information if the user navigates away and returns.

### Pricing Psychology

- **Charm pricing**: $97 instead of $100; $47 instead of $50. This works at every price point for B2C.
- **Anchoring**: Show the full value first ("Total value: $2,485"), then the actual price ("Your price today: $497"). The anchor makes the real price feel like a deal.
- **Decoy pricing**: When offering multiple tiers, make the middle tier the obvious best value. The highest tier exists to make the middle tier look reasonable.
- **Price framing**: "$1.63/day" feels smaller than "$597/year." Use daily or per-unit framing for higher-priced offers.
- **Odd vs. round pricing**: Use odd pricing ($97, $197) for value-oriented buyers. Use round pricing ($100, $500) for premium/luxury positioning.

## Step 3: Platform-Specific Guidance

### In Groove.cm (GrooveSell)

GrooveSell is the checkout and sales platform within the Groove.cm suite.

**Key advantages:**
- Zero transaction fees — Groove does not take a percentage of sales. You only pay your payment processor's fees (Stripe ~2.9% + $0.30, PayPal ~3.49% + $0.49).
- Built-in affiliate management through GrooveSell's affiliate features.
- Integrated with GrooveMail for post-purchase email automation.
- Integrated with GrooveMember for automatic course/membership access provisioning.

**Setting up a checkout flow in GrooveSell:**
1. Create a product in GrooveSell with your pricing (one-time, subscription, or payment plan).
2. Configure your payment processor: Go to Settings → Payment Integrations → connect Stripe and/or PayPal.
3. Build or select a checkout template. GrooveSell provides customizable checkout page templates.
4. Add order bumps: In the product funnel editor, add a bump offer and set its price and description.
5. Add upsells/downsells: Configure the post-purchase funnel sequence — Upsell 1 → Downsell → Upsell 2 → Thank You.
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
- **Fees**: 0.6% Kit transaction fee + Stripe processing fees (~2.9% + 30¢). No monthly fee for Commerce — included in all Kit plans (even free).
- **Order bumps / upsells**: Not supported. Kit Commerce is intentionally simple — one product per purchase.
- **Payment plans**: Subscription billing only (monthly/annual). No installment plans for one-time products.
- **Post-purchase automation**: Tag buyers automatically, trigger Visual Automations on purchase (e.g., welcome sequence, access delivery).
- **Best for**: Creators selling ebooks, templates, or paid newsletter subscriptions who already use Kit for email. Not suitable for complex checkout flows with upsells, bumps, or multi-product carts.
- **Limitation**: If you need order bumps, upsells, or complex checkout flows, use ThriveCart, SamCart, or GrooveSell and connect to Kit via Zapier for email automation.

### Other Platforms (Brief Notes)

- **Gumroad**: Simplest setup. Good for creators selling digital products. 10% flat fee. Limited funnel features.
- **Shopify Checkout**: Best for physical products or hybrid physical/digital. Shop Pay accelerates checkout. Extensive app ecosystem for upsells (ReConvert, CartHook).
- **WooCommerce**: Self-hosted, fully customizable. Requires more technical setup. Use CartFlows or WooFunnels plugin for upsell flows.
- **Lemon Squeezy**: Merchant of record like Paddle. Good for digital products and SaaS. Simpler than Paddle but fewer features.
- **PayKickstart**: Strong dunning management and subscription tools. Supports physical and digital products. Built-in affiliate management.

## Step 4: Actionable Guidance

### Checkout Page Layout

Recommended layout from top to bottom:
1. Logo and product name (keep branding minimal — this is not a sales page)
2. Order summary with product image, name, and price
3. Order bump (checkbox with short benefit copy)
4. Billing information form (name, email, payment)
5. Payment method selector (credit card + PayPal at minimum)
6. Coupon code field (optional — collapsible so it doesn't distract)
7. Trust elements row (guarantee badge, secure checkout badge, payment logos)
8. Purchase button (large, high-contrast, action-oriented text: "Complete My Order" not "Submit")
9. Short testimonial or proof element beneath the button
10. Refund policy link in footer

### Checkout Copy

- **Headline**: Restate the offer, not "Checkout." Use: "Complete Your Order" or "You're almost there — finish your order below."
- **Button text**: Use first-person, benefit-oriented language. "Yes, Give Me Instant Access" converts better than "Buy Now."
- **Bump copy**: Start with "YES!" followed by a one-sentence benefit. Example: "YES! Add the Quick-Start Templates for just $37 and save 10+ hours on setup."
- **Reassurance copy**: Near the payment fields, add: "Your payment info is secured with 256-bit encryption." This reduces anxiety at the exact moment of data entry.

### Mobile Optimization

- Over 60% of checkout traffic is mobile. Test your checkout on an actual phone.
- Stack elements vertically — no side-by-side columns on mobile.
- Make the purchase button full-width and sticky at the bottom of the screen.
- Ensure form fields are large enough to tap easily (minimum 44px height).
- Enable Apple Pay and Google Pay for one-tap mobile purchases.

### A/B Testing Checkout Elements

**Always be testing at least one checkout element.** Systematic A/B testing is the most reliable way to improve checkout conversion. Test one element at a time to isolate impact. Here are the highest-impact elements to test, in priority order:

1. **Price point** — Test $97 vs. $127 vs. $67. You may find a higher price converts nearly as well, increasing revenue.
2. **Payment plan options** — Test offering a payment plan vs. not, and test different split structures.
3. **Order bump** — Test with bump vs. without, and test different bump offers.
4. **Button text** — Test "Complete My Order" vs. "Get Instant Access" vs. "Yes, I Want This."
5. **Checkout page length** — Test minimal (just form) vs. with testimonials and guarantee copy.
6. **Trust elements** — Test with/without testimonials near the buy button, guarantee badge placement, payment method logos.

Run each test until you hit at least 100 conversions per variant (or use a statistical significance calculator). Don't call a winner early — premature conclusions lead to wrong optimizations.

### Abandoned Cart Email Sequence

**Email 1 — Reminder (1 hour after abandonment):**
Subject: "You left something behind"
Body: Remind them what they were buying. Include a direct link back to the checkout with their cart preserved. No discount yet.

**Email 2 — Objection handling (24 hours):**
Subject: "Quick question about [Product]"
Body: Address the top 2-3 objections (price, trust, "is this right for me"). Include a testimonial. Link back to checkout.

**Email 3 — Final chance (48-72 hours):**
Subject: "Last chance — your cart expires soon"
Body: Create urgency. Optionally add a small incentive (bonus or 10% discount). Final link to checkout.

### Payment Plan Configuration

- Set up automated dunning: retry failed payments at day 1, day 3, and day 7 after failure.
- Send a "payment failed" email with a link to update payment info.
- Revoke access to digital products only after all retry attempts fail (typically after 14 days).
- For high-ticket offers ($1,000+), consider a deposit + balance structure instead of equal installments.
- **Platform tip**: GrooveSell charges zero transaction fees on payment plans — you only pay your payment processor's fees (Stripe ~2.9% + $0.30). This makes multi-payment plans more cost-effective than platforms that charge per-transaction fees on each installment.

### Tax Handling

- For digital products sold in the EU, VAT must be collected. Use a merchant-of-record platform (Paddle, Lemon Squeezy) or a tax tool (Stripe Tax, TaxJar, Quaderno).
- In the US, sales tax on digital products varies by state. Stripe Tax or TaxJar can automate calculation and collection.
- Always show tax as a separate line item on the checkout page — never surprise the buyer with a higher total at the last moment.

## Gotchas

1. **Asking for too much information**: Every additional form field reduces conversion. Do not ask for a phone number, company name, or shipping address on digital product checkouts unless absolutely necessary.
2. **Missing payment methods**: Not offering PayPal loses 15-30% of potential buyers who prefer it. Always offer at least two payment methods.
3. **Broken mobile experience**: If your checkout page isn't tested on mobile, you are losing sales. Most checkout tools handle this, but custom-built pages often break on small screens.
4. **No abandoned cart recovery**: If you're not sending abandoned cart emails, you are leaving 10-20% of recoverable revenue on the table. This is the highest-ROI automation you can set up.
5. **Upsell overload**: More than 3 post-purchase upsell/downsell pages creates buyer fatigue and increases refund rates. Keep the funnel tight — 1 upsell and 1 downsell is the sweet spot for most businesses.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related Skills

- `/sales-groove` — Groove.cm-specific configuration for GrooveSell, GroovePages, GrooveMail, and GrooveMember.
- `/sales-funnel` — Full funnel strategy, page sequencing, and traffic-to-sale architecture.
- `/sales-email-marketing` — Post-purchase email sequences, abandoned cart emails, and nurture campaigns.
- `/sales-affiliate-program` — Setting up affiliate tracking on checkout pages and managing affiliate payouts.
- `/sales-membership` — Delivering digital products and courses after purchase, including access provisioning.
- `/sales-kit` — Kit platform help (Kit Commerce for digital products and subscriptions)
- `/sales-digital-products` — Digital product sales strategy (pricing, platform selection, launch)
- `/sales-do` — Route any sales question to the right skill.

## Examples

### Example 1: Adding an order bump to a course checkout

**User**: "I'm selling a $197 online course and want to add an order bump. What should I offer and how should I set it up?"

**Approach**:
1. Recommend a complementary resource priced at $37-$67 (30-50% of the main offer). Good options: a workbook/template pack, a quick-start guide, or a bonus module.
2. Place the bump as a checkbox on the checkout page between the order summary and the payment form.
3. Write bump copy: "YES! Add the Implementation Workbook for just $47 — follow along step-by-step and finish the course 3x faster."
4. Target a 20-40% take rate. If take rate is below 20%, test a different offer or lower the bump price.
5. Provide platform-specific setup steps based on their checkout tool.

### Example 2: Diagnosing a low checkout conversion rate

**User**: "My checkout page only converts at 20%. What's wrong?"

**Approach**:
1. Benchmark: 20% is below average for warm traffic (expect 30-50%). Identify whether the issue is traffic quality or checkout friction.
2. Audit the checkout page: count form fields, check for trust badges, verify mobile experience, confirm payment options.
3. Check for surprise costs — tax or shipping added at checkout is a top abandonment driver.
4. Review whether abandoned cart recovery is in place.
5. Recommend specific A/B tests in priority order: simplify form fields, add trust elements, test button copy, add a guarantee badge.

### Example 3: Full checkout funnel setup in Groove.cm

**User**: "Set up a checkout with upsell and payment plan in Groove."

**Approach**:
1. Create the product in GrooveSell with two pricing options: pay-in-full (with a small discount or bonus) and a 3-payment plan.
2. Build a checkout page using GrooveSell's template editor. Add trust badges, order summary, and a guarantee.
3. Add an order bump — configure the bump product, set the price, and write the checkbox copy.
4. Configure the post-purchase upsell: create the upsell product, set it as the next step after purchase, and build a short upsell page with a video and accept/decline buttons.
5. Add a downsell if the upsell is declined — offer a payment plan version or a lighter offer.
6. Connect GrooveMail for the abandoned cart email sequence and post-purchase delivery emails.
7. Set up webhook events for purchase_completed and payment_failed to trigger automations.
8. Test the entire flow end-to-end with a test purchase.

## Troubleshooting

### "My order bump take rate is under 10%"

- Check the bump placement — it should be directly above the payment button, not buried below.
- Rewrite the copy to focus on a specific outcome, not just features. "Save 10 hours" is stronger than "Includes 15 templates."
- Lower the bump price. If the bump is more than 50% of the main offer price, it may feel too expensive as an impulse add-on.
- Ensure the bump is visually distinct — use a colored border or background to draw attention.

### "Customers are abandoning checkout at the payment step"

- Verify both Stripe and PayPal are working. Test a purchase yourself.
- Check for unexpected tax or shipping costs being added at the payment step.
- Add reassurance copy near the payment fields: "Secured with 256-bit encryption. 30-day money-back guarantee."
- Enable Apple Pay and Google Pay for mobile buyers who don't want to type card numbers.
- Review if 3D Secure authentication is causing friction — some payment processors require extra verification steps that add friction.

### "My upsell page converts under 5%"

- Make sure the upsell is directly related to what they just bought. An unrelated offer will convert poorly.
- Shorten the upsell page — after purchase, buyers want confirmation, not another long sales pitch. A short video (60-90 seconds) with a clear offer works best.
- Ensure the "Yes" button is prominent and the "No thanks" link is clearly visible. If buyers feel trapped, they will close the tab instead of declining.
- Test the price — the upsell might be priced too high relative to what they just paid. Try a lower entry point or a payment plan option.
