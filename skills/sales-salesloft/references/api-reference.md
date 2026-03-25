### Salesloft REST API v2 — Comprehensive Reference

**Base URL**: `https://api.salesloft.com/v2`
**Docs**: https://developers.salesloft.com/
**API version**: v2 (all endpoints prefixed `/v2/`)

---

## Authentication

Salesloft supports three authentication methods. All use Bearer tokens in the `Authorization` header.

### OAuth 2.0 — Authorization Code (recommended for user-facing apps)

| Step | Detail |
|---|---|
| Authorization URL | `https://accounts.salesloft.com/oauth/authorize` |
| Token URL | `https://accounts.salesloft.com/oauth/token` |
| Grant type | `authorization_code` |
| Token lifetime | 7200 seconds (2 hours) |
| Refresh tokens | Yes — POST to token URL with `grant_type=refresh_token`. Old refresh tokens are revoked upon new token issuance. |

**Authorization request parameters**: `client_id`, `redirect_uri`, `response_type=code`

**Token exchange POST body**:
```
client_id=YOUR_CLIENT_ID
client_secret=YOUR_CLIENT_SECRET
code=AUTHORIZATION_CODE
grant_type=authorization_code
redirect_uri=YOUR_REDIRECT_URI
```

**Token response**:
```json
{
  "access_token": "...",
  "token_type": "bearer",
  "expires_in": 7200,
  "refresh_token": "...",
  "scope": "accounts:write calls:read",
  "created_at": 1448987410
}
```

### OAuth 2.0 — Client Credentials (server-to-server)

| Detail | Value |
|---|---|
| Token URL | `https://accounts.salesloft.com/oauth/token` |
| Grant type | `client_credentials` |
| Token lifetime | 7200 seconds (2 hours) |
| Refresh tokens | **No** — must re-request tokens |
| Auth methods | Body params (`client_id`/`client_secret`) or `Authorization: Basic <base64(client_id:secret)>` header |

Assumes permissions of the admin who created the application. Private application use only.

### API Key Authentication (customers only)

- Generate keys in Salesloft: Your Applications > API Keys > Create New
- Format: `ak_` followed by 64-character hex string
- Header: `Authorization: Bearer YOUR_API_KEY`
- **Partners must use OAuth** — API keys are exclusively for direct customers

### Available Scopes

**General scopes** (37): `accounts:read`, `accounts:write`, `accounts:delete`, `people:read`, `people:write`, `people:delete`, `opportunities:read`, `opportunities:write`, `opportunities:delete`, `activities:read`, `activities:write`, `cadences:read`, `cadences:write`, `cadences:delete`, `calls:read`, `calls:write`, `conversations:read`, `conversations:write`, `crm:read`, `dialer_recordings:read`, `emails:read`, `emails:write`, `external_id:read`, `external_id:write`, `external_id:delete`, `external_id_configuration:read`, `external_id_configuration:write`, `external_id_configuration:delete`, `meetings:read`, `meetings:write`, `notes:read`, `notes:write`, `notes:delete`, `notifications:write`, `audit_reports:read`, `audit_reports:write`, `groups:write`, `signal_registrations:read`, `signal_registrations:write`, `signal_registrations:delete`, `team:read`, `team:write`, `team:delete`

**Privileged scopes** (6): `email_contents:read`, `crm_id_person:write`, `crm_id_account:write`, `data_control:read`, `data_control:write`, `external_emails:write`

**Frontend integration scopes**: `person:read`, `account:read`

---

## Request & Response Format

### Requests
- **Content-Type**: `application/json` (recommended). Form-encoded also supported.
- **Accept**: `application/json`

### Response Envelope

**List endpoints** return:
```json
{
  "data": [ ... ],
  "metadata": {
    "filtering": { "status": "pending" },
    "paging": {
      "per_page": 25,
      "current_page": 1,
      "next_page": 2,
      "prev_page": null,
      "total_pages": 10,
      "total_count": 245
    },
    "sorting": {
      "sort_by": "updated_at",
      "sort_direction": "DESC NULLS LAST"
    }
  }
}
```

**Single record endpoints** return:
```json
{
  "data": { ... }
}
```

### Error Responses

**403/404** — authorization/not found:
```json
{
  "error": "Description of rejection reason"
}
```

**422** — validation errors:
```json
{
  "errors": {
    "email_address": ["is already taken"],
    "first_name": ["is required"]
  }
}
```

---

## Pagination

**Type**: Page-based (not cursor-based)

| Parameter | Default | Range | Description |
|---|---|---|---|
| `page` | 1 | 1+ | Page index (1-based, not 0-based) |
| `per_page` | 25 | 1–100 | Records per page |

**Paging response object** (in `metadata.paging`):

| Field | Description |
|---|---|
| `per_page` | Records per page |
| `current_page` | Current page number |
| `next_page` | Next page number, or `null` |
| `prev_page` | Previous page number, or `null` |
| `total_pages` | Total number of pages |
| `total_count` | Total record count |

**High page penalty**: Pages >100 incur extra rate limit cost (see Rate Limits).

**Recommendation**: For large datasets, use cursor-based polling on `updated_at` field instead of deep pagination — e.g., `?updated_at[gt]=<last_timestamp>`.

---

## Filtering & Sorting

### Filtering
- Filters are **per-endpoint** (documented on each endpoint)
- Query parameter syntax: `?filter_name=value`
- Date range operators: `?updated_at[gt]=2024-01-01T00:00:00Z` (greater than)
- Partial matching: `?field[_starts_with]=value` (minimum 3 characters, case-insensitive)
- Invalid filter names are silently ignored
- Invalid filter values return `422` with descriptive errors
- Applied filters are reflected back in `metadata.filtering`

### Sorting
| Parameter | Values | Default |
|---|---|---|
| `sort_by` | Varies per endpoint | Endpoint-specific |
| `sort_direction` | `ASC`, `DESC` | `DESC` |

- `ASC` sorts null values first
- `DESC` sorts null values last
- Invalid sort fields return `422`

---

## Rate Limits

| Detail | Value |
|---|---|
| Limit | **600 cost per minute** |
| Scope | **Team-level** (not per integration/user) |
| Default endpoint cost | 1 point per request |
| Adjustable | Salesloft can modify per-customer |

**High pagination costs**:

| Page range | Cost per request |
|---|---|
| 1–100 | 1 (default) |
| 101–150 | 3 |
| 151–250 | 8 |
| 251–500 | 10 |
| 501+ | 30 |

**Response headers**:

| Header | Description |
|---|---|
| `x-ratelimit-endpoint-cost` | Cost of this request |
| `x-ratelimit-remaining-minute` | Remaining budget this minute |

When limit is exceeded, API returns `429 Too Many Requests`.

---

## All API Endpoints

All paths are relative to `https://api.salesloft.com/v2`.

### Me / Team

| Endpoint | Method | Description |
|---|---|---|
| `/me` | GET | Fetch the currently authenticated user |
| `/team` | GET | Fetch team information |

### People

| Endpoint | Method | Description |
|---|---|---|
| `/people` | GET | List people (filterable, pageable, sortable) |
| `/people` | POST | Create a person (requires `email_address` or `phone`+`last_name`) |
| `/people/{id}` | GET | Fetch a person by ID |
| `/people/{id}` | PATCH | Update a person |
| `/people/{id}` | DELETE | Delete a person (irreversible) |

### Person Upserts

| Endpoint | Method | Description |
|---|---|---|
| `/person_upserts` | POST | Upsert a person record (create or update based on `upsert_key`) |

### Person Stages

| Endpoint | Method | Description |
|---|---|---|
| `/person_stages` | GET | List person lifecycle stages |

### People Soft Deletion

| Endpoint | Method | Description |
|---|---|---|
| `/people_soft_deletion` | — | Soft-delete person records |

### Accounts

| Endpoint | Method | Description |
|---|---|---|
| `/accounts` | GET | List accounts (filterable, pageable, sortable) |
| `/accounts` | POST | Create an account |
| `/accounts/{id}` | GET | Fetch an account by ID |
| `/accounts/{id}` | PATCH | Update an account |
| `/accounts/{id}` | DELETE | Delete an account (irreversible) |

### Account Upserts

| Endpoint | Method | Description |
|---|---|---|
| `/account_upserts` | POST | Upsert an account record (create or update based on `upsert_key`) |

### Account Stages

| Endpoint | Method | Description |
|---|---|---|
| `/account_stages` | GET | List account stages |

### Account Tiers

| Endpoint | Method | Description |
|---|---|---|
| `/account_tiers` | GET | List account tiers |

### Account Types

| Endpoint | Method | Description |
|---|---|---|
| `/account_types` | GET | List account types |

### Account Team Member Roles

| Endpoint | Method | Description |
|---|---|---|
| `/account_team_member_roles` | GET | List account team member roles |

### Account & People Redaction / Right to Be Forgotten

| Endpoint | Method | Description |
|---|---|---|
| `/account_redaction` | — | Redact account data |
| `/account_and_people_redaction` | — | Redact account and associated people data |
| `/right_to_be_forgotten` | — | GDPR right-to-be-forgotten requests |

### Cadences

| Endpoint | Method | Description |
|---|---|---|
| `/cadences` | GET | List cadences (filterable, pageable, sortable) |
| `/cadences/{id}` | GET | Fetch cadence details by ID |

### Cadence Memberships

| Endpoint | Method | Description |
|---|---|---|
| `/cadence_memberships` | GET | List cadence memberships/enrollments |
| `/cadence_memberships` | POST | Enroll a person in a cadence (`person_id` + `cadence_id`) |
| `/cadence_memberships/{id}` | GET | Fetch a cadence membership by ID |
| `/cadence_memberships/{id}` | DELETE | Remove a cadence membership |

### Cadence Bulk Memberships

| Endpoint | Method | Description |
|---|---|---|
| `/cadence_bulk_memberships` | POST | Bulk-enroll multiple people in a cadence |

### Cadence Stats

| Endpoint | Method | Description |
|---|---|---|
| `/cadence_stats/{cadence_id}` | GET | Fetch stats for a cadence by ID |

### Cadence Exports / Imports

| Endpoint | Method | Description |
|---|---|---|
| `/cadence_exports/{id}` | GET | Export a cadence as JSON |
| `/cadence_export_downloads` | — | Download cadence export files |
| `/cadence_imports` | POST | Import cadences from JSON (create new or add steps to existing) |

### Steps

| Endpoint | Method | Description |
|---|---|---|
| `/steps` | GET | List cadence steps (filterable, pageable, sortable) |
| `/steps/{id}` | GET | Fetch a step by ID |

### Actions

| Endpoint | Method | Description |
|---|---|---|
| `/actions` | GET | List in-progress actions (non-admins see own only; admins can filter by `user_guid`) |

### Ongoing Actions

| Endpoint | Method | Description |
|---|---|---|
| `/ongoing_actions` | POST | Create an ongoing (not yet completed) action |

### Activities

| Endpoint | Method | Description |
|---|---|---|
| `/activities` | POST | Create an activity (marks associated action as completed) |

### Activity Histories

| Endpoint | Method | Description |
|---|---|---|
| `/activity_histories` | GET | List past activities (from Activity Feed) |

### Emails

| Endpoint | Method | Description |
|---|---|---|
| `/activities/emails` | GET | List sent emails with tracking data |
| `/activities/emails/{id}` | GET | Fetch a single email by ID |

### Pending Emails

| Endpoint | Method | Description |
|---|---|---|
| `/pending_emails` | GET | List emails ready to be sent by external email service |
| `/pending_emails/{id}` | PATCH | Update status of an email sent by external email client |

### External Emails

| Endpoint | Method | Description |
|---|---|---|
| `/external_emails` | — | Write MIME emails for reply tracking (requires `external_emails:write` scope) |

### Mime Email Payloads

| Endpoint | Method | Description |
|---|---|---|
| `/mime_email_payloads` | — | Access MIME email payload data |

### Email Missing Tags

| Endpoint | Method | Description |
|---|---|---|
| `/email_missing_tags` | — | Identify emails with missing tracking tags |

### Email Templates (Personal)

| Endpoint | Method | Description |
|---|---|---|
| `/email_templates` | GET | List personal email templates |
| `/email_templates` | POST | Create a personal email template |
| `/email_templates/{id}` | GET | Fetch an email template by ID |
| `/email_templates/{id}` | PATCH | Update a personal email template |

### Email Template Attachments

| Endpoint | Method | Description |
|---|---|---|
| `/email_template_attachments` | GET | List email template attachments |

### Team Templates

| Endpoint | Method | Description |
|---|---|---|
| `/team_templates` | GET | List team email templates |
| `/team_templates` | POST | Create a team email template |
| `/team_templates/{id}` | GET | Fetch a team template by ID |
| `/team_templates/{id}` | PATCH | Update a team email template |

### Team Template Attachments

| Endpoint | Method | Description |
|---|---|---|
| `/team_template_attachments` | GET | List team template attachments |

### Calls

| Endpoint | Method | Description |
|---|---|---|
| `/activities/calls` | GET | List call records (filterable, pageable, sortable) |
| `/activities/calls` | POST | Create/log a call |
| `/activities/calls/{id}` | GET | Fetch a call by ID |

### Call Data Records

| Endpoint | Method | Description |
|---|---|---|
| `/call_data_records` | GET | List call data records (telephony-level detail) |

### Call Dispositions

| Endpoint | Method | Description |
|---|---|---|
| `/call_dispositions` | GET | List call dispositions |

### Call Instructions

| Endpoint | Method | Description |
|---|---|---|
| `/call_instructions` | GET | List call instructions/scripts |

### Call Sentiments

| Endpoint | Method | Description |
|---|---|---|
| `/call_sentiments` | GET | List call sentiments |

### Caller IDs

| Endpoint | Method | Description |
|---|---|---|
| `/caller_ids` | GET | List caller ID numbers |

### Notes

| Endpoint | Method | Description |
|---|---|---|
| `/notes` | GET | List notes |
| `/notes` | POST | Create a note |
| `/notes/{id}` | GET | Fetch a note by ID |
| `/notes/{id}` | PATCH | Update a note (does not sync to CRM) |
| `/notes/{id}` | DELETE | Delete a note |

### Tasks

| Endpoint | Method | Description |
|---|---|---|
| `/tasks` | GET | List tasks (filterable, pageable, sortable) |
| `/tasks` | POST | Create a task |
| `/tasks/{id}` | GET | Fetch a task by ID |
| `/tasks/{id}` | PATCH | Update a task |
| `/tasks/{id}` | DELETE | Delete a task (irreversible) |

### Tasks Counts

| Endpoint | Method | Description |
|---|---|---|
| `/tasks_counts` | GET | Get task count aggregations |

### Bulk Reschedule Tasks

| Endpoint | Method | Description |
|---|---|---|
| `/bulk_reschedule_tasks` | — | Bulk reschedule tasks |

### Users

| Endpoint | Method | Description |
|---|---|---|
| `/users` | GET | List users (visibility depends on group policy) |
| `/users/{id}` | GET | Fetch a user by ID or GUID |
| `/users/{id}` | PATCH | Update a user by ID or GUID |

### Groups

| Endpoint | Method | Description |
|---|---|---|
| `/groups` | GET | List groups |
| `/groups` | POST | Create a group |
| `/groups/{id}` | GET | Fetch a group by ID |
| `/groups/{id}` | PATCH | Update a group |
| `/groups/{id}` | DELETE | Delete a group |

### Custom Roles

| Endpoint | Method | Description |
|---|---|---|
| `/custom_roles` | GET | List custom roles |

### Custom Fields

| Endpoint | Method | Description |
|---|---|---|
| `/custom_fields` | GET | List custom fields (filterable, pageable, sortable) |

### Tags

| Endpoint | Method | Description |
|---|---|---|
| `/tags` | GET | List team tags |

### Saved List Views

| Endpoint | Method | Description |
|---|---|---|
| `/saved_list_views` | GET | List saved list views |
| `/saved_list_views` | POST | Create a saved list view |
| `/saved_list_views/{id}` | GET | Fetch a saved list view by ID |
| `/saved_list_views/{id}` | PATCH | Update a saved list view |
| `/saved_list_views/{id}` | DELETE | Delete a saved list view (irreversible) |

### Searches

| Endpoint | Method | Description |
|---|---|---|
| `/searches` | — | Execute saved searches |

### Meetings

| Endpoint | Method | Description |
|---|---|---|
| `/meetings` | GET | List meetings (filterable, pageable, sortable) |
| `/meetings/{id}` | PATCH | Update a meeting by ID |

### Calendar Availabilities

| Endpoint | Method | Description |
|---|---|---|
| `/calendar_availabilities` | GET | List calendar availability slots |

### Calendar Events

| Endpoint | Method | Description |
|---|---|---|
| `/calendar_events` | GET | List calendar events |

### Reschedule Links

| Endpoint | Method | Description |
|---|---|---|
| `/reschedule_links` | — | Manage reschedule links |

### Opportunities

| Endpoint | Method | Description |
|---|---|---|
| `/opportunities` | GET | List opportunities (synced from CRM + created via API) |

### Opportunity People

| Endpoint | Method | Description |
|---|---|---|
| `/opportunity_people` | GET | List opportunity-person associations (buying group) |
| `/opportunity_people` | POST | Associate a person with an opportunity |
| `/opportunity_people/{id}` | DELETE | Delete an opportunity-person association |

### Opportunity Stages

| Endpoint | Method | Description |
|---|---|---|
| `/opportunity_stages` | GET | List opportunity stages |

### Successes

| Endpoint | Method | Description |
|---|---|---|
| `/successes` | GET | List success records |

### Conversations

| Endpoint | Method | Description |
|---|---|---|
| `/conversations` | GET | List conversations (filterable, pageable, sortable) |
| `/conversations/{id}` | GET | Fetch a single conversation |
| `/conversations/{id}/extensive` | GET | Fetch conversation with AI features (summary, action items, key moments) |
| `/conversations/{id}/recording` | GET | Fetch conversation with media |

### Conversations Calls

| Endpoint | Method | Description |
|---|---|---|
| `/conversations/calls` | POST | Create a dialer call |

### Transcriptions

| Endpoint | Method | Description |
|---|---|---|
| `/transcriptions` | GET | List conversation transcriptions |

### Recording Settings

| Endpoint | Method | Description |
|---|---|---|
| `/recording_settings` | GET | List recording settings |

### Imports

| Endpoint | Method | Description |
|---|---|---|
| `/imports` | GET | List imports |

### Signals & Rhythm

| Endpoint | Method | Description |
|---|---|---|
| `/signals` | POST | Deliver a signal to Salesloft (must match a Signal Registration structure) |

### Signal Registrations

| Endpoint | Method | Description |
|---|---|---|
| `/signal_registrations` | GET | List all signal registrations |
| `/signal_registrations` | POST | Create a signal registration |
| `/signal_registrations/{id}` | GET | Fetch a signal registration by ID |
| `/signal_registrations/{id}` | PATCH | Update a signal registration |
| `/signal_registrations/{id}` | DELETE | Delete a signal registration |

### Play Registrations

| Endpoint | Method | Description |
|---|---|---|
| `/play_registrations` | GET | List play registrations |
| `/play_registrations` | POST | Create a play for a registered signal + indicator |
| `/play_registrations/{id}` | GET | Fetch a play registration by ID |
| `/play_registrations/{id}` | PUT | Update play registration (name, label, description, indicators, attributes) |
| `/play_registrations/{id}` | DELETE | Delete a play registration (only if not enabled) |

### Live Feed Items

| Endpoint | Method | Description |
|---|---|---|
| `/live_feed_items` | GET | List live feed items |

### Live Website Tracking Parameters

| Endpoint | Method | Description |
|---|---|---|
| `/live_website_tracking_parameters` | GET | List website tracking parameters |

### Phone Number Assignments

| Endpoint | Method | Description |
|---|---|---|
| `/phone_number_assignments` | GET | List phone number assignments |

### Settings

| Endpoint | Method | Description |
|---|---|---|
| `/settings` | GET | Fetch team settings |

### Audit Reports

| Endpoint | Method | Description |
|---|---|---|
| `/audit_reports` | GET | Fetch audit report data |

### Requests

| Endpoint | Method | Description |
|---|---|---|
| `/requests` | — | Manage API requests |

### CRM-Related Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/crm_activities` | GET | List CRM activity records |
| `/crm_activities/{id}` | GET | Fetch a CRM activity by ID |
| `/crm_activity_fields` | GET | List CRM activity fields |
| `/crm_users` | GET | List CRM users |
| `/crm_account_team_members` | GET | List CRM account team members |
| `/crm_team_members_with_roles` | GET | List CRM team members with roles |

### External ID Configuration

| Endpoint | Method | Description |
|---|---|---|
| `/external_id_configurations` | GET | List external ID configurations for a team |
| `/external_id_configurations` | POST | Create a configuration (valid types: people, users, accounts, opportunities) |
| `/external_id_configurations/{id}` | DELETE | Delete a configuration |

### External ID Mapping

| Endpoint | Method | Description |
|---|---|---|
| `/external_id_mappings` | GET | List team mappings (paginated, date-filterable) |
| `/external_id_mappings` | POST | Create a mapping (valid types: people, users, accounts, opportunities) |
| `/external_id_mappings/{id}` | DELETE | Delete a mapping |

---

## Bulk Jobs

Bulk jobs allow asynchronous, large-scale data operations. They bypass per-request rate limits once execution begins.

### Key constraints
- **Single queue**: Only one bulk job processes at a time per tenant
- **Not time-sensitive**: Shared queue may cause delays
- **Data retention**: Row-by-row results deleted after 30 days (aggregate counts persist)
- **No job limit**: Unlimited bulk jobs per tenant, processed sequentially
- **Record limit**: Up to 5,000 records per job data upload call

### Bulk Job Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/bulk_jobs` | GET | List bulk jobs (filterable, pageable, sortable) |
| `/bulk_jobs` | POST | Create a bulk job (must include `type`) |
| `/bulk_jobs/{id}` | GET | Fetch a bulk job by ID |
| `/bulk_jobs/{id}` | PATCH | Update a bulk job (name, or mark as `ready_to_execute`) |
| `/bulk_jobs/{id}` | DELETE | Cancel a bulk job (marks all pending records as cancelled) |

### Bulk Job Data

| Endpoint | Method | Description |
|---|---|---|
| `/bulk_jobs/{id}/job_data` | GET | List job data records (cursor-based via `id[gt]`, no page-based pagination) |
| `/bulk_jobs/{id}/job_data` | POST | Upload job data (up to 5,000 records per call) |

### Bulk Job Results

| Endpoint | Method | Description |
|---|---|---|
| `/bulk_jobs/{id}/results` | GET | List results for completed bulk job (empty until state=`done`; uses `id[gt]` cursor polling) |

---

## Webhook Subscriptions

### Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/webhook_subscriptions` | GET | List all webhook subscriptions for your application |
| `/webhook_subscriptions` | POST | Create a webhook subscription |
| `/webhook_subscriptions/{id}` | GET | Fetch a webhook subscription by ID |
| `/webhook_subscriptions/{id}` | PATCH | Update a webhook subscription |
| `/webhook_subscriptions/{id}` | DELETE | Delete a webhook subscription (irreversible) |

### All Webhook Event Types (38 total)

| Event Type | Description | Required Scope |
|---|---|---|
| `account_created` | Account created | `accounts:read` |
| `account_deleted` | Account deleted | `accounts:read` |
| `account_updated` | Account updated | `accounts:read` |
| `bulk_job_completed` | Bulk job completed | — |
| `cadence_created` | Cadence created | `cadences:read` |
| `cadence_deleted` | Cadence deleted | `cadences:read` |
| `cadence_membership_created` | Person enrolled in cadence | `cadences:read` |
| `cadence_membership_updated` | Membership updated (step progression) | `cadences:read` |
| `cadence_updated` | Cadence updated | `cadences:read` |
| `call_created` | Call logged | `calls:read` |
| `call_data_record_created` | Call data record created | `calls:read` |
| `call_data_record_updated` | Call data record updated | `calls:read` |
| `call_updated` | Call updated | `calls:read` |
| `conversation_created` | Conversation created | `conversations:read` |
| `conversation_recording_created` | Recording available | `conversations:read` |
| `conversation_transcript_created` | Transcript available | `conversations:read` |
| `email_updated` | Email updated | `emails:read` |
| `email_with_body_and_subject_updated` | Email updated with body/subject | `email_contents` |
| `link_swap` | Email sent — receive links for swapping | `emails:read` |
| `meeting_booked` | Meeting created | `meetings:read` |
| `meeting_updated` | Meeting updated | `meetings:read` |
| `note_created` | Note created | `notes:read` |
| `note_deleted` | Note deleted | `notes:read` |
| `note_updated` | Note updated | `notes:read` |
| `person_created` | Person created | `people:read` |
| `person_deleted` | Person deleted | `people:read` |
| `person_updated` | Person updated | `people:read` |
| `step_created` | Cadence step created | `cadences:read` |
| `step_deleted` | Cadence step deleted | `cadences:read` |
| `step_updated` | Cadence step updated | `cadences:read` |
| `success_created` | Success recorded | `people:read` |
| `task_completed` | Task completed | `tasks:read` |
| `task_created` | Task created | `tasks:read` |
| `task_deleted` | Task deleted | `tasks:read` |
| `task_updated` | Task updated | `tasks:read` |
| `user_created` | User created | `team:read` |
| `user_updated` | User updated | `team:read` |

**Special**: The `link_swap` event is unique — Salesloft POSTs to your URL and waits for a response (synchronous), unlike all other events which are fire-and-forget.

---

## Common Automation Patterns

**Enrich and enroll**: Create a Person via `POST /people`, attach to an Account, then enroll in a Cadence via `POST /cadence_memberships`.

**CRM sync monitoring**: Poll `/people?updated_at[gt]=<timestamp>` or subscribe to `person_updated` webhooks to detect sync issues.

**Cursor-based polling** (recommended over deep pagination): Use `?updated_at[gt]=<last_seen_timestamp>` to incrementally poll for changes. Avoids high-page rate limit penalties.

**Custom reporting**: Pull data from `/activities/emails`, `/activities/calls`, `/cadence_memberships` and join with CRM data.

**Cadence performance tracking**: Use `/cadence_stats/{id}` combined with membership and step data for conversion analysis.

**Bulk data operations**: Use `/bulk_jobs` for large imports/updates — create a job, upload data in 5k-record batches, mark `ready_to_execute`, poll for completion.

---

## Source URLs

- API Reference: https://developers.salesloft.com/docs/api/
- OAuth Authorization Code: https://developers.salesloft.com/docs/platform/api-basics/oauth-authentication/
- OAuth Client Credentials: https://developers.salesloft.com/docs/platform/api-basics/client-creds/
- API Key Auth: https://developers.salesloft.com/docs/platform/api-basics/api-key-authentication/
- Scopes: https://developers.salesloft.com/docs/platform/api-basics/scopes/
- Filtering/Paging/Sorting: https://developers.salesloft.com/docs/platform/api-basics/filtering-paging-sorting/
- Request/Response Format: https://developers.salesloft.com/docs/platform/api-basics/request-response-format/
- Rate Limits: https://developers.salesloft.com/docs/platform/api-basics/rate-limits/
- Bulk Jobs: https://developers.salesloft.com/docs/platform/bulk-jobs/intro/
- Webhooks: https://developers.salesloft.com/docs/platform/webhooks/
- Webhook Event Types: https://developers.salesloft.com/docs/platform/webhooks/event-types/
