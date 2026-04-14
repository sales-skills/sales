---
name: sales-medallia
description: "Medallia platform help — Experience Cloud, NPS/CSAT/CES surveys, digital experience analytics (DXA), contact center intelligence, employee listening, experience orchestration, Frontline-Ready AI, REST + GraphQL APIs. Use when survey response rates are low, dashboards aren't showing the data you need, NPS scores are stagnant, feedback isn't reaching the right teams, DXA session recordings aren't capturing correctly, contact center quality scores seem off, API imports are failing, or you're comparing Medallia vs Qualtrics. Do NOT use for product review collection like Trustpilot or G2 (use /sales-customer-reviews) or general NPS/CSAT strategy across tools (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Medallia]"
license: MIT
version: 1.0.0
tags: [sales, experience-management, cx, voc, platform]
github: "https://github.com/medallia"
---
# Medallia Platform Help

Help the user with Medallia Experience Cloud platform questions — from survey design and dashboard configuration through DXA setup, contact center analytics, API integration, and program administration.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **Which Medallia module do you need help with?**
   - A) Customer Experience — NPS, CSAT, CES surveys, feedback capture, action management
   - B) Digital Experience Analytics (DXA) — session replay, heatmaps, digital journey scoring
   - C) Contact Center — conversational intelligence, agent coaching, quality management
   - D) Employee Experience — employee listening, pulse surveys, activation
   - E) Experience Orchestration — personalized journeys, messaging
   - F) Market Research — agile surveys, video research
   - G) API / integrations — REST, GraphQL, Salesforce, ServiceNow, data import/export
   - H) Admin — user management, roles, reporting configuration, program setup
   - I) Pricing / licensing — EDR model, module costs, plan comparison
   - J) Something else — describe it

2. **What's your situation?**
   - A) Setting up Medallia for the first time
   - B) Something isn't working / data looks wrong
   - C) Optimizing an existing program
   - D) Integrating Medallia with other systems
   - E) Evaluating Medallia vs alternatives

3. **What's your role?** (CX leader, program admin, developer, analyst, contact center manager, or other)

**If the user's request already provides enough context, skip to the relevant step.** Lead with your best-effort answer, then ask 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- NPS/CSAT strategy across tools → `/sales-customer-feedback {your question}`
- Product review collection (Trustpilot, G2, etc.) → `/sales-customer-reviews {your question}`
- Tool integration architecture → `/sales-integration {your question}`
- Qualtrics platform questions → `/sales-qualtrics {your question}`
- Medallia vs Qualtrics comparison → answer directly using platform knowledge (also see `/sales-qualtrics` for Qualtrics-specific detail)

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Medallia platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API overview, Frontline-Ready AI features.

Answer the user's question using only the relevant section. Don't dump the full reference.

**For API questions**, also read `references/medallia-api-reference.md` for endpoint details, authentication, and SDK documentation.

## Step 4 — Actionable guidance

You no longer need the full platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Medallia
2. **Configuration recommendations** — specific settings, navigation paths in the admin console
3. **Program design guidance** — survey timing, question design, response rate optimization
4. **Verification** — how to confirm the setup works (test surveys, data validation, API testing)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Pricing is consulting-heavy.** Even simple changes (adding touchpoints, modifying dashboards, basic customizations) often require Medallia professional services at significant cost. Budget for ongoing services, not just the license.
- **Steep learning curve with minimal self-serve training.** New admins report a "sink or swim" experience. Invest in the Medallia Institute certification early — self-guided exploration of the admin console rarely works.
- **Dashboard customization requires admin expertise.** End users can't easily add filters, modify graphics, or set up automated report delivery without admin-level access. Plan for a dedicated program admin.
- **API access may be restricted by contract.** Not all Medallia instances have the same API access — verify your contract includes the APIs you need (Import, Query, Admin) and check your 60K/day rate limit.
- **EDR pricing can surprise you.** Every discrete interaction creates an Experience Data Record. High-volume touchpoints (digital feedback, contact center calls) can rapidly consume EDR allocation.
- **GraphQL Query API is powerful but complex.** It provides real-time analytics through a single endpoint, but building queries requires understanding Medallia's data model (units, records, fields). Start with the Query API Explorer.
- **Salesforce integration is bi-directional but needs configuration.** The AppExchange connector handles feedback → Salesforce cases and Salesforce events → survey triggers, but each direction requires separate setup and field mapping.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC strategy across all tools — survey design, response rates, closed-loop feedback, benchmarking. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-qualtrics` — Qualtrics XM platform help (CX/EX surveys, dashboards, API, Experience Agents) — the main enterprise alternative to Medallia. Install: `npx skills add sales-skills/sales --skills sales-qualtrics`
- `/sales-customer-reviews` — Product review collection and syndication (Trustpilot, G2, Judge.me, etc.) — different from customer feedback surveys. Install: `npx skills add sales-skills/sales --skills sales-customer-reviews`
- `/sales-integration` — Connecting Medallia to CRM, data warehouse, and analytics tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Low survey response rate

**User**: "Our post-interaction NPS survey is only getting a 5% response rate. How do I improve it in Medallia?"

**Approach**: Review survey design — shorten to 2-3 questions max (NPS + one open-end + optional driver question). Check delivery timing — send within 1 hour of interaction, not days later. Verify email deliverability. Consider SMS as an alternate channel. Use Medallia's conditional logic to skip irrelevant questions. Review subject line and sender name (personal > generic). Check if survey fatigue rules are properly throttling repeat requests.

### Example 2: Connecting Medallia to Salesforce

**User**: "I need to push Medallia feedback scores into Salesforce so our account managers can see customer health."

**Approach**: Walk through Medallia for Salesforce setup — install from AppExchange, configure bi-directional sync. Map NPS/CSAT scores to Salesforce account fields. Set up closed-loop alerts that create Salesforce cases for detractor responses. Configure feedback request triggers from Salesforce events (case closure, deal stage change). Verify field mapping and test with a small segment.

### Example 3: API data export for analytics

**User**: "I need to pull all our NPS data from the last quarter into our data warehouse for custom analysis."

**Approach**: Use the GraphQL Query API — authenticate with OAuth 2.0 (client credentials grant), construct a query filtering by date range and feedback type. Handle pagination for large datasets. Consider scheduling recurring exports via the Import/Export API rather than ad-hoc queries. Verify the 60K calls/day rate limit won't be an issue for the data volume needed.

## Troubleshooting

### "Survey results are hard to navigate — I can't find what I need"

- **Use role-based dashboards.** Medallia's reporting is designed around roles — exec dashboards show different data than frontline views. Ask your admin to configure a dashboard matching your specific reporting needs.
- **Learn the hierarchy model.** Medallia organizes data by organizational hierarchy (region → business unit → location). If you're not seeing expected data, you may be looking at the wrong hierarchy level.
- **Use Text Analytics.** Instead of reading individual responses, use Medallia's text analytics to surface themes from open-ended feedback. Frontline-Ready AI's "Themes with GenAI" automatically categorizes comments.

### "NPS scores are stagnant despite improvement efforts"

- **Check survey population.** If you're only surveying a subset of customers (e.g., only support interactions), your NPS reflects that touchpoint, not overall customer health. Expand to relationship surveys.
- **Look beyond the score.** Use root cause analysis and text analytics to identify specific drivers. Stagnant NPS often means you're fixing minor issues while missing the top driver of dissatisfaction.
- **Check for survey fatigue.** Over-surveyed customers give lower scores. Verify your throttling rules are preventing repeat surveys within 90 days.

### "API imports are failing or data isn't appearing"

- **Check OAuth token expiry.** Medallia OAuth tokens have limited lifetimes. Implement token refresh logic in your integration rather than using static tokens.
- **Validate data format.** REST import APIs are strict about field mapping and data types. Use the Import API v2 status endpoint to check processing reports for specific row-level errors.
- **Verify rate limits.** At 60K calls per 24-hour window, high-frequency integrations can hit the ceiling. Batch operations where possible and implement exponential backoff.
