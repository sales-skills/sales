# LoyaltyLion API Reference

## Overview

LoyaltyLion provides two APIs:
- **Admin API** — backend data operations (orders, customers, points, webhooks)
- **Headless API** — shopper-facing custom UIs (loyalty widgets, mobile apps, headless storefronts)

## Admin API

### Authentication

Basic Authentication using your LoyaltyLion token and secret:
- **Token** = username
- **Secret** = password
- Found in: LoyaltyLion Settings → API credentials

```
Authorization: Basic base64(token:secret)
```

### Base URL

```
https://api.loyaltylion.com
```

### Rate Limits

- **20 requests per second** for all endpoints (unless otherwise stated)

### IP Addresses (for allowlisting)

- `35.71.187.221`
- `52.223.19.105`

### Resources

#### Customers

| Method | Endpoint | Description |
|---|---|---|
| GET | `/customers` | List customers |
| PUT | `/customers/{id}` | Update customer (birthday, metadata) |
| POST | `/customers/{id}/points` | Add points to customer |
| DELETE | `/customers/{id}/points` | Remove points from customer |
| GET | `/customers/{id}/transactions` | List customer transactions |
| GET | `/customers/{id}/rewards` | List available rewards for customer |
| POST | `/customers/{id}/rewards/{id}/redeem` | Redeem reward |
| POST | `/customers/{id}/rewards/{id}/refund` | Refund reward |

#### Orders

| Method | Endpoint | Description |
|---|---|---|
| POST | `/orders` | Create order (trigger earning rules) |
| GET | `/orders/{id}` | Get order details |
| GET | `/orders` | List orders |
| PUT | `/orders/{id}` | Update order |

#### Activities

| Method | Endpoint | Description |
|---|---|---|
| POST | `/activities` | Create activity (custom earning action) |
| GET | `/activities` | List activities |
| PUT | `/activities/{id}` | Update activity |

#### Reviews

| Method | Endpoint | Description |
|---|---|---|
| POST | `/reviews` | Create review |
| PUT | `/reviews/{id}` | Update review |
| DELETE | `/reviews/{id}` | Delete review |

#### Rewards

| Method | Endpoint | Description |
|---|---|---|
| POST | `/rewards/{id}/enable` | Enable reward |
| POST | `/rewards/{id}/disable` | Disable reward |
| GET | `/rewards` | List available rewards |

#### Transactions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/transactions` | List all transactions |

#### Email Unsubscribes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/unsubscribes` | Create email unsubscribe |
| GET | `/unsubscribes` | List unsubscribes |

#### Webhooks

| Method | Endpoint | Description |
|---|---|---|
| POST | `/webhooks` | Create webhook |
| GET | `/webhooks` | List webhooks |
| DELETE | `/webhooks/{id}` | Delete webhook |

#### Sites & WebViews

| Method | Endpoint | Description |
|---|---|---|
| GET | `/sites` | List sites |
| POST | `/webview_sessions` | Create WebView session |

#### Utility

| Method | Endpoint | Description |
|---|---|---|
| GET | `/whoami` | Return authenticated account info |

### Pagination

Supported on list endpoints. Refer to the developer portal for pagination parameters.

### Webhook Events

**Customer events:**
- Customer enrolled
- Points earned
- Points approaching expiration
- Reward approaching expiration
- Reward claimed
- Tier upgrade
- Tier downgrade
- Segment movement (at-risk, defected, loyal)
- Receipt approved / declined
- Rule completion
- Referral completion
- Recurring reward reminder
- Tier upgrade proximity

**Program events:**
- Customer update
- Loyalty email unsubscribe
- Receipt manual approval notification
- Reward store fulfillment

## Headless API

For building custom shopper-facing loyalty experiences.

### TypeScript Client

```bash
npm install @loyaltylion/headless-api-client
```

GitHub: `github.com/loyaltylion/typescript-headless-api-client`

### Use Cases

- Custom loyalty widgets on headless storefronts (Hydrogen, custom React)
- Native mobile app loyalty features
- POS app integration
- Custom loyalty page embedded in storefront

### SDK UI Components

**Pages & panels:** Loyalty page, loyalty panel, rewards list, history table, tier comparison, tier progress

**Modals:** Redeem rewards, claim confirmation, referral flow, transaction details

**Simple elements:** Point displays, product point values, cart point projections, referral URLs, loyalty widgets

### Reference Store

Hydrogen reference store: `github.com/loyaltylion/hydrogen-reference-store`

## Developer Portal

Full documentation: https://developers.loyaltylion.com/
- Admin API reference: https://developers.loyaltylion.com/api-reference/introduction
- Headless API reference: https://developers.loyaltylion.com/headless-api/introduction
- LLM-friendly docs index: https://developers.loyaltylion.com/llms.txt
