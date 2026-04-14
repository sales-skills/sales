<!-- Source: https://www.typeform.com/developers/ -->
<!-- Note: API docs are partially JS-rendered. This reference is assembled from multiple fetched pages + developer portal content. Some endpoint details may be incomplete — check the official docs for full schemas. -->

# Typeform API Reference

## Authentication

Two methods:
1. **Personal Access Token** — for individual developer use. Generate at https://admin.typeform.com/account#/section/tokens
2. **OAuth 2.0** — for applications integrating with multiple Typeform accounts

Pass the token in the `Authorization` header:
```
Authorization: Bearer {your_token}
```

## Base URLs

- **Default**: `https://api.typeform.com`
- **EU Data Center**: `https://api.eu.typeform.com` or `https://api.typeform.eu`

Use the EU endpoint if your Typeform account is on the EU data center. Using the wrong endpoint returns auth errors.

## Rate Limits

**2 requests per second** per Typeform account, across the Create and Responses APIs.

Webhooks and Embed SDK are not rate-limited (they don't require direct API requests).

## SDKs

- **JavaScript**: `@typeform/api-client` (active, maintained by Typeform)
  - Install: `npm install @typeform/api-client` or `yarn add @typeform/api-client`
  - Initialize: `const { createClient } = require('@typeform/api-client'); const client = createClient({ token: 'your_token' });`
  - For EU accounts: `createClient({ token: 'your_token', apiBaseUrl: 'https://api.eu.typeform.com' })`
- **Python**: `typeform-python-sdk` (**DEPRECATED** — repository archived, community forks available)
- **Ruby**: Ruby gem available for Create API

## Embed SDK

Package: `@typeform/embed`

Embed modes:
- **Widget** (inline): `createWidget("formId", { container: document.getElementById("form"), hidden: { key: "value" } })`
- **Popup**: `createPopup("formId", { autoOpen: true })`
- **Slider**: `createSlider("formId")`
- **Popover**: `createPopover("formId")`
- **Sidetab**: `createSidetab("formId")`

Options: `hideHeaders`, `hideFooter`, `opacity`, `hidden` (hidden fields), `onSubmit` callback, `onReady` callback

---

## Create API

### Forms

#### Create a form
```
POST https://api.typeform.com/forms
```
**Request body** (JSON):
- `title` (string, required) — form title
- `type` (string) — form type: `quiz`, `classification`, `score`, `branching`
- `fields` (array) — form questions with properties, validations, attachments
- `settings` (object) — language, visibility, progress bar, branding options
- `theme` (object) — theme with `href` and `title`
- `workspace` (object) — workspace location
- `welcome_screens` (array) — initial screens
- `thankyou_screens` (array) — completion screens
- `logic` (array) — logic jump rules for conditional flow
- `hidden` (array) — hidden field variable names
- `variables` (object) — score and price tracking variables
- `meta` (object) — SEO metadata, tracking IDs

**Response**: The created form object with `id`, URL, all configuration, timestamps, workspace reference.

**Notes**:
- Images must pre-exist in your account (upload via Images API first)
- Third-party content injection is prohibited

#### Retrieve forms
```
GET https://api.typeform.com/forms
```

#### Retrieve a form
```
GET https://api.typeform.com/forms/{form_id}
```

#### Update a form (full replacement)
```
PUT https://api.typeform.com/forms/{form_id}
```

#### Update a form (partial)
```
PATCH https://api.typeform.com/forms/{form_id}
```

#### Delete a form
```
DELETE https://api.typeform.com/forms/{form_id}
```

#### Retrieve custom form messages
```
GET https://api.typeform.com/forms/{form_id}/messages
```

#### Update custom form messages
```
PUT https://api.typeform.com/forms/{form_id}/messages
```

### Workspaces

```
GET    https://api.typeform.com/workspaces          — list workspaces
POST   https://api.typeform.com/workspaces          — create workspace
GET    https://api.typeform.com/workspaces/{id}      — retrieve workspace
PATCH  https://api.typeform.com/workspaces/{id}      — update workspace
DELETE https://api.typeform.com/workspaces/{id}      — delete workspace
```

### Themes

```
GET    https://api.typeform.com/themes               — list themes
POST   https://api.typeform.com/themes               — create theme
GET    https://api.typeform.com/themes/{id}           — retrieve theme
PUT    https://api.typeform.com/themes/{id}           — update theme (full)
PATCH  https://api.typeform.com/themes/{id}           — update theme (partial)
DELETE https://api.typeform.com/themes/{id}           — delete theme
```

### Images

```
GET    https://api.typeform.com/images                — list images
POST   https://api.typeform.com/images                — upload image
GET    https://api.typeform.com/images/{id}            — retrieve image
DELETE https://api.typeform.com/images/{id}            — delete image
GET    https://api.typeform.com/images/{id}/background/{size}  — get background by size
GET    https://api.typeform.com/images/{id}/choice/{size}      — get choice image by size
```

### Translations

```
GET    https://api.typeform.com/forms/{form_id}/translations              — translation statuses
GET    https://api.typeform.com/forms/{form_id}/translations/{language}   — retrieve translation
PUT    https://api.typeform.com/forms/{form_id}/translations/{language}   — update translation
DELETE https://api.typeform.com/forms/{form_id}/translations/{language}   — delete translation
POST   https://api.typeform.com/forms/{form_id}/translations/{language}/auto — auto-translate
```

### Videos

```
POST   https://api.typeform.com/videos                — upload video file
```

---

## Responses API

### Retrieve responses
```
GET https://api.typeform.com/forms/{form_id}/responses
```

**Query parameters**:

| Parameter | Type | Description |
|---|---|---|
| `page_size` | integer | Max responses per page. Default: 25, Max: 1000 |
| `since` | string | ISO 8601 or Unix timestamp — responses submitted after this time |
| `until` | string | ISO 8601 or Unix timestamp — responses submitted before this time |
| `after` | string | Cursor token — responses after this token (exclusive). Incompatible with `sort` |
| `before` | string | Cursor token — responses before this token (exclusive). Incompatible with `sort` |
| `included_response_ids` | string | Comma-separated response IDs to include |
| `excluded_response_ids` | string | Comma-separated response IDs to exclude |
| `response_type` | array | Filter: `started`, `partial`, `completed` |
| `completed` | boolean | **Deprecated** — use `response_type` instead |
| `sort` | string | Format: `{fieldID},{asc\|desc}` |
| `query` | string | Full-text search across all answer fields and variables |
| `fields` | array | Show only these fields in responses |
| `answered_fields` | array | Only return responses containing these fields |

**Response (200)**:
```json
{
  "total_items": 150,
  "page_count": 2,
  "items": [
    {
      "response_id": "abc123",
      "submitted_at": "2024-01-15T10:30:00Z",
      "answers": [...],
      "variables": [...],
      "calculated": {...},
      "metadata": {...}
    }
  ]
}
```

### Delete responses
```
DELETE https://api.typeform.com/forms/{form_id}/responses
```

### File downloads
```
GET https://api.typeform.com/forms/{form_id}/responses/files  — download all uploaded files
GET https://api.typeform.com/forms/{form_id}/responses/{response_id}/fields/{field_id}/files/{filename}  — get specific file
```

### Audio/Video master files
```
POST https://api.typeform.com/forms/{form_id}/responses/{response_id}/audio/master  — request audio generation
GET  https://api.typeform.com/forms/{form_id}/responses/{response_id}/audio/master  — download audio master
POST https://api.typeform.com/forms/{form_id}/responses/{response_id}/video/master  — request video generation
GET  https://api.typeform.com/forms/{form_id}/responses/{response_id}/video/master  — download video master
```

---

## Webhooks API

### List webhooks
```
GET https://api.typeform.com/forms/{form_id}/webhooks
```

### Create or update webhook
```
PUT https://api.typeform.com/forms/{form_id}/webhooks/{tag}
```

**Request body**:
```json
{
  "url": "https://your-endpoint.com/webhook",
  "enabled": true
}
```

### Retrieve webhook
```
GET https://api.typeform.com/forms/{form_id}/webhooks/{tag}
```

### Delete webhook
```
DELETE https://api.typeform.com/forms/{form_id}/webhooks/{tag}
```

### Webhook behavior

- Fires on every new response submission
- Payload: JSON with full response data
- **Timeout**: 30 seconds — your endpoint must return 2XX within 30 seconds
- **Supports payload signing**: verify webhook authenticity via signature
- **Supports HTTP and HTTPS** URLs
- **Port numbers**: can be included in webhook URLs

### Retry policy

| Error code | Behavior |
|---|---|
| 404, 410 | No retries — webhook **disabled immediately** |
| 429, 408, 503, 423 | Retry every 2-3 minutes for up to 10 hours |
| Other failures | 5 retries with exponential backoff: 5 min → 10 min → 20 min → 1 hr → 2 hrs → 3 hrs → 4 hrs |

### Auto-disable conditions
- 100% failure rate within 24 hours with 300+ attempts
- 100% failure rate within 5 minutes with 100+ attempts

### Data retention
Responses sent via webhooks remain stored on Typeform servers and are accessible via the Responses API.
