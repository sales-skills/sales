# Reply.io Platform Guide

## Multichannel sequences
- **What it is**: A sequence in Reply.io is a multichannel outreach campaign — a series of automated steps across email, LinkedIn, calls, SMS, and WhatsApp
- **Conditional sequences**: Branching logic based on prospect behavior (opened, clicked, replied) or contact data (title, industry) — routes prospects down different paths automatically
- **Channels**: Email, LinkedIn (InMail, connection requests, profile views), calls, SMS, WhatsApp
- **Sequence builder**: Drag-and-drop step editor — add, reorder, and configure steps visually
- **A/B testing**: Test different message variants within any sequence step to optimize performance
- **Auto-pause triggers**: Sequence automatically pauses a contact on reply, meeting booked, or custom triggers you define
- **Sequence statuses**: Active, Paused, New, Archived
- **LinkedIn automation add-on**: $69/account — required for LinkedIn steps (connection requests, InMail, profile views). Not included in base Multichannel plan.
- **Calls/SMS add-on**: $29/account — required for phone and SMS steps. Not included in base plans.

## Jason AI SDR
- **What it is**: An autonomous AI agent that handles prospecting, outreach, and reply management end-to-end
- **How it works**: Trains on your business, product, and target audience. Finds leads from a 1B+ contact database, launches multichannel campaigns with personalized messages, and handles replies autonomously.
- **Reply handling**: Qualification questions, objection handling, meeting booking — all handled by AI
- **Language support**: Works 24/7 in 50+ languages
- **Pricing**: $139/user/month — separate plan tier, not an add-on to cheaper plans
- **Key limitation**: Jason AI is its own plan tier. You cannot add it to the Email Volume or Multichannel plans.

## B2B database & email finder
- **What it is**: Built-in prospecting database for finding contacts and companies
- **Database size**: 1B+ global contacts, 220M+ US contacts, 15M+ US companies
- **Chrome extension**: Find emails directly from LinkedIn profiles and company websites
- **Data credits**: Credits-based system — 200 free credits on all plans, additional credits on paid plans
- **Search filters**: Industry, company size, job title, location, technology stack
- **Best practices**: Verify emails before sequencing, use filters to narrow to your ICP, check credit balance before bulk searches

## Email warmup & deliverability
- **Built-in warmup**: Peer-to-peer warmup network (no free or temporary email accounts — real business mailboxes)
- **Domain health checker**: Dedicated tab in Reply.io to monitor domain reputation and configuration
- **Google Postmaster API**: Integration for monitoring spam rate, IP reputation, and domain reputation directly in Reply.io
- **Domain authentication**: SPF/DKIM/DMARC setup guidance built into the platform
- **Branded links**: Custom tracking domains to improve deliverability and brand trust
- **Warmup timeline**: 2-3 weeks recommended before sending cold sequences at full volume
- **Best practices**: Enable warmup immediately after connecting a new mailbox, monitor domain health weekly, keep spam complaint rate below 0.1%

## Unified inbox
- **What it is**: A single view for all conversations across all channels — email, LinkedIn, calls, SMS, WhatsApp
- **Key features**: Manage messages from sequences and team members in one place
- **Filters**: Filter by channel, sequence, contact status, team member
- **Best practices**: Check unified inbox daily, respond to warm replies within 1 hour, use filters to prioritize hot leads

## Analytics & reporting
- **Sequence performance**: Opens, clicks, replies, bounces broken down per step — identify which steps perform best
- **Channel efficiency**: Dashboard comparing performance across email, LinkedIn, calls, SMS, WhatsApp
- **Team analytics**: Individual rep performance and team-wide comparisons
- **Statistics API**: Programmatic access to email stats, call stats, LinkedIn stats, and click stats via API endpoints
- **Key metrics to track**: Reply rate (not just opens), positive reply rate, meetings booked per sequence, bounce rate (<3% target)

## Templates
- **What it is**: Reusable email and message templates for consistent outreach
- **Team sharing**: Share templates across your team for standardized messaging
- **Performance tracking**: Track which templates drive the highest reply rates
- **Best practices**: Create templates for common scenarios (intro, follow-up, breakup), A/B test template variants, update underperforming templates monthly

## Integrations
- **Salesforce**: Native 2-way sync — contacts/leads, emails, statuses, tasks, calls. Multiple default sync scenarios plus custom workflows. Real-time sync.
- **HubSpot**: Native 2-way sync with auto-sync every 2 hours — contacts, statuses, emails, calls, tasks. Configurable field mappings and filtering rules.
- **Pipedrive**: Native integration for contact and deal sync
- **Zapier/Make/n8n**: Automation connectors for non-native CRM connections and custom workflows
- **Copper, Close, Zendesk Sell**: Available via Zapier (no native integration)
- **Best practices**: Map Reply.io contact statuses to CRM stages before enabling sync, test with a small batch first, monitor sync logs for errors

## Reply.io data model

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

## API quick reference

For detailed API documentation including all endpoints, authentication, pagination, and webhook events, consult `references/reply-api-reference.md`.

- **Base URL**: `https://api.reply.io/v3` (V3 beta) / `https://api.reply.io/v1` and `/v2` (legacy, currently active)
- **Auth**: `X-API-Key` header, `api_key` query parameter, or JWT Bearer token
- **Pagination**: `top`/`skip` parameters (default 25, max 1000)
- **Errors**: RFC 9457 Problem Details format; HTTP 429 for rate limits
- **Key endpoints**: Sequences, Contacts, EmailAccounts, Templates, Tasks, Statistics, Reports, Webhooks, Lists, BlackList, BrandedLinks, Schedules
- **Note**: V3 is in beta (request access from Reply.io). V1/V2 are currently active and stable.

**Always reference `references/reply-api-reference.md`** when answering API questions — point the user to it for the full endpoint catalog, request/response details, and error handling.

## Native integrations

- **CRM**: Salesforce (native 2-way sync), HubSpot (native 2-way sync), Pipedrive (native)
- **Automation**: Zapier, Make, n8n (triggers and actions for sequences, contacts, replies)
- **Non-native CRM**: Copper, Close, Zendesk Sell (via Zapier)
- **AI**: Jason AI SDR (built-in autonomous agent)

## Pricing (as of 2026 — verify current pricing at reply.io)

| Plan | Price | Key features |
|------|-------|-------------|
| **Free** | $0 | AI sequence generator, Chrome extension, 200 data credits |
| **Email Volume** | ~$49/user/mo (annual) | Email-only sequences |
| **Multichannel** | ~$89/user/mo | All channels, unlimited contacts, 10 mailboxes/user |
| **AI SDR (Jason)** | ~$139/user/mo | Autonomous AI agent for full-cycle outreach |
| **Agency** | ~$166/mo | Unlimited clients and users |
| **LinkedIn add-on** | $69/account | LinkedIn automation (connection requests, InMail, profile views) |
| **Calls/SMS add-on** | $29/account | Phone dialer and SMS messaging |
