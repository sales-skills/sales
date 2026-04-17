# Sembly Platform Reference

## Platform overview

Sembly AI is an "agentic augmentation platform" for professional services — goes beyond passive note-taking with AI that auto-generates client deliverables (sales proposals, project briefs, pitch decks, investment memos), auto-detects tasks with owners and deadlines, and supports multi-meeting AI chat via the Semblian assistant. Targets professional services firms, consulting, legal, HR, VC funds, and client-facing teams. SOC 2 Type II, Microsoft 365 certified, GDPR compliant, HIPAA available on MAX+. US and EU data residency options. 2M+ business interactions captured, 10K+ professional teams. Gartner "Emerging Visionary" recognition.

## Key modules

### Recording & Transcription
- Automatic recording via calendar integration (Google Calendar, Outlook)
- Supports Zoom, Google Meet, Microsoft Teams, Webex
- In-person microphone recording (mobile app or desktop)
- 48-language transcription with speaker identification
- Custom vocabulary for transcription accuracy (Pro+)
- Media upload: up to 5 hours on Basic

### AI Meeting Notes & Summaries
- AI-generated summaries with key decisions, risk items, highlights
- Automatic task detection with assignee and deadline extraction
- Templates and Collections for structured data grouping
- Customizable output templates

### Semblian AI Assistant
- Single-meeting AI chat (Basic)
- Multi-meeting AI chat (Pro+) — query across meeting history
- AI-generated client deliverables: proposals, project briefs, pitch decks, client reports, investment memos, consulting documents
- AI Insights for pattern recognition across meetings
- Credit-based: Pro gets 5 AI documents + 5 AI insights/mo, MAX gets 40 each

### Conversation Analytics (Pro+)
- Sentiment analysis per speaker
- Engagement tracking
- Talk-time metrics
- Topic pattern recognition across meetings
- Analytics dashboard

### MCP Access (Pro+)
- Connects Sembly data to Claude, ChatGPT, Cursor, and other MCP-compatible tools
- Query meetings and generate insights via AI workflows

### Consent Tracking (Pro+)
- Recording consent management for compliance

## Pricing and limits

*Best-effort as of March 2026 — verify on sembly.ai/pricing*

| Feature | Basic ($17/mo · $10 annual) | Pro ($29/mo · $20 annual) | MAX ($39/mo · $30 annual) | Enterprise |
|---|---|---|---|---|
| Users per workspace | 1 | Up to 40 | 3-500 | Custom |
| Meetings | Unlimited | Unlimited | Unlimited | Unlimited |
| AI documents/month | — | 5 | 40 | Custom |
| AI insights/month | — | 5 | 40 | Custom |
| Semblian AI chat | Single-meeting | Multi-meeting | Multi-meeting | Multi-meeting |
| MCP access | No | Yes | Yes | Yes |
| Video recording | Unlimited (limited) | Unlimited | Unlimited HD | Unlimited HD |
| Media upload | 5 hours | Unlimited | Unlimited | Unlimited |
| Agent customization | Limited | Full | Full | Full |
| Automations | Limited (personal) | Workspace-wide | Workspace-wide | Custom |
| Meeting history | 1 year | 2 years | Unlimited | Unlimited |
| Analytics dashboard | No | Yes | Yes | Yes |
| Custom vocabulary | No | Yes | Yes | Yes |
| Advanced search | No | Yes | Yes | Yes |
| Collections | No | Yes | Yes | Yes |
| Consent tracking | No | Yes | Yes | Yes |
| Retention settings | No | Yes | Yes | Yes |
| Audit log | No | No | Yes | Yes |
| Custom SSO | No | No | Yes | Yes |
| Custom SMTP relay | No | No | Yes | Yes |
| Sharing groups | No | No | Yes | Yes |
| HIPAA compliance | No | No | Yes | Yes |
| Data residency (US/EU) | No | No | Yes | Yes |

Annual billing saves 30% on all plans.

## Integrations

### Native CRM (10 connectors)
Salesforce, HubSpot, Zoho CRM, Copper, Pipedrive, Freshsales, Attio, Capsule CRM, Close CRM, TeamLeader

- HubSpot: native (no third-party app needed). Summarizes meetings, creates notes as Meeting Activities under corresponding contact/company. Configured in Sembly account settings.
- Salesforce: native integration, similar pattern.
- Others: direct push of meeting notes to CRM contacts based on participant emails.

### Project Management (13)
Monday.com, Notion, Airtable, Asana, Jira, Trello, Wrike, ClickUp, Basecamp, Clockify, Linear, MeisterTask, Teamwork

### Collaboration (3)
Slack, Microsoft Teams, Confluence

### Personal Productivity (4)
Google Tasks, Microsoft To Do, Todoist, Everhour

### Document Management (4)
Google Drive, Dropbox, Microsoft OneDrive, Microsoft SharePoint

### Analytics (1)
Google Sheets

### Automation platforms
- **Zapier** (official): Triggers — New Meeting Notes, New Tasks, New Transcription. Connect to thousands of apps.
- **n8n** (official): Sembly AI node available.

### Custom integrations (webhook-first)
- Outbound Automations via HTTPS POST to configurable endpoint
- Configure in My Automations → Custom tab → New Automation
- Data types: Transcription, Meeting Notes, Tasks
- Filtering: by team, keywords, conversation types, or sync all
- Transcripts organized by speaker, timestamp, and metadata (team, meeting title, organizer)

### Video conferencing
Zoom, Google Meet, Microsoft Teams, Webex

## Automation setup

### Webhook (custom integration)
1. Go to My Automations page in Sembly account
2. Open Custom tab, click New Automation
3. Select data type (Transcription, Meeting Notes, or Tasks)
4. Configure filters (by team, keywords, conversation type) and destination URL
5. Sembly automatically pushes data via HTTPS POST

### Zapier
1. Search for "Sembly AI" in Zapier
2. Available triggers: New Meeting Notes, New Tasks, New Transcription
3. Connect to any of 8,000+ Zapier-supported apps
4. Popular workflows: meeting notes → Slack channel, tasks → Asana/Jira, transcripts → Google Sheets

### n8n
1. Add Sembly AI node (official integration)
2. Configure authentication and triggers
3. Build workflow with downstream nodes

## Security & compliance

- SOC 2 Type II certified
- Microsoft 365 certified partner
- GDPR compliant
- HIPAA compliant (MAX plan and above)
- US and EU data residency options (MAX+)
- No training data usage for Enterprise customers
- Custom SSO and SMTP relay (MAX+)
- Audit log (MAX+)

## Known issues (from G2/Capterra/review analysis, 2026-04)

- **Long meeting fragmentation**: Meetings >3 hours get split into multiple segments. No merge feature.
- **No Word/DOCX export**: Cannot export tasks, summaries, or key items to Word format.
- **Calendar disconnection**: Bot misses meetings when calendar integration silently disconnects.
- **Speaker recognition**: Accuracy drops with 5+ participants or noisy environments.
- **AI credit consumption**: Semblian chat and document generation consume limited monthly credits (5 on Pro, 40 on MAX).
- **Search limitations**: Finding specific meetings or content across history can be frustrating.
- **App crashes**: Occasional reports of the app shutting down mid-meeting, causing recording loss.
- **No inbound API**: No REST/GraphQL API for querying meetings programmatically — outbound webhooks only.
