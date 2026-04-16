---
name: sales-betalist
description: "BetaList platform help — pre-launch startup discovery directory where early adopters find startups before they make it big (15,000+ featured startups, 100K+ early adopters, DR67 dofollow backlink). Covers submission optimization, acceptance criteria (21% acceptance rate), free queue vs $129 Priority listing, newsletter inclusion (30K+ subscribers), listing best practices, and API access. Use when your startup needs early adopter signups, BetaList submission got rejected, not sure if Priority listing is worth $129, or listing isn't attracting enough interest. Do NOT use for multi-directory launch strategy (use /sales-launch-directory). Do NOT use for Product Hunt (use /sales-producthunt)."
argument-hint: "[describe what you need help with on BetaList]"
license: MIT
version: 1.0.0
tags: [sales, product-launch, startup, directory, platform]
github: "https://github.com/betalist"
---

# BetaList Platform Help

Helps with everything related to using BetaList — a pre-launch startup discovery platform founded in 2010 by Marc Kohlbrugge. BetaList connects founders with 100,000+ registered early adopters who actively seek new products to try before mainstream launch.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you trying to do on BetaList?**
   - A) Submit my startup for the first time
   - B) Optimize an existing or upcoming listing
   - C) Decide between free queue and Priority ($129)
   - D) Understand why my submission was rejected
   - E) Access the BetaList API
   - F) Something else — describe it

2. **What stage is your product?**
   - A) Pre-launch — no public access yet (private beta, waitlist)
   - B) Recently launched — live but early stage
   - C) Established — been live for a while
   - D) Not sure if BetaList is the right fit

3. **What's your primary goal?**
   - A) Get beta testers and early feedback
   - B) SEO backlink (DR67 dofollow)
   - C) Newsletter exposure (30K+ subscribers)
   - D) All of the above

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a different skill, route:
- Multi-directory launch strategy → `/sales-launch-directory`
- Product Hunt launch → `/sales-producthunt`
- General audience growth → `/sales-audience-growth`
- Email marketing for subscribers → `/sales-email-marketing`
- Landing page optimization → `/sales-checkout`

Otherwise, answer directly from the platform knowledge below.

## Step 3 — BetaList platform reference

**Read `references/platform-guide.md`** for detailed directory documentation, pricing, acceptance criteria, and backlink value.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### Optimizing your BetaList submission

| Element | Best practice |
|---|---|
| Tagline | Lead with the problem you solve, under 60 chars. "Find leads who visit your website" > "AI-powered B2B lead generation platform" |
| Description | Focus on what makes you different, not feature lists. Address: What problem? For whom? Why now? |
| Screenshots | Show the product in action — real UI, not marketing graphics. Include at least one GIF showing core workflow |
| Thumbnail GIF | Add one animated GIF as thumbnail — it stands out in the directory. Use brand colors, not white background. Ideal size: 800x600px (displayed at 400x300px) |
| URL | Working landing page with clear CTA (signup, waitlist, beta access). Must be your own domain |
| Category | Pick the most specific category that fits — BetaList shows category pages |

### Free queue vs Priority ($129) decision

**Pay for Priority when:**
- You're coordinating a multi-platform launch and need timing control
- You're pre-launch with a narrow beta window — 2 months is too long
- The $129 is worth it for the guaranteed newsletter exposure
- You want the DR67 backlink NOW, not in 2 months

**Stay in the free queue when:**
- No timing pressure — you're playing the long game
- Budget is tight and you can wait
- You're submitting to many directories and BetaList is just one of them
- You want to use the queue time to refine your product

**ROI math:** BetaList typically delivers 200-500 visitors with 15-20% conversion rates. At $129 Priority: $0.50-$1.40 per signup. Free queue: $0 per signup but 2+ month delay.

### Maximizing results after featuring

1. **Be ready on launch day** — your listing is live for 24 hours on the homepage. Have your landing page, onboarding, and support ready
2. **Respond to feedback** — early adopters who find you via BetaList are genuinely interested in trying new things. Engage with them
3. **Track with UTMs** — add `?utm_source=betalist&utm_medium=directory&utm_campaign=launch` to your submitted URL
4. **Don't waste the newsletter slot** — the daily newsletter reaches 30K+ subscribers. Your tagline and thumbnail are what drive clicks

### Improving a rejected submission

Since BetaList doesn't provide rejection reasons, work through this checklist:

1. **Landing page quality** — is the design professional? Does it load fast? Is the CTA obvious?
2. **Value proposition** — can a stranger understand what you do in 5 seconds?
3. **Uniqueness** — how is this different from existing solutions?
4. **Stage** — are you genuinely pre-launch or recently launched? Established products get rejected
5. **Domain** — are you on your own domain (not a subdomain of a hosting provider)?
6. **Previous launches** — have you already launched on Product Hunt? BetaList prefers exclusivity

## Gotchas

*Best-effort from research — review these, especially items about pricing and acceptance criteria that may be outdated.*

- **21% acceptance rate.** BetaList is selective — most submissions get rejected. Don't submit until your landing page is polished and your value proposition is crystal clear.
- **No rejection feedback.** If rejected, you won't know why. Use the checklist above to diagnose and improve, then resubmit.
- **Audience has shifted.** BetaList's audience skewed toward makers/builders after its 2011-2016 "golden era." Set expectations: you'll get early adopters who are often founders themselves, not mainstream consumers.
- **Queue time varies.** "~2 months" is typical but can be shorter or longer depending on submission volume.
- **$129 is non-refundable if accepted.** Only rejected Priority submissions get refunds. Once featured, no refunds regardless of results.
- **One shot per submission.** Each submission is reviewed independently. If rejected, improve and resubmit as a new submission.
- **Exclusivity preference.** BetaList favors products that haven't launched on other major platforms. If you've already done a Product Hunt launch, your chances decrease.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-launch-directory` — Multi-directory launch strategy across 30+ platforms (sequencing, backlink stacking, budget allocation)
- `/sales-producthunt` — Product Hunt platform help (largest launch platform, DR91 dofollow)
- `/sales-audience-growth` — Grow your email list and subscriber base
- `/sales-checkout` — Optimize your landing page for conversion before submitting
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Submit a SaaS tool to BetaList
**User says**: "I built a project management tool for remote teams and want to submit to BetaList"
**Skill does**:
1. Confirms product is pre-launch or recently launched (meets stage requirement)
2. Reviews landing page against acceptance criteria: value proposition clarity, design quality, own domain
3. Recommends tagline optimization: lead with the problem ("Remote teams lose 5 hours/week to status meetings") not the solution
4. Advises adding a product GIF as thumbnail with brand colors, 800x600px
5. Discusses free queue (~2 months) vs Priority ($129) based on their timing needs
**Result**: Optimized submission with clear value proposition, strong visuals, and informed queue/Priority decision

### Example 2: Decide whether $129 Priority is worth it
**User says**: "Should I pay $129 for BetaList Priority or just wait in the free queue?"
**Skill does**:
1. Asks about timing constraints and multi-platform launch coordination
2. Presents ROI math: 200-500 visitors at 15-20% conversion = 30-100 signups for $129
3. Compares to alternatives: waiting 2 months (free) vs guaranteed newsletter exposure (paid)
4. Recommends Priority if coordinating a launch or if the backlink timing matters for SEO
5. Recommends free queue if no timing pressure and budget is better spent on other directories
**Result**: Data-driven decision framework with clear recommendation based on their situation

### Example 3: Submission was rejected, need to improve
**User says**: "BetaList rejected my submission, what should I fix?"
**Skill does**:
1. Walks through the rejection diagnosis checklist: landing page quality, value proposition, uniqueness, stage, domain
2. Identifies likely issues based on what the user describes
3. Recommends specific improvements (sharpen tagline, add product demo GIF, clarify CTA)
4. Suggests resubmitting after fixes
5. Routes to `/sales-checkout` for landing page optimization if needed
**Result**: Actionable improvement plan with resubmission strategy

## Troubleshooting

### Submitted weeks ago, no response
**Symptom**: Submitted to the free queue but haven't heard back after 2+ weeks
**Cause**: The free queue takes ~2 months on average. BetaList notifies within ~1 week of acceptance/rejection, but queue position means your submission may not be reviewed for weeks.
**Solution**: Wait it out — the queue is real. If you need faster turnaround, upgrade to Priority ($129). If you've waited 3+ months with no notification, try resubmitting or contact support via betalist.com/contact.

### Got featured but traffic was low
**Symptom**: Listed on BetaList but only got 50-100 visitors instead of the expected 200-500
**Cause**: BetaList traffic varies by day, category, and competition from other featured startups. The audience has shifted toward makers since the platform's early years, so consumer products may underperform.
**Solution**: Don't rely on BetaList alone. Use it as one platform in a multi-directory launch strategy (`/sales-launch-directory`). Optimize your landing page for conversion (`/sales-checkout`) so the visitors you do get convert at a higher rate.

### Not sure if my product is the right fit
**Symptom**: Product is live but not sure if BetaList would accept it
**Cause**: BetaList targets pre-launch and recently launched startups. Established products, physical goods, and services typically don't fit.
**Solution**: BetaList works best for: SaaS, web apps, mobile apps, developer tools, and AI products that are pre-launch or just launched. If your product has been live for months with significant traction, it's likely too established. Consider Product Hunt (`/sales-producthunt`) or other directories (`/sales-launch-directory`) instead.
