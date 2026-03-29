---
name: sales-integration
description: "Connect sales tools with webhooks, Zapier/Make, native integrations, and custom API pipelines — CRM sync, event triggers, data mapping, and error handling. Use when connecting Mailshake/Apollo/Salesloft to CRM, setting up webhook pipelines, building Zapier/Make automations for sales workflows, syncing data between tools, or troubleshooting integration issues. Do NOT use for Qwilr-specific automations (use /sales-qwilr-automation), general CRM platform config (use /sales-apollo or /sales-salesloft), or marketing automation flows (use /email-sequence)."
argument-hint: "[describe source tool, destination tool, trigger event, and desired action]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Connect Sales Tools

Help the user design and implement integrations between sales tools — from choosing the right integration method through trigger/action design, field mapping, and error handling. This skill covers webhooks, Zapier/Make, native integrations, and custom API pipelines.

## Step 1 — Gather context

Ask the user:

1. **What are you connecting?**
   - Source tool (where the event happens): Mailshake, Apollo, Salesloft, Smartlead, Lemlist, Yesware, Groove.cm, Mixmax, Reply.io, Woodpecker, Hunter.io, Seismic, Tomba, Prospeo, Seamless.AI, SafetyMails, HubSpot, Salesforce, Qwilr, other
   - Destination tool (where the action should happen): Salesforce, HubSpot, Slack, Pipedrive, other
   - Is this one-way or bidirectional?

2. **What should trigger the integration?**
   - A) Email reply received
   - B) New lead captured
   - C) Meeting booked
   - D) Deal stage changed
   - E) Contact created/updated
   - F) Sequence/cadence completed
   - G) Form submission
   - H) Custom event — describe it

3. **What should happen when triggered?**
   - A) Create a record (contact, task, deal, activity)
   - B) Update a record (field change, stage change, owner change)
   - C) Send a notification (Slack, email, SMS)
   - D) Enroll in a sequence/cadence
   - E) Multiple actions — describe

4. **What's your technical comfort level?**
   - A) No-code — Zapier, Make, native integrations only
   - B) Low-code — comfortable with basic API calls, can follow docs
   - C) Code — can build custom integrations with API + webhooks

5. **What's your current stack?** (list all sales/marketing/CRM tools in use)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Integration architecture

Choose the right integration method based on complexity and technical requirements.

### Decision matrix

| Method | Best for | Technical skill | Cost | Reliability |
|--------|----------|----------------|------|-------------|
| **Native integration** | CRM sync, built-in connectors | None | Free (included) | High |
| **Zapier / Make** | Multi-step workflows, no-code | Low | $20-100/mo | High |
| **Webhooks + handler** | Real-time events, custom logic | Medium | Free-low | Medium-high |
| **Custom API pipeline** | Complex transformations, high volume | High | Varies | Depends on implementation |

### Native integrations — always check first

Before building anything custom, check if a native integration exists:

| Tool pair | Native integration? | What it does |
|-----------|---------------------|--------------|
| Mailshake → Salesforce | Yes | Push leads, sync activity |
| Mailshake → HubSpot | Yes | Push leads, sync activity |
| Mailshake → Pipedrive | Yes | Push leads |
| Apollo → Salesforce | Yes (bi-directional) | Full contact/account/deal sync |
| Apollo → HubSpot | Yes (bi-directional) | Full contact/account/deal sync |
| Salesloft → Salesforce | Yes (bi-directional) | Contact/account/activity sync |
| Salesloft → HubSpot | Yes | Activity sync |
| Smartlead → HubSpot | Yes (native) | Push leads, sync activity |
| Smartlead → Salesforce | Via OutboundSync (third-party) | Lead and activity sync |
| Smartlead → Clay | Yes (native) | Enrichment pipeline |
| Lemlist → HubSpot | Yes (native) | Push leads, sync activity |
| Lemlist → Salesforce | Yes (native, 2-way) | Lead and activity sync |
| Lemlist → Pipedrive | Yes (native) | Push leads |
| Yesware → Salesforce | Yes (Enterprise plan, bi-directional) | Email/calendar/activity sync, inbox sidebar |
| Yesware → Gmail | Yes (Chrome extension) | Email tracking, templates, campaigns |
| Yesware → Outlook | Yes (add-in) | Email tracking, templates, campaigns |
| Yesware → Zoom | Yes (native) | Auto-generate meeting links in scheduler |
| Yesware → LinkedIn | Yes (native) | Prospect insights from inbox |
| Mixmax → Salesforce | Yes (Growth+CRM plan) | Inbox sidebar, auto-create leads, activity sync, advanced rules |
| Mixmax → HubSpot | Yes (Growth plan) | Activity sync, list import, sidebar |
| Mixmax → Slack | Yes (native) | Real-time tracking notifications |
| Mixmax → LinkedIn Sales Navigator | Yes (native) | InMail and connection requests in sequences |
| Mixmax → Zoom | Yes (native) | Auto-generate meeting links |
| Reply.io → Salesforce | Yes (native, bi-directional) | Contact/lead sync, email/call/task activity, status sync, custom workflows |
| Reply.io → HubSpot | Yes (native, bi-directional) | Contact sync (auto-sync every 2h), email/call/task activity, status sync, field mappings |
| Reply.io → Pipedrive | Yes (native) | Contact sync, activity logging |
| Woodpecker → HubSpot | Yes (native, with API add-on) | Contact sync, activity logging, deal stage triggers |
| Woodpecker → Pipedrive | Yes (native) | Contact sync, activity logging |
| Woodpecker → Salesforce | Via Zapier | Contact sync, activity logging |
| Woodpecker → Clay | Yes (native) | Enrichment pipeline |
| Woodpecker → Calendly | Yes (native) | Meeting booking from campaigns |
| Qwilr → Salesforce | Yes | Proposal/quote sync — see `/sales-qwilr-automation` |
| Qwilr → HubSpot | Yes | Proposal/quote sync — see `/sales-qwilr-automation` |
| Seismic → Salesforce | Native | Content recommendations in SF, activity logging, LiveSend tracking, DSR engagement sync |
| Seismic → HubSpot | Native | Content sharing, engagement tracking, CRM data sync for LiveDocs |
| Seismic → Microsoft Dynamics | Native | Content access within Dynamics, activity logging |
| Seismic → Microsoft 365/Teams | Native | Content in Outlook/Teams, Aura AI copilot in Teams |
| Seismic → Slack | Native | Content search and sharing, Aura AI copilot |
| Seismic → Gong | Native | Call recordings access, conversation intelligence enrichment |
| Seismic → Salesloft | Native | Content insertion in sequences, engagement data |
| Seismic → Zoom | Native | Meeting recording, intelligence, content sharing |
| Tomba → HubSpot | Native | Enrich CRM contacts with Tomba email/enrichment data |
| Tomba → Salesforce | Via Zapier | Sync discovered contacts to Salesforce |
| Tomba → Pipedrive | Native | Sync findings to Pipedrive contacts |
| Tomba → Google Sheets | Native (add-on) | Domain search, email finder, verifier in-spreadsheet |
| Tomba → Zapier | Native | 8,000+ app connections — trigger on domain search, email find, enrichment |
| Tomba → Make | Native | Visual automation workflows with Tomba actions |
| Tomba → n8n | Native | Self-hosted automation with Tomba nodes |
| Hunter.io → HubSpot | Native | Push leads, sync activity |
| Hunter.io → Salesforce | Native | Push leads, sync activity |
| Hunter.io → Pipedrive | Native | Push leads |
| Hunter.io → Google Sheets | Native (add-on) | Domain search, email finder, verifier in-spreadsheet |
| Hunter.io → Zapier | Native | Triggers for new leads; actions for domain search, email finder, verifier |
| Prospeo → HubSpot | Native | Enrich CRM contacts with verified emails, phones, firmographic data |
| Prospeo → Salesforce | Native | Keep CRM data clean with enriched contacts and accounts |
| Prospeo → Clay | Native | Automate data enrichment in Clay workflows |
| Prospeo → Smartlead | Native | Push enriched leads to Smartlead campaigns |
| Prospeo → Instantly | Native | Push enriched leads to Instantly campaigns |
| Prospeo → Lemlist | Native | Push enriched leads to Lemlist sequences |
| Prospeo → Zapier | Native | Connect to 8,000+ apps for automated workflows |
| Prospeo → Make | Native | Visual automation workflows with Prospeo actions |
| Prospeo → n8n | Native (community node) | `@prospeo/n8n-nodes-prospeo` for self-hosted automation |
| Seamless.AI → Salesforce | Native (bi-directional) | Push contacts, enrich CRM records, sync activity |
| Seamless.AI → HubSpot | Native (bi-directional) | Push contacts, enrich CRM records, sync activity |
| Seamless.AI → Microsoft Dynamics | Native | Push contacts and enriched data |
| Seamless.AI → Zoho | Native | Push contacts |
| Seamless.AI → Keap | Native | Push contacts |
| Seamless.AI → Pipedrive | Native | Push contacts |
| Seamless.AI → Salesloft | Native | Push contacts to cadences |
| Seamless.AI → Outreach | Native | Push contacts to sequences |
| Seamless.AI → Insightly | Native | Push contacts |
| Seamless.AI → Greenhouse | Native | Push contacts (recruiting) |
| Seamless.AI → Mixmax | Native | Push contacts |
| Seamless.AI → Zapier | Native | Connect to 8,000+ apps |
| SafetyMails → HubSpot | Native | Verify/clean HubSpot contact emails |
| SafetyMails → Mailchimp | Native | Verify subscriber lists before sending |
| SafetyMails → ActiveCampaign | Native | Clean contact lists |
| SafetyMails → SendGrid | Native | Verify sender lists |
| SafetyMails → RD Station | Native | Verify lead emails |
| SafetyMails → Salesforce | Via Zapier | Verify CRM contact emails |
| SafetyMails → Pipedrive | Via Zapier | Verify deal contact emails |
| SafetyMails → Brevo | Native | Clean marketing lists |
| SafetyMails → WordPress | Native (plugin) | Real-time form validation |
| SafetyMails → Zapier | Native | Connect to 8,000+ apps |
| SafetyMails → Make | Native | Visual automation workflows |
| SafetyMails → n8n | Native | Self-hosted automation |
| SafetyMails → Pabbly Connect | Native | Low-cost automation |
| SafetyMails → Pluga | Native | Brazil-focused automation platform |

**Rule**: If a native integration covers your use case, use it. Native integrations handle auth, retry, and error handling automatically. Only go custom when native doesn't support your specific trigger or action.

## Step 3 — Common integration patterns

### Lead/reply → CRM record + notification

**Trigger**: Reply received in Mailshake/Apollo/Salesloft
**Actions**:
1. Create or update contact in CRM
2. Create activity/task on the contact record
3. Send Slack notification to rep

**Implementation options**:
- Zapier: Trigger = Mailshake "Reply Received" → Actions = Salesforce "Create Task" + Slack "Send Message"
- Webhook: Mailshake push event (Reply) → your endpoint → Salesforce API + Slack API
- Native: Mailshake-Salesforce integration (auto-syncs replies as activities)

### Meeting booked → CRM + sequence exit

**Trigger**: Meeting booked (Calendly, Chili Piper, or CRM scheduler)
**Actions**:
1. Update contact status/stage in CRM
2. Remove from active sequence/cadence
3. Create deal/opportunity
4. Notify AE

### CRM status change → sequence enrollment

**Trigger**: Lead status changes to "MQL" in CRM
**Actions**:
1. Enroll contact in outbound sequence (Apollo, Salesloft, Mailshake)
2. Assign to appropriate rep based on routing rules

**Implementation options**:
- **Zapier/Make (no-code)**: HubSpot "Lifecycle Stage Change" trigger → Apollo "Add Contact to Sequence" action. Easiest setup, handles auth automatically.
- **CRM webhook + custom API (low-code)**: HubSpot workflow triggers webhook → your endpoint calls Apollo `POST /contacts/add_to_emailer_campaign`. More control over field mapping, error handling, and conditional logic.
- **Native CRM workflow (if supported)**: Some CRM-to-engagement-tool integrations support enrollment triggers natively — check Settings > Integrations before building custom.

**Error handling for sequence enrollment**:
- **Duplicate contact**: Check if contact already exists in the engagement tool before creating — use "Find or Create" logic
- **Already enrolled**: The API may reject enrollment if the contact is active in another sequence — handle gracefully (log, skip, or queue for later)
- **Sequence capacity / enrollment limits**: Sequences may have max enrollment caps or daily add limits. Monitor the API response for limit errors and implement a retry queue for overflow.
- **Re-qualification**: If a lead was previously disqualified and re-enters MQL, decide whether to re-enroll or skip (prevent spamming the same contact)

### Deal stage change → stakeholder notification

**Trigger**: Deal moves to "Proposal Sent" or "Negotiation" in CRM
**Actions**:
1. Notify relevant stakeholders in Slack
2. Create follow-up task for rep
3. Trigger proposal creation in Qwilr (see `/sales-qwilr-automation`)

### Multi-tool activity sync

**Trigger**: Any activity logged in engagement tool (email sent, call made, meeting held)
**Action**: Sync activity to CRM as a completed task/activity

**Key considerations**:
- Define sync direction (one-way vs bidirectional)
- Map fields between tools (Salesloft "Call" → Salesforce "Task" with type "Call")
- Handle duplicates (check if activity already exists before creating)

## Step 4 — Platform webhook reference

### Mailshake webhooks
- **Setup**: API endpoint `/push/create` with `targetUrl` and `event`
- **Events**: Sent, Open, Click, Reply, LeadCatcher, Bounce, Unsubscribe
- **Payload**: JSON with event type, recipientID, campaignID, timestamp, event-specific data
- **Full reference**: See `/sales-mailshake` → `references/mailshake-api-reference.md`

### Apollo webhooks
- **Setup**: Settings > Integrations > Webhooks
- **Events**: Contact created, contact updated, sequence enrollment, sequence completion, email bounced
- **Note**: Apollo's webhook support is more limited than Mailshake's. For complex automations, use the REST API with polling.

### Salesloft webhooks
- **Setup**: Settings > Integrations > Webhooks (admin only)
- **Events**: Person created/updated, cadence step completed, email bounced, call logged
- **Note**: Salesloft also offers a robust REST API for building custom integrations

### Smartlead webhooks
- **Setup**: API endpoint `POST /webhooks` with `url` and `event_type`
- **Events**: LEAD_REPLIED, LEAD_INTERESTED, LEAD_UNSUBSCRIBED, EMAIL_SENT, EMAIL_OPENED, EMAIL_CLICKED, EMAIL_BOUNCED
- **Payload**: JSON with event_type, timestamp, and data object (lead_id, campaign_id, email, event-specific fields)
- **Full reference**: See `/sales-smartlead` → `references/smartlead-api-reference.md`

### Lemlist webhooks
- **Setup**: API endpoint `POST /api/webhooks` with `url` and event configuration
- **Events**: Reply, open, click, bounce, unsubscribe, lead interested, lead not interested
- **Rate limits**: 20 requests per 2 seconds on all API endpoints
- **Full reference**: See `/sales-lemlist` → `references/lemlist-api-reference.md`

### Groove.cm webhooks
- **Setup**: GrooveSell product settings > Webhooks
- **Events**: Sale, Refund, Failed Rebill, Cancellation
- **Payload**: JSON with event type, product, customer, and transaction data
- **Note**: Groove.cm has no public REST API. For integrations beyond webhooks, use Zapier (triggers/actions for GrooveMail and GrooveSell).
- **Full reference**: See `/sales-groove`

### Yesware integrations
- **No public API**: Yesware does not offer a public REST API. No webhook endpoints, no developer docs.
- **Integration methods**: Native connectors only — Salesforce (Enterprise plan), Gmail, Outlook, Zoom, LinkedIn, Clari, DocSend
- **Zapier**: Limited Zapier support — check Zapier for available triggers/actions (may be community-built, not official)
- **For custom integrations**: No programmatic access. If you need Yesware data in other tools, the Salesforce integration (Enterprise plan) is the best bridge — sync Yesware activity to Salesforce, then integrate Salesforce with other tools.
- **Workaround**: For teams needing API access, consider Salesloft, Apollo, or Mailshake which all offer full REST APIs.

### Reply.io webhooks
- **Setup**: API endpoint `POST /webhooks` or via Settings > Integrations > Webhooks in dashboard
- **Events**: Contact replied, email sent, email opened, email clicked, email bounced, contact status changed, task created (specific event types available via `GET /webhook-events`)
- **Delivery management**: API endpoints for managing webhook delivery, retries, and failures
- **API versions**: V3 (beta) has full webhook management; V1/V2 have basic webhook support
- **Full reference**: See `/sales-reply` → `references/reply-api-reference.md`

### Woodpecker webhooks
- **Setup**: API endpoint or via Settings > Integrations > Webhooks in dashboard
- **Events**: Prospect replied, email sent, email opened, email clicked, email bounced, prospect status changed, prospect interested (specific events via webhook management endpoints)
- **API access**: Requires API & integrations add-on (€20/mo)
- **Rate limits**: Same as main API — 1 concurrent request, queue of 6
- **Full reference**: See `/sales-woodpecker` → `references/woodpecker-api-reference.md`

### Mixmax rules (webhooks)
- **Setup**: Dashboard at app.mixmax.com/dashboard/rules or API `POST /rules` with trigger and actions
- **Trigger types**: IF/THEN rules on email events (open, click, reply), Salesforce object changes (new/updated opportunities, accounts, custom objects), date fields, lead owner changes
- **Action types**: Webhook call, Salesforce record update, sequence enrollment, task creation, Slack notification
- **Advanced rules**: Growth+CRM plan — trigger on Salesforce objects, use complex logic (AND/OR conditions)
- **API**: `GET/POST /rules`, `PATCH/DELETE /rules/:id`, `POST/GET /rules/:id/actions`
- **Note**: Mixmax rules are more of an automation engine than simple webhooks — they combine triggers and actions with conditional logic. For simple webhook forwarding, create a rule with a webhook action.

### Hunter.io integrations
- **Native CRM**: HubSpot, Salesforce, Pipedrive — push leads and sync activity directly from Hunter.
- **Google Sheets**: Add-on for running Domain Search, Email Finder, and Email Verifier directly in spreadsheets.
- **Zapier**: Triggers for new leads found; actions for domain search, email finder, and verifier.
- **Campaigns webhooks**: Configure webhook URLs in campaign settings for email sent, opened, clicked, replied, and bounced events.
- **MCP Server**: Official `hunter-mcp` Python package for AI agent integration via Model Context Protocol.
- **API-first**: For custom pipelines, use the REST API — `api_key` query parameter, `X-API-KEY` header, or Bearer auth. See `/sales-hunter` for full API reference.

### Prospeo integrations
- **No webhook support**: Prospeo does not appear to support webhook event subscriptions. Integrations are push-based (native CRM connectors) or pull-based (API polling).
- **Native CRM**: HubSpot and Salesforce native integrations handle enrichment sync automatically.
- **Automation platforms**: Zapier, Make, and n8n have Prospeo actions for enrichment workflows.
- **MCP Server**: Official `@prospeo/mcp-server` npm package for AI agent integration via Model Context Protocol.
- **API-first**: For custom pipelines, use the REST API directly — all POST endpoints with `X-KEY` auth. See `/sales-prospeo` for full API reference.

### Tomba webhooks
- **Setup**: Pass `webhook_url` parameter on supported API endpoints (domain search, email finder, enrichment, LinkedIn finder, author finder, bulk operations)
- **Events**: Async result delivery — when a lookup or bulk job completes, Tomba POSTs results to your webhook URL
- **Plan requirement**: Webhooks require Pro plan or above
- **Note**: Tomba's webhook model is callback-based (per-request), not event-subscription-based. You provide a URL on each API call rather than registering a persistent webhook endpoint.

### Seamless.AI webhooks
- **Setup**: Configure webhook URLs for async research result delivery
- **Events**: Contact research completed, company research completed — results POSTed to your webhook URL when enrichment finishes
- **Pattern**: Callback-based — Seamless.AI POSTs enriched data when research completes, rather than event-subscription-based
- **API-first**: For custom pipelines, use the REST API with research/poll endpoints or webhook callbacks. See `/sales-seamless` for full API reference.

### SafetyMails integrations
- **No public REST API or webhook support**: SafetyMails does not offer documented REST API endpoints or webhook event subscriptions for custom pipelines.
- **Real-time API**: JavaScript embed for form validation — not a REST API. Validates emails on web forms in <1 second.
- **Integration method**: Native connectors (HubSpot, Mailchimp, ActiveCampaign, SendGrid, RD Station, Brevo, Pipedrive, WordPress) and automation platforms (Zapier, Make, n8n, Pabbly Connect, Pluga).
- **For custom pipelines**: Use Zapier/Make as the bridge — trigger on list upload completion or schedule periodic verification runs. No direct API-to-API integration available.

### Seismic webhooks
- **Events**: Content views, LiveSend opens, DSR engagement, user provisioning (SCIM)
- **Setup**: Configure via the developer portal (developer.seismic.com). OAuth 2.0 auth.
- **Use cases**: Trigger CRM updates on content engagement or alert reps when prospects view shared content.

### Qwilr webhooks
- **Full reference**: See `/sales-qwilr-automation` for Qwilr-specific webhook events and CRM integrations

## Step 5 — Data sync best practices

### Define source of truth
Before building any bidirectional sync, decide which tool is the source of truth for each field:

| Data type | Typical source of truth | Why |
|-----------|------------------------|-----|
| Contact info (name, email, phone) | CRM (Salesforce/HubSpot) | CRM is the canonical record |
| Activity data (emails, calls) | Engagement tool (Apollo/Salesloft/Mailshake) | Activity originates in the engagement tool |
| Deal/opportunity | CRM | Revenue data lives in CRM |
| Lead score | MAP or CRM | Scoring logic runs in MAP/CRM |
| Sequence status | Engagement tool | Sequence state managed by engagement tool |

### Conflict resolution
- **Last-write-wins**: Simple but dangerous — later update overwrites earlier one
- **Source-of-truth wins**: Designated source always overwrites destination
- **Field-level rules**: Different rules per field (e.g., CRM wins for phone, engagement tool wins for email status)
- **Manual review**: Flag conflicts for human review (safest for critical fields)

### Deduplication
- **Match keys**: Email address (primary), company domain + name (secondary)
- **When to dedup**: Before creating records, during sync, and periodically as maintenance
- **Tools**: Native CRM dedup (Salesforce Duplicate Rules, HubSpot dedup tool), or third-party (Dedupely, RingLead)

### Error handling
- **Retry logic**: Implement exponential backoff for failed API calls (1s, 2s, 4s, 8s)
- **Dead letter queue**: Store failed events for manual review and replay
- **Alerting**: Slack/email notification when sync errors exceed threshold
- **Monitoring**: Track sync success rate, latency, and error types weekly

## Gotchas

- **Check native integrations first.** Don't build a Zapier workflow for something the tools already handle natively. Native integrations are more reliable, handle edge cases better, and don't cost extra. Check Settings > Integrations in both tools before going custom.
- **Respect API rate limits.** Every tool has rate limits — Mailshake (100/min), Apollo (~200/min on Pro), Salesforce (varies), HubSpot (100/10s). High-volume syncs that ignore rate limits will get throttled or blocked. Always implement batching and backoff.
- **Define source of truth before bidirectional sync.** Bidirectional sync without clear field-level ownership creates data ping-pong (A updates B, B updates A, loop). For every field that syncs bidirectionally, document which tool wins on conflict.

## Related skills

- `/sales-qwilr-automation` — Qwilr-specific CRM integrations, API, and webhook events
- `/sales-mailshake` — Mailshake platform help including API and webhook details
- `/sales-apollo` — Apollo platform help including CRM sync and API
- `/sales-smartlead` — Smartlead platform help including API and webhook details
- `/sales-lemlist` — Lemlist platform help including API and webhook details
- `/sales-salesloft` — Salesloft platform help including integrations
- `/sales-groove` — Groove.cm platform help including GrooveSell webhooks and Zapier integration
- `/sales-yesware` — Yesware platform help (native Salesforce integration, no API)
- `/sales-mixmax` — Mixmax platform help including rules engine and integrations
- `/sales-reply` — Reply.io platform help including webhooks and integrations
- `/sales-woodpecker` — Woodpecker platform help including API and webhook details
- `/sales-deliverability` — Email deliverability (relevant when integrating sending tools)
- `/sales-seismic` — Seismic platform help including integrations, LiveSend, and Digital Sales Rooms
- `/sales-tomba` — Tomba platform help including API, webhook callbacks, and CRM integrations
- `/sales-prospeo` — Prospeo platform help including API, native CRM integrations, and MCP server
- `/sales-hunter` — Hunter.io platform help including API, CRM integrations, webhooks, and MCP server
- `/sales-seamless` — Seamless.AI platform help including API, CRM integrations, and webhooks
- `/sales-safetymails` — SafetyMails platform help (bulk verification, real-time API, Email Finder, native integrations)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Mailshake reply → Salesforce + Slack
**User says**: "When someone replies to my Mailshake campaign, I want to create a task in Salesforce and get a Slack notification."
**Skill does**:
1. Checks if Mailshake-Salesforce native integration covers this (it does for activity sync)
2. Recommends native for Salesforce + Zapier for Slack notification
3. Provides Zapier workflow: Mailshake "Reply" trigger → Slack "Send Message" action
4. Configures field mapping for the Salesforce activity
**Result**: Reply-to-task sync via native integration, Slack alert via Zapier

### Example 2: Salesloft activity → HubSpot
**User says**: "I need to sync all Salesloft activity to HubSpot so our marketing team can see sales touchpoints."
**Skill does**:
1. Checks native integration (Salesloft-HubSpot integration exists)
2. Walks through native integration setup and field mapping
3. Defines sync direction (Salesloft → HubSpot, one-way for activity)
4. Addresses dedup and conflict resolution
**Result**: Native integration configured with clear sync direction and field mapping

### Example 3: HubSpot MQL → Apollo sequence
**User says**: "When a lead hits MQL status in HubSpot, I want to auto-enroll them in an Apollo sequence."
**Skill does**:
1. Designs trigger: HubSpot workflow on lifecycle stage = MQL
2. Recommends Zapier (HubSpot trigger → Apollo "Add Contact to Sequence" action)
3. Provides field mapping from HubSpot to Apollo contact fields
4. Adds error handling (what if contact already exists in Apollo, what if sequence is full)
**Result**: MQL-triggered enrollment with field mapping and error handling

## Troubleshooting

### Sync creating duplicates
**Symptom**: Same contact appearing multiple times in destination tool
**Cause**: Missing dedup logic — sync creates new records instead of matching existing ones
**Solution**: Add matching/dedup step before create. Match on email address (primary key). Use CRM's native dedup rules. For Zapier, use "Find or Create" actions instead of "Create."

### Events not firing
**Symptom**: Webhook or trigger not executing when expected
**Cause**: Webhook URL misconfigured, event type wrong, or tool's webhook delivery failing
**Solution**: Check webhook logs in the source tool. Test with a webhook debugging tool (webhook.site or RequestBin). Verify the event type matches exactly. Check if the webhook was disabled after errors.

### Rate limit errors in high-volume sync
**Symptom**: 429 errors, sync falling behind, or events being dropped
**Cause**: Sending too many API requests too quickly
**Solution**: Implement batching (batch multiple records per request where API supports it). Add exponential backoff on 429 responses. Reduce sync frequency (every 5 min instead of real-time). Use bulk API endpoints where available.
