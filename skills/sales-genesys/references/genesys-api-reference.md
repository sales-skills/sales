<!-- Source: https://developer.genesys.cloud/platform/api/ and https://all.docs.genesys.com/Developer/APIbyService -->
<!-- Note: Developer Center is fully JS-rendered — API docs could not be fetched verbatim via WebFetch. This reference is compiled from WebSearch results, help center articles, and status pages. Refresh by visiting https://developer.genesys.cloud/ directly. -->

# Genesys Cloud Platform API Reference

## Authentication

OAuth 2.0 required for all API access. Two grant types:

### Client Credentials
Single-step authentication for non-user applications (services, cron jobs, integrations).
- Client app provides OAuth client credentials → receives access token
- No user context — actions are performed as the OAuth client

### Code Authorization
Two-step authentication for user-facing applications.
1. User authenticates via sign-in form at `/oauth/authorize`
2. Application exchanges authorization code for access token at `/oauth/token`

### Creating OAuth clients
Menu > Admin > Integrations > OAuth > Add Client
- Configure grant type, redirect URIs, scope
- **Note**: Implicit Grant option being removed May 2026 — migrate to Code Authorization

## Regional API Base URLs

| Region | API Base URL |
|---|---|
| US East | `https://api.mypurecloud.com` |
| US East 2 (GovCloud) | `https://api.use2.us-gov-pure.cloud` |
| US West | `https://api.usw2.pure.cloud` |
| Canada | `https://api.cac1.pure.cloud` |
| São Paulo | `https://api.sae1.pure.cloud` |
| Dublin | `https://api.mypurecloud.ie` |
| Frankfurt | `https://api.mypurecloud.de` |
| London | `https://api.euw2.pure.cloud` |
| Zurich | `https://api.euc2.pure.cloud` |
| Mumbai | `https://api.aps1.pure.cloud` |
| Seoul | `https://api.apne2.pure.cloud` |
| Sydney | `https://api.mypurecloud.com.au` |
| Osaka | `https://api.apne3.pure.cloud` |
| Tokyo | `https://api.mypurecloud.jp` |
| UAE | `https://api.mec1.pure.cloud` |

All endpoints follow pattern: `{base_url}/api/v2/{resource}`

## Platform Client SDKs

| Language | Package |
|---|---|
| JavaScript | CJS, AMD, ES6 modules |
| Java / Android | Maven |
| Python | pip |
| .NET | NuGet |
| Go | go get |
| iOS | Swift/Objective-C |

## API Resource Categories

### Digital Messaging & Engagement
- Alerting
- External Contacts
- Open Messaging
- WebChat
- Web Messaging
- Widgets
- Predictive Engagement

### Inbound
- Analytics
- Callback
- Conversations
- Engagement
- Fax
- Flows
- Recording
- Routing

### Outbound
- CX Contact
- Outbound campaigns and contact lists

### Workforce Engagement Management
- Quality Management (evaluations, scoring)
- Workforce Management (forecasting, scheduling, adherence)
- Interaction Analytics

### Self-Service & Automation
- Architect (flows, prompts, grammars)
- CLI tools

### Unified Communications
- Content Management
- Geolocation
- Locations
- Notifications (WebSocket-based)

### Open Platform
- Authorization (roles, permissions, scopes)
- Billing
- GDPR (data subject requests)
- Groups
- Identity Provider (SSO)
- Integrations
- OAuth
- Organization
- Users
- Workspace

### Telecom
- Telephony
- SIP management

## Developer Tools

- **API Explorer**: Browser-based docs + inline request testing at developer.genesys.cloud
- **Platform API CLI (`gc`)**: Command-line interface for scripting and automation
- **Archy**: YAML-based Architect flow authoring for CI/CD pipelines
- **Notification Relay**: WebSocket event streaming for real-time updates

## Rate Limits

Rate limit documentation available at developer.genesys.cloud/api/rest/rate_limits (JS-rendered — could not fetch verbatim). Monitor via API Usage Report in admin console.

## Scopes

Genesys Cloud uses scopes to control API endpoint access. Scope categories include:
- routing, conversations, analytics, users, groups
- architect, quality, workforce-management
- recording, telephony, integrations
- authorization, organization, gdpr, billing

Configure scopes per OAuth client based on required functionality.

## Status Monitoring

- Service status: https://status.mypurecloud.com/
- API status: https://status.mypurecloud.com/api
- Status history shows incident frequency and duration
