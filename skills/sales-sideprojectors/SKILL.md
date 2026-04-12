---
name: sales-sideprojectors
description: "SideProjectors platform help — marketplace to buy, sell, and showcase side projects with 24,600+ listings. Covers selling projects (free listing, no commission, no escrow), buying projects (source code, docs, service accounts), co-founder matching, project showcase for community feedback, editorial review process, and DR69 do-follow backlinks. Use when your side project needs more visibility, you want to sell a project but don't know how to price it, you're looking for a co-founder, you need early feedback on a project, or you want the DR69 backlink from SideProjectors. Do NOT use for general product launch strategy across platforms (use /sales-funnel), email marketing (use /sales-email-marketing), or startup directory listings without buy/sell (use /sales-launchingnext or /sales-microlaunch)."
argument-hint: "[describe what you need help with on SideProjectors]"
license: MIT
version: 1.0.0
tags: [sales, marketplace, side-project, startup, platform]
---
# SideProjectors Platform Help

Helps the user with SideProjectors platform questions — from listing a side project for sale and finding co-founders through buying projects, showcasing work, and maximizing directory backlink value.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Selling a project — listing, pricing, description
   - B) Buying a project — finding, evaluating, due diligence
   - C) Finding a co-founder — matching, pitching, structuring equity
   - D) Showcasing a project — visibility, feedback, community engagement
   - E) SEO backlinks — getting listed for the DR69 backlink
   - F) Something else — describe it

2. **What's your project?**
   - A) SaaS / web app
   - B) Mobile app
   - C) E-commerce / marketplace
   - D) Developer tool / API
   - E) Content site / blog
   - F) Other — describe it

3. **What stage is the project?**
   - A) Working product with users/revenue
   - B) Working product, no users yet
   - C) MVP / prototype
   - D) Idea stage
   - E) Abandoned — want to sell or find someone to take over

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Product launch strategy across multiple platforms → `/sales-funnel`
- Startup directory listing (not buy/sell) → `/sales-launchingnext` or `/sales-microlaunch`
- Email marketing to subscribers → `/sales-email-marketing`
- Landing page / checkout optimization → `/sales-checkout`
- Audience growth → `/sales-audience-growth`

Otherwise, answer directly from platform knowledge below.

## Step 3 — SideProjectors platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Provide guidance based on the user's goal (selling, buying, co-founder search, showcase/backlink). Use the platform guide for reference data, then focus on actionable next steps tailored to their situation.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No escrow or payment handling.** SideProjectors only connects buyers and sellers. All transactions happen peer-to-peer. Use a third-party escrow service for any significant purchase.
- **No buyer verification.** Unlike Acquire.com (verified buyers with $2B+ in funds), anyone can express interest on SideProjectors. Vet buyers yourself before sharing sensitive project details.
- **Traffic is very low.** ~723 monthly visitors across the entire site. Don't expect a flood of buyer inquiries — this is a long-tail marketplace. The primary value for many users is the DR69 backlink.
- **Must have a working product.** Unlike some directories that accept ideas or pre-launch products, SideProjectors requires a live website or app. MVP is fine, but vaporware will be rejected.
- **Premium features exist but pricing is opaque.** Enhanced visibility, priority support, and advanced analytics are available as premium features, but pricing isn't publicly listed. Contact hello@sideprojectors.com for current rates before assuming it's entirely free.
- **Editorial review has no guaranteed timeline.** Submissions are reviewed by the team, but there's no documented SLA. Could be hours, could be days.
- **Free means no support infrastructure.** No dispute resolution, no refund mechanism, no transaction guarantees. You're on your own for the transaction itself.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-launch-directory` — Launch strategy across multiple startup directories
- `/sales-ctrlaltcc` — CtrlAlt.cc platform help (curated tool directory)
- `/sales-microlaunch` — MicroLaunch platform help (30-day leaderboard, deals marketplace)
- `/sales-launchingnext` — LaunchingNext platform help (curated startup directory)
- `/sales-openlaunch` — Open Launch platform help (open-source PH alternative, DR65 backlinks)
- `/sales-productburst` — ProductBurst platform help (daily/weekly rankings, badges)
- `/sales-solopush` — SoloPush platform help (indie maker community)
- `/sales-huzzler` — Huzzler platform help (founder community, weekly Launch Arena competition)
- `/sales-firsto` — Firsto platform help (fair launch platform, sustained SEO discovery)
- `/sales-funnel` — Build and optimize sales funnels for conversion
- `/sales-digital-products` — Sell digital products (ebooks, templates, SaaS)
- `/sales-checkout` — Optimize landing pages and checkout for conversion
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Sell an abandoned SaaS project
**User says**: "I built a SaaS tool 2 years ago but stopped working on it. It has 50 users and $200/mo MRR. How do I sell it on SideProjectors?"
**Skill does**:
1. Walks through the selling checklist: clean code, gather metrics, write description
2. Helps price the project: $200 MRR × 12 = $2,400 ARR, suggest asking $2,400-$7,200 (1-3x)
3. Recommends preparing transfer documentation (domain, hosting, Stripe, API keys)
4. Warns about no escrow — suggests using Escrow.com for the transaction
5. Suggests also listing on Acquire.com for higher-value buyer pool
**Result**: Listing optimized with realistic pricing and safe transaction plan

### Example 2: Find a co-founder for a side project
**User says**: "I have a working MVP but I'm a solo developer and need a business co-founder to help with marketing and sales"
**Skill does**:
1. Recommends creating a co-founder listing (not "for sale")
2. Suggests what to include: product demo, tech stack, traction so far, what skills you need
3. Advises on equity split considerations for side projects
4. Recommends also posting on Indie Hackers and Y Combinator co-founder matching
5. Warns to vet co-founder candidates carefully — meet on video, check references
**Result**: Co-founder listing that attracts the right collaborator

### Example 3: Get a DR69 backlink from SideProjectors
**User says**: "I just want the backlink from SideProjectors for SEO. What's the fastest way?"
**Skill does**:
1. Recommends a showcase listing (not "for sale") to get the do-follow backlink
2. Notes the requirement: must have a working product with a live URL
3. Walks through minimal submission: description, screenshots, category tags
4. Suggests optimizing the listing description for target keywords
5. Recommends pairing with other high-DR directories: MicroLaunch (DR59), LaunchingNext (DR51)
**Result**: Backlink secured as part of a multi-directory SEO strategy

## Troubleshooting

### Listed a project for sale but no buyers
**Symptom**: Project has been listed for weeks/months with no inquiries
**Cause**: SideProjectors has ~723 monthly visitors across all 24,600+ listings. Individual listings get a tiny fraction of that traffic. The platform is a long-tail marketplace — most projects sit without activity.
**Solution**: Don't rely on SideProjectors as your only sales channel. Cross-list on Acquire.com (higher-value buyers, built-in escrow), 1Kprojects (if under $1K), and Flippa (auction model, broader audience). Share your SideProjectors listing on Twitter, Indie Hackers, and relevant subreddits. Lower your price if it's been sitting — the market is telling you something.

### Worried about getting scammed as a buyer
**Symptom**: Found an interesting project but concerned about legitimacy
**Cause**: SideProjectors has no buyer protection, no escrow, and no verification. Scams are possible on any peer-to-peer marketplace without safeguards.
**Solution**: Never send payment without verifying: (1) request a live demo over video call, (2) ask for analytics access (Google Analytics, Stripe dashboard), (3) check the seller's online presence and history, (4) use a third-party escrow service like Escrow.com for transactions over $500, (5) get a written agreement listing exactly what's included in the sale and any post-sale support.

### Submission rejected or stuck in review
**Symptom**: Submitted a project but it wasn't approved or there's been no response
**Cause**: SideProjectors requires a working product with a live URL. Idea-stage or pre-launch projects will be rejected. The editorial review timeline is not guaranteed.
**Solution**: Ensure you have a live, working product at the submitted URL. Add quality screenshots and a clear description. If it's been more than a week, email hello@sideprojectors.com to check status. If your project is pre-launch, use a showcase-friendly directory like LaunchingNext or MicroLaunch instead.
