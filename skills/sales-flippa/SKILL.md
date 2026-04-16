---
name: sales-flippa
description: "Flippa marketplace help — the largest open marketplace since 2009 for buying/selling SaaS, ecommerce, content sites, apps, domains, and social accounts (39,805+ sold). Covers listing packages (Entry $29, Standard $59-$99, Premium $299-$599, Ultimate $499-$699), tiered success fees (10% under $50K down to 3% over $10M), add-ons (NDA $199, legal $199, M&A report $499, private listing $599), $999 brokered service for $100K+ listings, buyer Premium $49/mo and DD reports $1,500-$2,500, OAuth verification above $50K via Stripe/GA/Shopify/Amazon, and FlippaPay/Escrow.com escrow. Use when listing a business on Flippa, auditing a listing for fraud or inflated revenue, picking between Entry/Standard/Premium/Ultimate packages, budgeting the tiered success fee against Acquire.com or Empire Flippers, or preparing financials for the above-$50K auto-verification badge. Do NOT use for cross-marketplace valuation strategy (use /sales-side-project-valuation)."
argument-hint: "[describe what you need help with on Flippa]"
license: MIT
version: 1.0.0
tags: [sales, marketplace, acquisition, saas, ecommerce, platform]
github: "https://github.com/flippa"
---

# Flippa Platform Help

Helps the user with Flippa marketplace questions — from picking a listing package and understanding the tiered fee structure through running due diligence on a listing or responding to scam signals.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Listing a business for sale — package selection, fees, asset category
   - B) Buying a business — due diligence, verification, avoiding scams
   - C) Understanding fees — listing fees, success fees, add-ons, buyer costs
   - D) Deal process — offers, escrow, FlippaPay, transfer
   - E) Comparing Flippa to Acquire.com, Empire Flippers, or FE International
   - F) Something else

2. **If seller — what's your asset?**
   - A) SaaS / app
   - B) Content site / blog
   - C) Ecommerce (Shopify, Amazon FBA, dropship)
   - D) Domain
   - E) Newsletter / social account
   - F) Multiple / bundle

3. **What's the asking price range?**
   - A) Under $10K
   - B) $10K–$50K
   - C) $50K–$250K
   - D) $250K–$1M
   - E) $1M+

**If the user's prompt already provides enough context, skip directly to the relevant step.** Lead with your best-effort answer and ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to another skill, route with an explicit command:

| User's problem | Route to |
|---|---|
| Choosing which marketplace to list on | `/sales-side-project-valuation {user's question}` |
| Valuing the business (revenue multiples, pricing strategy) | `/sales-side-project-valuation {user's question}` |
| Selling a SaaS and deciding between Flippa and Acquire.com | `/sales-acquire {user's question}` — compare Acquire.com side, then come back here for Flippa |
| Showcasing a side project for free (no sale yet) | `/sales-sideprojectors {user's question}` |

Otherwise, answer from platform knowledge below.

## Step 3 — Flippa platform reference

**Read `references/platform-guide.md`** for the full platform reference — listing packages, tiered success fees, add-ons, brokered service, buyer costs, verification, FlippaPay/Escrow integration, and typical timelines.

Answer the user's question using only the relevant section — don't dump the whole reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Pre-listing**: Pick the listing package that fits your asking price and visibility needs. Entry ($29) is for <$10K listings; higher tiers add featured placement, priority, and longer runway. Calculate total cost as listing fee + success fee + any add-ons.
- **Listing**: Connect Stripe/Google Analytics/Shopify/Amazon via OAuth — verified listings above $50K get a "Verified" badge that materially improves inquiry quality. Below $50K, buyers assume self-reported data and discount accordingly.
- **Buyer side**: Never trust screenshots. Insist on live screenshare of payment dashboards and Google Analytics before signing LOI or moving to escrow. Use FlippaPay or Escrow.com — never wire directly.
- **During escrow**: Fund releases can be slow. Keep written records of every communication and escalate via support tickets (not email) for fastest response.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and current pricing.*

- **Verification is conditional.** Flippa auto-verifies revenue and traffic **only for listings priced above $50K**. Below that threshold, revenue/traffic is self-reported and frequently inflated. Buyers must do their own verification.
- **Open marketplace = high noise.** Anyone can list. Expect tire-kickers, low-quality listings, and the occasional outright scam. Budget time for filtering.
- **Tiered success fees reward big deals.** 10% on sub-$50K drops to 3% above $10M. For micro-deals, Flippa is expensive relative to 0%-commission marketplaces like Microns or SideProjectors. For $1M+ deals, it's competitive with Empire Flippers (tiered 2-15%).
- **Listing fees are upfront and non-refundable.** If your listing doesn't sell, you don't get the $29-$699 back. Factor this into cross-listing strategy.
- **The $999 brokered service requires $100K+ asking price.** 9-month term, non-refundable if it doesn't sell. You still pay the success fee on top if it does sell.
- **Screenshots and revenue dashboards can be edited.** Chrome DevTools lets anyone alter displayed numbers. Always demand live screenshare or OAuth-connected verification.
- **Buyer Premium ($49/mo) is optional but unlocks saved searches, alerts, and off-market deal access.** Serious buyers usually pay; tire-kickers don't.
- **FlippaPay and Escrow.com are integrated but not free.** Fees scale with transaction size (typically 0.89%-3.25% of the deal). Compare against the Acquire.com-integrated-free-Escrow.com model.
- **Fund releases can be slow and support is frequently criticized.** If your deal is in escrow and something stalls, escalate via support ticket (not email), keep written records, and prepare to push.

## Related skills

- `/sales-side-project-valuation` — Side project valuation strategy — pricing, revenue multiples, deal structuring, and comparing Flippa against Acquire.com, Empire Flippers, FE International, SideProjectors, 1Kprojects, Microns, Little Exits
- `/sales-acquire` — Acquire.com platform help (curated SaaS marketplace, NDA-gated listings, Escrow.com integration included)
- `/sales-trustmrr` — TrustMRR platform help (verified-revenue marketplace with live payment-provider API verification, APA-only lump-sum deals)
- `/sales-sideprojectors` — SideProjectors platform help (free peer-to-peer showcase, DR69 backlink)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Pick a listing package for a $25K SaaS
**User says**: "I'm listing a SaaS at around $25K on Flippa. Which package should I pick?"
**Skill does**:
1. Notes Entry ($29) is restricted to <$10K listings — not eligible here
2. Recommends Standard ($59-$99) as baseline; Premium ($299-$599) adds featured placement worth it if the category is crowded
3. Calculates total seller cost: listing fee + 10% success fee (under $50K band) = $2,500 success fee at $25K sale, plus listing fee
4. Notes OAuth verification via Stripe is critical — $50K threshold for auto-verification doesn't apply at $25K, but connecting Stripe anyway gives buyers a "verified" signal
5. Suggests cross-listing on Acquire.com (SaaS-specialized, 8% closing at this tier) to compare buyer quality before committing
**Result**: Package recommendation with total-cost math and a cross-listing suggestion.

### Example 2: Run due diligence on a Flippa listing
**User says**: "I'm looking at a content site on Flippa claiming $3K/mo AdSense revenue. How do I verify?"
**Skill does**:
1. Warns: under $50K, Flippa doesn't auto-verify — self-reported data
2. Lists must-do verification steps: live screenshare of AdSense dashboard (not screenshots), Google Analytics read access, Ahrefs/SEMrush traffic cross-check, 12 months of historical data
3. Flags red flags: revenue spike in last 3 months, refusal to screenshare, "I'll share after LOI" objections
4. Recommends insisting on FlippaPay or Escrow.com for payment — never wire directly
5. Notes content site churn = algorithm-risk — ask about recent Google updates and organic traffic trends
**Result**: Verification checklist tuned to AdSense-specific red flags.

### Example 3: Compare Flippa vs Acquire.com fees for $300K SaaS
**User says**: "My SaaS is at ~$300K valuation. Is Flippa or Acquire.com cheaper?"
**Skill does**:
1. Flippa at $300K: 7% success fee = $21,000, plus listing fee (~$99-$599), plus optional add-ons
2. Acquire.com at $300K: $50/mo listing + 7% closing = $21,000 closing + ~$150-$300 of listing fees over 3-6 months
3. Fee math is nearly identical at the $100K-$500K band
4. Recommends Acquire.com for pure SaaS (curated buyers, NDA-gated privacy, free CSM + APA templates)
5. Recommends Flippa if you want broader audience exposure, auction format, or non-SaaS components (content, ecom)
6. Notes cross-listing is allowed on both — but be prepared to manage two inquiry streams
**Result**: Side-by-side fee comparison with recommendation based on business type.

## Troubleshooting

### Listing has been up for 60+ days with no offers
**Symptom**: Listed at asking price, zero serious inquiries after 2 months
**Cause**: Usually price too high for the profile, weak listing content, or wrong asset category for the audience
**Solution**: Drop price 20-30% — the market is telling you the valuation is off. Audit the listing: does it show 12+ months of verified revenue via OAuth connections? Rich description (Flippa says listings with thorough details are 3.5x more likely to sell)? Respond to messages within 24 hours. Verify your phone and government ID — Flippa's algorithm boosts verified sellers. Consider upgrading to Premium listing tier for featured placement if currently on Standard.

### Buyer or seller is pushing to skip FlippaPay/escrow
**Symptom**: Counterparty proposes direct wire transfer "to save fees"
**Cause**: Either inexperience or scam intent — legitimate parties understand escrow protects both sides
**Solution**: Refuse. For any Flippa deal, use FlippaPay or Escrow.com (integrated). Escrow fees (0.89%-3.25%) are a fraction of the risk of irreversible fraud. If the counterparty refuses, walk away — Flippa's most-reported scam pattern is buyers or sellers pressuring for off-platform payment after initial contact.

### Escrow fund release is delayed with no clear reason
**Symptom**: Transaction marked complete by both parties, funds still held in escrow after 7+ days
**Cause**: Flippa escrow delays are a frequently reported support issue — often caused by verification backlogs or unclear transfer evidence
**Solution**: Open a support ticket (not an email) and attach written evidence of completed transfer — DNS records updated, new owner confirmed on Stripe/hosting, any transition artifacts. Keep records of every prior communication. If ticket goes unanswered beyond 5 business days, escalate publicly on Twitter/X (tagging @flippa) — response time materially improves once visible.
