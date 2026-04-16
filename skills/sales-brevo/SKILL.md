---
name: sales-brevo
description: "Brevo platform help — email/SMS/WhatsApp campaigns, marketing automation (journeys), transactional messaging, Sales CRM (deals, pipelines), Conversations (live chat, chatbot), Loyalty programs, push notifications, e-commerce, landing pages, contact management, Aura AI, API & integrations. Use when Brevo emails landing in spam, automations not firing, contacts not syncing or importing correctly, Brevo API calls failing, or confused migrating from Sendinblue. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), designing outbound cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), transactional email strategy (use /sales-transactional-email), live chat strategy (use /sales-live-chat), or loyalty program strategy (use /sales-loyalty)."
argument-hint: "[describe what you need help with in Brevo]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, marketing-automation, sms, platform]
github: "https://github.com/sendinblue"
---
# Brevo Platform Help

Help the user with Brevo platform questions — from email/SMS/WhatsApp campaigns and marketing automation through transactional messaging, Sales CRM, Conversations (live chat), Loyalty programs, e-commerce, and API integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Brevo do you need help with?**
   - A) Email campaigns — creating, managing, or optimizing marketing emails
   - B) SMS / WhatsApp campaigns — setup, templates, approval
   - C) Marketing automation — journeys, triggers, workflows (for cross-platform strategy, hand off: `/sales-email-marketing {your question}`)
   - D) Transactional messaging — API/SMTP email, transactional SMS (for cross-platform, hand off: `/sales-transactional-email {your question}`)
   - E) Sales CRM — deals, pipelines, companies, tasks
   - F) Conversations — live chat, chatbot setup (for cross-platform strategy, hand off: `/sales-live-chat {your question}`)
   - G) Loyalty — programs, rewards, tiers, vouchers (for cross-platform strategy, hand off: `/sales-loyalty {your question}`)
   - H) Contacts — lists, segments, attributes, import/export
   - I) Deliverability — domain auth, dedicated IPs, warmup (for cross-platform, hand off: `/sales-deliverability {your question}`)
   - J) E-commerce — product sync, orders, coupons, revenue attribution
   - K) Landing pages & forms
   - L) Push notifications — web & mobile
   - M) API & webhooks — REST API, SDKs, automation
   - N) Integrations — Shopify, Salesforce, Zapier, Make, etc.
   - O) Aura AI — Marketing Agent, Sales Assistant, Data Analyst
   - P) Account & billing — plans, sub-accounts, user management
   - Q) Migration from Sendinblue — naming changes, URL updates
   - R) Something else — describe it

2. **What's your role?**
   - A) Marketing manager / email marketer
   - B) Developer / technical
   - C) E-commerce manager
   - D) Sales rep / team lead
   - E) Founder / solo operator
   - F) Agency managing multiple clients
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Prospect list building → `/sales-prospect-list`
- Contact enrichment / data hygiene → `/sales-enrich`
- Outbound cadence strategy → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Transactional email architecture → `/sales-transactional-email`
- Live chat / chatbot strategy → `/sales-live-chat`
- Loyalty program design → `/sales-loyalty`
- Email marketing strategy (opt-in) → `/sales-email-marketing`
- Tool integration architecture → `/sales-integration`
- Lead scoring models → `/sales-lead-score`
- Funnel / landing page strategy → `/sales-funnel`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Brevo platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Sendinblue → Brevo migration confusion**: API base URL changed from `api.sendinblue.com` to `api.brevo.com`. Old SDKs may still reference Sendinblue namespaces. The GitHub org is still `sendinblue`. If a user mentions Sendinblue, treat it as Brevo.
2. **Volume-based vs contact-based pricing**: Brevo charges by email volume, not contacts (unlike Mailchimp/HubSpot). Unlimited contacts on all plans. Don't confuse the user by mentioning contact limits.
3. **Free plan daily limit**: 300 emails/day on the free plan — this is a daily cap, not monthly. Users hitting this limit need Starter plan ($25/mo for 20K emails/mo).
4. **WhatsApp template approval delay**: WhatsApp campaigns require Meta-approved templates. Approval takes 24-48 hours. Don't tell users they can send WhatsApp immediately.
5. **Automation ≠ campaigns**: In Brevo, "Campaign" = single send, "Automation/Journey" = multi-step workflow. Don't confuse these — users asking about "drip sequences" want Automation, not Campaigns.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Opt-in email marketing strategy across platforms
- `/sales-transactional-email` — Transactional/triggered email delivery strategy
- `/sales-live-chat` — Live chat and chatbot strategy across platforms
- `/sales-loyalty` — Loyalty program design across platforms
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, reputation)
- `/sales-cadence` — Outbound sequence design (if using Brevo for cold outreach)
- `/sales-integration` — Connect Brevo with CRM, e-commerce, and other tools
- `/sales-funnel` — Landing page and funnel strategy
- `/sales-lead-score` — Lead scoring models (Brevo has contact scoring on Professional plan+)
- `/sales-checkout` — Checkout optimization (Brevo e-commerce features)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up a welcome automation
**User says**: "How do I create a welcome email series in Brevo?"
**Skill does**: Guides through Automation → Create Journey → trigger on "Contact added to list" → add email steps with wait delays → test with a test contact
**Result**: 3-email welcome series automation live and tested

### Example 2: Connecting Shopify for abandoned cart
**User says**: "I want to send abandoned cart emails from Brevo for my Shopify store"
**Skill does**: Walks through installing Brevo Shopify plugin → syncing products/orders → creating abandoned cart automation journey → configuring timing (1hr, 24hr, 72hr) → adding product blocks to email template
**Result**: Abandoned cart automation connected to Shopify and sending

### Example 3: Sending transactional emails via API
**User says**: "How do I send order confirmation emails through the Brevo API?"
**Skill does**: Shows API key setup → creating a template in Brevo UI → calling `POST /smtp/email` with templateId and params → setting up webhooks for delivery tracking → error handling
**Result**: Transactional email flow working with template and dynamic parameters

## Troubleshooting

### Emails landing in spam
**Symptom**: Marketing or transactional emails going to spam folder
**Cause**: Domain not authenticated, no dedicated IP, or sending to unengaged contacts
**Solution**: 1) Verify domain authentication (DKIM + DMARC) in Settings → Domains. 2) Check SPF includes `spf.brevo.com`. 3) On paid plans, request a dedicated IP and warm it up gradually. 4) Clean your list — remove contacts who haven't opened in 6+ months. See `/sales-deliverability` for comprehensive guidance.

### WhatsApp template rejected
**Symptom**: WhatsApp message template stuck in "Pending" or rejected by Meta
**Cause**: Template violates Meta's commerce or content policies, or contains prohibited content
**Solution**: 1) Review Meta's WhatsApp Business message template guidelines. 2) Avoid promotional language in utility templates. 3) Ensure opt-in compliance. 4) Resubmit with modifications. Allow 24-48 hours for review.

### API returning 429 Too Many Requests
**Symptom**: API calls failing with status 429
**Cause**: Rate limit exceeded
**Solution**: 1) Check `x-sib-ratelimit-remaining` and `x-sib-ratelimit-reset` response headers. 2) Implement exponential backoff. 3) Batch operations where possible (e.g., `POST /contacts/import` instead of individual creates). 4) For high-volume transactional email, consider SMTP relay instead of REST API.
