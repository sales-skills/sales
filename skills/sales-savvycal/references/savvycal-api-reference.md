<!-- Source: https://developers.savvycal.com/ -->
<!-- Note: SavvyCal API docs are partially JS-rendered. Endpoint response schemas could not be fully captured. Refer to developers.savvycal.com for complete interactive documentation. -->

# SavvyCal API Reference

## Base URL

```
https://api.savvycal.com/
```

## Authentication

Two methods:

### Personal Access Tokens
For testing and controlling your own account. Create at Settings > Developers.

```
Authorization: Bearer pt_secret_XXXXXXXXXXX
```

### OAuth 2.0
For building integrations on behalf of other users.

**Register app**: Settings > Developers — provide app name and redirect URI(s). Receive client_id and client_secret.

**Authorization URL**:
```
https://savvycal.com/oauth/authorize?response_type=code&client_id=<client-id>&redirect_uri=<redirect-uri>
```

**Token exchange** (POST):
```
POST https://savvycal.com/oauth/token
Content-Type: application/x-www-form-urlencoded

code=<auth-code>&client_id=<id>&client_secret=<secret>&grant_type=authorization_code&redirect_uri=<uri>
```

**Response**:
```json
{
  "access_token": "...",
  "refresh_token": "...",
  "expires_in": 7200,
  "token_type": "bearer"
}
```

Access tokens expire in 2 hours. Refresh with:
```
POST https://savvycal.com/oauth/token
grant_type=refresh_token&refresh_token=<token>&client_id=<id>&client_secret=<secret>
```

## API Conventions

- REST conventions, JSON request/response bodies
- Additive approach: new fields may be added to existing payload types without notice
- Paginated responses use cursor-based pagination

## Endpoints

### Scheduling Links

| Method | Path | Description |
|---|---|---|
| GET | `/v1/links` | List scheduling links (paginated) |
| POST | `/v1/links` | Create a scheduling link |
| GET | `/v1/links/:id` | Get a scheduling link |
| PUT | `/v1/links/:id` | Update a scheduling link |
| DELETE | `/v1/links/:id` | Delete a scheduling link |
| POST | `/v1/links/:id/duplicate` | Duplicate a scheduling link |
| PUT | `/v1/links/:id/toggle` | Toggle link active/inactive |
| GET | `/v1/links/:id/slots` | Get available time slots for a link |

### Events

| Method | Path | Description |
|---|---|---|
| GET | `/v1/events` | List events (paginated) |

### Webhooks (managed via API or Settings > Integrations)

Webhook subscriptions can be created and managed through the Settings UI or via API.

## Webhook Events (16 types)

### Event lifecycle
| Event | Fires when |
|---|---|
| `event.created` | New event is scheduled |
| `event.requested` | Event requires approval |
| `event.approved` | Requested event is approved |
| `event.declined` | Requested event is declined |
| `event.rescheduled` | Event is rescheduled |
| `event.changed` | Event details are modified |
| `event.canceled` | Event is canceled |

### Checkout (paid bookings)
| Event | Fires when |
|---|---|
| `event.checkout.pending` | Checkout initiated |
| `event.checkout.expired` | Checkout expired without payment |
| `event.checkout.completed` | Payment completed |

### Attendees (group events)
| Event | Fires when |
|---|---|
| `event.attendee.added` | Attendee added to group event |
| `event.attendee.canceled` | Attendee canceled from group event |
| `event.attendee.rescheduled` | Attendee rescheduled in group event |

### Polls
| Event | Fires when |
|---|---|
| `poll.response.created` | New poll response submitted |
| `poll.response.updated` | Poll response updated |

### Workflows
| Event | Fires when |
|---|---|
| `workflow.action.triggered` | Workflow action executes |

## Webhook Delivery

- HTTP POST to your registered URL
- JSON-encoded body
- Headers: `x-savvycal-signature` (HMAC-SHA256), `x-savvycal-webhook-id`, `Content-Type: application/json`
- Respond with `200 OK` quickly; process asynchronously
- Non-2xx responses trigger exponential backoff retries

### Signature Verification

The secret key is unique per webhook subscription. Compute HMAC-SHA256 of the raw request body using your secret, then compare to `x-savvycal-signature` using constant-time comparison.

```python
import hmac
import hashlib

def verify_signature(payload_bytes, signature, secret):
    expected = hmac.new(secret.encode(), payload_bytes, hashlib.sha256).hexdigest()
    return hmac.compare_digest(signature, expected)
```

```javascript
const crypto = require('crypto');

function verifySignature(body, signature, secret) {
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
```

## JavaScript Embed Library

See `references/platform-guide.md` for the full embed documentation with 4 modes and code examples.

## Rate Limits

Rate limits are not publicly documented. If you encounter rate limiting, implement exponential backoff with jitter.

## GitHub

SavvyCal's GitHub organization: https://github.com/svycal
