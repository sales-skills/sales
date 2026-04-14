# Typeform Platform Reference

## Platform overview

Typeform is a conversational form and survey builder known for its one-question-at-a-time UX. It positions itself as "people-friendly forms" — designed for higher engagement and completion rates compared to traditional grid-style forms. Target audience: marketers, product teams, HR, customer success, and anyone collecting data through interactive forms. Key differentiator: the conversational interface reportedly drives 3.5x more data compared to traditional forms.

## Key modules

### Form Builder
- Drag-and-drop builder, no coding required
- AI form builder ("AI know-pilot") generates forms from natural language prompts
- Question types: short text, long text, multiple choice, dropdown, rating, opinion scale, NPS, date, file upload, payment, email, phone, website, yes/no, picture choice, video, statement, ranking, matrix
- Conditional logic ("Logic Jumps"): show/hide questions based on previous answers
- Calculator: compute values from answers (for ROI calculators, quizzes, scoring)
- Hidden fields: pass data from URL parameters into responses
- Welcome screens and thank-you screens (customizable)

### Survey Maker
- Pre-built survey templates (NPS, CSAT, CES, employee engagement, market research)
- Branching logic for skip patterns
- Response piping: insert previous answers into later questions
- Anonymous responses option
- Partial response tracking (available on paid plans)

### Quiz Builder
- Score-based quizzes with correct/incorrect answers
- Personality-style quizzes with outcomes mapped to answer combinations
- Real-time score calculation
- Custom result screens based on score ranges
- Lead generation quizzes: gate results behind email capture

### Video Forms (VideoAsk integration)
- Interactive video questions — respondents see a video and respond with video, audio, or text
- Conditional video paths based on responses
- Available as a separate product (VideoAsk by Typeform)

### Workflow Builder
- Automate post-submission actions: send emails, update contacts, trigger integrations
- Logic and branching within workflows
- Scoring and calculations
- URL parameter configuration
- Follow-up message automation
- Connects to native integrations from within the workflow

### Contacts & Automations
- Contact management: automatic segmentation based on form responses
- Follow-up emails triggered by responses
- Contact enrichment from form data

### Analytics & Reporting
- Response summary dashboard
- Individual response viewer
- Drop-off analysis (which question causes abandonment)
- Completion rate tracking
- Export to CSV, Google Sheets, Excel
- Note: analytics are relatively basic compared to dedicated tools like Qualtrics or Medallia

## Pricing and limits

*Best-effort from research — verify current pricing at typeform.com/pricing*

| Plan | Price (monthly) | Responses/mo | Key features |
|---|---|---|---|
| Free | $0 | 10 | Basic forms, Typeform branding, limited question types |
| Basic | $28/mo | 100 | Remove branding (on paid plans), custom thank-you screens, integrations |
| Plus | $56/mo | 1,000 | Custom branding, custom subdomains, priority support |
| Business | $91/mo | 10,000 | AI analytics, advanced integrations, team collaboration |
| Talent | $119/mo | - | HR-focused (video, automation for employee experience) |
| Growth Pro | $266/mo | - | Marketing teams, advanced automation workflows |
| Enterprise | Custom | Custom (50K+) | SSO, advanced security, dedicated support, custom limits |

- Annual billing saves ~30%
- **Response limits are shared across ALL forms** on the account — not per form
- When limit is reached, forms go Private automatically; they reopen at next billing cycle
- Auto-upgrade feature available: automatically bumps your plan when limits are reached
- Partial responses do NOT count toward limits (only completed submissions)
- Enterprise plans for 50K+ responses require contacting sales

## Integrations

### Native integrations (400+)
Key native connectors:
- **CRM**: HubSpot, Salesforce, Pipedrive
- **Email marketing**: Mailchimp, ActiveCampaign, Klaviyo, Kit (ConvertKit)
- **Messaging**: Slack, Microsoft Teams
- **Payments**: Stripe (collect payments directly in forms)
- **Spreadsheets**: Google Sheets, Airtable, Excel
- **Automation**: Zapier, Make (Integromat)
- **Scheduling**: Calendly
- **Analytics**: Google Analytics, Segment
- **Other**: Intercom, Notion, Webflow, Monday.com

### Zapier integration
- **Trigger**: New Entry (Instant) — fires when a form is submitted
- **Actions**: Create form, update form question options
- Connects to 5,000+ apps via Zapier

### Webhooks
- Send response data to any URL on submission
- JSON payload with full response data
- Must return 2XX within 30 seconds
- Supports payload signing for security
- Retry policy: varies by error code (see Gotchas)
- Auto-disables on sustained failures

### Embed SDK
- JavaScript SDK: `@typeform/embed`
- Embed modes: standard (inline), popup, slider, popover, sidetab
- Supports hidden fields injection from host page
- Customization: `hideHeaders`, `hideFooter`, `opacity`, lazy loading
- Responsive — adapts to container size

## Data model (API)

### Key objects
- **Form** (`form_id`): The typeform itself — questions, settings, logic, theme
- **Response**: A single submission — answers, metadata, timestamps, variables
- **Workspace**: Organizational container for forms
- **Theme**: Visual style applied to forms
- **Image**: Media uploaded to the account

### API endpoints overview

**Create API** (manage forms, workspaces, themes, images):
- `POST /forms` — create a form
- `GET /forms` — list forms
- `GET /forms/{form_id}` — retrieve form
- `PUT /forms/{form_id}` — update form (full replacement)
- `PATCH /forms/{form_id}` — update form (partial)
- `DELETE /forms/{form_id}` — delete form
- `GET/PUT /forms/{form_id}/messages` — custom form messages
- Workspace endpoints: create, retrieve, update, delete
- Theme endpoints: CRUD operations
- Image endpoints: upload, retrieve, delete
- Translation endpoints: retrieve, update, delete, auto-translate

**Responses API** (access submission data):
- `GET /forms/{form_id}/responses` — retrieve responses (with filters)
- `DELETE /forms/{form_id}/responses` — delete responses
- File download endpoints for uploaded files, audio, and video

**Webhooks API**:
- `GET /forms/{form_id}/webhooks` — list webhooks
- `PUT /forms/{form_id}/webhooks/{tag}` — create/update webhook
- `GET /forms/{form_id}/webhooks/{tag}` — retrieve webhook
- `DELETE /forms/{form_id}/webhooks/{tag}` — delete webhook

### Response query parameters
- `page_size` (max 1000, default 25)
- `since` / `until` — ISO 8601 or Unix timestamp
- `after` / `before` — cursor-based pagination
- `response_type` — filter: `started`, `partial`, `completed`
- `sort` — format: `{fieldID},{asc|desc}`
- `query` — full-text search across answers
- `fields` / `answered_fields` — filter by specific fields

## Workflow setup

### Common workflow 1: Lead capture → CRM
1. Create a typeform with name, email, company, and qualifying questions
2. Add hidden fields for UTM tracking (utm_source, utm_medium, utm_campaign)
3. Set up native HubSpot/Salesforce integration or webhook to CRM
4. Configure follow-up email in Workflow Builder
5. Embed on landing page using Embed SDK with hidden field pass-through

### Common workflow 2: NPS survey → Slack alert
1. Create NPS typeform (rating 0-10 + open-ended follow-up)
2. Add logic jump: if score ≤ 6 (detractor), show "What can we improve?" If ≥ 9 (promoter), show "What do you love most?"
3. Connect Slack integration → route detractor alerts to #customer-success channel
4. Connect Google Sheets integration → log all responses for trend analysis
5. Set up scheduled sends via email integration or share link

### Common workflow 3: Quiz funnel → email segmentation
1. Create a quiz with scored answers
2. Set up score-based outcomes (e.g., "Beginner", "Intermediate", "Advanced")
3. Gate results behind email capture (add email question before result screen)
4. Connect to email platform (Mailchimp/Klaviyo/ActiveCampaign) with score as a custom field
5. Segment email lists by quiz outcome for targeted nurture sequences

## Deep dives

### Maximizing form completion rates
- **Keep it short**: 5-8 questions for lead capture, 10-15 max for surveys
- **Use the conversational format**: one question per screen (Typeform's default) gets higher completion than showing all questions at once
- **Progress indicators**: enable the progress bar so respondents know how far they are
- **Mobile optimization**: Typeform forms are mobile-responsive by default, but test on actual devices
- **Smart question ordering**: start with easy, low-commitment questions (multiple choice) before asking for personal info (email, phone)
- **Response piping**: reference previous answers in later questions to make the form feel personalized

### Managing response limits cost-effectively
- **Archive completed campaigns**: inactive forms still consume responses if left open
- **Use logic jumps to disqualify early**: if a respondent doesn't match your criteria, end the form early before they consume a response
- **Embed strategically**: don't put forms on high-traffic pages unless you're prepared for the response volume
- **Monitor usage**: check Settings → Billing → Usage regularly
- **Consider alternatives for high-volume collection**: for 10K+ responses/mo, compare Typeform Business ($91/mo) vs SurveyMonkey or Google Forms (unlimited free responses with less UX polish)

### Stripe payment integration
- Collect one-time or recurring payments directly in forms
- Supported on paid plans
- Connect Stripe account via Settings → Connect → Stripe
- Add a Payment question type to the form
- Supports custom amounts, fixed amounts, and calculated amounts from prior answers
- Payments are processed through Stripe — Typeform handles the UI, Stripe handles the transaction
