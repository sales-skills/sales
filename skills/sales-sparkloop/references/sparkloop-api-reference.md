<!-- Source: https://docs.sparkloop.app/ -->

# SparkLoop API v2 Reference

## Base URL

`https://api.sparkloop.app/v2`

## Authentication

Every request must include the `X-Api-Key` header with your API key (found in Account Settings → Integrations).

Missing or incorrect key returns HTTP 401:
```json
{ "error": "API key is missing!" }
```
or
```json
{ "error": "User not found!" }
```

## Request format

- POST and PUT requests must include: `Content-Type: application/json; charset=utf-8`
- Successful responses return HTTP 200/201 with JSON body
- Errors return 400/500 range with descriptive JSON messages

## Pagination

Endpoints returning multiple objects support:
- `page` — page number (default: 1)
- `per_page` — objects per request (default: 50, max: 200)

## Rate limiting

120 requests over a rolling 60-second period per API key. Exceeding returns HTTP 429. Implement exponential backoff.

---

## Subscribers

### Create a Subscriber
**POST** `/v2/subscribers`

| Parameter | Type | Required | Description |
|---|---|---|---|
| email | string | Yes | Subscriber email |
| name | string | No | Subscriber name |
| referrer_code | string | No | Referral code of the referring subscriber |
| ip_address | string | No | Subscriber IP |
| user_agent | string | No | Subscriber user agent |
| utm_source | string | No | UTM source |
| utm_campaign | string | No | UTM campaign |
| created_at | string | No | Creation timestamp |
| country_code | string | No | ISO 3166-1 Alpha2 country code |

**Response** (201):
```json
{ "subscriber": <Subscriber Object> }
```

**Errors** (400): Invalid/duplicate email, missing email field.

### List Subscribers
**GET** `/v2/subscribers`

| Parameter | Type | Description |
|---|---|---|
| type | string | Filter: `all`, `referrals`, `advocates` |
| expand | string | Include related data: `campaigns` |
| page | integer | Page number |
| per_page | integer | Results per page (max 200) |

**Response** (200):
```json
{
  "subscribers": [...],
  "per_page": 50,
  "page": 1,
  "total_pages": 10,
  "total_subscribers": 500
}
```

### Get Subscriber
**GET** `/v2/subscribers/:identifier`

Path parameter: `identifier` — subscriber UUID or email address.

Query parameter: `expand=campaigns` to include campaign memberships.

**Response** (200): `{ "subscriber": <Subscriber Object> }`
**Error** (404): Subscriber not found.

### Update Subscriber
**PUT** `/v2/subscribers/:identifier`

| Parameter | Type | Description |
|---|---|---|
| status | string | `unsubscribed` or `confirmed` |
| name | string | Updated name |
| email | string | Updated email |

**Response** (200): Updated subscriber object.
**Errors** (400): Invalid status, empty request body.

### Unsubscribe Subscriber
**PUT** `/v2/subscribers/:identifier/unsubscribe`

**Response** (200): Subscriber object with updated status.
**Error** (409): Already unsubscribed.

### Reject Subscriber
**PUT** `/v2/subscribers/:identifier/reject`

**Response** (200): Subscriber object with rejected status.
**Error** (409): Not in pending status.

---

## Campaigns

### List Campaigns
**GET** `/v2/campaigns`

Returns all campaigns. Currently limited to 1 campaign per account.

**Response** (200):
```json
{ "campaigns": [<Campaign Object>, ...] }
```

### Get Campaign
**GET** `/v2/campaigns/:identifier`

Path parameter: `identifier` — campaign UUID.

**Response** (200): `{ "campaign": <Campaign Object> }`
**Error** (404): Campaign not found.

### Update Campaign
**PUT** `/v2/campaigns/:identifier`

| Parameter | Type | Description |
|---|---|---|
| name | string | Campaign name |

**Response** (200): Updated campaign object.

---

## Partner Profile

### Get Partner Profile
**GET** `/v2/partner_profile`

**Response** (200): `{ "partner_profile": <Partner Profile Object> }`
**Error** (404): Partner profile not found.

---

## Upscribe

### List Upscribes
**GET** `/v2/upscribes`

**Response** (200): Array of Upscribe objects.

### Get Upscribe
**GET** `/v2/upscribes/:identifier`

Path parameter: `identifier` — Upscribe UUID.

**Response** (200): Upscribe object.
**Error** (404): Upscribe not found.

### Update Upscribe
**PUT** `/v2/upscribes/:identifier`

| Parameter | Type | Description |
|---|---|---|
| auto_pilot | boolean | Enable/disable auto-pilot recommendation matching |

**Response** (200): Updated Upscribe object.

### Subscribe to Recommendations
**POST** `/v2/upscribes/:identifier/subscribe`

| Parameter | Type | Required | Description |
|---|---|---|---|
| subscriber_email | string | Yes | Subscriber's email |
| country_code | string | Yes | ISO 3166-1 Alpha2 country code |
| recommendations | string | Yes | Comma-separated recommendation ref_codes |
| utm_source | string | No | For advanced reports |
| utm_campaign | string | No | For advanced reports |

**Response** (200): `{ "response": "ok" }`
**Errors** (400): Missing required parameters.

**Critical**: Always pass `country_code` — earnings depend on subscriber geography.

---

## Offers

### List Offers
**GET** `/v2/offers`

Query parameters: `page`, `per_page`. Ordered by `created_at` descending.

**Response** (200): Paginated offers array with metadata (`per_page`, `page`, `total_pages`, `total_offers`).

### Get Offer
**GET** `/v2/offers/:identifier`

Path parameter: `identifier` — offer UUID.

**Response** (200): `{ "offer": <Offer Object> }`
**Error** (404): Offer not found.

---

## Webhooks

### Configuration
Set up in Account Settings → Integrations dashboard. SparkLoop sends POST requests with JSON payloads.

Optional: Verify webhook authenticity via the `SparkLoop-Token` request header.

**Important**: Respond with HTTP 200 and an empty body. All non-200 responses are treated as errors.

### Event types

#### `new_referral`
Triggered when a subscriber makes a tracked referral. Payload includes referrer and referred subscriber objects (ID, email, referral code, link, referral count).

#### `new_partner_pending_referral`
Sent when a partner-generated referral enters the screening period. Contains campaign data, subscriber info with "pending" status, and partner details including logo URL.

#### `new_partner_referral`
Dispatched when a partner referral passes verification. Same structure as pending but with "verified" `referral_status`.

#### `new_offer_lead`
Sent on lead confirmation. Includes `offer_id`, lead object (email, source, partner_id, referral_status), and partner information.

#### `reward_unlocked`
Triggered when a subscriber hits a referral milestone. Contains subscriber details, reward metadata (name, referrals required, recurring status), coupon code, and referral count.

#### `reward_redeemed`
Sent when a subscriber submits their address for a physical reward. Includes all unlock data plus `reward_variant` details (name, SKU) and complete shipping information.

#### `sync_subscriber`
Dispatched on referral creation/updates. Carries subscriber object with `referral_status` field (supports "rejected" and other states).

---

## Using Upscribe via API

### Generating recommendations

Call the recommendations endpoint with your Upscribe ID:

**Required parameters:**
- `country_code` — ISO 3166-1 Alpha2 (e.g., US, UK, DE). Critical for paid recommendations and earnings.
- `region_code` — ISO 3166-2 state/region code (optional, helpful for US-targeted advertisers)
- `limit` — number of recommendations to display (default: 1)

**Response includes:**
- `publication_name` and `description` — newsletter details
- `publication_logo` — asset URL
- `signup_url` — subscription destination
- `ref_code` — required for tracking subscriptions

### Submitting subscriptions

Use the subscribe endpoint with:
- `subscriber_email`
- `ref_codes` — comma-separated codes from selected recommendations
- `country_code` — required for accurate tracking and earnings

**Compliance note**: Ensure subscribers give explicit consent before being subscribed to recommended newsletters.
