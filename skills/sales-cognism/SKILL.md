---
name: sales-cognism
description: "Cognism platform help — B2B sales intelligence with Diamond Data phone-verified mobiles, Bombora intent signals, CRM enrichment, and GDPR/DNC compliance across 13 European lists. Use when contacts have missing or outdated phone numbers in EMEA, enrichment data keeps bouncing in Europe, you need phone-verified mobile numbers for cold calling, intent signals aren't translating to pipeline, CRM records are decaying and need automated refresh, or prospects are on Do Not Call lists and you need compliant data. Do NOT use for building prospect lists from scratch across tools (use /sales-prospect-list), general enrichment strategy across providers (use /sales-enrich), interpreting intent signals across platforms (use /sales-intent)."
argument-hint: "[describe what you need help with in Cognism — e.g., 'set up Diamond Data for UK prospecting' or 'API enrichment workflow']"
license: MIT
version: 1.0.0
tags: [sales, enrichment, prospecting, intent-data, platform]
---

# Cognism Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - a) Finding contacts / building prospect lists
   - b) Enriching existing CRM records
   - c) Setting up intent signals (Bombora)
   - d) API integration / Data-as-a-Service
   - e) Chrome Extension / Sales Companion setup
   - f) CRM integration (Salesforce / HubSpot / Pipedrive / Dynamics)
   - g) Something else

2. **Which Cognism plan are you on?**
   - a) Grow (Platinum) — standard database, no Diamond Data
   - b) Elevate (Diamond) — Diamond Data phone-verified + Bombora intent
   - c) Not sure / evaluating

3. **What's your primary market?**
   - a) UK / EMEA (Cognism's strongest coverage)
   - b) North America (coverage exists but has gaps vs ZoomInfo)
   - c) APAC / other (limited coverage)
   - d) Global

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to | Command |
|---|---|---|
| Building prospect lists across multiple tools | `/sales-prospect-list` | `/sales-prospect-list {user's question}` |
| General enrichment strategy / waterfall enrichment | `/sales-enrich` | `/sales-enrich {user's question}` |
| Interpreting buying signals / intent data strategy | `/sales-intent` | `/sales-intent {user's question}` |
| CRM data quality / deduplication | `/sales-data-hygiene` | `/sales-data-hygiene {user's question}` |
| Mapping buying committee at a target account | `/sales-account-map` | `/sales-account-map {user's question}` |
| Connecting Cognism to other tools | `/sales-integration` | `/sales-integration {user's question}` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Cognism-specific, continue to Step 3.

## Step 3 — Cognism platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

If they're asking about the API, also **read `references/cognism-api-reference.md`** for endpoint details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For EMEA prospecting**: Diamond Data is the key differentiator — phone-verified mobiles with 98% claimed accuracy and 22% connect rate. Prioritize it over standard data.
- **For US prospecting**: Cognism has gaps vs ZoomInfo in North America. Consider waterfall enrichment — use Cognism for EMEA, pair with ZoomInfo or Apollo for US.
- **For intent signals**: Bombora powers Cognism's intent data (Elevate plan only). Configure 8-15 topics relevant to your product. Combine with hiring/funding signals for composite scoring.
- **For API integration**: Search API finds contacts, Redeem API returns full data. Fair-use cap is ~2,000 records/user/month — plan batch operations around this.
- **For CRM sync**: HubSpot has 2-way sync (contacts, companies, tasks). Salesforce requires Professional+ plan. Set up exclusion lists to prevent re-enriching customers.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Fair-use cap**: "Unlimited" data access has a fair-use cap of ~2,000 records/user/month. Hitting it silently throttles access — plan bulk operations accordingly
- **Diamond Data is Elevate-only**: Phone-verified mobiles require the Elevate (Diamond) plan. Grow plan mobile numbers are not phone-verified and have significantly lower connect rates
- **US coverage gaps**: Cognism's EMEA data is industry-leading but US coverage has notable gaps vs ZoomInfo, especially for mid-market companies. Validate US data quality before committing
- **Auto-renewal trap**: Contracts auto-renew and notification emails reportedly go to spam. Calendar the renewal date immediately and negotiate 60+ days before expiration
- **Salesforce edition requirement**: Cognism does not integrate with Salesforce Essentials — you need Professional or above
- **GDPR complaints**: ICO has investigated complaints about Cognism data sourcing. If prospects mention receiving unsolicited calls from your team via Cognism data, escalate to compliance immediately
- **Email pattern-guessing**: Some email addresses are pattern-generated (firstname.lastname@domain) rather than verified. Run email validation through ZeroBounce or SafetyMails before large outbound campaigns

## Related skills

- `/sales-enrich` — General enrichment strategy, waterfall enrichment, credit optimization across all providers
- `/sales-prospect-list` — Building targeted prospect lists across Apollo, ZoomInfo, Cognism, Clay, and more
- `/sales-intent` — Interpreting buying signals, intent data strategy, account prioritization
- `/sales-data-hygiene` — CRM data quality, deduplication, record matching
- `/sales-account-map` — Mapping buying committees at target accounts
- `/sales-zoominfo` — ZoomInfo platform help (primary US competitor)
- `/sales-apollo` — Apollo platform help (affordable alternative)
- `/sales-6sense` — 6sense platform help (intent data competitor)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**Example 1**: "My cold call connect rates in the UK are terrible — most numbers go to voicemail or gatekeepers"
→ Walks through Diamond Data setup, phone-verified mobile filtering, DNC list compliance, and connect rate optimization for UK outbound.

**Example 2**: "I need to enrich 5,000 contacts from our CRM with verified emails and phones before a campaign"
→ Covers CRM enrichment workflow, fair-use cap planning, HubSpot/Salesforce sync setup, and data validation steps.

**Example 3**: "We're evaluating Cognism vs ZoomInfo — our team sells into both US and Europe"
→ Compares regional coverage strengths, pricing models, Diamond Data vs ZoomInfo's data, and recommends a dual-provider strategy for global teams.

## Troubleshooting

**Phone numbers reaching gatekeepers instead of direct lines**
- **Cause**: Using Grow plan standard mobiles instead of Diamond Data phone-verified numbers
- **Fix**: Upgrade to Elevate plan for Diamond Data. Filter searches to "Diamond verified" contacts only. For Grow plan, use the Chrome Extension on LinkedIn to find direct numbers one at a time

**Enrichment data is outdated — contacts have left the company**
- **Cause**: B2B data decays at ~30% annually. Cognism refreshes director-level data every 30 days, but not all records update at the same rate
- **Fix**: Set up scheduled CRM enrichment to auto-refresh records. Use job change alerts (Elevate plan) to catch movers. Cross-validate with LinkedIn before outreach to critical accounts

**API Search returning fewer results than expected**
- **Cause**: Fair-use cap (~2,000 records/user/month) or overly narrow filters
- **Fix**: Check monthly usage against fair-use limits. Broaden search filters — remove the most restrictive criterion first. For bulk needs, contact Cognism about DaaS packages with higher limits
