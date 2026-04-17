# tl;dv Platform Reference

## Platform overview

tl;dv (Too Long, Didn't View) is an AI-powered meeting note-taker and sales coaching platform supporting Zoom, Google Meet, and Microsoft Teams. Positioned as the free-tier leader for unlimited recordings, with paid tiers adding CRM sync, sales coaching, and API access. 2M+ users including Salesforce, Cloudflare, Forbes, and Roche. Founded in Amsterdam.

## Key modules

### Recording & transcription
- Automatic meeting capture via bot that joins Zoom, Google Meet, and Microsoft Teams calls
- Auto-join based on calendar events — can be configured to join all meetings, specific calendars, or manual-only
- Transcription accuracy: up to 96% for clear English, 85-90% for accented/multi-speaker audio
- 30+ languages supported for transcription and translation
- 3-hour maximum meeting duration (recorded or uploaded)

### AI summaries & notes
- Customizable summary formats: MEDDIC, BANT, SPIN, Smart AI Topics, or custom templates
- Action item extraction with assignees
- Structured notes with topics and timestamps
- Aggregated insights — AI reports analyzing trends across multiple meetings
- Free plan: 10 AI summaries lifetime. Pro+: unlimited.

### Sales coaching (Business+)
- Playbook adherence monitoring (MEDDIC, BANT, SPIN)
- Objection handling analysis
- Talk-time analysis and performance insights
- Rep performance tracking and comparison
- Deal insights and conversation intelligence

### CRM automation
- **Business plan**: Native HubSpot, Salesforce, Pipedrive integrations. Auto-logs call notes and outcomes. AI-drafted follow-up emails. Tag meetings with CRM deal stages based on calendar invitees.
- **Pro plan**: CRM sync only through Zapier (separate Zapier subscription required)
- **Free plan**: No CRM sync

### Collaboration
- Meeting library with search
- Clip sharing (highlight + share specific moments)
- Team folders for organization
- Commenting and tagging on recordings

## Pricing and limits

Pricing is best-effort as of 2026-04 — verify on tldv.io/app/pricing before quoting.

| Plan | Monthly | Annual (40% off) | Key limits |
|------|---------|-------------------|------------|
| Free | $0 | $0 | 10 lifetime AI summaries, recordings deleted after 3 months, 40 recordings/week max, basic integrations only (Slack, email, calendar) |
| Pro | $29/user | $18/user | Unlimited AI notes, permanent storage, global search, team folders, unlimited downloads, API + webhooks, CRM sync via Zapier only |
| Business | $98/user | $59/user | All Pro + native Salesforce/HubSpot/Pipedrive, sales coaching, customizable playbooks, objection handling, Claude AI integration, 120 recordings/week |
| Enterprise | Custom | Custom | All Business + private AI hosting, dedicated CSM, custom invoicing, priority SLA support, advanced admin controls |

**Billing notes:**
- Seat-based: each recorder needs a license; unlimited viewers permitted
- Monthly costs 63-66% more than annual
- No long-term contracts required; month-to-month cancellation available
- 40% annual discount was promoted through 2025 — may still apply

## Integrations

**Meeting platforms**: Zoom, Google Meet, Microsoft Teams

**CRM** (Business+): HubSpot, Salesforce, Pipedrive (native). Pro: via Zapier.

**Productivity**: Slack, Notion, Google Docs, email

**Automation**: Zapier (5,000+ apps), Make (community module)

**AI**: MCP server (Claude Desktop, Claude Code, Cursor) — `github.com/tldv-public/tldv-mcp-server`

**API**: REST API on Pro+. See `references/tldv-api-reference.md`.

## Data model (API)

Key objects from the API:

- **Meeting**: `{id, title, organizer, invitees[], duration, startedAt, endedAt, platform, status}`
- **Transcript**: `{id, meetingId, data[{speaker, text, startTime, endTime}]}`
- **Notes**: `{structuredNotes[], markdownContent, topics[]}`
- **Webhook events**: `MeetingReady`, `TranscriptReady` — scoped to User, Team, or Organization

Meetings are identified by `meetingId`. Recording downloads return a 302 redirect to a signed URL with 6-hour TTL.

## Workflow setup

### Setting up auto-recording
1. Sign in at tldv.io → Settings → Recording
2. Choose auto-join mode: All calendar meetings, specific calendars, or manual only
3. Connect your calendar (Google Calendar or Outlook)
4. For Zoom: install the tl;dv Zoom app from Zoom Marketplace
5. For Google Meet: install the tl;dv Chrome extension
6. For Teams: connect via tl;dv Teams integration
7. The tl;dv bot will appear as a participant in your meetings

### Setting up HubSpot integration (Business plan)
1. Go to Settings → Integrations → CRM → HubSpot
2. Authorize tl;dv to access your HubSpot account
3. Configure field mapping — map tl;dv notes/summaries to HubSpot fields
4. Set auto-sync preferences: what to push (notes, summaries, action items, transcripts)
5. Meeting invitee emails must match HubSpot contact emails for automatic association
6. Optionally tag meetings with deal stages from your CRM pipeline

### Setting up webhooks (Pro+)
1. Generate an API key at tldv.io/app/settings/personal-settings/api-keys
2. Use the API to register webhooks for `MeetingReady` or `TranscriptReady` events
3. Specify scope: User (your meetings only), Team, or Organization
4. Your endpoint receives a POST with the event payload
5. Fetch full transcript via `GET /v1alpha1/meetings/{meetingId}/transcript`

## Deep dives

### Sales coaching setup (Business plan)
The coaching module requires Business plan. Setup:
1. Go to Coaching Hub → Playbook Settings
2. Choose a framework: MEDDIC, BANT, SPIN, or create a custom playbook
3. tl;dv will automatically analyze calls against your chosen playbook
4. View performance insights: talk-time ratio, question frequency, objection handling scores
5. Use aggregated insights to identify team-wide coaching opportunities

### Migrating from another note-taker
1. tl;dv supports importing recordings via `POST /v1alpha1/meetings/import` (Pro+)
2. For bulk migration, use the API import endpoint with your existing recordings
3. Transcripts from other platforms cannot be directly imported — tl;dv will re-transcribe uploaded recordings
4. CRM associations need to be re-established in tl;dv after migration

### MCP server setup
tl;dv provides an official MCP server at `github.com/tldv-public/tldv-mcp-server`:
1. Clone the repo or use Docker
2. Configure with your API key (from tldv.io/app/settings/personal-settings/api-keys)
3. Add the server to your MCP client config (Claude Desktop, Claude Code, Cursor)
4. Available tools: list meetings, get meeting details, get transcripts, get notes
