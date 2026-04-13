<!-- Source: https://developer.medallia.com/medallia-apis/reference/integrations -->
<!-- Note: Developer portal is JS-rendered — full API docs could not be copied verbatim. -->
<!-- This reference is reconstructed from search results and platform documentation pages. -->
<!-- For the authoritative, complete API reference, see: https://developer.medallia.com -->

# Medallia API Reference

## Authentication

All Medallia APIs use **OAuth 2.0** with the client credentials grant.

**Token endpoint**: `POST /oauth/{instance}/token`

**Required**: client ID + client secret (obtained from Medallia admin portal)

**Token request**:
```
POST /oauth/{instance}/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}
```

**Response**: Bearer token with limited lifetime. Implement token refresh logic — do not hardcode tokens.

## REST APIs

**Base URL pattern**: `https://{instance}.apis.medallia.com/admin/v1/{api}`

REST APIs are used for:
- Object manipulation (users, roles, units)
- Bulk data import
- Program administration
- Survey management

### Import API v2

Upload data files for processing into Medallia Experience Cloud.

**Key endpoints**:
- `POST /admin/v1/import` — submit a data import job (CSV or JSON payload)
- `GET /admin/v1/import/{jobId}/status` — check import job status
- `GET /admin/v1/import/{jobId}/report` — get detailed processing report with row-level errors

**Use cases**: Import operational data (CRM records, transaction data), import historical feedback, bulk update customer records.

### Admin APIs

Manage users, roles, and organizational hierarchy:
- User creation and role assignment
- Unit hierarchy management
- Program configuration

## GraphQL Query API

**Endpoint**: `POST https://{api-gateway-hostname}/data/v0/query`

**Purpose**: Real-time analytics and data extraction through a single GraphQL endpoint.

**Key capabilities**:
- Extract survey responses with filtering (date range, feedback type, score range)
- Pull aggregated analytics (NPS by unit, CSAT trends over time)
- Access text analytics results
- Custom data extraction for data warehouse loading

**Example query structure**:
```graphql
{
  records(filter: {dateRange: {from: "2026-01-01", to: "2026-03-31"}}) {
    edges {
      node {
        npsScore
        commentText
        surveyDate
        unit {
          name
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

**Pagination**: Cursor-based. Use `pageInfo.endCursor` as the `after` parameter in subsequent queries.

**Altair GraphQL Client**: Medallia recommends the Altair GraphQL Client for testing queries against the Query API.

## Web Feeds (Import API legacy)

More versatile than standard RESTful APIs — includes a flexible ETL process for data validation and transformation for both inbound and outbound data flows. Being superseded by Import API v2 for new integrations.

## Rate Limits

- **Minimum**: 60,000 API calls per 24-hour window (all instances)
- **Higher limits**: Available by contract negotiation
- **Recommendation**: Batch operations where possible, implement exponential backoff for rate limit errors

## SDKs

### MEC CLI
Command-line interface for Medallia Experience Cloud:
```bash
brew tap medallia/homebrew-mec-cli
brew install mec-cli
```

### Mobile SDKs
- **iOS**: `medallia/digital-ios-sdk` — Swift, available via CocoaPods/SPM
- **Android**: `medallia/mxo-android-sdk` — Kotlin, available via Maven
- **React Native**: `medallia/dxa-react-native-sample-apps` — cross-platform DXA

### GitHub repositories
Organization: https://github.com/medallia (128 public repos)

Key repos:
- `Anywhere-SampleApps` — reference implementations for Experience Cloud services
- `digital-ios-sdk` / `mxo-android-sdk` — mobile SDKs
- `homebrew-mec-cli` — CLI installation
- `merci` — Go/gRPC rate limiting service
