<!-- Source: https://docs.amplemarket.com/llms-full.txt -->
<!-- Fetched: 2026-04-20 -->

# Amplemarket API Reference

## Base URL
`https://api.amplemarket.com`

## Authentication
Bearer token in Authorization header: `Authorization: Bearer {{api-key}}`

## Rate Limits
- **Default**: 500 requests/minute across all endpoints
- **Endpoint-specific limits**:
  - `/people/search`: 300/minute
  - `/people/find`: 350/minute
  - `/sequences/{id}/leads`: 30/minute
  - `/calls/{id}/recording`: 50/hour
  - `/mailboxes/{id}`: 1/minute, 1/hour per mailbox

## Core API Endpoints

### Accounts & Users
- `GET /account-info` - Get account details
- `GET /accounts` - List accounts
- `GET /accounts/{id}` - Retrieve specific account
- `GET /users` - List users

### People Management
- `GET /contacts` - Retrieve contacts
- `GET /contacts/{id}` - Retrieve single contact
- `GET /contacts/email/{email}` - Find contact by email
- `POST /people/search` - Search people (300 requests/minute limit)
- `GET /people/find` - Single person enrichment (0.5-1 email credit + 1 phone credit)
- `POST /people/enrichment-requests` - Batch enrichment (up to 10k per request)
- `GET /people/enrichment-requests/{id}` - Retrieve enrichment results
- `PATCH /people/enrichment-requests/{id}` - Cancel enrichment

### Companies
- `GET /companies/find` - Find company by LinkedIn URL or domain
- `POST /companies/search` - Search companies
- `POST /companies/enrichment-requests` - Batch company enrichment (10k max)
- `GET /companies/enrichment-requests/{id}` - Retrieve results
- `PATCH /companies/enrichment-requests/{id}` - Cancel enrichment

### Email Validation
- `POST /email-validations` - Start validation (100k max, 15k/hour limit)
- `GET /email-validations/{id}` - Poll results with `Retry-After` header
- `PATCH /email-validations/{id}` - Cancel validation
- Results include: `deliverable`, `risky`, `unknown`, `undeliverable`

### Calls
- `POST /calls` - Log call with metadata (duration, transcription, recording)
- `GET /calls` - List calls
- `GET /calls/{id}/recording` - Get recording (50/hour limit, audio/mpeg format)
- `GET /calls/dispositions` - List disposition types

### Lead Lists
- `POST /lead-lists` - Create list (supports LinkedIn URLs, emails, names)
- `GET /lead-lists` - List all lead lists
- `GET /lead-lists/{id}` - Retrieve with pagination
- `POST /lead-lists/{id}/leads` - Add leads (10k at a time)

### Sequences
- `GET /sequences` - List sequences
- `POST /sequences/{id}/leads` - Add leads to sequence

### Exclusion Lists
- `GET /excluded-emails` - List excluded emails
- `POST /excluded-emails` - Add email exclusions
- `DELETE /excluded-emails` - Remove exclusions
- `GET /excluded-domains` - List excluded domains
- `POST /excluded-domains` - Add domain exclusions
- `DELETE /excluded-domains` - Remove exclusions

### Custom Signals (Duo)
- `POST /custom_signals/{token}/entries` - Send webhook data (accepts dynamic JSON, flattens nested objects to dot-notation)

### Tasks
- `GET /tasks` - List tasks
- `POST /tasks/{id}/complete` - Mark task complete
- `POST /tasks/{id}/skip` - Skip task
- `GET /tasks/statuses` - List available statuses
- `GET /tasks/types` - List task types

### Mailboxes
- `GET /mailboxes` - List mailboxes
- `PATCH /mailboxes/{id}` - Update daily email limit

## Response Format
- Media type: `application/json`
- Pagination: Cursor-based with `page[size]`, `page[before]`, `page[after]`
- Links provided in `_links` object (HAL-inspired)
- Errors in `_errors` array with `code`, `title`, `detail`, `status`

## Error Codes
- `insufficient_credits`
- `person_not_found`
- `unauthorized`
- `unsupported_value`
- `missing_field`
- `internal_server_error`

## Data Models

### Company Object
Includes: name, LinkedIn URL, website, industry, headcount, funding, technologies, locations (with address details), B2B/B2C flags, estimated revenue

### Contact/Person Object
Includes: name, email, phone (if revealed), LinkedIn URL, company association

### Supported Filters
Industries (1000+), departments, job functions, company size, funding stage
