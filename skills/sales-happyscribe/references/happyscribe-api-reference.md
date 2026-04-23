<!-- Source: https://dev.happyscribe.com/ and https://dev.happyscribe.com/sections/product/ -->

# HappyScribe API Reference

## Base URL

`https://www.happyscribe.com/api/v1`

## Authentication

API key-based access via Authorization header:

```
Authorization: Bearer your_api_key_here
```

Obtain your API key from your Account settings page after logging in.

## Rate Limits

Up to 200 requests per hour per user on transcription creation. Returns `429` status with `retry_in_seconds` field when exceeded.

## Error Codes

| Code | Meaning |
|---|---|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 406 | Not Acceptable |
| 410 | Gone |
| 418 | I'm a teapot |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

## Uploads

### Get a Signed URL

`GET /uploads/new`

**Parameters:**
- `filename` (required): Media filename with extension

**Response:** Returns a signed AWS S3 URL for uploading files directly.

### Upload File

PUT request to the signed URL provided. Use standard AWS S3 upload methods.

## Transcriptions

### List All Transcriptions

`GET /transcriptions`

**Parameters:**
- `organization_id` (required)
- `folder_id` (optional): Filter by folder
- `page` (default: 0)
- `tags` (optional): Filter by tags

Returns paginated list of transcriptions with metadata.

### Create a Transcription (DEPRECATED — use Orders)

`POST /transcriptions`

**Parameters:**
- `name` (required): Transcription title
- `language` (required): BCP-47 code
- `tmp_url` (required): Public media file URL
- `is_subtitle` (default: false)
- `service` (default: auto): "auto", "pro", or "alignment"
- `organization_id` (required)
- `folder` or `folder_id` (optional)
- `document_url` (alignment only)
- `sharing_enabled` (default: false)
- `tags` (optional)

### Retrieve a Transcription

`GET /transcriptions/<ID>`

Returns transcription metadata including state, language, duration, and cost.

**Transcription States:**
- `initial`: Waiting for processing
- `ingesting`: Media file being processed
- `automatic_transcribing`: Text generation in progress
- `automatic_done`: Ready for export
- `aligning`: Text realignment active
- `locked`: Insufficient credits
- `failed`: Processing error
- `demo`: Initial demo file

### Delete a Transcription

`DELETE /transcriptions/<ID>`

**Parameters:**
- `permanent` (default: false): Set to "true" for irreversible deletion; otherwise moves to Trash

## Exports

### Create an Export

`POST /exports`

**Parameters:**
- `format` (required): txt, docx, pdf, srt, vtt, stl, avid, html, premiere, maxqda, json, fcp
- `show_timestamps` (default: false): Supported for txt, docx, pdf
- `timestamps_frequency` (optional): 5s, 10s, 15s, 20s, 30s, 60s
- `show_speakers` (default: false): Supported for txt, docx, pdf
- `show_comments` (default: false): Supported for txt, docx, pdf
- `show_highlights` (default: false): Supported for docx, pdf
- `show_highlights_only` (default: false): Supported for docx, pdf
- `transcription_ids` (required): Array of IDs to export

**Export States:**
- `pending`: Awaiting processing
- `processing`: Generation in progress
- `ready`: Available for download
- `expired`: No longer accessible
- `failed`: Processing error

### Retrieve an Export

`GET /exports/<ID>`

Returns export status and download link when ready.

## Orders

### Create a Transcription or Subtitling Order

`POST /orders`

**Parameters:**
- `url` (required): Media file URL
- `language` (required): Language code
- `organization_id` (required)
- `service` (default: auto): "auto" or "pro"
- `confirm` (default: false): Auto-submit if true
- `folder_id` or `folder` (optional)
- `name` (optional)
- `boost` (default: false): Prioritize processing
- `is_subtitle` (default: false)
- `tags` (optional)
- `webhook_url` (optional): Completion notification URL
- `glossary_ids` (optional): Array of glossary IDs
- `style_guide_id` (optional)

**Order States:**
- `incomplete`: Created but not submitted
- `waiting_for_payment`: Awaiting payment
- `submitted`: Processing active
- `locked`: Insufficient credits
- `fulfilled`: Complete
- `failed`: Processing failure
- `canceled`: User canceled
- `expired`: Old failed/incomplete order

### Create a Translation Order

`POST /orders/translation`

**Parameters:**
- `source_transcription_id` (required)
- `target_languages` (required): Array of language codes
- `service` (default: auto): "auto" or "pro"
- `confirm` (default: false)
- `boost` (default: false)
- `webhook_url` (optional)
- `tags` (optional)

### Retrieve an Order

`GET /orders/<ID>`

Returns comprehensive order information including operations, pricing, transcription status, and ingestion states.

### Confirm an Order

`POST /orders/<ID>/confirm`

Submits a previously created order (created with `confirm=false`) for processing.

**Response Codes:**
- 200: Successfully confirmed
- 400: Cannot submit (invalid state, language unavailable)
- 409: Media still ingesting (retry with Retry-After header)

## Translations (DEPRECATED — use Orders)

### Create a Translation Task

`POST /task/transcription_translation`

**Parameters:**
- `source_transcription_id` (required)
- `target_language` (required): Language code

**Task States:**
- `initial`: Waiting to process
- `working`: Translation generating
- `failed`: Error occurred
- `done`: Complete with `translatedTranscriptionId`

### Retrieve a Translation Task

`GET /task/transcription_translation/<ID>`

Returns task status and generated transcription ID upon completion.

## Glossaries

### List Glossaries

`GET /glossaries`

**Parameters:**
- `organization_id` (required)

Returns available glossaries with IDs for use in order creation.

## Style Guides

### List Style Guides

`GET /style_guides`

**Parameters:**
- `organization_id` (required)

Returns available style guides with formatting and transcription preferences.

## Organizations

### List Organizations

`GET /organizations`

Returns organizations the authenticated user belongs to with roles and metadata.

## Organization Memberships

### List Memberships

`GET /organization_memberships`

**Parameters:**
- `organization_id` (optional)
- `role` (optional): Filter by role
- `email` (optional): Case-insensitive partial match
- `name` (optional): Case-insensitive partial match
- `page` (default: 1): 25 results per page

### Add a Membership

`POST /organization_memberships`

**Parameters:**
- `organization_id` (required)
- `email` (required)
- `role` (required): "admin" or "member"

**Responses:**
- 201 Created: Existing user added immediately
- 202 Accepted: Invitation email sent to new user

### Update a Membership's Role

`PATCH /organization_memberships/:id`

**Parameters:**
- `role` (required): "admin" or "member"

### Remove a Membership

`DELETE /organization_memberships/:id`

Returns 204 No Content on success.
