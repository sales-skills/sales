---
name: sales-omnisend
description: "Omnisend platform help — email campaigns, SMS marketing, web push notifications, marketing automation workflows, popups/forms, segmentation, product recommendations, reporting, Shopify/WooCommerce/BigCommerce integrations, API. Use when Omnisend emails aren't reaching inboxes, automation workflows aren't triggering, SMS campaigns aren't delivering, popups aren't converting, ecommerce integration isn't syncing orders, or Omnisend API calls are failing. Do NOT use for cross-platform email marketing strategy (use /sales-email-marketing), cross-platform SMS strategy (use /sales-sms-marketing), cross-platform deliverability (use /sales-deliverability), cross-platform push strategy (use /sales-push-notification), or connecting tools (use /sales-integration)."
argument-hint: "[describe what you need help with in Omnisend]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, ecommerce, sms, platform]
github: "https://github.com/omnisend"
---
# Omnisend Platform Help

Help the user with Omnisend platform questions — from email/SMS campaign setup and automation workflows through popups, segmentation, reporting, ecommerce integrations, and API.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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
- **Segment-based audience filters can silently block automations.** If a workflow uses a segment-based audience filter, there's a race condition: it can take 1-2 minutes for a contact to be added to a segment, but the automation trigger fires immediately. The contact isn't in the segment yet → exits the workflow. Use contact property filters instead of segment filters for time-sensitive triggers, or add a short delay before the filter check.
- **Template customization has real limits.** G2's top complaint about Omnisend is limited design control. If the user needs pixel-perfect layouts or highly custom visual elements, set expectations early — Omnisend trades deep design flexibility for ease of use. For advanced designs, suggest coding custom HTML templates or using a dedicated email design tool and importing.
- **Reporting is shallower than Klaviyo.** Users migrating from Klaviyo frequently miss the depth of analytics — custom reporting, data visualization, cohort analysis. If the user needs advanced reporting, recommend exporting data to Google Sheets/Looker or using the API to build custom dashboards.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Cross-platform email marketing strategy (broadcasts, nurture, automation, segmentation)
- `/sales-sms-marketing` — Cross-platform SMS marketing strategy (opt-in, compliance, campaign types)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-push-notification` — Cross-platform push notification strategy (opt-in, timing, frequency)
- `/sales-audience-growth` — Growing your email/SMS list (lead magnets, popups, cross-promotion)
- `/sales-integration` — Connect Omnisend to other tools via webhooks, Zapier, or API
- `/sales-klaviyo` — Klaviyo platform help (if using Klaviyo instead of Omnisend)
- `/sales-mailchimp` — Mailchimp platform help (if using Mailchimp instead of Omnisend)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
**Cause**: Trigger conditions not met, ecommerce platform not connected, contacts don't match entry conditions, or segment-based filter race condition
**Solution**: Each trigger has four stages contacts must pass in sequence: Trigger & Trigger Filters → Audience Filters → Frequency → Exit Conditions. Use the **Trigger Preview Tool** to identify which stage blocked entry. Common culprits:
1. **Workflow not published** — unpublished workflows don't fire, even if events occur. Click Start Workflow.
2. **Ecommerce integration disconnected** — check Settings > Integrations is active and syncing.
3. **Segment-based audience filter timing** — if the workflow uses a segment filter, contacts may not be in the segment yet when the trigger fires (1-2 min delay). Switch to contact property filters or add a delay before the filter.
4. **Multi-channel subscription gaps** — in a workflow with email + SMS steps, contacts not subscribed to SMS will skip those steps. Check Workflow Channel Settings.
5. **Exit conditions firing early** — if the exit condition (e.g., "placed order") is met before the first message sends, the contact exits silently.
Verify by checking the Events tab on a test contact to confirm the trigger event is firing.

### Double order confirmation emails (Omnisend + Shopify)
**Symptom**: Customers receive two order confirmation emails — one from Omnisend and one from Shopify
**Cause**: Both Omnisend's transactional automation and Shopify's built-in order notification are active
**Solution**: Disable one of them. If using Omnisend's order confirmation automation (recommended — more customizable), go to Shopify Admin > Settings > Notifications > Order Confirmation and uncheck the notification. If using Shopify POS, note that POS order confirmations are separate from online order confirmations — you may need to disable both.

### Subscriber count mismatch between Omnisend and Shopify
**Symptom**: Omnisend shows more (or fewer) subscribers than Shopify's customer list
**Cause**: Omnisend and Shopify track subscriptions independently. Omnisend collects subscribers via its own popups/forms that may not sync back to Shopify's marketing consent field. Conversely, Shopify customers who opt in at checkout may not immediately appear in Omnisend if the sync is delayed.
**Solution**: Check Settings > Integrations > Shopify and verify the sync is active. For contacts collected via Omnisend forms, they'll be in Omnisend but may not have Shopify marketing consent. For an accurate count, treat Omnisend as your source of truth for email marketing subscribers.

### SMS credits running out fast
**Symptom**: SMS credits depleted faster than expected
**Cause**: Messages exceeding 160 characters (split into multiple segments), sending to international numbers (higher credit cost), or automation sending more frequently than expected
**Solution**: Keep SMS messages under 160 characters (GSM-7 encoding — avoid emojis and special characters which switch to Unicode at 70 chars). Check per-country credit costs in Settings > SMS. Review automation frequency — add rate limiting or cooldown periods between SMS steps.
