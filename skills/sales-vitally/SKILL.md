---
name: sales-vitally
description: "Vitally platform help — Health Scores, Playbooks, Projects, Automation, AI copilot, NPS, Dashboards, REST API. Use when health scores aren't reflecting reality, playbook automations aren't triggering, Salesforce or HubSpot sync is broken, onboarding projects are stalling, NPS surveys aren't reaching users, Vitally AI summaries seem off, custom traits aren't updating via API, or dashboards show stale data. Do NOT use for general customer success strategy (use /sales-customer-success) or survey design methodology (use /sales-customer-feedback)."
argument-hint: "[describe what you need help with in Vitally]"
license: MIT
version: 1.0.0
tags: [sales, customer-success, platform]
---
# Vitally Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Vitally do you need help with?**
   - A) Health Scores — building, weighting, or debugging composite scores
   - B) Playbooks & Automation — triggers, actions, conditions, not firing
   - C) Projects — onboarding templates, milestones, tracking progress
   - D) Integrations — Salesforce, HubSpot, Stripe, Segment, data not syncing
   - E) REST API — creating/updating accounts, users, tasks, custom objects
   - F) Dashboards & Reporting — building views, segments, metrics
   - G) Vitally AI — call summaries, transcripts, copilot features
   - H) NPS/Surveys — sending surveys, response collection, scoring
   - I) Notes, Tasks, Conversations — managing customer interactions
   - J) Custom Objects & Traits — extending the data model
   - K) Admin — team setup, roles, SSO, billing

2. **What CRM are you using?** (Salesforce, HubSpot, neither)

3. **Which Vitally plan?** (Tech-Touch, Hybrid-Touch, High-Touch, unsure)

**Skip-ahead rule:** if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Customer success strategy (health score methodology, churn playbooks, expansion) | `/sales-customer-success {your question}` |
| NPS/CSAT survey design or response rate optimization | `/sales-customer-feedback {your question}` |
| Salesforce/HubSpot CRM configuration (not Vitally-specific sync) | `/sales-integration {your question}` |
| Data enrichment for customer profiles | `/sales-enrich {your question}` |

When routing, provide the exact command with the user's original question.

Otherwise, answer directly using the platform reference.

## Step 3 — Vitally platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves API endpoints, **also read `references/vitally-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation. For health score questions, walk through indicator selection and weighting. For automation issues, trace the trigger→condition→action chain. For integration problems, check field mappings and sync direction.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Initial setup is the hardest part.** G2 reviewers consistently flag the learning curve — plan 2-4 weeks for full data integration and health score tuning. Don't try to configure everything at once.
- **Health scores need 6-10 months before adjusting.** Changing weights too early means you can't track trends. Start simple (4 indicators max), validate against actual churn, then refine.
- **Bidirectional CRM sync can create loops.** If you push health scores to Salesforce AND pull Salesforce fields into health score inputs, test carefully to avoid circular updates.
- **Rate limit is 1000 req/min sliding window.** The API returns `429` when exceeded with `RateLimit-Remaining` and `RateLimit-Reset` headers. Batch operations via Postman bulk endpoints are available.
- **DELETE is permanent.** Deleting an Account or Organization via API "permanently destroys the record and all data that exclusively belongs to it." No undo.
- **Custom trait updates are additive.** Omitting a trait in a PUT request keeps its current value. To remove a trait, explicitly set it to `null`.
- **Conversations API doesn't send messages.** It creates/updates conversation records as reference points. It does NOT start conversations or send outbound messages to customers.
- **EU vs US data centers use different base URLs.** US: `https://{subdomain}.rest.vitally.io/resources/`, EU: `https://rest.vitally-eu.io/resources/`.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding, expansion, playbook design, CS platform comparison. Install: `npx skills add sales-skills/sales --skill sales-customer-success`
- `/sales-customer-feedback` — NPS, CSAT, CES, VoC program design — survey methodology, response rates, closed-loop feedback. Install: `npx skills add sales-skills/sales --skill sales-customer-feedback`
- `/sales-integration` — Connect Vitally to CRM, billing, and analytics tools via native integrations, Zapier, or API. Install: `npx skills add sales-skills/sales --skill sales-integration`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Health score isn't reflecting at-risk accounts

**User**: "My health score shows green for accounts that churned last month — what's wrong?"

**Approach**: Read platform-guide.md health scores section. Audit indicator selection — likely missing usage/engagement signals or weighting login frequency too heavily. Check if data sources (product analytics via Segment/Mixpanel, support tickets via Zendesk) are syncing correctly. Recommend adding a lagging indicator like "days since last login" and a leading indicator like "support ticket trend."

### Example 2: Playbook automation not triggering

**User**: "I set up a renewal playbook to create tasks 90 days before renewal but nothing happens."

**Approach**: Read platform-guide.md automation section. Check: (1) Is the `nextRenewalDate` trait populated on accounts? (2) Is the trigger condition using the right field name (custom traits use `vitally.custom.` prefix)? (3) Is the playbook active (not draft)? (4) Does the account match the segment filter? Walk through the trigger→condition→action chain.

### Example 3: REST API custom traits not updating

**User**: "I'm PUTting traits via the API but they don't show up in the UI."

**Approach**: Read vitally-api-reference.md. Check: (1) Trait keys must use the `vitally.custom.` prefix from the Custom Fields admin panel. (2) Traits merge on update — omitted traits aren't deleted. (3) Verify the `Authorization: Basic` header is correctly base64-encoded. (4) Check the response status — `400` means malformed body, `401` means auth issue.

## Troubleshooting

### Data not syncing from CRM

- **Check integration status.** Go to Settings → Integrations and verify the connection is active (not disconnected or errored).
- **Check field mappings.** Vitally only syncs whitelisted fields — verify the fields you expect are selected in the integration settings.
- **Check sync direction.** Some fields are one-way (CRM → Vitally). If you need bidirectional sync, both directions must be explicitly enabled.

### Dashboards showing stale data

- **Check data source refresh schedule.** Integrations like Snowflake and BigQuery sync on a schedule (not real-time). Check when the last sync completed.
- **Check segment definitions.** If a dashboard filters by segment, verify the segment criteria match your expectations — segments are recalculated periodically.

### NPS surveys not being received

- **Check email delivery.** Vitally sends NPS via connected email (Gmail/Outlook) or transactional providers (SendGrid/Mailgun). Verify the sending integration is connected and the sender isn't hitting limits.
- **Check throttling rules.** Vitally may throttle surveys to avoid over-surveying — check if the user was recently surveyed.
- **Check user email validity.** Verify the user record has a valid email and isn't unsubscribed (`unsubscribedFromConversations: true`).
