# Qwilr API — Creating Proposals Programmatically

## Authentication

- **Auth**: Bearer token via `Authorization` header (generate JWT in Qwilr → Settings → API)
- **Base URL**: `https://api.qwilr.com/v1`

## Create a proposal page

`POST /pages`

```json
{
  "name": "Proposal for {{company_name}}",
  "isPublished": false,
  "tags": ["proposal", "{{deal_stage}}"],
  "blocks": [
    {
      "savedBlockId": "<from GET /blocks/saved>",
      "tokens": {
        "company_name": "Acme Corp",
        "contact_first_name": "Jane"
      }
    }
  ],
  "quoteSections": [
    {
      "title": "Platform License",
      "items": [
        {
          "title": "Annual Platform License",
          "description": "Full access to all features",
          "type": "fixedCost",
          "fixedCost": { "amount": "<amount>", "currency": "USD" },
          "isOptional": false,
          "billing": { "type": "recurring", "frequency": "annual" }
        }
      ]
    }
  ]
}
```

## Key fields

- **`savedBlockId`** — Run `GET /blocks/saved` first to discover available block IDs for your account
- **`isPublished`** — Set to `false` to review before sending to the buyer
- **`tokens`** — Substitutes CRM data into `{{token}}` placeholders in the template
- **`quoteSections`** — Array of pricing sections, each with line items
- **`isOptional`** — Set `true` on add-on line items so buyers can self-select
- **`billing.type`** — `oneOff` or `recurring` (with `frequency`: `monthly`, `quarterly`, `annual`)

## Quote item types

| Type | Use for |
|---|---|
| `fixedCost` | Flat-fee line items (licenses, setup fees) |
| `perUnit` | Per-seat or per-unit pricing with quantity selector |
| `hourlyRate` | Time-based billing |

## Related endpoints

- `GET /blocks/saved` — List saved block templates
- `GET /pages` — List all pages
- `GET /pages/{id}` — Get page details and analytics
- `PATCH /pages/{id}` — Update an existing page
- `POST /pages/{id}/publish` — Publish a draft page
