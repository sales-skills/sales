# B2B Advertising Platform Guide

## B2B advertising vs B2C advertising

B2B ads target **accounts and buying committees**, not individual consumers. Key differences:

| Dimension | B2C Ads | B2B Ads |
|-----------|---------|---------|
| Targeting | Demographics, interests, behavior | Firmographics, intent, account lists |
| Audience size | Millions | Hundreds to thousands of accounts |
| Goal | Direct conversion (purchase) | Pipeline influence, meeting generation |
| Attribution | Click-through, last-touch | Multi-touch, account-level lift |
| Budget | CPM-based, high volume | Higher CPM, lower volume, precise targeting |
| Creative | Product-focused, emotional | Problem-focused, educational |

## Campaign types

### 1. Awareness / air cover
- **Goal**: Make your brand familiar before outbound touches
- **Timing**: Start 2-4 weeks before SDR outreach
- **Channels**: Display, LinkedIn, CTV
- **Targeting**: Full target account list + ICP firmographics
- **Creative**: Brand awareness, thought leadership, industry insights
- **Metric**: Account-level impression reach (% of TAL seeing ads)

### 2. Pipeline acceleration
- **Goal**: Move known opportunities forward
- **Timing**: Ongoing, aligned with deal stage
- **Channels**: Display, LinkedIn, retargeting
- **Targeting**: Open opportunities + buying committee members
- **Creative**: Case studies, ROI proof, competitive differentiators
- **Metric**: Deal velocity, engagement rate from buying committee

### 3. Retargeting
- **Goal**: Re-engage website visitors who didn't convert
- **Timing**: Continuous
- **Channels**: Display, LinkedIn, Facebook
- **Targeting**: Website visitors (matched to accounts via IP or cookie)
- **Creative**: Bottom-of-funnel — demo CTAs, pricing, customer stories
- **Metric**: Return visit rate, conversion rate from retargeted visitors

### 4. Intent-based campaigns
- **Goal**: Reach accounts actively researching your category
- **Timing**: Triggered by intent signals
- **Channels**: Display, LinkedIn, search
- **Targeting**: Accounts showing intent on relevant topics
- **Creative**: Solution-specific, addresses the researched problem
- **Metric**: Intent-to-pipeline conversion rate

## Audience building best practices

1. **Start with account lists, not keywords** — B2B ads work best when targeting specific companies, not broad interest categories
2. **Layer intent on firmographics** — don't target all mid-market SaaS companies; target those showing buying intent
3. **Include the full buying committee** — target multiple titles/roles at each account, not just one persona
4. **Exclude existing customers** (unless upsell/cross-sell campaign)
5. **Refresh audiences regularly** — accounts move in and out of ICP and intent signals change weekly

## Budget framework

| Audience size | Monthly budget (suggested) | Channel mix |
|--------------|---------------------------|-------------|
| <500 accounts | $2,000-5,000/mo | LinkedIn + Display |
| 500-2,000 accounts | $5,000-15,000/mo | Display + LinkedIn + Retarget |
| 2,000-10,000 accounts | $15,000-40,000/mo | Full multi-channel |
| 10,000+ accounts | $40,000+/mo | Full multi-channel + CTV |

*These are directional — actual CPMs vary by targeting precision, industry, and geography.*

## Attribution

B2B ad attribution is account-level, not click-level:

- **Influenced pipeline** — accounts exposed to ads that later entered pipeline (regardless of click)
- **Account engagement lift** — % increase in website visits, content downloads, or demo requests from ad-exposed accounts vs control
- **Time-to-pipeline** — how much faster do ad-exposed accounts move from awareness to opportunity
- **Multi-touch** — ads rarely generate direct conversions; measure their contribution alongside outbound, content, and events

## Platform-specific guidance

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

### In Clay

- **Ad Sync**: Push Clay Audiences directly to LinkedIn Ads, Meta Ads, and Google Ads. Build enriched, signal-driven audiences in Clay → sync to ad platforms for targeted campaigns.
- **Enrichment-powered targeting**: Use waterfall enrichment to build precise audiences — filter by firmographics (revenue, employee count, industry), technographics (tech stack), and intent signals (job changes, funding, website visits).
- **Dynamic audiences**: Audiences auto-update as new enrichment data and signals flow in. Ad platforms receive refreshed audience lists automatically.
- **ABM air cover**: Pair Ad Sync with Clay's Email Sequencer or outbound tool integrations — run display/social ads alongside outbound for multi-channel ABM.
- **Plan gate**: Ad Sync requires Growth plan ($446-495/mo, 1 audience included) or Enterprise (2 audiences).
- **Best for**: Teams using Clay for enrichment who want to add advertising as a channel without a separate ABM platform.

### In AdRoll (RollWorks ABM)

AdRoll's B2B arm, RollWorks, provides account-based advertising for sales and marketing teams:

**Account-based targeting**:
- Upload target account lists or build audiences from firmographic criteria (industry, company size, revenue, technology)
- IP-based and cookie-based matching to serve display ads to specific companies
- Machine learning account scoring to prioritize accounts most likely to convert

**HubSpot integration**:
- Deep bidirectional integration — sync HubSpot company lists to RollWorks audiences
- Account-level reporting surfaces in HubSpot — see ad engagement on account records
- Trigger workflows based on RollWorks engagement data
- Often called "the ABM platform for HubSpot"

**Campaign types**:
- Account-based display ads across 500+ ad exchanges
- Social ads (Facebook/Instagram) targeted at account lists
- Site visitor identification — identify companies visiting your website via IP matching
- Cross-channel budget optimization distributes spend across channels automatically

**Best for**: HubSpot-centric B2B teams wanting ABM advertising without the enterprise price tag of Demandbase or 6sense. Strong account identification and straightforward setup.

**Pricing note**: RollWorks has separate pricing from AdRoll's consumer/ecommerce plans. Contact sales for RollWorks ABM pricing.

### In Reddit Ads

Reddit Ads offers B2B advertising through community-level targeting — reach professionals in industry-specific subreddits where they discuss work challenges and evaluate tools.

**B2B targeting on Reddit:**
- **Community targeting**: Target subreddits where your ICP congregates — r/sales, r/sysadmin, r/devops, r/marketing, r/startups, r/SaaS. More precise than interest targeting.
- **Interest categories**: Reddit's B2B-relevant interests include Technology, Business & Finance, Career & Education.
- **Keyword targeting**: Target users who've engaged with posts containing B2B-relevant keywords (e.g., "CRM migration", "sales automation").
- **Custom audience — customer list**: Upload hashed email lists from CRM for direct account targeting.
- **Retargeting**: Reddit Pixel + CAPI track website visitors for remarketing campaigns.

**B2B campaign strategy:**
- Reddit is upper-funnel for B2B — brand awareness and consideration, not direct conversion. 96% of Reddit conversions are view-through, not click.
- **Air cover**: Run Reddit ads alongside outbound to warm target accounts. Reddit campaigns increase branded Google search by 10-25%.
- **Content promotion**: Long-form Free-Form ads work for B2B — Redditors read. Share thought leadership, case studies, or product stories.
- **Community engagement**: Ads have comment sections. Authentic engagement with questions builds trust.

**Budget**: CPC $0.50-$2.00 for B2B/SaaS. Start at $50-100/day. Subreddit targeting is cheaper than LinkedIn but less precise on firmographics.

**Limitation**: No native firmographic targeting (company size, industry, revenue). Can't target specific companies by name. For account-level B2B targeting, pair Reddit with a dedicated ABM platform (ZoomInfo, 6sense, Demandbase) or use customer list uploads.

**Best for**: B2B brands wanting to reach tech-savvy, early-adopter audiences at lower CPM than LinkedIn. Strong for SaaS, developer tools, and startup-focused products.

### In Google Ads (B2B targeting)

**Search and display for B2B:**
- Customer Match: upload company email lists for targeting
- In-Market Audiences: Google's own intent signals for B2B categories
- Display network: target by company size, industry via Google's B2B segments
- Search ads: capture demand for B2B keywords
- YouTube: video ads with B2B audience targeting

**Best for**: Capturing active search demand. Pair Google search ads with display ABM from a dedicated platform.

**Limitation**: B2B targeting is less precise than dedicated ABM platforms. No account-level reporting natively.
