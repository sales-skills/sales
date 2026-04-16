---
name: sales-hunter
description: "Hunter.io platform help — Domain Search, Email Finder, Email Verifier, Campaigns, Discover, Signals, TechLookup, Leads, browser extension, API, integrations, MCP server. Use when email addresses are bouncing, need to find emails for a domain, Hunter verification results seem wrong, campaign sequences aren't sending, Discover or Signals data looks incomplete, integrations aren't syncing, or API calls aren't returning expected data. Do NOT use for building prospect lists (use /sales-prospect-list), designing cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), or enriching contacts across multiple tools (use /sales-enrich)."
argument-hint: "[describe what you need help with in Hunter.io]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, verification, platform]
github: "https://github.com/hunter-io"
---
# Hunter.io Platform Help

Help the user with Hunter.io platform questions — from finding and verifying emails through campaign setup, Discover, Signals, TechLookup, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Hunter.io do you need help with?**
   - A) Domain Search — find all emails at a company
   - B) Email Finder — find a specific person's email
   - C) Email Verifier — verify email deliverability
   - D) Campaigns — cold email sequences and follow-ups
   - E) Discover — find companies by industry, size, location, technology
   - F) Signals — buying intent and company change alerts
   - G) TechLookup — find companies using specific technologies
   - H) Leads — managing lead lists
   - I) Browser Extension — finding emails while browsing
   - J) API — automation, integrations, programmatic access
   - K) Integrations — HubSpot, Salesforce, Pipedrive, Zapier, Google Sheets
   - L) Admin — billing, credits, plan features
   - M) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Marketer
   - E) Admin / IT
   - F) Founder / solo seller
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- List building / prospecting → `/sales-prospect-list`
- Contact enrichment / data hygiene → `/sales-enrich`
- Cadence strategy / sequence design → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Tool integration architecture → `/sales-integration`
- Buying signals strategy → `/sales-intent`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Hunter.io platform reference

Provide module-by-module guidance based on the user's area:

### Domain Search
- **What it is**: Find all email addresses associated with a domain — returns names, titles, departments, email type (personal vs generic), confidence score, and verification status
- **Key features**: Filter by department (executive, IT, finance, HR, etc.) and seniority. Returns the email pattern used by the company (e.g., `{first}.{last}@domain.com`).
- **Credit cost**: 1 credit per 10 results. Free searches return up to 10 results.
- **Best practices**: Use department filters to narrow to decision-makers. Check the email pattern to predict addresses for people not in the database. Always verify results before sending.

### Email Finder
- **What it is**: Find a specific person's email from their first name, last name, and company domain
- **Key features**: Returns the most likely email with a confidence score and verification status. Also returns sources where the email was found.
- **Credit cost**: 1 credit per successful find (no charge if no email found)
- **Best practices**: Provide the company domain, not the company name, for more accurate results. Use verification status to decide whether to send — "verified" emails are safe, "unverified" need additional validation.

### Email Verifier
- **What it is**: Verify whether an email address is deliverable — checks format, domain, MX records, and SMTP response
- **Verification statuses**: valid (safe to send), invalid (don't send), accept_all (use with caution — the server accepts everything), webmail (personal address), disposable (temporary address), unknown (couldn't determine)
- **Credit cost**: 1 credit per verification
- **Bulk verification**: Upload a CSV list for batch verification. Async processing — results available when complete.
- **Best practices**: Verify all emails before cold campaigns. Remove invalid and disposable addresses. Monitor accept_all addresses for bounces after sending.

### Campaigns
- **What it is**: Cold email sequences with automated follow-ups, scheduling, and tracking — built into Hunter
- **Key features**: Multi-step sequences, A/B testing, link tracking, open tracking, custom tracking domain, scheduling, review queue, unified inbox
- **Campaign flow**: Create campaign → add recipients (from leads, CSV, or Domain Search results) → write email steps with follow-ups → set schedule → launch
- **Sending**: Sends from your connected Gmail or Outlook account (not a third-party server)
- **Follow-ups**: Time-based follow-ups that stop when the recipient replies
- **Tracking**: Open and click tracking with optional custom tracking domain
- **Review queue**: Preview and edit individual emails before they send (available on Growth+ plans)
- **Sender limits**: Starter = 3 senders, Growth = 15, Scale = 40, Enterprise = unlimited
- **Best practices**: Connect your actual inbox for better deliverability. Use the review queue to personalize at scale. Set up a custom tracking domain. Keep initial emails under 125 words.

### Discover
- **What it is**: Company search engine — find companies by industry, size, location, and technology
- **Key features**: Filter by employee count, industry, location, technology used, and more. Returns company domain, description, and social profiles.
- **Use case**: Build targeted account lists for outbound — find companies matching your ICP, then use Domain Search to find contacts at each.
- **Credit cost**: Free to search. Credits consumed when you use Domain Search or Email Finder on results.

### Signals
- **What it is**: Buying intent and company change alerts — notifies you when target companies show signs of readiness to buy
- **Signal types**: Company news, funding events, leadership changes, hiring activity, technology changes
- **Setup**: Configure signal criteria (industries, company size, technologies) and Hunter monitors for matching events
- **Use case**: Trigger timely outreach when a signal fires — e.g., a target company just raised funding or hired a new VP Sales
- **Best practices**: Combine Signals with Discover to build dynamic prospecting lists that update as new signals appear. Act on signals within 7 days for maximum relevance.

### TechLookup
- **What it is**: Find companies using specific technologies — search by technology name and get a list of domains using it
- **Use case**: Technographic prospecting — find companies using a competitor's product, a complementary tool, or a technology that signals fit for your product
- **Credit cost**: Free to search. Credits consumed when you use Domain Search or Email Finder on results.
- **Best practices**: Use for competitive displacement campaigns — find companies using your competitor, then outreach with a switching offer. Combine with company size/industry filters in Discover.

### Leads
- **What it is**: Built-in lead management — save, organize, and manage contacts found through Hunter
- **Key features**: Lead lists for organization, notes and tags, export to CSV, push to CRM via integrations
- **Workflow**: Find emails (Domain Search / Email Finder) → save to lead list → verify → push to CRM or add to Campaign
- **Best practices**: Create separate lead lists per campaign or ICP segment. Verify all leads before adding to campaigns.

### Browser Extension
- **What it is**: Chrome and Firefox extension that finds email addresses on any website you visit
- **Key features**: Shows all known emails for the domain you're browsing. One-click save to lead lists. Works on LinkedIn, company websites, and any page.
- **Credit cost**: Uses your account credits (same as web app)
- **Best practices**: Use while browsing LinkedIn to quickly find emails. Install for the whole team to speed up prospecting.

### Hunter.io data model

Core entities — understand these to navigate the UI and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Domain Search** | All emails at a company domain | Returns Emails with names, titles, departments |
| **Email** | A found or verified email address | Has confidence score, verification status, sources |
| **Lead** | A saved contact in your Hunter account | Belongs to Lead Lists, can be added to Campaigns |
| **Lead List** | An organized collection of leads | Contains Leads, used for Campaign recipients |
| **Campaign** | A multi-step email sequence | Has Steps (emails), has Recipients (from Leads) |
| **Campaign Recipient** | A contact enrolled in a campaign | Has send status, open/click/reply tracking |

### API & Integrations

**For detailed API documentation including all endpoints, authentication, rate limits, and webhook event payloads, always consult `references/hunter-api-reference.md`.** Point the user to this file for the full endpoint catalog, request/response schemas, and rate limit details. Any API question should include a pointer to this reference file.

**Quick reference**: Base URL `https://api.hunter.io/v2/`, auth via `api_key` query parameter, `X-API-KEY` header, or `Authorization: Bearer` header. Rate limits: 150 req/min (Starter), 300 req/min (Growth), 600 req/min (Scale). Key capabilities: Domain Search, Email Finder, Email Verifier, Leads/Lists management, Campaigns management, TechLookup.

**MCP Server**: Hunter.io provides an official MCP server (`hunter-mcp`) for AI agent integration. Install via pip and configure with your API key. This allows AI agents to search for emails, verify addresses, and manage leads through the Model Context Protocol.

For broader integration architecture help beyond Hunter's native connectors (e.g., building multi-tool workflows, Zapier/Make recipes, or webhook pipelines), use `/sales-integration`.

### Native integrations
- **CRM**: HubSpot (push leads, sync activity), Salesforce (push leads, sync activity), Pipedrive (push leads)
- **Productivity**: Google Sheets (add-on for domain search, email finder, verifier in-spreadsheet)
- **Automation**: Zapier (triggers for new leads found; actions for domain search, email finder, verifier)
- **Browser**: Chrome extension, Firefox extension
- **AI/MCP**: Official MCP server for AI agent integration

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Hunter
2. **Configuration recommendations** — specific settings to change, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/hunter-api-reference.md`."

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't confuse Hunter Campaigns with dedicated outbound tools.** Hunter Campaigns is competent for simple cold email sequences, but it lacks multi-channel support (no phone/LinkedIn steps), advanced sender rotation, and deep A/B testing. For complex multi-channel cadences, use a dedicated tool (Mailshake, Lemlist, Smartlead) and use Hunter for the email finding/verification upstream.
- **Don't skip verification before campaigns.** Hunter's Domain Search and Email Finder return confidence scores, not guarantees. Always verify emails before adding them to campaigns — even within Hunter. A confidence score of 80% still means 1 in 5 could bounce.
- **Don't confuse credits across operations.** Domain Search, Email Finder, and Email Verifier all consume from the same credit pool. A workflow of "search domain → find emails → verify all" consumes credits at each step. Plan your credit budget for the full workflow, not just one step.
- **Don't assume Campaigns features are available on all plans.** Campaigns require Starter plan or above (not available on Free). Review queue is Growth+ only. Sender limits vary by plan (3/15/40/unlimited). Check the user's plan before recommending features.
- **Don't use Hunter as a standalone outbound platform for high-volume.** Hunter excels at email finding and verification. Its Campaigns feature is best for low-to-medium volume (under 500 emails/day). For high-volume outbound, use Hunter for finding/verifying and export to a dedicated sending tool.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Hunter Campaigns)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-prospect-list` — Build prospect lists using Hunter Discover and TechLookup
- `/sales-enrich` — Enrich contacts with verified emails/phones across multiple providers
- `/sales-intent` — Interpret buying signals (Hunter Signals + other intent providers)
- `/sales-integration` — Connect Hunter to other tools via API, Zapier, or native integrations
- `/sales-mailshake` — Mailshake platform help (if using Mailshake for sending after Hunter finding)
- `/sales-smartlead` — Smartlead platform help (if using Smartlead for sending)
- `/sales-lemlist` — Lemlist platform help (if using Lemlist for sending)
- `/sales-tomba` — Tomba platform help (alternative email finder/verifier)
- `/sales-prospeo` — Prospeo platform help (alternative enrichment/verification)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Finding emails at a target company
**User says**: "I need to find the email addresses of the engineering team at Stripe."
**Skill does**:
1. Recommends Domain Search on `stripe.com` with department filter set to "engineering"
2. Explains the credit cost (1 per 10 results) and how to paginate for more
3. Advises checking the email pattern (e.g., `first@stripe.com`) to predict emails for people not in the database
4. Recommends verifying all found emails before outreach
5. Suggests saving results to a Lead List for organized follow-up
**Result**: User has a verified list of engineering contacts at Stripe, saved to a lead list

### Example 2: Setting up a cold email campaign
**User says**: "I want to set up a campaign in Hunter to reach 200 prospects."
**Skill does**:
1. Walks through creating a Campaign with initial email + 2 follow-ups
2. Recommends connecting Gmail/Outlook for inbox-native sending
3. Advises setting up a custom tracking domain for link/open tracking
4. Explains the review queue (Growth+ plan) for personalizing at scale
5. Sets scheduling to send during business hours, spaced 3-4 days apart
6. Recommends verifying all 200 leads before adding as recipients
**Result**: User has a 3-step campaign configured with tracking, scheduling, and verified recipients

### Example 3: Using the API to automate email finding
**User says**: "I want to use the Hunter API to find emails for a list of 500 companies."
**Skill does**:
1. Points to `references/hunter-api-reference.md` for full API docs
2. Explains the Domain Search endpoint (`GET /domain-search`) — pass domain, get emails
3. Shows authentication (api_key parameter or X-API-KEY header)
4. Warns about rate limits (150-600 req/min depending on plan) and recommends batching
5. Suggests using Email Verifier endpoint on results before sending
6. Calculates credit cost: ~50-100 credits for domain search + verification credits per email
**Result**: User knows the endpoints, auth method, rate limits, and credit planning for bulk automation

## Troubleshooting

### Low confidence scores on Email Finder
**Symptom**: Email Finder returns results with confidence scores below 50%
**Cause**: Limited data sources for that person/domain, or the company uses an unusual email pattern
**Solution**: Check the email pattern for the domain via Domain Search first. If the pattern is known (e.g., `first.last@domain.com`), you can construct the email manually and verify it. Use the Email Verifier to check deliverability regardless of confidence score.

### Campaign emails not being delivered
**Symptom**: Campaign shows emails sent but recipients report not receiving them
**Cause**: Missing domain authentication (SPF/DKIM/DMARC), no custom tracking domain, or sending too fast from a new account
**Solution**: Verify SPF/DKIM/DMARC are configured for your sending domain. Set up a custom tracking domain in Campaign settings. If using a new email account, warm it up first (start with 10-20 emails/day). See `/sales-deliverability` for a full diagnosis framework.

### Credits running out mid-month
**Symptom**: Credit balance depleted before the billing cycle resets
**Cause**: Domain Search on large companies consuming many credits (1 per 10 results), or verifying large lists
**Solution**: Use department and seniority filters on Domain Search to reduce results. Only verify emails you'll actually contact. Use the `limit` parameter in API calls to cap results. Consider upgrading plan if consistently hitting limits.
