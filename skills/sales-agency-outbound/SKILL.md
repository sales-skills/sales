---
name: sales-agency-outbound
description: "Multi-client outbound for lead gen agencies — infrastructure architecture, client isolation, domain strategy, warmup at scale, white-labeling, unified reporting, client onboarding playbooks, and cross-client operations. Use when setting up agency outbound infrastructure, onboarding new clients, isolating sending domains per client, managing warmup across 20+ mailboxes, building repeatable client onboarding processes, or designing agency-wide reporting. Do NOT use for Smartlead-specific platform config (use /sales-smartlead), single-domain deliverability (use /sales-deliverability), or individual campaign strategy (use /sales-cadence)."
argument-hint: "[describe your agency setup — client count, volume, tooling, challenge]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Multi-Client Outbound for Agencies

Help the user architect, scale, and operate outbound infrastructure for a lead generation agency — from client isolation and domain strategy through warmup at scale, onboarding playbooks, and cross-client reporting. This skill is tool-agnostic and covers Smartlead, Instantly, Mailshake, and multi-tool setups.

## Step 1 — Gather context

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

### Infrastructure model

Choose the right isolation level based on client count, volume, and risk tolerance:

| Model | How it works | Best for | Risk level |
|---|---|---|---|
| **Shared mailboxes** | Agency-owned mailboxes used across clients | Solo operator, 1-2 clients, testing | High — one client's reputation affects all |
| **Dedicated per client** | Each client has their own domains + mailboxes | 3+ clients, any volume | Low — full isolation |
| **Hybrid** | Dedicated domains per client, shared infrastructure (IPs) | Budget-conscious, low-volume clients | Medium — domain-level isolation without IP isolation |

**Recommendation**: Always use **dedicated per client** for domain and mailbox isolation. The cost of a single cross-contamination incident (blacklisted domain, cascading reputation damage) far exceeds the cost of separate domains.

### Domain strategy

| Decision | Recommendation | Rationale |
|---|---|---|
| **Domain ownership** | Client-owned preferred, agency-provisioned acceptable | Client keeps the asset; if they leave, their domain goes with them |
| **Domains per client** | 1 domain per 3-5 mailboxes | Distributes reputation risk; losing one domain doesn't kill the campaign |
| **Domain naming** | {client}mail.com, get{client}.com, try{client}.com | Close to brand but clearly separate from primary domain |
| **Primary domain protection** | Never send cold outbound from the client's primary domain | If outbound domain gets blacklisted, primary email is protected |

**Example**: Client "Acme Corp" (acme.com) gets:
- acmemail.com — 5 mailboxes (jane@, mike@, sarah@, tom@, alex@)
- getacme.com — 5 mailboxes (as backup/rotation domain)
- acme.com — never used for cold outbound

### Warmup at scale

Managing warmup across 20+ mailboxes requires planning:

| Phase | What to do | Timeline |
|---|---|---|
| **Stagger starts** | Don't start all mailboxes on the same day — stagger by 2-3 days per batch of 5 | Days 1-10 |
| **Monitor reputation** | Check warmup reputation scores daily — all mailboxes should reach 80+ before campaign sends | Weeks 1-3 |
| **Gradual activation** | Add warmed mailboxes to campaigns in batches, not all at once | Week 3+ |
| **Ongoing warmup** | Keep warmup running even during active campaigns — it supplements reputation | Continuous |

### Tool selection matrix

| Feature | Smartlead | Instantly | Mailshake |
|---|---|---|---|
| **Unlimited mailboxes** | Yes (all plans) | Yes (Growth plan) | No (plan-based limits) |
| **Built-in warmup** | Ultra Premium Warmup | Warmup pool | No (use external) |
| **Master inbox** | Yes — unified across clients | Limited | No |
| **Client workspaces** | Yes — native isolation | Yes — workspace management | Limited — team member isolation |
| **White-label** | Yes (higher plans) | No | No |
| **API for automation** | Yes | Yes | Yes |
| **Best for agency use** | Full-featured agency platform | Simple multi-client warmup | Single-client with CRM focus |

## Step 3 — Client onboarding playbook

Repeatable checklist for onboarding each new client:

### Phase 1: Infrastructure (Days 1-3)

1. **Domain provisioning**
   - Register 2 outbound domains (primary + backup) per client
   - Point DNS to your email provider
   - Configure SPF, DKIM, DMARC for each domain (→ `/sales-deliverability`)

2. **Mailbox creation**
   - Create 3-5 mailboxes per domain (real names, professional formatting)
   - Connect via OAuth (Gmail/Outlook) or SMTP
   - Set daily limits: 30-50 per mailbox

3. **Warmup scheduling**
   - Enable warmup on all mailboxes immediately
   - Stagger start dates if provisioning 10+ mailboxes
   - Target: 2-3 weeks warmup before first campaign send
   - Monitor warmup reputation daily

### Phase 2: Campaign setup (Days 3-7)

4. **ICP definition + list building** (→ `/sales-prospect-list`)
   - Define target persona with client input
   - Build initial prospect list (200-500 for first campaign)
   - Verify emails before import

5. **Cadence design** (→ `/sales-cadence`)
   - Design email sequence (3-5 steps, 7-14 day cadence)
   - Write email copy with client-approved messaging
   - Set up A/B tests for subject lines

6. **Integration setup** (→ `/sales-integration`)
   - Connect to client's CRM (if applicable)
   - Set up lead forwarding (webhook, Zapier, or email)
   - Configure Slack/email notifications for interested replies

### Phase 3: Launch (Days 14-21)

7. **Go-live checklist**
   - [ ] All mailboxes have 80+ warmup reputation
   - [ ] DNS records verified (SPF/DKIM/DMARC passing)
   - [ ] SmartDelivery or mail-tester.com shows inbox placement
   - [ ] Prospect list verified (<3% expected bounce rate)
   - [ ] Email copy approved by client
   - [ ] CRM/notification integration tested
   - [ ] Daily sending limits configured correctly
   - [ ] Campaign activated with small initial batch (50-100 leads)

## Step 4 — Reporting and operations

### Client-facing metrics

Report what clients actually care about — not vanity metrics:

| Metric | What to report | Cadence |
|---|---|---|
| **Meetings booked** | Total meetings booked, cost per meeting | Weekly |
| **Pipeline generated** | Dollar value of opportunities created | Monthly |
| **Interested replies** | Leads who expressed interest (qualified replies) | Weekly |
| **Reply rate** | Positive reply rate (not total replies) | Weekly |
| **Campaign health** | Active campaigns, leads in pipeline, next steps | Weekly |

**Avoid reporting**: Raw open rates (unreliable with Apple MPP), total sends, click rates (meaningless for cold outbound). Clients who fixate on opens/clicks will micromanage the wrong things.

### Internal ops metrics

Track these internally to spot issues before clients notice:

| Metric | Target | Action if exceeded |
|---|---|---|
| Bounce rate (per client) | <3% | Pause campaign, verify remaining list, investigate domain |
| Warmup reputation (per mailbox) | 80+ | Remove from campaign rotation, investigate |
| Cross-client deliverability | <5% variance in inbox placement | Investigate outlier clients for contamination |
| Mailbox utilization | 60-80% of daily limit | Scale up if >80%, investigate if <40% |
| Warmup pipeline | 2+ weeks ahead of new campaigns | Provision mailboxes earlier |

### Scaling patterns

| Trigger | Action |
|---|---|
| Client reaches daily limit | Add mailboxes (1 per 50 emails/day needed) |
| Client adds new persona | New domain + mailboxes for isolation |
| Bounce rate creeping up | Rotate to fresh domain, investigate list quality |
| New client onboarded | Follow Phase 1-3 playbook (14-21 day ramp) |
| Client churns | Decommission domains (don't reuse for other clients) |

## Step 5 — Platform-specific implementation

### In Smartlead
- **Master inbox**: Unified view across all client campaigns — manage replies from one interface
- **Client workspaces**: Create a workspace per client (Settings > Clients). All campaigns, leads, and sender accounts scoped to the workspace.
- **White-label**: Settings > White Label — custom domain, logo, colors for client-facing access
- **Unified analytics**: Cross-client performance dashboard with per-client drill-down
- **SmartSenders**: Bulk-provision mailboxes per workspace. Warmup runs per-mailbox automatically.

### In Instantly
- **Workspace management**: Create separate workspaces per client for isolation
- **Bulk warmup**: Instantly's warmup pool handles large mailbox counts efficiently
- **Campaign organization**: Name campaigns with client prefix (e.g., "Acme - Q1 VP Eng")
- **Limitation**: No native white-label or master inbox — less agency-friendly than Smartlead

### In Mailshake
- **Team member isolation**: Assign team members per client, but isolation is weaker than workspace-based tools
- **Lead Catcher**: Useful for per-client reply management, but no master inbox across clients
- **CRM integration**: Strong native CRM integration (Salesforce, HubSpot) — good if clients require direct CRM sync
- **Limitation**: Plan-based mailbox limits make scaling expensive for agencies

### In Reply.io
- **Agency plan**: Dedicated Agency plan (~$166/mo) with unlimited clients and unlimited users
- **Client isolation**: Each client gets isolated sequences and contact lists
- **Unified dashboard**: Manage all clients from a single dashboard
- **Built-in warmup**: Warmup for all client mailboxes included
- **API access**: Programmatic client management — create seats, add mailboxes via Master API Key

### Cross-platform setup
- Some agencies use different tools for different clients based on client needs (e.g., Smartlead for high-volume, Mailshake for CRM-heavy clients)
- Standardize reporting across tools — use a shared dashboard (Google Sheets, Looker, or custom) that aggregates metrics from all platforms
- Maintain per-client tool documentation so any team member can pick up any client

## Gotchas

- **Don't share sending domains across clients.** One client's reputation meltdown (high bounces, spam complaints, blacklisting) poisons all clients sharing that domain. The cost of a $12/year domain is nothing compared to rebuilding reputation for 5 clients.
- **Don't skip per-client warmup.** New domains need their own warmup regardless of mailbox age. Even if you're reusing an established mailbox on a new domain, the domain itself has zero reputation. Follow the full warmup schedule.
- **Don't report vanity metrics.** Report meetings booked and pipeline generated, not opens and clicks. Clients who focus on opens will micromanage subject lines instead of trusting the process. Set expectations during onboarding about which metrics matter.
- **Don't use a single Zapier account for all clients.** Billing, rate limits, and error handling cascade across all zaps in one account. If one client's integration breaks and triggers retries, it can exhaust your Zapier task quota and break every other client's integration. Use separate Zapier accounts or a dedicated integration layer.

## Related skills

- `/sales-smartlead` — Smartlead platform help (SmartSenders, SmartInfra, campaigns, API)
- `/sales-deliverability` — Domain authentication, warmup schedules, inbox placement
- `/sales-cadence` — Design outbound cadences and email content
- `/sales-prospect-list` — Build targeted prospect lists for client campaigns
- `/sales-integration` — Connect outbound tools to CRM via webhooks, Zapier, or API
- `/sales-mailshake` — Mailshake platform help
- `/sales-reply` — Reply.io platform help (Agency plan with unlimited clients)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

- **"First 3 clients on Smartlead"** → Dedicated domains per client (2 each), 3-5 mailboxes per domain via SmartSenders, client workspaces for isolation, staggered warmup plan, Phase 1-3 onboarding checklist
- **"Client blacklisted, other clients' rates dropping"** → Diagnose shared domain/IP as cross-contamination cause, pause affected client, check blacklists, provision new domains, re-warmup, design strict per-client isolation going forward
- **"Build repeatable onboarding process"** → Phase 1-3 playbook (14-21 days), reusable checklist template, handoffs to `/sales-prospect-list`, `/sales-cadence`, `/sales-integration`, client kickoff questionnaire, milestone tracking
