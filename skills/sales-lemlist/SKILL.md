---
name: sales-lemlist
description: "Lemlist platform help — multichannel sequences, lead database, enrichment, Lemwarm, unified inbox, AI personalization, LinkedIn automation, calls, WhatsApp, API, integrations. Use when asking 'how do I do X in Lemlist', configuring Lemlist settings, setting up sequences, managing leads, using Lemwarm warmup, connecting integrations, using the People Database, or using the Lemlist API. Do NOT use for building prospect lists (use /sales-prospect-list), designing cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), or enriching contacts outside Lemlist (use /sales-enrich)."
argument-hint: "[describe what you need help with in Lemlist]"
license: MIT
version: 1.0.0
tags: [sales, outbound, cold-email, sequences, platform]
---
# Lemlist Platform Help

Help the user with Lemlist platform questions — from multichannel sequence setup and Lemwarm through lead management, enrichment, AI personalization, LinkedIn automation, unified inbox, API, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Lemlist do you need help with?**
   - A) Sequences — creating, managing, or optimizing multichannel sequences (route to `/sales-cadence` for strategy)
   - B) Lead database — finding prospects with People Database, filters, intent signals
   - C) Enrichment — waterfall enrichment for emails and phone numbers
   - D) Lemwarm — warmup, deliverability score, sender reputation
   - E) Unified inbox — managing replies across channels
   - F) LinkedIn — automated LinkedIn steps, connection requests, messages
   - G) Calls — in-app dialer, call steps in sequences
   - H) WhatsApp — WhatsApp messaging steps (add-on)
   - I) AI personalization — dynamic variables, AI-generated content
   - J) Integrations — HubSpot, Salesforce, Pipedrive, Zapier, Make
   - K) API & Webhooks — automation, lead import, campaign management
   - L) Admin — billing, plan features, team settings
   - M) Something else — describe it

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
- Contact enrichment outside Lemlist → `/sales-enrich`
- Cadence strategy / sequence design → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Lemlist platform reference

Provide module-by-module guidance based on the user's area:

### Sequences (Multichannel Campaigns)
- **What it is**: A sequence in Lemlist is a multichannel outreach campaign — email steps, LinkedIn actions, phone calls, and WhatsApp messages on an automated schedule
- **Key concepts**: Sequence = multichannel campaign, steps = touchpoints across channels, leads = enrolled contacts
- **Channels available**: Email, LinkedIn (connection requests, profile visits, messages), phone (in-app dialer), WhatsApp (paid add-on at $20/seat/month)
- **A/B testing**: Test subject lines, email body content, and entire step variants
- **Lead statuses**: interested, not interested, contacted, not contacted
- **Best practices**: Keep initial emails under 125 words, mix channels (don't do 3+ email steps in a row), use AI personalization for Level 3+ at scale

### Lead Database (People Database)
- **What it is**: Built-in B2B lead database with 600M+ contacts and smart filtering
- **Key features**: Search by title, seniority, industry, company size, location, tech stack
- **Intent signals**: Identifies prospects actively researching relevant topics (newer feature)
- **Credit model**: Pay per lead revealed — credits deducted on export/use
- **Pre-verification**: Leads from People Database are verified before delivery
- **Best practices**: Use filters to narrow before revealing — don't burn credits on broad searches

### Enrichment
- **What it is**: Built-in waterfall enrichment — find verified emails and phone numbers for your leads
- **How it works**: Lemlist tries multiple data providers in sequence (waterfall) to maximize match rates
- **Email finder**: Find professional email addresses from name + company
- **Phone finder**: Find direct/mobile phone numbers
- **Verification**: Emails are verified before delivery to reduce bounce rates
- **Best practices**: Enrich leads before adding to sequences — don't send to unverified addresses

### Lemwarm (Deliverability)
- **What it is**: Built-in email warmup tool included with every Lemlist seat at no extra cost
- **How it works**: Sends automated warmup emails to a premium network of 10,000+ real users, generating real opens and replies to build sender reputation
- **Deliverability score**: Score out of 100 showing inbox placement quality (target 90+)
- **Warmup settings**: Configure emails/day (recommended 30/day for accounts <6 months, 40/day for older) and ramp-up increment
- **Warmup timeline**: Minimum 3-5 weeks before adding cold outbound
- **Inbox rotation**: Distribute sends across multiple email accounts connected to a sequence
- **Best practices**: Enable Lemwarm on every connected email account immediately. Keep warmup running even during active campaigns — it maintains reputation.

### Unified Inbox
- **What it is**: Single view for all replies across email, LinkedIn, and other channels
- **Key features**: Reply tracking, conversation threads, label conversations, draft responses
- **Channel aggregation**: See email replies, LinkedIn messages, and WhatsApp responses in one place
- **Best practices**: Check unified inbox daily, respond within 1 hour for best conversion

### LinkedIn Automation
- **What it is**: Automated LinkedIn steps within sequences — profile visits, connection requests, and messages
- **Step types**: Visit profile, send connection request (with note, under 300 chars), send message (to existing connections)
- **Limits**: LinkedIn has daily action limits — Lemlist respects these but monitor your LinkedIn account for warnings
- **Plan requirement**: Multichannel Expert plan ($99/user/month) required for LinkedIn steps
- **Best practices**: Always visit profile before sending connection request. Keep connection request notes casual and non-salesy. Don't exceed 20-30 connection requests/day.

### Calls (In-App Dialer)
- **What it is**: Built-in calling within Lemlist sequences — add phone steps alongside email and LinkedIn
- **Key features**: Click-to-call from lead record, call logging within sequence activity
- **Plan requirement**: Multichannel Expert plan required
- **Best practices**: Place call steps within 24 hours of an email step — reference the email in your opener

### WhatsApp
- **What it is**: WhatsApp messaging steps within sequences (paid add-on at $20/seat/month)
- **How it works**: Add WhatsApp steps to multichannel sequences alongside email, LinkedIn, and calls
- **Requirement**: WhatsApp Business account + Lemlist WhatsApp add-on
- **Best practices**: Use WhatsApp for warm follow-ups after email/LinkedIn engagement, not cold first-touch

### AI Personalization
- **What it is**: AI-powered content generation that pulls data from LinkedIn profiles, company websites, and other sources to create personalized outreach at scale
- **How it works**: Configure AI variables that research each lead and generate custom snippets (icebreakers, pain points, company references)
- **Dynamic variables**: Standard merge fields ({{firstName}}, {{companyName}}) plus AI-generated custom variables
- **Best for**: Level 3-4 personalization at scale (100+ prospects) — finding specific talking points per lead
- **Not for**: Simple {{firstName}} personalization — just use standard variables for that

### Lemlist data model

Core entities — understand these to navigate the UI and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Campaign/Sequence** | A multichannel outreach sequence | Has Steps, has Leads, uses Email Accounts |
| **Lead** | A contact enrolled in a sequence | Belongs to a Campaign, has activity tracking |
| **Contact** | A person in your database | Can be enrolled in multiple Campaigns |
| **Company** | An organization | Has Contacts, has firmographic data |
| **Email Account** | A connected sending mailbox | Used by Campaigns, has Lemwarm status |
| **Step** | A touchpoint in a sequence (email, LinkedIn, call, WhatsApp) | Belongs to a Campaign |
| **Schedule** | Sending window and timezone config | Associated with Campaigns |

### API & Integrations

For detailed API documentation including all endpoints, authentication, rate limits, and webhook event payloads, consult `references/lemlist-api-reference.md`.

**Quick reference**: Base URL `https://api.lemlist.com/api`, Basic auth (`:apiKey` base64-encoded) or Bearer token, rate limit 20 requests per 2 seconds. Key capabilities: campaign CRUD, lead management, sequence steps, enrichment, Lemwarm control, People Database search, inbox/messaging, webhooks.

**Always reference `references/lemlist-api-reference.md`** when answering API questions — point the user to it for the full endpoint catalog, request/response schemas, and rate limit details.

### Native integrations
- **CRM**: HubSpot (native — push leads, sync activity), Salesforce (native — 2-way sync), Pipedrive (native)
- **Enrichment**: Apollo, Clay, Clearout, Uplead, Lusha, Pharow
- **Automation**: Zapier (triggers for opens, clicks, replies; actions for adding leads), Make, n8n, Pabbly, Relay.app
- **Calling**: Aircall, Ringover, Trellus
- **Communication**: Slack, WhatsApp (add-on)
- **Data**: Airtable, Google Sheets
- **Intent**: Snitcher, Lonescale, Phantombuster, Trigify, Albacross
- **Chrome extension**: LinkedIn prospecting

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Lemlist
2. **Configuration recommendations** — specific settings to change, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/lemlist-api-reference.md`."

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't confuse Lemlist's per-seat pricing with unlimited-mailbox tools.** Lemlist charges per user/month and limits sending accounts (5 per user on highest plan, $9 per additional inbox). Unlike Instantly or Smartlead which offer unlimited mailboxes on flat-fee plans, Lemlist costs scale with team size and mailbox count. Always check the user's plan before recommending adding more sender accounts.
- **Don't use "campaign" interchangeably with "sequence."** Lemlist calls them "sequences" in the UI and "campaigns" in the API. This inconsistency confuses users. Use "sequence" when discussing the UI and "campaign" when discussing the API. If the user says "campaign," clarify which they mean.
- **Don't assume LinkedIn steps are available.** LinkedIn automation requires the Multichannel Expert plan ($99/user/month). The Email Pro plan ($69/user/month) is email-only. Ask about the user's plan before building multichannel sequences with LinkedIn steps.
- **Don't skip Lemwarm setup.** Lemwarm is free with every seat — there's no reason not to enable it. New accounts without Lemwarm warmup will land in spam. Enable it immediately on every connected email account with at least 30 emails/day warmup volume.
- **Don't ignore LinkedIn daily limits.** Lemlist automates LinkedIn actions but LinkedIn still enforces daily limits. Exceeding ~20-30 connection requests/day or ~50-80 profile visits/day risks LinkedIn account restrictions. Claude tends to suggest aggressive LinkedIn step volumes that exceed safe limits.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Lemlist sequences)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-prospect-list` — Build prospect lists to import into Lemlist
- `/sales-enrich` — Enrich contacts with emails/phones outside of Lemlist's built-in enrichment
- `/sales-integration` — Connect Lemlist to other tools via webhooks, Zapier, or API
- `/sales-mailshake` — Mailshake platform help (if using Mailshake instead of Lemlist)
- `/sales-smartlead` — Smartlead platform help (if using Smartlead instead of Lemlist)
- `/sales-apollo` — Apollo.io platform help (if using Apollo instead of Lemlist)
- `/sales-salesloft` — Salesloft platform help (if using Salesloft instead of Lemlist)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Multichannel sequence setup
**User says**: "How do I create a multichannel sequence in Lemlist with email and LinkedIn?"
**Skill does**:
1. Confirms user is on Multichannel Expert plan (LinkedIn requires it)
2. Walks through creating a sequence with email step 1, LinkedIn profile visit day 1, LinkedIn connection request day 2, email follow-up day 4
3. Explains LinkedIn step configuration — connection request note under 300 chars, daily limit awareness
4. Recommends enabling Lemwarm on all connected email accounts before launching
5. Suggests A/B testing subject lines on the first email step
**Result**: User has a multichannel sequence with email + LinkedIn steps ready to launch after warmup

### Example 2: Lemwarm setup and deliverability check
**User says**: "I just connected 3 new email accounts to Lemlist. How do I warm them up?"
**Skill does**:
1. Walks through enabling Lemwarm on each email account — Warm up section, set to 30 emails/day with gradual ramp-up
2. Explains the deliverability score (target 90+) and where to monitor it
3. Stresses minimum 3-5 weeks warmup before adding to sequence rotation
4. Recommends verifying SPF/DKIM/DMARC and setting up a custom tracking domain
5. Points to `/sales-deliverability` for full domain auth framework
**Result**: User has Lemwarm running on all 3 accounts with monitoring plan

### Example 3: API lead import and sequence enrollment
**User says**: "I want to use the Lemlist API to add leads from our CRM to a sequence"
**Skill does**:
1. Points to `references/lemlist-api-reference.md` for full API docs
2. Explains the `POST /campaigns/{id}/leads` endpoint — email required, custom fields for personalization variables
3. Shows authentication method (Basic auth with API key)
4. Warns about rate limits (20 requests per 2 seconds) and recommends batching
5. Suggests setting up webhooks for reply and interest events to sync back to CRM
**Result**: User knows the endpoint, auth method, required fields, and how to build a bidirectional sync

## Troubleshooting

### Low open rates
**Symptom**: Sequence open rates below 30%
**Cause**: Insufficient warmup, missing domain authentication, poor sender reputation, or weak subject lines
**Solution**: Check Lemwarm deliverability score on all email accounts — target 90+ before sequence sends. Verify SPF/DKIM/DMARC in your DNS. Set up a custom tracking domain. A/B test subject lines. See `/sales-deliverability` for a full diagnosis framework.

### LinkedIn steps not executing
**Symptom**: LinkedIn steps in sequence show as skipped or failed
**Cause**: LinkedIn connection expired, daily limits hit, or user on Email Pro plan (no LinkedIn access)
**Solution**: Verify plan is Multichannel Expert ($99/user/month). Re-authenticate LinkedIn connection in Lemlist settings. Check if daily LinkedIn action limits were exceeded — reduce volume to 20-30 connection requests/day. Verify the lead has a LinkedIn URL in their profile.

### Enrichment returning low match rates
**Symptom**: Waterfall enrichment finding emails for less than 50% of leads
**Cause**: Leads are in niche industries, use uncommon domains, or have limited public data
**Solution**: Ensure you're providing name + company (minimum for email lookup). Try supplementing with external enrichment tools (Clay, Apollo, Lusha) via `/sales-enrich`. For senior executives with low match rates, consider LinkedIn-first outreach instead of email.
