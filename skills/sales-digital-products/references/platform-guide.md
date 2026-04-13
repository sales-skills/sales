# Digital Products Platform Guide

## Pricing strategy

| Product type | Price range | Pricing model |
|---|---|---|
| Ebook / PDF guide | $9–$49 | One-time purchase |
| Template pack | $19–$99 | One-time or bundle |
| Mini-course (< 2 hrs) | $29–$97 | One-time |
| Full course (5+ hrs) | $97–$997 | One-time or payment plan |
| Design asset pack | $9–$59 | One-time or subscription |
| Software / plugin | $29–$199 | One-time or subscription |
| Premium community | $19–$99/mo | Subscription |

**Pricing principles**:
- **Price on value, not effort** — a 2-page checklist that saves 10 hours is worth more than a 100-page ebook
- **Use anchoring** — show the "value" ($500+) before the price ($49)
- **Offer tiers** — basic ($29), standard ($49), premium ($99) — most buy the middle
- **Payment plans increase AOV** — "3 payments of $67" converts better than "$197 one-time" for courses
- **Test prices up, not down** — start higher than you think, discount later if needed

## Launch playbook

**Pre-launch (2–4 weeks before)**:
1. Tease the product to your audience (email, social)
2. Build a waitlist landing page
3. Create 3–5 pieces of free content that lead to the product topic
4. Prepare launch emails (announcement, value-focused, urgency, last call)

**Launch week**:
1. **Day 1**: Announce with early-bird pricing or founding member bonus
2. **Day 2–3**: Share customer wins, testimonials, behind-the-scenes
3. **Day 4–5**: Address objections, FAQ, detailed breakdown
4. **Day 6**: Urgency — price going up or bonus expiring
5. **Day 7**: Last call email — final reminder before deadline

**Post-launch**:
1. Collect testimonials from buyers
2. Set up evergreen sales funnel (landing page + email sequence)
3. Plan a v2 or complementary product
4. Add as an upsell/cross-sell to other products

## Product delivery

**Delivery methods**:
- **Hosted download**: Platform hosts the file, buyer gets instant access link
- **Email delivery**: Automated email with download link after purchase
- **Membership area**: Drip content over time (courses, multi-part products)
- **License key**: Software products with activation codes

**File protection**:
- **PDF stamping**: Add buyer's email to each page (deters sharing)
- **Unique download links**: Expire after X downloads or hours
- **Membership login**: Require account to access (courses, software)
- **DRM**: Heavy-handed, usually hurts legitimate buyers more than pirates

## Upsell and cross-sell strategy

| Position | Type | Example | Conversion lift |
|---|---|---|---|
| **Order bump** | Add-on at checkout | "+$19 for the template pack" | +15–30% revenue |
| **Post-purchase upsell** | Higher-tier offer after buy | "Upgrade to the course for $47 more" | +10–25% revenue |
| **Cross-sell email** | Related product in follow-up | "People who bought X also got Y" | +5–15% revenue |
| **Bundle** | Multiple products at discount | "All 3 guides for $79 (save $40)" | Higher AOV |

## Platform-specific guidance

### In Kit
- **Commerce**: Sell digital products + subscriptions directly through Kit
- **Product types**: Digital downloads (PDF, video, audio, zip) and recurring subscriptions
- **Delivery**: Instant download link after purchase
- **Payment**: Stripe required, 0.6% Kit fee + Stripe processing fees
- **Landing pages**: Built-in pages for product sales
- **Email integration**: Auto-tag buyers, trigger post-purchase sequences
- **Strengths**: Seamless email → product flow, no separate storefront needed
- **Limitations**: No order bumps/upsells, basic product pages, no affiliate tracking

### In Gumroad
- **Product types**: Digital downloads, memberships, pre-orders, software licenses
- **Pricing**: Free plan (10% fee) or Pro ($10/mo + 2.9% + 30¢)
- **Delivery**: Hosted download with license keys for software
- **Strengths**: Simple setup, built-in discovery (Gumroad Discover), affiliate program
- **Limitations**: High free-tier fee, limited email marketing, Gumroad-branded checkout

### In Lemon Squeezy
- **Product types**: Digital downloads, subscriptions, SaaS, software licenses
- **Pricing**: 5% + 50¢ per transaction (no monthly fee)
- **Merchant of record**: Lemon Squeezy handles global tax (VAT, sales tax)
- **Strengths**: No tax headaches, modern checkout, software license key management
- **Limitations**: Higher per-transaction fee than Gumroad Pro at volume

### In Payhip
- **Product types**: Digital downloads, courses, memberships, coaching, physical products
- **Pricing**: Free plan (5% fee), Plus ($29/mo, 2%), Pro ($99/mo, 0%) — no feature gating, all features on all plans
- **Delivery**: Instant hosted download links, configurable download limits, PDF stamping
- **Courses**: Video lessons, quizzes, assignments, drip scheduling, completion certificates
- **Marketing**: Built-in affiliate program (per-product commissions), coupons (API-managed), cross-selling, referral program, customer reviews
- **Integrations**: Stripe + PayPal payments, native ESP connections (ActiveCampaign, AWeber, Campaign Monitor, Kit, Drip), Zapier (3 triggers), webhooks (4 events), website embedding
- **Tax**: Automatic EU/UK VAT handling — does NOT handle US sales tax or other global taxes
- **Strengths**: Lowest fees at volume (Pro = 0%), instant payouts, all features on free plan, built-in affiliate + course + membership in one platform
- **Limitations**: Basic store design (limited themes), no order bumps/upsells, limited API (coupons + license keys only), no marketplace/discovery, US sales tax not handled
- **Best for**: Creators who want an all-in-one platform (products + courses + memberships + coaching) with the lowest possible fees at scale. Especially strong for UK/EU sellers who benefit from automatic VAT handling. See `/sales-payhip` for full platform help.

### In Podia
- **Product types**: Courses, digital downloads, webinars, community, coaching
- **Pricing**: From $39/mo, no transaction fees
- **Strengths**: All-in-one (products + email + community), clean design, no per-sale fees
- **Limitations**: Limited customization, no marketplace/discovery

### In Groove (GrooveSell)
- **Product types**: Digital and physical products, subscriptions
- **Pricing**: Included in Groove.cm plans
- **Strengths**: Built-in funnel builder (GroovePages), affiliate management (GrooveAffiliate), order bumps, upsells
- **Limitations**: Platform stability concerns, smaller ecosystem

### In Shopify
- **Product types**: Digital downloads (via app), courses (via app)
- **Pricing**: From $39/mo + payment processing
- **Strengths**: Robust e-commerce, many apps, great for physical + digital combo
- **Limitations**: Requires apps for digital delivery, overkill for digital-only

### In WordPress (WooCommerce + Easy Digital Downloads)
- **Product types**: Any digital file, software with license keys
- **Pricing**: Free plugins, pay for hosting + extensions
- **Strengths**: Full control, no per-sale fees, unlimited customization
- **Limitations**: Self-managed, requires technical setup, security responsibility

## Choosing a platform

| If you need... | Best option |
|---|---|
| Simplest setup, already use Kit | Kit Commerce |
| Maximum simplicity, discovery | Gumroad |
| Global tax handling, SaaS/software | Lemon Squeezy |
| Lowest fees at volume | Payhip Pro or WooCommerce |
| All-in-one with email + community | Podia |
| Upsells, order bumps, funnels | Groove or ThriveCart |
| Physical + digital products | Shopify |

## Revenue benchmarks

```
Ebook at $29:
  1,000 email list × 3% conversion = 30 sales = $870

Template pack at $49:
  2,000 email list × 4% conversion = 80 sales = $3,920

Course at $197:
  5,000 email list × 2% conversion = 100 sales = $19,700

Course at $497 (with payment plan):
  5,000 email list × 1.5% conversion = 75 sales = $37,275
```

## Post-purchase automation

1. **Immediate**: Thank-you email + download access
2. **Day 1**: "How to get started" email with quick-win tutorial
3. **Day 3**: Check-in — "Any questions so far?"
4. **Day 7**: Ask for testimonial / review
5. **Day 14**: Cross-sell related product
6. **Day 30**: Ask for referral
