---
name: sales-mailerlite
description: "MailerLite platform help — email campaigns, automation workflows, landing pages, signup forms, websites, e-commerce, digital products, paid newsletters, transactional email, and email verification. Use when emails aren't reaching subscribers, automation workflow isn't triggering, landing page conversion is low, signup forms aren't collecting leads, MailerLite account got suspended or rejected, domain authentication (SPF/DKIM) setup is failing, free plan limits are too restrictive, or you need help with the MailerLite API. Do NOT use for cross-platform email strategy (use /sales-email-marketing) or general deliverability (use /sales-deliverability)."
argument-hint: "[describe what you need help with in MailerLite]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, platform]
github: "https://github.com/mailerlite"
---

# MailerLite Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Email campaigns — creating, sending, templates, A/B testing
   - B) Automation — workflows, triggers, delays, conditions
   - C) Landing pages — building, optimizing, forms
   - D) Signup forms & pop-ups — design, targeting, embedding
   - E) E-commerce — Shopify/WooCommerce integration, abandoned cart, product emails
   - F) Paid newsletter — setting up subscriber payments via Stripe
   - G) Digital products — selling ebooks, downloads
   - H) Transactional email — order confirmations, password resets
   - I) Account issues — suspension, approval, domain auth, deliverability
   - J) API integration — connecting MailerLite to your app
   - K) Something else

2. **Which plan are you on?**
   - A) Free (500 subscribers, 12K emails/mo)
   - B) Growing Business ($10/mo)
   - C) Advanced ($20/mo)
   - D) Enterprise
   - E) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Email marketing strategy (not MailerLite-specific) | Run: `/sales-email-marketing {user's question}` |
| SPF/DKIM/DMARC setup, inbox placement, warmup | Run: `/sales-deliverability {user's question}` |
| Newsletter monetization strategy | Run: `/sales-newsletter {user's question}` |
| Growing subscriber list strategy | Run: `/sales-audience-growth {user's question}` |
| Landing page / funnel conversion strategy | Run: `/sales-funnel {user's question}` |
| Selling digital products strategy | Run: `/sales-digital-products {user's question}` |
| Transactional email provider comparison | Run: `/sales-transactional-email {user's question}` |
| Connecting MailerLite to other tools | Run: `/sales-integration {user's question}` |

If the question is MailerLite-specific, continue to Step 3.

## Step 3 — MailerLite platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

**If the question involves the API**, also read `references/mailerlite-api-reference.md` for endpoint details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For campaign issues: check subscriber status, segment targeting, schedule settings
- For automation issues: verify triggers are set, check subscriber eligibility, review step conditions
- For deliverability: check domain authentication status, review bounce rate, check spam complaint rate
- For account issues: review MailerLite's anti-spam policy, check subscriber import quality, verify domain ownership
- For API issues: verify API key permissions, check rate limits (120 req/min), validate JSON payloads

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Account approval is strict** — MailerLite manually reviews every new account. If your website is "under construction" or your domain is brand new, expect rejection. Have a live site with clear opt-in methods before signing up.

2. **Free plan reduced to 500 subscribers** (Sep 2025) — was 1,000. No templates on the free plan either. If you're outgrowing free, Growing Business at $10/mo unlocks unlimited emails and templates.

3. **Automation is basic** — no branching logic or multi-path workflows. If/else conditions exist but flows are linear. For complex automation, consider ActiveCampaign or Klaviyo.

4. **No spam/design testing** — MailerLite has no inbox rendering preview across email clients and no spam score testing. Use Litmus or Mail Tester externally.

5. **Account suspension without warning** — importing a list with high bounce rates can trigger immediate suspension. Always clean lists with MailerCheck or ZeroBounce before importing.

6. **Customer support is email-only on lower plans** — live chat requires Advanced plan ($20/mo). Response times can be slow on Free/Growing Business.

7. **Digital products and paid newsletters require Stripe** — no PayPal or other payment processor support for selling through MailerLite.

8. **API rate limit is 120 requests/minute globally** — not per endpoint. Batch operations help (up to 50 requests per batch call).

## Related skills

- `/sales-email-marketing` — Email marketing strategy across all platforms (campaigns, automation, segmentation)
- `/sales-deliverability` — Cross-platform deliverability (SPF/DKIM/DMARC, warmup, reputation)
- `/sales-newsletter` — Newsletter monetization (paid subscriptions, sponsorships, ad sales)
- `/sales-audience-growth` — Growing your subscriber list (lead magnets, cross-promotion, referrals)
- `/sales-funnel` — Sales funnel strategy (landing pages, conversion paths)
- `/sales-digital-products` — Selling digital products (ebooks, templates, courses)
- `/sales-transactional-email` — Transactional email (provider comparison, API setup)
- `/sales-kit` — Kit platform help (MailerLite alternative for creators)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Account rejected
**User says**: "MailerLite rejected my account and I don't know why"
**Skill does**: Explains the manual review process, common rejection reasons (new domain, under-construction site, unclear opt-in), and how to appeal with a live site and clear opt-in documentation
**Result**: User understands what to fix and how to resubmit

### Example 2: Automation not triggering
**User says**: "My welcome automation isn't sending emails to new subscribers"
**Skill does**: Walks through trigger verification (form vs API vs import), subscriber status check (must be "active"), automation status (must be "active" not "draft"), and common gotchas (subscriber already in the automation)
**Result**: User identifies the misconfiguration and fixes it

### Example 3: API integration
**User says**: "How do I add subscribers to a group via the MailerLite API?"
**Skill does**: Shows the POST /api/subscribers endpoint with groups array, explains upsert behavior, provides code example with Bearer auth, notes the 120 req/min rate limit
**Result**: User has working API integration code

## Troubleshooting

### Emails going to spam
**Symptom**: Campaign emails landing in spam for subscribers
**Cause**: Domain not authenticated, shared IP reputation, or content triggers
**Solution**: 1) Authenticate domain — add DKIM (CNAME) + SPF (TXT) records in DNS, verify in MailerLite. 2) Check subscriber engagement — remove inactive subscribers (no opens in 90+ days). 3) Avoid spam trigger words in subject lines. 4) On Enterprise, request dedicated IP for better reputation control.

### High bounce rate on import
**Symptom**: Importing a list triggers high bounce rate warning or account suspension
**Cause**: List contains invalid, disposable, or stale email addresses
**Solution**: Clean the list with MailerCheck (MailerLite's built-in verifier) or ZeroBounce before importing. Remove addresses that haven't engaged in 6+ months. Start with your most engaged segment and gradually import the rest.

### Automation skipping subscribers
**Symptom**: Some subscribers enter the automation but skip certain steps
**Cause**: Subscriber status changed mid-workflow, or step conditions exclude them
**Solution**: Check each step's conditions. Verify subscriber status is "active" throughout. Check if the subscriber was removed from the triggering group. Review the automation activity log for specific subscriber paths.
