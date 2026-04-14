<!-- Source: https://www.contentstack.com/docs/developers/apis -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/content-management-api -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/content-delivery-api -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/launch-api -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/automation-hub-management-api -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/personalize-management-api -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/generative-ai-api -->
<!-- Source: https://www.contentstack.com/docs/developers/apis/knowledge-vault-api -->

# Contentstack API Reference

Contentstack provides 13 REST APIs. This reference covers the major ones verbatim from official docs.

---

## 1. Content Management API (CMA)

### Base URLs

| Region | URL |
|---|---|
| AWS North America | https://api.contentstack.io/ |
| AWS Europe | https://eu-api.contentstack.com/ |
| AWS Australia | https://au-api.contentstack.com/ |
| Azure North America | https://azure-na-api.contentstack.com/ |
| Azure Europe | https://azure-eu-api.contentstack.com/ |
| GCP North America | https://gcp-na-api.contentstack.com/ |
| GCP Europe | https://gcp-eu-api.contentstack.com/ |

### Authentication

Three methods:

1. **API Key + Authtoken**: `api_key` header + `authtoken` header (user session token)
2. **API Key + Management Token**: `api_key` header + `authorization` header (stack-scoped token)
3. **API Key + OAuth Token**: `api_key` header + `authorization` header (OAuth access token)

### Rate Limits

- Read (GET): 10 requests/second per organization
- Write (POST/PUT/DELETE): 10 requests/second per organization
- Bulk actions: 1 request/second
- Stack creation: 1 stack/minute
- Response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`

### Token Limits

- Authtokens: max 20 valid per user (oldest evicted when exceeded)
- Management tokens: max 10 per stack

### HTTP Status Codes

| Code | Meaning |
|---|---|
| 400 | Bad Request |
| 401 | Access Denied |
| 403 | Forbidden |
| 404 | Not Found |
| 412 | Invalid API key |
| 422 | Validation error |
| 429 | Rate limit exceeded |
| 500+ | Server errors |

### Endpoints

#### User Session
- `POST /user-session/login` — Authenticate and get authtoken
- `POST /user-session/logout` — Sign out

#### Users
- `GET /users/{uid}` — Retrieve user details
- `PUT /users/{uid}` — Update user
- `POST /users/{uid}/activate` — Activate account
- `POST /users/forgot-password` — Request password reset
- `POST /users/reset-password` — Reset password

#### Organizations
- `GET /organizations` — List all organizations
- `GET /organizations/{org_uid}` — Get single organization
- `GET /organizations/{org_uid}/roles` — Organization roles
- `GET /organizations/{org_uid}/users` — List users
- `POST /organizations/{org_uid}/users` — Add users
- `DELETE /organizations/{org_uid}/users` — Remove users
- `POST /organizations/{org_uid}/transfer-ownership` — Transfer
- `GET /organizations/{org_uid}/stacks` — List stacks
- `GET /organizations/{org_uid}/audit-logs` — Audit logs

#### Teams
- `GET /teams` — List teams
- `GET /teams/{team_uid}` — Get team
- `POST /teams` — Create team
- `PUT /teams/{team_uid}` — Update team
- `DELETE /teams/{team_uid}` — Delete team
- `GET /teams/{team_uid}/users` — Team users
- `POST /teams/{team_uid}/users` — Add user to team
- `DELETE /teams/{team_uid}/users/{user_uid}` — Remove user
- `GET /teams/{team_uid}/stack-role-mappings` — Stack role mappings
- `POST /teams/{team_uid}/stack-role-mappings` — Add mapping
- `PUT /teams/{team_uid}/stack-role-mappings/{mapping_uid}` — Update mapping
- `DELETE /teams/{team_uid}/stack-role-mappings/{mapping_uid}` — Remove mapping

#### Stacks
- `GET /stacks/{api_key}` — Get stack
- `GET /stacks` — List all stacks
- `POST /stacks` — Create stack
- `PUT /stacks/{api_key}` — Update stack
- `DELETE /stacks/{api_key}` — Delete stack
- `GET /stacks/{api_key}/users` — Stack users
- `PUT /stacks/{api_key}/users/{user_uid}/roles` — Update user roles
- `POST /stacks/{api_key}/transfer-ownership` — Transfer
- `POST /stacks/{api_key}/accept-ownership` — Accept
- `GET /stacks/{api_key}/settings` — Stack settings
- `POST /stacks/{api_key}/settings` — Add settings
- `POST /stacks/{api_key}/reset-settings` — Reset settings
- `POST /stacks/{api_key}/share` — Share stack
- `DELETE /stacks/{api_key}/unshare` — Unshare

#### Branches
- `GET /stacks/{api_key}/branches` — List branches
- `GET /stacks/{api_key}/branches/{branch_uid}` — Get branch
- `POST /stacks/{api_key}/branches` — Create branch
- `DELETE /stacks/{api_key}/branches/{branch_uid}` — Delete branch
- `POST /stacks/{api_key}/branches-compare` — Compare branches
- `POST /stacks/{api_key}/branches-merge` — Merge branches
- `GET /stacks/{api_key}/merge-jobs` — List merge jobs
- `GET /stacks/{api_key}/merge-jobs/{merge_job_uid}` — Get merge job

#### Aliases
- `GET /stacks/{api_key}/aliases` — List aliases
- `GET /stacks/{api_key}/aliases/{alias_uid}` — Get alias
- `POST /stacks/{api_key}/aliases` — Create alias
- `DELETE /stacks/{api_key}/aliases/{alias_uid}` — Delete alias

#### Content Types
- `GET /content_types?query={}` — List content types
- `GET /content_types/{content_type_uid}` — Get content type
- `POST /content_types` — Create content type
- `PUT /content_types/{content_type_uid}` — Update content type
- `DELETE /content_types/{content_type_uid}` — Delete content type
- `GET /content_types/{content_type_uid}/references` — Get references
- `POST /content_types/{content_type_uid}/export` — Export
- `POST /content_types/import` — Import

#### Variant Groups
- `GET /variant-groups` — List variant groups
- `POST /variant-groups/{variant_group_uid}/link-content-types` — Link content types
- `POST /variant-groups/{variant_group_uid}/unlink-content-types` — Unlink

#### Taxonomies
- `GET /taxonomies` — List taxonomies
- `GET /taxonomies/{taxonomy_uid}` — Get taxonomy
- `POST /taxonomies` — Create taxonomy
- `PUT /taxonomies/{taxonomy_uid}` — Update taxonomy
- `POST /taxonomies/{taxonomy_uid}/localize` — Localize
- `DELETE /taxonomies/{taxonomy_uid}/localize` — Unlocalize
- `POST /taxonomies/{taxonomy_uid}/export` — Export
- `POST /taxonomies/import` — Import
- `DELETE /taxonomies/{taxonomy_uid}` — Delete

#### Terms
- `GET /taxonomies/{taxonomy_uid}/terms` — List terms
- `GET /taxonomies/{taxonomy_uid}/terms/{term_uid}` — Get term
- `POST /taxonomies/{taxonomy_uid}/terms` — Create term
- `PUT /taxonomies/{taxonomy_uid}/terms/{term_uid}` — Update term
- `POST /taxonomies/{taxonomy_uid}/terms/{term_uid}/localize` — Localize
- `DELETE /taxonomies/{taxonomy_uid}/terms/{term_uid}/localize` — Unlocalize
- `GET /taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants` — Get descendants
- `GET /taxonomies/{taxonomy_uid}/terms/{term_uid}/ancestors` — Get ancestors
- `PUT /taxonomies/{taxonomy_uid}/terms/{term_uid}/move` — Reorder
- `DELETE /taxonomies/{taxonomy_uid}/terms/{term_uid}` — Delete
- `GET /taxonomies/$all/terms` — All terms across taxonomies

#### Global Fields
- `GET /global_fields` — List global fields
- `GET /global_fields/{global_field_uid}` — Get global field
- `POST /global_fields` — Create
- `PUT /global_fields/{global_field_uid}` — Update
- `DELETE /global_fields/{global_field_uid}` — Delete
- `POST /global_fields/import` — Import
- `POST /global_fields/{global_field_uid}/export` — Export

#### Entries
- `GET /entries?query={}` — List entries
- `GET /entries/{entry_uid}` — Get entry
- `POST /entries` — Create entry
- `PUT /entries/{entry_uid}` — Update entry
- `DELETE /entries/{entry_uid}` — Delete entry
- `POST /entries/{entry_uid}/publish` — Publish
- `DELETE /entries/{entry_uid}/unpublish` — Unpublish
- `PUT /entries/{entry_uid}/workflow` — Set workflow stage

**Atomic operations on entries:**
- `PUSH` — append data to array field
- `PULL` — remove data from array
- `UPDATE` — modify at specific index
- `ADD` — increment numeric field
- `SUB` — decrement numeric field

#### Assets
- `GET /assets` — List all assets
- `GET /assets/{asset_uid}` — Get asset
- `POST /assets` — Upload asset
- `PUT /assets/{asset_uid}` — Update asset
- `DELETE /assets/{asset_uid}` — Delete asset
- `POST /assets/{asset_uid}/publish` — Publish
- `DELETE /assets/{asset_uid}/unpublish` — Unpublish

#### Workflows
- `GET /workflows` — List workflows
- `GET /workflows/{workflow_uid}` — Get workflow
- `POST /workflows` — Create
- `PUT /workflows/{workflow_uid}` — Update
- `DELETE /workflows/{workflow_uid}` — Delete

#### Webhooks
- Configure event notifications for content lifecycle events
- Events: entry/asset CRUD, publish/unpublish, workflow stage changes

#### Publishing & Releases
- `POST /entries/{entry_uid}/publish` — Publish entry
- `DELETE /entries/{entry_uid}/unpublish` — Unpublish
- Releases — bundle entries/assets for coordinated publishing

#### Roles & Environments
- Roles — define permissions per stack
- Environments — deployment targets with delivery tokens

#### Bulk Operations
- Bulk publish, unpublish, delete operations
- Rate limit: 1 request/second

#### Audit Logs
- Track all system activity

### Request/Response Format

**Minimum headers:**
```
api_key: {stack_api_key}
authtoken: {user_authtoken}
Content-Type: application/json
```

**Query parameters:**
- `locale` — content locale
- `environment` — target environment
- `include_branch` — include branch UID
- `query` — JSON query filter
- `skip` / `limit` — pagination (default limit: 100)
- `include_metadata` — include metadata
- `include_publish_details` — include publish info
- `version` — specific content version

**Create entry example:**
```json
{
  "entry": {
    "title": "Sample Entry",
    "url": "/sample-entry",
    "reference_field_uid": [
      {
        "uid": "referenced_entry_uid",
        "_content_type_uid": "referenced_content_type"
      }
    ]
  }
}
```

---

## 2. Content Delivery API (CDA)

### Base URLs

| Region | URL |
|---|---|
| AWS North America | https://cdn.contentstack.io |
| AWS Europe | https://eu-cdn.contentstack.com |
| AWS Australia | https://au-cdn.contentstack.com |
| Azure North America | https://azure-na-cdn.contentstack.com |
| Azure Europe | https://azure-eu-cdn.contentstack.com |
| GCP North America | https://gcp-na-cdn.contentstack.com |
| GCP Europe | https://gcp-eu-cdn.contentstack.com |

### Authentication

Two required headers:
- `access_token` — Delivery Token (environment-specific)
- `api_key` — Stack API Key

### Endpoints

#### Content Types
- `GET /v3/content_types` — List all (max 100 per request)
- `GET /v3/content_types/{content_type_uid}` — Get specific

#### Entries
- `GET /v3/content_types/{content_type_uid}/entries` — List entries
- `GET /v3/content_types/{content_type_uid}/entries/{entry_uid}` — Single entry
- `GET /v3/content_types/{content_type_uid}/entries?include_all=true` — With references

#### Assets
- `GET /v3/assets` — List all
- `GET /v3/assets/{asset_uid}` — Specific asset

#### Synchronization
- `GET /v3/stacks/sync?init=true` — Initial sync
- `GET /v3/stacks/sync?sync_token={token}` — Delta updates

#### Global Fields
- `GET /v3/global_fields` — All
- `GET /v3/global_fields/{global_field_uid}` — Single

### Query Operators

- `$eq`, `$ne` — equals / not equals
- `$in`, `$nin` — array equals / not equals
- `$lt`, `$lte`, `$gt`, `$gte` — comparisons
- `$regex` — regular expressions
- `$and`, `$or` — logical operators
- `$in_query` — reference search
- `$exists` — field existence

### Rate Limiting

CDN-cached responses: not rate-limited. Origin requests: 100 req/s per organization.

URL size limitation: 8KB max (returns 414 if exceeded).

### Response Headers

- `x-served-by` — cache node
- `x-cache` — hit/miss
- `x-runtime` — processing time (ms)
- `age` — cache age (seconds)

---

## 3. Launch API

### Base URLs

| Region | URL |
|---|---|
| AWS NA | https://launch-api.contentstack.com |
| AWS EU | https://eu-launch-api.contentstack.com |
| AWS AU | https://au-launch-api.contentstack.com |
| Azure NA | https://azure-na-launch-api.contentstack.com |
| Azure EU | https://azure-eu-launch-api.contentstack.com |
| GCP NA | https://gcp-na-launch-api.contentstack.com |
| GCP EU | https://gcp-eu-launch-api.contentstack.com |

### Authentication

OAuth (recommended): `Authorization: Bearer <access_token>`
Authtoken (legacy): `authtoken` + `organization_uid` headers

### Endpoints

#### Projects
- `GET /projects` — List all
- `POST /projects` — Create (Git or file upload)
- `GET /projects/{project_uid}` — Get
- `PUT /projects/{project_uid}` — Update
- `DELETE /projects/{project_uid}` — Delete

#### Environments
- `GET /projects/{project_uid}/environments` — List
- `POST /projects/{project_uid}/environments` — Create
- `GET /projects/{project_uid}/environments/{environment_uid}` — Get
- `PUT /projects/{project_uid}/environments/{environment_uid}` — Update
- `DELETE /projects/{project_uid}/environments/{environment_uid}` — Delete
- `POST .../revalidate-cdn-cache` — Purge cache

#### Deployments
- `GET .../deployments` — List
- `POST .../deployments` — Create
- `GET .../deployments/{deployment_uid}` — Get
- `GET .../deployments/{deployment_uid}/logs` — Build logs
- `GET .../deployments/{deployment_uid}/server-logs` — Server logs

#### File Upload URLs
- `GET /projects/signed-upload-url` — Project upload
- `GET .../environments/signed-upload-url` — Environment upload
- `GET .../deployments/signed-upload-url` — Deployment upload
- `GET .../deployments/{deployment_uid}/download-url` — Download

### OAuth Scopes

| Scope | Access |
|---|---|
| `launch:manage` | Full CRUD |
| `launch.projects:read` | Read-only |
| `launch.projects:write` | Create/update |
| `launch.projects:delete` | Delete |

Rate limit: 10 req/s per org.

---

## 4. Automate Management API

### Base URLs

| Region | URL |
|---|---|
| AWS NA | https://automations-api.contentstack.com/ |
| AWS EU | https://eu-prod-automations-api.contentstack.com |
| AWS AU | https://au-prod-automations-api.contentstack.com |
| Azure NA | https://azure-na-automations-api.contentstack.com |
| Azure EU | https://azure-eu-automations-api.contentstack.com |
| GCP NA | https://gcp-na-automations-api.contentstack.com |
| GCP EU | https://gcp-eu-automations-api.contentstack.com |

### Authentication

`authtoken` + `organization_uid` headers. Management token auth not yet supported.

### Endpoints

#### Projects
- `GET /v1/projects` — List all
- `GET /v1/projects/{project_id}` — Get
- `POST /v1/projects` — Create
- `PUT /v1/projects/{project_id}` — Update
- `DELETE /v1/projects/{project_id}` — Delete

#### Automations
- `GET /v1/projects/{project_id}/automations` — List
- `GET /v1/projects/{project_id}/automations/{automation_id}` — Get
- `PUT /v1/projects/{project_id}/automations/{automation_id}/status` — Activate/deactivate

#### Execution & Audit Logs
- `GET /v1/projects/{project_id}/execution-logs` — List execution logs
- `GET /v1/projects/{project_id}/execution-logs/{log_id}` — Get log
- `GET /v1/projects/{project_id}/audit-logs` — List audit logs
- `GET /v1/projects/{project_id}/audit-logs/{log_id}` — Get audit log

#### Variables
- `GET /v1/projects/{project_id}/variables` — List
- `GET /v1/projects/{project_id}/variables/{variable_id}` — Get
- `POST /v1/projects/{project_id}/variables` — Create
- `PUT /v1/projects/{project_id}/variables/{variable_id}` — Update
- `DELETE /v1/projects/{project_id}/variables/{variable_id}` — Delete

#### Accounts
- `GET /v1/projects/{project_id}/accounts` — List
- `GET /v1/projects/{project_id}/accounts/{account_id}` — Get

Rate limit: 10 req/s per org. Default pagination: 100 items.

---

## 5. Personalize Management API

### Base URLs

| Region | URL |
|---|---|
| AWS NA | https://personalize-api.contentstack.com |
| AWS EU | https://eu-personalize-api.contentstack.com |
| AWS AU | https://au-personalize-api.contentstack.com |
| Azure NA | https://azure-na-personalize-api.contentstack.com |
| Azure EU | https://azure-eu-personalize-api.contentstack.com |
| GCP NA | https://gcp-na-personalize-api.contentstack.com |
| GCP EU | https://gcp-eu-personalize-api.contentstack.com |

### Authentication

OAuth: scopes `personalize:manage` (full) or `personalize:read` (read-only)
Authtoken: `authtoken` header + `x-project-uid` header

### Endpoints

#### Attributes
- `POST /attributes` — Create
- `GET /attributes` — List all
- `PUT /attributes/{id}` — Update
- `DELETE /attributes/{id}` — Delete

#### Audiences
- `POST /audiences` — Create
- `GET /audiences` — List all
- `PUT /audiences/{id}` — Update
- `DELETE /audiences/{id}` — Delete

#### Experiences
- `POST /experiences` — Create (SEGMENTED or AB_TEST)
- `GET /experiences` — List all
- `PUT /experiences/{id}` — Update
- `GET /experiences/{id}` — Get
- `DELETE /experiences/{id}` — Delete

#### Experience Versions
- `POST /experiences/{id}/versions` — Create version
- `GET /experiences/{id}/versions` — List versions
- `PUT /experiences/{id}/versions/{versionId}` — Update
- `DELETE /experiences/{id}/versions/{versionId}` — Delete draft

#### Events
- `POST /events` — Create
- `GET /events` — List all
- `PUT /events/{id}` — Update
- `DELETE /events/{id}` — Delete

#### Priority
- `GET /priority` — Get priority order
- `PUT /priority` — Update priority order

#### Analytics
- `GET /experiences/{id}/analytics/summary` — Summary
- `GET /experiences/{id}/analytics/timeseries` — Time-series

#### Geolocation
- `GET /regions` — Regions by query
- `GET /countries` — Countries by query
- `GET /cities` — Cities by query

Rate limit: 10 req/s per org.

---

## 6. Generative AI API

### Base URLs

Regional endpoints at `https://{region-prefix}ai.contentstack.com/brand-kits`

### Authentication

Headers: `authtoken` + `authorization` (OAuth) + `brand_kit_uid`

### Endpoints

- `POST /v1/brand-kits/...` — Process prompt via Knowledge Vault + LLM

**Request body:**
```json
{
  "prompt": "Enter your prompt",
  "knowledge_vault": true,
  "voice_profile_uid": "cs*************d"
}
```

OAuth scope: `brand-kits:read`
Rate limit: 10 write req/s per org.

---

## 7. Knowledge Vault API

Same base URLs as GenAI API.

### Endpoints

- `POST` — Ingest content (scope: `brand-kits:manage`)
- `PUT` — Update content (scope: `brand-kits:manage`)
- `DELETE` — Delete content (scope: `brand-kits:manage`)

Rate limit: 10 write req/s per org.

---

## 8. Other APIs (summary)

| API | Purpose | Docs URL |
|---|---|---|
| GraphQL CDA | Fetch customized responses, nested resources in single request | /docs/developers/apis/graphql-content-delivery-api |
| Analytics API | CMS, Launch, and Automate analytics data | /docs/developers/apis/analytics-api |
| Brand Kit Management API | Manage Brand Kit, Voice Profile, Custom Credentials | /docs/developers/apis/brand-kit-management-api |
| Image Delivery API | Retrieve, manipulate, convert images on-the-fly | /docs/developers/apis/image-delivery-api |
| SCIM API | User provisioning/deprovisioning via IdP | /docs/developers/apis/scim-api |
| Personalize Edge API | Set user attributes, get manifest, track events (client-side) | /docs/developers/apis/personalize-edge-api |

---

## SDKs

### Delivery SDKs
JavaScript, TypeScript, React Native, Node.js, Python, Java, .NET, PHP, Ruby, Android, iOS, Dart

### Management SDKs
JavaScript, Python, Java, .NET

### Utils SDKs
TypeScript, JavaScript, Python, Java, .NET, Ruby, Android, iOS, Dart

### Other SDKs
- **Marketplace SDK**: JavaScript, Java — build and publish Marketplace apps
- **App SDK**: TypeScript — build custom apps within Contentstack UI
- **Personalize Edge SDK**: JavaScript — evaluate personalization rules client-side
- **DataSync SDK**: TypeScript — sync published content locally with incremental updates

### OpenAPI Specs
Available at: https://github.com/contentstack/contentstack-openapi
