# Platform-Specific Audience Growth Guide

Detailed per-platform audience growth features — opt-in forms, landing pages, referral programs, cross-promotion networks, and list-building tools.

## Table of contents

- [In Kit](#in-kit)
- [In Beehiiv](#in-beehiiv)
- [In SparkLoop](#in-sparkloop)
- [In Mailchimp](#in-mailchimp)
- [In Substack](#in-substack)
- [In Omnisend](#in-omnisend)
- [In ActiveCampaign](#in-activecampaign)
- [In GetResponse](#in-getresponse)
- [In ZoomInfo (FormComplete)](#in-zoominfo-formcomplete)
- [In Leadpages](#in-leadpages)
- [In Retention.com](#in-retentioncom)
- [In Clearbit](#in-clearbit)
- [In SendPulse](#in-sendpulse)
- [In AdRoll](#in-adroll)
- [In Buttondown](#in-buttondown)

### In Kit
- **Landing pages**: Unlimited on all plans (including free) — use for lead magnets
- **Forms**: Inline, modal, slide-in, sticky bar — embed on any website
- **Creator Recommendations**: Free cross-promotion network — other Kit creators recommend you after their opt-in confirmation
- **Paid recommendations**: Pay $1–$5+ per subscriber acquired through Creator Recommendations
- **Newsletter referral system**: Pro plan ($66/mo) — built-in subscriber referral program with milestone rewards
- **Creator Profile**: Free micro-website / bio link page for consolidating social CTAs
- **Double opt-in**: Enabled by default — good for deliverability but reduces conversion 10–20%

### In Beehiiv
- **Boosts**: Marketplace where other newsletters promote yours for $1–$3/subscriber
- **Referral program**: Built-in milestone-based referral system (like Morning Brew's)
- **Landing pages**: Built-in, optimized for newsletter sign-up
- **Recommendations**: Suggest other newsletters after opt-in (free mutual promotion)

### In SparkLoop
- **Referral programs** ($2K/year): Subscriber reward system — readers share a unique referral link and earn rewards at milestone counts. Automated digital/physical reward fulfillment. 2-click ESP integration with 25+ platforms. Anti-fraud detection built in. Free for Kit Creator Pro users.
- **Paid recommendations** (free): Earn $2–$7+ per confirmed subscriber by recommending other newsletters. Post-opt-in and in-email placement. SparkLoop takes 20% + 3.5% fees. Earnings depend heavily on subscriber geography (US/UK/CA earn most).
- **Partner programs** ($2K/month min): Get other newsletters to recommend yours. Set engagement criteria (e.g., must open within 30 days) to ensure quality. Access to thousands of vetted publishers.
- **Free recommendations** (free): Unpaid cross-promotion with matched newsletters. Claims 2-3x faster growth when paired with 3 similar newsletters.
- **Upscribe widget**: Post-opt-in recommendation widget with auto-pilot mode. Full API for custom implementations.
- **Not supported**: Ghost, Substack, Flodesk (lack necessary API access)

### In Mailchimp
- **Landing pages**: Built-in landing page builder (all plans)
- **Signup forms**: Embedded, popup, and hosted forms
- **No built-in referral system** — use SparkLoop or ReferralHero
- **Audience dashboard**: Track growth sources (organic, import, API, integrations)

### In Substack
- **Recommendations**: Mutual recommendations with other Substack writers
- **Notes**: Social feed feature for discovery within Substack
- **No landing pages or forms** — Substack is the landing page
- **Network effects**: Substack's internal discovery can drive significant growth

### In Omnisend
- **Popups**: Popup, embedded form, landing page, Wheel of Fortune (gamified spin-to-win), teaser
- **Multi-step forms**: Collect email first, then SMS consent on second step — increases overall opt-in rate and builds SMS list simultaneously
- **Targeting**: Show based on URL, device, referral source, time on page, scroll depth, exit intent, new vs returning visitor
- **Discount delivery**: Auto-apply discount codes to form submissions — strong for ecommerce opt-in incentives
- **A/B testing**: Test form design, copy, and offers
- **Ecommerce focus**: Forms integrate directly with Shopify/WooCommerce/BigCommerce for product-aware targeting
- **Limitation**: No built-in referral program or cross-promotion network — use SparkLoop or custom solution

### In ActiveCampaign
- **Forms**: Inline, floating bar, floating box, modal — with conditional fields
- **Landing pages**: Drag-and-drop builder on Plus plan+
- **Site tracking**: Track website behavior to trigger opt-in offers based on pages visited
- **No built-in referral system** — integrate SparkLoop or custom solution

### In GetResponse
- **Landing pages**: AI-powered builder with conversion funnels
- **Webinars**: Built-in webinar tool (use as lead magnet) — Plus plan+
- **Forms & popups**: Multiple form types with A/B testing
- **Conversion funnels**: Pre-built signup funnels combining landing page + form + automation

### In ZoomInfo (FormComplete)
- **Form shortening** — auto-fill form fields using ZoomInfo data when a visitor's email or company is recognized. Reduces friction by removing fields the system already knows.
- **Progressive profiling** — show only 2-3 essential fields (email, name); ZoomInfo enriches the rest (company, title, phone, industry, employee count) behind the scenes.
- **Partial submission capture** — even if a visitor abandons the form, ZoomInfo captures and enriches whatever data was entered.
- **Integration** — works with Marketo, HubSpot, Pardot, and custom HTML forms. Install via JavaScript snippet.
- **WebSights** — identifies companies visiting your site (even without form fills) via IP-to-company matching. Feeds visitor data into advertising retargeting or sales alerts.
- **Conversion impact** — shorter forms typically increase conversion rates by 30-50%. FormComplete maintains data richness while reducing visible fields.

### In Clearbit
- **Form shortening** — auto-populate form fields when a visitor enters their email. Uses the Person Enrichment API to look up the email in real-time and pre-fills company name, title, phone, employee count, and industry.
- **Radical field reduction** — reduces visible form fields from 8–10 down to 1–2 (just email). Improves conversion rates by 20–50%.
- **HubSpot native** — available as a built-in feature in HubSpot forms via Breeze Intelligence. No custom code required.
- **Non-HubSpot implementation** — for other platforms, implement via JavaScript calling the streaming Person API. On email field blur, fetch enrichment data and pre-fill remaining fields.
- **Autocomplete API** — suggest company names as the user types (typeahead). Reduces friction on company name fields and ensures clean, standardized data.

### In SendPulse
- **Pop-up forms**: Exit-intent, timed, scroll-triggered, and floating bar — multiple trigger types to capture visitors at the right moment
- **Subscription forms**: Embed forms directly in landing pages or websites for inline list building
- **A/B testing**: Test pop-up variations (design, copy, timing) to optimize conversion rates
- **Smart display rules**: Page targeting, frequency capping, and device targeting — control exactly who sees which pop-up and how often
- **Pop-up analytics**: Track impressions, conversions, and conversion rate per form to identify top performers
- **API**: `GET /popups` and `GET /popups/{id}/statistics` for programmatic access to form data and performance metrics
- **Multi-channel follow-up**: Contacts collected via pop-ups are automatically added to mailing lists for email, SMS, and push notification follow-up sequences
- **Free plan**: Pop-up builder included on the free tier — no cost to get started with audience growth forms

### In AdRoll
- **Retargeting for list growth**: Use AdRoll's website retargeting pixel to serve ads to visitors who didn't opt in — drive them back to lead magnet landing pages or newsletter signup pages
- **Lookalike audiences**: AdRoll builds lookalike audiences from your existing customer/subscriber lists — find new prospects similar to your best subscribers
- **Cross-channel reach**: Display, social (Facebook/Instagram), native ads, and email retargeting — multiple touchpoints to convert visitors to subscribers
- **Email retargeting**: Send targeted emails to known contacts who visited but didn't convert — requires AdRoll email integration or matched contact lists
- **Dynamic creative**: Personalize ad content based on which pages visitors viewed — show relevant lead magnet offers based on content interest
- **Ecommerce focus**: Deep Shopify/BigCommerce/WooCommerce integration — retarget shoppers who browse but don't subscribe, offer discount-for-email swaps
- **Best for**: Ecommerce and D2C brands using paid retargeting to grow subscriber lists alongside customer acquisition

### In MailerLite
- **Signup forms**: Pop-up, embedded, and promotion forms (promotion requires Advanced plan). Triggers: exit-intent, scroll depth, time delay. GDPR consent checkbox option.
- **Landing pages**: Drag-and-drop builder with templates (10 on Free, unlimited on paid). Custom domains supported. SEO settings (title, description, slug).
- **Double opt-in**: Supported and recommended — MailerLite's strict anti-spam policy makes clean lists essential.
- **Website builder**: Full website and blog builder with signup form integration — combine content marketing with list building.
- **E-commerce forms**: Shopify/WooCommerce integration auto-adds customers to MailerLite groups on purchase.
- **No built-in referral system** — use SparkLoop or a custom solution.
- **iPad subscribe app**: Offline subscriber collection at events, trade shows, and retail. Syncs when reconnected to internet.
- **Best for**: Small businesses and solopreneurs using MailerLite for email who want native signup forms and landing pages without a separate tool. 10 free landing pages is generous for getting started.

### In Leadpages

Leadpages offers landing pages and pop-ups as lead capture tools. For full platform help, use `/sales-leadpages`.

- **Landing pages**: 250+ templates optimized for lead capture. Grid-based drag-and-drop builder. Templates filterable by conversion rate — pick the highest performers and customize.
- **Pop-ups**: Exit-intent, timed, scroll-triggered, and click-triggered. Deploy on any website via JavaScript embed code — not limited to Leadpages-hosted pages.
- **Alert bars**: Persistent top/bottom notification bars for promotions, announcements, or email capture. Deploy site-wide.
- **Leadmeter**: Conversion scoring tool that analyzes your page and suggests specific improvements. Run before publishing every page.
- **Lead enrichment**: Auto-appends firmographic data (industry, company size, location) to form submissions. Useful for segmenting without extra form fields.
- **Form optimization**: Keep forms to email-only for highest conversion. Lead enrichment fills in the rest behind the scenes.
- **A/B testing**: Split test landing page variants to optimize opt-in rates. **Pro plan only ($99/mo)** — Standard plan cannot A/B test.
- **WordPress plugin**: Publish Leadpages pop-ups and landing pages directly on your WordPress site.
- **No built-in referral system** — use SparkLoop or custom solution.
- **No cross-promotion network** — unlike Kit Creator Recommendations or Beehiiv Boosts.
- **Plan limits**: Standard ($49/mo) caps at 5 landing pages. Pro ($99/mo) is unlimited.
- **Best for**: Small businesses and solopreneurs who need standalone lead capture pages with pop-ups. Stronger visual builder than email platforms (Mailchimp, Kit) but no freeform layout like Unbounce.

### In Retention.com
- **Identity resolution for list growth**: Identifies anonymous website visitors using third-party licensed data and adds them to your email/SMS lists automatically — no opt-in form required
- **Grow product**: Claims 10x email list growth by converting anonymous visitors to known contacts. Contacts are pushed directly to your ESP (Klaviyo, Mailchimp, etc.)
- **Match rates**: Claims ~35% identification rate, but independent reports show 15-25%. US-only database.
- **Engagement caveat**: Grow contacts engage at ~3% CTR vs ~12% for opted-in subscribers. They didn't ask to hear from you, so treat them differently — lower frequency, higher-value offers, faster sunsetting.
- **Deliverability risk**: Higher spam complaint rates than organic lists. Use a separate sending subdomain and aggressive non-engager cleanup.
- **Compliance**: CAN-SPAM compliant (implicit consent model), NOT GDPR compliant. Only use for US traffic.
- **Pricing**: From $300/mo a la carte, $500/mo bundled. Annual contracts required.
- **Best for**: Ecommerce/DTC brands with 50K+ monthly US visitors who want to grow their email list beyond opt-in forms. Pair with a strong deliverability strategy.

### In Ghost

Ghost has built-in member signup and management — no external tools needed for basic list building.

**Signup methods**:
- **Portal**: Customizable signup/login widget that appears on your site. Configure via Ghost Admin → Settings → Membership → Customize Portal
- **Embedded forms**: Generate signup forms to embed on external sites or landing pages
- **Content gating**: Use paid-only posts as lead magnets — readers must sign up to access
- **Social accounts**: Members sign in via email magic link (no passwords)

**Growth features**:
- **Offers**: Create discount codes for paid tiers — shareable unique URLs for promotion campaigns
- **Recommendations**: Recommend other Ghost publications (and get recommended back) — Ghost's built-in cross-promotion network
- **Newsletter visibility**: Choose which newsletters appear on the signup portal
- **Custom landing pages**: Build with Ghost pages (full CMS) instead of needing a separate tool

**Referral programs**:
- Ghost has no built-in referral/reward system
- Workaround: Use SparkLoop or Viral Loops via Zapier integration (requires Publisher plan)
- Alternative: Use Ghost's Recommendations feature for organic cross-promotion

**Limitations**:
- No pop-ups or exit-intent forms natively — use third-party tools (OptinMonster, Sumo) via code injection
- No A/B testing on signup forms
- No progressive profiling or multi-step forms
- Recommendations are Ghost-to-Ghost only — can't cross-promote non-Ghost newsletters

**Best for**: Content creators who want signup built into their publishing platform. If you need advanced list building (pop-ups, A/B testing, paid recommendations), pair Ghost with SparkLoop or use Kit/Beehiiv alongside.

### In Buttondown

Buttondown is a minimal newsletter platform focused on simplicity, privacy, and API access.

**Subscriber acquisition**:
- **Hosted archive**: Every newsletter gets a public archive page — visitors can subscribe directly from it. Optional custom domain hosting ($29/mo add-on).
- **Embeddable forms**: Simple HTML form embeds for any website. No drag-and-drop form builder — just a form snippet.
- **API-driven signups**: Full REST API (`POST /v1/subscribers`) on all plans including free. Build custom signup forms with any frontend framework.
- **Concierge migration**: Free migration service from any platform — Buttondown staff handle the import within one business day.

**Growth tools**:
- **Subscriber referrals**: Built-in subscriber referral settings (self-serve, added Feb 2025). Subscribers can share a referral link.
- **No discovery network**: Unlike Substack or Beehiiv Boosts, Buttondown has no built-in cross-promotion network. Growth is primarily through your own channels.
- **No paid recommendations**: Unlike Kit Creator Recommendations, Buttondown doesn't offer pay-per-subscriber cross-promotion.
- **RSS feed**: Newsletter published as RSS — readers can subscribe via RSS readers as an alternative to email.

**Limitations**:
- No pop-up or exit-intent form builder — embed forms manually or use a third-party tool
- No A/B testing on opt-in forms
- No landing page builder — use your own website or a third-party tool
- No referral rewards/milestones (unlike Kit Pro or Beehiiv)

**Best for**: Developers and technical writers who prefer API-driven signups, Markdown editing, and minimal tooling. Pair with SparkLoop for referral programs or Paved for sponsor-driven growth.
