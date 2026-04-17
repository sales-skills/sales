<!-- Source: https://doc.tldv.io/index.html -->

# tl;dv API v1alpha1 — Complete Reference

## Authentication

**API Key Header**: `x-api-key: YOUR_API_KEY`
- Obtain keys at: `https://tldv.io/app/settings/personal-settings/api-keys`
- Required for all requests; HTTPS-only
- API access requires Pro plan or higher

## Base Endpoint

`https://pasta.tldv.io`

## Meetings Endpoints

### Import Meeting

- **Method**: POST
- **Path**: `/v1alpha1/meetings/import`
- **Auth**: Api Key
- **Response**: `{success, jobId, message}`

### List Meetings

- **Method**: GET
- **Path**: `/v1alpha1/meetings`
- **Auth**: Api Key
- **Response**: Paginated results with `{page, pages, total, pageSize, results[]}`

### Get Meeting by ID

- **Method**: GET
- **Path**: `/v1alpha1/meetings/{meetingId}`
- **Auth**: Api Key
- **Response**: Meeting object with organizer, invitees, duration

### Download Recording

- **Method**: GET
- **Path**: `/v1alpha1/meetings/{meetingId}/download`
- **Auth**: Api Key
- **Response**: 302 redirect to signed URL (6-hour TTL)

## Transcripts Endpoints

### Get Transcript

- **Method**: GET
- **Path**: `/v1alpha1/meetings/{meetingId}/transcript`
- **Auth**: Api Key
- **Response**: `{id, meetingId, data[]}` with speaker, text, timestamps

## Notes Endpoints

### Get Notes

- **Method**: GET
- **Path**: `/v1alpha1/meetings/{meetingId}/notes`
- **Auth**: Api Key
- **Response**: `{structuredNotes[], markdownContent, topics[]}`

## Highlights (Deprecated)

### Get Highlights

- **Method**: GET
- **Path**: `/v1alpha1/meetings/{meetingId}/highlights`
- **Status**: Deprecated; use `/notes` endpoint instead

## Health Check

- **Method**: GET
- **Path**: `/v1alpha1/health`
- **Auth**: Api Key

## Webhooks

**Available Triggers**:
1. `MeetingReady` — when meeting finishes processing
2. `TranscriptReady` — when transcript is generated

**Scope Levels**: User, Team, Organization

## Error Responses

**Validation (400)**:
```json
{
  "message": "Invalid query params, check 'errors' property",
  "errors": [{"property": "field", "constraints": {}}]
}
```

**Other Errors (401, 403, 404, 500)**:
```json
{"name": "ErrorType", "message": "description"}
```

## Authorization Rules

- Free plan: UI access only (if shared)
- Pro/Business/Enterprise: Full API access
- Meeting organizer's plan determines API exportability
