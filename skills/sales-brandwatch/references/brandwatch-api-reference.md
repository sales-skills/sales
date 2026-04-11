# Brandwatch API Reference

## Authentication

**Method**: OAuth 2.0 (grant type: `api-password`)

**Get an access token:**
```bash
curl -X POST --data-urlencode 'password=[yourpassword]' \
  'https://api.brandwatch.com/oauth/token?username=[your@username.com]&grant_type=api-password&client_id=brandwatch-api-client'
```

**Response:**
```json
{
  "access_token": "aa000000-0aaa-0000-0a00-aa00a000a00a",
  "token_type": "bearer",
  "expires_in": 31535999,
  "scope": "read trust write"
}
```

**Token expiration**: ~1 year (31,535,999 seconds) for API users.

**Using the token** — either method works:
- Header: `Authorization: Bearer [ACCESS_TOKEN]`
- URL parameter: `&access_token=[ACCESS_TOKEN]`

**Multi-organization**: If your account accesses multiple organizations, add `platform_client_id` to the token request. Contact Brandwatch support for available platform client IDs.

**Requirements**: Only "Regular" or "Admin" user accounts can access the API.

## Base URL

```
https://api.brandwatch.com
```

## API Products

Brandwatch offers 6 API products:

| API | Purpose | Key endpoints |
|---|---|---|
| **Analysis API** | Query content library, return aggregated statistics | Mentions, topics, charts, sentiment breakdowns, top sites/authors |
| **Consumer Research API** | Real-time data export and streaming | Mention retrieval, filtered mentions, data streaming |
| **Data Upload API** | Import custom data for analysis alongside social data | Document upload, custom data source creation |
| **Measure API** | Owned social media metrics export | Social channel analytics, performance data |
| **Publish API** | Social publishing data export | Scheduled posts, publishing history |
| **Engage API** | Social inbox and conversation data | Messages, conversations, assignments |

## Key Endpoints (Consumer Research API)

### User and client management
- `GET /me` — current user info
- `GET /clients` — list accessible clients/projects

### Projects and queries
- `GET /projects/{projectId}/queries` — list queries in a project
- `POST /projects/{projectId}/queries` — create a new query
- `PUT /projects/{projectId}/queries/{queryId}` — update a query
- `DELETE /projects/{projectId}/queries/{queryId}` — delete a query

### Data retrieval
- `GET /projects/{projectId}/data/mentions` — retrieve mentions
- `GET /projects/{projectId}/data/mentions/count` — mention volume
- `GET /projects/{projectId}/data/volume` — volume over time
- `GET /projects/{projectId}/data/topics` — trending topics
- `GET /projects/{projectId}/data/sentiment` — sentiment breakdown

### Filtering
Mention retrieval supports filters:
- `queryId` — filter by query
- `startDate` / `endDate` — date range
- `language` — language codes
- `sentiment` — positive, neutral, negative
- `locationId` — geographic filter
- `pageType` — source type (twitter, reddit, blog, forum, news, etc.)

### Organization
- Tags, categories, rules, and lists (author, location, site)
- Custom alerts and workflow management

## Python SDK

**Current SDK** (for Consumer Research):
```bash
pip install bcr-api
```

```python
from bcr_api import BWProject

# Authenticate
project = BWProject(username='you@company.com', password='yourpassword')

# Or with API key
project = BWProject(token='your-access-token')

# Query mentions
mentions = project.get_mentions(
    queryId=12345,
    startDate='2025-01-01',
    endDate='2025-01-31'
)
```

**GitHub repos**:
- `BrandwatchLtd/bcr-api` — Python client for Consumer Research API
- `BrandwatchLtd/api_sdk` — General API SDK with examples and Jupyter notebook demo

## Rate Limits

Brandwatch implements rate limiting on API requests. Specific limits are documented at:
https://developers.brandwatch.com/docs/rate-limiting

*Check the rate limiting docs for current thresholds — these change over time.*

## Developer Resources

- **Developer portal**: https://developers.brandwatch.com/
- **Getting started**: https://developers.brandwatch.com/docs/getting-started
- **Authentication**: https://developers.brandwatch.com/docs/authenticate
- **Data retrieval**: https://developers.brandwatch.com/docs/data-retrieval
- **Best practices**: https://developers.brandwatch.com/docs/best-practices
- **GitHub**: https://github.com/BrandwatchLtd
