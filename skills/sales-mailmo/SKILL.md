---
name: sales-mailmo
description: "Mailmo platform help — Email Finder, Email Verifier, catch-all detection, LinkedIn Chrome extension, bulk verification, CSV export. Use when asking 'how do I do X in Mailmo', finding emails with Mailmo, verifying emails with Mailmo, using the Mailmo Chrome extension, or doing bulk verification in Mailmo. Do NOT use for building prospect lists (use /sales-prospect-list), cross-platform deliverability (use /sales-deliverability), enriching contacts across multiple tools (use /sales-enrich), or sending cold emails (Mailmo is a finder/verifier, not a sending tool — use /sales-cadence for outreach strategy)."
argument-hint: "[describe what you need help with in Mailmo]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, verification, platform]
---
# Mailmo Platform Help

Help the user with Mailmo platform questions — from finding and verifying emails through the LinkedIn Chrome extension, bulk verification, and CSV export workflows.

## Step 1 — Gather context

Ask the user:

1. **What area of Mailmo do you need help with?**
   - A) Email Finder — find a person's email by name + company domain
   - B) Email Verifier — verify an existing email address
   - C) Bulk Verification — upload and verify a list of emails
   - D) LinkedIn Chrome Extension — find emails while browsing LinkedIn
   - E) Credits & Billing — credit usage, plans, rollover
   - F) Export — getting data out of Mailmo (CSV)
   - G) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Recruiter / Talent Acquisition
   - E) Marketer / PR
   - F) Founder / solo seller
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- List building / prospecting strategy → `/sales-prospect-list`
- Enrichment across multiple tools → `/sales-enrich`
- Cross-platform deliverability / warmup → `/sales-deliverability`
- Cadence strategy / sending emails → `/sales-cadence`
- Connecting tools → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Mailmo platform reference

Provide module-by-module guidance based on the user's area:

### Email Finder
- **What it is**: Find a person's verified business email by entering their first name, last name, and company domain
- **How it works**: Mailmo searches its database and runs real-time verification including catch-all detection before returning the result
- **Verification included**: Every found email is verified before delivery — you don't pay for invalid addresses
- **Credit cost**: 1 credit per verified email found. No charge if no valid email is found or if you search for a duplicate (previously found email).
- **Best practices**: Use the company domain (not company name) for more accurate results. If no result is found, try alternate domain variations (e.g., company.com vs company.io).

### Email Verifier
- **What it is**: Validate whether an existing email address is deliverable — checks format, domain, MX records, SMTP response, and catch-all status
- **Catch-all detection**: Mailmo's key differentiator — proprietary catch-all verification claims up to 100% accuracy for identifying valid mailboxes on catch-all domains. Standard verifiers mark all catch-all addresses as "risky"; Mailmo attempts to verify the specific mailbox.
- **Credit cost**: 1 credit per verification
- **Best practices**: Verify all emails before cold outreach. Focus on catch-all domains where other verifiers can't give a definitive answer — this is where Mailmo adds the most value.

### Bulk Verification
- **What it is**: Upload a CSV list of email addresses for batch verification
- **How it works**: Upload CSV → Mailmo processes the list → download results with verification status per email
- **Credit cost**: 1 credit per verified email in the batch
- **Export**: Results available as CSV download with verification status column
- **Best practices**: Deduplicate your list before uploading to avoid wasting credits. Use bulk verification to clean lists before importing into outbound tools (Mailshake, Lemlist, Smartlead, etc.).

### LinkedIn Chrome Extension
- **What it is**: Chrome extension that finds verified emails directly on LinkedIn and Sales Navigator profiles
- **How it works**: While browsing a LinkedIn profile, click the Mailmo extension → it returns the person's verified email
- **Credit cost**: 1 credit per verified email found (same as web app)
- **Where to get it**: Chrome Web Store — search "Mailmo" (4.8/5 rating, 3,000+ users)
- **Best practices**: Use while browsing LinkedIn Sales Navigator search results to quickly build verified prospect lists. Combine with Sales Navigator filters to target specific personas.

### Credits & Billing
- **Credit system**: Pay-per-verified-email — you only pay for valid, deliverable emails. Invalid emails and duplicate searches are free.
- **Credit rollover**: Unused credits roll over to the next month — no "use it or lose it" pressure
- **Free duplicates**: Re-searching a person you've already found doesn't consume a credit
- **Plans** (as of March 2026 — verify current pricing):
  - Free: 50 verified emails/month
  - Starter ($9/mo): 500 verified emails/month
  - Professional ($39/mo): 2,500 verified emails/month
  - Ridiculous ($349/mo): 25,000 verified emails/month
- **All plans include**: Email Finder, Email Verifier, LinkedIn extension, Bulk verification, CSV export, credit rollover, free duplicate search

### Export & Workflow
- **CSV export**: Download found/verified emails as CSV for import into CRM or outbound tools
- **No native CRM integrations**: Mailmo does not have native HubSpot, Salesforce, or Pipedrive connectors. Use CSV export as the bridge.
- **No API**: No public API is documented. All operations are through the web app or Chrome extension.
- **Typical workflow**: Find emails (web app or Chrome extension) → Export CSV → Import into CRM or outbound tool (Mailshake, Lemlist, Smartlead, etc.)

### Mailmo data model

Core entities — understand these to navigate the platform:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Email Search** | A lookup for a person's email (name + domain) | Returns a verified Email result |
| **Email Verification** | A deliverability check on an existing email | Returns verification status |
| **Bulk Job** | A batch of emails uploaded for verification | Contains multiple Email Verifications |
| **Credits** | Monthly allocation of verified email lookups | Consumed by Finder and Verifier, rollover unused |

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Mailmo
2. **Credit optimization** — how to minimize credit usage for their workflow
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **Workflow recommendations** — how Mailmo fits into a broader sales stack (find in Mailmo → send via outbound tool)

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't confuse Mailmo with a sending tool.** Mailmo finds and verifies emails — it does NOT send cold emails. There are no campaigns, sequences, or outreach features. Claude may try to recommend "setting up a campaign in Mailmo." Always route to `/sales-cadence` or a platform skill (Mailshake, Lemlist, Smartlead) for sending.
- **Don't assume API access exists.** Mailmo does not appear to have a public API. All operations are through the web UI or Chrome extension. If a user asks about automating Mailmo via API, clarify this limitation and suggest alternatives (Hunter.io, Tomba, Prospeo) that offer APIs.
- **Don't overlook the catch-all verification value.** Mailmo's catch-all detection is its key differentiator. Standard verifiers mark all catch-all addresses as "risky" — Mailmo attempts to verify the specific mailbox. Recommend Mailmo specifically for lists with high catch-all domain rates where other verifiers fall short.
- **Don't forget credit rollover.** Unlike most competitors, unused Mailmo credits roll over month-to-month. This affects plan recommendations — a user with irregular usage patterns can stay on a lower plan and accumulate credits during slow months.
- **Don't skip the export step.** Since Mailmo has no native integrations, the CSV export is the only way to get data into other tools. Always include the export-and-import step when walking through workflows.

## Step 5 — Related skills

- `/sales-enrich` — Enrich contacts with verified emails/phones across multiple providers (Hunter, Tomba, Prospeo, Apollo, and more)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement, list hygiene
- `/sales-prospect-list` — Build prospect lists to find and verify with Mailmo
- `/sales-cadence` — Design outbound cadence strategy (use after finding emails with Mailmo)
- `/sales-hunter` — Hunter.io platform help (alternative email finder with API, Campaigns, Discover, Signals)
- `/sales-tomba` — Tomba platform help (alternative email finder with API and bulk operations)
- `/sales-prospeo` — Prospeo platform help (alternative enrichment with API and 5-step verification)
- `/sales-mailshake` — Mailshake platform help (for sending after finding emails with Mailmo)
- `/sales-lemlist` — Lemlist platform help (for sending after finding emails with Mailmo)
- `/sales-smartlead` — Smartlead platform help (for sending after finding emails with Mailmo)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Finding emails for a target list
**User says**: "I have a list of 200 names and companies. How do I find their emails in Mailmo?"
**Skill does**:
1. Recommends using Mailmo's Email Finder — enter name + company domain for each
2. For 200 contacts, recommends the Starter plan ($9/mo, 500 credits) or Professional ($39/mo, 2,500 credits) depending on expected hit rate
3. Explains the credit model — only charged for verified emails found, not misses
4. Walks through bulk workflow: enter individually via web app, or use Chrome extension on LinkedIn profiles
5. Advises exporting results as CSV for import into outbound tool
**Result**: User understands the workflow, credit cost, and how to export for outreach

### Example 2: Verifying a list before a campaign
**User says**: "I have 1,000 emails and want to verify them before sending. Can Mailmo do this?"
**Skill does**:
1. Recommends Mailmo's Bulk Verification — upload CSV of emails
2. Highlights Mailmo's catch-all detection advantage — standard verifiers mark catch-all as "risky" but Mailmo verifies the specific mailbox
3. Estimates credit cost: up to 1,000 credits (Professional plan at $39/mo covers 2,500)
4. Explains how to read results: verified (safe to send), invalid (remove), risky (use caution)
5. Advises removing invalid addresses before importing into the sending tool
**Result**: User has a verified, clean list ready for outbound

### Example 3: Using the Chrome extension on LinkedIn
**User says**: "How do I use the Mailmo Chrome extension to find emails on LinkedIn?"
**Skill does**:
1. Walks through installing the extension from Chrome Web Store
2. Explains usage: browse to a LinkedIn profile → click Mailmo icon → verified email appears
3. Notes that Sales Navigator profiles also work
4. Advises on credit usage — each successful find costs 1 credit, duplicates are free
5. Recommends combining with Sales Navigator filters for targeted prospecting
**Result**: User can find verified emails directly from LinkedIn profiles

## Troubleshooting

### Email Finder returns no result
**Symptom**: Searched for a person but Mailmo couldn't find their email
**Cause**: The person's email isn't in Mailmo's database, or the company domain is incorrect
**Solution**: Verify you're using the correct company domain (check the company's website). Try alternate domain variations. If still no result, try an alternative finder (Hunter.io, Tomba, Prospeo) — different providers have different coverage. No credit is charged for unsuccessful searches.

### Chrome extension not working on LinkedIn
**Symptom**: Extension icon doesn't appear or doesn't return results on LinkedIn profiles
**Cause**: Extension not properly installed, LinkedIn UI changes, or browser conflicts
**Solution**: Verify the extension is installed and enabled in Chrome (chrome://extensions). Try refreshing the LinkedIn page. Disable other LinkedIn-related extensions that might conflict. If using Sales Navigator, ensure you're on a profile page (not a search results page).

### Bulk verification taking too long
**Symptom**: Uploaded a large CSV but results aren't appearing
**Cause**: Large lists take time to process, especially with catch-all verification which requires additional checks
**Solution**: Bulk verification is processed asynchronously. For large lists (1,000+ emails), allow time for processing. Check back after a few minutes. If the job appears stuck, contact support@mailmo.io.
