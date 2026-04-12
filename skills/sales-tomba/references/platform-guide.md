# Tomba Platform Guide

## Domain Search
- **What it is**: Enter a domain (e.g., `stripe.com`) and Tomba returns all known email addresses at that organization, along with names, titles, departments, social links, and confidence scores
- **Key filters**: Department (engineering, sales, marketing, hr, finance, etc.), seniority (junior, senior, executive), country, technology stack
- **Pagination**: Results paginated with `page` and `limit` (10, 20, or 50 per page)
- **Email pattern detection**: Tomba identifies the email format a company uses (e.g., `first.last@`, `firstinitial+last@`) — use the Email Format endpoint to check this before guessing
- **Organization data included**: Company size, revenue, industry, social links, tech stack, founding year, location
- **Best practices**: Use department and seniority filters to narrow results to decision-makers. Export results to a lead list for campaign use.

## Email Finder
- **What it is**: Provide a person's name + company domain, and Tomba returns their most likely email address with a confidence score
- **Required inputs**: Domain + full name (or first name + last name)
- **Output**: Email address, confidence score (0-100), verification status, sources
- **Best practices**: Always verify the found email with the Email Verifier before sending. Higher confidence scores (90+) are more reliable.

## Email Verifier
- **What it is**: Real-time SMTP/MX validation — checks whether an email address is deliverable
- **Validation checks**: Format validation, MX record check, SMTP verification, catch-all detection, disposable email detection
- **Verification statuses**: valid, invalid, accept_all (catch-all domain), unknown
- **Speed**: Results in under 1 second for most emails
- **Best practices**: Always verify emails before outbound campaigns to keep bounce rate <3%. Batch verify lists before importing into campaign tools. Be cautious with "accept_all" — these domains accept everything but may still bounce.

## Email Enrichment
- **What it is**: Provide an email address and get back person + company data — name, title, company, social handles, location, and more
- **Output fields**: Full name, job title, company name, industry, social profiles (LinkedIn, Twitter), location, phone (if available)
- **Use case**: Enrich inbound leads, fill in missing CRM fields, segment contacts by firmographic data
- **Best practices**: Use enrichment to fill gaps in CRM records before outbound. Combine with domain search for full account coverage.

## Author Finder
- **What it is**: Provide an article/blog URL and Tomba returns the author's email and profile data
- **Use case**: PR outreach, journalist contact, content marketing partnerships
- **Best practices**: Great for reaching out to blog authors, journalists, or content creators. Verify the email before sending.

## LinkedIn Finder
- **What it is**: Provide a LinkedIn profile URL and Tomba returns the associated professional email
- **Options**: `full=true` returns all associated emails, not just the primary one
- **Use case**: Sales prospecting from LinkedIn, recruiter outreach
- **Best practices**: Use the browser extension to find emails while browsing LinkedIn. Combine with enrichment for full contact profiles.

## Phone Finder
- **What it is**: Discover direct dial and mobile phone numbers for contacts
- **Access**: Available as an option on domain search and finder endpoints (`enrich_mobile=true`)
- **Best practices**: Phone numbers cost more credits than email lookups. Only request phone data for contacts you plan to call.

## Bulk Operations
- **What it is**: Process thousands of records at once — bulk email finder, bulk verifier, bulk domain search, bulk LinkedIn finder, bulk enrichment, bulk phone finder
- **Scale**: Up to 10,000 records per batch
- **Async processing**: Bulk jobs run in background. Use `webhook_url` parameter to get notified when complete.
- **Best practices**: Verify your input list format before bulk upload. Use webhook callbacks instead of polling for completion. Start with a small test batch (50-100) to validate results before processing the full list.

## Leads & Lead Lists
- **What it is**: Save, organize, and manage contacts discovered through Tomba's search tools
- **Features**: Create lists, add contacts from any search, filter and export
- **Use case**: Build targeted campaign lists, organize contacts by account or campaign
- **Best practices**: Create separate lists per campaign or persona. Export to CRM or campaign tool when ready for outreach.

## Browser Extensions
- **Available for**: Chrome, Edge, Safari, Firefox
- **Features**: Find emails while browsing any website, LinkedIn integration, domain search from any page
- **Best practices**: Pin the extension for quick access. Use on company "About" pages, LinkedIn profiles, and blog author pages for fastest results.

## Google Sheets & Excel
- **Google Sheets add-on**: Run domain search, email finder, and verifier directly in your spreadsheet
- **Excel add-in**: Same capabilities in Microsoft Excel
- **Best practices**: Great for enriching an existing spreadsheet of companies or contacts without leaving the spreadsheet. Use for batch processing when you don't need the full API.

## Data Model

| Entity | Key fields | Notes |
|---|---|---|
| **Email result** | email, first_name, last_name, full_name, gender, phone_number, type, country, position, department, seniority, twitter, linkedin, score, verification, sources | Core output from domain search and finder |
| **Organization** | website_url, organization, location, social_links, industries, founded, company_size, company_type, revenue, description, pattern, keywords | Returned alongside domain search results |
| **Verification** | email, status (valid/invalid/accept_all/unknown), is_disposable, is_webmail | Output from verifier |
| **Enrichment** | email, first_name, last_name, position, company, social profiles, location, phone | Output from enrichment endpoint |
| **Email format** | format, percentage | Pattern used by a domain (e.g., first.last@ at 85%) |

## API Quick Reference

| Endpoint | Method | Path | What it does |
|---|---|---|---|
| Domain Search | GET | `/v1/domain-search` | Find all emails at a domain |
| Email Finder | GET | `/v1/email-finder` | Find a specific person's email |
| Email Verifier | GET | `/v1/verifier` | Validate an email address |
| Email Enrichment | GET | `/v1/enrich` | Enrich an email with person/company data |
| Author Finder | GET | `/v1/author-finder` | Find article author's email |
| LinkedIn Finder | GET | `/v1/linkedin` | Find email from LinkedIn URL |
| Phone Finder | GET | `/v1/phone-finder` | Find phone numbers |
| Email Count | GET | `/v1/email-count` | Count emails at a domain by department/seniority |
| Email Format | GET | `/v1/email-format` | Get email patterns used at a domain |
| Email Sources | GET | `/v1/email-sources` | Find where an email appears on the web |
| Domain Status | GET | `/v1/domain-status` | Check if domain is webmail/disposable |
| Similar Domains | GET | `/v1/similar` | Find similar/competitor domains |
| Technology | GET | `/v1/technology` | Detect tech stack of a domain |

**Base URL**: `https://api.tomba.io/v1/`
**Auth**: `X-Tomba-Key` + `X-Tomba-Secret` headers
**Rate limits**: 429 returned when exceeded (specific thresholds vary by plan)
**SDKs**: JavaScript, Python, PHP, Ruby, Go, Rust, C#, Dart, Elixir, Lua, Perl, R (13+ official libraries)
**Full reference**: See `references/tomba-api-reference.md`

## Integrations

| Integration | Type | What it does |
|---|---|---|
| **Salesforce** | CRM | Sync discovered contacts to Salesforce |
| **HubSpot** | CRM | Direct email integration, enrich CRM records |
| **Pipedrive** | CRM | Sync findings to Pipedrive contacts |
| **Zapier** | Automation | 8,000+ app connections — trigger on domain search, email find, enrichment |
| **Make** | Automation | Visual automation workflows with Tomba actions |
| **n8n** | Automation | Self-hosted automation with Tomba nodes |
| **Pabbly** | Automation | Workflow automation integration |
| **Integrately** | Automation | Simple integration automation |
| **Pipedream** | Automation | Developer-focused workflow automation |
| **Google Sheets** | Productivity | Add-on for in-spreadsheet email finding and verification |
| **Excel** | Productivity | Add-in for desktop spreadsheet workflows |
| **Airtable** | Productivity | Organize contact data in Airtable |
| **MCP** | AI | Model Context Protocol server (local + remote) for AI agent integration |

## Pricing (as of March 2026 — verify current pricing)

| Plan | Price/mo | Searches | Verifications | Notes |
|---|---|---|---|---|
| Free | $0 | 25 | 50 | Basic access, no credit card required |
| Starter | $39 | 1,000 | 2,000 | API access, bulk operations, browser extension |
| Growth | $89 | 5,000 | 10,000 | Expanded quotas, team sharing |
| Pro | $189 | 20,000 | 40,000 | Webhooks, full domain search results, downloads |
| Enterprise | $389 | 50,000 | 100,000 | Maximum tier, custom plans available above this |

All paid plans include API access, bulk operations, browser extensions, and team member invitations.
