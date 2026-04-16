# Acquire.com Platform Reference

## Platform overview

Acquire.com (formerly MicroAcquire, rebranded March 2023) is a curated startup-acquisition marketplace focused on bootstrapped SaaS businesses. As of 2026:

- **500K+ verified users** (buyers + sellers)
- **$2B+ in verified buyer funds** (buyers submit proof-of-funds to unlock listings)
- **$500M+ in closed deal volume**
- **2,000+ completed acquisitions**
- Typical deal size: **$100K–$5M**, sweet spot **$250K–$1M**

Target audience: bootstrapped SaaS founders selling; operators, solo buyers, search funds, and PE/holding companies on the buy side. Curation is SaaS-leaning — agencies, content sites, and ecommerce sometimes list but are not the core fit.

## Seller side

### Listing eligibility

Acquire.com accepts:
- SaaS (primary)
- Micro-SaaS
- Mobile apps (app-store SaaS)
- Some productized services with recurring revenue

Acquire.com rejects or sends to "exploratory" tier:
- Pure content sites (→ Flippa / Empire Flippers)
- Dropshipping and ecommerce with no SaaS component (→ Flippa)
- Agencies without a recurring product (→ FE International)

### Seller pricing (since April 17, 2024)

| Asking price | Monthly listing fee | Closing commission |
|---|---|---|
| <$100K | $25 / month | 8% |
| $100K–$500K | $50 / month | 7% |
| $500K+ | $100 / month | 6% |

Before April 17, 2024, listing and closing were both free for sellers. This is the most common misconception — any article pre-April 2024 that says "Acquire.com is free for sellers" is out of date.

### What's included for sellers

- **Free Escrow.com integration** for the closing transaction (no separate escrow fee)
- **Free Customer Success Manager** — assigned after listing, scales with deal size
- **APA (asset purchase agreement) templates** — asset sale default
- **Data room template** — standard DD checklist
- **Buyer verification** — all buyers must pass identity/funds verification to unlock the full listing

### Listing workflow

1. **Create listing** — business details, metrics, asking price, TTM financials
2. **Set privacy** — public (name visible) or blind (anonymous until NDA)
3. **Get verified** — seller identity check
4. **Publish** — appears in marketplace; listing fee starts billing
5. **NDA management** — buyers request access; you approve or decline
6. **Buyer conversations** — in-platform messaging
7. **LOI received** — buyer submits written offer
8. **Accept LOI** — enter due diligence phase
9. **Data room shared** — P&L, analytics, Stripe, code access
10. **APA negotiation** — usually based on Acquire.com template
11. **Escrow opened** — funds held by Escrow.com
12. **Close** — assets transfer, funds release

### Deal stage reality checks

- **NDA → LOI conversion**: typically 5-15% of NDAs lead to an LOI. Most NDAs are browsing.
- **LOI → Close conversion**: 50-70% of signed LOIs close. The rest fall through to buyer financing, DD surprises, or buyer cold feet.
- **Time from listing to close**: 3-6 months is typical. Outliers: 30 days (strong match, clean data) to 12+ months (hard-to-sell business or high asking price).
- **Time from LOI to close**: 30-90 days. APA negotiation is the slowest phase for first-time sellers.

## Buyer side

### Buyer plans

| Plan | Price | Key features |
|---|---|---|
| Basic | Free | Browse marketplace, submit NDAs, limited listing access |
| Premium | $390 / year | Full listing access up to $250K TTM revenue, priority on NDAs, exportable deal data |
| Platinum | $780 / year | All listing sizes (no TTM cap), priority support, earlier access to new listings, advanced filters |

Signals for sellers: a buyer on Platinum is more likely committed than a Basic account. Premium is a reasonable filter for mid-market listings.

### Verification

All buyers must submit proof of funds (bank screenshot, statement, or comparable). This is what produces the "$2B+ in verified funds" statistic.

## Integrations and support

### Escrow.com

Built-in — free for deals closed through Acquire.com. Escrow.com is a licensed escrow service; funds are held until both parties confirm asset transfer. This is a material safety feature vs. peer-to-peer marketplaces with no escrow.

### Customer Success team

Assigned post-listing. Scope:
- Helps structure the listing
- Reviews asking price for sanity
- Provides APA and data room templates
- Can escalate buyer responsiveness
- Cannot give tax or legal advice (this is the seller's accountant/lawyer)

### M&A Broker Partnership Program

For listings over $1M or complex deals (share sales, multi-entity), Acquire.com can refer to partner M&A advisory firms (FE International, Quiet Light Brokerage, etc.). Sellers pay broker commission separately.

### Referral / affiliate program

Acquire.com runs a **25% closing-fee referral program**: if you refer a seller who closes, you get 25% of Acquire.com's closing commission on that deal. This is one of the highest referral rates in the SaaS marketplace category.

## API

Acquire.com has **no public API**. The `developer.acquired.com` domain is an unrelated payments company (Acquired.com, not Acquire.com) — do not confuse the two.

## Common workflows

### Workflow 1: List a $50K ARR SaaS

1. TTM revenue: ~$50K → asking price band typically $150K–$200K (3-4x ARR for profitable, low-churn SaaS)
2. Listing fee: $50 / month (since asking is $100K–$500K)
3. Prepare before listing: 24 months P&L, Stripe export, GA4 access, churn table
4. Publish as "public" unless a customer concentration issue requires blind
5. Expect 5-20 NDAs in first 30 days, 0-2 LOIs by day 60
6. If no LOI by day 90: review asking price, listing copy, or cross-list on Flippa

### Workflow 2: Negotiate buyer's LOI

1. Acquire.com's default LOI is non-binding except for exclusivity (30-60 days typical)
2. Key LOI clauses: price, structure (asset vs share), earnout, exclusivity period, transition support
3. Push back on exclusivity longer than 60 days — it parks your business
4. Get tax/legal advice before signing — especially on asset vs. share structure
5. Accept LOI → enter DD → data room shared

### Workflow 3: Survive due diligence

1. Buyer typically asks for: financials, code repo access (read-only), hosting logins, top-10 customer list, churn cohorts, support ticket volume, roadmap
2. Use a data room tool (Docsend, Google Drive with tracked access) — do not email attachments
3. Respond within 24-48 hours; slow responses are the #1 cause of deals dying in DD
4. Common DD findings that renegotiate price: higher-than-stated churn, undisclosed liabilities, key-person dependency
5. If the buyer goes quiet 7+ days, send one direct message; if still quiet, keep marketing the listing

## Deep dives

### Realized multiples (from Acquire.com public case studies, 2024-2025)

- **Pre-revenue / MVP**: $5K–$50K (hard to sell, usually asset-only)
- **<$1K MRR SaaS**: $10K–$30K (roughly 1-2.5x ARR)
- **$1K–$5K MRR SaaS**: $30K–$150K (2.5-3.5x ARR)
- **$5K–$20K MRR SaaS**: $150K–$800K (3-4x ARR, depending on growth and churn)
- **$20K–$100K MRR SaaS**: $800K–$5M (3-5x ARR, low churn + growth gets premium)
- **$100K+ MRR SaaS**: $5M+ (5-7x ARR, approaches private-SaaS broker territory)

These are back-of-envelope — Customer Success can provide deal-specific comparables.

### Asset sale vs. share sale

| | Asset sale (default APA) | Share sale |
|---|---|---|
| What transfers | Code, domain, customers, assignable contracts | The legal entity itself |
| Seller tax | Usually higher (income treatment for some assets) | Usually lower (capital gains if qualifying) |
| Buyer liability | Clean slate — no historical liabilities | Inherits all liabilities (tax, legal, employee) |
| Complexity | Lower — template APA works | Higher — requires corporate counsel |
| When used | Most deals under $500K | Larger deals, tax-motivated sellers, jurisdiction-specific |

Don't decide this without your accountant. Acquire.com cannot advise on this.

### Cross-listing strategy

Acquire.com allows cross-listing on other marketplaces. Considerations:
- **Flippa**: Broader audience, auction format can drive competitive bidding — but lower buyer quality on average
- **Empire Flippers**: Curated, slower to list (weeks of vetting), better for $250K+ deals
- **FE International**: Brokered only (10-15% commission), for $500K+ deals with complexity

If cross-listing, disclose it to the Customer Success Manager on Acquire.com — not required but builds trust for escalations.
