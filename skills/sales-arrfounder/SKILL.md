---
name: sales-arrfounder
description: "Arrfounder platform help — founder revenue directory by @Folyd (2024) that auto-extracts MRR/ARR + products from Twitter/X bios via AI, lists 1000+ founders on sortable leaderboards (ARR / followers / products / recently added), free Airtable submission with 24-48h manual approval, auto-syncs within hours of bio changes. Social-proof verification only (no Stripe / Lemon Squeezy / Polar API integration) — built for peer discovery and community browsing, not acquisition-grade proof. Use when getting listed on Arrfounder, writing a Twitter/X bio that passes the MRR/ARR extractor, fixing a profile that didn't get approved or stopped updating after a bio edit, deciding Arrfounder vs TrustMRR or StartuPage for verified-revenue display, benchmarking against peers in the $1K-$10M+ ARR tiers, or using Arrfounder as a comp-check tool before pricing a sale or fundraise. Do NOT use for selling/buying a project or cross-marketplace valuation (use /sales-side-project-valuation)."
argument-hint: "[describe what you need help with on Arrfounder]"
license: MIT
version: 1.0.0
tags: [sales, founder-directory, verified-revenue, leaderboard, discovery, platform]
---

# Arrfounder Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Getting listed on Arrfounder (submission, Twitter/X bio setup)
   - B) Fixing a profile (not updating, not showing revenue, got rejected)
   - C) Comparing Arrfounder vs TrustMRR / StartuPage / FounderMRR
   - D) Using Arrfounder as a research / comp-check tool (before pricing a sale or fundraise)
   - E) Improving leaderboard position
   - F) Something else

2. **Do you have an active Twitter/X presence with MRR/ARR in the bio already?**
   - A) Yes, bio currently has MRR or ARR
   - B) Active Twitter/X but bio doesn't mention revenue
   - C) Limited Twitter/X activity
   - D) No Twitter/X

**If the user's prompt already provides enough context, skip directly to the relevant step.** Lead with your best-effort answer and ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to another skill, route with an explicit command:

| User's problem | Route to |
|---|---|
| Selling a verified-revenue startup with API-level proof | `/sales-trustmrr {user's question}` |
| Full founder ecosystem with hiring / fundraising / co-founder / acquisition posts | `/sales-startupage {user's question}` |
| Picking which marketplace to list on for acquisition | `/sales-side-project-valuation {user's question}` |
| Listing on Acquire.com / Flippa / Empire Flippers | `/sales-acquire`, `/sales-flippa`, or `/sales-side-project-valuation {user's question}` |
| Growing Twitter/X audience (not the listing itself) | `/sales-audience-growth {user's question}` |
| Cross-directory launch for a product | `/sales-launch-directory {user's question}` |

Otherwise, answer from platform knowledge below.

## Step 3 — Arrfounder platform reference

**Read `references/platform-guide.md`** for the full platform reference — submission flow, Twitter/X bio format, leaderboard mechanics, revenue tiers, positioning vs TrustMRR / StartuPage / FounderMRR, monetization, and known gaps.

Answer the user's question using only the relevant section — don't dump the whole reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Before submitting**: Fix the Twitter/X bio first — MRR or ARR as a distinct string (e.g., `$10k MRR`, `100k ARR`), then product name(s) and URL(s), then a short product description. Arrfounder's AI extracts from the bio, so if revenue isn't explicit there, you won't rank correctly. Submit via the Airtable form; approval is 24-48h.
- **After approval**: Keep the bio accurate — profiles auto-sync within hours of bio edits. A stale bio (e.g., an old MRR figure you haven't updated) is the #1 reason leaderboard position drifts wrong.
- **What Arrfounder is not**: Not a marketplace, not acquisition-grade verification, no payment-provider integration. If a buyer or investor asks for "verified" revenue in the forensic sense, Arrfounder's social-proof model will not satisfy due diligence — point them at TrustMRR (API-verified) or StartuPage (API-verified via Stripe / Lemon Squeezy / Polar / RevenueCat / Dodo).
- **As a research tool**: Arrfounder is best-in-class for "who's building what at $X MRR" browsing. Use the ARR-tier filters ($1K-$10K, $10K-$100K, $100K-$1M, $1M-$10M, $10M+) to build a comp set before pricing a sale, pitching investors, or benchmarking your stage. Follow the highest-ranked founders directly on Twitter/X — the data stream is the bio, not the Arrfounder profile.
- **Stack it, don't replace**: Arrfounder works well alongside an API-verified profile. Have StartuPage or TrustMRR for the "verified" proof a serious buyer/investor wants, and Arrfounder for the discoverability that comes with a curated leaderboard and founder interviews. They attract different audiences.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research — review these, especially items about submission criteria and monetization that may be outdated.*

- **Data is self-disclosed — not payment-provider-verified.** Arrfounder's filter rules + AI extraction reads what founders put in their Twitter/X bios. There is no Stripe / Lemon Squeezy / Polar API integration. For forensic-grade verification, use TrustMRR or StartuPage. Arrfounder disclaims this openly in its About page.
- **Twitter/X bio is the source of truth — not a form field.** Revenue, products, and descriptions all pull from the bio. If you change your bio to remove MRR, your Arrfounder profile silently drifts out of the leaderboard. There is no in-platform edit flow to decouple profile data from the live bio.
- **Submission requires both a bio with MRR/ARR and manual approval.** Submitting via the Airtable form is only step one — a human reviews for "real founder, real product, active Twitter/X, transparent revenue sharing". Missing any of those 4 signals → rejection without detailed feedback.
- **Approval is 24-48h but can be longer.** If submission lacks a clearly formatted revenue figure in the bio, expect rejection or an ignored submission. Founders report the fastest approvals when MRR/ARR is the first or second element in the bio, not buried at the end.
- **Free to join — but monetization via sponsor cards is opaque.** Sponsor pricing isn't published on the site. Sponsor cards appear via UTM-tracked links (visible in HTML); to sponsor, contact `@Folyd` on Twitter/X directly. Founders can be listed for free indefinitely — there's no paid tier to boost ranking.
- **No public API.** `/api` and similar routes 404. Programmatic access requires scraping (against ToS) or direct contact. Third-party scrapers exist for similar platforms (TrustMRR has an Apify scraper) — none documented for Arrfounder as of April 2026.
- **Leaderboard rank = ARR from bio only.** If a founder has multiple startups with separate revenue, and only one is in their Twitter/X bio, the other doesn't count. Contrast with StartuPage's "Top Founders" which aggregates across connected sub-pages.
- **Platform is small and solo-built** — founded 2024 by @Folyd (same person behind Geddle). Feature set evolves; leaderboard tiers (currently `Under $1K` / `$1K-$10K` / `$10K-$100K` / `$100K-$1M` / `$1M-$10M` / `$10M+`) and the "Friends" section (Geddle, Aiberm, Meiguo) are subject to change. Check the site before quoting specifics.
- **Verification is "social proof" — reputational, not cryptographic.** The implicit check is "this is a real Twitter/X account the community recognizes" + "founders would be called out if they lied publicly". That's meaningful for peer discovery but won't survive an acquirer's CPA or a due-diligence checklist. Be upfront with buyers/investors about which proof you have.
- **Rejected or stuck submissions have no retry UX.** If your submission is silently ignored or rejected, the only recourse is to re-submit via Airtable (with a fixed bio) or DM @Folyd on Twitter/X. No ticket system or support email.

## Related skills

- `/sales-trustmrr` — TrustMRR platform help (API-verified revenue marketplace by Marc Lou — Stripe / LemonSqueezy / Polar / Paddle / RevenueCat / Superwall / Creem / Dodo integrations, APA-only acquisition escrow). Use alongside Arrfounder when you actually want to *sell* or need payment-provider-grade proof.
- `/sales-startupage` — StartuPage platform help (founder-ecosystem with API-verified MRR via 5 providers + 4-track Opportunity marketplace). Heavier-weight alternative to Arrfounder when you want a full profile + hiring / fundraising / co-founder / acquisition posts, not just a directory listing.
- `/sales-side-project-valuation` — Side project valuation and marketplace selection. Arrfounder is a *comp-check* input (see who's building at your revenue tier before pricing), not a marketplace.
- `/sales-indiehackers` — Indie Hackers (unverified self-reported revenue community with a different audience — IH is forum-first, Arrfounder is directory-first).
- `/sales-peerlist` — Peerlist (professional builder profile with weekly Launchpad — overlaps on "founder profile" but doesn't surface revenue leaderboards).
- `/sales-sideprojectors` — SideProjectors (free peer-to-peer showcase, DR69 backlink) — useful alongside Arrfounder for project visibility.
- `/sales-audience-growth` — Grow Twitter/X audience (Arrfounder ranks rely partly on followers; growth work happens off Arrfounder).
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Get listed on Arrfounder as a $3K MRR indie hacker
**User says**: "I run a $3K MRR SaaS, have 2K Twitter followers, want to get on Arrfounder. What do I do?"
**Skill does**:
1. Check current Twitter/X bio — it needs a clean `$3k MRR` (or `36k ARR`) string, product name, product URL, short description
2. Suggest bio format like: `Building Foo — $3k MRR SaaS that does X. foo.com. Also building Bar.`
3. Submit via the Airtable form (link from arrfounder.com/how-to-join)
4. Expect 24-48h approval; watch for the confirmation email
5. After approval, keep the bio accurate — updates auto-sync within hours
6. Note: Arrfounder listing is free and social-proof-based. For payment-provider-grade proof (investor / acquirer contexts), pair with StartuPage or TrustMRR.
**Result**: Bio ready, submission in, expectations set on verification strength.

### Example 2: Use Arrfounder to price a micro-SaaS sale
**User says**: "I'm about to list my $1.5K MRR SaaS on Acquire.com. Can I use Arrfounder to sanity-check my asking price?"
**Skill does**:
1. Confirms Arrfounder is for *discovery*, not transactions — asking price data comes from actual listings on Acquire / Flippa / TrustMRR
2. Uses Arrfounder's `$10K-$100K ARR` tier (your ~$18K ARR falls here) to browse 10-15 peer founders, note their product types and public growth stories
3. Cross-references against TrustMRR's public listings (API-verified) and Acquire.com closed-deal data for actual multiples
4. Positions Arrfounder as *one input* (comp set by stage), not a pricing source
5. Routes the actual pricing question to `/sales-side-project-valuation`
**Result**: User gets a useful peer-research step, then hands off to the valuation skill for the actual price.

### Example 3: Compare Arrfounder vs TrustMRR for founder credibility
**User says**: "I want a public 'verified revenue' page. Should I use Arrfounder or TrustMRR?"
**Skill does**:
1. Frames the axis: Arrfounder is social-proof-based (Twitter/X bio → AI extraction); TrustMRR is API-based (Stripe / LemonSqueezy / Polar / Paddle / RevenueCat / Superwall / Creem / Dodo read-only key)
2. Recommends **TrustMRR** if the audience is investors / acquirers / anyone who will demand provable numbers — cryptographic-ish proof matters there
3. Recommends **Arrfounder** if the audience is peer founders, Twitter followers, or community discovery — reach and curation matter more than forensic proof
4. Recommends **both in parallel** if the user wants maximum surface area — they attract overlapping-but-distinct audiences and are both free to list (TrustMRR's directory tier is free; boost tiers are optional)
5. Notes StartuPage as a third option that blends API verification with a founder ecosystem (hiring / fundraising / co-founder / acquisition posts) — read `/sales-startupage` if the user wants more than a directory entry.
**Result**: Clear trade-off framing with a concrete recommendation based on audience.

## Troubleshooting

### Profile not showing my correct revenue
**Symptom**: Listed on Arrfounder but ARR/MRR on profile is stale, wrong, or missing
**Cause**: Twitter/X bio changed, bio uses a format Arrfounder's AI doesn't pick up (e.g., "Making real money", "6 figures"), or the sync hasn't run yet
**Solution**: Open your Twitter/X bio and verify MRR or ARR appears as a distinct numeric string with `$` and `k`/`m` and `MRR`/`ARR` (e.g., `$5k MRR`, `$120k ARR`, `$2M ARR`). Remove fuzzy phrases. Save the bio and wait a few hours for the next sync. If still wrong after 24h, re-submit via the Airtable form with a note about the update, or DM `@Folyd` on Twitter/X. No in-platform edit UI exists.

### Submission was never approved (or silently rejected)
**Symptom**: Submitted via Airtable days ago, no confirmation email, profile doesn't appear
**Cause**: Usually one of: Twitter/X bio didn't have MRR/ARR in a parseable format, Twitter/X account looks inactive or low-quality, product URL doesn't resolve, submission failed the "real founder / real product" authenticity check
**Solution**: Update the Twitter/X bio first — put MRR/ARR near the top with a product URL that resolves to a real product page. Make sure the Twitter/X account has recent activity (tweets in the last 30 days). Re-submit via the Airtable form. If still nothing after another 48h, DM `@Folyd` on Twitter/X briefly noting the product and revenue — the team is small and a direct nudge is the only fast path.

### I need an API to pull leaderboard data programmatically
**Symptom**: Want to build a dashboard, comparison tool, or automation using Arrfounder data
**Cause**: Arrfounder has no public API (as of April 2026) — only the public website
**Solution**: The site renders server-side so data is visible in HTML. Scraping is technically feasible but violates ToS — do not build on it for anything public. The legitimate paths are: (1) DM `@Folyd` to request data access, (2) use TrustMRR's public API (`tmrr_*` Bearer token, 20 req/min, documented endpoints) if you can work with their ~100+ startup subset instead, (3) use FounderMRR which pulls from TrustMRR. For peer-research use cases a one-off manual browse is usually enough.
