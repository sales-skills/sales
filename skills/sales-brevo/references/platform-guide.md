# Brevo Platform Guide

## Email Campaigns
- **What it is**: Marketing email campaigns sent to contact lists or segments
- **Key concepts**: Campaign = a single email send or A/B test, not a sequence. For multi-step sequences, use Automation (journeys).
- **Editor**: Drag-and-drop editor with templates, or HTML/plain text
- **A/B testing**: Subject line and content variants (Standard plan+)
- **AI features**: AI content generator, AI send-time optimization (Standard plan+)
- **Sending**: Schedule or send immediately, timezone-aware delivery
- **Analytics**: Opens, clicks, unsubscribes, heatmaps (Standard plan+), geography/device reports
- **Plan gates**: A/B testing, heatmaps, and advanced reporting require Standard plan+

## SMS Campaigns
- **What it is**: Bulk SMS marketing messages to opted-in contacts
- **Key concepts**: Credits-based (buy SMS credits separately), sender name/number varies by country
- **Regulations**: Opt-in required, quiet hours by country, unsubscribe link mandatory in some regions
- **Analytics**: Delivered, clicked (if link included), unsubscribed

## WhatsApp Campaigns
- **What it is**: Marketing messages via WhatsApp Business API
- **Key concepts**: Requires approved templates, WhatsApp Business Account linked to Brevo
- **Template approval**: Submit templates for Meta approval before sending — allow 24-48 hours
- **Plan gates**: Professional plan+ only
- **Analytics**: Sent, delivered, read, clicked

## Marketing Automation (Journeys)
- **What it is**: Visual workflow builder for automated multi-step campaigns
- **Key concepts**: Journey = automation workflow, triggered by events (contact added, form submitted, email opened, custom event, date, etc.)
- **Actions**: Send email, send SMS, send WhatsApp, update contact, add to list, webhook, wait, if/else split
- **Plan gates**: Standard plan+ for automation
- **Best practices**: Start with simple welcome + abandoned cart journeys, test with small segments first

## Transactional Messaging
- **What it is**: Event-triggered emails and SMS (order confirmations, password resets, etc.)
- **Delivery methods**: REST API (`POST /smtp/email`) or SMTP relay
- **Templates**: Create in Brevo UI, call via API with dynamic parameters
- **Included on all plans**: Transactional email is available on Free tier
- **SMTP settings**: `smtp-relay.brevo.com`, port 587 (TLS), authenticate with login + API key
- **API reference**: See `references/brevo-api-reference.md`

## Sales CRM
- **What it is**: Lightweight CRM for managing deals and sales pipeline
- **Key concepts**: Companies, Deals (in pipelines with stages), Tasks, Notes, Files
- **Pipelines**: Multiple pipelines with custom stages
- **Deal attributes**: Custom fields, linked to contacts and companies
- **Import**: Bulk import companies and deals via CSV or API
- **Limitations**: Lighter than Salesforce/HubSpot — best for SMB teams. No advanced forecasting or territory management.

## Conversations (Live Chat)
- **What it is**: Live chat widget for your website + chatbot automation
- **Key concepts**: Agents (team members), Visitors (website users), Messages, Automated messages
- **Features**: Real-time chat, typing indicators, file sharing, visitor tracking, chat history
- **Chatbot**: Automated messages triggered by page URL, time on page, or visitor behavior
- **Agent status**: Online/offline — set via UI or API
- **Integration**: Chat transcripts link to contact profiles automatically

## Loyalty Programs
- **What it is**: Customer loyalty engine with points, tiers, and rewards
- **Key concepts**: Programs, Subscriptions (enrolled customers), Balances (points), Tiers, Rewards, Vouchers
- **Features**: Point earning rules, tier progression, reward catalog, voucher generation and redemption
- **Mobile Wallet**: Digital loyalty cards (Enterprise only)
- **Plan gates**: Enterprise plan only for full loyalty and mobile wallet
- **API**: Full loyalty API for custom implementations

## Push Notifications
- **What it is**: Web and mobile push notifications to opted-in users
- **Key concepts**: Requires user opt-in via browser/app prompt
- **Plan gates**: Professional plan+ only
- **Use cases**: Flash sales, abandoned cart reminders, new content alerts

## E-commerce
- **What it is**: Product catalog sync, order tracking, and revenue attribution
- **Key concepts**: Products, Categories, Orders, Coupons, Revenue Attribution
- **Integrations**: Native Shopify, WooCommerce, Magento, BigCommerce, PrestaShop plugins
- **Features**: Abandoned cart automation, product recommendations, coupon generation, payment requests
- **Revenue attribution**: Track which campaigns/automations drive purchases

## Landing Pages
- **What it is**: Drag-and-drop landing page builder
- **Plan gates**: Standard plan+ (1 page included), additional pages on higher plans
- **Features**: Templates, form integration, custom domains, mobile responsive
- **Limitation**: Not a full funnel builder — for complex funnels, see `/sales-funnel`

## Contact Management
- **What it is**: Centralized contact database with lists, segments, and attributes
- **Key concepts**: Contacts, Lists (static groups), Segments (dynamic filter-based), Attributes (standard + custom), Folders (organize lists)
- **Import**: CSV upload, API, or platform connectors
- **Double opt-in**: Built-in DOI flow via API
- **Contact scoring**: AI-powered engagement scoring (Professional plan+)
- **Segmentation**: Filter by attributes, behavior (opens, clicks), e-commerce activity, custom events
- **GDPR**: Built-in consent management, unsubscribe handling, data export/deletion

## Aura AI
- **What it is**: Brevo's AI suite across marketing, sales, data, and conversations
- **Marketing Agent**: Generate email content, subject lines, send-time optimization
- **Sales Assistant**: AI help within the CRM
- **Data Analyst**: Natural-language queries on your data (Professional plan+)
- **Conversations Agent**: AI chatbot for live chat

## Account & Sub-accounts (Master Account)
- **What it is**: Multi-account management for agencies or multi-brand companies
- **Key concepts**: Master account, Sub-accounts, SSO/SAML, shared IPs, group management
- **Features**: Centralized billing, sub-account provisioning via API, SSO token generation
- **Plan gates**: Enterprise plan only

## Data model quick reference

| Object | Key fields | Notes |
|---|---|---|
| Contact | email, attributes, listIds, statistics | Central entity — linked to everything |
| List | name, folderId, totalSubscribers | Static group of contacts |
| Segment | name, conditions | Dynamic — auto-updates based on filters |
| Email Campaign | name, subject, sender, htmlContent, recipients, scheduledAt | One-time send or A/B test |
| SMS Campaign | name, sender, content, recipients | Credits-based |
| WhatsApp Campaign | name, templateId, recipients | Requires approved template |
| Journey (Automation) | name, trigger, steps | Visual workflow |
| Transactional Email | sender, to, subject, htmlContent OR templateId + params | Via API or SMTP |
| Deal | name, pipeline, stage, amount, contactIds, companyIds | CRM entity |
| Company | name, attributes, linkedDeals, linkedContacts | CRM entity |
| Task | name, type, dueDate, linkedTo | CRM entity |
| Product | id, name, price, url, imageUrl | E-commerce sync |
| Order | id, email, products, totalPrice, status | E-commerce sync |
| Loyalty Program | name, tiers, rewards, balances | Enterprise only |
| Webhook | url, events, type | Real-time event delivery |

## API quick reference
- **Base URL**: `https://api.brevo.com/v3/`
- **Auth**: `api-key: YOUR_API_KEY` header
- **Format**: JSON request/response
- **Pagination**: `?limit=50&offset=0`
- **Rate limits**: Check `x-sib-ratelimit-remaining` header
- **SDKs**: Python, Node.js, PHP, Ruby, Java, TypeScript, Go, C#
- **Full reference**: See `references/brevo-api-reference.md`

## Integrations
- **Native e-commerce**: Shopify, WooCommerce, Magento, BigCommerce, PrestaShop, Wix
- **Native CRM**: Salesforce (via Zapier — no direct native connector)
- **Marketing**: Google Analytics, Eventbrite, Typeform, Elementor, WordPress
- **Automation**: Zapier (7,000+ apps), Make
- **Payments**: Stripe, PayPal, Square
- **AI**: OpenAI integration for content generation
- **Total**: 150+ integrations

## Common setup workflows

**First-time setup checklist:**
1. Authenticate your domain (Settings > Senders & IPs > Domains) — DKIM + DMARC
2. Create a sender (Settings > Senders & IPs > Senders)
3. Import contacts (Contacts > Import)
4. Set up double opt-in if needed (via API or automation)
5. Create your first campaign or automation

**Domain authentication:**
1. Go to Settings > Senders, Domains & Dedicated IPs > Domains
2. Add your domain — Brevo uses Entri for automatic DNS setup (or manual)
3. Add Brevo code (TXT record), DKIM (CNAME), and DMARC (TXT)
4. SPF: `v=spf1 include:spf.brevo.com ~all`
5. Wait for verification (can take up to 48 hours for DNS propagation)

**API key setup:**
1. Go to Settings > SMTP & API > API Keys
2. Click "Generate a new API key"
3. Name it descriptively (e.g., "Production Backend")
4. Copy immediately — you won't see it again
5. Test: `curl -H "api-key: YOUR_KEY" https://api.brevo.com/v3/account`
