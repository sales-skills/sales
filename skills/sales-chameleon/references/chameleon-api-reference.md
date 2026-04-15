<!-- Source: https://developers.chameleon.io/ -->
<!-- Last fetched: 2026-04-15 -->
<!-- Note: Full API docs are at developers.chameleon.io — some pages JS-rendered. This reference compiled from accessible pages. -->

# Chameleon API Reference

## Overview

Chameleon provides three API surfaces:
1. **REST API** — server-side management of experiences, users, data
2. **JavaScript API** — client-side SDK for identifying users, tracking events, triggering experiences
3. **Webhooks** — real-time notifications of user interactions

## Authentication

- **Base URL**: `https://api.chameleon.io`
- **Auth header**: `X-Account-Secret: <your-api-secret>`
- **Account Token** (frontend-safe): Used in JS SDK for `chmln.init()`
- **API Secret** (server-side only): Used in REST API calls. Keep confidential.

## REST API Endpoints

All endpoints use `/v3/` prefix. Cursor-based pagination. Supports `expand` parameters for optimizing data retrieval.

### User Profiles

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/analyze/profiles` | List user profiles (paginated) |
| GET | `/v3/analyze/profiles/:id` | Get a single user profile |

### Companies

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/analyze/companies` | List companies |
| GET | `/v3/analyze/companies/:id` | Get a single company |

### Tours

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/tours` | List all tours |
| GET | `/v3/edit/tours/:id` | Get a single tour |

### Tour Interactions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/analyze/interactions` | List tour interactions (started, completed, dismissed) |
| GET | `/v3/analyze/interactions/:id` | Get a single interaction |

### Microsurveys

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/surveys` | List all microsurveys |
| GET | `/v3/edit/surveys/:id` | Get a single microsurvey |

### Microsurvey Responses

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/analyze/responses` | List microsurvey responses |

### Experience Deliveries

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/deliveries` | List deliveries |
| GET | `/v3/edit/delivery/:id` | Get a single delivery |
| POST | `/v3/edit/deliveries` | Create a delivery (programmatically trigger an experience for a user on next page load) |

### Segments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/segments` | List segments |
| GET | `/v3/edit/segments/:id` | Get a single segment |

### Rate Limit Groups

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/limit_groups` | List rate limit groups |
| GET | `/v3/edit/limit_groups/:id` | Get a single rate limit group |

### Alert Groups

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/alert_groups` | List alert groups |
| GET | `/v3/edit/alert_groups/:id` | Get a single alert group |

### Launchers

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/launchers` | List launchers |
| GET | `/v3/edit/launchers/:id` | Get a single launcher |

### Tooltips

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/tooltips` | List tooltips |
| GET | `/v3/edit/tooltips/:id` | Get a single tooltip |

### Webhooks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/webhooks` | List webhooks (requires `kind` param: `webhook` or `zapier_hook`) |
| POST | `/v3/edit/webhooks` | Create webhook. Required: `url` (HTTPS), `topics` (comma-separated or array), `kind` |
| DELETE | `/v3/edit/webhooks/:id` | Delete a webhook |

### Domains

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/urls` | List approved domains |
| GET | `/v3/edit/urls/:id` | Get a single domain |

### Tags

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/tags` | List tags |
| GET | `/v3/edit/tags/:id` | Get a single tag |

### Data Properties

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/properties` | List custom data properties |
| GET | `/v3/edit/properties/:id` | Get a single property |

### Data Imports

| Method | Endpoint | Description |
|---|---|---|
| GET | `/v3/edit/imports` | List CSV imports |
| GET | `/v3/edit/imports/:id` | Get a single import |

## JavaScript API (Client-Side SDK)

### Installation

**npm:**
```bash
npm install @chamaeleonidae/chmln
```

**Script tag:**
```html
<script src="https://fast.chameleon.io/messo/<ACCOUNT_TOKEN>/messo.min.js"></script>
```

**Via Segment:**
Enable Chameleon as a Segment destination. `analytics.identify()` automatically maps to `chmln.identify()`.

### Key methods

| Method | Description |
|---|---|
| `chmln.init(accountToken)` | Initialize the SDK with your account token |
| `chmln.identify(userId, properties)` | Identify a user with properties (email, name, plan, custom data). Required for targeting. |
| `chmln.track(eventName, properties)` | Track a custom event |
| `chmln.set(properties)` | Update properties for the current user |
| `chmln.show(experienceId)` | Programmatically show a specific experience |
| `chmln.clear()` | Clear all active experiences |
| `chmln.debug()` | Open the Debugger — shows eligible experiences, suppression reasons, element matches |
| `chmln.on(eventName, callback)` | Listen for Chameleon events (note: reported as missing in some SDK versions — check chmln npm package issues) |

### Identify example

```javascript
chmln.identify(user.id, {
  email: user.email,
  name: user.name,
  plan: user.plan,
  created: user.createdAt,
  company: {
    uid: company.id,
    name: company.name,
    plan: company.plan
  }
});
```

### SPA support

For single-page apps (React, Vue, Angular), Chameleon automatically detects URL changes via `pushState` and `popState`. No additional configuration needed for most frameworks. If using hash-based routing, enable hash tracking in Settings.

## Webhooks

### Creating a webhook

```bash
curl -X POST https://api.chameleon.io/v3/edit/webhooks \
  -H "X-Account-Secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://yourapp.com/webhooks/chameleon",
    "topics": ["tour.completed", "survey.responded"],
    "kind": "webhook"
  }'
```

### Webhook response properties

- `id` — Webhook ID
- `uid` — Webhook URL
- `name` — Display name
- `last_sent_at` — Last execution timestamp
- `status` — `valid` or `error`

### Common use cases

- Push microsurvey responses to a data warehouse
- Trigger Slack notifications when users complete onboarding tours
- Update CRM records when users interact with experiences
- Track experience completion in external analytics

## Pagination

REST API uses cursor-based pagination. Response includes `cursor` field for fetching next page. Pass `cursor` as query parameter to get subsequent pages.

## Rate limits

Rate limits apply to REST API calls. Specific limits not publicly documented in accessible pages — check dashboard or contact support for current limits.

## OpenAPI Specification

An OpenAPI spec is available at `https://developers.chameleon.io/openapi.json` for automated integration and code generation.

## LLM-friendly docs

A documentation index for LLMs is available at `https://developers.chameleon.io/llms.txt` — useful for AI assistants and programmatic doc discovery.
