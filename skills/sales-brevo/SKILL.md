---
name: sales-brevo
description: "Brevo platform help — email/SMS/WhatsApp campaigns, marketing automation (journeys), transactional messaging, Sales CRM (deals, pipelines), Conversations (live chat, chatbot), Loyalty programs, push notifications, e-commerce, landing pages, contact management, Aura AI, API & integrations. Use when asking 'how do I do X in Brevo', configuring Brevo settings, setting up campaigns or automations, managing contacts, using the Brevo API, or migrating from Sendinblue. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), designing outbound cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), transactional email strategy (use /sales-transactional-email), live chat strategy (use /sales-live-chat), or loyalty program strategy (use /sales-loyalty)."
argument-hint: "[describe what you need help with in Brevo]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, marketing-automation, sms, platform]
github: "https://github.com/sendinblue"
---
# Brevo Platform Help

Help the user with Brevo platform questions — from email/SMS/WhatsApp campaigns and marketing automation through transactional messaging, Sales CRM, Conversations (live chat), Loyalty programs, e-commerce, and API integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Brevo do you need help with?**
   - A) Email campaigns — creating, managing, or optimizing marketing emails
   - B) SMS / WhatsApp campaigns — setup, templates, approval
   - C) Marketing automation — journeys, triggers, workflows (route to `/sales-email-marketing` for cross-platform strategy)
   - D) Transactional messaging — API/SMTP email, transactional SMS (route to `/sales-transactional-email` for cross-platform)
   - E) Sales CRM — deals, pipelines, companies, tasks
   - F) Conversations — live chat, chatbot setup (route to `/sales-live-chat` for cross-platform strategy)
   - G) Loyalty — programs, rewards, tiers, vouchers (route to `/sales-loyalty` for cross-platform strategy)
   - H) Contacts — lists, segments, attributes, import/export
   - I) Deliverability — domain auth, dedicated IPs, warmup (route to `/sales-deliverability` for cross-platform)
   - J) E-commerce — product sync, orders, coupons, revenue attribution
   - K) Landing pages & forms
   - L) Push notifications — web & mobile
   - M) API & webhooks — REST API, SDKs, automation
   - N) Integrations — Shopify, Salesforce, Zapier, Make, etc.
   - O) Aura AI — Marketing Agent, Sales Assistant, Data Analyst
   - P) Account & billing — plans, sub-accounts, user management
   - Q) Migration from Sendinblue — naming changes, URL updates
   - R) Something else — describe it

2. **What's your role?**
   - A) Marketing manager / email marketer
   - B) Developer / technical
   - C) E-commerce manager
   - D) Sales rep / team lead
   - E) Founder / solo operator
   - F) Agency managing multiple clients
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Prospect list building → `/sales-prospect-list`
- Contact enrichment / data hygiene → `/sales-enrich`
- Outbound cadence strategy → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Transactional email architecture → `/sales-transactional-email`
- Live chat / chatbot strategy → `/sales-live-chat`
- Loyalty program design → `/sales-loyalty`
- Email marketing strategy (opt-in) → `/sales-email-marketing`
- Tool integration architecture → `/sales-integration`
- Lead scoring models → `/sales-lead-score`
- Funnel / landing page strategy → `/sales-funnel`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Brevo platform reference

### Email Campaigns
- **What it is**: Marketing email campaigns sent to contact lists or segments
- **Key concepts**: Campaign = a single email send or A/B test, not a sequence. For multi-step sequences, use Automation (journeys).
- **Editor**: Drag-and-drop editor with templates, or HTML/plain text
- **A/B testing**: Subject line and content variants (Standard plan+)
- **AI features**: AI content generator, AI send-time optimization (Standard plan+)
- **Sending**: Schedule or send immediately, timezone-aware delivery
- **Analytics**: Opens, clicks, unsubscribes, heatmaps (Standard plan+), geography/device reports
- **Plan gates**: A/B testing, heatmaps, and advanced reporting require Standard plan+

### SMS Campaigns
- **What it is**: Bulk SMS marketing messages to opted-in contacts
- **Key concepts**: Credits-based (buy SMS credits separately), sender name/number varies by country
- **Regulations**: Opt-in required, quiet hours by country, unsubscribe link mandatory in some regions
- **Analytics**: Delivered, clicked (if link included), unsubscribed

### WhatsApp Campaigns
- **What it is**: Marketing messages via WhatsApp Business API
- **Key concepts**: Requires approved templates, WhatsApp Business Account linked to Brevo
- **Template approval**: Submit templates for Meta approval before sending — allow 24-48 hours
- **Plan gates**: Professional plan+ only
- **Analytics**: Sent, delivered, read, clicked

### Marketing Automation (Journeys)
- **What it is**: Visual workflow builder for automated multi-step campaigns
- **Key concepts**: Journey = automation workflow, triggered by events (contact added, form submitted, email opened, custom event, date, etc.)
- **Actions**: Send email, send SMS, send WhatsApp, update contact, add to list, webhook, wait, if/else split
- **Plan gates**: Standard plan+ for automation
- **Best practices**: Start with simple welcome + abandoned cart journeys, test with small segments first

### Transactional Messaging
- **What it is**: Event-triggered emails and SMS (order confirmations, password resets, etc.)
- **Delivery methods**: REST API (`POST /smtp/email`) or SMTP relay
- **Templates**: Create in Brevo UI, call via API with dynamic parameters
- **Included on all plans**: Transactional email is available on Free tier
- **SMTP settings**: `smtp-relay.brevo.com`, port 587 (TLS), authenticate with login + API key
- **API reference**: See `references/brevo-api-reference.md`

### Sales CRM
- **What it is**: Lightweight CRM for managing deals and sales pipeline
- **Key concepts**: Companies, Deals (in pipelines with stages), Tasks, Notes, Files
- **Pipelines**: Multiple pipelines with custom stages
- **Deal attributes**: Custom fields, linked to contacts and companies
- **Import**: Bulk import companies and deals via CSV or API
- **Limitations**: Lighter than Salesforce/HubSpot — best for SMB teams. No advanced forecasting or territory management.

### Conversations (Live Chat)
- **What it is**: Live chat widget for your website + chatbot automation
- **Key concepts**: Agents (team members), Visitors (website users), Messages, Automated messages
- **Features**: Real-time chat, typing indicators, file sharing, visitor tracking, chat history
- **Chatbot**: Automated messages triggered by page URL, time on page, or visitor behavior
- **Agent status**: Online/offline — set via UI or API
- **Integration**: Chat transcripts link to contact profiles automatically

### Loyalty Programs
- **What it is**: Customer loyalty engine with points, tiers, and rewards
- **Key concepts**: Programs, Subscriptions (enrolled customers), Balances (points), Tiers, Rewards, Vouchers
- **Features**: Point earning rules, tier progression, reward catalog, voucher generation and redemption
- **Mobile Wallet**: Digital loyalty cards (Enterprise only)
- **Plan gates**: Enterprise plan only for full loyalty and mobile wallet
- **API**: Full loyalty API for custom implementations

### Push Notifications
- **What it is**: Web and mobile push notifications to opted-in users
- **Key concepts**: Requires user opt-in via browser/app prompt
- **Plan gates**: Professional plan+ only
- **Use cases**: Flash sales, abandoned cart reminders, new content alerts

### E-commerce
- **What it is**: Product catalog sync, order tracking, and revenue attribution
- **Key concepts**: Products, Categories, Orders, Coupons, Revenue Attribution
- **Integrations**: Native Shopify, WooCommerce, Magento, BigCommerce, PrestaShop plugins
- **Features**: Abandoned cart automation, product recommendations, coupon generation, payment requests
- **Revenue attribution**: Track which campaigns/automations drive purchases

### Landing Pages
- **What it is**: Drag-and-drop landing page builder
- **Plan gates**: Standard plan+ (1 page included), additional pages on higher plans
- **Features**: Templates, form integration, custom domains, mobile responsive
- **Limitation**: Not a full funnel builder — for complex funnels, see `/sales-funnel`

### Contact Management
- **What it is**: Centralized contact database with lists, segments, and attributes
- **Key concepts**: Contacts, Lists (static groups), Segments (dynamic filter-based), Attributes (standard + custom), Folders (organize lists)
- **Import**: CSV upload, API, or platform connectors
- **Double opt-in**: Built-in DOI flow via API
- **Contact scoring**: AI-powered engagement scoring (Professional plan+)
- **Segmentation**: Filter by attributes, behavior (opens, clicks), e-commerce activity, custom events
- **GDPR**: Built-in consent management, unsubscribe handling, data export/deletion

### Aura AI
- **What it is**: Brevo's AI suite across marketing, sales, data, and conversations
- **Marketing Agent**: Generate email content, subject lines, send-time optimization
- **Sales Assistant**: AI help within the CRM
- **Data Analyst**: Natural-language queries on your data (Professional plan+)
- **Conversations Agent**: AI chatbot for live chat

### Account & Sub-accounts (Master Account)
- **What it is**: Multi-account management for agencies or multi-brand companies
- **Key concepts**: Master account, Sub-accounts, SSO/SAML, shared IPs, group management
- **Features**: Centralized billing, sub-account provisioning via API, SSO token generation
- **Plan gates**: Enterprise plan only

### Data model quick reference

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

### API quick reference
- **Base URL**: `https://api.brevo.com/v3/`
- **Auth**: `api-key: YOUR_API_KEY` header
- **Format**: JSON request/response
- **Pagination**: `?limit=50&offset=0`
- **Rate limits**: Check `x-sib-ratelimit-remaining` header
- **SDKs**: Python, Node.js, PHP, Ruby, Java, TypeScript, Go, C#
- **Full reference**: See `references/brevo-api-reference.md`

### Integrations
- **Native e-commerce**: Shopify, WooCommerce, Magento, BigCommerce, PrestaShop, Wix
- **Native CRM**: Salesforce (via Zapier — no direct native connector)
- **Marketing**: Google Analytics, Eventbrite, Typeform, Elementor, WordPress
- **Automation**: Zapier (7,000+ apps), Make
- **Payments**: Stripe, PayPal, Square
- **AI**: OpenAI integration for content generation
- **Total**: 150+ integrations

## Step 4 — Actionable guidance

Based on the user's area, provide:

1. **Step-by-step instructions** — exact Brevo UI paths or API calls
2. **Configuration recommendations** — settings, plan considerations, gotchas
3. **Verification steps** — how to confirm the setup works
4. **Next steps** — what to do after the immediate task

### Common setup workflows

**First-time setup checklist:**
1. Authenticate your domain (Settings → Senders & IPs → Domains) — DKIM + DMARC
2. Create a sender (Settings → Senders & IPs → Senders)
3. Import contacts (Contacts → Import)
4. Set up double opt-in if needed (via API or automation)
5. Create your first campaign or automation

**Domain authentication:**
1. Go to Settings → Senders, Domains & Dedicated IPs → Domains
2. Add your domain — Brevo uses Entri for automatic DNS setup (or manual)
3. Add Brevo code (TXT record), DKIM (CNAME), and DMARC (TXT)
4. SPF: `v=spf1 include:spf.brevo.com ~all`
5. Wait for verification (can take up to 48 hours for DNS propagation)

**API key setup:**
1. Go to Settings → SMTP & API → API Keys
2. Click "Generate a new API key"
3. Name it descriptively (e.g., "Production Backend")
4. Copy immediately — you won't see it again
5. Test: `curl -H "api-key: YOUR_KEY" https://api.brevo.com/v3/account`

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Sendinblue → Brevo migration confusion**: API base URL changed from `api.sendinblue.com` to `api.brevo.com`. Old SDKs may still reference Sendinblue namespaces. The GitHub org is still `sendinblue`. If a user mentions Sendinblue, treat it as Brevo.
2. **Volume-based vs contact-based pricing**: Brevo charges by email volume, not contacts (unlike Mailchimp/HubSpot). Unlimited contacts on all plans. Don't confuse the user by mentioning contact limits.
3. **Free plan daily limit**: 300 emails/day on the free plan — this is a daily cap, not monthly. Users hitting this limit need Starter plan ($25/mo for 20K emails/mo).
4. **WhatsApp template approval delay**: WhatsApp campaigns require Meta-approved templates. Approval takes 24-48 hours. Don't tell users they can send WhatsApp immediately.
5. **Automation ≠ campaigns**: In Brevo, "Campaign" = single send, "Automation/Journey" = multi-step workflow. Don't confuse these — users asking about "drip sequences" want Automation, not Campaigns.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Opt-in email marketing strategy across platforms
- `/sales-transactional-email` — Transactional/triggered email delivery strategy
- `/sales-live-chat` — Live chat and chatbot strategy across platforms
- `/sales-loyalty` — Loyalty program design across platforms
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, reputation)
- `/sales-cadence` — Outbound sequence design (if using Brevo for cold outreach)
- `/sales-integration` — Connect Brevo with CRM, e-commerce, and other tools
- `/sales-funnel` — Landing page and funnel strategy
- `/sales-lead-score` — Lead scoring models (Brevo has contact scoring on Professional plan+)
- `/sales-checkout` — Checkout optimization (Brevo e-commerce features)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up a welcome automation
**User says**: "How do I create a welcome email series in Brevo?"
**Skill does**: Guides through Automation → Create Journey → trigger on "Contact added to list" → add email steps with wait delays → test with a test contact
**Result**: 3-email welcome series automation live and tested

### Example 2: Connecting Shopify for abandoned cart
**User says**: "I want to send abandoned cart emails from Brevo for my Shopify store"
**Skill does**: Walks through installing Brevo Shopify plugin → syncing products/orders → creating abandoned cart automation journey → configuring timing (1hr, 24hr, 72hr) → adding product blocks to email template
**Result**: Abandoned cart automation connected to Shopify and sending

### Example 3: Sending transactional emails via API
**User says**: "How do I send order confirmation emails through the Brevo API?"
**Skill does**: Shows API key setup → creating a template in Brevo UI → calling `POST /smtp/email` with templateId and params → setting up webhooks for delivery tracking → error handling
**Result**: Transactional email flow working with template and dynamic parameters

## Troubleshooting

### Emails landing in spam
**Symptom**: Marketing or transactional emails going to spam folder
**Cause**: Domain not authenticated, no dedicated IP, or sending to unengaged contacts
**Solution**: 1) Verify domain authentication (DKIM + DMARC) in Settings → Domains. 2) Check SPF includes `spf.brevo.com`. 3) On paid plans, request a dedicated IP and warm it up gradually. 4) Clean your list — remove contacts who haven't opened in 6+ months. See `/sales-deliverability` for comprehensive guidance.

### WhatsApp template rejected
**Symptom**: WhatsApp message template stuck in "Pending" or rejected by Meta
**Cause**: Template violates Meta's commerce or content policies, or contains prohibited content
**Solution**: 1) Review Meta's WhatsApp Business message template guidelines. 2) Avoid promotional language in utility templates. 3) Ensure opt-in compliance. 4) Resubmit with modifications. Allow 24-48 hours for review.

### API returning 429 Too Many Requests
**Symptom**: API calls failing with status 429
**Cause**: Rate limit exceeded
**Solution**: 1) Check `x-sib-ratelimit-remaining` and `x-sib-ratelimit-reset` response headers. 2) Implement exponential backoff. 3) Batch operations where possible (e.g., `POST /contacts/import` instead of individual creates). 4) For high-volume transactional email, consider SMTP relay instead of REST API.
