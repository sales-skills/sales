---
name: sales-qwilr-automation
description: "Build automations connecting Qwilr to CRM and other tools via API, Zapier, or native integrations. Use when connecting Qwilr to HubSpot, connecting Qwilr to Salesforce, setting up Qwilr Zapier workflows, auto-generating proposals from CRM data, using the Qwilr API, automating proposal creation, syncing Qwilr with CRM, configuring Qwilr webhooks, or building Qwilr integrations."
argument-hint: "[describe what you want to automate — e.g., 'auto-create proposals when a deal hits Stage 3 in HubSpot']"
---

# Automate Qwilr with CRM & Tools

Help the user build automations that connect Qwilr to their CRM and other tools — via the Qwilr REST API, Zapier, or native integrations.

## Qwilr API Reference

Base URL: `https://api.qwilr.com/v1`
Auth: `Authorization: Bearer <jwt-token>`

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

Webhook events: `pageAccepted`, `pagePartiallyAccepted`, `pagePreviewAccepted`, `pageViewed`, `pageFirstViewed`, `pageSetLive`, `pageRevivedLive`

## Step 1 — Gather context

Ask the user:

1. **What do you want to automate?**
   - A) Auto-create proposals when a deal reaches a certain stage
   - B) Sync proposal status/acceptance back to CRM
   - C) Get notified when prospects view or accept proposals
   - D) Full round-trip: create from CRM data + sync engagement back
   - E) Something else — describe it

2. **What CRM/tools are you using?**
   - A) HubSpot
   - B) Salesforce
   - C) Pipedrive
   - D) Zoho CRM
   - E) Other CRM (specify)
   - F) No CRM — just API/webhooks

3. **What automation platform do you prefer?**
   - A) Zapier
   - B) Make (Integromat)
   - C) Direct API (code/scripts)
   - D) Native Qwilr integration (HubSpot/Salesforce/Pipedrive)
   - E) Not sure — recommend what fits

4. **What Qwilr plan are you on?** (affects API access and native integrations)

## Step 2 — Architecture recommendation

Based on the user's answers, recommend the right approach with trade-offs:

### Native integrations (simplest)
- **HubSpot**: Qwilr's native integration auto-populates templates with HubSpot deal/contact data, syncs acceptance status back to deal properties
- **Salesforce**: Native integration maps Salesforce opportunity fields to Qwilr tokens, creates proposals from opportunity records
- **Pipedrive**: Native integration connects deal data to Qwilr templates
- **Best for**: Teams that want zero-code setup and use a supported CRM
- **Limitation**: Less customizable than API, limited to supported field mappings

### Zapier / Make (medium complexity)
- **Best for**: Multi-tool workflows (e.g., create proposal when Stripe payment received, or notify Slack when proposal viewed)
- **Approach**: Use Qwilr's Zapier triggers (page viewed, accepted) and actions (create page)
- **Limitation**: Slower execution, may hit rate limits at scale, costs per task

### Direct API (most powerful)
- **Best for**: Custom workflows, high volume, complex logic (conditional sections, dynamic pricing calculations)
- **Approach**: Call Qwilr REST API directly from your backend, serverless functions, or scripts
- **Limitation**: Requires development effort

## Step 3 — Step-by-step build guide

### 3a. Discover available blocks

First, list the saved blocks in the Qwilr account to find template blocks to use:

```bash
curl -X GET https://api.qwilr.com/v1/blocks/saved \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json"
```

Response includes block `id`, `name`, and `type` — save the IDs you need for page creation.

### 3b. Create a page from CRM data

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

### 3c. Subscribe to webhook events

Set up real-time notifications for proposal engagement:

```bash
# Get notified when a prospect first views the proposal
curl -X POST https://api.qwilr.com/v1/webhooks \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-server.com/webhooks/qwilr",
    "events": ["pageFirstViewed", "pageViewed", "pageAccepted", "pagePartiallyAccepted"]
  }'
```

### 3d. Check page status

Poll or retrieve page details after sending:

```bash
curl -X GET "https://api.qwilr.com/v1/pages/PAGE_ID?expand=acceptance,metadata" \
  -H "Authorization: Bearer $QWILR_TOKEN"
```

## Step 4 — Token/substitution mapping

Design the mapping between CRM fields and Qwilr template tokens:

| CRM Field | Qwilr Token | Example Value |
|---|---|---|
| Company Name | `{{company_name}}` | Acme Corp |
| Contact First Name | `{{contact_first_name}}` | Jane |
| Contact Last Name | `{{contact_last_name}}` | Smith |
| Contact Title | `{{contact_title}}` | VP Engineering |
| Deal Amount | `{{deal_amount}}` | $48,000 |
| Close Date | `{{close_date}}` | March 30, 2026 |
| Product/SKU | `{{product_name}}` | Enterprise Plan |
| Rep Name | `{{rep_name}}` | Alex Johnson |
| Rep Email | `{{rep_email}}` | alex@company.com |

Customize this mapping based on the user's CRM fields and proposal template needs. Tokens should match exactly what's used in the Qwilr saved blocks.

## Step 5 — Testing checklist

Walk through this end-to-end before going live:

- [ ] **Auth**: Verify API token works with `GET /blocks/saved`
- [ ] **Block discovery**: Confirm saved block IDs match your template
- [ ] **Token mapping**: Create a test page with all tokens populated — verify each substitution renders correctly
- [ ] **Quote block**: Verify pricing, optional items, and billing types render as expected
- [ ] **Webhook delivery**: Send a test event and confirm your endpoint receives it
- [ ] **CRM sync**: If using native integration, create a test deal and verify the proposal auto-populates
- [ ] **Error handling**: Test what happens when a required CRM field is empty
- [ ] **Publish flow**: Verify `isPublished: false` creates a draft, then test publishing via `PUT /pages/{id}`

## Common automation recipes

### Recipe: Auto-create proposal when deal hits Stage 3

**Trigger**: CRM deal moves to "Proposal" stage
**Action**: `POST /pages` with deal data mapped to tokens
**Then**: Update CRM deal with Qwilr page URL

### Recipe: Notify Slack when proposal is viewed

**Trigger**: Qwilr webhook `pageFirstViewed`
**Action**: Post to Slack channel with prospect name, page title, and timestamp
**Then**: Rep follows up within 24 hours

### Recipe: Update CRM when proposal is accepted

**Trigger**: Qwilr webhook `pageAccepted`
**Action**: Update CRM deal stage to "Closed Won", record accepted amount
**Then**: Trigger onboarding workflow

## Related skills

- `/sales-proposal-page` — Write the actual proposal content and quote block design
- `/sales-proposal-analytics` — Interpret engagement signals and decide follow-up actions
- `/sales-proposal-template` — Design reusable templates for API auto-population
- `/sales-deal-room` — For complex multi-page deal rooms
