# Retargeting & Remarketing Platform Guide

## Retargeting funnel

Structure retargeting by intent level:

| Audience segment | Intent | Ad strategy | Budget priority |
|---|---|---|---|
| **Cart abandoners** | Highest | Product-specific ads + urgency/discount | 40-50% of retargeting budget |
| **Product/service page viewers** | High | Show viewed product/service + social proof | 25-30% |
| **Content/blog visitors** | Medium | Lead magnet or top-of-funnel offer | 10-15% |
| **Homepage-only visitors** | Low | Brand awareness + value prop | 5-10% |
| **Past purchasers** (upsell) | Varies | Complementary products, new releases | 10-15% |

## Key metrics

| Metric | What it measures | Good benchmark |
|---|---|---|
| ROAS (Return on Ad Spend) | Revenue per dollar spent | 4-10x for retargeting (higher than prospecting) |
| Conversion rate | % of retargeted visitors who convert | 2-5% (vs 0.5-1% for cold traffic) |
| Frequency | Avg impressions per user | 3-7/week (above 10 = fatigue) |
| View-through conversions | Conversions after ad view (no click) | Track but weight less than click-through |
| Cost per acquisition (CPA) | Cost to acquire a customer via retargeting | 50-80% lower than prospecting CPA |

## Audience segmentation best practices

1. **Segment by recency** — visitors from the last 7 days convert at 3-5x the rate of 30-day visitors. Bid higher on recent visitors.
2. **Segment by behavior** — cart abandoners vs. product viewers vs. homepage bouncers need different messages and budgets.
3. **Segment by value** — if you have purchase history, retarget high-AOV customers differently from low-AOV.
4. **Always exclude converters** — exclude people who already purchased (last 7-30 days) to avoid wasting budget and annoying customers.
5. **Use burn pixels** — place a conversion pixel on the thank-you page to automatically remove converters from retargeting audiences.

## Frequency capping

- **Display ads**: 3-5 impressions/day, 15-25/week
- **Social ads**: 2-3 impressions/day (social feels more intrusive)
- **Cart abandonment**: Can go higher (5-7/day for first 48 hours) — urgency justifies it
- **Diminishing returns**: After 10+ impressions with no engagement, move the user to a lower-frequency nurture audience or stop targeting them

## Creative strategy

- **Dynamic product ads**: Auto-populate with viewed/carted items. Include price and a CTA. Most effective for ecommerce.
- **Social proof ads**: Customer reviews, star ratings, "X people bought this today." Reduces purchase anxiety.
- **Urgency ads**: "Still in your cart" + countdown timer + limited-time discount. Best for cart abandoners within 24-48 hours.
- **Brand reinforcement**: For low-intent visitors, reinforce your value proposition rather than pushing a hard sell.
- **Rotate creative every 2-3 weeks** — creative fatigue is the #1 killer of retargeting ROAS. Have 3-5 variants running at all times.

## Platform-specific guidance

### In AdRoll
- **Cross-channel**: Display, social (Facebook/Instagram), native, CTV, DOOH, email retargeting — all from one platform. AdRoll's AI optimizes budget across channels.
- **Dynamic retargeting**: Auto-generates product ads from your Shopify/BigCommerce/WooCommerce feed. Best-in-class for ecommerce dynamic retargeting.
- **Lookalike audiences**: Build lookalikes from your customer/converter lists for prospecting alongside retargeting.
- **Ecommerce integration**: One-click Shopify, BigCommerce, WooCommerce. Auto-syncs product catalog, installs pixel, tracks revenue.
- **RollWorks (B2B)**: Account-based retargeting for B2B. Targets specific companies via IP matching. Deep HubSpot integration.
- **Best for**: Ecommerce brands wanting multi-channel retargeting managed in one platform. Strong Shopify ecosystem.
- **Pricing**: Pay-as-you-go ($5/day min), Marketing & Ads Plus ($36/mo for CTV), Advanced (annual for DOOH).

### In Google Ads
- **Remarketing lists**: Build from Google Analytics audiences or Google Ads pixel. Segment by page visits, session duration, events.
- **Dynamic remarketing**: Product feeds via Google Merchant Center. Auto-generates responsive ads with viewed products.
- **Search remarketing (RLSA)**: Bid higher on search ads when the searcher is a past visitor. Powerful for capturing intent.
- **YouTube remarketing**: Serve video ads to past website visitors on YouTube.
- **Customer Match**: Upload email lists for targeting. Minimum 1,000 matched users.
- **Best for**: Teams already running Google Ads who want to add remarketing without a separate platform. RLSA is uniquely powerful.
- **Limitation**: Display network quality varies. Less control over placements than dedicated retargeting platforms.

### In Meta Ads (Facebook/Instagram)
- **Custom Audiences**: Build from website pixel, customer lists, video viewers, page/profile engagers, app activity.
- **Dynamic Product Ads (DPA)**: Auto-show viewed/carted products in feed, stories, reels. Requires product catalog upload.
- **Advantage+ campaigns**: Meta's AI handles audience, placement, and creative optimization. Good starting point for retargeting.
- **Retention targeting**: Retarget existing customers with upsell/cross-sell via customer list or purchase events.
- **Best for**: B2C and D2C brands. Facebook/Instagram have the highest match rates for consumer audiences.
- **Limitation**: iOS 14.5+ tracking changes reduced pixel accuracy. Server-side Conversions API (CAPI) is now essential for reliable tracking.

### In Criteo
- **Commerce-focused**: Built specifically for ecommerce retargeting. One of the original retargeting platforms.
- **Criteo AI Engine**: Optimizes bids, creative, and audience in real-time based on purchase probability.
- **Dynamic Creative Optimization+**: Goes beyond showing viewed products — predicts which products the user is most likely to buy and shows those.
- **Massive ad network**: Access to 80%+ of internet users via direct publisher relationships.
- **Best for**: Large ecommerce retailers with $10K+/mo ad budgets. Criteo's algorithms improve with scale.
- **Limitation**: Minimum spend requirements. Less transparent reporting than self-serve platforms. Harder to control creative.

### In LinkedIn Ads
- **Website retargeting**: LinkedIn Insight Tag tracks visitors. Build audiences from page visits, lead gen form engagers, video viewers.
- **Matched Audiences**: Upload company or contact lists for targeting.
- **Account targeting + retargeting**: Combine account lists with website visitors for focused ABM retargeting.
- **Best for**: B2B companies retargeting website visitors on a platform where decision-makers browse professionally.
- **Limitation**: Higher CPM than display networks ($8-15 CPM vs $2-5). Smaller scale. Minimum audience of 300 matched members.

### In Klaviyo / Omnisend (Email retargeting)
- **Browse abandonment flows**: Trigger emails when known contacts view products but don't purchase. Requires email identification (cookie match or logged-in state).
- **Cart abandonment flows**: Multi-step email sequence triggered by cart abandonment. Typically 3 emails over 24-72 hours with escalating incentives.
- **Winback flows**: Target lapsed purchasers who haven't bought in X days.
- **Best for**: Ecommerce brands who have opted-in email addresses. Email retargeting is free (no ad spend) and highly effective — 5-10x ROAS vs display retargeting.
- **Limitation**: Only reaches known contacts (people who provided email). Not a substitute for ad-based retargeting of anonymous visitors.

### In Reddit Ads

Reddit supports website visitor retargeting and engagement-based remarketing:

**Custom audiences for retargeting:**
- **Website custom audience**: Install the Reddit Pixel on your site. Build retargeting audiences from visitors — segment by pages visited, events fired (AddToCart, ViewContent, etc.), and recency (7/14/30/60/90-day windows).
- **Engagement audience**: Retarget users who interacted with your Reddit posts or ads (upvoted, commented, clicked). Warm audience that already knows your brand.
- **Customer list audience**: Upload hashed email lists to retarget existing customers or leads on Reddit.
- **Lookalike audience**: Expand from any custom audience to reach similar users.

**Retargeting setup:**
1. Install Reddit Pixel on all pages (GTM or manual)
2. Set up Conversions API (CAPI) for server-side tracking — critical because ad blockers block 30-40% of client-side pixel data
3. Wait 1-2 weeks for audience to build (minimum ~1,000 users recommended)
4. Create separate ad groups for retargeting vs prospecting
5. Use Conversation placement alongside feed — 15-30% cheaper CPMs

**Creative for retargeting:**
- Reddit retargeting ads should still feel native — don't switch to corporate creative just because they visited your site
- Dynamic Product Ads available via product catalog for ecommerce retargeting
- Engagement retargeting (users who interacted with your Reddit content) converts well because they already know your brand voice

**Cost**: CPC $0.20-$2.00, CPM $0.50-$15. Typically 50-70% cheaper than Meta retargeting. Smaller audience pool than Meta/Google but highly engaged.

**Attribution note**: Reddit's attribution is primarily view-through (96% of conversions). Use 1-day view + 28-day click attribution window. If only measuring last-click, Reddit retargeting will appear to underperform vs Meta/Google.

**Best for**: Brands with Reddit-savvy audiences (tech, gaming, finance, SaaS). Pair with Meta/Google retargeting for cross-channel coverage. Not a replacement for Meta DPA at scale but a strong complementary channel.

### In Remerge (Mobile in-app retargeting DSP)
- **In-app retargeting**: Remerge is a DSP built specifically for retargeting users inside other mobile apps (not on the web). It serves ads within publisher apps to re-engage lapsed users, recover abandoned carts, and retain active users.
- **MMP-based segmentation**: Instead of website pixels, Remerge uses event streams from MMPs (AppsFlyer, Adjust, Branch) to build real-time audience segments based on in-app behavior — purchases, cart adds, level completions, session starts.
- **Dynamic product ads**: Auto-generated ads using product catalog data with deep links to specific in-app pages (product detail, cart, last-played level).
- **Incrementality measurement**: Remerge's core differentiator — randomized control trials comparing test groups (see ads) vs control groups (don't). Typical finding: 40-60% of attributed conversions are truly incremental.
- **Privacy-compliant**: GDPR data processor, ATT-aware (iOS), adapting to Android Privacy Sandbox. Partnered with Verve Group for on-device bidding.
- **Best for**: Mobile app businesses (gaming, e-commerce, delivery, finance) that need to re-engage lapsed users or retain active ones through in-app ads. Not for web retargeting.
- **Pricing**: Custom, managed-service-first. CPA/CPC/CPE/CPS/ROAS models. Not publicly listed.
- **Limitation**: Managed service model means less direct self-serve control. iOS retargeting scale is limited by ATT (20-35% IDFA opt-in rate). Help center restricted to clients.

### In Cloutboost (Gaming influencer content retargeting)
- **Influencer content → paid ads**: Cloutboost's retargeting service repurposes gaming influencer content (YouTube videos, Twitch streams, TikTok clips) into paid ad formats. Targets users who engaged with the original influencer content.
- **Gaming-specific**: Exclusively focused on gaming audiences. Retargets users who watched, liked, or commented on gaming influencer content about your game.
- **Claimed 3x CTR improvement** over standard creative when using influencer-generated content for retargeting ads.
- **Managed service only**: Retargeting is not available through the self-serve Portal — requires Cloutboost's agency service ($5K+ minimum budget).
- **Best for**: Game publishers and studios who ran influencer campaigns and want to convert awareness into installs/purchases through paid retargeting of engaged viewers.
- **Limitation**: Gaming-only. No ecommerce or general retargeting capabilities. Performance claims are self-reported — benchmark against your own data.

### In Zoomd (Mobile in-app retargeting via DSP)
- **Mobile DSP retargeting**: Zoomd's DSP enables in-app retargeting alongside user acquisition campaigns — retarget lapsed users across 600+ media sources and 30+ ad exchanges from a single dashboard.
- **MMP-based segmentation**: Uses event streams from AppsFlyer, Adjust, Branch, and Kochava to build audience segments based on in-app behavior.
- **Unified UA + retargeting**: Unlike retargeting-only DSPs (Remerge), Zoomd combines user acquisition with retargeting in one platform — run new install campaigns and re-engagement simultaneously.
- **Albert.ai optimization**: Albert.ai can optimize retargeting budget allocation across channels alongside UA spend for holistic cross-channel optimization.
- **CGC content for retargeting**: Creator-generated content from Zoomd's micro-creator network can be used as retargeting creative — fresh, authentic video ads.
- **Best for**: Mobile app businesses already using Zoomd for UA who want to add retargeting without a separate platform. Best when managing both acquisition and re-engagement from one dashboard.
- **Limitation**: No public API for programmatic audience management. Pricing is not publicly disclosed. Less specialized in retargeting measurement than Remerge (no built-in incrementality testing).

### In Retention.com (Identity resolution retargeting)
- **Anonymous → known**: Retention.com identifies anonymous visitors using third-party data, converting them to email/SMS contacts for retargeting without opt-in.
- **Reclaim product**: Captures abandonment events (cart, checkout, browse) that ESPs miss because the visitor was anonymous. Pushes identified contacts to Klaviyo, Mailchimp, etc. for abandonment flows.
- **Retargeting activation**: Identified contacts can be synced to Meta and Google Ads as custom audiences for paid retargeting — expanding your retargeting pool beyond cookie-based pixels.
- **Deliverability caveat**: Identified contacts generate higher spam complaints (~0.15-0.20%) than opted-in lists. Use a separate sending domain and aggressive sunsetting.
- **Best for**: Ecommerce brands with high anonymous traffic who want to retarget visitors across email, SMS, and paid ads without relying solely on opt-in forms or cookie-based pixels. US traffic only.

## Cart abandonment recovery playbook

| Channel | Timing | Message | Expected recovery rate |
|---|---|---|---|
| Email #1 | 1 hour after abandon | "You left something behind" + cart contents | 5-10% |
| Email #2 | 24 hours | Social proof + urgency | 3-5% |
| Display retargeting | 2-48 hours | Dynamic product ads (viewed/carted items) | 1-2% |
| Social retargeting | 2-48 hours | Carousel of carted products | 1-3% |
| Email #3 | 72 hours | Discount offer (last resort) | 2-4% |
| Exit from retargeting | 14 days | Stop retargeting to avoid fatigue | — |

**Total expected recovery**: 12-24% of abandoned carts (combined channels)

## Budget allocation by business type

| Business type | Primary channels | Monthly budget (starting) |
|---|---|---|
| Ecommerce (<$1M rev) | Email retargeting + Meta DPA + AdRoll | $500-2,000/mo (ads) + email (free) |
| Ecommerce ($1-10M rev) | Meta DPA + Google remarketing + AdRoll + email | $2,000-10,000/mo |
| B2B SaaS | LinkedIn retargeting + Google RLSA + display | $3,000-10,000/mo |
| Local business | Google RLSA + Meta retargeting | $500-2,000/mo |

### In Treasure Data (CDP audience activation)

Treasure Data isn't a retargeting platform — it's the data layer that feeds retargeting platforms with unified, high-quality audiences.

**Audience activation for retargeting:**
- Build audience segments in Audience Studio (no-code) or via SQL queries against unified profiles.
- Activate segments to ad platforms via native connectors: Facebook Custom Audiences, Google Ads, Google DV360, LinkedIn, TikTok, Pinterest, Snapchat, The Trade Desk, Amazon DSP, Criteo.
- Set sync frequency: one-time, daily, or weekly. Monitor match rates — match rates depend on identifier quality (hashed email > phone > device ID).

**Why CDP-powered retargeting outperforms:**
- Unified profiles merge website visits + purchases + email engagement + in-store data. Retargeting audiences built from CDP profiles are richer than pixel-only audiences.
- Suppress recent purchasers across ALL channels at once — no more showing ads to someone who just bought in-store.
- Build lookalike audiences from your highest-value customers (not just recent visitors) by leveraging purchase history and LTV data.

**Limitations:**
- Treasure Data is the data layer, not the ad platform — you still need Google/Meta/etc. for actual ad delivery.
- Enterprise pricing ($100K+/year) makes this overkill for simple pixel-based retargeting. Best when you have fragmented customer data across many channels.
- Audience sync is batch-based (not real-time) — there's a delay between segment qualification and ad platform activation.
