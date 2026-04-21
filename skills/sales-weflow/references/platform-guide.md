# Weflow Platform Reference

## Platform overview

Weflow (getweflow.com) is a Salesforce-native Revenue AI platform that combines activity capture, conversation intelligence, and deal intelligence/forecasting into a single tool. Positioned as "Gong with better AI at 50% the price" for mid-market Salesforce teams. Founded by the Salesforce ecosystem team, backed by Cherry Ventures and Gradient Ventures. SOC 2 Type II, GDPR, CCPA, HIPAA compliant with zero AI data retention.

**Target audience**: Mid-market B2B sales teams (10-100+ reps) on Salesforce who struggle with CRM data quality, manual activity logging, and forecast accuracy.

## Key modules

### Activity & Contact Capture ($19/user/mo)

Auto-syncs emails, meetings, and contacts from Google Workspace or Microsoft 365 into native Salesforce objects (EmailMessage, Task, Event, Contact). Server-side — no browser extension or user action required.

- **Historical backfill**: Up to 24 months of past email and meeting data synced to Salesforce on activation
- **Contact auto-creation**: New contacts from emails/meetings automatically created in Salesforce if they don't exist
- **Native Salesforce objects**: Data lives in standard Salesforce objects, not custom — works with existing reports, dashboards, and automations
- **Managed Salesforce package**: Optional install that reduces API call consumption by running sync operations inside the org

### Conversation Intelligence ($39/user/mo)

AI notetaker that joins Zoom, Teams, and Google Meet calls. Records, transcribes (96+ languages), generates summaries, follow-up emails, and auto-fills CRM fields.

- **250+ pre-built AI prompts**: Ready-made prompts for MEDDIC extraction, action items, competitor mentions, next steps, etc.
- **Custom AI prompts**: Create prompts tailored to your methodology or use case
- **Auto-fill CRM fields**: AI extracts data from calls and writes it to Salesforce opportunity fields — MEDDIC, BANT, custom frameworks
- **Follow-up email drafting**: AI generates personalized follow-up emails from call content
- **96+ language transcription**: Multilingual support for global teams
- **Coaching insights**: Talk-to-listen ratio, key topics, objection moments

### Deal Intelligence & Forecasting ($39/user/mo)

Pipeline management, deal health scoring, and automated forecast roll-ups with AI predictions.

- **50+ AI deal health signals**: Automatically generated from activity data, call content, and CRM fields
- **Pipeline views**: Customizable deal boards with filters, sorting, and bulk actions
- **Forecast roll-ups**: Automated aggregation by team, segment, or custom hierarchy. Combines bottom-up, weighted, and AI forecasting methods
- **AI prediction**: ML-based win probability and close date prediction based on historical patterns
- **Real-time Salesforce sync**: Forecast data lives in Salesforce — no separate system of record

### Ask Weflow AI

Natural language queries across all Salesforce data, calls, and deals. Ask questions like "Which deals mentioned budget concerns this quarter?" or "What did [prospect] say about our pricing?"

### AI Workflow Builder & Agents

Automate non-selling workflows — generate strategic insights, trigger actions based on deal signals, orchestrate multi-step processes.

### Mobile Copilot

Record in-person meetings from your phone. AI transcribes and auto-updates Salesforce from conversation data. Useful for field sales, client dinners, or on-site meetings.

### Chrome Extension

Update Salesforce from anywhere — Gmail, Google Calendar, Outlook, or any web page. Inline editing of Salesforce fields without switching tabs.

## Pricing and limits

All prices billed annually, per user/month:

| Plan | Price | Includes |
|------|-------|----------|
| **Free** | $0/user/mo | 100 Salesforce updates, basic pipeline views, inline editing, bi-directional Salesforce integration |
| **Activity & Contact Capture** | $19/user/mo | Email, meeting, contact auto-sync to Salesforce, 24-month backfill |
| **Conversation Intelligence** | $39/user/mo | AI notetaker, transcription (96+ languages), summaries, CRM auto-fill, 250+ prompts |
| **Deal Intelligence & Forecasting** | $39/user/mo | Pipeline management, 50+ AI health signals, forecast roll-ups, AI prediction |
| **Bundle: Activity + Conversation** | $49/user/mo | 16% savings vs separate |
| **Bundle: Full Revenue AI Platform** | $79/user/mo | 19% savings, all three modules |

**Volume discounts**: 5% off at 20-39 users. 40+ users: contact sales.
**Multi-year discounts**: 10% (2-year), 20% (3-year).
**Minimum**: 10 users for bundles.
**Trial**: 14 days free, no credit card required.

## Integrations

- **CRM**: Salesforce only (bi-directional, real-time, native objects)
- **Email**: Google Workspace, Microsoft 365
- **Calendar**: Google Calendar, Microsoft Outlook/Entra ID
- **Video**: Zoom, Microsoft Teams, Google Meet
- **Browser**: Chrome Extension
- **Managed Salesforce Package**: Reduces API call load, runs operations inside the Salesforce org
- **NOT supported**: Slack (no native integration), HubSpot, Pipedrive, Dynamics, VoIP phone, SMS

## API

No public REST API. Weflow does not expose endpoints for third-party developers. All data flows through:
1. The Weflow UI
2. Native Salesforce sync (data lands in standard Salesforce objects, queryable via SOQL/Salesforce API)
3. Chrome Extension

**Salesforce API consumption**: Weflow makes API calls against your Salesforce org's API limits. Monitor at Setup → Company Information → API Requests, Last 24 Hours. The managed package reduces consumption.

## Workflow setup

### Setting up Activity Capture

1. Connect Google Workspace or Microsoft 365 account in Weflow settings
2. Select which email domains and calendar events to sync
3. Choose sync direction (one-way to Salesforce or bi-directional)
4. Optionally enable 24-month historical backfill
5. Install managed Salesforce package (recommended to reduce API consumption)
6. Verify data appears on Salesforce records (EmailMessage, Task, Event objects)

### Setting up Conversation Intelligence

1. Connect Zoom, Teams, or Google Meet account
2. Configure which meetings the AI notetaker should join (all, only calendar events with external attendees, manual trigger)
3. Set up CRM auto-fill rules — map AI-extracted data to Salesforce fields
4. Choose or customize AI prompts for summaries, action items, methodology extraction
5. Configure notification preferences (Slack not supported natively — use Salesforce workflow rules for notifications)

### Setting up Forecasting

1. Define forecast categories (Commit, Best Case, Pipeline, Upside, Omitted)
2. Map Salesforce opportunity stages to forecast categories
3. Configure team hierarchy for roll-up aggregation
4. Enable AI prediction (requires historical closed-won data for training)
5. Set up forecast submission workflows (rep → manager → VP)

## Deep dives

### Weflow vs Gong

| Dimension | Weflow | Gong |
|---|---|---|
| **Price** | $79/user/mo (full bundle) | ~$100-133/user/mo |
| **CRM** | Salesforce only | Salesforce, HubSpot, Dynamics |
| **Activity capture** | Built-in ($19/user/mo) | Requires Gong Engage (separate) |
| **Forecasting** | Built-in ($39/user/mo) | Gong Forecast (separate) |
| **VoIP/SMS** | Not supported | Supported (call recording) |
| **Analytics depth** | Strong but newer | Deepest ecosystem, Smart Trackers |
| **Language support** | 96+ languages | 70+ languages |
| **Deployment** | Self-serve, 14-day trial | Sales-led, annual contracts |
| **Security** | SOC 2 II, GDPR, HIPAA, zero AI retention | SOC 2 II, GDPR |

**Pick Weflow when**: Salesforce-only team wanting activity capture + CI + forecasting in one tool at ~50% of Gong pricing. Bundle economics favor Weflow when you need all three modules.

**Pick Gong when**: Multi-CRM environment, need VoIP recording, want the deepest conversation analytics ecosystem, or need the largest ecosystem of integrations and certified partners.

### Weflow vs Clari

| Dimension | Weflow | Clari |
|---|---|---|
| **Price** | $39/user/mo (forecasting) | Enterprise pricing (~$50-100+/user/mo) |
| **Focus** | Full-stack revenue AI (capture + CI + forecast) | Forecasting + pipeline analytics |
| **Activity capture** | Built-in | Separate (Clari Capture, formerly Groove) |
| **CI** | Built-in | Via Clari Copilot (formerly Wingman) |
| **Scale** | Mid-market (10-100 reps) | Mid-market to enterprise (1000+ reps) |
| **Deployment** | Self-serve, 14-day trial | Implementation required |

**Pick Weflow when**: Mid-market Salesforce team wanting full-stack in one tool. Weflow bundles what Clari requires 3 separate products for (Clari + Clari Capture + Clari Copilot).

**Pick Clari when**: Enterprise scale (1,000+ reps), complex forecast hierarchies, or need the deepest standalone forecasting product.

### Weflow vs Scratchpad

| Dimension | Weflow | Scratchpad |
|---|---|---|
| **Price** | $19-79/user/mo | Free → $29-79/user/mo |
| **Activity capture** | Server-side auto-sync | Manual (via Salesforce sidebar) |
| **CI** | Built-in AI notetaker | AI via credits (limited) |
| **Forecasting** | Full module with AI prediction | Available but lighter |
| **CRM editing** | Chrome extension + mobile | Salesforce sidebar + Chrome extension |

**Pick Weflow when**: You want server-side auto-capture (zero behavior change) and full CI with call recording. Weflow's activity capture is automatic; Scratchpad still relies on reps doing some manual work.

**Pick Scratchpad when**: Budget is primary concern, team prefers a lightweight Salesforce sidebar approach, or you don't need call recording/transcription.

### Salesforce API limit management

Weflow's activity capture makes REST API calls against your org's daily allocation:

| Salesforce Edition | API calls/24hr (base) |
|---|---|
| Professional | 100,000 |
| Enterprise | 100,000 |
| Unlimited | 500,000 |

Additional allocation: +1,000 per Salesforce license, +200 per Salesforce platform license.

**Reducing Weflow's API footprint:**
1. Install the managed Salesforce package (recommended — runs operations inside the org)
2. Limit sync to relevant email domains (exclude personal email, marketing newsletters)
3. Stagger initial backfill across teams rather than enabling all at once
4. Monitor at Setup → Company Information → API Requests, Last 24 Hours
