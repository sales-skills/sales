---
name: sales-tomba
description: "Tomba.io platform help — domain search, email finder, email verifier, enrichment, author finder, LinkedIn finder, phone finder, bulk operations, browser extensions, API, integrations. Use when you can't find a prospect's email address in Tomba, Tomba verification results look wrong, your enriched contacts are missing data, the Tomba API isn't returning expected results, a Tomba integration isn't syncing, or your Tomba lead lists are disorganized. Do NOT use for enrichment strategy across tools (use /sales-enrich), building prospect lists (use /sales-prospect-list), cross-platform deliverability (use /sales-deliverability), or connecting tools generically (use /sales-integration)."
argument-hint: "[describe what you need help with in Tomba]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, verification, platform]
github: "https://github.com/tomba-io"
---
# Tomba Platform Help

Help the user with Tomba.io platform questions — from domain search and email finding through verification, enrichment, bulk operations, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

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
2. Explains field mapping from Tomban enrichment to HubSpot properties
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
