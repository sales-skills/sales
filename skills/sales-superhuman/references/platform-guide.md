# Superhuman Platform Reference

## Overview

Superhuman is a premium AI email client focused on speed and keyboard-driven workflow. Acquired by Grammarly in June 2025, it's now part of the "Superhuman Suite" alongside Grammarly, Coda, and Go. Targets professionals and sales teams who process high email volume. Gmail and Outlook support. No Apple Mail.

## Capabilities & automation surface

| Capability | Description | Automation |
|---|---|---|
| **Split Inbox** | AI sorts email into Important, VIP, News, Calendar, Other | UI-only |
| **AI Write** | Drafts replies in your voice (Cmd+J), powered by Grammarly post-acquisition | UI-only |
| **Ask AI** (Business+) | Natural language queries against your inbox ("What did John say about the contract?") | MCP-accessible |
| **Auto Drafts** (Business+) | Pre-generates AI reply drafts before you open an email | UI-only |
| **Auto Labels** (Business+) | Custom AI categorization beyond default Split Inbox categories | UI-only |
| **Read Receipts** | Pixel-based open tracking (blocked by Apple MPP) | UI-only |
| **Recent Opens Feed** (Business+) | See which recipients opened your emails recently | UI-only |
| **Share Availability** | Calendar time-slot sharing for meeting scheduling | UI-only |
| **Shared Conversations** | Team comments on email threads | UI-only |
| **Snooze & Reminders** | Snooze emails to reappear later, follow-up reminders if no reply | UI-only |
| **Keyboard shortcuts** | Full keyboard workflow with Command Palette (Cmd+K) | UI-only |
| **MCP Server** (Business+) | Connect to Claude Code, Claude Desktop, ChatGPT for AI-driven email/calendar management | MCP |

## MCP Server (primary developer surface)

**Requirement**: Business plan ($33+/mo). Enterprise accounts need CSM to enable access.

The Superhuman Mail MCP Server connects AI assistants to your email and calendar. This is the only programmatic interface — there is no REST API.

### Available MCP tools

| Tool | Description |
|---|---|
| `query_email_and_calendar` | Natural language questions about email and calendar data |
| `list_threads` | Search email threads with structured filters (sender, date, labels) |
| `create_or_update_draft` | Create or edit email drafts |
| `create_or_update_event` | Create or update calendar events |

### Setup for Claude Code

Add to your MCP configuration (`.mcp.json` or Claude Code settings):

```json
{
  "mcpServers": {
    "superhuman": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/claude-code-mcp-superhuman"]
    }
  }
}
```

*Note: The exact package name may differ — check Superhuman's help center for current setup instructions. Enterprise accounts must have CSM enable MCP first.*

### What the MCP server can do

- Search emails by sender, date, subject, or natural language query
- Draft replies in your voice and tone
- Send emails (requires explicit approval in Claude Code)
- Create and update calendar events
- Find availability for meeting scheduling
- Summarize important emails and tasks

### What the MCP server cannot do

- Manage Split Inbox categories
- Configure Auto Labels or Auto Drafts
- Access read receipt / open tracking data
- Manage team settings or shared conversations
- Access CRM integration data

### Unofficial MCP: superhuman-cli

Community-built alternative: `edwinhu/superhuman-cli` on GitHub. Not officially supported by Superhuman. Use at your own risk.

## Pricing, limits & plan gates

<!-- Pricing as of 2026-04 — verify at superhuman.com/plans -->

| Plan | Annual billing | Monthly billing | Key features |
|---|---|---|---|
| **Starter** | $25/user/mo | $30/user/mo | Split Inbox, AI Write, Snooze, Reminders, Share Availability, Team Comments |
| **Business** | $33/user/mo | $40/user/mo | Everything in Starter + Ask AI, Auto Drafts, Auto Labels, CRM integrations, MCP Server, Recent Opens Feed |
| **Enterprise** | Custom | Custom | Everything in Business + SSO/SAML, SCIM, audit logs, BYOK encryption, dedicated support |

**Plan gates that affect workflows:**
- **MCP Server (Business+)**: The only automation surface. Starter users cannot connect to Claude Code.
- **Ask AI (Business+)**: Natural language inbox queries. Critical for power users.
- **Auto Drafts (Business+)**: AI pre-generates reply drafts. Starter users must manually trigger AI Write.
- **Auto Labels (Business+)**: Custom categorization. Starter gets default Split Inbox only.
- **CRM integrations (Business+)**: Salesforce, HubSpot, Pipedrive. No CRM support on Starter.
- **Recent Opens Feed (Business+)**: Real-time view of who opened your emails.
- **SSO/SCIM/BYOK (Enterprise)**: Required for managed IT deployments.

**Free trial**: 7-day trial available. No free tier.

**Referral program**: Personal referral links — both parties get 1 free month. Copy via Cmd+K → "Copy Referral Link". Partner program at superhuman.com/partners (referral, reseller, OEM, technology).

## Keyboard shortcuts (core experience)

Superhuman's keyboard-driven workflow is its primary differentiator:

| Shortcut | Action |
|---|---|
| `Cmd+K` | Command Palette (search any action) |
| `E` | Archive / Done |
| `H` | Snooze |
| `R` | Reply |
| `A` | Reply All |
| `C` | Compose |
| `J` / `K` | Next / Previous email |
| `Cmd+J` | AI Write (trigger AI draft) |
| `Cmd+Shift+I` | Switch between Split Inbox categories |
| `/` | Search |
| `Tab` | Next Split Inbox category |

## Integrations

| Integration | Direction | Plan required | Notes |
|---|---|---|---|
| **Gmail** | Bidirectional | All | OAuth 2.0, reads inbox/sent/drafts, sends |
| **Outlook / M365** | Bidirectional | All | Microsoft Graph API |
| **Google Calendar** | Bidirectional | All | Via Gmail OAuth — events, availability |
| **Outlook Calendar** | Bidirectional | All | Via Microsoft Graph |
| **Salesforce** | Bidirectional | Business+ | Contact/activity sync |
| **HubSpot** | Bidirectional | Business+ | Contact/activity sync |
| **Pipedrive** | Bidirectional | Business+ | Contact/activity sync |
| **Grammarly** | Embedded | All | Writing assistance built into AI Write post-acquisition |
| **Coda** | Bundled | All | Workspace/docs — part of Superhuman Suite |
| **Superhuman Go** | Bundled | All | Proactive AI assistant across apps |

**Not supported**: Apple Mail, Zapier triggers, Make, n8n, webhooks, REST API, any other CRM beyond the three listed.

## Data model

Superhuman has no public API, so no formal data model. The MCP server exposes:

**Email threads** (via `list_threads` / `query_email_and_calendar`):
```json
{
  "thread_id": "...",
  "subject": "Re: Q3 proposal",
  "participants": ["alice@example.com", "bob@example.com"],
  "snippet": "Thanks for sending the proposal...",
  "date": "2026-04-25T10:30:00Z",
  "labels": ["Important"],
  "unread": true
}
```

**Calendar events** (via `create_or_update_event`):
```json
{
  "event_id": "...",
  "title": "Sales sync",
  "start": "2026-04-26T14:00:00Z",
  "end": "2026-04-26T14:30:00Z",
  "attendees": ["alice@example.com"],
  "location": "https://meet.google.com/..."
}
```

*Note: These are representative shapes based on MCP tool descriptions. Exact schemas may vary — the MCP server returns structured data that the AI model interprets.*

## Quick-start recipes

### Recipe 1: Set up Superhuman MCP with Claude Code

1. Ensure you're on Business plan ($33+/mo)
2. For Enterprise: contact your CSM to enable MCP Server access
3. In Claude Code, add MCP server configuration (see MCP Server section above)
4. Test: ask Claude "What emails did I get today?" — should query via `query_email_and_calendar`
5. Try: "Draft a reply to the latest email from [name]" — uses `create_or_update_draft`

### Recipe 2: Daily inbox summary via Claude Code

```
You: "Summarize my inbox from the last 24 hours — group by priority"
```

Claude Code uses `query_email_and_calendar` to fetch recent threads, then groups them:
- **Needs reply**: Emails from known contacts awaiting response
- **FYI**: Newsletters, notifications, updates
- **Calendar**: Upcoming meetings and scheduling requests

### Recipe 3: AI-powered meeting prep

```
You: "I have a meeting with Sarah Chen at 2pm — find all recent email threads with her and summarize the context"
```

Claude Code uses `list_threads` to find Sarah's emails, `query_email_and_calendar` to check meeting details, then produces a prep brief.

## Integration patterns

### CRM sync (Business+ only)

Superhuman syncs email activity with Salesforce, HubSpot, or Pipedrive. The sync:
- Logs sent/received emails as activities on CRM contacts
- Matches by email address
- Runs in the background (no manual trigger needed)
- Does NOT sync calendar events, deals, or custom fields

**Workaround for unsupported CRMs** (Attio, Close, etc.): Use the MCP server to extract email data via Claude Code, then push to your CRM via its API. No native path exists.

### Email tracking limitations

Read receipts use pixel tracking, which is blocked by:
- Apple Mail Privacy Protection (majority of Apple users)
- Gmail's image proxy (partially)
- Corporate email gateways with image blocking

The Recent Opens Feed (Business+) shows best-effort tracking. Do not rely on it for critical sales workflows — use dedicated email tracking tools for reliability.

## Competitive positioning

| Feature | Superhuman | Fyxer | Shortwave | SaneBox | alfred_ |
|---|---|---|---|---|---|
| Primary focus | Speed + keyboard | AI drafts + meeting notes | AI Gmail client | Inbox filtering | AI exec assistant |
| Inbox organization | Split Inbox | Auto-labels | AI bundles | Smart folders | Auto-triage |
| AI drafting | AI Write + Grammarly | Voice-trained | Ghostwriter | No | Voice-trained |
| Meeting notes | No | Built-in | No | No | No |
| MCP server | Yes (Business+) | No | No | No | No |
| CRM integration | SF/HubSpot/Pipedrive | HubSpot only | No | No | No |
| API/webhooks | MCP only | None | None | None | None |
| Starting price | $25/mo | $22.50/mo | $7/mo | $7/mo | $24.99/mo |
| Free plan | Trial only | Trial only | Trial only | Trial only | No |
| Calendar | Read/write | Read-only | No | No | Read/write |
| Keyboard workflow | Core experience | No | Basic | No | No |

## Security & compliance

- Now part of Grammarly — inherits Grammarly's security posture
- SOC 2 Type II (Grammarly)
- HIPAA available on Enterprise
- GDPR compliant
- BYOK encryption (Enterprise only)
- SAML SSO + SCIM provisioning (Enterprise only)
- Audit logs (Enterprise only)
- OAuth 2.0 for all email connections
