---
name: sales-enrich
description: "Enriches contacts and companies with verified emails, phones, and firmographic data — single-record, batch, and waterfall enrichment with credit optimization. Use when contact data is missing emails or phones, lead records are incomplete or outdated, enrichment credits are burning too fast, you need to enrich a batch of leads before a campaign, or a single enrichment provider isn't catching enough data. Do NOT use for building new prospect lists from scratch (use /sales-prospect-list), interpreting buying signals (use /sales-intent), CRM data hygiene and deduplication (use /sales-data-hygiene), ZoomInfo-specific enrichment config (use /sales-zoominfo), Clearbit/Breeze Intelligence platform help (use /sales-clearbit), RB2B platform help (use /sales-rb2b), 6sense platform help (use /sales-6sense), general Apollo platform help (use /sales-apollo), Clay platform help (use /sales-clay), or LeadMagic platform help (use /sales-leadmagic)."
argument-hint: "[describe what data you need — e.g., 'enrich 500 leads with emails' or 'clean up stale CRM contacts']"
license: MIT
version: 1.0.0
tags: [sales, enrichment, data, firmographics, contact-data]
---
# Enrich Contacts & Clean CRM Data

Help the user enrich contacts and companies with verified data, clean stale CRM records, and optimize their enrichment workflow. This skill is platform-agnostic but references Apollo.io as the primary tool. The same strategies apply to ZoomInfo, Clay, Lusha, Cognism, or any enrichment provider.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need to do?**
   - A) Enrich a list of contacts with emails/phones
   - B) Enrich company/account records with firmographic data
   - C) Clean up stale or incomplete CRM data
   - D) Set up ongoing auto-enrichment
   - E) Deduplicate contacts or accounts
   - F) Verify existing email addresses before a campaign
   - G) Other — describe it

2. **How many records are involved?**
   - A) Under 100 (manual/one-time)
   - B) 100-1,000 (batch job)
   - C) 1,000-10,000 (bulk operation)
   - D) 10,000+ (large-scale cleanup)
   - E) Ongoing (continuous enrichment of new records)

3. **What enrichment tool(s) do you have?**
   - A) Apollo.io
   - B) ZoomInfo
   - C) Clay
   - D) Lusha / Cognism
   - E) Clearbit / Breeze
   - F) Multiple providers (waterfall)
   - G) None yet — recommend one

4. **What data do you need?**
   - A) Email addresses (verified/deliverable)
   - B) Phone numbers (direct/mobile)
   - C) Both email and phone
   - D) Firmographic data (company size, revenue, industry, tech stack)
   - E) All of the above

## Step 2 — Enrichment strategy

Choose the right approach based on volume and frequency:

### Single-record enrichment
- **When**: Researching a specific prospect, manual prospecting
- **How**: Look up individual records in your enrichment tool or via API
- **Credit cost**: 1 credit per person (email), more for phone numbers
- **Best for**: High-value ABM targets, executive-level contacts

### Batch enrichment
- **When**: Enriching a list before launching a campaign
- **How**: Upload CSV or select records in-platform for bulk enrichment
- **Credit cost**: 1 credit per record enriched (plan carefully)
- **Best for**: Campaign prep, list cleaning before outreach

### Auto-enrichment
- **When**: Keeping CRM data fresh continuously
- **How**: Set up rules to enrich new records on creation or on a schedule
- **Credit cost**: Ongoing — budget credits monthly
- **Best for**: Teams with steady lead flow who need data quality without manual effort

### Waterfall enrichment
- **When**: Single provider doesn't have enough coverage
- **How**: Try Provider A first → if no result, try Provider B → then Provider C
- **Credit cost**: Only pay for successful enrichments at each level
- **Best for**: Maximizing coverage when targeting niche personas or international contacts
- **Key waterfall providers**:

| Provider | Strength | Coverage |
|----------|----------|----------|
| Clay | Purpose-built waterfall across 150+ providers | Broadest — aggregates multiple sources |
| Apollo | Email + phone enrichment (waterfall in beta) | 275M+ contacts |
| ZoomInfo | Enterprise-grade firmographic + contact | 321M+ contacts |
| Seamless.AI | Real-time verified emails + mobiles | 1.8B+ emails, 414M+ mobiles |
| Cognism | EMEA/international mobile numbers | Strong EU coverage |
| Lusha | Quick email + direct dial lookup | 100M+ contacts |
| Hunter.io | Domain search + email finder + verifier | Email-focused, bulk operations |
| Tomba | Domain search + email finder + bulk enrichment | 430M+ indexed emails |
| Prospeo | 5-step email verification + company enrichment | 280M+ leads |
| Snov.io | Email finder + verifier + campaigns | 600M+ contacts |

For detailed per-provider workflows, API endpoints, and credit economics, see `references/platforms.md`

## Step 3 — Execute the enrichment

### Pre-enrichment checklist
- [ ] **Deduplicate first**: Remove duplicate records before enriching — don't pay to enrich the same person twice
- [ ] **Filter to qualified records only**: Don't enrich contacts you'll never reach out to
- [ ] **Check existing data**: Skip records that already have verified emails/phones
- [ ] **Estimate credit cost**: Records × credit cost per record. Stay within budget.
- [ ] **Set enrichment scope**: Choose which fields to enrich (email only is cheaper than email + phone + firmographic)

For platform-specific enrichment workflows, API endpoints, credit economics, and bulk operation instructions, see `references/platforms.md`.

### Compliance checklist

Before enriching and contacting, verify compliance with data privacy regulations in your target regions:

**EU contacts (GDPR)**:
- [ ] You have a **lawful basis** for processing (legitimate interest for B2B outreach is common, but document it)
- [ ] Your enrichment provider has a GDPR-compliant data sourcing policy (check their DPA)
- [ ] You can honor **right to erasure** requests — if someone asks to be deleted, you can remove them from all systems
- [ ] Your outreach includes a clear way to opt out
- [ ] You're not enriching personal data beyond what's necessary (data minimization principle)

**US contacts (CAN-SPAM)**:
- [ ] Every email includes a **physical mailing address**
- [ ] Every email includes a working **unsubscribe link**
- [ ] Unsubscribe requests are honored within **10 business days**
- [ ] Subject lines are not deceptive
- [ ] The email is identified as an advertisement (if applicable)

**California contacts (CCPA/CPRA)**:
- [ ] You provide a "Do Not Sell My Personal Information" option if applicable
- [ ] You can disclose what personal data you've collected if a consumer requests it
- [ ] Your enrichment vendor's data collection practices comply with CCPA

**General rules**:
- If someone unsubscribes, suppress them globally — don't re-enrich and re-add them next month
- If you're enriching contacts in bulk, check regional distribution first and apply the strictest relevant regulation
- Keep a log of where enriched data came from (which provider, when) for audit purposes

### Data quality scoring

After enrichment, score your data quality:

| Field | Quality level | Action |
|---|---|---|
| Email verified + deliverable | High | Ready for outreach |
| Email found but unverified | Medium | Run through verification tool (NeverBounce, ZeroBounce) before sending |
| Email not found | Low | Try alternate enrichment provider or find via LinkedIn/company website |
| Phone — direct/mobile | High | Ready for calling |
| Phone — HQ/switchboard | Low | Not useful for cold calling — try to find direct line |

## Step 4 — CRM data hygiene

For stale data identification, deduplication strategy, enrichment schedules, and ongoing data quality automation, use `/sales-data-hygiene`. That skill covers record matching, merge rules, audit trails, and refresh cadences in detail.

**Key rule**: Always deduplicate before enriching — don't pay to enrich the same person twice.

## Step 5 — Credit optimization

### Credit-saving strategies

- **Enrich only qualified records**: Apply ICP filters before enriching — don't waste credits on bad-fit contacts
- **Check existing data first**: Skip records that already have the data you need
- **Prioritize email over phone**: Email credits are typically cheaper. Only reveal phone numbers for contacts you'll actually call.
- **Use waterfall strategically**: Start with the cheapest provider, escalate to premium for high-value targets
- **Batch over real-time**: Bulk enrichment is often more credit-efficient than one-at-a-time
- **Monitor usage weekly**: Set up alerts when you hit 80% of monthly credit budget

For platform-specific credit economics, see the relevant platform skill (`/sales-apollo`, `/sales-zoominfo`, `/sales-clay`, etc.) or `references/platforms.md`.

## Gotchas

- **Don't enrich before deduplicating.** Claude often recommends "enrich everything, then clean up." This wastes credits on duplicate records. Always dedup first, then enrich the clean list.
- **Don't assume enriched emails are deliverable.** Enrichment tools find email addresses — they don't guarantee deliverability. Always run enriched emails through a verification tool (NeverBounce, ZeroBounce, MillionVerifier) before high-volume campaigns. Apollo-reported "verified" emails still bounce at 5-10% rates.
- **Don't enrich an entire CRM database at once.** Claude tends to suggest bulk-enriching everything. This burns through credits fast and enriches records you may never contact. Start with your highest-priority segments and expand.
- **Don't ignore phone number credit costs.** Mobile number reveals are 5-10x more expensive than email reveals in most tools. Only reveal phone numbers for contacts your team will actually call — not the entire list.
- **Don't set up auto-enrichment without a credit budget cap.** Auto-enrichment can burn through an entire month's credits in days if configured too broadly. Set a monthly cap and limit auto-enrichment to new records matching your ICP.
- **Don't enrich contacts without checking regional compliance.** Enriching EU contacts without a lawful basis for processing (GDPR), or emailing US contacts without an unsubscribe link (CAN-SPAM), exposes you to legal risk. See the compliance checklist in Step 3 before enriching in bulk.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-prospect-list` — Build the prospect list that you'll then enrich
- `/sales-intent` — Layer buying signals on enriched contacts to prioritize outreach
- `/sales-cadence` — Design the outbound sequence for enriched contacts
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment automation
- `/sales-apollo` — Apollo.io platform help (enrichment settings, credit management)
- `/sales-clay` — Clay platform help (waterfall enrichment across 150+ providers)
- `/sales-zoominfo` — ZoomInfo platform help (enrichment, intent, OperationsOS)
- `/sales-clearbit` — Clearbit / Breeze Intelligence platform help
- `/sales-hunter` — Hunter.io (Domain Search, Email Finder, Email Verifier)
- `/sales-seamless` — Seamless.AI (1.8B+ contacts, CRM Enrich, Autopilot)
- `/sales-snov` — Snov.io (email finder, verifier, multichannel campaigns)
- `/sales-brandjet` — BrandJet AI platform help — multi-channel outreach, brand intelligence, AI monitoring
- `/sales-sendr` — Sendr platform help (Data Studio enrichment, Lead Finder 479M+ contacts, personality analysis)
- `/sales-leadiq` — LeadIQ platform help (Chrome extension prospecting, champion tracking, CRM enrichment, GraphQL API)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill

## Examples

### Example 1: Pre-campaign enrichment
**User says**: "I have 500 contacts for a campaign but only 60% have emails. Enrich the rest."
**Skill does**:
1. Recommends deduping the list first
2. Filters to records missing emails
3. Sets up batch enrichment in Apollo with email-only scope (save phone credits)
4. Recommends email verification before launching the sequence
**Result**: List enriched to 85%+ email coverage, verified and ready for outreach

### Example 2: CRM data cleanup
**User says**: "Our Salesforce has 50,000 contacts but half the data is stale. Help me clean it up."
**Skill does**:
1. Identifies stale data patterns (bounced emails, outdated titles, missing fields)
2. Recommends a phased approach: dedup → prioritize top segments → enrich in batches
3. Sets up an ongoing enrichment schedule to prevent future staleness
4. Calculates credit budget for the cleanup
**Result**: Phased CRM hygiene plan with credit-conscious enrichment strategy

## Troubleshooting

### Low enrichment match rate
**Cause**: Prospects are in niche industries, use uncommon email domains, or are very senior (C-suite data is harder to find)
**Solution**: Try waterfall enrichment across multiple providers. For C-suite, try LinkedIn manual lookup or ask for referral introductions instead of cold outreach.

### Enriched emails bouncing
**Cause**: Data provider has stale records, or person recently changed jobs
**Solution**: Run enriched emails through a dedicated verification service before sending. Set up a feedback loop — when emails bounce, re-enrich or remove the contact.

### Credits running out mid-month
**Cause**: Over-enrichment (enriching too many records or enriching phone numbers unnecessarily)
**Solution**: Review usage in Settings > Usage. Restrict enrichment to ICP-qualified records only. Limit phone reveals to contacts tagged for calling. Consider upgrading plan if consistently hitting limits.
