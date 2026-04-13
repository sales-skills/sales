# Trustpilot Platform Reference

## Platform overview

Trustpilot is the world's most-used consumer review platform with 100M+ reviews across 1M+ businesses. It operates as a third-party review site where consumers post reviews on trustpilot.com (not on the business's own website). Businesses embed TrustBox widgets to display their TrustScore and reviews on their own sites. Strongest for service businesses and B2B wanting brand trust signals in Google Ads (Seller Ratings) and search (Rich Snippets). Ecommerce product reviews available as a paid add-on.

## Key modules

### Service reviews
- Company-level star ratings (1-5) posted by consumers on trustpilot.com/review/{domain}
- TrustScore: weighted average factoring recency, frequency, and Bayesian averaging
- Businesses can reply publicly, tag reviews, and report violations
- Reviews are verified via order data matching, email verification, or proof of purchase

### Product reviews
- SKU-level ratings tied to specific products (paid add-on)
- Supports product attributes (size, quality, value, etc.)
- Photo/video reviews
- Conversations (public Q&A threads on product reviews)
- Invitation links for product-specific review requests

### TrustBox widgets
- 22+ widget types across plans (Free: basic, Starter: 2, Plus: 10, Premium: 21, Enterprise: 22)
- Types include: Mini, Micro Review Count, Slider, Grid, Product Reviews SEO, Carousel, List, etc.
- JavaScript-based — requires a bootstrap script in `<head>` and a `<div>` in the page body
- Supports JSON-LD structured data for Google Rich Snippets
- Widgets can be filtered by star rating, language, and tags

### Review invitations
- Automated email invitations via ecommerce plugins or API
- Customizable templates (default + custom), branded sender email
- Timing control: immediate or delayed (recommended 7-14 days post-delivery)
- Service review + product review invitations can be combined
- Invitation links: shareable URLs for manual/social distribution

### Google Seller Ratings
- Star ratings that appear in Google text and Shopping Ads
- Requirements: 100+ reviews in last 12 months, minimum 3.5 TrustScore, country-specific volume thresholds
- Not guaranteed — Google decides whether to display them
- Distinct from Rich Snippets (which appear in organic search)

### Analytics and insights
- Review trends over time, star distribution, response rates
- Enhanced dashboards on Premium+ plans
- Competitor benchmarking (Enterprise)
- Tags for categorizing reviews by topic, product, or team

## Pricing and limits

| Feature | Free | Starter ($99/mo) | Plus ($319/mo) | Premium ($799/mo) | Enterprise |
|---|---|---|---|---|---|
| Invitations/month | 50 | 100 | 300 | 1,000 | Unlimited |
| Widgets | Basic | 2 | 10 | 21 | 22 |
| Users | 1 | 1 | 3 | 10 | 1,000 |
| Domains | 1 | 1 | Up to 3 | Unlimited | Unlimited |
| Integrations | — | 15 | 25 | 25 | 25 |
| Profile customization | — | — | Yes | Yes | Yes |
| Enhanced dashboards | — | — | — | Yes | Yes |
| Marketing assets | — | Yes | Yes | Yes | Yes |

**Add-ons** (separate purchase): API access, Product reviews & insights, Location reviews & insights, Salesforce integration

**Contract terms**: All paid plans are 12-month annual commitment, billed upfront. Quarterly payment available on request.

**Per-domain pricing**: Each website/domain needs its own plan. Multi-brand businesses pay separately for each domain.

## Integrations

### Native ecommerce plugins
- **Shopify**: Official Trustpilot app + Trustpilot Widgets Connector (note: official app has 1.9-star rating on Shopify App Store — third-party alternatives like Wally and Trust.io are popular)
- **WooCommerce**: Official plugin (trustpilot/plugin-woocommerce on GitHub)
- **Magento 2**: Official plugin (trustpilot/plugin-magento2 on GitHub)
- **PrestaShop**: Official plugin (trustpilot/plugin-prestashop)
- **OpenCart**: Official plugin (trustpilot/plugin-opencart)
- **Shopware**: Official plugin (trustpilot/plugin-shopware)

### Third-party integrations
- **Zapier**: Triggers (new review) → actions in CRMs, Slack, email
- **Google**: Seller Ratings in Ads, Rich Snippets in organic search
- **Salesforce**: Paid add-on integration
- Up to 25 integrations depending on plan

### API
Base URL: `https://api.trustpilot.com/v1/`
Invitation API: `https://invitations-api.trustpilot.com/v1/`

Auth:
- Public endpoints: `apikey:{Client ID}` header
- Private endpoints: OAuth 2.0 Bearer token
- Access tokens expire after 100 hours, refresh tokens after 30 days

## Data model (API)

### Key objects
- **Business Unit**: Identified by `businessUnitId`, has TrustScore, review count, categories, profile info
- **Service Review**: `reviewId`, stars (1-5), title, text, consumer info, language, verification status, timestamps, tags, company reply
- **Product Review**: `reviewId`, stars, text, SKU, attributes, conversation thread
- **Consumer**: `consumerId`, display name, review history
- **Invitation**: Business unit → consumer email, template, timing, service/product review config

### Common patterns
- Find business unit: `GET /v1/business-units/search?query={domain}`
- Get reviews: `GET /v1/business-units/{id}/reviews?stars=5&orderBy=createdat.desc`
- Send invitation: `POST invitations-api.trustpilot.com/v1/private/business-units/{id}/email-invitations`
- Reply to review: `POST /v1/private/reviews/{reviewId}/reply`
- Tag reviews: `PUT /v1/private/reviews/{reviewId}/tags`

## Workflow setup

### Setting up automated review collection (Shopify)
1. Install the Trustpilot app from the Shopify App Store (or Trustpilot Widgets Connector for widgets only)
2. Connect your Trustpilot Business account
3. Configure automatic invitation trigger: after order fulfillment
4. Set delay: 7-14 days after delivery (depends on product type)
5. Choose template and customize branding
6. Enable product review invitations if you have the add-on
7. Add TrustBox widgets to product pages and homepage via theme editor

### Setting up automated review collection (API)
1. Register for API access (paid add-on) at developers.trustpilot.com
2. Get API key (Client ID) and Secret from Trustpilot Business dashboard
3. Obtain OAuth access token: `POST /v1/oauth/oauth-business-users-for-applications/accesstoken`
4. Find your business unit ID: `GET /v1/business-units/search?query={yourdomain.com}`
5. Send invitations: `POST invitations-api.trustpilot.com/v1/private/business-units/{id}/email-invitations` with consumerEmail, senderEmail, and serviceReviewInvitation object
6. Set `preferredSendTime` to delay the invitation (ISO 8601 format)
7. Monitor: `GET /v1/private/business-units/{id}/reviews` for new reviews

### Embedding TrustBox widgets
1. Go to Trustpilot Business → Integrations → TrustBox Library
2. Choose a widget type and customize appearance
3. Copy the bootstrap script → paste in your site's `<head>` (once per page)
4. Copy the TrustBox div → paste where you want the widget to appear
5. Test: clear cache, hard refresh, verify the widget loads
6. For Shopify: use the Trustpilot Widgets Connector app for drag-and-drop placement

### Setting up Google Seller Ratings
1. Collect 100+ service reviews in the last 12 months
2. Maintain a TrustScore of 3.5 or higher
3. Ensure reviews are in the same country as your Google Ads target
4. Google automatically detects Trustpilot as a licensed review partner — no manual setup needed
5. It can take 2-4 weeks for Google to start showing Seller Ratings after you qualify
6. Verify in Google Ads → Extensions → Automated extensions → Seller ratings

## Deep dives

### TrustScore algorithm
TrustScore is NOT a simple average. It uses:
- **Recency weighting**: Recent reviews count more than old ones
- **Bayesian averaging**: Small sample sizes are pulled toward the platform average (prevents 5.0 from 2 reviews)
- **Volume factor**: More reviews → more stable, less susceptible to individual outliers
- TrustScore updates within minutes of a new review being published

### Review verification levels
- **Verified**: Matched to order data via invitation or verified purchase
- **Organic**: Consumer found the business on Trustpilot and left a review independently
- **Reported**: Flagged by the business, under investigation
- **Removed**: Violated Trustpilot guidelines (spam, fake, personal info, etc.)

### Dealing with fake or unfair reviews
1. **Report the review**: Business dashboard → Reviews → select review → Report
2. **Provide evidence**: Order records, communication logs, proof the reviewer isn't a customer
3. **Use "Find Reviewer"**: API endpoint `POST /v1/private/reviews/{reviewId}/find-reviewer` sends a message to the reviewer asking them to verify their identity
4. **Escalate**: If standard reporting doesn't work, escalate via Trustpilot's trust and safety team
5. **Public response**: Always reply professionally regardless of outcome — other customers read your responses

### Python SDK
Trustpilot maintains an official Python HTTP client: `trustpilot/python-trustpilot` on GitHub (17 stars).
```bash
pip install trustpilot
```
Supports authenticated API calls with automatic token refresh.
