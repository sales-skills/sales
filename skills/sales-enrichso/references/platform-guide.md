# Enrich.so Platform Guide

## Reverse Email Lookup
- **What it does**: Takes an email address and returns the associated LinkedIn profile, job title, company, location, and 50+ data points
- **Endpoint**: `GET /v1/api/reverse-email-lookup` with `email` parameter
- **Data returned**: LinkedIn URL, full name, headline, job title, company name, company domain, location, profile picture, and additional enriched fields
- **Use cases**: Enrich CRM contacts, identify anonymous leads, append LinkedIn data to email lists, verify contact identity
- **Credit cost**: 1 credit per successful lookup (no charge if no match found — success-based model)

## LinkedIn Profile Enrichment
- **What it does**: Takes a LinkedIn profile URL and returns comprehensive profile data — education, work history, skills, contact info, network info, certifications
- **Endpoint**: `GET /v1/api/linkedin-by-url` with `url` parameter (LinkedIn profile URL)
- **Data returned**: Full name, headline, summary, current and past positions (company, title, dates), education (school, degree, dates), skills, certifications, languages, location, profile picture, connections count, follower count
- **Use cases**: Pre-call research, lead scoring with enriched data, building prospect dossiers, talent sourcing

## LinkedIn to Email
- **What it does**: Finds the email address associated with a LinkedIn profile URL
- **Endpoint**: Dedicated endpoint accepting LinkedIn profile URL
- **Use cases**: Outbound prospecting when you have a LinkedIn profile but need email for outreach

## Email Finder
- **What it does**: Finds a verified business email address from a person's name and company name or domain
- **Endpoint**: Accepts first name, last name, and company name or domain
- **Verification**: Returns confidence score and verification status — only charges credits for verified results
- **Use cases**: Building outbound email lists, finding decision-maker emails for account-based outreach

## Phone Number Finder / Mobile Finder
- **What it does**: Finds direct phone numbers and mobile numbers from LinkedIn profiles or enriched data
- **Endpoint**: Accepts LinkedIn profile URL or other identifiers
- **Use cases**: Cold calling campaigns, multi-channel outreach sequences (email + phone)

## Email to Phone
- **What it does**: Finds a phone number associated with an email address
- **Endpoint**: Accepts email address as input
- **Use cases**: Adding phone touchpoints to email-based prospect lists

## Company Data Lookup
- **What it does**: Returns comprehensive company information from a company name, domain, or LinkedIn company URL
- **Data returned**: Industry, company size (employee count), revenue estimates, founding year, headquarters location, description, tech stack, social media profiles, website, specialties
- **Use cases**: Account research, ICP matching, lead scoring by firmographic data, territory planning

## Company Funding & Traffic
- **What it does**: Returns funding history and web traffic data for a company
- **Data returned**: Funding rounds (series, amounts, dates), investors, total funding raised, web traffic estimates (monthly visits, traffic sources)
- **Use cases**: Identifying well-funded prospects, timing outreach around funding events, competitive intelligence

## Search Similar Companies
- **What it does**: Finds lookalike companies based on a LinkedIn company URL, with optional filters for location and employee size
- **Endpoint**: `POST /v1/api/similar-companies` with LinkedIn company URL and optional filters
- **Data returned**: List of similar companies with relevancy scores, company details, and LinkedIn URLs
- **Filters**: Location (country, region), employee count range
- **Use cases**: Expanding TAM from existing customers, finding new accounts that match your ICP, competitive landscape mapping

## Search Company Employees
- **What it does**: Finds employees at a company filtered by role, seniority, or department — returns detailed profiles
- **Endpoint**: Accepts company identifier and role/title filters
- **Data returned**: Employee profiles with name, title, LinkedIn URL, and enriched data
- **Use cases**: Finding decision-makers at target accounts, org chart mapping, multi-threading into accounts

## IP to Company
- **What it does**: Identifies the company associated with an IP address — works even for remote workers via ISP-to-company mapping
- **Endpoint**: Accepts IP address
- **Data returned**: Company name, domain, industry, size, location, LinkedIn URL
- **Use cases**: De-anonymizing website visitors, personalizing website content by company, intent-based outbound triggers

## Job Listings
- **What it does**: Searches real-time job postings for a company
- **Data returned**: Job titles, descriptions, locations, posting dates
- **Use cases**: Hiring signals for sales triggers (company hiring for a role = potential need for your product), competitive intelligence, talent sourcing

## Disposable Email Check
- **What it does**: Detects whether an email address is from a temporary/disposable email provider
- **Use cases**: Form validation, cleaning email lists, preventing fake signups

## Reverse Email Append
- **What it does**: Converts email hashes (MD5, SHA256) to actual email addresses
- **Use cases**: Matching hashed audience data to real contacts, data partnerships, identity resolution

## Email Validation
- **What it does**: Verifies email deliverability — checks MX records, mailbox existence, catch-all detection, role-based detection
- **Data returned**: Validation result (valid/invalid/risky), catch-all flag, role-based flag, disposable flag, free provider flag
- **Use cases**: Cleaning email lists before outreach, reducing bounce rates, protecting sender reputation
- **Free tool**: Basic email validation available without credits

## Bulk Enrichment
- **What it does**: Batch processing for any enrichment type — submit large datasets and get results asynchronously
- **Endpoint**: `POST /v1/api/bulk-enrichment` — submit job; `GET /v1/api/bulk-enrichment-results` — retrieve results by `uid`
- **Input methods**: CSV file upload, JSON array, or CSV URL
- **Supported types**: person, company, find-email, mobile-finder, linkedin-to-email
- **Webhook support**: Set `webhookUrl` parameter to receive a callback when the bulk job completes
- **Async workflow**: Submit job -> receive `uid` -> poll for results or wait for webhook callback
- **Use cases**: Enriching CRM exports, processing marketing lists, periodic data refresh

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Person** | Enriched individual profile | full_name, email, phone, linkedin_url, headline, job_title, company, location, skills, education, positions |
| **Company** | Enriched company record | name, domain, linkedin_url, industry, employee_count, revenue, founded, headquarters, tech_stack, social_profiles, specialties |
| **Funding** | Company funding data | rounds (series, amount, date, investors), total_funding |
| **Traffic** | Web traffic estimates | monthly_visits, traffic_sources, traffic_trend |
| **Similar Company** | Lookalike match | company_data, relevancy_score, linkedin_url |
| **Employee** | Company employee profile | name, title, linkedin_url, department, seniority |
| **Job Listing** | Active job posting | title, description, location, posted_date, company |
| **Email Validation** | Validation result | email, status (valid/invalid/risky), catch_all, disposable, role_based, free_provider |
| **Bulk Job** | Async enrichment job | uid, status, type, total_records, completed_records, webhook_url |

## API quick reference

- **Base URL**: `https://api.enrich.so`
- **Authentication**: Bearer token — `Authorization: Bearer <token>` header on all requests
- **Format**: JSON request and response bodies
- **Key endpoints**:
  - `GET /v1/api/reverse-email-lookup` — reverse email lookup (50+ data points)
  - `GET /v1/api/linkedin-by-url` — LinkedIn profile enrichment by URL
  - `POST /v1/api/find-email` — find email from name + company
  - `POST /v1/api/mobile-finder` — find phone number from profile
  - `POST /v1/api/linkedin-to-email` — find email from LinkedIn URL
  - `POST /v1/api/email-to-phone` — find phone from email
  - `GET /v1/api/company-lookup` — company data by name/domain/LinkedIn URL
  - `GET /v1/api/company-funding` — funding rounds and investors
  - `GET /v1/api/company-traffic` — web traffic estimates
  - `POST /v1/api/similar-companies` — find lookalike companies
  - `POST /v1/api/company-employees` — search employees by company and role
  - `GET /v1/api/ip-to-company` — identify company from IP address
  - `GET /v1/api/job-listings` — real-time job postings for a company
  - `GET /v1/api/disposable-email` — check if email is disposable
  - `POST /v1/api/reverse-email-append` — convert email hash to address
  - `GET /v1/api/email-validation` — verify email deliverability
  - `POST /v1/api/bulk-enrichment` — submit bulk enrichment job (async, returns uid)
  - `GET /v1/api/bulk-enrichment-results` — retrieve bulk job results by uid
- **Rate limits**: Vary by plan — higher tiers get higher throughput
- **SDKs / examples**: cURL, JavaScript, Python, Java, Ruby, PHP code examples in docs
- **Docs**: docs.enrich.so

## Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Zapier (reverse email lookup, IP to company triggers/actions), n8n, Make (Integromat) |
| **API** | REST API with Bearer token auth — integrate with any system that can make HTTP requests |
| **Free tools** | Company Logo Finder (get company logo by domain), Email Validation (free basic checks) |

## Pricing (USD, as of March 2026 — verify current pricing at enrich.so)

| Plan | Price | Key features |
|------|-------|-------------|
| **Free** | $0 | 25 credits to trial all endpoints |
| **Starter** | $59/mo | Basic API access, email verification, up to 10 team members |
| **Professional** | $99/mo | Higher credit volumes, all endpoints |
| **Scale** | $149/mo | Highest standard tier, priority support |
| **Enterprise / Custom** | Custom pricing | Volume discounts, dedicated support, custom integrations |
| **Pay-as-you-go** | From $20/100 credits | Top up credits without a monthly plan |

**Key pricing notes**:
- **Success-based credit model** — credits are only consumed when Enrich.so returns successfully verified data. No charge for lookups that return no results.
- Credit costs vary by endpoint — person enrichment, company lookup, email finder, and phone finder may consume different credit amounts.
- Bulk enrichment uses the same credits as individual lookups — no separate pricing.
