---
name: sales-producthunt
description: "Product Hunt platform help — the largest product launch platform (DR91 dofollow, 5M+ monthly visits). Covers launch preparation (6-week timeline, asset checklist, supporter list building), launch day execution (24-hour window, first comment strategy, engagement tactics), 2026 algorithm changes (comment quality > raw upvotes, account age weighting, anti-manipulation), Pro ($100/mo) and Super Pro ($300/mo) tiers, Ship for pre-launch pages, Promoted Products ($4-6K/day), GraphQL API, and post-launch strategy. Use when preparing for a Product Hunt launch, optimizing an existing listing, understanding PH mechanics, or deciding PH timing. Do NOT use for multi-directory launch coordination (use /sales-launch-directory). Do NOT use for other launch platforms (use the platform-specific skill)."
argument-hint: "[describe what you need help with on Product Hunt]"
license: MIT
version: 1.0.0
tags: [sales, product-launch, startup, platform]
github: "https://github.com/producthunt"
---

# Product Hunt Platform Help

Helps with everything related to launching, promoting, and succeeding on Product Hunt — the largest product discovery platform with DR91 dofollow backlinks, 5M+ monthly visits, and a 24-hour daily launch window.

## Step 1 — Gather context

Ask the user:

1. **Where are you in the Product Hunt process?**
   - A) Planning a launch — haven't submitted yet
   - B) Preparing assets and building a supporter list
   - C) Launch day — need real-time guidance
   - D) Post-launch — analyzing results or planning relaunch
   - E) Researching whether PH is worth it for my product
   - F) Something else — describe it

2. **What's your product?**
   - A) SaaS / web app
   - B) Mobile app
   - C) Developer tool / API
   - D) AI / ML product
   - E) Physical product, browser extension, or other

3. **Have you launched on PH before?**
   - A) No — first launch
   - B) Yes — relaunching with a major update (6-month minimum gap required)
   - C) Yes — looking to improve on a previous launch

4. **What's your budget for PH-specific promotion?**
   - A) $0 — organic only
   - B) Under $100 — Pro tier
   - C) $100-300 — Super Pro tier
   - D) $1,000+ — Promoted Products or ads

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Multi-directory launch planning → `/sales-launch-directory`
- Email marketing to launch supporters → `/sales-email-marketing`
- Landing page optimization → `/sales-checkout`
- Audience growth for pre-launch → `/sales-audience-growth`
- Other specific launch platform → route to that platform's skill

Otherwise, answer directly from the Product Hunt knowledge below.

## Step 3 — Product Hunt platform reference

### How Product Hunt works

- **Daily launches**: Products launch at 12:01 AM PT and compete for 24 hours
- **Ranking**: Algorithmic — NOT purely upvote count. The 2026 algorithm heavily weights comment quality, account age, and engagement patterns
- **Featured vs. not featured**: PH editorial team decides which products get featured on the homepage. Non-featured products get minimal visibility
- **Relaunch rule**: Must wait 6 months between launches, and the new launch must represent a major update
- **Maker profile**: Claim your product as a maker for credibility badge and ability to respond to comments

### 2026 algorithm changes (Q1 update)

The algorithm now punishes manufactured engagement and rewards genuine community participation:

- **Comment quality > raw upvotes**: 50 upvotes + 30 genuine, substantive comments outranks 200 upvotes + 5 generic comments
- **Account age matters**: Votes from accounts active 6+ months carry significantly more weight than new accounts
- **Spike detection**: Sudden vote surges (e.g., 100 votes in 10 minutes) trigger anti-manipulation filters. Steady engagement throughout the day is rewarded
- **New accounts are weak signals**: Accounts created shortly before a launch carry almost no weight
- **"Ask for feedback, not upvotes"**: Framing your ask as "check out my product and let me know what you think" performs better algorithmically than "please upvote"

### Launch preparation (6-week timeline)

**Week 1-2: Foundation**
- Create or update your PH maker profile
- Study top launches in your category — note their taglines, screenshots, first comments
- Start engaging on PH daily (upvote, comment genuinely on other products) to build account credibility

**Week 3-4: Assets**
- **Tagline**: Problem-focused, under 60 characters. Lead with what it solves, not what it is
- **Description**: First paragraph = pain point. Second = how you solve it. Third = social proof or differentiator
- **Thumbnail/Logo**: 240×240px, clean, recognizable at small size
- **Gallery**: 5-8 images or a mix of images + video. First image is the hero — it must communicate value instantly
- **Video**: 1-2 minute demo. Show the product in action solving the core problem. No long intros
- **First comment**: Draft a 200-300 word maker comment covering: why you built it, what problem it solves, what's new/different, a specific ask for feedback

**Week 5-6: Community building**
- Build a list of 300-500 supporters (past users, newsletter subscribers, Twitter followers, beta testers)
- Prepare a personal message template (NOT "please upvote" — instead "I'm launching X, would love your honest feedback")
- Schedule social media posts for launch day
- Prepare responses for common questions and objections
- Choose your launch day: **Tuesday, Wednesday, or Thursday** — avoid Monday (backlog competition) and Friday-Sunday (lower traffic)

### Launch day execution

**12:01 AM PT — Product goes live**
1. Post your first comment immediately — this is the most-read piece of content on your launch page
2. Send your supporter notification within the first 1-2 hours (not all at once — stagger over 2-3 hours to avoid spike detection)
3. Be available ALL DAY to respond to every comment within 15-30 minutes
4. Share on social media with direct links (Twitter/X, LinkedIn, relevant communities)
5. Do NOT ask for upvotes — ask for feedback, opinions, and honest reviews
6. Engage genuinely with other products launching the same day — the community notices

**Engagement throughout the day:**
- Respond to every comment substantively (not just "thanks!")
- Ask follow-up questions to commenters
- Share behind-the-scenes context, data, or stories
- Update your first comment if you hit milestones or get common questions

### Pricing tiers

| Tier | Cost | What you get |
|---|---|---|
| Free launch | $0 | Standard listing, 24-hour window, DR91 dofollow backlink |
| Pro | $100/mo | Analytics dashboard, A/B test taglines, scheduled launches, priority support |
| Super Pro | $300/mo | Everything in Pro + featured placement boost, custom launch URL, team collaboration |
| Ship (Pre-launch) Pro | $59/mo | Pre-launch page, email collector, "notify me" button, early follower building |
| Ship Super Pro | $199/mo | Everything in Ship Pro + advanced analytics, custom domain, integrations |
| Promoted Product | $4,000-6,000/day | Guaranteed top-of-page placement (not organic ranking — marked as promoted) |
| Self-serve ads | $5,000-10,000+ | CPM-based display ads across PH |

### GraphQL API

- **Endpoint**: `https://api.producthunt.com/v2/api/graphql`
- **Auth**: OAuth 2.0 or Developer Token (create at producthunt.com/v2/oauth/applications)
- **Rate limit**: 6,250 complexity points per 15 minutes
- **Key queries**: posts, topics, collections, goals, users, comments
- **Webhooks**: Not natively supported — use polling or third-party integrations

For full API reference, see `references/producthunt-api-reference.md`.

## Step 4 — Actionable guidance

Based on the user's situation, provide specific recommendations:

**For first-time launchers:**
1. Follow the 6-week timeline above — do NOT rush
2. Launch on smaller directories first (use `/sales-launch-directory` to plan the sequence)
3. Build genuine PH engagement for 4-6 weeks before your launch
4. Prepare for the reality: ~80% of launches don't achieve their goals, usually because they launched without an audience

**For relaunchers:**
1. Verify you're past the 6-month minimum
2. Document what's genuinely new — the community will call out shallow relaunches
3. Reference your original launch in your first comment ("Last time we launched X, your feedback led us to build Y")

**For "is PH worth it?" questions:**
1. PH is worth it for: dofollow DR91 backlink (free), social proof, early adopter feedback, potential press coverage
2. PH is NOT worth it for: sustained traffic (it's a spike, not a stream), guaranteed users (conversion rates average ~3%), or if you have no audience to activate
3. Best strategy: Use PH as the *capstone* of a multi-platform launch, not the starting point

**For budget optimization:**
- $0: Organic launch works fine — most top products are free launches. Focus on preparation and community building
- $100/mo: Pro tier is worth it if you want A/B testing and analytics
- $300/mo: Super Pro only if you have high-stakes launch (funded startup, major pivot)
- $4K+/day: Promoted Products are for brand awareness, not community engagement — the community often ignores or downvotes obviously promoted content

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **"Featured" is not guaranteed.** PH's editorial team decides what gets featured on the homepage. Non-featured products get very little organic visibility. There's no paid way to guarantee featuring (Promoted Products are marked separately).
- **Upvote services are counterproductive.** The 2026 algorithm detects vote manipulation. Spending $1,500-2,000 on upvote services can actually hurt your ranking. Genuine comments from established accounts matter far more.
- **You're competing against whoever else launches that day.** Even a great product can finish behind a food blender if the competition is unusually strong. This is uncontrollable — plan for it by not betting everything on PH.
- **The traffic spike is temporary.** Expect 1-3 days of elevated traffic, then a return to baseline. PH is not a sustained traffic source — it's a launch event.
- **Product pages aren't searchable before launch day.** You can't drive pre-launch followers to your product page via search. Use Ship for pre-launch pages.
- **Conversion rates are modest.** Typical indie launches see ~3% visitor-to-signup conversion. Don't expect thousands of users from a PH launch alone.
- **6-month relaunch restriction.** You must wait 6 months and have a genuinely major update. Gaming this gets called out by the community.
- **Pro/Super Pro pricing may change.** Verify current pricing at producthunt.com before purchasing.

## Related skills

- `/sales-launch-directory` — Coordinate launches across 20+ directories, with PH as the capstone. Install:
  `npx skills add sales-skills/sales --skills sales-launch-directory`
- `/sales-fazier` — Fazier platform help (DR81 dofollow, highest from any first-party directory)
- `/sales-uneed` — Uneed platform help (DR74 dofollow, daily voting competitions)
- `/sales-peerlist` — Peerlist platform help (weekly Launchpad, 203K+ users)
- `/sales-devhunt` — DevHunt platform help (developer tools, GitHub-authenticated voting)
- `/sales-audience-growth` — Grow your email list before launch
- `/sales-email-marketing` — Email your supporter list on launch day
- `/sales-checkout` — Optimize your landing page for PH traffic conversion
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Plan a first-time Product Hunt launch
**User says**: "I'm launching my AI writing tool on Product Hunt next month. What should I do to prepare?"
**Skill does**:
1. Walks through the 6-week preparation timeline
2. Recommends launching on smaller directories first (via `/sales-launch-directory`) to refine the listing
3. Provides asset checklist: tagline, description, gallery, video, first comment
4. Advises building a 300-500 person supporter list
5. Recommends Tuesday-Thursday launch day
6. Warns about 2026 algorithm: focus on genuine comments over vote counts
**Result**: Complete launch preparation plan with timeline, assets, and community strategy

### Example 2: Decide whether Product Hunt is worth it
**User says**: "I have a niche B2B tool with 50 customers. Is Product Hunt worth the effort?"
**Skill does**:
1. Explains PH is a consumer-leaning audience — B2B tools can succeed but expectations should be modest
2. Notes the DR91 dofollow backlink is worth it alone for SEO
3. Warns conversion rates average ~3% and traffic spike is temporary
4. Recommends PH as part of a multi-platform strategy, not the sole launch channel
5. Suggests using `/sales-launch-directory` to launch on niche directories first
**Result**: Honest assessment with realistic expectations and alternative strategy

### Example 3: Optimize launch day execution
**User says**: "I'm launching tomorrow on PH. What should I do on launch day?"
**Skill does**:
1. Reminds to post first comment at 12:01 AM PT immediately
2. Advises staggering supporter outreach over 2-3 hours (not all at once — triggers spam detection)
3. Emphasizes responding to every comment within 15-30 minutes
4. Warns against asking for upvotes — ask for feedback instead
5. Recommends engaging with other products launching the same day
6. Suggests updating first comment if common questions emerge
**Result**: Hour-by-hour launch day execution guide

## Troubleshooting

### Launched but not featured on homepage
**Symptom**: Product is live but not visible on the PH homepage
**Cause**: PH's editorial team decides featuring. Not all products get featured. Non-featured products appear only via direct link or search.
**Solution**: There's no guaranteed way to get featured. Best practices: have a complete, polished listing (all assets filled), genuine early engagement, and a product that fits PH's audience (consumer-facing or developer tools tend to get featured more). If not featured, your DR91 backlink is still live — the SEO value doesn't require featuring.

### High upvotes but low ranking
**Symptom**: Your product has more upvotes than products ranked above you
**Cause**: The 2026 algorithm weights comment quality, account age, and engagement patterns — not just upvote count. Sudden vote spikes from new accounts can actually lower your ranking.
**Solution**: Focus on driving genuine comments from established PH accounts. Respond to every comment substantively. Ask commenters follow-up questions. Quality of engagement beats quantity of votes.

### Traffic spike but zero conversions
**Symptom**: Got thousands of PH visitors but very few signups
**Cause**: PH visitors are browsers, not buyers. Average conversion is ~3%. If your landing page isn't optimized for cold visitors, conversion drops further.
**Solution**: Ensure your landing page has a clear CTA above the fold, loads fast, and explains value in 5 seconds. Use `/sales-checkout` to optimize. Consider adding a PH-specific landing page variant with "As seen on Product Hunt" social proof.
