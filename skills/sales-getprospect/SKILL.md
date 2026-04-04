---
name: sales-getprospect
description: "GetProspect platform help — B2B email finder, verifier, enrichment, and cold email outreach with 200M+ contacts and 26M+ companies. Includes LinkedIn Email Finder Extension, contact enrichment (40+ attributes), email verification (97% deliverability guarantee), and cold email sequences. Use when finding B2B emails, enriching leads, verifying emails, building cold email sequences, exporting leads from LinkedIn, or working with the GetProspect API. Do NOT use for cross-platform enrichment strategy (use /sales-enrich), email deliverability strategy (use /sales-deliverability), prospect list strategy (use /sales-prospect-list), or outbound cadence strategy (use /sales-cadence)."
argument-hint: "[describe what you need help with in GetProspect]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, linkedin, platform]
github: "https://github.com/GetProspect"
---
# GetProspect Platform Help

Help the user with GetProspect platform questions — from Email Finder and B2B Contact Database through Contact Enrichment, Email Verification, Cold Email Software, Built-in CRM, LinkedIn Extension, and Integrations. GetProspect is a Ukrainian B2B email finder, verifier, enrichment, and cold email outreach platform founded in 2016, serving 400K+ customers with a database of 200M+ contacts and 26M+ companies.

## Step 1 — Gather context

Ask the user:

1. **What area of GetProspect do you need help with?**
   - A) Email Finder — search 200M+ contacts by name, company, title, domain with 17+ filters (95% accuracy on verified emails)
   - B) LinkedIn Email Finder Extension — Chrome extension to export leads from LinkedIn and Sales Navigator
   - C) B2B Contact Database — browse and filter 200M+ contacts and 26M+ companies
   - D) Contact Enrichment — append 40+ data attributes (location, industry, tech stack, phone numbers)
   - E) Email Verifier — validate deliverability (95% accuracy), catch-all detection, bulk verification (97% deliverability guarantee)
   - F) Cold Email Software — multi-step sequences, A/B testing, auto-stop, timezone-aware sending
   - G) Built-in CRM — lists, tags, custom properties, notes, companies, domain blacklisting
   - H) Reverse Email Lookup — find person/company data from an email address
   - I) Phone Numbers — mobile and direct phone credits
   - J) Team Collaboration — shared templates, campaigns, lists, team credit sharing
   - K) Integrations — HubSpot, Salesforce, Pipedrive, Zoho, Outreach, Salesloft, Google Sheets, Zapier, and more
   - L) API — REST API setup, endpoints, authentication
   - M) Account / Billing — plans, pricing, credits
   - N) Something else — describe it

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
- Email deliverability / verification strategy (not GetProspect-specific) -> `/sales-deliverability`
- Prospect list building strategy -> `/sales-prospect-list`
- Outbound sequence / cadence strategy -> `/sales-cadence`
- Connecting GetProspect to other tools via middleware -> `/sales-integration`
- Hunter.io-specific questions -> `/sales-hunter`
- Tomba-specific questions -> `/sales-tomba`
- Prospeo-specific questions -> `/sales-prospeo`
- Enrich.so-specific questions -> `/sales-enrichso`
- Minelead-specific questions -> `/sales-minelead`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — GetProspect platform reference

Provide module-by-module guidance based on the user's area:

### Email Finder
- **What it does**: Search a database of 200M+ contacts by name, company, title, domain, and more with 17+ filters — returns verified email addresses with 95% accuracy on verified results
- **Key features**: Search by name, company, job title, industry, location, company size, revenue, technology stack, and other filters; results include email, name, title, company, and enrichment data
- **Credit cost**: 1 email credit per valid email found
- **Use cases**: Building targeted prospect lists, finding decision-maker emails at target accounts, sourcing contacts by title and industry

### LinkedIn Email Finder Extension
- **What it does**: Chrome extension that exports leads directly from LinkedIn and Sales Navigator — extracts emails and enrichment data from LinkedIn profiles and search results
- **Key features**: One-click export from LinkedIn profiles, bulk export from Sales Navigator search results, automatic enrichment with email and phone data
- **Use cases**: Prospecting directly from LinkedIn, building lists from Sales Navigator saved searches, enriching LinkedIn connections with email addresses

### B2B Contact Database
- **What it does**: Browse and search 200M+ contacts and 26M+ companies with advanced filters — a standalone prospecting database accessible from the GetProspect web app
- **Key features**: 17+ search filters (title, industry, location, company size, revenue, tech stack), company profiles with employee counts and industry classification, saved searches
- **Use cases**: Market research, TAM analysis, building account lists by firmographic criteria, discovering new target companies

### Contact Enrichment
- **What it does**: Append 40+ data attributes to existing contacts — location, industry, tech stack, phone numbers, social profiles, company data, and more
- **Key features**: Bulk enrichment via CSV upload or CRM sync, 40+ data points per contact, company-level enrichment (industry, size, revenue, tech stack)
- **Credit cost**: 1 email credit per contact enriched
- **Use cases**: Filling gaps in CRM data, appending phone numbers and titles to email-only records, enriching event lead lists with firmographic data

### Email Verifier
- **What it does**: Validate email deliverability with 95% accuracy — catch-all detection, bulk verification, 97% deliverability guarantee on verified-valid emails
- **Key features**: Real-time single verification, bulk verification via CSV upload, catch-all domain detection, MX record checks, syntax validation
- **Credit cost**: 1 verification credit per email checked
- **Deliverability guarantee**: 97% — if more than 3% of verified-valid emails bounce, GetProspect provides credit refunds
- **Use cases**: Cleaning email lists before outreach, validating leads before CRM import, reducing bounce rates, protecting sender reputation

### Cold Email Software
- **What it does**: Build and send multi-step cold email sequences with A/B testing, auto-stop on reply or click, timezone-aware sending, and deliverability safeguards
- **Key features**: Multi-step sequences (email + follow-ups), A/B testing on subjects, messages, and CTAs, auto-stop when prospect replies or clicks, timezone-aware sending windows, SPF/DKIM authentication checks, randomized sending intervals, configurable daily sending limits, templates library, attachment support, unsubscribe link management
- **Use cases**: Cold outbound campaigns, multi-touch follow-up sequences, A/B testing outreach messaging, automated drip sequences

### Built-in CRM
- **What it does**: Manage contacts, companies, lists, tags, and custom properties — a lightweight CRM built into the GetProspect platform
- **Key features**: Contact and company records, custom properties, tags, notes, lists (static and dynamic), domain blacklisting to exclude specific companies, ownership-based filtering for team use
- **Use cases**: Organizing prospects by campaign or segment, tracking outreach status, managing do-not-contact lists via domain blacklisting, lightweight pipeline management

### Reverse Email Lookup
- **What it does**: Find person and company data from an email address — returns name, title, company, social profiles, and enrichment data
- **Use cases**: Identifying unknown inbound leads, enriching email-only records, researching contacts who have engaged with your content

### Phone Numbers
- **What it does**: Access mobile and direct phone numbers as an add-on credit type — 5 free phone credits per month on paid plans
- **Credit cost**: 1 phone credit per phone number revealed
- **Use cases**: Multi-channel outreach (email + phone), finding direct dials for high-priority prospects, supplementing email outreach with phone follow-ups

### Team Collaboration
- **What it does**: Share templates, campaigns, lists, and credits across team members with visibility into team activity and ownership-based filtering
- **Key features**: Shared template library, shared campaign access, team credit pool, activity visibility across team members, ownership-based filtering to see your leads vs. team leads
- **Use cases**: Coordinating outbound across SDR teams, sharing proven templates, managing team credit allocation, preventing duplicate outreach

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Contact** | Person record with email and enrichment data | email, first_name, last_name, title, company, industry, location, phone, linkedin_url, custom_properties |
| **Company** | Organization record with firmographic data | name, domain, industry, size, revenue, tech_stack, location, employee_count |
| **List** | Collection of contacts (static or dynamic) | id, name, contact_count, type, created_at |
| **Sequence** | Multi-step cold email campaign | id, name, steps, status, contacts_count, sent, opened, replied, a_b_variants |
| **Sequence Step** | Individual email in a sequence | id, sequence_id, step_number, subject, body, delay_days, variant |
| **Email Verification** | Verification result for an email | email, status (valid/invalid/catch-all/unknown), deliverability_score |
| **Enrichment Result** | Enrichment output for a contact | email, data_points_found, attributes (40+ fields) |
| **Template** | Reusable email template | id, name, subject, body, shared, created_by |
| **Tag** | Label applied to contacts | id, name, color, contact_count |
| **Phone Lookup** | Phone number result | contact_email, phone_number, phone_type (mobile/direct), confidence |

### API quick reference

- **Base URL**: `https://api.getprospect.com`
- **Authentication**: API key passed in the `apiKey` header — get your key from app.getprospect.com/settings/api
- **Format**: JSON responses
- **Status**: API is marked "still under development" — endpoints may change
- **Key endpoints**:
  - `POST /api/v2/email-finder` — find email by name and domain (V2)
  - `POST /api/v2/email-verifier` — verify email deliverability (V2)
  - `GET /api/v1/lookup-email?email=` — reverse email lookup (find person/company from email)
  - `GET /api/v1/leads/search?query=` — search leads in your account
  - `GET /api/v1/companies/search?query=` — search companies in your account
  - `POST /api/v1/search-by-linkedin` — find contact by LinkedIn URL
  - `POST /api/v1/fast-search` — fast contact search
  - `GET /api/v1/contacts` — list contacts
  - `POST /api/v1/contacts` — create contact
  - `PUT /api/v1/contacts/:id` — update contact
  - `DELETE /api/v1/contacts/:id` — delete contact
  - `GET /api/v1/companies` — list companies
  - `POST /api/v1/companies` — create company
  - `PUT /api/v1/companies/:id` — update company
  - `DELETE /api/v1/companies/:id` — delete company
  - `GET /api/v1/lists` — list management
  - `POST /api/v1/lists` — create list
  - `GET /api/v1/health` — API health check
- **Rate limits**: Not publicly documented — monitor for 429 responses and implement exponential backoff
- **Docs**: API documentation available at getprospect.com; API is still under development so verify endpoints before building production integrations

### Integrations

| Category | Tools |
|----------|-------|
| **CRM** | HubSpot, Salesforce, Pipedrive, Zoho CRM |
| **Sales engagement** | Outreach, Salesloft |
| **Productivity** | Google Sheets, Notion, Airtable |
| **Automation** | Zapier (connect to 6,000+ apps) |
| **Email** | Gmail, Outlook (for cold email sending) |
| **Browser** | Chrome Extension (LinkedIn Email Finder) |
| **API** | REST API with API key auth — integrate with any system that can make HTTP requests |

### Pricing (USD, as of March 2026 — verify current pricing at getprospect.com)

| Plan | Price | Emails/mo | Verifications/mo | Phone credits/mo | Key features |
|------|-------|-----------|-------------------|------------------|--------------|
| **Free** | $0 | 50 | 100 | 0 | Basic access, limited features |
| **Starter** | $49/mo | 1,000 | 2,000 | 5 | Full feature access |
| **Growth 5K** | $99/mo | 5,000 | 10,000 | 5 | Higher volume |
| **Growth 20K** | $199/mo | 20,000 | — | 5 | High volume |
| **Growth 50K** | $399/mo | 50,000 | — | 5 | Enterprise volume |

**Key pricing notes**:
- **Credits roll over** — unused email and verification credits carry forward to the next billing period.
- **Annual billing saves ~30%** compared to monthly pricing.
- **Add-on verification credits** are available for purchase separately and do not expire.
- **Phone credits**: 5 free per month on paid plans, 0 on Free. Additional phone credits available as add-on purchases.
- **1 email credit = 1 valid email found** or 1 contact enriched. **1 verification credit = 1 email verified.**

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Finding emails for target prospects**:
   1. Use the Email Finder in the GetProspect web app — enter target criteria (job title, company, industry, location) and apply filters to narrow results
   2. GetProspect searches its database of 200M+ contacts and returns matching profiles with verified emails (95% accuracy on verified results)
   3. Save results to a list in the built-in CRM for organization
   4. For LinkedIn-based prospecting, install the Chrome extension and export leads directly from LinkedIn or Sales Navigator search results
   5. Run Email Verifier on found emails if sending to a high-stakes list — the 97% deliverability guarantee applies to verified-valid results
   6. Export verified contacts to your CRM (HubSpot, Salesforce, Pipedrive, Zoho) or Google Sheets via native integrations
   7. Credit cost: 1 email credit per valid email found

2. **Enriching existing contacts with additional data**:
   1. Upload your contact list (CSV) or sync from CRM to GetProspect
   2. Run Contact Enrichment to append 40+ data attributes — location, industry, tech stack, phone numbers, social profiles, company data
   3. Review enrichment results — not all contacts will have all 40+ fields available; coverage varies by contact
   4. Export enriched data back to your CRM or download as CSV
   5. For phone numbers specifically, note that phone credits are separate from email credits — 5 free per month on paid plans
   6. Credit cost: 1 email credit per contact enriched, plus 1 phone credit per phone number revealed

3. **Building and launching cold email sequences**:
   1. Create a new sequence in the Cold Email Software module — define your steps (initial email + follow-ups), set delay intervals between steps
   2. Write email copy for each step — use the template library for inspiration, set up A/B variants for subjects, messages, or CTAs
   3. Configure sending settings: connect your Gmail or Outlook account, set timezone-aware sending windows, configure daily sending limits, set randomized intervals between sends
   4. Run SPF/DKIM checks from within GetProspect to verify your sending domain authentication is correctly configured
   5. Add contacts from your lists to the sequence — GetProspect will auto-stop sending to a contact when they reply or click
   6. Monitor performance: track open rates, reply rates, click rates, and A/B test results
   7. Iterate: pause underperforming variants, scale winning messages, adjust send times based on engagement data

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **The API is marked "still under development" — do not build mission-critical integrations without testing thoroughly.** GetProspect's API documentation explicitly states the API is under development. Endpoints, request formats, and response schemas may change without notice. Pin to specific API versions (v1, v2) where available, and build defensive error handling. Test all endpoints before deploying to production workflows.

2. **Email credits and verification credits are separate pools — running out of one does not affect the other.** The Free plan includes 50 email credits and 100 verification credits. Email credits are consumed when finding or enriching contacts; verification credits are consumed when verifying emails. Plan your credit budget based on your workflow — if you find 50 emails and verify all of them, that costs 50 email credits + 50 verification credits. The 2:1 ratio (verifications to emails) on most plans accounts for verifying emails sourced from outside GetProspect.

3. **Phone credits are extremely limited — 5 per month on paid plans, 0 on Free.** Phone number lookups are a premium add-on with very low included volume. If your workflow requires significant phone prospecting, budget for additional phone credit purchases or consider a dedicated phone data provider. The 5 free monthly phone credits are best used for high-priority prospects only.

4. **The 97% deliverability guarantee on verified emails applies only to emails marked "valid" — not catch-all or unknown.** If you send to emails the verifier flagged as catch-all or unknown, bounces from those addresses are not covered by the guarantee. Always segment your verified list by status (valid, catch-all, unknown, invalid) and treat catch-all and unknown separately with more cautious sending practices.

5. **Cold email sequence auto-stop triggers on reply or click, but does not detect out-of-office replies by default.** A prospect's out-of-office auto-reply may trigger the auto-stop, removing them from the sequence before they actually read your message. Review stopped contacts periodically and re-enroll prospects who were stopped by auto-replies rather than genuine engagement. Check GetProspect's current settings for any OOO detection options.

6. **CRM integrations (HubSpot, Salesforce, Pipedrive, Zoho) may have sync direction and field mapping limitations.** Verify whether each integration supports bidirectional sync or only one-way push. Field mapping between GetProspect custom properties and CRM fields may require manual configuration. Test sync behavior with a small batch before pushing large contact lists to avoid creating duplicates or overwriting existing CRM data.

7. **Randomized sending intervals and daily limits in cold email are per-connected-email-account, not per-sequence.** If you run multiple sequences from the same email account, the daily sending limit applies across all sequences sharing that account. Plan your sequence volumes accordingly to avoid hitting limits mid-sequence, which can cause delayed sends and uneven cadence timing.

8. **Domain blacklisting in the CRM prevents finding contacts at blacklisted domains, not just emailing them.** If you add a domain to the blacklist (e.g., to exclude competitors or existing customers), GetProspect will exclude contacts at that domain from search results and list building, not just from email sequences. Use this intentionally — it is a broad exclusion, not just a suppression list for sending.

9. **LinkedIn Email Finder Extension requires an active LinkedIn session — it does not work with LinkedIn's API.** The Chrome extension scrapes data from your LinkedIn browser session. LinkedIn may rate-limit or restrict your account if you export too aggressively. Use conservative export volumes (under 100 profiles per day), avoid running the extension continuously, and be aware that LinkedIn's terms of service may restrict automated data extraction.

## Step 5 — Related skills

- `/sales-enrich` — Cross-platform data enrichment strategy (multi-tool enrichment workflows, waterfall enrichment)
- `/sales-deliverability` — Email deliverability and verification strategy (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-prospect-list` — Prospect list building strategy and best practices
- `/sales-cadence` — Outbound sequence and cadence strategy (multi-channel, timing, follow-up)
- `/sales-integration` — Connect GetProspect to CRM, automation tools, or other platforms
- `/sales-hunter` — Hunter.io platform help (similar domain email search and verification)
- `/sales-tomba` — Tomba platform help (similar email finder and verifier)
- `/sales-prospeo` — Prospeo platform help (similar email finder with LinkedIn focus)
- `/sales-enrichso` — Enrich.so platform help (B2B data enrichment API with LinkedIn and company data)
- `/sales-minelead` — Minelead platform help (similar email finder, verifier, and lead generation)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: LinkedIn prospecting with email enrichment and CRM sync
**User says**: "I have a Sales Navigator search of VP-level marketing leaders at SaaS companies. How do I get their emails and push them to Salesforce?"
**Skill does**:
1. Installs the GetProspect LinkedIn Email Finder Chrome extension from the Chrome Web Store
2. Opens the Sales Navigator search results and clicks the GetProspect extension to bulk-export profiles — extracts names, titles, companies, and LinkedIn URLs
3. GetProspect automatically enriches exported profiles with verified email addresses (1 email credit per valid email found)
4. Reviews results in the GetProspect built-in CRM — contacts are saved to a new list with email, title, company, and enrichment data
5. Runs Email Verifier on all found emails to confirm deliverability — filters for "valid" status to leverage the 97% deliverability guarantee
6. Pushes verified contacts to Salesforce via the native integration — maps email, name, title, company to Salesforce contact/lead fields
7. Notes: advises conservative LinkedIn export volumes (under 100 profiles/day) to avoid LinkedIn rate limiting
**Result**: User has a verified list of VP Marketing contacts at SaaS companies synced to Salesforce, sourced directly from their Sales Navigator search

### Example 2: Bulk email verification before a product launch campaign
**User says**: "We have 10,000 contacts from past events and webinars. We need to clean the list before our product launch email blast next week."
**Skill does**:
1. Exports the 10,000 contacts as a CSV from the user's CRM or event platform
2. Uploads the CSV to GetProspect's Email Verifier for bulk verification — checks each email for deliverability, catch-all status, and validity
3. Explains verification statuses: "valid" (safe to send, covered by 97% guarantee), "catch-all" (domain accepts all addresses — proceed with caution), "unknown" (could not determine — risky), "invalid" (do not send)
4. Segments the list: valid emails go into the "launch campaign" list, catch-all into a "manual review" list, invalid/unknown into a "do not send" list
5. Checks credit requirements: 10,000 verifications needs the Growth 5K plan ($99/mo, 10K verifications) or higher — or the user can purchase add-on verification credits
6. Exports the cleaned, segmented lists back to the user's email platform or CRM
7. Recommends running the launch campaign only to the "valid" segment first, then carefully testing a subset of catch-all addresses
**Result**: User has a cleaned and segmented contact list with bounce risks removed, ready for a product launch campaign with strong deliverability

### Example 3: Cold email A/B test sequence for new market outreach
**User says**: "I want to test two different cold email approaches — one pain-point focused, one value-prop focused — to CFOs at mid-market companies."
**Skill does**:
1. Uses the Email Finder to search for CFO contacts at mid-market companies (filters: title contains "CFO" or "Chief Financial Officer", company size 50-500 employees)
2. Saves found contacts to a new list in the built-in CRM — reviews for duplicates and applies tags for tracking
3. Creates a new cold email sequence with 3 steps: initial outreach + 2 follow-ups, with 3-day and 5-day delays
4. Sets up A/B testing on Step 1: Variant A uses pain-point messaging ("struggling with X?"), Variant B uses value-prop messaging ("companies like yours achieve Y")
5. Configures sending settings: connects Gmail account, sets timezone-aware sending (9am-11am recipient local time), sets daily limit to 50 sends, enables randomized intervals (60-120 seconds between sends)
6. Runs SPF/DKIM check to verify sending domain authentication before launching
7. Launches the sequence with a 50/50 split — monitors open rates, reply rates, and click rates for each variant over 2 weeks
8. After sufficient data, recommends pausing the losing variant and scaling the winner
**Result**: User has a structured A/B test running with deliverability best practices, generating data to optimize their CFO outreach messaging

## Troubleshooting

### Email Finder returning low match rates for a target company or industry
**Symptom**: Searching for contacts at a specific company or within a niche industry returns very few results despite the company having many employees or the industry being well-established.
**Cause**: GetProspect's 200M+ contact database has stronger coverage in some industries and regions than others. Smaller companies, very niche industries, or companies with strong privacy practices may have limited coverage. The company may also use a domain that differs from expectations (parent company domain, country-specific domain, or acquired domain).
**Solution**: Try alternate search approaches — search by domain instead of company name, try the parent company's domain, or broaden your filters (e.g., search by industry and location instead of a specific company). Use the LinkedIn Email Finder Extension to supplement database searches — LinkedIn profiles often have more complete coverage for niche companies. For very small or private companies, consider enriching manually-sourced contacts rather than relying on database search. If coverage is consistently low for your target market, consider supplementing with a second email finder tool (see `/sales-enrich` for waterfall enrichment strategy).

### Cold email sequence sends stopping unexpectedly mid-campaign
**Symptom**: A sequence that was sending normally suddenly stops sending to remaining contacts — no error messages, but no new sends are going out.
**Cause**: Most commonly caused by hitting the daily sending limit on the connected email account. Other causes: the connected Gmail/Outlook account lost its OAuth connection (password change, token expiry), the email account was temporarily suspended by the provider due to sending velocity, or all remaining contacts in the sequence triggered auto-stop (replied or clicked).
**Solution**: Check the daily sending limit for your connected account — if you are running multiple sequences from the same account, limits are shared across all of them. Verify the email account connection is still active in GetProspect settings (reconnect OAuth if needed). Check your Gmail/Outlook account for any security alerts or sending restrictions. Review the sequence contact list to see how many contacts have been auto-stopped vs. pending. If the email provider suspended sending, reduce your daily volume and wait 24 hours before resuming.

### CRM integration creating duplicate contacts instead of updating existing records
**Symptom**: Pushing contacts from GetProspect to HubSpot, Salesforce, or another CRM creates new duplicate records instead of matching and updating existing contacts.
**Cause**: The CRM integration matches on email address by default — if the email in GetProspect differs from the email in the CRM (even by capitalization or leading/trailing spaces in some CRM configurations), it creates a new record instead of updating. Custom field mappings may also be misconfigured, causing data to land in wrong fields.
**Solution**: Before pushing a large batch, test with 5-10 contacts to verify matching behavior. Ensure emails in GetProspect exactly match the primary email in your CRM. Review field mapping configuration in the integration settings — map GetProspect fields to the correct CRM fields. If duplicates were already created, use your CRM's native deduplication tools to merge them. For ongoing sync, consider using Zapier with custom matching logic instead of the native integration if the native matching is too rigid for your data.
