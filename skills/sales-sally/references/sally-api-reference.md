<!-- Source: https://help.sally.io/guides/integration-and-automation/sally-mcp -->
<!-- Source: https://help.sally.io/news/2026-04-23-mcp/ -->

# Sally AI API Reference

## API surface

Sally does not expose a traditional REST API with CRUD endpoints. The primary programmatic interface is the **MCP (Model Context Protocol) connector**, which provides read-only access to meeting data for AI assistants.

For write operations and workflow automation, Sally relies on **iPaaS platforms** (Zapier, Make, Power Automate, n8n) and **native integrations** (CRM, project management, collaboration tools).

## MCP connector

### Endpoint
```
https://app.sally.io/api/v1/McpExternal
```

### Authentication
- **Method**: Bearer token (Personal Access Token)
- **Token format**: `sally_pat_...`
- **Scope**: Read-only, scoped to one user + one company account
- **Visibility**: Only recordings the user owns, is the technical appointment owner of, or has access to via shared folders/team membership

### Create a token
1. Log into Sally at `app.sally.io`
2. Navigate to Settings → Integrations → Sally MCP
3. Click "Create Token"
4. Set name and expiration (30 days to never)
5. Copy immediately — clear-text cannot be viewed again

### Client configuration

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

Compatible clients: Claude Desktop, Claude Web, ChatGPT, Cursor, Windsurf, Zed, VS Code, custom MCP SDK agents.

For legacy stdio-only clients, use the `mcp-remote` proxy (Node.js 18+):
```bash
npx mcp-remote https://app.sally.io/api/v1/McpExternal --header "Authorization: Bearer sally_pat_YOUR_TOKEN"
```

### Available MCP tools

#### `search_appointments`
Filter meetings by subject, attendee, or timeframe. Supports full-text prefix matching.

**Example query**: "Find all meetings with john@company.com in the last 2 weeks"

#### `search_summaries`
Full-text search across meeting summaries to locate discussions of specific topics.

**Example query**: "Find meetings where we discussed the Q2 pricing strategy"

#### `get_recordings`
Paginated list of accessible recordings with metadata (subject, date, attendees, duration).

#### `get_summary`
Retrieve the AI-generated summary for a specific recording. Includes:
- Key facts
- Decisions made
- Action items (with assignees and due dates)

#### `get_transcription`
Full transcript with timestamps as plain text.

**Response format**:
```
[00:00:15] Alice: Let's start with pipeline updates.
[00:00:22] Bob: We closed two deals last week, total ARR $180K.
```

### Security guidance
- Treat tokens like passwords — store in a password manager
- Use one token per client for granular revocation control
- Tokens can be regenerated or revoked immediately in Settings → Integrations → Sally MCP
- Never share tokens via messaging or email

## iPaaS surface

### Zapier
Sally has a Zapier integration for workflow automation. Available triggers and actions should be checked in the Zapier app directory as the specific inventory is not publicly documented.

### Make (Integromat)
Sally modules available for Make workflows. Check the Make app directory for current trigger/action inventory.

### Power Automate
Microsoft Power Automate integration for Microsoft ecosystem workflows.

### n8n
Self-hosted workflow automation via n8n integration.

## Native integrations

### CRM integrations (outbound — pushes meeting data)
- HubSpot
- Salesforce
- Microsoft Dynamics 365
- Pipedrive
- Zoho
- Odoo
- Bitrix24

### Project management (outbound — pushes tasks/summaries)
- Asana, Monday.com, Trello, Notion, Jira, Confluence, ClickUp, Azure DevOps

### Collaboration (outbound — posts summaries)
- Slack, Microsoft Teams

## Gaps

- No REST API for CRUD operations (create meetings, update action items, delete recordings)
- No webhook subscription endpoint (cannot receive real-time events programmatically)
- No documented rate limits for MCP tools
- iPaaS trigger/action inventory not publicly documented — must check within each iPaaS platform
- No API for managing custom vocabulary, meeting types, or team settings
- No bulk export API for historical meeting data
