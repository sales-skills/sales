<!-- Source: https://developer.leadiq.com/ and https://github.com/leadiq/dataiq-api-specs -->
# LeadIQ GraphQL API Reference

## Endpoint

```
https://api.leadiq.com/graphql
```

## Authentication

HTTP Basic Authentication. Use your API key as the username with an empty password.

```
Authorization: Basic base64(api_key:)
```

API keys are found in: Settings → API Keys within your LeadIQ account.

## Rate Limits

- Free plans: 10 requests/minute
- Paid plans: 60 requests/minute

## Queries

### searchPeople
Find individuals by name, company, LinkedIn profile, email, or phone.

**Input filters**: name, company name, domain, LinkedIn URL, email address, phone number.

**Profile filters**: HasWorkEmail, HasVerifiedWorkPhone (filter by available contact info type).

**Returns**: Person records with name, LinkedIn details, current positions, verified emails (with status: verified/unverified/catchAll), phone numbers (with type: mobile/direct/work), education, social profiles.

### searchCompany
Find companies by name, domain, country, or LinkedIn URL.

**Returns**: Company profiles with technology stacks, funding information, revenue ranges, hierarchies, and employment trend analytics.

### flatAdvancedSearch
Advanced contact search returning a flat list of people.

**Filters**: job title, seniority level, role/function, company size, geography, technologies, funding status, industry classification.

**Sort options**: name, seniority, title, update date.

### groupedAdvancedSearch
Same as flatAdvancedSearch but results grouped by company.

### account
Retrieve current user account details, subscription plans, and usage statistics.

**Returns**: billable usage statistics, trial limits, subscription status.

### workatoToken
Generate authentication tokens for Workato integration.

## Mutations

### submitPersonFeedback
Report data corrections for contact information. Mark information as valid or invalid.

**Endpoint**: REST-based at `/v1/feedback` (not GraphQL).

## Error Handling

- **400**: Bad request — invalid query syntax or missing required fields
- **401**: Invalid credentials — check API key encoding
- **429**: Rate limit exceeded — back off and retry

## Premium Features

- **MobilePhone add-on**: Access to mobile phone numbers (costs 10 credits per reveal)
- **MCP access**: Model Context Protocol integration for AI assistants

## Contact

API support: api@leadiq.com
Terms: https://leadiq.com/legal/terms-of-use
Developer portal: https://developer.leadiq.com/
