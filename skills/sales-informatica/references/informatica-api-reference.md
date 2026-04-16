<!-- Source: https://docs.informatica.com/integration-cloud/b2b-gateway/current-version/rest-api-reference/ — captured 2026-04-16. Informatica REST API documentation is spread across many individual resource pages; this file captures the v3 resource index verbatim plus the login endpoint. Refresh by paginating through the docs.informatica.com REST API reference for newer versions. -->

# Informatica Intelligent Cloud Services REST API

## Versions

Informatica Intelligent Cloud Services (IICS / IDMC) supports:

- **Platform REST API version 2** — XML or JSON, uses `icSessionId` in header.
- **Platform REST API version 3** — JSON-only, uses `INFA-SESSION-ID` in header.
- **Service-specific resources** — Data Integration, Mass Ingestion, Application Integration, etc.

Version 1 is deprecated and no longer receives updates. Prefer v3 unless the resource you need only exists in v2.

## Base URL

IDMC runs on multiple regional PODs. Do **not** hardcode a base URL. The `/login` response returns `baseApiUrl` — use that value for all subsequent requests.

Login endpoint URL:

```
POST https://<cloud provider>-<region>.informaticacloud.com/saas/public/core/v3/login
```

Common login hostnames by region: `dm-us`, `dm-em` (EMEA), `dm-ap` (APAC). If you don't know your org's POD, check the Product Availability Matrix (PAM) or ask your Informatica admin.

## Authentication — v3 Login

### Request

```
POST https://dm-us.informaticacloud.com/saas/public/core/v3/login
Content-Type: application/json
Accept: application/json

{
    "username": "user@informatica.com",
    "password": "mypassword"
}
```

### Request body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| username | String | Yes | IDMC user name for the organization that you want to log in to. Maximum length is 255 characters. |
| password | String | Yes | IDMC password. Maximum length is 255 characters. |

### Response

```json
{
    "products": [
        {
            "name": "Integration Cloud",
            "baseApiUrl": "https://usw3.dm-us.informaticacloud.com/saas"
        }
    ],
    "userInfo": {
        "sessionId": "9KA11tLGqxVcGeul8SABC1",
        "id": "9L1GFroXSDHe2IIg7QhXyZ",
        "name": "user",
        "parentOrgId": "52ZSTB0IDK6dXxaEXYZaQu",
        "orgId": "0cuQSDTq5xyzvN7x8r1xm1",
        "orgName": "MyOrg_INFA",
        "groups": {},
        "status": "Active"
    }
}
```

### Response fields

**products[]** collection:

| Field | Type | Description |
|-------|------|-------------|
| name | String | Product name |
| baseApiUrl | String | Base API URL for the product. Use in REST API requests. |

**userInfo**:

| Field | Type | Description |
|-------|------|-------------|
| sessionId | String | REST API session ID for the current session. Use in most REST API request headers. Maximum length of 16,000 characters. |
| id | String | User ID |
| name | String | User name |
| parentOrgId | String | Organization ID for the parent organization. |
| orgId | String | ID of the organization the user belongs to. 22 characters. |
| orgName | String | Organization name |
| groups | Collection | User group information for the user |
| status | String | Status of the user. Returns one of the following values: Active or Inactive |

### Using the session

For all subsequent v3 API calls:

- Use `baseApiUrl` from the login response as the base URL (e.g., `https://usw3.dm-us.informaticacloud.com/saas`).
- Set header `INFA-SESSION-ID: <sessionId>` (from `userInfo.sessionId` in the login response).
- Set `Accept: application/json` and `Content-Type: application/json`.

Sessions expire after 30 minutes of inactivity. Call `/login` again to refresh.

To terminate a session early, call `POST /public/core/v3/logout`.

## Platform REST API v3 resources

All paths are relative to `baseApiUrl + /public/core/v3`.

| Resource | URL Path | Description |
|----------|----------|-------------|
| Elastic runtime environments | `/elasticRuntimeEnvironments` | Manage elastic runtime environment configurations, images, associations, supplementary files, and tokens |
| Export | `/export` | Prepare and execute migration of assets and objects between organizations |
| Import | `/import` | Complete object migration from another organization |
| Identity providers | `/identityProviders` | Register and manage identity providers for JWT-based authentication |
| IP addresses | `/orgs` | Manage trusted IP address ranges and filtering |
| Key rotation | `/key` | Configure encryption key rotation settings |
| Licenses | `/licenses` | View and assign organization licenses |
| Login | `/login` | Authenticate to IDMC for version 3 API access |
| Logout | `/logout` | Terminate version 3 REST API sessions |
| Lookup | `/lookup` | Query object IDs, names, paths, or types |
| Metering data | `/metering` | Download usage and consumption metrics |
| Object state synchronization | `/fetchState`, `/loadState` | Synchronize object states between organizations |
| Objects | `/objects` | Retrieve organization assets for export |
| Object permissions | `/objects` | Configure user and group permissions on assets |
| Passwords | `/passwords` | Manage user account passwords |
| Privileges | `/privileges` | List available privileges for custom roles |
| Projects | `/projects` | Create, update, and delete project structures |
| Folders | `/folders` | Create, update, and delete folder structures |
| Roles | `/roles` | Manage role definitions and privilege assignments |
| SAML group and role mapping | `/orgs` | Map SAML identities to platform roles |
| Schedules | `/schedule` | Create and manage task execution schedules |
| SCIM | `/scim` | Manage SCIM tokens and user provisioning |
| Secure Agent services | `/agentservice` | Control Secure Agent service operations |
| Security logs | `/securityLog` | Access security event logs |
| Source control | `/sourcecontrol` | Manage Git repository integration and object versioning |
| Tags | `/tags` | Assign and manage asset categorization tags |
| Users | `/users` | Manage user accounts and role assignments |
| User groups | `/usergroups` | Create and manage user group collections |

## Service-specific REST API resources

Beyond the platform resources above, each service exposes its own REST API:

- **Data Integration** (CDI): Mappings, mapping tasks, taskflows, activity log, job runs. See docs.informatica.com → Data Integration → REST API Reference.
- **Application Integration** (CAI): Processes, service connectors, app connections, process objects. See docs.informatica.com → Application Integration → REST API Reference.
- **Mass Ingestion**: Streaming and replication jobs.
- **B2B Gateway**: Partners, runs, documents.
- **API Center**: APIs, API products, policies.
- **Data Quality**: Rules, scorecards, profiles.
- **MDM**: Records, match candidates, hierarchies.

## V2 vs V3 quick reference

| Attribute | v2 | v3 |
|-----------|----|----|
| Format | XML or JSON | JSON only |
| Session header | `icSessionId` | `INFA-SESSION-ID` |
| Base URL field in login response | `serverUrl` | `baseApiUrl` (per product) |
| Login body | `username` + `password` | `username` + `password` |
| URL prefix | `<baseUrl>/api/v2/...` | `<baseApiUrl>/public/core/v3/...` |

## Rate limits

Informatica does not publish a specific REST API rate limit in its public docs. Throttling behavior varies by endpoint and POD. Best practice:

- Implement exponential backoff on 429 / 5xx responses.
- Cache session IDs — don't call `/login` on every request.
- Batch object lookups where the endpoint supports it (e.g., bulk user fetch).

## Authentication alternatives

- **Native login** (shown above) — username + password, returns session ID.
- **JWT via Identity Provider** — register an IdP with `/identityProviders` and mint JWTs for programmatic access.
- **SCIM tokens** — use `/scim` tokens for user provisioning integrations.

## Community Python clients (unofficial)

Not maintained by Informatica, but useful references:

- `github.com/chriszacny/informatica_cloud_python_api` — Python client for IICS REST API.
- `github.com/kkrbalam/InformaticaCloud` — Module for running IICS jobs from shell.

## Notes on this reference

- The v3 resource list above was captured from the official Informatica documentation on 2026-04-16. Individual endpoint request/response schemas are documented per-resource at docs.informatica.com and are too lengthy to capture here — paginate the docs for the specific endpoint when needed.
- The `/ipaas/b2b-gateway/current-version/` documentation URLs return 404 at the time of capture; the working path is `/integration-cloud/b2b-gateway/current-version/rest-api-reference/`. If links 404, try other service variants (`data-integration`, `b2b-gateway`, `application-integration`) — the v3 platform resources are documented identically across service doc trees.
