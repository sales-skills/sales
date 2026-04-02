---
name: sales-snov
description: "Snov.io platform help — email finder, email verifier, multichannel campaigns (email + LinkedIn), LinkedIn automation, sales CRM, email warmup, deliverability check, email tracker, AI email writer, prospect management. Use when asking 'how do I do X in Snov.io', 'Snov.io API', 'Snov.io campaigns', 'Snov.io email finder', 'Snov.io warmup', 'Snov.io LinkedIn automation'. Do NOT use for general deliverability strategy (use /sales-deliverability), enrichment strategy (use /sales-enrich), cadence strategy (use /sales-cadence), or prospect list building strategy (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in Snov.io]"
license: MIT
version: 1.0.0
tags: [sales, outbound, enrichment, email-finder, platform]
---
# Snov.io Platform Help

Help the user with Snov.io platform questions — from email finder and verification through multichannel campaigns, LinkedIn automation, sales CRM, email warmup, deliverability checks, email tracker, AI email writer, prospect management, API, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Snov.io do you need help with?**
   - A) Email Finder — domain search, name+domain search, LinkedIn enrichment, company domain lookup
   - B) Email Verifier — single/bulk verification, SMTP checks, 7-tier validation
   - C) Campaigns — multichannel drip campaigns (email + LinkedIn), A/B testing, AI email writer
   - D) LinkedIn Automation — profile views, connection requests, follow-ups
   - E) Sales CRM — deal tracking, pipelines, Google Calendar sync
   - F) Email Warmup — inbox warming, deliverability improvement
   - G) Deliverability Check — inbox placement, reputation monitoring
   - H) Email Tracker — Gmail extension for opens/clicks
   - I) API — REST API, OAuth, webhooks, automation
   - J) Integrations — CRM connections, Zapier, Make
   - K) Something else — describe it

2. **What's your role?**
   - A) Sales rep / BDR / AE
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Admin / IT
   - E) Founder / solo seller
   - F) Agency owner / operator
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cross-platform deliverability strategy -> `/sales-deliverability`
- Contact enrichment strategy (platform-agnostic) -> `/sales-enrich`
- Outbound cadence strategy / sequence design -> `/sales-cadence`
- Building prospect lists -> `/sales-prospect-list`
- Email tracking strategy -> `/sales-email-tracking`
- Connecting Snov.io to other tools via Zapier or middleware -> `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Snov.io platform reference

Provide module-by-module guidance based on the user's area:

### Email Finder
- **Domain search**: Find all email addresses associated with a domain — returns prospects with names, positions, and social profiles
- **Name + domain search**: Find a specific person's email given their name and company domain
- **LinkedIn profile enrichment**: Extract email from a LinkedIn profile URL
- **Company domain lookup**: Find the domain for a company by name
- **Email count check**: Check how many emails are available for a domain before using credits
- **Chrome extension**: Find emails directly from LinkedIn profiles and company websites
- **Credits system**: Each successful find consumes credits — check email count first to estimate credit usage

### Email Verifier
- **98% accuracy**: 7-tier verification process for high-confidence results
- **Verification tiers**: Syntax check, gibberish detection, domain check, MX record check, SMTP check, catch-all detection, freemail detection
- **Bulk verification**: Verify up to 10 emails per API batch request
- **Statuses**: Valid, invalid, catch-all, unknown — act on valid only, treat catch-all with caution
- **Best practice**: Always verify emails before adding to campaigns — reduces bounces and protects sender reputation

### Multichannel campaigns
- **Email + LinkedIn sequences**: Combine email steps with LinkedIn actions in a single drip campaign
- **Drip campaigns**: Automated multi-step sequences with configurable delays between steps
- **A/B testing**: Test different subject lines and email body variants to optimize performance
- **Sentiment analysis**: AI-powered analysis of prospect replies to gauge interest level
- **AI email writer**: Automated email composition — generates personalized emails based on prospect data
- **Auto-stop on reply**: Campaign pauses sending to a prospect when they reply
- **Scheduling**: Configure send windows by day and time to optimize delivery timing

### LinkedIn Automation
- **Paid add-on**: $69/month per LinkedIn account slot — not included in any base plan
- **Automated actions**: Profile views, connection requests, follow-up messages
- **Multichannel integration**: LinkedIn steps woven into email campaign sequences
- **Condition-based**: Trigger LinkedIn actions based on email engagement (e.g., no open -> send connection request)
- **Requires**: Connected LinkedIn account and active add-on subscription

### Sales CRM
- **Deal tracking**: Manage deals through custom pipeline stages
- **Pipelines**: Visual pipeline view with drag-and-drop deal management
- **Google Calendar sync**: Sync meetings and calls directly from the CRM
- **Contact association**: Link prospects, emails, and deals together
- **Lightweight CRM**: Best for teams using Snov.io as their primary prospecting tool — for full CRM needs, integrate with Salesforce/HubSpot

### Email Warmup
- **Automated inbox warming**: Sends and receives emails between a large pool of real mailboxes to build sender reputation
- **Freemail support**: Works with Gmail, Outlook, and other freemail providers — not limited to custom domains
- **Large warm-up pool**: Extensive network of warmup accounts for realistic engagement patterns
- **Ramp schedule**: Gradually increases send volume over time
- **Best practice**: Run warmup for 2+ weeks before launching cold campaigns from a new mailbox
- **Slot limits**: Lower-tier plans have limited warmup slots (Starter: 3, Pro S+: unlimited)

### Email Deliverability Check
- **Inbox placement testing**: Check whether your emails land in inbox, spam, or promotions tab
- **Reputation monitoring**: Track sender reputation over time
- **Domain authentication check**: Verify SPF, DKIM, DMARC configuration
- **Best practice**: Run deliverability checks before and after campaign launches to catch issues early

### Email Tracker
- **Gmail extension**: Track email opens and link clicks directly from Gmail
- **Real-time notifications**: Get alerted when a prospect opens your email or clicks a link
- **Engagement history**: View full open/click timeline per email
- **Free tool**: Available to all Snov.io users

### AI Email Writer
- **Automated composition**: Generate personalized cold emails based on prospect data and your product/service
- **Campaign integration**: Use AI-written emails directly in drip campaigns
- **Customization**: Adjust tone, length, and call-to-action style
- **Best practice**: Always review and personalize AI-generated emails before sending — use as a starting point, not a final draft

### Prospect Management
- **Lists**: Organize prospects into targeted lists for campaigns
- **Custom fields**: Add custom data fields to prospect records for segmentation and personalization
- **Do-not-email list**: Maintain a suppression list to prevent outreach to opted-out or restricted contacts
- **Import/export**: CSV import and export for bulk prospect management
- **Deduplication**: Automatic duplicate detection across lists

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| Prospect | Contact record | id, email, firstName, lastName, company, position, socialProfiles, lists |
| List | Prospect grouping | id, name, contactCount, created |
| Campaign | Drip email sequence | id, name, status, steps, recipientCount |
| Campaign Step | Individual step in a campaign | id, campaignId, type (email/LinkedIn), variant, delay |
| Email Verification | Verification result | email, status (valid/invalid/catch-all/unknown), result |
| Domain Search | Domain lookup result | domain, emailCount, prospects |
| Deal | CRM deal record | id, name, stage, value, contacts |
| Pipeline | CRM pipeline | id, name, stages |
| Webhook | Event subscription | id, url, events, status |

### API quick reference
- **Base URL**: `https://api.snov.io`
- **Versions**: V1 (stable) and V2 (newer endpoints)
- **Auth**: OAuth 2.0 Bearer token — exchange `client_id` + `client_secret` for an `access_token` (1-hour lifespan, must refresh)
- **Rate limit**: 60 requests per minute
- **33+ endpoints** across: Domain Search, Email Finder, Email Verifier, Campaigns, Prospects, Webhooks, Account
- **Key endpoint categories**:
  - **Domain Search**: Company info, prospect profiles, domain emails, generic contacts
  - **Email Finder**: Name+domain lookup, company domain lookup, LinkedIn profile enrichment
  - **Email Verifier**: Single and batch (up to 10) verification, SMTP checks
  - **Campaign Management**: Analytics, progress, recipient status, replies, opens, clicks, sent
  - **Prospect Management**: Add, find by ID/email, custom fields, lists
  - **Webhooks**: CRUD operations + per-request callback URLs on async endpoints
  - **Account**: Check credit balance
- **Async endpoints**: Some finder/verifier endpoints are async — use webhook callback URLs to receive results when ready
- **Full reference**: See Snov.io API docs at `https://snov.io/knowledgebase/category/api/`

### Integrations
- **Native CRM**: HubSpot, Pipedrive, Salesforce, Zoho CRM, Close CRM, Freshsales, Nutshell
- **Automation**: Zapier (5,000+ app connections), Make (formerly Integromat)
- **Productivity**: Gmail, Google Calendar, Slack, Calendly
- **Marketing**: Mailchimp, Airtable
- **Other**: Trello, Intercom
- **Best practices**: Use native integrations where available for real-time sync; fall back to Zapier/Make for non-native connections

### Pricing (as of 2026 — verify current pricing at snov.io)

| Plan | Price | Credits | Recipients | Warmups |
|------|-------|---------|------------|---------|
| Trial | $0 | 50 | — | — |
| Starter | $39/mo | 1,000 | 5,000 | 3 slots |
| Pro S | $99/mo | 5,000 | 25,000 | Unlimited |
| Pro M | $149/mo | 20,000 | 50,000 | Unlimited |
| Pro L | $249/mo | 50,000 | 100,000 | Unlimited |
| Custom Ultra | Custom | 200,000+ | Custom | Unlimited |

**Add-ons**: LinkedIn Automation $69/mo per slot. Annual billing saves 25%.

**Key stats**: 400K+ users, 300K+ companies, 180+ countries, 4.5/5 G2, 4.8/5 Trustpilot.

## Step 4 — Actionable guidance

Based on the user's specific question:

### Campaign setup workflow
1. Build your prospect list (Email Finder, CSV import, or Chrome extension)
2. Verify all emails (bulk verification — only send to "valid" status)
3. Connect your sending mailbox(es)
4. Enable email warmup on all mailboxes — wait 2+ weeks before launching
5. Create a new drip campaign with email steps (and LinkedIn steps if add-on is active)
6. Configure A/B test variants for subject lines and body copy
7. Set delays between steps (2-3 days for follow-ups is typical)
8. Add verified prospects to the campaign
9. Run a deliverability check before launch
10. Launch and monitor campaign analytics

### Email finder workflow
1. Check email count for the target domain first (saves credits if count is low)
2. Use domain search for broad prospecting at a company
3. Use name + domain search when you know the specific person
4. Use LinkedIn enrichment when you have the prospect's LinkedIn URL
5. Always verify found emails before adding to campaigns

### Verification workflow
1. Collect emails from any source (finder, CSV, manual)
2. Run bulk verification (up to 10 per API batch)
3. Filter results: only use "valid" emails in campaigns
4. Treat "catch-all" with caution — these domains accept all emails, so verification cannot confirm the specific address exists
5. Remove "invalid" and "unknown" from your lists
6. Re-verify lists older than 3 months — email validity degrades over time

### Warmup setup
1. Connect your sending mailbox to Snov.io
2. Enable warmup — the system will start with low volume and ramp up
3. Monitor warmup progress in the dashboard
4. Wait at least 2 weeks before launching cold campaigns
5. Keep warmup running even after campaigns start — it maintains reputation

### LinkedIn automation setup
1. Purchase the LinkedIn Automation add-on ($69/mo per slot)
2. Connect your LinkedIn account
3. Create or edit a campaign to add LinkedIn steps
4. Configure LinkedIn actions: profile views, connection requests, follow-up messages
5. Set conditions: e.g., send LinkedIn connection request if email not opened after 3 days
6. Monitor LinkedIn activity to stay within LinkedIn's daily limits

## Gotchas

> Best-effort from research — verify details against current Snov.io documentation.

1. **LinkedIn automation is a separate paid add-on ($69/mo per slot)** — not included in any base plan. If you build campaigns with LinkedIn steps but haven't purchased the add-on, those steps won't execute. Budget accordingly.
2. **OAuth access token expires in 1 hour** — your integration must handle token refresh. Exchange `client_id` + `client_secret` for a new `access_token` before the old one expires. Failing to refresh causes silent API failures.
3. **V1 vs V2 API endpoints** — Snov.io has both V1 and V2 API endpoints. Some features are only available on V2. Check which version supports the endpoint you need before building integrations.
4. **Credit costs vary by action** — email finds, verifications, and LinkedIn enrichments each consume different credit amounts. A domain search with many results can burn through credits quickly. Always check your balance via the Account endpoint and use email count checks before bulk domain searches.
5. **Warmup slots are limited on lower plans** — Starter plan includes only 3 warmup slots. If you have more than 3 sending mailboxes on Starter, upgrade to Pro S or higher for unlimited warmup. Running campaigns from un-warmed mailboxes damages sender reputation.

## Step 5 — Related skills

- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-enrich` — Enrich contacts with emails/phones before importing into Snov.io
- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Snov.io campaigns)
- `/sales-prospect-list` — Build prospect lists to import into Snov.io
- `/sales-email-tracking` — Email tracking strategy and best practices
- `/sales-integration` — Connect Snov.io to other tools via webhooks, Zapier, Make, or API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Finding and verifying emails for a target company
**User says**: "I need to find email addresses for decision-makers at Acme Corp using Snov.io and verify them before outreach."
**Skill does**:
1. Runs an email count check on acmecorp.com to estimate available contacts and credit cost
2. Performs a domain search to retrieve all known prospects at the domain
3. Uses name + domain search for any specific contacts not found in the domain search
4. Runs bulk verification on all found emails — filters to "valid" status only
5. Explains credit consumption for each step and recommends checking balance
**Result**: User has a verified list of decision-maker emails at Acme Corp, ready for campaign import

### Example 2: Setting up a multichannel drip campaign with LinkedIn
**User says**: "How do I create a campaign in Snov.io that combines email follow-ups with LinkedIn connection requests?"
**Skill does**:
1. Confirms the user has the LinkedIn Automation add-on ($69/mo) — required for LinkedIn steps
2. Walks through creating a new drip campaign with an initial email step
3. Adds a LinkedIn connection request step triggered by non-engagement (e.g., no open after 3 days)
4. Configures follow-up email steps with A/B testing on subject lines
5. Sets up sentiment analysis on replies and auto-stop on positive responses
**Result**: User has a multichannel campaign with email and LinkedIn steps, conditional logic, A/B testing, and automated reply handling

### Example 3: Integrating Snov.io with HubSpot via API
**User says**: "I want to automatically push verified leads from Snov.io into HubSpot using the API."
**Skill does**:
1. Explains Snov.io's OAuth 2.0 authentication — exchange client_id + client_secret for a 1-hour access token
2. Shows how to use the Email Finder and Verifier endpoints to find and validate contacts
3. Walks through using webhook callbacks on async finder endpoints to receive results
4. Recommends using the native HubSpot integration for direct sync, or Zapier/Make for custom workflows
5. Warns about the 60 req/min rate limit and 1-hour token expiry for custom API integrations
**Result**: User understands their integration options — native HubSpot sync for simplicity, or custom API pipeline for full control — with proper auth and rate limit handling

## Troubleshooting

### High bounce rate on campaigns
**Symptom**: Campaign bounce rate above 3%, damaging sender reputation
**Cause**: Sending to unverified or stale email addresses, or sending to catch-all domains without caution
**Solution**: Always verify emails before adding to campaigns — only send to "valid" status. Re-verify lists older than 3 months. For catch-all domains, consider a test send to one address before bulk outreach. Enable email warmup on all sending mailboxes. Check your deliverability score before launching. If bounce rate is already high, pause the campaign, clean your list, and run warmup-only for 2 weeks before relaunching. See `/sales-deliverability` for a full diagnosis framework.

### API authentication failures
**Symptom**: API requests returning 401 Unauthorized or empty responses after working initially
**Cause**: OAuth access token expired (1-hour lifespan) and was not refreshed
**Solution**: Snov.io's OAuth tokens expire after 1 hour. Implement automatic token refresh in your integration — before each API call, check if the token is near expiry and request a new one using your client_id and client_secret. Store the token expiry timestamp and refresh proactively (e.g., at 50 minutes). Do not hardcode tokens. If using webhooks on async endpoints, ensure your callback server is accessible and responding with 200 OK.

### Credits running out quickly
**Symptom**: Credit balance depleting faster than expected, blocking email finder and verification operations
**Cause**: Domain searches on large companies consuming many credits per search, or running verification on already-verified lists
**Solution**: Always run an email count check before domain searches — if a domain has thousands of emails, a single search consumes credits for each result. Use name + domain search for targeted lookups instead of broad domain searches. Avoid re-verifying emails that were verified recently (within 3 months). Monitor your credit balance via the Account API endpoint. Consider upgrading to a higher plan if your prospecting volume consistently exceeds your credit allocation. Track credit usage per campaign to forecast monthly needs.
