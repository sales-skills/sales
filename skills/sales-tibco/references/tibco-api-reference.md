<!-- Source: https://integration.cloud.tibco.com/docs/Subsystems/tci-api/home.html -->
<!-- Source: https://integration.cloud.tibco.com/docs/Subsystems/tci-api/getstarted/basics/api-basics.html -->

# TIBCO Cloud Integration API Reference

## Overview

The TIBCO Cloud Integration API adheres to the principles of RESTful Web services. You can use it to automate administration, deployment, and monitoring of TCI — integrate TCI into your CI/CD pipeline, build custom dashboards, or manage apps programmatically.

The TIBCO Cloud Integration REST API:
- Uses SSL (HTTPS) to ensure all data is secure.
- Uses **OAuth 2.0** and **Bearer Token** to validate API users.
- Validates that API users have the same rights and restrictions as they do in the TIBCO Cloud Integration user interface for all Organization-based methods.
- Uses TIBCO Cloud Integration interface entities, such as Organizations and Apps, as REST resources that exchange data with the API as JSON objects.

Select endpoints on the TIBCO Cloud Integration Swagger page to try out the available functions before you start coding.

## Regional base URLs

There are multiple instances for the API site available in different regions. Each region has its own API URL and a dedicated Swagger page. **Be sure to use the API URL and Swagger page associated with the region for your subscription or no data will be returned when you make an API call.**

| Region | API URL |
|--------|---------|
| AWS US | `https://api.cloud.tibco.com/tci/v1` |
| AWS US East | `http://us-east.api.cloud.tibco.com/tci/v1` |
| AWS Europe | `https://eu.api.cloud.tibco.com/tci/v1` |
| AWS Australia | `https://au.api.cloud.tibco.com/tci/v1` |
| Azure US | `https://api.us.azure.cloud.tibco.com/tci/v1` |

### Swagger documentation pages

Each region maintains a dedicated Swagger page. Replace `api` with `api/tci/docs/` on your regional host, or browse from the TCI console. Complete endpoint specifications, request/response schemas, and interactive "Try it out" are available only through the region-specific Swagger pages.

## API basics

### Transport
- All HTTP calls to the API are redirected to HTTPS.
- Requests to the TIBCO Cloud Integration API **time out after 120 seconds**.

### Subscription Locator
All HTTP calls to the API, **except the `GET /v1/userinfo` call**, require a Subscription Locator to identify the organization. The Subscription Locator is a header value identifying your TCI org.

### Naming convention
TIBCO Cloud Integration uses the **lower camel case** naming convention for JSON data across the TIBCO Cloud Integration API and endpoints (e.g., `lastName`).

### Datetime format
Datetime field values are returned in **Epoch time** (seconds since 1970-01-01 UTC, or milliseconds depending on endpoint — verify per-endpoint).

### Authorization
Any role requirements imposed in the TIBCO Cloud Integration User Interface are also imposed by the TIBCO Cloud Integration API — i.e., a user without Admin role cannot call admin-only endpoints even with a valid token.

### Authentication (OAuth 2.0 + Bearer Token)
TCI authenticates API callers with OAuth 2.0 Bearer tokens. Details on the OAuth flow (authorization endpoint, token endpoint, scopes) are documented in the region-specific Swagger pages — the flow is the standard OAuth 2.0 client-credentials / authorization-code pattern. Pass the token in the `Authorization: Bearer <token>` header on every call.

### HTTP response codes
- `2xx` — success (200 OK, 201 Created, 204 No Content).
- `4xx` — client errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict).
- `5xx` — server errors (500 Internal Server Error, 503 Service Unavailable).
- A detailed HTTP Response Codes section is available in the TCI API docs at `/Subsystems/tci-api/http-response.html`.

## Resources (high-level, verify exact paths on regional Swagger)

The TCI API exposes the platform's core entities as REST resources. Typical resource groups (verify on your regional Swagger page — paths and fields may evolve):

- **`/userinfo`** — `GET` current authenticated user info. The only endpoint that does not require the Subscription Locator.
- **Organizations** — manage orgs and child orgs (Premium plan feature).
- **Subscriptions** — inspect subscription tier, app instance capacity, and consumption.
- **Apps** — list, deploy, start, stop, delete iPaaS apps (Flogo, Scribe, BusinessWorks).
- **Connections** — manage connector credentials and endpoints.
- **Users** — list, invite, remove org users; assign roles.
- **Agents / Runtime Environments** — inspect hybrid agent status, register new agents.
- **Audit / Events** — query action logs (AuditSafe if enabled).

Because the endpoint paths, request bodies, and response schemas differ by region (the Swagger spec is region-specific), **always fetch the authoritative spec from the Swagger page that matches your subscription region** before coding against the API. Hardcoding paths from another region or from generic docs will fail silently (wrong-region calls return no data).

## Related tooling

- **TIBCO Cloud CLI** (`cic-cli-main` on GitHub) — command-line front-end to the TCI API. Plugin architecture for API Management, AsyncAPI conversion, and more.
- **Maven plugin** (`flogo-maven-plugin`) — build/deploy Flogo apps in Maven projects.
- **Helm charts** (`tp-helm-charts`) — deploy TIBCO Platform components on Kubernetes.

## Gaps in this reference

- **Endpoint details not aggregated in public docs**: the central documentation site defers to per-region Swagger pages for endpoint specifications. This reference captures the platform-level API model but NOT a full endpoint catalog. Always consult the Swagger page for your subscription region (listed above) for definitive endpoint paths, request/response schemas, and examples.
- **OAuth flow specifics**: the public docs reference OAuth 2.0 and Bearer Token but do not document the full token endpoint / scope catalog on the public-facing page — Swagger page and authentication setup in the TCI console provide the concrete values.
- **Rate limits**: not publicly specified beyond the 120-second request timeout.
