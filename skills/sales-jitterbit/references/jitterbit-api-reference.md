<!-- Source: https://docs.jitterbit.com/harmony/ -->
<!-- Source: https://www.linkedin.com/pulse/jitterbit-harmony-platform-api-george-jeffcock -->
<!-- Source: https://apitracker.io/a/jitterbit -->
<!-- Note: Jitterbit's per-endpoint REST API reference is primarily documented via SwaggerHub (jitterbit/jitterbit-rest_api) and inside the Harmony portal. This reference captures the structure, authentication flow, and regional base URLs from public sources. For full per-endpoint specs, consult the SwaggerHub OpenAPI document or the Harmony Management API documentation inside your portal. -->

# Jitterbit Harmony Management API Reference

## Overview

The Harmony Management API is a REST API for programmatic management of the Jitterbit Harmony platform — orgs, environments, agent groups, agents, projects, operations, API Manager APIs, operation logs, and API analytics. It is distinct from APIs built and published by customers in Jitterbit API Manager (those have customer-defined paths and auth).

## Authentication

**Method**: Session-token-based login over HTTPS.

### Standard login flow

- **Endpoint**: `PUT /user/login`
- **Headers**: `Content-Type: application/json`, `Accept: application/json`
- **Payload**:
  ```json
  {
    "email": "user@example.com",
    "password": "...",
    "deviceId": "<unique-device-identifier>"
  }
  ```
- **Response**: Session token (used for subsequent requests). Token documented to expire after **15 minutes** (observed up to 5 hours in practice).

### Two-factor authentication (TFA) flow

If TFA is enabled on the account:

1. Submit `PUT /user/login` as above.
2. Response returns error code `VALIDATE_TFA_LOGIN_EMAIL` and sends a code to the user's email.
3. Submit the code:
   - **Endpoint**: `PUT /user/login/tfacode`
   - **Payload**: `{ "email": "...", "tfaCode": "...", "deviceId": "<same device id>" }`
4. Response returns the authenticated session token.

### SSO and API access caveats

- SSO (Okta, Azure AD, Google, Salesforce) is supported for portal login, but requires bypass rules configured by your Jitterbit admin for API access using service credentials.
- TFA configured as "on each login" is **incompatible with unattended API access**. For programmatic access, either:
  - Disable TFA on a dedicated service account.
  - Use a TFA setting that allows trusted devices.

## Base URLs

Regional base URL for the REST service:

| Region | Base URL |
|---|---|
| NA (North America, South America) | `https://na-east.jitterbit.com/jitterbit-cloud-restful-service` |
| EMEA (Europe, Middle East, Africa) | `https://emea-west.jitterbit.com/jitterbit-cloud-restful-service` |
| APAC (Asia-Pacific) | `https://apac-east.jitterbit.com/jitterbit-cloud-restful-service` |

Portal/app URLs (browser login) use `apps.na-east.jitterbit.com`, `apps.emea-west.jitterbit.com`, `apps.apac-east.jitterbit.com`. `https://login.jitterbit.com` auto-redirects to the geolocation-matched portal.

## Representative endpoints

The API is organized around controllers. Representative operations include:

| Endpoint | Method | Purpose |
|---|---|---|
| `/user/login` | PUT | Authenticate and obtain session token |
| `/user/login/tfacode` | PUT | Submit TFA code to complete login |
| `/op-log-service-controller/queryOperationLogUsingPUT` | PUT | Query operation execution logs |
| `/api-analytics-controller/geDebugLogsUsingPUT` | PUT | Retrieve API analytics / debug logs |

Additional controllers cover: organization, environment, agent group, agent, project, deployment, schedule, API, security profile, and user/role management. Full per-endpoint documentation is in the SwaggerHub spec and the in-portal API docs.

## Content format

- **Request / response**: JSON.
- **HTTPS required** — TLS 1.2 or higher.
- Standard `Content-Type: application/json` / `Accept: application/json` headers.

## OpenAPI / Swagger

- **OpenAPI 3.0 spec**: Published on SwaggerHub under `jitterbit/jitterbit-rest_api` (e.g., `V9.1.0.2-oas3`).
- **Swagger 2.0 spec**: Importable to Postman from SwaggerHub JSON endpoint.

Use these specs to auto-generate client SDKs, explore endpoints in Postman, or run contract tests.

## Rate limits

Jitterbit does not publish specific per-endpoint rate limit numbers. Rate limiting is applied per-organization, with adjustments available for high-volume use cases via Jitterbit Support.

For published APIs in API Manager, rate limits are **configured by the customer** per API Group (requests per time window). Exceeding returns HTTP 429.

## Allowlisting

All agent and API traffic is outbound HTTPS. For firewall allowlisting, Jitterbit publishes an allowlist of host names per region that must be reachable on port 443. See the Jitterbit docs under "Allowlist Information" for the current list.

Representative hosts to allowlist for a given region include:
- Portal: `apps.{region}.jitterbit.com`
- REST service: `{region}.jitterbit.com`
- Identity: `{region}.jitterbit.com/identity`
- JMS messaging: per-region JMS broker hostnames
- Log ingestion, artifact storage, and monitoring endpoints

## API Manager (customer-published APIs)

APIs built in Jitterbit API Manager are deployed at customer-defined paths on the regional API gateway. Example pattern:

`https://{region}.jitterbit.com/{org-slug}/{api-path}`

Customer APIs use their own Security Profiles (Anonymous, Basic, OAuth 2.0, API Key), with Trusted IP Groups for IP allowlisting. Rate limits and policies are configured per API Group in the Jitterbit portal.

## Postman and tooling

- **Postman collection**: Auto-generable from the SwaggerHub OpenAPI spec. Import the spec URL into Postman, then configure a collection variable for the session token.
- **Auth pattern in Postman**: Use a pre-request script to call `PUT /user/login` and save the session token to a collection variable. Apply the token as a header on subsequent requests.

## Notes on documentation

The primary Jitterbit docs site (`docs.jitterbit.com`) has historically used multiple URL structures, and some previously-public API reference pages return 404. For current official references:

1. SwaggerHub: `https://app.swaggerhub.com/apis-docs/jitterbit/jitterbit-rest_api`
2. In-portal API docs: Harmony portal → Help → API Documentation
3. Jitterbit Success Central: `https://success.jitterbit.com` (redirects to docs)

If endpoints in this reference drift from current Jitterbit docs, treat the SwaggerHub spec as canonical.
