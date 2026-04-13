<!-- Source: https://developers.trustpilot.com/ -->

# Trustpilot API Reference

Base URL: `https://api.trustpilot.com/v1/`
Invitation API Base URL: `https://invitations-api.trustpilot.com/v1/`

## Authentication

### Public APIs
Pass API key as HTTP header: `apikey:{Client ID}`

### Private APIs (OAuth 2.0)
Access tokens expire after 100 hours. Refresh tokens expire after 30 days.
Pass as: `Authorization: Bearer {AccessToken}`

**Request Access Token:**
```
POST https://api.trustpilot.com/v1/oauth/oauth-business-users-for-applications/accesstoken
```
Use HTTP Basic authentication with API Key and Secret.

**Refresh Access Token:**
```
POST https://api.trustpilot.com/v1/oauth/oauth-business-users-for-applications/refresh
```
Payload: `grant_type=refresh_token` + valid refresh token

**Revoke Refresh Token:**
```
POST https://api.trustpilot.com/v1/oauth/oauth-business-users-for-applications/revoke
```

Supported grant types: Authorization Code, Implicit, Client Credentials, Password (deprecated — no MFA support).

Wait until current access token expires before requesting a new one to avoid HTTP 429.

---

## Service Reviews API

### Reply to a Review
`POST /v1/private/reviews/{reviewId}/reply`
Auth: Business user OAuth Token
Body: `authorBusinessUserId`, `message`

### Delete a Reply
`DELETE /v1/private/reviews/{reviewId}/reply`
Auth: Business user OAuth Token

### Add Tags to a Review
`PUT /v1/private/reviews/{reviewId}/tags`
Auth: Business user OAuth Token
Body: Array of `{group, value}` tag objects

### Remove a Tag
`DELETE /v1/private/reviews/{reviewId}/tags`
Auth: Business user OAuth Token
Params: `group` (required), `value` (required)

### Set Tags on Review
`POST /v1/private/reviews/{reviewId}/tags`
Auth: Business user OAuth Token
Body: Array of `{group, value}` tag objects

### Get Tags for a Review
`GET /v1/private/reviews/{reviewId}/tags`
Auth: Business user OAuth Token
Response: `{ tags: [...] }`

### Create Find Reviewer Request
`POST /v1/private/reviews/{reviewId}/find-reviewer`
Auth: Business user OAuth Token
Body: `message`, `skipNotificationEmailToBusinessUser`

### Get Latest Reviews by Language
`GET /v1/reviews/latest`
Auth: API Key
Params: `count` (required, integer), `language` (required, array), `filterUsersWithoutImages` (optional), `locale` (optional)

### Get Review's Web Links
`GET /v1/reviews/{reviewId}/web-links`
Auth: API Key
Params: `reviewId` (required), `locale` (required)

### Get Review's Likes
`GET /v1/reviews/{reviewId}/likes`
Auth: API Key
Response: `{ likes: [...] }` with consumer info

### Get a Review (Public)
`GET /v1/reviews/{reviewId}`
Auth: API Key
Response: stars, text, consumer, timestamps, verification status

### Get a Review (Private)
`GET /v1/private/reviews/{reviewId}`
Auth: Business user OAuth Token
Response: Public data plus referenceId, referralEmail, status, report data

---

## Business Units API

### Search Business Units
`GET /v1/business-units/search`
Auth: API Key
Params: `query` (required), `country` (optional), `page`, `perpage`

### Get Profile Details
`GET /v1/business-units/{businessUnitId}/profileinfo`
Auth: API Key
Response: email, phone, address, social media, claim status

### Get Web Links
`GET /v1/business-units/{businessUnitId}/web-links`
Auth: API Key
Params: `locale` (required)
Response: profile URL, evaluation URL, embed URL

### Get Profile/Logo/Header Images
`GET /v1/business-units/{businessUnitId}/images` (profile, sizes: 57x43, 118x89, 198x149)
`GET /v1/business-units/{businessUnitId}/images/logo` (optional: `locationId`)
`GET /v1/business-units/{businessUnitId}/images/header`
`GET /v1/business-units/{businessUnitId}/images/promotion-box`
Auth: API Key

### List Categories
`GET /v1/business-units/{businessUnitId}/categories`
Auth: API Key
Params: `country`, `locale`
Response: categories with rankings and relevance

### Get Reviews (Public, Paginated)
`GET /v1/business-units/{businessUnitId}/all-reviews`
Auth: API Key
Params: `pageToken`

### Get Reviews (Public)
`GET /v1/business-units/{businessUnitId}/reviews`
Auth: API Key
Params: `stars`, `language`, `internalLocationId`, `page`, `perPage`, `orderBy` (createdat.asc/desc, stars.asc/desc), `tagGroup`, `tagValue`, `responded`, `includeReportedReviews`
Max: 100,000 records

### Get Reviews (Private)
`GET /v1/private/business-units/{businessUnitId}/reviews`
Auth: Business user OAuth Token
Additional params: `startDateTime`, `endDateTime`, `source`, `username`, `referenceId`, `referralEmail`, `findReviewer`, `reported`
Response includes customer email, order ID, report data, tags

---

## Invitation API

Base URL: `https://invitations-api.trustpilot.com/v1/`

### Create Invitation(s)
`POST /private/business-units/{businessUnitId}/email-invitations`
Auth: Business user OAuth Token
Body: `senderEmail`, `consumerEmail`, `serviceReviewInvitation`, `productReviewInvitation`
Note: Use either `products` OR `productSkus`, not both

### Generate Service Review Invitation Link
`POST /private/business-units/{businessUnitId}/invitation-links`
Auth: Business user OAuth Token
Body: `locationId`, `referenceId`, `email`, `name`, `locale`, `tags`, `redirectUri`
Response: invitation ID and URL

### Get Invitation Templates
`GET /private/business-units/{businessUnitId}/templates`
Auth: Business user OAuth Token
Response: template list with IDs, names, locale, type

### Delete Invitation Data
`POST /private/business-units/{businessUnitId}/invitation-data/delete`
Auth: Business user OAuth Token
Body: `customerEmails` array OR `deleteOlderThan` timestamp (not both)
**Irreversible operation**

---

## Product Reviews API

### Product Review Summaries
`GET /v1/private/product-reviews/business-units/{businessUnitId}/summaries` (private, paginated)
`POST /v1/product-reviews/business-units/{businessUnitId}/batch-summaries` (public, multiple SKUs)
`GET /v1/product-reviews/business-units/{businessUnitId}` (public, single/multiple SKU)
`POST /v1/product-reviews/business-units/{businessUnitId}/attribute-summaries` (public, aggregated attributes)
`GET /v1/product-reviews/business-units/{businessUnitId}/imported-reviews-summaries` (public)

### Product Reviews
`GET /v1/product-reviews/business-units/{businessUnitId}/reviews` (public, filtered by SKU/language/stars)
`GET /v1/private/product-reviews/business-units/{businessUnitId}/reviews` (private, includes email/referenceId)
`GET /v1/private/product-reviews/{reviewId}` (single private review)
`GET /v1/product-reviews/business-units/{businessUnitId}/imported-reviews` (imported reviews)

### Conversations
`POST /v1/private/product-reviews/{reviewId}/create-conversation`
`POST /v1/private/conversations/{conversationId}/comments` (add comment)
`GET /v1/private/conversations/{conversationId}` (get with comments)
`POST /v1/private/conversations/{conversationId}/state` (set public/private)
`GET /v1/conversations/{conversationId}` (public)

### Product Review Invitation Links
`POST /v1/private/product-reviews/business-units/{businessUnitId}/invitation-links`

Common params: `page`, `perPage`, `sku`, `language`, `stars`, `locale`, `state`

---

## Consumer API

### Get a Consumer's Reviews
`GET /v1/consumers/{consumerId}/reviews`
Auth: API Key
Params: `stars`, `language`, `internalLocationId`, `businessUnitId`, `page`, `perPage`, `orderBy`, `includeReportedReviews`

---

## Resources API

### Get Supported Locales
`GET /v1/resources/metadata/locales`
Auth: API Key
Params: `translationLocale`

### Get All Countries
`GET /v1/resources/metadata/countries`
Auth: API Key
Params: `locale`

### Get Star Images
`GET /v1/resources/images/stars/{stars}`
Auth: API Key

### Get Logo Images
`GET /v1/resources/images/logos`
Auth: API Key

### Get Star Rating Text
`GET /v1/resources/strings/stars/{stars}`
Auth: API Key
Params: `locale` (required)

### Get Image Resources Navigation
`GET /v1/resources/images`
Auth: API Key
