<!-- Source: https://app.pendo.io/api/v1 — compiled from https://www.stitchflow.com/user-management/pendo/api, https://github.com/pendo-io/pendo-ETL-API-calls, https://github.com/singer-io/tap-pendo -->
<!-- API docs at engageapi.pendo.io and feedbackapi.pendo.io are JS-rendered; this reference is compiled from third-party sources and GitHub repos -->

# Pendo API Reference

## Authentication

**Method**: API Key (Integration Key)
**Header**: `X-Pendo-Integration-Key: <YOUR_KEY>`
**Scopes**: `read` (GET operations), `write` (POST/PUT/DELETE operations)

Generate keys in: Settings > Integrations > Integration Keys (admin only). Keys are shown only once at creation.

**Important**: Integration keys should be kept secret. Never share in client-side code or public repositories.

## Base URLs

| Region | Base URL |
|---|---|
| US | `https://app.pendo.io/api/v1` |
| EU | `https://app.eu.pendo.io/api/v1` |

## Core Endpoints

### Visitors

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/visitor/{visitorId}` | Retrieve a single visitor |
| PUT | `/metadata/visitor/{visitorId}` | Update a single visitor's metadata |
| POST | `/metadata/visitor/bulk` | Batch update visitor metadata (recommended, <1,000 records) |
| DELETE | `/visitor/{visitorId}` | Remove visitor and all event history |

#### Visitor Object

| Field | Type | Required | Mutable | Notes |
|---|---|---|---|---|
| `visitorId` | string | Yes (create) | No | Maps to internal user ID; must match install script value |
| `accountId` | string | No | Yes | Links visitor to account |
| `metadata.auto.email` | string | No | Yes | Set by install script; overwritten on page load |
| `metadata.auto.firstName` | string | No | Yes | Set by install script |
| `metadata.auto.lastName` | string | No | Yes | Set by install script |
| `metadata.auto.role` | string | No | Yes | Set by install script |
| `metadata.custom.*` | string/number/boolean | No | Yes | Must pre-define in Pendo UI first |
| `metadata.auto.lastvisit` | number (epoch ms) | System-set | No | Read-only |
| `metadata.auto.firstvisit` | number (epoch ms) | System-set | No | Read-only |

### Accounts

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/account/{accountId}` | Retrieve an account object |
| POST | `/metadata/account/bulk` | Batch update account metadata |

### Users (Admin)

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/user` | List Pendo application (admin) users |

### Metadata Schema

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/metadata/schema/visitor` | Get visitor metadata schema |
| GET | `/metadata/schema/account` | Get account metadata schema |

## Aggregation API

The most powerful Pendo API. Uses a MongoDB-style pipeline to query any Pendo data.

**Endpoint**: `POST /api/v1/aggregation`

**Required headers**:
```
Content-Type: application/json
X-Pendo-Integration-Key: <YOUR_KEY>
```

### Query structure

Aggregation queries are JSON objects with a `pipeline` array and a `source` specification:

```json
{
  "response": {
    "mimeType": "application/json"
  },
  "request": {
    "pipeline": [
      {
        "source": {
          "visitors": null
        }
      },
      {
        "filter": "visitorId != \"\""
      },
      {
        "count": "visitorCount"
      }
    ]
  }
}
```

### Available sources

| Source | Returns |
|---|---|
| `visitors` | All visitors in the subscription |
| `accounts` | All accounts |
| `features` | All tagged features |
| `pages` | All tagged pages |
| `guides` | All guides |
| `featureEvents` | Feature click events |
| `pageEvents` | Page view events |
| `guideEvents` | Guide interaction events |
| `pollEvents` | Poll/survey response events |
| `trackEvents` | Custom Track Events |
| `events` | General events |
| `visitorHistory` | Visitor session history |
| `trackTypes` | Track Event type definitions |

### Pipeline operators

| Operator | Purpose | Example |
|---|---|---|
| `source` | Define data source | `{"source": {"visitors": null}}` |
| `filter` | Filter rows | `{"filter": "accountId == \"acme\""}` |
| `group` | Group by field | `{"group": {"field": "accountId"}}` |
| `count` | Count rows | `{"count": "total"}` |
| `sort` | Sort results | `{"sort": ["total"]}` |
| `limit` | Limit results | `{"limit": 100}` |
| `select` | Select/compute fields | `{"select": {"visitorId": "visitorId"}}` |
| `timeSeries` | Time-based grouping | See below |

### Time series example

```json
{
  "response": {"mimeType": "application/json"},
  "request": {
    "pipeline": [
      {
        "source": {
          "featureEvents": null,
          "timeSeries": {
            "period": "dayRange",
            "first": "1714521600000",
            "last": "1717200000000"
          }
        }
      },
      {
        "group": {
          "group": ["featureId"],
          "fields": [
            {"count": "numEvents"},
            {"count": {"distinctVisitorId": "numVisitors"}}
          ]
        }
      },
      {"sort": ["-numEvents"]},
      {"limit": 20}
    ]
  }
}
```

### ETL example: Monthly active visitors by account

```json
{
  "response": {"mimeType": "application/json"},
  "request": {
    "pipeline": [
      {
        "source": {
          "events": null,
          "timeSeries": {
            "period": "monthRange",
            "first": "1714521600000",
            "last": "1717200000000"
          }
        }
      },
      {
        "group": {
          "group": ["accountId"],
          "fields": [
            {"count": {"distinctVisitorId": "mau"}}
          ]
        }
      },
      {"sort": ["-mau"]}
    ]
  }
}
```

## SCIM API

For automated user provisioning (SSO environments).

**Endpoint**: `https://app.pendo.io/scim/v2`
**Version**: SCIM 2.0
**Auth**: Separate bearer token (Settings > Integrations > SCIM)
**Requirements**: Premium tier/add-on + SSO (SAML/OIDC) enabled

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/Users` | List users |
| POST | `/Users` | Create user |
| GET | `/Users/{id}` | Get user |
| PUT | `/Users/{id}` | Replace user |
| PATCH | `/Users/{id}` | Update user |
| DELETE | `/Users/{id}` | Delete user |
| GET | `/Groups` | List groups |
| POST | `/Groups` | Create group |
| GET | `/Groups/{id}` | Get group |
| PUT | `/Groups/{id}` | Replace group |
| PATCH | `/Groups/{id}` | Update group |
| DELETE | `/Groups/{id}` | Delete group |

## Feedback API

Separate API for Pendo Feedback (Listen module).

**Base URL**: `https://feedbackapi.pendo.io/`
**Docs**: https://feedbackapi.pendo.io/

*Note: Feedback API docs are JS-rendered and could not be fully captured. Consult the docs URL directly for endpoint details.*

## Rate limits

- Not publicly documented
- HTTP 429 response indicates rate limit exceeded
- No pagination on most endpoints — use aggregation pipeline for large datasets
- Recommendation: implement exponential backoff on 429 responses

## Webhooks

Webhooks are available for real-time event notifications. Configure in the Pendo UI under Settings > Integrations > Webhooks.

## SDKs and tools

- **Singer tap**: `tap-pendo` (open-source ETL connector)
- **ETL examples**: `pendo-io/pendo-ETL-API-calls` on GitHub (65 commits, 7 example folders)
- **Mobile SDKs**: iOS, Android, React Native, Flutter, Xamarin, MAUI — see `pendo-io/pendo-mobile-sdk` on GitHub
- **MCP plugins**: `pendo-io/claude-pendo-plugin`, `pendo-io/cursor-pendo-plugin` for AI tool integration
