---
name: sales-6sense
description: "6sense platform help — Signalverse intent data, Predictive Analytics (6AI Scoring), Sales Intelligence, AI Email Agents, Advertising, Orchestration, Segments, Company Identification API, People/Company Enrichment API. Use when intent scores feel like a black box, too many accounts flagged as in-market but sales can't follow up, 6QA thresholds are too loose or too tight, AI email agents aren't generating replies, LinkedIn audience sync has low match rates, segments pulling wrong companies, API calls returning errors, or comparing 6sense to Demandbase or Bombora. Do NOT use for intent strategy across multiple tools (use /sales-intent) or enrichment strategy across tools (use /sales-enrich)."
argument-hint: "[describe what you need help with in 6sense]"
license: MIT
version: 1.0.0
tags: [sales, abm, intent-data, enrichment, advertising, platform]
github: "https://github.com/6sense-Technologies"
---
# 6sense Platform Help

Help the user with 6sense platform questions — Signalverse Intent Data, Predictive Analytics, Sales Intelligence, AI Email Agents, Advertising & Audience Activation, Orchestration Workflows, Segments, APIs, and integrations.

**Important context**: 6sense is an enterprise ABM platform that combines proprietary intent data (Signalverse) with third-party signals (Bombora, G2, TrustRadius) and AI-driven predictions to identify in-market accounts and orchestrate multichannel engagement. It competes primarily with Demandbase and Bombora. Pricing is enterprise-level ($50K-$200K+/year) with custom quotes and 2-year minimum contracts.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

**What area of 6sense do you need help with?**
- a) Signalverse Intent Data — understanding buying signals and topics
- b) Predictive Analytics / 6AI Scoring — account scoring and buying stage predictions
- c) Sales Intelligence — account prioritization, Sales Copilot, Chrome extension
- d) AI Email Agents — automated personalized email outreach
- e) Advertising — display ads, LinkedIn audience sync, retargeting
- f) Orchestration / Workflows — multichannel campaign automation
- g) Segments — dynamic audience building and activation
- h) Company Identification — IP-to-company matching for website visitors
- i) APIs — Company Identification, People Enrichment, Firmographics, Segments
- j) Integrations — CRM, MAP, ad platforms
- k) Something else

**What's your role?**
- a) Marketing (demand gen, ABM, campaigns)
- b) Sales (AE, SDR, sales ops)
- c) Revenue operations / GTM ops
- d) Technical (API integration, data engineering)
- e) Leadership (CMO, CRO, VP)

**What's your goal?**
- a) Identify in-market accounts to prioritize
- b) Launch account-based advertising campaigns
- c) Set up AI email agents for automated outreach
- d) Build predictive scoring models
- e) Integrate 6sense data into CRM/MAP
- f) Compare 6sense to alternatives (Demandbase, Bombora)
- g) Optimize existing 6sense setup

## Step 2 — Route or answer directly

If the question is about **intent signal strategy across tools** (not 6sense-specific) — hand off: "This is an intent signal strategy question — run: `/sales-intent {user's original question}`"
If the question is about **lead scoring strategy across tools** — hand off: "This is a lead scoring strategy question — run: `/sales-lead-score {user's original question}`"
If the question is about **enrichment strategy across tools** — hand off: "This is an enrichment strategy question — run: `/sales-enrich {user's original question}`"
If the question is about **B2B advertising strategy across tools** — hand off: "This is a B2B advertising strategy question — run: `/sales-b2b-advertising {user's original question}`"
If the question is about **outbound cadence/sequence strategy** — hand off: "This is a cadence/sequence design question — run: `/sales-cadence {user's original question}`"
If the question is about **building prospect lists across tools** — hand off: "This is a prospect list building question — run: `/sales-prospect-list {user's original question}`"
If the question is about **connecting 6sense to other tools** — hand off: "This is a tool integration question — run: `/sales-integration {user's original question}`"

Otherwise, answer directly using the reference below.

## Step 3 — 6sense platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **Enterprise pricing only**: 6sense has no self-serve paid plan. The Free plan (50 credits/mo) is very limited. Paid plans start around $50K/year with 2-year minimum contracts and custom quotes. Don't recommend 6sense to SMBs or teams without enterprise budgets — suggest Bombora (standalone intent data, ~$25K/year) or Apollo.io (intent included in lower-cost plans) instead.
- **Free plan is a teaser, not a tool**: The Free tier (50 credits/mo) gives access to basic search and Chrome extension but NOT intent data, predictive scoring, advertising, AI email, or workflows. Don't assume free users can access core 6sense features.
- **Intent data requires tuning**: Out-of-the-box intent topics are broad and noisy. You must configure relevant topics and regularly refine them based on conversion data. Untuned intent data generates false positives that waste sales time.
- **API docs behind auth wall**: 6sense's support documentation (support.6sense.com) requires authentication to view actual content. The API endpoints and schemas documented here are best-effort from public sources — verify against your org's API portal for exact specifications.
- **AI Email Agents are a separate add-on**: Conversational Email / AI Email Agents are not included in all paid plans. They're a distinct product with separate pricing. Don't assume they're available to all 6sense customers.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-intent` — Buying signals and account prioritization strategy across tools (6sense Signalverse is one option)
- `/sales-lead-score` — Lead scoring model design using intent + fit signals
- `/sales-enrich` — Enrichment strategy across tools (6sense People/Company APIs are one source)
- `/sales-b2b-advertising` — Account-based B2B advertising strategy (6sense Ads is one platform)
- `/sales-cadence` — Outbound sequence design (6sense AI Email Agents is one option)
- `/sales-prospect-list` — Build prospect lists (6sense Company Discovery is one source)
- `/sales-integration` — Connect 6sense to CRM, MAP, and other tools
- `/sales-zoominfo` — ZoomInfo platform help (primary competitor for enrichment + intent)
- `/sales-clearbit` — Clearbit platform help (enrichment + Reveal visitor ID)
- `/sales-rb2b` — RB2B platform help (person-level visitor ID — complements 6sense company-level ID)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up 6sense for ABM
**User says**: "We just bought 6sense and need to set it up for account-based marketing. Where do we start?"
**Skill does**: Walks through WebTag installation, intent topic configuration, ICP definition, initial segment creation, CRM integration (Salesforce/HubSpot), Sales Intelligence deployment (Chrome extension + Sales Copilot), and first advertising campaign launch. Recommends starting with a small target account list to validate signal quality before scaling.
**Result**: Phased 6sense implementation plan with quick wins in the first 30 days

### Example 2: 6sense vs Demandbase comparison
**User says**: "We're evaluating 6sense and Demandbase for our ABM program. What are the key differences?"
**Skill does**: Compares intent data (6sense proprietary Signalverse vs Demandbase's Bombora-dependent approach), advertising (Demandbase's deeper ad roots vs 6sense's improving ads), predictive scoring (6sense's buying stage predictions vs Demandbase's account scoring), AI email (6sense has AI Email Agents, Demandbase does not), pricing (both $50K-200K+ range, custom quotes, multi-year contracts), and CRM integrations. Recommends 6sense if predictive scoring and AI email are priorities, Demandbase if advertising is the primary use case.
**Result**: Clear comparison with recommendation based on the user's primary use case

### Example 3: Integrate 6sense API for custom enrichment
**User says**: "I want to use the 6sense API to enrich our inbound leads with intent data and buying stage before they hit our CRM."
**Skill does**: Explains the People Enrichment API endpoint (`scribe.6sense.com/v2/people/Enrichment`), authentication with org-level API tokens, how to pass email/company to get contact + firmographic data, the Segments API for buying stage data, and how to chain Company Identification + Enrichment for a complete picture. Notes that API credits are consumed per call and should be budgeted.
**Result**: Working API integration plan for real-time lead enrichment with 6sense data

## Troubleshooting

### Intent data shows too many accounts
**Symptom**: Hundreds of accounts flagged as "in-market" but sales can't follow up on all of them
**Cause**: Intent topics are too broad, or 6QA thresholds are too permissive
**Solution**: Narrow intent topics to your specific category keywords (not broad industry terms). Raise the 6QA threshold by requiring higher intent scores or later buying stages (Consideration+). Layer ICP firmographic filters on top of intent to reduce noise. Focus on signal trends (increasing) rather than absolute scores.

### Sales team ignoring 6sense alerts
**Symptom**: Sales Intelligence is deployed but reps aren't acting on recommendations
**Cause**: Too many low-quality alerts, alerts not actionable, or reps don't understand the data
**Solution**: Reduce alert volume by raising thresholds (only alert on Decision+ stage or strong intent spikes). Include specific talk tracks and account context in alerts (not just "intent detected"). Train reps on what buying stages mean and how to use insights in outreach. Start with top performers as champions, then expand.

### LinkedIn audience sync has low match rates
**Symptom**: 6sense segments synced to LinkedIn Campaign Manager show small audience sizes
**Cause**: Segments are too narrow, or LinkedIn can't match all accounts/contacts in the segment
**Solution**: Broaden segment criteria slightly (e.g., add adjacent industries or expand company size range). Ensure contact-level data is populated in 6sense (LinkedIn matches on people, not just accounts). Use 6sense's "lookalike" audience expansion if available. Check that segments have enough volume — LinkedIn typically requires 300+ contacts minimum for campaign delivery.
