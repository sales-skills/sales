# NeoReach Platform Reference

## Platform overview

NeoReach is an enterprise influencer marketing platform combining SaaS tools, data intelligence APIs, and optional managed campaign services. Founded in 2013 (Orlando, FL) by Jesse Leimgruber and PJ Leimgruber, the platform targets Fortune 500 brands, retail, finance, and large enterprise clients. NeoReach has deployed $250-350M+ in influencer spend to date, developing activation and measurement techniques now considered industry best practices. Operates across three areas: SaaS & Data Intelligence APIs, Brand Sponsorships, and a Creator Network.

## Key modules

### Influencer discovery

- **Database**: 3M+ indexed influencer profiles across Instagram, TikTok, YouTube, and other platforms
- **Search filters**: 40+ filters including keywords, social platform, audience demographics (age, gender, location, interests, income, occupation, marital/parental status), brand affinities, engagement metrics, and follower ranges
- **AI recommendation engine**: Learns from your selections and improves suggestions over time — the more you use it, the better it gets at matching creators to your brand
- **Lookalike search**: Find creators similar to ones already performing well
- **Conversation topics**: Search by what creators talk about, not just their bio or hashtags

### Fraud detection

- **Fake follower analysis**: Detects purchased followers, bot accounts, and artificially inflated engagement
- **Engagement authenticity**: Identifies engagement pods, comment spam, and coordinated artificial boosting
- **Audience verification**: Confirms audience demographics match what the creator claims
- **Always-on monitoring**: Continuous fraud checks, not just point-in-time snapshots

### Campaign management

- **Centralized hub**: Plan campaigns, coordinate influencer relationships, manage contracts, track deadlines, review posts, and track payment history in one place
- **Content tracking**: Monitor content progress from brief through publication
- **Contract management**: Handle agreements, deliverables, and timelines
- **Team collaboration**: Shared workspace across your organization
- **Payment tracking**: Track payment history and status per influencer

### Analytics and reporting

- **Influencer Media Value (IMV)**: NeoReach's proprietary ROI metric that estimates the media value of influencer content — used to demonstrate campaign ROI in terms stakeholders understand
- **Campaign metrics**: ROI, CPM, CPE, impressions, engagements at campaign, post, and influencer level
- **Audience exposure demographics**: Understand who you're actually reaching — age, gender, location breakdowns of the audience that saw your campaign content
- **Multi-influencer comparison**: Compare performance across creators within a campaign
- **Competitor spend analysis**: See what competitors are spending on influencer marketing (via API)

### API

NeoReach offers a REST API returning JSON data. Key capabilities:

- **Sponsorship pricing data** — historical and current influencer rates
- **Audience matching** — find creators whose audience matches your target demographics
- **Fast-growing influencer tracking** — identify rising creators before they're expensive
- **Competitor spend analysis** — monitor competitor influencer budgets
- **Historical price and ROI data** — benchmark rates and expected returns
- **Fraud detection** — programmatic access to fraud scoring
- **400+ custom data points** — integrate into in-house tools and dashboards

API access is enterprise-tier and requires a sales conversation. No public developer documentation is available — API specs and auth details are provided during onboarding. See `references/neoreach-api-reference.md` for additional technical details.

### Managed services

For brands that want NeoReach's team to run campaigns end-to-end:

- **Campaign strategy** — NeoReach plans the influencer strategy based on your goals
- **Creator sourcing and vetting** — their team finds and vets creators using the platform's data
- **Outreach and negotiation** — NeoReach handles all creator communication
- **Content coordination** — review and approval workflows managed by their team
- **Reporting** — campaign performance reports delivered to your team
- **Minimum engagement**: $25K+ per managed campaign

## Pricing and limits

*Best-effort from research — verify current pricing directly with NeoReach.*

| Tier | Price | Best for |
|---|---|---|
| Small team SaaS | ~$399/mo | Small teams needing basic discovery and campaign management |
| Full platform SaaS | ~$1,500/mo | Larger teams needing full analytics, API preview, and advanced features |
| Enterprise annual | $50K-$500K/yr | Large brands or agencies with custom requirements and API access |
| Managed campaigns | $25K+ per campaign | Brands wanting full-service campaign execution |

Plan-gated features (enterprise pricing required):
- Full API access with 400+ data points
- Competitor spend analysis
- Advanced audience matching
- Historical pricing data
- Custom integrations

## Integrations

- **CRMs**: Integrates with CRM systems via API or data export (Excel/CSV)
- **Ecommerce**: No native Shopify/WooCommerce integration
- **Ad networks**: Integrates with ad platforms for influencer content retargeting
- **Analytics**: Google Analytics integration for campaign tracking
- **Custom**: 400+ data points available via REST API for in-house tool integration
- **No native Zapier/Make connectors documented**

## Data model (API)

Key objects available via API (enterprise only):

- **Creator profiles** — social stats, content, audience, engagement
- **Audience demographics** — age, gender, location, interests, income, occupation, psychographics
- **Sponsorship data** — historical pricing, current rates, ROI benchmarks
- **Campaign data** — ROI, CPM, CPE, IMV, audience exposure
- **Fraud scores** — fake follower %, engagement authenticity, audience verification
- **Competitor intelligence** — competitor spend, creator partnerships

## Workflow setup

### Running a self-serve campaign

1. **Define campaign goals** — set KPIs (reach, engagement, conversions), budget, and timeline
2. **Discover creators** — use 40+ filters and AI recommendations to build a shortlist
3. **Vet creators** — run fraud detection, verify audience demographics, review content quality
4. **Outreach** — use NeoReach's centralized communications hub to contact and negotiate with creators
5. **Manage campaign** — track contracts, deadlines, content progress, and approvals
6. **Measure results** — review IMV, ROI, CPM, CPE, and audience exposure demographics

### Using managed services

1. **Brief NeoReach** — share campaign goals, target audience, budget ($25K+ minimum), and brand guidelines
2. **Review strategy** — NeoReach proposes a campaign strategy and creator recommendations
3. **Approve creators** — review and approve the creator shortlist before outreach begins
4. **Monitor progress** — NeoReach handles outreach, negotiation, content coordination
5. **Review reports** — receive campaign performance reports with IMV, ROI, and engagement metrics

## Deep dives

### NeoReach vs key competitors

| Feature | NeoReach | CreatorIQ | Modash | HypeAuditor |
|---|---|---|---|---|
| Database size | 3M+ | ~20M | 350M+ | 223.6M+ |
| Target market | Fortune 500 / enterprise | Global enterprise | SMB-enterprise | SMB-enterprise |
| Pricing | $399/mo - $500K/yr | ~$30K/yr | $199/mo | $299/mo |
| Public API docs | No | Yes (ExchangeIQ) | Yes | Yes (Enterprise) |
| Managed services | Yes ($25K+/campaign) | No | No | No |
| Shopify integration | No | Yes | Deep | Yes |
| Fraud detection | Yes (always-on) | Yes (SafeIQ) | Yes | Yes (53 patterns, 95%+ accuracy) |
| Proprietary metric | IMV | — | — | AQS |

### When NeoReach is the right fit

- Fortune 500 or large enterprise with $50K+/yr budget for influencer tooling
- Need managed services option to outsource campaign execution
- Want competitor spend intelligence and historical pricing data
- Enterprise team that needs API integration with 400+ data points
- Value fraud detection with always-on monitoring

### When to look elsewhere

- Budget under $5K/mo → Modash ($199/mo), Heepsy ($49/mo), Afluencer (free)
- Need Shopify integration → Modash, Aspire, Influencer Hero
- Need larger discovery database → Modash (350M+), Creator.co (400M+), HypeAuditor (223.6M+)
- Need public API documentation before committing → Meltwater, CreatorIQ, HypeAuditor
- SMB or startup → NeoReach's pricing and enterprise focus won't fit
