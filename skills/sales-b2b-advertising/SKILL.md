---
name: sales-b2b-advertising
description: "Account-based B2B advertising — display ads, retargeting, cross-channel campaigns targeting specific accounts or segments. Use when ABM ads aren't reaching target accounts, display ad CTRs are low, retargeted visitors aren't converting, B2B audiences are too broad or too small, can't tie ad spend to pipeline, or not sure which B2B ad platform to pick. Do NOT use for email outbound (use /sales-cadence), general paid media/B2C ads (out of scope), or ZoomInfo-specific config (use /sales-zoominfo). For platform-specific help, use /sales-zoominfo."
argument-hint: "[describe your B2B advertising question or goal]"
license: MIT
version: 1.0.0
tags: [sales, advertising, abm, linkedin-ads, display-ads]
---
# B2B Account-Based Advertising

Help the user plan and execute account-based B2B advertising campaigns — display, social, retargeting, and connected TV. This skill is tool-agnostic but includes platform-specific guidance for ZoomInfo MarketingOS, Demandbase, 6sense, Terminus (now DemandScience), RollWorks, LinkedIn Ads, and Google Ads (B2B targeting).

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your advertising goal?**
   - A) Build awareness at target accounts (top-of-funnel ABM)
   - B) Accelerate pipeline — engage accounts already in-cycle
   - C) Retarget website visitors who didn't convert
   - D) Support outbound campaigns with air cover
   - E) Re-engage churned or dormant accounts
   - F) Promote content/events to a target account list
   - G) Not sure — need a B2B ad strategy

2. **What channels are you considering?**
   - A) Display / programmatic ads
   - B) LinkedIn Ads
   - C) Facebook / Meta (B2B targeting)
   - D) Connected TV (CTV)
   - E) Google Ads (search or display)
   - F) Multiple / all channels
   - G) Not sure — recommend channels

3. **What ABM/advertising platform do you have?**
   - A) ZoomInfo MarketingOS
   - B) Demandbase
   - C) 6sense
   - D) Terminus (DemandScience)
   - E) RollWorks
   - F) LinkedIn Campaign Manager only
   - G) Google Ads only
   - H) None — evaluating options
   - I) Other — describe it

4. **How are you defining your target audience?**
   - A) Named account list (specific companies)
   - B) Firmographic criteria (industry, size, revenue)
   - C) Intent signals (accounts researching relevant topics)
   - D) Website visitors (retargeting)
   - E) CRM segments (pipeline stage, lifecycle)
   - F) Combination of the above

## Step 2 — Strategy and platform reference

**Read `references/platform-guide.md`** for B2B vs B2C comparison, campaign types, audience building, budget framework, attribution, and platform-specific guidance (ZoomInfo, Demandbase, 6sense, Terminus, RollWorks, LinkedIn, Clay, AdRoll, Reddit Ads, Google Ads).

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3 — Actionable guidance

### Launching your first ABM ad campaign
1. **Define your target account list** (TAL) — start with 200-500 accounts max
2. **Choose 1-2 channels** — LinkedIn + display is the standard starting point
3. **Create 3-5 ad variants** — test problem-focused vs solution-focused creative
4. **Set a 90-day pilot budget** — commit enough budget to reach statistical significance
5. **Align with sales** — tell SDRs which accounts are seeing ads, adjust outbound timing
6. **Measure account-level** — don't judge B2B ads on clicks; measure pipeline influence

### Creative best practices for B2B
- **Lead with the problem**, not your product — "Still managing compliance in spreadsheets?"
- **Use specific numbers** — "Reduce audit prep time by 73%" beats "Save time on audits"
- **Match creative to intent stage** — awareness (industry trends) → consideration (case studies) → decision (demo/pricing)
- **Personalize by segment** — different creative for different industries, company sizes, or personas
- **Keep it simple** — B2B display ads have 1-2 seconds of attention. One message, one CTA.

### Metrics to track
- **Account reach** — % of TAL that saw at least one ad impression
- **Account engagement** — website visits, content downloads from ad-exposed accounts
- **Pipeline influence** — $ pipeline created at ad-exposed accounts
- **Cost per engaged account** — total spend / accounts that showed engagement
- **Lift vs control** — engagement rate of ad-exposed accounts vs unexposed (if you have a holdout group)

## Gotchas

1. **Don't judge B2B ads by click-through rate** — B2B display CTR is typically 0.05-0.1%. That's normal. Measure account-level engagement and pipeline influence instead.

2. **Small account lists need larger budgets per account** — targeting 100 accounts with $1,000/mo means $10/account/mo, which isn't enough for meaningful reach. Either increase budget or expand the list.

3. **LinkedIn matched audiences require 300+ matches** — if your uploaded account list has fewer than 300 LinkedIn-matched companies, the audience is too small to run. Supplement with firmographic targeting.

4. **Intent signals lag by 1-2 weeks** — intent data from platforms like ZoomInfo, Bombora, or 6sense is aggregated weekly. Don't expect real-time intent triggering for ad campaigns.

5. **Sales-marketing misalignment kills ABM ads** — if SDRs don't know which accounts are seeing ads, they can't reference campaigns or time outreach. Share the target account list and campaign messaging with sales before launch.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-6sense` — 6sense platform help (display ads, LinkedIn audience sync, retargeting, contextual targeting — advertising integrated with ABM intent data)
- `/sales-zoominfo` — ZoomInfo platform help (for MarketingOS-specific setup)
- `/sales-intent` — interpreting buying signals and prioritizing accounts
- `/sales-account-map` — mapping buying committees at target accounts
- `/sales-cadence` — coordinating outbound sequences with ad campaigns
- `/sales-prospect-list` — building target account lists for advertising
- `/sales-funnel` — funnel strategy (ads feed the top of the funnel)
- `/sales-clay` — Clay platform help (enrichment, audience building, Ad Sync)
- `/sales-adroll` — AdRoll platform help (RollWorks ABM, display retargeting, ecommerce integration)
- `/sales-reddit-ads` — Reddit Ads platform help (subreddit targeting, community-based B2B ads, Lead Gen Ads)
- `/sales-retargeting` — Retargeting strategy across all platforms (consumer and B2B)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: ABM air cover for outbound
**User says**: "We're launching an outbound campaign to 300 target accounts. How do I run ads to warm them up before our SDRs reach out?"
**Skill does**: Recommends starting display + LinkedIn ads 2-4 weeks before SDR outreach. Build audience from the account list, create brand awareness creative, run for 2-3 weeks, then launch outbound. Share the TAL and campaign messaging with SDRs so they can reference the ads.
**Result**: User has coordinated ad + outbound plan with timeline and budget.

### Example 2: Retargeting website visitors
**User says**: "We get 5,000 unique B2B visitors per month but only 2% convert. How do I retarget the other 98%?"
**Skill does**: Recommends identifying visitors with ZoomInfo WebSights or similar IP-to-company tool, building retargeting audiences from identified companies, creating bottom-of-funnel creative (case studies, demo CTAs), and measuring return visit rate and conversion lift.
**Result**: User has a retargeting strategy to capture more value from existing website traffic.

### Example 3: Choosing a B2B advertising platform
**User says**: "Should I use Demandbase, 6sense, or just LinkedIn Ads for our ABM campaigns? We're spending about $10K/mo."
**Skill does**: Compares platforms based on the user's budget, tech stack, and goals. At $10K/mo, recommends LinkedIn + RollWorks (if HubSpot) or LinkedIn + ZoomInfo MarketingOS (if already a ZoomInfo customer) over Demandbase/6sense (which require larger budgets to justify the platform cost).
**Result**: User has a platform recommendation with rationale based on their specific situation.

## Troubleshooting

### Ads running but no account engagement
**Symptom**: Impressions are being delivered but target accounts aren't visiting the website or engaging
**Cause**: Creative isn't resonating, audience is too broad, or frequency is too low to break through
**Solution**: Narrow the account list to highest-priority accounts, increase frequency cap, test new creative angles (problem-focused, specific pain points), and ensure ads link to relevant landing pages (not generic homepage).

### LinkedIn matched audience too small
**Symptom**: LinkedIn says your matched audience is too small to run campaigns
**Cause**: Account list has fewer than 300 matches in LinkedIn's database, or many companies are too small for LinkedIn to match
**Solution**: Supplement the matched audience with firmographic targeting (industry + company size + job function). Or combine the account list with a broader LinkedIn audience and use account-level reporting to measure impact on target accounts specifically.

### Can't measure pipeline impact
**Symptom**: Ads are running and accounts are engaging, but can't tie it to pipeline
**Cause**: No attribution system connecting ad exposure to CRM pipeline
**Solution**: Use your ABM platform's built-in attribution (ZoomInfo, Demandbase, 6sense all offer this). If using LinkedIn only, implement UTM tracking + CRM reporting: tag all ad links with UTM parameters, track first-touch and multi-touch attribution in CRM. At minimum, compare pipeline creation rate between ad-exposed and unexposed accounts.
