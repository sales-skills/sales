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
- [In Retention.com](#in-retentioncom)
- [In Clearbit](#in-clearbit)
- [In SendPulse](#in-sendpulse)
- [In AdRoll](#in-adroll)

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
- **Upscribe**: Referral program tool that integrates with Kit, Mailchimp, Beehiiv, and others
- **Partner Network**: Paid recommendations marketplace — get paid newsletters to recommend yours
- **Pricing**: From $99/mo or per-subscriber pricing

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

### In Retention.com
- **Identity resolution for list growth**: Identifies anonymous website visitors using third-party licensed data and adds them to your email/SMS lists automatically — no opt-in form required
- **Grow product**: Claims 10x email list growth by converting anonymous visitors to known contacts. Contacts are pushed directly to your ESP (Klaviyo, Mailchimp, etc.)
- **Match rates**: Claims ~35% identification rate, but independent reports show 15-25%. US-only database.
- **Engagement caveat**: Grow contacts engage at ~3% CTR vs ~12% for opted-in subscribers. They didn't ask to hear from you, so treat them differently — lower frequency, higher-value offers, faster sunsetting.
- **Deliverability risk**: Higher spam complaint rates than organic lists. Use a separate sending subdomain and aggressive non-engager cleanup.
- **Compliance**: CAN-SPAM compliant (implicit consent model), NOT GDPR compliant. Only use for US traffic.
- **Pricing**: From $300/mo a la carte, $500/mo bundled. Annual contracts required.
- **Best for**: Ecommerce/DTC brands with 50K+ monthly US visitors who want to grow their email list beyond opt-in forms. Pair with a strong deliverability strategy.
