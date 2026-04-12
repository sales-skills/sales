# Upfluence Platform Reference

## Platform overview

Upfluence is an all-in-one influencer and affiliate marketing platform founded in 2013, serving 1,600+ clients including Amazon, Marriott, Asics, and Universal Music. Headquartered in Lyon, France with offices in New York, Los Angeles, and Mexico. The platform is enhanced with Jaice AI for workflow automation. Primary audience is ecommerce and DTC brands that need creator discovery, campaign management, affiliate tracking, and payment processing in a single tool.

Key differentiator: **Live Capture** — identifies influential people among a brand's existing customers and website visitors by matching ecommerce data against social profiles. This turns customer databases into influencer pipelines without cold outreach.

## Key modules

### Discovery
- **Search**: 12M+ verified creator profiles across Instagram, YouTube, TikTok, Twitch, Twitter, Pinterest, and blogs
- **20+ advanced filters**: keywords, location, social platform, follower count, engagement rate, audience demographics
- **Weighted keyword search**: Assigns importance to specific terms for more precise results (Instagram only for advanced weighting)
- **Real-time algorithm indexing**: Content analysis updates in near real-time
- **Live Capture**: Identifies influential customers by scanning ecommerce customer databases and website visitor data against social profiles
- **Database integrations**: Connects to Shopify, WooCommerce, Magento, Klaviyo to find influencers already in the brand's customer base
- **Reveal feature**: Discovers influential people within existing customer lists, email subscribers, and website visitors
- **Ambassador signup pages**: Whitelabel signup pages brands can add to their website for creators to self-register

### Influencer Relationship Management (IRM)
- Centralized dashboard for all creator relationships
- Influencer ranking and tagging system
- Lifecycle tracking: negotiation → content creation → payment status
- Bulk personalized outreach messaging via email templates
- Draft review and approval workflows
- Gmail and Outlook integration for email sync
- Communication history per creator

### Campaign Management
- Campaign workflow tools with briefs and deliverables
- Content tracking and monitoring across platforms
- Hashtag monitoring and brand mention tracking
- Social listening with customizable streams
- Competitor tracking
- Campaign performance analytics (reach, engagement, ROI)
- Influencer response score metrics

### Affiliate & Promo Code Tools
- **Commission-free affiliate program management** — no per-sale fees on top of subscription
- Custom discount code generation per influencer
- Tracked affiliate link generator
- Product seeding with one-click ordering (via ecommerce integrations)
- Sales attribution and performance tracking per creator
- Revenue, conversion, and ROAS reporting per promo code

### Upfluence Pay (Payments)
- Automated invoice requests
- Bank detail collection from creators
- International payment processing via Stripe, PayPal, or bank transfer
- Multi-currency support
- Budget management and pricing offer tools
- Payment in 180+ countries

### Analytics & Reporting
- Campaign performance dashboards (reach, engagement, conversions, ROI)
- Per-creator performance metrics
- Social listening streams for brand monitoring
- Hashtag and competitor tracking
- Audience demographics (Instagram: age, gender, location with creator authorization; other platforms: basic demographics only)
- Influencer response score

### Jaice AI
- AI-powered workflow automation
- Campaign optimization suggestions
- Creator matching recommendations
- Content performance predictions
- Workflow streamlining across modules

## Pricing and limits

*Best-effort from research — verify during sales conversations as pricing changes frequently.*

- **Starting price**: ~$478/month
- **Contract**: 12-month minimum commitment (no monthly option)
- **Pricing model**: Subscription-based SaaS with modular service offerings — different modules may have separate fees
- **Plan tiers**: Custom/modular — no publicly listed tier names or feature breakdowns
- **API access**: Available on Growth and Enterprise plans only
- **Free options**: Chrome extension (free), free resources/guides

### Plan-gated features (based on research)
- API access: Growth/Enterprise only
- Advanced analytics: Higher tiers
- Live Capture: Requires ecommerce integration (Shopify, WooCommerce, etc.)
- Upfluence Pay: Available across plans (verify during demo)

### Known limits
- Annual commitment makes it high-risk for smaller brands testing influencer marketing
- No public pricing page with tier comparison — must talk to sales
- Usage limits per plan not publicly disclosed — ask during sales conversations

## Integrations

### Ecommerce platforms
- **Shopify** — product seeding, customer data sync, order tracking, promo code sync
- **WooCommerce** — customer data, product gifting, order attribution
- **BigCommerce** — customer data sync, order tracking
- **Adobe Commerce (Magento)** — customer database integration

### Email & CRM
- **Gmail** — email sync for creator communications
- **Outlook** — email sync for creator communications
- **Klaviyo** — email list sync for Live Capture matching, flow triggers

### Automation & third-party
- **Zapier** — connect Upfluence to 5000+ apps, trigger workflows
- **Refersion** — affiliate tracking integration
- **Google Tag Manager** — website tracking for Live Capture

### Payments
- **Stripe** — creator payments via Upfluence Pay
- **PayPal** — alternative payment method
- **Bank transfer** — direct bank payments internationally

## Data model (API)

*Note: Upfluence does not publish detailed API documentation publicly. The following is based on marketing materials and integration descriptions.*

- **API style**: REST
- **Authentication**: OAuth2
- **Response format**: JSON
- **Availability**: Growth and Enterprise plans
- **Key capabilities**:
  - Influencer search and profile data retrieval
  - Campaign metrics and performance data
  - Audience demographics and engagement statistics
  - Content tracking data
- **Interactive examples**: Documentation includes interactive examples for real-time testing (available after API access is granted)
- **Rate limits**: Not publicly documented

## Workflow setup

### Workflow 1: Find influencers among existing customers (Live Capture)
1. Connect ecommerce platform (Shopify/WooCommerce) to Upfluence
2. Upfluence scans customer email addresses against social profiles
3. Review matched profiles — filter by follower count, engagement rate, audience quality
4. Tag and organize matches in IRM
5. Send personalized outreach to top matches
6. Set up product seeding for interested creators

### Workflow 2: Run an influencer affiliate campaign
1. Discover and vet creators (search or Live Capture)
2. Onboard accepted creators to IRM
3. Generate unique promo codes per creator
4. Create tracked affiliate links
5. Set up product seeding with one-click ordering
6. Monitor content creation and track performance
7. Review campaign dashboard — revenue, ROAS, conversions per creator
8. Process payments via Upfluence Pay

### Workflow 3: Ambassador program setup
1. Create whitelabel ambassador signup page
2. Add signup page to brand website
3. Creators self-register with social profile links
4. Upfluence enriches profiles with audience data
5. Review and approve ambassadors in IRM
6. Assign promo codes and product gifting
7. Track ambassador performance over time

## Deep dives

### Shopify integration details
- Syncs customer data for Live Capture matching
- Enables one-click product seeding (select products, variants, shipping)
- Tracks order data for affiliate attribution (promo codes → sales)
- Auto-syncs discount codes between Upfluence and Shopify
- Supports Shopify Plus features

### Creator vetting in Upfluence
| Check | What to look for | Red flag |
|---|---|---|
| Audience authenticity | Low fake follower percentage | Over 25% suspicious accounts |
| Engagement rate | 1-3% for 100K+, 3-6% for under 100K | Under 1% or suspiciously over 10% |
| Audience location | Matches target market | Concentrated in unexpected countries |
| Audience demographics | Age/gender match customer profile | Misaligned with product |
| Content quality | Consistent, on-brand posting | Erratic posting, off-topic |
| Response score | High response score in IRM | Low or no response history |

### Commission-free affiliate model
Upfluence's affiliate tool differs from traditional networks (Impact, ShareASale, Refersion) in that there are no per-sale commission fees charged by the platform. Brands pay the subscription fee and get unlimited affiliate tracking. This is advantageous for brands running large-volume programs where per-sale percentages would add up. The trade-off is the annual commitment and base subscription cost.

### Upfluence vs competitors quick comparison
| Feature | Upfluence | Modash | Aspire | CreatorIQ |
|---|---|---|---|---|
| Database size | 12M+ verified | 350M+ (all public) | 170M+ | ~20M (Creator Graph) |
| Live Capture (find customers) | Yes | No | No | No |
| Commission-free affiliate | Yes | Yes | Partial | Enterprise only |
| Shopify integration | Yes | Yes | Yes | Limited |
| Annual commitment | Required (12 mo) | No (monthly available) | Annual typical | Annual (enterprise) |
| Starting price | ~$478/mo | $199/mo | Custom | Enterprise |
| API access | Growth/Enterprise | Separate pricing | Enterprise | Enterprise |
| Jaice AI | Yes | No | No | No |
