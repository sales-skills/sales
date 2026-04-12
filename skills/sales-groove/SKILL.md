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

### GroovePages — Websites & Landing Pages

- Drag-and-drop page builder with mobile optimization
- SEO settings (meta titles, descriptions, OG tags)
- Custom domains and SSL
- Pre-built templates across niches
- Device-specific element visibility (show/hide on mobile vs desktop)
- Custom CSS and JavaScript injection
- Blog integration

**Key settings**: Page settings > SEO, Domain settings > Custom domain, Global styles > Fonts and colors

### GrooveFunnels — Sales Funnels

- Multi-step funnel builder with drag-and-drop
- Upsell/downsell pages with one-click purchase
- Order bump configuration on checkout pages
- A/B split testing for funnel pages
- Funnel analytics (conversion rates per step)
- Funnel templates by use case (webinar, product launch, lead magnet, tripwire)

**Key concepts**: Funnel steps (opt-in → sales page → checkout → upsell → thank you), conversion tracking between steps

### GrooveSell — Product Sales & Checkout

- Digital and physical product management
- Flexible pricing: one-time, subscription, payment plan, free, pay-what-you-want
- Checkout page customization
- Order bumps (additional offer on checkout page)
- Upsells and downsells (post-purchase offers)
- Coupon and discount codes
- Tax configuration
- Zero platform transaction fees (payment processor fees still apply)
- Affiliate tracking integration
- Webhooks for sales events: Sale, Refund, Failed Rebill, Cancellation

**Payment processors**: Stripe, PayPal, NMI, Authorize.net, Braintree

### GrooveMail — Email Marketing & Automation

- Email broadcasts (one-time sends to segments)
- Autoresponder sequences (time-based drip campaigns)
- Behavior-based automation (triggers: purchase, refund, form fill, abandoned cart, page visit, link click)
- Advanced segmentation (tags, email opens, link clicks, purchase history)
- Drag-and-drop email builder with templates
- SMS and voice broadcast messaging
- Form builder with 100+ templates
- Spam checker and deliverability tools
- Contact import/export

**Sending limits by plan** (as of March 2026 — verify current pricing):

| Plan | Contacts | Emails/month | Price |
|------|----------|-------------|-------|
| Free | 500 | 1,000–15,000 | $0 |
| Creator | 5,000 | 50,000 | $149/mo |
| Pro | 30,000 | Unlimited | $199/mo |
| Premium | 50,000 | Unlimited | $299/mo |

### GrooveAffiliate — Affiliate Program Management

- Affiliate registration and approval workflows
- Custom commission structures (percentage or fixed)
- Multi-tier commissions (affiliates earn on sub-affiliate sales)
- Cookie duration configuration
- Affiliate dashboard with performance metrics
- Payment tracking and payout management
- Promotional asset distribution (banners, swipe copy, links)
- Integration with GrooveSell (automatic tracking on all products)

### GrooveMember — Membership Sites & Courses

- Course builder with modules and lessons
- Drip content scheduling (release lessons over time)
- Multiple access levels (free, paid, VIP)
- Student progress tracking
- Quizzes and completion certificates
- Custom branding and domains
- Integration with GrooveSell for access control (purchase → auto-enroll)

### GrooveVideo — Video Hosting

- Video hosting with encoding
- HD and widescreen support
- Bulk upload
- Video analytics (plays, watch time, drop-off)
- Embeddable player with custom branding
- Storage limits by plan (100 GB on Pro)

### GrooveWebinar — Webinar Hosting

- Live webinars with attendee interaction
- Automated/evergreen webinars (pre-recorded, scheduled)
- Registration page builder
- Attendee management and reminders
- Screen sharing and presentation mode
- Chat and Q&A
- Integration with GrooveMail for follow-up sequences

### GrooveBlog — Blogging

- Blog creation with custom domains
- Unlimited posts
- SEO optimization per post
- Categories and tags
- Social sharing
- Integration with GroovePages for design consistency

### GrooveKart / GrooveStore — E-commerce

- Product catalog management
- Shopping cart and checkout
- Inventory tracking
- Shipping configuration
- Integration with GrooveSell for digital products

### GrooveProof — Social Proof

- Recent purchase notifications
- Visitor count displays
- Signup notifications
- Customizable notification appearance and timing

### Integrations

**Native**: All Groove apps are natively integrated with each other (GrooveSell → GrooveMail auto-sync, GrooveSell → GrooveAffiliate auto-tracking, GrooveSell → GrooveMember auto-enrollment).

**Zapier**: Groove.cm has a Zapier integration with triggers/actions for GrooveMail and GrooveSell. Connect to 8,000+ apps.

**Webhooks**: GrooveSell fires webhooks for: Sale, Refund, Failed Rebill, Cancellation. Configure via GrooveSell product settings.

**Payment processors**: Stripe, PayPal, NMI, Authorize.net, Braintree.

**Analytics**: Facebook Pixel, Google Analytics integration.

**No public REST API**: Groove.cm does not have a comprehensive public API. For custom integrations, use GrooveSell webhooks + Zapier.

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
