---
name: sales-sparkloop
description: "SparkLoop platform help — newsletter referral programs, paid recommendations, partner programs, cross-promotion, Upscribe widget, subscriber rewards, API. Use when setting up a newsletter referral program in SparkLoop, referral rewards not triggering, subscribers not getting tracked, paid recommendations earnings are low, partner program budget questions, Upscribe widget not showing recommendations, integrating SparkLoop with your ESP, or SparkLoop API and webhooks. Do NOT use for newsletter monetization strategy (use /sales-newsletter) or general audience growth strategy (use /sales-audience-growth)."
argument-hint: "[describe what you need help with in SparkLoop]"
license: MIT
version: 1.0.0
tags: [sales, newsletter, referral, platform]
github: "https://github.com/sparkloop"
---

# SparkLoop Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **Which SparkLoop feature are you working with?**
   - A) Referral program — subscriber rewards for sharing
   - B) Paid recommendations — earn money recommending other newsletters
   - C) Partner program — get other newsletters to recommend yours
   - D) Free recommendations — unpaid cross-promotion
   - E) Upscribe — post-opt-in recommendation widget
   - F) API / webhooks / custom integration
   - G) Not sure — describe your goal

2. **What ESP are you using?**
   - A) Kit (ConvertKit)
   - B) Mailchimp
   - C) ActiveCampaign / HubSpot / Klaviyo
   - D) MailerLite / Brevo / other
   - E) Custom integration via API

3. **What's happening?**
   - A) Setting up for the first time
   - B) Something isn't working right
   - C) Want to optimize / earn more
   - D) Exploring whether SparkLoop is right for me

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Newsletter monetization strategy (not SparkLoop-specific) | `/sales-newsletter {user's question}` |
| Growing subscriber list (strategy, not SparkLoop setup) | `/sales-audience-growth {user's question}` |
| Affiliate program design (general) | `/sales-affiliate-program {user's question}` |
| ESP-specific setup (Kit, Mailchimp, etc.) | `/sales-kit`, `/sales-mailchimp`, etc. |
| Email deliverability issues | `/sales-deliverability {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — SparkLoop platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

**If the question involves the API**, also read `references/sparkloop-api-reference.md` for endpoint details, webhook payloads, and authentication.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Referral programs**: Start simple — 1 reward tier at 3 referrals, digital reward (exclusive content or discount). Add tiers once you see engagement data. Monitor for fraud (same-IP referrals, disposable emails).
- **Paid recommendations**: Optimize by testing recommendation placement (post-opt-in vs in-email vs both). Higher-quality lists with US/UK/CA subscribers earn significantly more.
- **Partner programs**: Budget at least $2K/mo. Set strict engagement criteria (30-day open required) to avoid paying for disengaged subscribers.
- **Upscribe**: Enable auto-pilot for hands-off recommendation matching. Pass `country_code` in API calls — earnings depend on subscriber geography.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Referral program costs $2K/year** — paid upfront. Free only for Kit Creator Pro subscribers.
2. **Partner program minimum is $2K/month** — this is the minimum budget allocation, not a fee. Most publishers spend exactly this.
3. **Geo-restrictions on paid recommendations** — most advertisers only pay for US, UK, and Canada subscribers. Non-English audiences earn significantly less.
4. **Lead quality varies in Partner Network** — monitor new subscriber engagement closely. Set engagement criteria (e.g., must open within 30 days) to filter low-quality referrals.
5. **SparkLoop doesn't work with Ghost, Substack, or Flodesk** — these platforms lack the API access SparkLoop needs.
6. **Referral tracking issues** — test referral links in incognito mode. Some email clients strip tracking parameters. The help center troubleshooting covers common tracking failures.
7. **Acquired by Kit (ConvertKit) in 2023** — still works with 25+ ESPs, but deepest integration is with Kit.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-newsletter` — Newsletter monetization — paid subscriptions, sponsorships, ad sales, paid recommendations
- `/sales-audience-growth` — Growing your subscriber list — lead magnets, cross-promotion, referral programs
- `/sales-affiliate-program` — Design and manage affiliate and referral programs
- `/sales-kit` — Kit platform help (deepest SparkLoop integration)
- `/sales-paved` — Paved platform help (newsletter sponsorship marketplace)
- `/sales-buttondown` — Buttondown platform help
- `/sales-ghost` — Ghost platform help
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up a referral program
**User says**: "I want to set up a referral program for my newsletter on Mailchimp — how do I connect SparkLoop?"
**Skill does**: Walks through Mailchimp integration (2-click setup), referral program configuration, reward tier design, and embedding the referral widget in emails
**Result**: User has a working referral program with rewards configured and tested

### Example 2: Low earnings from paid recommendations
**User says**: "I'm only earning $0.50 per recommendation — other people say they get $2-5"
**Skill does**: Checks subscriber geography (likely non-US heavy), recommendation placement, and list engagement. Recommends optimizing for US/UK/CA subscribers and testing post-opt-in widget placement
**Result**: User understands why earnings are low and has a plan to improve CPR

### Example 3: Partner program ROI
**User says**: "Is the $2K/month partner program worth it for a 5K subscriber newsletter?"
**Skill does**: Calculates expected subscriber acquisition cost vs alternatives, explains engagement criteria to ensure quality, compares to Beehiiv Boosts and Kit Creator Recommendations
**Result**: User can make an informed budget decision with realistic growth projections

## Troubleshooting

### Referral link not working for some subscribers
**Symptom**: Some subscribers see the referral widget but their referrals aren't being tracked
**Cause**: Email clients (especially Apple Mail Privacy Protection and Outlook) can strip or modify tracking parameters in URLs
**Solution**: Check SparkLoop's troubleshooting guide. Test in incognito. Ensure the referral link uses SparkLoop's hosted hub URL rather than a custom domain with redirect issues. Verify ESP merge tags are rendering correctly.

### Subscriber hit referral milestone but didn't get reward
**Symptom**: Subscriber made X referrals but the reward email never sent
**Cause**: Referred subscribers may not have confirmed (double opt-in pending), or referrals were flagged as fraudulent (same IP, disposable emails)
**Solution**: Check the subscriber's referral count in SparkLoop dashboard — "pending" referrals don't count toward milestones. Review the fraud prevention settings. Manually trigger the reward if it was a false positive.

### ESP sync taking too long
**Symptom**: Subscriber data not appearing in SparkLoop after connecting ESP
**Cause**: Initial sync depends on list size — large lists (50K+) can take hours
**Solution**: Wait 24 hours for initial sync. If still incomplete, disconnect and reconnect the integration. Check SparkLoop's help article "How long will syncing my ESP with SparkLoop take?" for platform-specific timelines.
