---
name: sales-surveymonkey
description: "SurveyMonkey platform help — survey creation, question types, skip logic, advanced branching, email/SMS/web collectors, response analytics, cross-tabulation, AI thematic analysis, SurveyMonkey Audience, REST API v3, OAuth, webhooks. Use when survey response rates are low, skip logic isn't working, can't export survey data, confused by pricing tiers, API calls hitting rate limits, need to set up email collectors, comparing SurveyMonkey vs Typeform vs Google Forms, or figuring out which plan you need. Do NOT use for general NPS/CSAT/VoC strategy across tools (use /sales-customer-feedback) or enterprise XM like Qualtrics (use /sales-qualtrics)."
argument-hint: "[describe what you need help with in SurveyMonkey]"
license: MIT
version: 1.0.0
tags: [sales, surveys, feedback, cx, platform]
github: "https://github.com/SurveyMonkey"
---
# SurveyMonkey Platform Help

Help the user with SurveyMonkey platform questions — from survey design and distribution through response analytics, API integration, and account management.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Creating or designing a survey (questions, logic, templates)
   - B) Distributing a survey (email, SMS, web link, embedded, popup)
   - C) Analyzing responses (reports, cross-tabs, exports, text analysis)
   - D) API / integrations (REST API, webhooks, Zapier, Salesforce, HubSpot)
   - E) Account / billing (plan comparison, response limits, team setup)
   - F) SurveyMonkey Audience (paid panel for market research)
   - G) Something else — describe it

2. **What's your situation?**
   - A) Setting up SurveyMonkey for the first time
   - B) Something isn't working / data looks wrong
   - C) Optimizing an existing survey
   - D) Integrating SurveyMonkey with other systems
   - E) Evaluating SurveyMonkey vs alternatives

3. **What plan are you on?** (Free/Basic, Standard, Advantage, Premier, Team, Enterprise, not sure)

**If the user's request already provides enough context, skip to the relevant step.** Lead with your best-effort answer, then ask 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- NPS/CSAT/VoC strategy across tools → `/sales-customer-feedback {your question}`
- Qualtrics platform questions → `/sales-qualtrics {your question}`
- Medallia platform questions → `/sales-medallia {your question}`
- Tool integration architecture → `/sales-integration {your question}`
- Email deliverability for survey invitations → `/sales-deliverability {your question}`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — SurveyMonkey platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, question types, logic, collectors, analytics, integrations.

Answer the user's question using only the relevant section. Don't dump the full reference.

**For API questions**, also read `references/surveymonkey-api-reference.md` for endpoint details, authentication, rate limits, and webhook setup.

## Step 4 — Actionable guidance

You no longer need the full platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** — numbered steps to accomplish their goal
2. **Plan awareness** — flag if the feature requires a paid plan or higher tier
3. **Workarounds** — for free-plan limitations, suggest alternatives where possible
4. **Verification** — how to confirm the setup works (test/preview survey, test API call)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and pricing that may change.*

- **Free plan is severely limited.** 10 questions per survey, 40 responses max, no data export, no skip logic, no custom branding. Most users hit the paywall fast. If you need logic or exports, you need at least Advantage ($32/mo annual).
- **Response limits are plan-specific and easy to exceed.** Standard: 1,000/mo. Advantage: 15,000/yr. Premier: 40,000/yr. Overage responses cost $0.15 each. Monitor usage in Account Settings.
- **Skip logic only works forward.** You can skip respondents to a later page or question, never backward. Advanced branching supports multi-condition logic but requires a paid plan.
- **API rate limits are tight for private apps.** 120 requests/min, 500/day. Resets at midnight GMT. Public (deployed) apps get unlimited. Plan for batching if pulling large datasets.
- **Matrix questions have API limitations.** The API doesn't fully support matrix question results in some integrations — answers may not display correctly. Use the bulk response endpoint with `?simple=true` for readable output.
- **Price increases have been steep.** SurveyMonkey raised prices significantly in 2024-2025 (Standard Monthly went from $39 to $99/mo in some markets). Check current pricing before committing.
- **SurveyMonkey Audience is billed separately.** Panel responses are not included in your plan's response limits, even on Premier or Enterprise.
- **Email collector requires verified sender.** Your email address must be verified before you can send survey invitations through the email collector.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC strategy across all tools — survey design, response rates, closed-loop feedback, tool comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-qualtrics` — Qualtrics XM platform help — the enterprise alternative to SurveyMonkey for CX/EX surveys. Install: `npx skills add sales-skills/sales --skills sales-qualtrics`
- `/sales-medallia` — Medallia platform help — enterprise experience management with DXA and action management. Install: `npx skills add sales-skills/sales --skills sales-medallia`
- `/sales-integration` — Connecting SurveyMonkey to CRM, data warehouse, and analytics tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Low survey response rate

**User**: "My customer satisfaction survey is only getting 3% response rates. How do I fix this in SurveyMonkey?"

**Approach**: Audit the survey — shorten to 3-5 questions max (NPS + open-end + one driver question). Switch collector type: if using web link, try email collector with the question embedded in the email body. Personalize the subject line with the customer's name using custom variables. Set up a reminder message in the collector (send 3 days after initial invite). Check if you're over-surveying — use contact lists with deduplication to prevent repeat surveys. Consider sending via SMS collector for mobile-first audiences.

### Example 2: Skip logic not working

**User**: "I set up skip logic but respondents are seeing all questions regardless. What am I doing wrong?"

**Approach**: Check common issues: skip logic only works on closed-ended questions (multiple choice, dropdown, matrix). Verify logic is set on the correct question — each answer option needs a destination page. Preview the survey (logic doesn't apply in edit mode, only in preview/live). Check if Page Skip Logic is conflicting with Question Skip Logic — page-level logic overrides question-level. For complex multi-condition paths, use Advanced Branching instead of basic skip logic (requires paid plan).

### Example 3: API data export

**User**: "I need to pull all survey responses into our data warehouse automatically. How do I use the SurveyMonkey API?"

**Approach**: Walk through setup: register a private app at developer.surveymonkey.com, get your access token. Use GET `/v3/surveys` to list surveys, then GET `/v3/surveys/{id}/responses/bulk?simple=true` for expanded responses with question text. Handle pagination with `page` and `per_page` params (max 100 per page for bulk). Set up a webhook for `response_completed` events to trigger real-time syncs instead of polling. Note: `responses_read_detail` scope requires a paid plan. Rate limit: 500 requests/day for private apps — batch accordingly.

## Troubleshooting

### "Can't see all my responses / responses are locked"

- **Check your plan's response limits.** Free plan shows only 40 responses. Even paid plans have caps (Standard: 1,000/mo, Advantage: 15,000/yr). Go to My Account → Billing to see usage.
- **Check response viewer vs export.** On some plans you can view responses in the analyze tab but can't export them. Export requires Advantage or higher.
- **Check the collector's close date.** If the collector has a close date set, it stops recording responses after that date even if the survey link still works.

### "Survey logic is skipping to the wrong page"

- **Review each answer option's skip target.** In the Logic tab, verify every answer option points to the correct destination. Missing assignments default to "next page."
- **Check for conflicting Page Skip Logic.** Page-level skip logic overrides question-level skip logic. If a page has both, the page logic wins.
- **Test in preview mode.** Logic doesn't work in the editor — use the Preview button to test the full survey flow with logic applied.

### "API returns 403 / insufficient permissions"

- **Check required scopes.** Each endpoint requires specific OAuth scopes (e.g., `responses_read_detail` for bulk response data). Verify your app requests the right scopes during OAuth.
- **Check plan requirements.** Some scopes (response details, contacts, workgroups) require paid SurveyMonkey plans. Free plan users can't access these endpoints.
- **Check app status.** Draft apps have stricter rate limits and a 90-day deployment window. If your draft expired, you need to create a new app.
