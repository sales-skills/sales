### Seismic REST API — Comprehensive Reference

**Developer Portal**: https://developer.seismic.com
**Base URL**: `https://api.seismic.com/integration/v2` (tenant-specific — some endpoints use tenant subdomain)
**API version**: v2 (current)

---

## Authentication

OAuth 2.0 authentication with multiple supported flows. Access tokens are passed in the `Authorization: Bearer` header.

| Detail | Value |
|---|---|
| Protocol | OAuth 2.0 |
| Token endpoint | `https://auth.seismic.com/tenants/{tenantId}/oauth2/token` |
| Supported flows | Authorization Code, Client Credentials, PKCE, Implicit, Password |
| Token type | Bearer |
| Token lifetime | Typically 1 hour (3600 seconds) |
| Refresh tokens | Supported for Authorization Code and Password flows |

**Recommended flow by use case**:

| Use case | Flow |
|---|---|
| Server-to-server integrations | Client Credentials |
| Web applications (with backend) | Authorization Code |
| Single-page applications | Authorization Code with PKCE |
| Mobile applications | Authorization Code with PKCE |
| Legacy integrations (discouraged) | Password |

**Authorization Code Flow**:

1. Redirect the user to:
```
https://auth.seismic.com/tenants/{tenantId}/oauth2/authorize?
  client_id=YOUR_CLIENT_ID&
  response_type=code&
  redirect_uri=YOUR_REDIRECT_URI&
  scope=seismic.library.read seismic.library.manage
```

2. User approves and is redirected back with a `code` parameter.

3. Exchange the code for tokens:
```
POST https://auth.seismic.com/tenants/{tenantId}/oauth2/token
Content-Type: application/x-www-form-urlencoded

client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
code=AUTHORIZATION_CODE&
grant_type=authorization_code&
redirect_uri=YOUR_REDIRECT_URI
```

4. Token response:
```json
{
  "access_token": "eyJ...",
  "refresh_token": "dGhp...",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "seismic.library.read seismic.library.manage"
}
```

**Client Credentials Flow** (server-to-server):
```
POST https://auth.seismic.com/tenants/{tenantId}/oauth2/token
Content-Type: application/x-www-form-urlencoded

client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
grant_type=client_credentials&
scope=seismic.library.read
```

**Common scopes**:

| Scope | Access |
|---|---|
| `seismic.library.read` | Read content library |
| `seismic.library.manage` | Create, update, delete content |
| `seismic.workspace.read` | Read workspaces |
| `seismic.workspace.manage` | Manage workspaces |
| `seismic.user.read` | Read user/group information |
| `seismic.user.manage` | Manage users and groups (SCIM) |
| `seismic.reporting.read` | Access reporting data |
| `seismic.livedocs.manage` | Generate LiveDocs |
| `seismic.delivery.manage` | Create LiveSend links and DSRs |

---

## Request & Response Format

### Requests

- **Standard REST methods**: GET for reads, POST for creates, PUT/PATCH for updates, DELETE for deletes
- **Content-Type**: `application/json` for request bodies
- **Authorization**: `Authorization: Bearer {access_token}` header on all requests

### Response Format

Successful responses return the resource directly or a collection wrapper:

**Single resource**:
```json
{
  "id": "abc123",
  "name": "Q1 Battlecard",
  "type": "document",
  ...
}
```

**Collection**:
```json
{
  "items": [...],
  "totalCount": 150,
  "continuationToken": "opaque_cursor_string"
}
```

### Error Responses

Errors return a standard error object:

```json
{
  "error": {
    "code": "ResourceNotFound",
    "message": "The requested content item was not found.",
    "target": "contentId",
    "details": []
  }
}
```

**Common HTTP status codes**:

| Code | Description |
|---|---|
| 200 | Success |
| 201 | Created |
| 204 | No Content (successful delete) |
| 400 | Bad Request — invalid parameters |
| 401 | Unauthorized — invalid or expired token |
| 403 | Forbidden — insufficient permissions/scope |
| 404 | Not Found — resource doesn't exist |
| 429 | Too Many Requests — rate limit exceeded |
| 500 | Internal Server Error — retry with backoff |

---

## Pagination

**Type**: Cursor-based (`continuationToken`)

| Parameter | Type | Description |
|---|---|---|
| `continuationToken` | string (query param) | Opaque cursor returned from the previous response. Pass to fetch the next page. |
| `limit` | integer (query param) | Number of results per page. Default varies by endpoint (typically 25-100). |

**How to paginate**:
1. Make the initial request without `continuationToken`
2. If `continuationToken` in the response is not `null`, pass it as a query parameter in your next request
3. Continue until `continuationToken` is `null` or absent

---

## Rate Limits

| Detail | Value |
|---|---|
| Model | Per-minute, per-tenant |
| Limit | ~100 requests/minute (varies by endpoint and contract) |
| Scope | Per tenant (shared across all API clients for the tenant) |
| When exceeded | HTTP 429 with `Retry-After` header |
| Retry strategy | Honor the `Retry-After` header value |

Rate limits are strictly enforced. Some endpoints (e.g., Reporting v2, bulk operations) have lower limits. The exact limits are documented per endpoint in the developer portal but are not always publicly visible.

---

## All API Endpoints

All paths are relative to `https://api.seismic.com/integration/v2` unless otherwise noted.

---

### Authentication & Permissions (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/oauth2/authorize` | Authorization endpoint — redirect users here to grant access |
| POST | `/oauth2/token` | Exchange authorization code or credentials for access token |
| POST | `/oauth2/revoke` | Revoke an access or refresh token |

---

### Content Management — Library (8 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/library/content` | List content items in the library with optional filters (type, profile, status) |
| GET | `/library/content/{contentId}` | Get a single content item by ID with metadata and version info |
| POST | `/library/content` | Create a new content item in the library |
| PUT | `/library/content/{contentId}` | Update content item metadata |
| DELETE | `/library/content/{contentId}` | Delete a content item from the library |
| GET | `/library/content/{contentId}/versions` | List all versions of a content item |
| GET | `/library/content/{contentId}/url` | Get a download/access URL for content |
| POST | `/library/content/{contentId}/publish` | Publish a content item from workspace to library |

**GET `/library/content` — Key parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | string | No | Filter by content type (document, video, image, etc.) |
| `contentProfileId` | string | No | Filter by content profile |
| `status` | string | No | Filter by status (published, draft, archived) |
| `modifiedSince` | datetime | No | Filter by last modified date (ISO 8601) |
| `limit` | integer | No | Results per page |
| `continuationToken` | string | No | Pagination cursor |

---

### Content Management — Workspaces (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/workspaces` | List all workspaces the authenticated user has access to |
| GET | `/workspaces/{workspaceId}` | Get workspace details |
| GET | `/workspaces/{workspaceId}/content` | List content items in a workspace |
| POST | `/workspaces/{workspaceId}/content` | Upload content to a workspace |
| PUT | `/workspaces/{workspaceId}/content/{contentId}` | Update content in a workspace |
| DELETE | `/workspaces/{workspaceId}/content/{contentId}` | Delete content from a workspace |

---

### Content Management — Custom Content (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/customContent` | List custom content types configured for the tenant |
| GET | `/customContent/{typeId}` | Get a specific custom content type definition |
| POST | `/customContent` | Create content with a custom content type |
| PUT | `/customContent/{contentId}` | Update custom content |

---

### Content Profiles & Taxonomy (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/contentProfiles` | List all content profiles (metadata schemas) |
| GET | `/contentProfiles/{profileId}` | Get a content profile definition with all fields |
| GET | `/contentClasses` | List all content classes (taxonomy categories) |
| GET | `/contentClasses/{classId}` | Get a content class definition |

---

### Engagement — Delivery / LiveSend (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/delivery/liveSend` | Create a LiveSend tracked link for content |
| GET | `/delivery/liveSend/{linkId}` | Get LiveSend link details and engagement analytics |
| GET | `/delivery/liveSend` | List all LiveSend links with optional filters |
| DELETE | `/delivery/liveSend/{linkId}` | Revoke/delete a LiveSend link |
| GET | `/delivery/liveSend/{linkId}/analytics` | Get detailed engagement analytics for a LiveSend link |
| GET | `/delivery/liveSend/{linkId}/recipients` | List recipients and their individual engagement data |

**POST `/delivery/liveSend` — Parameters**:

| Field | Type | Required | Description |
|---|---|---|---|
| `contentId` | string | Yes | ID of the content item to share |
| `recipientEmail` | string | Yes | Email address of the recipient |
| `recipientName` | string | No | Display name of the recipient |
| `expirationDate` | datetime | No | When the link expires (ISO 8601) |
| `notifyOnView` | boolean | No | Send notification when recipient views content |
| `allowDownload` | boolean | No | Allow recipient to download the content |

---

### Engagement — Digital Sales Rooms (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/delivery/digitalSalesRooms` | Create a new Digital Sales Room |
| GET | `/delivery/digitalSalesRooms/{dsrId}` | Get DSR details including content and recipients |
| PUT | `/delivery/digitalSalesRooms/{dsrId}` | Update DSR settings, content, or recipients |
| DELETE | `/delivery/digitalSalesRooms/{dsrId}` | Delete a Digital Sales Room |
| GET | `/delivery/digitalSalesRooms/{dsrId}/analytics` | Get engagement analytics for a DSR |
| GET | `/delivery/digitalSalesRooms` | List all Digital Sales Rooms with optional filters |

**POST `/delivery/digitalSalesRooms` — Parameters**:

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Name of the Digital Sales Room |
| `recipients` | array | Yes | Array of recipient objects (email, name, role) |
| `contentItems` | array | Yes | Array of content item IDs to include |
| `branding` | object | No | Custom branding settings (logo, colors) |
| `expirationDate` | datetime | No | When the DSR expires |

---

### Engagement — Email (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/delivery/email` | Send content via email with tracking |
| GET | `/delivery/email/{emailId}/analytics` | Get engagement analytics for a sent email |
| GET | `/delivery/email` | List sent emails with analytics |

---

### Reporting v2 (4 endpoints)

Reporting v2 uses an asynchronous pattern — submit a report request, then poll for results.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/reporting/reports` | Submit a new report request (async) |
| GET | `/reporting/reports/{reportId}` | Check report generation status |
| GET | `/reporting/reports/{reportId}/results` | Download completed report results |
| GET | `/reporting/reportTypes` | List available report types and their parameters |

**Async report workflow**:
1. POST to `/reporting/reports` with report type and parameters
2. Response includes `reportId` and `status: "queued"`
3. Poll GET `/reporting/reports/{reportId}` until `status: "completed"`
4. Download results from GET `/reporting/reports/{reportId}/results`

**Available report types**: Content Usage, User Activity, LiveSend Engagement, DSR Engagement, Learning Completion, Content Effectiveness, Search Analytics.

---

### Users & Groups — SCIM (8 endpoints)

Seismic supports SCIM 2.0 for user and group provisioning.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | List all users in the tenant |
| GET | `/users/{userId}` | Get a specific user's details |
| POST | `/users` | Create a new user (SCIM provisioning) |
| PUT | `/users/{userId}` | Update a user's profile |
| DELETE | `/users/{userId}` | Deactivate/delete a user |
| GET | `/groups` | List all groups |
| POST | `/groups` | Create a new group |
| PUT | `/groups/{groupId}` | Update group membership |

---

### Meetings & Recordings (5 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/meetings` | List recorded meetings with filters (date, participant, deal) |
| GET | `/meetings/{meetingId}` | Get meeting details including AI summary and key moments |
| GET | `/meetings/{meetingId}/transcript` | Get the full meeting transcript |
| GET | `/meetings/{meetingId}/actionItems` | Get AI-extracted action items from a meeting |
| GET | `/meetings/{meetingId}/recording` | Get the meeting recording URL |

---

### Learning & Skills (7 endpoints)

Note: Learning endpoints may use a different base URL if the tenant's Seismic Learning instance was originally a standalone Lessonly deployment.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/learning/lessons` | List all lessons with optional filters |
| GET | `/learning/lessons/{lessonId}` | Get lesson details including content and completion stats |
| GET | `/learning/paths` | List all learning paths |
| GET | `/learning/paths/{pathId}` | Get learning path details with lessons and progress |
| POST | `/learning/assignments` | Assign lessons or paths to users/groups |
| GET | `/learning/completions` | List completion records with filters (user, lesson, date range) |
| GET | `/learning/certifications` | List certifications and their status per user |

---

### Search (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/search` | Core search — search content library by keyword, filters, and facets |
| POST | `/search/generative` | Generative AI search — natural language query with AI-synthesized answer |
| GET | `/search/suggestions` | Search suggestions/autocomplete based on partial query |

**GET `/search` — Key parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | Yes | Search query string |
| `contentType` | string | No | Filter by content type |
| `contentProfileId` | string | No | Filter by content profile |
| `limit` | integer | No | Results per page |
| `continuationToken` | string | No | Pagination cursor |

---

### LiveDocs — Express & Process (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/livedocs/templates` | List available LiveDoc templates |
| GET | `/livedocs/templates/{templateId}` | Get template details including merge field definitions |
| POST | `/livedocs/generate` | Generate a LiveDoc via Express (single-step, immediate) |
| POST | `/livedocs/process` | Start a LiveDoc Process workflow (multi-step with approvals) |
| GET | `/livedocs/process/{processId}` | Check the status of a LiveDoc Process workflow |
| GET | `/livedocs/process/{processId}/result` | Download the completed LiveDoc from a Process workflow |

**POST `/livedocs/generate` (Express) — Parameters**:

| Field | Type | Required | Description |
|---|---|---|---|
| `templateId` | string | Yes | ID of the LiveDoc template |
| `mergeData` | object | Yes | Key-value pairs mapping merge fields to values |
| `outputFormat` | string | No | Output format: `pdf`, `pptx`, `docx` (defaults to template default) |
| `dataSourceId` | string | No | ID of a connected data source (CRM) to pull merge data from |
| `recordId` | string | No | CRM record ID to pull data from (used with `dataSourceId`) |

**POST `/livedocs/process` (Process) — Parameters**:

| Field | Type | Required | Description |
|---|---|---|---|
| `templateId` | string | Yes | ID of the LiveDoc template |
| `mergeData` | object | No | Initial merge data (can be supplemented during workflow) |
| `approvers` | array | No | List of user IDs who must approve |
| `contributors` | array | No | List of user IDs who can edit sections |
| `dueDate` | datetime | No | Deadline for the workflow |

---

### Programs & Tasks (6 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/programs` | List all enablement programs |
| GET | `/programs/{programId}` | Get program details with tasks and progress |
| POST | `/programs` | Create a new enablement program |
| PUT | `/programs/{programId}` | Update a program |
| GET | `/programs/{programId}/analytics` | Get program analytics (completion, impact) |
| POST | `/programs/{programId}/tasks` | Add tasks to a program |

---

### Channel Management (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/channels` | List content distribution channels |
| POST | `/channels/{channelId}/publish` | Publish content to a specific channel |
| GET | `/channels/{channelId}/content` | List content published to a channel |

---

### CRM Activity Logging (3 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/crm/activities` | Log a content-related activity to CRM |
| GET | `/crm/activities` | List logged CRM activities |
| GET | `/crm/mappings` | Get CRM field mapping configuration |

---

### Events & Webhooks (4 endpoints)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/webhooks` | Create a webhook subscription |
| GET | `/webhooks` | List all webhook subscriptions |
| GET | `/webhooks/{webhookId}` | Get webhook subscription details |
| DELETE | `/webhooks/{webhookId}` | Delete a webhook subscription |

**POST `/webhooks` — Parameters**:

| Field | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | The URL to receive webhook payloads |
| `events` | array | Yes | Array of event types to subscribe to |
| `secret` | string | No | Shared secret for payload verification (HMAC) |

**Supported webhook events**:

| Event | Description |
|---|---|
| `content.published` | Content item published to library |
| `content.updated` | Content item metadata or file updated |
| `content.deleted` | Content item deleted |
| `livesend.viewed` | Recipient viewed a LiveSend link |
| `livesend.downloaded` | Recipient downloaded content from LiveSend |
| `dsr.viewed` | Recipient accessed a Digital Sales Room |
| `dsr.contentViewed` | Recipient viewed specific content in a DSR |
| `livedoc.generated` | LiveDoc generation completed |
| `learning.completed` | User completed a lesson or learning path |
| `program.taskCompleted` | User completed a program task |
| `user.created` | New user provisioned |
| `user.deactivated` | User deactivated |

**Webhook payload format**:
```json
{
  "event": "livesend.viewed",
  "timestamp": "2026-01-15T10:30:00Z",
  "tenantId": "your-tenant-id",
  "data": {
    "linkId": "ls_abc123",
    "contentId": "cnt_def456",
    "recipientEmail": "prospect@example.com",
    "viewedAt": "2026-01-15T10:30:00Z",
    "timeSpent": 145,
    "pagesViewed": [1, 2, 3, 5]
  }
}
```

Payloads are signed with HMAC-SHA256 using the shared secret. Verify the `X-Seismic-Signature` header to validate authenticity.

---

## Common Automation Patterns

**Content publishing pipeline**: Upload content to workspace via POST `/workspaces/{id}/content` -> review and approve -> publish to library via POST `/library/content/{id}/publish` -> distribute via LiveSend or DSR.

**LiveDocs Express generation**: Get template details via GET `/livedocs/templates/{id}` to understand required merge fields -> POST `/livedocs/generate` with merge data from CRM -> receive generated document URL in response.

**DSR lifecycle**: Create DSR via POST `/delivery/digitalSalesRooms` with recipients and content -> monitor engagement via GET `/{dsrId}/analytics` -> update content as deal progresses via PUT -> clean up expired DSRs.

**Reporting pipeline**: List available report types via GET `/reporting/reportTypes` -> submit report via POST `/reporting/reports` -> poll status via GET `/{reportId}` -> download results when complete.

**User provisioning (SCIM)**: Create users via POST `/users` -> assign to groups via PUT `/groups/{id}` -> assign learning paths via POST `/learning/assignments` -> monitor completion via GET `/learning/completions`.

**Webhook-driven engagement alerts**: Create webhook subscriptions for `livesend.viewed` and `dsr.contentViewed` -> receive real-time engagement signals -> trigger follow-up workflows in CRM or Slack.

---

## Known Gaps & Caveats

- **Developer portal auth required**: Full endpoint details, request/response schemas, and interactive API explorer are behind developer portal authentication at developer.seismic.com. This reference is best-effort from public documentation and may not reflect the latest API changes.
- **Tenant-specific base URLs**: Some tenants may have custom base URLs. Check your tenant's API settings in the Seismic admin panel.
- **Learning API divergence**: Seismic Learning (formerly Lessonly) may use a different base URL and authentication mechanism if the instance predates the Seismic acquisition. Check with your admin.
- **Rate limit variability**: The ~100 req/min limit is approximate. Some endpoints (Reporting v2, bulk operations) have lower limits. The developer portal documents exact limits per endpoint.
- **Seismic-Highspot merger**: The late 2025 merger announcement may result in API changes, endpoint deprecations, or new unified APIs. Monitor developer.seismic.com for migration guidance.

---

## Source URLs

- Developer Portal: https://developer.seismic.com
- API Documentation: https://developer.seismic.com/seismicapi/Content/Introduction.htm
- Seismic Learning (Lessonly) API: https://developer.seismic.com/seismicapi/Content/Learning/Introduction.htm
- Webhook Documentation: https://developer.seismic.com/seismicapi/Content/Webhooks/Introduction.htm
- SCIM Provisioning: https://developer.seismic.com/seismicapi/Content/SCIM/Introduction.htm
