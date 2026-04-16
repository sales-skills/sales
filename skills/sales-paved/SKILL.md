---
name: sales-paved
description: "Paved platform help — newsletter sponsorship marketplace, programmatic Ad Network, Booker direct-deal management, Radar lead enrichment, ESP monetization integrations. Use when can't find newsletter sponsors, newsletter ad revenue is too low, sponsors aren't renewing, unsure how to price newsletter ad placements, need to set up programmatic newsletter ads, or want to connect your ESP to a sponsorship marketplace. Do NOT use for general newsletter monetization strategy (use /sales-newsletter) or email marketing campaigns (use /sales-email-marketing)."
argument-hint: "[describe what you need help with in Paved]"
license: MIT
version: 1.0.0
tags: [sales, newsletter, advertising, sponsorship, marketplace, platform]
github: "https://github.com/paved"
---

# Paved Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Are you an advertiser or publisher?**
   - A) Advertiser — I want to sponsor newsletters
   - B) Publisher — I want to monetize my newsletter with sponsors
   - C) ESP partner — I want to integrate Paved monetization into my platform
   - D) Not sure yet — exploring options

2. **What's your situation?**
   - A) New to Paved — haven't signed up yet
   - B) Signed up but haven't launched a campaign / listed my newsletter
   - C) Active — have campaigns running or sponsors booked
   - D) Troubleshooting — something isn't working

3. **What specifically do you need help with?**
   - A) Finding and booking newsletters to sponsor (advertiser)
   - B) Getting listed and attracting sponsors (publisher)
   - C) Setting up the Ad Network (programmatic ads)
   - D) Using Booker for direct sponsorship deals
   - E) Radar for lead enrichment
   - F) Pricing and rate optimization
   - G) ESP integration setup
   - H) Campaign performance / analytics
   - I) Payment or billing issue

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Newsletter monetization strategy (models, pricing tiers, paid subs vs ads) | Run: `/sales-newsletter {user's question}` |
| Email marketing campaigns, automation, segmentation | Run: `/sales-email-marketing {user's question}` |
| Growing newsletter subscriber list | Run: `/sales-audience-growth {user's question}` |
| Email deliverability, SPF/DKIM/DMARC | Run: `/sales-deliverability {user's question}` |
| B2B account-based advertising | Run: `/sales-b2b-advertising {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — Paved platform reference

**Read `references/platform-guide.md`** for the full platform reference — Marketplace, Ad Network, Booker, Radar, pricing, ESP integrations, publisher requirements, and advertiser workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For publishers**: Focus on getting verified (connect ESP), optimizing your media kit (audience demographics, engagement rates, past sponsor results), and choosing between Marketplace (curated, higher CPM) vs Ad Network (automated, lower effort).

**For advertisers**: Start with 2-3 test placements across different newsletter niches. Track CPC and CPA, not just impressions. Use the Marketplace for premium placements and Ad Network for scale.

**For both**: Check campaign analytics regularly. Respond to booking requests within 24 hours — slow response hurts your marketplace ranking.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Publishers need 5,000+ subscribers to list on the Marketplace** — below that, you won't be accepted. Grow your list first with `/sales-audience-growth`.
2. **30% commission on Marketplace sponsorships** — factor this into your rate card. Direct deals via Booker may have different terms.
3. **Ad Network pays per click, not per impression** — $1.45 avg CPC reported. Low-engagement newsletters may earn very little.
4. **Payment threshold is $25** — you won't receive a payout until your balance reaches $25.
5. **ESP integration only syncs subscriber counts and deliverability metrics** — personal subscriber data (names, emails) is never shared with Paved.
6. **Campaign dates aren't always respected** — some advertisers report placements not running on scheduled dates. Confirm placement dates directly with the publisher or Paved support.
7. **Billing can continue on "inactive" campaigns** — check your campaign status regularly and contact support immediately if charges appear unexpectedly.

## Related skills

- `/sales-newsletter` — Newsletter monetization strategy (paid subscriptions, sponsorships, pricing, premium tiers)
- `/sales-audience-growth` — Growing your subscriber list to qualify for Paved (5K minimum)
- `/sales-email-marketing` — Email marketing strategy (campaigns, automation, segmentation)
- `/sales-b2b-advertising` — Account-based B2B advertising (if you're an advertiser targeting business audiences via newsletters)
- `/sales-deliverability` — Email deliverability (SPF, DKIM, DMARC — affects your newsletter engagement metrics that sponsors see)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Publisher getting started
**User says**: "I have a 12,000-subscriber tech newsletter and want to start making money through Paved"
**Skill does**: Walks through publisher onboarding — connect ESP for verified badge, optimize media kit, set initial CPM rates based on niche and engagement, choose Marketplace listing vs Ad Network vs both
**Result**: User has a complete Paved setup plan with pricing strategy

### Example 2: Advertiser finding newsletters
**User says**: "I want to reach DevOps engineers through newsletter sponsorships on Paved"
**Skill does**: Guides through Marketplace search filters, recommends starting with 2-3 test placements at different price points, explains CPC bidding for Ad Network, provides metrics to track for ROI
**Result**: User has a newsletter advertising plan with test budget and success criteria

### Example 3: Low ad revenue
**User says**: "I'm on Paved's Ad Network but only earning $30/month on 8,000 subscribers"
**Skill does**: Diagnoses low CPC/engagement — checks open rates, click rates, audience demographics. Recommends Marketplace listing for higher CPM, ESP verification for credibility, and media kit optimization to attract direct sponsors via Booker
**Result**: User has a revenue optimization plan combining multiple Paved channels

## Troubleshooting

### Publisher not receiving payments
**Symptom**: Campaigns completed but no payment received
**Cause**: Balance may be below $25 threshold, or payment method not configured correctly
**Solution**: Check your balance in the dashboard. Verify PayPal or bank account details. If balance is above $25 and payment hasn't arrived, email hey@paved.com with your publisher ID and campaign details. Payments are processed monthly.

### Ad Network revenue is very low
**Symptom**: Earning pennies despite decent subscriber count
**Cause**: Low open rates or click rates reduce CPC bids; audience may not match advertiser targeting
**Solution**: Focus on engagement first — improve open rates (better subject lines, send time optimization). Connect your ESP for verified metrics. Consider switching to Marketplace for higher CPM on curated placements.

### Campaign not running on scheduled date
**Symptom**: Advertiser booked a placement for a specific date but it didn't appear
**Cause**: Scheduling conflicts or publisher missed the insertion
**Solution**: Contact Paved support at hey@paved.com. For future campaigns, confirm placement dates directly with the publisher 48 hours before the scheduled date.
