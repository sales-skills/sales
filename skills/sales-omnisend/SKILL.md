---
name: sales-omnisend
description: "Omnisend platform help — email campaigns, SMS marketing, web push notifications, marketing automation workflows, popups/forms, segmentation, product recommendations, reporting, Shopify/WooCommerce/BigCommerce integrations, API. Use when asking 'how do I do X in Omnisend', configuring Omnisend settings, setting up automation workflows, managing campaigns, connecting ecommerce integrations, or using the Omnisend API. Do NOT use for cross-platform email marketing strategy (use /sales-email-marketing), cross-platform SMS strategy (use /sales-sms-marketing), cross-platform deliverability (use /sales-deliverability), cross-platform push strategy (use /sales-push-notification), or connecting tools (use /sales-integration)."
argument-hint: "[describe what you need help with in Omnisend]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Omnisend Platform Help

Help the user with Omnisend platform questions — from email/SMS campaign setup and automation workflows through popups, segmentation, reporting, ecommerce integrations, and API.

## Step 1 — Gather context

Ask the user:

1. **What area of Omnisend do you need help with?**
   - A) Email campaigns — creating, designing, sending broadcasts
   - B) SMS campaigns — setting up SMS marketing
   - C) Automation workflows — welcome, cart abandonment, browse abandonment, win-back, custom
   - D) Popups & forms — signup forms, exit-intent, wheel of fortune
   - E) Segmentation — creating segments, targeting by behavior/purchase history
   - F) Web push notifications — browser push setup and campaigns
   - G) Reporting & analytics — campaign performance, revenue attribution
   - H) Integrations — Shopify, WooCommerce, BigCommerce, Zapier, API
   - I) Deliverability — domain authentication, warmup, sender reputation
   - J) Admin — billing, plan features, account settings
   - K) Something else — describe it

2. **What's your ecommerce platform?**
   - A) Shopify
   - B) WooCommerce
   - C) BigCommerce
   - D) Wix
   - E) Custom / other
   - F) Not using ecommerce

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Email marketing strategy (platform-agnostic) → `/sales-email-marketing`
- SMS marketing strategy (platform-agnostic) → `/sales-sms-marketing`
- Cross-platform deliverability → `/sales-deliverability`
- Push notification strategy → `/sales-push-notification`
- Tool integration architecture → `/sales-integration`
- List/audience growth strategy → `/sales-audience-growth`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Omnisend platform reference

### Email Campaigns
- **What it is**: Broadcasts sent to contacts or segments — newsletters, promotions, product announcements
- **Editor**: Drag-and-drop email editor with 250+ templates, product picker (pulls from your store), dynamic discount codes, product recommendations
- **A/B testing**: Test subject lines, sender name, and content on Standard+ plans. Split audience automatically, send winner to remainder.
- **Campaign Booster**: Auto-resend campaign to non-openers with a different subject line after a configurable delay
- **Best practices**: Use product recommendation blocks for ecommerce. Segment by engagement. A/B test subject lines on every campaign.

### SMS Marketing
- **What it is**: SMS campaigns and automated SMS messages sent to opted-in contacts
- **Opt-in**: Separate SMS consent required (not inherited from email opt-in). Collect via popups, checkout, or keyword opt-in.
- **SMS credits**: Pro plan includes SMS credits; Standard plan has SMS as paid add-on. Credits vary by country.
- **Character limits**: 160 chars (GSM-7) or 70 chars (Unicode). Messages over limit split into multiple segments at higher cost.
- **MMS**: Supported — include images in SMS messages for higher engagement
- **Two-way SMS**: Contacts can reply to SMS messages. Replies visible in Omnisend.
- **Compliance**: TCPA compliance built in — automatic quiet hours, opt-out handling ("STOP" keyword), consent tracking

### Automation Workflows
- **What it is**: Trigger-based automated message sequences — the core of Omnisend's value
- **Pre-built workflows** (ready to activate):
  - Welcome series (new subscriber)
  - Abandoned cart (cart created, not completed)
  - Browse abandonment (product/category viewed, no purchase)
  - Order confirmation & shipping updates
  - Post-purchase follow-up (review request, cross-sell)
  - Win-back / re-engagement (lapsed customer)
  - Birthday / anniversary
  - Back-in-stock notification
- **Custom workflows**: Build from scratch with any trigger + conditions + actions
- **Multi-channel**: Each workflow step can be email, SMS, or web push — mix channels in one automation
- **Splits and conditions**: A/B split testing within workflows, conditional branches based on segment membership, purchase history, engagement
- **Timing**: Configurable delays between steps (minutes, hours, days)
- **Exit conditions**: Auto-remove contacts from workflow when they take the desired action (purchase, resubscribe)

### Popups & Forms
- **Types**: Popup, embedded form, landing page, Wheel of Fortune (gamified spin-to-win), teaser (small persistent trigger)
- **Targeting**: Show based on URL, device, referral source, time on page, scroll depth, exit intent, new vs returning visitor
- **Multi-step forms**: Collect email first, then SMS on a second step (increases overall opt-in rate)
- **Discount delivery**: Auto-apply discount codes to form submissions
- **A/B testing**: Test form design, copy, and offers

### Segmentation
- **Segment types**: Based on shopping behavior (purchased, viewed, added to cart), email/SMS engagement (opened, clicked, subscribed date), contact properties (tags, location, custom fields), and campaign activity
- **Dynamic segments**: Auto-update as contacts match/unmatch conditions
- **Lifecycle stages**: Omnisend auto-assigns lifecycle stages — New Subscriber, Active Customer, At Risk, Lapsed, Champions
- **Product-based segments**: Contacts who bought/viewed specific products or categories
- **RFM analysis**: Built-in Recency-Frequency-Monetary scoring for customer value segmentation

### Web Push Notifications
- **What it is**: Browser push notifications to opted-in website visitors
- **Unlimited on all plans**: Including free plan — no extra cost
- **Triggers**: Manual send or automation workflow step
- **Content**: Title, message, image, URL, action buttons
- **Limitation**: Web push only — no native mobile app push (use with Shopify's native push or a dedicated push tool for mobile)

### Reporting & Analytics
- **Campaign reports**: Opens, clicks, unsubscribes, revenue attributed per campaign
- **Automation reports**: Revenue per workflow, conversion rate, per-step performance
- **Sales dashboard**: Revenue attribution across all channels (email, SMS, push), customer lifetime value trends
- **Segment performance**: Compare performance across segments
- **Click maps**: Visual heatmap of where contacts click in your emails

### Omnisend data model

Core entities — understand these to navigate the UI and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Contact** | A person in your audience (email, phone, or both) | Has Tags, belongs to Segments, has Events |
| **Campaign** | A one-time email/SMS broadcast | Sent to a Segment or list of Contacts |
| **Automation** (Workflow) | A trigger-based multi-step sequence | Contains Steps (email, SMS, push, delay, split) |
| **Product** | A product from your ecommerce store | Synced from Shopify/WooCommerce/BigCommerce |
| **Order** | A completed purchase | Belongs to a Contact, contains Products |
| **Event** | A tracked action (page view, cart, purchase) | Belongs to a Contact, triggers Automations |
| **Segment** | A dynamic group of contacts based on rules | Used as campaign audience or workflow condition |
| **Form** | A popup, embedded form, or landing page | Creates/tags Contacts on submission |

### API & Integrations

**For detailed API documentation including all endpoints, authentication, rate limits, and data models, always consult `references/omnisend-api-reference.md`.** Point the user to this file for the full endpoint catalog, request/response schemas, and rate limit details.

**Quick reference**: Base URL `https://api.omnisend.com/api/`, API key auth (`X-API-KEY` header), header-based versioning (`Omnisend-Version: 2026-03-15`), cursor-based pagination. Key capabilities: contact management, campaign CRUD, product sync, event tracking, segment management, analytics.

### Native integrations
- **Ecommerce**: Shopify (deep — products, orders, carts, customers, browse events), WooCommerce (plugin), BigCommerce (native), Wix, Ecwid
- **Ecommerce features**: Product sync, order sync, cart tracking, browse tracking, customer data sync, revenue attribution
- **Automation**: Zapier (triggers for new subscriber, new order; actions for adding contacts), Make
- **Reviews**: Shopify product reviews, Loox, Judge.me, Yotpo, Stamped
- **Loyalty**: Smile.io, LoyaltyLion
- **Other**: Google Ads (audience sync), Facebook Ads (audience sync), Gorgias, Zendesk

### Pricing (as of April 2026 — verify current pricing)
- **Free**: 250 contacts, 500 emails/mo, unlimited web push, all features, 60 SMS credits
- **Standard**: From $16/mo (500 contacts, 6,000 emails/mo, SMS add-on)
- **Pro**: From $59/mo (unlimited emails, advanced reporting, higher SMS allowance)
- Scales by contact count. 30% discount for 3-month prepay on first subscription.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps with Omnisend UI navigation paths
2. **Configuration recommendations** — specific settings to change
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/omnisend-api-reference.md`."

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't confuse "campaign" with "automation."** In Omnisend, a campaign is a one-time broadcast. An automation (workflow) is a trigger-based sequence. Claude often generates automation advice when the user asks about campaigns and vice versa.
- **Don't assume SMS is included on all plans.** The Free plan has only 60 SMS credits. Standard plan requires SMS credits as a paid add-on. Pro plan includes SMS credits but they're country-dependent and limited. Always check the user's plan before recommending SMS workflows.
- **Don't skip SMS consent.** Omnisend requires separate SMS opt-in consent. Email opt-in does NOT grant SMS permission. Multi-step popups (email first, then SMS) are the recommended approach.
- **Don't recommend features without checking the plan.** Campaign Booster, advanced reporting, and higher SMS allowances are plan-gated. A/B testing for automations requires Standard+.
- **Don't overlook the ecommerce platform connection.** Most Omnisend features depend on an active ecommerce integration. Product recommendations, cart abandonment, browse abandonment, and order-based segments all require product/order data syncing from Shopify/WooCommerce/BigCommerce.

## Step 5 — Related skills

- `/sales-email-marketing` — Cross-platform email marketing strategy (broadcasts, nurture, automation, segmentation)
- `/sales-sms-marketing` — Cross-platform SMS marketing strategy (opt-in, compliance, campaign types)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-push-notification` — Cross-platform push notification strategy (opt-in, timing, frequency)
- `/sales-audience-growth` — Growing your email/SMS list (lead magnets, popups, cross-promotion)
- `/sales-integration` — Connect Omnisend to other tools via webhooks, Zapier, or API
- `/sales-klaviyo` — Klaviyo platform help (if using Klaviyo instead of Omnisend)
- `/sales-mailchimp` — Mailchimp platform help (if using Mailchimp instead of Omnisend)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Cart abandonment automation
**User says**: "How do I set up abandoned cart emails in Omnisend?"
**Skill does**:
1. Confirms ecommerce platform is connected (Shopify/WooCommerce/BigCommerce required)
2. Walks through enabling the pre-built Abandoned Cart workflow: Automation > Pre-built Workflows > Abandoned Cart
3. Recommends 3-step sequence: email at 1 hour (reminder + product image), email at 24 hours (social proof), SMS at 48 hours (urgency + discount)
4. Explains exit conditions (auto-stop on purchase) and split testing options
**Result**: User has abandoned cart automation active with multi-channel sequence

### Example 2: Setting up SMS marketing
**User says**: "I want to start sending SMS campaigns in Omnisend. I'm on the Standard plan with Shopify."
**Skill does**:
1. Explains SMS credit add-on requirement for Standard plan
2. Walks through SMS opt-in setup: create a multi-step popup (email → SMS consent)
3. Configures SMS compliance settings (quiet hours, STOP keyword handling)
4. Shows how to add SMS steps to existing automation workflows
5. Warns about character limits and per-country credit costs
**Result**: User has SMS opt-in collection, compliance configured, and SMS added to key automations

### Example 3: API product sync
**User says**: "I'm on a custom ecommerce platform and need to sync products and orders to Omnisend via API"
**Skill does**:
1. Points to `references/omnisend-api-reference.md` for full API docs
2. Explains Product and Order endpoints — POST to sync catalog, POST events for order tracking
3. Covers authentication (X-API-KEY header) and versioning (Omnisend-Version header)
4. Shows how to send custom events for cart/browse tracking without a native integration
**Result**: User has an API integration plan for product sync, order tracking, and event-based automation

## Troubleshooting

### Low open rates on campaigns
**Symptom**: Campaign open rates below 15%
**Cause**: Sending to full list without segmentation, missing domain authentication, or poor subject lines
**Solution**: Authenticate your sending domain (Settings > Sender Domains — add SPF/DKIM/DMARC). Segment by engagement — send to 90-day active contacts first. Use Campaign Booster to auto-resend to non-openers. A/B test subject lines. See `/sales-deliverability` for a full diagnosis.

### Automation not triggering
**Symptom**: Workflow is active but contacts aren't entering
**Cause**: Trigger conditions not met, ecommerce platform not connected, or contacts don't match entry conditions
**Solution**: Check that the ecommerce integration is active and syncing (Settings > Integrations). Verify the trigger event is firing (check Events tab on a test contact). Ensure the workflow's audience filter isn't excluding contacts. Test with a known contact by triggering the event manually.

### SMS credits running out fast
**Symptom**: SMS credits depleted faster than expected
**Cause**: Messages exceeding 160 characters (split into multiple segments), sending to international numbers (higher credit cost), or automation sending more frequently than expected
**Solution**: Keep SMS messages under 160 characters (GSM-7 encoding — avoid emojis and special characters which switch to Unicode at 70 chars). Check per-country credit costs in Settings > SMS. Review automation frequency — add rate limiting or cooldown periods between SMS steps.
