---
name: sales-prospeo
description: "Prospeo platform help — person enrichment, company enrichment, person search, company search, bulk enrichment, Chrome extension, LinkedIn Sales Navigator extraction, 5-step email verification, intent signals, API. Use when Prospeo enrichment isn't returning emails, LinkedIn extraction is failing, bulk lookups are eating too many credits, the API returns unexpected errors, or you can't get Prospeo connected to your CRM. Do NOT use for building prospect lists (use /sales-prospect-list), enrichment strategy across tools (use /sales-enrich), cross-platform deliverability (use /sales-deliverability), or interpreting buying signals (use /sales-intent)."
argument-hint: "[describe what you need help with in Prospeo]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, linkedin, platform]
---
# Prospeo Platform Help

Help the user with Prospeo platform questions — from person/company enrichment and search through bulk operations, Chrome extension, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Prospeo do you need help with?**
   - A) Person enrichment — finding verified emails and phones for specific contacts
   - B) Company enrichment — firmographic data, tech stack, funding
   - C) Person search — searching 200M+ contacts with filters
   - D) Company search — searching 30M+ companies with filters
   - E) Bulk operations — enriching up to 50 records at once via API
   - F) Chrome extension — LinkedIn Sales Navigator extraction
   - G) API — authentication, endpoints, integration
   - H) Integrations — HubSpot, Salesforce, Clay, Zapier, Make, n8n
   - I) Credits & billing — understanding credit costs, managing usage
   - J) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Growth / Marketing
   - E) Developer / Engineer
   - F) Founder / solo seller
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Building prospect lists from scratch → `/sales-prospect-list`
- Enrichment strategy across multiple tools → `/sales-enrich`
- Email deliverability / verification strategy → `/sales-deliverability`
- Buying signals / intent interpretation → `/sales-intent`
- Connecting tools / webhooks / Zapier → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Prospeo platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Prospeo
2. **Configuration recommendations** — specific settings, with navigation paths
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/prospeo-api-reference.md`."

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't confuse Search with Enrichment.** Person Search and Company Search return profile data but NOT emails or phones. You must call Enrich Person/Company separately to get contact info. This is a two-step process and each step costs credits.
- **Don't forget mobile enrichment costs 10x.** A standard enrichment is 1 credit, but adding `enrich_mobile: true` makes it 10 credits. At scale this adds up fast. Only enable mobile for contacts you'll actually call.
- **Don't use deprecated endpoints.** The old Email Finder, Mobile Finder, Email Verifier, Domain Search, and Social URL Enrichment endpoints were removed March 1, 2026. Use the new Enrich Person/Company endpoints instead.
- **Don't ignore the lifetime dedup.** Prospeo doesn't charge for re-enriching the same record. If you need updated data on someone you've already enriched, re-run the enrichment for free. But note this is per-account, not per-team-member.
- **Don't search by company name alone.** Company name matching is fuzzy and can return wrong results. Always use website/domain or LinkedIn URL as the company identifier when possible.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Enrichment strategy across multiple tools (waterfall, CRM hygiene, credit optimization)
- `/sales-prospect-list` — Build prospect lists to enrich with Prospeo
- `/sales-deliverability` — Email deliverability — verify emails before sending
- `/sales-intent` — Layer buying signals on enriched contacts to prioritize outreach
- `/sales-cadence` — Design outbound sequences for enriched contacts
- `/sales-integration` — Connect Prospeo to other tools via API, Zapier, Make, n8n
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Enrich a list of prospects
**User says**: "I have 200 LinkedIn URLs from Sales Navigator. How do I enrich them all with emails in Prospeo?"
**Skill does**:
1. Recommends using the Bulk Enrich Person API endpoint with LinkedIn URLs
2. Explains batching into groups of 50 (API limit per call)
3. Shows the API request format with `linkedin_url` as the data field
4. Recommends setting `only_verified_email: true` to save credits
5. Calculates credit cost: 200 credits max (1 per match, free for no-match)
**Result**: User has a batched enrichment plan with API examples and credit estimate

### Example 2: Find decision-makers at target companies
**User says**: "I need to find VP-level contacts at 50 SaaS companies with 100-500 employees"
**Skill does**:
1. Recommends using Search Person with company filters (headcount_range, industry) and person filters (seniority: VP)
2. Shows how to use `company.websites` filter with a list of target domains
3. Explains that search results need separate enrichment to get emails
4. Suggests a workflow: Search → filter results → Bulk Enrich top matches
**Result**: Two-step search-then-enrich workflow with filter configuration

### Example 3: API integration with CRM
**User says**: "How do I set up auto-enrichment of new HubSpot contacts with Prospeo?"
**Skill does**:
1. Checks if the user wants native HubSpot integration or custom API pipeline
2. For native: walks through connecting HubSpot in Prospeo settings
3. For custom: designs a Zapier/Make workflow — HubSpot "New Contact" trigger → Prospeo Enrich Person action → HubSpot "Update Contact" with enriched fields
4. Addresses credit budgeting for ongoing auto-enrichment
**Result**: Auto-enrichment pipeline with credit management strategy

## Troubleshooting

### Low match rate on enrichments
**Symptom**: Many records return NO_MATCH
**Cause**: Insufficient identifying data, or contacts are in niche industries with low database coverage
**Solution**: Provide multiple data points (name + company website + LinkedIn URL) for best matching. Use `only_verified_email: false` to see unverified results. For low-coverage segments, consider waterfall enrichment with multiple providers — see `/sales-enrich`.

### API returning 429 errors
**Symptom**: Rate limit exceeded errors on API calls
**Cause**: Sending too many requests per minute/second for your plan tier
**Solution**: Check response headers (`x-minute-request-left`, `x-second-rate-limit`) to understand your limits. Implement exponential backoff on 429 responses. Use bulk endpoints (50 records per call) instead of single enrichments to reduce request count.

### Credits running out mid-month
**Symptom**: INSUFFICIENT_CREDITS error before billing cycle resets
**Cause**: Mobile enrichment consuming 10x credits, or bulk operations enriching unqualified records
**Solution**: Check usage via the Account Information endpoint or dashboard. Disable `enrich_mobile` for contacts you won't call. Use `only_verified_email: true` to skip unverifiable records. Apply ICP filters before enriching — don't enrich contacts you'll never reach out to.
