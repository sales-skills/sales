---
name: sales-skrapp
description: "Skrapp.io platform help — B2B email finder and datan enrichment with 200M+ contacts and 20M+ company profiles. Use when you can't find a prospect's email, LinkedIn profiles don't show contact info, your CSV of leads is missing emails and firmographics, email verification is bouncing too many contacts, the Chrome extension isn't pulling data from LinkedIn, or the Skrapp API isn't returning results. Do NOT use for general enrichment strategy (use /sales-enrich), deliverability/warmup (use /sales-deliverability), or building prospect lists strategy (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in Skrapp.io]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, linkedin, platform]
github: "https://github.com/skrappio"
---
# Skrapp.io Platform Help

Help the user with Skrapp.io platform questions — from Email Finder and Lead Finder through Data Enrichment, AI Fields, Email Verification, Chrome Extension, Company Search, and CRM Integrations. Skrapp.io is a Singapore-based (also Casablanca, Morocco) B2B email finder and datan enrichment platform used by 2M+ professionals with 3B+ email searches processed, offering a REST API and Chrome extension for in-workflow lookup.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Skrapp.io do you need help with?**
   - A) Email Finder — find a verified email by name + company/domain (92% success rate, single or bulk)
   - B) Lead Finder — search 200M+ B2B contacts with 17+ filters (job title, location, industry, company size, revenue, seniority)
   - C) Data Enrichment — bulk CSV/Excel upload, auto-map columns, enrich with emails + firmographics (industry, revenue, employee count, location)
   - D) AI Fields — ML-powered attributes: buying role, seniority, function, gender — auto-populated during enrichment
   - E) Email Verifier — single + bulk verification (97% accuracy), syntax/format/mailbox checks, disposable detection
   - F) Chrome Extension — LinkedIn & Sales Navigator email extraction (25 profiles/sec), multi-page enrichment on Pro+
   - G) Company Search — find all professionals at a company by domain (20M+ company profiles)
   - H) CRM Integrations — HubSpot, Salesforce, Zoho, Pipedrive, Outreach, Zapier
   - I) API — REST API setup, endpoints, authentication
   - J) Account / Billing — plans, pricing, credits
   - K) Something else — describe it

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
- Email deliverability / warmup strategy (not Skrapp-specific) -> `/sales-deliverability`
- Prospect list building strategy -> `/sales-prospect-list`
- Outbound sequence / cadence strategy -> `/sales-cadence`
- Connecting Skrapp to other tools via middleware -> `/sales-integration`
- Hunter.io-specific questions -> `/sales-hunter`
- Apollo-specific questions -> `/sales-apollo`
- Prospeo-specific questions -> `/sales-prospeo`
- Tomba-specific questions -> `/sales-tomba`
- Enrich.so-specific questions -> `/sales-enrichso`
- GetProspect-specific questions -> `/sales-getprospect`
- Minelead-specific questions -> `/sales-minelead`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Skrapp.io platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Finding a specific person's email**:
   1. Use the Email Finder: `GET /api/emailFinder?name=Jane+Doe&domain=example.com` with your `X-Access-Key` header
   2. Skrapp returns the most likely professional email with verification status — 92% success rate
   3. If the email is returned as "accept-all", the domain accepts all addresses so deliverability is uncertain — verify separately or proceed with caution
   4. For batch lookups, prepare a CSV with name and domain columns and use the bulk Email Finder (`POST /api/bulk/emailFinder`)
   5. No credit is charged if Skrapp cannot find a result or the contact was already looked up — budget only for successful finds
   6. Save found contacts to a Skrapp list for organization and CRM sync

2. **Building a filtered prospect list**:
   1. Open Lead Finder and apply filters: job title, seniority, industry, location, company size, revenue
   2. Skrapp searches 200M+ contacts and returns matching results — each contact reveal costs 1 credit
   3. Use AI Fields (Pro+ only) to auto-classify contacts by buying role, seniority, and function — these are added automatically
   4. Save results to a Skrapp list using the List Saver feature
   5. Sync the list to your CRM (HubSpot, Salesforce, Zoho, Pipedrive, or Outreach) via native integration — sync operates at the list level
   6. For very large prospect builds, use multiple filter combinations to stay within credit budget and prioritize highest-value segments first

3. **Enriching a CSV of contacts with email and company data**:
   1. Prepare your CSV or Excel file with columns for name and company/domain (Skrapp auto-maps common field names)
   2. Upload via Data Enrichment — Skrapp detects and maps columns, then enriches each row with email addresses and firmographics (industry, revenue, employee count, location)
   3. Review the auto-mapping before starting — if columns have non-standard names, manually adjust the mapping to avoid mismatches
   4. AI Fields (Pro+ only) will auto-populate buying role, seniority, function, and gender for each enriched contact
   5. Download the enriched file or save results to a Skrapp list for CRM sync
   6. Run Email Verifier on the enriched emails to validate deliverability before outreach — verification is a separate step from enrichment
   7. Budget: 1 credit per successfully enriched row — no charge for rows where Skrapp cannot find an email

4. **Extracting emails from LinkedIn with the Chrome Extension**:
   1. Install the Skrapp Chrome extension and log in with your Skrapp account
   2. Navigate to a LinkedIn profile or Sales Navigator search results page
   3. For single profiles: click the Skrapp icon to extract the email — 1 credit per successful extraction
   4. For bulk extraction (Pro+ only): on a LinkedIn search results page, use multi-page enrichment to process entire pages at up to 25 profiles/sec
   5. Use the List Saver to save extracted contacts directly to a Skrapp list without leaving LinkedIn
   6. Auto-connect feature (Pro+) can send connection requests alongside email extraction
   7. Be mindful of LinkedIn's own rate limits — even though Skrapp can process 25 profiles/sec, aggressive scraping may trigger LinkedIn restrictions

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and credit behavior that may have changed since last verified.*

1. **API access requires Enterprise plan (€262/mo) — Professional plan does not include API access.** If you need programmatic access to Skrapp's email finder, verifier, or company info endpoints, you must be on the Enterprise plan. Professional plan users are limited to the web UI, Chrome extension, and CRM integrations. Budget accordingly if you are planning to build an integration or automated workflow that depends on the API.

2. **Credits are not charged for duplicates or invalid results — but this only applies to exact duplicates within your account.** If you look up the same person+domain combination twice, the second lookup is free. Similarly, if Skrapp cannot find an email for a contact, no credit is deducted. However, looking up the same person at a different domain, or re-verifying a previously verified email, may still consume a credit. Track your credit usage in the account dashboard to avoid surprises.

3. **AI Fields (buying role, seniority, function, gender) are only available on Professional plan and above.** Free plan users will not see AI-enriched attributes on their contacts. AI Fields are auto-populated during enrichment and do not cost extra credits, but the feature itself is gated to paid plans. If your segmentation or routing workflow depends on these attributes, ensure your team is on at least the Professional plan.

4. **LinkedIn Chrome extension is subject to LinkedIn's rate limits, not just Skrapp's.** While Skrapp can extract up to 25 profiles per second, LinkedIn may throttle or temporarily restrict your account if it detects aggressive scraping behavior. Keep extraction volume reasonable — spread large extraction sessions across multiple days, use Sales Navigator for higher extraction allowances, and avoid running the extension during off-peak hours when unusual activity is more visible. A temporary LinkedIn restriction is unrelated to Skrapp and must be resolved with LinkedIn directly.

5. **Multi-page LinkedIn enrichment is only available on Professional plan and above.** Free plan users can extract emails from individual LinkedIn profiles but cannot bulk-extract from LinkedIn search result pages. If you need to enrich entire search result pages or process multiple pages of Sales Navigator results, you must upgrade to Professional (€30/mo) or Enterprise (€262/mo).

6. **CRM sync operates at the list level, not the individual contact level.** When you sync a Skrapp list to HubSpot, Salesforce, Zoho, Pipedrive, or Outreach, the sync applies to the entire list — you cannot selectively sync individual contacts from a list. To control what gets synced, organize your contacts into purpose-specific lists before initiating a sync. Changes to the list after sync may require a re-sync depending on the CRM integration.

7. **Bulk enrichment auto-mapping may misidentify columns with non-standard names.** Skrapp's Data Enrichment auto-maps CSV/Excel columns based on common field names (e.g., "first_name", "company", "domain"). If your file uses non-standard headers (e.g., "org" instead of "company", or "website" instead of "domain"), the auto-mapping may assign them incorrectly or skip them entirely. Always review the column mapping preview before starting an enrichment job — incorrect mapping wastes credits on bad matches.

8. **Email Verifier confirms the mailbox exists but does not guarantee inbox delivery.** A "valid" verification result means the email address exists and the mailbox accepts mail — it does not mean your email will land in the inbox rather than spam. Deliverability depends on your sender reputation, email content, authentication (SPF/DKIM/DMARC), and sending volume. For deliverability strategy beyond verification, use `/sales-deliverability`. Accept-all domains are particularly tricky — verification will return "accept-all" status even for non-existent mailboxes at those domains.

9. **SSO (Single Sign-On) is only available on Enterprise plan.** If your organization requires SSO for security compliance, you must be on the Enterprise plan (€262/mo). Professional plan teams manage access through individual email/password accounts. This can be a blocker for organizations with strict IT security policies that mandate SSO for all SaaS tools.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-enrich` — Cross-platform datan enrichment strategy (multi-tool enrichment workflows, waterfall enrichment)
- `/sales-deliverability` — Email deliverability and verification strategy (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-prospect-list` — Prospect list building strategy and best practices
- `/sales-cadence` — Outbound sequence and cadence strategy (multi-channel, timing, follow-up)
- `/sales-integration` — Connect Skrapp to CRM, automation tools, or other platforms
- `/sales-hunter` — Hunter.io platform help (similar domain email search and verification)
- `/sales-apollo` — Apollo platform help (similar B2B contact database with email finder)
- `/sales-prospeo` — Prospeo platform help (similar email finder with LinkedIn focus)
- `/sales-tomba` — Tomba platform help (similar email finder and verifier)
- `/sales-enrichso` — Enrich.so platform help (B2B datan enrichment API with LinkedIn and company data)
- `/sales-getprospect` — GetProspect platform help (similar B2B email finder and lead database)
- `/sales-minelead` — Minelead platform help (similar email finder, verifier, and lead generation)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Finding decision-maker emails for account-based outreach
**User says**: "I need to find the VP of Sales email at three target companies: acmecorp.com, globaltech.io, and newera.co."
**Skill does**:
1. Uses Email Finder for each: `GET /api/emailFinder?name=VP+Sales&domain=acmecorp.com` with `X-Access-Key` header — repeats for each domain
2. If the user has specific names, refines the search: `GET /api/emailFinder?name=Jane+Doe&domain=acmecorp.com` for higher accuracy (92% success rate with full name)
3. Alternatively, uses Company Search on each domain to find all contacts and filter by title containing "VP" or "Sales"
4. Verifies each found email: `GET /api/emailVerifier?email=<found-email>` — checks for valid/invalid/accept-all status
5. Notes that accept-all domains will return a positive result even for non-existent mailboxes — flags these for extra caution
6. Saves verified contacts to a Skrapp list and syncs to the user's CRM via native integration
7. Credits used: 1 per successful find + 1 per verification — no charge if Skrapp cannot find an email
**Result**: User has verified VP of Sales emails for three target accounts, saved to a list and synced to CRM for outreach

### Example 2: Bulk CSV enrichment with AI Fields for segmentation
**User says**: "I have an Excel file with 2,000 contacts from a trade show — just names and companies. I need emails, company info, and want to segment by buying role."
**Skill does**:
1. Confirms user is on Professional plan or above (required for AI Fields — buying role, seniority, function, gender)
2. Uploads the Excel file to Data Enrichment — Skrapp auto-maps "name" and "company" columns
3. Advises the user to review the auto-mapping preview before starting — non-standard column headers may be misidentified
4. Enrichment runs: each row is enriched with email address + firmographics (industry, revenue, employee count, location) + AI Fields (buying role, seniority, function, gender)
5. Credits used: 1 per successfully enriched contact — no charge for rows where no email is found; budget for ~1,500-1,800 credits assuming 75-90% match rate
6. Downloads enriched file and segments by AI Fields: decision-makers go to senior AE team, influencers go to SDR nurture sequence, users go to product-led onboarding
7. Runs Email Verifier on all enriched emails before outreach — separate step, 1 credit per verification
8. Syncs segmented lists to CRM for routing to appropriate sales teams
**Result**: User has a fully enriched and segmented contact list from raw trade show data, with emails verified and contacts routed by buying role

### Example 3: LinkedIn prospecting with Chrome extension
**User says**: "I'm on Sales Navigator looking at a search of 500 marketing directors in the UK. How do I get their emails into my Skrapp list?"
**Skill does**:
1. Confirms user is on Professional plan or above (required for multi-page LinkedIn enrichment)
2. Instructs user to open the Skrapp Chrome extension on the Sales Navigator search results page
3. Uses multi-page enrichment to process the search results — Skrapp extracts emails at up to 25 profiles/sec across multiple pages
4. Contacts are saved directly to a Skrapp list using the List Saver feature — no need to leave LinkedIn
5. Warns about LinkedIn rate limits: even though Skrapp can process quickly, spreading extraction across multiple sessions reduces the risk of LinkedIn throttling
6. After extraction, runs Email Verifier on the list to validate deliverability — flags accept-all and invalid addresses
7. Syncs the verified list to CRM (e.g., HubSpot or Salesforce) via native list-level integration
8. Credits used: 1 per successful email extraction + 1 per verification
**Result**: User has 500 marketing director emails extracted from Sales Navigator, verified, and synced to CRM — ready for outbound cadence

## Troubleshooting

### Email Finder returning no results for a known contact
**Symptom**: Calling the Email Finder with a person's name and company domain returns no email, even though the person is publicly listed on the company website or LinkedIn.
**Cause**: The person may not be indexed in Skrapp's database yet, the name spelling may not match Skrapp's records (common with international names or nicknames), or the company may use a different email domain than the website domain.
**Solution**: Try the exact name as listed on LinkedIn (including middle names or initials if present). Try alternate domain spellings — some companies use a different domain for email than their website (e.g., the parent company domain). Use Company Search on the domain first to see which contacts Skrapp has indexed — if the person isn't listed, they may not be in the database yet. As a fallback, use the Chrome extension on their LinkedIn profile for a direct extraction attempt.

### Bulk enrichment returning low match rates
**Symptom**: Uploading a CSV for Data Enrichment and getting emails for only 30-40% of rows, lower than the expected 70-90% match rate.
**Cause**: Poor input data quality is the most common cause — misspelled company names, personal email domains instead of company domains, outdated company names (post-acquisition or rebrand), or missing/incomplete name fields. Auto-mapping may also have misidentified columns.
**Solution**: Review the column mapping preview — ensure name and company/domain columns are correctly mapped. Clean your input data: use current company names, ensure domains are business domains (not gmail.com or yahoo.com), and include full names (first + last) rather than just first names. For contacts where Skrapp cannot find an email, try using the company's LinkedIn URL as an alternative identifier. Consider a waterfall approach — run unmatched contacts through a second enrichment tool (see `/sales-enrich` for multi-tool strategy).

### CRM sync not updating with new contacts added to a list
**Symptom**: You added new contacts to a Skrapp list that is synced to your CRM, but the new contacts are not appearing in the CRM.
**Cause**: CRM sync operates at the list level and may not automatically push incremental updates — depending on the integration, you may need to manually re-trigger the sync after adding new contacts to an already-synced list.
**Solution**: Check the integration settings for your CRM — some integrations support auto-sync on list changes, while others require a manual re-sync. Try disconnecting and reconnecting the list sync to force a full refresh. If the issue persists, export the list as CSV and import directly into your CRM as a workaround. For real-time sync needs, consider using the Zapier integration which can trigger on new contacts added to a list.
