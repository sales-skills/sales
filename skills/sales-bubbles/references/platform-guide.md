# Bubbles Platform Reference

## Overview

Bubbles is an AI-powered meeting note-taker and async video messaging tool. It auto-joins Zoom, Google Meet, and Microsoft Teams meetings to record, transcribe, and generate summaries + action items. It also serves as a screen recorder for async video communication. Target audience: remote teams, designers, managers — not sales-specific. SOC 2 Type II certified.

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| AI Meeting Recording | Auto-join meetings, record audio/video, transcribe | UI + Zapier trigger |
| AI Summaries & Action Items | Auto-generated post-meeting summaries with extracted tasks | UI only (output available via Zapier) |
| Screen Recording | Record screen + camera with voiceover for async updates | UI only |
| Async Video Comments | Reply to recordings with video, voice, or text | UI only |
| Channels | Organize recordings into topic-based channels | UI only |
| Calendar Integration | Google Calendar, Outlook — auto-detect meetings | UI only |
| Slack Integration | Receive notifications and access recordings from Slack | Native integration |
| Zapier | Connect to 200+ apps via triggers | Zapier only |

**No public API. No webhooks. No MCP server.** All programmatic access is through Zapier.

## Pricing, limits & plan gates

| Feature | Free | Pro Teams ($12/user/mo annual) | Pro Personal ($18/mo annual) |
|---|---|---|---|
| Meeting recordings | 5/week | Unlimited | Unlimited |
| Recording length | 30 min | Unlimited | Unlimited |
| Screen recordings | Unlimited | Unlimited | Unlimited |
| AI summaries + action items | Yes | Yes | Yes |
| AI transcripts | No | Yes | Yes |
| Channels | 2 | Unlimited | Unlimited |
| Recording retention | Lock after 2 weeks inactive | Never lock | Never lock |
| Notetaker control | Joins all meetings | Customizable (selective join) | Customizable |
| Recording distribution | All invitees | Selective | Selective |
| Team size | Any | 3+ members (required) | 1-2 members |
| Branded customization | No | Yes | Yes |
| Monthly billing | — | $15/user/mo | $22/mo |

**Key plan gates:**
- AI transcripts require Pro (Free only gets summaries + action items)
- Selective notetaker join rules require Pro
- Auto-upgrade: Pro Personal automatically transitions to Pro Teams pricing at 3 members

**14-day free trial** available for Pro plans.

## Integrations

| Integration | Direction | What it does |
|---|---|---|
| Zoom | Inbound | Notetaker bot joins Zoom meetings |
| Google Meet | Inbound | Notetaker bot joins Meet calls |
| Microsoft Teams | Inbound | Notetaker bot joins Teams meetings |
| Slack | Bidirectional | Notifications + recording access from Slack |
| Notion | Outbound (via Zapier) | Push summaries to Notion pages |
| Asana | Outbound (via Zapier) | Create tasks from action items |
| Google Calendar | Inbound | Detect meetings for auto-join |
| Outlook Calendar | Inbound | Detect meetings for auto-join |
| Zapier | Outbound | Trigger on new recordings → 200+ apps |

**No CRM connectors** (HubSpot, Salesforce, Pipedrive — none). No native data warehouse export.

## Data model

Bubbles doesn't expose a public API, so there's no documented data model. Based on the Zapier integration and product behavior, the key objects are:

<!-- Constructed from product behavior — verify against Zapier trigger payload -->
```json
{
  "recording": {
    "id": "rec_abc123",
    "title": "Weekly Standup - April 24",
    "type": "meeting | screen_recording",
    "created_at": "2026-04-24T10:00:00Z",
    "duration_s": 1800,
    "summary": "Team discussed sprint progress...",
    "action_items": ["Follow up with design team", "Update Jira tickets"],
    "transcript": "Speaker 1: Let's start with...",
    "participants": ["alice@example.com", "bob@example.com"],
    "channel": "Design Standups",
    "url": "https://app.usebubbles.com/recording/rec_abc123"
  }
}
```

## Quick-start recipes

### Recipe 1: Post meeting summaries to Slack via Zapier

**Trigger**: New Bubbles recording completed
**Steps**:
1. Go to Settings → Integrations in Bubbles
2. Connect Zapier
3. Create a Zap: Trigger = Bubbles "New Recording" → Action = Slack "Send Channel Message"
4. Map fields: Title → message header, Summary → message body, Action Items → bulleted list

**Gotchas**:
- Free Zapier plan limits to 100 tasks/month — 5 meetings/day hits this in ~3 weeks
- Summary may not be ready instantly — Zapier trigger fires when recording completes, but AI processing takes a few seconds

### Recipe 2: Create Notion pages from meeting recordings

**Trigger**: New Bubbles recording completed
**Steps**:
1. Create a Notion database with columns: Title (text), Date (date), Summary (text), Action Items (text)
2. In Zapier: Trigger = Bubbles "New Recording" → Action = Notion "Create Database Item"
3. Map: recording title → Title, created_at → Date, summary → Summary, action_items → Action Items

### Recipe 3: Auto-create Asana tasks from action items

**Trigger**: New Bubbles recording completed
**Steps**:
1. In Zapier: Trigger = Bubbles "New Recording" → Formatter "Split Text" (split action items by newline) → Loop → Asana "Create Task"
2. Each action item becomes a separate Asana task assigned to the project

**Gotchas**:
- Zapier's loop step requires a paid plan
- Action item text may need cleanup — Bubbles AI sometimes includes context that doesn't belong in a task title

## Integration patterns

### Zapier-based automation (only option)

Since Bubbles has no API or webhooks, all automation flows through Zapier:

```
Bubbles recording completes
    → Zapier trigger fires
    → Route to destination(s):
        - Slack channel message
        - Notion database row
        - Google Docs new document
        - Asana/Monday.com task
        - Email notification
```

**Limitations of Zapier-only integration:**
- No real-time webhook push — Zapier polls periodically
- No custom filtering logic — can't filter by meeting type before triggering
- No bulk export — can't backfill historical recordings
- No transcript access on Free plan — Zapier can only pass what's available per plan tier
- Rate limited by Zapier plan (100-750K tasks/month depending on Zapier tier)

### Workaround for CRM sync

Bubbles has no CRM integration, but you can approximate it:
1. Zapier: Bubbles → HubSpot "Create Engagement" or Salesforce "Create Task"
2. Map meeting title + summary into a CRM activity/note
3. Match participants to CRM contacts by email (if available in Zapier payload)

**This is fragile** — no contact matching, no deal association, no field mapping. For serious CRM sync, use a dedicated note-taker (Fathom, Fireflies, Sybill).
