# Sally AI Platform Reference

## Overview

Sally AI is a German-hosted AI meeting assistant that auto-joins video calls, transcribes in 99+ languages, and generates structured summaries with action items and decisions. Primary differentiator: GDPR-first architecture (Germany-hosted, end-to-end encryption, works council compliant) with tiered AI accuracy models and an MCP server for AI assistant integration. Developed by Aliru GmbH.

## Capabilities & automation surface

| Capability | Description | Automation |
|---|---|---|
| Bot recording | Auto-joins Zoom, Teams, Google Meet, Webex via calendar invite | Native (add invite@sally.io) |
| Transcription | 99+ languages, custom vocabulary, speaker diarization | MCP-accessible (read-only) |
| AI summaries | Key decisions, action items, highlights, key facts | MCP-accessible (read-only) |
| Action item detection | Auto-identifies tasks, assigns to attendees, tracks due dates | MCP-accessible (read-only) |
| Meeting analytics | Speaker patterns, engagement metrics, quality benchmarks | UI-only (Pro+) |
| Custom meeting types | Templates for different meeting formats (sales, standup, etc.) | UI-only (Pro+) |
| AI chat per meeting | Ask questions about a specific meeting's content | UI-only (Pro+) |
| Global AI chat | Search and query across all meetings | UI-only (Enterprise only) |
| Mobile recording | iOS/Android app for in-person meetings | App-only |
| Video/audio upload | Transcribe pre-recorded files | UI-only |
| On-premise deployment | Self-hosted option for regulated industries | Enterprise only |
| CRM sync | Push notes/tasks to HubSpot, Salesforce, Dynamics, Pipedrive, Zoho, Odoo, Bitrix24 | Native integration |
| Project management sync | Push to Asana, Monday.com, Trello, Notion, Jira, ClickUp | Native integration |
| Collaboration | Push to Slack, Microsoft Teams channels | Native integration |
| Automation workflows | Zapier, Make, Power Automate, n8n | iPaaS triggers/actions |

## Pricing, limits & plan gates

All prices USD, annual billing (monthly in parentheses). 30-day free trial on all plans, no credit card required.

| Feature | Starter $10/mo ($14) | Pro $40/mo ($45) | Enterprise $79/mo ($99) |
|---|---|---|---|
| Transcription minutes | 1,200/mo | Unlimited | Unlimited |
| AI model | Bronze (90.3%) | Silver (94.1%) | Gold (98.8%) |
| Upload limit | 1 GB | 5 GB | 5 GB |
| Languages | 99+ | 99+ | 99+ |
| Custom vocabulary | Yes | Yes | Yes |
| Integrations (8,000+) | Yes | Yes | Yes |
| Custom meeting types | No | Yes | Yes |
| AI chat per meeting | No | Yes | Yes |
| Quality benchmarks | No | Yes | Yes |
| Sales analytics | No | Yes | Yes |
| Objection detection | No | Yes | Yes |
| Meeting prep | No | Yes | Yes |
| Global AI chat | No | No | Yes |
| On-premise deployment | No | No | Yes |
| Priority support | No | No | Yes |
| MCP connector | Yes | Yes | Yes |

**Key gate**: The accuracy gap between tiers is significant — Bronze (90.3%) is noticeably worse for technical terms, names, and acronyms than Gold (98.8%).

## Integrations

### Video conferencing (inbound — Sally bot joins)
- Zoom, Microsoft Teams, Google Meet, Cisco Webex
- Setup: Add `invite@sally.io` to calendar invite or enable auto-join in calendar settings

### Calendars (bidirectional — read events, write summaries)
- Outlook (Online + On-Premise), Google Calendar, Apple Calendar, Calendly, meetergo

### CRM (outbound — pushes notes/tasks to CRM)
- HubSpot, Salesforce, Microsoft Dynamics 365, Pipedrive, Zoho, Odoo, Bitrix24

### Project management (outbound — pushes tasks/summaries)
- Asana, Monday.com, Trello, Notion, Jira, Confluence, ClickUp, Azure DevOps

### Collaboration (outbound — posts summaries)
- Slack, Microsoft Teams

### HR (outbound)
- Personio, Workday, BambooHR

### Automation platforms
- Zapier, Power Automate, Make (Integromat), n8n

### MCP (read-only AI assistant access)
- Claude Desktop, Claude Web, ChatGPT, Cursor, Windsurf, Zed, VS Code

## Data model

Sally's primary objects:

### Recording/Appointment
```json
{
  "id": "rec_abc123",
  "subject": "Weekly Sales Standup",
  "attendees": ["alice@company.com", "bob@company.com"],
  "date": "2026-04-25T10:00:00Z",
  "duration_minutes": 45,
  "platform": "zoom",
  "status": "completed"
}
```
<!-- Constructed from docs — verify against live API -->

### Summary
```json
{
  "recording_id": "rec_abc123",
  "key_facts": ["Q2 pipeline at $1.2M", "New competitor entering market"],
  "decisions": ["Move launch date to May 15", "Hire 2 more SDRs"],
  "action_items": [
    {
      "task": "Update forecast spreadsheet",
      "assignee": "alice@company.com",
      "due_date": "2026-04-28"
    }
  ],
  "highlights": ["Bob raised concern about churn rate increasing"]
}
```
<!-- Constructed from docs — verify against live API -->

### Transcription
```
[00:00:15] Alice: Let's start with pipeline updates.
[00:00:22] Bob: We closed two deals last week, total ARR $180K.
[00:01:05] Alice: Great. What about the Enterprise prospect?
```
Returned as plain text with timestamps via MCP `get_transcription` tool.

## MCP connector setup

### Endpoint
`https://app.sally.io/api/v1/McpExternal` — HTTP-based MCP with Bearer token auth.

### Authentication
Personal Access Token (format: `sally_pat_...`). Created in Settings → Integrations → Sally MCP. Tokens are scoped to one user + one company account. Read-only access to recordings the user can see.

### Available tools

| Tool | Description |
|---|---|
| `search_appointments` | Filter meetings by subject, attendee, or timeframe (full-text prefix matching) |
| `search_summaries` | Full-text search across meeting summaries |
| `get_recordings` | Paginated list of accessible recordings with metadata |
| `get_summary` | Retrieve summary for a recording (key facts, decisions, action items) |
| `get_transcription` | Full transcript with timestamps as plain text |

### Claude Desktop / Claude Code config

```json
{
  "mcpServers": {
    "sally": {
      "type": "http",
      "url": "https://app.sally.io/api/v1/McpExternal",
      "headers": {
        "Authorization": "Bearer sally_pat_YOUR_TOKEN"
      }
    }
  }
}
```

### Legacy stdio-only clients
Use `mcp-remote` proxy (requires Node.js 18+):
```bash
npx mcp-remote https://app.sally.io/api/v1/McpExternal --header "Authorization: Bearer sally_pat_YOUR_TOKEN"
```

### Token management
- Create in Settings → Integrations → Sally MCP
- Expiration: 30 days to never
- Copy immediately — cannot view clear-text again
- One token per client recommended for granular revocation
- Treat as password — store in password manager

## Quick-start recipes

### Recipe 1: Query past meetings from Claude Desktop

**Use case**: Search your meeting history and get summaries without switching to Sally's web UI.

1. Create PAT in Sally Settings → Integrations → Sally MCP
2. Add config to `~/.claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "sally": {
      "type": "http",
      "url": "https://app.sally.io/api/v1/McpExternal",
      "headers": {
        "Authorization": "Bearer sally_pat_abc123..."
      }
    }
  }
}
```
3. Restart Claude Desktop
4. Ask: "What were the action items from my meeting with the sales team last Tuesday?"

**Gotcha**: Token is read-only — you cannot create meetings or update action items via MCP.

### Recipe 2: Auto-push meeting notes to Slack via Zapier

**Use case**: Every completed meeting automatically posts a summary to a Slack channel.

1. In Zapier, create a new Zap
2. Trigger: Sally → "Meeting Completed" (or equivalent trigger)
3. Action: Slack → "Send Channel Message"
4. Map fields: Meeting subject → message title, Summary → message body, Action items → formatted list
5. Test with a short meeting

**Gotcha**: Zapier trigger availability depends on Sally's Zapier integration — check available triggers in Zapier's Sally app listing.

### Recipe 3: Sync meeting action items to Asana tasks

**Use case**: Automatically create Asana tasks from Sally action items.

1. In Sally Settings → Integrations, connect Asana
2. Select the project/workspace for task creation
3. Sally will push detected action items as tasks with assignees and due dates

**Gotcha**: Assignee matching requires email addresses in Sally to match Asana user emails.

## Integration patterns

### CRM sync architecture
- **Direction**: Outbound only (Sally → CRM)
- **Data pushed**: Meeting notes, summaries, action items, attendee info
- **Sync trigger**: Meeting completion (automatic)
- **Field mapping**: Configured in Sally Settings per CRM
- **Conflict resolution**: Sally creates new records — does not update existing CRM fields

### iPaaS automation
- **Zapier**: Available triggers/actions for meeting events
- **Make**: Sally modules for workflow automation
- **Power Automate**: Microsoft ecosystem integration
- **n8n**: Self-hosted workflow option

### MCP integration
- **Pattern**: Read-only query interface for AI assistants
- **Best for**: Searching meeting history, retrieving transcripts/summaries on demand
- **Not for**: Creating meetings, updating records, or triggering workflows
