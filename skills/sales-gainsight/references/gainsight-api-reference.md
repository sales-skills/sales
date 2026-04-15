<!-- Source: https://support.gainsight.com/gainsight_nxt/API_and_Developer_Docs -->
<!-- Fetched: 2026-04-14, updated 2026-04-15 with Bulk Export, Timeline, and Success Plan APIs -->
<!-- Note: PX API (Apiary) is JS-rendered — refer to docs directly. -->

# Gainsight REST API Reference

## Authentication

All API requests require an Access Key passed in the request header. The key does not expire.

```
Headers:
  Accesskey: <your-access-key>
  Content-Type: application/json
```

Contact your Gainsight Admin to obtain an access key for your tenant.

## Rate Limits

| API type | Rate | Daily limit |
|---|---|---|
| Synchronous | 100 calls/min | 50,000/day |
| Asynchronous (Bulk) | 10 calls/hour | 100/day |
| User Management | 100 requests/hour | 1,000/day |
| Success Plan | 5,000 calls/min | 50,000/day |
| Timeline (single) | 200 calls/min | — |
| Timeline (bulk) | 12 calls/hour | — |

Fixed window rate limiting applies. Exceeding limits returns HTTP 429.

## Base URLs

API base URLs vary by object type:

| API | Base URL |
|---|---|
| Company | `https://companyapi.gainsightcloud.com/v1/data/objects/` |
| Person | `https://personapi.gainsightcloud.com/v1/peoplemgmt/v1.0/` |
| Custom Object | `https://customobjectapi.gainsightcloud.com/v1/data/objects/` |
| CTA | `https://<customer-domain>/v2/cockpit/` |
| Success Plan | `https://<customer-domain>/v2/successPlan/` |
| Bulk Export | `https://<customer-domain>/v3/exports/data/bulk/` |
| Timeline | `https://<customer-domain>/v1/ant/es/` |
| User Management | `https://<customer-domain>/v1/users/services` |

## Response Format

All responses include:

```json
{
  "result": true,
  "errorCode": null,
  "errorDesc": null,
  "requestId": "unique-request-id",
  "data": {},
  "message": null
}
```

## Company API

### Insert Companies

**POST** `https://companyapi.gainsightcloud.com/v1/data/objects/Company`

Max 50 records per call.

```json
{
  "records": [
    {
      "Name": "Acme Corp",
      "Industry": "Technology",
      "ARR": 120000,
      "Employees": 250,
      "RenewalDate": 1672531200000,
      "Stage": "Active",
      "CSMFirstName": "Jane",
      "CSMLastName": "Smith"
    }
  ]
}
```

Supports import lookups (Direct and Self) to populate GSID fields by matching against other objects.

### Update Companies

**PUT** `https://companyapi.gainsightcloud.com/v1/data/objects/Company?keys=fieldName1,fieldName2`

Max 50 records. Max 3 keys (String, GSID, Number, or Email types). Keys connected with AND.

### Read Companies

**POST** `https://companyapi.gainsightcloud.com/v1/data/objects/query/Company`

Max 5,000 records per call (use offset for pagination).

```json
{
  "select": ["Name", "Industry", "ARR", "RenewalDate"],
  "where": {
    "conditions": [
      {
        "name": "ARR",
        "alias": "A",
        "value": [50000],
        "operator": "GTE"
      }
    ],
    "expression": "A"
  },
  "orderBy": { "ARR": "desc" },
  "limit": 100,
  "offset": 0
}
```

### Delete Company

**DELETE** `https://companyapi.gainsightcloud.com/v1/data/objects/Company/{GSID}`

**Standard Company fields:** Name, Industry, ARR, Employees, LifecycleInWeeks, OriginalContractDate, RenewalDate, Stage, Status, CSMFirstName, CSMLastName, ParentCompanyName

## Person API

### Upsert Person (Single)

**PUT** `https://personapi.gainsightcloud.com/v1/peoplemgmt/v1.0/people`

Email is the resolution key (mandatory).

```json
{
  "Email": "jane@acme.com",
  "FirstName": "Jane",
  "LastName": "Smith",
  "LinkedinUrl": "https://linkedin.com/in/janesmith",
  "Location": "San Francisco",
  "Timezone": "America/Los_Angeles"
}
```

### Upsert Person with Associations

Same endpoint. Add association details:

```json
{
  "Email": "jane@acme.com",
  "FirstName": "Jane",
  "associations": {
    "companyPerson": {
      "Company_ID": "1P01...",
      "Role": "Champion",
      "Title": "VP Customer Success",
      "IsPrimaryCompany": true
    }
  }
}
```

### Async Upsert (Multiple Persons)

**PUT** `https://personapi.gainsightcloud.com/v1/peoplemgmt/v1.0/people/async`

Up to 50 records. Returns `statusId` for tracking (max 30 min processing).

### Get Person

By GSID or Email lookup. Returns full person details with associations.

### Delete Person

Async deletion with status tracking.

**Person fields:** Email (mandatory), FirstName, LastName, Name, LinkedinUrl, Location, Timezone, ExternalRecordID, Comments

**Company Person fields:** Person_ID, Company_ID, Role, Title, IsPrimaryCompany, Manager

## Custom Object API

### Insert Records

**POST** `https://customobjectapi.gainsightcloud.com/v1/data/objects/{objectName}`

Max 50 records. Same structure as Company API.

### Update Records

**PUT** `https://customobjectapi.gainsightcloud.com/v1/data/objects/{objectName}?keys={fieldName1,fieldName2}`

Max 50 records. Max 3 keys.

### Read Records

**POST** `https://customobjectapi.gainsightcloud.com/v1/data/objects/query/{objectName}`

Max 5,000 records. Supports full query syntax.

### Delete Record

**DELETE** `https://customobjectapi.gainsightcloud.com/v1/data/objects/{objectName}/{GSID}`

**Query operators:** EQ, NE, LT, GT, LTE, GTE, BTW, IN, CONTAINS, STARTS_WITH, ENDS_WITH, IS_NULL, IS_NOT_NULL, INCLUDES, EXCLUDES

## CTA API

### Create CTA

**POST** `/v2/cockpit/cta/`

```json
{
  "Name": "Onboarding Stalled",
  "Type__gr": { "Gsid": "<CTA_TYPE_GSID>" },
  "OwnerId__gr": { "Gsid": "<USER_GSID>" },
  "CompanyId__gr": { "Gsid": "<COMPANY_GSID>" },
  "DueDate": "2026-05-15",
  "ExternalReferenceId": "onboard-acme-001",
  "Priority__gr": { "Gsid": "<PRIORITY_GSID>" },
  "Reason__gr": { "Gsid": "<REASON_GSID>" }
}
```

Mandatory: External Reference ID. Custom fields append `__gc`, lookup fields append `__gr`.

### Update CTA

**PUT** `/v2/cockpit/cta/`

Requires CTA GSID or Reference ID. Supports cascading:
- Due Date cascade: ALL_OPEN_TASKS, PLAYBOOK_TASKS, NO
- Owner cascade: OWNER, ALL_OPEN_TASKS, NO

### Fetch CTAs

**POST** `/v2/cockpit/cta/list`

Max 1,000 per request. Supports pagination (pageSize, pageNumber), filtering, linked object data.

Default fields: Company ID, Due Date, Owner, Priority, Reason, Status, Type.

### Get CTA Configuration

**GET** `v2/cockpit/admin/picklist/lite?category=CTA_STATUS,CTA_PRIORITY,CTA_TYPE&et=COMPANY`

Returns picklist values for Status, Priority, Reason, Type.

## Success Plan API

### Fetch Success Plans

**POST** `v2/successPlan/list/`

```json
{
  "select": ["name", "DueDate", "StatusName", "TypeName", "OwnerId"],
  "where": {
    "conditions": [{
      "fieldName": "DueDate",
      "value": ["2026-04-14"],
      "alias": "A",
      "operator": "GT"
    }],
    "expression": "A"
  },
  "pageSize": 100,
  "pageNumber": 1
}
```

### Create Success Plan

**POST** `v2/successPlan/`

```json
{
  "requests": [{
    "record": {
      "referenceId": "1",
      "Name": "Onboarding Success Plan",
      "OwnerEmail": "csm@company.com",
      "DueDate": "2026-06-01",
      "SuccessPlanType": "Onboarding",
      "status": "Draft",
      "Templates": ["Enterprise Template"]
    }
  }],
  "lookups": {
    "OwnerId": {
      "fields": { "OwnerEmail": "Email" },
      "lookupField": "Gsid",
      "objectName": "gsuser"
    }
  }
}
```

### Create Success Plan with Objectives

**POST** `v2/successPlan?withObjectives=true`

Same as above with nested "Objectives" array.

### Update Success Plan

**PUT** `v2/successPlan/`

Requires Gsid and ReferenceId. Non-editable fields excluded.

### Get Configurations

**GET** `v2/successPlan/admin/picklist/lite?category=SUCCESS_PLAN_TYPE&et=COMPANY`

### Retrieve Deleted Plans

**POST** `v2/successPlan/deleted/list` or `v2/successPlan/list` with `"includeonlyDeletedRecords": true`

Available for 15 days post-deletion.

**Filter operators for Success Plans:** Date (BTW, EQ, NE, GT, GTE, LT, LTE, IS_NULL, IS_NOT_NULL), special literals (TODAY, YESTERDAY, TOMORROW, LAST_N_DAYS, CURRENT_USER, ALL_USERS), String (EQ, NE, STARTS_WITH, CONTAINS, DOES_NOT_CONTAINS), Number/Currency (EQ, NE, GT, GTE, LT, LTE), Picklist (EQ, NE, STARTS_WITH, CONTAINS, INCLUDES, EXCLUDES), Multi-Picklist (INCLUDES, EXCLUDES), Lookup (EQ, NE, STARTS_WITH, CONTAINS)

## User Management API

### Create Users

**POST** `https://<customer-domain>/v1/users/services?notify=true/false`

Max 50 users per call.

```json
{
  "records": [
    {
      "FirstName": "Test",
      "LastName": "User",
      "Email": "test@company.com",
      "LicenseType": "Viewer",
      "SFDCUserName": "test@company.com"
    }
  ],
  "lookups": {
    "CompanyID": {
      "fields": { "CompanyName": "Name" },
      "lookupField": "Gsid",
      "objectName": "Company",
      "multiMatchOption": "FIRSTMATCH",
      "onNoMatch": "ERROR"
    }
  }
}
```

**Mandatory fields by type:**
- Internal: Email, SFDCUserName, Name (or FirstName/LastName)
- External: CompanyID

**License types:** Full, Viewer, Viewer Analytics, Internal Collaborators, External

**Parameters:** LicenseType, SystemType (Internal/External/Guest Partner), IsSuperAdmin, Manager (GSID), Timezone, Title, Locale, IsActiveUser, permissionBundles, permissionBundleAction (append/overwrite)

### Update Users

**PUT** `https://<customer-domain>/v1/users/services?key=[FieldName]`

Key must be: SFDCUserName, Gsid, or SfdcUserId. Cannot update key fields themselves.

### Update User Status (Activate/Deactivate)

**PUT** `https://<customer-domain>/v1/users/services/status?status=true/false`

Body: Array of user GSIDs.

### Fetch User Details

**POST** `https://<customer-domain>/v1/users/services/list`

```json
{
  "includeTotal": true,
  "limit": 25,
  "page": 0,
  "orderBy": { "ModifiedDate": "desc" },
  "select": ["Name", "Email", "LicenseType"],
  "where": {
    "conditions": [{
      "name": "IsActiveUser",
      "operator": "EQ",
      "value": [true]
    }],
    "expression": "IsActive"
  }
}
```

## Error Codes

| Code | Message | Status |
|---|---|---|
| GU_1101 | Unexpected processing error | 500 |
| GU_2400 | Too many requests (rate limit) | 429 |
| GU_2401 | Bulk user create failed | 400 |
| GU_2402 | Bulk user update failed | 400 |
| GU_2403 | Lookup configuration invalid | 400 |
| GU_2409 | Key not supported | 400 |
| GU_2410 | Same user cannot be manager | 400 |
| GU_2411 | Conflict in update (duplicate) | 400 |

## Lookup Configuration

Used in Insert/Update operations to resolve references:

```json
{
  "lookups": {
    "TargetField": {
      "fields": { "SourceField": "LookupMatchField" },
      "lookupField": "Gsid",
      "objectName": "TargetObject",
      "multiMatchOption": "FIRSTMATCH",
      "onNoMatch": "NULLABLE"
    }
  }
}
```

- `multiMatchOption`: FIRSTMATCH (use first result) or MARKASERROR (fail if multiple)
- `onNoMatch`: NULLABLE (set null), DEFAULTVALUE (use default), ERROR (fail)

## Bulk API (Export)

The Bulk Export API enables fetching large datasets from custom, standard, and system objects asynchronously. Rate limit: 10 calls/hour, 100/day.

### Submit Bulk Export Job

**POST** `https://<customer-domain>/v3/exports/data/bulk/{objectName}`

Headers: `authentication: <Access Key>` (note: uses `authentication` not `accesskey`)

```json
{
  "select": ["Name", "Csm", "Csm__gr.name", "Billing_State__gc"],
  "where": {
    "conditions": [
      {
        "name": "Name",
        "alias": "A",
        "value": ["Gainsight"],
        "operator": "CONTAINS"
      }
    ],
    "expression": "A"
  },
  "orderBy": {"Name": "asc"},
  "limit": 100000,
  "offset": 0
}
```

Default limit: 1,000,000 records.

**Supported operators by data type:**
- String/GSID/Email: equals, not equals, greater/less than, starts with, contains, does not contain, ends with, null checks
- Boolean: equals, not equals
- Date/DateTime: equals, not equals, greater/less than, between, null checks
- Number: equals, not equals, comparison operators, in, not in, null checks
- Dropdown: equals, not equals, includes, excludes, text operations
- Multi-Select: includes, excludes, null checks
- Currency/Percentage: equals, not equals, comparison operators, null checks

### Check Bulk Job Status

**GET** `https://<customer-domain>/{statusURL}`

Returns `jobStatus`: IN_PROGRESS, COMPLETED, FAILED, SUBMITTED, NOT_STARTED, ABORTED.

On completion, response includes `totalRecords` and `chunkDetails` array with `chunkURL`, `offset`, and `limit` per chunk (default 20,000 records per chunk).

### Fetch Chunk Data

**GET** `https://<customer-domain>/{chunkURL}`

Returns CSV with headers and data rows.

**Error codes:** GSOBJ_ESS_9104 (no select field), GSOBJ_ESS_9150 (malformed query)

## Bulk API (Import)

CSV-based asynchronous data loading for operations exceeding the 50-record synchronous limit.

- Rate limit: 10 calls/hour, 100/day
- Accepts CSV file uploads
- Returns job status ID for tracking
- Processing is asynchronous — poll status endpoint

## Timeline API

Manages timeline activities (calls, meetings, emails, notes, milestones) for companies and relationships.

### Create Single Activity

**POST** `v1/ant/es/activity`

Required fields: Author, Subject, Notes, ContextName, plus company/relationship identifiers.

### Bulk Create Activities

**POST** `/v1/ant/es/activity/bulk`

Max payload: 80MB. Returns job ID for status tracking.

Rate limits: Single operations 200 calls/min, bulk 12 calls/hour.

### Check Bulk Job Status

**GET** `v1/ant/es/job/status/<job_id>`

States: COMPLETED, IN_PROGRESS, SUBMITTED, FAILED, NOT_STARTED, ABORTED.

### Update Single Activity

**PUT** `v1/ant/es/activity?identifier=<identifier>`

Identifier types: externalid, activityid, or gsid.

### Bulk Update Activities

**PUT** `v1/ant/es/activity/bulk?identifier=<identifier>`

### Delete Activity

**DELETE** `v1/ant/es/activity`

Removes activities by activityId.

### Fetch Deleted Activities

**POST** `v1/ant/es/activity/deleted`

Retrieves deleted activities within ISO 8601 timestamp ranges.

### Read Activities

**POST** `<gainsight-domain>/v1/data/objects/query/activity_timeline`

Standard query syntax with filtering and ordering.

## Gainsight PX API

PX has a separate REST API documented at https://gainsightpx.docs.apiary.io/

*Note: PX API docs are hosted on Apiary and require JavaScript to render. Could not fetch verbatim content. Refer to the Apiary page directly or https://support.gainsight.com/PX/API_for_Developers for PX-specific endpoints.*

PX SDKs available: JavaScript (web), iOS, Android, React Native, Flutter, NativeScript, Java (server-side), C# (desktop).
