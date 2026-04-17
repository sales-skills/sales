# Claap Platform Reference

## Platform overview

Claap is an AI-powered sales call and pipeline assistant that captures, transcribes, and enriches sales conversations. Part of the lemlist ecosystem. Positioned as a no-bot alternative to Gong, targeting mid-market B2B sales teams who want CRM auto-enrichment and AI coaching without enterprise pricing. 10,000+ users including Qonto, Brevo, Revolut, PayFit.

## Key modules

### Recording
- **No-bot recorder**: Chrome extension captures system audio without a visible bot joining the call. Supports Zoom, Google Meet, Microsoft Teams.
- **Bot recorder**: Traditional bot joins the meeting. Fallback if Chrome extension is unreliable.
- **Mobile app**: Record in-person meetings and phone calls.
- **Desktop app**: Screen recording with webcam overlay.
- **Audio/video upload**: Import existing recordings (mov, mp4, wav, etc.). Upload limits: 3/mo on Free, 10/mo on Pro, 50/mo on Business.
- **Language support**: 99+ languages for transcription.

### CRM Auto-Enrichment (Business+)
- Native integrations: HubSpot, Salesforce, Attio, Pipedrive, custom CRMs.
- Automatically updates CRM fields (including custom properties) based on call content.
- Maps extracted data: pain points, next steps, budget, timeline, decision makers.
- Works with standard and custom CRM fields.

### AI Agents
- **AI Agent**: Generates summaries, drafts follow-up emails, automates admin tasks after calls.
- **AI Analyst**: Deal qualification scoring, win/loss analysis, objection tracking, competitor mention tracking.
- **AI Coach**: Scorecard-based call reviews at scale, skill gap identification, best-practice library, performance visibility for managers.
- Deal scoring against methodologies: SPICED, MEDDIC, BANT.

### Async Video (Video Wiki)
- Video recording with annotations and comments.
- Collaborative workspace for sharing call highlights.
- Thread-based comments on specific video moments.

### MCP Connector
- Model Context Protocol integration for external AI tools (Claude, ChatGPT, lemlist).
- Allows querying Claap data from AI assistants.

## Pricing and limits

*Best-effort as of 2026-04 — verify on claap.io/pricing.*

| Feature | Basic (Free) | Pro ($24/user/mo) | Business ($48/user/mo) | Enterprise (custom) |
|---|---|---|---|---|
| Recording minutes | 300 total | 1,000/mo | Unlimited | Unlimited |
| Videos | 10/user | Unlimited | Unlimited | Unlimited |
| Uploads | 3 | 10/mo | 50/mo | Unlimited |
| Storage | 3 months | 2 years | 3 years | Custom |
| AI summaries | Basic | Advanced | Advanced | Advanced |
| CRM auto-enrichment | No | No | Yes | Yes |
| Deal insights | No | No | Yes | Yes |
| Coaching scorecards | No | No | Yes | Yes |
| AI-generated emails | No | No | Yes | Yes |
| API access | No (401) | Yes | Yes | Yes |
| SSO/SCIM | No | No | No | Yes |
| White-glove onboarding | No | No | No | Yes |

Annual billing saves 20%. Monthly prices: Pro $30, Business $60.

**Key gates**: CRM auto-enrichment, deal insights, and coaching are all Business-only. API access requires at least Pro or an active trial (Free plan returns 401). Enterprise adds SSO, SCIM, unlimited Basic licenses for non-power users, and migration support.

## Integrations

### CRM
- HubSpot — bi-directional sync, custom field mapping, deal timeline
- Salesforce — record sync, field auto-update
- Pipedrive — call notes and conversation sync
- Attio — call notes and conversation sync

### Video Conferencing
- Zoom (bot + bot-free)
- Google Meet (bot + bot-free)
- Microsoft Teams (bot + bot-free)

### Communication / VoIP
- Slack — push AI summaries to channels, video playback in Slack
- lemlist — outbound call insights for sales coaching
- Ringover — phone call capture and coaching
- Aircall — phone call capture and coaching
- Allo — phone call capture

### Project Management
- Notion — push AI summaries to databases, embed videos
- Linear — create/link issues, embed videos
- Asana — embed videos in tasks
- Jira — embed videos in issues
- Confluence — embed videos in pages
- Trello — embed videos in cards
- GitLab — embed videos in issues
- GitHub — embed videos, start recording from GitHub

### Calendar
- Google Calendar — auto-recording triggers
- Outlook Calendar — auto-recording triggers

### Automation
- Zapier — workflow automation
- Gravite — call analysis

## Data model (API)

Base URL: `https://api.claap.io/`

### Core objects

**Recording** (`ApiRecording`):
- `id` — unique identifier
- `title` — recording title
- `createdAt` — ISO 8601 timestamp
- `state` — processing state
- Meeting details (platform, participants)
- Transcript with translations
- Video URL + thumbnail URL (expire in 24 hours)
- Action items
- Insights (extracted data points)
- CRM integration data

**Workspace**:
- Workspace-level settings and configuration
- API keys scoped to workspace

**Webhook events**:
- `recording_added` — fires when recording is transcribed and analyzed
- Payload includes: recording metadata, outline, insights, resource links

### Auth
- API key in `X-Claap-Key` header
- Key format: `cla_xxxxx`
- Keys created in Settings → API & Webhooks (admin/owner only)
- Keys only active on paid plans or trials

### Webhook verification
- `X-Claap-Webhook-Id` header (identifier)
- `X-Claap-Webhook-Secret` header (verification)
- Must respond with HTTP 200 within 5 seconds
- Retry: immediately, 1 min, 5 min, then abandoned

## Workflow setup

### 1. Basic recording setup
1. Install Chrome extension or configure bot recorder
2. Connect Google Calendar or Outlook Calendar
3. Set auto-recording rules (by calendar, by meeting type)
4. Test with a short call — verify transcript appears in dashboard

### 2. CRM auto-enrichment (Business+)
1. Go to Settings → Integrations → connect your CRM
2. Map CRM fields to Claap extraction fields (pain points, next steps, budget, etc.)
3. Configure which call types trigger enrichment
4. Run a test call and verify the CRM record updates
5. Enable for the team once validated

### 3. API/webhook integration
1. Go to Settings → API & Webhooks (requires admin/owner role)
2. Create API key — save immediately, it's shown only once
3. For webhooks: set endpoint URL, select events (`recording_added`)
4. Test with a sample recording
5. Handle 24-hour URL expiration — fetch and store transcripts immediately on webhook receipt

## Deep dives

### Claap vs Gong
- Claap: ~$48/user/mo (Business), no-bot option, part of lemlist ecosystem, smaller feature set
- Gong: ~$1,200-1,600/user/yr, deeper analytics, larger enterprise install base, no bot-free option
- Pick Claap if: mid-market budget, want lemlist integration, prefer bot-free recording
- Pick Gong if: enterprise, need deep revenue intelligence, have the budget

### Claap vs Fathom
- Claap: Better CRM enrichment (Business), deal scoring, async video wiki
- Fathom: More generous free tier (unlimited), lower paid price ($16-25/mo), more mature API
- Pick Claap if: CRM auto-enrichment is the priority, already use lemlist
- Pick Fathom if: budget-conscious, need a generous free tier, want simpler tool

### Privacy considerations
- Bot-free recording captures audio without a visible bot indicator
- Claap sends notifications to participants, but some users report this causes people to disconnect
- Check local two-party consent laws (California, EU, etc.)
- Bot recorder is more transparent — participants see the bot join
- Enterprise plan adds customizable consent workflows
