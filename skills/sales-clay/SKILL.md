---
name: sales-clay
description: "Clay platform help — Waterfall Enrichment (150+ data providers), Claygent (AI Research Agents), Sculptor (workflow builder), Signals (job changes, intent), Audiences, Ad Sync (LinkedIn/Meta/Google), Email Sequencer, CRM Sync (Salesforce/HubSpot/Dynamics), HTTP API actions, webhooks. Use when enrichment data has gaps or low match rates, Claygent not returning useful research, Sculptor workflows failing or hard to build, signals missing job changes you care about, audiences not syncing to ad platforms, CRM data out of sync with Clay, or webhooks not firing. Do NOT use for enrichment strategy across tools (use /sales-enrich), cadence/sequence strategy across tools (use /sales-cadence), intent signal strategy across tools (use /sales-intent), B2B advertising strategy across tools (use /sales-b2b-advertising), or CRM data hygiene strategy across tools (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in Clay]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, automation, waterfall, ai-agents, platform]
github: "https://github.com/clay-run"
---
# Clay Platform Help

Help the user with Clay platform questions — from waterfall enrichment and Claygent AI agents through Sculptor workflows, Signals, Audiences, Ad Sync, Email Sequencer, CRM sync, and webhook/API integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Clay do you need help with?**
   - A) Waterfall Enrichment — finding emails, phones, firmographics via 150+ providers
   - B) Claygent — AI research agents for prospect research, web scraping, gated content
   - C) Sculptor — building workflows with natural language, conditional logic, automation
   - D) Signals — tracking job changes, promotions, funding, website visits
   - E) Audiences — dynamic buyer segments from CRM + enrichment + signals
   - F) Ad Sync — pushing audiences to LinkedIn, Meta, Google Ads
   - G) Email Sequencer — native outbound email sequences
   - H) CRM Sync — Salesforce, HubSpot, Dynamics 365 bidirectional sync
   - I) Webhooks & HTTP API — inbound/outbound data flow, external API calls
   - J) Data Credits & Billing — credit usage, plan optimization, provider costs
   - K) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / GTM Ops
   - D) Marketing / Growth
   - E) Founder / solo seller
   - F) GTM Engineer
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Enrichment strategy / provider comparison → `/sales-enrich`
- Cadence strategy / sequence design → `/sales-cadence`
- Intent signal strategy / prioritization → `/sales-intent`
- B2B advertising strategy → `/sales-b2b-advertising`
- CRM data hygiene strategy → `/sales-data-hygiene`
- Prospect list building strategy → `/sales-prospect-list`
- Lead scoring model design → `/sales-lead-score`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly using the platform reference below.

## Step 3 — Clay platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

When answering, always:

1. **Specify the plan requirement** — many features are plan-gated. Don't recommend CRM Sync to a Free user.
2. **Include credit impact** — waterfall enrichment burns credits fast. Help users optimize provider order and "only if empty" logic.
3. **Recommend testing at small scale** — always test on 5-50 rows before running enrichment or Claygent on thousands.
4. **Link to Clay University** — point users to university.clay.com for detailed guides on specific features.
5. **Consider the full workflow** — Clay is most powerful when enrichment → signals → sequencing → CRM sync work together. Help users build end-to-end workflows, not isolated steps.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Credit burn from waterfall enrichment is the #1 surprise cost.** Each provider in a waterfall consumes credits independently. A 5-provider waterfall on 10,000 rows can burn 50,000 credits if you're not using "only if empty" logic. Always test on small batches and monitor credit usage in table settings.

2. **No public REST API — webhook-only integration model.** Clay doesn't expose traditional API endpoints for managing tables or data programmatically. All external integration is via inbound webhooks (POST to table URL) and outbound HTTP API actions. This surprises developers expecting a standard CRUD API.

3. **CRM Sync requires Growth plan ($446+/mo).** Many users sign up for Launch expecting to sync with Salesforce/HubSpot, then discover CRM sync is plan-gated. Same for HTTP API and webhooks — all require Growth.

4. **Claygent results vary with prompt quality.** AI research agents are powerful but sensitive to instruction quality. Vague prompts produce inconsistent results. Always write specific, structured instructions and test on 5-10 rows before scaling.

5. **Data credit costs vary by provider — not all enrichments cost the same.** A Hunter email lookup might cost 1 credit while a ZoomInfo enrichment costs 10+. The waterfall order matters for cost optimization, not just coverage.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Enrichment strategy across all tools (for choosing providers, comparing approaches)
- `/sales-cadence` — Multi-channel outbound sequence design (for cadence strategy beyond Clay's sequencer)
- `/sales-intent` — Buying signals and account prioritization (for signal strategy beyond Clay's Signals)
- `/sales-prospect-list` — Building targeted prospect lists (for list strategy)
- `/sales-lead-score` — Lead scoring models (for scoring strategy using Clay's enrichment data)
- `/sales-b2b-advertising` — B2B advertising strategy (for ad strategy beyond Clay's Ad Sync)
- `/sales-data-hygiene` — CRM data hygiene (for data quality strategy using Clay's CRM sync)
- `/sales-integration` — Connecting tools with webhooks, Zapier, APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up waterfall enrichment for work emails
**User says**: "I have a list of 5,000 leads with names and companies but no emails. How do I find their work emails in Clay?"
**Skill does**: Recommends waterfall enrichment with provider order (Hunter → Dropcontact → Apollo → People Data Labs), "only if empty" logic between steps, small batch test first (50 rows), and credit budget estimate.
**Result**: Step-by-step waterfall setup with provider prioritization and cost optimization.

### Example 2: Building an intent-triggered outbound workflow
**User says**: "I want to automatically enrich and email prospects when they change jobs at target accounts."
**Skill does**: Walks through Signals setup (job change trigger), enrichment waterfall for new role details, Claygent for company research, Email Sequencer for personalized outreach, and CRM sync to log activity. Notes Launch plan minimum for Signals.
**Result**: End-to-end automated workflow from signal detection through outbound.

### Example 3: Clay vs Apollo for enrichment
**User says**: "Should I use Clay or Apollo for contact enrichment? We already have Apollo."
**Skill does**: Explains Clay's waterfall approach (150+ providers, higher coverage) vs Apollo's single-database model (275M+ contacts, simpler). Notes Clay as an enrichment orchestrator that can include Apollo as one provider. Recommends Clay for teams needing maximum coverage; Apollo alone for teams prioritizing simplicity and built-in outbound.
**Result**: Clear comparison with recommendation based on team needs.

## Troubleshooting

### Waterfall enrichment returning low match rates
**Symptom**: Running waterfall enrichment but only getting 30-40% email coverage.
**Cause**: Provider order may not be optimized, or input data quality is poor (misspelled company names, outdated titles).
**Solution**: Clean input data first — standardize company names and verify LinkedIn URLs. Reorder providers with highest-coverage providers first. Add more providers to the waterfall (5-7 is typical for 80%+ coverage). Check that "only if empty" logic is working correctly between providers. Test with a small batch to identify which providers perform best for your ICP.

### Credits running out faster than expected
**Symptom**: Data Credits depleted before the monthly cycle ends.
**Cause**: Waterfall enrichment without "only if empty" logic queries every provider for every row, even if the first one succeeds. Multi-column enrichment compounds costs (email + phone + company = 3x credits per row).
**Solution**: Add "only if empty" conditions between waterfall steps. Prioritize cheaper providers first. Run enrichment on high-priority segments rather than entire database. Monitor per-provider credit consumption in table settings. Consider upgrading plan for more credits if the ROI justifies it.

### CRM sync not working
**Symptom**: Enriched data isn't syncing back to Salesforce/HubSpot.
**Cause**: CRM sync requires Growth plan ($446+/mo). Also, field mapping must be configured correctly — Clay column names must map to CRM field API names, not display labels.
**Solution**: Verify you're on Growth plan or above. Check field mapping in the CRM integration settings — use API field names (e.g., `Email` not "Email Address"). Test sync with a single row before bulk operations. Check CRM-side permissions — the connected user needs create/update access on the target object.
