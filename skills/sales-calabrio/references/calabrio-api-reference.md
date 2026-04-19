<!-- Source: https://help.calabrio.com/doc/Content/api-getting-started/access-wfm-apis.htm -->
<!-- Source: https://help.calabrio.com/doc/Content/api-getting-started/new-wfm-apis-historical.htm -->
<!-- Source: https://help.calabrio.com/doc/Content/api-getting-started/wfm-hr-integrations-via-swagger-api.htm -->
<!-- Source: https://www.postman.com/calabriose -->

# Calabrio ONE API Reference

## WFM APIs

### Access

The API documentation is accessible via interactive Swagger UI at your tenant-specific URL:

`https://[customerURL].com/api/docs/index.html`

Example: `https://mtusce03.teleopticloud.com/api/docs/index.html`

### Authentication

Personal access tokens:
1. Navigate to User Settings > Personal access tokens
2. Generate a new token
3. In the API docs, click "Authorize" and paste the token
4. Click Authorize to establish session

**Important**: The token does not work if the user creating the token has a leaving date that has passed or if the user is deleted. Use a service account for production integrations.

### Rate Limits

- 500 calls per minute per user token
- 10,000 calls per hour per user token
- Historical Data APIs are exempt from these limits

### Required Permissions

Enable these role-based permissions under WFM > Permissions:

**API Access permissions:**
- Read forecast
- Read organization
- Read request
- Read schedule
- Write forecast
- Write organization
- Write request
- Write schedule

**Web permission:**
- Personal access tokens

### Resources

Four primary resource types with read and write operations:
- **Forecast** — contact volume predictions by interval
- **Organization** — business units, teams, sites
- **Request** — time-off and schedule change requests
- **Schedule** — agent schedules, shifts, activities

## Historical Data API

### Access

Documentation URL: `https://[customerURL].com/historical-data/docs/index.html`

Example: `https://mtusce03.teleopticloud.com/historical-data/docs/index.html`

### Base URL

`https://[customerURL].com/historical-data/api/v1`

### Authentication

Uses tenant keys (different from personal access tokens):
1. Navigate to your organization's historical data API URL
2. Select Authorize
3. Paste the tenant key provided by your Calabrio ONE contact person
4. Complete authorization
5. Use the data source key (also provided by your contact)

### Rate Limits

Not subject to the standard WFM API rate limits.

### Support

Calabrio recommends engaging Calabrio ONE Professional Services to set up a managed service plan for historical data integrations.

## HR Integration API

### Access

Documentation at tenant-specific Swagger URL:
`https://[customerURL].com/api/docs/index.html#/`

Example: `https://mtdemousce01.teleopticloud.com/api/docs/index.html#/`

### Available Operations

**Query APIs:**
- All Absences API — retrieve all absence records
- Schedule Absence By PersonIDs API — get absences for specific people
- All Business Units API — list all business units

**Command APIs:**
- Add or Update Person Account for Person
- Add Full Day Absence Request
- Add Intraday Absence Request
- Remove Full Day Absence
- Remove Part Day Absence
- Add Part Day Absence

Three different integration approaches are available, each providing varying functionality for specific HR system needs.

## Postman Collection

Public Postman workspace available at: https://www.postman.com/calabriose

Contains pre-built API request collections for testing and exploration.

## GitHub

Organization: https://github.com/Teleopti (33 public repos)

Notable repos:
- `RTASend-Curl` — Real-time adherence data sender (curl examples)
- `RTASend-CSharp` — Real-time adherence data sender (C# implementation)
- `AWS-Connect-Integration` — Amazon Connect integration examples
- `sdk-sample` — SDK usage samples

## Developer Program

https://www.calabrio.com/developer-program/

- Direct access to documentation and support
- Submit integrations to the Calabrio Marketplace
- Developer and program support
- Reseller, Services, and Developer partner tracks
