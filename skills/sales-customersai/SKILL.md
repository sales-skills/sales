---
name: sales-customersai
description: "Customers.ai platform help — X-Ray identity resolution pixel, Alfred AI intent scoring, Inboxer deliverability suite, ad retargeting audience recovery, Consumer Data Enrichment API. Use when anonymous Shopify visitors aren't converting to email, Klaviyo is only identifying 15-20% of traffic, visitor ID contacts are hurting deliverability, Klaviyo costs too much from bloated profiles, you're comparing Customers.ai vs Retention.com vs RB2B, or ad retargeting audiences shrank after cookie deprecation. Do NOT use for B2B visitor identification (use /sales-rb2b), email marketing strategy (use /sales-email-marketing), or email list growth strategy across tools (use /sales-audience-growth)."
argument-hint: "[describe what you need help with in Customers.ai]"
license: MIT
version: 1.0.0
tags: [sales, identity-resolution, ecommerce, visitor-identification, platform]
---
# Customers.ai Platform Help

Helps the user with Customers.ai questions — X-Ray pixel setup, Alfred AI intent scoring, Inboxer deliverability suite, ad retargeting audience recovery, Klaviyo integration, and Consumer Data Enrichment API.

**Important context**: Customers.ai is built specifically for **Shopify brands using Klaviyo**. The X-Ray pixel identifies 60-70% of anonymous site visitors (vs Klaviyo's native 15-20%) and syncs them directly to Klaviyo. Alfred AI scores intent daily and auto-suppresses low-intent profiles to cut ESP costs. It's B2C ecommerce only — for B2B visitor ID, use `/sales-rb2b`.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

**What area of Customers.ai do you need help with?**
- a) X-Ray Pixel — identify anonymous website visitors
- b) Alfred AI Agent — intent scoring and profile suppression
- c) Inboxer — email deliverability optimization
- d) Ad Retargeting — recover audiences for Meta, Google, TikTok
- e) Consumer Data Enrichment API — enrich contacts programmatically
- f) Klaviyo integration setup
- g) Evaluating — comparing Customers.ai vs Retention.com vs others
- h) Something else

**What's your current situation?**
- a) Setting up Customers.ai for the first time
- b) Already using it — troubleshooting an issue
- c) Evaluating whether it's worth the cost
- d) Migrating from another visitor ID tool (Retention.com, Opensend, etc.)

**What's your monthly website traffic?**
- a) Under 50K unique visitors
- b) 50K-150K
- c) 150K-500K
- d) 500K+

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| B2B visitor identification | `/sales-rb2b {user's original question}` |
| Ecommerce identity resolution strategy across tools | `/sales-intent {user's original question}` |
| Email marketing strategy | `/sales-email-marketing {user's original question}` |
| Email list growth across tools | `/sales-audience-growth {user's original question}` |
| Retargeting strategy across channels | `/sales-retargeting {user's original question}` |
| Email deliverability across platforms | `/sales-deliverability {user's original question}` |
| Klaviyo-specific questions (not Customers.ai) | `/sales-klaviyo {user's original question}` |
| Retention.com-specific questions | `/sales-retention {user's original question}` |

Otherwise, answer directly using the platform reference.

## Step 3 — Customers.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup**: Install X-Ray pixel → connect Klaviyo → configure Alfred intent thresholds → set up Inboxer → monitor for 2 weeks.

**Optimization**: Review Alfred's suppression rates → check Inboxer inbox placement → compare identified contact engagement vs organic → adjust intent thresholds.

**Migration from another tool**: Upload suppression list from old tool → install X-Ray pixel → run Data Detox if switching from a low-accuracy provider → monitor deliverability closely for first 30 days.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Klaviyo-only.** Customers.ai does not support Omnisend, Mailchimp, ActiveCampaign, or other ESPs. If you're not on Klaviyo, this tool won't work for you.
- **Shopify-only.** Built specifically for Shopify stores. No native integration with WooCommerce, BigCommerce, or custom ecommerce platforms.
- **$600/mo minimum.** Starter plan costs $600/month with 3,000 resolutions. At $0.20/overage, costs can escalate quickly for high-traffic stores. Economics don't work until meaningful traffic volume ($500K+ GMV).
- **Data accuracy is 65-85%, not 100%.** Industry average is 5-30% — Customers.ai is better but still means 15-35% of identified contacts may be wrong. Monitor bounce rates closely.
- **Legacy MobileMonkey API.** The public API still uses `api.mobilemonkey.com` endpoints. Documentation is sparse and endpoints are limited (Update Contact, Send JSON Message, Lookup Users). Don't expect a robust developer API.
- **Data Detox may be needed.** If switching from a competitor (especially one with low accuracy), your Klaviyo lists may contain bad data. Customers.ai offers a Data Detox service but it adds cost and time to migration.
- **ROI guarantee has conditions.** The "5x ROI or payment waived" guarantee uses Customers.ai's attribution methodology. Make sure your definition of attributable revenue aligns with theirs before relying on the guarantee.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-retention` — Retention.com platform help (competitor — ecommerce identity resolution, abandonment recovery)
- `/sales-rb2b` — RB2B platform help (B2B person-level visitor identification)
- `/sales-klaviyo` — Klaviyo platform help (primary ESP integration)
- `/sales-intent` — Buying signals and visitor identification strategy across tools
- `/sales-audience-growth` — Email list growth strategy across tools
- `/sales-retargeting` — Retargeting and remarketing strategy across channels
- `/sales-deliverability` — Email deliverability strategy (critical with identity-resolved contacts)
- `/sales-enrich` — Contact enrichment strategy across tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up X-Ray pixel on Shopify + Klaviyo
**User says**: "I just signed up for Customers.ai and need to connect it to my Shopify store and Klaviyo"
**Skill does**: Walks through X-Ray pixel installation via Shopify theme or GTM (10-minute setup), Klaviyo integration configuration, Alfred AI threshold setup, recommends starting with high-intent pages only, and sets up monitoring for first 2 weeks
**Result**: X-Ray pixel installed, Klaviyo receiving identified visitor profiles, Alfred scoring intent daily

### Example 2: Compare Customers.ai vs Retention.com
**User says**: "I'm on Retention.com but my deliverability is tanking — should I switch to Customers.ai?"
**Skill does**: Compares accuracy (Customers.ai 65-85% vs Retention.com's reported 15-25% true match rate), notes Customers.ai includes Inboxer deliverability suite (Retention.com doesn't), explains Alfred AI auto-suppresses low-intent profiles to protect sender reputation, warns about Data Detox cost for migration, and calculates cost comparison at their traffic level
**Result**: Clear comparison with migration plan if they decide to switch

### Example 3: Reduce Klaviyo costs with Alfred AI
**User says**: "My Klaviyo bill is $800/month because of all these identified visitor profiles — can I reduce it?"
**Skill does**: Explains how Alfred AI scores visitor intent daily and auto-suppresses low-intent profiles in Klaviyo, reducing active profile count. Shows how to configure intent thresholds (high/medium/low buckets), recommends suppressing low-intent profiles that haven't engaged in 30 days, and estimates Klaviyo cost savings based on their current profile count
**Result**: Klaviyo costs reduced by suppressing low-intent identified profiles while keeping high-intent ones active

## Troubleshooting

### Identified contacts hurting Klaviyo deliverability
**Symptom**: Spam complaint rate spiked after enabling Customers.ai, emails landing in Promotions/Spam
**Cause**: Identified visitors didn't opt in to your emails. Some will mark you as spam. Even with higher accuracy than competitors, 15-35% of contacts may be incorrect.
**Solution**: Enable Inboxer deliverability suite (booster script, list validation, inbox warming). Use Alfred AI to suppress low-intent profiles. Send to high-intent segments only (cart abandoners, repeat visitors). Use a separate sending subdomain. Sunset non-engagers after 2-3 sends.

### X-Ray pixel not identifying visitors
**Symptom**: Dashboard shows very few identified visitors despite high traffic
**Cause**: Pixel not installed on all pages, blocked by ad blockers, or traffic is primarily non-US/mobile/VPN
**Solution**: Verify pixel is on all pages (not just product pages). Check that Content Security Policy isn't blocking it. Test with ad blockers disabled. Customers.ai works best with US desktop traffic — mobile and VPN users have lower match rates.

### Alfred AI suppressing too many profiles
**Symptom**: Alfred is suppressing most identified visitors, very few making it to Klaviyo flows
**Cause**: Intent thresholds set too aggressively, or most traffic is genuinely low-intent (browsing, not buying)
**Solution**: Review Alfred's scoring criteria and adjust thresholds. Check which pages visitors hit before suppression — if they're viewing products and getting suppressed, thresholds need loosening. Start with a permissive threshold and tighten over time as you see deliverability data.
