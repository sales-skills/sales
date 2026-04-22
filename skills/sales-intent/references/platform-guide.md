# Buying Signals & Intent Data Platform Guide

## Types of Buying Signals, Ranked by Strength

| Signal type | Strength | What it means | Example |
|---|---|---|---|
| **Direct intent** | Very high | Company is actively researching your category or competitor | Bombora shows "sales engagement platform" topic surge |
| **Job change — champion** | Very high | A former champion or user moved to a new company | Your power user just became VP Sales at a new company |
| **Competitive evaluation** | High | Prospect is evaluating your competitor | G2 comparison page views, review site activity |
| **Funding event** | High | Company raised money — has budget for new tools | Series B announced last week |
| **Hiring signal** | High | Company is hiring for roles your product supports | Posting for 5 SDRs (signal for sales tools) |
| **Job change — new leader** | Medium-high | New executive in a role that buys your product | New CRO started 30 days ago |
| **Technology change** | Medium | Adopted/removed a technology adjacent to yours | Installed Salesforce (could need sales tools) — use Hunter.io TechLookup, Tomba's Technology endpoint, Prospeo's company enrichment tech stack field, or Seamless.AI's technology filters to detect |
| **Company growth** | Medium | Headcount growth, office expansion, new markets | Employee count grew 40% in 6 months |
| **Content engagement** | Medium | Interacted with your content (webinar, whitepaper, blog) | Downloaded your ROI calculator |
| **Website visit** | Low-medium | Visited your website (may be casual research) | Pricing page visit |
| **Social engagement** | Low | Liked/commented on your company's posts | Liked a LinkedIn post |
| **Email open** | Low | Opened your email (could be accidental/automated) | Opened but didn't reply |

## Signal Decay

Signals lose value over time:

| Signal age | Relevance |
|---|---|
| Last 7 days | Hot — act immediately |
| 8-30 days | Warm — still worth pursuing |
| 31-60 days | Cooling — use as context, not primary trigger |
| 60+ days | Stale — don't reference in outreach, may no longer be relevant |

## Account Scoring Matrix

Score each account by combining signal strength and ICP fit:

| | Strong ICP fit | Moderate ICP fit | Weak ICP fit |
|---|---|---|---|
| **Multiple strong signals** | Priority 1 — Act today | Priority 2 — Act this week | Deprioritize — signals don't overcome bad fit |
| **One strong signal** | Priority 2 — Act this week | Priority 3 — Queue for next cycle | Skip |
| **Weak signals only** | Priority 3 — Queue for next cycle | Priority 4 — Monitor | Skip |
| **No signals** | Priority 4 — Standard outbound | Skip | Skip |

Key principle: **ICP fit is the floor, signals are the accelerator.** A perfect signal at a bad-fit company is still a bad prospect. A perfect-fit company with no signal is still worth contacting — just lower priority.

## Lead Scoring Model

Assign point values to build a composite score:

**Demographic fit (0-50 points)**:
- Title matches ICP persona: +20
- Seniority matches (Director+, VP+, C-suite): +10
- Department matches: +10
- Geography matches: +10

**Firmographic fit (0-30 points)**:
- Industry matches: +10
- Company size in range: +10
- Revenue in range: +5
- Technology fit: +5

**Signal score (0-50 points)**:
- Direct intent (category/competitor): +20
- Job change (champion): +20
- Funding event: +15
- Hiring signal: +10
- Technology change: +10
- Content engagement: +5
- Website visit: +5

**Total score interpretation**:
- 80+ = Priority 1 — immediate outreach
- 60-79 = Priority 2 — outreach this week
- 40-59 = Priority 3 — queue for next cycle
- <40 = Standard outbound or skip

## Platform-Specific Guidance

### In Seamless.AI

Seamless.AI provides Buyer Intent and Job Changes as native features:
1. **Buyer Intent**: Select intent topics relevant to your product -> Seamless.AI scores accounts by research intensity across 12,000+ topics. Combine with Prospector filters to find contacts at high-intent accounts.
2. **Job Changes**: Tracks role changes for contacts in your CRM and saved lists. New hires, promotions, and company changes within 90 days. High-value trigger events — new leaders buy in their first 90 days.
3. **Pitch Intelligence**: AI-generated messaging based on prospect data, company news, and intent signals — use for signal-informed outreach angles.
4. **Autopilot + Intent**: Set Autopilot to continuously build lists filtered by intent signals — automated signal-to-list workflow.
5. **Credit note**: Buyer Intent and Job Changes are Pro/Enterprise features. Free/Basic plans don't include these.

### In ZoomInfo
- **4,000+ intent topics** — ZoomInfo tracks web activity across thousands of topics. Topics must be configured in your ZoomInfo admin — you only see signals for subscribed topics.
- **Spike detection** — ZoomInfo scores intent relative to a company's baseline. A "Spike" means activity is significantly above normal, indicating active research.
- **Scoops** — ZoomInfo's research team publishes pre-verified buying signals: project launches, technology evaluations, budget approvals, vendor changes. More specific than topic-based intent.
- **Recommended Contacts** — intent enrichment returns suggested contacts at spiking accounts, pre-matched to your buyer persona configuration.
- **Alert configuration** — set up Slack or email alerts when target accounts show intent spikes. Configure in ZoomInfo -> SalesOS -> Intent -> Alerts.
- **Integration** — intent data syncs to Salesforce, HubSpot, and other CRMs. Use to trigger automated outreach sequences or update lead scores.
- **API** — POST `/enrich/intent` with companyId returns active topics, signal scores, signal start dates, and recommended contacts.

### In Apollo.io

Apollo integrates Bombora and LeadSift intent data:
1. **Set up intent topics**: Settings > Intent > select keywords and competitor names to track
2. **View intent scores**: Apollo scores companies on a scale based on frequency, trend, and recency of research activity
3. **Filter by intent**: Use intent as a search filter to find accounts actively researching your category
4. **Combine with ICP filters**: Layer intent on top of firmographic/demographic filters for highest-quality lists
5. **Job change tracking**: Apollo surfaces job changes for contacts in your CRM — new roles within 90 days

### In Clearbit (Reveal)

Clearbit Reveal identifies anonymous website visitors by matching IP addresses to companies:
1. **IP-to-company identification**: `GET reveal.clearbit.com/v1/companies/find?ip={ip}` — returns company firmographics (name, domain, industry, size, location) plus a confidence score.
2. **Match rate**: Typically 20-30% of website traffic. Only resolves business IPs — home/mobile IPs won't match. Set expectations accordingly.
3. **De-anonymize website visitors**: See which companies are visiting your site, which pages they view, and how often. Use this as a website visit signal in the scoring matrix above.
4. **Personalize content**: Use Reveal data to dynamically adjust website content, CTAs, or pricing pages based on visitor's company size, industry, or name.
5. **Trigger sales alerts for target accounts**: When a target account visits your pricing or demo page, fire a Slack alert or CRM task for the assigned rep. High-value signal when combined with intent data.
6. **Combine with Prospector**: Once Reveal identifies a company, use Clearbit Prospector (or `/sales-enrich`) to find the right contacts at that company — turns anonymous traffic into actionable leads.
7. **JavaScript tag**: Install the Clearbit JavaScript tag on your website to capture visitor IPs and stream identification data in real time.
8. **Breeze Intelligence (HubSpot)**: Clearbit was acquired by HubSpot in December 2023. Reveal capabilities are now available as Breeze Intelligence within HubSpot, including buyer intent features. If you're on HubSpot, check Breeze Intelligence instead of standalone Clearbit.

### In RB2B

RB2B provides **person-level** website visitor identification (US traffic only) — it identifies the individual visiting your site, not just the company:
1. **Person-level identification**: RB2B's pixel resolves individual visitors to name, work email, LinkedIn profile URL, job title, and company. This is a stronger signal than company-level identification (Clearbit Reveal) because you know exactly who visited.
2. **Company-level identification**: For non-US traffic and unmatched visitors, RB2B provides company-level ID (powered by Demandbase) — similar to Clearbit Reveal.
3. **Hot Pages**: Configure high-intent pages (pricing, demo, case studies) as "Hot Pages" — visitors to these pages are flagged for immediate sales follow-up. Use as a high-value signal in the scoring matrix above.
4. **Hot Leads**: Filter identified visitors by ICP criteria (title, company size, industry, seniority) — only surface visitors who match your target profile. Reduces noise from non-ICP traffic.
5. **Real-time alerts**: Push identified visitors to Slack, CRM (HubSpot/Salesforce), or webhooks in real-time. Sales reps can act within minutes of a website visit.
6. **US-only limitation**: Person-level ID only works for US-based visitors. International traffic gets company-level ID only. If your audience is primarily non-US, use Clearbit Reveal or Demandbase instead.
7. **Coverage**: Pro+ plans identify 35-45% of US visitors at person level. Lower plans have lower match rates. Set expectations accordingly.
8. **Identity Resolution API**: Separate API product at api.rb2b.com offers programmatic resolution (IP->LinkedIn, IP->Company, Email->LinkedIn, LinkedIn->Email). Credit-based pricing separate from the pixel product.

### In 6sense

6sense is an enterprise ABM platform with proprietary intent data (Signalverse) and AI-driven buying stage predictions:
1. **Signalverse Intent Data**: 6sense captures 1 trillion+ signals from first-party website visits, third-party content consumption (Bombora, G2, TrustRadius), and CRM/MAP activity. Configure intent topics relevant to your product in the platform — 6sense tracks which accounts are researching those topics.
2. **Buying Stage Predictions**: AI classifies accounts into buying stages — Target, Awareness, Consideration, Decision, Purchase. Updated daily. More actionable than raw intent scores because it tells you where the account is in their journey.
3. **6QA (6sense Qualified Accounts)**: Fully customizable qualification criteria combining intent signals, profile fit, and buying stage. Use 6QAs as the trigger for sales outreach — they represent accounts most likely to buy.
4. **Company Identification**: `GET epsilon.6sense.com/v3/company/details` — identifies companies visiting your website by IP. Claims highest match rates in the industry. Feed identified companies into segments and workflows.
5. **Sales Intelligence & Sales Copilot**: AI-driven dashboard embedded in CRM showing prioritized accounts, recommended next actions, and talking points. Chrome extension shows intent data while browsing LinkedIn.
6. **Company Discovery**: Finds new accounts matching your ICP that aren't in your CRM yet — proactive signal-based prospecting.
7. **Signal trends**: 6sense tracks whether research intensity is increasing, stable, or decreasing — trend direction is more actionable than absolute signal strength.
8. **Pricing note**: Enterprise-only ($50K-200K+/year). Free plan (50 credits/mo) does NOT include intent data or predictive scoring. For budget-conscious teams, consider Bombora standalone ($25K/yr) or Apollo.io (intent included in lower-cost plans).

### In Clay

- **Signals**: Clay tracks job changes, promotions, funding rounds, website visits, and company news as automated triggers. Configure signal rules to fire when conditions match your ICP.
- **Signal-triggered workflows**: When a signal fires, Clay can automatically enrich the person/company via waterfall, run Claygent for custom research, and trigger Email Sequencer outreach — all in one workflow.
- **Audiences**: Combine signals with enrichment data and CRM data to build dynamic buyer segments. Audiences update automatically as new signals fire.
- **Ad Sync**: Push signal-based audiences to LinkedIn, Meta, and Google Ads for targeted campaigns alongside outbound.
- **Plan gate**: Signals require Launch plan ($167-185/mo) or above. Ad Sync requires Growth ($446-495/mo).
- **Best for**: Teams wanting to automate the signal -> enrichment -> outreach pipeline in a single platform.

### In AdRoll (RollWorks)

RollWorks (AdRoll's B2B arm) provides account-level intent and engagement signals:
1. **Site visitor identification**: IP-to-company matching identifies which companies visit your website. Pages viewed, visit frequency, and recency are intent signals for sales outreach.
2. **Account scoring**: Machine learning scores accounts based on fit + engagement. Prioritize accounts showing sustained engagement (multiple visits, key page views like pricing/demo).
3. **HubSpot integration**: RollWorks engagement data flows into HubSpot — account-level ad engagement, website visits, and scores visible on company records. Use to trigger HubSpot workflows for sales alerts.
4. **Intent-based advertising**: Target accounts showing engagement signals with account-based display ads — coordinate ad air cover with sales outreach timing.
5. **Best for**: HubSpot-centric teams wanting website visitor identification + account scoring without a full enterprise intent platform.

### In LeadMagic

- **Job Change Detector**: Track when contacts change jobs — new role, new company (3 credits per result). Use to trigger outreach when champions move to new accounts or when decision-makers join target companies.
- **Jobs Finder**: Search job listings across industries to identify hiring signals — companies posting for roles that indicate budget, growth, or need for your product (1 credit per result).
- **Ads Intelligence**: Google Ads Search, Meta Ads Search, and B2B Ads Search reveal what competitors and prospects are spending on advertising — a signal of active investment and priorities (1 credit per ad).
- **API-first**: All signal endpoints are REST APIs — automate signal detection in pipelines via api.leadmagic.io.
- **Best for**: Teams wanting programmatic access to job change and hiring signals without a full intent platform.

### In Qualified (Signals)

- **First-party website intent**: Qualified tracks which companies visit your website, what pages they view, time on site, and return visit frequency. Segments visitors using Salesforce account data (industry, revenue, tier, existing opportunity).
- **Third-party intent via Bombora**: Qualified integrates with Bombora for topic-level research intent data — know which accounts are researching your category across 5,000+ sources.
- **Account-level scoring**: Combines first-party engagement + third-party intent + Salesforce data into an account-level priority score with trend detection (increasing vs decreasing engagement).
- **Real-time alerts**: When a high-intent target account visits your website, Qualified sends instant alerts via Slack, Microsoft Teams, Chrome browser notifications, Gmail, and mobile.
- **Piper AI SDR**: Qualified doesn't just detect intent — Piper acts on it in real time. When a high-intent account visits, Piper engages them with a personalized conversation using Salesforce context, qualifies them, and books a meeting.
- **Best for**: Enterprise B2B on Salesforce who want website intent + third-party intent in one platform with an AI agent that acts on signals in real time.
- **Limitation**: Salesforce required. Enterprise pricing ($42K-$100K+/yr). No outbound signal-to-sequence automation — Qualified handles inbound only.
- **Platform skill**: `/sales-qualified`

## Automated Signal-to-Sequence Routing

Set up rules to automatically route signals into outreach:

| Signal trigger | Action | Sequence type |
|---|---|---|
| Intent score spikes (new) | Add to high-intent sequence | Aggressive — 5-7 touches over 14 days |
| Job change detected | Add to job change sequence | Warm — congratulations + soft pitch over 30 days |
| Funding announced | Add to funding sequence | Timely — reference funding, 4-5 touches over 10 days |
| Website pricing page visit | Notify rep in Slack | Manual follow-up — don't automate, too personal |
| Content download | Add to nurture sequence | Educational — 3-4 touches over 21 days |

### In Amplemarket
Use intent signals + Custom Signals to automate sequence entry:
1. **Job change alerts**: Mark existing contacts as "champions" — when they move to a new company, auto-add to a warm sequence
2. **Website visitors**: Install tracking pixel → identify companies visiting pricing/product pages → auto-add decision-makers to high-intent cadence
3. **Funding events**: Amplemarket detects new funding rounds → auto-add companies matching your ICP to a funding-triggered sequence
4. **Hiring signals**: Detect companies hiring for roles your product supports (e.g., "SDR Manager" = signal for sales tools)
5. **Competitive intelligence**: Prospects evaluating competitors → high-priority sequence with competitive positioning
6. **Custom Signals webhook**: Push any event from your product (`POST /custom_signals/{token}/entries`) → trigger sequences based on product usage, trial behavior, or CRM field changes
- **Signal strength**: Amplemarket combines multiple signals into a composite score — higher-signal prospects get more aggressive sequences
- **Limitation**: Custom Signals require API integration work. Website visitor identification requires tracking pixel install and works at company-level (not individual-level unless combined with enrichment). Annual contract required for full signals suite.
- **Platform skill**: `/sales-amplemarket`

### In Cognism (Elevate plan)
Use Bombora-powered intent data + hiring/funding signals to prioritize accounts:
1. **Intent topics**: Configure 8-15 Bombora topics relevant to your product category (e.g., "sales engagement", "CRM migration", "cold email tools"). Cognism surfaces companies showing increased research activity on these topics
2. **Hiring signals**: Companies posting jobs for roles your product supports (e.g., hiring SDRs = signal for sales tools). Filter by job title keywords in target departments
3. **Funding events**: Companies announcing funding rounds — strong buying indicator. Combine with intent topic surge for highest-priority accounts
4. **Job change alerts**: Track when champions or power users move to new companies — warm outreach opportunity at the new org
5. **Composite scoring**: Layer intent + hiring + funding + job change signals to build a priority score. Accounts showing 2+ signal types should get immediate outreach
- **Signal availability**: Intent data, hiring signals, and job change alerts require the Elevate (Diamond) plan. Grow plan only provides basic contact data without signal layers
- **Bombora overlap**: If you already have Bombora intent data through another provider (ZoomInfo, 6sense, Demandbase), Cognism's intent is the same underlying data — avoid paying twice. Cognism's value-add is combining Bombora with Diamond Data phone-verified mobiles for EMEA outreach
- **Platform skill**: `/sales-cognism`

### In Apollo.io
Use Apollo Workflows (Professional+ plan) to automate:
1. **Trigger**: Intent topic score increases, job change detected, or contact stage changes
2. **Action**: Add to sequence, create task, update field, send Slack notification
3. **Filter**: Only trigger for contacts matching your ICP criteria
