# GRIN Platform Reference

## Platform overview

GRIN is a creator management platform for mid-to-enterprise DTC and ecommerce brands. Founded in 2014 by Brandon Brown and Brian Mechem in Sacramento, CA. Current CEO: Ryan Debenham (appointed Jan 2025). Used by 2,000+ brands including SKIMS, Fenty Beauty, Uber, and MVMT. Positions itself as the pioneer of "Creator Management" — a full lifecycle platform from discovery through payments and analytics.

Two product offerings:
1. **GRIN Platform** — traditional SaaS interface with hands-on control for established teams
2. **Gia** — AI-powered agent that automates outreach, creator matching, and follow-ups

## Key modules

### Creator Discovery
- 190M+ creator database across Instagram, TikTok, YouTube
- AI-powered search with demographic, engagement, and audience filters
- Lookalike search from existing top creators
- Gia AI agent for automated matching (recommends creators based on brief)
- Daily search limits: 10 (Free Trial) → 25 (Lite) → 50 (Essentials) → 100 (Growth) → 150 (Complete)

### Creator CRM
- Relationship stages, tags, notes, communication history
- Custom fields and filters for segmentation
- CRM capacity: 150 (Free Trial) → 500 (Lite) → 1,000 (Essentials) → 2,000 (Growth) → 4,000 (Complete)
- Import existing creator lists

### Email Outreach
- Gmail and Outlook integration (sends from your domain)
- Email templates (50–150 depending on plan)
- Automated follow-up sequences (first email → follow-up 1 → follow-up 2)
- All emails appear as personal one-to-one messages
- Personalization tokens for creator name, platform, etc.
- Campaign activations: 2 (Free Trial) → 4 (Lite) → 6 (Essentials) → 8 (Growth) → 12 (Complete)

### Product Gifting & Seeding
- Native Shopify integration for order creation and fulfillment
- Product catalog sync — browse inventory, curate gift lists
- Inventory monitoring and shipment tracking
- Branded briefs for creators (Lite+)
- Can recruit influencers from existing Shopify customers (pulls registered users and finds their social profiles)

### Affiliate Hub
- Bulk affiliate link creation
- Discount code generation and tracking
- Automated commission payouts
- Shoppable storefronts for creators
- Conversion tracking (clicks, sales, revenue per creator)
- Deep links (Growth+)
- Advanced affiliate attribution (Growth+)

### Social Listening
- Hashtag monitoring across social platforms
- Creator conversation tracking
- Brand mention alerts
- Hashtag slots: 1 (Free Trial) → 3 (Lite) → 10 (Essentials) → 20 (Growth) → 30 (Complete)

### Content Management
- Content library for creator-generated content
- Content approvals workflow (Growth+)
- Auto-tagging and filtering
- Download and reuse for ads/social

### Campaign Analytics
- Real-time sales counters alongside spend
- Influencer Media Value (IMV) calculation
- EMV, ROAS, CPM, engagement metrics
- Report builder (Growth+)
- Advanced reporting (Complete)

### Creator Payments
- Automated payments via PayPal (Essentials+)
- 1099 processing for US creators (Essentials+)
- Payment tracking and history

## Pricing and limits

| Feature | Free Trial | Lite $399/mo | Essentials $699/mo | Growth $1,149/mo | Complete $1,799/mo |
|---|---|---|---|---|---|
| Active creators | 15 | 50 | 100 | 200 | 400 |
| CRM capacity | 150 | 500 | 1,000 | 2,000 | 4,000 |
| Daily searches | 10 | 25 | 50 | 100 | 150 |
| Social listening hashtags | 1 | 3 | 10 | 20 | 30 |
| User logins | 4 | 4 | 6 | 8 | 12 |
| Campaign activations | 2 | 4 | 6 | 8 | 12 |
| Email templates | 50 | 50 | 75 | 100 | 150 |
| Integrated email | — | ✓ | ✓ | ✓ | ✓ |
| Branded briefs | — | ✓ | ✓ | ✓ | ✓ |
| Gifting management | — | ✓ | ✓ | ✓ | ✓ |
| Basic reporting | — | ✓ | ✓ | ✓ | ✓ |
| Affiliate management | — | ✓ | ✓ | ✓ | ✓ |
| Content library | — | — | ✓ | ✓ | ✓ |
| Automated payments | — | — | ✓ | ✓ | ✓ |
| 1099 processing | — | — | ✓ | ✓ | ✓ |
| Integrations (Slack, Drive) | — | — | ✓ | ✓ | ✓ |
| Report builder | — | — | — | ✓ | ✓ |
| Deep links | — | — | — | ✓ | ✓ |
| Advanced attribution | — | — | — | ✓ | ✓ |
| Content approvals | — | — | — | ✓ | ✓ |
| API access | — | — | — | — | ✓ |
| Team roles/permissions | — | — | — | — | ✓ |
| Advanced reporting | — | — | — | — | ✓ |

All plans are month-to-month with no long-term contracts. Free Trial is 30 days. Self-serve onboarding on all plans. GRIN University course access included.

Note: Historical reviews mention $2,500/mo starting price with 12-month contracts. GRIN appears to have restructured pricing to the current tiered model. Verify current terms at grin.co/pricing.

## Integrations

### Ecommerce
- **Shopify** — deepest integration: order creation, fulfillment, product sync, inventory monitoring, discount codes, affiliate links, customer-to-creator matching
- **WooCommerce** — mentioned in marketing materials but less documented than Shopify
- **Magento** — open-source extension available (github.com/grininc/grin-magento-module)

### Email
- **Gmail** — two-way sync for creator outreach, sends from your account
- **Outlook** — same as Gmail integration

### Marketing automation
- **Klaviyo** — custom email templates for creator communications

### Productivity
- **Slack** — notifications and updates to channels
- **DocuSign** — influencer contract signing
- **Box / Dropbox / Google Drive** — cloud storage for content and files

### Payments
- **PayPal** — creator payment processing

### Social
- **Instagram** — content capture and social listening
- **CreatorCommerce** — co-branded landing pages with creators

### API
- **GRIN Bi-Directional API** (Complete plan only)
  - v1 (outbound): export creator lists, track orders
  - v2 (inbound): push creator info (addresses, preferences, stages, payments), receive conversion data
  - Token-based authentication via Account > App Marketplace
  - Use cases: custom reporting, CRM sync, conversion tracking for affiliate links and discount codes
  - GRIN recommends an experienced developer for API integration — no dedicated API support

## Data model (API)

Key objects (based on marketing materials — detailed API docs require account access):
- **Creators** — profiles, social handles, relationship stage, tags, custom fields, addresses, product preferences
- **Campaigns** — activations, briefs, content, tracking
- **Orders** — Shopify-synced gifting orders, fulfillment status
- **Affiliate Links** — tracking URLs, discount codes, conversion data
- **Payments** — payment records, amounts, status, 1099 data
- **Content** — posts, stories, platform, engagement metrics, approval status

## Workflow: Setting up a gifting campaign

1. **Connect Shopify** — Account > Integrations > Shopify, authorize
2. **Sync product catalog** — GRIN pulls available products with inventory
3. **Build creator list** — Use discovery or import existing contacts
4. **Create gifting campaign** — Select products, set brief, define expectations
5. **Send outreach** — Email creators with personalized gifting offer
6. **Fulfill orders** — GRIN creates Shopify orders, ships via your fulfillment
7. **Track content** — Monitor tagged posts, stories, mentions
8. **Measure results** — Review EMV, engagement, sales attribution

## Workflow: Setting up the Affiliate Hub

1. **Enable Affiliate Hub** — Available on Lite+ plans
2. **Connect Shopify** — Required for discount code and link tracking
3. **Generate links** — Bulk create unique affiliate URLs per creator
4. **Create discount codes** — Set percentage or fixed amount per creator
5. **Set commission rates** — Define payout per sale or percentage
6. **Launch** — Creators share links/codes with their audience
7. **Track conversions** — Real-time dashboard shows clicks, sales, revenue per creator
8. **Automate payouts** — Essentials+ enables automated payment processing

## Deep dives

### Customer-to-creator recruitment
GRIN can pull registered users from your Shopify store, find their social profiles, and present a list of potential influencers who have already purchased your products. This is unique to GRIN and valuable for identifying authentic brand advocates.

### Gia AI Agent
Gia is GRIN's AI-powered assistant that can:
- Automate creator outreach and follow-ups
- Match creators to campaign briefs
- Suggest optimal creator selections based on past performance
- Reduce manual workflow for discovery and communication

### CreatorCommerce
Integration with CreatorCommerce enables brands to create personalized, co-branded landing pages with each creator. Creators get their own branded storefront page, improving conversion rates and attribution.

### Partner programs
- **Referral Partner**: 10% of annual license for referred brands, no cost or requirements
- **Technology Partner**: Co-marketing (webinars, podcasts, newsletters)
- **Portfolio Brands**: Discounted rate for portfolio companies
- **Creator Referral**: Creators earn money for referring brands that sign contracts
