# G2 Platform Reference

## Platform overview

G2 is the world's largest B2B software review marketplace — 3M+ reviews, 180K+ products across 2,000+ categories, ~100M annual buyer visits. It connects software buyers doing comparison research with software vendors seeking visibility, social proof, and buyer intent signals. G2 is especially popular among mid-market and enterprise buyers (100% of Fortune 500 companies use G2 for software decisions).

## Key modules

### Profiles & Brand Awareness
- **Free profile**: Claim your product listing, add screenshots, videos, pricing, integrations
- **Seller pages**: Branded landing pages (upgraded on paid plans)
- **Custom CTAs**: Drive traffic to your website, demo pages, or free trials (Starter+)
- **Branded banners**: Custom hero images on your profile (Starter+)

### Review Collection
- **Self-service review campaigns**: Send outreach directly to customers via G2's branded review landing page. Share the link directly or have G2 distribute invitations.
- **Review automation**: Leverage email, customer data management (Salesforce, HubSpot), and NPS tools (Delighted, Medallia) to automatically solicit reviews
- **Gift card incentives**: $10-$25 gift cards for all reviewers (regardless of sentiment). Free plan doesn't include credits; Starter gets $100/mo, Professional $500/mo, Enterprise $1,000/mo
- **Video reviews**: Professional gets 3, Enterprise gets 5 video review credits
- **Review Managed Services**: G2's team handles your entire review generation strategy end-to-end (paid add-on)

### Review Management (Professional+)
- Respond to reviews publicly
- Tag and categorize reviews for internal analysis
- Monitor competitor reviews
- Review sentiment analysis

### Buyer Intent Data (add-on, all plans)
- Tracks companies researching your profile, your competitors, or your category on G2
- Delivers: company name, intent score, topics researched, competitor comparisons viewed
- Does NOT deliver: individual contacts, emails, or phone numbers
- Integrations: Salesforce, HubSpot, Slack, 6sense, Demandbase, Bombora feed
- Pricing: Core ~$10K/yr, full Buyer Intent $40K-$87K/yr depending on scope
- ROI reality: 91% of B2B marketers use intent data, only 24% report exceptional ROI

### Content & Badges
- **Badges**: "Users Love Us" (20+ reviews, 4.0+ avg), Grid placement badges, Category Leader, High Performer, etc.
- **G2 Reports**: Licensed Grid Reports with usage rights for marketing (paid add-on)
- **Voice-of-customer content**: Curated review excerpts for sales collateral, website, social proof

### Market Intelligence (Enterprise)
- Category trends and competitor data
- Market position tracking over time
- Buyer research patterns across your category

### G2 Clicks (PPC advertising)
- Pay-per-click ads within G2 search results and comparison pages
- Flexible budget — you set daily/monthly caps
- Competes for placement alongside organic results

### Paid Promotions
- Quarterly/annual ad space buyouts on category and comparison pages
- Limited to 3 spots per placement — premium inventory

### Data Solutions
- Investment-grade product and category analytics
- Custom pricing based on data needs

## Pricing and limits

| Plan | Cost | Users | Gift card credits | Key features |
|---|---|---|---|---|
| **Free** | $0 | 3 admins | None | Basic profile, standard seller page, "Users Love Us" badge, basic review collection |
| **Starter** | $299/mo ($2,999/yr Y1, $6K/yr Y2) | 1-100 employees | $100/mo | Review campaigns, custom CTAs, branded banners, upgraded profile |
| **Professional** | Custom | 10 | $500/mo | 3 video reviews, review management, profile visitor data, premium seller pages |
| **Enterprise** | Custom | Unlimited | $1,000/mo | 5 video reviews, multi-profile collection, market intelligence, solutions pages |

**Add-on pricing:**
- Buyer Intent: $10K-$87K/yr (depends on scope — category vs competitor vs both)
- G2 Content Subscription: custom
- G2 Clicks: PPC with flexible budgets
- Paid Promotions: quarterly/annual buyouts
- Data Solutions: custom
- Review Managed Services: custom

**Important**: Starter plan price doubles in year 2 ($299/mo → $599/mo).

## Integrations

### Native CRM connectors
- **Salesforce**: Sync G2 Buyer Intent to Salesforce — company intent scores, topics, competitor comparisons appear as custom fields on Account records. Trigger workflows/alerts based on intent signals.
- **HubSpot**: G2 Buyer Intent → HubSpot Company Properties. Sync intent data for enrollment in workflows, lead scoring, list building.

### Zapier
- **Triggers**: Tracked Prospect (when a company shows intent activity)
- **Actions**: Route to CRM, Slack notifications, add to sequences
- **Connected apps**: 8,000+ via Zapier

### Other integrations
- **Slack**: Intent signal notifications to sales channels
- **6sense**: G2 feeds into 6sense Signalverse as a first-party intent signal source
- **Demandbase**: G2 intent data enriches ABM account scoring
- **Bombora**: G2 and Bombora data can be layered for broader intent coverage
- **Salesforce CRM Connector**: Native deep integration for Salesforce customers

### G2 MCP Server
G2 offers an MCP (Model Context Protocol) server for connecting G2 data to AI assistants — check G2 documentation for current availability and setup.

## Data model (API)

### Key objects
- **Products**: Your software listing — name, description, screenshots, pricing, categories
- **Survey Responses** (Reviews): Individual reviews with ratings, text, verified/unverified status
- **Categories**: G2 taxonomy (2,000+ categories)
- **Questions**: Discussion questions on product pages
- **Answers**: Responses to questions
- **Buyer Intent signals**: Company name, intent score, topics, timestamps

### API overview
- **Base URL**: `https://data.g2.com/api/v2/`
- **Format**: JSON:API specification (application/vnd.api+json)
- **Auth**: OAuth2 + Access Tokens (generated in Developer Portal at `my.g2.com/developers/{slug}`)
- **Rate limit**: 100 requests/second globally; exceeding triggers 60-second block
- **Pagination**: `page[size]` (default 10, max 100) + `page[number]`
- **Date format**: RFC3339 (e.g., `2024-10-02T15:00:00Z`)
- **Filtering**: `updated_at_gt`, `updated_at_lt`, resource-specific filters

### Key endpoints
| Resource | Endpoint | Description |
|---|---|---|
| Products | `/api/v1/products` | Your product data |
| Reviews | `/api/v1/survey-responses` | Review data |
| Categories | `/api/v1/categories` | G2 category taxonomy |
| Questions | `/api/v1/questions` | Discussion questions |
| Answers | `/api/v1/answers` | Question answers |
| Buyer Intent | `/api/v1/ahoy/`, `/api/v1/intent-history` | Intent signals |
| Syndication | `/api/2018-01-01/syndication/` | Review syndication |
| RESThooks | `/api/v1/resource-subscriptions` | Webhook subscriptions |

### v2 API (newer)
- OLAP-style query language with dimensions, measures, and filters
- Supports cursor-based pagination
- OAuth2 scopes: `buyer_intent.read`, `screenshots.read`, etc.
- Endpoints: Buyer Intent (sandbox + production), Screenshots, Product Features, Categories, Market Signals, Credit Account

For full API reference, see `references/g2-api-reference.md`.

## Workflow setup

### Getting your first 20 reviews (Free plan)
1. Claim your G2 profile at g2.com
2. Complete every profile field — name, description, screenshots (5+), video demo, pricing, integrations
3. Identify 30-50 happy customers (NPS 9-10, recent renewals, positive support tickets)
4. Create a self-service review campaign in G2's dashboard
5. Send personalized review requests — email from CSM/founder, not marketing
6. Time requests after: successful onboarding, feature adoption milestone, support resolution, renewal
7. Offer $25 gift cards (if on paid plan) — equal for all reviewers
8. Follow up once after 5-7 days for non-responders
9. Goal: 40-50% response rate from warm personalized asks

### Setting up Buyer Intent (paid add-on)
1. Purchase Buyer Intent add-on from your G2 account team
2. Configure intent topics — your category, competitor names, related technology terms
3. Connect to CRM via native Salesforce/HubSpot integration or Zapier
4. Set up Slack notifications for sales team
5. Build enrichment pipeline: G2 intent (company name) → enrichment tool (Clay/Apollo/ZoomInfo) → contact info → sequence
6. Create signal-based outreach rules: high intent = manual personalized outreach, medium intent = automated nurture

### Maximizing free plan value
1. Complete profile (100% completion improves ranking)
2. Collect 20+ reviews to qualify for "Users Love Us" badge
3. Maintain steady review flow (5-10/month minimum) to stay on Grid
4. Respond to all negative reviews within 48 hours
5. Add G2 badge to your website, email signature, and sales deck
6. Use G2 comparison pages to understand competitive positioning (free)
7. Monitor your Grid placement quarterly — track movement

## Deep dives

### Review campaign timing strategy
| Customer milestone | Optimal ask timing | Expected response rate |
|---|---|---|
| Post-onboarding (first value delivered) | 7-14 days after go-live | 30-40% |
| Support resolution (positive CSAT) | 24-48 hours after resolution | 20-30% |
| Feature adoption (used key feature 3+ times) | At usage milestone | 15-25% |
| Renewal (just renewed) | Within 1 week of renewal | 25-35% |
| NPS 9-10 response | Immediately after NPS survey | 40-50% |

### G2 acquisition of Capterra, Software Advice, and GetApp (Jan 2026)

> **Major industry shift**: On January 29, 2026, G2 announced the acquisition of Capterra, Software Advice, and GetApp from Gartner. The deal closed February 5, 2026. This creates the dominant B2B software discovery platform:
> - 6M+ combined verified reviews
> - 200M+ annual software buyers globally
> - 10,000+ software vendors served
> - 2,000+ software and service categories
> - Up to 3x more Buyer Intent signals from the combined data set
> - New pay-per-lead offering converting intent into sales-ready leads
>
> **What this means for vendors**: Capterra, Software Advice, and GetApp will continue operating but are now part of the G2 family. Vendors should expect unified intent data and potentially consolidated vendor portals over time. The competitive landscape now has G2 (with Capterra/SA/GetApp) vs TrustRadius vs Gartner Peer Insights as the main players.

### G2 vs TrustRadius (post-acquisition landscape)
| Factor | G2 (+ Capterra/SA/GetApp) | TrustRadius |
|---|---|---|
| **Scale** | 6M+ reviews, combined | 470K+ in-depth reviews |
| **Buyer audience** | SMB through enterprise (full funnel) | Enterprise (deep evaluations) |
| **Review depth** | Varies — G2 medium, Capterra shorter | Long-form, analyst-grade |
| **Free value** | High (Grid, badges, multiple profiles) | Free, subscription add-ons |
| **Intent data** | Yes — 3x more signals post-acquisition | Yes (TrustRadius-only activity) |
| **Best for** | Full-funnel B2B software discovery | Enterprise buyers needing detailed proof |

**Recommendation**: Claim your G2 profile (free) — with the acquisition, G2 now covers most of the buyer journey. Add TrustRadius if selling enterprise where deep-dive reviews matter. The competitive dynamics between G2-owned properties (Capterra, Software Advice, GetApp) may evolve — monitor for vendor portal consolidation.

### Reddit-G2 Integration (launched Oct 2025)
- G2-listed companies can activate Reddit Pro accounts pre-filled with verified profile data
- Upload G2 review screenshots directly into Reddit Ads Manager as ad creative
- Your Reddit profile shows an "Official" badge
- Integration is free — Reddit Pro is free for eligible businesses
- Both platforms are top sources that AI chatbots cite (relevant for AI visibility strategy)
