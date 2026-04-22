---
name: sales-leadiq
description: "LeadIQ platform help — Chrome extension-first B2B prospecting with AI outreach writing, champion tracking, and CRM enrichment via GraphQL API. Use when captured contacts from LinkedIn have wrong phone numbers, Salesforce sync keeps assigning leads to wrong accounts, Chrome extension freezes or won't load on LinkedIn, credits are burning too fast on phone lookups, HubSpot integration is too complex through Workato, or Scribe AI emails sound too generic. Do NOT use for building prospect lists across multiple tools (use /sales-prospect-list), general enrichment strategy across providers (use /sales-enrich), outbound sequence design (use /sales-cadence)."
argument-hint: "[describe what you need help with in LeadIQ — e.g., 'Chrome extension not loading' or 'API enrichment workflow']"
license: MIT
version: 1.0.0
tags: [sales, prospecting, enrichment, platform]
github: "https://github.com/leadiq"
---

# LeadIQ Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - a) Capturing contacts from LinkedIn (Chrome Extension / Prospector)
   - b) Champion tracking / job change alerts
   - c) CRM enrichment (Salesforce or HubSpot)
   - d) API integration (GraphQL)
   - e) Scribe AI outreach writing
   - f) Credit management / usage optimization
   - g) Something else

2. **Which LeadIQ plan are you on?**
   - a) Free (50 credits/mo, 1 user)
   - b) Pro (~$200/mo, up to 5 users)
   - c) Enterprise (custom)
   - d) Not sure / evaluating

3. **What CRM do you use?**
   - a) Salesforce (native managed package)
   - b) HubSpot (via Workato)
   - c) Other / none

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to | Command |
|---|---|---|
| Building prospect lists across multiple tools | `/sales-prospect-list` | `/sales-prospect-list {user's question}` |
| General enrichment strategy / waterfall enrichment | `/sales-enrich` | `/sales-enrich {user's question}` |
| Outbound sequence design and cadence | `/sales-cadence` | `/sales-cadence {user's question}` |
| CRM data quality / deduplication | `/sales-data-hygiene` | `/sales-data-hygiene {user's question}` |
| Connecting LeadIQ to other tools | `/sales-integration` | `/sales-integration {user's question}` |
| Interpreting buying signals / intent data | `/sales-intent` | `/sales-intent {user's question}` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is LeadIQ-specific, continue to Step 3.

## Step 3 — LeadIQ platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

If they're asking about the API, also **read `references/leadiq-api-reference.md`** for endpoint details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For Chrome Extension issues**: Clear cache, disable other extensions, check LinkedIn page type (profile vs Sales Navigator vs search). The extension works differently on each.
- **For credit optimization**: Phone lookups cost 10x email lookups. Capture emails first, then selectively reveal phones for high-priority contacts only. Use account enrichment (3 credits) to validate company fit before spending on individual contacts.
- **For Salesforce sync**: Ensure read/write permissions on all Lead, Contact, Account fields. Enable the stock Website field. Click "Resync Team" after any field changes in SFDC.
- **For HubSpot**: Integration works through Workato, adding complexity. LeadIQ checks for duplicates by matching emails, names, and company domains. Custom field mapping is available.
- **For champion tracking**: Set up alerts for past champions who change roles. This is LeadIQ's strongest differentiator — warm pipeline from people who already know your product.
- **For Scribe AI**: Treat output as a first draft that needs 30-50% editing. Feed it specific context about the prospect to improve quality.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Phone numbers are expensive**: 10 credits per phone vs 1 per email. A combined email+phone lookup costs 11 credits. Budget accordingly — 200 Pro credits = only ~18 full contact reveals
- **Credits don't roll over**: Monthly credits expire at month-end (monthly plans) or year-end (annual). No accumulation
- **HubSpot integration requires Workato**: Unlike the native Salesforce managed package, HubSpot connects through Workato middleware, adding setup complexity and a potential point of failure
- **Salesforce account assignment bugs**: Contacts sometimes sync to wrong accounts in Salesforce. Ensure the Website field is enabled on Lead/Contact/Account objects for duplicate detection to work
- **AI Account Prospecting is Enterprise-only**: The automatic ICP-based account surfacing feature requires Enterprise plan. Pro users are limited to manual Chrome Extension prospecting
- **EMEA data gaps**: European coverage is weaker than competitors like Cognism. Validate EMEA data quality before committing to LeadIQ as your primary provider for European markets
- **Chrome Extension LinkedIn dependency**: The extension works best on standard LinkedIn profiles. Performance varies on Sales Navigator, search results pages, and non-LinkedIn sites

## Related skills

- `/sales-enrich` — General enrichment strategy, waterfall enrichment, credit optimization across all providers
- `/sales-prospect-list` — Building targeted prospect lists across Apollo, ZoomInfo, Cognism, Clay, and more
- `/sales-cadence` — Outbound sequence design and multi-channel cadence planning
- `/sales-integration` — Connecting sales tools via Zapier, Make, webhooks, and API pipelines
- `/sales-data-hygiene` — CRM data quality, deduplication, record matching
- `/sales-cognism` — Cognism platform help (EMEA-focused competitor with phone-verified mobiles)
- `/sales-apollo` — Apollo platform help (affordable all-in-one alternative)
- `/sales-zoominfo` — ZoomInfo platform help (enterprise-grade competitor)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**Example 1**: "I captured 200 contacts from LinkedIn but half the phone numbers are wrong"
→ Walks through LeadIQ phone number accuracy expectations, credit-efficient verification workflow, and when to waterfall to a second provider.

**Example 2**: "Our Salesforce keeps creating duplicate contacts when reps use LeadIQ"
→ Covers Salesforce managed package configuration, duplicate detection settings, Website field requirements, and Resync Team workflow.

**Example 3**: "Is LeadIQ worth $200/month for our 3-person SDR team?"
→ Compares credit economics (200 credits = ~18 full contacts), evaluates vs Apollo ($49/mo with sequences) and Cognism (unlimited EMEA data), and recommends based on team's primary market.

## Troubleshooting

**Phone numbers connecting to wrong people or voicemail**
- **Cause**: LeadIQ phone data has known accuracy issues — the #1 user complaint across 1,000+ reviews
- **Fix**: Cross-validate high-priority numbers through a second provider (Cognism Diamond Data, ZoomInfo). Use email-first outreach and reserve phone credits for verified decision-makers only

**Chrome Extension not loading or showing "visit a supported site"**
- **Cause**: Extension cache corruption, browser session conflicts, or unsupported page type
- **Fix**: Clear extension cache, close and reopen the extension. If on LinkedIn Sales Navigator, switch to a standard profile page. Uninstall/reinstall as last resort

**Salesforce contacts assigned to wrong accounts**
- **Cause**: LeadIQ can't determine account association when the Website field is missing or company domain doesn't match
- **Fix**: Enable the stock Website field on Lead, Contact, and Account objects. After changes, click "Resync Team" in LeadIQ settings. Verify IP restrictions aren't blocking the connection
