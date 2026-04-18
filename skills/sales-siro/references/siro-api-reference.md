<!-- Source: https://docs.siro.ai/getting-started -->

# Siro API Reference

## Authentication & Base URLs

**Main API Base URL:**
```
https://functions.siro.ai/api-externalApi/v1
```

**Alternative API Base URL (for recordings/entities):**
```
https://api.siro.ai
```

**Authentication Methods:**
- Organization API Token: `Authorization: Bearer <token>` header
- OAuth Access Token: `x-siro-auth-token: <token>` header

---

## Core Endpoints

### 1. Sync Engagements
**Method:** `PUT`
**Endpoint:** `/v1/integrations/sync/engagements`
**Authentication:** Organization API Token

**Required Fields:**
- `externalId` (string)
- `startTime` (ISO 8601)
- `endTime` (ISO 8601)
- `subject` (string)
- `engagementType.activityType` (MEETING, CALL, APPOINTMENT, EMAIL, TEXT, EVENT)
- `engagementUsers` (array)

**Optional Fields:**
- `account.externalId`
- `opportunity.externalId`

---

### 2. Sync Opportunities
**Method:** `PUT`
**Endpoint:** `/v1/integrations/sync/opportunities`
**Authentication:** Organization API Token

**Required Fields:**
- `externalId` (string)
- `name` (string)

**Optional Fields:**
- `amount` (number)
- `closedAt` (ISO 8601)
- `disposition` (WON, LOST, etc.)
- `account.externalId`
- `opportunityUsers` (array)

---

### 3. Get Engagement Details
**Method:** `GET`
**Endpoint:** `/v1/integrations/engagements/{id}`
**Authentication:** Organization API Token

**Response Fields:**
- `id`, `externalId`, `recordingId`, `engagementType`, `opportunityId`, `accountId`

---

### 4. Get Recording Details
**Method:** `GET`
**Endpoint:** `/v1/core/recordings/{recordingId}`
**Base URL:** `https://api.siro.ai`
**Authentication:** OAuth Access Token

**Query Parameters:**
- `showSummary` (boolean, default: false)
- `showEntityExtractions` (boolean, default: false)

**Response Includes:**
- `summary` (concatenated LLM summary)
- `entityExtractions` (array with CRM field mappings)

---

### 5. Get Entity Extractions
**Method:** `GET`
**Endpoint:** `/v1/core/entities/extractions/{recordingId}`
**Base URL:** `https://api.siro.ai`
**Authentication:** OAuth Access Token

**Response:** Array of extraction objects with `name`, `value`, `mappings`

---

### 6. Get Recording Summaries
**Method:** `GET`
**Endpoint:** `/v1/core/recordings/{recordingId}/summaries`
**Authentication:** Organization API Token

**Response Fields:** `id`, `name`, `content`

---

## OAuth Endpoints

### Create OAuth App
**Method:** `POST`
**Endpoint:** `/v1/core/oauth/apps`
**Required Fields:** `appName`, `owner` (user-id), `organizationId`

### Generate OAuth Token
**Method:** `POST`
**Endpoint:** `/v1/core/oauth/apps/{clientId}/access-token`
**Required Fields:** `clientSecret`, `userId`, `scope: "read"`
**Token Lifespan:** 16 hours

---

## Webhook Events

**Supported Event Types:**
- `integrations.recordingProcessed` — fired when recording processing completes
- `integrations.recordingLinked` — fired when recording links to CRM record

**Payload Structure:**
```json
{
  "recordingId": "rec-abc-def",
  "siroUserId": "siro-user-123",
  "recordingProcessed": boolean,
  "recordingLinked": boolean,
  "eventType": "string",
  "crm": {
    "engagement": { "externalId": "string" },
    "opportunity": { "externalId": "string" },
    "account": { "externalId": "string" }
  }
}
```

**Webhook Headers for Verification:**
- `svix-id` — unique message identifier
- `svix-timestamp` — epoch seconds
- `svix-signature` — base64-encoded signature

---

## Deep Linking Format

```
siro://record?appointmentId={external-id}&title={customer-name}&opportunityId={opp-external-id}
```
