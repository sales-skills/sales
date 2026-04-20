---
name: sales-outreach-io
description: "Outreach platform help — sales engagement sequences, Kaia conversation intelligence, deal management, forecasting, and coaching. Use when sequences not getting replies in Outreach, Kaia not recording or transcribing correctly, deals stuck in pipeline and need Outreach deal insights, reps not following cadence steps, Outreach API integration or webhook setup, Outreach CRM sync issues with Salesforce or HubSpot, forecasting inaccurate in Outreach, or coaching reps using Kaia call recordings. Do NOT use for general cold email writing (use /sales-outreach) or Salesloft-specific questions (use /sales-salesloft)."
argument-hint: "[describe what you need help with in Outreach]"
license: MIT
version: 1.0.0
tags: [sales, engagement, platform, sequences, conversation-intelligence]
github: "https://github.com/getoutreach"
---

# Outreach Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Which area do you need help with?

1. **Sequences & cadences** — building, optimizing, A/B testing outbound sequences
2. **Kaia conversation intelligence** — recording, transcription, real-time coaching, battlecards
3. **Deal management** — pipeline visibility, deal risk, mutual action plans
4. **Forecasting** — revenue forecasting, pipeline coverage, deal inspection
5. **Coaching** — rep performance, call scoring, coaching plans
6. **Integrations & API** — Salesforce/HubSpot sync, REST API, webhooks, Zapier
7. **Admin & setup** — user management, permissions, mailbox config, deliverability
8. **Pricing & plans** — tier comparison, what's included, hidden costs

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Cadence/sequence design (timing, channels, A/B) | `/sales-cadence` — run: `/sales-cadence [user's question]` |
| Email deliverability, warmup, DNS | `/sales-deliverability` — run: `/sales-deliverability [user's question]` |
| Revenue forecasting methodology | `/sales-forecast` — run: `/sales-forecast [user's question]` |
| Coaching frameworks, call scoring rubrics | `/sales-coaching` — run: `/sales-coaching [user's question]` |
| Deal risk identification, stakeholder mapping | `/sales-deal-inspect` — run: `/sales-deal-inspect [user's question]` |
| Connecting Outreach to CRM/tools | `/sales-integration` — run: `/sales-integration [user's question]` |
| Choosing between Outreach and competitors | `/sales-cadence` comparison tables |

If the question is Outreach-platform-specific (config, Kaia setup, API endpoints, pricing), continue to Step 3.

## Step 3 — Outreach platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

**Read `references/outreach-api-reference.md`** if the question involves API, webhooks, or custom integrations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- For sequence issues: check send schedule, mailbox health, prospect engagement signals
- For Kaia issues: verify meeting platform permissions, bot join settings, recording consent
- For deal management: look at deal velocity metrics, stakeholder coverage, risk signals
- For API: start with OAuth app setup, verify scopes, respect 10K/hr rate limit
- For CRM sync: check field mapping, sync direction, conflict resolution rules

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- Annual contracts only — no monthly billing. Minimum 1-year commitment.
- Implementation fees range $5K-$25K depending on complexity. Budget for this separately.
- Kaia recordings have special rate limits: 3 calls/second, 6,000 calls/day (org-level).
- CRM sync is bi-directional with Salesforce but can create duplicate records if field mapping is misconfigured.
- Outreach API rate limit is 10,000 requests/hour per user — not per org.
- OAuth tokens expire after 2 hours; refresh tokens expire after 14 days. Can only refresh once per 60 seconds.
- Feature bloat is real — many teams only use 20% of what they pay for. Start with Engage tier and expand.
- Account termination without notice has been reported — keep local backups of sequence/template data.

## Related skills

- `/sales-cadence` — Design multi-channel outbound cadences with timing and A/B testing
- `/sales-deliverability` — Email deliverability, warmup, DNS setup
- `/sales-coaching` — Sales coaching frameworks and call scoring
- `/sales-forecast` — Revenue forecasting and pipeline analysis
- `/sales-deal-inspect` — Deal health inspection and stakeholder mapping
- `/sales-integration` — Connect sales tools with webhooks, APIs, Zapier
- `/sales-salesloft` — Salesloft platform help (main competitor)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**User**: "My Outreach sequences are getting 2% reply rates — what's wrong?"
**Skill response**: Reviews sequence structure, timing, personalization, deliverability signals, and A/B test setup. Checks mailbox health and sender reputation within Outreach.

**User**: "How do I set up Outreach API to sync sequence engagement data to our data warehouse?"
**Skill response**: Walks through OAuth app creation, scope selection (mailings.read, sequences.read), pagination for bulk data pulls, and webhook alternatives for real-time sync.

**User**: "Kaia isn't joining my Zoom meetings — how do I fix this?"
**Skill response**: Checks Kaia bot permissions, Zoom integration settings, calendar sync, and meeting platform allow-listing for bots.

## Troubleshooting

### Sequences getting low reply rates
- Check mailbox warmup status and daily sending limits
- Verify A/B tests are running (not paused) and have sufficient sample size
- Review prospect engagement signals — are they opening but not replying? (message problem) Or not opening? (deliverability problem)
- Check send schedule — are you sending outside prospect timezone business hours?

### Kaia not recording or transcribing
- Verify Kaia is enabled for the user's role in Admin settings
- Check meeting platform integration (Zoom/Teams/Meet) — bot must be allowed to join
- Verify calendar sync is active and meetings have video links
- Check if recording consent is blocking in regions with two-party consent requirements

### CRM sync conflicts or missing data
- Verify field mapping in Outreach Admin → CRM Sync settings
- Check sync direction (Outreach→CRM, CRM→Outreach, or bi-directional) per field
- Look for sync errors in the Outreach Activity Log
- Ensure API user in Salesforce/HubSpot has sufficient permissions
