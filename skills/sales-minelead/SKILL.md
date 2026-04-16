---
name: sales-minelead
description: "Minelead platform help — B2B email finder, verifier, and lead generation with 500M+ emails and 100M+ business profiles. Use when you can't find email addresses for a company, need to verify if emails are valid before sending, leads from keyword searches aren't relevant, Gmail campaigns in Minelead aren't delivering, disposable emails are polluting your list, or the Minelead API isn't returning results. Do NOT use for cross-platform enrichment strategy (use /sales-enrich), email deliverability/verification strategy (use /sales-deliverability), prospect list building strategy (use /sales-prospect-list), or outbound sequence/cadence strategy (use /sales-cadence)."
argument-hint: "[describe what you need help with in Minelead]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, platform]
github: "https://github.com/minelead"
---
# Minelead Platform Help

Help the user with Minelead platform questions — from Company Email Search and Email Finder through Lead Generation, Email Verification, Disposable Email Detection, Email Campaigns, Leads/CRM, Bulk Operations, and Integrations. Minelead is a London-based B2B email finder, verifier, and lead generation platform with 500M+ emails and 100M+ business profiles, offering a REST API and browser extensions for in-workflow lookup.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Minelead do you need help with?**
   - A) Company Email Search — find all email addresses associated with a domain (500M+ emails indexed)
   - B) Email Finder — find a professional email address from first name + last name + domain
   - C) Lead Finder / Tags — discover companies and leads from keywords and locations
   - D) Email Verifier — validate email deliverability with quality scoring (25-100%)
   - E) Disposable Email Detector — identify temporary/throwaway email addresses (score 0-5)
   - F) Email Campaigns — send campaigns via connected Gmail accounts with round-robin multi-account support
   - G) Leads/CRM — save, organize, export lead collections, import CSV
   - H) Bulk Operations — batch email search or verification via CSV upload
   - I) Browser Extensions — Chrome and Firefox for in-browser email lookup
   - J) Integrations — HubSpot, Zoho CRM, Google Sheets, Zapier
   - K) API — REST API setup, endpoints, authentication
   - L) Account / Billing — plans, pricing, credits
   - M) Something else — describe it

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
- Email deliverability / verification strategy (not Minelead-specific) -> `/sales-deliverability`
- Prospect list building strategy -> `/sales-prospect-list`
- Outbound sequence / cadence strategy -> `/sales-cadence`
- Connecting Minelead to other tools via middleware -> `/sales-integration`
- Hunter.io-specific questions -> `/sales-hunter`
- Tomba-specific questions -> `/sales-tomba`
- Prospeo-specific questions -> `/sales-prospeo`
- Enrich.so-specific questions -> `/sales-enrichso`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Minelead platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Finding all emails at a target company domain**:
   1. Call `GET /v1/search?domain=example.com&key=<your-key>` to retrieve all known email addresses at the domain
   2. Minelead searches its index of 500M+ emails and returns matching addresses — webmail domains are excluded by default
   3. For each returned email, run verification with `GET /v1/validate?email=<email>&key=<your-key>` to get a quality score (25-100%)
   4. Filter results: keep emails with quality scores above 70% for outreach, flag catch-all domains for extra caution
   5. Save verified leads to a collection via `POST /v1/leads` for organization and future export
   6. For multiple domains, use Bulk Operations to process a CSV of domains in one batch
   7. Export your verified lead collection to HubSpot, Zoho CRM, or Google Sheets via integrations

2. **Finding a specific person's email**:
   1. Use the Email Finder: `GET /v1/find?first_name=Jane&last_name=Doe&domain=example.com&key=<your-key>`
   2. Minelead returns the most likely professional email address with confidence indicators
   3. Verify the found email immediately: `GET /v1/validate?email=<found-email>&key=<your-key>`
   4. Check the quality score — above 70% is safe for outreach, below 50% warrants caution
   5. If no result, try alternate domain spellings or the company's parent domain
   6. For batch lookups (e.g., a list of 50 decision-makers), prepare a CSV with first_name, last_name, domain columns and use Bulk Operations

3. **Building a prospect list from keywords and locations**:
   1. Use Lead Finder / Tags: `GET /v1/tags?keyword=saas+marketing&location=London&key=<your-key>`
   2. Minelead returns companies matching your keyword and geographic criteria
   3. For each discovered company, run Company Email Search to find contacts at the domain
   4. Verify discovered emails with the Email Verifier — filter out low-quality scores and disposable addresses
   5. Save qualified leads to a collection in Minelead's Leads/CRM
   6. Export the collection to your CRM or Google Sheets for outreach workflow
   7. Repeat with varied keywords to expand your TAM across different market segments

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **API key is passed as a query parameter, not a header — do not put it in the Authorization header.** All Minelead API requests authenticate via `key=<your-api-key>` as a URL query parameter. This differs from platforms like Enrich.so or Hunter.io that use Bearer token headers. Be mindful that API keys in URLs can appear in server logs and browser history — use HTTPS and avoid sharing URLs that contain your key.

2. **Bulk operation batch limits vary by plan and can silently truncate your upload.** Free and Starter plans cap at 50 records per batch, Pro at 100, Business at 1,000. If you upload a CSV with more records than your plan allows, excess rows may be ignored without an explicit error. Check your plan's bulk limit before uploading and split large files into plan-appropriate batches. Enterprise is the only plan with unlimited bulk operations.

3. **Email quality scores (25-100%) are not binary — treat them as a confidence gradient, not a pass/fail.** A score of 70% does not mean the email has a 70% chance of being valid. Scores near 25% indicate high risk (likely invalid or catch-all), while 90%+ indicates strong confidence. Catch-all domains will often return moderate scores even for non-existent mailboxes — always flag catch-all results for manual review or extra validation steps.

4. **Disposable email scores (0-5) require a threshold decision — Minelead does not set a default cutoff.** A score of 0 means definitely not disposable, 5 means definitely disposable, but scores of 2-3 are ambiguous. You need to decide your own threshold based on your use case — form validation might reject anything above 2, while lead qualification might only reject 4-5. Test with known disposable providers to calibrate your threshold.

5. **Email Campaigns require connected Gmail accounts — there is no built-in SMTP or non-Gmail sending.** Campaign sending works exclusively through connected Gmail accounts via OAuth. If you need to send from non-Gmail addresses, you will need to use a separate email campaign tool. Round-robin distributes sends across connected accounts, which helps with deliverability but means you need multiple Gmail accounts for high-volume campaigns.

6. **HubSpot, Zoho CRM, and Google Sheets integrations may require a Pro plan or higher — Free and Starter plans have limited integration access.** Verify your plan includes the integrations you need before building workflows that depend on them. Zapier connectivity may also require a paid Minelead plan for certain triggers/actions.

7. **The Free plan is throttled and limited to 25 credits/month — expect slower response times and rate limiting.** The Free tier is suitable for evaluation only. API calls may be rate-limited more aggressively than paid plans. If you are building an integration, test on a paid plan to get realistic performance characteristics.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Cross-platform datan enrichment strategy (multi-tool enrichment workflows, waterfall enrichment)
- `/sales-deliverability` — Email deliverability and verification strategy (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-prospect-list` — Prospect list building strategy and best practices
- `/sales-cadence` — Outbound sequence and cadence strategy (multi-channel, timing, follow-up)
- `/sales-integration` — Connect Minelead to CRM, automation tools, or other platforms
- `/sales-hunter` — Hunter.io platform help (similar domain email search and verification)
- `/sales-tomba` — Tomba platform help (similar email finder and verifier)
- `/sales-prospeo` — Prospeo platform help (similar email finder with LinkedIn focus)
- `/sales-enrichso` — Enrich.so platform help (B2B datan enrichment API with LinkedIn and company data)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Domain email search with verification and CRM export
**User says**: "I want to find all email addresses at acmecorp.com and push the verified ones to HubSpot."
**Skill does**:
1. Runs Company Email Search: `GET /v1/search?domain=acmecorp.com&key=<key>` to retrieve all known emails at the domain
2. Verifies each returned email: `GET /v1/validate?email=<email>&key=<key>` — checks deliverability and returns quality scores (25-100%)
3. Filters results: keeps emails with quality scores above 70%, flags catch-all domains for manual review
4. Saves verified leads to a Minelead collection via `POST /v1/leads`
5. Pushes verified contacts to HubSpot via the native integration — maps email, name, and company fields to HubSpot contact properties
6. Notes credit usage: 1 credit per domain search + 1 credit per email verified
**Result**: User has a verified list of contacts at acmecorp.com synced to HubSpot, with low-quality and catch-all emails flagged for review

### Example 2: Bulk email verification before an outbound campaign
**User says**: "I have a CSV of 500 email addresses I collected from events. I need to clean the list before launching a cold email campaign."
**Skill does**:
1. Checks the user's plan for bulk operation limits — 500 records requires at least a Business plan (1,000 limit) or splitting into batches on Pro (100 per batch, 5 batches)
2. Uploads the CSV via Bulk Operations for batch verification
3. Explains quality score interpretation: 80-100% = safe to email, 50-79% = proceed with caution, 25-49% = high risk of bounce
4. Recommends also running the Disposable Email Detector on the list to filter out temporary addresses (reject scores of 4-5)
5. Exports the cleaned list with verification results — separates into "safe to send", "risky", and "do not send" segments
6. Advises connecting to the campaign module or exporting to an external sending tool for the actual outreach
7. Notes that 500 verifications = 500 credits — confirms the user's plan has sufficient credit balance
**Result**: User has a cleaned, segmented email list with bounce risks removed, ready for a cold outreach campaign with strong deliverability

### Example 3: Keyword-based lead generation for a new market
**User says**: "We're expanding into the fintech space in Berlin. How do I find companies and their contact emails using Minelead?"
**Skill does**:
1. Uses Lead Finder / Tags: `GET /v1/tags?keyword=fintech&location=Berlin&key=<key>` to discover fintech companies in Berlin
2. Reviews returned companies — each result includes company name, domain, location, and category
3. For top-priority target accounts, runs Company Email Search on each domain to find all known email addresses
4. Verifies discovered emails with the Email Verifier — filters for quality scores above 70%
5. Uses Email Finder for specific decision-makers: `GET /v1/find?first_name=&last_name=&domain=<target-domain>&key=<key>` when the user has named contacts in mind
6. Saves all qualified leads to a "Berlin Fintech" collection in Minelead's Leads/CRM
7. Exports the collection to Google Sheets or Zoho CRM for the sales team to begin outreach
**Result**: User has a targeted list of fintech companies in Berlin with verified contact emails, organized in a lead collection and ready for export to CRM

## Troubleshooting

### Domain search returning zero results for a known company
**Symptom**: Calling `GET /v1/search?domain=example.com&key=<key>` returns an empty result set even though the company is well-known and has many employees.
**Cause**: The domain may not be indexed in Minelead's database yet, the company may use a different primary domain than expected (e.g., a parent company domain or country-specific domain), or the domain may be classified as a webmail provider and excluded from results.
**Solution**: Verify the domain is the company's primary business domain — check their website and LinkedIn page. Try alternate domains (e.g., company.co.uk vs company.com, or a parent company domain). If the company is small or new, it may not yet be indexed — try the Email Finder endpoint with specific names instead, as it uses a different lookup mechanism. If you consistently get no results for domains you expect to have coverage, contact Minelead support to check index status.

### Email verification returning inconsistent quality scores
**Symptom**: The same email address returns different quality scores on repeated verification calls, or emails you know are valid receive low scores.
**Cause**: Quality scores depend on real-time checks (MX records, SMTP responses) that can vary based on the recipient mail server's behavior at the time of the check. Catch-all domains are a common source of inconsistency — the server accepts all addresses, making it impossible to confirm whether a specific mailbox exists. Temporary server issues or greylisting can also cause fluctuating scores.
**Solution**: For catch-all domains, treat all emails as "unverifiable" rather than relying on the quality score — these domains accept everything, so even non-existent addresses may score moderately. If scores fluctuate for non-catch-all domains, re-verify after 24 hours to account for temporary server issues. For critical outreach, use a multi-tool verification approach — cross-check with a second verification service (see `/sales-deliverability` for strategy). Quality scores are probabilistic, not deterministic — use them as one input into your send/no-send decision, not the sole factor.

### Campaign emails landing in spam despite verified addresses
**Symptom**: Email campaigns sent through Minelead's campaign module are landing in recipients' spam folders even though the email addresses were verified with high quality scores.
**Cause**: Email verification confirms deliverability (the address exists and accepts mail) but does not guarantee inbox placement. Spam filtering depends on sender reputation, email content, authentication (SPF/DKIM/DMARC), sending volume, and recipient engagement. Common causes: new Gmail accounts with no sending history, high-volume sending from a single account, spammy content or subject lines, missing email authentication records.
**Solution**: Warm up connected Gmail accounts gradually — start with 10-20 sends per day and increase over 2-4 weeks. Use round-robin across multiple Gmail accounts to distribute volume and protect individual account reputation. Review email content for spam trigger words, excessive links, or image-heavy layouts. Ensure your sending domain has SPF, DKIM, and DMARC records configured. Monitor open and reply rates — low engagement signals to Gmail that your emails are unwanted. For comprehensive deliverability strategy beyond Minelead-specific settings, use `/sales-deliverability`.
