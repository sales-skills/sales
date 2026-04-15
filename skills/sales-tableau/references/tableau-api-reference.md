<!-- Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm -->
<!-- Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm -->
<!-- Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref.htm -->
<!-- Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm -->

# Tableau REST API Reference

## Overview

The Tableau Server REST API enables programmatic management of Tableau Server and Tableau Cloud resources via HTTP. Current version: **REST API 3.28** (Tableau Cloud/Server 2026.1).

## Base URL patterns

**Classic endpoints:**
```
https://{server}/api/{version}/sites/{site-luid}/{resource}
```
Example: `https://10ay.online.tableau.com/api/3.28/sites/{site-id}/workbooks`

**Per-resource endpoints (version-independent):**
```
https://{server}/api/-/{resource}
```

For Tableau Cloud, the server includes the pod name: `https://10ay.online.tableau.com`

## Authentication

Four methods supported:

### 1. Personal Access Tokens (PATs) — recommended

```json
POST /api/3.28/auth/signin

{
  "credentials": {
    "personalAccessTokenName": "MY_TOKEN_NAME",
    "personalAccessTokenSecret": "qlE1g9MMh9vbrjjg==:rZTHhPpP2tUW1kfn4tjg8",
    "site": {
      "contentUrl": "MarketingTeam"
    }
  }
}
```

PAT expiration: 15 days of inactivity on Cloud (configurable), 1 year default on Server.

### 2. Connected Apps (JWT)
JWT-based authentication for embedding and API access. Configure via Tableau Cloud/Server settings.

### 3. Unified Access Tokens (UATs)
JWT-based tokens for Tableau Cloud only, configured through Tableau Cloud Manager REST API.

### 4. Username/Password

```json
POST /api/3.28/auth/signin

{
  "credentials": {
    "name": "admin",
    "password": "p@ssword",
    "site": {
      "contentUrl": "MarketingTeam"
    }
  }
}
```

Not recommended for Cloud with MFA enabled.

### Response (all methods)

```json
{
  "credentials": {
    "site": {
      "id": "9a8b7c6d5-e4f3-a2b1-c0d9-e8f7a6b5c4d",
      "contentUrl": ""
    },
    "user": {
      "id": "9f9e9d9c-8b8a-8f8e-7d7c-7b7a6f6d6e6d"
    },
    "token": "HvZMqFFfQQmOM4L-AZNIQA|5fI6T54OPK1Gn1p4w0RtHv6EkojWRTwq|a946d998-2ead-4894-bb50-1054a91dcab3"
  }
}
```

### Using the token

Include in all subsequent requests:
```
X-Tableau-Auth: {token}
```

Token valid for 240 minutes by default. Site-specific — cannot be used across sites.

## API method categories (31 groups, 300+ endpoints)

### Authentication Methods
- Sign In, Sign Out, Switch Site
- List/Revoke Personal Access Tokens

### Data Sources Methods
- Query Data Sources, Query Data Source, Query Data Source Connections
- Publish Data Source, Download Data Source
- Update Data Source, Update Data Source Connection(s), Update Data Source Now
- Add/Delete Tags, Download/Remove Revisions
- Update Data in Hyper Connection/Data Source

### Workbooks and Views Methods
- Query Workbooks, Download Workbook (TWBX/PDF/PowerPoint)
- Publish Workbook, Download Workbook Revision
- Get/Delete Custom View, Download View Crosstab Excel
- Add/Delete Tags, Query View Data/Image

### Users and Groups Methods
- Add User to Site, Remove User from Site, Update User
- Create/Delete/Update Group, Get Users in Group
- Import Users from CSV, Download User Credentials
- Create/Delete Group Set, SCIM configuration
- Identity Pool management

### Projects Methods
- Create/Delete/Update/Query Projects

### Permissions Methods
- Add/Delete/List permissions for: Workbooks, Views, Data Sources, Projects, Collections, Virtual Connections
- Replace Content Permissions, Default Permissions

### Jobs, Tasks, and Schedules Methods
- Query Jobs, Cancel Job
- Create/Delete/Update/List Server Schedules
- Add Data Source/Workbook to Schedule
- Get/Run Extract Refresh Task

### Extract and Encryption Methods
- Create/Delete Extract for Data Source
- Create/Update/Delete Cloud Extract Refresh Task
- Run Extract Refresh Task
- Encrypt/Decrypt/Reencrypt Extracts in Site

### Subscriptions Methods
- Create/Delete/Get/Update/List Subscriptions

### Notifications Methods
- Create/Delete/Update Data-Driven Alert
- Add/Delete User from Alert
- Create/Delete/Update/Test Webhooks

### Favorites Methods
- Add/Delete Workbook/View/Data Source/Project/Flow to/from Favorites
- Get Favorites for User, Organize Favorites

### Flow Methods
- Publish/Download/Delete/Update/Query Flows
- Run Flow Now, Cancel Flow Run, Get Flow Runs
- Flow Permissions, Flow Connections, Linked Tasks

### Collections Methods
- Create/Delete/Get/List Collections
- Add/Remove/Reorder Items, Batch Update
- Collection Permissions

### Pulse Methods (AI metrics)
- Create/Delete/Get/Update Metric and Metric Definition
- Create/Delete/Get Subscription
- Generate Insight Bundles (basic, breakdown, exploration, detail, springboard)
- List followed metric groups, site entitlements
- User preferences

### Metadata Methods
- Data Quality Warnings (add, update, delete, query, batch operations)
- Data Quality Certifications (batch add/update/delete)
- Label management (create, update, delete, categories)
- Tags (add/delete for columns, databases, tables, virtual connections)
- Database/Table management (query, move, permissions)

### Site Methods
- Create/Delete/Update/Query Site(s)
- Get Embedding Settings, Recently Viewed, User Personal Space

### Connected App Methods
- Create/Delete/Get/Update Connected App and Secrets
- Register/Delete/Update External Authorization Server (EAS)

### Content Exploration Methods
- Get content search results, suggestions
- Batch content usage statistics

### Analytics Extensions Methods
- Add/Update/Delete/List analytics extension connections
- Enable/disable analytics extensions

### Identity Pools Methods
- Create/Delete/Get/Update Identity Pool
- Add/Remove User from Identity Pool
- Configure Identity Store, Authentication Configuration

### Virtual Connections Methods
- Publish/Download/Delete/Update Virtual Connection
- List database connections, permissions, revisions, tags

### Server Methods
- Server Info, Current Session, Active Directory Domains

### Publishing Methods
- Initiate/Append File Upload
- Publish Workbook/Data Source/Flow

### Mobile Settings Methods
- Get/Update Mobile Security Settings

### OpenID Connect Methods
- Create/Get/Update/Remove OIDC Configuration

### Tableau Extensions Settings Methods
- List/Update extensions settings for server and site

### Dashboard Extensions Settings Methods (Retired API 3.21)
- Allow/Block/Disallow extensions

### Ask Data Lens Methods (Retired API 3.22)
- Create/Delete/Get/List Ask Data Lenses

### Metrics Methods (Retired API 3.22)
- Replaced by Pulse Methods

### Revisions Methods
- Download/Remove Workbook/Data Source Revisions

### Custom Domain Methods
- Create/Delete/Get/Update custom domain settings

## API versioning

| Tableau Release | REST API Version |
|---|---|
| Cloud/Server 2026.1 | 3.28 |
| Cloud Feb 2026 / Server 2026.2 | 3.28 |
| 2024.2 | 3.23 |
| 2023.1 | 3.19 |
| 2020.1 | 3.7 |
| Server 10.5 | 2.8 |

Classic APIs use explicit version in URL. Per-resource APIs use `-` (hyphen) in place of version and version independently.

## Python TSC library

The Tableau Server Client (TSC) is the official Python library:

```bash
pip install tableauserverclient
```

```python
import tableauserverclient as TSC

# Authenticate with PAT
tableau_auth = TSC.PersonalAccessTokenAuth('token-name', 'token-secret', site_id='site-name')
server = TSC.Server('https://10ay.online.tableau.com', use_server_version=True)

with server.auth.sign_in(tableau_auth):
    # List workbooks
    all_workbooks, pagination = server.workbooks.get()
    for wb in all_workbooks:
        print(wb.name)

    # Refresh extract
    server.datasources.refresh(datasource_id)
```

GitHub: github.com/tableau/server-client-python

## Postman collection

Official Postman collection for all REST API methods:
- GitHub: github.com/tableau/tableau-postman (30 stars, 31 open issues)
- Postman workspace: Salesforce Developers > Tableau APIs

## Key constraints

- REST API does NOT support single sign-on (SSO) — use PATs or Connected Apps
- Tokens are site-specific and expire after 240 minutes by default
- Tableau Cloud with MFA requires PAT or UAT (username/password won't work)
- No published rate limits, but expect throttling on very high request volumes
- File uploads >64MB require chunked upload (Initiate + Append + Publish)
- Some methods are Cloud-only or Server-only — check availability per endpoint
- Data Management license required for some metadata and flow scheduling endpoints
