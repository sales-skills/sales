# Arrfounder Platform Reference

## Platform overview

**Arrfounder** (arrfounder.com) is a founder-revenue directory that auto-discovers founders from Twitter/X bios containing MRR or ARR disclosures. Made by `@Folyd` (the same developer behind Geddle — `geddle.com`, and author of the Rust `robotstxt` and `lox-lang` projects). Founded 2024.

**One-line positioning**: "Find real founders with actual revenue" — a curated directory of founders who publicly disclose revenue on Twitter/X, surfaced via a sortable leaderboard.

**Target audience**:
- **Prospective founders** researching realistic revenue expectations at different stages
- **Investors** using the directory as a top-of-funnel discovery tool
- **Founders building in public** who want a persistent profile + community discoverability
- **Curious peers / journalists / analysts** who want a transparency-first view of the indie/bootstrapped ecosystem

**What it is not**:
- Not a marketplace — no buy/sell flow, no listings for sale
- Not forensic-grade verification — no payment-provider API integration
- Not a founder-ecosystem platform like StartuPage — no hiring / fundraising / co-founder / acquisition post types
- Not a community/forum — no comments, no DMs, no internal messaging

## Key modules

### Directory / leaderboard
- 1000+ verified founders, 1500+ products extracted from bios
- Default sort: **Highest ARR first**
- Alternative sorts: Followers, Products count, Recently added, Name
- Filters by ARR tier and follower count
- Revenue tiers (as of April 2026): Under $1K ARR / $1K-$10K / $10K-$100K / $100K-$1M / $1M-$10M / $10M+ / $100M+ (smaller special-tier featured)

### Founder profiles
Each profile shows:
- Founder avatar + name + Twitter/X handle (profile URL pattern: `arrfounder.com/@{handle}`)
- Extracted MRR / ARR (from the bio, explicit or inferred)
- Products (name, URL, short description — all AI-extracted from bio)
- Recent tweets feed
- Links to news pieces / interviews where available

### Product pages
- Product URL pattern: `arrfounder.com/product/{slug}` (e.g., `/product/helpkit`)
- Links back to the founder + shows related founders/products
- Aggregates any tweets mentioning the product

### Tweets section
- Aggregated feed of founder tweets (useful for passively following the leaderboard cohort)
- No posting / commenting inside Arrfounder — this is a read-only surface

### Founder interviews (upcoming)
Mentioned on the site as an upcoming feature. Not live as of April 2026 research.

## Pricing and limits

| Tier | Cost | What you get |
|---|---|---|
| **Listing** | Free | Founder profile, leaderboard position, product pages |
| **Sponsor card** | Pricing not public — contact `@Folyd` | UTM-tracked sponsor placement on the homepage / leaderboard |

There is **no paid tier to boost ranking**. The leaderboard is sorted by revenue/followers/etc., not by payment. Sponsor cards are a separate ad unit, visually distinct from leaderboard entries.

Free listing is subject to manual approval (see Submission flow).

## Submission flow

1. **Prep your Twitter/X bio** — it must contain:
   - MRR or ARR as a distinct numeric string (examples: `$10k MRR`, `$5K MRR`, `100k ARR`, `$2M ARR`)
   - At least one product (name + URL)
   - A short product description
2. **Submit via the Airtable form** linked from `arrfounder.com/how-to-join`
3. **Wait 24-48 hours** for manual review. The team checks for:
   - "Real founder, real product" — the product URL resolves, the Twitter/X account looks human
   - Active Twitter/X (recent tweets, engagement)
   - Transparent revenue sharing (MRR/ARR format in the bio)
   - Clear product information
4. **Approval email** — arrives when you're listed. No public status tracker.
5. **Auto-sync** — after approval, the platform re-reads your Twitter/X bio regularly ("updates typically appear within a few hours of changing your bio").

### Common rejection / ignored-submission causes
- Bio doesn't have a clean MRR/ARR string (phrases like "6 figures", "making real money", "growing" fail extraction)
- Twitter/X account is inactive or has mostly non-founder content
- Product URL doesn't resolve or is clearly test/placeholder
- Missing product name or description in the bio

## Data model and discovery mechanism

Arrfounder **monitors Twitter/X for founders publicly sharing revenue metrics** and:
1. Applies **intelligent filtering rules** to identify bios containing revenue indicators (MRR, ARR, numeric strings matching common disclosure formats)
2. Uses **AI (LLM)** to extract:
   - Product URLs
   - Product names and descriptions
   - Revenue figures
3. Maintains the directory as bios change — periodic re-sync

This is the source of the verification claim: "publicly disclosed by founders themselves and collected from various sources, primarily Twitter/X." It's social-proof-based — the implicit deterrent is reputational (a founder lying publicly about revenue gets called out).

## Integrations

- **Twitter/X**: Sole data source. Profiles pull follower count, bio, tweets, avatar directly.
- **No payment-provider integrations** (unlike TrustMRR's 8 providers and StartuPage's 5).
- **No Zapier / webhooks / native CRM connectors** — Arrfounder is read-only and outbound-only from your perspective.

## API

**No public API.** `/api` and similar routes 404. Programmatic access options:
- Scraping the public HTML is technically feasible but violates ToS
- DM `@Folyd` on Twitter/X to request a data partnership
- Use a related platform with an API: **TrustMRR** has `tmrr_*` Bearer token API (20 req/min) and a subset of founders overlap

## Positioning vs competitors

### Arrfounder vs TrustMRR

| Aspect | Arrfounder | TrustMRR |
|---|---|---|
| Verification model | Social proof (Twitter/X bio disclosure + AI extraction) | API integration (read-only Stripe / LemonSqueezy / Polar / Paddle / DodoPayment / RevenueCat / Superwall / Creem) |
| Update frequency | Hours (bio re-sync) | Hourly (API poll) |
| Database size | 1000+ founders, 1500+ products | 100+ startups |
| Leaderboards | Founders + products | Startups only |
| Unique features | Tweets feed, AI product discovery, upcoming interviews | Verified-revenue badge, acquisition marketplace, buyer alerts ($199/yr), public API |
| Marketplace | **None** — discovery only | **Yes** — $29/$199/$499 boost tiers, 3% fee + Escrow.com |
| Cost to list | Free | Free directory; paid boost tiers optional |
| Cost to verify | Free (implicit — you already have a Twitter/X bio) | Free (read-only API key) |
| Audience | Peer founders, community discovery | Buyers / investors / acquirers |
| Credibility ceiling | Reputation-based, good for community | Forensic, good for DD |
| **Best for** | Being found / researched by peers | Actually selling the startup or proving numbers to an acquirer |

**Rule of thumb**: Arrfounder is a *discovery channel*; TrustMRR is a *transaction layer + verification layer*. They can stack.

### Arrfounder vs StartuPage

| Aspect | Arrfounder | StartuPage |
|---|---|---|
| Verification model | Twitter/X bio (social proof) | Payment-provider API (Stripe / Lemon Squeezy / Polar / RevenueCat / Dodo) |
| Profile depth | Auto-populated from bio + tweets | Rich founder + startup sub-pages, manual setup |
| Opportunity posts | None | 4 types (hiring / fundraising / co-founder / acquisition) |
| Pricing | Free | Free / Starter $5/mo / Growth $9/mo / Lifetime $179 |
| Badge | None | StartuPage badge (removable on paid tiers) |
| Custom domain | Not supported | Starter+ tiers |
| **Best for** | Passive discoverability for founders who already tweet revenue | Active founder profile + opportunity posting |

**Rule of thumb**: StartuPage wants you to *actively maintain* a founder presence; Arrfounder wants your Twitter/X bio to *passively broadcast* you.

### Arrfounder vs FounderMRR

- **FounderMRR** pulls from TrustMRR's data (Stripe-verified). Smaller dataset, higher verification strength, no independent submission flow — you get on FounderMRR via TrustMRR.
- **Arrfounder** is independent, larger, but social-proof-based.
- **Use both** if you want maximum coverage — different audiences.

### Arrfounder vs Indie Hackers

- **Indie Hackers** is a forum + community with self-reported (not extracted) revenue on profiles — optional, no verification.
- **Arrfounder** is a directory with extracted revenue from public Twitter/X — structured, more findable.
- Complementary: IH for conversations + long-form sharing, Arrfounder for ranked discoverability.

## Monetization / sponsors

- **Sponsor cards** appear on the site with UTM-tagged outbound links (visible in HTML).
- **Friends section** on the site currently references: Geddle, Aiberm, Meiguo — likely reciprocal links rather than paid sponsorships.
- **Pricing not published**. To sponsor, DM `@Folyd` on Twitter/X.
- No founder-side paid tier — founder listings stay free.

## Known gaps and limitations

- No in-platform edit UI — all profile data derives from the Twitter/X bio (which means you can't correct an AI extraction error without editing the bio).
- No DM / messaging — if another founder wants to reach out, it happens on Twitter/X, not on Arrfounder.
- No acquisition flow — Arrfounder isn't positioned as a marketplace.
- No API / programmatic integration.
- No mobile app — web-only.
- Small team (effectively solo-built by `@Folyd`) — feature velocity and support responsiveness reflect that. Expect DM-based support, not a ticket system.
- Feature set may change — tier breakpoints, "Friends" section, and "upcoming" features (founder interviews) are subject to update.

## Workflow setup

### Getting listed (fastest path)

1. Open Twitter/X, edit bio to match this template:
   ```
   Building {Product} — ${X}k MRR. {product.com}
   Also: {OtherProduct}. {other.com}
   {Optional extra line}
   ```
2. Post a tweet mentioning your revenue milestone so the account looks active on submission day (not strictly required, but strengthens approval signal)
3. Submit via `arrfounder.com/how-to-join` (Airtable form)
4. Expect approval email within 24-48h
5. If nothing in 72h, DM `@Folyd` with the Airtable submission ID and product URL

### Using Arrfounder as a research tool (no listing required)

1. Open `arrfounder.com/database`
2. Filter by ARR tier matching your own project (e.g., `$10K-$100K`)
3. Sort by `Recently added` to see emerging peers, or by `Highest ARR` to see ceiling performers
4. Follow the top 10-20 founders directly on Twitter/X — their building-in-public threads are the richer signal than the directory itself

### Sponsoring

1. DM `@Folyd` on Twitter/X with: product URL, target audience, budget range
2. Expect an ad-hoc proposal — no self-serve sponsor dashboard currently

## Deep dives

### Why MRR/ARR formatting matters

Arrfounder's filter rules are pattern-matching on common revenue-disclosure formats. The AI extractor picks up:
- ✅ `$10k MRR`, `$10K MRR`, `$10,000 MRR`
- ✅ `100k ARR`, `$100K ARR`, `$2M ARR`
- ✅ `2.5M ARR`
- ⚠️ `making $10k a month` — may or may not parse depending on bio structure
- ❌ `6 figures`, `7 figures`, `profitable`, `growing fast` — fuzzy, unreliable extraction

If you care about showing up with the right number, use one of the unambiguous formats.

### Why bio sync can drift

Arrfounder re-reads bios on a rolling schedule (not real-time). If you update your bio and don't see the change reflected in 24h:
- Confirm the bio update persisted on Twitter/X (save failed occasionally on mobile)
- Re-submit via the Airtable form with a note — forces a re-queue
- DM `@Folyd` with your handle and the mismatch

### Why leaderboard position can seem off

- The leaderboard ranks by a single startup's ARR from the bio — a founder with 3 products and combined $50k MRR ranks *only* on whatever single-startup MRR is in the bio, not the total.
- Followers, products, recently-added sorts are alternative views — check the sort order at the top of the list.
- A new founder with $100k ARR but 500 followers may rank below a $50k ARR founder with 20k followers on the follower sort.

### Contacting @Folyd

- Twitter/X: `@withfolyd` (linked from "Made by" on About page)
- No support email / ticket system
- GitHub: `github.com/Folyd` (66 public repos, mostly Rust — not Arrfounder-related)
- Personal blog: `folyd.com`
- Company: `@geddle` (geddle.com — 5 public GitHub repos, unrelated to Arrfounder)
