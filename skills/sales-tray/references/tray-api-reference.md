# Tray.ai API Reference

<!-- Source: https://tray.ai/documentation/developer/openapi/embeddedapi-introduction/, https://tray.ai/documentation/developer/developer-portal/getting-started/troubleshooting/rate-limiting-tray/. Captured via WebFetch + search snippets Nov 2025. Developer portal is partially JS-rendered — some detail may be incomplete. Verify against live docs. -->

## API type

**GraphQL** — backend-only API.

> "The Tray GraphQL API is a backend API only and calls must be invoked server-side."

Client-side JavaScript calls are blocked by CORS. All API usage must originate from a server. This applies to both Tray Embedded and Intelligent iPaaS API consumers.

## Base URLs (regional)

| Region | Base URL |
|---|---|
| US | `https://tray.io/graphql` |
| EU | `https://eu1.tray.io/graphql` |
| APAC | `https://ap1.tray.io/graphql` |

Use the base URL that matches your Tray org's region. Querying the wrong region returns empty results without an obvious error.

## Authentication

Bearer token in `Authorization` header:

```
Authorization: Bearer <your-token>
```

Tray uses **two token types**:

### Master Token
- **Scope**: Entire org workspace
- **Obtained from**: Tray Embedded UI (workspace admin settings)
- **Used for**: Admin/org-wide operations — e.g., `Get Users`, `createSolutionInstance`, `createUserToken`
- **Lifecycle**: Long-lived; rotate if compromised

### User Token
- **Scope**: Single end user
- **Obtained via**: `createUserToken` mutation (requires Master Token)
- **Used for**: Per-user operations — e.g., `Get Solution Instances`, `updateSolutionInstance`, `upgradeSolutionInstance`, `removeSolutionInstance`
- **Lifecycle**: Shorter-lived per-user session tokens

### Endpoints accepting both
Some endpoints (e.g., `Get Authentications`) accept either Master or User tokens, with results filtered by scope.

## OAuth redirect URLs

- **Default**: `auth.tray.io/oauth2/token`
- **Whitelabel**: `<your_org_name>.integration-authentication.com/oauth2/token`

For embedded deployments, configure your OAuth app in the external system (Salesforce, HubSpot, etc.) to redirect to the whitelabel URL matching your Tray org.

## Key API resources

- **Users** — end users of your embedded integration
- **Authentications** — stored OAuth/API-key credentials per user
- **Solutions** — reusable workflow templates
- **Solution Instances** — per-end-user copies of a Solution
- **Projects** — workspace organization
- **Workflows** — automation units within Solutions / Solution Instances
- **Call Connector operations** — programmatic connector invocation

## Key mutations (Tray Embedded)

### createSolutionInstance
Create a Solution Instance for a specific user.

**Parameters**:
- `solutionId` — ID of the Solution template to instantiate
- `instanceName` — user-facing name for the instance

**Returns**:
- `id` — Solution Instance ID
- `name` — instance name
- `enabled` — boolean
- `workflows` — array of workflows within the instance, each with its own `triggerUrl`

**Requires**: Master Token (or equivalent admin scope)

### updateSolutionInstance
Update configuration of an existing Solution Instance.

**Parameters**:
- `configValues` — user-provided config parameters
- `authValues` — authentication values (e.g., OAuth tokens)

**Requires**: User Token scoped to the instance's user

### upgradeSolutionInstance
Upgrade a Solution Instance to a newer Solution version.

**Parameters**:
- `solutionInstanceId` — ID of the instance to upgrade
- `configValues` — updated config parameters
- `authValues` — updated auth values (if needed)

**Requires**: User Token or Master Token

### removeSolutionInstance
Delete a Solution Instance.

**Parameters**:
- `solutionInstanceId` — ID of the instance to remove

**Requires**: User Token or Master Token

### createUserToken
Create a User Token scoped to a specific end user.

**Returns**: User Token string for subsequent per-user GraphQL calls.

**Requires**: Master Token

## Rate limits

> "30 requests per second or 1800 requests per minute" across all Embedded APIs / Connectivity APIs **except** Call Connector.

**Burst**: "up to 50 requests per second" for momentary spikes, provided the overall window rate is not broken.

**Call Connector endpoint**: Concurrency-limited, not rate-limited. "1000 requests can be active at any given time." Increases available via CSM.

**Event delivery (Trigger API)**: Not rate-limited. Tray implements exponential backoff for downstream endpoints that rate-limit.

**HTTP response codes when rate-limited**: Not specified in public docs. Monitor for rate-limit error messages in GraphQL `errors` responses and implement exponential backoff.

## Error handling

GraphQL responses return **HTTP 200** even when the server encounters an error. Always inspect the `errors` array in the response body:

```json
{
  "data": null,
  "errors": [
    {
      "message": "...",
      "extensions": { "code": "..." }
    }
  ]
}
```

Do not rely on HTTP status codes alone.

## Testing tools

- **Postman collection** — official Postman workspace (check Tray docs for current link)
- **Insomnia GraphQL collection** — available for Insomnia users
- **GraphQL playground** — interactive query builder in the Tray Developer Portal

## Reference implementations

- **Official sample app**: `github.com/trayio/embedded-edition-sample-app` — Apollo GraphQL based, actively maintained (21 stars, last updated Feb 2026). Shows end-to-end Tray Embedded integration pattern in a Node.js/React app.
- **CDK examples**: `github.com/trayio/CDK-examples-public` — examples for building custom connectors with falafel.
- **Connector tester**: `github.com/trayio/connector-tester-public` — tooling for testing custom connectors.
- **Embedded custom JS**: `github.com/trayio/embedded-customjs-public` — patterns for custom JavaScript in embedded deployments.
- **falafel framework**: `github.com/trayio/falafel` — Node.js framework for building Tray connectors.

## Developer portal

- **Root**: `https://tray.ai/documentation/`
- **Embedded API introduction**: `https://tray.ai/documentation/developer/openapi/embeddedapi-introduction/`
- **Rate limiting**: `https://tray.ai/documentation/developer/developer-portal/getting-started/troubleshooting/rate-limiting-tray/`

## Known gaps in public docs

- Specific HTTP response codes when rate limits are exceeded are not documented.
- Full OpenAPI/GraphQL schema is not published publicly; access via developer portal after auth.
- Partner / affiliate commission structure is not documented publicly.
- Exact per-tier task quotas on Pro/Team are not published consistently across sources.
