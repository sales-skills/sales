<!-- Source: https://docs.meetjamie.ai/llms-full.txt (full docs JS-rendered, extracted from LLM-optimized index) -->
<!-- Last fetched: 2026-04-17 -->

# Jamie API Reference

## Authentication & API Access

Jamie provides programmatic access through REST APIs with two key types:

- **Personal API Keys** (`/v1/me/` routes): Access your own meetings plus shared ones. Supports full-text search and tag management.
- **Workspace Keys** (`/v1/workspace/` routes): Requires admin creation; accesses all workspace meetings and enables user-email filtering.

Both use simple header authentication: `x-api-key: jk_your_key`. Rate limits are 100 requests/minute per user (personal) or workspace (workspace key).

API key generation: Jamie app → Settings → Developers → API Keys. All keys start with the `jk_` prefix. API access requires a Pro, Team, or Enterprise plan.

## Core API Endpoints

**Meetings:**
- List, fetch, search, and delete meetings
- Retrieve summaries (Markdown/HTML formats), full transcripts, participants, tasks, tags, and calendar event details

**Tasks:**
- Query action items extracted from meetings
- Filter by completion status, date range, assignee, or specific meeting

**Tags:**
- List your available tags (personal keys only)
- Filter meetings by tag in list operations

## Webhook Integration

Webhooks enable real-time notifications when meetings complete. Configuration requires:

- HTTPS endpoint (HTTP unsupported)
- Plus plan or higher
- Choice between **API Key** authentication or **HMAC-SHA256 signature verification**

The `meeting.completed` event delivers summary, transcript, participants, tasks, and calendar attendee data.

### Webhook headers

Webhook requests include:
- Content type header
- User agent header
- Event type identifier
- Delivery identifier
- Authentication header (API key or HMAC signature depending on configuration)

### Authentication methods

**API Key**: Jamie sends a static API key in a header of your choice. Common header names: `x-jamie-api-key`, `x-make-apikey`, `Authorization`.

**HMAC-SHA256**: Jamie signs each request with HMAC-SHA256. The signature is sent in the `x-jamie-signature` header. For maximum security, use this method and verify the signature on your receiving endpoint.

### Delivery behavior

- Timeout: 30 seconds
- Success: requires 2xx HTTP status code
- Retries: automatic exponential backoff (up to 5 attempts)
- Failure notifications: admin notifications rate-limited to 1/hour per endpoint

### Webhook management

- Create: Jamie Settings → Integrations → Webhooks → Create Webhook
- URL and events cannot be updated after creation — delete and recreate if changes needed
- Regenerating the signing secret immediately invalidates the old one — update your receiving endpoint first
- Selected events are immutable after webhook creation

## Enterprise Features

- **SSO**: Microsoft Entra ID and Google Workspace supported
- **Team Sharing**: Share full meetings with workspace members
- **Admin Controls**: System-level access restrictions, verified domain management
- **Integrations**: CRM (HubSpot, Salesforce, Attio), note-taking (Notion, Google Docs, OneNote), task management (Asana), and AI tools via MCP protocol

## MCP Server

Community-built MCP server: `vicampuzano-jamie-mcp`

Installation: `npx -y vicampuzano-jamie-mcp`
Environment variable: `JAMIE_API_KEY=jk_your_key`
Requirements: Pro, Team, or Enterprise plan

Capabilities: List meetings, read summaries/transcripts, search across meetings, manage tasks.
