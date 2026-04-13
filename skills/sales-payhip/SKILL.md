---
name: sales-payhip
description: "Payhip platform help — digital downloads, courses, memberships, coaching, store builder, marketing tools, API. Use when setting up a Payhip store or product, choosing between Payhip Free vs Plus vs Pro plan, configuring Payhip coupons or affiliate program, connecting Payhip to an email service provider, embedding Payhip on an existing website, troubleshooting Payhip checkout or payment issues, or managing Payhip webhooks and license keys. Do NOT use for general digital product strategy without a Payhip context (use /sales-digital-products)."
argument-hint: "[describe what you need help with in Payhip]"
license: MIT
version: 1.0.0
tags: [sales, creator-commerce, digital-products, platform]
---

# Payhip Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up a new Payhip store or add my first product
   - B) Configure pricing, coupons, or discounts
   - C) Set up courses, memberships, or coaching
   - D) Connect Payhip to my email provider or other tools
   - E) Embed Payhip on my existing website
   - F) Set up or manage my affiliate program
   - G) Troubleshoot a payment, checkout, or delivery issue
   - H) Use the Payhip API or webhooks
   - I) Something else

2. **Which plan are you on?**
   - A) Free (5% transaction fee)
   - B) Plus — $29/mo (2% fee)
   - C) Pro — $99/mo (0% fee)
   - D) Not sure / haven't signed up yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Digital product pricing strategy, launch playbooks | `/sales-digital-products [question]` |
| Email marketing strategy (not Payhip-specific ESP connection) | `/sales-email-marketing [question]` |
| Membership pricing, content structure, retention | `/sales-membership [question]` |
| Checkout conversion optimization theory | `/sales-checkout [question]` |
| Affiliate program design (commission models, recruitment) | `/sales-affiliate-program [question]` |
| Sales funnel strategy | `/sales-funnel [question]` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Payhip platform reference

**Read `references/platform-guide.md`** for the full platform reference — product types, store builder, marketing tools, integrations, pricing, data model, workflows.

**Read `references/payhip-api-reference.md`** if the user's question involves the API, webhooks, coupons API, or license key management.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For product setup: recommend the right product type, pricing, and delivery method based on their content
- For plan selection: model fees at their expected revenue to find the break-even between Free/Plus/Pro
- For integrations: identify the best connection method (native, Zapier, webhook, embed)
- For troubleshooting: check Gotchas first, then platform guide for specifics

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **EU/UK VAT only** — Payhip handles EU and UK VAT automatically but does NOT manage US state sales tax or other global tax obligations. If you sell to US customers, you're responsible for sales tax compliance. Consider a merchant of record (Lemon Squeezy, Paddle) if global tax is a concern.

2. **Subscriber sync delay** — Payhip pushes new subscribers to your connected ESP every 10 minutes, not instantly. Don't expect real-time subscriber updates.

3. **Limited customization** — The store builder has a small number of themes and layout blocks. No custom CSS, limited SEO tools. If design flexibility is important, embed Payhip's checkout on your own site instead.

4. **No order bumps or upsell flows** — Payhip has cross-selling and referral discounts but no true checkout order bumps or post-purchase upsell pages like ThriveCart or Groove.

5. **Webhook retry window** — Failed webhook deliveries retry hourly for only 3 hours, then stop. Monitor your endpoint reliability.

6. **Account suspension risk** — Reports of stores being removed without warning for suspected PLR/MRR content violations. Keep proof of original content creation.

## Related skills

- `/sales-digital-products` — Digital product pricing, launch strategy, and platform comparison
- `/sales-membership` — Membership and course structure, pricing, and retention
- `/sales-checkout` — Checkout page optimization (upsells, order bumps, payment plans)
- `/sales-affiliate-program` — Affiliate program design (commissions, recruitment, tracking)
- `/sales-email-marketing` — Email marketing strategy (nurture sequences, automation, segmentation)
- `/sales-podia` — Podia platform help (courses, downloads, memberships, coaching, email)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: First store setup
**User says**: "I want to sell a $29 ebook and a $197 course on Payhip"
**Skill does**: Walks through product creation for both types, recommends Free plan until revenue exceeds ~$580/mo (break-even for Plus), sets up cross-sell between ebook and course, connects ESP for post-purchase email sequence
**Result**: User has both products live with cross-selling and email automation configured

### Example 2: Plan selection
**User says**: "I'm doing $3K/mo in sales on Payhip Free, should I upgrade?"
**Skill does**: Calculates current fees ($150/mo at 5%), compares to Plus ($29 + $60 = $89/mo at 2%) and Pro ($99 + $0 = $99/mo at 0%). Recommends Plus immediately, Pro when revenue hits ~$5K/mo.
**Result**: User upgrades to the right plan and saves $61/mo immediately

### Example 3: Embedding on existing site
**User says**: "I have a WordPress site and want to sell digital products through Payhip without sending people to payhip.com"
**Skill does**: Explains embed options (product embed, checkout overlay, Buy Now buttons), walks through custom domain setup, recommends using Payhip embed codes in WordPress pages for seamless checkout
**Result**: User sells through their own domain with Payhip handling payments behind the scenes

## Troubleshooting

### Checkout not converting
**Symptom**: Traffic to Payhip product page but very few purchases
**Cause**: Default Payhip product pages are minimal — limited social proof, no urgency elements, basic design
**Solution**: Embed Payhip checkout on your own sales page (better design control). Add testimonials above the embed. Use coupons with expiration dates for urgency. Consider a custom domain for brand trust.

### ESP not receiving subscribers
**Symptom**: Customers purchase but don't appear in your email list
**Cause**: ESP integration sync runs every 10 minutes, or GDPR consent checkbox not checked by buyer
**Solution**: Wait 10+ minutes before checking. Verify the integration is connected in Settings > Integrations. If EU customers, ensure the GDPR consent checkbox is visible and positioned clearly. For faster sync, use webhooks + Zapier instead of native ESP integration.

### Affiliate payouts not processing
**Symptom**: Affiliates recruited but no commissions being tracked or paid
**Cause**: Affiliate program may not be enabled per-product, or PayPal not connected for payouts
**Solution**: Check that affiliate program is toggled ON for each product (it's per-product, not store-wide by default). Verify PayPal is connected for affiliate payouts. Set commission rate per product in product settings.
