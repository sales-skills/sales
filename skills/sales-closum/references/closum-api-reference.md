# Closum API Reference

> **Documentation status: INCOMPLETE.** The official Postman collection did not render, and the GitHub repo (Closum/closum-api) contains only Slate scaffolding. Only 3 endpoints are confirmed. All gaps are flagged below for manual review.

## Overview

- **Platform:** Closum — omnichannel marketing automation (email, SMS, WhatsApp, Telegram, Web Push)
- **Base URL:** `https://api.closum.com/api`
- **Authentication:** Bearer token (`Authorization: Bearer {token}`)
- **Official docs:** [developers.closum.com](https://developers.closum.com) (redirects to Postman collection at `documenter.getpostman.com/view/3943255/Uz5CNduc`)
- **GitHub:** [github.com/Closum/closum-api](https://github.com/Closum/closum-api) (Slate-based docs, legacy — README is scaffolding only)
- **Language bindings mentioned:** Shell, Ruby, Python

## Authentication

| Detail | Value |
|---|---|
| Method | Bearer token |
| Header | `Authorization: Bearer {your-api-key}` |
| Required headers | `Accept: application/json`, `Content-Type: application/json` |
| Key generation | Settings → Application → Integrations → API Keys → Configure → Generate API Key |

Example request headers:

```
Authorization: Bearer {your-api-key}
Accept: application/json
Content-Type: application/json
```

## Known Endpoints

> **GAP:** Only 3 endpoints are confirmed. The full endpoint list is unknown.

### Audience Lists

#### Get All Audience Lists

```
GET /audience-list
```

Retrieve all audience list records in your company.

**GAP:** Request parameters, response schema, and pagination behavior are undocumented.

---

### Contact Lifecycle Stages

#### Get All Contact Lifecycle Stages

```
GET /contact-lifecycle-stage/
```

Retrieve all contact lifecycle stages.

**GAP:** Request parameters, response schema, and pagination behavior are undocumented.

---

### Leads

#### Add Lead to Audience List

```
POST /lead-audience-list
```

Add a lead to an audience list.

**GAP:** Request body schema, required fields, and response format are undocumented.

---

## Gaps Requiring Manual Review

The following areas have no confirmed documentation. These are expected to exist based on the platform's feature set but cannot be verified from available sources.

### Missing endpoint categories

- **Campaign management** — creating, scheduling, sending, and reporting on campaigns (email, SMS, WhatsApp, Telegram, Web Push)
- **SMS / WhatsApp / Telegram API** — no channel-specific sending or template endpoints documented
- **Web Push** — no push notification endpoints documented
- **Contact CRUD** — no endpoints for creating, reading, updating, or deleting individual contacts (likely exist given the lead endpoint)
- **Automation / Workflows** — no endpoints for creating or triggering automation workflows
- **Analytics / Reporting** — no endpoints for retrieving campaign metrics or engagement data
- **Templates** — no endpoints for managing email or message templates
- **Tags / Segments** — no endpoints for managing contact tags or segments

### Missing technical details

- **Rate limits** — unknown; no documented throttling or rate limit headers
- **Pagination** — format unknown (offset-based, cursor-based, or page-based not specified)
- **Error response format** — unknown; no error codes or error body schema documented
- **Webhook events / setup** — no webhook configuration or event types documented
- **Request/response examples** — no sample payloads available for any endpoint
- **API versioning** — unknown whether the API is versioned

### Recommended next steps

1. Contact Closum support to request current API documentation
2. Inspect the Postman collection directly at `documenter.getpostman.com/view/3943255/Uz5CNduc` (may require Postman app)
3. Check if the platform exposes an OpenAPI/Swagger spec at common paths (`/api/docs`, `/api/swagger.json`, `/api/openapi.json`)
4. Test authenticated requests against likely endpoints (`/contact`, `/campaign`, `/template`, `/webhook`) to discover undocumented routes
