# MailerLite Platform Reference

## Platform overview

MailerLite is an email marketing and digital marketing platform targeting solopreneurs, small businesses, creators, and agencies. Founded in 2010 in Lithuania, acquired by Vercom in 2022 for $90M. 169 employees, fully remote across 40+ countries. Positioned as "making the complex simple" — affordable, easy-to-use alternative to Mailchimp, with a generous free tier and a broad feature set beyond email (landing pages, websites, e-commerce, digital products, paid newsletters).

## Key modules

### Email campaigns
- Drag-and-drop editor with templates (paid plans), HTML editor (Advanced+), plain-text
- A/B testing: subject lines, content, sender — multivariate on Advanced+
- Campaign types: regular, A/B, resend (to non-openers), RSS
- Auto-resend to non-openers with different subject line (Growing Business+)
- AI writing assistant for subject lines and body copy (Advanced+)
- Smart sending: delivers at each subscriber's optimal open time (Advanced+)

### Automation
- Trigger-based workflows: form submission, group join, link click, date-based, API event, e-commerce event
- Actions: send email, wait/delay, condition (if/else), add/remove from group, update field, send webhook
- Pre-built templates: welcome, abandoned cart, re-engagement, birthday
- **Limitation**: Linear flow only — no multi-path branching. If/else splits exist but both paths must merge back. For complex branching, use ActiveCampaign or Klaviyo.
- 3 active automations on Free, unlimited on paid plans

### Landing pages
- Drag-and-drop builder with templates
- Custom domains supported
- Built-in signup form integration
- 10 landing pages on Free, unlimited on paid plans
- No A/B testing on landing pages
- SEO settings (title, description, URL slug)

### Signup forms & pop-ups
- Types: pop-up, embedded, promotion (Advanced+)
- Triggers: time delay, scroll depth, exit intent
- Targeting by page URL
- Double opt-in supported (recommended for deliverability)
- GDPR consent checkbox option

### Website builder
- Full website and blog builder
- Custom domains
- 1 website on Free, unlimited on paid plans
- Blog with RSS feed (can trigger RSS campaigns)

### E-commerce
- Native integrations: Shopify, WooCommerce, BigCommerce, PrestaShop, EasyStore
- E-commerce automations: abandoned cart, post-purchase follow-up, product recommendations
- Revenue tracking per campaign and automation
- Product blocks in emails (pull product data from connected store)
- E-commerce API for custom integrations (shops, carts, orders, products, customers, categories)

### Digital products
- Sell ebooks, downloads, and digital files
- Stripe integration required for payments
- 1 digital product on Free, 3 on Growing Business, unlimited on Advanced
- Delivery via download link in confirmation email

### Paid newsletter subscriptions
- Recurring subscription payments via Stripe
- Gate content to paid subscribers only
- Manage free vs paid subscriber tiers
- 1 paid subscription on Free, 3 on Growing Business, unlimited on Advanced

### Appointment booking (new)
- Schedule meetings with subscribers
- Embedded in emails and landing pages

### Email verification
- MailerCheck integration for list cleaning
- Verify email addresses before import
- Reduces bounce rates and protects sender reputation

### Transactional email
- Separate from marketing email
- API-triggered (not through the campaign builder)
- Order confirmations, password resets, shipping notifications
- Requires separate setup from marketing campaigns

## Pricing and limits

| Feature | Free | Growing Business ($10/mo) | Advanced ($20/mo) | Enterprise (custom) |
|---|---|---|---|---|
| Subscribers | 500 | Unlimited | Unlimited | 100K+ |
| Monthly emails | 12,000 | Unlimited | Unlimited | Unlimited |
| User seats | 1 | 3 | Unlimited | Unlimited |
| Templates | None | Unlimited | Unlimited | Unlimited |
| Automations | 3 active | Unlimited | Unlimited | Unlimited |
| Landing pages | 10 | Unlimited | Unlimited | Unlimited |
| Websites/blogs | 1 | Unlimited | Unlimited | Unlimited |
| Digital products | 1 | 3 | Unlimited | Unlimited |
| A/B testing | Basic | Multivariate | Multivariate | Multivariate |
| Auto-resend | No | Yes | Yes | Yes |
| Smart sending | No | No | Yes | Yes |
| AI writing | No | No | Yes | Yes |
| Promotion pop-ups | No | No | Yes | Yes |
| Custom HTML editor | No | No | Yes | Yes |
| Facebook integration | No | No | Yes | Yes |
| Preference center | No | No | Yes | Yes |
| Dedicated IP | No | No | No | Yes |
| Deliverability consultation | No | No | No | Yes |

**Pricing scales with subscriber count**: $10/mo base is for up to 500 subscribers on Growing Business. Prices increase as subscriber count grows. Save 10% with annual billing.

**Free plan change (Sep 2025)**: Reduced from 1,000 to 500 subscribers. Free plan has no email templates — must design from scratch or use plain text.

## Integrations

**140+ native integrations** including:

- **E-commerce**: Shopify, WooCommerce, BigCommerce, PrestaShop, Gumroad, SendOwl, EasyStore
- **CRM**: Pipedrive, HubSpot, Salesforce, Copper, Kommo, OnePageCRM, Zoho
- **Payments**: Stripe (required for digital products and paid newsletters)
- **Design**: Figma, Adobe Express, Canva, Stripo
- **Forms & surveys**: Typeform, Gravity Forms, JetFormBuilder, Jotform, Google Forms, Paperform
- **Automation/iPaaS**: Zapier (5,000+ apps), Make, n8n, Pabbly Connect, Relay.app, Integrately
- **Booking**: Calendly, Acuity Scheduling, TidyCal, YouCanBookMe
- **Courses**: Kajabi, Thinkific, LearnWorlds, Teachable
- **Social**: Facebook Audiences, Facebook Lead Ads, ManyChat
- **Email verification**: ZeroBounce, Bouncify, Emailable, NeverBounce, Clearout, DeBounce
- **Analytics**: Databox, Google Analytics
- **Other**: WordPress, Squarespace, Wix, Ghost, Drupal, Slack, Zoom, Intercom, Zendesk

**Zapier triggers**: subscriber clicks link, campaign sent, subscriber added to group, email bounces, subscriber deleted, subscriber triggers workflow, subscriber fields updated.

## Data model (API)

### Key objects
- **Subscribers**: email, status (active/unsubscribed/unconfirmed/bounced/junk), custom fields, groups, activity log
- **Groups**: named collections of subscribers (manual or automation-assigned)
- **Segments**: dynamic rule-based subscriber filters (up to 250)
- **Campaigns**: email sends with type (regular/ab/resend/rss), status (draft/ready/sent), stats
- **Automations**: triggered workflows with steps, triggers, and subscriber activity tracking
- **Forms**: popup, embedded, or promotion — with conversion tracking
- **Fields**: custom subscriber data (text, number, date types)
- **Webhooks**: real-time event notifications (subscriber created, campaign sent, etc.)
- **E-commerce**: shops, carts, orders, products, customers, categories

### Key relationships
- Subscribers belong to Groups (many-to-many)
- Subscribers match Segments (dynamic, read-only)
- Campaigns target Groups or Segments
- Automations trigger on Group joins, Form submissions, or API events
- E-commerce Shops contain Products, Orders, Carts, Customers

## Workflow setup

### Setting up a welcome automation
1. Go to Automations > Create
2. Trigger: "When subscriber joins a group" — select your main list group
3. Add email step: welcome email with personalization ({$name}, {$email})
4. Add delay: 1 day
5. Add email step: second email with value delivery (lead magnet, resources, etc.)
6. Activate the automation

### Setting up domain authentication
1. Go to Domains > Add domain
2. MailerLite generates 3 DNS records: DKIM (CNAME), SPF (TXT), Domain verification (TXT)
3. Add all 3 records in your DNS provider
4. Return to MailerLite > Click "Check DNS Records"
5. Wait for propagation (can take up to 48 hours)
6. **Note**: MailerLite does NOT generate a DMARC record — add your own DMARC TXT record separately

### Setting up Shopify integration
1. Go to Integrations > Shopify
2. Install the MailerLite app from Shopify App Store
3. Connect your MailerLite account via API key
4. Map Shopify customer data to MailerLite subscriber fields
5. Enable e-commerce automations: abandoned cart, post-purchase, product recommendations
6. Revenue tracking starts automatically once connected

## Deep dives

### Deliverability in MailerLite
- Domain authentication (SPF + DKIM) is mandatory for good inbox placement
- DMARC must be configured separately in your DNS (MailerLite doesn't handle it)
- Free/Growing Business use shared IPs — deliverability depends on co-senders
- Enterprise plan includes dedicated IP and deliverability consultation
- MailerLite enforces strict anti-spam policy — accounts importing dirty lists get suspended
- MailerCheck (built-in) verifies email addresses before sending — use it on every import
- Engagement-based sending: MailerLite tracks opens/clicks and may throttle sends to low-engagement subscribers

### MailerLite vs Mailchimp
- MailerLite: simpler UI, cheaper ($10 vs $13/mo at 500 contacts), unlimited emails on paid plans
- Mailchimp: more templates, better reporting, Customer Journey Builder more advanced, bills for unsubscribed contacts
- MailerLite wins on: price, ease of use, landing pages, digital products, paid newsletters
- Mailchimp wins on: template variety, advanced segmentation, app marketplace, brand recognition
- Both have free tiers — MailerLite 500 subs/12K emails, Mailchimp 250 contacts/1K emails (reduced Jan 2026)

### iPad subscribe app
- Offline subscriber collection at events, trade shows, retail locations
- Subscribers sync to MailerLite when device reconnects to internet
- Assign collected subscribers to specific groups automatically
