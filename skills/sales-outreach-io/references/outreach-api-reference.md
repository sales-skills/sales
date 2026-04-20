<!-- Source: https://developers.outreach.io/api/ and https://api.outreach.io/api/v2/schema/openapi.json -->

# Outreach REST API Reference

## Overview

- **Base URL**: `https://api.outreach.io/api/v2`
- **Spec**: JSON:API 1.0 specification
- **Auth**: OAuth 2.0 (Bearer token)
- **Rate limit**: 10,000 requests/hour per user
- **OpenAPI spec**: `https://api.outreach.io/api/v2/schema/openapi.json`
- **JSON Schema**: `https://api.outreach.io/api/v2/schema.json`
- **Developer portal**: https://developers.outreach.io

## Authentication — OAuth 2.0

### Step 1: Authorization code request

```
GET https://api.outreach.io/oauth/authorize
  ?client_id=<Application_Identifier>
  &redirect_uri=<Redirect_URI>
  &response_type=code
  &scope=<space-separated-scopes>
```

Both `redirect_uri` and `scope` must be URL-encoded.

### Step 2: Exchange code for tokens

```bash
curl https://api.outreach.io/oauth/token \
  -X POST \
  -d client_id=<Application_Identifier> \
  -d client_secret=<Application_Secret> \
  -d redirect_uri=<Application_Redirect_URI> \
  -d grant_type=authorization_code \
  -d code=<Authorization_Code>
```

Response:
```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 7200,
  "refresh_token": "...",
  "scope": "...",
  "created_at": 1234567890
}
```

- Access token: 2-hour expiration
- Refresh token: 14-day expiration
- Can only refresh once per 60 seconds

### Step 3: Refresh expired tokens

```bash
curl https://api.outreach.io/oauth/token \
  -X POST \
  -d grant_type=refresh_token \
  -d refresh_token=<Refresh_Token>
```

### Scopes

Pattern: `resource.permission`

Examples:
- `prospects.read`, `prospects.write`, `prospects.all`, `prospects.delete`
- `sequences.read`, `sequences.write`, `sequences.all`
- `accounts.read`, `accounts.write`, `accounts.all`
- `mailings.read`, `calls.read`, `opportunities.read`

**Scopes are NOT additive** — `prospects.write` does NOT grant read access. Request both `prospects.read` and `prospects.write` if you need both.

## Making requests

```bash
curl https://api.outreach.io/api/v2/prospects \
  -H "Authorization: Bearer <Access_Token>" \
  -H "Content-Type: application/vnd.api+json"
```

### Request headers
- `Authorization: Bearer <token>` (required)
- `Content-Type: application/vnd.api+json` (for POST/PATCH)
- `Accept: application/vnd.api+json`

### Rate limit headers (on every response)
- `X-RateLimit-Limit`: max requests per hour
- `X-RateLimit-Remaining`: requests remaining
- `X-RateLimit-Reset`: epoch time when limit resets
- `Retry-After`: seconds to wait (on 429 responses)

### Special rate limits
- Kaia recordings/transcripts: 3 calls/second, 6,000 calls/day (org-level)

## API Resources

### Account management
| Method | Path | Description |
|--------|------|-------------|
| GET | `/accounts` | List accounts |
| POST | `/accounts` | Create account |
| GET | `/accounts/{id}` | Get account |
| PATCH | `/accounts/{id}` | Update account |
| DELETE | `/accounts/{id}` | Delete account |
| GET/POST | `/accountNotes` | Account notes |

### Prospects
| Method | Path | Description |
|--------|------|-------------|
| GET | `/prospects` | List prospects |
| POST | `/prospects` | Create prospect |
| GET | `/prospects/{id}` | Get prospect |
| PATCH | `/prospects/{id}` | Update prospect |
| DELETE | `/prospects/{id}` | Delete prospect |

### Sequences
| Method | Path | Description |
|--------|------|-------------|
| GET | `/sequences` | List sequences |
| POST | `/sequences` | Create sequence |
| GET | `/sequences/{id}` | Get sequence |
| PATCH | `/sequences/{id}` | Update sequence |

### Sequence states
| Method | Path | Description |
|--------|------|-------------|
| GET | `/sequenceStates` | List prospect-sequence enrollments |
| POST | `/sequenceStates` | Enroll prospect in sequence |
| GET | `/sequenceStates/{id}` | Get enrollment status |

### Mailings (emails)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/mailings` | List sent/scheduled emails |
| GET | `/mailings/{id}` | Get email details |

### Calls
| Method | Path | Description |
|--------|------|-------------|
| GET | `/calls` | List calls |
| POST | `/calls` | Log a call |
| GET | `/calls/{id}` | Get call details |

### Opportunities
| Method | Path | Description |
|--------|------|-------------|
| GET | `/opportunities` | List opportunities |
| GET | `/opportunities/{id}` | Get opportunity |

### Tasks
| Method | Path | Description |
|--------|------|-------------|
| GET | `/tasks` | List tasks |
| POST | `/tasks` | Create task |
| GET | `/tasks/{id}` | Get task |
| PATCH | `/tasks/{id}` | Update task |

### Templates
| Method | Path | Description |
|--------|------|-------------|
| GET | `/templates` | List email templates |
| POST | `/templates` | Create template |
| GET | `/templates/{id}` | Get template |
| PATCH | `/templates/{id}` | Update template |

### Users & Teams
| Method | Path | Description |
|--------|------|-------------|
| GET | `/users` | List users |
| GET | `/users/{id}` | Get user |
| GET | `/teams` | List teams |
| GET | `/roles` | List roles |

### Webhooks
| Method | Path | Description |
|--------|------|-------------|
| GET | `/webhooks` | List webhooks |
| POST | `/webhooks` | Create webhook |
| GET | `/webhooks/{id}` | Get webhook |
| PATCH | `/webhooks/{id}` | Update webhook |
| DELETE | `/webhooks/{id}` | Delete webhook |

### Bulk operations
| Method | Path | Description |
|--------|------|-------------|
| GET | `/batches` | List batch jobs |
| GET | `/batches/{id}` | Get batch status |
| POST | `/batches/{id}/actions/cancel` | Cancel batch |
| POST | `/batches/{id}/actions/confirm` | Confirm batch |

Bulk action types: `accountAddTags`, `accountsAddAssignments`, `accountsAssignOwner`, `accountsBulkModify`, `accountsDestroyAll`, `accountsRemoveAssignments`, `accountsRemoveTags`, `customObjectBulkDelete`, `customObjectBulkModify`

### Other resources
| Resource | Description |
|----------|-------------|
| `/auditLogs` | Admin activity audit trail |
| `/callDisposition` | Call outcome codes |
| `/callPurpose` | Call purpose codes |
| `/contentCategory` | Content organization |
| `/emailAddress` | Email addresses on prospects |
| `/events` | Calendar/engagement events |
| `/favorites` | User favorites |
| `/imports` | Bulk import jobs |
| `/mailAliases` | Sending aliases |
| `/mailboxes` | Connected email accounts |
| `/personas` | Target persona definitions |
| `/phoneNumbers` | Phone numbers on prospects |
| `/products` | Product catalog |
| `/purchases` | Purchase records |
| `/recipients` | Email recipients |
| `/rulesets` | Automation rules |
| `/sequenceSteps` | Steps within sequences |
| `/sequenceTemplates` | Template assignments to steps |
| `/snippets` | Reusable text blocks |
| `/stages` | Deal stages |

## Custom objects

Outreach supports custom objects via REST API with schema management:
- Define custom schemas with typed fields
- CRUD operations on custom object instances
- Bulk operations (delete, modify)

### Supported custom field types
`boolean`, `currency`, `date`, `date_time`, `inclusion`, `multi_inclusion`, `numerical`, `percentage`, `phone_number`, `string`, `url`

Custom fields available on: Account, Opportunity, OpportunityLineItem, OpportunityProspectRole, Product, Prospect, Purchase

## Webhooks

- Event-driven notifications to your endpoint
- Configure via API (`POST /webhooks`) or Outreach admin UI
- Events include: prospect created/updated, mailing sent/bounced/replied, sequence state changed, call completed
- Payload format: JSON:API structure matching the resource type

## Error handling

| Code | Meaning |
|------|---------|
| 401 | Invalid/expired token |
| 403 | Insufficient scope |
| 404 | Resource not found |
| 422 | Validation error |
| 429 | Rate limit exceeded (check `Retry-After` header) |
| 503 | Maintenance (check `Retry-After` header) |

## S2S (Server-to-Server) auth

Alternative to OAuth for backend integrations:
- S2S auth token issued directly
- No user interaction required
- Suitable for service-to-service data sync
- Configure in Outreach Developer Portal
