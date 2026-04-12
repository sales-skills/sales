# Postmark Platform Guide

## Email API (transactional)
- **Single email**: `POST /email` — send a single transactional email with full control over headers, content, attachments, tracking, and metadata
- **Batch email**: `POST /email/batch` — send up to 500 messages in a single API call (50MB payload limit)
- **Bulk API**: Newer high-volume sending endpoint for large-scale sends
- **Payload limits**: 10MB per single email, 50MB per batch request
- **Metadata**: Attach custom key-value metadata to messages for tracking and filtering
- **Tags**: Categorize messages with tags for filtering in statistics and Activity
- **Test token**: Use `POSTMARK_API_TEST` as the server token to test API calls without sending real email — returns a success response but does not deliver

## SMTP relay
- **Host**: `smtp.postmarkapp.com`
- **Port**: 587 (STARTTLS) or 2525 (alternative)
- **Authentication**: Username and password are both your server API token
- **Use case**: Drop-in replacement for frameworks and applications that only support SMTP (WordPress, legacy apps, etc.)
- **Headers**: Use custom headers (`X-PM-Message-Stream`, `X-PM-Tag`, `X-PM-Metadata-*`) to control stream, tagging, and metadata via SMTP

## Message Streams
- **Transactional stream**: Default stream for password resets, order confirmations, receipts, alerts — messages recipients expect and need
- **Broadcast stream**: Separate stream for newsletters, announcements, product updates — messages recipients opted into but are not time-sensitive
- **Why it matters**: Broadcast email has inherently lower engagement than transactional. Separating streams keeps broadcast reputation issues (unsubscribes, spam complaints) from impacting transactional delivery speed and inbox placement
- **Default behavior**: Every server starts with a default transactional stream. Broadcast streams must be created explicitly
- **Stream ID**: Pass the `MessageStream` field in API requests to route messages to the correct stream
- **Limits**: Up to 10 message streams per server (configurable)

## Templates
- **Handlebars syntax**: Use `{{variable}}`, `{{#if}}`, `{{#each}}`, `{{#unless}}`, `{{#unless}}` for dynamic content
- **Layout inheritance**: Create a base layout template (header, footer, wrapper) and have content templates inherit from it — change the layout once, all templates update
- **Template validation**: Postmark validates templates at save time — catches missing variables and syntax errors before you send
- **Cross-server pushing**: Push templates from one server to another (e.g., staging to production) via the API or UI
- **Template API**: Full CRUD operations — create, read, update, delete templates programmatically
- **Sending with templates**: Pass `TemplateId` or `TemplateAlias` plus `TemplateModel` (data object) in the send request instead of raw HTML/text
- **Preview**: Render a template with test data via the API (`POST /templates/{id}/validate`) before sending

## Inbound Email
- **What it is**: Receive email at your domain and have Postmark parse it into structured JSON (from, to, subject, HTML body, text body, attachments) delivered to your webhook URL
- **Setup**: Add an MX record for your receiving domain pointing to `inbound.postmarkapp.com`, then configure the webhook URL in the Postmark UI under Inbound
- **Inbound rules**: Define rules to control which recipient addresses trigger webhook delivery
- **Attachments**: Included as base64-encoded content in the webhook JSON payload
- **Use cases**: Reply parsing, support ticket creation, forum comments via email, lead capture from email replies
- **Plan requirement**: Inbound Email is available on Pro plan and above

## Webhooks
- **7 webhook types**: Bounce, Delivery, Open, Click, Spam Complaint, Subscription Change, Inbound
- **Configuration**: Set webhook URLs per server in the Postmark UI — select which event types to receive
- **Payload**: JSON object with event-specific fields (message ID, recipient, metadata, timestamps)
- **Retry schedule**: Postmark retries failed webhook deliveries with increasing backoff — retry schedule varies by webhook type
- **Message Stream filtering**: Configure webhooks to fire for specific message streams (e.g., only transactional, only broadcast)
- **Open/Click tracking**: Must be enabled per server for Open and Click webhooks to fire

## DMARC Monitoring
- **Free tier**: Weekly DMARC digest reports summarizing who is sending email using your domain — available to all Postmark users
- **Paid monitoring**: $14/mo per domain at `dmarc.postmarkapp.com` — detailed daily reports, failure alerts, source identification
- **Separate API**: DMARC monitoring uses a separate API at `https://dmarc.postmarkapp.com/api/` with its own authentication
- **Setup**: Add a DMARC DNS record with Postmark's reporting address as the `rua` recipient
- **Use case**: Detect unauthorized senders using your domain, track SPF/DKIM alignment, monitor DMARC policy enforcement

## Bounce Management (Rebound)
- **Automatic processing**: Postmark automatically categorizes bounces (hard bounce, soft bounce, DNS error, spam notification, etc.)
- **Suppression**: Hard-bounced addresses are automatically added to the suppression list — future sends are blocked
- **Reactivation**: Soft bounces are retried automatically. Hard-bounced addresses can be manually reactivated if the issue is resolved
- **Bounce API**: Query, manage, and reactivate bounced addresses programmatically
- **Bounce tags**: Bounces inherit the tag from the original message for filtering

## Suppressions
- **Automatic suppression**: Addresses that hard-bounce or file spam complaints are automatically suppressed
- **Manual suppression**: Add addresses to the suppression list manually via the API or UI
- **Per-stream suppressions**: Suppression lists are maintained per message stream — a suppression in the broadcast stream does not affect the transactional stream
- **Reactivation**: Remove suppressions via the API (`DELETE /message-streams/{stream}/suppressions/delete`) or UI when the underlying issue is resolved
- **Dump endpoint**: Export the full suppression list via the API

## Statistics
- **Per-stream stats**: View delivery rates, bounce rates, open rates, click rates, and spam complaint rates broken down by message stream
- **Per-tag stats**: Filter statistics by message tag to compare performance across different email types
- **Outbound overview**: Aggregate sent, bounced, spam complaints, and tracked (opens/clicks) counts
- **Bounce breakdown**: See bounces categorized by type (hard bounce, soft bounce, DNS error, etc.)
- **Time-series**: View stats over custom date ranges with daily or hourly granularity
- **Activity**: Searchable log of all sent and received messages with full delivery details

## Sender Signatures
- **Verified senders**: Every From address or domain must be verified before sending — Postmark sends a confirmation email to the address
- **Domain-level verification**: Verify an entire domain (via DNS records) to send from any address at that domain
- **DNS records**: Add DKIM (CNAME) and Return-Path (CNAME) records for full authentication
- **SPF**: Postmark handles SPF automatically via the Return-Path domain — no manual SPF record needed
- **Multiple signatures**: Add multiple sender signatures per server for different From addresses

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Server** | Isolated sending environment | id, name, api_tokens, message_streams, color |
| **Message Stream** | Transactional or broadcast channel | id, server_id, type (transactional/broadcast), name |
| **Sender Signature** | Verified from address or domain | id, domain, from_email, confirmed, dkim_verified, return_path_verified |
| **Template** | Reusable Handlebars email design | template_id, alias, name, subject, html_body, text_body, layout_template |
| **Message** | Sent or received email | message_id, to, from, subject, status, tag, metadata, stream_id |
| **Bounce** | Failed delivery record | id, type, message_id, email, bounced_at, can_activate, tag |
| **Suppression** | Suppressed address per stream | email_address, stream_id, suppression_reason, created_at |
| **Webhook** | Event notification configuration | id, url, message_stream, triggers (bounce, delivery, open, click, etc.) |
| **Inbound Rule** | Inbound email routing rule | id, rule |
| **Tag** | Message categorization label | name (string attached to messages for filtering) |

## API quick reference

- **Base URL**: `https://api.postmarkapp.com`
- **Authentication**: `X-Postmark-Server-Token: <SERVER_TOKEN>` header for server-level operations; `X-Postmark-Account-Token: <ACCOUNT_TOKEN>` header for account-level operations
- **Test token**: `POSTMARK_API_TEST` — use as server token for API testing without sending real email
- **Rate limits**: No strict published rate limits; excessive requests receive HTTP 429. Spam complaint rate must stay below 0.1%, bounce rate below 10%
- **Key endpoints**:
  - `POST /email` — send a single email
  - `POST /email/batch` — send up to 500 emails (50MB payload)
  - `POST /email/withTemplate` — send using a template
  - `POST /email/batchWithTemplates` — batch send using templates
  - `GET /bounces` — list bounces
  - `PUT /bounces/{id}/activate` — reactivate a bounced address
  - `GET /messages/outbound` — search outbound message activity
  - `GET /messages/inbound` — search inbound message activity
  - `GET /stats/outbound` — outbound statistics
  - `GET /templates` — list templates
  - `POST /templates` — create a template
  - `GET /message-streams` — list message streams
  - `GET /suppressions/dump` — export suppression list
  - `POST /webhooks` — create a webhook
- **SDKs**: Official — Ruby (`postmark`), C#/.NET (`Postmark`), PHP (`wildbit/postmark-php`), Node.js (`postmark`). Community — Python (`postmarker`), Java, Go, Elixir
- **Docs**: postmarkapp.com/developer

## Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Zapier (3 triggers: inbound message, bounce, open; 2 actions: send email, send email with template) |
| **CRM** | No native CRM integrations — API-first approach; connect via Zapier or custom API integration |
| **Frameworks** | Any framework with HTTP or SMTP support (Rails, Django, Express, Laravel, Spring, Phoenix, WordPress, etc.) |
| **ActiveCampaign** | Shared parent company (acquired 2022) but no direct product integration as of March 2026 |
| **Community** | Community-maintained libraries and plugins for various languages and frameworks |

Postmark is an API-first platform — integrations are built via the REST API or SMTP relay rather than pre-built native connectors.

## Pricing (USD, as of March 2026 — verify current pricing at postmarkapp.com)

| Plan | Price | Volume | Key gated features |
|------|-------|--------|-------------------|
| **Developer (Free)** | $0/mo | 100 emails/mo | Never expires, basic API access, single server |
| **Basic** | $15/mo | 10,000 emails/mo | $1.80/1K overage, 5 custom domains, 45-day message retention |
| **Pro** | $16.50/mo | 10,000 emails/mo | $1.30/1K overage, 10 custom domains, inbound email, customizable retention (up to 365 days) |
| **Platform** | $18/mo | 10,000 emails/mo | $1.20/1K overage, unlimited domains/users/streams |

**Add-ons:**
- Dedicated IP: $50/mo (requires 300K+ emails/mo sending volume)
- DMARC Monitoring: $14/mo per domain (detailed daily reports at dmarc.postmarkapp.com)

**Key pricing note**: Unlike SendGrid, Postmark does not separate transactional and marketing billing — all email (transactional and broadcast streams) is billed under a single plan. The Developer free tier never expires, unlike SendGrid's 60-day trial.
