# Noty.ai Platform Reference

## Overview

Noty.ai is a Chrome-extension-based AI meeting assistant that records and transcribes Google Meet and Zoom calls in real time, then generates AI summaries and extracts action items with deadlines and assignees. Powered by Google's Gemini AI engine (98.6% accuracy claimed). Founded 2020 by Natalie Marina, Middletown DE, 12 employees, $1.77M raised, Google for Startups Ukraine Support Fund. 100,000+ users claimed.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| Real-time transcription | Live transcription during Google Meet and Zoom calls via Chrome extension | UI (Chrome extension) |
| AI summaries | Gemini-powered meeting summaries with key details | UI + Zapier trigger |
| Action item extraction | Automatic detection of tasks with assignees and deadlines | UI + Zapier trigger |
| Live highlighting | Highlight key moments and add comments during live transcription | UI-only |
| Gmail follow-ups | Turn highlights into smart follow-up emails via Gmail | UI-only |
| Recording | Meeting audio recording | UI-only |
| Export | Export transcripts and summaries as Google Docs, PDF, or TXT | UI-only |
| Global search | Search across all meeting transcripts and summaries | UI-only |
| Custom summaries | AI-generated summaries with custom prompts (costs AI credits) | UI-only |
| Impact tracking | Track productivity metrics from meetings | UI-only |
| Workspaces | Shared team workspaces for organizing meetings | UI-only |
| Folders | Organize meetings by project/client within workspaces | UI-only |

**Key limitation**: Nearly all features are UI-only. The only programmatic interface is Zapier (3 triggers, no actions).

## Pricing, limits & plan gates

*Best-effort as of 2026-04 — verify on noty.ai/pricing.*

| Plan | Price | Limits | Key features |
|---|---|---|---|
| Free | $0 | Unknown limits (unclear from docs) | Basic transcription, limited features |
| Pro | $10/user/mo | 100 hrs/month, 3 AI credits/meeting | Recording, export (Docs/PDF/txt), global search, custom summaries, priority support, impact tracking, unlimited storage |
| Education | $40/user/yr (~$3.33/mo) | Same as Pro (requires eligibility) | All Pro features, 90% discount for schools/nonprofits |

**Free trial**: 7 days, no credit card required.

**Plan gates**:
- Recording: Pro only
- Export: Pro only
- Custom summaries: Pro only (costs AI credits)
- Priority support: Pro only
- Workspaces/Folders: Likely Pro only (not confirmed)

**What "3 AI credits per meeting" means**: Each AI action (generating a summary, running a custom prompt, etc.) consumes one credit. Three credits per meeting means you can generate ~3 AI outputs per recorded meeting. Credits do not roll over.

## Integrations

| Integration | Direction | Description |
|---|---|---|
| Google Meet | Inbound | Auto-joins meetings via Chrome extension + Google Calendar |
| Zoom | Inbound | Records Zoom meetings via OAuth connection |
| Google Calendar | Inbound | Auto-detects upcoming meetings for auto-join |
| Gmail | Outbound | Send follow-up emails from highlights |
| Google Docs | Outbound | Export transcripts/summaries |
| Zapier | Outbound | 3 instant triggers for automation |
| Slack | — | Listed as "upcoming" (not yet available) |

**No CRM integration.** No native HubSpot, Salesforce, Pipedrive, or other CRM connectors. CRM sync requires Zapier as middleware.

**No Make/Integromat support documented.**

## Data model

Noty.ai does not expose a public API, so data model is inferred from Zapier trigger payloads and UI behavior.

### Core objects

**Conversation** (a recorded meeting):
```json
<!-- Constructed from Zapier triggers and UI — verify against live integration -->
{
  "id": "conv_abc123",
  "title": "Weekly Sales Standup",
  "date": "2026-04-25T10:00:00Z",
  "duration_minutes": 45,
  "platform": "google_meet",
  "participants": ["alice@example.com", "bob@example.com"],
  "transcript": "Full transcript text...",
  "workspace_id": "ws_xyz789",
  "folder_id": "fld_def456"
}
```

**Summary** (AI-generated from a conversation):
```json
<!-- Constructed from Zapier triggers — verify against live integration -->
{
  "conversation_id": "conv_abc123",
  "summary_text": "AI-generated summary of the meeting...",
  "generated_at": "2026-04-25T10:47:00Z"
}
```

**Todo Item** (action item extracted from a conversation):
```json
<!-- Constructed from Zapier triggers — verify against live integration -->
{
  "conversation_id": "conv_abc123",
  "task": "Send proposal to client by Friday",
  "assignee": "alice@example.com",
  "deadline": "2026-04-28",
  "status": "pending"
}
```

## Quick-start recipes

### Recipe 1: Auto-send meeting summaries to a Slack channel via Zapier

Since Noty.ai's native Slack integration is "upcoming," use Zapier as a bridge.

**Trigger**: Noty.ai → "Summary Created" (instant)
**Action**: Slack → "Send Channel Message"

1. Create a new Zap in Zapier
2. Select Noty.ai as the trigger app, choose "Summary Created"
3. Connect your Noty.ai account (OAuth)
4. Select Slack as the action app, choose "Send Channel Message"
5. Map the summary text from the Noty.ai trigger to the Slack message body
6. Optionally add the meeting title as a header

**Gotcha**: The "Summary Created" trigger fires only when Noty.ai's AI generates a summary — if AI credits are exhausted, no trigger fires.

### Recipe 2: Create Notion tasks from Noty.ai action items

**Trigger**: Noty.ai → "Todo Items Created" (instant)
**Action**: Notion → "Create Database Item"

1. Create a new Zap in Zapier
2. Select Noty.ai as the trigger app, choose "Todo Items Created"
3. Connect your Noty.ai account
4. Select Notion as the action app, choose "Create Database Item"
5. Map: task → Name, assignee → Assignee property, deadline → Due Date property
6. Add the conversation title as a "Meeting" property for context

**Gotcha**: Todo items are extracted by AI — quality varies. Review the first few automated tasks to calibrate expectations.

### Recipe 3: Log meeting transcripts to Google Sheets for analysis

**Trigger**: Noty.ai → "Conversation Finished" (instant)
**Action**: Google Sheets → "Create Spreadsheet Row"

1. Create a new Zap in Zapier
2. Select Noty.ai as the trigger app, choose "Conversation Finished"
3. Connect your Noty.ai account
4. Select Google Sheets as the action app
5. Map: title → Column A, date → Column B, transcript → Column C, duration → Column D
6. Add a filter step if you only want certain meetings (by title keyword or participant)

**Gotcha**: Long transcripts may hit Google Sheets' 50,000-character cell limit. Consider truncating or linking to the full transcript in Google Docs instead.

## Integration patterns

### Zapier automation (the only programmatic interface)

**Available triggers** (all instant — webhook-based):

| Trigger | Fires when | Payload includes |
|---|---|---|
| Conversation Finished | A meeting recording ends and transcript is ready | Meeting metadata + full transcript |
| Todo Items Created | AI extracts action items from a completed meeting | Task descriptions, assignees, deadlines |
| Summary Created | AI generates a meeting summary | Summary text, meeting reference |

**No Zapier actions available** — Noty.ai is trigger-only. You cannot create meetings, update data, or configure settings via Zapier.

**No direct API or webhooks.** All automation must go through Zapier. This means:
- No custom webhook receivers
- No batch operations
- No programmatic search or data export
- No real-time streaming
- Rate limits are Zapier's, not Noty.ai's

### CRM sync workaround

Since Noty.ai has no native CRM integration:

1. Use "Conversation Finished" Zapier trigger
2. Add a Zapier action to create/update a CRM record (HubSpot, Salesforce, Pipedrive)
3. Map meeting title → activity subject, transcript → notes field, date → activity date
4. Optionally use "Todo Items Created" to create CRM tasks

**Limitation**: No participant-to-contact matching — you'll need to parse the transcript or use meeting title to associate with the right CRM record.

### Data export for analytics

No bulk export API exists. Options:
1. **Zapier → Google Sheets/Airtable**: Accumulate meeting data over time via triggers
2. **Manual export**: Export individual meetings as PDF/TXT from the UI
3. **Google Docs accumulation**: Export summaries to a shared Google Drive folder
