# SparkLoop Platform Reference

## Platform overview

SparkLoop is a newsletter growth and monetization platform specializing in referral programs, paid recommendations, and cross-promotion for newsletter creators. Founded by Manuel Frigerio and Louis Nicholls, acquired by Kit (ConvertKit) in June 2023. Trusted by thousands of newsletters including Morning Brew-scale operations. Target audience: newsletter operators, media brands, and publishers using third-party ESPs.

## Key modules

### Referral Programs ($2K/year add-on)
Subscriber reward system — readers share a unique referral link and earn rewards at milestones.
- **2-click ESP integration** — connects to 25+ email platforms
- **Automated reward fulfillment** — digital rewards (exclusive content, discount codes) and physical rewards (merch, stickers)
- **In-email referral widget** — embeds referral stats and sharing link directly in newsletters
- **Referral hub** — hosted landing page where subscribers track their progress and share
- **Anti-fraud protection** — detects same-IP referrals, disposable email addresses, and suspicious patterns
- **Milestone tiers** — set multiple reward tiers (e.g., 1 referral = sticker, 5 = t-shirt, 25 = premium access)
- **Free for Kit Creator Pro** — Kit Creator Pro subscribers get SparkLoop referral programs at no extra cost

### Paid Recommendations (free)
Earn $2–$7+ per confirmed subscriber by recommending other newsletters to your audience.
- **Post-opt-in placement** — recommendations appear after someone subscribes to your newsletter
- **In-email placement** — embed recommendation widgets inside your regular newsletters
- **Personalized matching** — SparkLoop's algorithm selects relevant newsletters based on your audience
- **Vetting** — SparkLoop manually vets all recommending newsletters for quality
- **Payouts** — monthly payouts via Stripe. SparkLoop takes 20% commission + 3.5% payment processing fees.
- **Geo-dependent earnings** — most advertisers target US, UK, and Canada subscribers. Non-English/non-Western audiences earn significantly less per recommendation.

### Partner Programs ($2K/month minimum)
Get other newsletters to recommend yours — the reverse of paid recommendations.
- **Minimum budget** — $2,000/month allocation required
- **Engagement criteria** — you set custom criteria (e.g., subscriber must open within 30 days) before you're charged
- **Network access** — thousands of vetted publishers in the SparkLoop Partner Network
- **Claims** — up to 100K engaged, US-based subscribers per month
- **Quality control** — subscribers that fail engagement criteria are rejected and you don't pay

### Free Recommendations (free)
Unpaid cross-promotion with complementary newsletters.
- **Matching** — SparkLoop matches you with 3+ similar newsletters
- **Claims** — 2-3x faster growth, 11% better engagement vs organic acquisition
- **No cost** — completely free for all SparkLoop users
- **Placement** — same post-opt-in and in-email widget as paid recommendations

### Upscribe (free)
Post-opt-in recommendation widget — shows newsletter recommendations immediately after someone subscribes.
- **Auto-pilot mode** — SparkLoop automatically selects and rotates recommendations
- **Manual mode** — you choose which newsletters to recommend
- **API access** — full API for custom Upscribe implementations (generate recommendations, submit subscriptions)
- **Country-aware** — pass subscriber's country code for geo-targeted paid recommendations
- **Consent requirement** — subscribers must explicitly opt in to recommended newsletters (compliance)

## Pricing and limits

| Feature | Price | Notes |
|---|---|---|
| Paid Recommendations | Free | Earn $2-$7+ per subscriber. SparkLoop takes 20% + 3.5% fees |
| Free Recommendations | Free | Unpaid cross-promotion |
| Partner Programs | $2K/month minimum | Budget for acquiring subscribers from partner newsletters |
| Referral Programs | $2K/year | Paid upfront. Free for Kit Creator Pro users |
| API access | Included | 120 requests per 60 seconds rate limit |

**Historical note**: Earlier pricing showed plans starting at $99/month. Current pricing structure appears to be freemium (recommendations free) with referral programs as the paid add-on.

## Integrations

### Supported ESPs (25+)
Kit (ConvertKit), Mailchimp, ActiveCampaign, HubSpot, Klaviyo, MailerLite, Brevo (SendInBlue), Drip, AWeber, Campaign Monitor, Customer.io, EmailOctopus, GetResponse, Marketo, PostUp, Sailthru, Beehiiv

### NOT supported
Ghost, Substack, Flodesk — these platforms lack the necessary API access for third-party referral/recommendation tools.

### Custom integrations
For unsupported ESPs, SparkLoop offers custom integration via API:
1. Transmit subscriber data to SparkLoop via API on subscribe/unsubscribe events
2. Receive data from SparkLoop via webhooks for referral events

### Other integrations
- **Zapier** — available for automation workflows
- **Direct API** — full REST API v2 for custom implementations

## Data model

### Key objects
- **Subscriber** — email, name, referral_code, referral_link, referral_count, status (confirmed/unsubscribed), UUID
- **Campaign** — referral campaign configuration (currently 1 per account)
- **Partner Profile** — your profile in the Partner Network
- **Upscribe** — recommendation widget configuration, auto_pilot toggle
- **Offer** — partner program offers available to you
- **Publication** — newsletter publication in the network

### Referral statuses
- `confirmed` — verified referral, counts toward milestones
- `pending` — awaiting verification (double opt-in not confirmed, engagement check pending)
- `rejected` — failed fraud check or engagement criteria

## Workflow setup

### Setting up Referral Programs
1. Connect your ESP (Account Settings → Integrations → select your ESP → authorize)
2. Create reward tiers (Dashboard → Rewards → Add reward → set milestone count)
3. Add referral widget to your email template (copy SparkLoop's HTML snippet into your ESP template)
4. Test the referral flow in incognito mode (don't use your own email — it won't generate a referral link for existing subscribers)
5. Announce the referral program to your list

### Setting up Paid Recommendations
1. Connect your ESP (same as above if not done)
2. Enable Upscribe widget (Dashboard → Upscribe → enable)
3. Choose auto-pilot (recommended for starting) or manually select newsletters
4. SparkLoop places recommendations on your post-opt-in confirmation page and optionally in-email
5. Monitor earnings in Dashboard → Analytics

### Setting up Partner Programs
1. Create a Partner Program (Dashboard → Partner Program → Create)
2. Set your budget (minimum $2K/month)
3. Define engagement criteria (e.g., subscriber must open at least 1 email within 30 days)
4. SparkLoop matches you with vetted publishers in the Partner Network
5. Monitor subscriber quality and adjust criteria as needed

## Deep dives

### Maximizing paid recommendation earnings
- **Subscriber geography matters most** — US/UK/CA subscribers earn 3-5x more than other geos
- **Placement optimization** — test post-opt-in widget vs in-email recommendations. Some audiences convert better on one vs the other
- **Quality over quantity** — SparkLoop's algorithm rewards newsletters with engaged audiences. Higher open rates → better recommendation matches → higher CPR
- **Don't over-recommend** — adding too many recommendation slots dilutes conversion rate per recommendation

### Referral program best practices
- **Start with 1 tier** — e.g., "Refer 3 friends, get exclusive content." Add more tiers once you see engagement data
- **Digital rewards first** — physical rewards (merch, stickers) have fulfillment complexity. Start with digital (exclusive newsletter, discount code, premium content access)
- **Fraud monitoring** — review referrals weekly for patterns (same IP, sequential emails, disposable domains). SparkLoop has built-in fraud detection but manual review catches edge cases
- **Announce prominently** — dedicate an entire email to launching the program. Then include the referral widget in every subsequent email

### SparkLoop vs alternatives
- **vs Beehiiv Boosts** — SparkLoop works with any ESP; Boosts requires Beehiiv. SparkLoop claims 2-5x higher payouts.
- **vs Kit Creator Recommendations** — Kit's system is native but only works within Kit. SparkLoop works cross-platform.
- **vs Viral Loops** — Viral Loops is template-based referral marketing for any product. SparkLoop is newsletter-specific with deeper ESP integrations and a built-in recommendation marketplace.
- **vs GrowSurf** — GrowSurf is a general referral platform. SparkLoop is purpose-built for newsletters with email-native widgets and the Partner Network.
