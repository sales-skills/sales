---
name: sales-tomba
description: "Tomba.io platform help — domain search, email finder, email verifier, enrichment, author finder, LinkedIn finder, phone finder, bulk operations, browser extensions, API, integrations. Use when asking 'how do I do X in Tomba', finding emails with Tomba, verifying emails in Tomba, enriching contacts with Tomba, using the Tomba API, setting up Tomba integrations, or managing Tomba leads/lists. Do NOT use for enrichment strategy across tools (use /sales-enrich), building prospect lists (use /sales-prospect-list), cross-platform deliverability (use /sales-deliverability), or connecting tools generically (use /sales-integration)."
argument-hint: "[describe what you need help with in Tomba]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Tomba Platform Help

Help the user with Tomba.io platform questions — from domain search and email finding through verification, enrichment, bulk operations, API, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Tomba do you need help with?**
   - A) Domain Search — finding all emails at a company
   - B) Email Finder — finding a specific person's email
   - C) Email Verifier — validating email addresses
   - D) Email Enrichment — enriching contacts with company/social data
   - E) Author Finder — finding blog author emails
   - F) LinkedIn Finder — finding emails from LinkedIn profiles
   - G) Phone Finder — finding phone numbers
   - H) Bulk Operations — processing thousands of records at once
   - I) Leads & Lists — managing saved contacts and lists
   - J) Browser Extension — Chrome/Edge/Safari/Firefox extension
   - K) Google Sheets / Excel — add-on or add-in
   - L) API — programmatic access, automation, custom integration
   - M) Integrations — Zapier, HubSpot, Salesforce, Pipedrive, Make, n8n
   - N) Account & Billing — plans, credits, team members
   - O) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Recruiter
   - E) Marketing
   - F) Founder / solo seller
   - G) Developer / engineering
   - H) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Enrichment strategy across tools → `/sales-enrich`
- Building prospect lists / ICP definition → `/sales-prospect-list`
- Email deliverability / SPF/DKIM/DMARC → `/sales-deliverability`
- Buying signals and prioritization → `/sales-intent`
- Connecting tools via Zapier/webhooks → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Tomba platform reference

Provide module-by-module guidance based on the user's area:

### Domain Search
- **What it is**: Enter a domain (e.g., `stripe.com`) and Tomba returns all known email addresses at that organization, along with names, titles, departments, social links, and confidence scores
- **Key filters**: Department (engineering, sales, marketing, hr, finance, etc.), seniority (junior, senior, executive), country, technology stack
- **Pagination**: Results paginated with `page` and `limit` (10, 20, or 50 per page)
- **Email pattern detection**: Tomba identifies the email format a company uses (e.g., `first.last@`, `firstinitial+last@`) — use the Email Format endpoint to check this before guessing
- **Organization data included**: Company size, revenue, industry, social links, tech stack, founding year, location
- **Best practices**: Use department and seniority filters to narrow results to decision-makers. Export results to a lead list for campaign use.

### Email Finder
- **What it is**: Provide a person's name + company domain, and Tomba returns their most likely email address with a confidence score
- **Required inputs**: Domain + full name (or first name + last name)
- **Output**: Email address, confidence score (0-100), verification status, sources
- **Best practices**: Always verify the found email with the Email Verifier before sending. Higher confidence scores (90+) are more reliable.

### Email Verifier
- **What it is**: Real-time SMTP/MX validation — checks whether an email address is deliverable
- **Validation checks**: Format validation, MX record check, SMTP verification, catch-all detection, disposable email detection
- **Verification statuses**: valid, invalid, accept_all (catch-all domain), unknown
- **Speed**: Results in under 1 second for most emails
- **Best practices**: Always verify emails before outbound campaigns to keep bounce rate <3%. Batch verify lists before importing into campaign tools. Be cautious with "accept_all" — these domains accept everything but may still bounce.

### Email Enrichment
- **What it is**: Provide an email address and get back person + company data — name, title, company, social handles, location, and more
- **Output fields**: Full name, job title, company name, industry, social profiles (LinkedIn, Twitter), location, phone (if available)
- **Use case**: Enrich inbound leads, fill in missing CRM fields, segment contacts by firmographic data
- **Best practices**: Use enrichment to fill gaps in CRM records before outbound. Combine with domain search for full account coverage.

### Author Finder
- **What it is**: Provide an article/blog URL and Tomba returns the author's email and profile data
- **Use case**: PR outreach, journalist contact, content marketing partnerships
- **Best practices**: Great for reaching out to blog authors, journalists, or content creators. Verify the email before sending.

### LinkedIn Finder
- **What it is**: Provide a LinkedIn profile URL and Tomba returns the associated professional email
- **Options**: `full=true` returns all associated emails, not just the primary one
- **Use case**: Sales prospecting from LinkedIn, recruiter outreach
- **Best practices**: Use the browser extension to find emails while browsing LinkedIn. Combine with enrichment for full contact profiles.

### Phone Finder
- **What it is**: Discover direct dial and mobile phone numbers for contacts
- **Access**: Available as an option on domain search and finder endpoints (`enrich_mobile=true`)
- **Best practices**: Phone numbers cost more credits than email lookups. Only request phone data for contacts you plan to call.

### Bulk Operations
- **What it is**: Process thousands of records at once — bulk email finder, bulk verifier, bulk domain search, bulk LinkedIn finder, bulk enrichment, bulk phone finder
- **Scale**: Up to 10,000 records per batch
- **Async processing**: Bulk jobs run in background. Use `webhook_url` parameter to get notified when complete.
- **Best practices**: Verify your input list format before bulk upload. Use webhook callbacks instead of polling for completion. Start with a small test batch (50-100) to validate results before processing the full list.

### Leads & Lead Lists
- **What it is**: Save, organize, and manage contacts discovered through Tomba's search tools
- **Features**: Create lists, add contacts from any search, filter and export
- **Use case**: Build targeted campaign lists, organize contacts by account or campaign
- **Best practices**: Create separate lists per campaign or persona. Export to CRM or campaign tool when ready for outreach.

### Browser Extensions
- **Available for**: Chrome, Edge, Safari, Firefox
- **Features**: Find emails while browsing any website, LinkedIn integration, domain search from any page
- **Best practices**: Pin the extension for quick access. Use on company "About" pages, LinkedIn profiles, and blog author pages for fastest results.

### Google Sheets & Excel
- **Google Sheets add-on**: Run domain search, email finder, and verifier directly in your spreadsheet
- **Excel add-in**: Same capabilities in Microsoft Excel
- **Best practices**: Great for enriching an existing spreadsheet of companies or contacts without leaving the spreadsheet. Use for batch processing when you don't need the full API.

### Data Model

| Entity | Key fields | Notes |
|---|---|---|
| **Email result** | email, first_name, last_name, full_name, gender, phone_number, type, country, position, department, seniority, twitter, linkedin, score, verification, sources | Core output from domain search and finder |
| **Organization** | website_url, organization, location, social_links, industries, founded, company_size, company_type, revenue, description, pattern, keywords | Returned alongside domain search results |
| **Verification** | email, status (valid/invalid/accept_all/unknown), is_disposable, is_webmail | Output from verifier |
| **Enrichment** | email, first_name, last_name, position, company, social profiles, location, phone | Output from enrichment endpoint |
| **Email format** | format, percentage | Pattern used by a domain (e.g., first.last@ at 85%) |

### API Quick Reference

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

### Integrations

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

### Pricing (as of March 2026 — verify current pricing)

| Plan | Price/mo | Searches | Verifications | Notes |
|---|---|---|---|---|
| Free | $0 | 25 | 50 | Basic access, no credit card required |
| Starter | $39 | 1,000 | 2,000 | API access, bulk operations, browser extension |
| Growth | $89 | 5,000 | 10,000 | Expanded quotas, team sharing |
| Pro | $189 | 20,000 | 40,000 | Webhooks, full domain search results, downloads |
| Enterprise | $389 | 50,000 | 100,000 | Maximum tier, custom plans available above this |

All paid plans include API access, bulk operations, browser extensions, and team member invitations.

## Step 4 — Actionable guidance

Based on the user's specific question, provide:

1. **Step-by-step instructions** with exact UI navigation or API calls
2. **Configuration recommendations** with specific values (e.g., "set limit to 50 for faster pagination")
3. **Common pitfalls** for the specific workflow
4. **Verification steps** — how to confirm it's working correctly

### Common workflows

**Find all contacts at a target company**:
1. Domain Search with the company's domain → get all known emails
2. Filter by department (sales, engineering) and seniority (director+)
3. Verify the emails you plan to contact
4. Save to a lead list → export to CRM or campaign tool

**Find a specific person's email**:
1. Email Finder with their name + company domain → get the email + confidence score
2. If confidence <80%, check Email Format for the domain to validate the pattern
3. Verify the email with Email Verifier before sending
4. Enrich the contact for additional context (title, social profiles)

**Clean an existing list before a campaign**:
1. Bulk verify all emails → separate into valid, invalid, accept_all
2. Remove invalid emails immediately
3. For accept_all: include but monitor bounce rates closely
4. Enrich missing fields (names, titles) for personalization
5. Export clean, enriched list to your campaign tool

**Monitor competitor tech stack**:
1. Technology endpoint → see what tools a company uses
2. Similar Domains → find competitor/adjacent companies
3. Combine with domain search to find the right contacts
4. Use for technographic-based outreach → see `/sales-intent`

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't skip email verification after finding.** The Email Finder returns probable emails based on pattern matching — they're not guaranteed deliverable. Always run found emails through the Email Verifier before adding them to campaigns. Sending to unverified emails destroys sender reputation.
- **Don't ignore the Email Format endpoint.** Before searching for individual emails, check the domain's email format first (`/v1/email-format`). If you know the company uses `first.last@domain.com` (85% match), you can validate results faster and skip low-confidence guesses.
- **Don't waste credits on unfiltered domain searches.** A domain search on a large company can return thousands of results. Use department, seniority, and country filters to narrow to decision-makers you'll actually contact. Each search costs credits regardless of how many results you use.
- **Don't forget about webhook callbacks for bulk jobs.** Bulk operations are asynchronous — the API returns immediately but processing continues in background. Use the `webhook_url` parameter to get notified when done instead of polling. Polling wastes API calls and may hit rate limits.
- **Don't assume all plans include the same features.** Webhooks require Pro plan or above. Full domain search result downloads are plan-gated. Check your plan's limits before building workflows that depend on these features.

## Step 5 — Related skills

- `/sales-enrich` — Enrichment strategy across tools (waterfall enrichment, CRM hygiene, credit optimization)
- `/sales-prospect-list` — Build targeted prospect lists with ICP definition and segmentation
- `/sales-deliverability` — Email deliverability setup (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-intent` — Interpret buying signals and prioritize accounts (use Tomba's tech detection as a signal)
- `/sales-integration` — Connect Tomba to CRM and other tools via Zapier, Make, or API
- `/sales-cadence` — Design outbound sequences for contacts found in Tomba
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Finding emails at a target company
**User says**: "I need to find all the sales leaders at Stripe using Tomba"
**Skill does**:
1. Recommends Domain Search on `stripe.com` with department=sales and seniority=executive,senior
2. Shows how to filter results and interpret confidence scores
3. Recommends verifying emails before outreach
4. Suggests saving results to a lead list and exporting to campaign tool
**Result**: Filtered, verified list of sales leaders at Stripe ready for outreach

### Example 2: Bulk email verification before a campaign
**User says**: "I have a CSV of 3,000 contacts and need to verify all the emails before launching a Lemlist campaign"
**Skill does**:
1. Walks through bulk verification setup — CSV format, upload process
2. Recommends using webhook callback for async completion notification
3. Explains how to interpret results (valid, invalid, accept_all, unknown)
4. Advises removing invalid emails and flagging accept_all for monitoring
5. Points to `/sales-lemlist` for importing the clean list into Lemlist
**Result**: Verified contact list with clear action per status, ready for campaign import

### Example 3: Using the Tomba API for automated enrichment
**User says**: "I want to auto-enrich new HubSpot contacts with Tomba data via Zapier"
**Skill does**:
1. Outlines the Zapier workflow: HubSpot "New Contact" trigger → Tomba "Enrich" action → HubSpot "Update Contact" action
2. Explains field mapping from Tomba enrichment to HubSpot properties
3. Warns about credit consumption and recommends filtering to ICP-matching contacts only
4. Points to `/sales-integration` for advanced multi-tool workflows
**Result**: Automated enrichment pipeline from HubSpot → Tomba → HubSpot with credit-conscious filtering

## Troubleshooting

### Low match rate on domain search
**Symptom**: Domain search returns very few results for a company you know has many employees
**Cause**: Tomba's database may have limited coverage for that specific company, especially smaller or newer companies
**Solution**: Try searching by company name instead of domain. Use the Email Finder with specific names (from LinkedIn) for targeted lookups. Consider waterfall enrichment with multiple providers — see `/sales-enrich`.

### Email Verifier returns "unknown"
**Symptom**: Verification returns "unknown" status instead of valid/invalid
**Cause**: The mail server didn't respond definitively — this happens with some corporate email servers that limit SMTP verification
**Solution**: Don't treat "unknown" as "valid." For high-value prospects, include them but monitor bounce rates closely. For bulk campaigns, exclude unknowns to protect sender reputation.

### API rate limit errors (429)
**Symptom**: Getting 429 Too Many Requests responses from the API
**Cause**: Exceeding your plan's rate limit — making too many requests too quickly
**Solution**: Implement exponential backoff (wait 1s, 2s, 4s between retries). Batch requests where possible. Use bulk endpoints instead of making individual calls in a loop. If consistently hitting limits, consider upgrading your plan.
