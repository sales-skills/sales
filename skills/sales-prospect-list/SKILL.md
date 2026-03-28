---
name: sales-prospect-list
description: "Build targeted B2B prospect lists for outbound campaigns. Use when building a prospect list, defining an ICP, searching for leads, filtering contacts by title/industry/company size, creating saved searches, segmenting lists, or finding decision-makers at target accounts. Do NOT use for enriching existing contacts with emails/phones (use /sales-enrich), interpreting buying signals (use /sales-intent), or general Apollo platform help (use /sales-apollo)."
argument-hint: "[describe target persona, industry, company size, or campaign goal]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Build a Targeted Prospect List

Help the user build a targeted B2B prospect list — from ICP definition through filter strategy, list sizing, segmentation, and quality checks. This skill is platform-agnostic but references Apollo.io as the primary tool. The same frameworks apply to ZoomInfo, LinkedIn Sales Navigator, Clay, Lusha, or any data provider.

## Step 1 — Gather context

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

### In Apollo.io

Use Apollo's People Search with these filter categories:
- **Job Titles**: Use "is any of" for title matching — Apollo supports exact and fuzzy matching
- **Seniority**: Filter by management level (C-suite, VP, Director, Manager)
- **Company**: Employee count ranges, revenue ranges, industry tags
- **Location**: Country, state, city, or metro area
- **Technologies**: Filter by tech stack (Apollo tracks 10,000+ technologies)
- **Signals**: Job changes, funding events, hiring activity

Save the search as a dynamic list — new matches will appear automatically.

### Exporting for Mailshake
- Export CSV with columns mapping to Mailshake recipient fields
- Required: `email` (only mandatory column)
- Recommended: `first`, `last`, `company`, `title` → merge fields {{first}}, {{last}}, {{company}}, {{title}}
- Custom fields: additional CSV columns become custom merge fields
- Pre-send: verify emails before import — Mailshake does not verify on upload. See `/sales-deliverability`

### Importing into Lemlist
- **CSV import**: Upload CSV with `email` as the only required column. Recommended fields: `firstName`, `lastName`, `companyName`, plus any custom fields for personalization variables.
- **API import**: `POST /api/campaigns/{id}/leads` with lead objects containing email and custom variables. See `/sales-lemlist` → `references/lemlist-api-reference.md`. Rate limit: 20 requests per 2 seconds.
- **People Database**: Alternative to external list building — Lemlist's built-in 600M+ contact database with smart filtering (title, seniority, industry, company size, intent signals). Leads are pre-verified. Pay per lead via credits.
- **CRM import**: Import leads directly from connected HubSpot, Salesforce, or Pipedrive via the CRM integration.
- **Pre-send**: Enable Lemwarm on all email accounts and warm up 3-5 weeks before launching sequences. Verify emails before import to keep bounce rate <3%.

### Importing into Yesware
- **Individual add**: Add recipients one at a time within a campaign — enter name, email, and custom fields
- **Bulk import**: Upload a CSV or import from Salesforce list views (Enterprise plan)
- **Prospector**: Alternatively, use Yesware's built-in Prospector (100M+ B2B contacts) to find and add leads directly — search by title, industry, company size, and more
- **Salesforce import**: Enterprise plan users can import leads/contacts directly from Salesforce list views into campaigns
- **Pre-send**: Verify emails before import — Yesware does not verify on upload. Keep bounce rate <3%.
- **Recipient limits**: Free plan = 10 recipients/month, Pro = 20/month, Premium+ = unlimited

### Importing into Mixmax
- **From Gmail**: Mixmax lives in Gmail — any contact you email is automatically available
- **From CSV**: Upload CSV to add recipients to sequences (map email, first name, last name, custom fields)
- **From Salesforce**: Import Salesforce leads/contacts directly into sequences (Growth+CRM plan); use Salesforce list views or reports as source
- **From HubSpot**: Import HubSpot contact lists into Mixmax sequences (Growth plan)
- **Via API**: `POST /sequences/:id/recipients` to programmatically add recipients to a sequence
- **Via rules**: Auto-enroll contacts based on Salesforce triggers (e.g., new lead created → add to sequence)
- **Limits**: Recipient limits per sequence vary by plan; check Mixmax plan details

### Importing into Smartlead
- **CSV import**: Upload CSV with `email` as the only required column. Recommended fields: `first_name`, `last_name`, `company`, plus any custom fields for merge variables.
- **API import**: `POST /api/v1/campaigns/{id}/leads` with a `lead_list` array containing lead objects. See `/sales-smartlead` → `references/smartlead-api-reference.md`.
- **SmartProspect**: Alternative to external list building — Smartlead's built-in verified lead database with intent signals. 3x email verification (syntax, domain, mailbox). Pay per verified lead via credits.
- **Pre-send**: Verify emails before import to keep bounce rate <3%. SmartProspect leads are pre-verified; external lists are not.

### Importing into Woodpecker
- **From Lead Finder**: Built-in B2B database with 1B+ leads — search by company, title, industry, location. Uses data credits (400 free, more from €28/2K credits). Export directly into campaigns.
- **From CSV**: Upload CSV to add prospects to campaigns (map email, first name, last name, company, custom fields)
- **From Google Sheets**: Native integration for ongoing prospect sync
- **From HubSpot/Pipedrive**: Native CRM integrations sync contacts into Woodpecker
- **Via API**: `POST /prospects` to create prospects, then add to campaigns via campaign endpoints
- **Via Zapier/Clay**: Connect any lead source to Woodpecker prospect creation
- **Auto-verification**: Woodpecker automatically validates prospect emails via Bouncer when added — invalid emails are flagged before sending
- **Limits**: Pricing based on "contacted prospects" per month — every new person added to a campaign counts against limit

### Finding prospects with Mailmo
- **Email Finder**: Enter a person's first name, last name, and company domain → Mailmo returns their verified email. Best for one-at-a-time lookups when you already know who you want to reach.
- **LinkedIn Chrome Extension**: Browse LinkedIn or Sales Navigator profiles → click the Mailmo extension → verified email appears. Great for building prospect lists while browsing Sales Navigator search results.
- **Catch-all advantage**: Mailmo's catch-all verification provides definitive results on domains where other finders return "risky" or "unknown."
- **No bulk search**: Mailmo does not have a company/domain search like Hunter or Tomba — you need to know the person's name. For finding all emails at a company, use Hunter.io Domain Search or Tomba Domain Search instead.
- **Export**: Download found emails as CSV for import into CRM or outbound tools.
- **Pre-send**: Emails found via Mailmo are already verified — no separate verification step needed.

### Finding prospects with Seamless.AI
- **Prospector**: Search 1.8B+ contacts with filters — title, seniority, department, industry, company size, revenue, location, technologies, keywords, news mentions. Browse/search is free — only pay credits when you reveal contact info.
- **Buyer Intent layer**: Combine Prospector search with Buyer Intent signals to prioritize accounts actively researching your category. Find the right people at accounts showing buying behavior.
- **Job Changes**: Monitor target personas for role changes — new leaders buy in their first 90 days. Use job change signals as a prospecting trigger.
- **Autopilot**: Set ICP criteria and Seamless.AI continuously builds lists in the background. "Set and forget" prospecting.
- **Chrome Extension**: Find contacts while browsing LinkedIn, company websites, and news articles. One-click save to lists or CRM.
- **Export**: Save to Seamless.AI lists, export CSV, or push directly to CRM (Salesforce, HubSpot) and engagement tools (Salesloft, Outreach, Mixmax).
- **Credit costs**: 1 credit per contact reveal. Search is free. Pro plan: ~1,000 credits/day/user (expire daily). Set daily caps on Autopilot.
- **Pre-send**: Seamless.AI verifies emails at point of reveal — no separate verification step needed for freshly revealed contacts.

### Finding prospects with Hunter.io
- **Discover**: Search for companies by industry, employee count, location, and technology — find companies matching your ICP without consuming credits. Then use Domain Search to find contacts at each.
- **TechLookup**: Find companies using specific technologies — great for competitive displacement (find companies using a competitor) or complementary targeting (find companies using tools adjacent to yours).
- **Domain Search**: Enter a target company's domain → Hunter returns all known emails with names, titles, departments, seniority, and confidence scores. Filter by department and seniority to narrow to decision-makers.
- **Email Finder**: Have a specific person's name? Provide first name + last name + domain → Hunter returns their email with confidence score and verification status.
- **Bulk operations**: Process hundreds of domains or name+domain pairs through bulk API endpoints. Async processing with job status polling.
- **Browser Extension**: Chrome/Firefox extension finds emails on any website you visit — works on LinkedIn and company sites.
- **Export**: Save results to Hunter Lead Lists, then export as CSV or push to CRM via HubSpot/Salesforce/Pipedrive integration.
- **Pre-send**: Always verify found emails with Hunter's Email Verifier before importing into campaign tools. Hunter separates finding from verification — both consume credits.

### Finding prospects with Prospeo
- **Search Person**: Search 200M+ contacts with 30+ filters — industry, seniority, department, location, headcount, funding, tech stack, years of experience. Up to 25 results per page, 25,000 max.
- **Search Company**: Search 30M+ companies — then use results to find people at target accounts.
- **Company-targeted search**: Use `company.websites` filter with up to 500 target domains to find contacts at specific accounts. Combine with `person_seniority` and `person_department` to narrow to decision-makers.
- **Search → Enrich workflow**: Search returns profiles but NOT emails/phones. Use Bulk Enrich Person (50 per call) on search results to get verified contact info.
- **Chrome extension**: Extract contacts from LinkedIn Sales Navigator while browsing.
- **Export**: Enriched data available via API response — push to CRM via native HubSpot/Salesforce integration, Zapier, Make, or n8n.
- **Credit costs**: 1 credit per search request that returns results + 1 credit per person enriched. Budget for both steps.
- **Pre-send**: Prospeo's 5-step verification is built into enrichment — use `only_verified_email: true` to get only deliverable addresses.

### Finding prospects with Tomba
- **Domain Search**: Enter a target company's domain → Tomba returns all known emails with names, titles, departments, seniority, and confidence scores. Filter by department (sales, engineering, marketing) and seniority (executive, senior) to narrow to decision-makers.
- **Email Finder**: Have a specific person's name? Provide name + domain → Tomba returns their email with a confidence score. Great for ABM when you know who you want to reach.
- **LinkedIn Finder**: Browse LinkedIn for prospects → use Tomba's LinkedIn Finder (or browser extension) to find their email from the profile URL.
- **Email Format**: Check a company's email pattern first (`/v1/email-format`) — if you know it's `first.last@domain.com`, you can predict emails for people not yet in the database.
- **Bulk operations**: Process thousands of name+domain pairs through bulk email finder. Async with webhook callbacks.
- **Export**: Save results to Tomba lead lists, then export as CSV or sync to CRM via HubSpot/Salesforce/Pipedrive integration.
- **Pre-send**: Always verify found emails with Tomba's Email Verifier before importing into campaign tools. Tomba separates search credits from verification credits.

### Importing into Reply.io
- **From B2B database**: Reply.io has a built-in database of 1B+ contacts — search by industry, company size, title, location, tech stack. Use data credits to reveal emails/phones.
- **From CSV**: Upload CSV to add contacts to sequences (map email, first name, last name, company, custom fields)
- **From Chrome extension**: Reply.io email finder extension finds emails while browsing LinkedIn or company websites
- **From Salesforce/HubSpot**: Native 2-way sync imports CRM contacts directly into Reply.io
- **Via API**: `POST /contacts` to create contacts, then add to sequences via Sequence Contacts endpoints
- **Via Zapier/Make**: Connect any lead source to Reply.io contact creation
- **Limits**: Unlimited contact storage on Multichannel plan; data credits required for B2B database reveals

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
- `/sales-mailmo` — Mailmo platform help (Email Finder with catch-all verification, LinkedIn Chrome extension)
- `/sales-seamless` — Seamless.AI platform help (1.8B+ contacts, Buyer Intent, Job Changes, Autopilot, Chrome extension)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
