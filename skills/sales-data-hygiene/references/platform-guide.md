# CRM Data Hygiene Platform Guide

## Data Quality Audit Framework

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

## Deduplication Strategy

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

## Data Normalization

| Field | Common problems | Solution |
|-------|----------------|----------|
| Job title | Abbreviations, variations, custom titles | Map to standard taxonomy (C-Level, VP, Director, Manager, IC) |
| Industry | Free-text, overlapping categories | Map to SIC/NAICS or your internal taxonomy |
| Company name | Abbreviations, legal suffixes, DBA names | Normalize to official name, store variants as aliases |
| Phone | Mixed formats, extensions, country codes | E.164 format (+1XXXXXXXXXX) |
| Address | Inconsistent formatting, abbreviations | USPS standardization or Google Maps API |
| Country | Mix of codes and names | ISO 3166-1 alpha-2 codes |

## Enrichment Automation

Set up ongoing enrichment to prevent decay:

1. **Trigger-based** — enrich when a record is created or updated
2. **Scheduled** — monthly/quarterly batch enrichment of all records
3. **Decay-based** — re-enrich records older than X days
4. **Event-based** — re-enrich when a contact's company has a news event (funding, acquisition)

## Platform-Specific Guidance

### In ZoomInfo (OperationsOS)

ZoomInfo OperationsOS is purpose-built for CRM data management at scale.

**Deduplication**:
- OperationsOS identifies duplicates across contacts, leads, and accounts using fuzzy matching
- Configurable match rules: email, name+company, phone, domain
- Bulk merge with configurable "winning record" rules
- Cross-object dedup: find leads that already exist as contacts

**Data orchestration**:
- Build automated workflows: new record -> match existing -> enrich -> normalize -> route
- Configure matching rules to prevent duplicates before they're created
- Set up enrichment triggers on record creation, field change, or scheduled interval
- Normalization rules for job titles, industries, company names

**Data decay management**:
- Auto-detect job changes and company changes
- Flag stale records based on last-enriched date
- Configure re-enrichment schedules (monthly recommended for active pipeline)
- Track data quality metrics over time

**Setup**: ZoomInfo admin -> OperationsOS -> Data Orchestration -> Create Workflow.

### In Salesforce (Native)

**Duplicate Management**:
- Setup -> Duplicate Management -> Duplicate Rules
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

### In Attio

Attio's flexible data model makes hygiene both easier (custom attributes, no rigid schema) and harder (more objects to maintain).

**Built-in hygiene features**:
- Auto-enrichment fills contact and company fields from email/domain data on record creation
- AI Research Agent (Pro plan) enriches records from public web sources
- Merge duplicates via UI — select records and merge with field-level control
- Record references enforce relationships between objects

**Custom data model considerations**:
- Custom objects multiply hygiene surface area — each object needs its own dedup and completeness rules
- No built-in formula fields — computed hygiene scores (completeness %, last activity) require automations or external tools
- Attribute types enforce data formats (email, phone, domain) — use these over free-text to prevent format drift

**Automation-based hygiene**:
- Set up automations to flag records missing critical fields (e.g., no email, no company)
- Use "record updated" triggers to normalize data on entry (e.g., standardize country names)
- Schedule periodic enrichment re-runs via API for stale records

**Best for**: Teams under 50 using Attio as primary CRM. For enterprise-scale hygiene with advanced dedup rules, ZoomInfo OperationsOS or DemandTools are more powerful.

### In Treasure Data (CDP)

Treasure Data approaches data hygiene from a CDP perspective — unifying messy data from 400+ sources into clean, deduplicated customer profiles.

**Identity resolution as dedup**:
- Parent table defines the unified profile schema. Child tables (website events, CRM, POS, email) feed into it.
- Identity resolution rules match records across sources: deterministic (email, phone, customer ID) and probabilistic (device IDs, cookies).
- Source priority order resolves conflicts — if CRM says "John" and email says "Jonathan", the higher-priority source wins.
- Test unification in QA sandbox before production — bad identity rules create false merges that are hard to undo.

**Data quality at ingestion**:
- Schema-flexible ingestion means bad data gets in easily. Define validation rules in Treasure Workflows to catch issues before they reach the parent table.
- Postback API is case-sensitive — column names must match the target table schema exactly (including casing). Mismatched casing silently drops data.
- Monitor profile count growth — overly loose identity rules create too many profiles (inflating "No Compute" pricing costs).

**Ongoing maintenance**:
- Schedule re-unification jobs to pick up new identity signals as more data arrives.
- Use Treasure Workflows (DAGs) to orchestrate: ingest → validate → unify → segment. Don't manage individual job schedules.
- Audit source priority order quarterly — data source quality changes over time.

**Best for**: Enterprise B2C companies with 400+ data sources that need centralized identity resolution across channels. Requires SQL knowledge for advanced transformations. Implementation takes 8-12 weeks with professional services ($30K-$100K+).

### In Tealium (CDP)

Tealium approaches data hygiene through real-time identity resolution in AudienceStream CDP, unifying profiles from 1,300+ sources.

**Identity resolution as dedup**:
- Visitor Switching merges profiles when a shared identifier (email, customer ID, phone) matches across devices/channels.
- Profile merge rules are configurable — deterministic matching (email, login ID) is safer than probabilistic (device fingerprints, cookies).
- Test merge rules in QA environment before production — bad rules create false merges that blend distinct customers.

**Data quality at ingestion**:
- EventStream connectors can validate and transform data before it reaches AudienceStream profiles.
- The Collect HTTP API is case-sensitive for all field names — mismatched casing silently drops data or creates duplicate attributes.
- Event-based pricing means dirty data (duplicate events, bot traffic) inflates costs. Filter at the source.

**Ongoing maintenance**:
- Monitor profile count growth — overly loose identity rules create too many profiles (inflating event-based pricing).
- Use AudienceStream enrichments to flag data quality issues (e.g., badge for "missing email", metric for "days since last event").
- Connector error rates surface data quality problems downstream — if a connector consistently fails, the source data may be malformed.

**Best for**: Enterprise organizations with 1,300+ integration touchpoints needing centralized real-time identity resolution. Marketer-friendly AudienceStream UI for non-technical teams. Implementation takes 4-12 weeks with professional services.

### In Cognism (CRM Enrichment)

Cognism approaches data hygiene through automated CRM enrichment — refreshing stale records with verified contact and company data.

**Automated record refresh**:
- Connect Salesforce (Professional+) or HubSpot (2-way sync) to Cognism for ongoing enrichment.
- Director-level data is refreshed every 30 days — keeps job titles, companies, and phone numbers current.
- Job change detection (Elevate plan) catches contacts who've moved companies — prevents outreach to people who've left.

**Duplicate prevention**:
- Import existing CRM contacts into Cognism to enable exclusion filters — prevents creating duplicate records when prospecting.
- HubSpot integration imports Contacts, Companies, and Tasks for matching.
- Set up exclusion lists for customers, competitors, and opted-out contacts.

**Data decay management**:
- B2B data decays at ~30% annually. Cognism's scheduled enrichment catches changes faster than manual audits.
- Diamond Data phone verification (Elevate plan) adds human-verified mobile numbers — reduces the "wrong number" problem that plagues CRM phone fields.
- Email addresses may be pattern-generated — run periodic validation through ZeroBounce or SafetyMails to catch invalid emails before they bounce.

**Fair-use cap consideration**:
- ~2,000 records/user/month under "unlimited" plans. For CRMs with 50K+ contacts, enrichment must be batched across multiple users or months.
- Prioritize enrichment on active pipeline contacts and recently engaged leads — don't waste fair-use allocation on cold, inactive records.

**Best for**: Mid-market to enterprise teams with EMEA-focused CRMs that need ongoing phone number and contact verification. Cognism's Diamond Data is uniquely valuable for keeping EMEA phone fields accurate. For US-heavy CRMs, ZoomInfo OperationsOS may be stronger.

### In People.ai (Backstory)

People.ai approaches data hygiene by eliminating the root cause of stale CRM data: manual rep entry. Instead of cleaning bad data after the fact, it prevents bad data from entering.

**Automatic activity capture**:
- Captures every email, call, meeting, and chat message and auto-associates with CRM contacts, accounts, and opportunities.
- No rep action required — activities are logged server-side from Gmail/Outlook/Zoom/Teams/Slack.
- Eliminates the "garbage in" problem: CRM data reflects actual activity, not stale rep estimates.
- Analyzes 2 years of historical data on day one — fills in activity gaps retroactively.

**Contact creation and association**:
- Auto-creates contacts in CRM from email/meeting participants when they don't already exist.
- Associates activities with the correct opportunity based on participant and timing signals.
- Multi-CRM support (Salesforce, Dynamics, Oracle) — maintains data quality across CRM instances.

**Pipeline data accuracy**:
- Deal intelligence signals (engagement scoring, single-threading detection) surface data quality issues at the deal level.
- Stakeholder mapping identifies which contacts are missing from opportunities — a form of data completeness checking.

**Limitations**:
- People.ai captures activity metadata, not call content. It won't populate methodology fields (MEDDPICC/BANT) from calls — for that, use Gong, Sybill, or Scratchpad.
- Contact matching depends on email addresses: if CRM contacts have outdated emails, activities won't associate correctly. Run an email verification pass first.
- Enterprise-only pricing. No free tier or self-serve. Budget $50-100+/user/month.
- Activity processing can take 24-48 hours for call data — not real-time.

**Best for**: Enterprise teams where CRM data decay is primarily caused by reps not logging activities. People.ai solves the input problem — once activities flow automatically, downstream data hygiene issues (stale deals, missing contacts, incomplete opportunity records) decrease dramatically. For CRM field enrichment (job titles, phone numbers, company data), pair with ZoomInfo or Cognism.
