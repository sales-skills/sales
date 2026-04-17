<!-- Source: https://docs.granola.ai/introduction -->

# Granola API Reference

## Overview

The Granola API provides programmatic access to your workspace's meeting notes and related data through a RESTful API. Only notes that have a generated AI summary and transcript are returned — notes still being processed or never summarized won't appear in responses.

## Base URL

```
https://public-api.granola.ai/v1
```

## Authentication

Bearer token in Authorization header:

```
Authorization: Bearer grn_YOUR_API_KEY
```

API keys are created in the Granola desktop app: Settings → API → Create new key.

On Enterprise plans, workspace admins can enable or disable Personal API key creation via the "Allow personal API keys" toggle in Settings.

## Rate Limits

- **Burst capacity**: 25 requests within 5 seconds
- **Sustained rate**: 5 requests/second maximum
- Personal API keys: rate limits applied per user
- Enterprise/workspace keys: rate limits applied per workspace
- Exceeding limits returns HTTP 429 Too Many Requests

## Endpoints

### List Notes

```
GET /notes
```

**Parameters:**
| Parameter | Type | Required | Description |
|---|---|---|---|
| `created_after` | string (ISO 8601) | No | Only return notes created after this timestamp |
| `cursor` | string | No | Pagination cursor from previous response |

**Response:**
```json
{
  "notes": [
    {
      "id": "note_abc123",
      "title": "Discovery call with Acme",
      "owner": { ... },
      "summary": "AI-generated summary text..."
    }
  ],
  "hasMore": true,
  "cursor": "eyJsYXN0X2lkIjoiMTIzIn0="
}
```

### Get Note

```
GET /notes/{note_id}
```

**Parameters:**
| Parameter | Type | Required | Description |
|---|---|---|---|
| `include` | string | No | Set to `transcript` to include full transcript array |

**Response:**
```json
{
  "id": "note_abc123",
  "title": "Discovery call with Acme",
  "owner": { ... },
  "summary": "AI-generated summary text...",
  "transcript": [
    {
      "speaker": {
        "source": "microphone"
      },
      "text": "Thanks for joining today..."
    },
    {
      "speaker": {
        "source": "speaker"
      },
      "text": "Happy to be here..."
    }
  ]
}
```

## Data Models

### Transcript Items

**macOS:**
```json
{
  "speaker": {
    "source": "microphone" | "speaker"
  },
  "text": "string"
}
```
- `microphone` = your audio (local device mic)
- `speaker` = remote participant audio (system audio)

**iOS:**
```json
{
  "speaker": {
    "source": "microphone",
    "diarization_label": "Speaker A" | "Speaker B" | ...
  },
  "text": "string"
}
```
- iOS provides basic speaker diarization labels
- Labels are not named — just Speaker A, B, C, etc.

## Important Constraints

1. Only notes with completed AI summary + transcript are returned
2. Notes still processing will not appear in list/get responses
3. No webhook support documented — poll-based integration only
4. No write endpoints — API is read-only (list and get notes)
5. No search endpoint — filter by `created_after` only

## Error Codes

| Code | Meaning |
|---|---|
| 200 | Success |
| 401 | Invalid or expired API key |
| 404 | Note not found or not yet processed |
| 429 | Rate limited — back off and retry |
| 500 | Server error |

## Integration Notes

- **Zapier** is the primary automation layer for Granola (two triggers: "Note Added to Folder", "Note Shared to Zapier")
- **MCP integration** is in beta on Business+ plans
- For Salesforce: use Zapier bridge (no native integration, no API write endpoints)
- A reverse-engineered API exists on GitHub (getprobo/reverse-engineering-granola-api) but is unofficial and may break
