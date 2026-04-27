<!-- Source: https://docs.getinboxzero.com/api-reference/introduction + https://www.getinboxzero.com/cli -->

# Inbox Zero API Reference

## Authentication

Include your API key in the header of each request:

```
API-Key: iz_your_key_here
```

Generate API keys from: Inbox Zero dashboard → Settings → API Keys. Select desired permissions and expiry period.

## Base URL

**Hosted:** `https://www.getinboxzero.com/api/v1`
**Self-hosted:** `https://your-domain.com/api/v1` (requires `NEXT_PUBLIC_EXTERNAL_API_ENABLED=true`)

## Supported Providers

- Gmail (Google Workspace and personal)
- Outlook (Microsoft 365 and personal)

## Endpoints

### Rules

| Method | Path | Description |
|---|---|---|
| GET | `/rules` | List automation rules for the scoped inbox account |
| POST | `/rules` | Create an automation rule |
| PUT | `/rules/{id}` | Replace an automation rule |
| DELETE | `/rules/{id}` | Delete an automation rule |

#### List rules

```bash
curl -H "API-Key: iz_your_key" \
  https://www.getinboxzero.com/api/v1/rules
```

<!-- Constructed from docs — verify against live API -->
```json
{
  "rules": [
    {
      "id": "rule_abc123",
      "name": "Label client emails",
      "instructions": "If the email is from @acme.com, label as Priority",
      "actions": [{"type": "LABEL", "label": "Priority"}],
      "enabled": true,
      "automate": false,
      "runOnThreads": false,
      "createdAt": "2026-04-20T10:30:00Z",
      "updatedAt": "2026-04-20T10:30:00Z"
    }
  ]
}
```

#### Create rule

```bash
curl -X POST -H "API-Key: iz_your_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Archive newsletters",
    "instructions": "If the email is a newsletter I have not read in 30 days, archive it"
  }' \
  https://www.getinboxzero.com/api/v1/rules
```

#### Delete rule

```bash
curl -X DELETE -H "API-Key: iz_your_key" \
  https://www.getinboxzero.com/api/v1/rules/rule_abc123
```

### Analytics

| Method | Path | Description |
|---|---|---|
| GET | `/stats` | Get email analytics by time period |

#### Get stats

```bash
curl -H "API-Key: iz_your_key" \
  "https://www.getinboxzero.com/api/v1/stats?period=week"
```

### Learned Patterns

| Method | Path | Description |
|---|---|---|
| GET | `/group-emails` | Get learned email pattern groups |

## CLI Wrapper

The CLI wraps the REST API with JSON-first output for AI agent consumption.

```bash
# Install
npm install -g @inbox-zero/api

# Authenticate
export INBOX_ZERO_API_KEY=iz_your_key

# Commands
npx inbox-zero rules list [--json]       # List all rules
npx inbox-zero rules get <id>            # Get rule by ID
npx inbox-zero rules create              # Create from stdin JSON
npx inbox-zero stats by-period [--period day|week|month|year] [--json]
npx inbox-zero config                    # Manage CLI settings
npx inbox-zero openapi [--json]          # Fetch live OpenAPI schema
```

## Gaps

- Individual endpoint request/response schemas not fetchable (docs are JS-rendered)
- Pagination pattern not documented
- Rate limits not documented — treat as standard SaaS, respect 429 responses
- No webhook/callback support for rule execution events
- No email read/send/archive endpoints — API is limited to rules management and analytics
- OpenAPI spec available via `npx inbox-zero openapi --json` but not hosted at a static URL
