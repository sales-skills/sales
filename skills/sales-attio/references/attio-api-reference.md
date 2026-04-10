# Attio API Reference

Quick reference for the Attio REST API. For full documentation, see [docs.attio.com](https://docs.attio.com/).

## Authentication

| Detail | Value |
|---|---|
| Method | OAuth 2.0 / API key (Bearer token) |
| Header | `Authorization: Bearer {access_token}` |
| API key generation | Workspace Settings → Developers → Create integration → Generate token |
| OAuth endpoints | Authorization, token, and introspection endpoints available |

## Base URL

```
https://api.attio.com/v2
```

## Rate Limits

| Operation | Limit |
|---|---|
| Read requests | 100/second |
| Write requests | 25/second |
| Over limit response | HTTP 429 with `Retry-After` header |

## Core Endpoints

### Records (People, Companies, Deals, Custom Objects)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/objects/{object}/records/query` | Search/filter records |
| POST | `/objects/{object}/records` | Create a record |
| GET | `/objects/{object}/records/{record_id}` | Get a record |
| PATCH | `/objects/{object}/records/{record_id}` | Update a record |
| DELETE | `/objects/{object}/records/{record_id}` | Delete a record |

### Objects

| Method | Endpoint | Description |
|---|---|---|
| GET | `/objects` | List all objects |
| GET | `/objects/{object}` | Get object schema |
| POST | `/objects` | Create custom object |
| PATCH | `/objects/{object}` | Update object |

### Attributes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/objects/{object}/attributes` | List attributes |
| POST | `/objects/{object}/attributes` | Create attribute |
| PATCH | `/objects/{object}/attributes/{attribute}` | Update attribute |

### Lists

| Method | Endpoint | Description |
|---|---|---|
| GET | `/lists` | List all lists |
| GET | `/lists/{list}` | Get list details |
| POST | `/lists/{list}/entries/query` | Query list entries |
| POST | `/lists/{list}/entries` | Add entry to list |

### Notes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | List notes |
| POST | `/notes` | Create note |
| DELETE | `/notes/{note_id}` | Delete note |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | List tasks |
| POST | `/tasks` | Create task |
| PATCH | `/tasks/{task_id}` | Update task |
| DELETE | `/tasks/{task_id}` | Delete task |

### Comments & Threads

| Method | Endpoint | Description |
|---|---|---|
| GET | `/comments` | List comments |
| POST | `/comments` | Create comment |
| GET | `/threads/{thread_id}` | Get thread |

### Webhooks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/webhooks` | List webhooks |
| POST | `/webhooks` | Create webhook |
| DELETE | `/webhooks/{webhook_id}` | Delete webhook |

## Webhook Events

| Category | Events |
|---|---|
| Records | `record.created`, `record.updated`, `record.deleted`, `record.merged` |
| Lists | `list.created`, `list.updated`, `list.deleted`, `list-entry.created`, `list-entry.updated`, `list-entry.deleted` |
| Attributes | `attribute.created`, `attribute.updated` |
| Comments | `comment.created`, `comment.updated`, `comment.deleted` |
| Notes | `note.created`, `note.updated`, `note.deleted` |
| Tasks | `task.created`, `task.updated`, `task.deleted` |
| Workspace | `workspace-member.added` |
| Calls | `call-recording.completed` |

## SDKs

| Language | Package |
|---|---|
| Node.js / TypeScript | Official SDK |
| Python | Official SDK |
| PHP | Official SDK |
| .NET | Official SDK |
| Java | Official SDK |

## MCP Server

Attio provides an MCP (Model Context Protocol) server for AI agent integration:
- **URL**: `mcp.attio.com/mcp`
- **Capabilities**: Search, update, and manage Attio workspace data via AI agents (Claude, Cursor, etc.)

## Pagination

API responses are paginated. Use `offset` and `limit` parameters for cursor-based pagination.

## Data Formats

- All requests and responses are JSON
- Dates use ISO 8601 format
- IDs are UUIDs
- Objects and attributes can be referenced by slug or ID

## OpenAPI Specification

Machine-readable API spec available at `api.attio.com/openapi` for code generation and tooling.

## Useful Resources

- [Attio Docs](https://docs.attio.com/) — Full API documentation
- [LLMs.txt](https://docs.attio.com/llms.txt) — AI-friendly documentation index
- [App SDK](https://docs.attio.com/sdk) — Build embedded React apps
- [OAuth Guide](https://docs.attio.com/rest-api/guides/authentication) — Set up OAuth flows
