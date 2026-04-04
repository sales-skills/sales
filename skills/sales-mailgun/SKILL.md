---
name: sales-mailgun
description: "Mailgun (Sinch) platform help — developer-first transactional email API and SMTP relay with inbound routing, webhooks, and Mailgun Optimize deliverability tools. Use when sending transactional email via Mailgun API or SMTP, configuring domains or DNS (DKIM/SPF), setting up inbound email routing, managing webhooks or templates, using Mailgun Optimize for inbox placement testing, or working with the Mailgun REST API. Do NOT use for general email deliverability strategy (use /sales-deliverability), cross-platform email marketing (use /sales-email-marketing), or email open/click tracking strategy (use /sales-email-tracking)."
argument-hint: "[describe what you need help with in Mailgun]"
license: MIT
version: 1.0.0
tags: [sales, transactional-email, api, deliverability, platform]
github: "https://github.com/mailgun"
---
# Mailgun Platform Help

Help the user with Mailgun (Sinch) platform questions — from sending transactional email via the REST API and SMTP relay through Inbound Email Routing, Templates, Mailing Lists, Domains, Routes, Webhooks, Metrics, and Mailgun Optimize. Mailgun is a developer-first transactional email API service founded in 2010 by Ev Kontsevoy and Taylor Wakefield, acquired by Rackspace (2012), Thoma Bravo (2019), and Sinch (2021). Josh Odom is President of the Sinch Developer & Email unit.

## Step 1 — Gather context

Ask the user:

1. **What area of Mailgun do you need help with?**
   - A) Email API — sending transactional email via REST API (`POST /v3/{domain}/messages`) or SMTP relay
   - B) SMTP relay — traditional SMTP integration (ports 25/465/587)
   - C) Inbound Email Routing — receiving and parsing incoming email with custom rules (regex/JSONPath), webhook delivery with attachments
   - D) Templates — account-level and domain-level stored templates with Handlebars-like variables
   - E) Mailing Lists — programmatic list management, member CRUD
   - F) Domains API — domain management, DNS verification, DKIM/SPF setup
   - G) Routes — forwarding inbound email to HTTP endpoints or email addresses, or storing for 3 days
   - H) Webhooks — event notifications (accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed)
   - I) Metrics API — analytics on deliverability, engagement, and sending health
   - J) Mailgun Optimize — inbox placement seed testing, email validation (single + bulk CSV), sender reputation monitoring, blocklist alerts
   - K) Tags — categorizing and tracking sends
   - L) Account / Billing — plans, pricing, API keys, custom message limits
   - M) Something else — describe it

2. **What's your role?**
   - A) Developer / engineer
   - B) DevOps / infrastructure
   - C) Admin / account owner
   - D) Founder / solo operator
   - E) Agency / freelancer
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email deliverability strategy / best practices -> `/sales-deliverability`
- Cross-platform email marketing strategy -> `/sales-email-marketing`
- Email open/click tracking strategy -> `/sales-email-tracking`
- SendGrid-specific questions -> `/sales-sendgrid`
- Postmark-specific questions -> `/sales-postmark`
- Connecting Mailgun to other tools via Zapier or middleware -> `/sales-integration`
- Funnel strategy / conversion optimization -> `/sales-funnel`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Mailgun platform reference

Provide module-by-module guidance based on the user's area:

### Email API (transactional)
- **Send email**: `POST /v3/{domain}/messages` — send a single email with full control over headers, content, attachments, tracking, tags, and custom variables
- **Send MIME**: `POST /v3/{domain}/messages.mime` — send a raw MIME message for full control over email structure
- **Authentication**: HTTP Basic Auth — username `api`, password is your API key
- **Domain Sending Keys**: Restricted API keys that can ONLY call `/messages` endpoints — cannot manage domains, routes, webhooks, or other resources
- **Custom variables**: Attach arbitrary JSON data to messages via `v:` parameters (e.g., `v:my-custom-data`) for tracking in webhooks and events
- **Tags**: Categorize messages with up to 3 tags per message for filtering in analytics and events
- **Recipient variables**: Personalize batch sends with per-recipient data using `recipient-variables` JSON parameter

### SMTP relay
- **Host**: `smtp.mailgun.org`
- **Ports**: 25, 465 (SSL), 587 (STARTTLS)
- **Authentication**: Username is your full SMTP login (e.g., `postmaster@yourdomain.com`), password is your SMTP password or API key
- **Use case**: Drop-in replacement for frameworks and applications that only support SMTP (WordPress, legacy apps, etc.)
- **Custom headers**: Use `X-Mailgun-*` headers to control tags, variables, tracking, and delivery options via SMTP

### Inbound Email Routing
- **What it is**: Receive email at your domain and have Mailgun parse it into structured data (sender, recipients, subject, body, attachments) delivered to your webhook URL or stored for retrieval
- **Custom parsing rules**: Define rules using regex or JSONPath expressions to match and route inbound messages
- **Webhook delivery**: Parsed email data is POSTed to your endpoint as multipart/form-data with all fields and attachments
- **Attachments**: Included directly in the webhook POST as file uploads
- **Routes**: Create routes to forward inbound email to HTTP endpoints, other email addresses, or Mailgun's temporary storage (3-day retention)
- **Setup**: Add an MX record for your receiving domain pointing to Mailgun's inbound servers, then configure routes via the API or UI

### Templates
- **Account-level templates**: Shared across all domains in your account
- **Domain-level templates**: Scoped to a specific sending domain
- **Variables**: Handlebars-like syntax (`{{variable}}`) for dynamic content injection at send time
- **Template API**: Full CRUD operations — `POST /v3/{domain}/templates`, `GET /v3/{domain}/templates`, `PUT /v3/{domain}/templates/{name}`, `DELETE /v3/{domain}/templates/{name}`
- **Versioning**: Templates support multiple versions — create, activate, and manage versions independently
- **Sending with templates**: Pass the `template` parameter with the template name and `h:X-Mailgun-Variables` or `t:variables` with the data object

### Mailing Lists
- **What it is**: Programmatic mailing list management — create lists, add/remove/update members, send to entire lists
- **List API**: `GET /v3/lists` to list all, `POST /v3/lists` to create, `GET /v3/lists/{address}/members` for member management
- **Member CRUD**: Add individual members, bulk-add via JSON or CSV, update member properties, remove members
- **Access levels**: Control who can post to the list (readonly, members, everyone)
- **Sending to lists**: Use the list address as the recipient — Mailgun expands to all members and handles per-recipient personalization

### Domains API
- **Domain management**: `GET /v3/domains` to list, `POST /v3/domains` to add, `DELETE /v3/domains/{name}` to remove
- **DNS verification**: Mailgun provides the required DNS records (MX, TXT, CNAME) during domain setup
- **DKIM**: Add the provided CNAME or TXT record for DKIM signing — Mailgun signs all outbound email with your DKIM key once verified
- **SPF**: Add Mailgun's include to your SPF record (`include:mailgun.org`)
- **Domain state**: Domains have states — unverified, active, disabled — check verification status via the API
- **Custom message limits**: Set per-domain sending limits to control volume

### Routes
- **What it is**: Rules that process inbound email — match incoming messages by recipient, header, or catch-all, then take an action
- **Actions**: Forward to an HTTP endpoint (`forward("https://...")`), forward to an email address (`forward("user@example.com")`), or store for later retrieval (`store(notify="https://...")`) with 3-day retention
- **Priority**: Routes are evaluated in priority order (lower number = higher priority)
- **Match expressions**: `match_recipient("pattern")`, `match_header("header", "pattern")`, `catch_all()`
- **Route API**: `POST /v3/routes` to create, `GET /v3/routes` to list, `PUT /v3/routes/{id}` to update

### Webhooks
- **8 event types**: accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed
- **Configuration**: `POST /v3/domains/{domain}/webhooks` to create, set the URL for each event type
- **Payload**: JSON object with event-specific fields (message headers, recipient, tags, custom variables, timestamps, geolocation for opens/clicks)
- **Signing**: Webhooks are signed with your API key — verify the signature to authenticate that the webhook came from Mailgun
- **Retry schedule**: Mailgun retries failed webhook deliveries with exponential backoff
- **Batch delivery**: Webhooks may be batched — your endpoint should handle arrays of events

### Metrics API
- **What it is**: Analytics on deliverability, engagement, and sending health across your domains and tags
- **Metrics**: Delivered, opened, clicked, bounced, complained, unsubscribed rates broken down by domain, tag, provider, device, country
- **Time-series**: Query metrics over custom date ranges with resolution options
- **Use case**: Monitor sending health, identify deliverability issues, track engagement trends

### Mailgun Optimize (separate add-on)
- **Inbox placement seed testing**: Send test emails to seed addresses across major providers (Gmail, Outlook, Yahoo, etc.) and see where they land (inbox, spam, missing)
- **Email validation**: Validate email addresses before sending — single address via API (`GET /v4/address/validate`) or bulk validation via CSV upload
- **Validation results**: Returns risk assessment (deliverable, undeliverable, risky, unknown) plus reason codes
- **Impact**: Email validation lowered bounce rates 21% and increased open rates 65% based on Mailgun data
- **Sender reputation monitoring**: Track your IP and domain reputation across major blocklists
- **Blocklist alerts**: Get notified when your sending IP or domain appears on a blocklist
- **Pricing**: Separate paid add-on starting at $49/mo (Optimize Pilot) — NOT included in any Send plan

### Data model

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

### API quick reference

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

### Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Zapier (triggers: bounce, delivery, inbound, unsubscribe, log data; actions: add to mailing list, email validation), plus hundreds of apps via Zapier |
| **CRM** | No native CRM integrations — API-first approach; connect via Zapier or custom API integration |
| **Frameworks** | Any framework with HTTP or SMTP support (Rails, Django, Express, Laravel, Spring, Phoenix, WordPress, etc.) |
| **Sinch ecosystem** | Part of Sinch's communication platform (SMS, voice, video) but no direct product integrations as of March 2026 |

Mailgun is an API-first platform — integrations are built via the REST API or SMTP relay rather than pre-built native connectors.

### Pricing (USD, as of March 2026 — verify current pricing at mailgun.com)

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

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Sending transactional email via the API**:
   1. Sign up for a Mailgun account and copy your API key from the dashboard
   2. Add and verify a sending domain — add the required DNS records (MX, SPF TXT with `include:mailgun.org`, DKIM CNAME/TXT)
   3. Wait for DNS propagation and verify the domain in the Mailgun UI or via `GET /v3/domains/{domain}`
   4. Send your first email: `POST /v3/{domain}/messages` with Basic Auth (`api:YOUR_API_KEY`), passing `from`, `to`, `subject`, and `text`/`html` fields
   5. Optionally create a Domain Sending Key for production — restricts the key to `/messages` endpoints only for security
   6. Add tags (`o:tag`) and custom variables (`v:my-var`) for tracking and analytics
   7. Monitor delivery via the Events API (`GET /v3/{domain}/events`) or set up webhooks for real-time notifications

2. **Setting up inbound email routing**:
   1. Add an MX record for your receiving domain pointing to Mailgun's inbound servers
   2. Verify the domain in the Mailgun UI
   3. Create a route via the API (`POST /v3/routes`) or UI — define a match expression and action
   4. Match expression examples: `match_recipient("support@yourdomain.com")`, `match_header("subject", ".*order.*")`, `catch_all()`
   5. Action examples: `forward("https://yourapp.com/webhook")`, `forward("team@company.com")`, `store(notify="https://yourapp.com/notify")`
   6. Implement your webhook endpoint to receive the parsed email as multipart/form-data (sender, subject, body, attachments)
   7. Use custom parsing rules with regex or JSONPath for advanced routing logic

3. **Setting up domain-level templates**:
   1. Create a template: `POST /v3/{domain}/templates` with name, description, and initial version content
   2. Use Handlebars-like variables in the template: `{{first_name}}`, `{{order_number}}`, `{{items}}`
   3. Create additional versions for A/B testing or iteration
   4. Send using the template: include `template` parameter with the template name and `h:X-Mailgun-Variables` with the JSON data object
   5. Manage templates programmatically — list, update, delete via the Templates API

4. **Configuring webhooks for delivery tracking**:
   1. Create a webhook: `POST /v3/domains/{domain}/webhooks` with the event type (e.g., `delivered`, `opened`, `permanent_fail`) and your endpoint URL
   2. Implement your webhook endpoint to receive JSON payloads
   3. Verify webhook signatures using your API key — Mailgun signs every webhook for security
   4. Handle batch delivery — your endpoint may receive multiple events in a single POST
   5. Return a 200 status code quickly — move heavy processing to a background queue
   6. Set up webhooks for all 8 event types for complete visibility: accepted, delivered, opened, clicked, permanent_fail, temporary_fail, complained, unsubscribed

5. **Using Mailgun Optimize for deliverability**:
   1. Subscribe to an Optimize add-on plan (Pilot at $49/mo or Starter at $99/mo) — this is separate from your Send plan
   2. Run inbox placement tests: send test emails to Mailgun's seed list and see provider-by-provider inbox vs spam results
   3. Validate email addresses before sending: `GET /v4/address/validate?address=user@example.com` — returns risk level (deliverable, undeliverable, risky, unknown)
   4. Bulk validate via CSV upload for list cleaning
   5. Monitor sender reputation and blocklist status in the Optimize dashboard
   6. Set up blocklist alerts to get notified immediately when your IP or domain is listed

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **US vs EU regions require the correct base URL, and you cannot switch after domain creation.** US domains use `https://api.mailgun.net/v3/`, EU domains use `https://api.eu.mailgun.net/v3/`. Once a domain is created in a region, it cannot be moved to the other. If you need EU data residency for GDPR compliance, create the domain in the EU region from the start. Using the wrong base URL will return authentication errors that can be confusing to debug.
2. **Mailgun Optimize is a SEPARATE paid add-on ($49+/mo), not included in any Send plan.** Inbox placement seed testing, email validation, sender reputation monitoring, and blocklist alerts all require an Optimize subscription on top of your Send plan. Do not assume these features come with Foundation or Scale plans — they do not.
3. **Domain Sending Keys can ONLY send messages — they cannot manage domains, routes, or webhooks.** If your application needs to create routes, manage domains, or configure webhooks, you must use your main API key. Domain Sending Keys are restricted to `/messages` endpoints for security isolation. Using a Domain Sending Key for other API calls will return 401 errors.
4. **Dedicated IPs cost $59/mo each and need warmup — do not assume they are included.** Dedicated IPs are an add-on available on Scale and Enterprise plans. New dedicated IPs start with no reputation and must be warmed up gradually (start with low volume and increase over 2-4 weeks). Sending high volume on a cold dedicated IP will result in poor deliverability. For lower volumes, Mailgun's shared IP pools often deliver better results.
5. **The Free plan is 100 emails per DAY (not month) — very limited for testing.** This is significantly more restrictive than it sounds for development and testing workflows. If you need to test bulk sending, webhook handling, or template rendering at any meaningful scale, you will need at least the Foundation plan ($35/mo for 50,000/mo). The daily limit resets at midnight UTC.

## Step 5 — Related skills

- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-email-marketing` — Opt-in email marketing strategy across tools
- `/sales-email-tracking` — Email engagement tracking strategy
- `/sales-integration` — Connect Mailgun to CRM, Slack, or other tools via webhooks/Zapier
- `/sales-sendgrid` — SendGrid platform help — primary Mailgun competitor
- `/sales-postmark` — Postmark platform help — primary Mailgun competitor
- `/sales-customerio` — Customer.io platform help — uses Mailgun-like APIs for transactional
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Sending transactional email via the REST API in a Node.js app
**User says**: "I need to send password reset and order confirmation emails from my Node.js app using Mailgun."
**Skill does**:
1. Guides creating a Mailgun account and copying the API key from the dashboard
2. Walks through adding and verifying a sending domain — adding MX, SPF (`include:mailgun.org`), and DKIM DNS records
3. Shows how to use the `mailgun.js` SDK: initialize with API key and domain, then call `mg.messages.create()` with `from`, `to`, `subject`, `html`/`text`
4. Creates two domain-level templates with Handlebars variables — one for password reset (`{{reset_url}}`, `{{expiry_minutes}}`) and one for order confirmation (`{{order_number}}`, `{{items}}`, `{{total}}`)
5. Recommends creating a Domain Sending Key for production to limit the key's scope to sending only
6. Sets up webhooks for `delivered`, `permanent_fail`, and `complained` events to monitor delivery health and trigger alerts
**Result**: User has production-ready transactional email with templates, scoped API keys, proper DNS authentication, and delivery monitoring

### Example 2: Setting up inbound email routing for a support system
**User says**: "We want to receive customer reply emails at support@ourdomain.com and forward them to our ticketing webhook."
**Skill does**:
1. Guides adding an MX record for `ourdomain.com` pointing to Mailgun's inbound servers
2. Verifies the domain in the Mailgun UI
3. Creates a route via the API: `match_recipient("support@ourdomain.com")` with action `forward("https://app.ourdomain.com/api/tickets/inbound")`
4. Explains the webhook payload format — sender, subject, stripped-text (clean body without quoted reply), attachments as file uploads
5. Recommends a fallback route with `catch_all()` to store unmatched inbound email for 3 days (`store(notify="https://app.ourdomain.com/api/catchall")`) so nothing is silently dropped
6. Shows how to use custom parsing rules with regex to extract ticket IDs from subject lines for routing to existing tickets
**Result**: User has inbound email routing that forwards customer replies to their ticketing system with a catch-all safety net

### Example 3: Improving deliverability with Mailgun Optimize
**User says**: "Our Mailgun emails are landing in spam at Gmail. How do we diagnose and fix this?"
**Skill does**:
1. Checks if the user has Mailgun Optimize — if not, recommends the Pilot plan ($49/mo) for inbox placement testing
2. Runs an inbox placement seed test to confirm where emails land across Gmail, Outlook, Yahoo, and other providers
3. Reviews domain DNS authentication — verifies SPF, DKIM, and DMARC records are properly configured via the Domains API
4. Checks sender reputation in the Optimize dashboard for blocklist appearances and reputation scores
5. Validates the sending list via bulk CSV upload to remove invalid, disposable, and risky addresses (reducing bounce rates by up to 21%)
6. Reviews the `complained` webhook events to identify content or recipients generating spam complaints
**Result**: User identifies the root cause of spam placement (e.g., missing DMARC, blocklisted IP, high bounce rate) and has a concrete remediation plan with ongoing monitoring

## Troubleshooting

### Emails rejected with 401 Unauthorized when using Domain Sending Key
**Symptom**: API calls return 401 Unauthorized for endpoints like `GET /v3/domains` or `POST /v3/routes`, but sending email works fine
**Cause**: Domain Sending Keys are restricted to `/messages` endpoints only. They cannot be used to manage domains, routes, webhooks, mailing lists, or any other Mailgun resource. This is by design for security isolation.
**Solution**: Use your main API key (found in the Mailgun dashboard under API Security) for non-sending operations. Reserve Domain Sending Keys for production sending code only. If you need to manage resources programmatically, store the main API key securely in environment variables and use it for admin operations in a separate service or deployment pipeline.

### Webhook events not arriving at endpoint
**Symptom**: You configured webhooks in Mailgun but your endpoint is not receiving any events — no requests appear in your server logs
**Cause**: Common causes include: (1) the webhook URL is not publicly accessible (localhost or behind a firewall), (2) the endpoint is returning non-2xx status codes causing Mailgun to back off after retries, (3) the webhook was configured for the wrong domain, or (4) the events are not being generated (e.g., open/click tracking is not enabled).
**Solution**: Verify your endpoint is publicly accessible — use a tool like ngrok for local development. Check the Mailgun dashboard under Sending > Webhooks for delivery status and recent attempts. Ensure your endpoint returns a 200 status code quickly (within a few seconds). Confirm the webhook is configured for the correct domain. For open/click events, verify tracking is enabled in domain settings. Test with a simple endpoint (e.g., webhook.site) to isolate whether the issue is with Mailgun's delivery or your endpoint's handling.

### Emails sending from US region but domain is in EU (or vice versa)
**Symptom**: API calls return 404 or authentication errors when trying to send email, even though the domain is verified and the API key is correct
**Cause**: The domain was created in one region (US or EU) but the API calls are being made to the other region's base URL. US domains must use `https://api.mailgun.net/v3/`, EU domains must use `https://api.eu.mailgun.net/v3/`. Domains cannot be moved between regions after creation.
**Solution**: Check which region your domain is in via the Mailgun dashboard (look for the region indicator on the domain page). Update your API base URL to match the domain's region. If you need to switch regions (e.g., for GDPR compliance), you must delete the domain and recreate it in the correct region — then re-verify DNS records. Update all application configuration, environment variables, and SDK initialization to use the correct regional URL.
