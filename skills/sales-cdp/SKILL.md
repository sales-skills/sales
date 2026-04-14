---
name: sales-cdp
description: "CDP comparison, selection, and implementation strategy — Customer Data Platform evaluation across Tealium, BlueConic, Segment, Treasure Data, mParticle, RudderStack, Hightouch, Amperity. Use when choosing between CDPs, evaluating whether you need a CDP, customer data is scattered across dozens of tools, profiles aren't unifying across channels, you need real-time audience activation, comparing composable vs bundled CDP approaches, or planning a CDP implementation. Do NOT use for platform-specific CDP setup (use /sales-tealium, /sales-blueconic, /sales-treasuredata, or /sales-rudderstack) or CRM data cleanup without a CDP (use /sales-data-hygiene)."
argument-hint: "[describe your CDP question or selection criteria]"
license: MIT
version: 1.0.0
tags: [sales, cdp, data-platform, strategy]
---

# CDP Comparison & Selection Strategy

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

1. **What's your primary goal?**
   - A) Choosing between CDPs (evaluation/comparison)
   - B) Deciding if I even need a CDP
   - C) Planning a CDP implementation
   - D) Unifying customer data across channels
   - E) Activating audiences to ad platforms, email, CRM
   - F) Setting up real-time personalization
   - G) Warehouse-first / composable CDP approach
   - H) Other — describe it

2. **What's your technical maturity?**
   - A) No data infrastructure — starting from scratch
   - B) Basic analytics (GA, Mixpanel) but no unified profiles
   - C) Data warehouse exists (Snowflake, BigQuery) but not activated
   - D) Current CDP that we want to replace
   - E) Homegrown system we've outgrown

3. **Who will own the CDP?**
   - A) Marketing team (need no-code/low-code)
   - B) Engineering team (API-first, developer tools)
   - C) Data team (SQL, warehouse, dbt)
   - D) Cross-functional (marketing + engineering + data)

4. **What's your scale?**
   - A) Under 100K monthly active users
   - B) 100K-1M MAU
   - C) 1M-10M MAU
   - D) 10M+ MAU

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Tealium-specific setup or config | `/sales-tealium {user's question}` |
| BlueConic-specific setup or config | `/sales-blueconic {user's question}` |
| Treasure Data-specific setup or config | `/sales-treasuredata {user's question}` |
| RudderStack-specific setup or config | `/sales-rudderstack {user's question}` |
| CRM data dedup without a CDP | `/sales-data-hygiene {user's question}` |
| Email marketing strategy | `/sales-email-marketing {user's question}` |
| Retargeting ad strategy | `/sales-retargeting {user's question}` |
| Contact enrichment | `/sales-enrich {user's question}` |

When routing, provide the exact command.

## Step 3 — CDP comparison reference

**Read `references/platform-guide.md`** for the full CDP comparison — positioning, feature matrices, pricing guidance, decision frameworks, implementation timelines.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the comparison reference — focus on the user's specific situation.

**Decision framework (quick version):**
- **Marketer-first, no-code segmentation, mid-market**: BlueConic
- **Enterprise, 1000+ integrations, tag management heritage**: Tealium
- **Enterprise, AI/ML-native, 400+ connectors, heavy SQL**: Treasure Data
- **Developer-first, quick implementation, warehouse-centric**: Segment
- **Mobile-first, SDK-focused, gaming/media apps**: mParticle
- **Open-source, self-hosted, full control**: RudderStack
- **Warehouse-native activation (reverse ETL)**: Hightouch
- **Identity-focused, retail/hospitality**: Amperity

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

1. **CDPs don't fix bad data** — if your source systems have duplicates, missing fields, or inconsistent formats, the CDP will unify garbage. Clean data at the source first (use `/sales-data-hygiene`).

2. **Identity resolution quality varies wildly** — duplication rates of 10-30% are common across CDPs. Test identity resolution with your actual data in a POC, not just vendor demos.

3. **"Real-time" means different things** — event ingestion may be fast but profile updates or downstream activation may lag by minutes or hours. Test end-to-end latency, not just ingestion speed.

4. **Implementation takes 2-6 months for enterprise CDPs** — Tealium and Treasure Data require careful planning and often professional services. Segment and RudderStack can POC in days.

5. **Event-based pricing catches enterprises off guard** — high-volume sites can see costs spike unpredictably. Negotiate volume commitments and overage caps upfront.

## Related skills

- `/sales-tealium` — Tealium platform help — Real-Time CDP, iQ Tag Management, EventStream, 1300+ connectors
- `/sales-blueconic` — BlueConic CDP — profile unification, segmentation, audience activation, Jebbit Experiences
- `/sales-treasuredata` — Treasure Data enterprise CDP — AI Marketing Cloud, 400+ connectors, SQL-based
- `/sales-rudderstack` — RudderStack platform help — warehouse-native CDP, Event Streams, Reverse ETL, open-source
- `/sales-data-hygiene` — CRM data quality — clean your data before feeding it to a CDP
- `/sales-retargeting` — Retargeting strategy — activate CDP audiences to ad platforms
- `/sales-integration` — Tool integration — connecting CDP to CRM, email, ad platforms
- `/sales-enrich` — Contact enrichment — augment CDP profiles with third-party data
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: CDP selection
**User says**: "We have 500K monthly users across web and mobile. Our marketing team needs to build audiences without engineering help. Budget is $50K-$100K/year."
**Skill does**: Compares BlueConic (marketer-first, mid-market pricing) vs Tealium (enterprise, more integrations but steeper learning curve) vs Segment (developer-first, may not suit a non-technical marketing team). Recommends BlueConic for the marketer-first UI, or Tealium if the 1,300+ integration catalog is critical.
**Result**: User has a shortlist of 2 CDPs to evaluate with clear pros/cons for their situation.

### Example 2: Do I need a CDP?
**User says**: "We use HubSpot for CRM, Mailchimp for email, and Google Ads. Our data feels messy. Do we need a CDP?"
**Skill does**: Asks about pain points — are profiles fragmented? Do you need real-time activation? How many data sources? For a 3-tool stack, suggests starting with native integrations and `/sales-data-hygiene` before investing in a CDP. A CDP makes sense when you have 10+ data sources or need real-time audience activation across channels.
**Result**: User understands the CDP readiness threshold and knows what to try first.

### Example 3: Composable vs bundled CDP
**User says**: "We already have all our data in Snowflake. Should we get a traditional CDP or use a composable approach?"
**Skill does**: Explains the composable CDP approach (Hightouch, Census) vs warehouse-native features from traditional CDPs (Tealium Composable CDP, Segment Linked Audiences). Compares cost, implementation time, and activation capabilities.
**Result**: User understands the trade-offs and can choose the right architecture for their warehouse-centric stack.

## Troubleshooting

### Profiles not unifying across channels
**Symptom**: Same customer has multiple profiles — one from web, one from email, one from mobile
**Cause**: No shared identifier connecting profiles across channels. CDPs merge on matched identifiers (email, customer ID, phone).
**Solution**: Implement progressive identification — capture email/login on every channel. Use identity resolution rules that prioritize deterministic matches (email) over probabilistic (device fingerprinting). Test merge rules in a sandbox.

### CDP implementation taking too long
**Symptom**: 6+ months in, still haven't activated first audience
**Cause**: Trying to boil the ocean — connecting all data sources, building all segments, and activating all channels at once
**Solution**: Start with one use case (e.g., abandoned cart audience → Facebook retargeting). Get that working end-to-end in 4-6 weeks. Then expand iteratively. The biggest CDP implementation risk is scope creep, not technical complexity.

### Data quality issues after CDP deployment
**Symptom**: CDP profiles have incorrect data, duplicate merges, or stale attributes
**Cause**: Source data quality issues — the CDP unified garbage from garbage sources
**Solution**: Run `/sales-data-hygiene` on source systems first. Audit identity resolution rules for false merges. Set up data quality monitoring in the CDP dashboard.
