---
name: sales-online-reputation
description: "Online reputation management strategy — monitoring reviews across Google, Yelp, Facebook, and industry sites, responding to negative reviews, generating more reviews, managing business listings, Google Business Profile optimization, reputation recovery after a crisis. Covers multi-location reputation at scale. Use when Google reviews disappeared or got removed, negative review is hurting your business, not getting enough reviews, business listings show wrong information, unsure which reputation management tool to pick, or your star rating is dropping. Do NOT use for ecommerce product review apps (use /sales-customer-reviews), B2B software reviews on G2 (use /sales-g2), or social listening for brand mentions (use /sales-social-listening)."
argument-hint: "[describe your reputation management question — e.g., 'how do I respond to a 1-star Google review' or 'which tool for managing reviews across 20 locations']"
license: MIT
version: 1.0.0
tags: [sales, reputation, reviews, listings, strategy]
---

# Online Reputation Management Strategy

Helps the user monitor, manage, and improve their online reputation — from collecting more reviews and responding to negative feedback through managing business listings, handling reputation crises, and choosing the right ORM tools.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Getting more reviews
   - B) Responding to a negative review
   - C) Reviews disappeared or were removed
   - D) Business listings show wrong information
   - E) Choosing a reputation management tool
   - F) Reputation recovery after a crisis or PR issue
   - G) Multi-location reputation management at scale
   - H) Google Business Profile optimization
   - I) Something else — describe it

2. **What type of business?**
   - A) Healthcare / dental
   - B) Home services (plumbing, HVAC, roofing, etc.)
   - C) Automotive
   - D) Restaurant / hospitality
   - E) Retail / multi-location
   - F) Professional services (legal, financial, real estate)
   - G) SaaS / B2B (→ probably /sales-g2 or /sales-trustpilot instead)
   - H) Other

3. **How many locations?** 1, 2-10, 11-50, 50+

4. **Current tools?** Birdeye, Podium, Yext, BrightLocal, NiceJob, Reputation.com, none, other

**If the user's request already provides enough context, skip to the relevant step.**

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Birdeye platform questions → `/sales-birdeye {your question}`
- Trustpilot-specific questions → `/sales-trustpilot {your question}`
- G2/B2B software reviews → `/sales-g2 {your question}`
- Customer feedback surveys (NPS, CSAT) → `/sales-customer-feedback {your question}`
- Ecommerce product reviews → `/sales-customer-reviews {your question}`
- Social media monitoring → `/sales-social-listening {your question}`

Otherwise, answer directly using the strategy guidance below.

## Step 3 — Reputation management strategy

**Read `references/platform-guide.md`** for detailed ORM strategy — review generation tactics, response templates, listings management, tool comparison, Google Business Profile optimization, crisis response playbook, and multi-location management.

Answer the user's question using only the relevant section.

## Step 4 — Actionable guidance

You no longer need the strategy guide — focus on the user's specific situation.

Key decision points:
- **Review generation**: SMS requests within 1 hour > email requests. Personalize with staff name. Don't incentivize (Google prohibits it).
- **Response strategy**: Respond to all reviews within 24-48 hours. Negative reviews: empathize, take offline, offer resolution. Positive reviews: thank briefly, reinforce what they liked.
- **Tool selection**: Single location → NiceJob or Broadly. Multi-location → Birdeye or Podium. Enterprise → Reputation.com or Yext.
- **Listings**: NAP consistency is foundational. Fix Google Business Profile first, then cascade to other directories.
- **Crisis**: Don't delete or argue. Respond publicly, take offline, fix the root cause, then bury negative content with positive review volume.

If you discover a tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about Google policies that change frequently.*

- **Google prohibits incentivized reviews.** No discounts, freebies, or rewards in exchange for reviews. Violations can get all your reviews removed.
- **Review gating violates Google policy.** Don't pre-screen customers and only send satisfied ones to Google. Send everyone the same review link.
- **Google reviews disappear without warning.** In Feb 2026, thousands of businesses lost reviews due to a Google display bug. Also, Gemini AI integration into review moderation caused 600%+ spike in deletions Jan-Jul 2025.
- **You can't delete negative reviews.** You can only flag reviews that violate Google's policies (spam, off-topic, conflicts of interest). Most flagged reviews are not removed.
- **ORM tools don't own your listings.** They sync data to directories, but Google/Yelp/Facebook can override with user-submitted edits at any time.
- **"Reputation management" vs "reputation repair" are different industries.** ORM is ongoing monitoring and review generation. Reputation repair is suppressing negative search results — that's a different (expensive) service.

## Related skills

- `/sales-birdeye` — Birdeye platform help (reviews, listings, messaging, surveys for multi-location). Install: `npx skills add sales-skills/sales --skills sales-birdeye`
- `/sales-trustpilot` — Trustpilot platform help (TrustBox widgets, TrustScore, Google Seller Ratings). Install: `npx skills add sales-skills/sales --skills sales-trustpilot`
- `/sales-g2` — G2 platform help (B2B software reviews, buyer intent data). Install: `npx skills add sales-skills/sales --skills sales-g2`
- `/sales-customer-reviews` — Product review collection strategy for ecommerce. Install: `npx skills add sales-skills/sales --skills sales-customer-reviews`
- `/sales-customer-feedback` — Customer feedback, NPS, CSAT strategy. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-social-listening` — Social listening and brand monitoring. Install: `npx skills add sales-skills/sales --skills sales-social-listening`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

**Example 1**: "I got a 1-star Google review from an angry customer who says we damaged their car. What do I do?"
→ Respond publicly within 24 hours: acknowledge their frustration, apologize for the experience, and ask them to contact you directly to resolve it. Don't argue facts publicly. After resolving offline, ask if they'd consider updating their review. Then increase review request volume to dilute the negative with fresh positives.

**Example 2**: "I have 15 auto repair locations and our Google ratings vary from 3.2 to 4.8. How do I bring the low performers up?"
→ Benchmark review volume and recency per location. Low-rated locations usually have low volume (a few bad reviews dominate). Implement automated SMS review requests at every location with consistent timing. Identify common complaints at low-rated locations (from review text) and fix operational issues. Set up location-level dashboards so managers see their own metrics.

**Example 3**: "Which reputation management tool should I use for my 3 dental offices?"
→ For 3 locations in healthcare, Birdeye is the strongest fit — it has native Dentrix/Open Dental integrations, HIPAA compliance, and healthcare-specific review site monitoring (Healthgrades, Vitals, RateMDs). Alternative: Podium if your priority is SMS-first patient communication over review breadth.

## Troubleshooting

**Google reviews disappeared overnight**
- Check if this is a known Google bug (common in late 2025/early 2026). Wait 48-72 hours — display bugs usually self-resolve.
- If reviews are permanently removed, they likely triggered Google's AI spam filter. Common triggers: reviews from the same IP, incentivized reviews, reviews from accounts with no other activity.
- File a Google Business Profile support request through the GBP Help Community or Google support chat.

**Star rating dropping despite good service**
- Check if unhappy customers are finding you on Google while happy ones aren't being asked. Automate review requests to ALL customers, not just ones you think are satisfied.
- Look for patterns in negative reviews — if multiple mention the same issue (wait times, billing, staff attitude), that's an operational problem, not a reputation problem.
- Check review velocity — a sudden spike in negative reviews with similar language could be a competitor or disgruntled ex-employee. Flag for Google review.

**Business listings show wrong hours/address/phone**
- Start with Google Business Profile — verify ownership, correct the data, and publish.
- Check for duplicate listings on the same platform — duplicates confuse both customers and aggregators.
- Use an ORM tool (Birdeye, Yext, BrightLocal) to push correct data to all directories at once. Manual updates to 50+ directories are impractical.
