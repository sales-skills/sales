---
name: sales-mailshake
description: "Mailshake platform help — campaigns, Lead Catcher, recipients, senders, webhooks, API, analytics, integrations, deliverability settings. Use when Mailshake campaigns aren't getting replies, Lead Catcher is missing leads, recipients aren't importing correctly, sender accounts keep disconnecting, integrations aren't syncing, or API calls are failing. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), designing cadence strategy (use /sales-cadence), or cross-platform deliverability (use /sales-deliverability)."
argument-hint: "[describe what you need help with in Mailshake]"
license: MIT
version: 1.0.0
tags: [sales, outbound, cold-email, sequences, platform]
github: "https://github.com/mailshake"
---
# Mailshake Platform Help

Help the user with Mailshake platform questions — from campaign setup and Lead Catcher through recipient management, deliverability settings, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Mailshake do you need help with?**
   - A) Campaigns — creating, managing, or optimizing email campaigns (for strategy, hand off: `/sales-cadence {your question}`)
   - B) Recipients — importing, managing, CSV formatting
   - C) Lead Catcher — capturing and managing leads from replies
   - D) Deliverability — sender settings, warmup, domain auth (for cross-platform, hand off: `/sales-deliverability {your question}`)
   - E) Analytics — campaign performance, open/reply/click rates
   - F) Webhooks & API — automation, push events, API access
   - G) Senders & Team — connected accounts, team management
   - H) Integrations — Salesforce, HubSpot, Pipedrive, Zapier, Slack
   - I) Admin — billing, plan features, account settings
   - J) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Admin / IT
   - E) Founder / solo seller
   - F) Other

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

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Mailshake platform reference

Provide module-by-module guidance based on the user's area:

### Campaigns
- **What it is**: A campaign in Mailshake is a multi-step email sequence — an initial message plus follow-ups sent automatically on a schedule
- **Key concepts**: Campaign = sequence, messages = steps, follow-up types (time-based drip, reply-based, click-based on-click message)
- **Campaign statuses**: draft, active, paused, ended
- **A/B testing**: Available on higher plans — test subject lines and body content across variants
- **Best practices**: Keep initial emails under 125 words, personalize with merge fields ({{first}}, {{company}}), test one variable at a time

### Recipients
- **What it is**: The contacts enrolled in a campaign — imported via CSV, API, or manual entry
- **Required fields**: Only `emailAddress` is mandatory. Everything else is optional but recommended.
- **Recommended fields**: `first`, `last`, `company`, `title` — these map to merge fields {{first}}, {{last}}, {{company}}, {{title}}
- **Custom merge fields**: Any additional CSV column becomes a custom merge field automatically
- **Recipient statuses**: active, paused, bounced, unsubscribed, completed
- **CSV import tips**: UTF-8 encoding, first row = headers, one email per row, verify emails before import (Mailshake does not verify on upload)

### Lead Catcher
- **What it is**: Built-in lead management that automatically captures replies as leads for follow-up
- **Lead statuses**: open (needs action), won/closed (converted), ignored (not a lead), lost (dead)
- **Key features**: Auto-assign leads to team members, filter by status/campaign/assignee, view full conversation thread
- **Lead Catcher vs CRM**: Lead Catcher manages the email conversation thread — your CRM manages the deal. Push qualified leads to CRM via integration or API.
- **Best practices**: Check Lead Catcher daily, respond within 1 hour for best conversion, use status labels consistently

### Deliverability Basics
- **Sender accounts**: Connect Gmail, Outlook/O365, or SMTP. Each sender has a daily sending limit.
- **Sending limits**: Varies by plan and email provider. Gmail caps at ~400-500/day, O365 at ~1,000/day. Mailshake enforces plan limits on top of provider limits.
- **Domain auth**: Configure SPF/DKIM/DMARC for your sending domain. Use a custom tracking domain for link tracking.
- **Warmup**: For new mailboxes, start with 20-30 emails/day and increase by 10-20 per week. See `/sales-deliverability` for a full warmup framework.
- **Sender rotation**: Distribute sends across multiple sender accounts to protect reputation

### Analytics
- **Built-in dashboards**: Campaign-level and account-level performance metrics
- **Key metrics**: Sent, opens, clicks, replies, bounces, unsubscribes, Lead Catcher leads
- **Team analytics**: Compare performance across team members and campaigns
- **Best practices**: Monitor bounce rate weekly (<3% target), track positive reply rate not just opens

### Senders & Team
- **Senders**: Connected email accounts used for sending. Each has its own daily limit and reputation.
- **Team**: Members can be assigned campaigns and leads. Roles control access.
- **Sender management**: Settings > Senders to connect, configure from-name, set daily limits

### Mailshake data model

Core entities — understand these to navigate the UI and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Campaign** | A multi-step email sequence | Has Messages (steps), has Recipients |
| **Recipient** | A contact enrolled in a campaign | Belongs to a Campaign, has Activity |
| **Lead** | A reply captured by Lead Catcher | Belongs to a Campaign, linked to a Recipient |
| **Message** | A step in a campaign (initial or follow-up) | Belongs to a Campaign |
| **Sender** | A connected email account | Used by Campaigns |
| **Team Member** | A user on the account | Can own Campaigns and Leads |

### API & Integrations

**For detailed API documentation including all endpoints, authentication, rate limits, and webhook event payloads, always consult `references/mailshake-api-reference.md`.** Point the user to this file for the full endpoint catalog, request/response schemas, and rate limit details. Any API question should include a pointer to this reference file.

**Quick reference**: Base URL `https://api.mailshake.com/2017-04-01`, API key auth (`apiKey` parameter), rate limit 100 requests/minute. Key capabilities: campaign CRUD, recipient management, activity tracking, Lead Catcher management, webhooks.

### Native integrations
- **CRM**: Salesforce (push leads, sync activity), HubSpot (push leads, sync activity), Pipedrive (push leads)
- **Automation**: Zapier (triggers for opens, clicks, replies, new leads; actions for adding recipients)
- **Communication**: Slack (notifications for replies, leads)
- **Enrichment**: Voila Norbert, Hunter (email verification before import)

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Mailshake
2. **Configuration recommendations** — specific settings to change, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/mailshake-api-reference.md`."

## Gotchas

- **Don't confuse Lead Catcher with a CRM.** Lead Catcher captures and tracks email replies — it's a triage tool, not a deal pipeline. Qualified leads should be pushed to Salesforce/HubSpot for pipeline management. Claude often treats Lead Catcher as a full CRM replacement.
- **Don't use "sequence" when talking about Mailshake.** Mailshake calls them "campaigns." Using "sequence" (Apollo/Salesloft terminology) confuses the user and the UI. Always say "campaign" for Mailshake.
- **Don't assume deliverability is configured.** New Mailshake accounts often have no SPF/DKIM/DMARC, no custom tracking domain, and no warmup plan. Always check domain auth status before troubleshooting send issues.
- **Don't recommend features available only on higher plans without asking.** A/B testing, team analytics, and some integrations are plan-gated. Ask about the user's plan before recommending these features.
- **Don't ignore Mailshake's API rate limits.** 100 requests/minute is strict. Bulk operations (adding thousands of recipients) must be batched with rate limiting. Claude tends to generate tight loops without delays.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Mailshake campaigns)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-prospect-list` — Build prospect lists to import into Mailshake
- `/sales-enrich` — Enrich contacts with emails/phones before importing
- `/sales-integration` — Connect Mailshake to other tools via webhooks, Zapier, or API
- `/sales-apollo` — Apollo.io platform help (if using Apollo instead of Mailshake)
- `/sales-salesloft` — Salesloft platform help (if using Salesloft instead of Mailshake)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Lead Catcher setup
**User says**: "How do I set up Lead Catcher in Mailshake?"
**Skill does**:
1. Explains Lead Catcher's purpose — automatic lead capture from campaign replies
2. Walks through enabling Lead Catcher and configuring auto-assignment rules
3. Explains lead statuses (open, won/closed, ignored, lost) and when to use each
4. Clarifies the distinction between Lead Catcher and CRM pipeline management
**Result**: User has Lead Catcher enabled with assignment rules and understands how to triage leads

### Example 2: API recipient import
**User says**: "I want to use the Mailshake API to add 500 recipients to a campaign"
**Skill does**:
1. Points to `references/mailshake-api-reference.md` for full API docs
2. Explains the `/recipients/add` endpoint — emailAddress required, fields for merge vars
3. Warns about rate limits (100 req/min) and recommends batching
4. Shows how to check import status with `/recipients/addStatus`
**Result**: User knows the endpoint, required fields, and how to batch large imports within rate limits

## Troubleshooting

### Low open rates
**Symptom**: Campaign open rates below 30%
**Cause**: Missing domain authentication, poor sender reputation, or weak subject lines
**Solution**: Verify SPF/DKIM/DMARC in your DNS. Set up a custom tracking domain. Check sender reputation. A/B test subject lines. See `/sales-deliverability` for a full diagnosis framework.

### Emails bouncing
**Symptom**: Bounce rate above 3%
**Cause**: Unverified email list or stale data
**Solution**: Verify emails before import using a verification tool (NeverBounce, ZeroBounce). Remove hard bounces immediately. Mailshake does not verify on upload — this is your responsibility.

### Lead Catcher not capturing replies
**Symptom**: Replies come in but don't appear in Lead Catcher
**Cause**: Lead Catcher not enabled for the campaign, or reply detected as out-of-office/bounce
**Solution**: Check campaign settings — Lead Catcher must be enabled per campaign. Auto-replies and OOO messages are filtered out by default. Check the Activity > Replies tab to confirm the reply was received.
