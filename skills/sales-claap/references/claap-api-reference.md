<!-- Source: https://docs.claap.io/api-reference/openapi.json -->
<!-- Fetched: 2026-04-17 -->

# Claap API Reference

OpenAPI 3.1.0 specification for the Claap API.

## Base URL

`https://api.claap.io/`

## Authentication

All requests must include the `X-Claap-Key` HTTP header.

```
X-Claap-Key: cla_abcdefghijkl
```

API keys follow the pattern `cla_xxxxx`. Keys are only active for customers in free trials or with an active paid subscription. Free plan requests receive `401 Unauthorized`.

Create API keys in workspace Settings → API & Webhooks → API tab (admin/owner only). The complete key is shown only once — store it immediately.

## Endpoints

### Recordings

#### List Recordings
`GET /v1/recordings`

Returns recordings accessible by workspace members and visible in global search.

#### Create Recording
`POST /v1/recordings`

Create a recording via video/audio file upload.

#### Get Recording
`GET /v1/recordings/{recordingId}`

Retrieve a specific recording by ID. Returns the `ApiRecording` object with metadata, transcript, insights, video URL, and action items.

#### Delete Recording
`DELETE /v1/recordings/{recordingId}`

Delete a specific recording.

#### Get Transcript
`GET /v1/recordings/{recordingId}/transcript`

Retrieve the transcript for a recording. Available in JSON and text formats.

### Workspace

#### Get Workspace
`GET /v1/workspaces/mine`

Retrieve workspace details and configuration.

### Webhooks

#### Trigger Webhook
`POST /v1/webhooks/{webhookId}/trigger`

Manually trigger a webhook event for testing.

### OAuth

#### Register
`POST /oauth/register`

Register an OAuth 2.0 client application.

#### Get Token
`POST /oauth/token`

Exchange authorization code for access token.

#### Revoke Token
`POST /oauth/revoke`

Revoke an existing access token.

### Assets

#### Get Asset
`GET /x/asset`

Retrieve asset payloads (video files, thumbnails, etc.).

## Recording Schema (`ApiRecording`)

The recording object contains:
- `id` — unique identifier
- `title` — recording title
- `createdAt` — ISO 8601 timestamp
- `state` — processing state
- Meeting details (platform, duration, participant list)
- Transcript with speaker labels and timestamps
- Translations (if available)
- Video URL and thumbnail URL (**expire within 24 hours**)
- Action items extracted from the call
- Insights (pain points, next steps, objections, competitor mentions)
- CRM integration data (mapped fields, deal association)

## Webhook Events

### `recording_added`
Emitted when a new recording is transcribed, analyzed, and made available to workspace members.

**Payload includes:**
- `eventId` — unique identifier (shared across retries)
- `event.type` — `recording_added`
- `event` — recording metadata, outline, insights, and links to recording-specific resources

### Webhook Headers
- `X-Claap-Webhook-Id` — webhook identifier
- `X-Claap-Webhook-Secret` — for request verification

### Delivery Requirements
- Client must respond with HTTP 200 within 5 seconds
- Failed deliveries retry: immediately → 1 minute → 5 minutes → abandoned

## Rate Limits

Rate limit details not publicly documented in the OpenAPI spec. Design conservatively — queue outbound API calls and honor any `Retry-After` headers.

## Important Notes

- Private recordings cannot be accessed via API — only workspace-accessible recordings visible in global search
- Video and transcript URLs expire within 24 hours — fetch and store content immediately upon receipt
- API keys are workspace-scoped — one key per workspace
- Full OpenAPI 3.1.0 spec available at: `https://docs.claap.io/api-reference/openapi.json`
