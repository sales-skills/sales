<!-- Source: https://developers.fellow.ai/reference + https://help.fellow.ai/en/articles/11817206-developer-api + https://fellow.ai/features/api -->
<!-- Note: Full endpoint reference could not be fetched (JS-rendered docs site). This file contains all publicly available API information from help articles and marketing pages. -->

# Fellow Developer API Reference

## Overview

Fellow captures everything from before, during, and after your meetings. The Developer API opens that data: transcripts, structured notes, agendas, action items — all available through standard REST calls.

**Project**: Fellow Developer API
**Version**: 1.0
**Docs URL**: https://developers.fellow.ai/reference
**OpenAPI spec**: `openapi-combined.json` (referenced in docs site config)

## Authentication

### API Key
- **Type**: API Key
- **Header**: `Authorization` (also accepts `X-API-KEY` per OpenAPI spec)
- **Base URL**: `https://{your-fellow-subdomain}.fellow.ai/` (subdomain is a server variable)

### Key management
1. Admin enables Developer API in **Workspace Settings > Security**
2. Each developer creates a personal key in **User Settings > Developer Tools**
3. API key is shown only once at creation — copy immediately
4. Create a new key for every application for granular access control
5. Admins can view key metadata: name, owner email, status, creation date, last usage
6. Users can disable or delete their own keys
7. Disabling or deleting a user in the workspace automatically disables their API keys

### Access control
- The API only provides access to data that each user can access directly through Fellow's interface
- API access is scoped strictly to the same access the user has in-app
- No workspace-wide admin key exists — each key is user-scoped

## Plan requirements

- **Free**: No API access
- **Team ($7/user/mo annual)**: API access enabled
- **Business ($15/user/mo annual)**: API + CRM sync + Zapier triggers
- **Enterprise ($25/user/mo annual)**: API + all features

## Available data

API responses contain JSON with:
- Transcript text
- Speaker timestamps
- Agendas (structured items)
- Meeting metadata (participants, timing, etc.)
- AI-generated notes and summaries
- Action items with owners and due dates

## Rate limits

Not publicly documented. Design conservatively — queue API calls and handle `429` responses with exponential backoff.

## Audit logging

- Complete audit logging for up to 90 days
- Real-time API logs page with export capabilities
- IP address logging and request body hashing
- Admin-only access to audit logs
- Supports e-discovery and compliance requirements

## Security

- All requests encrypted over HTTPS
- SOC 2 Type II compliant
- HIPAA and GDPR compliant
- Fellow never trains on customer data

## Zapier integration (alternative to direct API)

Available on Team, Business, and Enterprise plans:
- **Triggers**: New agenda, new AI notes, new transcript
- Supports multi-step automations: summarize with LLM, update CRM, enrich tickets
- 8,000+ downstream app connections
- Some triggers require manual kickoff

## n8n integration

Official Fellow n8n node: `fellowapp/n8n-nodes-fellow` on GitHub.

## MCP Server (third-party)

`github.com/liba2k/fellow-mcp` — local MCP server wrapping the Fellow API. Tools for meeting data, transcripts, summaries, action items, participants.

## Limitations

- API docs site (developers.fellow.ai) is JS-rendered — full endpoint specifications, request/response schemas, and code samples are only available by visiting the live docs
- Rate limits are not publicly documented
- No OAuth flow documented (API key auth only, unlike Fathom/Gong which offer OAuth for multi-tenant apps)
- API key is user-scoped only — no workspace-wide key for team-level pipelines
