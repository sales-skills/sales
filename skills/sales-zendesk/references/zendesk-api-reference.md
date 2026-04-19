<!-- Source: https://developer.zendesk.com/api-reference/ and https://developer.zendesk.com/documentation/api-basics/ -->

# Zendesk API Reference

## Base URL

```
https://{subdomain}.zendesk.com/api/v2/
```

Where `{subdomain}` is your Zendesk account subdomain.

## Authentication

### API Token (Basic Auth)

Credentials format: `{email_address}/token:{api_token}`

Example: `jdoe@example.com/token:6wiIBWbGkBMo1mRDMuVwkw1EPsNkeUj95PIz2akv`

Base64-encode the credentials and send as:
```
Authorization: Basic amRvZUBleGFtcGxlLmNvbS90b2tlbjo2d2lJQldiR2tCTW8xbVJETXVWd2t3MUVQc05rZVVqOTVQSXoyYWt2
```

API tokens are managed in Admin Center > Apps and integrations > APIs > Zendesk API. Accounts can maintain up to 256 active tokens.

### OAuth 2.0 (Bearer Token)

```
Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo
```

OAuth tokens provide access to a single Zendesk instance and permit client-side API requests.

### Global OAuth Access Tokens

Apps, integrations, or bots distributed to multiple Zendesk customers must use global OAuth access tokens rather than standard API tokens or OAuth tokens.

## SSL/TLS Requirements

All Zendesk v2 API connections require TLS 1.2 protocol support and SNI (Server Name Indication) extension compatibility. Legacy TLS 1.0 and 1.1 protocols are no longer supported.

## Rate Limits

### Plan-Based Limits (requests per minute)

| Zendesk Suite Plan | Limit |
|---|---|
| Team | 200 |
| Growth | 400 |
| Professional | 400 |
| Enterprise | 700 |
| Enterprise Plus | 2500 |

| Zendesk Support Plan | Limit |
|---|---|
| Essential (legacy) | 10 |
| Team | 200 |
| Professional | 400 |
| Enterprise | 700 |
| High Volume Add-on | 2500 |

### Endpoint-Specific Limits

| Endpoint | Limit |
|---|---|
| List Tickets (page > 500) | 50 req/min |
| Update Ticket | 30 updates per 10 min per user per ticket; 100 req/min per account |
| Incremental Exports | 10 req/min (30 with add-on) |
| Update User | 5 req/min per user |
| Get Ticket Attachment | 2500 req/min |

### Additional Limits
- Job Queue: 30 concurrent jobs maximum
- Account-Wide: 100,000 requests per minute
- Apps: 100 requests/minute per user per app (client); 700 calls per 5 minutes (API)

### Rate Limit Headers
- `X-Rate-Limit`: Current rate limit for the account
- When exceeded: 429 Too Many Requests with `Retry-After` header (seconds until retry)

### High Volume Add-on
Increases qualifying plans to 2500 requests/minute. Requires minimum 10 agent seats.

## API Families

### Ticketing (Support API)
Work with tickets, users, organizations, and ticket workflows.
- Base: `/api/v2/tickets`, `/api/v2/users`, `/api/v2/organizations`
- Supports idempotent ticket creation via `Idempotency-Key` header (keys expire after 2 hours)
- Response headers: `x-idempotency-lookup: miss` (new) or `hit` (cached)

### Help Center API
Knowledge base articles, sections, categories, and community posts.

### AI Agents API
Automate conversations and manage intelligent workflows.

### Conversations API (Messaging)
Unify messages from multiple channels (WhatsApp, Facebook, Instagram, SMS) into single conversations. Also known as Sunshine Conversations.

### Talk API (Voice)
Call center software — calls, agents, call recordings, IVR.

### Talk Partner Edition API
Integration for third-party telephony providers.

### Live Chat API
Real-time chat management, visitor tracking, triggers.

### Real Time Chat API
WebSocket-based real-time events for chat.

### Chat Conversations API
Chat conversation history and management.

### Sell API (Sales CRM)
Sales force automation — deals, leads, contacts, pipelines.

### Custom Objects API
Create and manage custom data entities linked to tickets/users.

### Omnichannel APIs
Features spanning Zendesk channels — unified routing, agent availability.

### Status API
Monitor active incidents and scheduled maintenance.

### Answer Bot API
Provide Help Center article suggestions automatically.

## SDKs & Widgets

### Web Widget (Messaging) API
Embed messaging widget in websites.

### Web Widget (Classic) API
Legacy chat/support widget.

### Mobile SDKs
- Android SDK (Messaging)
- iOS SDK (Messaging)
- Zendesk SDK for Unity (Messaging)

## Extension APIs

### Apps Framework
- Apps Core API — app lifecycle, framework, events
- Apps Support API — extend Support UI
- Apps Sell API — extend Sell UI
- Apps Chat API — extend Chat UI

### Zendesk Integration Services (ZIS)
- ZIS Configs API — manage integration configurations
- Connections API — store external service credentials
- ZIS Inbound Webhooks API — receive events from external services
- ZIS Links API — link Zendesk objects to external systems
- ZIS Registry API — manage integration bundles
- Trigger Events Reference — events that can trigger ZIS flows

## Data Format

All requests and responses use JSON format.

## Pagination

Two strategies available:
- **Cursor-based pagination** (recommended) — uses `after_cursor`/`before_cursor` for efficient traversal
- **Offset pagination** (legacy) — uses `page` parameter, limited to first 10,000 results

## Postman Workspace

Zendesk Public Workspace on Postman includes all Zendesk APIs except Sell and Sunshine Conversations APIs.

## Developer Resources

- Documentation: https://developer.zendesk.com/documentation/
- API Reference: https://developer.zendesk.com/api-reference/
- Community Forum: Zendesk APIs community
- Blog: Zendesk Developer Blog on Medium
- Slack: Developer community workspace
