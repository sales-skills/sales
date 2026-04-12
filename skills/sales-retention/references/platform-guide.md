# Retention.com Platform Guide

## How Retention.com works

Retention.com identifies anonymous website visitors using a tracking pixel and third-party licensed data, converting them to known contacts (email, SMS) for remarketing. Founded by Adam Robinson (also CEO of RB2B) as GetEmails, rebranded to Retention.com. Bootstrapped to $22M+ ARR serving 1,500+ ecommerce brands.

**Key differentiator from RB2B**: Retention.com is B2C/ecommerce focused (Shopify, DTC brands, publishers). RB2B is B2B focused (person-level visitor ID for sales teams). Same founder, different products.

## Products

| Product | What it does | Key metric |
|---|---|---|
| Grow | Identifies anonymous visitors → adds to email/SMS lists | Claims 10x list growth |
| Reclaim | Captures abandonment events missed by Klaviyo, Elevar, other ESPs | +250% abandonment flow revenue (claimed) |

**How identity resolution works:**
1. Install tracking pixel on your site (JavaScript snippet)
2. Retention.com matches visitors against third-party licensed data
3. Matched visitors are identified with email and/or phone
4. Identified contacts are pushed to your ESP (Klaviyo, etc.) or SMS tool (Postscript, etc.)
5. You send abandonment recovery emails/SMS or add them to marketing flows

## Pricing

| Tier | Price | Traffic range | Includes |
|---|---|---|---|
| Starter | ~$500/mo | Lower traffic sites | Grow + Reclaim |
| Mid-market | ~$1,000-$1,500/mo | Medium traffic | Grow + Reclaim + advanced features |
| Enterprise | ~$2,500/mo+ | High traffic | Custom pricing, dedicated support |
| A la carte | From $300/mo | Any | Grow OR Reclaim separately |

*Annual contracts required. No free trial. Prices based on monthly unique visitors. Custom pricing for 300K+ monthly visitors.*

## Integrations

100+ integrations including:
- **Ecommerce**: Shopify (primary), WooCommerce, BigCommerce, custom sites
- **Email**: Klaviyo (primary), Mailchimp, ActiveCampaign, Omnisend, Brevo
- **SMS**: Postscript, Attentive, Klaviyo SMS
- **CDP/Data**: Segment, Snowflake
- **Ads**: Meta, Google Ads (retargeting audiences)

## Match rates and data quality

*Set realistic expectations — these are contentious numbers:*

- **Claimed match rate**: ~35% of anonymous visitors identified
- **Independent reports**: 16-25% is more typical
- **Data source**: Third-party licensed databases (not first-party opt-in)
- **Engagement quality**: Identified contacts engage at lower rates than organic subscribers (~3% CTR vs ~12% CTR for opted-in)
- **US-only**: Identity resolution database is US-focused

## Compliance

Retention.com operates on an **implicit consent model** — visitors are identified without explicit opt-in on your site. This is legally distinct from GDPR explicit consent.

- **CCPA compliant**: Provides opt-out mechanisms and privacy portal
- **CAN-SPAM compliant**: Identified contacts can be emailed under CAN-SPAM (US)
- **Not GDPR compliant**: Do NOT use for EU/UK visitors — requires explicit consent
- **Suppression management**: Upload suppression lists via dashboard or API
- **Database opt-out**: Global suppression available at retention.com/compliance

## API quick reference

| Detail | Value |
|---|---|
| Auth | API Key + API ID (header, body, or query param) |
| Rate limit | 5 requests/day, ~40K emails per request |
| Primary use | Suppression file uploads, opt-out file management |
| Webhooks | Available for real-time data delivery |
| Dashboard | Use for initial suppression uploads, list management |

*The API is intentionally limited — use the dashboard or native integrations for most operations.*

## Comparison with alternatives

| Feature | Retention.com | RB2B | Customers.ai | Opensend |
|---|---|---|---|---|
| Focus | B2C ecommerce | B2B sales | B2C + B2B | B2C ecommerce |
| Identification | Email + phone | Person + company | Email + phone + name | Email + postal |
| Match rate (claimed) | ~35% | Varies | Higher accuracy claimed | Varies |
| Pricing | From $500/mo | Free tier + paid | Custom | Custom |
| Contract | Annual required | Monthly available | Varies | Varies |
| US-only | Yes | Yes (person-level) | Yes | Yes |
| Founder | Adam Robinson | Adam Robinson | Larry Kim | — |
