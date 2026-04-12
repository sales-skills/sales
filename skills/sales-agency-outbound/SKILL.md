---
name: sales-agency-outbound
description: "Multi-client outbound for lead gen agencies — infrastructure architecture, client isolation, domain strategy, warmup at scale, white-labeling, unified reporting, client onboarding playbooks, and cross-client operations. Use when one client's domain reputation is dragging down others, new client onboarding takes too long, mailbox warmup isn't scaling across clients, can't isolate sending infrastructure per client, or need a repeatable playbook for agency-wide reporting. Do NOT use for Smartlead-specific platform config (use /sales-smartlead), single-domain deliverability (use /sales-deliverability), or individual campaign strategy (use /sales-cadence)."
argument-hint: "[describe your agency setup — client count, volume, tooling, challenge]"
license: MIT
version: 1.0.0
tags: [sales, outbound, agency, multi-client, lead-generation]
---
# Multi-Client Outbound for Agencies

Help the user architect, scale, and operate outbound infrastructure for a lead generation agency — from client isolation and domain strategy through warmup at scale, onboarding playbooks, and cross-client reporting. This skill is tool-agnostic and covers Smartlead, Instantly, Mailshake, and multi-tool setups.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **How many clients do you serve (or plan to)?**
   - A) Starting out — 1-3 clients
   - B) Growing — 4-10 clients
   - C) Scaled — 10-25 clients
   - D) Enterprise agency — 25+ clients

2. **What's the typical sending volume per client?**
   - A) Light — under 100 emails/day
   - B) Standard — 100-500 emails/day
   - C) High volume — 500-2,000 emails/day
   - D) Varies widely across clients

3. **What tooling are you using?**
   - A) Smartlead (unlimited mailboxes, master inbox)
   - B) Instantly (bulk warmup, simple UI)
   - C) Mailshake (Lead Catcher, CRM integration)
   - D) Apollo (prospecting + sequences)
   - E) Mix of tools — describe
   - F) Haven't decided yet

4. **What's your client onboarding process today?**
   - A) Ad hoc — no standard process
   - B) Have a rough checklist but it's inconsistent
   - C) Documented and repeatable
   - D) Starting from scratch — need to build it

5. **What's your biggest challenge right now?**
   - A) Setting up infrastructure for the first time
   - B) One client's issues affecting others (cross-contamination)
   - C) Scaling — adding clients without proportional ops work
   - D) Reporting — clients want better visibility
   - E) Deliverability across multiple domains/clients
   - F) Something else — describe it

6. **Do you need white-labeling?** (client-facing branding)

7. **What's your team structure?** (solo founder, small team, dedicated account managers per client)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Architecture decisions

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3 — Actionable guidance

Based on the user's challenge, provide specific recommendations for infrastructure isolation, domain strategy, warmup scheduling, client onboarding, reporting setup, or platform-specific implementation. Use the platform guide for reference data, then focus on actionable next steps tailored to their agency setup.

## Gotchas

- **Don't share sending domains across clients.** One client's reputation meltdown (high bounces, spam complaints, blacklisting) poisons all clients sharing that domain. The cost of a $12/year domain is nothing compared to rebuilding reputation for 5 clients.
- **Don't skip per-client warmup.** New domains need their own warmup regardless of mailbox age. Even if you're reusing an established mailbox on a new domain, the domain itself has zero reputation. Follow the full warmup schedule.
- **Don't report vanity metrics.** Report meetings booked and pipeline generated, not opens and clicks. Clients who focus on opens will micromanage subject lines instead of trusting the process. Set expectations during onboarding about which metrics matter.
- **Don't use a single Zapier account for all clients.** Billing, rate limits, and error handling cascade across all zaps in one account. If one client's integration breaks and triggers retries, it can exhaust your Zapier task quota and break every other client's integration. Use separate Zapier accounts or a dedicated integration layer.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-smartlead` — Smartlead platform help (SmartSenders, SmartInfra, campaigns, API)
- `/sales-deliverability` — Domain authentication, warmup schedules, inbox placement
- `/sales-cadence` — Design outbound cadences and email content
- `/sales-prospect-list` — Build targeted prospect lists for client campaigns
- `/sales-integration` — Connect outbound tools to CRM via webhooks, Zapier, or API
- `/sales-mailshake` — Mailshake platform help
- `/sales-reply` — Reply.io platform help (Agency plan with unlimited clients)
- `/sales-woodpecker` — Woodpecker platform help (Agency panel with per-client management)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

- **"First 3 clients on Smartlead"** → Dedicated domains per client (2 each), 3-5 mailboxes per domain via SmartSenders, client workspaces for isolation, staggered warmup plan, Phase 1-3 onboarding checklist
- **"Client blacklisted, other clients' rates dropping"** → Diagnose shared domain/IP as cross-contamination cause, pause affected client, check blacklists, provision new domains, re-warmup, design strict per-client isolation going forward
- **"Build repeatable onboarding process"** → Phase 1-3 playbook (14-21 days), reusable checklist template, handoffs to `/sales-prospect-list`, `/sales-cadence`, `/sales-integration`, client kickoff questionnaire, milestone tracking
