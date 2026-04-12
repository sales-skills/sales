# SendGrid Platform Guide

## Email API (transactional)
- **REST API**: `POST /v3/mail/send` — send transactional email with full control over headers, content, attachments, tracking, and scheduling
- **SMTP relay**: Connect any SMTP-capable application to `smtp.sendgrid.net` (port 587 TLS or 465 SSL) using an API key as the password
- **SDKs**: Official libraries for Node.js (`@sendgrid/mail`), Python (`sendgrid`), PHP, Java, C#, Go, Ruby
- **Personalizations**: Send to multiple recipients with per-recipient substitutions, headers, and categories in a single API call (up to 1,000 personalizations per request)
- **Scheduling**: Schedule emails up to 72 hours in advance via the `send_at` parameter (Unix timestamp)
- **Attachments**: Up to 20MB total message size including attachments
- **Categories**: Tag emails with up to 10 categories for filtering in statistics
- **Rate limits**: General API 600 req/min; mail/send endpoint supports up to 10,000 req/sec on high-volume plans

## Marketing Campaigns
- **Single Sends**: One-time email broadcasts to a list or segment — drag-and-drop editor or code editor
- **Automations**: Trigger-based multi-step email sequences — welcome series, date-based, custom triggers
- **Signup Forms**: Embedded or hosted forms to capture contacts and add them to lists
- **Segmentation**: Filter contacts by engagement, demographics, custom fields, list membership — AND/OR logic
- **A/B Testing**: Test subject line, content, or sender on single sends — winner selected by open rate or click rate after configurable test duration
- **Email Testing**: Inbox rendering across email clients, link validation, spam testing (credit-based)
- **Design Library**: Reusable content modules and templates shared across single sends and automations
- **Key distinction**: Marketing Campaigns is a separate subscription from the Email API — you may need both if you send transactional and marketing email

## Dynamic Templates
- **Handlebars syntax**: Use `{{variable}}`, `{{#if}}`, `{{#each}}`, `{{#unless}}` for dynamic content in transactional templates
- **Template versioning**: Multiple versions per template — set an active version, test new versions before activating
- **Template editor**: Visual editor or code editor in the SendGrid UI
- **API usage**: Pass `template_id` and `dynamic_template_data` in the mail/send request to render a template with dynamic data
- **Test data**: Preview templates with test data in the UI before sending

## Domain Authentication
- **SPF/DKIM**: Automated DNS record generation — add CNAME records to your DNS provider to authenticate your sending domain
- **DMARC**: SendGrid provides guidance but DMARC records must be configured directly in your DNS
- **Branded tracking links**: Replace default SendGrid tracking URLs with your own domain (e.g., `links.yourdomain.com`)
- **Reverse DNS (rDNS)**: Map a SendGrid IP to your domain for improved deliverability — required for dedicated IPs
- **Link branding**: Custom domain for click tracking and open tracking pixels
- **Automated security**: SendGrid rotates DKIM keys automatically when using automated security (default)

## Dedicated IPs
- **Included on**: Pro+ plan (Email API) and Advanced+ plan (Marketing Campaigns)
- **IP warmup**: Automated warmup mode gradually increases sending volume over the IP — recommended for new IPs
- **Manual warmup**: Create your own warmup schedule for finer control over volume ramp-up
- **IP pools**: Group multiple IPs into pools and assign them to different mail streams (transactional vs. marketing, by category, etc.)
- **IP access management**: Restrict API access to specific IP addresses for security

## Event Webhooks
- **Delivery events**: processed, dropped, delivered, deferred, bounce
- **Engagement events**: open, click, spam report, unsubscribe, group unsubscribe, group resubscribe
- **Configuration**: Set a webhook URL in Settings > Mail Settings > Event Webhook — select which events to receive
- **Payload**: JSON array of event objects with email, timestamp, event type, and metadata (categories, custom args)
- **Signed webhooks**: Verify webhook authenticity using the Event Webhook signature verification (OAuth public key)
- **Retry logic**: SendGrid retries failed webhook deliveries for up to 24 hours

## Inbound Parse
- **What it is**: Receive inbound email at your domain and have SendGrid parse it into structured data (from, to, subject, body, attachments) sent to your webhook URL
- **Setup**: Add an MX record pointing your domain to `mx.sendgrid.net`, then configure the Inbound Parse webhook URL in the SendGrid UI
- **Raw vs. parsed**: Choose between receiving raw MIME or pre-parsed fields (JSON)
- **Attachments**: Attachments are included as multipart form data in the webhook POST
- **Use cases**: Support ticket creation, lead capture from email replies, email-to-app workflows

## Email Validation API
- **Real-time validation**: Check email addresses at point of capture for deliverability risk
- **Checks performed**: Syntax validation, MX record lookup, disposable domain detection, known-invalid detection, typo correction suggestions
- **Plan requirement**: Pro+ plan (Email API) — included 2,500 validations/month on Pro, additional validations available
- **Bulk validation**: Upload a CSV of email addresses for batch validation
- **API endpoint**: `POST /v3/validations/email`

## Suppressions
- **Automatic management**: SendGrid automatically manages bounces, blocks, spam reports, and unsubscribes
- **Bounce list**: Hard bounces are automatically added — future sends to these addresses are dropped
- **Block list**: Temporary delivery failures (server rejections) — can be retried after resolving the issue
- **Spam report list**: Addresses that marked your email as spam — automatically suppressed from future sends
- **Unsubscribe management**: Global unsubscribes and group unsubscribes (suppression groups)
- **Suppression groups**: Create categories of email (e.g., "Marketing", "Product Updates", "Billing") and let recipients unsubscribe from specific groups rather than all email
- **API access**: Full CRUD access to all suppression lists via the API

## Statistics
- **Aggregate stats**: Overall account-level delivery and engagement metrics
- **Category stats**: Filter stats by categories assigned to emails
- **Mailbox provider stats**: See delivery and engagement broken down by receiving provider (Gmail, Yahoo, Outlook, etc.)
- **Browser/device stats**: See which browsers and devices recipients use to open emails
- **Geographic stats**: Open and click activity by geographic location
- **Subuser stats**: Per-subuser statistics for accounts with multiple subusers

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Contact** | Marketing recipient | email, first_name, last_name, custom_fields, list_ids, created_at |
| **List** | Collection of contacts | id, name, contact_count |
| **Segment** | Dynamic contact filter | id, name, query_dsl (AND/OR conditions) |
| **Single Send** | One-time marketing email | id, name, status, send_at, categories |
| **Automation** | Trigger-based email sequence | id, status, trigger, steps |
| **Template** | Reusable email design | id, name, generation (legacy/dynamic), versions |
| **Suppression** | Suppressed address | email, type (bounce/block/spam_report/unsubscribe), created_at |
| **API Key** | Authentication credential | api_key_id, name, scopes |
| **Subuser** | Child account under parent | username, email, ips |
| **Teammate** | UI user with role-based access | email, scopes, is_admin |
| **IP** | Sending IP address | ip, pools, warmup, assigned_at |
| **IP Pool** | Group of sending IPs | name, ips |

## API quick reference

- **Base URL**: `https://api.sendgrid.com/v3/`
- **Authentication**: Bearer token — `Authorization: Bearer <API_KEY>`
- **Rate limits**: 600 req/min general; mail/send up to 10,000 req/sec on high-volume plans
- **Message size**: 20MB maximum (including attachments)
- **Personalizations**: Up to 1,000 per mail/send request
- **Key endpoints**:
  - `POST /v3/mail/send` — send email
  - `GET /v3/stats` — aggregate statistics
  - `GET /v3/suppression/bounces` — list bounced addresses
  - `GET /v3/templates` — list templates
  - `PUT /v3/marketing/contacts` — add/update marketing contacts
  - `POST /v3/marketing/singlesends` — create single send
  - `POST /v3/validations/email` — validate email address
- **SDKs**: Node.js (`@sendgrid/mail`, `@sendgrid/client`), Python, PHP, Java, C#, Go, Ruby
- **Docs**: docs.sendgrid.com

## Integrations

| Category | Tools |
|----------|-------|
| **CRM** | Salesforce (Data Cloud connector) — no other native CRM integrations |
| **Automation** | Zapier, Make, n8n |
| **E-commerce** | Shopify (via integrations), WooCommerce (via plugins) |
| **Cloud / Infrastructure** | Azure, Heroku, Google Cloud (via SMTP or API) |
| **Frameworks** | Any framework with HTTP or SMTP support (Django, Rails, Express, Laravel, Spring, etc.) |
| **Partner ecosystem** | 353 total partner integrations in the SendGrid integration directory |

SendGrid is primarily an API-driven platform — most integrations are built via the REST API or SMTP relay rather than pre-built native connectors.

## Pricing (USD, as of March 2026 — verify current pricing at sendgrid.com)

**Email API Plans** (transactional email):

| Plan | Price | Volume | Key gated features |
|------|-------|--------|-------------------|
| **Free Trial** | $0 (60 days) | 100/day | Basic API access, limited features |
| **Essentials** | From $19.95/mo | 50,000/mo | Ticket support, no dedicated IP |
| **Pro** | From $89.95/mo | 1,500,000/mo | Dedicated IP, 2,500 email validations/mo, subuser management, webhook |
| **Premier** | Custom pricing | 2,500,000+/mo | SSO, 5,000+ validations, priority support |

**Marketing Campaigns Plans** (email marketing):

| Plan | Price | Contacts | Key gated features |
|------|-------|----------|-------------------|
| **Free Trial** | $0 (60 days) | 100 contacts | Basic single sends, limited testing |
| **Basic** | From $15/mo | 5,000 contacts | Drag-and-drop editor, segmentation, A/B testing |
| **Advanced** | From $60/mo | 100,000 contacts | Dedicated IP, automations, email testing, signup forms |
| **Custom** | Custom pricing | 100K+ contacts | Custom volume and support |

**IMPORTANT**: Email API and Marketing Campaigns are **separate subscriptions**. If you need both transactional and marketing email, you will have two bills.
