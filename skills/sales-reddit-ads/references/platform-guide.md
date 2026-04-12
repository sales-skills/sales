# Reddit Ads Platform Guide

## Campaign structure

Reddit Ads uses a three-level hierarchy:

```
Campaign (objective + budget + schedule)
  └── Ad Group (targeting + bid + placement)
       └── Ad (creative + CTA + destination)
```

- **Campaign**: Set the objective (Awareness, Consideration, Conversion, App Installs, Catalog Sales, Lead Generation), daily/lifetime budget, and schedule.
- **Ad Group**: Set targeting (communities, interests, keywords, custom audiences), bid strategy, placement (feed, conversation, or both), and frequency caps.
- **Ad**: Set the creative format, headline, body text, CTA, and destination URL.

## Ad formats

**Self-serve formats:**

| Format | Specs | Best for |
|---|---|---|
| **Image** | JPG/PNG, 3MB max, 1:1/4:5/16:9 | Product showcase, visual awareness |
| **Video** | MP4/MOV, 1GB max (50-100MB rec.), 2s-15min, 30 FPS | Storytelling, mobile-first |
| **Carousel** | 2-6 cards, each with unique URL, 50-char caption, 20MB/card | Multi-product, before/after |
| **Free-Form** | Up to 20 images + 5 videos, 300-char headline, 40K-char body | Complex storytelling, guides |
| **Conversation** | Text-only headline (100 chars mobile, 250 desktop), 400x300 thumbnail | Reaching engaged discussions |
| **Product** | Linked to product catalog, dynamic pricing/images | Direct ecommerce sales |

**Managed/premium formats** (require Reddit sales rep):

| Format | What it is | Best for |
|---|---|---|
| **AMA** | Real-time Q&A session with community | Brand humanization, launches |
| **Reddit Takeover** | 24-hour exclusive multi-placement dominance | Major launches, max awareness |
| **Category Takeover** | 24-hour exclusive within a content vertical | Vertical-focused campaigns |
| **First View** | Guaranteed first in-feed ad on Home/Popular | Premium brand positioning |
| **Interactive** | Custom experiences (games, quizzes, countdowns) | Upper-funnel engagement |
| **Max Campaigns** | AI-driven targeting + creative optimization | Beginners, rapid testing |

## Targeting options

| Method | How it works | Best for |
|---|---|---|
| **Community** | Target specific subreddits (e.g., r/personalfinance) | Precision — reach people by what they care about |
| **Interest** | Reddit-defined interest categories (Technology, Gaming, etc.) | Reach — broader than community, less precise |
| **Keyword** | Target users who've engaged with posts containing specific keywords | Intent — catch active researchers |
| **Conversation** | Target within comment threads based on sentiment/context | Contextual relevance |
| **Custom audience — website** | Pixel-based retargeting of site visitors | Re-engagement |
| **Custom audience — engagement** | Users who interacted with your Reddit posts/ads | Warm audience expansion |
| **Custom audience — customer list** | Upload hashed emails from CRM | CRM-based targeting |
| **Lookalike** | Expand from custom audiences | Scale proven audiences |

**Targeting best practices:**
- Start with 5-10 highly relevant subreddits, not hundreds
- Put only 1 targeting method per ad group — don't mix community + interest
- Reddit recommends minimum 50,000 audience size for consistent delivery
- Smaller audiences work with higher bids and patience
- Test subreddit clusters separately — r/personalfinance and r/wallstreetbets have very different audiences

## Reddit Pixel & Conversions API

**Reddit Pixel** (client-side):
- JavaScript tag installed on your website
- Tracks PageView, ViewContent, Search, AddToCart, AddToWishlist, Purchase, Lead, SignUp, Custom events
- Install via Google Tag Manager, Shopify app, or manual code
- Verify with Reddit Pixel Helper browser extension
- Limited by ad blockers and iOS ATT — Safari ITP can erase 30-40% of pixel data

**Conversions API (CAPI)** (server-side):
- Sends events from your server directly to Reddit's servers
- Not affected by ad blockers, cookie restrictions, or browser limitations
- Setup: Events Manager → Conversions API → Generate Token
- Match keys: email, IP, user agent, click ID — more keys = better attribution
- Reddit recommends hybrid Pixel + CAPI for complete tracking

**Attribution model**:
- Default: 1-day view, 28-day click
- Critical insight: 96% of users who convert after seeing a Reddit ad don't click on it. Most purchases happen within 10 days of exposure. Last-click attribution dramatically underreports Reddit's impact.
- Use view-through attribution or run brand lift studies to measure true impact

## Bidding & budget

| Strategy | How it works | When to use |
|---|---|---|
| **Manual CPC** | You set max CPC | Full control, experienced advertisers |
| **Manual CPM** | You set max CPM | Awareness campaigns |
| **Target CPA** | Reddit's AI optimizes for your target cost-per-action | Conversion campaigns with 50+ conversions |
| **Maximize Conversions** | Reddit spends budget to get the most conversions | When you have budget flexibility |
| **Maximize Clicks** | Reddit optimizes for clicks | Traffic campaigns |

**Budget guidelines:**
- Minimum $5/day per campaign, but effective optimization needs $50-100/day
- At $5/day with $2 CPC, you get 2-3 clicks — not enough for the algorithm to learn
- Reddit uses a second-price auction — you pay just above the next-highest bid
- Allow 3-7 days for delivery to stabilize before optimizing
- Automated bidding delivers 10-20% lower CPAs than manual on average

## Cost benchmarks

| Metric | Typical range | Notes |
|---|---|---|
| CPC | $0.20-$4.00 | $0.50-$2.00 for B2B/SaaS |
| CPM | $0.50-$15.00 | As low as $0.20 in niche subreddits |
| CPV | $0.02-$0.08 | Video views |
| CPA | Varies by vertical | 40% lower than Meta on average post-2025 |

## Lead Gen Ads

Reddit Lead Gen Ads capture leads directly within the Reddit feed — no landing page needed:
- Pre-filled fields from Reddit profile (name, email)
- Custom form fields
- Zapier integration: trigger on new lead → push to CRM, email platform, Google Sheets
- Setup: Business Manager → Events Manager → Lead Gen → Zapier connection
- Typical CPL: 30-50% lower than Meta Lead Ads in B2B niches

## Business Manager

- **Multi-account management**: Manage multiple ad accounts from one business
- **Partner collaboration**: Invite agencies or partners to co-manage campaigns
- **Permission levels**: Admin, Analyst, Advertiser roles
- **Shared assets**: Ad profiles, credit lines, payment methods across partners

For detailed API reference, see references/reddit-ads-api-reference.md.
