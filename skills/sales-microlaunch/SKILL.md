---
name: sales-microlaunch
description: "MicroLaunch platform help — product launch and discovery platform for startups and indie makers. Covers month-long launch cycles (leaderboard ranking over 30 days vs Product Hunt's 1-day window), community scoring (separate idea and product scores), Pro Launch (skip queue, 2x boosts, featured spots, Product of the Day), deals marketplace (lifetime deals, discounts), DR59+ do-follow SEO backlinks, auto distribution (4+ SEO-optimized pages), verified product reviews, and landing page audits. Use when you want more visibility for your product on MicroLaunch, your listing isn't getting votes, need traffic from a launch directory, or unsure whether Pro Launch is worth it. Do NOT use for general launch strategy across multiple directories (use /sales-launch-directory), email marketing (use /sales-email-marketing), or audience growth (use /sales-audience-growth)."
argument-hint: "[describe what you need help with on MicroLaunch]"
license: MIT
version: 1.0.0
tags: [sales, product-launch, startup, discovery, platform]
---
# MicroLaunch Platform Help

Helps the user with MicroLaunch platform questions — from preparing a product launch and optimizing listings through leaderboard strategy, deals marketplace, and maximizing SEO backlinks.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Launching a product — preparing listing, timing, strategy
   - B) Climbing the leaderboard — getting votes, engagement, visibility
   - C) Deals marketplace — publishing lifetime deals or discounts
   - D) SEO backlinks — maximizing backlink value from MicroLaunch
   - E) Product reviews — getting verified reviews and badges
   - F) Pro Launch vs free — deciding whether to upgrade
   - G) Landing page audit — getting a product review session
   - H) Something else — describe it

2. **What stage is your product?**
   - A) Pre-launch — haven't submitted yet
   - B) In queue — submitted, waiting to go live
   - C) Live on leaderboard — currently in a launch cycle
   - D) Post-launch — cycle ended, evaluating results
   - E) Considering MicroLaunch — haven't decided yet

3. **What's your goal?**
   - A) First customers / revenue
   - B) Feedback and validation
   - C) SEO backlinks and visibility
   - D) Deals marketplace sales
   - E) All of the above

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Launch strategy across multiple directories → `/sales-launch-directory`
- Product launch strategy and funnels → `/sales-funnel`
- Email list building / audience growth → `/sales-audience-growth`
- Email marketing to subscribers → `/sales-email-marketing`
- Selling digital products → `/sales-digital-products`
- Landing page / checkout optimization → `/sales-checkout`

Otherwise, answer directly from platform knowledge below.

## Step 3 — MicroLaunch platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Pre-launch checklist** — what to prepare before submitting
2. **Engagement strategy** — how to climb the leaderboard over 30 days
3. **Deal pricing** — how to structure lifetime deals for maximum revenue
4. **Post-launch playbook** — what to do after the cycle ends

### Pre-launch checklist

| Step | What to do | Why it matters |
|---|---|---|
| 1. Polish your landing page | Clear value prop, social proof, CTA | MicroLaunch sends traffic — convert it |
| 2. Prepare screenshots | Product in action, problem/solution framing | First impression determines engagement |
| 3. Write your tagline | Problem-focused, under 60 chars | Drives clicks from the leaderboard |
| 4. Set up analytics | UTM parameters, conversion tracking | Measure MicroLaunch ROI |
| 5. Prepare a deal (optional) | Lifetime deal or discount for marketplace | Drives immediate revenue |
| 6. Decide free vs Pro | $39/mo for skip queue + 2x boost + backlinks | Pro pays for itself if you value DR59 backlinks |

### 30-day engagement strategy

Unlike Product Hunt, MicroLaunch rewards sustained engagement over a month:

- **Week 1** — Initial push: share with your network, respond to every comment
- **Week 2** — Content: post updates, share behind-the-scenes in the community
- **Week 3** — Feedback: ask for specific feedback, iterate publicly on suggestions
- **Week 4** — Close strong: share progress metrics, thank voters, final push

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free queue can be long.** Without Pro Launch, your product joins a waitlist with no guaranteed launch date. If timing matters, pay the $39.
- **MicroLaunch is small.** ~2,600 daily visitors and ~103 active products. Don't expect Product Hunt-level traffic. Set realistic expectations — this is about steady traction, not viral spikes.
- **Pro Launch has 40 spots/month.** This is a real cap. If you're planning a launch around a specific date, secure your Pro spot early.
- **Deals marketplace requires Pro.** You can't publish lifetime deals or discounts on the free tier.
- **Engagement is key, not just submitting.** Products that "submit and forget" sink on the leaderboard. The month-long window rewards founders who actively engage with the community.
- **Pricing has changed before.** The current $39/mo Pro price (with LAUNCH20 code) may revert to $49. Check microlaunch.net/premium for current rates.
- **Don't treat it as your only launch channel.** MicroLaunch works best as part of a multi-platform launch strategy (Product Hunt, BetaList, Indie Hackers, Hacker News). Use it for the sustained 30-day window and backlinks, not as a standalone channel.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-launch-directory` — Launch strategy across multiple startup directories
- `/sales-ctrlaltcc` — CtrlAlt.cc platform help (curated tool directory)
- `/sales-productburst` — ProductBurst platform help (daily/weekly rankings, badges)
- `/sales-launchingnext` — LaunchingNext platform help (curated startup directory)
- `/sales-openlaunch` — Open Launch platform help (open-source PH alternative, DR65 backlinks)
- `/sales-solopush` — SoloPush platform help (indie maker community)
- `/sales-sideprojectors` — SideProjectors platform help (buy/sell side projects)
- `/sales-huzzler` — Huzzler platform help (founder community, weekly Launch Arena competition)
- `/sales-firsto` — Firsto platform help (fair launch platform, sustained SEO discovery)
- `/sales-funnel` — Build and optimize sales funnels for conversion
- `/sales-audience-growth` — Grow your email list and subscriber base
- `/sales-digital-products` — Sell digital products (ebooks, templates, SaaS)
- `/sales-checkout` — Optimize landing pages and checkout for conversion
- `/sales-email-marketing` — Email marketing to nurture leads from your launch
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Prepare a SaaS launch on MicroLaunch
**User says**: "I built an AI writing tool and want to launch it on MicroLaunch to get my first customers"
**Skill does**:
1. Walks through the pre-launch checklist: polish landing page, prepare screenshots, write a problem-focused tagline
2. Recommends Pro Launch ($39) for skip-queue, 2x boost, and DR59 backlinks
3. Suggests preparing a lifetime deal for the marketplace (e.g., $49 LTD for early adopters)
4. Outlines the 30-day engagement strategy: initial push, content updates, feedback iteration, close strong
5. Recommends setting up UTM tracking to measure MicroLaunch traffic and conversions
**Result**: Launch plan with clear timeline, deal strategy, and engagement playbook

### Example 2: Publish a lifetime deal on the marketplace
**User says**: "I want to sell a lifetime deal for my project management tool on MicroLaunch"
**Skill does**:
1. Confirms Pro Launch is required for marketplace access
2. Helps structure the LTD: one-time price, what's included, any limitations (seats, usage caps)
3. Recommends pricing strategy: anchor to monthly price (e.g., "$149 LTD = 3 months of the Pro plan, forever")
4. Suggests creating urgency: limited quantity or limited-time window
5. Explains how to track deal revenue through MicroLaunch
**Result**: Lifetime deal published on marketplace with clear pricing and urgency

### Example 3: Decide between free and Pro Launch
**User says**: "Is it worth paying for Pro Launch or should I just do the free submission?"
**Skill does**:
1. Compares free vs Pro: queue wait vs immediate launch, 1x vs 2x visibility, no backlinks vs DR59+ do-follow
2. Calculates ROI: a single DR59 do-follow backlink is worth $100-300+ in SEO value — Pro pays for itself
3. Notes the 40 spots/month cap and potential queue delays on free
4. Recommends Pro if they have a landing page ready and want to launch within a specific window
5. Recommends free only if budget is zero and timing is flexible
**Result**: Data-driven decision on plan choice with clear ROI framework

## Troubleshooting

### Product stuck in free queue
**Symptom**: Submitted weeks ago but product hasn't gone live on the leaderboard
**Cause**: Free submissions join a waitlist. MicroLaunch prioritizes Pro launches (40/month) and queues free submissions behind them. High submission volume can extend wait times significantly.
**Solution**: If timing matters, upgrade to Pro Launch ($39/mo) to skip the queue immediately. If budget is tight, be patient — your product will eventually go live. You can use the wait time to polish your listing, prepare screenshots, and build an audience to engage when you do go live.

### Low engagement despite being on the leaderboard
**Symptom**: Product is live but barely getting votes or comments
**Cause**: MicroLaunch rewards active participation. "Submit and forget" listings get buried as engaged products climb. Your tagline or screenshots may not be compelling enough, or you're not engaging with the community.
**Solution**: Improve your tagline (problem-focused, not feature-focused). Update screenshots to show the product in action. Engage with other products — comment, vote, provide feedback. Share your MicroLaunch listing with your existing audience (Twitter, email list, communities). Post progress updates during the month.

### Launch didn't generate expected traffic or sales
**Symptom**: Month ended with few clicks and no conversions
**Cause**: MicroLaunch has ~2,600 daily visitors across all products. Even a top-ranking product will see hundreds, not thousands, of visitors. Conversion depends on your landing page quality.
**Solution**: Check your analytics — if MicroLaunch sent traffic but it didn't convert, the issue is your landing page (use `/sales-checkout` for optimization). If traffic was low, your leaderboard position may have been too low — review engagement strategy for next time. Consider the $129 Product Review session for a landing page audit. Remember: MicroLaunch works best as one channel in a multi-platform launch, not your sole traffic source.
