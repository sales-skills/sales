---
name: sales-retention
description: "Retention.com platform help — ecommerce identity resolution that identifies anonymous website visitors and converts them to email/SMS contacts. Covers Grow (10x email list growth from identified visitors), Reclaim (abandonment flow recovery for events missed by Klaviyo/Elevar), retargeting activation across email/SMS/push/paid channels, tracking pixel setup, Shopify integration, compliance (CCPA, implicit consent model), and API (suppression uploads, webhooks). Use when most site visitors leave anonymous and you can't email them, Klaviyo is missing abandonment events, identified contacts are hitting spam, or you're not sure if Retention.com is worth it vs RB2B or Opensend. Do NOT use for B2B visitor identification (use /sales-rb2b), email marketing strategy (use /sales-email-marketing), or email list growth strategy across tools (use /sales-audience-growth)."
argument-hint: "[describe what you need help with on Retention.com]"
license: MIT
version: 1.0.0
tags: [sales, identity-resolution, ecommerce, retention, platform]
---
# Retention.com Platform Help

Helps the user with Retention.com questions — from identity resolution setup and list growth through abandonment recovery, retargeting activation, deliverability management, and compliance.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setup — installing tracking pixel, connecting integrations
   - B) Grow — email/SMS list growth from identified visitors
   - C) Reclaim — abandonment flow recovery
   - D) Deliverability — managing spam complaints from identified contacts
   - E) Compliance — CCPA, consent model, suppression
   - F) Evaluating — comparing Retention.com vs alternatives
   - G) Something else — describe it

2. **What's your ecommerce platform?**
   - A) Shopify
   - B) WooCommerce
   - C) BigCommerce
   - D) Custom / headless
   - E) Not ecommerce (publisher/subscriber model)

3. **What's your monthly website traffic?**
   - A) Under 50K unique visitors
   - B) 50K-150K
   - C) 150K-300K
   - D) 300K+ (custom pricing territory)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- B2B visitor identification → `/sales-rb2b`
- Email marketing strategy → `/sales-email-marketing`
- Email list growth strategy across tools → `/sales-audience-growth`
- Retargeting strategy across channels → `/sales-retargeting`
- Email deliverability across platforms → `/sales-deliverability`
- Contact enrichment strategy → `/sales-enrich`

Otherwise, answer directly from platform knowledge below.

## Step 3 — Retention.com platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### Setting up Retention.com

| Step | What to do | Why it matters |
|---|---|---|
| 1. Install pixel | Add JavaScript snippet to all pages | Required for visitor identification |
| 2. Upload suppression list | Your existing email list + unsubscribes | Prevents re-identifying known contacts |
| 3. Connect ESP | Link Klaviyo/Mailchimp/etc. | Identified contacts flow directly to your email tool |
| 4. Set up Reclaim flows | Create abandonment sequences for identified visitors | This is where the immediate revenue comes from |
| 5. Configure Grow | Set up list growth campaigns | Longer-term value — builds your email list |
| 6. Monitor deliverability | Watch spam complaint rates closely for first 30 days | Identified contacts generate higher complaints than organic |

### Managing deliverability risk

This is the #1 challenge with Retention.com. Identified contacts didn't opt in, so spam complaints are higher than organic lists.

1. **Separate sending domain**: Use a subdomain (e.g., mail.yourbrand.com) for Retention.com contacts to protect your main domain reputation
2. **Warm up slowly**: Start with small batches (1,000-5,000/day) and ramp up over 2-4 weeks
3. **Segment aggressively**: Only email identified contacts who showed high intent (cart abandoners, repeat visitors, product page viewers)
4. **Monitor complaint rates**: Keep under 0.1% (Google threshold). Retention.com contacts often push 0.15-0.20% if not managed carefully
5. **Sunset non-engagers fast**: Remove contacts who don't open after 2-3 sends — much faster than your organic list cadence
6. **Use Reclaim first, Grow second**: Reclaim (abandonment) contacts are higher intent and engage better. Prove ROI there before scaling Grow.

### Evaluating ROI

Calculate whether Retention.com pays for itself:

1. **Monthly cost**: $500-$2,500/mo depending on traffic
2. **Expected identifications**: Monthly visitors × 15-25% realistic match rate
3. **Reclaim revenue**: Identified abandoners × abandonment flow conversion rate × AOV
4. **Grow revenue**: New list subscribers × email revenue per subscriber per month
5. **Subtract**: Deliverability cost (any reputation damage, dedicated IP, etc.)
6. **Benchmark**: Top case studies report 5-53x ROI, but median is likely 2-5x

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Annual contracts with no free trial.** You're committing $6,000-$30,000/year before seeing results. Push hard for a pilot period or ask about the a la carte option ($300/mo) to test one product first.
- **Match rates are likely lower than claimed.** Retention.com claims ~35% identification, but independent reports show 16-25%. Budget and forecast using the conservative number.
- **Deliverability risk is real.** Identified contacts generate 2-3x higher spam complaint rates than organic subscribers. One case study reported 0.18% — nearly double the 0.1% safe threshold for Google. Use a separate sending domain.
- **Grow contacts engage poorly.** "Grow" contacts (general list building) have ~3% CTR vs ~12% for opted-in subscribers. Reclaim (abandonment) contacts perform much better — start there.
- **Implicit consent model is legally gray.** CAN-SPAM allows unsolicited commercial email with opt-out, but consumer perception differs from legal permission. Expect some brand reputation risk.
- **Not usable for EU/UK traffic.** GDPR requires explicit consent. Retention.com's identity resolution only works for US visitors and is only legally safe under US law.
- **API is extremely limited.** 5 requests/day, primarily for suppression uploads. All real operations happen through integrations or the dashboard.
- **Same founder as RB2B.** Adam Robinson runs both. If you're B2B, RB2B is the right product. Retention.com is specifically for B2C ecommerce/DTC.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-rb2b` — RB2B platform help (B2B person-level visitor identification — same founder)
- `/sales-audience-growth` — Email list growth strategy across tools
- `/sales-email-marketing` — Email marketing strategy for opt-in subscribers
- `/sales-retargeting` — Retargeting and remarketing strategy across channels
- `/sales-deliverability` — Email deliverability (critical when using identified contacts)
- `/sales-klaviyo` — Klaviyo platform help (most common ESP pairing with Retention.com)
- `/sales-omnisend` — Omnisend platform help (alternative ESP for ecommerce)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up Retention.com for a Shopify DTC brand
**User says**: "I run a Shopify store doing 100K monthly visitors and want to try Retention.com for abandoned cart recovery"
**Skill does**:
1. Estimates realistic match rate (15-25K identified visitors/month at 15-25%)
2. Recommends starting with Reclaim (abandonment recovery) before Grow
3. Walks through pixel installation on Shopify and Klaviyo integration
4. Sets up deliverability protection: separate subdomain, slow warmup, aggressive segmentation
5. Calculates expected ROI based on their AOV and abandonment rate
**Result**: Retention.com configured with realistic expectations and deliverability safeguards

### Example 2: Compare Retention.com vs RB2B
**User says**: "My co-founder uses RB2B for our SaaS — should I also use Retention.com for our ecommerce side project?"
**Skill does**:
1. Clarifies that Retention.com (B2C/ecommerce) and RB2B (B2B) serve different use cases
2. Notes both are founded by Adam Robinson but are separate products
3. Recommends Retention.com for the ecommerce side project (Shopify/DTC)
4. Advises keeping RB2B for the SaaS business
5. Warns about annual contract commitment vs RB2B's monthly option
**Result**: Clear decision with the right tool for each business

### Example 3: Fix deliverability issues after enabling Retention.com
**User says**: "My Klaviyo deliverability tanked after I turned on Retention.com — spam complaints spiked to 0.25%"
**Skill does**:
1. Diagnoses the root cause: identified contacts didn't opt in, higher complaint rates expected
2. Recommends immediate actions: separate sending subdomain, pause Grow (keep Reclaim only)
3. Suggests aggressive segmentation: only email high-intent visitors (cart abandoners, 3+ page views)
4. Sets up faster sunset policy: remove non-openers after 2 sends instead of the usual 5-10
5. Recommends monitoring for 2 weeks and gradually re-scaling
**Result**: Deliverability recovered with Retention.com still generating ROI from high-intent segments

## Troubleshooting

### Spam complaints spiking after enabling Retention.com
**Symptom**: Spam complaint rate jumped from 0.05% to 0.15%+ after adding Retention.com contacts to email flows
**Cause**: Identified contacts didn't opt in to your emails. They're being matched from third-party data and have no relationship with your brand. Some will mark you as spam.
**Solution**: (1) Use a separate sending subdomain to isolate reputation, (2) only email high-intent segments (cart abandoners, not all visitors), (3) implement a 2-send sunset policy for non-engagers, (4) consider pausing Grow and only using Reclaim until complaint rates stabilize under 0.1%.

### Match rates lower than expected
**Symptom**: Retention.com is identifying 15-20% of visitors instead of the claimed 35%
**Cause**: The 35% figure is a best-case scenario. Actual match rates depend on your audience demographics, traffic source mix, and geographic concentration (US-only). Mobile traffic and privacy-focused browsers reduce match rates.
**Solution**: 15-25% is typical. Focus on maximizing value from identified contacts rather than chasing match rates. If you're below 15%, check that the pixel is installed on all pages (not just product pages) and that your traffic is predominantly US-based.

### "Grow" contacts not generating revenue
**Symptom**: Added thousands of contacts via Grow but email revenue didn't increase meaningfully
**Cause**: Grow contacts are lower intent than Reclaim contacts. They visited your site but didn't start a checkout or add to cart. They also didn't opt in, so engagement rates are 3-4x lower than organic subscribers.
**Solution**: Don't treat Grow contacts like your main list. Create separate flows with lower frequency (weekly vs daily), higher-value offers (deeper discounts), and faster sunsetting. If Grow contacts aren't generating positive ROI after 60 days, pause Grow and focus budget on Reclaim.
