# Brandwatch Platform Guide

## Product suite overview

| Module | What it does | Key features |
|---|---|---|
| **Consumer Intelligence** | Social listening, audience research, trend analysis across 100M+ sources | Boolean queries, sentiment analysis (AI + manual correction), topic analysis, trending topics, custom dashboards, Signals (anomaly detection), audience segmentation |
| **Social Media Management** | Content planning, publishing, engagement (formerly Falcon.io) | Content calendar, social inbox (unified), community management, campaign planner, approval workflows, Measure (analytics) |
| **Influencer Marketing** | Creator discovery and campaign management (formerly Paladin, now "Influence") | Influencer search, campaign tracking, performance reporting |
| **Search Intelligence** | GenAI and search data monitoring (Trajaan acquisition) | AI search monitoring, keyword tracking, search trend analysis |
| **Media Intelligence** | Expert analyst services | Custom research reports, analyst briefings |

## Consumer Intelligence — monitoring setup

### Building queries

Brandwatch uses Boolean queries to define what to monitor. A query determines which mentions appear in your dashboards and analysis.

**Boolean operators:**
- `AND` — both terms must appear: `"Acme" AND "pricing"`
- `OR` — either term: `"Acme Corp" OR "AcmeCorp"`
- `NOT` — exclude: `"Acme" NOT "Acme Hardware"`
- `NEAR/n` — proximity: `"data breach" NEAR/5 "Acme"` (terms within 5 words)
- Parentheses for grouping: `("Acme" OR "AcmeCorp") AND ("review" OR "feedback")`

**Query best practices:**
- Start with your brand name in quotes, including misspellings and abbreviations
- Add competitor queries using the same structure for consistent SOV comparison
- Use NEAR/n for context-dependent mentions — reduces false positives significantly
- Test queries by reviewing the first 50 results — if >20% irrelevant, refine
- Create separate queries for brand monitoring, competitor tracking, and industry trends

### Sources and channels

Brandwatch monitors 100M+ sources across:
- Social media (X/Twitter, Facebook, Instagram, Reddit — official firehose access, Tumblr, YouTube)
- News sites and blogs (global coverage)
- Forums and review sites
- Print media (via Cision integration)

**Source configuration:**
- Start broad — enable all source types, then narrow if noise is too high
- Apply language and geography filters to match target markets
- Use source quality filters to exclude low-authority sites

### Dashboards and visualization

- **Components**: Volume charts, sentiment breakdown, topic clouds, top sources, top authors, geographic distribution, demographic breakdown
- **Signals**: Automated anomaly detection — alerts when mention volume or sentiment deviates from baseline
- **Sharing**: Export to PDF, share dashboards with stakeholders, schedule automated reports

## Sentiment analysis

Brandwatch uses AI-powered sentiment classification with these important accuracy details:

- **Accuracy**: 60-75% for supported languages (industry benchmark: two humans agree on sentiment ~80% of the time)
- **Supported languages**: English has highest accuracy; non-supported languages have lower recall
- **Manual correction**: Both sentiment and emotion can be manually adjusted for any mention in Listen
- **Custom rules**: Create sentiment rules for industry-specific terms (e.g., "aggressive" = positive in sales context)

**Improving sentiment accuracy:**
1. Manually correct high-impact mentions (top publications, viral posts)
2. Create custom sentiment rules for domain-specific language
3. Review sentiment accuracy monthly and adjust rules
4. Focus on sentiment trends over time, not individual mention scores
5. Accept that sarcasm, irony, and cultural nuance will be misclassified

## Social Media Management

The Social Media Management suite (formerly Falcon.io) handles:

**Content Calendar:**
- Plan and schedule posts across multiple social networks
- Approval workflows for team review before publishing
- Campaign grouping for organized content themes
- Note: scheduling requires selecting channel and platform per post — no bulk cross-posting

**Social Inbox:**
- Unified inbox aggregating messages, comments, and mentions across all connected social channels
- Assign conversations to team members
- Sentiment tagging on incoming messages (auto + manual)
- Salesforce integration — create cases or leads directly from social conversations

**Engage Module:**
- Community management across channels
- AI-powered writing assistant for responses
- Automated routing rules for high-priority messages

## Influencer Marketing (Influence)

Brandwatch's influencer module (formerly Paladin):

- **Discovery**: Search for influencers by topic, platform, demographics, engagement metrics
- **Campaign management**: Track influencer campaign performance
- **Reporting**: Performance metrics, reach, engagement

Note: Less feature-rich than dedicated influencer platforms (Modash, CreatorIQ, etc.) — better suited for brands already using Brandwatch for social listening who want basic influencer capabilities in the same platform.

## Integrations

| Integration | What it does |
|---|---|
| **Salesforce Service Cloud** | Create cases and leads from social conversations, two-way sync, social profile -> CRM lead |
| **Salesforce Sales Cloud** | Send social profiles as leads, access CRM data in Brandwatch Engage |
| **Slack** | Alert notifications, mention summaries |
| **Microsoft Teams** | Alert notifications |
| **Hootsuite** | Social publishing (via Talkwalker/Hootsuite partnership) |
| **Power BI / Looker** | Dashboard embedding, data export for BI |

## Pricing

Brandwatch does not publish public pricing. Key details:

- **Annual contracts only** — all plans are billed annually with upfront payment
- **Estimated ranges** (from user reports):
  - SMB/mid-size: $800-2,000/mo (3-5 users, limited history)
  - Professional: $2,000-5,000/mo (10+ users, 1-year data)
  - Enterprise: $5,000-15,000+/mo (unlimited users, full suite)
- **No free trial** — demo only via sales call
- **Three product lines** can be purchased separately or bundled:
  - Consumer Intelligence (social listening + research)
  - Social Media Management (publishing + engagement)
  - Influencer Marketing

*Best-effort pricing from third-party reports — verify with Brandwatch sales.*
