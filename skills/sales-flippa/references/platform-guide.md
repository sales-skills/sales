# Flippa Platform Reference

## Platform overview

Flippa (founded 2009) is the largest open marketplace for buying and selling online businesses and digital assets. As of 2026:

- **39,805+ businesses sold** — billions in cumulative transaction volume
- **SaaS transaction volume surged 73.5% in 2025**
- **No curation barrier** — anyone can list, any asset type
- **Typical deal sizes**: $500–$10M+, sweet spot $5K–$250K
- **Categories**: websites, SaaS, apps (iOS/Android), ecommerce (Shopify, Amazon FBA, dropship), content sites, domains, social (YouTube, Instagram, newsletters), crypto projects, games, plugins, digital agencies

Target audience: full spectrum — beginners seeking sub-$3K acquisitions, mid-market operators buying $50K-$500K SaaS/content businesses, and investors acquiring $1M+ assets.

## Seller side

### Listing packages and fees

Flippa uses **four listing tiers**, all paid upfront and non-refundable:

| Tier | Fee | Eligibility | What it adds |
|---|---|---|---|
| Entry | $29 | Assets under $10K | 60-day listing term, basic platform features |
| Standard | $59–$99 | $10K–$999,999 | Standard visibility |
| Premium | $299–$599 | $10K–$999,999 | Featured placement, wider reach |
| Ultimate | $499–$699 | $10K–$999,999 | Maximum visibility, priority in collections |

Above $1M, sellers typically use the brokered service ($999) or work with a Flippa-assigned M&A broker.

### Seller success fees (tiered)

Paid on closed sale only:

| Sale price | Success fee |
|---|---|
| Under $50,000 | 10% |
| $50,000–$99,999 | 9% |
| $100,000–$249,999 | 8% |
| $250,000–$999,999 | 7% |
| $1,000,000–$4,999,999 | 5% |
| $5,000,000–$9,999,999 | 4% |
| Over $10,000,000 | 3% |

### Optional seller add-ons

| Add-on | Price | When to use |
|---|---|---|
| NDA & Confidentiality | $199 | Sensitive SaaS or proprietary business models |
| Legal templates | $199 | APA / asset purchase templates included |
| M&A analyst report | $499 | Third-party valuation and positioning |
| Private listing | $599 | Off-market — hidden from public search |

### Brokered service

- **Fee**: $999 upfront, 9-month term
- **Eligibility**: Listings priced above $100,000
- **Non-refundable** if the business doesn't sell
- **Success fee still applies** on top if it does sell — brokered listings are not exempt
- **Includes**: Dedicated Flippa broker/advisor managing the sale

### OAuth-connected verification

Flippa integrates with Stripe, Google Analytics, Shopify, Amazon Seller Central, eBay, Etsy, WordPress, PayPal, and Square (via Rutter). Connecting these unlocks:

- **Automatic verification** for listings priced above **$50,000** — data pulled directly, marked with a "Verified" badge
- **Buyer signal** for listings under $50K — still helps, even though no auto-verify badge

Listings below $50K rely on **self-reported data** — the most common source of fraud on the platform.

### What's included for sellers

- Listing creation wizard with category-specific prompts
- Offer management and buyer messaging
- Integrated FlippaPay / Escrow.com for closing
- Transfer assistance documentation
- Access to Flippa Finance (buyer financing marketplace)
- Legal support and broker connection services (some paid)

### Listing workflow

1. **Create listing** — pick category, enter financials, connect OAuth integrations
2. **Pick package** — Entry/Standard/Premium/Ultimate
3. **Optional add-ons** — NDA, legal, M&A report, private listing
4. **Review and publish** — listing goes live (auction or classified format)
5. **Receive offers or bids** — auction-format listings run for 30 days; classifieds run until sold or expired
6. **Negotiate and accept offer** — messaging and offer management in Flippa
7. **Close via FlippaPay / Escrow.com** — funds held until transfer confirmed
8. **Transfer assets** — domain, code, Stripe, hosting, accounts

## Buyer side

### Buyer costs

| Item | Price | What it unlocks |
|---|---|---|
| Free account | $0 | Browse listings, basic inquiries |
| Premium membership | $49/month | Saved searches, deal alerts, off-market listings, priority inquiry |

### Due diligence reports (optional, ordered through Flippa)

| Report | Price | What it covers |
|---|---|---|
| Red Flag Report | $1,500 | High-level risk audit |
| Standard Report | $2,000 | Financial and traffic deep-dive |
| Enhanced Report | $2,500 | Full DD including legal and IP |

### Legal services (via ContractsCounsel)

| Package | Price | What it covers |
|---|---|---|
| Basic | $1,000 | Standard APA review |
| Premium | $2,200 | Full legal engagement, custom terms |

## Escrow and payments

- **FlippaPay**: Native payment rails for smaller deals
- **Escrow.com integration**: Standard for mid-to-large deals; transaction fees typically 0.89%–3.25% of deal value, usually split between buyer and seller
- **Off-platform payment is against ToS** — and is the single most common scam vector on Flippa

## Typical timelines

| Deal size | Typical listing-to-close |
|---|---|
| Under $10K (domain, small site) | 7–30 days |
| $10K–$50K | 30–60 days |
| $50K–$250K | 45–120 days |
| $250K+ (brokered) | 90–180 days |

Verification takes 3–10 days after OAuth connection.

## Integrations (via Rutter)

- **Payment**: Stripe, PayPal, Square
- **Ecommerce**: Shopify, Amazon Seller Central, eBay, Etsy, BigCommerce, WooCommerce
- **Analytics**: Google Analytics
- **CMS**: WordPress
- **Financial**: Stripe for SaaS, QuickBooks (some categories)

These connections are used primarily for listing verification, not as ongoing operational integrations.

## API

Flippa does not publish a public developer API. Third-party services like Apify offer Flippa scraping APIs for research purposes, but there is no documented REST or GraphQL API for programmatic listing creation or management. Partnership and referral programs are managed through Partnerstack (referral) and Commission Junction (affiliate).

## Affiliate and referral programs

- **Affiliate program** (Commission Junction): 30% commission on fees paid by referred buyers and sellers, 120-day cookie
- **Referral program** (Partnerstack): 20% on fees paid by referrals within 12 months of signup, 1:1 referral link
- Payouts via PayPal or Stripe, monthly

## Verification methodology

For $50K+ listings, Flippa runs these automated checks:

- **Revenue**: OAuth Stripe/PayPal/Amazon/Shopify for 12-month revenue history
- **Traffic**: OAuth Google Analytics for 12-month traffic data
- **Ownership**: Domain registrar verification, hosting records

Listings that pass all three checks get a "Verified" badge that materially increases serious-buyer inquiries. Without the badge, buyers assume the data is self-reported and discount their offers accordingly.

## Deep dives

### Auction vs classified format

- **Auction**: 30-day countdown, bids are public, highest bidder at close wins (if reserve met). Creates urgency but risks no-bid outcome.
- **Classified**: Listing stays up indefinitely, offers made privately, seller accepts or counters. More control but slower.

Choose auction for commodity assets (domains, starter sites) where competitive bidding drives price. Choose classified for SaaS and larger deals where negotiation matters more than auction urgency.

### Fraud and scam patterns (buyer-side)

- **Inflated revenue screenshots** — sellers edit dashboard HTML in Chrome DevTools
- **Bot traffic** — paid traffic services, click farms inflate visitor counts
- **Recent revenue spike** — 3-month sprint of ad spend to boost listing
- **Refusal to screenshare** — biggest single red flag
- **"I'll share the details after LOI"** — delay tactic to hide problems
- **Off-platform payment pressure** — #1 scam pattern

Verified listings ($50K+) are substantially safer but not immune — still do independent verification.

### When to use the brokered service

- Deal size **$100K+** (below that, fee math doesn't work)
- **Limited time** to manage inquiries and negotiation
- **Complex deal structure** — earnouts, seller financing, multi-party
- **No broker relationship** established elsewhere

At $999 + 7-10% success fee, a brokered Flippa deal is roughly comparable to Empire Flippers' 15% commission on first $700K. Compare value of Flippa's self-serve audience with Empire Flippers' curated buyer base before committing.

## Sources

- Main pricing page: https://flippa.com/pricing
- Pricing changes blog: https://flippa.com/blog/pricing-changes/
- Fee breakdown (third-party): https://investors.club/flippa-fees/
- Referral program: https://flippa.com/referral-program/
- Rutter integration case study: https://www.rutter.com/case-studies/flippa

*Pricing, fees, and policies change — verify against live Flippa pages before committing to a listing strategy.*
