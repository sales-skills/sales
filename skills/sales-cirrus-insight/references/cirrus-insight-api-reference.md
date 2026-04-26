<!-- Source: https://docs.cirrusinsight.com/developer/apis/scheduling-links.html -->
<!-- Source: https://www.cirrusinsight.com/knowledgebase/zynbits-rest-api-technical-documentation -->

# Cirrus Insight REST API Reference

## Base Information

**Base URL:** `https://api.cirrusinsight.com`

**Security:** The API is public with no specific authentication required, but uses a `key_id` (organization's unique API identifier) to access endpoints. This feature is disabled by default and must be enabled by a Cirrus Insight Administrator.

## Authentication

Access requires a `key_id` provided by Cirrus Insight. Contact your Cirrus Insight Administrator to enable API features for your organization.

## Available Endpoint

### GET /api/organizations/{org_id}/calendarviews

Retrieve user Calendar Scheduling information by email addresses.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization` | string (UUID) | Yes | The Cirrus Insight organization id for your company. This is formatted as a UUID. |
| `emails` | string | Yes | A comma-separated list of email addresses to search for calendar links. |

**Request Example:**

```bash
curl -G "https://api.cirrusinsight.com/api/organizations/${org_id}/calendarviews" \
  -d "emails=${email_list}"
```

**Success Response (200):**

```json
{
    "calendarViews": [
        {
            "email": "",
            "calendars": [
                {
                    "url": "",
                    "name": "",
                    "isPrimary": true
                }
            ]
        }
    ],
    "status": "Success",
    "message": "Success"
}
```

**Response Fields:**

- `calendarViews` (list): Calendar link objects; may be empty if no matches found
- `status` (string): Request status information
- `message` (string): Request status details

**Error Response (404):**

```json
{
    "Status": "NotFound",
    "Message": "Not found.",
    "Errors": [{"Code": "not_found", "Description": "Not found."}]
}
```

**Error Codes:**

- `200` — Request processed successfully and calendars list provided if found
- `404` — Organization key_id missing/not found or API not enabled
- `400` — Missing or incorrectly formatted `emails` parameter

## Webhooks

Cirrus Insight supports webhooks for scheduling events:
- Meeting booked
- Meeting rescheduled
- Meeting canceled

Webhooks enable your application to receive notifications about specific events within the Cirrus Insight system, allowing developers to build workflows tailored to specific business needs.

**Note:** This feature is not enabled by default. You must request that it be enabled in your organization.

## API Limitations

- Only Calendar Scheduling endpoint available publicly
- No transcript, email activity, contact, or deal APIs documented
- No OAuth — org-level key_id authentication only
- Must be admin-enabled (not self-serve)
- No documented rate limits
- No SDKs or client libraries
