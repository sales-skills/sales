---
name: sales-sendgrid
description: "SendGrid platform help — transactional email via Email API (REST + SMTP), Marketing Campaigns (drag-and-drop editor, automations, A/B testing, signup forms, segmentation), Email Validation API, Dynamic Templates (Handlebars), Event Webhooks, Inbound Parse, domain authentication (SPF/DKIM/DMARC), dedicated IPs, suppressions, Design Library, email testing, statistics. Use when SendGrid emails are landing in spam, transactional emails aren't sending, domain authentication is failing, Event Webhooks aren't firing, Dynamic Templates aren't rendering correctly, Marketing Campaigns have low open rates, or SendGrid bounce rates are spiking. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), or email open/click tracking strategy (use /sales-email-tracking)."
argument-hint: "[describe what you need help with in SendGrid]"
license: MIT
version: 1.0.0
tags: [sales, transactional-email, email-marketing, api, platform]
github: "https://github.com/sendgrid"
---
# SendGrid Platform Help

Help the user with SendGrid (Twilio) platform questions — from transactional email via the Email API and SMTP relay through Marketing Campaigns, Dynamic Templates, Event Webhooks, Inbound Parse, domain authentication, dedicated IPs, suppressions, email testing, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of SendGrid do you need help with?**
   - A) Email API — sending transactional email via REST API or SMTP relay, SDKs
   - B) Marketing Campaigns — drag-and-drop editor, single sends, automations, signup forms
   - C) Dynamic Templates — Handlebars-based transactional templates, template versioning
   - D) Domain Authentication — SPF/DKIM/DMARC setup, branded tracking links, reverse DNS
   - E) Event Webhooks — delivery events, engagement events, webhook configuration
   - F) Inbound Parse — receiving and parsing inbound email via webhook
   - G) Email Validation API — address validation, disposable domain detection
   - H) Dedicated IPs / Deliverability — IP warmup, IP pools, sender reputation
   - I) Suppressions — bounces, blocks, spam reports, unsubscribe management
   - J) Analytics / Statistics — aggregate stats, category stats, mailbox-provider stats
   - K) Account / Billing — plans, pricing, subusers, teammates, API keys
   - L) Something else — describe it

2. **What's your role?**
   - A) Developer / engineer
   - B) Marketing manager / email marketer
   - C) DevOps / infrastructure
   - D) Admin / account owner
   - E) Founder / solo operator
   - F) Agency / freelancer
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability (not SendGrid-specific) -> `/sales-deliverability`
- Email open/click tracking strategy -> `/sales-email-tracking`
- Connecting SendGrid to other tools via Zapier or middleware -> `/sales-integration`
- Funnel strategy / conversion optimization -> `/sales-funnel`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — SendGrid platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Sending transactional email via the API**:
   1. Create an API key in Settings > API Keys with "Mail Send" permission
   2. Authenticate your sending domain in Settings > Sender Authentication (add the CNAME records to your DNS)
   3. Install the SDK for your language (e.g., `npm install @sendgrid/mail` for Node.js)
   4. Set the API key: `sgMail.setApiKey(process.env.SENDGRID_API_KEY)`
   5. Compose and send: set `to`, `from`, `subject`, `text`/`html` (or `templateId` + `dynamicTemplateData`)
   6. Handle the response — check for 202 Accepted (success) or error codes
   7. Set up Event Webhooks to track delivery and engagement events

2. **Setting up Marketing Campaigns automation**:
   1. Subscribe to a Marketing Campaigns plan (automations require Advanced plan)
   2. Import or add contacts to a list — use CSV upload, signup forms, or the Contacts API
   3. Navigate to Automations > Create Automation
   4. Choose a trigger: welcome series (new contact added to list), date-based, or custom
   5. Build the email sequence — add email steps with delays between them
   6. Design each email using the drag-and-drop editor or code editor
   7. Activate the automation and monitor entry/completion rates in the automation dashboard

3. **Configuring domain authentication**:
   1. Go to Settings > Sender Authentication > Authenticate Your Domain
   2. Select your DNS host and enter your sending domain
   3. SendGrid generates CNAME records for SPF and DKIM — add these to your DNS provider
   4. Click Verify in SendGrid — it checks for the DNS records
   5. Set up branded tracking links (link branding) — add another CNAME for click/open tracking
   6. If using a dedicated IP, configure reverse DNS to map the IP to your domain
   7. Set up a DMARC record separately in your DNS (e.g., `v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com`)

4. **Setting up Event Webhooks**:
   1. Go to Settings > Mail Settings > Event Webhook
   2. Enter your webhook URL (must be publicly accessible HTTPS endpoint)
   3. Select the events you want to receive (processed, delivered, open, click, bounce, etc.)
   4. Enable the webhook
   5. Implement signature verification on your endpoint using SendGrid's public key
   6. Process incoming JSON arrays of event objects — each has `event`, `email`, `timestamp`, and custom args
   7. Handle retries — SendGrid retries failed deliveries for up to 24 hours

5. **Setting up Inbound Parse**:
   1. Add an MX record for your receiving domain pointing to `mx.sendgrid.net`
   2. Go to Settings > Inbound Parse > Add Host & URL
   3. Enter your receiving domain and the webhook URL to receive parsed email
   4. Choose raw (MIME) or parsed (structured fields) format
   5. Implement your webhook endpoint to process the multipart POST data (from, to, subject, body, attachments)
   6. Test by sending an email to any address at your configured domain

## Gotchas

> Best-effort from research — verify details against current SendGrid documentation.

1. **Email API and Marketing Campaigns are separate subscriptions with separate billing.** Many users expect one plan covers everything. If you need to send both transactional email (order confirmations, password resets) and marketing email (newsletters, promotions), you need two subscriptions. Budget accordingly and understand which features belong to which plan.
2. **The Free Trial is 60 days only with 100 emails/day — not a permanent free tier.** Unlike some competitors, SendGrid's free offering expires. After 60 days you must upgrade to a paid plan or lose sending capability. Plan your evaluation and migration timeline around this limit.
3. **Dedicated IPs require warmup or you will hit deliverability problems immediately.** New dedicated IPs have no sending reputation. If you send high volume on a cold IP, mailbox providers will throttle or reject your email. Use SendGrid's automated warmup (enabled by default) or create a manual warmup schedule ramping from hundreds to your target volume over 4-6 weeks.
4. **Suppression groups are not enabled by default — without them, unsubscribes are global.** If you do not configure suppression groups (also called "unsubscribe groups"), any unsubscribe removes the contact from ALL your email. Set up suppression groups early (e.g., "Marketing", "Product Updates", "Billing Alerts") so recipients can opt out of specific categories without losing all communication.
5. **Event Webhook payloads are batched and can be delayed — do not rely on them for real-time logic.** SendGrid batches webhook events and may deliver them with a delay of seconds to minutes. If you need real-time delivery confirmation, poll the API or use the mail/send response code (202 = accepted for processing). Design your webhook consumers to handle out-of-order and duplicate events idempotently.
6. **`sg_event_id` changes on retries — do NOT use it for deduplication.** Despite the docs saying `sg_event_id` is "a unique ID to this event that you can use for deduplication purposes," the ID changes on every retry attempt. Same email, same event, same timestamp — but a different `sg_event_id`. Build a composite dedup key instead: `${sg_message_id}:${event}:${email}`. Store processed keys in Redis (with 48-hour TTL to cover SendGrid's 24-hour retry window) or a database, and check before processing each event.
7. **Shared IP reputation can tank your deliverability with no warning.** On free/Essentials plans, you share IPs with other senders. If bad actors on the same pool trigger Spamhaus blocklists or Microsoft blocks, your email gets caught too — even with 99% sender score and perfect authentication. SendGrid's official position is that "blocklists are a natural part of sending through shared IP Pools." If you're seeing unexplained deliverability drops, check your IP against blocklists (mxtoolbox.com) and consider upgrading to a dedicated IP (Pro plan).
8. **The Node.js SDK doesn't pool HTTP connections — bulk sends cause socket exhaustion.** If you fire many `sgMail.send()` calls concurrently, you'll hit `EMFILE` errors (file descriptor limit). The SDK creates a new connection per request. Use sequential sending (`for...of` with `await`), a concurrency limiter (`p-limit` set to 2-10), or personalizations (up to 1000 recipients per single request) to reduce connection count.
9. **Sending all messages in a single SDK array call can delay delivery by hours.** When you pass an array to `sgMail.send()`, SendGrid queues them server-side. For time-sensitive sends, use personalizations (same content, different recipients in one request) or send individual calls with concurrency control rather than one massive batch.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Email marketing strategy and best practices (platform-agnostic)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-email-tracking` — Email open and click tracking strategy
- `/sales-integration` — Connect SendGrid to other tools via Zapier, Make, or API
- `/sales-funnel` — Funnel strategy and conversion optimization
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up transactional email for a SaaS app
**User says**: "I need to send password reset and welcome emails from my Node.js app using SendGrid."
**Skill does**:
1. Walks through creating a restricted API key with only "Mail Send" permission for security
2. Guides domain authentication setup — adding CNAME records for SPF/DKIM
3. Shows how to install `@sendgrid/mail` and configure the API key via environment variable
4. Creates two Dynamic Templates in the SendGrid UI — one for password reset (with `{{reset_link}}`) and one for welcome (with `{{first_name}}`, `{{login_url}}`)
5. Provides code examples using `sgMail.send()` with `templateId` and `dynamicTemplateData`
6. Recommends setting up Event Webhooks to track delivery failures and trigger alerts for bounces
**Result**: User has production-ready transactional email with templates, proper authentication, and delivery monitoring

### Example 2: Migrating marketing email from Mailchimp to SendGrid
**User says**: "We're moving our newsletter from Mailchimp to SendGrid Marketing Campaigns. What's the process?"
**Skill does**:
1. Explains the dual-subscription model — Marketing Campaigns is separate from Email API, so they need the right plan (Basic or Advanced)
2. Walks through exporting contacts from Mailchimp (CSV) and importing into SendGrid with field mapping
3. Warns to only import subscribed contacts — recreate suppression groups in SendGrid before importing
4. Guides recreation of email templates using SendGrid's drag-and-drop editor or code editor
5. Covers DNS changes — remove Mailchimp's authentication records and add SendGrid's CNAME records for SPF/DKIM
6. Recommends a warmup strategy: start with most engaged contacts, gradually expand over 2-4 weeks, especially if using a new dedicated IP (Advanced plan)
**Result**: User has a migration plan covering contacts, templates, DNS, suppressions, and warmup to maintain deliverability

### Example 3: Setting up Event Webhooks for delivery tracking
**User says**: "I want to track which emails bounce and get delivered so I can update our CRM."
**Skill does**:
1. Guides Event Webhook configuration — selecting processed, delivered, deferred, bounce, and dropped events
2. Walks through implementing a webhook endpoint that receives JSON event batches
3. Explains signature verification using SendGrid's public key to secure the endpoint
4. Designs the CRM update logic: mark contacts as "delivered" on delivery events, flag as "invalid" on hard bounces, queue for retry on deferrals
5. Warns about batched/delayed delivery and duplicate events — recommends idempotent processing using the event `sg_message_id` as a deduplication key
6. Suggests also subscribing to open and click events for engagement tracking in the CRM
**Result**: User has a webhook pipeline that keeps their CRM in sync with SendGrid delivery and engagement events

## Troubleshooting

### Emails going to spam after switching to a dedicated IP
**Symptom**: Deliverability drops and emails start landing in spam shortly after upgrading to a Pro or Advanced plan with a dedicated IP
**Cause**: The dedicated IP is new and has no sending reputation. Mailbox providers (Gmail, Yahoo, Outlook) are cautious about unknown IPs and will throttle or spam-folder email from them.
**Solution**: Enable automated IP warmup in Settings > IP Addresses (it should be on by default for new IPs). If you turned it off, re-enable it. During warmup, SendGrid splits your traffic between the new dedicated IP and the shared IP pool, gradually shifting volume to the dedicated IP over weeks. Do not send your full volume on a cold IP. If deliverability is already damaged, pause high-volume sends, re-enable warmup, and start with your most engaged recipients. Monitor mailbox-provider stats to see which providers are rejecting. See `/sales-deliverability` for a comprehensive warmup guide.

### Event Webhook not receiving events
**Symptom**: You configured an Event Webhook URL but your endpoint is not receiving any event data
**Cause**: The webhook URL is not publicly accessible, HTTPS certificate is invalid, the endpoint is returning non-2xx status codes, or the webhook is not enabled.
**Solution**: Verify the webhook is enabled in Settings > Mail Settings > Event Webhook. Ensure your URL is publicly reachable (not localhost or behind a firewall). Check that your HTTPS certificate is valid and not self-signed. Test the endpoint manually with a POST of sample JSON. Check that your endpoint returns 2xx status codes within 3 seconds — SendGrid treats timeouts and errors as failures and will retry, but eventually stops after 24 hours. Use a tool like ngrok for local development testing. Check SendGrid's Event Webhook activity log for delivery attempts and error codes.

### Gmail/Yahoo blocking emails with DMARC alignment error
**Symptom**: Emails deferred or rejected with `421 4.7.32 From: header isn't aligned with either the authenticated SPF or DKIM organizational domain` — especially common with scheduled emails
**Cause**: The From address domain doesn't match the domain you authenticated in SendGrid. For example, sending from a gmail.com address through SendGrid, or sending from `user@example.com` when only `notifications.example.com` is authenticated. Gmail and Yahoo enforce DMARC alignment strictly since Feb 2024.
**Solution**: Go to Settings > Sender Authentication > Authenticate Your Domain and authenticate the exact domain you send from. Add the CNAME records SendGrid generates to your DNS. Make sure your From address matches — if you authenticated `example.com`, send from `anything@example.com`. Add a DMARC record to your DNS: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com` (start with `p=none` to monitor). If you're on a shared IP plan and still seeing throttling after fixing authentication, the shared IP may have poor reputation — check it at mxtoolbox.com and consider a dedicated IP (Pro plan).

### Webhook event deduplication failing — duplicate database entries
**Symptom**: Duplicate webhook events processed despite checking `sg_event_id` — same email, same event type, same timestamp, but different `sg_event_id` values
**Cause**: `sg_event_id` changes on every retry attempt. Despite the docs calling it a deduplication key, it is unique per delivery attempt, not per logical event.
**Solution**: Build a composite dedup key from fields that ARE stable across retries: `${sg_message_id}:${event}:${email}`. Store processed keys in Redis with a 48-hour TTL (covers SendGrid's 24-hour retry window with margin) or a database table with a unique constraint. Check before processing each event. For high-volume systems, use a Bloom filter or Redis SET with EXPIRE for fast lookups.

### EMFILE error / socket exhaustion when sending bulk email
**Symptom**: `Error: connect EMFILE` when sending hundreds or thousands of emails — typically the first few batches succeed and then later ones fail
**Cause**: Each `sgMail.send()` call opens a new HTTP connection. Node.js has a default file descriptor limit (~1024). Concurrent requests exhaust available sockets before earlier connections close. The SendGrid Node SDK does not pool connections.
**Solution**: Three approaches (pick one): (1) **Send sequentially**: `for (const msg of messages) { await sgMail.send(msg); }` — slowest but simplest. (2) **Limit concurrency**: use `p-limit` set to 2-10 concurrent requests: `const limit = pLimit(5); await Promise.all(msgs.map(m => limit(() => sgMail.send(m))));`. (3) **Use personalizations**: if recipients get the same content with different substitution data, send up to 1000 recipients in a single API call using the `personalizations` array — this is the most efficient approach and uses just one HTTP connection.

### Marketing contacts not appearing in segments
**Symptom**: Contacts were imported or added via the API but do not appear in segments or lists as expected
**Cause**: Contact ingestion in Marketing Campaigns is asynchronous — it can take minutes to hours for contacts to be fully indexed and available in segments. Alternatively, the import may have partially failed due to invalid fields or duplicate handling.
**Solution**: Check the import status in Marketing > Contacts > Imports for errors or warnings. Allow up to 2 hours for large imports to fully index. Verify that custom field names in the import match the custom fields defined in your SendGrid account (mismatches cause fields to be silently dropped). Check that contacts have the expected field values by searching for a specific contact in the UI. For API-added contacts (`PUT /v3/marketing/contacts`), check the response for the `job_id` and poll `GET /v3/marketing/contacts/imports/{id}` for status. If contacts appear in the list but not the segment, review the segment query conditions — ensure the field names and operators match the actual contact data.
