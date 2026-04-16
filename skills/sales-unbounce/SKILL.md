---
name: sales-unbounce
description: "Unbounce platform help — landing page builder, Smart Traffic AI optimization, Smart Copy AI copywriting, A/B testing, popups, sticky bars, Dynamic Text Replacement, AMP pages, REST API. Use when landing page built in Unbounce isn't converting, Smart Traffic not improving conversions, A/B test setup in Unbounce, popup or sticky bar not triggering, Unbounce page loads too slowly, choosing between Build vs Experiment vs Optimize plan, connecting Unbounce to CRM or email tool, or Dynamic Text Replacement not working. Do NOT use for general funnel strategy (use /sales-funnel) or general CRO methodology (use /sales-vwo)."
argument-hint: "[describe what you need help with in Unbounce]"
license: MIT
version: 1.0.0
tags: [sales, landing-pages, cro, conversion, platform]
github: "https://github.com/unbounce"
---

# Unbounce Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What are you trying to do in Unbounce?

1. **What's the goal?**
   - A) Build a new landing page from scratch
   - B) Improve conversion on an existing page
   - C) Set up A/B testing or Smart Traffic
   - D) Create popups or sticky bars
   - E) Connect Unbounce to my email/CRM/analytics
   - F) Fix a technical issue (speed, DTR, scripts)
   - G) Understand pricing or choose a plan
   - H) Use Smart Copy for AI-generated content

2. **Which plan are you on?**
   - A) Build ($99/mo — landing pages, popups, Smart Copy, no A/B testing)
   - B) Experiment ($149/mo — A/B testing, DTR, 30K visitors)
   - C) Optimize ($249/mo — Smart Traffic AI, 50K visitors)
   - D) Agency / Concierge (enterprise)
   - E) Free trial / not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General funnel strategy, funnel types, conversion benchmarks | `/sales-funnel` — Run: `/sales-funnel {user's original question}` |
| Email marketing sequences after lead capture | `/sales-email-marketing` — Run: `/sales-email-marketing {user's original question}` |
| Growing email list, lead magnet strategy | `/sales-audience-growth` — Run: `/sales-audience-growth {user's original question}` |
| Connecting Unbounce to CRM or email via Zapier/API | `/sales-integration` — Run: `/sales-integration {user's original question}` |
| A/B testing methodology and statistical rigor | `/sales-vwo` — Run: `/sales-vwo {user's original question}` |
| Checkout optimization beyond landing page | `/sales-checkout` — Run: `/sales-checkout {user's original question}` |

If the question is Unbounce-specific, continue to Step 3.

## Step 3 — Unbounce platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

**For API questions**, also read `references/unbounce-api-reference.md` for endpoint details and authentication.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Template selection**: Use Smart Builder for industry-specific layout suggestions. Filter templates by industry and goal, not aesthetics.
- **Smart Traffic**: Needs Optimize plan ($249+/mo). Create 2-5 page variants first. Smart Traffic starts optimizing after ~50 visits. Don't run Smart Traffic and A/B tests simultaneously on the same page.
- **A/B testing priority**: Headline first, then CTA, then hero image, then form fields. Needs Experiment plan ($149+/mo).
- **Page speed**: Compress images before uploading (TinyPNG, Squoosh). Minimize custom scripts. Consider AMP pages for 85% faster load times. Remove unused fonts.
- **DTR**: Use `?keyword=value` URL parameters to dynamically swap text. Great for PPC campaigns with many ad groups — match landing page text to ad copy automatically.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Smart Traffic requires Optimize plan ($249+/mo).** Build and Experiment plans don't get AI optimization. This is the #1 plan confusion.
2. **A/B testing requires Experiment plan ($149+/mo).** Build plan users cannot split test — they must upgrade or use Smart Traffic on Optimize.
3. **Aggressive usage caps with penalties.** Exceeding monthly visitor limits incurs a 30% overage penalty on the annual subscription. Monitor visitor counts closely.
4. **Page speed averages 2.8 seconds.** Slower than competitors. Always compress images, defer non-essential scripts, and consider AMP pages for speed-critical campaigns.
5. **Mobile requires separate optimization.** Desktop designs don't automatically scale well to mobile. Always preview and adjust the mobile view separately in the builder.
6. **Smart Builder vs Classic Builder.** Smart Builder is newer and AI-assisted but has fewer customization options. Classic Builder offers more control but no AI suggestions. New users should start with Smart Builder.
7. **Pricing has increased significantly.** Users report 100-400% price hikes. Review current pricing before committing to annual plans.
8. **Cancellation policies are rigid.** Annual plans are non-refundable. Review terms before committing.

## Related skills

- `/sales-funnel` — Funnel strategy, structure, conversion optimization, A/B testing methodology
- `/sales-leadpages` — Leadpages platform help (competitor — simpler builder, lower price, different strengths)
- `/sales-audience-growth` — Growing an email list (lead magnets, cross-promotion, referral programs)
- `/sales-email-marketing` — Email marketing strategy (what to send after lead capture)
- `/sales-integration` — Connect Unbounce to CRM or email tools via Zapier, Make, or native integrations
- `/sales-vwo` — VWO platform help (advanced A/B testing, heatmaps, session recordings, personalization)
- `/sales-checkout` — Checkout page optimization (upsells, order bumps, payment plans)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Landing page not converting
**User**: "My Unbounce landing page gets clicks from Google Ads but only converts at 1.2%"
**Approach**: Check page speed (compress images, consider AMP). Verify DTR is matching ad copy to landing page headline. Review mobile experience separately. If on Experiment+ plan, set up A/B test on headline. If on Optimize plan, create 2-3 variants and enable Smart Traffic.

### Example 2: Smart Traffic not improving results
**User**: "I turned on Smart Traffic two weeks ago but conversions haven't changed"
**Approach**: Verify you have at least 2 page variants (Smart Traffic needs variants to route between). Check that variants are meaningfully different (not just button color — try different headlines, layouts, or offers). Confirm at least 50 visits have occurred for the learning phase. Review variant-level conversion data in the dashboard.

### Example 3: Choosing the right plan
**User**: "I'm launching a new product and need landing pages — which Unbounce plan should I pick?"
**Approach**: Build plan works for basic landing pages without testing. Recommend Experiment if they need A/B testing or DTR for PPC. Recommend Optimize only if traffic volume justifies AI optimization (50+ visits/day per page). Warn about visitor caps and overage penalties on all plans.

## Troubleshooting

### Popup not showing on external site
**Symptom**: Popup configured in Unbounce but doesn't appear on the website.
**Cause**: Embed script not installed, ad blocker interference, or trigger rules too restrictive.
**Solution**: Verify the JavaScript embed code is in the `<head>` of every page where the popup should display. Test in incognito to rule out ad blockers. Check trigger settings (exit-intent, scroll depth, delay). Confirm the popup is published and the domain matches.

### Dynamic Text Replacement not working
**Symptom**: Landing page shows default text instead of URL parameter values.
**Cause**: URL parameter name doesn't match DTR field, encoding issues, or DTR not enabled.
**Solution**: Verify the URL parameter exactly matches the DTR reference (case-sensitive). Ensure the URL uses `?keyword=value` format. Check that DTR is enabled on the page in Unbounce settings. Test with a simple parameter before complex ones.

### Page loads too slowly
**Symptom**: Unbounce page takes 3+ seconds to load, hurting conversions and Quality Score.
**Cause**: Large uncompressed images, excessive custom scripts, or tracking tags blocking render.
**Solution**: Compress all images to WebP under 200KB before uploading. Move non-essential scripts to load asynchronously. Remove unused fonts. Consider AMP pages for critical PPC campaigns (85% faster average). Check third-party widgets (chat, heatmaps) — load them asynchronously.
