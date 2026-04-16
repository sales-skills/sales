# TrustMRR Platform Reference

## Platform overview

**TrustMRR** is a verified-revenue startup database + acquisition marketplace built by Marc Lou (ShipFast/CodeFast/DataFast creator), launched October 28, 2025. Positions itself as "The $1.2B marketplace of verified startup revenues."

**Unique differentiator**: Revenue is verified through live read-only API connections to payment providers, updated hourly. No screenshots, no self-reported numbers — if it's on TrustMRR, it's verified.

**Target audience**: Indie hackers, bootstrapped SaaS founders, micro-SaaS builders, solopreneurs. Typical deal size $5K-$500K. Works for $0-$10M+ but the natural audience skews micro.

**Key features**:
- Verified revenue directory (30+ categories, hourly-updated revenue metrics)
- Acquisition marketplace (APA-only, single lump-sum escrow)
- Founder profiles at `trustmrr.com/founder/{xHandle}`
- Co-founder matching for early-stage startups
- Open Revenue feed (verified "I made $X" posts from founders)
- Leaderboard of top startups by verified revenue
- AI-generated startup insights (value prop, target audience, pricing model)
- Embeddable verified-revenue badge
- Public REST API for developers

## Supported payment providers

Revenue verification works with these read-only API integrations:

| Provider | Notes |
|----------|-------|
| Stripe | Most common; supports advanced metrics (churn) after KYC |
| LemonSqueezy | Merchant-of-record; common for indie SaaS |
| Polar | Open-source commerce platform |
| Paddle | Merchant-of-record alternative |
| DodoPayment | Indie-friendly payment processor |
| RevenueCat | For mobile app subscriptions |
| Superwall | For mobile paywall revenue |
| Creem | Newer indie-focused processor |

**Not supported**: Square, Braintree, custom Stripe Connect, manual/bank-transfer revenue, PayPal standalone. If you use one of these, you can't list until TrustMRR adds support.

**Primary provider is fixed at listing creation.** You can:
- Update the API key within the same provider
- Attach a **secondary** provider to combine revenue sources
- Not switch the primary provider

## Listing the startup (directory only)

1. Click "Add startup" on the homepage
2. Connect a supported payment provider with a read-only API key
3. Revenue verification runs automatically (typically within 1 hour)
4. Complete profile: name, description, website, logo, category, tech stack, country, founded date, X handle, target audience (b2b/b2c/both)
5. Optionally enable "Stealth mode" to hide name/logo/website/description (revenue still displayed)
6. Optionally enable "Looking for a co-founder" (mutually exclusive with "On sale")

**Cost**: Free. No fee to list or maintain a directory listing.

**Claimed existing listings**: If your startup is already on TrustMRR (someone added it), you can claim it via the startup page using payment provider verification.

## Marketplace listing tiers

Separate from the directory listing — these apply when you toggle "On sale" and set an asking price.

| Tier | Price | Includes |
|------|-------|----------|
| **Starter** | $29 (one-time) | Basic marketplace listing |
| **Growth** | $199 (one-time) | 5x permanent visibility boost + custom card color + newsletter feature |
| **Scale** | $499 (one-time) | 20x permanent visibility + custom card color + newsletter feature + buyer matching + 30-day pinned placement |

**One-time payments for permanent boosts** (lifetime of the listing). Unlist and relist doesn't reset the boost.

**Required fields to list**: verified revenue (payment provider connection), asking price, profit margin (last 30 days). Optional: seller message, contact email.

**Anonymous marketplace listing**: Enable Stealth mode to hide name/website/description while keeping revenue publicly verified. Buyers can still submit offers.

**Price drop notification**: When you drop asking price by 10%+, all buyers who saved your listing get an email alert. Use this strategically — it's a free re-engagement push.

## Transaction fees

Two ways to think about fees:

**TrustMRR's own statement**: "3% marketplace fee, plus Escrow.com fees. Fees split 50/50 between buyer and seller."

**Combined tiered fee table from /fees** (TrustMRR 3% + Escrow.com):

| Deal Size | Combined Fee |
|-----------|--------------|
| $0 - $5,000 | 5.60% |
| $5,001 - $50,000 | 5.40% |
| $50,001 - $200,000 | 4.90% |
| $200,001 - $500,000 | 4.50% |
| $500,001 - $1,000,000 | 4.20% |
| $1,000,001 - $3,000,000 | 4.00% |
| $3,000,001 - $5,000,000 | 3.95% |
| $5,000,001 - $10,000,000 | 3.90% |
| $10,000,001+ | 3.70% |

Fees are paid at closing through escrow — no invoicing or separate billing. Split 50/50 between buyer and seller.

**Buyer alerts subscription**: $199/year (separate). Unlocks filter-based or AI-match alerts when new listings match criteria. Without subscription, buyers must manually check the marketplace.

## Deal flow

1. **Offer** — buyer clicks "Contact Seller" on a listing, submits message with optional offer amount. Can be sent without an account using just name + email (verification code sent).
2. **AI filter** — low-quality/spammy offers get filtered. Detailed, realistic offers get delivered faster to sellers.
3. **Negotiation** — chat thread opens in buyer/seller dashboards.
4. **LOI** — both sides sign a Letter of Intent to align on key terms. TrustMRR's legal-docs generator can draft it.
5. **Due diligence** — buyer verifies metrics, code access, customer list, tech stack.
6. **APA** — both sides sign Asset Purchase Agreement. TrustMRR generates in USD, EUR, CAD, AUD, or GBP.
7. **Escrow funding** — buyer funds full purchase price to Escrow.com.
8. **Asset transfer** — checklist-driven handover: domain, code repository, database, payment provider account, hosting, brand assets, social accounts.
9. **Release** — once both parties confirm transfer, Escrow.com releases funds to seller (minus fees).

**Hard constraint**: APA-only, single lump-sum deals. **No earnouts, installments, seller financing, or 50/50 upfront/back-end structures.** If the deal needs structure, TrustMRR won't support it — go to Acquire.com or a broker.

**Currencies supported in legal docs**: USD, EUR, CAD, AUD, GBP.

## Escrow.com integration

- Only escrow provider currently integrated
- Requires identity verification (KYC) for both parties
- Signed APA uploaded as "Party's Written Agreement"
- **Rejection reasons**: Missing/vague asset details. Always include verifiable URLs (domains, repos, social handles) in the APA.
- Fees are part of the tiered combined fee table above

## Verification, privacy, security

- **Data access**: Aggregate revenue metrics only (total, MRR, last 30 days, customer count, subscription count). **No customer PII is accessed or stored.**
- **API keys**: Read-only, stored securely. Cannot charge customers or modify payment accounts.
- **Update frequency**: Hourly sync from payment providers.
- **Metric discrepancies**: Up to ~30% variance vs provider's own dashboards due to different reconciliation formulas for refunds/trials/prorations.
- **Stealth mode**: Hides name, logo, website, description from public view. Revenue metrics remain publicly verified.
- **KYC**: Optional but unlocks advanced metrics (churn, currently optimized for Stripe data) and speeds up escrow. Uses Stripe Identity. Only verification status is stored, not document details.

## Metrics displayed

**Directory + marketplace**:
- Verified total revenue (all-time)
- Last 30 days revenue
- MRR (monthly recurring)
- Customer count, active subscriptions
- Profit margin (last 30 days)
- Asking price, acquisition multiple (price / (last30 × 12))
- 30-day revenue growth, 30-day MRR growth
- Offer counts, page views

**Optional (connect to display)**:
- Traffic (DataFast, Google Analytics, Google Search Console)
- 24h / 7d / 30d / 12-month metrics
- Revenue per visitor (last 30d revenue / last 30d traffic)
- Google Search impressions
- Churn rate (after KYC, Stripe-optimized)

## Public API

**Base URL**: `https://trustmrr.com/api/v1`
**Auth**: `Authorization: Bearer tmrr_your_api_key`
**Rate limit**: 20 req/min per key (hard limit, returns 429 when exceeded)
**Key management**: Developer dashboard — one active key per account. "Roll key" generates new (old stops working immediately). "Revoke" disables access entirely.

**Endpoints**:
- `GET /startups` — List/filter/paginate startups (up to 50 per page)
- `GET /startups/{slug}` — Full detail for a single startup

**Important**: All monetary values in USD cents (42500 = $425.00). Slug is the primary key — always resolve via list endpoint first.

See `references/trustmrr-api-reference.md` for full endpoint parameters, response fields, and code examples.

## AI-generated insights

- **Startup insights**: AI summarizes value prop, target audience, pricing model, tags based on public website + verified data
- **Offer filtering**: AI reviews buyer offers and prioritizes detailed/realistic ones — lazy offers get deprioritized

To refresh insights: edit the website URL in dashboard; AI re-crawls within 24 hours.

## Community / audience

- **Newsletter**: Integrated with marketplace — Growth/Scale tier listings get newsletter exposure
- **Open Revenue feed**: Aggregates "I made $X" founder tweets on X
- **Co-founder matching**: Browse co-founders page; messages are AI-moderated

**No dedicated forum or subreddit.** Community exists primarily on X (Twitter) around Marc Lou's audience.

## Comparison context

| Feature | TrustMRR | Acquire.com | Flippa |
|---------|----------|-------------|--------|
| Revenue verification | **Live API, hourly, required** | OAuth-verified at listing | Auto-verified only above $50K |
| Deal structures | APA lump-sum only | All (cash, earnout, notes) | All |
| Escrow | Escrow.com built-in | Escrow.com built-in (free) | FlippaPay / Escrow.com |
| Seller fee | 3% + Escrow.com (~4-5% combined) | 6-8% + $25-100/mo | 3-10% tiered + $29-$699 listing |
| Listing fee | Free directory / $29-$499 boost | $25-$100/mo | $29-$699 upfront |
| Buyer fee | $199/yr for alerts (optional) | $390/yr Premium, $780/yr Platinum | $49/mo Premium (optional) |
| NDA privacy | Stealth mode (hides identity) | NDA-gated by default | Optional Private listing ($599) |
| Best deal size | $5K-$500K | $10K-$5M+ | $500-$10M+ |

## Typical timeline

- **Directory listing**: Live within 1-2 hours of payment provider connection
- **Marketplace visibility boost**: Immediate on tier purchase
- **Offer to LOI**: Varies — high-quality listings get offers within days
- **LOI to APA**: 1-4 weeks typical for due diligence
- **APA signed to funded escrow**: 1-3 days
- **Asset transfer to escrow release**: 1-14 days depending on complexity

## Affiliate / referral program

TrustMRR does not currently publish an affiliate or partner program. Marc Lou's other products (ShipFast) have affiliate programs but TrustMRR itself does not as of April 2026.

## Sources

- Main: https://trustmrr.com
- Acquire: https://trustmrr.com/acquire
- Fees: https://trustmrr.com/fees
- FAQ: https://trustmrr.com/faq
- API docs: https://trustmrr.com/docs/api
- Terms: https://trustmrr.com/terms

*Pricing, fees, and features change — verify against live marketplace pages before committing.*
