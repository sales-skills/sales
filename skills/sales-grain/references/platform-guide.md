# Grain Platform Reference

## Platform overview

Grain is an AI-powered meeting recorder and conversation intelligence platform built for growing GTM teams. It records, transcribes, and summarizes video calls across Zoom, Google Meet, Microsoft Teams, Webex, and Slack Huddles. Key differentiator: shareable video clips — snip a 30-second moment from any meeting and share it to Slack, docs, or CRM. Targets sales, customer success, product, and remote teams at SMB to mid-market scale.

SOC 2 Type II certified. AWS-hosted in US VPC. No data shared with AI vendors for model training. 97% reported 12-month retention rate.

## Key modules

### Recording & Transcription
- Automatic recording via calendar integration (Google Calendar, Microsoft Outlook)
- Supports Zoom, Google Meet, Microsoft Teams, Webex, Slack Huddles
- Upload pre-recorded files (.mov, .mp4, .mp3, .wav, .m4a — H.264 codec, max 2 hours)
- Zoom Cloud Recording import (connect Zoom integration)
- AI transcription in 130+ languages with speaker identification
- Custom vocabulary for transcription accuracy (Business+)
- Desktop capture mode — records without a bot joining the meeting (requires desktop app)

### AI Meeting Notes
- AI-generated summaries with chapters and outcomes
- Automatic action item identification with assignee tracking
- Custom AI prompts for tailored summaries
- AI-powered follow-up email generation
- Live notepad for real-time annotations and moment tagging
- Customizable meeting templates (pre-built and custom)

### Clips, Playlists & Stories
- Video clip creation from any transcript moment
- Playlists — curated collections of clips
- Stories — narrative compilations for sharing customer insights
- Share clips directly to Slack channels or embed in docs

### Trackers (Business+)
- Keyword and phrase monitoring across meetings
- Track competitor mentions, objection patterns, feature requests
- Dashboard view of tracker frequency over time

### AI Coaching (Business+)
- Talk-to-listen ratio analysis
- Question analysis (discovery vs leading questions)
- Filler word tracking
- Team interaction insights
- Sales Skill Scorecards

### Deal Board (Business+)
- Pipeline visibility from meeting data
- Performance insights across team
- Deal opportunity and risk analysis

### Ask AI
- Conversational search across all meetings
- Natural language queries about what was discussed

### MCP Server (all plans, free)
- Official MCP server at `https://api.grain.com/_/mcp`
- Works with Claude (native integration), ChatGPT (via settings), Cursor, Windsurf (via `mcp-remote`)
- Exposes: meetings, notes, transcripts, deals, coaching scorecards
- Four built-in MCP prompts:
  1. **Voice of the Customer** — weekly sentiment and customer request tracking
  2. **Pipeline IQ** — deal opportunity and risk analysis
  3. **SPICED/MEDDICC** — deep deal analysis across meetings
  4. **Sales Skill Scorecards** — team performance evaluation over time
- Setup for Claude: Name = Grain, URL = `https://api.grain.com/_/mcp`
- Setup for Cursor/Windsurf (mcp-remote):
  ```json
  { "grain": { "command": "npx", "args": ["-y", "mcp-remote", "https://api.grain.com/_/mcp"] } }
  ```

## Pricing and limits

Pricing is best-effort as of 2026-04 — verify on grain.com/pricing.

| Feature | Free | Starter | Business | Enterprise |
|---|---|---|---|---|
| Price (annual) | $0 | $15/seat/mo | $29/seat/mo | Custom |
| Price (monthly) | $0 | $19/seat/mo | $39/seat/mo | Custom |
| Notetaker seats | 1 | Unlimited | Unlimited | Unlimited |
| Viewer seats | Unlimited | Unlimited | Unlimited | Unlimited |
| Meetings | 20 | Unlimited | Unlimited | Unlimited |
| Uploads | — | 10/month | Unlimited | Unlimited |
| AI notes | Basic | Advanced | Advanced | Advanced |
| Custom AI prompts | — | ✓ | ✓ | ✓ |
| Slack integration | — | ✓ | ✓ | ✓ |
| Productboard | — | ✓ | ✓ | ✓ |
| Zapier | — | ✓ | ✓ | ✓ |
| HubSpot | — | — | ✓ | ✓ |
| Salesforce | — | — | ✓ | ✓ |
| Aircall | — | — | ✓ | ✓ |
| AI coaching | — | — | ✓ | ✓ |
| Deal board | — | — | ✓ | ✓ |
| Trackers | — | — | ✓ | ✓ |
| Custom vocabulary | — | — | ✓ | ✓ |
| API access | — | — | ✓ | ✓ |
| SSO (SAML) | — | — | — | ✓ |
| Dedicated CS | — | — | — | ✓ |
| Custom invoicing | — | — | — | ✓ |
| MCP Server | ✓ | ✓ | ✓ | ✓ |

- 14-day free trial on paid plans
- 30-day money-back guarantee
- No annual contracts required
- Free plan: 10-min inactivity timeout before bot leaves; paid plans: 30 min
- Paid seats can record, upload, import; free viewer seats can only view/collaborate

## Integrations

### Video conferencing
- Zoom (auto-join + cloud import)
- Google Meet (auto-join)
- Microsoft Teams (auto-join)
- Webex (auto-join)
- Slack Huddles

### CRM (Business+)
- **HubSpot** — sync meetings to contacts, companies, deals (activity-level logging)
- **Salesforce** — auto-enrich lead/contact records with meeting recordings

### Productivity
- **Slack** (Starter+) — share clips, summaries, highlights to channels
- **Productboard** (Starter+) — capture product ideas/feedback from meetings

### Phone
- **Aircall** (Business+) — send calls to Grain for AI notes and transcripts

### Automation
- **Zapier** (Starter+) — workspace-level triggers, push summaries/transcripts to 8,000+ apps. Rebuilt March 2026 with enhanced filtering. Cannot export video recordings.

### AI
- **MCP Server** (all plans) — Claude, ChatGPT, Cursor, Windsurf

## API (Business+ or Enterprise)

### Overview
- Base URL: `api.grain.com`
- Auth: Bearer token (`Authorization: Bearer {GRAIN_API_TOKEN}`)
- Developer docs: `developers.grain.com` (Notion-hosted — may be slow to load)
- Format: JSON requests and responses

### Known endpoints
- **Workspace recordings list** — paginated listing of all recordings
- **Recording transcript** — fetch full transcript with `transcript_format=json`
- **Tags** — retrieve/manage tags on recordings (added March 2026)
- **Action items** — retrieve action items from recordings (added March 2026)
- **Video uploads** — upload video files via API (Business+, added January 2026)

### Response format
Recording object includes: ID, title, URL, source, datetime, participants (name, email), full transcript (JSON format with speaker labels and timestamps).

### Rate limits
- No formally published rate limits — official example uses 1-second delay between requests
- Recommended: 1 req/sec for bulk operations
- Pagination: cursor-based with `.cursor_state.json` for resumption

### GitHub resources
- `grain-team/grain-workspace-api-example` — Python wrapper for bulk transcript download with pagination and resume support
- `grain-team/meeting-data-analysis` — meeting metrics analysis tool

## Data model (API)

### Recording object
```json
{
  "id": "recording_id",
  "title": "Meeting title",
  "url": "https://grain.com/recordings/...",
  "source": "zoom|meet|teams|webex|upload",
  "datetime": "2026-04-17T10:00:00Z",
  "participants": [
    {"name": "Jane Doe", "email": "jane@example.com"}
  ],
  "transcript": [
    {"speaker": "Jane Doe", "text": "...", "timestamp": "00:01:23"}
  ]
}
```

### Output directory structure (bulk export)
```
recordings/
  YYYY/
    MM/
      DD/
        {recording_id}_{title}.json
```

## Workflow setup

### 1. Auto-recording setup
1. Sign up at grain.com
2. Connect Google Calendar or Microsoft Outlook
3. Enable auto-recording in settings
4. Grain bot will auto-join all scheduled meetings

### 2. Desktop capture (bot-free)
1. Install Grain desktop app
2. Enable desktop capture mode
3. Records screen + audio without a bot joining the meeting
4. Useful when meeting hosts restrict third-party bots

### 3. CRM sync (Business+ — HubSpot example)
1. Navigate to Grain Integrations → HubSpot
2. Authenticate with HubSpot OAuth
3. Configure: auto-log meetings to contacts/companies/deals
4. Meeting notes, summaries, and recording links appear on deal/contact timeline
5. Note: sync is activity-level — notes are logged as timeline activities, not structured field updates

### 4. Zapier automation (Starter+)
1. Connect Grain workspace to Zapier (workspace-level connection, rebuilt March 2026)
2. Available triggers: new recording, new clip, new summary
3. Combine with any Zapier action (Slack, Notion, Airtable, Google Drive, etc.)
4. Limitation: video recordings cannot be exported via Zapier — only metadata/text

### 5. MCP Server setup
1. **Claude**: Settings → Integrations → Add "Grain" with URL `https://api.grain.com/_/mcp`
2. **Cursor/Windsurf**: Add to MCP config:
   ```json
   { "grain": { "command": "npx", "args": ["-y", "mcp-remote", "https://api.grain.com/_/mcp"] } }
   ```
3. Use built-in prompts for one-click reports or ask natural language questions about your meetings

## Deep dives

### Clip sharing workflow
Grain's strongest differentiator is turning call moments into shareable video clips:
1. Open any transcribed meeting
2. Highlight a transcript segment → "Create Clip"
3. Share clip link to Slack channel, embed in Notion/Google Docs, or add to a Playlist/Story
4. Recipients can view the clip without a Grain account (if sharing permissions allow)

Use cases: sharing customer quotes with product team, recording executive testimony for board decks, capturing competitor mentions for competitive intel.

### Tracker setup (Business+)
1. Navigate to Trackers settings
2. Create a tracker with keywords/phrases (e.g., competitor names, objection keywords, feature requests)
3. Grain monitors all team meetings for matches
4. Review tracker dashboard for frequency trends and specific mentions
5. Combine with coaching insights for rep-level performance analysis

### Migration from other note-takers
If switching to Grain from Fathom/Fireflies/Otter:
1. Export existing transcripts/recordings from the current tool (use their API or bulk export)
2. Upload recordings to Grain via the Video Uploads API (Business+) or manual upload (10/month Starter, unlimited Business)
3. Grain re-transcribes and applies its own AI summaries
4. Rebuild CRM sync connections in Grain integrations settings
5. Note: Grain's CRM sync is shallower than Gong/Avoma — plan for manual field mapping via Zapier if you relied on structured CRM enrichment
