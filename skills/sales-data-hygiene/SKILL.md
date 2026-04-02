---
name: sales-data-hygiene
description: "CRM data quality, deduplication, enrichment automation, record matching, and data decay management. Use when cleaning CRM data, deduplicating contacts or accounts, fixing stale records, setting up auto-enrichment workflows, normalizing job titles or industries, auditing data quality, or managing data decay. Do NOT use for one-time enrichment of a prospect list (use /sales-enrich), building new prospect lists (use /sales-prospect-list), or ZoomInfo-specific config (use /sales-zoominfo). For platform-specific help, use /sales-zoominfo."
argument-hint: "[describe your data quality issue or goal]"
license: MIT
version: 1.0.0
tags: [sales, data-quality, deduplication, crm-hygiene]
---
# CRM Data Hygiene & Quality

Help the user clean, deduplicate, normalize, and maintain CRM data quality. This skill is tool-agnostic but includes platform-specific guidance for ZoomInfo OperationsOS, Salesforce native tools, HubSpot Operations Hub, Clay, LeanData, RingLead, Openprise, and DemandTools.

## Step 1 — Gather context

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

### Data quality audit framework

Before fixing data, measure what's broken:

1. **Completeness** — what % of records have all critical fields filled?
   - Email: target 95%+ for contacts
   - Phone: target 70%+ for key personas
   - Company: target 100% for accounts
   - Title/department: target 90%+ for contacts

2. **Accuracy** — what % of filled fields are actually correct?
   - Email deliverability: verify a sample with an email verification tool
   - Phone connectivity: check a sample of direct dials
   - Job title currency: compare against LinkedIn for a sample

3. **Duplication rate** — what % of records are duplicates?
   - Contact-level: same person, multiple records
   - Account-level: same company, different spellings
   - Cross-object: leads that are also contacts

4. **Decay rate** — how fast does your data go stale?
   - Industry average: 30% of B2B data decays annually
   - Sales contacts: ~20% change jobs each year
   - Direct dials: ~15% become invalid annually
   - Emails: ~22% bounce rate after 12 months without refresh

5. **Consistency** — are the same things called the same thing?
   - Job titles: "VP Sales" vs "Vice President of Sales" vs "VP, Sales"
   - Industries: "SaaS" vs "Software" vs "Technology"
   - Company names: "IBM" vs "International Business Machines" vs "IBM Corp"

### Deduplication strategy

| Approach | When to use | Risk level |
|----------|------------|------------|
| **Exact match** | Email, phone, domain — safest | Low |
| **Fuzzy match** | Names, company names, addresses | Medium — review matches before merging |
| **Rule-based** | Combine multiple fields (name + company + title) | Medium |
| **ML-based** | Large datasets with complex patterns | Low (if trained well) — but expensive |

**Merge rules** (which record wins):
- Most recently updated record keeps modifiable fields
- Most complete record keeps enrichment data
- Oldest record keeps the original owner/source
- Always preserve: original lead source, first touch date, opt-in status

### Data normalization

| Field | Common problems | Solution |
|-------|----------------|----------|
| Job title | Abbreviations, variations, custom titles | Map to standard taxonomy (C-Level, VP, Director, Manager, IC) |
| Industry | Free-text, overlapping categories | Map to SIC/NAICS or your internal taxonomy |
| Company name | Abbreviations, legal suffixes, DBA names | Normalize to official name, store variants as aliases |
| Phone | Mixed formats, extensions, country codes | E.164 format (+1XXXXXXXXXX) |
| Address | Inconsistent formatting, abbreviations | USPS standardization or Google Maps API |
| Country | Mix of codes and names | ISO 3166-1 alpha-2 codes |

### Enrichment automation

Set up ongoing enrichment to prevent decay:

1. **Trigger-based** — enrich when a record is created or updated
2. **Scheduled** — monthly/quarterly batch enrichment of all records
3. **Decay-based** — re-enrich records older than X days
4. **Event-based** — re-enrich when a contact's company has a news event (funding, acquisition)

## Step 3 — Platform-specific guidance

### In ZoomInfo (OperationsOS)

ZoomInfo OperationsOS is purpose-built for CRM data management at scale.

**Deduplication**:
- OperationsOS identifies duplicates across contacts, leads, and accounts using fuzzy matching
- Configurable match rules: email, name+company, phone, domain
- Bulk merge with configurable "winning record" rules
- Cross-object dedup: find leads that already exist as contacts

**Data orchestration**:
- Build automated workflows: new record → match existing → enrich → normalize → route
- Configure matching rules to prevent duplicates before they're created
- Set up enrichment triggers on record creation, field change, or scheduled interval
- Normalization rules for job titles, industries, company names

**Data decay management**:
- Auto-detect job changes and company changes
- Flag stale records based on last-enriched date
- Configure re-enrichment schedules (monthly recommended for active pipeline)
- Track data quality metrics over time

**Setup**: ZoomInfo admin → OperationsOS → Data Orchestration → Create Workflow.

### In Salesforce (Native)

**Duplicate Management**:
- Setup → Duplicate Management → Duplicate Rules
- Standard rules: match on email, name+company, phone
- Custom matching rules for complex scenarios
- Block or alert on duplicate creation

**Data.com Clean** (if licensed):
- Batch cleaning of contacts and accounts
- Auto-enrichment on record creation
- Scheduled cleanups

**Limitations**: Native dedup is basic — no fuzzy matching, no cross-object dedup, no automated merge. For enterprise-scale, pair with DemandTools or ZoomInfo OperationsOS.

### In HubSpot (Operations Hub)

**Deduplication**:
- Operations Hub includes AI-powered duplicate detection
- Suggests merge candidates with confidence scores
- Bulk merge with "primary record" selection
- Available on Operations Hub Professional+

**Data quality automation**:
- Programmable automation (Operations Hub Professional): custom code actions for normalization
- Data quality command center: monitor property completeness, formatting issues
- Automated formatting: capitalize names, standardize phone numbers, clean URLs

**Limitations**: HubSpot dedup is contact/company only — no custom object dedup. Formatting automation requires Operations Hub Professional ($800/mo+).

### In Clay

- **CRM enrichment & refresh**: Import contacts/accounts from Salesforce, HubSpot, or Dynamics 365 into Clay tables. Run waterfall enrichment to fill missing fields and refresh stale data. Push updated records back via bidirectional sync.
- **Automated data maintenance**: Set up scheduled imports to regularly pull CRM records into Clay, re-enrich, and sync back. Keeps contact data fresh without manual effort.
- **Duplicate detection**: Use enrichment data (LinkedIn URLs, company domains, verified emails) to identify and flag duplicate records before syncing back to CRM.
- **Data standardization**: Use Sculptor workflows to normalize job titles, company names, industry classifications, and other fields. Apply consistent formatting before pushing to CRM.
- **Plan gate**: CRM sync requires Growth plan ($446-495/mo). Free/Launch users can export enriched data as CSV for manual CRM import.
- **Best for**: RevOps teams wanting to automate CRM data enrichment and cleanup on a recurring basis.

### In LeanData / RingLead

**LeanData**:
- Lead-to-account matching (which leads belong to which accounts)
- Lead routing based on matching results
- Deduplication with merge automation
- Salesforce-native (runs inside SFDC)

**RingLead** (now ZoomInfo — acquired):
- Duplicate prevention on record creation
- Bulk dedup with configurable match rules
- Data normalization and standardization
- Works with Salesforce, HubSpot, Marketo

### In DemandTools (Validity)

- Most powerful Salesforce dedup tool
- Scenario-based: build complex match/merge rules
- Mass operations: update, delete, deduplicate at scale
- Import management: clean data before it enters CRM
- Single Table Dedupe, Table-to-Table Dedupe (cross-object)

### In Clearbit

Clearbit (now Breeze Intelligence in HubSpot) focuses on enrichment-driven data hygiene — standardizing and filling CRM records with firmographic and demographic data.

**Enrichment-based cleanup**:
- Enrich existing CRM records with standardized firmographic/demographic data
- Bulk enrichment via API or Breeze Intelligence in HubSpot
- Continuous data refresh: subscribe to enrichment updates when data changes (`subscribe: true` parameter) — records stay current without manual re-enrichment

**Normalization**:
- Standardized industry codes (NAICS, GICS, SIC) — normalizes messy free-text industry fields
- Normalized role and seniority classifications — standardizes job titles across records into consistent categories
- Corporate hierarchy: parent company and ultimate parent domain fields help deduplicate subsidiary records

**Data quality signals**:
- `emailProvider` flag identifies personal email addresses (gmail, yahoo) vs business emails — useful for filtering low-quality records
- Tech stack data helps identify outdated technology fields in CRM

**Best for**: Filling missing fields, standardizing industries and titles, flagging personal emails, and keeping records fresh with continuous enrichment. Pair with a dedup tool (ZoomInfo, DemandTools) for full hygiene coverage.

## Step 4 — Actionable guidance

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

## Related skills

- `/sales-clay` — Clay platform help
- `/sales-zoominfo` — ZoomInfo platform help (for OperationsOS-specific setup)
- `/sales-clearbit` — Clearbit platform help (enrichment, reveal, prospector)
- `/sales-enrich` — enrichment strategy across all providers
- `/sales-lead-routing` — lead assignment and territory rules (often paired with dedup)
- `/sales-lead-score` — lead scoring models (depend on clean data)
- `/sales-integration` — connecting data tools to CRM
- `/sales-prospect-list` — building prospect lists (data quality at the source)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
