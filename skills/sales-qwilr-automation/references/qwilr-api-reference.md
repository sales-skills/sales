### Qwilr API Reference

**Base URL**: `https://api.qwilr.com/v1`
**Auth**: `Authorization: Bearer <jwt-token>`
**Docs**: https://developers.qwilr.com/

#### Endpoints

| Endpoint | Method | What it does |
|---|---|---|
| `/pages` | POST | Create page from saved blocks/template, with substitutions, quote sections, metadata, tags |
| `/pages/{id}` | GET | Get page details (expand: metadata, acceptance, previewAcceptance) |
| `/pages/{id}` | PUT | Update published status |
| `/blocks/saved` | GET | List saved blocks (id, name, type) |
| `/webhooks` | GET | List webhook subscriptions |
| `/webhooks` | POST | Create webhook subscription |
| `/webhooks` | DELETE | Delete webhook subscription |
| `/users` | GET | List account users (for ownerId) |

#### Webhook events

| Event | When it fires |
|---|---|
| `pageAccepted` | Prospect accepts the full proposal |
| `pagePartiallyAccepted` | Prospect selects some items but not all |
| `pagePreviewAccepted` | Internal preview was accepted |
| `pageViewed` | Prospect views the page (fires on each view) |
| `pageFirstViewed` | First time a prospect views the page |
| `pageSetLive` | Page is published/set live |
| `pageRevivedLive` | Previously unpublished page is re-published |

#### Creating a page

```bash
curl -X POST https://api.qwilr.com/v1/pages \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Proposal for Acme Corp",
    "isPublished": false,
    "tags": ["auto-generated", "hubspot"],
    "blocks": [
      {
        "savedBlockId": "block_abc123",
        "tokens": {
          "company_name": "Acme Corp",
          "contact_first_name": "Jane",
          "contact_title": "VP Engineering",
          "deal_amount": "$48,000"
        }
      }
    ],
    "quoteSections": [
      {
        "title": "Annual License",
        "items": [
          {
            "title": "Platform License",
            "description": "Full access — 25 seats",
            "type": "fixedCost",
            "fixedCost": { "amount": 48000, "currency": "USD" },
            "isOptional": false,
            "billing": { "type": "recurring", "frequency": "annual" }
          },
          {
            "title": "Premium Support",
            "description": "Dedicated CSM + priority SLA",
            "type": "fixedCost",
            "fixedCost": { "amount": 12000, "currency": "USD" },
            "isOptional": true,
            "billing": { "type": "recurring", "frequency": "annual" }
          }
        ]
      }
    ]
  }'
```

#### Discovering saved blocks

Before creating pages, list available blocks to find the `savedBlockId` values:

```bash
curl -X GET https://api.qwilr.com/v1/blocks/saved \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json"
```

Response includes block `id`, `name`, and `type`.

#### Subscribing to webhooks

```bash
curl -X POST https://api.qwilr.com/v1/webhooks \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-server.com/webhooks/qwilr",
    "events": ["pageFirstViewed", "pageViewed", "pageAccepted", "pagePartiallyAccepted"]
  }'
```

#### Checking page status

```bash
curl -X GET "https://api.qwilr.com/v1/pages/PAGE_ID?expand=acceptance,metadata" \
  -H "Authorization: Bearer $QWILR_TOKEN"
```

#### Token substitution

Tokens use `{{token_name}}` syntax in saved blocks. When creating a page, pass token values in the `tokens` object per block:

| Token | Typical CRM Source | Example |
|---|---|---|
| `{{company_name}}` | Company name | Acme Corp |
| `{{contact_first_name}}` | Contact first name | Jane |
| `{{contact_last_name}}` | Contact last name | Smith |
| `{{contact_title}}` | Contact title | VP Engineering |
| `{{contact_email}}` | Contact email | jane@acme.com |
| `{{rep_name}}` | Deal owner name | Alex Johnson |
| `{{rep_email}}` | Deal owner email | alex@company.com |
| `{{deal_amount}}` | Deal amount | $48,000 |
| `{{close_date}}` | Expected close date | March 30, 2026 |
| `{{industry}}` | Industry field | Financial Services |
| `{{product_name}}` | Product field | Enterprise Plan |
| `{{seat_count}}` | Custom field | 25 seats |

**Guidelines:**
- Always auto-populate: company_name, contact names, rep info, deal amount
- Semi-auto (verify after population): industry, company_size, product
- Always manual: executive summary, pain points, custom scope
- Set fallback values for optional tokens so pages don't show raw `{{token}}` text

#### Quote block structure

Quote sections support these item properties:

| Property | Type | Description |
|---|---|---|
| `title` | string | Line item name |
| `description` | string | Line item description |
| `type` | string | `fixedCost` for most items |
| `fixedCost.amount` | number | Price in cents or whole units (check your config) |
| `fixedCost.currency` | string | ISO 4217 currency code |
| `isOptional` | boolean | If true, buyer can select/deselect |
| `quantity` | object | For per-seat/per-unit pricing |
| `billing.type` | string | `oneOff` or `recurring` |
| `billing.frequency` | string | `monthly`, `quarterly`, `annual` (if recurring) |

#### Common automation recipes

**Auto-create proposal when deal hits Stage 3:**
- Trigger: CRM deal moves to "Proposal" stage
- Action: `POST /pages` with deal data mapped to tokens
- Then: Update CRM deal with Qwilr page URL

**Notify Slack when proposal is viewed:**
- Trigger: Qwilr webhook `pageFirstViewed`
- Action: Post to Slack channel with prospect name, page title, timestamp
- Then: Rep follows up within 24 hours

**Update CRM when proposal is accepted:**
- Trigger: Qwilr webhook `pageAccepted`
- Action: Update CRM deal stage to "Closed Won", record accepted amount
- Then: Trigger onboarding workflow

#### Testing checklist

- [ ] Auth: Verify API token works with `GET /blocks/saved`
- [ ] Block discovery: Confirm saved block IDs match your template
- [ ] Token mapping: Create a test page with all tokens populated — verify each substitution renders
- [ ] Quote block: Verify pricing, optional items, and billing types render correctly
- [ ] Webhook delivery: Send a test event and confirm your endpoint receives it
- [ ] CRM sync: If using native integration, create a test deal and verify auto-population
- [ ] Error handling: Test what happens when a required CRM field is empty
- [ ] Publish flow: Verify `isPublished: false` creates a draft, then test publishing via `PUT /pages/{id}`
