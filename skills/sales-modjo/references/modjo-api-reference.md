<!-- Source: https://api.modjo.ai/v1/swagger.json (Swagger/OpenAPI spec) + https://help.modjo.ai/en/articles/9310645-modjo-api -->

# Modjo API V1 Reference

## Overview

The Modjo API enables programmatic access to call management, user administration, and team operations. API v2 (beta) adds advanced filtering via the calls/exports endpoint.

## Authentication

API key via `X-API-KEY` header on every request.

```
X-API-KEY: YOUR_API_KEY
```

- **Key generation**: Settings > Integrations > Public API
- **Permissions required**: Administrator or Manager
- **Key must be copied immediately** — cannot be retrieved later
- Store securely — treat as a secret

## Base URL

```
https://api.modjo.ai/v1/
```

## Endpoints

### Calls

#### POST /v1/calls — Upload a call

Two workflows:
1. **Provide recording URL**: Include `recordingUrl` in request body. Modjo downloads within 30 minutes.
2. **Direct upload**: Omit `recordingUrl`. Response includes a signed URL for direct file upload.

**Request body** (`ApiCallUploadDto`):
- `contacts` (required) — array of contact objects
- `users` (required) — array of user identifiers
- `date` (required) — call date/time
- `fileExtension` (required) — one of: wav, mp3, mpeg, m4a, mp4, webm
- `tags` (required) — array of tag strings
- `recordingUrl` (optional) — URL for Modjo to download
- `name` (optional) — call name/title
- `provider` (optional) — source system
- `direction` (optional) — inbound/outbound
- `duration` (optional) — call duration
- `account` (optional) — CRM account reference
- `deal` (optional) — CRM deal/opportunity reference

**Responses**:
- `ApiCallUploadDtoResponse` — includes signed URL for direct upload
- `ApiCallUploadAcknowledgementResponse` — success confirmation (when recordingUrl provided)

#### POST /v1/calls/exports — Export call data (BETA)

Query calls with filtering, pagination, and selective data loading.

**Request body** (`ApiV1CallExportDto`):
- Filters: date range, duration, title, call IDs, deleted recordings
- Relations (selective loading): recording, contacts, account, deal, users, libraries, tags, transcript, topics, speakers, summary, highlights, reviews, scoring

### Users

#### GET /v1/users — List users (paginated)

**Parameters**:
- `page` (required, minimum 1)
- `perPage` (required, maximum 100)

**Response**: `ApiV1PublicGetUserPaginationResult`

#### POST /v1/users/bulk — Create multiple users

**Request body** (`CreateBulkUsersDto`):
- `users` — array of user objects

Per-user fields:
- `email` (required)
- `firstName` (optional)
- `lastName` (optional)
- `hasLicense` (optional) — recording license
- `role` (optional)
- `teamIds` (optional) — array of team IDs
- `language` (optional)
- `sendOnboardingEmail` (optional)

#### DELETE /v1/users — Delete users

**Request body** (`ApiV1PublicDeleteUsersDto`):
- `userIds` — array of user IDs to delete

### Teams

#### GET /v1/teams — List teams (paginated)

**Parameters**:
- `page` (required, minimum 1)
- `perPage` (required, maximum 100)

## Webhooks

Three event types available. All include HMAC-SHA256 signature verification.

### Events

| Event | Triggered when |
|---|---|
| `call_summarized` | AI summary has been generated for a call |
| `call_transcript_deleted` | A call transcript has been deleted |
| `call_recording_deleted` | A call recording has been deleted |

### Webhook payload structure

```json
{
  "timestamp": "2026-01-15T10:30:00Z",
  "payloadSignature": "sha256-hash-string",
  "webhookUuid": "uuid-string",
  "webhookUrl": "https://your-endpoint.com/webhook",
  "tenantName": "your-org",
  "eventName": "call_summarized",
  "payload": { ... }
}
```

### Signature verification

Compute: `SHA256(timestamp + JSON.stringify(payload) + secretToken)`

Compare result against `payloadSignature` in the webhook request. Reject requests that don't match.

## CRM integrations (via native connectors, not API)

Salesforce, HubSpot, Pipedrive, Zoho, Sellsy, Microsoft Dynamics

## Rate limits

Not publicly documented in the API spec. Design conservatively — implement exponential backoff on 429 responses.

## Notes

- Full Swagger/OpenAPI spec available at `https://api.modjo.ai/v1/swagger.json` (renders via Redoc)
- API v2 capabilities (calls/exports with advanced filters) are in beta
- MCP server also available for embedding conversation data into AI workflows
