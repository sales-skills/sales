<!-- Source: https://developer.transkriptor.com/ -->

# Transkriptor API Reference

**Base URL**: `https://api.tor.app/developer/`
**Auth**: Bearer token in Authorization header (`Authorization: Bearer {api_key}`)
**API key location**: https://app.transkriptor.com/account
**Rate limit**: 1,000 requests/minute (429 response when exceeded)
**Plan gate**: Enterprise plan only

## Authentication

```
Authorization: Bearer {api_key}
```

API keys are user-scoped. Generate from the account settings page.

## Endpoints

### Transcribe Local File

**Step 1: Get upload URL**
```
POST /transcription/local_file/get_upload_url
```
Returns a pre-signed URL for binary file upload.

**Step 2: Upload file**
```
PUT {returned upload_url}
Content-Type: application/octet-stream
Body: binary file data
```

**Step 3: Initiate transcription**
```
POST /transcription/local_file/initiate_transcription
```
Parameters:
- `url` (string, required) — the upload URL from step 1
- `language` (string) — language code (e.g., "en", "es", "fr")
- `service` (string) — "Standard" or "Subtitle"
- `folder_id` (string) — target folder ID
- `triggering_word` (string) — custom trigger word

### Transcribe via URL

Transcribe from YouTube, Google Drive, Dropbox, or OneDrive URLs. Endpoint details not fully documented in fetched pages.

### Transcribe Meeting

Record and transcribe a meeting. Endpoint details not fully documented in fetched pages.

### Get Transcription Result
```
GET /files/{order_id}/content
```
Returns segments with:
- `text` (string) — transcribed text
- `StartTime` (number) — segment start time
- `EndTime` (number) — segment end time
- `Speaker` (string) — speaker label

### Export Transcription
```
POST /files/{order_id}/content/export
```
Parameters:
- `format` (string) — "pdf", "srt", "txt", "docx"
- `speaker_names` (boolean) — include speaker labels
- `timestamps` (boolean) — include timestamps
- `merge_segments` (boolean) — merge adjacent segments
- `paragraph_size` (number) — target paragraph size

### List Files
```
GET /files
```
Returns all transcription files.

### Get File Detail
```
GET /files/{order_id}
```
Returns file metadata.

### Delete File
```
DELETE /files/{order_id}
```

### Rename File
```
PUT /files/{order_id}/rename
```

### Recognize Speakers
```
POST /files/{order_id}/recognize_speakers
```
Re-runs speaker diarization on an existing transcription.

### Get Meeting Details
```
GET /meetings/{meeting_id}
```

### Get Summary
```
GET /files/{order_id}/summary
```
Returns AI-generated summary for a transcription.

### AI Chat
Query transcribed content using natural language. Endpoint details not fully documented in fetched pages.

### Get Folders
```
GET /folders
```

### Get User Details
```
GET /users
```
Returns: remaining minutes, email, account info.

### Text to Speech (Speaktor)
```
POST /text_to_speech
```
Parameters:
- `text` (string, required) — text to convert
- `language` (string) — language code
- `voice_name` (string) — voice selection
- `speed_rate` (number) — playback speed
- `generate_subtitle` (boolean) — generate SRT alongside audio
- `emotion` (string) — emotional tone

### Webhooks
```
POST /webhooks          — Create webhook
GET /webhooks           — List webhooks
PUT /webhooks/{id}      — Update webhook
DELETE /webhooks/{id}   — Delete webhook
```

### Custom Vocabulary
```
POST /custom_vocabulary    — Set custom vocabulary
GET /custom_vocabulary     — Get custom vocabulary
DELETE /custom_vocabulary  — Delete custom vocabulary
```

## Code Examples

Official code examples available in 10 languages: Python, JavaScript, Java, C#, Go, Ruby, PHP, Kotlin, Swift, Dart.

See https://developer.transkriptor.com/ for language-specific samples.

## Error Handling

- `401` — Invalid or missing API key
- `403` — Insufficient permissions or plan does not include API access
- `429` — Rate limit exceeded (1,000 req/min)
- `5xx` — Server error, retry with exponential backoff
