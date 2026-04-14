---
name: sales-qualtrics
description: "Qualtrics XM platform help — CX surveys (NPS/CSAT/CES), Employee Experience (EX) pulse surveys, Strategy & Research, Experience Agents AI, XM Directory, dashboards, REST API v3, MCP servers. Use when surveys aren't getting responses, dashboards won't show the right data, API calls return errors, you're setting up Qualtrics for the first time, confused by XM Directory contact management, need to export response data, comparing Qualtrics vs Medallia, or Qualtrics is too complex and you need guidance. Do NOT use for general NPS/CSAT strategy across tools (use /sales-customer-feedback) or product review collection like Trustpilot or G2 (use /sales-customer-reviews)."
argument-hint: "[describe what you need help with in Qualtrics]"
license: MIT
version: 1.0.0
tags: [sales, experience-management, cx, ex, surveys, platform]
github: "https://github.com/qualtrics"
---
# Qualtrics XM Platform Help

Help the user with Qualtrics Experience Management platform questions — from survey design and dashboard configuration through API integration, employee listening, and program administration.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **Which Qualtrics product do you need help with?**
   - A) Customer Experience (CX) — NPS, CSAT, CES surveys, dashboards, closed-loop feedback
   - B) Employee Experience (EX) — pulse surveys, lifecycle surveys, employee listening, 360-degree
   - C) Strategy & Research — market research, conjoint analysis, MaxDiff, concept testing
   - D) XM Directory — contact management, distribution lists, segments, automations
   - E) Experience Agents — AI-powered response automation and routing
   - F) API / integrations — REST v3, Salesforce, SAP, webhooks, MCP
   - G) Dashboards & reporting — widgets, filters, data visualization, exports
   - H) Admin — user management, roles, permissions, brand setup
   - I) Pricing / licensing — plan comparison, seat costs, response limits
   - J) Something else — describe it

2. **What's your situation?**
   - A) Setting up Qualtrics for the first time
   - B) Something isn't working / data looks wrong
   - C) Optimizing an existing survey program
   - D) Integrating Qualtrics with other systems
   - E) Evaluating Qualtrics vs alternatives

3. **What's your role?** (CX leader, researcher, HR/people ops, developer, analyst, admin, or other)

**If the user's request already provides enough context, skip to the relevant step.** Lead with your best-effort answer, then ask 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- NPS/CSAT/VoC strategy across tools → `/sales-customer-feedback {your question}`
- Medallia platform questions → `/sales-medallia {your question}`
- Product review collection (Trustpilot, G2, etc.) → `/sales-customer-reviews {your question}`
- Tool integration architecture → `/sales-integration {your question}`
- Qualtrics vs Medallia comparison → answer directly using platform knowledge

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Qualtrics platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API overview, Experience Agents.

Answer the user's question using only the relevant section. Don't dump the full reference.

**For API questions**, also read `references/qualtrics-api-reference.md` for endpoint details, authentication, and SDK documentation.

## Step 4 — Actionable guidance

You no longer need the full platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Qualtrics
2. **Configuration recommendations** — specific settings, navigation paths in the platform
3. **Program design guidance** — survey timing, question design, response rate optimization
4. **Verification** — how to confirm the setup works (test surveys, preview links, API testing)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Steep learning curve.** Qualtrics is powerful but complex. New users report difficulty navigating the platform. Invest time in Qualtrics XM Basecamp training and community resources before diving in.
- **Pricing is opaque and enterprise-heavy.** Only Free and Strategic Research ($420/mo) are self-serve. Everything else requires a sales call. Enterprise contracts range from low five figures to seven figures annually. Negotiate hard — 8-30% annual increases are common.
- **API token is single-use.** Generating a new API token invalidates the previous one. This breaks all existing integrations. Plan token rotation carefully.
- **Response export is a 3-step async process.** You can't just GET responses — you must: 1) Create export, 2) Poll for completion, 3) Download the file. Budget for this in integration code.
- **Dashboard customization is limited for end users.** Only admins can modify dashboard layouts, add filters, or set up automated reports. Plan for a dedicated admin if you have multiple dashboard consumers.
- **Survey fatigue rules require manual coordination.** Qualtrics doesn't automatically throttle surveys across projects. If multiple teams send surveys, you need a governance process to prevent over-surveying the same contacts.
- **Salesforce integration supports up to 5 instances per account.** If you have more Salesforce orgs, you'll need a workaround or additional Qualtrics accounts.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC strategy across all tools — survey design, response rates, closed-loop feedback, tool comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-medallia` — Medallia platform help (Experience Cloud, DXA, contact center, APIs) — the main enterprise alternative to Qualtrics. Install: `npx skills add sales-skills/sales --skills sales-medallia`
- `/sales-customer-reviews` — Product review collection and syndication (Trustpilot, G2, Judge.me, etc.) — different from customer feedback surveys. Install: `npx skills add sales-skills/sales --skills sales-customer-reviews`
- `/sales-integration` — Connecting Qualtrics to CRM, data warehouse, and analytics tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Low survey response rate

**User**: "Our post-purchase NPS survey in Qualtrics is only getting 4% response rates. What should I change?"

**Approach**: Audit the survey — shorten to NPS + one open-end (3 questions max). Check XM Directory for delivery timing — send within 1 hour of purchase, not days later. Verify email deliverability (check spam folder with a test). Embed the NPS rating directly in the email body so respondents can rate with one click. Set up contact frequency rules in XM Directory to prevent over-surveying. Consider adding an SMS channel for higher response rates.

### Example 2: API data export for analytics

**User**: "I need to pull all survey responses from the last quarter into our data warehouse. How do I use the Qualtrics API?"

**Approach**: Walk through the 3-step response export process: POST to `/API/v3/surveys/{surveyId}/export-responses` to start the export, GET the progress endpoint to poll for completion, then GET the file download endpoint. Authenticate with `X-API-TOKEN` header. Note the datacenter ID in your base URL. Handle pagination for large datasets. Consider scheduling recurring exports using a cron job rather than ad-hoc queries.

### Example 3: Qualtrics vs Medallia decision

**User**: "We're evaluating Qualtrics and Medallia for our enterprise CX program. What are the key differences?"

**Approach**: Compare head-to-head: Qualtrics is stronger on survey methodology depth, research capabilities (conjoint, MaxDiff), and the XM suite breadth. Medallia leads on real-time action management, built-in digital experience analytics (session replay, heatmaps), and contact center intelligence. Qualtrics is more self-serve; Medallia is more consulting-dependent. Both cost $200K+/year at enterprise scale. The deciding factors: research-heavy orgs lean Qualtrics, action-management-heavy orgs lean Medallia. Request POCs from both.

## Troubleshooting

### "API calls returning server errors"

- **Check your datacenter ID.** The base URL includes your datacenter (e.g., `iad1`, `sjc1`, `eu`). Using the wrong one returns 500 errors. Find it in Account Settings → Qualtrics IDs.
- **Verify CORS for in-survey API calls.** Web Service elements in survey flow can fail in preview/live mode due to CORS restrictions even when they work in the test function. Move API calls server-side if hitting CORS issues.
- **Check token permissions.** Your account must have "Access API" permission enabled. Ask your admin to verify in User Settings.

### "Dashboard data not populating"

- **Check data source mapping.** Dashboards pull from mapped data sources, not directly from surveys. If you added new questions, you need to remap the data source in Dashboard Settings.
- **Verify role-based access.** Dashboard widgets may be filtered by organizational hierarchy. If you can't see data, check your dashboard permissions and hierarchy assignment.
- **Wait for data refresh.** Dashboard data isn't real-time — there's a processing delay after responses are submitted. For recent submissions, check the Data & Analysis tab directly.

### "Survey responses not recording / data looks wrong"

- **Check survey status.** The survey must be Active (not in draft or closed state) to record responses. Preview mode responses are stored separately.
- **Verify embedded data flow.** If piped text or embedded data shows blank, check Survey Flow for proper variable assignment order — embedded data blocks must come before the questions that reference them.
- **Check response quotas.** If you have quotas set, they may be silently closing the survey for some respondents. Review quota settings in Survey Options.
