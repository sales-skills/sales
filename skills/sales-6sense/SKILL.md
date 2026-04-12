---
name: sales-6sense
description: "6sense platform help — Signalverse Intent Data, Predictive Analytics (6AI Scoring), Sales Intelligence (Sales Copilot), AI Email Agents (Conversational Email), Advertising & Audience Activation, Orchestration Workflows, Segments, Company Identification API, People/Company Enrichment API, Company Discovery, Campaign Analytics. Use when asking 'how do I set up 6sense', '6sense intent data', '6sense predictive scoring', '6sense AI email agents', '6sense advertising', '6sense segments', '6sense API', '6sense Sales Intelligence', '6sense vs Demandbase'. Do NOT use for intent strategy across tools (use /sales-intent), lead scoring strategy across tools (use /sales-lead-score), enrichment strategy across tools (use /sales-enrich), B2B advertising strategy across tools (use /sales-b2b-advertising), or cadence/sequence strategy across tools (use /sales-cadence)."
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

### Data model

| Entity | Key | Attributes | Source |
|--------|-----|------------|--------|
| Account | domain / CRM account ID | firmographics (industry, size, revenue, location, tech stack), buying stage (Awareness → Purchase), 6QA status, intent topics, profile fit score, segment membership | Account Intelligence |
| Contact / Person | email / CRM contact ID | name, title, seniority, job function, email, phone, company, department | People Enrichment API |
| Intent signal | topic + account | topic name, signal strength, trend (increasing/stable/decreasing), first seen, last seen | Signalverse |
| Segment | segment ID | name, rules, member count, activation channels (ads, email, CRM) | Segments |
| Campaign | campaign ID | type (display, LinkedIn, retargeting, email), impressions, clicks, influenced pipeline, attribution | Advertising / AI Email |

### Signalverse Intent Data

6sense's proprietary intent data engine captures 1 trillion+ signals from:
- **First-party**: Website visitor behavior (via Company Identification API / WebTag)
- **Third-party**: Content consumption across the B2B web via Bombora, G2, TrustRadius, and 6sense's own data co-op
- **CRM/MAP activity**: Email engagement, form fills, event attendance synced from your tools

**Key concepts**:
- **Intent topics**: Keywords and topics being researched by accounts (configurable in platform)
- **Buying stages**: 6sense maps accounts to stages — Target, Awareness, Consideration, Decision, Purchase, Retention
- **Signal strength**: Relative intensity of research activity compared to the account's baseline
- **Signal trend**: Whether activity is increasing, stable, or decreasing
- **6QA (6sense Qualified Account)**: Accounts flagged as in-market based on AI analysis of combined signals — customizable criteria

### Predictive Analytics & 6AI Scoring

AI-driven models that predict which accounts are most likely to buy:

- **Profile fit score**: How well an account matches your ICP based on firmographic/technographic attributes
- **Buying stage prediction**: AI classifies each account into a buying stage (updated daily)
- **Intent score**: Composite score based on topic research intensity and recency
- **6QA status**: Binary qualification — "qualified" or not — based on configurable thresholds combining fit + intent + stage
- **Recommended actions**: AI suggests next best actions for each account based on stage and engagement

### Sales Intelligence

Tools for sales teams to act on 6sense insights:

- **Sales Copilot**: AI-driven dashboard embedded in CRM showing prioritized accounts, recommended actions, and talking points
- **Chrome extension**: See 6sense insights while browsing LinkedIn or company websites — intent topics, buying stage, key contacts, firmographics
- **Sales alerts**: Real-time notifications when target accounts show increased research activity or move to a new buying stage
- **Buyer discovery**: Find contacts at in-market accounts matching your buyer persona
- **Company Discovery**: Identify new accounts matching your ICP that aren't yet in your CRM

### AI Email Agents (Conversational Email)

Persona-driven AI agents that automate the entire email lifecycle:

1. **Writing**: Agents craft personalized emails using CRM data, Signalverse insights, and custom brand voice prompts — not template-based
2. **Sending**: Automated delivery with deliverability infrastructure (custom inboxes, contact validation)
3. **Following up**: Agents read replies, analyze response patterns, and adjust messaging
4. **Qualifying**: AI determines interest level and qualification status
5. **Handoff**: Routes qualified opportunities to sales reps at the right moment

**Key features**:
- Brand voice customization via custom prompts
- Buying group targeting (engage multiple stakeholders)
- Advanced analytics (response rates, meetings booked, pipeline attribution)
- Deliverability features (custom AI email agent inboxes, contact validation rules)

### Advertising & Audience Activation

B2B display and social advertising powered by account intelligence:

- **Programmatic display**: Serve ads to target accounts across the web
- **LinkedIn audience sync**: Dynamic 6sense segments synced to LinkedIn Campaign Manager — 50%+ better match rates than competitors
- **Retargeting**: Re-engage website visitors with display ads
- **Contextual targeting**: Serve ads on pages relevant to intent topics
- **Dynamic audiences**: Segments automatically update as accounts enter/exit buying stages — ad audiences adjust in real-time

### Orchestration / Workflows

Drag-and-drop canvas for multichannel campaign automation:

- **Triggers**: Intent signal changes, buying stage transitions, segment membership changes, CRM events
- **Actions**: Add to ad audience, send to email agent, create CRM task, enrich data, update segment, send Slack alert
- **Branching**: Route accounts through different paths based on firmographic fit, intent strength, or engagement
- **Cross-channel**: Orchestrate advertising, email, sales outreach, and CRM updates from one canvas

### Segments

Dynamic audience groups that power all activation:

- **Rule-based**: Build segments using firmographic, technographic, intent, buying stage, and engagement criteria
- **AI-recommended**: 6sense suggests segment criteria based on historical win patterns
- **Cross-channel activation**: Segments sync to advertising (display + LinkedIn), email agents, CRM, and MAP
- **Real-time updates**: Accounts enter/exit segments dynamically as signals change

### Company Identification (Web Visitor ID)

IP-to-company matching for anonymous website visitors:

- **WebTag**: JavaScript snippet installed on your website (similar to analytics tag)
- **Company Identification API**: `GET https://epsilon.6sense.com/v3/company/details` — pass IP, get company firmographics
- **Match rates**: 6sense claims industry-leading match rates for IP-to-company resolution
- **Integration**: Feed identified companies into segments, workflows, and CRM

### API quick reference

| API | Base URL | Method | Key param | Returns |
|-----|----------|--------|-----------|---------|
| Company Identification | `epsilon.6sense.com/v3/company/details` | GET | IP address | Company firmographics |
| People Enrichment | `scribe.6sense.com/v2/people/Enrichment` | GET/POST | Email or name+company | Contact data (email, phone, title, seniority) |
| Lead Scoring & Firmographics | `scribe.6sense.com/v2/people/full` | GET/POST | Email or name+company | Contact + company data + scoring |
| Segments | `scribe.6sense.com/v2/company/segments` | GET | Company identifier | Segment membership + scores |

**Auth**: API token (org-level, provisioned in platform settings). Tokens can be created per-integration for security isolation.

**Credits**: API calls consume credits from your plan allocation. Credit usage varies by endpoint.

### Pricing

6sense does not publish transparent paid pricing. All paid plans require custom quotes and typically 2-year minimum contracts.

| Plan | Price | Includes |
|------|-------|----------|
| Free | $0/mo | 50 credits/mo, basic company/people search, list builder, sales alerts, Chrome extension |
| Sales Intelligence + Data Credits + Predictive AI | ~$100K-200K+/yr | Full platform — predictive models, Sales Copilot, enriched data, persona/technographic insights, web visitor ID, workflows, hierarchy mapping, analytics |
| Sales Intelligence + Data Credits | ~$50K-100K/yr | Contact/company data, buyer discovery, intent signals, web visitor ID, Sales Copilot (lite), workflows, CRM integrations |
| Sales Intelligence + Predictive AI | ~$50K-100K/yr | Predictive models, Sales Copilot, persona insights, web visitor ID, workflows, reporting (no data credits) |

Typical range: $50K-$200K+/year. Median buyer (via Vendr): ~$55K/year. Implementation fees: $5K-$50K additional.

### Integrations

| Integration | Type | What it does |
|-------------|------|-------------|
| Salesforce | Native | Bidirectional CRM sync — account scores, buying stages, intent data, contact enrichment, workflows |
| HubSpot | Native | Account data sync, intent insights in HubSpot, enrichment export, nightly sync |
| Microsoft Dynamics | Native | CRM sync with account intelligence and scoring |
| Marketo | Native | MAP sync, People Enrichment API integration, segment-based campaigns |
| LinkedIn Ads | Native | Dynamic segment sync to LinkedIn Campaign Manager for all ad types |
| Outreach | Native | Push prioritized accounts and contacts to Outreach sequences |
| Salesloft | Native | Push accounts/contacts to Salesloft cadences with intent context |
| Drift | Native | Conversational marketing powered by 6sense account intelligence |
| Slack | Native | Real-time alerts when target accounts show intent spikes |
| Bombora | Data partner | Third-party intent data feeding into Signalverse |
| G2 | Data partner | Buyer intent from G2 review/comparison page visits |
| TrustRadius | Data partner | Buyer intent from TrustRadius activity |
| LeanData | Native | Lead-to-account matching and routing powered by 6sense data |
| Zapier | Connector | Connect 6sense events to 8,000+ apps |

### Compliance

- SOC 2 Type II certified
- GDPR compliant (EU data handling)
- CCPA compliant

## Step 4 — Actionable guidance

### Getting started with 6sense

1. **Install WebTag** — add the 6sense JavaScript tag to your website for Company Identification
2. **Configure intent topics** — select keywords and topics relevant to your product/category in Signalverse settings
3. **Define ICP criteria** — set firmographic and technographic filters for your ideal customer profile
4. **Build initial segments** — create segments combining ICP fit + intent signals + buying stage
5. **Connect CRM** — set up Salesforce/HubSpot integration for bidirectional sync
6. **Enable Sales Intelligence** — deploy Chrome extension and Sales Copilot to sales team
7. **Launch advertising** — activate segments on display and LinkedIn ad channels
8. **Set up workflows** — create orchestration rules for automated campaign actions

### Optimizing 6sense intent data

1. **Refine intent topics** — start broad, then narrow to topics with highest correlation to closed-won deals. Review quarterly.
2. **Combine first + third-party signals** — first-party website visits + third-party topic research is more predictive than either alone
3. **Set buying stage thresholds** — customize 6QA criteria to match your actual buying process. Default thresholds may be too loose or too tight.
4. **Use signal trends, not snapshots** — an account with increasing research intensity is more valuable than one with high but stable activity
5. **Exclude noise** — filter out accounts that are researching for content creation, competitive intel, or academic purposes (common false positives)

### 6sense + outbound workflow

1. **6sense identifies in-market account** vian intent signals + buying stage
2. **Segment filters to ICP** — only accounts matching firmographic criteria
3. **AI Email Agent** engages buying group contacts with personalized outreach
4. **Display + LinkedIn ads** reinforce messaging to the same account
5. **Sales Copilot** alerts rep with context when account responds or moves to Decision stage
6. **Rep takes over** with personalized follow-up referencing account's research interests

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
