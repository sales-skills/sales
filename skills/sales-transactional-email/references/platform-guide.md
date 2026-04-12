# Transactional Email Platform Guide

## Provider Selection Framework

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

## Platform-Specific Guidance

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

## Integration Checklist

1. **Choose API or SMTP** — API is faster and more reliable; SMTP is easier for legacy apps
2. **Set up authentication** — API key or credentials for your chosen provider
3. **Create templates** — design templates in the provider's UI, reference by ID in API calls
4. **Implement sending** — API call or SMTP send from your application code
5. **Set up webhooks** — track delivery, bounces, complaints, opens/clicks
6. **Handle errors** — retry logic for 5xx errors, suppress on hard bounces
7. **Monitor** — track delivery rates, bounce rates, complaint rates daily

## Key Metrics

| Metric | Healthy range | Action if outside |
|---|---|---|
| Delivery rate | > 98% | Check bounces, verify addresses at signup |
| Bounce rate | < 2% | Suppress hard bounces, validate emails |
| Complaint rate | < 0.01% | Ensure emails are genuinely transactional |
| Open rate | 40-80% (transactional) | Check subject lines, preview text |
| Time to inbox | < 10 seconds | Check provider status, API latency |
