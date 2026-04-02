---
name: sales-b2b-advertising
description: "Account-based B2B advertising — display ads, retargeting, cross-channel campaigns targeting specific accounts or segments. Use when running ABM ad campaigns, targeting accounts with display ads, retargeting website visitors, building B2B audiences, measuring ad-to-pipeline attribution, or choosing a B2B advertising platform. Do NOT use for email outbound (use /sales-cadence), general paid media/B2C ads (out of scope), or ZoomInfo-specific config (use /sales-zoominfo). For platform-specific help, use /sales-zoominfo."
argument-hint: "[describe your B2B advertising question or goal]"
license: MIT
version: 1.0.0
tags: [sales, advertising, abm, linkedin-ads, display-ads]
---
# B2B Account-Based Advertising

Help the user plan and execute account-based B2B advertising campaigns — display, social, retargeting, and connected TV. This skill is tool-agnostic but includes platform-specific guidance for ZoomInfo MarketingOS, Demandbase, 6sense, Terminus (now DemandScience), RollWorks, LinkedIn Ads, and Google Ads (B2B targeting).

## Step 1 — Gather context

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

## Step 2 — Strategy and approach

### B2B advertising vs B2C advertising

B2B ads target **accounts and buying committees**, not individual consumers. Key differences:

| Dimension | B2C Ads | B2B Ads |
|-----------|---------|---------|
| Targeting | Demographics, interests, behavior | Firmographics, intent, account lists |
| Audience size | Millions | Hundreds to thousands of accounts |
| Goal | Direct conversion (purchase) | Pipeline influence, meeting generation |
| Attribution | Click-through, last-touch | Multi-touch, account-level lift |
| Budget | CPM-based, high volume | Higher CPM, lower volume, precise targeting |
| Creative | Product-focused, emotional | Problem-focused, educational |

### Campaign types

#### 1. Awareness / air cover
- **Goal**: Make your brand familiar before outbound touches
- **Timing**: Start 2-4 weeks before SDR outreach
- **Channels**: Display, LinkedIn, CTV
- **Targeting**: Full target account list + ICP firmographics
- **Creative**: Brand awareness, thought leadership, industry insights
- **Metric**: Account-level impression reach (% of TAL seeing ads)

#### 2. Pipeline acceleration
- **Goal**: Move known opportunities forward
- **Timing**: Ongoing, aligned with deal stage
- **Channels**: Display, LinkedIn, retargeting
- **Targeting**: Open opportunities + buying committee members
- **Creative**: Case studies, ROI proof, competitive differentiators
- **Metric**: Deal velocity, engagement rate from buying committee

#### 3. Retargeting
- **Goal**: Re-engage website visitors who didn't convert
- **Timing**: Continuous
- **Channels**: Display, LinkedIn, Facebook
- **Targeting**: Website visitors (matched to accounts via IP or cookie)
- **Creative**: Bottom-of-funnel — demo CTAs, pricing, customer stories
- **Metric**: Return visit rate, conversion rate from retargeted visitors

#### 4. Intent-based campaigns
- **Goal**: Reach accounts actively researching your category
- **Timing**: Triggered by intent signals
- **Channels**: Display, LinkedIn, search
- **Targeting**: Accounts showing intent on relevant topics
- **Creative**: Solution-specific, addresses the researched problem
- **Metric**: Intent-to-pipeline conversion rate

### Audience building best practices

1. **Start with account lists, not keywords** — B2B ads work best when targeting specific companies, not broad interest categories
2. **Layer intent on firmographics** — don't target all mid-market SaaS companies; target those showing buying intent
3. **Include the full buying committee** — target multiple titles/roles at each account, not just one persona
4. **Exclude existing customers** (unless upsell/cross-sell campaign)
5. **Refresh audiences regularly** — accounts move in and out of ICP and intent signals change weekly

### Budget framework

| Audience size | Monthly budget (suggested) | Channel mix |
|--------------|---------------------------|-------------|
| <500 accounts | $2,000-5,000/mo | LinkedIn + Display |
| 500-2,000 accounts | $5,000-15,000/mo | Display + LinkedIn + Retarget |
| 2,000-10,000 accounts | $15,000-40,000/mo | Full multi-channel |
| 10,000+ accounts | $40,000+/mo | Full multi-channel + CTV |

*These are directional — actual CPMs vary by targeting precision, industry, and geography.*

### Attribution

B2B ad attribution is account-level, not click-level:

- **Influenced pipeline** — accounts exposed to ads that later entered pipeline (regardless of click)
- **Account engagement lift** — % increase in website visits, content downloads, or demo requests from ad-exposed accounts vs control
- **Time-to-pipeline** — how much faster do ad-exposed accounts move from awareness to opportunity
- **Multi-touch** — ads rarely generate direct conversions; measure their contribution alongside outbound, content, and events

## Step 3 — Platform-specific guidance

### In ZoomInfo (MarketingOS)

ZoomInfo MarketingOS combines B2B data with advertising execution.

**Audience building**:
- Build audiences from ZoomInfo's 300+ firmographic, technographic, and intent attributes
- Target accounts showing intent on your configured topics
- Use WebSights data to retarget companies that visited your website
- Sync audiences to display networks, LinkedIn, Facebook, and CTV

**Campaign execution**:
- Display ads across programmatic networks using ZoomInfo's account-level targeting
- Cross-channel: run coordinated campaigns across display, social, and CTV
- ABM: target specific account lists with tailored creative per segment

**Attribution**:
- Track which ad-exposed accounts later visited your site (WebSights)
- Measure account-level engagement lift vs unexposed control group
- Connect ad exposure to pipeline creation in CRM via ZoomInfo's attribution

**Setup**: ZoomInfo → MarketingOS → Advertising → Create Campaign. Upload account list or build audience from search criteria.

**Strength**: Unified data — same platform for prospecting, intent, enrichment, and ads. No data sync issues between tools.

### In Demandbase

**ABM platform with built-in advertising:**
- Account identification via IP + cookie matching
- Display, LinkedIn, and connected TV campaigns
- Intent data (Demandbase's own + Bombora)
- Journey stages: track accounts through awareness → engagement → opportunity
- Predictive scoring: AI identifies accounts most likely to convert

**Best for**: Enterprise ABM programs with $20K+/mo ad budgets. Strongest account identification and journey analytics.

### In 6sense

6sense is a full ABM platform with strong advertising capabilities powered by Signalverse intent data:
1. **Programmatic display ads**: Serve display ads to target accounts across the web. Build audiences from 6sense segments that combine ICP fit + intent signals + buying stage.
2. **LinkedIn audience sync**: Dynamic 6sense segments automatically sync to LinkedIn Campaign Manager. 6sense claims 50%+ better match rates than competitors. Supports all LinkedIn ad types — Sponsored Content, Sponsored Messaging, Text Ads, Dynamic Ads.
3. **Retargeting**: Re-engage website visitors (identified via Company Identification / WebTag) with display ads. Target specific accounts that visited key pages.
4. **Contextual targeting**: Serve ads on pages contextually relevant to the intent topics your target accounts are researching.
5. **Dynamic audiences**: Segments auto-update as accounts move between buying stages — ad audiences adjust in real-time. Accounts entering Decision stage get different ads than those in Awareness.
6. **Cross-channel orchestration**: Advertising is orchestrated alongside email, sales outreach, and CRM actions from 6sense's workflow canvas. Coordinate ad impressions with sales touches.
7. **Campaign analytics**: Multi-touch attribution tracks which ads influenced pipeline and revenue. Measure ad impact at the account level, not just clicks.
8. **Pricing note**: Advertising is part of 6sense's enterprise platform ($50K-200K+/year). Not available on the Free plan. For teams without enterprise budgets, consider LinkedIn Ads direct, Demandbase (similar enterprise), or RollWorks (more accessible pricing).

### In Terminus (DemandScience)

**ABM advertising platform:**
- Display ads with account-level targeting
- LinkedIn integration
- Email signature banners (unique channel)
- Chat integration (chatbot triggers for ad-engaged accounts)
- Multi-channel orchestration: ads + email + chat

**Best for**: Mid-market companies wanting straightforward ABM ads without the complexity of Demandbase or 6sense.

### In RollWorks

**ABM platform (HubSpot ecosystem):**
- Account-based display and social advertising
- Deep HubSpot integration (audiences from HubSpot lists)
- Machine learning for account prioritization
- Site visitor identification (IP matching)
- Budget optimization across accounts

**Best for**: HubSpot-centric teams. RollWorks is the most natural ABM advertising add-on for HubSpot users.

### In LinkedIn Campaign Manager

**Native B2B social advertising:**
- Company targeting: target specific company names, industries, sizes
- Job title/function targeting: reach decision-makers by role
- Matched Audiences: upload account lists or retarget website visitors
- Lead Gen Forms: capture leads without leaving LinkedIn
- Conversation Ads: personalized message-style ads

**Best for**: Companies without a dedicated ABM platform who want B2B-specific targeting. LinkedIn's native firmographic targeting is the simplest way to run B2B ads.

**Limitation**: No intent data, limited display network, higher CPM than programmatic alternatives.

### In Google Ads (B2B targeting)

**Search and display for B2B:**
- Customer Match: upload company email lists for targeting
- In-Market Audiences: Google's own intent signals for B2B categories
- Display network: target by company size, industry via Google's B2B segments
- Search ads: capture demand for B2B keywords
- YouTube: video ads with B2B audience targeting

**Best for**: Capturing active search demand. Pair Google search ads with display ABM from a dedicated platform.

**Limitation**: B2B targeting is less precise than dedicated ABM platforms. No account-level reporting natively.

## Step 4 — Actionable guidance

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

## Related skills

- `/sales-6sense` — 6sense platform help (display ads, LinkedIn audience sync, retargeting, contextual targeting — advertising integrated with ABM intent data)
- `/sales-zoominfo` — ZoomInfo platform help (for MarketingOS-specific setup)
- `/sales-intent` — interpreting buying signals and prioritizing accounts
- `/sales-account-map` — mapping buying committees at target accounts
- `/sales-cadence` — coordinating outbound sequences with ad campaigns
- `/sales-prospect-list` — building target account lists for advertising
- `/sales-funnel` — funnel strategy (ads feed the top of the funnel)
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
