<!-- Source: https://github.com/celigo/integrator-api-docs -->
<!-- Additional source: https://docs.celigo.com/hc/en-us/sections/360007476271-Standard-REST-API -->

# Celigo integrator.io API Reference

## Overview

The integrator.io API is RESTful, uses JSON, and is secured by Bearer Token authentication. It enables building Integration Apps, Embedded Integrations, Hooks (custom code execution), and Wrappers (connectors for unsupported apps).

## Base URLs

- **North America**: `https://api.integrator.io/v1/`
- **EU**: `https://api.eu.integrator.io/v1/`
- **Browser access**: `https://integrator.io/api/`

## Authentication

### Bearer Tokens

Generate via Resources → API Tokens in your integrator.io account.

```
GET /v1/tokenInfo HTTP/1.1
Host: api.integrator.io
Authorization: Bearer my_api_token
```

Response: `{ "_userId": "..." }`

### One-time Tokens

Used within the integrator.io extension framework. Auto-expire after use or after 15 minutes if unused. SmartConnectors receive tokens restricted to their own resources.

## Rate Limiting

Leaky bucket algorithm:
- **Bucket size**: 1,000 tokens
- **Fill rate**: 300 tokens per second
- **Approximate hourly limit**: ~1,080,000 requests

## Resources

### Connection

Stores credentials and authentication info for integrated applications.

**Endpoints**:
- `GET /v1/connections` — Retrieve all connections
- `GET /v1/connections/{_id}` — Retrieve specific connection
- `POST /v1/connections` — Create connection
- `PUT /v1/connections/{_id}` — Update connection
- `DELETE /v1/connections/{_id}` — Delete connection
- `PUT /v1/connections/ping` — Test saved connection (ping)
- `POST /v1/connections/ping` — Test virtual connection (unsaved, for testing config before saving)
- `POST /v1/connections/{_id}/debug/{_debugLogId}` — Get debug logs
- `POST /v1/connections/{_id}/export` — Export data via connection
- `POST /v1/connections/{_id}/export/pages` — Export data with pagination
- `POST /v1/connections/{_id}/import` — Import data via connection
- `POST /v1/connections/{_id}/import/map` — Evaluate mapping rules before import

**Virtual operations**: Submit connection details without persistent storage for testing. Export and import operations support virtual mode.

**Data mapping for imports**: Supports extraction, generation, and hard-coded field values. Use `/import/map` endpoint to evaluate mapping rules before actual import.

### Export

Extracts data from source applications. Can be standalone or part of a flow.

**Endpoints**:
- `GET /v1/exports` — Retrieve all exports (200)
- `GET /v1/exports/{_id}` — Retrieve specific export (200)
- `POST /v1/exports` — Create export (201)
- `PUT /v1/exports/{_id}` — Update export (200)
- `DELETE /v1/exports/{_id}` — Delete export (204)
- `GET /v1/exports/{_id}/distributed` — Get distributed config (Salesforce/NetSuite real-time exports) (200)
- `PUT /v1/exports/{_id}/distributed` — Update distributed config (200)
- `POST /v1/exports/{_id}/clone` — Clone export (201)

### Import

Inserts mapped data into destination applications. Can be standalone or part of a flow.

**Endpoints**:
- `GET /v1/imports` — Retrieve all imports
- `GET /v1/imports/{_id}` — Retrieve specific import
- `POST /v1/imports` — Create import
- `PUT /v1/imports/{_id}` — Update import
- `DELETE /v1/imports/{_id}` — Delete import

### Flow

Composes exports and imports together for data movement. Supports simple (1 export → 1 import) and orchestrated (multiple exports/imports with page processors and generators) patterns.

**Endpoints**:
- `GET /v1/flows` — Retrieve all flows
- `GET /v1/flows/{_id}` — Retrieve specific flow
- `POST /v1/flows` — Create flow (201)
- `PUT /v1/flows/{_id}` — Update flow (200)
- `DELETE /v1/flows/{_id}` — Delete flow (204)
- `POST /v1/flows/{_id}/clone` — Clone flow (201)
- `POST /v1/flows/{_id}/run` — Execute flow on-demand (201)

**Flow configuration**: CRON scheduling, timezone settings, retry behavior, response mapping with data extraction and transformation rules.

### Integration

Groups flows with shared permissions and aggregated statistics.

**Endpoints**:
- `GET /v1/integrations` — Retrieve all integrations
- `GET /v1/integrations/{_id}` — Retrieve specific integration
- `POST /v1/integrations` — Create integration
- `PUT /v1/integrations/{_id}` — Update integration
- `DELETE /v1/integrations/{_id}` — Delete integration

### State

Stores arbitrary JSON data with custom keys for flow execution persistence.

**Endpoints**:
- `GET /v1/states` — Retrieve all states
- `GET /v1/states/{_id}` — Retrieve specific state
- `POST /v1/states` — Create state
- `PUT /v1/states/{_id}` — Update state
- `DELETE /v1/states/{_id}` — Delete state

### Job

Tracks flow execution state and final statistics.

**Endpoints**:
- `GET /v1/jobs` — Retrieve all jobs
- `GET /v1/jobs/{_id}` — Retrieve specific job

### Additional Resources

- **iClient**: Authentication storage for SmartConnector OAuth flows
- **Connector / License**: Marketplace solutions with licensing automation
- **Template**: Unmanaged marketplace listings

## NetSuite Integration Headers

Custom headers for RESTlet proxying:
- `Integrator-NetSuite-ScriptId` — Target RESTlet script ID
- `Integrator-NetSuite-DeployId` — Target RESTlet deployment ID

## JavaScript API

Celigo supports custom JavaScript within flows for data transformation. The JavaScript API provides hooks for pre/post-processing data in exports and imports. See Celigo Help Center for `My API basics` documentation.

## API Management (APIM)

Separate from the integrator.io API — APIM lets you build and expose your own APIs:
- Configure APIs via the APIM console
- Create API plans, applications, and subscriptions
- Manage API lifecycle and access control
- See Celigo Help Center for APIM documentation
