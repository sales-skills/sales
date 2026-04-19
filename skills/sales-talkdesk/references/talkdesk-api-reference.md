<!-- Source: https://docs.talkdesk.com/reference/api-reference, https://docs.talkdesk.com/docs/build-started, https://docs.talkdesk.com/docs/api-access, https://docs.talkdesk.com/docs/live-api, https://docs.talkdesk.com/docs/explore-api -->

# Talkdesk API Reference

## Overview

Talkdesk APIs are based on RESTful principles, secured by OAuth 2.0 authentication, and provide JSON messages with support for search, pagination, sorting, and filtering.

**Availability**: Talkdesk APIs are available to platform partners and enterprise customers. Third-party access outside the AppConnect partnership program is restricted.

## Authentication

### Methods
1. **Client Credentials** — service-to-service authentication
2. **Signed JWT** — JSON Web Token authentication
3. **Authorization Code** — OAuth 2.0 for user delegation
4. **Scopes** — granular permission definitions per API

### OAuth flow
- Authorize URL: `/oauth/authorize`
- Token URL: `/oauth/token`

### For partner apps
Partner applications use the Events API to obtain OAuth credentials. When customers install your app, listen for the `app.installed` event, which provides:
- OAuth client credentials
- A `root` link specifying the localized API Gateway
- Customer-specific data access permissions

### Security
Unencrypted credentials must not be shared with anyone (not even with Talkdesk). TLS 1.2 is the minimum protocol version.

## Base URLs by Region

| Region | Base URL |
|---|---|
| US | `https://api.talkdeskapp.com/` |
| EU | `https://api.talkdeskapp.eu/` |
| Canada | `https://api.talkdeskappca.com/` |

Use the base URL that corresponds to the customer's account region for proper API Gateway routing.

## API access

### Current customers
- If you have a plan, submit a request asking for API access with your account information
- If you don't have a plan, contact your Customer Success Manager
- Each partner app receives access to specific APIs with no per-customer exceptions

### Prospective partners
Visit the Partner Starting Point documentation at docs.talkdesk.com

## API groups (23 registered specifications)

### Core APIs
| API | Description |
|---|---|
| Core API | Primary platform functionality — contacts, users, accounts |
| Events API | Event streaming, webhooks, app lifecycle events |
| Live API | Real-time metrics via HTTP Server-Sent Events (SSE) |
| Explore API | Asynchronous historical report extraction |
| Omnichannel API | Multi-channel interaction management |

### Campaign & Dialing
| API | Description |
|---|---|
| Campaign Management API | Outbound campaign configuration and management |
| Advanced Dialer API | Dialer operations |
| Automated Notifications API | SMS and voice notification automation |

### Workforce Management
| API | Description |
|---|---|
| WFM History Import API | Historical data import for WFM migration |
| WFM Request Management API | Time-off, shift swap, and scheduling requests |

### Industry-Specific
| API | Description |
|---|---|
| Healthcare Experience Cloud API | Patient Lookup (Epic integration) |
| Financial Services Experience Cloud API | Banking workflows |
| HLS Payers Integrations API | Healthcare payer system integrations |
| Industries Activities API | Industry-specific activity tracking |

### Other
| API | Description |
|---|---|
| Voice Biometrics Enrollment API | Caller identity verification enrollment |
| Billing Insights API | Usage and billing data |
| CCaaS User Status API | Agent status management |
| Queues API | Queue configuration and real-time metrics |

## Live API details

Real-time metrics streaming via HTTP Server-Sent Events (SSE).

### Capabilities
- Update frequency: minimum 5 seconds, maximum 60 seconds
- Maximum 16 metrics per subscription
- All numeric values: up to 20 decimal places precision
- Follows Talkdesk Contacts Data Model

### Workflow
1. `GET` available metrics — list all queryable metrics via queries endpoint
2. Subscribe to stream — create a new subscription
3. Retrieve subscription — access subscription details
4. Update query — modify metrics in existing subscription
5. Connect to stream — establish SSE connection for real-time data

### Use cases
- Aggregating metrics across multiple Talkdesk accounts
- Creating custom dashboards combining Talkdesk and third-party system data
- Triggering automated actions based on real-time conditions
- Storing metrics locally for supplementary analysis

## Explore API details

Asynchronous API for extracting historical reports from Talkdesk Explore™.

### Characteristics
- Data has a 5-minute delay to real-time
- TLS 1.2 minimum
- General Availability since July 2021

### Workflow
1. Execute a report — creates request, returns report ID
2. Check report status — monitors execution, redirects when complete
3. Download report file — retrieves completed report data
4. Delete a report — marks as deleted, removes files
5. List reports by type — retrieves all reports of a specific category

## Talkdesk Connections

Self-service integration framework for connecting third-party APIs without engineering:
- Configure third-party API connections autonomously
- Build action executors and authorization validators
- No-code setup

## Partner Project

Self-service portal for partner app development:
- App registration and management
- Access to partner-specific APIs
- Developer account provisioning

## Rate limits

Rate limits are not publicly documented. Design for conservative usage patterns and implement exponential backoff on 429 responses.

## Known API limitations

- API access restricted to enterprise customers and AppConnect partners — not available on base plans
- Rate limits not publicly documented
- Individual endpoint documentation requires developer portal access
- Partner apps get access to specific APIs only — no blanket access
- Regional base URL must match customer account region
