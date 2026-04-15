---
name: sales-integration
description: "Connects sales tools with webhooks, Zapier/Make, native integrations, and custom API pipelines — CRM sync, event triggers, data mapping, and error handling. Use when CRM data isn't syncing from Mailshake/Apollo/Salesloft, webhook events aren't firing or arriving malformed, Zapier/Make automations are failing or skipping records, data is duplicating or missing between tools, or an integration that was working suddenly breaks. Do NOT use for Qwilr-specific automations (use /sales-qwilr-automation), general CRM platform config (use /sales-apollo or /sales-salesloft), or marketing automation flows (use /email-sequence)."
argument-hint: "[describe source tool, destination tool, trigger event, and desired action]"
license: MIT
version: 1.0.0
tags: [sales, integration, webhooks, zapier, api]
---
# Connect Sales Tools

Help the user design and implement integrations between sales tools — from choosing the right integration method through trigger/action design, field mapping, and error handling. This skill covers webhooks, Zapier/Make, native integrations, and custom API pipelines.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you connecting?**
   - Source tool (where the event happens): Mailshake, Apollo, Salesloft, Smartlead, Lemlist, Yesware, Groove.cm, Mixmax, Reply.io, Woodpecker, Hunter.io, Seismic, Tomba, Prospeo, Seamless.AI, SafetyMails, Closum, Omnisend, Mailchimp, SendGrid, Postmark, Customer.io, Mailgun, Klaviyo, ActiveCampaign, Outscraper, Enrich.so, Minelead, Lobstr.io, GetProspect, Skrapp, OpenWeb Ninja, Anymail Finder, ZeroBounce, Snov.io, LeadMagic, ZoomInfo, Clearbit, RB2B, 6sense, Brevo, Braze, Iterable, GetResponse, SendPulse, Clay, HubSpot, Salesforce, Qwilr, RudderStack, Boomi, other
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

For a complete lookup table of 240+ native integrations across all supported tools, see `references/integrations.md`.

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

For platform-specific webhook configs, API integrations, and native connector details, see `references/platforms.md`.

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-hubspot` — HubSpot platform help (2,000+ marketplace apps, API, Data Hub sync, webhooks)
- `/sales-qwilr-automation` — Qwilr CRM integrations, API, and webhooks
- `/sales-mailshake` — Mailshake platform help (API, webhooks)
- `/sales-apollo` — Apollo platform help (CRM sync, API)
- `/sales-smartlead` — Smartlead platform help (API, webhooks)
- `/sales-lemlist` — Lemlist platform help (API, webhooks)
- `/sales-salesloft` — Salesloft platform help (integrations)
- `/sales-groove` — Groove.cm platform help (GrooveSell webhooks, Zapier)
- `/sales-yesware` — Yesware platform help (native Salesforce, no API)
- `/sales-mixmax` — Mixmax platform help (rules engine, integrations)
- `/sales-reply` — Reply.io platform help (webhooks, integrations)
- `/sales-woodpecker` — Woodpecker platform help (API, webhooks)
- `/sales-deliverability` — Email deliverability for sending tool integrations
- `/sales-seismic` — Seismic platform help (integrations, LiveSend)
- `/sales-hunter` — Hunter.io (API, CRM integrations, webhooks, MCP)
- `/sales-customerio` — Customer.io (APIs, Data Pipelines, webhooks)
- `/sales-mailgun` — Mailgun (REST API, inbound routing, webhooks)
- `/sales-klaviyo` — Klaviyo (350+ integrations, flow webhooks, Shopify)
- `/sales-activecampaign` — ActiveCampaign (900+ integrations, webhooks)
- `/sales-sendgrid` — SendGrid (Email API, Event Webhooks, Inbound Parse)
- `/sales-postmark` — Postmark (transactional API, Message Streams, webhooks)
- `/sales-iterable` — Iterable (Smart Ingest, system webhooks, REST API)
- `/sales-braze` — Braze (Currents, CDI, 170+ Alloys, REST API)
- `/sales-brevo` — Brevo (email/SMS/WhatsApp, transactional API, webhooks)
- `/sales-clearbit` — Clearbit (enrichment API, Reveal, webhooks)
- `/sales-rb2b` — RB2B (visitor ID, Identity Resolution API)
- `/sales-6sense` — 6sense (intent, scoring, Salesforce/HubSpot/API)
- `/sales-clay` — Clay (waterfall enrichment, CRM sync, webhooks)
- `/sales-leadmagic` — LeadMagic (REST API, MCP, Clay/Zapier/Make/n8n)
- `/sales-zoominfo` — ZoomInfo (SalesOS, MarketingOS, OperationsOS)
- `/sales-blueconic` — BlueConic CDP — 100+ connections for importing/exporting customer data
- `/sales-treasuredata` — Treasure Data CDP — 400+ connectors, enterprise data unification and audience activation
- `/sales-mulesoft` — MuleSoft platform help — enterprise iPaaS, API-led connectivity, 450+ connectors
- `/sales-boomi` — Boomi platform help — enterprise iPaaS, 1000+ connectors, API management, Data Hub MDM
- `/sales-data-hygiene` — CRM data quality and enrichment automation
- `/sales-do` — Router — matches any sales objective to the right skill

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
