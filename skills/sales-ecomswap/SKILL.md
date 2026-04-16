---
name: sales-ecomswap
description: "Ecomswap platform help — boutique sell-side M&A brokerage for profitable Shopify, Amazon FBA, DTC, SaaS, newsletter, and content-site founders, with curated private listings, a 50K+ verified buyer network, free confidential valuation, and end-to-end LOI-to-close support. Use when selling a profitable ecommerce or Shopify business above the $200K net-profit floor, deciding between a self-serve marketplace (Acquire.com, Flippa) and a full-service broker, preparing for a broker-led confidential valuation, understanding the SDE-based profit-multiple methodology Ecomswap uses, figuring out how the curated buyer-sourcing process works, or comparing Ecomswap against Empire Flippers, FE International, Quiet Light, and Motion Invest. Do NOT use for cross-marketplace selection strategy (use /sales-side-project-valuation)."
argument-hint: "[describe what you need help with on Ecomswap]"
license: MIT
version: 1.0.0
tags: [sales, marketplace, ecommerce, shopify, acquisition, exit, platform]
---
# Ecomswap Platform Help

Helps the user with Ecomswap questions — from deciding whether Ecomswap is the right fit for a profitable ecommerce exit through preparing for the free valuation call, qualifying under the $200K net-profit floor, navigating the curated buyer-matching process, and working through the LOI-to-close workflow.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Eligibility — does my business qualify for Ecomswap's $200K profit floor?
   - B) Valuation — how does Ecomswap calculate the SDE / profit multiple?
   - C) Process — how does the free valuation call and buyer-sourcing work?
   - D) Comparing Ecomswap to Acquire.com, Flippa, Empire Flippers, FE International, or Quiet Light
   - E) Preparing for LOI / due diligence / escrow
   - F) Asset type fit — Shopify vs Amazon FBA vs SaaS vs Newsletter vs Content
   - G) Something else

2. **What's your business profile?**
   - A) Pre-$200K net profit (likely below Ecomswap's floor)
   - B) $200K–$500K net profit TTM (Ecomswap sweet spot, lower end)
   - C) $500K–$2M net profit TTM (core range)
   - D) $2M–$5M EBITDA (top of Ecomswap's stated range)
   - E) $5M+ EBITDA (Ecomswap may refer to larger-deal brokers)

3. **Where are you in the process?**
   - A) Researching — haven't engaged Ecomswap yet
   - B) Requested free valuation, awaiting call
   - C) Signed engagement, pre-listing
   - D) Listed — Ecomswap is sourcing buyers
   - E) In buyer conversations / offer negotiation
   - F) LOI signed, working toward close

**If the user's prompt already provides enough context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to another skill, route with an explicit command:

| User's problem | Route to |
|---|---|
| Choosing which marketplace/broker to use | `/sales-side-project-valuation {user's question}` |
| Valuation strategy, deal structuring, earnouts vs cash | `/sales-side-project-valuation {user's question}` |
| Self-serve SaaS acquisition marketplace | `/sales-acquire {user's question}` |
| Open auction marketplace (Flippa) | `/sales-flippa {user's question}` |
| Verified-revenue indie SaaS marketplace | `/sales-trustmrr {user's question}` |

Otherwise, answer from platform knowledge below.

## Step 3 — Ecomswap platform reference

**Read `references/platform-guide.md`** for the full platform reference — eligibility and asset types, SDE-based valuation methodology, free valuation workflow, curated buyer network, deal stages (valuation → approval → buyer sourcing → close), timeline, and comparison against other brokers.

Answer the user's question using only the relevant section — don't dump the whole reference.

## Step 4 — Actionable guidance

Provide guidance based on the user's stage:

- **Pre-engagement**: Verify the business clears $200K net profit TTM and has 1.5+ years of operating history. If below the floor, redirect to `/sales-side-project-valuation` for a marketplace fit. If above, the free confidential valuation is low-risk to request.
- **Post-valuation / pre-listing**: Ecomswap works on an advisory model — expect a success-fee engagement (terms negotiated privately; fees are not publicly disclosed). Get the engagement letter in writing and compare fee structure against Empire Flippers (tiered 2.5%–15%) and FE International (10–15% commission).
- **Active listing**: Ecomswap sources buyers privately rather than publishing an open listing. Expect 30-day advertised buyer-sourcing window. If no offers by day 45, push for a pricing review.
- **LOI/close**: Ecomswap handles legal docs, escrow, and asset transfer. Don't sign the LOI before your own accountant reviews tax implications of SDE-based valuation and asset vs share structure.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about fees and process details that Ecomswap does not publicly disclose.*

- **Fees are not publicly disclosed.** No pricing page, no FAQ disclosure, no public fee tier. Ecomswap positions itself as "in the middle" between Empire Flippers (15%/8%/2.5% tiered) and FE International (10–15% commission) in their own blog — implying a commission-based success fee, likely with a retainer component. Always get the engagement letter in writing before committing.
- **$200K net-profit floor is enforced, not aspirational.** Businesses below this threshold are unlikely to be accepted. Under $200K net profit → Acquire.com, Flippa, or Microns are better fits.
- **SDE, not EBITDA, is the valuation base.** SDE = net profit + owner's salary + discretionary addbacks. This matters because "3x multiple on SDE" ≠ "3x multiple on EBITDA" — SDE is a larger number for founder-operated businesses. Don't confuse these.
- **Private curated listings, not a public marketplace.** Buyers are sourced from Ecomswap's network — there's no public listing page to browse, no open auctions, no tire-kicker traffic. This is a feature for sellers worried about customer/competitor discovery, but means you don't get the "broad market signal" of a Flippa listing.
- **Shopify-centric asset mix.** Primary asset types: Shopify stores, Amazon FBA, DTC ecom. Secondary: SaaS, newsletters, content sites, monetized YouTube. WooCommerce and BigCommerce are not explicitly named — ask before engaging if that's your stack.
- **Advertised 93% close rate and <2 month time-to-exit are marketing figures, not independently verified.** They refer to deals that reach LOI, not listings. Listing-to-LOI conversion is a separate (undisclosed) number.
- **No public API, no developer surface, no GitHub.** This is a human-operated advisory, not a self-serve platform. Everything flows through the M&A team.
- **No affiliate/referral program exists.** Unlike Acquire.com's 25% closing-fee referral, Ecomswap has no public partner program.
- **Thin third-party review footprint.** No Trustpilot page, no Reddit discussion, limited outside validation beyond Quora/Glassdoor. Ask for references from closed deals before signing an engagement.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-side-project-valuation` — Side project and ecommerce valuation strategy — pricing, revenue multiples, deal structuring, and comparing Ecomswap against Acquire.com, Flippa, Empire Flippers, FE International, Quiet Light, Motion Invest
- `/sales-acquire` — Acquire.com platform help (self-serve curated SaaS marketplace, 500K+ verified buyers, $25-$100/mo listing + 6-8% closing)
- `/sales-flippa` — Flippa platform help (open marketplace for SaaS + content + ecom + domains, tiered listing packages $29-$699, 3-10% success fees)
- `/sales-trustmrr` — TrustMRR platform help (verified-revenue marketplace with live payment-provider API verification, APA-only lump-sum deals)
- `/sales-sideprojectors` — SideProjectors platform help (free showcase, no commission, pre-revenue and abandoned projects)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Decide between Ecomswap and Empire Flippers
**User says**: "I have a Shopify store doing $400K/yr net profit. Should I use Ecomswap or Empire Flippers?"
**Skill does**:
1. Confirms the business clears both platforms' floors (Ecomswap $200K net profit; Empire Flippers $2K/mo net profit ~$24K/yr)
2. Notes Ecomswap: boutique advisory, curated private listings, fees undisclosed (implied 8-12% range), SDE-based profit-multiple methodology, Shopify specialty
3. Notes Empire Flippers: productized vetting, fixed asking-price format, tiered 15%/8%/2.5% success fee, broader asset types
4. Recommends Ecomswap if the seller wants hand-holding + private discretion + SDE-based valuation; Empire Flippers if the seller wants transparent fees, faster listing process, and a productized experience
5. Suggests requesting free valuations from both — costs nothing and reveals each broker's pricing approach

### Example 2: Qualifying under the $200K profit floor
**User says**: "My Shopify store does $1.2M revenue but only $140K net profit. Will Ecomswap take me?"
**Skill does**:
1. Notes $140K net profit is below Ecomswap's $200K TTM net-profit floor
2. Explains SDE could push this above the floor: if the owner pays themselves $80K salary → SDE ≈ $220K (above floor)
3. Suggests running the SDE calculation before ruling out Ecomswap — the floor is on profit/SDE, not net profit alone
4. If SDE is still <$200K: redirects to Acquire.com (SaaS focus), Flippa (open marketplace), or Empire Flippers ($24K/yr floor) via `/sales-side-project-valuation`

### Example 3: Understanding the buyer-sourcing process
**User says**: "How does Ecomswap actually find buyers for my store?"
**Skill does**:
1. Explains Ecomswap's buyer network: 50K+ pre-qualified investors, $2B+ aggregate capital, proof-of-funds required to join
2. Clarifies listings are private/curated — buyers are matched, not public-listed
3. Advertised workflow: free valuation → engagement → team actively presents the business to shortlisted buyers → NDAs → LOI → DD → close
4. Advertised 30-day window to competitive offers; <2 months typical from LOI to close
5. Notes the trade-off: no broad-market signal (vs Flippa), but no customer/competitor discovery risk and no tire-kicker inquiries

## Troubleshooting

### Free valuation is scheduled but I'm worried about sharing financials
**Symptom**: Ecomswap is asking for P&L + Stripe/Shopify screenshots before the valuation call
**Cause**: The valuation requires TTM financial data to compute SDE and a profit multiple
**Solution**: Ask for a mutual NDA before sharing any financials — this is standard for boutique brokerages. Share high-level P&L (top-line, COGS, opex, owner's salary) without granular customer/transaction data for the first call. Granular data room access comes after the engagement letter is signed, not before.

### Ecomswap's proposed valuation is lower than I expected
**Symptom**: The free valuation came back at 2.5x SDE when you expected 4x+
**Cause**: Ecomswap grounds valuations in realized comparable deals from their network — not published multiples. SDE multiples for Shopify/ecom are typically 2.5-3.5x, lower than SaaS multiples (3-5x).
**Solution**: Ask Ecomswap for 3-5 recent comparable closed deals (same asset type, similar size) — reputable brokers provide this. If the multiple still seems low, get a second opinion from Empire Flippers or Quiet Light (also free initial valuations). Don't anchor on headline public-SaaS multiples — ecommerce trades at a discount to SaaS.

### No offers after 30 days on Ecomswap's buyer-sourcing window
**Symptom**: Ecomswap's advertised 30-day window passed, zero qualified offers
**Cause**: Asking price above realized comparables, weak buyer-pitch materials, or seasonal buyer demand dip
**Solution**: Ask for a formal pricing review with the M&A team. Request the list of buyers contacted and their feedback — a good broker shares buyer objections anonymously. If the engagement is exclusive, push to cross-list on Acquire.com or Flippa at day 60-90 (check engagement-letter exclusivity terms — boutique brokers typically require 6-12 month exclusivity).
