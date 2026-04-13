---
name: sales-customer-reviews
description: "Product review collection, display, moderation, and syndication strategy across platforms — Skeepers, Yotpo, Judge.me, Bazaarvoice, Loox, Okendo, Stamped, Trustpilot, and PowerReviews. Covers choosing a review platform, automating post-purchase review requests (email, SMS, in-email forms), displaying reviews with widgets and Rich Snippets, photo/video review collection, AI-powered moderation and reply, review syndication to retail partners, and integrating reviews with Google Shopping. Use when not getting enough product reviews, review collection rate is low, reviews not showing up on product pages or Google, unsure which review app to pick, reviews not syndicating to retail partners, or switching review platforms and worried about losing data. Do NOT use for platform-specific config (use /sales-skeepers, /sales-klaviyo, /sales-omnisend), influencer marketing strategy (use /sales-influencer-marketing), or customer feedback surveys like NPS/CSAT (different problem — reviews are public product feedback, NPS is private satisfaction measurement)."
argument-hint: "[describe your review collection question — e.g., 'which review app for my Shopify store' or 'how do I get more photo reviews']"
license: MIT
version: 1.0.0
tags: [sales, reviews, ugc, ecommerce, social-proof, strategy]
---

# Customer Reviews Strategy

Helps the user collect, display, moderate, and syndicate product reviews across ecommerce platforms — from choosing the right review tool to optimizing review collection rates and leveraging reviews for conversion and SEO.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Choosing a review platform
   - B) Setting up review collection (post-purchase emails/SMS)
   - C) Displaying reviews on product pages
   - D) Getting more photo/video reviews
   - E) Review moderation and responding
   - F) Review syndication to retail partners or Google
   - G) Migrating from one review platform to another
   - H) Something else — describe it

2. **What's your ecommerce platform?** Shopify, WooCommerce, Magento, BigCommerce, custom, or other

3. **What's your monthly order volume?** This determines which review tools are cost-effective.

4. **What's your budget?** Free, under $50/month, under $200/month, or enterprise

## Step 2 — Platform comparison

Help the user choose based on their constraints:

| Platform | Best for | Pricing | Photo/Video | Syndication | Google Rich Snippets |
|---|---|---|---|---|---|
| **Judge.me** | Budget-conscious Shopify stores | Free plan + $15/mo | Yes (paid) | No | Yes |
| **Loox** | Visual-first DTC brands | From $9.99/mo | Core feature | No | Yes |
| **Okendo** | Shopify brands wanting Klaviyo integration | From $19/mo | Yes | Limited | Yes |
| **Stamped** | Multi-channel aggregation | From $23/mo | Yes | Limited | Yes |
| **Yotpo** | Mid-market with loyalty + reviews | From $79/mo | Yes | Yes | Yes |
| **Skeepers** | Enterprise brands wanting UGC + influencer + reviews | ~3K EUR/mo | Yes | Yes (retail network) | Yes |
| **Bazaarvoice** | Enterprise retail syndication | Enterprise pricing | Yes | Industry-leading | Yes |
| **PowerReviews** | Retail brands / CPG | Enterprise pricing | Yes | Strong retail network | Yes |
| **Trustpilot** | Service businesses / B2B | Free plan + paid | Limited | No | Yes (own domain) |

**Decision framework:**
- **Just starting / low budget**: Judge.me (free plan is exceptionally generous) or Loox (if visual reviews matter)
- **Growing Shopify brand**: Okendo (tight Klaviyo integration) or Stamped (multi-channel)
- **Mid-market needing loyalty + reviews**: Yotpo (combined platform)
- **Enterprise needing syndication**: Bazaarvoice or PowerReviews (retail network) or Skeepers (UGC + influencer + reviews combined)
- **Service business**: Trustpilot (brand reputation focus)

## Step 3 — Review collection strategy

### Post-purchase review request timing

| Scenario | Optimal delay | Why |
|---|---|---|
| Digital products | 1-3 days | Customer uses immediately |
| Fast-fashion / consumables | 7-10 days | Enough time to try |
| Furniture / appliances | 14-21 days | Needs time to evaluate |
| Subscription boxes | 5-7 days | Before next box arrives |

### Collection channels (by response rate)

1. **In-email review forms** (highest) — customer rates without clicking through. Judge.me, Skeepers, and Okendo support this.
2. **SMS review requests** — 3x higher open rate than email. Yotpo, Okendo, and Stamped support SMS.
3. **Post-purchase email** — standard approach. All platforms support this.
4. **On-site pop-up** — catch customers while browsing. Lower quality but captures impulse reviews.
5. **QR code in packaging** — physical prompt. Works well for unboxing-heavy products.

### Photo and video review incentives

- Offer loyalty points or discount codes for photo/video reviews (Yotpo, Okendo, Stamped integrate with loyalty)
- Use AI-suggested themes (Skeepers) to prompt more detailed, useful reviews
- Keep the upload process mobile-friendly — most customers review on phones
- Set expectations: "Show us how you use it" prompts better UGC than "Upload a photo"

## Step 4 — Review display and SEO

### Widget placement for maximum conversion

1. **Star ratings on product cards** (collection pages) — social proof before click-through
2. **Review summary above the fold** (product page) — star rating + count visible without scrolling
3. **Full review section** (product page) — filterable by rating, with photo/video, below product details
4. **Review carousel** (homepage) — featured reviews for brand trust
5. **Review rich snippets** (Google search) — JSON-LD structured data for star ratings in SERPs

### Google Rich Snippets setup

All major review platforms support JSON-LD structured data. Key requirements:
- Use `Product` schema with `aggregateRating` and `review` properties
- Reviews must be from verified purchases (Google's policy)
- Minimum 1 review to display; Google recommends 5+ for reliability
- Test with Google's Rich Results Test tool after implementation

### Review syndication

**What it is**: Pushing your reviews from your brand site to retail partner sites (Amazon, Target, Walmart, etc.)

**Who needs it**: Brands selling through multiple retailers who want consistent review coverage everywhere.

**Platform capabilities**:
- **Bazaarvoice** — largest retail syndication network (1,250+ retail sites, 325M+ reviews)
- **PowerReviews** — strong retail network, especially grocery/CPG
- **Skeepers** — syndication to Google Shopping, Meta, TikTok, plus retail partners
- **Yotpo** — growing syndication capabilities

**Key considerations**:
- Syndication requires retailer acceptance (business relationship, not just technical)
- Product identifiers must match across systems (GTIN/UPC is the universal key)
- Syndicated reviews are typically read-only on the retailer site
- Google Shopping reviews syndication is different from retail syndication

## Step 5 — Review moderation and response

### Moderation workflow

1. **Auto-approve** reviews ≥3 stars with no flagged content (most platforms support this)
2. **Queue for review** 1-2 star reviews and anything with flagged language
3. **AI moderation** (Skeepers, Yotpo) — catches spam, profanity, and competitor mentions automatically
4. **Respond to negative reviews within 24-48 hours** — shows future customers you care

### Response best practices

- **Thank positive reviewers** briefly — don't over-respond
- **Address negative reviews** with empathy + specific action: "I'm sorry about X. Here's what we're doing / please contact us at Y"
- **Never argue** — other customers are reading your response
- **Use AI reply suggestions** (Skeepers, Yotpo) as a starting point, then personalize

## Gotchas

> *Best-effort from research — review these, especially pricing and feature availability that may change.*

- **Shopify deprecated its native Product Reviews app in 2024** — if you're still using it, migrate to a third-party app. Export reviews before they're lost.
- **Google Rich Snippets are not guaranteed** — Google decides whether to show star ratings in search results. Having structured data is necessary but not sufficient.
- **Free plans have branding** — Judge.me and most free-tier review apps show their logo on widgets. Paid plans remove branding.
- **Review gating is against Google's policy** — don't filter review requests to only send to satisfied customers. Send to everyone.
- **Photo review quality varies** — expect ~5-15% of reviews to include photos without incentives. Incentivizing can increase this to 30%+.
- **Syndication ≠ automatic retail acceptance** — having syndication capability doesn't mean retailers will accept your reviews. It's a business negotiation.
- **Migration between platforms risks losing reviews** — most platforms support CSV import/export, but formatting varies. Test with a small batch first.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-trustpilot` — Trustpilot platform help (TrustBox widgets, TrustScore, Invitation API, Google Seller Ratings). Install: `npx skills add sales-skills/sales --skills sales-trustpilot`
- `/sales-skeepers` — Skeepers platform help (Verified Reviews, Influencer Marketing, Feedback Management). Install: `npx skills add sales-skills/sales --skills sales-skeepers`
- `/sales-influencer-marketing` — Influencer marketing strategy (gifted reviews bridge both). Install: `npx skills add sales-skills/sales --skills sales-influencer-marketing`
- `/sales-checkout` — Checkout optimization (review widgets on product pages affect conversion). Install: `npx skills add sales-skills/sales --skills sales-checkout`
- `/sales-email-marketing` — Email marketing (review request emails are a key touchpoint). Install: `npx skills add sales-skills/sales --skills sales-email-marketing`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

**Example 1**: "I just launched my Shopify store and need a review app. I have maybe 10 orders a day and no budget for paid tools."
→ Recommend Judge.me free plan, walk through setup: install app, configure 7-day post-purchase email delay, enable in-email review form, add star ratings to collection pages and review section to product pages, set up JSON-LD for Google Rich Snippets.

**Example 2**: "I'm a DTC beauty brand doing 500 orders/day and want more photo and video reviews for social proof."
→ Compare Loox vs Okendo vs Yotpo for visual review focus. Recommend photo review incentives (loyalty points or discount codes), SMS review requests for higher response rates, and UGC galleries on product pages. If they want influencer content too, suggest Skeepers for combined review + influencer UGC.

**Example 3**: "I sell through my own site and through Target and Walmart. How do I get my reviews to show up on retailer sites?"
→ Explain review syndication: Bazaarvoice or PowerReviews for the strongest retail networks, GTIN/UPC matching requirements, retailer onboarding process, and the business relationship aspect beyond technical integration.

## Troubleshooting

**Low review collection rate (< 5%)**
- Check email deliverability — review requests may be going to spam
- Shorten the delay — if customers forget by the time the request arrives, they won't review
- Enable in-email forms — reduces friction vs. clicking through to a separate page
- Add SMS as a second channel — 3x higher open rate than email
- Test subject lines — "How's your [product]?" outperforms "Leave a review"

**Reviews not showing in Google search results**
- Verify JSON-LD structured data with Google's Rich Results Test
- Ensure reviews are from verified purchases
- Check that you have enough reviews (Google recommends 5+ per product)
- Google can take weeks to process — be patient after implementation
- Note: Google may choose not to show stars even with valid markup

**Review widget slowing down page**
- Lazy-load the review section (load on scroll, not on page load)
- Limit initial display to 5-10 reviews with "load more"
- Check if the review app loads external scripts synchronously — defer if possible
- Test Core Web Vitals before and after review widget installation
