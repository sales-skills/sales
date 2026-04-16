---
name: sales-acquire
description: "Acquire.com marketplace help — the curated startup acquisition marketplace (formerly MicroAcquire) with 500K+ verified buyers, $2B+ in verified funds, and $500M+ in closed deal volume. Covers seller listing setup and tier selection, buyer plan comparison (Basic/Premium/Platinum), monthly listing fees and closing commissions (8%/7%/6% sliding by deal size), NDA workflow, LOI and asset purchase agreement templates, Escrow.com integration, customer success manager support, and timeline expectations for SaaS exits. Use when listing a bootstrapped SaaS for sale, deciding between Acquire.com and Flippa or Empire Flippers, figuring out if your MRR qualifies for the platform, preparing a data room for due diligence, reviewing a buyer's LOI, or understanding the new seller fee structure introduced in April 2024. Do NOT use for side project valuation strategy across marketplaces (use /sales-side-project-valuation) or selling content sites/ecommerce stores (use Flippa or Empire Flippers)."
argument-hint: "[describe what you need help with on Acquire.com]"
license: MIT
version: 1.0.0
tags: [sales, marketplace, saas, acquisition, exit, platform]
---
# Acquire.com Platform Help

Helps the user with Acquire.com marketplace questions — from deciding whether to list and which plan to use through preparing a data room, managing the NDA/LOI workflow, and closing via Escrow.com.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Listing my SaaS for sale — eligibility, pricing, listing copy
   - B) Buyer plan selection — Basic / Premium / Platinum
   - C) Understanding fees — monthly listing fees, closing commission
   - D) Due diligence — data room, metrics, what buyers ask for
   - E) Deal process — NDA, LOI, APA, escrow, timeline
   - F) Comparing Acquire.com to Flippa, Empire Flippers, or FE International
   - G) Something else

2. **If seller — what's your business?**
   - A) Pre-revenue / MVP
   - B) <$5K MRR (~$60K ARR)
   - C) $5K–$20K MRR ($60K–$240K ARR)
   - D) $20K–$100K MRR ($240K–$1.2M ARR)
   - E) $100K+ MRR

3. **Where are you in the process?**
   - A) Researching whether to sell
   - B) Ready to list, haven't started
   - C) Listed, haven't reached NDA
   - D) Under NDA with buyer(s), no LOI
   - E) Have LOI, in due diligence
   - F) In APA negotiation / closing

**If the user's prompt already provides enough context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to another skill, route with an explicit command:

| User's problem | Route to |
|---|---|
| Choosing which marketplace to list on | `/sales-side-project-valuation {user's question}` |
| Valuing the business (revenue multiples, pricing strategy) | `/sales-side-project-valuation {user's question}` |
| Selling a content site or ecommerce store (not SaaS) | `/sales-side-project-valuation {user's question}` — it covers Flippa/Empire Flippers |
| Showcasing or finding a co-founder for a side project | `/sales-sideprojectors {user's question}` |

Otherwise, answer from platform knowledge below.

## Step 3 — Acquire.com platform reference

**Read `references/platform-guide.md`** for the full platform reference — buyer tiers, seller fees, deal stages (listing → NDA → LOI → DD → APA → escrow), Customer Success team, M&A broker partnership, and timeline data.

Answer the user's question using only the relevant section — don't dump the whole reference.

## Step 4 — Actionable guidance

Provide guidance based on the user's stage:

- **Pre-listing**: Verify TTM MRR eligibility against the current cutoffs, check data readiness (Stripe/Google Analytics/P&L), set an asking price grounded in Acquire.com's realized multiples.
- **Listing**: Pick the seller tier that matches the asking price (monthly fee scales with price band). Write for Acquire.com's audience — bootstrapped operators, not VCs.
- **NDA/LOI stage**: Expect a high NDA-to-LOI drop-off. Pre-qualify buyers by plan tier (Premium/Platinum implies serious intent). Don't share the data room before NDA.
- **DD/APA**: Use Acquire.com's free APA templates and Customer Success Manager. Budget 60-90 days from LOI to close; longer for asset-over-$250K or share deals.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and current pricing.*

- **Seller fees changed April 17, 2024.** Pre-April 2024 listings were free; Acquire.com now charges a monthly listing fee ($25/$50/$100 by asking price tier) plus a closing commission (8%/7%/6% sliding based on asking price band). Anything written before April 2024 about "free to list" is outdated.
- **Platform is SaaS-focused by curation, not contract.** Non-SaaS listings (agencies, content sites, ecommerce) sometimes get in but are the exception. If it's not SaaS, Flippa or Empire Flippers is usually a better fit.
- **Low LOI conversion is normal.** NDA signatures are cheap; most NDAs do not lead to an LOI. Don't interpret NDA volume as acquisition momentum.
- **Ghosting during due diligence is extremely common.** Bootstrapped buyers underestimate the work. Keep marketing the listing until APA is signed.
- **Asset purchase vs. share purchase is a tax issue for the seller, not a checkbox.** Default APA is assets-only; if the buyer wants shares, get an accountant before the LOI.
- **Escrow.com is integrated and free for both parties** on any deal closed through Acquire.com. Using outside escrow is allowed but forfeits Customer Success support.
- **Verified funds ≠ verified decision to buy.** $2B+ in aggregate verified funds is pool size, not an indicator that your specific listing will get offers.
- **Customer Success Managers are free but not unlimited attention.** They scale with deal size; sub-$50K deals get less hand-holding.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-side-project-valuation` — Side project valuation strategy — pricing, revenue multiples, deal structuring, and comparing Acquire.com against Flippa, Empire Flippers, FE International, SideProjectors, 1Kprojects, Microns, Little Exits
- `/sales-sideprojectors` — SideProjectors platform help (free listing, no commission, co-founder matching, DR69 backlink)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Decide whether to list on Acquire.com vs Flippa
**User says**: "I have a $8K MRR B2B SaaS. Should I list on Acquire.com or Flippa?"
**Skill does**:
1. Notes $8K MRR ($96K ARR) sits in the core Acquire.com zone (most buyers are $100K–$500K deal size)
2. Acquire.com pros: SaaS-specialized, verified buyers, free Escrow.com, free CSM, templates
3. Flippa pros: broader audience, auction mechanic for competitive bidding, faster initial discovery
4. Recommends Acquire.com for a B2B SaaS at that MRR; suggests cross-listing only if Acquire is cold after 60 days
5. Warns about current fee structure — $50/mo listing + 7% closing at the $100K–$500K band
**Result**: Recommendation with rationale and a 60-day decision point

### Example 2: Prepare for due diligence
**User says**: "I signed an LOI yesterday. What does the buyer want for DD?"
**Skill does**:
1. Walks through the standard Acquire.com data room: P&L for 24 months, Stripe/payment processor export, Google Analytics read access, churn cohorts, top-10 customer concentration, code repo access plan, hosting/domain registrar list
2. Warns: DD often slips 2-4 weeks beyond LOI timeline
3. Notes what Acquire.com's Customer Success can help with (templates) vs. what it can't (tax structure, jurisdiction-specific contract terms)
4. Suggests preparing a one-page "why this business" summary for the buyer to get their team on board
**Result**: Data room checklist and timeline expectations

### Example 3: Understand new seller fees
**User says**: "Someone told me Acquire.com is free for sellers. Is that right?"
**Skill does**:
1. Corrects — since April 17, 2024, Acquire.com charges sellers (it was free before)
2. Breaks down current fees: monthly listing fee ($25/$50/$100) plus closing commission (8%/7%/6%) sliding by asking price band
3. Compares against Flippa (fixed 5-15% success fee) and Empire Flippers (tiered 2-15%)
4. Notes that Escrow.com and Customer Success are still included at no extra cost
**Result**: Correct fee understanding with a like-for-like comparison

## Troubleshooting

### Listing gets NDAs but no LOIs
**Symptom**: 10+ NDAs signed, zero written offers
**Cause**: NDA signatures are cheap — many buyers sign to browse financials, not to buy. Listings priced above realized multiples for similar MRR also filter out serious buyers.
**Solution**: Check your asking price against Acquire.com's public "Recent Deals" or comparable closed listings. If priced above 4x ARR for a <$50K MRR SaaS, expect low LOI conversion. Consider a price drop after 45-60 days or open the listing to offers below asking. The Customer Success team can provide a valuation sanity-check.

### Buyer goes quiet mid due diligence
**Symptom**: LOI signed, data room shared, buyer hasn't replied in 10+ days
**Cause**: Bootstrapped buyers often underestimate DD workload or lose financing/nerve. Ghosting at this stage is one of the most-reported complaints on Acquire.com.
**Solution**: Send one direct message asking for a status update and a DD checklist. If no reply within 5 days, keep the listing marketed — LOIs are non-binding on Acquire.com. Ask Customer Success to escalate if the buyer is Premium/Platinum (higher commitment signal).

### Can't decide between asset sale and share sale
**Symptom**: Buyer wants a share sale; you only know asset sales exist
**Cause**: Acquire.com's default APA is an asset purchase. Share purchase has different tax and liability implications for both parties.
**Solution**: Do NOT sign the LOI before talking to an accountant in your jurisdiction. Asset sales usually reset depreciation and avoid seller-held liabilities; share sales can be more tax-efficient for the seller but transfer all liabilities to the buyer. Acquire.com's Customer Success team cannot give tax advice — get a CPA or solicitor for this decision.
