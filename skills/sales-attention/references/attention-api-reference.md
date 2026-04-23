<!-- Source: https://docs.attention.com/llms.txt, https://docs.attention.com/api-authentication, https://docs.attention.com/api-reference/openapi.json -->

# Attention API Reference

## Overview

**Base URL**: `https://api.attention.tech/v2`
**OpenAPI Version**: 3.0.1
**API Version**: 1.6.0
**Authentication**: APIKeyHeader — Bearer token in `Authorization` header

```
Authorization: Bearer YOUR_API_KEY
```

## API Key Management

### Obtaining a key
1. Log into https://app.attention.tech
2. Navigate to avatar → Settings → Organization → API Keys (requires Admin permissions)
3. Click "+ Create API Key", provide a descriptive name
4. Copy immediately — key displays only once

### Security best practices
- Use environment variables, never hardcode
- Separate keys per environment (dev/staging/prod)
- Audit usage regularly
- Never commit keys to version control

### Error responses
- `401 Unauthorized` — invalid key, expired key, or missing auth header
- `429 Too Many Requests` — rate limit exceeded, contact account manager for increases

## Endpoints

### API Keys

- `GET /api_keys` — List API keys
- `POST /api_keys` — Create API key
- `DELETE /api_keys` — Delete API key

### Calendar

- `GET /calendar/events` — List calendar events from a specific user (paginated)

### Conversations

- `GET /conversations` — List conversations with filtering (date ranges, participants, teams, status, pagination)
- `GET /conversations/{id}` — Get conversation details (transcription, participants, metadata; customizable includes/excludes via query params)
- `PUT /conversations/{id}` — Update conversation metadata (title, participants, associated metadata)
- `DELETE /conversations/{id}` — Archive conversation
- `PUT /conversations/{id}/change_privacy` — Toggle conversation privacy (private ↔ public)
- `POST /conversations/{id}/media/download` — Generate presigned URL for media file download (organization-level auth only)
- `GET /conversations/upload-url` — Get signed URL for uploading conversation files
- `POST /conversations/import` — Import conversation from external source (Gong, Salesforce, etc.) — creates new conversation and runs through transcription/analysis pipeline
- `GET /conversations/workflow-logs` — Retrieve workflow processing logs

### Email

- `GET /emails` — List emails with filtering
- `GET /email-templates` — List email templates

### Generalized Insights (GI)

- `GET /gi/history` — Retrieve generalized insights history for a user (tracks evolution of insights over time, pagination support)

### Organization Management

- `GET /organizations/users` — List org users (filter by team UUID)
- `POST /organizations/users` — Create user (assign to team with role, returns UUID)
- `PATCH /organizations/users/{userId}` — Update user (name, email, team, role)
- `DELETE /organizations/users/{userId}` — Delete user (permanent, revokes all access)
- `GET /organizations/teams` — List teams
- `POST /organizations/teams` — Create team (optional parent team for hierarchy)
- `PATCH /organizations/teams/{teamId}` — Update team (name, parent assignment)
- `GET /organizations/roles` — List available roles

### SCIM Provisioning (Okta, Azure AD)

- `GET /scim/ServiceProviderConfig` — SCIM capabilities
- `GET /scim/Users` — List users (filter, paginate)
- `GET /scim/Users/{id}` — Get user
- `POST /scim/Users` — Create user
- `PUT /scim/Users/{id}` — Replace user
- `PATCH /scim/Users/{id}` — Partial update user
- `GET /scim/Groups` — List groups (filter, paginate)
- `GET /scim/Groups/{id}` — Get group
- `POST /scim/Groups` — Create group
- `PUT /scim/Groups/{id}` — Replace group
- `PATCH /scim/Groups/{id}` — Partial update group

### Scorecards

- `POST /createScorecardResult` — Create scorecard result for a conversation
- `GET /scorecards/summary` — Retrieve usage statistics for users/teams within a time period
- `GET /scorecards` — List scorecards

### Teams

- `GET /teams` — List all teams (name, UUID, parent team, hierarchy)
- `GET /teams/{id}` — Get team details
- `GET /teams/{id}/members` — List team members (user details + roles)

### Tools

- `POST /ask_attention` — Analyze conversations/prompts for insights (DEPRECATED — use v2)
- `POST /ask_attention/v2` — Analyze conversations/prompts for insights (current)
- `POST /createDeck` — Generate presentation deck from conversations/deals
- `POST /snippets` — Create shareable conversation snippet
- `POST /changeConversationOpportunity` — Link conversation to CRM opportunity
- `GET /connection-report` — Show which users have connected calendar/email (no params)
- `GET /usage-report` — Usage statistics for users/teams within time period

### Users

- `GET /users` — List users (filter by id, email, team UUID)

## Response formats

Supports `application/json` and `application/vnd.api+json`.

## Code examples

### cURL
```bash
curl https://api.attention.tech/v2/conversations \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Python
```python
import requests

headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get("https://api.attention.tech/v2/conversations", headers=headers)
```

### Node.js
```javascript
const response = await fetch("https://api.attention.tech/v2/conversations", {
  headers: { "Authorization": "Bearer YOUR_API_KEY" }
});
```

## MCP Server

Official MCP server for Claude, ChatGPT, and other AI assistants.

- GitHub: https://github.com/highgravitas/attention-mcp
- Docs: https://docs.attention.com/attention-mcp-server.md
- Capabilities: Search calls, analyze deals, review scorecards, surface coaching insights via natural language

## Workflow Builder API

Workflows can be configured via the UI (docs.attention.com/builder-101/):
- **Triggers**: After call ends, on schedule, Attention-specific triggers
- **Action steps**: CRM update, email, Slack, webhook, custom
- **Monitoring**: Workflow run logs for debugging

## Documentation index

Full docs at https://docs.attention.com. OpenAPI spec at https://docs.attention.com/api-reference/openapi.json.
