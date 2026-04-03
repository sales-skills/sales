---
name: sales-loyalty
description: "Designs and manage customer loyalty programs — points, tiers, rewards, referrals, VIP programs, retention mechanics. Covers strategy, structure, and implementation across Brevo Loyalty, Smile.io, LoyaltyLion, Yotpo, Stamp.me, and custom-built programs. Use when designing a loyalty program, choosing loyalty software, setting up points/tiers/rewards, optimizing member engagement, or measuring program ROI. Do NOT use for affiliate/referral programs with commission payouts (use /sales-affiliate-program), email marketing to loyalty members (use /sales-email-marketing), or checkout optimization (use /sales-checkout). For Brevo-specific help, use /sales-brevo."
argument-hint: "[describe your loyalty program question or goal]"
license: MIT
version: 1.0.0
tags: [sales, loyalty, retention, rewards]
---
# Customer Loyalty Programs

Help the user design and manage loyalty programs — from strategy and structure through points/tiers/rewards mechanics, member engagement, and ROI measurement. This skill is tool-agnostic but includes platform-specific guidance for Brevo Loyalty, Smile.io, LoyaltyLion, Yotpo, Stamp.me, and custom-built solutions.

## Step 1 — Gather context

Ask the user:

1. **What do you need help with?**
   - A) Program design — creating a new loyalty program from scratch
   - B) Tool selection — choosing loyalty program software
   - C) Points & rewards — setting up earning rules and reward catalog
   - D) Tiers / VIP — designing tier levels and progression
   - E) Member engagement — increasing participation and redemption
   - F) Analytics & ROI — measuring program effectiveness
   - G) Integration — connecting loyalty to e-commerce, CRM, or POS
   - H) Migration — switching loyalty platforms
   - I) Something else — describe it

2. **What type of business?**
   - A) E-commerce / DTC
   - B) Retail (physical stores)
   - C) SaaS / subscription
   - D) Hospitality / restaurants
   - E) B2B
   - F) Multi-location / franchise
   - G) Other

3. **Current loyalty setup?**
   - A) No program yet — starting from scratch
   - B) Using Brevo Loyalty
   - C) Using Smile.io
   - D) Using LoyaltyLion
   - E) Using Yotpo
   - F) Using a custom-built solution
   - G) Using another platform
   - H) Have a basic program (punch card, discount codes) but want to upgrade

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Strategy and approach

### Loyalty program types

| Type | How it works | Best for | Example |
|---|---|---|---|
| **Points** | Earn points on purchases, redeem for rewards | E-commerce, retail | 1 point per $1 spent, 100 points = $5 off |
| **Tiered** | Higher tiers unlock better perks | Brands wanting aspirational status | Silver → Gold → Platinum with increasing benefits |
| **Paid / VIP** | Pay for membership with exclusive benefits | Premium brands, Amazon Prime model | $99/year for free shipping + early access |
| **Cashback** | Earn store credit on purchases | Price-sensitive customers | 5% back on every purchase |
| **Punch card** | Buy X, get 1 free | Cafes, salons, simple retail | Buy 10 coffees, get 1 free |
| **Experiential** | Rewards are experiences, not discounts | Luxury brands | Early access, exclusive events, personal styling |

### Program design framework

1. **Define the objective** — retention, AOV increase, purchase frequency, referrals, data collection?
2. **Choose the model** — points, tiers, paid, hybrid?
3. **Set earning rules** — how do customers earn? (purchases, reviews, referrals, social shares, birthdays)
4. **Design rewards** — what can they redeem? (discounts, free products, free shipping, exclusive access, charity donations)
5. **Create tiers** (optional) — 2-4 tiers with clear progression and meaningful benefits at each level
6. **Plan communication** — welcome email, points reminders, tier upgrade notifications, expiry warnings
7. **Measure** — enrollment rate, active rate, redemption rate, incremental revenue

### Points economy design

**Earning rules (typical):**
- Purchase: 1 point per $1 spent (or 10 points per $1 for psychological effect)
- Account creation: 50-100 points (one-time)
- Birthday: 50-200 points (annual)
- Product review: 25-50 points
- Social share/follow: 10-25 points
- Referral: 100-500 points

**Redemption value:**
- Target 5-10% effective discount rate (e.g., 100 points = $5 on a program where you earn 1 point/$1)
- Don't make rewards too hard to reach — first reward should be achievable in 2-3 purchases
- Offer a mix of reward values ($5, $10, $25, free product, free shipping)

### Tier design

- **2-3 tiers is ideal** — more than 4 creates confusion
- **Name tiers** — use brand-relevant names, not just Bronze/Silver/Gold
- **Clear progression** — spend $X/year or earn X points to reach next tier
- **Meaningful benefits** — each tier must feel noticeably better (not just 1% more discount)
- **Maintain status** — require annual re-qualification to maintain tier (prevents dormant high-tier members)

## Step 3 — Platform-specific guidance

### In Brevo
- **Product**: Brevo Loyalty — full loyalty engine with points, tiers, rewards, vouchers, mobile wallet
- **Key concepts**: Programs, Subscriptions (enrolled members), Balances (points), Tiers, Rewards, Vouchers
- **API**: Comprehensive REST API for all loyalty operations — program management, subscription enrollment, balance transactions, tier assignment, voucher creation/redemption
- **Mobile wallet**: Digital loyalty cards on Apple Wallet / Google Pay (Enterprise only)
- **Strength**: Integrated with Brevo's email/SMS/WhatsApp — loyalty events can trigger marketing automation (e.g., tier upgrade → congratulations email, points expiring → reminder SMS)
- **Limitation**: Enterprise plan only — not available on Starter/Standard/Professional
- **Best for**: Teams already using Brevo for marketing who want integrated loyalty without a separate tool
- **Platform skill**: `/sales-brevo`

### In Smile.io
- **Product**: Popular loyalty platform for Shopify, BigCommerce, Wix
- **Programs**: Points, VIP tiers, referrals — all in one
- **Free tier**: Up to 200 monthly orders
- **Strength**: Best Shopify integration. Easy setup, good-looking widget. Strong referral program built in.
- **Limitation**: Limited customization on lower plans. Advanced analytics on higher tiers only.
- **Best for**: Shopify stores wanting a quick, attractive loyalty program

### In LoyaltyLion
- **Product**: E-commerce loyalty platform with deep analytics
- **Programs**: Points, tiers, custom rewards, loyalty pages
- **Strength**: Advanced analytics and segmentation. Can create custom loyalty pages. Good for data-driven teams.
- **Limitation**: Higher starting price. Setup is more complex.
- **Best for**: Mid-market e-commerce brands wanting detailed loyalty analytics

### In Yotpo
- **Product**: Part of Yotpo's retention marketing suite (loyalty + reviews + SMS + email)
- **Programs**: Points, tiers, referrals, VIP
- **Strength**: Combines loyalty with reviews and UGC — customers earn points for reviews, which generates social proof. Unified retention platform.
- **Limitation**: Most powerful as a suite — loyalty alone may be expensive. Complex pricing.
- **Best for**: E-commerce brands wanting loyalty + reviews + SMS in one platform

### In Stamp.me
- **Product**: Digital loyalty card and stamp program
- **Programs**: Digital punch cards, points, tiered rewards
- **Strength**: Simple and affordable. Mobile-first with digital stamp cards. Good for brick-and-mortar.
- **Limitation**: Less sophisticated than full loyalty platforms. Limited e-commerce integrations.
- **Best for**: Cafes, restaurants, salons, and small retail with simple loyalty needs

### Custom-built
- **When**: Unique business model, specific integration needs, or very high volume (millions of members)
- **Approach**: Build on your database + API layer, or use headless loyalty APIs
- **Strength**: Complete control and customization
- **Limitation**: Significant development effort, ongoing maintenance
- **Best for**: Enterprise with unique requirements or companies where loyalty is a core competitive advantage

## Step 4 — Actionable guidance

### Launch checklist

1. **Design program** — model, earning rules, rewards, tiers (see Step 2)
2. **Choose platform** — based on your e-commerce stack and needs
3. **Configure** — set up program, earning rules, reward catalog, tiers
4. **Design assets** — loyalty page, widget, emails (welcome, points earned, reward available, expiry warning)
5. **Set up automations** — trigger emails/SMS based on loyalty events
6. **Soft launch** — test with a small group, verify points earning and redemption
7. **Promote** — announce via email, site banner, checkout page, social media
8. **Measure** — track enrollment, engagement, and revenue impact weekly

### Key metrics

| Metric | Benchmark | What it tells you |
|---|---|---|
| Enrollment rate | 20-40% of customers | Program attractiveness |
| Active member rate | 40-60% of enrolled | Ongoing engagement |
| Redemption rate | 20-40% of points issued | Reward appeal |
| Member vs non-member AOV | 15-25% higher | Revenue impact |
| Member purchase frequency | 20-40% higher | Retention impact |
| Program ROI | 3-5x cost | Overall program value |

## Gotchas

1. **Don't make the first reward unreachable** — if it takes 10 purchases to earn the first reward, most customers will give up. Design the first reward to be achievable in 2-3 purchases.
2. **Don't create too many tiers** — 2-3 tiers with meaningful differences beats 5 tiers with marginal distinctions. Each tier should feel like a real upgrade.
3. **Don't forget expiration communication** — if points expire, you must warn members before expiration (30 days, 7 days, 1 day). Surprise expiration creates angry customers.
4. **Don't discount your way to losses** — if your effective discount rate exceeds your margin, the program loses money. Model the economics before launch (typical target: 5-10% effective discount).
5. **Don't neglect non-purchase engagement** — the best loyalty programs reward reviews, referrals, social engagement, and account actions — not just purchases. This keeps members engaged between purchases.

## Related skills

- `/sales-brevo` — Brevo platform help (Brevo Loyalty setup and configuration)
- `/sales-affiliate-program` — Affiliate and referral programs with commission payouts
- `/sales-email-marketing` — Email communication for loyalty program members
- `/sales-checkout` — Checkout optimization (loyalty display at checkout)
- `/sales-integration` — Connect loyalty tools with e-commerce and CRM
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Designing a loyalty program for a Shopify store
**User says**: "I run a DTC skincare brand on Shopify with $80 AOV. How should I structure a loyalty program?"
**Skill does**: Recommends points-based program with 2 tiers. Earning: 1 point/$1 + bonus points for reviews and referrals. Rewards: $5 off (50 points), $15 off (150 points), free mini product (100 points). Tiers: Regular + VIP (spend $500/year for 1.5x points, free shipping, early access). Recommends Smile.io for Shopify.
**Result**: Complete program design with economics, platform recommendation, and launch plan

### Example 2: Measuring loyalty program ROI
**User says**: "Our loyalty program has been running for 6 months and we're not sure if it's working"
**Skill does**: Defines key metrics to pull (member vs non-member AOV, purchase frequency, retention rate, redemption rate). Provides benchmark comparisons. Identifies common issues (low engagement, unreachable rewards, no communication).
**Result**: Measurement framework with specific metrics, benchmarks, and optimization recommendations

### Example 3: Setting up Brevo Loyalty with email automation
**User says**: "We're on Brevo Enterprise and want to launch a tiered loyalty program with automated emails"
**Skill does**: Walks through creating a loyalty program in Brevo → defining tiers and earning rules → setting up reward catalog → building automation journeys triggered by loyalty events (enrollment → welcome, tier upgrade → congratulations, points expiring → reminder)
**Result**: Loyalty program configured in Brevo with automated email flows for all key moments

## Troubleshooting

### Low enrollment rate
**Symptom**: Less than 10% of customers joining the loyalty program
**Cause**: Program not visible enough, value proposition unclear, or signup process too complex
**Solution**: 1) Add loyalty callout on homepage, product pages, and checkout. 2) Offer sign-up bonus (50-100 points). 3) Simplify enrollment to 1 click (email only). 4) Show the first achievable reward at signup ("You're 2 purchases away from $5 off!").

### Members not redeeming rewards
**Symptom**: High points issuance but low redemption (< 15%)
**Cause**: Rewards not appealing, redemption process too complex, or members forget they have points
**Solution**: 1) Survey members on desired rewards. 2) Simplify redemption (1-click at checkout). 3) Send points balance reminders monthly. 4) Add lower-tier rewards that are easier to reach. 5) Show points balance prominently on account page and in emails.

### Program losing money
**Symptom**: Loyalty program costs exceed the incremental revenue it generates
**Cause**: Effective discount rate too high, or program attracts deal-seekers without increasing loyalty
**Solution**: 1) Calculate effective discount rate (total rewards redeemed ÷ total member revenue). 2) If > 10%, reduce earning rate or increase redemption thresholds. 3) Add non-discount rewards (early access, exclusive content). 4) Implement minimum spend for redemption. 5) Segment: compare member lifetime value to non-member — if no difference, the program isn't driving incremental behavior.
