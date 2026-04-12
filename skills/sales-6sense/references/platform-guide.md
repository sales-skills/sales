# 6sense Platform Guide

## Data model

| Entity | Key | Attributes | Source |
|--------|-----|------------|--------|
| Account | domain / CRM account ID | firmographics (industry, size, revenue, location, tech stack), buying stage (Awareness > Purchase), 6QA status, intent topics, profile fit score, segment membership | Account Intelligence |
| Contact / Person | email / CRM contact ID | name, title, seniority, job function, email, phone, company, department | People Enrichment API |
| Intent signal | topic + account | topic name, signal strength, trend (increasing/stable/decreasing), first seen, last seen | Signalverse |
| Segment | segment ID | name, rules, member count, activation channels (ads, email, CRM) | Segments |
| Campaign | campaign ID | type (display, LinkedIn, retargeting, email), impressions, clicks, influenced pipeline, attribution | Advertising / AI Email |

## Signalverse Intent Data

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

## Predictive Analytics & 6AI Scoring

AI-driven models that predict which accounts are most likely to buy:

- **Profile fit score**: How well an account matches your ICP based on firmographic/technographic attributes
- **Buying stage prediction**: AI classifies each account into a buying stage (updated daily)
- **Intent score**: Composite score based on topic research intensity and recency
- **6QA status**: Binary qualification — "qualified" or not — based on configurable thresholds combining fit + intent + stage
- **Recommended actions**: AI suggests next best actions for each account based on stage and engagement

## Sales Intelligence

Tools for sales teams to act on 6sense insights:

- **Sales Copilot**: AI-driven dashboard embedded in CRM showing prioritized accounts, recommended actions, and talking points
- **Chrome extension**: See 6sense insights while browsing LinkedIn or company websites — intent topics, buying stage, key contacts, firmographics
- **Sales alerts**: Real-time notifications when target accounts show increased research activity or move to a new buying stage
- **Buyer discovery**: Find contacts at in-market accounts matching your buyer persona
- **Company Discovery**: Identify new accounts matching your ICP that aren't yet in your CRM

## AI Email Agents (Conversational Email)

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

## Advertising & Audience Activation

B2B display and social advertising powered by account intelligence:

- **Programmatic display**: Serve ads to target accounts across the web
- **LinkedIn audience sync**: Dynamic 6sense segments synced to LinkedIn Campaign Manager — 50%+ better match rates than competitors
- **Retargeting**: Re-engage website visitors with display ads
- **Contextual targeting**: Serve ads on pages relevant to intent topics
- **Dynamic audiences**: Segments automatically update as accounts enter/exit buying stages — ad audiences adjust in real-time

## Orchestration / Workflows

Drag-and-drop canvas for multichannel campaign automation:

- **Triggers**: Intent signal changes, buying stage transitions, segment membership changes, CRM events
- **Actions**: Add to ad audience, send to email agent, create CRM task, enrich data, update segment, send Slack alert
- **Branching**: Route accounts through different paths based on firmographic fit, intent strength, or engagement
- **Cross-channel**: Orchestrate advertising, email, sales outreach, and CRM updates from one canvas

## Segments

Dynamic audience groups that power all activation:

- **Rule-based**: Build segments using firmographic, technographic, intent, buying stage, and engagement criteria
- **AI-recommended**: 6sense suggests segment criteria based on historical win patterns
- **Cross-channel activation**: Segments sync to advertising (display + LinkedIn), email agents, CRM, and MAP
- **Real-time updates**: Accounts enter/exit segments dynamically as signals change

## Company Identification (Web Visitor ID)

IP-to-company matching for anonymous website visitors:

- **WebTag**: JavaScript snippet installed on your website (similar to analytics tag)
- **Company Identification API**: `GET https://epsilon.6sense.com/v3/company/details` — pass IP, get company firmographics
- **Match rates**: 6sense claims industry-leading match rates for IP-to-company resolution
- **Integration**: Feed identified companies into segments, workflows, and CRM

## API quick reference

| API | Base URL | Method | Key param | Returns |
|-----|----------|--------|-----------|---------|
| Company Identification | `epsilon.6sense.com/v3/company/details` | GET | IP address | Company firmographics |
| People Enrichment | `scribe.6sense.com/v2/people/Enrichment` | GET/POST | Email or name+company | Contact data (email, phone, title, seniority) |
| Lead Scoring & Firmographics | `scribe.6sense.com/v2/people/full` | GET/POST | Email or name+company | Contact + company data + scoring |
| Segments | `scribe.6sense.com/v2/company/segments` | GET | Company identifier | Segment membership + scores |

**Auth**: API token (org-level, provisioned in platform settings). Tokens can be created per-integration for security isolation.

**Credits**: API calls consume credits from your plan allocation. Credit usage varies by endpoint.

## Pricing

6sense does not publish transparent paid pricing. All paid plans require custom quotes and typically 2-year minimum contracts.

| Plan | Price | Includes |
|------|-------|----------|
| Free | $0/mo | 50 credits/mo, basic company/people search, list builder, sales alerts, Chrome extension |
| Sales Intelligence + Data Credits + Predictive AI | ~$100K-200K+/yr | Full platform — predictive models, Sales Copilot, enriched data, persona/technographic insights, web visitor ID, workflows, hierarchy mapping, analytics |
| Sales Intelligence + Data Credits | ~$50K-100K/yr | Contact/company data, buyer discovery, intent signals, web visitor ID, Sales Copilot (lite), workflows, CRM integrations |
| Sales Intelligence + Predictive AI | ~$50K-100K/yr | Predictive models, Sales Copilot, persona insights, web visitor ID, workflows, reporting (no data credits) |

Typical range: $50K-$200K+/year. Median buyer (via Vendr): ~$55K/year. Implementation fees: $5K-$50K additional.

## Integrations

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

## Compliance

- SOC 2 Type II certified
- GDPR compliant (EU data handling)
- CCPA compliant

## Getting started with 6sense

1. **Install WebTag** — add the 6sense JavaScript tag to your website for Company Identification
2. **Configure intent topics** — select keywords and topics relevant to your product/category in Signalverse settings
3. **Define ICP criteria** — set firmographic and technographic filters for your ideal customer profile
4. **Build initial segments** — create segments combining ICP fit + intent signals + buying stage
5. **Connect CRM** — set up Salesforce/HubSpot integration for bidirectional sync
6. **Enable Sales Intelligence** — deploy Chrome extension and Sales Copilot to sales team
7. **Launch advertising** — activate segments on display and LinkedIn ad channels
8. **Set up workflows** — create orchestration rules for automated campaign actions

## Optimizing 6sense intent data

1. **Refine intent topics** — start broad, then narrow to topics with highest correlation to closed-won deals. Review quarterly.
2. **Combine first + third-party signals** — first-party website visits + third-party topic research is more predictive than either alone
3. **Set buying stage thresholds** — customize 6QA criteria to match your actual buying process. Default thresholds may be too loose or too tight.
4. **Use signal trends, not snapshots** — an account with increasing research intensity is more valuable than one with high but stable activity
5. **Exclude noise** — filter out accounts that are researching for content creation, competitive intel, or academic purposes (common false positives)

## 6sense + outbound workflow

1. **6sense identifies in-market account** via intent signals + buying stage
2. **Segment filters to ICP** — only accounts matching firmographic criteria
3. **AI Email Agent** engages buying group contacts with personalized outreach
4. **Display + LinkedIn ads** reinforce messaging to the same account
5. **Sales Copilot** alerts rep with context when account responds or moves to Decision stage
6. **Rep takes over** with personalized follow-up referencing account's research interests
