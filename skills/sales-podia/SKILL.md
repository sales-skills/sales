---
name: sales-podia
description: "Podia platform help — courses, digital downloads, memberships, coaching, webinars, email marketing, communities, affiliate programs, website builder. Use when your Podia checkout isn't converting, course completion rates are low, members keep canceling, email automations aren't triggering, you need to pick between Mover and Shaker plans, the 5% transaction fee is eating your margins, products aren't organized well on your storefront, Zapier integration isn't syncing, or you need help setting up upsells or affiliate tracking. Do NOT use for general email marketing strategy (use /sales-email-marketing) or membership strategy across platforms (use /sales-membership)."
argument-hint: "[describe what you need help with in Podia]"
license: MIT
version: 1.0.0
tags: [sales, creator-commerce, courses, digital-products, platform]
---
# Podia Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Podia do you need help with?**
   - A) Online courses — structure, drip content, completion
   - B) Digital downloads — ebooks, templates, delivery
   - C) Memberships — recurring access, tiers, retention
   - D) Coaching — sessions, scheduling, packaging
   - E) Email marketing — broadcasts, automations, segments
   - F) Website & landing pages — design, SEO, custom domain
   - G) Checkout & payments — upsells, coupons, payment plans
   - H) Affiliate program — commissions, tracking, payouts
   - I) Community — engagement, moderation, Discord integration
   - J) Webinars — setup, registration, replay
   - K) Integrations — Zapier, email platforms, analytics
   - L) Plan selection — Mover vs Shaker, pricing, migration
   - M) Something else — describe it

2. **What's your current Podia plan?**
   - A) Mover ($39/mo, 5% fee)
   - B) Shaker ($89/mo, 0% fee)
   - C) Free trial
   - D) Not on Podia yet — evaluating

3. **What are you trying to accomplish?** (describe your specific goal or question)

**Skip-ahead rule**: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route with the exact command:

| Problem domain | Route to |
|---|---|
| Course structure, curriculum design, retention | `/sales-membership {user's question}` |
| Digital product pricing, validation, launch | `/sales-digital-products {user's question}` |
| Email sequences, nurture campaigns | `/sales-email-marketing {user's question}` |
| Checkout optimization across platforms | `/sales-checkout {user's question}` |
| Funnel strategy, conversion paths | `/sales-funnel {user's question}` |
| Affiliate program design across tools | `/sales-affiliate-program {user's question}` |
| Webinar selling strategy | `/sales-webinar {user's question}` |
| Growing your email list | `/sales-audience-growth {user's question}` |

If the question is Podia-specific (setup, config, troubleshooting, plan comparison), continue to Step 3.

## Step 3 — Podia platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For plan selection: calculate break-even point (Shaker pays for itself at ~$1,000/mo in sales where 5% = $50 > $50 plan difference)
- For product setup: recommend starting with one product type, validate demand before building
- For email: start with the free 100-subscriber tier, migrate to dedicated ESP only when you outgrow Podia's email
- For checkout: always add an upsell — even a simple bundle increases AOV 10-15%
- For community: seed it yourself for 30 days before expecting organic activity

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Mover plan charges 5% per sale** — at $1,000+/mo revenue, upgrading to Shaker ($89/mo, 0%) saves money. Calculate your break-even before choosing.
2. **Coupons can't be edited after creation** — if you need to change the discount or expiry, you must archive and create a new one.
3. **No product categories on storefront** — all products display in a flat list. Use landing pages or bundles to organize related products.
4. **Zapier actions are Shaker-only** — Mover plan gets Zapier triggers but not actions. This limits automation for Mover users.
5. **PayPal is Shaker-only** — Mover plan only supports Stripe. If your audience prefers PayPal, you need Shaker.
6. **No public API or webhooks** — all automation goes through Zapier. No direct programmatic access.
7. **No mobile app** — students access courses via mobile browser only. This hurts completion rates for video-heavy courses.
8. **Discord roles may not auto-remove** — when members leave, Discord role removal can be delayed or fail. Check manually.

## Related skills

- `/sales-membership` — Membership strategy across platforms (course structure, pricing, retention)
- `/sales-digital-products` — Digital product sales strategy (pricing, validation, launch)
- `/sales-email-marketing` — Email marketing strategy (sequences, automation, segmentation)
- `/sales-checkout` — Checkout optimization (upsells, order bumps, payment plans)
- `/sales-funnel` — Sales funnel strategy (landing pages, conversion paths)
- `/sales-affiliate-program` — Affiliate program design (commissions, recruitment, tracking)
- `/sales-webinar` — Webinar-based selling (live and evergreen strategy)
- `/sales-audience-growth` — Growing your email list (lead magnets, referrals)
- `/sales-kit` — Kit platform help (alternative for email-first creators)
- `/sales-groove` — Groove.cm platform help (alternative all-in-one)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Plan selection
**User says**: "I'm making about $800/month on Podia Mover and the 5% fee is killing me — should I upgrade?"
**Skill does**: Calculates that 5% of $800 = $40/mo in fees. Shaker is $50/mo more than Mover. At $800/mo revenue, Mover is still slightly cheaper. Recommends upgrading when revenue hits $1,000/mo consistently, and also considers PayPal and Zapier actions as additional Shaker benefits.

### Example 2: Course setup with drip content
**User says**: "I want to set up a 6-week course on Podia with weekly content releases"
**Skill does**: Reads platform-guide.md for course setup details. Walks through creating sections (one per week), adding lessons within each section, configuring drip schedule based on purchase date, setting up the onboarding email, and adding an upsell for a related coaching package.

### Example 3: Discord integration not working
**User says**: "Members who canceled still have their Discord roles after weeks"
**Skill does**: Explains the known Discord integration delay issue. Recommends manually auditing Discord roles monthly, checking the integration settings in Podia, and using Zapier (Shaker plan) as a backup automation to revoke roles on cancellation events.

## Troubleshooting

### Payments keep failing at checkout
**Symptom**: Multiple customers report transaction failures with different cards
**Cause**: Stripe configuration issue, Cloudflare captcha blocking legitimate traffic, or platform-wide issue
**Solution**: Check Stripe dashboard for declined payment details. Verify your Stripe account is in good standing. If widespread, contact Podia support — payment failures have been reported as platform-level issues. Test checkout in incognito mode.

### Videos not playing or uploading
**Symptom**: 404 errors on video upload, or videos won't play in certain browsers
**Cause**: File format/size issues, or browser compatibility (Firefox reported issues)
**Solution**: Use MP4 format (H.264 codec) under 4GB. If Firefox-specific, suggest Chrome/Safari to students. Re-upload if 404 persists. Check Podia status page for ongoing issues.

### Email broadcasts not sending
**Symptom**: Scheduled emails sit in queue or show low delivery
**Cause**: Warmup period restrictions (24-hour gap between broadcasts for new accounts), or subscriber list needs cleaning
**Solution**: New accounts must wait 24 hours between broadcasts. Remove bounced/unsubscribed contacts. Verify custom domain DNS (SPF, DKIM, DMARC) under Settings > Email. If deliverability is consistently low, consider a dedicated ESP and use Podia only for product delivery.
