---
name: sales-grin
description: "GRIN platform help — creator management, influencer discovery, product gifting, affiliate hub, social listening, campaign analytics, and Gia AI agent. Use when setting up GRIN for the first time, creator search isn't finding the right influencers, gifting orders aren't syncing with Shopify, affiliate links or discount codes aren't tracking, outreach emails aren't getting responses, campaign reporting looks wrong, social listening isn't capturing mentions, creator payments or 1099s need setup, or integrating GRIN with your CRM or marketing stack. Do NOT use for influencer marketing strategy across platforms (use /sales-influencer-marketing) or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in GRIN]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-management, platform]
github: "https://github.com/grininc"
---

# GRIN Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Initial setup and onboarding
   - B) Creator discovery and search
   - C) Outreach and email campaigns
   - D) Product gifting / seeding via Shopify
   - E) Affiliate Hub (links, codes, payouts)
   - F) Social listening and brand monitoring
   - G) Campaign tracking and reporting
   - H) Creator payments and 1099s
   - I) Integrations (Shopify, Klaviyo, Slack, API)
   - J) Gia AI agent configuration
   - K) Something else — describe it

2. **Which GRIN plan are you on?**
   - A) Free Trial
   - B) Lite ($399/mo)
   - C) Essentials ($699/mo)
   - D) Growth ($1,149/mo)
   - E) Complete ($1,799/mo)
   - F) Not sure / evaluating

3. **What ecommerce platform do you use?**
   - A) Shopify
   - B) WooCommerce
   - C) Magento
   - D) Other / none

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Influencer strategy across platforms | Run: `/sales-influencer-marketing {user's question}` |
| Affiliate program design (not GRIN-specific) | Run: `/sales-affiliate-program {user's question}` |
| Social listening strategy | Run: `/sales-social-listening {user's question}` |
| Email deliverability for outreach | Run: `/sales-deliverability {user's question}` |
| Shopify store setup | Not covered — use Shopify docs |

When routing, provide the exact command with the user's original question.

If the question is GRIN-specific, continue to Step 3.

## Step 3 — GRIN platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, feature gates, integrations, data model, API, and workflow guides.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Plan fit** — is their current tier sufficient for what they need? Flag plan-gated features.
2. **Workflow setup** — step-by-step for their specific task (gifting, affiliates, discovery, etc.)
3. **Integration check** — are their connected tools configured correctly?
4. **Optimization** — quick wins based on common GRIN pitfalls

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API access requires Complete plan ($1,799/mo).** You cannot use the bi-directional API on Lite, Essentials, or Growth. If you need custom integrations, budget for Complete.
- **Creator search daily limits are plan-gated.** Free Trial gets 10 searches/day, Lite gets 25, scaling up to 150 on Complete. Heavy discovery workflows may hit limits on lower plans.
- **Shopify is the only deep ecommerce integration.** WooCommerce and Magento have limited support (Magento via open-source extension). If you're not on Shopify, gifting and order sync will be manual.
- **Creator discovery database is opt-in.** Unlike platforms with 350M+ indexed profiles, GRIN's discovery pool is smaller. Supplement with external discovery tools if you need broader reach.
- **Outreach emails come from your domain.** GRIN sends from your connected Gmail/Outlook, so deliverability depends on your email reputation, not GRIN's infrastructure.
- **Automated payments require Essentials+.** Free Trial and Lite don't include automated creator payments or 1099 processing.
- **Social listening hashtag limits are plan-gated.** Free Trial: 1 hashtag, Lite: 3, up to 30 on Complete. Budget hashtag slots for your most important campaigns.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across 25+ platforms — discovery, vetting, campaign tracking, ROI. Install: `npx skills add sales-skills/sales --skills sales-influencer-marketing`
- `/sales-affiliate-program` — Affiliate and referral program design. Install: `npx skills add sales-skills/sales --skills sales-affiliate-program`
- `/sales-social-listening` — Social listening and brand monitoring strategy. Install: `npx skills add sales-skills/sales --skills sales-social-listening`
- `/sales-deliverability` — Email deliverability for outreach campaigns. Install: `npx skills add sales-skills/sales --skills sales-deliverability`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up influencer gifting via Shopify
**User says**: "I want to send free products to 50 creators through GRIN and track who posts"
**Skill does**:
1. Confirms Shopify integration is connected
2. Walks through creating a gifting campaign with product selection
3. Sets up content tracking for tagged posts
4. Recommends plan tier based on 50 active creators (Essentials minimum)
**Result**: Complete gifting workflow from product selection to content monitoring

### Example 2: Fix affiliate link tracking
**User says**: "My GRIN affiliate links aren't showing conversions even though creators are sharing them"
**Skill does**:
1. Checks Affiliate Hub configuration (link generation, attribution window)
2. Verifies Shopify discount code sync
3. Tests link redirect chain for tracking parameter drops
4. Reviews conversion attribution settings
**Result**: Identified tracking gap and fixed attribution setup

### Example 3: Evaluate GRIN pricing for scaling
**User says**: "I'm on the Lite plan with 45 creators and running out of capacity"
**Skill does**:
1. Reviews current usage against Lite limits (50 active creators, 500 CRM)
2. Compares Essentials ($699/mo, 100 creators) vs Growth ($1,149/mo, 200 creators)
3. Flags new features unlocked at Essentials (payments, 1099s, integrations)
4. Recommends upgrade path based on growth trajectory
**Result**: Clear upgrade recommendation with cost-benefit analysis

## Troubleshooting

### Creator search returning irrelevant results
**Symptom**: Discovery shows creators outside your niche or with wrong audience demographics
**Cause**: Search filters too broad, or relying on keyword search instead of audience filters
**Solution**: Use audience demographic filters (location, age, gender) before content/niche filters. Try the Gia AI agent for automated matching if available on your plan. Supplement with lookalike search from your best-performing creators.

### Shopify orders not syncing for gifting
**Symptom**: Created a gifting campaign but orders aren't appearing in Shopify
**Cause**: Shopify integration disconnected, or product catalog not synced
**Solution**: Go to Account > Integrations > Shopify and verify connection status. Re-sync product catalog. Check that the products you're gifting are published and in stock in Shopify. If using Magento, note that sync is limited via the open-source extension.

### Outreach emails going to spam or low open rates
**Symptom**: Creator outreach emails show low open rates (<15%) or creators report emails in spam
**Cause**: Your email domain reputation, or sending too many emails too quickly from a new GRIN connection
**Solution**: GRIN sends from your own domain — check SPF/DKIM/DMARC records. Start with smaller batches (10-20/day) and ramp up. Personalize subject lines and body text. Consider warming your email domain before large campaigns. Run `/sales-deliverability` for a full deliverability audit.
