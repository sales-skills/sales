# LoyaltyLion Platform Guide

## Data model

| Concept | Description |
|---|---|
| **Customer** | Enrolled loyalty member with points balance, tier, activity history |
| **Activity** | Any trackable action — purchase, review, referral, social share, birthday, custom |
| **Rule** | Defines how activities map to points (e.g., 1 point per $1 spent) |
| **Reward** | What members can redeem points for — discount codes, free shipping, free products |
| **Tier** | VIP level with qualification criteria and perks (e.g., Silver, Gold, Platinum) |
| **Transaction** | Points credit or debit record |
| **Loyalty Page** | Branded, hosted page showing the member's points, rewards, tier, and activity |

## Plans and feature gating

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

## Earning rules

Default earning actions:
- **Purchase** — points per $ spent (configurable ratio)
- **Account creation** — one-time bonus
- **Birthday** — annual bonus (requires birthday collection)
- **Product review** — points per review submitted
- **Referral** — points when a friend makes their first purchase
- **Social share/follow** — points for sharing on social media
- **Receipt upload** — earn points on purchases made anywhere (omnichannel)
- **Custom activities** — track via API for any business-specific action

## Rewards catalog

Reward types:
- **Discount codes** — percentage or fixed amount off
- **Free shipping** — shipping discount code
- **Free product** — specific product reward (Plus plan, Headless API)
- **Custom reward** — manual fulfillment (e.g., exclusive access, gift wrapping)

## Klaviyo integration

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

## Shopify POS integration

Available on Advanced and Plus plans:
- Customers earn and redeem points in-store
- Staff can look up loyalty status at checkout
- Omnichannel points balance (online + in-store unified)

## Analytics

- **Revenue attribution** — revenue directly driven by loyalty redemptions
- **Predictive analytics** — forecast customer lifetime value based on loyalty engagement
- **Member segmentation** — at-risk, loyal, defected, new member segments
- **Program metrics** — enrollment rate, active rate, redemption rate, points liability

## API overview

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

## Common workflows

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
