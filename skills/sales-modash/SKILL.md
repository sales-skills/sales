---
name: sales-modash
description: "Modash platform help — influencer marketing for Shopify brands with creator discovery (350M+ profiles on Instagram, TikTok, YouTube), audience analysis (demographics, fake follower detection), campaign management (auto-tracking, ROAS, EMV, CPM), creator payments (180+ countries), product gifting, affiliate tracking, and promo codes. Covers Discover (AI search, filters, lookalikes), Manage (CRM, communications, contracts), Track (content performance, sales attribution), Pay (automated payouts), Shopify integration, Gmail/Outlook sync, Discovery API, Raw API, AI Search API, and Collaborations API. Use when Modash search isn't finding the right creators, campaign tracking isn't attributing sales, Shopify gifting flow isn't working, creator payments are stuck, the Modash API isn't returning expected data, or unsure which Modash plan fits your needs. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing), ad campaign strategy (use /sales-retargeting), email marketing to subscribers (use /sales-email-marketing), or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in Modash]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-discovery, shopify, campaign-tracking, platform]
---
# Modash Platform Help

Helps the user with Modash platform questions — from creator discovery and audience analysis through campaign tracking, Shopify integration, creator payments, and API usage.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding influencers — search, filters, lookalikes, audience analysis
   - B) Managing creators — CRM, communications, contracts, lists
   - C) Campaign tracking — setting up tracking, reading metrics, ROAS
   - D) Product gifting — Shopify gifting flow, seeding campaigns
   - E) Affiliate tracking — promo codes, affiliate links, attribution
   - F) Creator payments — paying influencers, currencies, payouts
   - G) Shopify integration — connecting store, syncing products
   - H) API — Discovery API, Raw API, AI Search, Collaborations API
   - I) Pricing / plan selection
   - J) Something else — describe it

2. **Which social platforms are you targeting?**
   - A) Instagram
   - B) TikTok
   - C) YouTube
   - D) Multiple — specify which

3. **What's your Modash plan?**
   - A) Essentials ($199/mo)
   - B) Pro ($499/mo)
   - C) Enterprise (custom)
   - D) Free trial / evaluating
   - E) Not sure

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Influencer strategy across tools → `/sales-influencer-marketing`
- Ad campaign strategy / targeting → `/sales-retargeting` or `/sales-b2b-advertising`
- Email marketing to subscribers → `/sales-email-marketing`
- Affiliate program design (not Modash-specific) → `/sales-affiliate-program`
- UGC gallery / shoppable content → `/sales-tagshop`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge below.

## Step 3 — Modash platform reference

### Creator Discovery

Modash indexes every public profile with 1K+ followers across Instagram, TikTok, and YouTube — 350M+ creators total. No opt-in required.

#### Search and filters
- **Keyword search** — find creators by bio keywords, hashtags, mentions, or content topics
- **AI Search** — describe the creator you need in natural language ("fitness influencers in Germany who post home workouts")
- **Demographic filters** — audience location, age, gender, language, interests
- **Performance filters** — follower count range, engagement rate, growth rate, average views
- **Brand collaboration history** — see which brands a creator has worked with
- **Lookalike search** — find creators similar to ones you already work with

#### Audience analysis
- **Demographics** — audience location (country/city), age brackets, gender split, language
- **Fake follower detection** — identifies bot accounts and purchased followers with a percentage score
- **Engagement authenticity** — distinguishes real engagement from pods or bots
- **Audience overlap** — compare creators to avoid paying for redundant reach

#### Creator profiles
- Performance metrics, audience breakdown, content samples, brand collaboration history
- Export to CSV for offline analysis
- Save to lists for campaign organization

### Campaign Management

Track influencer campaigns without requiring creators to sign up or install anything.

#### Content tracking
- **Automatic detection** — Modash detects posts, stories, and reels mentioning your brand, using your hashtag, or tagging your account
- **No creator signup required** — tracking works passively via public content monitoring
- **Story archival** — captures ephemeral stories before they expire
- **Multi-platform** — track across Instagram, TikTok, and YouTube simultaneously

#### Metrics and reporting
- **ROAS (Return on Ad Spend)** — revenue generated vs. creator cost
- **EMV (Earned Media Value)** — estimated value of organic impressions
- **CPM (Cost per Mille)** — cost per 1,000 impressions
- **Engagement** — likes, comments, shares, saves per post
- **Sales attribution** — track conversions via promo codes and affiliate links through Shopify
- **Live dashboard** — real-time campaign performance updates

### Shopify Integration

Deep native integration with Shopify for product gifting, affiliate tracking, and sales attribution.

#### Product gifting
- Select products from your Shopify catalog to send to creators
- Creators receive a gifting link — they pick size/variant and enter shipping info
- Orders are auto-created in Shopify and fulfilled through your normal process
- No manual order entry or spreadsheet tracking needed

#### Affiliate tracking
- Generate unique promo codes per creator automatically
- Track sales attributed to each creator via Shopify order data
- Calculate ROAS per creator, per campaign, or across your entire program
- Automated commission calculation based on attributed sales

#### Promo codes
- Auto-generated unique codes per creator
- Set discount percentage or fixed amount
- Track usage and revenue per code in Modash dashboard

### Creator Payments

Pay influencers directly from Modash in 180+ countries.

- **Automated payouts** — set payment terms and pay creators based on campaign performance or flat fees
- **Multi-currency** — supports payments in local currencies across 180+ countries
- **Payment tracking** — see payment status, history, and outstanding balances per creator
- **Invoice management** — creators receive payment notifications and documentation

### Communications

Manage all creator communications in one place.

- **Gmail/Outlook sync** — connect your email to sync conversations with creators into Modash
- **Centralized inbox** — view all creator communications alongside their profile and campaign data
- **Templates** — save and reuse outreach templates with dynamic merge fields (creator name, handle, etc.)
- **Notes** — add internal notes to creator profiles for team collaboration

### Pricing

*Best-effort — verify at modash.io/pricing. Usage-based scaling on all plans.*

| Plan | Starting price | Searches/mo | Tracked creators | Emails/mo | Team seats |
|---|---|---|---|---|---|
| Essentials | $199/mo | 200 | 50 | 200 | 1 |
| Pro | $499/mo | Higher limits | Higher limits | Higher limits | Multiple |
| Enterprise | Custom | Custom | Custom | Custom | Unlimited |

**Usage-based scaling** — each plan has base limits for searches, tracked creators, emails sent, and team seats. Overage pricing applies when you exceed your plan's limits.

**14-day free trial** — full access to test the platform before committing.

### API

Modash offers four API products for building custom integrations and tools. API access is priced separately from the platform.

For detailed endpoint documentation, see `references/modash-api-reference.md`.

- **Discovery API** — search 380M+ creator profiles with filters, get audience demographics and performance metrics. Starting at $16,200/yr (3,000 credits/mo).
- **Raw API** — live, unfiltered profile data for real-time monitoring. Starting at $10,000/yr (40,000 requests/mo).
- **AI Search API** — natural-language creator search for AI agents and custom tools.
- **Collaborations API** — map brand-creator partnership history.

**Auth**: Bearer token via `Authorization: Bearer {token}`. Get your token at marketer.modash.io/developer.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Discovery workflow** — how to construct effective searches and filter combinations
2. **Vetting framework** — which metrics to check and in what order to avoid wasting time
3. **Campaign setup checklist** — what to configure before launching tracking
4. **Gifting workflow** — step-by-step Shopify product gifting setup
5. **Affiliate setup** — promo codes, attribution, ROAS tracking
6. **Payment workflow** — setting up and managing creator payments

### Creator vetting checklist (in Modash)

| Check | What to look for | Red flag |
|---|---|---|
| Fake follower % | Low percentage of bot/purchased followers | Over 25% suspicious accounts |
| Engagement rate | 1-3% for 100K+, 3-6% for under 100K | Under 1% or suspiciously over 10% |
| Audience location | Matches your target market | Audience concentrated in unexpected countries |
| Audience demographics | Age/gender match your customer profile | Demographics misaligned with your product |
| Brand collaborations | Complementary or non-competing brands | Recent work with direct competitors |
| Content quality | Consistent, on-brand posting | Erratic posting, off-topic content |
| Growth trend | Steady organic growth | Sudden follower spikes (purchased) |

**Efficiency tip**: Check engagement rate and content quality first (free/fast), then unlock audience analysis only for your shortlist.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No built-in contract builder.** Contracting is still manual — you need to draft PDFs externally and negotiate vian email. This is the most-requested missing feature based on reviews. Use a template library (Google Docs, PandaDoc) and link contracts in creator notes.
- **Reporting presentation is basic.** Multiple reviewers note the reporting dashboard isn't visually polished enough for client or exec presentations when managing many collaborations. Export data and build reports in Google Slides or your BI tool for stakeholder sharing.
- **Content tracking outside Instagram can lag.** TikTok and YouTube content detection may take longer than Instagram. If a creator's post isn't appearing after a few hours, verify the post is public and the handle is correctly added to the campaign.
- **Payments struggle with obscure currencies.** The payments feature works well for common currencies but reviewers report difficulties with less common ones. For creators in markets with unusual currency requirements, confirm payment details before committing.
- **Non-opted-in creators may not respond.** Unlike marketplace platforms where creators sign up to be contacted, Modash lists all public profiles. Some creators aren't expecting brand outreach and response rates may be lower than opt-in platforms.
- **API pricing is separate from platform.** The Discovery API starts at $16,200/yr and the Raw API at $10,000/yr — these are on top of your platform subscription. Budget accordingly if you need programmatic access.
- **Usage-based pricing can surprise.** Each plan has base limits for searches, tracked creators, and emails. Monitor your usage to avoid unexpected overage charges, especially during large discovery campaigns.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms (Modash, influData, Creator.co). Platform comparison, discovery strategy, vetting, ROI tracking, outreach
- `/sales-infludata` — influData platform help for creator discovery, audience analysis, campaign tracking
- `/sales-creatorco` — Creator.co platform help for AI-powered creator matching, UGC, affiliate tracking
- `/sales-affiliate-program` — Affiliate and referral program design (strategy, not Modash-specific)
- `/sales-tagshop` — UGC video ads and shoppable galleries for ecommerce
- `/sales-integration` — Tool integration architecture (webhooks, Zapier, API pipelines)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Find micro-influencers for a skincare launch
**User says**: "I need to find beauty micro-influencers in the US for a skincare product launch on Shopify"
**Skill does**:
1. Opens Discover and uses AI Search: "beauty and skincare micro-influencers in the United States, 10K-100K followers, posts about skincare routines"
2. Applies filters: location (US), follower range (10K-100K), engagement rate minimum (3%+)
3. Checks fake follower % for top results — flags any over 25%
4. Reviews audience demographics: US-based, 18-35 age range, female skew matching target customer
5. Saves vetted creators to a campaign list
6. Sets up Shopify product gifting with the skincare products
**Result**: Curated list of vetted beauty micro-influencers with Shopify gifting ready to send

### Example 2: Set up affiliate tracking for an influencer program
**User says**: "I want to track which influencers are actually driving sales — how do I set up affiliate tracking in Modash?"
**Skill does**:
1. Connects Shopify store to Modash (if not already connected)
2. Creates unique promo codes for each creator in the campaign
3. Configures sales attribution to track orders using each promo code
4. Sets up the campaign dashboard to show ROAS, revenue, and conversions per creator
5. Configures automated commission calculation based on attributed sales
**Result**: Full attribution pipeline — every sale traced back to the creator who drove it, with automated ROAS calculation

### Example 3: Evaluate Modash API for a custom integration
**User says**: "I'm building a custom influencer discovery tool — should I use the Modash API?"
**Skill does**:
1. Reviews the four API products: Discovery (search 380M+ profiles), Raw (live data), AI Search (NLP queries), Collaborations (brand-creator history)
2. Matches to the user's use case — Discovery API for search + audience data, Raw API for real-time monitoring
3. Reviews pricing: Discovery from $16,200/yr, Raw from $10,000/yr — separate from platform
4. Walks through auth setup: Bearer token from marketer.modash.io/developer
5. Points to detailed endpoint docs in references/modash-api-reference.md
**Result**: Clear recommendation on which API product to use with pricing and integration guidance

## Troubleshooting

### Campaign not detecting creator content
**Symptom**: Creator posted but the campaign dashboard doesn't show the content
**Cause**: Content detection relies on public posts matching tracked handles, hashtags, or brand mentions. Private or restricted posts won't be detected.
**Solution**: Verify the creator's handle is correctly added to the campaign. Check that the post is public (not restricted or close-friends only). Instagram content typically appears within 1-2 hours; TikTok and YouTube may take longer. If posts still aren't appearing after 4+ hours, contact Modash support.

### Shopify gifting order not creating
**Symptom**: Creator clicked the gifting link but no order appeared in Shopify
**Cause**: The creator may not have completed the full form (size/variant selection, shipping address), or the product may be out of stock in the selected variant.
**Solution**: Check the gifting link status in Modash — it shows whether the creator has clicked, started, or completed the form. Verify product inventory in Shopify for the specific variant. Resend the gifting link if the original expired.

### Creator payment failed
**Symptom**: Payment shows as failed or pending for an extended period
**Cause**: Payment processing issues can occur with uncommon currencies, incorrect bank details, or payment provider restrictions in certain countries.
**Solution**: Verify the creator's payment details are correct. For obscure currencies, check if Modash supports that specific currency or if the creator can accept a more common one (USD, EUR). Contact Modash support for persistent payment failures — they may need to process it manually.
