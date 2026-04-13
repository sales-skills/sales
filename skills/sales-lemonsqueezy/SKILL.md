---
name: sales-lemonsqueezy
description: "Lemon Squeezy platform help — payments, subscriptions, tax compliance, digital product delivery, license keys, and checkout as a merchant of record. Use when setting up a Lemon Squeezy store, configuring subscriptions or usage-based billing, generating or validating license keys, webhooks aren't firing or Cloudflare is blocking them, payouts are delayed or frozen, or choosing between Lemon Squeezy vs Gumroad vs Paddle. Do NOT use for general email marketing strategy (use /sales-email-marketing) or checkout optimization strategy (use /sales-checkout)."
argument-hint: "[describe what you need help with in Lemon Squeezy]"
license: MIT
version: 1.0.0
tags: [sales, payments, subscriptions, digital-products, platform]
github: "https://github.com/lmsqueezy"
---
# Lemon Squeezy Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Store setup and product configuration
   - B) Subscriptions and recurring billing
   - C) License key generation or validation
   - D) Checkout setup (hosted, overlay, or embedded)
   - E) Webhooks or API integration
   - F) Payouts, tax, or compliance questions
   - G) Email marketing within Lemon Squeezy
   - H) Affiliate program setup
   - I) Migration from another platform (Gumroad, Paddle, Stripe)
   - J) Troubleshooting an issue

2. **What are you selling?**
   - Digital product (ebook, template, software, asset)
   - SaaS / subscription software
   - Course or membership
   - Something else

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

If the question maps to a strategy domain, route to the right skill:

| Problem domain | Route to |
|---|---|
| Digital product pricing, launch strategy, platform comparison | `/sales-digital-products {question}` |
| Checkout page optimization, upsells, order bumps, cart abandonment | `/sales-checkout {question}` |
| Membership site structure, course design, retention | `/sales-membership {question}` |
| Email marketing strategy, sequences, segmentation | `/sales-email-marketing {question}` |
| Affiliate program design, commission structures, recruitment | `/sales-affiliate-program {question}` |
| Email deliverability, SPF/DKIM/DMARC | `/sales-deliverability {question}` |

When routing, provide the exact command: "This is a {domain} question — run: `/sales-{skill} {user's original question}`"

If it's a Lemon Squeezy platform question, continue to Step 3.

## Step 3 — Lemon Squeezy platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows, API quick-reference.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

Provide concrete next steps. If the question involves the API, reference `references/lemonsqueezy-api-reference.md` for endpoint details.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Account approval can take days to weeks** — Lemon Squeezy requires manual account verification before you can accept live payments. Submit complete business details and identity docs upfront to speed this up. Don't plan a launch date before your account is approved.

2. **Payouts can be delayed or frozen** — multiple reports of payouts failing for extended periods with slow support response. Keep a financial buffer and don't rely on immediate access to funds, especially in the first few months.

3. **Support is slow and AI-first** — the chat support is an AI bot; human support is email-only with multi-day response times. For urgent issues, email hello@lemonsqueezy.com directly rather than using the chat widget.

4. **Cloudflare can silently block webhooks** — if your site uses Cloudflare, webhooks may get blocked even with IP allowlisting. Check your Cloudflare WAF rules and create an explicit allow rule for Lemon Squeezy's webhook IPs and your webhook path.

5. **Stripe acquisition = uncertain roadmap** — Stripe acquired Lemon Squeezy in 2024 and is building its own MoR solution (Stripe Managed Payments). Feature velocity has slowed. Evaluate whether LS's current feature set meets your needs without depending on future updates.

6. **The 5% + 50¢ can climb higher** — base transaction fee is 5% + 50¢, but affiliate orders add 2%, and various edge cases can push total fees to 10-18%. Model your actual all-in fees before committing.

7. **Email marketing is basic** — built-in email is newsletters and broadcasts only. No automation workflows, no advanced segmentation, no A/B testing. For serious email marketing, connect to a dedicated ESP (Kit, Mailchimp, ActiveCampaign) via webhooks or Zapier.

## Related skills

- `/sales-digital-products` — Digital product sales strategy (pricing, launch, platform selection)
- `/sales-checkout` — Checkout optimization (upsells, order bumps, cart abandonment)
- `/sales-membership` — Membership sites and online courses
- `/sales-email-marketing` — Email marketing strategy (sequences, automation, segmentation)
- `/sales-affiliate-program` — Affiliate program design (commissions, recruitment, tracking)
- `/sales-deliverability` — Email deliverability (SPF, DKIM, DMARC, warmup)
- `/sales-payhip` — Payhip platform help (similar creator commerce platform)
- `/sales-kit` — Kit platform help (creator-first email + commerce)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up a SaaS subscription
**User says**: "I want to sell my SaaS at $29/month and $290/year with a 14-day free trial"
**Skill does**: Walks through creating a product with two variants (monthly and annual), configuring trial periods, setting up the checkout overlay, and implementing webhook listeners for subscription lifecycle events (created, updated, cancelled, expired). Covers license key setup for gating software access.
**Result**: User has a working subscription product with trial, annual discount, and webhook integration

### Example 2: Migrating from Gumroad
**User says**: "I'm moving my digital products from Gumroad to Lemon Squeezy — what do I need to know?"
**Skill does**: Compares fee structures (Gumroad 10% vs LS 5% + 50¢), explains the MoR tax handling advantage, walks through product recreation, customer migration considerations, and URL redirect strategy. Flags the account approval delay.
**Result**: User has a migration checklist with fee savings estimate and timeline

### Example 3: Webhook integration with Next.js
**User says**: "My Lemon Squeezy webhooks aren't firing in production"
**Skill does**: Checks common causes — Cloudflare WAF blocking, incorrect webhook URL (localhost vs production), missing signature verification, SSL/TLS issues (error 525). Walks through testing with LS's test mode webhook simulation. Provides the webhook signature verification code pattern.
**Result**: User identifies the root cause and gets webhooks working

## Troubleshooting

### Webhooks not firing in production
**Symptom**: Webhooks work in test mode but not in production, or return 4xx/5xx errors
**Cause**: Cloudflare WAF blocking POST requests, incorrect webhook URL, SSL certificate issues (error 525), or missing 200 response from your endpoint
**Solution**: Create a Cloudflare WAF allow rule for the webhook path. Verify your webhook URL points to production (not localhost). Ensure your endpoint returns 200 within the timeout. Check Lemon Squeezy dashboard → Settings → Webhooks for delivery status and retry history. LS retries 3 times with exponential backoff.

### Payouts not arriving
**Symptom**: Sales are coming in but payouts are delayed or failing
**Cause**: Account verification incomplete, payout method not configured, or payout threshold not met
**Solution**: Check Settings → Payouts for status. Ensure identity verification and tax forms are complete. Verify your bank/PayPal payout method is correctly configured. Contact hello@lemonsqueezy.com directly for extended delays — the AI chat support cannot resolve payout issues.

### License key activation failing
**Symptom**: Customers report "invalid license key" errors
**Cause**: Key status is inactive/disabled/expired, activation limit reached, or using wrong API endpoint
**Solution**: The License API uses a different base and rate limit (60 req/min vs 300 for main API). Check the key's status in the dashboard — expired keys need subscription renewal. Verify you're POSTing to the correct activation endpoint with `Content-Type: application/x-www-form-urlencoded` (not JSON:API format).
