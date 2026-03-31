---
name: sales-getresponse
description: "GetResponse platform help — email marketing, autoresponders, visual marketing automation workflows, conversion funnels, landing pages, webinars (live and on-demand), course creator, premium newsletters, SMS marketing, web push notifications, live chat, signup forms, popups, website builder, e-commerce integrations (Shopify, WooCommerce), contact scoring, segmentation, paid ads, AI content generator, transactional email (MAX only), REST API. Use when asking 'how do I do X in GetResponse', configuring autoresponders, building automation workflows, creating conversion funnels, setting up webinars or courses, managing GetResponse contacts, or troubleshooting GetResponse. Do NOT use for general email marketing strategy (use /sales-email-marketing), general funnel strategy (use /sales-funnel), general webinar strategy (use /sales-webinar), general course/membership strategy (use /sales-membership), cross-platform deliverability (use /sales-deliverability), or connecting tools generically (use /sales-integration)."
argument-hint: "[describe what you need help with in GetResponse]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# GetResponse Platform Help

Help the user with GetResponse platform questions — from email campaigns and autoresponders through automation workflows, conversion funnels, webinars, course creation, and API usage.

## Step 1 — Gather context

Ask the user:

1. **What area do you need help with?**
   - A) Email campaigns — newsletters, broadcasts, A/B testing
   - B) Autoresponders — time-based automated email sequences
   - C) Marketing automation — visual workflow builder
   - D) Conversion funnels — lead magnet, sales, webinar funnels
   - E) Landing pages — builder, templates, forms
   - F) Webinars — live, on-demand, integration with funnels
   - G) Courses — course creator, student management, premium newsletters
   - H) SMS marketing — campaigns, automation
   - I) Web push notifications — setup, campaigns
   - J) Live chat — widget setup, automation
   - K) E-commerce — Shopify/WooCommerce, abandoned cart, product recommendations
   - L) Contacts — import, segmentation, scoring, list management
   - M) Integrations — API, webhooks, Zapier, native connectors
   - N) Analytics & reporting — campaign performance, automation stats
   - O) Something else — describe it

2. **What plan are you on?**
   - A) Free
   - B) Starter ($19/mo)
   - C) Marketer ($59/mo)
   - D) Creator ($69/mo)
   - E) MAX / Enterprise
   - F) Not sure / considering GetResponse

3. **What's the goal?**
   - A) Set something up for the first time
   - B) Optimize or improve existing setup
   - C) Troubleshoot a problem
   - D) Migrate from another platform

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the question is about general strategy rather than GetResponse-specific config, route to the appropriate skill:

| Question type | Route to |
|---|---|
| Email marketing strategy (not GetResponse-specific) | `/sales-email-marketing` |
| Funnel strategy across tools | `/sales-funnel` |
| Webinar selling strategy | `/sales-webinar` |
| Course/membership strategy | `/sales-membership` |
| Lead scoring design | `/sales-lead-score` |
| SPF/DKIM/DMARC setup across tools | `/sales-deliverability` |
| Connecting GetResponse to CRM via Zapier | `/sales-integration` |
| Live chat strategy across tools | `/sales-live-chat` |

Otherwise, answer directly with GetResponse-specific guidance below.

## Step 3 — GetResponse platform reference

### Email marketing

- **Newsletter (broadcast)**: One-time email sends to lists or segments. Drag-and-drop editor with 100+ templates. AI content generator for subject lines and body copy.
- **A/B testing**: Test subject lines, content, send time, or from field. Up to 5 variants. Auto-send winner after test period.
- **Perfect Timing**: AI-based per-subscriber send time optimization — delivers emails when each contact is most likely to engage.
- **Time Travel**: Send at a specific local time regardless of subscriber timezone.
- **RSS-to-email**: Automatically send new blog posts to subscribers.

### Autoresponders

Time-based automated email sequences triggered by subscription date:
- Day 0: Welcome email (immediate)
- Day 1: Introduction / value proposition
- Day 3: Educational content
- Day 7: Offer / CTA
- Configure per-list — each list can have its own autoresponder sequence.
- Set delivery time, day of cycle, and tracking options per message.
- Available on all plans including Starter.

### Marketing automation

Visual workflow builder (Marketer plan+ required):
- **Triggers**: Subscribe, open email, click link, purchase, visit URL, tag applied, custom event, birthday/anniversary, score change
- **Actions**: Send email, send SMS, send web push, wait, tag, score, move to list, copy to list, webhook, custom event
- **Conditions**: If/else splits based on contact data, engagement, tags, scores, consent
- **Filters**: Narrow workflow to specific segments within a running automation
- **Templates**: Pre-built workflow templates for welcome series, abandoned cart, lead nurturing, re-engagement, post-purchase
- **Starter plan limit**: 1 automation workflow. Marketer+: unlimited.

### Conversion funnels

Pre-built funnel templates that combine landing pages, emails, and (optionally) webinars into a guided conversion path:
- **Lead magnet funnel**: Landing page → opt-in form → autoresponder sequence → download delivery
- **Sales funnel**: Landing page → sales page → order form → thank you page (integrates with payment processors)
- **Webinar funnel**: Registration page → confirmation email → reminder sequence → webinar → follow-up
- **List building funnel**: Social ads → landing page → signup form → welcome email
- Visual funnel dashboard shows conversion at each stage.
- Available on Marketer plan+.

### Webinars

Built-in webinar platform (Creator plan+):
- **Live webinars**: Screen sharing, chat, polls, whiteboard, call-to-action buttons, file sharing
- **On-demand webinars**: Record live webinars and make available for replay
- **Attendee limits**: Creator plan: 300 attendees. MAX: 500-1,000.
- **Integration**: Webinars integrate with automation workflows — trigger emails based on registration, attendance, or non-attendance.
- **Webinar funnels**: Combine with conversion funnels for end-to-end webinar marketing (registration → reminders → live event → follow-up → offer).

### Course creator

Create and sell online courses (Creator plan+):
- **Course builder**: Modules, lessons, quizzes, certificates
- **Content types**: Video, text, PDF, downloadable files
- **Student management**: Track progress, completion rates
- **Payment**: Integrate with Stripe for paid courses
- **Student limits**: Creator plan: up to 500 students. Higher tiers: more.
- **Premium newsletters**: Paid newsletter subscriptions — recurring revenue from content.

### SMS marketing

SMS campaigns and automation (Marketer plan+):
- Send SMS broadcasts to contact lists
- SMS as an action in automation workflows (alongside email)
- SMS credits purchased separately
- Short codes and sender IDs vary by country

### Web push notifications

Browser push notifications:
- Opt-in prompt on your website
- Send push campaigns to opted-in subscribers
- Trigger push in automation workflows
- Available on all paid plans

### Live chat

Website chat widget:
- Embed on landing pages or external websites
- Capture visitor info for contact list
- Automated greeting messages
- Available on all paid plans

### Contact management & scoring

- **Lists**: Contacts organized into lists. Each list can have its own autoresponders.
- **Tags**: Apply tags manually, via import, or via automation rules
- **Custom fields**: Unlimited custom contact fields
- **Contact scoring**: Assign points based on engagement (opens, clicks, purchases, page visits). Score thresholds trigger automation actions. Marketer plan+ required.
- **Segmentation**: Filter by demographics, behavior, engagement, tags, scores, e-commerce activity. Dynamic segments auto-update.
- **Consent fields**: GDPR-compliant consent tracking

### E-commerce

- **Shopify**: Native integration — sync products, customers, orders, abandoned carts. Automated abandoned cart emails, product recommendations, post-purchase flows.
- **WooCommerce**: WordPress plugin — same capabilities as Shopify integration.
- **Magento, BigCommerce, PrestaShop**: Additional e-commerce connectors.
- **Product recommendations**: AI-powered product recommendations in emails based on purchase/browse history.
- **Promo codes**: Generate and distribute unique promo codes in emails.
- **Revenue tracking**: Attribute revenue to specific campaigns and automations.

### Data model

| Object | Key fields | Notes |
|---|---|---|
| **Contact** | `email`, `name`, `customFieldValues`, `tags`, `scoring`, `campaign` (list) | Contacts belong to campaigns (lists) |
| **Campaign** (list) | `campaignId`, `name`, `description`, `optinTypes` | "Campaign" = mailing list in GetResponse terminology |
| **Newsletter** | `newsletterId`, `name`, `subject`, `sendOn`, `campaign` | One-time email sends |
| **Autoresponder** | `autoresponderId`, `name`, `subject`, `triggerSettings` | Day-based automated emails |
| **Automation** | `workflowId`, `name`, `status` | Visual automation workflows |
| **Landing page** | `landingPageId`, `name`, `url` | Hosted landing pages |
| **Webinar** | `webinarId`, `name`, `startsOn`, `status` | Live or on-demand webinars |
| **Tag** | `tagId`, `name` | Applied to contacts for segmentation |
| **Custom field** | `customFieldId`, `name`, `type`, `values` | Contact custom attributes |

**Important terminology**: In GetResponse, a "campaign" means a **mailing list**, not an email send. An email send is called a "newsletter." This is a common source of confusion.

### API quick reference

| Action | Method & endpoint |
|---|---|
| Get contacts | `GET /v3/contacts` |
| Create contact | `POST /v3/contacts` |
| Update contact | `POST /v3/contacts/{contactId}` |
| Delete contact | `DELETE /v3/contacts/{contactId}` |
| Get campaigns (lists) | `GET /v3/campaigns` |
| Create campaign (list) | `POST /v3/campaigns` |
| Get newsletters | `GET /v3/newsletters` |
| Create newsletter | `POST /v3/newsletters` |
| Get autoresponders | `GET /v3/autoresponders` |
| Get tags | `GET /v3/tags` |
| Create tag | `POST /v3/tags` |
| Get custom fields | `GET /v3/custom-fields` |
| Get landing pages | `GET /v3/landing-pages` |
| Get webinars | `GET /v3/webinars` |

- **Base URL**: `https://api.getresponse.com/v3` (retail), `https://api3.getresponse360.com/v3` (MAX)
- **Auth**: `X-Auth-Token: api-key {your-api-key}` header. OAuth 2.0 also supported.
- **Rate limits**: 30,000 calls/10 min, 80 calls/sec, max 10 simultaneous requests. API keys expire after 90 days of inactivity.
- **MAX users**: Must include `X-Domain` header with client domain.

### Integrations

- **E-commerce**: Shopify, WooCommerce, Magento, BigCommerce, PrestaShop
- **CRM**: Salesforce (bidirectional sync), HubSpot, Zoho CRM
- **CMS**: WordPress, Squarespace, Wix
- **Webinar platforms**: Zoom, GoToWebinar (in addition to built-in webinars)
- **Payment**: Stripe, PayPal, Square (for courses and funnels)
- **Social/Ads**: Facebook Custom Audiences, Google Ads
- **Analytics**: Google Analytics
- **Zapier**: 150+ app connections
- **Webhooks/Callbacks**: Subscribe, open, click, goal reached, survey answer, unsubscribe events
- **API**: Full REST API with OAuth 2.0 and API key auth

### Pricing

As of March 2026 — verify current pricing:
- **Free**: 500 contacts, 2,500 emails/mo, basic email, landing pages, forms
- **Starter** ($19/mo, 1K contacts): Unlimited emails, autoresponders, 1 automation, landing pages, AI content
- **Marketer** ($59/mo, 1K contacts): Unlimited automations, contact scoring, SMS, advanced segmentation, webinars (100 attendees), conversion funnels
- **Creator** ($69/mo, 1K contacts): Course creator, premium newsletters, webinars (300 attendees), website builder
- **MAX/Enterprise** (custom): Transactional email, dedicated IP, SSO, priority support, 500-1000 webinar attendees
- 18% discount for annual billing. Pricing scales with contact count.

## Step 4 — Actionable guidance

### Getting started checklist

1. **Create your first campaign (list)** — this is your mailing list, not an email send
2. **Import contacts** — CSV upload, copy/paste, or API. Map fields to GetResponse custom fields
3. **Authenticate your domain** — Settings > Email Addresses > add and verify sending domain (SPF/DKIM)
4. **Build a signup form** — embed on your website for new subscriber capture
5. **Create a welcome autoresponder** — Day 0 email for immediate delivery on subscription
6. **Design your first newsletter** — use the drag-and-drop editor or AI content generator
7. **Set up automation** (Marketer+) — start with a welcome series workflow template
8. **Connect e-commerce** — if Shopify/WooCommerce, install the native integration for abandoned cart and product sync
9. **Enable tracking** — add GetResponse tracking snippet to your website for page visit tracking in automations
10. **Set up contact scoring** (Marketer+) — define scoring rules for engagement actions

### Key metrics to track

| Metric | Where in GetResponse | Benchmark |
|---|---|---|
| Open rate | Newsletter statistics | 20-25% |
| Click rate | Newsletter statistics | 2-5% |
| Autoresponder completion | Autoresponder statistics | 40-60% |
| Automation conversion | Workflow statistics | Varies by goal |
| Landing page conversion | Landing page statistics | 20-40% |
| Webinar attendance rate | Webinar statistics | 30-50% of registrants |
| Contact score distribution | Contacts > Scoring | Healthy: bell curve |
| Unsubscribe rate | Newsletter statistics | Below 0.3% |

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **"Campaign" means mailing list, not email send.** In GetResponse, a "campaign" is a contact list. An email send is a "newsletter." This terminology confuses every new user and causes API mistakes — `POST /v3/campaigns` creates a list, not an email. If someone asks how to "create a campaign," clarify whether they mean a list or an email.
2. **Starter plan only allows 1 automation workflow.** Marketing automation requires Marketer plan ($59/mo) for unlimited workflows. Users on Starter who need multiple automations will hit this wall quickly. Autoresponders (time-based sequences) are unlimited on all plans — use those as a workaround for simple sequences.
3. **Contact scoring requires Marketer plan.** Contact scoring is not available on Free or Starter. If a user on Starter asks about lead scoring, recommend upgrading or using tag-based manual scoring as a workaround.
4. **Pricing is based on peak subscriber count.** GetResponse bills based on the highest contact count during the billing period, not the average. A temporary spike (e.g., importing a large list for cleaning) can push you into a higher tier for the entire month. Clean lists before importing.
5. **Transactional email is MAX-only.** Unlike Brevo or SendGrid, GetResponse's transactional email (order confirmations, password resets) is only available on the MAX/Enterprise plan. Users on Starter/Marketer/Creator who need transactional email must use a separate provider.

## Related skills

- `/sales-email-marketing` — Email marketing strategy across platforms (not GetResponse-specific)
- `/sales-funnel` — Funnel strategy and optimization across tools
- `/sales-webinar` — Webinar selling strategy across tools
- `/sales-membership` — Course and membership strategy across tools
- `/sales-lead-score` — Lead scoring model design across tools
- `/sales-live-chat` — Live chat strategy across tools
- `/sales-deliverability` — Email deliverability (SPF/DKIM/DMARC, warmup, sender reputation)
- `/sales-transactional-email` — Transactional email delivery (provider comparison)
- `/sales-integration` — Connect GetResponse to CRM, e-commerce, and other tools
- `/sales-checkout` — Checkout optimization (for GetResponse sales funnels)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building a welcome automation workflow
**User says**: "How do I create a welcome series in GetResponse that sends 5 emails over 2 weeks to new subscribers?"
**Skill does**: Clarifies plan (need Marketer+ for automation, but Starter can use autoresponders). For Marketer+: walks through creating an automation workflow with Subscribe trigger → Send email (welcome) → Wait 1 day → Send email (value prop) → Wait 2 days → Send email (social proof) → Wait 3 days → Send email (offer) → Wait 3 days → Send email (urgency). For Starter: sets up autoresponders on Day 0, 1, 3, 6, 10. Includes subject line suggestions and exit conditions.
**Result**: Complete welcome sequence with timing, content strategy, and platform-specific setup steps

### Example 2: Setting up an e-commerce abandoned cart flow
**User says**: "I have a Shopify store. How do I set up abandoned cart emails in GetResponse?"
**Skill does**: Walks through: 1) Install GetResponse Shopify integration from Shopify App Store. 2) Map products and customers. 3) Create automation workflow: trigger on "Cart abandoned" event → Wait 1 hour → Send email (cart reminder with product images) → Wait 24 hours → If not purchased → Send email (social proof + urgency) → Wait 48 hours → If not purchased → Send email (discount code). Includes dynamic product block setup and promo code generation.
**Result**: 3-step abandoned cart automation with Shopify product data and dynamic content

### Example 3: Creating a webinar funnel
**User says**: "How do I set up a webinar funnel in GetResponse to generate leads and sell my course?"
**Skill does**: Walks through conversion funnel setup: 1) Create webinar funnel template. 2) Design registration landing page with webinar details. 3) Set up confirmation + reminder autoresponder sequence (immediate confirmation, 24hr reminder, 1hr reminder). 4) Configure live webinar with polls, CTA buttons pointing to course sales page. 5) Post-webinar automation: Send recording to attendees, special offer to non-attendees, follow-up sequence with testimonials and urgency. 6) Connect to course creator for enrollment.
**Result**: End-to-end webinar funnel from registration through course sale

## Troubleshooting

### Emails going to spam
**Symptom**: Newsletters landing in spam or promotions tab
**Cause**: Domain not authenticated, sending to unengaged contacts, or content triggers
**Solution**: 1) Verify SPF/DKIM authentication in Settings > Email Addresses. 2) Stop sending to contacts who haven't opened in 90+ days — use engagement-based segmentation. 3) Reduce image-to-text ratio. 4) Avoid spam trigger words. 5) If on MAX, request a dedicated IP and warm it up. See `/sales-deliverability` for cross-platform guidance.

### Automation workflow not triggering
**Symptom**: Contacts enter the automation but don't receive messages
**Cause**: Workflow not published, trigger conditions too narrow, or time zone mismatch
**Solution**: 1) Verify the workflow status is "Published" (not Draft). 2) Check the trigger conditions — ensure contacts match the entry criteria. 3) Verify wait steps are set correctly (hours vs days). 4) Check that contacts have email consent and aren't suppressed. 5) Review the workflow log for specific contacts to see where they stopped.

### Contact scoring not working
**Symptom**: All contacts showing 0 score or scores not updating
**Cause**: Scoring rules not configured, plan doesn't include scoring, or tracking not installed
**Solution**: 1) Verify you're on Marketer plan or higher (Starter/Free doesn't include scoring). 2) Check Settings > Contact Scoring — scoring rules must be explicitly defined (e.g., +10 for open, +20 for click, +50 for purchase). 3) For page visit scoring, ensure the GetResponse tracking snippet is installed on your website. 4) Scoring recalculates periodically — wait for the next refresh cycle.
