# Platform-Specific Funnel Building Guide

Detailed per-platform funnel setup — page builders, checkout integration, A/B testing, automation, and best practices.

## Table of contents

- [In Groove.cm](#in-groovecm-detailed)
- [In ClickFunnels](#in-clickfunnels)
- [In GoHighLevel](#in-gohighlevel)
- [In Kartra](#in-kartra)
- [In WordPress (+ Elementor or Thrive)](#in-wordpress--elementor-or-thrive)
- [In Closum](#in-closum)
- [In Mailchimp](#in-mailchimp)
- [In GetResponse](#in-getresponse)
- [In Kit](#in-kit)
- [In SendPulse](#in-sendpulse)
- [In VWO](#in-vwo)
- [In Other Tools](#in-other-tools)

## In Groove.cm (Detailed)

Groove.cm bundles funnel building, email, membership, and checkout into one ecosystem. Key components for funnels:

- **GroovePages** — Drag-and-drop page builder. Use "Funnel" mode (not "Site" mode) to create multi-step funnels with built-in page sequencing.
  - Create a new funnel project, then add pages as steps (opt-in, sales page, upsell, thank-you).
  - Use Groove's global blocks for consistent headers/footers across funnel steps.
  - Enable the built-in countdown timer element for urgency — it syncs across pages.
  - For split testing, duplicate a page within the funnel and use Groove's A/B test toggle. Traffic splits evenly by default.
- **GrooveSell** — Native checkout. Create products, then attach order forms directly to funnel pages. Set up order bumps and one-click upsells within GrooveSell (not GroovePages).
  - Upsell/downsell sequences are configured in GrooveSell under "Funnels" > "Upsell Flows."
  - Use GrooveSell's built-in affiliate program (GrooveAffiliate) for launch funnels.
- **GrooveMail** — Trigger post-funnel email sequences based on purchase or opt-in tags. Connect tags between GrooveSell and GrooveMail for segmentation.
- **GrooveMember** — If your funnel delivers a course or membership, GrooveMember handles access. Link product purchases in GrooveSell to membership levels.
- **Tips**: Groove's page load speed depends on image optimization — compress all images before uploading. Use Groove's built-in analytics (GroovePages > Stats) for page-level metrics, but supplement with Google Analytics or a pixel for traffic-source attribution.

## In ClickFunnels

- Use the funnel template library as a starting point — filter by funnel type (opt-in, sales, webinar, etc.).
- Each funnel step maps to a page. Drag to reorder steps in the funnel flow view.
- A/B split tests: click "Create Variation" on any funnel step. Set traffic split percentages.
- One-click upsells require Stripe or authorized.net with OTO enabled. Configure in the funnel step settings.
- Use the "Stats" tab for per-step conversion tracking. Add Facebook Pixel and Google Analytics via the tracking code settings.

## In GoHighLevel

- Build funnels under "Sites" > "Funnels." Add steps, assign templates or build from scratch.
- GoHighLevel excels at combining funnels with CRM pipelines — trigger automations when a contact hits a funnel step.
- Use "Workflows" (automations) to move contacts through pipeline stages based on funnel actions (opt-in, purchase, application submitted).
- Split testing is available per funnel step. Forms and surveys are native — useful for application funnels.
- Integrate with Stripe for payments. Upsell flows are configured via the order form settings.

## In Kartra

- Kartra's funnel builder ("Sequences") lets you visually map the entire funnel flow including conditional branching.
- Behavioral adaptive marketing: Kartra can show different page content based on tags, purchase history, or lead score.
- Helpdesks, memberships, and email are all native — strong for all-in-one setups.
- Use Kartra Checkouts for order bumps and upsells. Configure "Upsell/Downsell" under the product settings.
- Analytics: Kartra tracks end-to-end funnel metrics natively with revenue attribution.

## In WordPress (+ Elementor or Thrive)

- Use a dedicated funnel plugin: CartFlows, WooFunnels (FunnelKit), or Thrive Suite.
- **CartFlows / FunnelKit**: Create funnel flows (opt-in > sales > upsell > thank-you), assign page builder templates, connect to WooCommerce for checkout.
- **Thrive Architect + Thrive Optimize**: Build pages in Thrive, use Thrive Optimize for A/B testing. Pair with Thrive Leads for opt-in forms.
- **Elementor + third-party**: Build pages in Elementor, use a separate checkout (ThriveCart, SamCart) embedded via iframe or redirect.
- WordPress funnels require more setup but offer full control over hosting, speed, and SEO.

## In Closum

Closum offers landing pages and forms as part of its omnichannel marketing automation platform:

- **Drag-and-drop builder**: Visual page builder — no coding required. Build landing pages with forms, CTAs, and lead capture elements
- **Pop-ups**: Timed, exit-intent, or scroll-triggered pop-ups for lead capture
- **Forms**: Embedded or pop-up forms for newsletter signups, lead magnets, event registrations
- **Dynamic segmentation**: Auto-tag and segment contacts based on which form or landing page they convert on
- **Automation integration**: Connect landing page form submissions directly to Closum automation workflows — trigger welcome emails, SMS confirmations, or WhatsApp messages automatically
- **Cross-channel follow-up**: Unlike most funnel builders, Closum natively follows up across email, SMS, WhatsApp, Telegram, and Web Push — no external tools needed
- **Plan limits**: Landing pages require the Advanced plan (EUR 35/mo, 15 pages included) or the add-on (EUR 15/mo for 4 pages). Not available on Zero or Growth plans.
- **Best for**: Lead capture funnels where the follow-up sequence needs to span multiple channels (email + SMS + WhatsApp). Not ideal for complex multi-step sales funnels with upsells/downsells — use ClickFunnels or Groove.cm for those.

## In Mailchimp

Mailchimp offers landing pages and basic funnel capabilities as part of its email marketing platform:

- **Landing pages**: Drag-and-drop builder with templates. Free on all plans (including Free tier). Good for opt-in pages, lead magnets, and event registrations.
- **Signup forms**: Embedded forms, pop-up forms, and hosted signup pages. Auto-connect to audience lists and trigger automations.
- **Website builder**: Basic website builder included — suitable for simple sites but not a full funnel builder.
- **Customer Journey integration**: Landing page signups feed directly into Customer Journey automations — trigger welcome sequences, tag-based segmentation, and nurture flows automatically.
- **Limitations**: Mailchimp is NOT a full funnel builder. No multi-step funnel flows, no upsell/downsell pages, no checkout/order forms, no A/B testing on landing pages (only on emails). For multi-step funnels with checkout, use ClickFunnels, Groove.cm, or GoHighLevel and connect to Mailchimp for email follow-up.
- **Best for**: Simple lead capture funnels (landing page → email sequence) where Mailchimp is already the email tool. For anything beyond opt-in capture, use a dedicated funnel builder and integrate.
- **Retargeting**: Mailchimp can create Facebook, Instagram, and Google retargeting audiences from your contacts — useful for funnel retargeting without a separate ad tool.

## In GetResponse

GetResponse offers Conversion Funnels — pre-built funnel templates that combine landing pages, emails, and webinars into a guided conversion path (Marketer plan+ required):

- **Funnel templates**: Lead magnet funnel, sales funnel, webinar funnel, list building funnel. Each template includes the necessary pages and email sequences pre-configured.
- **Landing pages**: Drag-and-drop builder with templates, forms, popups, and custom domains. Available on all paid plans.
- **Visual funnel dashboard**: See conversion rates at each stage — traffic → registration → email engagement → sale. Identify drop-off points visually.
- **Integrated checkout**: Connect Stripe, PayPal, or Square for payment collection within sales funnels. Order forms embedded in funnel pages.
- **Email follow-up**: Autoresponders and automation workflows trigger based on funnel stage — welcome emails for opt-ins, reminder sequences for webinar registrations, post-purchase follow-up.
- **Webinar funnels**: Unique to GetResponse — combine the built-in webinar platform (Creator plan+) with funnel pages for end-to-end webinar marketing. Registration → reminders → live event → replay → offer.
- **E-commerce funnels**: Shopify/WooCommerce integration enables abandoned cart funnels with product data.
- **Plan limits**: Conversion funnels require Marketer plan ($59/mo) or higher. Landing pages alone are available on all paid plans.
- **Best for**: Marketers who want funnel functionality integrated with email marketing, webinars, and courses in one platform. Not as flexible as ClickFunnels or Groove.cm for complex multi-step funnels with custom upsell flows, but simpler to set up for standard funnel types.

## In Kit

Kit offers landing pages and forms as growth tools for building email lists and selling digital products. For full platform help, use `/sales-kit`.

- **Landing pages**: Unlimited on all plans (including free). Hosted on Kit or custom domain. Template-based — optimized for email capture and digital product sales.
- **Opt-in forms**: Inline, modal, slide-in, sticky bar. Embed on any website. Each form can trigger different Visual Automations.
- **Creator Profile**: Free micro-website / bio link page — consolidate social media CTAs into one link.
- **Commerce pages**: Sell digital products and subscriptions with built-in checkout (Stripe required, 0.6% Kit fee).
- **A/B testing**: Not available on landing pages (only on email subject lines and content).
- **Automation integration**: Form submissions trigger Visual Automations — welcome sequences, tagging, conditional branching.
- **Best for**: Lead magnet funnels (landing page → email sequence) and digital product sales pages for creators. Not a full multi-step funnel builder — no upsell/downsell page flows, no order bumps. For complex multi-step funnels, use ClickFunnels or Groove.cm and connect to Kit for email follow-up.

## In SendPulse

SendPulse includes a drag-and-drop website and landing page builder as part of its marketing platform. For full platform help, use `/sales-sendpulse`.

- **Landing pages & websites**: Drag-and-drop builder with pre-built templates for lead capture, sales pages, and webinar registration. Free plan includes 1 website with up to 5 pages.
- **Subscription forms & pop-ups**: Built-in opt-in forms and pop-ups for lead capture — embed on SendPulse-hosted pages or external sites.
- **Custom domains**: Connect your own domain to SendPulse-hosted pages for a branded experience.
- **Platform integration**: Pages connect natively to SendPulse mailing lists, Automation 360 workflows, and CRM — form submissions flow directly into email sequences and deal pipelines.
- **Limitations**: SendPulse's website builder is simpler than dedicated funnel builders (ClickFunnels, Groove.cm). No multi-step funnel flows, no upsell/downsell pages, no order bumps or built-in checkout. For complex funnels, use a dedicated funnel builder and connect to SendPulse for email/SMS/push follow-up.
- **Best for**: Landing pages and simple sales pages where SendPulse is already the email/automation tool. Strong choice for lead magnet funnels (landing page → email sequence) that leverage SendPulse's multi-channel follow-up (email, SMS, web push, chatbots).

## In SWAI

SWAI.ai is an AI-Native Revenue OS that autonomously builds and optimizes funnels. For full platform help, use `/sales-swai`.

- **Goal-driven funnel creation**: Set a goal in plain English ("I need more qualified leads") and SWAI builds the entire funnel — landing page, email sequence, chat widget, and ads — automatically.
- **Landing pages**: Recently rebuilt native builder with full customization, AI-powered forms, script injection, and brand-tailored design. No third-party builder dependency.
- **AI forms**: Forms powered by AI agents that qualify and route leads intelligently based on responses.
- **Continuous optimization**: SWAI auto-tests and optimizes funnel elements — page design, email content, chat responses — without manual A/B test setup.
- **Integrated channels**: Funnels span email, landing pages, AI chat widget, and ad campaigns as a unified system rather than separate tools.
- **Limitations**: Less granular control than dedicated funnel builders (ClickFunnels, Groove.cm). No manual multi-step funnel flow editor — the AI decides the funnel structure based on your goal. No native checkout/upsell/downsell pages for e-commerce funnels.
- **Best for**: Agencies and small businesses that want AI to handle funnel creation and optimization end-to-end. Not ideal for teams that want manual control over every funnel step or complex e-commerce checkout flows.

## In MailerLite

MailerLite offers landing pages and basic funnel capabilities as part of its email marketing platform. For full platform help, use `/sales-mailerlite`.

- **Landing pages**: Drag-and-drop builder with templates, custom domains, SEO settings. 10 on Free, unlimited on paid plans. Good for opt-in pages, lead magnets, and product sales pages.
- **Signup forms**: Pop-up, embedded, and promotion (Advanced+). Exit-intent, scroll, and time-delay triggers. Auto-connect to groups and trigger automations.
- **Website builder**: Basic website and blog builder — suitable for simple sites but not a full funnel builder.
- **Automation integration**: Form and landing page signups feed directly into automation workflows — trigger welcome sequences, group assignments, and follow-up emails.
- **Digital products**: Sell ebooks and downloads directly via MailerLite with Stripe integration. 1 product on Free, 3 on Growing Business, unlimited on Advanced.
- **Paid newsletters**: Recurring subscription payments via Stripe — a funnel for content monetization.
- **E-commerce integration**: Shopify/WooCommerce connection enables abandoned cart and post-purchase funnel automation.
- **Limitations**: MailerLite is NOT a full funnel builder. No multi-step funnel flows, no upsell/downsell pages, no order bumps, no A/B testing on landing pages (only on emails). For multi-step funnels with checkout, use ClickFunnels, Groove.cm, or GoHighLevel and connect to MailerLite for email follow-up.
- **Best for**: Simple lead capture funnels (landing page → email sequence) and digital product sales where MailerLite is already the email tool. For anything beyond opt-in capture and basic product sales, use a dedicated funnel builder and integrate.

## In VWO

VWO (Visual Website Optimizer) is primarily an A/B testing and experimentation platform — it doesn't build funnels, but it tests and optimizes every step of them. For full platform help, use `/sales-vwo`.

- **A/B testing on funnel pages**: Use VWO Testing to run A/B, multivariate, or split URL tests on any funnel page. Visual editor for simple text/image changes, code editor for complex modifications.
- **What to test**: Follow the funnel A/B testing priority order (headline → CTA → hero image → social proof → price presentation → page length). VWO's visual editor makes headline and CTA tests fast to set up.
- **Heatmaps + session recordings**: Use VWO Insights to understand where visitors drop off. Click maps show engagement hotspots, scroll maps reveal if visitors reach the CTA, session recordings show individual user journeys through the funnel.
- **Personalization**: VWO Personalize can show different funnel content to different visitor segments (returning vs new, geo-location, traffic source, device type). Test personalized vs default with built-in A/B testing.
- **Feature flags for checkout**: Use VWO Feature Experimentation to gradually roll out new checkout flows or pricing page redesigns to a percentage of users before going site-wide.
- **Statistical guidance**: VWO uses Bayesian statistics. Wait for 95%+ probability to be best and at least 100 conversions per variation. Run for a minimum of 7 days to capture weekday/weekend variation.
- **SmartCode placement**: VWO's JavaScript snippet must be in `<head>` loaded synchronously to avoid flash of original content (FOOC). This applies to every funnel page being tested.
- **Pricing note**: A/B testing starts on the Growth plan (~$198-$314/mo). Personalization and advanced features require Pro or Enterprise. MTU quota exhaustion stops all tests mid-month.
- **Best for**: Optimizing existing funnel pages through systematic testing. Pair VWO with a funnel builder (ClickFunnels, Groove, GoHighLevel) — VWO tests what you've built, it doesn't build the funnel.

## In Other Tools

- **Unbounce / Leadpages**: Best for standalone landing pages and opt-in pages rather than full multi-step funnels. Use Unbounce Smart Traffic for AI-driven A/B testing. Connect to a separate checkout tool (ThriveCart, Stripe) and email tool.
- **Systeme.io**: Budget-friendly all-in-one. Supports funnels, email, courses, and checkout. Limited design flexibility but fast to launch.
