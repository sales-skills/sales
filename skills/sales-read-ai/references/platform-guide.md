# Read.ai Platform Reference

## Platform overview

Read.ai is an AI-powered meeting intelligence platform that records, transcribes, and summarizes meetings across Zoom, Google Meet, Microsoft Teams, and Webex. Its key differentiator is engagement and sentiment analytics — attention heatmaps, speaker talk ratios, and meeting quality scores layered on top of transcription. Also offers Search Copilot (unified search across meetings, emails, chats, CRMs) and "Ada" (a personal AI digital twin assistant reachable via email at ada@read.ai). SOC 2 Type 2, GDPR, HIPAA (Enterprise+) compliant. 20+ language transcription. Desktop (Win/Mac), mobile (iOS/Android), Chrome Extension.

Founded by David Shim (former Foursquare CEO). Positioning: analytics-first meeting AI, not just transcription.

## Key modules

### Meeting Intelligence
- Auto-join via calendar integration (Google Calendar, Outlook 365, Zoom Calendar)
- Real-time transcription during meetings
- AI-generated summaries with chapter breakdown
- Action items and key questions extraction
- Speaker insights and engagement metrics (talk time, attention, sentiment)
- Topic readouts — recurring theme tracking across meetings

### Search Copilot
- Unified AI search across meetings, emails (Gmail/Outlook), messaging (Slack/Teams), CRMs, and connected documents (Google Drive, OneDrive)
- Source citations in search results
- Available on all plans (including Free)

### Ada Digital Twin
- Personal AI assistant that learns your patterns
- Reachable via email (ada@read.ai)
- Handles scheduling queries and knowledge retrieval
- Accesses your meeting history and connected accounts

### Speaker Coach
- Real-time meeting feedback on engagement, pace, filler words
- Personalized coaching recommendations
- Meeting quality scoring

### In-Person Meeting Capture
- Record and transcribe in-person meetings via mobile app
- Same AI processing pipeline as virtual meetings

## Pricing and limits

Best-effort as of 2026-04 — verify at https://www.read.ai/plans-pricing.

| Plan | Monthly | Annual | Meeting limit | Max length | Upload credits | Key gates |
|---|---|---|---|---|---|---|
| Free | $0 | $0 | 5/month | 1 hour | — | Basic integrations only, Search Copilot, Topic Readouts |
| Pro | $19.75/user | $15/user | Unlimited | 4 hours | 100/mo | Premium integrations (Salesforce, HubSpot, Zapier, webhooks), priority report processing |
| Enterprise | $29.75/user | $22.50/user | Unlimited | 4 hours | 200/mo | Audio + video playback, video highlights, premium support |
| Enterprise+ | $39.75/user | $29.75/user | Unlimited | 8 hours | 300/mo | HIPAA, SSO/SAML, domain capture, custom data retention, workspace onboarding. 10+ seat minimum |

**Volume discounts** (annual licenses): 10% off 100+, 15% off 500+, 20% off 1,000+.

**Education pricing**: $5/month with .edu email verification.

**Key plan gates to know:**
- **Webhooks, Zapier, Salesforce, HubSpot** → Pro+ only
- **Video playback + highlights** → Enterprise+ only
- **HIPAA, SSO/SAML** → Enterprise+ only
- **Search Copilot** → All plans (including Free)

## Integrations

### Video conferencing (all plans)
- Zoom, Google Meet, Microsoft Teams, Webex

### CRM (Pro+)
- **Salesforce**: Sync contact and meeting note data
- **HubSpot**: Sync contact and meeting note data

### Collaboration (Pro+)
- **Notion**: Push meeting reports
- **Confluence**: Push meeting reports
- **Asana**: Push action items with assignee, due date, meeting context
- **Jira**: Push action items
- **Linear**: Push action items

### Messaging (Pro+)
- **Slack**: Share and receive meeting summaries
- **Microsoft Teams**: Share and receive meeting summaries (chat)

### Notetaking (all plans)
- **Google Docs**: Live meeting notes + transcription
- **Microsoft OneNote**: Live meeting notes + transcription

### Email/messaging sync (all plans)
- **Gmail**: Topic summary reports for inbox
- **Outlook**: Topic summary reports for inbox
- **Slack Sync**: Topic summary reports for messages/channels
- **Teams Sync**: Topic summary reports for messages/channels

### Document search (Search Copilot)
- **Google Drive**: Search across documents, spreadsheets, slides
- **Microsoft OneDrive**: Search across documents, spreadsheets, slides

### Workflow automation (Pro+)
- **Zapier**: Push meeting data into 8,000+ apps
- **Webhooks**: Custom automated workflows with meeting report data

### Calendar (all plans)
- Google Calendar, Outlook 365, Zoom Calendar — auto-join scheduling

### Desktop & mobile
- Windows, macOS, Android, iPhone, Chrome Extension

## API (Open Beta)

**REST API**
- Base URL: `https://api.read.ai/`
- Status: Open beta — GA planned with additional endpoints, static API keys, refresh token improvements
- Auth: OAuth 2.0 (username/password at launch, full OAuth coming)
- Capabilities: List sessions, retrieve transcripts by session
- Planned: Additional endpoints, tools, webhook/event support, expanded documentation

**MCP Server**
- URL: `https://api.read.ai/mcp/`
- Transport: Streamable HTTP
- Auth: OAuth (authenticate once, secure access without exposing keys)
- Compatible clients: Claude Code, Claude Desktop, Cursor, VS Code, ChatGPT
- Available tools: List sessions, retrieve transcripts, retrieve summaries
- Planned: Action items, engagement metrics, additional data types

**MCP setup** (Claude Code example):
1. Point MCP client at `https://api.read.ai/mcp/`
2. Authenticate with Read.ai credentials (OAuth flow)
3. Query meeting data: "What did we decide about the timeline in yesterday's meeting?"

The MCP server operates as a full FastAPI server — both protocol-based (MCP) and REST-based access work.

## Webhooks

- **Setup**: Read dashboard → Integrations → Webhooks
- **Plan requirement**: Pro+ (premium integration)
- **Trigger events**: `meeting_end`, `manual`
- **Delivery**: HTTP POST with raw JSON body
- **Security**: HMAC cryptographic signature in `X-Read-Signature` header. Use the signing key from your webhook configuration to verify authenticity.

**Payload fields:**
- `session_id` — unique meeting identifier
- `trigger` — event type (`meeting_end` or `manual`)
- `chapter_summaries` — detailed summaries broken into sequential chapters with associated topics
- `transcript` — full meeting transcript with speaker names and timestamps (Unix milliseconds)

**Webhook data types available:**
- Meeting summary
- Chapters
- Topics
- Action items
- Key questions

## Workflow setup

### Setting up webhook-to-CRM pipeline
1. Go to Read dashboard → Integrations → Webhooks
2. Create webhook with your endpoint URL
3. Copy the signing key for HMAC verification
4. On your server: validate `X-Read-Signature`, parse `session_id` + transcript + chapter summaries
5. Map to CRM fields: meeting date, participants, summary, action items → Salesforce Activity / HubSpot Engagement

### Setting up MCP for AI workflows
1. In Claude Code / Cursor config, add MCP server: `https://api.read.ai/mcp/`
2. Complete OAuth authentication when prompted
3. Query your meetings in natural language
4. Use for: sprint planning follow-up, meeting recap generation, cross-meeting trend analysis

### Setting up Zapier automation
1. Confirm Pro+ plan
2. In Zapier: add Read AI trigger (meeting report ready)
3. Map fields: summary, action items, key questions, transcript
4. Connect to any of Zapier's 8,000+ apps (e.g., Google Docs, Salesforce, Slack, Notion)

## Deep dives

### Engagement analytics
Read.ai's engagement scoring tracks:
- **Attention**: Who was focused vs multitasking (based on window focus, eye tracking where available)
- **Talk time**: Speaker distribution and balance
- **Sentiment**: Positive/negative/neutral tone detection per speaker
- **Meeting quality score**: Composite metric across all engagement signals
- **Trends**: Track engagement patterns across meetings over time

**Caveat**: Sentiment analysis has been criticized for cultural insensitivity — it may misread communication styles across different cultures. Don't use for performance evaluations without manual review.

### Search Copilot configuration
- Connects to meetings, Gmail, Outlook, Slack, Teams, Google Drive, OneDrive, CRMs
- Unified search with AI-powered results and source citations
- Available on all plans including Free
- Enterprise+ adds custom data retention policies

### Privacy and compliance
- SOC 2 Type 2, GDPR compliant
- HIPAA available on Enterprise+ ($39.75/mo)
- SSO/SAML on Enterprise+
- Domain capture on Enterprise+ (org-wide admin control)
- Custom data retention policies on Enterprise+
- **Known concern**: Read.ai's auto-join behavior has prompted institutional bans. Configure carefully in regulated/sensitive environments.
