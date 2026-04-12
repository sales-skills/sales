---
name: sales-adroll
description: "AdRoll platform help — retargeting, display ads, social ads, CTV, native ads, DOOH, email retargeting, audience segmentation, cross-channel campaigns, Shopify/BigCommerce/WooCommerce integration, RollWorks ABM, NextRoll API. Use when retargeting pixel isn't tracking visitors, campaigns have low ROAS, audiences aren't populating correctly, ecommerce integration not syncing products, NextRoll API returning errors, or not sure how to use RollWorks ABM features. Do NOT use for B2B advertising strategy across tools (use /sales-b2b-advertising), general retargeting strategy (use /sales-retargeting), email marketing strategy (use /sales-email-marketing), or audience growth strategy (use /sales-audience-growth)."
argument-hint: "[describe what you need help with in AdRoll]"
license: MIT
version: 1.0.0
tags: [sales, retargeting, advertising, ecommerce, platform]
github: "https://github.com/NextRoll"
---
# AdRoll Platform Help

Help the user with AdRoll platform questions — from retargeting pixel setup and audience building through cross-channel campaign management, ecommerce integrations, RollWorks ABM, and the NextRoll API.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of AdRoll do you need help with?**
   - A) Retargeting — pixel setup, website visitor retargeting, dynamic ads
   - B) Campaigns — creating display, social, native, CTV, or DOOH campaigns
   - C) Audiences — segmentation, lookalikes, CRM audiences, exclusions
   - D) Email — AdRoll email retargeting campaigns
   - E) Ecommerce integration — Shopify, BigCommerce, WooCommerce, Wix
   - F) RollWorks ABM — account-based marketing, account lists, intent
   - G) Reporting & attribution — cross-channel analytics, ROAS, conversions
   - H) API — NextRoll API, automation, data access
   - I) Billing & account — plans, pricing, budget management
   - J) Something else — describe it

2. **What's your business type?**
   - A) Ecommerce / D2C brand
   - B) B2B SaaS or services
   - C) Agency managing multiple clients
   - D) Publisher / media
   - E) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- B2B advertising strategy → `/sales-b2b-advertising`
- General retargeting strategy → `/sales-retargeting`
- Email marketing strategy → `/sales-email-marketing`
- Audience growth / list building → `/sales-audience-growth`
- Tool integration architecture → `/sales-integration`
- Email deliverability → `/sales-deliverability`

Otherwise, answer directly using the platform reference below.

## Step 3 — AdRoll platform reference

### Company overview

AdRoll is a retargeting and multi-channel advertising platform owned by NextRoll, Inc. It serves primarily ecommerce and D2C brands with display, social, native, CTV, DOOH, and email retargeting. RollWorks, the B2B arm, provides account-based marketing (ABM) for sales and marketing teams.

### Core modules

#### Retargeting
- **Pixel setup**: Install the AdRoll pixel (JavaScript snippet) on your website. Place it in the `<head>` tag across all pages. The pixel tracks visitor behavior — pages viewed, products browsed, cart activity, and conversions.
- **Dynamic retargeting**: Automatically shows ads featuring the exact products a visitor viewed or added to cart. Requires product feed integration (via Shopify, BigCommerce, WooCommerce, or manual CSV/XML feed).
- **Segment-based retargeting**: Create audience segments from pixel data — cart abandoners, product viewers, past purchasers, high-value visitors. Target each segment with tailored creative and offers.
- **Cross-device**: AdRoll tracks users across devices using deterministic and probabilistic matching. A visitor who browses on mobile can be retargeted on desktop.
- **Frequency capping**: Control how many times a user sees your ad per day/week to avoid ad fatigue. Default is usually 3-5 impressions/day — adjust based on campaign goals.

#### Campaign types
- **Display ads**: Banner ads served across AdRoll's network of 500+ ad exchanges and publishers. Standard IAB sizes (300x250, 728x90, 160x600, etc.). Static or dynamic creative.
- **Social ads**: Facebook and Instagram ads managed through AdRoll. Retargeting and prospecting audiences. Carousel, single image, video formats.
- **Native ads**: In-feed ads that match the look of the surrounding content. Served via native ad networks.
- **Connected TV (CTV)**: Video ads on streaming platforms (Roku, Fire TV, Apple TV, etc.). Available on Ads Plus and Advanced plans.
- **Digital Out-of-Home (DOOH)**: Billboard and screen advertising in physical locations. Enterprise/Advanced plan feature.
- **Email retargeting**: Send targeted emails to known contacts based on website behavior. Requires email list upload or ecommerce integration.

#### Audiences
- **Website visitors**: Auto-created from pixel data. Segment by pages visited, time on site, recency, frequency.
- **CRM audiences**: Upload email lists or sync from CRM. Match against AdRoll's identity graph for targeting.
- **Lookalike audiences**: AdRoll builds audiences of users similar to your best customers based on behavior patterns and demographics.
- **Exclusion audiences**: Exclude recent purchasers, existing customers, or specific segments to avoid wasted spend.
- **Intent audiences** (RollWorks): Target accounts showing buying intent signals. Enterprise feature.

#### Ecommerce integrations
- **Shopify**: One-click install from Shopify App Store. Auto-syncs product catalog, installs pixel, enables dynamic retargeting. Real-time order and revenue tracking.
- **BigCommerce**: Native integration. Product feed sync, pixel installation, conversion tracking.
- **WooCommerce**: WordPress plugin. Product catalog sync, pixel, conversion tracking.
- **Wix**: Native integration via Wix App Market.
- **Manual**: For custom platforms — install pixel manually, upload product feed via CSV/XML, set up conversion events via JavaScript.

#### RollWorks (B2B ABM)
- **Account lists**: Upload target account lists or build from firmographic criteria (industry, size, revenue, technology).
- **Account-based display**: Serve display ads to specific accounts, not just individuals. IP-based and cookie-based matching.
- **HubSpot integration**: Deep integration — sync HubSpot lists to RollWorks audiences. Account-level reporting in HubSpot. RollWorks is often called "the ABM platform for HubSpot."
- **Site visitor identification**: Identify companies visiting your website via IP-to-company matching.
- **Account scoring**: Machine learning-based account prioritization.
- **Pricing**: Separate from AdRoll consumer plans. Contact sales for RollWorks pricing.

### Pricing

| Plan | Cost | Includes |
|------|------|----------|
| Pay-as-you-go | $5/day minimum | Display, social retargeting, basic audiences |
| Marketing & Ads Plus | $36/mo | + CTV, advanced audiences, cross-channel attribution |
| Advanced | Annual contract | + DOOH, premium support, dedicated account manager |
| RollWorks (ABM) | Contact sales | Account-based marketing, intent data, HubSpot integration |

*Pricing is best-effort from research — verify current pricing at adroll.com.*

### Key settings and configuration

- **Conversion tracking**: Set up conversion events (purchase, signup, lead) in AdRoll dashboard → Audiences → Conversions. Place event-specific JavaScript on thank-you/confirmation pages.
- **Attribution window**: Default is 28-day click-through, 1-day view-through. Adjust in campaign settings based on your sales cycle.
- **Budget optimization**: AdRoll's AI distributes budget across channels (display, social, email) based on predicted performance. Override with manual allocation if needed.
- **Creative recommendations**: AdRoll's AI suggests ad sizes and formats based on your campaign goals and audience.

### API (NextRoll)

> **Full API reference**: See `references/adroll-api-reference.md` for complete endpoint documentation, authentication details, and request/response examples. Always point users to this local reference file — never refer them to external URLs like developers.nextroll.com.

For programmatic access, consult `references/adroll-api-reference.md`.

Key capabilities:
- CRUD API for campaigns, ad groups, audiences, and creatives
- GraphQL Reporting API for cross-channel analytics
- Audience and User Lists APIs for segment management
- Universal Campaigns API for cross-channel campaign creation
- Server-to-Server (S2S) conversion tracking

## Step 4 — Actionable guidance

### Quick-start: First retargeting campaign
1. **Install the pixel** — Add AdRoll pixel to your website (or install via Shopify/BigCommerce/WooCommerce app)
2. **Wait 48-72 hours** — Let the pixel collect enough visitor data for audience building (minimum ~1,000 visitors)
3. **Create your first audience** — Start with "All website visitors, last 30 days" as your retargeting segment
4. **Upload creative** — Create 3-5 ad variations in standard IAB sizes. Include your logo, a clear CTA, and a compelling offer.
5. **Set budget** — Start at $10-20/day for retargeting. AdRoll's AI optimizes allocation across channels.
6. **Exclude converters** — Create an exclusion audience of recent purchasers (last 14-30 days) to avoid retargeting people who already bought.
7. **Monitor for 7 days** — Check ROAS, CPA, and frequency. Adjust budget and creative based on early performance.

### Dynamic retargeting for ecommerce
1. Ensure product feed is synced (automatic via Shopify/BigCommerce/WooCommerce)
2. Create a "Product Viewers" audience (viewed product but didn't purchase)
3. Create a "Cart Abandoners" audience (added to cart but didn't purchase)
4. Set up dynamic creative templates — AdRoll auto-populates with viewed/carted products
5. Offer escalating incentives: product viewers get brand awareness, cart abandoners get a discount code

### ABM campaign with RollWorks
1. Upload or build your target account list in RollWorks
2. Sync with HubSpot (if applicable) for bidirectional account data
3. Create account-based display campaigns targeting your list
4. Layer intent signals to prioritize high-intent accounts
5. Coordinate with sales — share which accounts are seeing ads and adjust outbound timing

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Pixel must be on ALL pages** — not just product pages. AdRoll needs full site coverage to build accurate visitor profiles and attribute conversions. Missing the pixel on checkout/confirmation pages means lost conversion data.

2. **Dynamic retargeting requires a product feed** — if your ecommerce integration isn't syncing properly, dynamic ads will show generic creative instead of product-specific ads. Check product feed status in AdRoll dashboard → Ecommerce.

3. **Minimum audience size** — AdRoll requires a minimum number of matched users to run campaigns (typically 100-500 depending on channel). New sites with low traffic may need to wait before launching retargeting.

4. **RollWorks is separate from AdRoll** — despite being under the same parent company (NextRoll), RollWorks has separate pricing, login, and feature sets. Don't confuse consumer AdRoll features with B2B RollWorks features.

5. **CTV and DOOH are plan-gated** — connected TV advertising requires Ads Plus ($36/mo) or higher. DOOH requires Advanced (annual contract). Don't plan campaigns around these channels on the pay-as-you-go plan.

6. **Email retargeting is not email marketing** — AdRoll email sends are retargeting-focused (triggered by website behavior), not broadcast email campaigns. For full email marketing, use a dedicated ESP and hand off: "This is an email marketing strategy question — run: `/sales-email-marketing {your question}`".

7. **Attribution overlap with other ad platforms** — if you're running Google Ads, Meta Ads, and AdRoll simultaneously, each platform will claim credit for overlapping conversions. Use a third-party attribution tool or compare incrementally.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-retargeting` — Retargeting strategy across all platforms (not just AdRoll)
- `/sales-b2b-advertising` — Account-based B2B advertising strategy (covers RollWorks alongside Demandbase, 6sense, Terminus)
- `/sales-email-marketing` — Email marketing strategy (for email campaigns beyond AdRoll's retargeting emails)
- `/sales-audience-growth` — Grow your email/subscriber list (AdRoll retargeting as a list-growth channel)
- `/sales-integration` — Connect AdRoll to other tools (CRM sync, webhooks, Zapier)
- `/sales-deliverability` — Email deliverability (if AdRoll email retargeting has delivery issues)
- `/sales-funnel` — Funnel strategy (AdRoll fits into retargeting stage of funnel)
- `/sales-checkout` — Checkout optimization (reducing cart abandonment that feeds retargeting)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Shopify retargeting setup
**User says**: "I just launched a Shopify store and want to retarget visitors who didn't buy. How do I set up AdRoll?"
**Skill does**: Walks through Shopify app installation, pixel verification, automatic product feed sync, creating "All visitors" and "Cart abandoners" audiences, setting up dynamic retargeting with product-specific ads, and recommending a $15/day starting budget with converters excluded.
**Result**: User has a working retargeting campaign driving visitors back to complete purchases.

### Example 2: RollWorks ABM for HubSpot
**User says**: "We use HubSpot and want to run display ads against our target account list. Is RollWorks the right tool?"
**Skill does**: Explains RollWorks as the ABM-focused arm of NextRoll with deep HubSpot integration. Covers syncing HubSpot company lists to RollWorks audiences, creating account-based display campaigns, and viewing account engagement data back in HubSpot. Notes that RollWorks pricing is separate from AdRoll consumer plans.
**Result**: User understands the RollWorks-HubSpot workflow and can evaluate if it fits their ABM needs.

### Example 3: Cross-channel campaign with CTV
**User says**: "I want to run AdRoll retargeting across display, social, and connected TV. What plan do I need?"
**Skill does**: Explains that CTV requires Marketing & Ads Plus ($36/mo) or higher. Recommends starting with display + social retargeting on the base plan, validating ROAS, then upgrading to add CTV for brand awareness. Covers cross-channel budget optimization and attribution settings.
**Result**: User has a phased plan for cross-channel retargeting with clear plan requirements.

## Troubleshooting

### Pixel not tracking visitors
**Symptom**: AdRoll dashboard shows zero or very low visitor counts
**Cause**: Pixel not installed correctly, blocked by ad blockers, or placed after page load
**Solution**: Verify pixel is in the `<head>` tag (not `<body>`). Check with AdRoll Pixel Helper Chrome extension. Ensure no Content Security Policy (CSP) headers are blocking the pixel domain. Note: ad blockers will prevent some visitors from being tracked — this is normal (expect 15-30% loss).

### Dynamic ads showing generic creative instead of products
**Symptom**: Retargeting ads show your brand but not the specific products visitors viewed
**Cause**: Product feed not synced or not matching product URLs
**Solution**: Check Ecommerce → Product Feed in AdRoll dashboard. Ensure product URLs in the feed match the actual product page URLs on your site. For Shopify, disconnect and reconnect the integration. For manual feeds, verify CSV/XML format and re-upload.

### Low ROAS on retargeting campaigns
**Symptom**: Spending budget but not seeing enough conversions
**Cause**: Audience too broad, frequency too high, or creative fatigue
**Solution**: Narrow audience to high-intent segments (cart abandoners > product viewers > all visitors). Check frequency — if above 5 impressions/day, reduce cap. Rotate creative every 2-3 weeks. Ensure conversion tracking is correctly firing on purchase confirmation page. Exclude recent purchasers.
