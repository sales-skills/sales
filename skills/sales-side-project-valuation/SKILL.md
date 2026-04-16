---
name: sales-side-project-valuation
description: "Side project valuation strategy — pricing, revenue multiples, what buyers look for, deal structuring, and marketplace selection for selling or buying a side project. Use when pricing a side project you want to sell, evaluating a project you want to buy, deciding between Acquire.com/Flippa/TrustMRR/SideProjectors/1Kprojects/Microns/Little Exits, structuring earnouts or seller financing, preparing a listing, running due diligence, or comparing revenue multiples for micro-SaaS. Do NOT use for early-stage fundraising (different problem — equity not acquisition), ongoing operations (use /sales-digital-products or /sales-funnel), or platform-specific help on SideProjectors (use /sales-sideprojectors)."
argument-hint: "[describe your side project sale, purchase, or valuation question]"
license: MIT
version: 1.0.0
tags: [sales, side-project, valuation, acquisition, marketplace, strategy]
---

# Side Project Valuation & Sale Strategy

Help the user price, sell, buy, or structure a side project acquisition. Covers valuation methodologies (revenue multiples, cost-based, comparable sales), marketplace selection (matching deal size to the right marketplace), due diligence, and deal structuring (cash vs earnout vs seller financing). This skill is tool-agnostic — it references specific marketplaces for where to list but focuses on the underlying strategy.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your role?**
   - A) Seller — I want to sell a project
   - B) Buyer — I want to buy a project
   - C) Both — I'm negotiating a specific deal
   - D) Researching — I want to understand the market

2. **What's the project stage?**
   - A) Pre-revenue (MVP, users but no revenue)
   - B) Early revenue ($1-$500/mo MRR)
   - C) Small but steady ($500-$5K/mo MRR)
   - D) Meaningful ($5K-$50K/mo MRR)
   - E) Profitable SaaS ($50K+/mo MRR)
   - F) Abandoned / no longer maintained

3. **What's your primary question?**
   - A) How do I price this project?
   - B) Which marketplace should I list on?
   - C) What do buyers look for in due diligence?
   - D) How do I structure the deal (cash, earnout, seller financing)?
   - E) How do I run due diligence as a buyer?
   - F) How do I transfer the project post-sale?
   - G) Other — describe it

Skip-ahead rule: if the user's prompt already provides enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| SideProjectors-specific listing help | `/sales-sideprojectors {user's question}` |
| Digital product sales (selling an ongoing product, not the project itself) | `/sales-digital-products {user's question}` |
| Product launch directory strategy (getting exposure before selling) | `/sales-launch-directory {user's question}` |
| Audience growth for the project | `/sales-audience-growth {user's question}` |
| Newsletter-as-asset valuation | `/sales-newsletter {user's question}` |

Otherwise, answer directly below.

## Step 3 — Marketplace reference

For marketplace-specific guidance (fees, buyer quality, deal size fit, escrow, typical timeline), read `references/platforms.md`. Answer using only the relevant section — don't dump the full reference.

You no longer need the platform reference — focus on the user's specific situation.

## Step 4 — Actionable guidance

### Valuation methods (pick what fits the stage)

**Pre-revenue projects** — buyers heavily discount no-revenue projects:
- Base: development time × hourly rate × 10-20%
- Example: 200 hours × $75/hr × 15% = $2,250
- Add premium for: working product with live users, clean code, transferable domain, unique tech
- Realistic range: $100-$5,000 for most pre-revenue side projects

**Revenue-generating projects** — multiples of annual revenue (ARR):

| Profile | Typical multiple (ARR) |
|---|---|
| Side project, flat revenue, no growth | 1.0-1.5x |
| Side project, stable, small growth | 1.5-2.5x |
| Small micro-SaaS, clear growth | 2.5-4x |
| Profitable SaaS, 20%+ growth, low churn | 4-6x |
| Private lower-middle market SaaS (broker-sold) | 4-7x (median ~4.5x in 2026) |

**Premium drivers** (push toward top of range):
- Net Revenue Retention (NRR) >110%
- Rule of 40 (growth % + profit margin %) >40
- Low customer concentration (no customer >10% of revenue)
- Recurring revenue >70% of total
- Clean, documented code and stack
- Transferable integrations (no personal API keys, accounts)

**Discount drivers** (push toward bottom):
- Customer concentration >30% from one customer
- High churn (>5% monthly)
- Founder-dependent (personal brand, relationships)
- Platform-dependent (Shopify app, ChatGPT plugin)
- Messy code, no docs, no tests
- Tax, legal, or IP uncertainty

### What buyers look for

**Financials** (verified, not self-reported):
- 12-24 months of revenue history (Stripe / payment processor statements)
- MRR / ARR trend line
- Churn rate and NRR
- Cost structure (hosting, APIs, support time)
- Profit margin after true costs

**Product and code**:
- Working product with a live URL
- Clean codebase, documented setup
- Tech stack that's transferable (avoid obscure dependencies)
- No personal accounts baked in (API keys, domains in founder's name)

**Customers and market**:
- Customer list with acquisition channels
- Analytics (Google Analytics, Plausible, Mixpanel access)
- Support tickets and customer sentiment
- Competitive positioning

**Legal and transfer**:
- Clean IP ownership (no unlicensed code or assets)
- Transferable domain, trademarks, accounts
- No open disputes, complaints, or refund chargebacks
- Privacy policy / terms compliance (GDPR, CCPA if applicable)

### Deal structuring

| Structure | Seller gets | Buyer gets | Best for |
|---|---|---|---|
| All cash | Full price at close | No deferred payments | Small deals, low-risk, clean transfer |
| Cash + earnout | Base + upside if targets hit (3-24 months) | Downside protection if revenue drops | Growth-stage or uncertain retention |
| Cash + seller note | Down payment + monthly over 3-7 years with interest | Lower upfront capital | Mid-size deals where buyer needs financing |
| Equity rollover | Cash + stake in new owner's business | Aligned incentives, founder transition | Larger deals, strategic acquirers |

**Typical structure for side projects under $50K**: 100% cash at close via escrow. Earnouts make sense above $50K or when the project's future revenue is uncertain.

**Escrow** — never skip it for deals over $500. Use Escrow.com, Tranferslot, or marketplace-built-in escrow (Acquire.com, Flippa). Side project deals without escrow are the #1 source of scams.

### Matching deal size to marketplace

| Price range | Best marketplace fit |
|---|---|
| Under $1,000 | 1Kprojects, SideProjectors, Little Exits, Indiemaker |
| $1,000-$5,000 | SideProjectors, Microns, Little Exits, Indiemaker |
| $5,000-$50,000 | Microns, Acquire.com, Indiemaker, Flippa, TrustMRR (if verified-revenue provider) |
| $50,000-$500,000 | Acquire.com, Flippa, Empire Flippers, TrustMRR (lump-sum only) |
| $500,000+ | Empire Flippers, FE International, broker-assisted |
| $200K–$20M net profit (ecom/DTC/FBA/newsletter) | Ecomswap (boutique ecom-specialist advisory), Quiet Light, Empire Flippers |

Read `references/platforms.md` for per-marketplace detail (fees, buyer verification, escrow, typical timeline).

### Listing checklist (seller side)

1. **Clean up financials** — export 12-24 months of Stripe/payment data, normalize revenue
2. **Document the business** — what it does, who uses it, how they find it, cost to run
3. **Screenshots and demo** — product in action, dashboard, key features
4. **Metrics page** — MRR trend, user growth, churn, traffic sources
5. **Transfer plan** — domain, hosting, Stripe, API keys, analytics, social accounts
6. **Asking price with rationale** — show the multiple and comparables
7. **Cross-list** — don't rely on one marketplace; list on 2-3 that fit your size

### Due diligence checklist (buyer side)

1. **Verify revenue** — screenshare Stripe/PayPal/payment provider dashboard (don't trust screenshots alone)
2. **Verify traffic** — Google Analytics access, not just screenshots
3. **Review code** — get read-only GitHub/repo access before close
4. **Check customer concentration** — how much revenue from top 5 customers?
5. **Churn deep-dive** — last 6 months of cancellations, reasons
6. **Technical audit** — hosting costs, API dependencies, security, scalability
7. **Legal check** — IP ownership, open-source license compliance, ToS/privacy
8. **Transfer rehearsal** — dry-run the handover before paying
9. **Escrow the payment** — Escrow.com or marketplace-native
10. **Post-sale support** — negotiate 30-90 days of seller availability

If you discover a gotcha, pricing benchmark, or negotiation tactic not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

- **Side project multiples are lower than VC-backed SaaS multiples.** Public SaaS trades at 3-7x revenue; side projects trade at 1-3x ARR unless there's genuine growth. Don't anchor on headlines about $100M acquisitions.
- **Revenue history quality matters more than the number.** 12 months of verified Stripe data beats a 3-month spike. Buyers heavily discount unverifiable revenue claims.
- **Customer concentration silently kills deals.** A $10K ARR project with 40% from one customer will trade 30-50% below the same project with diversified revenue. Mention it proactively or buyers will find it.
- **"Abandoned" projects sell for development-cost multiples, not revenue multiples.** If you haven't touched the code in 6 months, buyers assume tech debt, lapsed integrations, and support backlogs. Be realistic.
- **Earnouts often don't get paid out fully.** Industry data: <50% of earnouts pay at full target. If you accept an earnout, price it like you'll only see the upfront cash.
- **Transfer friction is real.** Domain transfers can take 60+ days; Stripe accounts don't transfer (buyer needs a new one); OAuth tokens expire. Build a written transfer plan before signing.
- **Most side project marketplaces don't verify buyers.** SideProjectors, 1Kprojects, and Little Exits have no verification. Acquire.com and Flippa have partial verification. Vet buyers yourself with a video call before sharing sensitive details.
- **Tax consequences can surprise sellers.** A $50K sale may be taxed as capital gains, ordinary income, or asset sale depending on structure and jurisdiction. Consult a tax pro before signing.

## Before recommending a specific platform skill

This skill covers a strategy domain across many marketplaces. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` from: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md`.

**After reading,** ground your recommendation in something concrete from the SKILL.md. Align any generated invocation with the skill's `argument-hint`. If the platform skill turns out not to fit, swap to another or handle the question here directly.

## Related skills

- `/sales-acquire` — Acquire.com platform help (curated SaaS marketplace, 500K+ verified buyers, NDA-gated listings, Escrow.com integration)
- `/sales-flippa` — Flippa platform help (largest open marketplace, tiered listing packages $29-$699, 3-10% success fees, auto-verification above $50K)
- `/sales-trustmrr` — TrustMRR platform help (verified-revenue marketplace with live Stripe/LemonSqueezy/Polar/Paddle/etc. API verification, APA-only lump-sum deals, $29-$499 boost tiers)
- `/sales-sideprojectors` — SideProjectors platform help (free peer-to-peer, DR69 backlink, no escrow)
- `/sales-ecomswap` — Ecomswap platform help (boutique sell-side M&A advisory for profitable Shopify/FBA/DTC/newsletter/content exits, $200K+ net-profit floor, SDE-based valuation, curated private buyer sourcing)
- `/sales-startupage` — StartuPage platform help (founder-ecosystem platform where acquisition is 1 of 4 opportunity types; verified MRR via Stripe/LemonSqueezy/Polar/RevenueCat/Dodo; best as a secondary listing for cross-posting rather than primary marketplace)
- `/sales-digital-products` — Sell digital products (ebooks, templates, SaaS downloads) instead of selling the project itself
- `/sales-launch-directory` — Launch across startup directories (relevant before selling — buyers discover projects through PH, BetaList, etc.)
- `/sales-audience-growth` — Grow an email list or user base (audience is itself a valuation driver)
- `/sales-newsletter` — Newsletter monetization (newsletters sell as assets too — separate valuation playbook)
- `/sales-funnel` — Build sales funnels for the ongoing product (not selling the project itself)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Price a micro-SaaS with $400 MRR
**User says**: "I have a Chrome extension making $400/mo MRR for the past 8 months. I want to sell it. What's it worth and where should I list it?"
**Skill does**:
1. Calculates ARR ($4,800) and applies side-project multiple: 1.5-3x = $7,200-$14,400
2. Notes Chrome extension = platform-dependent (discount slightly — policy risk)
3. Recommends listing at $12,000 with room to negotiate down to $9,000
4. Suggests Acquire.com (best for SaaS), Microns (0% commission, right size), and Little Exits (indie hacker audience). Cross-list for maximum reach.
5. Reminds about escrow and documenting the Chrome Web Store transfer process
**Result**: User has realistic pricing, a shortlist of 3 marketplaces, and a listing prep checklist.

### Example 2: Buyer due diligence on a $30K project
**User says**: "I'm looking at buying a newsletter business for $30K. It claims 8K subscribers and $1K/mo in sponsorships. What should I verify?"
**Skill does**:
1. Calculates implied multiple (30x MRR / 2.5x ARR — on high side for newsletters)
2. Lists verification steps: actual subscriber count (ESP screenshare), open rates, sponsor contracts and renewal likelihood, churn, subscriber acquisition cost
3. Warns about newsletter-specific risks: sponsor concentration, deliverability reputation tied to sender, founder-as-voice risk
4. Recommends 30-60 day seller support clause and partial earnout based on subscriber retention
5. Points to `/sales-newsletter` for newsletter-specific operating guidance post-purchase
**Result**: Buyer has a verification checklist and a deal structure proposal that de-risks subscriber retention.

### Example 3: Choose between Acquire.com and Flippa
**User says**: "I have a $25K/year SaaS. Should I list on Acquire.com or Flippa?"
**Skill does**:
1. Reads `references/platforms.md` for the comparison
2. Notes Acquire.com: curated, NDA-gated, 500K+ buyers, $390/yr buyer tier (many serious), 0% seller fee
3. Notes Flippa: open marketplace, 5% success fee, broader audience (more tire-kickers), listing fees
4. For $25K ARR SaaS: recommends Acquire.com as primary (SaaS-specialized, curated), Flippa as secondary if Acquire.com listing gets no traction after 30 days
5. Warns that Acquire.com rejects listings under $10K and curates heavily — listing quality matters
**Result**: Clear primary + secondary marketplace recommendation with reasoning.

## Troubleshooting

### Listing has been up for months with no offers
**Symptom**: Listed on a marketplace but no serious buyer inquiries
**Cause**: Price too high for the profile, weak listing (missing metrics, screenshots, or rationale), or wrong marketplace for the deal size
**Solution**: Drop price 20-30% and see if inquiries pick up — the market is telling you the price is too high. Audit the listing: does it show 12 months of verified revenue? Does it have a transfer plan? Cross-list on 2-3 marketplaces that match your deal size (see `references/platforms.md`). If it's abandoned, reframe as "starter project" rather than "abandoned" — buyers fear the latter.

### Buyer wants a big earnout, seller wants all cash
**Symptom**: Deal stuck on structure — buyer proposes 40% cash + 60% earnout, seller wants 100% cash
**Cause**: Misaligned risk assessment — buyer sees retention/growth risk, seller sees earnout as unlikely to pay
**Solution**: Meet in the middle with 70-80% cash + 20-30% earnout on a short (6-12 month) window with achievable targets (90% revenue retention, not growth). If revenue is genuinely stable and verifiable, seller can push for all cash by providing stronger transition support (60-90 days of availability). If buyer won't budge, the price is probably right and the structure is the concession.

### Buyer or seller is trying to skip escrow
**Symptom**: One party pushing for direct wire transfer "to save fees"
**Cause**: Either inexperience or (worst case) scam intent — legitimate buyers/sellers understand escrow protects both parties
**Solution**: Refuse. For any deal over $500, insist on escrow — Escrow.com charges 0.89-3.25% and prevents irreversible fraud. Marketplace-built-in escrow (Acquire.com, Flippa) is often included in the platform fee. If the counterparty refuses escrow, walk away — this is the single most common side project scam pattern.
