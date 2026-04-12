---
name: sales-zerobounce
description: "ZeroBounce platform help — email validation, email finder, AI scoring, activity data, inbox placement testing, blacklist monitoring, DMARC, warmup. Use when your email list has too many bounces, catch-all addresses are hurting deliverability, you need to check if your IP is blacklisted, DMARC reports show unauthorized senders, or the ZeroBounce API isn't returning expected validation results. Do NOT use for general deliverability strategy (use /sales-deliverability), enrichment strategy (use /sales-enrich), or prospect list building strategy (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in ZeroBounce]"
license: MIT
version: 1.0.0
tags: [sales, email-verification, deliverability, platform]
github: "https://github.com/zerobounce"
---
# ZeroBounce Platform Help

Help the user with ZeroBounce platform questions — from email validation and list cleaning through AI scoring, activity data, inbox placement testing, blacklist monitoring, DMARC monitoring, email warmup, API integration, and email finder.

ZeroBounce is an email validation and deliverability platform with 99.6% accuracy across 30+ email status types. SOC 2 Type 2 and ISO-27001 certified, GDPR/HIPAA/CCPA compliant. Core strengths: bulk and real-time email validation, AI-powered catch-all scoring, activity data for engagement tracking, inbox placement testing, blacklist monitoring, DMARC monitoring, and email warmup.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of ZeroBounce do you need help with?**
   - A) Email Validation — bulk list cleaning or real-time API verification
   - B) Email Finder — B2B email discovery by name + domain
   - C) Email Scoring (AI) — catch-all validation and engagement scoring
   - D) Activity Data — subscriber engagement tracking
   - E) Inbox Placement Testing — test email configs and inbox vs. spam placement
   - F) Blacklist Monitoring — IP/domain blacklist checks across 200+ providers
   - G) DMARC Monitor — domain authentication monitoring and policy setup
   - H) Email Warmup — domain/IP reputation building
   - I) API & SDKs — programmatic access, automation
   - J) Integrations — HubSpot, Salesforce, Mailchimp, Zapier, etc.
   - K) Account & Billing — credits, pricing, plans
   - L) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Marketer / Email marketer
   - E) Admin / IT
   - F) Founder / solo seller
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal — e.g., "clean 100K contacts before a HubSpot campaign", "set up blacklist monitoring for 5 sending IPs", "validate catch-all addresses with AI scoring")

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General deliverability strategy (SPF/DKIM/DMARC, warmup planning, inbox placement strategy) → `/sales-deliverability`
- Enrichment strategy across tools (waterfall enrichment, CRM hygiene) → `/sales-enrich`
- Building prospect lists / ICP definition → `/sales-prospect-list`
- Connecting tools via Zapier/webhooks generically → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — ZeroBounce platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question, provide step-by-step instructions:

### Bulk list validation workflow
1. **Prepare your list**: Export contacts as CSV with one email per row. Remove duplicates to save credits.
2. **Upload**: Log in to ZeroBounce → Bulk Email Validator → upload your CSV file. Or use `POST /v2/sendfile` via the API.
3. **Wait for processing**: ZeroBounce processes the list asynchronously. Check status via the dashboard or `GET /v2/filestatus`.
4. **Review results**: Download results via the dashboard or `GET /v2/getfile`. Review the breakdown by status (Valid, Invalid, Catch-All, Spam Trap, Abuse, Disposable, Unknown, Do Not Mail).
5. **Handle catch-all addresses**: Run AI Scoring on catch-all results. Set a score threshold (7+ recommended) for inclusion.
6. **Download clean list**: Export Valid emails (and high-scoring catch-all) for campaigns.
7. **Import to your campaign tool**: Upload the clean list to your ESP, CRM, or campaign platform.
8. **Re-verify regularly**: Re-validate every 3 months or before any major campaign.

### Real-time API validation setup
1. **Get your API key**: Log in to ZeroBounce → API settings → copy your API key.
2. **Choose your region**: Default (`api.zerobounce.net`), US (`api-us.zerobounce.net`), or EU (`api-eu.zerobounce.net`).
3. **Integrate**: Call `GET /v2/validate?api_key=YOUR_KEY&email=user@example.com` for single validation, or `POST /v2/validatebatch` for up to 200 at once.
4. **Handle responses**: Check the `status` field — route Valid emails to your system, reject Invalid/Spam Trap/Abuse/Disposable, and flag Catch-All for AI Scoring.
5. **Use an SDK**: ZeroBounce offers 13 official SDKs — use the one for your language instead of raw HTTP calls.
6. **Monitor usage**: Check credits with `GET /v2/getcredits` and usage with `GET /v2/getusage`.

### Blacklist monitoring setup
1. **Add your IPs and domains**: In ZeroBounce → Blacklist Monitor → add all sending IPs (IPv4 and IPv6) and domains.
2. **Configure alerts**: Set up email or webhook notifications for blacklist events.
3. **Review initial scan**: ZeroBounce runs an initial check — review any existing blacklist entries.
4. **Act on alerts**: When you receive a blacklist alert, identify the blacklist provider, check their delisting process, and submit a delisting request. Cross-reference with recent sending activity to find the cause.
5. **Monitor continuously**: Check the dashboard regularly — some blacklists auto-expire, others require manual delisting.

### DMARC monitoring setup
1. **Add your domains**: In ZeroBounce → DMARC Monitor → add all domains you send email from.
2. **Publish DMARC record**: If you don't have a DMARC record yet, start with `v=DMARC1; p=none; rua=mailto:your-dmarc-reports@yourdomain.com`. ZeroBounce provides the correct record to publish.
3. **Monitor reports**: Review DMARC aggregate reports in the dashboard — identify all authorized senders.
4. **Tighten policy gradually**: Once you've identified all legitimate senders, move from p=none → p=quarantine → p=reject over weeks/months.
5. **Watch for suspicious activity**: Act on alerts about unauthorized senders spoofing your domain.

### Email warmup workflow
1. **Connect your email account**: In ZeroBounce → Email Warmup → connect the Gmail or Outlook account you want to warm up.
2. **Configure settings**: Set daily send volume targets and ramp-up schedule.
3. **Start warmup**: ZeroBounce begins automated engagement — sending, opening, replying, and rescuing from spam.
4. **Monitor progress**: Check warmup metrics in the dashboard — delivery rates, inbox placement rates.
5. **Run inbox placement tests**: After 2-3 weeks, run placement tests to verify reputation improvement.
6. **Transition to campaigns**: Once warmup metrics stabilize, begin sending real campaigns at low volume and gradually increase.

## Gotchas

*Best-effort from research — review these, especially items about pricing, credit costs, and API behavior that may have changed.*

- **Don't treat Catch-All as Valid or Invalid.** Catch-all domains accept all emails at the SMTP level, so ZeroBounce cannot confirm individual mailbox existence through standard validation alone. Don't blindly include them (risking bounces) or blindly exclude them (losing valid prospects). Use AI Scoring to evaluate catch-all addresses individually — it's what the feature was designed for.
- **Don't underestimate Email Finder credit cost.** At 20 credits per successful find, a batch of 500 lookups can cost up to 10,000 credits — equivalent to validating 10,000 emails. Budget Email Finder usage separately from validation credits. If you need high-volume email discovery, compare the per-find cost against dedicated email finder tools.
- **Don't forget about regional API endpoints.** ZeroBounce offers US and EU regional endpoints in addition to the default. If you have data residency requirements (GDPR), use the EU endpoint (`api-eu.zerobounce.net`). If latency matters, use the regional endpoint closest to your infrastructure. The default endpoint works globally but may not satisfy compliance requirements.
- **Don't ignore the 80K/hour rate limit on credit endpoints.** At 80,000 requests per hour, you can process ~22 emails per second via real-time validation. For large lists, use bulk upload (`POST /v2/sendfile`) instead of hammering the real-time endpoint — bulk is async and handles scale better. Use batch validation (`POST /v2/validatebatch` for up to 200 at a time) as a middle ground.
- **Don't warm up and campaign simultaneously from the same account.** Email warmup builds reputation through controlled engagement patterns. Sending live campaigns during warmup disrupts these patterns and can hurt rather than help. Finish warmup first (2-4 weeks), then transition to live sending gradually.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-deliverability` — Email deliverability strategy across tools (SPF/DKIM/DMARC, warmup planning, inbox placement, bounce management)
- `/sales-enrich` — Enrichment strategy across tools (waterfall enrichment, CRM hygiene, credit optimization)
- `/sales-prospect-list` — Build targeted prospect lists with ICP definition and segmentation
- `/sales-integration` — Connect ZeroBounce to CRM and other tools via Zapier or direct integrations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Cleaning an email list before a HubSpot campaign
**User says**: "I have 50,000 contacts in HubSpot and want to verify them before sending a product launch email."
**Skill does**:
1. Recommends exporting the HubSpot contact list as CSV
2. Walks through uploading to ZeroBounce for bulk validation (50,000 credits needed)
3. Explains how to interpret results — remove Invalid, Spam Trap, Abuse, Disposable, and Do Not Mail
4. Recommends running AI Scoring on Catch-All results (set threshold at 7+ for inclusion)
5. Points to the native HubSpot integration as an alternative to manual export/import
**Result**: Clean, verified list re-imported to HubSpot with invalid and risky addresses removed, catch-all addresses scored and filtered

### Example 2: Setting up blacklist monitoring for sending infrastructure
**User says**: "We send from 3 IPs and 2 domains — I want to know immediately if we get blacklisted."
**Skill does**:
1. Walks through adding all 3 IPs (IPv4 and/or IPv6) and 2 domains to Blacklist Monitor
2. Configures email and webhook alerts for immediate notification
3. Explains the 200+ blacklist providers covered and the difference between auto-expiring and manual-delist lists
4. Recommends pairing with DMARC Monitor for complete domain authentication monitoring
5. Advises cross-referencing any blacklist hits with recent sending activity to identify the cause
**Result**: 24/7 blacklist monitoring across 200+ providers for all sending IPs and domains, with immediate alerts

### Example 3: Using the API to validate emails in real-time at signup
**User says**: "I want to add email validation to our signup form so fake emails don't enter our database."
**Skill does**:
1. Recommends the real-time validation endpoint `GET /v2/validate` or batch endpoint for form submissions
2. Shows authentication setup with the `api_key` parameter
3. Advises blocking Invalid, Disposable, Spam Trap, and Abuse statuses at the form level
4. Recommends using the regional API endpoint closest to the user's infrastructure for lowest latency
5. Suggests an SDK (13 available) for the user's backend language rather than raw HTTP calls
6. Calculates credit usage based on expected signup volume
**Result**: Real-time form validation preventing invalid, disposable, and risky emails from entering the database

## Troubleshooting

### High percentage of Catch-All results
**Symptom**: A large portion of your list comes back as Catch-All, making it hard to judge list quality.
**Cause**: Many corporate domains configure catch-all mail servers that accept all addresses — standard validation cannot confirm individual mailbox existence on these domains.
**Solution**: Run AI Scoring on all Catch-All results. Set a threshold score (7+ recommended) for inclusion in campaigns. Monitor bounce rates for scored addresses and adjust your threshold over time. If most of your list is catch-all, it likely skews toward large enterprises — this is normal.

### Bulk validation job stuck or slow
**Symptom**: Uploaded a CSV for bulk validation but the job status shows "processing" for an extended period.
**Cause**: Large lists take longer to process. Network issues during upload can cause incomplete file transfers. Malformed CSV formatting can slow processing.
**Solution**: Check job status via the dashboard or `GET /v2/filestatus`. For large lists (100K+), processing can take hours — this is normal. If stuck for more than 24 hours, delete the file with `GET /v2/deletefile` and re-upload. Ensure your CSV is properly formatted with one email per row and no special characters in the email column.

### API returning "Unknown" status for many emails
**Symptom**: Real-time validation returns "Unknown" status for a significant percentage of emails.
**Cause**: The receiving mail server timed out or returned an ambiguous response. Greylisting by the recipient server can cause temporary Unknown results. Network issues between ZeroBounce and the recipient server.
**Solution**: Retry Unknown emails after a few hours — greylisting typically resolves on subsequent attempts. If Unknown rates remain high for a specific domain, that domain's mail server may be aggressively blocking verification attempts. Do not treat Unknown as Valid — exclude from campaigns or retry before sending.
