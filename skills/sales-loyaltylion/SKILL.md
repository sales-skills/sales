---
name: sales-loyaltylion
description: "LoyaltyLion platform help — points, tiers, rewards, referrals, custom loyalty pages, receipt upload (omnichannel), AI recommendations, analytics, Klaviyo Events integration, Admin API, Headless API. Use when asking 'how do I do X in LoyaltyLion', configuring LoyaltyLion settings, setting up points/tiers/rewards, building custom loyalty pages, connecting Klaviyo flows, using the LoyaltyLion API, or troubleshooting LoyaltyLion issues. Do NOT use for cross-platform loyalty strategy (use /sales-loyalty), cross-platform email marketing (use /sales-email-marketing), or connecting tools generally (use /sales-integration)."
argument-hint: "[describe what you need help with in LoyaltyLion]"
license: MIT
version: 1.0.0
tags: [sales, loyalty, ecommerce, retention, platform]
github: "https://github.com/loyaltylion"
---
# LoyaltyLion Platform Help

Help the user with LoyaltyLion platform questions — from points/tiers/rewards setup and Klaviyo integration through custom loyalty pages, referral programs, analytics, omnichannel receipt upload, and API usage.

## Step 1 — Gather context

Ask the user:

1. **What area of LoyaltyLion do you need help with?**
   - A) Points & earning rules — configuring how customers earn points
   - B) Rewards — setting up reward catalog and redemption
   - C) Tiers / VIP — creating tier levels and progression
   - D) Referrals — setting up referral program
   - E) Loyalty page — customizing the branded loyalty page
   - F) Klaviyo integration — events, flows, loyalty data in emails
   - G) Analytics — understanding loyalty metrics and revenue attribution
   - H) API — Admin API or Headless API integration
   - I) Shopify POS — in-store loyalty with Shopify POS
   - J) Receipt upload — capturing omnichannel purchases
   - K) Admin — billing, plan features, settings
   - L) Something else — describe it

2. **What's your ecommerce platform?**
   - A) Shopify
   - B) Shopify Plus
   - C) BigCommerce
   - D) Magento
   - E) Custom / headless
   - F) Other

3. **Which LoyaltyLion plan are you on?**
   - A) Free (Shopify App Store)
   - B) Classic ($199/mo)
   - C) Advanced
   - D) Plus
   - E) Not sure / evaluating

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Loyalty strategy (platform-agnostic) → `/sales-loyalty`
- Email marketing strategy → `/sales-email-marketing`
- SMS marketing strategy → `/sales-sms-marketing`
- Klaviyo platform help → `/sales-klaviyo`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly using the reference below.

## Step 3 — LoyaltyLion platform reference

### Data model

| Concept | Description |
|---|---|
| **Customer** | Enrolled loyalty member with points balance, tier, activity history |
| **Activity** | Any trackable action — purchase, review, referral, social share, birthday, custom |
| **Rule** | Defines how activities map to points (e.g., 1 point per $1 spent) |
| **Reward** | What members can redeem points for — discount codes, free shipping, free products |
| **Tier** | VIP level with qualification criteria and perks (e.g., Silver, Gold, Platinum) |
| **Transaction** | Points credit or debit record |
| **Loyalty Page** | Branded, hosted page showing the member's points, rewards, tier, and activity |

### Plans and feature gating

| Feature | Free | Classic ($199/mo) | Advanced | Plus |
|---|---|---|---|---|
| Points & rewards | Basic | ✓ | ✓ | ✓ |
| Branded loyalty page (built for you) | — | ✓ | ✓ | ✓ |
| Pre-built earning rules | — | ✓ | ✓ | ✓ |
| Klaviyo integration (email flows) | — | ✓ | ✓ | ✓ |
| VIP tiers | — | — | ✓ | ✓ |
| Points on product pages | — | — | ✓ | ✓ |
| Shopify POS support | — | — | ✓ | ✓ |
| Multilingual (130+ languages) | — | — | ✓ | ✓ |
| Klaviyo Events (advanced triggers) | — | — | Add-on | ✓ |
| AI-recommended rewards & timing | — | — | — | ✓ |
| LoyaltyLion Flows (conditional logic) | — | — | — | ✓ |
| Quarterly strategic reviews | — | — | — | ✓ |

Order limits: Classic = 500/mo, Advanced = 4,000/mo, Plus = 10,000+/mo.

### Earning rules

Default earning actions:
- **Purchase** — points per $ spent (configurable ratio)
- **Account creation** — one-time bonus
- **Birthday** — annual bonus (requires birthday collection)
- **Product review** — points per review submitted
- **Referral** — points when a friend makes their first purchase
- **Social share/follow** — points for sharing on social media
- **Receipt upload** — earn points on purchases made anywhere (omnichannel)
- **Custom activities** — track via API for any business-specific action

### Rewards catalog

Reward types:
- **Discount codes** — percentage or fixed amount off
- **Free shipping** — shipping discount code
- **Free product** — specific product reward (Plus plan, Headless API)
- **Custom reward** — manual fulfillment (e.g., exclusive access, gift wrapping)

### Klaviyo integration

LoyaltyLion is a **Klaviyo Elite Master Partner**. Integration levels:

**Basic (Classic plan):**
- Sync loyalty data to Klaviyo profiles (points balance, tier, reward status)
- Use loyalty data in email templates (show points balance, next reward)
- Pre-built email flows for loyalty moments

**Advanced (Klaviyo Events — Advanced add-on or Plus):**
- Real-time event triggers sent to Klaviyo:
  - Points earned for reward
  - Reward claimed
  - Referral completed
  - Tier upgrade / downgrade
  - Points approaching expiration
- Build multi-step Klaviyo flows triggered by loyalty events
- Dynamic content blocks showing tier progress, spend-to-upgrade

**LoyaltyLion Flows (Plus only):**
- Conditional automation logic within LoyaltyLion
- Trigger actions based on customer segments, behavior, tier status

### Shopify POS integration

Available on Advanced and Plus plans:
- Customers earn and redeem points in-store
- Staff can look up loyalty status at checkout
- Omnichannel points balance (online + in-store unified)

### Analytics

- **Revenue attribution** — revenue directly driven by loyalty redemptions
- **Predictive analytics** — forecast customer lifetime value based on loyalty engagement
- **Member segmentation** — at-risk, loyal, defected, new member segments
- **Program metrics** — enrollment rate, active rate, redemption rate, points liability

### API overview

Two APIs available:

**Admin API** — backend data operations
- Base URL: `api.loyaltylion.com`
- Auth: Basic Authentication (token as username, secret as password)
- Rate limit: 20 requests/second
- Key resources: Customers, Orders, Activities, Rewards, Reviews, Transactions, Webhooks, Email Unsubscribes
- Use for: syncing orders, modifying points, retrieving customer data, managing webhooks

**Headless API** — shopper-facing custom UIs
- For building custom loyalty experiences (React, headless storefronts, mobile apps)
- TypeScript client: `@loyaltylion/headless-api-client` (npm)
- Use for: custom loyalty widgets, Hydrogen storefronts, native mobile apps

**Webhooks** — real-time event notifications:
- Customer events: enrollment, points earned, approaching expiration, reward claimed, tier upgrade/downgrade, segment movements (at-risk/defected/loyal), referral completion
- Program events: customer updates, email unsubscribes, receipt approval/decline, reward fulfillment

For detailed endpoint documentation, see `references/loyaltylion-api-reference.md`.

## Step 4 — Actionable guidance

Based on the user's question, provide step-by-step guidance. Always:
- Reference the correct plan requirements for the feature
- Include Klaviyo integration steps when the user mentions email or flows
- Mention the relevant API endpoints when the user is building custom integrations
- Flag plan-gated features early so the user doesn't waste time on unavailable functionality

### Common workflows

**Setting up a points program:**
1. Configure earning rules (Settings → Rules) — decide points per $ and bonus actions
2. Create reward catalog (Settings → Rewards) — start with 3-4 rewards at different thresholds
3. Design the loyalty page — LoyaltyLion builds it for you on Classic+
4. Connect Klaviyo — sync loyalty data for email personalization
5. Promote — add loyalty callouts to homepage, product pages, checkout

**Adding VIP tiers (Advanced+ only):**
1. Define 2-3 tiers with spend or points thresholds
2. Set tier-specific perks (bonus multiplier, exclusive rewards, early access)
3. Set re-qualification period (annual recommended)
4. Set up Klaviyo flows for tier upgrade/downgrade notifications
5. Display tier progress on loyalty page and in emails

**Connecting Klaviyo Events (Advanced add-on or Plus):**
1. Enable the Klaviyo integration in LoyaltyLion settings
2. Enable Klaviyo Events (may require plan upgrade or add-on)
3. In Klaviyo, create flows triggered by LoyaltyLion events (e.g., "Reward Available" → send reminder email)
4. Use loyalty merge tags in email templates: points balance, tier name, next reward threshold

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Klaviyo Events require Advanced add-on or Plus** — the basic Klaviyo integration (data sync, email flows) is on Classic, but event triggers for advanced flows need the add-on or Plus plan. Verify before building flows that depend on events.
2. **VIP tiers are Advanced+ only** — if a user is on Classic and asks about tiers, they need to upgrade. Don't walk them through tier setup without flagging this.
3. **Multi-currency limitations** — stores can only be grouped together if they share the same currency. Multi-currency Shopify stores may need separate LoyaltyLion setups.
4. **Pricing scales with order volume** — the base price covers a set number of orders/month (Classic = 500, Advanced = 4,000, Plus = 10,000+). Overages increase cost.
5. **Integration depth varies** — some third-party integrations (especially outside the Shopify ecosystem) may be limited. G2 reviewers note that API capabilities can feel dated for complex custom integrations.
6. **ReCharge limitations** — LoyaltyLion can generate ReCharge coupons, but you can't reward customers for ongoing subscription loyalty (month-over-month). Workaround: use the API to credit points via webhooks on subscription renewals.
7. **Free plan is very basic** — the Shopify App Store free tier is a trial/evaluation tool, not a production-ready loyalty program. Most meaningful features require Classic ($199/mo).
8. **Receipt upload is omnichannel, not automatic** — customers manually upload receipts for in-store or third-party purchases. Receipts require manual or automated approval.

## Related skills

- `/sales-loyalty` — Cross-platform loyalty program strategy, design, and comparison (Smile.io, Yotpo, Brevo Loyalty, etc.)
- `/sales-klaviyo` — Klaviyo platform help for email/SMS marketing
- `/sales-email-marketing` — Email marketing strategy across platforms
- `/sales-integration` — Connect LoyaltyLion with other tools via API, webhooks, Zapier
- `/sales-checkout` — Checkout optimization with loyalty display
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up a loyalty program for a Shopify store
**User says**: "I just installed LoyaltyLion on my Shopify store. How do I set up a basic points program?"
**Skill does**: Walks through earning rule configuration (points per $, sign-up bonus, review bonus), creating 3-4 rewards at different thresholds ($5 off at 100 points, $15 off at 300, free shipping at 200), setting up the branded loyalty page, and connecting Klaviyo for welcome and points-earned emails.
**Result**: Fully configured points program with rewards and email integration

### Example 2: Connecting LoyaltyLion to Klaviyo for advanced flows
**User says**: "I want to send automated emails when customers are close to earning a reward. How do I set this up?"
**Skill does**: Explains Klaviyo Events (requires Advanced add-on or Plus), walks through enabling the integration, creating a Klaviyo flow triggered by the "approaching reward" event, and designing the email template with loyalty merge tags showing points balance and reward threshold.
**Result**: Automated Klaviyo flow triggered by LoyaltyLion loyalty events

### Example 3: Building a custom loyalty widget with the Headless API
**User says**: "We're on a Hydrogen storefront and need to show loyalty points on product pages"
**Skill does**: Points to the Headless API and TypeScript client (`@loyaltylion/headless-api-client`), explains authentication, shows how to fetch customer points balance and display "Earn X points with this purchase" on product pages, and references the Hydrogen reference store on GitHub.
**Result**: Custom loyalty widget rendering on a headless Shopify storefront

## Troubleshooting

### Klaviyo not receiving loyalty events
**Symptom**: Loyalty events (reward claimed, tier upgrade) not triggering Klaviyo flows
**Cause**: Klaviyo Events are gated to Advanced (as add-on) or Plus plans. Basic Klaviyo integration only syncs profile data, not real-time events.
**Solution**: 1) Verify your plan supports Klaviyo Events (check LoyaltyLion billing). 2) Re-enable the Klaviyo integration in settings. 3) Test by triggering a loyalty action and checking Klaviyo's Activity Feed for the event. 4) If on Classic, the basic integration syncs data but won't send events — upgrade or add the Events add-on.

### Points not appearing for in-store purchases
**Symptom**: Customers earn points online but not when buying in-store via Shopify POS
**Cause**: Shopify POS integration requires Advanced or Plus plan. Even on supported plans, POS must be explicitly enabled.
**Solution**: 1) Confirm you're on Advanced or Plus. 2) Enable Shopify POS integration in LoyaltyLion settings. 3) Ensure staff are using the LoyaltyLion POS app at checkout. 4) For non-Shopify POS, use the receipt upload feature instead.

### Loyalty page not matching store branding
**Symptom**: The default loyalty page looks generic or doesn't match the store's design
**Cause**: LoyaltyLion builds the initial loyalty page on Classic+, but customization may be limited on lower plans.
**Solution**: 1) On Classic, request a custom build from LoyaltyLion's onboarding team. 2) On Advanced+, use the loyalty page editor to adjust colors, fonts, and layout. 3) For full control, use the Headless API + SDK to build a completely custom page embedded in your storefront.
