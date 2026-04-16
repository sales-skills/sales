---
name: sales-digital-products
description: "Sells digital products — ebooks, templates, courses, downloads, software, presets, printables. Covers pricing strategy, product-market fit, delivery, upsells, launch playbooks, and platform selection. Use when you have a digital product idea but don't know how to price or sell it, sales are flat and you need a better launch strategy, you're unsure which platform fits your product type, or delivery and upsell flow isn't converting. Do NOT use for membership/subscription sites (use /sales-membership), checkout page optimization (use /sales-checkout), or platform-specific setup (use /sales-kit, /sales-groove, etc.)."
argument-hint: "[describe your digital product question or goal]"
license: MIT
version: 1.0.0
tags: [sales, digital-products, ebooks, courses, ecommerce]
---
# Digital Product Sales

Help the user sell digital products — ebooks, templates, courses, downloads, software, presets, and printables. Covers product-market fit, pricing strategy, delivery, upsells, launch playbooks, and platform selection. This skill is tool-agnostic but includes platform-specific guidance.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What type of digital product?**
   - A) Ebook / guide / PDF
   - B) Templates / swipe files / spreadsheets
   - C) Online course / video training
   - D) Software / SaaS / plugins
   - E) Design assets (presets, fonts, icons, mockups)
   - F) Audio (music, sound effects, podcasts)
   - G) Printables / planners
   - H) Community access / paid group
   - I) Not sure yet — need help deciding

2. **Where are you in the process?**
   - A) Idea stage — haven't built anything yet
   - B) Product is built — need to sell it
   - C) Already selling — want to optimize or scale
   - D) Want to add digital products to an existing business

3. **Do you have an existing audience?**
   - A) Yes — newsletter, social, or community (approximate size?)
   - B) No — starting from scratch
   - C) Small audience (<1,000) but growing

## Step 2 — Strategy and approach

### Product-market fit for digital products

**Validation before building**:
1. **Pre-sell**: Offer the product at a discount before it exists. If 10+ people pay, build it.
2. **Waitlist**: Landing page with email capture. 100+ signups = strong signal.
3. **Free version**: Give away a mini version (checklist from the ebook, 1 lesson from the course). Track engagement.
4. **Audience polling**: Ask your list "Would you pay $X for Y?" — but weigh actions over words.

**High-demand digital product categories**:
- "Done for you" templates (save time) — highest conversion
- Skill-building courses (increase earning power) — highest price point
- Creative assets (presets, fonts, mockups) — volume play
- Knowledge products (ebooks, guides) — lower price, higher volume
- Tools/software (calculators, apps) — recurring revenue potential

## Step 3 — Platform-specific guidance

**Read `references/platform-guide.md`** for detailed pricing strategy, launch playbook, delivery methods, upsell frameworks, platform comparisons, and revenue benchmarks.

### In MailerLite
MailerLite supports selling digital products directly within its platform:
- **Digital product sales**: Sell ebooks, downloads, and digital files. Buyers receive a download link in a confirmation email.
- **Stripe required**: All payments go through Stripe — no PayPal or other payment processors.
- **Plan limits**: 1 digital product on Free, 3 on Growing Business ($10/mo), unlimited on Advanced ($20/mo).
- **Paid newsletters**: Separate from digital products — recurring subscription payments via Stripe for gated content.
- **Landing pages**: Use MailerLite's built-in landing page builder for product sales pages (10 on Free, unlimited on paid).
- **Automation integration**: Trigger post-purchase email sequences automatically based on product purchase events.
- **Limitations**: No order bumps, no upsell/downsell flows, no cart/checkout page customization. For complex digital product sales with bundles and upsells, use Gumroad, Lemon Squeezy, or Kit Commerce and connect to MailerLite for email follow-up.
- **Best for**: Solopreneurs and creators already using MailerLite who want to sell 1-3 simple digital products (ebooks, templates) without adding another platform.

### In Gumroad
Gumroad is the simplest platform for selling digital products — zero monthly fees, upload and price in minutes:
- **Pricing**: 10% + $0.50 per sale (no monthly fee). Discover marketplace sales cost 30%. No volume discounts.
- **Product types**: Digital downloads, courses, memberships, software (with license keys), bundles, physical products.
- **Pay-what-you-want**: Set a minimum (including $0) and let buyers choose their price. Good for building an audience.
- **Gumroad Discover**: Built-in marketplace for organic traffic — but requires at least one sale before your product appears. Don't rely on it as your only traffic source.
- **Tax handling**: Full Merchant of Record since Jan 2025 — Gumroad handles all VAT/GST/sales tax globally.
- **PayPal removed**: Since Oct 2024, buyers can only pay via credit/debit card. This may reduce conversions for audiences that prefer PayPal.
- **Fee impact on low-priced products**: A $5 product loses ~20% to Gumroad fees (before payment processing). Bundle products or price at $25+ to reduce the effective rate.
- **Email broadcasts**: Basic — good for product announcements, but no automation or sequences. Use a dedicated ESP for marketing campaigns.
- **Best for**: First-time creators, side projects, quick product launches, software license key distribution. Move to Payhip or Lemon Squeezy when revenue exceeds ~$3K/month and fees become painful.
- For platform-specific setup, use `/sales-gumroad`.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

## Gotchas

1. **Don't build before validating** — pre-sell or waitlist first. 50% of digital products never sell because the creator assumed demand. Even a simple "buy now, get it in 2 weeks" test is better than 3 months of silent building.

2. **Platform fees vary wildly** — Gumroad free tier takes 10%, Lemon Squeezy takes 5%, Kit takes 0.6%, WooCommerce takes 0%. At $10K+ in annual sales, the difference is hundreds to thousands of dollars. Model your fees before committing.

3. **Courses need ongoing maintenance** — a $497 course creates support expectations. Budget time for Q&A, community management, and content updates. Ebooks and templates are lower-maintenance products to start with.

4. **Price anchoring works both ways** — if you launch at $19, it's very hard to raise to $99 later with the same audience. Launch at a higher price and discount strategically rather than starting low.

5. **Tax compliance is real** — selling digital products internationally triggers VAT/GST obligations in the EU, UK, Australia, etc. Use a merchant of record (Lemon Squeezy, Paddle) or handle it yourself. Don't ignore this.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-checkout` — Checkout page optimization (upsells, order bumps, payment plans, cart abandonment)
- `/sales-membership` — Membership sites and online courses (recurring access, content dripping)
- `/sales-newsletter` — Newsletter monetization (paid subscriptions, sponsorships)
- `/sales-audience-growth` — Growing your audience (lead magnets, referrals, cross-promotion)
- `/sales-email-marketing` — Email marketing (launch sequences, nurture campaigns)
- `/sales-funnel` — Sales funnel strategy (landing pages, conversion paths)
- `/sales-mailerlite` — MailerLite platform help (digital product sales, paid newsletters)
- `/sales-kit` — Kit platform help (Kit Commerce setup)
- `/sales-groove` — Groove.cm platform help (GrooveSell, GroovePages)
- `/sales-beehiiv` — Beehiiv platform help (digital products, paid subscriptions, newsletter monetization)
- `/sales-podia` — Podia platform help (courses, downloads, memberships, coaching, email)
- `/sales-payhip` — Payhip platform help (digital downloads, courses, memberships, coaching, store builder, API)
- `/sales-gumroad` — Gumroad platform help (digital products, license keys, Discover marketplace, API, webhooks)
- `/sales-lemonsqueezy` — Lemon Squeezy platform help (payments, subscriptions, license keys, tax compliance as merchant of record)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: First digital product
**User says**: "I want to create and sell my first ebook about freelance copywriting"
**Skill does**: Recommends validation via pre-sale to newsletter, suggests $29 pricing with bundle option ($49 with template swipe file), compares Kit Commerce vs Gumroad for delivery, provides launch email sequence
**Result**: User has a validated product idea, pricing strategy, platform choice, and 7-day launch plan

### Example 2: Platform selection
**User says**: "I'm selling a Notion template pack — should I use Gumroad or Lemon Squeezy?"
**Skill does**: Compares fees (Gumroad 10% free tier vs Lemon Squeezy 5%), tax handling (LS is merchant of record), checkout experience, and discovery features. Recommends Lemon Squeezy for international sales, Gumroad for discovery.
**Result**: User makes an informed platform choice based on their priorities

### Example 3: Course launch
**User says**: "I have a 3,000-subscriber list and want to launch a $297 course on data analytics"
**Skill does**: Designs a 4-week launch sequence (tease → waitlist → early-bird → open → close), recommends payment plan option ($3 × $107), suggests Kit Commerce or Podia, provides revenue projection (3K × 2% = 60 sales = $17,820)
**Result**: User has a complete launch plan with email sequence, pricing, and revenue targets

## Troubleshooting

### Low conversion on product page
**Symptom**: Traffic to product page but <1% conversion
**Cause**: Weak value proposition, no social proof, price not justified, too many options
**Solution**: Add testimonials (even from beta testers). Show the transformation ("before → after"). Add a money-back guarantee. Remove distracting navigation. Test a lower entry price with an upsell.

### High refund rate (>10%)
**Symptom**: Sales coming in but refund requests exceed 10%
**Cause**: Product doesn't match the sales page promise, or product quality is low
**Solution**: Survey refund requesters (what did they expect?). Align sales copy with actual product content. Add a "getting started" email immediately after purchase. Consider a lower price point if expectations are too high.

### Can't get first 10 sales
**Symptom**: Product is live but not selling
**Cause**: No audience, no launch event, or selling to wrong people
**Solution**: Don't rely on organic discovery. Email your list with a dedicated launch sequence (not just a mention). Offer founding member pricing (50% off first 20 buyers). Ask 5 people personally to buy and give feedback. If you have no audience, use `/sales-audience-growth` first.
