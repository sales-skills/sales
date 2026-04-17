<!-- Source: https://docs.meetgeek.ai — API docs are JS-rendered (Mintlify), partial info only. Supplemented by WebSearch results and llms.txt. -->

# MeetGeek API Reference

## Overview

MeetGeek provides a REST API for programmatic access to meetings, transcripts, highlights, summaries, and recordings. The API also supports webhooks for event-driven automation and an MCP Server for AI tool integration.

## Regional Endpoints

MeetGeek offers three API endpoints hosted in different regions:

| Region | Base URL |
|---|---|
| Europe (default) | `https://api.meetgeek.ai` |
| Europe (explicit) | `https://api-eu.meetgeek.ai` |
| United States | `https://api-us.meetgeek.ai` |

Requests to `https://api.meetgeek.ai` are routed to the European data center by default.

**Important**: API keys are region-specific. Each region requires its own API key. If you need to make requests to multiple regions, generate and use a separate API key for each.

## Authentication

Bearer token authentication.

```
Authorization: Bearer YOUR_API_KEY
```

Generate your API key at: Integrations → Public API Card in the MeetGeek dashboard.

Optionally configure a webhook URL for meeting analysis notifications during key setup.

## Endpoints

### Get meetings
```
GET /v1/meetings
```
Retrieve paginated past meetings of a user.

### Get meeting
```
GET /v1/meetings/{meetingId}
```
Get meeting details given a meeting ID.

### Delete meeting
```
DELETE /v1/meetings/{meetingId}
```
Delete a meeting.

### Get transcript
```
GET /v1/meetings/{meetingId}/transcript
```
Retrieve the transcript for a meeting.

### Get highlights
```
GET /v1/meetings/{meetingId}/highlights
```
Retrieve highlights for a meeting.

### Get summary
```
GET /v1/meetings/{meetingId}/summary
```
Get the AI-generated summary for a meeting.

### Download recording
```
POST /v1/meetings/{meetingId}/download
```
Generate a temporary download link for the meeting recording.

### Upload recording
```
POST /v1/upload
```
Upload an audio/video recording for processing.

### Get teams
```
GET /v1/teams
```
List teams in the workspace.

### Get team meetings
```
GET /v1/teams/{teamId}/meetings
```
Retrieve meetings for a specific team.

## Webhooks

Configure webhook URLs in the MeetGeek dashboard to receive notifications when meeting analysis is complete. Webhook events fire when transcripts, highlights, and summaries are ready.

## MCP Server

MeetGeek provides an official MCP (Model Context Protocol) server for AI tool integration:

- **Cloud MCP**: Connects to Claude/ChatGPT without local installation
- **Local MCP**: Runs on your machine using your API key
- **GitHub**: `github.com/meetgeekai/meetgeek-mcp-server`

Available tools: list meetings, retrieve transcripts, get summaries, search across meeting history.

## Additional Resources

- Full OpenAPI specification: `https://docs.meetgeek.ai/llms.txt`
- API playground with authenticated request examples available in docs
- Enterprise/service account access: contact via typeform (link in docs)

## Gaps

- Individual endpoint request/response schemas were not fetchable (JS-rendered docs). Refer to the OpenAPI spec or API playground for detailed parameters and response formats.
- Rate limits not documented in the publicly accessible pages.
- Webhook payload format and signature verification method not documented in accessible pages.
