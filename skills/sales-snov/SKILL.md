---
name: sales-snov
description: "Snov.io platform help — email finder, email verifier, multichannel campaigns (email + LinkedIn), LinkedIn automation, sales CRM, email warmup, deliverability check, email tracker, AI email writer, prospect management. Use when Snov.io email finder returns no results, campaign reply rates are low, email warmup scores aren't improving, LinkedIn automation isn't sending connection requests, email verification is flagging too many addresses, or the Snov.io API isn't working as expected. Do NOT use for general deliverability strategy (use /sales-deliverability), enrichment strategy (use /sales-enrich), cadence strategy (use /sales-cadence), or prospect list building strategy (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in Snov.io]"
license: MIT
version: 1.0.0
tags: [sales, outbound, enrichment, email-finder, platform]
---
# Snov.io Platform Help

Help the user with Snov.io platform questions — from email finder and verification through multichannel campaigns, LinkedIn automation, sales CRM, email warmup, deliverability checks, email tracker, AI email writer, prospect management, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

## Gotchas

> Best-effort from research — verify details against current Snov.io documentation.

1. **LinkedIn automation is a separate paid add-on ($69/mo per slot)** — not included in any base plan. If you build campaigns with LinkedIn steps but haven't purchased the add-on, those steps won't execute. Budget accordingly.
2. **OAuth access token expires in 1 hour** — your integration must handle token refresh. Exchange `client_id` + `client_secret` for a new `access_token` before the old one expires. Failing to refresh causes silent API failures.
3. **V1 vs V2 API endpoints** — Snov.io has both V1 and V2 API endpoints. Some features are only available on V2. Check which version supports the endpoint you need before building integrations.
4. **Credit costs vary by action** — email finds, verifications, and LinkedIn enrichments each consume different credit amounts. A domain search with many results can burn through credits quickly. Always check your balance via the Account endpoint and use email count checks before bulk domain searches.
5. **Warmup slots are limited on lower plans** — Starter plan includes only 3 warmup slots. If you have more than 3 sending mailboxes on Starter, upgrade to Pro S or higher for unlimited warmup. Running campaigns from un-warmed mailboxes damages sender reputation.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-enrich` — Enrich contacts with emails/phones before importing into Snov.io
- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Snov.io campaigns)
- `/sales-prospect-list` — Build prospect lists to import into Snov.io
- `/sales-email-tracking` — Email tracking strategy and best practices
- `/sales-integration` — Connect Snov.io to other tools via webhooks, Zapier, Make, or API
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
