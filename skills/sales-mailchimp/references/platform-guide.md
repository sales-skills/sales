# Mailchimp Platform Guide

## Email marketing
- **Drag-and-drop editor**: Visual email builder with content blocks — no code required
- **Templates**: Pre-built templates on all plans; custom-coded HTML templates on Standard+
- **Broadcasts**: One-time email sends to a segment or full audience
- **Scheduling**: Schedule sends for a specific date/time or use send time optimization (Standard+) to deliver when each contact is most likely to engage
- **Send time optimization**: Machine learning picks the best send time per contact based on historical engagement — requires Standard plan or above
- **Personalization**: Merge tags for dynamic content (first name, company, custom fields)

## Customer Journey Builder
- **What it is**: Visual automation workflow builder — the primary automation tool in Mailchimp (Standard+ only)
- **Triggers**: Signup, purchase, tag added/removed, date-based, API event, abandoned cart, audience field change
- **Conditions**: If/else branching based on contact data, behavior, or purchase history
- **Actions**: Send email, send SMS, add/remove tag, update contact field, webhook, wait step
- **Wait steps**: Time delay or wait-until-condition for pacing the journey
- **Classic Automations**: Simpler single-path automations still available on all paid plans (welcome series, birthday, date-based)
- **Key limitation**: Customer Journey Builder requires Standard plan. Essentials only gets basic single-step classic automations.

## SMS marketing
- **Add-on for paid plans**: Not available on Free plan
- **Coverage**: 37 countries supported
- **Credit-based pricing**: Starting at $20 per 1,000 credits
- **MMS support**: Available on Standard and Premium plans, US and Canada only
- **Integration with journeys**: SMS steps can be added to Customer Journey Builder workflows alongside email steps
- **Compliance**: Built-in opt-in/opt-out management, TCPA and carrier compliance tools
- **Key limitation**: Credits expire monthly and do not roll over

## Audience management / CRM
- **Contacts**: Subscriber records with email, status, tags, merge fields, and activity history
- **Contact statuses**: Subscribed, unsubscribed, non-subscribed, cleaned, pending
- **Tags**: Flexible labels for organizing contacts — apply manually, via import, or via automations
- **Custom fields (merge fields)**: Add custom data fields to contacts (text, number, date, dropdown, etc.)
- **Segments**: Dynamic filters to slice your audience
  - Basic segments on Free and Essentials
  - Advanced segments with AND/OR logic on Standard
  - Predictive segments (likelihood to purchase, predicted demographics) on Premium
- **Behavioral targeting**: Target contacts based on email engagement, purchase history, website activity
- **Predicted demographics**: AI-predicted age and gender segments (Standard+)
- **Signup forms**: Embedded forms, pop-up forms, landing page forms, hosted signup pages
- **Surveys**: Collect feedback and preferences from contacts
- **Groups**: Contact-facing interest categories for preference management

## Content Studio
- **Asset management**: Central library for images, files, and creative assets
- **Generative AI (Intuit Assist)**: AI-powered content generation for email copy and subject lines
- **Subject line helper**: AI suggestions and performance predictions for subject lines
- **Dynamic content**: Show different content blocks to different segments within a single email (Standard+)

## Landing pages & website builder
- **Drag-and-drop builder**: No-code landing page and website creation
- **Forms**: Embedded signup forms and pop-ups to capture leads
- **Pop-ups**: Customizable pop-up forms triggered by scroll, time, or exit intent
- **Free on all plans**: Landing pages are available even on the Free plan — no additional cost

## A/B testing and multivariate testing
- **A/B testing**: Test two variants of subject line, from name, send time, or content. Available on all paid plans (Essentials, Standard, Premium).
- **Multivariate testing**: Test up to 8 combinations of subject line, from name, send time, and content simultaneously. **Premium plan only.**
- **Winner selection**: Automatic winner selection based on opens, clicks, or revenue after a configurable test duration

## Transactional email (Mandrill)
- **What it is**: Triggered one-to-one emails — order confirmations, password resets, shipping notifications, account alerts
- **Separate API**: Mandrill has its own API at `https://mandrillapp.com/api/1.0/`
- **Authentication**: API key included in the POST request body (all Mandrill methods are POST)
- **Pricing**: Separate add-on pricing based on email volume — not included in any marketing plan by default
- **Requirement**: Must be on Standard plan or above to add the Mandrill add-on
- **Templates**: Mandrill supports its own template system with Handlebars merge tags
- **Webhooks**: Message event webhooks — send, deferral, hard-bounce, soft-bounce, delivered, open, click, spam, unsub, reject

## Retargeting ads
- **Facebook & Instagram**: Create retargeting ad campaigns targeting Mailchimp contacts or website visitors
- **Google retargeting**: Retarget Mailchimp contacts via Google Ads
- **Lookalike audiences**: Build lookalike audiences from your Mailchimp contact lists
- **Managed from Mailchimp**: Create and manage ad campaigns without leaving the Mailchimp dashboard

## Analytics & reporting
- **Campaign reports**: Opens, clicks, bounces, unsubscribes, revenue attribution per campaign
- **Comparative reporting**: Benchmark campaigns against each other over time (Standard+)
- **Smart recommendations**: AI-powered suggestions for improving engagement based on your data
- **E-commerce reporting**: Revenue, orders, and customer lifetime value tracking (requires e-commerce integration)
- **Audience insights**: Growth trends, engagement levels, top locations, predicted demographics

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Audience (List)** | Contact database | id, name, member count, permission_reminder |
| **Contact (Member)** | Individual subscriber | email, status (subscribed/unsubscribed/cleaned/pending), tags, merge fields |
| **Campaign** | Email broadcast | id, type (regular/plaintext/absplit/variate), status, recipients, settings |
| **Automation (Journey)** | Multi-step workflow | id, trigger, status, steps |
| **Template** | Reusable email design | id, name, type (user/gallery), HTML |
| **Landing Page** | Lead capture page | id, name, status, URL |
| **Segment** | Dynamic contact filter | id, name, conditions, member_count |
| **Tag** | Contact label | id, name |

## API quick reference

- **Marketing API base URL**: `https://<dc>.api.mailchimp.com/3.0/` (replace `<dc>` with your data center, e.g., `us21`)
- **Authentication**: Basic Auth with any string as username and your API key as password, or Bearer token
- **Concurrency limit**: 10 concurrent connections per API key
- **Batch operations**: Use the batch endpoint (`/3.0/batches`) for high-volume operations — submit up to 500 operations per batch request
- **Transactional API (Mandrill)**: `https://mandrillapp.com/api/1.0/` — API key in POST body, all methods are POST
- **Webhooks**: Marketing API webhooks (audience events via list webhook config) + Mandrill webhooks (message events: send, deferral, hard-bounce, soft-bounce, delivered, open, click, spam, unsub, reject)
- **Docs**: mailchimp.com/developer/

## Integrations

| Category | Tools |
|----------|-------|
| **E-commerce** | Shopify, WooCommerce, BigCommerce, Magento, Square, Stripe |
| **CRM** | Salesforce, HubSpot, Zoho, Pipedrive |
| **Social** | Facebook, Instagram, LinkedIn |
| **Productivity** | Google Sheets, Slack, Zoom, Calendly |
| **CMS** | WordPress, Wix, Squarespace |
| **Design** | Canva |
| **Automation** | Zapier, Make, Pabbly |
| **Analytics** | Google Analytics |
| **Accounting** | QuickBooks |
| **Messaging** | WhatsApp (via integrations) |

300+ total integrations available in the Mailchimp integration directory.

## Pricing (USD, as of March 2026 — verify current pricing at mailchimp.com)

| Plan | Price | Contacts | Sends/mo | Key gated features |
|------|-------|----------|----------|-------------------|
| **Free** | $0 | 250 | 500 (250/day) | Basic email, forms, landing pages, Mailchimp branding on all emails |
| **Essentials** | From $13/mo | 500+ | 10x contacts | A/B testing, 24/7 support, remove branding, basic automations, 3 seats |
| **Standard** | From $20/mo | 500+ (to 100K) | 12x contacts | Customer Journey Builder, send time optimization, dynamic content, predictive segmentation, comparative reporting, 5 seats |
| **Premium** | From $350/mo | 10K+ (to 1.5M) | 15x contacts | Multivariate testing, advanced segmentation, phone support, unlimited seats |

**SMS add-on**: Starting at $20 per 1,000 credits (paid plans only). Credits expire monthly.

**Transactional email (Mandrill)**: Separate add-on with volume-based pricing. Requires Standard+ plan.
