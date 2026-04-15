# HubSpot Platform Reference

## Platform overview

HubSpot is an all-in-one customer platform consisting of Smart CRM, Marketing Hub, Sales Hub, Service Hub, Content Hub, Data Hub, Commerce Hub, and Breeze AI. It's the default CRM for inbound-led startups and mid-market companies, with a genuinely useful free tier and a massive integration ecosystem (2,000+ marketplace apps). Target audience ranges from solo founders (free CRM) to enterprise teams (thousands of seats). Key differentiator: marketing + sales + service unified on one platform with shared data.

## Key modules

### Smart CRM (free, included with all plans)
- **Contacts and Companies**: Standard objects with properties (fields). Auto-enrichment from connected email and public data.
- **Deals**: Visual pipeline with drag-and-drop stages. Custom deal properties. Multi-pipeline support on paid tiers.
- **Activities**: Emails, calls, meetings, notes, tasks logged against records. Timeline view per contact/company/deal.
- **Lists**: Static and active (dynamic) lists. Segmentation by any property, activity, or form submission.
- **Custom Objects**: Available on Enterprise tier only. Define your own objects with custom properties and associations.

### Marketing Hub
- **Email Marketing**: Drag-and-drop editor, personalization tokens, A/B testing, smart send times. Marketing contacts billing — only pay for contacts you actively market to.
- **Forms and Pop-ups**: Embedded, standalone, and pop-up forms. Progressive profiling. Dependent fields.
- **Landing Pages**: Drag-and-drop builder with templates. A/B testing on Professional+.
- **Marketing Automation (Professional+)**: Workflow builder with if/then branching. Enrollment triggers based on any CRM event. Goal-based completion. Delay, send email, update property, create task, webhook actions.
- **Ads Management**: Connect Google, Facebook, LinkedIn ad accounts. Create audiences from CRM lists. Track ad spend to deal revenue attribution.
- **SEO Tools**: Content strategy, topic clusters, on-page recommendations.
- **Social Media**: Publish and monitor social posts. Connect Facebook, Instagram, LinkedIn, Twitter.

### Sales Hub
- **Email Sequences**: Automated 1:1 email sequences (different from Marketing Hub — these are sales rep outreach). Templates, tokens, send windows. Enroll manually or via workflow.
- **Meeting Scheduling**: Personal meeting links, round-robin, group meetings. Embed on website. Free tier includes basic scheduling.
- **Quotes**: Create quotes from deals with line items. eSignature support on Professional+.
- **Playbooks**: Guided selling scripts for reps. Structured note-taking during calls.
- **Forecasting**: Manual and AI-powered revenue forecasting. Pipeline coverage analysis. Available on Professional+.
- **Calling**: Built-in VoIP calling (limited minutes per tier). Call recording and transcription on Professional+.
- **Documents**: Track which documents prospects open and how long they view each page.

### Service Hub
- **Tickets**: Customer support ticket management. SLA tracking on Professional+.
- **Knowledge Base (Professional+)**: Self-service help center. SEO-optimized articles.
- **Customer Portal (Professional+)**: Branded portal where customers track tickets.
- **Feedback Surveys**: NPS, CSAT, CES surveys. Automated follow-up based on scores.
- **Conversations Inbox**: Shared inbox for email, chat, Facebook Messenger, WhatsApp.

### Content Hub
- **Website Pages**: Drag-and-drop CMS. Responsive templates. Dynamic content (show different content based on visitor properties).
- **Blog**: Built-in blogging with SEO recommendations.
- **HubDB**: Structured data tables for dynamic website content (product listings, event calendars, etc.).

### Data Hub (formerly Operations Hub)
- **Data Sync**: Bi-directional sync with 100+ third-party apps (Salesforce, Mailchimp, Google Contacts, etc.). Custom field mappings.
- **Data Quality Automation**: Auto-fix formatting (capitalize names, clean phone numbers). Deduplication tools.
- **Datasets (Professional+)**: Pre-built data collections for reporting. Calculated fields.
- **Programmable Automation (Professional+)**: Custom coded workflow actions (JavaScript). Webhooks.

### Commerce Hub
- **Payments**: Accept payments via HubSpot Payments (US only) or Stripe integration.
- **Invoices**: Create and send invoices from deals.
- **Pricing**: Consumption-based — 0.8% per transaction (HubSpot Payments) or 2.9% (Stripe). No monthly subscription fee.
- **Subscriptions**: Recurring billing management.

### Breeze AI
- **Breeze Copilot**: AI assistant throughout HubSpot — draft emails, summarize records, generate reports.
- **Breeze Agents**: AI-powered agents for content creation, social media, prospecting, and customer support.
- **Breeze Intelligence**: Contact enrichment, buyer intent, form shortening powered by AI data.
- **Available across all Hubs** — features vary by tier.

## Pricing and limits

All prices are per-seat/month on annual billing unless noted. Best-effort — verify at hubspot.com/pricing.

### Marketing Hub
| Tier | Price | Marketing Contacts | Seats | Key additions |
|------|-------|--------------------|-------|---------------|
| Free | $0 | Unlimited (no email sending limits apply differently) | Unlimited | Forms, email marketing (2,000 sends/mo), basic reporting |
| Starter | $20/seat/mo | 1,000 | 1 core | Remove branding, simple automation, email health |
| Professional | $890/mo flat | 2,000 | 3 | Full automation, A/B testing, custom reporting, SEO, social. $3,000 onboarding fee |
| Enterprise | $3,600/mo flat | 10,000 | 5 | Custom objects, adaptive testing, revenue attribution. $7,000 onboarding fee |

Additional marketing contacts: $50/mo per 1,000 (Starter/Pro), $100/mo per 10,000 (Enterprise).

### Sales Hub
| Tier | Price | Seats | Key additions |
|------|-------|-------|---------------|
| Free | $0 | Unlimited | Basic CRM, 1 pipeline, meeting scheduling |
| Starter | $20/seat/mo | 1 core | 2 pipelines, email tracking, simple automation |
| Professional | $100/seat/mo | 1 sales | Sequences, forecasting, playbooks, custom reporting. $1,500 onboarding |
| Enterprise | $150/seat/mo | 1 sales | Custom objects, predictive lead scoring, advanced permissions. $3,500 onboarding |

### Service Hub
| Tier | Price | Key additions |
|------|-------|---------------|
| Free | $0 | Basic tickets, conversations inbox |
| Starter | $20/seat/mo | Ticket routing, SLA |
| Professional | $100/seat/mo | Knowledge base, customer portal, playbooks. $1,500 onboarding |
| Enterprise | $150/seat/mo | Custom objects, goals, SSO. $3,500 onboarding |

### Content Hub
| Tier | Price | Key additions |
|------|-------|---------------|
| Starter | $20/seat/mo | Website pages, blog, basic SEO |
| Professional | $500/mo (3 seats) | Dynamic content, A/B testing, smart content |
| Enterprise | $1,500/mo (5 seats) | Memberships, custom objects, serverless functions |

### Data Hub
| Tier | Price | Key additions |
|------|-------|---------------|
| Starter | $20/seat/mo | Data sync, default field mappings |
| Professional | $800/mo | Programmable automation, data quality, datasets |
| Enterprise | $2,000/mo | Advanced curation, Snowflake integration |

### Bundles
- **Customer Platform bundle** (all hubs): Discounted vs buying individually. Pricing varies — contact HubSpot sales.
- **HubSpot for Startups**: Up to 90% off for eligible startups (accelerator/incubator/VC partner). Apply at hubspot.com/startups.

### Key limits by tier
- **Free**: 1 deal pipeline, 5 active lists, 1,000 static lists, 2,000 email sends/mo, no sequences
- **Starter**: 2 pipelines, 50 active lists, no advanced automation
- **Professional**: 15 pipelines, 1,200 active lists, 500 sequences, custom reporting
- **Enterprise**: 100 pipelines, 2,000 active lists, custom objects, hierarchical teams

## Integrations

### Native (built by HubSpot)
- Salesforce (bi-directional CRM sync)
- Google Workspace (Gmail, Calendar, Contacts)
- Microsoft 365 (Outlook, Calendar, Teams)
- Slack (notifications, CRM actions from Slack)
- Zoom (meeting integration, webinar sync)
- LinkedIn Sales Navigator
- Stripe (payments)
- Shopify (ecommerce sync)
- WordPress (forms, tracking, CMS)

### Marketplace
- 2,000+ third-party integrations. Categories: CRM, email, social, analytics, finance, ecommerce, calling, video, documents, project management.
- All marketplace apps reviewed and certified by HubSpot.

### iPaaS
- **Zapier**: 7,000+ triggers and actions. Connect any app to HubSpot.
- **Make (Integromat)**: Visual workflow builder with HubSpot modules.
- **Workato**: Enterprise automation platform with HubSpot connector.

### API & Webhooks
- REST API with date-versioned endpoints (current: 2026-03)
- Base URL: `https://api.hubapi.com/`
- Authentication: OAuth 2.0 (recommended), Private app tokens
- Webhooks: Subscribe to CRM events (contact created, deal stage changed, etc.)
- Rate limits: 100 requests per 10 seconds (OAuth), 200,000 requests per day
- SDKs: Node.js, PHP, Python, Ruby, JavaScript (all on GitHub under HubSpot org)

## Data model

### Standard objects
- **Contacts**: People. Properties: email, name, company, lifecycle stage, lead status, etc.
- **Companies**: Organizations. Auto-associated with contacts via email domain.
- **Deals**: Revenue opportunities. Associated with contacts and companies. Pipeline stages are customizable.
- **Tickets**: Support requests. Associated with contacts and companies.
- **Products**: Line items for quotes. Price, description, recurring billing settings.
- **Custom Objects (Enterprise only)**: Define any object type with custom properties and associations.

### Associations
- Contacts ↔ Companies (many-to-many)
- Deals ↔ Contacts, Companies (many-to-many)
- Tickets ↔ Contacts, Companies (many-to-many)
- Any object ↔ Custom Objects (Enterprise)

### Key properties
- **Lifecycle Stage**: Subscriber → Lead → MQL → SQL → Opportunity → Customer → Evangelist. Controls marketing/sales handoff.
- **Lead Status**: Open, In Progress, Qualified, Unqualified, etc. Sales-specific.
- **Deal Stage**: Custom per pipeline. Maps to probability for forecasting.

## Workflow setup

### Creating your first workflow (Professional+)
1. Go to Automations → Workflows → Create workflow
2. Choose workflow type: Contact-based, Company-based, Deal-based, or Ticket-based
3. Set enrollment trigger (e.g., "Lifecycle stage is equal to MQL")
4. Add actions: Send email, Create task, Update property, Delay, If/then branch
5. Set goal criteria (e.g., "Lifecycle stage is equal to SQL") — contacts who meet the goal are removed
6. Review suppression list and re-enrollment settings
7. Turn on workflow — it processes currently enrolled contacts and new ones going forward

### Setting up email sequences (Sales Hub Professional+)
1. Go to Automation → Sequences → Create sequence
2. Add steps: Automated email, Manual email, Task, LinkedIn task
3. Set delays between steps (e.g., 3 days)
4. Set send windows (e.g., weekdays 8am-6pm in contact's timezone)
5. Enroll contacts manually or via workflow trigger
6. Contacts auto-unenroll when they reply, book a meeting, or reach the last step

### Lead scoring (Professional+)
1. Go to Settings → Properties → HubSpot Score
2. Set positive criteria: visited pricing page (+10), opened email (+5), requested demo (+50)
3. Set negative criteria: unsubscribed (-20), job title contains "student" (-10)
4. Score updates automatically as contacts interact
5. Use score in workflows to auto-assign lifecycle stages or notify reps
6. Enterprise tier adds predictive lead scoring powered by AI

## Deep dives

### HubSpot for Startups program
- Up to 90% off Year 1, 50% off Year 2, 25% off Year 3 (varies by partner tier)
- Eligibility: Must be associated with an approved startup partner (accelerator, VC, incubator)
- Apply at: hubspot.com/startups
- Includes all Hubs — not just CRM
- Cannot be combined with other discounts
- Must be claimed before any paid purchase — can't apply retroactively

### Migration from Salesforce
1. Map Salesforce objects/fields to HubSpot objects/properties
2. Use HubSpot's Salesforce integration for bi-directional sync (test phase)
3. Or export from Salesforce as CSV and import into HubSpot
4. Recreate Salesforce workflow rules as HubSpot workflows
5. Rebuild reports in HubSpot's reporting tool
6. Plan for 2-4 weeks of parallel operation
7. Key gotcha: Salesforce custom objects → HubSpot custom objects require Enterprise tier

### Migration from spreadsheets
1. Clean and deduplicate spreadsheet data first
2. Map columns to HubSpot contact/company/deal properties
3. Create custom properties in HubSpot for non-standard fields
4. Import CSV: Contacts → Companies → Deals (in that order to preserve associations)
5. Connect email (Gmail/Outlook) for automatic activity logging
6. Build a simple pipeline matching your current deal stages
7. Keep spreadsheet read-only for 2 weeks as fallback

### CRM-to-marketing handoff
1. Define lifecycle stages: When does a contact become an MQL? SQL?
2. Build a workflow: When lead score exceeds threshold → update lifecycle stage to MQL → notify sales rep
3. Sales rep qualifies → marks as SQL → deal created → pipeline takes over
4. Closed-lost deals → re-enroll in nurture sequence (with delay)
5. Closed-won deals → update lifecycle to Customer → trigger onboarding workflow
