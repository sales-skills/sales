<!-- Source: https://docs.mulesoft.com/mq/mq-apis, https://docs.mulesoft.com/runtime-manager/runtime-manager-api, https://docs.mulesoft.com/access-management/, https://docs.mulesoft.com/api-manager/latest/latest-overview-concept -->

# MuleSoft Anypoint Platform API Reference

MuleSoft exposes multiple REST APIs for programmatic management of the Anypoint Platform. These are platform management APIs — not the APIs you build with MuleSoft.

## Authentication

All APIs require a bearer token.

### Token acquisition (without MFA)

```
POST https://anypoint.mulesoft.com/accounts/login
Content-Type: application/json

{"username": "your-username", "password": "your-password"}
```

Response includes `access_token` (bearer token). Default TTL: 60 minutes.

### Token acquisition (with MFA / Connected Apps)

Use Connected Apps with OAuth2:

```
POST https://anypoint.mulesoft.com/accounts/api/v2/oauth2/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}
```

### Common headers

```
Authorization: Bearer {ACCESS_TOKEN}
Content-Type: application/json
```

### Getting your org and environment IDs

```
GET https://anypoint.mulesoft.com/accounts/api/me
```

Returns `user.organizationId` (ORG_ID).

```
GET https://anypoint.mulesoft.com/accounts/api/organizations/{ORG_ID}/environments
```

Returns list of environments with `id` (ENV_ID) and `name`.

---

## Access Management API

Manage users, organizations, business groups, roles, and permissions.

**Portal**: `https://anypoint.mulesoft.com/apiplatform/anypoint-platform/#/portals/organizations/68ef9520-24e9-4cf2-b2f5-620025690913/apis/11270/versions/11646/pages/11244`

Key capabilities:
- User and client management
- Organization and business group CRUD
- Role and permission assignment
- Connected app configuration
- SSO / federated identity provider setup
- Audit logging queries
- Multi-factor authentication management

---

## Runtime Manager API

**Base URL**: `https://anypoint.mulesoft.com/hybrid/api/v1`

### Required headers

```
Authorization: Bearer {ACCESS_TOKEN}
X-ANYPNT-ENV-ID: {ENV_ID}
X-ANYPNT-ORG-ID: {ORG_ID}
```

### Endpoints

| Operation | Method | Endpoint |
|-----------|--------|----------|
| List applications | GET | `/applications` |
| Get application | GET | `/applications/{appId}` |
| Deploy application | POST | `/applications` |
| Redeploy application | PUT | `/applications/{appId}` |
| Undeploy application | DELETE | `/applications/{appId}` |
| List servers | GET | `/servers` |
| Get server info | GET | `/servers/{serverId}` |
| Register server | POST | `/servers` |
| Rename server | PUT | `/servers/{serverId}` |
| Delete server | DELETE | `/servers/{serverId}` |
| Restart server | POST | `/servers/{serverId}/restart` |
| Shutdown server | POST | `/servers/{serverId}/shutdown` |
| Create server group | POST | `/serverGroups` |
| List server groups | GET | `/serverGroups` |
| Create cluster | POST | `/clusters` |
| List clusters | GET | `/clusters` |
| Manage flows | GET/PUT | `/applications/{appId}/flows` |
| Manage schedulers | GET/PUT | `/applications/{appId}/schedulers` |
| Manage alerts | GET/POST/PUT/DELETE | `/applications/{appId}/alerts` |

### Example: List applications

```bash
curl -X GET \
  https://anypoint.mulesoft.com/hybrid/api/v1/applications \
  -H 'Authorization: Bearer {TOKEN}' \
  -H 'X-ANYPNT-ENV-ID: {ENV_ID}' \
  -H 'X-ANYPNT-ORG-ID: {ORG_ID}'
```

---

## API Manager API

Manage API instances, policies, SLA tiers, and configurations.

**Portal**: `https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/api-manager-api/`

Key capabilities:
- Create/update/delete API instances
- Apply and configure policies (authentication, rate limiting, CORS, etc.)
- Set SLA tiers with request quotas
- Configure alerts for API instances
- Promote API instances across environments
- View API analytics (requests, errors, response times)

---

## Anypoint MQ APIs

Three APIs for messaging operations.

### Admin API

**Base URL**: `https://anypoint.mulesoft.com/mq/admin/api/v1/organizations/{ORG_ID}/environments/{ENV_ID}/regions/{REGION_ID}`

| Operation | Method | Endpoint |
|-----------|--------|----------|
| Create queue | PUT | `/destinations/queues/{QUEUE_ID}` |
| Get queue | GET | `/destinations/queues/{QUEUE_ID}` |
| List destinations | GET | `/destinations` |
| Set routing rules | PUT | `/bindings/exchanges/{exchangeId}/queues/{queueId}/rules/routing` |
| Enable failover | PUT | `/destinations/queues/{QUEUE_ID}/fallback` |

**Queue creation body**:
```json
{
  "fifo": false,
  "defaultTtl": 604800000,
  "defaultLockTtl": 120000,
  "encrypted": true,
  "maxDeliveries": 10
}
```

**Rate limit**: 50 transactions per minute (TPM) for distinct environments.

### Broker API

**Base URL**: `https://mq-{REGION}.anypoint.mulesoft.com/api/v1/organizations/{ORG_ID}/environments/{ENV_ID}`

| Operation | Method | Endpoint |
|-----------|--------|----------|
| Send message | PUT | `/destinations/{destination}/messages/{messageId}` |
| Consume message | GET | `/destinations/{destination}/messages` |

**Message body**:
```json
{
  "properties": {"key": "value"},
  "headers": {"key": "value"},
  "body": "message payload"
}
```

**Consume query parameters**:
- `pollingTime`: Wait duration (ms)
- `batchSize`: Number of messages
- `lockTtl`: Lock duration (ms)
- `payloadVisibility`: `full`, `none`, or `conditional` (>1MB hidden)

### Stats API

**Base URL**: `https://anypoint.mulesoft.com/mq/stats/api/v1/organizations/{ORG_ID}`

| Operation | Endpoint |
|-----------|----------|
| Queue stats (real-time) | `/environments/{ENV_ID}/regions/{REGION_ID}/queues?destinationIds={queueId}` |
| Queue history | `/environments/{ENV_ID}/regions/{REGION_ID}/queues/{queueId}?startDate=...&endDate=...&period=...` |
| Exchange history | `/environments/{ENV_ID}/regions/{REGION_ID}/exchanges/{exchangeId}?startDate=...&endDate=...` |
| Usage by environment | `/environments/{ENV_ID}?startDate=...&endDate=...&period=...` |
| Usage by organization | `/?startDate=...&endDate=...&period=...` |

**Period values**: `1hour`, `1day`, `1month`

**Rate limits**:
- Organization/environment endpoints: 10 TPM
- All other endpoints: 200 TPM

**Stats latency**: 5-10 minutes for historical data.

---

## Exchange API

Discover and manage assets in Anypoint Exchange.

**Graph API**: Search and query Exchange assets programmatically.
**Maven Facade**: Publish and consume assets using Maven coordinates.

---

## Region identifiers

Get available regions:
```
GET https://anypoint.mulesoft.com/mq/admin/api/v1/organizations/{ORG_ID}/environments/{ENV_ID}/regions
```

Common regions: `us-east-1`, `us-west-2`, `eu-west-1`, `ap-southeast-1`, `ap-southeast-2`.
