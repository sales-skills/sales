---
name: sales-startupage
description: "StartuPage platform help — startup ecosystem combining Stripe/LemonSqueezy/Polar/RevenueCat/Dodo-verified MRR leaderboard, founder + startup sub-page profiles, and a four-track Opportunities marketplace (hiring, fundraising Open Rounds, co-founder matching, startup acquisitions). Free plan with 2 themes and the StartuPage badge, Starter $5/mo (1 opportunity, custom domain, badge removal, 8 themes), Growth $9/mo (3 opportunities, pro analytics), Lifetime $179. Use when setting up a founder profile and choosing whether to show exact MRR / a range / private, connecting a payment provider for verified revenue, picking a pricing plan or the Lifetime Pass, posting a hiring / fundraising / co-founder / acquisition opportunity, comparing StartuPage vs TrustMRR / Indie Hackers / Peerlist / Wellfound, or climbing the Top Startups or Top Founders leaderboard. Do NOT use for cross-marketplace side-project valuation (use /sales-side-project-valuation)."
argument-hint: "[describe what you need help with on StartuPage]"
license: MIT
version: 1.0.0
tags: [sales, startup, founder-profile, verified-revenue, directory, platform]
github: "https://github.com/Startupage"
---

# StartuPage Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up a founder / startup profile
   - B) Connecting a payment provider for verified MRR
   - C) Choosing a plan (Free / Starter / Growth / Lifetime)
   - D) Posting an opportunity (hiring, fundraising, co-founder, acquisition)
   - E) Climbing the Top Startups or Top Founders leaderboard
   - F) Comparing StartuPage against another platform
   - G) Something else

2. **What's your payment provider?** (for verified revenue) — Stripe / Lemon Squeezy / Polar / RevenueCat / Dodo Payments / none yet

3. **How do you want to display revenue?** — Exact MRR / range / private (still counts for ranking)

**If the user's prompt already provides enough context, skip directly to the relevant step.** Lead with your best-effort answer and ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to another skill, route with an explicit command:

| User's problem | Route to |
|---|---|
| Comparing marketplaces to sell a side project | `/sales-side-project-valuation {user's question}` |
| Listing a startup for sale on TrustMRR | `/sales-trustmrr {user's question}` |
| Acquire.com or Flippa listing strategy | `/sales-acquire {user's question}` or `/sales-flippa {user's question}` |
| Multi-directory launch across Product Hunt, BetaList, etc. | `/sales-launch-directory {user's question}` |
| Peerlist-specific profile or Launchpad help | `/sales-peerlist {user's question}` |
| Indie Hackers-specific milestone sharing | `/sales-indiehackers {user's question}` |

Otherwise, answer from platform knowledge below.

## Step 3 — StartuPage platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, payment provider integrations, Opportunity marketplace, leaderboard mechanics, theming, and positioning vs competitors.

Answer the user's question using only the relevant section — don't dump the whole reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Before publishing a profile**: Connect a supported payment provider first. Verified revenue is StartuPage's currency — an unverified profile looks weak next to ranked peers even if you have real numbers.
- **Revenue visibility**: Private revenue still counts toward leaderboard ranking. If you're pre-seed or running stealth, use "private" to rank without exposing the number. "Range" is the middle ground when exact MRR feels either too low or too high to broadcast.
- **Plan choice**: Stay on Free until you need to remove the badge, attach a custom domain, or post more than occasional opportunities. Starter ($5/mo annual) is the sweet spot for a founder who wants a polished public profile. Growth ($9/mo annual) only pays off if you'll post 3 opportunities per month consistently. Lifetime Pass ($179) beats Growth after ~19 months — fair deal if you believe in the platform long-term.
- **Posting opportunities**: Pick the single opportunity type that matches the actual ask. A hiring post with "also open to co-founder conversations" dilutes intent. Use separate opportunity slots for separate asks — that's why Starter gives you 1/mo and Growth gives you 3/mo.
- **Leaderboard strategy**: "Top Founders" aggregates MRR across all your startups — connect every revenue source you control, even small ones. "Top Startups" ranks individual sub-pages. Sort order is "Highest Revenue" or "Most Recent" — newly connected revenue gets temporary visibility in "Most Recent."

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research — review these, especially items about pricing tiers and integration gotchas that may be outdated.*

- **No public API.** StartuPage has no developer docs — `/api` and `/docs` both 404. You can't programmatically post opportunities, fetch leaderboard data, or sync revenue outside the supported provider integrations. If you need scripted access, this platform is a dead end for now.
- **Revenue verification is the whole point — unverified profiles under-rank.** Even if you report $10K MRR in your bio, you won't appear in leaderboard positions that reflect it until a supported payment provider is connected. Self-reported numbers show differently in the UI.
- **Supported payment providers are limited to 5.** Stripe, Lemon Squeezy, Polar, RevenueCat, Dodo Payments. If your revenue is on Paddle, Chargebee, Square, or custom Stripe Connect, you can't verify. Check the list before committing.
- **Opportunities are metered per month, not per-listing.** Starter = 1/mo, Growth = 3/mo. Posting a hiring opportunity and later swapping it for a co-founder post in the same month still counts as two uses, not one. Plan the month's post before you start.
- **The badge is removable only on paid plans.** Free plans display the StartuPage badge on your profile and sub-pages. If you need a clean custom-domain profile (e.g., for investor share links), Starter or higher is required.
- **Theme tiers are strictly capped.** 2 themes on Free, all 8 on Starter, full customization on Growth only. If you want arbitrary CSS / brand colors, that's Growth.
- **Lifetime Pass is $179 one-time only at the promotional price** (regularly $349). Assume the promo can end — if you're on the fence for 6+ months of Growth, price-lock with Lifetime before the discount disappears.
- **Private revenue is trust-on-API, not cryptographically proven.** Unlike OpenRevenue's cryptographic verification, StartuPage relies on the connected provider's API data. Platform can show "Verified via Stripe" but doesn't publish a receipt a buyer could independently validate — fine for founder clout, less convincing for rigorous due diligence (use TrustMRR or OpenRevenue for acquirer-grade proofs).
- **Platform is young (founded 2024) — feature set evolves fast.** What's plan-gated today may move between tiers. Check `/pricing` before quoting specific limits to anyone.
- **Feedback / roadmap lives on a separate Featurebase instance** (`startupage.featurebase.app`), not in-platform. If something's broken, that's where to file it — not email.

## Related skills

- `/sales-trustmrr` — TrustMRR platform help (Marc Lou's verified-MRR marketplace, APA-only lump-sum escrow, similar Stripe/LemonSqueezy/Polar/Paddle verification angle)
- `/sales-arrfounder` — Arrfounder platform help (social-proof founder directory pulling MRR/ARR from Twitter/X bios — lighter-weight alternative without payment-provider integration, useful in parallel with StartuPage for extra discoverability)
- `/sales-side-project-valuation` — Cross-marketplace valuation strategy when selling a project listed on StartuPage's acquisition track (TrustMRR vs Acquire.com vs Flippa vs Empire Flippers)
- `/sales-peerlist` — Peerlist platform help (tech-builder profile platform, weekly Launchpad — overlap on "professional profile for founders/builders")
- `/sales-indiehackers` — Indie Hackers platform help (unverified self-reported revenue community that StartuPage positions against)
- `/sales-producthunt` — Product Hunt platform help (for the launch side; StartuPage does not replace a launch-directory strategy)
- `/sales-launch-directory` — Multi-directory launch coordinator (StartuPage is a founder ecosystem, not a launch directory — coordinate the two)
- `/sales-acquire` — Acquire.com platform help (if the Opportunity marketplace acquisition track isn't the right fit)
- `/sales-flippa` — Flippa platform help (broader marketplace if StartuPage acquisitions aren't attracting offers)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Pick a plan for a new founder profile
**User says**: "I'm bootstrapping a SaaS at $2K MRR on Stripe. Free, Starter, Growth, or Lifetime?"
**Skill does**:
1. Free gets a profile + StartuPage badge + 2 themes — enough to test the platform and show up on the leaderboard
2. Recommends **Free for the first 30 days** — verify revenue, see traction, decide if the audience is useful
3. If the badge bothers the user on a custom-domain share link → **Starter $5/mo annual** ($60/yr) for badge removal + custom domain + 1 opportunity/mo + 8 themes
4. Growth ($9/mo annual = $108/yr) only if they'll post 3 opportunities/mo (hiring + co-founder + fundraising simultaneously)
5. Lifetime Pass ($179 promo) pays off after ~19 months of Growth; fair if committed long-term and worried about promo ending
**Result**: Start Free; upgrade based on actual usage.

### Example 2: Choose a revenue visibility mode for a seed-stage startup
**User says**: "We just hit $8K MRR but raising a seed round — should I show exact revenue, range, or private?"
**Skill does**:
1. Explains all three rank on the leaderboard — private does NOT exclude you from ranking
2. **Exact MRR** builds credibility with investors who land on your profile, but anchors valuation conversations
3. **Range** (e.g., "$5K-$10K") gives credibility without anchoring — best for active fundraise
4. **Private** keeps rank but hides the number — good if competitors would use it against you
5. Recommends **Range during fundraise**, then **Exact** post-close for recruiting/press
**Result**: Range mode selected for the duration of the raise.

### Example 3: Post a co-founder opportunity
**User says**: "I need a technical co-founder. Should I use StartuPage or YC Co-Founder Matching?"
**Skill does**:
1. StartuPage: post goes in the Opportunities marketplace, visible to the platform's founder audience + Smart Matching recommendations. Counts against Starter's 1/mo or Growth's 3/mo quota.
2. YC Co-Founder Matching: larger audience, free, but less founder-validation context (no MRR, no public startup traction)
3. Recommends **posting on both** — StartuPage for peers who can already see your verified traction (stronger signal that the startup is real), YC for reach
4. Notes co-founder opportunity is one of 4 types in the marketplace — don't bundle it with hiring in the same slot
**Result**: Cross-post strategy with StartuPage as the "traction-verified" channel.

## Troubleshooting

### Revenue not showing after connecting Stripe
**Symptom**: Stripe connected but MRR displays $0 or stale
**Cause**: Hourly sync lag, or the read-only API key lacks permissions on Balance/Charges/Subscriptions, or the Stripe account has no recent successful charges
**Solution**: Wait up to 1 hour for the first sync. Regenerate the Stripe Restricted Key with read access on Balance, Charges, Subscriptions, and Customers. If the Stripe account is new and has only test-mode transactions, live-mode MRR will show $0 until you process a real charge. If still blank after 2 hours, file on `startupage.featurebase.app` — that's where the team picks up bugs, not a support email.

### Leaderboard position lower than expected for the MRR
**Symptom**: You have $15K verified MRR but sit below profiles showing lower numbers
**Cause**: "Top Founders" aggregates MRR across ALL startups a founder owns — a founder with $10K + $8K across two startups out-ranks a single $15K. Or the leaderboard is sorted by "Most Recent" rather than "Highest Revenue" when you viewed it.
**Solution**: Verify the sort mode at the top of `/leaderboard`. Check "Top Founders" vs "Top Startups" — they rank differently. Connect every revenue source you control as separate startup sub-pages so the aggregate reflects real total revenue. A founder with one $15K startup loses to a founder with three $5K startups on "Top Founders."

### Custom domain not working on the founder profile
**Symptom**: Added custom domain but it doesn't resolve to the StartuPage profile
**Cause**: DNS not pointed correctly, or the plan is Free (custom domain is Starter+), or DNS hasn't propagated yet
**Solution**: Confirm you're on Starter, Growth, or Lifetime — custom domain is plan-gated. Check the DNS setup instructions in the profile settings (usually a CNAME record pointing to the StartuPage host). Allow up to 24 hours for propagation. If still broken, verify there are no conflicting A/AAAA records on the root, and file on Featurebase if the platform shows "verified" but the domain 404s.
