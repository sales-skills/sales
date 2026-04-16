---
name: sales-anymailfinder
description: "Anymail Finder platform help — email finder and verification tool with 97%+ delivery guarantee. Finds emails by person name, company/domain, decision-maker role, or LinkedIn URL, with bulk search up to 100K rows and a GeoLead Finder. Use when you can't find someone's email, need decision-maker contacts at a company, email addresses keep bouncing, bulk search results have low match rates, LinkedIn URLs aren't returning emails, or the Anymail Finder API isn't returning expected results. Do NOT use for cross-platform enrichment strategy (use /sales-enrich), email deliverability strategy (use /sales-deliverability), or prospect list strategy (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in Anymail Finder]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, platform]
github: "https://github.com/anymailfinder"
---
# Anymail Finder Platform Help

Help the user with Anymail Finder platform questions — from Email Finder (by person, company, decision maker, or LinkedIn URL) through Email Verification, Bulk Email Search, GeoLead Finder, and Domain Email operations. Anymail Finder is a London-based email finder and verification tool (AMF Internet Services Limited, founded 2015) offering a 97%+ delivery guarantee on verified emails, a REST API with no rate limits, and a Chrome Extension for in-workflow lookup.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Anymail Finder do you need help with?**
   - A) Email Finder by Person — find a verified email from first name + last name + company/domain (1 credit per valid result)
   - B) Email Finder by Company/Domain — find up to 20 email addresses at a company (1 credit)
   - C) Email Finder by Decision Maker — role-based search (ceo, engineering, finance, hr, it, logistics, marketing, operations, buyer, sales) returning name, title, LinkedIn URL, email (2 credits per valid result)
   - D) Email Finder by LinkedIn URL — extract email from a LinkedIn profile URL (1 credit)
   - E) Email Verifier — validate an email address as valid/risky/invalid (0.2 credits)
   - F) Bulk Email Search — process up to 100,000 rows asynchronously via JSON or CSV/Excel upload
   - G) GeoLead Finder — location-based lead discovery
   - H) Chrome Extension — browser-based email finding from any website
   - I) Domain Email Count/Order/Download — count, order, and download all emails at a domain
   - J) API — REST API setup, endpoints, authentication, webhooks
   - K) Account / Billing — plans, pricing, credits
   - L) Something else — describe it

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
- Email deliverability / warmup strategy (not Anymail Finder-specific) -> `/sales-deliverability`
- Prospect list building strategy -> `/sales-prospect-list`
- Connecting Anymail Finder to other tools via middleware -> `/sales-integration`
- Hunter.io-specific questions -> `/sales-hunter`
- Apollo-specific questions -> `/sales-apollo`
- Prospeo-specific questions -> `/sales-prospeo`
- Tomba-specific questions -> `/sales-tomba`
- Enrich.so-specific questions -> `/sales-enrichso`
- GetProspect-specific questions -> `/sales-getprospect`
- Minelead-specific questions -> `/sales-minelead`
- Skrapp-specific questions -> `/sales-skrapp`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Anymail Finder platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Finding a specific person's email by name and company**:
   1. Call `POST /v5.1/search/person.json` with `full_name` and `company_name` or `domain` in the request body, with `Authorization: <your-api-key>` header
   2. Set your HTTP client timeout to at least 180 seconds — real-time searches can take up to 3 minutes as the system checks multiple data sources
   3. Check the response status: `valid` means the email is verified with 97%+ delivery guarantee, `risky` means unverified (returned free but less reliable), `not_found` means no result (also free)
   4. For valid results, use the email directly for outreach — the 97%+ guarantee means very low bounce risk
   5. For risky results, consider running the Email Verifier separately or cross-checking with another tool before outreach
   6. Re-searching the same person within 30 days is free — safe to retry if you need to check again

2. **Finding decision-maker emails by role at a company**:
   1. Call `POST /v5.1/search/decision_maker.json` with `domain` and `category` (one of: ceo, engineering, finance, hr, it, logistics, marketing, operations, buyer, sales)
   2. Note that this costs 2 credits per valid result (double the person search) — budget accordingly for large lists
   3. The response includes name, title, LinkedIn URL, and email — useful for building account maps without knowing specific names
   4. For multiple roles at the same company, make separate requests per category
   5. Combine with the Email Verifier (0.2 credits) if you want additional validation beyond the initial search

3. **Running a bulk email search for a large prospect list**:
   1. Prepare your data as JSON (up to 100,000 rows) or as a CSV/Excel file
   2. Submit via `POST /v5.1/bulk/search.json` (JSON) or `POST /v5.1/bulk/upload.json` (file upload)
   3. Include `x-webhook-url` header if you want to be notified when processing completes
   4. Processing is async — expect approximately 1,000 rows every 5 minutes
   5. Credits are charged only when you download results, not when you submit the job — you can review the output before committing credits
   6. Download results when the job completes and filter by status: prioritize `valid` emails, handle `risky` results with caution

4. **Verifying an existing email list**:
   1. For individual emails: `POST /v5.1/verify.json` with `email_address` — returns valid, risky, or invalid status at 0.2 credits each
   2. Repeated verifications of the same email within 30 days are free
   3. For large lists, use bulk operations to process efficiently
   4. Filter results: use `valid` emails for outreach, flag `risky` for manual review, discard `invalid`
   5. Be aware that catch-all domains may return `risky` status even for valid mailboxes — these domains accept all mail regardless of whether the address exists

## Gotchas

> *Best-effort from research — review these, especially items about credit costs, API behavior, and feature limitations that may have changed since this was written.*

1. **Decision Maker search costs 2x — 2 credits per valid result vs 1 credit for a standard person search.** Budget accordingly when using role-based searches at scale. If you know the person's name, a standard person search at 1 credit is more cost-effective than a decision maker search at 2 credits.

2. **You are only billed for valid results — risky results are returned free but are less reliable.** A `risky` status means the email was found but could not be fully verified. These emails may still work, but they carry higher bounce risk. Do not treat risky results as equivalent to valid ones — consider additional verification or a more cautious sending approach for risky addresses.

3. **Real-time person searches can take up to 180 seconds — set your HTTP timeout accordingly.** The default timeout in many HTTP clients is 30 seconds, which will cause requests to fail prematurely. Set a minimum 180-second timeout for all search endpoints. If you are building a user-facing integration, show a loading state and consider using webhooks for async notification instead of blocking the UI.

4. **Bulk search credits are charged on download, not on job creation.** This means you can submit a large job, review the results summary, and decide whether to download (and pay) or discard. However, do not assume the job is "free" until download — plan for the credit cost when you submit, or you may be surprised when you try to download and lack sufficient credits.

5. **GeoLead Finder documentation is incomplete — expect experimentation.** The GeoLead Finder endpoints (Create, Get Info, Download Results) exist but have limited public documentation. Test with small requests first to understand input parameters, response formats, and credit costs before committing to large-scale geographic lead searches.

6. **Catch-all domains may return a risky status even for valid mailboxes.** Catch-all (or accept-all) domains are configured to accept email for any address at the domain, making it impossible to verify whether a specific mailbox exists. Anymail Finder returns `risky` for these because it cannot confirm deliverability to the specific address. If your target company uses a catch-all domain, you will consistently get risky results — this is expected behavior, not a data quality issue.

7. **No rate limits does not mean instant responses at high volume — requests are queued.** Anymail Finder has no explicit rate limits and the system auto-scales, but at high request volumes, requests enter a queue rather than being processed simultaneously. Response times will increase proportionally with volume. For large-scale operations, use the bulk endpoints rather than making thousands of individual API calls.

8. **Chrome Extension requires an active login to anymailfinder.com in the same browser.** The extension will not work if you are logged out of the Anymail Finder website. If the extension stops finding emails, check that your session has not expired. Credits are deducted from your account the same as API usage.

9. **Credit accumulation is capped at 2x your plan size.** Unused credits roll over month to month, but only up to twice your monthly allocation. For example, the Standard plan (1,000 credits/mo) can accumulate a maximum of 2,000 credits. Any credits beyond the cap are forfeited. If you consistently under-use your plan, consider downgrading rather than assuming credits will bank indefinitely.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Cross-platform datan enrichment strategy (multi-tool enrichment workflows, waterfall enrichment)
- `/sales-deliverability` — Email deliverability and verification strategy (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-prospect-list` — Prospect list building strategy and best practices
- `/sales-integration` — Connect Anymail Finder to CRM, automation tools, or other platforms
- `/sales-hunter` — Hunter.io platform help (similar domain email search and verification)
- `/sales-apollo` — Apollo platform help (similar email finder with sales engagement)
- `/sales-prospeo` — Prospeo platform help (similar email finder with LinkedIn focus)
- `/sales-tomba` — Tomba platform help (similar email finder and verifier)
- `/sales-enrichso` — Enrich.so platform help (B2B datan enrichment API with LinkedIn and company data)
- `/sales-getprospect` — GetProspect platform help (similar email finder and lead generation)
- `/sales-minelead` — Minelead platform help (similar email finder, verifier, and lead generation)
- `/sales-skrapp` — Skrapp platform help (similar email finder with LinkedIn integration)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Finding a decision-maker's email by role
**User says**: "I need to reach the head of marketing at acme.com but I don't know their name."
**Skill does**:
1. Uses Decision Maker search: `POST /v5.1/search/decision_maker.json` with `domain: "acme.com"` and `category: "marketing"` — returns name, title, LinkedIn URL, and email
2. Checks the response status: `valid` means the email is verified with 97%+ delivery guarantee
3. Notes the cost: 2 credits for a valid decision maker result (vs 1 credit for a standard person search)
4. If the result is `risky`, recommends verifying separately with `POST /v5.1/verify.json` (0.2 credits) or cross-referencing the LinkedIn URL to confirm the person is still in-role
5. Provides the user with the contact's name, title, LinkedIn profile, and verified email for outreach
**Result**: User has a verified marketing decision-maker contact at acme.com with LinkedIn profile for context, ready for personalized outreach

### Example 2: Bulk email search with webhook notification
**User says**: "I have a CSV of 5,000 prospects with names and companies. I need to find their emails in bulk."
**Skill does**:
1. Uploads the CSV via `POST /v5.1/bulk/upload.json` with `Authorization: <api-key>` and `x-webhook-url: https://myapp.com/webhook` headers
2. Explains async processing: ~1,000 rows every 5 minutes, so 5,000 rows will take approximately 25 minutes
3. Notes that credits are not charged until the user downloads results — the user can review the job summary first
4. When the webhook fires (or the user polls for status), the results are ready for download
5. Advises filtering downloaded results: prioritize `valid` emails for outreach, handle `risky` with caution, discard `not_found`
6. Estimates credit cost: up to 5,000 credits if all results are valid (1 credit per person search), but risky/not-found results are free — actual cost depends on hit rate
**Result**: User has a bulk-processed list of verified emails for 5,000 prospects, with clear status indicators and credits charged only for valid results

### Example 3: Verifying and cleaning an existing email list
**User says**: "I have 200 email addresses from a trade show. How do I verify them before adding to my CRM?"
**Skill does**:
1. For individual verification: `POST /v5.1/verify.json` with `email_address` — returns valid, risky, or invalid (0.2 credits each)
2. For 200 emails, recommends bulk approach for efficiency — submit as JSON via `POST /v5.1/bulk/search.json` or upload as CSV
3. Estimates credit cost: 200 x 0.2 = 40 credits for verification — fits within even the Starter plan (50 credits/mo)
4. Explains status meanings: `valid` = safe to add to CRM and email (97%+ delivery guarantee), `risky` = may work but unverified (common for catch-all domains), `invalid` = do not email
5. Recommends segmenting: add `valid` to CRM immediately, hold `risky` for manual review or secondary verification, discard `invalid`
6. Notes that re-verifying any of these emails within 30 days is free — safe to re-check before a campaign launch
**Result**: User has a cleaned, segmented email list with 200 addresses verified at a cost of 40 credits, ready for CRM import with bounce risks removed

## Troubleshooting

### Person search returning not_found for a known contact
**Symptom**: Calling `POST /v5.1/search/person.json` with a correct name and domain returns `not_found` even though you know the person works at that company.
**Cause**: The person may not be indexed in Anymail Finder's database, the domain provided may not be the company's primary email domain, or the person may use a different name variation (e.g., "Bill" vs "William", maiden name vs married name).
**Solution**: Try alternate name spellings or variations. Try the company's primary domain vs subdomains or regional domains. Try the LinkedIn URL search instead (`POST /v5.1/search/linkedin.json`) if you have their LinkedIn profile — this uses a different lookup mechanism. If the company is small or the person is new to their role, they may not yet be indexed.

### Bulk job taking longer than expected
**Symptom**: A bulk search job with 10,000 rows has been processing for over an hour with no completion notification.
**Cause**: Processing speed is approximately 1,000 rows per 5 minutes under normal conditions, but high platform load can slow processing. The system auto-scales but is not instant — large jobs during peak hours may take longer.
**Solution**: Check job status via the API rather than relying solely on webhook notifications. If using webhooks, verify your webhook URL is accessible and returning 200 responses. For time-sensitive jobs, submit during off-peak hours. If a job appears stuck, contact Anymail Finder support with the job ID.

### Getting risky status on emails you expected to be valid
**Symptom**: Email searches return `risky` status for contacts at companies where you have successfully emailed people before.
**Cause**: The company likely uses a catch-all email domain — these domains accept mail for any address, making it impossible to verify whether a specific mailbox exists. Anymail Finder returns `risky` because it cannot confirm deliverability to the specific address with its 97%+ guarantee.
**Solution**: Check if the domain is catch-all by verifying a clearly fake address at the same domain (e.g., `zzz_nonexistent_12345@domain.com`) — if it also returns `risky`, the domain is catch-all. For catch-all domains, treat `risky` results as likely valid but unverifiable. Consider sending a low-risk initial email to confirm deliverability before adding to full outreach sequences. Remember that risky results are free — you are not charged credits for them.
