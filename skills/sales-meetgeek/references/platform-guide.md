# MeetGeek Platform Reference

## Platform overview

MeetGeek is an AI meeting assistant that automatically records, transcribes, and summarizes meetings across Zoom, Google Meet, Microsoft Teams, Webex, and Discord. Differentiators: customizable AI summary templates by meeting type, conversation analytics dashboard with 100+ KPIs, voice agents (Business+), and both bot and no-bot recording options. 50K+ teams, 4.7★ (1,000+ reviews), SOC 2 / HIPAA / GDPR / CCPA compliant.

## Recording modes

### Bot recording (default)
MeetGeek's bot ("MeetGeek Notetaker") joins the video meeting as a participant. Visible in the participant list. Sends a recording disclaimer in meeting chat. Waits up to 10 minutes for a non-bot participant before starting. Available on all plans.

### No-bot recording
- **Chrome extension**: Captures audio from the browser tab without joining as a participant. No bot visible to other attendees.
- **Desktop app** (coming soon): System-level audio capture.
- Both options: no automated disclosure to external participants — consider compliance implications.

### Mobile recording
iOS/Android apps capture in-person conversations (offline recording). Useful for field sales, on-site meetings, and events.

## Key modules

### AI Meeting Notes
- Context-aware summaries with customizable templates
- Auto-detects meeting type: sales call, onboarding, interview, standup, etc.
- Templates structure the AI output per meeting type
- Next steps / action item extraction
- Topics timeline — visual overview of discussion flow

### Copilot Mode (Pro+)
Real-time assistance during meetings. Requires Pro plan or above.

### Conversation Intelligence (all plans)
- 100+ KPIs: talk ratios, engagement, sentiment
- Speaker distribution analysis
- Meeting analytics dashboard
- Personal analytics (Pro+), team analytics (Business+)
- Engagement metrics and sentiment analysis

### Voice Agents (Business+)
AI-powered outbound calling capability. Business plan or above.

### AI Chat (all plans)
Interactive Q&A with your meeting data. Ask questions across your meeting library.

### Clips & Reels (all plans)
Create shareable video/audio clips from meeting recordings. Share moments to Slack, docs, or external stakeholders.

### Collaboration
- Folders and tags for organizing meetings
- Global search across all transcripts
- Team spaces (Business+) — shared meeting libraries
- Auto-sharing to teams (Business+)
- Comments on transcripts (Business+)
- Private by default (Business+)

## Pricing and limits

| Feature | Basic (Free) | Pro ($9.99/mo) | Business ($17/mo) | Enterprise (custom) |
|---|---|---|---|---|
| Monthly transcription | 3 hours | 20 hours | Unlimited | Unlimited |
| Recording limit/meeting | 2 hours | 2 hours | 3 hours | 4 hours |
| Transcript storage | 3 months | 1 year | Unlimited | Unlimited |
| Audio storage | 1 month | 6 months | 12 months | Custom |
| Video storage | — | — | 12 months | Custom |
| Video recording quality | Standard | Standard | HD | HD |
| Download transcripts | — | ✓ | ✓ | ✓ |
| Copilot mode | — | ✓ | ✓ | ✓ |
| Summary customization | — | ✓ | ✓ | ✓ |
| Meeting templates | — | ✓ | ✓ | ✓ |
| Voice agents | — | — | ✓ | ✓ |
| AI agents & workflows | — | Unlimited | Unlimited | Unlimited |
| Zapier/Make/n8n | — | ✓ | ✓ | ✓ |
| Unlimited integrations | — | ✓ | ✓ | ✓ |
| Team spaces | — | — | ✓ | ✓ |
| Auto-sharing to teams | — | — | ✓ | ✓ |
| Comments on transcripts | — | — | ✓ | ✓ |
| Personal analytics | — | ✓ | ✓ | ✓ |
| Team analytics | — | — | ✓ | ✓ |
| SSO & SCIM | — | — | — | ✓ |
| On-premise storage | — | — | — | ✓ |
| Custom data retention | — | — | — | ✓ |

**Extra transcription hours**: $0.50/hour (Pro plan). Annual billing saves up to 40%. Startup/nonprofit/education: 30% discount.

## Integrations

### Video conferencing
Zoom, Google Meet, Microsoft Teams (all plans).

### CRM (7 native connectors, Pro+)
HubSpot, Salesforce, Pipedrive, Affinity, Attio, Zoho CRM, Close CRM. Syncs meeting recordings, transcripts, highlights, and tasks to CRM records.

### Project management & collaboration
Asana, Jira, Monday.com, Notion, ClickUp, Trello, Slack, Google Drive. Create tasks from meeting highlights, share summaries to channels, sync notes to docs.

### Calendars
Google Calendar, Outlook Calendar — auto-join scheduled meetings.

### Dialers
RingCentral, Aircall — transcription and insights from phone calls.

### ATS
Greenhouse — sync interview recordings and transcripts.

### Automation platforms (Pro+)
Zapier (7,000+ apps), Make (2,000+ apps), n8n (500+ apps).

### MCP Server (all plans)
Connect AI tools (Claude, Cursor) directly to your meeting data. List meetings, search transcripts, retrieve summaries via MCP protocol.

## API overview

### Authentication
Bearer token auth. Generate API key at Integrations → Public API Card.

### Regional endpoints
| Region | Base URL |
|---|---|
| Europe (default) | `https://api.meetgeek.ai` |
| Europe (explicit) | `https://api-eu.meetgeek.ai` |
| United States | `https://api-us.meetgeek.ai` |

API keys are region-specific — each region requires its own key.

### Key endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/v1/meetings` | List meetings (paginated) |
| GET | `/v1/meetings/{id}` | Get meeting details |
| DELETE | `/v1/meetings/{id}` | Delete a meeting |
| GET | `/v1/meetings/{id}/transcript` | Get transcript |
| GET | `/v1/meetings/{id}/highlights` | Get highlights |
| GET | `/v1/meetings/{id}/summary` | Get AI summary |
| POST | `/v1/meetings/{id}/download` | Get temporary download URL |
| POST | `/v1/upload` | Upload a recording |
| GET | `/v1/teams` | List teams |
| GET | `/v1/teams/{id}/meetings` | List team meetings |

### Webhooks
Subscribe to meeting analysis completion events. Configure webhook URL at Integrations → Public API Card.

### MCP Server
- Cloud MCP: connects to Claude/ChatGPT without local installation
- Local MCP: runs on your machine with your API key
- GitHub: `github.com/meetgeekai/meetgeek-mcp-server`

For full API documentation, see `references/meetgeek-api-reference.md`.

## Workflow setup

### Workflow 1: Auto-record sales calls and push to CRM
1. Connect Google/Outlook calendar → MeetGeek auto-detects scheduled meetings
2. Set meeting filters: record external meetings only (skip internals)
3. Configure a "Sales Call" summary template (next steps, objections, pricing discussed)
4. Enable native CRM connector (HubSpot/Salesforce/Pipedrive) → auto-sync transcript + summary
5. Optional: Zapier trigger on meeting completion → create follow-up task in project management tool

### Workflow 2: Team knowledge base with AI search
1. Enable auto-recording for all team meetings
2. Organize with folders and tags (by client, project, department)
3. Use global search and AI Chat to find past decisions and context
4. Share meeting libraries via team spaces (Business+)
5. Connect MCP Server to Claude/Cursor for AI-powered meeting queries

### Workflow 3: API-driven transcript pipeline
1. Generate API key at Integrations → Public API
2. Configure webhook for meeting completion events
3. On webhook fire: call `GET /v1/meetings/{id}/transcript` and `GET /v1/meetings/{id}/summary`
4. Normalize and store in your data warehouse
5. Run nightly reconcile job via `GET /v1/meetings` to catch missed webhooks
