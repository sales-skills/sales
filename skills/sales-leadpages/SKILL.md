---
name: sales-leadpages
description: "Leadpages platform help — landing page builder, pop-ups, alert bars, A/B testing, lead enrichment, Stripe payments, AI content, Leadmeter conversion scoring. Use when building a landing page in Leadpages, Leadpages template isn't converting, A/B test setup in Leadpages, connecting Leadpages to email or CRM, pop-up or alert bar not showing, Leadpages page is slow to load, or choosing between Leadpages Standard vs Pro plan. Do NOT use for general funnel strategy (use /sales-funnel) or email marketing sequences (use /sales-email-marketing)."
argument-hint: "[describe what you need help with in Leadpages]"
license: MIT
version: 1.0.0
tags: [sales, landing-pages, lead-generation, conversion, platform]
github: "https://github.com/LeadPages"
---

# Leadpages Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What are you trying to do in Leadpages?

1. **What's the goal?**
   - A) Build a new landing page from scratch
   - B) Improve conversion on an existing page
   - C) Set up pop-ups or alert bars
   - D) Connect Leadpages to my email/CRM tool
   - E) Set up A/B testing
   - F) Accept payments on a landing page
   - G) Troubleshoot a technical issue
   - H) Choose a plan or understand pricing

2. **Which plan are you on?**
   - A) Standard ($49/mo — 5 pages, 1 domain)
   - B) Pro ($99/mo — unlimited pages, 3 domains)
   - C) Custom (enterprise)
   - D) Free trial / not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General funnel strategy, funnel types, conversion benchmarks | `/sales-funnel` — Run: `/sales-funnel {user's original question}` |
| Email marketing sequences after lead capture | `/sales-email-marketing` — Run: `/sales-email-marketing {user's original question}` |
| Growing email list, lead magnet strategy | `/sales-audience-growth` — Run: `/sales-audience-growth {user's original question}` |
| Connecting Leadpages to CRM or email via Zapier/API | `/sales-integration` — Run: `/sales-integration {user's original question}` |
| Checkout optimization beyond Stripe on Leadpages | `/sales-checkout` — Run: `/sales-checkout {user's original question}` |
| A/B testing methodology and statistical rigor | `/sales-vwo` — Run: `/sales-vwo {user's original question}` |

If the question is Leadpages-specific, continue to Step 3.

## Step 3 — Leadpages platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Template selection**: Pick templates by goal (lead capture, sales, webinar, consultation), not by aesthetics. Filter by conversion rate in the template library.
- **Conversion scoring**: Use Leadmeter before publishing — it flags specific improvements. Address red/yellow items first.
- **A/B testing priority**: Headline first, then CTA button, then hero image. Need Pro plan for A/B testing.
- **Pop-up timing**: Exit-intent converts best for lead capture. Timed delay (5-10 seconds) works for returning visitors. Don't stack multiple pop-ups.
- **Page speed**: Compress images before uploading. Leadpages hosts pages on its CDN but large uncompressed images still slow load times.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Standard plan caps at 5 landing pages.** This is the most common complaint. If you need more than 5, you must upgrade to Pro ($99/mo) or delete existing pages.
2. **A/B testing requires Pro plan.** Standard plan users cannot run split tests — a significant limitation for conversion optimization.
3. **Grid-based layout restricts element placement.** You cannot freely drag elements anywhere — they snap to grid positions. This limits custom design compared to Unbounce or Instapage.
4. **Advanced integrations (Salesforce, Marketo, HubSpot CRM) are add-ons or Pro-only.** Standard plan gets basic email integrations. Check which integrations your plan includes before building.
5. **Lead enrichment is a newer feature.** Data quality and coverage may vary — verify enriched data before relying on it for segmentation.
6. **Page builder can be sluggish on complex pages.** Safari on Mac and pages with many sections/images may need occasional refresh.
7. **Cancellation and refund policies draw complaints.** Review the terms before committing to an annual plan.

## Related skills

- `/sales-funnel` — Funnel strategy, structure, conversion optimization, A/B testing methodology
- `/sales-audience-growth` — Growing an email list (lead magnets, cross-promotion, referral programs)
- `/sales-email-marketing` — Email marketing strategy (what to send after lead capture)
- `/sales-integration` — Connect Leadpages to CRM or email tools via Zapier, Make, or native integrations
- `/sales-checkout` — Checkout page optimization (upsells, order bumps, payment plans)
- `/sales-vwo` — A/B testing and experimentation platform (advanced CRO beyond Leadpages built-in)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Landing page not converting
**User**: "My Leadpages landing page gets traffic but only converts at 1.5%"
**Approach**: Check Leadmeter score, review headline specificity, verify CTA copy is action-oriented, check mobile experience, confirm page loads under 3 seconds. Recommend A/B testing headline variations (requires Pro plan). Cross-reference with `/sales-funnel` for benchmark comparison.

### Example 2: Choosing Standard vs Pro
**User**: "I'm starting out — do I need Pro or is Standard enough?"
**Approach**: Standard works for up to 5 pages with 1 domain. Recommend Pro if they need A/B testing, more than 5 pages, or multiple domains. Explain that A/B testing is the biggest feature gap.

### Example 3: Connecting Leadpages to Mailchimp
**User**: "How do I send Leadpages leads to my Mailchimp audience?"
**Approach**: Walk through the native Leadpages-Mailchimp integration setup. Explain list/audience mapping and tag assignment. Note that form fields map to Mailchimp merge fields.

## Troubleshooting

### Pop-up not showing on my site
**Symptom**: Pop-up configured in Leadpages but doesn't appear on external website.
**Cause**: JavaScript embed code not installed, ad blocker interference, or targeting rules too restrictive.
**Solution**: Verify the embed code is in the `<head>` of every page where the pop-up should show. Test in incognito/private browsing to rule out ad blockers. Check trigger settings (exit-intent, scroll depth, delay).

### Leadpages form submissions not reaching email tool
**Symptom**: Leads fill out the form but don't appear in Mailchimp/ActiveCampaign/etc.
**Cause**: Integration disconnected, list mapping wrong, or double opt-in pending.
**Solution**: Reconnect the integration in Leadpages settings. Verify the correct audience/list is selected. Check the email tool's pending/unconfirmed contacts — double opt-in may be catching them.

### A/B test not splitting traffic evenly
**Symptom**: One variant gets significantly more traffic than the other.
**Cause**: Test just started (small sample sizes skew early), or the test was paused and restarted.
**Solution**: Wait for at least 100 visitors per variant before evaluating split evenness. Avoid pausing and restarting tests — it can reset the split logic.
