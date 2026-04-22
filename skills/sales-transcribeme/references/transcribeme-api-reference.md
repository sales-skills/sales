<!-- Source: https://api-docs.transcribeme.com/en/latest/index.html -->
<!-- Source: https://github.com/TranscribeMe/Docs -->

# TranscribeMe REST API Reference

## Introduction

Once you request an API key (via https://api-docs.transcribeme.com/en/latest/quickstarts/3_api_request.html), you will receive your own, unique API key and client secret. The key:

1. Uniquely identifies you.
2. Allows you to generate a token that will give you access to upload recordings, create transcription orders and retrieve output.
3. Should be kept private and should not be shared.
4. The API key should be passed in the API calls as a custom header called "X-Api-Key".

**Base URL:** `https://rest-api.transcribeme.com/api/v1/`

## Authentication

API authentication is achieved via a bearer token which identifies a single user. Access token should be passed in the API calls as an authorization header parameter called "Bearer", which is typically used like `Bearer {YOUR TOKEN}`.

Values needed:
1. **client_id** (X-Api-Key) — provided by TranscribeMe
2. **client_secret** — provided by TranscribeMe
3. **username** — email of the portal account
4. **password** or **applicationtoken**

### Initial authentication (password grant)

```
POST https://rest-api.transcribeme.com/api/v1/token

HEADERS:
  Content-Type: application/x-www-form-urlencoded
  X-Api-Key: {X-Api-Key}

REQUEST:
  grant_type: password
  client_id: {X-Api-Key}
  client_secret: {CLIENT APP SECRET}
  username: {USER NAME}
  password: {PASSWORD}

RESPONSE (application/json):
  {
    "access_token": "{YOUR TOKEN}",
    "token_type": "bearer",
    "expires_in": 35999,
    "refresh_token": "{YOUR REFRESH TOKEN}",
    "userName": "{USER EMAIL}",
    "userId": "{USER ID}",
    "firstName": "{USER FIRST NAME}",
    "lastName": "{USER LAST NAME}",
    "roles": "{USER ROLES LIST COMMA SEPARATED}",
    ".issued": "{ISSUE DATE}",
    ".expires": "{EXPIRES DATE}"
  }
```

### Regenerate application token

Use `grant_type=applicationtoken` for long-running integrations (preferred over password). Reasons:
1. Password can be changed on UI, breaking all API auth
2. Passwords have expiry policies

```
POST https://rest-api.transcribeme.com/api/v1/applications/tokens/regenerate

HEADERS:
  Content-Type: application/x-www-form-urlencoded
  Authorization: Bearer {YOUR TOKEN}
  X-Api-Key: {X-Api-Key}

REQUEST:
  client_id={X-Api-Key}
```

Returns an `application_token` value for use with:

```
POST https://rest-api.transcribeme.com/api/v1/token

HEADERS:
  Content-Type: application/x-www-form-urlencoded
  X-Api-Key: {X-Api-Key}

REQUEST:
  grant_type=applicationtoken
  authtoken={application_token}
  client_id={X-Api-Key}
  client_secret={client_secret}
```

### Refresh token

Access token lifetime is 1 hour. Refresh with:

```
POST https://rest-api.transcribeme.com/api/v1/token

HEADERS:
  Content-Type: application/x-www-form-urlencoded
  X-Api-Key: {X-Api-Key}

REQUEST:
  grant_type=refresh_token
  refresh_token={refresh_token}
  client_id={X-Api-Key}
  client_secret={client_secret}
```

### External token (OAuth2)

Supports Facebook and Google providers:

```
POST https://rest-api.transcribeme.com/api/v1/token

HEADERS:
  Content-Type: application/x-www-form-urlencoded
  X-Api-Key: {X-Api-Key}

REQUEST:
  grant_type=externaltoken
  authtoken=[EXTERNAL TOKEN]
  provider=[PROVIDER NAME]
  role=[USER ROLE]
  client_id={X-Api-Key}
  client_secret={client_secret}
```

The external auth token should allow access to user profile information, including email.

### Error formats

**Authentication errors** (RFC 6749):
```json
{
  "error": "invalid_client",
  "error_description": "Invalid client secret"
}
```

**Regular errors:**
```json
{
  "StatusCode": 400,
  "Messages": ["Some error message goes here", "Another error message goes here"]
}
```

## Workflow — 5 Steps

### Step 1: File Upload

**Preferred method — chunked async upload:**

Each chunk should be exactly 5MB (only the last chunk can be less).

1. Get upload URL:
```
GET https://rest-api.transcribeme.com/api/v1/uploads/url?fileName={filename.mp3}&isAsync=true
```
Returns URL endpoint with `uploadId` and `recordingId` ({URL1}).

2. Upload each chunk:
```
POST {URL1}?uploadId={UPLOADID}&recordingId={RECORDINGID}&chunkNumber=0

Body: file chunk (field name: "file")
```
Repeat for each chunk with sequential chunkNumber (0, 1, 2, etc.).

3. Commit upload:
```
POST https://rest-api.transcribeme.com/api/v1/uploads/async/commit?uploadId={uploadId}&recordingId={recordingId}
```

**Alternative — simple upload (being deprecated):**
```
POST https://rest-api.transcribeme.com/api/v1/recordings/upload

Content-Type: multipart/form-data
Body: file field with audio file
```

**Alternative — remote URL upload:**
```
POST https://rest-api.transcribeme.com/api/v1/recordings/remote

REQUEST:
  {
    "url": "https://www.example.com/myfile.mp3"
  }
```
Note: If using URL upload, add logic to check recording status — it's not immediate.

All methods return a `recordingId`.

### Step 2: Create Order

```
POST https://rest-api.transcribeme.com/api/v1/orders

REQUEST (application/json):
  {
    "id": "",
    "recordings": ["{recordingID}"]
  }
```
Returns an Order JSON object.

Retrieve existing order:
```
GET https://rest-api.transcribeme.com/api/v1/orders/{orderId}
```

### Step 3: Update Settings

Retrieve available option values:
```
GET /transcription/types          — transcription tiers
GET /transcription/speakers       — speaker count options
GET /transcription/outputgroups   — output format options
GET /transcription/turnaround     — turnaround options
GET /dictionaries/languages       — language list
GET /dictionaries/languages/accents?languageId={languageId}  — accents for a language
GET /transcription/domains        — domain specialties (legal, medical, etc.)
```

Apply settings to recording:
```
POST https://rest-api.transcribeme.com/api/v1/orders/{orderId}/recordings/edit

REQUEST (application/json):
  [
    {
      "id": "{recordingID}",
      "settings": {
        "language": "{languageId}",
        "accent": "{accentID}",
        "type": {type},
        "domain": {domain},
        "output": {output},
        "turnaround": {turnaround},
        "speakers": {speakers},
        "isNoisyAudio": false,
        "isHeavyAccent": false
      }
    }
  ]
```

**Set currency (optional):**
```
GET /transcription/currencies     — list available currencies
POST /orders/{orderId}/currency   — apply currency
REQUEST: { "id": "sample string 1" }
```

**Apply promo code (MUST be before placing order):**
```
POST https://rest-api.transcribeme.com/api/v1/orders/{orderID}/promocode

REQUEST (application/json):
  {
    "code": "YOUR_PROMO_CODE"
  }
```

### Step 4: Place Order

**IMPORTANT:** If you have a promo code, enter it BEFORE placing the order.

```
POST https://rest-api.transcribeme.com/api/v1/orders/{orderID}/place

REQUEST (application/json):
  [
    {
      "billingType": 0
    }
  ]
```

Check order status:
```
GET https://rest-api.transcribeme.com/api/v1/recordings/{recordingId}/status
```

List available statuses:
```
GET https://rest-api.transcribeme.com/api/v1/dictionaries/recordingstatuses
```

### Step 5: Get Results

**As JSON:**
```
GET https://rest-api.transcribeme.com/api/v1/recordings/{recordingId}/transcription
```

**Download file:**
```
POST https://rest-api.transcribeme.com/api/v1/recordings/download

REQUEST (application/json):
  {
    "recordings": [
      {
        "id": "{recordingId}",
        "ownerId": "{userId}"
      }
    ],
    "output": {output},
    "highlightedOnly": false,
    "removeStrikeout": false
  }
```

## Billing Endpoints

**Get billing address:**
```
GET https://rest-api.transcribeme.com/api/v1/billing/address
```

**Update billing address:**
```
POST https://rest-api.transcribeme.com/api/v1/billing/address

REQUEST (application/json):
  {
    "firstName": "{firstName}",
    "lastName": "{lastName}",
    "email": "{email}",
    "address1": "{address1}",
    "address2": null,
    "country": { "id": "{country}", "name": "{countryName}" },
    "state": { "id": "{stateId}", "name": "{stateName}" },
    "city": "{city}",
    "zip": "{zip}"
  }
```

**Get credit card info:**
```
GET https://rest-api.transcribeme.com/api/v1/billing/card
```

**Payment via BrainTree:**
Credit card management requires BrainTree API/SDK (https://developers.braintreepayments.com/start/overview).

Get client token:
```
GET https://rest-api.transcribeme.com/api/v1/billing/gateway/client-token
```

Send payment method nonce:
```
POST https://rest-api.transcribeme.com/api/v1/billing/card

REQUEST (application/json):
  {
    "token": "{gatewayToken}"
  }
```

## SDKs

- **.NET SDK**: https://github.com/TranscribeMe/TranscribeMe-SDK-dotnet
- **Node.js SDK**: https://github.com/TranscribeMe/NodeJS-SDK
- **Ruby wrapper** (third-party): https://github.com/tuttinator/transcribeme
