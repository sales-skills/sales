---
name: sales-crm-selection
description: "CRM comparison, selection, and migration strategy for startups — evaluates Attio, HubSpot, Salesforce, Folk, Pipedrive, Close, Zoho, and spreadsheets. Use when choosing a first CRM, deciding if you've outgrown spreadsheets, comparing CRMs for a small team, planning a CRM migration, figuring out when to upgrade from free tier, or evaluating whether you need Salesforce yet. Do NOT use for Attio-specific config or API (use /sales-attio), CRM data cleanup (use /sales-data-hygiene), or outbound sequences (use /sales-cadence)."
argument-hint: "[describe your CRM selection question — e.g., 'which CRM for a 5-person SaaS startup' or 'should I switch from spreadsheets']"
license: MIT
version: 1.0.0
tags: [sales, crm, strategy, comparison]
---

# CRM Comparison & Selection for Startups

Help startups choose, evaluate, and migrate to the right CRM — from spreadsheets through Attio, HubSpot, Folk, Pipedrive, Close, Zoho, and Salesforce.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your situation?**
   - A) Choosing a first CRM (currently using spreadsheets or nothing)
   - B) Evaluating CRMs — have a shortlist, need help deciding
   - C) Outgrowing current CRM — considering a switch
   - D) Migrating between CRMs — need a plan
   - E) Deciding if I even need a CRM yet
   - F) Other — describe it

2. **Team and stage?**
   - A) Solo founder / 1-2 people
   - B) Small team (3-10 people)
   - C) Growth stage (10-50 people)
   - D) Scaling (50+ people)

3. **Sales motion?**
   - A) Inbound-led (marketing drives leads)
   - B) Outbound-led (SDRs/founders do cold outreach)
   - C) Product-led growth (self-serve signups)
   - D) Hybrid / not sure yet

4. **Budget per user/month?**
   - A) Free only
   - B) Under $30/user/mo
   - C) $30-$100/user/mo
   - D) Enterprise budget ($100+/user/mo)

**Skip-ahead rule**: if the user's prompt already provides most context, skip to Step 2. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask 1-2 critical clarifying questions.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Attio-specific setup, config, API, or troubleshooting | `/sales-attio {user's question}` |
| HubSpot-specific setup, config, workflows, API, or pricing | `/sales-hubspot {user's question}` |
| Salesforce-specific setup, Flows, Apex, admin, API, or editions | `/sales-salesforce {user's question}` |
| CRM data cleanup, deduplication, record matching | `/sales-data-hygiene {user's question}` |
| Building outbound sequences across platforms | `/sales-cadence {user's question}` |
| Contact enrichment for CRM records | `/sales-enrich {user's question}` |
| Connecting CRM to other tools | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — CRM comparison reference

**Read `references/platforms.md`** for the full CRM comparison — positioning, feature matrices, pricing guidance, decision frameworks, migration paths.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the comparison reference — focus on the user's specific situation.

### Quick decision framework

- **Solo founder, free, simple pipeline**: HubSpot Free or Attio Free
- **Small team (3-10), inbound-led, wants marketing+sales in one tool**: HubSpot
- **Small team, outbound-heavy, call-driven**: Close or Pipedrive
- **Small team, relationship-focused, lightweight outreach**: Folk
- **Startup wanting custom data model, API-first, modern UX**: Attio
- **Growth stage, needs marketing automation + CRM + service**: HubSpot (paid tiers)
- **Enterprise, complex org, dedicated admin available, 50+ reps**: Salesforce
- **Budget-conscious, need breadth of features**: Zoho CRM

### Spreadsheet-to-CRM transition signals

You need a CRM when any of these are true:
- More than 5 people touch customer data
- More than 50-100 active accounts
- Follow-ups are getting dropped
- No visibility into what others discussed with a prospect
- You're copy-pasting between sheets to get a pipeline view

Most startups switch 3-6 months after raising initial capital. Start with a free tier to build habits before paying.

### Migration checklist

1. **Export and audit** — clean data before importing (use `/sales-data-hygiene`)
2. **Map fields** — align old fields to new CRM's data model
3. **Test with a subset** — import 50-100 records first, verify
4. **Reconnect integrations** — email sync, calendar, Zapier/Make flows
5. **Train the team** — adoption beats features; schedule 1-hour walkthrough
6. **Run parallel for 2 weeks** — keep old system read-only as fallback

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing which changes frequently.*

1. **70% of CRM implementations fail** — the #1 cause is unclear goals, not bad software. Define what you need before evaluating tools.

2. **HubSpot's free tier is genuinely useful, but the jump to paid is steep.** The free plan covers unlimited users and contacts. But the moment you need marketing automation, custom reporting, or sequences, you're looking at $45-$800+/mo depending on tier. Plan for this before you're locked in.

3. **"We'll need Salesforce eventually" is usually wrong for startups.** Most SaaS startups don't need Salesforce until past $5M ARR and 50+ employees. Starting on Salesforce too early means paying for admin overhead you can't afford and complexity you don't need.

4. **CRM data quality degrades ~30% per year.** People change jobs, emails bounce, companies rebrand. Budget for ongoing enrichment and cleanup regardless of which CRM you pick.

5. **Switching CRMs is painful but not as painful as staying on the wrong one.** The real cost isn't data migration — it's retraining workflows and losing historical context. Export notes and activity history, not just contact records.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-hubspot` — HubSpot platform help — Smart CRM, Marketing/Sales/Service Hubs, workflows, sequences, API
- `/sales-salesforce` — Salesforce platform help — Sales/Service/Marketing Cloud, Flows, Apex, AppExchange, API
- `/sales-attio` — Attio platform help — custom objects, deal pipelines, automations, email sequences, AI, API
- `/sales-data-hygiene` — CRM data quality — deduplication, record matching, enrichment automation
- `/sales-enrich` — Contact enrichment — emails, phones, company data, bulk enrichment
- `/sales-cadence` — Outbound sequence design — multi-channel cadences across platforms
- `/sales-integration` — Connecting CRM to other tools — webhooks, Zapier, Make, native connectors
- `/sales-lead-score` — Lead scoring model design — dimensions, weights, MQL/SQL thresholds
- `/sales-lead-routing` — Lead routing and assignment — round-robin, territory, score-based
- `/sales-forecast` — Revenue forecasting — pipeline coverage, commit validation
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: First CRM for a seed-stage startup
**User says**: "We're a 4-person SaaS startup, just raised seed, doing mostly inbound from content marketing. Currently tracking leads in Google Sheets. Budget is tight."
**Skill does**: Recommends starting with HubSpot Free (unlimited users, visual pipeline, email logging, live chat) or Attio Free (3 users, custom objects). Explains the spreadsheet-to-CRM transition signals and provides a 2-week migration plan. Notes that HubSpot is better if they want marketing+sales in one tool later; Attio is better if they want flexibility and API-first design.
**Result**: User has a clear recommendation with migration steps and understands the growth path for each option.

### Example 2: Outgrowing a CRM
**User says**: "We've been on Pipedrive for 2 years, now 25 people, and it feels limiting. Should we move to HubSpot or Salesforce?"
**Skill does**: Asks about pain points with Pipedrive, budget, and whether they need marketing automation. For a 25-person team, recommends HubSpot Professional if they need marketing+sales integration, or Attio Pro if they want flexibility and modern UX without the HubSpot tax. Flags that Salesforce is likely overkill at this stage. Provides migration checklist.
**Result**: User understands the trade-offs and has a migration plan.

### Example 3: Spreadsheets vs CRM debate
**User says**: "I'm a solo founder with 30 customers. Do I even need a CRM?"
**Skill does**: Explains that with 30 customers and 1 person, spreadsheets can still work — but recommends starting a free CRM now to build habits. At 50-100 accounts or when hiring the first sales/CS person, a CRM becomes essential. Suggests HubSpot Free or Attio Free as zero-cost starting points.
**Result**: User knows the inflection point and has a no-risk way to start.

## Troubleshooting

### "I picked a CRM but my team won't use it"
**Symptom**: Low adoption, reps still using spreadsheets or email
**Cause**: Usually insufficient training or the CRM doesn't match the actual sales workflow
**Solution**: Pick the CRM that matches how the team already works (pipeline-first for deal-centric teams, inbox-first for relationship-centric teams). Schedule a 1-hour hands-on session, not a slide deck. Make CRM the single source of truth by requiring it for forecasting and commission tracking.

### "HubSpot free is great but I'm worried about vendor lock-in"
**Symptom**: Fear of steep pricing jump when outgrowing free tier
**Cause**: HubSpot's paid tiers jump significantly ($0 → $45-$800+/mo)
**Solution**: Export contacts and deals regularly. Avoid building critical workflows in HubSpot-specific features you can't replicate elsewhere. If budget is a real constraint at scale, evaluate Attio or Zoho before upgrading to HubSpot paid.

### "We have data in multiple systems and nothing syncs"
**Symptom**: Contacts in CRM, deals in spreadsheets, emails in Gmail, notes in Slack
**Cause**: CRM wasn't set up as the single source of truth from the start
**Solution**: Use `/sales-integration` to connect systems. Prioritize email sync (bidirectional) and calendar sync first. Then use `/sales-data-hygiene` to deduplicate and clean records across systems.
