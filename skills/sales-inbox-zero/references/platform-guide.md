# Inbox Zero Platform Reference

## Overview

Open-source AI email assistant (10.6K GitHub stars) that auto-labels, drafts replies in your voice, blocks cold emails, bulk unsubscribes, and lets you write automation rules in plain English. Works with Gmail and Outlook. Self-hostable via Docker. SOC 2 Type 2 certified.

## Capabilities & automation surface

| Capability | Description | Surface |
|---|---|---|
| AI auto-labeling | Categorizes incoming emails by priority/type | UI + rules via API |
| Reply drafting | Generates drafts in your voice from sent email history | UI-only |
| Automation rules | Plain-English rules (label, archive, draft, forward) | API + CLI + UI |
| Bulk unsubscribe | One-click newsletter removal | UI-only |
| Cold email blocking | AI-powered unsolicited email filter | UI-only |
| Email analytics | Communication patterns, response times, volume | API + CLI + UI |
| Attachment filing | Auto-save PDFs/docs to Google Drive or OneDrive | UI-only (Plus+) |
| Meeting briefings | Pre-meeting context from email + calendar | UI-only |
| Slack/Telegram digest | Email summaries pushed to messaging apps | UI-only (Plus+) |
| Bulk archive | Mass archive old emails matching criteria | UI-only |

## Pricing, limits & plan gates

| Feature | Starter $18/mo | Plus $28/mo | Professional $42/mo |
|---|---|---|---|
| Email accounts | 1 | 2 | 2+ (team) |
| AI labeling & drafts | Yes | Yes | Yes |
| Cold email blocking | Yes | Yes | Yes |
| Bulk unsubscribe | Yes | Yes | Yes |
| Analytics | Basic | Full | Team-wide |
| Slack integration | No | Yes | Yes |
| Telegram integration | No | Yes | Yes |
| Attachment filing | No | Yes | Yes |
| Knowledge base | No | Unlimited | Unlimited |
| Email digests | No | Yes | Yes |
| Priority support | No | No | Yes |
| Dedicated onboarding | No | No | Yes |

- Annual billing saves ~20% (Starter $20 → $18, Plus $35 → $28, Professional $50 → $42)
- 7-day free trial on all plans, 14-day money-back guarantee
- Student/nonprofit/open-source discounts available (email them)
- Enterprise: custom pricing for SSO, on-premise, dedicated account manager
- **Self-hosted: free** — BYO infrastructure (Docker + PostgreSQL + Google Cloud for PubSub)
- API access included on all paid plans; self-hosted requires `NEXT_PUBLIC_EXTERNAL_API_ENABLED=true`

## Integrations

| Integration | Direction | Plan required |
|---|---|---|
| Gmail | Bidirectional (read/label/archive/draft) | All |
| Outlook | Bidirectional | All |
| Google Drive | Write (attachment filing) | Plus+ |
| OneDrive | Write (attachment filing) | Plus+ |
| Google Calendar | Read (meeting context for drafts) | All |
| Slack | Write (email digests) | Plus+ |
| Telegram | Write (email digests) | Plus+ |
| Microsoft Teams | Write (coming soon) | TBD |

**No Zapier/Make/iPaaS.** The only programmatic interfaces are the REST API and CLI.

## Data model

### Automation Rule

<!-- Constructed from docs + CLI output — verify against live API -->
```json
{
  "id": "rule_abc123",
  "name": "Label client emails as Priority",
  "instructions": "If the email is from a client domain (@acme.com, @bigco.io), label it Priority and draft a brief acknowledgment",
  "actions": [
    {
      "type": "LABEL",
      "label": "Priority"
    },
    {
      "type": "DRAFT_EMAIL"
    }
  ],
  "enabled": true,
  "automate": false,
  "runOnThreads": false,
  "createdAt": "2026-04-20T10:30:00Z",
  "updatedAt": "2026-04-20T10:30:00Z"
}
```

### Analytics Period

<!-- Constructed from CLI output description — verify against live API -->
```json
{
  "period": "week",
  "emailsReceived": 342,
  "emailsSent": 87,
  "emailsArchived": 215,
  "averageResponseTimeMinutes": 45,
  "topSenders": [
    { "email": "jane@acme.com", "count": 28 },
    { "email": "alerts@github.com", "count": 19 }
  ]
}
```

## Quick-start recipes

### Recipe 1: List and create rules via CLI

**Use case:** Manage email automation rules from Claude Code or any AI coding agent.

```bash
# Install CLI
npm install -g @inbox-zero/api

# Authenticate
export INBOX_ZERO_API_KEY=iz_your_key_here

# List all rules as JSON
npx inbox-zero rules list --json

# Create a new rule from stdin
echo '{
  "name": "Archive marketing emails",
  "instructions": "If the email is a marketing newsletter and I have not replied to this sender in the last 30 days, archive it and add the label Newsletters"
}' | npx inbox-zero rules create

# Get inbox stats for the past week
npx inbox-zero stats by-period --period week --json
```

**Gotcha:** The CLI requires an API key from Settings → API Keys in the Inbox Zero dashboard. Self-hosted users must set `NEXT_PUBLIC_EXTERNAL_API_ENABLED=true`.

### Recipe 2: Manage rules via REST API

**Use case:** Programmatically CRUD automation rules from your own app or script.

```bash
# List all rules
curl -H "API-Key: iz_your_key" \
  https://www.getinboxzero.com/api/v1/rules

# Create a rule
curl -X POST -H "API-Key: iz_your_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Flag urgent client emails",
    "instructions": "If subject contains URGENT and sender is from a known client domain, label as Urgent and draft a quick acknowledgment"
  }' \
  https://www.getinboxzero.com/api/v1/rules

# Delete a rule
curl -X DELETE -H "API-Key: iz_your_key" \
  https://www.getinboxzero.com/api/v1/rules/rule_abc123
```

**Self-hosted base URL:** Replace `https://www.getinboxzero.com` with your deployment URL.

### Recipe 3: Self-hosted deployment with Docker

**Use case:** Run Inbox Zero for free on your own infrastructure.

```bash
# Install CLI (requires Docker + Node.js v24+)
npm install -g @inbox-zero/cli

# Interactive setup (configures OAuth, database, PubSub)
npx @inbox-zero/cli setup

# Start the application
npx @inbox-zero/cli start

# Access at http://localhost:3000
```

**Prerequisites:**
- Docker running
- Node.js v24+
- Google Cloud project with Gmail API + PubSub API enabled
- OAuth 2.0 credentials (client ID + secret)
- PostgreSQL database (Docker Compose includes one)

**Common failure:** Missing `GOOGLE_PUBSUB_TOPIC_NAME` env var — Gmail push notifications won't work without it.

## Integration patterns

### AI agent integration (Claude Code / Codex)

The CLI is designed for AI agent consumption — all commands support `--json` output:

1. Agent reads rules: `npx inbox-zero rules list --json`
2. Agent analyzes inbox stats: `npx inbox-zero stats by-period --period day --json`
3. Agent creates/modifies rules based on user request
4. Agent confirms changes by re-reading rules

The CLI is also available as an OpenClaw skill for broader agent platforms.

### REST API integration

- **Auth:** `API-Key: iz_...` header on every request
- **Base URL:** `https://www.getinboxzero.com/api/v1` (hosted) or `https://your-domain.com/api/v1` (self-hosted)
- **Endpoints:** Rules CRUD (`/rules`), analytics (`/stats`), learned patterns (`/group-emails`)
- **Format:** JSON request/response
- **Rate limits:** Not publicly documented — treat as standard SaaS (respect 429 responses, exponential backoff)
- **Pagination:** Not documented — likely offset-based for list endpoints

### Webhook / push notifications (self-hosted only)

Self-hosted deployments use Google PubSub for real-time Gmail notifications:
1. Gmail detects new email → pushes to PubSub topic
2. PubSub delivers to Inbox Zero's webhook endpoint
3. Rule engine evaluates the email against all enabled rules
4. Actions execute (label, archive, draft, etc.)

The hosted version handles this automatically — no user configuration needed.
