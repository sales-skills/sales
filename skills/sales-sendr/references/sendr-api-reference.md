<!-- Source: https://docs.sendr.io/ (OpenAPI 3.1.0 spec at https://api.sendr.io/openapi) -->

# Sendr API Reference

**Base URL:** `https://api.sendr.io`
**Spec version:** OpenAPI 3.1.0

## Authentication

Three methods supported:

1. **API Key** (recommended) — `X-API-Key` header. Generate from Sendr API Key settings.
2. **Bearer Token (JWT)** — `Authorization: Bearer <token>` header
3. **Session Cookie** — `sb-auth-auth-token.0` cookie

**Note:** API access requires Pro plan ($249/mo).

## Endpoints

### Auth

#### GET `/seat/me`
Verify API key validity. Returns user info.

**Response fields:** workspace ID, seat ID, role, email, name, workspace name.

---

### Sheets

#### GET `/api/v1/sheet`
List sheets with pagination.

**Query params:**
- `offset` — pagination offset
- `limit` — 20-1000
- Filter by user, date, name, campaign

#### GET `/api/v1/sheet/{id}`
Retrieve a specific sheet.

#### GET `/api/v1/sheet/{id}/column`
Get sheet columns with metadata.

**Response fields:** name, dataType, format, display order, pinning, sorting, enrichment status.

#### POST `/api/v1/sheet/{sheetId}/row`
Add a row to a sheet.

**Body:** key-value pairs (string, number, boolean, null).

---

### Campaigns

#### GET `/api/v1/campaigns`
List campaigns with pagination, sorting, search, status filtering.

**Status values:** `DRAFT`, `ACTIVE`, `PAUSED`

#### GET `/api/v1/campaigns/{campaignId}`
Get campaign details.

---

### Sendr Page (Personalized Landing Pages)

#### GET `/api/v1/page-template/list`
List all page templates.

#### GET `/api/v1/page-template/{id}/variables`
Get template variables.

**Response fields:** tag, example, label, fallback.

#### POST `/api/v1/enrichment/sendr-page`
Generate a personalized page.

**Body:**
- `templateId` — page template to use
- Variable values — key-value pairs matching template variables
- `screenshot` — URL for prospect's website screenshot (used as background)
- `gif` — boolean, whether to render a GIF preview
- `attributes` — additional metadata
- `webhook` — URL to receive completion notification

**Returns:** page URL, GIF URL (if requested), engagement tracking webhook URL.

---

### Dynamic Audio

#### POST `/api/v1/enrichment/dynamic-audio`
Queue audio generation with word replacement.

**Body:**
- Target words and replacement words
- Optional ElevenLabs voice ID
- Language code
- Webhook URL for completion notification

---

### Video

#### POST `/api/v1/enrichment/generate-video`
Queue video generation.

**Body:**
- Audio URL and video URL
- Word replacements
- Mode: `merge` (audio overlay) or `lipsync` (full generation)

---

### Webhooks

#### GET `/api/v1/webhook`
List workspace webhooks.

#### POST `/api/v1/webhook`
Create a webhook subscription.

**Body:** name, URL, events, attributes.

#### PATCH `/api/v1/webhook`
Update an existing webhook.

#### DELETE `/api/v1/webhook`
Delete a webhook.

#### POST `/api/v1/webhook/reveal-secret`
Retrieve the webhook signing secret.

#### POST `/api/v1/webhook/enabling`
Toggle webhook active/inactive status.

---

## Rate limits

Not publicly documented. Contact hello@sendr.io for rate limit details.

## SDKs

No official SDKs. Use the OpenAPI spec at `https://api.sendr.io/openapi` to generate clients.

## Support

- Email: hello@sendr.io
- Community: community.sendr.io
- Help center: help.sendr.io
