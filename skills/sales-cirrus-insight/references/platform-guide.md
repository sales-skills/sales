# Cirrus Insight Platform Reference

## Platform overview

Cirrus Insight is a Salesforce-native sales productivity platform that integrates Salesforce with Gmail and Outlook. Positioned as a "Seller-Led, AI-Orchestrated Sales Operating System," it bridges inbox and CRM by automatically syncing emails, calendar events, and tasks to Salesforce, eliminating manual data entry. Recent additions include Meeting AI (automated prospect research), Conversation Intelligence (meeting analysis), and Live Coaching (real-time call guidance). Target audience: sales teams already on Salesforce — Account Executives, Sales Managers, Sales Ops, CRM Admins. Key industries: Financial Services, Higher Education, Technology, Energy & Utilities.

## Key modules

### Salesforce Sidebar ($11/user/mo)
Real-time Salesforce data displayed within Gmail or Outlook. Create, manage, and track opportunities directly from the inbox. Mirrors Salesforce configuration — user permissions, custom objects, record types, page layouts, and data validation rules are represented within the inbox experience. Available on desktop and mobile.

### Salesforce Email Sync ($5/user/mo)
Automatic logging of all email activity to Salesforce. Eliminates manual email-to-CRM entry. Syncs sent and received emails to the appropriate Contact, Lead, or Opportunity record.

### Salesforce Calendar Sync ($11/user/mo)
Bi-directional calendar synchronization between Google Calendar/Outlook Calendar and Salesforce Events. Meeting details, attendees, and outcomes logged automatically.

### Salesforce Task Sync
Synchronizes tasks between email client and Salesforce. Tasks created in either system appear in both.

### Calendar Scheduling ($7/user/mo)
Shareable booking links for prospects to self-schedule meetings. Embeddable in emails, signatures, and websites. Connected to Salesforce — booked meetings auto-create Events and Activities.

### Smart Scheduler ($20/user/mo)
Intelligent lead routing and scheduling. Automatically routes inbound leads to the right rep based on territory, round-robin, or custom rules. Prospects book with the assigned rep directly.

### Meeting AI ($13/user/mo)
AI-powered prospect research automation. Before each meeting, Meeting AI gathers prospect intelligence — company data, recent news, LinkedIn activity, prior Salesforce interactions — and delivers a pre-meeting brief. Reduces manual meeting prep time.

### CRM AI
AI assistant for opportunity hygiene. Monitors deal data in Salesforce and flags stale opportunities, missing fields, and pipeline health issues. Helps reps and managers keep CRM data clean.

### Conversation Intelligence
Meeting analysis and coaching. Records and transcribes sales calls, extracts key topics, action items, and coaching insights. Provides post-call summaries and conversation analytics. Available on Zoom, Teams, and Google Meet.

### Live Coaching ($40-$28.50/hr based on volume)
Real-time call guidance during live sales conversations. Prompts reps with talking points, competitive positioning, objection handling, and next-best-action suggestions based on conversation context.

### Meeting Transcription ($15-$8.50/hr based on volume)
AI transcription of recorded meetings. Hourly pricing decreases with volume. Transcripts are analyzed for topics, sentiment, and key moments.

### Email Blast ($12/user/mo)
Personalized mass email communications. Send to segmented lists from your inbox (good for deliverability — sends come from your real email). Known to error on large lists (500+) — batch in groups of 100-150.

### Buyer Signals ($10/user/mo)
Engagement and intent tracking. Monitors when prospects open emails, click links, view attachments, visit your website, and interact with shared content. Surfaces engagement data in the Salesforce Sidebar and Salesforce records.

### Attachment Tracking
Track when prospects open and view email attachments. See page-by-page analytics showing which slides or sections prospects spent time on.

### Competitive Positioning
AI-powered competitive intelligence during calls and deal preparation. Surfaces competitor mentions, positioning guidance, and battlecard content.

### Proposal & ROI Drafting
AI-assisted proposal and ROI calculation generation based on deal context from Salesforce.

### Deal Room
Collaborative workspace for complex deals. Centralized location for all deal-related content, communications, and stakeholder interactions.

## Pricing and limits

### Per-feature per-user monthly pricing

| Module | Price |
|---|---|
| Salesforce Email Sync | $5/user/mo |
| Salesforce Sidebar | $11/user/mo |
| Salesforce Calendar Sync | $11/user/mo |
| Calendar Scheduling | $7/user/mo |
| Smart Scheduler | $20/user/mo |
| Meeting AI | $13/user/mo |
| Email Blast | $12/user/mo |
| Buyer Signals | $10/user/mo |

### Hourly-billed features

| Feature | Rate |
|---|---|
| Meeting Transcription | $15-$8.50/hr (volume-tiered) |
| Live Coaching | $40-$28.50/hr (volume-tiered) |

### Billing discounts

| Term | Discount |
|---|---|
| Monthly | 0% |
| Quarterly | 5% |
| Annual | 20% (10% billing + 10% term) |
| 2-year | 30% (10% billing + 20% term) |
| 3-year | 40% (10% billing + 30% term) |

### Typical team cost examples

- **Basic stack** (Email Sync + Sidebar + Calendar Sync): $27/user/mo
- **Sales stack** (Basic + Meeting AI + Buyer Signals): $50/user/mo
- **Full stack** (Sales + Scheduling + Email Blast): $69/user/mo
- 15-person team on Sales stack, annual billing: $50 × 15 × 0.80 = $600/mo ($7,200/yr)

### Partner program

Three tiers: Marketing Partners, Consulting Partners, Technology Partners (OEM White Label). Revenue share based on client size. Customer referral program: $100 gift card for active customers who refer colleagues.

## Integrations

### Primary integrations
- **Salesforce** — core integration, mirrors SF configuration, bi-directional sync
- **Gmail** — browser extension (Chrome)
- **Outlook / Office 365** — add-in
- **Microsoft Teams** — meeting recording
- **Zoom** — meeting recording
- **Chrome** — browser extension

### Marketing automation
- **Pardot** — Salesforce Marketing Cloud Account Engagement
- **Marketo** — marketing automation sync

### Additional
- **DocuSign** — e-signature integration
- **Zapier** — workflow automation
- **HubSpot** — CRM integration (secondary to Salesforce)

## Data model (API)

### REST API

- **Base URL**: `https://api.cirrusinsight.com`
- **Auth**: Organization `key_id` (UUID) — no OAuth, no API key header. Must be enabled by a Cirrus Insight Administrator (disabled by default).
- **Available endpoint**: Calendar Scheduling views only

#### GET /api/organizations/{key_id}/calendarviews

Retrieve user Calendar Scheduling links by email addresses.

**Parameters**:
- `key_id` (path, required): Organization UUID from Cirrus Insight
- `emails` (query, required): Comma-separated email addresses

**Success response (200)**:
```json
{
  "status": "Success",
  "message": "Success",
  "calendarViews": [
    {
      "email": "rep@company.com",
      "calendars": [
        {
          "url": "https://calendar.cirrusinsight.com/schedule/rep",
          "name": "Rep's Calendar",
          "isPrimary": true
        }
      ]
    }
  ]
}
```

**Error responses**:
- `404`: Organization key_id missing/not found or API not enabled
- `400`: Missing or incorrectly formatted `emails` parameter

### Webhooks

Cirrus Insight supports webhooks for scheduling events:
- Meeting booked
- Meeting rescheduled
- Meeting canceled

Webhooks enable external applications to receive real-time notifications and build custom workflows. Configuration details available in Cirrus Insight admin settings.

### API limitations

- Only one endpoint available (Calendar Scheduling)
- No transcript download API
- No email activity API
- No contact/lead API
- No deal/opportunity API
- Must be admin-enabled (not self-serve)
- No OAuth — uses org-level key_id only

## Workflow setup

### 1. Initial Salesforce sync setup

1. Install Cirrus Insight browser extension (Gmail) or add-in (Outlook)
2. Authenticate with Salesforce — OAuth flow connects your SF org
3. Configure sync settings: which email folders to sync, calendar sync direction, task sync preferences
4. Verify Salesforce Connected App settings — ensure "Refresh Token is valid until revoked" policy
5. Test: send an email and verify it appears on the correct Salesforce record

### 2. Meeting AI configuration

1. Enable Meeting AI module in admin settings
2. Connect calendar integration (Google or Outlook)
3. Meeting AI automatically runs before scheduled external meetings
4. Pre-meeting briefs appear in the Sidebar and optionally via email notification
5. Review and customize which data sources Meeting AI pulls from

### 3. Smart Scheduler lead routing

1. Enable Smart Scheduler module
2. Define routing rules: territory-based, round-robin, or custom logic
3. Create booking pages with routing enabled
4. Embed booking links in website forms, email campaigns, or landing pages
5. Test: submit a form and verify the lead routes to the correct rep's calendar

## Deep dives

### Salesforce sync architecture

Cirrus Insight mirrors your Salesforce configuration — it reads page layouts, record types, field-level security, and validation rules. This means:
- Custom objects appear in the Sidebar
- Validation rules enforce the same constraints in the inbox
- Field-level security respects user permissions
- Record types and page layouts match what users see in Salesforce

**Sync direction**: Email sync is outbound-push (Cirrus → Salesforce). Calendar sync is bi-directional. Task sync is bi-directional.

### Email Blast best practices

- Keep lists under 150 per send to avoid errors
- Sends come from your real inbox (not a separate sending infrastructure) — good for deliverability but uses your email provider's sending limits
- Check Salesforce org-level daily email limits (typically 5,000/day for API-triggered emails)
- Personalization tokens pull from Salesforce fields — ensure data is clean before sending
- Track results through Buyer Signals (open/click data logs to Salesforce)

### Buyer Signals analytics

Buyer Signals tracks:
- Email opens and click events
- Attachment views (page-by-page engagement)
- Website visits (if tracking pixel installed)
- Content interaction

Engagement data surfaces in:
- Salesforce Sidebar (real-time alerts)
- Salesforce Activity records (historical log)
- Buyer Signals dashboard (aggregate analytics)

Use engagement data to prioritize follow-ups — prospects showing high engagement (multiple opens, attachment views, website visits) are signaling buying intent.
