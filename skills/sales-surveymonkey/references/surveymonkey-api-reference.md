<!-- Source: https://github.com/SurveyMonkey/public_api_docs -->
<!-- Source: https://api.surveymonkey.com/v3/docs -->

# SurveyMonkey API v3 Reference

## Overview

REST API. JSON responses. OAuth 2.0 authentication.

- **Base URL**: `https://api.surveymonkey.com/v3/`
- **EU Base URL**: `https://api.eu.surveymonkey.com/v3/`
- **Developer Portal (US)**: https://developer.surveymonkey.com/
- **Developer Portal (EU)**: https://developer.eu.surveymonkey.com/
- **Postman Collection**: https://documenter.getpostman.com/view/3967924/RW1Yq1Vq

The correct access URL varies by datacenter and is returned in the OAuth token exchange response under the `access_url` key.

## Authentication

### Private Apps (single account)
Use the access token generated during app registration in the developer portal Settings tab.

### Public Apps (multi-account — OAuth 2.0)

**Step 1 — Authorization Request**
Redirect user to:
```
https://api.surveymonkey.com/oauth/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&state={STATE}
```

**Step 2 — Authorization Code**
SurveyMonkey redirects back with a short-lived code (5-minute expiration).

**Step 3 — Token Exchange**
```
POST https://api.surveymonkey.com/oauth/token
Content-Type: application/x-www-form-urlencoded

client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&code={CODE}&redirect_uri={REDIRECT_URI}&grant_type=authorization_code
```

Response includes `access_token` and `access_url` (datacenter-specific base URL).

### Authorization Header
```
Authorization: bearer YOUR_ACCESS_TOKEN
```

Access tokens don't currently expire but may in the future. Users can revoke access (error code 1013).

## Rate Limits

| App Type | Per Minute | Per Day | Reset |
|---|---|---|---|
| Draft / Private | 120 | 500 | 12:00 AM GMT |
| Public (deployed) | Unlimited | Unlimited | — |

Enforcement begins after 3 violations exceeding 150% within 30 days.

**Response Headers:**
- `X-Ratelimit-App-Global-Minute-Limit`
- `X-Ratelimit-App-Global-Minute-Remaining`
- `X-Ratelimit-App-Global-Day-Limit`
- `X-Ratelimit-App-Global-Day-Remaining`

**Resource Limits:**
- Max page size: 1,000 resources
- Max survey size: 1,000 questions

## Scopes

| Scope | Required Plan |
|---|---|
| `surveys_read`, `surveys_write` | Any |
| `collectors_read`, `collectors_write` | Any |
| `contacts_read`, `contacts_write` | Any |
| `responses_read` | Any |
| `responses_read_detail` | Paid |
| `responses_write` | Paid |
| `webhooks_read`, `webhooks_write` | Any |
| `users_read` | Any |
| `groups_read` | Paid |
| `workgroups_*` | Paid |
| `roles_*` | Paid |

`responses_write` and `surveys_write` require SurveyMonkey approval for public apps.

## Pagination

Query parameters: `page=#` (1-based) and `per_page=#`

Response includes:
```json
{
  "per_page": 50,
  "total": 123,
  "page": 1,
  "data": [...],
  "links": {
    "self": "...",
    "prev": "...",
    "next": "...",
    "first": "...",
    "last": "..."
  }
}
```

## Data Types

- Integer (max 2,147,483,647)
- String
- String-ENUM
- Boolean
- Date string: `YYYY-MM-DDTHH:MM:SS+HH:MM`
- Phone number: `+1XXXYYYZZZZ`
- Hex string: `#HHH` or `#HHHHHH`
- Array, Object, Null

## Endpoints

### Surveys

| Method | Endpoint | Description |
|---|---|---|
| POST | `/surveys` | Create survey (blank, from template, or from existing survey) |
| GET | `/surveys` | List surveys (filter by title, date, folder, sort) |
| GET | `/surveys/{id}` | Get survey details |
| PATCH | `/surveys/{id}` | Update survey (title, nickname, language, etc.) |
| PUT | `/surveys/{id}` | Replace entire survey |
| DELETE | `/surveys/{id}` | Delete survey |
| GET | `/surveys/{id}/details` | Get survey with nested pages and questions |

**POST /surveys** body options:
- Blank: `title`, `nickname`, `language`, `buttons_text`, `custom_variables`, `footer`, `folder_id`, `quiz_options`
- From template: `title`, `from_template_id`
- From existing: `title`, `from_survey_id`
- Bulk: includes `pages[]` with nested `questions[]`

**GET /surveys** query params: `page`, `per_page`, `sort_by` (title, date_modified, num_responses), `title`, `start_modified_at`, `end_modified_at`, `folder_id`, `include` (shared_with, shared_by, owned, response_count)

### Pages

| Method | Endpoint | Description |
|---|---|---|
| POST | `/surveys/{id}/pages` | Create page |
| GET | `/surveys/{id}/pages` | List pages |
| GET | `/surveys/{id}/pages/{id}` | Get page |
| PATCH | `/surveys/{id}/pages/{id}` | Update page |
| DELETE | `/surveys/{id}/pages/{id}` | Delete page |

Page fields: `title`, `description`, `position`, `question_count`

### Questions

| Method | Endpoint | Description |
|---|---|---|
| POST | `/surveys/{id}/pages/{id}/questions` | Create question |
| GET | `/surveys/{id}/pages/{id}/questions` | List questions |
| GET | `/surveys/{id}/pages/{id}/questions/{id}` | Get question |
| PATCH | `/surveys/{id}/pages/{id}/questions/{id}` | Update question |
| DELETE | `/surveys/{id}/pages/{id}/questions/{id}` | Delete question |

### Collectors

| Method | Endpoint | Description |
|---|---|---|
| POST | `/surveys/{id}/collectors` | Create collector |
| GET | `/surveys/{id}/collectors` | List collectors |
| GET | `/collectors/{id}` | Get collector |
| PATCH | `/collectors/{id}` | Update collector (cannot change type) |
| DELETE | `/collectors/{id}` | Delete collector |

**Collector types**: `weblink`, `email`, `sms`, `popup_invitation`, `embedded_survey`, `popup_survey`

**Collector fields**: `type`, `name`, `thank_you_message`, `close_date`, `redirect_url`, `anonymous_type`, `allow_multiple_responses`, `password`, `sender_email`, `response_limit`

Popup-specific: `width`, `height`, `border_color`, `is_branding_enabled`, `headline`, `message`, `sample_rate`

### Messages (Email/SMS Collector)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/collectors/{id}/messages` | Create message |
| GET | `/collectors/{id}/messages` | List messages |
| GET | `/collectors/{id}/messages/{id}` | Get message |
| PATCH | `/collectors/{id}/messages/{id}` | Update message |
| DELETE | `/collectors/{id}/messages/{id}` | Delete message |
| POST | `/collectors/{id}/messages/{id}/send` | Send or schedule message |

**Message types**: `invite`, `reminder`, `thank_you`, `sms`

**Send**: POST with optional `scheduled_date` for deferred sending. Message status must be `not_sent`.

### Recipients

| Method | Endpoint | Description |
|---|---|---|
| POST | `/collectors/{id}/messages/{id}/recipients` | Add recipient |
| GET | `/collectors/{id}/messages/{id}/recipients` | List recipients |
| POST | `/collectors/{id}/messages/{id}/recipients/bulk` | Add multiple recipients |
| GET | `/collectors/{id}/recipients` | List all collector recipients |
| GET | `/collectors/{id}/recipients/{id}` | Get recipient |
| DELETE | `/collectors/{id}/recipients/{id}` | Delete recipient |

**Bulk add** accepts: `contact_ids`, `contact_list_ids`, or `contacts[]` array.
Response includes: `succeeded`, `invalids`, `existing`, `bounced`, `opted_out`, `duplicate` arrays.

**Duplicate handling**: `add` (default), `add_if_not_in_message`, `add_if_not_in_collector`

### Responses

| Method | Endpoint | Description |
|---|---|---|
| GET | `/surveys/{id}/responses` | List responses (metadata only) |
| POST | `/collectors/{id}/responses` | Create response |
| GET | `/surveys/{id}/responses/bulk` | Get expanded responses (scope: responses_read_detail) |
| GET | `/collectors/{id}/responses/bulk` | Get expanded responses by collector |
| GET | `/surveys/{id}/responses/{id}` | Get single response |
| GET | `/surveys/{id}/responses/{id}/details` | Get single response with answers |
| PATCH | `/surveys/{id}/responses/{id}` | Update response |
| PUT | `/surveys/{id}/responses/{id}` | Replace response |
| DELETE | `/surveys/{id}/responses/{id}` | Delete response |

**GET responses** query params: `page`, `per_page`, `status` (completed, partial, overquota, disqualified), `email`, `first_name`, `last_name`, `ip`, `start_created_at`, `end_created_at`, `start_modified_at`, `end_modified_at`, `total_time_min`, `total_time_max`, `sort_order`, `sort_by`

**Bulk responses** additional params: `simple` (boolean — includes question/answer text), `collector_ids`, `page_ids`, `question_ids`. Max 100 per page.

**Answer formats by question type:**
- Single/multiple choice: `choice_id`
- Matrix: `row_id` + `col_id` + `choice_id`
- Open-ended: `text`
- Matrix open-ended: `row_id` + `text`

**Response fields**: `survey_id`, `collector_id`, `recipient_id`, `total_time` (seconds), `custom_value`, `edit_url`, `analyze_url`, `ip_address`, `custom_variables`, `logic_path`, `metadata`, `response_status`, `collection_mode`, `date_created`, `date_modified`, `pages[]`

### Contacts & Contact Lists

| Method | Endpoint | Description |
|---|---|---|
| POST | `/contacts` | Create contact |
| GET | `/contacts` | List contacts |
| GET | `/contacts/{id}` | Get contact |
| PATCH | `/contacts/{id}` | Update contact |
| DELETE | `/contacts/{id}` | Delete contact |
| POST | `/contacts/bulk` | Create multiple contacts |
| POST | `/contact_lists` | Create contact list |
| GET | `/contact_lists` | List contact lists |
| GET | `/contact_lists/{id}` | Get contact list |
| PATCH | `/contact_lists/{id}` | Update contact list |
| DELETE | `/contact_lists/{id}` | Delete contact list |
| POST | `/contact_lists/{id}/copy` | Duplicate list |
| POST | `/contact_lists/{id}/merge` | Merge lists |
| POST | `/contact_lists/{id}/contacts` | Add contact to list |
| GET | `/contact_lists/{id}/contacts` | List contacts in list |
| POST | `/contact_lists/{id}/contacts/bulk` | Bulk add to list |

**Contact fields**: `email` (or `phone_number`), `first_name`, `last_name`, `custom_fields`

**Custom fields**: GET `/contact_fields` to list, PATCH `/contact_fields/{id}` to update labels.

### Webhooks

| Method | Endpoint | Description |
|---|---|---|
| POST | `/webhooks` | Create webhook |
| GET | `/webhooks` | List webhooks |
| GET | `/webhooks/{id}` | Get webhook |
| PATCH | `/webhooks/{id}` | Update webhook |
| DELETE | `/webhooks/{id}` | Delete webhook |

**Event types**: `response_completed`, `response_disqualified`, `response_updated`, `response_created`, `response_deleted`, `response_overquota`, `collector_created`, `collector_updated`, `collector_deleted`, `survey_created`, `survey_updated`, `survey_deleted`

**Setup**: `subscription_url` must be publicly accessible and return 2xx on HEAD request. SurveyMonkey verifies before registering.

### Supporting Resources

| Method | Endpoint | Description |
|---|---|---|
| GET | `/survey_categories` | List survey categories |
| GET | `/survey_templates` | List templates (filter by category, language) |
| GET | `/survey_languages` | List available languages |
| GET | `/users/me` | Get current user info |
| GET | `/groups` | List groups (paid plans) |
| GET | `/groups/{id}/members` | List group members |

## Error Codes

| Code | HTTP Status | Description |
|---|---|---|
| 1000-1004 | 400 | Bad Request — invalid input, headers, body |
| 1010-1013 | 401/403 | Authorization — missing/invalid/expired token, revoked access |
| 1014-1018 | 403 | Permission — insufficient scopes, plan requirements, quota limits |
| 1020 | 404 | Resource Not Found |
| 1025-1026 | 409 | Conflict — invalid settings, duplicate resource |
| 1030 | 413 | Entity Too Large (survey exceeds 1,000 questions) |
| 1040 | 429 | Rate Limit Exceeded |
| 1050-1054 | 500 | Server errors — internal error, service unavailable |

## Custom Response Headers

- `X-OAuth-Scopes-Available`: Scopes available to user's plan
- `X-OAuth-Scopes-Granted`: Scopes user granted to app
- Rate limit headers (see Rate Limits section)
