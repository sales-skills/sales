---
name: sales-transactional-email
description: "Transactional and triggered email delivery — order confirmations, password resets, welcome emails, receipts, shipping notifications, account alerts. Covers provider selection, template design, deliverability, API integration, SMTP relay, and monitoring across SendGrid, Postmark, Mailgun, Brevo, Braze, Iterable, Customer.io, Mailchimp/Mandrill, GetResponse (MAX only), and Amazon SES. Use when password resets or order confirmations aren't reaching customers, you're unsure which transactional email provider to pick, triggered emails are landing in spam or arriving late, or SMTP relay setup is failing. Do NOT use for marketing email campaigns (use /sales-email-marketing), cold outbound sequences (use /sales-cadence), cross-platform deliverability strategy (use /sales-deliverability), or SendPulse-specific questions (use /sales-sendpulse). For platform-specific help, use /sales-braze, /sales-iterable, /sales-sendgrid, /sales-postmark, /sales-mailgun, /sales-brevo, /sales-customerio, /sales-mailchimp, /sales-getresponse, or /sales-sendpulse."
argument-hint: "[describe your transactional email question or goal]"
license: MIT
version: 1.0.0
tags: [sales, transactional-email, triggered-email, api]
---
# Transactional Email Delivery

Help the user with transactional/triggered email — from provider selection and template design through API integration, SMTP relay, deliverability, and monitoring. This skill is tool-agnostic but includes platform-specific guidance for SendGrid, Postmark, Mailgun, Brevo, Customer.io, Mailchimp/Mandrill, and Amazon SES.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What type of transactional email do you need help with?**
   - A) Order confirmations / receipts / shipping notifications
   - B) Password resets / account verification / 2FA
   - C) Welcome emails / onboarding sequences triggered by signup
   - D) Billing / invoice / subscription notifications
   - E) Alert / notification emails (activity, mentions, reminders)
   - F) Provider selection — choosing the right transactional email service
   - G) Delivery issues — emails not arriving, going to spam, delayed
   - H) API/SMTP integration — connecting your app to a provider
   - I) Template design — building reusable transactional templates
   - J) Monitoring & analytics — tracking delivery, opens, bounces
   - K) Something else — describe it

2. **What's your current setup?**
   - A) No provider yet — starting from scratch
   - B) Using SendGrid
   - C) Using Postmark
   - D) Using Mailgun
   - E) Using Brevo (Sendinblue)
   - F) Using Customer.io
   - G) Using Mailchimp / Mandrill
   - H) Using Amazon SES
   - I) Using another provider
   - J) Using my own SMTP server

3. **What's your volume?**
   - A) Low (< 1K emails/day)
   - B) Medium (1K-50K/day)
   - C) High (50K-500K/day)
   - D) Very high (500K+/day)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Strategy and approach

### Transactional vs marketing email

**Transactional emails** are triggered by a user action or system event — they're expected and usually 1:1. They don't require marketing consent (CAN-SPAM exemption) but must be genuinely transactional.

| Transactional | Marketing |
|---|---|
| Order confirmation | Promotional campaign |
| Password reset | Newsletter |
| Shipping notification | Product announcement |
| Account verification | Re-engagement campaign |
| Invoice / receipt | Discount / sale notification |

**Key principle**: Keep transactional and marketing email on separate sending infrastructure (different IPs/domains) so marketing reputation issues don't affect transactional delivery.

### Provider selection framework

| Factor | SendGrid | Postmark | Mailgun | Brevo | Customer.io | SES |
|---|---|---|---|---|---|---|
| **Best for** | Scale + marketing combo | Deliverability-first | Developer flexibility | All-in-one + marketing | Behavior-triggered | Raw volume + cost |
| **Deliverability** | Good | Excellent (98.7%) | Good | Good | Good | Good (self-managed) |
| **Pricing model** | Per email | Per email | Per email | Volume tiers | Per profile | Per email (cheapest) |
| **Free tier** | 100/day | 100/month | 1K/month (trial) | 300/day | None | 62K/month (from EC2) |
| **SMTP relay** | Yes | Yes | Yes | Yes | No | Yes |
| **REST API** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Templates** | Dynamic (Handlebars) | Handlebars | Handlebars | UI builder + API | Liquid | Basic |
| **Inbound parsing** | Yes | Yes | Yes | Yes | No | Yes |
| **Webhooks** | Yes (Event Webhook) | Yes (7 types) | Yes (8 events) | Yes | Yes | SNS notifications |

### Template best practices

1. **Keep it simple** — transactional emails should be clear, not flashy
2. **Include essential info above the fold** — order number, tracking link, action button
3. **Use dynamic parameters** — never hardcode user-specific data
4. **Test across clients** — Outlook, Gmail, Apple Mail render differently
5. **Include plain-text fallback** — some recipients/clients need it
6. **Brand consistently** — logo, colors, footer, but don't over-design

### Deliverability for transactional email

1. **Dedicated sending domain** — use `mail.example.com` or `notify.example.com`, not your main domain
2. **Authenticate everything** — SPF, DKIM, DMARC (p=quarantine or p=reject)
3. **Dedicated IP** — at 50K+/month volume, get a dedicated IP and warm it
4. **Separate streams** — keep transactional and marketing on different IPs/subdomains
5. **Monitor bounces** — suppress hard bounces immediately, track soft bounce patterns
6. **Watch complaint rates** — transactional should be near 0% complaints

## Step 3 — Platform-specific guidance

**Read `references/platform-guide.md`** for detailed provider comparisons, API references, integration checklist, and key metrics.

### In MailerLite
MailerLite supports transactional email as a separate feature from marketing campaigns:
- **API-triggered**: Transactional emails are sent via the MailerLite API, not through the campaign builder. Use for order confirmations, password resets, shipping notifications.
- **Separate infrastructure**: Transactional sends don't count against marketing email limits and use separate delivery infrastructure.
- **Templates**: Create reusable templates in the MailerLite dashboard, reference them by ID in API calls.
- **Limitations**: MailerLite's transactional email is basic compared to SendGrid, Postmark, or Mailgun. No inbound parsing, no advanced analytics, no dedicated IP for transactional (Enterprise only). Best for MailerLite users who want to keep everything in one platform. For high-volume or latency-sensitive transactional email, use a dedicated provider.
- **API**: `POST /api/subscribers` for contact management, webhooks for delivery tracking. See `/sales-mailerlite` for full API reference.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question, provide targeted recommendations drawing on the strategy framework in Step 2 and provider details in the reference guide.

## Gotchas

1. **Don't mix transactional and marketing on the same IP/domain** — marketing reputation problems will tank transactional delivery. Use separate subdomains and ideally separate IPs.
2. **"Transactional" has a legal definition** — CAN-SPAM exempts transactional emails from opt-out requirements, but the email must be primarily transactional. An order confirmation with a 50% coupon at the top is marketing, not transactional.
3. **SMTP is not real-time** — SMTP queues add latency. For time-sensitive emails (2FA codes, password resets), use the REST API for faster delivery.
4. **Webhooks can fail silently** — if your webhook endpoint is down, you'll miss delivery/bounce events. Implement webhook logging and alerting.
5. **Template rendering varies by client** — Outlook uses Word's rendering engine. Always test templates in Litmus or Email on Acid, especially for layout-heavy designs.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-iterable` — Iterable platform help (triggered campaigns for transactional email, Studio journeys, cross-channel)
- `/sales-braze` — Braze platform help (transactional email API, Canvas Flow, cross-channel orchestration)
- `/sales-brevo` — Brevo platform help (transactional email, marketing, CRM)
- `/sales-sendgrid` — SendGrid platform help
- `/sales-postmark` — Postmark platform help
- `/sales-mailgun` — Mailgun platform help
- `/sales-customerio` — Customer.io platform help
- `/sales-mailchimp` — Mailchimp/Mandrill platform help
- `/sales-getresponse` — GetResponse platform help (transactional email on MAX plan, marketing automation, webinars)
- `/sales-sendpulse` — SendPulse platform help (SMTP transactional email, marketing automation, chatbots)
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, reputation)
- `/sales-mailerlite` — MailerLite platform help (email campaigns, automation, transactional email, API)
- `/sales-email-marketing` — Opt-in marketing email strategy (not transactional)
- `/sales-integration` — Connect email tools with CRM and other systems
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing a transactional email provider
**User says**: "We're a SaaS startup sending about 5K transactional emails/day — order confirmations, password resets, and activity notifications. What provider should we use?"
**Skill does**: Evaluates volume (medium), use cases (standard transactional), and likely needs (reliability, good deliverability, reasonable cost). Recommends Postmark for best deliverability or SendGrid for more flexibility. Compares pricing at 150K/month volume.
**Result**: Clear recommendation with reasoning, cost comparison, and setup next steps

### Example 2: Debugging delivery delays
**User says**: "Our password reset emails are taking 30+ seconds to arrive via SMTP through Mailgun"
**Skill does**: Identifies SMTP queuing as likely cause. Recommends switching to REST API for time-sensitive emails. Shows Mailgun API example for password reset. Suggests monitoring with webhooks.
**Result**: Root cause identified, API migration code provided, monitoring setup

### Example 3: Setting up transactional email in Brevo
**User says**: "How do I send order confirmation emails through the Brevo API with dynamic order data?"
**Skill does**: Walks through creating a template in Brevo UI → calling POST /smtp/email with templateId and params → setting up delivery webhooks → error handling and retry logic
**Result**: Working transactional email flow with template, API integration, and monitoring

## Troubleshooting

### Transactional emails going to spam
**Symptom**: Order confirmations or account emails landing in spam
**Cause**: Usually domain authentication issues, shared IP reputation, or content triggers
**Solution**: 1) Verify SPF/DKIM/DMARC are properly configured. 2) Check if you're on a shared IP with bad reputation — consider dedicated IP. 3) Review email content for spam trigger words. 4) Ensure you're not mixing marketing content into transactional emails. See `/sales-deliverability`.

### High bounce rates on transactional email
**Symptom**: Bounce rate exceeding 2% on transactional sends
**Cause**: Sending to invalid addresses — users entering fake emails at signup, typos, abandoned accounts
**Solution**: 1) Implement real-time email validation at signup (ZeroBounce, Kickbox, or provider's built-in). 2) Use double opt-in for account creation. 3) Suppress hard bounces immediately. 4) Clean your contact list quarterly.

### Webhook events not arriving
**Symptom**: No webhook callbacks received after sending emails
**Cause**: Webhook endpoint misconfigured, firewall blocking provider IPs, or SSL certificate issues
**Solution**: 1) Verify webhook URL is publicly accessible (not localhost). 2) Check that your endpoint returns 200 within 5 seconds. 3) Whitelist provider IP ranges if behind a firewall. 4) Check provider's webhook logs for failed delivery attempts.
