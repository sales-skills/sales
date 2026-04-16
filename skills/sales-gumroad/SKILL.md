---
name: sales-gumroad
description: "Gumroad platform help — digital product sales, subscriptions, memberships, license keys, email broadcasts, affiliate management, Discover marketplace, Ping webhooks, and REST API. Use when setting up a Gumroad store, products not selling on Gumroad, Gumroad fees eating into profits, Gumroad vs Payhip or Lemon Squeezy, license key verification not working, Gumroad webhook or API integration, email broadcasts not reaching buyers, or affiliate program setup on Gumroad. Do NOT use for general digital product strategy (use /sales-digital-products) or checkout optimization across platforms (use /sales-checkout)."
argument-hint: "[describe what you need help with in Gumroad]"
license: MIT
version: 1.0.0
tags: [sales, gumroad, digital-products, ecommerce, platform]
github: "https://github.com/antiwork"
---

# Gumroad Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What do you need help with?

1. **What's your situation?**
   - A) Setting up my first Gumroad product
   - B) Already selling — want to optimize or troubleshoot
   - C) Evaluating Gumroad vs other platforms
   - D) API, webhooks, or integration question
   - E) Affiliate program setup or management
   - F) Email broadcasts or audience management

2. **Product type?**
   - A) Digital download (ebook, template, preset, audio)
   - B) Online course or video content
   - C) Software with license keys
   - D) Membership / subscription
   - E) Physical product
   - F) Bundle of multiple products

3. **Revenue level?**
   - A) Pre-launch / no sales yet
   - B) Under $1K/month
   - C) $1K–$5K/month
   - D) Over $5K/month (fee optimization matters)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Digital product pricing, launch strategy, platform comparison | Run: `/sales-digital-products {your question}` |
| Checkout page optimization, order bumps, cart abandonment | Run: `/sales-checkout {your question}` |
| Membership structure, course design, retention | Run: `/sales-membership {your question}` |
| Email sequences after purchase, nurture campaigns | Run: `/sales-email-marketing {your question}` |
| Affiliate commission structure, recruitment strategy | Run: `/sales-affiliate-program {your question}` |
| Webhook/API integration with other tools | Run: `/sales-integration {your question}` |

If the question is Gumroad-specific (setup, features, pricing, API, troubleshooting), continue to Step 3.

## Step 3 — Gumroad platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows, API quick reference.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For **fee optimization**: Calculate effective fee rate at their price point. At low prices ($3–$10), the $0.50 fixed fee makes Gumroad significantly more expensive than alternatives. At $50+, the 10% flat rate is the main concern.
- For **discovery**: Gumroad Discover requires at least one sale to activate. Don't rely on it — drive your own traffic via email list, social, or communities.
- For **API/webhooks**: Point to `references/gumroad-api-reference.md` for endpoint details. The Ping webhook sends POST data as `x-www-form-urlencoded`, not JSON.
- For **license keys**: Since Jan 2023, use `product_id` not `product_permalink` for verification.
- For **tax compliance**: Since Jan 2025, Gumroad is a full Merchant of Record — they handle all VAT/GST/sales tax globally.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **10% + $0.50 hits low-priced products hard** — a $5 product loses 20% to Gumroad fees before payment processing. Model your effective fee rate before committing.
2. **Discover marketplace takes 30%** — sales through Gumroad Discover (their marketplace) cost 30%, not 10%. This is a marketing fee, not a bug.
3. **PayPal removed (Oct 2024)** — Gumroad dropped PayPal support. Buyers can only pay via credit/debit card. This may lose 15–30% of potential buyers who prefer PayPal.
4. **No volume discounts** — the 10% rate is flat regardless of revenue. At $50K+/year, alternatives like Payhip (0% on Pro) or Lemon Squeezy (5%) save thousands.
5. **Payout verification delays** — international creators report payout holds and verification delays. Set up payout details early and verify before relying on revenue.
6. **Webhook payload is form-encoded** — Gumroad Ping sends `x-www-form-urlencoded`, not JSON. Many webhook handlers expect JSON and silently fail.
7. **License key API changed Jan 2023** — products created after Jan 9, 2023 require `product_id` instead of `product_permalink` for license verification.
8. **No refund fee credit** — Gumroad does not refund their 10% fee when you issue a customer refund. You eat the platform fee on refunded sales.

## Related skills

- `/sales-digital-products` — Digital product sales strategy (pricing, platform selection, launch playbooks)
- `/sales-checkout` — Checkout optimization (upsells, order bumps, payment plans, cart abandonment)
- `/sales-membership` — Membership sites and online courses (content delivery, retention, pricing)
- `/sales-email-marketing` — Email marketing (launch sequences, nurture campaigns, broadcasts)
- `/sales-affiliate-program` — Affiliate program design (commissions, recruitment, tracking)
- `/sales-integration` — Connecting tools via webhooks, Zapier, API pipelines
- `/sales-payhip` — Payhip platform help (lower fees, PayPal support, similar features)
- `/sales-lemonsqueezy` — Lemon Squeezy platform help (5% fee, MoR, license keys)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: "My ebooks aren't selling on Gumroad"
**Skill does**: Asks about pricing, traffic source, and product page. Discovers they're relying on Gumroad Discover for traffic (which requires a prior sale to activate). Recommends driving traffic from email list and social media. Suggests a lead magnet (free chapter) to build an email list via Gumroad's email collection. Reviews pricing — if under $10, flags the high effective fee rate and suggests bundling to increase AOV.

### Example 2: "How do I verify license keys with the Gumroad API?"
**Skill does**: Loads the API reference. Walks through `POST /licenses/verify` with `product_id` and `license_key` parameters. Notes the Jan 2023 change from `product_permalink` to `product_id`. Shows how to check `uses` count against a limit and handle `test` purchases. Points to webhook signature verification via `x-gumroad-signature`.

### Example 3: "Should I stay on Gumroad or switch to Lemon Squeezy?"
**Skill does**: Asks about current monthly revenue and product types. Calculates fee comparison: at $3K/month, Gumroad costs ~$360/month (10% + $0.50 × ~60 sales) vs Lemon Squeezy at ~$165 (5% + $0.50). Notes LS handles tax as MoR (Gumroad now does too since Jan 2025). Flags PayPal availability (LS has it, Gumroad doesn't). Routes to `/sales-digital-products` for deeper platform comparison.

## Troubleshooting

### "Payment failed" errors for buyers
**Symptom**: Customers report "there was a temporary problem" at checkout
**Cause**: Momentary gateway failure, 3D Secure friction, or card declined
**Solution**: Wait 10–15 minutes and retry. Check email and bank — the charge may have gone through. If persistent, try a different card. Gumroad has no PayPal fallback since Oct 2024.

### License key not verifying via API
**Symptom**: `POST /licenses/verify` returns 404 or error
**Cause**: Using `product_permalink` instead of `product_id` for products created after Jan 9, 2023
**Solution**: Switch to `product_id` parameter. Check `increment_uses_count` is set correctly. Test with a known-good key first.

### Webhook (Ping) not firing
**Symptom**: No POST requests hitting your endpoint after a sale
**Cause**: Ping endpoint URL not configured, endpoint returning non-2xx, or HTTPS certificate issue
**Solution**: Go to Settings → Advanced → Ping. Paste your endpoint URL. Click "Send test ping" to verify. Ensure your endpoint returns 200 and accepts `application/x-www-form-urlencoded` data. Gumroad retries up to 3 times over 15–20 minutes.
