---
name: sales-kit
description: "Kit (formerly ConvertKit) platform help — email marketing, visual automations, sequences, landing pages, forms, Creator Profile, Commerce (digital products, paid newsletters), Creator Recommendations, subscriber tagging and segmentation, engagement scoring, API. Use when Kit emails aren't sending or formatting right, automations not triggering, subscribers stuck or not tagging correctly, digital product sales not working, or Kit API calls failing. Do NOT use for cross-platform email marketing strategy (use /sales-email-marketing), cross-platform deliverability (use /sales-deliverability), funnel strategy (use /sales-funnel), newsletter monetization strategy (use /sales-newsletter), audience growth strategy (use /sales-audience-growth), or digital product strategy (use /sales-digital-products)."
argument-hint: "[describe what you need help with in Kit]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, creator, newsletter, platform]
---
# Kit Platform Help

Help the user with Kit (formerly ConvertKit) platform questions — from email campaigns and automations through landing pages, commerce, Creator Recommendations, subscriber management, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Kit do you need help with?**
   - A) Broadcasts — sending one-off emails, scheduling, A/B testing
   - B) Sequences — drip campaigns, autoresponder series (for cross-platform strategy, hand off: `/sales-email-marketing {your question}`)
   - C) Visual Automations — trigger-based workflows, automation canvas
   - D) Landing pages & Forms — opt-in forms, Creator Profile, lead capture (for strategy, hand off: `/sales-funnel {your question}`)
   - E) Commerce — selling digital products, paid newsletters, subscriptions (for strategy, hand off: `/sales-digital-products {your question}`)
   - F) Creator Recommendations — cross-promotion network, paid recommendations (for strategy, hand off: `/sales-audience-growth {your question}`)
   - G) Subscribers — tagging, segmentation, custom fields, engagement scoring
   - H) Deliverability — domain auth, SPF/DKIM/DMARC, sender reputation (for cross-platform, hand off: `/sales-deliverability {your question}`)
   - I) Integrations — Zapier, Make, Shopify, WordPress, Stripe, native apps
   - J) API & Webhooks — Kit API v4, OAuth, automation via API
   - K) Analytics — broadcast stats, subscriber growth, engagement
   - L) Account & Billing — plan features, team management, migration
   - M) Something else — describe it

2. **What's your role?**
   - A) Creator / solopreneur (author, podcaster, coach, musician, artist)
   - B) Newsletter operator / media company
   - C) Course creator / educator
   - D) Marketing manager for a creator brand
   - E) Developer / technical integrator
   - F) Agency managing creator clients

3. **What are you trying to accomplish?**
   (Let the user describe their specific goal)

## Step 2 — Route or answer directly

**Hand off to specialized skills when the question is about strategy, not Kit-specific config:**

| If the question is about... | Hand off |
|---|---|
| Email marketing strategy across tools | "This is an email marketing strategy question — run: `/sales-email-marketing {your question}`" |
| Deliverability, warmup, domain auth beyond Kit | "This is an email deliverability question — run: `/sales-deliverability {your question}`" |
| Funnel strategy, landing page optimization | "This is a funnel strategy question — run: `/sales-funnel {your question}`" |
| Newsletter monetization strategy | "This is a newsletter strategy question — run: `/sales-newsletter {your question}`" |
| Growing an email list / audience | "This is an audience growth question — run: `/sales-audience-growth {your question}`" |
| Selling digital products (strategy) | "This is a digital products question — run: `/sales-digital-products {your question}`" |
| Membership / course platform decisions | "This is a membership strategy question — run: `/sales-membership {your question}`" |
| Checkout optimization | "This is a checkout optimization question — run: `/sales-checkout {your question}`" |
| Connecting Kit to other tools | "This is a tool integration question — run: `/sales-integration {your question}`" |
| Lead scoring models | "This is a lead scoring strategy question — run: `/sales-lead-score {your question}`" |

**Answer directly when the question is Kit-specific** — platform config, Kit UI navigation, Kit-specific features, Kit API usage.

## Step 3 — Kit platform reference

### Key terminology

| Kit term | Common equivalent |
|---|---|
| Broadcast | One-off email campaign |
| Sequence | Drip campaign / autoresponder |
| Visual Automation | Automation workflow |
| Tag | Contact label |
| Segment | Dynamic filtered list |
| Creator Profile | Bio link / micro-website |
| Creator Recommendations | Cross-promotion network |
| Commerce | Digital product storefront |
| Subscriber | Contact / lead |

### Data model

| Object | Key fields | Notes |
|---|---|---|
| Subscriber | email, first_name, state, tags[], custom_fields{}, created_at | States: active, inactive, bounced, complained, cancelled |
| Broadcast | subject, content, sent_at, stats{} | A/B test subject lines (Creator+), content (Pro) |
| Sequence | name, steps[], subscriber_count | Drip campaigns with timed delays |
| Visual Automation | name, triggers[], actions[], rules[] | Canvas-based workflow builder |
| Tag | name, subscriber_count | Manual or automation-applied |
| Segment | name, conditions[] | Dynamic — auto-updates as subscribers match |
| Form | name, type, subscriber_count | Inline, modal, slide-in, or sticky bar |
| Landing Page | name, url, template | Hosted on Kit or custom domain |
| Product | name, price, type | Digital download or subscription |
| Purchase | product_id, subscriber_id, amount | E-commerce tracking |

### Plans and feature gates

| Feature | Newsletter (Free) | Creator ($33/mo) | Pro ($66/mo) |
|---|---|---|---|
| Subscribers | Up to 10,000 | 1,000+ (scales) | 1,000+ (scales) |
| Broadcasts | Unlimited | Unlimited | Unlimited |
| Sequences | No | Unlimited | Unlimited |
| Visual Automations | 1 | Unlimited | Unlimited |
| Landing pages & Forms | Unlimited | Unlimited | Unlimited |
| A/B testing (subject) | No | Yes | Yes |
| A/B testing (content) | No | No | Yes |
| Engagement scoring | No | No | Yes |
| Deliverability reporting | No | No | Yes |
| Newsletter referral system | No | No | Yes |
| Remove Kit branding | No | Yes | Yes |
| Integrations / apps | No | Yes | Yes |
| Team members | 1 | 1 | Unlimited |
| Commerce | Yes (0.6% fee) | Yes (0.6% fee) | Yes (0.6% fee) |

*As of April 2025 — verify current pricing at kit.com/pricing*

### API quick reference

- **Base URL**: `https://api.kit.com/v4/`
- **Auth**: OAuth 2.0 (PKCE for apps) or API key
- **Rate limit**: 120 requests per rolling 60-second window
- **Pagination**: Cursor-based
- **Webhooks**: subscriber_activate, subscriber_unsubscribe, subscriber_bounce, subscriber_complain, form_subscribe, course_subscribe, course_complete
- **Full reference**: See `references/kit-api-reference.md`

### Integrations

**Native apps (Creator+ plans)**:
- E-commerce: Shopify, WooCommerce, Gumroad, Stripe, PayPal
- Website: WordPress, Squarespace, Wix, Webflow
- Courses: Teachable, Thinkific, Circle
- Design: Canva
- Other: Substack (import)

**Via Zapier/Make**: 120+ additional integrations

**WordPress plugin**: Integrates with Elementor, Contact Form 7, WishList Member

### Broadcasts

- **Email designer**: 3 templates — Text-only, Classic, Modern
- **A/B testing**: Subject lines on Creator+, content on Pro
- **RSS campaigns**: Auto-send when new content published
- **Scheduling**: Send now, schedule, or optimize send time
- **Resend to unopens**: Re-send with different subject line

### Sequences

- **Timed delays**: Set days/hours between steps
- **Subscriber filters**: Skip steps based on tags, segments, custom fields
- **Exit conditions**: Remove from sequence on tag add/remove, purchase, or custom event
- **Multiple sequences**: A subscriber can be in multiple sequences simultaneously

### Visual Automations

- **Triggers**: Form subscribe, tag added/removed, custom field changed, purchase, link clicked, date-based
- **Actions**: Add/remove tag, subscribe to sequence, move to step, send email, set custom field, create delay, send webhook
- **Rules**: If/else branching based on subscriber data
- **Canvas**: Visual drag-and-drop builder

### Commerce

- **Digital products**: PDF, video, audio, zip — hosted on Kit
- **Subscriptions**: Recurring billing for paid newsletters or memberships
- **Paid recommendations**: Earn $1–$5+ per new subscriber referred from other creators
- **Transaction fee**: 0.6% on all sales (+ payment processor fees)
- **Payment processors**: Stripe (required for commerce)

### Creator Recommendations

- **How it works**: After a subscriber confirms opt-in, Kit shows recommendations for other creators
- **Paid recommendations**: Creators can pay $1–$5+ per subscriber acquired through recommendations
- **Free recommendations**: Cross-promote with aligned creators at no cost
- **Requirements**: Active Kit account with growing list

## Step 4 — Actionable guidance

Based on the user's question, provide step-by-step instructions with:

1. **Exact Kit UI navigation** — tell them where to click (e.g., "Go to Automations → New Automation → choose trigger")
2. **Settings to configure** — specific fields, values, toggles
3. **Plan requirements** — flag if a feature requires Creator or Pro plan
4. **Verification steps** — how to confirm it's working (send test, check automation log)

### Common workflows

**Set up a welcome sequence**:
1. Create a Sequence (Sequences → New Sequence)
2. Write 3–7 emails with delays between each
3. Create a Visual Automation: trigger = form subscribe → action = subscribe to sequence
4. Test with a test subscriber

**Sell a digital product**:
1. Go to Earn → Products → New Product
2. Upload file, set price, write description
3. Connect Stripe (required)
4. Create a landing page or embed buy button in existing page
5. Set up post-purchase automation: trigger = purchase → action = tag + thank-you sequence

**Set up Creator Recommendations**:
1. Go to Grow → Recommendations
2. Browse and select creators to recommend (free) or set a paid budget
3. Recommendations appear on your confirmation page after opt-in
4. Track new subscribers from recommendations in Analytics

**Migrate from another platform**:
1. Export subscribers as CSV from old platform
2. Go to Subscribers → Import subscribers
3. Map CSV columns to Kit fields (email, first_name, tags)
4. Re-create key automations in Visual Automations
5. Update opt-in forms on your website to point to Kit forms
6. Set up domain authentication (SPF/DKIM) for your sending domain

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Free plan has no sequences or integrations** — the Newsletter (free) plan only allows 1 visual automation, no sequences, no A/B testing, and no third-party integrations. Users hitting these limits need to upgrade to Creator ($33/mo). Don't suggest automation workflows to free-plan users without flagging this.

2. **Kit ≠ ConvertKit in API URLs** — the v4 API uses `api.kit.com` but older v3 API used `api.convertkit.com`. If a user has old integrations pointing to `api.convertkit.com/v3/`, they still work but are deprecated. New integrations should use v4.

3. **Email designer is intentionally minimal** — Kit only has 3 email templates (Text-only, Classic, Modern). This is by design — Kit believes simple, text-forward emails perform better for creators. Don't suggest looking for more templates; instead, help users customize within the existing templates.

4. **Commerce requires Stripe** — Kit Commerce (digital products, paid newsletters) requires a connected Stripe account. PayPal is supported for some features but Stripe is mandatory for Commerce. Don't suggest setting up Commerce without confirming Stripe is connected.

5. **Engagement scoring is Pro-only** — subscriber engagement scoring and deliverability reporting are only available on the Pro plan ($66/mo). Don't reference these features for Creator-plan users.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Cross-platform email marketing strategy (broadcasts, nurture sequences, automation across all tools)
- `/sales-newsletter` — Newsletter monetization strategy (paid subscriptions, sponsorships, premium tiers)
- `/sales-audience-growth` — Audience growth strategy (lead magnets, cross-promotion, referral programs)
- `/sales-digital-products` — Digital product sales strategy (pricing, delivery, upsells across platforms)
- `/sales-deliverability` — Cross-platform deliverability (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-funnel` — Funnel strategy (landing pages, conversion optimization)
- `/sales-checkout` — Checkout optimization (upsells, order bumps, payment plans)
- `/sales-membership` — Membership and course strategy
- `/sales-integration` — Connect Kit to CRM and other tools
- `/sales-lead-score` — Lead scoring models (engagement scoring strategy)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up automations
**User says**: "How do I automatically tag subscribers who click a link in my broadcast?"
**Skill does**: Walks through creating a Visual Automation with a "link clicked" trigger → "add tag" action, with exact Kit UI steps
**Result**: User has a working automation that tags subscribers based on link clicks

### Example 2: Selling a digital product
**User says**: "I want to sell my ebook through Kit"
**Skill does**: Guides through Commerce setup — Stripe connection, product creation, file upload, landing page, post-purchase automation
**Result**: User has a live product page with automated delivery and follow-up sequence

### Example 3: Migrating from Mailchimp
**User says**: "I'm moving from Mailchimp to Kit, what do I need to do?"
**Skill does**: Provides migration checklist — CSV export/import, field mapping, automation recreation, form updates, domain re-authentication, and flags feature differences (Kit has fewer templates but better automation)
**Result**: User has a complete migration plan with no subscriber loss

## Troubleshooting

### Broadcasts showing low open rates
**Symptom**: Open rates dropped significantly after switching to Kit
**Cause**: Domain authentication not set up (SPF/DKIM/DMARC), or Apple MPP inflating previous platform's rates
**Solution**: Set up domain authentication in Settings → Email. Compare rates excluding Apple MPP opens. Use `/sales-deliverability` for deeper diagnosis.

### Automation not triggering
**Symptom**: Visual Automation exists but subscribers aren't flowing through it
**Cause**: Automation is paused, trigger form is inactive, or automation was created after subscribers already joined
**Solution**: Check automation status (must be "Live"). Verify the trigger form/tag is active. Note: automations don't retroactively process existing subscribers — only new events trigger them.

### Commerce payments not working
**Symptom**: Product page loads but purchase fails or no payment option appears
**Cause**: Stripe not connected, or Stripe account not fully verified
**Solution**: Go to Earn → Settings → verify Stripe connection is active and Stripe account has completed onboarding (identity verification, bank account). Test with Stripe test mode first.
