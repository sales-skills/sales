<!-- Source: https://docs.vitally.io/en/collections/10410457-rest-api -->
<!-- Fetched: 2026-04-14 -->

# Vitally REST API Reference

## Overview

- **Auth**: Basic Authentication — `Authorization: Basic {base64_encoded_api_key}`
- **API Key location**: Settings (⚙️) → Integrations → REST API
- **US Base URL**: `https://{subdomain}.rest.vitally.io/resources/`
- **EU Base URL**: `https://rest.vitally-eu.io/resources/`
- **Rate limit**: 1000 req/min sliding window
- **Rate limit headers**: `RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`
- **Pagination**: Cursor-based — `limit` (max 100), `from` (cursor), `sortBy` (createdAt|updatedAt)
- **Response**: `{ "results": [...], "next": "cursor_or_null" }`
- **Error codes**: 400 (bad request), 401 (unauthorized), 429 (rate limited)
- **HTML support**: `<a>`, `<img>`, `<p>`, `<div>`, `<br>`, `<ul>`, `<ol>`, `<li>`, `<b>`, `<u>`, `<i>`, `<strong>`, `<em>`, `<code>`

Replace `{subdomain}` with your Vitally subdomain from your login URL (`https://yoursubdomain.vitally.io`).

---

## Organizations

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's unique ID |
| name | string | Yes | Organization name |
| traits | object | Yes | Key-value pairs (mrr, nextRenewalDate, churnedAt, trialEndDate via traits) |
| healthScore | number | No | Composite health score |
| npsScore | number | No | NPS score (-100 to 100) |
| usersCount | number | No | Count of users |
| accountsCount | number | No | Count of accounts |
| organizationOwnerId | string | No | Owner admin ID |
| segments | array | No | Segment memberships |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/organizations` | Paginated list |
| GET | `/resources/organizations/:id` | Accepts Vitally ID or externalId |
| POST | `/resources/organizations` | Required: externalId, name |
| PUT | `/resources/organizations/:id` | Body: name, traits (merge) |
| DELETE | `/resources/organizations/:id` | ⚠️ Permanently destroys record and all exclusive data |

---

## Accounts

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | No | Your system's unique ID |
| name | string | No | Account name |
| traits | object | Yes | Key-value pairs |
| organizationId | string | Yes | Parent organization ID |
| accountOwnerId | string | Limited | Can be set to null |
| mrr | number | Via traits | Monthly recurring revenue |
| healthScore | number | No | Health score (0-10) |
| npsScore | number | No | Account NPS (-100 to 100) |
| status | string | No | active, churned, activeOrChurned |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/accounts` | Query: limit, from, status |
| GET | `/resources/organizations/:orgId/accounts` | Accounts for an org |
| GET | `/resources/accounts/:id` | Accepts Vitally ID or externalId |
| GET | `/resources/accounts/:id/healthScores` | Health score breakdown |
| POST | `/resources/accounts` | Required: externalId, name |
| PUT | `/resources/accounts/:id` | Body: name, traits, organizationId |
| DELETE | `/resources/accounts/:id` | ⚠️ Permanently destroys record |

---

## Users

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's unique ID |
| name | string | Yes | User name |
| email | string | Yes | User email |
| avatar | string | Yes | Avatar URL |
| traits | object | Yes | Key-value pairs |
| lastSeenTimestamp | datetime | No | Last active in product |
| npsLastScore | number | No | Last NPS score (0-10) |
| npsLastFeedback | string | No | Last NPS text feedback |
| unsubscribedFromConversations | boolean | Yes | Opt-out from emails |
| segments | array | In-app | Segment memberships |
| accounts | array | No | Associated accounts |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/users` | Paginated list |
| GET | `/resources/accounts/:accountId/users` | Users for an account |
| GET | `/resources/organizations/:orgId/users` | Users for an org |
| GET | `/resources/users/:id` | Accepts Vitally ID or externalId |
| GET | `/resources/users/search` | Query: externalId, email, or emailSubdomain (exactly one required) |
| POST | `/resources/users` | Required: externalId + (accountIds OR organizationIds) |
| PUT | `/resources/users/:id` | Body: name, email, traits, accountIds, etc. |
| DELETE | `/resources/users/:id` | Optional: `deleteOn` query param for scheduled deletion |

---

## Admins

### Object

| Attribute | Type | Description |
|---|---|---|
| id | string | Vitally's unique ID |
| name | string | Admin full name |
| email | string | Admin email |
| licenseStatus | string | active, deactivated, or auto-created |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/admins/search` | Required query: email |

---

## Notes

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's unique ID |
| note | string | Yes | Required. Body content (HTML allowed) |
| noteDate | string | Yes | Required. Creation datetime |
| subject | string | Yes | Title of the note |
| authorId | string | Yes | Admin who created it |
| categoryId | string | Yes | Note Category ID |
| tags | array | Yes | String tags (⚠️ must include ALL tags on update or they're removed) |
| traits | object | Yes | Custom traits (merge on update, null to delete) |
| source | string | No | Integration name or null |

### Template Variables

Insert trait values in note body:
- Organization notes: `{{organization.traits.yourTraitKey}}`
- Account notes: `{{account.traits.yourTraitKey}}`

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/notes` | Query: limit, from, archived, source |
| GET | `/resources/accounts/:accountId/notes` | Notes for an account |
| GET | `/resources/organizations/:orgId/notes` | Notes for an org |
| GET | `/resources/notes/:id` | Optional: `source` query for externalId lookup |
| POST | `/resources/notes` | Required: accountId (or orgId), note, noteDate |
| PUT | `/resources/notes/:id` | Optional: `source` query for externalId lookup |
| DELETE | `/resources/notes/:id` | By Vitally ID only |
| GET | `/resources/noteCategories` | List all note categories |

---

## Tasks

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's unique ID |
| name | string | Yes | Required. Task title |
| description | string | Yes | HTML allowed |
| accountId | string | Yes | Required. Associated account |
| assignedToId | string | Yes | Admin assigned to task |
| completedAt | datetime | Yes | Completion timestamp |
| completedById | string | Yes | Admin who completed |
| dueDate | datetime | Yes | Due date |
| categoryId | string | Yes | Task Category ID |
| tags | array | Yes | String tags |
| traits | object | Yes | Custom traits |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/tasks` | Query: limit, from, archived, source |
| GET | `/resources/accounts/:accountId/tasks` | Tasks for an account |
| GET | `/resources/organizations/:orgId/tasks` | Tasks for an org |
| GET | `/resources/tasks/:id` | Optional: `source` for externalId lookup |
| POST | `/resources/tasks` | Required: name, accountId (or orgId). Unique on externalId. |
| PUT | `/resources/tasks/:id` | Optional: `source` for externalId lookup |
| DELETE | `/resources/tasks/:id` | By Vitally ID only |
| GET | `/resources/taskCategories` | List all task categories |

---

## Projects

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| name | string | Yes | Project name |
| accountId | string | Create only | Associated account |
| organizationId | string | Create only | Associated org |
| templateId | string | Create only | Source template ID |
| targetStartDate | string | Yes | Planned start date |
| targetCompletionDate | string | Yes | Planned completion date |
| actualStartDate | datetime | In-app | When work started |
| actualCompletionDate | datetime | In-app | When work finished |
| durationInDays | number | No | Days between start and completion/now |
| ownedByVitallyUserId | string | Yes | Assigned admin |
| projectCategoryId | string | Yes | Category ID |
| projectStatusId | string | Yes | Status ID (active/inactive/complete) |
| traits | object | Yes | Custom traits |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/projects` | Query: limit, from, archived |
| GET | `/resources/accounts/:accountId/projects` | Projects for account |
| GET | `/resources/organizations/:orgId/projects` | Projects for org |
| GET | `/resources/projects/:id` | Single project |
| POST | `/resources/projects` | Required: templateId + (accountId OR orgId) |
| PUT | `/resources/projects/:id` | Body: name, dates, status, owner, traits |
| DELETE | `/resources/projects/:id` | Delete project |

### Project Templates & Categories

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/projectTemplates` | Optional: `categoryId` filter |
| GET | `/resources/projectCategories` | List all categories |

---

## Conversations

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's unique ID |
| subject | string | Yes | Required. Conversation subject |
| messages | array | Yes | Required. Array of Message objects (can be empty `[]`) |
| traits | object | Yes | Custom traits |
| status | string | No | Open/Closed |
| rating | string | No | Satisfied/Unsatisfied/Neutral |

⚠️ **Conversations API does NOT send messages.** It creates/updates records as reference points from external tools.

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/conversations` | Paginated list (no messages included) |
| GET | `/resources/accounts/:accountId/conversations` | For an account |
| GET | `/resources/organizations/:orgId/conversations` | For an org |
| GET | `/resources/conversations/:id` | Includes messages |
| POST | `/resources/conversations` | Required: subject, messages |
| PUT | `/resources/conversations/:id` | Update subject, add messages |
| DELETE | `/resources/conversations/:id` | Delete conversation |

---

## Messages

### Object

| Attribute | Type | Description |
|---|---|---|
| id | string | Vitally's unique ID |
| type | string | "inbound" or "outbound" (inferred from sender) |
| externalId | string | Your system's ID |
| message | string | Required. HTML content |
| from | Participant | Required. `{ type: "admin"|"user", id: "..." }` |
| to | Participant[] | Required. Array of participants |
| cc | Participant[] | Optional |
| bcc | Participant[] | Optional |
| timestamp | string | ISO 8601 send time |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| POST | `/resources/conversations/:convId/messages` | Required: externalId, message, from, to |
| GET | `/resources/messages/:id` | Accepts Vitally ID or externalId |
| DELETE | `/resources/messages/:id` | By Vitally ID only |

---

## Meetings

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's ID |
| title | string | Yes | Required. Meeting title |
| participants | array | Via endpoints | Required on create. Participant objects |
| startDateTime | ISO 8601 | Yes | Meeting start |
| endDateTime | ISO 8601 | Yes | Meeting end |
| summary | string | Yes | AI or manual summary |
| keyPoints | array | Yes | Array of key point strings |
| riskAssessment | string | Yes | Risk assessment value |
| recordingUrl | string | Yes | URL to recording |
| conferenceSolution | string | No | Platform (Zoom, Google Meet) |
| traits | object | Yes | Custom traits |

### Participant Object

- Identifier (exactly one): `userId` (customer externalId), `vitallyUserId` (admin ID), or `email`
- `type`: "organizer" or "attendee" (required)
- `responseStatus`: needsAction, accepted, tentative, declined

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/meetings` | Query: limit, from, archived, sortBy |
| GET | `/resources/accounts/:accountId/meetings` | For an account |
| GET | `/resources/organizations/:orgId/meetings` | For an org |
| GET | `/resources/meetings/:id` | Also returns archived meetings |
| POST | `/resources/meetings` | Required: title, participants (≥1 linked to account/org) |
| PUT | `/resources/meetings/:id` | 400 if archived |
| DELETE | `/resources/meetings/:id` | Delete meeting |
| POST | `/resources/meetings/:id/participants` | Add participant |
| DELETE | `/resources/meetings/:id/participants/:participantId` | Remove participant |

### Transcripts

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/meetingTranscripts` | List all transcripts |
| GET | `/resources/meetingTranscripts/:id` | By transcript ID |
| GET | `/resources/meetings/:id/transcript` | By meeting ID |
| POST | `/resources/meetings/:id/transcript` | Create/replace. Body: transcript array of monologue objects |

Transcript monologue format:
```json
{
  "speaker": { "externalId": "required", "email": "optional", "name": "optional" },
  "sentences": [
    { "text": "string", "startTime": 0, "endTime": 5000 }
  ]
}
```

---

## NPS Responses

### Object

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Create only | Your system's ID |
| userId | string | Yes | Required. Vitally User ID |
| score | number | Yes | Required. 0-10 |
| feedback | string | Yes | Text feedback |
| respondedAt | datetime | Yes | Response datetime |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/npsResponses` | Query: target (accounts\|organization), limit, from |
| GET | `/resources/organizations/:orgId/npsResponses` | For an org |
| GET | `/resources/accounts/:accountId/npsResponses` | For an account |
| GET | `/resources/npsResponses/:id` | Single response |
| POST | `/resources/npsResponses` | Required: userId, score |
| PUT | `/resources/npsResponses/:id` | Required: userId, respondedAt, score |
| DELETE | `/resources/npsResponses/:id` | Delete response |

---

## Custom Surveys

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/surveys/:surveyId/responses` | Paginated survey responses |
| GET | `/resources/surveyResponses/:responseId` | Single response |
| GET | `/resources/surveyQuestions/:questionId` | Question details (id, title, body, type, isRequired) |

---

## Custom Traits (Fields)

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/customFields` | All traits, alphabetical |
| GET | `/resources/customFields?model={model}` | By model: users, accounts, organizations, customObjects, tasks, notes, projects, conversations, team |
| GET | `/resources/customFields?model=customObjects&customObjectId=X` | For specific custom object |

### Response

```json
[
  {
    "label": "Next step",
    "type": "textarea",
    "createdAt": "2020-12-11T20:16:27.370Z",
    "path": "vitally.custom.nextSteps"
  }
]
```

---

## Custom Objects

### Custom Object Definition

| Attribute | Description |
|---|---|
| id | Vitally's unique ID |
| name | Object name |
| label | Display label |
| writeMode | writable (admins), writableByAll, readonly |
| customFields | Array of field definitions |

### Custom Object Instance

| Attribute | Type | Editable | Description |
|---|---|---|---|
| id | string | No | Vitally's unique ID |
| externalId | string | Yes | Your system's ID |
| name | string | Yes | Required. Instance name |
| customObjectId | string | Create only | Parent custom object |
| customerId | string | Yes | Associated account ID |
| organizationId | string | Yes | Associated org ID |
| traits | object | Yes | Custom fields |
| ownedByVitallyUserId | string | Create only | Owner admin |

### Endpoints

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/resources/customObjects` | List all custom objects |
| GET | `/resources/customObjects/:id` | Single custom object |
| POST | `/resources/customObjects` | Required: name, label, writeMode |
| PUT | `/resources/customObjects/:id` | Update definition |
| GET | `/resources/customObjects/:coId/instances` | List instances |
| GET | `/resources/customObjects/:coId/instances/search` | Search by: id, externalId, customerId, organizationId, customFieldId+customFieldValue |
| POST | `/resources/customObjects/:coId/instances` | Required: name + (customerId OR organizationId) |
| PUT | `/resources/customObjects/:coId/instances/:instanceId` | Update instance |
| DELETE | `/resources/customObjects/:coId/instances/:instanceId` | Delete instance |

---

## Bulk Operations (via Postman)

Vitally documents bulk operations through Postman:

| Operation | Endpoint pattern | Notes |
|---|---|---|
| Bulk POST | Standard POST endpoints | Use Postman Collection Runner with CSV/JSON data files |
| Bulk PUT | Standard PUT endpoints | Use Postman Collection Runner |
| Bulk DELETE | Standard DELETE endpoints | Use Postman Collection Runner |

See Vitally Help Center articles for Postman collection setup:
- Bulk POST: https://docs.vitally.io/en/articles/13146095-rest-api-bulk-post-requests-through-postman
- Bulk PUT: https://docs.vitally.io/en/articles/13172502-rest-api-bulk-put-requests-through-postman
- Bulk DELETE: https://docs.vitally.io/en/articles/13172803-rest-api-bulk-delete-requests-through-postman
