<!-- Source: https://developer.boomi.com/docs/APIs/PlatformAPI/Introduction/Platform_API -->
<!-- Source: https://developer.boomi.com/docs/APIs/PlatformAPI/APIReference/Platform_APIs_Overview -->
<!-- Source: https://help.boomi.com/docs/Atomsphere/Data_Integration/RESTAPI/dataintegration-api-overview -->

# Boomi Platform API Reference

## Authentication

**Method**: HTTP Basic Authentication

Two options:
1. **Username + Password**: Your Boomi Enterprise Platform sign-in credentials
2. **API Token** (recommended): `BOOMI_TOKEN.<your_AtomSphere_user_name>` as username, API token as password

For SSO users, API token is required (username/password won't work).

Generate tokens: Settings → Account Information and Setup → AtomSphere API Tokens

## Base URLs

| Region | Base URL |
|---|---|
| US | `https://api.boomi.com/api/rest/v1/{accountID}` |
| GB | `https://api.platform.gb.boomi.com/api/rest/v1/{accountID}` |

## Request/Response Formats

- **Default**: XML
- **JSON requests**: Set `Content-Type: application/json` header
- **JSON responses**: Set `Accept: application/json` header
- XML schemas available at: `https://api.boomi.com/api/soap/v1/{accountID}?xsd=1`

## Rate Limits

**Maximum**: 10 requests per second

Exceeding this returns HTTP 503 (Service Temporarily Unavailable). Boomi connectors automatically retry up to 5 times on 503.

## API Architecture

The API follows an **object/verb hierarchy**:

- **Objects**: Account, Atom, Environment, Component, Process, Deployment, etc.
- **Verbs**: GET (retrieve), QUERY (search), CREATE, UPDATE, DELETE, plus action-based operations (e.g., `executeProcess`)

## API Categories

### Account Administration
Manage accounts, users, roles, API tokens, and account-level settings.

### Cloud Management
Manage Atom Clouds, Cloud Atom attachments, and cloud-specific configurations.

### Component Management
CRUD operations on integration components: Processes, Maps, Profiles, Connector Operations, API Service Components.

### Deployed Process Management
Manage deployed processes across environments, view deployment history, and undeploy.

### Deployment
Package components, deploy packages to environments, manage deployment schedules.

### Environment Management
CRUD operations on environments, environment extensions, and environment-to-Atom attachments.

### Execution Statistics
Query process execution records — status, timing, document counts, error details.

### Integration Packs
Manage pre-built integration pack configurations and deployments.

### Process Execution
Execute processes programmatically, pass input documents, retrieve execution results.

Key operation: `POST /{accountID}/executeProcess` — triggers a deployed process with optional input data.

### Runtime Management
Manage Atoms, Molecules, and Atom Clouds — status, properties, logs, restart.

## OpenAPI 3.0

OpenAPI specification available for programmatic discovery:

```
GET https://api.boomi.com/api/rest/v1/{accountID}/openapi.json
```

Use this with Postman, Swagger UI, or any OpenAPI-compatible tool to explore available endpoints.

## Postman Collection

Boomi provides an importable Postman collection for testing API endpoints. Available in the developer documentation at developer.boomi.com.

## SOAP API

SOAP interface also available for legacy integrations:
- WSDL: `https://api.boomi.com/api/soap/v1/{accountID}?wsdl`
- Authentication: WS-Security with UsernameToken
- Same operations as REST API

## Partner API

Separate API for Boomi partners managing multiple customer accounts:
- Provision customer accounts
- Manage partner-level configurations
- Same auth pattern, different endpoint prefix

## Data Integration API (separate product)

For Boomi Data Integration (formerly Rivery), a separate API exists:

- **Auth**: Bearer token (API tokens with scopes)
- **Base URLs**:
  - US: `https://api.rivery.io`
  - EU: `https://api.eu-west-1.rivery.io`
  - IL: `https://api.il-central-1.rivery.io`
  - AU: `https://api.ap-southeast-2.rivery.io`
- **Key endpoints**: Activities (stats, RPU consumption, river targets, run groups, schedulers)
