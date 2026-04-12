---
name: sales-buttondown
description: "Buttondown platform help — newsletter publishing, paid subscriptions via Stripe, automations, subscriber management, tags, RSS-to-email, custom domains, Markdown editor, CLI, REST API. Use when Buttondown emails aren't sending, paid subscriptions not working, automation not triggering, subscribers not importing, Stripe payments failing, custom domain not resolving, API calls returning errors, or migrating to Buttondown from another platform. Do NOT use for cross-platform email marketing strategy (use /sales-email-marketing), newsletter monetization strategy (use /sales-newsletter), audience growth strategy (use /sales-audience-growth), or cross-platform deliverability (use /sales-deliverability)."
argument-hint: "[describe what you need help with in Buttondown]"
license: MIT
version: 1.0.0
tags: [sales, newsletter, email-marketing, platform]
github: "https://github.com/buttondown"
---
# Buttondown Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Buttondown do you need help with?**
   - A) Writing & sending emails — Markdown editor, scheduling, drafts
   - B) Subscribers — importing, tagging, segments, managing subscribers
   - C) Paid subscriptions — Stripe setup, paywalls, pricing tiers (for strategy, hand off: `/sales-newsletter {your question}`)
   - D) Automations — welcome sequences, tag-triggered flows, surveys
   - E) Custom domains — sending domain, archive hosting
   - F) RSS-to-email — auto-sending from blog posts
   - G) API & CLI — programmatic subscriber/email management
   - H) Integrations — Zapier, Discord, webhooks, Memberful
   - I) Migration — moving from Substack, Mailchimp, Kit, or another platform
   - J) Analytics — open rates, click tracking, subscriber growth
   - K) Account & billing — plans, add-ons, teams, multiple newsletters
   - L) Something else — describe it

2. **What plan are you on?**
   - A) Free (100 subscribers)
   - B) Basic ($9/mo, 1K subscribers)
   - C) Standard ($29/mo, 5K subscribers)
   - D) Professional ($79/mo, 10K subscribers)
   - E) Advanced or Enterprise
   - F) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Hand off |
|---|---|
| Email marketing strategy across tools | "This is an email marketing strategy question — run: `/sales-email-marketing {your question}`" |
| Newsletter monetization strategy | "This is a newsletter monetization question — run: `/sales-newsletter {your question}`" |
| Growing your subscriber list | "This is an audience growth question — run: `/sales-audience-growth {your question}`" |
| Deliverability, SPF/DKIM/DMARC | "This is a deliverability question — run: `/sales-deliverability {your question}`" |
| Connecting Buttondown to other tools | "This is a tool integration question — run: `/sales-integration {your question}`" |

Answer directly when the question is Buttondown-specific — platform config, UI navigation, API usage, Stripe setup, add-on features.

## Step 3 — Buttondown platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

Provide step-by-step instructions with:
1. **Exact navigation** — where to click in the Buttondown dashboard
2. **Settings to configure** — specific fields, values, toggles
3. **Plan requirements** — flag if a feature requires an add-on or higher plan
4. **Verification steps** — how to confirm it's working

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Most features are paid add-ons** — tagging, analytics, paid subscriptions, automations, and RSS-to-email each cost $9-$29/mo extra on top of the base plan. Don't assume a feature is available — check which add-ons the user has enabled.

2. **Sending limit assumes daily max** — pricing is based on sending at most one email per day to your entire subscriber base. If you need higher frequency, contact Buttondown for custom pricing.

3. **Automations add-on is $29/mo** — unlike Kit or Mailchimp where automations are included, Buttondown charges separately. Welcome sequences require this add-on.

4. **API is available on all plans including free** — unlike many competitors, even free-tier users can use the full REST API. Auth is `Authorization: Token {key}` with base URL `https://api.buttondown.com/v1/`.

5. **Concierge migration is free** — Buttondown migrates your subscriber list from any platform at no cost, usually within one business day. Don't try to do complex migrations manually.

## Related skills

- `/sales-newsletter` — Newsletter monetization strategy (paid subscriptions, sponsorships, premium tiers)
- `/sales-email-marketing` — Cross-platform email marketing strategy (broadcasts, automation, segmentation)
- `/sales-audience-growth` — Audience growth strategy (lead magnets, cross-promotion, referral programs)
- `/sales-deliverability` — Cross-platform deliverability (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-kit` — Kit (formerly ConvertKit) platform help — direct competitor
- `/sales-ghost` — Ghost platform help — newsletter + publishing alternative
- `/sales-mailerlite` — MailerLite platform help — affordable newsletter alternative
- `/sales-digital-products` — Selling digital products alongside your newsletter
- `/sales-integration` — Connect Buttondown to CRM and other tools via API, Zapier, webhooks
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up paid subscriptions
**User says**: "How do I charge for my newsletter on Buttondown?"
**Skill does**: Walks through enabling the Paid Subscriptions add-on, connecting Stripe, configuring pricing tiers, and setting up paywalled content with the paywall toggle
**Result**: User has a working paid newsletter with Stripe payments

### Example 2: Migrating from Substack
**User says**: "I want to move my 2,000 subscribers from Substack to Buttondown"
**Skill does**: Recommends using Buttondown's free concierge migration service, explains what transfers (subscribers, archives), flags what doesn't (Substack-specific features like Notes), and covers domain authentication setup
**Result**: User has a migration plan with zero subscriber loss

### Example 3: API integration
**User says**: "I want to automatically add subscribers from my app to Buttondown"
**Skill does**: Provides the POST /v1/subscribers endpoint with auth header, request body format, and example cURL/Python code. Covers tag assignment and metadata fields
**Result**: User has working API integration code

## Troubleshooting

### Paid subscriptions not collecting payment
**Symptom**: Paywall is enabled but readers can't pay or see no payment option
**Cause**: Stripe not connected, or Paid Subscriptions add-on not enabled
**Solution**: Go to Settings → Paid Subscriptions, verify the add-on is active ($9/mo), and check Stripe connection status. Test with a Stripe test-mode payment. Ensure the email has the paywall toggle enabled.

### Emails stuck in draft or not sending
**Symptom**: Email shows as draft but won't send, or scheduled send didn't fire
**Cause**: Email may be flagged by Buttondown's built-in checks (broken links, malformed images), or sending domain not verified
**Solution**: Check the email's status page for warnings. Verify your sending domain in Settings → Domains. If using a custom domain, confirm DNS records (SPF/DKIM) are propagated.

### Subscribers not appearing after import
**Symptom**: Imported a CSV but subscriber count didn't change
**Cause**: CSV format issues, duplicate emails, or import still processing
**Solution**: Check import status in Subscribers → Imports. Verify CSV has a column header named "email" (case-sensitive). Duplicates are silently skipped. Large imports may take several minutes.
