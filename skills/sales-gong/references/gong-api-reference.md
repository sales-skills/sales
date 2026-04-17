<!-- Source: https://help.gong.io/docs/what-the-gong-api-provides, https://www.claap.io/blog/gong-api, https://help.gong.io/docs/payload-sent-to-webhooks -->

# Gong API Reference

## Overview

Gong provides a REST API for accessing call data, transcripts, user information, CRM integration, and Engage (sales engagement) functionality.

**Base URL**: `https://api.gong.io/v2/`

**Rate limits**: 3 API calls per second, ~1,000 per hour, 10,000 per day. HTTP 429 returned with `Retry-After` header when exceeded.

**Rate limit headers** (on every response):
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

## Authentication

### Basic Auth (internal integrations)
```
Authorization: Basic <base64(access_key:access_key_secret)>
```

### OAuth 2.0 (public/multi-tenant integrations)
Required when building integrations that serve multiple Gong customers. Bearer token with scoped permissions.

### API Scopes
- `api:users:read` — list/get users
- `api:calls:read` — list/get calls and transcripts
- `api:flows:read` — list/manage Engage flows
- Additional scopes for deals, engagements, CRM operations

## Endpoints

### Calls & Recordings

**List calls**
```
GET /v2/calls
```
Filters: date range, users, deal, workspace. Returns paginated call list with metadata.

**Get call details**
```
GET /v2/calls/{id}
```
Returns: participants, topics, tracker matches, scorecard data, duration, direction, media type, language, recording system.

**Get transcript** (⚠️ POST, not GET)
```
POST /v2/calls/{id}/transcript
```
Returns full transcript with monologue structure: speaker attribution, timestamps, text blocks. **This is the most common integration gotcha — every other vendor uses GET.**

### Users & Teams

**List users**
```
GET /v2/users
```
Requires Bearer token with `api:users:read` scope. Returns users within the company.

**Get user stats**
```
GET /v2/users/{id}/stats
```
Returns activity metrics and interaction statistics for a specific user.

### Statistics

**Activity statistics**
```
GET /v2/stats/activity
```

**Interaction statistics**
```
GET /v2/stats/interaction
```

### CRM Integration

**CRM objects**
```
GET /v2/crm/object
POST /v2/crm/object
```
Read and write CRM data (deals, accounts, contacts).

**CRM field mapping**
```
GET /v2/crm/map-fields
POST /v2/crm/map-fields
```
Configure how Gong fields map to CRM fields.

### Engage Flows (Engage API)

**List flows**
```
GET /v2/flows
```
Requires Bearer token with `api:flows:read` scope. Returns company flows.

**Get/create/update flow**
```
GET /v2/flows/{id}
POST /v2/flows
PUT /v2/flows/{id}
```

## Webhook Automation

### Setup
Configure in Gong's Automations tab (Developer Hub). Select "Fire webhook" action.

### Payload format
```json
{
  "callData": {
    "metaData": {
      "id": "string",
      "url": "string",
      "title": "string",
      "scheduled": "datetime",
      "started": "datetime",
      "duration": "number (seconds)",
      "primaryUserId": "string",
      "direction": "Inbound|Outbound",
      "system": "Zoom|Teams|...",
      "scope": "Internal|External",
      "media": "Video|Audio",
      "language": "en-US|...",
      "workspaceId": "string",
      "sdrDisposition": "string",
      "clientUniqueId": "string",
      "customData": "string",
      "meetingUrl": "string",
      "isPrivate": "boolean",
      "calendarEventId": "string"
    },
    "context": [
      {
        "system": "Salesforce",
        "objects": [
          {
            "objectType": "Opportunity",
            "objectId": "string",
            "fields": [{"name": "string", "value": "string"}],
            "timing": "string"
          }
        ]
      }
    ],
    "parties": [
      {
        "id": "string",
        "emailAddress": "string",
        "name": "string",
        "title": "string",
        "userId": "string",
        "speakerId": "string",
        "context": [],
        "affiliation": "Internal|External",
        "phoneNumber": "string",
        "methods": ["Video|Audio|..."]
      }
    ],
    "content": {
      "trackers": [
        {
          "id": "string",
          "name": "string",
          "count": "number",
          "type": "string",
          "phrases": [
            {
              "count": "number",
              "occurrences": [
                {"startTime": "number", "endTime": "number"}
              ],
              "speakerIds": ["string"],
              "text": "string"
            }
          ]
        }
      ],
      "topics": [
        {
          "name": "string",
          "duration": "number",
          "startTimes": ["number"]
        }
      ]
    },
    "interaction": {
      "speakers": [
        {
          "id": "string",
          "userId": "string",
          "talkTime": "number"
        }
      ],
      "interactionStats": {
        "talkRatio": "number",
        "longestMonologueDuration": "number",
        "interactivity": "number"
      },
      "video": [
        {
          "name": "string",
          "duration": "number"
        }
      ]
    },
    "collaboration": {
      "publicComments": [
        {
          "id": "string",
          "audioStartTime": "number",
          "audioEndTime": "number",
          "commenterUserId": "string",
          "comment": "string",
          "posted": "datetime",
          "inReplyTo": "string"
        }
      ]
    }
  },
  "isTest": "boolean"
}
```

### Authentication
Webhook payloads include a Signed JWT header. Copy the public key from Gong Developer Hub and verify the digital signature before trusting the payload.

## Error Codes

| Code | Meaning |
|---|---|
| 400 | Malformed request |
| 401 | Authentication failed |
| 403 | Forbidden (insufficient scopes) |
| 404 | Resource not found |
| 429 | Rate limited — check `Retry-After` header |
| 500+ | Server error — retry with backoff |

## Important Notes

- **Transcript endpoint uses POST**: `POST /v2/calls/{id}/transcript` — not GET. This is the most common integration mistake.
- **Rate limits are per API key**: 3/sec, ~1K/hr, 10K/day. Multiple keys don't raise the limit per key.
- **Backfilling history burns daily quota**: Paginate nightly, not all at once.
- **Call data structure is identical between API and webhooks**: Same schema, same field definitions.
- **OAuth required for multi-tenant**: Basic Auth is for single-org integrations only.
