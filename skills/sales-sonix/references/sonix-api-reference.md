<!-- Source: https://sonix.ai/docs/api -->

# Sonix API Reference

## Overview

- **Base URL**: `https://api.sonix.ai/v1`
- **Auth**: Bearer token via `Authorization: Bearer {api_key}` header
- **API key management**: https://my.sonix.ai/api (paid subscribers only — trial users must email support)
- **Plan restriction**: API access requires Premium or Enterprise plan (not available on Standard)
- **Rate limits**: Not publicly documented
- **File upload limit**: 100 MB direct upload; unlimited via URL

## Endpoints

### Media

#### Submit media for transcription
```
POST /media
```
Upload an audio/video file for transcription. Supports direct file upload (multipart, 100 MB max) or URL-based upload (no size limit).

Parameters:
- `file` (file) — audio/video file (multipart upload)
- `file_url` (string) — URL to audio/video file (alternative to direct upload)
- `language` (string) — language code for transcription
- `name` (string) — optional display name

#### Get media details
```
GET /media/{id}
```
Retrieve details and processing status for a media item.

#### List media
```
GET /media
```
List all media items in the account.

### Transcripts

#### Get transcript
```
GET /media/{id}/transcript
```
Retrieve the transcript for a completed media item.

Supported formats (via `format` parameter or `Accept` header):
- `text` — plain text
- `srt` — SubRip subtitle format
- `vtt` — WebVTT subtitle format
- `json` — structured JSON with word-level timing
- `avid_ds` — Avid DS caption format

### Translations

#### Request translation
```
POST /media/{id}/translations
```
Request automated translation of a transcript.

Parameters:
- `language` (string) — target language code

#### Get translation status
```
GET /media/{id}/translations/{translation_id}
```

### Summarizations

#### Request summarization
```
POST /media/{id}/summarizations
```
Generate AI summary, chapter markers, or sentiment analysis.

Parameters:
- `type` (string) — `summary`, `chapters`, or `sentiment`

Note: Requires AI Analysis add-on ($5/mo on Premium, included on Enterprise).

### Video burn-ins

#### Request subtitle burn-in
```
POST /media/{id}/video_burn_ins
```
Embed subtitles directly into a video file.

### Folders

#### List folders
```
GET /folders
```

#### Create folder
```
POST /folders
```

### Users

#### List users
```
GET /users
```

### Shares

#### Share media
```
POST /media/{id}/shares
```

## Webhooks

- Available on Enterprise plan
- Events: transcription completion, translation completion, label/folder changes
- Configuration via API or dashboard

## SDKs

No official SDK/client libraries documented. Use raw REST API calls.

## Notes

- API key is per-user, not per-workspace
- Webhook support appears to be Enterprise-only based on documentation
- No documented rate limits — design conservatively
- For files over 100 MB, use `file_url` parameter instead of direct upload
