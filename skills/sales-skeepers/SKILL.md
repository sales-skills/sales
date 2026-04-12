---
name: sales-skeepers
description: "Skeepers platform help — UGC suite covering Verified Reviews, Feedback Management (NPS/CSAT), Influencer Marketing (micro/nano creators), Brand Communities, review syndication, and Shoppable Content. Use when product pages lack reviews, influencer gifting campaigns aren't generating UGC, NPS scores are dropping and you need to dig into why, Brand Community engagement is low, Skeepers widgets aren't displaying on your store, or review syndication isn't working. Do NOT use for general review collection strategy (use /sales-customer-reviews), influencer marketing strategy (use /sales-influencer-marketing), or loyalty program design (use /sales-loyalty)."
argument-hint: "[describe what you need help with in Skeepers]"
license: MIT
version: 1.0.0
tags: [sales, ugc, reviews, influencer-marketing, feedback, platform]
---

# Skeepers Platform Help

Helps the user configure and optimize Skeepers — Europe's #1 UGC platform covering Verified Reviews, Feedback Management, Influencer Marketing, Brand Communities, and Shoppable Content.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which Skeepers module?**
   - A) Verified Reviews (collection, display, moderation, syndication)
   - B) Feedback Management (NPS, CSAT, surveys)
   - C) Influencer Marketing (creator campaigns, gifting)
   - D) Brand Communities (customer advocates)
   - E) Shoppable Content / Gifted Reviews extensions
   - F) API / Integration
   - G) Something else — describe it

2. **What's your ecommerce platform?** Shopify, Magento, VTEX, SAP Commerce, PrestaShop, custom, or other

3. **What's your goal?** Setting up for the first time, optimizing an existing setup, migrating from another tool, troubleshooting, or API integration

## Step 2 — Route or answer directly

If the user's question is about **general strategy** rather than Skeepers-specific config, route them:

| Topic | Hand off |
|---|---|
| Review collection strategy across tools | "This is a review collection strategy question — run: `/sales-customer-reviews {your question}`" |
| Influencer marketing strategy | "This is a influencer marketing question — run: `/sales-influencer-marketing {your question}`" |
| Loyalty programs / brand advocacy | "This is a loyalty program strategy question — run: `/sales-loyalty {your question}`" |
| Email marketing for review requests | "This is an email marketing strategy question — run: `/sales-email-marketing {your question}`" |
| Checkout optimization with reviews | "This is a checkout optimization question — run: `/sales-checkout {your question}`" |

Otherwise, answer directly using the platform reference below.

## Step 3 — Skeepers platform reference

### Verified Reviews

**Review Collection**
- Post-purchase email/SMS review requests with configurable delay (default 7 days)
- In-email review form — customers rate without clicking through
- Photo and video review collection
- AI-assisted review writing — suggests themes to improve review quality
- Multi-language auto-translation for cross-border brands

**Review Display**
- Product page widgets (star ratings, review carousel, Q&A)
- Brand-level review aggregation
- Google Rich Snippets / JSON-LD structured data for search
- Customizable widget themes matching brand identity

**Review Moderation**
- AI moderation processes reviews 6x faster than manual
- AI-assisted reply suggestions for responding to reviews
- Automated categorization and sentiment tagging
- Conversational analysis agent for trend detection

**Review Syndication**
- Push reviews from brand site to retail partners
- Syndication to Google Shopping, Meta, TikTok
- Multi-retailer distribution network

**Gifted Reviews Extension**
- Send products to micro/nano influencers for authentic reviews
- Bridges influencer marketing and review collection
- Reviews from gifted products tagged as "gifted" for transparency

### Feedback Management

**Survey Types**
- NPS (Net Promoter Score) — relationship surveys
- CSAT (Customer Satisfaction) — transactional surveys
- CES (Customer Effort Score) — support interaction surveys
- Custom intelligent surveys with conditional logic

**Deployment**
- Post-purchase, post-support, in-app, email, SMS, website pop-up
- Targeting rules by customer segment, order value, product category
- Scheduled vs. event-triggered surveys

**Analysis**
- AI-powered categorization of open-text responses
- Automated summarization of feedback themes
- Trend tracking over time with dashboards
- Closed-loop workflows — route detractors to support

### Influencer Marketing

**Creator Community**
- 100,000+ pre-vetted micro and nano influencers
- AI-powered creator-brand matching based on audience demographics, engagement, and brand affinity
- Creators opt into campaigns (inbound model, not cold outreach)

**Campaign Workflow**
1. Create campaign brief with product details, creative requirements
2. AI matches and recommends creators from community
3. Creators apply / get selected
4. Product shipped to creators
5. Content created, reviewed, and published
6. Performance tracked (reach, engagement, conversions)

**Content Licensing**
- Automatic content rights acquisition
- Licensed UGC reusable across ads, product pages, social
- Shoppable Content extension — turn influencer content into purchasable galleries

### Brand Communities

- White-labeled community platform for customer advocates
- AI-powered engagement features
- Gamification (badges, points, levels)
- Member segmentation and targeting
- Integrate with review collection — community members become review generators

### Integrations

| Platform | Method | What it does |
|---|---|---|
| Shopify | Native app | Auto-sync orders, display widgets via theme editor |
| Magento | Extension | Order sync, review display widgets |
| VTEX | Native connector | Order/product sync |
| SAP Commerce | Integration | Enterprise connector |
| PrestaShop | Module | Order sync, widgets |
| Google | Feed | Rich Snippets, Google Shopping reviews |
| Meta | API | Review syndication to Facebook/Instagram shops |
| TikTok | API | Content syndication |
| Salesforce | Connector | CRM sync for feedback data |

### API Quick Reference

**Authentication**: OAuth 2.0 Client Credentials

```
POST https://auth.skeepers.io/realms/skeepers/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(clientId:clientSecret)

grant_type=client_credentials&scope=openid&audience=verified-reviews
```

**Base URL**: `https://api.skeepers.io/verified-reviews/v1/published`

| Endpoint | Method | Description |
|---|---|---|
| `/products/reviews` | GET | Fetch product reviews |
| `/products/ratings` | GET | Fetch product ratings |
| `/products` | GET | Fetch product data with ratings |
| `/brands/reviews` | GET | Fetch brand-level reviews |
| `/brands` | GET | Fetch brand data with ratings |

**Key Parameters**: `product_variation_id`, `review_rate` (1-5), `limit` (max 200), `cursor` (pagination), `sort`, `desc`

**Rate Limits**: 5 requests/second, 100 requests/minute

**Pagination**: Cursor-based via HTTP `Link` headers (`rel="next"`, `rel="prev"`)

**Response Format**: JSON (default) or XML

> **Migration notice**: Legacy Product Reviews API deprecated June 2026. Migrate to Published API before then. See `apidocs.skeepers.io/migrations-published.html`.

## Step 4 — Actionable guidance

Based on the user's module and goal, provide:

1. **Step-by-step setup instructions** specific to their ecommerce platform
2. **Configuration recommendations** (review delay timing, survey targeting, creator campaign settings)
3. **Widget customization** guidance for their theme
4. **API integration code** if they're building custom integrations
5. **Migration checklist** if switching from another tool

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public pricing** — all plans require a sales call. Business tier reportedly ~3K EUR/month. No free plan or free trial.
- **Annual contracts** — users report being locked into expensive annual commitments. Negotiate terms before signing.
- **Creator pool skews European** — the influencer community historically has more French/European creators. If targeting US audiences, verify creator availability in your niche before committing.
- **Widget loading performance** — test widget impact on Core Web Vitals. Heavy review carousels can slow page load on mobile.
- **Gifted reviews transparency** — gifted reviews must be clearly labeled. Skeepers tags them, but verify compliance with your market's regulations (FTC in US, ASA in UK).
- **API migration deadline** — legacy Product Reviews API deprecated June 2026. If you're on the old API, migrate to the Published API immediately.
- **Feedback Management pricing separate** — Feedback Management (NPS/CSAT) starts at ~15K EUR/year, separate from Verified Reviews pricing.
- **Review syndication requires retail partner agreements** — syndication pushes your reviews to retailers, but retailers must accept them. This is a business relationship, not just a technical integration.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-reviews` — Review collection strategy across all platforms (Skeepers, Yotpo, Judge.me, Bazaarvoice, Loox, Okendo). Install: `npx skills add sales-skills/sales --skills sales-customer-reviews`
- `/sales-influencer-marketing` — Influencer marketing strategy across platforms. Install: `npx skills add sales-skills/sales --skills sales-influencer-marketing`
- `/sales-loyalty` — Loyalty programs and customer advocacy. Install: `npx skills add sales-skills/sales --skills sales-loyalty`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

**Example 1**: "I'm setting up Skeepers Verified Reviews on my Shopify store — how do I configure the review request emails and display widgets?"
→ Walk through Shopify app installation, order sync verification, review request delay configuration, widget placement via theme editor, and JSON-LD structured data setup for Google Rich Snippets.

**Example 2**: "I want to run a gifted review campaign with micro-influencers on Skeepers — how does the workflow work?"
→ Explain campaign brief creation, AI creator matching, product shipping logistics, content review/approval process, and how gifted reviews appear on product pages with transparency labels.

**Example 3**: "I need to migrate from the legacy Skeepers API to the new Published API — what's changed?"
→ Walk through OAuth 2.0 migration (from custom tokens to client credentials), new endpoint paths, parameter name changes (ref → product_variation_id, rate → review_rate), and cursor-based pagination replacing offset pagination.

## Troubleshooting

**Reviews not appearing on product pages**
- Verify the Shopify app connector is active and order sync is running
- Check that the widget is placed in the correct theme section (some themes require manual placement)
- Confirm the product_variation_id matches between your store and Skeepers
- Check AI moderation queue — reviews may be pending moderation

**Low review response rate**
- Adjust the review request delay — 7-14 days post-delivery is optimal
- Enable in-email review forms so customers don't need to click through
- Add AI-suggested themes to prompt more detailed reviews
- Test SMS review requests alongside email for higher open rates

**API returning 401 Unauthorized**
- Verify client_id and client_secret are correct
- Check that the token hasn't expired (request a new one)
- Ensure the `audience` parameter is set to `verified-reviews`
- Confirm you're using the new OAuth 2.0 endpoint, not the deprecated auth method
