---
name: sales-mailchimp
description: "Mailchimp platform help — email marketing campaigns, Customer Journey Builder automations, SMS marketing, audience management/CRM, landing pages, A/B testing, multivariate testing, transactional email (Mandrill), Content Studio, generative AI (Intuit Assist), retargeting ads, 300+ integrations. Use when asking 'how do I do X in Mailchimp', setting up Mailchimp campaigns, configuring Customer Journey Builder, managing Mailchimp audiences, using Mandrill transactional email, or troubleshooting Mailchimp deliverability. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), funnel strategy (use /sales-funnel), or connecting tools via middleware (use /sales-integration)."
argument-hint: "[describe what you need help with in Mailchimp]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, marketing-automation, platform]
github: "https://github.com/mailchimp"
---
# Mailchimp Platform Help

Help the user with Mailchimp platform questions — from email campaign setup and Customer Journey Builder automations through SMS marketing, audience management, landing pages, A/B testing, transactional email (Mandrill), Content Studio, retargeting ads, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Mailchimp do you need help with?**
   - A) Email campaigns — creating, scheduling, templates, send time optimization
   - B) Automations / Journeys — Customer Journey Builder, classic automations, triggers
   - C) SMS marketing — setup, credits, MMS, compliance
   - D) Audience / Contacts — segments, tags, custom fields, imports, signup forms
   - E) Landing pages / Forms — building pages, pop-ups, embedded forms
   - F) Transactional email — Mandrill API, triggered messages (receipts, resets, notifications)
   - G) Analytics / Reporting — campaign reports, comparative reporting, smart recommendations
   - H) Integrations / API — connecting to e-commerce, CRM, Zapier, Marketing API
   - I) Account / Billing — plans, pricing, contact limits, add-ons
   - J) Something else — describe it

2. **What's your role?**
   - A) Marketing manager / email marketer
   - B) E-commerce store owner
   - C) Admin / account owner
   - D) Developer / technical
   - E) Agency / freelancer
   - F) Founder / solo operator
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability -> `/sales-deliverability`
- Funnel strategy / conversion optimization -> `/sales-funnel`
- Connecting Mailchimp to other tools via Zapier or middleware -> `/sales-integration`
- Checkout / payment page strategy -> `/sales-checkout`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Mailchimp platform reference

Provide module-by-module guidance based on the user's area:

### Email marketing
- **Drag-and-drop editor**: Visual email builder with content blocks — no code required
- **Templates**: Pre-built templates on all plans; custom-coded HTML templates on Standard+
- **Broadcasts**: One-time email sends to a segment or full audience
- **Scheduling**: Schedule sends for a specific date/time or use send time optimization (Standard+) to deliver when each contact is most likely to engage
- **Send time optimization**: Machine learning picks the best send time per contact based on historical engagement — requires Standard plan or above
- **Personalization**: Merge tags for dynamic content (first name, company, custom fields)

### Customer Journey Builder
- **What it is**: Visual automation workflow builder — the primary automation tool in Mailchimp (Standard+ only)
- **Triggers**: Signup, purchase, tag added/removed, date-based, API event, abandoned cart, audience field change
- **Conditions**: If/else branching based on contact data, behavior, or purchase history
- **Actions**: Send email, send SMS, add/remove tag, update contact field, webhook, wait step
- **Wait steps**: Time delay or wait-until-condition for pacing the journey
- **Classic Automations**: Simpler single-path automations still available on all paid plans (welcome series, birthday, date-based)
- **Key limitation**: Customer Journey Builder requires Standard plan. Essentials only gets basic single-step classic automations.

### SMS marketing
- **Add-on for paid plans**: Not available on Free plan
- **Coverage**: 37 countries supported
- **Credit-based pricing**: Starting at $20 per 1,000 credits
- **MMS support**: Available on Standard and Premium plans, US and Canada only
- **Integration with journeys**: SMS steps can be added to Customer Journey Builder workflows alongside email steps
- **Compliance**: Built-in opt-in/opt-out management, TCPA and carrier compliance tools
- **Key limitation**: Credits expire monthly and do not roll over

### Audience management / CRM
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

### Content Studio
- **Asset management**: Central library for images, files, and creative assets
- **Generative AI (Intuit Assist)**: AI-powered content generation for email copy and subject lines
- **Subject line helper**: AI suggestions and performance predictions for subject lines
- **Dynamic content**: Show different content blocks to different segments within a single email (Standard+)

### Landing pages & website builder
- **Drag-and-drop builder**: No-code landing page and website creation
- **Forms**: Embedded signup forms and pop-ups to capture leads
- **Pop-ups**: Customizable pop-up forms triggered by scroll, time, or exit intent
- **Free on all plans**: Landing pages are available even on the Free plan — no additional cost

### A/B testing and multivariate testing
- **A/B testing**: Test two variants of subject line, from name, send time, or content. Available on all paid plans (Essentials, Standard, Premium).
- **Multivariate testing**: Test up to 8 combinations of subject line, from name, send time, and content simultaneously. **Premium plan only.**
- **Winner selection**: Automatic winner selection based on opens, clicks, or revenue after a configurable test duration

### Transactional email (Mandrill)
- **What it is**: Triggered one-to-one emails — order confirmations, password resets, shipping notifications, account alerts
- **Separate API**: Mandrill has its own API at `https://mandrillapp.com/api/1.0/`
- **Authentication**: API key included in the POST request body (all Mandrill methods are POST)
- **Pricing**: Separate add-on pricing based on email volume — not included in any marketing plan by default
- **Requirement**: Must be on Standard plan or above to add the Mandrill add-on
- **Templates**: Mandrill supports its own template system with Handlebars merge tags
- **Webhooks**: Message event webhooks — send, deferral, hard-bounce, soft-bounce, delivered, open, click, spam, unsub, reject

### Retargeting ads
- **Facebook & Instagram**: Create retargeting ad campaigns targeting Mailchimp contacts or website visitors
- **Google retargeting**: Retarget Mailchimp contacts via Google Ads
- **Lookalike audiences**: Build lookalike audiences from your Mailchimp contact lists
- **Managed from Mailchimp**: Create and manage ad campaigns without leaving the Mailchimp dashboard

### Analytics & reporting
- **Campaign reports**: Opens, clicks, bounces, unsubscribes, revenue attribution per campaign
- **Comparative reporting**: Benchmark campaigns against each other over time (Standard+)
- **Smart recommendations**: AI-powered suggestions for improving engagement based on your data
- **E-commerce reporting**: Revenue, orders, and customer lifetime value tracking (requires e-commerce integration)
- **Audience insights**: Growth trends, engagement levels, top locations, predicted demographics

### Data model

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

### API quick reference

- **Marketing API base URL**: `https://<dc>.api.mailchimp.com/3.0/` (replace `<dc>` with your data center, e.g., `us21`)
- **Authentication**: Basic Auth with any string as username and your API key as password, or Bearer token
- **Concurrency limit**: 10 concurrent connections per API key
- **Batch operations**: Use the batch endpoint (`/3.0/batches`) for high-volume operations — submit up to 500 operations per batch request
- **Transactional API (Mandrill)**: `https://mandrillapp.com/api/1.0/` — API key in POST body, all methods are POST
- **Webhooks**: Marketing API webhooks (audience events via list webhook config) + Mandrill webhooks (message events: send, deferral, hard-bounce, soft-bounce, delivered, open, click, spam, unsub, reject)
- **Docs**: mailchimp.com/developer/

### Integrations

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

### Pricing (USD, as of March 2026 — verify current pricing at mailchimp.com)

| Plan | Price | Contacts | Sends/mo | Key gated features |
|------|-------|----------|----------|-------------------|
| **Free** | $0 | 250 | 500 (250/day) | Basic email, forms, landing pages, Mailchimp branding on all emails |
| **Essentials** | From $13/mo | 500+ | 10x contacts | A/B testing, 24/7 support, remove branding, basic automations, 3 seats |
| **Standard** | From $20/mo | 500+ (to 100K) | 12x contacts | Customer Journey Builder, send time optimization, dynamic content, predictive segmentation, comparative reporting, 5 seats |
| **Premium** | From $350/mo | 10K+ (to 1.5M) | 15x contacts | Multivariate testing, advanced segmentation, phone support, unlimited seats |

**SMS add-on**: Starting at $20 per 1,000 credits (paid plans only). Credits expire monthly.

**Transactional email (Mandrill)**: Separate add-on with volume-based pricing. Requires Standard+ plan.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Setting up an email campaign**:
   1. Navigate to Campaigns > Create Campaign > Email
   2. Select your audience or segment
   3. Choose a template or start from scratch in the drag-and-drop editor
   4. Add personalization with merge tags (e.g., `*|FNAME|*`)
   5. Configure subject line — use the subject line helper for AI suggestions
   6. Preview and test with a test send to yourself
   7. Schedule or send immediately — enable send time optimization on Standard+ for best results

2. **Building a Customer Journey automation** (Standard+ required):
   1. Navigate to Automations > Customer Journeys > Create Journey
   2. Choose a starting trigger (signup, purchase, tag added, date, API event, abandoned cart)
   3. Add journey steps: send email, send SMS, wait, if/else branch, add tag, webhook
   4. Configure if/else conditions to branch based on contact data or behavior
   5. Set wait steps between actions (time delay or wait-until-condition)
   6. Test the journey with a test contact before activating
   7. Activate and monitor the journey analytics dashboard

3. **Setting up SMS marketing**:
   1. Verify you are on a paid plan (SMS is not available on Free)
   2. Navigate to SMS > Set Up SMS Marketing
   3. Register your business for SMS compliance (required for sending)
   4. Purchase SMS credits ($20/1,000 credits)
   5. Create an SMS campaign or add SMS steps to a Customer Journey
   6. Build your SMS subscriber list with compliant opt-in forms
   7. Monitor credit usage — credits expire monthly and do not roll over

4. **Creating a landing page with form**:
   1. Navigate to Campaigns > Create Campaign > Landing Page
   2. Choose a template or start from scratch
   3. Add a signup form block to capture leads
   4. Map form fields to audience fields (email, name, custom fields)
   5. Configure the confirmation action (thank-you page or redirect URL)
   6. Publish — landing pages are free on all plans including Free

5. **Connecting to Shopify/WooCommerce**:
   1. Navigate to Integrations and search for your e-commerce platform
   2. Follow the connection flow to authorize Mailchimp access to your store
   3. Configure sync settings — products, customers, orders
   4. Set up abandoned cart automation using Customer Journey Builder (Standard+) or classic automation (Essentials)
   5. Enable purchase-based segments and revenue tracking in campaign reports
   6. Verify the integration is syncing by checking the audience for imported customers

## Gotchas

> Best-effort from research — verify details against current Mailchimp documentation.

1. **Mailchimp bills for ALL contacts including unsubscribed and non-subscribed.** Unlike most ESPs, unsubscribed contacts still count toward your contact limit and billing tier. Archive or permanently delete contacts you are not mailing to control costs. Audit your audience regularly.
2. **Free plan has Mailchimp branding on every email and only 500 sends/mo.** The Free plan is essentially a trial — it includes mandatory Mailchimp branding in the footer and a 250/day send limit. Not viable for production email marketing at any real scale.
3. **Customer Journey Builder (the good automation tool) requires Standard plan.** Essentials only gets basic single-step classic automations. If you need if/else branching, multi-step workflows, or advanced triggers, you must upgrade to Standard ($20/mo+).
4. **Transactional email (Mandrill) is a separate add-on with its own API and pricing.** It is not included in any marketing plan by default. You must be on Standard+ to even add it, and it has its own volume-based billing. Do not confuse Mandrill with Mailchimp's marketing email.
5. **SMS credits expire monthly and do not roll over.** Budget carefully and only purchase the credits you will actually use each month. Unused credits at the end of the billing cycle are lost.

## Step 5 — Related skills

- `/sales-email-marketing` — Email marketing strategy and best practices (platform-agnostic)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-funnel` — Funnel strategy and conversion optimization
- `/sales-integration` — Connect Mailchimp to other tools via Zapier, Make, or API
- `/sales-checkout` — Checkout and payment page optimization (pairs with Mailchimp e-commerce integrations)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up a welcome automation for new Shopify customers
**User says**: "How do I set up a welcome email series for new customers from my Shopify store in Mailchimp?"
**Skill does**:
1. Confirms the Shopify integration is connected and syncing customers to the Mailchimp audience
2. Walks through creating a Customer Journey with a "purchase" or "signup from integration" trigger filtered to Shopify
3. Builds a 3-email welcome series: thank-you email (immediate), product tips (day 3), review request or cross-sell (day 7)
4. Adds if/else branching — e.g., if customer opened email 1, send product tips; if not, send a re-engagement nudge
5. Configures tags to mark customers who complete the journey for future segmentation
**Result**: User has an automated welcome series that triggers for every new Shopify customer with branching logic and tagging

### Example 2: Migrating from another ESP to Mailchimp
**User says**: "I'm moving from Klaviyo to Mailchimp. What do I need to know?"
**Skill does**:
1. Explains the contact import process — CSV export from Klaviyo, map fields to Mailchimp merge fields, import with appropriate status (subscribed only — do not import unsubscribed contacts to avoid billing bloat)
2. Warns about Mailchimp billing for all contacts including unsubscribed — only import active subscribers
3. Walks through recreating key automations in Customer Journey Builder (requires Standard plan)
4. Covers DNS changes — update SPF/DKIM/DMARC to authorize Mailchimp's sending domains
5. Recommends a warmup approach: start sending to most engaged contacts first, gradually expand to full list over 2-4 weeks
**Result**: User has a migration plan covering data, automations, DNS, and warmup to avoid deliverability issues

### Example 3: Setting up SMS + email abandoned cart recovery
**User says**: "I want to set up abandoned cart recovery with both email and SMS in Mailchimp."
**Skill does**:
1. Confirms the user is on Standard+ plan (required for Customer Journey Builder and SMS in journeys)
2. Verifies e-commerce integration is connected (Shopify/WooCommerce) and abandoned cart data is flowing
3. Builds a Customer Journey with an "abandoned cart" trigger
4. Designs a multi-step flow: SMS reminder (1 hour after abandonment), email with cart contents (4 hours), follow-up email with incentive (24 hours)
5. Adds if/else branching — if customer completes purchase after SMS, skip remaining steps; if not, continue the email sequence
6. Notes SMS credit costs and monthly expiration — budget credits based on expected cart abandonment volume
**Result**: User has a combined SMS + email abandoned cart recovery journey with smart branching to stop messaging once the customer converts

## Troubleshooting

### Emails going to spam / low deliverability
**Symptom**: Recipients report finding Mailchimp emails in spam, or open rates are unusually low across campaigns
**Cause**: Missing or misconfigured domain authentication (SPF/DKIM/DMARC), sending to unengaged contacts, spammy content, or sudden volume spikes after migration
**Solution**: Verify domain authentication in Settings > Domains — Mailchimp provides guided setup for SPF, DKIM, and DMARC. Remove contacts who haven't engaged in 6+ months to improve sender reputation. Check campaign content for spam trigger words. If you recently migrated, send to your most engaged segment first and gradually expand volume over 2-4 weeks. Use Mailchimp's inbox preview tool to check rendering and spam score. See `/sales-deliverability` for a comprehensive diagnosis framework.

### Contacts not receiving automated emails (journey not triggering)
**Symptom**: Customers or subscribers are not entering a Customer Journey or not receiving automated emails
**Cause**: Journey is paused or in draft, trigger conditions are too narrow, contacts don't match the entry criteria, or the contact is in a status that prevents sending (unsubscribed, cleaned, pending)
**Solution**: Verify the journey status is "Active" (not draft or paused). Check the trigger conditions — ensure they match the contacts you expect to enter. Verify contacts have "subscribed" status (Mailchimp will not send marketing email to unsubscribed, cleaned, or pending contacts). Check if the contact has already been through the journey (some journeys only allow one entry per contact). Test with a known contact by manually triggering the entry action (e.g., adding a tag). Review the journey activity log for errors or skipped contacts.

### Contact status confusion when automating via API or Make/Zapier
**Symptom**: Automation scenarios (Make, Zapier, or direct API) fail to find or update contacts because of status filter mismatches — e.g., filtering for "transactional" when the contact is "non-subscribed", or vice versa
**Cause**: Mailchimp has 5 distinct contact statuses that are easily conflated: **subscribed** (opted in, receives marketing), **unsubscribed** (opted out), **non-subscribed** (in audience but never opted in — e.g., imported or transactional-only), **cleaned** (hard-bounced, permanently removed from sending), and **transactional** (can only receive Mandrill transactional emails, excluded from marketing). The API treats these as separate enum values. Automation tools like Make expose them as filter options, and selecting the wrong one silently returns zero results.
**Solution**: Before building automations, verify the exact status of target contacts in Mailchimp's audience view (filter by status). In Make's "Watch Subscribers" module, set the status filter to match the actual contact status — not what you think it should be. Use "any" status if unsure, then filter downstream. For bulk archiving non-subscribed contacts, use the Marketing API `PATCH /lists/{list_id}/members/{subscriber_hash}` with `"status": "unsubscribed"` first, then archive via `DELETE` — you cannot archive a contact directly from all statuses. Test with "Run once" and disconnect downstream actions to avoid accidental data loss.

### High unsubscribe rate after migration
**Symptom**: Unsubscribe rates spike significantly after migrating to Mailchimp from another ESP
**Cause**: Importing contacts who were not recently engaged, contacts not recognizing the new sender, or Mailchimp's different footer/branding confusing recipients
**Solution**: Only import contacts who have engaged (opened or clicked) in the last 90-180 days. Send a re-introduction email explaining the platform change before resuming regular campaigns. Customize the email footer to match your brand so it looks familiar. Segment by engagement level and start with your most active contacts. If you imported unsubscribed contacts by mistake, archive them immediately — remember Mailchimp bills for all contacts regardless of status. Monitor unsubscribe rates per campaign and pause sending to cold segments if rates exceed 0.5%.
