---
name: sales-smartlead
description: "Smartlead platform help — campaigns, SmartSenders, SmartInfra, SmartAgents, SmartDialer, SmartProspect, SmartDelivery, warmup, API, integrations, agency/white-label. Use when asking 'how do I do X in Smartlead', configuring Smartlead settings, setting up SmartSenders, managing campaigns/leads, provisioning mailboxes, configuring SmartInfra, building SmartAgents, using SmartDialer, testing with SmartDelivery, setting up agency workspaces, white-labeling, or using the Smartlead API. Do NOT use for building prospect lists (use /sales-prospect-list), designing cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), or multi-client agency architecture (use /sales-agency-outbound)."
argument-hint: "[describe what you need help with in Smartlead]"
license: MIT
version: 1.0.0
tags: [sales, outbound, cold-email, warmup, platform]
---
# Smartlead Platform Help

Help the user with Smartlead platform questions — from campaign setup and SmartSenders through SmartInfra, SmartAgents, SmartDialer, SmartProspect, SmartDelivery, agency/white-label, API, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Smartlead do you need help with?**
   - A) Campaigns — creating, managing, or optimizing email campaigns (route to `/sales-cadence` for strategy)
   - B) SmartSenders — automated mailbox provisioning, rotation, daily limits
   - C) SmartInfra — dedicated-tenant infrastructure, private IPs, DNS config
   - D) SmartAgents — no-code AI agents for research and personalization
   - E) SmartDialer — parallel dialing, local presence, call recording
   - F) SmartProspect — verified leads with intent signals
   - G) SmartDelivery — inbox placement testing, spam test reports
   - H) Agency & White-label — master inbox, client workspaces, unified reporting
   - I) Integrations — HubSpot, Salesforce (via OutboundSync), Clay, Zapier
   - J) API — automation, lead import, campaign management
   - K) Admin — billing, plan features, account settings
   - L) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Agency owner / account manager
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
- Multi-client agency architecture → `/sales-agency-outbound`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Smartlead platform reference

Provide module-by-module guidance based on the user's area:

### Campaigns
- **What it is**: A campaign in Smartlead is a multi-step email sequence — an initial email plus follow-ups sent on a time-delay schedule
- **Key concepts**: Campaign = sequence, email steps with time delays between them, lead statuses track engagement
- **Campaign statuses**: draft, active, paused, completed
- **A/B testing**: Built-in variant testing — create up to 26 variants (A-Z) for subject lines and email body. Smartlead auto-distributes across variants and tracks performance.
- **Lead management**: Leads are tracked by interest status within campaigns — interested, not interested, not contacted, do not contact, wrong person, completed
- **Best practices**: Keep initial emails under 125 words, use merge fields ({{first_name}}, {{company}}), test one variable at a time across variants

### SmartSenders
- **What it is**: Automated mailbox provisioning and management — bulk-create Gmail/Outlook mailboxes via OAuth or connect SMTP accounts
- **Mailbox rotation**: Smartlead automatically rotates sends across connected sender accounts in a campaign
- **Daily limits**: Configure per-sender daily sending limits (recommend 30-50/day per mailbox for cold outbound)
- **Provisioning at scale**: Connect 20+ mailboxes via OAuth in bulk — each gets its own warmup, limits, and reputation tracking
- **Best practices**: Use real names (jane@outbound.company.com), not generic (sales@). One mailbox per 30-50 cold emails/day. Enable warmup on every new mailbox immediately.

### SmartInfra
- **What it is**: Dedicated-tenant email infrastructure — private IPs and auto DNS configuration for high-volume senders
- **Shared vs dedicated**: Shared infrastructure is fine for <500 emails/day. Above that, IP neighbor risk increases — one bad sender on a shared IP affects everyone.
- **Auto DNS config**: SmartInfra auto-configures SPF, DKIM, and DMARC records for your sending domains
- **When to use**: High-volume senders (1,000+ emails/day), agencies managing multiple clients, anyone who needs IP isolation

### SmartAgents
- **What it is**: No-code AI agents that research prospects and generate personalized email content at scale
- **How it works**: Configure a prompt, point to data sources (LinkedIn, company website, news), and SmartAgents research each prospect to generate custom email content
- **Use case**: Research-grade personalization — finding specific talking points, recent company news, mutual connections, or industry insights for each prospect
- **Not for**: Simple merge-field personalization ({{first_name}}, {{company}}). SmartAgents are for Level 3-4 personalization at scale.

### SmartDialer
- **What it is**: Built-in parallel dialing with local presence numbers, call recording, and voicemail drop
- **Key features**: Dial multiple prospects simultaneously, automatic local number matching, record calls for coaching, drop pre-recorded voicemails
- **Integration**: Calls logged within Smartlead campaigns alongside email activity

### SmartProspect
- **What it is**: Built-in lead database with verified contacts and intent signals — an alternative to external list-building tools
- **Verification**: 3x email verification (syntax, domain, mailbox) to reduce bounces
- **Intent signals**: Identifies prospects actively researching relevant topics
- **Credit model**: Pay per verified lead — credits deducted on export/use

### SmartDelivery
- **What it is**: Inbox placement testing — send test emails to seed accounts and measure inbox vs spam placement
- **Pre-campaign testing**: Test deliverability before launching a campaign to catch issues early
- **Ongoing monitoring**: Run placement tests periodically during active campaigns to detect reputation changes
- **Reports**: Spam test reports showing placement by provider (Gmail, Outlook, Yahoo), authentication status, and content analysis

### Agency & White-label
- **Master inbox**: Single view across all client campaigns — manage replies, leads, and activity from one interface
- **Client workspaces**: Isolate campaigns, sender accounts, and data per client. Each workspace operates independently.
- **White-label**: Custom branding — your logo, colors, and domain on the Smartlead interface for client-facing access
- **Unified reporting**: Cross-client analytics — compare performance, spot trends, identify at-risk campaigns across all clients

### Smartlead data model

Core entities — understand these to navigate the UI and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Campaign** | A multi-step email sequence | Has email steps, has Leads, uses Sender Accounts |
| **Lead** | A contact enrolled in a campaign | Belongs to a Campaign, has activity tracking |
| **Sender Account** | A connected email mailbox | Used by Campaigns, has warmup status |
| **Client/Workspace** | A client account (agency) | Has Campaigns, has Sender Accounts |
| **SmartAgent** | An AI research/personalization agent | Linked to Campaigns for content generation |

### API & Integrations

**For detailed API documentation including all endpoints, authentication, rate limits, and webhook event payloads, always consult `references/smartlead-api-reference.md`.** Point the user to this file for the full endpoint catalog, request/response schemas, and rate limit details.

**Quick reference**: Base URL `https://server.smartlead.ai/api/v1/`, API key auth (`api_key` query parameter). Key capabilities: campaign CRUD, lead management, sender account management, analytics, webhooks, client/workspace management (agency).

For broader integration architecture help beyond Smartlead's native connectors (e.g., building multi-tool workflows, Zapier/Make recipes, or webhook pipelines), use `/sales-integration`.

### Native integrations
- **CRM**: HubSpot (native — push leads, sync activity), Salesforce (via OutboundSync, a paid third-party connector — not native like HubSpot; alternatively use Zapier as a lighter-weight option). For broader integration architecture, see `/sales-integration`.
- **Enrichment**: Clay (native — enrichment pipeline integration)
- **Automation**: Zapier (triggers for replies, opens, bounces; actions for adding leads)
- **Email**: Gmail OAuth, Outlook OAuth (direct mailbox connection)
- **Communication**: Slack (campaign notifications)

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Smartlead
2. **Configuration recommendations** — specific settings to change, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/smartlead-api-reference.md`."

## Gotchas

- **Don't skip SmartInfra evaluation for high-volume.** Shared infrastructure has IP neighbor risk at scale. If you're sending 1,000+ emails/day or managing multiple clients, evaluate SmartInfra's dedicated IPs. One bad neighbor on a shared IP can tank your deliverability overnight.
- **Don't conflate Smartlead campaigns with Salesloft cadences.** Smartlead campaigns are email-only by default. Phone steps require SmartDialer, and LinkedIn touchpoints need external tools. Don't promise multi-channel capabilities that require add-ons.
- **Don't use SmartAgents for simple merge-field personalization.** SmartAgents are for research-grade personalization — finding company news, analyzing LinkedIn profiles, generating custom talking points. For simple {{first_name}} and {{company}} merge fields, just use standard campaign variables. SmartAgents add cost and latency for no benefit on simple personalization.
- **Don't assume Salesforce integration is native.** Smartlead connects to Salesforce via OutboundSync, a paid third-party connector. It's not built-in like the HubSpot integration. Users need an OutboundSync subscription or can use Zapier as an alternative.
- **Don't skip warmup.** Ultra Premium Warmup must run 2-3 weeks on new mailboxes before they're added to campaign rotation. Sending cold emails from unwarmmed mailboxes will land in spam. This applies even if the domain is established — new mailboxes need their own warmup.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Smartlead campaigns)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-prospect-list` — Build prospect lists to import into Smartlead
- `/sales-enrich` — Enrich contacts with emails/phones before importing
- `/sales-integration` — Connect Smartlead to other tools via webhooks, Zapier, or API
- `/sales-agency-outbound` — Multi-client agency architecture — infrastructure, client isolation, onboarding
- `/sales-mailshake` — Mailshake platform help (if using Mailshake instead of Smartlead)
- `/sales-apollo` — Apollo.io platform help (if using Apollo instead of Smartlead)
- `/sales-salesloft` — Salesloft platform help (if using Salesloft instead of Smartlead)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Campaign setup with warmup
**User says**: "How do I set up a new campaign in Smartlead with 10 mailboxes?"
**Skill does**:
1. Walks through creating a campaign with email steps and time delays
2. Explains connecting 10 sender accounts via SmartSenders (OAuth or SMTP)
3. Stresses enabling Ultra Premium Warmup on all 10 mailboxes immediately — minimum 2-3 weeks before campaign launch
4. Configures daily limits (30-50/mailbox), rotation, and scheduling
5. Recommends running SmartDelivery inbox placement test before going live
**Result**: User has a campaign ready to launch after warmup period with proper mailbox rotation

### Example 2: SmartSenders provisioning 20 mailboxes
**User says**: "I need to set up 20 new mailboxes for outbound in Smartlead"
**Skill does**:
1. Recommends domain strategy — 1 domain per 3-5 mailboxes, dedicated outbound domains
2. Walks through bulk Gmail/Outlook OAuth connection via SmartSenders
3. Configures per-mailbox daily limits (30-50 each = 600-1,000 total daily capacity)
4. Enables Ultra Premium Warmup on all 20 with staggered start dates
5. Advises on SmartInfra evaluation at this volume — 20 mailboxes may benefit from dedicated IPs
**Result**: User has 20 mailboxes provisioned with warmup plan and capacity planning

### Example 3: API lead import
**User says**: "I want to use the Smartlead API to add leads from our CRM to a campaign"
**Skill does**:
1. Points to `references/smartlead-api-reference.md` for full API docs
2. Explains the `POST /campaigns/{id}/leads` endpoint — email required, custom_fields for merge variables
3. Shows authentication method (api_key query parameter)
4. Recommends batching for large imports and monitoring rate limits
5. Suggests setting up webhooks for `LEAD_REPLIED` and `LEAD_INTERESTED` to sync back to CRM
**Result**: User knows the endpoint, auth method, required fields, and how to build a bidirectional sync

## Troubleshooting

### Low open rates
**Symptom**: Campaign open rates below 30%
**Cause**: Insufficient warmup, missing domain authentication, poor sender reputation, or weak subject lines
**Solution**: Check warmup status on all sender accounts — reputation should be 80+ before campaign sends. Verify SPF/DKIM/DMARC (SmartInfra auto-configures these, but verify in DNS). Run SmartDelivery inbox placement test. A/B test subject lines across variants. See `/sales-deliverability` for a full diagnosis framework.

### SmartAgent personalization quality
**Symptom**: SmartAgent-generated content is generic or inaccurate
**Cause**: Poorly configured prompts, insufficient data sources, or using SmartAgents for simple personalization
**Solution**: Refine the SmartAgent prompt with specific instructions (what to research, what angles to find). Add more data sources (LinkedIn, company website, news). Review a sample of 10 outputs before launching at scale. If personalization needs are simple (name, company), skip SmartAgents and use standard merge fields.

### Warmup stalling
**Symptom**: Sender reputation not increasing after 2+ weeks of warmup
**Cause**: DNS misconfiguration, mailbox connectivity issues, or daily volume set too low
**Solution**: Verify DNS records (SPF/DKIM/DMARC) are correct. Check mailbox connectivity — re-authenticate OAuth if needed. Ensure warmup daily volume is at least 20-30 emails. Check if the mailbox is also being used for non-warmup sends that could hurt reputation.
