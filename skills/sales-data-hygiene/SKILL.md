---
name: sales-data-hygiene
description: "CRM data quality, deduplication, enrichment automation, record matching, and data decay management. Use when CRM is full of duplicates, records are outdated or decaying, fields are missing or inconsistent, job titles and industries don't match across records, you're not sure how bad your data quality is, or enrichment keeps overwriting good data. Do NOT use for one-time enrichment of a prospect list (use /sales-enrich), building new prospect lists (use /sales-prospect-list), or ZoomInfo-specific config (use /sales-zoominfo). For platform-specific help, use /sales-zoominfo."
argument-hint: "[describe your data quality issue or goal]"
license: MIT
version: 1.0.0
tags: [sales, data-quality, deduplication, crm-hygiene]
---
# CRM Data Hygiene & Quality

Help the user clean, deduplicate, normalize, and maintain CRM data quality. This skill is tool-agnostic but includes platform-specific guidance for ZoomInfo OperationsOS, Salesforce native tools, HubSpot Operations Hub, Clay, LeanData, RingLead, Openprise, and DemandTools.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's the main data problem?**
   - A) Duplicate contacts, leads, or accounts
   - B) Stale/outdated records (job changes, company changes)
   - C) Missing fields (no phone, no email, incomplete company data)
   - D) Inconsistent data (job titles, industries, company names formatted differently)
   - E) Compliance issues (opt-outs, GDPR, stale consent)
   - F) General data audit — don't know what's wrong yet
   - G) Setting up ongoing data hygiene automation
   - H) Other — describe it

2. **What CRM are you using?**
   - A) Salesforce
   - B) HubSpot
   - C) Microsoft Dynamics
   - D) Pipedrive
   - E) Other CRM
   - F) Custom/in-house system

3. **How many records are affected?**
   - A) Under 1,000 (small cleanup)
   - B) 1,000-10,000 (moderate)
   - C) 10,000-100,000 (large)
   - D) 100,000+ (enterprise-scale)
   - E) Not sure — need to audit first

4. **What tools do you have for data operations?**
   - A) ZoomInfo OperationsOS
   - B) HubSpot Operations Hub
   - C) Salesforce native (duplicate management, data.com)
   - D) Clay
   - E) LeanData / RingLead / Openprise
   - F) DemandTools (Validity)
   - G) None — using manual processes
   - H) Other — describe it

## Step 2 — Strategy and approach

**Read `references/platform-guide.md`** for detailed audit frameworks, deduplication strategies, normalization tables, enrichment automation, and platform-specific guidance.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3 — Actionable guidance

### Quick wins (do these first)
1. **Remove obvious duplicates** — exact email match dedup is safe and fast
2. **Fix formatting** — standardize phone numbers, capitalize names, normalize countries
3. **Fill critical gaps** — bulk enrich records missing email or phone
4. **Remove dead records** — hard bounces, invalid emails, disconnected phones

### Ongoing hygiene program
1. **Prevent duplicates at entry** — enable duplicate rules on record creation
2. **Enrich on create** — auto-enrich new records within minutes of creation
3. **Monthly dedup sweep** — run fuzzy match dedup monthly, review and merge
4. **Quarterly refresh** — re-enrich all active records every 90 days
5. **Annual purge** — remove records with no activity in 12+ months (archive, don't delete)

### Metrics to track
- **Duplicate rate** — % of records with duplicates (target: <2%)
- **Field completeness** — % of critical fields filled (target: 95%+)
- **Bounce rate** — email bounce rate on outbound (target: <3%)
- **Data age** — median days since last enrichment (target: <90)
- **Merge rate** — duplicates merged per month (should trend down over time)

## Gotchas

1. **Merge before you enrich** — enriching duplicate records wastes credits. Dedup first, then enrich the surviving records.

2. **Test dedup rules on a sample first** — fuzzy matching can produce false positives (merging records that shouldn't be merged). Always review a sample of 50-100 merge candidates before running bulk operations.

3. **Preserve lead source on merge** — the most common post-merge complaint is losing original lead source attribution. Configure merge rules to keep the oldest record's lead source.

4. **Don't delete — archive** — instead of deleting stale records, move them to an archive status. Deleted records lose history; archived records can be reactivated if the contact returns.

5. **GDPR and compliance** — data hygiene must respect opt-out and consent records. Never re-enrich a contact who has opted out. Check compliance status before any bulk enrichment operation.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-hubspot` — HubSpot platform help (Data Hub data sync, data quality automation, deduplication)
- `/sales-attio` — Attio platform help (AI-native CRM with custom objects)
- `/sales-blueconic` — BlueConic CDP — profile unification, identity resolution, audience activation
- `/sales-tealium` — Tealium CDP — Real-Time CDP, identity resolution, 1300+ connectors
- `/sales-cdp` — CDP comparison and selection strategy across platforms
- `/sales-clay` — Clay platform help
- `/sales-zoominfo` — ZoomInfo platform help (for OperationsOS-specific setup)
- `/sales-clearbit` — Clearbit platform help (enrichment, reveal, prospector)
- `/sales-enrich` — enrichment strategy across all providers
- `/sales-lead-routing` — lead assignment and territory rules (often paired with dedup)
- `/sales-lead-score` — lead scoring models (depend on clean data)
- `/sales-integration` — connecting data tools to CRM
- `/sales-prospect-list` — building prospect lists (data quality at the source)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM data audit
**User says**: "Our Salesforce has 50,000 contacts and I suspect a lot of them are duplicates or outdated. Where do I start?"
**Skill does**: Walks through the data quality audit framework — measure completeness, accuracy, duplication rate, and decay. Recommends starting with exact-match email dedup (safest), then running a field completeness report, then sampling 100 records against LinkedIn to estimate accuracy.
**Result**: User has a data quality scorecard and prioritized cleanup plan.

### Example 2: Setting up ongoing hygiene
**User says**: "We keep getting duplicates in HubSpot and our data goes stale within months. How do we automate this?"
**Skill does**: Recommends HubSpot Operations Hub for dedup + ZoomInfo or Clay for enrichment. Sets up duplicate prevention rules on creation, auto-enrichment for new records, and a quarterly re-enrichment schedule.
**Result**: User has an automated hygiene program that prevents duplicates and keeps data fresh.

### Example 3: Pre-campaign data cleanup
**User says**: "We're about to launch a big outbound campaign to 10,000 contacts. How do I make sure the data is clean first?"
**Skill does**: Recommends a pre-campaign checklist: dedup the list, verify emails with a dedicated verification tool, re-enrich records older than 90 days, remove contacts at companies that no longer fit ICP, and check opt-out/DNC status.
**Result**: User launches campaign with verified, deduplicated, compliant data — lower bounce rate, higher deliverability.

## Troubleshooting

### Dedup merging wrong records
**Symptom**: Fuzzy match dedup merged two different people who happen to have similar names at the same company
**Cause**: Match rules too loose — matching on name + company without additional criteria
**Solution**: Tighten match rules: require email OR phone match in addition to name + company. Always run in "review" mode before "auto-merge" mode. Add title or department as a tiebreaker.

### Enrichment not filling expected fields
**Symptom**: Auto-enrichment runs but many records still have empty phone or email fields
**Cause**: Single enrichment provider doesn't have coverage for all contacts. Coverage varies by geography, seniority, and industry.
**Solution**: Implement waterfall enrichment — try Provider A, if no result try Provider B, then Provider C. Use `/sales-enrich` for waterfall setup. Common waterfall: ZoomInfo → Apollo → Lusha.

### Data quality metrics not improving
**Symptom**: Running monthly dedup and enrichment but duplicate rate and completeness aren't improving
**Cause**: New duplicates are being created faster than they're being merged. Root cause is usually web forms, imports, or integrations creating records without duplicate checks.
**Solution**: Fix the source — enable duplicate prevention rules on all record creation paths (web forms, API imports, manual creation, integration syncs). Prevention is more effective than cleanup.
