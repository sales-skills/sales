<!-- Source: https://help.bliro.io/en/articles/10329784-api-access -->
<!-- Source: https://help.bliro.io/en/articles/10628092-receive-bliro-events-in-your-webhook-endpoint -->
<!-- Source: https://api.bliro.io/docs/ (Swagger UI — JS-rendered, partial extraction only) -->

# Bliro API & Webhook Reference

## Authentication

**OAuth 2.0 Client Credentials** grant type.

### Token request

```
POST https://accounts.bliro.io/oauth/token
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "audience": "https://api.bliro.io",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}
```

### Token response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 86400
}
```

### Usage

Include the token as a Bearer token:

```
Authorization: Bearer ACCESS_TOKEN
```

### Setup

Generate Client ID and Client Secret at `app.bliro.io` → Settings → API Access (admin only).

## Available scopes

| Scope | Description |
|---|---|
| `org:calls:read` | Retrieve call records for all users in the organization |

**Note**: Scopes cannot be customized yet. Future updates will allow granular permissions. The API currently grants access to all calls within the organization — no per-team or per-user filtering at the scope level.

## Endpoints

### GET /v3/calls

List call records for all organization members.

```
GET https://api.bliro.io/v3/calls
Authorization: Bearer ACCESS_TOKEN
```

**Response** (array of call objects):

```json
[
  {
    "_id": "call-abc123",
    "type": "conversation",
    "status": "completed",
    "meta": {
      "title": "Discovery call with Acme Corp",
      "owner": {
        "userId": "user-123",
        "orgId": "org-456",
        "email": "rep@company.com",
        "name": "Sales Rep"
      },
      "participants": [
        {
          "name": "Jane Buyer",
          "email": "jane@acme.com",
          "crmId": "sf-003abc"
        }
      ],
      "startTimestamp": 1704067200000,
      "endTimestamp": 1704070800000
    },
    "summaries": [
      {
        "label": "Key Points",
        "value": "Discussed Q2 pricing, buyer interested in 50-seat deployment...",
        "format": "markdown"
      },
      {
        "label": "Action Items",
        "value": "1. Send proposal by Friday\n2. Schedule follow-up with CFO",
        "format": "markdown"
      }
    ],
    "transcriptChunks": [
      {
        "speaker": "Sales Rep",
        "timestamp": 1704067200000,
        "text": "Thanks for joining today. I wanted to walk through..."
      },
      {
        "speaker": "Jane Buyer",
        "timestamp": 1704067215000,
        "text": "Sure, we've been evaluating a few options..."
      }
    ],
    "groups": ["team-sales"]
  }
]
```
<!-- Constructed from webhook payload docs + help center — verify field names and nesting against live API -->

**Filtering**: Additional filter parameters are documented in the Swagger UI at `api.bliro.io/docs/#/Calls/get_v3_calls` (JS-rendered — may not load in all environments).

### Pagination

Not documented. Test with large result sets to determine pagination pattern (likely cursor or offset-based — check response headers or wrapper object).

### Rate limits

Not documented. Design conservatively — cache tokens (they last `expires_in` seconds, typically 86400 = 24h) and avoid rapid sequential requests.

## Gaps

- Only one endpoint documented (`GET /v3/calls`) — no create, update, or delete operations
- Filtering parameters behind JS-rendered Swagger UI — could not extract
- Pagination pattern unknown
- Rate limits not published
- No SDK or client library
- No MCP server

## Webhooks

### Overview

Bliro webhooks send POST requests when a call's transcription is finalized and summary is generated. Organization-level: any member's completed call triggers the webhook.

### Setup

1. Navigate to `app.bliro.io/orgs/settings/webhook`
2. Create: name, HTTPS endpoint URL, optional security token
3. Test via "Test Webhook" button
4. Activate (deactivated by default)

### Requirements

- HTTPS endpoint with valid TLS certificate (TLS 1.2 or 1.3 only)
- Must return 2xx HTTP status promptly
- Process events asynchronously (don't block the response)

### Webhook payload

```json
{
  "callData": {
    "_id": "call-abc123",
    "type": "conversation",
    "status": "completed",
    "meta": {
      "title": "Discovery call with Acme Corp",
      "owner": {
        "userId": "user-123",
        "orgId": "org-456",
        "email": "rep@company.com",
        "name": "Sales Rep"
      },
      "participants": [
        {
          "name": "Jane Buyer",
          "email": "jane@acme.com",
          "crmId": "sf-003abc"
        }
      ],
      "startTimestamp": 1704067200000,
      "endTimestamp": 1704070800000
    },
    "summaries": [
      {
        "label": "Key Points",
        "value": "...",
        "format": "markdown"
      }
    ],
    "transcriptChunks": [
      {
        "speaker": "Sales Rep",
        "timestamp": 1704067200000,
        "text": "..."
      }
    ],
    "groups": ["team-sales"]
  },
  "timestamp": "2025-01-01T00:05:00.000Z"
}
```

### Signature verification

Optional `Bliro-Signature` header provides HMAC-SHA256 verification when a security token is configured.

**Header format**:
```
Bliro-Signature: t=1492774577,v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd
```

**Verification steps**:
1. Extract `t` (timestamp) and `v1` (signature) from header
2. Construct signed payload: `{timestamp}.{JSON body}`
3. Compute HMAC-SHA256 using security token as key
4. Compare computed hash with `v1` value
5. Optionally check timestamp freshness to prevent replay attacks

```python
import hmac
import hashlib

def verify_bliro_signature(payload: bytes, signature_header: str, secret: str) -> bool:
    parts = dict(p.split("=", 1) for p in signature_header.split(","))
    timestamp = parts["t"]
    expected = parts["v1"]
    signed = f"{timestamp}.{payload.decode()}"
    computed = hmac.new(secret.encode(), signed.encode(), hashlib.sha256).hexdigest()
    return hmac.compare_digest(computed, expected)
```

### Best practices

- Process webhook events asynchronously (queue for background processing)
- Exempt webhook routes from CSRF protection
- Always verify HMAC signature when security token is configured
- Check timestamp to prevent replay attacks
- Return 2xx immediately, process later
