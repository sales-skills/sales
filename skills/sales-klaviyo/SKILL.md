---
name: sales-klaviyo
description: "Klaviyo platform help — AI-first B2C CRM and marketing automation for e-commerce with predictive analytics, 350+ integrations, and cross-channel messaging. Use when Klaviyo flows not triggering, segments returning wrong contacts, Shopify data not syncing to Klaviyo, predictive scores (CLV, churn) seem off, forms not capturing signups, reviews not collecting, or Klaviyo API returning errors. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), or email open/click tracking strategy (use /sales-email-tracking)."
argument-hint: "[describe what you need help with in Klaviyo]"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, ecommerce, crm, platform]
github: "https://github.com/klaviyo"
---
# Klaviyo Platform Help

Help the user with Klaviyo platform questions — from Flows and Campaigns through Segmentation, Predictive Analytics, Multi-channel messaging (email, SMS, WhatsApp, RCS, push), Forms, Reviews, Catalogs, Coupons, Reporting, Templates, Customer Hub, and the Klaviyo Data Platform (CDP). Klaviyo is an AI-first B2C CRM and marketing automation platform focused on e-commerce, founded in 2012 by Andrew Bialecki and Ed Hallen, IPO in 2023 (NYSE: KVYO). Powers 193K+ brands with 7.3B customer profiles.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Klaviyo do you need help with?**
   - A) Flows — visual automation builder (welcome, abandoned cart, post-purchase, winback, browse abandonment, custom)
   - B) Campaigns — one-time/scheduled broadcasts, A/B testing, Smart Send Time
   - C) Segmentation — real-time behavior-based segments, predictive attributes, custom properties
   - D) Predictive Analytics — predicted CLV, next order date, churn risk, spend tier
   - E) Multi-channel — email, SMS/MMS, WhatsApp, RCS, mobile push notifications
   - F) Forms — pop-ups, fly-outs, embedded forms, multi-step forms for list growth
   - G) Reviews — product review collection, AI-powered responses, display widgets
   - H) Klaviyo Data Platform (KDP) — unified profiles, integrations, event processing
   - I) Advanced KDP — reverse ETL, custom objects, advanced webhooks, warehouse sync
   - J) AI Agents — Marketing Agent (campaign generation), Customer Agent (support automation)
   - K) Catalogs / Coupons — product catalog sync, personalized recommendations, back-in-stock, coupon codes
   - L) Reporting — revenue attribution, campaign/flow analytics, benchmarks, custom dashboards
   - M) Templates — drag-and-drop editor, dynamic blocks, mobile-responsive design
   - N) Customer Hub — self-service portal (order tracking, FAQ, support)
   - O) API / Integrations — REST API, webhooks, Shopify integration, third-party connectors
   - P) Account / Billing — plans, pricing, profile-based billing
   - Q) Something else — describe it

2. **What's your role?**
   - A) E-commerce operator / store owner
   - B) Email / lifecycle marketer
   - C) Developer / engineer
   - D) Agency / freelancer
   - E) Growth / marketing manager
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability (not Klaviyo-specific) -> `/sales-deliverability`
- Email open/click tracking strategy -> `/sales-email-tracking`
- Connecting Klaviyo to other tools via middleware -> `/sales-integration`
- Checkout optimization (cart/checkout UX) -> `/sales-checkout`
- Customer.io-specific questions -> `/sales-customerio`
- Mailchimp-specific questions -> `/sales-mailchimp`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Klaviyo platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Building an abandoned cart flow**:
   1. Navigate to Flows > Create Flow > choose "Abandoned Cart" template (or start from scratch)
   2. Set the trigger: "Checkout Started" event (synced from Shopify/BigCommerce) or "Added to Cart" event
   3. Add a time delay — typically 1-4 hours for the first email (shorter delays capture more carts but may annoy customers who are still shopping)
   4. Add a conditional split: check if the "Placed Order" event has occurred since the flow was triggered — if yes, skip (they already converted)
   5. Add the first email step — include dynamic product blocks showing the abandoned items using the event's `item` properties
   6. Insert a unique coupon code if offering a discount (Coupons > generate unique codes to prevent sharing)
   7. Add a second time delay (24h) and a second email with stronger urgency or a discount incentive
   8. Optionally add an SMS step after the second email for subscribers with SMS consent — SMS has higher open rates for time-sensitive recovery
   9. Monitor flow analytics: check conversion rate per step, revenue attributed, and unsubscribe rate

2. **Setting up real-time segments with predictive attributes**:
   1. Navigate to Lists & Segments > Create Segment
   2. Add conditions using the segment builder — combine behavior conditions (placed order in last 90 days) with predictive attributes (predicted CLV is high, churn risk is medium or high)
   3. Use AND/OR logic to define your target audience — e.g., "Placed Order at least 2 times AND Predicted CLV is High AND Churn Risk is Medium"
   4. Preview the segment to verify it captures the expected profiles
   5. Segments update in real-time — as profiles match or stop matching conditions, they enter or exit the segment automatically
   6. Use the segment as a campaign audience, flow trigger condition, or conditional split within a flow

3. **Configuring the Shopify-Klaviyo integration**:
   1. In Klaviyo, go to Integrations > Add Integration > Shopify
   2. Enter your Shopify store URL and authorize the connection
   3. Klaviyo syncs: customers (as profiles), orders (as "Placed Order" events), products (as catalog items), carts (as "Added to Cart" / "Checkout Started" events)
   4. Enable on-site tracking: Klaviyo's JavaScript snippet is added to your Shopify theme to track browse behavior ("Viewed Product", "Active on Site")
   5. Verify data is flowing: check Metrics in Klaviyo to confirm Shopify events are appearing
   6. Set up core flows that leverage Shopify data: abandoned cart (Checkout Started trigger), post-purchase (Placed Order trigger), browse abandonment (Viewed Product trigger), back-in-stock (catalog sync)
   7. Enable Shopify coupon sync if using unique coupon codes in flows

4. **Setting up SMS alongside email**:
   1. Ensure you are on the Email + SMS plan (from $35/mo)
   2. Complete SMS compliance setup: register your brand for 10DLC (US), set up toll-free or short code numbers, configure quiet hours
   3. Create SMS consent collection: add an SMS opt-in step to your signup forms (multi-step forms work best — collect email first, then SMS consent)
   4. Build cross-channel flows: in your existing flows, add SMS steps after email steps — e.g., if email not opened after 24h, send SMS
   5. Respect channel preferences: use conditional splits to check SMS consent before sending SMS steps
   6. Monitor SMS-specific metrics: delivery rate, click rate, opt-out rate, revenue per SMS

5. **Using the Klaviyo API to sync custom data**:
   1. Generate a private API key in Klaviyo: Account > Settings > API Keys > Create Private API Key
   2. Set appropriate scopes — only grant the scopes your integration needs (profiles read/write, events write, etc.)
   3. Use JSON:API format for all requests — wrap data in `{"data": {"type": "...", "attributes": {...}}}` structure
   4. Upsert profiles: `POST /api/profiles/` — Klaviyo matches on email or phone and updates if existing, creates if new
   5. Track events: `POST /api/events/` — pass metric name, profile identifier, properties, and timestamp
   6. Handle rate limits: implement exponential backoff when receiving HTTP 429 responses
   7. Use cursor-based pagination for list endpoints: follow the `links.next` URL in responses

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Profile-based billing counts ALL active profiles (Feb 2025 change) — not just those you email.** A large imported list you never email still counts toward your profile limit and billing tier. Clean regularly by suppressing or deleting profiles you do not intend to contact. This is a significant change from the previous model where only emailed profiles counted.
2. **Advanced KDP (custom objects, reverse ETL, advanced webhooks) is enterprise-only pricing — don't assume it's available on standard plans.** Features like custom objects, warehouse sync, data transforms, and system-level webhooks require the Advanced KDP tier with custom enterprise pricing. Standard Email and Email + SMS plans do not include these capabilities.
3. **Flow webhooks are NOT the same as system webhooks — flow webhooks fire as a flow action step, system webhooks (Advanced KDP) fire on any event.** Most accounts only have access to flow webhooks (a POST action within a flow step). System webhooks that fire on email events (received, clicked, spam), review events, and consent events with HMAC-SHA256 signing are an Advanced KDP feature. Don't confuse the two when planning integrations.
4. **SMS requires separate compliance setup (TCPA/10DLC in US, carrier registration) — don't assume SMS is ready to use just because you're on the Email + SMS plan.** You must register your brand, verify your phone number, configure quiet hours, and comply with carrier requirements before sending SMS. This registration process can take days to weeks depending on carrier approval timelines.
5. **Predictive analytics require sufficient data (typically 500+ orders and 180+ days of history) — new stores won't see predictions immediately.** Features like predicted CLV, churn risk, next order date, and gender prediction need a meaningful volume of historical order data before Klaviyo's models produce results. If you just launched your store or recently migrated to Klaviyo, expect to wait until you accumulate enough data.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Opt-in email marketing strategy across tools
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-email-tracking` — Email engagement tracking strategy
- `/sales-integration` — Connect Klaviyo to CRM, warehouse, or other tools
- `/sales-checkout` — Checkout optimization (Klaviyo integrates with e-commerce checkout flows)
- `/sales-customerio` — Customer.io platform help (primary Klaviyo competitor for behavior-driven automation)
- `/sales-mailchimp` — Mailchimp platform help (primary Klaviyo competitor for email marketing)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building an abandoned cart flow with SMS fallback
**User says**: "I want to set up an abandoned cart recovery flow in Klaviyo for my Shopify store. Should I include SMS?"
**Skill does**:
1. Confirms Shopify integration is syncing "Checkout Started" events (the trigger for abandoned cart flows)
2. Creates a flow with "Checkout Started" trigger and an immediate conditional split checking if "Placed Order" has occurred (to skip converters)
3. Adds a 2-hour time delay, then the first email with dynamic product blocks showing abandoned items and a clear CTA to complete checkout
4. Adds a 24-hour time delay, then a second email with urgency copy and a unique coupon code (10% off) generated via Klaviyo's coupon feature
5. After the second email, adds a conditional split checking SMS consent — if consented, sends an SMS reminder with a short link to the cart after 12 more hours
6. Recommends monitoring per-step conversion rates and adjusting time delays based on data (shorter delays for high-AOV products, longer for browse-stage abandonment)
**Result**: User has a multi-touch, cross-channel abandoned cart flow that recovers revenue vian email first, then SMS for non-openers, with unique coupon codes to prevent abuse

### Example 2: Welcome series with SMS consent collection
**User says**: "I need a welcome flow that collects email first, then asks for SMS opt-in, and sends a series of onboarding emails."
**Skill does**:
1. Designs a multi-step signup form: step 1 collects email (with incentive, e.g., 15% off first order), step 2 asks for phone number and SMS consent with a clear value proposition ("Get exclusive SMS-only deals")
2. Creates a welcome flow triggered by "Subscribed to List" — the list the form adds subscribers to
3. First email (immediate): delivers the welcome discount code, introduces the brand, sets email frequency expectations
4. Adds a conditional split after 24 hours: checks if the profile has SMS consent — if yes, sends a welcome SMS with a different exclusive offer to reward SMS opt-in
5. Continues the email series: email 2 (day 3) highlights best-selling products with dynamic product blocks, email 3 (day 5) shares social proof / customer stories, email 4 (day 7) features category browsing with personalized recommendations
6. Adds a final conditional split at day 14: if no purchase yet, sends a last-chance reminder with the original discount code expiring soon
**Result**: User has a welcome series that maximizes both email and SMS list growth, delivers a cohesive onboarding experience, and drives first purchase conversion

### Example 3: Predictive segment for churn prevention
**User says**: "We have a lot of repeat customers dropping off. Can Klaviyo help us identify and re-engage them before they churn?"
**Skill does**:
1. Confirms the store has sufficient data for predictive analytics (500+ orders, 180+ days of history) — if not, recommends a behavior-based approximation (e.g., "placed order 2+ times but not in last 90 days")
2. Creates a segment combining predictive attributes: "Predicted CLV is High AND Churn Risk is Medium or High" — targets high-value customers showing signs of disengagement
3. Builds a winback flow triggered by segment entry: when a profile enters this segment (churn risk increases), they enter the flow automatically
4. Flow sequence: email 1 (day 0) is a personal check-in with product recommendations based on past purchases; email 2 (day 4) highlights new arrivals or restocks in their preferred categories; email 3 (day 8) offers an exclusive loyalty incentive (unique coupon code, free shipping, or loyalty points)
5. Adds a conditional split after email 3: if still no purchase, sends an SMS (if consented) with a time-limited offer
6. Recommends monitoring the segment size over time — if it is growing, investigate root causes (product issues, shipping delays, competitive pressure) rather than relying solely on automation
**Result**: User has a proactive churn prevention system that automatically identifies at-risk high-value customers and re-engages them with a personalized multi-touch sequence before they lapse

## Troubleshooting

### Predictive analytics not appearing for profiles
**Symptom**: Predictive attributes (CLV, churn risk, next order date) show as blank or unavailable in the profile view and cannot be used in segments
**Cause**: Klaviyo's predictive models require a minimum volume of historical data — typically 500+ orders and 180+ days of order history. New stores, recently migrated accounts, or stores with low order volume will not have enough data for predictions to generate.
**Solution**: Verify your order volume in Metrics > Placed Order — check the total count and the date range. If you are below the threshold, continue collecting data and predictions will appear automatically once the minimum is met. In the meantime, build behavior-based segments as an approximation: "Placed Order at least 2 times AND has not Placed Order in the last 90 days" approximates churn risk. If you have sufficient data and predictions still do not appear, contact Klaviyo support — some account configurations or data quality issues can delay prediction generation.

### Flow emails sending to customers who already converted
**Symptom**: Customers receive abandoned cart or browse abandonment emails after they have already completed a purchase
**Cause**: The flow is missing a conditional split or flow filter that checks whether the customer has completed the desired action (e.g., "Placed Order") since the triggering event. Without this check, the flow continues sending even if the customer converted between the trigger and the scheduled email.
**Solution**: Add a conditional split immediately before each email step in the flow: "Has Placed Order at least once since starting this flow." If the condition is true, route them to the exit (or a thank-you path). Additionally, set a flow filter at the trigger level: "Has not Placed Order since starting this flow" — this filter is re-evaluated before each step. Use both the trigger-level flow filter and per-step conditional splits for maximum accuracy.

### SMS messages failing to deliver or stuck in queue
**Symptom**: SMS messages show as "queued" or "failed" in flow/campaign analytics, and recipients are not receiving texts
**Cause**: Most commonly, SMS compliance setup is incomplete — the brand has not completed 10DLC registration (US), the phone number is not verified, quiet hours are blocking sends, or the recipient's phone number is invalid/landline. Carrier filtering can also block messages that appear promotional without proper registration.
**Solution**: Check your SMS setup status in Klaviyo Settings > SMS: verify that 10DLC registration is approved (US), your sending number is active, and quiet hours are configured correctly. For individual failures, check the profile's phone number format (must include country code, e.g., +1 for US). Review the SMS error codes in the campaign/flow analytics for specific failure reasons. If messages are being filtered by carriers, ensure your 10DLC registration is complete and your message content complies with carrier guidelines (no ALL CAPS, no misleading content, include opt-out language).

### Klaviyo popup/form not triggering in Chrome but works in Safari
**Symptom**: Klaviyo signup popup or fly-out stops triggering in Chrome (especially incognito mode) while still working in Safari. Submit rates drop suddenly, often noticed after a high-traffic period like BFCM. The form is configured correctly and shows as "Live" in Klaviyo.
**Cause**: Duplicate `klaviyo.js` script loading on the page. This commonly happens when multiple Shopify apps or theme snippets each inject their own Klaviyo integration script (look for multiple `klaviyo.js?company_id=` requests in your browser's Network tab). The duplicate creates a race condition where the form SDK initializes twice — Chrome's stricter script execution order exposes this more readily than Safari, which is more lenient with duplicate script handling.
**Solution**: Open your site in Chrome DevTools > Network tab, filter by "klaviyo", and check if `klaviyo.js` loads more than once. If it does: (1) Search your Shopify theme code (Layout and Snippets files) for all references to `klaviyo.js` or your `company_id` — remove any duplicate snippet, keeping only the one Klaviyo's official integration adds. (2) Check installed Shopify apps — some email/marketing apps inject their own Klaviyo script independently of Klaviyo's native integration. Disable suspect apps one at a time and test. (3) After removing the duplicate, clear your site cache (and any CDN/edge cache) and verify in an incognito window that only one `klaviyo.js` request fires. If no duplicate is found, check for JavaScript errors in the Console tab that might block Klaviyo's form SDK from initializing — theme JavaScript conflicts or Content Security Policy headers can also prevent popup rendering in Chrome specifically.

### Shopify integration showing "Action Required" and reconnection failing
**Symptom**: Klaviyo displays "Action Required" on the Shopify integration. Clicking the integration shows it as "Enabled" but the banner persists. Removing and reinstalling the Klaviyo app from Shopify, or disabling and re-enabling the integration in Klaviyo, does not resolve the issue. The store may show "Sorry this store is currently not available" during reconnection attempts.
**Cause**: The OAuth handshake between Klaviyo and Shopify is broken. This typically happens after a Shopify billing disruption (failed payment, expired trial, plan change), a Shopify store freeze, or a change in Shopify admin permissions. The existing OAuth token is invalidated but Klaviyo's integration page still shows "Enabled" because the configuration record exists even though the token is dead.
**Solution**: (1) First verify your Shopify store is active — log into Shopify admin and confirm there are no billing holds, frozen store notices, or expired trials. Resolve any Shopify-side issues first. (2) In Klaviyo, go to Integrations > Shopify and fully remove the integration (not just disable — delete it). (3) Log out of both Klaviyo and Shopify, clear cookies, or use an incognito browser. (4) Initiate the reconnection from within Klaviyo's Integrations tab (Integrations > Add Integration > Shopify) — do NOT start from the Shopify App Store, as the Klaviyo-initiated flow handles the OAuth grant correctly. (5) Complete the full OAuth authorization flow when Shopify prompts for permissions. (6) After reconnection, verify data is syncing by checking Metrics for recent Shopify events (Placed Order, Checkout Started) and confirming profile counts are updating.
