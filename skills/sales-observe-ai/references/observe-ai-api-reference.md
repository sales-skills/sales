<!-- Source: https://api-docs.observe.ai/ (JS-rendered Redoc — partial content only) -->
<!-- Additional source: https://www.semarize.com/resources/get-your-data/observe-ai -->
<!-- Additional source: https://apitracker.io/a/observe-ai -->

# Observe.AI API Reference

**Note**: Observe.AI's API documentation is hosted at https://api-docs.observe.ai/ using Redoc, but the page is JS-rendered and not publicly crawlable. The information below was pieced together from secondary sources. For the complete OpenAPI spec, request it from your Observe.AI account team.

## Authentication

```
Authorization: Bearer <your_api_token>
Content-Type: application/json
```

- Token issued by your Observe.AI account admin
- Enterprise-gated — requires an enterprise plan with API access enabled

## Base URL

```
https://api.observe.ai/v1
```

(Tenant-specific — confirm with your account team)

## Known Endpoints

### List Interactions

```
GET /v1/interactions
```

Query parameters:
- `start_date` — filter by date range start
- `end_date` — filter by date range end
- `limit` — page size
- `offset` — pagination offset

Returns a list of interaction objects.

### Get Interaction Transcript

```
GET /v1/interactions/{interaction_id}/transcript
```

Returns speaker-labeled transcript for a specific interaction.

**Transcript data model:**
- Speaker-labeled utterances
- `speaker_role`: `agent` or `customer`
- `start_time`, `end_time` — timestamps for each utterance
- `text` — utterance content

### Get Interaction Evaluation

```
GET /v1/interactions/{interaction_id}/evaluation
```

Returns QA evaluation data for a specific interaction.

**Evaluation data model:**
- `overall_score` — aggregate QA score
- `criteria[]` — individual criterion scores
- `coaching_moments[]` — flagged segments needing coaching

## Data Models

### Interaction
| Field | Type | Description |
|-------|------|-------------|
| `interaction_id` | string | Unique identifier |
| `agent_id` | string | Agent who handled the interaction |
| `duration` | number | Duration in seconds |
| `timestamp` | datetime | When the interaction occurred |
| `metadata` | object | Additional metadata |

### Transcript
| Field | Type | Description |
|-------|------|-------------|
| `speaker_role` | string | `agent` or `customer` |
| `start_time` | number | Utterance start time |
| `end_time` | number | Utterance end time |
| `text` | string | Utterance text content |

### Evaluation
| Field | Type | Description |
|-------|------|-------------|
| `overall_score` | number | Aggregate QA score |
| `criteria` | array | Individual criterion evaluations |
| `coaching_moments` | array | Flagged segments for coaching |

## Rate Limits

- Per-endpoint rate limits enforced (exact numbers not publicly documented)
- HTTP 429 returned when exceeded
- Use exponential backoff for retries

## Webhooks

- Availability varies by plan and enterprise configuration
- Register webhook URL to receive events when interactions are processed
- Payload includes `interaction_id`, agent info, and metadata
- Event types not publicly documented — confirm with account team

## Important Caveats

1. **Transcripts are not instant.** After a call ends, transcription takes minutes to hours. Design ingestion to handle this delay.
2. **Evaluations arrive later than transcripts.** QA scores and coaching moments may not be available when the transcript is first ready. Build for partial data and backfill.
3. **Cursor-based pagination.** Losing a cursor mid-backfill on large datasets (10,000+ interactions) means re-scanning from the start. Checkpoint cursor positions.
4. **No public SDKs.** No official client libraries found. Build your own HTTP client.
5. **No Postman collection or OpenAPI spec found publicly.** Request from your account team.

## Gaps

The following information is not publicly available:
- Complete endpoint list (likely more endpoints beyond interactions/transcripts/evaluations)
- Full request/response JSON schemas
- Specific rate limit numbers (requests per minute/second)
- Webhook event types and payload schemas
- SDK or client library information
- Sandbox/testing environment details
