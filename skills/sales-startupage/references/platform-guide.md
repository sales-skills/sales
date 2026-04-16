# StartuPage Platform Reference

## Platform overview

| Detail | Value |
|---|---|
| URL | https://startupa.ge |
| Founded | 2024 |
| Founder | Guglielmo Vaccaro |
| Category | All-in-one startup ecosystem (founders + investors + talent) |
| Positioning | "The professional profile platform for the startup ecosystem" — verified revenue + investor matching + community directory in one place |
| Target audience | Early-stage SaaS founders / indie hackers, investors, startup talent |
| API | None public (`/api` and `/docs` return 404) |
| Support / feedback | `startupage.featurebase.app` (third-party Featurebase instance) |
| Comparison pages | 16 at `/compare/{slug}` — TrustMRR, indiepage, Indie Hackers, Wellfound, Product Hunt, Crunchbase, Acquire.com, Flippa, Peerlist, YC Co-Founder Matching, F6S, CoFoundersLab, BetaList, Lunchclub, CoffeeSpace, OpenVC |

## Core modules

| Module | What it does |
|---|---|
| **Founder profile** | Personal founder profile, 90-second setup, serves as the profile root |
| **Startup sub-pages** | Dedicated pages per startup attached to a founder profile — distinct from the founder profile itself |
| **Verified revenue / MRR** | Revenue pulled via API from the connected payment provider, updates hourly |
| **Revenue visibility control** | Three modes: exact MRR / range / private — all three rank on the leaderboard |
| **Public leaderboard** (`/leaderboard`) | Two views: Top Startups (ranked by company MRR) and Top Founders (aggregated MRR across all startups). Sort options: Highest Revenue / Most Recent |
| **Opportunity marketplace** | Unified marketplace across 4 opportunity types: Hiring, Fundraising (Open Rounds), Co-founder matching, Startup Sales / Acquisitions |
| **Smart Matching** | Algorithm-based recommendations for investors, co-founders, and talent |
| **Direct messaging** | In-platform communication, no intermediaries |
| **Custom domain + CTA buttons** | Paid plans — for profile pages |
| **Theming** | 2 presets on Free, 8 on Starter, full customization on Growth |
| **Analytics** | Basic (Free), advanced (Starter), pro (Growth) |
| **StartuPage badge** | Embeddable trust badge on profiles; removable on paid plans |
| **Free tools suite** | Burn rate, exit, valuation, dilution, equity split calculators |
| **Blog** (`/blog`) | Founder education content — tech stacks, SaaS growth, fundraising |

## Pricing tiers

| Plan | Price | Key gated features |
|---|---|---|
| **Free** | $0/mo forever | Profile, unlimited connections, basic analytics, 2 themes, StartuPage badge displayed, community support |
| **Starter** | $5/mo annual ($8/mo monthly) | 1 opportunity/mo, custom domain, CTA button, rotating word effect, **badge removal**, advanced analytics, all 8 themes, 48h email support |
| **Growth** | $9/mo annual ($16/mo monthly) | 3 opportunities/mo, multiple CTAs, pro analytics, full theme customization, advanced filters, 24h priority support |
| **Lifetime Pass** | $179 one-time (regularly $349) | Growth forever, all future features, early access |
| **Enterprise / Agency** | Contact for custom | Custom plan |

**Plan-gated concepts:** opportunities per month, branding (badge) removal, analytics depth, theme customization, support SLAs.

**Break-even math:** Lifetime $179 beats Growth $9/mo annual (=$108/yr) after ~1.66 years. If the promo ends and Lifetime returns to $349, break-even is ~3.2 years.

## Payment provider integrations (revenue verification)

- **Stripe**
- **Lemon Squeezy**
- **Polar**
- **RevenueCat**
- **Dodo Payments**

**Unsupported:** Paddle, Chargebee, Square, Braintree, custom Stripe Connect. If your revenue runs through any of these, you cannot verify on StartuPage until integration lands.

**Sync cadence:** hourly. Initial sync can take up to 1 hour after connection.

## Opportunity marketplace — four types

All four live in the same unified marketplace. A post counts as one "opportunity" against your plan's monthly quota regardless of type.

### 1. Hiring (`/startup-hiring`)
- **Fields:** experience level (junior/mid/senior), employment type (full-time/part-time/contract), location (remote/on-site/hybrid), category (engineering, product, marketing, sales, growth), salary range, equity
- **Audience:** startup talent signing up explicitly to find roles at growing startups

### 2. Fundraising — Open Rounds
- Public fundraising opportunities
- Visible to investors browsing the platform + Smart Matching recommendations
- Verified revenue on the founder's attached startups strengthens the signal

### 3. Co-founder matching
- Post a co-founder search with role focus (technical, commercial, design, etc.)
- Competes for attention against YC Co-Founder Matching, CoFoundersLab, CoffeeSpace

### 4. Startup sales / acquisitions
- Post a startup for sale inside StartuPage's Opportunities marketplace
- Lower volume than TrustMRR / Acquire.com / Flippa (those are acquisition-specialized marketplaces)
- Best used as a cross-posting signal alongside a dedicated marketplace

## Leaderboard mechanics

**Two views:**
- **Top Startups** — ranks individual startup sub-pages by that startup's MRR
- **Top Founders** — ranks founders by **aggregated MRR across all startups they own**

**Sort options:** Highest Revenue / Most Recent

**Key mechanic:** A founder with three $5K startups ranks above a founder with one $15K startup on "Top Founders," even though both show $15K total. This is why connecting every revenue source you control matters — even small sub-$1K side projects lift the founder-level rank.

**Visibility modes and ranking:**
- Exact MRR → ranks with displayed number
- Range (e.g., "$5K–$10K") → ranks at range midpoint (confirmed behavior unclear — assume midpoint)
- Private → ranks with the real number but the number is hidden publicly

## Theming

| Tier | Themes |
|---|---|
| Free | 2 presets |
| Starter | All 8 presets |
| Growth | 8 presets + full theme customization (arbitrary CSS, brand colors) |

## Analytics tiers

| Tier | Depth |
|---|---|
| Free | Basic |
| Starter | Advanced |
| Growth | Pro (includes advanced filters) |

## Terminology glossary

- **Verified MRR / verified revenue** — revenue pulled directly from a connected payment provider
- **Verified traction** — umbrella term for all provider-sourced metrics
- **Opportunities** — canonical term for marketplace posts (jobs, fundraising, co-founder, acquisition)
- **Open Rounds** — fundraising opportunities specifically
- **Startup sub-pages** — dedicated startup pages, distinct from the founder profile
- **Top Startups / Top Founders** — the two leaderboard views
- **Smart Matching** — the recommendation algorithm
- **Revenue visibility** — founder control over exact / range / private display
- **Opportunity marketplace** — the unified marketplace across all 4 types
- **Ecosystem** — used deliberately to contrast with "community forum" (Indie Hackers)

## Competitive positioning

StartuPage publishes 16 comparison pages at `/compare/{slug}`. Summarized positioning:

| Competitor | StartuPage's pitch vs them |
|---|---|
| **TrustMRR** | "Full startup ecosystem" vs "badge widget generator" — StartuPage claims verified revenue + leaderboard + matching + hiring; TrustMRR is an embeddable MRR badge + acquisition marketplace |
| **Indie Hackers** | "Ecosystem with discovery/matching/structured opportunities" vs "discussion forum with self-reported numbers." Key line: "When an investor sees $50K MRR on StartuPage, it's backed by real transaction data. On Indie Hackers, the same number is unverifiable text." |
| **indiepage** | Profile platform comparison — StartuPage adds verified MRR and Opportunity marketplace |
| **Peerlist** | Tech-builder profile vs founder-ecosystem profile; Peerlist is weekly Launchpad-centric, StartuPage is verified-traction + marketplace-centric |
| **Wellfound (AngelList)** | StartuPage targets earlier-stage founders; Wellfound dominates job-board reach |
| **Product Hunt** | StartuPage is long-term founder profile, Product Hunt is one-day launch event |
| **Crunchbase** | StartuPage verified-on-API vs Crunchbase press-release-and-self-report |
| **Acquire.com / Flippa** | Acquisition marketplace competitors for the 4th Opportunity type only |
| **YC Co-Founder Matching / CoFoundersLab / CoffeeSpace / Lunchclub** | Co-founder matching competitors for the 3rd Opportunity type only |
| **F6S / OpenVC** | Fundraising-directory competitors for the 2nd Opportunity type only |
| **BetaList** | BetaList is product-launch early-access; StartuPage is founder-profile persistent |

**Core differentiation claim:** "The only platform that combines Stripe-verified revenue with investor matching and a community directory in one place."

**Comparison pages that DO NOT exist** (not in the 16): ArrFounder, OpenRevenue, VerifyMRR. These verified-MRR alternatives aren't directly addressed.

## Workflow: setting up a founder profile from zero

1. **Sign up** and claim founder profile (90-second setup)
2. **Connect payment provider** (Stripe / Lemon Squeezy / Polar / RevenueCat / Dodo Payments) — wait up to 1 hour for first sync
3. **Create startup sub-page(s)** for each product you run — each can attach a separate payment provider account
4. **Choose revenue visibility** per sub-page (exact / range / private)
5. **Pick a theme** (2 free presets, upgrade for 8 or full customization)
6. **Publish profile** — shows up on `/leaderboard` once revenue syncs
7. **Optional — post an opportunity** (hiring / fundraising / co-founder / acquisition) if on Starter+ and you have a current ask

## Workflow: posting an opportunity

1. Confirm plan has remaining quota for the month (Starter 1/mo, Growth 3/mo, Lifetime = Growth 3/mo)
2. Pick exactly one opportunity type — don't bundle (a hiring post that "also considers co-founder" wastes two intents on one slot)
3. Fill fields appropriate to the type (e.g., hiring = level/type/location/salary; co-founder = role focus)
4. Publish — enters both the public Opportunities marketplace and Smart Matching feeds
5. Wait out the month before swapping — swapping a live opportunity for a different one counts against the same monthly quota

## Key URLs

- https://startupa.ge/ — homepage
- https://startupa.ge/pricing — pricing
- https://startupa.ge/leaderboard — Top Startups / Top Founders
- https://startupa.ge/startup-hiring — hiring marketplace
- https://startupa.ge/compare — competitor comparison index
- https://startupa.ge/alternatives/trustmrr — vs TrustMRR
- https://startupa.ge/alternatives/indiehackers — vs Indie Hackers
- https://startupa.ge/blog — blog
- https://startupage.featurebase.app — feedback / roadmap

## Known gaps / unknowns

- **No public API** — cannot programmatically post opportunities, read leaderboard, or sync revenue outside built-in integrations
- **No affiliate / partner program** found
- **Webhook availability** unknown
- **Data export capabilities** unknown
- **Smart Matching algorithm criteria** are opaque — no public documentation
- **Leaderboard filters beyond Highest Revenue / Most Recent** not confirmed (no category/industry filter documented publicly)
- **No cryptographic verification** — relies on provider API trust, not independent proof
