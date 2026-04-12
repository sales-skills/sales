---
name: sales-transactional-email
description: "Transactional and triggered email delivery — order confirmations, password resets, welcome emails, receipts, shipping notifications, account alerts. Covers provider selection, template design, deliverability, API integration, SMTP relay, and monitoring across SendGrid, Postmark, Mailgun, Brevo, Braze, Iterable, Customer.io, Mailchimp/Mandrill, GetResponse (MAX only), and Amazon SES. Use when building transactional email flows, choosing a transactional email provider, debugging delivery issues for triggered emails, or setting up SMTP relay. Do NOT use for marketing email campaigns (use /sales-email-marketing), cold outbound sequences (use /sales-cadence), cross-platform deliverability strategy (use /sales-deliverability), or SendPulse-specific questions (use /sales-sendpulse). For platform-specific help, use /sales-braze, /sales-iterable, /sales-sendgrid, /sales-postmark, /sales-mailgun, /sales-brevo, /sales-customerio, /sales-mailchimp, /sales-getresponse, or /sales-sendpulse."
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

### In Brevo
- **API endpoint**: `POST https://api.brevo.com/v3/smtp/email`
- **Auth**: `api-key` header
- **Templates**: Create in Brevo UI, reference via `templateId` with `params` object
- **SMTP relay**: `smtp-relay.brevo.com:587` (STARTTLS), login = account email, password = SMTP key
- **Webhooks**: Create via API — events: delivered, opened, clicked, hardBounce, softBounce, unsubscribed, complaint, blocked
- **Free tier**: 300 emails/day (transactional included)
- **Dedicated IP**: Available on paid plans, configure in Settings → Senders, Domains & Dedicated IPs
- **Strength**: All-in-one — transactional + marketing + CRM in one platform. Good for teams that don't want separate tools.
- **Platform skill**: `/sales-brevo`

### In Iterable
- **API endpoint**: `POST https://api.iterable.com/api/email/target` (US) or `https://api.eu.iterable.com/api/email/target` (EU)
- **Auth**: `Api-Key` header
- **How it works**: Create a triggered campaign in Iterable, then fire via API with recipient email, campaign ID, and personalization data fields. Triggered campaigns are the mechanism for transactional email — there's no separate transactional API.
- **Templates**: Handlebars templating with dynamic variables, conditional blocks, and Catalog data for product recommendations
- **Webhooks**: System webhooks for delivery events (send, open, click, bounce, complaint). Configure at Integrations > System Webhooks.
- **No SMTP relay**: Iterable is API-only — no SMTP gateway option
- **Strength**: Best when you're already using Iterable for marketing engagement and want transactional email in the same platform. Triggered campaigns share the same template engine and analytics as marketing campaigns.
- **Limitation**: Enterprise pricing (MAU-based). Triggered campaigns are the same mechanism as marketing triggers — no separate SLA tier for transactional. No SMTP for legacy apps.
- **Platform skill**: `/sales-iterable`

### In Braze
- **API endpoint**: `POST https://rest.iad-XX.braze.com/transactional/v1/campaigns/{campaign_id}/send` (instance-specific URL)
- **Auth**: Bearer token (`Authorization: Bearer YOUR_REST_API_KEY`)
- **How it works**: Create a Transactional Email Campaign in the Braze dashboard, then trigger via API with recipient and personalization data. Transactional campaigns are separate from marketing Campaigns/Canvas.
- **Templates**: Liquid templating (not Handlebars) with Connected Content for real-time external data at send time
- **SLA guarantees**: 99.9% uptime SLA. Transactional sends are prioritized over marketing messages in Braze's infrastructure.
- **Webhooks**: Currents streaming for delivery events (send, delivery, open, click, bounce, spam) — streams to data warehouse (Snowflake, S3, etc.), not individual webhook URLs
- **No SMTP relay**: Braze is API-only for transactional — no SMTP gateway option
- **Strength**: Best when you're already using Braze for marketing engagement and want transactional email in the same platform with unified user profiles and analytics.
- **Limitation**: Enterprise pricing (MAU-based). Overkill if you only need transactional email. No SMTP relay for legacy apps.
- **Platform skill**: `/sales-braze`

### In GetResponse (MAX only)
- **API endpoint**: `POST https://api.getresponse.com/v3/transactional-emails` (retail) or `POST https://api3.getresponse360.com/v3/transactional-emails` (MAX)
- **Auth**: `X-Auth-Token: api-key {your-api-key}` header. MAX users must also include `X-Domain` header.
- **How it works**: Send transactional emails via API with recipient, subject, and HTML content. Transactional emails are separate from marketing newsletters and autoresponders.
- **Important**: Transactional email is **only available on MAX/Enterprise plans**. Users on Free, Starter, Marketer, or Creator plans cannot send transactional email through GetResponse — they must use a separate provider (SendGrid, Postmark, Mailgun, etc.).
- **Rate limits**: Same as marketing API — 30,000 calls/10 min, 80 calls/sec, max 10 simultaneous.
- **No SMTP relay**: GetResponse transactional is API-only.
- **Strength**: Convenient if you're already on GetResponse MAX for marketing and want transactional in the same platform with unified contact data.
- **Limitation**: MAX-only pricing makes this impractical unless you're already on MAX for other reasons. No separate SLA tier for transactional delivery. Limited template engine compared to SendGrid/Postmark.
- **Platform skill**: `/sales-getresponse`

### In SendGrid
- **API endpoint**: `POST https://api.sendgrid.com/v3/mail/send`
- **Auth**: Bearer token
- **Templates**: Dynamic templates with Handlebars (`{{variable}}`)
- **SMTP relay**: `smtp.sendgrid.net:587`
- **Webhooks**: Event Webhook — delivered, open, click, bounce, dropped, deferred, spam report
- **Free tier**: 100 emails/day forever
- **Strength**: Scale + ecosystem. Good for teams also using Twilio for SMS.
- **Platform skill**: `/sales-sendgrid`

### In Postmark
- **API endpoint**: `POST https://api.postmarkapp.com/email`
- **Auth**: `X-Postmark-Server-Token` header
- **Templates**: Handlebars with layouts (shared headers/footers)
- **Message Streams**: Separate transactional and broadcast streams (enforced)
- **SMTP relay**: `smtp.postmarkapp.com:587`
- **Webhooks**: 7 types — delivery, bounce, spam complaint, open, click, subscription change, inbound
- **Free tier**: 100 emails/month
- **Strength**: Best deliverability (98.7% inbox placement). Opinionated — enforces transactional/broadcast separation. Sender vetting on signup.
- **Platform skill**: `/sales-postmark`

### In Mailgun
- **API endpoint**: `POST https://api.mailgun.net/v3/{domain}/messages`
- **Auth**: Basic auth with `api:key-xxx`
- **Templates**: Handlebars
- **SMTP relay**: `smtp.mailgun.org:587`
- **Webhooks**: 8 event types — accepted, delivered, opened, clicked, unsubscribed, complained, bounced, failed
- **Strength**: Developer-friendly with flexible routing and inbound parsing. Good for complex email processing.
- **Platform skill**: `/sales-mailgun`

### In Customer.io
- **API endpoint**: Transactional Messages API
- **Templates**: Liquid templating
- **Strength**: Behavior-triggered transactional messages tied to customer journey data. Best when you need transactional email + marketing automation with unified customer profiles.
- **Platform skill**: `/sales-customerio`

### In Mailchimp / Mandrill
- **Mandrill** is Mailchimp's transactional email add-on ($20/mo + per-email)
- **API endpoint**: `POST https://mandrillapp.com/api/1.0/messages/send`
- **Templates**: Mandrill templates with merge tags
- **Strength**: Good if you're already on Mailchimp for marketing and want one vendor.
- **Platform skill**: `/sales-mailchimp`

### In SendPulse
- **API endpoint**: `POST https://api.sendpulse.com/smtp/emails` with `subject`, `from`, `to`, `html`, and optional `attachments`
- **Auth**: OAuth 2.0 — exchange `client_id` + `client_secret` for a 1-hour access token. Static API key also supported.
- **Delivery tracking**: `GET /smtp/emails/{id}` for per-message status, `GET /smtp/bounces` for bounce list, `GET /smtp/unsubscribe` for unsubscribes
- **Webhooks**: `smtp_delivered`, `smtp_opened`, `smtp_clicked`, `smtp_bounced`, `smtp_unsubscribed`
- **SDKs**: PHP, Python, Ruby, Java, Node.js, C#, Go
- **Free tier**: 12,000 transactional emails/month
- **Dedicated IP**: Available on higher-tier paid plans
- **Strength**: Generous free tier for transactional email with broad SDK support. Good for startups and mid-volume senders who want quick integration without per-email pricing pressure.
- **Limitation**: OAuth token expiry (1 hour) adds complexity vs. static API keys. Less specialized in transactional delivery than Postmark or SendGrid.
- **Platform skill**: `/sales-sendpulse`

### In Amazon SES
- **API**: AWS SDK or SMTP interface
- **Auth**: AWS IAM credentials
- **Cheapest at scale**: ~$0.10 per 1,000 emails
- **Strength**: Raw cost efficiency at high volume. Requires more self-management (reputation monitoring, bounce handling, suppression lists).
- **Weakness**: No built-in template UI, no analytics dashboard — you build everything yourself or use a wrapper service.

## Step 4 — Actionable guidance

### Integration checklist

1. **Choose API or SMTP** — API is faster and more reliable; SMTP is easier for legacy apps
2. **Set up authentication** — API key or credentials for your chosen provider
3. **Create templates** — design templates in the provider's UI, reference by ID in API calls
4. **Implement sending** — API call or SMTP send from your application code
5. **Set up webhooks** — track delivery, bounces, complaints, opens/clicks
6. **Handle errors** — retry logic for 5xx errors, suppress on hard bounces
7. **Monitor** — track delivery rates, bounce rates, complaint rates daily

### Key metrics to track

| Metric | Healthy range | Action if outside |
|---|---|---|
| Delivery rate | > 98% | Check bounces, verify addresses at signup |
| Bounce rate | < 2% | Suppress hard bounces, validate emails |
| Complaint rate | < 0.01% | Ensure emails are genuinely transactional |
| Open rate | 40-80% (transactional) | Check subject lines, preview text |
| Time to inbox | < 10 seconds | Check provider status, API latency |

## Gotchas

1. **Don't mix transactional and marketing on the same IP/domain** — marketing reputation problems will tank transactional delivery. Use separate subdomains and ideally separate IPs.
2. **"Transactional" has a legal definition** — CAN-SPAM exempts transactional emails from opt-out requirements, but the email must be primarily transactional. An order confirmation with a 50% coupon at the top is marketing, not transactional.
3. **SMTP is not real-time** — SMTP queues add latency. For time-sensitive emails (2FA codes, password resets), use the REST API for faster delivery.
4. **Webhooks can fail silently** — if your webhook endpoint is down, you'll miss delivery/bounce events. Implement webhook logging and alerting.
5. **Template rendering varies by client** — Outlook uses Word's rendering engine. Always test templates in Litmus or Email on Acid, especially for layout-heavy designs.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

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
- `/sales-email-marketing` — Opt-in marketing email strategy (not transactional)
- `/sales-integration` — Connect email tools with CRM and other systems
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
