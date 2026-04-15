---
name: sales-whatfix
description: "Whatfix platform help — Digital Adoption Platform (DAP), in-app Flows, Smart Tips, Beacons, Task Lists, Self Help widget, Product Analytics (funnels, Sankey charts, cohorts), Mirror sandbox training, NPS/custom surveys, Integration Hub. Use when Whatfix flows aren't triggering, users skip walkthroughs, Self Help widget isn't surfacing right content, product analytics look wrong, Mirror sandbox needs setup, Whatfix surveys have low completion, Integration Hub data isn't syncing, need help with Whatfix API or content tagging, setting up Whatfix for a new enterprise app, or comparing Whatfix to WalkMe or Pendo. Do NOT use for in-app messaging strategy across platforms (use /sales-in-app-messaging) or general customer feedback strategy (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Whatfix]"
license: MIT
version: 1.0.0
tags: [sales, digital-adoption, in-app-guidance, platform]
github: "https://github.com/whatfix"
---

# Whatfix Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Whatfix on a new app (install, content tagging, segmentation)
   - B) Flows — step-by-step walkthroughs, branching, error recovery
   - C) Smart Tips — tooltips, hover/click triggers, field-level guidance
   - D) Task Lists — sequential onboarding checklists, grouping
   - E) Self Help — in-app help widget, content aggregation, search
   - F) Product Analytics — funnels, user journeys, cohorts, Whatfix AI
   - G) Mirror — sandbox training environment setup
   - H) Surveys — NPS, usability, custom surveys
   - I) Integration Hub — Salesforce, Oracle, SAP, Workday, webhooks
   - J) API — content management, analytics export, tokens
   - K) Pricing / plan comparison
   - L) Something else — describe it

2. **What application is Whatfix deployed on?**
   - A) Salesforce
   - B) SAP / SuccessFactors
   - C) Workday
   - D) ServiceNow
   - E) Oracle
   - F) Custom internal web app
   - G) Customer-facing SaaS product
   - H) Not deployed yet

3. **What Whatfix plan are you on?** (Standard / Premium / Enterprise / Not sure)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| In-app messaging strategy (not Whatfix-specific) | `/sales-in-app-messaging {your question}` |
| General NPS/CSAT/VoC program design | `/sales-customer-feedback {your question}` |
| Customer success health scores, churn prevention | `/sales-customer-success {your question}` |
| Connecting Whatfix to CRM via Zapier/Make | `/sales-integration {your question}` |
| Product analytics with Pendo instead | `/sales-pendo {your question}` |

If the question is Whatfix-specific, answer directly using the reference below.

## Step 3 — Whatfix platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves the API, also **read `references/whatfix-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation. Common patterns:

- **Setup**: Determine which enterprise app to overlay, plan content tagging strategy, configure user segmentation tags
- **Flows**: Design step-by-step walkthroughs with branching, use Flow Standby for error recovery
- **Self Help**: Aggregate content from multiple sources (Confluence, ServiceNow, knowledge base), configure search relevance
- **Analytics**: Build adoption funnels, identify workflow bottlenecks, use Sankey charts for journey analysis
- **Mirror**: Create sandbox replicas for training, configure data blurring, design practice exercises

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Standard plan limits integrations to 2.** Premium and Enterprise get unlimited. Budget for Premium if you need Salesforce + SAP + Workday simultaneously.
2. **Auto-translation requires Premium or higher.** Standard plan is manual translation only — factor this in for global rollouts.
3. **Content aggregation caps at 2,000 articles on Standard.** Premium goes up to 50K. If your knowledge base is large, you'll hit this quickly.
4. **Flows break if users deviate from the exact steps.** Users who click the wrong element or navigate off-path drop out and must restart. Design flows with minimal steps and clear visual cues.
5. **CSS knowledge needed for advanced customization.** Despite no-code claims, customizing the look of flows and tooltips beyond defaults requires CSS. Default styling looks dated.
6. **Auto-testing not included on Standard.** You'll need Premium+ to run automated content tests across app updates.
7. **Custom surveys require Premium.** Standard only gets out-of-box survey templates.
8. **Pricing is per-application.** Each enterprise app you overlay requires a separate license — costs scale linearly with app count.

## Related skills

- `/sales-in-app-messaging` — In-app messaging strategy across platforms (Whatfix, Pendo, Appcues, Braze). Install: `npx skills add sales-skills/sales --skills sales-in-app-messaging`
- `/sales-pendo` — Pendo platform help (product analytics, guides, session replay, NPS, API). Install: `npx skills add sales-skills/sales --skills sales-pendo`
- `/sales-customer-feedback` — NPS, CSAT, VoC strategy and platform comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding. Install: `npx skills add sales-skills/sales --skills sales-customer-success`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Users aren't completing Salesforce training flows
**User says**: "We deployed Whatfix on Salesforce but only 30% of users finish the opportunity creation flow. How do I improve completion?"
**Skill does**: Analyzes Flow design — checks step count (aim for 5-7 max), verifies Flow Standby is enabled for error recovery, reviews targeting (are the right users seeing it?), suggests splitting long flows into smaller task-list items. Recommends using Smart Tips on individual fields instead of a linear flow for complex forms. Reviews analytics to find the exact drop-off step.
**Result**: Redesigned flow with fewer steps, field-level Smart Tips for complex fields, and Task List for the overall process.

### Example 2: Setting up Whatfix Product Analytics for the first time
**User says**: "I just got Whatfix Product Analytics added to our Premium plan. How do I set up funnel analysis for our employee onboarding workflow in Workday?"
**Skill does**: Walks through defining the onboarding funnel steps in Whatfix (login → profile setup → benefits enrollment → direct deposit → acknowledgments), configuring user journey visualization via Sankey charts, creating cohort-based reports by department and hire date, and setting up Whatfix AI for automated insight generation. Covers how to integrate data with Power BI for executive reporting.
**Result**: Onboarding funnel with step-by-step tracking, Sankey visualization, and automated insights.

### Example 3: Integration Hub not syncing user roles from Azure AD
**User says**: "Whatfix isn't picking up role changes from Azure AD, so users see the wrong content."
**Skill does**: Reviews Integration Hub configuration — checks data flow direction (Azure AD → Whatfix), verifies attribute mapping for role fields, checks sync schedule and frequency. Recommends using segmentation tags tied to Azure AD groups instead of individual role fields. Flags common issue: Azure AD group membership changes may not trigger immediate sync — configure webhook-based updates instead of scheduled polling.
**Result**: Fixed attribute mapping with webhook-based sync for real-time role updates.

## Troubleshooting

### Flows not appearing for target users
**Symptom**: Flow is published but users don't see it.
**Cause**: Segmentation tags don't match user attributes, the target page URL pattern is wrong, or display frequency limit was reached.
**Solution**: 1) Check user tags in Whatfix admin — verify the user matches the segment. 2) Verify the URL pattern matches the actual app page (dynamic URLs in SPAs are tricky). 3) Check display rules — "show once" means dismissed users won't see it again. 4) Use Whatfix Diagnostics to troubleshoot content delivery on the target page.

### Self Help widget returning irrelevant results
**Symptom**: Users search in Self Help but get unrelated articles or flows.
**Cause**: Content aggregation includes too many sources, or article titles/tags don't match how users describe their problems.
**Solution**: 1) Audit aggregated content — remove outdated or irrelevant articles. 2) Add keyword tags that match how users actually phrase their questions. 3) Use page-level content filtering so only relevant content shows on each app screen. 4) If on Premium+, enable AI-powered search summarization for better results.

### Product Analytics showing low adoption numbers
**Symptom**: Analytics dashboard shows very few users completing key workflows.
**Cause**: Users may be completing workflows through alternate paths not tracked, or the funnel definition is too strict.
**Solution**: 1) Use Sankey chart (user journey visualization) to see actual navigation paths — users may skip steps you expected. 2) Broaden funnel definitions to include alternate valid paths. 3) Check if ad blockers or browser extensions are blocking the Whatfix script. 4) Verify the script loads on all relevant pages in SPAs.
