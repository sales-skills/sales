---
name: sales-hubspot
description: "HubSpot platform help — Smart CRM with Marketing Hub, Sales Hub, Service Hub, Content Hub, Data Hub, Commerce Hub, and Breeze AI. Covers deal pipeline setup, email sequences, workflow automations, lead scoring, marketing email campaigns, landing pages, forms, live chat, chatbots, reporting dashboards, and API integration (REST, OAuth 2.0, date-versioned endpoints, webhooks, 5 SDKs). Use when HubSpot workflows aren't firing, email sequences not sending, lead scoring feels off, reports don't show what you need, marketing contacts are too expensive, trying to connect HubSpot to other tools, or not sure which Hub or tier you need. Do NOT use for CRM comparison and selection (use /sales-crm-selection), outbound cadence design across platforms (use /sales-cadence), or CRM data cleanup strategy (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in HubSpot]"
license: MIT
version: 1.0.0
tags: [sales, crm, marketing, platform]
github: "https://github.com/HubSpot"
---

# HubSpot Platform Help

Helps the user with HubSpot questions — from CRM setup and deal pipelines through marketing automation, email sequences, reporting, integrations, and API.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) CRM setup — contacts, companies, deals, pipelines
   - B) Marketing Hub — email campaigns, forms, landing pages, SEO
   - C) Sales Hub — sequences, templates, meeting links, forecasting
   - D) Service Hub — tickets, knowledge base, customer portal
   - E) Content Hub — website pages, blog, drag-and-drop editor
   - F) Data Hub — data sync, data quality, datasets
   - G) Automations — workflows, lead scoring, lifecycle stages
   - H) Reporting — dashboards, custom reports, attribution
   - I) Integrations — Zapier, Make, native apps, API, webhooks
   - J) Pricing / plan selection — Free vs Starter vs Pro vs Enterprise
   - K) Something else — describe it

2. **Which Hub(s) are you using?**
   - A) Free CRM only
   - B) Starter bundle
   - C) Sales Hub (specify tier)
   - D) Marketing Hub (specify tier)
   - E) Multiple Hubs
   - F) Not sure / evaluating

3. **Team size?**
   - A) Solo / 1-3 people
   - B) Small team 4-15
   - C) Growing team 15-50
   - D) 50+

**If the user's request already provides most context, skip to Step 2.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| CRM comparison — HubSpot vs Attio vs Salesforce vs others | `/sales-crm-selection {question}` |
| Outbound sequence design across platforms | `/sales-cadence {question}` |
| CRM data cleanup, deduplication, record matching | `/sales-data-hygiene {question}` |
| Contact enrichment for CRM records | `/sales-enrich {question}` |
| Connecting HubSpot to other tools (architecture) | `/sales-integration {question}` |
| Lead scoring model design (cross-platform) | `/sales-lead-score {question}` |
| Revenue forecasting strategy | `/sales-forecast {question}` |
| Email deliverability for outbound | `/sales-deliverability {question}` |
| Email marketing strategy across platforms | `/sales-email-marketing {question}` |

When routing, provide the exact command.

## Step 3 — HubSpot platform reference

**Read `references/platform-guide.md`** for the full platform reference — hubs, modules, pricing, integrations, workflows, data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup priority**: Connect email (Gmail/Outlook) → import contacts → set up deal pipeline → create 2-3 basic workflows → add forms/landing pages if using Marketing Hub.

**When to upgrade**: You need Starter when you want to remove branding or use simple automation. You need Professional when you need custom reporting, advanced workflows, or sequences. You need Enterprise when you need custom objects, hierarchical teams, or SSO.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing and plan-gated features which change frequently.*

- **The free-to-paid pricing jump is enormous.** Free CRM is genuinely useful. But Marketing Hub Professional is $890/mo vs Starter at $20/mo — a 44x jump. Plan your growth path before you build workflows you can't keep without upgrading.
- **Annual contracts auto-renew and can't be canceled mid-term.** HubSpot explicitly bans mid-contract downgrades. You pay for the full year regardless of usage. Set a calendar reminder 60 days before renewal.
- **Marketing contacts pricing adds up fast.** You pay per marketing contact, not per contact stored. At scale ($50/1,000 contacts/mo), a 100K-contact list costs $5,000/mo on top of the base fee.
- **The data model is rigid compared to Attio or Salesforce.** Standard objects (contacts, companies, deals, tickets) can't be fundamentally restructured. Custom objects require Enterprise tier ($150+/seat/mo).
- **Workflows have a steep learning curve.** Enrollment triggers, if/then branches, re-enrollment rules, and suppression lists interact in non-obvious ways. Start with simple workflows and test with a small list.
- **Reporting has gaps.** Cross-object reporting and attribution require Professional+. Even then, don't expect Salesforce-level flexibility. For advanced analytics, export to a BI tool.
- **HubSpot for Startups offers up to 90% off.** If you're eligible (accelerator/incubator/VC partner), apply before buying — savings are massive and available once only.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-crm-selection` — CRM comparison and selection — choosing between HubSpot, Attio, Salesforce, Folk, Pipedrive, and others
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-enrich` — Contact enrichment — emails, phones, company data, bulk enrichment
- `/sales-cadence` — Outbound sequence design — multi-channel cadences across platforms
- `/sales-integration` — Connecting CRM to other tools — webhooks, Zapier, Make, native connectors
- `/sales-lead-score` — Lead scoring model design — dimensions, weights, MQL/SQL thresholds
- `/sales-email-marketing` — Email marketing strategy across platforms
- `/sales-email-tracking` — Email engagement tracking for sales
- `/sales-forecast` — Revenue forecasting — pipeline coverage, commit validation
- `/sales-live-chat` — Live chat and chatbot setup
- `/sales-chatbot` — Chatbot marketing and conversational flows
- `/sales-funnel` — Sales funnel optimization
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up HubSpot for a seed-stage startup
**User says**: "We just raised seed, 6 people, doing inbound from content marketing. We signed up for HubSpot Free — how do I set it up?"
**Skill does**:
1. Recommends connecting Gmail/Outlook for automatic contact creation
2. Sets up a simple deal pipeline matching their sales stages (Lead → Demo → Proposal → Closed Won/Lost)
3. Creates a basic workflow: form submission → create deal → notify rep
4. Notes they should apply for HubSpot for Startups (up to 90% off)
5. Flags that they can stay on Free until they need sequences or custom reporting
**Result**: CRM configured with pipeline, email sync, and first automation

### Example 2: Marketing Hub pricing confusion
**User says**: "I'm on HubSpot Starter but I need marketing automation. Professional is $890/mo — is there a cheaper way?"
**Skill does**:
1. Explains Marketing Hub Starter ($20/mo) includes simple automation (form follow-ups, email sequences) but not full workflow builder
2. Notes the $890/mo Professional price includes 2,000 marketing contacts and 3 seats
3. Suggests alternatives: use Sales Hub sequences for 1:1 outreach (much cheaper), or evaluate whether a dedicated ESP like Kit or Mailchimp handles the email campaigns at lower cost while keeping HubSpot as CRM
4. Flags HubSpot for Startups discount if eligible
**Result**: User understands options without overpaying

### Example 3: Workflows not triggering
**User says**: "I set up a workflow to send an email when a deal moves to 'Proposal Sent' but nothing happens"
**Skill does**:
1. Checks common causes: enrollment trigger conditions too narrow, workflow in draft state, suppression list blocking contacts, re-enrollment not enabled
2. Recommends checking workflow history for errors
3. Notes that deal-based workflows require Professional tier — verifies user's plan
4. Suggests testing with a single record first, checking email send limits
**Result**: User identifies the issue and gets the workflow firing

## Troubleshooting

### Contacts not syncing from email
**Symptom**: Connected Gmail/Outlook but new contacts aren't appearing in CRM
**Cause**: Email integration only logs activity to existing contacts by default. Auto-creating contacts from email requires enabling "Log and track emails" and checking "Automatically log emails" in settings. Some email domains may be excluded.
**Solution**: Go to Settings → Integrations → Email Integrations. Enable automatic logging. Check the "Never log" list for accidentally excluded domains. Verify the connected inbox status is "Connected" (not "Disconnected" or "Error").

### Workflow sends duplicate emails
**Symptom**: Contacts receive the same workflow email multiple times
**Cause**: Re-enrollment is enabled and contacts keep meeting the enrollment trigger (e.g., property changes back and forth). Or multiple workflows target the same contacts with similar actions.
**Solution**: Check re-enrollment settings — disable or add a re-enrollment delay. Use suppression lists to exclude contacts already in the workflow. Check for overlapping workflows targeting the same list.

### Reports show wrong numbers
**Symptom**: Dashboard metrics don't match what you see in lists or exports
**Cause**: Common causes: (1) report date range doesn't match expectations, (2) report filters exclude records you expect to see, (3) "marketing contacts" vs "all contacts" filter, (4) attribution model differences between reports.
**Solution**: Check the date range and filter criteria on each report widget. Verify whether the report counts contacts, companies, or deals (they give different numbers for the same pipeline). For attribution reports, confirm which attribution model is selected (first-touch, last-touch, linear).
