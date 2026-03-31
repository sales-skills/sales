# Brevo API Reference

## Overview

- **Base URL**: `https://api.brevo.com/v3/`
- **Protocol**: REST over HTTPS
- **Auth**: API key via `api-key` header on every request
- **OAuth 2.0**: Available for integrations requiring delegated user access
- **Format**: JSON request and response bodies
- **Content-Type**: `application/json`
- **Pagination**: `?limit={n}&offset={n}` (0-based offset)
- **Rate limits**: Indicated via response headers: `x-sib-ratelimit-limit`, `x-sib-ratelimit-remaining`, `x-sib-ratelimit-reset`
- **SDKs**: Python, Node.js, PHP, Ruby, Java, TypeScript, Go, C#
- **OpenAPI spec**: Available in JSON and YAML at the developer portal

## Authentication

### API Key
Generate at Settings → SMTP & API → API Keys. Include in every request:

```
api-key: YOUR_API_KEY
```

### OAuth 2.0
For integrations requiring user consent and delegated access. See Brevo's OAuth 2.0 integration guide.

## HTTP Status Codes

| Code | Meaning |
|---|---|
| 200 | OK — request succeeded |
| 201 | Created — resource created |
| 202 | Accepted — request queued for processing |
| 204 | No Content — success, no response body |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 402 | Payment Required — insufficient credits |
| 403 | Forbidden — insufficient permissions |
| 404 | Not Found — resource doesn't exist |
| 405 | Method Not Allowed |
| 406 | Not Acceptable |
| 429 | Rate Limit Exceeded — back off and retry |

## Error Response Format

```json
{
  "code": "invalid_parameter",
  "message": "Description of what went wrong"
}
```

Common error codes: `invalid_parameter`, `missing_parameter`, `unauthorized`, `document_not_found`, `not_enough_credits`, `duplicate_request`, `account_under_validation`

---

## Transactional Email

### Send transactional email
`POST /smtp/email`

Send event-triggered emails (order confirmations, password resets, etc.).

```json
{
  "sender": {"name": "My App", "email": "noreply@example.com"},
  "to": [{"email": "user@example.com", "name": "John Doe"}],
  "subject": "Your order #{{params.orderId}}",
  "templateId": 12,
  "params": {"orderId": "A-12345", "total": "$99.00"}
}
```

### List transactional emails
`GET /smtp/email?email={email}&startDate={date}&endDate={date}&limit={n}&offset={n}`

### Get email content
`GET /smtp/email/{messageId}`

### Delete scheduled email
`DELETE /smtp/email/{messageId}`

### Get scheduled email details
`GET /smtp/email/scheduled/{messageId}`

### Delete hard bounces
`DELETE /smtp/email/hardbounces`

Body: `{"contactEmail": "user@example.com"}` or `{"startDate": "2024-01-01", "endDate": "2024-12-31"}`

## Transactional Email Statistics

### Aggregated stats
`GET /smtp/statistics/aggregated?startDate={date}&endDate={date}`

### Daily events
`GET /smtp/statistics/events?startDate={date}&endDate={date}`

### Unaggregated events
`GET /smtp/statistics/events/unaggregated?startDate={date}&endDate={date}&limit={n}&offset={n}`

## Email Templates

### List templates
`GET /smtp/templates?limit={n}&offset={n}`

### Create template
`POST /smtp/templates`

```json
{
  "templateName": "Order Confirmation",
  "sender": {"name": "Store", "email": "noreply@store.com"},
  "subject": "Order #{{params.orderId}} confirmed",
  "htmlContent": "<html>...</html>"
}
```

### Get template
`GET /smtp/templates/{templateId}`

### Update template
`PUT /smtp/templates/{templateId}`

### Delete template
`DELETE /smtp/templates/{templateId}`

### Send test email
`POST /smtp/templates/{templateId}/test`

### Preview template
`POST /smtp/templates/{templateId}/preview`

## Blocked Recipients & Domains

### List blocked contacts
`GET /smtp/blocklist/contacts?limit={n}&offset={n}`

### Resubscribe contact
`PUT /smtp/blocklist/contacts/{email}`

### Block domain
`POST /smtp/blocklist/domains`

### Unblock domain
`DELETE /smtp/blocklist/domains/{domain}`

### List blocked domains
`GET /smtp/blocklist/domains`

## Inbound Email Parsing

### List inbound events
`GET /inbound/events?limit={n}&offset={n}`

### Get event by UUID
`GET /inbound/events/{uuid}`

### Download attachment
`GET /inbound/attachment/{token}`

---

## Transactional SMS

### Send SMS
`POST /sms/send`

```json
{
  "type": "transactional",
  "unicodeEnabled": false,
  "sender": "MyApp",
  "recipient": "+14155552671",
  "content": "Your verification code is 123456"
}
```

### SMS statistics
`GET /sms/statistics/events/aggregated`
`GET /sms/statistics/events`
`GET /sms/statistics/events/unaggregated`

---

## Transactional WhatsApp

### Send WhatsApp message
`POST /whatsapp/send`

### WhatsApp statistics
`GET /whatsapp/statistics/events`

---

## Email Campaigns

### List campaigns
`GET /emailCampaigns?limit={n}&offset={n}&status={status}`

### Create campaign
`POST /emailCampaigns`

```json
{
  "name": "Spring Sale",
  "subject": "Spring deals inside",
  "sender": {"name": "Store", "email": "marketing@store.com"},
  "htmlContent": "<html>...</html>",
  "recipients": {"listIds": [2, 7]},
  "scheduledAt": "2024-03-15T10:00:00.000Z"
}
```

### Get campaign
`GET /emailCampaigns/{campaignId}`

### Update campaign
`PUT /emailCampaigns/{campaignId}`

### Delete campaign
`DELETE /emailCampaigns/{campaignId}`

### Send campaign now
`POST /emailCampaigns/{campaignId}/sendNow`

### Send test
`POST /emailCampaigns/{campaignId}/sendTest`

### Update status
`PUT /emailCampaigns/{campaignId}/status`

### Get share URL
`GET /emailCampaigns/share/{campaignId}`

### Export recipients
`POST /emailCampaigns/{campaignId}/exportRecipients`

### Send report
`POST /emailCampaigns/{campaignId}/sendReport`

### A/B test results
`GET /emailCampaigns/{campaignId}/abTest`

---

## SMS Campaigns

### List SMS campaigns
`GET /smsCampaigns?limit={n}&offset={n}&status={status}`

### Create SMS campaign
`POST /smsCampaigns`

### Get / Update / Delete
`GET /smsCampaigns/{campaignId}`
`PUT /smsCampaigns/{campaignId}`
`DELETE /smsCampaigns/{campaignId}`

### Send / Test / Status
`POST /smsCampaigns/{campaignId}/sendNow`
`POST /smsCampaigns/{campaignId}/sendTest`
`PUT /smsCampaigns/{campaignId}/status`

### Export / Report
`POST /smsCampaigns/{campaignId}/exportRecipients`
`POST /smsCampaigns/{campaignId}/report`

---

## WhatsApp Campaigns

### List campaigns
`GET /whatsappCampaigns?limit={n}&offset={n}`

### Create and send
`POST /whatsappCampaigns`

### Get / Update / Delete
`GET /whatsappCampaigns/{campaignId}`
`PUT /whatsappCampaigns/{campaignId}`
`DELETE /whatsappCampaigns/{campaignId}`

### Templates
`GET /whatsappTemplates`
`POST /whatsappTemplates`
`POST /whatsappTemplates/{templateId}/submitForApproval`

### Config
`GET /whatsapp/config`

---

## Contact Management

### Contacts
`GET /contacts?limit={n}&offset={n}`
`POST /contacts`
`GET /contacts/{identifier}` (identifier = email or ID)
`PUT /contacts/{identifier}`
`DELETE /contacts/{identifier}`
`GET /contacts/{identifier}/campaigns/stats`
`POST /contacts/doubleOptinConfirmation`
`POST /contacts/export`
`POST /contacts/import`

### Create contact example
```json
{
  "email": "user@example.com",
  "attributes": {"FIRSTNAME": "John", "LASTNAME": "Doe", "COMPANY": "Acme"},
  "listIds": [2],
  "updateEnabled": true
}
```

### Import contacts
```json
{
  "fileUrl": "https://example.com/contacts.csv",
  "listIds": [2],
  "emailBlacklist": false,
  "smsBlacklist": false,
  "updateExistingContacts": true,
  "emptyContactsAttributes": false
}
```

### Lists
`GET /contacts/lists?limit={n}&offset={n}`
`POST /contacts/lists`
`GET /contacts/lists/{listId}`
`PUT /contacts/lists/{listId}`
`DELETE /contacts/lists/{listId}`
`GET /contacts/lists/{listId}/contacts?limit={n}&offset={n}`
`POST /contacts/lists/{listId}/contacts/add`
`DELETE /contacts/lists/{listId}/contacts/{email}`

### Segments
`GET /contacts/segments`

### Folders
`GET /contacts/folders?limit={n}&offset={n}`
`POST /contacts/folders`
`GET /contacts/folders/{folderId}`
`PUT /contacts/folders/{folderId}`
`DELETE /contacts/folders/{folderId}`
`GET /contacts/folders/{folderId}/lists`

### Attributes
`GET /contacts/attributes`
`POST /contacts/attributes`
`PUT /contacts/attributes/{attributeCategory}/{attributeName}`
`DELETE /contacts/attributes/{attributeCategory}/{attributeName}`

---

## Events

`GET /events`
`POST /events`
`POST /events/batch`

### Create event example
```json
{
  "event_name": "page_view",
  "identifiers": {"email_id": "user@example.com"},
  "properties": {"page": "/pricing", "duration": 45}
}
```

---

## Sales CRM

### Companies
`GET /crm/companies?limit={n}&offset={n}`
`POST /crm/companies`
`GET /crm/companies/{id}`
`PATCH /crm/companies/{id}`
`DELETE /crm/companies/{id}`
`POST /crm/companies/link-unlink`
`POST /crm/companies/import`
`GET /crm/companies/attributes`
`POST /crm/companies/attributes`

### Deals
`GET /crm/deals?limit={n}&offset={n}`
`POST /crm/deals`
`GET /crm/deals/{id}`
`PATCH /crm/deals/{id}`
`DELETE /crm/deals/{id}`
`POST /crm/deals/link-unlink`
`POST /crm/deals/import`
`GET /crm/deals/attributes`

### Pipelines
`GET /crm/pipelines`
`GET /crm/pipelines/{pipelineId}`
`GET /crm/pipelines/{pipelineId}/stages`

### Tasks
`GET /crm/tasks?limit={n}&offset={n}`
`POST /crm/tasks`
`GET /crm/tasks/{id}`
`PATCH /crm/tasks/{id}`
`DELETE /crm/tasks/{id}`
`GET /crm/tasks/types`

### Notes
`GET /crm/notes?limit={n}&offset={n}`
`POST /crm/notes`
`GET /crm/notes/{id}`
`PATCH /crm/notes/{id}`
`DELETE /crm/notes/{id}`

### Files
`GET /crm/files`
`POST /crm/files/upload`
`GET /crm/files/{id}`
`GET /crm/files/{id}/download`
`DELETE /crm/files/{id}`

---

## Custom Objects

`POST /crm/objects/{objectName}/records/batch` — Create/update records in bulk
`GET /crm/objects/{objectName}/records` — List records
`DELETE /crm/objects/{objectName}/records/batch` — Delete up to 1,000 records

---

## E-commerce

### Products
`POST /ecommerce/products` — Create/update product
`POST /ecommerce/products/batch` — Bulk create
`GET /ecommerce/products?limit={n}&offset={n}`
`GET /ecommerce/products/{id}`
`POST /ecommerce/products/{id}/alerts` — Product alert for contact

### Categories
`POST /ecommerce/categories` — Create/update
`POST /ecommerce/categories/batch` — Bulk create
`GET /ecommerce/categories?limit={n}&offset={n}`
`GET /ecommerce/categories/{id}`

### Orders
`POST /ecommerce/orders` — Create/update order
`POST /ecommerce/orders/batch` — Bulk create
`GET /ecommerce/orders`

### Revenue Attribution
`GET /ecommerce/attribution` — Campaign/workflow attribution
`GET /ecommerce/attribution/products` — Product-level attribution
`GET /ecommerce/attribution/metrics` — Multi-campaign metrics

### Coupons
`GET /ecommerce/coupons/collections`
`POST /ecommerce/coupons/collections`
`GET /ecommerce/coupons/collections/{id}`
`PUT /ecommerce/coupons/collections/{id}`
`POST /ecommerce/coupons/{id}` — Add coupons to collection

### Payments
`POST /ecommerce/payments` — Create payment request
`GET /ecommerce/payments/{id}`
`DELETE /ecommerce/payments/{id}`

### Config
`POST /ecommerce/activate` — Activate e-commerce
`POST /ecommerce/config/currency` — Set currency
`GET /ecommerce/config/currency`

---

## Loyalty

### Programs
`GET /loyalty/programs`
`POST /loyalty/programs`
`GET /loyalty/programs/{id}`
`PUT /loyalty/programs/{id}`
`PATCH /loyalty/programs/{id}`
`DELETE /loyalty/programs/{id}`
`POST /loyalty/programs/{id}/publish`

### Subscriptions
`POST /loyalty/programs/{id}/subscriptions`
`GET /loyalty/subscriptions/{subscriptionId}`
`DELETE /loyalty/programs/{id}/subscriptions/{subscriptionId}`
`POST /loyalty/programs/{id}/subscriptions/{subscriptionId}/members`
`DELETE /loyalty/programs/{id}/subscriptions/{subscriptionId}/members/{memberId}`

### Rewards & Vouchers
`POST /loyalty/rewards`
`GET /loyalty/rewards/{id}`
`POST /loyalty/rewards/{id}/validate`
`GET /loyalty/rewards/codes/count`
`GET /loyalty/rewards/vouchers`
`GET /loyalty/rewards/page`
`POST /loyalty/vouchers`
`POST /loyalty/vouchers/redeem`
`PUT /loyalty/vouchers/redeem/{requestId}`
`POST /loyalty/vouchers/revoke`

### Balances
`GET /loyalty/balances/definitions`
`POST /loyalty/balances/definitions`
`GET /loyalty/balances/definitions/{id}`
`PUT /loyalty/balances/definitions/{id}`
`DELETE /loyalty/balances/definitions/{id}`
`GET /loyalty/subscriptions/{subscriptionId}/balances`
`POST /loyalty/subscriptions/{subscriptionId}/balances`
`GET /loyalty/contacts/balances`
`GET /loyalty/balances/active`

### Balance Limits
`POST /loyalty/balances/limits`
`GET /loyalty/balances/limits`
`PUT /loyalty/balances/limits/{id}`
`DELETE /loyalty/balances/limits/{id}`

### Transactions
`POST /loyalty/balances/transactions`
`PUT /loyalty/balances/transactions/{transactionId}`
`DELETE /loyalty/balances/transactions/{transactionId}`
`POST /loyalty/balances/orders`
`GET /loyalty/balances/transactions/history`

### Tiers
`POST /loyalty/tiers/groups`
`GET /loyalty/tiers/groups`
`GET /loyalty/tiers/groups/{id}`
`PUT /loyalty/tiers/groups/{id}`
`DELETE /loyalty/tiers/groups/{id}`
`GET /loyalty/programs/{programId}/tiers`
`POST /loyalty/tiers/groups/{groupId}/tiers`
`PUT /loyalty/tiers/{id}`
`DELETE /loyalty/tiers/{id}`
`POST /loyalty/tiers/{id}/subscriptions`

---

## Conversations

### Messages
`POST /conversations/messages` — Send as agent
`GET /conversations/messages/{id}`
`PUT /conversations/messages/{id}`
`DELETE /conversations/messages/{id}`

### Automated Messages
`POST /conversations/messages/send-automated`
`GET /conversations/messages/automated/{id}`
`PUT /conversations/messages/automated/{id}`
`DELETE /conversations/messages/automated/{id}`

### Agent Status
`PATCH /conversations/agents/status` — Set online for 2-3 minutes

### Visitors
`PUT /conversations/visitors/{visitorId}/group-assignment`

---

## Senders & Domains

### Senders
`GET /senders`
`POST /senders`
`PUT /senders/{senderId}`
`DELETE /senders/{senderId}`
`POST /senders/{senderId}/validateOtp`
`GET /senders/ips`
`GET /senders/{senderId}/ips`

### Domains
`GET /domains`
`POST /domains`
`GET /domains/{domainName}`
`DELETE /domains/{domainName}`
`POST /domains/{domainName}/authenticate`

---

## Webhooks

`GET /webhooks`
`POST /webhooks`
`GET /webhooks/{webhookId}`
`PUT /webhooks/{webhookId}`
`DELETE /webhooks/{webhookId}`
`POST /webhooks/{webhookId}/export`

### Create webhook example
```json
{
  "url": "https://example.com/webhook",
  "events": ["delivered", "opened", "clicked", "hardBounce", "softBounce", "unsubscribed", "complaint", "blocked"],
  "type": "transactional"
}
```

---

## Account & Users

### Account
`GET /account`
`GET /account/activity`

### Users
`GET /users`
`GET /users/{userId}`
`PUT /users/{userId}`
`PUT /users/{userId}/invitation`
`POST /users/invitation/send`
`PUT /users/{userId}/permission`

---

## Master Account (Sub-accounts)

`GET /master-account`
`GET /master-account/sub-accounts`
`POST /master-account/sub-accounts`
`GET /master-account/sub-accounts/{subAccountId}`
`DELETE /master-account/sub-accounts/{subAccountId}`
`PUT /master-account/sub-accounts/{subAccountId}/plan`
`PUT /master-account/sub-accounts/plan`
`POST /master-account/sub-accounts/{subAccountId}/api-key`
`PUT /master-account/sub-accounts/{subAccountId}/applications`
`POST /master-account/sso-token/admin`
`POST /master-account/sso-token/sub-account`

### Sub-account Groups
`POST /master-account/sub-account-groups`
`GET /master-account/sub-account-groups`
`GET /master-account/sub-account-groups/{groupId}`
`PUT /master-account/sub-account-groups/{groupId}`
`DELETE /master-account/sub-account-groups/{groupId}`
`DELETE /master-account/sub-account-groups/{groupId}/accounts/{accountId}`

### Admin Users
`POST /master-account/invite/admin-user`
`PUT /master-account/invite/admin-user/{userId}`
`DELETE /master-account/admin-users/{userId}`
`GET /master-account/invited-users`
`GET /master-account/invited-users/{userId}`
`PUT /master-account/invited-users/{userId}`

### IPs
`GET /master-account/ips`
`POST /master-account/ips/associate`
`POST /master-account/ips/dissociate`

---

## External Feeds

`GET /feeds`
`POST /feeds`
`GET /feeds/{uuid}`
`PUT /feeds/{uuid}`
`DELETE /feeds/{uuid}`

---

## Processes

`GET /processes`
`GET /processes/{processId}`

Background process tracking for bulk imports and exports.

---

## File Manager

`POST /filemanager/images` — Upload image to gallery

---

## SMTP Relay

For transactional email via SMTP instead of REST API:
- **Host**: `smtp-relay.brevo.com`
- **Port**: 587 (STARTTLS)
- **Auth**: Login = account email, Password = SMTP key (generate in Settings → SMTP & API)

---

## Notes

- API documentation: https://developers.brevo.com
- OpenAPI specs available in JSON and YAML
- The GitHub org is still `sendinblue` — SDK packages may use old naming
- Cloudflare IP ranges may need whitelisting alongside Brevo IPs for webhook delivery
