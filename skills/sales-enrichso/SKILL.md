---
name: sales-enrichso
description: "Enrich.so platform help — real-time B2B data enrichment API with 50+ data points per lookup and success-based billing. Key capabilities: reverse email lookup, LinkedIn profile enrichment, email/phone finders, company data, similar company search, employee search, IP to company, and bulk enrichment. Use when enriching contacts by email or LinkedIn URL, finding emails/phones from name+company, looking up company data, running bulk enrichment, or working with the Enrich.so API. Do NOT use for cross-platform enrichment strategy (use /sales-enrich), email deliverability strategy (use /sales-deliverability), or prospect list strategy (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in Enrich.so]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, linkedin, platform]
---
# Enrich.so Platform Help

Help the user with Enrich.so platform questions — from Reverse Email Lookup and LinkedIn Profile Enrichment through Email/Phone Finders, Company Data, Similar Company Search, Employee Search, IP to Company, Job Listings, Bulk Enrichment, and Email Validation. Enrich.so is a real-time B2B data enrichment API platform providing 50+ data points per lookup with a success-based credit model (only pay for verified results).

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Enrich.so do you need help with?**
   - A) Reverse Email Lookup — find LinkedIn profile, job title, company, and 50+ data points from an email address
   - B) LinkedIn Profile Enrichment — get full profile data from a LinkedIn URL (education, positions, skills, contact info, network info)
   - C) Email Finder — find verified business email from name + company, or LinkedIn to Email
   - D) Phone Number Finder — find phone numbers from profiles, Email to Phone, Mobile Finder
   - E) Company Data Lookup — company details by name, domain, or LinkedIn URL (industry, size, revenue, tech stack, social profiles)
   - F) Company Funding & Traffic — funding rounds, investors, amounts, web traffic estimates
   - G) Search Similar Companies — find lookalike companies by LinkedIn URL with filters (location, employee size)
   - H) Search Company Employees — find decision-makers by company and role with detailed profiles
   - I) IP to Company — identify company from IP address (including remote workers)
   - J) Job Listings — real-time company job postings search
   - K) Bulk Enrichment — batch processing via CSV upload, JSON array, or CSV URL with webhook callbacks
   - L) Email Validation / Disposable Email Check / Reverse Email Append
   - M) Integrations / API — REST API, Zapier, n8n, Make, webhooks
   - N) Account / Billing — plans, pricing, credits
   - O) Something else — describe it

2. **What's your role?**
   - A) Sales / SDR / BDR
   - B) RevOps / Sales ops
   - C) Developer / engineer
   - D) Growth / marketing
   - E) Recruiter / talent acquisition
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cross-platform enrichment strategy / multi-tool enrichment -> `/sales-enrich`
- Email deliverability / verification strategy (not Enrich.so-specific) -> `/sales-deliverability`
- Prospect list building strategy -> `/sales-prospect-list`
- Connecting Enrich.so to other tools via middleware -> `/sales-integration`
- Apollo.io-specific questions -> `/sales-apollo`
- ZoomInfo-specific questions -> `/sales-zoominfo`
- Clearbit-specific questions -> `/sales-clearbit`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Enrich.so platform reference

Provide module-by-module guidance based on the user's area:

### Reverse Email Lookup
- **What it does**: Takes an email address and returns the associated LinkedIn profile, job title, company, location, and 50+ data points
- **Endpoint**: `GET /v1/api/reverse-email-lookup` with `email` parameter
- **Data returned**: LinkedIn URL, full name, headline, job title, company name, company domain, location, profile picture, and additional enriched fields
- **Use cases**: Enrich CRM contacts, identify anonymous leads, append LinkedIn data to email lists, verify contact identity
- **Credit cost**: 1 credit per successful lookup (no charge if no match found — success-based model)

### LinkedIn Profile Enrichment
- **What it does**: Takes a LinkedIn profile URL and returns comprehensive profile data — education, work history, skills, contact info, network info, certifications
- **Endpoint**: `GET /v1/api/linkedin-by-url` with `url` parameter (LinkedIn profile URL)
- **Data returned**: Full name, headline, summary, current and past positions (company, title, dates), education (school, degree, dates), skills, certifications, languages, location, profile picture, connections count, follower count
- **Use cases**: Pre-call research, lead scoring with enriched data, building prospect dossiers, talent sourcing

### LinkedIn to Email
- **What it does**: Finds the email address associated with a LinkedIn profile URL
- **Endpoint**: Dedicated endpoint accepting LinkedIn profile URL
- **Use cases**: Outbound prospecting when you have a LinkedIn profile but need email for outreach

### Email Finder
- **What it does**: Finds a verified business email address from a person's name and company name or domain
- **Endpoint**: Accepts first name, last name, and company name or domain
- **Verification**: Returns confidence score and verification status — only charges credits for verified results
- **Use cases**: Building outbound email lists, finding decision-maker emails for account-based outreach

### Phone Number Finder / Mobile Finder
- **What it does**: Finds direct phone numbers and mobile numbers from LinkedIn profiles or enriched data
- **Endpoint**: Accepts LinkedIn profile URL or other identifiers
- **Use cases**: Cold calling campaigns, multi-channel outreach sequences (email + phone)

### Email to Phone
- **What it does**: Finds a phone number associated with an email address
- **Endpoint**: Accepts email address as input
- **Use cases**: Adding phone touchpoints to email-based prospect lists

### Company Data Lookup
- **What it does**: Returns comprehensive company information from a company name, domain, or LinkedIn company URL
- **Data returned**: Industry, company size (employee count), revenue estimates, founding year, headquarters location, description, tech stack, social media profiles, website, specialties
- **Use cases**: Account research, ICP matching, lead scoring by firmographic data, territory planning

### Company Funding & Traffic
- **What it does**: Returns funding history and web traffic data for a company
- **Data returned**: Funding rounds (series, amounts, dates), investors, total funding raised, web traffic estimates (monthly visits, traffic sources)
- **Use cases**: Identifying well-funded prospects, timing outreach around funding events, competitive intelligence

### Search Similar Companies
- **What it does**: Finds lookalike companies based on a LinkedIn company URL, with optional filters for location and employee size
- **Endpoint**: `POST /v1/api/similar-companies` with LinkedIn company URL and optional filters
- **Data returned**: List of similar companies with relevancy scores, company details, and LinkedIn URLs
- **Filters**: Location (country, region), employee count range
- **Use cases**: Expanding TAM from existing customers, finding new accounts that match your ICP, competitive landscape mapping

### Search Company Employees
- **What it does**: Finds employees at a company filtered by role, seniority, or department — returns detailed profiles
- **Endpoint**: Accepts company identifier and role/title filters
- **Data returned**: Employee profiles with name, title, LinkedIn URL, and enriched data
- **Use cases**: Finding decision-makers at target accounts, org chart mapping, multi-threading into accounts

### IP to Company
- **What it does**: Identifies the company associated with an IP address — works even for remote workers via ISP-to-company mapping
- **Endpoint**: Accepts IP address
- **Data returned**: Company name, domain, industry, size, location, LinkedIn URL
- **Use cases**: De-anonymizing website visitors, personalizing website content by company, intent-based outbound triggers

### Job Listings
- **What it does**: Searches real-time job postings for a company
- **Data returned**: Job titles, descriptions, locations, posting dates
- **Use cases**: Hiring signals for sales triggers (company hiring for a role = potential need for your product), competitive intelligence, talent sourcing

### Disposable Email Check
- **What it does**: Detects whether an email address is from a temporary/disposable email provider
- **Use cases**: Form validation, cleaning email lists, preventing fake signups

### Reverse Email Append
- **What it does**: Converts email hashes (MD5, SHA256) to actual email addresses
- **Use cases**: Matching hashed audience data to real contacts, data partnerships, identity resolution

### Email Validation
- **What it does**: Verifies email deliverability — checks MX records, mailbox existence, catch-all detection, role-based detection
- **Data returned**: Validation result (valid/invalid/risky), catch-all flag, role-based flag, disposable flag, free provider flag
- **Use cases**: Cleaning email lists before outreach, reducing bounce rates, protecting sender reputation
- **Free tool**: Basic email validation available without credits

### Bulk Enrichment
- **What it does**: Batch processing for any enrichment type — submit large datasets and get results asynchronously
- **Endpoint**: `POST /v1/api/bulk-enrichment` — submit job; `GET /v1/api/bulk-enrichment-results` — retrieve results by `uid`
- **Input methods**: CSV file upload, JSON array, or CSV URL
- **Supported types**: person, company, find-email, mobile-finder, linkedin-to-email
- **Webhook support**: Set `webhookUrl` parameter to receive a callback when the bulk job completes
- **Async workflow**: Submit job -> receive `uid` -> poll for results or wait for webhook callback
- **Use cases**: Enriching CRM exports, processing marketing lists, periodic data refresh

### Data model

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

### API quick reference

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

### Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Zapier (reverse email lookup, IP to company triggers/actions), n8n, Make (Integromat) |
| **API** | REST API with Bearer token auth — integrate with any system that can make HTTP requests |
| **Free tools** | Company Logo Finder (get company logo by domain), Email Validation (free basic checks) |

### Pricing (USD, as of March 2026 — verify current pricing at enrich.so)

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

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Enriching a list of email contacts with LinkedIn data**:
   1. Prepare your list as a CSV with an `email` column
   2. Use the Bulk Enrichment endpoint: `POST /v1/api/bulk-enrichment` with type `person` and upload your CSV (or pass a JSON array or CSV URL)
   3. Include `webhookUrl` in the request body to receive a callback when processing completes — avoids polling
   4. Retrieve results: `GET /v1/api/bulk-enrichment-results?uid=<uid>` using the uid returned from the submit call
   5. Results include LinkedIn URL, job title, company, location, and 50+ data points for each matched email
   6. Import enriched data back into your CRM — map fields to your CRM's contact properties
   7. Only successfully enriched records consume credits — no charge for unmatched emails

2. **Finding decision-maker emails at target accounts**:
   1. Start with your target company's LinkedIn URL or domain
   2. Use Search Company Employees to find people by role: filter for titles like "VP Sales", "Head of Engineering", "CTO"
   3. For each matching employee, use LinkedIn to Email to get their business email address
   4. Validate each email with the Email Validation endpoint before outreach — check for catch-all domains and invalid mailboxes
   5. Optionally use the Phone Number Finder to add phone touchpoints for multi-channel sequences
   6. For large account lists, use Bulk Enrichment with type `find-email` to process in batch

3. **De-anonymizing website visitors with IP to Company**:
   1. Capture visitor IP addresses from your web server logs or analytics platform
   2. Call `GET /v1/api/ip-to-company` with each IP address
   3. Enrich.so returns the associated company name, domain, industry, size, and LinkedIn URL — works for remote workers too
   4. Match returned companies against your ICP criteria (industry, size, revenue) to prioritize follow-up
   5. Use Company Data Lookup to get full firmographic details on high-priority matches
   6. Use Search Company Employees to find the right contact at each identified company
   7. Automate the pipeline with Zapier (IP to Company trigger) or your integration platform of choice

4. **Building a lookalike company list**:
   1. Identify your best customers' LinkedIn company URLs
   2. Call `POST /v1/api/similar-companies` with each URL — optionally filter by location and employee size to match your ICP
   3. Results include relevancy scores — prioritize companies with scores above your chosen threshold
   4. Enrich top matches with Company Data Lookup for full firmographics (industry, revenue, tech stack)
   5. Use Search Company Employees to find decision-makers at each new target account
   6. Use Email Finder or LinkedIn to Email to get contact details for outreach

5. **Setting up Enrich.so API integration**:
   1. Sign up at enrich.so and retrieve your API token from the dashboard
   2. Set the Authorization header on all requests: `Authorization: Bearer <your-token>`
   3. Test with a single lookup: `GET https://api.enrich.so/v1/api/reverse-email-lookup?email=test@example.com`
   4. Handle responses: check the HTTP status code — 200 for success, 404 for no match (no credit charged), 401 for auth errors, 429 for rate limits
   5. For bulk workflows, use the async bulk enrichment endpoint rather than looping individual calls — more efficient and avoids rate limits
   6. Set up webhook callbacks for bulk jobs to avoid polling: include `webhookUrl` in the bulk request body
   7. Monitor credit usage in the Enrich.so dashboard — set up alerts to avoid unexpected depletion

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Success-based billing means no charge for misses, but credit costs vary by endpoint — check the pricing page for per-endpoint credit costs before budgeting.** A person enrichment lookup may cost a different number of credits than a company lookup or phone finder. Plan your credit allocation based on the mix of endpoints you use, not just the total number of lookups.
2. **Bulk enrichment is async — you must poll for results or use webhooks.** Submitting a bulk job returns a `uid` immediately, but results are not available in the response. You need to either poll `GET /v1/api/bulk-enrichment-results?uid=<uid>` until the job completes or include a `webhookUrl` in your request to get notified. Jobs with large datasets can take minutes to hours depending on size.
3. **LinkedIn profile enrichment depends on LinkedIn URL format — use the canonical profile URL.** Pass the full `https://www.linkedin.com/in/username` format. Shortened URLs, Sales Navigator URLs, or URLs with query parameters may not resolve correctly. Strip tracking parameters before calling the API.
4. **IP to Company accuracy varies — shared IPs, VPNs, and cloud providers will not resolve to a specific company.** The endpoint works best with corporate IP ranges and ISP-to-company mapping for remote workers, but visitors using VPNs, shared office spaces, or cloud-based browsing will return inaccurate or no results. Expect a match rate below 100% and validate high-priority matches.
5. **Zapier integration is limited to specific triggers/actions (reverse email lookup, IP to company) — for other endpoints, use the REST API directly or a custom Zapier webhook step.** Not all Enrich.so endpoints have native Zapier triggers/actions. For endpoints like Similar Companies, Employee Search, or Bulk Enrichment, you will need to use Zapier's webhook action or connect via n8n/Make with HTTP request nodes.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Cross-platform data enrichment strategy (multi-tool enrichment workflows, waterfall enrichment)
- `/sales-deliverability` — Email deliverability and verification strategy (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-prospect-list` — Prospect list building strategy and best practices
- `/sales-integration` — Connect Enrich.so to CRM, automation tools, or other platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Enriching CRM contacts with LinkedIn and company data
**User says**: "I have 500 contacts in my CRM with just email addresses. I want to add LinkedIn profiles, job titles, and company info to each one."
**Skill does**:
1. Recommends exporting contacts as a CSV with an `email` column
2. Uses Bulk Enrichment (`POST /v1/api/bulk-enrichment`) with type `person` and the CSV upload — explains the async workflow and webhook callback option
3. Retrieves results with `GET /v1/api/bulk-enrichment-results?uid=<uid>` once the job completes
4. Maps returned fields (linkedin_url, job_title, company_name, company_domain, location) to the user's CRM contact properties
5. Explains that only successfully matched contacts consume credits — unmatched emails cost nothing
6. Recommends running Company Data Lookup on unique company domains from the results to add firmographic data (industry, size, revenue) at the account level
**Result**: User has 500 contacts enriched with LinkedIn profiles, job titles, and company details — ready for segmentation and personalized outreach

### Example 2: Finding and validating decision-maker emails at target accounts
**User says**: "I need to find the VP of Engineering's email at 20 target companies for an outbound campaign."
**Skill does**:
1. Collects the 20 company LinkedIn URLs or domains from the user
2. Uses Search Company Employees for each company, filtering by title containing "VP" and department "Engineering"
3. For each matched employee, uses LinkedIn to Email to find their business email address
4. Validates each email with the Email Validation endpoint — flags catch-all domains, invalid mailboxes, and role-based addresses
5. Optionally uses Phone Number Finder to add direct dial numbers for multi-channel outreach
6. Delivers a clean list of 20 verified decision-maker contacts with email, phone, LinkedIn URL, and title
**Result**: User has a validated, enriched contact list of engineering VPs ready for personalized outbound sequences

### Example 3: Identifying high-intent website visitors and routing to sales
**User says**: "We get 10K website visitors a month but don't know who they are. Can Enrich.so help us identify companies visiting our site?"
**Skill does**:
1. Explains the IP to Company endpoint — capture visitor IPs from web server logs or analytics, then call the API to identify the company behind each IP
2. Sets up an automated pipeline: visitor IP -> IP to Company API -> filter by ICP criteria (industry, employee count, revenue) -> alert sales team
3. Recommends using Zapier's IP to Company integration for a no-code setup, or a custom webhook for real-time processing
4. For matched companies, chains Company Data Lookup for full firmographics and Search Company Employees to find the right buyer persona
5. Cautions that VPN users, shared IPs, and cloud provider IPs will not resolve — expect 20-40% company match rate depending on traffic mix
6. Suggests combining with job listing signals (companies hiring for roles your product supports) to prioritize outreach
**Result**: User has an automated visitor identification pipeline that surfaces high-intent companies visiting their site and routes enriched leads to the sales team

## Troubleshooting

### Bulk enrichment job stuck or returning incomplete results
**Symptom**: A bulk enrichment job submitted via `POST /v1/api/bulk-enrichment` returns a uid, but polling `GET /v1/api/bulk-enrichment-results` shows the job as still processing after an extended period, or results are missing rows.
**Cause**: Large bulk jobs take time to process — the async nature means results are not instant. Incomplete results can occur if the input file has formatting issues (malformed CSV, missing required columns, encoding problems) or if some rows contain invalid data that cannot be processed.
**Solution**: First, check that your input file is valid — CSV should be UTF-8 encoded with the correct column headers for the enrichment type (e.g., `email` for person enrichment, `linkedin_url` for LinkedIn enrichment). If the job is still processing, continue polling or wait for the webhook callback — large jobs (10K+ rows) can take 30 minutes to several hours. If results are missing rows, check the job status for error counts — some rows may have failed individually. Re-submit failed rows in a separate batch. If the job appears permanently stuck, contact Enrich.so support with the job uid.

### Reverse email lookup returning no results for valid emails
**Symptom**: Calling the Reverse Email Lookup endpoint with a known valid business email returns no match (HTTP 404 or empty result), even though the person has a LinkedIn profile.
**Cause**: Enrich.so's reverse email lookup depends on the email being associated with a LinkedIn profile or other indexed data sources. If the person uses a different email on LinkedIn, has a private profile, or the email-to-profile mapping has not been indexed, no match will be returned. Free email providers (Gmail, Yahoo) have lower match rates than business domains.
**Solution**: Verify the email is spelled correctly and is the person's primary business email. If using a free provider email, try the person's work email instead — business domains have significantly higher match rates. As an alternative path, if you know the person's name and company, use the Email Finder endpoint to find their business email, then try the reverse lookup with that address. If you have their LinkedIn URL, use LinkedIn Profile Enrichment directly instead of the reverse lookup.

### API returning 401 Unauthorized despite valid token
**Symptom**: API requests return HTTP 401 even though the API token appears correct in the dashboard.
**Cause**: Common causes include: the token has leading/trailing whitespace when copied, the Authorization header format is wrong (must be `Bearer <token>`, not `Basic` or just the token), the token was regenerated and the old one is being used, or the account has been suspended due to billing issues.
**Solution**: Copy the token fresh from the Enrich.so dashboard — watch for trailing spaces or newline characters. Verify the header format is exactly `Authorization: Bearer <token>` with a single space after "Bearer". Check that you are using the current active token (regenerating a token invalidates the previous one). Verify your account is in good standing — check for billing alerts or suspension notices in the dashboard. Test with a simple cURL command to isolate whether the issue is in your code or the token itself: `curl -H "Authorization: Bearer <token>" "https://api.enrich.so/v1/api/reverse-email-lookup?email=test@example.com"`.
