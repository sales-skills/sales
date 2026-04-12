---
name: sales-mailchimp
description: "Mailchimp platform help — email marketing campaigns, Customer Journey Builder automations, SMS marketing, audience management/CRM, landing pages, A/B testing, multivariate testing, transactional email (Mandrill), Content Studio, generative AI (Intuit Assist), retargeting ads, 300+ integrations. Use when Mailchimp campaigns have low open rates, Customer Journey Builder automations not firing, audience lists messy or duplicate-heavy, Mandrill transactional emails bouncing, or Mailchimp emails landing in spam. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), funnel strategy (use /sales-funnel), or connecting tools via middleware (use /sales-integration)."
argument-hint: "[describe what you need help with in Mailchimp]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, marketing-automation, platform]
github: "https://github.com/mailchimp"
---
# Mailchimp Platform Help

Help the user with Mailchimp platform questions — from email campaign setup and Customer Journey Builder automations through SMS marketing, audience management, landing pages, A/B testing, transactional email (Mandrill), Content Studio, retargeting ads, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

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
