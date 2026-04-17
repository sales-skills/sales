# Hedy AI Platform Reference

## Platform overview

Hedy AI is a real-time AI meeting coach that provides live coaching suggestions, transcription, and summaries during conversations. Unlike passive note-takers (Fathom, Fireflies, Otter) that document meetings for later review, Hedy actively coaches during the conversation — delivering context-aware nudges, talking points, and suggestions in real time. Privacy-first architecture with on-device audio processing.

**Target audience**: Sales professionals, coaches, recruiters, international teams, healthcare professionals, students, job seekers — anyone who wants AI assistance during (not just after) conversations.

**Key differentiators**:
- Real-time coaching suggestions (not just transcription)
- Cross-session intelligence (learns from past conversations)
- On-device audio processing (audio never stored server-side)
- Apple Watch companion for in-person meeting coaching
- Cross-platform: Mac, Windows, iOS, Android, Web, Apple Watch

## Key modules

### Live AI Coaching
Real-time suggestions delivered during conversations. Coaching adapts based on:
- Session context (configurable per meeting type)
- Cross-session intelligence (learns from your history)
- Conversation dynamics (detects topic shifts, questions, objections)

Free plan: coaching limited to first 30 minutes per session.
Pro plan: unlimited coaching duration.

### Transcription
- 30+ language support
- On-device processing for audio capture
- Transcript processed transiently in cloud (not stored as audio)
- Speaker-by-speaker conversation breakdown

### Smart Summaries
- Automatic meeting minutes
- AI-generated recap
- Action item (todo) extraction with due dates
- Highlight capture with AI insights and timestamps

### Session Contexts
Reusable custom instructions that shape coaching behavior per meeting type. Create contexts like "Discovery Call", "Demo", "1:1 Coaching" to get relevant real-time suggestions.

- CRUD via API: `GET/POST/PATCH/DELETE /contexts`
- Contexts persist across sessions

### Topics
Organize sessions by topic/project/client for cross-session intelligence.

- CRUD via API: `GET/POST/PATCH/DELETE /topics`
- `GET /topics/{id}/sessions` — list sessions within a topic
- Topic insights aggregate patterns across related meetings

### Prep Notes
Pre-meeting preparation tools — review relevant past conversations and set up context before a meeting starts.

### Apple Watch Companion
Glance at real-time coaching suggestions during in-person meetings. Phone records audio, Watch displays suggestions discreetly.

### YouTube Import
Paste a YouTube URL to transcribe and analyze video content. Useful for competitive analysis, training content review, and research.

## Pricing and limits

| Feature | Free | Pro ($12.99/mo) | Lifetime ($299) |
|---|---|---|---|
| Monthly hours | 5 hrs | Unlimited | Unlimited |
| Real-time coaching | 30 min/session | Unlimited | Unlimited |
| Languages | 30+ | 30+ | 30+ |
| Audio/video import | No | Yes | Yes |
| Topics (session organization) | No | Yes | Yes |
| API access | No | Yes | Yes |
| Webhooks | No | Yes | Yes |
| MCP server | No | Yes | Yes |
| Zapier/n8n triggers | No | Yes | Yes |
| Cloud sync | Basic | Full | Full |
| Future updates | Yes | Yes | Yes |

Annual pricing: $99.99/yr (~$8.33/mo, 36% discount vs monthly).

AppSumo lifetime deal: $179 (when available).

## Integrations

### Automation platforms
- **Zapier** — pre-built templates, 7,000+ app connections. Triggers powered by webhooks (Pro required).
- **n8n** — verified node (`n8n-nodes-hedy`), npm package, cloud and self-hosted.
- **ActivePieces** — open-source platform, 200+ connectors.
- **viaSocket** — no-code visual workflow builder, 5,000+ apps.
- **Pabbly Connect** — one-time pricing automation platform.

### CRM connectivity
No native CRM connectors. CRM integration requires:
1. **Zapier/n8n route**: Hedy webhook → Zapier/n8n → CRM (HubSpot, Salesforce, Pipedrive, etc.)
2. **Custom API route**: Hedy API → your middleware → CRM API
3. **MCP route**: AI assistant queries Hedy MCP → formats data → pushes to CRM

### MCP Server
- **Endpoint**: `https://api.hedy.bot/mcp`
- **Auth**: OAuth 2.1 with PKCE
- **Compatible clients**: Claude Desktop, ChatGPT, Cursor, other MCP clients
- **18 tools** across 5 categories: Sessions, Highlights, Tasks, Topics, Session Contexts
- **Permissions**: Can organize (create/update/delete topics, contexts) but cannot delete recordings or transcripts
- **Requires**: Pro subscription + cloud sync enabled

### Data export
- REST API (on-demand pull)
- Webhooks (real-time push)
- Automation platform triggers (webhook-powered)
- Native export: Notion, Google Docs, OneNote, PDF, DOCX

## Data model (API)

### Core objects

**Session** — a recorded conversation
- Contains: title, start/end times, duration, transcript, summary/recap, meeting minutes, highlights, todos, topic assignment

**Highlight** — a key moment captured during a session
- Contains: text, AI insight, timestamp

**Todo** — an action item extracted from a session
- Contains: text, due date, associated session

**Topic** — an organizational container for sessions
- Contains: name, sessions list, insights

**Session Context** — reusable instructions for coaching behavior
- Contains: name, instructions, applicable meeting types

**Webhook** — an event subscription
- Contains: name, URL, subscribed events, secret

### Relationships
- Sessions belong to Topics (optional, many-to-one)
- Highlights belong to Sessions (many-to-one)
- Todos belong to Sessions (many-to-one)
- Session Contexts are applied to Sessions

## Workflow setup

### Workflow 1: Real-time coaching for sales calls

1. Create session contexts for each call type (discovery, demo, negotiation)
2. Include relevant qualification frameworks in context instructions (e.g., "Ask about budget, authority, need, timeline")
3. Start Hedy before the call — coaching activates automatically
4. Review highlights and todos after the call
5. Optional: webhook to push summary + todos to CRM

### Workflow 2: CRM integration via Zapier

1. In Hedy Settings → API Access → Manage Webhooks, create a webhook subscribed to `session.ended`
2. In Zapier, create a Zap with Hedy as the trigger (uses the webhook)
3. Map fields: `summary` → CRM note body, `todos` → CRM tasks, `transcript` → CRM activity
4. Filter: only trigger for sessions tagged with specific topics (if needed)

### Workflow 3: Meeting intelligence pipeline via n8n

1. Install the `n8n-nodes-hedy` node in your n8n instance
2. Create a workflow triggered by Hedy `session.ended` event
3. Branch to multiple destinations: Slack (summary), Notion (full transcript + todos), CRM (summary + action items)
4. Add a delay node before CRM push to ensure AI summary is fully processed

## Deep dives

### Security & compliance
- **GDPR compliant** — DPA agreements available
- **HIPAA** — certification in progress (not yet certified)
- **SOC 2 Type II** — certification in progress (not yet certified)
- **On-device audio processing** — audio captured locally, transcripts processed transiently in cloud
- **No AI model training on user data** — explicitly stated policy
- **EU data residency** — option to store conversation data on EU servers

### Recording modes
- **Mac/Windows desktop app** — records system audio and microphone
- **iPhone/Android app** — records via device microphone
- **Apple Watch** — companion display (recording happens on phone)
- **Web app** — view-only (no recording capability)
- **No meeting bot** — Hedy doesn't join calls as a participant

### Phone call recording
- Works when audio plays over speaker
- Headphone limitation: phone manufacturers block apps from capturing call audio through headphones
- For reliable phone call recording, use speaker mode

### Cross-session intelligence
Hedy learns from past conversations to personalize coaching:
- Identifies recurring topics and patterns
- Adapts suggestions based on your communication style
- Provides increasingly relevant nudges over time
- Requires cloud sync to aggregate session data
