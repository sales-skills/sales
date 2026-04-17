# Wave Platform Reference

## Platform overview

Wave is a mobile-first AI note-taker that records, transcribes, and summarizes meetings, phone calls, lectures, and conversations across all devices. Differentiates from competitors like Fathom and Otter by emphasizing in-person/phone recording (not just virtual meetings), cross-device sync, and a semantic search assistant (Wave Assistant) across entire recording history. Targets sales teams, lawyers, students, and general professionals. ~285K users, ~197M minutes transcribed, 4.9/5 App Store rating.

## Recording methods

| Method | Device | Use case | How it works |
|---|---|---|---|
| Mobile app | iOS, Android | In-person meetings, phone calls, lectures | Records from device mic; Phone Bridge enables iPhone call recording |
| Desktop app | Mac, Windows | Virtual meetings (system audio), phone calls | Captures system audio from any app — no bot required for virtual meetings |
| Meeting bot | Any (calendar) | Scheduled Zoom/Meet/Teams meetings | Bot joins via calendar integration, records meeting automatically |
| Chrome extension | Browser | Browser-based meetings | Captures audio from Chrome tabs |
| Apple Watch | watchOS | Quick voice memos, in-person | Wrist-based recording syncs to phone |
| Web app | Any | Playback, search, management | app.wave.co for library access and Wave Assistant |

**Background recording**: Works while screen is locked or using other apps (mobile).
**Offline recording**: Records without internet; processes when reconnected.
**Audio import**: Import files, YouTube videos, and PDFs for transcription.

## Key features

### Voice ID
Speaker fingerprinting that learns voices over time. After initial training (manual labeling), automatically labels speakers in future recordings. Works across languages.

### Wave Assistant
Natural-language search and chat across entire recording history. Ask questions like "What did Sarah say about the budget in last week's meeting?" and get answers with source timestamps.

### AI summaries
Customizable templates:
- Meeting notes (default)
- Action items
- Executive summary
- Sales call summary
- Lecture notes

### Export & sharing
- **Native integrations**: Notion, Google Docs, OneNote, Evernote
- **File export**: PDF, DOCX
- **Public sharing**: Browser-accessible links (no Wave account required)
- **Developer**: REST API, MCP server (Claude/ChatGPT), Zapier

## Pricing and limits

| Tier | Cost | Minutes | Key features |
|---|---|---|---|
| Free | $0 | 30 min/month | AI transcription, all devices, no card required |
| Pro | $11.67/mo (annual) / $13.99/mo (monthly) | Unlimited | All platforms, all export options, Voice ID, Wave Assistant |
| Teams | $7.50/user/mo (min 5 users) | Unlimited | Centralized billing, shared workspaces, admin dashboard |

**Plan gates**:
- Free: 30 min/month cap, basic features
- Pro: Unlimited recording, all exports, all platforms, API access
- Teams: Everything in Pro + shared workspace, admin controls, centralized billing

**No enterprise tier listed publicly** — contact sales for custom needs.

## Integrations

### Native export
Notion, Google Docs, OneNote, Evernote, PDF, DOCX

### Developer integrations
- **REST API**: `api.wave.co/v1/` — sessions, transcripts, media, semantic search, webhooks
- **MCP server**: `mcp.wave.co` — Claude Desktop, Claude Code, ChatGPT integration
- **Zapier**: Workflow automation triggers/actions

### Calendar
Calendar integration for automatic meeting bot deployment (Zoom, Google Meet, Microsoft Teams).

## Data model

### Session
The core object. Represents a single recording with:
- Title, notes, tags, favorite status
- Recording metadata (duration, timestamp, type)
- AI-generated summary (template-based)
- Full transcript with speaker segments
- Audio/video media files

### Transcript segments
Each segment contains:
- Speaker (Voice ID label or "Unknown Speaker")
- Timestamp (offset from start)
- Text content

### Search
Semantic vector similarity search across all sessions via `POST /v1/sessions/search`. Returns ranked results with relevance scores.

## Workflow setup

### Setup 1: Auto-record all virtual meetings
1. Sign up at wave.co, install desktop + mobile apps
2. Connect calendar (Google Calendar / Outlook)
3. Enable auto-join in meeting bot settings
4. Wave bot joins scheduled meetings automatically
5. Transcripts and summaries appear in Wave library within minutes

### Setup 2: Record in-person meetings on mobile
1. Install Wave iOS/Android app
2. Open app, tap record before meeting starts
3. Enable background recording so it continues if you switch apps
4. After meeting ends, stop recording
5. Transcript + summary generate automatically
6. Label speakers to train Voice ID for future sessions

### Setup 3: API integration for transcript pipeline
1. Go to `app.wave.co/settings/integrations/api`
2. Create API token with `sessions:read`, `transcripts:read`, `webhooks:manage` scopes
3. Register webhook endpoint for `session.completed` events
4. On event, fetch full transcript via `GET /v1/sessions/{id}/transcript`
5. Process and push to downstream system (CRM, warehouse, Slack)

## Privacy & compliance

- SOC 2 compliant
- End-to-end encryption at rest and in transit
- Recordings never used for AI model training
- User owns all data
- Account deletion available
- GDPR considerations: data stored on Wave servers (no EU-specific residency mentioned)
