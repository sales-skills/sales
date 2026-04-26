# monday.com AI Notetaker — Platform Reference

## Platform overview

monday.com AI Notetaker is a built-in meeting recording and transcription feature inside the monday.com work management platform. It's designed for teams already using monday.com who want meeting notes, transcripts, and action items to flow directly into their boards without switching to a separate tool. The notetaker joins Zoom, Google Meet, and Microsoft Teams calls as a bot, transcribes in real time, generates summaries, and creates action items that can be pushed to monday.com boards as items or subitems.

**Target audience**: monday.com Pro/Enterprise customers who want basic meeting intelligence without adopting a dedicated note-taking tool. Not designed to compete with specialized CI platforms (Gong, Fireflies, Fathom) on depth — positioned as a "good enough" add-on that reduces tool sprawl.

**Key differentiator**: Native integration with monday.com boards — action items from meetings become board items in one click. No other note-taker has this depth of monday.com integration.

## Key modules

### Meeting recording & transcription
- Bot joins Zoom, Google Meet, Microsoft Teams (must be invited or auto-invited)
- Real-time transcription with speaker identification
- Supports multiple languages (exact list not published)
- Video playback of recorded meetings (audio-only in some configurations)

### AI summaries & topics
- Automated summary with "Overview" section
- Time-stamped topics organized by discussion point
- Talking points nested under each topic
- Post-meeting AI chatbot — ask follow-up questions ("What were the action items?", "What did [person] say about X?")

### Action item detection
- AI extracts action items with content, owner, due date, completion status
- Action items can be pushed to monday.com boards as items or subitems
- Transforms meeting output into tracked project work

### Calendar integration
- Connect Google Calendar or Microsoft Outlook
- Auto-invite mode: notetaker joins all meetings (or filtered subset)
- Manual invite: add notetaker to specific meetings on demand

## Pricing and limits

**Plan requirements:**
- **Basic ($9/seat/mo)**: No AI Notetaker access
- **Standard ($12/seat/mo)**: No AI Notetaker access
- **Pro ($19/seat/mo)**: AI Notetaker available as add-on
- **Enterprise (custom)**: AI Notetaker available

**AI credits system:**
- 500 free AI credits per month per account (shared across all monday AI features)
- Cheapest paid AI credit plan: $200/month ($2,400/year annual)
- Some AI features are free and don't consume credits: Formula Builder, Docs Assistant, Deal Insights, Risk Insights
- Credit consumption rate for notetaker meetings is not publicly documented
- Minimum 3 seats on paid plans

**Notetaker add-on pricing**: Not publicly disclosed — meeting hours billed at account level, requires sales negotiation on Pro/Enterprise plans.

**monday.com CRM pricing** (if using CRM product):
- Basic: $12/seat/mo
- Standard: $17/seat/mo
- Pro: $28/seat/mo
- Enterprise: custom

## Integrations

### Native integrations
- **monday.com boards**: Action items → board items/subitems (primary integration)
- **Google Calendar / Outlook**: Calendar connection for meeting discovery
- **Zoom, Google Meet, Microsoft Teams**: Supported meeting platforms

### API
- **Type**: GraphQL
- **Base URL**: `https://api.monday.com/v2`
- **Auth**: API token in `Authorization` header (admins and members)
- **Notetaker endpoint**: `notetaker.meetings` query (API version 2026-04+)
- **Rate limits**: Published but not detailed for notetaker specifically
- **Key capabilities**: Query meetings, transcripts, summaries, action items, participants, topics
- **Limitations**: Read-only notetaker data — no mutations to create/modify meetings via API

See `monday-notetaker-api-reference.md` for the full API reference.

### No webhook events for meetings
The monday.com API does not expose webhook events for notetaker meetings (no `meeting.completed` or `transcription.ready` triggers). To get meeting data programmatically, you must poll the `notetaker.meetings` query.

### Third-party integrations
- **Zapier**: monday.com has extensive Zapier integration, but notetaker-specific triggers/actions are not documented
- **Make (Integromat)**: Same as Zapier — monday.com modules exist but notetaker-specific ones are unclear

## Data model (API)

### Key objects

**Meeting**: Top-level object with title, start/end time, recording duration, summary, participants, topics, action items, transcript.

**Topic**: Discussion topic with title and nested talking points (`TalkingPoint` — content only, no timestamps).

**ActionItem**: Content, is_completed (boolean), owner (string), due_date.

**TranscriptEntry**: Transcript segments with timing and speaker metadata.

**Participant**: Email address of meeting attendee.

**MeetingsFilterInput**: Filter by meeting IDs (array), search text (string), or access level (MeetingAccess enum).

**MeetingsResponse**: Paginated response with `meetings` array and `page_info` (has_next_page, cursor).

### Pagination
Cursor-based pagination. Default limit: 10 meetings. Max: 100 per request. Use `page_info.cursor` from previous response to fetch next page.

## Workflow setup

### Setup: Connect calendar and enable auto-invite
1. Go to monday.com → Settings → AI Notetaker
2. Connect your Google Calendar or Microsoft Outlook account
3. Choose auto-invite mode:
   - **All meetings**: Bot joins every calendar event with a video link
   - **Filtered**: Bot joins only meetings matching specific criteria
   - **Manual**: You invite the notetaker per-meeting
4. For Zoom users: Go to Zoom Settings → Recording → enable "Allow external bots/guests to join and record"
5. Test with your next meeting — verify the bot joins and a transcript appears afterward

### Workflow: Meeting action items → board items
1. After a meeting, open the meeting in monday.com AI Notetaker
2. Review the AI-generated action items
3. Select action items to push to a board
4. Choose the target board and group
5. Action items become items or subitems with content, assignee, and due date pre-filled
6. Track completion in your existing monday.com workflow

### Workflow: Query meetings via API
1. Generate an API token (monday.com → Developer → API tokens)
2. Set API version to `2026-04` or later in request headers
3. POST to `https://api.monday.com/v2` with the `notetaker.meetings` GraphQL query
4. Parse response for meetings, transcripts, action items
5. For bulk extraction: paginate with cursor until `has_next_page` is false
6. Store raw JSON for audit trail, normalize for downstream use

## Deep dives

### When to use monday Notetaker vs a dedicated tool

| Need | monday Notetaker | Dedicated tool (Fathom/Fireflies/tl;dv) |
|---|---|---|
| Basic meeting transcription | Adequate | Better accuracy & detail |
| Action items → project tasks | Excellent (native board integration) | Requires Zapier/API |
| Conversation search across meetings | Limited | Strong (Fireflies, Circleback) |
| Sales coaching & methodology scoring | Not available | Gong, Avoma, tl;dv, Outdoo |
| CRM field auto-fill | Not available | Fathom, Claap, Sybill |
| Speaker analytics & talk ratios | Not available | Gong, Fireflies, Avoma |
| Budget impact | Included with Pro + AI credits | $10-20/user/mo additional |
| Tool consolidation | Fewer tools to manage | Another vendor to manage |

**Decision rule**: If your team lives in monday.com and the primary need is "stop writing notes and auto-create tasks," monday Notetaker is sufficient. If you need any form of sales intelligence, coaching, or sophisticated transcript analysis, use a dedicated tool and integrate it with monday.com via Zapier or API.

### Combining monday Notetaker with a dedicated tool
Some teams use both: the dedicated tool for detailed transcripts and coaching, and monday Notetaker for direct board integration. This works but doubles the meeting bots — two bots joining every call. Consider using the dedicated tool's Zapier integration to push action items to monday.com boards instead.
