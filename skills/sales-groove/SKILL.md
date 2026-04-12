---
name: sales-groove
description: "Groove.cm platform help — GroovePages, GrooveFunnels, GrooveSell, GrooveMail, GrooveAffiliate, GrooveMember, GrooveVideo, GrooveWebinar, GrooveBlog, GrooveKart, GrooveProof. Use when a Groove module isn't working right, GrooveMail emails aren't sending, GrooveSell checkout is losing buyers, GrooveAffiliate commissions aren't tracking, GrooveMember content isn't accessible, or GrooveWebinar events won't launch. Do NOT use for general funnel strategy (use /sales-funnel), general email marketing strategy (use /sales-email-marketing), general affiliate program design (use /sales-affiliate-program), general webinar strategy (use /sales-webinar), general membership strategy (use /sales-membership), or general checkout optimization (use /sales-checkout)."
argument-hint: "[describe what you need help with in Groove.cm]"
license: MIT
version: 1.0.0
tags: [sales, funnel, email-marketing, ecommerce, platform]
---
# Groove.cm Platform Help

Help the user with Groove.cm platform questions — all-in-one business platform covering websites, funnels, email marketing, e-commerce, membership sites, affiliate programs, webinars, video hosting, and blogging.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which Groove module do you need help with?**
   - A) GroovePages — websites and landing pages
   - B) GrooveFunnels — sales funnels with upsells/downsells
   - C) GrooveSell — product sales, checkout, payments
   - D) GrooveMail — email marketing, automation, broadcasts
   - E) GrooveAffiliate — affiliate program management
   - F) GrooveMember — membership sites and courses
   - G) GrooveVideo — video hosting
   - H) GrooveWebinar — live and automated webinars
   - I) GrooveBlog — blogging
   - J) GrooveKart/Store — e-commerce
   - K) GrooveProof — social proof notifications
   - L) Integrations — Zapier, webhooks, third-party tools
   - M) Other — describe it

2. **What's your role?**
   - A) Solopreneur / creator
   - B) Course creator / coach
   - C) Agency running Groove for clients
   - D) E-commerce seller
   - E) Affiliate marketer
   - F) Other

3. **What are you trying to accomplish?**
   - A) Setting up from scratch
   - B) Migrating from another platform
   - C) Optimizing an existing setup
   - D) Troubleshooting a specific issue
   - E) Connecting Groove to other tools

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the user's question is better served by a specialized skill, route them:

| Question type | Hand off |
|---|---|
| Funnel strategy, conversion optimization, funnel structure | "This is a funnel strategy question — run: `/sales-funnel {your question}`" |
| Email marketing strategy, nurture sequences, broadcast planning | "This is an email marketing strategy question — run: `/sales-email-marketing {your question}`" |
| Affiliate program design, commission structures, recruitment | "This is a affiliate program question — run: `/sales-affiliate-program {your question}`" |
| Webinar selling strategy, presentation structure, follow-up | "This is a webinar strategy question — run: `/sales-webinar {your question}`" |
| Membership/course design, pricing, retention | "This is a membership strategy question — run: `/sales-membership {your question}`" |
| Checkout optimization, upsell strategy, pricing psychology | "This is a checkout optimization question — run: `/sales-checkout {your question}`" |
| Connecting Groove to CRM, Zapier workflows, webhooks | "This is a tool integration question — run: `/sales-integration {your question}`" |

If the question is Groove-specific (how to configure a module, platform limitations, Groove-specific terminology), answer directly.

## Step 3 — Groove.cm platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

When helping the user, follow this pattern:

1. **Identify the specific module and task** — don't give generic advice when they need step-by-step clicks
2. **Reference the correct navigation path** — e.g., "GrooveSell > Products > Add Product > Pricing tab"
3. **Warn about plan limitations** — many features are gated by plan tier. Check what plan the user is on before recommending features.
4. **Cross-module workflows** — Groove's power is in the native integrations. Always suggest connected workflows (e.g., "Set up the GrooveSell product first, then GrooveMember will auto-create the access level, and GrooveMail can trigger a welcome sequence on purchase").
5. **Verify the setup** — suggest testing steps (test purchase, test email, test funnel flow)

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Pricing is extremely volatile.** Groove.cm runs aggressive limited-time promotions ($1/year, lifetime deals) that change frequently. Never state current pricing as fact — always add "as of {date} — verify current pricing at groove.cm/pricing." Users may be on wildly different pricing depending on when they signed up.
- **No public API.** Claude may be tempted to suggest API integrations, but Groove.cm has no comprehensive public REST API. The only programmatic options are GrooveSell webhooks (4 events) and Zapier. Don't invent API endpoints.
- **Free plan has real limitations.** The free tier limits contacts (500), email sends (1,000–15,000/mo), pages (25), and domains (1). Don't recommend workflows that exceed free plan limits without checking the user's plan.
- **GrooveMail is opt-in email marketing, not cold outbound.** Don't confuse GrooveMail with cold email tools like Mailshake or Lemlist. GrooveMail is for emailing subscribers who opted in. Using it for cold outbound will tank deliverability and violate terms.
- **Module names changed over time.** Groove.cm was originally "GrooveFunnels" and module names have shifted (GrooveKart → GrooveStore, etc.). Users may reference old names. Map them to current names.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-funnel` — Funnel strategy, structure, and optimization (tool-agnostic)
- `/sales-email-marketing` — Email marketing strategy for opt-in lists (tool-agnostic)
- `/sales-affiliate-program` — Affiliate program design and management (tool-agnostic)
- `/sales-webinar` — Webinar-based selling strategy (tool-agnostic)
- `/sales-membership` — Membership site and course delivery strategy (tool-agnostic)
- `/sales-checkout` — Checkout optimization, upsells, and order bumps (tool-agnostic)
- `/sales-integration` — Connect Groove to CRM and other tools via Zapier/webhooks
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Set up a course with payment
**User says**: "I want to sell an online course in Groove. How do I set it up?"
**Skill does**:
1. Walks through GrooveSell product creation (digital product, pricing)
2. Connects to GrooveMember for course content delivery
3. Sets up GrooveMail welcome sequence triggered on purchase
4. Configures GrooveAffiliate so affiliates can promote the course
5. Suggests testing with a $1 test purchase
**Result**: Complete course sales pipeline with payment, delivery, email follow-up, and affiliate tracking

### Example 2: Migrate from ClickFunnels
**User says**: "I'm moving from ClickFunnels to Groove. What's the process?"
**Skill does**:
1. Maps ClickFunnels concepts to Groove equivalents (funnels → GrooveFunnels, email → GrooveMail, membership → GrooveMember)
2. Outlines migration order: pages first, then products, then email lists, then automations
3. Warns about what doesn't transfer (automation rules, email history)
4. Suggests running both platforms in parallel during transition
**Result**: Step-by-step migration plan with risk mitigation

### Example 3: Set up GrooveSell webhooks for external CRM
**User says**: "I need to send Groove sales data to my HubSpot CRM"
**Skill does**:
1. Notes no native Groove→HubSpot integration
2. Recommends Zapier: GrooveSell "New Sale" trigger → HubSpot "Create Contact" + "Create Deal" actions
3. Provides field mapping guidance
4. Also mentions GrooveSell webhook option for custom integration
5. Routes to `/sales-integration` for advanced webhook setup
**Result**: Zapier workflow connecting Groove sales to HubSpot with field mapping

## Troubleshooting

### GrooveMail emails going to spam
**Symptom**: Subscribers report not receiving emails or finding them in spam
**Cause**: Domain not authenticated, sending too fast on a new account, or content triggering spam filters
**Solution**: Verify custom sending domain with SPF/DKIM/DMARC. Start with small sends and gradually increase volume. Use Groove's built-in spam checker before sending. Avoid spam trigger words in subject lines. Check sender reputation at mail-tester.com.

### GrooveSell checkout not processing payments
**Symptom**: Customers see errors on checkout or payments don't go through
**Cause**: Payment processor not connected, SSL issue on custom domain, or product pricing misconfigured
**Solution**: Verify payment processor connection in GrooveSell > Settings > Payment Integrations. Test with a small purchase. Check that custom domain has SSL enabled. Verify product pricing and currency settings match the payment processor's configuration.

### GrooveMember content not unlocking after purchase
**Symptom**: Customer purchases a course but can't access the content in GrooveMember
**Cause**: Product not linked to membership access level, or automation delay
**Solution**: Check GrooveSell product settings > Fulfillment tab — ensure it's linked to the correct GrooveMember product and access level. Verify the customer's email matches in both GrooveSell and GrooveMember. Check for automation delays (enrollment may take a few minutes).
