---
name: sales-trustmrr
description: "TrustMRR platform help — Marc Lou's verified-revenue startup database and acquisition marketplace with live Stripe/LemonSqueezy/Polar/Paddle/DodoPayment/RevenueCat/Superwall/Creem API revenue verification (hourly-updated), APA-only lump-sum escrow via Escrow.com (no earnouts or installments), free directory listing + marketplace tiers Starter $29 / Growth $199 / Scale $499, 3% marketplace fee plus Escrow.com fees split 50/50 buyer/seller (combined 5.60% ≤$5K down to 3.70% $10M+), $199/yr buyer alerts, stealth mode, public REST API with tmrr_* Bearer 20 req/min. Use when listing a bootstrapped or indie SaaS for sale with verified revenue, picking between Starter/Growth/Scale boost tiers, auditing a TrustMRR listing before an offer, connecting a payment provider for verification, querying the TrustMRR API, comparing TrustMRR against Acquire.com or Microns, or setting up a verified-revenue badge. Do NOT use for cross-marketplace valuation strategy (use /sales-side-project-valuation)."
argument-hint: "[describe what you need help with on TrustMRR]"
license: MIT
version: 1.0.0
tags: [sales, marketplace, acquisition, saas, verified-revenue, platform]
---

# TrustMRR Platform Help

Helps the user with TrustMRR — from listing a verified-revenue startup and picking boost tiers to querying the API or running due diligence on a listing.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Listing a startup — payment provider verification, boost tier selection
   - B) Buying a startup — due diligence, offers, escrow
   - C) Understanding fees — listing tiers, marketplace fee, Escrow.com split
   - D) API usage — querying endpoints, auth, rate limits
   - E) Comparing TrustMRR to Acquire.com, Microns, or Flippa
   - F) Something else

2. **If seller — what's your asking price range?**
   - A) Under $10K
   - B) $10K–$50K
   - C) $50K–$200K
   - D) $200K–$1M
   - E) $1M+

3. **What's your payment provider?**
   - Stripe / LemonSqueezy / Polar / Paddle / DodoPayment / RevenueCat / Superwall / Creem / Other

**If the user's prompt already provides enough context, skip directly to the relevant step.** Lead with your best-effort answer and ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to another skill, route with an explicit command:

| User's problem | Route to |
|---|---|
| Choosing which marketplace to list on (not TrustMRR-specific) | `/sales-side-project-valuation {user's question}` |
| Valuing the business (revenue multiples, pricing strategy) | `/sales-side-project-valuation {user's question}` |
| Selling on Acquire.com or Flippa instead | `/sales-acquire {user's question}` or `/sales-flippa {user's question}` |
| Showcasing a side project without selling | `/sales-sideprojectors {user's question}` |

Otherwise, answer from platform knowledge below.

## Step 3 — TrustMRR platform reference

**Read `references/platform-guide.md`** for the full platform reference — payment provider integrations, listing tiers, fee structure, deal flow, API details, stealth mode.

For API-specific questions (endpoints, parameters, responses), also read `references/trustmrr-api-reference.md`.

Answer the user's question using only the relevant section — don't dump the whole reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Pre-listing**: Connect your payment provider (Stripe/LemonSqueezy/Polar/Paddle/DodoPayment/RevenueCat/Superwall/Creem) first. Verified revenue is the platform's only currency — unverified listings don't exist here. Listing the startup in the directory is free. Only pay for marketplace boost tier ($29/$199/$499) if you're actually ready to sell.
- **Listing**: Set asking price based on verified last-30-day revenue × 12 (annualized) × a reasonable multiple (1.5-4x for side projects). TrustMRR shows the multiple publicly, so pricing irrationally high hurts listing performance. Write a concrete seller message — AI filters low-quality offers.
- **Buyer side**: The revenue is pre-verified — that's 80% of typical due diligence already done. Focus DD on customer concentration, churn trend, tech stack transferability, and platform risk. APA-only deals mean no earnouts or installments — price accordingly.
- **During escrow**: Include verifiable asset details (domain URLs, repo links, social handles) in the APA. Escrow.com rejects vague asset descriptions. KYC (Stripe Identity) is optional but speeds up escrow steps.
- **API usage**: Bearer token with `tmrr_*` prefix, 20 req/min hard limit. All monetary values in USD cents. Slug is the primary key — fetch list first, then drill into specific startups by slug.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research — review these, especially items about listing tiers and fee structure that may be outdated.*

- **Revenue verification is mandatory — no exceptions.** Every listing requires a read-only API key from one of the 8 supported payment providers. If you're on a payment provider not supported (Square, Braintree, custom Stripe Connect), you can't list until that changes.
- **APA only, no earnouts or installments.** TrustMRR only supports single lump-sum escrow deals. If you need 50% upfront + 50% after 60 days, structured earnouts, or seller financing, go to Acquire.com or a broker instead. This is a significant constraint for deals over $200K.
- **3% marketplace fee is separate from Escrow.com fees.** The /fees page shows tiered combined fees (5.60% ≤$5K down to 3.70% above $10M) — that's TrustMRR's 3% plus Escrow.com's percentage. Split 50/50 between buyer and seller at closing.
- **Listing tiers are one-time payments for permanent visibility boosts.** Starter $29 is basic listing, Growth $199 gives 5x permanent visibility + newsletter feature, Scale $499 gives 20x + 30-day pinned placement + buyer matching. The boost is permanent unless you unlist.
- **Buyer alerts cost $199/year.** Filter-based or AI-match alerts for new listings. Serious buyers pay; casual buyers don't get notified when new listings match.
- **Up to 30% discrepancy between TrustMRR's numbers and Stripe's dashboard.** Different reconciliation formulas for refunds, trials, and prorations. TrustMRR reconstructs metrics from raw transaction data — expect variance if you cross-check.
- **Stealth mode hides name/logo/website/description but not revenue.** If you need full anonymity before a sale, stealth mode works for pre-contact. Once a buyer makes a qualified offer, you'll need to reveal identity through the APA process.
- **Primary payment provider is fixed per listing.** You can swap API keys within the same provider or attach a secondary provider, but the primary provider chosen at listing creation can't be changed.
- **KYC is optional but speeds up escrow.** Stripe Identity verification unlocks advanced metrics (churn, etc.) and can materially speed up Escrow.com steps that would otherwise stall on identity verification.
- **API rate limit is strict at 20 req/min.** Not ideal for bulk data pipelines. Third-party scrapers exist (Apify) but violate ToS. Use the official API with pagination and caching.

## Related skills

- `/sales-side-project-valuation` — Side project valuation strategy — pricing, revenue multiples, deal structuring, and comparing TrustMRR against Acquire.com, Flippa, Empire Flippers, Microns, Little Exits
- `/sales-acquire` — Acquire.com platform help (curated SaaS marketplace, NDA-gated listings, supports earnouts)
- `/sales-flippa` — Flippa platform help (largest open marketplace, broader asset types, auction format)
- `/sales-sideprojectors` — SideProjectors platform help (free peer-to-peer showcase for non-revenue projects)
- `/sales-startupage` — StartuPage platform help (founder-ecosystem with verified MRR leaderboard + 4-track Opportunities marketplace where acquisition is one of four post types)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Pick a marketplace listing tier for a $40K SaaS
**User says**: "I have a $3K/mo MRR SaaS verified on TrustMRR and want to list it for ~$40K. Which tier should I pick — Starter, Growth, or Scale?"
**Skill does**:
1. Calculates multiple: $40K / ($3K × 12) = 1.1x annualized — reasonable for side-project range
2. Recommends **Growth ($199)** as the sweet spot for $40K asking price — 5x permanent visibility + newsletter feature
3. Notes Starter ($29) is too quiet for this size; Scale ($499) is overkill for <$100K deals (buyer matching matters more at higher prices)
4. Reminds that total transaction fee at $40K will be ~5.40% combined (TrustMRR 3% + Escrow) = $2,160, split 50/50 ($1,080 each)
5. Suggests cross-listing on Acquire.com for additional buyer reach (SaaS-specialized, supports earnouts which TrustMRR doesn't)
**Result**: Tier recommendation with total-cost math and cross-listing suggestion.

### Example 2: Run due diligence on a TrustMRR listing
**User says**: "I'm looking at a TrustMRR listing showing $5K/mo MRR, $150K asking price. What should I verify?"
**Skill does**:
1. Notes the revenue is already pre-verified via payment provider API — biggest due-diligence step is done
2. Calculates multiple: $150K / ($5K × 12) = 2.5x annualized — on the low end of fair for growing side project
3. Lists remaining DD steps: customer concentration (ask seller for top-5 customer revenue share), 6-month churn trend, tech stack transferability (use `revenue.total` vs `revenue.last30Days` to estimate history), platform risk
4. Recommends contacting seller via Contact Seller with detailed offer message (AI filters low-quality offers — detailed ones get delivered faster)
5. Notes APA-only structure — budget for full purchase price in escrow at once, no 50/50 upfront/back-end possible
**Result**: DD checklist tuned to TrustMRR's pre-verified-revenue model.

### Example 3: Compare TrustMRR vs Acquire.com for $250K SaaS
**User says**: "My SaaS is at ~$20K/mo MRR, ~$250K valuation. TrustMRR or Acquire.com?"
**Skill does**:
1. TrustMRR at $250K: Starter $29 or Growth $199, plus ~4.50% combined fee = $11,250 split 50/50 ($5,625 seller cost) + no earnouts possible
2. Acquire.com at $250K: $50/mo listing + 7% closing = $17,500 closing + ~$150-$300 over 3-6 months, earnouts supported
3. Fee math favors TrustMRR by ~$10-12K at this size
4. Recommends **TrustMRR primary** if the deal can be structured as single-payment (common for indie SaaS under $500K)
5. Recommends **Acquire.com primary** if buyer needs earnout flexibility, NDA privacy, or Customer Success Manager guidance
6. Cross-listing is allowed — list on both and manage two inquiry streams
**Result**: Side-by-side fee + structure comparison with clear decision criteria.

## Troubleshooting

### Payment provider verification failed
**Symptom**: Connected Stripe/LemonSqueezy/etc. but revenue not appearing or showing $0
**Cause**: Usually a permissions issue with the read-only API key — some providers scope keys narrowly, or the account has no historical transactions
**Solution**: Regenerate the read-only API key with full read permissions for charges, subscriptions, and customers. For Stripe: use a "Restricted" key with read access on Balance, Charges, Subscriptions, and Customers. Wait up to 1 hour for initial sync — revenue syncs typically run hourly. If still $0 after 2 hours, open support from the dashboard. If your account has no revenue yet (truly pre-revenue), TrustMRR displays $0 as verified — this is expected, not an error.

### Listing has no buyer interest after 60 days
**Symptom**: Listed on TrustMRR at Growth or Scale tier but no serious offers
**Cause**: Price-to-multiple mismatch (your asking price shows a multiple that's out of line with comparable startups) or the listing lacks a compelling seller message
**Solution**: Check your multiple vs comparable listings — TrustMRR displays this publicly, so buyers will skip if your multiple is 5x when similar startups list at 2x. Drop asking price 10%+ to trigger price-drop email notifications to everyone who saved your listing. Rewrite the seller message with concrete growth story, customer acquisition channels, and why you're selling (buyers distrust "moving on to new projects"). Consider Scale tier ($499) if you're not there yet — buyer matching specifically targets saved-interest buyers.

### Escrow.com rejected the APA
**Symptom**: Uploaded signed APA to Escrow.com; they rejected it with "insufficient asset details"
**Cause**: APA contains vague asset descriptions like "the codebase" or "the domain" without URLs, repo links, or specific identifiers
**Solution**: Regenerate the APA (TrustMRR has a legal-docs generator) and list every asset with a verifiable identifier: exact domain names (e.g., `example.com`), GitHub repo URLs, Stripe account email, hosting provider account ID, social account handles, database hosting provider and instance name. Escrow.com's compliance review requires they be able to verify each asset exists and is transferable. Re-upload and resubmit — usually clears on second attempt.
