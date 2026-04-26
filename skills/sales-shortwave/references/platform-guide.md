# Shortwave Platform Reference

## Overview

Shortwave is an AI-native Gmail client built by ex-Googlers as a spiritual successor to Google Inbox. It replaces the default Gmail experience with natural language search, plain-English AI automation filters, voice-learning Ghostwriter drafts, and split inbox organization. Gmail only — no Outlook or IMAP. Targets knowledge workers and teams who want AI-first email without switching email providers.

## Capabilities & automation surface

| Capability | Description | Automation |
|---|---|---|
| **AI Search** | Natural language queries across inbox ("What did Sarah say about the contract?") | UI-only |
| **AI Filters** | Plain-English automation rules ("Move newsletters to Newsletter label") | UI-only |
| **Ghostwriter** | AI drafting that learns your voice from sent email history | UI-only |
| **Split Inbox** | Divide inbox into tabs by priority, senders, labels, or custom queries | UI-only |
| **Bundle Triage** | Bulk manage promotions, newsletters, updates in grouped bundles | UI-only |
| **Thread Sharing** | Share email threads with teammates | UI-only |
| **Team Comments** | Private comments on email threads (like Google Docs comments) | UI-only |
| **Link Tracking** | Track clicks on links in sent emails | UI-only |
| **Snippets** | Saved prompts and templates for reuse | UI-only |
| **Calendar** | View schedule, accept/reject invites inline | UI-only |
| **Delivery Scheduling** | Schedule when to receive emails (batch delivery) | UI-only |
| **Read Statuses** | See when recipients read your emails (with timestamps) | UI-only |
| **MCP Consumer** (Business+) | Connect TO external MCP servers (Notion, HubSpot, Slack, etc.) | MCP (consumer) |
| **Tasklet** (separate product) | 24/7 workflow automation — schedule/email/webhook triggers, 3000+ apps, browser automation | Tasklet |

**No public API. No webhooks. No Zapier/Make.** The only programmatic surfaces are MCP consumer (inside Shortwave) and Tasklet (separate product at tasklet.ai).

## MCP Consumer (developer surface)

**Requirement**: Business, Premier, or Max plan. MCP support is in beta.

Shortwave can connect TO external MCP servers — it does NOT expose an MCP server for other tools. This means:
- You can give Shortwave's AI assistant access to Notion, Asana, HubSpot, Zapier, Salesforce data via their MCP servers
- You CANNOT programmatically read/write Shortwave data from Claude Code, ChatGPT, or other tools

### Configuration

**Remote MCP servers**: Add a URL endpoint (e.g., `https://mymcpserver.com/sse`) via Settings → AI Integrations → Add custom integration.

**Local MCP servers** (desktop app only): Specify command, arguments, and optional environment variables. Does not sync across devices.

### Constraints

- **Tool calls only** — resources, prompts, and sampling are not supported
- **Max 40 tools** simultaneously across all connected servers
- **Performance degrades** with many tools connected
- **Beta status** — expect breaking changes
- Local servers don't sync across devices

### Troubleshooting MCP

Log files for diagnostics:
- **Mac**: `~/Library/Logs/Shortwave/main.log`
- **Windows**: `%APPDATA%\Shortwave\logs\main.log`

Filter logs by "mcp" or "mcp-server/<name>" tags.

## Tasklet (sister automation product)

Tasklet (tasklet.ai) is a separate product from Shortwave for workflow automation. It runs 24/7 without user input.

### Trigger types

| Trigger | Description |
|---|---|
| **Schedule** | Daily, weekly, or custom schedule |
| **Email** | When messages arrive or labels are applied |
| **Webhook** | External service events (HTTP POST) |

### Integration methods

| Method | Description |
|---|---|
| **Pre-built integrations** | 3000+ apps (Slack, Calendar, Notion, Asana, HubSpot, etc.) |
| **HTTP API** | Direct API connections with custom API keys |
| **MCP servers** | Connect to custom MCP servers for specialized tools |
| **Browser automation** | Interact with any web service via browser |

### Example automations

- Generate daily briefings from calendar + inbox + tasks
- Auto-respond to support emails by checking a knowledge base
- Monitor news sources and post summaries to Slack
- Summarize daily support threads for team distribution

### Pricing

Tasklet pricing is not publicly documented separately — it launched out of beta in early 2026 and appears to be integrated with Shortwave paid plans.

## Pricing, limits & plan gates

<!-- Pricing as of 2026-04 — verify at shortwave.com/pricing -->

| Plan | Annual billing | Key features |
|---|---|---|
| **Business** | $24/mo | Standard AI intelligence, 3 AI filters, 5-year AI search, 50 threads/search, AI web browsing, attachment analysis, instant AI replies, splits, bundles, link tracking, snippets, thread sharing, team comments |
| **Premier** | $36/mo | Advanced AI intelligence, 2x AI usage, 10 AI filters, unlimited AI search history, 100 threads/search |
| **Max** | $100/mo | Expert AI intelligence, 6x AI usage, 50 AI filters, 150 threads/search, live 1:1 training |
| **Enterprise** | Custom | Advanced integration, compliance, security, support |

**Plan gates that affect workflows:**
- **AI filter count**: Business 3, Premier 10, Max 50. Most impactful limit for automation.
- **AI intelligence level**: Standard (Business) → Advanced (Premier) → Expert (Max). Higher tiers get better AI models.
- **AI search depth**: Business 5-year/50 threads, Premier unlimited/100, Max unlimited/150.
- **MCP consumer** (Business+): All paid plans can connect to external MCP servers.
- **AI usage quotas**: Business ~150-300/day, Premier 2x, Max 6x.

**Free trial**: 14 days, no credit card required. No permanent free tier on current pricing page.

**Note**: Some sources reference lower-priced personal plans ($7-8.50/mo) — these may have been discontinued or are hidden from the main pricing page.

**No affiliate or partner program found.**

## Integrations

| Integration | Direction | Method | Notes |
|---|---|---|---|
| **Gmail / Google Workspace** | Bidirectional | OAuth 2.0 | Only supported email provider |
| **Google Calendar** | Read | Via Gmail OAuth | View schedule, accept/reject invites |
| **Slack** | Via MCP/Tasklet | MCP consumer or Tasklet | Not native — requires MCP server or Tasklet |
| **Notion** | Via MCP/Tasklet | MCP consumer or Tasklet | Not native |
| **Asana** | Via MCP/Tasklet | MCP consumer or Tasklet | Not native |
| **HubSpot** | Via MCP/Tasklet | MCP consumer or Tasklet | Not native — no built-in CRM connector |
| **Tasklet** (3000+ apps) | Via Tasklet | Separate product | Webhook/schedule/email triggers |

**Not supported**: Outlook, Apple Mail, Yahoo, IMAP, Salesforce (native), Zapier triggers, Make modules, webhooks, REST API.

## Data model

Shortwave has no public API, so no formal data model. User-visible objects:

**Splits** (inbox tabs):
```json
{
  "split_name": "Important",
  "query": "is:important OR from:vip-list",
  "unread_count": 12
}
```
<!-- Constructed from docs — verify against live app -->

**AI Filters** (plain English automation):
```json
{
  "filter_name": "Newsletter sorter",
  "rule": "Move newsletters and marketing emails to a Newsletter label",
  "enabled": true
}
```
<!-- Constructed from docs — verify against live app -->

**Bundles** (grouped emails):
```json
{
  "bundle_name": "GitHub Notifications",
  "thread_count": 8,
  "actions": ["archive_all", "mark_read", "snooze"]
}
```
<!-- Constructed from docs — verify against live app -->

**Snippets** (saved prompts):
```json
{
  "snippet_name": "Follow-up template",
  "content": "Thanks for your time today. As discussed, here are the next steps...",
  "shortcut": "/followup"
}
```
<!-- Constructed from docs — verify against live app -->

## Quick-start recipes

Since Shortwave has no API, these are workflow recipes rather than code recipes.

### Recipe 1: Set up Shortwave for Gmail

1. Go to shortwave.com → Start free trial (14 days, no CC)
2. Connect Gmail account (OAuth consent — grants inbox + calendar permissions)
3. Wait for initial inbox scan (may take a few minutes for large inboxes)
4. Set up Splits: Settings → Splits → Create custom tabs (e.g., "Clients", "Team", "Newsletters")
5. Create AI filters: Settings → AI Filters → Write rules in plain English
6. Test Ghostwriter: Open any email → click Reply → review AI draft → edit and send

### Recipe 2: Connect an MCP server for tool integration

1. Ensure you're on Business ($24/mo) or higher
2. Open Shortwave desktop app → Settings → AI Integrations
3. Click "Add custom integration"
4. For remote server: enter the MCP server URL (e.g., `https://notion-mcp.example.com/sse`)
5. For local server: enter command (e.g., `npx`), args (e.g., `["-y", "@modelcontextprotocol/server-notion"]`), and env vars
6. Toggle activation → look for green status indicator
7. Test: Ask Shortwave's AI assistant a question that requires the connected tool's data

### Recipe 3: Set up Tasklet for daily inbox briefing

1. Go to tasklet.ai → sign in with your Shortwave account
2. Create new automation → select "Schedule" trigger → set to daily at 7 AM
3. Add steps: read today's calendar events, scan inbox for unread threads, check task manager
4. Configure output: post summary to Slack channel or email digest
5. Enable and test — check Tasklet dashboard for execution logs if it doesn't fire

## Integration patterns

### Cross-tool data flow (via MCP consumer)

Since Shortwave can connect TO MCP servers, the AI assistant can:
- Pull CRM context from HubSpot/Salesforce MCP servers when drafting replies
- Reference Notion docs or Asana tasks while composing emails
- Access Slack conversation history for context

Architecture: External Tool → MCP Server → Shortwave AI Assistant → Email draft

**Key limitation**: Data flows INTO Shortwave only. You cannot extract Shortwave data outward via MCP — there is no Shortwave MCP server.

### Tasklet automation patterns

For automations that need to act on email events:
- **Inbound trigger**: Email arrives → Tasklet processes → posts to Slack / creates task / updates CRM
- **Scheduled trigger**: Daily/weekly → Tasklet scans inbox → generates digest → sends summary
- **Webhook trigger**: External event → Tasklet receives webhook → drafts reply or updates label

### Workaround for CRM sync

Shortwave has no native CRM integration. Options:
1. **MCP consumer**: Connect CRM's MCP server so Shortwave AI can read CRM data when drafting
2. **Tasklet**: Set up email→CRM automations via Tasklet's pre-built integrations
3. **Auto-BCC**: Configure Gmail auto-BCC to forward copies to CRM's email logging address
4. **Manual**: Copy relevant info between Shortwave and CRM

## Competitive positioning

| Feature | Shortwave | Superhuman | Fyxer | SaneBox | alfred_ |
|---|---|---|---|---|---|
| Primary focus | AI-first Gmail client | Speed + keyboard workflow | AI drafts + meeting notes | Inbox filtering | AI exec assistant |
| Inbox organization | AI filters + splits + bundles | Split Inbox | Auto-labels | Smart folders | Auto-triage |
| AI drafting | Ghostwriter (voice-learning) | AI Write + Grammarly | Voice-trained | No | Voice-trained |
| AI search | Natural language, 5yr+ history | Ask AI (Business+) | Fyxer Chat (Professional+) | No | No |
| Meeting notes | No | No | Built-in | No | No |
| MCP | Consumer (connects TO servers) | Server (tools connect TO it) | None | None | None |
| CRM integration | None native (via MCP/Tasklet) | SF/HubSpot/Pipedrive | HubSpot only | No | No |
| Email providers | Gmail only | Gmail, Outlook | Gmail, Outlook | Any provider | Gmail, Outlook |
| Calendar | Read-only (view + accept/reject) | Read/write | Read-only | No | Read/write |
| Starting price | $24/mo | $25/mo | $22.50/mo | $7/mo | $24.99/mo |
| Free plan | 14-day trial | 7-day trial | Trial (CC required) | Trial | No |
| Keyboard workflow | Basic | Core experience (100+ shortcuts) | No | No | No |
| Tasklet/automation | Yes (separate product) | No | No | No | No |

## Security & compliance

- CASA Tier 2 compliance certification
- Image proxy and tracking pixel blocking (privacy mode)
- OAuth 2.0 for Gmail connections
- Enterprise plan: advanced compliance and security (details require contacting sales)
- Founded by ex-Googlers — emphasis on Google Workspace ecosystem security
