---
name: sales-prospect-list
description: "Builds targeted B2B prospect lists for outbound campaigns. Use when you don't know who to target, your outbound list is too broad and response rates are low, you can't find the right decision-makers at target accounts, your ICP is vague, or your prospect list is full of bad-fit contacts. Do NOT use for enriching existing contacts with emails/phones (use /sales-enrich), interpreting buying signals (use /sales-intent), or general Apollo platform help (use /sales-apollo)."
argument-hint: "[describe target persona, industry, company size, or campaign goal]"
license: MIT
version: 1.0.0
tags: [sales, prospecting, list-building, targeting]
---
# Build a Targeted Prospect List

Help the user build a targeted B2B prospect list — from ICP definition through filter strategy, list sizing, segmentation, and quality checks. This skill is platform-agnostic but references Apollo.io as the primary tool. The same frameworks apply to ZoomInfo, LinkedIn Sales Navigator, Clay, Lusha, or any data provider.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Who are you trying to reach?**
   - A) I have a clear ICP — I know the titles, industries, and company sizes
   - B) I have a rough idea — need help refining it
   - C) Starting from scratch — help me define who to target
   - D) I have an existing list that needs filtering/cleaning

2. **What's the campaign goal?**
   - A) Cold outbound — net-new pipeline generation
   - B) ABM — targeted outreach to named accounts
   - C) Event follow-up — building a list around a conference/webinar
   - D) Expansion — finding new contacts at existing customer accounts
   - E) Competitive displacement — targeting competitors' customers
   - F) Other — describe it

3. **What data provider(s) do you have access to?**
   - A) Apollo.io
   - B) LinkedIn Sales Navigator
   - C) ZoomInfo
   - D) Clay
   - E) Lusha / Cognism / other
   - F) Just a CRM with existing data
   - G) None yet — recommend one

4. **How many prospects do you need?** (rough target — 100? 500? 5,000?)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Define the ICP

Build a structured ICP using four dimensions:

### Firmographic filters (company-level)
| Filter | Questions to ask | Example values |
|---|---|---|
| **Industry** | What industries are your best customers in? | SaaS, Financial Services, Healthcare |
| **Company size** | How many employees? What revenue range? | 50-500 employees, $10M-$100M revenue |
| **Geography** | Where are your target companies? | US, UK, DACH region |
| **Funding stage** | Do you target by funding? | Series A-C, bootstrapped, public |
| **Technology** | What tech stack signals a good fit? | Uses Salesforce, runs Kubernetes, has React in stack |

### Demographic filters (person-level)
| Filter | Questions to ask | Example values |
|---|---|---|
| **Job title** | What titles do you sell to? | VP Engineering, Head of Sales, CTO |
| **Seniority** | What level of decision-maker? | Director+, VP+, C-suite |
| **Department** | Which function? | Engineering, Sales, Marketing, Finance |
| **Job function** | What do they actually do? | People management, IC, operations |

### Behavioral/signal filters
| Filter | Questions to ask | Example values |
|---|---|---|
| **Hiring signals** | Are they hiring for roles your product replaces/supports? | Posting for SDRs, data engineers |
| **Funding** | Recent funding that creates budget? | Raised Series B in last 6 months |
| **Job changes** | New leaders who bring new tools? | Started VP role in last 90 days |
| **Intent** | Researching topics related to your product? | Intent topics in your category |
| **Tech install** | Recently adopted complementary/competitive tech? | Added Snowflake, removed competitor |

### Negative filters (who to exclude)
- Existing customers
- Companies in active deals
- Do-not-contact list
- Companies too small or too large
- Industries you don't serve
- Geographies you can't support

## Step 3 — Build the list

### Filter strategy by persona

For each persona in the ICP, design the filter combination:

**Primary persona** (highest priority):
- Filters: [specific combination]
- Expected list size: [estimate]
- Quality check: Does every record on this list make sense as a prospect?

**Secondary persona** (if applicable):
- Filters: [adjusted combination]
- Expected list size: [estimate]

### List sizing guidance

| Campaign type | Recommended list size | Why |
|---|---|---|
| Hyper-targeted ABM | 25-100 | Quality over quantity — deep personalization per account |
| Focused outbound | 200-500 | Manageable for Level 3+ personalization |
| Scaled outbound | 500-2,000 | Balanced scale with Level 2 personalization |
| High-volume outbound | 2,000-10,000 | Volume play — Level 1-2 personalization, A/B testing at scale |

The right size depends on your personalization capacity. A list of 5,000 is useless if your team can only personalize 50 emails per week.

For platform-specific list-building workflows, search filters, import/export procedures, and API prospecting instructions, see `references/platforms.md`.

## Step 4 — Segment and prioritize

Split the list into tiers for sequencing:

| Tier | Criteria | Volume | Approach |
|---|---|---|---|
| **Tier 1 — Hot** | Matches ICP + has buying signal (intent, job change, funding) | 10-20% of list | Highest personalization, multi-channel, fastest follow-up |
| **Tier 2 — Warm** | Matches ICP, no signal but strong fit | 30-40% of list | Standard personalization, proven sequence |
| **Tier 3 — Broad** | Partial ICP match, worth testing | 40-50% of list | Template-based, A/B test messaging |

### Lead qualification scoring

Use a weighted scoring model to rank prospects numerically, not just by tier. This gives you a concrete starting point that you can tune based on conversion data.

| Criterion | Weight | What to score | Example: 80+ = Tier 1 |
|---|---|---|---|
| **Title/role match** | 30% | How closely does the prospect's title match your buyer persona? | VP Engineering = 30, Director = 20, Manager = 10 |
| **Company size fit** | 25% | Does the company fall within your ICP's employee/revenue range? | Sweet spot = 25, adjacent = 15, edge = 5 |
| **Industry match** | 20% | Is the company in a target industry? | Primary industry = 20, adjacent = 10, other = 0 |
| **Role recency** | 15% | How recently did they start this role? (New leaders buy) | <90 days = 15, 90-365 days = 10, >1 year = 5 |
| **Buying signals** | 10% | Intent data, hiring signals, funding, tech changes | Active signal = 10, weak signal = 5, none = 0 |

**Total: 100 points max.** Tier 1 = 80+, Tier 2 = 50-79, Tier 3 = 30-49, Skip = <30.

Tune these weights for your motion: outbound-heavy teams should increase company size and industry weight; signal-rich teams (PLG, intent-driven) should increase buying signals weight. Review and recalibrate quarterly using actual reply/meeting rates per score band.

### Personalization angles

Capture personalization angles during list building — not later at outreach time. This bridges the gap between list building and sequence writing and makes the handoff to `/sales-cadence` much smoother.

| Tier | What to capture | Why it matters |
|---|---|---|
| **Tier 1 — Hot** | Recent company news, specific tech stack observations, mutual connections, recent job change context, funding details | These prospects get the most personalized outreach — you need concrete hooks |
| **Tier 2 — Warm** | Industry pain points, company growth stage, hiring patterns, competitive tool usage | Personalization at the segment level — "companies like yours" not "your specific situation" |
| **Tier 3 — Broad** | Industry vertical, company size band, persona-level pain points | Template-level personalization — enough to feel relevant, not enough to be bespoke |

For each Tier 1 prospect, note at least 2 personalization angles during list building. For Tier 2, note 1 per prospect or 1 per segment. Tier 3 gets segment-level angles only.

### Segmentation variables

Beyond tiers, consider segmenting by:
- **Industry** — messaging should reflect industry-specific pain points
- **Persona** — a VP of Engineering and a CTO need different messaging
- **Company size** — SMB and enterprise have different buying processes
- **Geography** — timezone, language, regional references

Each segment should have tailored messaging in the sequence. One generic sequence for the whole list will underperform.

## Step 5 — Quality checks

Before launching outreach, validate the list:

### Data quality checklist
- [ ] **Titles make sense**: Scan for false positives (e.g., "VP" in a 5-person company is different from VP at a Fortune 500)
- [ ] **Companies are real targets**: Spot-check 10-15 companies — would you actually want them as customers?
- [ ] **No existing customers**: Cross-reference against CRM customer list
- [ ] **No active deals**: Cross-reference against open pipeline
- [ ] **Contact info exists**: Filter out records with no email or phone before enrichment credits are spent
- [ ] **Duplicates removed**: Dedup by email address and company+name
- [ ] **Compliance checked**: GDPR opt-in required for EU contacts, CAN-SPAM compliance for US

### List health metrics
| Metric | Target | If below... |
|---|---|---|
| % with verified email | >80% | Enrich before sequencing — see `/sales-enrich` |
| % with phone number | >40% | Acceptable for email-first sequences; enrich for phone-heavy cadences |
| % matching all ICP criteria | >70% | Tighten filters — too many partial matches dilute effectiveness |
| Bounce rate (after first send) | <3% | List quality issue — use verification tools before sending |

## Gotchas

- **Don't build a list without defining the ICP first.** Claude tends to jump straight to filter recommendations. A list without a clear ICP is just a random collection of people. Always start with "who are your best customers?" and work backward.
- **Don't optimize for list size over quality.** Claude defaults to loosening filters to "get more results." A list of 200 perfect-fit prospects outperforms a list of 5,000 partial matches. Push back when the user asks for more volume at the expense of targeting.
- **Don't ignore negative filters.** Excluding existing customers, active deals, and do-not-contact lists is as important as the inclusion criteria. Claude often forgets to ask about exclusions.
- **Don't assume job titles are standardized.** "VP of Engineering" and "Vice President, Engineering" and "VP Engineering" are all the same person. "Head of Growth" could be marketing or sales. Always recommend title fuzzy matching or use Apollo's seniority filters alongside title keywords.
- **Don't skip the segmentation step.** A flat, unsegmented list leads to generic messaging. Every list should be split into at least 2-3 segments based on persona, industry, or signal strength.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-enrich` — Enrich your list with verified emails, phones, and firmographic data
- `/sales-intent` — Layer buying signals on top of your list to prioritize outreach
- `/sales-cadence` — Design the outbound sequence for your list
- `/sales-apollo` — Apollo.io platform help (search mechanics, saved searches, Chrome extension)
- `/sales-apollo-sequences` — Set up and manage sequences in Apollo
- `/sales-deliverability` — Verify email deliverability setup before sending to your list
- `/sales-mailshake` — Mailshake platform help (import recipients, manage campaigns)
- `/sales-smartlead` — Smartlead platform help (import leads, SmartProspect, campaigns)
- `/sales-lemlist` — Lemlist platform help (import leads, People Database, sequences)
- `/sales-yesware` — Yesware platform help (import recipients, Prospector, campaigns)
- `/sales-mixmax` — Mixmax platform help (for Mixmax-specific setup)
- `/sales-reply` — Reply.io platform help (for Reply.io-specific setup)
- `/sales-woodpecker` — Woodpecker platform help (for Woodpecker-specific setup)
- `/sales-tomba` — Tomba platform help (domain search, email finder, LinkedIn finder, bulk operations)
- `/sales-prospeo` — Prospeo platform help (200M+ contact search, company search, enrichment, Chrome extension)
- `/sales-hunter` — Hunter.io platform help (Domain Search, Email Finder, Discover, TechLookup, browser extension)
- `/sales-outscraper` — Outscraper platform help (Google Maps scraping, reviews, email/contact extraction, company insights API)
- `/sales-enrichso` — Enrich.so platform help (LinkedIn enrichment, reverse email lookup, employee search, similar companies, bulk enrichment API)
- `/sales-minelead` — Minelead platform help (domain email search, email finder, lead generator, verifier, campaigns, bulk operations, Chrome/Firefox extensions)
- `/sales-lobstr` — Lobstr.io platform help (50+ no-code web scrapers, Google Maps leads, LinkedIn Sales Nav extraction, scheduled automation, API)
- `/sales-getprospect` — GetProspect platform help (200M+ B2B database, email finder, LinkedIn Chrome extension, enrichment, cold email sequences)
- `/sales-skrapp` — Skrapp platform help (200M+ B2B contacts, email finder, Lead Finder, datan enrichment with AI Fields, LinkedIn Chrome extension)
- `/sales-openwebninja` — OpenWeb Ninja platform help (30+ data APIs: Local Business Data from Google Maps, Website Contacts Scraper, Email Search)
- `/sales-anymailfinder` — Anymail Finder platform help (email finder by person/company/decision maker, bulk search 100K rows, GeoLead Finder, 97%+ delivery guarantee)
- `/sales-zerobounce` — ZeroBounce platform help (Email Finder by name+domain, email validation 99.6% accuracy, bulk list cleaning)
- `/sales-snov` — Snov.io platform help (email finder, domain search, LinkedIn enrichment, prospect management, multichannel campaigns)
- `/sales-mailmo` — Mailmo platform help (Email Finder with catch-all verification, LinkedIn Chrome extension)
- `/sales-clearbit` — Clearbit platform help (Prospector contact search by domain, Reveal IP intelligence, enrichment — acquired by HubSpot)
- `/sales-rb2b` — RB2B platform help (person-level visitor identification, Hot Pages, Identity Resolution API)
- `/sales-6sense` — 6sense platform help (Company Discovery, Sales Intelligence search, intent-driven list building, segment-based prospecting)
- `/sales-clay` — Clay platform help (waterfall enrichment, Claygent AI research, signals, audiences, automated prospect pipelines)
- `/sales-leadmagic` — LeadMagic platform help (Employee Finder, Role Finder, Email/Mobile Finder, Company Search, Jobs Finder — API-first prospecting)
- `/sales-seamless` — Seamless.AI platform help (1.8B+ contacts, Buyer Intent, Job Changes, Autopilot, Chrome extension)
- `/sales-zoominfo` — ZoomInfo platform help (Advanced Search, Saved Searches, exports)
- `/sales-sendr` — Sendr platform help (Lead Finder 479M+ contacts, Data Studio enrichment, personality analysis)
- `/sales-leadiq` — LeadIQ platform help (Chrome extension LinkedIn prospecting, champion tracking, AI Account Prospecting, GraphQL API)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Building a cold outbound list
**User says**: "Build a list of VP Engineering at Series B SaaS companies with 100-500 employees in the US"
**Skill does**:
1. Confirms ICP dimensions (title, funding stage, size, geography)
2. Recommends Apollo search filters with exact settings
3. Suggests list size of 300-500, segmented by sub-industry (DevTools, MarTech, FinTech)
4. Provides quality checks before launching sequences
**Result**: Targeted, segmented list ready for personalized outreach

### Example 2: ABM target account list
**User says**: "I need to find the buying committee at 20 target accounts in healthcare"
**Skill does**:
1. Clarifies which 20 accounts and what roles are in the buying committee
2. Recommends person-level filters per account (CEO, CTO, VP Ops, CISO for each)
3. Suggests mapping 3-5 contacts per account for multi-threading
4. Provides an account-level prioritization framework
**Result**: Multi-threaded contact list across 20 accounts, organized by role and engagement priority

## Troubleshooting

### Too few results
**Cause**: Filters are too restrictive
**Solution**: Loosen one filter at a time. Start with geography (expand to adjacent markets), then company size (widen the range), then titles (add synonyms). Use Apollo's "similar titles" suggestions.

### Too many results
**Cause**: Filters are too broad
**Solution**: Add a seniority filter (Director+ if you sell to leadership), narrow the industry (sub-industry instead of top-level), or add a technology filter to find companies using complementary tools.

### List has low email coverage
**Cause**: Many records don't have verified emails in the data provider
**Solution**: Use `/sales-enrich` with waterfall enrichment (try multiple providers). For C-suite and VP-level contacts, direct phone outreach may be more effective than email anyway.
