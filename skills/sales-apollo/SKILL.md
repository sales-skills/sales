---
name: sales-apollo
description: "Apollo.io platform help — config, integrations, CRM sync, API, analytics, dialer, Chrome extension, credit management, admin. Use when Apollo settings aren't configured right, CRM sync is breaking or duplicating records, running out of credits too fast, API calls returning errors, or something in Apollo isn't working as expected. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), interpreting buying signals (use /sales-intent), or designing outbound sequences (use /sales-cadence)."
argument-hint: "[describe what you need help with in Apollo]"
license: MIT
version: 1.0.0
tags: [sales, outbound, enrichment, crm, platform]
github: "https://github.com/apolloio"
---
# Apollo.io Platform Help

Help the user with Apollo.io platform questions — from configuration and CRM sync through analytics, dialer, API, and credit management.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Apollo do you need help with?**
   - A) Prospecting & Search — finding and filtering leads (hand off: `/sales-prospect-list {your question}`)
   - B) Enrichment — getting emails, phones, firmographic data (hand off: `/sales-enrich {your question}`)
   - C) Sequences — outbound email/call sequences (for Apollo mechanics, `/sales-cadence` for strategy, hand off: `/sales-apollo-sequences {your question}`)
   - D) Intent & Signals — buying intent, job changes, lead scoring (hand off: `/sales-intent {your question}`)
   - E) Dialer — click-to-call, parallel dialing, call recording
   - F) Analytics — reports, dashboards, sequence performance
   - G) CRM Sync — Salesforce/HubSpot integration, field mapping, sync issues
   - H) Chrome Extension — LinkedIn prospecting, website visitor identification
   - I) Credits & Billing — credit management, usage, plan limits
   - J) API & Integrations — REST API, Zapier, webhooks
   - K) Admin — user management, teams, permissions, SSO
   - L) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Admin / IT
   - E) Founder / solo seller
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs one of the specialized skills, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- List building / prospecting → `/sales-prospect-list`
- Contact enrichment / data hygiene → `/sales-enrich`
- Intent signals / lead scoring → `/sales-intent`
- Sequence strategy / cadence design → `/sales-cadence`
- Apollo sequence mechanics → `/sales-apollo-sequences`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Apollo platform reference

Provide module-by-module guidance based on the user's area:

### Dialer
- **What it is**: Built-in click-to-call and parallel dialer with call recording and disposition tracking
- **Key concepts**: Click-to-call, parallel dialer (call multiple numbers simultaneously), call recording, voicemail drop, call dispositions, local presence
- **Plan requirements**: Dialer available on Professional+; international dialing on Organization plan
- **Common configs**: Caller ID setup, recording consent settings, voicemail drop recordings, disposition lists, parallel dialer settings
- **Best practices**: Use local presence for higher connect rates, always set call dispositions for analytics, enable recording for coaching

### Analytics & Reporting
- **What it is**: Built-in dashboards for team and individual performance across sequences, calls, and pipeline
- **Key concepts**: Pre-built dashboards, custom dashboards, sequence analytics, email analytics, call analytics, team goal tracking
- **Common reports**: Sequence performance (open/reply rates), team activity (emails sent, calls made, meetings booked), pipeline creation, deliverability monitoring
- **Best practices**: Monitor deliverability weekly, track leading indicators (activities) not just lagging (revenue), use sequence analytics to identify top-performing messaging

### CRM Sync
- **Native CRM integrations**: Salesforce (bi-directional), HubSpot (bi-directional), Pipedrive, Zoho, Dynamics 365
- **Key concepts**: Field mapping, sync direction (Apollo→CRM, CRM→Apollo, bi-directional), sync frequency, conflict resolution
- **Common issues**: Duplicate records, field mapping mismatches, sync lag, permission errors
- **Troubleshooting**: Check Settings > Integrations > CRM for sync status and error logs. Verify field mappings match data types. Review conflict resolution rules.

### Chrome Extension
- **What it is**: Browser extension for prospecting directly from LinkedIn and company websites
- **Key features**: LinkedIn profile enrichment, company page prospecting, website visitor identification, one-click add to lists/sequences
- **Common issues**: Extension not loading, LinkedIn rate limiting, data not matching
- **Best practices**: Don't bulk-prospect too quickly on LinkedIn (risk of account restrictions), verify enriched data before adding to sequences

### Credits & Billing
- **Credit types**: Mobile credits (phone numbers), export credits (CSV downloads), data credits (enrichment), email credits (sending)
- **Key rules**: Credits do NOT roll over month-to-month. Phone reveals cost ~8x email reveals in credit terms.
- **Common confusion**: Search doesn't consume credits — only enrichment (revealing emails/phones) and export consume credits
- **Optimization**: Enrich only qualified prospects, use bulk enrichment for efficiency, monitor usage in Settings > Usage

### Apollo data model

Core entities in Apollo — understand these to navigate the UI, build reports, and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Person** | An individual in Apollo's database (265M+) | Can be saved as a Contact |
| **Contact** | A person saved to your Apollo CRM | Belongs to an Account, can be added to Sequences |
| **Account** | A company/organization | Has many Contacts |
| **Sequence** | A multi-step outbound campaign | Has Steps (emails, calls, tasks), has enrolled Contacts |
| **Deal** | A sales opportunity | Linked to Contacts and Account |
| **Task** | An action item (call, email, LinkedIn, custom) | Linked to Contact |
| **List** | A saved collection of Contacts | Static or dynamic (saved search) |

### API & Integrations

> **Full API reference**: See `references/apollo-api-reference.md` for complete endpoint documentation, authentication details, and request/response examples.

For detailed API documentation including all endpoints, authentication, rate limits, credit consumption, and bulk operations, consult `references/apollo-api-reference.md`.

**Quick reference**: Base URL `https://api.apollo.io/api/v1/`, API key auth (`x-api-key` header), rate limits vary by plan. Key capabilities: people search, enrichment, contact/account CRUD, sequence management, deal management.

**Always reference `references/apollo-api-reference.md`** when answering API questions — point the user to it for the full endpoint catalog, request/response schemas, and rate limit details beyond what's covered inline here.

### Using MCP tools for direct Apollo access

If you want Claude to interact with Apollo.io directly (search contacts, enrich records, manage sequences, update pipeline stages), you can install an MCP-based tool that gives Claude live API access.

**Option 1: Composio** — MCP server with natural language → Apollo API translation

```bash
npx skills add composiohq/apollo-automation
```

Best for: Ad-hoc lookups, natural language queries ("find all VPs at Acme"), quick enrichment tasks. Composio handles auth and translates plain English into API calls.

**Option 2: Membrane** — Pre-built Apollo actions with direct API proxy

```bash
npx skills add membranedev/apolloio
```

Best for: Structured workflows, bulk operations, pipeline management. Membrane provides typed actions for contacts, accounts, deals, sequences, tasks, and calls with authentication and rate limiting built in.

Both tools handle auth, pagination, and rate limits automatically — prefer them over raw API calls when possible. Use this skill (`/sales-apollo`) for platform knowledge and guidance; use the MCP tools when you need Claude to actually read or write Apollo data.

### Admin & Settings
- **User management**: Roles, permissions, teams, seat allocation
- **SSO**: Available on Organization plan (SAML)
- **Data management**: Import/export, duplicate management, do-not-contact lists
- **Deliverability**: SPF/DKIM/DMARC setup, sending domain management, Inbox Ramp Up

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Apollo
2. **Configuration recommendations** — specific settings to change, with where to find them (Settings > [section] > [page])
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always end your response with this exact line: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/apollo-api-reference.md`." This citation is mandatory even when you provide inline code examples.

## Gotchas

- **Don't confuse Apollo's database search with enrichment.** Searching for people is free and doesn't consume credits. Enrichment (revealing emails/phones) consumes credits. Claude often generates workflows that search + enrich in one step without warning about credit costs.
- **Don't assume all Apollo features are available on all plans.** Dialer requires Professional+, parallel dialing requires Organization, SSO requires Organization, custom reporting requires Organization. Always ask about the user's plan before recommending gated features.
- **Don't recommend the Chrome extension for bulk LinkedIn prospecting.** LinkedIn aggressively rate-limits scraping. Prospecting too quickly via the extension can get the user's LinkedIn account restricted. Recommend Apollo's built-in search instead for bulk list building.
- **Don't treat Apollo's CRM as a replacement for Salesforce/HubSpot.** Apollo has its own contact/account/deal objects, but most teams use it alongside a CRM, not instead of one. Sync configuration is critical — misconfigurations cause duplicates and data conflicts.
- **Don't generate raw API code when a UI walkthrough would suffice.** Most Apollo users are salespeople, not developers. Default to UI instructions unless the user specifically asks for API/automation help.
- **Always cite the API reference file for API questions.** When the user asks anything about the Apollo API — endpoints, authentication, rate limits, payloads, or integration code — you MUST include a pointer to `references/apollo-api-reference.md` in your response. Example: "For the complete API reference with all endpoints, authentication details, and request/response examples, see `references/apollo-api-reference.md`." Never answer an API question without this citation.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-prospect-list` — Build targeted prospect lists using Apollo's search filters
- `/sales-enrich` — Enrich contacts with emails, phones, and firmographic data
- `/sales-intent` — Interpret buying signals and prioritize accounts
- `/sales-apollo-sequences` — Create and manage sequences in Apollo
- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic)
- `/sales-salesloft` — Salesloft platform help (if using Salesloft instead of Apollo)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM sync troubleshooting
**User says**: "My Apollo-Salesforce sync keeps creating duplicate contacts"
**Skill does**:
1. Identifies this as a CRM sync issue
2. Walks through sync settings, field mapping, and dedup rules
3. Recommends sync direction and conflict resolution settings
**Result**: User has diagnosed and resolved the duplicate creation issue

### Example 2: API integration
**User says**: "I want to use the Apollo API to auto-create contacts from our onboarding form"
**Skill does**:
1. Explains API key auth (`x-api-key` header) and the POST /contacts endpoint
2. Provides a sample request payload with name, email, company, and title fields
3. Points the user to `references/apollo-api-reference.md` for the full endpoint catalog, request/response schemas, and rate limits
**Result**: User has a working integration plan and knows where to find complete API documentation in `references/apollo-api-reference.md`

### Example 3: Credit management
**User says**: "I'm burning through my Apollo credits too fast"
**Skill does**:
1. Reviews the user's plan and credit allocation
2. Identifies where credits are being consumed (enrichment vs export vs phone reveals)
3. Recommends credit optimization strategies (enrich only qualified prospects, use bulk enrichment, avoid unnecessary phone reveals)
**Result**: User has a plan to optimize credit usage within their plan limits

## Troubleshooting

### CRM sync conflicts
**Symptom**: Duplicate records or data overwritten between Apollo and CRM
**Cause**: Bi-directional sync with conflicting field mappings or missing dedup rules
**Solution**: Review Settings > Integrations > CRM. Set sync direction per field. Enable duplicate detection. Use Apollo's dedup tool to merge existing duplicates.

### Chrome extension not working
**Symptom**: Extension doesn't load on LinkedIn or shows errors
**Cause**: LinkedIn DOM changes, extension update needed, or browser conflicts
**Solution**: Update the extension, clear browser cache, disable conflicting extensions. If on LinkedIn, check if you've hit LinkedIn's daily viewing limits.

### Deliverability issues
**Symptom**: Emails landing in spam or low open rates
**Cause**: Missing SPF/DKIM/DMARC, sending volume too high too fast, or poor sender reputation
**Solution**: Verify domain authentication in Settings > Email. Use Inbox Ramp Up for new mailboxes. Keep daily sending volume under 50/day per mailbox initially. Monitor the Deliverability Command Center.
