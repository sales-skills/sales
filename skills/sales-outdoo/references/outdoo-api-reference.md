<!-- Source: https://openapi.outdoo.ai/openapi.json -->
<!-- Note: ReDoc UI at https://openapi.outdoo.ai/redoc requires JavaScript. This spec was extracted from the JSON endpoint. -->
<!-- API access is Enterprise-only. -->

# Outdoo AI OpenAPI Reference

**Title:** Outdoo AI OpenAPI
**Version:** 1.0
**Security:** JWT Bearer Token

## Base Path

All endpoints use `/api/v1/` prefix.
Base URL: `https://openapi.outdoo.ai/api/v1/`

## Authentication

All endpoints except `/health` require JWT Bearer token in the Authorization header.

**Generating API tokens:**
1. Admin access required in Outdoo AI
2. Navigate to: Company Settings > Ecosystem > API Keys
3. Click "Create API Key" and assign a name plus validity period
4. Token displays once only — copy and store securely
5. Tokens can be deleted from the same settings page

**Header format:**
```
Authorization: Bearer <your_jwt_token>
```

## Endpoints

### Conversations

**GET** `/conversations`
Retrieve conversations with filtering options.
- Pagination: `page` (default: 1), `size` (max: 20, default: 10)
- `as_list` boolean (default: false)

**GET** `/conversations/filters`
Get conversations by saved filter ID.

**GET** `/conversation/{conversation_id}`
Fetch specific conversation details by ID.

**GET** `/conversation/transcript/{conversation_id}`
Retrieve the full transcript for a specific conversation.

**POST** `/conversation/create`
Upload a manual conversation record.

### Buyers

**GET** `/buyers`
Retrieve buyers with pagination and CRM filtering options.
- Pagination: `page` (default: 1), `page_size` (max: 20, default: 10)

### Users

**GET** `/users`
Retrieve all users in the account.

**GET** `/users/{user_id}`
Get specific user details by ID.

### Statistics

**POST** `/users/stats/`
Get aggregated user statistics.

**POST** `/interaction/stats/`
Get interaction statistics.

### Scorecards

**GET** `/scorecards/`
Retrieve all scorecards configured in the workspace.

### Configuration

**GET** `/filters`
Fetch saved conversation filters.

**GET** `/workspaces`
List all workspaces in the account.
- API calls can span multiple workspaces; filters are applied per workspace.

**GET** `/trackers/`
Fetch trackers. Requires `workspace_id` parameter.

**GET** `/initiatives/`
Fetch initiatives. Requires `workspace_id` parameter.

### Health Checks

**GET** `/health`
Basic health check. No authentication required.

**GET** `/auth/health`
Health check with token validation. Requires valid JWT Bearer token.

## Common Parameters

- `page`: Page number (default: 1)
- `size` / `page_size`: Results per page (max: 20, default: 10)
- `as_list`: Boolean to control response format (default: false)
- `workspace_id`: Required for trackers and initiatives endpoints

## Notes

- Rate limits are not publicly documented — assume conservative usage patterns
- The full interactive API docs are at https://openapi.outdoo.ai/redoc (requires JavaScript to render)
- Multi-workspace support: API calls can span workspaces with per-workspace filtering
