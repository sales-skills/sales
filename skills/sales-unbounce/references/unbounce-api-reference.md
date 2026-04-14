<!-- Source: https://developer.unbounce.com/api_reference/ -->

# Unbounce API Reference

**Version**: 0.4
**Base URL**: `https://api.unbounce.com`
**Auth**: API key (all plans) or OAuth 2.0 (case-by-case, contact api-team@unbounce.com)
**API access**: Available on all Unbounce pricing plans (subscriptions before June 2020 may have limitations)

## Authentication

### API Key
All endpoints require authentication via API key. Find your API key in your Unbounce account settings.

### OAuth 2.0
OAuth credentials are granted on a case-by-case basis. Initialized with client ID, client secret, and redirect URI.

## Endpoints

### Root

**GET /**
Retrieves API meta-information including documentation links, supported formats, and specifications.

### Accounts

**GET /accounts**
Retrieve the accounts collection. Entry point to the rest of the API.
- Parameters: `sort_order` (asc/desc, default: asc)

**GET /accounts/{account_id}**
Retrieve a single account by ID.

**GET /accounts/{account_id}/sub_accounts**
List sub-accounts for an account.
- Parameters: `sort_order`, `limit` (1-1000, default: 50), `offset`

**GET /accounts/{account_id}/pages**
Retrieve pages for an account.
- Parameters: `sort_order`, `limit`, `offset`, `from` (date), `to` (date)

### Sub-Accounts

**GET /sub_accounts/{sub_account_id}**
Retrieve a single sub-account.

**GET /sub_accounts/{sub_account_id}/domains**
List custom domains registered to a sub-account.
- Parameters: `sort_order`, `limit`, `offset`

**GET /sub_accounts/{sub_account_id}/page_groups**
List page groups.
- Parameters: `sort_order`, `limit`, `offset`

**GET /sub_accounts/{sub_account_id}/pages**
List pages within a sub-account.
- Parameters: `sort_order`, `limit`, `offset`, `from`, `to`

### Domains

**GET /domains/{domain_id}**
Retrieve a single domain.

**GET /domains/{domain_id}/pages**
List pages published to a specific domain.
- Parameters: `sort_order`, `limit`, `offset`

### Pages

**GET /pages**
Retrieve all pages accessible to the authenticated user.
- Parameters: `sort_order`, `limit`, `offset`, `role` (viewer/author), `with_stats` (boolean)

**GET /pages/{page_id}**
Retrieve a single page with optional test statistics and metadata.

**GET /pages/{page_id}/form_fields**
Retrieve form field definitions for a page.
- Parameters: `sort_order`, `limit`, `offset`, `include_sub_pages` (boolean)

**GET /pages/{page_id}/leads**
Retrieve leads (form submissions) for a page.
- Parameters: `sort_order`, `limit`, `offset`, `from`, `to`

**GET /pages/{page_id}/lead_deletion_request**
Manage lead deletion requests for GDPR/privacy compliance.

## Common patterns

### Pagination
All collection endpoints support `limit` (1-1000, default: 50) and `offset` parameters.

### Date filtering
Use `from` and `to` parameters in RFC 5322 date format to filter by date range.

### Count-only requests
Pass `count=true` to get only the total count without the collection array.

### Response format
All responses include metadata with:
- `location`: Self-referencing URL
- `documentation`: Link to API docs for the resource
- Related resource URIs for navigation

## Rate limits

Not explicitly documented. If rate-limited, implement exponential backoff.

## Notes

- API is read-only for most resources (GET endpoints). Creating/updating pages is done via the Unbounce UI.
- Lead data includes all form field values submitted by visitors.
- The `with_stats` parameter on page endpoints returns conversion statistics.
- API v0.3 was removed May 15, 2018. Use v0.4 only.
