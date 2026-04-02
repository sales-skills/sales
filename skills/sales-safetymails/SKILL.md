---
name: sales-safetymails
description: "SafetyMails platform help — bulk email verification (up to 2M emails, 19-step algorithm), real-time API validation (JavaScript embed for forms), Email Finder (B2B corporate lookup), list cleaning, spamtrap/disposable/catch-all detection, integrations. Use when asking 'how do I do X in SafetyMails', verifying emails with SafetyMails, cleaning email lists in SafetyMails, setting up SafetyMails API/JavaScript embed, using SafetyMails Email Finder, or managing SafetyMails integrations. Do NOT use for general deliverability strategy across tools (use /sales-deliverability), general enrichment strategy (use /sales-enrich), building prospect lists (use /sales-prospect-list), or connecting tools generically (use /sales-integration)."
argument-hint: "[describe what you need help with in SafetyMails]"
license: MIT
version: 1.0.0
tags: [sales, email-verification, deliverability, platform]
---
# SafetyMails Platform Help

Help the user with SafetyMails platform questions — from bulk email verification and list cleaning through real-time API validation, Email Finder, integrations, and credit management.

SafetyMails is a Brazil-founded email verification platform with 8,000+ customers and 2B+ emails verified. ISO 27001 certified. Core strengths: bulk list cleaning (up to 2M emails), real-time JavaScript embed for form validation, and B2B corporate email finder.

## Step 1 — Gather context

Ask the user:

1. **What area of SafetyMails do you need help with?**
   - A) Bulk Email Verification — upload and clean an email list
   - B) Real-Time API — JavaScript embed for forms/landing pages
   - C) Email Finder — find corporate emails by name + domain
   - D) Free Tools — single email verifier, password generator, email name generator
   - E) Integrations — RD Station, HubSpot, Mailchimp, Zapier, etc.
   - F) Reporting & Analytics — verification result breakdowns
   - G) Account & Billing — credits, pricing, plans
   - H) Something else — describe it

2. **What type of verification or lookup do you need?**
   - A) One-time list cleaning before a campaign
   - B) Ongoing form validation (real-time)
   - C) Finding corporate email addresses (Email Finder)
   - D) Checking a single email address
   - E) Not sure yet

3. **What's your goal?** (describe your specific objective — e.g., "clean 50K contacts before a Mailchimp campaign", "add real-time validation to a WordPress form", "find emails for 200 prospects")

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General deliverability strategy (SPF/DKIM/DMARC, warmup, inbox placement) → `/sales-deliverability`
- Enrichment strategy across tools (waterfall, CRM hygiene) → `/sales-enrich`
- Building prospect lists / ICP definition → `/sales-prospect-list`
- Connecting tools via Zapier/webhooks generically → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — SafetyMails platform reference

Provide guidance based on the user's area:

### Bulk Email Verification
- **What it is**: Upload email lists (CSV, TXT, XLS, XLSX, or paste) and SafetyMails runs a 19-step verification algorithm on every address
- **Scale**: Up to 2M emails per list
- **Algorithm checks**: Syntax validation, MX record lookup, catch-all/accept-all detection, spamtrap identification, disposable/temporary email detection, role-based address detection (info@, sales@, etc.), domain typo correction, and more (19 steps total)
- **Credit cost**: 1 credit per email verified
- **Turnaround**: Processing time depends on list size — small lists (under 10K) typically complete in minutes
- **Output**: Downloadable results with per-email status and overall list health summary
- **Best practices**: Remove duplicate emails before uploading to save credits. Segment results by verification status before importing into your campaign tool. Re-verify lists older than 3 months — email addresses decay over time.

### Real-Time API (JavaScript Embed)
- **What it is**: A JavaScript snippet you embed in forms and landing pages to validate email addresses as users type them, before they enter your database
- **Response time**: Under 1 second
- **How it works**: Add the JavaScript embed code to your form page. Configure with your API key (generated at panel.safetymails.com). Customize error messages for invalid emails.
- **Use cases**: Landing page forms, newsletter signups, registration flows, checkout forms
- **Best practices**: Always customize error messages to match your brand voice. Use the API to prevent invalid emails from entering your CRM/ESP in the first place — this is cheaper than cleaning lists after the fact.

> **API documentation note**: SafetyMails API docs at docs.safetymails.com are help-center style guides, not a formal REST API reference. There is no comprehensive endpoint-by-endpoint reference with request/response schemas. The primary API surface is the JavaScript embed for form validation. For programmatic bulk verification, use the web panel at panel.safetymails.com or integrations. If the user needs detailed REST API documentation, flag that it may be incomplete and recommend contacting SafetyMails support.

### Email Finder
- **What it is**: B2B corporate email lookup — provide a first name, last name, and company domain, and SafetyMails returns the corporate email address
- **Credit cost**: 7 credits per found email. 1 credit if the domain is risky/unverifiable. 0 credits if no email is found.
- **Auto-verified**: Found emails are automatically verified — no need to run a separate verification step
- **Best practices**: Use for targeted prospecting when you know the person and company. Budget 7 credits per successful lookup when planning credit purchases. Combine with bulk verification for lists that mix known and unknown emails.

### Free Tools
- **Single Email Verifier**: Check one email address at a time for free on the SafetyMails website
- **Password Generator**: Generate secure passwords (utility tool)
- **Email Name Generator**: Generate professional email address suggestions from a name

### Reporting & Analytics
- **Verification results**: Detailed breakdown of your list by status category (valid, invalid, catch-all, disposable, spamtrap, etc.)
- **List health score**: Overall assessment of list quality
- **Use**: Review reports to understand the hygiene of your lists and identify patterns (e.g., high spamtrap rate may indicate a purchased or scraped list)

### Data Model — Verification Statuses

| Status | Meaning | Action |
|---|---|---|
| **Valid** | Email exists and is deliverable | Safe to send |
| **Invalid** | Email does not exist or is undeliverable | Remove immediately — sending will hard bounce |
| **Catch-All / Accept-All** | Domain accepts all addresses — cannot confirm specific mailbox | Include with caution — monitor bounce rates closely |
| **Disposable / Temporary** | Throwaway email from services like Guerrilla Mail, Mailinator | Remove — these addresses expire quickly and indicate low-intent signups |
| **Spamtrap** | Known spam trap address maintained by blocklist providers | Remove immediately — sending to spamtraps severely damages sender reputation and can get your domain blocklisted |
| **Role-Based** | Generic address like info@, sales@, support@ (not a person) | Remove from prospecting lists — these go to shared inboxes, not individuals. OK for transactional email. |
| **Syntax Error** | Malformed email address (missing @, invalid characters, etc.) | Remove — not a real email address |
| **Domain Error** | Domain does not exist or has no MX records | Remove — domain cannot receive email |

### API Quick Reference

| Feature | Details |
|---|---|
| **Primary API surface** | JavaScript embed for real-time form validation |
| **Auth** | API key generated at panel.safetymails.com |
| **Docs** | docs.safetymails.com (help-center style guides, not REST reference) |
| **Response time** | <1 second for real-time validation |
| **Bulk verification** | Via web panel upload or integrations (not a documented REST endpoint) |
| **Trial** | 1,000 API credits free for 15 days on signup |
| **API access requirement** | Monthly subscription plan required (not available on pay-as-you-go) |

### Integrations

| Integration | Type | What it does |
|---|---|---|
| **RD Station** | Marketing automation | Sync and verify contacts from RD Station |
| **SendGrid** | ESP | Verify contacts before sending via SendGrid |
| **HubSpot** | CRM / Marketing | Clean HubSpot contact lists |
| **Mailchimp** | ESP | Verify Mailchimp audience lists |
| **ActiveCampaign** | Marketing automation | Clean ActiveCampaign contact lists |
| **WordPress** | CMS | Plugin for form validation on WordPress sites |
| **E-goi** | Marketing automation | Sync and verify E-goi contacts |
| **Pipedrive** | CRM | Verify Pipedrive contact emails |
| **Brevo** | ESP | Clean Brevo (formerly Sendinblue) contact lists |
| **Salesforce** | CRM | Verify Salesforce contact/lead emails |
| **Zapier** | Automation | Connect SafetyMails to 6,000+ apps |
| **Make** | Automation | Visual automation workflows with SafetyMails |
| **n8n** | Automation | Self-hosted automation with SafetyMails |
| **Pabbly Connect** | Automation | Workflow automation integration |
| **Pluga** | Automation | Brazil-focused integration platform |

### Pricing (as of March 2026 — verify current pricing)

| Plan | Price | Credits | Notes |
|---|---|---|---|
| **Free signup** | $0 | 100 bulk + 1,000 API trial (15 days) | No credit card required |
| **Pay-as-you-go** | From $7.50 | 1,000 credits | Credits never expire. No API access. |
| **Monthly subscription** | From $6.80/mo | 1,000 credits | Required for API/real-time access. Also available annually ($68/yr for 1K). |
| **Volume (pay-as-you-go)** | Tiered | Up to 2M credits | Per-credit cost decreases at higher volumes |
| **Volume (subscription)** | Tiered | Up to 2M credits/mo | Per-credit cost decreases at higher volumes |

**Credit economics**:
- Bulk verification: 1 credit = 1 email verified
- Email Finder: 7 credits per found email, 1 credit if domain is risky, 0 if not found
- Real-time API: 1 credit per validation
- API access requires a monthly subscription plan — pay-as-you-go does not include API access

## Step 4 — Actionable guidance

Based on the user's specific question, provide step-by-step instructions:

### Bulk list verification workflow
1. **Prepare your list**: Remove duplicates. Export as CSV, TXT, XLS, or XLSX with one email per row (or paste directly).
2. **Upload**: Log in at panel.safetymails.com → click "Verify List" → upload file or paste emails.
3. **Wait for processing**: SafetyMails runs the 19-step algorithm on every address. Small lists finish in minutes; large lists (1M+) take longer.
4. **Review results**: Check the breakdown by status (Valid, Invalid, Catch-All, Disposable, Spamtrap, Role-Based, Syntax Error, Domain Error).
5. **Download clean list**: Export only Valid emails for campaigns. Optionally include Catch-All with monitoring.
6. **Import to your campaign tool**: Upload the clean list to your ESP or campaign platform.
7. **Re-verify regularly**: Lists decay — re-verify every 3 months or before any major campaign.

### Real-time API setup (JavaScript embed)
1. **Get your API key**: Log in at panel.safetymails.com → navigate to API settings → generate a key.
2. **Requires subscription plan**: API access is only available on monthly subscription plans, not pay-as-you-go.
3. **Add JavaScript embed**: Copy the JavaScript snippet from your SafetyMails dashboard and add it to your form page's HTML.
4. **Configure validation**: Set which form fields to validate, customize error messages, and define behavior for invalid entries.
5. **Test**: Submit your form with known valid, invalid, and disposable emails to confirm validation works.
6. **Monitor**: Check your SafetyMails dashboard for validation stats and credit consumption.

### Email Finder workflow
1. **Gather prospect info**: You need first name, last name, and company domain for each lookup.
2. **Run the lookup**: Use the Email Finder tool in the SafetyMails panel — enter the name and domain.
3. **Review results**: Found emails are auto-verified. Note the credit cost: 7 credits per found email, 1 for risky domains, 0 if not found.
4. **Budget credits**: For a list of 200 prospects, budget up to 1,400 credits (200 x 7) in the best case. Actual cost will be lower if some emails aren't found.
5. **Export and use**: Add found emails directly to your campaign — no separate verification needed.

## Gotchas

*Best-effort from research — review these, especially items about pricing tiers and API limitations that may have changed.*

- **Don't assume API access comes with every plan.** The real-time JavaScript API requires a monthly subscription plan. Pay-as-you-go credits do not include API access. If you only need bulk verification, pay-as-you-go works. If you need form validation or real-time checks, you must subscribe.
- **Don't underestimate Email Finder credit cost.** At 7 credits per found email, a batch of 500 lookups can cost up to 3,500 credits. Budget accordingly. The upside: you pay 0 credits when an email is not found, and only 1 credit for risky domains.
- **Don't expect a full REST API reference.** SafetyMails documentation at docs.safetymails.com is help-center style (guides, FAQs, how-tos), not a formal REST API reference with endpoint schemas. The primary programmatic interface is the JavaScript embed for form validation. For bulk verification, use the web panel or integrations rather than trying to build custom REST calls.
- **Don't send to Catch-All addresses without monitoring.** Catch-All/Accept-All domains accept all emails at the SMTP level — SafetyMails cannot confirm individual mailbox existence. Including these in campaigns is a judgment call: they may be fine, or they may bounce. Monitor bounce rates closely if you include them.
- **Don't ignore spamtrap results.** If SafetyMails flags addresses in your list as spamtraps, take it seriously. Even a single spamtrap hit can get your sending domain blocklisted. A high spamtrap rate in your list likely means the list was purchased, scraped, or hasn't been cleaned in a very long time — consider the source.

## Step 5 — Related skills

- `/sales-deliverability` — Email deliverability strategy across tools (SPF/DKIM/DMARC, warmup, inbox placement, bounce management)
- `/sales-enrich` — Enrichment strategy across tools (waterfall enrichment, CRM hygiene, credit optimization)
- `/sales-integration` — Connect SafetyMails to CRM and other tools via Zapier, Make, or direct integrations
- `/sales-prospect-list` — Build targeted prospect lists with ICP definition and segmentation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Cleaning an email list before a Mailchimp campaign
**User says**: "I have 25,000 contacts in Mailchimp and want to verify them before sending a product launch email"
**Skill does**:
1. Recommends exporting the Mailchimp audience as CSV
2. Walks through uploading to SafetyMails for bulk verification (25,000 credits needed)
3. Explains how to interpret results — remove Invalid, Spamtrap, Disposable, Syntax Error, and Domain Error
4. Advises on handling Catch-All addresses (include with bounce monitoring or exclude for safety)
5. Points to the Mailchimp integration as an alternative to manual export/import
**Result**: Clean, verified list re-imported to Mailchimp with invalid and risky addresses removed

### Example 2: Adding real-time validation to a landing page form
**User says**: "I want to stop fake emails from entering our HubSpot database through our demo request form"
**Skill does**:
1. Confirms a monthly subscription plan is needed for API access
2. Walks through generating an API key at panel.safetymails.com
3. Shows how to add the JavaScript embed to the landing page form
4. Recommends blocking Invalid, Disposable, and Role-Based addresses at the form level
5. Suggests custom error messages like "Please enter your corporate email address"
**Result**: Real-time form validation preventing invalid and disposable emails from entering HubSpot

### Example 3: Finding corporate emails for a prospect list
**User says**: "I have a spreadsheet with 150 names and company domains — I need to find their email addresses"
**Skill does**:
1. Explains Email Finder: input first name + last name + domain, output is auto-verified corporate email
2. Calculates credit budget: up to 1,050 credits (150 x 7) for successful lookups, likely less
3. Walks through using the Email Finder in the SafetyMails panel for each prospect
4. Notes that found emails are auto-verified — no separate verification step needed
5. Points to `/sales-enrich` if the user also needs phone numbers, titles, or company data beyond what SafetyMails provides
**Result**: Verified corporate email addresses for the prospect list, ready for outreach

## Troubleshooting

### High percentage of Catch-All results
**Symptom**: A large portion of your list comes back as Catch-All/Accept-All, making it hard to judge list quality
**Cause**: Many corporate domains configure catch-all mail servers that accept all addresses — SafetyMails (and any verification tool) cannot confirm individual mailbox existence on these domains
**Solution**: Segment catch-all results separately. For high-value prospects on catch-all domains, include them in campaigns but monitor bounce rates per-send. For bulk campaigns, consider excluding catch-all addresses to protect sender reputation. If most of your list is catch-all, the list may skew toward large enterprises — this is normal.

### API key not working / "Unauthorized" errors
**Symptom**: JavaScript embed or API calls return authentication errors
**Cause**: API key may be invalid, expired, or your account may be on a pay-as-you-go plan (which does not include API access)
**Solution**: Verify your API key at panel.safetymails.com → API settings. Confirm you are on a monthly subscription plan — pay-as-you-go does not include API access. Regenerate the key if needed. Check that the key is correctly embedded in your JavaScript snippet without extra spaces or line breaks.

### Credits consumed faster than expected
**Symptom**: Credit balance dropping faster than anticipated, especially when using Email Finder
**Cause**: Email Finder costs 7 credits per found email (vs. 1 credit per bulk verification). Duplicate emails in uploaded lists also consume credits.
**Solution**: Deduplicate lists before uploading to avoid paying twice for the same email. Track Email Finder usage separately — 100 successful lookups cost 700 credits. Use the free single email verifier on the SafetyMails website for one-off checks instead of spending bulk credits. Review usage reports in your dashboard to identify where credits are going.
