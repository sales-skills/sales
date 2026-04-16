---
name: sales-beehiiv
description: "Beehiiv platform help — newsletter publishing, audience growth, monetization (ad network, paid subscriptions, Boosts), referral programs, email automations, website builder, API. Use when beehiiv emails are going to spam on shared IPs, ad network isn't generating revenue, Boosts aren't converting, paid subscriptions have Stripe issues, automations are limited to 30 days, referral program rewards aren't working, website builder is buggy, or API calls are failing. Do NOT use for general newsletter monetization strategy (use /sales-newsletter) or growing your subscriber list strategy (use /sales-audience-growth)."
argument-hint: "[describe what you need help with in beehiiv]"
license: MIT
version: 1.0.0
tags: [sales, newsletter, publishing, monetization, platform]
github: "https://github.com/beehiiv"
---

# Beehiiv Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of beehiiv do you need help with?**
   - A) Publishing — editor, templates, scheduling, content
   - B) Audience growth — Boosts, referral program, recommendations, subscribe forms
   - C) Monetization — Ad Network, paid subscriptions, sponsorship storefront, digital products
   - D) Automations — email flows, segments, triggers
   - E) Website — builder, custom domains, SEO, landing pages
   - F) Analytics — campaign stats, subscriber metrics, A/B testing
   - G) Integrations — Zapier, Make, webhooks, API
   - H) Account — pricing, plan features, billing, teams
   - I) Something else — describe it

2. **What plan are you on?**
   - A) Launch (free — up to 2,500 subscribers)
   - B) Scale ($43/mo — up to 100K subscribers)
   - C) Max ($96/mo — up to 100K subscribers)
   - D) Enterprise (custom — 100K+ subscribers)
   - E) Not sure

3. **What are you trying to accomplish?** (describe your specific goal or question)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route:
- Newsletter monetization strategy → "This is a monetization strategy question — run: `/sales-newsletter {your question}`"
- Growing subscriber list strategy → "This is an audience growth question — run: `/sales-audience-growth {your question}`"
- Email marketing strategy (sequences, segmentation) → "This is an email marketing question — run: `/sales-email-marketing {your question}`"
- Email deliverability / SPF / DKIM → "This is a deliverability question — run: `/sales-deliverability {your question}`"
- Selling digital products → "This is a digital products question — run: `/sales-digital-products {your question}`"

If the request is beehiiv-specific (platform config, feature questions, troubleshooting), continue to Step 3.

## Step 3 — Beehiiv platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves the API, also **read `references/beehiiv-api-reference.md`** for endpoint details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

Provide step-by-step guidance tailored to their plan tier:
- Check if the feature they need is available on their plan (many features are Scale+ only)
- If they're on Launch and need a paid feature, explain the upgrade path
- For API questions, provide example requests with their publication context
- For growth questions, recommend the beehiiv-native approach first, then third-party alternatives

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Shared IP deliverability** — all beehiiv users share sending infrastructure. If deliverability drops, it may not be your fault. Custom domains help, but dedicated IPs require Enterprise plan.
2. **Automations are limited** — email automations can only look back 30 days. You can't import complex flows from other platforms that use longer time windows.
3. **Scale plan required for monetization** — Ad Network, Boosts, paid subscriptions, and digital products all require Scale ($43/mo) or higher. The free Launch plan has no monetization features.
4. **Webhooks require Scale plan** — can't receive real-time events on the free plan.
5. **Send API is Enterprise-only** — programmatic email sending requires the Enterprise plan. The regular API (subscriptions, posts, publications) is available on all plans.
6. **Post creation API is beta and Enterprise-only** — POST /posts endpoint requires Enterprise plan access.
7. **Subscriber pricing scales steeply** — Scale and Max both cap at 100K subscribers. Beyond that, you must upgrade to Enterprise (custom pricing). The jump can be significant.
8. **Open rate concerns** — some users report beehiiv open rates appear higher than expected compared to other platforms. Use click rates as a more reliable engagement metric.

## Related skills

- `/sales-newsletter` — Newsletter monetization strategy (paid subscriptions, sponsorships, ad sales, pricing)
- `/sales-audience-growth` — Growing your subscriber list (lead magnets, referral programs, cross-promotion)
- `/sales-email-marketing` — Email marketing strategy (sequences, automation, segmentation)
- `/sales-deliverability` — Email deliverability (SPF, DKIM, DMARC, shared vs dedicated IPs)
- `/sales-digital-products` — Selling digital products (ebooks, templates, courses)
- `/sales-kit` — Kit platform help (if considering alternatives)
- `/sales-ghost` — Ghost platform help (if considering alternatives)
- `/sales-buttondown` — Buttondown platform help (if considering alternatives)
- `/sales-sparkloop` — SparkLoop platform help (referral programs, paid recommendations)
- `/sales-paved` — Paved platform help (newsletter sponsorship marketplace)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Monetization not working
**User says**: "I set up the ad network on beehiiv but I'm barely making any money"
**Skill does**: Checks plan tier (must be Scale+), reviews subscriber count and engagement metrics, explains how ad network revenue scales with list size and niche, suggests optimizing content for higher engagement, recommends trying Boosts alongside ads, and provides realistic revenue benchmarks
**Result**: User understands ad network expectations and has concrete steps to increase revenue

### Example 2: Migration from another platform
**User says**: "I'm moving from Substack to beehiiv — what do I need to know?"
**Skill does**: Walks through subscriber import process, content migration, custom domain setup, differences in monetization (Substack 10% fee vs beehiiv 0%), feature comparison (automations, referral program, analytics), and gotchas (automation limitations, plan-gated features)
**Result**: User has a complete migration plan with platform-specific considerations

### Example 3: API integration
**User says**: "I want to automatically create subscribers in beehiiv when someone fills out a Typeform"
**Skill does**: Explains the POST /subscriptions endpoint, provides example request with required fields, shows webhook/Zapier alternatives for no-code, notes that API access is available on all plans, and covers custom fields for additional data
**Result**: User has working API integration code or a Zapier workflow

## Troubleshooting

### Emails going to spam
**Symptom**: Subscribers report newsletters landing in spam/promotions
**Cause**: Shared IP infrastructure, missing custom domain, low engagement dragging reputation
**Solution**: Set up a custom sending domain. Ask engaged subscribers to move emails to primary inbox and reply. Clean inactive subscribers regularly. If persistent, contact beehiiv support — it may be a platform-wide issue. Dedicated IPs require Enterprise plan.

### Paid subscriptions not working
**Symptom**: Stripe payments failing, subscribers can't upgrade, paywall not showing
**Cause**: Stripe connection issues, plan limitations, or misconfigured premium tiers
**Solution**: Verify Stripe is properly connected (Settings > Payments). Check you're on Scale+ plan. Ensure premium tier is configured with correct pricing. Test in incognito mode. Check beehiiv support article on troubleshooting paid subscriptions.

### Referral program low participation
**Symptom**: Referral program launched but very few subscribers are sharing
**Cause**: Rewards aren't compelling, sharing link isn't prominent, or subscribers don't know it exists
**Solution**: Mention the referral program in every newsletter (dedicated section or footer). Make rewards achievable at low tiers (1-3 referrals). Provide pre-written share text. Show a progress tracker in emails.
