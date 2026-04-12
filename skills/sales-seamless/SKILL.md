---
name: sales-seamless
description: "Seamless.AI platform help — Prospector, Buyer Intent, Job Changes, CRM Enrich, Pitch Intelligence, Engagement Hub (email, calling, social), AI Agents, Autopilot, Chrome extension, API. Use when Seamless.AI searches return bad data, contact credits are burning too fast, Buyer Intent isn't surfacing relevant accounts, Pitch Intelligence suggestions feel generic, AI Agents aren't performing as expected, or the Seamless.AI API isn't returning results. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts across tools (use /sales-enrich), interpreting buying signals across tools (use /sales-intent), cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), or sales content strategy (use /sales-content)."
argument-hint: "[describe what you need help with in Seamless.AI]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, prospecting, platform]
github: "https://github.com/SeamlessAI"
---
# Seamless.AI Platform Help

Help the user with Seamless.AI platform questions — from contact/company search and Buyer Intent through Engagement Hub, AI Agents, Pitch Intelligence, CRM Enrich, Autopilot, Chrome extension, and API integration.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Seamless.AI do you need help with?**
   - A) Prospector — searching for contacts and companies
   - B) Buyer Intent — tracking accounts showing buying signals
   - C) Job Changes — monitoring role changes for trigger-based outreach
   - D) CRM Enrich — enriching and cleaning CRM data
   - E) Pitch Intelligence — AI-powered messaging and talk tracks
   - F) Engagement Hub — email, calling, social selling
   - G) AI Agents — Outbound, Inbound, Ops, Marketing, Customer Success, Recruiting
   - H) Autopilot — automated list building and enrichment
   - I) Chrome Extension — finding contacts while browsing
   - J) API — programmatic access, search, enrichment
   - K) Integrations — CRM, Salesloft, Outreach, Zapier
   - L) Admin — credits, billing, team management
   - M) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Marketing
   - E) Founder / solo seller
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Building prospect lists across tools → `/sales-prospect-list`
- Enrichment strategy across tools → `/sales-enrich`
- Buying signal interpretation across tools → `/sales-intent`
- Cadence/sequence strategy → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Sales content/battle cards strategy → `/sales-content`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Seamless.AI platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Seamless.AI
2. **Configuration recommendations** — specific settings to change
3. **Credit optimization** — how to maximize value from credit allocation
4. **Common pitfalls** — what can go wrong and how to avoid it
5. **Verification** — how to confirm the change worked
6. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/seamless-api-reference.md`."

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't assume all features are available on all plans.** Buyer Intent, Job Changes, Pitch Intelligence, Autopilot, and AI Agents are Pro/Enterprise features. The Free plan gives only 50 lifetime credits (never refreshes). Always check the user's plan before recommending features.
- **Don't burn through daily credits.** Pro plan credits expire at midnight — unused credits don't roll over. Plan your prospecting sessions strategically. Don't reveal contacts you won't contact.
- **Don't skip CRM integration setup.** Seamless.AI's value multiplies when connected to your CRM. Without it, you're exporting CSVs manually. Set up Salesforce/HubSpot integration before building lists.
- **Don't use Seamless.AI's Engagement Hub for complex sequences.** The built-in emailing and calling tools are basic. For multi-step, multi-channel cadences, push contacts to Salesloft, Outreach, or another dedicated engagement tool.
- **Don't confuse annual contract terms.** Paid plans auto-renew for another 12 months unless you cancel 60+ days before renewal. This catches many users off guard.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-prospect-list` — Build targeted prospect lists (platform-agnostic strategy)
- `/sales-enrich` — Enrich contacts across multiple providers (waterfall enrichment)
- `/sales-intent` — Interpret buying signals and prioritize accounts (cross-platform)
- `/sales-cadence` — Design multi-channel outbound cadences
- `/sales-deliverability` — Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-content` — Sales content management (battle cards, collateral)
- `/sales-integration` — Connect Seamless.AI to other tools
- `/sales-compete` — Competitive displacement campaigns
- `/sales-account-map` — Map buying committees at target accounts
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Finding contacts at target accounts
**User says**: "How do I find VP Engineering contacts at Series B SaaS companies in the US using Seamless.AI?"
**Skill does**:
1. Walks through Prospector search with filters: title = "VP Engineering", funding = Series B, industry = SaaS, location = US
2. Recommends saving as a dynamic list and layering Buyer Intent for prioritization
3. Explains credit costs for reveals and how to optimize
4. Suggests pushing results to CRM via native integration
**Result**: Targeted contact list with verified emails/phones, prioritized by intent signals

### Example 2: Setting up Buyer Intent
**User says**: "How do I set up Buyer Intent in Seamless.AI to find accounts researching sales tools?"
**Skill does**:
1. Confirms Pro/Enterprise plan (Buyer Intent is plan-gated)
2. Walks through intent topic selection — recommend specific topics over broad categories
3. Shows how to combine Intent with Prospector filters to find contacts at high-intent accounts
4. Suggests creating Autopilot rules to automatically build lists from intent signals
**Result**: Buyer Intent configured with relevant topics, integrated into prospecting workflow

### Example 3: API integration for automated enrichment
**User says**: "I want to use the Seamless.AI API to enrich contacts in my pipeline automatically"
**Skill does**:
1. Points to `references/seamless-api-reference.md` for full API docs
2. Explains Contact Research endpoint — submit contact data, poll for enriched results or receive via webhook
3. Recommends building a webhook handler for async result delivery
4. Warns about rate limits (100 req/60s) and credit consumption
**Result**: User understands the research/poll pattern and can build an automated enrichment pipeline

## Troubleshooting

### Low match rate on searches
**Symptom**: Seamless.AI returns few results for your search criteria
**Cause**: Filters too restrictive, or targeting a niche persona/industry with limited data coverage
**Solution**: Loosen one filter at a time — start with geography (expand regions), then title (add synonyms), then company size (widen range). Use broader department/seniority filters instead of exact titles. Check if the industry has good coverage in Seamless.AI's database.

### Credits running out too fast
**Symptom**: Hitting credit limits mid-day or mid-month
**Cause**: Revealing contacts without qualifying them first, or Autopilot set too aggressively
**Solution**: Browse/search before revealing — only use credits on contacts you'll actually reach out to. Set daily caps on Autopilot. Focus credit spend on Tier 1 accounts. Review credit usage in account settings.

### CRM sync not working
**Symptom**: Contacts pushed from Seamless.AI not appearing in CRM, or data not syncing
**Cause**: Integration not properly configured, field mapping issues, or CRM permissions
**Solution**: Check Settings > Integrations — verify OAuth connection is active. Review field mappings to ensure Seamless.AI fields map to the correct CRM fields. Check CRM user permissions — the connected user needs create/update rights on contact/lead objects.
