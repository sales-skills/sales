# Mailgun Platform Guide

## Email API (transactional)
- **Send email**: `POST /v3/{domain}/messages` — send a single email with full control over headers, content, attachments, tracking, tags, and custom variables
- **Send MIME**: `POST /v3/{domain}/messages.mime` — send a raw MIME message for full control over email structure
- **Authentication**: HTTP Basic Auth — username `api`, password is your API key
- **Domain Sending Keys**: Restricted API keys that can ONLY call `/messages` endpoints — cannot manage domains, routes, webhooks, or other resources
- **Custom variables**: Attach arbitrary JSON data to messages via `v:` parameters (e.g., `v:my-custom-data`) for tracking in webhooks and events
- **Tags**: Categorize messages with up to 3 tags per message for filtering in analytics and events
- **Recipient variables**: Personalize batch sends with per-recipient data using `recipient-variables` JSON parameter

## SMTP relay
- **Host**: `smtp.mailgun.org`
- **Ports**: 25, 465 (SSL), 587 (STARTTLS)
- **Authentication**: Username is your full SMTP login (e.g., `postmaster@yourdomain.com`), password is your SMTP password or API key
- **Use case**: Drop-in replacement for frameworks and applications that only support SMTP (WordPress, legacy apps, etc.)
- **Custom headers**: Use `X-Mailgun-*` headers to control tags, variables, tracking, and delivery options via SMTP

## Inbound Email Routing
- **What it is**: Receive email at your domain and have Mailgun parse it into structured data (sender, recipients, subject, body, attachments) delivered to your webhook URL or stored for retrieval
- **Custom parsing rules**: Define rules using regex or JSONPath expressions to match and route inbound messages
- **Webhook delivery**: Parsed email data is POSTed to your endpoint as multipart/form-data with all fields and attachments
- **Attachments**: Included directly in the webhook POST as file uploads
- **Routes**: Create routes to forward inbound email to HTTP endpoints, other email addresses, or Mailgun's temporary storage (3-day retention)
- **Setup**: Add an MX record for your receiving domain pointing to Mailgun's inbound servers, then configure routes via the API or UI

## Templates
- **Account-level templates**: Shared across all domains in your account
- **Domain-level templates**: Scoped to a specific sending domain
- **Variables**: Handlebars-like syntax (`{{variable}}`) for dynamic content injection at send time
- **Template API**: Full CRUD operations — `POST /v3/{domain}/templates`, `GET /v3/{domain}/templates`, `PUT /v3/{domain}/templates/{name}`, `DELETE /v3/{domain}/templates/{name}`
- **Versioning**: Templates support multiple versions — create, activate, and manage versions independently
- **Sending with templates**: Pass the `template` parameter with the template name and `h:X-Mailgun-Variables` or `t:variables` with the data object

## Mailing Lists
- **What it is**: Programmatic mailing list management — create lists, add/remove/update members, send to entire lists
- **List API**: `GET /v3/lists` to list all, `POST /v3/lists` to create, `GET /v3/lists/{address}/members` for member management
- **Member CRUD**: Add individual members, bulk-add via JSON or CSV, update member properties, remove members
- **Access levels**: Control who can post to the list (readonly, members, everyone)
- **Sending to lists**: Use the list address as the recipient — Mailgun expands to all members and handles per-recipient personalization

## Domains API
- **Domain management**: `GET /v3/domains` to list, `POST /v3/domains` to add, `DELETE /v3/domains/{name}` to remove
- **DNS verification**: Mailgun provides the required DNS records (MX, TXT, CNAME) during domain setup
- **DKIM**: Add the provided CNAME or TXT record for DKIM signing — Mailgun signs all outbound email with your DKIM key once verified
- **SPF**: Add Mailgun's include to your SPF record (`include:mailgun.org`)
- **Domain state**: Domains have states — unverified, active, disabled — check verification status via the API
- **Custom message limits**: Set per-domain sending limits to control volume

## Routes
- **What it is**: Rules that process inbound email — match incoming messages by recipient, header, or catch-all, then take an action
- **Actions**: Forward to an HTTP endpoint (`forward("https://...")`), forward to an email address (`forward("user@example.com")`), or store for later retrieval (`store(notify="https://...")`) with 3-day retention
- **Priority**: Routes are evaluated in priority order (lower number = higher priority)
- **Match expressions**: `match_recipient("pattern")`, `match_header("header", "pattern")`, `catch_all()`
- **Route API**: `POST /v3/routes` to create, `GET /v3/routes` to list, `PUT /v3/routes/{id}` to update

## Webhooks
- **8 event types**: accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed
- **Configuration**: `POST /v3/domains/{domain}/webhooks` to create, set the URL for each event type
- **Payload**: JSON object with event-specific fields (message headers, recipient, tags, custom variables, timestamps, geolocation for opens/clicks)
- **Signing**: Webhooks are signed with your API key — verify the signature to authenticate that the webhook came from Mailgun
- **Retry schedule**: Mailgun retries failed webhook deliveries with exponential backoff
- **Batch delivery**: Webhooks may be batched — your endpoint should handle arrays of events

## Metrics API
- **What it is**: Analytics on deliverability, engagement, and sending health across your domains and tags
- **Metrics**: Delivered, opened, clicked, bounced, complained, unsubscribed rates broken down by domain, tag, provider, device, country
- **Time-series**: Query metrics over custom date ranges with resolution options
- **Use case**: Monitor sending health, identify deliverability issues, track engagement trends

## Mailgun Optimize (separate add-on)
- **Inbox placement seed testing**: Send test emails to seed addresses across major providers (Gmail, Outlook, Yahoo, etc.) and see where they land (inbox, spam, missing)
- **Email validation**: Validate email addresses before sending — single address via API (`GET /v4/address/validate`) or bulk validation via CSV upload
- **Validation results**: Returns risk assessment (deliverable, undeliverable, risky, unknown) plus reason codes
- **Impact**: Email validation lowered bounce rates 21% and increased open rates 65% based on Mailgun data
- **Sender reputation monitoring**: Track your IP and domain reputation across major blocklists
- **Blocklist alerts**: Get notified when your sending IP or domain appears on a blocklist
- **Pricing**: Separate paid add-on starting at $49/mo (Optimize Pilot) — NOT included in any Send plan

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Domain** | Sending/receiving domain | name, state, type, created_at, smtp_login, smtp_password |
| **Message** | Sent or received email | id, event, recipient, tags, timestamp, storage.url |
| **Event** | Delivery/engagement event | event (accepted/delivered/opened/etc.), recipient, timestamp, tags, user-variables |
| **Route** | Inbound email processing rule | id, priority, expression, actions, description |
| **Template** | Reusable email design | name, description, version, created_at |
| **Mailing List** | Managed recipient list | address, name, description, access_level, members_count |
| **List Member** | Mailing list subscriber | address, name, subscribed, vars |
| **Webhook** | Event notification configuration | id, url, event (accepted/delivered/opened/etc.) |
| **Tag** | Message categorization label | tag (string attached to messages for filtering and analytics) |
| **Validation** | Email address validation result | address, is_disposable_address, is_role_address, risk, reason |

## API quick reference

- **Base URL (US)**: `https://api.mailgun.net/v3/`
- **Base URL (EU)**: `https://api.eu.mailgun.net/v3/`
- **Authentication**: HTTP Basic Auth — username `api`, password = your API key
- **Domain Sending Keys**: Restricted keys for `/messages` endpoints only — cannot manage domains, routes, or webhooks
- **Rate limits**: Vary by API endpoint; response headers indicate current rate limit state
- **Uptime SLA**: 99.99%
- **Key endpoints**:
  - `POST /v3/{domain}/messages` — send email
  - `POST /v3/{domain}/messages.mime` — send MIME
  - `GET /v3/{domain}/events` — query event logs
  - `GET /v3/domains` — list domains
  - `POST /v3/domains` — add domain
  - `POST /v3/routes` — create inbound route
  - `GET /v3/routes` — list routes
  - `GET /v3/lists` — list mailing lists
  - `POST /v3/lists` — create mailing list
  - `POST /v3/{domain}/templates` — create template
  - `POST /v3/domains/{domain}/webhooks` — create webhook
  - `GET /v4/address/validate` — email validation (Optimize add-on)
- **SDKs**: Official and community libraries for Ruby, Python, PHP, Node.js, Java, Go, C#
- **Docs**: documentation.mailgun.com

## Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Zapier (triggers: bounce, delivery, inbound, unsubscribe, log data; actions: add to mailing list, email validation), plus hundreds of apps via Zapier |
| **CRM** | No native CRM integrations — API-first approach; connect via Zapier or custom API integration |
| **Frameworks** | Any framework with HTTP or SMTP support (Rails, Django, Express, Laravel, Spring, Phoenix, WordPress, etc.) |
| **Sinch ecosystem** | Part of Sinch's communication platform (SMS, voice, video) but no direct product integrations as of March 2026 |

Mailgun is an API-first platform — integrations are built via the REST API or SMTP relay rather than pre-built native connectors.

## Pricing (USD, as of March 2026 — verify current pricing at mailgun.com)

| Plan | Price | Volume | Key gated features |
|------|-------|--------|-------------------|
| **Free** | $0/mo | 100 emails/day | Basic API access, limited features |
| **Foundation** | $35/mo | 50,000 emails/mo | 1,000 custom domains, email logs, 24/7 ticket support |
| **Scale** | $90/mo | 100,000 emails/mo | Dedicated IP support ($59/mo each), SAML SSO, priority support |
| **Enterprise** | Custom | 2.5M+ emails/mo | Custom volume, SLA, dedicated CSM, phone support |

**Add-ons:**
- Dedicated IP: $59/mo each (requires warmup period)
- Optimize Pilot: $49/mo (2,500 email validations, 25 inbox placement tests)
- Optimize Starter: $99/mo (expanded validation and testing quotas)

**Key pricing note**: The Free plan is 100 emails per DAY (not month) — very limited for testing at scale. Mailgun Optimize (inbox placement, email validation, reputation monitoring) is a separate paid add-on not included in any Send plan. Dedicated IPs require warmup and cost $59/mo each on top of the base plan.
