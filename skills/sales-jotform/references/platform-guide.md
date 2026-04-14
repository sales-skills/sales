# Jotform Platform Reference

## Platform overview

Jotform is an all-in-one online form builder used by 25M+ users worldwide. It enables no-code creation of forms, surveys, payment collection, e-signatures, approval workflows, and mobile apps. Positioned between simple tools (Google Forms) and enterprise survey platforms (Qualtrics), Jotform targets SMBs, nonprofits, educators, and teams that need flexible data collection with built-in payments and workflow automation.

## Key modules

### Form Builder
- Drag-and-drop editor with 10,000+ templates
- 100+ field types: text, dropdowns, file upload, signature, payment, rating, matrix, widgets
- Conditional logic: show/hide fields, skip pages, calculate values, customize Thank You pages
- Multi-page forms with progress bar
- Card Form layout (one question at a time, Typeform-style)
- AI Form Builder: describe your form in plain language, AI generates it
- Embed: iframe, lightbox, popup, full-page, or WordPress plugin
- Custom CSS and JavaScript injection

### Payment Forms
- 30+ payment gateways: Stripe, PayPal, Square, Authorize.net, Venmo, Apple Pay, Google Pay, Mollie, PayPal Commerce, Braintree, PayJunction, Echeck, 2Checkout, BlueSnap, and more
- Product lists, quantity fields, order forms, donation forms
- Subscription/recurring payments (Stripe, PayPal)
- Coupon codes and discount fields
- **Limitation**: Only one payment gateway per form
- Payment forms count against the plan limit (Free: 10, Bronze: 100, Silver: 250, Gold: 1,000)

### Jotform Sign
- Legally binding e-signatures (ESIGN Act, eIDAS compliant)
- Multi-signer workflows with signing order
- Automated document generation from form data
- Audit trail with timestamp and IP
- Free plan: 10 signed documents/month

### Jotform Workflows (Approvals)
- Visual workflow builder — drag-and-drop
- Approval chains: sequential, parallel, or conditional
- If-Else condition elements: branch workflows based on form field values
- Email notifications at each step
- Reassignment rules if an approver is unavailable
- Status tracking: pending, approved, rejected
- Auto-approve rules based on conditions

### Jotform Tables
- Spreadsheet-like view of all form submissions
- Column types: text, date, rating, link, formula
- Import data from CSV, Excel, Google Sheets
- Shared tables with team collaboration
- Filter, sort, search, and bulk actions
- Calendar and Kanban card views

### Jotform Apps
- Build mobile-responsive apps from forms and tables — no coding
- App templates for internal tools, client portals, directories
- Kiosk mode for on-site data collection
- Push notifications
- Publish as PWA or embed

### PDF Editor
- Auto-generate PDFs from form submissions
- Drag-and-drop PDF template designer
- Map form fields to PDF layout
- Fillable PDFs that pre-populate from submissions
- Auto-email PDF to submitter or admin on submission

### Report Builder
- Visual reports from form data — charts, graphs, tables
- Share reports via link or embed
- Auto-update as new submissions come in
- Export to PDF or print

## Pricing and limits

| Feature | Free | Bronze (€39/mo) | Silver (€49/mo) | Gold (€129/mo) | Enterprise ($199.95/mo) |
|---|---|---|---|---|---|
| Forms | 5 | 25 | 50 | 100 | Unlimited |
| Monthly submissions | 100 | 1,000 | 2,500 | 10,000 | 10,000,000 |
| Storage | 100 MB | 1 GB | 10 GB | 100 GB | 2 TB |
| Fields per form | 100 | 250 | 500 | 1,000 | 1,000+ |
| Monthly form views | 10,000 | 100,000 | 1,000,000 | 10,000,000 | 100,000,000 |
| Payment forms | 10 | 100 | 250 | 1,000 | Unlimited |
| API daily limit | 1,000 | 10,000 | 50,000 | 100,000 | 1,000,000 |
| Sub-users | 1 | 3 | 10 | 100 | 1,000 |
| HIPAA compliance | No | No | No | Yes | Yes |
| Signed documents | 10 | 50 | 100 | 500 | Unlimited |
| Jotform branding | Yes | No | No | No | No |
| Support tickets | 0 | 3 | 3 | 10 | 10 |

- Annual billing saves ~15-20% vs monthly
- 2-year billing available at deeper discounts
- Nonprofits: 50% off Bronze/Silver/Gold, 30% off Enterprise
- Education: Free upgrades available for teachers/students

## Integrations

### Native integrations (100+)
- **CRM**: Salesforce, HubSpot, Zoho CRM, Pipedrive, Monday.com, Airtable
- **Email**: Mailchimp, ActiveCampaign, Constant Contact, Campaign Monitor, AWeber, GetResponse, Sendinblue/Brevo
- **Payments**: Stripe, PayPal, Square, Authorize.net, Venmo, Braintree, Mollie
- **Storage**: Google Drive, Dropbox, Box, OneDrive
- **Project management**: Asana, Trello, Monday.com, Basecamp, ClickUp
- **Communication**: Slack, Microsoft Teams, Discord
- **Spreadsheets**: Google Sheets, Excel, Airtable
- **Documents**: Google Docs, PDF generation
- **Automation**: Zapier (3,000+ apps), Make (Integromat), Power Automate

### Webhooks
- Configure in Form Builder → Settings → Integrations → WebHooks
- POST request to your endpoint on every form submission
- Payload includes all form field data as key-value pairs
- 30-second timeout — process async if your handler is slow
- **Critical limitation**: Webhooks do NOT fire on submissions created via the API — only on form submit button clicks

### API
- REST API at `api.jotform.com`
- EU endpoint: `eu-api.jotform.com`
- HIPAA endpoint: `hipaa-api.jotform.com`
- Authentication: API key via query param (`?apiKey=`) or header (`APIKEY: {key}`)
- SDKs: Python, Node.js, PHP, Java, Go, C#, Ruby, Scala, Android, iOS, JavaScript
- Rate limits per plan (daily): Free 1K, Bronze 10K, Silver 50K, Gold 100K, Enterprise 1M
- MCP Server available: `github.com/jotform/mcp-server`

## Data model (API)

### Key objects
- **User**: account info, settings, usage stats
- **Form**: form definition with questions, properties, settings
- **Question**: individual form field (type, text, options, required, order)
- **Submission**: a completed form response (answers keyed by question ID)
- **Webhook**: URL endpoint registered on a form
- **Folder**: organizational container for forms
- **Report**: visual report configuration linked to a form
- **Label**: tagging system for organizing forms

### Common patterns
- Forms are identified by numeric `formID`
- Submissions are identified by numeric `submissionID`
- Questions within a form are keyed by `questionID` (numeric)
- Submission answers reference question IDs: `answers[questionID].answer`
- Pagination: `offset` and `limit` params on list endpoints
- Filtering: `status` param for active/deleted/archived forms
- Ordering: `orderby` param (e.g., `created_at`, `updated_at`)

## Workflow setup — common patterns

### 1. Lead capture form → CRM
1. Create form with name, email, company, message fields
2. Settings → Integrations → connect CRM (Salesforce, HubSpot, etc.)
3. Map form fields to CRM contact/lead fields
4. Test with a submission — verify contact created in CRM
5. Optional: add Zapier step to trigger a Slack notification

### 2. Payment collection form
1. Create form with Product List element (items, prices, quantities)
2. Add Stripe or PayPal integration in Payment tab
3. Connect your Stripe/PayPal account via OAuth
4. Configure thank-you page and confirmation email
5. Test with Stripe test mode before going live
6. Monitor in Jotform Tables → filter by payment status

### 3. Approval workflow
1. Create the request form (e.g., purchase request, time-off request)
2. After form is created, go to Workflows tab
3. Drag an Approval element after the form submission trigger
4. Set approver email(s) — can be dynamic based on form field values
5. Add If-Else conditions for routing (e.g., amount > $500 → manager, else auto-approve)
6. Add email notifications on approve/reject branches
7. Submitter can track status via their submission link

### 4. Webhook to external system
1. Form Builder → Settings → Integrations → WebHooks
2. Enter your endpoint URL
3. Jotform POSTs all form data as `application/x-www-form-urlencoded`
4. Response must return within 30 seconds
5. Test: submit form, check your endpoint logs
6. For reliability, use a webhook relay service (e.g., Hookdeck) for retry/queue

## Deep dives

### Conditional logic best practices
- **Test incrementally**: add one condition, save, test in preview. Then add the next.
- **Avoid conflicting conditions**: two show/hide rules on the same field with different triggers will produce unpredictable results.
- **Use calculation fields**: for complex logic (e.g., sum of selected items > threshold), use a hidden calculation widget and condition on its value.
- **Page-level conditions**: "Skip to page" and "Hide page" conditions are separate from field-level show/hide — don't mix them for the same logic.

### API best practices
- **Use the header auth method** (`APIKEY: {key}`) — query param auth exposes your key in logs.
- **Paginate large result sets** — default limit is 20, max is 1000. Use `offset` for pagination.
- **Cache form definitions** — form structure changes rarely, but submissions change constantly. Cache `/form/{id}` and poll `/form/{id}/submissions` with `orderby=created_at` and date filters.
- **EU compliance** — if your Jotform account is on the EU server, use `eu-api.jotform.com`. Mixing endpoints returns 401.
- **Webhook workaround for API submissions** — since webhooks don't fire on API-created submissions, either: (a) poll for new submissions, (b) trigger a Zapier "New Submission" event, or (c) add your own notification logic after the API call.

### Team collaboration and permissions
- Free plan: 1 user only. Bronze: 3 sub-users. Silver: 10. Gold: 100.
- Sub-users can be given access to specific forms or all forms.
- **No granular permissions on free/Bronze** — sub-users get full edit access to shared forms. For role-based permissions, Enterprise is required.
- **Workaround for small teams**: use Jotform Tables shared views for view-only access to submissions without giving full form edit access.
