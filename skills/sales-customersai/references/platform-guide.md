# Customers.ai Platform Reference

## Platform overview

Customers.ai (CustomersAI) is a B2C visitor identification and remarketing platform built exclusively for Shopify brands using Klaviyo. It identifies anonymous website visitors via the X-Ray pixel (claiming 60-70% identification rate vs Klaviyo's native 15-20%), scores visitor intent with the Alfred AI agent, and includes the Inboxer deliverability suite to protect sender reputation. The platform also recovers shrinking ad retargeting audiences via first-party data for Meta, Google, and TikTok Ads.

**Target audience**: Established Shopify brands ($500K-$2M+ GMV) with meaningful traffic volume, already running Klaviyo with core flows in place. Not suitable for pre-revenue stores, low-traffic sites, or non-Klaviyo ESP users.

## Key modules

### X-Ray Pixel (Identity Resolution)

The core product. A JavaScript pixel installed on your Shopify store that identifies anonymous visitors and matches them to known consumer profiles.

- **How it works**: First-party+ data solution that extends beyond traditional cookie-based tracking. Connects customer actions across devices and browsers. When a visitor hits your site, X-Ray attempts to match them against Customers.ai's consumer database using multiple signals (IP, device fingerprinting, email hash matching, third-party data partnerships).
- **Match rate**: Claims 60-70% of site visitors identified (vs Klaviyo's 15-20%). Data accuracy between 65-85% (vs industry average of 5-30%).
- **What it captures**: Name, email, LinkedIn profile, customer journey data, cross-device browsing behavior, purchase intent signals.
- **Installation**: 10-minute setup via Shopify theme editor or Google Tag Manager. JavaScript snippet in `<head>` tag.
- **Output**: Identified visitors are synced directly to Klaviyo as profiles with full behavioral data.

### Alfred AI Agent

An AI agent that performs daily intent scoring on identified visitors.

- **Daily retraining**: Alfred analyzes all identified visitors daily and segments them into high, medium, and low purchase intent buckets.
- **Auto-suppression**: Automatically suppresses low-intent profiles in Klaviyo, reducing active contact count and ESP costs.
- **Compounding effect**: Effectiveness improves over time as Alfred trains on your specific customer behavior patterns.
- **Use case**: Reduce Klaviyo bill by only keeping high-intent identified visitors as active profiles.

### Inboxer Deliverability Suite

Four-component deliverability system included with all plans:

1. **Deliverability Booster Script**: JavaScript that optimizes email rendering and engagement signals.
2. **List Validation**: Cleans identified contacts to remove invalid/risky addresses before they enter Klaviyo flows.
3. **Inbox Warming**: Warms new domains/IPs for brands setting up dedicated sending infrastructure.
4. **Monitoring**: Tracks inbox placement rates and flags deliverability issues.

**Key claim**: Shifts emails from Promotions/Spam folders to Primary inbox. However, this is positioned as an optimization tool — it cannot fix severely damaged sender reputation.

### Ad Retargeting Audience Recovery

Recovers shrinking ad audiences caused by cookie deprecation and iOS privacy changes.

- **Supported platforms**: Meta Ads, Google Ads, TikTok Ads.
- **How it works**: Uses first-party identified visitor data to build ad audiences directly, bypassing third-party cookie limitations.
- **Benefit**: Brands that saw retargeting audiences shrink 40-60% after iOS 14.5+ can recover much of that reach.
- **Included**: On all plans alongside the free trial.

### Consumer Data Enrichment API

Separate API product for enriching contacts programmatically.

- **Data available**: Business and employment information, updated monthly. Can query by name, email, or phone.
- **Use case**: Enrich existing contacts or identified visitors with additional firmographic/demographic data.
- **Security**: Data encrypted before transmission.
- **Documentation**: Sparse — see `references/customersai-api-reference.md`.

## Pricing and limits

| Plan | Monthly cost | Resolutions included | Overage per resolution |
|---|---|---|---|
| **Starter** | $600/mo | 3,000 | $0.20 |
| **Grow** | $900/mo | 5,000 | $0.18 |
| **Scale** | $1,500/mo | 10,000 | $0.15 |
| **Enterprise** | Custom | Unlimited | Custom |

- **Free trial**: 7 days, 500 resolutions, no credit card required. Includes X-Ray pixel, ad retargeting audience recovery, and ESP integration.
- **ROI guarantee**: 5x attributable return or payment waived (attribution methodology defined by Customers.ai).
- **All plans include**: X-Ray pixel, Alfred AI, Inboxer suite, ad retargeting recovery, Klaviyo integration.
- **Overage behavior**: Once plan resolutions are used, additional identifications are charged at the overage rate. Monitor usage in dashboard.

**Economics check**: At $600/mo Starter, you need the identified contacts to generate >$600/mo in incremental revenue to break even. With 3,000 resolutions and a typical ecommerce email revenue-per-contact, you generally need $500K+ GMV and 50K+ monthly visitors for positive ROI.

## Integrations

| Integration | Type | Notes |
|---|---|---|
| **Klaviyo** | Native (primary) | Direct profile sync, behavioral data, flow triggers. Only supported ESP. |
| **Shopify** | Native | Required. Pixel installs via theme editor or GTM. |
| **Meta Ads** | Native | Ad retargeting audience recovery, first-party data push. |
| **Google Ads** | Native | Ad retargeting audience recovery. |
| **TikTok Ads** | Native | Ad retargeting audience recovery. |

**Not supported**: Omnisend, Mailchimp, ActiveCampaign, Drip, or any non-Klaviyo ESP. Not supported on WooCommerce, BigCommerce, or custom ecommerce platforms.

## Data model (API)

Legacy MobileMonkey API at `api.mobilemonkey.com`. Limited public endpoints:

- **Contact**: Identified visitor record with attributes (name, email, phone, city, custom fields). Referenced by numeric `contact_id`.
- **Update Contact**: `PATCH/PUT https://api.mobilemonkey.com/public/contacts/{contact_id}/` — update up to 10 attributes per request. Attributes must already exist.
- **Send JSON Message**: `POST https://api.mobilemonkey.com/public/contacts/{contact_id}/send_json_message` — send text, images, quick replies, galleries.
- **Lookup Users**: Endpoint to find contacts by criteria (used to get `contact_id` for other operations).
- **Swagger docs**: `https://api.mobilemonkey.com/swagger/dist/index.html`

The Consumer Data Enrichment API is a separate product with its own endpoints — details sparse, request access via customers.ai/api.

## Workflow setup

### First-time setup (10 minutes)

1. **Install X-Ray pixel**: Shopify Admin → Online Store → Themes → Edit Code → paste pixel in `theme.liquid` `<head>` tag. Or use Google Tag Manager.
2. **Connect Klaviyo**: In Customers.ai dashboard, connect your Klaviyo account via API key.
3. **Configure Alfred**: Set intent scoring thresholds (start permissive, tighten over time).
4. **Enable Inboxer**: Activate the deliverability booster script, list validation, and monitoring.
5. **Verify**: Visit your own store and check the Customers.ai dashboard for the visit.
6. **Monitor**: Watch deliverability metrics daily for the first 2 weeks.

### Migration from Retention.com or another visitor ID tool

1. **Export suppression list** from old tool (unsubscribes, bounces, complaints).
2. **Upload suppression list** to Customers.ai to prevent re-identifying known bad contacts.
3. **Install X-Ray pixel** (step 1 above).
4. **Request Data Detox** if your Klaviyo lists contain bad data from the previous tool — Customers.ai cleans up inaccurate profiles.
5. **Monitor deliverability** closely for 30 days. Identified contacts from the old tool may still be in Klaviyo flows.

### Optimizing Alfred thresholds

1. **Start permissive**: Let most identified visitors through for the first 2-4 weeks to gather baseline data.
2. **Review engagement**: After 2 weeks, check which intent buckets (high/medium/low) are actually engaging with emails.
3. **Tighten gradually**: Suppress the lowest-engaging bucket first (usually low-intent). Monitor Klaviyo costs and deliverability.
4. **Target ratio**: Aim to suppress 30-50% of identified visitors (the bottom of the intent distribution) while keeping the top 50-70% active.

## Deep dives

### Customers.ai vs competitors

| Factor | Customers.ai | Retention.com | RB2B | Opensend |
|---|---|---|---|---|
| **Focus** | B2C ecommerce (Shopify + Klaviyo) | B2C ecommerce (any ESP) | B2B sales | B2C multi-channel |
| **Accuracy** | 65-85% claimed | 15-25% independent reports | 35-45% (US, Pro+) | Varies |
| **Intent scoring** | Yes (Alfred, daily) | Limited | No | Limited |
| **Deliverability suite** | Yes (Inboxer, 4 tools) | No | N/A | No |
| **ESP support** | Klaviyo only | Multiple | N/A (CRM) | Multiple |
| **Ecommerce platform** | Shopify only | Multiple | Any website | Multiple |
| **Ad retargeting** | Meta, Google, TikTok | Via Klaviyo only | No | Meta, Google |
| **Starting price** | $600/mo | $500/mo bundled | $79/mo | Varies |
| **Contract** | Monthly | Annual required | Monthly | Varies |
| **Geographic** | US focus | US only | US (person), global (company) | US focus |

### Case studies (from Customers.ai marketing)

- **Haverhill** (DTC jewelry): Generated nearly half the previous tool's revenue in one month after switching + completing data cleanup.
- **DFND**: 4.5x more revenue and 11x higher engagement/click rates.
- **Prana Pets**: 60-70% of website traffic identified.
- **Jordan Craig**: 4.6x higher revenue per recipient vs other identity solutions.

*Note: These are vendor-reported case studies. Actual results vary by traffic volume, audience, and existing Klaviyo infrastructure.*

### When NOT to use Customers.ai

- **Pre-revenue or early-stage stores** (<$50K GMV) — economics don't work at low traffic
- **Low-traffic, high-AOV stores** — too few resolutions to justify $600/mo
- **Non-Klaviyo ESP users** — no integration available
- **Non-Shopify stores** — no native integration
- **Brands without core Klaviyo flows** — you need welcome series, abandonment flows, and browse abandonment already running before adding identified visitors
- **International-heavy traffic** — identity resolution works primarily on US visitors
