# Attention Platform Reference

## Platform overview

Attention is an AI-native conversation intelligence and revenue orchestration platform. It records and transcribes sales calls across Zoom, Google Meet, and Microsoft Teams, then automates CRM updates, generates coaching scorecards, creates follow-up emails, and provides real-time battlecards during live calls. Target audience is mid-market to enterprise sales teams (SDRs, AEs, sales leaders, RevOps). Founded as attention.tech, now at attention.com. G2 rating: 4.9 stars (~15 reviews). Raised $14M Series A (October 2024). Key differentiators: 200+ integrations (claims more than any CI competitor), real-time battlecards during calls, no-code workflow builder, and MCP server for AI assistant integration.

Notable customers: Abridge, Preply, BambooHR, Unify, Tracksuit, Engine, Lovable.

## Key modules

### Call Recording & Transcription
- Auto-joins Zoom, Google Meet, Microsoft Teams
- 100+ language transcription
- Searchable transcript library
- Speaker identification
- Video and audio capture

### AI Coaching Scorecards
- Pre-built frameworks: MEDDIC, BANT, and custom
- Auto-generated scores after each call
- Coaching insights per rep
- Performance trending over time
- Custom criteria definition (Professional+ plan)

### CRM Auto-Update
- 1-click CRM field population post-call
- Extracts dozens of fields from call transcripts
- Maps to Salesforce and HubSpot fields
- Configurable field mappings via workspace settings
- Known to have intermittent sync bugs — check workflow run logs

### Follow-Up Automation
- AI-generated follow-up emails in <60 seconds
- Uses the prospect's actual language from the call
- Email templates with customizable structure
- Pushed directly to Gmail

### Real-Time Battlecards
- Live AI-powered objection handling during active calls
- Instant answers to prospect questions
- Contextual prompts based on conversation flow

### Ask Attention
- Natural language queries across all call data (generalized insights)
- "Ask Attention Anything" — query deal status, common objections, competitor mentions
- V2 endpoint available via API for programmatic access
- Quality improves with more indexed calls

### Agent Builder (Workflow Builder)
- No-code automation workflows
- Triggers: after call ends, on schedule, on event
- Action steps: CRM update, email send, Slack notification, webhook, and more
- Workflow run monitoring and debugging
- Available on all plans (advanced actions may be plan-gated)

### Snippets
- Create shareable clips from any conversation
- Track engagement on shared snippets
- Useful for deal reviews and coaching libraries

### Reporting & Forecasting
- Pipeline forecasting with precision analytics
- Usage reports (per user, per team)
- Connection status monitoring (calendar/email)
- Scorecard summary statistics

## Pricing and limits

Best-effort pricing from third-party reviews — Attention does not publish pricing publicly. Always verify directly.

| Plan | Price | Key features |
|---|---|---|
| Starter | ~$59/user/mo | Call recording, transcription, basic AI coaching |
| Professional | ~$149/user/mo | Advanced coaching, custom scorecards, deeper analytics |
| Enterprise | ~$399/user/mo | Fully customizable AI agents, advanced integrations, premium support |

- **Free trial**: Available (no credit card required)
- **No permanent free tier** — unlike Fathom, tl;dv, or MeetGeek
- **Annual billing**: Likely discounted but not publicly documented
- **Enterprise**: Custom pricing negotiable for large teams

**Comparison context**: Gong lists at ~$1,600/user/yr (~$133/mo) but with mandatory $5K-50K platform fees. Attention Starter ($59/mo) is positioned as more affordable. Sybill Business ($90/mo) offers similar CRM autofill at a lower price point but with fewer integrations.

## Integrations

### Video Conferencing
- Zoom (native, including Zoom Phone)
- Google Meet
- Microsoft Teams

### CRM
- Salesforce (native, 2-way sync)
- HubSpot (native, 2-way sync)
- Custom CRM connectors via API

### Communication
- Gmail (follow-up emails, email tracking)
- Outlook
- Slack (notifications, team channels)

### Dialer & Phone
- Aircall
- Dialpad
- Azure Communication Services

### Sales & Enrichment
- Apollo
- Clay
- ActiveCampaign

### Productivity
- Asana, ClickUp, Confluence
- Airtable, Baserow
- Box, Dropbox
- Cal.com, Calendly

### AI & Analytics
- Anthropic Claude (integration)
- Chorus.ai
- Flowise, Dust

### Automation
- Zapier
- Custom webhooks via Workflow Builder

### SSO / Provisioning
- SCIM (Okta, Azure AD)
- Single Sign-On (SSO)

**Total**: 200+ integrations claimed. Full list at https://www.attention.com/integrations.

## Data model (API)

Base URL: `https://api.attention.tech/v2`
Auth: Bearer token (`Authorization: Bearer YOUR_API_KEY`)
Content types: `application/json`, `application/vnd.api+json`

### Key objects

**Conversation**
- Core object — represents a recorded call
- Fields: id, title, participants, transcription, metadata, privacy status, associated opportunity
- Can import from external sources (Gong, Salesforce)
- Supports media download via presigned URLs

**Team**
- Organizational unit for grouping users
- Hierarchical — teams can have parent teams
- Members have roles within teams

**User**
- Organization member with role and team assignment
- Roles control permissions (Admin required for API key management)

**Scorecard**
- Template for scoring conversations
- Results link to specific conversations
- Summary statistics available per user/team/time period

**Snippet**
- Shareable clip from a conversation
- Tracks engagement

**Workflow**
- Automation definition with triggers and action steps
- Run logs for monitoring execution

### Key endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/conversations` | List conversations (filter by date, participants, teams, status) |
| GET | `/conversations/{id}` | Get conversation details (transcription, participants, metadata) |
| PUT | `/conversations/{id}` | Update conversation metadata |
| DELETE | `/conversations/{id}` | Archive conversation |
| POST | `/conversations/import` | Import from external source |
| POST | `/conversations/{id}/media/download` | Generate media download URL |
| POST | `/ask_attention/v2` | Query insights across conversations |
| POST | `/snippets` | Create shareable snippet |
| POST | `/createScorecardResult` | Score a conversation |
| GET | `/teams` | List teams |
| GET | `/teams/{id}/members` | List team members |
| GET | `/organizations/users` | List org users |
| POST | `/organizations/users` | Create user |
| GET | `/api_keys` | List API keys |
| POST | `/api_keys` | Create API key |
| GET | `/emails` | List emails |
| GET | `/email-templates` | List email templates |

### Rate limits
- 429 Too Many Requests when exceeded — contact account manager for increases
- 401 Unauthorized for invalid/expired keys
- Specific rate numbers not publicly documented

### SCIM provisioning
- SCIM 2.0 compliant (Okta, Azure AD)
- Endpoints: `/scim/Users`, `/scim/Groups`
- Supports create, get, list, update, patch, filter

### MCP Server
- Official MCP server for Claude, ChatGPT, and other AI assistants
- Search calls, analyze deals, review scorecards, surface coaching insights via natural language
- GitHub: https://github.com/highgravitas/attention-mcp
- Docs: https://docs.attention.com/attention-mcp-server.md

## Workflow setup

### 1. Initial setup
1. Sign up at https://app.attention.tech
2. Connect video platform (Zoom, Meet, or Teams) — Attention bot will auto-join meetings
3. Connect CRM (Salesforce or HubSpot) — authorize OAuth connection
4. Invite team members and assign roles (Admin, Manager, Rep)

### 2. CRM field mapping
1. Go to workspace settings → CRM Configuration
2. Map Attention's extracted fields to your CRM's field names
3. Choose which methodology fields to extract (MEDDIC, BANT, or custom)
4. Test with a sample call before enabling for the whole team
5. Reference: https://docs.attention.com/workspace-setup/crm-config.md

### 3. Coaching scorecard setup
1. Go to workspace settings → Scorecards
2. Choose a pre-built template (MEDDIC, BANT) or create custom
3. Define scoring criteria (e.g., "Asked about budget", "Identified decision maker")
4. Scorecards auto-apply to all new calls once created
5. Review via Attention dashboard or API (`GET /scorecards`, `POST /createScorecardResult`)
6. Reference: https://docs.attention.com/workspace-setup/create-scorecards.md

## Deep dives

### Salesforce integration
- 2-way sync: Attention pushes extracted fields to Salesforce, pulls opportunity data for context
- Field mapping: map Attention's AI-extracted data to custom Salesforce fields
- Opportunity matching: matches calls to deals by participant email
- Reference: https://docs.attention.com/workspace-setup/salesforce-integration.md

### Google Workspace integration
- Calendar sync for auto-join scheduling
- Gmail integration for follow-up emails
- Google Meet recording
- Reference: https://docs.attention.com/workspace-setup/google-integration.md

### Slack integration
- Team notifications on call completion
- Deal alerts and coaching insights pushed to channels
- Reference: https://docs.attention.com/workspace-setup/slack-setup.md

### Zoom Phone integration
- Record Zoom Phone calls (not just meetings)
- Configure recording permissions
- Reference: https://docs.attention.com/workspace-setup/zoom-phone-integration.md

### API security best practices
- Never commit API keys to version control
- Use environment variables or secret management
- Create separate keys for dev/staging/prod
- Rotate keys regularly — generate new, update apps, delete old
- Revocation is immediate and irreversible
