---
name: sales-reply
description: "Reply.io platform help — multichannel sequences (email, LinkedIn, calls, SMS, WhatsApp), Jason AI SDR, B2B database, email warmup, deliverability tools, unified inbox, analytics, Salesforce/HubSpot integration, agency features. Use when Reply.io emails are landing in spam, sequences aren't getting replies, Jason AI isn't handling responses correctly, warmup isn't improving sender reputation, or Reply.io data isn't syncing to your CRM. Do NOT use for general outbound cadence strategy (use /sales-cadence), cross-platform email deliverability (use /sales-deliverability), email tracking strategy (use /sales-email-tracking), building prospect lists (use /sales-prospect-list), or connecting Reply.io to other tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Reply.io]"
license: MIT
version: 1.0.0
tags: [sales, outbound, cold-email, sequences, platform]
github: "https://github.com/replyio"
---
# Reply.io Platform Help

Help the user with Reply.io platform questions — from multichannel sequence setup and Jason AI SDR through B2B database, email warmup, deliverability, unified inbox, analytics, integrations, and agency features.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Reply.io do you need help with?**
   - A) Sequences — creating, managing, or optimizing multichannel sequences
   - B) Jason AI SDR — configuring the autonomous AI agent for prospecting and reply handling
   - C) Deliverability — email warmup, domain health, SPF/DKIM/DMARC, branded links
   - D) Integrations — Salesforce, HubSpot, Pipedrive, Zapier, Make, n8n
   - E) Analytics — sequence performance, channel efficiency, team reporting
   - F) Agency — managing multiple clients, agency-specific features
   - G) B2B Database — finding contacts, email finder, Chrome extension, data credits
   - H) Unified Inbox — managing conversations across channels
   - I) Templates — creating, sharing, and tracking message templates
   - J) API — automation, programmatic access, webhooks
   - K) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Admin / IT
   - E) Agency owner / operator
   - F) Founder / solo seller
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cadence strategy / sequence design → `/sales-cadence`
- Cross-platform email deliverability → `/sales-deliverability`
- Email tracking strategy → `/sales-email-tracking`
- List building / prospecting strategy → `/sales-prospect-list`
- Connecting tools / integration architecture → `/sales-integration`
- Agency outbound strategy → `/sales-agency-outbound`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Reply.io platform reference

Provide module-by-module guidance based on the user's area:

### Multichannel sequences
- **What it is**: A sequence in Reply.io is a multichannel outreach campaign — a series of automated steps across email, LinkedIn, calls, SMS, and WhatsApp
- **Conditional sequences**: Branching logic based on prospect behavior (opened, clicked, replied) or contact data (title, industry) — routes prospects down different paths automatically
- **Channels**: Email, LinkedIn (InMail, connection requests, profile views), calls, SMS, WhatsApp
- **Sequence builder**: Drag-and-drop step editor — add, reorder, and configure steps visually
- **A/B testing**: Test different message variants within any sequence step to optimize performance
- **Auto-pause triggers**: Sequence automatically pauses a contact on reply, meeting booked, or custom triggers you define
- **Sequence statuses**: Active, Paused, New, Archived
- **LinkedIn automation add-on**: $69/account — required for LinkedIn steps (connection requests, InMail, profile views). Not included in base Multichannel plan.
- **Calls/SMS add-on**: $29/account — required for phone and SMS steps. Not included in base plans.

### Jason AI SDR
- **What it is**: An autonomous AI agent that handles prospecting, outreach, and reply management end-to-end
- **How it works**: Trains on your business, product, and target audience. Finds leads from a 1B+ contact database, launches multichannel campaigns with personalized messages, and handles replies autonomously.
- **Reply handling**: Qualification questions, objection handling, meeting booking — all handled by AI
- **Language support**: Works 24/7 in 50+ languages
- **Pricing**: $139/user/month — separate plan tier, not an add-on to cheaper plans
- **Key limitation**: Jason AI is its own plan tier. You cannot add it to the Email Volume or Multichannel plans.

### B2B database & email finder
- **What it is**: Built-in prospecting database for finding contacts and companies
- **Database size**: 1B+ global contacts, 220M+ US contacts, 15M+ US companies
- **Chrome extension**: Find emails directly from LinkedIn profiles and company websites
- **Data credits**: Credits-based system — 200 free credits on all plans, additional credits on paid plans
- **Search filters**: Industry, company size, job title, location, technology stack
- **Best practices**: Verify emails before sequencing, use filters to narrow to your ICP, check credit balance before bulk searches

### Email warmup & deliverability
- **Built-in warmup**: Peer-to-peer warmup network (no free or temporary email accounts — real business mailboxes)
- **Domain health checker**: Dedicated tab in Reply.io to monitor domain reputation and configuration
- **Google Postmaster API**: Integration for monitoring spam rate, IP reputation, and domain reputation directly in Reply.io
- **Domain authentication**: SPF/DKIM/DMARC setup guidance built into the platform
- **Branded links**: Custom tracking domains to improve deliverability and brand trust
- **Warmup timeline**: 2-3 weeks recommended before sending cold sequences at full volume
- **Best practices**: Enable warmup immediately after connecting a new mailbox, monitor domain health weekly, keep spam complaint rate below 0.1%

### Unified inbox
- **What it is**: A single view for all conversations across all channels — email, LinkedIn, calls, SMS, WhatsApp
- **Key features**: Manage messages from sequences and team members in one place
- **Filters**: Filter by channel, sequence, contact status, team member
- **Best practices**: Check unified inbox daily, respond to warm replies within 1 hour, use filters to prioritize hot leads

### Analytics & reporting
- **Sequence performance**: Opens, clicks, replies, bounces broken down per step — identify which steps perform best
- **Channel efficiency**: Dashboard comparing performance across email, LinkedIn, calls, SMS, WhatsApp
- **Team analytics**: Individual rep performance and team-wide comparisons
- **Statistics API**: Programmatic access to email stats, call stats, LinkedIn stats, and click stats via API endpoints
- **Key metrics to track**: Reply rate (not just opens), positive reply rate, meetings booked per sequence, bounce rate (<3% target)

### Templates
- **What it is**: Reusable email and message templates for consistent outreach
- **Team sharing**: Share templates across your team for standardized messaging
- **Performance tracking**: Track which templates drive the highest reply rates
- **Best practices**: Create templates for common scenarios (intro, follow-up, breakup), A/B test template variants, update underperforming templates monthly

### Integrations
- **Salesforce**: Native 2-way sync — contacts/leads, emails, statuses, tasks, calls. Multiple default sync scenarios plus custom workflows. Real-time sync.
- **HubSpot**: Native 2-way sync with auto-sync every 2 hours — contacts, statuses, emails, calls, tasks. Configurable field mappings and filtering rules.
- **Pipedrive**: Native integration for contact and deal sync
- **Zapier/Make/n8n**: Automation connectors for non-native CRM connections and custom workflows
- **Copper, Close, Zendesk Sell**: Available via Zapier (no native integration)
- **Best practices**: Map Reply.io contact statuses to CRM stages before enabling sync, test with a small batch first, monitor sync logs for errors

### Reply.io data model

Core entities — understand these to navigate the UI and work with the API:

| Object | Description | Key fields |
|--------|-------------|------------|
| **Sequence** | Multichannel outreach campaign | id, teamId, ownerId, name, status (Active/Paused/New/Archived), created, isArchived |
| **Contact** | Prospect record | id, email, firstName, lastName, company, title, status |
| **Sequence Step** | Individual step in a sequence | id, sequenceId, type (email/LinkedIn/call/SMS/WhatsApp), variant, order |
| **Email Account** | Connected sending mailbox | id, email, provider, status |
| **Template** | Reusable message template | id, name, body, subject |
| **Task** | Action item for rep | id, type, contactId, dueDate, status |
| **List** | Contact grouping | id, name, contactCount |
| **Webhook** | Event subscription | id, url, events, status |
| **Schedule** | Sending schedule config | id, name, timezone, days, hours |

### API quick reference

For detailed API documentation including all endpoints, authentication, pagination, and webhook events, consult `references/reply-api-reference.md`.

- **Base URL**: `https://api.reply.io/v3` (V3 beta) / `https://api.reply.io/v1` and `/v2` (legacy, currently active)
- **Auth**: `X-API-Key` header, `api_key` query parameter, or JWT Bearer token
- **Pagination**: `top`/`skip` parameters (default 25, max 1000)
- **Errors**: RFC 9457 Problem Details format; HTTP 429 for rate limits
- **Key endpoints**: Sequences, Contacts, EmailAccounts, Templates, Tasks, Statistics, Reports, Webhooks, Lists, BlackList, BrandedLinks, Schedules
- **Note**: V3 is in beta (request access from Reply.io). V1/V2 are currently active and stable.

**Always reference `references/reply-api-reference.md`** when answering API questions — point the user to it for the full endpoint catalog, request/response details, and error handling.

### Native integrations

- **CRM**: Salesforce (native 2-way sync), HubSpot (native 2-way sync), Pipedrive (native)
- **Automation**: Zapier, Make, n8n (triggers and actions for sequences, contacts, replies)
- **Non-native CRM**: Copper, Close, Zendesk Sell (via Zapier)
- **AI**: Jason AI SDR (built-in autonomous agent)

### Pricing (as of 2026 — verify current pricing at reply.io)

| Plan | Price | Key features |
|------|-------|-------------|
| **Free** | $0 | AI sequence generator, Chrome extension, 200 data credits |
| **Email Volume** | ~$49/user/mo (annual) | Email-only sequences |
| **Multichannel** | ~$89/user/mo | All channels, unlimited contacts, 10 mailboxes/user |
| **AI SDR (Jason)** | ~$139/user/mo | Autonomous AI agent for full-cycle outreach |
| **Agency** | ~$166/mo | Unlimited clients and users |
| **LinkedIn add-on** | $69/account | LinkedIn automation (connection requests, InMail, profile views) |
| **Calls/SMS add-on** | $29/account | Phone dialer and SMS messaging |

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Reply.io
2. **Configuration recommendations** — specific settings to change, with navigation paths in the Reply.io UI
3. **Recommended setup order**: Connect mailbox -> Enable warmup -> Wait 2-3 weeks -> Build sequence -> Add contacts -> Launch
4. **Verification steps** — how to confirm the change worked (check domain health tab, test send, verify sync logs)
5. **For API questions** — always include a pointer: "For the full endpoint catalog, authentication details, and error handling, see `references/reply-api-reference.md`."

## Gotchas

> Best-effort from research — verify against current Reply.io documentation for the latest behavior.

- **Don't skip warmup.** Reply.io has built-in peer-to-peer warmup, but you must enable it and wait 2-3 weeks before sending cold sequences at full volume. Skipping warmup is the #1 cause of deliverability issues on new accounts.
- **LinkedIn automation is a paid add-on ($69/account).** It's not included in the Multichannel plan base price. If you build a sequence with LinkedIn steps but haven't purchased the add-on, those steps will fail silently or be skipped.
- **Calls/SMS is also a paid add-on ($29/account).** Plan your multichannel sequence budget accordingly — a "full multichannel" setup with LinkedIn + Calls/SMS costs $89 + $69 + $29 = $187/user/mo.
- **Jason AI SDR is a separate plan tier ($139/user/mo), not a feature add-on.** You cannot add Jason AI to the Email Volume or Multichannel plans. It's its own plan with different capabilities.
- **V3 API is in beta.** Most integrations and documentation still reference V1/V2 endpoints. Check which API version your integration targets before building — V3 endpoints may change without notice.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Reply.io sequences)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-email-tracking` — Email tracking strategy and best practices
- `/sales-prospect-list` — Build prospect lists to import into Reply.io
- `/sales-integration` — Connect Reply.io to other tools via webhooks, Zapier, Make, or API
- `/sales-agency-outbound` — Agency outbound strategy for managing multiple clients
- `/sales-enrich` — Enrich contacts with emails/phones before importing
- `/sales-apollo` — Apollo.io platform help (if using Apollo instead of Reply.io)
- `/sales-salesloft` — Salesloft platform help (if using Salesloft instead of Reply.io)
- `/sales-mailshake` — Mailshake platform help (if using Mailshake instead of Reply.io)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Basic sequence setup
**User says**: "How do I set up a multichannel sequence in Reply.io with email and LinkedIn steps?"
**Skill does**:
1. Walks through creating a new sequence in the sequence builder
2. Explains how to add email steps (subject, body, delay between steps) and LinkedIn steps (connection request, InMail, profile view)
3. Notes that LinkedIn automation requires the $69/account add-on
4. Explains conditional branching — e.g., if prospect opens email, send LinkedIn connection request; if not, send follow-up email
5. Covers A/B testing within steps and auto-pause triggers
**Result**: User has a multichannel sequence configured with email and LinkedIn steps, understands add-on costs, and knows how to use branching logic

### Example 2: Jason AI configuration
**User says**: "How do I set up Jason AI to handle my outbound prospecting?"
**Skill does**:
1. Confirms the user is on the AI SDR plan ($139/user/mo) — Jason AI is not available on cheaper plans
2. Walks through training Jason AI on business context, product, and target audience
3. Explains how Jason AI finds leads from the 1B+ database, launches campaigns, and handles replies
4. Covers reply handling capabilities: qualification, objection handling, meeting booking
5. Sets expectations: Jason AI works 24/7 but benefits from periodic review and feedback
**Result**: User has Jason AI configured and understands how to train it, monitor its performance, and when to intervene

### Example 3: Salesforce integration setup
**User says**: "How do I connect Reply.io to Salesforce for 2-way sync?"
**Skill does**:
1. Walks through the native Salesforce integration setup in Reply.io settings
2. Explains default sync scenarios: contacts/leads, emails, statuses, tasks, calls
3. Covers custom workflow configuration for non-default sync rules
4. Warns about field mapping — map Reply.io contact statuses to Salesforce stages before enabling sync
5. Recommends testing with a small batch before enabling full sync
**Result**: User has Salesforce connected with appropriate sync rules and field mappings configured

## Troubleshooting

### Emails landing in spam
**Symptom**: Low inbox placement, recipients reporting emails in spam folder
**Cause**: Warmup not completed, missing domain authentication, or poor sender reputation
**Solution**: Check the domain health tab in Reply.io. Verify SPF/DKIM/DMARC are configured correctly. Enable built-in warmup and wait 2-3 weeks before full-volume sending. Check Google Postmaster integration for spam rate (keep below 0.1%). Set up branded links (custom tracking domain) to avoid generic tracking domain flags. See `/sales-deliverability` for a full diagnosis framework.

### Low reply rates
**Symptom**: Sequence reply rates below 2-3%
**Cause**: Poor targeting, weak messaging, wrong channel mix, or sending to unverified contacts
**Solution**: Review sequence analytics per step — identify where prospects drop off. A/B test subject lines and message body. Check if LinkedIn steps are executing (requires $69 add-on). Verify contact data quality — bounces above 3% indicate bad data. Consider adding conditional branches to route non-responsive prospects to different channels. Use `/sales-cadence` for cadence strategy optimization.

### Salesforce sync not working
**Symptom**: Contacts or activities not syncing between Reply.io and Salesforce
**Cause**: Integration misconfigured, field mapping errors, or sync paused
**Solution**: Check integration settings in Reply.io — verify the Salesforce connection is active. Review sync logs for error messages. Confirm field mappings are correct (Reply.io contact fields must map to valid Salesforce fields). Check that sync scenarios are enabled for the data types you expect (contacts, emails, tasks, calls). Test with a single contact before troubleshooting bulk sync issues.
