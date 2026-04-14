# Platform-Specific Checkout Guide

Detailed per-platform checkout setup — payment integration, order flow, upsells, and best practices.

## Table of contents

- [In Jotform](#in-jotform)

## In Jotform

Jotform payment forms are simpler than dedicated checkout tools (ThriveCart, SamCart) — they're best for collecting straightforward payments, donations, and order forms rather than complex upsell/downsell flows. For full platform help, use `/sales-jotform`.

- **Payment gateways**: 30+ options including Stripe, PayPal, Square, Authorize.net, Venmo, Braintree, Mollie. Connect via Form Builder → Payment tab.
- **One gateway per form**: This is the biggest limitation — you cannot offer both Stripe and PayPal on the same form. Workaround: create two forms or use Jotform's payment method selector widget (if available for your gateways).
- **Product lists**: Add a Product List element with items, images, prices, and quantity selectors. Supports fixed pricing, user-defined amounts (donations), and calculation fields.
- **Subscriptions**: Stripe and PayPal support recurring payments. Configure billing cycle in the payment element settings.
- **Coupon codes**: Add a Coupon field element — configure discount codes, percentage or fixed amount, expiration dates.
- **Order confirmation**: Configure thank-you page redirect and autoresponder email in form settings. Use PDF Editor to auto-generate receipts.
- **Payment form limits**: Free plan allows 10 payment forms, Bronze 100, Silver 250, Gold 1,000. Exceeding the limit blocks new payment form creation.
- **No upsells/downsells**: Jotform has no post-purchase upsell flow. For upsell sequences, use ThriveCart, SamCart, or GrooveSell and embed or redirect from Jotform.
- **No order bumps**: No native order bump checkbox. Workaround: add optional products to the Product List element with clear "Add this too" copy.
- **Mobile**: Jotform payment forms are responsive. For on-site collection, use Jotform Apps in kiosk mode.
- **Testing**: Use Stripe test mode or PayPal sandbox to test payment flow before going live. Submit a test transaction and verify in both Jotform and your gateway dashboard.
- **Best for**: Event registration fees, donation collection, simple product orders, service booking deposits, and any payment collection where a full checkout funnel isn't needed.
