---
name: sales-postmark
description: "Postmark platform help — transactional email delivery via REST API (`POST /email`, `POST /email/batch`), SMTP relay, Message Streams (transactional vs broadcast isolation), Handlebars Templates with layout inheritance, Inbound Email parsing, Webhooks (bounce, delivery, open, click, spam complaint, subscription change, inbound), DMARC Monitoring, Bounce Management (Rebound), Suppressions, Statistics, Bulk API, Sender Signatures, and domain authentication. Use when transactional emails aren't arriving, Postmark bounce rates are climbing, unsure how to separate transactional from broadcast streams, templates aren't rendering correctly, inbound email parsing is broken, webhooks aren't firing, or DMARC reports show authentication failures. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), email open/click tracking strategy (use /sales-email-tracking), or SendGrid-specific questions (use /sales-sendgrid)."
argument-hint: "[describe what you need help with in Postmark]"
license: MIT
version: 1.0.0
tags: [sales, transactional-email, deliverability, platform]
github: "https://github.com/wildbit"
---
# Postmark Platform Help

Help the user with Postmark (ActiveCampaign) platform questions — from transactional email via the REST API and SMTP relay through Message Streams, Handlebars Templates, Inbound Email, Webhooks, DMARC Monitoring, Bounce Management, Suppressions, Statistics, and integrations. Postmark is laser-focused on transactional email with best-in-class deliverability (98.7% inbox placement), originally built by Wildbit (Natalie & Chris Nagele) and acquired by ActiveCampaign in 2022.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Postmark do you need help with?**
   - A) Email API — sending transactional email via REST API (`POST /email`, `POST /email/batch`), SDKs
   - B) SMTP relay — traditional SMTP integration for frameworks that don't support API
   - C) Message Streams — separating transactional and broadcast (newsletters/announcements) infrastructure
   - D) Templates — server-side Handlebars templates, layout inheritance, cross-server pushing
   - E) Inbound Email — receiving and parsing incoming emails via webhook
   - F) Webhooks — bounce, delivery, open, click, spam complaint, subscription change, inbound events
   - G) DMARC Monitoring — free weekly DMARC reports, paid detailed monitoring
   - H) Bounce Management / Suppressions — automatic bounce processing, suppression lists
   - I) Statistics — opens, clicks, delivery rates, bounce rates, spam complaints
   - J) Sender Signatures — verified sender addresses and domains
   - K) Account / Billing — plans, pricing, servers, API tokens
   - L) Something else — describe it

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
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability (not Postmark-specific) -> `/sales-deliverability`
- Email open/click tracking strategy -> `/sales-email-tracking`
- SendGrid-specific questions -> `/sales-sendgrid`
- Connecting Postmark to other tools via Zapier or middleware -> `/sales-integration`
- Funnel strategy / conversion optimization -> `/sales-funnel`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Postmark platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Sending transactional email via the API**:
   1. Create a server in the Postmark UI (or use the default server)
   2. Copy the Server API Token from the server's credentials page
   3. Add and verify a Sender Signature — either a single email address or an entire domain (add DKIM and Return-Path CNAME records to DNS)
   4. Install the SDK for your language (e.g., `npm install postmark` for Node.js)
   5. Initialize the client: `const client = new postmark.ServerClient("YOUR_SERVER_TOKEN")`
   6. Send an email: set `From`, `To`, `Subject`, `HtmlBody`/`TextBody` (or use `TemplateId` + `TemplateModel`)
   7. Handle the response — check for `ErrorCode: 0` (success) or specific error codes
   8. Use `POSTMARK_API_TEST` as the server token during development to test without sending real email

2. **Setting up Message Streams for transactional and broadcast**:
   1. Navigate to your server in the Postmark UI
   2. The default transactional stream already exists — use it for password resets, receipts, alerts
   3. Create a new broadcast stream: Servers > [Your Server] > Message Streams > Add Stream > Broadcast
   4. Name the stream (e.g., "Newsletter", "Product Updates")
   5. In your API calls, pass `"MessageStream": "your-broadcast-stream-id"` to route to the broadcast stream
   6. Configure separate webhooks per stream if needed
   7. Monitor each stream's statistics independently to track reputation health

3. **Setting up Handlebars templates with layout inheritance**:
   1. Create a layout template first: Templates > Add Template > Layout
   2. Define the layout with `{{{@content}}}` placeholder where content templates will be injected
   3. Include shared elements in the layout: header, footer, styles, unsubscribe links
   4. Create content templates that reference the layout via the `LayoutTemplate` field
   5. Use Handlebars syntax in content templates: `{{variable}}`, `{{#if condition}}`, `{{#each items}}`
   6. Validate templates via the API (`POST /templates/{id}/validate`) with sample data
   7. Push templates between servers (staging to production) via the Template Push API

4. **Processing inbound email**:
   1. Upgrade to Pro plan or above (inbound email is not available on Developer or Basic plans)
   2. Add an MX record for your receiving domain: `10 inbound.postmarkapp.com`
   3. Configure the inbound webhook URL in the Postmark UI under your server's Inbound settings
   4. Optionally set up inbound rules to filter which recipient addresses trigger webhooks
   5. Implement your webhook endpoint to receive JSON payloads with parsed fields (From, To, Subject, HtmlBody, TextBody, Attachments)
   6. Handle attachments — they arrive as base64-encoded content in the JSON payload
   7. Return a 200 status code from your endpoint to acknowledge receipt

5. **Setting up DMARC monitoring**:
   1. Add a DMARC DNS record for your domain: `v=DMARC1; p=none; rua=mailto:re+YOUR_TOKEN@dmarc.postmarkapp.com`
   2. Free weekly digests start arriving automatically — summarize who is sending email as your domain
   3. For detailed monitoring ($14/mo/domain), sign up at dmarc.postmarkapp.com
   4. Review reports to identify unauthorized senders and SPF/DKIM alignment failures
   5. Gradually tighten your DMARC policy: `p=none` -> `p=quarantine` -> `p=reject` as you confirm all legitimate senders are authenticated

## Gotchas

> Best-effort from research — verify details against current Postmark documentation.

1. **Dedicated IPs require a minimum sending volume of 300K emails/month.** Unlike SendGrid or Mailchimp where you can buy a dedicated IP at lower volumes, Postmark requires sustained high volume to maintain IP reputation. If you send fewer than 300K/month, Postmark's shared IP pools actually deliver better results — their sender vetting process keeps shared IP reputation exceptionally high. Don't assume dedicated = better.
2. **Inbound Email is only available on Pro plan and above.** If you need to receive and parse incoming email (reply processing, support tickets, email-to-app workflows), the Developer and Basic plans will not work. Budget for at least Pro ($16.50/mo) if inbound email is part of your architecture.
3. **Transactional and broadcast streams have separate suppression lists but share a single bill.** While Message Streams isolate sending reputation, suppressions are per-stream — an address suppressed in your broadcast stream can still receive transactional email, and vice versa. This is intentional (a user unsubscribing from your newsletter should still get password resets) but can surprise teams expecting a single global suppression list.
4. **Postmark has a sender vetting process — you cannot send immediately at high volume.** New accounts go through an approval process. Postmark reviews your use case and may ask about your sending patterns, audience, and content. This vetting is why their shared IP reputation is so high, but it means you cannot sign up and blast 100K emails on day one. Plan for 1-2 business days of approval time for new accounts.
5. **The DMARC monitoring API is completely separate from the main Postmark API.** The DMARC service lives at `dmarc.postmarkapp.com` with its own authentication tokens and endpoints. Do not try to use your Postmark server or account token for DMARC API calls — they are different systems with different credentials, even though both are Postmark products.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Email marketing strategy and best practices (platform-agnostic)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-email-tracking` — Email open and click tracking strategy
- `/sales-sendgrid` — SendGrid platform help — if you need SendGrid-specific guidance instead
- `/sales-integration` — Connect Postmark to other tools via Zapier, Make, or API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up transactional email for a Rails app
**User says**: "I need to send order confirmation and shipping notification emails from my Rails app using Postmark."
**Skill does**:
1. Guides creating a Postmark server and copying the Server API Token
2. Walks through adding and verifying a Sender Signature — adding DKIM and Return-Path CNAME records to DNS
3. Shows how to configure Action Mailer to use Postmark's SMTP relay (`smtp.postmarkapp.com`, port 587, token as username and password)
4. Alternatively, recommends the `postmark-rails` gem for native API integration instead of SMTP for better error handling
5. Creates two Handlebars templates with a shared layout (header/footer) — one for order confirmation (with `{{order_number}}`, `{{items}}`) and one for shipping notification (with `{{tracking_url}}`)
6. Recommends setting up Delivery and Bounce webhooks to track failures and trigger customer service alerts
**Result**: User has production-ready transactional email with templates, shared layout, proper authentication, and delivery monitoring

### Example 2: Separating newsletter from transactional email
**User says**: "We're sending both password resets and a weekly newsletter through Postmark. Our newsletter unsubscribes are hurting our transactional delivery."
**Skill does**:
1. Explains Message Streams — broadcast email reputation is infecting their transactional stream because they are likely sending everything through the default transactional stream
2. Walks through creating a new broadcast stream for the newsletter
3. Updates their newsletter sending code to include `"MessageStream": "newsletter"` in API calls
4. Configures separate webhooks for each stream — bounce/delivery for transactional, plus subscription change for broadcast
5. Explains that suppressions are per-stream, so newsletter unsubscribers will still receive transactional email (password resets, receipts)
6. Reviews their broadcast stream statistics after migration to confirm spam complaint rate drops below 0.1%
**Result**: User's transactional delivery speed recovers as broadcast reputation issues are isolated to the newsletter stream

### Example 3: Setting up inbound email for a support ticketing system
**User says**: "We want customers to reply to support emails and have those replies automatically create or update tickets in our system."
**Skill does**:
1. Confirms user is on Pro plan or above (inbound email requirement) — if not, recommends upgrading from Basic ($15) to Pro ($16.50)
2. Guides adding an MX record for their support domain (e.g., `support.company.com`) pointing to `inbound.postmarkapp.com`
3. Configures inbound webhook URL in the Postmark server settings
4. Sets up an inbound rule to accept email only to specific addresses (e.g., `*@support.company.com`)
5. Designs the webhook endpoint: parse the JSON payload to extract From, Subject, TextBody, and the original ticket ID from the In-Reply-To header or a tag in the To address
6. Maps inbound emails to existing tickets (update) or creates new tickets when no match is found
**Result**: User has a working reply-to-ticket pipeline where customer email replies automatically flow into their support system

## Troubleshooting

### Emails rejected with error code 406 (Inactive Recipient)
**Symptom**: API calls return error code 406 "You tried to send to a recipient that has been marked as inactive" for addresses that should be valid
**Cause**: The recipient previously hard-bounced or filed a spam complaint, and Postmark automatically added them to the suppression list for that message stream. Postmark blocks further sends to protect your sender reputation.
**Solution**: Check the suppression list for the relevant message stream via the API (`GET /message-streams/{stream}/suppressions/dump`) or in the UI under Suppressions. If the underlying issue has been resolved (e.g., the recipient's mailbox was full but is now fixed), reactivate the address by deleting the suppression (`POST /message-streams/{stream}/suppressions/delete` with the email address in the body). For hard bounces, verify the address is valid before reactivating — sending to an address that bounces again will re-suppress it.

### Webhook endpoint receiving duplicate events
**Symptom**: Your webhook endpoint processes the same event multiple times, causing duplicate records or actions in your system
**Cause**: Postmark retries webhook delivery if your endpoint does not return a 2xx status code within the timeout window, or if there is a network interruption during delivery. The retry fires the same event payload again.
**Solution**: Make your webhook handler idempotent — use the `MessageID` field in the webhook payload as a deduplication key. Before processing, check if you have already handled an event for that MessageID and event type. Store processed event IDs in a cache or database. Ensure your endpoint returns a 200 status code quickly (within a few seconds) — move heavy processing to a background queue. If you are seeing excessive retries, check your endpoint's response time and error rate.

### Templates not rendering variables (showing raw Handlebars tags)
**Symptom**: Sent emails show literal `{{variable_name}}` text instead of the rendered values
**Cause**: The template model data is not being passed correctly in the API call, or the variable names in the template do not match the keys in the `TemplateModel` object. Another common cause is using `POST /email` (raw send) instead of `POST /email/withTemplate` (template send).
**Solution**: Verify you are using the template send endpoint (`POST /email/withTemplate`) and passing `TemplateId` (or `TemplateAlias`) plus `TemplateModel` with the correct variable names. Variable names are case-sensitive — `{{OrderNumber}}` requires `"OrderNumber"` in the model, not `"orderNumber"`. Use the template validation endpoint (`POST /templates/{id}/validate`) to test rendering with sample data before sending. Check the Postmark Activity log for the rendered message to see what was actually sent versus what you expected.
